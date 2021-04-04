import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class ApiService {
	redirectUrl: string;
	
	//baseUrl:string = "http://localhost/angular-admin/php";
	//baseUrl:string = "http://192.168.230.135/angular-admin/php";
	
	baseUrl:string = "http://localhost:81/angular-admin/php";
	
	@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
	constructor(private httpClient : HttpClient) { }
	
	public userlogin(username, password, nickname) {
		alert(username)
		return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password, nickname })
		.pipe(map(Users => {
		this.setToken(Users[0].username);
		this.getLoggedInName.emit(true);
		return Users;
		}));
	}

	getAllUsers(id) : Observable<Users[] > {
		return this.httpClient.get<Users[]>(this.baseUrl+'/getdata.php');
	}

	//token
	setToken(token: string) {
		localStorage.setItem('token', token);
	}
	
	getToken() {
		return localStorage.getItem('token');
	}
	
	deleteToken() {
		localStorage.removeItem('token');
	}
	
	isLoggedIn() {
		const usertoken = this.getToken();
		if (usertoken != null) {
		return true
		}
		return false;
	}
}