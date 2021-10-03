(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qr-payments-qr-payments-module"],{

/***/ "+VcV":
/*!***********************************************************!*\
  !*** ./src/app/qr-payments/qr-payments-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: QrPaymentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrPaymentsPageRoutingModule", function() { return QrPaymentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _qr_payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qr-payments.page */ "aT4V");




const routes = [
    {
        path: '',
        component: _qr_payments_page__WEBPACK_IMPORTED_MODULE_3__["QrPaymentsPage"]
    }
];
let QrPaymentsPageRoutingModule = class QrPaymentsPageRoutingModule {
};
QrPaymentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QrPaymentsPageRoutingModule);



/***/ }),

/***/ "SXsa":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/qr-payments/qr-payments.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>QR Payments</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor=\"let upi of businessupi; let i = index;\">\n    <ion-row>\n      <div class=\"avatar\" (click)=\"qrdetails(i)\">\n        <ion-avatar>\n          <img class=\"border\"\n            src=\"https://einsteinmarketer.ams3.digitaloceanspaces.com/em/uploads/2018/01/ben-sweet-456320-unsplash.jpg\"\n            alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\" routerLink=\"/company-qrpayment\">\n        <p class=\"user-name pclass\">{{upi.account_name}}</p>\n        <ion-row class=\"number\">\n          <p class=\"time pclass\">{{upi.upi_number}}</p>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"time\" size=\"2\">\n        <ion-row class=\"qr\">\n          <ion-icon name=\"qr-code-outline\"></ion-icon>\n          {{upi.upi_name}}\n        </ion-row>\n       \n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  \n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"/add-qr-payments\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n</ion-content>");

/***/ }),

/***/ "aT4V":
/*!*************************************************!*\
  !*** ./src/app/qr-payments/qr-payments.page.ts ***!
  \*************************************************/
/*! exports provided: QrPaymentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrPaymentsPage", function() { return QrPaymentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_qr_payments_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./qr-payments.page.html */ "SXsa");
/* harmony import */ var _qr_payments_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qr-payments.page.scss */ "fJwS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");







let QrPaymentsPage = class QrPaymentsPage {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    ngOnInit() {
        this.storage.get("bid").then(val => {
            this.buid = val;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getbusinessupi.php?bid=" + this.buid).subscribe(data => {
                this.businessupi = data;
                console.log(this.businessupi);
            });
        });
    }
    qrdetails(i) {
        console.log(i);
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].apply + "getupi.php?qrid=" + this.businessupi[i].id).subscribe(data => {
            console.log("upi detials", data);
        });
    }
};
QrPaymentsPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
QrPaymentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-qr-payments',
        template: _raw_loader_qr_payments_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_qr_payments_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], QrPaymentsPage);



/***/ }),

