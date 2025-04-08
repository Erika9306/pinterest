
import './style.css';
import { Header } from './components/Header/Header';
import { RandomImg } from './components/RandomImg/RandomImg';


const app = document.querySelector('#app');

Header();

const sectionImages = document.createElement('section');
sectionImages.classList.add('sectionImages');
app.append(sectionImages);

RandomImg();