import { FizzBuzz } from '../src/FizzBuzz';

describe('FizzBuzz', () => {
  it('should print the passed number', () => {
    const printer = jest.fn();
    const fizzBuzz = new FizzBuzz(printer);

    fizzBuzz.run(2);

    expect(printer).toHaveBeenCalledTimes(1);
    expect(printer).toHaveBeenCalledWith('2');
  });

  it('should print fizz for 3', () => {
    const printer = jest.fn();
    const fizzBuzz = new FizzBuzz(printer);

    fizzBuzz.run(3);

    expect(printer).toHaveBeenCalledTimes(1);
    expect(printer).toHaveBeenCalledWith('fizz');
  });
});
