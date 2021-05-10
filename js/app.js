console.log("Paso por contact form");

// Por ahora todo tipo de dato ingresa por prompt
let myEdad = parseInt(prompt("Que edad tenes?"));

// Cual es la diferencia entre let var y const?
// entre let y var en 1 mismo archivo no hay diferencia.
// const es constante una vez definido no se puede cambiar.

const PI = 3.141592653589793; // Tambien se podria Maht.PI

const EDAD_MINIMA = 18;

let tieneEdadMinima = (myEdad >= EDAD_MINIMA); // Uso el operador > para comparar numeros

if( tieneEdadMinima ) {
    
}