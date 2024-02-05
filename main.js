//tab
const topLi = document.querySelectorAll('.topli');
const topListMenu = document.querySelectorAll('.top-list-menu');
const tabContent = document.querySelectorAll('.content-box');
for(let i = 0; i < topLi.length; i++){
  topLi[i].addEventListener('click',function(){
    for(let k = 0; k < topLi.length; k++){
      topLi[k].classList.remove('active');
    }
    topLi[i].classList.add('active');
    for(let j = 0; j < topListMenu.length; j++){
      topListMenu[j].classList.remove('active');
    }
    topListMenu[i].classList.add('active');
    for(let l = 0; l < topLi.length; l++){
      tabContent[l].classList.remove('active');
    }
    tabContent[i].classList.add('active');
  });
}
// top-btn
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  const scrollTOPButton = document.querySelector(".top-btn-box");
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollTOPButton.classList.remove('active');
  } else {
    scrollTOPButton.classList.add('active');
  }
}