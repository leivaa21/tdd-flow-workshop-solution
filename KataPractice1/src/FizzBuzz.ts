export class FizzBuzz {
  constructor(private printer: (line: string) => void) {}

  run(number: number) {
    if (number === 3) {
      this.printer('fizz');
    } else {
      this.printer(number.toString());
    }
  }
}
