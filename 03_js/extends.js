class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  drive() {
    console.log(this.brand + "의 " + this.color + "색 자동차 주행 중");
  }
}

class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color);
    this.fuel = fuel;
  }

  drive() {
    super.drive();
    console.log("그리고 이 차는 " + this.fuel + "로 움직입니다.");
  }

  // showFuel() {
  //   console.log("이 자동차는 " + this.fuel + "의 힘으로 움직인다");
  // }
}
const hyundai = new Car("hyundai", "blue");
hyundai.drive();

let tesla = new ElecCar("tesla", "white", "electricity");
tesla.drive();
