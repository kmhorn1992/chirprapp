import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Injectable, Input, Output } from '@angular/core';
import { NgForOf, NgIf, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IChirprs, } from './data';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import {  MatToolbarModule, MatCardModule, MatMenuModule, MatButtonModule  } from '@angular/material';
import {  MatFormFieldModule, MatInputModule, MatSelectModule, } from '@angular/material';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { ChirpformComponent } from './chirpform/chirpform.component';
import { Http, HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'list', component: PostsComponent },
  { path: 'singlepost', component: SinglepostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SinglepostComponent,
    LoginComponent,
    PostsComponent,
    ChirpformComponent


  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpModule


  ],
  providers: [DataService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
