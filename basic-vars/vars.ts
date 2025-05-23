//las variables base son las comunes string, number, booblean
//undefined nos sirve para cuando no sabemos si la var va a ser de un tipo o no

let numero: number = 21;
let nombre: string = "juan";
let mes: string | undefined;

console.log (`El mes inicial es: ${mes}`);
mes = "Julio";
console.log(`El mes ahora es, ${mes}`)

console.log(`Tu edad es, ${numero}`);