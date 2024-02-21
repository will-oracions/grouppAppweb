import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationsService } from 'src/app/demo/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
  styleUrls: ['./app.login.component.scss']
})
export class AppLoginComponent {
  userInfo!:any;
  submitted: boolean = false;
  subscribError: string;

  constructor(private router: Router,    private fb: FormBuilder, private authentification: AuthentificationsService
    ) {
  }
 ngOnInit(): void {

  this.userInfo= this.fb.group({
    username: ["", Validators.required],
    password: ["",[ Validators.required,Validators.minLength(6)]]
  })
 }

 get username(){return this.userInfo.get('username'); }
 get password(){return this.userInfo.get('password'); }
 
 login(){
  if(this.userInfo.invalid){
    this.userInfo.markAllAsTouched();
  }else{
    this.submitted = true;
    this.authentification.login(this.userInfo.value).subscribe((result)=>{
    },
    (error)=>{
     this.submitted = false;
     this.subscribError = error;
    }
    )
  }
}
}
