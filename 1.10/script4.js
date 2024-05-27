function generarLista() {
    var lista = document.getElementById('lista');
    lista.innerHTML = ''; // Limpiar la lista antes de generar una nueva

    var i = 0;
    while (i <= 100) {
    lista.innerHTML += '<li>' + i + '</li>';
    i += 5;
    }
}


function generarsegundaLista() {
    var lista = document.getElementById('lista2');
    lista.innerHTML = ''; // Limpiar la lista antes de generar una nueva

    var i = 0;
    while (i <= 10) {
    lista.innerHTML += '<li>' + i + '</li>';
    i += 1;
    }
}

function generarterceraLista() {
    var lista = document.getElementById('lista3');
    lista.innerHTML = ''; // Limpiar la lista antes de generar una nueva

    var i = 2;
    while (i <= 22) {
    lista.innerHTML += '<li>' + i + '</li>';
    i += 2;
    }
}

function compararNumeros() {
var numeros = [];
var numeroMayor;

for (var i = 0; i < 5; i++) {
    var numero = prompt("Ingresa el número " + (i+1));
    numeros.push(Number(numero));

    if (i === 0 || numero > numeroMayor) 
        numeroMayor = numero;
    
}

alert("El número mayor es: " + numeroMayor);
}


function generarcuartaLista () {

let = parseInt(prompt("ingrese la cantidad de numeros para la lista"));
let arrayPares = [];

for(let i = 1; 1 <= n; 1++){

}
}