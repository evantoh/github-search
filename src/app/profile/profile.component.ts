import { Component, OnInit } from '@angular/core';
import{ProfileService} from '../profile.service';
import {FormsModule} from '@angular/forms';

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


  ngOnInit() {
  }

}
