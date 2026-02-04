import { HttpHeaders } from '@angular/common/http';
import { HttpRequest } from '../../../../shared/gateway/http.request';
import { Client } from '../../entities/client';
import { ClientGateway } from '../client.gateway';

export class UpdateClientByIdRequest implements HttpRequest {

    url: string;
    body: unknown;
    headers: HttpHeaders;

    constructor(private client: Client) {
        this.url = ClientGateway.URL;
        this.body = {
            clientId: client.getId(),
            firstName: client.getFirstName(),
            lastName: client.getLastName(),
            age: client.getAge()
        };
        this.headers = new HttpHeaders();
    }
}
