// NAME:    RYAN FORD
// CLASS:   FEF SPA's
// DATE:    22/09/2026

import { Employee } from "./Employee.ts";
import type { IEmployee } from "./IEmployee.ts";

export class FullTimeEmployee extends Employee implements IEmployee {
  public salary: number;
  public bonus: number;
  public overtimeHours: number;

  constructor(
    ssn: string,
    lastName: string,
    firstName: string,
    address: string,
    rank: number,
    age: number,
    salary: number,
    bonus: number,
    overtimeHours: number,
  ) {
    super(ssn, lastName, firstName, address, rank, age);
    this.salary = salary;
    this.bonus = bonus;
    this.overtimeHours = overtimeHours;
  }

  //   displayInformation(): string {}

  //   calculateCompensation(): number {}

  //   saveEmployee(): void {}

  //   private calculateSalary(): number {}
}
