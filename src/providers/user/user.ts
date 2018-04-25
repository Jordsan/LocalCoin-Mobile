import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

    currUser: string;
    balance: number;

    apiURL: string = 'http://192.168.56.106:4200/api/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    constructor(public http: HttpClient) {
        this.currUser = 'test1';
    }

    getCurrUser(): string {
        return this.currUser;
    }

    getBalance() {
        this.http.get(this.apiURL + `wallet/${this.getCurrUser()}`, this.httpOptions)
            .subscribe(
                (res: HttpResponse<any>) => {
                    this.balance = res['balance'];
                },
                (error: HttpErrorResponse) => {
                    this.balance = -1;
                }
            );
    }

}
