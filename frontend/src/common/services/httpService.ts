import { from, Observable } from 'rxjs';

import { HttpError } from 'common/models/httpErrorModels';

import { HttpMethod } from '../models/httpModels';

export class HttpService {
    constructor(private readonly baseUrl: string) {}

    GET<T>(path: string) {
        return this.makeRequest<T>(path, HttpMethod.GET);
    }

    makeRequest<T>(path: string, method: HttpMethod): Observable<T> {
        const url = `${this.baseUrl}${path}`;

        const headers = {
            'content-type': 'application/json',
        };

        const params = {
            url,
            method,
            headers,
        };

        return from(
            fetch(url, params).then(async response => {
                if (response.ok) {
                    return response.status !== 204 ? response.json() : response;
                }

                const message = response.statusText;
                const body = await response.json();
                const code = response.status;

                throw new HttpError(message, body, code);
            }),
        );
    }
}
