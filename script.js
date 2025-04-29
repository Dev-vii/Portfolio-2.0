const header = document.getElementById("header")

header.addEventListener('mouseenter', () => {
    header.style.top = "0"
    header.style.transition = "0.5s"
});

header.addEventListener('mouseleave', () => {
    header.style.top = "-35px"
    header.style.transition = "0.5s"
});

const ptech = document.getElementById("techp")


const html = document.getElementById("html").addEventListener('mouseenter', () => {
    ptech.style.display = "block"
    ptech.innerHTML = "HTML5"
})

const css = document.getElementById("css").addEventListener('mouseenter', () => {
    ptech.style.display = "block"
    ptech.innerHTML = "CSS3"
})

const js = document.getElementById("js").addEventListener('mouseenter', () => {
    ptech.style.display = "block"
    ptech.innerHTML = "JavaScript"
})

const git = document.getElementById("git").addEventListener('mouseenter', () => {
    ptech.style.display = "block"
    ptech.innerHTML = "Git e GitHub"
})

const react = document.getElementById("react").addEventListener('mouseenter', () => {
    ptech.style.display = "block"
    ptech.innerHTML = "React.js"
})