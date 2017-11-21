import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { KecamatanPage } from '../kecamatan/kecamatan';

import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	data_home: any;
  loading:any;
  constructor(public navCtrl: NavController, public dataProvider: DataProvider, public loadingCtrl: LoadingController) {
    this.getDataHome();
  }

  getDataHome(){
    // set loading show
    // let loading = this.loadingCtrl.create({
    //   content: 'Please wait...'
    // });

    // loading.present();
    let load = this.presentLoadingDefault();


  	this.dataProvider.getDataHome().then(data=>{
      // set loading hide
      load.dismiss();
      // load data
  		this.data_home = data;
  	});
  }

  bukaHalaman(sub){
    this.navCtrl.push(KecamatanPage,sub);
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    return loading;
  }

}
