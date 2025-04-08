
import { Button } from '../Button/Button';

import './RandomImg.css';
 
export const RandomImg = async () => {
  const sectionImages = document.querySelector('.sectionImages');
  const accessKey = 'yJI1eQoUTlRxVyKT5qygMOevHgcpU-lNz7wrsyP6KWo';
  
  

  try{
    const response = await fetch(`https://api.unsplash.com/photos/random?count=30&client_id=${accessKey}`);
    if(!response.ok){
        throw new Error('Error al obtener las imágenes');
    }
    const data = await response.json();
    data.forEach(image => {
        const div = document.createElement('div');
        div.classList.add('img-wrapper'); 
    
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
    
        const img = document.createElement("img");
        img.src = image.urls.small;
        img.alt = "Random Image";
    
        const btn = Button({ text: 'Visitar',
            fnc: ()=> window.open(image.links.html, '_blank' )
         });
       
         const profileImg = document.createElement('img');
         profileImg.src = image.user.profile_image.small; 
         profileImg.classList.add('profile_img');

         
         const userProfile = document.createElement('div');
         userProfile.classList.add('userProfile');

         const name = document.createElement('p');
         name.textContent = image.user.name;

         const fecha = document.createElement('span');
         const date = new Date(image.created_at);
         fecha.innerHTML= date.toLocaleDateString();

         
         
         // Borde con color aleatorio
         const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
         profileImg.style.border = `2px solid ${randomColor}`;
         

         userProfile.appendChild(name);
        userProfile.appendChild(fecha);
        imgContainer.appendChild(img);
        imgContainer.appendChild(btn); 
        imgContainer.appendChild(profileImg);     

        div.appendChild(imgContainer);
        div.appendChild(userProfile);
        sectionImages.appendChild(div);
    });
    
}catch(error){
    console.error('problema', error);
}
}



