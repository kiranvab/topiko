(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "6X2B":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notifications.page.html */ "hzlZ");
/* harmony import */ var _notifications_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.page.scss */ "xpQ7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NotificationsPage = class NotificationsPage {
    constructor() { }
    ngOnInit() {
    }
};
NotificationsPage.ctorParameters = () => [];
NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notifications',
        template: _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notifications_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotificationsPage);



/***/ }),

/***/ "cxoL":
/*!***************************************************************!*\
  !*** ./src/app/notifications/notifications-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NotificationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function() { return NotificationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.page */ "6X2B");




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ "hzlZ":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-row>\n      <ion-col><ion-title>Notifications</ion-title></ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-segment \n    value=\"alerts\" \n    color=\"tertiary\" \n    scrollable=\"true\"\n    mode=\"ios\"\n    [(ngModel)]=\"segmentModel\" \n    (ionChange)=\"segmentChanged($event)\">\n\n      <ion-segment-button value=\"alerts\">\n        <ion-label>Alerts</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"notifications\">\n        <ion-label>Notifications</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"messages\">\n        <ion-label>Admin Message</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n \n<div  *ngIf=\"segmentModel === 'alerts'\">\n<ion-item>\n    Ganesh Super Market has Replied to your Enquiry\n</ion-item>\n\n<ion-item >\n    New pahrmacy has Opened in your neighbourhood\n</ion-item>\n\n<ion-item>\n    Topiko has Recomended latest store near buy based in your previous wishlist and products selected\n</ion-item>\n\n<ion-item>\n    Your have added Appollo Pharmacy Kukatpally to your wish list\n</ion-item>\n\n<ion-item color=\"light\">\n  Ganesh Super Market has Replied to your Enquiry\n</ion-item>\n\n<ion-item >\n  New pahrmacy has Opened in your neighbourhood\n</ion-item>\n\n<ion-item>\n  Topiko has Recomended latest store near buy based in your previous wishlist and products selected\n</ion-item>\n\n<ion-item>\n  Your have added Appollo Pharmacy Kukatpally to your wish list\n</ion-item>\n</div>\n\n<div  *ngIf=\"segmentModel === 'notifications'\">\n  <ion-item>\n      Ganesh Super Market has Replied to your Enquiry\n  </ion-item>\n  \n  <ion-item >\n      New pahrmacy has Opened in your neighbourhood\n  </ion-item>\n  \n  <ion-item>\n      Topiko has Recomended latest store near buy based in your previous wishlist and products selected\n  </ion-item>\n  \n  <ion-item>\n      Your have added Appollo Pharmacy Kukatpally to your wish list\n  </ion-item>\n  \n  <ion-item color=\"light\">\n    Ganesh Super Market has Replied to your Enquiry\n  </ion-item>\n  \n  <ion-item >\n    New pahrmacy has Opened in your neighbourhood\n  </ion-item>\n  \n  <ion-item>\n    Topiko has Recomended latest store near buy based in your previous wishlist and products selected\n  </ion-item>\n  \n  <ion-item>\n    Your have added Appollo Pharmacy Kukatpally to your wish list\n  </ion-item>\n  </div>\n\n  <div  *ngIf=\"segmentModel === 'messages'\">\n    <ion-item>\n        Ganesh Super Market has Replied to your Enquiry\n    </ion-item>\n    \n    <ion-item >\n        New pahrmacy has Opened in your neighbourhood\n    </ion-item>\n    \n    <ion-item>\n        Topiko has Recomended latest store near buy based in your previous wishlist and products selected\n    </ion-item>\n    \n    <ion-item>\n        Your have added Appollo Pharmacy Kukatpally to your wish list\n    </ion-item>\n    \n    <ion-item color=\"light\">\n      Ganesh Super Market has Replied to your Enquiry\n    </ion-item>\n    \n    <ion-item >\n      New pahrmacy has Opened in your neighbourhood\n    </ion-item>\n    \n    <ion-item>\n      Topiko has Recomended latest store near buy based in your previous wishlist and products selected\n    </ion-item>\n    \n    <ion-item>\n      Your have added Appollo Pharmacy Kukatpally to your wish list\n    </ion-item>\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ "wMrW":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications-routing.module */ "cxoL");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "6X2B");







let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })
], NotificationsPageModule);



/***/ }),

/***/ "xpQ7":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("strong {\n  line-height: 10px;\n  display: block;\n  width: 100%;\n}\n\np {\n  line-height: 12px;\n  font-size: 10px;\n  color: #555;\n  display: block;\n  width: 100%;\n}\n\n.unread {\n  background: fuchsia;\n}\n\nion-item {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUE7RUFFSSxtQkFBQTtBQUVKOztBQUFBO0VBRUksZUFBQTtBQUVKIiwiZmlsZSI6Im5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Ryb25ne1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbnB7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udW5yZWFkXHJcbntcclxuICAgIGJhY2tncm91bmQ6IGZ1Y2hzaWE7XHJcbn1cclxuaW9uLWl0ZW1cclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map