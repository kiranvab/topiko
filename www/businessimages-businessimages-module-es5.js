(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["businessimages-businessimages-module"], {
    /***/
    "4jBc":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businessimages/businessimages.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function jBc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n  <h5>Business Images</h5>\n  <h5>Upload Store / Service images which can help you <strong>attract More Customer</strong></h5>\n  <ion-card>\n    <ion-card-header>\n      Business Logo\n    </ion-card-header>\n  <ion-row style=\"text-align:center\">\n     <ion-col>\n       <img class=\"logo-img\" src=\"assets/camera.png\">\n       <ion-button color=\"primary\">Upload / Take Photo</ion-button>\n     </ion-col>\n  </ion-row>\n</ion-card>\n\n<ion-card>\n  <ion-row>\n    <ion-col>Additional Images</ion-col>\n  </ion-row>\n<ion-row>\n  <ion-col size=\"3\">\n    <img src=\"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg\">\n  </ion-col>\n  <ion-col size=\"3\">\n    <img src=\"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg\">\n  </ion-col>\n  <ion-col size=\"3\">\n    <img src=\"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg\">\n  </ion-col>\n  <ion-col size=\"3\">\n    <img src=\"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg\">\n  </ion-col>\n  <ion-col size=\"3\">\n    <img src=\"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg\">\n  </ion-col>\n  <ion-col size=\"3\">\n    <img src=\"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg\">\n  </ion-col>\n  <ion-col size=\"3\">\n    <img src=\"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg\">\n  </ion-col>\n  <ion-col size=\"3\">\n    <img src=\"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg\">\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col><ion-button color=\"primary\" size=\"block\">Upload Images</ion-button></ion-col>\n</ion-row>\n</ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col><ion-button size=\"block\" routerLink=\"/businesscategory\" color=\"light\">Back</ion-button></ion-col>\n    <ion-col><ion-button size=\"block\" routerLink=\"/businesstime\" color=\"warning\">Continue</ion-button></ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    },

    /***/
    "5Wzg":
    /*!*****************************************************************!*\
      !*** ./src/app/businessimages/businessimages-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: BusinessimagesPageRoutingModule */

    /***/
    function Wzg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessimagesPageRoutingModule", function () {
        return BusinessimagesPageRoutingModule;
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


      var _businessimages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./businessimages.page */
      "d5dl");

      var routes = [{
        path: '',
        component: _businessimages_page__WEBPACK_IMPORTED_MODULE_3__["BusinessimagesPage"]
      }];

      var BusinessimagesPageRoutingModule = function BusinessimagesPageRoutingModule() {
        _classCallCheck(this, BusinessimagesPageRoutingModule);
      };

      BusinessimagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BusinessimagesPageRoutingModule);
      /***/
    },

    /***/
    "DhHU":
    /*!*********************************************************!*\
      !*** ./src/app/businessimages/businessimages.module.ts ***!
      \*********************************************************/

    /*! exports provided: BusinessimagesPageModule */

    /***/
    function DhHU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessimagesPageModule", function () {
        return BusinessimagesPageModule;
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


      var _businessimages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./businessimages-routing.module */
      "5Wzg");
      /* harmony import */


      var _businessimages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./businessimages.page */
      "d5dl");

      var BusinessimagesPageModule = function BusinessimagesPageModule() {
        _classCallCheck(this, BusinessimagesPageModule);
      };

      BusinessimagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _businessimages_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusinessimagesPageRoutingModule"]],
        declarations: [_businessimages_page__WEBPACK_IMPORTED_MODULE_6__["BusinessimagesPage"]]
      })], BusinessimagesPageModule);
      /***/
    },

    /***/
    "XI8k":
    /*!*********************************************************!*\
      !*** ./src/app/businessimages/businessimages.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function XI8k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #122959;\n  font-family: Comfortaa;\n  color: #fff;\n}\n\nh5 {\n  color: #fff;\n  text-align: center;\n}\n\nion-footer {\n  background: #eaeaea;\n  height: 60px;\n}\n\n.logo-img {\n  width: 40%;\n  text-align: center;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJ1c2luZXNzaW1hZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBRUksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJidXNpbmVzc2ltYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxMjI5NTk7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuaDUgXHJcbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1mb290ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG4ubG9nby1pbWdcclxue1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "d5dl":
    /*!*******************************************************!*\
      !*** ./src/app/businessimages/businessimages.page.ts ***!
      \*******************************************************/

    /*! exports provided: BusinessimagesPage */

    /***/
    function d5dl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessimagesPage", function () {
        return BusinessimagesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_businessimages_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./businessimages.page.html */
      "4jBc");
      /* harmony import */


      var _businessimages_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./businessimages.page.scss */
      "XI8k");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BusinessimagesPage = /*#__PURE__*/function () {
        function BusinessimagesPage() {
          _classCallCheck(this, BusinessimagesPage);
        }

        _createClass(BusinessimagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BusinessimagesPage;
      }();

      BusinessimagesPage.ctorParameters = function () {
        return [];
      };

      BusinessimagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-businessimages',
        template: _raw_loader_businessimages_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_businessimages_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BusinessimagesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=businessimages-businessimages-module-es5.js.map