(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["value-history-value-history-module"],{

/***/ "Aiyc":
/*!*******************************************************!*\
  !*** ./src/app/value-history/value-history.module.ts ***!
  \*******************************************************/
/*! exports provided: ValueHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueHistoryPageModule", function() { return ValueHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _value_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./value-history-routing.module */ "r5zO");
/* harmony import */ var _value_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./value-history.page */ "m6Dl");







let ValueHistoryPageModule = class ValueHistoryPageModule {
};
ValueHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _value_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["ValueHistoryPageRoutingModule"]
        ],
        declarations: [_value_history_page__WEBPACK_IMPORTED_MODULE_6__["ValueHistoryPage"]]
    })
], ValueHistoryPageModule);



/***/ }),

/***/ "jI1Q":
/*!*******************************************************!*\
  !*** ./src/app/value-history/value-history.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 1.125em;\n  color: #ffffff;\n  padding: 0px;\n  text-align: left;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 1.3125em;\n  float: right;\n}\n\nion-content {\n  --padding-bottom: 80px;\n  --padding-start: 8px;\n  --padding-end: 8px;\n}\n\n.top .trans {\n  font-size: 0.875em;\n  color: #22272a;\n  margin-left: 1.875em;\n}\n\n.top .month {\n  border: 1px solid #871178;\n  border-radius: 1.25em;\n  color: #871178;\n  text-align: center;\n  font-size: 0.875em;\n  padding: 0.15em 0.2em;\n  margin: 8px;\n  margin-right: 0.8125em;\n}\n\n.mon {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.mont {\n  width: 97px;\n}\n\n.first {\n  box-shadow: 0px 0.1875em 0.375em #00000029;\n  border-radius: 0.1875em;\n}\n\n.date {\n  text-align: left;\n  color: #9f9f9f;\n  font-size: 0.625em;\n}\n\n.time {\n  text-align: right;\n  color: #9f9f9f;\n  font-size: 0.625em;\n}\n\n.row .paid {\n  color: #707070;\n  font-size: 0.875em;\n}\n\n.row .amount {\n  color: #871178;\n  font-size: 0.875em;\n}\n\n.row ion-col {\n  text-align: center;\n}\n\n.dat p {\n  margin: 0% 0.75em;\n  margin-top: 0.3125em;\n}\n\n.seperator {\n  margin: 22px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZhbHVlLWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQUo7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7QUFHSjs7QUFDQTtFQUNJLDBDQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0FBT0o7O0FBTEE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBUUo7O0FBTkE7RUFDSSxnQkFBQTtBQVNKIiwiZmlsZSI6InZhbHVlLWhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaGVhZFxyXG4vLyBoZWFkXHJcbmlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuaW9uLWhlYWRlciBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4zMTI1ZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcclxufVxyXG5cclxuLnRvcCAudHJhbnMge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBtYXJnaW4tbGVmdDogMS44NzVlbTtcclxufVxyXG4udG9wIC5tb250aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODcxMTc4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS4yNWVtO1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBwYWRkaW5nOiAwLjE1ZW0gMC4yZW07XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogMC44MTI1ZW07XHJcbn1cclxuLm1vbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1vbnQge1xyXG4gICAgd2lkdGg6IDk3cHg7XHJcbn1cclxuXHJcbi8vIGZpcnN0LWNhcmRcclxuLmZpcnN0IHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwLjE4NzVlbSAwLjM3NWVtICMwMDAwMDAyOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMTg3NWVtO1xyXG59XHJcbi5kYXRlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIGZvbnQtc2l6ZTogMC42MjVlbTtcclxufVxyXG4udGltZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAwLjYyNWVtO1xyXG59XHJcbi5yb3cgLnBhaWQge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbn1cclxuLnJvdyAuYW1vdW50IHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG59XHJcbi5yb3cgaW9uLWNvbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmRhdCBwIHtcclxuICAgIG1hcmdpbjogMCUgMC43NWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC4zMTI1ZW07XHJcbn1cclxuLnNlcGVyYXRvciB7XHJcbiAgICBtYXJnaW46IDIycHggMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "m6Dl":
/*!*****************************************************!*\
  !*** ./src/app/value-history/value-history.page.ts ***!
  \*****************************************************/
