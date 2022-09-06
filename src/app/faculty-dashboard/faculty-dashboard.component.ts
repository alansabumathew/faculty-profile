import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FacultyData  } from '../faculty.model';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {
  formValue!: FormGroup
  facultyModelObj: FacultyData = new FacultyData;
  allFacultyData:any
  apiservice:any;
  showAdd!: boolean;
  showUpd!: boolean;
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      degree: [''],
      board: [''],
      year: [''],
      result: [''],
      spec: ['']
    })
    this.getAllData();
  }

  clickAddFacu(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpd=false;
  }

   addFacu(){
    this.facultyModelObj.degree=this.formValue.value.degree;
    this.facultyModelObj.board=this.formValue.value.board;
    this.facultyModelObj.year=this.formValue.value.year;
    this.facultyModelObj.result=this.formValue.value.result;
    this.facultyModelObj.spec=this.formValue.value.spec;
  
    this.api.postFaculty(this.facultyModelObj).subscribe(res=>
      {
        console.log(res);
        alert("Added Successfully😁");
        let ref=document.getElementById('clear');
        ref?.click();
       

        this.formValue.reset();
        this.getAllData();
      },
      err=>{
        alert("Fail!!!")
      }
      )
  }

  getAllData(){
    this.api.getFaculty().subscribe(res=>{
      this.allFacultyData=res;
    })
  }

  deleteFacu(data:any){
    this.api.deleteFaculty(data.id).subscribe(res=>{
      alert("Record Deleted!!");
      this.getAllData();
    })
  }

  onEditFacu(data:any){
    this.showAdd=false;
    this.showUpd=true;
    this.facultyModelObj.id = data.id
    this.formValue.controls['degree'].setValue(data.degree);
    this.formValue.controls['board'].setValue(data.board);
    this.formValue.controls['year'].setValue(data.year);
    this.formValue.controls['result'].setValue(data.result);
    this.formValue.controls['spec'].setValue(data.spec);
  }

  updateFacu(){

    this.facultyModelObj.degree=this.formValue.value.degree;
    this.facultyModelObj.board=this.formValue.value.board;
    this.facultyModelObj.year=this.formValue.value.year;
    this.facultyModelObj.result=this.formValue.value.result;
    this.facultyModelObj.spec=this.formValue.value.spec;
  
    this.api.updateFaculty(this.facultyModelObj, this.facultyModelObj.id).subscribe(res=>{
      alert("Record Updated!");
      let ref=document.getElementById('clear');
        ref?.click();
       

        this.formValue.reset();
        this.getAllData();
    })
  }
}
