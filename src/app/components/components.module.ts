import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { EncabezadoComponent } from './encabezado/encabezado.component';

@NgModule({
  declarations: [EncabezadoComponent],
  exports:[EncabezadoComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
