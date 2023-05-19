import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

(function () {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            src="${preview}"
            alt="${description}"
            width="100%"
            height=auto
            class="gallery__image"
          />
        </a>  
      </li>`
    )
    .join("");
  gallery.insertAdjacentHTML("beforeend", markup);
})();

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: 'bottom',
  captionDelay: "250"
});