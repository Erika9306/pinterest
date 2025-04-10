import { navLinks } from '../../data/navLinks';
import { privateLinks } from '../../data/privateLinks';
import { PrivateLink } from '../PrivateLink/PrivateLink';
import { NavLink } from '../NavLink/NavLink';
import { Search } from '../Search/Search';
import './Header.css';



export const Header = () =>{
    const header = document.createElement('header');
    const app = document.querySelector('#app');

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = "https://cdn-icons-png.flaticon.com/512/174/174863.png";
    logo.alt = 'logo';
    //para que salga todas fotos
     logo.addEventListener('click', ()=> {

        location.reload();
     });
   
    const navContainer = document.createElement('div');
    navContainer.classList.add('navContainer');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    for( let i = 0; i<navLinks.length; i++){
        ul.appendChild(NavLink(navLinks[i]));
    }

    const searchFile = Search(); 

    const ulPersonal = document.createElement('ul');
    ulPersonal.classList.add('personal-links');

    
    for (let i = 0; i < privateLinks.length; i++){
        ulPersonal.appendChild(PrivateLink(privateLinks[i]));
    }
   

   nav.appendChild(ul);
   navContainer.append(nav, searchFile, ulPersonal);
    header.append(logo, navContainer);
    app.append(header);

}