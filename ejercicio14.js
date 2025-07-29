const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  const counter = {};

  for (let i = 0; i < list.length; i++) {
    const word = list[i];
    
    if (counter[word]) {
      counter[word]++; // Si ya existe, suma 1
    } else {
      counter[word] = 1; // Si no existe, inicia en 1
    }
  }

  return counter;
}

// Llamada a la función y mostrar resultado
console.log("Repeticiones:", repeatCounter(words));
