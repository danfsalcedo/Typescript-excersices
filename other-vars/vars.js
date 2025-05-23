//any nos permite ingresar variables de cualquier tipo a costa de perder la verificacion de tipos
var varAny;
varAny = 44;
console.log("la variable es: ".concat(varAny));
//unknown realiza una accion similar a any pero debemos de realziar una verificacion previa para hacer uso de esta
var varunknown;
//varunknown = "maria";
varunknown = 15;
console.log("la variable es" + varunknown);
if (typeof varunknown === "string") {
    console.log("el resultado de la varialbes es: ".concat(varunknown));
}
