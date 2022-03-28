// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const container = document.querySelector('.gallery');

const createGalleryItemMarkup = itemProp => {
  return `<div class="gallery__item">
  <a class="gallery__item" href=${itemProp.original}>
  <img class="gallery__image" src=${itemProp.preview} alt=${itemProp.description} />
</a>
</div>`;
};

const allGaleryItems = galleryItems.map(createGalleryItemMarkup).join('');

container.insertAdjacentHTML('afterbegin', allGaleryItems);

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
