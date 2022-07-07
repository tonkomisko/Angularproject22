import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { RecordsComponent } from './records/records.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LogoutBtnComponent } from './logout-btn/logout-btn.component';
import { LoginBtnComponent } from './login-btn/login-btn.component';
// import { Comment} from './blog/blog.component';
// import { RecordsTable } from './records/records.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    RecordsComponent,
    // RecordsTable,
    ContactComponent,
    BlogComponent,
    LogoutBtnComponent,
    LoginBtnComponent
    // Comment

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
