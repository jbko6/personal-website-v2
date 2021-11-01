var logo = document.getElementById("logo");

function drawLogo() {
    logo.classList.add("active");
}

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(drawLogo, 300);
})