<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $jobTitle = htmlspecialchars($_POST['job_title']);
    $to = "shoaibrjanvekar@gmail.com";
    $subject = "Job Application from $name";

    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Position: $jobTitle\n\n";

    if (isset($_FILES['resume']) && $_FILES['resume']['error'] == 0) {
        $mail = new PHPMailer(true);
        try {
            //Server settings
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';  // Replace with your SMTP server
            $mail->SMTPAuth   = true;
            $mail->Username   = 'your-email@gmail.com';  // Replace with your email
            $mail->Password   = 'your-password';        // Replace with your email password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            //Recipients
            $mail->setFrom($email, $name);
            $mail->addAddress($to);

            // Attachments
            $file = $_FILES['resume']['tmp_name'];
            $fileName = $_FILES['resume']['name'];
            $mail->addAttachment($file, $fileName);

            // Content
            $mail->isHTML(false);
            $mail->Subject = $subject;
            $mail->Body    = $message;

            $mail->send();
            echo "Application submitted successfully!";
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        echo "Error: Resume upload failed.";
    }
} else {
    echo "Invalid request.";
}
