// Função de Scroll da Navbar
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky-active');
    } else {
        navbar.classList.remove('sticky-active');
    }
}

window.addEventListener('scroll', handleNavbarScroll);

document.addEventListener('DOMContentLoaded', () => {
    
    if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
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
                "detect_on": "window",
                events: { onhover: { enable: true, mode: "grab" } }
            },
            retina_detect: true
        });
    }

    const bannerImg = document.querySelector(".banner-image");
    if (bannerImg && typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(bannerImg, {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.3,
        });
    }

    // Filtro das Imagens no Portfólio 
    const filterButtons = document.querySelectorAll('.filter');
    const portfolioItems = document.querySelectorAll('.portfolio-grid-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentActive = document.querySelector('.filter-active');
            if (currentActive) currentActive.classList.remove('filter-active');
            button.classList.add('filter-active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });

    // Lógica dos Contadores (Intersection Observer)
    const counterSection = document.querySelector('#counters');
    const counters = document.querySelectorAll('counter-item');
    let started = false;

    if (counterSection && counters.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !started) {
                    counters.forEach(c => {
                        if (typeof c.startCounting === 'function') {
                            c.startCounting();
                        }
                    });
                    started = true;
                }
            });
        }, { threshold: 0.3 });

        observer.observe(counterSection);
    }

    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 1000, 
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1000: { items: 3 }
            }
        });
    }

    // Lógica para o botão Go Top
    const goTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            goTopBtn.classList.add('active');
        } else {
            goTopBtn.classList.remove('active');
        }
    });

    goTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    handleNavbarScroll();
});