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

import { OneSignal } from '@ionic-native/onesignal';

import { GlobalProvider } from '../providers/global/global';
import { enableProdMode } from '@angular/core';
enableProdMode();

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  page: any;
  app_name: any;
  logo: string;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
    public market:Market,
    public socialSharing: SocialSharing,
    public appRate: AppRate,
    public global:GlobalProvider,
    public oneSignal: OneSignal
    ) {
    // app_name
    this.app_name = this.global.app_name;
    this.initializeApp();


  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString("#004ba0"); // change color  
      this.splashScreen.hide();

      // show logo
      this.logo = this.global.logo;

      this.global.showRewardAd();

      this.global.showBannerAd();

      // oneSignal
      this.oneSignal.startInit(this.global.one_signal_key, this.global.one_signal_sender);

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });

      this.oneSignal.endInit();
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
    this.market.search(this.global.market);
  }

  shareApp(){
    let message = "";
    let subject = "";
    let file = null;

    this.socialSharing.share(message,subject,file,this.global.share_url);
  }

  rateApp(){
    // set certain preferences
    this.appRate.preferences.storeAppURL = {
      // ios: '<app_id>',
      android: this.global.rate_app
      // windows: 'ms-windows-store://review/?ProductId=<store_id>'
    };
    this.appRate.promptForRating(true);
  }
}
