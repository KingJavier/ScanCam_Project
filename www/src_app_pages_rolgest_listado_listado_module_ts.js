"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rolgest_listado_listado_module_ts"],{

/***/ 57662:
/*!*****************************************************************!*\
  !*** ./src/app/pages/rolgest/listado/listado-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoPageRoutingModule": () => (/* binding */ ListadoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _listado_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listado.page */ 72448);




const routes = [
    {
        path: '',
        component: _listado_page__WEBPACK_IMPORTED_MODULE_0__.ListadoPage
    }
];
let ListadoPageRoutingModule = class ListadoPageRoutingModule {
};
ListadoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListadoPageRoutingModule);



/***/ }),

/***/ 49587:
/*!*********************************************************!*\
  !*** ./src/app/pages/rolgest/listado/listado.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoPageModule": () => (/* binding */ ListadoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _listado_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listado-routing.module */ 57662);
/* harmony import */ var _listado_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listado.page */ 72448);







let ListadoPageModule = class ListadoPageModule {
};
ListadoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _listado_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListadoPageRoutingModule
        ],
        declarations: [_listado_page__WEBPACK_IMPORTED_MODULE_1__.ListadoPage]
    })
], ListadoPageModule);



/***/ }),

/***/ 72448:
/*!*******************************************************!*\
  !*** ./src/app/pages/rolgest/listado/listado.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoPage": () => (/* binding */ ListadoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _listado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listado.page.html?ngResource */ 14338);
/* harmony import */ var _listado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listado.page.scss?ngResource */ 58708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ 84935);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);




//importación de las rutas

//importación de los servicios de la api


//importacion de toaskcontroller

let ListadoPage = class ListadoPage {
    constructor(
    //inyecta la importación de las rutas
    router, 
    //inyecta la importación de los servicios de la api
    usuarioservicio, socket, 
    //inyecta la importación de tosatcontroller
    toastController) {
        this.router = router;
        this.usuarioservicio = usuarioservicio;
        this.socket = socket;
        this.toastController = toastController;
        //llamdo del nombre del localstorage
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
        //llamado de la foto
        // this.traerfotol();
        //llamdo del token del localstorage
        const token = localStorage.getItem('token');
        this.usuarioservicio.listadogest(token).subscribe((res) => {
            this.usuarios = res.users;
        });
        this.socket.on('server:newuser', callback => {
            this.usuarios.push(callback);
            // console.log('callback', callback);
            // console.log('this.usuarios', this.usuarios);
        });
        this.socket.on('server:newuserseguridad', callback => {
            this.usuarios.push(callback);
            // console.log('callback', callback);
            // console.log('this.usuarios', this.usuarios);
        });
    }
    cambiarrole(value, id) {
        //función que trae el servicio de cambiar el rol
        //console.log(value);
        //console.log(id);
        const role = {
            role: value
        };
        const token = localStorage.getItem('token');
        this.usuarioservicio.actualizarrole(token, id, role).subscribe((res) => {
            const correcto = res.data;
            if (correcto === res.data) {
                this.chec('CAMBIO EXITOSO', 2000);
            }
        }, error => {
            console.log(error);
            const err = error.error.msg;
            if (err === 'ERROR_SUBIR_ARCHIVO') {
                this.errorl('ERROR ACTULIZANDO USUARIO', 4000);
            }
        });
        // this.socket.emit('cliente:cambiar-role', id);
    }
    activar(id) {
        //función qye trae el servicio de activar un usuario
        //console.log(id);
        const token = localStorage.getItem('token');
        this.usuarioservicio.activar(token, id).subscribe((res) => {
            console.log(res);
            this.socket.emit('cliente:cambiaractividad', id);
            this.socket.on('server:cambiaracti', (dato) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.usuarios = dato;
            }));
        });
    }
    deshabilitar(id) {
        //función qye trae el servicio de desactivar un usuario
        //console.log(id);}
        const token = localStorage.getItem('token');
        this.usuarioservicio.inhabilitar(token, id).subscribe((res) => {
            this.socket.emit('cliente:cambiaractividad', id);
            this.socket.on('server:cambiaracti', (dato) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.usuarios = dato;
            })); //console.log(res);
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
        // console.log('Token -->',token);
        // console.log('imgPer -->',idImgPerfil);
        this.usuarioservicio.traerfotoperfil(token, idImgPerfil).subscribe((res) => {
            //console.log(res.data.url);
            this.url = res.data.url;
        });
    }
};
ListadoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ListadoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-listado',
        template: _listado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_listado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListadoPage);



/***/ }),

