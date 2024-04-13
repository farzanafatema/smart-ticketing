//next btn
function success() {
    document.getElementById('nav').classList.add('hidden')
    document.getElementById('banner').classList.add('hidden')
    document.getElementById('cupon').classList.add('hidden')
    document.getElementById('buyTicket').classList.add('hidden')
    document.getElementById('footer').classList.add('hidden')
    document.getElementById('foot').classList.add('hidden')
    document.getElementById('success').classList.remove('hidden')

}
document.getElementById('next').addEventListener('click', success)
// clear input field
function clearInputFields() {
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("text").value = "";
}



//continue btn
function Continue(rowIndex) {
    document.getElementById('nav').classList.remove('hidden')
    document.getElementById('banner').classList.remove('hidden')
    document.getElementById('cupon').classList.remove('hidden')
    document.getElementById('buyTicket').classList.remove('hidden')
    document.getElementById('footer').classList.remove('hidden')
    document.getElementById('foot').classList.remove('hidden')
    document.getElementById('success').classList.add('hidden')
    // input field
    clearInputFields()
    // dynamic row
    const tableBody = document.getElementById('table-body');
    const numToRemove = 4;
    let rowsRemoved = 0;
    while (tableBody.firstChild && rowsRemoved <= numToRemove) {
        tableBody.removeChild(tableBody.firstChild);
        rowsRemoved++;
    }
    if (count % 4 === 0) {
        alert("You can only buy four tickets");
    }

}
document.getElementById('continue').addEventListener('click', Continue)

//enable btn
function handleCouponInput() {
    const couponInput = document.getElementById('couponInput');
    const applyBtn = document.getElementById('btnApply');
    if (couponInput.value === "NEW15" || couponInput.value === "Couple 20") {
        applyBtn.classList.remove('btn-disabled');

    } else {
        applyBtn.classList.add('btn-disabled')
    }
}
document.getElementById('couponInput').addEventListener('input', handleCouponInput);



//discount price update
function calculateDiscountedTotal(couponCode) {
    const beforeDiscount = parseFloat((document.getElementById('grand-Price').innerText))
    const showdiscount = parseFloat(document.getElementById('Discount-price'))
    if (couponCode === "Couple 20") {
        const discountPrice = beforeDiscount * .20;
        const discountedPrice = beforeDiscount - discountPrice;
        document.getElementById('grand-Price').innerText = discountedPrice;
        document.getElementById('Discount-price').innerText = discountPrice;
        document.getElementById('cuponfield').classList.add('hidden')
    } else if (couponCode === "NEW15") {
        const discountPrice = beforeDiscount * .15;
        const discountedPrice = beforeDiscount - discountPrice;
        document.getElementById('grand-Price').innerText = discountedPrice;
        document.getElementById('Discount-price').innerText = discountPrice;
        document.getElementById('cuponfield').classList.add('hidden')

    }
}
document.getElementById('btnApply').addEventListener('click', function () {
    const couponCode = document.getElementById('couponInput').value;
    calculateDiscountedTotal(couponCode);
});



// scroll btn
function buyNow(elementId) {
    scrollToTicket(elementId);
}