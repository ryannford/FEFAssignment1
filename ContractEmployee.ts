// NAME:    RYAN FORD
// CLASS:   FEF SPA's
// DATE:    23/09/2026

import { Employee } from "./Employee.ts";
import type { IEmployee } from "./IEmployee.ts";

export class ContractEmployee extends Employee implements IEmployee {
  hours: number;
  hourlyRate: number;

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

  /**
   * Displays the details for the employee
   * @returns { string } - The employee's details
   */
  displayInformation(): string {
    const employeeInfo = `
      ************************
      SSN: ${this.ssn}
      Name: ${this.firstName} ${this.lastName}
      Address: ${this.address}
      Rank: ${this.rank}
      Age: ${this.age}
      Hours Worked: ${this.hours}
      Hourly Rate: $${this.hourlyRate.toFixed(2)}
      Total Compensation: $${this.calculateCompensation().toFixed(2)}
      ************************`;

    return employeeInfo;
  }

  /**
   * Calculates a contracted employees total pay including overtime
   * @returns { number } - Total pay including overtime pay
   */
  calculateCompensation(): number {
    let totalPay = 0;
    const hourlyRate = this.hourlyRate;
    const hours = this.hours;

    if (hours <= 40) {
      totalPay = hours * hourlyRate;
    } else {
      const normalPay = 40 * hourlyRate;
      const otHours = hours - 40;
      const otPay = otHours * (hourlyRate * 1.5);

      totalPay = normalPay + otPay;
    }

    return totalPay;
  }

  /**
   * Validates an employee has a valid Age, Rank, and SSN
   */
  saveEmployee(): void {
    const isValidAge = this.validateAge();
    const isValidRank = this.validateRank();
    const isValidSSN = this.validateSSN();

    if (isValidAge && isValidRank && isValidSSN) {
      console.log(
        `Saved employee ${this.firstName} ${this.lastName} successfully`,
      );
      console.log(this.displayInformation());
    } else {
      console.log(
        `** INVALID ENTRY: Failed to save employee ${this.firstName} ${this.lastName} **`,
      );
    }
  }
}
