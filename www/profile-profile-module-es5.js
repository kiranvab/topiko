(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "cRhG": function cRhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "v+7O");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "ncJE");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "ncJE": function ncJE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "tXh8");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "zxxS");
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

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(actionsheetCtrl, route, storage, http, router) {
          _classCallCheck(this, ProfilePage);

          this.actionsheetCtrl = actionsheetCtrl;
          this.route = route;
          this.storage = storage;
          this.http = http;
          this.router = router;
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("userdetails").then(function (val) {
              _this.udata = val;
              _this.uid = _this.udata[0].id;
              _this.uname = _this.udata[0].name;
              _this.ucity = _this.udata[0].city;
              console.log(_this.udata);

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getprofile.php?user_id=" + _this.uid).subscribe(function (data) {
                _this.profile = data;
                console.log(_this.profile);
                _this.profession = _this.profile[0].designation;
                _this.uimage = _this.profile[0].image;
              });
            });
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionsheetCtrl.create({
                        // header: 'Modify your album',  
                        buttons: [{
                          text: 'Settings',
                          handler: function handler() {
                            console.log('Destructive clicked');
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
          key: "openProfile",
          value: function openProfile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.actionsheetCtrl.create({
                        // header: 'Modify your album',  
                        buttons: [{
                          text: 'View Profile',
                          handler: function handler() {
                            console.log('Destructive clicked');
                          }
                        }, {
                          text: 'Call',
                          handler: function handler() {
                            _this2.route.navigate(['calling']);

                            console.log('Destructive clicked');
                          }
                        }, {
                          text: 'Delete Post',
                          handler: function handler() {
                            console.log('Destructive clicked');
                          }
                        }, {
                          text: 'Report',
                          handler: function handler() {
                            console.log('Destructive clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context2.sent;
                      _context2.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "settings",
          value: function settings() {
            this.storage.set("uid", this.uid);
            this.router.navigate(['/settings']);
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "tXh8": function tXh8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"openMenu()\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-input placeholder=\"Search friends\"></ion-input>\n          <ion-icon name=\"search-outline\" routerLink=\"/careerview\"></ion-icon>\n        </ion-item>\n      </ion-col>\n      <div class=\"notif\">\n        <img src=\"assets/notification.svg\" alt=\"\">\n        <sup>\n          <ion-badge color=\"primary\">1</ion-badge>\n        </sup>\n      </div>\n    </ion-row>\n\n    <ion-card class=\"first-card\" (click)=\"settings()\">\n      <ion-row>\n        <div class=\"avatar\">\n          <ion-avatar>\n            <img src=\"{{this.uimage}}\" alt=\"\">\n          </ion-avatar>\n        </div>\n        <ion-col class=\"text-overflow\">\n          <ion-row class=\"title text-overflow\">\n            <p>{{this.uname}}</p>\n          </ion-row>\n          <ion-row class=\"analyst text-overflow\">\n            <p>{{this.profession}}</p>\n          </ion-row>\n          <ion-row class=\"analyst text-overflow\">\n            <p>{{this.ucity}}</p>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-row class=\"date\">\n      <ion-col>\n        <p>Friends</p>\n      </ion-col>\n      <ion-col>\n        <p>Posts</p>\n      </ion-col>\n      <ion-col>\n        <p>Photos</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-card class=\"inp-box\">\n      <ion-row class=\"inp\">\n        <div class=\"avatar\">\n          <ion-avatar>\n            <img src=\"https://i.pinimg.com/474x/cf/f7/01/cff70187101797139589c8afa04e4053.jpg\" alt=\"\">\n          </ion-avatar>\n        </div>\n        <ion-col>\n          <ion-grid class=\"grid\">\n            <ion-row>\n              <ion-col class=\"msg\">\n                <ion-input placeholder=\"Expose Yourself\"></ion-input>\n              </ion-col>\n              <ion-col class=\"icn\" size=\"1.2\">\n                <ion-icon name=\"mic-outline\"></ion-icon>\n              </ion-col>\n              <ion-col class=\"icn\" size=\"1.2\">\n                <ion-icon name=\"camera-outline\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-card class=\"img-box\">\n      <ion-row class=\"view\">\n        <p>View All</p>\n      </ion-row>\n      <div class=\"scroll text-overflow\">\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <img src=\"https://i.pinimg.com/474x/cf/f7/01/cff70187101797139589c8afa04e4053.jpg\" alt=\"\">\n          </div>\n          <img class=\"main-img\"\n            src=\"https://uhdwallpapers.org/uploads/converted/18/03/11/dj-let-the-music-play-1080x1920_66494-mm-90.jpg\"\n            alt=\"\">\n          <p class=\"name\">Murali Kumar</p>\n        </div>\n\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <img src=\"https://i.pinimg.com/474x/cf/f7/01/cff70187101797139589c8afa04e4053.jpg\" alt=\"\">\n          </div>\n          <img class=\"main-img\" src=\"https://images.wallpaperscraft.com/image/guitar_art_vector_132958_1080x1920.jpg\"\n            alt=\"\">\n          <p class=\"name\">Kiran</p>\n        </div>\n\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <img src=\"https://i.pinimg.com/474x/cf/f7/01/cff70187101797139589c8afa04e4053.jpg\" alt=\"\">\n          </div>\n          <img class=\"main-img\"\n            src=\"https://images.wallpaperscraft.com/image/dj_headphones_installation_122020_1080x1920.jpg\" alt=\"\">\n          <p class=\"name\">Kalyan</p>\n        </div>\n\n\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <img src=\"https://i.pinimg.com/474x/cf/f7/01/cff70187101797139589c8afa04e4053.jpg\" alt=\"\">\n          </div>\n          <img class=\"main-img\"\n            src=\"https://uhdwallpapers.org/uploads/converted/18/03/11/dj-let-the-music-play-1080x1920_66494-mm-90.jpg\"\n            alt=\"\">\n          <p class=\"name\">Murali Kumar</p>\n        </div>\n\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <img src=\"https://i.pinimg.com/474x/cf/f7/01/cff70187101797139589c8afa04e4053.jpg\" alt=\"\">\n          </div>\n          <img class=\"main-img\" src=\"https://images.wallpaperscraft.com/image/guitar_art_vector_132958_1080x1920.jpg\"\n            alt=\"\">\n          <p class=\"name\">Kiran</p>\n        </div>\n\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <img src=\"https://i.pinimg.com/474x/cf/f7/01/cff70187101797139589c8afa04e4053.jpg\" alt=\"\">\n          </div>\n          <img class=\"main-img\"\n            src=\"https://images.wallpaperscraft.com/image/dj_headphones_installation_122020_1080x1920.jpg\" alt=\"\">\n          <p class=\"name\">Kalyan</p>\n        </div>\n      </div>\n    </ion-card>\n\n    <ion-card class=\"profile-box\">\n      <ion-grid class=\"padding-class\">\n        <ion-row class=\"inp\">\n          <div class=\"avatar\">\n            <ion-avatar>\n              <img src=\"https://i.pinimg.com/474x/cf/f7/01/cff70187101797139589c8afa04e4053.jpg\" alt=\"\">\n            </ion-avatar>\n          </div>\n          <ion-col class=\"text-overflow\">\n            <ion-row class=\"nam text-overflow\">\n              <p>Murali</p>\n            </ion-row>\n            <ion-row class=\"hrs text-overflow\">\n              <p>6Hrs Before</p>\n            </ion-row>\n          </ion-col>\n          <ion-col class=\"ellipsis\" size=\"1\">\n            <ion-icon name=\"ellipsis-vertical\" (click)=\"openProfile()\" mode=\"md\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-row>\n        <img src=\"https://storage.googleapis.com/www-reallysimple/shutterstock_670797415.jpg\" alt=\"\">\n      </ion-row>\n    </ion-card>\n    <ion-row class=\"likes\">\n      <ion-col class=\"like\">\n        <p>Like</p>\n      </ion-col>\n      <ion-col style=\"text-align:center\" class=\"like\">\n        <p>Share</p>\n      </ion-col>\n      <ion-col style=\"text-align:right\" class=\"like\">\n        <p>Comments</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-card class=\"profile-box\">\n      <ion-grid class=\"padding-class\">\n        <ion-row class=\"inp\">\n          <div class=\"avatar\">\n            <ion-avatar>\n              <img src=\"https://i.pinimg.com/474x/cf/f7/01/cff70187101797139589c8afa04e4053.jpg\" alt=\"\">\n            </ion-avatar>\n          </div>\n          <ion-col class=\"text-overflow\">\n            <ion-row class=\"nam text-overflow\">\n              <p>Murali</p>\n            </ion-row>\n            <ion-row class=\"hrs text-overflow\">\n              <p>6Hrs Before</p>\n            </ion-row>\n          </ion-col>\n          <ion-col class=\"ellipsis\" size=\"1\">\n            <ion-icon name=\"ellipsis-vertical\" (click)=\"openProfile()\" mode=\"md\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-row>\n        <img src=\"https://storage.googleapis.com/www-reallysimple/shutterstock_670797415.jpg\" alt=\"\">\n      </ion-row>\n    </ion-card>\n    <ion-row>\n      <ion-col class=\"like\">\n        <p>Like</p>\n      </ion-col>\n      <ion-col style=\"text-align:center\" class=\"like\">\n        <p>Share</p>\n      </ion-col>\n      <ion-col style=\"text-align:right\" class=\"like\">\n        <p>Comments</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer mode=\"md\" class=\"home-footer\">\n  <ion-row>\n    <ion-col routerLink=\"/home\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <p>Home</p>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"person\" class=\"click-footer\"></ion-icon>\n      <p class=\"click-footer\">Profile</p>\n    </ion-col>\n    <ion-col routerLink=\"/qr-scanner\">\n      <ion-icon name=\"scan-outline\"></ion-icon>\n      <p>Scan</p>\n    </ion-col>\n    <ion-col routerLink=\"/favourites\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n      <p>Favourites</p>\n    </ion-col>\n    <ion-col routerLink=\"/calls\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n      <p>Call</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    },

    /***/
    "v+7O": function v7O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "ncJE");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "zxxS": function zxxS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  text-align: center;\n  font-size: 1.125em;\n  letter-spacing: 0.0375em;\n  line-height: 1em;\n}\n\n.profile ion-icon {\n  font-size: 21px;\n}\n\n.notif {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1.125em;\n}\n\n.notif ion-icon {\n  font-size: 25px;\n  color: #707070;\n}\n\nion-content {\n  --padding-start: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 65px;\n}\n\nion-badge {\n  background-color: #d93131;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: -4px;\n  right: -8px;\n  font-weight: 100;\n  font-size: 8px;\n  padding-top: 5px;\n}\n\n.first-card {\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 0px;\n  padding: 10px 3px 8px 8px;\n  margin: 0%;\n  margin-top: 20px;\n}\n\n.first-card .avatar ion-avatar {\n  width: 94px;\n  height: 94px;\n}\n\n.title p {\n  font-size: 18px;\n  color: #22272a;\n  margin: 3px 0px;\n  padding-left: 0%;\n  text-align: left;\n}\n\n.analyst p {\n  font-size: 14px;\n  color: #707070;\n  margin: 0px;\n}\n\n.date {\n  margin: 1em 0px;\n  height: 2.375em;\n}\n\n.date ion-col {\n  background-color: #f5f5f5;\n  border-radius: 1.1875em;\n  border: 0.3px solid #d4d4d4;\n  margin: 0px 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.date p {\n  margin: 0%;\n  text-align: center;\n  font-size: 0.75em;\n  color: #22272a;\n}\n\n.inp-box {\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 0px;\n  padding: 5px;\n  padding-top: 10px;\n  padding-left: 10px;\n  margin: 0%;\n}\n\n.avatar ion-avatar {\n  width: 47px;\n  height: 47px;\n}\n\n.inp .grid {\n  border: 0.3px solid rgba(112, 112, 112, 0.3);\n  border-radius: 31px;\n  background-color: #f5f5f5;\n}\n\n.grid {\n  padding: 1.5%;\n  padding-top: 1.7%;\n}\n\n.msg {\n  padding: 0%;\n}\n\n.msg ion-input {\n  --padding: 0%;\n  --padding-bottom: 10px;\n}\n\n.icn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0%;\n}\n\n.grid ion-icon {\n  color: #707070;\n  font-size: 26px;\n  padding: 3px;\n}\n\n.img-box {\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 0px;\n  margin: 1.75em 0em;\n  width: 100%;\n  padding: 10px 7px 0px 10px;\n}\n\n.view {\n  width: 100%;\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.view p {\n  font-size: 14px;\n  color: #871178;\n  text-decoration: underline;\n  margin: 0%;\n}\n\n.column {\n  position: relative;\n  bottom: 18px;\n}\n\n.scroll {\n  max-width: -webkit-min-content;\n  max-width: -moz-min-content;\n  max-width: min-content;\n  max-height: -webkit-min-content;\n  max-height: -moz-min-content;\n  max-height: min-content;\n  height: 165px;\n}\n\n.scroll .main-img {\n  min-width: 97px;\n  height: 134px;\n  border-radius: 5px;\n  box-shadow: 0px 3px 6px #00000029;\n  margin-right: 14px;\n}\n\n.img-box .scroll .round-img {\n  max-width: 31px !important;\n  height: 31px;\n  position: relative;\n  top: 40px;\n  left: 7px;\n}\n\n.img-box .scroll .round-img img {\n  border-radius: 50%;\n  max-width: 31px !important;\n  height: 31px;\n}\n\n.name {\n  max-width: 85px;\n  max-height: 16px;\n  margin: 0%;\n  font-size: 10px;\n  color: #f8f8f8;\n  position: relative;\n  bottom: 35px;\n  left: 7px;\n}\n\n.profile-box {\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 0px;\n  margin: 0%;\n  margin-top: 8px;\n  padding-bottom: 0.375em;\n}\n\n.padding-class {\n  padding: 0.625em;\n}\n\n.nam p {\n  color: #22272a;\n  font-size: 1.125em;\n  margin: 3px 0px;\n  margin-top: 6px;\n  line-height: 12px;\n}\n\n.hrs p {\n  color: #707070;\n  font-size: 0.875em;\n  margin: 0px;\n}\n\n.likes {\n  border-bottom: 0.3px solid rgba(112, 112, 112, 0.3);\n  margin-bottom: 14px;\n}\n\n.like p {\n  color: #22272a;\n  font-size: 14px;\n  margin-top: 4px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSUo7O0FBREE7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBS0o7O0FBRkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFNSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFMQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVFKOztBQUxBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVFKOztBQU5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFTSjs7QUFQQTtFQUNJLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQVVKOztBQVJBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBV0o7O0FBVEE7RUFDSSxXQUFBO0FBWUo7O0FBVkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFhSjs7QUFYQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQWNKOztBQVpBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBZUo7O0FBWkE7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFlSjs7QUFiQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFnQko7O0FBZEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQWlCSjs7QUFmQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQWtCSjs7QUFoQkE7RUFDSSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSwrQkFBQTtFQUFBLDRCQUFBO0VBQUEsdUJBQUE7RUFDQSxhQUFBO0FBbUJKOztBQWpCQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FBb0JKOztBQWpCQTtFQUNJLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFvQko7O0FBbEJBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFxQko7O0FBbkJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQXNCSjs7QUFsQkE7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQXFCSjs7QUFuQkE7RUFDSSxnQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBdUJKOztBQXJCQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUF3Qko7O0FBckJBO0VBQ0ksbURBQUE7RUFDQSxtQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXlCSiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhlYWRcclxuaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzNzVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbn1cclxuLnByb2ZpbGUgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbi5ub3RpZiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEuMTI1ZW07XHJcbn1cclxuLm5vdGlmIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNjVweDtcclxufVxyXG5pb24tYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5MzEzMTtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTRweDtcclxuICAgIHJpZ2h0OiAtOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLmZpcnN0LWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAzcHggOHB4IDhweDtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5maXJzdC1jYXJkIC5hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogOTRweDtcclxuICAgIGhlaWdodDogOTRweDtcclxufVxyXG5cclxuLnRpdGxlIHAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBtYXJnaW46IDNweCAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYW5hbHlzdCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIG1hcmdpbjogMWVtIDBweDtcclxuICAgIGhlaWdodDogMi4zNzVlbTtcclxufVxyXG4uZGF0ZSBpb24tY29sIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjE4NzVlbTtcclxuICAgIGJvcmRlcjogMC4zcHggc29saWQgI2Q0ZDRkNDtcclxuICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmRhdGUgcCB7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxufVxyXG5cclxuLmlucC1ib3gge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAlO1xyXG59XHJcbi5hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNDdweDtcclxuICAgIGhlaWdodDogNDdweDtcclxufVxyXG4uaW5wIC5ncmlkIHtcclxuICAgIGJvcmRlcjogMC4zcHggc29saWQgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuLmdyaWQge1xyXG4gICAgcGFkZGluZzogMS41JTtcclxuICAgIHBhZGRpbmctdG9wOiAxLjclO1xyXG59XHJcbi5tc2cge1xyXG4gICAgcGFkZGluZzogMCU7XHJcbn1cclxuLm1zZyBpb24taW5wdXQge1xyXG4gICAgLS1wYWRkaW5nOiAwJTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmljbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCU7XHJcbn1cclxuLmdyaWQgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbi5pbWctYm94IHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIG1hcmdpbjogMS43NWVtIDBlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCA3cHggMHB4IDEwcHg7XHJcbn1cclxuLnZpZXcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG59XHJcbi52aWV3IHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIG1hcmdpbjogMCU7XHJcbn1cclxuLmNvbHVtbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDE4cHg7XHJcbn1cclxuLnNjcm9sbCB7XHJcbiAgICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xyXG4gICAgbWF4LWhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IDE2NXB4O1xyXG59XHJcbi5zY3JvbGwgLm1haW4taW1nIHtcclxuICAgIG1pbi13aWR0aDogOTdweDtcclxuICAgIGhlaWdodDogMTM0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbn1cclxuXHJcbi5pbWctYm94IC5zY3JvbGwgLnJvdW5kLWltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDMxcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGxlZnQ6IDdweDtcclxufVxyXG4uaW1nLWJveCAuc2Nyb2xsIC5yb3VuZC1pbWcgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1heC13aWR0aDogMzFweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMXB4O1xyXG59XHJcbi5uYW1lIHtcclxuICAgIG1heC13aWR0aDogODVweDtcclxuICAgIG1heC1oZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmOGY4Zjg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDM1cHg7XHJcbiAgICBsZWZ0OiA3cHg7XHJcbiAgICAvLyBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9maWxlLWJveCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMzc1ZW07XHJcbn1cclxuLnBhZGRpbmctY2xhc3Mge1xyXG4gICAgcGFkZGluZzogMC42MjVlbTtcclxufVxyXG4ubmFtIHAge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgICBtYXJnaW46IDNweCAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxufVxyXG4uaHJzIHAge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmxpa2VzIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAuM3B4IHNvbGlkIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4zKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbn1cclxuLmxpa2UgcCB7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map