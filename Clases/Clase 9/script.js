    function MiFuncion() {     // todas las funciones al pulsar el boton
    alert("Hola Mundo");

    // con prompt ingresas nombre y luego muestra un mensaje de hola mas el contenido que el usuario puso en la variable numero
    let nombre = prompt("Cual es tu nombre?");
    if (nombre) {
        alert("Hola " + nombre);
    }
    
    // 2 numeros y luego se suman, mostrandose el resultado dentro de la variable suma
    let  numero1 = parseInt(prompt("Dame un numero plz"));
    let numero2 = parseInt(prompt("Dame otro"));
    if (isNaN(numero1) && isNaN(numero2)) { // codigo extra por si no se ingresa numeros correspondientes
        alert("Error.")
    } else {
    let suma = numero1 + numero2;
    alert("el resultado es: " + suma);
    }

    // pide edad, y si la variable edad es menor que 17 el programa dice que es menor, y sino, es mayor
    let edad = parseInt(prompt("Dime tu edad"));
    if (edad < 17) {
        alert("eres menor de edad");
    } else {
    alert("eres mayor de edad");
    }

    //pide un numero, el numero que se ingresa es divido por 2 y si el numero es igual a 0, es par, sino, es impar.
    let numeroparoimpar = parseInt(prompt("Dame un numero"));
    if (numeroparoimpar % 2 === 0) {
        alert("su " + numeroparoimpar + " es par")
    } else {
         alert("su " + numeroparoimpar + " es impar")
        }

    //pide 3 numeros, si el primer numero es mayor que el numero 2 y 3, mostrara que es el numero mayor, mas si el numero 2 es mayor que numero 3 y 1, mostrara que el 2 es el numero mayor, y sino, el numero mayor es el 3
    let numero11 = parseInt(prompt("Dame numero 1"));
    let numero22 = parseInt(prompt("Dame numero 2"));
    let numero33 = parseInt(prompt("Dame numero 3"));

    if (numero11 > numero22 && numero33) {
        alert("tu " + numero11 + " es mayor")
    } else if(numero22 > numero33 && numero11) {
        alert("tu " + numero22 + " es mayor")
    } else {
        alert("tu " + numero33 + " es mayor")
    }

    //pide nota, si la nota es menos o igual que 4 es inaceptable, si es mayor o igual que 5 Y es menor o igual que 7 es aceptable, y si es mayor o igual que 8 y es menor o igual que 10 es un ta bien de goku, y si la nota pasa de 10 detecta que esta demasiado alto.
    let nota = parseInt(prompt("dame tu nota"));
    if(nota <= 4) {
        alert("tu " + nota + " es inaceptable")
    } else if(nota >= 5 && nota <= 7) {
        alert("tu " + nota + " es aceptable")
    } else if(nota >= 8 && nota <= 10) {
        alert("tu " + nota + " ta bien")
    } else if (nota > 10) {
        alert("tu nota esta demasiado high")
    }

   //numeros para la consola, se suma i si es menor que 11
    for (let i = 0; i < 11; i++) {
        console.log(i);
    }
   //numeros para la consola, se suma i si es menor que 21 y saca los numeros impares.
    for (let i = 0; i < 21; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

  //ingresa contraseña, si contraseña es igual que 1234 es correcta, sino es incorrecta
    let contra = prompt("ponga la contraseña correspondiente");
    if(contra === "1234") {
        alert("contraseña correcta");
    } else {
        alert("contraseña incorrecta");
    }

    //suma epica va a estar establecido como 0 por cada suma, el numerowhile va a funcionar en bucle mientras que el numero no sea 0, luego se suman todos los numeros.
    let sumaepica = 0;
    let numerowhile;
    while (numerowhile !== 0) {
        numerowhile = parseInt(prompt("Ingrese un numero hasta el 0"));
        sumaepica += numerowhile;
    } {
    alert("la suma total es " + sumaepica); 
    }

   //ingresa 2 numeros, luego se elige que va a ser (si una suma, resta o multiplicacion), y con un swtich se establecen los casos dependiendo de que calculo decidiste hacer y te da el resultado al final
    let numerocalcu1 = parseInt(prompt("ingrese numero 1"));
    let numerocalcu2 = parseInt(prompt("ingrese numero 2"));
    let op = prompt("elige si (sumar +, restar -, multiplicar *)");
    let resultadofinal;

    switch (op) {
        case "+":
            resultadofinal = (numerocalcu1 + numerocalcu2);
            break;
        case "-":
            resultadofinal = (numerocalcu1 - numerocalcu2);
            break;
        case "*":
            resultadofinal = (numerocalcu1 * numerocalcu2);
           break;
    }

    if (resultadofinal !== undefined) {
        alert("resultado " + resultadofinal);
    }

   //con swtich haces las opciones del menu, con el primer te saluda con el nombre que ya pusiste, luego con el 2 te enseña la fecha y el 3 te enseña un numero random del 1 al 100 con mathrandom
    let opcion = prompt("Bienvenido al menu, elige 1 para saludar, elige 2 para mostrar fecha o elige 3 para un numero random");
    
    switch (opcion) {
        case "1":
        alert("Hola " + nombre);
        break;

        case "2":
            let fecha = new Date();
            alert("la fecha de hoy es: " + fecha.toLocaleDateString());
        break;

        case "3":
            let random = Math.floor(Math.random() * 100) + 1;
            alert("tu numero random es: " + random);
            break;
    }

    //numero correcto se randomiza, el do sirve para repetir el codigo hasta que aciertes junto con el while, si el numero es mayor te lo dice, si es menor te lo dice hasta que llegues al numero correcto.
    let numeroCorrecto = Math.floor(Math.random() * 10) + 1;
    let suposicion;

    do {
        suposicion = Number(prompt("Elige un número del 1 al 10 para adivinar..."));

    if (suposicion > numeroCorrecto) {
        alert("el numero correcto es MENOR que el que pusiste");
    } else if (suposicion < numeroCorrecto) {
        alert("el numero correcto es MAYOR que el que pusiste");
    }

} while (suposicion !== numeroCorrecto);

alert("Bien, el numero era: " + numeroCorrecto);

   //ingresa numeros hasta el 0, se detectan los pares con la division de 2 y que el numero no sea 0
    let pares = 0;
    let numero;

    while (numero !== 0) {
    numero = Number(prompt("Ingresa un numero (0 para terminar):"));
    if (numero % 2 === 0 && numero !== 0) {
        pares++;
    }
}

alert("ingresaste " + pares + " numeros pares");



let nombres = ["AdrianShephard", "CristianoRonaldo", "LionelMessi", "Mordecai", "Rigby"];

console.log(nombres);

let messis = ["messi1", "messi2", "messi3"];

for (let i = 0; i < messis.length; i++) {
  console.log(messis[i]);
}

let numeros123 = [3, 7, 1, 9, 4];
let mayor123 = numeros123[0];
let menor123 = numeros123[0];

for (let i = 1; i < numeros123.length; i++) {
  if (numeros123[i] > mayor123) mayor123 = numeros123[i];
  if (numeros123[i] < menor123) menor123 = numeros123[i];
}

alert("mayor: " + mayor123 + " Menor: " + menor123);



let notas123 = [8, 6, 9, 7, 5];
let suma123 = 0;

for (let i = 0; i < notas123.length; i++) {
  suma123 = suma123 + notas123[i];
}

let promedio123 = suma123 / notas123.length;
alert("promedio: " + promedio123);

let nombres123 = [];
let nombre123 = "";

while (nombre123 !== "salir") {
  nombre123 = prompt("Escribe un nombre (o escribe salir para terminar):");
  if (nombre123 !== "salir") {
    nombres123.push(nombre123);
  }
}

alert("Nombres guardados: " + nombres123);


let ranas = ["ranaterciopelo", "ranamorada", "ranaconmocos"];
alert("El array tiene " + ranas.length + " elementos");

let numeros456 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numeros456.length; i++) {
  if (numeros456[i] % 2 === 0) {
    console.log(numeros456[i]);
  }
}

let frutas = ["manzana", "banana", "naranja"];
let buscar = prompt("Busque una fruta");

if (frutas.includes(buscar)) {
  alert(buscar + " si esta en el array");
} else {
  alert(buscar + " NO esta en el array");
}

let fightclub = ["MarlaSinger", "ElNarrador", "TylerDurden"];
alert("Where Is My Mind?: " + fightclub);

fightclub.pop();

alert("Where Is My Mind...: " + fightclub);

let showdegarfield = ["odie", "garfield"];
alert("Antes: " + showdegarfield);

showdegarfield.push("Jon");
showdegarfield.push("Nermal");

alert("Despues: " + showdegarfield);


}



