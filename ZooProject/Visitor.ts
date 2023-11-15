import {Person} from "./Person";
import {regExp} from './helper';
import {Observer} from "./interface";

export class Visitor extends Person implements Observer {


    constructor(_firstName: string, _lastName: string, dateOfBirth?: string, tel?: string, email?: string) {
        super(_firstName, _lastName, dateOfBirth, tel, email);
    }

    get age(): number {
        return 0;
    }

    set dateOfBirth(date: string) {
        while (!regExp.test(date)) {
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