let grade = "F";
console.log("Entering Switch Block\n");
switch (grade) {
  case "A":
    console.log("Good Job<br\n");
    break;

  case "B":
    console.log("Preety Good<br\n");
    break;

  case "C":
    console.log("Passed\n");
    break;

  case "D":
    console.log("Not so Good\n");
    break;

  case "F":
    console.log("Failed\n");
    break;

  default:
    console.log("Unknown Grade\n");
}
console.log("Exiting Switch Bolck");

//for loop
for (i = 1; i <= 10; i++) {
  console.log(i + "\n");
}

// while loop
i = 0;
while (i < 10) {
  i++;
  console.log(i + "\n");
}

//do while loop
var i = 15;
do {
  console.log(i + "\n");
  i++;
} while (i <= 40);
