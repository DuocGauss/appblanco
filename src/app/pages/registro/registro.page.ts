import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario:Usuario=
  {
    username:'',
    password:'',
    estado:0
  }
  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log(this.usuario);
    this.guardar(this.usuario)
  }

  async guardar(user:Usuario)
  {
    await this.storage.set(user.username,user);
  }

}

