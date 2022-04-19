import { FizzBuzz } from '../src/FizzBuzz';

describe('FizzBuzz', () => {
  let printer: jest.Mock;
  let fizzBuzz: FizzBuzz;

  beforeEach(() => {
    printer = jest.fn();
    fizzBuzz = new FizzBuzz(printer); 
  })

  afterEach(() => {
    expect(printer).toHaveBeenCalledTimes(1);    
  })

  it.each([2,4,7])('should print the given number %p', (number) => {    
    fizzBuzz.run(number);
    expect(printer).toHaveBeenCalledWith(number.toString());
  })
  it.each([3,6,9,12])('should print fizz with %p', (number) => {
    fizzBuzz.run(number);
    expect(printer).toHaveBeenCalledWith('Fizz');
  })
  it.each([5,10,20])('should print fizz with %p', (number) => {
    fizzBuzz.run(number);
    expect(printer).toHaveBeenCalledWith('Buzz');
  })
  it.each([15,30,45])('should print fizz with %p', (number) => {
    fizzBuzz.run(number);
    expect(printer).toHaveBeenCalledWith('FizzBuzz');
  })
});
