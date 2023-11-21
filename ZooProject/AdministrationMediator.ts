import {Accounting} from "./Аccounting";
import {Administration} from "./Аdministration";
import {Employee} from "./Employee";
import {Animal} from "./Animal";
import {CommercialDepartment} from "./СommercialDepartment";

export abstract class mediatorSetter {
    protected mediator: Mediator;

    constructor(mediator?: Mediator) {
        this.mediator = mediator!;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

interface Mediator {
    notify(employee: Employee | Animal | string, event: string): void;
}


export class AdministrationMediator implements Mediator {
    private accounting: Accounting;
    private commercialDepartment: CommercialDepartment;
    private administration: Administration;

    constructor(administration: Administration, accounting: Accounting, commercialDepartment: CommercialDepartment) {
        this.accounting = accounting;
        this.accounting.setMediator(this);
        this.commercialDepartment = commercialDepartment;
        this.commercialDepartment.setMediator(this);
        this.administration = administration;
        this.administration.setMediator(this);
    }

    public notify(data: Employee | Animal | string, event: string): void {
        if (event === 'add') {
            if (isAnimal(data)) {
                console.log('Mediator reacts on add and triggers method addAnimal.');
                this.accounting.addAnimal(data);
            }
            if (isEmployee(data)) {
                console.log('Mediator reacts on add and triggers method addEmployee.');
                this.accounting.addEmployee(data);
            }
        }

        if (event === 'remove') {

            if (isAnimal(data)) {
                console.log('Mediator reacts on remove and triggers method removeAnimal:');
                this.accounting.RemoveAnimal(data);
            }
            if (isEmployee(data)) {
                console.log('Mediator reacts on remove and triggers method removeEmployee:');
                this.accounting.RemoveEmployee(data);
            }
        }
        if (event === 'news') {
            console.log('Mediator reacts on news and triggers method newsletter:');
            this.commercialDepartment.newsletter(String(data));
        }
    }
}

function isAnimal(pet: unknown): pet is Animal {
    return pet instanceof Animal;
}

function isEmployee(person: unknown): person is Employee {
    return person instanceof Employee;
}

