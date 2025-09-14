let currentSlide = 1;
const totalSlides = 6;

function showSlide(n) {
  const slides = document.querySelectorAll(".slide");
  const slideCounter = document.getElementById("currentSlide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (n > totalSlides) currentSlide = totalSlides;
  if (n < 1) currentSlide = 1;

  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentSlide - 1].classList.add("active");

  slideCounter.textContent = currentSlide;

  prevBtn.disabled = currentSlide === 1;
  nextBtn.disabled = currentSlide === totalSlides;
}

function changeSlide(n) {
  currentSlide += n;
  showSlide(currentSlide);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") changeSlide(-1);
  if (e.key === "ArrowRight") changeSlide(1);
});

document.getElementById("totalSlides").textContent = totalSlides;
showSlide(1);
