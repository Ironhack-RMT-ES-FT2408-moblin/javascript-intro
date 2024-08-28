console.log("Aprendiendo Javascript! desde la consola y su propio archivo")

// los console.log son metodos que ayudar al desarrollador a detectar problemas.

/* 

comentarios
de
multiples
lineas

*/


// VARIABLES

// declaración de variable
let hobby

console.log(hobby) // abrimos la caja y miramos dentro
// undefined es cuando JS define que una cajita está vacia

// inicialización de variable
hobby = "videojuegos"

console.log(hobby)

// reasignación de variable
hobby = "escalar"

console.log(hobby)

// declaración e inicialización de variable en la misma linea
let otroHobby = hobby // abriendo la cajita hobby, y el mismo valor se lo doy a la cajita otroHobby

console.log(otroHobby)


// cosas que no podemos o no debemos hacer al crear variables

// let 1fruta // no puedo empezar con numeros o otro simbolos
// let var // no podemos crear variables con nombres reservados
// let micomidafavoritadelmundomundial

// siempre con camelCasing
let miComidaFavoritaDelMundoMundial


// const y let

let age = 30;
console.log(age)

age = 31;
console.log(age)

const username = "bob"
console.log(username)

// username = "patricio" // no puedo asignar otro valor a una constante

// const lastName // JS no lo permite

const KEY = "BANANA"

// los objetos y array y funciones de tipo flecha siempre se deberian crear como constantes.

// tambien existe var

// 1. var es una palabra legacy. ES6 var se reemplazó por let y const
// 2. var NO la deberiamos utilizar. Si la vemos en alguna documentación, la cambiamos a let y const.



// typeof

let variable1 = "patata"
console.log(typeof variable1) // string

let variable2 = 20
console.log(typeof variable2) // number

let variable3 = true
console.log(typeof variable3) // boolean

let variable4 = null
console.log(typeof variable4) // si es de tipo null. dice object por error de javascript

let variable5 = { username: "bob" }
console.log(typeof variable5) // object

let variable6 = () => {/* ... */}
console.log(typeof variable6) // function. realmente es de tipo de data object

let variable7 = [ 40, 30, 20 ] 
console.log(typeof variable7) // object. Si es correcto. ES TIPO DE DATA OBJECT

let variable8 = NaN
console.log(typeof variable8) // number

let variable9 = undefined
console.log(typeof variable9) // undefined

// undefined vs null

// undefined es algo que comunmente asigna el sistema para definir que algo está vacio
// null es algo que define es desarrollador y más adelante va a tener un valor



// STRINGS

let fruit1 = "fresa"
let fruit2 = "banana"
let fruit3 = "tomate"

// concatenar strings
// let receta = "La bebida lleva: " + fruit1 + " y " + fruit2
// console.log(receta)

// interpolación de strings ``
let receta = `La bebida lleva: ${fruit1}, ${fruit2} y ${fruit3}`
console.log(receta)


// indexación y posiciones de caracteres


let simpleString = "holahola"
//                  ||||
//                  0123

console.log(simpleString.length) // cantidad de caracteres


// notación de corchetes. Acceder a un caracter especifico
console.log(simpleString[3])

// como busco el ultimo
console.log(simpleString[simpleString.length - 1])


// Metodos => basados en funciones. Acciones especiales que podemos hacer sobre este tipo de data.

console.log(simpleString.indexOf("l")) // está en la posición 2
console.log(simpleString.indexOf("h")) // está en la posición 0
console.log(simpleString.indexOf("f")) // está en la posición -1 // no existe
console.log(simpleString.lastIndexOf("ola")) // está en la posición 5



const longWord = "bananaramawakwaksamiramiraheheh"

// slice. para copiar
console.log( longWord.slice(16, 20) ) // sami. De una posición a otra
console.log( longWord.slice(16) ) // samiramiraheheh. De una posición hasta el final

console.log( longWord.slice(-4) ) // eheh. Ultimos X caracteres.



// NUMBERS

let posNum = 10;
let negNum = -20
let floatNum = 15.34
let valorNotANumber = NaN
let infinito = Infinity

console.log(posNum, negNum, floatNum)


let num1 = 6;
let num2 = 2;

console.log(num1 + num2) // 8
console.log(num1 - num2) // 4
console.log(num1 * num2) // 12
console.log(num1 / num2) // 3
console.log(num1 ** num2) // 36

console.log( num1 % num2 ) // 2 + 2 + 2 => 6 --- el restante es 0
console.log( 7 % 2 ) // 2 + 2 + 2 => 6 ---- el restante es 1


console.log(24 % 7)


// Operadores de asignación

let myAge = 26;
console.log(myAge)

myAge = myAge + 1
console.log(myAge)

myAge += 1
console.log(myAge)

myAge++
console.log(myAge)


// Coercion => JS intenta cambiar los tipo de data hasta llegar a un resultado esperado

console.log( 3 + 5 ) // 8
console.log( "3" + "5" ) // "35"

console.log( "5" - "3" ) // 2

console.log( "javascript" - "script" ) // NaN => not a number

let numero1 = 5
let string1 = "3"

console.log( numero1 + parseInt(string1) ) // "53"

