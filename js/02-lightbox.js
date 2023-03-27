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
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `;
    })
    .join("");
}

// Вішаємо слухача, заборона браузеру на скачку, делегування і отримання урла великого зображення

galleryItemsList.addEventListener("click", onPicClick);

function onPicClick(evt) {
  evt.preventDefault();
  const onePic = galleryItemsList.querySelector(".gallery__image");
  if (!onePic) {
    return;
  }

  // Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery

  `<div class="gallery">
      <a href="${evt.target.getAttribute(
        "href"
      )}"><img src="${evt.target.getAttribute(
    "src"
  )}" alt="${evt.target.getAttribute("alt")}" /></a>
    </div>
      `;
}

const newGallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(newGallery);
