import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Observer, of } from 'rxjs';
import { catchError, filter, first, map, mergeMap, tap } from 'rxjs/operators';
import { LoginBtnComponent } from '../login-btn/login-btn.component';
import { DataService } from '../service/data.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private ds: DataService, private router: Router) { }

  canActivate(
    //     route: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
    debugger;
    // works
    // const isL = localStorage.getItem("loggedin");
    // if (isL === 'true') {
    //   return true;
    // } 
    // return false;


    // works
    return this.ds.getData()
      .pipe(
        map(res => {
          debugger;
          console.log('can activate', res);
          if (res) {
            return true;
          } else {
            return false;
          }
        }),
        catchError((err) => {
          debugger;
          // this.router.navigate(['/login']);
          return of(false);
        })
      );



    //  // works
    //   return new Observable((observer: Observer<any>) => {
    //     debugger;
    //     this.ds.getData().subscribe(x => { 
    //       debugger;
    //       console.log('observer x', x);
    //       if (x) {
    //         return observer.next(true);
    //       }
    //       return observer.next(false);
    //     })
    //   })



  }
}
