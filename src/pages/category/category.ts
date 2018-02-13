import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VideosPage } from '../videos/videos';


/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	name: 'category-page'
})
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
	items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.items = [
  		'Naruto',
  		'Boruto',
  		'Doraemon',
  		'Upin Ipin'
  	];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }


  openPage(item){
  	console.log(item);
  	this.navCtrl.push(VideosPage);
  }
}
