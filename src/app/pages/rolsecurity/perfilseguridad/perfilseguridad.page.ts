import { Component, OnInit } from '@angular/core';
//importación de las rutas
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
//importación de los servicios de la api
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-perfilseguridad',
  templateUrl: './perfilseguridad.page.html',
  styleUrls: ['./perfilseguridad.page.scss'],
})
export class PerfilseguridadPage implements OnInit {
  //llamado de los datos en tipo string
  url: string;
  apellido: string;
  nombre: string;
  role: string;
  correo: string;
  telefono: any;
  documento: any;

  constructor(
    //? Implementacion sockets
  private socket: Socket,
  private router: Router, private usuarioServicio: TaskService) {
    //datos traidos del localstorage
    this.nombre=localStorage.getItem('name');
    this.apellido=localStorage.getItem('apellido');
    this.role=localStorage.getItem('role');
    this.correo=localStorage.getItem('email');
    this.telefono=localStorage.getItem('telefono');
    this.documento=localStorage.getItem('documento');
  }

  ngOnInit() {
    //lamado de la foto
    this.traerfotol();
  }

  salir(){
    //función de cerrado de seción
    localStorage.clear();
    this.router.navigate(['login']);
  }

  traerfotol(){
    //función traer foto de los servicios de pai
    const token = localStorage.getItem('token');
    const idImgPerfil = localStorage.getItem('idImgPerfil');

    //console.log('Token -->',token);
    //console.log('imgPer -->',idImgPerfil);

    this.usuarioServicio.traerfotoperfil(token, idImgPerfil).subscribe((res: any)=>{
      //console.log(res.data.url);
      this.url = res.data.url;
    });
    this.socket.on('server:url-img', async dat=>{
      // console.log('esto es la url', dat);
      this.url = dat;
      // console.log(this.url);

    });
  }
}
