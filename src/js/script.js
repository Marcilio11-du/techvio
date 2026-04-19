document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
            navbar.style.padding = "10px 0";
            navbar.style.backgroundColor = "#ffffff";
        } else {
            navbar.classList.remove('shadow-sm');
            navbar.style.padding = "20px 0";
        }
    });
});