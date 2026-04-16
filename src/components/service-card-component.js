class ServiceCardComponent extends HTMLElement {
    constructor() {
        super();
        const imageSource = this.getAttribute('src') || '../assets/default-service-image.png'; // Define um valor padrão para a fonte da imagem
        const title = this.getAttribute('title') || 'Default Service Title'; // Define um valor padrão para o título

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                .service-card {
                    /* Estilos para o cartão de serviço */
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    padding: 35px 30px;
                    margin: 0px 12px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    align-items: left;
                }
            </style>

            <div class="service-card">
                <img src="${imageSource}" alt="Service Image" class="service-image">
                <h3 class="service-title">${title}</h3>
                <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                <a href="#" class="service-link">Read More</a>
            </div>
        `;
    }
}
customElements.define('service-card', ServiceCardComponent);