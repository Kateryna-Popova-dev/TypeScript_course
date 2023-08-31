class Direction {
    levels: any[] = [];
    _name: string;
    get name(): string {
        return this._name;
    }

    constructor(name: string) {
        this._name = name;
    }

    addLevel(level: any): void {
        this.levels.push(level);
    }
}