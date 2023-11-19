import {IPosition} from "./interface";

export type PositionName =
    'DIRECTOR' |
    'ACCOUNTANT' |
    'ADMINISTRATOR' |
    'PROMOTER' |
    'STREETCLEANER' |
    'SHITREMOVER' |
    'ANIMALFEEDER' |
    'SECURITYGUARD';

export const Positions: { [P in PositionName]: IPosition } = {
    'DIRECTOR': {name: 'Didector', responsibilities: 'live', salary: 10000},
    'ACCOUNTANT': {name: 'Accountant', responsibilities: 'control the budget', salary: 5000},
    'ADMINISTRATOR': {name: 'Administrator', responsibilities: 'Zoo management', salary: 5000},
    'PROMOTER': {name: 'Promoter', responsibilities: 'advertise', salary: 4000},
    'STREETCLEANER': {name: 'Street cleaner', responsibilities: 'clear roads', salary: 12000},
    'SHITREMOVER': {name: 'Shit remover', responsibilities: 'clean up shit', salary: 1000000},
    'ANIMALFEEDER': {name: 'Animal feeder', responsibilities: 'feed animals', salary: 70000},
    'SECURITYGUARD': {name: 'Security guard', responsibilities: 'make sure animals don\'t get stolen\'', salary: 25000},
}

export enum TypeOfAnimal {
    LION = 'lion',
    GIRAFFE = 'giraffe',
    ZEBRA = 'zebra',
    TIGER = 'tiger',
    RHINOCEROS = 'rhinoceros',
    UNICORN = 'unicorn',
    MOOSE = 'Moose',
    CAMEL = 'camel',
    TASMANIANDEVIL = 'tasmanian devil',
}

export const costOfFeed = {
    [TypeOfAnimal.LION]: 2000,
    [TypeOfAnimal.GIRAFFE]: 1500,
    [TypeOfAnimal.ZEBRA]: 1000,
    [TypeOfAnimal.TIGER]: 2000,
    [TypeOfAnimal.RHINOCEROS]: 3000,
    [TypeOfAnimal.UNICORN]: 500,
    [TypeOfAnimal.MOOSE]: 600,
    [TypeOfAnimal.CAMEL]: 1200,
    [TypeOfAnimal.TASMANIANDEVIL]: 1500,
}

export enum TypeOfHealth {
    BAD = 'bad',
    GOOD = 'good',
    VERYGOOD = 'very good',
    AMAZING = 'amazing'
}

export enum accountingEvent {
    SALARYPAYMAENT = 'salary payment',
    FEEDPURCHASE = 'feed purchase',
}

// if (event === 'news') {
//     console.log('Mediator reacts on news and triggers method newsletter:');
//     this.commercialDepartment.newsletter(String(data));
// }
// newsletter(message: string): void {
//     this.mediator.notify(this, message, 'news');
// }