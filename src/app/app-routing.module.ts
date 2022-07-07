import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component'
import {AboutPageComponent} from './about-page/about-page.component'
import {ContactComponent} from './contact/contact.component'
import {RecordsComponent} from './records/records.component'
import { BlogComponent } from './blog/blog.component';
// import { AuthGuard } from './services/auth.guard';
// import { LogoutBtnComponent } from './logout-btn/logout-btn.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'aboutus', component: AboutPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'records', component: RecordsComponent },
  { path: 'blog', component: BlogComponent,  },
  { path: 'jozko', component: BlogComponent },
  { path: 'table', pathMatch: 'full', redirectTo: 'home' },
  // {path: 'logout', component: LogoutBtnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // providers: [AuthGuard]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, AboutPageComponent, ContactComponent, RecordsComponent, BlogComponent]