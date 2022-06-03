"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_verificacion-email_verificacion-email_module_ts"],{

/***/ 97913:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/verificacion-email/verificacion-email-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificacionEmailPageRoutingModule": () => (/* binding */ VerificacionEmailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _verificacion_email_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verificacion-email.page */ 2282);




const routes = [
    {
        path: '',
        component: _verificacion_email_page__WEBPACK_IMPORTED_MODULE_0__.VerificacionEmailPage
    }
];
let VerificacionEmailPageRoutingModule = class VerificacionEmailPageRoutingModule {
};
VerificacionEmailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerificacionEmailPageRoutingModule);



/***/ }),

/***/ 74604:
/*!***********************************************************************!*\
  !*** ./src/app/pages/verificacion-email/verificacion-email.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificacionEmailPageModule": () => (/* binding */ VerificacionEmailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _verificacion_email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verificacion-email-routing.module */ 97913);
/* harmony import */ var _verificacion_email_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verificacion-email.page */ 2282);







let VerificacionEmailPageModule = class VerificacionEmailPageModule {
};
VerificacionEmailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _verificacion_email_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerificacionEmailPageRoutingModule
        ],
        declarations: [_verificacion_email_page__WEBPACK_IMPORTED_MODULE_1__.VerificacionEmailPage]
    })
], VerificacionEmailPageModule);



/***/ }),

/***/ 2282:
/*!*********************************************************************!*\
  !*** ./src/app/pages/verificacion-email/verificacion-email.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificacionEmailPage": () => (/* binding */ VerificacionEmailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _verificacion_email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verificacion-email.page.html?ngResource */ 53190);
/* harmony import */ var _verificacion_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verificacion-email.page.scss?ngResource */ 38336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);





//importacion de toaskcontroller

let VerificacionEmailPage = class VerificacionEmailPage {
    constructor(usuarioservicio, 
    //inyecta la importación de tosatcontroller
    toastController) {
        this.usuarioservicio = usuarioservicio;
        this.toastController = toastController;
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
    }
    enviarcorreo() {
        try {
            const correo = localStorage.getItem('email');
            const body = { email: correo };
            this.usuarioservicio.enviarcorreo(body).subscribe((res) => {
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
VerificacionEmailPage.ctorParameters = () => [
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
VerificacionEmailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-verificacion-email',
        template: _verificacion_email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_verificacion_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerificacionEmailPage);



/***/ }),

/***/ 38336:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/verificacion-email/verificacion-email.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".lacard {\n  border-radius: 1rem;\n  filter: drop-shadow(3px 3px 3px #444);\n  margin-top: 100px;\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWNhY2lvbi1lbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0FBQ0o7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsdUNBQUE7QUFFSiIsImZpbGUiOiJ2ZXJpZmljYWNpb24tZW1haWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggM3B4ICM0NDQpO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5lbHRleHRve1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAudGl0dWxvc3tcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTmFudW0gR290aGljJywgc2Fucy1zZXJpZjtcclxuICB9Il19 */";

/***/ }),

/***/ 53190:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/verificacion-email/verificacion-email.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"10\">\r\n        <ion-card class=\"lacard\">\r\n          <ion-row>\r\n            <ion-col style=\"margin: 30px;\">\r\n              <!--Verificacion de registro exitoso card para user-->\r\n              <ion-text color=\"primary\" class=\"titulos\">\r\n                <h2 class=\"ion-text-center\" >¡Gracias por Registarse!</h2>\r\n              </ion-text>\r\n              <br>\r\n              <h3 class=\"eltexto\">Hemos enviado un correo de verificacion </h3>\r\n              <br>\r\n              <h4 class=\"eltexto\">Por favor revise su correo electrónico y haga clic en el enlace para verificar su dirección de correo\r\n                electrónico.</h4>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <br>\r\n          <ion-row>\r\n            <ion-col>\r\n              <div class=\"ion-text-center\">\r\n                <!--Funcion que Reenvia correo electronico a la cuenta de google colocada -->\r\n                <ion-button type=\"submit\" color=\"primary\" (click)=\"enviarcorreo()\" class=\"eltexto\">Reenviar correo electrónico</ion-button>\r\n                <br>\r\n                <!--Boton para volver al inicio-->\r\n                <a style=\"font-size: 15px;\" [routerLink]=\"['/login']\" class=\"eltexto\">Volver al inicio</a>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <br>\r\n          <br>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"1\"></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_verificacion-email_verificacion-email_module_ts.js.map