const onInputChange = (event) => {
  const lsCustomer = localStorage.getItem('customerInfo')
  const customerInfo = lsCustomer ? JSON.parse(lsCustomer) : new Object()
  Object.assign(customerInfo, { [event.name]: event.value })
  localStorage.setItem('customerInfo', JSON.stringify(customerInfo))
}

const clearInputs = () => {
  const customerNameInput = document.getElementById('customerName')
  const nitInput = document.getElementById('nit')
  const addressInput = document.getElementById('address')
  customerNameInput.value = ''
  nitInput.value = ''
  addressInput.value = ''
}

$('#bnt-clear-order').click(() => {
  localStorage.removeItem('productItems')
  cntTBodyOrder.html('')
  showOrderSummary()
})

$('#btn-payment-order').click(async () => {
  const lsCustomer = localStorage.getItem('customerInfo')
  const getItems = localStorage.getItem('productItems')
  const customerInfo = lsCustomer ? JSON.parse(lsCustomer) : new Object()
  const productItems = getItems ? Array.from(JSON.parse(getItems)) : []
  const totalItemQuantity = productItems.reduce((prev, curr) => prev + curr.quantity, 0)
  const orderInput = { totalItemQuantity, displayStatus: 'Pendiente' }
  const items = productItems.map(({ productId, title, price, quantity }) => ({
    productId,
    title,
    price,
    quantity
  }))
  Object.assign(orderInput, { ...customerInfo, items })
  try {
    const result = await fetch('/orders', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderInput)
    })
    const response = await result.json()
    if (result.status != 200) throw new Error(response?.message || 'Error inesperado')
    alert('Orden creada correctamente')
    localStorage.removeItem('productItems')
    localStorage.removeItem('customerInfo')
    clearInputs()
    cntTBodyOrder.html('')
    showOrderSummary()
  } catch (error) {
    alert(error.toString())
  }
})
