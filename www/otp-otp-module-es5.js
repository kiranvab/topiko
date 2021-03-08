(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp-otp-module"], {
    /***/
    "HLTW":
    /*!*************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otp/otp.page.html ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function HLTW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-back-button></ion-back-button>\n  <!-- <div class=\"curve\"></div>\n  <div class=\"curve1\"></div>\n  <div class=\"curve2\"></div> -->\n  <div class=\"back-img\">\n    <img src=\"assets/back.png\" >\n  </div>\n  \n  <div class=\"logo\">\n    <img src=\"assets/logo.png\"/>\n  </div>\n\n  <div class=\"login-block\">\n    <h3>OTP</h3>\n    <ion-item>\n      <table width=\"100%\">\n        <tr>\n          <td>\n            <ion-input type=\"text\" #otp1 class=\"otp\" pattern=\"[0-9]{6}\" maxlength=\"1\" size=\"1\">\n            </ion-input>\n          </td>\n          <td>\n            <ion-input type=\"text\" #otp2 class=\"otp\" pattern=\"[0-9]{6}\" maxlength=\"1\" size=\"1\">\n            </ion-input>\n          </td>\n          <td>\n            <ion-input type=\"text\" #otp3 class=\"otp\" pattern=\"[0-9]{6}\" maxlength=\"1\" size=\"1\" >\n            </ion-input>\n          </td>\n          <td>\n            <ion-input type=\"text\" #otp4 class=\"otp\" pattern=\"[0-9]{6}\" maxlength=\"1\" size=\"1\">\n            </ion-input>\n          </td>\n        </tr>\n      </table>\n    </ion-item>\n    <p class=\"resend\">Resend OTP</p>\n    <ion-button expand=\"block\" color=\"danger\">Validate Mobile No</ion-button>\n  </div>\n\n  <div class=\"footer-img\">\n    <img src=\"assets/footer-img.png\" />\n  </div>\n\n   \n</ion-content>";
      /***/
    },

    /***/
    "L5nD":
    /*!*******************************************!*\
      !*** ./src/app/otp/otp-routing.module.ts ***!
      \*******************************************/

    /*! exports provided: OtpPageRoutingModule */

    /***/
    function L5nD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPageRoutingModule", function () {
        return OtpPageRoutingModule;
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


      var _otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./otp.page */
      "so1i");

      var routes = [{
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_3__["OtpPage"]
      }];

      var OtpPageRoutingModule = function OtpPageRoutingModule() {
        _classCallCheck(this, OtpPageRoutingModule);
      };

      OtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OtpPageRoutingModule);
      /***/
    },

    /***/
    "NLUG":
    /*!***********************************!*\
      !*** ./src/app/otp/otp.page.scss ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function NLUG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #5e1c57;\n  font-family: Comfortaa;\n}\n\n.curve {\n  display: block;\n  width: 150%;\n  height: 180px;\n  background-color: #813f7a;\n  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;\n  position: absolute;\n  top: 21%;\n  margin: -20% 0 0 -20%;\n  transform: rotate(-6deg);\n  z-index: -1;\n}\n\n.curve1 {\n  display: block;\n  width: 150%;\n  height: 180px;\n  background-color: #672560;\n  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;\n  position: absolute;\n  top: 15%;\n  margin: -20% 0 0 -20%;\n  transform: rotate(-25deg);\n  z-index: -1;\n}\n\n.curve2 {\n  display: block;\n  width: 135%;\n  height: 180px;\n  background-color: #5e1c57;\n  border-radius: 50%;\n  position: absolute;\n  top: 14%;\n  margin: -20% 0 0 -20%;\n  transform: rotate(-16deg);\n  z-index: -1;\n}\n\n.logo {\n  margin: 0 auto;\n  top: 8%;\n  position: absolute;\n  text-align: center;\n}\n\n.logo img {\n  width: 30%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.login-block {\n  position: relative;\n  top: 45%;\n  left: 6%;\n  margin-right: 15% !important;\n  color: #fff;\n}\n\n.signup-content {\n  padding: 1.5rem;\n}\n\n.login-btn {\n  color: purple;\n  text-align: right;\n  float: right;\n  padding-top: 10px;\n  font-size: 60px;\n  position: absolute;\n  right: 0.2em;\n}\n\n.login-text {\n  font-size: 1.5rem;\n}\n\n.footer-img {\n  position: absolute;\n  bottom: -5px;\n  z-index: -1;\n}\n\nion-input {\n  border-bottom: 1px solid #fff;\n  color: #fff;\n  margin-top: 10px;\n}\n\nion-item {\n  --inner-border-width:0;\n  --background:transparent;\n}\n\n.back-img {\n  position: absolute;\n  top: 20%;\n}\n\n.otp {\n  color: #fff;\n  border-style: none;\n  width: 60px;\n  height: 60px;\n  font-size: 32px;\n  text-align: center;\n}\n\ntd {\n  border: 1px solid #813f7a;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\n.forgot-text {\n  padding-top: 0.8em;\n  color: purple;\n}\n\n.resend {\n  text-align: right;\n  font-size: 12px;\n  padding-right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFFRSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHQTtFQUVFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHQTtFQUVFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUFERjs7QUFHQTtFQUVFLGVBQUE7QUFERjs7QUFHQTtFQUVFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFHQTtFQUVFLGlCQUFBO0FBREY7O0FBSUE7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRkY7O0FBSUE7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtBQURGOztBQUdBO0VBRUUsa0JBQUE7RUFDQSxRQUFBO0FBREY7O0FBR0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUlFO0VBQ0UseUJBQUE7QUFESjs7QUFJRTtFQUNFLHlCQUFBO0FBREo7O0FBR0U7RUFFRSxrQkFBQTtFQUNBLGFBQUE7QUFESjs7QUFHQTtFQUVFLGlCQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBREoiLCJmaWxlIjoib3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNWUxYzU3O1xyXG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbn1cclxuXHJcbi5jdXJ2ZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDE1MCU7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzZjdhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDUwJS82MCUgNjAlIDQwJSA0MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjElO1xyXG4gIG1hcmdpbjogLTIwJSAwIDAgLTIwJTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZyk7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5jdXJ2ZTEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxNTAlO1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNjcyNTYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDUwJS82MCUgNjAlIDQwJSA0MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTUlO1xyXG4gIG1hcmdpbjogLTIwJSAwIDAgLTIwJTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjVkZWcpO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uY3VydmUyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTM1JTtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZTFjNTc7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE0JTtcclxuICBtYXJnaW46IC0yMCUgMCAwIC0yMCU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE2ZGVnKTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmxvZ28gXHJcbntcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0b3A6OCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9nbyBpbWdcclxue1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dpbi1ibG9ja1xyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNDUlO1xyXG4gIGxlZnQ6IDYlO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNpZ251cC1jb250ZW50XHJcbntcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbn1cclxuLmxvZ2luLWJ0blxyXG57XHJcbiAgY29sb3I6IHB1cnBsZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHJpZ2h0OjAuMmVtO1xyXG59XHJcbi5sb2dpbi10ZXh0XHJcbntcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmZvb3Rlci1pbWdcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC01cHg7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuaW9uLWlucHV0e1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOjA7ICBcclxuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuLmJhY2staW1nXHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMCU7XHJcbn1cclxuLm90cCB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIH1cclxuICBcclxuICB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODEzZjdhO1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIH1cclxuICAuZm9yZ290LXRleHRcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDAuOGVtO1xyXG4gICAgY29sb3I6ICBwdXJwbGU7XHJcbn1cclxuLnJlc2VuZFxyXG57XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "ikiF":
    /*!***********************************!*\
      !*** ./src/app/otp/otp.module.ts ***!
      \***********************************/

    /*! exports provided: OtpPageModule */

    /***/
    function ikiF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPageModule", function () {
        return OtpPageModule;
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


      var _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./otp-routing.module */
      "L5nD");
      /* harmony import */


      var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./otp.page */
      "so1i");

      var OtpPageModule = function OtpPageModule() {
        _classCallCheck(this, OtpPageModule);
      };

      OtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpPageRoutingModule"]],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
      })], OtpPageModule);
      /***/
    },

    /***/
    "so1i":
    /*!*********************************!*\
      !*** ./src/app/otp/otp.page.ts ***!
      \*********************************/

    /*! exports provided: OtpPage */

    /***/
    function so1i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPage", function () {
        return OtpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./otp.page.html */
      "HLTW");
      /* harmony import */


      var _otp_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./otp.page.scss */
      "NLUG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OtpPage = /*#__PURE__*/function () {
        function OtpPage() {
          _classCallCheck(this, OtpPage);
        }

        _createClass(OtpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OtpPage;
      }();

      OtpPage.ctorParameters = function () {
        return [];
      };

      OtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-otp',
        template: _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_otp_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OtpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=otp-otp-module-es5.js.map