import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { InvalidPageComponent } from "./invalid-page/invalid-page.component";
import { NavbarComponent } from './navbar/navbar.component';
import { StudentaddComponent } from './studentadd/studentadd.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login-email', component: EmailComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'studentlist', component: StudentlistComponent},
  {path: 'studentdetails', component: StudentdetailsComponent},
  {path: 'shoppinglist', component: ShoppingListComponent},
  {path: 'schoolList', component: SchoolListComponent},

  {path: 'add-student', component: StudentaddComponent},
  {path: '**', component: InvalidPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    StudentlistComponent,
    InvalidPageComponent,
    NavbarComponent,
    StudentaddComponent,
    StudentdetailsComponent,
    SchoolListComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
