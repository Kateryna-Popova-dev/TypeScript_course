import {Client} from "./Clients";
import {IObserver, ISubject} from './interface';
import {Person} from "./Person";
import {mediatorSetter} from "./AdministrationMediator";

export class CommercialDepartment extends mediatorSetter implements ISubject<string> {
    private _observers: IObserver[] = [];

    clients: Record<number, Client> = {};

    update(person: Person): boolean {
        const client = new Client(person._firstName, person._lastName, person._dateOfBirth, person._tel, person._email, person.getId());
        this.clients[client.getId()] = client;
        console.log('ConcreteObserverA: Reacted to the event.');
        this.attach(client);
        return true;
    }

    public attach(observer: IObserver): void {
        const isExist = this._observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        console.log('Subject: Attached an observer.');
        this._observers.push(observer);
    }

    public detach(observer: IObserver): void {
        const observerIndex = this._observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this._observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    /**
     * Trigger an update in each subscriber.
     */
    public notify(message: string): boolean {
        let notifyResult = true;
        console.log('Subject: Notifying observers...');
        for (const observer of this._observers) {
            notifyResult = observer.update(message) ? notifyResult : false;
        }
        return notifyResult;
    }

    newsletter(message: string): boolean {
        console.log(message);
        return this.notify(message);
    }
    get observers(): IObserver[]{
       return  this._observers;
    }
}