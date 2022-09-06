// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup,Validators } from '@angular/forms';
// import { educationData } from '../faculty.model';
// import { ApiService } from '../shared/api.service';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.css']
})
export class EducationalDetailsComponent implements OnInit {

  edu!:FormGroup;
  // accountModelObj :educationData = new educationData;

  
  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.edu = this.formBuilder.group({
      names:['',Validators.required],
      spec:['',Validators.required],
      ins:['',Validators.required],
      year:['',Validators.required],
      uni:['',Validators.required],
      perc:['',Validators.required]
    })
  }
  postEdu(){
    // this.accountModelObj.names = this.edu.value.names;
    // this.accountModelObj.spec = this.edu.value.spec;
    // this.accountModelObj.ins = this.edu.value.ins;
    // this.accountModelObj.year = this.edu.value.year;
    // this.accountModelObj.uni = this.edu.value.uni;
    // this.accountModelObj.perc = this.edu.value.per;
  
    this._http.post<any>("http://localhost:3000/edu",this.edu.value).subscribe(res=>{
    alert("Registration successfull");
    this.edu.reset();
    this.router.navigate(['dashboard'])
  },err=>{
    alert("Unsuccessful")
  }
  )
}
}