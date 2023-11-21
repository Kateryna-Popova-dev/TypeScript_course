import {Employee} from "../Employee";
import {Positions} from "../enums";

describe('Administration mediator case', () => {
    let employee: Employee = new Employee('John', 'Doe', '12/12/1912', Positions.DIRECTOR, '380666666666');


    it('Client created', () => {
        expect(employee).toBeInstanceOf(Employee);
    });

    it('check employee position', () => {
        expect(employee.position).toBe(Positions.DIRECTOR.name);
    });
    it('check employee responsibilities', () => {
        expect(employee.responsibilities).toBe(Positions.DIRECTOR.responsibilities);
    });
});