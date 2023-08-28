const tabContent = document.querySelectorAll(".tab-content");
const tabBtn = document.querySelectorAll(".tab-btn");
tabContent[0].classList.add("active");
tabBtn[0].classList.add("active");

tabBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });

    // !add the active class to the selected tab content
    tabContent[index].classList.add("active");

    // !Remove the active class from all tab button
    tabBtn.forEach((b) => {
      b.classList.remove("active");
    });

    // ! Add active class to the clicked button
    btn.classList.add("active");
  });
});
