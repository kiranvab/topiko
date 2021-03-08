(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "1n1Y":
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categories.page.html */ "zDdw");
/* harmony import */ var _categories_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.page.scss */ "ArCr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CategoriesPage = class CategoriesPage {
    constructor() { }
    ngOnInit() {
    }
};
CategoriesPage.ctorParameters = () => [];
CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categories',
        template: _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categories_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoriesPage);



/***/ }),

/***/ "1qrh":
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function() { return CategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.page */ "1n1Y");




const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ "ArCr":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  text-align: center;\n}\n\nimg {\n  width: 70%;\n  padding: 0;\n}\n\np {\n  margin: 3px 0;\n  font-size: 12px;\n  border: 1px solid #ccc;\n  padding: 2px 0;\n  border-radius: 5px;\n  background: #5e1c57;\n  color: #fff;\n}\n\nion-footer {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7QUFBSjs7QUFFQTtFQUVJLFVBQUE7RUFDQSxVQUFBO0FBQUo7O0FBRUE7RUFFSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFFSSxZQUFBO0FBREoiLCJmaWxlIjoiY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmltZ1xyXG57XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5wXHJcbntcclxuICAgIG1hcmdpbjogM3B4IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogMnB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWUxYzU3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1mb290ZXJcclxue1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "kMJQ":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-routing.module */ "1qrh");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "1n1Y");







let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"]
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })
], CategoriesPageModule);



/***/ }),

/***/ "zDdw":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>All Categories</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-row>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n        <p>Grocery</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/restaurant.png\" />\n        <p>Hotel</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/chicken.png\" />\n        <p>Meat</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/milk.png\" />\n        <p>Dairy</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n        <p>Grocery</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/restaurant.png\" />\n        <p>Hotel</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/chicken.png\" />\n        <p>Meat</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/milk.png\" />\n        <p>Dairy</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n        <p>Grocery</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/restaurant.png\" />\n        <p>Hotel</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/chicken.png\" />\n        <p>Meat</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/milk.png\" />\n        <p>Dairy</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n        <p>Grocery</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/restaurant.png\" />\n        <p>Hotel</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/chicken.png\" />\n        <p>Meat</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/milk.png\" />\n        <p>Dairy</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n        <p>Grocery</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/restaurant.png\" />\n        <p>Hotel</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/chicken.png\" />\n        <p>Meat</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/milk.png\" />\n        <p>Dairy</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n        <p>Grocery</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/restaurant.png\" />\n        <p>Hotel</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/chicken.png\" />\n        <p>Meat</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/milk.png\" />\n        <p>Dairy</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n        <p>Grocery</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/restaurant.png\" />\n        <p>Hotel</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/chicken.png\" />\n        <p>Meat</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/milk.png\" />\n        <p>Dairy</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n        <p>Grocery</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/restaurant.png\" />\n        <p>Hotel</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/chicken.png\" />\n        <p>Meat</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img class=\"img-pad\" src=\"assets/category/milk.png\" />\n        <p>Dairy</p>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n</ion-content>\n\n\n<ion-footer>\n  <ion-row>\n    <ion-col routerLink=\"/calllist\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/message\">\n      <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/home\">\n      <ion-icon name=\"home-outline\" class=\"home-icon\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/favourite\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=categories-categories-module-es2015.js.map