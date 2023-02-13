// const user = {
//   name: "김정혁",
//   sayHello() {
//     console.log("안녕하세요 " + this.name + "님");
//   },
// };
// user.sayHello();

// function sayHello() {
//   console.log(`Hello, I'm ${this.name}`);
// }

// let boy = {
//   name: "Mike",
//   sayHello, //객체 값으로 가져올떄는 ()가 없어야 한다
// };

// let girl = {
//   name: "Jane",
//   sayHello,
// };

// boy.sayHello();
// girl.sayHello();

const pororo = {
  name: "뽀로로",
  showName: function () {
    console.log("이름은 " + this.name + "입니다");
  },
  height: 178,
  showHeight,
};

function showHeight() {
  console.log("뽀로로 키는 " + this.height);
}

pororo.showName();
pororo.showHeight();
