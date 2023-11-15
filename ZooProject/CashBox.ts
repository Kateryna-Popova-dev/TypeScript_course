import {Subject, Observer} from './interface';
import {Person} from "./Person";

export enum TypeOfTickets {
    adult = 'ADULT',
    child = 'CHILD',
    family = 'FAMILY',
}

export const ticketPrice = {
    [TypeOfTickets.adult]: 500,
    [TypeOfTickets.child]: 300,
    [TypeOfTickets.family]: 1000,
}

export class CashBox implements Subject<Person> {
    private takings: number = 0;
    private observers: Observer[] = [];

    ticketSale(visitor: Person, typeOfTicket: TypeOfTickets): void {
        this.takings += ticketPrice[typeOfTicket];
        this.notify(visitor);
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
    public notify(visitor: Person): void {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(visitor);
        }
    }
}