"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rolsecurity_registroinvitado_registroinvitado_module_ts"],{

/***/ 42290:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/registroinvitado/registroinvitado-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroinvitadoPageRoutingModule": () => (/* binding */ RegistroinvitadoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _registroinvitado_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registroinvitado.page */ 19701);




const routes = [
    {
        path: '',
        component: _registroinvitado_page__WEBPACK_IMPORTED_MODULE_0__.RegistroinvitadoPage
    }
];
let RegistroinvitadoPageRoutingModule = class RegistroinvitadoPageRoutingModule {
};
RegistroinvitadoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroinvitadoPageRoutingModule);



/***/ }),

/***/ 59542:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/registroinvitado/registroinvitado.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroinvitadoPageModule": () => (/* binding */ RegistroinvitadoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _registroinvitado_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registroinvitado-routing.module */ 42290);
/* harmony import */ var _registroinvitado_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registroinvitado.page */ 19701);
/* harmony import */ var _ngneat_error_tailor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/error-tailor */ 5285);








let RegistroinvitadoPageModule = class RegistroinvitadoPageModule {
};
RegistroinvitadoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            //da la funcion de los formularios reactivos
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _ngneat_error_tailor__WEBPACK_IMPORTED_MODULE_5__.ErrorTailorModule.forRoot({
                errors: {
                    useValue: {
                        required: 'Este campo es obligatorio',
                        minlength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`,
                        invalidAddress: error => `Address isn't valid`
                    }
                }
            }),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _registroinvitado_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroinvitadoPageRoutingModule
        ],
        declarations: [_registroinvitado_page__WEBPACK_IMPORTED_MODULE_1__.RegistroinvitadoPage]
    })
], RegistroinvitadoPageModule);



/***/ }),

/***/ 19701:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/registroinvitado/registroinvitado.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroinvitadoPage": () => (/* binding */ RegistroinvitadoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _registroinvitado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registroinvitado.page.html?ngResource */ 94083);
/* harmony import */ var _registroinvitado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registroinvitado.page.scss?ngResource */ 90532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/task.service */ 46138);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ 84935);




//importación de las rutas

//importación de los servicios de task.service




let RegistroinvitadoPage = class RegistroinvitadoPage {
    constructor(
    //se inyeta la imortación de taskservice
    taskService, 
    //se inyecta la importación de router
    router, 
    // se inyecta la importación del contructor de formularios de angular
    builder, toastController, socket) {
        this.taskService = taskService;
        this.router = router;
        this.builder = builder;
        this.toastController = toastController;
        this.socket = socket;
        //mostrar contraseña
        this.showPassword = false;
        this.passwordToggleIcon = 'eye';
        //se define la bariable datos y cmpos nulos
        this.datos = {
            documento: null,
            nombre: null,
            apellido: null,
            telefono: null,
            email: null,
            role: 'invitado',
        };
        this.nombre = localStorage.getItem('name');
    }
    errorr(mensaje, duracion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: mensaje,
                color: 'danger',
                duration: duracion,
            });
            toast.present();
        });
    }
    error2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Contraseñas no coinicden',
                color: 'danger',
                duration: 2000
            });
            toast.present();
        });
    }
    //se llaman los campos para validarlos y sean requerdos
    ngOnInit() {
        this.form = this.builder.group({
            doc: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            lastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            correo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}')]],
            contraseña: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            confirmarcontraseña: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    registrar() {
        if (this.form.invalid) {
            return Object.values(this.form.controls).forEach(control => {
                control.markAsTouched();
            });
        }
        //se hace el llamdo de los campos del formulario y se les asigna el valor de la api
        //si no comple con los valores de la api la función try hacel el llamado del error
        try {
            // eslint-disable-next-line one-var
            const documento = this.datos.documento, nombre = this.datos.nombre, apellido = this.datos.apellido, telefono = this.datos.telefono, email = this.datos.email, role = this.datos.role;
            if (this.password === this.confirmarpassword) {
                const verificontraseña = this.confirmarpassword;
                const task = {
                    name: `${nombre}`,
                    apellido: `${apellido}`,
                    telefono: `${telefono}`,
                    documento: `${documento}`,
                    email: `${email}`,
                    password: `${verificontraseña}`,
                    role: `${role}`,
                };
                //se crea el usuario con el llamado a create task y lo retorna a verificación de email
                this.taskService.createsTask(task).subscribe((res) => {
                    this.socket.emit('cliente:newuserseguridad', {
                        res
                    });
                    //console.log(res);
                }, error => {
                    console.log(error);
                    const err = error.error.msg;
                    if (err === 'EMAIL_ALREADY_REGISTERED') {
                        this.errorr('EL CORREO YA ESTA REGISTRADO', 3000);
                    }
                });
            }
            else {
                this.error2();
            }
        }
        //error en consola si no cumple con los datos
        catch (error) {
            console.log('Error->', error);
        }
    }
    togglePassword() {
        this.showPassword = !this.showPassword;
        if (this.passwordToggleIcon === 'eye') {
            this.passwordToggleIcon = 'eye-off';
        }
        else {
            this.passwordToggleIcon = 'eye';
        }
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
        this.taskService.traerfotoperfil(token, idImgPerfil).subscribe((res) => {
            //console.log(res.data.url);
            this.url = res.data.url;
        });
    }
};
RegistroinvitadoPage.ctorParameters = () => [
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__.Socket }
];
RegistroinvitadoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-registroinvitado',
        template: _registroinvitado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registroinvitado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistroinvitadoPage);



