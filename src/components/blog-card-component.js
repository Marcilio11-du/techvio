class BlogCardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const title = this.getAttribute('title') || 'Blog Title';
        const image = this.getAttribute('image') || 'assets/img/blog/blog-1.jpg';
        const date = this.getAttribute('date') || '17 June 2025';
        const author = this.getAttribute('author') || 'Author';
        const link = this.getAttribute('link') || '#';
        const description = this.getAttribute('description') || 'Lorem ipsum dolor sit amet...';

        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css');
                @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");
                @import url("../../node_modules/bootstrap-icons/font/bootstrap-icons.css");
                
                :host {
                    display: block;
                    font-family: 'Dosis', sans-serif;
                }

                .blog-single-item {
                    background-color: #ffffff;
                    border-radius: 5px;
                    overflow: hidden;
                    box-shadow: 0px 5px 20px 0px rgba(82, 90, 101, 0.1);
                    transition: 0.4s;
                    margin-bottom: 30px;
                }

                .blog-single-item:hover {
                    transform: translateY(-5px);
                }

                .blog-image img {
                    width: 100%;
                    height: auto;
                    display: block;
                    transition: 0.4s;
                }

                .blog-single-item:hover .blog-image img {
                    transform: scale(1.05);
                }

                .blog-description {
                    padding: 20px 25px;
                }

                .blog-info {
                    padding: 0;
                    margin: 0 0 10px;
                    list-style: none;
                    display: flex;
                    gap: 15px;
                }

                .blog-info li a {
                    color: #555;
                    font-size: 14px;
                    font-weight: 600;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }

                .blog-info li i {
                    color: #7b68ee;
                }

                .blog-text h3 {
                    font-size: 20px;
                    margin: 10px 0;
                }

                .blog-text h3 a {
                    color: #404040;
                    text-decoration: none;
                    transition: 0.4s;
                }

                .blog-text h3 a:hover {
                    color: #7b68ee;
                }

                .blog-text p {
                    color: #6a6c72;
                    font-size: 15px;
                    line-height: 1.6;
                    margin-bottom: 15px;
                }

                /* A Animação da Seta que pediste */
                .read-more {
                    color: #7b68ee;
                    font-size: 16px;
                    font-weight: 600;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    transition: all 400ms ease-out;
                }

                .read-more i {
                    font-size: 24px;
                    margin-left: 5px; /* Começa com um pequeno espaço */
                    transition: all 400ms ease-out;
                }

                .blog-single-item:hover .read-more i {
                    margin-left: 10px; /* A seta aproxima-se/afasta-se suavemente */
                    transform: translateX(3px);
                }
            </style>

            <div class="blog-single-item">
                <div class="blog-image">
                    <a href="${link}"><img src="${image}" alt="image"></a>
                </div>
                <div class="blog-description">
                    <ul class="blog-info">
                        <li><a href="#"><i class="bi bi-person-circle"></i> ${author}</a></li>
                        <li><a href="#"><i class="bi bi-calendar-check"></i> ${date}</a></li>
                    </ul>
                    <div class="blog-text">
                        <h3><a href="${link}">${title}</a></h3>
                        <p>${description}</p>
                        <div class="blog-btn">
                            <a href="${link}" class="read-more"><i class="bi bi-arrow-right-short"></i> Read More </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('blog-card', BlogCardComponent);