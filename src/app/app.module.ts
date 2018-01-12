import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ProfileService} from './profile.service';
import{HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
      HttpModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
