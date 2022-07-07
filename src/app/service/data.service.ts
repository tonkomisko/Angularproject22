import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

 
@Injectable({
    providedIn: 'root'
  })
export class DataService {
    private subject = new Subject<any>();
 
    sendData(message: any) {
        localStorage.setItem("loggedin", JSON.stringify(message));
    debugger;    this.subject.next(message);
    }
 
    
 
    getData(): Observable<boolean> {
        debugger;
        return this.subject.asObservable();
    }
}