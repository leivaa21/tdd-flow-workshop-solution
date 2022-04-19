type DrinkMaker = (instruction: string) => string;
type Clock = () => string;

export class CoffeeMachine {
  private mainDrink: string = '';
  private sugarQuantity: number = 0;

  constructor(private drinkMaker: DrinkMaker, private clock: Clock ) { }
  selectChocolate() {
    this.mainDrink = 'H';
  }
  selectCoffee() {
    this.mainDrink = 'C';
  }
  selectTea() {
    this.mainDrink = 'T';
  }
  addSugar() {
    this.sugarQuantity++;
  }
  makeDrink() {
    const instruction = this.getInstruction();
    this.drinkMaker(instruction);
  }

  private hasAnySugar() {
    return this.sugarQuantity !== 0;
  }

  private getInstruction(): string {
    if (this.hasAnySugar()) {
      return `${this.mainDrink}:${this.sugarQuantity}:0 - ${this.clock()}`;
    }
    return `${this.mainDrink}:: - ${this.clock()}`;
  }

}
