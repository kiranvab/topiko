(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["businessdetails-businessdetails-module"], {
    /***/
    "56el":
    /*!***********************************************************!*\
      !*** ./src/app/businessdetails/businessdetails.module.ts ***!
      \***********************************************************/

    /*! exports provided: BusinessdetailsPageModule */

    /***/
    function el(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessdetailsPageModule", function () {
        return BusinessdetailsPageModule;
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


      var _businessdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./businessdetails-routing.module */
      "U+f9");
      /* harmony import */


      var _businessdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./businessdetails.page */
      "r1oA");

      var BusinessdetailsPageModule = function BusinessdetailsPageModule() {
        _classCallCheck(this, BusinessdetailsPageModule);
      };

      BusinessdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _businessdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusinessdetailsPageRoutingModule"]],
        declarations: [_businessdetails_page__WEBPACK_IMPORTED_MODULE_6__["BusinessdetailsPage"]]
      })], BusinessdetailsPageModule);
      /***/
    },

    /***/
    "PYx+":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businessdetails/businessdetails.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PYx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content padding>\n  <h5>Business Details</h5>\n<div>\n<img src=\"assets/step1.png\">\n</div>\n  <div class=\"details-div\">\n    Are you Lisitng \n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col size=\"3\">\n        <ion-card>\n          <img src=\"assets/shop.png\">\n          Shop\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-card>\n          <img src=\"assets/service.png\">\n          Service\n        </ion-card>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n    <ion-input placeholder=\"Business / Store Name\"></ion-input>\n    <ion-textarea class=\"textarea\" placeholder=\"Details\"></ion-textarea>\n    <ion-input type=\"tel\" placeholder=\"91 123456 7890\"></ion-input>\n    <ion-input type=\"text\" placeholder=\"Address\"></ion-input>\n  </div>\n  </ion-content>\n\n  <ion-footer>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col><ion-button size=\"block\" routerLink=\"/businesscategory\" color=\"warning\">Continue</ion-button></ion-col>\n    </ion-row>\n    \n  </ion-footer>";
      /***/
    },

    /***/
    "U+f9":
    /*!*******************************************************************!*\
      !*** ./src/app/businessdetails/businessdetails-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: BusinessdetailsPageRoutingModule */

    /***/
    function UF9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessdetailsPageRoutingModule", function () {
        return BusinessdetailsPageRoutingModule;
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


      var _businessdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./businessdetails.page */
      "r1oA");

      var routes = [{
        path: '',
        component: _businessdetails_page__WEBPACK_IMPORTED_MODULE_3__["BusinessdetailsPage"]
      }];

      var BusinessdetailsPageRoutingModule = function BusinessdetailsPageRoutingModule() {
        _classCallCheck(this, BusinessdetailsPageRoutingModule);
      };

      BusinessdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BusinessdetailsPageRoutingModule);
      /***/
    },

    /***/
    "cQAn":
    /*!***********************************************************!*\
      !*** ./src/app/businessdetails/businessdetails.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function cQAn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #122959;\n  font-family: Comfortaa;\n  color: #fff;\n}\n\nion-header {\n  font-family: Comfortaa;\n}\n\nh5 {\n  color: #fff;\n  text-align: center;\n}\n\nion-item {\n  padding: 10px;\n}\n\nion-label {\n  padding: 10px;\n  color: #fff;\n}\n\nion-input,\n.native-textarea.sc-ion-textarea-md {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  margin: 10px;\n  width: 95%;\n  padding-left: 10px !important;\n  color: #122959;\n}\n\n.textarea {\n  border: 1px solid #ccc !important;\n  border-radius: 10px !important;\n  padding: 16px !important;\n  margin: 10px !important;\n  width: 95% !important;\n}\n\n.details-div {\n  position: absolute;\n  width: 96%;\n  bottom: 0;\n  background: #fff;\n  border-radius: 10px 10px 0 0;\n  padding: 10px;\n  margin: 8px;\n  margin-bottom: 0;\n}\n\nion-card {\n  margin: 0;\n  text-align: center;\n  padding: 10px;\n}\n\nion-footer {\n  background: #eaeaea;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJ1c2luZXNzZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBRUksc0JBQUE7QUFDSjs7QUFDQTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBRUksYUFBQTtBQUFKOztBQUdBO0VBRUksYUFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTs7RUFHSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFNQTtFQUVJLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFKSjs7QUFNQTtFQUVJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU9BO0VBRUksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUxKOztBQU9BO0VBRUksbUJBQUE7RUFDQSxZQUFBO0FBTEoiLCJmaWxlIjoiYnVzaW5lc3NkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogIzEyMjk1OTtcclxuICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5pb24taGVhZGVyIFxyXG57XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG59XHJcbmg1IFxyXG57XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWl0ZW0gXHJcbntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCBcclxue1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24taW5wdXQsXHJcbi5uYXRpdmUtdGV4dGFyZWEuc2MtaW9uLXRleHRhcmVhLW1kXHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMxMjI5NTlcclxuXHJcbn1cclxuXHJcbi50ZXh0YXJlYSBcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRldGFpbHMtZGl2XHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkIFxyXG57XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmlvbi1mb290ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxuICAgIGhlaWdodDogNjBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "r1oA":
    /*!*********************************************************!*\
      !*** ./src/app/businessdetails/businessdetails.page.ts ***!
      \*********************************************************/

    /*! exports provided: BusinessdetailsPage */

    /***/
    function r1oA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessdetailsPage", function () {
        return BusinessdetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_businessdetails_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./businessdetails.page.html */
      "PYx+");
      /* harmony import */


      var _businessdetails_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./businessdetails.page.scss */
      "cQAn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BusinessdetailsPage = /*#__PURE__*/function () {
        function BusinessdetailsPage() {
          _classCallCheck(this, BusinessdetailsPage);
        }

        _createClass(BusinessdetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BusinessdetailsPage;
      }();

      BusinessdetailsPage.ctorParameters = function () {
        return [];
      };

      BusinessdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-businessdetails',
        template: _raw_loader_businessdetails_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_businessdetails_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BusinessdetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=businessdetails-businessdetails-module-es5.js.map