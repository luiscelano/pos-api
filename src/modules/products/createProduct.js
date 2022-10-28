import { executeQuery } from 'utils/executeQuery'
import { generateQuery } from 'utils/generateQuery'

export const createProduct = async (req, res) => {
  try {
    const query = generateQuery('products').insert(req.body)
    await executeQuery(query)

    const { recordset } = await executeQuery(generateQuery('products').selectLastElement('productId'))
    res.status(200).json({ message: 'ok', product: recordset })
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: error.toString() })
  }
}
