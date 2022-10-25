import { orders } from './modules'

export const initAPI = (app) => {
  app.use('/orders', orders)
}
