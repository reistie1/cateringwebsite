<html>
    <body>
 <?php
    //files needed for using PHPMailer
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    require_once "vendor/autoload.php";

    //set mail and error variables
    $error = '';
    $mail = new PHPMailer(true);

    /*check if the method to submit the form was the post method and if so trim the input and
    assign each value to the corresponding variable*/
    if(isset($_POST)){
        $name = trim($_POST["name"]);
        $email = $_POST["email"];
        $msg = trim($_POST["msg"]);
        $phone = trim($_POST["phone"]);

        //check to see if the length of the users name is not empty or greater than 40 characters
        if(strlen($name) < 3 or strlen($name) > 40){
            $error .=  '<p>length of name is not valid.</p>';
        }

        //filter the email entered to validate the user provided a valid email or return an error message
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $error .= '<p>Enter a valid email address.</p>';
        }

        //check to see if the length of the message is not empty or greater than 250 characters
        if(strlen($msg) == 0 or strlen($msg) > 250){
            $error .= '<p>Message length is invalid</p>';
        }

        //check the length of the users phone number to see if its a valid number or display error message
        if(!(is_null($phone)) and strlen($phone) < 12 ){
            $error .= '<p>Phone number is invalid</p>';
        }

        //try sending an email using sendgrids smtp connection on port 587 with the given form information
        try {
            //server settings
            $mail->isSMTP();
            $mail->Host = 'smtp.sendgrid.net';
            $mail->SMTPAuth = true;
            $mail->Username = ''; //not provided for secuirty reasons
            $mail->Password = ''; //not provided for security reasons
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;

            //recipients
            $mail->setFrom('info.southernbellescatering@gmail.com');
            $mail->addAddress('info.southernbellescatering@gmail.com');
            $mail->addReplyTo($email, $name);

            //email content
            $mail->isHTML(true);
            $mail->Subject = 'Inquiry from Southern Belles Catering Website';
            $mail->Body = 'Hello Wendy, <br>'
                            .   $msg .
                        '<br><br> I can be contact by email at: ' . $email . ' or phone number: '. $phone .
                        '<br><br> Sincerely,'. strtoupper($name);
            $mail->send();
            echo 'Message sent';
            //catch and display the error exception if the email was not successful sent
        }catch (Exception $e){
            echo 'Message not sent' . $mail->ErrorInfo;
        }
        //navigate back to the homepage
        header("Location: index.html");
    }
?>
    </body>
</html>









