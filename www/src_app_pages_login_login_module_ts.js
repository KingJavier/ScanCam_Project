"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _ngneat_error_tailor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/error-tailor */ 5285);







//se importa errortailor para los formularios reactivos

let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            //da la funcion de los formularios reactivos
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _ngneat_error_tailor__WEBPACK_IMPORTED_MODULE_5__.ErrorTailorModule.forRoot({
                errors: {
                    useValue: {
                        required: 'Debes llenar este campo',
                        minlength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`,
                        invalidAddress: error => `Address isn't valid`
                    }
                }
            }),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 96752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 98433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/task.service */ 46138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ 84935);





//importación de router para la navegación

//importación de los servicios taskservice



let LoginPage = class LoginPage {
    constructor(
    //inyevta la importación de taskservices
    taskService, 
    //inyecta la importación de router para las rutas
    router, 
    //inyecta la importación del contructor de formularios de angular
    builder, toastController, 
    //se llama el servicio para actualizar la foto
    usuarioServicio, 
    //se llama a socket.io
    socket) {
        this.taskService = taskService;
        this.router = router;
        this.builder = builder;
        this.toastController = toastController;
        this.usuarioServicio = usuarioServicio;
        this.socket = socket;
        //mostrar contraseña
        this.showPassword = false;
        this.passwordToggleIcon = 'eye';
        //se define la bariable datos y cmpos nulos
        this.datos = {
            uid: null,
            email: null,
            password: null,
        };
    }
    errorl() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Datos Invalidos',
                color: 'danger',
                duration: 2000
            });
            toast.present();
        });
    }
    //se llaman los campos para validarlos y sean campos requeridos
    ngOnInit() {
        // this.socket.connect();
        this.form = this.builder.group({
            correo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}')]],
            contraseña: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        if (token) {
            if (role === 'seguridad') {
                this.router.navigate(['rolseguridad']);
            }
            else if (role === 'gestor') {
                this.router.navigate(['inicioges']);
            }
            else if (role === 'funcionario') {
                this.router.navigate(['iniciofun']);
            }
            else if (role === 'aprendiz') {
                this.router.navigate(['inicioapre']);
            }
            else if (role === 'invitado') {
                this.router.navigate(['inicioinv']);
            }
        }
    }
    createLogeo() {
        if (this.form.invalid) {
            return Object.values(this.form.controls).forEach(control => {
                control.markAsTouched();
            });
        }
        //? se hace el llamdo de los campos del formulario y se les asigna el valor de la api
        //? si no comple con los valores de la api la función try hacel el llamado del error
        try {
            const email = this.datos.email;
            const password = this.datos.password;
            const logeo = {
                email: `${email}`,
                password: `${password}`,
            };
            //se loguea el usuario con el llamado a createlogeo y lo retorna dependiendo del rolal su respevtivo home
            this.taskService.createLogeo(logeo).subscribe((res) => {
                //console.log(res.data.user);
                if (res.data.user.idImgPerfil !== '') {
                    this.socket.emit('cliente:enviar-id-img', res.data.user.idImgPerfil);
                }
                this.socket.emit('cliente:newlogin', res.data.user);
                //console.log(res.data.user.email);
                localStorage.setItem('email', res.data.user.email);
                //console.log(res.data.user.role[0]);
                localStorage.setItem('role', res.data.user.role[0]);
                //console.log(res.data.user.name);
                localStorage.setItem('name', res.data.user.name);
                // console.log(res.data.user.apellido);
                localStorage.setItem('apellido', res.data.user.apellido);
                //console.log(res.data.user.telefono);
                localStorage.setItem('telefono', res.data.user.telefono);
                //console.log(res.data.user.documento);
                localStorage.setItem('documento', res.data.user.documento);
                //console.log(res.data.user.idImgPerfil);
                localStorage.setItem('idImgPerfil', res.data.user.idImgPerfil);
                const token = res.data.token;
                localStorage.setItem('token', token);
                //se define cada rol donde debe ser redirigido
                if (res.data.user.status === 'VERIFIED') {
                    if (res.data.user.role[0] === 'aprendiz') {
                        this.router.navigate(['/inicioapre']);
                    }
                    else if (res.data.user.role[0] === 'funcionario') {
                        this.router.navigate(['/iniciofun']);
                        return;
                    }
                    else if (res.data.user.role[0] === 'invitado') {
                        this.router.navigate(['/inicioinv']);
                        return;
                    }
                    else if (res.data.user.role[0] === 'gestor') {
                        this.router.navigate(['/inicioges']);
                        return;
                    }
                    else if (res.data.user.role[0] === 'seguridad') {
                        this.router.navigate(['/rolseguridad']);
                        return;
                    }
                }
                else {
                    this.router.navigate(['/verificacion-email']);
                }
            }, error => {
                this.errorl();
            });
        }
        //error que aparece en consola avisando que no lleno correctamente los campos o son invalidos
        catch (e) {
            console.log('Error->', e);
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
LoginPage.ctorParameters = () => [
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__.Socket }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 98433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".card {\n  margin-top: 2%;\n  border-radius: 2rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  text-align: center;\n  font-weight: bold;\n  font-size: xx-large;\n  font-size: 30px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n\n.titulo {\n  text-align: center;\n  font-weight: bold;\n  margin: 15px;\n  font-size: 20px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n\n#verclave {\n  margin-top: auto;\n}\n\n.logo {\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLG9DQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtBQUtGOztBQUZBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUtGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5lbHRleHRve1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG4udGl0dWxvc3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBmb250LXNpemU6eHgtbGFyZ2U7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTmFudW0gR290aGljJywgc2Fucy1zZXJpZjtcclxufVxyXG4udGl0dWxve1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiN2ZXJjbGF2ZXtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 96752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<!--****** SCAN CAM ******-->\r\n<!--****** ABRIL 2022 ******-->\r\n<!--***** DESARROLADORES ******* -->\r\n<!--****** CAMILA PARDO *******-->\r\n<!--****** YESETH REYES *******-->\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n      </ion-col>\r\n      <ion-col size-md=\"4\">\r\n        <ion-card class=\"card\">\r\n          <ion-text color=\"primary\" >\r\n\r\n            <!--imagen con logo de la pagina-->\r\n            <img src=\"../../../assets/Imagenes/logo.png\" style=\"height: 170px;width: 170px;\" class=\"logo\">\r\n\r\n            <!--titulos-->\r\n\r\n            <h1 class=\"titulos\">LOGIN</h1>\r\n\r\n          </ion-text>\r\n          <br>\r\n          <ion-card-content class=\"ion-padding\">\r\n            <form [formGroup]=\"form\" errorTailor>\r\n              <ion-item class=\"form-group\">\r\n                <!--digitar correo electronico ya registrado en el sistema-->\r\n                <ion-label position=\"floating\" class=\"eltexto\">Digite su correo electronico</ion-label>\r\n                <!--condicionales para el correo electronico-->\r\n                <ion-input class=\"form-control\" formControlName='correo'  placeholder=\"Correo\" type=\"text\" [(ngModel)]=\"datos.email\" name=\"email\" errorTailor></ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <br>\r\n              <ion-item class=\"form-group\">\r\n                <!--contraseña valida y acorde al correo-->\r\n                <ion-label position=\"floating\"class=\"eltexto\">Ingrese su Contraseña</ion-label>\r\n                <!--condicionales para la contraseña-->\r\n                <ion-input class=\"form-control\" [type]=\"showPassword ? 'text' : 'password' \" formControlName='contraseña' placeholder=\"Contraseña\" type=\"password\" [(ngModel)]=\"datos.password\" name=\"password\" ></ion-input>\r\n                <ion-icon color=\"primary\" (click)=\"togglePassword()\" slot=\"end\" [name]=\"passwordToggleIcon\" id=\"verclave\"></ion-icon>\r\n              </ion-item>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <!--redirección a forgotpassword con opción de cambiar la contraseña-->\r\n                  <p class=\"ion-text-end\">\r\n                    <a [routerLink]=\"['/forgot-password']\" class=\"eltexto\">¿Olvidaste tu contraseña?</a>\r\n                  </p>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <div class=\"ion-text-center\">\r\n                <!--botón de ingresar-->\r\n                <ion-button color=\"primary\" class=\"ion-margin-top\" (click)=\"createLogeo()\" class=\"eltexto\">\r\n                  INGRESAR\r\n                </ion-button>\r\n              </div>\r\n              <ion-row class=\"eltexto\">\r\n                <ion-col size=\"12\">\r\n                  <ion-text color=\"dark\" >\r\n                    <!--opción de registrarse como nuevo usuario-->\r\n                    <h5>¿No tienes cuenta?  <a  [routerLink]=\"['/register']\">REGISTRATE</a> </h5>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map