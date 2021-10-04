(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["career-career-module"],{

/***/ "Es8C":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/career/career.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"cont\">\n          <ion-title>Career</ion-title>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-icon class=\"notif\" name=\"notifications-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-segment class=\"segment\">\n            <ion-segment class=\"job\" value=\"job\">\n              <input type=\"text\" placeholder=\"Job Title\">\n            </ion-segment>\n            <ion-segment class=\"location\" value=\"location\">\n              <input type=\"text\" placeholder=\"Location\">\n              <ion-icon name=\"location\"></ion-icon>\n            </ion-segment>\n          </ion-segment>\n        </ion-col>\n        <ion-col size=\"2\">\n          <div class=\"search\">\n            <ion-icon name=\"search-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"firstcard\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"details\">\n      <P class=\"name\">JAGANKATHIK.G</P>\n    </ion-row>\n    <ion-row class=\"details\">\n      <P class=\"number\">+91 988134832</P>\n    </ion-row>\n  </ion-card>\n\n  <p class=\"dashboard\">Dashboard</p>\n  <ion-card>\n    <ion-row>\n      <ion-col size=\"4\" class=\"icons\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"briefcase-outline\"></ion-icon>\n        </ion-fab-button>\n        <p>Resume</p>\n      </ion-col>\n      <ion-col size=\"4\" class=\"icons\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"headset-outline\"></ion-icon>\n          <sup>\n            <ion-badge size=\"small\" color=\"danger\">1</ion-badge>\n          </sup>\n        </ion-fab-button>\n        <p>Employee</p>\n      </ion-col>\n      <ion-col size=\"4\" class=\"icons\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"person-circle-outline\"></ion-icon>\n        </ion-fab-button>\n        <p>Employer</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <div>\n    <div class=\"date\">\n      <p>04/23/2021</p>\n    </div>\n  </div>\n\n  <img class=\"image\" src=\"https://guy-gweth.com/wp-content/uploads/2020/10/1.jpg\" alt=\"\">\n\n</ion-content>");

/***/ }),

/***/ "FLC7":
/*!***************************************!*\
  !*** ./src/app/career/career.page.ts ***!
  \***************************************/
/*! exports provided: CareerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerPage", function() { return CareerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_career_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./career.page.html */ "Es8C");
/* harmony import */ var _career_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./career.page.scss */ "QW8S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CareerPage = class CareerPage {
    constructor() { }
    ngOnInit() {
    }
};
CareerPage.ctorParameters = () => [];
CareerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-career',
        template: _raw_loader_career_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_career_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CareerPage);



/***/ }),

/***/ "IN7w":
/*!*************************************************!*\
  !*** ./src/app/career/career-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CareerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerPageRoutingModule", function() { return CareerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _career_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./career.page */ "FLC7");




const routes = [
    {
        path: '',
        component: _career_page__WEBPACK_IMPORTED_MODULE_3__["CareerPage"]
    }
];
let CareerPageRoutingModule = class CareerPageRoutingModule {
};
CareerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CareerPageRoutingModule);



/***/ }),

/***/ "PgHP":
/*!*****************************************!*\
  !*** ./src/app/career/career.module.ts ***!
  \*****************************************/
/*! exports provided: CareerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerPageModule", function() { return CareerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _career_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./career-routing.module */ "IN7w");
/* harmony import */ var _career_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./career.page */ "FLC7");







let CareerPageModule = class CareerPageModule {
};
CareerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _career_routing_module__WEBPACK_IMPORTED_MODULE_5__["CareerPageRoutingModule"]
        ],
        declarations: [_career_page__WEBPACK_IMPORTED_MODULE_6__["CareerPage"]]
    })
], CareerPageModule);



/***/ }),

