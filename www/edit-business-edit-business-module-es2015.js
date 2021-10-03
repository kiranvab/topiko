(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-business-edit-business-module"],{

/***/ "2FvD":
/*!*******************************************************!*\
  !*** ./src/app/edit-business/edit-business.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.first {\n  margin: 1em 1.125em;\n}\n\n.row {\n  height: 14.4em;\n}\n\nion-card {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 146px;\n  height: 146px;\n}\n\nion-avatar img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 50%;\n}\n\n.position-cam {\n  position: relative;\n  left: 52px;\n  top: 37px;\n}\n\n.details {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #ffffff;\n}\n\n.details .name {\n  color: #871178;\n  font-size: 1.25em;\n  margin: 5px;\n}\n\n.details .ceo {\n  color: #707070;\n  font-size: 0.875em;\n  margin: 0.3125em;\n}\n\n.business-dyn {\n  background: #e0e0e0;\n  padding: 0.5em;\n  margin: 1em 1.125em;\n}\n\n.id-color {\n  color: #871178;\n}\n\n.select {\n  color: #22272a;\n  padding: 6px 30px;\n}\n\n.grid {\n  margin: 0.75em 1.125em;\n  background: #ffffff;\n  padding: 0px 0.8125em;\n  margin-top: 0px;\n}\n\n.top {\n  color: #871178;\n  font-size: 1em;\n  width: 100%;\n  margin: 0.625em 0px;\n}\n\n.bottom {\n  color: #22272a;\n  font-size: 0.875em;\n  margin: 0px;\n  margin-bottom: 0.625em;\n}\n\n.map {\n  margin-bottom: 30px;\n}\n\n.card ion-card {\n  box-shadow: 0px 3px 6px #00000029;\n  height: 90px;\n  width: 90px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card ion-icon {\n  width: 60px;\n  height: 60px;\n  color: #9f9f9f;\n}\n\n.upload {\n  color: #9f9f9f;\n  font-size: 0.9375em;\n}\n\n.toggle p {\n  font-size: 1em;\n  color: #22272a;\n  margin-top: 0.625em;\n}\n\nion-row ion-toggle {\n  --width: 34px;\n  --height: 14px;\n  --background-checked: linear-gradient(#871178, #3c1378);\n  --handle-background-checked: #9f9f9f;\n  padding-top: 0.71875em;\n}\n\n.button .lef {\n  text-align: left;\n}\n\n.button .righ {\n  text-align: right;\n}\n\n.button .lef .ion-buttons {\n  --background: #ffffff;\n  --color: #871178;\n  border: 2px solid #871178;\n  font-size: 0.85em;\n  width: 123px;\n  height: 50px;\n  border-radius: 0.1875em;\n}\n\n.button .righ ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 0.85em;\n  width: 123px;\n  height: 50px;\n  border-radius: 0.1875em;\n}\n\nion-textarea {\n  border: 1px solid #ccc;\n  padding: 5px;\n}\n\nion-input {\n  border-bottom: 1px solid #ccc;\n  margin: 0;\n  padding: 5px;\n}\n\nion-select {\n  width: 100%;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXQtYnVzaW5lc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFPSjs7QUFMQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFOQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFTSjs7QUFQQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBVUo7O0FBUkE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVdKOztBQVRBO0VBQ0ksY0FBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBYUo7O0FBVkE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBYUo7O0FBWEE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQWNKOztBQVpBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBZUo7O0FBYkE7RUFDSSxtQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWlCSjs7QUFmQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQWtCSjs7QUFoQkE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFtQko7O0FBakJBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQW9CSjs7QUFsQkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVEQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQXFCSjs7QUFsQkE7RUFDSSxnQkFBQTtBQXFCSjs7QUFuQkE7RUFDSSxpQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUF1Qko7O0FBckJBO0VBQ0ksK0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBd0JKOztBQXJCQTtFQUVJLHNCQUFBO0VBQ0EsWUFBQTtBQXVCSjs7QUFyQkE7RUFFSSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBdUJKOztBQXBCQTtFQUVJLFdBQUE7RUFDQSxpQkFBQTtBQXNCSiIsImZpbGUiOiJlZGl0LWJ1c2luZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi8vIGZpcnN0LWNhcmRcclxuLmZpcnN0IHtcclxuICAgIG1hcmdpbjogMWVtIDEuMTI1ZW07XHJcbn1cclxuLnJvdyB7XHJcbiAgICBoZWlnaHQ6IDE0LjRlbTtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5iZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOS4zNzVlbTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjNDQwOTNjKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDE0NnB4O1xyXG4gICAgaGVpZ2h0OiAxNDZweDtcclxufVxyXG5pb24tYXZhdGFyIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1MCU7XHJcbn1cclxuLnBvc2l0aW9uLWNhbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MnB4O1xyXG4gICAgdG9wOiAzN3B4O1xyXG59XHJcbi5kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbi5kZXRhaWxzIC5uYW1lIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG4uZGV0YWlscyAuY2VvIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgbWFyZ2luOiAwLjMxMjVlbTtcclxufVxyXG4uYnVzaW5lc3MtZHluIHtcclxuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIG1hcmdpbjogMWVtIDEuMTI1ZW07XHJcbn1cclxuLmlkLWNvbG9yIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5zZWxlY3Qge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBwYWRkaW5nOiA2cHggMzBweDtcclxufVxyXG5cclxuLmdyaWQge1xyXG4gICAgbWFyZ2luOiAwLjc1ZW0gMS4xMjVlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHggMC44MTI1ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLnRvcCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAuNjI1ZW0gMHB4O1xyXG59XHJcbi5ib3R0b20ge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNjI1ZW07XHJcbn1cclxuLm1hcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5jYXJkIGlvbi1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2FyZCBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG59XHJcbi51cGxvYWQge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDAuOTM3NWVtO1xyXG59XHJcbi50b2dnbGUgcCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luLXRvcDogMC42MjVlbTtcclxufVxyXG5pb24tcm93IGlvbi10b2dnbGUge1xyXG4gICAgLS13aWR0aDogMzRweDtcclxuICAgIC0taGVpZ2h0OiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzlmOWY5ZjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjcxODc1ZW07XHJcbn1cclxuXHJcbi5idXR0b24gLmxlZiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5idXR0b24gLnJpZ2gge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmJ1dHRvbiAubGVmIC5pb24tYnV0dG9ucyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjODcxMTc4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgd2lkdGg6IDEyM3B4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4xODc1ZW07XHJcbn1cclxuLmJ1dHRvbiAucmlnaCBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgICB3aWR0aDogMTIzcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjE4NzVlbTtcclxufVxyXG5cclxuaW9uLXRleHRhcmVhXHJcbntcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5pb24taW5wdXRcclxue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Rcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */");

/***/ }),