/***/ "fJwS":
/*!***************************************************!*\
  !*** ./src/app/qr-payments/qr-payments.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --padding-top: 8px;\n  --padding-bottom: 80px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n  --background: #f5f5f5;\n}\n\nion-card {\n  margin: 0.75em 0px;\n  padding: 7px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.avatar ion-avatar {\n  width: 61px;\n  height: 61px;\n}\n\n.border {\n  border: 0.2px solid #707070;\n}\n\n.text-overflow {\n  padding-top: 10px;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 0px;\n}\n\n.pclass {\n  margin: 0%;\n  line-height: 20px;\n}\n\n.ellipsis ion-icon {\n  font-size: 18px;\n}\n\n.pay {\n  text-align: center;\n}\n\n.pay ion-title {\n  font-size: 1em;\n  letter-spacing: 0.0375em;\n  line-height: 1em;\n}\n\nion-card {\n  box-shadow: #00000029 0px 3px 6px;\n}\n\nion-avatar {\n  width: 4em;\n  height: 4em;\n}\n\n.top p {\n  margin: 0.6875em 1.875em;\n  color: #707070;\n}\n\n.name {\n  padding-left: 0%;\n}\n\n.name p {\n  font-size: 1.125em;\n  color: #22272a;\n  padding-top: 0.375em;\n  margin: 0px;\n}\n\n.number p {\n  font-size: 0.875em;\n  color: #9f9f9f;\n  margin: 0px;\n  padding-top: 0.375em;\n}\n\n.qr ion-icon {\n  height: 2.6625em;\n  width: 2.8125em;\n}\n\n.pay img {\n  width: 33.75px;\n  height: 15px;\n}\n\nion-fab-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  height: 4.375em;\n  width: 4.375em;\n}\n\nion-fab-button ion-icon {\n  height: 45px;\n  width: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3FyLXBheW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSwyQkFBQTtBQUlKOztBQUZBO0VBQ0ksaUJBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQU1KOztBQVVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBUEo7O0FBU0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFOSjs7QUFRQTtFQUNJLGVBQUE7QUFMSjs7QUFRQTtFQUNJLGtCQUFBO0FBTEo7O0FBT0E7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU1BO0VBQ0ksaUNBQUE7QUFISjs7QUFLQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBRko7O0FBSUE7RUFDSSx3QkFBQTtFQUNBLGNBQUE7QUFESjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUVKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0ksK0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUtKIiwiZmlsZSI6InFyLXBheW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMThweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDAuNzVlbSAwcHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbn1cclxuLmF2YXRhciBpb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA2MXB4O1xyXG4gICAgaGVpZ2h0OiA2MXB4O1xyXG59XHJcbi5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAwLjJweCBzb2xpZCAjNzA3MDcwO1xyXG59XHJcbi50ZXh0LW92ZXJmbG93IHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi51c2VyLW5hbWUge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4vLyAudXNlci1uYW1lIGlvbi1pY29uIHtcclxuLy8gICAgIGNvbG9yOiAjMzlhYzAwO1xyXG4vLyB9XHJcbi8vIC5zdGFyIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gfVxyXG4vLyAuc3RhciBpb24taWNvbiB7XHJcbi8vICAgICBjb2xvcjogI2ZjYjkwMDtcclxuLy8gfVxyXG4vLyAuc3RhciBzcGFuIHAge1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjVlbTtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4vLyAgICAgY29sb3I6ICMyMjI3MmE7XHJcbi8vIH1cclxuLnRpbWUge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ucGNsYXNzIHtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG4uZWxsaXBzaXMgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ucGF5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGF5IGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzNzVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogIzAwMDAwMDI5IDBweCAzcHggNnB4O1xyXG59XHJcbmlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDRlbTtcclxuICAgIGhlaWdodDogNGVtO1xyXG59XHJcbi50b3AgcCB7XHJcbiAgICBtYXJnaW46IDAuNjg3NWVtIDEuODc1ZW07XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG4ubmFtZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG59XHJcbi5uYW1lIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBwYWRkaW5nLXRvcDogMC4zNzVlbTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5udW1iZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDAuMzc1ZW07XHJcbn1cclxuXHJcbi5xciBpb24taWNvbiB7XHJcbiAgICBoZWlnaHQ6IDIuNjYyNWVtO1xyXG4gICAgd2lkdGg6IDIuODEyNWVtO1xyXG59XHJcbi5wYXkgaW1nIHtcclxuICAgIHdpZHRoOiAzMy43NXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG59XHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGhlaWdodDogNC4zNzVlbTtcclxuICAgIHdpZHRoOiA0LjM3NWVtO1xyXG59XHJcbmlvbi1mYWItYnV0dG9uIGlvbi1pY29uIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "h52t":
/*!***************************************************!*\
  !*** ./src/app/qr-payments/qr-payments.module.ts ***!
  \***************************************************/
/*! exports provided: QrPaymentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrPaymentsPageModule", function() { return QrPaymentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _qr_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qr-payments-routing.module */ "+VcV");
/* harmony import */ var _qr_payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qr-payments.page */ "aT4V");







let QrPaymentsPageModule = class QrPaymentsPageModule {
};
QrPaymentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _qr_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["QrPaymentsPageRoutingModule"]
        ],
        declarations: [_qr_payments_page__WEBPACK_IMPORTED_MODULE_6__["QrPaymentsPage"]]
    })
], QrPaymentsPageModule);



/***/ })

}]);
//# sourceMappingURL=qr-payments-qr-payments-module-es2015.js.map