<script>
const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const menuBtns = document.querySelectorAll('.menu-btn');

// Анимация открытия/закрытия меню
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
});

// Закрытие меню при клике на оверлей
overlay.addEventListener('click', () => {
    burgerBtn.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Закрытие меню при клике на пункты меню (опционально)
menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        menu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});
</script>