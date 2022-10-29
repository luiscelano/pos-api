import { generateQuery } from 'utils/generateQuery'
import { executeQuery } from 'utils/executeQuery'
export const checkProductStock = async (req, res, next) => {
  try {
    const items = req.body.items || []
    if (!items.length) throw new Error('No hay productos seleccionados')
    for (const item of Array.from(items)) {
      const query = generateQuery('products').select(null, { productId: item.productId })
      const { recordset } = await executeQuery(query)
      if (!recordset[0]) throw new Error(`El producto con id = ${item.productId} no existe`)
      const { stock } = recordset[0]
      if (stock < item.quantity) throw new Error(`No hay suficiente stock para ${item.title}`)
    }
    next()
  } catch (error) {
    res.status(400).json({
      message: error.toString()
    })
  }
}
