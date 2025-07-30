// JavaScript for image carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    // Show carousel if more than one image
    if (images.length > 1) {
        carousel.style.display = 'block';
    }

    // Hide all images except the first one
    images.forEach((img, index) => {
        if (index !== 0) {
            img.style.display = 'none';
        }
    });

    function showImage(index) {
        // Hide all images
        images.forEach(img => img.style.display = 'none');
        // Show the selected image
        images[index].style.display = 'block';
        currentIndex = index;
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Attach event listeners to prev and next buttons
    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);
});
