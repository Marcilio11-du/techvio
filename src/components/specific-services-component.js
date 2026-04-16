class SpecificServiceComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        const text = this.getAttribute('text') || 'Default TextService';

        this.shadowRoot.innerHTML = `
            <style>
                .specific-service {
                        background-color: #ffffff;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        border-radius: 8px;
                        width: 100%;
                        border-left: 2px solid #3E57D0;
                        margin-bottom: 20px;
                    }
            </style>

            <div class="specific-service">
                <p>${text}</p>
            </div>
        `;
    }
}

customElements.define('specific-service', SpecificServiceComponent);