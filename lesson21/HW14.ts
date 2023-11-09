interface IBankClient {
    readonly firstName: string;
    readonly lastName: string;
    accountNumber: number;
}

interface ICurrencyConversionStrategy {
    convert(amount: number, currency: CurrencyTypesEnum): number;
}

class CurrentRateConversionStrategy implements ICurrencyConversionStrategy {

    constructor(private exchangeRates: Partial<Record<CurrencyTypesEnum, number>>) {
    }

    convert(amount: number, currency: CurrencyTypesEnum): number {
        const rate = this.exchangeRates[currency];
        if (!rate) throw new Error(`Exchange rate not available for currency ${currency}`);
        return amount * rate;
    }
}

class FixedRateConversionStrategy implements ICurrencyConversionStrategy {
    constructor(private fixedRate: number) {
    }

    convert(amount: number, currency: CurrencyTypesEnum): number {
        return amount * this.fixedRate;
    }
}

enum CurrencyTypesEnum {
    USD = 'usd',
    EUR = 'eur',
    UAH = 'uah'
}

class BankClient implements IBankClient {
    private _accountNumber: number | null;
    private _age: number;
    private _firstName: string;
    private _lastName: string


    constructor(firstName: string, lastName: string, age: number, accountNumber?: number) {
        this._accountNumber = accountNumber ?? null;
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public get accountNumber(): number {
        if (!this._accountNumber) throw new Error('New client');
        return this._accountNumber;
    }

    public set accountNumber(value: number) {
        this._accountNumber = value;
    }

    public get age(): number {
        return this._age;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

}

class BankAccount {
    private readonly currency: CurrencyTypesEnum;
    private readonly _number: number;
    private _balance = 0;
    private _holder: IBankClient;
    private _conversionStrategy: ICurrencyConversionStrategy;

    constructor(client: IBankClient, currency: CurrencyTypesEnum, conversionStrategy: ICurrencyConversionStrategy) {
        this.currency = currency;
        this._holder = client;
        this._number = Math.floor(100000000 + Math.random() * 900000000);
        this._conversionStrategy = conversionStrategy;
    }

    public set conversionStrategy(strategy: ICurrencyConversionStrategy) {
        this._conversionStrategy = strategy;
    }

    public balance(): number {
        return this._balance;
    }

    public get number(): number {
        return this._number;
    }

    public holder(): IBankClient {
        return this._holder;
    }

    public deposite(amount: number): void {
        this._balance += amount;
    }

    public withdraw(amount: number, currency: CurrencyTypesEnum): void {
        if (this.currency === currency) {
            this._balance -= amount
        } else {
            const convertedAmount = this._conversionStrategy.convert(amount, currency);
            this._balance -= convertedAmount;
        }
    }
}

class Bank {
    private static instance: Bank;
    readonly accounts: Record<number, BankAccount> = {};
    private readonly salaryDataProvider: SalaryDataProvider;
    private readonly creditHistoryProvider: CreditHistoryProvider;


    private constructor() {
        this.salaryDataProvider = new SalaryDataProvider;
        this.creditHistoryProvider = new CreditHistoryProvider;
    }

    public static getInstance(): Bank {
        if (this.instance === undefined) {
            this.instance = new Bank();
        }
        return Bank.instance;
    }

    public createAccount(client: IBankClient, currency: CurrencyTypesEnum, conversionStrategy: ICurrencyConversionStrategy): BankAccount {
        const account = new BankAccount(client, currency, conversionStrategy);
        client.accountNumber = account.number;
        this.accounts[account.number] = account;
        return account;
    }

    public deleteAccount(bankAccount: BankAccount) {
        delete this.accounts[bankAccount.number];
    }

    public deposite(bankAccount: BankAccount, amount: number): void {
        const account = this.accounts[bankAccount.number];
        account?.deposite(amount);
    }

    public withdraw(bankAccount: BankAccount, amount: number, currency: CurrencyTypesEnum): void {
        const account = this.accounts[bankAccount.number];
        account?.withdraw(amount, currency);
    }

    public getCreditDecision(client: IBankClient,): boolean {
        //Надо смотреть занятие.
        return true;
    }

}

class SalaryDataProvider {
    public getAnnualSalary(client: IBankClient): number {
        return 50000;
    }
}

class CreditHistoryProvider {
    public getCreditRating(client: IBankClient): number {
        return 4;
    }
}

const EURExchangeRate = {
    [CurrencyTypesEnum.USD]: 1.070715474209651,
    [CurrencyTypesEnum.UAH]: 0.0259000259000259,
}
const USDExchangeRate = {
    [CurrencyTypesEnum.EUR]: 0.93,
    [CurrencyTypesEnum.UAH]: 0.0277315585135885,
}
const UAHExchangeRate = {
    [CurrencyTypesEnum.USD]: 36.06,
    [CurrencyTypesEnum.EUR]: 38.61,
}
const bank = Bank.getInstance();

const john = new BankClient('John', 'Doe', 42);


const fixedRatesStrategy = new FixedRateConversionStrategy(0.5);

const johnAccountEUR = bank.createAccount(john, CurrencyTypesEnum.EUR, new CurrentRateConversionStrategy(EURExchangeRate));
const johnAccountUSD = bank.createAccount(john, CurrencyTypesEnum.USD, fixedRatesStrategy);
const johnAccountUAH = bank.createAccount(john, CurrencyTypesEnum.UAH, new CurrentRateConversionStrategy(UAHExchangeRate));
bank.deposite(johnAccountUAH, 1000);
bank.deleteAccount(johnAccountEUR);
bank.deleteAccount(johnAccountUSD);

bank.withdraw(johnAccountUAH, 100, CurrencyTypesEnum.EUR);
bank.getCreditDecision(john);
console.log(bank.accounts);

