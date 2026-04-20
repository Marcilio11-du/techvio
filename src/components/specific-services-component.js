class SpecificServiceComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        const text = this.getAttribute('text') || 'Default Service';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }

                .specific-service {
                    position: relative;
                    z-index: 1;
                    color: #404040;
                    font-size: 16px;
                    font-weight: 600;
                    display: block;
                    padding: 13px 15px;
                    border-radius: 5px;
                    border-left: 2px solid #7b68ee;
                    background-color: #ffffff;
                    box-shadow: -1px 3px 20px 0px rgb(82, 90, 101, 0.1);
                    transition: 0.4s;
                    cursor: pointer;
                    overflow: hidden;
                }

                /* Animação: Esquerda para Direita */
                .specific-service::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: -100%; 
                    width: 100%;
                    height: 100%;
                    background-color: #7b68ee;
                    transition: all 0.4s ease;
                    z-index: -1;
                }

                .specific-service p {
                    margin: 0;
                    transition: color 0.4s;
                }

                .specific-service:hover::before {
                    left: 0;
                }

                .specific-service:hover p {
                    color: #ffffff;
                }
            </style>

            <div class="specific-service">
                <p>${text}</p>
            </div>
        `;
    }
}

customElements.define('specific-service', SpecificServiceComponent);