import {Zoo} from "../Zoo";
import {Visitor} from "../Visitor";


describe('Zoo case', () => {
    let zoo: Zoo;
    const visitor = new Visitor('Kate', 'Popova', '06/11/1998');

    beforeEach(() => {
        zoo = Zoo.getInstance();

    });

    it('Zoo created', () => {
        expect(zoo).toBeInstanceOf(Zoo);
    });

    it('check that client got the message', () => {
        expect(zoo.update(visitor)).toBe(true);
    });
});