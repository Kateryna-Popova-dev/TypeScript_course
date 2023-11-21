import {Visitor} from "../Visitor";

describe('Visitor case', () => {
    const visitor = new Visitor('Kate', 'Popova', '06/11/1998');


    it('Visitor created', () => {
        expect(visitor).toBeInstanceOf(Visitor);
    });

    it('check that client got the message', () => {
        expect(visitor.update('The zoo closes in 15 minutes!')).toBe(true);
    });
});