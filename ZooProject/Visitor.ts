import {Person} from "./Person";
import {regExpDateBirth} from './helper';
import {IObserver} from "./interface";

export class Visitor extends Person implements IObserver {


    constructor(_firstName: string, _lastName: string, dateOfBirth?: string, tel?: string, email?: string) {
        super(_firstName, _lastName, dateOfBirth, tel, email);
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

    update(data: string): void {
        console.log(`I am visitor ${this._firstName} ${this._lastName}, got the message: ${data}`);
    }
}