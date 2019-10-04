// Define ====================================== //

interface Shape {
  getArea(): number; // getArea method가 꼭 필요하며, 반환값은 숫자
}

// ⏺ constructor로 멤버 변수를 할당
class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

// Test ====================================== //

// 🔼 public 키워드로 멤버 변수 할당 (public accessor of TS)
class Triangle implements Shape {
  constructor(public base: number, public height: number) {
    this.base = base;
    this.height = height;
  }

  getArea() {
    return this.base * this.height * 0.5;
  }
}

// ⏹ private 키워드로 멤버 변수 할당 (private accessor of TS)
class Rect implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rect(10, 5)];

const circle = new Circle(5);
const triangle = new Triangle(10, 5);
const rect = new Rect(10, 20);

console.log(circle.radius);
console.log(triangle.base);
console.log(rect.width); // width는 private이므로 error 발생! 자동완성도 지원되지 않음

shapes.forEach(shape => {
  console.log(shape.getArea());
});
