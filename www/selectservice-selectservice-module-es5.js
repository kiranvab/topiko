(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selectservice-selectservice-module"], {
    /***/
    "6CWi":
    /*!*****************************************************!*\
      !*** ./src/app/selectservice/selectservice.page.ts ***!
      \*****************************************************/

    /*! exports provided: SelectservicePage */

    /***/
    function CWi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectservicePage", function () {
        return SelectservicePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_selectservice_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./selectservice.page.html */
      "Y4Me");
      /* harmony import */


      var _selectservice_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./selectservice.page.scss */
      "T/JN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SelectservicePage = /*#__PURE__*/function () {
        function SelectservicePage() {
          _classCallCheck(this, SelectservicePage);
        }

        _createClass(SelectservicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SelectservicePage;
      }();

      SelectservicePage.ctorParameters = function () {
        return [];
      };

      SelectservicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-selectservice',
        template: _raw_loader_selectservice_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_selectservice_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SelectservicePage);
      /***/
    },

    /***/
    "Ad2T":
    /*!***************************************************************!*\
      !*** ./src/app/selectservice/selectservice-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: SelectservicePageRoutingModule */

    /***/
    function Ad2T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectservicePageRoutingModule", function () {
        return SelectservicePageRoutingModule;
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


      var _selectservice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./selectservice.page */
      "6CWi");

      var routes = [{
        path: '',
        component: _selectservice_page__WEBPACK_IMPORTED_MODULE_3__["SelectservicePage"]
      }];

      var SelectservicePageRoutingModule = function SelectservicePageRoutingModule() {
        _classCallCheck(this, SelectservicePageRoutingModule);
      };

      SelectservicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SelectservicePageRoutingModule);
      /***/
    },

    /***/
    "SBsU":
    /*!*******************************************************!*\
      !*** ./src/app/selectservice/selectservice.module.ts ***!
      \*******************************************************/

    /*! exports provided: SelectservicePageModule */

    /***/
    function SBsU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectservicePageModule", function () {
        return SelectservicePageModule;
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


      var _selectservice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./selectservice-routing.module */
      "Ad2T");
      /* harmony import */


      var _selectservice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./selectservice.page */
      "6CWi");

      var SelectservicePageModule = function SelectservicePageModule() {
        _classCallCheck(this, SelectservicePageModule);
      };

      SelectservicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _selectservice_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectservicePageRoutingModule"]],
        declarations: [_selectservice_page__WEBPACK_IMPORTED_MODULE_6__["SelectservicePage"]]
      })], SelectservicePageModule);
      /***/
    },

    /***/
    "T/JN":
    /*!*******************************************************!*\
      !*** ./src/app/selectservice/selectservice.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function TJN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3RzZXJ2aWNlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Y4Me":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selectservice/selectservice.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Y4Me(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>selectservice</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=selectservice-selectservice-module-es5.js.map