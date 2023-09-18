//HW01
interface ICalculater {
    addition(num1: number, num2: number): number

    decrement(num1: number, num2: number): number

    multiplication(num1: number, num2: number): number

    division(num1: number, num2: number): number
}


class Calculater implements ICalculater {
    addition(num1: number, num2: number): number {
        return num1 + num2;
    }

    decrement(num1: number, num2: number): number {
        return num1 - num2;
    }

    multiplication(num1: number, num2: number): number {
        return num1 * num2;
    }

    division(num1: number, num2: number): number {
        return num1 / num2;
    }
}

let calc: Calculater = new Calculater();

function calculate(calc: Calculater, num1: number, num2: number): number {
    return calc.addition(num1, num2);
}

console.log(calculate(calc, 1, 2));

//HW02
interface IBook {
    author: IAuthor;
    name: string;
    description: string;
    publicationDate: Date;
}

interface IAuthor {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
}

interface IBookService {
    authors: IAuthor[];
    books: IBook[];

    getAuthorsByName(name: string): IAuthor[];

    getBooksByName(name: string): IBook[];

    getBookByAuthorName(name: string): IBook[];

    sortAuthorsByName(): IAuthor[];
}

class BookService implements IBookService {
    authors: IAuthor[];
    books: IBook[];

    constructor(authors: IAuthor[] = [], books: IBook[] = []) {
        this.authors = authors;
        this.books = books;
    }

    addAuthor(author: IAuthor): void {
        this.authors.push(author);
    }

    addBook(book: IBook): void {
        this.books.push(book);
    }

    getAuthorsByName(name: string): IAuthor[] {
        return this.authors.filter(i => i.firstName.toLowerCase().includes(name.toLowerCase())
            || i.lastName.toLowerCase().includes(name.toLowerCase()));
    };

    getBooksByName(name: string): IBook[] {
        return this.books.filter(i => i.name.toLowerCase().includes(name.toLowerCase()));

    };

    getBookByAuthorName(name: string): IBook[] {
        return this.books.filter(i => i.author.firstName.toLowerCase().includes(name.toLowerCase()) ||
            i.author.lastName.toLowerCase().includes(name.toLowerCase()));
    };

    sortAuthorsByName(): IAuthor[] {
        return this.authors.sort((a: IAuthor, b: IAuthor) => {
            if (`${a.lastName} ${a.firstName}` < `${b.lastName} ${b.firstName}`) {
                return -1;
            }
            return 1;
        })
    };
}

let author01: IAuthor = {
    firstName: 'testName01',
    lastName: 'lastName01',
    dateOfBirth: new Date()
}
let book1: IBook = {
    name: 'testName1',
    description: "description testName1",
    author: author01,
    publicationDate: new Date(),
}

let service = new BookService([author01], [book1]);
console.log(service.getBookByAuthorName('testn'))


