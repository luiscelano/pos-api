import { createInvoice, createOrderItems, createSummary } from './utils'
import { generateQuery } from 'utils/generateQuery'
import { executeQuery } from 'utils/executeQuery'

export const createOrder = async (req, res) => {
  try {
    // creates a enrolled invoice
    const { invoiceId, ...invoiceData } = await createInvoice(req.body)
    // creates a order summary
    const { orderSummaryId, ...summaryData } = await createSummary(req.body)

    const orderInput = { ...req.body }
    delete orderInput.items
    delete orderInput.customerName
    delete orderInput.nit
    delete orderInput.address
    Object.assign(orderInput, { invoiceId, orderSummaryId })

    const query = generateQuery('orders').insert(orderInput)
    await executeQuery(query)
    //set the current orderNumber
    const { recordset } = await executeQuery(generateQuery('orders').selectLastElement('orderId'))
    const { orderId, ...orderData } = recordset.length && recordset[0]
    await executeQuery(generateQuery('orders').update({ orderNumber: orderId }, { orderId }))

    const createdItems = await createOrderItems(req.body.items, { orderId, invoiceId })

    const output = {
      orderId,
      ...orderData,
      orderNumber: orderId,
      items: createdItems,
      orderSummary: { ...summaryData, orderSummaryId },
      invoice: { ...invoiceData, invoiceId }
    }
    res.status(200).json(output)
  } catch (error) {
    res.status(400).json({
      message: error.toString()
    })
  }
}
