import {Person} from "./Person";
import {IObserver} from "./interface";

export class Client extends Person implements IObserver {

    constructor(_firstName: string, _lastName: string, dateOfBirth?: string, tel?: string, email?: string, id?: number) {
        super(_firstName, _lastName, dateOfBirth, tel, email);
        if (id) this.id = id;
    }

    update(data: Person | string): boolean {
        console.log(`I am client ${this._firstName} ${this._lastName}, got the message: ${data}`);
        return true;
    }

}