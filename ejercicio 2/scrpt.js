function identificarTemperatura() {
    let temperatura = parseInt(prompt("ingrese la temperatura actual en grados Celsios"));

    if (temperatura < 0) {
        document.getElementById("resultado").innerHTML = "Hace frío";
    } else if (temperatura >= 0 && temperatura <= 25) {
        document.getElementById("resultado").innerHTML = "La temperatura es agradable";
    } else if (temperatura > 25) { 
        document.getElementById("resultado").innerHTML = "Hace calor";
    } else {
        document.getElementById("resultado").innerHTML = "Valor no es correcto";
    }
}