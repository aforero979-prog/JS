let nombres = [
    { nombre: "Alejandro", apellido: "Hernandez", peso: 92, edad: 22, altura: 1.87 },
    { nombre: "Camilo", apellido: "Suarez", peso: 70, edad: 18, altura: 1.73 },
    { nombre: "Eduardo", apellido: "Martinez", peso: 110, edad: 40, altura: 1.68 },
    { nombre: "Daniel", apellido: "Alvarez", peso: 61, edad: 34, altura: 1.87 },
    { nombre: "Francisco", apellido: "Zapata", peso: 52, edad: 28, altura: 1.94 }
];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i].nombre, "tiene un índice de masa corporal de", imc(nombres[i].peso, nombres[i].altura).toFixed(2));
}

function init(){

    nombres.forEach( function ( person ) ) {

        const imc = calcularimc (nombres.peso , nombres.altura)
        console.log( imc.tofixed(2))

    }
}

const message = diagnosticar(number(imc.toFixed(2)))

//-----------------------------------------------------------------------------------------------------//

function calcularimc(peso, altura) {
    return peso / (altura ** 2);
}

//Throw new Error()  === Agrega un error por consola para que el desarrollador lo vea y entienda el problema.
//----------------------------------------------------------------------------------------------------//

function diagnosticar(imc) {
    if (imc >= 30) {
        return "debe entrenar más";
    } else if (imc >= 18.5) {
        return "tiene un índice nomral";
    } else {
        return "debe alimentarse mejor";
    }
}

console.log (diagnosticar(26))