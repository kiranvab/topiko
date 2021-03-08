(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["postoffers-postoffers-module"], {
    /***/
    "2EPL":
    /*!***********************************************!*\
      !*** ./src/app/postoffers/postoffers.page.ts ***!
      \***********************************************/

    /*! exports provided: PostoffersPage */

    /***/
    function EPL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostoffersPage", function () {
        return PostoffersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_postoffers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./postoffers.page.html */
      "Clai");
      /* harmony import */


      var _postoffers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./postoffers.page.scss */
      "nN67");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PostoffersPage = /*#__PURE__*/function () {
        function PostoffersPage() {
          _classCallCheck(this, PostoffersPage);
        }

        _createClass(PostoffersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PostoffersPage;
      }();

      PostoffersPage.ctorParameters = function () {
        return [];
      };

      PostoffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-postoffers',
        template: _raw_loader_postoffers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_postoffers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PostoffersPage);
      /***/
    },

    /***/
    "Clai":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/postoffers/postoffers.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function Clai(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>postoffers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "M8zP":
    /*!*************************************************!*\
      !*** ./src/app/postoffers/postoffers.module.ts ***!
      \*************************************************/

    /*! exports provided: PostoffersPageModule */

    /***/
    function M8zP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostoffersPageModule", function () {
        return PostoffersPageModule;
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


      var _postoffers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./postoffers-routing.module */
      "hFP1");
      /* harmony import */


      var _postoffers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./postoffers.page */
      "2EPL");

      var PostoffersPageModule = function PostoffersPageModule() {
        _classCallCheck(this, PostoffersPageModule);
      };

      PostoffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _postoffers_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostoffersPageRoutingModule"]],
        declarations: [_postoffers_page__WEBPACK_IMPORTED_MODULE_6__["PostoffersPage"]]
      })], PostoffersPageModule);
      /***/
    },

    /***/
    "hFP1":
    /*!*********************************************************!*\
      !*** ./src/app/postoffers/postoffers-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: PostoffersPageRoutingModule */

    /***/
    function hFP1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostoffersPageRoutingModule", function () {
        return PostoffersPageRoutingModule;
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


      var _postoffers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./postoffers.page */
      "2EPL");

      var routes = [{
        path: '',
        component: _postoffers_page__WEBPACK_IMPORTED_MODULE_3__["PostoffersPage"]
      }];

      var PostoffersPageRoutingModule = function PostoffersPageRoutingModule() {
        _classCallCheck(this, PostoffersPageRoutingModule);
      };

      PostoffersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PostoffersPageRoutingModule);
      /***/
    },

    /***/
    "nN67":
    /*!*************************************************!*\
      !*** ./src/app/postoffers/postoffers.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function nN67(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0b2ZmZXJzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=postoffers-postoffers-module-es5.js.map