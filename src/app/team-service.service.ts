import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  constructor(private http : HttpClient) { }
  List()
{
 return this.http.get<any>("http://localhost:3000/posts")
 .pipe(map((res:any)=>{
   return res;
 }))
}
}
