import {Person} from "./Person";

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
    update(data: Person | string): void;
}

export interface IPosition {
    name: string;
    responsibilities: string;
    salary: number;
}