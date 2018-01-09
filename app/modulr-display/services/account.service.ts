import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Account } from '../models/account.interface';

const ACCOUNT_API: string = '/api/content';

@Injectable()
export class AccountService {
  constructor(private http: Http) {}

  getAccounts(): Observable<Account[]> {
    return this.http
      .get(ACCOUNT_API)
      .map((response: Response) => response.json());
  }
}
