const images = document.querySelectorAll('#gallery li img');

function galeryChange(event){
  const mainImage = document.querySelector('[data-js="main-image"]');
  const clicked = event.currentTarget;
  mainImage.src = clicked.src;
}

function galleryClicked(image){
  image.addEventListener('click', galeryChange);
}

images.forEach(galleryClicked);