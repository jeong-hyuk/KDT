//추가 버튼 클릭
const addBtn = document.querySelector(".input-btn");
//li요소를 추가하여야하기 때문에 먼저 정의된 ul을 가져온다
const todoList = document.querySelector(".todo-list");
//텍스트 부분
const inputTask = document.querySelector(".input-task");

function deleteTask(t) {
  t.parentNode.remove();
}

function addList() {
  if (inputTask.value == "") {
    inputTask.setAttribute("placeholder", "내용을 입력하세요");
    return;
  }

  const addLi = document.createElement("li");
  const checkBtn = document.createElement("input");
  checkBtn.setAttribute("type", "checkbox");
  checkBtn.addEventListener("click", function () {
    if (checkBtn.checked == true) {
      checkBtn.parentNode.style.textDecoration = "line-through";
    } else {
      checkBtn.parentNode.setAttribute("style", "text-decoration: none");
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  // deleteBtn.addEventListener("click", function (e) {
  //   e.target.parentNode.remove();
  // });
  deleteBtn.setAttribute("onclick", "deleteTask(this)");

  addLi.append(checkBtn);
  addLi.append(inputTask.value);
  addLi.append(deleteBtn);

  todoList.appendChild(addLi);

  inputTask.value = "";
}
addBtn.addEventListener("click", addList);
