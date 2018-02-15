import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { FavoritesPage } from '../pages/favorites/favorites';
import { Market } from '@ionic-native/market';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AppRate } from '@ionic-native/app-rate';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  page: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
    public market:Market,
    public socialSharing: SocialSharing,
    public appRate: AppRate) {
    this.initializeApp();


  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString("#004ba0"); // change color  
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    switch (page) {
      case "favorites":
      this.page = FavoritesPage;
      break;
      case "about":
      this.page = AboutPage;
      break;
      
      default:
      this.page = HomePage;
      break;
    }
    this.nav.setRoot(this.page);
  }

  openMarket(){
    this.market.search('com.brilliansolution');
  }

  shareApp(){
    let message = "";
    let subject = "";
    let file = null;
    let url = "https://play.google.com/store/apps/details?id=com.brilliansolution.kumpulanvideo";

    this.socialSharing.share(message,subject,file,url);
  }

  rateApp(){
    // set certain preferences
    this.appRate.preferences.storeAppURL = {
      // ios: '<app_id>',
      android: 'market://details?id=com.brilliansolution.kumpulanvideo'
      // windows: 'ms-windows-store://review/?ProductId=<store_id>'
    };
    console.log('rate');
    

    // or, override the whole preferences object
    // this.appRate.preferences = {
    //   usesUntilPrompt: 5,
    //   storeAppURL: {
    //     // ios: '<app_id>',
    //     android: 'market://details?id=com.brilliansolution.kumpulanvideo'
    //     // windows: 'ms-windows-store://review/?ProductId=<store_id>'
    //   }
    // };

    // this.appRate.promptForRating(false);
    this.appRate.promptForRating(true);
  }
}
