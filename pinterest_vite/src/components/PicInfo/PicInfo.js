import './PicInfo.css';


export const PicInfo = ({ text = "", position = "top-left" }) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('pic-info-btn', position); 
    return button;
};