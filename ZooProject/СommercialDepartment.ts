import {Client} from "./Clients";
import {Observer, Subject} from './interface';
import {Person} from "./Person";


export class CommercialDepartment implements Subject<string> {
    private observers: Observer[] = [];

    clients: Record<number, Client> = {};

    update(person: Person): void {
        const client = new Client(person._firstName, person._lastName, person._dateOfBirth, person._tel, person._email);
        this.clients[client._id] = client ;
        console.log('ConcreteObserverA: Reacted to the event.');
        this.attach(client);
    }

    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    /**
     * Trigger an update in each subscriber.
     */
    public notify(message: string): void {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(message);
        }
    }

    newsletter(message: string): void {
        console.log(message);
        this.notify(message);
    }
}