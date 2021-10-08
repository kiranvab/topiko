(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editshowcase-editshowcase-module"], {
    /***/
    "53Bx": function Bx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditshowcasePageModule", function () {
        return EditshowcasePageModule;
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


      var _editshowcase_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./editshowcase-routing.module */
      "RTgg");
      /* harmony import */


      var _editshowcase_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./editshowcase.page */
      "kRc/");

      var EditshowcasePageModule = function EditshowcasePageModule() {
        _classCallCheck(this, EditshowcasePageModule);
      };

      EditshowcasePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editshowcase_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditshowcasePageRoutingModule"]],
        declarations: [_editshowcase_page__WEBPACK_IMPORTED_MODULE_6__["EditshowcasePage"]]
      })], EditshowcasePageModule);
      /***/
    },

    /***/
    "ROaP": function ROaP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n      <ion-menu-button mode=\"ios\"></ion-menu-button>\n          </ion-buttons>\n  <ion-title>Edit Showcase</ion-title>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"firstcard\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img\n            src=\"data:image/jpeg;base64,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\"\n            alt=\"\">\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"details\">\n      <P class=\"name\">Sun Group Water <ion-icon name=\"shield-checkmark\"></ion-icon>\n      </P>\n    </ion-row>\n    <ion-row class=\"star\">\n      <ion-icon name=\"star\"></ion-icon>\n      <ion-icon name=\"star\"></ion-icon>\n      <ion-icon name=\"star\"></ion-icon>\n      <ion-icon name=\"star\"></ion-icon>\n      <ion-icon name=\"star\"></ion-icon>\n      <p>4.1 Ratings</p>\n    </ion-row>\n    <ion-row class=\"details\">\n      <p class=\"ceo\">CEO-Murali</p>\n    </ion-row>\n  </ion-card>\n\n  <ion-row size=\"11\" class=\"select\">\n    <ion-select placeholder=\"Select One\" value=\"branches\" interface=\"popover\">\n      <ion-select-option value=\"branches\" selected>Branches</ion-select-option>\n      <ion-select-option value=\"unread\">Branches</ion-select-option>\n    </ion-select>\n  </ion-row>\n\n  <ion-row class=\"second-card\">\n    <ion-card class=\"card-box\">\n      <ion-row>\n        <ion-col size=\"8\" class=\"address\">\n          <p><b>Address :</b></p>\n          <p>No-1/38 Parathiyar street moovara pet madipkkam Chennai-600091 TamilNadu</p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"img\">\n          <img src=\"https://localsearchforum.com/attachments/maps-embed-api-example-png.3469/\">\n\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-row>\n\n  <ion-card class=\"card-box\">\n    <ion-row class=\"radius\">\n      <ion-col>\n        <b> Radius </b>\n      </ion-col>\n      <ion-col class=\"red-text\" size=\"1.5\">\n        <ion-icon name=\"help-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"number\">\n      <ion-range min=\"-200\" max=\"200\" pin=\"true\">\n      </ion-range>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"card-box\">\n    <ion-col class=\"text\">\n      <b> Period </b>\n    </ion-col>\n    <ion-row>\n      <ion-segment>\n        <ion-segment-button value=\"Day\">\n          <ion-label>Day</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"week\">\n          <ion-label>week</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Month\">\n          <ion-label>Month</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Custom\">\n          <ion-label>Custom</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-item>\n          <ion-label position=\"floating\">From\n            <ion-icon name=\"calendar-outline\"></ion-icon>\n          </ion-label>\n          <ion-datetime min=\"1990-03-14\" max=\"2040-12-09\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-item>\n          <ion-label position=\"floating\">To\n            <ion-icon name=\"calendar-outline\"></ion-icon>\n          </ion-label>\n          <ion-datetime min=\"1990-03-14\" max=\"2040-12-09\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-col class=\"upload\">\n    Upload\n  </ion-col>\n\n  <ion-card class=\"banner-card\">\n    <ion-row>\n      <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n    </ion-row>\n    <ion-row>\n      <p>Upload your Banner JPG,PNG,GIF & video or URL</p>\n    </ion-row>\n  </ion-card>\n\n  <ion-col class=\"text-underline\">\n    <div class=\"ion-text-center\">\n      Position\n    </div>\n  </ion-col>\n  <ion-row>\n    <ion-col size=\"9\">\n      <div class=\"ion-text-start\">\n        Global\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class=\"ion-text-end\">\n\n        <ion-toggle checked></ion-toggle>\n\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col Style=\"color:purple;\">\n      <div class=\"ion-text-center\">\n        RS:4999 +18% GST\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"check\">\n    <ion-col size=\"1\">\n      <ion-checkbox checked></ion-checkbox>\n    </ion-col>\n    <ion-col size=\"9\">\n      <p class=\"confirm\">I agree for the <span>Terms and Conditions</span></p>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"button\">\n    <ion-button>Pay</ion-button>\n  </ion-row>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "RTgg": function RTgg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditshowcasePageRoutingModule", function () {
        return EditshowcasePageRoutingModule;
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


      var _editshowcase_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editshowcase.page */
      "kRc/");

      var routes = [{
        path: '',
        component: _editshowcase_page__WEBPACK_IMPORTED_MODULE_3__["EditshowcasePage"]
      }];

      var EditshowcasePageRoutingModule = function EditshowcasePageRoutingModule() {
        _classCallCheck(this, EditshowcasePageRoutingModule);
      };

      EditshowcasePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditshowcasePageRoutingModule);
      /***/
    },

    /***/
    "kRc/": function kRc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditshowcasePage", function () {
        return EditshowcasePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_editshowcase_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./editshowcase.page.html */
      "ROaP");
      /* harmony import */


      var _editshowcase_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editshowcase.page.scss */
      "sehp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EditshowcasePage = /*#__PURE__*/function () {
        function EditshowcasePage() {
          _classCallCheck(this, EditshowcasePage);
        }

        _createClass(EditshowcasePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditshowcasePage;
      }();

      EditshowcasePage.ctorParameters = function () {
        return [];
      };

      EditshowcasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editshowcase',
        template: _raw_loader_editshowcase_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editshowcase_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditshowcasePage);
      /***/
    },

    /***/
    "sehp": function sehp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  --padding-top: 0px;\n  --ion-background-color:#fff;\n}\n\n.red-text {\n  font-size: 25px;\n  color: purple;\n}\n\n.text-size {\n  font-size: 50px;\n}\n\n.text-underline {\n  text-decoration: underline;\n  color: purple;\n}\n\n.green-text {\n  color: purple;\n  text-decoration: underline;\n}\n\nion-content {\n  --padding-start:5px;\n  --padding-end:5px;\n}\n\n.firstcard {\n  border: none;\n  box-shadow: none;\n  margin: 0.75em 1.125em;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 8.1875em;\n  height: 8.1875em;\n  margin-top: 90px;\n}\n\n.name {\n  font-size: 1.25em;\n  margin: 0%;\n  margin-top: 2em;\n  color: #22272a;\n  font-weight: bold;\n}\n\n.select {\n  float: right;\n  color: #871178;\n}\n\n.select-text {\n  color: #871178;\n}\n\nlabel {\n  color: #871178;\n}\n\n.select-icon {\n  width: 20px !important;\n  height: 20px !important;\n  color: #871187 !important;\n}\n\n.second-card {\n  width: 100%;\n}\n\n.address {\n  font-size: 1em;\n  padding: 5px;\n}\n\n.add {\n  margin: 0px 0px;\n}\n\n.button-color {\n  color: purple;\n}\n\n.text-size {\n  font-size: 50px;\n}\n\n.text-bacground {\n  background-color: #e6e4e4;\n  height: 300px;\n}\n\n.upload {\n  margin: 5px 15px;\n}\n\n.banner-card {\n  height: 400px;\n  margin: 0px 18px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.banner-card ion-icon {\n  width: 59px;\n  height: 47px;\n}\n\n.banner-card p {\n  font-size: 17px;\n  color: #9F9F9F;\n  margin: 5px 20px;\n  text-align: center;\n}\n\n.title-center {\n  text-align: center;\n}\n\n.title {\n  margin-top: 0.5em;\n  padding-left: 0%;\n  text-align: center;\n}\n\n.title p {\n  font-size: 1em;\n  color: #22272a;\n  letter-spacing: 0.0375em;\n  line-height: 1em;\n  margin: 5px 0px;\n}\n\n.title ion-icon {\n  color: #39ac00;\n}\n\n.card-box {\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 3px;\n  padding: 7px;\n}\n\n.number {\n  padding: 0%;\n}\n\n.number ion-range {\n  color: #871178;\n}\n\n.range-has-pin {\n  padding: 0% 5px;\n}\n\n.title {\n  margin-top: 0.5em;\n  padding-left: 0%;\n}\n\n.title p {\n  font-size: 1em;\n  color: #22272a;\n  letter-spacing: 0.0375em;\n  line-height: 1em;\n  margin: 5px 0px;\n  margin-top: 35px;\n}\n\n.title ion-icon {\n  color: #39ac00;\n}\n\n.star {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.star ion-icon {\n  color: #fcb900;\n  font-size: 1em;\n}\n\n.star p {\n  font-size: 1em;\n  padding-left: 5px;\n  margin: 5px 0px;\n}\n\n.date {\n  text-align: right;\n  color: #cacaca !important;\n  font-size: 0.8em !important;\n  position: absolute;\n  right: -10%;\n  bottom: 0;\n}\n\n.firstcard {\n  border: none;\n  box-shadow: none;\n  margin: 0.75em 1.125em;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 8.1875em;\n  height: 8.1875em;\n  margin-top: 90px;\n}\n\n.details {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #ffffff;\n}\n\n.details .name {\n  font-size: 1.25em;\n  margin: 0%;\n  margin-top: 2em;\n  color: #22272a;\n  font-weight: bold;\n}\n\n.name ion-icon {\n  color: #39AC00;\n}\n\n.details .ceo {\n  color: #9f9f9f;\n  font-size: 0.875em;\n  margin: 2px 0px;\n}\n\n.star ion-icon {\n  color: #fcb900;\n}\n\n.star p {\n  font-size: 0.5em;\n  padding-left: 5px;\n}\n\n.check {\n  margin: 10px 0px;\n}\n\n.text {\n  padding-bottom: 30px;\n}\n\n.radius {\n  height: 35px;\n}\n\nion-segment {\n  --background: #ffffff;\n  margin: 1em 1.125em;\n}\n\n.in-segment {\n  --width: 70px;\n  --height: 35px;\n}\n\nion-segment ion-label {\n  text-transform: capitalize;\n  font-size: 16px;\n  color: #871178;\n}\n\n.segment-button-checked {\n  background: none;\n  -webkit-text-decoration: solid;\n          text-decoration: solid;\n  border: 1px solid #871178;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n}\n\nion-col .confirm {\n  font-size: 0.75em;\n  color: #22272a;\n  margin-top: 0%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n}\n\n.confirm span {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.button {\n  display: flex;\n  justify-content: center;\n}\n\n.button ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 20px;\n  width: 123px;\n  height: 50px;\n  margin-bottom: 10px;\n}\n\nion-toggle {\n  --width: 34px;\n  --height: 14px;\n  --background-checked: linear-gradient(#871178, #3c1378);\n  --handle-background-checked: #9f9f9f;\n  padding-top: 0.71875em;\n}\n\n.img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-card {\n  box-shadow: 0px 3px 6px #302f2fea;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVkaXRzaG93Y2FzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUNBO0VBQ0ksMEJBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7QUFHSjs7QUFBQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBT0o7O0FBSkE7RUFFSSxZQUFBO0VBQ0EsY0FBQTtBQU1KOztBQUhBO0VBRUksY0FBQTtBQUtKOztBQUhBO0VBRUksY0FBQTtBQUtKOztBQUZBO0VBRUksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBSUo7O0FBREE7RUFDSSxXQUFBO0FBSUo7O0FBRkE7RUFFSSxjQUFBO0VBQ0EsWUFBQTtBQUlKOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQUZBO0VBQ0ksYUFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtBQU1KOztBQUhBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBTUE7O0FBSkE7RUFDSSxnQkFBQTtBQU9KOztBQUxBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7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Z2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gIH1cclxuICBcclxuLnJlZC10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6cHVycGxlO1xyXG59XHJcbi50ZXh0LXNpemV7XHJcbiAgICBmb250LXNpemU6NTBweDtcclxuICAgIFxyXG59XHJcbi50ZXh0LXVuZGVybGluZXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6cHVycGxlO1xyXG59XHJcbi5ncmVlbi10ZXh0e1xyXG4gICAgY29sb3I6cHVycGxlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6NXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDo1cHg7XHJcbn1cclxuLmZpcnN0Y2FyZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWFyZ2luOiAwLjc1ZW0gMS4xMjVlbTtcclxufVxyXG4uYmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkuMzc1ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzQ0MDkzYyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDguMTg3NWVtO1xyXG4gICAgaGVpZ2h0OiA4LjE4NzVlbTtcclxuICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIFxyXG59XHJcbi5zZWxlY3Rcclxue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuXHJcbi5zZWxlY3QtdGV4dFxyXG57XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5sYWJlbFxyXG57XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuLnNlbGVjdC1pY29uXHJcbntcclxuICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDIwcHggICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzg3MTE4NyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Vjb25kLWNhcmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYWRkcmVzc1xyXG57XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFkZHtcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxufVxyXG4uYnV0dG9uLWNvbG9ye1xyXG4gICAgY29sb3I6cHVycGxlO1xyXG59XHJcbi50ZXh0LXNpemV7XHJcbiAgICBmb250LXNpemU6NTBweDtcclxuICAgIFxyXG59XHJcbi50ZXh0LWJhY2dyb3VuZHtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjI4LCAyMjgpO1xyXG5oZWlnaHQ6MzAwcHg7XHJcbn1cclxuLnVwbG9hZHtcclxuICAgIG1hcmdpbjogNXB4IDE1cHg7XHJcbn1cclxuLmJhbm5lci1jYXJkIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDBweCAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYmFubmVyLWNhcmQgaW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDU5cHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbn1cclxuLmJhbm5lci1jYXJkIHB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzlGOUY5RjtcclxuICAgIG1hcmdpbjogNXB4IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRpdGxlLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGl0bGUgcCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDM3NWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4udGl0bGUgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICMzOWFjMDA7XHJcbn1cclxuLmNhcmQtYm94e1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG59XHJcbi5udW1iZXJ7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufVxyXG4ubnVtYmVyIGlvbi1yYW5nZXtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5yYW5nZS1oYXMtcGlue1xyXG5wYWRkaW5nOiAwJSA1cHg7XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxufVxyXG4udGl0bGUgcCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDM3NWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuLnRpdGxlIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjMzlhYzAwO1xyXG59XHJcblxyXG4uc3RhcntcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnN0YXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmY2I5MDA7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG4uc3RhciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuLmRhdGVcclxue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogI2NhY2FjYSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0xMCU7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5maXJzdGNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbjogMC43NWVtIDEuMTI1ZW07XHJcbn1cclxuLmJnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5LjM3NWVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICM0NDA5M2MpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA4LjE4NzVlbTtcclxuICAgIGhlaWdodDogOC4xODc1ZW07XHJcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xyXG59XHJcbi5kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbi5kZXRhaWxzIC5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm5hbWUgaW9uLWljb257XHJcbiAgICBjb2xvcjogIzM5QUMwMDtcclxufVxyXG4uZGV0YWlscyAuY2VvIHtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgbWFyZ2luOiAycHggMHB4O1xyXG59XHJcbi5zdGFyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmNiOTAwO1xyXG59XHJcbi5zdGFyIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4uY2hlY2sge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG4udGV4dHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcbi5yYWRpdXN7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuaW9uLXNlZ21lbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICAgIG1hcmdpbjogMWVtIDEuMTI1ZW07XHJcbn1cclxuLmluLXNlZ21lbnR7XHJcbiAgICAtLXdpZHRoOiA3MHB4O1xyXG4gICAgLS1oZWlnaHQ6IDM1cHg7XHJcbn1cclxuaW9uLXNlZ21lbnQgaW9uLWxhYmVsIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBzb2xpZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4NzExNzg7XHJcbn1cclxuXHJcbmlvbi1jaGVja2JveCB7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjNzA3MDcwO1xyXG4gICAgb3BhY2l0eTogNzAlO1xyXG4gICAgLS1jaGVja21hcmstY29sb3I6ICM4NzExNzg7XHJcbiAgICAtLWNoZWNrbWFyay13aWR0aDogNDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLWNvbCAuY29uZmlybSB7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcclxufVxyXG4uY29uZmlybSBzcGFuIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJ1dHRvbiBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEyM3B4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5pb24tdG9nZ2xlIHtcclxuICAgIC0td2lkdGg6IDM0cHg7XHJcbiAgICAtLWhlaWdodDogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM5ZjlmOWY7XHJcbiAgICBwYWRkaW5nLXRvcDogMC43MTg3NWVtO1xyXG59XHJcbi5pbWd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzMwMmYyZmVhO1xyXG59XHJcblxyXG5cclxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=editshowcase-editshowcase-module-es5.js.map