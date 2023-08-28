const container = document.querySelector(".modal-container");
const modalContent = document.querySelector(".modal-content");
const btn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", () => {
  container.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
const onClickOutSide = (event) => {
  if (!modalContent.contains(event.target)) {
    container.classList.remove("active");
  }
};

document.addEventListener("mousedown", onClickOutSide);
