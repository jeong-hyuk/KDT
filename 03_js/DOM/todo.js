const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

function inputText() {}
inputTask.addEventListener("input", inputText);

function btnClick() {
  const checkBtn = document.createElement("input");
  if (checkBtn.checked === true) {
    const li = document.createElement("li");
  }
}
addBtn.addEventListener("click", btnClick);

function addList() {}

checkBtn.setAttribute("type", "checkbox");
checkBtn.addEventListener("click", function () {
  if (checkBtn.checked === true) {
    checkBtn.parentNode.style.textDecoration = "line-through";
  } else {
    checkBtn.parentNode.style.textDecoration = "none";
  }
});
addLi.append(checkBtn);

const checkBtn = document.createElement("input");
checkBtn.setAttribute("type", "checkbox");
checkBtn.addEventListener("click", function () {
  if (checkBtn.checked === true) {
    checkBtn.parentNode.style.textDecoration = "line-through";
  } else {
    checkBtn.parentNode.style.textDecoration = "none";
  }
});
addLi.append(checkBtn);
