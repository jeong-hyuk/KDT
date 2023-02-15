//추가 버튼 클릭
const addBtn = document.querySelector(".input-btn");
//li요소를 추가하여야하기 때문에 먼저 정의된 ul을 가져온다
const todoList = document.querySelector(".todo-list");
//텍스트 부분
const inputTask = document.querySelector(".input-task");

function btnClick() {
  //만약 텍스트 부분인 inputTask 변수에 빈 문자열이 들어갔을 때 placeholder을 띄운다
  if (inputTask.value == "") {
    inputTask.placeholder = "내용을 입력하세요!";
  } else {
    //li 요소를 생성한다
    //li태그 안에 부분은 텍스트 요소의 값을 가져온다
    //ul의 변수인 todoList의 자식 요소에 li태그를 추가한다
    let li = document.createElement("li");
    li.innerText = inputTask.value;
    todoList.appendChild(li); //apendchild 는 createElement로 만들어진 것만 붙일 수 있다 //노드를 리턴한다

    //버튼을 만들어준다
    //버튼에 삭제라고 표기한다
    //delBtn이라는 함수를 만들어 함수 안에는 li를 지울 수 있게 만든다
    let dbtn = document.createElement("button");
    dbtn.textContent = "삭제";
    li.append(dbtn);

    //위에 선언한 button의 변수인 dbtn은 click 이벤트를 발생시켰을 때 함수인 delBtn을 실행시킨다
    dbtn.addEventListener("click", delBtn);

    //input타입을 checkBtn이라는 변수로 추가시킨다
    //prepend는 선택한 요소 맨 앞에 추가된다(li 앞에 checkBtn을 추가시킨다)
    //checkBtn에 클릭 이벤트를 발생시켜 아래 if 문을 동작하게 한다
    let checkBtn = document.createElement("input");
    checkBtn.setAttribute("type", "checkbox");
    li.prepend(checkBtn);
    checkBtn.addEventListener("click", () => {
      if (checkBtn.checked === true) {
        checkBtn.parentNode.style.textDecoration = "line-through";
      } else {
        checkBtn.parentNode.style.textDecoration = "none";
      }
    });
  }
}
//addBtn변수를 클릭했을 때 btnClick함수를 써라?
addBtn.addEventListener("click", btnClick);

function delBtn(e) {
  e.target.parentNode.remove();
}
