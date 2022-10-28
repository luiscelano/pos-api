let cntTBodyOrder =  $('#cnt-tbody-order');
let getHtmlProductInOrder = (object) => {

    return `<tr data-kt-pos-element="item" data-kt-pos-item-price="${object.price}">
            <td class="pe-0">
            <div class="d-flex align-items-center">
            <img src="${object.img}" class="w-50px h-50px rounded-3 me-3" alt="" />
            <span class="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1">${object.name}</span>
            </div>
            </td>
            <td class="pe-0">
            <!--begin::Dialer-->
            <div class="position-relative d-flex align-items-center" data-kt-dialer="true" data-kt-dialer-min="1" data-kt-dialer-max="10" data-kt-dialer-step="1" data-kt-dialer-decimals="0">
            <!--begin::Decrease control-->
            <button type="button" class="btn btn-icon btn-sm btn-light btn-icon-gray-400" data-kt-dialer-control="decrease">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr089.svg-->
            <span class="svg-icon svg-icon-3x">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" />
            </svg>
            </span>
            <!--end::Svg Icon-->
            </button>
            <!--end::Decrease control-->
            <!--begin::Input control-->
            <input type="text" class="form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px" data-kt-dialer-control="input" placeholder="Amount" name="manageBudget" readonly="readonly" value="1" />
            <!--end::Input control-->
            <!--begin::Increase control-->
            <button type="button" class="btn btn-icon btn-sm btn-light btn-icon-gray-400" data-kt-dialer-control="increase">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr087.svg-->
            <span class="svg-icon svg-icon-3x">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
            <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" />
            </svg>
            </span>
            <!--end::Svg Icon-->
            </button>
            <!--end::Increase control-->
            </div>
            <!--end::Dialer-->
            </td>
            <td class="text-end">
            <span class="fw-bold text-primary fs-2" data-kt-pos-element="item-total">${object.price}</span>
            </td>
            </tr>`;
}

$('.add-product-to-order').click(function () {
    let id = $(this).data("id")
    //traer datos con el id y agregar al carrito
    let product = {}
    console.log(id)
    switch (id) {
        case 1:
            product = {
                'id': 1,
                'img': '/assets/media/stock/food/img-2.jpg',
                'name': 'T-Bone Stake',
                'price': 16.50,
            }
            break;
        case 2:
            product = {
                'id': 2,
                'img': '/assets/media/stock/food/img-7.jpg',
                'name': 'T-Bone Stake',
                'price': 12.40,
            }
            break;
        case 3:
            product = {
                'id': 2,
                'img': '/assets/media/stock/food/img-8.jpg',
                'name': 'T-Bone Stake',
                'price': 14.90,
            }
            break;
    }

    let htmlProduct = getHtmlProductInOrder(product)
    cntTBodyOrder.append(htmlProduct)
    console.log(id)
})

$('#bnt-clear-order').click(()=>{
    cntTBodyOrder.html('')
})

$('#btn-payment-order').click(()=>{
    cntTBodyOrder.html('')
})