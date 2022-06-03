import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController, NavCustomEvent } from '@ionic/angular';
//importación de los servicios de la api
import { TaskService } from 'src/app/services/task.service';
//importacion de las rutas de navegación
import { Router } from '@angular/router';
//importacion de toaskcontroller
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-actufoto',
  templateUrl: './actufoto.page.html',
  styleUrls: ['./actufoto.page.scss'],
})
export class ActufotoPage implements OnInit {
  //se hace la función de previsualizar imagen
  // eslint-disable-next-line @typescript-eslint/ban-types
  public previsualizacion: String;
  //llamado de la imagen a subir a la base de datos
  public archivos: any = [];
  //funcion de cargado de subir la imagen
  public loading: boolean;

  constructor(
    private sanitizer: DomSanitizer,
    //se inyecta el servicio de envio de foto de perfil
    private foto: TaskService,
    private router: Router,
      //inyecta la importación de tosatcontroller
    public toastController: ToastController,
  ) {

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
  }

  salir(){
    //función de cerrar seción y borrar token
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  capturarFoto(event): any{
    //función que captura la foto
    const archivoCapturado = event.target.files[0];

    //console.log(archivoCapturado);

    this.extraerBase64(archivoCapturado).then((imagen: any) => {
    this.previsualizacion = imagen.base;
      //console.log(imagen);
    });
    this.archivos.push(archivoCapturado);
    //console.log(event.target.files);
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    //función que conbirte la foto en formato 64
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (e) {
      return null;
    }
  });

  subirFoto(): any {
    //función del llamado del servicio para subir el sertificado
    try {
      this.loading = true;
      const formularioDeDatos = new FormData();
        formularioDeDatos.append('MyCertificate', this.archivos[0]);


      const foto = this.previsualizacion;
      const token = localStorage.getItem('token');

      this.foto.createsCertificado(token,formularioDeDatos).subscribe((res: any) => {
          this.loading = false;
          //console.log('Respuesta del servidor', res);

          const correcto = res.data;

          if(correcto === res.data){
          this.chec('SE SUBIO EL CERTIFICADO CORRECTAMENTE', 4000);
          }
      },error => {
        console.log(error);

        const err = error.error.msg;

        if(err === 'ERROR_SUBIR_ARCHIVO'){
          this.errorl('DEBES SUBIR UNA IMAGEN DE TU CERTIFICADO', 4000);
        }

      });

    } catch (e) {
      this.loading = false;
      console.log('ERROR', e);
    }
  }

}
