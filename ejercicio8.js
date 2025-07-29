const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) {
  let longest = stringList[0]; 

  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > longest.length) {
      longest = stringList[i]; // Actualiza si encuentra una palabra más larga
    }
}

  return longest;
}

// Llamamos a la función 
console.log("La palabra más larga es:", findLongestWord(avengers));