/***/ }),

/***/ 90532:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/registroinvitado/registroinvitado.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ".salida {\n  font-size: 40px;\n  background-color: transparent;\n}\n\n.elicono {\n  font-size: 130px;\n}\n\n.lafoto {\n  max-width: 125px;\n  height: 125px;\n  padding: 0.5em;\n  height: 8vh;\n  filter: drop-shadow(3px 4px 4px #444);\n}\n\n.elboton {\n  filter: drop-shadow(3px 3px 3px #444);\n  margin-top: 250px;\n  border-radius: 1rem;\n}\n\n.lacardone {\n  border-radius: 1rem;\n  filter: drop-shadow(3px 3px 3px #444);\n  margin-top: 50px;\n}\n\n@media screen and (max-width: 719px) {\n  .elboton {\n    margin-top: 12px;\n  }\n}\n\n#verclave {\n  margin-top: auto;\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvaW52aXRhZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtBQUdKOztBQURBO0VBQ0kscUNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBREE7RUFDSSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFEQTtFQUNFO0lBQ0ksZ0JBQUE7RUFJSjtBQUNGOztBQUZBO0VBQ0ksZ0JBQUE7QUFJSjs7QUFEQTtFQUNJLG9DQUFBO0FBSUo7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsdUNBQUE7QUFLSiIsImZpbGUiOiJyZWdpc3Ryb2ludml0YWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWxpZGF7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uZWxpY29ub3tcclxuICAgIGZvbnQtc2l6ZTogMTMwcHg7XHJcbn1cclxuLmxhZm90b3tcclxuICAgIG1heC13aWR0aDogMTI1cHg7XHJcbiAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgcGFkZGluZzogLjVlbTtcclxuICAgIGhlaWdodDogOHZoO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggNHB4IDRweCAjNDQ0KTtcclxufVxyXG4uZWxib3RvbntcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCAzcHggIzQ0NCk7XHJcbiAgICBtYXJnaW4tdG9wOiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcbi5sYWNhcmRvbmV7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDNweCAjNDQ0KTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzE5cHgpe1xyXG4gIC5lbGJvdG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxufVxyXG4jdmVyY2xhdmV7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4uZWx0ZXh0b3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLnRpdHVsb3N7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ05hbnVtIEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuIl19 */";

/***/ }),

