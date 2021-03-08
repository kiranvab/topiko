(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
    /***/
    "6h0i":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function h0i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-back-button></ion-back-button>\n  <!-- <div class=\"curve\"></div>\n  <div class=\"curve1\"></div>\n  <div class=\"curve2\"></div> -->\n  <div class=\"back-img\">\n    <img src=\"assets/back.png\" >\n  </div>\n  \n  <div class=\"logo\">\n    <img src=\"assets/logo.png\"/>\n  </div>\n\n  <div class=\"login-block\">\n    <h3>Sign Up</h3>\n    <ion-item>\n      <ion-input placeholder=\"mobile no\"></ion-input>\n    </ion-item>\n    <br>\n    <ion-button expand=\"block\" color=\"danger\">Sign Up</ion-button>\n  </div>\n\n  <div class=\"footer-img\">\n    <img src=\"assets/footer-img.png\" />\n  </div>\n\n</ion-content>\n\n  ";
      /***/
    },

    /***/
    "RPFs":
    /*!*************************************************!*\
      !*** ./src/app/signup/signup-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SignupPageRoutingModule */

    /***/
    function RPFs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
        return SignupPageRoutingModule;
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


      var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.page */
      "yL7A");

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }];

      var SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupPageRoutingModule);
      /***/
    },

    /***/
    "T9iC":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.module.ts ***!
      \*****************************************/

    /*! exports provided: SignupPageModule */

    /***/
    function T9iC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
        return SignupPageModule;
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


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-routing.module */
      "RPFs");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup.page */
      "yL7A");

      var SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
      })], SignupPageModule);
      /***/
    },

    /***/
    "fJgH":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function fJgH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #5e1c57;\n  font-family: Comfortaa;\n}\n\n.curve {\n  display: block;\n  width: 150%;\n  height: 180px;\n  background-color: #813f7a;\n  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;\n  position: absolute;\n  top: 21%;\n  margin: -20% 0 0 -20%;\n  transform: rotate(-6deg);\n  z-index: -1;\n}\n\n.curve1 {\n  display: block;\n  width: 150%;\n  height: 180px;\n  background-color: #672560;\n  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;\n  position: absolute;\n  top: 15%;\n  margin: -20% 0 0 -20%;\n  transform: rotate(-25deg);\n  z-index: -1;\n}\n\n.curve2 {\n  display: block;\n  width: 135%;\n  height: 180px;\n  background-color: #5e1c57;\n  border-radius: 50%;\n  position: absolute;\n  top: 14%;\n  margin: -20% 0 0 -20%;\n  transform: rotate(-16deg);\n  z-index: -1;\n}\n\n.logo {\n  margin: 0 auto;\n  top: 8%;\n  position: absolute;\n  text-align: center;\n}\n\n.logo img {\n  width: 30%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.login-block {\n  position: relative;\n  top: 45%;\n  left: 5%;\n  margin-right: 15% !important;\n  color: #fff;\n}\n\n.signup-content {\n  padding: 1.5rem;\n}\n\n.login-btn {\n  color: purple;\n  text-align: right;\n  float: right;\n  padding-top: 10px;\n  font-size: 60px;\n  position: absolute;\n  right: 0.2em;\n}\n\n.login-text {\n  font-size: 1.5rem;\n}\n\n.footer-img {\n  position: absolute;\n  bottom: -5px;\n  z-index: -1;\n}\n\nion-input {\n  border-bottom: 1px solid #fff;\n  color: #fff;\n  margin-top: 10px;\n}\n\nion-item {\n  --inner-border-width:0;\n  --background:transparent;\n}\n\n.back-img {\n  position: absolute;\n  top: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFFSSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHQTtFQUVJLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHQTtFQUVJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUFESjs7QUFHQTtFQUVJLGVBQUE7QUFESjs7QUFHQTtFQUVJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFHQTtFQUVJLGlCQUFBO0FBREo7O0FBSUE7RUFFSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRko7O0FBSUE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksc0JBQUE7RUFDQSx3QkFBQTtBQURKOztBQUdBO0VBRUksa0JBQUE7RUFDQSxRQUFBO0FBREoiLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM1ZTFjNTc7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG59XHJcblxyXG4uY3VydmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzZjdhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgNTAlLzYwJSA2MCUgNDAlIDQwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjElO1xyXG4gICAgbWFyZ2luOiAtMjAlIDAgMCAtMjAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG5cclxuICAuY3VydmUxIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDE1MCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNjcyNTYwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgNTAlLzYwJSA2MCUgNDAlIDQwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTUlO1xyXG4gICAgbWFyZ2luOiAtMjAlIDAgMCAtMjAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuXHJcbiAgLmN1cnZlMiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMzUlO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZTFjNTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0JTtcclxuICAgIG1hcmdpbjogLTIwJSAwIDAgLTIwJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNmRlZyk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcblxyXG4ubG9nbyBcclxue1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0b3A6OCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvZ28gaW1nXHJcbntcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9naW4tYmxvY2tcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0NSU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uc2lnbnVwLWNvbnRlbnRcclxue1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG59XHJcbi5sb2dpbi1idG5cclxue1xyXG4gICAgY29sb3I6IHB1cnBsZTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjAuMmVtO1xyXG59XHJcbi5sb2dpbi10ZXh0XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uZm9vdGVyLWltZ1xyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC01cHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4gXHJcbmlvbi1pdGVte1xyXG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6MDsgIFxyXG4gICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gIH1cclxuLmJhY2staW1nXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAlO1xyXG59Il19 */";
      /***/
    },

    /***/
    "yL7A":
    /*!***************************************!*\
      !*** ./src/app/signup/signup.page.ts ***!
      \***************************************/

    /*! exports provided: SignupPage */

    /***/
    function yL7A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
        return SignupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./signup.page.html */
      "6h0i");
      /* harmony import */


      var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signup.page.scss */
      "fJgH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage() {
          _classCallCheck(this, SignupPage);
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [];
      };

      SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SignupPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=signup-signup-module-es5.js.map