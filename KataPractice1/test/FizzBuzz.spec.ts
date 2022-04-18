import { FizzBuzz } from '../src/FizzBuzz';

describe('FizzBuzz', () => {
  it('should print the passed number', () => {
    const printer = jest.fn()
    const fizzBuzz = new FizzBuzz(printer);

    fizzBuzz.run(2);

    expect(printer).toHaveBeenNthCalledWith(1, '2');
  });
});
