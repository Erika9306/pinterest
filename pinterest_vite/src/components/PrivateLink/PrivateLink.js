import './PrivateLink.css';

export const PrivateLink= ({path, imageUrl}) =>{

    const li = document.createElement('li');
    li.classList.add('privateLi');
    const a = document.createElement('a');
    a.classList.add('aPrivate');

    a.href = path;
    
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'personal space';

    a.append(img);
    li.appendChild(a);
    return li;

}