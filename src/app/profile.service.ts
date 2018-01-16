import { Injectable } from '@angular/core';
import{Http,Headers} from'@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {


private username:string;
// private clientid:"Iv1.8438a733dbb29966";
private apikey:string ="1b7369cc13d46c9e10c744f9b8556ca9ad44df69";
  constructor(private http:Http) {
console.log("service is ready");
this.username='evantoh';
  }
  getprofileInfo(){
    return this.http.get("https://api.github.com/users/"+ this.username +"?access_token=" +this.apikey)
     .map(res=>res.json());
  }
  getprofileRepos(){
      return this.http.get("https://api.github.com/users/"+ this.username + "/repos" +"?access_token=" +this.apikey)
       .map(res=>res.json());
    }
  // getprofileRepos(){
  //   return this.http.get("https://api.github.com/users/"
  //    + this.username + "/repos?client_id="+ this.clientid +"&client_secret=" +this.clientsecret )
  //    .map(res=>res.json());
  // }
  updateprofile(username:string){
    this.username=username;
  }

}
