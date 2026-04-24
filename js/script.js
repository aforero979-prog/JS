

// let edad = Number(prompt("dime tu edad"))

// console.log(edad)


// let edad = Number(prompt("¿Cual es tu edad?"));
// let nombre = (prompt("¿Cual es tu nombre?"));
// let correo = prompt("¿Cual es tu correo?")

// console.log ("Mi nombre es" , nombre , "tengo" , edad , "años y mi correo es" , correo)

//--------------------------------------------------------------------//

// let nombre = (prompt("¿Cual es tu nombre?"))
// let precio = Number(prompt("¿Cuanto te costó el producto?"))


// console.log ("Mi nombre es" , nombre , "y mi producto me costó:" , precio , "con el decuento me queda en:" , (precio - (precio * (20 / 100))))


//--------------------------------------------------------------------//


// let precio = Number(prompt("costo del producto"))
// let descuento = Number(prompt("que descuento escoges?"))

// let precioD = (precio*descuento)/100;
// console.log("precio con descuento" , precioD)
// alert("precio con descuento :" +  precioD)

// let precioF = (precio - precioD)
// console.log("tu precio dinal es de:" , precioF)
// alert("tu precio final es de:" +  precioF)


//--------------------------------------------------------------------//

// let medidaM = Number(prompt("Escribe la medida en metros:"))
// let resultadoK = (medidaM / 1000)

// alert("Tu medida en kilometros es de:" + " " + resultadoK)


// let mediadK = Number(prompt("Escribe la medida en kilometros"))
// let resultadoM = (mediadK * 1000)

// alert("tu medida en metros:" + " " + resultadoM)


//--------------------------------------------------------------------//

// let pesos = Number(prompt("Dinero en pesos"))
// let resultadoD = (pesos / 3693)

// alert(pesos + "es igual a" + resultadoD + "USD")


// let dolares = Number(prompt( "Dinero en dolares"))
// let resultadoP = (dolares * 3693)

// alert(dolares + " " + "es igual a " + resultadoP.toFixed(2) + "COP")

//--------------------------------------------------------------------//

// let gradosF = Number(prompt("grados en Farenhait"));
// let resultadoC = ((gradosF - 32) * 0.55)

// alert("la temperatura en celcius es:" + resultadoC)


// let celcius = Number(prompt("grados en Celcius"));
// let resultadosF = ((celcius * 1.8) + 32)

// alert("la temperatura en farebhait es:" + resultadosF)


//--------------------------------------------------------------------//


// let lado1 = Number(prompt("Cual es la medida del primer lado?"))
// let lado2 = Number(prompt("Cual es la medida del segundo lado?"))

// let area = (lado1 * lado2)

// alert("El area de cuadrada es de: " + area + "metros cuadrados")


//--------------------------------------------------------------------//

// let minutos = Number(prompt("Cuantos minutos quieres pasar a segundos?"))
// let minaseg = (minutos * 60)

// alert( minutos + "minutos son: " + minaseg + "segundos")

// let horas = Number(prompt("Cuantas horas quieres pasar a minutos?"))
// let minuto = (horas * 60)

// alert( horas + "horas son: " + minuto + "minutos")


//--------------------------------------------------------------------//


// let milimetros = Number(prompt("cuantos milimetros quieres pasar a centimetros?"))
// let resCM = (milimetros / 10)

// alert(milimetros + "milimetros equivale a: " + resCM + " centimetros")

// let centimetros = Number(prompt("cuantos centimetros quieres pasar a milimetros?"))
// let resMIL = (centimetros * 10)

// alert(centimetros + " centimetros son igual a: " + resMIL + " milimetros")


//--------------------------------------------------------------------//


// let nombre = "Alejandro";
// let edad = "30";
// let correo = "aforero979@gmail.com";

// console.log(`Hola, tu nombre es ${nombre}, tienes ${edad} años y tu correo es ${correo}`)

// console.log(`Hola escoge la medida:
//     1.) Centimetros
//     2.) Metros
//     3.) Kilometros
//      `)

