// const jackName = "김정혁";
// const jackAge = 26;
// const jackIsMarried = false;

// const jack = {
//   name: "김정혁",
//   age: 26,
//   married: false,
// };

// //출력
// console.log(jack.name);
// console.log(jack["age"]);

// //추가
// jack.gender = "m";

// console.log(jack);

// jack["head"] = "big";
// console.log(jack);

// //삭제
// delete jack.head;
// console.log(jack);

// delete jack["gender"];
// console.log(jack);

const pororo = {
  name: "뽀로로",
  age: 7,
  height: 110,
  weight: 30,
  running: () => {
    console.log("뽀로로가 뜁니다");
  },
  say() {
    console.log("뽀로로는 귀엽습니다");
  },
};
pororo.running();
pororo.say();
// for (let key in pororo) {
//   console.log("pororo.key" + pororo.key);
//   console.log("pororo[key]" + pororo[key]);
//   console.log(`key 눈 ${key}, key 안의 값은 ${pororo[key]}`);
// }
// console.log(pororo.hairColor); //undefined
// console.log("name" in pororo); //true
// console.log("height" in pororo); //false

// console.log(pororo);

// pororo.gender = "m";
// console.log(pororo);

// pororo["height"] = 178;
// console.log(pororo);

// delete pororo.gender;
// console.log(pororo);
