//1
interface IReason {
    reason: string;
    replacementMethod?: string;
}
function DeprecatedMethod<Y extends IReason>(reason: Y){
   return function <T, A extends any[], R>(
        originalMethod: (this:T, ...args: A)=> R,
        context: ClassMethodDecoratorContext<T, (this: T, ...args: A)=> R>
    ){
        if(context.kind !== 'method') throw new Error('Method-only decorator');

        function replacementMethod(this: T, ...args: A) : R{
            console.log(`${String(context.name)} not recommended for use, because ${reason.reason}`);

            if (reason.replacementMethod){
                console.log(`${String(context.name)} can be replaced by ${reason.replacementMethod}`);
            }
            return originalMethod.apply(this, args);
        }
        return replacementMethod;
    }
}

class User{

    fullName: string;
    constructor(private name: string, private age: number, fullName: string) {
        this.fullName = fullName;
    }
    @DeprecatedMethod({reason: 'method is deprecated', replacementMethod:'anything'})
    getFullYear(): number{
     return new Date().getFullYear()-this.age;
    }
}
let user1 = new User('Kate', 25, 'Kate Popova');
console.log(user1.getFullYear());

//2
class Validate{
    @DeprecatedProperty
    private _minLength: number = 10;
    @DeprecatedProperty
    private _maxLength: number = 100;

    private _email: string = '';

    @MinLength(10)
    set minLength(value: number){
         this._minLength = value;
    }
    @MaxLength(500)
    set maxLength(value: number){
        this._maxLength = value;
    }
    @Email
    set email(value: string){
        this._email = value;
    }

}

let email = new Validate();
email.email = 'test@gmail.com'
console.log(email)


function DeprecatedProperty<T, V>(originalProperty: undefined, context: ClassFieldDecoratorContext<T, V>){
    if (context.kind !== 'field') throw new Error('Field-only decorator');
    function updatedProperty(this: T, originalValue: V): V{
        console.log(`${String(context.name)} is deprecated and will be removed ina feature version`);
        return originalValue;
    }
    return updatedProperty;
}

function MinLength(min: number){
    return function<T> (originalMethod: (value: number)=> void, context: ClassSetterDecoratorContext<T, number>){
        if (context.kind !== 'setter') throw new Error('Setter-only decorator');
        function updatedSetter(this: T, value: number): void{
            if (value < min) throw new Error(`Value cant be less then ${min}`);

            return originalMethod.apply(this, [value]);
        }
        return updatedSetter;
    }
}
function MaxLength(max: number){
    return function<T> (originalMethod: (value: number)=> void, context: ClassSetterDecoratorContext<T, number>){
        if (context.kind !== 'setter') throw new Error('Setter-only decorator');
        function updatedSetter(this: T, value: number): void{

            if (value> max) throw new Error(`Value cant be more then ${max}`);

            return originalMethod.apply(this, [value]);
        }
        return updatedSetter;
    }
}

function Email<T> (originalMethod: (value: string)=> void, context: ClassSetterDecoratorContext<T, string>){
        if (context.kind !== 'setter') throw new Error('Setter-only decorator');
        function updatedSetter(this: T, value: string): void{
            const regex = /^[a-zA-Z0-9_\-.]{2,50}@[a-zA-Z0-9]{2,50}\.[a-z]{2,6}$/gm;
            if (!regex.test(value)) throw new Error(`Invalid email`);

            return originalMethod.apply(this, [value]);
        }
        return updatedSetter;
    }

