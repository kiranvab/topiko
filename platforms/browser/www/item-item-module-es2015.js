(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-item-module"],{

/***/ "3lYr":
/*!***********************************!*\
  !*** ./src/app/item/item.page.ts ***!
  \***********************************/
/*! exports provided: ItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPage", function() { return ItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_item_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./item.page.html */ "shpZ");
/* harmony import */ var _item_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.page.scss */ "P1b3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.component */ "Sy1n");








let ItemPage = class ItemPage {
    constructor(storage, route, http) {
        this.storage = storage;
        this.route = route;
        this.http = http;
    }
    ngOnInit() {
        this.storage.get("userdetails").then(val => {
            this.udata = val;
            this.user_id = this.udata[0].id;
        });
        this.storage.get("prid").then((pval) => {
            this.product_id = pval;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "getproduct_details.php?prid=" + this.product_id).subscribe((response) => {
                this.pdtails = response;
                console.log('Prdouct details', this.pdtails);
            });
        });
    }
    share() {
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "product_share.php?pid=" + this.product_id + "&user_id=" + this.user_id).subscribe(shareres => {
            console.log(shareres);
        });
    }
    like() {
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "product_like.php?pid=" + this.product_id + "&user_id=" + this.user_id).subscribe(likeres => {
            console.log(likeres);
        });
    }
    fav() {
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "product_fav.php?pid=" + this.product_id + "&user_id=" + this.user_id).subscribe(favres => {
            console.log(favres);
        });
    }
    comment() {
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "product_comment.php?pid=" + this.product_id + "&user_id=" + this.user_id).subscribe(commentres => {
            console.log(commentres);
        });
    }
    Callcc() {
        this.route.navigate(['connect']);
    }
};
ItemPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-item',
        template: _raw_loader_item_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_item_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ItemPage);



/***/ }),

/***/ "Aiwa":
/*!*********************************************!*\
  !*** ./src/app/item/item-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPageRoutingModule", function() { return ItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item.page */ "3lYr");




const routes = [
    {
        path: '',
        component: _item_page__WEBPACK_IMPORTED_MODULE_3__["ItemPage"]
    }
];
let ItemPageRoutingModule = class ItemPageRoutingModule {
};
ItemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemPageRoutingModule);



/***/ }),

