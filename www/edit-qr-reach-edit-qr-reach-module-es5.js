(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-qr-reach-edit-qr-reach-module"], {
    /***/
    "5+Rz": function Rz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditQrReachPageRoutingModule", function () {
        return EditQrReachPageRoutingModule;
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


      var _edit_qr_reach_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-qr-reach.page */
      "QAJS");

      var routes = [{
        path: '',
        component: _edit_qr_reach_page__WEBPACK_IMPORTED_MODULE_3__["EditQrReachPage"]
      }];

      var EditQrReachPageRoutingModule = function EditQrReachPageRoutingModule() {
        _classCallCheck(this, EditQrReachPageRoutingModule);
      };

      EditQrReachPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditQrReachPageRoutingModule);
      /***/
    },

    /***/
    "MuMJ": function MuMJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n      <ion-menu-button mode=ios></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Edit QR Reach</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"first\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img\n            src=\"{{uimage}}\"\n            alt=\"\">\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"second\">\n    <ion-row>\n      <ion-col size=\"3\">\n        <p class=\"reach\">Reach ID</p>\n      </ion-col>\n      <ion-col>\n        <p class=\"id\">{{this.qrid}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"image-card\">\n    <ion-row>\n      <p>Image</p>\n    </ion-row>\n    <div class=\"scroll\">\n      <img src=\"{{image1}}\" alt=\"\">\n      <img src=\"{{image2}}\" alt=\"\">\n      <img src=\"{{image3}}\" alt=\"\">\n      <img src=\"{{image4}}\" alt=\"\">\n    </div>\n  </ion-card>\n\n  <ion-card class=\"third\">\n    <ion-row class=\"heading\">\n      <p>User Name</p>\n    </ion-row>\n    <ion-row class=\"ans\">\n      <ion-item>\n      <ion-input value=\"{{name}}\" [(ngModel)]=\"name\"></ion-input>\n    </ion-item>\n    </ion-row>\n    <ion-row class=\"heading\">\n      <p>User Number</p>\n    </ion-row>\n    <ion-row class=\"ans\">\n      <ion-item>\n      <ion-input value=\"{{mobile}}\" [(ngModel)]=\"mobile\"></ion-input>\n    </ion-item>\n    </ion-row>\n    <ion-row class=\"heading\">\n      <p>User Mail ID</p>\n    </ion-row>\n    <ion-row class=\"ans\">\n      <ion-item>\n      <ion-input value=\"{{email}}\" [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n    </ion-row>\n    <ion-row class=\"heading\">\n      <p>Purpose (Vehicle)</p>\n    </ion-row>\n    <ion-row class=\"ans\">\n      <ion-col size=\"12\">\n        <h6>Vehicle</h6>\n      </ion-col>\n      <ion-col size=\"12\">\n        <h6>By Cycle</h6>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item>\n        <ion-input value=\"{{registration_number}}\" [(ngModel)]=\"registration_number\"></ion-input>\n      </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"heading\">\n      <p>Nominee Name</p>\n    </ion-row>\n    <ion-row class=\"ans\">\n      <ion-item>\n      <ion-input value=\"{{nominee_name}}\" [(ngModel)]=\"nominee_name\"></ion-input>\n    </ion-item>\n    </ion-row>\n    <ion-row class=\"heading\">\n      <p>Contact No</p>\n    </ion-row>\n    <ion-row class=\"ans\">\n      <ion-item>\n      <ion-input value=\"{{nominee_mobile}}\" [(ngModel)]=\"nominee_mobile\"></ion-input>\n    </ion-item>\n    </ion-row>\n  </ion-card>\n\n  \n\n \n\n  <ion-grid class=\"last-grid\">\n    <ion-row>\n      <ion-col class=\"left\">\n        <p>Payment History</p>\n      </ion-col>\n      <ion-col class=\"right\">\n        <p routerLink=\"/choose\">Choose</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"button\">\n      <ion-col class=\"lef\">\n        <ion-button>Download</ion-button>\n      </ion-col>\n      <ion-col class=\"righ\">\n        <ion-button (click)=\"update()\">Update</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "QAJS": function QAJS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditQrReachPage", function () {
        return EditQrReachPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_qr_reach_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-qr-reach.page.html */
      "MuMJ");
      /* harmony import */


      var _edit_qr_reach_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-qr-reach.page.scss */
      "dqvN");
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


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");

      var EditQrReachPage = /*#__PURE__*/function () {
        function EditQrReachPage(storage, http, router) {
          _classCallCheck(this, EditQrReachPage);

          this.storage = storage;
          this.http = http;
          this.router = router;
        }

        _createClass(EditQrReachPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("userdetails").then(function (val) {
              _this.udata = val;
              _this.user_id = _this.udata[0].id;
              _this.uimage = _this.udata[0].image;
              console.log("UserID", _this.uimage);
            });
            this.storage.get("qrid").then(function (val) {
              _this.qr_id = val;
              console.log("QRID:", _this.qr_id);

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "getqrreach.php?qrid=" + _this.qr_id).subscribe(function (qrdata) {
                _this.myqr = qrdata;
                _this.qrid = qrdata[0].qr_id;
                _this.image1 = qrdata[0].image1;
                _this.image2 = qrdata[0].image2;
                _this.image3 = qrdata[0].image3;
                _this.image4 = qrdata[0].image4;
                _this.email = qrdata[0].email;
                _this.mobile = qrdata[0].mobile;
                _this.name = qrdata[0].name;
                _this.nominee_mobile = qrdata[0].nominee_mobile;
                _this.nominee_name = qrdata[0].nominee_name;
                _this.purpose = qrdata[0].purpose;
                _this.registration_number = qrdata[0].registration_number;
                _this.vehicle_type = qrdata[0].vehicle_type;
                console.log(_this.myqr);
              });
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this2 = this;

            var link = _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "updateqrreach.php";
            var updata = JSON.stringify({
              "qrid": this.qr_id,
              "name": this.name,
              "mobile": this.mobile,
              "email": this.email,
              "reg_no": this.registration_number,
              "nominee_name": this.nominee_name,
              "nominee_mobile": this.nominee_mobile
            });
            console.log(updata);
            this.http.post(link, updata).subscribe(function (response) {
              _this2.upd = response;

              if (_this2.upd = 1) {
                alert("Qr Reach Updated");

                _this2.router.navigate(['qrreach']);
              } else {
                alert("Failed to Update");
              }
            });
          }
        }]);

        return EditQrReachPage;
      }();

      EditQrReachPage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      EditQrReachPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-edit-qr-reach',
        template: _raw_loader_edit_qr_reach_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_qr_reach_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditQrReachPage);
      /***/
    },

    /***/
    "X382": function X382(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditQrReachPageModule", function () {
        return EditQrReachPageModule;
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


      var _edit_qr_reach_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-qr-reach-routing.module */
      "5+Rz");
      /* harmony import */


      var _edit_qr_reach_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-qr-reach.page */
      "QAJS");

      var EditQrReachPageModule = function EditQrReachPageModule() {
        _classCallCheck(this, EditQrReachPageModule);
      };

      EditQrReachPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_qr_reach_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditQrReachPageRoutingModule"]],
        declarations: [_edit_qr_reach_page__WEBPACK_IMPORTED_MODULE_6__["EditQrReachPage"]]
      })], EditQrReachPageModule);
      /***/
    },

    /***/
    "dqvN": function dqvN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.first {\n  margin: 1em 1.125em;\n}\n\n.row {\n  height: 14.4em;\n}\n\nion-card {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 146px;\n  height: 146px;\n}\n\nion-avatar img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 50%;\n}\n\n.position-cam {\n  position: relative;\n  left: 52px;\n  top: 37px;\n}\n\n.second {\n  margin: 1.625em 1.125em;\n  background: #f2f2f2;\n}\n\n.second .reach {\n  font-size: 1em;\n  margin: 10px 0px;\n  padding-left: 10px;\n  color: #22272a;\n}\n\n.second .id {\n  margin: 10px;\n  color: #871178;\n}\n\n.image-card {\n  margin: 1.75em 1.125em;\n  width: 100%;\n}\n\n.image-card p {\n  font-size: 1em;\n  color: #871178;\n}\n\n.image-card img {\n  width: 6.43em;\n  height: 6.43em;\n  margin-right: 1em;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\nion-item {\n  width: 90%;\n}\n\n.third {\n  width: 100%;\n}\n\n.third p {\n  font-size: 1em;\n  color: #871178;\n}\n\n.third img {\n  width: 6.43em;\n  height: 6.43em;\n  margin-right: 1em;\n  box-shadow: 0px 3px 6px #00000029;\n  margin-bottom: 2.1875em;\n}\n\n.heading p {\n  font-size: 1em;\n  color: #871178;\n  margin: 0.5em 0px;\n}\n\n.ans p {\n  font-size: 0.875em;\n  color: #22272a;\n  margin-left: 0.625em;\n  margin-top: 0.5em;\n  line-height: 1em;\n}\n\nh6 {\n  margin: 0.3125em 0%;\n  color: #22272a;\n  font-size: 13px !important;\n}\n\nh4 {\n  color: #871178;\n  text-align: center;\n  margin: 1em 0px;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.select-row {\n  margin-right: 18px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.select {\n  float: right;\n  color: #871178;\n}\n\n.select-text {\n  color: #871178;\n}\n\nlabel {\n  color: #871178;\n}\n\n.select-icon {\n  width: 20px !important;\n  height: 20px !important;\n  color: #871187 !important;\n}\n\n.generate-card {\n  margin: 1.125em;\n  border: 2px solid #871178;\n  border-radius: 0%;\n}\n\n.generate {\n  width: 186px;\n}\n\n.generate .reach {\n  font-size: 16px;\n  margin: 0px;\n  margin-top: 6px;\n  color: #22272a;\n}\n\n.aligncol {\n  text-align: right;\n}\n\n.generate .id {\n  font-size: 16px;\n  margin: 0px;\n  margin-top: 6px;\n  color: #871178;\n}\n\n.gpay {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.78125em;\n}\n\n.gpay img {\n  width: 4em;\n  height: 1.53125em;\n}\n\n.gpay .qr {\n  height: 15.8125em;\n  width: 15.8125em;\n}\n\n.gpay .phone {\n  color: #871178;\n  font-size: 1.125em;\n  margin-bottom: 1.5625em;\n}\n\n.note {\n  color: #871178;\n  font-size: 0.875em;\n  margin-bottom: 1.5625em;\n  margin-left: 6px;\n}\n\nspan {\n  color: #707070;\n  font-size: 0.875em;\n}\n\n.fifth {\n  margin: 1.125em;\n  border: 2px solid #871178;\n  border-radius: 0%;\n  padding: 2.5em 1.5em;\n}\n\n.rowa {\n  height: 12em;\n  background-color: #f5f5f5;\n}\n\n.rowb {\n  width: 100%;\n}\n\n.bground {\n  width: 100%;\n  height: 4.25em;\n  background: linear-gradient(#871178, #3c1378);\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.bground ion-avatar {\n  width: 4.0625em;\n  height: 4.0625em;\n  margin-left: 20px;\n}\n\n.thick-border {\n  width: 9px;\n  height: 36px;\n  background: #00000029;\n  border-radius: 25px;\n  position: absolute;\n  top: 63px;\n}\n\n.nam p {\n  margin: 0px;\n  color: #22272a;\n  font-size: 18px;\n  position: absolute;\n  top: 60px;\n  left: 140px;\n  max-width: -webkit-min-content;\n  max-width: -moz-min-content;\n  max-width: min-content;\n}\n\n.refer {\n  margin-top: 24px;\n  margin-left: 20px;\n}\n\n.refer ion-col {\n  padding: 0%;\n}\n\n.refer .reach {\n  margin: 0px;\n  color: #22272a;\n  font-size: 14px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.refer .id {\n  font-size: 16px;\n  margin: 0px;\n  color: #871178;\n  font-size: 14px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  text-align: left;\n}\n\n.vehic {\n  margin-left: 20px;\n}\n\n.vehic ion-col {\n  padding: 0px;\n}\n\n.vehic p {\n  font-size: 11px;\n  color: #22272a;\n  margin: 0px;\n}\n\n.vehic .vehicno {\n  font-size: 11px;\n  color: #707070;\n  text-align: left;\n  margin: 0%;\n}\n\n.noteclas {\n  margin-left: 20px;\n}\n\n.noteclass {\n  color: #871178;\n  font-size: 9px;\n  margin: 0%;\n}\n\n.noteclass span {\n  color: #707070;\n}\n\n.qrclas {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.qrr {\n  width: 60px;\n  height: 60px;\n}\n\n.choose {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0.3125em;\n}\n\n.rupees p {\n  font-size: 20px;\n  color: #871178;\n  margin-bottom: 0%;\n}\n\n.rupees p span {\n  color: #22272a;\n  font-size: 18px;\n}\n\n.stickers p {\n  color: #707070;\n  font-size: 16px;\n  margin-top: 10px;\n}\n\n.choose .center {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.last-grid {\n  margin: 0.3125em;\n}\n\n.last-grid .left {\n  text-align: left;\n  text-decoration: underline;\n  color: #871178;\n  font-size: 0.875em;\n}\n\n.last-grid .right {\n  text-align: right;\n  text-decoration: underline;\n  color: #871178;\n  font-size: 0.875em;\n}\n\n.button .lef {\n  text-align: left;\n}\n\n.button .righ {\n  text-align: right;\n}\n\n.button .lef ion-button {\n  --background: #ffffff;\n  --color: #871178;\n  border: 2px solid #871178;\n  text-transform: capitalize;\n  font-size: 18px;\n  width: 123px;\n  height: 50px;\n  border-radius: 0.1875em;\n}\n\n.button .righ ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 18px;\n  width: 123px;\n  height: 50px;\n  border-radius: 0.1875em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXQtcXItcmVhY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFPSjs7QUFIQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQU9KOztBQUxBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFRSjs7QUFKQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFRSjs7QUFOQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQVNKOztBQU5BO0VBQ0ksVUFBQTtBQVNKOztBQU5BO0VBQ0ksV0FBQTtBQVNKOztBQVBBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFVSjs7QUFSQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHVCQUFBO0FBV0o7O0FBUkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBV0o7O0FBVEE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7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Q0o7O0FBZ0RBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBN0NKOztBQStDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUE1Q0o7O0FBOENBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUEzQ0o7O0FBNkNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTFDSjs7QUE0Q0E7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUF6Q0o7O0FBNENBO0VBQ0ksZ0JBQUE7QUF6Q0o7O0FBMkNBO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQXhDSjs7QUEwQ0E7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBdkNKOztBQTBDQTtFQUNJLGdCQUFBO0FBdkNKOztBQXlDQTtFQUNJLGlCQUFBO0FBdENKOztBQXdDQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFyQ0o7O0FBdUNBO0VBQ0ksK0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFwQ0oiLCJmaWxlIjoiZWRpdC1xci1yZWFjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4vLyBmaXJzdC1jYXJkXHJcbi5maXJzdCB7XHJcbiAgICBtYXJnaW46IDFlbSAxLjEyNWVtO1xyXG59XHJcbi5yb3cge1xyXG4gICAgaGVpZ2h0OiAxNC40ZW07XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkuMzc1ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzQ0MDkzYyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiAxNDZweDtcclxuICAgIGhlaWdodDogMTQ2cHg7XHJcbn1cclxuaW9uLWF2YXRhciBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG59XHJcbi5wb3NpdGlvbi1jYW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTJweDtcclxuICAgIHRvcDogMzdweDtcclxufVxyXG5cclxuLy8gc2Vjb25kLWNhcmRcclxuLnNlY29uZCB7XHJcbiAgICBtYXJnaW46IDEuNjI1ZW0gMS4xMjVlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbn1cclxuLnNlY29uZCAucmVhY2gge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbn1cclxuLnNlY29uZCAuaWQge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuXHJcbi8vIGltYWdlLWNhcmRcclxuLmltYWdlLWNhcmQge1xyXG4gICAgbWFyZ2luOiAxLjc1ZW0gMS4xMjVlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbWFnZS1jYXJkIHAge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG4uaW1hZ2UtY2FyZCBpbWcge1xyXG4gICAgd2lkdGg6IDYuNDNlbTtcclxuICAgIGhlaWdodDogNi40M2VtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG4vLyB0aGlyZC1jYXJkXHJcbi50aGlyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udGhpcmQgcCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi50aGlyZCBpbWcge1xyXG4gICAgd2lkdGg6IDYuNDNlbTtcclxuICAgIGhlaWdodDogNi40M2VtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjE4NzVlbTtcclxufVxyXG5cclxuLmhlYWRpbmcgcCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgbWFyZ2luOiAwLjVlbSAwcHg7XHJcbn1cclxuLmFucyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNjI1ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbn1cclxuaDYge1xyXG4gICAgbWFyZ2luOiAwLjMxMjVlbSAwJTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaDQge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDFlbSAwcHg7XHJcbn1cclxuXHJcbi8vZm91cnRoLWNhcmRcclxuaW9uLWhlYWRlciBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5pb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLy8gLmZpcnN0IHtcclxuLy8gICAgIG1hcmdpbjogMWVtIDEuMTI1ZW07XHJcbi8vIH1cclxuLy8gLnJvdyB7XHJcbi8vICAgICBoZWlnaHQ6IDEyZW07XHJcbi8vIH1cclxuLy8gaW9uLWNhcmQge1xyXG4vLyAgICAgYm9yZGVyOiBub25lO1xyXG4vLyAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuLy8gfVxyXG4vLyAuYmcge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDkuMzc1ZW07XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzQ0MDkzYyk7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyB9XHJcbi8vIGlvbi1hdmF0YXIge1xyXG4vLyAgICAgd2lkdGg6IDguMTg3NWVtO1xyXG4vLyAgICAgaGVpZ2h0OiA4LjE4NzVlbTtcclxuLy8gICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC8vIHNlY29uZC1jYXJkXHJcbi8vIC5zZWNvbmQge1xyXG4vLyAgICAgbWFyZ2luOiAxLjYyNWVtIDEuMTI1ZW07XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4vLyB9XHJcbi8vIC5zZWNvbmQgLnJlYWNoIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4vLyAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuLy8gICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4vLyB9XHJcbi8vIC5zZWNvbmQgLmlkIHtcclxuLy8gICAgIG1hcmdpbjogMTBweDtcclxuLy8gICAgIGNvbG9yOiAjODcxMTc4O1xyXG4vLyB9XHJcblxyXG4vLyAvLyB0aGlyZC1jYXJkXHJcbi8vIC50aGlyZCB7XHJcbi8vICAgICBtYXJnaW46IDEuNzVlbSAyLjE4NzVlbTtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyB9XHJcbi8vIC50aGlyZCBwIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4vLyAgICAgY29sb3I6ICM4NzExNzg7XHJcbi8vIH1cclxuLy8gLnRoaXJkIGltZyB7XHJcbi8vICAgICB3aWR0aDogNi40M2VtO1xyXG4vLyAgICAgaGVpZ2h0OiA2LjQzZW07XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDIuMTg3NWVtO1xyXG4vLyB9XHJcblxyXG4vLyAuaGVhZGluZyBwIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4vLyAgICAgY29sb3I6ICM4NzExNzg7XHJcbi8vICAgICBtYXJnaW46IDAuNWVtIDBweDtcclxuLy8gfVxyXG4vLyAuYW5zIHAge1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4vLyAgICAgY29sb3I6ICMyMjI3MmE7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMC42MjVlbTtcclxuLy8gICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuLy8gfVxyXG4vLyBoNiB7XHJcbi8vICAgICBtYXJnaW46IDAuMzEyNWVtIDAlO1xyXG4vLyAgICAgY29sb3I6ICMyMjI3MmE7XHJcbi8vIH1cclxuXHJcbi5zZWxlY3Qtcm93IHtcclxuICAgIG1hcmdpbi1yaWdodDogMThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5zZWxlY3Qge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuLnNlbGVjdC10ZXh0IHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbmxhYmVsIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5zZWxlY3QtaWNvbiB7XHJcbiAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzg3MTE4NyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBoNCB7XHJcbi8vICAgICBjb2xvcjogIzg3MTE3ODtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIG1hcmdpbjogMWVtIDBweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDZweDtcclxuLy8gfVxyXG5cclxuLy9mb3VydGgtY2FyZFxyXG4uZ2VuZXJhdGUtY2FyZCB7XHJcbiAgICBtYXJnaW46IDEuMTI1ZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODcxMTc4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbn1cclxuLmdlbmVyYXRlIHtcclxuICAgIHdpZHRoOiAxODZweDtcclxufVxyXG4uZ2VuZXJhdGUgLnJlYWNoIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbn1cclxuLmFsaWduY29sIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5nZW5lcmF0ZSAuaWQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuLmdwYXkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjc4MTI1ZW07XHJcbn1cclxuLmdwYXkgaW1nIHtcclxuICAgIHdpZHRoOiA0ZW07XHJcbiAgICBoZWlnaHQ6IDEuNTMxMjVlbTtcclxufVxyXG4uZ3BheSAucXIge1xyXG4gICAgaGVpZ2h0OiAxNS44MTI1ZW07XHJcbiAgICB3aWR0aDogMTUuODEyNWVtO1xyXG59XHJcbi5ncGF5IC5waG9uZSB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNTYyNWVtO1xyXG59XHJcbi5ub3RlIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcbnNwYW4ge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbn1cclxuXHJcbi8vZmlmdGgtY2FyZFxyXG4uZmlmdGgge1xyXG4gICAgbWFyZ2luOiAxLjEyNWVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzg3MTE3ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgcGFkZGluZzogMi41ZW0gMS41ZW07XHJcbn1cclxuLnJvd2Ege1xyXG4gICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG4ucm93YiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYmdyb3VuZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNC4yNWVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJncm91bmQgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNC4wNjI1ZW07XHJcbiAgICBoZWlnaHQ6IDQuMDYyNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnRoaWNrLWJvcmRlciB7XHJcbiAgICB3aWR0aDogOXB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjNweDtcclxufVxyXG4ubmFtIHAge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjBweDtcclxuICAgIGxlZnQ6IDE0MHB4O1xyXG4gICAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcclxufVxyXG4vLyAucmVmZXIgcCB7XHJcbi8vICAgICBjb2xvcjogIzFlMWUxZTtcclxuLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbi8vIH1cclxuLy8gLnJlZmVyIHAgc3BhbiB7XHJcbi8vICAgICBjb2xvcjogIzg3MTE3ODtcclxuLy8gfVxyXG4ucmVmZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5yZWZlciBpb24tY29sIHtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG59XHJcbi5yZWZlciAucmVhY2gge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLnJlZmVyIC5pZCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4udmVoaWMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnZlaGljIGlvbi1jb2wge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi52ZWhpYyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnZlaGljIC52ZWhpY25vIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbjogMCU7XHJcbn1cclxuLm5vdGVjbGFzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5ub3RlY2xhc3Mge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIG1hcmdpbjogMCU7XHJcbn1cclxuLm5vdGVjbGFzcyBzcGFuIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcbi5xcmNsYXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbi5xcnIge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5jaG9vc2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAuMzEyNWVtO1xyXG59XHJcbi5ydXBlZXMgcCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIG1hcmdpbi1ib3R0b206IDAlO1xyXG59XHJcbi5ydXBlZXMgcCBzcGFuIHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zdGlja2VycyBwIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uY2hvb3NlIC5jZW50ZXIge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmxhc3QtZ3JpZCB7XHJcbiAgICBtYXJnaW46IDAuMzEyNWVtO1xyXG59XHJcbi5sYXN0LWdyaWQgLmxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbn1cclxuLmxhc3QtZ3JpZCAucmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG59XHJcblxyXG4uYnV0dG9uIC5sZWYge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYnV0dG9uIC5yaWdoIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5idXR0b24gLmxlZiBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICM4NzExNzg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODcxMTc4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogMTIzcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjE4NzVlbTtcclxufVxyXG4uYnV0dG9uIC5yaWdoIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogMTIzcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjE4NzVlbTtcclxufVxyXG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=edit-qr-reach-edit-qr-reach-module-es5.js.map