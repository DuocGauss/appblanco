import {  MenuController } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario={
    username:'',
    password:''
  }

  constructor(private router:Router, private alertController:AlertController, public menuCtrl: MenuController) { }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log(this.usuario);
    if (this.usuario.username==="Gustavo" && this.usuario.password==="12345")
    {
      let navextras:NavigationExtras={
        state:{miusuario:this.usuario}
      }
      this.router.navigate(['/home'], navextras);
    }
    else{
      console.log("todo malo")
      this.presentAlert();
    } 

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'personalizada',
      header: 'Error al ingresar',
      subHeader: 'Datos no validos',
      message: 'Reingrese usuario y/o contraseña',
      buttons: ['OK']
    });

    await alert.present();
  }

  

   ionViewDidEnter(): void {
    this.menuCtrl.enable(false);
   }

   ionViewDidLeave(): void {
    // enable the root left menu when leaving the tutorial page
    this.menuCtrl.enable(true);
  }
}
