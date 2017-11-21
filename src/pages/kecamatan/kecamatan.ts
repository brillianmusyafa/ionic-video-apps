import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

import { DetailKecamatanPage } from '../detail-kecamatan/detail-kecamatan';

import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the KecamatanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-kecamatan',
 	templateUrl: 'kecamatan.html',
 })
 export class KecamatanPage {
 	title: any;
 	id_data: any;
 	count: any;
 	countAll:number = 0;

 	data_kecamatan:any;

 	loading:any;

 	constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider, public loadingCtrl: LoadingController, public modalCtrl: ModalController) {
 		this.title = navParams.get('title');
 		this.id_data = navParams.get('id');
 		this.count = navParams.get('count');

 		this.getKecamatan(this.id_data);

 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad KecamatanPage');
 	}

 	getKecamatan(id){
 		let load = this.presentLoadingDefault();

 		this.dataProvider.getKecamatan(id).then(data=>{
 			
 			this.data_kecamatan = data;
 			// console.log(this.data_kecamatan);
 			this.data_kecamatan.data.forEach((total) =>{
 			this.countAll += parseInt(total.jumlah);
 			});

 			load.dismiss();
 		});
 	}

 	presentModal(item){
 		let modal = this.modalCtrl.create(DetailKecamatanPage,{item:item, id_data:this.id_data});
 		modal.present();
 	}

 	presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    return loading;
  }

  itemSelected(item){
  	this.presentModal(item);
  }

 }
