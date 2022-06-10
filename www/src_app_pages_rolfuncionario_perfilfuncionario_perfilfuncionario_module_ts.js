"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rolfuncionario_perfilfuncionario_perfilfuncionario_module_ts"],{

/***/ 75807:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/rolfuncionario/perfilfuncionario/perfilfuncionario-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilfuncionarioPageRoutingModule": () => (/* binding */ PerfilfuncionarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _perfilfuncionario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfilfuncionario.page */ 88921);




const routes = [
    {
        path: '',
        component: _perfilfuncionario_page__WEBPACK_IMPORTED_MODULE_0__.PerfilfuncionarioPage
    }
];
let PerfilfuncionarioPageRoutingModule = class PerfilfuncionarioPageRoutingModule {
};
PerfilfuncionarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfilfuncionarioPageRoutingModule);



/***/ }),

/***/ 37319:
/*!************************************************************************************!*\
  !*** ./src/app/pages/rolfuncionario/perfilfuncionario/perfilfuncionario.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilfuncionarioPageModule": () => (/* binding */ PerfilfuncionarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _perfilfuncionario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfilfuncionario-routing.module */ 75807);
/* harmony import */ var _perfilfuncionario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfilfuncionario.page */ 88921);







let PerfilfuncionarioPageModule = class PerfilfuncionarioPageModule {
};
PerfilfuncionarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _perfilfuncionario_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilfuncionarioPageRoutingModule
        ],
        declarations: [_perfilfuncionario_page__WEBPACK_IMPORTED_MODULE_1__.PerfilfuncionarioPage]
    })
], PerfilfuncionarioPageModule);



/***/ }),

/***/ 88921:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/rolfuncionario/perfilfuncionario/perfilfuncionario.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilfuncionarioPage": () => (/* binding */ PerfilfuncionarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _perfilfuncionario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfilfuncionario.page.html?ngResource */ 84155);
/* harmony import */ var _perfilfuncionario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfilfuncionario.page.scss?ngResource */ 3601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ 84935);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);




//importación de las rutas


//importación de los servicios de api

let PerfilfuncionarioPage = class PerfilfuncionarioPage {
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
PerfilfuncionarioPage.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__.Socket },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService }
];
PerfilfuncionarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-perfilfuncionario',
        template: _perfilfuncionario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_perfilfuncionario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PerfilfuncionarioPage);



/***/ }),

