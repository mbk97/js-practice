const body = document.getElementsByTagName("body")[0];
const btn = document.getElementById("btn");

const colors = [
  "#821d98",
  "#9d2110",
  "#e066ee",
  "#687e0f",
  "#456ac4",
  "#9b2976",
  "#2bdf58",
  "#057c3f",
];

btn.addEventListener("click", () => {
  //  ! generate a random number using the length of colors in the array
  const randomIndex = Math.floor(Math.random() * colors.length);

  // ! use the randomIndex to randomly select a color from the array of colors
  const randomColor = colors[randomIndex];

  // ! assign the random color to the body
  body.style.backgroundColor = randomColor;
  btn.style.color = randomColor;
});
