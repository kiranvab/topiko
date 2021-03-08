(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customerenquiry-customerenquiry-module"], {
    /***/
    "0X6x":
    /*!***********************************************************!*\
      !*** ./src/app/customerenquiry/customerenquiry.module.ts ***!
      \***********************************************************/

    /*! exports provided: CustomerenquiryPageModule */

    /***/
    function X6x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerenquiryPageModule", function () {
        return CustomerenquiryPageModule;
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


      var _customerenquiry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./customerenquiry-routing.module */
      "T7Uq");
      /* harmony import */


      var _customerenquiry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./customerenquiry.page */
      "eg0J");

      var CustomerenquiryPageModule = function CustomerenquiryPageModule() {
        _classCallCheck(this, CustomerenquiryPageModule);
      };

      CustomerenquiryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customerenquiry_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerenquiryPageRoutingModule"]],
        declarations: [_customerenquiry_page__WEBPACK_IMPORTED_MODULE_6__["CustomerenquiryPage"]]
      })], CustomerenquiryPageModule);
      /***/
    },

    /***/
    "5vRN":
    /*!***********************************************************!*\
      !*** ./src/app/customerenquiry/customerenquiry.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function vRN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".review-div {\n  background-image: linear-gradient(#673ab7, #3f51b5);\n}\n\n.review-div ion-icon {\n  padding: 10px 0 10px 10px;\n  color: #ffc107;\n  font-size: 24px;\n}\n\n.review-div p {\n  color: #fff;\n  padding: 0 10% 15px 10%;\n  font-size: 12px;\n}\n\n.review-text {\n  font-size: 12px;\n  padding: 14px;\n  color: #122959;\n}\n\nion-card-header {\n  padding: 0;\n  font-size: 12px;\n  text-align: left;\n  border-bottom: 1px solid #f4f4f4;\n  background: #eaeaea;\n}\n\nion-card-content {\n  padding: 0;\n}\n\nh6 {\n  font-size: 16px;\n  color: #122959;\n  font-weight: bold;\n  line-height: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGN1c3RvbWVyZW5xdWlyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtREFBQTtBQUFKOztBQUVBO0VBRUkseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBRUksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUE7RUFFSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBRUksVUFBQTtBQURKOztBQUlBO0VBRUksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRkoiLCJmaWxlIjoiY3VzdG9tZXJlbnF1aXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXZpZXctZGl2XHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNjczYWI3LCAjM2Y1MWI1KTtcclxufVxyXG4ucmV2aWV3LWRpdiBpb24taWNvbiBcclxue1xyXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMTBweDtcclxuICAgIGNvbG9yOiAjZmZjMTA3O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5yZXZpZXctZGl2IHAgXHJcbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMCAxMCUgMTVweCAxMCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnJldmlldy10ZXh0IFxyXG57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgY29sb3I6ICMxMjI5NTk7XHJcbn1cclxuaW9uLWNhcmQtaGVhZGVyIFxyXG57XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjRmNGY0O1xyXG4gICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCBcclxue1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaDYgXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMTIyOTU5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "OQQr":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerenquiry/customerenquiry.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OQQr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Customer Enquiry</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-row>\n        <ion-col size=\"2\">\n      <ion-avatar>\n        <img src=\"assets/user4.jpeg\">\n      </ion-avatar>\n      </ion-col>\n      <ion-col size=\"10\" style=\"padding:0px;\">\n        <h6>Kalyan Yadav .D</h6>\n        20-12-2020 09:35 PM\n      </ion-col>\n      </ion-row>\n    </ion-card-header>\n    \n    <ion-card-content>\n    <div class=\"review-text\">\n      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n    </div> \n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col><ion-button  size=\"block\" color=\"danger\">Reply</ion-button></ion-col>\n    </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n      <ion-row>\n        <ion-col size=\"2\">\n      <ion-avatar>\n        <img src=\"assets/user4.jpeg\">\n      </ion-avatar>\n      </ion-col>\n      <ion-col size=\"10\" style=\"padding:0px;\">\n        <h6>Kalyan Yadav .D</h6>\n        20-12-2020 09:35 PM\n      </ion-col>\n      </ion-row>\n    </ion-card-header>\n    \n    <ion-card-content>\n    <div class=\"review-text\">\n      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n    </div> \n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col><ion-button  size=\"block\" color=\"danger\">Reply</ion-button></ion-col>\n    </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-row>\n        <ion-col size=\"2\">\n      <ion-avatar>\n        <img src=\"assets/user4.jpeg\">\n      </ion-avatar>\n      </ion-col>\n      <ion-col size=\"10\" style=\"padding:0px;\">\n        <h6>Kalyan Yadav .D</h6>\n        20-12-2020 09:35 PM\n      </ion-col>\n      </ion-row>\n    </ion-card-header>\n    \n    <ion-card-content>\n    <div class=\"review-text\">\n      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n    </div> \n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col><ion-button  size=\"block\"color=\"danger\">Reply</ion-button></ion-col>\n    </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "T7Uq":
    /*!*******************************************************************!*\
      !*** ./src/app/customerenquiry/customerenquiry-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CustomerenquiryPageRoutingModule */

    /***/
    function T7Uq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerenquiryPageRoutingModule", function () {
        return CustomerenquiryPageRoutingModule;
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


      var _customerenquiry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customerenquiry.page */
      "eg0J");

      var routes = [{
        path: '',
        component: _customerenquiry_page__WEBPACK_IMPORTED_MODULE_3__["CustomerenquiryPage"]
      }];

      var CustomerenquiryPageRoutingModule = function CustomerenquiryPageRoutingModule() {
        _classCallCheck(this, CustomerenquiryPageRoutingModule);
      };

      CustomerenquiryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CustomerenquiryPageRoutingModule);
      /***/
    },

    /***/
    "eg0J":
    /*!*********************************************************!*\
      !*** ./src/app/customerenquiry/customerenquiry.page.ts ***!
      \*********************************************************/

    /*! exports provided: CustomerenquiryPage */

    /***/
    function eg0J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerenquiryPage", function () {
        return CustomerenquiryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_customerenquiry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./customerenquiry.page.html */
      "OQQr");
      /* harmony import */


      var _customerenquiry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./customerenquiry.page.scss */
      "5vRN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CustomerenquiryPage = /*#__PURE__*/function () {
        function CustomerenquiryPage() {
          _classCallCheck(this, CustomerenquiryPage);
        }

        _createClass(CustomerenquiryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CustomerenquiryPage;
      }();

      CustomerenquiryPage.ctorParameters = function () {
        return [];
      };

      CustomerenquiryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customerenquiry',
        template: _raw_loader_customerenquiry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_customerenquiry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CustomerenquiryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=customerenquiry-customerenquiry-module-es5.js.map