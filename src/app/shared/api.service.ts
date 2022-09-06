import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  //Post get put and delete
  postFaculty(data: any) {
    return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res: any) => { 
      return res;
  }))
}
  //Get
  getFaculty(){
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }))
  }
  updateFaculty(data:any,id:any){
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteFaculty(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }))
}
 //define POST, GET, PUT, DELETE

 postaccount(data: any) {
  return this._http.post<any>("http://localhost:3000/signup", data).pipe(map((res: any) => {
    return res;
  }))
}

//get data using GET Method

getaccount() {
  return this._http.get<any>("http://localhost:3000/signup").pipe(map((res: any) => {
    return res;
  }))
}

//Update account
updateaccount(data: any, id: number):
Observable<any> {
  return this._http.put<any>("http://localhost:3000/signup/" + id, data).pipe(map((res: any) => {
    return res;
  }))
}

//Delete data
deleteaccount(id: number) {
  return this._http.delete<any>("http://localhost:3000/signup/" + id).pipe(map((res: any) => {
    return res;
  }))
}
postAssociation(data: any) {
  return this._http.post<any>("http://localhost:3000/association",data).pipe(map((res: any) => { 
    return res;
}))
}
postEdu(data:any){
  return this._http.get<any>("http://localhost:3000/edu").pipe(map((res:any)=>{
    return res;
  }))
}
}
