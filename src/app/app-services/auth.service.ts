import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

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