//-------------------------------------------------------------------//

//cuánto costó la cena?, quien comió más debe pagar el doble que los demás//

// let cena = Number(prompt("Cuanto costó la cena?"))
// let asistentes = Number(prompt("Cuantos asistieron a la cena?"))
// let mas = (prompt("Quien comío más?"))


// let valorpp = ( cena / (asistentes + 1))



// console.log(`De los 4, ${mas} debe pagar ${valorpp * 2} y el resto tendrá que pagar ${valorpp}`)

//----------------------------------------------------------------------//

// let mas = (prompt("Quien comió más?"))
// let menos = (prompt("Quien comió menos?"))
// let cuantos = Number(prompt("Cuantos fueron a la cena?"))


// let cena = Number(prompt("Cuanto costó la cena?"))

// invitados * 2 + 1

// let valorpp = ( cena / (cuantos * 0.5 )) 




// console.log(`${mas} tiene que pagar ${valorpp * 4} y ${menos} tiene que pagar ${valorpp} , el resto tiene que pagar ${valorpp * 2}`)

//---------------------------------------------------------------------------------------------------------------//

// Un usuario mete una plata en un CDT, calcular intereses con el 10% de taza y a x tiempo//

// let cantidad = Number(prompt("Cuanto dinero quieres meter en el CDT?"))
// let tiempo = Number(prompt("Por cuantos meses quieres invertir el dinero?"))

// let cdt = (( cantidad * 0.1) * tiempo)
// let renta = (cantidad + cdt)

// console.log(`Tu dinero a ${tiempo} meses, tendra una crecimiento de ${cdt} teniendo una rentabilidad de ${renta}`) // 



//---------------------------------------------------------------------------------------------------------------//


// let names = [

// ]

// let name1 = prompt("dime el nombre 1")
// let name2 = prompt("dime el nombre 2")
// let name3 = prompt("dime el nombre 3")




// names.push (name1 , name2 , name3 )

// console.log (names)

//---------------------------------------------------------------------------------------------------------------//


// let notas = [

// ]

// let nota1 = Number(prompt("Ingresa la nota 1"))
// let nota2 = Number(prompt("Ingresa la nota 2"))
// let nota3 = Number(prompt("Ingresa la nota 3"))
// let nota4 = Number(prompt("Ingresa la nota 4"))
// let nota5 = Number(prompt("Ingresa la nota 5"))

// notas.push(nota1, nota2, nota3, nota4, nota5)

// let notafinal = ((notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / 5)

// console.log("Tu nota final es", notafinal)

// console.log(notas.length) 

//---------------------------------------------------------------------------------------------------------------//

// cuanto costó el producto, si la compra cuesta menos de 100 se le cobra 10% más
// si su compra es sperior es mayor a 200 se le da un descuento del 25% 

// let precios = [

// ]

// let precio1 = Number (prompt("Precio del primer producto"))
// let precio2 = Number (prompt("Precio del segundo producto"))
// let precio3 = Number (prompt("Precio del tercer producto"))
// let precio4 = Number (prompt("Precio del cuarto producto"))
// let precio5 = Number (prompt("Precio del quinto producto"))

// precios.push(precio1 , precio2 , precio3 , precio4 , precio5)

// let preciodesc = (precios[0] + precios[1] + precios[2] + precios[3] + precios[4])

// if (preciodesc <= 100) {

//     console.log ("Tienes que pagar: " , preciodesc * 1.1)

// } 

// else if (preciodesc >= 200) {

//     console.log("tienes que pagar: " , preciodesc * 0.75 )

// }

// else {

//     console.log ("No tienes ningun descuento")

// }

//-----------------------------------------------------------------------------------------------------------------//

// preguntar al usuario que operación quiere realizar y entre cuales numerios //

// let operacion = prompt(`Cual operacion quieres realizar:
//     1 = Suma  
//     2 = Resta  
//     3 = División 
//     4 = Multiplicación `)

