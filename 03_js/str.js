const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];

const fruitsObjArr = fruits.map((item, index, origin) => {
  return {
    id: index,
    name: item,
  };
});
console.log(fruits);
console.log(fruitsObjArr);

const nums = [3, 6, 9, 12, 15, 18, 21];
const divideArr = nums.map((item, index) => item / 3);

console.log(divideArr);

console.log("----------------------");
const num2 = [1, 2, 3, 4, 5, 6];
const multiArr = num2.map((item) => {
  return item * 4;
});
console.log(multiArr);

const num3 = [1, 2, 3, 4, 5, 6];
const multiArr3 = num3.map((item) => item * 4);
console.log(multiArr3);

//객체일때는 in만 사용 배열일때는 of도 사용 가능

//배열에서 특정 조건을 가지고 싶으면
console.log("-------------------------");
const number2 = [1, 2, 3, 4, 5, 6];
// const filterArr = number2.filter((item) => item > 3);
const filterArr = number2.filter(function (item, index, og) {
  return item > 3;
});
console.log(filterArr);

console.log("-------------------------");
const words = ["spray", "limit", "elite", "exuberant", "destruction"];
const resultArr = words.filter((item) => item.length > 6);
console.log(resultArr);

console.log("-------------------------");
//includes
let numbers4 = [1, 2, 3, 4, 5, 6];
console.log(numbers4.includes(3));
console.log(numbers4.includes(7));

// const arr = [5, 3, 4, 2, 3, 7, 5, 6];

// const findDuplicates = (arr) =>
//   arr.filter((item, index) => arr.indexOf(item) !== index);
// const duplicatess = findDuplicates(arr);
// console.log(duplicates);

// /*
//     결과: [ 3, 5 ]
// */

const arr = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];

const arr2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];
let a = new Array();
a = arr.push(...arr2);
const findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) !== index);
const duplicates = findDuplicates(arr);
console.log(duplicates);

console.log("--------------------------");
let fruit1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruit2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

fruit1.push(...fruit2);
const sameArr = (fruit1) =>
  fruit1.filter((item, index) => fruit1.indexOf(item) !== index);
const d = sameArr(fruit1);
console.log(d);

// console.log(sameArr);

// const numbers5 = [1, 2, 3, 4, 5];
// const sumResult = numbers5.reduce(function (acc, item, index, og) {
//   return (acc += item);
// }, 10);
// console.log(sumResult);

// const numbers6 = [-2, -5, -123, -5480, 24, 0, -69, 349, 3];
// const resultReduce = numbers6.reduce((acc, item) => {
//   if (item < 0) {
//     acc[0] += 1;
//   } else {
//     acc[2] += 1;
//   }
//   return acc;
// });

console.log("----------------------------");
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const resultObj = Object.assign(obj1, obj2);

console.log("obj1", obj1);
console.log("obj2", obj2);
console.log("resultObj", resultObj);

const jackObj = {
  name: "김정혁",
  age: "39",
  brain: null,
};

// const name = jackObj.name;
// const { name } = jackObj;

const { name: jackName, age, brain, girlFriend = "없음" } = jackObj;
console.log(jackName, age, brain, girlFriend);
