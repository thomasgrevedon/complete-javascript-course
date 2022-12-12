'use strict';
// Challenge on prototype

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(
    'Speed of the car ',
    this.make,
    'after acceleration ',
    this.speed
  );
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log('Speed of the car after brake ', this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
car1.accelerate();
car1.brake();
car2.accelerate();
car2.brake();
