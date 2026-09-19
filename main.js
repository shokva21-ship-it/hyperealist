const header_button = document.getElementById("button-header");

const ul_header = document.getElementById("ul-header");

header_button.addEventListener("click", function () {
    header_button.style.display = "none";
    ul_header.style.visibility = "visible";
});
