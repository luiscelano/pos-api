export const getOrderSummary = (object) => {
  const itemTotal = Array.from(object.items).reduce((prev, curr) => prev + curr.quantity * curr.price, 0)

  return {
    total: itemTotal,
    itemTotal,
    fulfillmentTotal: 0,
    discountTotal: 0
  }
}
