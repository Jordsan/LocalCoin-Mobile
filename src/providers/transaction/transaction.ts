import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TransactionProvider {

    apiURL: string = 'http://192.168.56.106:4200/api/';


    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    constructor(public http: HttpClient) {
    }

    sendTransaction(data: any) {
        this.http.post(this.apiURL + 'chain', JSON.stringify(data), this.httpOptions)
            .subscribe(
                (res: HttpResponse<any>) => {
                    if (res['transaction'] === 'success') {
                        return true;
                    }
                },
                (error: HttpErrorResponse) => {
                    return false;
                }
            );
    }
}
