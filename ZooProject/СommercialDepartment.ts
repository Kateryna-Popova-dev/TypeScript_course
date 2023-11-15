import {Client} from "./Clients";
import {Observer} from './interface';


export class CommercialDepartment implements Observer {
    clients: Record<number, Client> = {};

    update(client: Client): void {
        this.clients[client._id] = client;
        console.log('ConcreteObserverA: Reacted to the event.');
    }
}