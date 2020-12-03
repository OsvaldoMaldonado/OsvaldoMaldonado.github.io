<?php
    $servidor = "localhost";
    $usuario = "root";
    $contrasena = "123";
    $bd = "ejemplo3";

    $conexion = mysqli_connect($servidor, $usuario, $contrasena, $bd);

    if(!$conexion){
        die('Conexión a la base de datos' . $bd . ' fallo: ' . mysqli_connect_error());
    }

    echo "Conectado a la base de datos $bd <br/>";

    function valida_usuario_bd($usuario, $contrasena, $conexion){
        $query = "select usuario as user_Valido from usuarios where usuario='$usuario' and contrasena=MD5('$contrasena')";
        echo $query . '<br/>';
        $resultado = mysqli_query($conexion,$query) or die('Error al ejecutar la consulta');
        if(mysqli_num_rows($resultado)==0){
            return false;
        }else{
            return true;
        }
    }

    if(valida_usuario_bd('edgar','hola',$conexion)){
        echo "usuario valido";
    }else{
        echo "usuario no valido";
    }

?>