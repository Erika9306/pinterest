
import { AuthorProfile } from '../AuthorProfile/AuthorProfile';
import { Button } from '../Button/Button';
import { PicInfo } from '../PicInfo/PicInfo';
import './Search.css';

export const Search = () => {
    const form = document.createElement('form'); 
    form.classList.add('searchForm');

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = '🔎 Buscar';
    input.classList.add('searchInput');

    form.appendChild(input);

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); 

        const term = input.value.trim().toLowerCase();
        if (term) {
            let pictures = await searchingResults(term);
            
            if (!pictures || pictures.length === 0) {
                alert(`No se encontraron resultados para "${term}". Mostraré imágenes de los michis.`);
                pictures = await searchingResults('gatos');
                
            }
            
            
            const sectionImg = document.querySelector('.sectionImages');
            sectionImg.innerHTML = '';

            pictures.forEach(image => {
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
         
         sectionImg.appendChild(div);

            });
            input.value = '';
        }
    });

    return form;
};

const accessKey = 'yJI1eQoUTlRxVyKT5qygMOevHgcpU-lNz7wrsyP6KWo';

const searchingResults = async (word) =>{   

    const response = await fetch(`https://api.unsplash.com/search/photos?query=${word}&client_id=${accessKey}`);
    const data = await response.json();
    return data.results;

}
