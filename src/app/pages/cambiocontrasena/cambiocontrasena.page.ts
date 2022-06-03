import { Component, OnInit } from '@angular/core';
//importacion del los servicios de la api
import { TaskService } from 'src/app/services/task.service';
//importación de toastcontroller para formularios reactivos
import { ToastController } from '@ionic/angular';
//importación de form group para formularios reactivos
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiocontrasena',
  templateUrl: './cambiocontrasena.page.html',
  styleUrls: ['./cambiocontrasena.page.scss'],
})
export class CambiocontrasenaPage implements OnInit {
  //mostrar contraseña
  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(
    //se inyectan cambio de la contraseña
    private cambio: TaskService,
    //se inyecta el constructor de formularios
    private builder: FormBuilder,
    //se inyecta toastcontroller
    public toastController: ToastController
  ) { }

  //función de aleta por caso de error
  async errorl(mensaje, duracion) {
    const toast = await this.toastController.create({
      message: mensaje,
      color: 'danger',
      duration: duracion
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

  //se llama los form group
  // eslint-disable-next-line @typescript-eslint/member-ordering
  form: FormGroup;

  ngOnInit() {
    //esta función hace los campos obligatorios
    this.form = this.builder.group({
      codigo: [null, Validators.required],
      contrasena: [null, Validators.required],
    });
  }

  public actucontrasena(codigo, contrasena){

    if (this.form.invalid){
      return Object.values(this.form.controls).forEach(control=>{
        control.markAsTouched();
      });
    }

    //esta funcion ejecuta el servicio de cambio de contraseña de la api
    try{

      //console.log(codigo);
      //console.log(contrasena);
      const datos={
        newPass: contrasena,
        resetCode: codigo,
      };
      this.cambio.cambiocontrasena(datos).subscribe((res: any)=>{
        //console.log(res);

        const correcto = res.msg;

        if(correcto === 'Tu contraseña ha sido cambiada satisfactoriamente'){
        this.chec('SE CAMBIO LA CONTRASEÑA SATISFACTORIAMENTE', 4000);
        }

      },error => {
        console.log(error);

        const err = error.error.msg;

          if(err === 'USER_ALREADY_NOT_EXIST_WITH_THIS_CODE'){
            this.errorl('CODIGO INVALIDO', 3000);
          }
      });

    }
    catch(e){
      console.log('Error->', e);
    }

  }

  togglePassword(): void{
    this.showPassword = !this.showPassword;

    if(this.passwordToggleIcon === 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }else {
      this.passwordToggleIcon = 'eye';
    }
  }

}
