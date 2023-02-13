class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return super.getArea();
  }
}

let rec = new Rectangle(10, 5);
console.log(rec.getArea());

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return super.getArea() / 2;
  }
}
let tri = new Triangle(10, 5);
console.log(tri.getArea());

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}

let cir = new Circle(4);
console.log(cir.getArea());
