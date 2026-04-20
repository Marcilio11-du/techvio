class ServiceCardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        const iconClass = this.getAttribute('icon') || 'flaticon-development';
        const title = this.getAttribute('title') || 'Service Title';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin-bottom: 30px;
                }
                .single-services-item {
                    background-color: #fff;
                    padding: 35px 30px;
                    border-radius: 5px;
                    transition: all 0.4s ease-in-out;
                    position: relative;
                    z-index: 1;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
                    font-family: 'Dosis', sans-serif;
                }

                .single-services-item:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                }

                .services-icon {
                    width: 70px;
                    height: 70px;
                    line-height: 70px;
                    background-color: #fff4f0; 
                    color: #ff6a28; 
                    font-size: 35px;
                    margin: 0 auto 20px;
                    border-radius: 5px;
                    transition: 0.5s;
                }

                
                .single-services-item:hover .services-icon {
                    transform: rotateY(180deg);
                    background-color: #ff6a28;
                    color: #fff;
                }

                h3 {
                    font-size: 24px;
                    margin-bottom: 15px;
                    font-weight: 700;
                    color: #404040;
                }

                p {
                    color: #666;
                    font-size: 16px;
                    margin-bottom: 20px;
                    line-height: 1.6;
                }

                .read-more {
                    display: inline-block;
                    color: #3E57D0;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 15px;
                    transition: 0.3s;
                }

                .read-more:hover {
                    letter-spacing: 1px;
                }
            </style>

            <div class="single-services-item">
                <div class="services-icon">
                    <slot name="icon">
                        <i class="${iconClass}"></i>
                    </slot>
                </div>
                <h3>${title}</h3>
                <p><slot name="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</slot></p>
                <a href="#" class="read-more">Read More <i class="bi bi-arrow-right-short"></i></a>
            </div>
        `;
    }
}
customElements.define('service-card', ServiceCardComponent);