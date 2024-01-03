<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $header = 'From: ' . $mail . "\r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $header .= "Mime-Version: 1.0\r\n";
    $header .= "Content-Type: text/plain; charset=utf-8\r\n";

    $messageToSend = "Este mensaje fue enviado por: " . $name . "\r\n";
    $messageToSend .= "Su e-mail es: " . $mail . "\r\n";
    $messageToSend .= "Teléfono de contacto: " . $phone . "\r\n";
    $messageToSend .= "Mensaje: " . $message . "\r\n";
    $messageToSend .= "Enviado el: " . date('d/m/Y', time());

    $para = 'lucas.caruso27@gmail.com';
    $asunto = 'Mensaje enviado desde tu formulario de contacto';

    mail($para, $asunto, utf8_decode($messageToSend), $header);

    header("Location: index.html");
    exit();
}
?>