class PartnerItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const img = this.getAttribute('image') || '';
        const link = this.getAttribute('link') || '#0';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    /* Desktop: 5 itens por linha (100 / 5 = 20%) */
                    /* Usamos flex-grow: 0 para ele não esticar e ocupar a linha toda */
                    flex: 0 0 20%; 
                    padding: 0 15px;
                    box-sizing: border-box;
                }

                .partner-item a {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 120px; /* Altura fixa para alinhar as bordas */
                    border-radius: 10px;
                    border: 2px solid #ededed;
                    margin-bottom: 30px;
                    transition: all 0.4s ease-in-out;
                    background: #fff;
                    text-decoration: none;
                }

                .partner-item img {
                    max-width: 120px;
                    max-height: 60px;
                    object-fit: contain;
                    filter: grayscale(100%);
                    opacity: 0.6;
                    transition: all 0.4s ease-in-out;
                }

                .partner-item a:hover {
                    border-color: #7b68ee;
                    box-shadow: 0px 10px 30px rgba(123, 104, 238, 0.1);
                    transform: translateY(-5px);
                }

                .partner-item a:hover img {
                    filter: grayscale(0%);
                    opacity: 1;
                }

                /* Tablet: 3 itens por linha */
                @media (max-width: 991px) {
                    :host { flex: 0 0 33.33%; }
                }

                /* Mobile: 2 itens por linha (ou 1 se preferires 100%) */
                @media (max-width: 575px) {
                    :host { flex: 0 0 50%; }
                }
            </style>
            <div class="partner-item">
                <a href="${link}">
                    <img src="${img}" alt="partner image">
                </a>
            </div>
        `;
    }
}
customElements.define('partner-item', PartnerItem);