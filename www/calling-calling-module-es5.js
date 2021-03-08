(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calling-calling-module"], {
    /***/
    "RcxW":
    /*!*******************************************!*\
      !*** ./src/app/calling/calling.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function RcxW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".background {\n  --background: -webkit-radial-gradient(top left, #BE09F8, #700D58) !important;\n}\n\nion-row {\n  text-align: center;\n  margin: 0 auto;\n}\n\n.accept {\n  background: green;\n  padding: 20px;\n  color: #fff;\n  font-size: 24px;\n  border-radius: 50%;\n  box-shadow: 4px 4px 10px #6f6d6d;\n}\n\n.decline {\n  background: red;\n  padding: 20px;\n  color: #fff;\n  font-size: 24px;\n  border-radius: 50%;\n  box-shadow: 4px 4px 10px #6f6d6d;\n  transform: rotate(135deg);\n}\n\n.message {\n  background: #fafafa;\n  padding: 20px;\n  color: #040404;\n  font-size: 24px;\n  border-radius: 50%;\n  box-shadow: 4px 4px 10px #6f6d6d;\n}\n\n.btns-block {\n  position: absolute;\n  bottom: 7%;\n  width: 100%;\n}\n\n.user-block {\n  position: absolute;\n  top: 10%;\n  width: 100%;\n  color: #fff;\n  font-size: 32px;\n}\n\n.user-block img {\n  text-align: center;\n  display: block;\n  width: 100%;\n  position: absolute;\n  padding: 10% 25%;\n  font-size: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhbGxpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsNEVBQUE7QUFBQTs7QUFFQTtFQUVJLGtCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUVBO0VBRUksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBQUo7O0FBR0E7RUFFSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUE7RUFFSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFGSjs7QUFLQTtFQUVJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFISjs7QUFNQTtFQUVJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU9BO0VBRUksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBTEoiLCJmaWxlIjoiY2FsbGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZFxyXG57XHJcbi0tYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQodG9wIGxlZnQsICNCRTA5RjgsICM3MDBENTgpICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLXJvdyBcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmFjY2VwdFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAjNmY2ZDZkO1xyXG59XHJcblxyXG4uZGVjbGluZSBcclxue1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4ICM2ZjZkNmQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG59XHJcblxyXG4ubWVzc2FnZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGNvbG9yOiAjMDQwNDA0O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4ICM2ZjZkNmQ7XHJcbn1cclxuXHJcbi5idG5zLWJsb2NrXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNyU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnVzZXItYmxvY2tcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4udXNlci1ibG9jayBpbWcgXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOiAxMCUgMjUlO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgXHJcbn0iXX0= */";
      /***/
    },

    /***/
    "WliF":
    /*!*******************************************!*\
      !*** ./src/app/calling/calling.module.ts ***!
      \*******************************************/

    /*! exports provided: CallingPageModule */

    /***/
    function WliF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallingPageModule", function () {
        return CallingPageModule;
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


      var _calling_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./calling-routing.module */
      "jpXZ");
      /* harmony import */


      var _calling_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./calling.page */
      "xuQo");

      var CallingPageModule = function CallingPageModule() {
        _classCallCheck(this, CallingPageModule);
      };

      CallingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _calling_routing_module__WEBPACK_IMPORTED_MODULE_5__["CallingPageRoutingModule"]],
        declarations: [_calling_page__WEBPACK_IMPORTED_MODULE_6__["CallingPage"]]
      })], CallingPageModule);
      /***/
    },

    /***/
    "jpXZ":
    /*!***************************************************!*\
      !*** ./src/app/calling/calling-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: CallingPageRoutingModule */

    /***/
    function jpXZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallingPageRoutingModule", function () {
        return CallingPageRoutingModule;
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


      var _calling_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./calling.page */
      "xuQo");

      var routes = [{
        path: '',
        component: _calling_page__WEBPACK_IMPORTED_MODULE_3__["CallingPage"]
      }];

      var CallingPageRoutingModule = function CallingPageRoutingModule() {
        _classCallCheck(this, CallingPageRoutingModule);
      };

      CallingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CallingPageRoutingModule);
      /***/
    },

    /***/
    "xuQo":
    /*!*****************************************!*\
      !*** ./src/app/calling/calling.page.ts ***!
      \*****************************************/

    /*! exports provided: CallingPage */

    /***/
    function xuQo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallingPage", function () {
        return CallingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_calling_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./calling.page.html */
      "zk8F");
      /* harmony import */


      var _calling_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./calling.page.scss */
      "RcxW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CallingPage = /*#__PURE__*/function () {
        function CallingPage() {
          _classCallCheck(this, CallingPage);
        }

        _createClass(CallingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CallingPage;
      }();

      CallingPage.ctorParameters = function () {
        return [];
      };

      CallingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-calling',
        template: _raw_loader_calling_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calling_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CallingPage);
      /***/
    },

    /***/
    "zk8F":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calling/calling.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function zk8F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content class=\"background\">\n\n  <ion-row class=\"user-block\">\n    <img src=\"https://upload.wikimedia.org/wikipedia/commons/9/96/Logo-warga-200x200.png\">\n    <ion-col>WOW Baker's</ion-col>\n  </ion-row>\n\n  <ion-row class=\"btns-block\">\n    <ion-col><ion-icon class=\"accept\" name=\"call-outline\"></ion-icon></ion-col>\n    <ion-col><ion-icon class=\"decline\" name=\"call-outline\"></ion-icon></ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=calling-calling-module-es5.js.map