import {CommercialDepartment} from "../СommercialDepartment";
import {Client} from "../Clients";

describe('Person case', () => {
    let commercialDepartment: CommercialDepartment;
    const client01 = new Client('John', 'Doe', '12/12/1912');
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
    it('check that the letter reached the clients', () => {
        commercialDepartment.update(client01);
        expect(commercialDepartment.clients[client01.getId()]).toEqual(client01);
    });
});