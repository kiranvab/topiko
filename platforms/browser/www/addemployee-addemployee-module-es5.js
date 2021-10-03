(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addemployee-addemployee-module"], {
    /***/
    "DzsA": function DzsA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Empployees</ion-title>\n    <ion-buttons slot=\"end\" class=\"create-icon\" routerLink=\"/editdvdetails\">\n     <ion-icon name=\"checkmark-outline\" style=\"color: #fff;\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"bcard-head\">\n<div><img src=\"assets/profile.svg\"></div>\n\n</div>\n\n<div class=\"bcard-body\">\n  <p class=\"title\">Employee Name</p>\n  <p class=\"text\">\n    <ion-input placeholder=\"Employee Name\"></ion-input>\n  </p>\n\n  <p class=\"title\">Employee Number</p>\n  <p class=\"text\">\n    <ion-input placeholder=\"Employee Number\"></ion-input>\n  </p>\n\n \n    <ion-label class=\"title\">Designation</ion-label>\n    <ion-select placeholder=\"Select One\">\n      <ion-select-option value=\"f\">Female</ion-select-option>\n      <ion-select-option value=\"m\">Male</ion-select-option>\n    </ion-select>\n  \n    <br>\n\n\n  <p class=\"title\">Role Tags</p>\n  <p class=\"text\">\n    <textarea placeholder=\"Role Tags\"></textarea>\n  </p>\n\n  <p class=\"title\">Language Support</p>\n  <p class=\"text\">\n    <textarea placeholder=\"Language Support\"></textarea>\n  </p>\n\n  <p class=\"title\">Pilot Suport</p>\n  <p class=\"checkbox\">\n    <input type=\"checkbox\"> Chat\n    <input type=\"checkbox\"> Video\n    <input type=\"checkbox\"> Call\n    <input type=\"checkbox\"> Delivery\n  </p>\n\n  <ion-row>\n    <ion-col>Gps Tracking</ion-col>\n    <ion-col size=\"2\"><ion-toggle style=\"height: 25px;\" color=\"success\"></ion-toggle></ion-col>\n  </ion-row>\n\n  <p class=\"title\">Working Hour Setting</p>\n\n  <ion-select placeholder=\"Select One\">\n    <ion-select-option value=\"f\">Female</ion-select-option>\n    <ion-select-option value=\"m\">Male</ion-select-option>\n  </ion-select>\n\n  <br>\n  <div class=\"text-center\" class=\"pb-15\">\n    <ion-checkbox color=\"success\" checked></ion-checkbox> I Agree for the <span>Terms and Conditions</span>\n  </div>\n  <br>\n\n  <ion-row>\n    <ion-col>\n      <ion-button expand=\"block\" class=\"purple-btn\" color=\"custom\" routerLink=\"/myvcard\">Submit</ion-button>\n    </ion-col>\n  </ion-row>\n</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "OuNx": function OuNx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddemployeePageRoutingModule", function () {
        return AddemployeePageRoutingModule;
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


      var _addemployee_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./addemployee.page */
      "ulNK");

      var routes = [{
        path: '',
        component: _addemployee_page__WEBPACK_IMPORTED_MODULE_3__["AddemployeePage"]
      }];

      var AddemployeePageRoutingModule = function AddemployeePageRoutingModule() {
        _classCallCheck(this, AddemployeePageRoutingModule);
      };

      AddemployeePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddemployeePageRoutingModule);
      /***/
    },

    /***/
    "uWTs": function uWTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddemployeePageModule", function () {
        return AddemployeePageModule;
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


      var _addemployee_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./addemployee-routing.module */
      "OuNx");
      /* harmony import */


      var _addemployee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./addemployee.page */
      "ulNK");

      var AddemployeePageModule = function AddemployeePageModule() {
        _classCallCheck(this, AddemployeePageModule);
      };

      AddemployeePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addemployee_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddemployeePageRoutingModule"]],
        declarations: [_addemployee_page__WEBPACK_IMPORTED_MODULE_6__["AddemployeePage"]]
      })], AddemployeePageModule);
      /***/
    },

    /***/
    "ulNK": function ulNK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddemployeePage", function () {
        return AddemployeePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_addemployee_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./addemployee.page.html */
      "DzsA");
      /* harmony import */


      var _addemployee_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./addemployee.page.scss */
      "wVHQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddemployeePage = /*#__PURE__*/function () {
        function AddemployeePage() {
          _classCallCheck(this, AddemployeePage);
        }

        _createClass(AddemployeePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddemployeePage;
      }();

      AddemployeePage.ctorParameters = function () {
        return [];
      };

      AddemployeePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addemployee',
        template: _raw_loader_addemployee_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addemployee_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddemployeePage);
      /***/
    },

    /***/
    "wVHQ": function wVHQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 10px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n  --ion-background-color:#f2f2f2;\n}\n\n.create-icon {\n  font-size: 32px;\n  color: #fff;\n  font-weight: bold;\n  margin-right: 3%;\n}\n\n.bcard-head {\n  background: linear-gradient(#871178, #44093C);\n  text-align: center;\n  color: #fff;\n  font-size: 22px;\n  padding: 0;\n  height: 25%;\n}\n\n.bcard-body {\n  background-color: #fff;\n  padding: 5%;\n  padding-top: 20%;\n}\n\n.title {\n  font-size: 18px;\n  color: #871178;\n  line-height: 0;\n}\n\n.text {\n  font-size: 16px;\n  color: #22272A;\n  padding-bottom: 24px;\n}\n\n.title-name {\n  font-size: 18px;\n  color: #871178;\n  line-height: 0;\n  text-align: center;\n  font-size: 24px;\n}\n\n.text-desc {\n  font-size: 14px;\n  color: #707070;\n  text-align: center;\n  line-height: 5px;\n}\n\nion-icon {\n  font-size: 32px;\n  color: #9F9F9F;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.view-more {\n  text-align: center;\n  color: #871178;\n  text-decoration: underline;\n  font-size: 16px;\n  padding-bottom: 10%;\n}\n\nspan {\n  text-decoration: underline;\n  color: #871178;\n}\n\nh3 {\n  color: #22272A;\n}\n\nion-input,\nion-select {\n  border-bottom: 1px solid #ccc;\n}\n\ntextarea {\n  width: 100%;\n  min-height: 150px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n}\n\n.checkbox {\n  font-size: 20px;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n  width: 15px;\n  height: 15px;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZGVtcGxveWVlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFRTtFQUVFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVFO0VBRUUsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUVFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUU7RUFFRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFGSjs7QUFJRTtFQUVFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFGSjs7QUFLRTtFQUVFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUhKOztBQUtFO0VBRUUsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUU7RUFFRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU9FO0VBRUksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0YsbUJBQUE7QUFMSjs7QUFRRTtFQUVJLDBCQUFBO0VBQ0EsY0FBQTtBQU5OOztBQVFFO0VBRUksY0FBQTtBQU5OOztBQVNFOztFQUdFLDZCQUFBO0FBUEo7O0FBU0U7RUFFRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBUEo7O0FBU0U7RUFFSSxlQUFBO0FBUE47O0FBVUU7O0VBRUEsVUFBQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVBKIiwiZmlsZSI6ImFkZGVtcGxveWVlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2YyZjJmMjtcclxuICB9XHJcblxyXG4gIC5jcmVhdGUtaWNvblxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gIH1cclxuICAuYmNhcmQtaGVhZFxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjNDQwOTNDKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmJjYXJkLWJvZHlcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzo1JTtcclxuICAgIHBhZGRpbmctdG9wOjIwJTtcclxuICB9XHJcblxyXG4gIC50aXRsZVxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIC50ZXh0XHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMyMjI3MkE7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDs7XHJcbiAgfVxyXG5cclxuICAudGl0bGUtbmFtZVxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG4gIC50ZXh0LWRlc2NcclxuICB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1cHg7XHJcbiAgfVxyXG5cclxuICBpb24taWNvblxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjOUY5RjlGO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAudmlldy1tb3JlXHJcbiAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICB9XHJcblxyXG4gIHNwYW5cclxuICB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICBjb2xvcjogIzg3MTE3ODtcclxuICB9XHJcbiAgaDNcclxuICB7XHJcbiAgICAgIGNvbG9yOiAjMjIyNzJBO1xyXG4gIH1cclxuXHJcbiAgaW9uLWlucHV0LFxyXG4gIGlvbi1zZWxlY3RcclxuICB7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjXHJcbiAgfVxyXG4gIHRleHRhcmVhXHJcbiAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG4gIC5jaGVja2JveFxyXG4gIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0sIFxyXG4gIGlucHV0W3R5cGU9cmFkaW9de1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=addemployee-addemployee-module-es5.js.map