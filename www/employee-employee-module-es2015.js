(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-employee-module"],{

/***/ "AtH2":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --padding-top: 8px;\n  --padding-bottom: 80px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n}\n\nion-card {\n  margin: 0.75em 0px;\n  padding: 9px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.avatar ion-avatar {\n  width: 65px;\n  height: 65px;\n}\n\n.border {\n  border: 0.2px solid #707070;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.user-name ion-icon {\n  color: #39ac00;\n}\n\n.ellipsis ion-icon {\n  font-size: 18px;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 0px;\n}\n\n.pclass {\n  margin: 0%;\n  line-height: 18px;\n}\n\n.lang {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0%;\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  font-size: 14px;\n  margin: 0px 10px;\n  color: #871178;\n  word-spacing: 16px;\n}\n\n.scrol {\n  display: flex;\n  overflow-x: auto;\n  height: 30px;\n  margin-bottom: 10px;\n}\n\n.scroll {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.chats .text {\n  color: #707070;\n  font-size: 14px;\n  text-align: center;\n  margin-bottom: 12px;\n}\n\n.chats .number {\n  color: #871178;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 12px;\n}\n\n.seperator {\n  margin: 14px 0px;\n  margin-bottom: 25px;\n}\n\nion-row .gps {\n  font-size: 16px;\n  color: #22272a;\n  line-height: 1.3125em;\n}\n\nion-row ion-toggle {\n  --width: 34px;\n  --height: 14px;\n  --background-checked: linear-gradient(#871178, #3c1378);\n  --handle-background-checked: #9f9f9f;\n  padding-top: 0.71875em;\n  float: right;\n}\n\n.tog {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.inp ion-input {\n  border: 1px solid #707070;\n  border-radius: 0.3125em;\n}\n\n.btn {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.btn ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 1.125em;\n  width: 99px;\n  height: 30px;\n}\n\nion-fab-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  height: 4.375em;\n  width: 4.375em;\n}\n\n.fab ion-icon {\n  color: #ffffff;\n  height: 45px;\n  width: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VtcGxveWVlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksMkJBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFRSjs7QUFOQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVNKOztBQVBBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBVUo7O0FBUkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFXSjs7QUFSQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVdKOztBQVRBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBWUo7O0FBVkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBYUo7O0FBVkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBYUo7O0FBWEE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVEQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFjSjs7QUFaQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBZUo7O0FBWkE7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0FBZUo7O0FBYkE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWdCSjs7QUFkQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFpQko7O0FBYkE7RUFDSSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFnQko7O0FBZEE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFpQkoiLCJmaWxlIjoiZW1wbG95ZWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy10b3A6IDhweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxOHB4O1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMC43NWVtIDBweDtcclxuICAgIHBhZGRpbmc6IDlweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxufVxyXG5cclxuLmF2YXRhciBpb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcbi5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAwLjJweCBzb2xpZCAjNzA3MDcwO1xyXG59XHJcbi51c2VyLW5hbWUge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4udXNlci1uYW1lIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjMzlhYzAwO1xyXG59XHJcbi5lbGxpcHNpcyBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnRpbWUge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ucGNsYXNzIHtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG4ubGFuZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgd29yZC1zcGFjaW5nOiAxNnB4O1xyXG59XHJcbi5zY3JvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnNjcm9sbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbi5jaGF0cyAudGV4dCB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuLmNoYXRzIC5udW1iZXIge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbi5zZXBlcmF0b3Ige1xyXG4gICAgbWFyZ2luOiAxNHB4IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbmlvbi1yb3cgLmdwcyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjMxMjVlbTtcclxufVxyXG5pb24tcm93IGlvbi10b2dnbGUge1xyXG4gICAgLS13aWR0aDogMzRweDtcclxuICAgIC0taGVpZ2h0OiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzlmOWY5ZjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjcxODc1ZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnRvZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmlucCBpb24taW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNWVtO1xyXG59XHJcbi5idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJ0biBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgd2lkdGg6IDk5cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi8vIGZhYlxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDQuMzc1ZW07XHJcbiAgICB3aWR0aDogNC4zNzVlbTtcclxufVxyXG4uZmFiIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "Bkem":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Employee</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor=\"let emp of employees; let i=index\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"{{emp.image}}\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name pclass\">{{emp.name}} <ion-icon name=\"ellipse\"></ion-icon>\n        </p>\n        <p class=\"time pclass\">{{emp.designation}}</p>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ellipsis\" (click)=\"openMenu(i)\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <div class=\"scrol\">\n      <p class=\"lang pclass\">{{emp.language}}</p>\n    </div>\n    <ion-row class=\"chats scroll\">\n      <ion-col>\n        <p class=\"text pclass\">Chat</p>\n        <p class=\"number pclass\">{{emp.chat}}</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"text pclass\">Video</p>\n        <p class=\"number pclass\">{{emp.video}}</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"text pclass\">Call</p>\n        <p class=\"number pclass\">{{emp.call_access}}</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col class=\"calls\">\n        <p class=\"text pclass\">Branches</p>\n        <p class=\"number pclass\">01</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"tog\" style=\"height: 36px; margin-top: -8px;\">\n      <p class=\"gps\">Call Record Access</p>\n      <ion-toggle *ngIf=\"emp.call_records==1\" checked mode=\"md\" readonly></ion-toggle>\n      <ion-toggle *ngIf=\"emp.call_records==0\" mode=\"md\" readonly></ion-toggle>\n    </ion-row>\n    <ion-row class=\"tog\">\n      <p class=\"gps\">Control Employee</p>\n      <ion-toggle checked mode=\"md\"></ion-toggle>\n    </ion-row>\n\n    <ion-row class=\"inp\">\n      <ion-col style=\"padding-left: 0%;\">\n        <ion-input placeholder=\"Enter OTP here\"></ion-input>\n      </ion-col>\n      <ion-col class=\"btn\">\n        <ion-button>Submit</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/add-employee\">\n    <ion-fab-button class=\"fab\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "FvOc":
/*!*****************************************************!*\
  !*** ./src/app/employee/employee-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EmployeePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePageRoutingModule", function() { return EmployeePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _employee_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.page */ "VcmA");




const routes = [
    {
        path: '',
        component: _employee_page__WEBPACK_IMPORTED_MODULE_3__["EmployeePage"]
    }
];
let EmployeePageRoutingModule = class EmployeePageRoutingModule {
};
EmployeePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmployeePageRoutingModule);



