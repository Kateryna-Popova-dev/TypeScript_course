import Department, {isEmployee} from "./department";
import {Status} from "./Enums";
import Employee from "./employee";
import Intern from "./intern";

class Accounting extends Department {
    _balance: number = 0;

    getEveryOnePaid(): void {
        // some accounting magic O___O
    }

    payToEmployee(employee: Employee | Intern): boolean {
        if (isEmployee(employee) && employee.status === Status.active) {
            return this.indoorPayment(employee);
        }
        return this.outsourcePayment(employee);
    }

    outsourcePayment(employee: Intern): boolean {
        // some payment magic
        return true;
    }

    indoorPayment(employee: Employee): boolean {
        // some payment magic
        return true;
    }

    addEmployeeToDepartment(employee: Employee, department: Department, status: Status): void {
        department.addEmployee(employee, status)
    }

    createNewDepartment(name: string, domainArea: string): Department {
        return new Department(name, domainArea);
    }
}