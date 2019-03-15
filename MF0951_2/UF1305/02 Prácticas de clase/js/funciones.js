// JavaScript Document
function miFuncion() {
document.getElementById('demo3').innerHTML = "Párrafo cambiado.";
document.getElementById('demo3').style.color = "blue";
}

// Método length
function longitud() {
	var frase = prompt("Por favor, introduce tu nombre");
	var largo = frase.length;
	alert("Tu nombre tiene: " + largo + " caracteres");
}

// Método charAt()
function posicion() {
	var palabra = prompt("Por favor, introduce tu nombre");
	var largo = palabra.length; // número
	var numero = prompt("Introduce un número del 0 al " + largo);
	var numeroPosicion = palabra.charAt(numero);
	alert("La posición del caracter de la palabra es: " + numeroPosicion);
}

// Método charCodeAt()
function caractercode() {
	var letra = prompt("Por favor, introduce un caracter");
	var numero = letra.charCodeAt(0);
	alert("El número de la letra " + letra + " es; " + numero);
}

// Método fromCharCodeAt()
function codecaracter() {
	var numero = prompt("Por favor, introduce un número del 32 al 126"); // 33 string
	var entero = parseInt(numero); // 33 number
	var code = String.fromCharCode(entero);
	// var tipo = typeof(entero);
	alert("La letra con el número " + entero + " es: " + code);
} 

// Método toUpperCase()
function mayusculas() {
	var texto = prompt("Introduce una frase");
	var convertir = texto.toUpperCase();
	alert("El texto convertido a mayúsculas es: " + convertir);
}

// Método toLowerCase()
function minusculas() {
	var texto = prompt("Introduce una frase");
	var convertir = texto.toLowerCase();
	alert("El texto convertido a minúsculas es: " + convertir);
}

// Método concat()
function concatenar() {
	var nombre = prompt("Escribe tu nombre");
	var apellido = prompt("Escribe tu apellido");
	var enlace = nombre.concat(" ", apellido);
	alert("Nombre completo: " + enlace);
}

// Método endsWith()
function termina() {
	var frase = prompt("Escribe una frase que termine con un punto");
	var final = frase.endsWith(".");
	alert("¿La frase termina con un punto? " + final);
}

// Método includes()
function contiene() {
	var frase = prompt("Escribe una frase que contenga una coma");
	var final = frase.includes(",");
	alert("¿La frase contiene una coma? " + final);
}

// Método indexOf()
function indiceDe() {
	var frase = prompt("Por favor, introduce una frase con al menos 3 palabras");
	var palabra = prompt("Por favor, introduce la palabra de la cual quieras su posición");
	var pos = frase.indexOf(palabra);
	alert("Su posición es: " + pos);
}

// Método lastIndexOf()
function indiceFi() {
	var frase = prompt("Por favor, introduce una frase con al menos 4 palabras");
	var palabra = prompt("De que palabra quieres la posición");
	var pos = frase.lastIndexOf(palabra);
	alert("Su posición es: " + pos);
}

// Método localeCompare()
function compara() {
	var frase1 = prompt("Escribe una frase");
	var frase2 = prompt("Escribe una frase");
	var comp = frase1.localeCompare(frase2);
	alert("Su posición es: " + comp);
}

// Método match()
function coincide() {
	var frase = prompt("Escribe una frase");
	var cadena = prompt("Escribe una cadena a buscar en la frase");
	var regexp = new RegExp(cadena, 'gi');
	var resultado = frase.match(regexp);
	alert(resultado);
}

// Método repeat()
function repite() {
	var frase = prompt("Escribe algo");
	var rep = frase.repeat(3);
	alert(rep);
}

// Método replace()
function sustituye() {
	var frase = prompt("Escribe una frase");
	var palabra = prompt("Palabra a sutituir de dicha frase");
	var palabra2 = prompt("Palabra nueva");
	var resultado = frase.replace(palabra, palabra2);
	alert(resultado);
}