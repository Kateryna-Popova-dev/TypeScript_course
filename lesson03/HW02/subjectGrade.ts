import {Grade, Subject} from './enums';

class SubjectGrade {
    _grade: Grade;
    _subject: Subject;

    constructor(grade: Grade, subject: Subject) {
        this._grade = grade;
        this._subject = subject;
    }
}

export default SubjectGrade;