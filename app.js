
let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector(".navbar");

menu.onclick=()=>{
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
var themeToggler=document.querySelector(".theme-toggler");
var themeBtn=document.querySelector(".toggle-btn");

themeBtn.onclick=()=>{
  themeToggler.classList.toggle("active");
};

window.onscroll=()=>{
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  themeToggler.classList.remove("active");
}

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn)=>{
  btn.onclick=()=>{
    let color=btn.style.background;
    document.querySelector(":root").style.setProperty("--theme-color",color);
  }
})
var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop:true,
  autoplay: {
      delay:1000,
      disableOnInteraction:false,
  },
});

  var swiper = new Swiper(".review-slider", {
    grabCursor: true,
    slidesPerView:1,
    centeredSlides: true,
    loop:true,
    spaceBetween:10,
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      700:{
        slidesPerView:2,
      },
      1050:{
        slidesPerView:3,
      },
    },
    autoplay: {
        delay:5000,
        disableOnInteraction:false,
    },
  });