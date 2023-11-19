import {Person} from "./Person";
import {IPosition} from "./interface";

export class Employee extends Person {
    _position: IPosition;

    constructor(_firstName: string, _lastName: string, dateOfBirth: string, position: IPosition, tel: string, email?: string) {
        super(_firstName, _lastName, dateOfBirth, tel, email);
        this._position = position;
    }

    get position(): string {
        return this._position.name;
    }

    get responsibilities(): string {
        return this._position.responsibilities;
    }
}