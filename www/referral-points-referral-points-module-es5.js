(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["referral-points-referral-points-module"], {
    /***/
    "0uf/": function uf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Referral Points</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"fourth-card\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar><img class=\"border\"\n            src=\"data:image/png;base64,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\"\n            alt=\"\"></ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">Latha Supermarket</p>\n        <p class=\"time\">Referral ID 841212</p>\n        <p class=\"pts\">150Pts</p>\n      </ion-col>\n      <ion-col size=\"3\" class=\"claim\">\n        <ion-button>Claim</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"fourth-card\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar><img class=\"border\"\n            src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQ17V_Ikae3J-GGQV3R9BGgNMjd-zUwkVXs_3T1d7PbldNh3ijku-ryX3gYauOQcE5mE&usqp=CAU\"\n            alt=\"\"></ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">Rajesh Kumar</p>\n        <p class=\"time\">Referral ID 841212</p>\n        <p class=\"pts\">150Pts</p>\n      </ion-col>\n      <ion-col size=\"3\" class=\"claim\">\n        <ion-button>Claim</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"fourth-card\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar><img class=\"border\"\n            src=\"data:image/png;base64,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\"\n            alt=\"\"></ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">Latha Supermarket</p>\n        <p class=\"time\">Referral ID 841212</p>\n        <p class=\"pts\">150Pts</p>\n      </ion-col>\n      <ion-col size=\"3\" class=\"claim\">\n        <ion-button>Claim</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>";
      /***/
    },

    /***/
    "27oz": function oz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  font-size: 1.125em;\n  color: #ffffff;\n  padding: 0px;\n  text-align: left;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 1.3125em;\n  float: right;\n}\n\nion-content {\n  --padding-top: 18px;\n  --padding-bottom: 18px;\n}\n\n.avatar ion-avatar {\n  width: 62px;\n  height: 62px;\n}\n\n.border {\n  border: 0.2px solid #707070;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 0px;\n}\n\n.pts {\n  font-size: 0.75em;\n  color: #871178;\n  margin: 0px;\n}\n\np {\n  margin: 0%;\n  line-height: 18px;\n}\n\n.fourth-card {\n  padding: 10px;\n  padding-bottom: 7px;\n  margin: 10px 18px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.claim {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.claim ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  width: 4.625em;\n  height: 2em;\n  font-size: 16px;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZmVycmFsLXBvaW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSwyQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQU1KOztBQUhBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBT0oiLCJmaWxlIjoicmVmZXJyYWwtcG9pbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhlYWRcclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5pb24taGVhZGVyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjMxMjVlbTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMThweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbi5hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNjJweDtcclxuICAgIGhlaWdodDogNjJweDtcclxufVxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMC4ycHggc29saWQgIzcwNzA3MDtcclxufVxyXG4udXNlci1uYW1lIHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnRpbWUge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ucHRzIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5wIHtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLmZvdXJ0aC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDE4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbn1cclxuXHJcbi5jbGFpbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jbGFpbSBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgd2lkdGg6IDQuNjI1ZW07XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "BH1I": function BH1I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReferralPointsPageModule", function () {
        return ReferralPointsPageModule;
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


      var _referral_points_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./referral-points-routing.module */
      "dzSI");
      /* harmony import */


      var _referral_points_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./referral-points.page */
      "l4qv");

      var ReferralPointsPageModule = function ReferralPointsPageModule() {
        _classCallCheck(this, ReferralPointsPageModule);
      };

      ReferralPointsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _referral_points_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReferralPointsPageRoutingModule"]],
        declarations: [_referral_points_page__WEBPACK_IMPORTED_MODULE_6__["ReferralPointsPage"]]
      })], ReferralPointsPageModule);
      /***/
    },

    /***/
    "dzSI": function dzSI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReferralPointsPageRoutingModule", function () {
        return ReferralPointsPageRoutingModule;
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


      var _referral_points_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./referral-points.page */
      "l4qv");

      var routes = [{
        path: '',
        component: _referral_points_page__WEBPACK_IMPORTED_MODULE_3__["ReferralPointsPage"]
      }];

      var ReferralPointsPageRoutingModule = function ReferralPointsPageRoutingModule() {
        _classCallCheck(this, ReferralPointsPageRoutingModule);
      };

      ReferralPointsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReferralPointsPageRoutingModule);
      /***/
    },

    /***/
    "l4qv": function l4qv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReferralPointsPage", function () {
        return ReferralPointsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_referral_points_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./referral-points.page.html */
      "0uf/");
      /* harmony import */


      var _referral_points_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./referral-points.page.scss */
      "27oz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReferralPointsPage = /*#__PURE__*/function () {
        function ReferralPointsPage() {
          _classCallCheck(this, ReferralPointsPage);
        }

        _createClass(ReferralPointsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReferralPointsPage;
      }();

      ReferralPointsPage.ctorParameters = function () {
        return [];
      };

      ReferralPointsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-referral-points',
        template: _raw_loader_referral_points_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_referral_points_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ReferralPointsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=referral-points-referral-points-module-es5.js.map