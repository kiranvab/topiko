(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showcase-showcase-module"], {
    /***/
    "36IL": function IL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcasePageRoutingModule", function () {
        return ShowcasePageRoutingModule;
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


      var _showcase_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./showcase.page */
      "tjkU");

      var routes = [{
        path: '',
        component: _showcase_page__WEBPACK_IMPORTED_MODULE_3__["ShowcasePage"]
      }];

      var ShowcasePageRoutingModule = function ShowcasePageRoutingModule() {
        _classCallCheck(this, ShowcasePageRoutingModule);
      };

      ShowcasePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ShowcasePageRoutingModule);
      /***/
    },

    /***/
    "CBX/": function CBX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n      <ion-menu-button mode=\"ios\"></ion-menu-button>\n    </ion-buttons>\n    <ion-col class=\"title-center\">\n      <ion-title>Show Case</ion-title>\n    </ion-col>\n    <ion-buttons slot=\"end\" (click)=\"openMenu()\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!-- Show Case Div Start-->\n  <div *ngIf=\"showcasediv\">\n    <ion-row>\n      <ion-col>\n            <ion-card class=\"first-card\" (click)=\"image(1)\">\n              <ion-row class=\"upload-icon\">\n                <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n              </ion-row>\n              <ion-row class=\"txtclass\">\n                <p class=\"up-text\">Upload Your Banner<br>JPG,PNG,GIF & Video Or URL</p>\n              </ion-row>\n              <ion-row class=\"txtclass\">\n                <p class=\"up-ptext\">Position Topix1 <br> Cost-5000/- per day +GST</p>\n              </ion-row>\n            </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        \n        <ion-card class=\"second-card\" (click)=\"image(2)\">\n          <ion-row class=\"upload-icon\">\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row class=\"txtclass\">\n            <p class=\"up-text\">Upload Your BannerJPG,PNG,GIF & Video Or URL</p>\n          </ion-row>\n          <ion-row class=\"txtclass\">\n            <p class=\"up-ptext\">Position Topix2 Cost-5000/- per day +GST</p>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <img src=\"../assets/show1.png\" />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col  size=\"6\">\n        <ion-card class=\"third-card\" (click)=\"image(3)\">\n          <ion-row class=\"upload-icon\">\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row class=\"txtclass\">\n            <p class=\"up-text\">Upload Your Banner JPG,PNG,GIF & Video Or URL</p>\n          </ion-row>\n          <ion-row class=\"txtclass\">\n            <p class=\"up-ptext\">Position Topix3  Cost-5000/- per day +GST</p>\n          </ion-row>\n        </ion-card>\n\n      </ion-col>\n      <ion-col  size=\"6\">\n        <ion-card class=\"third-card\" (click)=\"image(3)\">\n          <ion-row class=\"upload-icon\">\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row class=\"txtclass\">\n            <p class=\"up-text\">Upload Your Banner JPG,PNG,GIF & Video Or URL</p>\n          </ion-row>\n          <ion-row class=\"txtclass\">\n            <p class=\"up-ptext\">Position Topix3 Cost-5000/- per day +GST</p>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        \n        <ion-card class=\"four-card\" (click)=\"image(4)\">\n          <ion-row class=\"upload-icon\">\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row class=\"txtclass\">\n            <p class=\"up-text\">Upload Your Banner JPG,PNG,GIF & Video Or URL</p>\n          </ion-row>\n          <ion-row class=\"txtclass\">\n            <p class=\"up-ptext\">Position Topix4  Cost-5000/- per day +GST</p>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card class=\"first-card\" (click)=\"image(5)\">\n          <ion-row class=\"upload-icon\">\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row class=\"txtclass\">\n            <p class=\"up-text\">Upload Your Banner<br>JPG,PNG,GIF & Video Or URL</p>\n          </ion-row>\n          <ion-row class=\"txtclass\">\n            <p class=\"up-ptext\">Position Topix5 <br> Cost-5000/- per day +GST</p>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n   \n  </div>\n  <!-- Show case Div End -->\n  <!-- Main Div Start-->\n  <div *ngIf=\"mainDiv\">\n  <ion-card class=\"firstcard\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n      <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n        <img class=\"position-cam\" src=\"assets/camera.svg\" alt=\"\">\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"details\">\n      <P class=\"name\">{{busines_name}} <ion-icon name=\"shield-checkmark\"></ion-icon>\n      </P>\n    </ion-row>\n    <ion-row class=\"star\">\n      <ion-icon name=\"star\"></ion-icon>\n      <ion-icon name=\"star\"></ion-icon>\n      <ion-icon name=\"star\"></ion-icon>\n      <ion-icon name=\"star\"></ion-icon>\n      <ion-icon name=\"star\"></ion-icon>\n      <p>4.1 Ratings</p>\n    </ion-row>\n    <ion-row class=\"details\">\n      <p class=\"ceo\">CEO-{{owner}}</p>\n    </ion-row>\n  </ion-card>\n\n  <ion-row size=\"11\" class=\"select\">\n    <ion-select placeholder=\"Select One\" value=\"branches\" interface=\"popover\">\n      <ion-select-option *ngFor=\"let br of branches; let i= index\" value=\"{{br.id}}\" selected>{{br.branch_title}}</ion-select-option>\n      \n    </ion-select>\n  </ion-row>\n\n  <ion-row class=\"second-card\">\n    <ion-card class=\"card-box\">\n      <ion-row>\n        <ion-col size=\"8\" class=\"address\">\n          <p><b>Address :</b></p>\n          <p>{{address}}</p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"img\">\n          <img src=\"https://localsearchforum.com/attachments/maps-embed-api-example-png.3469/\">\n\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-row>\n\n  <ion-card class=\"card-box\">\n    <ion-row class=\"radius\">\n      <ion-col>\n        <b> Radius </b>\n      </ion-col>\n      <ion-col class=\"red-text\" size=\"1.5\">\n        <ion-icon name=\"help-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"number\">\n      <ion-range min=\"-200\" max=\"200\" pin=\"true\">\n      </ion-range>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"card-box\">\n    <ion-col class=\"text\">\n      <b> Period </b>\n    </ion-col>\n    <ion-row>\n      <ion-segment>\n        <ion-segment-button value=\"Day\">\n          <ion-label>Day</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"week\">\n          <ion-label>week</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Month\">\n          <ion-label>Month</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Custom\">\n          <ion-label>Custom</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-row>\n    <ion-row class=\"reduce-space\">\n      <ion-col size=\"6\">\n        <ion-label>Start Date</ion-label>\n        <ion-item>\n          <ion-input type=\"date\"  [(ngModel)]=\"start\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label>End Date</ion-label>\n        <ion-item>\n          <ion-input type=\"date\" min=\"1990-03-14\" max=\"2040-12-09\"  [(ngModel)]=\"end\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-col class=\"upload\">\n    Upload\n  </ion-col>\n\n  <ion-card class=\"banner-card\" (click)=\"showdiv()\">\n    <ion-row>\n      <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n    </ion-row>\n    <ion-row>\n      <p>Upload your Banner JPG,PNG,GIF & video or URL</p>\n    </ion-row>\n  </ion-card>\n\n  <!-- <ion-row size=\"11\" class=\"select\">\n    <ion-select placeholder=\"Select One\" value=\"positions\" [(ngModel)]=\"position\" interface=\"popover\">\n      <ion-select-option value=\"1\" selected>Positon 1</ion-select-option>\n      <ion-select-option value=\"2\" >Positon 2</ion-select-option>\n      <ion-select-option value=\"3\" >Positon 3</ion-select-option>\n      <ion-select-option value=\"4\" >Positon 4</ion-select-option>\n      <ion-select-option value=\"5\" >Positon 5</ion-select-option>\n      \n    </ion-select>\n  </ion-row> -->\n  <ion-col class=\"text-underline\">\n    <div class=\"ion-text-center\" (click)=\"showdiv()\">\n      Position\n    </div>\n  </ion-col>\n  <ion-row>\n    <ion-col size=\"9\">\n      <div class=\"ion-text-start\">\n        Global\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class=\"ion-text-end\">\n\n        <ion-toggle checked></ion-toggle>\n\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col Style=\"color:purple;\">\n      <div class=\"ion-text-center\">\n        RS:4999 +18% GST\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"check\">\n    <ion-col size=\"1\">\n      <ion-checkbox checked></ion-checkbox>\n    </ion-col>\n    <ion-col size=\"9\">\n      <p class=\"confirm\">I agree for the <span>Terms and Conditions</span></p>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"button\">\n    <ion-button (click)=\"submit()\">Pay</ion-button>\n  </ion-row>\n</div>\n\n</ion-content>";
      /***/
    },

    /***/
    "Zah/": function Zah(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcasePageModule", function () {
        return ShowcasePageModule;
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


      var _showcase_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./showcase-routing.module */
      "36IL");
      /* harmony import */


      var _showcase_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./showcase.page */
      "tjkU");

      var ShowcasePageModule = function ShowcasePageModule() {
        _classCallCheck(this, ShowcasePageModule);
      };

      ShowcasePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _showcase_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowcasePageRoutingModule"]],
        declarations: [_showcase_page__WEBPACK_IMPORTED_MODULE_6__["ShowcasePage"]]
      })], ShowcasePageModule);
      /***/
    },

    /***/
    "qbG1": function qbG1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  --padding-top: 0px;\n  --ion-background-color:#fff;\n}\n\n.red-text {\n  font-size: 25px;\n  color: purple;\n}\n\n.text-size {\n  font-size: 50px;\n}\n\n.text-underline {\n  text-decoration: underline;\n  color: purple;\n}\n\n.green-text {\n  color: purple;\n  text-decoration: underline;\n}\n\n.first {\n  margin: 1em 1.125em;\n}\n\n.row {\n  height: 14.4em;\n}\n\nion-card {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 120px;\n  height: 120px;\n}\n\nion-avatar img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 20%;\n}\n\n.position-cam {\n  position: relative;\n  left: 52px;\n  top: 1px;\n}\n\n.name {\n  font-size: 1.25em;\n  margin: 0%;\n  margin-top: 2em;\n  color: #22272a;\n  font-weight: bold;\n}\n\n.select {\n  float: right;\n  color: #871178;\n}\n\n.select-text {\n  color: #871178;\n}\n\nlabel {\n  color: #871178;\n}\n\n.select-icon {\n  width: 20px !important;\n  height: 20px !important;\n  color: #871187 !important;\n}\n\n.second-card {\n  width: 100%;\n}\n\n.address {\n  font-size: 1em;\n  padding: 5px;\n}\n\n.add {\n  margin: 0px 0px;\n}\n\n.button-color {\n  color: purple;\n}\n\n.text-size {\n  font-size: 50px;\n}\n\n.text-bacground {\n  background-color: #e6e4e4;\n  height: 300px;\n}\n\n.upload {\n  margin: 5px 15px;\n}\n\n.banner-card {\n  height: 400px;\n  margin: 0px 18px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.banner-card ion-icon {\n  width: 59px;\n  height: 47px;\n}\n\n.banner-card p {\n  font-size: 17px;\n  color: #9F9F9F;\n  margin: 5px 20px;\n  text-align: center;\n}\n\n.title-center {\n  text-align: center;\n}\n\n.title {\n  margin-top: 0.5em;\n  padding-left: 0%;\n  text-align: center;\n}\n\n.title p {\n  font-size: 1em;\n  color: #22272a;\n  letter-spacing: 0.0375em;\n  line-height: 1em;\n  margin: 5px 0px;\n}\n\n.title ion-icon {\n  color: #39ac00;\n}\n\n.card-box {\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 3px;\n  padding: 7px;\n}\n\n.number {\n  padding: 0%;\n}\n\n.number ion-range {\n  color: #871178;\n}\n\n.range-has-pin {\n  padding: 0% 5px;\n}\n\n.title {\n  margin-top: 0.5em;\n  padding-left: 0%;\n}\n\n.title p {\n  font-size: 1em;\n  color: #22272a;\n  letter-spacing: 0.0375em;\n  line-height: 1em;\n  margin: 5px 0px;\n  margin-top: 35px;\n}\n\n.title ion-icon {\n  color: #39ac00;\n}\n\n.star {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.star ion-icon {\n  color: #fcb900;\n  font-size: 1em;\n}\n\n.star p {\n  font-size: 1em;\n  padding-left: 5px;\n  margin: 5px 0px;\n}\n\n.date {\n  text-align: right;\n  color: #cacaca !important;\n  font-size: 0.8em !important;\n  position: absolute;\n  right: -10%;\n  bottom: 0;\n}\n\n.firstcard {\n  border: none;\n  box-shadow: none;\n  margin: 0.75em 1.125em;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 8.1875em;\n  height: 8.1875em;\n  margin-top: 90px;\n}\n\n.details {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #ffffff;\n}\n\n.details .name {\n  font-size: 1.25em;\n  margin: 0%;\n  margin-top: 2em;\n  color: #22272a;\n  font-weight: bold;\n  margin: 0px 0px 0px;\n}\n\n.name ion-icon {\n  color: #39AC00;\n}\n\n.details .ceo {\n  color: #9f9f9f;\n  font-size: 0.875em;\n  margin: 2px 0px;\n}\n\n.star ion-icon {\n  color: #fcb900;\n}\n\n.star p {\n  font-size: 0.5em;\n  padding-left: 5px;\n}\n\n.check {\n  margin: 10px 0px;\n}\n\n.text {\n  padding-bottom: 30px;\n}\n\n.radius {\n  height: 35px;\n}\n\nion-segment {\n  --background: #ffffff;\n  margin: 0em 0em;\n}\n\nion-segment {\n  --width: 80px;\n  --height: 35px;\n}\n\nion-segment ion-label {\n  text-transform: capitalize;\n  font-size: 10px;\n  color: #920887;\n  padding-left: 50px;\n  padding-right: 55px;\n  padding-top: 2px;\n}\n\n.segment-button-checked {\n  background: none;\n  -webkit-text-decoration: solid;\n          text-decoration: solid;\n  border: 1px solid #871178;\n}\n\n.reduce-space {\n  padding-top: 1px;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n}\n\nion-col .confirm {\n  font-size: 0.75em;\n  color: #22272a;\n  margin-top: 0%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n}\n\n.confirm span {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.button {\n  display: flex;\n  justify-content: center;\n}\n\n.button ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 20px;\n  width: 123px;\n  height: 50px;\n  margin-bottom: 10px;\n}\n\nion-toggle {\n  --width: 34px;\n  --height: 14px;\n  --background-checked: linear-gradient(#871178, #3c1378);\n  --handle-background-checked: #9f9f9f;\n  padding-top: 0.71875em;\n}\n\n.img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-card {\n  box-shadow: 0px 3px 6px #302f2fea;\n}\n\n.first-card {\n  height: 221px;\n  width: 100%;\n  margin: 10px 0px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 50px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n\n.first-card ion-icon {\n  width: 45px;\n  height: 35px;\n}\n\n.second-card {\n  height: 120px;\n  width: 100%;\n  margin: 10px 0px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2px;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n\n.second-card ion-icon {\n  width: 45px;\n  height: 35px;\n}\n\n.third-card {\n  height: 200px;\n  width: 100%;\n  margin: 10px 0px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  text-align: center;\n}\n\n.third-card ion-icon {\n  width: 45px;\n  height: 35px;\n}\n\n.four-card {\n  height: 200px;\n  width: 100%;\n  margin: 10px 0px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  text-align: center;\n}\n\n.four-card ion-icon {\n  width: 45px;\n  height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNob3djYXNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSwwQkFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFRSjs7QUFOQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFTSjs7QUFOQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFTSjs7QUFOQTtFQUVJLFlBQUE7RUFDQSxjQUFBO0FBUUo7O0FBTEE7RUFFSSxjQUFBO0FBT0o7O0FBTEE7RUFFSSxjQUFBO0FBT0o7O0FBSkE7RUFFSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFNSjs7QUFIQTtFQUNJLFdBQUE7QUFNSjs7QUFKQTtFQUVJLGNBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSEE7RUFDSSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxhQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTEE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFRQTs7QUFOQTtFQUNJLGdCQUFBO0FBU0o7O0FBUEE7RUFDSSxhQUFB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O0VBQ0EsWUFBQTtBQTBDSiIsImZpbGUiOiJzaG93Y2FzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDBweDtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuIFxyXG4gIH1cclxuICBcclxuLnJlZC10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6cHVycGxlO1xyXG59XHJcbi50ZXh0LXNpemV7XHJcbiAgICBmb250LXNpemU6NTBweDtcclxuICAgIFxyXG59XHJcbi50ZXh0LXVuZGVybGluZXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6cHVycGxlO1xyXG59XHJcbi5ncmVlbi10ZXh0e1xyXG4gICAgY29sb3I6cHVycGxlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxufVxyXG4uZmlyc3Qge1xyXG4gICAgbWFyZ2luOiAxZW0gMS4xMjVlbTtcclxufVxyXG4ucm93IHtcclxuICAgIGhlaWdodDogMTQuNGVtO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5LjM3NWVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICM0NDA5M2MpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcbmlvbi1hdmF0YXIgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxufVxyXG4ucG9zaXRpb24tY2FtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUycHg7XHJcbiAgICB0b3A6IDFweDtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIFxyXG59XHJcbi5zZWxlY3Rcclxue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuXHJcbi5zZWxlY3QtdGV4dFxyXG57XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5sYWJlbFxyXG57XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuLnNlbGVjdC1pY29uXHJcbntcclxuICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDIwcHggICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzg3MTE4NyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Vjb25kLWNhcmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYWRkcmVzc1xyXG57XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFkZHtcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxufVxyXG4uYnV0dG9uLWNvbG9ye1xyXG4gICAgY29sb3I6cHVycGxlO1xyXG59XHJcbi50ZXh0LXNpemV7XHJcbiAgICBmb250LXNpemU6NTBweDtcclxuICAgIFxyXG59XHJcbi50ZXh0LWJhY2dyb3VuZHtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjI4LCAyMjgpO1xyXG5oZWlnaHQ6MzAwcHg7XHJcbn1cclxuLnVwbG9hZHtcclxuICAgIG1hcmdpbjogNXB4IDE1cHg7XHJcbn1cclxuLmJhbm5lci1jYXJkIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDBweCAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYmFubmVyLWNhcmQgaW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDU5cHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbn1cclxuLmJhbm5lci1jYXJkIHB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzlGOUY5RjtcclxuICAgIG1hcmdpbjogNXB4IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRpdGxlLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGl0bGUgcCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDM3NWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4udGl0bGUgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICMzOWFjMDA7XHJcbn1cclxuLmNhcmQtYm94e1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG59XHJcbi5udW1iZXJ7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufVxyXG4ubnVtYmVyIGlvbi1yYW5nZXtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5yYW5nZS1oYXMtcGlue1xyXG5wYWRkaW5nOiAwJSA1cHg7XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxufVxyXG4udGl0bGUgcCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDM3NWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuLnRpdGxlIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjMzlhYzAwO1xyXG59XHJcblxyXG4uc3RhcntcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnN0YXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmY2I5MDA7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG4uc3RhciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuLmRhdGVcclxue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogI2NhY2FjYSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0xMCU7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5maXJzdGNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbjogMC43NWVtIDEuMTI1ZW07XHJcbn1cclxuLmJnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5LjM3NWVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICM0NDA5M2MpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA4LjE4NzVlbTtcclxuICAgIGhlaWdodDogOC4xODc1ZW07XHJcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xyXG59XHJcbi5kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgXHJcbn1cclxuLmRldGFpbHMgLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjowcHggMHB4IDBweDtcclxufVxyXG4ubmFtZSBpb24taWNvbntcclxuICAgIGNvbG9yOiAjMzlBQzAwO1xyXG59XHJcbi5kZXRhaWxzIC5jZW8ge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBtYXJnaW46IDJweCAwcHg7XHJcbn1cclxuLnN0YXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmY2I5MDA7XHJcbn1cclxuLnN0YXIgcCB7XHJcbiAgICBmb250LXNpemU6IDAuNWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5jaGVjayB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcbi50ZXh0e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLnJhZGl1c3tcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5pb24tc2VnbWVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7IFxyXG4gICAgbWFyZ2luOiAwZW0gMGVtO1xyXG4gICAgXHJcbn1cclxuaW9uLXNlZ21lbnR7XHJcbiAgICAtLXdpZHRoOiA4MHB4O1xyXG4gICAgLS1oZWlnaHQ6IDM1cHg7XHJcbn1cclxuaW9uLXNlZ21lbnQgaW9uLWxhYmVsIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICM5MjA4ODc7XHJcbiAgICBwYWRkaW5nLWxlZnQ6NTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6NTVweDtcclxuICAgIHBhZGRpbmctdG9wOjJweDtcclxufVxyXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHNvbGlkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg3MTE3ODtcclxufVxyXG4ucmVkdWNlLXNwYWNle1xyXG4gICAgcGFkZGluZy10b3A6MXB4O1xyXG59XHJcblxyXG5cclxuaW9uLWNoZWNrYm94IHtcclxuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICM3MDcwNzA7XHJcbiAgICBvcGFjaXR5OiA3MCU7XHJcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogIzg3MTE3ODtcclxuICAgIC0tY2hlY2ttYXJrLXdpZHRoOiA0O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWNvbCAuY29uZmlybSB7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcclxufVxyXG4uY29uZmlybSBzcGFuIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJ1dHRvbiBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEyM3B4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5pb24tdG9nZ2xlIHtcclxuICAgIC0td2lkdGg6IDM0cHg7XHJcbiAgICAtLWhlaWdodDogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM5ZjlmOWY7XHJcbiAgICBwYWRkaW5nLXRvcDogMC43MTg3NWVtO1xyXG59XHJcbi5pbWd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzMwMmYyZmVhO1xyXG59XHJcblxyXG5cclxuLmZpcnN0LWNhcmQge1xyXG4gICAgaGVpZ2h0OiAyMjFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcclxufVxyXG4uZmlyc3QtY2FyZCBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuXHJcbi5zZWNvbmQtY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG59XHJcbi5zZWNvbmQtY2FyZCBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuXHJcbi50aGlyZC1jYXJkIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50aGlyZC1jYXJkIGlvbi1pY29uIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG5cclxuLmZvdXItY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm91ci1jYXJkIGlvbi1pY29uIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "tjkU": function tjkU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcasePage", function () {
        return ShowcasePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_showcase_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./showcase.page.html */
      "CBX/");
      /* harmony import */


      var _showcase_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./showcase.page.scss */
      "qbG1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");

      var ShowcasePage = /*#__PURE__*/function () {
        function ShowcasePage(actionsheetCtrl, route, storage, http, camera, router) {
          _classCallCheck(this, ShowcasePage);

          this.actionsheetCtrl = actionsheetCtrl;
          this.route = route;
          this.storage = storage;
          this.http = http;
          this.camera = camera;
          this.router = router;
          this.showcasediv = false;
          this.mainDiv = true;
        }

        _createClass(ShowcasePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("mybusiness").then(function (val) {
              _this.mybusiness = val;
              console.log("My business Details:", _this.mybusiness);
              _this.owner = _this.mybusiness[0].owner_name;
              _this.address = _this.mybusiness[0].business_address;
              _this.busines_name = _this.mybusiness[0].business_name;
              _this.bid = _this.mybusiness[0].id;

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"].ApiUrl + "getbranches.php?bid=" + _this.bid).subscribe(function (res) {
                _this.branches = res;
                console.log('Branches', _this.branches);
              });
            });
          }
        }, {
          key: "image",
          value: function image(i) {
            var _this2 = this;

            console.log(i);
            this.position = i;
            var options = {
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this2.images = 'data:image/jpeg;base64,' + imageData;
            });
            this.showcasediv = false;
            this.mainDiv = true;
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this3 = this;

            var link = _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"].ApiUrl + "addshowcase.php";
            var myData = JSON.stringify({
              'bid': this.bid,
              'image': this.images,
              'start': this.start,
              'end': this.end,
              'position': this.position
            });
            console.log("Showcase Data", myData);
            this.http.post(link, myData).subscribe(function (response) {
              if (response = 1) {
                alert("Show Case Added Sucesfully");

                _this3.router.navigate(['/my-business']);
              }
            });
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionsheetCtrl.create({
                        // header: 'Modify your album',  
                        buttons: [{
                          text: 'Edit',
                          handler: function handler() {
                            console.log('Destructive clicked');

                            _this4.route.navigate(['/editshowcase']);
                          }
                        }, {
                          text: 'Payment History',
                          handler: function handler() {
                            console.log('Archive clicked');
                          }
                        }, {
                          text: 'Details',
                          handler: function handler() {
                            console.log('Archive clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showdiv",
          value: function showdiv() {
            this.showcasediv = true;
            this.mainDiv = false;
          }
        }]);

        return ShowcasePage;
      }();

      ShowcasePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      ShowcasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-showcase',
        template: _raw_loader_showcase_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_showcase_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ShowcasePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=showcase-showcase-module-es5.js.map