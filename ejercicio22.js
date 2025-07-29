const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

// Índice para recorrer frutas sin repetir
let fruitIndex = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan && fruitIndex < fruits.length) {
    foodSchedule[i].name = fruits[fruitIndex];
    foodSchedule[i].isVegan = true; // Ahora sí es vegano
    fruitIndex++;
  }
}

console.log("Plan de comidas actualizado:", foodSchedule);
