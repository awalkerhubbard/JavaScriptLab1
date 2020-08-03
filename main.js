let userAns = "Yes";
let userName = "";
let userLives = 40;
let grantsLives = 10;
var randomNumber = Math.floor(Math.random() * 2) + 1;
do {
  userAns = prompt("Would you like to play?");
} while (userAns !== "Yes");
while (userAns === "Yes") {
  console.log("Let's Begin!");
  break;
}
do {
  userName = prompt("Please enter your name");
} while (userName === "");
{
  console.log("Thank you, let the battle begin!");
}
console.log("You have 40 lives");
console.log("Grant has 10 lives");

while (grantsLives <= 40) {
  console.log(grantsLives - randomNumber);
  grantsLives--;
}

while (userLives <= 40) {
  userLives - randomNumber;
  userLives--;
}

if ((grantsLives = 0)) {
  console.log("Grant has been defeated");
}
