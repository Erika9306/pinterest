import './Button.css';

export const Button = ({text, fnc = () => {} }) =>{
    
    const button = document.createElement('button');
    button.classList.add('common_btn');
    button.textContent = text;
    button.addEventListener('click', fnc);

    return button;
}