// como convertir de string a numero:
// window.parseInt(string) o simplemente parseInt(string)
// Number(string)
// +string



// Objeto global Math

let numeroAleatorio = Math.random() // 0 - 0.99999999999
console.log(numeroAleatorio)

let numeroAleatorioEntre1Y10 = Math.floor(Math.random() * 10) // 0 - 0.99999999999

console.log( Math.max(4, 10, 20, 3) )
console.log( Math.min(4, 10, 20, 3) )


// BOOLEANS

let posBool = true;
let negBool = false;

console.log(posBool)

// (NOT) Operador. Operador para invertir el booleano

console.log(!negBool)


// comparacion

let food1 = "hamburguesa"
let food2 = "pizza"
let food3 = "hamburguesa"

console.log(food1 === food2) // false
console.log(food1 === food3) // true

// . !== (Es diferente de)
console.log(food1 !== food2) // true

let number1 = 12
let number2 = 8

console.log(num1 > num2)
console.log(num1 <= num2)


console.log("a" > "t") // false. 97 > 116

// === vs ==

// === (Operador de comparación estricta. Compara tipo de data y valor)
// == (Operador no estricto. Solo compara valor)

console.log("5" === "5") // true
console.log("5" === 5) // false
console.log("5" == 5) // true
console.log("5" == 20) // false


// Operadores logicos && ||

console.log( "manzana" === "manzana" && "banana" === "pera" ) // false
//                      true         &&          false

// Solo es true si ambos son true
// Es false y al menos uno es false


console.log( "manzana" === "patata" || "banana" === "pera" ) // true
//                      true         ||          false

// Solo es false si ambos son false
// Es true y al menos uno es true


console.log("***** ACTIVIDAD *****")

// Guess the console input for each console.log

// Part 1.

console.log(true && false && true);  // false
console.log((11 % 3) === 2); // true
console.log(false || !false); // true
console.log(false || (false && true)); // false
console.log(17 == '17'); // true
console.log((100 + 23) === '123'); // false
console.log('Hello' - 'llo'); // NaN

// Part 2.

let statement = 'i love javaScript!';

console.log(statement.indexOf("I")) // -1

let subStatement = statement.slice(7);
console.log(subStatement); // "javaScript!"

console.log(subStatement[0].toUpperCase()) // "J"

subStatement.toUpperCase(); // JAVASCRIPT!
console.log(subStatement); // javaScript!

// JAVASCRIPT!
// javaScript!
// JavaScript!


// console.log( typeof "patata" === typeof "tomate" )



// CONDICIONALES

let naranjas = 3;

/* 

if (condicion) {
  lo que ocurre si la condicion es verdadero
}
*/

if ( naranjas === 0 ) {
  console.log("Te has quedo sin naranjas")
  // si consigo esta condicion, ignoro todas las demas
} else if ( naranjas > 0 && naranjas <= 4 ) {
  console.log("puedes prepararte un zumo de naranja")
} else if ( naranjas > 4) {
  console.log("puedes hacer zumo para todos")
} else {
  console.log("Paso pasó algo raro. Se daño la maquina :(")
}


// Si los condicionales dependen de la misma variable o valor. Se deberian encadenar.

// Si los condicionales usan diferentes variable, normalmente se harán por separado



// Truthy y falsy

if (0) {
  console.log("esto se ejecuta")
}

// los numeros tienen un aspecto que asemeja algo true (Truthy)
// el numero 0 o NaN tienen un aspecto que asemeja algo false (Falsy)

if (0 || "" || false || null || undefined || NaN) {
  console.log("esto nunca se ejecuta")
}

let firstName = null

// console.log(`Hola ${firstName}`)

if (firstName) {
  console.log(`Hola ${firstName}`)
} else {
  console.log(`Hola visitante, selecciona tu nombre`)
}


// For loop


/*

for (inicializaciónDeControl; condicionDeCuandoOcurriráElBucle; ejecuciónFinal) {
  el código a ejecutar X cantidad de veces
}

*/

for ( let variableControl = 0; variableControl < 10; variableControl = variableControl + 1) {

  // let variableControl = 0 // ocurre una sola vez al inicio del bucle

  // if (variableControl < 10) continua el bucle. else, deten el bucle

  console.log("ejecutando bucle", variableControl)

  // variableControl = variableControl + 1 // al final de cada interación. Vuelve al iniciar proxima iteración
}


for (let i = 15; i <= 10; i += 2) {
  console.log("ejecutando", i)
}


// loops sobre strings

let encodedString = "B?!*??!n!!*!n?!*?!? !w1!w??!k!o???o!! 1!!???o"

// 1. cambiar todos los "*"" por "a"
// 2. remover todos los "!" y "?"
// 3. remover todo lo que haya despues del espacio

let secretCode = ""

for (let i = 0; i < encodedString.length; i++) {

  let characterToAdd = encodedString[i]

  if (characterToAdd === "*") {
    characterToAdd = "a"
  } else if (characterToAdd === "!" || characterToAdd === "?") {
    // characterToAdd = ""
    continue; // deten esta iteración del bucle y continua con la siguiente
  } else if (characterToAdd === " "){
    break // deten por completo el bucle
  }

  secretCode += characterToAdd

}

console.log(secretCode)

