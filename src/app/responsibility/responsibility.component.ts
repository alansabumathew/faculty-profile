import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responsibility',
  templateUrl: './responsibility.component.html',
  styleUrls: ['./responsibility.component.css']
})
export class ResponsibilityComponent implements OnInit {

  res!:FormGroup;
  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.res = this.formBuilder.group({
      resp:['',Validators.required],
      top:['',Validators.required],
      date1:['',Validators.required],
      date2:['',Validators.required],
      rem:['',Validators.required],
      proof:['',Validators.required]  
    })
  }
  postRes(){
   
    this._http.post<any>("http://localhost:3000/responsibility",this.res.value).subscribe(res=>{
    alert("Submitted Successfully");
    this.res.reset();
    this.router.navigate(['dashboard'])
  },err=>{
    alert("Unsuccessful")
  }
  )
}
}
