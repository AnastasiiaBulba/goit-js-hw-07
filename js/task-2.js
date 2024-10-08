const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.gallery');

const galleryUp = images.reduce(
  (acc, { url, alt }) =>
    (acc += `<li class="gallery-item"><img src="${url}" alt="${alt}"></li>`),
  ''
);

gallery.insertAdjacentHTML('beforeend', galleryUp);

// стилі зробила як в аналогічому блоці по CSS та HTML (портфоліо)
// мінімальна кількість стилізації яку я зрозуміла, що треба добавити

const style = document.createElement('style');
style.textContent = `
.gallery {
display: flex;
flex-wrap: wrap;
gap: 48px 24px;
list-style: none;
padding: 0;
margin: 0;
}
.gallery-item {
flex: calc((100% - 48px) / 3);
box-sizing: border-box;
overflow: hidden;
}
.gallery img {
  display: block;
  width: 100%;
  height: auto;
  height: 100%;
  object-fit: cover;
}
  `;
document.head.appendChild(style);
