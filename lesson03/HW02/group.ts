import Area from './area';
import Student from './student';
import {LevelName, Status} from "./enums";

class Group {

    _area: Area | null;
    _status: Status | null;
    _directionName: string;
    _levelName: LevelName;
    _students: Student[] = [];

    constructor(directionName: string, levelName: LevelName) {
        this._directionName = directionName;
        this._levelName = levelName;
        this._area = null;
        this._status = null;
    }

    get area(): Area | null {
        return this._area;
    }

    get status(): Status | null {
        return this._status;
    }

    get directionName(): string {
        return this._directionName;
    }

    get levelName(): LevelName {
        return this._levelName;
    }

    get students(): Student[] {
        return this._students;
    }

    set status(status: Status) {
        this._status = status;
    }

    showPerformance(): Student[] {
        return this._students.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    }
}

export default Group;