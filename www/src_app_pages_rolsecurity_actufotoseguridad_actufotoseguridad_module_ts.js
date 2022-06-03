"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rolsecurity_actufotoseguridad_actufotoseguridad_module_ts"],{

/***/ 39507:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/actufotoseguridad/actufotoseguridad-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActufotoseguridadPageRoutingModule": () => (/* binding */ ActufotoseguridadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _actufotoseguridad_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actufotoseguridad.page */ 28004);




const routes = [
    {
        path: '',
        component: _actufotoseguridad_page__WEBPACK_IMPORTED_MODULE_0__.ActufotoseguridadPage
    }
];
let ActufotoseguridadPageRoutingModule = class ActufotoseguridadPageRoutingModule {
};
ActufotoseguridadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ActufotoseguridadPageRoutingModule);



/***/ }),

/***/ 8677:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/actufotoseguridad/actufotoseguridad.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActufotoseguridadPageModule": () => (/* binding */ ActufotoseguridadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _actufotoseguridad_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actufotoseguridad-routing.module */ 39507);
/* harmony import */ var _actufotoseguridad_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actufotoseguridad.page */ 28004);







let ActufotoseguridadPageModule = class ActufotoseguridadPageModule {
};
ActufotoseguridadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _actufotoseguridad_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActufotoseguridadPageRoutingModule
        ],
        declarations: [_actufotoseguridad_page__WEBPACK_IMPORTED_MODULE_1__.ActufotoseguridadPage]
    })
], ActufotoseguridadPageModule);



/***/ }),

/***/ 28004:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/actufotoseguridad/actufotoseguridad.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActufotoseguridadPage": () => (/* binding */ ActufotoseguridadPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _actufotoseguridad_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actufotoseguridad.page.html?ngResource */ 21124);
/* harmony import */ var _actufotoseguridad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actufotoseguridad.page.scss?ngResource */ 84161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ 84935);



/* eslint-disable no-underscore-dangle */


//importación de las rutas

//importación de los servicios

//importacion de toaskcontroller


let ActufotoseguridadPage = class ActufotoseguridadPage {
    constructor(
    //se inyectan las rutas
    router, 
    //se llama el servicio para actualizar la foto
    usuarioServicio, 
    //se inyecta sanitizar
    sanitizer, 
    //se inyecta el servicio del llamdo de la foto
    foto, 
    //inyecta la importación de tosatcontroller
    toastController, 
    //? Implementacion sockets
    socket) {
        this.router = router;
        this.usuarioServicio = usuarioServicio;
        this.sanitizer = sanitizer;
        this.foto = foto;
        this.toastController = toastController;
        this.socket = socket;
        //llamdo del archivo para subirlo
        this.archivos = [];
        this.extraerBase64 = ($event) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                //función que combierte la imagen en formato 64
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
                }
                catch (e) {
                    return null;
                }
            });
        });
        this.nombre = localStorage.getItem('name');
    }
    errorl(mensaje, duracion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            //función que hace el llamado de una alerta sobre un error
            const toast = yield this.toastController.create({
                message: mensaje,
                color: 'danger',
                duration: duracion,
            });
            toast.present();
        });
    }
    chec(mensaje, duracion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            //función que hace el llamado de una alerta sobre un error
            const toast = yield this.toastController.create({
                message: mensaje,
                color: 'success',
                duration: duracion,
            });
            toast.present();
        });
    }
    ngOnInit() {
        //muestra la foto de perfil
        // this.traerfotol();
    }
    salir() {
        //función de cerrar seción
        localStorage.clear();
        this.router.navigate(['login']);
    }
    traerfotol() {
        //función de traer la foto de perfil
        const token = localStorage.getItem('token');
        const idImgPerfil = localStorage.getItem('idImgPerfil');
        //console.log('Token -->',token);
        //console.log('imgPer -->',idImgPerfil);
        this.usuarioServicio.traerfotoperfil(token, idImgPerfil).subscribe((res) => {
            // console.log(res.data.url);
            this.url = res.data.url;
        });
    }
    capturarFoto(event) {
        //función del llamdo de la foto
        const archivoCapturado = event.target.files[0];
        //console.log(archivoCapturado);
        this.extraerBase64(archivoCapturado).then((imagen) => {
            this.previsualizacion = imagen.base;
            //console.log(imagen);
        });
        this.archivos.push(archivoCapturado);
        //console.log(event.target.files);
    }
    subirFoto() {
        //función que llama el servicio para actualixar la foto
        try {
            this.loading = true;
            const formularioDeDatos = new FormData();
            formularioDeDatos.append('Myface', this.archivos[0]);
            const foto = this.previsualizacion;
            const token = localStorage.getItem('token');
            this.foto.createsFoto(token, formularioDeDatos).subscribe((res) => {
                this.loading = false;
                localStorage.setItem('idImgPerfil', res.data._id);
                // console.log('Respuesta del servidor', res.data._id);
                const correcto = res.data;
                // eslint-disable-next-line @typescript-eslint/naming-convention
                const id_img = res.data._id;
                this.socket.emit('cliente:enviar-id-img', id_img);
                if (correcto === res.data) {
                    this.chec('SE ACTUALIZO TU FOTO DE PERFIL', 4000);
                }
            }, error => {
                console.log(error);
                const err = error.error.msg;
                if (err === 'ERROR_SUBIR_ARCHIVO') {
                    this.errorl('DEBES SUBIR UNA IMAGEN PARA TU FOTO DE PERFIL', 5000);
                }
            });
        }
        catch (e) {
            this.loading = false;
            console.log('ERROR', e);
        }
    }
};
ActufotoseguridadPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__.Socket }
];
ActufotoseguridadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-actufotoseguridad',
        template: _actufotoseguridad_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_actufotoseguridad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActufotoseguridadPage);



