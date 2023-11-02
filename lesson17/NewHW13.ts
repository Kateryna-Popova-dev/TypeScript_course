type Uuid = number;
type NoteUpdate = Partial<Pick<INote, 'title' | 'description'>>;
type NoteType = Note | NoteConfirmed;

interface ISearch {
    searchByTitle: (title: string) => INote[];
    searchByDescription: (description: string) => INote[];
}

interface ISort {
    sortByStatus: () => INote[];
    sortByDate: () => INote[];
}

interface INote {
    id: number;
    title: string;
    description: string;
    creationAt: Date;
    updatedAt: Date | null;
    done: boolean;

    complete(): void;

    update({title, description}: NoteUpdate): void;
}

interface IToDoList {
    notes: INote[];

    addNote(title: string, description: string, confirmed: boolean): void;

    removeNote(id: Uuid): INote | undefined;

    getNoteById(id: Uuid): void;

    getNotes(): INote[]

    getAmounts(): { all: number, unfinished: number };

    updateNote(id: Uuid, {title, description}: NoteUpdate): void

    complete(id: Uuid): void;
}


class ToDoList implements IToDoList {
    notes: NoteType[] = [];

    addNote(title: string, description: string, confirmed: boolean = false): void {
        if (!title.trim() || !description.trim()) throw new Error('Description can not be empty');
        const note = confirmed ? new NoteConfirmed(title, description) : new Note(title, description);
        this.notes.push(note);
    }

    updateNote(id: Uuid, payload: NoteUpdate): INote {
        const noteIndex = this.findIndexById(id);
        const note = this.notes[noteIndex];
        const oldNote = {...note} as INote;
        note.update(payload);
        return oldNote;
    }

    removeNote(id: Uuid): INote | undefined {
        let noteIndex = this.findIndexById(id);

        let [removedNote] = this.notes.splice(noteIndex, 1);
        return removedNote;

    }

    getNoteById(id: Uuid): INote {
        const note = this.notes[this.findIndexById(id)];
        if (!note) throw new Error('Can not be find note by the id');
        return note;
    }

    getNotes(): INote[] {
        return this.notes;
    }

    getAmounts(): { all: number, unfinished: number } {
        return {
            all: this.notes.length,
            unfinished: this.notes.filter(item => !item.done).length
        }
    }

    complete(id: Uuid): void {
        const noteIndex = this.findIndexById(id);
        const note = this.notes[noteIndex];
        if (note) {
            note.complete();
        }
    }

    private findIndexById(id: Uuid): number {
        let noteIndex = this.notes.findIndex(item => item.id === id);
        if (noteIndex < 0) throw new Error(`${id} is not defined`)
        return noteIndex
    }
}

class ToDoListWithSearch extends ToDoList implements ISearch {
    searchByDescription(description: string): INote[] {
        return this.notes.filter(item => item.title.toLowerCase().includes(description.toLowerCase()));
    }

    searchByTitle(title: string): INote[] {
        return this.notes.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));
    }
}

class ToDoListWithSort extends ToDoList implements ISort {
    sortByStatus(): INote[] {
        return this.notes.sort((a, b) => +a.done - +b.done);
    }

    sortByDate(): INote[] {
        return this.notes.sort((a, b) => +a.creationAt - +b.creationAt);
    }
}

abstract class BaseNote implements INote {
    static counter: number = 1;
    id: Uuid;
    title: string;
    description: string;
    creationAt: Date;
    updatedAt: Date | null;
    done: boolean;

    constructor(title: string, description: string) {
        this.id = Note.counter++;
        this.title = title;
        this.description = description;
        this.creationAt = new Date();
        this.updatedAt = null;
        this.done = false;
    }

    abstract update({title, description}: NoteUpdate): void

    complete(): void {
        this.done = true;
    }
}

class Note extends BaseNote {
    update({title, description}: NoteUpdate): void {
        if (title && title?.trim()) this.title = title;
        if (description && description?.trim()) this.description = description;
        this.updatedAt = new Date();
    }

}

class NoteConfirmed extends BaseNote {
    update({title, description}: NoteUpdate): void {

        if (title && title?.trim()) {
            // if (confirm('Do you want to edit this title?')) this.title = title;
            this.title = title;
        }
        if (description && description?.trim()) {
            // if (confirm('Do you want to edit this description?')) this.description = description;
            this.description = description;
        }
    }
}

let toDoList = new ToDoList();
let toDoListWithSearch = new ToDoListWithSearch();
toDoListWithSearch.addNote('title 1', 'description 1', true);
toDoList.addNote('title 2', 'description 2', false);
let oldNote = toDoList.updateNote(2, {title: 'test 1', description: 'test 2'});
console.log(toDoList.getNotes());
console.log('oldNote', oldNote);
console.log(toDoList.getAmounts());


