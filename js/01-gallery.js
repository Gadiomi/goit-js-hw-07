import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// масив з весткою картинок
const imgArray = galleryItems.map((image, index) => {
  return `
      <li class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
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

const lbulElem = basicLightbox.create(`${ulElem}`);
console.log(lbulElem);

// прослуховувач на ul
ulElem.addEventListener("click", showBigImage);

//функція відкриття модалки
function showBigImage(e) {
  e.preventDefault();

  if (e.target.tagName === "IMG") {
    const bigImgSrc = e.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${bigImgSrc}" width="800" height="600">
    `);
    instance.show();

    //закриття по Esc
    document.addEventListener("keyup", closeBigImage);
    function closeBigImage(e) {
      if (e.code === "Escape") {
        instance.close();
        document.removeEventListener("keyup", closeBigImage);
      }
    }
  }
}
