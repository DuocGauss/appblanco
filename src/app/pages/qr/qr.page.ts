import {Component, ViewChild, ViewEncapsulation, OnInit} from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import { AlertController, NavController } from '@ionic/angular';
import { Register } from 'src/app/interfaces/register';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QrPage implements OnInit {

  register:Register=
  {
    nombre:'',
    seccion:'',
    fecha:'',
  }
 
  code: any;

  constructor(private alertController:AlertController, private navCtrl:NavController, private storage:Storage, private barcodeScanner: BarcodeScanner) { 
  }
  @ViewChild(QrScannerComponent,
    {static:true}) qrScannerComponent: QrScannerComponent ;

  ngOnInit() {

    
}

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data', this.code);
     }).catch(err => {
         console.log('Error', err);
     });
  }

ngAfterViewInit():void {

}

async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Exito!',
      subHeader: 'QR escaneado correctamente',
      message: 'Se le redirigirá a la pagina de asistencia',
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

  async guardar(registr:Register )
  {
    await this.storage.set(registr.nombre,registr);
  } 
   
 
  

  onSubmit()
  {
    
  }

}

  


