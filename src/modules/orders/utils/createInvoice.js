import { generateQuery } from 'utils/generateQuery'
import { executeQuery } from 'utils/executeQuery'

export const createInvoice = async (input) => {
  const data = {
    customerName: input.customerName,
    address: input.address,
    nit: input.nit
  }
  const query = generateQuery('invoice').insert(data)
  await executeQuery(query)
  const { recordset } = await executeQuery(generateQuery('invoice').selectLastElement('invoiceId'))
  return recordset.length && recordset[0]
}
