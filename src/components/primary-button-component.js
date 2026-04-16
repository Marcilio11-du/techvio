class PrimaryButtonComponent extends HTMLElement {
    constructor() {
        super();

        const buttonText = this.getAttribute('text') || 'Primary Button'; //Define um valor padrão para o texto do botão
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                .primary-button {
                    background-color: #3E57D0;
                    font-size: 16px;
                    font-weight: bold;
                    font-family: inherit;
                    color: white;
                    border: none;
                    padding: 13px 35px;
                    border-radius: 5px;
                    cursor: pointer;
                    box-shadow: 0 7px 25px rgb(123, 104, 238, 0.25);
                }

            </style>
            
            <button class="primary-button">
                ${buttonText}
            </button>
            `;
    }
}

customElements.define('primary-button-component', PrimaryButtonComponent);