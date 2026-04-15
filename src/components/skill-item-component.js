class SkillItemComponent extends HTMLElement {
    constructor() {
        super();

        const text = this.getAttribute('text');
        const style = this.getAttribute('style');
        const percentageProgress = this.getAttribute('data-value')

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                .skill-item {
                    margin-bottom: 20px;

                    h6 {
                        position: relative;
                        z-index: 4;
                        font-size: 16px;
                        font-weight: 600;
                        text-transform: capitalize;
                        margin-bottom: 10px;

                        em {
                            float: right;
                            font-size: 15px;
                            font-style: normal;
                        }
                    }

                    .skill-progress {
                        position: relative;
                        height: 8px;
                        border-radius: 5px;
                        background-color: #ddddff;
                        
                        .progress {
                            position: absolute;
                            top: 0;
                            left: 0;
                            height: 100%;
                            border-radius: 5px;
                            background-color: #3E57D0;
                            width: 0;
                            animation: progressAnimation 2s ease-out forwards;
                        }
                    }
                }
            </style>

            <div class="skill-item">
                <h6>
                 ${text} 
                 <em>${percentageProgress}</em>
                </h6>
                <div class="skill-progress">
                    <div class="progress" data_value="${percentageProgress}" style="${style}"></div>
                </div>
            </div>
        `;
    }
}

customElements.define('skill-item', SkillItemComponent);