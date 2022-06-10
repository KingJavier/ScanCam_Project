"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rolgest_estadisticas_estadisticas_module_ts"],{

/***/ 47249:
/*!***************************************************************************!*\
  !*** ./src/app/pages/rolgest/estadisticas/estadisticas-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstadisticasPageRoutingModule": () => (/* binding */ EstadisticasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _estadisticas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estadisticas.page */ 22600);




const routes = [
    {
        path: '',
        component: _estadisticas_page__WEBPACK_IMPORTED_MODULE_0__.EstadisticasPage
    }
];
let EstadisticasPageRoutingModule = class EstadisticasPageRoutingModule {
};
EstadisticasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EstadisticasPageRoutingModule);



/***/ }),

/***/ 58882:
/*!*******************************************************************!*\
  !*** ./src/app/pages/rolgest/estadisticas/estadisticas.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstadisticasPageModule": () => (/* binding */ EstadisticasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ 44195);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _estadisticas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estadisticas-routing.module */ 47249);
/* harmony import */ var _estadisticas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estadisticas.page */ 22600);








let EstadisticasPageModule = class EstadisticasPageModule {
};
EstadisticasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            ng2_charts__WEBPACK_IMPORTED_MODULE_4__.NgChartsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _estadisticas_routing_module__WEBPACK_IMPORTED_MODULE_0__.EstadisticasPageRoutingModule
        ],
        declarations: [_estadisticas_page__WEBPACK_IMPORTED_MODULE_1__.EstadisticasPage]
    })
], EstadisticasPageModule);



/***/ }),

/***/ 22600:
/*!*****************************************************************!*\
  !*** ./src/app/pages/rolgest/estadisticas/estadisticas.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstadisticasPage": () => (/* binding */ EstadisticasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _estadisticas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estadisticas.page.html?ngResource */ 91255);
/* harmony import */ var _estadisticas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estadisticas.page.scss?ngResource */ 93415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ 10177);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ 84935);




//importation de las rutas

//importation de los servicios de la api


//? Importation Sockets

let EstadisticasPage = class EstadisticasPage {
    constructor(router, usuarioServicio, socket) {
        this.router = router;
        this.usuarioServicio = usuarioServicio;
        this.socket = socket;
        //llamado del nombre del localstorage
        this.nombre = localStorage.getItem('name');
    }
    ngOnInit() {
        //llamado de la foto
        //this.traerfotol();
        //this.estadisticas();
        this.traerregistros();
    }
    traerregistros() {
        //función de tarer la foto de los servicios de la api
        const token = localStorage.getItem('token');
        this.usuarioServicio.numregentrada(token).subscribe((resp) => {
            console.log(resp);
            this.entrada = resp;
            this.entrada2 = resp;
            this.usuarioServicio.numregsalida(token).subscribe((res) => {
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
    estadisticas(entrada, salida) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const canvas = document.getElementById('estadistica');
            const ctx = canvas.getContext('2d');
            if (this.myChart) {
                this.myChart.clear();
                this.myChart.destroy();
                // this.myChart = null;
            }
            const entradaTotal = entrada.total;
            const salidaTotal = salida.total;
            const dentroTotal = entrada.total - salida.total;
            this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart(ctx, {
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
                            hoverBorderColor: [
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
        });
    }
    especifico(entrada, salida) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const canvas = document.getElementById('especifico');
            const ctx = canvas.getContext('2d');
            if (this.myChart2) {
                this.myChart2.clear();
                this.myChart2.destroy();
                // this.myChart = null;
            }
            const invitado = entrada.invitado - salida.invitado;
            const aprendiz = entrada.aprendiz - salida.aprendiz;
            const funcionario = entrada.funcioanrio - salida.funcioanrio;
            const gestor = entrada.gestor - salida.gestor;
            const seguridad = entrada.seguridad - salida.seguridad;
            this.myChart2 = new chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['INVITADO', 'APRENDIZ', 'FUNCIONARIO', 'GESTOR', 'SEGURIDAD'],
                    datasets: [{
                            label: 'USUARIOS DENTRO DE LAS INSTALACIONES',
                            data: [invitado, aprendiz, funcionario, gestor, seguridad],
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
                            hoverBorderColor: [
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
        });
    }
    salir() {
        //función de cerrar seción
        localStorage.clear();
        this.router.navigate(['login']);
    }
    traerfotol() {
        //función de tarer la foto de los servicios de la api
        const token = localStorage.getItem('token');
        const idImgPerfil = localStorage.getItem('idImgPerfil');
        this.usuarioServicio.traerfotoperfil(token, idImgPerfil).subscribe((res) => {
            //console.log(res.data.url);
            this.url = res.data.url;
        });
    }
};
EstadisticasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__.Socket }
];
EstadisticasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-estadisticas',
        template: _estadisticas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_estadisticas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EstadisticasPage);



/***/ }),

