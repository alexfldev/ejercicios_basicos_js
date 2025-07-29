const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, nameToFind) {
  const index = nameList.indexOf(nameToFind);

  if (index !== -1) {
    console.log(true, "→ Posición:", index);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

// Ejemplos de uso
nameFinder(names, 'Bruce');    // true → Posición: 7
nameFinder(names, 'Loki');     // false
