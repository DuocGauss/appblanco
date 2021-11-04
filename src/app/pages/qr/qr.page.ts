import {Component, ViewChild, ViewEncapsulation, OnInit} from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import { AlertController, NavController } from '@ionic/angular';

import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QrPage implements OnInit {

  

  constructor(private alertController:AlertController, private navCtrl:NavController, private storage:Storage) { 
  }
  @ViewChild(QrScannerComponent,
    {static:true}) qrScannerComponent: QrScannerComponent ;

  ngOnInit() {

    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
          if (device.kind.toString() === 'videoinput') {
              videoDevices.push(device);
          }
      }
      if (videoDevices.length > 0){
          let choosenDev;
          for (const dev of videoDevices){
              if (dev.label.includes('front')){
                  choosenDev = dev;
                  break;
              }
              
          }
          if (choosenDev) {
              this.qrScannerComponent.chooseCamera.next(choosenDev);  
              
          } else {
              this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
              
          }
      }
  });

  this.qrScannerComponent.capturedQr.subscribe(result => {
      console.log(result);
      this.presentAlert();
  });
}
ngAfterViewInit():void {

}

async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Exito!',
      subHeader: 'QR escaneado correctamente',
      message: 'Se le redigira a la pagina de asistencia',
      buttons: [
        {
          text: 'Vale',
          role: 'cancel',
          handler: (data) => {
            this.navCtrl.navigateRoot('/asistencia');
          }
        }
      ]
    });

    await alert.present();
  }


   

  onSubmit()
  {
    
  }

}

  


