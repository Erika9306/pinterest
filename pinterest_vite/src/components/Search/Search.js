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

            pictures.forEach(pic=>{
                const div = document.createElement('div');
                const img = document.createElement('img');
                img.src = pic.urls.small;
                img.alt = pic.alt_description;
                div.append(img);
                sectionImg.append(div);

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
