import {dailyRevenue, paymentHistory} from "./type";
import {Employee} from "./Employee";
import {mediatorSetter} from "./AdministrationMediator";
import {Animal} from "./Animal";
import {accountingEvent, costOfFeed} from "./enums";

export class Accounting extends mediatorSetter {

    private static instance: Accounting;
    private _budget: number = 0;
    private _revenueHistory: dailyRevenue[] = [];
    protected _employees: Employee[] = [];
    protected _animals: Animal[] = [];
    private _paymentHistory: paymentHistory[] = [];

    public static getInstance(): Accounting {
        if (Accounting.instance === undefined) {
            Accounting.instance = new Accounting();
        }
        return Accounting.instance;
    }

    private constructor() {
        super();
    }

    addDailyRevenue(data: dailyRevenue): void {
        this._revenueHistory.push(data);
        this._budget += data.takings;
    }

    get budget(): number {
        return this._budget;
    }

    get employees(): Employee[] {
        return this._employees;
    }

    get animals(): Animal[] {
        return this._animals;
    }

    addEmployee(employee: Employee): void {
        this._employees.push(employee);
    }

    RemoveEmployee(employee: Employee): void {
        const index = this._employees.findIndex(item => item.getId() === employee.getId());
        this._employees.splice(index, 1);
    }

    addAnimal(pet: Animal): void {
        this._animals.push(pet);
    }

    RemoveAnimal(pet: Animal): void {
        const index = this._animals.findIndex(item => item._id === pet._id);
        this._animals.splice(index, 1);
    }

    paySalary(employee?: Employee | Employee[]): void {
        let sumPayment = 0;
        if (employee) {
            for (let i = 0; !(employee instanceof Employee) && i < employee.length; i++) {
                let salary = employee[i]._position.salary;
                sumPayment += salary;
            }
        } else {
            for (let i = 0; i < this._employees.length; i++) {
                let salary = this._employees[i]._position.salary;
                sumPayment += salary;
            }
        }
        this._budget -= sumPayment;
        this._paymentHistory.push({event: accountingEvent.SALARYPAYMAENT, amount: sumPayment});
    }

    feedPurchase(): void {
        let purchaseAmount = 0;
        for (let i = 0; i < this._animals.length; i++) {
            purchaseAmount += costOfFeed[this._animals[i].typeOfAnimal];
        }
        this._budget -= purchaseAmount;
        this._paymentHistory.push({event: accountingEvent.FEEDPURCHASE, amount: purchaseAmount});
    }

    get revenueHistory(): dailyRevenue[] {
        return this._revenueHistory
    }

    get paymentHistory(): paymentHistory[] {
        return this._paymentHistory;
    }
}