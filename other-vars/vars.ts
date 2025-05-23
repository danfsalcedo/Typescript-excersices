//any nos permite ingresar variables de cualquier tipo a costa de perder la verificacion de tipos

let varAny: any;
varAny = 44;

console.log(`la variable es: ${varAny}`);

//unknown realiza una accion similar a any pero debemos de realziar una verificacion previa para hacer uso de esta

let varunknown: unknown;
//varunknown = "maria";
varunknown = 15;

console.log ("la variable es" + varunknown);

if (typeof varunknown === "string") {
    console.log(`el resultado de la varialbes es: ${varunknown}`);
}

