import {Person} from "./Person";
import {IObserver} from "./interface";

export class Client extends Person implements IObserver {

    constructor(_firstName: string, _lastName: string, dateOfBirth?: string, tel?: string, email?: string) {
        super(_firstName, _lastName, dateOfBirth, tel, email);
    }

    update(data: Person | string): void {
        console.log(`I am client ${this._firstName} ${this._lastName}, got the message: ${data}`);
    }
}