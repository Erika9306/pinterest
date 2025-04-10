import './AuthorProfile.css';

export const AuthorProfile = ({image, fullName, date}) =>{
    
  const div = document.createElement('div');
  div.classList.add('author-wrapper');

  // imagen de perfil
  const profileImg = document.createElement('img');
  profileImg.src = image;
  profileImg.alt = 'foto';
  profileImg.classList.add('profile_img');

  // datos del autor
  const userInfo = document.createElement('div');
  userInfo.classList.add('userProfile');

  const nameAuthor = document.createElement('p');
  nameAuthor.textContent = fullName;

  const fecha = document.createElement('p');
  fecha.innerHTML = `<span>${date}</span>`;

  // colores aleatorios en el borde
  const colors = ['#FF816BFF', '#7ECB6BFF', '#824DFFFF', '#F2FF3DFF', '#D65D8DFF'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
profileImg.style.border = `3px solid ${randomColor}`;


  userInfo.append(nameAuthor, fecha);
  div.append(profileImg, userInfo);

  return div;
};

