import {IObserver, ISubject, IZoo} from './interface';
import {Visitor} from "./Visitor";
import {Person} from "./Person";


export class Zoo implements IZoo, IObserver, ISubject<string> {
    private static instance: Zoo;
    visitors: Record<number, Visitor> = {};
    private observers: IObserver[] = [];

    private constructor() {
    }

    public static getInstance(): Zoo {
        if (Zoo.instance === undefined) {
            Zoo.instance = new Zoo();
        }
        return Zoo.instance;
    }

    update(person: Person): boolean {
        const visitor = new Visitor(person._firstName, person._lastName, person._dateOfBirth, person._tel, person._email);
        this.visitors[visitor.getId()] = visitor;
        console.log('ConcreteObserverA: Reacted to the event.');
        this.attach(visitor);
        return true;
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




