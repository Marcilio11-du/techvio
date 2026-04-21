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
                    flex: 0 0 20%; 
                    padding: 0 15px;
                    box-sizing: border-box;
                }

                .partner-item a {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 120px;
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
                }
                
                @media (max-width: 991px) {
                    :host { flex: 0 0 33.33%; }
                }

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