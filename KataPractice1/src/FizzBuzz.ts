export class FizzBuzz {
  constructor(private printer: (line: string) => void) {}
  run(number: number) {
    const line: string = this.getLine(number);
    this.printer(line)
  }
  private getLine(number: number) {
    const isMultipleOfThree = number % 3 === 0;
    const isMultipleOfFive = number % 5 === 0;
    if (isMultipleOfThree && isMultipleOfFive) return 'FizzBuzz'
    if (isMultipleOfThree) return 'Fizz';
    if (isMultipleOfFive) return 'Buzz';

    return number.toString();
  }
}
