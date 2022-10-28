import express from 'express'
import { createOrder } from 'modules/orders/createOrder'
import { getOrders } from 'modules/orders/getOrders'

const router = express.Router()

router.post('/', createOrder)
router.get('/', getOrders)

module.exports = router
