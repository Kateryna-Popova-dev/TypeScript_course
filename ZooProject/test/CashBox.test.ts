import {CashBox} from "../CashBox";
import {Visitor} from "../Visitor";
import {ticketPrice, TypeOfTickets} from "../enums";
import {Accounting} from "../Аccounting";

describe('CashBox case', () => {
    let cashBox: CashBox;
    let accounting: Accounting = Accounting.getInstance();

    beforeEach(() => {
        cashBox = new CashBox();
    });
    const visitor01 = new Visitor('Kate', 'Popova', '06/11/1998');
    it('CashBox created', () => {
        expect(cashBox).toBeInstanceOf(CashBox);
    });

    it('check that daily revenue was added to accounting budget', () => {
        cashBox.ticketSale(visitor01, TypeOfTickets.adult);
        accounting.addDailyRevenue(cashBox.getDailyRevenue());
        expect(accounting.budget).toBe(ticketPrice[TypeOfTickets.adult]);
    });
    it('check that daily revenue', () => {
        cashBox.ticketSale(visitor01, TypeOfTickets.adult);
        expect(cashBox.getDailyRevenue()).toEqual({day: new Date().toDateString(), takings: 500});
    });
    it('check that observer was added to observers', () => {
        cashBox.attach(visitor01);
        expect(cashBox.observers).toEqual([visitor01]);
    });
    it('check that observer was deleted from observers', () => {
        cashBox.detach(visitor01);
        expect(cashBox.observers).toEqual([]);
    });
    it('check all observers got notify', () => {
        expect(cashBox.notify(visitor01)).toBe(true);
    });

});