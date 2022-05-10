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

//Get the button
var mybutton = document.getElementById("myBtn");
window.onscroll = () => {
  scrollFunction()
}
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


// Blue bar on top for scroll 
let progress = document.getElementById("progressbar");

window.onscroll = function () {
  scrollFunction()
  var docHeight = $(document).height();
  var windowHeight = $(window).height();
  var windowScrollTop = $(window).scrollTop();
  var progressHeight = (windowScrollTop / (docHeight - windowHeight)) * 100;
  progress.style.width = Math.abs(progressHeight) + "%";
};