enum Color {
    BLUE = 'Blue',
    RED = 'Red',
    GREEN = 'Green',
    YELLOW = 'Yellow'
}

interface ISquareShape {
    print(): string;
}

abstract class Figure {

    protected constructor(public readonly name: string, public readonly color: Color) {
    }

    abstract calculateArea(): number;
}


class Circle extends Figure {

    constructor(name: string, color: Color, private radius: number) {
        super(name, color);
    }

    calculateArea(): number {
        return (this.radius ** 2) * Math.PI;
    }
}

class Rectangle extends Figure implements ISquareShape {
    constructor(name: string, color: Color, private sideA: number, private sideB: number) {
        super(name, color);
    }

    calculateArea(): number {
        return this.sideA * this.sideB;
    }

    print(): string {
        return "S = a ⋅ b";
    }
}

class Square extends Figure implements ISquareShape {
    constructor(name: string, color: Color, private side: number) {
        super(name, color);
    }

    calculateArea(): number {
        return this.side ** 2;
    }

    print(): string {
        return "S = a^2";
    }
}

class Triangle extends Figure {
    constructor(name: string, color: Color, private base: number, private height: number) {
        super(name, color);
    }

    calculateArea(): number {
        return (this.base * this.height) / 2;
    }
}

let circle = new Circle('Circle', Color.GREEN, 20);
let rectangle = new Rectangle('Circle', Color.BLUE, 10, 20);
let square = new Square('Circle', Color.RED, 20);
let triangle = new Triangle('Circle', Color.YELLOW, 30, 15);

console.log('Circle area is: ', circle.calculateArea());
console.log('Rectangle area is: ', rectangle.calculateArea());
console.log('Rectangle area formula is: ', rectangle.print());
console.log('Square area is: ', square.calculateArea());
console.log('Square area formula is: ', square.print());
console.log('Triangle area is: ', triangle.calculateArea());

