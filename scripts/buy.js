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