const header = document.getElementById("header")

header.addEventListener('mouseenter', () => {
    header.style.top = "5px"
    header.style.transition = "0.5s"
});

header.addEventListener('mouseleave', () => {
    header.style.top = "-35px"
    header.style.transition = "0.5s"
});