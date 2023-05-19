import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

(function () {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            src="${preview}"
            data-source="${original}"
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

gallery.addEventListener("click", imgToFullscreenlSize);

function imgToFullscreenlSize(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const currentAlt = evt.target.alt;
  const currentUrl = galleryItems.find(
    (img) => img.description === currentAlt
  ).original;

  const instance = basicLightbox.create(`
        <div class="modal">
            <img
              src="${currentUrl}"
              alt="${currentAlt}"
              width="100%"
              height=auto
            />
        </div>
    `);
  instance.show();

  window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  });
}
