import {CommercialDepartment} from "../СommercialDepartment";
import {Client} from "../Clients";
import {Visitor} from "../Visitor";

describe('Commercial department case', () => {
    let commercialDepartment: CommercialDepartment;
    const client01 = new Client('John', 'Doe', '12/12/1912');
    const visitor01 = new Visitor('Kate', 'Popova', '06/11/1998');
    beforeEach(() => {
        commercialDepartment = new CommercialDepartment();

    });
    it('commercialDepartment created', () => {
        expect(commercialDepartment).toBeInstanceOf(CommercialDepartment);
    });
    it('this administrationMediator has my desired properties', () => {
        expect(commercialDepartment).toHaveProperty('clients');
        expect(commercialDepartment).toHaveProperty('observers');
    });

    it('check that the letter reached the clients', () => {
        expect(commercialDepartment.newsletter('advertising campaign')).toBe(true);
    });
    it('check that the client was added to clients', () => {
        commercialDepartment.update(client01);
        expect(commercialDepartment.clients[client01.getId()]).toEqual(client01);
    });
    it('check that observer was added to observers', () => {
        commercialDepartment.attach(visitor01);
        expect(commercialDepartment.observers).toEqual([visitor01]);
    });
    it('check that observer was deleted from observers', () => {
        commercialDepartment.detach(visitor01);
        expect(commercialDepartment.observers).toEqual([]);
    });
});