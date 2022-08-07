class Vehicle {
  // color: string;

  // constructor(color: string = 'red') {
  //   this.color = color;
  // } OR:
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('bui bui bui');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('green');
console.log(vehicle.color);

const car = new Car(4, 'orange');
car.startDrivingProcess();
