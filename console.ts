// NAME:    RYAN FORD
// CLASS:   FEF SPA's
// DATE:    23/09/2026

import { FullTimeEmployee } from "./FullTimeEmployee.ts";
import { ContractEmployee } from "./ContractEmployee.ts";

const firstFullTimeEmployee: FullTimeEmployee = new FullTimeEmployee(
  "123-456-789",
  "Ford",
  "Ryan",
  "who knows St. Riverview, NB",
  4,
  30,
  1000,
  200,
  15,
);

const firstContractEmployee: ContractEmployee = new ContractEmployee(
  "234-567-890",
  "Pork",
  "John",
  "1738 Pig St. Moncton, NB",
  3,
  53,
  50,
  60,
);

const invalidContractor: ContractEmployee = new ContractEmployee(
  "1234-123-81",
  "Cheese",
  "Tim",
  "Swiss Ln. Dieppe, NB",
  7,
  12,
  100,
  23,
);

firstFullTimeEmployee.saveEmployee();
firstContractEmployee.saveEmployee();
invalidContractor.saveEmployee();
