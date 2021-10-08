(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["businesses-service-businesses-service-module"], {
    /***/
    "1ZJY": function ZJY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>businesses-service</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "D1pn": function D1pn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessesServicePageRoutingModule", function () {
        return BusinessesServicePageRoutingModule;
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


      var _businesses_service_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./businesses-service.page */
      "mA5d");

      var routes = [{
        path: '',
        component: _businesses_service_page__WEBPACK_IMPORTED_MODULE_3__["BusinessesServicePage"]
      }];

      var BusinessesServicePageRoutingModule = function BusinessesServicePageRoutingModule() {
        _classCallCheck(this, BusinessesServicePageRoutingModule);
      };

      BusinessesServicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BusinessesServicePageRoutingModule);
      /***/
    },

    /***/
    "eCS+": function eCS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNpbmVzc2VzLXNlcnZpY2UucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "mA5d": function mA5d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessesServicePage", function () {
        return BusinessesServicePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_businesses_service_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./businesses-service.page.html */
      "1ZJY");
      /* harmony import */


      var _businesses_service_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./businesses-service.page.scss */
      "eCS+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BusinessesServicePage = /*#__PURE__*/function () {
        function BusinessesServicePage() {
          _classCallCheck(this, BusinessesServicePage);
        }

        _createClass(BusinessesServicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BusinessesServicePage;
      }();

      BusinessesServicePage.ctorParameters = function () {
        return [];
      };

      BusinessesServicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-businesses-service',
        template: _raw_loader_businesses_service_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_businesses_service_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BusinessesServicePage);
      /***/
    },

    /***/
    "qZOI": function qZOI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessesServicePageModule", function () {
        return BusinessesServicePageModule;
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


      var _businesses_service_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./businesses-service-routing.module */
      "D1pn");
      /* harmony import */


      var _businesses_service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./businesses-service.page */
      "mA5d");

      var BusinessesServicePageModule = function BusinessesServicePageModule() {
        _classCallCheck(this, BusinessesServicePageModule);
      };

      BusinessesServicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _businesses_service_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusinessesServicePageRoutingModule"]],
        declarations: [_businesses_service_page__WEBPACK_IMPORTED_MODULE_6__["BusinessesServicePage"]]
      })], BusinessesServicePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=businesses-service-businesses-service-module-es5.js.map