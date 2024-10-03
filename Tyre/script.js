/* part 4 */

const slidesContainer = document.querySelector('.slides-container');
let slideIndex = 0;

function showSlide(index) {
  const totalSlides = document.querySelectorAll('.slide').length;
  if (index >= totalSlides) slideIndex = 0;
  if (index < 0) slideIndex = totalSlides - 1;
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

document.querySelector('.next-slide').addEventListener('click', () => {
  slideIndex++;
  showSlide(slideIndex);
});

document.querySelector('.prev-slide').addEventListener('click', () => {
  slideIndex--;
  showSlide(slideIndex);
});


 /* part 5 */

 // Initialize the carousel manually (optional)
document.addEventListener('DOMContentLoaded', function () {
  var myCarousel = document.querySelector('#tyrePressureSlider');
  var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000, // Set the interval for automatic sliding
      wrap: true // Allows the carousel to cycle continuously
  });

  // Optional: Control carousel manually
  document.querySelector('.carousel-control-prev').addEventListener('click', function () {
      carousel.prev();
  });

  document.querySelector('.carousel-control-next').addEventListener('click', function () {
      carousel.next();
  });
});


 