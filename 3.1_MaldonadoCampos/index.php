<?php
        require 'conexion.php';
        session_start();
?>
<html>
    <head>
        <title>Pagina 1</title>
        <link rel="stylesheet" href="style.css">
        <meta charset="UTF-8">
    </head>
    <body>
        <header>
            <img src="img/js.png">
            <h1>Edgar Osvaldo Maldonado Campos</h1>
        </header>
        <main>
            <div>
                <h1>Lista de libros</h1>
                <button><a href="registrar.php">Nuevo</a></button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Editorial</th>
                            <th>Autor</th>
                            <th>Enlace</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php

                            $q = "SELECT titulo,editorial,autor,enlace,precio FROM libros";
                                        
                            // $consulta = mysqli_query($conexion,$q);
                            $consulta = $conexion->query($q);
                            $numero = $consulta->num_rows;


                            for ($i = 0; $i < $numero; $i++) {
                                $fila = $consulta->fetch_object();
                                echo "<tr>";
                                    echo "<td> $fila->titulo </td>";
                                    echo "<td> $fila->editorial </td>";
                                    echo "<td> $fila->autor </td>";
                                    echo "<td> $fila->enlace </td>";
                                    echo "<td> $fila->precio </td>";
                                echo "</tr>";
                            }                   
                        ?>
                    </tbody>
                </div>
            </table>
        </main>
        <footer>
            <h1>Programación web</h1>
        </footer>
    </body>

</html>