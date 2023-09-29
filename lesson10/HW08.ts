//1
let arrayNum = [5, 3, 7, 9, 11, 5, 2];
let arrayStr = ['one', 'three', 'four', 'two', 'one', 'two', 'five'];

type filter<U1> = (el: U1) => U1 | undefined;

function filterArray_1<T2>(array: T2[], condition: filter<T2>): T2 | undefined {
    let newArray: any = [];
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray as T2;
}

let array1 = filterArray_1<number>(arrayNum, (el) => {
    if (el === 5) return el
});
let array2 = filterArray_1<string>(arrayStr, (el) => {
    if (el === 'one') return el
});
console.log('array 1', array1);
console.log('array 2', array2);

//2
class Stack<T> {
    stackElem: T[] = [];

    push(value: T): void {
        this.stackElem[this.stackElem.length++] = value;
    }

    pop(): T {
        if (this.stackElem.length === 0) {
            throw new Error("stack elements is empty");
        }
        return this.stackElem.splice(this.stackElem.length - 1)[0];
    }

    peek(): Error | T {
        if (this.stackElem.length === 0) {
            throw new Error("stack elements is empty");
        }
        return this.stackElem[this.stackElem.length - 1];
    }
}

let stackNum: Stack<number> = new Stack();
let stackStr: Stack<string> = new Stack();

stackNum.push(12);
stackNum.push(34);
stackNum.push(90);
stackNum.pop();
let lastElemNum = stackNum.peek();

stackStr.push('one');
stackStr.push('two');
stackStr.pop();
let lastElemStr = stackStr.peek();


console.log('stackNum', stackNum);
console.log('stackStr', stackStr);
console.log('lastElemNum', lastElemNum);
console.log('lastElemStr', lastElemStr);

//3
interface IWord<T extends string | number> {
    [key: string | number]: T;
}

class Dictionary<U extends string | number> {
    dictionaryList: IWord<U>[] = [];

    set(word: IWord<U>) {
        this.dictionaryList.push(word);
    }

    get(word: string): U | undefined {
        for (let item in this.dictionaryList) {
            for (let [key, value] of Object.entries(this.dictionaryList[item])) {
                if (key.toLowerCase() === word.toLowerCase()) {
                    return value;
                }
            }
        }
    }

    has(word: string): boolean {
        for (let item in this.dictionaryList) {
            for (let key in this.dictionaryList[item]) {
                if (key.toLowerCase() === word.toLowerCase()) {
                    return true;
                }
            }
        }
        return false;
    }
}

let dictionary: Dictionary<string> = new Dictionary();
let dictionaryNum: Dictionary<number> = new Dictionary();

let words1: IWord<string> = {'One': 'Один', 'Two': 'Два'};
let words2: IWord<number> = {'One': 1, 'Two': 2};

dictionary.set(words1);
console.log(dictionary.has('One'));
dictionaryNum.set(words2);
console.log(dictionary);
console.log(dictionaryNum);
console.log(dictionary.get('Two'));


