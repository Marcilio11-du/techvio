// 1. Função de Scroll da Navbar
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky-active');
    } else {
        navbar.classList.remove('sticky-active');
    }
}

window.addEventListener('scroll', handleNavbarScroll, () => {
    
    //Efeito de Rotação dos Ícones dos Cards de Serviços
    const icons = document.querySelectorAll('service-card');

    icons.forEach(card => {
        const shadow  = card.shadowRoot;

        if(shadow) {
            const iconDiv = shadow.querySelector('.services-icon');

            const rotation = (window.scrollY / 10) % 360;

            iconDiv.style.transform = rotate(${rotation}deg);
        }
    
    });
});


document.addEventListener('DOMContentLoaded', () => {
    
    // Partículas (Densidade média: 50)
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.4, random: true },
                size: { value: 5, random: true },
                line_linked: { 
                    enable: true, 
                    distance: 120, 
                    color: "#ffffff", 
                    opacity: 0.2, 
                    width: 0.2 
                },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false }
            },
            interactivity: {
                events: { onhover: { enable: true, mode: "grab" } }
            },
            retina_detect: true
        });
    }

    // Efeito Tilt na Imagem da Hero Section
    const bannerImg = document.querySelector(".banner-image");
    if (bannerImg && typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(bannerImg, {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.3,
        });
    }

    handleNavbarScroll();
});