import { Component, OnInit } from '@angular/core';
import{ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:any[];

  constructor(private profileserve :ProfileService ) {
  this.profileserve.getprofileInfo().subscribe(profile=>{
    console.log(profile);
    this.profile=profile;
  }
  ) }

  ngOnInit() {
  }

}
