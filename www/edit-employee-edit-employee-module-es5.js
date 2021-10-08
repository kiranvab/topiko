(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-employee-edit-employee-module"], {
    /***/
    "S0s0": function S0s0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditEmployeePage", function () {
        return EditEmployeePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_employee_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-employee.page.html */
      "aFqA");
      /* harmony import */


      var _edit_employee_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-employee.page.scss */
      "m3mC");
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");

      var EditEmployeePage = /*#__PURE__*/function () {
        function EditEmployeePage(storage, http, router) {
          _classCallCheck(this, EditEmployeePage);

          this.storage = storage;
          this.http = http;
          this.router = router;
        }

        _createClass(EditEmployeePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("empid").then(function (val) {
              _this.emp_id = val;
              console.log("Employee ID", _this.emp_id);

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "getemployee.php?empid=" + _this.emp_id).subscribe(function (response) {
                _this.empdata = response;
                _this.name = _this.empdata[0].name;
                _this.mobile = _this.empdata[0].mobile;
                _this.designation = _this.empdata[0].designation;
                _this.language = _this.empdata[0].language;
                console.log(_this.empdata);
              });
            });
          }
        }, {
          key: "Chatstatus",
          value: function Chatstatus(isChecked) {
            if (isChecked == true) {
              isChecked = true;
              this.chat = 1;
            } else {
              isChecked = false;
              this.chat = 0;
            }

            console.log(isChecked);
          }
        }, {
          key: "VideoStatus",
          value: function VideoStatus(isChecked) {
            if (isChecked == true) {
              isChecked = true;
              this.video = 1;
            } else {
              isChecked = false;
              this.video = 0;
            }

            console.log(isChecked);
          }
        }, {
          key: "Callstatus",
          value: function Callstatus(isChecked) {
            if (isChecked == true) {
              isChecked = true;
              this.call = 1;
            } else {
              isChecked = false;
              this.call = 0;
            }

            console.log(isChecked);
          }
        }, {
          key: "Deliverystatus",
          value: function Deliverystatus(isChecked) {
            if (isChecked == true) {
              isChecked = true;
              this.delivery = 1;
            } else {
              isChecked = false;
              this.delivery = 0;
            }

            console.log(isChecked);
          }
        }, {
          key: "Recordstatus",
          value: function Recordstatus(isChecked) {
            if (isChecked == true) {
              isChecked = true;
              this.callrecord = 1;
            } else {
              isChecked = false;
              this.callrecord = 0;
            }

            console.log(isChecked);
          }
        }, {
          key: "Invoicestatus",
          value: function Invoicestatus(isChecked) {
            if (isChecked == true) {
              isChecked = true;
              this.invoice = 1;
            } else {
              isChecked = false;
              this.invoice = 0;
            }

            console.log(isChecked);
          }
        }, {
          key: "update",
          value: function update() {
            var _this2 = this;

            var link = _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "updateemployee.php";
            var emp = JSON.stringify({
              "empid": this.emp_id,
              "name": this.name,
              "mobile": this.mobile,
              "designation": this.designation,
              "language": this.language,
              'chat': this.chat,
              'video': this.video,
              'call': this.call,
              'callrecord': this.callrecord,
              'invoice': this.invoice,
              'delivery': this.delivery
            });
            console.log(emp);
            this.http.post(link, emp).subscribe(function (Response) {
              _this2.upd = Response;
              console.log(_this2.upd);

              if (_this2.upd == 1) {
                alert("Employee Updated Sucesfully");

                _this2.router.navigate(['employee']);
              } else {
                alert("Failed To Update Employee");
              }
            });
          }
        }]);

        return EditEmployeePage;
      }();

      EditEmployeePage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      EditEmployeePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-edit-employee',
        template: _raw_loader_edit_employee_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_employee_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditEmployeePage);
      /***/
    },

    /***/
    "aFqA": function aFqA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Edit Employee</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngFor=\"let emp of empdata; let i = index;\">\n  <ion-card class=\"first\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img\n            src=\"{{emp.image}}\"\n            alt=\"\">\n        </ion-avatar>\n        <!-- <img class=\"position-cam\" src=\"assets/camera.svg\" alt=\"\"> -->\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-grid>\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Employee name\" [(ngModel)]=\"name\"></ion-input>\n      </ion-item>\n    </p>\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Employee number\"  [(ngModel)]=\"mobile\"></ion-input>\n      </ion-item>\n    </p>\n    <p>\n      Designation Tags\n      <ion-row>\n        <ion-textarea  [(ngModel)]=\"designation\">\n          \n        </ion-textarea>\n      </ion-row>\n    </p>\n    <p>\n      Language Support\n      <ion-row>\n        <ion-textarea [(ngModel)]=\"language\">\n        \n        </ion-textarea>\n      </ion-row>\n    </p>\n    <p>\n      Online Tele Support\n      <ion-row class=\"check\">\n        <ion-col>\n          <ion-checkbox   [(ngModel)]=\"chat\" (ionChange)=\"Chatstatus(chat)\" ></ion-checkbox>\n          <ion-label> Chat</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]=\"video\" (ionChange)=\"VideoStatus(video)\" ></ion-checkbox>\n          <ion-label> Video</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]=\"call\" (ionChange)=\"Callstatus(call)\"></ion-checkbox>\n          <ion-label> Call</ion-label>\n        </ion-col>\n      </ion-row>\n    </p>\n    \n    <p>\n      Delivery Support\n      <ion-row class=\"check\">\n        <ion-col>\n          <ion-checkbox [(ngModel)]=\"delivery\" (ionChange)=\"Deliverystatus(delivery)\"></ion-checkbox>\n          <ion-label> Delivery</ion-label>\n        </ion-col>\n      </ion-row>\n    </p>\n\n    <ion-row class=\"tog\">\n      <p class=\"gps\">Call Record Access</p>\n      <ion-toggle checked [(ngModel)]=\"callrecord\" (ionChange)=\"Recordstatus(callrecord)\" mode=\"md\"></ion-toggle>\n    </ion-row>\n    <ion-row class=\"tog\">\n      <p class=\"gps\">Create Invoice</p>\n      <ion-toggle checked mode=\"md\" [(ngModel)]=\"invoice\" (ionChange)=\"Invoicestatus(invoice)\"></ion-toggle>\n    </ion-row>\n    <h6>Work Hour Settings</h6>\n    <p>\n      <ion-item>\n        <ion-select placeholder=\"Working Hours\"></ion-select>\n      </ion-item>\n    </p>\n    <ion-row class=\"branches\">\n      <ion-col>\n        <div class=\"select\">\n          <ion-select placeholder=\"Select One\" value=\"recent\" interface=\"popover\" mode=\"ios\">\n            <ion-select-option value=\"recent\" selected>Branches</ion-select-option>\n            <ion-select-option value=\"like\">Orders</ion-select-option>\n            <ion-select-option value=\"favourites\">Enquiry</ion-select-option>\n            <ion-select-option value=\"comments\">Customer</ion-select-option>\n          </ion-select>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-card class=\"card\">\n      <ion-row>\n        <ion-col class=\"address\">\n          <p>Address</p>\n          <ion-row class=\"add\">\n            <p>No-1/38 Parathiyar street moovara pet madipkkam Chennai-600091 TamilNadu - India</p>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"4\">\n          <img\n            src=\"https://play-lh.googleusercontent.com/0uRNRSe4iS6nhvfbBcoScHcBTx1PMmxkCx8rrEsI2UQcQeZ5ByKz8fkhwRqR3vttOg\"\n            alt=\"\">\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <p class=\"sun\">Sun water group payment QR</p>\n    <p class=\"qr\">\n      <ion-icon name=\"qr-code-outline\"></ion-icon>\n    </p>\n    <ion-row class=\"check\">\n      <ion-col size=\"1\">\n        <ion-checkbox checked></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"confirm\">I agree for the <span>Terms and Conditions</span></p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"btn\">\n      <ion-button (click)=\"update()\">Submit</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "m3mC": function m3mC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: center;\n}\n\n.first {\n  margin: 1em 1.125em;\n}\n\n.row {\n  height: 14.4em;\n}\n\nion-card {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 146px;\n  height: 146px;\n}\n\nion-avatar img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 50%;\n}\n\n.position-cam {\n  position: relative;\n  left: 52px;\n  top: 37px;\n}\n\nion-grid {\n  margin: 14px 18px;\n  padding: 0px;\n}\n\nion-grid p {\n  margin: 30px 0px;\n}\n\nion-textarea {\n  border: 1px solid #707070;\n  width: 100%;\n  opacity: 70%;\n  border-radius: 0.3125em;\n}\n\nion-chip {\n  font-size: 0.75em;\n  margin: 10px;\n}\n\n.toggle {\n  display: flex;\n  justify-content: space-between;\n}\n\n.toggle p {\n  font-size: 1em;\n  color: #22272a;\n  margin: 1em 0px;\n}\n\n.toggle ion-col {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\nion-row ion-toggle {\n  --width: 34px;\n  --height: 14px;\n  --background-checked: linear-gradient(#871178, #3c1378);\n  --handle-background-checked: #9f9f9f;\n  padding-top: 0.71875em;\n}\n\nh6 {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.select {\n  float: right;\n  color: #871178;\n}\n\n.branches {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.branches p {\n  color: #871178;\n  font-size: 1em;\n  margin-top: 1em;\n  margin-bottom: 0px;\n}\n\n.card {\n  box-shadow: 0px 0.1875em 0.375em #00000029;\n  margin: 0px;\n  padding: 0px;\n}\n\n.address p {\n  margin: 0.3125em;\n  font-size: 1em;\n  color: #707070;\n}\n\n.add p {\n  margin: 0.3125em;\n  font-size: 0.875em;\n  color: #22272a;\n  line-height: 2em;\n}\n\n.sun {\n  text-align: center;\n  font-size: 1em;\n  color: #22272a;\n}\n\n.qr {\n  text-align: center;\n}\n\n.qr ion-icon {\n  color: #871178;\n  width: 110px;\n  height: 110px;\n}\n\n.check {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n}\n\nion-col .confirm {\n  font-size: 0.75em;\n  color: #22272a;\n  margin-top: 0%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n}\n\n.confirm span {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n}\n\n.btn ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 0.75em;\n  width: 7.6875em;\n  height: 3.125em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVkaXQtZW1wbG95ZWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFPSjs7QUFKQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUxBO0VBQ0ksZ0JBQUE7QUFRSjs7QUFOQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQVNKOztBQVBBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBVUo7O0FBUkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFXSjs7QUFUQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVZBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFhSjs7QUFYQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdURBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FBY0o7O0FBWEE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUFjSjs7QUFaQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBZUo7O0FBYkE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7QUFnQko7O0FBZEE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWlCSjs7QUFmQTtFQUNJLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFrQko7O0FBaEJBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQW1CSjs7QUFqQkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBb0JKOztBQWxCQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFxQko7O0FBbkJBO0VBQ0ksa0JBQUE7QUFzQko7O0FBcEJBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBdUJKOztBQXJCQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUEwQko7O0FBeEJBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FBMkJKOztBQXhCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQTJCSjs7QUF6QkE7RUFDSSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBNEJKIiwiZmlsZSI6ImVkaXQtZW1wbG95ZWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5pb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyBmaXJzdC1jYXJkXHJcbi5maXJzdCB7XHJcbiAgICBtYXJnaW46IDFlbSAxLjEyNWVtO1xyXG59XHJcbi5yb3cge1xyXG4gICAgaGVpZ2h0OiAxNC40ZW07XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkuMzc1ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzQ0MDkzYyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiAxNDZweDtcclxuICAgIGhlaWdodDogMTQ2cHg7XHJcbn1cclxuaW9uLWF2YXRhciBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG59XHJcbi5wb3NpdGlvbi1jYW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTJweDtcclxuICAgIHRvcDogMzdweDtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gICAgbWFyZ2luOiAxNHB4IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuaW9uLWdyaWQgcCB7XHJcbiAgICBtYXJnaW46IDMwcHggMHB4O1xyXG59XHJcbmlvbi10ZXh0YXJlYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiA3MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVlbTtcclxufVxyXG5pb24tY2hpcCB7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4udG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnRvZ2dsZSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBtYXJnaW46IDFlbSAwcHg7XHJcbn1cclxuLnRvZ2dsZSBpb24tY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1yb3cgaW9uLXRvZ2dsZSB7XHJcbiAgICAtLXdpZHRoOiAzNHB4O1xyXG4gICAgLS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjOWY5ZjlmO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNzE4NzVlbTtcclxufVxyXG5cclxuaDYge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uc2VsZWN0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5icmFuY2hlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG59XHJcbi5icmFuY2hlcyBwIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDAuMTg3NWVtIDAuMzc1ZW0gIzAwMDAwMDI5O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmFkZHJlc3MgcCB7XHJcbiAgICBtYXJnaW46IDAuMzEyNWVtO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG4uYWRkIHAge1xyXG4gICAgbWFyZ2luOiAwLjMxMjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcclxufVxyXG4uc3VuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbn1cclxuLnFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG59XHJcbi5jaGVjayB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5pb24tY2hlY2tib3gge1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzcwNzA3MDtcclxuICAgIG9wYWNpdHk6IDcwJTtcclxuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjODcxMTc4O1xyXG4gICAgLS1jaGVja21hcmstd2lkdGg6IDQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbmlvbi1jb2wgLmNvbmZpcm0ge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XHJcbn1cclxuLmNvbmZpcm0gc3BhbiB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYnRuIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIHdpZHRoOiA3LjY4NzVlbTtcclxuICAgIGhlaWdodDogMy4xMjVlbTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "rYcg": function rYcg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditEmployeePageRoutingModule", function () {
        return EditEmployeePageRoutingModule;
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


      var _edit_employee_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-employee.page */
      "S0s0");

      var routes = [{
        path: '',
        component: _edit_employee_page__WEBPACK_IMPORTED_MODULE_3__["EditEmployeePage"]
      }];

      var EditEmployeePageRoutingModule = function EditEmployeePageRoutingModule() {
        _classCallCheck(this, EditEmployeePageRoutingModule);
      };

      EditEmployeePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditEmployeePageRoutingModule);
      /***/
    },

    /***/
    "uo0V": function uo0V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditEmployeePageModule", function () {
        return EditEmployeePageModule;
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


      var _edit_employee_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-employee-routing.module */
      "rYcg");
      /* harmony import */


      var _edit_employee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-employee.page */
      "S0s0");

      var EditEmployeePageModule = function EditEmployeePageModule() {
        _classCallCheck(this, EditEmployeePageModule);
      };

      EditEmployeePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_employee_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditEmployeePageRoutingModule"]],
        declarations: [_edit_employee_page__WEBPACK_IMPORTED_MODULE_6__["EditEmployeePage"]]
      })], EditEmployeePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=edit-employee-edit-employee-module-es5.js.map