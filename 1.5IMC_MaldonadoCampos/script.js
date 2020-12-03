function imc(){
    peso = document.getElementById("peso").value;
    estatura = document.getElementById("estatura").value;
    indice = document.getElementById("imc");
    
    resultado = (peso/(estatura*estatura));


    if(resultado < 18.5){
        indice.innerText="Infrapeso, IMC: " + resultado.toFixed(2);
        document.getElementById("img").style.backgroundImage = "url('img/infrapeso.png')";
    }else if(resultado >= 18.5 && resultado <= 24.9){
        indice.innerText="Peso Normal, IMC: " + resultado.toFixed(2);
        document.getElementById("img").style.backgroundImage = "url('img/pesonormal.png')";
    }else if(resultado >= 25 && resultado <=  29.9){
        indice.innerText="Sobrepeso, IMC: " + resultado.toFixed(2);
        document.getElementById("img").style.backgroundImage = "url('img/sobrepeso.png')";
    }else if(resultado >= 30 && resultado <= 34.9){
        idice.innerText="Obesidad, IMC: " + resultado.toFixed(2);
        document.getElementById("img").style.backgroundImage = "url('img/obesidad.png')";
    }else if(resultado >= 35){
        indice.innerText="Obesidad Morbida, IMC: " + resultado.toFixed(2);
        document.getElementById("img").style.backgroundImage = "url('img/obesidadmorbida.png')";
    }

}