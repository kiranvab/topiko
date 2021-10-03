(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "A3+G": function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "WcN3": function WcN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"primary\">\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <!-- <ion-row>\n      <ion-col size=\"6\" style=\"margin-top: 3.2%;\">\n        <img src=\"assets/text-logo.png\">\n      </ion-col>\n      <ion-col routerLink=\"/global-search\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-col>\n      <ion-col routerLink=\"/notification\">\n        <ion-icon name=\"notifications-outline\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"play-outline\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n    <div style=\"margin-top: 7px\">\n      <img src=\"assets/text-logo.png\">\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"search-outline\" routerLink=\"/global-search\"></ion-icon>\n      <ion-icon name=\"notifications-outline\" routerLink=\"/notification\"></ion-icon>\n      <!-- <ion-icon name=\"play-outline\"></ion-icon> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"alldiv\" *ngIf=\"all\">\n    <div class=\"purplelink\">Categories</div>\n    <div class=\"alllinks\">\n      <div class=\"links\" *ngFor=\"let cat of allcategories; let i = index;\">{{cat.category}}</div>\n    </div>\n    <div class=\"purplelink\">Services</div>\n    <div class=\"alllinks\">\n      <div class=\"links\" *ngFor=\"let ser of allservices; let i = index;\">{{ser.service}}</div>\n    </div>\n    <div class=\"purplelink\" routerLink=\"/featured\">Featured Listing</div>\n    <div class=\"purplelink\">Recently Viewed</div>\n    <div class=\"purplelink\" routerLink=\"/shopsnearyou\">Shops Near you</div>\n    <div class=\"purplelink\" routerLink=\"/servicesnearyou\">Services Near You</div>\n    <div class=\"purplelink\" routerLink=\"/offersnearyou\">Offers Near You</div>\n  </div>\n\n  <!-- <ion-row class=\"seg-class\">\n    <ion-col size=\"3\">\n      <ion-button (click)=\"showall()\">All</ion-button>\n    </ion-col>\n    <ion-col size=\"3\">\n      <ion-button routerLink=\"/offersnearyou\">Offers</ion-button>\n    </ion-col>\n    <ion-col size=\"3\">\n      <ion-button>Trend</ion-button>\n    </ion-col>\n    <ion-col size=\"3\">\n      <ion-button>Food</ion-button>\n    </ion-col>\n  </ion-row> -->\n\n  <div class=\"seg-class scroll\">\n\n    <ion-button (click)=\"showall()\">All</ion-button>\n\n    <ion-button routerLink=\"/offersnearyou\">Offers</ion-button>\n\n    <ion-button>Trend</ion-button>\n\n    <ion-button>Food</ion-button>\n\n    <ion-button>Travel</ion-button>\n\n    <ion-button>Bills</ion-button>\n\n    <ion-button>Movies</ion-button>\n  </div>\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let ban of banners let i=index\" >\n      <img src=\"{{ban.banner_image}}\"  style=\"border-radius: 10px;\">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-row (click)=\"pos1details()\">\n    <ion-col>\n      <img width=\"100%\" height=\"100px\"\n        src=\"{{posbanner1}}\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"title\">Featured Listing</ion-col>\n    <ion-col size=\"3\" class=\"view-all\" routerLink=\"/featured\">View All</ion-col>\n  </ion-row>\n\n  <ion-row class=\"featured-img\">\n    <ion-col  *ngFor=\"let fet of featured let i=index\" size=\"2\" (click)=\"fedetials(i)\">\n      <img *ngIf=\"fet.logo\"  src=\"{{fet.logo}}\">\n      <img *ngIf=\"fet.logo == ''\" class=\"icon-img\" src=\"assets/logo-color.png\" style=\"padding: 10px; background: #fafafa; border-radius: 25%;\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"title\">Recently Viewed</ion-col>\n    <ion-col size=\"3\" class=\"view-all\" routerLink=\"/recent\">View All</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"4\" class=\"p-0\"  *ngFor=\"let rec of recent;  let i=index\" (click)=\"details(i)\">\n      <img *ngIf=\"rec.logo\" class=\"icon-img-recent\"  src=\"{{rec.logo}}\">\n      <img *ngIf=\"rec.logo == ''\" class=\"icon-img-recent\"  src=\"assets/logo-color.png\" style=\"padding: 10px; background: #fafafa; border-radius: 10px;\">\n      <div class=\"img-title center text-center p-0\" text-center>{{rec.business_name}}</div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"title\">Shop Categories</ion-col>\n    <ion-col size=\"3\" class=\"view-all\" routerLink=\"/shop-categories\">View All</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col *ngFor=\"let cat of categories; let i=index\" (click)=\"category(i)\">\n      <div class=\"service-icons\">\n        <img src=\"https://topiko.com/app/icons/{{cat.image}}\">\n        <div>{{cat.category}}</div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"title\">Service Categories</ion-col>\n    <ion-col size=\"3\" class=\"view-all\" routerLink=\"/service-categories\">View All</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-row>\n      <ion-col *ngFor=\"let ser of services; let i=index\" (click)=\"service(i)\">\n        <div class=\"service-icons\">\n          <img src=\"https://topiko.com/app/icons/{{ser.image}}\">\n          <div>{{ser.service}}</div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"title\">Offers Near You</ion-col>\n    <ion-col size=\"3\" class=\"view-all\" routerLink=\"/offersnearyou\">View All</ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"3\" class=\"p-0\"  *ngFor=\"let offn of offersNear; let i=index\" (click)=\"offersdetails(i)\">\n      <img *ngIf=\"offn.image\" class=\"icon-img\" src=\"{{offn.image}}\">\n      <img *ngIf=\"offn.image == ''\" class=\"icon-img\" src=\"assets/logo-color.png\" style=\"padding: 10px; background: #fafafa; border-radius: 25%;\">\n      <div class=\"img-title center text-center p-0\" text-center>{{offn.offer}}</div>\n    </ion-col>\n  </ion-row>\n  \n\n\n\n  <ion-row>\n    <ion-col class=\"title\">Shops Near You</ion-col>\n    <ion-col size=\"3\" class=\"view-all\" routerLink=\"/shopsnearyou\">View All</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"3\" class=\"p-0\"  *ngFor=\"let shopn of shopsNear; let i=index;\" (click)=\"getdetials(i)\">\n      <img *ngIf=\"shopn.logo\" src=\"{{shopn.logo}}\" class=\"icon-img\">\n      <img *ngIf=\"shopn.logo == ''\" class=\"icon-img\" src=\"assets/logo-color.png\" style=\"padding: 10px; background: #871178; border-radius: 25%;\">\n      <div class=\"img-title center text-center p-0\" text-center>{{shopn.business_name}}</div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"title\">Services Near You</ion-col>\n    <ion-col size=\"3\" class=\"view-all\" routerLink=\"/servicesnearyou\">View All</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"4\" class=\"p-0\"  *ngFor=\"let sern of servicesNear;  let i=index\">\n      <img src=\"{{sern.logo}}\">\n      <div class=\"img-title center text-center p-0\" text-center>{{sern.business_name}}</div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"col-mt-3\" size=\"6\" *ngFor=\"let pos2 of position2; let i = index;\"  (click)=\"pos2details(i)\" >\n      <img class=\"bdr-rad-20\" style=\"height:150px; width:100%\"\n        src=\"{{pos2.image}}\">\n      <ion-row>\n        <ion-col class=\"img-title\">\n          {{pos2.business_name}} | {{pos2.city}}\n        </ion-col>\n        <!-- <div class=\"hearticon-div\">\n          <ion-icon class=\"heart-icon\" name=\"heart\"></ion-icon>\n        </div>\n        <ion-col size=\"2\" class=\"count text-overflow\">389</ion-col> -->\n      </ion-row>\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"col-mt-3\"  (click)=\"pos3details()\">\n      <img \n        src=\"{{posbanner3}}\" />\n      <ion-row>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"col-mt-3\" size=\"6\"  *ngFor=\"let pos4 of position4; let i = index;\"  (click)=\"pos4details(i)\">\n      <img class=\"bdr-rad-20\" style=\"height:150px; width:100%\"\n        src=\"{{pos4.image}}\" />\n      <ion-row>\n        <ion-col class=\"img-title\">\n          {{pos4.business_name}} | {{pos4.city}}\n        </ion-col>\n        <!-- <div class=\"hearticon-div\">\n          <ion-icon class=\"heart-icon\" name=\"heart\"></ion-icon>\n        </div>\n        <ion-col size=\"2\" class=\"count text-overflow\">389</ion-col> -->\n      </ion-row>\n    </ion-col>\n\n  </ion-row>\n\n  <br>\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let pos5 of position5; let i = index;\" (click)=\"pos5details(i)\" >\n      <img\n        src=\"{{pos5.image}}\"\n        style=\"border-radius: 10px;\">\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n\n<ion-footer mode=\"md\" class=\"home-footer\">\n  <ion-row>\n    <ion-col>\n      <ion-icon name=\"home\" class=\"click-footer\"></ion-icon>\n      <p class=\"click-footer\">Home</p>\n    </ion-col>\n    <ion-col routerLink=\"/profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <p>Profile</p>\n    </ion-col>\n    <ion-col routerLink=\"/qr-scanner\">\n      <ion-icon name=\"scan-outline\"></ion-icon>\n      <p>Scan</p>\n    </ion-col>\n    <ion-col routerLink=\"/favourites\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n      <p>Favourites</p>\n    </ion-col>\n    <ion-col routerLink=\"/calls\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n      <p>Call</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    },

    /***/
    "ct+p": function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "f6od": function f6od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-bottom: 65px;\n  --padding-end: 18px;\n  --padding-start: 18px;\n  --padding-top: 0px;\n  --ion-background-color: #fff;\n}\n\nion-row {\n  margin: 0;\n  padding: 0;\n  --padding-bottom: 10px;\n  width: 100%;\n}\n\n.seg-class {\n  margin-top: 9px;\n  margin-bottom: 7px;\n  font-size: 14px;\n}\n\n.seg-class ion-button {\n  --background: #dedede;\n  --color: #707070;\n  --border-radius: 18px;\n  margin-bottom: 3px;\n  margin-right: 6px;\n  --box-shadow: none;\n  text-transform: capitalize;\n  min-width: 72px;\n  height: 32px;\n}\n\n.col-mt-3 {\n  margin-top: 3%;\n  margin-bottom: -5%;\n}\n\n.col-mt-3 img {\n  border-radius: 10px;\n}\n\n.img-title {\n  font-size: 12px;\n  padding: 8px 0;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.count {\n  font-size: 12px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n.featured-img ion-col img {\n  border-radius: 50%;\n  padding: 0;\n  border: 1px solid #871178;\n}\n\n.view-all {\n  color: #871178;\n  text-align: right;\n  font-size: 16px;\n  padding: 0.5em;\n}\n\n.title {\n  text-align: left;\n  color: #22272a;\n  padding: 0.5em 0.5em 0 0.5em;\n  font-size: 16px;\n}\n\n.hearticon-div {\n  display: flex;\n  align-items: center;\n}\n\n.heart-icon {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  color: #de0000;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-button {\n  height: 24px;\n  width: 100%;\n  color: #707070;\n  font-size: 12px;\n  margin: 0;\n}\n\n.swiper-wrapper {\n  margin-bottom: 20px !important;\n}\n\n.swiper-pagination {\n  bottom: 0 !important;\n}\n\n.swiper-pagination-bullet-active {\n  --background: red !important;\n}\n\n.service-icons {\n  text-align: center;\n  background: #f5f5f5;\n  padding: 1em 0.5em 0.2em 0.5em;\n  border-radius: 10px;\n  box-shadow: 0px 5px 4px #ccc;\n  font-size: 0.8em;\n  color: #7f1071;\n}\n\n.service-icons img {\n  width: 60%;\n}\n\n.alldiv {\n  position: absolute;\n  z-index: 999;\n  background: #fff;\n  width: 96%;\n  min-height: 50vh;\n  top: 0px;\n  padding: 5px;\n  box-shadow: 0px 6px 7px #464646;\n  margin-top: 44px;\n}\n\n.alllinks {\n  display: flow-root;\n  width: 100%;\n}\n\n.links {\n  display: flex;\n  float: left;\n  text-align: center;\n  padding: 0 10px;\n  min-width: 16%;\n  justify-content: space-between;\n  align-content: space-between;\n  flex-wrap: wrap;\n  flex-direction: row;\n  color: #9e9e9e;\n}\n\n.links::after {\n  content: \"|\";\n  color: #e0e0e0;\n  padding: 0 10px;\n  width: 2px;\n}\n\n.purplelink {\n  color: #871178;\n  padding: 5px;\n}\n\n.icon-img {\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  border: 1px solid #871178;\n  padding: 2px;\n  border-radius: 50%;\n  background: #f1f1f1;\n  height: 75px;\n}\n\n.icon-img-recent {\n  border-radius: 5px;\n  width: 100%;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUNBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksbUJBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBUUo7O0FBTkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQVNKOztBQVBBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQVdKOztBQVRBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBWUo7O0FBVkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBYUo7O0FBWEE7RUFNSSxjQUFBO0VBQ0EsZUFBQTtBQVNKOztBQVBBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFVSjs7QUFSQTtFQUNJLDhCQUFBO0FBV0o7O0FBUkE7RUFDSSxvQkFBQTtBQVdKOztBQVJBO0VBQ0ksNEJBQUE7QUFXSjs7QUFSQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFXSjs7QUFUQTtFQUNJLFVBQUE7QUFZSjs7QUFWQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBYUo7O0FBVkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFhSjs7QUFYQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBY0o7O0FBWkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBZUo7O0FBYkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQWdCSjs7QUFkQTtFQUVJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBZ0JKOztBQWJBO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQWVKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNjVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbmlvbi1yb3cge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2VnLWNsYXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uc2VnLWNsYXNzIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZGVkZWRlO1xyXG4gICAgLS1jb2xvcjogIzcwNzA3MDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtaW4td2lkdGg6IDcycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuLmNvbC1tdC0zIHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTUlO1xyXG59XHJcbi5jb2wtbXQtMyBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uaW1nLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uY291bnQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmZlYXR1cmVkLWltZyBpb24tY29sIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjODcxMTc4O1xyXG59XHJcbi52aWV3LWFsbCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDAuNWVtIDAgMC41ZW07XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmhlYXJ0aWNvbi1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmhlYXJ0LWljb24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZGUwMDAwO1xyXG59XHJcbmlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gICAgLy8gZm9udC1zaXplOiAyMHB4O1xyXG4gICAgLy8gbWFyZ2luOiAwIGF1dG87XHJcbiAgICAvLyB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDglO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uc3dpcGVyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWljb25zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBwYWRkaW5nOiAxZW0gMC41ZW0gMC4yZW0gMC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA0cHggI2NjYztcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjb2xvcjogIzdmMTA3MTtcclxufVxyXG4uc2VydmljZS1pY29ucyBpbWcge1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG4uYWxsZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgbWluLWhlaWdodDogNTB2aDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDZweCA3cHggIzQ2NDY0NjtcclxuICAgIG1hcmdpbi10b3A6IDQ0cHg7XHJcbn1cclxuXHJcbi5hbGxsaW5rcyB7XHJcbiAgICBkaXNwbGF5OiBmbG93LXJvb3Q7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubGlua3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNiU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGNvbG9yOiAjOWU5ZTllO1xyXG59XHJcbi5saW5rczo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJ8XCI7XHJcbiAgICBjb2xvcjogI2UwZTBlMDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIHdpZHRoOiAycHg7XHJcbn1cclxuLnB1cnBsZWxpbmsge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmljb24taW1nXHJcbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4NzExNzg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG59XHJcblxyXG4uaWNvbi1pbWctcmVjZW50XHJcbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDsgICAgXHJcbn0iXX0= */";
      /***/
    },

    /***/
    "zpKS": function zpKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "WcN3");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "f6od");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(http, storage, geolocation, router, platform, route) {
          var _this = this;

          _classCallCheck(this, HomePage);

          this.http = http;
          this.storage = storage;
          this.geolocation = geolocation;
          this.router = router;
          this.platform = platform;
          this.route = route;
          this.all = false;
          this.storage.get("userdetails").then(function (val) {
            _this.udata = val;

            if (!_this.udata) {
              _this.router.navigate(['login']);
            }
          });
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.route.params.subscribe(function (val) {
              _this2.geolocation.getCurrentPosition().then(function (resp) {
                // resp.coords.latitude
                // resp.coords.longitude
                _this2.lat = resp.coords.latitude;
                _this2["long"] = resp.coords.longitude;
                console.log("Latitude", _this2.lat);
                console.log("Latitude", _this2["long"]);
              }); // Get User Details


              _this2.storage.get("userdetails").then(function (val) {
                _this2.udata = val;
                _this2.ucity = _this2.udata[0].city;
                _this2.user_id = _this2.udata[0].id;
                console.log(_this2.ucity); // Get Offers Near you 

                _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "homeoffersnearyou.php?city=" + _this2.ucity).subscribe(function (data) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            this.offersNear = data;
                            console.log("Offers Near you", this.offersNear);

                          case 2:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));
                }); // Get Shops Near you 


                _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "homeshopsnearyou.php?city=" + _this2.ucity).subscribe(function (data) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            this.shopsNear = data;
                            console.log("Shops Near You", this.shopsNear);

                          case 2:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));
                }); // Get Services Near you 


                _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "servicesnearyou.php?city=" + _this2.ucity).subscribe(function (data) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            this.servicesNear = data; //console.log("Services Near you", this.servicesNear);

                          case 1:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));
                }); // Get Recent Viewed


                _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "recentviews.php?user_id=" + _this2.user_id).subscribe(function (data) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            this.recent = data;
                            console.log(this.recent);

                          case 2:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, this);
                  }));
                });
              }); // Get Categories


              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "gethomecategories.php").subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          this.categories = data;
                          console.log("categories", this.categories);

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, this);
                }));
              }); // Get Services


              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "gethomeservices.php").subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          this.services = data; //console.log(this.services);

                        case 1:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6, this);
                }));
              }); // Get All Categories


              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getcategories.php").subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          this.allcategories = data;
                          console.log("categories", this.categories);

                        case 2:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7, this);
                }));
              }); // Get All Services


              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getservices.php").subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          this.allservices = data; //console.log(this.services);

                        case 1:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8, this);
                }));
              }); // Get Featured


              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "featured.php").subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          this.featured = data;
                          console.log("Featured", this.featured);

                        case 2:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9, this);
                }));
              }); // Get Banners


              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getbanners.php").subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          this.banners = data; //console.log("Banners", this.banners);

                        case 1:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10, this);
                }));
              }); // Get Offers


              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getoffers.php").subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          this.offers = data; //console.log("Offers", this.offers);

                        case 1:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11, this);
                }));
              }); // Get position 1


              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getbanerpos1.php").subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) {
                      switch (_context12.prev = _context12.next) {
                        case 0:
                          this.position1 = data;
                          this.posbanner1 = this.position1[0].image;
                          this.pos1bid = this.position1[0].bid;
                          console.log("position1", this.position1);

                        case 4:
                        case "end":
                          return _context12.stop();
                      }
                    }
                  }, _callee12, this);
                }));
              }); // Get position 2


              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getbanerpos2.php").subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          this.position2 = data;
                          console.log("position 2", this.position2);

                        case 2:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _callee13, this);
                }));
              }); // Get position 3


              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getbanerpos3.php").subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                  return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) {
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          this.position3 = data;
                          this.posbanner3 = this.position3[0].image;
                          this.pos3bid = this.position3[0].bid;
                          console.log("position 3", this.position3);

                        case 4:
                        case "end":
                          return _context14.stop();
                      }
                    }
                  }, _callee14, this);
                }));
              }); // Get position 4


              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getbanerpos4.php").subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                  return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) {
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          this.position4 = data;
                          console.log("position 4", this.position4);

                        case 2:
                        case "end":
                          return _context15.stop();
                      }
                    }
                  }, _callee15, this);
                }));
              }); // Get position 5


              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getbanerpos5.php").subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) {
                      switch (_context16.prev = _context16.next) {
                        case 0:
                          this.position5 = data;
                          console.log("position 5", this.position5);

                        case 2:
                        case "end":
                          return _context16.stop();
                      }
                    }
                  }, _callee16, this);
                }));
              }); // Get Recent Viewed
              // this.http.get(AppComponent.ApiUrl + "recentlyviewed.php").subscribe(async data => {
              //   this.recent = data;
              //   console.log(this.recent);
              // })

            });
          }
        }, {
          key: "category",
          value: function category(i) {
            console.log("type", this.categories[i].type);
            this.storage.set("type", this.categories[i].type);
            this.storage.set("catid", this.categories[i].id);
            this.router.navigate(['gcategory']);
          }
        }, {
          key: "service",
          value: function service(i) {
            console.log("type", this.services[i].type);
            this.storage.set("type", this.services[i].type);
            this.storage.set("sid", this.services[i].id);
            this.router.navigate(['gcategory']);
          }
        }, {
          key: "offersdetails",
          value: function offersdetails(i) {
            console.log(this.offersNear[i].bid);
            console.log(this.offersNear[i].bid);
            this.storage.set("bid", this.offersNear[i].bid);
            this.router.navigate(['details']);
          }
        }, {
          key: "details",
          value: function details(i) {
            //console.log(this.recent[i].id);
            this.storage.set("bid", this.recent[i].id);
            this.router.navigate(['details']);
            this.Viewbusiness(this.recent[i].id);
          }
        }, {
          key: "showall",
          value: function showall() {
            if (this.all == true) {
              this.all = false;
            } else {
              this.all = true;
            }
          }
        }, {
          key: "pos1details",
          value: function pos1details() {
            this.storage.set("bid", this.pos1bid);
            this.router.navigate(['details']);
            this.Viewbusiness(this.pos1bid);
          }
        }, {
          key: "pos2details",
          value: function pos2details(i) {
            this.storage.set("bid", this.position2[i].bid);
            this.router.navigate(['details']);
            this.Viewbusiness(this.position2[i].bid);
          }
        }, {
          key: "pos3details",
          value: function pos3details() {
            this.storage.set("bid", this.pos3bid);
            this.router.navigate(['details']);
            this.Viewbusiness(this.pos3bid);
          }
        }, {
          key: "pos4details",
          value: function pos4details(i) {
            this.storage.set("bid", this.position4[i].id);
            this.router.navigate(['details']);
            this.Viewbusiness(this.position4[i].id);
          }
        }, {
          key: "pos5details",
          value: function pos5details(i) {
            this.storage.set("bid", this.position5[i].id);
            this.router.navigate(['details']);
            this.Viewbusiness(this.position5[i].id);
          }
        }, {
          key: "fedetials",
          value: function fedetials(i) {
            this.storage.set("bid", this.featured[i].id);
            this.router.navigate(['details']);
            this.Viewbusiness(this.featured[i].id);
          }
        }, {
          key: "getdetials",
          value: function getdetials(i) {
            this.storage.set("bid", this.shopsNear[i].business_id);
            this.router.navigate(['details']);
            this.Viewbusiness(this.shopsNear[i].id);
          }
        }, {
          key: "Viewbusiness",
          value: function Viewbusiness(id) {
            var _this3 = this;

            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "viewbusiness.php?bid=" + id + "&user_id=" + this.user_id).subscribe(function (vrespo) {
              _this3.vrespo = vrespo;
              console.log("View Response:", _this3.user_id);
            });
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map