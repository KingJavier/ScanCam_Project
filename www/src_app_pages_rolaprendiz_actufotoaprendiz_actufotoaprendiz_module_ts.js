"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rolaprendiz_actufotoaprendiz_actufotoaprendiz_module_ts"],{

/***/ 36403:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/rolaprendiz/actufotoaprendiz/actufotoaprendiz-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActufotoaprendizPageRoutingModule": () => (/* binding */ ActufotoaprendizPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _actufotoaprendiz_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actufotoaprendiz.page */ 61983);




const routes = [
    {
        path: '',
        component: _actufotoaprendiz_page__WEBPACK_IMPORTED_MODULE_0__.ActufotoaprendizPage
    }
];
let ActufotoaprendizPageRoutingModule = class ActufotoaprendizPageRoutingModule {
};
ActufotoaprendizPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ActufotoaprendizPageRoutingModule);



/***/ }),

/***/ 17647:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/rolaprendiz/actufotoaprendiz/actufotoaprendiz.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActufotoaprendizPageModule": () => (/* binding */ ActufotoaprendizPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _actufotoaprendiz_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actufotoaprendiz-routing.module */ 36403);
/* harmony import */ var _actufotoaprendiz_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actufotoaprendiz.page */ 61983);







let ActufotoaprendizPageModule = class ActufotoaprendizPageModule {
};
ActufotoaprendizPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _actufotoaprendiz_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActufotoaprendizPageRoutingModule
        ],
        declarations: [_actufotoaprendiz_page__WEBPACK_IMPORTED_MODULE_1__.ActufotoaprendizPage]
    })
], ActufotoaprendizPageModule);



/***/ }),

/***/ 61983:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/rolaprendiz/actufotoaprendiz/actufotoaprendiz.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActufotoaprendizPage": () => (/* binding */ ActufotoaprendizPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _actufotoaprendiz_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actufotoaprendiz.page.html?ngResource */ 3160);
/* harmony import */ var _actufotoaprendiz_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actufotoaprendiz.page.scss?ngResource */ 52375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ 84935);



/* eslint-disable no-underscore-dangle */


//importacion de las rutas

//importacion de los servicios

//importacion de toaskcontroller


let ActufotoaprendizPage = class ActufotoaprendizPage {
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
            //console.log(res.data.url);
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
                //console.log('Respuesta del servidor', res);
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
ActufotoaprendizPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__.Socket }
];
ActufotoaprendizPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-actufotoaprendiz',
        template: _actufotoaprendiz_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_actufotoaprendiz_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActufotoaprendizPage);



/***/ }),

/***/ 52375:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/rolaprendiz/actufotoaprendiz/actufotoaprendiz.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ".salida {\n  font-size: 40px;\n  background-color: transparent;\n}\n\n.elicono {\n  font-size: 130px;\n}\n\n.lafoto {\n  max-width: 125px;\n  height: 125px;\n  padding: 0.5em;\n  height: 8vh;\n  filter: drop-shadow(3px 4px 4px #444);\n}\n\n.centrado {\n  text-align: center;\n}\n\n.centrar {\n  display: flex;\n  margin: auto;\n  text-align: center;\n  justify-content: center;\n}\n\n.lacard {\n  border-radius: 1rem;\n  filter: drop-shadow(3px 3px 3px #444);\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdHVmb3RvYXByZW5kaXoucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtBQUdKOztBQUFDO0VBQ0ksa0JBQUE7QUFHTDs7QUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxxQ0FBQTtBQUlKOztBQUZBO0VBQ0ksb0NBQUE7QUFLSjs7QUFGRTtFQUNFLGVBQUE7RUFDQSx1Q0FBQTtBQUtKIiwiZmlsZSI6ImFjdHVmb3RvYXByZW5kaXoucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhbGlkYXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5lbGljb25ve1xyXG4gICAgZm9udC1zaXplOiAxMzBweDtcclxufVxyXG4ubGFmb3Rve1xyXG4gICAgbWF4LXdpZHRoOiAxMjVweDtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgaGVpZ2h0OiA4dmg7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCA0cHggNHB4ICM0NDQpO1xyXG4gIH1cclxuXHJcbiAuY2VudHJhZG97XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG5cclxuLmNlbnRyYXJ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubGFjYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCAzcHggIzQ0NCk7XHJcbn1cclxuLmVsdGV4dG97XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAudGl0dWxvc3tcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTmFudW0gR290aGljJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiJdfQ== */";

