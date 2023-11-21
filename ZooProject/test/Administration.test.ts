import {Administration} from "../Аdministration";
import {Employee} from "../Employee";
import {Positions, TypeOfAnimal, TypeOfHealth} from "../enums";
import {Accounting} from "../Аccounting";
import {AdministrationMediator} from "../AdministrationMediator";
import {CommercialDepartment} from "../СommercialDepartment";
import {Animal} from "../Animal";


describe('Administration case', () => {
    let administration: Administration = new Administration();
    const accounting = Accounting.getInstance()
    let administrationMediator: AdministrationMediator;
    const commercialDepartment = new CommercialDepartment();
    const employee1 = new Employee('Kate', 'Popova', '06/11/1998', Positions.ADMINISTRATOR, '38066000000');
    const animal1 = new Animal(TypeOfAnimal.UNICORN, 'marcel', TypeOfHealth.AMAZING, 5);

    beforeEach(() => {

        administrationMediator = new AdministrationMediator(administration, accounting, commercialDepartment);
    });

    it('Administration created', () => {
        expect(administration).toBeInstanceOf(Administration);
    });

    it('check that employee can be added', () => {
        administration.addEmployee(employee1);
        expect(accounting.employees).toEqual([employee1]);
    });

    it('check that employee can be removed', () => {
        administration.removeEmployee(employee1);
        expect(accounting.employees).toEqual([]);
    });

    it('check that animal can be added', () => {
        administration.addAnimal(animal1);
        expect(accounting.animals).toEqual([animal1]);
    });

    it('check that animal can be removed', () => {
        administration.removeAnimal(animal1);
        expect(accounting.animals).toEqual([]);
    });

    it('check Administration newsletter', () => {
        expect(administration.newsletter('test message')).toBe(true);
    });
});