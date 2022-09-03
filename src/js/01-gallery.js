import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function onElementsCreate(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
 </a></li>`;
    })
    .join("");
}

const galleryElements = onElementsCreate(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryElements);
galleryList.style.listStyle = 'none';

let lightbox = new SimpleLightbox(".gallery a", {
  sourceAttr: "href",
  captionsData: "alt",
  captionDelay: 250,
});