/***/ "Qf6s":
/*!*******************************************************!*\
  !*** ./src/app/edit-business/edit-business.module.ts ***!
  \*******************************************************/
/*! exports provided: EditBusinessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBusinessPageModule", function() { return EditBusinessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_business_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-business-routing.module */ "iBx1");
/* harmony import */ var _edit_business_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-business.page */ "SYhH");







let EditBusinessPageModule = class EditBusinessPageModule {
};
EditBusinessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_business_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditBusinessPageRoutingModule"]
        ],
        declarations: [_edit_business_page__WEBPACK_IMPORTED_MODULE_6__["EditBusinessPage"]]
    })
], EditBusinessPageModule);



/***/ }),

/***/ "SWHw":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-business/edit-business.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Edit Business Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngFor=\"let b of business\">\n\n  <ion-card class=\"first\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img src=\"{{b.logo}}\" alt=\"\">\n        </ion-avatar>\n        <img class=\"position-cam\" src=\"assets/camera.svg\" alt=\"\" (click)=\"getPicture\">\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"details\">\n      <p class=\"top\">Business Title</p> <br>\n      <ion-input [(ngModel)]=\"business_name\"></ion-input>\n    </ion-row>\n    <ion-row class=\"details\">\n      <p class=\"top\">Business Owner Name</p> <br>\n      <ion-input [(ngModel)]=\"owner_name\"></ion-input>\n    </ion-row>\n  </ion-card>\n\n  <ion-grid class=\"grid\">\n    <ion-row>\n      <p class=\"top\">Business Type</p> <br>\n      <ion-select placeholder=\"Business Type\" [(ngModel)]=\"business_type\">\n        <ion-select-option value=\"proprietorship\">Proprietorship</ion-select-option>\n        <ion-select-option value=\"partnership\">Partnership</ion-select-option>\n        <ion-select-option value=\"opc\">OPC</ion-select-option>\n        <ion-select-option value=\"llp\">LLP</ion-select-option>\n        <ion-select-option value=\"private\">Private Limited</ion-select-option>\n        <ion-select-option value=\"public\">Public Limited</ion-select-option>\n      </ion-select>\n    </ion-row>\n    <ion-row>\n      <p class=\"top\">Business Contact No</p>\n      <ion-input [(ngModel)]=\"primary_contact\"></ion-input>\n\n    </ion-row>\n  \n    <ion-row>\n      <p class=\"top\">Business mode</p>\n      <ion-select placeholder=\"Business mode\" [(ngModel)]=\"ownership_model\" (ionChange)=\"getserccat()\">\n        <ion-select-option value=\"services\">Services </ion-select-option>\n        <ion-select-option value=\"category\">Category</ion-select-option>\n      </ion-select>\n    </ion-row>\n\n    <p class=\"text\" *ngIf=\"cat_div\">\n      <ion-select placeholder=\"Select Category\" [(ngModel)]=\"category_id\">\n        <ion-select-option *ngFor=\"let cat of categoreis; let i=index;\" value=\"{{cat.id}}\">{{cat.category}}</ion-select-option>\n      </ion-select>\n    </p>\n\n    <p class=\"text\"  *ngIf=\"ser_div\">\n      <ion-select placeholder=\"Select Services\" [(ngModel)]=\"service_id\">\n        <ion-select-option *ngFor=\"let ser of services; let i=index;\" value=\"{{ser.id}}\">{{ser.service}}</ion-select-option>\n      </ion-select>\n    </p>\n\n    <ion-row>\n      <p class=\"top\">Business Tags</p>\n      <ion-input [(ngModel)]=\"tags\"></ion-input>\n    </ion-row>\n    <ion-row>\n      <p class=\"top\">Address</p>\n      <ion-textarea [(ngModel)]=\"business_address\"></ion-textarea>\n    </ion-row>\n    <ion-row>\n      <p class=\"top\">Location</p>\n      <img class=\"map\"\n        src=\"https://play-lh.googleusercontent.com/0uRNRSe4iS6nhvfbBcoScHcBTx1PMmxkCx8rrEsI2UQcQeZ5ByKz8fkhwRqR3vttOg\"\n        alt=\"\">\n    </ion-row>\n    <ion-row>\n      <p class=\"top\">View on your business</p>\n      <ion-input [(ngModel)]=\"views\" >{{b.view}}</ion-input>\n    </ion-row>\n    <ion-row>\n      <p class=\"top\">Your business story</p>\n      <ion-input [(ngModel)]=\"story\">{{b.busienss_story}}</ion-input>\n    </ion-row>\n\n    <ion-row>\n      <p class=\"top\">SHOP URL</p>\n      <ion-input [(ngModel)]=\"shopurl\">{{b.shopurl}}</ion-input>\n    </ion-row>\n\n    <ion-row>\n      <p class=\"top\">Shop Desc</p>\n      <ion-input [(ngModel)]=\"shopdesc\">{{b.shopdesc}}</ion-input>\n    </ion-row>\n\n    <ion-select placeholder=\"Gallery\"></ion-select>\n\n    <ion-row class=\"card\">\n      <ion-col size=\"4\">\n        <ion-card>\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-card>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-card>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-select placeholder=\"Certificate\"></ion-select>\n    <p class=\"upload\">Upload Certificate</p>\n    <ion-row class=\"card\">\n      <ion-col size=\"4\">\n        <ion-card>\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-card>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"toggle\">\n      <ion-col>\n        <p>Certificate Hide</p>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-toggle checked></ion-toggle>\n      </ion-col>\n    </ion-row>\n    <ion-select placeholder=\"Partner Details\"></ion-select>\n    <ion-select placeholder=\"Year Of Commencement\"></ion-select>\n    <ion-select placeholder=\"Topiko Awards\"></ion-select>\n    <ion-select placeholder=\"Topiko Star Rating\"></ion-select>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" class=\"purple-btn\" color=\"custom\" (click)=\"update()\">Update</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "SYhH":
/*!*****************************************************!*\
  !*** ./src/app/edit-business/edit-business.page.ts ***!
  \*****************************************************/
