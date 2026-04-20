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
                    z-index: 2;
                    left: 10px;
                    right: 10px;
                    bottom: -100px; 
                    padding: 15px 20px;
                    border-radius: 5px;
                    background-color: #ffffff;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                :host-context(.portfolio-item:hover) {
                    bottom: 15px;
                    opacity: 1;
                    visibility: visible;
                }

                .info {
                    overflow: hidden;
                    flex: 1;
                }

                p {
                    color: #7b68ee;
                    font-size: 14px;
                    font-weight: 700;
                    margin: 0;
                    transform: translateX(-30px); 
                    opacity: 0;
                    transition: all 0.5s ease 0.1s;
                }

                h3 {
                    color: #1b1b1b;
                    font-size: 18px;
                    font-weight: 700;
                    margin: 5px 0 0 0;
                    transform: translateX(30px); 
                    opacity: 0;
                    transition: all 0.5s ease 0.1s;
                }

                :host-context(.portfolio-item:hover) p,
                :host-context(.portfolio-item:hover) h3 {
                    transform: translateX(0);
                    opacity: 1;
                }

                .portfolio-link-icon {
                    background-color: #7b68ee;
                    color: white;
                    width: 45px;
                    height: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 5px;
                    text-decoration: none;
                    font-size: 20px;
                    margin-left: 15px;
                    transform: scale(0.5);
                    opacity: 0;
                    transition: all 0.4s ease 0.2s;
                }

                :host-context(.portfolio-item:hover) .portfolio-link-icon {
                    transform: scale(1);
                    opacity: 1;
                }
            </style>
            
            <div class="info">
                <p>${category}</p>
                <h3>${title}</h3>
            </div>
            <a href="${link}" class="portfolio-link-icon">→</a>
        `;
    }
}
customElements.define('portfolio-overlay', PortfolioOverlay);