console.log("Paso por contact form");

// Por ahora todo tipo de dato ingresa por prompt
let myEdad = parseInt(prompt("Que edad tenes?"));

// Cual es la diferencia entre let var y const?
// entre let y var en 1 mismo archivo no hay diferencia.
// const es constante una vez definido no se puede cambiar.

const PI = 3.141592653589793; // Tambien se podria Maht.PI

const EDAD_MINIMA = 18;

let tieneEdadMinima = (myEdad >= EDAD_MINIMA); // Uso el operador > para comparar numeros
//let myValorFalse = false;

if( !tieneEdadMinima  ) { // if ( condition ) si la condicion es verdadera pasa sino no.
    alert("Sos Menor, no podes ingresar");
    document.location = "../index.html"; // Te vas al index.html
} else {
    alert("Bienvenido!");
}

let myInputNumber = parseInt(prompt("Ingrese un Numero"));

console.log(Math.floor(myInputNumber/2)); // Convierte a IEEE 754 y luego toma la parte entera

console.log(myInputNumber>>1); // Divido por dos y me quedo con el entero

console.log(myInputNumber<<1); // Multiplicar por dos 

////////////////////////////
//  Como es el 15 en binario?
//  1111 en binario
// Si lo divido / 2 esto se convierte a decimal...

// 7 en binario es 0111

// Si divido 15 / 2 ... es 7 + 1 de resto...

console.log("El resto es: " + myInputNumber%2);

let esPar = ( (myInputNumber%2) == 0 )? true:false;

if(esPar) {
    alert("El numero elegido es Par");
}
