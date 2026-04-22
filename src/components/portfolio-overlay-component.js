class PortfolioOverlay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const category = this.getAttribute('category') || 'App Store | Social Media';
        const title = this.getAttribute('title') || 'Creative Web Design';
        const link = this.getAttribute('link') || '#';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    position: absolute;
                    z-index: 5;
                    left: 15px;
                    right: 15px;
                    bottom: -15px; 
                    display: flex;
                    align-items: stretch;
                    background: #ffffff;
                    border-radius: 5px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    font-family: 'Dosis', sans-serif;
                    min-height: 100px; /* Altura aumentada para dar mais espaço */
                }

                :host-context(.portfolio-item:hover) {
                    bottom: 20px;
                    opacity: 1;
                    visibility: visible;
                }

                .card-content {
                    flex: 1;
                    padding: 20px 25px; 
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    justify-content: center;
                    overflow: hidden;
                }

                .card-tag {
                    font-size: 13px; 
                    font-weight: 700;
                    color: #7b68ee;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    transform: translateX(-30px);
                    opacity: 0;
                    transition: all 0.5s ease 0.1s;
                }

                .card-title {
                    font-size: 22px; 
                    font-weight: 800;
                    color: #1b1b1b;
                    line-height: 1.2;
                    transform: translateX(30px);
                    opacity: 0;
                    transition: transform 0.5s ease 0.15s, opacity 0.5s ease 0.15s, color 0.3s ease;
                }

                /* Mudança de cor no hover do portfólio */
                :host-context(.portfolio-item:hover) .card-title {
                    color: #7b68ee; 
                    transform: translateX(0);
                    opacity: 1;
                }

                .card-arrow {
                    width: 65px; /* Seta maior para acompanhar a altura */
                    background: #7b68ee;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    transform: translateX(50px);
                    opacity: 0;
                    transition: all 0.5s ease 0.2s, background 0.3s ease;
                }

                :host-context(.portfolio-item:hover) .card-tag,
                :host-context(.portfolio-item:hover) .card-arrow {
                    transform: translateX(0);
                    opacity: 1;
                }

                .card-arrow:hover {
                    background: #6a56e0;
                }

                .card-arrow svg {
                    width: 24px;
                    height: 24px;
                    stroke: #ffffff;
                    stroke-width: 2.5;
                    fill: none;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                }
            </style>
            
            <div class="card-content">
                <span class="card-tag">${category}</span>
                <span class="card-title">${title}</span>
            </div>
            <a href="${link}" class="card-arrow">
                <svg viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        `;
    }
}

customElements.define('portfolio-overlay', PortfolioOverlay);