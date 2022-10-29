const currencyFormat = (number) => {
  return 'Q.'.concat(number.toFixed(2))
}
const showOrderSummary = () => {
  const getItems = localStorage.getItem('productItems')
  const productItems = getItems ? Array.from(JSON.parse(getItems)) : []
  const total = productItems.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)

  document.getElementById('orderSummary').innerHTML = `
      <div class="d-flex flex-stack bg-success rounded-3 p-6 mb-11">
      <!--begin::Content-->
      <div class="fs-6 fw-bold text-white">
          <span class="d-block lh-1 mb-2">Subtotal</span>
          <span class="d-block fs-2qx lh-1">Total</span>
      </div>
      <!--end::Content-->
      <!--begin::Content-->
      <div class="fs-6 fw-bold text-white text-end">
          <span class="d-block lh-1 mb-2" data-kt-pos-element="total">${currencyFormat(total)}</span>
          <span class="d-block fs-2qx lh-1" data-kt-pos-element="grant-total">${currencyFormat(total)}</span>
      </div>
      <!--end::Content-->
  </div>
      `
}
