// NAME:    RYAN FORD
// CLASS:   FEF SPA's
// DATE:    23/09/2026

import { Employee } from "./Employee.ts";
import type { IEmployee } from "./IEmployee.ts";

export class FullTimeEmployee extends Employee implements IEmployee {
  salary: number;
  bonus: number;
  overtimeHours: number;

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

  /**
   * Calculates a fulltime employee's salary
   * @returns { number } - The amount of Overtime pay this employee has made
   */
  private calculateSalary(): number {
    const otHours = this.overtimeHours;
    const hourlyRate = this.salary / 40;
    let otPay = 0;

    if (otHours >= 1 && otHours <= 10) {
      otPay = hourlyRate * otHours * 1.25;
    } else if (otHours >= 11 && otHours <= 20) {
      otPay = hourlyRate * otHours * 1.5;
    } else if (otHours >= 21 && otHours <= 30) {
      otPay = hourlyRate * otHours * 1.75;
    } else if (otHours > 30) {
      otPay = hourlyRate * otHours * 2;
    }

    return otPay;
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
      Base Salary: $${this.salary.toFixed(2)}
      Bonus: $${this.bonus.toFixed(2)}
      Overtime Hours: ${this.overtimeHours.toFixed(2)}
      Overtime Pay: $${this.calculateSalary().toFixed(2)}
      Total Compensation: $${this.calculateCompensation().toFixed(2)}
      ************************`;

    return employeeInfo;
  }

  /**
   * Adds Overtime to the base salary
   * @returns { number } - Total employee compensation
   */
  calculateCompensation(): number {
    return this.salary + this.calculateSalary() + this.bonus;
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
