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

    let edad = parseInt(prompt("Dime tu edad"));
    if (edad < 17) {
        alert("eres menor de edad");
    } else {
    alert("eres mayor de edad");
    }

    let numeroparoimpar = parseInt(prompt("Dame un numero"));
    if (numeroparoimpar % 2 === 0) {
        alert("su " + numeroparoimpar + " es par")
    } else {
         alert("su " + numeroparoimpar + " es impar")
        }

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

    for (let i = 0; i < 11; i++) {
        console.log(i);
    }

    for (let i = 0; i < 21; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

    let contra = prompt("ponga la contraseña correspondiente");
    if(contra === "1234") {
        alert("contraseña correcta");
    } else {
        alert("contraseña incorrecta");
    }

    let sumaepica = 0;
    let numerowhile;
    while (numerowhile !== 0) {
        numerowhile = parseInt(prompt("Ingrese un numero hasta el 0"));
        sumaepica += numerowhile;
    } {
    alert("la suma total es " + sumaepica); 
    }
    

    let numerocalcu1 = parseInt(prompt("ingrese numero 1"));
    let numerocalcu2 = parseInt(prompt("ingrese numero 2"));
    let op = prompt("elige si (sumar +, restar -, multiplicar *)");

    switch (op) {
        case "+":
            op = (numerocalcu1 + numerocalcu2);
            break;
        case "-":
            op = (numerocalcu1 - numerocalcu2);
        case "*":
            op = (numerocalcu1 * numerocalcu2);
    }

    if (op !== undefined) {
        alert("resultado " + op);
    }

    
    
}

