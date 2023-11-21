import {Accounting} from "../Аccounting";
import {Employee} from "../Employee";
import {Positions, TypeOfAnimal, TypeOfHealth} from "../enums";
import {Animal} from "../Animal";
import {AdministrationMediator} from "../AdministrationMediator";
import {CommercialDepartment} from "../СommercialDepartment";
import {Administration} from "../Аdministration";


describe('Administration mediator case', () => {

    let administrationMediator: AdministrationMediator;
    let accounting: Accounting = Accounting.getInstance();
    let commercialDepartment: CommercialDepartment = new CommercialDepartment();
    let administration: Administration = new Administration();
    const animal01 = new Animal(TypeOfAnimal.LION, 'Simba', TypeOfHealth.AMAZING, 2);
    const employee01 = new Employee('John', 'Doe', '12/12/1912', Positions.DIRECTOR, '380666666666');

    beforeEach(() => {
        administrationMediator = new AdministrationMediator(administration, accounting, commercialDepartment);

    });

    it('Accounting created', () => {
        expect(administrationMediator).toBeInstanceOf(AdministrationMediator);
    });

    it('this administrationMediator has my desired properties', () => {
        expect(administrationMediator).toHaveProperty('accounting');
        expect(administrationMediator).toHaveProperty('commercialDepartment');
        expect(administrationMediator).toHaveProperty('administration');
    });
    it('the animal and the employee were added to the accounting department', () => {
        administrationMediator.notify(animal01, 'add');
        expect(accounting.animals).toEqual([animal01]);

        administrationMediator.notify(employee01, 'add');
        expect(accounting.employees).toEqual([employee01]);
    });
    it('the animal and the employee were delete to the accounting department', () => {
        administrationMediator.notify(animal01, 'remove');
        expect(accounting.animals).toEqual([]);

        administrationMediator.notify(employee01, 'remove');
        expect(accounting.employees).toEqual([]);
    });
    it('commercialDepartment create newsletter adn returned true', () => {
        expect(commercialDepartment.newsletter('advertising campaign')).toBe(true);
    });
    it('function isAnimal returned Animal', () => {
        expect(administrationMediator.isAnimal(animal01)).toBe(true);
    });
    it('function isEmployee returned Employee', () => {
        expect(administrationMediator.isEmployee(employee01)).toBe(true);
    });

});