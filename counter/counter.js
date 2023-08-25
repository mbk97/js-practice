let countInput = document.querySelector(".count");
const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  countInput.value = count;
});

decreaseBtn.addEventListener("click", () => {
  if (count !== 0) {
    count--;
    countInput.value = count;
  } else {
    alert("Value caanot be a negative number");
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countInput.value = count;
});
