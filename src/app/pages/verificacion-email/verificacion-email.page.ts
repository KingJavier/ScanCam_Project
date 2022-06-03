import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
//importacion de toaskcontroller
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-verificacion-email',
  templateUrl: './verificacion-email.page.html',
  styleUrls: ['./verificacion-email.page.scss'],
})
export class VerificacionEmailPage implements OnInit {

  constructor(
    private usuarioservicio: TaskService,
    //inyecta la importación de tosatcontroller
    public toastController: ToastController,
  ) { }

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

  enviarcorreo(){
    try{
    const correo=localStorage.getItem('email');
    const body={email: correo};
    this.usuarioservicio.enviarcorreo(body).subscribe((res: any)=>{
      //console.log(res);

      const correcto = res.msg;

      if(correcto === 'Correo enviado satisfactoriamente, sigue las instrucciones'){
        this.chec('SE ENVIO EL CORREO CORRECTAMENTE', 4000);
      }
       //this.router.navigate(['/']);
    },error => {
      console.log(error);

      const err = error.error.msg;

      if(err === 'No se encontro el usuario ingresado'){
        this.errorl('EL CORREO NO ESTA REGISTRADO O VERIFICA QUE ESTE BIEN ESCRITO', 4000);
      }

    });

  }
    //error en consola si no cumple con los datos
    catch(error){
    console.log('Error->', error);
  }
  }

}
