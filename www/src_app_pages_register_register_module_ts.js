"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 81557:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 66690);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 60207:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 81557);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 66690);
/* harmony import */ var _ngneat_error_tailor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/error-tailor */ 5285);







//se importa errortailor para los formularios reactivos

let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
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
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 66690:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 46325);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 47863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/task.service */ 46138);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ 84935);




//importación de las rutas

//importación de los servicios de task.service




let RegisterPage = class RegisterPage {
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
                    this.socket.emit('cliente:newuser', {
                        res
                    });
                    //console.log(res);
                    this.router.navigate(['/verificacion-email']);
                }, error => {
                    //console.log(error);
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
};
RegisterPage.ctorParameters = () => [
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__.Socket }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 47863:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".auth-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: auto 1em;\n}\n.auth-form ion-button {\n  margin-top: 1em;\n}\n.extra-options {\n  display: block;\n  margin-top: 1em;\n}\n.form-error {\n  font-size: 0.5em;\n}\n.form-submitted input.ng-invalid,\n.form-submitted select.ng-invalid {\n  border-color: #dc3545;\n}\n.lacard {\n  border-radius: 1rem;\n  filter: drop-shadow(3px 3px 3px #444);\n  margin-top: 50px;\n}\n#verclave {\n  margin-top: auto;\n}\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0UsZUFBQTtBQUNOO0FBR0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUFKO0FBR0U7RUFDRSxnQkFBQTtBQUFKO0FBR0E7O0VBRUUscUJBQUE7QUFBRjtBQUVBO0VBQ0UsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDQTtFQUNFLGdCQUFBO0FBRUY7QUFBQTtFQUNFLG9DQUFBO0FBR0Y7QUFEQTtFQUNFLGVBQUE7RUFDQSx1Q0FBQTtBQUlGIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0byAxZW07XHJcbiAgXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZXh0cmEtb3B0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZXJyb3Ige1xyXG4gICAgZm9udC1zaXplOiAwLjVlbTtcclxuICB9XHJcblxyXG4uZm9ybS1zdWJtaXR0ZWQgaW5wdXQubmctaW52YWxpZCxcclxuLmZvcm0tc3VibWl0dGVkIHNlbGVjdC5uZy1pbnZhbGlkIHtcclxuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuLmxhY2FyZHtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCAzcHggIzQ0NCk7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4jdmVyY2xhdmV7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG4uZWx0ZXh0b3tcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnRpdHVsb3N7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTmFudW0gR290aGljJywgc2Fucy1zZXJpZjtcclxufSJdfQ== */";

/***/ }),

