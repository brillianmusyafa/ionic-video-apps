import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the VideoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VideoProvider {
	// app_id:string = "1";
	// url:string= "http://localhost:8000/api/1/video";
	url:string = "http://project.brilliansolution.com/kumpulan_video/public/api/1/video"
  constructor(public http: HttpClient) {
    console.log('Hello VideoProvider Provider');
  }

  getAllVideo(){
  	return new Promise(resolve => {
  		this.http.get(this.url).subscribe(data=>{
  			resolve(data);
  		},err=>{
  			console.log(err);
  		});
  	});
  }

}