/***/ 3601:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/rolfuncionario/perfilfuncionario/perfilfuncionario.page.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = ".salida {\n  font-size: 40px;\n  background-color: transparent;\n}\n\n.elicono {\n  font-size: 130px;\n}\n\n.lafoto {\n  padding: 0.5em;\n  height: 8vh;\n  filter: drop-shadow(3px 4px 4px #444);\n}\n\n.lacard {\n  border-radius: 1rem;\n  filter: drop-shadow(3px 3px 3px #444);\n  margin-top: 80px;\n}\n\n.lafoto2 {\n  margin-top: 50px;\n  margin-left: 50px;\n  width: 65%;\n  padding: 0.5em;\n  filter: drop-shadow(3px 4px 4px #444);\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbGZ1bmNpb25hcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7QUFHSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQUlKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7QUFJSjs7QUFGQTtFQUNJLG9DQUFBO0FBS0o7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsdUNBQUE7QUFNRiIsImZpbGUiOiJwZXJmaWxmdW5jaW9uYXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FsaWRhe1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmVsaWNvbm97XHJcbiAgICBmb250LXNpemU6IDEzMHB4O1xyXG59XHJcbi5sYWZvdG97XHJcbiAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgaGVpZ2h0OiA4dmg7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCA0cHggNHB4ICM0NDQpO1xyXG59XHJcbi5sYWNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDNweCAjNDQ0KTtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuXHJcbi5sYWZvdG8ye1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCA0cHggNHB4ICM0NDQpO1xyXG59XHJcbi5lbHRleHRve1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi50aXR1bG9ze1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LWZhbWlseTogJ05hbnVtIEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 84155:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/rolfuncionario/perfilfuncionario/perfilfuncionario.page.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-row>\r\n    <ion-col size=\"2\">\r\n      <ion-buttons>\r\n        <ion-menu-button color=\"dark\" menu=\"first\"></ion-menu-button>\r\n        <!--redirección a perfil presionando el nombre del usuario-->\r\n        <ion-button routerLink=\"/perfilfuncionario\" expand=\"block\" fill=\"clear\" shape=\"round\" color=\"dark\">\r\n          <!--nombre del usuario-->\r\n          <h5 class=\"eltexto\">{{this.nombre}}</h5>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n    </ion-col>\r\n    <ion-col size=\"1\">\r\n      <!--botón de salida-->\r\n      <button class=\"salida\" (click)=\"salir()\">\r\n        <ion-icon name=\"log-out-outline\" color=\"dark\"></ion-icon>\r\n      </button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-toolbar>\r\n\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid>\r\n    <ion-card class=\"lacard\">\r\n      <ion-row>\r\n\r\n        <!--Llamado de la imagen de la base de datos Mostrada en una card -->\r\n        <ion-col size-md=\"4\" size=\"12\">\r\n          <ion-col size=\"6\" size-md=\"4\" size-lg=\"3\" *ngIf=\"this.url\">\r\n            <ion-card\r\n              style=\"background-color: rgba(221, 221, 221, 0.707); box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.275); border-radius: 10px;\">\r\n                <ion-card-content style=\"padding: 0;\">\r\n                  <!--Imagen de la base de datos-->\r\n                  <img [src]=\"this.url\" class=\"lafoto\" alt=\"\" style=\"object-fit: cover; height: 60vh;  border-radius: 10px; \" id=\"foto\"/>\r\n                </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n          <!--cambio de foto de perfil-->\r\n          <div class=\"ion-text-center\">\r\n            <ion-button color=\"primary\" class=\"ion-margin-top\" class=\"eltexto\" [routerLink]=\"['/actufotofuncionario']\" >\r\n              Cambiar Foto de Perfil\r\n            </ion-button>\r\n          </div>\r\n\r\n          <!--Actualización de caetificado de estudio-->\r\n          <div class=\"ion-text-center\">\r\n            <ion-button color=\"primary\" class=\"ion-margin-top\"  class=\"eltexto\"[routerLink]=\"['/actufoto']\" >\r\n              Actualizar Certificado\r\n            </ion-button>\r\n          </div>\r\n\r\n\r\n        </ion-col>\r\n        <!--Formulario de  perfil funcionario-->\r\n        <ion-col size-md=\"8\" size=\"12\">\r\n          <ion-item class=\"ion-margin-vertical\"><!--Nombre de usuario-->\r\n            <ion-label position=\"floating\" class=\"eltexto\"><ion-icon name=\"person-circle-outline\" color=\"primary\"></ion-icon> Nombre:</ion-label>\r\n            <!--Llamar el nombre del usuario de la base de datos-->\r\n            <h5 class=\"eltexto\">{{this.nombre}}</h5>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"ion-margin-vertical\">\r\n            <!--Nombre de usuario-->\r\n            <ion-label position=\"floating\" class=\"eltexto\"><ion-icon name=\"person-circle-outline\" color=\"primary\"></ion-icon > Apellido:</ion-label>\r\n            <!--Llamar el nombre del usuario de la base de datos-->\r\n            <h5 class=\"eltexto\">{{this.apellido}}</h5>\r\n          </ion-item>\r\n\r\n          <ion-item><!--Correo electronico Gmail-->\r\n            <ion-label position=\"floating\" class=\"eltexto\"> <ion-icon name=\"mail-outline\" color=\"primary\"></ion-icon> Correo:</ion-label>\r\n            <!--Llamado de correo electronico user-->\r\n            <h5 class=\"eltexto\">{{this.correo}}</h5>\r\n          </ion-item>\r\n\r\n          <ion-item><!--teléfono-->\r\n            <ion-label position=\"floating\" class=\"eltexto\"><ion-icon name=\"call-outline\" color=\"primary\"></ion-icon> Telefono:</ion-label>\r\n            <!--llamado de teléfono-->\r\n            <h5 class=\"eltexto\">{{this.telefono}}</h5>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"ion-margin-vertical\"><!--Documento C.C user-->\r\n            <ion-label position=\"floating\" class=\"eltexto\"><ion-icon name=\"document-text-outline\" color=\"primary\" ></ion-icon> Documento:</ion-label>\r\n            <!--Llamado de documento de la base de datos -->\r\n            <h5 class=\"eltexto\">{{this.documento}}</h5>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"ion-margin-vertical\"><!--especificacón del rol-->\r\n            <ion-label position=\"floating\" class=\"eltexto\"><ion-icon name=\"layers-outline\" color=\"primary\"></ion-icon>  Rol:</ion-label>\r\n            <!--Llamado del rol estipulado-->\r\n            <h5 class=\"eltexto\">{{this.role}}</h5>\r\n          </ion-item>\r\n\r\n          <div class=\"ion-text-center\">\r\n             <!--Cambio de contraseña-->\r\n            <ion-button color=\"primary\" class=\"eltexto\" class=\"ion-margin-top\" [routerLink]=\"['/forgot-password']\" >\r\n              Cambiar Contraseña\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-card>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rolfuncionario_perfilfuncionario_perfilfuncionario_module_ts.js.map