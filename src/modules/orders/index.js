import express from 'express'
import { createOrder } from 'modules/orders/createOrder'
import { getOrders } from 'modules/orders/getOrders'
import { checkProductStock } from 'middlewares/checkProductStock'

const router = express.Router()

router.post('/', checkProductStock, createOrder)
router.get('/', getOrders)

module.exports = router
