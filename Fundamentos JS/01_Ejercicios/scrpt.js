console.log("wepa")

function temperaturasTarea() // para indentificar las cosas
{
    let resultado = ""
    let temps = prompt("la temperatura es: ")

    if(temps <0){
        resultado = `esta haciendo full frio: <h2>${temps}°</h2>`
    } else if (temps > 0, temps <=25){
        resultado = `estamos a una temperatura normal: <h2>${temps}°</h2>`
    } else if (temps > 25) {
        resultado = `esta haciendo arto calor: <h2>${temps}°</h2>`
    }
    document.getElementById('lista').innerHTML = resultado;
}   
