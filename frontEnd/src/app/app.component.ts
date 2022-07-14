import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './service/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  
  isLoggedIn_parent: boolean = false;

  constructor(private ds: DataService, private router: Router){
    this.ds.getData().subscribe(x => { 
      debugger;
      console.log('app ',x);
      this.isLoggedIn_parent = x; 
      
      if (this.isLoggedIn_parent)
      {
        router.navigate(['/aboutus']);
      } else {
        router.navigate(['/home'])
      }
      
    });
  }
}