/***/ }),

/***/ "PgJR":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/*! exports provided: EmployeePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePageModule", function() { return EmployeePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-routing.module */ "FvOc");
/* harmony import */ var _employee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee.page */ "VcmA");







let EmployeePageModule = class EmployeePageModule {
};
EmployeePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _employee_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeePageRoutingModule"]
        ],
        declarations: [_employee_page__WEBPACK_IMPORTED_MODULE_6__["EmployeePage"]]
    })
], EmployeePageModule);



/***/ }),

/***/ "VcmA":
/*!*******************************************!*\
  !*** ./src/app/employee/employee.page.ts ***!
  \*******************************************/
/*! exports provided: EmployeePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePage", function() { return EmployeePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employee_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employee.page.html */ "Bkem");
/* harmony import */ var _employee_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.page.scss */ "AtH2");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "Sy1n");









let EmployeePage = class EmployeePage {
    constructor(route, actionsheetCtrl, storage, http, router) {
        this.route = route;
        this.actionsheetCtrl = actionsheetCtrl;
        this.storage = storage;
        this.http = http;
        this.router = router;
    }
    ngOnInit() {
        this.router.params.subscribe((val) => {
            this.storage.get("mybusiness").then((val) => {
                this.mybusiness = val;
                console.log("My business Details:", this.mybusiness);
                this.owner = this.mybusiness[0].owner_name;
                this.address = this.mybusiness[0].business_address;
                this.busines_name = this.mybusiness[0].business_name;
                this.bid = this.mybusiness[0].id;
                this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getemployees.php?bid=" + this.bid).subscribe(data => {
                    this.employees = data;
                    console.log("Employees", this.employees);
                });
            });
        });
    }
    openMenu(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionsheetCtrl.create({
                // header: 'Modify your album',  
                buttons: [
                    {
                        text: 'Edit',
                        handler: () => {
                            this.storage.set("empid", this.employees[i].id);
                            this.route.navigate(['/edit-employee']);
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            console.log(this.employees[i].id);
                            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "deleteemployee.php?empid=" + this.employees[i].id).subscribe(Response => {
                                if (Response = 1) {
                                    alert("Employee Deleted Sucesfully");
                                }
                                else {
                                    alert("Failed to delete Employee");
                                }
                            });
                            console.log('Archive clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
EmployeePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
EmployeePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-employee',
        template: _raw_loader_employee_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmployeePage);



/***/ })

}]);
//# sourceMappingURL=employee-employee-module-es2015.js.map