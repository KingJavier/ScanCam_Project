import { Component, OnInit } from '@angular/core';
//importación de las rutas
import { Router } from '@angular/router';
//importación de los servicios de la api
import { TaskService } from 'src/app/services/task.service';
//importacion de toaskcontroller
import { ToastController } from '@ionic/angular';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { HttpClient } from '@angular/common/http';

import { UserPhoto } from './../../../interfaces/task';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-camaraescaner',
  templateUrl: './camaraescaner.page.html',
  styleUrls: ['./camaraescaner.page.scss'],
})
export class CamaraescanerPage implements OnInit {

  // The video stream
  streamRef: any;
  cameraStream: any;
  identificadorTiempoDeEspera: any;

  //llamdo de los datos url y name como dato tipo string
  url: string;

  nombre: string;

  name: any;
  apellido: any;
  role: string;
  email: string;
  telefono: any;
  documento: any;
  coincidencia: any;
  tipo: any;

  constructor(
    private router: Router,
    private foto: TaskService,
    //inyecta la importación de tosatcontroller
    public toastController: ToastController,
    //se llama a socket.io
    private socket: Socket,
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

  async warning(mensaje, duracion) {
    //función que hace el llamado de una alerta sobre un error
    const toast = await this.toastController.create({
      message: mensaje,
      color: 'warning',
      duration: duracion,
    });
    toast.present();
  }

  ngOnInit(): void {
    this.streamRef = document.getElementById('stream');
  }

  capturar() {
    if( null != this.cameraStream ) {
      const capture = document.getElementById('capture') as HTMLCanvasElement;
      const stream = document.getElementById('stream')as HTMLVideoElement;
      const ctx = capture.getContext( '2d' );
      const img = new Image();
      ctx.drawImage( stream , 0, 0, capture.width, capture.height );
      img.src		= capture.toDataURL( 'image/png' );
      img.width	= 240;

      const h = img.src.split(',').pop();

      const base64 = {
        base: h,
      };

      const token = localStorage.getItem('token');
      this.foto.enviarfototemp(token, base64).subscribe((res: any) => {
        this.name = res.dataUser.name;
        this.apellido = res.dataUser.apellido;
        this.documento = res.dataUser.documento;
        this.telefono = res.dataUser.telefono;
        this.email = res.dataUser.email;
        this.role = res.dataUser.role[0];
        this.coincidencia = 100 * res.coincidencia;
        this.tipo = res.tipo.tipo;

        this.socket.emit('cliente:fototemp', {
          res
        });

        this.socket.emit('cliente:estadisticas', {
          res
        });

        //this.datosUser = res.datosUser;
        //this.datosazure = res.datosazure;
        const correcto = res.dataUser;

        if(correcto === res.dataUser){
        this.chec( res.dataUser.name, 4000);
        }
      },error => {
        console.log(error);
        const err = error.error;
        console.log(err);
        if(err === 'ERROR ROSTRO NO ENCONTRADO'){
          this.errorl('ROSTRO NO ENCONTRADO EN LA BASE DE DATOS', 5000);
          this.socket.emit('prenderRojo');
        }
      });
    }
  }

  prender(){
    const mediaSupport = 'mediaDevices' in navigator;
    //* console.log('me'+ mediaSupport);
    if( mediaSupport && null == this.cameraStream ) {
      //* console.log(this.cameraStream);
      //* console.log(mediaSupport);
      this.cameraStream = mediaSupport;
      //* console.log('me gustas mucho tu tarde o temprano sere tuyo y mia tu searassssss',this.cameraStream);
      navigator.mediaDevices.getUserMedia({
        video:{width:600, height:390},
        audio:false
      }).then(stram =>{
        // console.log('stram', stram);
        this.cameraStream = stram;
        this.streamRef.srcObject = stram;
        this.streamRef.play();
        this.temporizadorDeRetraso();
      })
      .catch( err => {
        console.log( 'Unable to access camera: ' + err );
      });
    }
    else {
      alert( 'Your browser does not support media devices.' );
      return;
    }
  }

  temporizadorDeRetraso() {
    this.identificadorTiempoDeEspera = setInterval(() => {
    this.capturar();}, 10000);
    setTimeout(() => {this.detenercaptura();}, (65000));
  }

  detenercaptura() {
    clearInterval(this.identificadorTiempoDeEspera);
    this.warning('TIEMPO DE EJECUCIÓN DE CÁMARA EXCEDIDO', 5000);
    this.detener();
  }

  detener() {
    if( null !=  this.cameraStream) {
      const track = this.cameraStream.getTracks()[0];
      track.stop();
      this.streamRef.load();
      this.cameraStream = undefined;
    }
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

    //console.log('Token -->',token);
    //console.log('imgPer -->',idImgPerfil);

    this.foto.traerfotoperfil(token, idImgPerfil).subscribe((res: any)=>{
     // console.log(res.data.url);
      this.url = res.data.url;
    });

  }
}
