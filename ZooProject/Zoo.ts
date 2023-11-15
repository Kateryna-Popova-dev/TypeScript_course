import {Subject, Observer} from './interface';
import {Visitor} from "./Visitor";
import {TypeOfTickets, CashBox} from './CashBox';
import {CommercialDepartment} from "./СommercialDepartment";
import {Person} from "./Person";


interface IZoo {
    visitors: Record<number, Visitor>;

}

class Zoo implements IZoo, Observer, Subject<string> {
    visitors: Record<number, Visitor> = {};
    private observers: Observer[] = [];


    update(person: Person): void {
        const visitor = new Visitor(person._firstName, person._lastName,person._dateOfBirth,  person._tel, person._email);
        this.visitors[visitor._id] = visitor;
        console.log('ConcreteObserverA: Reacted to the event.');
        this.attach(visitor);
    }

    public attach(visitor: Visitor): void {
        const isExist = this.observers.includes(visitor);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        console.log('Subject: Attached an observer.');
        this.observers.push(visitor);
    }

    public detach(visitor: Visitor): void {
        const observerIndex = this.observers.indexOf(visitor);
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
const person01 = new Person('Kate', 'Popova');
const person02 = new Person('Johnny', 'Depp', '09/06/1963');

person01.dateOfBirth = '06/11/1998';
person01.tel = '380665554433';
person01.email = 'test.popova@gmail.com';
cashBox.ticketSale(person01, TypeOfTickets.child);
cashBox.ticketSale(person02, TypeOfTickets.adult);

commercialDepartment.newsletter('Курлык-курлык, приходите в наш зоопарк! :)')
zoo.sendMessageToVisitors('The zoo closes in 15 minutes!');

console.log('zoo.visitors', zoo.visitors);
console.log('commercialDepartment.clients', commercialDepartment.clients);

