"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_fullemail_fullemail_module_ts"],{

/***/ 12873:
/*!*************************************************************!*\
  !*** ./src/app/pages/fullemail/fullemail-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullemailPageRoutingModule": () => (/* binding */ FullemailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fullemail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullemail.page */ 37988);




const routes = [
    {
        path: '',
        component: _fullemail_page__WEBPACK_IMPORTED_MODULE_0__.FullemailPage
    }
];
let FullemailPageRoutingModule = class FullemailPageRoutingModule {
};
FullemailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FullemailPageRoutingModule);



/***/ }),

/***/ 23626:
/*!*****************************************************!*\
  !*** ./src/app/pages/fullemail/fullemail.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullemailPageModule": () => (/* binding */ FullemailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fullemail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullemail-routing.module */ 12873);
/* harmony import */ var _fullemail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullemail.page */ 37988);







let FullemailPageModule = class FullemailPageModule {
};
FullemailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fullemail_routing_module__WEBPACK_IMPORTED_MODULE_0__.FullemailPageRoutingModule
        ],
        declarations: [_fullemail_page__WEBPACK_IMPORTED_MODULE_1__.FullemailPage]
    })
], FullemailPageModule);



/***/ }),

/***/ 37988:
/*!***************************************************!*\
  !*** ./src/app/pages/fullemail/fullemail.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullemailPage": () => (/* binding */ FullemailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fullemail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullemail.page.html?ngResource */ 15041);
/* harmony import */ var _fullemail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullemail.page.scss?ngResource */ 71742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FullemailPage = class FullemailPage {
    constructor() { }
    ngOnInit() {
    }
};
FullemailPage.ctorParameters = () => [];
FullemailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fullemail',
        template: _fullemail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fullemail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FullemailPage);



/***/ }),

/***/ 71742:
/*!****************************************************************!*\
  !*** ./src/app/pages/fullemail/fullemail.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".lacard {\n  border-radius: 1rem;\n  filter: drop-shadow(3px 3px 3px #444);\n  margin-top: 100px;\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGxlbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLG9DQUFBO0FBRUo7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsdUNBQUE7QUFFSiIsImZpbGUiOiJmdWxsZW1haWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggM3B4ICM0NDQpO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuLmVsdGV4dG97XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAudGl0dWxvc3tcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTmFudW0gR290aGljJywgc2Fucy1zZXJpZjtcclxuICB9Il19 */";

/***/ }),

/***/ 15041:
/*!****************************************************************!*\
  !*** ./src/app/pages/fullemail/fullemail.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n<ion-toolbar color=\"light\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"/login\"></ion-back-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"3\"></ion-col>\r\n     <ion-col size=\"6\">\r\n      <ion-card class=\"lacard\">\r\n        <ion-text  color=\"primary\">\r\n          <!--Alerta con anuncio para restaurar contraseña-->\r\n          <h1 class=\"titulos\">Verifica tu correo</h1>\r\n          </ion-text>\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <!--Anuncio de continuacion para pasos a seguir para la restauración de contraseña-->\r\n            <ion-col size=\"12\" class=\"eltexto\">\r\n              <h2>Se acaba de enviar un mensaje a la dirección de correo electrónico digitado anteriormente, por favor seguir los pasos mencionados en este.</h2>\r\n              <h2>Al restaurar su contraseña podra ingresar exitosamente a la pagina</h2>\r\n              <br>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <!--botón de inicio-->\r\n              <div class=\"ion-text-center\">\r\n              <ion-button class=\"eltexto\"  [routerLink]=\"['/login']\"  type=\"submit\" shape=\"round\">Inicio</ion-button>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n     </ion-col>\r\n     <ion-col size=\"3\"></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_fullemail_fullemail_module_ts.js.map