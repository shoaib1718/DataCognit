<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $jobTitle = htmlspecialchars($_POST['job_title']);
    
    // Set the recipient email address
    $to = "shoaibrjanvekar@gmail.com"; // Replace with your email address
    $subject = "Job Application from $name";
    
    // Email content
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Position: $jobTitle\n\n";
    
    // Handle file upload
    if (isset($_FILES['resume']) && $_FILES['resume']['error'] == 0) {
        $file = $_FILES['resume'];
        $fileName = basename($file['name']);
        $fileTmpName = $file['tmp_name'];
        
        // Create boundary for email content
        $boundary = md5(time());
        
        // Headers for email with attachments
        $headers = "From: $email\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
        
        // Message body with boundary
        $body = "--$boundary\r\n";
        $body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
        $body .= $message;
        $body .= "\r\n\r\n--$boundary\r\n";
        
        // Read file and encode it
        $fileContent = chunk_split(base64_encode(file_get_contents($fileTmpName)));
        $body .= "Content-Type: application/octet-stream; name=\"$fileName\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n\r\n";
        $body .= $fileContent;
        $body .= "\r\n\r\n--$boundary--";
        
        // Send the email
        $mail_sent = mail($to, $subject, $body, $headers);
        
        if ($mail_sent) {
            echo "Application submitted successfully!";
        } else {
            echo "There was an error sending your application.";
        }
    } else {
        echo "Error: Resume upload failed.";
    }
} else {
    echo "Invalid request.";
}
?>
