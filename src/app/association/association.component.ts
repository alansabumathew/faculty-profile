// import { HttpClient } from '@angular/common/http';
// import { Component, NgModule, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from '../app-routing.module';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})




export class AssociationComponent implements OnInit {
association!: FormGroup;
  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.association = this.formBuilder.group({
      name:['',Validators.required],
      no:['',Validators.required],
      date:['',Validators.required],
      role:['',Validators.required],
      type:['',Validators.required],
      proof:['',Validators.required],
    })
  }
  
  postAssociation(){
    this._http.post<any>("http://localhost:3000/association",this.association.value).subscribe(res=>{
      alert("Form submitted succesfully!!!");
      this.association.reset();
      this.router.navigate(['dashboard'])
    },()=>{
      alert("Unsuccessful!!!")
    }
    )
  }
}


