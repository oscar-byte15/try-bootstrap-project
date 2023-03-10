const overlay = document.getElementById('container-menu');
const overlay2 = document.getElementById('cont-menu');
const port = document.getElementById('portfolio');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const bChecked = document.getElementById('btn-menu');
function navToggle() {
  if (bChecked.checked) {
    overlay.classList.toggle('visible');
    overlay2.classList.toggle('visible');
  }
}
function navToggle2() {
  if (bChecked.checked) {
    overlay.classList.toggle('visible');
    overlay2.classList.toggle('visible');
  }
}
function navToggle3() {
  if (bChecked.checked) {
    overlay.classList.toggle('visible');
    overlay2.classList.toggle('visible');
  }
}

port.addEventListener('click', navToggle);
about.addEventListener('click', navToggle2);
contact.addEventListener('click', navToggle3);

document.documentElement.addEventListener('click', (e) => {
  if (e.target.matches('.menu-item')) {
    overlay.classList.remove('visible');
    overlay2.classList.remove('visible');
  }
});