/***/ 94083:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/registroinvitado/registroinvitado.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-row>\r\n    <ion-col size=\"2\">\r\n      <ion-buttons>\r\n        <ion-menu-button color=\"dark\" menu=\"first\"></ion-menu-button>\r\n        <!--Redirigir a perfil seguridad-->\r\n          <ion-button routerLink=\"/perfilseguridad\" expand=\"block\" fill=\"clear\" shape=\"round\" color=\"dark\">\r\n            <!--Llamado del nombre almacenado en la base de datos -->\r\n          <h5 class=\"eltexto\">{{this.nombre}}</h5>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n    </ion-col>\r\n    <ion-col size=\"1\">\r\n      <!--Salida de la sesion-->\r\n      <button class=\"salida\" class=\"eltexto\" (click)=\"salir()\">\r\n        <ion-icon name=\"log-out-outline\" color=\"dark\"></ion-icon>\r\n      </button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\" >\r\n        <ion-card class=\"lacardone\">\r\n\r\n          <ion-card-header>\r\n           \r\n            <ion-text color=\"primary\" class=\"titulos\">\r\n              <h1 class=\"titulos\">REGISTRO</h1>\r\n            </ion-text>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n             <!--Formulario de registro para el rol invitado-->\r\n            <form [formGroup]=\"form\" errorTailor>\r\n              <ion-item class=\"form-group\">\r\n                <!--Documento de usuario-->\r\n                <ion-label position=\"floating\" class=\"eltexto\">Documento:</ion-label>\r\n                <!--Enviar Informacion a la base de datos-->\r\n                <ion-input class=\"form-control\" formControlName=\"doc\" type=\"number\" placeholder=\"Documento\" name=\"documento\" [(ngModel)]=\"datos.documento\"></ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"form-group\">\r\n                <!--Nombre del respectivo usuario-->\r\n                <ion-label position=\"floating\" class=\"eltexto\">Nombre:</ion-label>\r\n                <!--Enviar Informacion a la base de datos-->\r\n                <ion-input class=\"form-control\" formControlName=\"name\" type=\"text\" placeholder=\"Nombre\" name=\"nombre\" [(ngModel)]=\"datos.nombre\"></ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"form-group\">\r\n                <!--Apellido de usuario-->\r\n                <ion-label position=\"floating\" class=\"eltexto\">Apellido:</ion-label>\r\n                <!--Enviar Informacion a la base de datos-->\r\n                <ion-input class=\"form-control\" formControlName=\"lastname\" type=\"text\" placeholder=\"Apellido\" name=\"apellido\" [(ngModel)]=\"datos.apellido\" ></ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"form-group\">\r\n                <!--Teléfono vigente del usuario-->\r\n                <ion-label position=\"floating\" class=\"eltexto\">Telefono:</ion-label>\r\n                <!--Enviar Informacion a la base de datos-->\r\n                <ion-input class=\"form-control\" formControlName=\"phone\" type=\"number\" placeholder=\"Telefono\" name=\"telefono\" [(ngModel)]=\"datos.telefono\" ></ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"form-group\">\r\n                <!--correo del usuario-->\r\n                <ion-label position=\"floating\" class=\"eltexto\">Correo:</ion-label>\r\n                <!--Enviar Informacion a la base de datos-->\r\n                <ion-input class=\"form-control\" formControlName=\"correo\" type=\"email\" placeholder=\"Correo\" name=\"email\" [(ngModel)]=\"datos.email\" ></ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"form-group\">\r\n                <!--Contraseña seleccionada por el usuario-->\r\n                <ion-label position=\"floating\" class=\"eltexto\">Contraseña:</ion-label>\r\n                <!--Condicionales para la contraseña-->\r\n                <ion-input  class=\"form-control\" pattern=\"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}\" formControlName=\"contraseña\" type=\"password\" placeholder=\"Contraseña\" [type]=\"showPassword ? 'text' : 'password' \" name=\"password\" [(ngModel)]=\"password\" ></ion-input>\r\n                <ion-icon color=\"primary\" (click)=\"togglePassword()\" slot=\"end\" [name]=\"passwordToggleIcon\" id=\"verclave\"></ion-icon>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"form-group\">\r\n                <!--Confirmación de contraseña ya diligenciada-->\r\n                <ion-label position=\"floating\" class=\"eltexto\">Confirmar contraseña:</ion-label>\r\n                <!--Condicionales-->\r\n                <ion-input class=\"form-control\" pattern=\"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}\" formControlName=\"confirmarcontraseña\" [type]=\"showPassword ? 'text' : 'password' \" type=\"password\" placeholder=\"Confirmar contraseña\" [(ngModel)]=\"confirmarpassword\"></ion-input>\r\n              </ion-item>\r\n                <br>\r\n                \r\n                <!--Observación visual para que el usuario cree una contraseña factible-->\r\n              <ion-row>\r\n                <h4 class=\"eltexto\">La Contraseña debe contener un carater en mayuscula, un numero, un carater especial y debe ser de 8 carateres.</h4>\r\n              </ion-row>\r\n\r\n            </form>\r\n            <br>\r\n            <!--Botón para registrar usuario-->\r\n            <div class=\"ion-text-center\">\r\n              <ion-button color=\"primary\"  class=\"ion-margin-top\" class=\"eltexto\" mode=\"ios\" (click)=\"registrar()\">\r\n                Registrar Usuario\r\n              </ion-button>\r\n            </div>\r\n\r\n          </ion-card-content>\r\n\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rolsecurity_registroinvitado_registroinvitado_module_ts.js.map