//miVariable=5.2
//miOtraVariable = "Hola"
//console.log(miVariable)
//console.log(miOtraVariable)
//console.log("Mi esperanza de vida es de "+miVariable+" años")
//let miVariable2
//const constante = 3
//console.log("Mi esperanza de vida es de "+constante+" años")
////Para comentarios
////No se puede 
///*
//    const constante = 3
//    console.log("Mi esperanza de vida es de "+constante+" años")
//*/
//
//var resultado = 2 + 2 
//console.log(resultado)
//var resultadodivision = 2 /2
//console.log(resultadodivision)
//var resultadodivisionnoint = 1/2
//console.log(resultadodivision)
////
//var op1=2
//var op2=3
//var resultado2 = op1 + op2
//console.log(resultado2)

//Condicionales
//let minumero = 6
//
//let resultadodepregunta = minumero==7
//console.log(resultadodepregunta)
//
//if(minumero == 6)
//{
//    console.log("si mi numero es 6")
//}
//else 
//{
//    console.log("No es 6")
//

//let minumero = 6
//if(minumero === "6")
//{
//    console.log("Si")
//}
//else 
//{
//    console.log("No")
//}
//
//if(minumero != 50)
//{
//    console.log("Si")
//}
//else
//{
//    console.log("No")
//}
//
////Ottros operadores >,<,=<,=> && 
//if(minumero === 6 && minumero != 50)
//{
//    console.log("Deja de usar Si para verdadero")
//}
//else 
//{
//    console.log("Deja de usar No para falso")
//}
// || Con que una funcion se cumpla es verdadero && Los dos deben cumplirse para que sea verdadero
//let test=5
//if(5>0)
//{
//    console.log("El numero es positivo")
//}
//else if(S==0)
//{
//    console.log("El numero es cero")
//}
//else 
//{
//    console.log("El numero es negativo")
//}

//Ciclos y Bucles

//let minumero =6
//let i=1
//while (i<=5) {
//    console.log(i)
//    i+=1
//}

//LOS MISMO PERO CON FOR

//for(let i=1; i<=10; i++)
//{
//    console.log(i)
//}

//FUNCIONES 
//saludar()
//
//function saludar()
//{
//    console.log("Hola mamá")
//}
//
//function saludarconnombre(nombre, edad)
//{
//    console.log("hola "+nombre)
//    console.log("Tu edad es "+ edad)
//}
//
//
//saludarconnombre("laura",18)
//
//function multiplicacion(num1,num2)
//{
//    let resultado = num1 * num2
//    return resultado
//}
//
//let recibidor = multiplicacion(2,5)
//console.log(recibidor)

//ARRAYS

//let miArreglo = ["David","Fernando","Kevin"]
//console.log(miArreglo)
//
//for(let i=0; i<3; i++)
//{
//    console.log(miArreglo[i])
//}

let persona = {
    nombre : "David",
    edad: 24,
    masculino: true,
}

persona.comidafavorita="Hamburguesa"

let persona2 = {
    nombre : "Omar",
    edad: 16,
    masculino: false,
}

console.log(persona)

console.log(persona2)

console.log(persona.nombre)

persona.nombre="Ya no eres David"

console.log(persona.nombre)

let arreglodDeObjetos = [persona,persona2]


