import { Component } from '@angular/core';
import { Opcionmenu } from './interfaces/opcionmenu';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones:Opcionmenu[]=[
    
  {
    destino:'home',
    icono:'home',
    texto:'Inicio'

  },
  {
    destino:'login',
    icono:'power',
    texto:'Volver'

  },
  
  

]
  constructor() {}
}
