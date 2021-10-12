(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plans-plans-module"], {
    /***/
    "3Qlb": function Qlb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlansPage", function () {
        return PlansPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_plans_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./plans.page.html */
      "xE/N");
      /* harmony import */


      var _plans_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./plans.page.scss */
      "DZ2P");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PlansPage = /*#__PURE__*/function () {
        function PlansPage() {
          _classCallCheck(this, PlansPage);

          this.segmentModel = "star";
        }

        _createClass(PlansPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PlansPage;
      }();

      PlansPage.ctorParameters = function () {
        return [];
      };

      PlansPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-plans',
        template: _raw_loader_plans_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_plans_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PlansPage);
      /***/
    },

    /***/
    "CaEi": function CaEi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlansPageModule", function () {
        return PlansPageModule;
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


      var _plans_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./plans-routing.module */
      "plIv");
      /* harmony import */


      var _plans_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./plans.page */
      "3Qlb");

      var PlansPageModule = function PlansPageModule() {
        _classCallCheck(this, PlansPageModule);
      };

      PlansPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _plans_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlansPageRoutingModule"]],
        declarations: [_plans_page__WEBPACK_IMPORTED_MODULE_6__["PlansPage"]]
      })], PlansPageModule);
      /***/
    },

    /***/
    "DZ2P": function DZ2P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: center;\n}\n\nion-segment {\n  background: #ffffff;\n  color: #22272a;\n  font-size: 1em;\n}\n\nion-segment ion-icon {\n  color: #871178;\n  height: 1.5625em;\n  width: 1.5625em;\n}\n\nion-segment ion-label {\n  text-transform: capitalize;\n}\n\nh6 {\n  text-align: right;\n  text-decoration: underline;\n  margin-right: 0.625em;\n  font-size: 1em;\n  color: #871178;\n}\n\nion-content {\n  --padding-bottom: 80px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n}\n\nion-card {\n  margin: 0.75em 0px;\n  padding: 7px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.avatar ion-avatar {\n  width: 75px;\n  height: 75px;\n}\n\n.border {\n  border: 0.2px solid #707070;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.user-name ion-icon {\n  color: #39ac00;\n}\n\n.star {\n  margin-top: 5px;\n}\n\n.star ion-icon {\n  color: #fcb900;\n}\n\n.star span p {\n  font-size: 0.5em;\n  padding-left: 5px;\n  color: #22272a;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 0px;\n}\n\np {\n  margin: 0%;\n  line-height: 18px;\n}\n\n.claim {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.claim ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  width: 3.9375em;\n  height: 1.625em;\n  --border-radius: 16px;\n}\n\n.claim ion-icon {\n  color: #707070;\n  width: 2.0625em;\n  height: 1.625em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBsYW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksMEJBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUZBO0VBQ0ksMkJBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtBQVNKOztBQVBBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVdKOztBQVRBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBWUo7O0FBVEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVlKOztBQVZBO0VBQ0ksK0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQWFKOztBQVhBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBY0oiLCJmaWxlIjoicGxhbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaGVhZFxyXG5pb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tc2VnbWVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5pb24tc2VnbWVudCBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGhlaWdodDogMS41NjI1ZW07XHJcbiAgICB3aWR0aDogMS41NjI1ZW07XHJcbn1cclxuaW9uLXNlZ21lbnQgaW9uLWxhYmVsIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG5oNiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjYyNWVtO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMThweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE4cHg7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiAwLjc1ZW0gMHB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG59XHJcbi5hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogNzVweDtcclxufVxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMC4ycHggc29saWQgIzcwNzA3MDtcclxufVxyXG4udXNlci1uYW1lIHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnVzZXItbmFtZSBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzM5YWMwMDtcclxufVxyXG4uc3RhciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnN0YXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmY2I5MDA7XHJcbn1cclxuLnN0YXIgc3BhbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG59XHJcbi50aW1lIHtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxucCB7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5jbGFpbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jbGFpbSBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgd2lkdGg6IDMuOTM3NWVtO1xyXG4gICAgaGVpZ2h0OiAxLjYyNWVtO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcbi5jbGFpbSBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIHdpZHRoOiAyLjA2MjVlbTtcclxuICAgIGhlaWdodDogMS42MjVlbTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "plIv": function plIv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlansPageRoutingModule", function () {
        return PlansPageRoutingModule;
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


      var _plans_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./plans.page */
      "3Qlb");

      var routes = [{
        path: '',
        component: _plans_page__WEBPACK_IMPORTED_MODULE_3__["PlansPage"]
      }];

      var PlansPageRoutingModule = function PlansPageRoutingModule() {
        _classCallCheck(this, PlansPageRoutingModule);
      };

      PlansPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PlansPageRoutingModule);
      /***/
    },

    /***/
    "xE/N": function xEN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" text=\"\" icon=\"chevron-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Wallet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h2 style=\"text-align: center;\">Plans</h2>\n\n  <h2 style=\"text-align: center; color:#871178\">6 Months Free Trail</h2>\n\n  <h4>Duration Left</h4>\n  <ion-card style=\"font-size: 18px;\">\n    <ion-row style=\"text-align: center; color:#871178;\">\n      <ion-col>Days</ion-col>\n      <ion-col>Hrs</ion-col>\n      <ion-col>Min</ion-col>\n      <ion-col>Sec</ion-col>\n    </ion-row>\n    <ion-row style=\"text-align: center;\">\n      <ion-col>102</ion-col>\n      <ion-col>24</ion-col>\n      <ion-col>12</ion-col>\n      <ion-col>36</ion-col>\n    </ion-row>\n  </ion-card>\n\n  <h4>Plan Details</h4>\n\n  <ion-card>\n    <ion-row style=\"color: #871178; font-size: 20px;\">\n      <ion-col size=\"8\">Six Month</ion-col>\n      <ion-col style=\"text-align: right;\">6999/-</ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-row style=\"color: #871178; font-size: 20px;\">\n      <ion-col size=\"8\">Yearly <span style=\"font-size: 12px; color: #ccc;\">(11 Months)</span></ion-col>\n      <ion-col style=\"text-align: right;\">11,999/-</ion-col>\n    </ion-row>\n  </ion-card>\n\n\n  \n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=plans-plans-module-es5.js.map