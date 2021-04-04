import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Users } from '../users';
 
@Component({
  selector: 'app-gamescore',
  templateUrl: './gamescore.component.html',
  styleUrls: ['./gamescore.component.css']
})

export class GamescoreComponent implements OnInit {
  users: Users[];
  cat:number;
 
	constructor(private dataService: ApiService,private router:Router) { }
 
	ngOnInit() {
		this.getuserdetails();
	}
	
	getuserdetails()
	{
	  this.dataService.getAllUsers(this.cat).subscribe(response =>
		{
		  this.users = response.map(item =>
		  {
			return new Users(
			  item.Id,
			  item.nickname,
			  item.username,
			  item.user_type,
			  item.pwd,
			);
		  });
		});
	}

}