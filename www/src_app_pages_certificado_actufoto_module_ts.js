"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_certificado_actufoto_module_ts"],{

/***/ 66442:
/*!**************************************************************!*\
  !*** ./src/app/pages/certificado/actufoto-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActufotoPageRoutingModule": () => (/* binding */ ActufotoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _actufoto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actufoto.page */ 93882);




const routes = [
    {
        path: '',
        component: _actufoto_page__WEBPACK_IMPORTED_MODULE_0__.ActufotoPage
    }
];
let ActufotoPageRoutingModule = class ActufotoPageRoutingModule {
};
ActufotoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ActufotoPageRoutingModule);



/***/ }),

/***/ 19100:
/*!******************************************************!*\
  !*** ./src/app/pages/certificado/actufoto.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActufotoPageModule": () => (/* binding */ ActufotoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _actufoto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actufoto-routing.module */ 66442);
/* harmony import */ var _actufoto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actufoto.page */ 93882);







let ActufotoPageModule = class ActufotoPageModule {
};
ActufotoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _actufoto_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActufotoPageRoutingModule
        ],
        declarations: [_actufoto_page__WEBPACK_IMPORTED_MODULE_1__.ActufotoPage]
    })
], ActufotoPageModule);



/***/ }),

/***/ 93882:
/*!****************************************************!*\
  !*** ./src/app/pages/certificado/actufoto.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActufotoPage": () => (/* binding */ ActufotoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _actufoto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actufoto.page.html?ngResource */ 82367);
/* harmony import */ var _actufoto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actufoto.page.scss?ngResource */ 53893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);





//importación de los servicios de la api

//importacion de las rutas de navegación

//importacion de toaskcontroller

let ActufotoPage = class ActufotoPage {
    constructor(sanitizer, 
    //se inyecta el servicio de envio de foto de perfil
    foto, router, 
    //inyecta la importación de tosatcontroller
    toastController) {
        this.sanitizer = sanitizer;
        this.foto = foto;
        this.router = router;
        this.toastController = toastController;
        //llamado de la imagen a subir a la base de datos
        this.archivos = [];
        this.extraerBase64 = ($event) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
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
                }
                catch (e) {
                    return null;
                }
            });
        });
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
    }
    salir() {
        //función de cerrar seción y borrar token
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }
    capturarFoto(event) {
        //función que captura la foto
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
        //función del llamado del servicio para subir el sertificado
        try {
            this.loading = true;
            const formularioDeDatos = new FormData();
            formularioDeDatos.append('MyCertificate', this.archivos[0]);
            const foto = this.previsualizacion;
            const token = localStorage.getItem('token');
            this.foto.createsCertificado(token, formularioDeDatos).subscribe((res) => {
                this.loading = false;
                //console.log('Respuesta del servidor', res);
                const correcto = res.data;
                if (correcto === res.data) {
                    this.chec('SE SUBIO EL CERTIFICADO CORRECTAMENTE', 4000);
                }
            }, error => {
                console.log(error);
                const err = error.error.msg;
                if (err === 'ERROR_SUBIR_ARCHIVO') {
                    this.errorl('DEBES SUBIR UNA IMAGEN DE TU CERTIFICADO', 4000);
                }
            });
        }
        catch (e) {
            this.loading = false;
            console.log('ERROR', e);
        }
    }
};
ActufotoPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ActufotoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-actufoto',
        template: _actufoto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_actufoto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActufotoPage);



/***/ }),

/***/ 53893:
/*!*****************************************************************!*\
  !*** ./src/app/pages/certificado/actufoto.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".lacard {\n  border-radius: 1rem;\n  filter: drop-shadow(3px 3px 3px #444);\n}\n\n.texto {\n  text-align: center;\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdHVmb3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EscUNBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxvQ0FBQTtBQUdKOztBQURFO0VBQ0UsZUFBQTtFQUNBLHVDQUFBO0FBSUoiLCJmaWxlIjoiYWN0dWZvdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggM3B4ICM0NDQpO1xyXG59XHJcbi50ZXh0b3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZWx0ZXh0b3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLnRpdHVsb3N7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ05hbnVtIEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 82367:
/*!*****************************************************************!*\
  !*** ./src/app/pages/certificado/actufoto.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<!--Certificado y logueo del usuario boton desplegable -->\r\n<ion-toolbar color=\"light\">\r\n  <ion-title class=\"titulos\">Certificado</ion-title>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"/login\"></ion-back-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n\r\n  <ion-content class=\"fondo\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col sizeMd=\"4\" offsetMd=\"4\">\r\n            <ion-card class=\"lacard\">\r\n                <ion-card-content >\r\n                  <ion-text color=\"primary\" class=\"titulos\">\r\n                    <h1>CERTIFICADO</h1>\r\n                    </ion-text>\r\n                    <!--Especificación de archivo a escanear y subir a la pagina-->\r\n                  <ion-row>\r\n                    <p class=\"texto\" class=\"eltexto\">Debes subir una foto del certificado de constancia de estudio o acta de pocesión.</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <!--Condición para la previsualisación de la foto del certificado-->\r\n                    <div class=\"ion-text-center\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-md-12 col-sm-12\" *ngIf=\"previsualizacion\">\r\n                          <img [src]=\"previsualizacion\" alt=\"\" id=\"foto\">\r\n                        </div>\r\n                        <!--Captura del foto evento Ts-->\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                          <input (change)=\"capturarFoto($event)\" type=\"file\" id=\"boton2\">\r\n                        </div>\r\n                        <!--Función para subir foto a la Base de datos-->\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                          <ion-button type=\"button\" class=\"eltexto\" [disabled]=\"loading\" (click)=\"subirFoto()\" color=\"primary\" class=\"ion-margin-top\" id=\"boton\">\r\n                            {{(loading) ? 'Cargando...' : 'Actualizar'}}\r\n                          </ion-button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ion-row>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_certificado_actufoto_module_ts.js.map