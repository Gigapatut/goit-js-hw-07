import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
console.log(gallery);

const marking = galleryItems
    .map((galleryItem) => 
    `<li class="gallery__item">
    <a class="gallery__link" href=${galleryItem.original}>
      <img
        class="gallery__image"
        src=${galleryItem.preview}
        data-source=${galleryItem.original}
        alt=${galleryItem.description}
      />
    </a>
  </li>`).join("");
  
gallery.insertAdjacentHTML("afterbegin", marking);
 
gallery.addEventListener("click", (e) => {
  e.preventDefault();
  const original = e.target.dataset.source;  
  const instance = basicLightbox.create(`
    <div class="modal">
      <img src = ${original}>
      
    </div>
  `)
  instance.show()
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
  gallery.removeEventListener("click", (e));  
});


