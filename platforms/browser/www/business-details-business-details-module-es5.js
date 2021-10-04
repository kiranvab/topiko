(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["business-details-business-details-module"], {
    /***/
    "5FCR": function FCR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{business_name}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon routerLink=\"/qr-payments\" name=\"qr-code-outline\"></ion-icon>\n      <ion-icon (click)=\"openMenu()\" name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"box\" *ngFor=\"let business of bdata\">\n    <ion-row (click)=\"profile()\">\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img class=\"border\"\n            src=\"{{business.logo}}\"\n            alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name pclass\">{{business.business_name}} <ion-icon name=\"shield-checkmark\"></ion-icon>\n        </p>\n        <ion-row class=\"star\">\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <span>\n            <p class=\"pclass\">4.1 Ratings</p>\n          </span>\n        </ion-row>\n        <p class=\"time pclass\">{{business.owner_name}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"reg text-overflow\">\n        <p>Free Package</p>\n      </ion-col>\n      <ion-col size=\"4.2\" class=\"claim ellipsis\" routerLink=\"/contact\">\n        <ion-button>Top up</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"chats scroll\"  (click)=\"views()\">\n      <ion-col>\n        <p class=\"text\">Viewed</p>\n        <p class=\"number\">{{viewedcnt}}</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"text\">Likes</p>\n        <p class=\"number\">{{likescnt}}</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"text\">Reviews</p>\n        <p class=\"number\">{{reviewcnt}}</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col class=\"calls\">\n        <p class=\"text\">Favourite</p>\n        <p class=\"number\">{{favouritecnt}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <h6>Dashboard</h6>\n\n  <ion-card class=\"first\">\n    <ion-row class=\"scroll\">\n      <ion-col class=\"icons\" (click)=\"products()\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"cube-outline\"></ion-icon>\n        </ion-fab-button>\n        <p>Products</p>\n      </ion-col>\n      <ion-col class=\"icons\" (click)=\"offers()\">\n        <ion-fab-button color=\"light\">\n          <img src=\"../assets/offers.png\" width=\"60%\" />\n        </ion-fab-button>\n        <p>Offers</p>\n      </ion-col>\n      <ion-col class=\"icons\"  (click)=\"services()\">\n        <ion-fab-button color=\"light\">\n          <img src=\"../assets/service.png\" style=\"width: 70%; filter: opacity(0.6);\" />\n        </ion-fab-button>\n        <p>Services</p>\n      </ion-col>\n      <ion-col class=\"icons\" (click)=\"employees()\">\n        <ion-fab-button color=\"light\">\n          <img src=\"../assets/cs.png\" width=\"75%; filter: opacity(0.8);\" />\n        </ion-fab-button>\n        <p>Employee</p>\n      </ion-col>\n      <ion-col class=\"icons\" (click)=\"employees()\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"recording-outline\"></ion-icon>\n        </ion-fab-button>\n        <p>Records</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-segment value=\"all\" scrollable=\"true\" mode=\"md\" color=\"secondary\" [(ngModel)]=\"segmentModel\">\n    <ion-segment-button value=\"post\">\n      <ion-label>Post</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"upload\">\n      <ion-label>Upload</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"branches\">\n      <ion-label>Branches</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"job\">\n      <ion-label>Job</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"partner\">\n      <ion-label>Partner</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- post Div Start-->\n  <div *ngIf=\"segmentModel === 'post'\">\n    <div class=\"datecont\">\n      <div class=\"date\">\n        <p>04/23/2021</p>\n      </div>\n    </div>\n\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\" (click)=\"openMenu()\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"http://mediawiremobile.com/news/wp-content/uploads/499924122-612x612.jpg\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"https://guy-gweth.com/wp-content/uploads/2020/10/1.jpg\" alt=\"\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"https://sitalcollege.com/edu/wp-content/uploads/2021/01/e-learning.jpg\" alt=\"\">\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n    <p class=\"dashboard\">Descriptions</p>\n    <ion-card class=\"second\">\n      <ion-row>\n        <p class=\"description\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis vitae voluptatibus autem\n          quidem reiciendis iusto</p>\n      </ion-row>\n    </ion-card>\n    <ion-card class=\"second\">\n      <ion-row class=\"likes\">\n        <ion-col>\n          <p class=\"like\">Likes</p>\n          <p class=\"count\">036</p>\n        </ion-col>\n        <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"like\">Dislikes</p>\n          <p class=\"count\">30</p>\n        </ion-col>\n        <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"like\">Share</p>\n          <p class=\"count\">105</p>\n        </ion-col>\n        <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n        <ion-col class=\"comment\">\n          <p class=\"like\">Comment</p>\n          <p class=\"count\">150</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <div class=\"datecont\">\n      <div class=\"date\">\n        <p>04/23/2021</p>\n      </div>\n    </div>\n\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\" (click)=\"openMenu()\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"https://guy-gweth.com/wp-content/uploads/2020/10/1.jpg\" alt=\"\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"https://sitalcollege.com/edu/wp-content/uploads/2021/01/e-learning.jpg\" alt=\"\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"http://mediawiremobile.com/news/wp-content/uploads/499924122-612x612.jpg\">\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n    <p class=\"dashboard\">Descriptions</p>\n    <ion-card class=\"second\">\n      <ion-row>\n        <p class=\"description\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis vitae voluptatibus autem\n          quidem reiciendis iusto</p>\n      </ion-row>\n    </ion-card>\n    <ion-card class=\"second\">\n      <ion-row class=\"likes\">\n        <ion-col>\n          <p class=\"like\">Likes</p>\n          <p class=\"count\">036</p>\n        </ion-col>\n        <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"like\">Dislikes</p>\n          <p class=\"count\">30</p>\n        </ion-col>\n        <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"like\">Share</p>\n          <p class=\"count\">105</p>\n        </ion-col>\n        <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n        <ion-col class=\"comment\">\n          <p class=\"like\">Comment</p>\n          <p class=\"count\">150</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- post div end-->\n  <!-- Uplaod div start-->\n  <div class=\"upload\" *ngIf=\"segmentModel === 'upload'\">\n    <ion-row>\n      <ion-col class=\"left\">\n        <ion-card class=\"first-card\">\n          <ion-row>\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row>\n            <p>Upload Service Banner</p>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n      <ion-col class=\"right\">\n        <ion-card class=\"second-card\">\n          <ion-row>\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row>\n            <p>Upload Service video, gif or URL</p>\n          </ion-row>\n        </ion-card>\n        <ion-row class=\"pad\">\n          <ion-col class=\"left\">\n            <ion-card class=\"third-card\">\n              <ion-row>\n                <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n              </ion-row>\n              <ion-row>\n                <p>Upload Image</p>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          <ion-col class=\"right\">\n            <ion-card class=\"third-card\">\n              <ion-row>\n                <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n              </ion-row>\n              <ion-row>\n                <p>Upload Image</p>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\" class=\"left\">\n        <ion-card class=\"third-card\">\n          <ion-row>\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row>\n            <p>Upload Image</p>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n      <ion-col class=\"right\">\n        <ion-card class=\"third-card\">\n          <ion-row>\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row>\n            <p>Upload Banner</p>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- uplaod div end-->\n  <!--branches div start-->\n  <div *ngIf=\"segmentModel === 'branches'\">\n    <ion-card>\n      <ion-row routerLink=\"/branches\">\n        <ion-col class=\"add-branch\">\n          <span>+</span> Add\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"branches\" *ngFor=\"let branch of branches;\">\n        <ion-col class=\"branches-text\">\n          {{branch.branch_title}}<br>\n          Address: <br>\n          {{branch.branch_address}}\n          {{branch.branch_area}}\n          {{branch.branch_city}}\n          {{branch.branch_state}}\n          {{branch.branch_pincode}}\n          {{branch.branch_country}}\n          <ion-row class=\"branches-color\">\n            <ion-col>{{branch.created_date}}</ion-col>\n            <ion-col>{{branch.created_time}}</ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"3\">\n          <img src=\"https://www.google.com/maps/d/u/0/thumbnail?mid=1X39vwqR9XQIHWZwXa4HS4FAgjeo&hl=en\">\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!--Branches div end-->\n  <!--Job div start-->\n  <div *ngIf=\"segmentModel === 'job'\">\n    <ion-card>\n\n    </ion-card>\n  </div>\n  <!--job div end-->\n  <!--partner div start-->\n  <div *ngIf=\"segmentModel === 'partner'\">\n    <ion-card></ion-card>\n  </div>\n  <!--partner div end-->\n\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-row>\n    <ion-col>\n      <ion-icon name=\"home\"></ion-icon>\n      <p>Home</p>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <p>Profile</p>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"scan-outline\"></ion-icon>\n      <p>Scan</p>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"heart-outline\"></ion-icon>\n      <p>Favourites</p>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"call-outline\"></ion-icon>\n      <p>Call</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    },

    /***/
    "RAKf": function RAKf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessDetailsPage", function () {
        return BusinessDetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_business_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./business-details.page.html */
      "5FCR");
      /* harmony import */


      var _business_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./business-details.page.scss */
      "iLIG");
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

      var BusinessDetailsPage = /*#__PURE__*/function () {
        function BusinessDetailsPage(actionsheetCtrl, router, route, storage, http) {
          _classCallCheck(this, BusinessDetailsPage);

          this.actionsheetCtrl = actionsheetCtrl;
          this.router = router;
          this.route = route;
          this.storage = storage;
          this.http = http;
          this.segmentModel = "post";
        }

        _createClass(BusinessDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("bid").then(function (val) {
              _this.buid = val;
              console.log(_this.buid);

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getbranches.php?bid=" + _this.buid).subscribe(function (data) {
                _this.branches = data;
                console.log("Branches", _this.branches);
              });

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getviewcount.php?bid=" + _this.buid).subscribe(function (viewData) {
                _this.viewedcnt = viewData;
                console.log("View Count", _this.viewedcnt);
              });

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getfavcount.php?bid=" + _this.buid).subscribe(function (viewData) {
                _this.favouritecnt = viewData;
                console.log("Favoutire Count", _this.favouritecnt);
              });

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getlikescount.php?bid=" + _this.buid).subscribe(function (likeData) {
                _this.likescnt = likeData;
                console.log("Likes Count", _this.likescnt);
              });

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getreviewcount.php?bid=" + _this.buid).subscribe(function (revData) {
                _this.reviewcnt = revData;
                console.log("Review Count", _this.reviewcnt);
              });
            });
            this.route.queryParams.subscribe(function (params) {
              if (params && params.businessdata) {
                _this.bdata = JSON.parse(params.businessdata);
                _this.business_name = _this.bdata[0].business_name;
                _this.business_id = _this.bdata[0].id;
                console.log(_this.bdata);

                _this.storage.set("bid", _this.business_id);
              }
            });
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionsheetCtrl.create({
                        // header: 'Modify your album',  
                        buttons: [{
                          text: 'Plans',
                          handler: function handler() {
                            _this2.router.navigate(['plans']);

                            console.log('Destructive clicked');
                          }
                        }, {
                          text: 'Verification',
                          handler: function handler() {
                            _this2.router.navigate(['verification']);

                            console.log('Archive clicked');
                          }
                        }, {
                          text: 'Show Case',
                          handler: function handler() {
                            console.log('Cancel clicked');

                            _this2.router.navigate(['/showcase']);
                          }
                        }, {
                          text: 'Promotion',
                          handler: function handler() {
                            console.log('Promotions clicked');
                          }
                        }, {
                          text: 'Customize',
                          handler: function handler() {
                            console.log('Customize clicked');
                          }
                        }, {
                          text: 'Setting',
                          handler: function handler() {
                            console.log('Setting clicked');
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
          key: "products",
          value: function products() {
            console.log(this.business_id);
            this.router.navigate(['product']);
          }
        }, {
          key: "offers",
          value: function offers() {
            this.router.navigate(['offers']);
          }
        }, {
          key: "services",
          value: function services() {
            console.log(this.business_id);
            this.router.navigate(['service']);
          }
        }, {
          key: "employees",
          value: function employees() {
            console.log(this.business_id);
            this.router.navigate(['employee']);
          }
        }, {
          key: "records",
          value: function records() {
            console.log(this.business_id);
          }
        }, {
          key: "profile",
          value: function profile() {
            this.storage.set("bid", this.business_id);
            this.router.navigate(['business-profile']);
          }
        }, {
          key: "views",
          value: function views() {
            this.storage.set("bid", this.business_id);
            this.router.navigate(['business-views']);
          }
        }]);

        return BusinessDetailsPage;
      }();

      BusinessDetailsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      BusinessDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-business-details',
        template: _raw_loader_business_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_business_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BusinessDetailsPage);
      /***/
    },

    /***/
    "iLIG": function iLIG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --background: #f5f5f5;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-bottom: 65px;\n}\n\n.avatar ion-avatar {\n  width: 75px;\n  height: 75px;\n}\n\n.border {\n  border: 0.2px solid #707070;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.user-name ion-icon {\n  color: #39ac00;\n}\n\n.star {\n  margin-top: 5px;\n}\n\n.star ion-icon {\n  color: #fcb900;\n}\n\n.star span p {\n  font-size: 0.5em;\n  padding-left: 5px;\n  color: #22272a;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 0px;\n}\n\n.pclass {\n  margin: 0%;\n  line-height: 18px;\n}\n\n.box {\n  padding: 10px;\n  box-shadow: 0px 0.1875em 0.375em #00000029;\n  margin: 0%;\n  margin-top: 18px;\n}\n\n.reg p {\n  color: #9f9f9f;\n  font-size: 1em;\n}\n\n.claim {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.claim ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  width: 77px;\n  height: 2em;\n  font-size: 14px;\n  font-weight: normal;\n  --border-radius: 16px;\n}\n\n.chats .text {\n  color: #707070;\n  font-size: 14px !important;\n  text-align: center;\n  margin: 0px;\n}\n\n.chats .number {\n  color: #871178;\n  font-size: 22px !important;\n  text-align: center;\n  margin: 5px 0px;\n}\n\n.seperator {\n  margin: 16px 0px;\n  margin-bottom: 25px;\n}\n\nh6 {\n  color: #22272a;\n  font-size: 1.2em;\n}\n\n.first {\n  background: #ffffff;\n  margin: 1em 0px;\n  box-shadow: none;\n  border-radius: 0%;\n  box-shadow: 0px 0.1875em 0.375em #00000029;\n}\n\n.icons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1.125em;\n}\n\n.icons p {\n  margin: 8px 0px;\n  color: #871178;\n}\n\nion-fab-button {\n  --ion-color-base: #f2f2f2 !important;\n  --box-shadow: none;\n}\n\nion-fab-button ion-icon {\n  color: #707070;\n  font-size: 30px;\n}\n\n.scroll {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\nion-segment {\n  background: #ffffff;\n  color: #707070;\n  font-size: 0.9375em;\n}\n\n.segment-button-checked {\n  --color-checked: #871178 !important;\n  color: #871178;\n}\n\nion-segment ion-label {\n  text-transform: capitalize;\n  font-size: 1em;\n}\n\nion-badge {\n  color: #ffffff;\n  background-color: #d93131;\n  height: 18px;\n  width: 18px;\n  border-radius: 50%;\n  font-size: 10px;\n  padding-top: 5px;\n}\n\n.datecont {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.date {\n  width: 95px;\n  height: 26px;\n  background-color: #cccccc;\n  border-radius: 1em;\n  margin-top: 0.625em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.date p {\n  margin: 0%;\n  text-align: center;\n  font-size: 0.75em;\n  color: #f8f8f8;\n}\n\n.image {\n  min-width: 100%;\n  margin-top: 10px;\n  min-height: 230px;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  position: relative;\n  bottom: 22px;\n}\n\n.round-img {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  top: 50px;\n  right: 9px;\n  background: #919191;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.round-img ion-icon {\n  font-size: 16px;\n  color: #ffffff;\n}\n\n.second {\n  box-shadow: none;\n  margin: 12px 0px;\n}\n\n.second .description {\n  margin-left: 0.625em;\n  font-size: 0.875em;\n  line-height: 1.8em;\n  letter-spacing: 0.07125em;\n  color: #707070;\n}\n\n.second .likes ion-col {\n  text-align: center;\n}\n\n.second .like {\n  font-size: 0.875em;\n}\n\n.second .lines {\n  border-right: 1px solid #00000033;\n  margin: 14px 0px;\n  margin-top: 25px;\n  margin-bottom: 25px;\n  padding: 0%;\n}\n\n.second .count {\n  color: #871178;\n  font-size: 0.875em;\n}\n\n.second .likes .comment {\n  border: none;\n}\n\nion-footer {\n  position: fixed;\n  bottom: 0%;\n  width: 100%;\n}\n\nion-footer ion-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-footer p {\n  font-size: 0.75em;\n  color: #ffffffbd;\n  margin: 0.3125em;\n}\n\nion-footer ion-icon {\n  width: 20px;\n  height: 20px;\n  color: #fff;\n}\n\n.first-card {\n  height: 249px;\n  margin: 0px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.second-card {\n  height: 169px;\n  margin: 0px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.third-card {\n  height: 75px;\n  margin: 0px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.left {\n  padding: 5px 2.5px 0px 0px;\n}\n\n.third-card ion-icon {\n  width: 25px;\n  height: 20px;\n}\n\n.third-card p {\n  font-size: 0.625em;\n  margin: 0.25em 0px;\n}\n\n.right {\n  padding: 5px 0px 0px 2.5px;\n}\n\n.upload {\n  margin: 0 15px;\n}\n\n.add-branch {\n  text-align: right;\n  color: #871178;\n  font-size: 1.25em;\n}\n\n.add-branch span {\n  font-size: 1.5em;\n}\n\n.branches {\n  border-bottom: 1px solid #cccccc;\n}\n\n.branches-text {\n  color: #333;\n  color: #333;\n  font-size: 0.9em;\n  padding: 1em;\n}\n\n.branches-color {\n  color: #871178;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2J1c2luZXNzLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSwyQkFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0FBT0o7O0FBTEE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBU0o7O0FBUEE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFVSjs7QUFQQTtFQUNJLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVJBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFXSjs7QUFUQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBWUo7O0FBVkE7RUFDSSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBYUo7O0FBUkE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFXSjs7QUFUQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVlKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQThFQTtFQUNJLGNBQUE7RUFD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V0FBQTtFQUNBLFlBQUE7QUF6SEo7O0FBMkhBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQXhISjs7QUEwSEE7RUFDSSwwQkFBQTtBQXZISjs7QUF5SEE7RUFDSSxjQUFBO0FBdEhKOztBQTJIQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBeEhKOztBQTBIQTtFQUNJLGdCQUFBO0FBdkhKOztBQTBIQTtFQUNJLGdDQUFBO0FBdkhKOztBQXlIQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBdEhKOztBQXdIQTtFQUNJLGNBQUE7QUFySEoiLCJmaWxlIjoiYnVzaW5lc3MtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNjVweDtcclxufVxyXG5cclxuLmF2YXRhciBpb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG59XHJcbi5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAwLjJweCBzb2xpZCAjNzA3MDcwO1xyXG59XHJcbi51c2VyLW5hbWUge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4udXNlci1uYW1lIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjMzlhYzAwO1xyXG59XHJcbi5zdGFyIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uc3RhciBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZjYjkwMDtcclxufVxyXG4uc3RhciBzcGFuIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbn1cclxuLnRpbWUge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ucGNsYXNzIHtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDAuMTg3NWVtIDAuMzc1ZW0gIzAwMDAwMDI5O1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbn1cclxuLnJlZyBwIHtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuLmNsYWltIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2xhaW0gaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHdpZHRoOiA3N3B4O1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcbi8vIC5jaGF0cyB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4vLyB9XHJcbi5jaGF0cyAudGV4dCB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmNoYXRzIC5udW1iZXIge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4vLyAuY2hhdHMgLnRleHQge1xyXG4vLyAgICAgY29sb3I6ICM3MDcwNzA7XHJcbi8vICAgICBmb250LXNpemU6IDFlbTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4vLyB9XHJcbi8vIC5jaGF0cyAubnVtYmVyIHtcclxuLy8gICAgIGNvbG9yOiAjODcxMTc4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBtYXJnaW46IDAlO1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbi8vIH1cclxuLnNlcGVyYXRvciB7XHJcbiAgICBtYXJnaW46IDE2cHggMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLy8gLmJveCB7XHJcbi8vICAgICBwYWRkaW5nOiAwLjYyNWVtO1xyXG4vLyAgICAgbWFyZ2luOiAxNXB4IDE4cHg7XHJcbi8vICAgICBib3gtc2hhZG93OiAwcHggMC4xODc1ZW0gMC4zNzVlbSAjMDAwMDAwMjk7XHJcbi8vIH1cclxuLy8gLmJveCBpb24tYXZhdGFyIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gfVxyXG4vLyBpb24tYXZhdGFyIHtcclxuLy8gICAgIHdpZHRoOiA3MHB4O1xyXG4vLyAgICAgaGVpZ2h0OiA3MHB4O1xyXG4vLyAgICAgbWFyZ2luOiAxMHB4IDVweCAwIDVweDtcclxuLy8gfVxyXG4vLyBpb24tYXZhdGFyIC5ib3JkZXIge1xyXG4vLyAgICAgYm9yZGVyOiAwLjAxMjVlbSBzb2xpZCAjNzA3MDcwO1xyXG4vLyB9XHJcbi8vIC50aXRsZSB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbi8vIH1cclxuLy8gLnRpdGxlIHAge1xyXG4vLyAgICAgZm9udC1zaXplOiAxZW07XHJcbi8vICAgICBjb2xvcjogIzIyMjcyYTtcclxuLy8gICAgIGxldHRlci1zcGFjaW5nOiAwLjAzNzVlbTtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbi8vICAgICBtYXJnaW46IDNweCAwcHg7XHJcbi8vIH1cclxuLy8gLnRpdGxlIGlvbi1pY29uIHtcclxuLy8gICAgIGNvbG9yOiAjMzlhYzAwO1xyXG4vLyB9XHJcbi8vIC5kaXJlY3RvciBwIHtcclxuLy8gICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbi8vICAgICBtYXJnaW46IDRweCAwcHg7XHJcbi8vIH1cclxuLy8gLnN0YXIgaW9uLWljb24ge1xyXG4vLyAgICAgY29sb3I6ICNmY2I5MDA7XHJcbi8vICAgICBmb250LXNpemU6IDFlbTtcclxuLy8gfVxyXG4vLyAuc3RhciBwIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbi8vIH1cclxuLy8gLnJlZyBwIHtcclxuLy8gICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbi8vICAgICBmb250LXNpemU6IDFlbTtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogNiU7XHJcbi8vIH1cclxuLy8gLmxhc3Qge1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDAuNjI1ZW07XHJcbi8vICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4vLyAgICAgY29sb3I6ICM4NzExNzg7XHJcbi8vIH1cclxuXHJcbi8vIC5wdXJwbGUtYnRuIHtcclxuLy8gICAgIGZsb2F0OiByaWdodDtcclxuLy8gICAgIHdpZHRoOiAyNSU7XHJcbi8vICAgICAtLWJvcmRlci1yYWRpdXM6IDMycHg7XHJcbi8vICAgICBoZWlnaHQ6IDI1cHg7XHJcbi8vICAgICBmb250LXNpemU6IDEuMjVlbTtcclxuLy8gfVxyXG4vLyAudG9wdXAge1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyB9XHJcbi8vIC50b3B1cCBpb24tYnV0dG9uIHtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4vLyAgICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4vLyAgICAgd2lkdGg6IDZlbTtcclxuLy8gICAgIGhlaWdodDogMS41ZW07XHJcbi8vICAgICAtLWJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuLy8gfVxyXG5cclxuaDYge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4vLyBjYXJkXHJcbi5maXJzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiAxZW0gMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDAuMTg3NWVtIDAuMzc1ZW0gIzAwMDAwMDI5O1xyXG59XHJcbi5pY29ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxLjEyNWVtO1xyXG59XHJcbi5pY29ucyBwIHtcclxuICAgIG1hcmdpbjogOHB4IDBweDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICNmMmYyZjIgIWltcG9ydGFudDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5pb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uc2Nyb2xsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAwLjkzNzVlbTtcclxufVxyXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICM4NzExNzggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbmlvbi1zZWdtZW50IGlvbi1sYWJlbCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcbmlvbi1iYWRnZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTMxMzE7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi8vIHBvc3Qgc2VnbWVudCBzdGFydFxyXG4uZGF0ZWNvbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZGF0ZSB7XHJcbiAgICB3aWR0aDogOTVweDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjYyNWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZGF0ZSBwIHtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIGNvbG9yOiAjZjhmOGY4O1xyXG59XHJcbi5pbWFnZSB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjMwcHg7XHJcbn1cclxuLmNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjJweDtcclxufVxyXG4ucm91bmQtaW1nIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgcmlnaHQ6IDlweDtcclxuICAgIGJhY2tncm91bmQ6ICM5MTkxOTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5yb3VuZC1pbWcgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zZWNvbmQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbjogMTJweCAwcHg7XHJcbn1cclxuLnNlY29uZCAuZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNjI1ZW07XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNzEyNWVtO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuLnNlY29uZCAubGlrZXMgaW9uLWNvbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNlY29uZCAubGlrZSB7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbn1cclxuLnNlY29uZCAubGluZXMge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDAwMDMzO1xyXG4gICAgbWFyZ2luOiAxNHB4IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMCU7XHJcbn1cclxuLnNlY29uZCAuY291bnQge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbn1cclxuLnNlY29uZCAubGlrZXMgLmNvbW1lbnQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi8vIHBvc3Qgc2VnbWVudCBlbmRcclxuXHJcbi8vIC5zZWNvbmQgaW9uLWNvbCB7XHJcbi8vICAgICBjb2xvcjogIzIyMjcyYTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuLy8gfVxyXG4vLyAuc2Vjb25kIGlvbi1hdmF0YXIge1xyXG4vLyAgICAgd2lkdGg6IDMxcHg7XHJcbi8vICAgICBoZWlnaHQ6IDMxcHg7XHJcbi8vIH1cclxuLy8gLnNlY29uZCBpb24taW5wdXQge1xyXG4vLyAgICAgYm9yZGVyOiAwLjNweCBzb2xpZCAjNzA3MDcwO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbi8vIH1cclxuXHJcbi8vIGRpdiB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyB9XHJcbi8vIC5kYXRlIHtcclxuLy8gICAgIHdpZHRoOiAzMCU7XHJcbi8vICAgICBoZWlnaHQ6IDMwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICBwYWRkaW5nOiA2cHg7XHJcbi8vIH1cclxuLy8gLmRhdGUgcCB7XHJcbi8vICAgICBtYXJnaW46IDAlO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbi8vICAgICBjb2xvcjogI2Y4ZjhmODtcclxuLy8gfVxyXG5cclxuLy8gLmltYWdlIHtcclxuLy8gICAgIG1hcmdpbjogMC42ODc1ZW0gMC42MjVlbTtcclxuLy8gfVxyXG4vLyAuZGVzY3JpcHRpb24ge1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDAuNjI1ZW07XHJcbi8vICAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbi8vICAgICBsaW5lLWhlaWdodDogMS4zNzVlbTtcclxuLy8gICAgIGxldHRlci1zcGFjaW5nOiAwLjA3MTI1ZW07XHJcbi8vICAgICBjb2xvcjogIzcwNzA3MDtcclxuLy8gfVxyXG4vLyAubGlrZXMgaW9uLWNvbCB7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4vLyAgICAgYm9yZGVyLWNvbGxhcHNlOiA1MCU7XHJcbi8vIH1cclxuLy8gLmxpa2Uge1xyXG4vLyAgICAgZm9udC1zaXplOiAxZW07XHJcbi8vIH1cclxuLy8gLmNvdW50IHtcclxuLy8gICAgIGNvbG9yOiAjODcxMTc4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxZW07XHJcbi8vICAgICBsaW5lLWhlaWdodDogMTtcclxuLy8gfVxyXG4vLyAubGlrZXMgLmNvbW1lbnQge1xyXG4vLyAgICAgYm9yZGVyOiBub25lO1xyXG4vLyB9XHJcbi8vIC5sYXN0LWNhcmQge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuLy8gfVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaW9uLWZvb3RlciBpb24tY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1mb290ZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIGNvbG9yOiAjZmZmZmZmYmQ7XHJcbiAgICBtYXJnaW46IDAuMzEyNWVtO1xyXG59XHJcbmlvbi1mb290ZXIgaW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLy8gLnNlcCB7XHJcbi8vICAgICBtYXJnaW46IDUlIDA7XHJcbi8vICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDVkNWQ1O1xyXG4vLyB9XHJcbi8vVXBsYW9kIGRpdiBjc3Mgc3RhcnRcclxuXHJcbi5maXJzdC1jYXJkIHtcclxuICAgIGhlaWdodDogMjQ5cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNlY29uZC1jYXJkIHtcclxuICAgIGhlaWdodDogMTY5cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRoaXJkLWNhcmQge1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sZWZ0IHtcclxuICAgIHBhZGRpbmc6IDVweCAyLjVweCAwcHggMHB4O1xyXG59XHJcbi50aGlyZC1jYXJkIGlvbi1pY29uIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi50aGlyZC1jYXJkIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjYyNWVtO1xyXG4gICAgbWFyZ2luOiAwLjI1ZW0gMHB4O1xyXG59XHJcbi5yaWdodCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCAyLjVweDtcclxufVxyXG4udXBsb2FkIHtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG59XHJcbi8vVXBsb2FkIGRpdiBjc3MgZW5kXHJcblxyXG4vLyBCcm5jaGVzIGRpdiBjc3Mgc3RhcnRcclxuLmFkZC1icmFuY2gge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG59XHJcbi5hZGQtYnJhbmNoIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLmJyYW5jaGVzIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xyXG59XHJcbi5icmFuY2hlcy10ZXh0IHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcbi5icmFuY2hlcy1jb2xvciB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuLy8gYnJhbmNoZXMgZGl2IGNzcyAgZW5kXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "iWjC": function iWjC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessDetailsPageModule", function () {
        return BusinessDetailsPageModule;
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


      var _business_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./business-details-routing.module */
      "om98");
      /* harmony import */


      var _business_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./business-details.page */
      "RAKf");

      var BusinessDetailsPageModule = function BusinessDetailsPageModule() {
        _classCallCheck(this, BusinessDetailsPageModule);
      };

      BusinessDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _business_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusinessDetailsPageRoutingModule"]],
        declarations: [_business_details_page__WEBPACK_IMPORTED_MODULE_6__["BusinessDetailsPage"]]
      })], BusinessDetailsPageModule);
      /***/
    },

    /***/
    "om98": function om98(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessDetailsPageRoutingModule", function () {
        return BusinessDetailsPageRoutingModule;
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


      var _business_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./business-details.page */
      "RAKf");

      var routes = [{
        path: '',
        component: _business_details_page__WEBPACK_IMPORTED_MODULE_3__["BusinessDetailsPage"]
      }];

      var BusinessDetailsPageRoutingModule = function BusinessDetailsPageRoutingModule() {
        _classCallCheck(this, BusinessDetailsPageRoutingModule);
      };

      BusinessDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BusinessDetailsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=business-details-business-details-module-es5.js.map