function mostarTabla(){

    let numero = document.getElementById("numero").value;
    let cantidad = document.getElementById("cantidad").value;
    let resultado = document.getElementById("resultado");
    let tabla = document.createElement("table");
    
    resultado.appendChild(tabla);

    let filaencabezado = document.createElement("tr");
    let columnaencabezado = document.createElement("th");
    let columnaencabezado2 = document.createElement("th");

    columnaencabezado.innerText = numero + "* :"
    columnaencabezado2.innerText = "Resultado:";
  
    columnaencabezado.style.cssText = 'background-color: white;padding:5px;width:10%;';
    columnaencabezado2.style.cssText = 'background-color: white;padding:5px;width:10%;';
  
    tabla.appendChild(filaencabezado);
    tabla.appendChild(columnaencabezado);
    tabla.appendChild(columnaencabezado2);

    resultado.style.cssText = 'padding-left:30%;padding-right:30%';
    

    for(let step = 0; step < cantidad; step++){
        let fila = document.createElement("tr");
        let columna = document.createElement("th");
        let columna2 = document.createElement("th");
        columna.innerText = step+1;
        columna2.innerText = numero * (step+1);
        
        columna.style.cssText = 'background-color: white;padding:5px;width:10%;';
        columna2.style.cssText = 'background-color: white;padding:5px;width:10%;';

        tabla.appendChild(fila);
        tabla.appendChild(columna)
        tabla.appendChild(columna2);
    }
    
}