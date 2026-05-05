// Transformar scroll vertical em horizontal
document.addEventListener('wheel', (e) => {
    // Impedir o scroll vertical padrão
    e.preventDefault();

    // Converter movimento vertical em movimento horizontal com multiplicador
    window.scrollBy({
        left: e.deltaY * 8,
        top: 0,
        behavior: 'smooth'
    });
}, { passive: false });

// Interação de cartão com mouse

const cards = document.querySelectorAll('#tecs .tools li');

window.addEventListener("pointermove", (e) => {
    const { clientX, clientY } = e;

    const centerX = (window.innerHeight / 2 - clientY) / 25;
    const centerY = (clientX - window.innerWidth / 2) / 25;

    cards.forEach((card) => {
        card.style.transform = `rotateX(${centerX}deg) rotateY(${centerY}deg)`;
    });
});