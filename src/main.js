const menuBtn = document.getElementById('hamburgerBtn');
const shadowBlue = document.getElementById('shadow-blue');
const menuMobile = document.getElementById('menuMobileid');

function clickChange() {
  shadowBlue.classList.toggle('shadow-blue-show');
  menuBtn.classList.toggle('transforming');
  menuMobile.classList.toggle('visibleMenu');
  document.body.classList.toggle('stop-scrolling');
}
document.documentElement.addEventListener('click', (e) => {
  if (e.target.matches('.mobile-item')) {
    menuMobile.classList.remove('visibleMenu');
    document.body.classList.remove('stop-scrolling');
    menuBtn.classList.remove('transforming');
    shadowBlue.classList.remove('shadow-blue-show');
  }
});
menuBtn.addEventListener('click', clickChange);