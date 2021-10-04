(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["current-plan-current-plan-module"],{

/***/ "3vHc":
/*!*****************************************************!*\
  !*** ./src/app/current-plan/current-plan.module.ts ***!
  \*****************************************************/
/*! exports provided: CurrentPlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPlanPageModule", function() { return CurrentPlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _current_plan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./current-plan-routing.module */ "kA78");
/* harmony import */ var _current_plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./current-plan.page */ "X6Nn");







let CurrentPlanPageModule = class CurrentPlanPageModule {
};
CurrentPlanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _current_plan_routing_module__WEBPACK_IMPORTED_MODULE_5__["CurrentPlanPageRoutingModule"]
        ],
        declarations: [_current_plan_page__WEBPACK_IMPORTED_MODULE_6__["CurrentPlanPage"]]
    })
], CurrentPlanPageModule);



/***/ }),

/***/ "4vG+":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/current-plan/current-plan.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-grid>\n      <ion-row class=\"cont\">\n        <ion-col>\n          <ion-title>Plans</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"firstcard\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"details\">\n      <P class=\"name\">Sun Group Water</P>\n    </ion-row>\n    <ion-row class=\"details\">\n      <P class=\"number\">+91 988134832</P>\n    </ion-row>\n    <ion-row class=\"details\">\n      <p class=\"ceo\">CEO-Murali</p>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"second-card\">\n    <ion-row>\n      <ion-col class=\"left\">\n        <p>Current Plan</p>\n      </ion-col>\n      <ion-col class=\"right\">\n        <p>05/26/2021 <span>11:30AM</span></p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"border\">\n      <ion-col class=\"star\" size=\"2\">\n        <ion-icon name=\"star-outline\"></ion-icon>\n      </ion-col>\n      <ion-col class=\"annual\">\n        <p>Star</p>\n        <p>Annually 999/-</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"second-row\">\n      <ion-col>\n        <p>Star</p>\n        <p>999/-</p>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"swap-horizontal-outline\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <p>Store</p>\n        <ion-item>\n          <ion-input></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <h5>5,399/-</h5>\n    <ion-row>\n      <ion-col>\n        <p class=\"note\"><span>Note:</span> Within 8months transfer of any plan 600 deduction is Applicable</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"check\">\n      <ion-col size=\"1\">\n        <ion-checkbox checked></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"confirm\">I agree for the <span>Terms and Conditions</span></p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"button\">\n      <ion-button>Submit</ion-button>\n    </ion-row>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "Mbt+":
/*!*****************************************************!*\
  !*** ./src/app/current-plan/current-plan.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cont {\n  text-align: center;\n}\n\n.cont ion-title {\n  font-size: 18px;\n  color: #ffffff;\n  padding: 0px;\n  letter-spacing: 1.5px;\n}\n\n.row {\n  height: 12em;\n  background: #ffffff;\n}\n\n.firstcard {\n  border: none;\n  box-shadow: none;\n  margin: 0.75em 1.125em;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 8.1875em;\n  height: 8.1875em;\n  margin-top: 90px;\n}\n\n.details {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #ffffff;\n}\n\n.name {\n  font-size: 1.25em;\n  margin: 0%;\n  margin-top: 0.5em;\n  color: #22272a;\n  font-weight: bold;\n}\n\n.number {\n  font-size: 1em;\n  margin-top: 0.625em;\n  margin-bottom: 0%;\n  color: #707070;\n}\n\n.ceo {\n  color: #9f9f9f;\n  font-size: 0.875em;\n  margin: 0.625em 0px;\n}\n\n.second-card {\n  box-shadow: 0px 0.1875em 0.375em #00000029;\n  margin: 0.75em 1.125em;\n}\n\n.left {\n  text-align: left;\n  font-size: 0.875em;\n  color: #22272a;\n}\n\n.right {\n  text-align: right;\n  font-size: 0.625em;\n  color: #707070;\n}\n\n.star {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.star ion-icon {\n  height: 3.125em;\n  width: 3.125em;\n  color: #871178;\n}\n\n.annual p {\n  font-size: 0.875em;\n  color: #707070;\n  margin: 0.5em 0px;\n}\n\n.border {\n  border-bottom: 0.0625em solid #00000029;\n  margin: 0px 0.625em;\n}\n\n.second-row {\n  height: 80px;\n}\n\n.second-row ion-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.second-row p {\n  margin: 0.3125em 0%;\n}\n\n.second-row ion-icon {\n  height: 3em;\n  width: 2.375em;\n}\n\nh5 {\n  font-size: 1em;\n  color: #871178;\n  text-align: center;\n}\n\n.note {\n  font-size: 0.875em;\n  color: #707070;\n}\n\n.note span {\n  font-size: 0.875em;\n  color: #871178;\n}\n\n.check {\n  margin: 10px 0px;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n}\n\nion-col .confirm {\n  font-size: 0.75em;\n  color: #22272a;\n  margin-top: 0%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n}\n\n.confirm span {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.button {\n  display: flex;\n  justify-content: center;\n}\n\n.button ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 0.75em;\n  width: 131px;\n  height: 50px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGN1cnJlbnQtcGxhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFMQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBUUo7O0FBTkE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFTSjs7QUFQQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBVUo7O0FBTkE7RUFDSSwwQ0FBQTtFQUNBLHNCQUFBO0FBU0o7O0FBUEE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVVKOztBQVJBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFXSjs7QUFSQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBV0o7O0FBVEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFZSjs7QUFWQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBYUo7O0FBWEE7RUFDSSx1Q0FBQTtFQUNBLG1CQUFBO0FBY0o7O0FBWkE7RUFDSSxZQUFBO0FBZUo7O0FBYkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZ0JKOztBQWRBO0VBQ0ksbUJBQUE7QUFpQko7O0FBZkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQWtCSjs7QUFoQkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBbUJKOztBQWpCQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQW9CSjs7QUFsQkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFxQko7O0FBbEJBO0VBQ0ksZ0JBQUE7QUFxQko7O0FBbkJBO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUFzQko7O0FBcEJBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUF1Qko7O0FBckJBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FBd0JKOztBQXRCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQXlCSjs7QUF2QkE7RUFDSSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUEwQkoiLCJmaWxlIjoiY3VycmVudC1wbGFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udCBpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbn1cclxuLnJvdyB7XHJcbiAgICBoZWlnaHQ6IDEyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbi5maXJzdGNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbjogMC43NWVtIDEuMTI1ZW07XHJcbn1cclxuLmJnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5LjM3NWVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICM0NDA5M2MpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA4LjE4NzVlbTtcclxuICAgIGhlaWdodDogOC4xODc1ZW07XHJcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xyXG59XHJcbi5kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbi5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC42MjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAlO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuLmNlbyB7XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIG1hcmdpbjogMC42MjVlbSAwcHg7XHJcbn1cclxuXHJcbi8vc2Vjb25kLWNhcmRcclxuLnNlY29uZC1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwLjE4NzVlbSAwLjM3NWVtICMwMDAwMDAyOTtcclxuICAgIG1hcmdpbjogMC43NWVtIDEuMTI1ZW07XHJcbn1cclxuLmxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG59XHJcbi5yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMC42MjVlbTtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcblxyXG4uc3RhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zdGFyIGlvbi1pY29uIHtcclxuICAgIGhlaWdodDogMy4xMjVlbTtcclxuICAgIHdpZHRoOiAzLjEyNWVtO1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuLmFubnVhbCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgbWFyZ2luOiAwLjVlbSAwcHg7XHJcbn1cclxuLmJvcmRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjA2MjVlbSBzb2xpZCAjMDAwMDAwMjk7XHJcbiAgICBtYXJnaW46IDBweCAwLjYyNWVtO1xyXG59XHJcbi5zZWNvbmQtcm93IHtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG4uc2Vjb25kLXJvdyBpb24tY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zZWNvbmQtcm93IHAge1xyXG4gICAgbWFyZ2luOiAwLjMxMjVlbSAwJTtcclxufVxyXG4uc2Vjb25kLXJvdyBpb24taWNvbiB7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIHdpZHRoOiAyLjM3NWVtO1xyXG59XHJcbmg1IHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5vdGUge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuLm5vdGUgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuLmNoZWNrIHtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuaW9uLWNoZWNrYm94IHtcclxuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICM3MDcwNzA7XHJcbiAgICBvcGFjaXR5OiA3MCU7XHJcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogIzg3MTE3ODtcclxuICAgIC0tY2hlY2ttYXJrLXdpZHRoOiA0O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxufVxyXG5pb24tY29sIC5jb25maXJtIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xyXG59XHJcbi5jb25maXJtIHNwYW4ge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYnV0dG9uIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIHdpZHRoOiAxMzFweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "X6Nn":
/*!***************************************************!*\
  !*** ./src/app/current-plan/current-plan.page.ts ***!
  \***************************************************/
/*! exports provided: CurrentPlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPlanPage", function() { return CurrentPlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_current_plan_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./current-plan.page.html */ "4vG+");
/* harmony import */ var _current_plan_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current-plan.page.scss */ "Mbt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CurrentPlanPage = class CurrentPlanPage {
    constructor() { }
    ngOnInit() {
    }
};
CurrentPlanPage.ctorParameters = () => [];
CurrentPlanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-current-plan',
        template: _raw_loader_current_plan_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_current_plan_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CurrentPlanPage);



/***/ }),

/***/ "kA78":
/*!*************************************************************!*\
  !*** ./src/app/current-plan/current-plan-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CurrentPlanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPlanPageRoutingModule", function() { return CurrentPlanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _current_plan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./current-plan.page */ "X6Nn");




const routes = [
    {
        path: '',
        component: _current_plan_page__WEBPACK_IMPORTED_MODULE_3__["CurrentPlanPage"]
    }
];
let CurrentPlanPageRoutingModule = class CurrentPlanPageRoutingModule {
};
CurrentPlanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CurrentPlanPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=current-plan-current-plan-module-es2015.js.map