// let numero1 = Number(prompt("Primer valor: "))
// let numero2 = Number(prompt("Segundo valor: "))


// if (operacion > 4) {

//     console.log("Opción no valida, escoge una de las opciones indicadas")
// }

// if (operacion < 1) {

//     console.log("Opción no valida, escoge una de las opciones indicadas")
// }


// if (operacion == 1 || operacion === "suma") {

//     console.log(numero1 + numero2)

// } else if (operacion == 2 || operacion === "resta") {

//     console.log(numero1 - numero2)

// } else if (operacion == 3 || operacion === "division") {

//     console.log(numero1 / numero2)

// } else if (operacion == 4 || operacion == "multiplicacion") {

//     console.log(numero1 * numero2)

// }

// else {

//     console.log("Mal")

// }

//---------------------------------------------------------------------------------------------------------------//

// Piedra papel o tijera //


// let options = ["piedra" , "papel" , "tijera"]
// let azar = Math.floor( Math.random( ) * 3)

// let computer = options[azar]

// let usuario = prompt("Escoge entre piedra, papel ó tijera: ")



// if (computer === usuario){ 

//     console.log("¡EMPATE!")
// }



// else if (computer === "piedra" && usuario === "papel"){

//     console.log("¡GANASTE!")
// }

// else if (computer === "piedra" && usuario === "tijera"){

//     console.log("Gana el computador")
// }



// else if (computer === "tijera" && usuario === "piedra"){

//     console.log("¡GANASTE!")
// }

// else if (computer === "tijera" && usuario === "papel"){

//     console.log("Gana el computador")
// }



// else if (computer === "papel" && usuario === "tijera"){

//     console.log("¡GANASTE!")
// }

// else if (computer === "papel" && usuario === "piedra"){

//     console.log("Gana el computador")
// }


// else {

//     console.log("Opción no valida")
// }



//----------------------------------------------------------------------------------------------//


// let numeros = [1 , 2 , 11 , 28 , 5 , 3 , 7 , 10 , 8]

// let pares = []

// let impares = []

// for(let i = 0 ; i < numeros.lenght ; i++) {

//     if (numeros[i] % 2 === 0){

//     pares.push(numeros[i])

// } else {

//     impares.push(numero[i])
// }

// }

//-------------------------------------------------------------------------------------------------------//

// let tabla = Number(prompt("Del 1 al 10 escoge qué tabla quieres hacer: "))
// let numero = Number(prompt("Hasta qué número quieres la tabla: "))

// for(let i = 1 ; i <= numero ; i++){
//     console.log(` ${tabla} * ${i} = ${i * tabla}`)
// }

//-------------------------------------------------------------------------------------------------------//

// let numeros = [1,2,3,4,5,6,7,8,90]

// let suma = 0
// let mayor = 0

// for(let i = 0 ; i < numeros.length -1 ; i++) {

//     console.log(numeros[3])

// }


//--------------------------------------------------------------------------------------------------------//

// let frutas = ["manzana" , "banana" , "naranja" , "uva" , "mango",
//     "fresa", "piña", "sandía", "kiwi", "pera", "melón", "cereza",
// ]

// let letras = []



// for(let i = 0 ; i < frutas.length; i++) [

//     letras = frutas[i].length ,
  
//    console.log( `la palabra`, frutas[i], `tiene`, letras , `letras`)

// ]


// let mayor = ''
// let menor = ''

// for( let i = 0 ; i < frutas.length; i++){ 

//     letras = frutas[i].length 

//    if(mayor.length < letras){
//     mayor = frutas[i]
//    } 

//    if(menor.length > letras){
//     menor = frutas[i]
//    } 
   

//    console.log(`la palabra más larga es:`, mayor)
//    console.log(`la palabra más corta es:`, menor)
   
    
// }

//--------------------------------------------------------------------------------------------------//

