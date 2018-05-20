import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { TokenService } from '.';

@Injectable()
export class AuthakService {

  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();



  constructor(private Token: TokenService) { }

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

}