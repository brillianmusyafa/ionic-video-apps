import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class DataProvider {

  	// url:string = "http://simas.brilliansolution.com/mobile/";
    // url:string = "http://localhost:8000/mobile/";
    url:string = "http://simas.tegalkab.go.id/mobile/";
    constructor(public http: HttpClient) {
      console.log('Hello DataProvider Provider');
    }

    getDataHome() {
      return new Promise(resolve => {
        this.http.get(this.url+'home').subscribe(data=>{
          resolve(data);
        },err =>{
          console.log(err);
        })
      });

      // return this.http.get(this.url+'home')
      // .map((res : Response ) => res.json());
    }

    getKecamatan(param){
      return new Promise(resolve => {
        this.http.get(this.url+'data/'+param).subscribe(data=>{
          resolve(data);
        },err =>{
          console.log(err);
        });
      });
    }

    getKecamatanDetail(param,kec_id){
      return new Promise(resolve => {
        this.http.get(this.url+'data/'+param+'/'+kec_id).subscribe(data=>{
          resolve(data);
        },err =>{
          console.log(err);
        });
      });
    }

  }
