import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../env';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public getSingleUser() {
    return this.http.get(`${environment.baseURL}/users/1`);
  }

  users = [
    {
      username: 'muddasir',
      password: '123',
      isLoggedIn: false,
      products: [],
    },
    {
      username: 'yasir',
      password: '111',
      isLoggedIn: false,
      products: [],
    },
  ];

  loggedInUser = new BehaviorSubject<any>(null);
  loggedInUsername = new Subject<any>();

  addDetails() {}
}
