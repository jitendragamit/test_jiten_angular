import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	angForm: FormGroup;
	constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
	this.angForm = this.fb.group({
	username: ['', [Validators.required,Validators.minLength(1)]],
	//username: ['', Validators.required],
	password: ['', Validators.required],
	nickname: ['', Validators.required]
	});
	}

	ngOnInit() {
	}
	
	postdata(angForm1)
	{
		this.dataService.userlogin(angForm1.value.username, angForm1.value.password, angForm1.value.nickname)
		.pipe(first())
		.subscribe(
		data => {
		const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
		
		//alert(data[0].user_type);
		
		if (data[0].user_type == 'learner') {
			this.router.navigate([redirect]);
		} else {
			//const redirect1 = '/register';
			this.router.navigate(['gamescore']);
			//return;
		}
		
		//this.router.navigate(['create']);
		},
		
		error => {
		    alert("User name or password is incorrect")
		});
	}
	
	get username() { return this.angForm.get('username'); }
	get password() { return this.angForm.get('password'); }
	get nickname() { return this.angForm.get('nickname'); }
}