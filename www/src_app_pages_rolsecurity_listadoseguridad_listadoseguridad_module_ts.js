"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rolsecurity_listadoseguridad_listadoseguridad_module_ts"],{

/***/ 63589:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/listadoseguridad/listadoseguridad-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoseguridadPageRoutingModule": () => (/* binding */ ListadoseguridadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _listadoseguridad_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listadoseguridad.page */ 265);




const routes = [
    {
        path: '',
        component: _listadoseguridad_page__WEBPACK_IMPORTED_MODULE_0__.ListadoseguridadPage
    }
];
let ListadoseguridadPageRoutingModule = class ListadoseguridadPageRoutingModule {
};
ListadoseguridadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListadoseguridadPageRoutingModule);



/***/ }),

/***/ 60786:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/listadoseguridad/listadoseguridad.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoseguridadPageModule": () => (/* binding */ ListadoseguridadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _listadoseguridad_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listadoseguridad-routing.module */ 63589);
/* harmony import */ var _listadoseguridad_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listadoseguridad.page */ 265);







let ListadoseguridadPageModule = class ListadoseguridadPageModule {
};
ListadoseguridadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _listadoseguridad_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListadoseguridadPageRoutingModule
        ],
        declarations: [_listadoseguridad_page__WEBPACK_IMPORTED_MODULE_1__.ListadoseguridadPage]
    })
], ListadoseguridadPageModule);



/***/ }),

/***/ 265:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/listadoseguridad/listadoseguridad.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoseguridadPage": () => (/* binding */ ListadoseguridadPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _listadoseguridad_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listadoseguridad.page.html?ngResource */ 92001);
/* harmony import */ var _listadoseguridad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listadoseguridad.page.scss?ngResource */ 58366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ 84935);




//importación de las rutas

//importación de los servicios de la api


let ListadoseguridadPage = class ListadoseguridadPage {
    constructor(router, resentrada, usuarioServicio, socket) {
        this.router = router;
        this.resentrada = resentrada;
        this.usuarioServicio = usuarioServicio;
        this.socket = socket;
    }
    ngOnInit() {
        //llamado de la foto
        this.traerfotol();
        //llamado del token t traer el listado de entrada y salida
        const token = localStorage.getItem('token');
        this.resentrada.listadoentrada(token).subscribe((res) => {
            // console.log(res);
            this.entrada = res.data;
        });
        this.socket.on('server:fototemp', callback => {
            this.entrada = callback;
            // this.entrada.push(callback[0]);
            // this.entrada = callback;
            // console.log(this.entrada);
        });
    }
    salir() {
        //función de cerrar seción
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }
    traerfotol() {
        //función de tarer la foto de los servicios de la api
        const token = localStorage.getItem('token');
        const idImgPerfil = localStorage.getItem('idImgPerfil');
        // console.log('Token -->',token);
        // console.log('imgPer -->',idImgPerfil);
        this.usuarioServicio.traerfotoperfil(token, idImgPerfil).subscribe((res) => {
            //console.log(res.data.url);
            this.url = res.data.url;
        });
    }
};
ListadoseguridadPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__.Socket }
];
ListadoseguridadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-listadoseguridad',
        template: _listadoseguridad_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_listadoseguridad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListadoseguridadPage);



/***/ }),

/***/ 58366:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/listadoseguridad/listadoseguridad.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ".salida {\n  font-size: 40px;\n  background-color: transparent;\n}\n\n.elicono {\n  font-size: 130px;\n}\n\n.lafoto {\n  max-width: 125px;\n  height: 125px;\n  padding: 0.5em;\n  height: 8vh;\n  filter: drop-shadow(3px 4px 4px #444);\n}\n\n.table {\n  width: 100%;\n  text-align: center;\n}\n\n.lacard {\n  border-radius: 1rem;\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.537);\n  margin-top: 50px;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n\n#colorletra {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhZG9zZWd1cmlkYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtBQUdKOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDSSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSx1Q0FBQTtBQUtKOztBQUhFO0VBQ0UsWUFBQTtBQU1KIiwiZmlsZSI6Imxpc3RhZG9zZWd1cmlkYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhbGlkYXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5lbGljb25ve1xyXG4gICAgZm9udC1zaXplOiAxMzBweDtcclxufVxyXG4ubGFmb3Rve1xyXG4gICAgbWF4LXdpZHRoOiAxMjVweDtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgaGVpZ2h0OiA4dmg7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCA0cHggNHB4ICM0NDQpO1xyXG59XHJcblxyXG4udGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sYWNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNTM3KTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLnRpdHVsb3N7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ05hbnVtIEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gICNjb2xvcmxldHJhe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 92001:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/listadoseguridad/listadoseguridad.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-row>\r\n    <ion-col size=\"2\">\r\n      <ion-buttons>\r\n        <ion-menu-button color=\"dark\" menu=\"first\"></ion-menu-button>\r\n        <!--redirección a perfil presionando el nombre del usuario-->\r\n          <ion-button routerLink=\"/perfilseguridad\" expand=\"block\" fill=\"clear\" shape=\"round\" color=\"dark\">\r\n            <!--nombre del usuario-->\r\n          <h5 class=\"eltexto\">{{this.nombre}}</h5>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n    </ion-col>\r\n    <ion-col size=\"1\">\r\n      <!--botón de salida-->\r\n      <button class=\"salida\" (click)=\"salir()\">\r\n        <ion-icon name=\"log-out-outline\" color=\"dark\"></ion-icon>\r\n      </button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-card class=\"lacard\">\r\n          <!--Listado de registros de entrada y salida-->\r\n          <ion-text color=\"primary\" >\r\n            <h1 class=\"titulos\">Listado de Registros</h1>\r\n          </ion-text>\r\n          <div style=\"margin: 30px;\">\r\n            <table class=\"table\" id=\"colorletra\" >\r\n              <!--Elementos a llamar en la lista-->\r\n              <thead>\r\n                <tr>\r\n                  <!--Identificación-->\r\n                  <th scope=\"col\" class=\"eltexto\">Identificación</th>\r\n                  <!--Nombre-->\r\n                  <th scope=\"col\" class=\"eltexto\">Name </th>\r\n                  <!--Registro de entrada-->\r\n                  <th scope=\"col\" class=\"eltexto\">Entrada</th>\r\n                  <!--Registro de salida-->\r\n                  <th scope=\"col\" class=\"eltexto\">Salida</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <!--Datos a llamar-->\r\n                <tr *ngFor=\"let usuario of entrada\">\r\n                  <!--Documento del usuario-->\r\n                  <td class=\"eltexto\">{{usuario.documento}}</td>\r\n                  <!--Nombre del usuario-->\r\n                  <td class=\"eltexto\">{{usuario.name}}</td>\r\n                  <!--Registro ingreso de usuario-->\r\n                  <td *ngIf=\"usuario.createdAt\" class=\"eltexto\">{{usuario.createdAt|date:\"short\"}}</td>\r\n                  <!--Registro salida de usuario-->\r\n                  <td *ngIf=\"usuario.regEnt.length > 0\" class=\"eltexto\">{{usuario.regEnt[0].createdAt|date:\"short\"}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rolsecurity_listadoseguridad_listadoseguridad_module_ts.js.map