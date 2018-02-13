import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';

import { VideosPage } from '../videos/videos';


import { VideoProvider } from '../../providers/video/video';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	data_home: any;
  loading:any;

  constructor(public navCtrl: NavController, 
    public loadingCtrl: LoadingController, 
    public videoProv: VideoProvider, 
    public admobFree: AdMobFree, 
    public youtube: YoutubeVideoPlayer) {
    this.getDataHome();


    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id: "ca-app-pub-7921716616365431/3662793553",
      // isTesting: true,
      autoShow: true
    };

    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
    .then(() => {
      // banner Ad is ready
      // if we set autoShow to false, then we will need to call the show method here
    })
    .catch(e => console.log(e));
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
      console.log(item);
      this.navCtrl.push(VideosPage,{item});
    }

    playVideo(item){
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
