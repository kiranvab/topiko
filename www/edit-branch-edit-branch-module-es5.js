(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-branch-edit-branch-module"], {
    /***/
    "1ufV": function ufV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0;\n}\n\n.label-floating.sc-ion-label-ios-h,\n.label-stacked.sc-ion-label-md-h,\n.label-floating.sc-ion-label-md-h {\n  color: #871178;\n}\n\n.purple-btn {\n  background: linear-gradient(#871178, #3c1378) !important;\n  height: 50px;\n  border: 0;\n  width: 90%;\n  text-align: center;\n  font-size: 18px;\n  margin: 0 auto;\n  text-transform: capitalize;\n  color: #fff;\n  line-height: 2.5;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVkaXQtYnJhbmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFNBQUE7QUFBSjs7QUFHQTs7O0VBSUksY0FBQTtBQURKOztBQUdBO0VBQ0ksd0RBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKIiwiZmlsZSI6ImVkaXQtYnJhbmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkXHJcbntcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCxcclxuLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgsIFxyXG4ubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWhcclxue1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuLnB1cnBsZS1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "CKFN": function CKFN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditBranchPage", function () {
        return EditBranchPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_branch_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-branch.page.html */
      "wOVo");
      /* harmony import */


      var _edit_branch_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-branch.page.scss */
      "1ufV");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");

      var EditBranchPage = /*#__PURE__*/function () {
        function EditBranchPage(storage, http, router, alertController) {
          _classCallCheck(this, EditBranchPage);

          this.storage = storage;
          this.http = http;
          this.router = router;
          this.alertController = alertController;
        }

        _createClass(EditBranchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("brid").then(function (val) {
              _this.brid = val;

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getbranch.php?brid=" + _this.brid).subscribe(function (response) {
                _this.branch = response;
                _this.branch_title = _this.branch[0].branch_title;
                _this.branch_address = _this.branch[0].branch_address;
                _this.branch_head = _this.branch[0].branch_head;
                _this.contact_number = _this.branch[0].contact_number;
                _this.contact_email = _this.branch[0].contact_email;
                _this.alternate_number = _this.branch[0].alternate_number;
                _this.branch_area = _this.branch[0].branch_area;
                _this.branch_pincode = _this.branch[0].branch_pincode;
                _this.branch_city = _this.branch[0].branch_city;
                _this.branch_state = _this.branch[0].branch_state;
                _this.branch_country = _this.branch[0].branch_country;
                console.log("Branch Details", _this.branch);
              });
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this2 = this;

            var link = _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "update_branch.php";
            var mydata = JSON.stringify({
              "branch_id": this.brid,
              "branch_title": this.branch_title,
              "branch_address": this.branch_address,
              "branch_head": this.branch_head,
              "contact_number": this.contact_number,
              "contact_email": this.contact_email,
              "alternate_number": this.alternate_number,
              "branch_area": this.branch_area,
              "branch_pincode": this.branch_pincode,
              "branch_city": this.branch_city,
              "branch_state": this.branch_state,
              "branch_country": this.branch_country
            });
            console.log("payload", mydata);
            this.http.post(link, mydata).subscribe(function (data) {
              console.log(data);

              if (data == 1) {
                _this2.Created();

                _this2.router.navigate(["/branches"]);
              } else {
                _this2.Failed();
              }
            });
          }
        }, {
          key: "Created",
          value: function Created() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Created!',
                        message: 'Branch has been Updated sucesfully.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      this.router.navigate(["/branches"]);
                      _context.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "Failed",
          value: function Failed() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Failed!',
                        message: 'Failed to Update branch try again.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return EditBranchPage;
      }();

      EditBranchPage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      EditBranchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-edit-branch',
        template: _raw_loader_edit_branch_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_branch_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditBranchPage);
      /***/
    },

    /***/
    "NnWJ": function NnWJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditBranchPageModule", function () {
        return EditBranchPageModule;
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


      var _edit_branch_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-branch-routing.module */
      "qGOY");
      /* harmony import */


      var _edit_branch_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-branch.page */
      "CKFN");

      var EditBranchPageModule = function EditBranchPageModule() {
        _classCallCheck(this, EditBranchPageModule);
      };

      EditBranchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_branch_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditBranchPageRoutingModule"]],
        declarations: [_edit_branch_page__WEBPACK_IMPORTED_MODULE_6__["EditBranchPage"]]
      })], EditBranchPageModule);
      /***/
    },

    /***/
    "qGOY": function qGOY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditBranchPageRoutingModule", function () {
        return EditBranchPageRoutingModule;
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


      var _edit_branch_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-branch.page */
      "CKFN");

      var routes = [{
        path: '',
        component: _edit_branch_page__WEBPACK_IMPORTED_MODULE_3__["EditBranchPage"]
      }];

      var EditBranchPageRoutingModule = function EditBranchPageRoutingModule() {
        _classCallCheck(this, EditBranchPageRoutingModule);
      };

      EditBranchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditBranchPageRoutingModule);
      /***/
    },

    /***/
    "wOVo": function wOVo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Branch</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n  <ion-item>\n    <ion-label position=\"floating\">Branch Name</ion-label>\n    <ion-input [(ngModel)]=\"branch_title\" ></ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch Address</ion-label>\n    <ion-input [(ngModel)]=\"branch_address\"></ion-input>\n  </ion-item> \n  \n  <ion-item>\n    <ion-label position=\"floating\">Branch Head</ion-label>\n    <ion-input [(ngModel)]=\"branch_head\"></ion-input>\n  </ion-item> \n  \n  <ion-item>\n    <ion-label position=\"floating\">Contact Number </ion-label>\n    <ion-input [(ngModel)]=\"contact_number\"></ion-input>\n  </ion-item> \n  \n  <ion-item>\n    <ion-label position=\"floating\">Branch Email </ion-label>\n    <ion-input [(ngModel)]=\"contact_email\"></ion-input>\n  </ion-item> \n  \n  <ion-item>\n    <ion-label position=\"floating\">Alternate Phone No</ion-label>\n    <ion-input [(ngModel)]=\"alternate_number\"></ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch Area</ion-label>\n    <ion-input [(ngModel)]=\"branch_area\"></ion-input>\n  </ion-item>   \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch Pincode</ion-label>\n    <ion-input [(ngModel)]=\"branch_pincode\"></ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch City</ion-label>\n    <ion-input [(ngModel)]=\"branch_city\"></ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch State</ion-label>\n    <ion-input [(ngModel)]=\"branch_state\"></ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch Country</ion-label>\n    <ion-input   [(ngModel)]=\"branch_country\"></ion-input>\n  </ion-item> \n  \n  <br>\n  <div expand=\"block\" class=\"purple-btn\" size=\"small\" (click)=\"submit()\">Submit</div>\n  <br>\n  </ion-card>\n\n  \n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=edit-branch-edit-branch-module-es5.js.map