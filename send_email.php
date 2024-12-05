<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $personalNumber = htmlspecialchars($_POST['personalNumber']);
    $address = htmlspecialchars($_POST['address']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);

    // Email settings
    $to = 'afgsuna@yahoo.com'; // Your email address
    $subject = 'Ny Medlemsansökan';
    $message = "Namn: $firstName $lastName\n";
    $message .= "Personnummer: $personalNumber\n";
    $message .= "Adress: $address\n";
    $message .= "Telefonnummer: $phone\n";
    $message .= "Email: $email\n";
    $headers = "From: no-reply@yourdomain.com\r\n"; // Replace with your domain or email

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Din ansökan har skickats!";
    } else {
        echo "Det gick inte att skicka din ansökan. Försök igen senare.";
    }
}
?>