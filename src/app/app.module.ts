import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NvD3Module } from 'ng2-nvd3';
import { User1Component } from './user1/user1.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    User1Component,
  ],
  imports: [
    BrowserModule,
    NvD3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
