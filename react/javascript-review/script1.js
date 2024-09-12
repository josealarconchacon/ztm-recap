const foods = [
  {
    id: 1,
    name: "Apple",
    type: "Fruit",
    nutrients: [
      { name: "Vitamin C", amount: "7 mg", dailyValuePercentage: 10 },
      { name: "Fiber", amount: "4 g", dailyValuePercentage: 14 },
      { name: "Potassium", amount: "195 mg", dailyValuePercentage: 5 },
    ],
    origins: ["USA", "China", "Poland"],
    seasonalAvailability: ["Fall", "Winter"],
    categories: ["Organic", "Non-GMO", "Fresh"],
  },
  {
    id: 2,
    name: "Broccoli",
    type: "Vegetable",
    nutrients: [
      { name: "Vitamin K", amount: "101.6 mcg", dailyValuePercentage: 85 },
      { name: "Vitamin C", amount: "89 mg", dailyValuePercentage: 99 },
      { name: "Fiber", amount: "3.3 g", dailyValuePercentage: 13 },
    ],
    origins: ["Italy", "China", "USA"],
    seasonalAvailability: ["Winter", "Spring"],
    categories: ["Organic", "Non-GMO", "Fresh"],
  },
];

function getFoods() {
  return foods;
}

function getFood(id) {
  return foods.find((f) => f.id === id);
}

// Corrected function call to getMovie to find a specific movie by id
const food = getFood(1);
food;

// Arrow Functions
const getName = (str) => str.split("-")[0];
getName;

// filter food by type
const getFoodsByType = (type) => foods.filter((food) => food.type === type);
// Example usage:
const fruits = getFoodsByType("Fruit");
fruits;

// Find Food by ID
const getFoodById = (id) => foods.find((food) => food.id === id);
// Example usage:
const foodById = getFoodById(1);
console.log(foodById);
