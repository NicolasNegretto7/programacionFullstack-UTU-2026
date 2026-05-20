    function MiFuncion() {
    alert("Hola Mundo");

    let nombre = prompt("Cual es tu nombre?");
    if (nombre) {
        alert("Hola " + nombre);
    }
    
    let  numero1 = prompt("Dame un numero plz");
    let numero2 = prompt("Dame otro");
    var suma = Number(numero1) + Number(numero2);
    alert("el resultado es: " + suma);

    let edad = prompt("Dime tu edad");
    if (edad < 17) {
        alert("eres menor de edad");
    } else {
    alert("eres mayor de edad");
    }

    let numeroparoimpar = prompt("Dame un numero");
    if (numeroparoimpar % 2 === 0) {
        alert("su " + numeroparoimpar + " es par")
    } else {
         alert("su " + numeroparoimpar + " es impar")
        }

    let numero11 = prompt("Dame numero 1");
    let numero22 = prompt("Dame numero 2");
    let numero33 = prompt("Dame numero 3");

    if (numero11 > numero22 && numero33) {
        alert("tu " + numero11 + " es mayor")

    } else if(numero22 > numero33 && numero11) {
        alert("tu " + numero22 + " es mayor")
    } else {
        alert("tu " + numero33 + " es mayor")
    }
}

