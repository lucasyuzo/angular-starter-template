import { HttpHeaders } from '@angular/common/http';
import { HttpRequest } from '../../../../shared/gateway/http.request';
import { ClientGateway } from '../client.gateway';

export class GetClientByIdRequest implements HttpRequest {

    url: string;
    body: unknown;
    headers: HttpHeaders;

    constructor(clientId: string) {
        this.url = ClientGateway.URL + clientId;
        this.body = null;
        this.headers = new HttpHeaders();
    }

}
