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
                    flex: 1 0 20%; /* Ajusta para cerca de 5 logos por linha em desktop */
                    padding: 0 10px;
                }

                .partner-item a {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 25px 20px;
                    border-radius: 10px;
                    border: 2px solid #ededed;
                    margin-bottom: 30px;
                    transition: all 0.4s ease-in-out;
                    background: #fff;
                }

                .partner-item img {
                    max-width: 140px;
                    height: auto;
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
                    transform: scale(1.05);
                }

                @media (max-width: 991px) {
                    :host { flex: 1 0 33.33%; }
                }
                @media (max-width: 575px) {
                    :host { flex: 1 0 50%; }
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