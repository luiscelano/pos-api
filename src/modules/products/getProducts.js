import { executeQuery } from 'utils/executeQuery'
import { generateQuery } from 'utils/generateQuery'

export const getProducts = async (__, res) => {
  try {
    const query = generateQuery('products').select()
    const { recordset, rowsAffected } = await executeQuery(query)
    res.status(200).json({ message: 'ok', count: rowsAffected[0], products: recordset })
  } catch (error) {
    res.status(400).json({ message: error.toString() })
  }
}
