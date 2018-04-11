import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from '../global/global';

/*
  Generated class for the VideoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VideoProvider {
	// app_id:string = "1";
	// url:string= "http://localhost:8000/api/1/video";
	
  constructor(public http: HttpClient, public global: GlobalProvider) {
    console.log('Hello VideoProvider Provider');
  }

  getAllVideo(){
  	return new Promise(resolve => {
  		this.http.get(this.global.url).subscribe(data=>{
  			resolve(data);
  		},err=>{
  			console.log(err);
  		});
  	});
  }

}
