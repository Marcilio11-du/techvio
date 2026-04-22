class TeamMemberComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const name = this.getAttribute('name') || 'Member Name';
        const role = this.getAttribute('role') || 'Position';
        const image = this.getAttribute('image') || 'assets/img/team/team-1.jpg';
        const facebook = this.getAttribute('facebook') || '#';
        const twitter = this.getAttribute('twitter') || '#';
        const linkedin = this.getAttribute('linkedin') || '#';

        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');

                :host {
                    display: block;
                    font-family: 'Dosis', sans-serif;
                }

                .single-team-box {
                    margin-top: 30px;
                    overflow: hidden;
                    transition: 0.5s;
                    text-align: center;
                }

                .team-image {
                    position: relative;
                    z-index: 1;
                    border-radius: 8px;
                    overflow: hidden;
                }

                .team-image img {
                    width: 100%;
                    height: auto;
                    display: block;
                    transition: 0.5s;
                }

                /* Overlay Escuro */
                .team-image::before {
                    content: "";
                    position: absolute;
                    z-index: 2;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.6);
                    opacity: 0;
                    visibility: hidden;
                    transition: 0.5s;
                }

                /* Efeito Hover na Imagem */
                .single-team-box:hover .team-image img {
                    transform: scale(1.1);
                }

                .single-team-box:hover .team-image::before {
                    opacity: 1;
                    visibility: visible;
                }

                /* Redes Sociais */
                .team-social-icon {
                    position: absolute;
                    z-index: 5;
                    top: 50%;
                    width: 100%;
                    text-align: center;
                    transform: translateY(-50%);
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                }

                .team-social-icon a {
                    color: #fff;
                    font-size: 18px;
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    border-radius: 8px;
                    opacity: 0;
                    visibility: hidden;
                    border: 1px solid #ffffff;
                    display: inline-block;
                    transform: scale(0);
                    transition: all 0.3s ease;
                    text-decoration: none;
                }

                .single-team-box:hover .team-social-icon a {
                    opacity: 1;
                    visibility: visible;
                    transform: scale(1);
                }

                /* Delay escalonado para cada ícone ficar mais smooth */
                .team-social-icon a:nth-child(1) { transition-delay: 0.1s; }
                .team-social-icon a:nth-child(2) { transition-delay: 0.2s; }
                .team-social-icon a:nth-child(3) { transition-delay: 0.3s; }

                .team-social-icon a:hover {
                    background-color: #7b68ee;
                    border-color: #7b68ee;
                }

                .team-info {
                    padding-top: 20px;
                }

                .team-info h3 {
                    font-size: 20px;
                    font-weight: 700;
                    margin: 0 0 5px;
                    color: #333;
                }

                .team-info span {
                    color: #7b68ee;
                    font-size: 16px;
                    font-weight: 500;
                    display: block;
                }
            </style>

            <div class="single-team-box">
                <div class="team-image">
                    <img src="${image}" alt="${name}">
                    <div class="team-social-icon">
                        <a href="${facebook}"><i class="fab fa-facebook-f"></i></a>
                        <a href="${twitter}"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="${linkedin}"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="team-info">
                    <h3>${name}</h3>
                    <span>${role}</span>
                </div>
            </div>
        `;
    }
}
customElements.define('team-member', TeamMemberComponent);