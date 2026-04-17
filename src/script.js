import { Carousel } from 'bootstrap';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

const myCarousel = document.querySelector('#testimonialCarousel');
const carousel = new Carousel(myCarousel, {
  interval: 3000,
  touch: true,
  pause: false,
});