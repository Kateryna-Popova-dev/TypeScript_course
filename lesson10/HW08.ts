//1
const arrayNum = [5, 3, 7, 9, 11, 5, 2];
const arrayStr = ['one', 'three', 'four', 'two', 'one', 'two', 'five'];

type filter<U1> = (el: U1) => U1 | undefined;

function filterArray_1<T2>(array: T2[], condition: filter<T2>): T2 | undefined {
    const newArray: T2[] = [];
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray as T2;
}

const array1 = filterArray_1<number>(arrayNum, (el) => {
    if (el === 5) return el
});
const array2 = filterArray_1<string>(arrayStr, (el) => {
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

    peek(): T {
        if (this.stackElem.length === 0) {
            throw new Error("stack elements is empty");
        }
        return this.stackElem[this.stackElem.length - 1];
    }
}

const stackNum: Stack<number> = new Stack();
const stackStr: Stack<string> = new Stack();

stackNum.push(12);
stackNum.push(34);
stackNum.push(90);
stackNum.pop();
const lastElemNum = stackNum.peek();

stackStr.push('one');
stackStr.push('two');
stackStr.pop();
const lastElemStr = stackStr.peek();


console.log('stackNum', stackNum);
console.log('stackStr', stackStr);
console.log('lastElemNum', lastElemNum);
console.log('lastElemStr', lastElemStr);

//3


class Dictionary<K extends string | number | symbol, V> {
    private dic = <{ [P in K]: V }>{};

    public set(key: K, value: V): void {
        this.dic[key] = value;
    }

    public get(key: K): V | undefined {
        return this.dic[key];
    }

    public has(key: K): boolean {
        return this.dic.hasOwnProperty(key);
    }
}

const dictionary: Dictionary<string, number> = new Dictionary<string, number>();
dictionary.set('one', 42);
console.log(dictionary.has('one'));
console.log(dictionary);



