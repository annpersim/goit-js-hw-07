import { galleryItems } from "./gallery-items.js";

const galleryDiv = document.querySelector(".gallery");
const galleryMarkup = makeGalleryItemMarkup(galleryItems);

galleryDiv.insertAdjacentHTML("beforeend", galleryMarkup);
galleryDiv.addEventListener("click", onGalleryDivClick);

function onGalleryDivClick(event) {
  event.preventDefault();
  if (event.target.classList.contains(".gallery")) {
    return;
  }

  const imageSrc = event.target.dataset.source;
  const instance = basicLightbox.create(`
   <img src=${imageSrc} width="800" height="600">`);
  instance.show();
}

function makeGalleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
  <div class="gallery__item">
   <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt="${description}"
    />
   </a>
</div>`;
    })
    .join("");
}
