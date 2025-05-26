let nombres: string[] = ['Juan', 'Pedro', 'Maria'];
console.log("Los candidatos son:", nombres);

let edades: number[] = [20, 30, 25];
console.log("Las edades son:", edades);

let mixto: (string | number)[] = ['Juan', 20, 'Pedro', 30, 'Maria', 25];
console.log("El array mixto es:", mixto);

interface Persona {
    nombre: string;
    edad: number;
    livesInBogota: boolean;
}   

let personas: Persona[] = [
    { nombre: 'Juan', edad: 20, livesInBogota: true },
    { nombre: 'Pedro', edad: 30, livesInBogota: false },
    { nombre: 'Maria', edad: 25, livesInBogota: true }
];

personas.push({ nombre: 'Luis', edad: 28, livesInBogota: false });
console.log("Las personas son:", personas);


//Tuplas
// luego de quedar definida la tupla, no se puede modifcar o alterar la informacion o datos
//
let tupla: [string, number, boolean] = ['Juan', 20, true];
console.log("La tupla es:", tupla);

//enumeradores
// Los enumeradores son una forma de definir un conjunto de constantes en donde no se pueden elegir por fuera del array
enum Dias {
    lunes,
    martes,
    miercoles,
    jueves,
    viernes
}