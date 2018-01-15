import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ProfileService} from './profile.service';
import{HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileFormComponent,

  ],
  imports: [
    BrowserModule,
      HttpModule,
      FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
