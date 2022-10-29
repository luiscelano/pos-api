const ProductCard = (product) => {
  const obj = JSON.stringify(product)
  return `
<div class="card card-flush flex-row-fluid p-6 pb-5 bg-hover-light-secondary cursor-pointer add-product-to-order" data-id=${
    product.productId
  } style="max-width: 250px;" onClick='addProductToCart(${obj})'>
<!--begin::Body-->
<div class="card-body text-center">
  <!--begin::Food img-->
  <img src=${product.imageUrl} class="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px" alt="" />
  <!--end::Food img-->
  <!--begin::Info-->
  <div class="mb-2">
    <!--begin::Title-->
    <div class="text-center">
      <span class="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">${product.title}</span>
      <span class="text-gray-400 fw-semibold d-block fs-6 mt-n1">${product?.category}</span>
    </div>
    <!--end::Title-->
  </div>
  <!--end::Info-->
  <!--begin::Total-->
  <span class="text-success text-end fw-bold fs-1">${currencyFormat(product.price)}</span>
  <!--end::Total-->
</div>
<!--end::Body-->
</div>
`
}
;(async () => {
  const result = await fetch('/products')
  const response = await result.json()
  let productItemsContainer = $('#productItems')
  for (const product of Array.from(response.products)) {
    productItemsContainer.append(ProductCard(product))
  }
  const getItems = localStorage.getItem('productItems')
  const productItems = getItems ? Array.from(JSON.parse(getItems)) : []
  cntTBodyOrder.html('')
  for (const product of productItems) {
    cntTBodyOrder.append(getHtmlProductInOrder(product))
  }
  showOrderSummary()
})()
