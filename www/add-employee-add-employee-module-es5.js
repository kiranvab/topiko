(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-employee-add-employee-module"], {
    /***/
    "1+uD": function uD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEmployeePageRoutingModule", function () {
        return AddEmployeePageRoutingModule;
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


      var _add_employee_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-employee.page */
      "4U3x");

      var routes = [{
        path: '',
        component: _add_employee_page__WEBPACK_IMPORTED_MODULE_3__["AddEmployeePage"]
      }];

      var AddEmployeePageRoutingModule = function AddEmployeePageRoutingModule() {
        _classCallCheck(this, AddEmployeePageRoutingModule);
      };

      AddEmployeePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddEmployeePageRoutingModule);
      /***/
    },

    /***/
    "4U3x": function U3x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEmployeePage", function () {
        return AddEmployeePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_employee_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-employee.page.html */
      "hs4o");
      /* harmony import */


      var _add_employee_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-employee.page.scss */
      "TElT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");

      var AddEmployeePage = /*#__PURE__*/function () {
        function AddEmployeePage(storage, http, route, camera) {
          _classCallCheck(this, AddEmployeePage);

          this.storage = storage;
          this.http = http;
          this.route = route;
          this.camera = camera;
        }

        _createClass(AddEmployeePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("mybusiness").then(function (val) {
              _this.mybusiness = val;
              console.log("My business Details:", _this.mybusiness);
              _this.owner = _this.mybusiness[0].owner_name;
              _this.address = _this.mybusiness[0].business_address;
              _this.busines_name = _this.mybusiness[0].business_name;
              _this.buid = _this.mybusiness[0].id;

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getemployees.php?bid=" + _this.bid).subscribe(function (data) {
                _this.employees = data;
                console.log("Employees", _this.employees);
              });

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getbranches.php?bid=" + _this.buid).subscribe(function (branch) {
                _this.branches = branch;
                console.log("business Branches:", _this.branches);
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
          key: "adduserImage",
          value: function adduserImage() {
            var _this2 = this;

            var options = {
              quality: 100,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              var base64Image = 'data:image/jpeg;base64,' + imageData;
              _this2.user_image = base64Image;
            }, function (err) {});
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this3 = this;

            var link = _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "addemployee.php";
            var myData = JSON.stringify({
              "bid": this.buid,
              "branch_id": this.branch,
              'name': this.name,
              'mobile': this.mobile,
              'tags': this.tags,
              'language': this.language,
              'chat': this.chat,
              'video': this.video,
              'call': this.call,
              'delivery': this.delivery,
              'user_image': this.user_image,
              'payment_image': this.payment_image,
              'callrecord': this.callrecord,
              'invoice': this.invoice
            });
            console.log(myData);
            this.http.post(link, myData).subscribe(function (response) {
              _this3.response = response;
              console.log(_this3.response);

              if (_this3.response == 1) {
                alert("employee added sucessfully");

                _this3.route.navigate(['/employee']);
              }
            });
          }
        }]);

        return AddEmployeePage;
      }();

      AddEmployeePage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
        }];
      };

      AddEmployeePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-employee',
        template: _raw_loader_add_employee_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_employee_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddEmployeePage);
      /***/
    },

    /***/
    "TElT": function TElT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.row {\n  height: 12em;\n  background: #ffffff;\n}\n\n.firstcard {\n  border: none;\n  box-shadow: none;\n  margin: 0.75em 1.125em;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 8.1875em;\n  height: 8.1875em;\n  margin-top: 90px;\n}\n\nion-grid {\n  margin: 14px 18px;\n  padding: 0px;\n}\n\nion-grid p {\n  margin: 30px 0px;\n}\n\nion-textarea {\n  border: 1px solid #707070;\n  width: 100%;\n  opacity: 70%;\n  border-radius: 0.3125em;\n}\n\nion-chip {\n  font-size: 0.75em;\n  margin: 10px;\n}\n\nion-row .gps {\n  font-size: 16px;\n  color: #22272a;\n  line-height: 1.3125em;\n}\n\nion-row ion-toggle {\n  --width: 34px;\n  --height: 14px;\n  --background-checked: linear-gradient(#871178, #3c1378);\n  --handle-background-checked: #9f9f9f;\n  padding-top: 0.71875em;\n  float: right;\n}\n\n.tog {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nh6 {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.branches {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.branches p {\n  color: #871178;\n  font-size: 1em;\n  margin-top: 1em;\n  margin-bottom: 0px;\n}\n\n.card {\n  box-shadow: 0px 0.1875em 0.375em #00000029;\n  margin: 0px;\n  padding: 0px;\n}\n\n.address p {\n  margin: 0.3125em;\n  font-size: 1em;\n  color: #707070;\n}\n\n.add p {\n  margin: 0.3125em;\n  font-size: 0.875em;\n  color: #22272a;\n  line-height: 2em;\n}\n\n.sun {\n  text-align: center;\n  font-size: 1em;\n  color: #22272a;\n}\n\n.qr {\n  text-align: center;\n}\n\n.qr ion-icon {\n  color: #871178;\n  width: 110px;\n  height: 110px;\n}\n\n.check {\n  margin-top: 6px;\n  margin-bottom: -8px;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n}\n\nion-col .confirm {\n  font-size: 0.75em;\n  color: #22272a;\n  margin-top: 0%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n}\n\n.confirm span {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n}\n\n.btn ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 16px;\n  width: 7.6875em;\n  height: 3.125em;\n}\n\nion-select {\n  --placeholder-opacity: 100%;\n  --padding-start: 0px;\n}\n\nion-input {\n  --placeholder-opacity: 1 !important;\n  --padding-start: 0px;\n}\n\nion-item {\n  --padding-start: 0px;\n}\n\nion-label {\n  position: absolute;\n  bottom: 8px;\n  left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZC1lbXBsb3llZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQU9KOztBQUxBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBUUo7O0FBTkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVEQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFTSjs7QUFQQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBVUo7O0FBUEE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUFVSjs7QUFSQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtBQVdKOztBQVRBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFZSjs7QUFWQTtFQUNJLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFhSjs7QUFYQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFjSjs7QUFaQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFlSjs7QUFiQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFnQko7O0FBZEE7RUFDSSxrQkFBQTtBQWlCSjs7QUFmQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQWtCSjs7QUFoQkE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFtQko7O0FBakJBO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUFvQko7O0FBbEJBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFxQko7O0FBbkJBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FBc0JKOztBQW5CQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQXNCSjs7QUFwQkE7RUFDSSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUF1Qko7O0FBckJBO0VBQ0ksMkJBQUE7RUFDQSxvQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxtQ0FBQTtFQUNBLG9CQUFBO0FBeUJKOztBQXZCQTtFQUNJLG9CQUFBO0FBMEJKOztBQXhCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUEyQkoiLCJmaWxlIjoiYWRkLWVtcGxveWVlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIGhlaWdodDogMTJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuLmZpcnN0Y2FyZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWFyZ2luOiAwLjc1ZW0gMS4xMjVlbTtcclxufVxyXG4uYmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkuMzc1ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzQ0MDkzYyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDguMTg3NWVtO1xyXG4gICAgaGVpZ2h0OiA4LjE4NzVlbTtcclxuICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuaW9uLWdyaWQge1xyXG4gICAgbWFyZ2luOiAxNHB4IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuaW9uLWdyaWQgcCB7XHJcbiAgICBtYXJnaW46IDMwcHggMHB4O1xyXG59XHJcbmlvbi10ZXh0YXJlYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiA3MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVlbTtcclxufVxyXG5pb24tY2hpcCB7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuaW9uLXJvdyAuZ3BzIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzEyNWVtO1xyXG59XHJcbmlvbi1yb3cgaW9uLXRvZ2dsZSB7XHJcbiAgICAtLXdpZHRoOiAzNHB4O1xyXG4gICAgLS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjOWY5ZjlmO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNzE4NzVlbTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4udG9nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oNiB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5icmFuY2hlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG59XHJcbi5icmFuY2hlcyBwIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDAuMTg3NWVtIDAuMzc1ZW0gIzAwMDAwMDI5O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmFkZHJlc3MgcCB7XHJcbiAgICBtYXJnaW46IDAuMzEyNWVtO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG4uYWRkIHAge1xyXG4gICAgbWFyZ2luOiAwLjMxMjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcclxufVxyXG4uc3VuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbn1cclxuLnFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG59XHJcbi5jaGVjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xyXG59XHJcbmlvbi1jaGVja2JveCB7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjNzA3MDcwO1xyXG4gICAgb3BhY2l0eTogNzAlO1xyXG4gICAgLS1jaGVja21hcmstY29sb3I6ICM4NzExNzg7XHJcbiAgICAtLWNoZWNrbWFyay13aWR0aDogNDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLWNvbCAuY29uZmlybSB7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcclxufVxyXG4uY29uZmlybSBzcGFuIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5idG4gaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiA3LjY4NzVlbTtcclxuICAgIGhlaWdodDogMy4xMjVlbTtcclxufVxyXG5pb24tc2VsZWN0IHtcclxuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTAwJTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "hs4o": function hs4o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Employee</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"firstcard\" (click)=\"adduserImage()\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img\n            src=\"https://banner2.cleanpng.com/20180319/sue/kisspng-camera-computer-icons-android-camera-icon-android-camera-shutter-icon-5ab02d20a19642.3023672915214953286619.jpg\"\n            alt=\"\">\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-grid>\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Employee name\" [(ngModel)]=\"name\"></ion-input>\n      </ion-item>\n    </p>\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Employee number\" [(ngModel)]=\"mobile\"></ion-input>\n      </ion-item>\n    </p>\n    <p>\n      Designation Tags\n      <ion-row>\n        <ion-textarea [(ngModel)]=\"tags\" placeholder=\"add designations with comma seperated\">\n\n        </ion-textarea>\n      </ion-row>\n    </p>\n    <p>\n      Language Support\n      <ion-row>\n        <ion-textarea [(ngModel)]=\"language\" placeholder=\"add languages with comma seperated\">\n        </ion-textarea>\n      </ion-row>\n    </p>\n    <p>\n      Online Tele Support\n      <ion-row class=\"check\">\n        <ion-col>\n          <ion-checkbox [(ngModel)]=\"chat\" (ionChange)=\"Chatstatus(chat)\"></ion-checkbox>\n          <ion-label> Chat</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]=\"video\" (ionChange)=\"VideoStatus(video)\"></ion-checkbox>\n          <ion-label> Video</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]=\"call\" (ionChange)=\"Callstatus(call)\"></ion-checkbox>\n          <ion-label> Call</ion-label>\n        </ion-col>\n      </ion-row>\n    </p>\n    <p>\n      Delivery Support\n      <ion-row class=\"check\" style=\"margin-bottom: 0%;\">\n        <ion-col>\n          <ion-checkbox [(ngModel)]=\"delivery\" (ionChange)=\"Deliverystatus(delivery)\"></ion-checkbox>\n          <ion-label> Delivery</ion-label>\n        </ion-col>\n      </ion-row>\n    </p>\n\n    <ion-row class=\"tog\">\n      <p class=\"gps\">Call Record Access</p>\n      <ion-toggle checked [(ngModel)]=\"callrecord\" (ionChange)=\"Recordstatus(callrecord)\" mode=\"md\"></ion-toggle>\n    </ion-row>\n    <ion-row class=\"tog\">\n      <p class=\"gps\">Create Invoice</p>\n      <ion-toggle checked mode=\"md\" [(ngModel)]=\"invoice\" (ionChange)=\"Invoicestatus(invoice)\"></ion-toggle>\n    </ion-row>\n\n    <h6>Work Hour Settings</h6>\n    <ion-row>\n      <ion-col>Monday</ion-col>\n      <ion-col>From:\n        <ion-item>\n          <ion-select placeholder=\"Select One\">\n            <ion-select-option value=\"f\">Female</ion-select-option>\n            <ion-select-option value=\"m\">Male</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col>To: </ion-col>\n    </ion-row>\n    <ion-row class=\"branches\">\n      <ion-select placeholder=\"Branches\" interface=\"popover\" [(ngModel)]=\"branch\">\n        <ion-select-option *ngFor=\"let br of branches\" value=\"{{br.id}}\">{{br.branch_title}}</ion-select-option>\n      </ion-select>\n    </ion-row>\n    <ion-card class=\"card\">\n      <ion-row>\n        <ion-col class=\"address\">\n          <p>Address</p>\n          <ion-row class=\"add\">\n            <p>{{address}}</p>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"4\">\n          <img\n            src=\"https://play-lh.googleusercontent.com/0uRNRSe4iS6nhvfbBcoScHcBTx1PMmxkCx8rrEsI2UQcQeZ5ByKz8fkhwRqR3vttOg\"\n            alt=\"\">\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <p class=\"sun\">{{busines_name}} QR</p>\n    <p class=\"qr\">\n      <ion-icon name=\"qr-code-outline\" (click)=\"Qrimage()\"></ion-icon>\n    </p>\n    <ion-row class=\"check\">\n      <ion-col size=\"1\">\n        <ion-checkbox checked></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"confirm\">I agree for the <span>Terms and Conditions</span></p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"btn\">\n      <ion-button (click)=\"submit()\">Submit</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "y7iA": function y7iA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEmployeePageModule", function () {
        return AddEmployeePageModule;
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


      var _add_employee_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-employee-routing.module */
      "1+uD");
      /* harmony import */


      var _add_employee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-employee.page */
      "4U3x");

      var AddEmployeePageModule = function AddEmployeePageModule() {
        _classCallCheck(this, AddEmployeePageModule);
      };

      AddEmployeePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_employee_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddEmployeePageRoutingModule"]],
        declarations: [_add_employee_page__WEBPACK_IMPORTED_MODULE_6__["AddEmployeePage"]]
      })], AddEmployeePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=add-employee-add-employee-module-es5.js.map