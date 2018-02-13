import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { CategoryPage } from '../pages/category/category';
import { VideosPage} from '../pages/videos/videos';
import { FavoritesPage } from '../pages/favorites/favorites';
import { PlayVideoPage } from '../pages/play-video/play-video';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { VideoProvider } from '../providers/video/video';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    CategoryPage,
    VideosPage,
    FavoritesPage,
    PlayVideoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    CategoryPage,
    VideosPage,
    FavoritesPage,
    PlayVideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StreamingMedia,
    YoutubeVideoPlayer,
    VideoProvider,
    AdMobFree

  ]
})
export class AppModule {}
