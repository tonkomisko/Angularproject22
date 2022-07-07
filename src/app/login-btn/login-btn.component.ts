import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../service/data.service'

@Component({
  selector: 'app-login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.css']
})
export class LoginBtnComponent implements OnInit, OnChanges {
  @Input() itemLoginName = '';
  @Input() itemLoginPassword = '';
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

  ngOnChanges(): void {
    
    // this.loginName = this.itemLoginName;
    // this.loginPassword = this.itemLoginPassword;
  }

  getUsers(){
    debugger;
    const url = `http://localhost:3000/users?user=${this.itemLoginName}&password=${this.itemLoginPassword}`
    return this.http.get<any>(url);
      // .map(res =>res.json())

  }


  users: any;

  loginUser(){
    // debugger;
    this.getUsers().subscribe((data: any) =>  {
      debugger;
      this.users = data;
      console.log(data);
      console.log("users" + this.users);
      if (data.length > 0){
        this.isLoggedIn_child = true
      }else {
        this.isLoggedIn_child = false
      }
      // this.newItemEvent.emit(this.isLoggedIn_child);
      // this.isLoggedIn_child = false;
      
      this.ds.sendData(this.isLoggedIn_child);
      return this.isLoggedIn_child

  })
}
}