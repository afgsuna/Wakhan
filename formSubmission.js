document.getElementById('member-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;

    // Encode the data for the email body and subject
    const subject = encodeURIComponent('Ny Medlemsregistrering');
    const body = encodeURIComponent(`
        Förnamn: ${firstName}
        Efternamn: ${lastName}
        Telefonnummer: ${telephone}
        E-post: ${email}
    `);

    // Set up the mailto link
    const mailtoLink = `mailto:afgsuna@yahoo.com?subject=${subject}&body=${body}`;

    // Open the user's email client with the pre-filled details
    window.location.href = mailtoLink;
});

