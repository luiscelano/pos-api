import express from 'express'
import { createOrder } from 'modules/orders/createOrder'
const router = express.Router()

console.log('orders initialized')
router.post('/', createOrder)

module.exports = router
