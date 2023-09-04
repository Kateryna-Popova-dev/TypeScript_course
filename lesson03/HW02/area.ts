import Level from './level';

class Area {

    _levels: Level[] = [];
    _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    get levels(): Level[] {
        return this._levels;
    }

    addLevel(level: Level): void {
        this.levels.push(level);
    }

    removeLevel(level: Level): void {
        let index = this.levels.indexOf(level);
        if (index >= 0) {
            this.levels.splice(index, 1);
        }
    }
}

export default Area;

