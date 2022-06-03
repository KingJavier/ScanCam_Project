"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cambiocontrasena_cambiocontrasena_module_ts"],{

/***/ 61258:
/*!***************************************************************************!*\
  !*** ./src/app/pages/cambiocontrasena/cambiocontrasena-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CambiocontrasenaPageRoutingModule": () => (/* binding */ CambiocontrasenaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cambiocontrasena_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cambiocontrasena.page */ 17348);




const routes = [
    {
        path: '',
        component: _cambiocontrasena_page__WEBPACK_IMPORTED_MODULE_0__.CambiocontrasenaPage
    }
];
let CambiocontrasenaPageRoutingModule = class CambiocontrasenaPageRoutingModule {
};
CambiocontrasenaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CambiocontrasenaPageRoutingModule);



/***/ }),

/***/ 78734:
/*!*******************************************************************!*\
  !*** ./src/app/pages/cambiocontrasena/cambiocontrasena.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CambiocontrasenaPageModule": () => (/* binding */ CambiocontrasenaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cambiocontrasena_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cambiocontrasena-routing.module */ 61258);
/* harmony import */ var _cambiocontrasena_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cambiocontrasena.page */ 17348);
/* harmony import */ var _ngneat_error_tailor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/error-tailor */ 5285);








let CambiocontrasenaPageModule = class CambiocontrasenaPageModule {
};
CambiocontrasenaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
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
            _cambiocontrasena_routing_module__WEBPACK_IMPORTED_MODULE_0__.CambiocontrasenaPageRoutingModule
        ],
        declarations: [_cambiocontrasena_page__WEBPACK_IMPORTED_MODULE_1__.CambiocontrasenaPage]
    })
], CambiocontrasenaPageModule);



/***/ }),

/***/ 17348:
/*!*****************************************************************!*\
  !*** ./src/app/pages/cambiocontrasena/cambiocontrasena.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CambiocontrasenaPage": () => (/* binding */ CambiocontrasenaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cambiocontrasena_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cambiocontrasena.page.html?ngResource */ 76608);
/* harmony import */ var _cambiocontrasena_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cambiocontrasena.page.scss?ngResource */ 78588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);




//importacion del los servicios de la api

//importación de toastcontroller para formularios reactivos

//importación de form group para formularios reactivos

