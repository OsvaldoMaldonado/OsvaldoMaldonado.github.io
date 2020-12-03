<?php
    session_start();
    if(!lisset($_SESSION['usuario'])){
        header('Location: login.php');
        exit;
    }
?>