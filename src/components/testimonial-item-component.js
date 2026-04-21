class TestimonialItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const name = this.getAttribute('name') || 'Client Name';
        const location = this.getAttribute('location') || 'Location';
        const text = this.getAttribute('text') || '';
        const image = this.getAttribute('image') || 'assets/img/client/testimonial-1.jpg';
        const stars = parseInt(this.getAttribute('stars')) || 5;

        const starIcons = '<li><i class="fa fa-star"></i></li>'.repeat(stars);

        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
                
                :host { display: block; font-family: 'Dosis', sans-serif; }
                
                .single-testimonial {
                    position: relative;
                    padding: 35px 25px;
                    border-radius: 10px;
                    background-color: #fafafa;
                    text-align: center;
                    transition: 0.3s;
                    margin: 10px;
                }

                .rating-box ul {
                    padding: 0;
                    margin: 0 0 12px;
                    list-style: none;
                    display: flex;
                    justify-content: center;
                }

                .rating-box ul li i {
                    color: #ffce39;
                    font-size: 18px;
                    margin: 0 2px;
                }

                .testimonial-content p {
                    color: #333;
                    font-size: 17px;
                    font-style: italic;
                    line-height: 1.8;
                    margin-bottom: 25px;
                }

                .avatar {
                    width: 90px;
                    height: 90px;
                    margin: 0 auto 15px;
                }

                .avatar img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: 5px solid #ffffff;
                    border-left-color: #7b68ee;
                    border-bottom-color: #7b68ee;
                    object-fit: cover;
                }

                .bio-info h3 {
                    color: #333;
                    font-size: 20px;
                    font-weight: 700;
                    margin: 0 0 5px;
                }

                .bio-info span {
                    color: #7b68ee;
                    font-size: 16px;
                    font-weight: 500;
                }
            </style>
            
            <div class="single-testimonial">
                <div class="rating-box">
                    <ul>${starIcons}</ul>
                </div>
                <div class="testimonial-content">
                    <p>${text}</p>
                </div>
                <div class="avatar">
                    <img src="${image}" alt="${name}">
                </div>
                <div class="testimonial-bio">
                    <div class="bio-info">
                        <h3>${name}</h3>
                        <span>${location}</span>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('testimonial-item', TestimonialItem);