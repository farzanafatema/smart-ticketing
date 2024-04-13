function scrollToTicket(elementId) {
    const ticketSection = document.getElementById(elementId)
    ticketSection.scrollIntoView();
}
// alert
function alertShow(count) {
    if (count % 4 === 0) {
        alert("You can only buy four tickets");
    }
}
// function showHiddenBtn(elementId) {
//     const hiddenBtn = document.getElementById(elementId);
//     hiddenBtn.classList.remove('hidden')
// }
// seat background
