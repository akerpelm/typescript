interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  }
};

printSummary(oldCivic);
printSummary(drink);
