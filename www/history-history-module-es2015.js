(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "9u+z":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-routing.module */ "nQSQ");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "Z2Lo");







let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"]
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })
], HistoryPageModule);



/***/ }),

/***/ "M4g1":
/*!*******************************************!*\
  !*** ./src/app/history/history.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 18px;\n  color: #ffffff;\n  text-align: center;\n}\n\nion-content {\n  --padding-top: 10px;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-bottom: 18px;\n}\n\nion-card {\n  border-radius: 0%;\n  box-shadow: 0px 3px 6px #00000029;\n  padding: 1px 10px 10px 10px;\n}\n\n.img ion-col {\n  padding-top: 0%;\n}\n\n.image .avatar {\n  width: 65px;\n  height: 65px;\n}\n\n.title {\n  text-align: left;\n}\n\nh5 {\n  padding-top: 3px;\n  font-size: 1.125em;\n  color: #22272a;\n  margin: 0%;\n  font-weight: 40%;\n  line-height: 22px;\n}\n\np {\n  font-size: 12px;\n  color: #9f9f9f;\n  margin: 0%;\n  line-height: 18px;\n}\n\n.inline {\n  text-align: right;\n}\n\n.inline ion-col {\n  padding: 0%;\n}\n\n.inline span {\n  font-size: 10px;\n  color: #871178;\n  letter-spacing: 0.0375em;\n  padding-right: 0.8rem;\n}\n\n.inline .date {\n  margin-right: 0.75em;\n}\n\n.inline .time {\n  padding-right: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFLSjs7QUFIQTtFQUNJLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQVFKOztBQU5BO0VBQ0ksaUJBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQVdKOztBQVRBO0VBQ0ksb0JBQUE7QUFZSjs7QUFWQTtFQUNJLGlCQUFBO0FBYUoiLCJmaWxlIjoiaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMThweDtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIHBhZGRpbmc6IDFweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG4uaW1nIGlvbi1jb2wge1xyXG4gICAgcGFkZGluZy10b3A6IDAlO1xyXG59XHJcbi5pbWFnZSAuYXZhdGFyIHtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmg1IHtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBmb250LXdlaWdodDogNDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxucCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG4uaW5saW5lIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5pbmxpbmUgaW9uLWNvbCB7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufVxyXG4uaW5saW5lIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMzc1ZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XHJcbn1cclxuLmlubGluZSAuZGF0ZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNzVlbTtcclxufVxyXG4uaW5saW5lIC50aW1lIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "Z2Lo":
/*!*****************************************!*\
  !*** ./src/app/history/history.page.ts ***!
  \*****************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./history.page.html */ "kofg");
/* harmony import */ var _history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.page.scss */ "M4g1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HistoryPage = class HistoryPage {
    constructor() { }
    ngOnInit() {
    }
};
HistoryPage.ctorParameters = () => [];
HistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-history',
        template: _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HistoryPage);



/***/ }),

/***/ "kofg":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>History</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"firstbox\">\n    <ion-row class=\"inline\">\n      <ion-col size=\"12\">\n        <span class=\"date\">04/29/2021</span>\n        <span class=\"time\">10.03AM</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"img\">\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://img.wallpapersafari.com/desktop/1366/768/47/36/mb9WVN.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"title\">\n        <h5>Murali</h5>\n        <ion-row class=\"carnum\">\n          <p>Vehicle</p>\n        </ion-row>\n        <ion-row class=\"carnum\">\n          <p>TN 22 DH 9133</p>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"firstbox\">\n    <ion-row class=\"inline\">\n      <ion-col size=\"12\">\n        <span class=\"date\">04/29/2021</span>\n        <span class=\"time\">10.03AM</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"img\">\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://img.wallpapersafari.com/desktop/1366/768/47/36/mb9WVN.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"title\">\n        <h5>Murali</h5>\n        <ion-row class=\"carnum\">\n          <p>Vehicle</p>\n        </ion-row>\n        <ion-row class=\"carnum\">\n          <p>TN 22 DH 9133</p>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"firstbox\">\n    <ion-row class=\"inline\">\n      <ion-col size=\"12\">\n        <span class=\"date\">04/29/2021</span>\n        <span class=\"time\">10.03AM</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"img\">\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://img.wallpapersafari.com/desktop/1366/768/47/36/mb9WVN.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"title\">\n        <h5>Murali</h5>\n        <ion-row class=\"carnum\">\n          <p>Vehicle</p>\n        </ion-row>\n        <ion-row class=\"carnum\">\n          <p>TN 22 DH 9133</p>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "nQSQ":
/*!***************************************************!*\
  !*** ./src/app/history/history-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function() { return HistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.page */ "Z2Lo");




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=history-history-module-es2015.js.map