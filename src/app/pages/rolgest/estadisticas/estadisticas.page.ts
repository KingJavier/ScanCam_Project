import { AbstractType, Component, OnInit,  ViewChild } from '@angular/core';
//importation de las rutas
import { Router } from '@angular/router';
//importation de los servicios de la api
import { TaskService } from 'src/app/services/task.service';

import {Chart} from 'chart.js';
//? Importation Sockets
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {
  //llamdo de los datos url y name como dato tipo string
  url: string;
  nombre: string;

  entrada: any;
  salida: any;

  entrada2: any;
  salida2: any;

  myChart: any;
  myChart2: any;

  constructor(private router: Router,
    private usuarioServicio: TaskService,
    private socket: Socket,
  ) {
    //llamado del nombre del localstorage
    this.nombre=localStorage.getItem('name');
  }

  ngOnInit() {
    //llamado de la foto
    //this.traerfotol();
    //this.estadisticas();
    this.traerregistros();
  }

  traerregistros(){
    //función de tarer la foto de los servicios de la api
    const token = localStorage.getItem('token');

    this.usuarioServicio.numregentrada(token).subscribe((resp: any)=>{
      console.log(resp);

      this.entrada = resp;
      this.entrada2 = resp;

      this.usuarioServicio.numregsalida(token).subscribe((res: any)=>{
        console.log(res);
        this.salida = res;
        this.salida2 = res;

        this.estadisticas(this.entrada, this.salida);
        this.especifico(this.entrada2, this.salida2);
      });
    });

    this.socket.on('server:estadisticas', callback => {
      //console.log(callback.regEntrada);

      this.entrada = callback.regEntrada;
      this.salida = callback.regSalida;

      this.entrada2 = callback.regEntrada;
      this.salida2 = callback.regSalida;

      this.estadisticas(this.entrada, this.salida);
      this.especifico(this.entrada2, this.salida2);
    });
  }

  async estadisticas(entrada: any, salida: any){
    const canvas = document.getElementById('estadistica') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (this.myChart) {
      this.myChart.clear();
      this.myChart.destroy();
      // this.myChart = null;
    }

    const entradaTotal = entrada.total;
    const salidaTotal = salida.total;
    const dentroTotal = entrada.total-salida.total;

    this.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['ENTRADA', 'SALIDA', 'ACTUALMENTE'],
            datasets: [{
                label: 'REGISTROS',
                data: [entradaTotal, salidaTotal, dentroTotal],
                backgroundColor: [
                  'rgba(221,191,241, 0.4)',
                  'rgba(218,243,241, 0.4)',
                  'rgba(214,237,250, 0.4)',
                ],
                borderColor: [
                  'rgba(149,112,244, 1)',
                  'rgba(158,222,219, 1)',
                  'rgba(127,180,217, 1)',
                ],
                hoverBackgroundColor: [
                  'rgba(221,191,241, 0.7)',
                  'rgba(218,243,241, 0.7)',
                  'rgba(214,237,250, 0.7)',
                ],
                hoverBorderColor:[
                  'rgba(149,112,244, 1)',
                  'rgba(158,222,219, 1)',
                  'rgba(127,180,217, 1)',
                ],
                borderWidth: 3,
                borderRadius: 6,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

  }

  async especifico(entrada, salida){
    const canvas = document.getElementById('especifico') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (this.myChart2) {
      this.myChart2.clear();
      this.myChart2.destroy();
      // this.myChart = null;
    }

    const invitado = entrada.invitado-salida.invitado;
    const aprendiz = entrada.aprendiz-salida.aprendiz;
    const funcionario = entrada.funcioanrio-salida.funcioanrio;
    const gestor = entrada.gestor-salida.gestor;
    const seguridad = entrada.seguridad-salida.seguridad;

    this.myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['INVITADO', 'APRENDIZ', 'FUNCIONARIO', 'GESTOR', 'SEGURIDAD'],
            datasets: [{
                label: 'USUARIOS DENTRO DE LAS INSTALACIONES',
                data: [ invitado, aprendiz, funcionario, gestor, seguridad ],
                backgroundColor: [
                  'rgba(254,237,216, 0.4)',
                  'rgba(255,224,230, 0.4)',
                  'rgba(221,191,241, 0.4)',
                  'rgba(218,243,241, 0.4)',
                  'rgba(214,237,250, 0.4)',
                ],
                borderColor: [
                  'rgba(238,203,154, 1)',
                  'rgba(233,180,189, 1)',
                  'rgba(149,112,244, 1)',
                  'rgba(158,222,219, 1)',
                  'rgba(127,180,217, 1)',
                ],
                hoverBackgroundColor: [
                  'rgba(254,237,216, 0.7)',
                  'rgba(255,224,230, 0.7)',
                  'rgba(221,191,241, 0.7)',
                  'rgba(218,243,241, 0.7)',
                  'rgba(214,237,250, 0.7)',
                ],
                hoverBorderColor:[
                  'rgba(238,203,154, 1)',
                  'rgba(233,180,189, 1)',
                  'rgba(149,112,244, 1)',
                  'rgba(158,222,219, 1)',
                  'rgba(127,180,217, 1)',
                ],
                borderWidth: 3,
                borderRadius: 6,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
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

    this.usuarioServicio.traerfotoperfil(token, idImgPerfil).subscribe((res: any)=>{
      //console.log(res.data.url);
      this.url = res.data.url;
    });
  }

}
