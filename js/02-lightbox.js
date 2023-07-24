import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imgArray = galleryItems.map((image, index) => {
  return `
      <li class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img
        class="gallery__image"
        src="${image.preview}"
        data-index="${index}"
        alt="${image.description}"
        />
      </a>
      </li> 
    `;
});

// додати масив на сторінку
const ulElem = document.querySelector(".gallery");
console.log(ulElem);

ulElem.insertAdjacentHTML("beforeend", `${imgArray.join("")}`);

// ініціалізація бібліотеки
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
