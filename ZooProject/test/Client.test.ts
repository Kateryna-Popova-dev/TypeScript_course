import {Client} from "../Clients";

describe('Administration mediator case', () => {
    let client = new Client('Kate', 'Popova', '06/11/1998')


    it('Client created', () => {
        expect(client).toBeInstanceOf(Client);
    });

    it('check that client got the message', () => {
        expect(client.update('The zoo closes in 15 minutes!')).toBe(true);
    });
});