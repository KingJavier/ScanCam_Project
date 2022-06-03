import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { LoginPage } from './pages/login/login.page';
import { TaskService } from './services/task.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(
    //inyevta la importación de taskservices
    private usuarioservicio: TaskService,
    private router: Router,
    public toastController: ToastController,
    private socket: Socket
  ){}

  async errorl(mensaje, duracion) {
    //función que hace el llamado de una alerta sobre un error
    const toast = await this.toastController.create({
      message: mensaje,
      color: 'danger',
      duration: duracion,
    });
    toast.present();
  }


  ngOnInit(){
    const token=localStorage.getItem('token');
    if (token !== null) {
      this.usuarioservicio.verifiToken(token).subscribe((res: any)=>{//console.log(res);
        const msg = res.msg;
        if (msg === 'TOKEN_NULO') {
          this.errorl('SU SESIÓN HA CADUCADO', 5000);
          localStorage.clear();
          this.router.navigate(['login']);
        }
        if (msg === 'NOT_TOKEN') {
          localStorage.clear();
          this.router.navigate(['login']);
        }
      });
    }
  }
}






