import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import{ProfileService} from '../profile.service';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
profile:any= []
repos:any= []
username:string
  constructor(private profileserve :ProfileService) { }


  ngOnInit() {
    this.profileserve.updateprofile(this.username);
    this.profileserve.getprofileInfo().subscribe(profile=>{
      console.log(profile);
      this.profile=profile;
  })
    this.profileserve.getprofileRepos().subscribe(repos=>{
      console.log(repos);
      this.repos=repos;
    })

  }

  findprofile(){
    this.profileserve.updateprofile(this.username);
    this.profileserve.getprofileInfo().subscribe(profile=>{
      console.log(profile);
      this.profile=profile;
  })
    this.profileserve.getprofileRepos().subscribe(repos=>{
      console.log(repos);
      this.repos=repos;
    })

  }

}
