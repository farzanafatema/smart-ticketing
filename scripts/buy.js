// apply btn
function showApplyBtn(event) {
    if (event === 'NEW15' || event === 'Couple 20') {
        showHiddenBtn('btnApply');
    }
}

function buyNow(elementId) {
    scrollToTicket(elementId);
}