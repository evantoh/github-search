import { Component, OnInit } from '@angular/core';
import{ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:any[];
repos:any[];
username:string;

  constructor(private profileserve :ProfileService ) {

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

  ngOnInit() {
  }

}
