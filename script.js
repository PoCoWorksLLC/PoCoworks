<script>
  // Collapsible content functionality
  const collapsible = document.querySelector(".collapsible");
  const content = document.querySelector(".collapsible-content");

  collapsible.addEventListener("click", function() {
    this.classList.toggle("active");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });

// Carousel functionality
let slideIndex = 0;
const container = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    container.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}

function previousSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
}

// Initialize by showing the first slide
showSlide(slideIndex);

// Automatically go to the next slide every 5 seconds
setInterval(nextSlide, 5000);

  // Modal (Zoom) functionality for the gallery images
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const closeModal = document.querySelector('.close');

  // Open modal when an image is clicked
  document.querySelectorAll('.carousel-slide img').forEach(img => {
    img.addEventListener('click', function() {
      modal.style.display = 'flex';
      modalImage.src = this.src;
    });
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
</script>
