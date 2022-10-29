import { executeQuery } from 'utils/executeQuery'
import { generateQuery } from 'utils/generateQuery'

export const createOrderItems = async (items, ids) => {
  const result = new Array()
  for (const item of items) {
    const query = await generateQuery('orderItems').insert({ ...item, ...ids })
    await executeQuery(query)
    const { recordset } = await executeQuery(generateQuery('orderItems').selectLastElement('orderItemId'))
    if (recordset.length) result.push(recordset[0])
  }
  return result
}
