"use strict";
//생성자 함수 버전

function Car(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = function () {
    console.log(this.brand + "의 " + this.color + "색 자동차 주행 중");
  };
}

const hyundai = new Car("hyundai", "black");
// const benz = new Car("benz", "white");
// const porsche = new Car("porsche", "red");

console.log(hyundai);
hyundai.drive();

//클래스 버전
class ClassCar {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  drive() {
    console.log(this.brand + "의 " + this.color + "색 자동차 주행 중");
  }
}
