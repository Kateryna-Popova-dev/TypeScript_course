import {Person} from "./Person";
import {IObserver} from "./interface";

export class Visitor extends Person implements IObserver {

    constructor(_firstName: string, _lastName: string, dateOfBirth?: string, tel?: string, email?: string) {
        super(_firstName, _lastName, dateOfBirth, tel, email);
    }

    update(data: string): void {
        console.log(`I am visitor ${this._firstName} ${this._lastName}, got the message: ${data}`);
    }
}