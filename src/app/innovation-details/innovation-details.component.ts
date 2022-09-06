import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-innovation-details',
  templateUrl: './innovation-details.component.html',
  styleUrls: ['./innovation-details.component.css']
})
export class InnovationDetailsComponent implements OnInit {

  inn!:FormGroup;
  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.inn = this.formBuilder.group({
      name:['',Validators.required],
      pro:['',Validators.required],
      ideas:['',Validators.required],
      bud:['',Validators.required],
      year1:['',Validators.required],
      year2:['',Validators.required],
      team:['',Validators.required]
    })
  }
  postInn(){
   
    this._http.post<any>("http://localhost:3000/innovation",this.inn.value).subscribe(res=>{
    alert("Submitted Successfully");
    this.inn.reset();
    this.router.navigate(['dashboard'])
  },err=>{
    alert("Unsuccessful")
  }
  )
}
}
