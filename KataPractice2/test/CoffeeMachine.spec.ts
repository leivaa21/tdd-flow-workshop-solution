import { CoffeeMachine } from "../src/CoffeeMachine";

describe('Coffee Machine', () => {
  let drinkMaker: jest.Mock;
  let clock: jest.Mock;
  let coffeeMachine: CoffeeMachine;

  beforeEach(() => {
    drinkMaker = jest.fn();
    
    clock = jest.fn();
    clock.mockReturnValue('DATE')

    coffeeMachine = new CoffeeMachine(drinkMaker, clock);
  })

  afterEach(() => {
    expect(drinkMaker).toHaveBeenCalledTimes(1);
    expect(clock).toHaveBeenCalledTimes(1);
  })

  it("should call maker with 'H:: - DATE'", () => {
    coffeeMachine.selectChocolate();

    coffeeMachine.makeDrink();

    expect(drinkMaker).toHaveBeenCalledWith('H:: - DATE');
  });

  it("should call maker with 'T:: - DATE'", () => {
    coffeeMachine.selectTea();

    coffeeMachine.makeDrink();

    expect(drinkMaker).toHaveBeenCalledWith('T:: - DATE');
  });

  it("should call maker with 'C:: - DATE'", () => {
    coffeeMachine.selectCoffee();

    coffeeMachine.makeDrink();

    expect(drinkMaker).toHaveBeenCalledWith('C:: - DATE');
  });

  it("should call maker with 'T:1:0 - DATE'", () => {
    coffeeMachine.selectTea();

    coffeeMachine.addSugar();

    coffeeMachine.makeDrink();

    expect(drinkMaker).toHaveBeenCalledWith('T:1:0 - DATE');
  });

  it("should call maker with 'T:2:0 - DATE'", () => {
    coffeeMachine.selectTea();

    coffeeMachine.addSugar();
    coffeeMachine.addSugar();

    coffeeMachine.makeDrink();

    expect(drinkMaker).toHaveBeenCalledWith('T:2:0 - DATE');
  });

  it("should call maker with 'C:1:0 - DATE'", () => {
    coffeeMachine.selectCoffee();

    coffeeMachine.addSugar();

    coffeeMachine.makeDrink();

    expect(drinkMaker).toHaveBeenCalledWith('C:1:0 - DATE');
  });
});
