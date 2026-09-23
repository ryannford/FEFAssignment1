// NAME:    RYAN FORD
// CLASS:   FEF SPA's
// DATE:    23/09/2026

export class Employee {
  ssn: string;
  lastName: string;
  firstName: string;
  address: string;
  rank: number;
  age: number;

  constructor(
    ssn: string,
    lastName: string,
    firstName: string,
    address: string,
    rank: number,
    age: number,
  ) {
    this.ssn = ssn;
    this.lastName = lastName;
    this.firstName = firstName;
    this.address = address;
    this.rank = rank;
    this.age = age;
  }

  /**
   * Checks the age value to ensure it is 16 or older
   * @returns { Boolean } - Returns true if they are 16 or older
   */
  protected validateAge(): boolean {
    if (this.age < 16) {
      throw new Error("** INVALID AGE: The employee must be 16 or older **");
    }

    return true;
  }

  /**
   * Checks the rank value to ensure the rank number is between 1-5 (inclusive)
   * @returns { Boolean } - Returns true if rank number is between 1-5 (inclusive)
   */
  protected validateRank(): boolean {
    if (this.rank < 1 || this.rank > 5) {
      throw new Error(
        "** INVALID RANK: An employee's rank must be between 1-5 **",
      );
    }

    return true;
  }

  /**
   * Checks SSN to ensure it is formatted properly (###-###-###)
   * @returns { Boolean } - Returns true if SSN is formatted properly (###-###-###)
   */
  protected validateSSN(): boolean {
    let ssn = this.ssn;

    if (ssn.length !== 11 || ssn[3] !== "-" || ssn[7] !== "-") {
      throw new Error(
        "** INVALID SSN: SSN must be formatted as ###-###-### **",
      );
    }

    const ssnParts = ssn.split("-");

    for (let part of ssnParts) {
      if (isNaN(parseInt(part))) {
        throw new Error("** INVALID SSN: SSN must be whole numbers **");
      }
    }

    return true;
  }
}
