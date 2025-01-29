import { HttpHeaders } from '@angular/common/http';

export interface HttpRequest {
    url: string;
    body: unknown | null;
    headers: HttpHeaders;
}
