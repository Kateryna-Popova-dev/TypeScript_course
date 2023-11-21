import {ISubject, IObserver} from './interface';
import {dailyRevenue} from "./type";
import {Visitor} from "./Visitor";
import {ticketPrice, TypeOfTickets} from "./enums";


export class CashBox implements ISubject<Visitor> {
    private takings: number = 0;
    private _observers: IObserver[] = [];

    ticketSale(visitor: Visitor, typeOfTicket: TypeOfTickets): void {
        this.takings += ticketPrice[typeOfTicket];
        this.notify(visitor);
    }

    getDailyRevenue(): dailyRevenue {
        return {day: new Date().toDateString(), takings: this.takings};
    }

    public attach(observer: IObserver): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }

    public detach(observer: IObserver): void {
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
    public notify(person: Visitor): boolean {
        console.log('Subject: Notifying observers...');
        let notifyResult = true;
        for (const observer of this.observers) {
            notifyResult = observer.update(person) ? notifyResult : false;
        }
        return notifyResult;
    }

    get observers(): IObserver[] {
        return this._observers;
    }
}