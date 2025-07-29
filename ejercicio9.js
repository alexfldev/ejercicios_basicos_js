const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let suma = 0;

  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i];
  }

  return suma;
}

// Llamamos a la función
console.log("La suma total es:", sumNumbers(numbers));
