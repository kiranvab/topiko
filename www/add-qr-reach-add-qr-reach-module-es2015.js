(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-qr-reach-add-qr-reach-module"],{

/***/ "3dyv":
/*!*****************************************************!*\
  !*** ./src/app/add-qr-reach/add-qr-reach.module.ts ***!
  \*****************************************************/
/*! exports provided: AddQrReachPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQrReachPageModule", function() { return AddQrReachPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_qr_reach_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-qr-reach-routing.module */ "ZQ45");
/* harmony import */ var _add_qr_reach_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-qr-reach.page */ "khHT");







let AddQrReachPageModule = class AddQrReachPageModule {
};
AddQrReachPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_qr_reach_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddQrReachPageRoutingModule"]
        ],
        declarations: [_add_qr_reach_page__WEBPACK_IMPORTED_MODULE_6__["AddQrReachPage"]]
    })
], AddQrReachPageModule);



/***/ }),

/***/ "BLUx":
/*!*****************************************************!*\
  !*** ./src/app/add-qr-reach/add-qr-reach.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 1.125em;\n  color: #ffffff;\n  padding: 0px;\n  text-align: left;\n}\n\nion-content {\n  --padding-bottom: 20px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  --ion-background-color: #fff;\n}\n\n.first {\n  margin: 1em 1.125em;\n  border: none;\n  box-shadow: none;\n}\n\n.row {\n  height: 14.4em;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 146px;\n  height: 146px;\n}\n\nion-avatar img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 50%;\n  border: 1px solid #9f9f9f;\n}\n\n.position-cam {\n  position: relative;\n  left: 52px;\n  top: 37px;\n}\n\n.second {\n  margin: 1.625em 1.125em;\n  background: #f2f2f2;\n  box-shadow: none;\n}\n\n.second .reach {\n  font-size: 1em;\n  margin: 10px 0px;\n  padding-left: 10px;\n  color: #22272a;\n}\n\n.second .id {\n  margin: 10px;\n  color: #871178;\n}\n\n.third {\n  margin: 0.625em 0px;\n  margin-left: 2.1875em;\n  box-shadow: none;\n}\n\n.third p {\n  font-size: 1em;\n  color: #22272a;\n  margin: 0.625em 0em;\n}\n\n.third ion-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0em 0.1875em 0.375em #00000029;\n  padding: 1.875em 0.3125em;\n  margin: 0em;\n}\n\n.third ion-icon {\n  width: 1.25em;\n  height: 1em;\n}\n\n.third ion-card p {\n  margin: 0px;\n  text-align: center;\n  font-size: 0.5em;\n}\n\n.third .upload-card {\n  min-width: 70px;\n  height: 70px;\n  margin-right: 12px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.scroll {\n  height: 90px;\n}\n\nion-list {\n  margin-left: 2.1875em;\n  margin-right: 2.3125em;\n}\n\nhr {\n  border-top: 0.0625em solid #707070;\n  opacity: 70%;\n  margin: 0em;\n  margin-bottom: 2.5em;\n}\n\nion-list ion-label {\n  padding-left: 5px;\n  color: #22272a;\n}\n\nion-list ion-item {\n  margin-bottom: 20px;\n}\n\nion-radio {\n  --color-checked: purple;\n}\n\n.full {\n  width: 100%;\n}\n\n.full ion-col {\n  display: flex;\n  align-items: center;\n}\n\n.cycle ion-label {\n  font-size: 14px;\n}\n\n.text {\n  margin-top: 1.875em;\n  color: #9f9f9f;\n  border: 1px solid #9f9f9f;\n  border-radius: 0.25em;\n  opacity: 70%;\n  width: 100%;\n}\n\n.nominee {\n  text-align: left;\n  color: #22272a;\n  font-size: 1em;\n}\n\n.add {\n  text-align: right;\n  color: #871178;\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZC1xci1yZWFjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFFSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBT0o7O0FBb0JBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBakJKOztBQW1CQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWhCSjs7QUFrQkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQWZKOztBQW1CQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQWhCSjs7QUFrQkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBZko7O0FBaUJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBZEo7O0FBZ0JBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFiSjs7QUFlQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBWko7O0FBY0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFYSjs7QUFhQTtFQUNJLFlBQUE7QUFWSjs7QUFjQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7QUFYSjs7QUFhQTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQVZKOztBQVlBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBVEo7O0FBV0E7RUFDSSxtQkFBQTtBQVJKOztBQVVBO0VBQ0ksdUJBQUE7QUFQSjs7QUFTQTtFQUNJLFdBQUE7QUFOSjs7QUFRQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVlBO0VBQ0ksZUFBQTtBQVRKOztBQVdBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUko7O0FBVUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBUEo7O0FBU0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBTkoiLCJmaWxlIjoiYWRkLXFyLXJlYWNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmZpcnN0IHtcclxuICAgIG1hcmdpbjogMWVtIDEuMTI1ZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5yb3cge1xyXG4gICAgaGVpZ2h0OiAxNC40ZW07XHJcbn1cclxuLmJnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5LjM3NWVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICM0NDA5M2MpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogMTQ2cHg7XHJcbiAgICBoZWlnaHQ6IDE0NnB4O1xyXG59XHJcbmlvbi1hdmF0YXIgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbi10b3A6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ZjlmOWY7XHJcbn1cclxuLnBvc2l0aW9uLWNhbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MnB4O1xyXG4gICAgdG9wOiAzN3B4O1xyXG59XHJcbi8vIC5maXJzdCB7XHJcbi8vICAgICBtYXJnaW46IDFlbSAxLjEyNWVtO1xyXG4vLyB9XHJcbi8vIC5yb3cge1xyXG4vLyAgICAgaGVpZ2h0OiAxMmVtO1xyXG4vLyB9XHJcbi8vIGlvbi1jYXJkIHtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbi8vIH1cclxuLy8gLmJnIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiA5LjM3NWVtO1xyXG4vLyAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICM0NDA5M2MpO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gfVxyXG4vLyBpb24tYXZhdGFyIHtcclxuLy8gICAgIHdpZHRoOiA4LjE4NzVlbTtcclxuLy8gICAgIGhlaWdodDogOC4xODc1ZW07XHJcbi8vICAgICBtYXJnaW4tdG9wOiA5MHB4O1xyXG4vLyB9XHJcblxyXG4vLyBzZWNvbmQtY2FyZFxyXG4uc2Vjb25kIHtcclxuICAgIG1hcmdpbjogMS42MjVlbSAxLjEyNWVtO1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLnNlY29uZCAucmVhY2gge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbn1cclxuLnNlY29uZCAuaWQge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuXHJcbi8vIHRoaXJkLWNhcmRcclxuLnRoaXJkIHtcclxuICAgIG1hcmdpbjogMC42MjVlbSAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMi4xODc1ZW07XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi50aGlyZCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBtYXJnaW46IDAuNjI1ZW0gMGVtO1xyXG59XHJcbi50aGlyZCBpb24tY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDBlbSAwLjE4NzVlbSAwLjM3NWVtICMwMDAwMDAyOTtcclxuICAgIHBhZGRpbmc6IDEuODc1ZW0gMC4zMTI1ZW07XHJcbiAgICBtYXJnaW46IDBlbTtcclxufVxyXG4udGhpcmQgaW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDEuMjVlbTtcclxuICAgIGhlaWdodDogMWVtO1xyXG59XHJcbi50aGlyZCBpb24tY2FyZCBwIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjVlbTtcclxufVxyXG4udGhpcmQgLnVwbG9hZC1jYXJkIHtcclxuICAgIG1pbi13aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxufVxyXG4uc2Nyb2xsIHtcclxuICAgIGhlaWdodDogOTBweDtcclxufVxyXG5cclxuLy8gaW9uLWxpc3RcclxuaW9uLWxpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuMTg3NWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjMxMjVlbTtcclxufVxyXG5ociB7XHJcbiAgICBib3JkZXItdG9wOiAwLjA2MjVlbSBzb2xpZCAjNzA3MDcwO1xyXG4gICAgb3BhY2l0eTogNzAlO1xyXG4gICAgbWFyZ2luOiAwZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcclxufVxyXG5pb24tbGlzdCBpb24tbGFiZWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxufVxyXG5pb24tbGlzdCBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbmlvbi1yYWRpbyB7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHB1cnBsZTtcclxufVxyXG4uZnVsbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZnVsbCBpb24tY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi8vIC5jeWNsZSB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gfVxyXG4uY3ljbGUgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4udGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjg3NWVtO1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWY5ZjlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgb3BhY2l0eTogNzAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5vbWluZWUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuLmFkZCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "W9U1":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-qr-reach/add-qr-reach.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Add QR Reach</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"first\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img src=\"{{uimg}}\" alt=\"\">\n        </ion-avatar>\n        <!--<img class=\"position-cam\" src=\"assets/camera.svg\" alt=\"\">-->\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"second\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <p class=\"reach\">Reach ID</p>\n      </ion-col>\n      <ion-col>\n        <p class=\"id\">{{this.rand}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"third\">\n    <ion-row>\n      <p>Upload Image</p>\n    </ion-row>\n    <div class=\"scroll\">\n      <ion-card class=\"upload-card\" (click)=\"image1()\" *ngIf=\"img_img1\">\n      <img src=\"{{image1_img}}\" />\n      </ion-card>\n      <ion-card class=\"upload-card\" (click)=\"image1()\" *ngIf=\"up_img1\">\n        <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n        <p>upload image</p>\n      </ion-card>\n\n      <ion-card class=\"upload-card\" (click)=\"image1()\" *ngIf=\"img_img2\">\n        <img src=\"{{image2_img}}\" />\n        </ion-card>\n      <ion-card class=\"upload-card\" (click)=\"image2()\" *ngIf=\"up_img2\">\n        <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n        <p>upload image</p>\n      </ion-card>\n\n      <ion-card class=\"upload-card\" (click)=\"image3()\" *ngIf=\"img_img3\">\n        <img src=\"{{image3_img}}\" />\n        </ion-card>\n      <ion-card class=\"upload-card\" (click)=\"image3()\" *ngIf=\"up_img3\">\n        <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n        <p>upload image</p>\n      </ion-card>\n\n      <ion-card class=\"upload-card\" (click)=\"image3()\" *ngIf=\"img_img3\">\n        <img src=\"{{image3_img}}\" />\n        </ion-card>\n      <ion-card class=\"upload-card\" (click)=\"image3()\" *ngIf=\"up_img3\">\n        <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n        <p>upload image</p>\n      </ion-card>\n\n      <ion-card class=\"upload-card\" (click)=\"image4()\" *ngIf=\"img_img4\">\n        <img src=\"{{image4_img}}\" />\n        </ion-card>\n      <ion-card class=\"upload-card\" (click)=\"image4()\" *ngIf=\"up_img4\">\n        <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n        <p>upload image</p>\n      </ion-card>\n     \n    </div>\n  </ion-card>\n\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder=\"User Name\"  [(ngModel)]=\"name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"User Number\" [(ngModel)]=\"mobile\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"User Mail ID\" [(ngModel)]=\"email\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-select placeholder=\"Purpose (vehicle)\" [(ngModel)]=\"vehicle\">\n        <ion-select-option value=\"Bicycle\">BiCycle </ion-select-option>\n        <ion-select-option value=\"2 Wheeler\">2 Wheeler</ion-select-option>\n        <ion-select-option value=\"4 Wheeler\">4 Wheeler</ion-select-option>\n        <ion-select-option value=\"more than 4 Wheeler\">More than 4 Wheeler</ion-select-option>\n      </ion-select>\n    </ion-item>\n    \n    <textarea class=\"text\" placeholder=\"Enter Reg No.(TN 22 DH 0000)\" [(ngModel)]=\"reg_number\"></textarea>\n\n    <ion-row>\n      <ion-col class=\"nominee\">\n        <p>Nominee</p>\n      </ion-col>\n      <ion-col class=\"add\">\n        <p>\n          <ion-icon name=\"add\"></ion-icon> Add\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-input placeholder=\"Nominee Name\" #nominee_name></ion-input>\n    <hr>\n    <ion-input placeholder=\"Contact no\" #nomineecontact></ion-input>\n    <hr>\n  </ion-list>\n\n  <ion-row>\n    <ion-col>&nbsp;</ion-col>\n    <ion-col>\n      <ion-button expand=\"block\" class=\"purple-btn\" color=\"custom\" (click)=\"Submit()\">Submit</ion-button>\n    </ion-col>\n    <ion-col>&nbsp;</ion-col>\n  </ion-row>\n\n</ion-content>");

/***/ }),

