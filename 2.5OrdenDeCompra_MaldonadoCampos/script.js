var numeroProducto = 1;
var subtotal = 0;
var iva = 0;
var total = 0;

function agregar(){

    let nombreProducto = document.getElementById("productos");
    var selected = nombreProducto.options[nombreProducto.selectedIndex].text;

    var subtotalLocal = 0;
    var ivaLocal = 0;
    var totalLocal = 0;

    let precio = document.getElementById("precio").value; 
    let cantidad = document.getElementById("cantidad").value;

    let tbody = document.getElementById("lista");
    let fila = document.createElement("tr");
    fila.setAttribute("id","1");

    let numero = document.createElement("th");
    let producto = document.createElement("th");
    producto.setAttribute("id","producto");
    let precioUnitario = document.createElement("th");
    precioUnitario.setAttribute("id","presioUnitario");
    let unidades = document.createElement("th");
    unidades.setAttribute("id","unidades");
    let monto = document.createElement("th");
    let seccionborrar = document.createElement("th");
    
    let montosubtotal = document.getElementById("montosubtotal");
    let montoiva = document.getElementById("montoiva");
    let montototal = document.getElementById("montototal");

    let imgBorrar = document.createElement("img");
    let borrar = document.createElement("button");

    imgBorrar.src = "img/eliminar.png";
    imgBorrar.style.cssText = "height:20px;";
    borrar.appendChild(imgBorrar);

        borrar.onclick=function(){
            let filaEliminar = document.getElementById("1");	
            if (!filaEliminar){
                alert("El elemento selecionado no existe");
            } else {
                padre = fila.parentNode;
                padre.removeChild(fila);
            }
            total -= totalLocal;
            iva -= ivaLocal;
            subtotal -= subtotalLocal;

            montosubtotal.innerText=subtotal.toFixed(2);
            montoiva.innerText=iva.toFixed(2);
            montototal.innerText=total.toFixed(2);
        };

    let imgModificar = document.createElement("img");
    let modificar = document.createElement("button");
    modificar.setAttribute("id","botonModificar");
    
    imgModificar.src = "img/editar.png";
    imgModificar.style.cssText = "height:20px;";
    modificar.appendChild(imgModificar); 

        modificar.onclick=function(){
            let editarProducto = document.createElement("select");
            editarProducto.setAttribute("id","editProducto");
            let producto1 = document.createElement("option");
            let producto2 = document.createElement("option");
            let producto3 = document.createElement("option");
            let producto4 = document.createElement("option");

            producto1.innerText = "Gabinete Asus ROG Strix";
            producto2.innerText = "Mause Logitech G305";
            producto3.innerText = "Memoria RAM DDR4 16GB";
            producto4.innerText = "Mause Alambrico Game Factor";

            editarProducto.appendChild(producto1);
            editarProducto.appendChild(producto2);
            editarProducto.appendChild(producto3);
            editarProducto.appendChild(producto4);

            let editarPrecio = document.createElement("input");
            editarPrecio.setAttribute("id","editPrecio");
            editarPrecio.type = "text";

            let editarCantidad = document.createElement("input");
            editarCantidad.setAttribute("id","editCantidad");
            editarCantidad.type = "text";

            let filaEliminar = document.getElementById("1");	
            if (!filaEliminar){
                alert("El elemento selecionado no existe");
            } else {
                producto.innerText="";
                producto.appendChild(editarProducto);
                
                precioUnitario.innerText="";
                precioUnitario.appendChild(editarPrecio);
                unidades.innerText="";
                unidades.appendChild(editarCantidad);

                let eliminarBoton = document.getElementById("botonModificar");	
                if (!eliminarBoton){
                    alert("El elemento selecionado no existe");
                } else {
                    padre = modificar.parentNode;
                    padre.removeChild(modificar);
                }
                
                let imgGuardar = document.createElement("img");
                let guardar = document.createElement("button");
                guardar.setAttribute("id","botonGuardar");

                imgGuardar.src = "img/guardar.png";
                imgGuardar.style.cssText = "height:20px;";
                guardar.appendChild(imgGuardar);
                
                guardar.onclick=function(){
                    let editnombreProducto = document.getElementById("editProducto");
                    var editSelected = editnombreProducto.options[editnombreProducto.selectedIndex].text;

                    var editPrecioUnitario = document.getElementById("editPrecio").value;
                    var editUnidades = document.getElementById("editCantidad").value;

                    producto.innerText=editSelected;
                    precioUnitario.innerText= editPrecioUnitario;
                    unidades.innerText=editUnidades;
                    monto.innerText=parseFloat(editPrecioUnitario*editUnidades);

                    total -= totalLocal;
                    iva -= ivaLocal;
                    subtotal -= subtotalLocal;

                    subtotalLocal = parseFloat(editPrecioUnitario*editUnidades);
                    ivaLocal = parseFloat((subtotalLocal)*0.16);
                    totalLocal = parseFloat(subtotalLocal+ivaLocal);

                    subtotal += subtotalLocal;
                    iva += ivaLocal;
                    total += totalLocal;
                    
                    montosubtotal.innerText=subtotal.toFixed(2);
                    montoiva.innerText=iva.toFixed(2);
                    montototal.innerText=total.toFixed(2);

                    let eliminarBoton2 = document.getElementById("botonGuardar");	
                    if (!eliminarBoton2){
                        alert("El elemento selecionado no existe");
                    } else {
                        padre = guardar.parentNode;
                        padre.removeChild(guardar);
                    }

                    seccionborrar.appendChild(modificar);
                };
                
                seccionborrar.appendChild(guardar); 

            }
            
        };
    
    seccionborrar.appendChild(borrar);
    seccionborrar.appendChild(modificar);
    producto.innerText=selected;
    numero.innerText=numeroProducto;

    if(numeroProducto%2==0){
        fila.style.cssText='background-color: wheat; border: white 3px solid;';
    }
    else{
        fila.style.cssText='background-color: #b9b8a7; border: white 3px solid;';
    }

    numeroProducto++;
    precioUnitario.innerText=precio;
    unidades.innerText=cantidad;
    monto.innerText=parseFloat(precio*cantidad);

    fila.appendChild(numero);
    fila.appendChild(producto);
    fila.appendChild(precioUnitario);
    fila.appendChild(unidades);
    fila.appendChild(monto);
    fila.appendChild(seccionborrar);
    tbody.appendChild(fila);
    
    subtotalLocal = parseFloat(precio*cantidad);
    ivaLocal = parseFloat((subtotalLocal)*0.16);
    totalLocal = parseFloat(subtotalLocal+ivaLocal);

    subtotal += subtotalLocal;
    iva += ivaLocal;
    total += totalLocal;

    montosubtotal.innerText=subtotal.toFixed(2);
    montoiva.innerText=iva.toFixed(2);
    montototal.innerText=total.toFixed(2);
    
}

