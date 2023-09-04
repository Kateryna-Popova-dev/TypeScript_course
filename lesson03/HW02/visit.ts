import {Subject} from "./enums";

class Visit {
    _subject: Subject;
    _isPresent: boolean;

    constructor(subject: Subject, isPresent: boolean) {
        this._subject = subject;
        this._isPresent = isPresent;
    }
}

export default Visit;