import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { FavoritesPage } from '../pages/favorites/favorites';
import { Market } from '@ionic-native/market';
import { SocialSharing } from '@ionic-native/social-sharing';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  page: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
    public market:Market,
    public socialSharing: SocialSharing) {
    this.initializeApp();


}
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
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
    this.market.open('com.brilliansolution');
  }

  shareApp(){
    let message = "";
    let subject = "";
    let file = null;
    let url = "https://play.google.com/store/apps/details?id=com.brilliansolution.kumpulanvideo";

    this.socialSharing.share(message,subject,file,url);
  }
}
