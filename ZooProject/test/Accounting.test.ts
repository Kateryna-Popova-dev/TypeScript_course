import {Accounting} from '../Аccounting'
import {Employee} from "../Employee";
import {Positions, TypeOfAnimal, TypeOfHealth} from "../enums";
import {Animal} from "../Animal";

describe('Accounting case', () => {

    let accounting: Accounting;
    const employee01 = new Employee('Kate', 'Popova', '06/11/1998', Positions.ADMINISTRATOR, '38066000000');
    const employee02 = new Employee('John', 'Doe', '12/12/1912', Positions.DIRECTOR, '380666666666');
    const animal01 = new Animal(TypeOfAnimal.LION, 'Simba', TypeOfHealth.AMAZING, 2);
    const animal02 = new Animal(TypeOfAnimal.LION, 'Simba', TypeOfHealth.AMAZING, 2);

    beforeEach(() => {
        accounting = Accounting.getInstance();

    });

    it('Accounting created', () => {
        expect(Accounting.getInstance()).toBeInstanceOf(Accounting);
    });

    it('this accounting has my desired properties', () => {
        expect(accounting).toHaveProperty('_budget');
        expect(accounting).toHaveProperty('_revenueHistory');
        expect(accounting).toHaveProperty('_employees');
        expect(accounting).toHaveProperty('_animals',);
        expect(accounting).toHaveProperty('_paymentHistory',);
    });

    it('Should be return budget with was added by addDailyRevenue', function () {
        const value = 1000;
        accounting.addDailyRevenue({day: '10.10.2023', takings: value});
        expect(accounting.budget).toBe(value);
    });

    it('Should be return employees with was added by function addEmployee', function () {
        accounting.addEmployee(employee01);
        accounting.addEmployee(employee02);
        expect(accounting.employees).toEqual([employee01, employee02]);
    });

    it('Should be return employees with was remove by function RemoveEmployee', function () {
        accounting.RemoveEmployee(employee01);
        expect(accounting.employees).toEqual([employee02]);
    });

    it('Should be return animals with was added by function addAnimal', function () {
        accounting.addAnimal(animal01);
        accounting.addAnimal(animal02);
        expect(accounting.animals).toEqual([animal01, animal02]);
    });

    it('Should be return animals with was remove by function RemoveAnimal', function () {
        accounting.RemoveAnimal(animal01);
        expect(accounting.animals).toEqual([animal02]);
    });

});