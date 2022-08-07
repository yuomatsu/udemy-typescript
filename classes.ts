abstract class Department {
  static fiscalYear = 2000;

  // private readonly id: string;
  // name: string;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    // console.log(this.employees.length);
    // console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT部門 - ID:' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('レポートが見つかりません。');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('正しい値を設定してください。');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    // console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  describe() {
    console.log('会計部門 - ID:' + this.id);
  }
}

const employee1 = Department.createEmployee('Max');
// console.log(employee1);

// console.log(Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';
// it.name = 'NEW NAME';

// it.describe();
it.printEmployeeInformation();

// console.log(it);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.mostRecentReport = '会計レポート';

accounting.addReport('Something');
// console.log(accounting.mostRecentReport);
accounting.printReports();

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// console.log(accounting);
// const accountingCopy = { name: 'DUMMY', describe: it.describe };

// accountingCopy.describe();

// accounting.describe();

