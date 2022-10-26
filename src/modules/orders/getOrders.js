export const getOrders = async (req, res) => {
  res.status(200).json({
    orders: [{ orderId: 1 }, { orderId: 2 }]
  })
}
