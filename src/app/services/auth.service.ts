import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private userSubject: BehaviorSubject<User | null>;
    public currentUser: Observable<User | null>;

	constructor(private http:HttpClient) {
		this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')!));
        this.currentUser = this.userSubject.asObservable();
	}

	public get currentUserValue(): any {
		return this.userSubject.value;
	  }

	checkAuthentication(username:String, password:String) {
		return this.http.post<any>('http://localhost:8080/login', { username, password }).pipe(map(user => {
			localStorage.setItem('currentUser', JSON.stringify(user));
			this.userSubject.next(user);
			return user;
		  }));
	}

	logout():void{
		localStorage.removeItem('currentUser');
		this.userSubject.next(null);
	}
	checkRegisteration(username:String, email:String, password:String) {
		return this.http.post<any>('http://localhost:8080/signup', { username, email, password }).pipe(
			map(user =>{
				return user;
			}),
			catchError(error => {
				if (error.status === 409) {
					return throwError('Username is already taken');
				}
				return throwError('Registration failed. Please try again later.');
			})
		);
	}
}
