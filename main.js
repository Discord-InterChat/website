const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
  document.getElementsByClassName("navcontainer")[0].style.display = "none";
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
  document.getElementsByClassName("navcontainer")[0].style.display = "flex";
});

let progress = document.getElementById("progressbar");
var docHeight = document.body.scrollHeight;
var windowHeight = window.innerHeight;

window.onscroll = function () {
  scrollFunction();
  var windowScrollTop = $(window).scrollTop();
  var progressHeight = (windowScrollTop / (docHeight - windowHeight)) * 100;
  progress.style.width = Math.abs(progressHeight) + "%";
};

//Get the button
var mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
