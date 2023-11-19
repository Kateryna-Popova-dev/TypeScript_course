import {regExpDateBirth} from './helper';

export class Person {
    _id: number;
    _firstName: string;
    _lastName: string;
    _dateOfBirth?: string;
    _tel?: string;
    _email?: string;

    constructor(firstName: string, lastName: string, dateOfBirth?: string, tel?: string, email?: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
        this._id = Math.floor(100000 + Math.random() * 900000);
        if (dateOfBirth) {
            if (regExpDateBirth.test(dateOfBirth)) {
                this._dateOfBirth = dateOfBirth;
            } else {
                throw new Error('udtyudtyutf');
            }
        }
        this._tel = tel;
        this._email = email;
    }

    get age(): number {
        const difMs = Date.now() - (new Date(String(this._dateOfBirth))).getTime();
        const age = new Date(difMs)
        return Math.abs(age.getUTCFullYear() - 1970);
    }

    get fullName(): string {
        return this._firstName + ' ' + this._lastName;
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
}