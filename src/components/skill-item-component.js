class SkillItemComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        const text = this.getAttribute('text') || 'Skill';
        const percentage = this.getAttribute('percentage') || '0%';

        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@600&display=swap');
                
                .skill-item {
                    margin-bottom: -20px;
                    font-family: 'Dosis', sans-serif;
                }
                h6 {
                    font-size: 17px;
                    font-weight: 600;
                    margin-bottom: 12px;
                    color: #404040;
                    display: flex;
                    justify-content: space-between;
                }
                .skill-progress {
                    height: 8px;
                    width: 100%;
                    background-color: #ddddff;
                    border-radius: 5px;
                    position: relative;
                    overflow: hidden;
                }
                .progress-bar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    background-color: #7b68ee;
                    border-radius: 5px;
                    width: 0; 
                    transition: width 1.2s cubic-bezier(0.1, 0.5, 0.5, 1);
                }
            </style>
            <div class="skill-item">
                <h6>${text} <span>${percentage}</span></h6>
                <div class="skill-progress">
                    <div class="progress-bar"></div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = this.shadowRoot.querySelector('.progress-bar');
                    bar.style.width = this.getAttribute('percentage');
                    observer.unobserve(this); 
                }
            });
        }, { threshold: 0.5 });

        observer.observe(this);
    }
}
customElements.define('skill-item', SkillItemComponent);