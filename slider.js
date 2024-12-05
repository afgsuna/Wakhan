document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentIndex ? "block" : "none";
        });
        currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    }

    // Initialize the slider
    showSlides();

    // Change slide every 3 seconds
    setInterval(showSlides, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.values-list li');

    window.addEventListener('scroll', () => {
        listItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    });
});

document.getElementById('menuButton').addEventListener('click', function() {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});