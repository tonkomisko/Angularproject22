import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

 
@Injectable({
    providedIn: 'root'
  })
export class DataService {
    // private subject = new Subject<any>();
    private subject = new BehaviorSubject<any>(false);
 
    sendData(message: any) {
        // localStorage.setItem("loggedin", JSON.stringify(message));
        debugger;    
        this.subject.next(message);
    }
 
    
 
    getData(): Observable<any> {
        debugger;
        return this.subject.asObservable();
    }
}