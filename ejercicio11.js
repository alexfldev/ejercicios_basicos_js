const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];

function averageWord(list) {
  let total = 0;

  for (let i = 0; i < list.length; i++) {
    const item = list[i];

    if (typeof item === 'number') {
      total += item; // Sumar el número directamente
    } else if (typeof item === 'string') {
      total += item.length; // Sumar la longitud del string
    }
  }

  return total;
}

// Llamar a la función y mostrar el resultado
console.log("La suma mezclada es:", averageWord(mixedElements));
