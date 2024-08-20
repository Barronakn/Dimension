<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
</head>

<body>
    <h2>New Contact Form</h2>
    <p><strong>Contact Name:</strong> {{ $formData['username'] }}</p>
    <p><strong>Email:</strong> {{ $formData['email'] }}</p>
    <p><strong>Message:</strong> {{ $formData['message'] }}</p>
</body>

</html>
