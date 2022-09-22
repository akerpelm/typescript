class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // All of this works only if collection is a number[]
        // If collection is an array of numbers.
        if (this.collection[j] > this.collection[j + 1]) {
          const leftElement = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftElement;
        }

        // Only works when collection is a string
        // If collection is an string, do this logic instead.
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
