function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showNameGender = function () {
    return "이름은 " + this.name + " 성병은 " + this.gender;
  };
}

let user1 = new Kdt("정혁", "m");
let user2 = new Kdt("재연", "m");
let user3 = new Kdt("계환", "m");
let user4 = new Kdt("성희", "f");

console.log(user1.showNameGender());
console.log(user2.showNameGender());
console.log(user3.showNameGender());
console.log(user4.showNameGender());
