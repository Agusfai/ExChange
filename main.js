let nombre = prompt("Ingrese su nombre de usuario para continuar");
alert(`Bienvenido/a ${nombre} a este fanstástico exchange!`);
let repes = prompt("Cuantas operaciones diferentes desesa realizar?");

for (i = 1; i <= repes; i++) {
    let peticion = prompt("Desea comprar o vender?");
    let moneda = prompt(`Que moneda quiere ${peticion}`);

    if (peticion === "comprar" || peticion === "vender") {
        var cantidad = parseFloat(prompt(`Ingrese la cantidad de ${moneda} que desea ${peticion}`));
    } else {
        alert("Disculpa, no ingreso una opción");
    }

    function calculadora(cantidad, moneda) {
        switch (moneda) {
            case "dolares":
                return cantidad * 495;
                break;

            case "euros":
                return cantidad * 248;
                break;

            case "reales":
                return cantidad * 43;
                break;

            default:
                return "No manejamos esa moneda";
                break;
        }
    }

    if (peticion === "vender") {
        let resultado = calculadora(cantidad, moneda);
        alert(`Usted deberá ir al banco con una suma de ${cantidad} ${moneda} para recibir el monto final de ${resultado} pesos`);
    }
    if (peticion === "comprar") {
        let resultado = calculadora(cantidad, moneda);
        alert(`Usted deberá ir al banco con una suma de ${resultado} pesos a retirar una suma de ${cantidad} ${moneda}`);
    }
}
let punteo = prompt("Muchas gracias por acudir a nuestro servicio! Quisiera puntuar nuestra atención?")
if (punteo === "si") {
    prompt("Puntea su experiencia del 1 al 10");
    alert("Muchisimas gracias por colaborar! Que tenga una hermosa semana.");
}
else {
    alert("No importa, gracias igual! Que tenga una hermosa semana.");
}
