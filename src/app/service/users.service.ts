import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {usersData} from '../interface/users'


@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<[]> {
    return this.http.get<[]>(`http://localhost:3000/users`);
   
  }
}