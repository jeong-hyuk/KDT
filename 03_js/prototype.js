//생성자 함수
function Car(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = function () {
    console.log(this.brand + "의 " + this.color + "색의 자동차 주행 중");
  };
}

//생성자 함수로 상속
function ElecCar(brand, color, fuel) {
  Car.call(this, brand, color); //super랑 같은 역할
  this.fuel = fuel;

  this.drive = function () {
    console.log(
      this.brand +
        "의 " +
        this.color +
        "색의 자동차가" +
        this.fuel +
        "로 움직인다"
    );
  };
}

ElecCar.prototype = Object.create(Car.prototype);
ElecCar.prototype.constructor = ElecCar;

const tesla = new ElecCar("tesla", "white", "elctrocity");
tesla.drive();

console.log(tesla instanceof Object);
