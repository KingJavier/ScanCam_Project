"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rolaprendiz_perfilaprendiz_perfilaprendiz_module_ts"],{

/***/ 83026:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/rolaprendiz/perfilaprendiz/perfilaprendiz-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilaprendizPageRoutingModule": () => (/* binding */ PerfilaprendizPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _perfilaprendiz_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfilaprendiz.page */ 76523);




const routes = [
    {
        path: '',
        component: _perfilaprendiz_page__WEBPACK_IMPORTED_MODULE_0__.PerfilaprendizPage
    }
];
let PerfilaprendizPageRoutingModule = class PerfilaprendizPageRoutingModule {
};
PerfilaprendizPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfilaprendizPageRoutingModule);



/***/ }),

/***/ 29122:
/*!***************************************************************************!*\
  !*** ./src/app/pages/rolaprendiz/perfilaprendiz/perfilaprendiz.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilaprendizPageModule": () => (/* binding */ PerfilaprendizPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _perfilaprendiz_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfilaprendiz-routing.module */ 83026);
/* harmony import */ var _perfilaprendiz_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfilaprendiz.page */ 76523);







let PerfilaprendizPageModule = class PerfilaprendizPageModule {
};
PerfilaprendizPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _perfilaprendiz_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilaprendizPageRoutingModule
        ],
        declarations: [_perfilaprendiz_page__WEBPACK_IMPORTED_MODULE_1__.PerfilaprendizPage]
    })
], PerfilaprendizPageModule);



/***/ }),

/***/ 76523:
/*!*************************************************************************!*\
  !*** ./src/app/pages/rolaprendiz/perfilaprendiz/perfilaprendiz.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilaprendizPage": () => (/* binding */ PerfilaprendizPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _perfilaprendiz_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfilaprendiz.page.html?ngResource */ 70670);
/* harmony import */ var _perfilaprendiz_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfilaprendiz.page.scss?ngResource */ 78222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ 84935);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);




//importación de las rutas


//importación de los servicios de la api

let PerfilaprendizPage = class PerfilaprendizPage {
    constructor(//? Implementacion sockets
    socket, router, usuarioServicio) {
        this.socket = socket;
        this.router = router;
        this.usuarioServicio = usuarioServicio;
        //datos traidos del localstorage
        this.nombre = localStorage.getItem('name');
        this.apellido = localStorage.getItem('apellido');
        this.role = localStorage.getItem('role');
        this.correo = localStorage.getItem('email');
        this.telefono = localStorage.getItem('telefono');
        this.documento = localStorage.getItem('documento');
    }
    ngOnInit() {
        //lamado de la foto
        this.traerfotol();
    }
    salir() {
        //función de cerrado de seción
        localStorage.clear();
        this.router.navigate(['login']);
    }
    traerfotol() {
        //función traer foto de los servicios de pai
        const token = localStorage.getItem('token');
        const idImgPerfil = localStorage.getItem('idImgPerfil');
        //console.log('Token -->',token);
        //console.log('imgPer -->',idImgPerfil);
        this.usuarioServicio.traerfotoperfil(token, idImgPerfil).subscribe((res) => {
            //console.log(res.data.url);
            this.url = res.data.url;
        });
        this.socket.on('server:url-img', (dat) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('esto es la url', dat);
            this.url = dat;
            // console.log(this.url);
        }));
    }
};
PerfilaprendizPage.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__.Socket },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService }
];
PerfilaprendizPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-perfilaprendiz',
        template: _perfilaprendiz_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_perfilaprendiz_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PerfilaprendizPage);



/***/ }),

