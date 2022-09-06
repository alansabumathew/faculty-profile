import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser=new SignInData('alan@mail.com','12345');
  isAuthenticated=false;

  constructor(private router:Router) { }

  authenticate(signInData:SignInData):boolean{
    if(this.checkCredentials(signInData)){
      this.isAuthenticated=true;
      this.router.navigate(['dashboard']);
      return true;
    }
    this.isAuthenticated=false;
    return false;

  }
  private checkCredentials(signInData: SignInData):boolean{
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword())
  }
  private checkEmail(email: string): boolean{
    return email === this.mockedUser.getEmail()
  }
  private checkPassword(password:string): boolean{
    return password===this.mockedUser.getPassword();
  }
  logout(){
    this.isAuthenticated=false;
    this.router.navigate([''])
  }
}
