// NAME:    RYAN FORD
// CLASS:   FEF SPA's
// DATE:    22/09/2026

export abstract class Employee {
  public ssn: string = "";
  public lastName: string = "";
  public firstName: string = "";
  public address: string = "";
  public rank: number = 0;
  public age: number = 0;

  protected validateAge(): boolean {
    if (this.age < 16) {
      throw new Error("**The employee must be 16 or older**");
    }

    return true;
  }

  protected validateRank(): boolean {
    if (this.rank < 1 || this.rank > 5) {
      throw new Error("**An employee's rank must be between 1-5**");
    }

    return true;
  }

  protected validateSSN(): boolean {
    if(this.ssn !== )
  }
}
