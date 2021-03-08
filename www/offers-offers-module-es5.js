(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"], {
    /***/
    "AsKM":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offers/offers.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function AsKM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Offers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-segment \n  value=\"all\" \n  color=\"tertiary\" \n  scrollable=\"true\"\n  mode=\"ios\"\n  [(ngModel)]=\"segmentModel\" >\n\n    <ion-segment-button value=\"current\">\n      <ion-label>Current</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"expired\">\n      <ion-label>Expired</ion-label>\n    </ion-segment-button>\n\n \n  </ion-segment>\n\n  <div  *ngIf=\"segmentModel === 'current'\">\n  <ion-card>\n    <ion-row>\n      <ion-col>\n        <img  class=\"offer-img\" src=\"https://www.shopickr.com/wp-content/uploads/2019/02/netmeds-wallet-offers.jpg\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <ion-col class=\"offer-name\">BUY One GET One FREE</ion-col> \n        </ion-row>\n        \n        <p class=\"offer-desc\">Buy Grocery Online in Mumbai, Pune, Bangalore at Reliance Smart online grocery store. Best price on fresh fruits & vegetables, dairy & bakery</p>\n      </ion-col>\n    </ion-row>\n  <ion-row>\n    <ion-col class=\"start-date\">12 - 12 - 2020</ion-col>\n    <ion-col class=\"end-date\">31 - 12 - 2020</ion-col>\n  </ion-row>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-row>\n      <ion-col>\n        <img  class=\"offer-img\" src=\"https://www.shopickr.com/wp-content/uploads/2019/02/netmeds-wallet-offers.jpg\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <ion-col class=\"offer-name\">BUY One GET One FREE</ion-col> \n        </ion-row>\n        \n        <p class=\"offer-desc\">Buy Grocery Online in Mumbai, Pune, Bangalore at Reliance Smart online grocery store. Best price on fresh fruits & vegetables, dairy & bakery</p>\n      </ion-col>\n    </ion-row>\n  <ion-row>\n    <ion-col class=\"start-date\">12 - 12 - 2020</ion-col>\n    <ion-col class=\"end-date\">31 - 12 - 2020</ion-col>\n  </ion-row>\n  </ion-card>\n</div>\n\n\n\n<div  *ngIf=\"segmentModel === 'expired'\">\n  <ion-card>\n    <ion-row>\n      <ion-col>\n        <img  class=\"offer-img\" src=\"https://www.shopickr.com/wp-content/uploads/2019/02/netmeds-wallet-offers.jpg\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <ion-col class=\"offer-name\">BUY One GET One FREE</ion-col> \n        </ion-row>\n        \n        <p class=\"offer-desc\">Buy Grocery Online in Mumbai, Pune, Bangalore at Reliance Smart online grocery store. Best price on fresh fruits & vegetables, dairy & bakery</p>\n      </ion-col>\n    </ion-row>\n  <ion-row>\n    <ion-col class=\"start-date\">12 - 12 - 2020</ion-col>\n    <ion-col class=\"end-date\">31 - 12 - 2020</ion-col>\n  </ion-row>\n  </ion-card>\n\n</div>\n\n  \n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"/addoffers\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
      /***/
    },

    /***/
    "IPP+":
    /*!*****************************************!*\
      !*** ./src/app/offers/offers.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function IPP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".offer-img {\n  width: 100%;\n  height: 150px;\n}\n\n.offer-name {\n  text-align: left;\n  font-weight: bold;\n  color: #122959;\n  padding: 0 10px;\n  margin: 0;\n}\n\n.offer-desc {\n  text-align: left;\n  color: #333;\n  padding: 0 10px;\n  font-size: 12px;\n}\n\n.start-date {\n  background: #122959;\n  text-align: center;\n  color: #fff;\n  padding: 10px;\n}\n\n.end-date {\n  background: #f3c33b;\n  text-align: center;\n  color: #000;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9mZmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUVBO0VBRUksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUdBO0VBRUksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUVJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUtBO0VBRUksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBSEoiLCJmaWxlIjoib2ZmZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vZmZlci1pbWdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcbi5vZmZlci1uYW1lXHJcbntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMTIyOTU5O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgbWFyZ2luOiAwXHJcbn1cclxuXHJcbi5vZmZlci1kZXNjXHJcbntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnN0YXJ0LWRhdGVcclxue1xyXG4gICAgYmFja2dyb3VuZDogIzEyMjk1OTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmVuZC1kYXRlXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNmM2MzM2I7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "c4yL":
    /*!***************************************!*\
      !*** ./src/app/offers/offers.page.ts ***!
      \***************************************/

    /*! exports provided: OffersPage */

    /***/
    function c4yL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OffersPage", function () {
        return OffersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_offers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./offers.page.html */
      "AsKM");
      /* harmony import */


      var _offers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./offers.page.scss */
      "IPP+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OffersPage = /*#__PURE__*/function () {
        function OffersPage() {
          _classCallCheck(this, OffersPage);

          this.segmentModel = "current";
        }

        _createClass(OffersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OffersPage;
      }();

      OffersPage.ctorParameters = function () {
        return [];
      };

      OffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-offers',
        template: _raw_loader_offers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_offers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OffersPage);
      /***/
    },

    /***/
    "t2/U":
    /*!*************************************************!*\
      !*** ./src/app/offers/offers-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: OffersPageRoutingModule */

    /***/
    function t2U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OffersPageRoutingModule", function () {
        return OffersPageRoutingModule;
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


      var _offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./offers.page */
      "c4yL");

      var routes = [{
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_3__["OffersPage"]
      }];

      var OffersPageRoutingModule = function OffersPageRoutingModule() {
        _classCallCheck(this, OffersPageRoutingModule);
      };

      OffersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OffersPageRoutingModule);
      /***/
    },

    /***/
    "x4ys":
    /*!*****************************************!*\
      !*** ./src/app/offers/offers.module.ts ***!
      \*****************************************/

    /*! exports provided: OffersPageModule */

    /***/
    function x4ys(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OffersPageModule", function () {
        return OffersPageModule;
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


      var _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./offers-routing.module */
      "t2/U");
      /* harmony import */


      var _offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./offers.page */
      "c4yL");

      var OffersPageModule = function OffersPageModule() {
        _classCallCheck(this, OffersPageModule);
      };

      OffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["OffersPageRoutingModule"]],
        declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]]
      })], OffersPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=offers-offers-module-es5.js.map