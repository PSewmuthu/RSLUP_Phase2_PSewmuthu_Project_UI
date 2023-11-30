import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  isLoggedIn() {
    return !!localStorage.getItem('token'); // if token is present then return true else false
  }
}
