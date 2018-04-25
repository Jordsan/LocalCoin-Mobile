import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

    currUser: string;
    

    constructor(public http: HttpClient) {
        this.currUser = 'test1';
    }

    getCurrUser(): string {
        return this.currUser;
    }

    getBalance(): number {
        return 999;
    }

}
