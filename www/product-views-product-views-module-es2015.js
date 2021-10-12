(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-views-product-views-module"],{

/***/ "Bi1P":
/*!*****************************************************!*\
  !*** ./src/app/product-views/product-views.page.ts ***!
  \*****************************************************/
/*! exports provided: ProductViewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewsPage", function() { return ProductViewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_views_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-views.page.html */ "MnAj");
/* harmony import */ var _product_views_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-views.page.scss */ "bXuq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");






let ProductViewsPage = class ProductViewsPage {
    constructor(storage, http) {
        this.storage = storage;
        this.http = http;
    }
    ngOnInit() {
    }
};
ProductViewsPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ProductViewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-product-views',
        template: _raw_loader_product_views_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_views_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductViewsPage);



/***/ }),

/***/ "MnAj":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-views/product-views.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n      <ion-menu-button mode=\"ios\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Product Views</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <div class=\"select\">\n        <ion-select placeholder=\"Select One\" value=\"share\" interface=\"popover\" mode=\"ios\">\n          <ion-select-option value=\"share\" selected>Share</ion-select-option>\n          <ion-select-option value=\"like\">Likes</ion-select-option>\n          <ion-select-option value=\"favourites\">Favourites</ion-select-option>\n          <ion-select-option value=\"comments\">Comments</ion-select-option>\n        </ion-select>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-card>\n    <ion-row class=\"chat-time\">\n      12:04 pm\n    </ion-row>\n    <ion-row>\n      <div class=\"avatar\" routerLink=\"/company-qrpayment\">\n        <ion-avatar>\n          <img class=\"border\"\n            src=\"https://einsteinmarketer.ams3.digitaloceanspaces.com/em/uploads/2018/01/ben-sweet-456320-unsplash.jpg\"\n            alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\" routerLink=\"/company-qrpayment\">\n        <p class=\"user-name pclass\">Gopinath Saravanan</p>\n        <ion-row class=\"number\">\n          <p class=\"time pclass\">9881531485</p>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "bXuq":
/*!*******************************************************!*\
  !*** ./src/app/product-views/product-views.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --padding-top: 8px;\n  --padding-bottom: 80px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n  --background: #f5f5f5;\n}\n\nion-card {\n  margin: 0.75em 0px;\n  padding: 7px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.avatar ion-avatar {\n  width: 61px;\n  height: 61px;\n}\n\n.border {\n  border: 0.2px solid #707070;\n}\n\n.text-overflow {\n  padding-top: 10px;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 0px;\n}\n\n.pclass {\n  margin: 0%;\n  line-height: 20px;\n}\n\n.chat-time {\n  color: #871178;\n  font-size: 12px;\n  text-align: right;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  line-height: 1px;\n  padding-top: 4px;\n}\n\n.select {\n  float: right;\n  color: #871178;\n}\n\n.select-text {\n  color: #871178;\n}\n\nlabel {\n  color: #871178;\n}\n\n.select-icon {\n  width: 20px !important;\n  height: 20px !important;\n  color: #871187 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3Qtdmlld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFEQTtFQUNJLDJCQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtBQUtKOztBQUhBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFPSjs7QUFMQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQVFKOztBQUxBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBUUo7O0FBTEE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQVFKOztBQUxBO0VBQ0ksY0FBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtBQVNKOztBQU5BO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBU0oiLCJmaWxlIjoicHJvZHVjdC12aWV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMThweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE4cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiAwLjc1ZW0gMHB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG59XHJcbi5hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNjFweDtcclxuICAgIGhlaWdodDogNjFweDtcclxufVxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMC4ycHggc29saWQgIzcwNzA3MDtcclxufVxyXG4udGV4dC1vdmVyZmxvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4udXNlci1uYW1lIHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnRpbWUge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ucGNsYXNzIHtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmNoYXQtdGltZSB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG59XHJcblxyXG4uc2VsZWN0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcblxyXG4uc2VsZWN0LXRleHQge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxubGFiZWwge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuXHJcbi5zZWxlY3QtaWNvbiB7XHJcbiAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzg3MTE4NyAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "p/Fr":
/*!***************************************************************!*\
  !*** ./src/app/product-views/product-views-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ProductViewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewsPageRoutingModule", function() { return ProductViewsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_views_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-views.page */ "Bi1P");




const routes = [
    {
        path: '',
        component: _product_views_page__WEBPACK_IMPORTED_MODULE_3__["ProductViewsPage"]
    }
];
let ProductViewsPageRoutingModule = class ProductViewsPageRoutingModule {
};
ProductViewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductViewsPageRoutingModule);



/***/ }),

/***/ "pTyn":
/*!*******************************************************!*\
  !*** ./src/app/product-views/product-views.module.ts ***!
  \*******************************************************/
/*! exports provided: ProductViewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewsPageModule", function() { return ProductViewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _product_views_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-views-routing.module */ "p/Fr");
/* harmony import */ var _product_views_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-views.page */ "Bi1P");







let ProductViewsPageModule = class ProductViewsPageModule {
};
ProductViewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_views_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductViewsPageRoutingModule"]
        ],
        declarations: [_product_views_page__WEBPACK_IMPORTED_MODULE_6__["ProductViewsPage"]]
    })
], ProductViewsPageModule);



/***/ })

}]);
//# sourceMappingURL=product-views-product-views-module-es2015.js.map