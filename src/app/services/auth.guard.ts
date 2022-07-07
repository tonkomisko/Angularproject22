import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, filter, first, map, mergeMap } from 'rxjs/operators';
import { LoginBtnComponent } from '../login-btn/login-btn.component';
import { DataService } from '../service/data.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private ds: DataService, private router: Router) {}

  canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
      debugger;
      const isL = localStorage.getItem("loggedin");
      
      if (isL === 'true') {
        return true;
      } 
      return false;
      

    
    // this.ds.getData().pipe(
    //   first(),
    //   map(res => {
    //     debugger;
    //     console.log('can activate', res);
    //     if (res) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }),
      // catchError((err) => {
      //       debugger;
      //       // this.router.navigate(['/login']);
      //       return of(false);
      //     })
    // );
  }
}
