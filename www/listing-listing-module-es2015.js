(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listing-listing-module"],{

/***/ "2qT9":
/*!*******************************************!*\
  !*** ./src/app/listing/listing.module.ts ***!
  \*******************************************/
/*! exports provided: ListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingPageModule", function() { return ListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _listing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listing-routing.module */ "CsEC");
/* harmony import */ var _listing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listing.page */ "nIcT");







let ListingPageModule = class ListingPageModule {
};
ListingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listing_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListingPageRoutingModule"]
        ],
        declarations: [_listing_page__WEBPACK_IMPORTED_MODULE_6__["ListingPage"]]
    })
], ListingPageModule);



/***/ }),

/***/ "CsEC":
/*!***************************************************!*\
  !*** ./src/app/listing/listing-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ListingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingPageRoutingModule", function() { return ListingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _listing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing.page */ "nIcT");




const routes = [
    {
        path: '',
        component: _listing_page__WEBPACK_IMPORTED_MODULE_3__["ListingPage"]
    }
];
let ListingPageRoutingModule = class ListingPageRoutingModule {
};
ListingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListingPageRoutingModule);



/***/ }),

/***/ "Cu4i":
/*!*******************************************!*\
  !*** ./src/app/listing/listing.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-icon {\n  font-size: 24px;\n}\n\nion-card {\n  margin: 0 10px;\n}\n\np {\n  margin: 3px 0;\n}\n\n.open {\n  color: green;\n}\n\n.close {\n  color: indianred;\n}\n\nstrong {\n  color: #940b84;\n  display: block;\n}\n\nion-badge {\n  margin: 5px 5px 5px 0;\n  font-size: 10px;\n}\n\nion-content ion-row {\n  margin: 10px;\n  border-bottom: 1px solid #ececec;\n}\n\nion-button {\n  font-size: 10px;\n}\n\nion-slide ion-col {\n  border-right: 1px solid #e8e8e8;\n  text-align: center;\n  position: relative;\n  bottom: 5px;\n  height: 80px;\n  background: #fdfdfd;\n  font-size: 50%;\n}\n\nion-footer {\n  height: 50px;\n}\n\n.swiper-slide img {\n  width: 45px;\n  padding: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZUFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUVBO0VBRUksYUFBQTtBQUFKOztBQUVBO0VBRUksWUFBQTtBQUFKOztBQUVBO0VBRUksZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFFSSxxQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUVJLFlBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBRUksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFQTtFQUVJLFlBQUE7QUFBSjs7QUFFQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoibGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi1pY29uIFxyXG57XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbnBcclxue1xyXG4gICAgbWFyZ2luOiAzcHggMDtcclxufVxyXG4ub3BlblxyXG57XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuLmNsb3NlXHJcbntcclxuICAgIGNvbG9yOmluZGlhbnJlZDtcclxufVxyXG5zdHJvbmd7XHJcbiAgICBjb2xvcjojOTQwYjg0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuaW9uLWJhZGdlIFxyXG57XHJcbiAgICBtYXJnaW46NXB4IDVweCA1cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5pb24tY29udGVudCBpb24tcm93IFxyXG57XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1zbGlkZSBpb24tY29sIFxyXG57XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmRmZGZkO1xyXG4gICAgZm9udC1zaXplOiA1MCU7XHJcbn1cclxuaW9uLWZvb3RlclxyXG57XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLnN3aXBlci1zbGlkZSBpbWdcclxue1xyXG4gICAgd2lkdGg6NDVweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "NWTf":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listing/listing.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-row>\n      <ion-col>\n        <ion-title>Category Name</ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  <ion-slides>\n    <ion-slide>\n      <ion-row>\n        <ion-col size=\"2\">\n          <img src=\"assets/category/bakery.png\">\n          <p>Bakery</p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <img src=\"assets/category/grocery.png\">\n          <p>Grocery</p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <img src=\"assets/category/restaurant.png\">\n          <p>Restaurant</p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <img src=\"assets/category/milk.png\">\n          <p>Mobiles & Electronics</p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <img src=\"assets/category/chicken.png\">\n          <p>Meat</p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <img src=\"assets/category/pharmacy.png\">\n          <p>Pharmacy</p>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n    <ion-slide>\n      <ion-row>\n        <ion-col>\n          <img src=\"assets/category/bakery.png\">\n          <p>Bakery</p>\n        </ion-col>\n        <ion-col>\n          <img src=\"assets/category/grocery.png\">\n          <p>Grocery</p>\n        </ion-col>\n        <ion-col>\n          <img src=\"assets/category/restaurant.png\">\n          <p>Restaurant</p>\n        </ion-col>\n        <ion-col>\n          <img src=\"assets/category/milk.png\">\n          <p>Dairy</p>\n        </ion-col>\n        <ion-col>\n          <img src=\"assets/category/chicken.png\">\n          <p>Meat</p>\n        </ion-col>\n        <ion-col>\n          <img src=\"assets/category/pharmacy.png\">\n          <p>Pharmacy</p>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n  </ion-slides>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-searchbar placeholder='Search Store'></ion-searchbar>\n  <ion-card>\n    <ion-row no-padding>\n      <ion-col size=\"4\">\n        <ion-button color=\"light\" size=\"small\" expand=\"block\" type=\"ios\">Open Now</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button color=\"light\" size=\"small\" expand=\"block\" type=\"ios\">With offers</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button color=\"light\" size=\"small\" expand=\"block\" type=\"ios\">Top Rated</ion-button>\n      </ion-col>\n    </ion-row>\n    <hr />\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-avatar>\n          <img\n            src=\"https://img.etimg.com/thumb/msid-73320353,width-1200,height-900,imgsize-789754,overlay-etrise/photo.jpg\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"8\">\n        <strong>Sri Balaji Rice Depot</strong>\n        <ion-badge color=\"success\">Open Now</ion-badge>\n        <ion-badge color=\"danger\"> Closes : 10:00 PM</ion-badge> <br>\n        <ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon> 4.8\n        <ion-icon color=\"primary\" name=\"location-outline\"></ion-icon> 100 Mts\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon color=\"danger\" name=\"heart-outline\"></ion-icon><br /><br />\n        <ion-icon name=\"share-social-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-avatar>\n          <img\n            src=\"https://www.kare-design.com/wp-content/uploads/2015/08/4.jpg\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"8\">\n        <strong>HUNGRY JACKS BAKERY </strong>\n        <ion-badge color=\"success\">Open Now</ion-badge>\n        <ion-badge color=\"danger\"> Closes : 10:00 PM</ion-badge> <br>\n        <ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon> 4.8\n        <ion-icon color=\"primary\" name=\"location-outline\"></ion-icon> 100 Mts\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon color=\"danger\" name=\"heart-outline\"></ion-icon><br /><br />\n        <ion-icon name=\"share-social-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-avatar>\n          <img\n            src=\"https://bsmedia.business-standard.com/_media/bs/img/article/2020-04/24/full/1587749293-324.jpg\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"8\">\n        <strong>Sravanthi Kiranam Store</strong>\n        <ion-badge color=\"success\">Open Now</ion-badge>\n        <ion-badge color=\"danger\"> Closes : 10:00 PM</ion-badge> <br>\n        <ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon> 4.8\n        <ion-icon color=\"primary\" name=\"location-outline\"></ion-icon> 100 Mts\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon color=\"danger\" name=\"heart-outline\"></ion-icon><br /><br />\n        <ion-icon name=\"share-social-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-avatar>\n          <img\n            src=\"https://www.warrenfarm.co.uk/images/shops/warren-farm-shop-lrg-1.jpg\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"8\">\n        <strong>Manikanta Super Market </strong>\n        <ion-badge color=\"success\">Open Now</ion-badge>\n        <ion-badge color=\"danger\"> Closes : 10:00 PM</ion-badge> <br>\n        <ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon> 4.8\n        <ion-icon color=\"primary\" name=\"location-outline\"></ion-icon> 100 Mts\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon color=\"danger\" name=\"heart-outline\"></ion-icon><br /><br />\n        <ion-icon name=\"share-social-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-avatar>\n          <img src=\"https://djx5h8pabpett.cloudfront.net/wp-content/uploads/sites/4/2019/02/12134519/J%C3%A4germeister_AMS_Schiphol_Ice-Cold_Feb_19-3.jpg\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"8\">\n        <strong>HUNGRY JACKS BAKERY </strong>\n        <ion-badge color=\"success\">Open Now</ion-badge>\n        <ion-badge color=\"danger\"> Closes : 10:00 PM</ion-badge> <br>\n        <ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon> 4.8\n        <ion-icon color=\"primary\" name=\"location-outline\"></ion-icon> 100 Mts\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon color=\"danger\" name=\"heart-outline\"></ion-icon><br /><br />\n        <ion-icon name=\"share-social-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-avatar>\n          <img src=\"https://www.fujifilm.eu/typo3temp/_processed_/5/5/csm_DSCF4431_01_3a23a2b33d.jpg\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"8\">\n        <strong>HUNGRY JACKS BAKERY </strong>\n        <ion-badge color=\"success\">Open Now</ion-badge>\n        <ion-badge color=\"danger\"> Closes : 10:00 PM</ion-badge> <br>\n        <ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon> 4.8\n        <ion-icon color=\"primary\" name=\"location-outline\"></ion-icon> 100 Mts\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon color=\"danger\" name=\"heart-outline\"></ion-icon><br /><br />\n        <ion-icon name=\"share-social-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-avatar>\n          <img\n            src=\"https://shreelifestyle.com/pub/media/wysiwyg/home/Store-locator.jpg\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"8\">\n        <strong>HUNGRY JACKS BAKERY </strong>\n        <ion-badge color=\"success\">Open Now</ion-badge>\n        <ion-badge color=\"danger\"> Closes : 10:00 PM</ion-badge> <br>\n        <ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon> 4.8\n        <ion-icon color=\"primary\" name=\"location-outline\"></ion-icon> 100 Mts\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon color=\"danger\" name=\"heart-outline\"></ion-icon><br /><br />\n        <ion-icon name=\"share-social-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-avatar>\n          <img src=\"https://www.stop-shop.com/images/module/2005.jpg\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"8\">\n        <strong>HUNGRY JACKS BAKERY </strong>\n        <ion-badge color=\"success\">Open Now</ion-badge>\n        <ion-badge color=\"danger\"> Closes : 10:00 PM</ion-badge> <br>\n        <ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon> 4.8\n        <ion-icon color=\"primary\" name=\"location-outline\"></ion-icon> 100 Mts\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon color=\"danger\" name=\"heart-outline\"></ion-icon><br /><br />\n        <ion-icon name=\"share-social-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-avatar>\n          <img\n            src=\"https://c8.alamy.com/comp/2A1902T/bakery-shop-building-facade-with-signboard-baking-store-cafe-bread-pastry-and-dessert-shop-showcases-with-various-bread-and-cakes-products-market-or-supermarket-flat-vector-illustration-2A1902T.jpg\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"8\">\n        <strong>HUNGRY JACKS BAKERY </strong>\n        <ion-badge color=\"success\">Open Now</ion-badge>\n        <ion-badge color=\"danger\"> Closes : 10:00 PM</ion-badge> <br>\n        <ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon> 4.8\n        <ion-icon color=\"primary\" name=\"location-outline\"></ion-icon> 100 Mts\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon color=\"danger\" name=\"heart-outline\"></ion-icon><br /><br />\n        <ion-icon name=\"share-social-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col routerLink=\"/calllist\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/message\">\n      <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/home\">\n      <ion-icon name=\"home-outline\" class=\"home-icon\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/favourite\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "nIcT":
/*!*****************************************!*\
  !*** ./src/app/listing/listing.page.ts ***!
  \*****************************************/
/*! exports provided: ListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingPage", function() { return ListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_listing_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./listing.page.html */ "NWTf");
/* harmony import */ var _listing_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listing.page.scss */ "Cu4i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ListingPage = class ListingPage {
    constructor() { }
    ngOnInit() {
    }
};
ListingPage.ctorParameters = () => [];
ListingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listing',
        template: _raw_loader_listing_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_listing_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListingPage);



/***/ })

}]);
//# sourceMappingURL=listing-listing-module-es2015.js.map