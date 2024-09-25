<?php
// Datos de la base de datos
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Insertar los datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
$sql = "INSERT INTO pendientes (nombre, apellido, telefono, email, mensaje) VALUES ('$nombre', '$apellido', '$telefono', '$email', '$mensaje')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

<!-- Botón para regresar al index -->
<a href="index.html">
    <button>Regresar al inicio</button>
</a>
