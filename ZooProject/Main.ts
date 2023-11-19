import {CommercialDepartment} from "./СommercialDepartment";
import {CashBox} from "./CashBox";
import {Accounting} from "./Аccounting";
import {Administration} from "./Аdministration";
import {Employee} from "./Employee";
import {Positions, TypeOfAnimal, TypeOfHealth, TypeOfTickets} from "./enums";
import {Animal} from "./Animal";
import {AdministrationMediator} from "./AdministrationMediator";
import {Zoo} from "./Zoo";
import {Visitor} from "./Visitor";

//Create all departments
const zoo = new Zoo;
const commercialDepartment = new CommercialDepartment();
const cashBox = new CashBox();
const accounting = new Accounting;
const administration = new Administration();

//Set mediator with administration, accounting, commercialDepartment.
new AdministrationMediator(administration, accounting, commercialDepartment);

//Installing a zoo and commercialDepartment observer at the cashBox.
cashBox.attach(zoo);
cashBox.attach(commercialDepartment);

//Create new employee
const employee01 = new Employee('Mark', 'Ryden', '07/10/1900', Positions.SECURITYGUARD, '775-55-55');
const employee02 = new Employee('Eugene', 'Tooms', '07/10/1900', Positions.ANIMALFEEDER, '775-33-34');

//Create new animal
const unicorn = new Animal(TypeOfAnimal.UNICORN, 'marcel', TypeOfHealth.AMAZING, 5);

//Opportunity to pay salaries to all or several employees
accounting.paySalary([employee01, employee02]);
accounting.paySalary();
accounting.paySalary(employee01);

//Opportunity new employee and animals.
administration.addEmployee(employee01);
administration.addEmployee(employee02);
administration.addAnimal(unicorn);

//Create visitors
const visitor01 = new Visitor('Kate', 'Popova');
const visitor02 = new Visitor('Johnny', 'Depp', '09/06/1963');

visitor01.dateOfBirth = '06/11/1998';
visitor01.tel = '380665554433';
visitor01.email = 'test.popova@gmail.com';
console.log(visitor01.age);
console.log(visitor01.age);

//Ticket selling
cashBox.ticketSale(visitor01, TypeOfTickets.child);
cashBox.ticketSale(visitor02, TypeOfTickets.adult);

//Create newsletter for clients.
commercialDepartment.newsletter('Курлык-курлык, приходите в наш зоопарк! :)');

//Create newsletter for visitors.
zoo.sendMessageToVisitors('The zoo closes in 15 minutes!');

//Ability to add daily revenue to accounting
accounting.addDailyRevenue(cashBox.getDailyRevenue());

console.log('accounting.employees', accounting.employees);
console.log('accounting.animals', accounting.animals);
console.log('accounting.budget: ', accounting.budget);
console.log('zoo.visitors', zoo.visitors);
console.log('commercialDepartment.clients', commercialDepartment.clients);
console.log('accounting', accounting);
console.log('cashBox', cashBox);
