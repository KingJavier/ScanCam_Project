import { Component, OnInit } from '@angular/core';
//importación de menu controller
import { MenuController } from '@ionic/angular';
//importación de los servicios de la api
import { TaskService } from 'src/app/services/task.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-menuapre',
  templateUrl: './menuapre.component.html',
  styleUrls: ['./menuapre.component.scss'],
})
export class MenuapreComponent implements OnInit {
  //llamdo de los datos url y name como dato tipo string
  url: string;

  nombre: string;
  //se asigna como role tipo texto
  role: string;

  //se inyecta el menucontroller
  constructor(private menu: MenuController,
    private usuarioServicio: TaskService,
    private socket: Socket) {
    //llamdo del nombre del localstorage
    this.nombre = null;
    this.url = null;
    this.nombre=localStorage.getItem('name');
  }

  //funcionalidad del boton amburguesa
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  //llamado del role desde el localstorage para asignar a cada rol su boton amburguesa
  ngOnInit() {
    // this.socket.connect();
    this.inicio();
  }

  inicio(){
    this.socket.on('server:newlogin', (callback) => {
      this.role=callback.role[0];
      this.nombre= callback.nombre;
    });

    this.socket.on('server:url-img', async dat=>{
      // console.log('esto es la url', dat);
      this.url = dat;

      // console.log(this.url);
    });

    if(localStorage.getItem('role')){
      const role=localStorage.getItem('role');
      // console.log(role);
      this.role=role;
      const img=localStorage.getItem('idImgPerfil');
      // console.log(img);
      if(img){
        this.traerfotol();
      }
    }
  }

  traerfotol(){
    //función de tarer la foto de los servicios de la api
    const token = localStorage.getItem('token');
    const idImgPerfil = localStorage.getItem('idImgPerfil');
    // console.log(idImgPerfil);

    this.usuarioServicio.traerfotoperfil(token, idImgPerfil).subscribe((res: any)=>{
      //console.log(res.data.url);
      this.url = res.data.url;
    });
  }

}
