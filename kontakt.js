    document.addEventListener('DOMContentLoaded', function () {
       document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Get the form data
            const firstName = document.getElementById('contact-first-name').value;
            const lastName = document.getElementById('contact-last-name').value;
            const telephone = document.getElementById('contact-telephone').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;

            // Encode the data for the email body and subject
            const subject = encodeURIComponent('Ny Kontaktförfrågan');
            const body = encodeURIComponent(`
                Förnamn: ${firstName}
                Efternamn: ${lastName}
                Telefonnummer: ${telephone}
                E-post: ${email}
                Meddelande: ${message}
            `);

            // Set up the mailto link
            const mailtoLink = `mailto:afgsuna@yahoo.com?subject=${subject}&body=${body}`;

            // Open the user's email client with the pre-filled details
            window.location.href = mailtoLink;
        });
    });
