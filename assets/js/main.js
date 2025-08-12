document.addEventListener('DOMContentLoaded', () => {
    const gradient = document.querySelector('.cursor-gradient');
    
    // Плавное перемещение градиента
    document.addEventListener('mousemove', (e) => {
        gradient.style.left = `${e.clientX}px`;
        gradient.style.top = `${e.clientY}px`;
        gradient.style.opacity = '1';
    });
    
    // Скрыть градиент, если мышь покинула страницу
    document.addEventListener('mouseleave', () => {
        gradient.style.opacity = '0';
    });
});

