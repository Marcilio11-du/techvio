class ServiceCardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        const iconClass = this.getAttribute('icon') || 'bi bi-gear'; // Fallback para Bootstrap Icon
        const title = this.getAttribute('title') || 'Service Title';
        const icon = this.getAttribute('iconSrc');

        this.shadowRoot.innerHTML = `
            <style>
               
                @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css");
                @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");
                
                
                @import url("../../assets/flaticon.css");

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
                    text-align: left; 
                }

                .single-services-item:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                }

                .services-icon {
                    width: 70px;
                    height: 70px;
                    font-size: 35px;
                    margin-bottom: 20px; 
                    border-radius: 5px;
                    transition: 0.5s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                
                .services-icon i {
                    display: inline-block;
                    line-height: 1;
                }

                .single-services-item:hover .services-icon {
                    transform: rotateY(180deg);
                }

                h3 { font-size: 24px; margin-bottom: 15px; font-weight: 700; color: #404040; }
                p { color: #666; font-size: 16px; margin-bottom: 20px; line-height: 1.6; }

                .read-more {
                    display: inline-block;
                    color: #3E57D0;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 15px;
                    transition: 0.6s;
                }
            </style>

            <div class="single-services-item">
                <div class="services-icon">
                    <img src="${icon}" alt="${title} Icon" style="width: 50px; height: 50px;">
                </div>
                <h3>${title}</h3>
                <p><slot name="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</slot></p>
                <a href="#" class="read-more"><i class="bi bi-arrow-right-short"></i> Read More</a>
            </div>
        `;
    }
}
customElements.define('service-card', ServiceCardComponent);