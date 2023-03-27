import { galleryItems } from "./gallery-items.js";

// Додаємо галерею

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

// Вішаємо слухача, заборона браузеру на скачку і отримання урла великого зображення

galleryItemsList.addEventListener("click", onPicClick);

function onPicClick(evt) {
  evt.preventDefault();
  const onePic = galleryItemsList.querySelector(".gallery__image");
  if (!onePic) {
    return;
  }

  // Модальне вікно з бібліотеки

  const instance = basicLightbox.create(`
  <img src="${evt.target.dataset.source}" width="800" height="600">
      `);

  instance.show();
  // console.log(evt.target.dataset.source);
}

console.log(galleryItems);
