import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TransactionProvider {

    apiURL: string = 'https://local-coin.firebaseapp.com/api/';


    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    constructor(public http: HttpClient) {
    }

    sendTransaction(data: any) {
        this.http.post(this.apiURL + 'transactions', JSON.stringify(data), this.httpOptions)
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
