(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["callenquiry-callenquiry-module"], {
    /***/
    "BFfh":
    /*!***************************************************!*\
      !*** ./src/app/callenquiry/callenquiry.module.ts ***!
      \***************************************************/

    /*! exports provided: CallenquiryPageModule */

    /***/
    function BFfh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallenquiryPageModule", function () {
        return CallenquiryPageModule;
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


      var _callenquiry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./callenquiry-routing.module */
      "c2kK");
      /* harmony import */


      var _callenquiry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./callenquiry.page */
      "JSPV");

      var CallenquiryPageModule = function CallenquiryPageModule() {
        _classCallCheck(this, CallenquiryPageModule);
      };

      CallenquiryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _callenquiry_routing_module__WEBPACK_IMPORTED_MODULE_5__["CallenquiryPageRoutingModule"]],
        declarations: [_callenquiry_page__WEBPACK_IMPORTED_MODULE_6__["CallenquiryPage"]]
      })], CallenquiryPageModule);
      /***/
    },

    /***/
    "JSPV":
    /*!*************************************************!*\
      !*** ./src/app/callenquiry/callenquiry.page.ts ***!
      \*************************************************/

    /*! exports provided: CallenquiryPage */

    /***/
    function JSPV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallenquiryPage", function () {
        return CallenquiryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_callenquiry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./callenquiry.page.html */
      "TY8p");
      /* harmony import */


      var _callenquiry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./callenquiry.page.scss */
      "XDYQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CallenquiryPage = /*#__PURE__*/function () {
        function CallenquiryPage() {
          _classCallCheck(this, CallenquiryPage);

          this.segmentModel = "all";
        }

        _createClass(CallenquiryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CallenquiryPage;
      }();

      CallenquiryPage.ctorParameters = function () {
        return [];
      };

      CallenquiryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-callenquiry',
        template: _raw_loader_callenquiry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_callenquiry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CallenquiryPage);
      /***/
    },

    /***/
    "TY8p":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/callenquiry/callenquiry.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function TY8p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Call Enquiry</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment \n  value=\"all\" \n  color=\"tertiary\" \n  scrollable=\"true\"\n  mode=\"ios\"\n  [(ngModel)]=\"segmentModel\" >\n\n    <ion-segment-button value=\"all\">\n      <ion-label>All</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"missed\">\n      <ion-label>Missed</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"recorded\">\n      <ion-label>Recorded</ion-label>\n    </ion-segment-button>\n \n  </ion-segment>\n\n  <div  *ngIf=\"segmentModel === 'all'\">\n    <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"https://social.brandfactoryonline.com/data/fb_images/brandfactoryofficial/4127891647281011.jpg\">\n        </ion-avatar>\n        <h6>Brand Factory <br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"call-outline\"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/9/96/Logo-warga-200x200.png\">\n        </ion-avatar>\n        <h6>WOW Bakers <br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"call-outline\"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"https://scalebranding.com/wp-content/uploads/2020/04/dragon-mascot-logo-200x200.jpg\">\n        </ion-avatar>\n        <h6>Dragon Chicken<br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"call-outline\"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"https://media-exp1.licdn.com/dms/image/C4E0BAQHLb76E-ePoyg/company-logo_200_200/0/1561666353465?e=2159024400&v=beta&t=axU9L0Bjk_nqud3XEvwFU1WfpI4bUReJRfkt1rxhUB0\">\n        </ion-avatar>\n        <h6>Medly Pharmacy<br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"call-outline\"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"https://companycontactinformation.com/wp-content/uploads/2020/09/balaji-wafers-logo.png\">\n        </ion-avatar>\n        <h6>BALAJI Wafers<br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"call-outline\"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"data:image/png;base64,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\">\n        </ion-avatar>\n        <h6>Dairy Queen <br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"call-outline\"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div  *ngIf=\"segmentModel === 'missed'\">\n    <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"https://social.brandfactoryonline.com/data/fb_images/brandfactoryofficial/4127891647281011.jpg\">\n        </ion-avatar>\n        <h6>Brand Factory <br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"arrow-redo-outline\"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/9/96/Logo-warga-200x200.png\">\n        </ion-avatar>\n        <h6>WOW Bakers <br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"arrow-redo-outline\"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"https://scalebranding.com/wp-content/uploads/2020/04/dragon-mascot-logo-200x200.jpg\">\n        </ion-avatar>\n        <h6>Dragon Chicken<br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"arrow-redo-outline\"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"https://media-exp1.licdn.com/dms/image/C4E0BAQHLb76E-ePoyg/company-logo_200_200/0/1561666353465?e=2159024400&v=beta&t=axU9L0Bjk_nqud3XEvwFU1WfpI4bUReJRfkt1rxhUB0\">\n        </ion-avatar>\n        <h6>Medly Pharmacy<br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"arrow-redo-outline\"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"https://companycontactinformation.com/wp-content/uploads/2020/09/balaji-wafers-logo.png\">\n        </ion-avatar>\n        <h6>BALAJI Wafers<br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"arrow-redo-outline\"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"data:image/png;base64,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\">\n        </ion-avatar>\n        <h6>Dairy Queen <br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"arrow-redo-outline\"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div  *ngIf=\"segmentModel === 'recorded'\">\n    <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"https://social.brandfactoryonline.com/data/fb_images/brandfactoryofficial/4127891647281011.jpg\">\n        </ion-avatar>\n        <h6>Brand Factory <br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"play-outline\"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/9/96/Logo-warga-200x200.png\">\n        </ion-avatar>\n        <h6>WOW Bakers <br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"play-outline\"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"https://scalebranding.com/wp-content/uploads/2020/04/dragon-mascot-logo-200x200.jpg\">\n        </ion-avatar>\n        <h6>Dragon Chicken<br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"play-outline\"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"https://media-exp1.licdn.com/dms/image/C4E0BAQHLb76E-ePoyg/company-logo_200_200/0/1561666353465?e=2159024400&v=beta&t=axU9L0Bjk_nqud3XEvwFU1WfpI4bUReJRfkt1rxhUB0\">\n        </ion-avatar>\n        <h6>Medly Pharmacy<br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"play-outline\"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"https://companycontactinformation.com/wp-content/uploads/2020/09/balaji-wafers-logo.png\">\n        </ion-avatar>\n        <h6>BALAJI Wafers<br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"play-outline\"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"data:image/png;base64,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\">\n        </ion-avatar>\n        <h6>Dairy Queen <br> <div style=\"font-size:10px; color:#ccc; padding-top: 5px;\">25 Feb, Dur : 10:00</div></h6>\n        <button ion-button clear item-end routerLink=\"/calling\">\n          <ion-icon name=\"play-outline\"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "XDYQ":
    /*!***************************************************!*\
      !*** ./src/app/callenquiry/callenquiry.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function XDYQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  background-color: #5e1c57;\n  padding: 10px;\n  border-radius: 24px;\n  color: #fff;\n  font-size: 24px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhbGxlbnF1aXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQUoiLCJmaWxlIjoiY2FsbGVucXVpcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24gXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZTFjNTc7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "c2kK":
    /*!***********************************************************!*\
      !*** ./src/app/callenquiry/callenquiry-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CallenquiryPageRoutingModule */

    /***/
    function c2kK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallenquiryPageRoutingModule", function () {
        return CallenquiryPageRoutingModule;
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


      var _callenquiry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./callenquiry.page */
      "JSPV");

      var routes = [{
        path: '',
        component: _callenquiry_page__WEBPACK_IMPORTED_MODULE_3__["CallenquiryPage"]
      }];

      var CallenquiryPageRoutingModule = function CallenquiryPageRoutingModule() {
        _classCallCheck(this, CallenquiryPageRoutingModule);
      };

      CallenquiryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CallenquiryPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=callenquiry-callenquiry-module-es5.js.map