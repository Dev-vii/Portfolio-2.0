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

cards.forEach((card) => {
    card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (rect.height / 2 - y) / 25;
        const rotateY = (x - rect.width / 2) / 25;

        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('pointerleave', () => {
        card.style.transform = "";
    });
});