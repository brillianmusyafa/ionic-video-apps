import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KecamatanPage } from './kecamatan';

@NgModule({
  declarations: [
    KecamatanPage,
  ],
  imports: [
    IonicPageModule.forChild(KecamatanPage),
  ],
})
export class KecamatanPageModule {}
