import {Person} from "./Person";

export class Client extends Person {

    constructor(_firstName: string, _lastName: string, dateOfBirth?: string) {
        super(_firstName, _lastName, dateOfBirth);
    }

    get age(): number {
        return 0;
    }

    set dateOfBirth(date: string) {
    }

    set email(email: string) {
    }

    set tel(tel: string) {
    }

}