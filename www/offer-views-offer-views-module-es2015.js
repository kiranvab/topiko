(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offer-views-offer-views-module"],{

/***/ "FjHS":
/*!***************************************************!*\
  !*** ./src/app/offer-views/offer-views.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-name {\n  color: #22272A;\n  font-size: 16px;\n  line-height: 0;\n}\n\n.time {\n  color: #9F9F9F;\n  font-size: 12px;\n}\n\n.chat-time {\n  color: #871178;\n  font-size: 12px;\n}\n\n.select {\n  float: right;\n  color: #871178;\n}\n\n.select-text {\n  color: #871178;\n}\n\nlabel {\n  color: #871178;\n}\n\n.select-icon {\n  width: 20px !important;\n  height: 20px !important;\n  color: #871187 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9mZmVyLXZpZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUVBO0VBRUksY0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFFSSxZQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBRUksY0FBQTtBQUZKOztBQUlBO0VBRUksY0FBQTtBQUZKOztBQUtBO0VBRUksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBSEoiLCJmaWxlIjoib2ZmZXItdmlld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItbmFtZVxyXG57XHJcbiAgICBjb2xvcjojMjIyNzJBO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbn1cclxuLnRpbWVcclxue1xyXG4gICAgY29sb3I6IzlGOUY5RjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY2hhdC10aW1lXHJcbntcclxuICAgIGNvbG9yOiM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5zZWxlY3Rcclxue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuXHJcbi5zZWxlY3QtdGV4dFxyXG57XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5sYWJlbFxyXG57XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuLnNlbGVjdC1pY29uXHJcbntcclxuICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDIwcHggICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzg3MTE4NyAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "SXm6":
/*!***********************************************************!*\
  !*** ./src/app/offer-views/offer-views-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: OfferViewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferViewsPageRoutingModule", function() { return OfferViewsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _offer_views_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offer-views.page */ "oMti");




const routes = [
    {
        path: '',
        component: _offer_views_page__WEBPACK_IMPORTED_MODULE_3__["OfferViewsPage"]
    }
];
let OfferViewsPageRoutingModule = class OfferViewsPageRoutingModule {
};
OfferViewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OfferViewsPageRoutingModule);



/***/ }),

/***/ "crPI":
/*!***************************************************!*\
  !*** ./src/app/offer-views/offer-views.module.ts ***!
  \***************************************************/
/*! exports provided: OfferViewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferViewsPageModule", function() { return OfferViewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _offer_views_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offer-views-routing.module */ "SXm6");
/* harmony import */ var _offer_views_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offer-views.page */ "oMti");







let OfferViewsPageModule = class OfferViewsPageModule {
};
OfferViewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _offer_views_routing_module__WEBPACK_IMPORTED_MODULE_5__["OfferViewsPageRoutingModule"]
        ],
        declarations: [_offer_views_page__WEBPACK_IMPORTED_MODULE_6__["OfferViewsPage"]]
    })
], OfferViewsPageModule);



/***/ }),

/***/ "oMti":
/*!*************************************************!*\
  !*** ./src/app/offer-views/offer-views.page.ts ***!
  \*************************************************/
/*! exports provided: OfferViewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferViewsPage", function() { return OfferViewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_offer_views_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./offer-views.page.html */ "oP78");
/* harmony import */ var _offer_views_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offer-views.page.scss */ "FjHS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let OfferViewsPage = class OfferViewsPage {
    constructor() { }
    ngOnInit() {
    }
};
OfferViewsPage.ctorParameters = () => [];
OfferViewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-offer-views',
        template: _raw_loader_offer_views_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_offer_views_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OfferViewsPage);



/***/ }),

/***/ "oP78":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offer-views/offer-views.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n      <ion-menu-button mode=\"ios\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Offer Views</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <div class=\"select\">\n        <ion-select placeholder=\"Select One\" value=\"share\" interface=\"popover\" mode=\"ios\">\n          <ion-select-option value=\"share\" selected>Share</ion-select-option>\n          <ion-select-option value=\"like\">Likes</ion-select-option>\n          <ion-select-option value=\"favourites\">Favourites</ion-select-option>\n          <ion-select-option value=\"comments\">Comments</ion-select-option>\n        </ion-select>\n      </div>\n    </ion-col>\n  </ion-row>\n  \n\n  <ion-card>\n    <ion-row>\n      <ion-col size=\"2.2\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col>\n        <p class=\"user-name\">Sarah Walker</p>\n        <p class=\"time\">Lorem Ipsum is Simple</p>\n      </ion-col>\n      <ion-col size=\"2.2\" class=\"chat-time\">\n        12:04 pm\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=offer-views-offer-views-module-es2015.js.map