/***/ }),

/***/ 3160:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/rolaprendiz/actufotoaprendiz/actufotoaprendiz.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-row>\r\n    <ion-col size=\"2\">\r\n      <ion-buttons>\r\n        <ion-menu-button color=\"dark\" menu=\"first\"></ion-menu-button>\r\n        <!--redirección a perfil presionando el nombre del usuario-->\r\n          <ion-button routerLink=\"/perfilaprendiz\" expand=\"block\" fill=\"clear\" shape=\"round\" color=\"dark\">\r\n            <!--nombre del usuario-->\r\n          <h5 class=\"eltexto\">{{this.nombre}}</h5>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n    </ion-col>\r\n    <ion-col size=\"1\">\r\n      <!--botón de salida-->\r\n      <button class=\"salida\" (click)=\"salir()\">\r\n        <ion-icon name=\"log-out-outline\" color=\"dark\"></ion-icon>\r\n      </button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-toolbar>\r\n\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid>\r\n    <ion-row >\r\n      <ion-col sizeMd=\"4\" offsetMd=\"4\">\r\n        <ion-card class=\"lacard\">\r\n          <ion-card-title>\r\n            <div  class=\"text-center\" >\r\n            <h1 class=\"titulos\" >Actualizar foto</h1>  \r\n            </div>\r\n          </ion-card-title>\r\n          <ion-col size=\"12\"></ion-col>\r\n          <ion-col size=\"12\"></ion-col>\r\n          <ion-col size=\"12\" >\r\n            <div style=\"margin:30px;\">\r\n            <h2 class=\"eltexto\">En este apartado podra seleccionar una foto de perfil para su cuenta.</h2>\r\n            </div>\r\n          </ion-col>\r\n          <ion-card-content >\r\n            <ion-row>\r\n              <div class=\"ion-text-center\">\r\n                <div class=\"row\">\r\n                    <!--Traer foto del usuario-->\r\n                    <ion-col size=\"6\" size-md=\"4\" size-lg=\"3\" *ngIf=\"previsualizacion\">\r\n                      <!--Traer las imagenes de la base de datos y mostrarlas en una card-->\r\n                      <ion-card\r\n                      style=\"background-color: rgba(221, 221, 221, 0.707); box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.275); border-radius: 10px;\">\r\n                      <ion-card-content style=\"padding: 0;\">\r\n                        <img [src]=\"previsualizacion\" alt=\"\" style=\"object-fit: cover; height: 60vh;  border-radius: 10px; \" id=\"foto\"/> \r\n                      </ion-card-content>\r\n                    </ion-card>\r\n                  </ion-col>\r\n                  <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                      <input (change)=\"capturarFoto($event)\" type=\"file\" id=\"boton2\">\r\n                    </div>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"></ion-col>\r\n                      <ion-col size=\"6\" >\r\n                        <div class=\"text-center\">\r\n  \r\n                          <!--aleta de Espera de actulizacion -->\r\n                          <div class=\"col-lg-4 col-md-4 col-sm-12\" >\r\n                            <ion-button type=\"button\" routerLink=\"/perfilaprendiz\" [disabled]=\"loading\" (click)=\"subirFoto()\" color=\"primary\" class=\"ion-margin-top\" id=\"boton\">\r\n                              {{(loading) ? 'Cargando...' : 'Actualizar'}}\r\n                            </ion-button>\r\n                          </div>\r\n                        </div>\r\n                    </ion-col>\r\n                    </ion-row>\r\n                    \r\n                </div>\r\n              </div>\r\n            </ion-row>\r\n          </ion-card-content>\r\n      </ion-card>\r\n       </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rolaprendiz_actufotoaprendiz_actufotoaprendiz_module_ts.js.map