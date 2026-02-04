import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpGateway } from '../../../shared/gateway/http.gateway';
import { Client } from '../entities/client';
import { ClientDTO } from './dtos/client.dto';
import { GetClientByIdRequest } from './requests/get-client-by-id.request';
import { UpdateClientByIdRequest } from './requests/update-client-by-id.request';

@Injectable({ providedIn: 'root' })
export class ClientGateway implements ClientGateway {

    static URL = 'http://clientapi/';

    constructor(private httpGateway: HttpGateway) { }

    getClientById(clientId: string): Observable<ClientDTO> {
        const request = new GetClientByIdRequest(clientId);
        return this.httpGateway.get<ClientDTO>(request);
    }

    updateClientById(client: Client): Observable<ClientDTO> {
        const request = new UpdateClientByIdRequest(client);
        return this.httpGateway.put<ClientDTO>(request);
    }

}
