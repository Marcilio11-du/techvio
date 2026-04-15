class PorfolioRedirectComponent extends HTMLElement {
    constructor() {
        super();

    this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>

                div {
                    background-color: #F5F5F5;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .info {
                    padding: 5px;
                }

                .btn-portolofio {}

            </style>
            
            <div>
                <div class="info">
                <p>App Store | Social Media </p>
                <h5>Creative  Web Design</h5>
                </div>
                <div class="btn-portolofio">
                    <p>&#x2192;</p>
                </div>
            </div>
            `;
    }
}

customElements.define('portfolio-redirect', PorfolioRedirectComponent);