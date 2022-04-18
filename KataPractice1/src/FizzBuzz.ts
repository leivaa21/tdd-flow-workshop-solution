export class FizzBuzz {
  constructor(private printer: (line: string) => void) {}

  run(number: number) {
    this.printer(number.toString());
  }
}
