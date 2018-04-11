import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AdMobFree, AdMobFreeRewardVideoConfig, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

/*
  Generated class for the IklanProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class GlobalProvider {

    // start edit for change aplication
    // api Video
    url:string = "http://project.brilliansolution.com/kumpulan_video/public/api/1/video";
    // logo
    logo:string = "http://project.brilliansolution.com/kumpulan_video/public/img/aplikasi_video/logo/kv-doraemon.png";
  	// admob
  	iklanBanner:string = "ca-app-pub-7921716616365431/3336111298";
  	iklanVideo:string = "ca-app-pub-7921716616365431/7798579416";
    iklanInter:string = "ca-app-pub-7921716616365431/2239486192";
    // app name
    public app_name:string = "KV Doraemon";
  	// market
  	public market:string = "com.brilliansolution";
  	// share
    public share_url:string = "https://play.google.com/store/apps/details?id=com.brilliansolution.kumpulanvideo";
    // rate
    public rate_app:string = "market://details?id=com.brilliansolution.kumpulanvideo";

    // one signal
    public one_signal_key: string = "d5e138f9-0314-48b4-aaeb-4e86befee907";
    public one_signal_sender: string = "70079884705";

    // end edit for change aplication


  	constructor(public http: HttpClient,
  		public admobFree: AdMobFree) {
  		console.log('Hello GlobalProvider Provider');
  	}


  	// video reward
  	async showRewardAd(){
  		try{
  			const rewardVideoConfig: AdMobFreeRewardVideoConfig = {
  				id: this.iklanVideo,
  				autoShow: true
  			};

  			this.admobFree.rewardVideo.config(rewardVideoConfig);
  			this.admobFree.rewardVideo.prepare().then(() => {
  				console.log('rewardVideo');
  				// success
  			});
  		}
  		catch(e){
  			console.error(e);
  		}
  	}


  	// banner
  	async showBannerAd(){
  		try{
  			const bannerConfig: AdMobFreeBannerConfig = {
  				id: this.iklanBanner,
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
  		catch(e){
  			console.error(e);
  		}
  	}

  	// interstitial
  	async showInterstitialAd(){
  		try{
  			const interstitialConfig: AdMobFreeInterstitialConfig = {
  				id: this.iklanInter,
  				autoShow: true
  			}

  			this.admobFree.interstitial.config(interstitialConfig);

  			await this.admobFree.interstitial.prepare();
  		}
  		catch(e){
  			console.error(e);
  		}
  	}

  }
