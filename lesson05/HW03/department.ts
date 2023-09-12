import Employee from './employee';
import Intern from "./intern";
import {Status} from "./Enums";

class Department {
    _name: string | 'unknown';
    _domainArea: string;
    employeeList: Employee[] = [];
    _flowRate: number = 0;
    _credit: number = 0;

    constructor(name: string, domainArea: string) {
        this._name = name;
        this._domainArea = domainArea;
    }

    get budget(): number {
        return this._flowRate + this._credit;
    }

    balanceCalculation(budget: number): number {
        //Логика для вычисления баланса
        return 0;
    }

    addEmployee(employee: Employee | Intern, status?: Status): void {
        let newEmployee;
        if (!isEmployee(employee)) {
            newEmployee = employee as Employee
            newEmployee.status = status ?? Status.inactive;
            newEmployee.department = this._name
        } else {
            newEmployee = employee;
        }
        this.employeeList.push(newEmployee);
    }

    removeEmployee(employee: Employee) {
        employee.department = 'unknown'
        let index = this.employeeList.indexOf(employee);
        if (index >= 0) {
            this.employeeList.splice(index, 1);
        }
    }
}

export function isEmployee(person: Employee | Intern): person is Employee {
    return (person as Employee).status !== undefined && (person as Employee).department !== undefined;
}

export default Department;