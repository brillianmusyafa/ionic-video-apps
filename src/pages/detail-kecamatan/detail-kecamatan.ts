import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the DetailKecamatanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-kecamatan',
  templateUrl: 'detail-kecamatan.html',
})
export class DetailKecamatanPage {
	kec_name:string;
	kec_id:string;
	id_data:string;
	data_desa:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProv:DataProvider) {
  	this.kec_name = navParams.get('item').kecamatan.kec_name;
  	this.kec_id = navParams.get('item').kecamatan.id;
  	this.id_data = navParams.get('id_data');
  	console.log(this.kec_id);

  	this.getKecamatanDetail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailKecamatanPage');
  }

  closeModal(){
  	this.navCtrl.pop();
  }

  getKecamatanDetail(){
  	this.dataProv.getKecamatanDetail(this.id_data,this.kec_id).then(data=>{
  		this.data_desa = data;
  		console.log(this.data_desa);
  	});
  }
}
