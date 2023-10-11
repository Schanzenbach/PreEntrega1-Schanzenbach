//act 1

// function entrada() {
//     let entry = prompt("Ingrese algo lol: ");
//     return entry;
// };

// function procesamiento(valor) {
//     let value = `El valor ${valor} ha sido procesado.`;
//     return value;
// };

// function salida(x) {
//     alert(`${x} Este es el resultado por alerta.`);
// };

// salida(procesamiento(entrada()));


// act 2


// function numberReceptor(num) {

//     return Math.round(num);
// };

// for (i=0; i<5; i++) {
//     let x = parseFloat(prompt("Ingrese número a redondear: "));
//     alert(numberReceptor(x));
// };


// act 3

// function impuesto (precio, porcentaje) {
//     let tax = precio + (precio * porcentaje/100);
//     return tax;
// };

// for (i=0; i<5; i++) {
//     let price = parseFloat(prompt("Ingrese el monto: "));
//     let percentage = parseFloat(prompt("Ingrese el impuesto en %: "));
//     alert(impuesto(price, percentage));
// };


// act 5
function validacion(cadena) {
    if (cadena === "") {
        return false;
    } else {
        return true;
    };
};

let entry = prompt("Ingrese una cadena: ");
while (entry !== "ESC") {
    alert(validacion(entry));
    entry = prompt("Ingrese una cadena: ");
};
