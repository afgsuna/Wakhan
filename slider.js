document.addEventListener("DOMContentLoaded", function () {
    // Slider Code
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        console.log(slides); // Check if slides are being selected
        slides.forEach((slide, index) => {
            slide.style.display = index === currentIndex ? "block" : "none";
        });
        currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    }

    showSlides();
    setInterval(showSlides, 1500);

    // Scroll Visibility for List Items
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

    // Menu Toggle
    document.getElementById('menuButton').addEventListener('click', function() {
        const menu = document.getElementById('dropdownMenu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // Nav Button Toggle
    document.getElementById('nav-btn').addEventListener('click', function() {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('hidden');
    });

    // Menu Link Active State
    const menuLinks = document.querySelectorAll('.nav-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Form Submission for PDF generation
    document.getElementById('member-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const telephone = document.getElementById('telephone').value;
        const email = document.getElementById('email').value;

        console.log(firstName, lastName, telephone, email); // Debugging the values

        if (firstName && lastName && telephone && email) {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // Adding text to the PDF with better line spacing
            doc.text(`Förnamn: ${firstName}`, 10, 10);
            doc.text(`Efternamn: ${lastName}`, 10, 20);
            doc.text(`Telefonnummer: ${telephone}`, 10, 30);
            doc.text(`E-post: ${email}`, 10, 40);

            // Create a filename with the member's first and last name
            const fileName = `Medlemskap_${firstName}_${lastName}.pdf`;

            // Save the PDF
            doc.save(fileName);
        } else {
            alert("Fyll i alla fält!"); // Alert if any field is empty
        }
    });

    // Audio Play/Pause Toggle
    function togglePlayPause() {
        const audio = document.querySelector('audio');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
});




