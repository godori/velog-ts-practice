"use strict";
// ⏺ constructor로 멤버 변수를 할당
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
// 🔼 public 키워드로 멤버 변수 할당 (public accessor of TS)
var Triangle = /** @class */ (function () {
    function Triangle(base, height) {
        this.base = base;
        this.height = height;
        this.base = base;
        this.height = height;
    }
    Triangle.prototype.getArea = function () {
        return this.base * this.height * 0.5;
    };
    return Triangle;
}());
// ⏹ private 키워드로 멤버 변수 할당 (private accessor of TS)
var Rect = /** @class */ (function () {
    function Rect(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rect.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rect;
}());
var shapes = [new Circle(5), new Rect(10, 5)];
var circle = new Circle(5);
var triangle = new Triangle(10, 5);
var rect = new Rect(10, 20);
console.log(circle.radius);
console.log(triangle.base);
console.log(rect.width); // width는 private이므로 error 발생! 자동완성도 지원되지 않음
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
