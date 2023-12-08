const preloader = document.getElementById("preloder");
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow-hidden");
}, 3000);

let view = document.querySelector(".my_nav");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");

// navbar
function responsive() {
  view.classList.toggle("show");
  span1.classList.toggle("crossLine1");
  span2.classList.toggle("crossLine2");
  span3.classList.toggle("d-none");
  document.querySelector("body").classList.toggle("overflow_hidden");
}

function navbar2() {
  view.classList.toggle("show");
  span1.classList.toggle("crossLine1");
  span2.classList.toggle("crossLine2");
  span3.classList.toggle("d-none");
  document.querySelector("body").classList.remove("overflow_hidden");
}
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
