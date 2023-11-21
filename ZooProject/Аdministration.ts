import {Employee} from "./Employee";
import {mediatorSetter} from "./AdministrationMediator";
import {Animal} from "./Animal";

interface IAdministration {
    addEmployee(employee: Employee): void;

    removeEmployee(employee: Employee): void;

    addAnimal(pet: Animal): void;

    removeAnimal(pet: Animal): void;

    newsletter(message: string): void;
}


export class Administration extends mediatorSetter implements IAdministration {

    addEmployee(employee: Employee) {
        this.mediator.notify(employee, 'add');
    }

    removeEmployee(employee: Employee) {
        this.mediator.notify( employee, 'remove');
    }

    addAnimal(pet: Animal): void {
        this.mediator.notify( pet, 'add');

    }

    removeAnimal(pet: Animal): void {
        this.mediator.notify(pet, 'remove');
    }

    newsletter(message: string): void {
        this.mediator.notify( message, 'news');
    }
}