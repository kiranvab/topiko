(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-employee-module"], {
    /***/
    "AtH2": function AtH2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --padding-top: 8px;\n  --padding-bottom: 80px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n}\n\nion-card {\n  margin: 0.75em 0px;\n  padding: 7px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.avatar ion-avatar {\n  width: 65px;\n  height: 65px;\n}\n\n.border {\n  border: 0.2px solid #707070;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.user-name ion-icon {\n  color: #39ac00;\n}\n\n.ellipsis ion-icon {\n  font-size: 18px;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 0px;\n}\n\n.pclass {\n  margin: 0%;\n  line-height: 18px;\n}\n\n.lang {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0%;\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  font-size: 14px;\n  margin: 0px 10px;\n  color: #871178;\n}\n\n.scrol {\n  display: flex;\n  overflow-x: auto;\n  height: 30px;\n  margin-bottom: 10px;\n}\n\n.scroll {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.chats .text {\n  color: #707070;\n  font-size: 14px;\n  text-align: center;\n  margin-bottom: 12px;\n}\n\n.chats .number {\n  color: #871178;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 12px;\n}\n\n.seperator {\n  margin: 14px 0px;\n  margin-bottom: 25px;\n}\n\nion-row .gps {\n  font-size: 16px;\n  color: #22272a;\n  line-height: 1.3125em;\n}\n\nion-row ion-toggle {\n  --width: 34px;\n  --height: 14px;\n  --background-checked: linear-gradient(#871178, #3c1378);\n  --handle-background-checked: #9f9f9f;\n  padding-top: 0.71875em;\n  float: right;\n}\n\n.tog {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.inp ion-input {\n  border: 1px solid #707070;\n  border-radius: 0.3125em;\n}\n\n.btn {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.btn ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 1.125em;\n  width: 99px;\n  height: 30px;\n}\n\nion-fab-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  height: 4.375em;\n  width: 4.375em;\n}\n\n.fab ion-icon {\n  color: #ffffff;\n  height: 45px;\n  width: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VtcGxveWVlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksMkJBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFRSjs7QUFOQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFTSjs7QUFQQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVVKOztBQVJBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBV0o7O0FBUkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFXSjs7QUFUQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVlKOztBQVZBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQWFKOztBQVZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQWFKOztBQVhBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSx1REFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBY0o7O0FBWkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQWVKOztBQVpBO0VBQ0kseUJBQUE7RUFDQSx1QkFBQTtBQWVKOztBQWJBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFnQko7O0FBZEE7RUFDSSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBaUJKOztBQWJBO0VBQ0ksK0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBZ0JKOztBQWRBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBaUJKIiwiZmlsZSI6ImVtcGxveWVlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMThweDtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDAuNzVlbSAwcHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbn1cclxuXHJcbi5hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMC4ycHggc29saWQgIzcwNzA3MDtcclxufVxyXG4udXNlci1uYW1lIHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnVzZXItbmFtZSBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzM5YWMwMDtcclxufVxyXG4uZWxsaXBzaXMgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi50aW1lIHtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnBjbGFzcyB7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuLmxhbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG4uc2Nyb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zY3JvbGwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcblxyXG4uY2hhdHMgLnRleHQge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbi5jaGF0cyAubnVtYmVyIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4uc2VwZXJhdG9yIHtcclxuICAgIG1hcmdpbjogMTRweCAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG5pb24tcm93IC5ncHMge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zMTI1ZW07XHJcbn1cclxuaW9uLXJvdyBpb24tdG9nZ2xlIHtcclxuICAgIC0td2lkdGg6IDM0cHg7XHJcbiAgICAtLWhlaWdodDogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM5ZjlmOWY7XHJcbiAgICBwYWRkaW5nLXRvcDogMC43MTg3NWVtO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi50b2cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnAgaW9uLWlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVlbTtcclxufVxyXG4uYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5idG4gaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICAgIHdpZHRoOiA5OXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4vLyBmYWJcclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiA0LjM3NWVtO1xyXG4gICAgd2lkdGg6IDQuMzc1ZW07XHJcbn1cclxuLmZhYiBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "Bkem": function Bkem(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Employee</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor=\"let emp of employees; let i=index\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"{{emp.image}}\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name pclass\">{{emp.name}} <ion-icon name=\"ellipse\"></ion-icon>\n        </p>\n        <p class=\"time pclass\">{{emp.designation}}</p>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ellipsis\" (click)=\"openMenu(i)\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <div class=\"scrol\">\n      <p class=\"lang pclass\">{{emp.language}}</p>\n    </div>\n    <ion-row class=\"chats scroll\">\n      <ion-col>\n        <p class=\"text pclass\">Chat</p>\n        <p class=\"number pclass\">{{emp.chat}}</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"text pclass\">Video</p>\n        <p class=\"number pclass\">{{emp.video}}</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"text pclass\">Call</p>\n        <p class=\"number pclass\">{{emp.call_access}}</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col class=\"calls\">\n        <p class=\"text pclass\">Branches</p>\n        <p class=\"number pclass\">01</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"tog\">\n      <p class=\"gps\">Call Record Access</p>\n      <ion-toggle *ngIf=\"emp.call_records==1\" checked mode=\"md\" readonly></ion-toggle>\n      <ion-toggle *ngIf=\"emp.call_records==0\"  mode=\"md\" readonly></ion-toggle>\n    </ion-row>\n    <ion-row class=\"tog\">\n      <p class=\"gps\">Control Employee</p>\n      <ion-toggle checked mode=\"md\"></ion-toggle>\n    </ion-row>\n\n    <ion-row class=\"inp\">\n      <ion-col>\n        <ion-input placeholder=\"Enter OTP here\"></ion-input>\n      </ion-col>\n      <ion-col class=\"btn\">\n        <ion-button>Submit</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  \n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/add-employee\">\n    <ion-fab-button class=\"fab\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>";
      /***/
    },

    /***/
    "FvOc": function FvOc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeePageRoutingModule", function () {
        return EmployeePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _employee_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./employee.page */
      "VcmA");

      var routes = [{
        path: '',
        component: _employee_page__WEBPACK_IMPORTED_MODULE_3__["EmployeePage"]
      }];

      var EmployeePageRoutingModule = function EmployeePageRoutingModule() {
        _classCallCheck(this, EmployeePageRoutingModule);
      };

      EmployeePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EmployeePageRoutingModule);
      /***/
    },

    /***/
    "PgJR": function PgJR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeePageModule", function () {
        return EmployeePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _employee_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./employee-routing.module */
      "FvOc");
      /* harmony import */


      var _employee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./employee.page */
      "VcmA");

      var EmployeePageModule = function EmployeePageModule() {
        _classCallCheck(this, EmployeePageModule);
      };

      EmployeePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeePageRoutingModule"]],
        declarations: [_employee_page__WEBPACK_IMPORTED_MODULE_6__["EmployeePage"]]
      })], EmployeePageModule);
      /***/
    },

    /***/
    "VcmA": function VcmA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeePage", function () {
        return EmployeePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_employee_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./employee.page.html */
      "Bkem");
      /* harmony import */


      var _employee_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./employee.page.scss */
      "AtH2");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");

      var EmployeePage = /*#__PURE__*/function () {
        function EmployeePage(route, actionsheetCtrl, storage, http, router) {
          _classCallCheck(this, EmployeePage);

          this.route = route;
          this.actionsheetCtrl = actionsheetCtrl;
          this.storage = storage;
          this.http = http;
          this.router = router;
        }

        _createClass(EmployeePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.router.params.subscribe(function (val) {
              _this.storage.get("mybusiness").then(function (val) {
                _this.mybusiness = val;
                console.log("My business Details:", _this.mybusiness);
                _this.owner = _this.mybusiness[0].owner_name;
                _this.address = _this.mybusiness[0].business_address;
                _this.busines_name = _this.mybusiness[0].business_name;
                _this.bid = _this.mybusiness[0].id;

                _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getemployees.php?bid=" + _this.bid).subscribe(function (data) {
                  _this.employees = data;
                  console.log("Employees", _this.employees);
                });
              });
            });
          }
        }, {
          key: "openMenu",
          value: function openMenu(i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionsheetCtrl.create({
                        // header: 'Modify your album',  
                        buttons: [{
                          text: 'Edit',
                          handler: function handler() {
                            _this2.storage.set("empid", _this2.employees[i].id);

                            _this2.route.navigate(['/edit-employee']);
                          }
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            console.log(_this2.employees[i].id);

                            _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "deleteemployee.php?empid=" + _this2.employees[i].id).subscribe(function (Response) {
                              if (Response = 1) {
                                alert("Employee Deleted Sucesfully");
                              } else {
                                alert("Failed to delete Employee");
                              }
                            });

                            console.log('Archive clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return EmployeePage;
      }();

      EmployeePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      EmployeePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-employee',
        template: _raw_loader_employee_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EmployeePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=employee-employee-module-es5.js.map