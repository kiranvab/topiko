(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-qrpayment-company-qrpayment-module"],{

/***/ "4UmK":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company-qrpayment/company-qrpayment.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>QR Payment</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"create-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img class=\"border\"\n            src=\"https://content3.jdmagicbox.com/comp/chennai/w1/044pxx44.xx44.121221101633.y3w1/catalogue/velavan-concrete-poonamallee-chennai-ht0zkb-250.jpg\"\n            alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name pclass\">Velavan Concrete <ion-icon name=\"shield-checkmark\"></ion-icon>\n        </p>\n        <ion-row class=\"star\">\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <span>\n            <p>4.1 Ratings</p>\n          </span>\n        </ion-row>\n        <p class=\"time pclass\">Director-Aarumugam Swamy</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"gpay\">\n      <img\n        src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg/1280px-Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg.png\"\n        alt=\"\">\n      <img class=\"qr\"\n        src=\"https://www.freepnglogos.com/uploads/qr-code-png/qr-code-code-sticker-transparent-png-svg-vector-19.png\"\n        alt=\"\">\n      <p class=\"phone\">9751323485</p>\n      <span class=\"note\">Note: <span>check before payment scanning with the contact number and company</span></span>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"second\">\n    <ion-row class=\"transaction\">\n      <ion-col class=\"transaction text-overflow\" size=\"8\">\n        <p>Transaction</p>\n      </ion-col>\n      <ion-col class=\"date text-overflow\" size=\"2.2\">\n        <p>05/08/2021</p>\n      </ion-col>\n      <ion-col class=\"date text-overflow\" size=\"1.8\">\n        <p>11:45AM</p>\n      </ion-col>\n    </ion-row>\n    <ion-item>\n      <ion-input placeholder=\"User ID\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"Enter User Paid Amount\"></ion-input>\n    </ion-item>\n  </ion-card>\n\n  <div class=\"buttn\">\n    <ion-button>Done</ion-button>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "YDmR":
/*!***************************************************************!*\
  !*** ./src/app/company-qrpayment/company-qrpayment.module.ts ***!
  \***************************************************************/
/*! exports provided: CompanyQrpaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyQrpaymentPageModule", function() { return CompanyQrpaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _company_qrpayment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-qrpayment-routing.module */ "hGfD");
/* harmony import */ var _company_qrpayment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-qrpayment.page */ "zcMA");







let CompanyQrpaymentPageModule = class CompanyQrpaymentPageModule {
};
CompanyQrpaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _company_qrpayment_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompanyQrpaymentPageRoutingModule"]
        ],
        declarations: [_company_qrpayment_page__WEBPACK_IMPORTED_MODULE_6__["CompanyQrpaymentPage"]]
    })
], CompanyQrpaymentPageModule);



/***/ }),

/***/ "hGfD":
/*!***********************************************************************!*\
  !*** ./src/app/company-qrpayment/company-qrpayment-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CompanyQrpaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyQrpaymentPageRoutingModule", function() { return CompanyQrpaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _company_qrpayment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-qrpayment.page */ "zcMA");




const routes = [
    {
        path: '',
        component: _company_qrpayment_page__WEBPACK_IMPORTED_MODULE_3__["CompanyQrpaymentPage"]
    }
];
let CompanyQrpaymentPageRoutingModule = class CompanyQrpaymentPageRoutingModule {
};
CompanyQrpaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CompanyQrpaymentPageRoutingModule);



/***/ }),

