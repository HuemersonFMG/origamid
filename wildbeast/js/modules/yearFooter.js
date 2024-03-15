export default function fnYearFooter(){
  let yearSpan = document.querySelector('[data-js="yearFooter"]');
  
  const date = new Date();
  const year = date.getFullYear();

  yearSpan.innerText = year;
}
