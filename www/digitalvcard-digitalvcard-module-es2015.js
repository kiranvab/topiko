(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["digitalvcard-digitalvcard-module"],{

/***/ "ARMn":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/digitalvcard/digitalvcard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>DV Details</ion-title>\n    <ion-buttons slot=\"end\" class=\"create-icon\" routerLink=\"/editdvdetails\">\n      <ion-icon name=\"create-outline\" style=\"color: #fff;\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"bcard-head\">\n    <div style=\"padding:4% 0;\">Default</div>\n    <div><img src=\"assets/profile.svg\"></div>\n\n  </div>\n\n  <div class=\"bcard-body\">\n    <p class=\"title-name\">Jagankathik.G</p>\n    <p class=\"text-desc\">Business Analyst</p>\n    <p class=\"text-desc\">988134832</p>\n    <p class=\"text-desc\">Someone@example.com</p>\n\n    <p>&nbsp;</p>\n    <p class=\"title\">Proffesional</p>\n    <p class=\"text\">UI/UX Designer</p>\n\n    <p class=\"title\">Working In</p>\n    <p class=\"text\">Topiko Private Limited</p>\n\n    <p class=\"title\">Myself</p>\n    <p class=\"text\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled\n      it to make a type specimen book.</p>\n\n    <p class=\"title\">Business Tags</p>\n    <p class=\"text\">Business Analyst Property Seller Retail Car Property Seller</p>\n\n    <p class=\"title\">Address</p>\n    <p class=\"text\">1/38 Bhathiyar street moovarasanpet madipakkam <br>Chennai-600091<br> Tamilnadu<br> India</p>\n\n    <p class=\"title\">Location</p>\n    <p>\n      <iframe\n        src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.7622723018!2d80.18158297154328!3d12.965754365011714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525de9463abdc1%3A0x71f82075882963d!2sMadipakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1619527713588!5m2!1sen!2sin\"\n        width=\"100%\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>\n    </p>\n\n    <h3 class=\"text-center\">Build your Connections</h3>\n    <ion-row>\n      <ion-col>\n        <ion-icon name=\"logo-whatsapp\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"logo-linkedin\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"logo-twitter\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"logo-instagram\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"logo-youtube\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <br>\n\n    <div class=\"view-more\" routerLink=\"/morevcards\">\n      View More\n    </div>\n\n    <div class=\"text-center\" class=\"pb-15\">\n      <ion-checkbox color=\"success\" checked></ion-checkbox> I Agree for the <span>Terms and Conditions</span>\n    </div>\n    <br>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" class=\"purple-bdr-btn\" color=\"custom\">Later</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" class=\"purple-btn\" color=\"custom\" routerLink=\"/digitalcard\">Share</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ "GbNT":
/*!*************************************************************!*\
  !*** ./src/app/digitalvcard/digitalvcard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DigitalvcardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalvcardPageRoutingModule", function() { return DigitalvcardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _digitalvcard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./digitalvcard.page */ "wyKP");




const routes = [
    {
        path: '',
        component: _digitalvcard_page__WEBPACK_IMPORTED_MODULE_3__["DigitalvcardPage"]
    }
];
let DigitalvcardPageRoutingModule = class DigitalvcardPageRoutingModule {
};
DigitalvcardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DigitalvcardPageRoutingModule);



/***/ }),

/***/ "iUrg":
/*!*****************************************************!*\
  !*** ./src/app/digitalvcard/digitalvcard.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 10px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n  --ion-background-color: #f2f2f2;\n}\n\n.create-icon {\n  font-size: 32px;\n  color: #fff;\n  font-weight: bold;\n  margin-right: 3%;\n}\n\n.bcard-head {\n  background: linear-gradient(#871178, #44093c);\n  text-align: center;\n  color: #fff;\n  font-size: 22px;\n  padding: 0;\n  height: 25%;\n}\n\n.bcard-body {\n  background-color: #fff;\n  padding: 5%;\n  padding-top: 20%;\n}\n\n.title {\n  font-size: 18px;\n  color: #871178;\n  line-height: 0;\n}\n\n.text {\n  font-size: 16px;\n  color: #22272a;\n  padding-bottom: 24px;\n}\n\n.title-name {\n  font-size: 18px;\n  color: #871178;\n  line-height: 0;\n  text-align: center;\n  font-size: 24px;\n}\n\n.text-desc {\n  font-size: 14px;\n  color: #707070;\n  text-align: center;\n  line-height: 5px;\n}\n\nion-icon {\n  font-size: 32px;\n  color: #9f9f9f;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.view-more {\n  text-align: center;\n  color: #871178;\n  text-decoration: underline;\n  font-size: 16px;\n  padding-bottom: 10%;\n}\n\nspan {\n  text-decoration: underline;\n  color: #871178;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRpZ2l0YWx2Y2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFJRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBREE7RUFDRSwwQkFBQTtFQUNBLGNBQUE7QUFJRiIsImZpbGUiOiJkaWdpdGFsdmNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG4uY3JlYXRlLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG59XHJcbi5iY2FyZC1oZWFkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzQ0MDkzYyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMjUlO1xyXG59XHJcblxyXG4uYmNhcmQtYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA1JTtcclxuICBwYWRkaW5nLXRvcDogMjAlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzg3MTE3ODtcclxuICBsaW5lLWhlaWdodDogMDtcclxufVxyXG4udGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMjIyNzJhO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4udGl0bGUtbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjODcxMTc4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLnRleHQtZGVzYyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNXB4O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGNvbG9yOiAjOWY5ZjlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnZpZXctbW9yZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjODcxMTc4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "mzuC":
/*!*****************************************************!*\
  !*** ./src/app/digitalvcard/digitalvcard.module.ts ***!
  \*****************************************************/
/*! exports provided: DigitalvcardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalvcardPageModule", function() { return DigitalvcardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _digitalvcard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./digitalvcard-routing.module */ "GbNT");
/* harmony import */ var _digitalvcard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./digitalvcard.page */ "wyKP");







let DigitalvcardPageModule = class DigitalvcardPageModule {
};
DigitalvcardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _digitalvcard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DigitalvcardPageRoutingModule"]
        ],
        declarations: [_digitalvcard_page__WEBPACK_IMPORTED_MODULE_6__["DigitalvcardPage"]]
    })
], DigitalvcardPageModule);



/***/ }),

/***/ "wyKP":
/*!***************************************************!*\
  !*** ./src/app/digitalvcard/digitalvcard.page.ts ***!
  \***************************************************/
/*! exports provided: DigitalvcardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalvcardPage", function() { return DigitalvcardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_digitalvcard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./digitalvcard.page.html */ "ARMn");
/* harmony import */ var _digitalvcard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./digitalvcard.page.scss */ "iUrg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DigitalvcardPage = class DigitalvcardPage {
    constructor() { }
    ngOnInit() {
    }
};
DigitalvcardPage.ctorParameters = () => [];
DigitalvcardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-digitalvcard',
        template: _raw_loader_digitalvcard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_digitalvcard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DigitalvcardPage);



/***/ })

}]);
//# sourceMappingURL=digitalvcard-digitalvcard-module-es2015.js.map