const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['carolla'], ['camaro']];

// const car = carMakers[0];
// const myCar = carMakers.pop();

//Prevent incompatible values:
carMakers.push(100);

carMakers.map((car: string): string => {
  return car;
});

//Flexible types

const importantDates = [new Date(), '2030-10-10-'];
const importantDates2: (Date | string)[] = [new Date()];
importantDates2.push('hi');
