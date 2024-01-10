const modalBtn = document.querySelector(".modal-btn");
const content = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", () => {
  //Add the "open-modal" class to the class attribute, where class name is "modal-overlay".
  content.classList.add("open-modal");
});
closeBtn.addEventListener("click", () => {
  //Remove the "open-modal" class from the class attribute, where class name is "modal-overlay".
  content.classList.remove("open-modal");
});
