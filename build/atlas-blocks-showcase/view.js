/******/ (() => { // webpackBootstrap
/*!*******************************************!*\
  !*** ./src/atlas-blocks-showcase/view.js ***!
  \*******************************************/
/*
	Front-end carousel script
	Finds each saved showcase carousel on the page and wires up
	the previous/next buttons to switch the active slide.
*/

document.addEventListener('DOMContentLoaded', () => {
  /*
  	Find all showcase carousel instances on the page.
  	This allows multiple blocks to work independently.
  */

  const carousels = document.querySelectorAll('[data-atlas-showcase-carousel]');
  carousels.forEach(carousel => {
    /*
    	Get the slides and carousel controls for this specific block.
    */

    const slides = carousel.querySelectorAll('[data-atlas-showcase-slide]');
    const prevButton = carousel.querySelector('.atlas-blocks-showcase__button--prev');
    const nextButton = carousel.querySelector('.atlas-blocks-showcase__button--next');

    /*
    	Stop if the carousel does not have enough slides or controls.
    */

    if (slides.length <= 1 || !prevButton || !nextButton) {
      return;
    }
    let currentSlide = 0;

    /*
    	Show the requested slide and hide the others.
    	The modulo keeps the carousel looping from end to start.
    */

    const showSlide = index => {
      currentSlide = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('is-active', slideIndex === currentSlide);
      });
    };

    /*
    	Move backward or forward when the carousel buttons are clicked.
    */

    prevButton.addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });
    nextButton.addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });

    /*
    	Initialize the carousel with the first slide active.
    */

    showSlide(0);
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map