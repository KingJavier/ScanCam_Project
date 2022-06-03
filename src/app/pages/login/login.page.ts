import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//importación de router para la navegación
import { Router } from '@angular/router';
//importación de logeo para el modelado de los datos
import { Logeo } from 'src/app/interfaces/task';
//importación de los servicios taskservice
import { TaskService } from './../../services/task.service';
import { ToastController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //mostrar contraseña
  showPassword = false;
  passwordToggleIcon = 'eye';

  //se define la bariable datos y cmpos nulos
  datos: Logeo = {
    uid: null,
    email: null,
    password: null,
  };

  constructor(
    //inyevta la importación de taskservices
    private taskService: TaskService,
    //inyecta la importación de router para las rutas
    private router: Router,
    //inyecta la importación del contructor de formularios de angular
    private builder: FormBuilder,
    public toastController: ToastController,
    //se llama el servicio para actualizar la foto
    private usuarioServicio: TaskService,
    //se llama a socket.io
    private socket: Socket,
  ) { }

  async errorl() {
    const toast = await this.toastController.create({
      message: 'Datos Invalidos',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  form: FormGroup;
  //se llaman los campos para validarlos y sean campos requeridos
  ngOnInit() {

    // this.socket.connect();

    this.form = this.builder.group({
      correo: [null, [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}')]],
      contraseña: [null, Validators.required],
    });

    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (token) {
      if (role === 'seguridad') {
        this.router.navigate(['rolseguridad']);
      }
      else if(role === 'gestor'){
        this.router.navigate(['inicioges']);
      }
      else if(role === 'funcionario'){
        this.router.navigate(['iniciofun']);
      }
      else if(role === 'aprendiz'){
        this.router.navigate(['inicioapre']);
      }
      else if(role === 'invitado'){
        this.router.navigate(['inicioinv']);
      }
    }
  }

  public createLogeo() {
    if (this.form.invalid){
      return Object.values(this.form.controls).forEach(control=>{
        control.markAsTouched();
      });
    }

    //? se hace el llamdo de los campos del formulario y se les asigna el valor de la api
    //? si no comple con los valores de la api la función try hacel el llamado del error
    try {
      const email = this.datos.email;
      const password = this.datos.password;

      const logeo = {
          email: `${email}`,
          password:`${password}`,
        };

      //se loguea el usuario con el llamado a createlogeo y lo retorna dependiendo del rolal su respevtivo home
      this.taskService.createLogeo(logeo).subscribe((res: any) => {
        //console.log(res.data.user);

        if(res.data.user.idImgPerfil !== ''){
          this.socket.emit('cliente:enviar-id-img', res.data.user.idImgPerfil);
        }

        this.socket.emit('cliente:newlogin', res.data.user);

        //console.log(res.data.user.email);
        localStorage.setItem('email', res.data.user.email);
        //console.log(res.data.user.role[0]);
        localStorage.setItem('role', res.data.user.role[0]);
        //console.log(res.data.user.name);
        localStorage.setItem('name', res.data.user.name);
        // console.log(res.data.user.apellido);
        localStorage.setItem('apellido', res.data.user.apellido);
        //console.log(res.data.user.telefono);
        localStorage.setItem('telefono', res.data.user.telefono);
        //console.log(res.data.user.documento);
        localStorage.setItem('documento', res.data.user.documento);
        //console.log(res.data.user.idImgPerfil);
        localStorage.setItem('idImgPerfil', res.data.user.idImgPerfil);



      const token = res.data.token;
      localStorage.setItem('token',token);
      //se define cada rol donde debe ser redirigido

          if (res.data.user.status==='VERIFIED') {
            if (res.data.user.role[0] === 'aprendiz' ) {
              this.router.navigate(['/inicioapre']);
            }
            else if (res.data.user.role[0] === 'funcionario') {
              this.router.navigate(['/iniciofun']);
              return;
            }
            else if (res.data.user.role[0] === 'invitado') {
              this.router.navigate(['/inicioinv']);
              return;
            }
            else if (res.data.user.role[0] === 'gestor') {
              this.router.navigate(['/inicioges']);
              return;
            }
            else if (res.data.user.role[0] === 'seguridad') {
              this.router.navigate(['/rolseguridad']);
              return;
            }
          } else {
            this.router.navigate(['/verificacion-email']);
          }
        },error => {
          this.errorl();
        });

  }
  //error que aparece en consola avisando que no lleno correctamente los campos o son invalidos
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
