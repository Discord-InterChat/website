const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
let progress = document.getElementById("progressbar");
var docHeight = $(document).height();
var windowHeight = $(window).height();
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
