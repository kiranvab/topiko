(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["record-views-record-views-module"], {
    /***/
    "4N7H": function N7H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvcmQtdmlld3MucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "LO5U": function LO5U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecordViewsPageRoutingModule", function () {
        return RecordViewsPageRoutingModule;
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


      var _record_views_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./record-views.page */
      "nU/K");

      var routes = [{
        path: '',
        component: _record_views_page__WEBPACK_IMPORTED_MODULE_3__["RecordViewsPage"]
      }];

      var RecordViewsPageRoutingModule = function RecordViewsPageRoutingModule() {
        _classCallCheck(this, RecordViewsPageRoutingModule);
      };

      RecordViewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RecordViewsPageRoutingModule);
      /***/
    },

    /***/
    "mkh9": function mkh9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>record-views</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "nU/K": function nUK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecordViewsPage", function () {
        return RecordViewsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_record_views_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./record-views.page.html */
      "mkh9");
      /* harmony import */


      var _record_views_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./record-views.page.scss */
      "4N7H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RecordViewsPage = /*#__PURE__*/function () {
        function RecordViewsPage() {
          _classCallCheck(this, RecordViewsPage);
        }

        _createClass(RecordViewsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RecordViewsPage;
      }();

      RecordViewsPage.ctorParameters = function () {
        return [];
      };

      RecordViewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-record-views',
        template: _raw_loader_record_views_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_record_views_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RecordViewsPage);
      /***/
    },

    /***/
    "yqNi": function yqNi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecordViewsPageModule", function () {
        return RecordViewsPageModule;
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


      var _record_views_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./record-views-routing.module */
      "LO5U");
      /* harmony import */


      var _record_views_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./record-views.page */
      "nU/K");

      var RecordViewsPageModule = function RecordViewsPageModule() {
        _classCallCheck(this, RecordViewsPageModule);
      };

      RecordViewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _record_views_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecordViewsPageRoutingModule"]],
        declarations: [_record_views_page__WEBPACK_IMPORTED_MODULE_6__["RecordViewsPage"]]
      })], RecordViewsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=record-views-record-views-module-es5.js.map