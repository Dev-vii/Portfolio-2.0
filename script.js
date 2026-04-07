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
