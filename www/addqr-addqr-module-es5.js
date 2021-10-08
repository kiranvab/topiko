(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addqr-addqr-module"], {
    /***/
    "+Q6C": function Q6C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRxci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "SE9G": function SE9G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddqrPageRoutingModule", function () {
        return AddqrPageRoutingModule;
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


      var _addqr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./addqr.page */
      "oLec");

      var routes = [{
        path: '',
        component: _addqr_page__WEBPACK_IMPORTED_MODULE_3__["AddqrPage"]
      }];

      var AddqrPageRoutingModule = function AddqrPageRoutingModule() {
        _classCallCheck(this, AddqrPageRoutingModule);
      };

      AddqrPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddqrPageRoutingModule);
      /***/
    },

    /***/
    "Wz04": function Wz04(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>addqr</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "o0VF": function o0VF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddqrPageModule", function () {
        return AddqrPageModule;
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


      var _addqr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./addqr-routing.module */
      "SE9G");
      /* harmony import */


      var _addqr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./addqr.page */
      "oLec");

      var AddqrPageModule = function AddqrPageModule() {
        _classCallCheck(this, AddqrPageModule);
      };

      AddqrPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addqr_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddqrPageRoutingModule"]],
        declarations: [_addqr_page__WEBPACK_IMPORTED_MODULE_6__["AddqrPage"]]
      })], AddqrPageModule);
      /***/
    },

    /***/
    "oLec": function oLec(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddqrPage", function () {
        return AddqrPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_addqr_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./addqr.page.html */
      "Wz04");
      /* harmony import */


      var _addqr_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./addqr.page.scss */
      "+Q6C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddqrPage = /*#__PURE__*/function () {
        function AddqrPage() {
          _classCallCheck(this, AddqrPage);
        }

        _createClass(AddqrPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddqrPage;
      }();

      AddqrPage.ctorParameters = function () {
        return [];
      };

      AddqrPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addqr',
        template: _raw_loader_addqr_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addqr_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddqrPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=addqr-addqr-module-es5.js.map