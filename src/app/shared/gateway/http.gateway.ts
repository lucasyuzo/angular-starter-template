import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest } from './http.request';

@Injectable({ providedIn: 'root' })
export class HttpGateway {

    constructor(private httpClient: HttpClient) { }

    get<T>(request: HttpRequest): Observable<T> {
        return this.httpClient.get<T>(request.url, { headers: request.headers });
    }

    post<T>(request: HttpRequest): Observable<T> {
        return this.httpClient.post<T>(request.url, request.body, { headers: request.headers });
    }

    put<T>(request: HttpRequest): Observable<T> {
        return this.httpClient.put<T>(request.url, request.body, { headers: request.headers });
    }

    delete<T>(request: HttpRequest): Observable<T> {
        return this.httpClient.delete<T>(request.url, { headers: request.headers });
    }

}
