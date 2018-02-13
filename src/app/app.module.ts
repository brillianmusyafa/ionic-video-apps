import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VideosPageModule } from '../pages/videos/videos.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StreamingMedia } from '@ionic-native/streaming-media';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { VideoProvider } from '../providers/video/video';
import { AdMobFree } from '@ionic-native/admob-free';
import { Market } from '@ionic-native/market';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    VideosPageModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    Market,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StreamingMedia,
    YoutubeVideoPlayer,
    VideoProvider,
    AdMobFree

  ]
})
export class AppModule {}
