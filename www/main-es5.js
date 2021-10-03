(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0: function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/apple/Desktop/Topiko/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR": function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n": function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var rxjs_rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/rx */
      "SH02");
      /* harmony import */


      var rxjs_rx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_rx__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/events.service */
      "riPR");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");
      /* harmony import */


      var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @capacitor/push-notifications */
      "asNa");

      var AppComponent_1;

      var AppComponent = AppComponent_1 = /*#__PURE__*/function () {
        function AppComponent(storage, events, http, route, platform, alertController, statusBar, screenOrientation) {
          _classCallCheck(this, AppComponent);

          this.storage = storage;
          this.events = events;
          this.http = http;
          this.route = route;
          this.platform = platform;
          this.alertController = alertController;
          this.statusBar = statusBar;
          this.screenOrientation = screenOrientation; //public static ApiUrl = 'http://localhost/topiko/app/';

          this.appPages = [{
            title: 'Home',
            url: '/home',
            icon: 'home'
          }, {
            title: 'Business',
            url: '/my-business',
            icon: 'briefcase'
          }, {
            title: 'Career',
            url: '/careerview',
            icon: 'glasses'
          }, {
            title: 'Wallet',
            url: '/wallet',
            icon: 'wallet'
          }, {
            title: 'My Visting Card',
            url: '/mycard',
            icon: 'card'
          }, {
            title: 'Qr Reach',
            url: '/qrreach',
            icon: 'qr-code'
          }, {
            title: 'Invitation',
            url: '/folder/Inbox',
            icon: 'mail-open'
          }, {
            title: 'Referal',
            url: '/folder/Inbox',
            icon: 'share-social'
          }, {
            title: 'Reach Us',
            url: '/folder/Inbox',
            icon: 'paper-plane'
          }, {
            title: 'Logout',
            url: '/relogin',
            icon: 'lock-open'
          }];
          this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
          this.storage.create();
          this.initializeApp(); //this.InitializingApp()
        }

        _createClass(AppComponent, [{
          key: "settings",
          value: function settings() {
            this.storage.set("uid", this.uid);
            this.route.navigate(['/settings']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storage.create();

                    case 2:
                      this.events.getObservable().subscribe(function (data) {
                        console.log("Logged in Data:", data);
                        _this.udata = data;
                        _this.udata = _this.udata.userdetails;
                        _this.uname = _this.udata[0].name;
                        _this.umobile = _this.udata[0].mobile;
                        _this.ucity = _this.udata[0].city;
                        _this.ucountry = _this.udata[0].country;
                        _this.uimage = _this.udata[0].image;
                        console.log(_this.udata);

                        _this.storage.set("userdetails", _this.udata);
                      });
                      this.storage.get("userdetails").then(function (data) {
                        console.log("Logged in  Storage Data:", data);
                        _this.udata = data;
                        _this.uname = _this.udata[0].name;
                        _this.umobile = _this.udata[0].mobile;
                        _this.ucity = _this.udata[0].city;
                        _this.ucountry = _this.udata[0].country;
                        _this.uimage = _this.udata[0].image;
                        console.log(_this.udata);
                      });
                      this.ObservableVar = rxjs_rx__WEBPACK_IMPORTED_MODULE_5__["Observable"].interval(3000).subscribe(function () {
                        _this.CheckIncoming();
                      }); // If using a custom driver:
                      // await this.storage.defineDriver(MyCustomDriver)

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.platform.backButton.subscribeWithPriority(9999, function () {
                document.addEventListener('backbutton', function (event) {
                  event.preventDefault();
                  event.stopPropagation();
                  console.log('hello');
                }, false); //alert("back button pressed")
              });

              _this2.statusBar.styleDefault();
            });
          }
        }, {
          key: "InitializingApp",
          value: function InitializingApp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // Request permission to use push notifications
                      // iOS will prompt user and return if they granted permission or not
                      // Android will just grant without prompting
                      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_12__["PushNotifications"].requestPermissions().then(function (result) {
                        if (result.receive === 'granted') {
                          // Register with Apple / Google to receive push via APNS/FCM
                          _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_12__["PushNotifications"].register();
                        } else {// Show some error
                        }
                      }); // On success, we should be able to receive notifications


                      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_12__["PushNotifications"].addListener('registration', function (token) {
                        _this3.ftoken = token;

                        _this3.storage.get("userdetails").then(function (val) {
                          _this3.udata = val;
                          _this3.user_id = _this3.udata[0].id;

                          _this3.http.get(AppComponent_1.ApiUrl + "updatefcmid.php?user_id=" + _this3.user_id + "token=" + _this3.ftoken.value).subscribe(function (fres) {
                            console.log(fres);
                          });
                        });
                      }); // Some issue with our setup and push will not work


                      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_12__["PushNotifications"].addListener('registrationError', function (error) {//alert('Error on registration: ' + JSON.stringify(error));
                      }); // Show us the notification payload if the app is open on our device


                      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_12__["PushNotifications"].addListener('pushNotificationReceived', function (notification) {
                        alert('New Message received: ' + JSON.stringify(notification));
                      }); // Method called when tapping on a notification


                      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_12__["PushNotifications"].addListener('pushNotificationActionPerformed', function (notification) {//alert('Push action performed: ' + JSON.stringify(notification));
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "CheckIncoming",
          value: function CheckIncoming() {
            var _this4 = this;

            this.storage.get("userdetails").then(function (uval) {
              _this4.userDetails = uval;
              _this4.user_mobile = _this4.userDetails[0].mobile;

              if (_this4.user_mobile) {
                _this4.http.get(AppComponent_1.ApiUrl + "checkincomming.php?user_mobile=" + _this4.user_mobile).subscribe(function (incoming) {
                  _this4.incomming = incoming;
                  console.log("incoming:", _this4.incomming);

                  if (_this4.incomming != 0) {
                    _this4.route.navigate(['/calls']);
                  } else {//this.route.navigate(['home']);
                  }
                });
              }
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ApiUrl = 'https://topiko.com/app/';

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__["ScreenOrientation"]
        }];
      };

      AppComponent = AppComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu": function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <div class=\"side-head\">\n            <ion-row>\n              <ion-col size=\"3\" style=\"padding: 10px;\">English</ion-col>\n              <ion-col (click)=\"settings()\" style=\"text-align: right;\"><ion-icon name=\"cog-outline\"></ion-icon></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"5\"></ion-col>\n              <ion-col>\n                <ion-avatar *ngIf=\"uimage != ''\"><img src=\"{{uimage}}\"></ion-avatar>\n                <span *ngIf=\"uimage == ''\">\n                  <p style=\"background: #00a56e; position: absolute; top:-0.5em; font-size: 4em; color:#fff; text-align: center; width: 50px; height: 50px; padding:0px; border-radius:50%;margin-bottom: 7%;\">{{uname | slice:0:1}}</p>\n                </span>\n              </ion-col>\n              <ion-col size=\"5\"></ion-col>\n            </ion-row>\n            <ion-row style=\"margin-top:2%\">\n              <ion-col>\n                <h2>{{uname}}</h2>\n                <p>{{ucity}}, {{ucountry}}</p>\n              </ion-col>\n            </ion-row>\n         \n        </div>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <!-- <ion-list id=\"labels-list\">\n          <ion-list-header>Labels</ion-list-header>\n\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n            <ion-label>{{ label }}</ion-label>\n          </ion-item>\n        </ion-list> -->\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4": function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "xS7M");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/qr-scanner/ngx */
      "BLr9");
      /* harmony import */


      var angularx_qrcode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! angularx-qrcode */
      "0hV+");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "Wwn5");
      /* harmony import */


      var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/launch-navigator/ngx */
      "fGQ8");
      /* harmony import */


      var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/media/ngx */
      "9YJ4");
      /* harmony import */


      var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/contacts/ngx */
      "TzAO");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_16__["QRCodeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot()],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicRouteStrategy"]
        }, _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_20__["Contacts"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_21__["StatusBar"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_22__["ScreenOrientation"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__["FileTransfer"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_15__["QRScanner"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__["CallNumber"], _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_18__["LaunchNavigator"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_19__["Media"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "kLfG": function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "riPR": function riPR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsService", function () {
        return EventsService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var EventsService = /*#__PURE__*/function () {
        function EventsService() {
          _classCallCheck(this, EventsService);

          this.fooSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(EventsService, [{
          key: "publishSomeData",
          value: function publishSomeData(data) {
            this.fooSubject.next(data);
          }
        }, {
          key: "getObservable",
          value: function getObservable() {
            return this.fooSubject;
          }
        }]);

        return EventsService;
      }();

      EventsService.ctorParameters = function () {
        return [];
      };

      EventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EventsService);
      /***/
    },

    /***/
    "vY5A": function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'folder/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | folder-folder-module */
          "folder-folder-module").then(__webpack_require__.bind(null,
          /*! ./folder/folder.module */
          "yIOV")).then(function (m) {
            return m.FolderPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'otp',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | otp-otp-module */
          "otp-otp-module").then(__webpack_require__.bind(null,
          /*! ./otp/otp.module */
          "ikiF")).then(function (m) {
            return m.OtpPageModule;
          });
        }
      }, {
        path: 'createdvc',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | createdvc-createdvc-module */
          "createdvc-createdvc-module").then(__webpack_require__.bind(null,
          /*! ./createdvc/createdvc.module */
          "FT92")).then(function (m) {
            return m.CreatedvcPageModule;
          });
        }
      }, {
        path: 'digitalcard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | digitalcard-digitalcard-module */
          "digitalcard-digitalcard-module").then(__webpack_require__.bind(null,
          /*! ./digitalcard/digitalcard.module */
          "cVP2")).then(function (m) {
            return m.DigitalcardPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "ct+p")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'digitalvcard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | digitalvcard-digitalvcard-module */
          "digitalvcard-digitalvcard-module").then(__webpack_require__.bind(null,
          /*! ./digitalvcard/digitalvcard.module */
          "mzuC")).then(function (m) {
            return m.DigitalvcardPageModule;
          });
        }
      }, {
        path: 'terms',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | terms-terms-module */
          "terms-terms-module").then(__webpack_require__.bind(null,
          /*! ./terms/terms.module */
          "eNqe")).then(function (m) {
            return m.TermsPageModule;
          });
        }
      }, {
        path: 'myvcard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | myvcard-myvcard-module */
          "myvcard-myvcard-module").then(__webpack_require__.bind(null,
          /*! ./myvcard/myvcard.module */
          "Mqsi")).then(function (m) {
            return m.MyvcardPageModule;
          });
        }
      }, {
        path: 'morevcards',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | morevcards-morevcards-module */
          "morevcards-morevcards-module").then(__webpack_require__.bind(null,
          /*! ./morevcards/morevcards.module */
          "RdsV")).then(function (m) {
            return m.MorevcardsPageModule;
          });
        }
      }, {
        path: 'editdvdetails',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | editdvdetails-editdvdetails-module */
          "editdvdetails-editdvdetails-module").then(__webpack_require__.bind(null,
          /*! ./editdvdetails/editdvdetails.module */
          "FW6d")).then(function (m) {
            return m.EditdvdetailsPageModule;
          });
        }
      }, {
        path: 'calls',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | calls-calls-module */
          [__webpack_require__.e("default~calls-calls-module~calls-contact-calls-contact-module~connect-connect-module~videocall-video~23fb032a"), __webpack_require__.e("common"), __webpack_require__.e("calls-calls-module")]).then(__webpack_require__.bind(null,
          /*! ./calls/calls.module */
          "Ugfu")).then(function (m) {
            return m.CallsPageModule;
          });
        }
      }, {
        path: 'connect',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | connect-connect-module */
          [__webpack_require__.e("default~calls-calls-module~calls-contact-calls-contact-module~connect-connect-module~videocall-video~23fb032a"), __webpack_require__.e("common"), __webpack_require__.e("connect-connect-module")]).then(__webpack_require__.bind(null,
          /*! ./connect/connect.module */
          "yXIz")).then(function (m) {
            return m.ConnectPageModule;
          });
        }
      }, {
        path: 'dial',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dial-dial-module */
          "dial-dial-module").then(__webpack_require__.bind(null,
          /*! ./dial/dial.module */
          "3rUi")).then(function (m) {
            return m.DialPageModule;
          });
        }
      }, {
        path: 'product',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | product-product-module */
          "product-product-module").then(__webpack_require__.bind(null,
          /*! ./product/product.module */
          "qvFY")).then(function (m) {
            return m.ProductPageModule;
          });
        }
      }, {
        path: 'service',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | service-service-module */
          "service-service-module").then(__webpack_require__.bind(null,
          /*! ./service/service.module */
          "mhyn")).then(function (m) {
            return m.ServicePageModule;
          });
        }
      }, {
        path: 'employee',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | employee-employee-module */
          "employee-employee-module").then(__webpack_require__.bind(null,
          /*! ./employee/employee.module */
          "PgJR")).then(function (m) {
            return m.EmployeePageModule;
          });
        }
      }, {
        path: 'addemployee',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | addemployee-addemployee-module */
          "addemployee-addemployee-module").then(__webpack_require__.bind(null,
          /*! ./addemployee/addemployee.module */
          "uWTs")).then(function (m) {
            return m.AddemployeePageModule;
          });
        }
      }, {
        path: 'qrreach',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | qrreach-qrreach-module */
          "qrreach-qrreach-module").then(__webpack_require__.bind(null,
          /*! ./qrreach/qrreach.module */
          "pBcL")).then(function (m) {
            return m.QrreachPageModule;
          });
        }
      }, {
        path: 'mpin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mpin-mpin-module */
          "mpin-mpin-module").then(__webpack_require__.bind(null,
          /*! ./mpin/mpin.module */
          "SOG4")).then(function (m) {
            return m.MpinPageModule;
          });
        }
      }, {
        path: 'mycard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | mycard-mycard-module */
          [__webpack_require__.e("default~edit-employee-edit-employee-module~mycard-mycard-module"), __webpack_require__.e("mycard-mycard-module")]).then(__webpack_require__.bind(null,
          /*! ./mycard/mycard.module */
          "WZkD")).then(function (m) {
            return m.MycardPageModule;
          });
        }
      }, {
        path: 'qr-scanner',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | qr-scanner-qr-scanner-module */
          "qr-scanner-qr-scanner-module").then(__webpack_require__.bind(null,
          /*! ./qr-scanner/qr-scanner.module */
          "K9JO")).then(function (m) {
            return m.QrScannerPageModule;
          });
        }
      }, {
        path: 'addqr',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | addqr-addqr-module */
          "addqr-addqr-module").then(__webpack_require__.bind(null,
          /*! ./addqr/addqr.module */
          "o0VF")).then(function (m) {
            return m.AddqrPageModule;
          });
        }
      }, {
        path: 'add-qr-reach',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-qr-reach-add-qr-reach-module */
          "add-qr-reach-add-qr-reach-module").then(__webpack_require__.bind(null,
          /*! ./add-qr-reach/add-qr-reach.module */
          "3dyv")).then(function (m) {
            return m.AddQrReachPageModule;
          });
        }
      }, {
        path: 'my-business',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | my-business-my-business-module */
          "my-business-my-business-module").then(__webpack_require__.bind(null,
          /*! ./my-business/my-business.module */
          "tg+D")).then(function (m) {
            return m.MyBusinessPageModule;
          });
        }
      }, {
        path: 'create-business',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | create-business-create-business-module */
          "create-business-create-business-module").then(__webpack_require__.bind(null,
          /*! ./create-business/create-business.module */
          "eJ5f")).then(function (m) {
            return m.CreateBusinessPageModule;
          });
        }
      }, {
        path: 'business-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | business-details-business-details-module */
          "business-details-business-details-module").then(__webpack_require__.bind(null,
          /*! ./business-details/business-details.module */
          "iWjC")).then(function (m) {
            return m.BusinessDetailsPageModule;
          });
        }
      }, {
        path: 'business-profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | business-profile-business-profile-module */
          "business-profile-business-profile-module").then(__webpack_require__.bind(null,
          /*! ./business-profile/business-profile.module */
          "w0yx")).then(function (m) {
            return m.BusinessProfilePageModule;
          });
        }
      }, {
        path: 'offers',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | offers-offers-module */
          "offers-offers-module").then(__webpack_require__.bind(null,
          /*! ./offers/offers.module */
          "x4ys")).then(function (m) {
            return m.OffersPageModule;
          });
        }
      }, {
        path: 'record-view',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | record-view-record-view-module */
          "record-view-record-view-module").then(__webpack_require__.bind(null,
          /*! ./record-view/record-view.module */
          "+ZGF")).then(function (m) {
            return m.RecordViewPageModule;
          });
        }
      }, {
        path: 'add-product',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-product-add-product-module */
          "add-product-add-product-module").then(__webpack_require__.bind(null,
          /*! ./add-product/add-product.module */
          "gp+k")).then(function (m) {
            return m.AddProductPageModule;
          });
        }
      }, {
        path: 'add-service',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-service-add-service-module */
          "add-service-add-service-module").then(__webpack_require__.bind(null,
          /*! ./add-service/add-service.module */
          "oOJ9")).then(function (m) {
            return m.AddServicePageModule;
          });
        }
      }, {
        path: 'add-employee',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-employee-add-employee-module */
          "add-employee-add-employee-module").then(__webpack_require__.bind(null,
          /*! ./add-employee/add-employee.module */
          "y7iA")).then(function (m) {
            return m.AddEmployeePageModule;
          });
        }
      }, {
        path: 'qr-payments',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | qr-payments-qr-payments-module */
          "qr-payments-qr-payments-module").then(__webpack_require__.bind(null,
          /*! ./qr-payments/qr-payments.module */
          "h52t")).then(function (m) {
            return m.QrPaymentsPageModule;
          });
        }
      }, {
        path: 'add-qr-payments',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-qr-payments-add-qr-payments-module */
          "add-qr-payments-add-qr-payments-module").then(__webpack_require__.bind(null,
          /*! ./add-qr-payments/add-qr-payments.module */
          "1dkZ")).then(function (m) {
            return m.AddQrPaymentsPageModule;
          });
        }
      }, {
        path: 'plans',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | plans-plans-module */
          "plans-plans-module").then(__webpack_require__.bind(null,
          /*! ./plans/plans.module */
          "CaEi")).then(function (m) {
            return m.PlansPageModule;
          });
        }
      }, {
        path: 'verification',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | verification-verification-module */
          "verification-verification-module").then(__webpack_require__.bind(null,
          /*! ./verification/verification.module */
          "Kw+X")).then(function (m) {
            return m.VerificationPageModule;
          });
        }
      }, {
        path: 'global-search',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | global-search-global-search-module */
          "global-search-global-search-module").then(__webpack_require__.bind(null,
          /*! ./global-search/global-search.module */
          "PVMv")).then(function (m) {
            return m.GlobalSearchPageModule;
          });
        }
      }, {
        path: 'notification',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | notification-notification-module */
          "notification-notification-module").then(__webpack_require__.bind(null,
          /*! ./notification/notification.module */
          "TLzw")).then(function (m) {
            return m.NotificationPageModule;
          });
        }
      }, {
        path: 'offersnearyou',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | offersnearyou-offersnearyou-module */
          "offersnearyou-offersnearyou-module").then(__webpack_require__.bind(null,
          /*! ./offersnearyou/offersnearyou.module */
          "0Wm/")).then(function (m) {
            return m.OffersnearyouPageModule;
          });
        }
      }, {
        path: 'shopsnearyou',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | shopsnearyou-shopsnearyou-module */
          "shopsnearyou-shopsnearyou-module").then(__webpack_require__.bind(null,
          /*! ./shopsnearyou/shopsnearyou.module */
          "ZHX0")).then(function (m) {
            return m.ShopsnearyouPageModule;
          });
        }
      }, {
        path: 'servicesnearyou',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | servicesnearyou-servicesnearyou-module */
          "servicesnearyou-servicesnearyou-module").then(__webpack_require__.bind(null,
          /*! ./servicesnearyou/servicesnearyou.module */
          "3Hlm")).then(function (m) {
            return m.ServicesnearyouPageModule;
          });
        }
      }, {
        path: 'featured',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | featured-featured-module */
          "featured-featured-module").then(__webpack_require__.bind(null,
          /*! ./featured/featured.module */
          "HHnp")).then(function (m) {
            return m.FeaturedPageModule;
          });
        }
      }, {
        path: 'recent',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | recent-recent-module */
          "recent-recent-module").then(__webpack_require__.bind(null,
          /*! ./recent/recent.module */
          "N6b7")).then(function (m) {
            return m.RecentPageModule;
          });
        }
      }, {
        path: 'shop-categories',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | shop-categories-shop-categories-module */
          "shop-categories-shop-categories-module").then(__webpack_require__.bind(null,
          /*! ./shop-categories/shop-categories.module */
          "Marq")).then(function (m) {
            return m.ShopCategoriesPageModule;
          });
        }
      }, {
        path: 'service-categories',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | service-categories-service-categories-module */
          "service-categories-service-categories-module").then(__webpack_require__.bind(null,
          /*! ./service-categories/service-categories.module */
          "pKK3")).then(function (m) {
            return m.ServiceCategoriesPageModule;
          });
        }
      }, {
        path: 'favourites',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | favourites-favourites-module */
          "favourites-favourites-module").then(__webpack_require__.bind(null,
          /*! ./favourites/favourites.module */
          "LLgE")).then(function (m) {
            return m.FavouritesPageModule;
          });
        }
      }, {
        path: 'favourite-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | favourite-details-favourite-details-module */
          "favourite-details-favourite-details-module").then(__webpack_require__.bind(null,
          /*! ./favourite-details/favourite-details.module */
          "o7BE")).then(function (m) {
            return m.FavouriteDetailsPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile-profile-module */
          "profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "cRhG")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'business-views',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | business-views-business-views-module */
          "business-views-business-views-module").then(__webpack_require__.bind(null,
          /*! ./business-views/business-views.module */
          "WC4N")).then(function (m) {
            return m.BusinessViewsPageModule;
          });
        }
      }, {
        path: 'product-views',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | product-views-product-views-module */
          "product-views-product-views-module").then(__webpack_require__.bind(null,
          /*! ./product-views/product-views.module */
          "pTyn")).then(function (m) {
            return m.ProductViewsPageModule;
          });
        }
      }, {
        path: 'offer-views',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | offer-views-offer-views-module */
          "offer-views-offer-views-module").then(__webpack_require__.bind(null,
          /*! ./offer-views/offer-views.module */
          "crPI")).then(function (m) {
            return m.OfferViewsPageModule;
          });
        }
      }, {
        path: 'service-views',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | service-views-service-views-module */
          "service-views-service-views-module").then(__webpack_require__.bind(null,
          /*! ./service-views/service-views.module */
          "T/UR")).then(function (m) {
            return m.ServiceViewsPageModule;
          });
        }
      }, {
        path: 'record-views',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | record-views-record-views-module */
          "record-views-record-views-module").then(__webpack_require__.bind(null,
          /*! ./record-views/record-views.module */
          "yqNi")).then(function (m) {
            return m.RecordViewsPageModule;
          });
        }
      }, {
        path: 'qr-reach-view',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | qr-reach-view-qr-reach-view-module */
          "qr-reach-view-qr-reach-view-module").then(__webpack_require__.bind(null,
          /*! ./qr-reach-view/qr-reach-view.module */
          "Hzdy")).then(function (m) {
            return m.QrReachViewPageModule;
          });
        }
      }, {
        path: 'edit-qr-reach',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | edit-qr-reach-edit-qr-reach-module */
          "edit-qr-reach-edit-qr-reach-module").then(__webpack_require__.bind(null,
          /*! ./edit-qr-reach/edit-qr-reach.module */
          "X382")).then(function (m) {
            return m.EditQrReachPageModule;
          });
        }
      }, {
        path: 'add-offer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-offer-add-offer-module */
          "add-offer-add-offer-module").then(__webpack_require__.bind(null,
          /*! ./add-offer/add-offer.module */
          "QX4/")).then(function (m) {
            return m.AddOfferPageModule;
          });
        }
      }, {
        path: 'addbranches',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | addbranches-addbranches-module */
          "addbranches-addbranches-module").then(__webpack_require__.bind(null,
          /*! ./addbranches/addbranches.module */
          "wcdY")).then(function (m) {
            return m.AddbranchesPageModule;
          });
        }
      }, {
        path: 'branches',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | branches-branches-module */
          "branches-branches-module").then(__webpack_require__.bind(null,
          /*! ./branches/branches.module */
          "7zc+")).then(function (m) {
            return m.BranchesPageModule;
          });
        }
      }, {
        path: 'edit-product',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | edit-product-edit-product-module */
          "edit-product-edit-product-module").then(__webpack_require__.bind(null,
          /*! ./edit-product/edit-product.module */
          "dsgz")).then(function (m) {
            return m.EditProductPageModule;
          });
        }
      }, {
        path: 'edit-offer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | edit-offer-edit-offer-module */
          "edit-offer-edit-offer-module").then(__webpack_require__.bind(null,
          /*! ./edit-offer/edit-offer.module */
          "aOOh")).then(function (m) {
            return m.EditOfferPageModule;
          });
        }
      }, {
        path: 'edit-employee',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | edit-employee-edit-employee-module */
          [__webpack_require__.e("default~edit-employee-edit-employee-module~mycard-mycard-module"), __webpack_require__.e("edit-employee-edit-employee-module")]).then(__webpack_require__.bind(null,
          /*! ./edit-employee/edit-employee.module */
          "uo0V")).then(function (m) {
            return m.EditEmployeePageModule;
          });
        }
      }, {
        path: 'edit-service',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | edit-service-edit-service-module */
          "edit-service-edit-service-module").then(__webpack_require__.bind(null,
          /*! ./edit-service/edit-service.module */
          "WFNT")).then(function (m) {
            return m.EditServicePageModule;
          });
        }
      }, {
        path: 'showcase',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | showcase-showcase-module */
          "showcase-showcase-module").then(__webpack_require__.bind(null,
          /*! ./showcase/showcase.module */
          "Zah/")).then(function (m) {
            return m.ShowcasePageModule;
          });
        }
      }, {
        path: 'editshowcase',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | editshowcase-editshowcase-module */
          "editshowcase-editshowcase-module").then(__webpack_require__.bind(null,
          /*! ./editshowcase/editshowcase.module */
          "53Bx")).then(function (m) {
            return m.EditshowcasePageModule;
          });
        }
      }, {
        path: 'detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | detail-detail-module */
          "detail-detail-module").then(__webpack_require__.bind(null,
          /*! ./detail/detail.module */
          "lM0Z")).then(function (m) {
            return m.DetailPageModule;
          });
        }
      }, {
        path: 'details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | details-details-module */
          "details-details-module").then(__webpack_require__.bind(null,
          /*! ./details/details.module */
          "QR/W")).then(function (m) {
            return m.DetailsPageModule;
          });
        }
      }, {
        path: 'item',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | item-item-module */
          "item-item-module").then(__webpack_require__.bind(null,
          /*! ./item/item.module */
          "bzNi")).then(function (m) {
            return m.ItemPageModule;
          });
        }
      }, {
        path: 'chatbox',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | chatbox-chatbox-module */
          "chatbox-chatbox-module").then(__webpack_require__.bind(null,
          /*! ./chatbox/chatbox.module */
          "3nvi")).then(function (m) {
            return m.ChatboxPageModule;
          });
        }
      }, {
        path: 'shophere',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | shophere-shophere-module */
          "shophere-shophere-module").then(__webpack_require__.bind(null,
          /*! ./shophere/shophere.module */
          "6YLs")).then(function (m) {
            return m.ShopherePageModule;
          });
        }
      }, {
        path: 'careerview',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | careerview-careerview-module */
          "careerview-careerview-module").then(__webpack_require__.bind(null,
          /*! ./careerview/careerview.module */
          "neAm")).then(function (m) {
            return m.CareerviewPageModule;
          });
        }
      }, {
        path: 'search-company-records',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | search-company-records-search-company-records-module */
          "search-company-records-search-company-records-module").then(__webpack_require__.bind(null,
          /*! ./search-company-records/search-company-records.module */
          "P4RQ")).then(function (m) {
            return m.SearchCompanyRecordsPageModule;
          });
        }
      }, {
        path: 'career',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | career-career-module */
          "career-career-module").then(__webpack_require__.bind(null,
          /*! ./career/career.module */
          "PgHP")).then(function (m) {
            return m.CareerPageModule;
          });
        }
      }, {
        path: 'resume',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | resume-resume-module */
          "resume-resume-module").then(__webpack_require__.bind(null,
          /*! ./resume/resume.module */
          "i98n")).then(function (m) {
            return m.ResumePageModule;
          });
        }
      }, {
        path: 'record',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | record-record-module */
          "record-record-module").then(__webpack_require__.bind(null,
          /*! ./record/record.module */
          "faDB")).then(function (m) {
            return m.RecordPageModule;
          });
        }
      }, {
        path: 'records',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | records-records-module */
          "records-records-module").then(__webpack_require__.bind(null,
          /*! ./records/records.module */
          "1V/X")).then(function (m) {
            return m.RecordsPageModule;
          });
        }
      }, {
        path: 'company-chats',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | company-chats-company-chats-module */
          "company-chats-company-chats-module").then(__webpack_require__.bind(null,
          /*! ./company-chats/company-chats.module */
          "VNIC")).then(function (m) {
            return m.CompanyChatsPageModule;
          });
        }
      }, {
        path: 'interview',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | interview-interview-module */
          "interview-interview-module").then(__webpack_require__.bind(null,
          /*! ./interview/interview.module */
          "nOkm")).then(function (m) {
            return m.InterviewPageModule;
          });
        }
      }, {
        path: 'partner',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | partner-partner-module */
          "partner-partner-module").then(__webpack_require__.bind(null,
          /*! ./partner/partner.module */
          "Bms8")).then(function (m) {
            return m.PartnerPageModule;
          });
        }
      }, {
        path: 'employee-view',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | employee-view-employee-view-module */
          "employee-view-employee-view-module").then(__webpack_require__.bind(null,
          /*! ./employee-view/employee-view.module */
          "rSqm")).then(function (m) {
            return m.EmployeeViewPageModule;
          });
        }
      }, {
        path: 'add-resume',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-resume-add-resume-module */
          "add-resume-add-resume-module").then(__webpack_require__.bind(null,
          /*! ./add-resume/add-resume.module */
          "i4yQ")).then(function (m) {
            return m.AddResumePageModule;
          });
        }
      }, {
        path: 'employee-group',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | employee-group-employee-group-module */
          "employee-group-employee-group-module").then(__webpack_require__.bind(null,
          /*! ./employee-group/employee-group.module */
          "L28L")).then(function (m) {
            return m.EmployeeGroupPageModule;
          });
        }
      }, {
        path: 'wallet',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | wallet-wallet-module */
          "wallet-wallet-module").then(__webpack_require__.bind(null,
          /*! ./wallet/wallet.module */
          "43Fg")).then(function (m) {
            return m.WalletPageModule;
          });
        }
      }, {
        path: 'add-value',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-value-add-value-module */
          "add-value-add-value-module").then(__webpack_require__.bind(null,
          /*! ./add-value/add-value.module */
          "4mOd")).then(function (m) {
            return m.AddValuePageModule;
          });
        }
      }, {
        path: 'pay-bills',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pay-bills-pay-bills-module */
          "pay-bills-pay-bills-module").then(__webpack_require__.bind(null,
          /*! ./pay-bills/pay-bills.module */
          "X9m8")).then(function (m) {
            return m.PayBillsPageModule;
          });
        }
      }, {
        path: 'value-history',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | value-history-value-history-module */
          "value-history-value-history-module").then(__webpack_require__.bind(null,
          /*! ./value-history/value-history.module */
          "Aiyc")).then(function (m) {
            return m.ValueHistoryPageModule;
          });
        }
      }, {
        path: 'referral-points',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | referral-points-referral-points-module */
          "referral-points-referral-points-module").then(__webpack_require__.bind(null,
          /*! ./referral-points/referral-points.module */
          "BH1I")).then(function (m) {
            return m.ReferralPointsPageModule;
          });
        }
      }, {
        path: 'mobile-recharge',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mobile-recharge-mobile-recharge-module */
          "mobile-recharge-mobile-recharge-module").then(__webpack_require__.bind(null,
          /*! ./mobile-recharge/mobile-recharge.module */
          "zdTX")).then(function (m) {
            return m.MobileRechargePageModule;
          });
        }
      }, {
        path: 'current-plan',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | current-plan-current-plan-module */
          "current-plan-current-plan-module").then(__webpack_require__.bind(null,
          /*! ./current-plan/current-plan.module */
          "3vHc")).then(function (m) {
            return m.CurrentPlanPageModule;
          });
        }
      }, {
        path: 'plan-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | plan-details-plan-details-module */
          "plan-details-plan-details-module").then(__webpack_require__.bind(null,
          /*! ./plan-details/plan-details.module */
          "WGdp")).then(function (m) {
            return m.PlanDetailsPageModule;
          });
        }
      }, {
        path: 'history',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | history-history-module */
          "history-history-module").then(__webpack_require__.bind(null,
          /*! ./history/history.module */
          "9u+z")).then(function (m) {
            return m.HistoryPageModule;
          });
        }
      }, {
        path: 'person-connect',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | person-connect-person-connect-module */
          "person-connect-person-connect-module").then(__webpack_require__.bind(null,
          /*! ./person-connect/person-connect.module */
          "nPop")).then(function (m) {
            return m.PersonConnectPageModule;
          });
        }
      }, {
        path: 'calling',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | calling-calling-module */
          "calling-calling-module").then(__webpack_require__.bind(null,
          /*! ./calling/calling.module */
          "WliF")).then(function (m) {
            return m.CallingPageModule;
          });
        }
      }, {
        path: 'calls-contact',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | calls-contact-calls-contact-module */
          [__webpack_require__.e("default~calls-calls-module~calls-contact-calls-contact-module~connect-connect-module~videocall-video~23fb032a"), __webpack_require__.e("common"), __webpack_require__.e("calls-contact-calls-contact-module")]).then(__webpack_require__.bind(null,
          /*! ./calls-contact/calls-contact.module */
          "Aw3t")).then(function (m) {
            return m.CallsContactPageModule;
          });
        }
      }, {
        path: 'chats-contact',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | chats-contact-chats-contact-module */
          "chats-contact-chats-contact-module").then(__webpack_require__.bind(null,
          /*! ./chats-contact/chats-contact.module */
          "OhGK")).then(function (m) {
            return m.ChatsContactPageModule;
          });
        }
      }, {
        path: 'top-up',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | top-up-top-up-module */
          "top-up-top-up-module").then(__webpack_require__.bind(null,
          /*! ./top-up/top-up.module */
          "1oys")).then(function (m) {
            return m.TopUpPageModule;
          });
        }
      }, {
        path: 'my-qr-reach',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | my-qr-reach-my-qr-reach-module */
          "my-qr-reach-my-qr-reach-module").then(__webpack_require__.bind(null,
          /*! ./my-qr-reach/my-qr-reach.module */
          "erSw")).then(function (m) {
            return m.MyQrReachPageModule;
          });
        }
      }, {
        path: 'choose',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | choose-choose-module */
          "choose-choose-module").then(__webpack_require__.bind(null,
          /*! ./choose/choose.module */
          "s206")).then(function (m) {
            return m.ChoosePageModule;
          });
        }
      }, {
        path: 'company-qrpayment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | company-qrpayment-company-qrpayment-module */
          "company-qrpayment-company-qrpayment-module").then(__webpack_require__.bind(null,
          /*! ./company-qrpayment/company-qrpayment.module */
          "YDmR")).then(function (m) {
            return m.CompanyQrpaymentPageModule;
          });
        }
      }, {
        path: 'relogin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | relogin-relogin-module */
          "relogin-relogin-module").then(__webpack_require__.bind(null,
          /*! ./relogin/relogin.module */
          "k8cx")).then(function (m) {
            return m.ReloginPageModule;
          });
        }
      }, {
        path: 'videocall',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | videocall-videocall-module */
          [__webpack_require__.e("default~calls-calls-module~calls-contact-calls-contact-module~connect-connect-module~videocall-video~23fb032a"), __webpack_require__.e("videocall-videocall-module")]).then(__webpack_require__.bind(null,
          /*! ./videocall/videocall.module */
          "6Ylz")).then(function (m) {
            return m.VideocallPageModule;
          });
        }
      }, {
        path: 'businesses',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | businesses-businesses-module */
          "businesses-businesses-module").then(__webpack_require__.bind(null,
          /*! ./businesses/businesses.module */
          "+VWH")).then(function (m) {
            return m.BusinessesPageModule;
          });
        }
      }, {
        path: 'businesses-service',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | businesses-service-businesses-service-module */
          "businesses-service-businesses-service-module").then(__webpack_require__.bind(null,
          /*! ./businesses-service/businesses-service.module */
          "qZOI")).then(function (m) {
            return m.BusinessesServicePageModule;
          });
        }
      }, {
        path: 'gdetails',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | gdetails-gdetails-module */
          "gdetails-gdetails-module").then(__webpack_require__.bind(null,
          /*! ./gdetails/gdetails.module */
          "47e1")).then(function (m) {
            return m.GdetailsPageModule;
          });
        }
      }, {
        path: 'gcategory',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | gcategory-gcategory-module */
          "gcategory-gcategory-module").then(__webpack_require__.bind(null,
          /*! ./gcategory/gcategory.module */
          "cWrZ")).then(function (m) {
            return m.GcategoryPageModule;
          });
        }
      }, {
        path: 'contact',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | contact-contact-module */
          "contact-contact-module").then(__webpack_require__.bind(null,
          /*! ./contact/contact.module */
          "BjQp")).then(function (m) {
            return m.ContactPageModule;
          });
        }
      }, {
        path: 'shop-here',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | shop-here-shop-here-module */
          "shop-here-shop-here-module").then(__webpack_require__.bind(null,
          /*! ./shop-here/shop-here.module */
          "tQiC")).then(function (m) {
            return m.ShopHerePageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | settings-settings-module */
          "settings-settings-module").then(__webpack_require__.bind(null,
          /*! ./settings/settings.module */
          "7wo0")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'edit-profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | edit-profile-edit-profile-module */
          "edit-profile-edit-profile-module").then(__webpack_require__.bind(null,
          /*! ./edit-profile/edit-profile.module */
          "Wvzw")).then(function (m) {
            return m.EditProfilePageModule;
          });
        }
      }, {
        path: 'edit-branch',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | edit-branch-edit-branch-module */
          "edit-branch-edit-branch-module").then(__webpack_require__.bind(null,
          /*! ./edit-branch/edit-branch.module */
          "NnWJ")).then(function (m) {
            return m.EditBranchPageModule;
          });
        }
      }, {
        path: 'edit-business',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | edit-business-edit-business-module */
          "edit-business-edit-business-module").then(__webpack_require__.bind(null,
          /*! ./edit-business/edit-business.module */
          "Qf6s")).then(function (m) {
            return m.EditBusinessPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL": function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n  padding-top: 0px;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 0 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n  font-size: 1em;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: #871178;\n  font-size: 24px;\n}\n\n.item.sc-ion-label-ios-h {\n  color: #871178;\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.side-head {\n  background: linear-gradient(#871178, #3d1378) !important;\n  color: #fff;\n  font-size: 12px;\n}\n\n.side-head img {\n  margin: 0 auto;\n  text-align: center;\n}\n\n.side-head ion-icon {\n  font-size: 24px;\n  padding: 5px;\n}\n\n.side-head h2,\np {\n  text-align: center;\n  color: #fff;\n  line-height: 1;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUE7RUFFRSxjQUFBO0FBSkY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkY7O0FBT0E7RUFDRSx3REFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSkY7O0FBTUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRkY7O0FBSUE7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFERiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6Izg3MTE3ODtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uaXRlbS5zYy1pb24tbGFiZWwtaW9zLWhcbntcbiAgY29sb3I6Izg3MTE3ODtcbn1cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2lkZS1oZWFkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzZDEzNzgpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uc2lkZS1oZWFkIGltZyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lkZS1oZWFkIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uc2lkZS1oZWFkIGgyLFxucCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "zUnb": function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P": function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map