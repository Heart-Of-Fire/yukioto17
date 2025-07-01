// Анимация кнопок при загрузке
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'rotate(5deg)';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.transform = '';
    });
});

// Плавный скролл для ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});