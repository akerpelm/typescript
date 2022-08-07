// const profile = {
//   name: 'Alex',
//   age: 28,
//   coords: {
//     lat: 0,
//     lng: 15
//   },
//   setAge(age: number): void {
//     this.age = age;
//   }
// };

// const { age, name }: { age: number; name: string } = profile;
// const {
//   coords: { lat, lng }
// }: { coords: { lat: number; lng: number } } = profile;

class Dice {
  constructor(
    public sides: number = 6,
    public count: number = 0,
    public values = {}
  ) {}

  private rollDice(): number[] {
    const result = [];
    for (let i = this.count; i > 0; i--) {
      result.push(Math.floor(Math.random() * this.sides + 1));
    }
    return result;
  }

  public getRolls(rollCount: number): void {
    const results = {};
    for (let i = 1; i <= rollCount; i++) {
      results[i] = this.rollDice();
    }
    for (let result in results) {
      this.displayResult(result, results[result]);
    }
  }

  private displayResult(rollNumber: string, diceValues: number[]): void {
    const sum = diceValues.reduce((acc, val) => {
      return acc + val;
    }, 0);
    const resource = this.determineResource(sum);
    console.log(
      `RollNo : ${rollNumber} - Dice1: ${diceValues[0]} - Dice2: ${diceValues[1]} - Total: ${sum} - Extra= ${resource}`
    );
    resource
      ? (this.values[resource.toLowerCase()] =
          (this.values[resource.toLowerCase()] || 0) + 1)
      : (this.values['noResource'] = (this.values['noResource'] || 0) + 1);
    this.values['totalRolls'] = (this.values['totalRolls'] || 0) + 1;
  }

  private determineResource(value: number): string {
    let str = '';
    if (value % 3 === 0) {
      str += 'Ore';
    }
    if (value % 4 === 0) {
      str += 'Wheat';
    }
    if (value % 5 === 0) {
      str += 'Sheep';
    }
    return str;
  }
}

const catanDice = new Dice(6, 2);
catanDice.getRolls(100);
console.log(catanDice.values); //aggregate roll data