/***/ "P1b3":
/*!*************************************!*\
  !*** ./src/app/item/item.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".knife {\n  margin: 1em 1.125em;\n  background: transparent;\n  box-shadow: none;\n}\n\n.knife img {\n  border-radius: 0.5em;\n}\n\nion-grid {\n  margin: 0px 0.8125em;\n}\n\n.title {\n  margin-top: 0.5em;\n  padding-left: 0%;\n}\n\n.title p {\n  font-size: 1.125em;\n  font-weight: bold;\n  color: #22272a;\n  letter-spacing: 0.0375em;\n  line-height: 1em;\n  margin: 3px 0px;\n}\n\n.title ion-icon {\n  color: #39ac00;\n}\n\n.star ion-icon {\n  color: #fcb900;\n}\n\n.star p {\n  font-size: 0.5em;\n  padding-left: 5px;\n}\n\n.second-row ion-col {\n  margin: 0.25em 0px;\n  padding-left: 0%;\n}\n\n.second-row p {\n  font-size: 1em;\n  font-weight: bold;\n  color: #22272a;\n  margin: 0%;\n}\n\n.second-row .rt {\n  text-align: right;\n}\n\nspan {\n  padding-left: 0.375em;\n  color: #22272a;\n  font-size: 0.875em;\n  margin: 8px 0px;\n}\n\n.rs {\n  color: #871178;\n}\n\n.real-price {\n  text-decoration: line-through;\n  color: #9f9f9f;\n}\n\n.off {\n  color: #39ac00;\n  font-size: 0.625em;\n}\n\n.third-row p {\n  font-weight: bold;\n  margin: 0.3125em 0em;\n}\n\n.fourth-row p {\n  font-weight: normal;\n  margin: 0.3125em 0em;\n}\n\n.fourth-row span {\n  font-size: 0.75em;\n  color: #39ac00;\n}\n\n.fifth-row h6 {\n  color: #22272a;\n  font-weight: bold;\n}\n\n.fifth-row p {\n  color: #707070;\n  line-height: 1.375em;\n  letter-spacing: 0.11px;\n  margin: 0%;\n}\n\n.first {\n  background: #ebebeb;\n  margin: 1em 1.125em;\n  box-shadow: none;\n  border-radius: 0%;\n}\n\n.icons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1.125em;\n}\n\n.icons p {\n  margin: 8px 0px;\n  color: #871178;\n}\n\n.head {\n  font-size: 1em;\n}\n\nion-fab-button {\n  --ion-color-base: #ffffff !important;\n  --box-shadow: none;\n}\n\nion-fab-button ion-icon {\n  color: #707070;\n  font-size: 30px;\n}\n\nion-fab-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  height: 4.375em;\n  width: 4.375em;\n}\n\n.fab ion-icon {\n  color: #ffffff;\n  height: 36px;\n  width: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2l0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUdBO0VBQ0ksb0JBQUE7QUFBSjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtBQUlKOztBQUZBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0FBTUo7O0FBSkE7RUFDSSw2QkFBQTtFQUNBLGNBQUE7QUFPSjs7QUFMQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQVFKOztBQUpBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQU9KOztBQUhBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQU1KOztBQUpBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBT0o7O0FBSEE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQU9KOztBQUhBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFRSjs7QUFOQTtFQUNJLGNBQUE7QUFTSjs7QUFQQTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7QUFVSjs7QUFSQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBV0o7O0FBUEE7RUFDSSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVdKIiwiZmlsZSI6Iml0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1hZ2VcclxuLmtuaWZlIHtcclxuICAgIG1hcmdpbjogMWVtIDEuMTI1ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmtuaWZlIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxufVxyXG5cclxuLy8gZ3JpZFxyXG5pb24tZ3JpZCB7XHJcbiAgICBtYXJnaW46IDBweCAwLjgxMjVlbTtcclxufVxyXG5cclxuLy8gZmlyc3Qtcm93XHJcbi50aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbn1cclxuLnRpdGxlIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzNzVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW46IDNweCAwcHg7XHJcbn1cclxuLnRpdGxlIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjMzlhYzAwO1xyXG59XHJcbi5zdGFyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmNiOTAwO1xyXG59XHJcbi5zdGFyIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4vLyBzZWNvbmQtcm93XHJcbi5zZWNvbmQtcm93IGlvbi1jb2wge1xyXG4gICAgbWFyZ2luOiAwLjI1ZW0gMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxufVxyXG4uc2Vjb25kLXJvdyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIG1hcmdpbjogMCU7XHJcbn1cclxuLnNlY29uZC1yb3cgLnJ0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbnNwYW4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjM3NWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBtYXJnaW46IDhweCAwcHg7XHJcbn1cclxuLnJzIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5yZWFsLXByaWNlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbn1cclxuLm9mZiB7XHJcbiAgICBjb2xvcjogIzM5YWMwMDtcclxuICAgIGZvbnQtc2l6ZTogMC42MjVlbTtcclxufVxyXG5cclxuLy8gdGhpcmQtcm93XHJcbi50aGlyZC1yb3cgcCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMC4zMTI1ZW0gMGVtO1xyXG59XHJcblxyXG4vLyBmb3VydGgtcm93XHJcbi5mb3VydGgtcm93IHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbjogMC4zMTI1ZW0gMGVtO1xyXG59XHJcbi5mb3VydGgtcm93IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogIzM5YWMwMDtcclxufVxyXG5cclxuLy8gZmlmdGgtcm93XHJcbi5maWZ0aC1yb3cgaDYge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZmlmdGgtcm93IHAge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zNzVlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjExcHg7XHJcbiAgICBtYXJnaW46IDAlO1xyXG59XHJcblxyXG4vLyBjYXJkXHJcbi5maXJzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xyXG4gICAgbWFyZ2luOiAxZW0gMS4xMjVlbTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcclxufVxyXG4uaWNvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMS4xMjVlbTtcclxufVxyXG4uaWNvbnMgcCB7XHJcbiAgICBtYXJnaW46IDhweCAwcHg7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG4uaGVhZCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi8vIGZhYlxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDQuMzc1ZW07XHJcbiAgICB3aWR0aDogNC4zNzVlbTtcclxufVxyXG4uZmFiIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "bzNi":
/*!*************************************!*\
  !*** ./src/app/item/item.module.ts ***!
  \*************************************/