/***/ "ZQ45":
/*!*************************************************************!*\
  !*** ./src/app/add-qr-reach/add-qr-reach-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AddQrReachPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQrReachPageRoutingModule", function() { return AddQrReachPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_qr_reach_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-qr-reach.page */ "khHT");




const routes = [
    {
        path: '',
        component: _add_qr_reach_page__WEBPACK_IMPORTED_MODULE_3__["AddQrReachPage"]
    }
];
let AddQrReachPageRoutingModule = class AddQrReachPageRoutingModule {
};
AddQrReachPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddQrReachPageRoutingModule);



/***/ }),

/***/ "khHT":
/*!***************************************************!*\
  !*** ./src/app/add-qr-reach/add-qr-reach.page.ts ***!
  \***************************************************/
/*! exports provided: AddQrReachPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQrReachPage", function() { return AddQrReachPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_qr_reach_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-qr-reach.page.html */ "W9U1");
/* harmony import */ var _add_qr_reach_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-qr-reach.page.scss */ "BLUx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "BLr9");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");










let AddQrReachPage = class AddQrReachPage {
    constructor(route, http, scanner, storage, camera) {
        this.route = route;
        this.http = http;
        this.scanner = scanner;
        this.storage = storage;
        this.camera = camera;
        this.img_img1 = false;
        this.img_img2 = false;
        this.img_img3 = false;
        this.img_img4 = false;
        this.up_img1 = true;
        this.up_img2 = true;
        this.up_img3 = true;
        this.up_img4 = true;
    }
    ngOnInit() {
        this.rand = Math.floor(Math.random() * 100000) + 100000;
        console.log(this.rand);
        this.storage.get("userdetails").then(val => {
            this.udata = val;
            this.user_id = this.udata[0].id;
            this.uimg = this.udata[0].image;
            this.name = this.udata[0].name;
            this.mobile = this.udata[0].mobile;
            this.email = this.udata[0].email;
            console.log(this.udata);
        });
    }
    cycle() {
        this.vehicle = "Cycle";
    }
    fourwheel() {
        this.vehicle = "4 wheeler";
    }
    twowheel() {
        this.vehicle = "2 wheeler";
    }
    more() {
        this.vehicle = "more than 4 wheels";
    }
    image1() {
        const options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.image1_img = 'data:image/jpeg;base64,' + imageData;
            this.img_img1 = true;
            this.up_img1 = false;
        });
    }
    image2() {
        const options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.image2_img = 'data:image/jpeg;base64,' + imageData;
            this.img_img2 = true;
            this.up_img3 = false;
        });
    }
    image3() {
        const options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.image3_img = 'data:image/jpeg;base64,' + imageData;
            this.img_img3 = true;
            this.up_img3 = false;
        });
    }
    image4() {
        const options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.image4_img = 'data:image/jpeg;base64,' + imageData;
            this.img_img4 = true;
            this.up_img4 = false;
        });
    }
    Submit() {
        var link = _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "addqr.php";
        var myData = JSON.stringify({
            'user_id': this.user_id,
            'name': this.name,
            'mobile': this.mobile,
            'email': this.email,
            'purpose': 'vehicle',
            'reg_number': this.reg_number,
            'nominee_name': this.nominee_name.value,
            'nominee_number': this.nomineecontact.value,
            'vehicle_type': this.vehicle,
            'qr_id': 't-' + this.rand,
            'image1': this.image1_img,
            'image2': this.image2_img,
            'image3': this.image3_img,
            'image4': this.image4_img,
        });
        console.log(myData);
        this.http.post(link, myData).subscribe(response => {
            this.response = response;
            if (this.response == 1) {
                this.storage.set("qr_data", myData);
                this.route.navigate(['my-qr-reach']);
            }
        });
    }
};
AddQrReachPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["QRScanner"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] }
];
AddQrReachPage.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['name',] }],
    mobile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['mobile',] }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['email',] }],
    purpose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['purpose',] }],
    reg_number: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['reg_number',] }],
    nominee_name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['nominee_name',] }],
    nomineecontact: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['nomineecontact',] }]
};
AddQrReachPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-add-qr-reach',
        template: _raw_loader_add_qr_reach_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_qr_reach_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddQrReachPage);



/***/ })

}]);
//# sourceMappingURL=add-qr-reach-add-qr-reach-module-es2015.js.map