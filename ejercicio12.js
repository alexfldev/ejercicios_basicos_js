const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
  const uniqueItems = [];

  for (let i = 0; i < list.length; i++) {
    if (!uniqueItems.includes(list[i])) {
      uniqueItems.push(list[i]); // Solo agrega si no está en el nuevo array
    }
  }

  return uniqueItems;
}

// Llamar a la función y mostrar el resultado
console.log("Array sin duplicados:", removeDuplicates(duplicates));
