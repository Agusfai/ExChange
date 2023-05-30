const nombretuyo = document.getElementById("respuesta-1");
const compraventa = document.getElementById("respuesta-2");
const elegirmoneda = document.getElementById("respuesta-3");
const cantidadelegida = document.getElementById("respuesta-4");

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
let bloque = document.querySelector(".dolar");
bloque.addEventListener("mouseenter", () => {
  bloque.style.backgroundColor = "rgb(111, 192, 166)";
});
bloque.addEventListener("mouseleave", () => {
  bloque.style.backgroundColor = "rgb(164, 212, 196)";
});

let bloque1 = document.querySelector(".euro");
bloque1.addEventListener("mouseenter", () => {
  bloque1.style.backgroundColor = "rgb(111, 192, 166)";
});
bloque1.addEventListener("mouseleave", () => {
  bloque1.style.backgroundColor = "rgb(164, 212, 196)";
});

let bloque2 = document.querySelector(".real");
bloque2.addEventListener("mouseenter", () => {
  bloque2.style.backgroundColor = "rgb(111, 192, 166)";
});
bloque2.addEventListener("mouseleave", () => {
  bloque2.style.backgroundColor = "rgb(164, 212, 196)";
});

function agarrar() {
  let textobienvenida = document.getElementById("textobienvenida");
  textobienvenida.innerHTML = `Le damos la bienvenida ${nombretuyo.value} a este fantastico ExChange.`;
  console.log(nombretuyo);
}

function agarrar3() {
  let textobienvenida3 = document.getElementById("textobienvenida3");
  textobienvenida3.innerHTML = `Que moneda quiere ${compraventa.value}:`;
  console.log(compraventa);
}

function agarrar4() {
  calculadora(cantidadelegida.value, elegirmoneda.value);
}

function calculadora(cantidadelegida, elegirmoneda) {
  let total = 0;
  switch (elegirmoneda) {
    case "dolares":
      total = cantidadelegida * 495;
      break;

    case "euros":
      total = cantidadelegida * 248;
      break;

    case "reales":
      total = cantidadelegida * 43;
      break;

    default:
      return "No manejamos esa moneda";
  }

  if (compraventa.value === "vender") {
    alert(
      `Usted deberá ir al banco con una suma de ${cantidadelegida} ${elegirmoneda} para recibir el monto final de ${total} pesos`
    );
  }
  if (compraventa.value === "comprar") {
    alert(
      `Usted deberá ir al banco con una suma de ${total} pesos a retirar una suma de ${cantidadelegida} ${elegirmoneda}`
    );
  }
}
