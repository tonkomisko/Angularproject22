import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.css']
})
export class LogoutBtnComponent implements OnInit {

  loginName: string = '';
  loginPassword: string = '';
  isLoggedIn_child: boolean = false;

  constructor(private http:HttpClient, private ds: DataService ) { }

  ngOnInit(): void {
  }
  status:boolean = true;

  showHideHome(){
    this.status = !this.status;
  }

  
  getUsers(){
    debugger;
    const url = `http://localhost:3000/users?user=${this.loginName}&password=${this.loginPassword}`
    return this.http.get<any>(url);
      // .map(res =>res.json())

  }


  users: any;

  logoutUser(){
    // debugger;
    this.getUsers().subscribe((data: any) =>  {
      debugger;
    
        this.isLoggedIn_child = false
     
      
        this.ds.sendData(this.isLoggedIn_child);
      

  })
}
}