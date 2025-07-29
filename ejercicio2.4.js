let precioBaseGlobal = 25000; 

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000 };

// Actualizar el precio
nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

// resultado
console.log("Precio final de " + nave1.nombre + ": " + nave1.precioFinal + " créditos.");
console.log("Precio final de " + nave2.nombre + ": " + nave2.precioFinal + " créditos.");
