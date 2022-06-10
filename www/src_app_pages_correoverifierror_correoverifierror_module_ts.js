"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_correoverifierror_correoverifierror_module_ts"],{

/***/ 33406:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/correoverifierror/correoverifierror-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorreoverifierrorPageRoutingModule": () => (/* binding */ CorreoverifierrorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _correoverifierror_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correoverifierror.page */ 91105);




const routes = [
    {
        path: '',
        component: _correoverifierror_page__WEBPACK_IMPORTED_MODULE_0__.CorreoverifierrorPage
    }
];
let CorreoverifierrorPageRoutingModule = class CorreoverifierrorPageRoutingModule {
};
CorreoverifierrorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CorreoverifierrorPageRoutingModule);



/***/ }),

/***/ 27822:
/*!*********************************************************************!*\
  !*** ./src/app/pages/correoverifierror/correoverifierror.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorreoverifierrorPageModule": () => (/* binding */ CorreoverifierrorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _correoverifierror_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correoverifierror-routing.module */ 33406);
/* harmony import */ var _correoverifierror_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correoverifierror.page */ 91105);







let CorreoverifierrorPageModule = class CorreoverifierrorPageModule {
};
CorreoverifierrorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _correoverifierror_routing_module__WEBPACK_IMPORTED_MODULE_0__.CorreoverifierrorPageRoutingModule
        ],
        declarations: [_correoverifierror_page__WEBPACK_IMPORTED_MODULE_1__.CorreoverifierrorPage]
    })
], CorreoverifierrorPageModule);



/***/ }),

/***/ 91105:
/*!*******************************************************************!*\
  !*** ./src/app/pages/correoverifierror/correoverifierror.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorreoverifierrorPage": () => (/* binding */ CorreoverifierrorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _correoverifierror_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correoverifierror.page.html?ngResource */ 521);
/* harmony import */ var _correoverifierror_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correoverifierror.page.scss?ngResource */ 67575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let CorreoverifierrorPage = class CorreoverifierrorPage {
    constructor() { }
    ngOnInit() {
    }
};
CorreoverifierrorPage.ctorParameters = () => [];
CorreoverifierrorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-correoverifierror',
        template: _correoverifierror_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_correoverifierror_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CorreoverifierrorPage);



/***/ }),

/***/ 67575:
/*!********************************************************************************!*\
  !*** ./src/app/pages/correoverifierror/correoverifierror.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".lacard {\n  border-radius: 1rem;\n  filter: drop-shadow(3px 3px 3px #444);\n  margin-top: 100px;\n}\n\n.ion-avatar {\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcnJlb3ZlcmlmaWVycm9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFBO0VBQ0ksb0NBQUE7QUFHSjs7QUFBRTtFQUNFLGVBQUE7RUFDQSx1Q0FBQTtBQUdKIiwiZmlsZSI6ImNvcnJlb3ZlcmlmaWVycm9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDNweCAjNDQ0KTtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbi5pb24tYXZhdGFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmVsdGV4dG97XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiAgLnRpdHVsb3N7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ05hbnVtIEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4iXX0= */";

/***/ }),

/***/ 521:
/*!********************************************************************************!*\
  !*** ./src/app/pages/correoverifierror/correoverifierror.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"10\">\r\n        <ion-card class=\"lacard\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <!--Alerta erronea para el usuario-->\r\n              <ion-text color=\"primary\">\r\n                <br><br>\r\n                <h1 class=\"ion-text-center\" class=\"titulos\">¡Verificación de correo erronea!</h1>\r\n              </ion-text>\r\n              <br>\r\n              <!--imagen de error-->\r\n              <ion-col size=\"8\" class=\"ion-avatar\">\r\n                <img width=\"160px\" src=\"../../../assets/Imagenes/error.png\" alt=\"visto\">\r\n              </ion-col>\r\n              <!--Anuncio de falla-->\r\n                <h2 style=\"margin: 50px;\"  class=\"ion-text-center\">Su dirección de correo electrónico ha sido erronea, por favor intentelo nuevamente</h2>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <!--botón para regresar al inicio-->\r\n              <div class=\"ion-text-center\">\r\n                <ion-button type=\"submit\"  color=\"primary\" [routerLink]=\"['/login']\" >Inicio</ion-button>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <br>\r\n          <br>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"1\"></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_correoverifierror_correoverifierror_module_ts.js.map