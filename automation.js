//get slider items
var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// get number of slides.
var slidesCount = sliderImages.length;

// set current slide
var currentSlide = 1;

// slide number element
var slideNumberElement = document.getElementById("slide-number");

// prev and next buttuns
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

//handle click prev && next
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//create the main ul element
var paginationElement = document.createElement("ul");

// set id on created ul
paginationElement.setAttribute("id", "pagination-ul");

//create list item
for (var i = 1; i <= slidesCount; i++) {
  //create li
  var paginationItem = document.createElement("li");

  //set custom atrr
  paginationItem.setAttribute("data-index", i);

  //add text
  paginationItem.textContent = i;

  // append items to main ul
  paginationElement.appendChild(paginationItem);
}

// add created ul to page
document.getElementById("indicators").appendChild(paginationElement);

//get new created ul
var paginationCreatedUL = document.getElementById("pagination-ul");


//get pagination items
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

//loop through all bullets
for (var i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();

  }

}


//trigger the checker
theChecker();

//next slide function
function nextSlide() {

  if (nextButton.classList.contains('disabled')) {

    //do nothing
    return false;

  } else {

    currentSlide++;

    theChecker();

  }


}

//prev slide function
function prevSlide() {

  if (prevButton.classList.contains('disabled')) {

    //do nothing
    return false;

  } else {

    currentSlide--;

    theChecker();

  }


}

//create checker func
function theChecker() {
  //set slide number
  slideNumberElement.textContent = 
    "slide #" + currentSlide + "of" + slidesCount;

  //remove allactives
  removeAllActive();
  
  // set active class on current  slide
  sliderImages[currentSlide - 1].classList.add("active");

  // set active class on current  pagination
  paginationCreatedUL.children[currentSlide - 1].classList.add("active");

  //check if current slide first
  if (currentSlide == 1) {

    // add disabled class 
    prevButton.classList.add('disabled');

  } else {


    // add disabled class 
    prevButton.classList.remove('disabled');

  }

    //check if current slide Last
    if (currentSlide == slidesCount) {

      // add disabled class 
      nextButton.classList.add('disabled');
  
    } else {
  
  
      // remove disabled class 
      nextButton.classList.remove('disabled');
    }
}


//remove all active
function removeAllActive() {

  //loop through Images
  sliderImages.forEach(function (img) {

    img.classList.remove('active');
  });
  
  //loop through Pagination Bullets
  paginationsBullets.forEach(function (bullet) {

    bullet.classList.remove('active');

  });
}


