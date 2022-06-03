import { Component, OnInit, ViewChild  } from '@angular/core';
//importación de las rutas
import { Router } from '@angular/router';
//importación de los servicios de la api
import { TaskService } from 'src/app/services/task.service';
import { Socket } from 'ngx-socket-io';

import { IonDatetime } from '@ionic/angular';
import { format, getDate, getMonth, getYear, parseISO } from 'date-fns';

@Component({
  selector: 'app-listadoseguridad',
  templateUrl: './listadoseguridad.page.html',
  styleUrls: ['./listadoseguridad.page.scss'],
})
export class ListadoseguridadPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  dateValue = '';
  //llamdo de los datos url y name como dato tipo string
  url: string;

  nombre: string;
  entrada: any;
  salida: any;

  fecha: any;

  numeroPag = 1;

  constructor(
    private router: Router,
    private resentrada: TaskService,
    private usuarioServicio: TaskService,
    private socket: Socket
  ) { }

  ngOnInit() {
    //llamado de la foto
    this.traerfotol();
    //llamado del token t traer el listado de entrada y salida
    const token=localStorage.getItem('token');
    this.resentrada.listadoentrada(token).subscribe((res: any)=>{
      // console.log(res);
      this.entrada = res.data;

      this.fecha = res.data.fecha;
      // console.log('fecha del primer dato', res.data);
    });

    this.socket.on('server:fototemp', callback => {
      this.entrada = callback;
      // this.entrada.push(callback[0]);
      // this.entrada = callback;
      // console.log(this.entrada);
    });
  }


  next(){
    const num = this.numeroPag ++;
    console.log(num);

    const token=localStorage.getItem('token');
    this.resentrada.next(token, num).subscribe((res: any)=>{
      console.log(res);
    });
  }

  back(){
    const num = this.numeroPag --;

    console.log(num);

    const token=localStorage.getItem('token');
    this.resentrada.back(token, num).subscribe((res: any)=>{
      console.log(res);
    });
  }

  salir(){
    //función de cerrar seción
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  traerfotol(){
    //función de tarer la foto de los servicios de la api
    const token = localStorage.getItem('token');
    const idImgPerfil = localStorage.getItem('idImgPerfil');

    // console.log('Token -->',token);
    // console.log('imgPer -->',idImgPerfil);

    this.usuarioServicio.traerfotoperfil(token, idImgPerfil).subscribe((res: any)=>{
      //console.log(res.data.url);
      this.url = res.data.url;
    });
  }

  confirm() {
    this.datetime.confirm();
  }

  formatDate(value: string) {

    const token = localStorage.getItem('token');
    const da =  format(parseISO(value), 'yyyy-MM-dd');

    // console.log('data', da);

    this.usuarioServicio.filtro(token, da).subscribe((res: any)=>{
      this.entrada = 0;
      this.entrada = res.guenas;
      // console.log(res.guenas);
    });
    return format(parseISO(value), 'MMMM dd yyyy');

  }

  isDateEnabled(dateIsoString: string) {
    const date = new Date(dateIsoString);
    if (getDate(date) === 1 && getMonth(date) === 0 && getYear(date) === 2022) {
      // Disables January 1, 2022.
      return false;
    }
    return true;
  }
}