/*! exports provided: EditBusinessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBusinessPage", function() { return EditBusinessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_business_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-business.page.html */ "SWHw");
/* harmony import */ var _edit_business_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-business.page.scss */ "2FvD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");








let EditBusinessPage = class EditBusinessPage {
    constructor(storage, http, camera) {
        this.storage = storage;
        this.http = http;
        this.camera = camera;
        this.cat_div = false;
        this.ser_div = false;
    }
    ngOnInit() {
        this.storage.get("bid").then(val => {
            this.bid = val;
            console.log("Business ID", this.bid);
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "businessprofile.php?bid=" + this.bid).subscribe(data => {
                this.business = data;
                this.business_name = this.business[0].business_name;
                this.owner_name = this.business[0].owner_name;
                this.business_type = this.business[0].business_type;
                this.primary_contact = this.business[0].primary_contact;
                this.ownership_model = this.business[0].ownership_model;
                this.business_address = this.business[0].business_address;
                this.tags = this.business[0].tags;
                console.log("Business", this.business);
            });
        });
    }
    getserccat(data) {
        console.log(this.ownership_model);
        if (this.ownership_model == "category") {
            this.cat_div = true;
            this.ser_div = false;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getcategories.php").subscribe((cat) => {
                this.options = cat;
                console.log("categories:", this.categoreis);
            });
        }
        else {
            this.ser_div = true;
            this.cat_div = false;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getservices.php").subscribe((ser) => {
                this.services = ser;
                console.log("services:", this.services);
            });
        }
    }
    getPicture() {
        const options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.image = 'data:image/jpeg;base64,' + imageData;
        });
    }
    update() {
        var mydata = JSON.stringify({
            'image': this.image,
            'business_id': this.bid,
            'business_name': this.business_name,
            'business_type': this.business_type,
            'primary_contact': this.primary_contact,
            'owner_name': this.owner_name,
            'basis': this.ownership_model,
            'ownership_model': this.ownership_model,
            'firsttag': this.tags,
            'business_address': this.business_address,
            'view': this.views,
            'busienss_story': this.story,
            'category_id': this.category_id,
            'service_id': this.service_id,
            'story': this.story,
            'shopurl': this.shopurl,
            'shopdesc': this.shopdesc,
            'city': this.city,
            'pincode': this.pincode,
            'country': this.country,
            'state': this.state,
        });
        console.log(mydata);
        // var link = AppComponent.ApiUrl + "create_business.php"
        // this.http.post(link, mydata).subscribe(async data => {
        //   this.businessdata = data;
        // })
    }
};
EditBusinessPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] }
];
EditBusinessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-business',
        template: _raw_loader_edit_business_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_business_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditBusinessPage);



/***/ }),

/***/ "iBx1":
/*!***************************************************************!*\
  !*** ./src/app/edit-business/edit-business-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EditBusinessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBusinessPageRoutingModule", function() { return EditBusinessPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_business_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-business.page */ "SYhH");




const routes = [
    {
        path: '',
        component: _edit_business_page__WEBPACK_IMPORTED_MODULE_3__["EditBusinessPage"]
    }
];
let EditBusinessPageRoutingModule = class EditBusinessPageRoutingModule {
};
EditBusinessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditBusinessPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=edit-business-edit-business-module-es2015.js.map