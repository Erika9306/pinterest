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

  userInfo.append(nameAuthor, fecha);

  div.append(profileImg, userInfo);

  return div;
};

