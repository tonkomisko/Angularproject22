// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { catchError, map, Observable, of } from 'rxjs';
// import { LoginBtnComponent } from '../login-btn/login-btn.component';
// import { DataService } from '../service/data.service';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private ds: DataService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     // return this.ds
//     //   .getData()
//     //   .subscribe(x => {
//     //     return observer.next(true);

//     //   })

      // .pipe(
      //   map((e) => {
      //     debugger;
      //     console.log('can activate', e);
      //     if (e) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   }),
      //   catchError((err) => {
      //     debugger;
      //     // this.router.navigate(['/login']);
      //     return of(false);
      //   })
      // );
//   }
// }
