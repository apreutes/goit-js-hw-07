import { galleryItems } from "./gallery-items.js";

const galleryItemsList = document.querySelector(".gallery");
const gallery = createPicGallery(galleryItems);

galleryItemsList.insertAdjacentHTML("beforeend", gallery);

function createPicGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join("");
}

console.log(galleryItems);
