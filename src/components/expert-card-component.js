class ExertCardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const expertName = this.getAttribute('name') || 'Expert Name';
        const expertRole = this.getAttribute('role') || 'Expert Role';
        const expertPhoto = this.getAttribute('src') || 'https://via.placeholder.com/150';

        this.shadowRoot.innerHTML = `
        <styles>
            .expert-card {
                background-color: #ffffff;
            }
        </style>

        <div class="expert-card">
            <img src="${expertPhoto}" alt="${expertName}" style="width: 100%; height: auto; border-radius: 8px;">
            <h3>${expertName}</h3>
            <p>${expertRole}</p>
        </div>
        `;
    }
}

customElements.define('expert-card', ExertCardComponent);