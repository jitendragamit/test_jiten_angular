import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  msg:string;
  index:number;
  score:number;
  //loginuser:string;
  
  //constructor() { }
  constructor(private dataService: ApiService,private router:Router) { }

  ngOnInit() {
  }
  
   imagesx = ['../assets/download.jpg', '../assets/download2.jpg', '../assets/image3.jpg'];	
   
   clickEvent() {
	   
	        let user_id = localStorage.getItem('user_id'); 
			
	     	this.dataService.addScore(user_id)
			.pipe(first())
			.subscribe(
			data => {
			   // alert(data[0].score);
			   if (data[0].score >= 3) {
			      this.router.navigate(['thankyou']);
			  }
			},

			error => {
			});
		return this.index = Math.floor(Math.random() * this.imagesx.length);
   }
   
}


