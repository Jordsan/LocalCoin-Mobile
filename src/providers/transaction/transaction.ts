import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TransactionProvider {

    apiURL: string = 'http://192.168.56.106:4200/api/'


    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    constructor(public http: HttpClient) {
    }

    sendTransaction(data: any): boolean {
        console.log(JSON.stringify(data));
        this.http.post(this.apiURL + 'chain', JSON.stringify(data), this.httpOptions)
            .subscribe(data => {
                console.log(data);
            });
        return false;
    }
}
