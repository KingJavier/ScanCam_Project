"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rolsecurity_rolseguridad_rolseguridad_module_ts"],{

/***/ 32473:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/rolseguridad/rolseguridad-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolseguridadPageRoutingModule": () => (/* binding */ RolseguridadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _rolseguridad_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rolseguridad.page */ 75850);




const routes = [
    {
        path: '',
        component: _rolseguridad_page__WEBPACK_IMPORTED_MODULE_0__.RolseguridadPage
    }
];
let RolseguridadPageRoutingModule = class RolseguridadPageRoutingModule {
};
RolseguridadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RolseguridadPageRoutingModule);



/***/ }),

/***/ 58363:
/*!***********************************************************************!*\
  !*** ./src/app/pages/rolsecurity/rolseguridad/rolseguridad.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolseguridadPageModule": () => (/* binding */ RolseguridadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _rolseguridad_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rolseguridad-routing.module */ 32473);
/* harmony import */ var _rolseguridad_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rolseguridad.page */ 75850);







let RolseguridadPageModule = class RolseguridadPageModule {
};
RolseguridadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _rolseguridad_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolseguridadPageRoutingModule
        ],
        declarations: [_rolseguridad_page__WEBPACK_IMPORTED_MODULE_1__.RolseguridadPage]
    })
], RolseguridadPageModule);



/***/ }),

/***/ 75850:
/*!*********************************************************************!*\
  !*** ./src/app/pages/rolsecurity/rolseguridad/rolseguridad.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolseguridadPage": () => (/* binding */ RolseguridadPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _rolseguridad_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rolseguridad.page.html?ngResource */ 938);
/* harmony import */ var _rolseguridad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rolseguridad.page.scss?ngResource */ 10888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);




//importación de las rutas

//importación de los servicios de la api


let RolseguridadPage = class RolseguridadPage {
    constructor(router, usuarioServicio, toastController) {
        this.router = router;
        this.usuarioServicio = usuarioServicio;
        this.toastController = toastController;
        //llamdo del nombre del localstorage
        this.nombre = localStorage.getItem('name');
    }
    alert(mensaje, duracion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            //función que hace el llamado de una alerta sobre un error
            const toast = yield this.toastController.create({
                message: mensaje,
                color: 'warning',
                duration: duracion,
            });
            toast.present();
        });
    }
    ngOnInit() {
        //llamdo de la foto
        //this.traerfotol();
        this.numFotosAzure();
    }
    numFotosAzure() {
        const token = localStorage.getItem('token');
        this.usuarioServicio.totalfoto(token).subscribe((res) => {
            const num = res;
            if (num < 5) {
                this.alert('POR FAVOR ENTRENAR LA MAQUINA', 4000);
            }
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
        //console.log('Token -->',token);
        //console.log('imgPer -->',idImgPerfil);
        this.usuarioServicio.traerfotoperfil(token, idImgPerfil).subscribe((res) => {
            //console.log(res.data.url);
            this.url = res.data.url;
        });
    }
};
RolseguridadPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
RolseguridadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-rolseguridad',
        template: _rolseguridad_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_rolseguridad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RolseguridadPage);



/***/ }),

