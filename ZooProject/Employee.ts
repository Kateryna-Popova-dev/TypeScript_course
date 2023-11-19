import {Person} from "./Person";
import {regExpDateBirth} from "./helper";
import {IPosition} from "./interface";

export class Employee extends Person {
    _position: IPosition;

    constructor(_firstName: string, _lastName: string, dateOfBirth: string, position: IPosition, tel: string, email?: string) {
        super(_firstName, _lastName, dateOfBirth, tel, email);
        this._position = position;
    }

    get age(): number {
        return 0;
    }

    set dateOfBirth(date: string) {
        while (!regExpDateBirth.test(date)) {
            alert("Date format should be 12/12/2012")
        }
        this._dateOfBirth = date;
    }

    set email(email: string) {
        this._email = email;
    }

    set tel(tel: string) {
        this._tel = tel;
    }

    get position(): string {
        return this._position.name;
    }

    get responsibilities(): string {
        return this._position.responsibilities;
    }
}