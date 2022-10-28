import { orders, products } from './modules'
export const initAPI = (app) => {
  app.use('/orders', orders)
  app.use('/products', products)
}