/***/ "QW8S":
/*!*****************************************!*\
  !*** ./src/app/career/career.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cont {\n  text-align: center;\n}\n\n.cont ion-title {\n  font-size: 18px;\n  color: #ffffff;\n  padding: 0px;\n  letter-spacing: 1.5px;\n}\n\n.notif {\n  font-size: 1.125em;\n}\n\n.segment {\n  width: 17.1875em;\n  height: 2.25em;\n  text-align: left;\n  border-radius: 5%;\n}\n\n::-moz-placeholder {\n  color: #9f9f9f;\n}\n\n:-ms-input-placeholder {\n  color: #9f9f9f;\n}\n\n::placeholder {\n  color: #9f9f9f;\n}\n\n.job input {\n  width: 100px;\n  padding-left: 0.875em;\n  font-size: 0.875em;\n  color: #22272a;\n  border-right: 1px solid #9f9f9f;\n}\n\n.location input {\n  width: 180px;\n  padding-left: 2.1875em;\n  font-size: 0.875em;\n  color: #22272a;\n  border-left: transparent;\n}\n\n.search {\n  width: 2.5em;\n  height: 2em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  color: #707070;\n  border-radius: 10%;\n}\n\nion-content {\n  --color: #22272a;\n  --background: #f5f5f5;\n}\n\n.row {\n  height: 12em;\n  background: #f5f5f5;\n}\n\n.firstcard {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 8.1875em;\n  height: 8.1875em;\n  margin-top: 90px;\n}\n\n.details {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f5f5f5;\n}\n\n.name {\n  font-size: 1.25em;\n  margin: 0%;\n  margin-top: 0.5em;\n  color: #871178;\n  font-weight: bold;\n}\n\n.number {\n  font-size: 0.875em;\n  margin-top: 0.5em;\n  margin-bottom: 0%;\n  color: #707070;\n}\n\n.dashboard {\n  margin-top: 0.773125em;\n  margin-bottom: 0.590625em;\n  margin-left: 0.625em;\n  font-size: 0.875em;\n}\n\n.icons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1.125em;\n}\n\n.icons p {\n  margin: 8px 0px;\n  color: #871178;\n}\n\nion-fab-button {\n  --ion-color-base: #f2f2f2 !important;\n  --box-shadow: none;\n}\n\nion-fab-button ion-icon {\n  color: #707070;\n  font-size: 30px;\n}\n\nion-badge {\n  --ion-color-base: #d60000 !important;\n  --border-radius: 50%;\n}\n\ndiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.date {\n  width: 95px;\n  height: 26px;\n  background-color: #cccccc;\n  border-radius: 1em;\n  margin-top: 0.625em;\n}\n\n.date p {\n  margin: 0%;\n  text-align: center;\n  font-size: 0.75em;\n  color: #f8f8f8;\n}\n\n.image {\n  margin: 0.6875em 0.625em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhcmVlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0FBS0o7O0FBTkE7RUFDSSxjQUFBO0FBS0o7O0FBTkE7RUFDSSxjQUFBO0FBS0o7O0FBSEE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVFKOztBQU5BO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtBQVNKOztBQVBBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBVUo7O0FBUkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFXSjs7QUFUQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVlKOztBQVZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFhSjs7QUFYQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFjSjs7QUFaQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBZUo7O0FBYkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBZ0JKOztBQWRBO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFpQko7O0FBZkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFrQko7O0FBaEJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFtQko7O0FBakJBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtBQW9CSjs7QUFsQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQXFCSjs7QUFuQkE7RUFDSSxvQ0FBQTtFQUNBLG9CQUFBO0FBc0JKOztBQXBCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdUJKOztBQXJCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBd0JKOztBQXRCQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXlCSjs7QUF2QkE7RUFDSSx3QkFBQTtBQTBCSiIsImZpbGUiOiJjYXJlZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250IGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxufVxyXG4ubm90aWYge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG59XHJcbi5zZWdtZW50IHtcclxuICAgIHdpZHRoOiAxNy4xODc1ZW07XHJcbiAgICBoZWlnaHQ6IDIuMjVlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG59XHJcbi5qb2IgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjg3NWVtO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOWY5ZjlmO1xyXG59XHJcbi5sb2NhdGlvbiBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuMTg3NWVtO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBib3JkZXItbGVmdDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnNlYXJjaCB7XHJcbiAgICB3aWR0aDogMi41ZW07XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tY29sb3I6ICMyMjI3MmE7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuLnJvdyB7XHJcbiAgICBoZWlnaHQ6IDEyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcbi5maXJzdGNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkuMzc1ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzQ0MDkzYyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDguMTg3NWVtO1xyXG4gICAgaGVpZ2h0OiA4LjE4NzVlbTtcclxuICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuLmRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5udW1iZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcbi5kYXNoYm9hcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMC43NzMxMjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNTkwNjI1ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMC42MjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxufVxyXG4uaWNvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMS4xMjVlbTtcclxufVxyXG4uaWNvbnMgcCB7XHJcbiAgICBtYXJnaW46IDhweCAwcHg7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaW9uLWJhZGdlIHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICNkNjAwMDAgIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbmRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5kYXRlIHtcclxuICAgIHdpZHRoOiA5NXB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuNjI1ZW07XHJcbn1cclxuLmRhdGUgcCB7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogI2Y4ZjhmODtcclxufVxyXG4uaW1hZ2Uge1xyXG4gICAgbWFyZ2luOiAwLjY4NzVlbSAwLjYyNWVtO1xyXG59XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=career-career-module-es2015.js.map