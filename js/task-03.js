const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector('.gallery');

function createMarkupGallery() {
  const galleryEl = images.map(el => `<li><img class='Photo' src = '${el.url}' alt = '${el.alt}'></li>`).join('');

  gallery.insertAdjacentHTML('beforeend', galleryEl);
  // return gallery;
}
createMarkupGallery(images);
// gallery.style.display = 'flex';
// gallery.style.justifyContent = 'space-evenly';
// gallery.style.gap = '30px';
// gallery.style.listStyle = 'none';
