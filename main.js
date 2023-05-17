let nombre = prompt("Ingrese su nombre de usuario para continuar");
alert(`Bienvenido/a ${nombre} a este fanstástico exchange!`);
const valores = [
    {
        Nombre: "dolar",
        Precio: 495,
        Disponibilidad: "si",
    },
    {
        Nombre: "euro",
        Precio: 248,
        Disponibilidad: "si",
    },
    {
        Nombre: "real",
        Precio: 43,
        Disponibilidad: "si",
    },
];
let respuesta1 = prompt("Le interesaria conocer información sobre alguna moneda?");
if (respuesta1 === "si" || respuesta1 === "Si") {
    var respuesta2 = prompt("Sobre cual moneda?");
    if (respuesta2 === "dolar") {
        alert("El " + valores[0].Nombre + " tiene un precio de " + valores[0].Precio + " y " + valores[0].Disponibilidad + " se encuentra disponible en este momento");
    }
    if (respuesta2 === "euro") {
        alert("El " + valores[1].Nombre + " tiene un precio de " + valores[1].Precio + " y " + valores[1].Disponibilidad + " se encuentra disponible en este momento");
    }
    if (respuesta2 === "real") {
        alert("El " + valores[2].Nombre + " tiene un precio de " + valores[2].Precio + " y " + valores[2].Disponibilidad + " se encuentra disponible en este momento");
    }
} else {
    alert("Okay, recuerde que estamos aqui para usted");
}


let repes = parseFloat(prompt("Cuantas operaciones diferentes desesa realizar?"));
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

            case "euros":
                return cantidad * 248;

            case "reales":
                return cantidad * 43;

            default:
                return "No manejamos esa moneda";
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

const banks = [
    {
        Nombre: "Banco BBVA",
        Ubicación: "zona sur",
        Horario: "8hs a 13hs",
        Seguridad: "baja",
    },
    {
        Nombre: "Banco Santander",
        Ubicación: "zona centro",
        Horario: "9hs a 16hs",
        Seguridad: "muy alta",
    },
    {
        Nombre: "Banco Nacion",
        Ubicación: "zona norte",
        Horario: "8hs a 14hs",
        Seguridad: "alta",
    },
    {
        Nombre: "Banco Galicia",
        Ubicación: "zona oeste",
        Horario: "7hs a 12hs",
        Seguridad: "muy baja",
    },
]
let respuesta3 = prompt("En que banco le gustaria realizar el movimiento? Asi le podemos pasar la informacion acerca de su banco---Las opciones son: Banco BBVA , Banco Santander , Banco Nacion , Banco Galicia");
const banco = banks.find((el) => el.Nombre === respuesta3);
alert("El nombre es: " + banco.Nombre);
alert("Se ubica en: " + banco.Ubicación);
alert("El horario de atencion es de: " + banco.Horario);
alert("La seguridad es: " + banco.Seguridad);

let respuesta4 = prompt("En que zona reside?");
const zona = banks.filter((la) => la.Ubicación.includes(respuesta4));
const zonacercana = banks.find((la) => la.Ubicación === respuesta4);
alert("Nuestra recomendacion es que se acerque al " + zonacercana.Nombre + " ya que se encuentra en su zona, pero esto es solo una sugerencia.");

let punteo = prompt("Muchas gracias por acudir a nuestro servicio! Quisiera puntuar nuestra atención?")
if (punteo === "si" || punteo === "Si" || punteo === "SI") {
    prompt("Puntea su experiencia del 1 al 10, siendo 1 la calificación más baja y 10 la más alta");
    alert("Muchisimas gracias por colaborar! Que tenga una hermosa semana.");
}
else {
    alert("No importa, gracias igual! Que tenga una hermosa semana.");
}