/***/ 93415:
/*!******************************************************************************!*\
  !*** ./src/app/pages/rolgest/estadisticas/estadisticas.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".salida {\n  font-size: 40px;\n  background-color: transparent;\n}\n\n.elicono {\n  font-size: 130px;\n}\n\n.lacard {\n  border-radius: 1rem;\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.537);\n  margin-top: 20px;\n}\n\n.centrar {\n  display: flex;\n  margin: auto;\n  text-align: center;\n  justify-content: center;\n}\n\n.chart-container {\n  position: relative;\n  margin: auto;\n  margin-top: 20px;\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 15px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzdGFkaXN0aWNhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLG9DQUFBO0FBSUY7O0FBREE7RUFDRSxlQUFBO0VBQ0EsdUNBQUE7QUFJRiIsImZpbGUiOiJlc3RhZGlzdGljYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhbGlkYXtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmVsaWNvbm97XHJcbiAgZm9udC1zaXplOiAxMzBweDtcclxufVxyXG4ubGFjYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNTM3KTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY2VudHJhcntcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNoYXJ0LWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmVsdGV4dG97XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGl0dWxvc3tcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 91255:
/*!******************************************************************************!*\
  !*** ./src/app/pages/rolgest/estadisticas/estadisticas.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<!--****** SCAN CAM ******-->\r\n<!--****** ABRIL 2022 ******-->\r\n<!--***** DESARROLADORES ******* -->\r\n<!--****** CAMILA PARDO *******-->\r\n<!--****** YESETH REYES *******-->\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-row>\r\n    <ion-col size=\"2\">\r\n      <ion-buttons>\r\n        <ion-menu-button color=\"dark\" menu=\"first\"></ion-menu-button>\r\n        <!--redirección a perfil presionando el nombre del usuario-->\r\n        <ion-button routerLink=\"/perfilgestor\" expand=\"block\" fill=\"clear\" shape=\"round\" color=\"dark\">\r\n          <!--nombre del usuario-->\r\n          <h5 class=\"eltexto\">{{this.nombre}}</h5>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n    </ion-col>\r\n    <ion-col size=\"1\">\r\n      <!--botón de salida-->\r\n      <button class=\"salida\" (click)=\"salir()\">\r\n        <ion-icon name=\"log-out-outline\" color=\"dark\"></ion-icon>\r\n      </button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"0\"></ion-col>\r\n      <ion-col size-md=\"10\" size-sm=\"12\" class=\"chart-container\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"lacard\">\r\n            <!--Estadisticas de los ingresos y salidas de los usuarios-->\r\n            <ion-text color=\"primary\" >\r\n              <h1 class=\"titulos\">Estadisticas del ingreso y salida</h1>\r\n            </ion-text>\r\n            <canvas id=\"estadistica\" width=\"600\" height=\"600\"></canvas>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"lacard\">\r\n            <!--Resgistros de los usuarios actualmente en la institución-->\r\n            <ion-text color=\"primary\" >\r\n              <h1 class=\"titulos\">Usuarios Actualmente en las Instalaciones</h1>\r\n            </ion-text>\r\n            <canvas id=\"especifico\" width=\"600\" height=\"600\"></canvas>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"0\"></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rolgest_estadisticas_estadisticas_module_ts.js.map