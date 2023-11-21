import {Person} from "./Person";
import {Visitor} from "./Visitor";

export interface IZoo {
    visitors: Record<number, Visitor>;
}

export interface ISubject<T extends Person | string> {
    // Attach an observer to the subject.
    attach(observer: IObserver): void;

    // Detach an observer from the subject.
    detach(observer: IObserver): void;

    // Notify all observers about an event.
    notify(data: T): void;
}

export interface IObserver {
    // Receive update from subject.
    update(data: Person | string): boolean;
}

export interface IPosition {
    name: string;
    responsibilities: string;
    salary: number;
}