/***/ 10888:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/rolseguridad/rolseguridad.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".salida {\n  font-size: 40px;\n  background-color: transparent;\n}\n\n.elicono {\n  font-size: 130px;\n}\n\n.lafoto {\n  padding: 0.5em;\n  height: 8vh;\n  filter: drop-shadow(3px 4px 4px #444);\n}\n\n.lacard {\n  border-radius: 1rem;\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.537);\n}\n\n.ion-avatar {\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n}\n\n.titulos {\n  text-align: center;\n  font-weight: bold;\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n\n.titulo {\n  text-align: center;\n  font-weight: bold;\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n  margin: 20px;\n}\n\n#icono {\n  background-color: blue;\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.eltextos {\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbHNlZ3VyaWRhZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0FBR0o7O0FBQUE7RUFDSSxtQkFBQTtFQUNBLDhDQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBSUo7O0FBREE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0ksZUFBQTtFQUNBLHVDQUFBO0FBSVI7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0ksZUFBQTtFQUNBLHVDQUFBO0VBQ0osWUFBQTtBQUtKOztBQUZFO0VBQ0ksc0JBQUE7QUFLTjs7QUFGRTtFQUNFLG9DQUFBO0FBS0o7O0FBSEU7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7QUFNSiIsImZpbGUiOiJyb2xzZWd1cmlkYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhbGlkYXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5lbGljb25ve1xyXG4gICAgZm9udC1zaXplOiAxMzBweDtcclxufVxyXG4ubGFmb3Rve1xyXG4gICAgcGFkZGluZzogLjVlbTtcclxuICAgIGhlaWdodDogOHZoO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggNHB4IDRweCAjNDQ0KTtcclxufVxyXG4gXHJcbi5sYWNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNTM3KTtcclxufVxyXG4uaW9uLWF2YXRhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4udGl0dWxvc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTmFudW0gR290aGljJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLnRpdHVsb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTmFudW0gR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICB9XHJcblxyXG4gICNpY29ub3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICB9XHJcblxyXG4gIC5lbHRleHRve1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuZWx0ZXh0b3N7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 938:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/rolseguridad/rolseguridad.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-row>\r\n    <ion-col size=\"2\">\r\n      <ion-buttons>\r\n        <ion-menu-button color=\"dark\" menu=\"first\"></ion-menu-button>\r\n        <!--Redirigir a perfil seguridad-->\r\n        <ion-button\r\n          routerLink=\"/perfilseguridad\"\r\n          expand=\"block\"\r\n          fill=\"clear\"\r\n          shape=\"round\"\r\n          color=\"dark\"\r\n        >\r\n          <!--Llamado del nombre almacenado en la base de datos -->\r\n          <h5 class=\"eltexto\">{{this.nombre}}</h5>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"9\"> </ion-col>\r\n    <ion-col size=\"1\">\r\n      <!--Salida de la sesion-->\r\n      <button class=\"salida\" (click)=\"salir()\">\r\n        <ion-icon name=\"log-out-outline\" color=\"dark\"></ion-icon>\r\n      </button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-toolbar>\r\n\r\n<ion-content id=\"texto\" class=\"fondo\">\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size-md=\"4\" size-lg=\"6\">\r\n        <ion-card class=\"lacard\">\r\n          <div style=\"margin: 30px\">\r\n            <!--Registro para invitado-->\r\n            <ion-text color=\"primary\">\r\n              <h1 class=\"ion-text-center\" class=\"titulos\">\r\n                Registrar invitado\r\n              </h1>\r\n            </ion-text>\r\n            <!--Especificación de acción de este apartado-->\r\n            <h2 class=\"eltexto\">\r\n              En este apartado podra registrar usuarios del rol invitado por\r\n              medio de un formulario\r\n            </h2>\r\n            <div class=\"ion-text-center\">\r\n              <!--Botón para registrar-->\r\n              <ion-button\r\n                color=\"primary\"\r\n                class=\"ion-margin-top\"\r\n                class=\"eltexto\"\r\n                routerLink=\"/registroinvitado\"\r\n              >\r\n                Registrar\r\n              </ion-button>\r\n            </div>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size-md=\"4\" size-lg=\"6\">\r\n        <ion-card class=\"lacard\">\r\n          <!--Listado con registros de entrada y salida de los usuarios-->\r\n          <div style=\"margin: 30px\">\r\n            <ion-text color=\"primary\">\r\n              <h1 class=\"ion-text-center\" class=\"titulos\">Listado</h1>\r\n            </ion-text>\r\n            <!--Especificación de acción de este apartado-->\r\n            <h2 class=\"eltexto\">\r\n              Encontrara una lista en la cual estan los usuarios con su\r\n              respectivo registro de entrada y salida\r\n            </h2>\r\n            <div class=\"ion-text-center\">\r\n              <!--Botón para vista base de datos-->\r\n              <ion-button\r\n                color=\"primary\"\r\n                class=\"ion-margin-top\"\r\n                class=\"eltexto\"\r\n                routerLink=\"/listadoseguridad\"\r\n              >\r\n                Vista base de datos\r\n              </ion-button>\r\n            </div>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size-md=\"4\" size-md=\"6\">\r\n        <ion-card class=\"lacard\">\r\n          <div style=\"margin: 30px\">\r\n            <!--Camara  para escanear a los usuarios-->\r\n            <ion-text color=\"primary\">\r\n              <h1 class=\"ion-text-center\" class=\"titulos\">\r\n                Camara Escaner Entrada\r\n              </h1>\r\n            </ion-text>\r\n            <!--Especificación de acción de este apartado-->\r\n            <h2 class=\"eltexto\">\r\n              En este apartado podra registrar el ingreso de los usuarios por\r\n              medio del reconocimiento facial\r\n            </h2>\r\n            <div class=\"ion-text-center\">\r\n              <!--Botón para escanear-->\r\n              <ion-button\r\n                color=\"primary\"\r\n                class=\"eltexto\"\r\n                class=\"ion-margin-top\"\r\n                routerLink=\"/camaraescaner\"\r\n              >\r\n                Escanear\r\n              </ion-button>\r\n            </div>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size-md=\"4\" size-lg=\"6\">\r\n        <ion-card class=\"lacard\">\r\n          <div style=\"margin: 30px\">\r\n            <!--Camara  para escanear a los usuarios-->\r\n            <ion-text color=\"primary\">\r\n              <h1 class=\"ion-text-center\" class=\"titulos\">\r\n                Camara Escaner Salida\r\n              </h1>\r\n            </ion-text>\r\n            <!--Especificación de acción de este apartado-->\r\n            <h2 class=\"eltexto\">\r\n              En este apartado podra registrar la salida de los usuarios por\r\n              medio del reconocimiento facial\r\n            </h2>\r\n            <div class=\"ion-text-center\">\r\n              <!--Botón para escanear-->\r\n              <ion-button\r\n                color=\"primary\"\r\n                class=\"eltexto\"\r\n                class=\"ion-margin-top\"\r\n                routerLink=\"/camaraescanersalida\"\r\n              >\r\n                Escanear\r\n              </ion-button>\r\n            </div>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-col size=\"12\">\r\n      <!--definición de acción a seguir-->\r\n      <div class=\"ion-text-center\">\r\n        <h2 class=\"eltexto\">\r\n          En este apartado encontrara el instructivo para entrenar la\r\n          identificación del reconocimiento facial.\r\n        </h2>\r\n      </div>\r\n      <ion-row>\r\n        <ion-col size=\"collaps\" size-lg=\"3\" sizeXs=\"collaps\"></ion-col>\r\n        <ion-col ion-col size-sm=\"12\" size-lg=\"6\">\r\n          <ion-card class=\"lacard\">\r\n            <ion-card-header>\r\n              <!--nombre de ubicación-->\r\n              <ion-card-title class=\"ion-text-center\"\r\n                ><h1 style=\"margin: 35px\" class=\"eltexto\">\r\n                  Frontal\r\n                </h1></ion-card-title\r\n              >\r\n              <ion-card-subtitle class=\"ion-text-center\"\r\n                ><h2 class=\"eltexto\">\r\n                  Ubicación requerida para la foto\r\n                </h2></ion-card-subtitle\r\n              >\r\n            </ion-card-header>\r\n            <!--Explicación de posición para captura de -imagen-->\r\n            <ion-card-content>\r\n              <h3 class=\"eltexto\">\r\n                Ubiquese frente a la camara como se muestra en la imagen de\r\n                ejemplo a continuacion.\r\n              </h3>\r\n            </ion-card-content>\r\n            <!--imagenuno-->\r\n            <ion-col size=\"12\" class=\"ion-avatar\">\r\n              <img\r\n                width=\"300rem\"\r\n                src=\"../../../../assets/Imagenes/costado.PNG\"\r\n                alt=\"cara_central\"\r\n                style=\"text-align: center\"\r\n              />\r\n            </ion-col>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"collaps\" size-lg=\"3\" sizeXs=\"collaps\"></ion-col>\r\n\r\n        <ion-col size-sm=\"12\" size-lg=\"3\">\r\n          <ion-card class=\"lacard\">\r\n            <ion-card-header>\r\n              <!--nombre de ubicación-->\r\n              <ion-card-title class=\"ion-text-center\">\r\n                <h1 class=\"eltextos\">Lateral Izquierdo</h1>\r\n              </ion-card-title>\r\n              <ion-card-subtitle class=\"ion-text-center\">\r\n                <h2 class=\"eltexto\">Ubicación requerida para la foto</h2>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n            <!--Explicación de posición para captura de -imagen-->\r\n            <ion-card-content>\r\n              <h3 class=\"eltexto\">\r\n                Ubique su lateral izquierdo frente a la camara como se muestra\r\n                en la imagen de ejemplo a continuacion.\r\n              </h3>\r\n            </ion-card-content>\r\n            <!--imagendos-->\r\n            <ion-col size=\"12\" class=\"ion-avatar\">\r\n              <img\r\n                width=\"300rem\"\r\n                src=\"../../../../assets/Imagenes/costado.PNG\"\r\n                alt=\"\"\r\n                style=\"text-align: center\"\r\n              />\r\n            </ion-col>\r\n          </ion-card>\r\n        </ion-col>\r\n\r\n        <ion-col size-sm=\"12\" size-lg=\"3\">\r\n          <ion-card class=\"lacard\">\r\n            <ion-card-header>\r\n              <!--nombre de ubicación-->\r\n              <ion-card-title class=\"ion-text-center\">\r\n                <h1 class=\"eltexto\">Lateral Derecho</h1>\r\n              </ion-card-title>\r\n              <ion-card-subtitle class=\"ion-text-center\">\r\n                <h2 class=\"eltexto\">Ubicación requerida para la foto</h2>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n            <!--Explicación de posición para captura de -imagen-->\r\n            <ion-card-content>\r\n              <h3 class=\"eltexto\">\r\n                Ubique su lateral derecho frente a la camara como se muestra en\r\n                la imagen de ejemplo a continuacion.\r\n              </h3>\r\n            </ion-card-content>\r\n            <!--imagentres-->\r\n            <ion-col size=\"12\" class=\"ion-avatar\">\r\n              <img\r\n                width=\"300rem\"\r\n                src=\"../../../../assets/Imagenes/costado2.png\"\r\n                alt=\"\"\r\n                style=\"text-align: center\"\r\n              />\r\n            </ion-col>\r\n          </ion-card>\r\n        </ion-col>\r\n\r\n        <ion-col size-sm=\"12\" size-md=\"4\" size-lg=\"3\">\r\n          <ion-card class=\"lacard\">\r\n            <ion-card-header>\r\n              <ion-card-title class=\"ion-text-center\">\r\n                <h1 class=\"eltexto\">3/4 Izquierdo</h1>\r\n              </ion-card-title>\r\n              <ion-card-subtitle class=\"ion-text-center\">\r\n                <h2 class=\"eltexto\">Ubicación requerida para la foto</h2>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              <h3 class=\"eltexto\">\r\n                Ubique su lado 3/4 izquierdo frente a la camara como se muestra\r\n                en la imagen de ejemplo a continuacion.\r\n              </h3>\r\n            </ion-card-content>\r\n            <!--imagencuatro-->\r\n            <ion-col size=\"12\" class=\"ion-avatar\">\r\n              <img\r\n                width=\"300rem\"\r\n                src=\"../../../../assets/Imagenes/mujertrescuartos1.PNG\"\r\n                alt=\"\"\r\n                style=\"text-align: center\"\r\n              />\r\n            </ion-col>\r\n          </ion-card>\r\n        </ion-col>\r\n\r\n        <ion-col size-sm=\"12\" size-md=\"4\" size-lg=\"3\">\r\n          <ion-card class=\"lacard\">\r\n            <ion-card-header>\r\n              <ion-card-title class=\"ion-text-center\">\r\n                <h1 class=\"eltexto\">3/4 Derecho</h1>\r\n              </ion-card-title>\r\n              <ion-card-subtitle class=\"ion-text-center\">\r\n                <h2 class=\"eltexto\">Ubicación requerida para la foto</h2>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              <h3 class=\"eltexto\">\r\n                Ubique su lado 3/4 derecho frente a la camara como se muestra en\r\n                la imagen de ejemplo a continuacion.\r\n              </h3>\r\n            </ion-card-content>\r\n            <ion-col size=\"12\" class=\"ion-avatar\">\r\n              <img\r\n                width=\"300rem\"\r\n                src=\"../../../../assets/Imagenes/mujertrescuartos2.png\"\r\n                alt=\"\"\r\n                style=\"text-align: center\"\r\n              />\r\n            </ion-col>\r\n            <!--imagencinco-->\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n\r\n    <!--boton para ir a entrenamiento-->\r\n\r\n    <div class=\"ion-text-center\">\r\n      <h2 class=\"eltexto\">\r\n        Al dar click en el siguiente boton lo redireccionara a una vista para\r\n        poder ejecutar el entrenamiento.\r\n      </h2>\r\n    </div>\r\n\r\n    <ion-col size=\"6\">\r\n      <ion-row class=\"ion-text-center\">\r\n        <ion-col size-lg=\"5\" size-sm=\"\"></ion-col>\r\n        <ion-col size-lg=\"2\" size-md=\"6\" size-sm=\"12\">\r\n          <ion-card color=\"primary\" class=\"lacard\">\r\n            <button routerLink=\"/entrenarmaquina\">\r\n              <ion-icon name=\"camera\" class=\"elicono\"> Siguiente</ion-icon>\r\n            </button>\r\n          </ion-card>\r\n        </ion-col>\r\n\r\n        <ion-col size-lg=\"5\" size-sm=\"\"></ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rolsecurity_rolseguridad_rolseguridad_module_ts.js.map