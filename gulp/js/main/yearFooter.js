const yearFooter = document.querySelector('[data-js="yearFooter"]');

const date = new Date();
const year = date.getFullYear();

yearFooter.innerText = year;