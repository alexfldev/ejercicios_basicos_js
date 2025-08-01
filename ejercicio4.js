const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1 - Saca a "Tendo" por consola atacando su posición
console.log(aldeanos[3]); // Resultado: Tendo

// 4.2 - Coloca en el último lugar de este array a "Cervasio"
aldeanos.push("Cervasio");

// 4.3 - Cambia el primer elemento de este array por "Bambina"
aldeanos[0] = "Bambina";

// 4.4 - Dale la vuelta a este array
aldeanos.reverse();

// 4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array
let indexNarciso = aldeanos.indexOf("Narciso");
if (indexNarciso !== -1) {
  aldeanos.splice(indexNarciso, 1, "Canela");
}

// 4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explícitamente
console.log(aldeanos[aldeanos.length - 1]);


console.log("Array final:", aldeanos);
