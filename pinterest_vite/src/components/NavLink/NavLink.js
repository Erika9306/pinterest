import './NavLink.css';

export const NavLink= ({path, text}) =>{

    const li = document.createElement('li');
    li.classList.add('navLi');
    const a = document.createElement('a');

    a.href = path;
    a.textContent  = text;

    li.appendChild(a);
    return li;

}