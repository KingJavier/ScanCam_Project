"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_forgot-password_forgot-password_module_ts"],{

/***/ 6177:
/*!*************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageRoutingModule": () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 22032);




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ 65638:
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 6177);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 22032);
/* harmony import */ var _ngneat_error_tailor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/error-tailor */ 5285);







//se importa errortailor para los formularios reactivos

let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
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
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ 22032:
/*!***************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page.html?ngResource */ 36688);
/* harmony import */ var _forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.scss?ngResource */ 72653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);





//importación de las rutas

//importación de los servicios de la api

//importacion de toaskcontroller

let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(
    //inyecta la importación de taskservice
    taskService, 
    //inyecta la importación de las rutas
    router, 
    //inyecta la importación del constructor de formularios de angular
    builder, 
    //inyecta la importación de tosatcontroller
    toastController) {
        this.taskService = taskService;
        this.router = router;
        this.builder = builder;
        this.toastController = toastController;
        //se le define la bariable datos
        this.datos = {
            uid: null,
            email: null,
        };
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
    //se define para el formulario reactico el cual tiene que ser un validador requerido
    ngOnInit() {
        this.form = this.builder.group({
            correo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}')]],
        });
    }
    olvidar() {
        if (this.form.invalid) {
            return Object.values(this.form.controls).forEach(control => {
                control.markAsTouched();
            });
        }
        //se hace el llamdo de los campos del formulario y se les asigna el valor de la api
        //si no comple con los valores de la api la función try hacel el llamado del error
        try {
            // eslint-disable-next-line one-var
            const email = this.datos.email;
            const olvido = {
                email: `${email}`,
            };
            //se crea el token para mandarlo al correo y confirmar el correo
            this.taskService.updateOlvido(olvido).subscribe((res) => {
                //console.log(olvido);
                //console.log(res);
                const correcto = res.msg;
                if (correcto === 'Correo enviado satisfactoriamente, sigue las instrucciones') {
                    this.chec('SE ENVIO EL CORREO CORRECTAMENTE', 4000);
                }
                //this.router.navigate(['/']);
            }, error => {
                console.log(error);
                const err = error.error.msg;
                if (err === 'No se encontro el usuario ingresado') {
                    this.errorl('EL CORREO NO ESTA REGISTRADO O VERIFICA QUE ESTE BIEN ESCRITO', 4000);
                }
            });
        }
        //error en consola si no cumple con los datos
        catch (error) {
            console.log('Error->', error);
        }
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forgot-password',
        template: _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPasswordPage);



/***/ }),

/***/ 72653:
/*!****************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".lacard {\n  border-radius: 1rem;\n  filter: drop-shadow(3px 3px 3px #444);\n  margin-top: 100px;\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLG9DQUFBO0FBRUo7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsdUNBQUE7QUFFSiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggM3B4ICM0NDQpO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuLmVsdGV4dG97XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAudGl0dWxvc3tcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTmFudW0gR290aGljJywgc2Fucy1zZXJpZjtcclxuICB9Il19 */";

/***/ }),

/***/ 36688:
/*!****************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<!--Formulario principal redireccionado al login -->\r\n  <ion-toolbar color=\"light\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/login\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <!--formulario cambio de contraseña-->\r\n      <ion-col size-lg=\"3\" size-md=\"4\"></ion-col>\r\n      <ion-col size=\"12\" size-lg=\"6\" size-md=\"8\">\r\n        <ion-card class=\"lacard\">\r\n          <ion-text  color=\"primary\">\r\n            <!--Titulo de cambio de contraseña user-->\r\n            <h1 class=\"titulos\">CAMBIO DE CONTRASEÑA</h1>\r\n            </ion-text>\r\n          <ion-card-content>\r\n            <!--Formulario de cambio de contraseña -->\r\n            <form [formGroup]=\"form\" errorTailor>\r\n              <h1 class=\"eltexto\">Digite su correo electrónico</h1>\r\n              <ion-item class=\"form-group\" lines=\"full\">\r\n                <!--Correo User-->\r\n                <ion-label position=\"floating\" class=\"eltexto\">Correo</ion-label>\r\n                <!--enviar al correo los datos digitado para cambio de contraseña-->\r\n                <ion-input  class=\"form-control\" formControlName=\"correo\" type=\"email\" placeholder=\"Correo\"  [(ngModel)]=\"datos.email\" errorTailor ></ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <!--Alerta de envio de contraseña al Gmail-->\r\n              <ion-row>\r\n                <h2 class=\"eltexto\">Se enviara un correo electrónico para continuar el cambio de contraseña</h2>\r\n              </ion-row>\r\n            </form>     \r\n            <br>\r\n            <br>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <!--Funcion de ejecucion del boton Para enviar correo-->\r\n                  <div class=\"ion-text-center\"><ion-button (click)=\"olvidar()\" class=\"eltexto\" [routerLink]=\"['/fullemail']\"  type=\"submit\" shape=\"round\">Enviar Correo</ion-button>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n              </ion-row>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgot-password_forgot-password_module_ts.js.map