import Department from './department';
import Employee from './employee';
import previousEmployee from "./intern";

class Company {
    _name: string;
    department: Department[] = [];
    preHired: previousEmployee[] = [];
    employeeList: (Employee | previousEmployee)[] = [];

    constructor(name: string) {
        this._name = name;
    }
}