/*! exports provided: ValueHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueHistoryPage", function() { return ValueHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_value_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./value-history.page.html */ "nxkU");
/* harmony import */ var _value_history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./value-history.page.scss */ "jI1Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ValueHistoryPage = class ValueHistoryPage {
    constructor() { }
    ngOnInit() {
    }
};
ValueHistoryPage.ctorParameters = () => [];
ValueHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-value-history',
        template: _raw_loader_value_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_value_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ValueHistoryPage);



/***/ }),

/***/ "nxkU":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/value-history/value-history.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Value History</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class=\"top\">\n    <ion-col>\n      <p class=\"trans\">Transaction</p>\n    </ion-col>\n    <ion-col class=\"mon\">\n      <div class=\"mont\">\n        <p class=\"month\">Month <ion-icon name=\"chevron-down\"></ion-icon>\n        </p>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-card class=\"first\">\n    <ion-row class=\"dat\">\n      <ion-col class=\"date\">\n        <p>05/24/2021</p>\n      </ion-col>\n      <ion-col class=\"time\">\n        <p>11:30 AM</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row\">\n      <ion-col>\n        <p class=\"paid\">Paid Amount</p>\n        <p class=\"amount\">20,000</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"paid\">Value Added</p>\n        <p class=\"amount\">21,500</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"paid\">Benefited %</p>\n        <p class=\"amount\">1,500(7.5%)</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"first\">\n    <ion-row class=\"dat\">\n      <ion-col class=\"date\">\n        <p>05/24/2021</p>\n      </ion-col>\n      <ion-col class=\"time\">\n        <p>11:30 AM</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row\">\n      <ion-col>\n        <p class=\"paid\">Paid Amount</p>\n        <p class=\"amount\">20,000</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"paid\">Value Added</p>\n        <p class=\"amount\">21,500</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"paid\">Benefited %</p>\n        <p class=\"amount\">1,500(7.5%)</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"first\">\n    <ion-row class=\"dat\">\n      <ion-col class=\"date\">\n        <p>05/24/2021</p>\n      </ion-col>\n      <ion-col class=\"time\">\n        <p>11:30 AM</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row\">\n      <ion-col>\n        <p class=\"paid\">Paid Amount</p>\n        <p class=\"amount\">20,000</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"paid\">Value Added</p>\n        <p class=\"amount\">21,500</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"paid\">Benefited %</p>\n        <p class=\"amount\">1,500(7.5%)</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"first\">\n    <ion-row class=\"dat\">\n      <ion-col class=\"date\">\n        <p>05/24/2021</p>\n      </ion-col>\n      <ion-col class=\"time\">\n        <p>11:30 AM</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row\">\n      <ion-col>\n        <p class=\"paid\">Paid Amount</p>\n        <p class=\"amount\">20,000</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"paid\">Value Added</p>\n        <p class=\"amount\">21,500</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"paid\">Benefited %</p>\n        <p class=\"amount\">1,500(7.5%)</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "r5zO":
/*!***************************************************************!*\
  !*** ./src/app/value-history/value-history-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ValueHistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueHistoryPageRoutingModule", function() { return ValueHistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _value_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./value-history.page */ "m6Dl");




const routes = [
    {
        path: '',
        component: _value_history_page__WEBPACK_IMPORTED_MODULE_3__["ValueHistoryPage"]
    }
];
let ValueHistoryPageRoutingModule = class ValueHistoryPageRoutingModule {
};
ValueHistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ValueHistoryPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=value-history-value-history-module-es2015.js.map