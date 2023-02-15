// JS 구현
//캘린더 전체를 의미
const calendar = document.querySelector("table");
//왼쪽 텍스트 박스에 있는 날짜
const date = document.querySelector("#date");
//내용 입력 텍스트 부분
const con = document.querySelector("#content");

// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;
function inputCal(e) {
  if (e.target.tagName === "P") {
    console.log(e.target);
    targetEl = e.target;
    date.value = "2023년 2월 " + targetEl.innerText + "일";
  }
}
calendar.addEventListener("click", inputCal);

function writeSchedule() {
  let li = document.createElement("div");
  li.innerText = con.value;
  con.value = "";
  targetEl.parentNode.appendChild(li);
  li.addEventListener("click", function () {
    li.remove();
  });
}
