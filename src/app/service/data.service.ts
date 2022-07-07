import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

 
@Injectable({
    providedIn: 'root'
  })
export class DataService {
    private subject = new Subject<any>();
 
    sendData(message: any) {
    debugger;    this.subject.next(message);
    }
 
    
 
    getData(): Observable<any> {
        debugger;
        return this.subject.asObservable();
    }
}