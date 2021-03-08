(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addproducts-addproducts-module"], {
    /***/
    "FA73":
    /*!*************************************************!*\
      !*** ./src/app/addproducts/addproducts.page.ts ***!
      \*************************************************/

    /*! exports provided: AddproductsPage */

    /***/
    function FA73(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddproductsPage", function () {
        return AddproductsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_addproducts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./addproducts.page.html */
      "e8MA");
      /* harmony import */


      var _addproducts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./addproducts.page.scss */
      "vSgU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddproductsPage = /*#__PURE__*/function () {
        function AddproductsPage() {
          _classCallCheck(this, AddproductsPage);
        }

        _createClass(AddproductsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddproductsPage;
      }();

      AddproductsPage.ctorParameters = function () {
        return [];
      };

      AddproductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addproducts',
        template: _raw_loader_addproducts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addproducts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddproductsPage);
      /***/
    },

    /***/
    "e8MA":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addproducts/addproducts.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function e8MA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>addproducts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "s9cF":
    /*!***************************************************!*\
      !*** ./src/app/addproducts/addproducts.module.ts ***!
      \***************************************************/

    /*! exports provided: AddproductsPageModule */

    /***/
    function s9cF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddproductsPageModule", function () {
        return AddproductsPageModule;
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


      var _addproducts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./addproducts-routing.module */
      "xHS5");
      /* harmony import */


      var _addproducts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./addproducts.page */
      "FA73");

      var AddproductsPageModule = function AddproductsPageModule() {
        _classCallCheck(this, AddproductsPageModule);
      };

      AddproductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addproducts_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddproductsPageRoutingModule"]],
        declarations: [_addproducts_page__WEBPACK_IMPORTED_MODULE_6__["AddproductsPage"]]
      })], AddproductsPageModule);
      /***/
    },

    /***/
    "vSgU":
    /*!***************************************************!*\
      !*** ./src/app/addproducts/addproducts.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function vSgU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRwcm9kdWN0cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "xHS5":
    /*!***********************************************************!*\
      !*** ./src/app/addproducts/addproducts-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: AddproductsPageRoutingModule */

    /***/
    function xHS5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddproductsPageRoutingModule", function () {
        return AddproductsPageRoutingModule;
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


      var _addproducts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./addproducts.page */
      "FA73");

      var routes = [{
        path: '',
        component: _addproducts_page__WEBPACK_IMPORTED_MODULE_3__["AddproductsPage"]
      }];

      var AddproductsPageRoutingModule = function AddproductsPageRoutingModule() {
        _classCallCheck(this, AddproductsPageRoutingModule);
      };

      AddproductsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddproductsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=addproducts-addproducts-module-es5.js.map