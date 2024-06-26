console.log ("Ejecutando")
// Pedir la altura de la persona al usuario
let altura = prompt("Por favor, ingrese su altura en cm:");

// Convertir la entrada a un número
altura = Number(altura);

// Verificar la altura y mostrar el mensaje correspondiente
if (altura <= 150) {
    alert("Persona de altura baja");
} else if (altura >= 151 && altura <= 170) {
    alert("Persona de altura media");
} else if (altura >= 171) {
    alert("Persona alta");
} else {
    alert("Por favor, ingrese un valor numérico válido.");
}

            let notaMatematicas = prompt("Por favor, ingrese su nota en Matemáticas:");
            let notaEspanol = prompt("Por favor, ingrese su nota en Español:");
            let notaSociales = prompt("Por favor, ingrese su nota en Sociales:");

            notaMatematicas = Number(notaMatematicas);
            notaEspanol = Number(notaEspanol);
            notaSociales = Number(notaSociales);

            let promedio = (notaMatematicas + notaEspanol + notaSociales) / 3;

            if (promedio === 10) {
                alert("Promedio Excelente");
            } else if (promedio > 7 && promedio < 10) {
                alert("Promedio Bueno");
            } else if (promedio <= 7) {
                alert("Promedio Insuficiente");
            } else {
                alert("Por favor, ingrese valores numéricos válidos para las notas.");
            }
        
function seleccionarJugador() {

    let estatura = prompt("Por favor, ingrese su estatura en centímetros:");
    estatura = Number(estatura);


    let velocidad = prompt("Por favor, ingrese su velocidad en segundos (por ejemplo, tiempo en correr 100 metros):");
    velocidad = Number(velocidad);


    let edad = prompt("Por favor, ingrese su edad:");
    edad = Number(edad);

    const estaturaMinima = 180;
    const velocidadMinima = 10; 

    if (isNaN(estatura) || isNaN(velocidad) || isNaN(edad)) {
        alert("Por favor, ingrese valores numéricos válidos para estatura, velocidad y edad.");
        return; 
    }


    if (estatura >= estaturaMinima && velocidad >= velocidadMinima) {

        if (edad < 18) {
            alert("Felicitaciones, ha sido seleccionado para las divisiones menores del equipo de baloncesto.");
        } else {
            alert("Felicitaciones, ha sido seleccionado para el equipo profesional de mayores.");
        }
    } else {

        alert("Lo sentimos, no cumple con los requisitos para ingresar al equipo de baloncesto.");
    }
}

// Llamar a la función para ejecutar el código
seleccionarJugador();


function calcularPagoEscritorios() {
    // Pedir el número de escritorios comprados
    let numEscritorios = prompt("Por favor, ingrese el número de escritorios que desea comprar:");
    numEscritorios = Number(numEscritorios);

    // Pedir el precio por escritorio
    let precioPorEscritorio = prompt("Por favor, ingrese el precio por escritorio:");
    precioPorEscritorio = Number(precioPorEscritorio);

    // Validar que las entradas sean números válidos
    if (isNaN(numEscritorios) || isNaN(precioPorEscritorio) || numEscritorios <= 0 || precioPorEscritorio <= 0) {
        alert("Por favor, ingrese valores numéricos válidos y mayores a cero para la cantidad de escritorios y el precio.");
        return; // Salir de la función si alguna entrada no es válida
    }

    // Calcular el descuento basado en la cantidad de escritorios
    let descuento;
    if (numEscritorios < 5) {
        descuento = 0.10;
    } else if (numEscritorios < 10) {
        descuento = 0.20;
    } else {
        descuento = 0.40;
    }

    // Calcular el precio total y el monto del descuento
    let precioTotal = numEscritorios * precioPorEscritorio;
    let montoDescuento = precioTotal * descuento;
    let precioFinal = precioTotal - montoDescuento;

    // Mostrar los resultados
    alert(`Precio total antes del descuento: $${precioTotal.toFixed(2)}`);
    alert(`Monto del descuento: $${montoDescuento.toFixed(2)}`);
    alert(`Precio final a pagar: $${precioFinal.toFixed(2)}`);
}

// Llamar a la función para ejecutar el código
calcularPagoEscritorios();

