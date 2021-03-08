(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selection-selection-module"], {
    /***/
    "Dnci":
    /*!***********************************************!*\
      !*** ./src/app/selection/selection.module.ts ***!
      \***********************************************/

    /*! exports provided: SelectionPageModule */

    /***/
    function Dnci(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectionPageModule", function () {
        return SelectionPageModule;
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


      var _selection_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./selection-routing.module */
      "TNz/");
      /* harmony import */


      var _selection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./selection.page */
      "g29y");

      var SelectionPageModule = function SelectionPageModule() {
        _classCallCheck(this, SelectionPageModule);
      };

      SelectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _selection_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectionPageRoutingModule"]],
        declarations: [_selection_page__WEBPACK_IMPORTED_MODULE_6__["SelectionPage"]]
      })], SelectionPageModule);
      /***/
    },

    /***/
    "TNz/":
    /*!*******************************************************!*\
      !*** ./src/app/selection/selection-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: SelectionPageRoutingModule */

    /***/
    function TNz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectionPageRoutingModule", function () {
        return SelectionPageRoutingModule;
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


      var _selection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./selection.page */
      "g29y");

      var routes = [{
        path: '',
        component: _selection_page__WEBPACK_IMPORTED_MODULE_3__["SelectionPage"]
      }];

      var SelectionPageRoutingModule = function SelectionPageRoutingModule() {
        _classCallCheck(this, SelectionPageRoutingModule);
      };

      SelectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SelectionPageRoutingModule);
      /***/
    },

    /***/
    "g29y":
    /*!*********************************************!*\
      !*** ./src/app/selection/selection.page.ts ***!
      \*********************************************/

    /*! exports provided: SelectionPage */

    /***/
    function g29y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectionPage", function () {
        return SelectionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_selection_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./selection.page.html */
      "hRX3");
      /* harmony import */


      var _selection_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./selection.page.scss */
      "r0X9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SelectionPage = /*#__PURE__*/function () {
        function SelectionPage() {
          _classCallCheck(this, SelectionPage);
        }

        _createClass(SelectionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SelectionPage;
      }();

      SelectionPage.ctorParameters = function () {
        return [];
      };

      SelectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-selection',
        template: _raw_loader_selection_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_selection_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SelectionPage);
      /***/
    },

    /***/
    "hRX3":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selection/selection.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function hRX3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"back-img\">\n    <img src=\"assets/back.png\">\n  </div>\n  \n  <div class=\"logo\">\n    <img src=\"assets/logo.png\"/>\n  </div>\n\n  <div class=\"selection-block\">\n    <ion-item>\n      <ion-label>Language</ion-label>\n      <ion-select placeholder=\"Select language\">\n        <ion-select-option value=\"english\">English</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <br>\n    <ion-button expand=\"block\" color=\"danger\" routerLink=\"/selectcategory\">Next</ion-button>\n  </div>\n  \n\n  <div class=\"footer-img\">\n    <img src=\"assets/footer-img.png\" />\n  </div>\n\n</ion-content>\n\n  ";
      /***/
    },

    /***/
    "r0X9":
    /*!***********************************************!*\
      !*** ./src/app/selection/selection.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function r0X9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #5e1c57;\n  font-family: Comfortaa;\n}\n\n.curve {\n  display: block;\n  width: 150%;\n  height: 180px;\n  background-color: #813f7a;\n  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;\n  position: absolute;\n  top: 21%;\n  margin: -20% 0 0 -20%;\n  transform: rotate(-6deg);\n  z-index: -1;\n}\n\n.curve1 {\n  display: block;\n  width: 150%;\n  height: 180px;\n  background-color: #672560;\n  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;\n  position: absolute;\n  top: 15%;\n  margin: -20% 0 0 -20%;\n  transform: rotate(-25deg);\n  z-index: -1;\n}\n\n.curve2 {\n  display: block;\n  width: 135%;\n  height: 180px;\n  background-color: #5e1c57;\n  border-radius: 50%;\n  position: absolute;\n  top: 14%;\n  margin: -20% 0 0 -20%;\n  transform: rotate(-16deg);\n  z-index: -1;\n}\n\n.logo {\n  margin: 0 auto;\n  top: 8%;\n  position: absolute;\n  text-align: center;\n}\n\n.logo img {\n  width: 30%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.selection-block {\n  position: relative;\n  top: 45%;\n  left: 5%;\n  margin-right: 15% !important;\n  color: #fff;\n}\n\n.signup-content {\n  padding: 1.5rem;\n}\n\n.login-btn {\n  color: purple;\n  text-align: right;\n  float: right;\n  padding-top: 10px;\n  font-size: 60px;\n  position: absolute;\n  right: 0.2em;\n}\n\n.login-text {\n  font-size: 1.5rem;\n}\n\n.footer-img {\n  position: absolute;\n  bottom: -5px;\n  z-index: -1;\n}\n\nion-input {\n  border-bottom: 1px solid #fff;\n  color: #fff;\n  margin-top: 10px;\n}\n\nion-item {\n  --inner-border-width:0;\n  --background:transparent;\n}\n\n.back-img {\n  position: absolute;\n  top: 20%;\n}\n\n.item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h,\n.item.sc-ion-label-md-h, .item .sc-ion-label-md-h,\n.select-icon,\n.select-text,\nion-select {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlbGVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFFRSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHQTtFQUVFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHQTtFQUVFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUFERjs7QUFHQTtFQUVFLGVBQUE7QUFERjs7QUFHQTtFQUVFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFHQTtFQUVFLGlCQUFBO0FBREY7O0FBSUE7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRkY7O0FBSUE7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtBQURGOztBQUdBO0VBRUUsa0JBQUE7RUFDQSxRQUFBO0FBREY7O0FBR0E7Ozs7O0VBTUUsV0FBQTtBQURGIiwiZmlsZSI6InNlbGVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogIzVlMWM1NztcclxuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG59XHJcblxyXG4uY3VydmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxNTAlO1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxM2Y3YTtcclxuICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSA1MCUvNjAlIDYwJSA0MCUgNDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIxJTtcclxuICBtYXJnaW46IC0yMCUgMCAwIC0yMCU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uY3VydmUxIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTUwJTtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzY3MjU2MDtcclxuICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSA1MCUvNjAlIDYwJSA0MCUgNDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1JTtcclxuICBtYXJnaW46IC0yMCUgMCAwIC0yMCU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmN1cnZlMiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEzNSU7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWUxYzU3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNCU7XHJcbiAgbWFyZ2luOiAtMjAlIDAgMCAtMjAlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNmRlZyk7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5sb2dvIFxyXG57XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdG9wOjglO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvZ28gaW1nXHJcbntcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2VsZWN0aW9uLWJsb2NrXHJcbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA0NSU7XHJcbiAgbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNSUgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uc2lnbnVwLWNvbnRlbnRcclxue1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxufVxyXG4ubG9naW4tYnRuXHJcbntcclxuICBjb2xvcjogcHVycGxlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgcmlnaHQ6MC4yZW07XHJcbn1cclxuLmxvZ2luLXRleHRcclxue1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uZm9vdGVyLWltZ1xyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTVweDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6MDsgIFxyXG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG4uYmFjay1pbWdcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwJTtcclxufVxyXG4uaXRlbS5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWgsXHJcbi5pdGVtLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbSAuc2MtaW9uLWxhYmVsLW1kLWgsXHJcbi5zZWxlY3QtaWNvbixcclxuLnNlbGVjdC10ZXh0LFxyXG5pb24tc2VsZWN0IFxyXG57XHJcbiAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=selection-selection-module-es5.js.map