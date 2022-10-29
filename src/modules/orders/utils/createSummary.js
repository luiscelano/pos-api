import { generateQuery } from 'utils/generateQuery'
import { executeQuery } from 'utils/executeQuery'
import { getOrderSummary } from './getOrderSummary'

export const createSummary = async (input) => {
  const data = getOrderSummary(input)

  const query = generateQuery('orderSummary').insert(data)
  await executeQuery(query)
  const { recordset } = await executeQuery(generateQuery('orderSummary').selectLastElement('orderSummaryId'))
  return recordset.length && recordset[0]
}
