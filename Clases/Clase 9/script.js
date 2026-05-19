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
    if (Number(edad) < 17) {
        alert("eres menor de edad");
    } else {
    alert("eres mayor de edad");
    }

    let numeroparoimpar = prompt("Dame un numero");
    if (Number(numeroparoimpar) % 2 === 0) {
        alert("su " + numeroparoimpar + " es par")
    } else {
         alert("su " + numeroparoimpar + " es impar")
        }

    let numero11 = prompt("Dame numero 1");
    let numero22 = prompt("Dame numero 2");
    let numero33 = prompt("Dame numero 3");

    if (Number(numero11) > Number(numero22) Number(numero33)) {
        alert("su " + numero11 + " es mayor que los demas")
    } else {
        alert("su " + numero11 + " es menor que los demas")
    }
}