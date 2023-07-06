import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const marking = galleryItems
    .map((galleryItem) => 
    `<li class="gallery__item">
    <a class="gallery__link" href=${galleryItem.original}>
      <img
        class="gallery__image"
        src=${galleryItem.preview}
        alt=${galleryItem.description}
      />
    </a>
  </li>`).join("");
  
gallery.insertAdjacentHTML("afterbegin", marking);
const lightbox = new SimpleLightbox('.gallery a',
 { captionsData: 'alt',
  captionDelay: 250
});