// let estudiantes = [
//   { "nombre": "Juan Pérez", "notaFinal": [3 , 3 , 5 , 3] },
//   { "nombre": "María Gómez", "notaFinal": [2.8, 2 , 5 , 1] },
//   { "nombre": "Carlos López", "notaFinal": [2, 2 , 4 , 1] },
//   { "nombre": "Ana Martínez", "notaFinal": [2.8, 2 , 3 , 1] },
//   { "nombre": "Luis Rodríguez", "notaFinal": [2.8, 2 , 5 , 1] },
//   { "nombre": "Sofía Hernández", "notaFinal": [2, 2 , 1 , 1] },
//   { "nombre": "Diego Torres", "notaFinal": [2.8, 2 , 3 , 1] },
//   { "nombre": "Valentina Ruiz", "notaFinal": [3, 2 , 3 , 1] },
//   { "nombre": "Andrés Castro", "notaFinal": [2.8, 2 , 3 , 1] },
//   { "nombre": "Camila Vargas", "notaFinal": [3 , 3 , 5 , 3] }
// ]

// for(let i = 0 ; i < estudiantes.length ; i++){

//     let final = estudiantes[i].notaFinal
//     let nombre = estudiantes[i].nombre

//     if(final < 3){
//         console.log(`el estudiante ${nombre} no pasó la materia ya que su nota es ${final}`)
//     }else{
//         console.log(`el estudiante ${nombre} pasó la materia ya que su nota es ${final} `)
//     }

// }

// for(let i = 0 ; i < estudiantes.length ; i++){

//     let final = estudiantes[i].notaFinal
//     let suma = 0 


//     for(let j = 0 ; j < final.length ; j++){

//          suma = suma + final[j];

//          console.log( `el estudiante`, suma / final.length)

//     }

    

// }


//-------------------------------------------------------------------------------------//

// let azar = Math.floor ((Math.random () * 10 ) + 1)

// let estado = true
// let intentos = 1



// while (estado) {

//     let num = Number(prompt("Escoge un número:" ))

//     if(num === azar) {

//         alert(`Ganaste en: ${intentos}`)
//         estado = false

//     } else if(intentos >= 5) {
         
//         alert(`Perdiste, no te quedan más intentos!, el número era ${azar}`)
//         estado = false


//     } else{

//         alert(`Ese no era`)
//     }

//     intentos++
// }

//----------------------------------------------------------------------------------------------//

// let mes = Number(prompt(`Escoge un numero de mes: `))


// switch (mes) {
//     case 1: 
//         alert(`Enero: Invierno`)        
//         break;
//     case 2:
//         alert(`Febrero: Invierno`)         
//         break;
//     case 3:
//         alert(`Marzo: Primavera`)         
//         break;
//     case 4:
//         alert(`Abril: Primavera`)         
//         break;
//     case 5:
//         alert(`Mayo: Primavera`)         
//         break;
//     case 6:
//         alert(`Junio: Verano`)        
//         break;
//     case 7:
//         alert(`Julio: Verano`)        
//         break;
//     case 8:
//         alert(`Agosto: Verano`)        
//         break;
//     case 9:
//         alert(`Semptiembre: Otoño`)        
//         break;
//     case 10:
//         alert(`Octubre: Otoño`)        
//         break;
//     case 11:
//         alert(`Noviembre: Otoño`)        
//         break;
//     case 12:
//         alert(`Diciembre: Invierno`)        
//         break;

//     default:
//         break;
// }

//-------------------------------------------------------------------------------//

// let año = Number(prompt(`Escoge un año: `))


// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {

//     alert(`Es bisiesto`)

// } else {

//     alert(`No es bisiesto`)
// }


//------------------------------------------------------------------------------//



// let año = [2004 , 2026 , 412, 1984]

// let bisiesto = ``

// for(let i ; i < año.length ; i++){

//     if(año[i] = ((año[i] % 4 === 0 && año[i] % 100 !== 0) || año[i] % 400 === 0)) {

//         console.log(`Este año ${año[i]} es bisisiesto`)

//     } else {

//         console.log(`Este año no`)
//     }
// }


//--------------------------------------------------------------------------------//


