class SecondaryButtonComponent extends HTMLElement {
    constructor() {
        super();

        const buttonText = this.getAttribute('text') || 'Secondary Button'; //Define um valor padrão para o texto do botão
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                .secondary-button {
                    background-color: #E0E0E0;
                    font-size: 16px;
                    font-weight: bold;
                    font-family: inherit;
                    color: #333;
                    border: none;
                    padding: 13px 35px;
                    border-radius: 5px;
                    cursor: pointer;
                }

            </style>
            
            <button class="secondary-button">
                ${buttonText}
            </button>
            `;
    }
}

customElements.define('secondary-button-component', SecondaryButtonComponent);