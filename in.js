// קרוסלה אוטומטית של התמונות
let currentImage = 0;
const images = document.querySelectorAll('.slider-img');

function showNextImage() {
  // מסיר את המחלקת "active" מהתמונה הנוכחית
  images[currentImage].classList.remove('active');
  
  // מחשב את התמונה הבאה ומעדכן את currentImage
  currentImage = (currentImage + 1) % images.length;
  
  // מוסיף את המחלקת "active" לתמונה הבאה
  images[currentImage].classList.add('active');
}

// קרוסלה מתחלפת כל 2 שניות
setInterval(showNextImage, 2000); // כל 2 שניות

// פונקציה להפיכת כרטיס
function flipCard(cardContainer) {
  const card = cardContainer.querySelector('.card');
  card.classList.toggle('is-flipped');
}

// קרוסלה אוטומטית של המלצות
let currentTestimonial = 0;
const testimonialBoxes = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
  testimonialBoxes[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial + 1) % testimonialBoxes.length;
  testimonialBoxes[currentTestimonial].classList.add('active');
}

setInterval(showNextTestimonial, 3000); // כל 3 שניות
