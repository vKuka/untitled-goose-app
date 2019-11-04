import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


import {User} from './user';
import {SignInSuccess} from './sign-in';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  public signIn(user: User) {
    if (/^(\d{11}|\+?7\d{10})$/.test(user.login)) {
      user.login = user.login.replace(/^(8|\+?7)/, '+7');
      return this.loginByPhone(user);
    } else if (/^[\.\-\w]+@[\.\-\w]+\.\w{2,}$/.test(user.login)) {
      return this.login(user);
    }
  }

  public login(user: User) {
    const body = {
      email: user.login,
      password: user.password
    };
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post('https://saas.cloudike.com/api/2/accounts/login/', body, options).pipe(
      map((data: SignInSuccess) => {
        localStorage.setItem('AUTH_TOKEN', data.token);
        localStorage.setItem('USER_ID', String(data.userid));
      }));
  }

  public loginByPhone(user: User) {
    const body = {
      phone: user.login,
      password: user.password
    };
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post('https://saas.cloudike.com/api/2/accounts/login_by_phone/', body, options).pipe(
      map((data: SignInSuccess) => {
        localStorage.setItem('AUTH_TOKEN', data.token);
        localStorage.setItem('USER_ID', String(data.userid));
      })
    );
  }

  public isSignIn() {
    // Тут должен быть запрос на проверку токена, но я не разобрался каким методом его проверять
    return localStorage.getItem('AUTH_TOKEN');
  }
}
