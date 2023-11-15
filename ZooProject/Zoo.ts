import {Subject, Observer} from './interface';
import {Visitor} from "./Visitor";
import {TypeOfTickets, CashBox} from './CashBox';
import {CommercialDepartment} from "./СommercialDepartment";


interface IZoo {
    visitors: Record<number, Visitor>;

}

class Zoo implements IZoo, Observer, Subject<string> {
    visitors: Record<number, Visitor> = {};
    private observers: Observer[] = [];


    update(visitor: Visitor): void {
        this.visitors[visitor._id] = visitor;
        console.log('ConcreteObserverA: Reacted to the event.');
        this.attach(visitor);
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
        console.log('Send message in process...');
        for (const observer of this.observers) {
            observer.update(message);
        }
    }

    sendMessageToVisitors(message: string) {
        console.log(message);
        this.notify(message);
    }


}

let date = '06.11.1998'
const zoo = new Zoo;
let commercialDepartment = new CommercialDepartment();
const cashBox = new CashBox();

cashBox.attach(zoo);
cashBox.attach(commercialDepartment);
const visitor01 = new Visitor('Kate', 'Popova');
const visitor02 = new Visitor('Johnny', 'Depp', '09/06/1963');

visitor01.dateOfBirth = '06/11/1998';
visitor01.tel = '380665554433';
visitor01.email = 'test.popova@gmail.com';
cashBox.ticketSale(visitor01, TypeOfTickets.adult);
cashBox.ticketSale(visitor01, TypeOfTickets.child);
cashBox.ticketSale(visitor02, TypeOfTickets.adult);
zoo.sendMessageToVisitors('The zoo closes in 15 minutes!');
console.log('zoo.visitors', zoo.visitors);
console.log('commercialDepartment.clients', commercialDepartment.clients);

