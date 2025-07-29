// 1.1 Bucle del 0 al 9 mostrando i
console.log("1.1 Bucle del 0 al 9:");
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 1.2 Bucle del 0 al 9 mostrando solo si i es divisible entre 2
console.log("\n1.2 Solo valores pares del 0 al 9:");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 1.3 Contando ovejas para dormir
console.log("\n1.3 Contando ovejas:");
for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    console.log("Intentando dormir 🐑");
  } else {
    console.log("¡Dormido!");
  }
}
