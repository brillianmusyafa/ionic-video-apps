import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';

import { VideosPage } from '../videos/videos';


import { VideoProvider } from '../../providers/video/video';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { GlobalProvider } from '../../providers/global/global';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  global_var: number = 0;
	data_home: any;
  loading:any;

  constructor(public navCtrl: NavController, 
    public global:GlobalProvider,
    public loadingCtrl: LoadingController, 
    public videoProv: VideoProvider,
    public youtube: YoutubeVideoPlayer) {
    this.getDataHome();
  }

  ionViewDidLeave(){
    this.global.showRewardAd();
  }

  getDataHome(){
      let load = this.presentLoadingDefault();


      this.videoProv.getAllVideo().then(data=>{
        // set loading hide
        load.dismiss();
        // load data
        this.data_home = data;
      });
    }

    openDetail(item){
      // console.log(item);
      this.navCtrl.push(VideosPage,{item});
    }

    playVideo(item){
      // this.global.showInterstitialAd();
      // this.global.showBannerAd();
      // this.global_var +=1;

      // console.log(this.global_var);
      this.youtube.openVideo(item.video_id);
    }

    presentLoadingDefault() {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading.present();

      return loading;
    }

  }
