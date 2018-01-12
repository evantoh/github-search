import { Injectable } from '@angular/core';
import{Http,Headers} from'@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProfileService {

private username:string;
private clientid:"Iv1.8438a733dbb29966";
private clientsecret:" 21b7ed833c042c602356c13e7d573e26c060235b";
  constructor(private http:Http) {
console.log("service is ready");
this.username='evantoh';
  }
  getprofileInfo(){
    return this.http.get("https://api.github.com/users/"
     + this.username + "?client_id="+ this.clientid +"&client_secret=" +this.clientsecret )
     .map(res=>res.json());
  }

}