/***/ 78222:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/rolaprendiz/perfilaprendiz/perfilaprendiz.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = ".salida {\n  font-size: 40px;\n  background-color: transparent;\n}\n\n.elicono {\n  font-size: 130px;\n}\n\n.lafoto {\n  padding: 0.5em;\n  height: 8vh;\n  filter: drop-shadow(3px 4px 4px #444);\n}\n\n.lacard {\n  border-radius: 1rem;\n  filter: drop-shadow(3px 3px 3px #444);\n  margin-top: 80px;\n}\n\n.lafoto2 {\n  width: 100%;\n  filter: drop-shadow(3px 4px 4px #444);\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbGFwcmVuZGl6LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7QUFHSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQUlKOztBQURBO0VBQ0ksV0FBQTtFQUNBLHFDQUFBO0FBSUo7O0FBRkE7RUFDSSxvQ0FBQTtBQUtKOztBQUZFO0VBQ0UsZUFBQTtFQUNBLHVDQUFBO0FBS0oiLCJmaWxlIjoicGVyZmlsYXByZW5kaXoucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhbGlkYXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5lbGljb25ve1xyXG4gICAgZm9udC1zaXplOiAxMzBweDtcclxufVxyXG4ubGFmb3Rve1xyXG4gICAgcGFkZGluZzogLjVlbTtcclxuICAgIGhlaWdodDogOHZoO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggNHB4IDRweCAjNDQ0KTtcclxufVxyXG4ubGFjYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCAzcHggIzQ0NCk7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4ubGFmb3RvMntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggNHB4IDRweCAjNDQ0KTtcclxufVxyXG4uZWx0ZXh0b3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC50aXR1bG9ze1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 70670:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/rolaprendiz/perfilaprendiz/perfilaprendiz.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-row>\r\n    <ion-col size=\"2\">\r\n      <ion-buttons>\r\n        <ion-menu-button color=\"dark\" menu=\"first\"></ion-menu-button>\r\n        <!--redirección a perfil presionando el nombre del usuario-->\r\n        <ion-button routerLink=\"/perfilaprendiz\" expand=\"block\" fill=\"clear\" shape=\"round\" color=\"dark\">\r\n          <!--nombre del usuario-->\r\n          <h5 class=\"eltexto\">{{this.nombre}}</h5>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n    </ion-col>\r\n    <ion-col size=\"1\">\r\n      <!--botón de salida-->\r\n      <button class=\"salida\" (click)=\"salir()\">\r\n        <ion-icon name=\"log-out-outline\" color=\"dark\"></ion-icon>\r\n      </button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-toolbar>\r\n\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid>\r\n    <ion-card class=\"lacard\">\r\n      <ion-row>\r\n\r\n        <!--Llamado de la imagen de la base de datos Mostrada en una card -->\r\n        <ion-col size-md=\"4\" size=\"12\">\r\n          <ion-col size=\"6\" size-md=\"4\" size-lg=\"3\" *ngIf=\"this.url\">\r\n            <ion-card\r\n              style=\"background-color: rgba(221, 221, 221, 0.707); box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.275); border-radius: 10px;\">\r\n                <ion-card-content style=\"padding: 0;\">\r\n                  <!--Imagen de la base de datos-->\r\n                  <img [src]=\"this.url\" class=\"lafoto2\" alt=\"\" style=\"object-fit: cover; height: 60vh;  border-radius: 10px; \" id=\"foto\"/>\r\n                </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n          <!--cambio de foto de perfil-->\r\n          <div class=\"ion-text-center\">\r\n            <ion-button color=\"primary\"  class=\"eltexto\" class=\"ion-margin-top\" [routerLink]=\"['/actufotoaprendiz']\" >\r\n              Cambiar Foto de Perfil\r\n            </ion-button>\r\n          </div>\r\n\r\n          <!--Actualización de caetificado de estudio-->\r\n          <div class=\"ion-text-center\">\r\n            <ion-button color=\"primary\" class=\"ion-margin-top\"  class=\"eltexto\" [routerLink]=\"['/actufoto']\" >\r\n              Actualizar Certificado\r\n            </ion-button>\r\n          </div>\r\n\r\n\r\n        </ion-col>\r\n        <!--Formulario de  perfil aprendiz -->\r\n        <ion-col size-md=\"8\" size=\"12\">\r\n          <ion-item class=\"ion-margin-vertical\">\r\n            <!--Nombre de usuario-->\r\n            <ion-label position=\"floating\" class=\"eltexto\"><ion-icon name=\"person-circle-outline\" color=\"primary\"></ion-icon> Nombre:</ion-label>\r\n            <!--Llamar el nombre del usuario de la base de datos-->\r\n            <h5 class=\"eltexto\">{{this.nombre}}</h5>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"ion-margin-vertical\">\r\n            <!--Nombre de usuario-->\r\n            <ion-label position=\"floating\" class=\"eltexto\"><ion-icon name=\"person-circle-outline\" color=\"primary\"></ion-icon > Apellido:</ion-label>\r\n            <!--Llamar el nombre del usuario de la base de datos-->\r\n            <h5 class=\"eltexto\">{{this.apellido}}</h5>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <!--Correo electronico Gmail-->\r\n            <ion-label position=\"floating\" class=\"eltexto\"> <ion-icon name=\"mail-outline\" color=\"primary\"></ion-icon> Correo:</ion-label>\r\n            <!--Llamado de correo electronico user-->\r\n            <h5 class=\"eltexto\">{{this.correo}}</h5>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <!--teléfono-->\r\n            <ion-label position=\"floating\" class=\"eltexto\"><ion-icon name=\"call-outline\" color=\"primary\"></ion-icon> Telefono:</ion-label>\r\n            <!--llamado de teléfono-->\r\n            <h5 class=\"eltexto\">{{this.telefono}}</h5>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"ion-margin-vertical\">\r\n            <!--Documento C.C user-->\r\n            <ion-label position=\"floating\" class=\"eltexto\"><ion-icon name=\"document-text-outline\" color=\"primary\" ></ion-icon> Documento:</ion-label>\r\n            <!--Llamado de documento de la base de datos -->\r\n            <h5 class=\"eltexto\">{{this.documento}}</h5>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"ion-margin-vertical\">\r\n            <!--especificacón del rol-->\r\n            <ion-label position=\"floating\" class=\"eltexto\"><ion-icon name=\"layers-outline\" color=\"primary\"></ion-icon>  Rol:</ion-label>\r\n            <!--Llamado del rol estipulado-->\r\n            <h5 class=\"eltexto\">{{this.role}}</h5>\r\n          </ion-item>\r\n\r\n          <div class=\"ion-text-center\">\r\n            <!--Cambio de contraseña-->\r\n            <ion-button color=\"primary\" class=\"ion-margin-top\" class=\"eltexto\" [routerLink]=\"['/forgot-password']\" >\r\n              Cambiar Contraseña\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-card>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rolaprendiz_perfilaprendiz_perfilaprendiz_module_ts.js.map