(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-categories-shop-categories-module"],{

/***/ "Marq":
/*!***********************************************************!*\
  !*** ./src/app/shop-categories/shop-categories.module.ts ***!
  \***********************************************************/
/*! exports provided: ShopCategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCategoriesPageModule", function() { return ShopCategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shop_categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop-categories-routing.module */ "wENE");
/* harmony import */ var _shop_categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-categories.page */ "vVE0");







let ShopCategoriesPageModule = class ShopCategoriesPageModule {
};
ShopCategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shop_categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopCategoriesPageRoutingModule"]
        ],
        declarations: [_shop_categories_page__WEBPACK_IMPORTED_MODULE_6__["ShopCategoriesPage"]]
    })
], ShopCategoriesPageModule);



/***/ }),

/***/ "bESc":
/*!***********************************************************!*\
  !*** ./src/app/shop-categories/shop-categories.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start:10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom:10px;\n}\n\n.service-icons {\n  text-align: center;\n  background: #f5f5f5;\n  padding: 1em 0.5em 0.2em 0.5em;\n  border-radius: 10px;\n  box-shadow: 0px 5px 4px #ccc;\n  font-size: 0.8em;\n  color: #7f1071;\n  height: 115px;\n}\n\n.service-icons img {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Nob3AtY2F0ZWdvcmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUVBO0VBRUksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFBSjs7QUFFQztFQUVJLFVBQUE7QUFBTCIsImZpbGUiOiJzaG9wLWNhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnRcclxue1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OjEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kIDogMTBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206MTBweDtcclxufVxyXG4uc2VydmljZS1pY29uc1xyXG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmc6IDFlbSAwLjVlbSAwLjJlbSAwLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDRweCAjY2NjO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGNvbG9yOiAjN2YxMDcxO1xyXG4gICAgaGVpZ2h0OjExNXB4O1xyXG4gfVxyXG4gLnNlcnZpY2UtaWNvbnMgaW1nIFxyXG4ge1xyXG4gICAgIHdpZHRoOiA2MCU7XHJcbiB9Il19 */");

/***/ }),

/***/ "vVE0":
/*!*********************************************************!*\
  !*** ./src/app/shop-categories/shop-categories.page.ts ***!
  \*********************************************************/
/*! exports provided: ShopCategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCategoriesPage", function() { return ShopCategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shop_categories_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shop-categories.page.html */ "zPVP");
/* harmony import */ var _shop_categories_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop-categories.page.scss */ "bESc");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let ShopCategoriesPage = class ShopCategoriesPage {
    constructor(http, storage, router) {
        this.http = http;
        this.storage = storage;
        this.router = router;
    }
    ngOnInit() {
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getcategories.php").subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.categories = data;
            console.log(this.categories);
        }));
    }
    details(i) {
        console.log(this.categories[i].type);
        this.storage.set("type", this.categories[i].type);
        this.storage.set("catid", this.categories[i].id);
        this.router.navigate(['gcategory']);
    }
};
ShopCategoriesPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
ShopCategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-shop-categories',
        template: _raw_loader_shop_categories_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shop_categories_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShopCategoriesPage);



/***/ }),

/***/ "wENE":
/*!*******************************************************************!*\
  !*** ./src/app/shop-categories/shop-categories-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ShopCategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCategoriesPageRoutingModule", function() { return ShopCategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shop_categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop-categories.page */ "vVE0");




const routes = [
    {
        path: '',
        component: _shop_categories_page__WEBPACK_IMPORTED_MODULE_3__["ShopCategoriesPage"]
    }
];
let ShopCategoriesPageRoutingModule = class ShopCategoriesPageRoutingModule {
};
ShopCategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShopCategoriesPageRoutingModule);



/***/ }),

/***/ "zPVP":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop-categories/shop-categories.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Shop Categories</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"4\" *ngFor=\"let cat of categories; let i = index;\" (click)=\"details(i)\">\n      <div  class=\"service-icons\">\n      <img src=\"https://topiko.com/app/icons/{{cat.image}}\">\n      <div>{{cat.category}}</div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=shop-categories-shop-categories-module-es2015.js.map