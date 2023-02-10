// // // Switch
// // let day;
// // switch (new Date().getDay()) {
// //   case 0:
// //     day = "일요일";
// //     break;
// //   case 1:
// //     day = "월요일";
// //     break;
// //   case 2:
// //     day = "화요일";
// //     break;
// //   case 3:
// //     day = "수요일";
// //     break;
// //   case 4:
// //     day = "목요일";
// //     break;
// //   case 5:
// //     day = "금요일";
// //     break;
// //   case 6:
// //     day = "토요일";
// //     break;
// // }
// // console.log(day);

// let gender = "F";
// switch (gender) {
//   case "F":
//     console.log("여성입니다");
//     break;
//   case "M":
//     console.log("남성입니다");
//     break;
//   default:
//     console.log("외계인입니다");
//     break;
// }

// console.log("------------------");
// // 3항 연산자
// let tetzName = "LHS";
// if (tetzName == "LHS") {
//   console.log("맞았어요 🤩");
// } else {
//   console.log("틀렸어요 😥");
// }
// tetzName != "LHS" ? console.log("맞았어요 🤩") : console.log("틀렸어요 😥");

// console.log("------------------");
// //실습

let da = new Date().getDay();
if (da == 0) {
  console.log("일요일");
} else if (da == 1) {
  console.log("월요일");
} else if (da == 2) {
  console.log("화요일");
} else if (da == 3) {
  console.log("수요일");
} else if (da == 4) {
  console.log("목요일");
} else if (da == 5) {
  console.log("금요일");
} else if (da == 6) {
  console.log("토요일");
}

console.log("-------------------");
if (new Date().getDay(5)) {
  console.log("금요일");
}
