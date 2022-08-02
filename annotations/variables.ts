const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let myNumbes: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

class Car {}

let newCar: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annottions:
// 1) Function that returns any type
const json = '{"x":10,"y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) Delayed Initialization - declare variable on one line, initialize it on another.
let words = ['red', 'blue', 'green'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//3) When a variable cannot be reasonably inferred.
let numbers = [-10, -1, -12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
