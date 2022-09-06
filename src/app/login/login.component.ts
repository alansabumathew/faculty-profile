import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../servicce/authentication/authentication.service';
import { SignInData } from '../model/signInData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private _http:HttpClient, private router:Router,private authenticationService: AuthenticationService) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
 // login Method Define
 logIn(){
this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
  const user = res.find((a:any)=>{
    return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
  })
if(user){
  alert("Login is successfull");
  this.loginForm.reset();
  this.router.navigate(['dashboard'])
}else{
  alert("User Not Found !!")
}
},err=>{
  alert("Error From Server")
}
)
}
}
 
