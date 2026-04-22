class PrimaryButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const text = this.getAttribute('text') || 'Click Me';
        const link = this.getAttribute('href') || '#';
        const type = this.getAttribute('variant') || 'primary'; 
        
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: inline-block; }
                
                .btn {
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                    font-size: 16px;
                    font-weight: 600;
                    text-align: center;
                    padding: 13px 35px;
                    border-radius: 5px;
                    display: inline-block;
                    text-decoration: none;
                    border: none;
                    cursor: pointer;
                    transition: 0.4s;
                    font-family: 'Dosis', sans-serif;
                    box-shadow: 0 7px 25px rgba(123, 104, 238, 0.25);
                }

                .primary {
                    background-color: #7b68ee;
                    color: #ffffff;
                }

                
                .outline {
                    background-color: #ffffff;
                    color: #7b68ee;
                }

                .btn span {
                    position: absolute;
                    z-index: -1;
                    width: 0;
                    height: 0;
                    display: block;
                    border-radius: 50%;
                    background-color: #3e57d0;
                    transform: translate(-50%, -50%);
                    transition: width 0.5s ease-in-out, height 0.5s ease-in-out;
                }

                .btn:hover {
                    color: #fff;
                }

                .btn:hover span {
                    width: 562.5px;
                    height: 562.5px;
                }
            </style>
            <a href="${link}" class="btn ${type === 'outline' ? 'outline' : 'primary'}">
                ${text}
                <span></span>
            </a>
        `;

        this.initAnimation();
    }

    initAnimation() {
    const btn = this.shadowRoot.querySelector('.btn');
    const span = this.shadowRoot.querySelector('span');

    const updatePos = (e) => {
        const rect = btn.getBoundingClientRect();
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
    };

    btn.addEventListener('mouseenter', updatePos);
    btn.addEventListener('mouseleave', updatePos);
}
}
customElements.define('primary-button', PrimaryButton);