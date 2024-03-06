
// import fnYearFooter from './modules/yearFooter.js';

// fnYearFooter();

// export default function fnYearFooter(){
//   let yearSpan = document.querySelector('[data-js="yearFooter"]');
  
//   const date = new Date();
//   const year = date.getFullYear();

//   yearSpan.innerText = year;
// }

let yearSpan = document.querySelector('[data-js="yearFooter"]');
  
const date = new Date();
const year = date.getFullYear();

yearSpan.innerText = year;




// Menu Active
const links = document.querySelectorAll('.header-menu a');

function activeLink(link){
  const url = location.href;
  const href = link.href;

  if(url.includes(href)){
    link.classList.add('active');
  }
}

links.forEach(activeLink);


// Checked Safes
const paramsUrl = new URLSearchParams(location.search);

function activeProduct(paramUrl){
  const element = document.querySelector(`#${paramUrl}`);

  if(element){
    element.checked = true;
  }
}

paramsUrl.forEach(activeProduct);


// FAQs
const faqs = document.querySelectorAll('.faqs button');

function activeFaq(event){
  const faq = event.currentTarget;
  const controls = faq.getAttribute('aria-controls');
  const response = document.querySelector(`#${controls}`);

  response.classList.toggle('active');
  const active = response.classList.contains('active');
  faq.setAttribute('aria-expanded', active);
}

function eventQuest(faq){
  faq.addEventListener('click', activeFaq);
}

faqs.forEach(eventQuest);


// Gallery bikes
const gallery = document.querySelectorAll('.bike-images img');
const galleryContainer = document.querySelector('.bike-images');

function changeImage(event){
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;

  if(media){
    galleryContainer.prepend(img);
  }
}

function eventsGallery(img){
  img.addEventListener('click', changeImage);
}

gallery.forEach(eventsGallery);


// AOS

AOS.init({
  // duration: '200',
});















