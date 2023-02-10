// //if
// let age = 39;
// age += 2;

// if (age <= 40) {
//   console.log("늙었다");
// } else if (age <= 40 && age >= 20) {
//   console.log("그는 mz 입니다");
// } else {
//   console.log("그는 x 세대 입니다");
// }

// console.log("-------------------------");
// //if 중첩
// let isOld = true;
// let isRich = false;

// if (isOld) {
//   if (isRich) {
//     console.log("망했어요");
//   } else {
//     console.log("낫배드");
//   }
// } else {
//   if (isRich) {
//     console.log("대박");
//   } else {
//     console.log("부럽");
//   }
// }

// console.log("-------------------------------");
// // 여성이고, 이름이 Jane 이거나 성인이면 통과
// let gender = "M";
// let name = "Tom";
// let isAdult = true;
// if ((gender === "F" && name === "Jane") || isAdult === true) {
//   console.log("통과");
// } else {
//   console.log("돌아가");
// }

let isAdult = false;
let VIP = false;
let isDrunken = false;
let money = true;

if (((isAdult || VIP) && isDrunken) || money) {
  console.log("통과");
} else {
  console.log("돌아가");
}
