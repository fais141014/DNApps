import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {Users} from '../models/users';

@Injectable({
  providedIn: 'root'
})

// httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }  

export class AuthenticationService {

 public baseURL:string="https://localhost:44350/api/Users/";
 private currentUserSubject: BehaviorSubject<Users>;
 public currentUser: Observable<Users>;

 

  constructor(private http:HttpClient) { }

  login(email: string, password: string):Observable<Users> {
    return this.http.get<Users>(this.baseURL +email+'/'+password)
             .pipe(map(Users => {
                // login successful if there's a jwt token in the response
                if (Users && Users.token) {
                  debugger;
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(Users));
                   // this.currentUserSubject.next(Users);
                }
                return Users;
            }));
  }
}
