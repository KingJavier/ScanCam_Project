import { Component, OnInit } from '@angular/core';
//importación de las rutas
import { Router } from '@angular/router';
//importación de los servicios de la api
import { TaskService } from 'src/app/services/task.service';
import { Socket } from 'ngx-socket-io';
//importacion de toaskcontroller
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  //llamdo de los datos url y name como dato tipo string
  url: string;
  nombre: string;
  usuarios: any;

  constructor(
    //inyecta la importación de las rutas
    private router: Router,
    //inyecta la importación de los servicios de la api
    private usuarioservicio: TaskService,
    private socket: Socket,
    //inyecta la importación de tosatcontroller
    public toastController: ToastController,
  ) {
    //llamdo del nombre del localstorage
    this.nombre=localStorage.getItem('name');
  }

  async errorl(mensaje, duracion) {
    //función que hace el llamado de una alerta sobre un error
    const toast = await this.toastController.create({
      message: mensaje,
      color: 'danger',
      duration: duracion,
    });
    toast.present();
  }

  async chec(mensaje, duracion) {
    //función que hace el llamado de una alerta sobre un error
    const toast = await this.toastController.create({
      message: mensaje,
      color: 'success',
      duration: duracion,
    });
    toast.present();
  }

  ngOnInit() {
    //llamado de la foto
    // this.traerfotol();
    //llamdo del token del localstorage
    const token=localStorage.getItem('token');
    this.usuarioservicio.listadogest(token).subscribe((res: any)=>{//console.log(res);
      this.usuarios=res.users;
    });

    this.socket.on('server:newuser', callback => {
      this.usuarios.push(callback);
      // console.log('callback', callback);
      // console.log('this.usuarios', this.usuarios);
    });

    this.socket.on('server:newuserseguridad', callback => {
      this.usuarios.push(callback);
      // console.log('callback', callback);
      // console.log('this.usuarios', this.usuarios);
    });

  }

  cambiarrole(value, id){
    //función que trae el servicio de cambiar el rol
    //console.log(value);
    //console.log(id);
    const role={
      role: value
    };
    const token=localStorage.getItem('token');
    this.usuarioservicio.actualizarrole(token, id, role).subscribe((res: any)=>{//console.log(res);

      const correcto = res.data;

      if(correcto === res.data){
        this.chec('CAMBIO EXITOSO', 2000);
      }
    },error => {
      console.log(error);

      const err = error.error.msg;

      if(err === 'ERROR_SUBIR_ARCHIVO'){
        this.errorl('ERROR ACTULIZANDO USUARIO', 4000);
      }
    });
    // this.socket.emit('cliente:cambiar-role', id);
  }

  activar(id){

    //función qye trae el servicio de activar un usuario
    //console.log(id);
    const token=localStorage.getItem('token');
    this.usuarioservicio.activar(token, id).subscribe((res: any)=>{
      console.log(res);

      this.socket.emit('cliente:cambiaractividad', id);
      this.socket.on('server:cambiaracti',async dato =>{
        this.usuarios = dato;
      });
    });


  }

  deshabilitar(id){
    //función qye trae el servicio de desactivar un usuario
    //console.log(id);}
    const token=localStorage.getItem('token');
    this.usuarioservicio.inhabilitar(token, id).subscribe((res: any)=>{
      this.socket.emit('cliente:cambiaractividad', id);
      this.socket.on('server:cambiaracti',async dato =>{
        this.usuarios = dato;
      });//console.log(res);
    });
  }

  salir(){
    //función de cerrar seción
    localStorage.clear();
    this.router.navigate(['login']);
  }

  traerfotol(){
    //función de tarer la foto de los servicios de la api
    const token = localStorage.getItem('token');
    const idImgPerfil = localStorage.getItem('idImgPerfil');

    // console.log('Token -->',token);
    // console.log('imgPer -->',idImgPerfil);

    this.usuarioservicio.traerfotoperfil(token, idImgPerfil).subscribe((res: any)=>{
      //console.log(res.data.url);
      this.url = res.data.url;
    });
  }

}
