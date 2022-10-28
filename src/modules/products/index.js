import express from 'express'
import { createProduct } from 'modules/products/createProduct'
import { getProducts } from 'modules/products/getProducts'

const router = express.Router()

router.post('/', createProduct)
router.get('/', getProducts)

module.exports = router
