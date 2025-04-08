
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
        
      
         
        imgContainer.appendChild(img);
        imgContainer.appendChild(btn);
       
        div.appendChild(imgContainer);
        sectionImages.appendChild(div);
    });
    
}catch(error){
    console.error('problema', error);
}
}