/***/ 58708:
/*!********************************************************************!*\
  !*** ./src/app/pages/rolgest/listado/listado.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".salida {\n  font-size: 40px;\n  background-color: transparent;\n}\n\n.elicono {\n  font-size: 130px;\n}\n\n.lafoto {\n  max-width: 125px;\n  height: 125px;\n  padding: 0.5em;\n  height: 8vh;\n  filter: drop-shadow(3px 4px 4px #444);\n}\n\n.table {\n  width: 100%;\n  text-align: center;\n}\n\n.activo {\n  text-align: center;\n}\n\n.lacard {\n  border-radius: 1rem;\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.537);\n  margin-top: 50px;\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n\n#colorletra {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtBQUdKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUE7RUFDSSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxvQ0FBQTtBQUtKOztBQUhFO0VBQ0UsZUFBQTtFQUNBLHVDQUFBO0FBTUo7O0FBSEU7RUFDSSxZQUFBO0FBTU4iLCJmaWxlIjoibGlzdGFkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FsaWRhe1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmVsaWNvbm97XHJcbiAgICBmb250LXNpemU6IDEzMHB4O1xyXG59XHJcbi5sYWZvdG97XHJcbiAgICBtYXgtd2lkdGg6IDEyNXB4O1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICBoZWlnaHQ6IDh2aDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDRweCA0cHggIzQ0NCk7XHJcbn1cclxuXHJcbi50YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aXZve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sYWNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNTM3KTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLmVsdGV4dG97XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC50aXR1bG9ze1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgI2NvbG9ybGV0cmF7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiJdfQ== */";

/***/ }),

/***/ 14338:
/*!********************************************************************!*\
  !*** ./src/app/pages/rolgest/listado/listado.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-row>\r\n    <ion-col size=\"2\">\r\n      <ion-buttons>\r\n        <ion-menu-button color=\"dark\" menu=\"first\"></ion-menu-button>\r\n        <!--redirección a perfil presionando el nombre del usuario-->\r\n        <ion-button routerLink=\"/perfilgestor\" expand=\"block\" fill=\"clear\" shape=\"round\" color=\"dark\">\r\n           <!--nombre del usuario-->\r\n          <h5 class=\"eltexto\">{{this.nombre}}</h5>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n    </ion-col>\r\n    <ion-col size=\"1\">\r\n      <!--botón de salida-->\r\n      <button class=\"salida\" (click)=\"salir()\">\r\n        <ion-icon name=\"log-out-outline\" color=\"dark\"></ion-icon>\r\n      </button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid  fixed>\r\n    <ion-row >\r\n      <ion-col size=\"12\">\r\n        <ion-card class=\"lacard\">\r\n          <!--Listado que muestra el estado de activo o inactivo del usuario-->\r\n          <ion-text color=\"primary\" >\r\n            <h1 class=\"titulos\">Listado de estado del usuario</h1>\r\n          </ion-text>\r\n          <div style=\"margin: 30px;\">\r\n            <table class=\"table\" size=\"12\" id=\"colorletra\" >\r\n              <thead >\r\n                <tr >\r\n                  <!--Peticiones de la base de datos para mostrar-->\r\n                  <th scope=\"col\" class=\"eltexto\">Identificación</th>\r\n                  <th scope=\"col\" class=\"eltexto\">Nombre</th>\r\n                  <th scope=\"col\" class=\"eltexto\">Correo</th>\r\n                  <th scope=\"col\" class=\"eltexto\">Rol</th>\r\n                  <th scope=\"col\" class=\"eltexto\">Activo</th>\r\n                  <th scope=\"col\" class=\"eltexto\">Inactivo</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <!--Llamado de los datos de usuario documento y nombre-->\r\n                <tr *ngFor=\"let usuario of usuarios\">\r\n                <td class=\"eltexto\">{{usuario.documento}}</td>\r\n                <td class=\"eltexto\">{{usuario.name}}</td>\r\n                <td class=\"eltexto\">{{usuario.email}}</td>\r\n                <td>\r\n                  <!--Llamado y peticiones de los datos para seleccional el rol de cada perfil -->\r\n                  <ion-select #p (ionChange)=\"cambiarrole(p.value, usuario._id)\" [value]=\"usuario.role[0]\" class=\"form-control\" name=\"role\" >\r\n                    <ion-select-option Value=\"invitado\" class=\"eltexto\">Invitado</ion-select-option>\r\n                    <ion-select-option Value=\"aprendiz\" class=\"eltexto\">Aprendiz</ion-select-option>\r\n                    <ion-select-option Value=\"funcionario\" class=\"eltexto\">Funcionario</ion-select-option>\r\n                    <ion-select-option Value=\"gestor\" class=\"eltexto\">Gestor</ion-select-option>\r\n                    <ion-select-option Value=\"seguridad\" class=\"eltexto\">Seguridad</ion-select-option>\r\n                  </ion-select>\r\n                </td>\r\n                <!--Estado activo o incactivo de los usuarios-->\r\n                <td class=\"activo\">\r\n                  <ion-checkbox (ionChange)=\"deshabilitar(usuario._id)\" color=\"primary\" *ngIf=\"usuario.estado==='ACTIVO' \" checked=\"true\"></ion-checkbox>\r\n                </td>\r\n                <td class=\"activo\">\r\n                  <ion-checkbox (ionChange)=\"activar(usuario._id)\" color=\"primary\" *ngIf=\"usuario.estado==='DESHABILITADO' \" checked=\"true\" ></ion-checkbox>\r\n                </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rolgest_listado_listado_module_ts.js.map