let CambiocontrasenaPage = class CambiocontrasenaPage {
    constructor(
    //se inyectan cambio de la contraseña
    cambio, 
    //se inyecta el constructor de formularios
    builder, 
    //se inyecta toastcontroller
    toastController) {
        this.cambio = cambio;
        this.builder = builder;
        this.toastController = toastController;
        //mostrar contraseña
        this.showPassword = false;
        this.passwordToggleIcon = 'eye';
    }
    //función de aleta por caso de error
    errorl(mensaje, duracion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: mensaje,
                color: 'danger',
                duration: duracion
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
        //esta función hace los campos obligatorios
        this.form = this.builder.group({
            codigo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            contrasena: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    actucontrasena(codigo, contrasena) {
        if (this.form.invalid) {
            return Object.values(this.form.controls).forEach(control => {
                control.markAsTouched();
            });
        }
        //esta funcion ejecuta el servicio de cambio de contraseña de la api
        try {
            //console.log(codigo);
            //console.log(contrasena);
            const datos = {
                newPass: contrasena,
                resetCode: codigo,
            };
            this.cambio.cambiocontrasena(datos).subscribe((res) => {
                //console.log(res);
                const correcto = res.msg;
                if (correcto === 'Tu contraseña ha sido cambiada satisfactoriamente') {
                    this.chec('SE CAMBIO LA CONTRASEÑA SATISFACTORIAMENTE', 4000);
                }
            }, error => {
                console.log(error);
                const err = error.error.msg;
                if (err === 'USER_ALREADY_NOT_EXIST_WITH_THIS_CODE') {
                    this.errorl('CODIGO INVALIDO', 3000);
                }
            });
        }
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
CambiocontrasenaPage.ctorParameters = () => [
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
CambiocontrasenaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-cambiocontrasena',
        template: _cambiocontrasena_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cambiocontrasena_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CambiocontrasenaPage);



/***/ }),

/***/ 78588:
/*!******************************************************************************!*\
  !*** ./src/app/pages/cambiocontrasena/cambiocontrasena.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".lacard {\n  border-radius: 1rem;\n  filter: drop-shadow(3px 3px 3px #444);\n  margin-top: 100px;\n  align-items: center;\n}\n\n#verclave {\n  margin-top: auto;\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWJpb2NvbnRyYXNlbmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxvQ0FBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLHVDQUFBO0FBSUYiLCJmaWxlIjoiY2FtYmlvY29udHJhc2VuYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFjYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDNweCAjNDQ0KTtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiN2ZXJjbGF2ZXtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcbi5lbHRleHRve1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG4udGl0dWxvc3tcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG59Il19 */";

/***/ }),

/***/ 76608:
/*!******************************************************************************!*\
  !*** ./src/app/pages/cambiocontrasena/cambiocontrasena.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"/login\"></ion-back-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid fixed>\r\n   <ion-card class=\"lacard\">\r\n     <ion-card-title style=\"margin: 60px;\">\r\n      <ion-title color=\"primary\">\r\n        <h1 class=\"titulos\">Cambio de contraseña</h1>\r\n      </ion-title>\r\n     </ion-card-title>\r\n     <br>\r\n     <ion-card-content style=\"margin: 50px;\">\r\n      <form [formGroup]=\"form\" errorTailor class=\"eltexto\">\r\n        <!--Espacio para digitar codigo adquirido del correo electronico-->\r\n        <ion-item class=\"form-group\" class=\"eltexto\">\r\n          <h5>Digite el codigo enviado a su correo electronico</h5>\r\n          <ion-label position=\"floating\">Código</ion-label>\r\n          <ion-input class=\"form-control\" formControlName=\"codigo\" #codigo errorTailor></ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item class=\"form-group\">\r\n          <!--Digitar nueva contraseña-->\r\n          <h5 class=\"eltexto\">Ingrese su nueva contraseña</h5>\r\n          <ion-label position=\"floating\" class=\"eltexto\">Nueva contraseña</ion-label>\r\n          <!--Caracteres especificos para la contraseña-->\r\n        <ion-input class=\"form-control\" pattern=\"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}\" formControlName=\"contrasena\" #contrasena [type]=\"showPassword ? 'text' : 'password' \" errorTailor ></ion-input>\r\n                        <ion-icon color=\"primary\" (click)=\"togglePassword()\" slot=\"end\" [name]=\"passwordToggleIcon\" id=\"verclave\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item class=\"form-group\">\r\n          <!--confirmación de la nueva contraseña anteriormente establecida-->\r\n          <ion-label position=\"floating\" class=\"eltexto\">Confirmar contraseña</ion-label>\r\n          <ion-input class=\"form-control\" pattern=\"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}\" formControlName=\"contrasena\" #contrasena [type]=\"showPassword ? 'text' : 'password' \" errorTailor ></ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-row>\r\n          <!--condicion de numero de digitos de la contrasena del usuario a digitar -->\r\n          <ion-col size=\"12\">\r\n            <p class=\"eltexto\">La Contraseña debe contener un carater en mayuscula, un numero, un carater especial y debe ser de 8\r\n              carateres. </p>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n      </form>\r\n\r\n      <div class=\"ion-text-center\">\r\n        <ion-button class=\"eltexto\" color=\"primary\" (click)=\"actucontrasena(codigo.value, contrasena.value)\">Cambiar Contreseña\r\n        </ion-button>\r\n      </div>\r\n    </ion-card-content>\r\n   </ion-card>\r\n  </ion-grid>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cambiocontrasena_cambiocontrasena_module_ts.js.map