/*! exports provided: ItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPageModule", function() { return ItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-routing.module */ "Aiwa");
/* harmony import */ var _item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item.page */ "3lYr");







let ItemPageModule = class ItemPageModule {
};
ItemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _item_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemPageRoutingModule"]
        ],
        declarations: [_item_page__WEBPACK_IMPORTED_MODULE_6__["ItemPage"]]
    })
], ItemPageModule);



/***/ }),

/***/ "shpZ":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n      <ion-menu-button mode=\"ios\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div *ngFor=\"let pd of pdtails\">\n  <ion-card class=\"knife\">\n    <img src=\"{{pd.product_image}}\" style=\"width:100%; height:200px\" alt=\"\">\n  </ion-card>\n\n  <ion-grid class=\"grid\">\n    <ion-row class=\"first-row\">\n      <ion-col class=\"title\">\n        <p>{{pd.title}}<ion-icon name=\"shield-checkmark\"></ion-icon>\n        </p>\n        <ion-row class=\"star\">\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <p>4.1 Ratings</p>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"second-row\">\n      <ion-col size=\"4.5\">\n        <p>{{pd.title}}</p>\n      </ion-col>\n      <ion-col class=\"rt\">\n        <span>Price-</span>\n        <span class=\"rs\">Rs{{pd.discount}} </span>\n        <span class=\"real-price\">{{pd.mrp}} </span>\n        <span class=\"off\">{{pd.discount_price}} Off</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"third-row\">\n      <p>Per Piece</p>\n    </ion-row>\n    <ion-row class=\"fourth-row\">\n      <p>Cash on Delivery <span>Available</span></p>\n    </ion-row>\n    <ion-row class=\"fifth-row\">\n      <h6>Description</h6>\n      <p> {{pd.description}}\n      </p>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card class=\"first\">\n    <ion-row>\n      <ion-col size=\"3\" class=\"icons\" (click)=\"share()\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"share-social-outline\"></ion-icon>\n        </ion-fab-button>\n        <p>Share</p>\n      </ion-col>\n      <ion-col size=\"3\" class=\"icons\" (click)=\"like()\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"thumbs-up-outline\"></ion-icon>\n        </ion-fab-button>\n        <p>Like</p>\n      </ion-col>\n      <ion-col size=\"3\" class=\"icons\" (click)=\"fav()\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"heart-outline\"></ion-icon>\n        </ion-fab-button>\n        <p>Favourite</p>\n      </ion-col>\n      <ion-col size=\"3\" class=\"icons\" (click)=\"comment()\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n        </ion-fab-button>\n        <p>Comment</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</div>\n  <ion-row>\n    <ion-col class=\"head\">Similar Products</ion-col>\n    <ion-col size=\"3\" class=\"view-all\">View All</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col><img src=\"https://images.railyatri.in/ry_images_prod/whatsapp-post-1570614557.jpg\"></ion-col>\n    <ion-col><img src=\"https://images.railyatri.in/ry_images_prod/whatsapp-post-1570614557.jpg\"></ion-col>\n    <ion-col><img src=\"https://images.railyatri.in/ry_images_prod/whatsapp-post-1570614557.jpg\"></ion-col>\n  </ion-row>\n\n\n  <ion-row>\n    <ion-col class=\"head\">Recently Viewed</ion-col>\n    <ion-col size=\"3\" class=\"view-all\">View All</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col><img src=\"https://images.railyatri.in/ry_images_prod/whatsapp-post-1570614557.jpg\"></ion-col>\n    <ion-col><img src=\"https://images.railyatri.in/ry_images_prod/whatsapp-post-1570614557.jpg\"></ion-col>\n    <ion-col><img src=\"https://images.railyatri.in/ry_images_prod/whatsapp-post-1570614557.jpg\"></ion-col>\n  </ion-row>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button class=\"fab\" (click)=\"Callcc()\">\n      <ion-icon name=\"headset-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=item-item-module-es2015.js.map