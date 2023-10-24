interface ISearch {
    search: (value: string) => BaseToDoItem[];
}

interface ISort {
    sortByStatus: () => BaseToDoItem[];
    sortByDate: () => BaseToDoItem[];
}

class ToDoList implements ISearch, ISort {
    private items: BaseToDoItem[] = [];

    addItem(item: BaseToDoItem): void {

        if (item.description === '') throw new Error('Description can not be empty');
        this.items.push(item);
    }

    editItem(id: number, title: string, description: string): void {
        let item = this.items.find(item => item.id === id);
        if (item) {
            item.edit(title, description);
            item.updatedAt = new Date();
        }
    }

    removeItem(id: number): void {
        let item = this.items.find(item => item.id === id);
        if (item) {
            let index = this.items.indexOf(item);
            this.items.splice(index, 1);
        }
    }

    getInfo(id: number) {
        let item = this.items.find(item => item.id === id);
        if (item) {
            console.log(`
       \Title: ${item.title}
       \Description: ${item.description}
       \Creation at: ${item.creationAt}
       \Updated at: ${item.updatedAt}
       \Done: ${item.done}
       `)
        }
    }

    getItems(): BaseToDoItem[] {
        return this.items;
    }

    setDone(id: number): void {
        let item = this.items.find(item => item.id === id);
        if (item) {
            item.done = true;
        }
    }

    getAmounts(): { all: number, unfinished: number } {
        return {
            all: this.items.length,
            unfinished: this.items.filter(item => !item.done).length
        }
    }

    search(value: string): BaseToDoItem[] {
        return this.items.filter(item => item.title.toLowerCase().includes(value.toLowerCase())
            || item.description.toLowerCase().includes(value.toLowerCase()));
    }

    sortByStatus(): BaseToDoItem[] {
        return this.items.sort((a, b) => +a.done - +b.done);
    }

    sortByDate(): BaseToDoItem[] {
        return this.items.sort((a, b) => +a.creationAt - +b.creationAt);
    }
}

class BaseToDoItem {
    static counter: number = 0;
    id: number;
    title: string;
    description: string;
    creationAt: Date;
    updatedAt: Date;
    done: boolean;

    constructor(title: string, description: string) {
        this.id = BaseToDoItem.counter++;
        this.title = title;
        this.description = description;
        this.creationAt = new Date();
        this.updatedAt = new Date();
        this.done = false;
    }

    edit(title: string, description: string): void {
        this.title = title;
        this.description = description;
    }
}

class SecureToDoItem extends BaseToDoItem {

    constructor(title: string, description: string) {
        super(title, description);
    }

    override edit(text: string): void {
        if (confirm('Do you want to edit this item?')) this.description = text;
    }
}

let toDoItem1 = new BaseToDoItem('test1', 'description1');
let toDoItem2 = new BaseToDoItem('test2', 'description2');
let toDoItem3 = new SecureToDoItem('Kate', 'Popova');
let toDoList = new ToDoList();
toDoList.addItem(toDoItem1);
toDoList.addItem(toDoItem2);
toDoList.addItem(toDoItem3);

toDoList.removeItem(1);
console.log(toDoList.getItems());