/***/ 46325:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <!--Registro Card Incio de sesion-->\r\n      <ion-col sizeMd=\"4\" offsetMd=\"4\">\r\n          <ion-card class=\"lacard\">\r\n            <ion-text color=\"primary\" class=\"titulos\">\r\n              <h1>Registrate </h1>\r\n            </ion-text>\r\n              <ion-card-content >\r\n                <ion-row>\r\n                  <!--Muestra de pasos para inicio de sesion-->\r\n                  <ion-col  style=\"margin: 20px;\">\r\n                    <h2 class=\"eltexto\">Ingresa los datos de formulario a continuación para un registro exitoso</h2>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <!--Datos del Usuario Datos manejados de forma privada-->\r\n                <form [formGroup]=\"form\" errorTailor>\r\n                  <ion-item class=\"form-group\">\r\n                    <!--C.C User-->\r\n                    <ion-label position=\"floating\" class=\"eltexto\">Documento:</ion-label>\r\n                          <!--Enviar Informacion a la base de datos-->\r\n                    <ion-input class=\"form-control\" formControlName=\"doc\" type=\"number\" placeholder=\"Documento\" name=\"documento\" [(ngModel)]=\"datos.documento\"></ion-input>\r\n                  </ion-item>\r\n                  <!--Nombre de pila del usuario-->\r\n                  <ion-item class=\"form-group\">\r\n                    <ion-label position=\"floating\" class=\"eltexto\">Nombre:</ion-label>\r\n                          <!--Enviar Informacion a la base de datos-->\r\n                    <ion-input class=\"form-control\" formControlName=\"name\" type=\"text\" placeholder=\"Nombre\" name=\"nombre\" [(ngModel)]=\"datos.nombre\"></ion-input>\r\n                  </ion-item>\r\n                  <!--Apellido de pila del usuario-->\r\n                  <ion-item class=\"form-group\">\r\n                    <ion-label position=\"floating\" class=\"eltexto\">Apellido:</ion-label>\r\n                          <!--Enviar Informacion a la base de datos-->\r\n                    <ion-input class=\"form-control\" formControlName=\"lastname\" type=\"text\" placeholder=\"Apellido\" name=\"apellido\" [(ngModel)]=\"datos.apellido\" ></ion-input>\r\n                  </ion-item>\r\n                  <!--Telefono actual de Usuario-->\r\n                  <ion-item class=\"form-group\">\r\n                    <ion-label position=\"floating\" class=\"eltexto\">Telefono:</ion-label>\r\n                    <!--Enviar Informacion a la base de datos-->\r\n                    <ion-input class=\"form-control\" formControlName=\"phone\" type=\"number\" placeholder=\"Telefono\" name=\"telefono\" [(ngModel)]=\"datos.telefono\" ></ion-input>\r\n                  </ion-item>\r\n                  <!--Correo persola del Usuario-->\r\n                  <ion-item class=\"form-group\">\r\n                    <ion-label position=\"floating\" class=\"eltexto\">Correo:</ion-label>\r\n                          <!--Enviar Informacion a la base de datos-->\r\n                    <ion-input class=\"form-control\" formControlName=\"correo\" type=\"email\" placeholder=\"Correo\" name=\"email\" [(ngModel)]=\"datos.email\" ></ion-input>\r\n                  </ion-item>\r\n                  <!--Contraseña Privada usuario-->\r\n                  <ion-item class=\"form-group\">\r\n                    <ion-label position=\"floating\" class=\"eltexto\">Contraseña:</ion-label>\r\n                    <ion-input  class=\"form-control\" pattern=\"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}\" formControlName=\"contraseña\" type=\"password\" placeholder=\"Contraseña\" [type]=\"showPassword ? 'text' : 'password' \" name=\"password\" [(ngModel)]=\"password\" ></ion-input>\r\n                    <ion-icon color=\"primary\" (click)=\"togglePassword()\" slot=\"end\" [name]=\"passwordToggleIcon\" id=\"verclave\"></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <ion-item class=\"form-group\">\r\n                    <!--la contraseña tiene que ser confirmada he igual a la de contraseña-->\r\n                    <ion-label position=\"floating\" class=\"eltexto\">Confirmar contraseña:</ion-label>\r\n                    <ion-input class=\"form-control\" pattern=\"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}\" formControlName=\"confirmarcontraseña\" [type]=\"showPassword ? 'text' : 'password' \" type=\"password\" placeholder=\"Confirmar contraseña\" [(ngModel)]=\"confirmarpassword\"></ion-input>\r\n                  </ion-item>\r\n                    <br>\r\n\r\n                  <ion-row>\r\n                    <!--reglas a mostrar para el usuario-->\r\n                    <h4 class=\"eltexto\">La Contraseña debe contener un carater en mayuscula, un numero, un carater especial y debe ser de 8 carateres.</h4>\r\n                  </ion-row>\r\n\r\n                </form>\r\n                <br>\r\n                <!--boton para enviar informacion a la base de datos -->\r\n                <div class=\"ion-text-center\">\r\n                  <ion-button color=\"primary\"  class=\"ion-margin-top\" class=\"eltexto\" mode=\"ios\" (click)=\"registrar()\">\r\n                    Registrarse\r\n                  </ion-button>\r\n                </div>\r\n                <!--si el usuario tiene una cuenta se puede re dirigir al inicio de sesion-->\r\n                <ion-button fill=\"clear\" routerLink=\"/login\" expand=\"block\" class=\"eltexto\">\r\n                  ¿Ya tienes cuenta?\r\n                </ion-button>\r\n              </ion-card-content>\r\n          </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map