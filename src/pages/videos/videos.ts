import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-videos',
 	templateUrl: 'videos.html',
 })
 export class VideosPage {
 	video_title:string;
 	data_video:any;
 	constructor(public navCtrl: NavController, public navParams: NavParams,public youtube: YoutubeVideoPlayer) {

 		this.video_title = navParams.get('item').video_title;

 		this.data_video = navParams.get('item');
 		// console.log('play');
 		// this.youtube.openVideo('RsQRpHrlwGo');
 		// let options: StreamingVideoOptions = {
 		// 	successCallback: () => { console.log('Video played') },
 		// 	errorCallback: (e) => { console.log('Error streaming') },
 		// 	orientation: 'landscape'
 		// };

 		// this.streamingMedia.playVideo('https://www.youtube.com/watch?v=AyS3uw7HZOM', options);
 	}

 	playVideo(){
 		this.youtube.openVideo(this.data_video.video_id);
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad VideosPage');
 	}

 	play(){
 		console.log('playing disini');
 	}

 }
