import {Person} from "./Person";

export interface Subject<T extends Person | string> {
    // Attach an observer to the subject.
    attach(observer: Observer): void;

    // Detach an observer from the subject.
    detach(observer: Observer): void;

    // Notify all observers about an event.
    notify(data: T): void;
}

export interface Observer {
    // Receive update from subject.
    update(data: Person | string): void;
}