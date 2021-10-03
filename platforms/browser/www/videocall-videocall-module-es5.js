(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videocall-videocall-module"], {
    /***/
    "0R2u": function R2u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideocallPage", function () {
        return VideocallPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_videocall_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./videocall.page.html */
      "tyO+");
      /* harmony import */


      var _videocall_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./videocall.page.scss */
      "zpFX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var VideocallPage = /*#__PURE__*/function () {
        function VideocallPage() {
          _classCallCheck(this, VideocallPage);
        }

        _createClass(VideocallPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VideocallPage;
      }();

      VideocallPage.ctorParameters = function () {
        return [];
      };

      VideocallPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-videocall',
        template: _raw_loader_videocall_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_videocall_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VideocallPage);
      /***/
    },

    /***/
    "6Ylz": function Ylz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideocallPageModule", function () {
        return VideocallPageModule;
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


      var _videocall_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./videocall-routing.module */
      "S+8M");
      /* harmony import */


      var _videocall_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./videocall.page */
      "0R2u");

      var VideocallPageModule = function VideocallPageModule() {
        _classCallCheck(this, VideocallPageModule);
      };

      VideocallPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _videocall_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideocallPageRoutingModule"]],
        declarations: [_videocall_page__WEBPACK_IMPORTED_MODULE_6__["VideocallPage"]]
      })], VideocallPageModule);
      /***/
    },

    /***/
    "S+8M": function S8M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideocallPageRoutingModule", function () {
        return VideocallPageRoutingModule;
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


      var _videocall_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./videocall.page */
      "0R2u");

      var routes = [{
        path: '',
        component: _videocall_page__WEBPACK_IMPORTED_MODULE_3__["VideocallPage"]
      }];

      var VideocallPageRoutingModule = function VideocallPageRoutingModule() {
        _classCallCheck(this, VideocallPageRoutingModule);
      };

      VideocallPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VideocallPageRoutingModule);
      /***/
    },

    /***/
    "tyO+": function tyO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>videocall</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "zpFX": function zpFX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlb2NhbGwucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=videocall-videocall-module-es5.js.map