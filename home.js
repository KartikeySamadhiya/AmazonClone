let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");

  if (slideIndex >= slides.length) { 
    slideIndex = 0;
  }    
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex].style.display = "block";  
}

function myFunction(imgs) {
  var expandImgs = document.getElementsByClassName("galleryimg");
  
  for (var i = 0; i < expandImgs.length; i++) {
    
    expandImgs[i].querySelector("img").src = imgs.src;
  
    expandImgs[i].style.display = "block";
  }
}
