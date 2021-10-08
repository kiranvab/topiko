(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dial-dial-module"], {
    /***/
    "3rUi": function rUi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialPageModule", function () {
        return DialPageModule;
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


      var _dial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dial-routing.module */
      "F+QR");
      /* harmony import */


      var _dial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dial.page */
      "pRAw");

      var DialPageModule = function DialPageModule() {
        _classCallCheck(this, DialPageModule);
      };

      DialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dial_routing_module__WEBPACK_IMPORTED_MODULE_5__["DialPageRoutingModule"]],
        declarations: [_dial_page__WEBPACK_IMPORTED_MODULE_6__["DialPage"]]
      })], DialPageModule);
      /***/
    },

    /***/
    "C/5J": function C5J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-avatar>\n    <img class=\"pic\" src=\"https://img.wallpapersafari.com/desktop/1366/768/47/36/mb9WVN.jpg\">\n  </ion-avatar>\n\n  <p>Calling</p>\n  <p>Murali</p>\n  <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-icon class=\"icon\" name=\"mic-off\"></ion-icon>\n          <p>Mute</p>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon class=\"icon\" name=\"keypad\"></ion-icon>\n          <p>Keypad</p>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon class=\"icon\" name=\"bluetooth\"></ion-icon>\n          <p>Bluetooth</p>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon class=\"icon\" name=\"pause\"></ion-icon>\n          <p>Hold</p>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon class=\"icon\" name=\"disc\"></ion-icon>\n          <p>Record</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-icon class=\"end\" name=\"call\"></ion-icon>\n</ion-content>";
      /***/
    },

    /***/
    "F+QR": function FQR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialPageRoutingModule", function () {
        return DialPageRoutingModule;
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


      var _dial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dial.page */
      "pRAw");

      var routes = [{
        path: '',
        component: _dial_page__WEBPACK_IMPORTED_MODULE_3__["DialPage"]
      }];

      var DialPageRoutingModule = function DialPageRoutingModule() {
        _classCallCheck(this, DialPageRoutingModule);
      };

      DialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DialPageRoutingModule);
      /***/
    },

    /***/
    "pRAw": function pRAw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialPage", function () {
        return DialPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dial_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dial.page.html */
      "C/5J");
      /* harmony import */


      var _dial_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dial.page.scss */
      "t9kC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DialPage = /*#__PURE__*/function () {
        function DialPage() {
          _classCallCheck(this, DialPage);
        }

        _createClass(DialPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DialPage;
      }();

      DialPage.ctorParameters = function () {
        return [];
      };

      DialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dial',
        template: _raw_loader_dial_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dial_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DialPage);
      /***/
    },

    /***/
    "t9kC": function t9kC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: linear-gradient(#871178, #3c1378) !important;\n  color: #ffffff;\n}\n\nion-avatar {\n  width: 180px;\n  height: 180px;\n  margin-top: 49px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-icon {\n  font-size: 25px;\n  color: #ffffff;\n  border-radius: 50%;\n  border: 2px solid white;\n  padding: 15px;\n  opacity: 65%;\n}\n\np {\n  margin: 2px;\n  opacity: 65%;\n  font-size: 24px;\n  text-align: center;\n  color: #fff;\n}\n\nion-col {\n  text-align: center;\n}\n\n.end {\n  margin-top: 36px;\n  margin-left: 155px;\n  background-color: #e02042;\n  font-size: 28px;\n  color: #ffffff;\n  border-radius: 50%;\n  border: transparent;\n  padding: 20px;\n  opacity: 100%;\n  transform: rotate(135deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRpYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMERBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFHSjs7QUFEQTtFQUVJLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBSUoiLCJmaWxlIjoiZGlhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIG1hcmdpbi10b3A6IDQ5cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbmlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgb3BhY2l0eTogNjUlO1xyXG59XHJcbnAge1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBvcGFjaXR5OiA2NSU7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5pb24tY29sXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZW5kIHtcclxuICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTU1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTAyMDQyO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG59XHJcbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=dial-dial-module-es5.js.map