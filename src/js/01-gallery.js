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

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const currentAlt = evt.target.alt;
  const currentUrl = evt.target.dataset.source;
  const html = `<img
                src="${currentUrl}"
                width="100%"
                height="auto"
              />
      `;

  // const instance = basicLightbox.create(html);
  // instance.show();

  // window.addEventListener("keydown", function (evt) {
  //   if (evt.code === "Escape") {
  //     instance.close();
  //   }
  // });

  const instance = basicLightbox.create(html, {
    onShow: (instance) => {
      window.addEventListener("keydown", closeImgByEscape(evt));
    },

    onClose: (instance) => {
      window.removeEventListener("keydown", closeImgByEscape(evt));
    },
  });

  instance.show();
}

function closeImgByEscape(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
}
