import { createInvoice, createOrderItems, createSummary } from './utils'
import { generateQuery } from 'utils/generateQuery'
import { executeQuery } from 'utils/executeQuery'

export const createOrder = async (req, res) => {
  try {
    // creates a enrolled invoice
    const { invoiceId } = await createInvoice(req.body)
    // creates a order summary
    const { orderSummaryId } = await createSummary(req.body)

    const orderInput = { ...req.body }
    Object.assign(orderInput, { invoiceId, orderSummaryId })

    const query = generateQuery('orders').insert(orderInput)
    await executeQuery(query)
    const { recordset } = await executeQuery(generateQuery('orders').selectLastElement('orderId'))
    const { orderId } = recordset.length && recordset[0]

    const result = await createOrderItems(req.body.items, { orderId, invoiceId })
    res.send('createOrder module')
  } catch (error) {
    res.status(400).json({
      message: error.toString()
    })
  }
}
