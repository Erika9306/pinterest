
import { AuthorProfile } from '../AuthorProfile/AuthorProfile';
import { Button } from '../Button/Button';
import { PicInfo } from '../PicInfo/PicInfo';


import './RandomImg.css';
 
export const RandomImg = async () => {
  const sectionImages = document.querySelector('.sectionImages');
  const accessKey = 'yJI1eQoUTlRxVyKT5qygMOevHgcpU-lNz7wrsyP6KWo';


  try{
    const response = await fetch(`https://api.unsplash.com/photos/random?count=40&client_id=${accessKey}`);
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

         // info de la foto         
        const totalPhotosBtn = PicInfo({ 
                text: ` 📷 +${image.user.total_photos} `, 
                position: "top-left" 
            });
        totalPhotosBtn.classList.add('picBtn');

        const likesBtn = PicInfo({ 
            text: ` 🩷 ${image.likes} `, 
            position: "top-right" 
        });
        likesBtn.classList.add('picBtn');

        const profileImg = AuthorProfile({
            image: image.user.profile_image.medium,
            fullName: image.user.name,
            date: new Date (image.created_at).toLocaleDateString()
        });
         
                 
        
         imgContainer.append(img, btn);         
         imgContainer.append(totalPhotosBtn, likesBtn);     
         div.append(imgContainer, profileImg);       
         
         sectionImages.appendChild(div);
        
    });
    
}catch(error){
    console.error('problema', error);
}
}



