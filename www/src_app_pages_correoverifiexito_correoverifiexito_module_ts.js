"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_correoverifiexito_correoverifiexito_module_ts"],{

/***/ 58101:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/correoverifiexito/correoverifiexito-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorreoverifiexitoPageRoutingModule": () => (/* binding */ CorreoverifiexitoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _correoverifiexito_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correoverifiexito.page */ 54494);




const routes = [
    {
        path: '',
        component: _correoverifiexito_page__WEBPACK_IMPORTED_MODULE_0__.CorreoverifiexitoPage
    }
];
let CorreoverifiexitoPageRoutingModule = class CorreoverifiexitoPageRoutingModule {
};
CorreoverifiexitoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CorreoverifiexitoPageRoutingModule);



/***/ }),

/***/ 66182:
/*!*********************************************************************!*\
  !*** ./src/app/pages/correoverifiexito/correoverifiexito.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorreoverifiexitoPageModule": () => (/* binding */ CorreoverifiexitoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _correoverifiexito_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correoverifiexito-routing.module */ 58101);
/* harmony import */ var _correoverifiexito_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correoverifiexito.page */ 54494);







let CorreoverifiexitoPageModule = class CorreoverifiexitoPageModule {
};
CorreoverifiexitoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _correoverifiexito_routing_module__WEBPACK_IMPORTED_MODULE_0__.CorreoverifiexitoPageRoutingModule
        ],
        declarations: [_correoverifiexito_page__WEBPACK_IMPORTED_MODULE_1__.CorreoverifiexitoPage]
    })
], CorreoverifiexitoPageModule);



/***/ }),

/***/ 54494:
/*!*******************************************************************!*\
  !*** ./src/app/pages/correoverifiexito/correoverifiexito.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorreoverifiexitoPage": () => (/* binding */ CorreoverifiexitoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _correoverifiexito_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correoverifiexito.page.html?ngResource */ 68688);
/* harmony import */ var _correoverifiexito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correoverifiexito.page.scss?ngResource */ 94267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let CorreoverifiexitoPage = class CorreoverifiexitoPage {
    constructor() { }
    ngOnInit() {
    }
};
CorreoverifiexitoPage.ctorParameters = () => [];
CorreoverifiexitoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-correoverifiexito',
        template: _correoverifiexito_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_correoverifiexito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CorreoverifiexitoPage);



/***/ }),

/***/ 94267:
/*!********************************************************************************!*\
  !*** ./src/app/pages/correoverifiexito/correoverifiexito.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".lacard {\n  border-radius: 1rem;\n  filter: drop-shadow(3px 3px 3px #444);\n  margin-top: 100px;\n}\n\n.ion-avatar {\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcnJlb3ZlcmlmaWV4aXRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFBO0VBQ0ksb0NBQUE7QUFHSjs7QUFBRTtFQUNFLGVBQUE7RUFDQSx1Q0FBQTtBQUdKIiwiZmlsZSI6ImNvcnJlb3ZlcmlmaWV4aXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDNweCAjNDQ0KTtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbi5pb24tYXZhdGFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmVsdGV4dG97XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAudGl0dWxvc3tcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTmFudW0gR290aGljJywgc2Fucy1zZXJpZjtcclxuICB9Il19 */";

/***/ }),

/***/ 68688:
/*!********************************************************************************!*\
  !*** ./src/app/pages/correoverifiexito/correoverifiexito.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"10\">\r\n        <ion-card class=\"lacard\">\r\n          <ion-row>\r\n            <ion-col  >\r\n              <ion-text color=\"primary\">\r\n                <br><br>\r\n                <!--Alerta de verificacion de suaurio -->\r\n                <h1 class=\"ion-text-center\" class=\"titulos\">¡Verificación de correo exitosa!</h1>\r\n              </ion-text>\r\n              <br>\r\n              <!--logo de visto de color verde-->\r\n                <ion-col size=\"8\" class=\"ion-avatar\">\r\n                  <img width=\"160px\" src=\"../../../assets/Imagenes/visto.png\" alt=\"visto\" style=\"text-align: center\">\r\n                </ion-col>\r\n                <br><br>\r\n                <!--Alerta de correo verificado con exito-->\r\n              <h2  class=\"ion-text-center\" >Su dirección de correo electrónico ha sido verificada</h2>\r\n            </ion-col>\r\n          </ion-row>\r\n          <br>\r\n          <ion-row>\r\n            <ion-col>\r\n              <!--Boton para volver al Inicio de la aplicacion-->\r\n              <div class=\"ion-text-center\">\r\n                <ion-button type=\"submit\" class=\"eltexto\" color=\"primary\" [routerLink]=\"['/login']\" >Inicio</ion-button>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <br>\r\n          <br>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"1\"></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_correoverifiexito_correoverifiexito_module_ts.js.map