/***/ }),

/***/ 84161:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/actufotoseguridad/actufotoseguridad.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ".salida {\n  font-size: 40px;\n  background-color: transparent;\n}\n\n.elicono {\n  font-size: 130px;\n}\n\n.lafoto {\n  max-width: 125px;\n  height: 125px;\n  padding: 0.5em;\n  height: 8vh;\n  filter: drop-shadow(3px 4px 4px #444);\n}\n\n.centrado {\n  text-align: center;\n}\n\n.centrar {\n  display: flex;\n  margin: auto;\n  text-align: center;\n  justify-content: center;\n}\n\n.lacard {\n  border-radius: 1rem;\n  filter: drop-shadow(3px 3px 3px #444);\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdHVmb3Rvc2VndXJpZGFkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7QUFHSjs7QUFBQztFQUNJLGtCQUFBO0FBR0w7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFHSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EscUNBQUE7QUFJSjs7QUFGQTtFQUNJLG9DQUFBO0FBS0o7O0FBSEU7RUFDRSxlQUFBO0VBQ0EsdUNBQUE7QUFNSiIsImZpbGUiOiJhY3R1Zm90b3NlZ3VyaWRhZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FsaWRhe1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmVsaWNvbm97XHJcbiAgICBmb250LXNpemU6IDEzMHB4O1xyXG59XHJcbi5sYWZvdG97XHJcbiAgICBtYXgtd2lkdGg6IDEyNXB4O1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICBoZWlnaHQ6IDh2aDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDRweCA0cHggIzQ0NCk7XHJcbiAgfVxyXG5cclxuIC5jZW50cmFkb3tcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9IFxyXG5cclxuLmNlbnRyYXJ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubGFjYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCAzcHggIzQ0NCk7XHJcbn1cclxuLmVsdGV4dG97XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC50aXR1bG9ze1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 21124:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/actufotoseguridad/actufotoseguridad.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-row>\r\n    <ion-col size=\"2\">\r\n      <ion-buttons>\r\n        <ion-menu-button color=\"dark\" menu=\"first\"></ion-menu-button>\r\n         <!--redirección a perfil presionando el nombre del usuario-->\r\n        <ion-button routerLink=\"/perfilseguridad\" expand=\"block\" fill=\"clear\" shape=\"round\" color=\"dark\">\r\n          <!--nombre del usuario-->\r\n          <h5 class=\"eltexto\">{{this.nombre}}</h5>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n    </ion-col>\r\n    <ion-col size=\"1\">\r\n      <button class=\"salida\" (click)=\"salir()\">\r\n        <!--botón de salida-->\r\n        <ion-icon name=\"log-out-outline\" color=\"dark\"></ion-icon>\r\n      </button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-toolbar>\r\n\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid>\r\n    <ion-row >\r\n      <ion-col sizeMd=\"4\" offsetMd=\"4\">\r\n        <ion-card class=\"lacard\">\r\n          <ion-card-title>\r\n            <div  class=\"text-center\" >\r\n            <h1 class=\"titulos\" >Actualizar foto</h1>\r\n            </div>\r\n          </ion-card-title>\r\n          <ion-col size=\"12\"></ion-col>\r\n          <ion-col size=\"12\"></ion-col>\r\n          <ion-col size=\"12\" >\r\n            <div style=\"margin:30px;\">\r\n            <h2 class=\"eltexto\">En este apartado podra seleccionar una foto de perfil para su cuenta.</h2>\r\n            </div>\r\n          </ion-col>\r\n          <ion-card-content >\r\n            <ion-row>\r\n              <div class=\"ion-text-center\">\r\n                <div class=\"row\">\r\n                    <!--Traer foto del usuario-->\r\n                    <ion-col size=\"6\" size-md=\"4\" size-lg=\"3\" *ngIf=\"previsualizacion\">\r\n                      <!--Traer las imagenes de la base de datos y mostrarlas en una card-->\r\n                      <ion-card\r\n                      style=\"background-color: rgba(221, 221, 221, 0.707); box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.275); border-radius: 10px;\">\r\n                      <ion-card-content style=\"padding: 0;\">\r\n                        <img [src]=\"previsualizacion\" alt=\"\" style=\"object-fit: cover; height: 60vh;  border-radius: 10px; \" id=\"foto\"/>\r\n                      </ion-card-content>\r\n                    </ion-card>\r\n                  </ion-col>\r\n                  <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                      <input (change)=\"capturarFoto($event)\" type=\"file\" id=\"boton2\">\r\n                    </div>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"></ion-col>\r\n                      <ion-col size=\"6\" >\r\n                        <div class=\"text-center\">\r\n\r\n                          <!--aleta de Espera de actulizacion -->\r\n                          <div class=\"col-lg-4 col-md-4 col-sm-12\" >\r\n                            <ion-button type=\"button\" routerLink=\"/perfilseguridad\" [disabled]=\"loading\" (click)=\"subirFoto()\" color=\"primary\" class=\"ion-margin-top\" id=\"boton\">\r\n                              {{(loading) ? 'Cargando...' : 'Actualizar'}}\r\n                            </ion-button>\r\n                          </div>\r\n                        </div>\r\n                    </ion-col>\r\n                    </ion-row>\r\n\r\n                </div>\r\n              </div>\r\n            </ion-row>\r\n          </ion-card-content>\r\n      </ion-card>\r\n       </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rolsecurity_actufotoseguridad_actufotoseguridad_module_ts.js.map