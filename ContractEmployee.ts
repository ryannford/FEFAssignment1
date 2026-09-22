// NAME:    RYAN FORD
// CLASS:   FEF SPA's
// DATE:    22/09/2026

import { Employee } from "./Employee.ts";
import type { IEmployee } from "./IEmployee.ts";

export class ContractEmployee extends Employee implements IEmployee {
  public hours: number = 0;
  public hourlyRate: number = 0;

  constructor(
    ssn: string,
    lastName: string,
    firstName: string,
    address: string,
    rank: number,
    age: number,
    hours: number,
    hourlyRate: number,
  ) {
    super(ssn, lastName, firstName, address, rank, age);
    this.hours = hours;
    this.hourlyRate = hourlyRate;
  }

  //   displayInformation(): string {}

  //   calculateCompensation(): number {}

  //   saveEmployee(): void {}
}