/***/ "ujzN":
/*!***************************************************************!*\
  !*** ./src/app/company-qrpayment/company-qrpayment.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-content {\n  --padding-top: 8px;\n  --padding-bottom: 80px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n  --background: #f5f5f5;\n}\n\nion-card {\n  margin: 0.75em 0px;\n  padding: 7px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.avatar ion-avatar {\n  width: 61px;\n  height: 61px;\n}\n\n.border {\n  border: 0.2px solid #707070;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.user-name ion-icon {\n  color: #39ac00;\n}\n\n.star {\n  margin-top: 5px;\n}\n\n.star ion-icon {\n  color: #fcb900;\n}\n\n.star span p {\n  font-size: 0.5em;\n  padding-left: 5px;\n  color: #22272a;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 0px;\n}\n\n.pclass {\n  margin: 0%;\n  line-height: 18px;\n}\n\n.gpay {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.78125em;\n}\n\n.gpay img {\n  width: 4em;\n  height: 1.53125em;\n}\n\n.gpay .qr {\n  height: 15.8125em;\n  width: 15.8125em;\n}\n\n.gpay .phone {\n  color: #871178;\n  font-size: 1.125em;\n}\n\n.note {\n  color: #871178;\n  font-size: 0.875em;\n}\n\nspan {\n  color: #707070;\n  font-size: 0.875em;\n}\n\n.transaction p {\n  font-size: 1.125em;\n  color: #22272a;\n  margin: 0.125em 0px;\n}\n\n.date {\n  text-align: right;\n}\n\n.date p {\n  font-size: 0.625em;\n  color: #9f9f9f;\n  padding-top: 0.3125em;\n}\n\n.second {\n  padding: 0.625em;\n  padding-bottom: 1.25em;\n}\n\n.buttn {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 0.625em;\n}\n\n.buttn ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBhbnktcXJwYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhBO0VBQ0ksMkJBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtBQVNKOztBQVBBO0VBQ0ksY0FBQTtBQVVKOztBQVJBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFXSjs7QUFUQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVlKOztBQVZBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBYUo7O0FBK0JBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBNUJKOztBQThCQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQTNCSjs7QUE2QkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBMUJKOztBQTRCQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQXpCSjs7QUEyQkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUF4Qko7O0FBMEJBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBdkJKOztBQXlCQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBdEJKOztBQXdCQTtFQUNJLGlCQUFBO0FBckJKOztBQXVCQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBcEJKOztBQXNCQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFuQko7O0FBcUJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFsQko7O0FBb0JBO0VBQ0ksK0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBakJKIiwiZmlsZSI6ImNvbXBhbnktcXJwYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMThweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE4cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiAwLjc1ZW0gMHB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG59XHJcbi5hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNjFweDtcclxuICAgIGhlaWdodDogNjFweDtcclxufVxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMC4ycHggc29saWQgIzcwNzA3MDtcclxufVxyXG4udXNlci1uYW1lIHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnVzZXItbmFtZSBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzM5YWMwMDtcclxufVxyXG4uc3RhciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnN0YXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmY2I5MDA7XHJcbn1cclxuLnN0YXIgc3BhbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG59XHJcbi50aW1lIHtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnBjbGFzcyB7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi8vIC5ib3gge1xyXG4vLyAgICAgcGFkZGluZzogMC42MjVlbTtcclxuLy8gICAgIHBhZGRpbmctYm90dG9tOiAxLjI1ZW07XHJcbi8vIH1cclxuLy8gLmJveCBpb24tYXZhdGFyIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gfVxyXG4vLyBpb24tYXZhdGFyIHtcclxuLy8gICAgIHdpZHRoOiA2MXB4O1xyXG4vLyAgICAgaGVpZ2h0OiA2MXB4O1xyXG4vLyB9XHJcbi8vIGlvbi1hdmF0YXIgLmJvcmRlciB7XHJcbi8vICAgICBib3JkZXI6IDAuMDEyNWVtIHNvbGlkICM3MDcwNzA7XHJcbi8vIH1cclxuLy8gLnRpdGxlIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAwJTtcclxuLy8gfVxyXG4vLyAudGl0bGUgcCB7XHJcbi8vICAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbi8vICAgICBjb2xvcjogIzIyMjcyYTtcclxuLy8gICAgIGxldHRlci1zcGFjaW5nOiAwLjAzNzVlbTtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbi8vICAgICBtYXJnaW46IDNweCAwcHg7XHJcbi8vIH1cclxuLy8gLnRpdGxlIGlvbi1pY29uIHtcclxuLy8gICAgIGNvbG9yOiAjMzlhYzAwO1xyXG4vLyB9XHJcbi8vIC5kaXJlY3RvciBwIHtcclxuLy8gICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbi8vICAgICBtYXJnaW46IDRweCAwcHg7XHJcbi8vIH1cclxuLy8gLnN0YXIgaW9uLWljb24ge1xyXG4vLyAgICAgY29sb3I6ICNmY2I5MDA7XHJcbi8vIH1cclxuLy8gLnN0YXIgcCB7XHJcbi8vICAgICBmb250LXNpemU6IDAuNWVtO1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbi8vIH1cclxuXHJcbi5ncGF5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMS43ODEyNWVtO1xyXG59XHJcbi5ncGF5IGltZyB7XHJcbiAgICB3aWR0aDogNGVtO1xyXG4gICAgaGVpZ2h0OiAxLjUzMTI1ZW07XHJcbn1cclxuLmdwYXkgLnFyIHtcclxuICAgIGhlaWdodDogMTUuODEyNWVtO1xyXG4gICAgd2lkdGg6IDE1LjgxMjVlbTtcclxufVxyXG4uZ3BheSAucGhvbmUge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbn1cclxuLm5vdGUge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbn1cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxufVxyXG4udHJhbnNhY3Rpb24gcCB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIG1hcmdpbjogMC4xMjVlbSAwcHg7XHJcbn1cclxuLmRhdGUge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmRhdGUgcCB7XHJcbiAgICBmb250LXNpemU6IDAuNjI1ZW07XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjMxMjVlbTtcclxufVxyXG4uc2Vjb25kIHtcclxuICAgIHBhZGRpbmc6IDAuNjI1ZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4yNWVtO1xyXG59XHJcbi5idXR0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjYyNWVtO1xyXG59XHJcbi5idXR0biBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "zcMA":
/*!*************************************************************!*\
  !*** ./src/app/company-qrpayment/company-qrpayment.page.ts ***!
  \*************************************************************/
/*! exports provided: CompanyQrpaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyQrpaymentPage", function() { return CompanyQrpaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_company_qrpayment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./company-qrpayment.page.html */ "4UmK");
/* harmony import */ var _company_qrpayment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-qrpayment.page.scss */ "ujzN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CompanyQrpaymentPage = class CompanyQrpaymentPage {
    constructor() { }
    ngOnInit() {
    }
};
CompanyQrpaymentPage.ctorParameters = () => [];
CompanyQrpaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-company-qrpayment',
        template: _raw_loader_company_qrpayment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_company_qrpayment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CompanyQrpaymentPage);



/***/ })

}]);
//# sourceMappingURL=company-qrpayment-company-qrpayment-module-es2015.js.map