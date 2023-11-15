import {regExp} from './helper';

export abstract class Person {
    _id: number;
    protected _firstName: string;
    protected _lastName: string;
    protected _dateOfBirth?: string;
    protected _tel?: string;
    protected _email?: string;

    protected constructor(firstName: string, lastName: string, dateOfBirth?: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
        this._id = Math.floor(100000 + Math.random() * 900000);
        if (dateOfBirth) {
            if (regExp.test(dateOfBirth)) {
                this._dateOfBirth = dateOfBirth;
            } else {
                throw new Error('udtyudtyutf');
            }
        }
    }

    abstract get age(): number;

    abstract set dateOfBirth(date: string);

    abstract set tel(tel: string);

    abstract set email(email: string);
}