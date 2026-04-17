class TestimonialCardComponent extends HTMLElement {
    constructor() {
        super();

        const avatarImgSrc = this.getAttribute('src') || 'https://via.placeholder.com/150'; 
        const costumerName = this.getAttribute('name') || 'Customer Name';
        const custumerCountry = this.getAttribute('country') || 'Customer Country';

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style>
            .testimonial-card {
                background-color: #f7f7f7;
                padding: 20px;
                border-radius: 10px;
                width: 90%;
                height: 100%;
                align-items: center;
                display: flex;
                flex-direction: column;
            }

            .testimonial-text {
                font-style: italic;
                font-size: 18px;
                justify-content: center;
            }

            .stars {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 15px;
                gap: 5px;

                .avatar {

                }

                p {
                    background-color: #FFD700;
                    font-size: 24px;
                }
            }

        </style>

        <div class="testimonial-card">
            <div class="stars">
                <img src="../assets/star.png" alt="Star Icon" width="24" height="24">
                <img src="../assets/star.png" alt="Star Icon" width="24" height="24">
                <img src="../assets/star.png" alt="Star Icon" width="24" height="24">
                <img src="../assets/star.png" alt="Star Icon" width="24" height="24">
                <img src="../assets/star.png" alt="Star Icon" width="24" height="24">
            </div>
            <p class="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="avatar" style="background-image: url(${avatarImgSrc}); width: 80px; height: 80px; border-radius: 50%; background-size: cover; background-position: center;"></div>
            <div class="testimonial-info">
                <h5>${costumerName}</h5>
                <p>${custumerCountry}</p>
            </div>
        </div>
        `;
    }
}

customElements.define('testimonial-card', TestimonialCardComponent);