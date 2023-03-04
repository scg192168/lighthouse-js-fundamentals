const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
//the while loop that prints out the contents of ingredients//
let i = 0;
let text = "";
while (ingredients[i]) {
  text += ingredients[i];
  i++;
}

//the for loop that prints out the contents of ingredients//
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let i = 0;
let text = "";
for (ingredients[i]) {
  text += ingredients[i];
  i++;
}


//the loop for printing out the contents of ingredients backwards//
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
console.log("ingredients backwards:");
for (let i = 7; i >= 0, i--) {
  console.log(ingredients[i]);
}