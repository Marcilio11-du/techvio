class CounterItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._targetValue = parseInt(this.getAttribute('number')) || 0;
        this._currentValue = 0;
        this._duration = 2000; 
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || 'Heading';
        const suffix = this.getAttribute('suffix') || '+';
        
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; text-align: center; }
                .counter-contents h2 {
                    color: #fff;
                    font-size: 45px;
                    font-weight: 700;
                    margin-bottom: 5px;
                    word-spacing: -5px;
                }
                .counter-contents h3 {
                    color: #fff;
                    font-size: 20px;
                    font-weight: 700;
                    margin: 0;
                    font-family: 'Dosis', sans-serif;
                }
            </style>
            <div class="counter-contents">
                <h2>
                    <span id="number">0</span><span>${suffix}</span>
                </h2>
                <h3>${title}</h3>
            </div>
        `;
    }

    startCounting() {
        const span = this.shadowRoot.getElementById('number');
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / this._duration, 1);
            

            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            this._currentValue = Math.floor(easeProgress * this._targetValue);
            span.textContent = this._currentValue;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                span.textContent = this._targetValue;
            }
        };

        requestAnimationFrame(animate);
    }
}
customElements.define('counter-item', CounterItem);