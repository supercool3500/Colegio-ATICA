<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'libs/PHPMailer-master/src/Exception.php';
require 'libs/PHPMailer-master/src/PHPMailer.php';
require 'libs/PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'danilodomingue10@gmail.com';
        $mail->Password = 'xkfg yssx fktn lubc'; // Asegúrate de usar tu contraseña real aquí
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Configuración del correo
        $mail->setFrom($email, "$nombre $apellido");
        $mail->addAddress('danilodomingue10@gmail.com');
        $mail->Subject = 'Nuevo mensaje del formulario de inscripción';
        $mail->Body    = "Nombre: $nombre\nApellido: $apellido\nTeléfono: $telefono\nEmail: $email\nMensaje: $mensaje";

        $mail->send();
        echo 'Correo enviado con éxito.';
        header('Location: http://localhost/Colegio-ATICA/inscripciones.html');
        exit();
    } catch (Exception $e) {
        echo "Error al enviar el correo: {$mail->ErrorInfo}";
    }
}
