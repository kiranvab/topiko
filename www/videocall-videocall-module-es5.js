(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videocall-videocall-module"], {
    /***/
    "0R2u": function R2u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideocallPage", function () {
        return VideocallPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_videocall_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./videocall.page.html */
      "tyO+");
      /* harmony import */


      var _videocall_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./videocall.page.scss */
      "zpFX");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/media/ngx */
      "9YJ4");
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
      /* harmony import */


      var _providers_webrtc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../providers/webrtc.service */
      "ySJ8");

      var VideocallPage = /*#__PURE__*/function () {
        function VideocallPage(webRTC, elRef, storage, http, media, navCtrl) {
          _classCallCheck(this, VideocallPage);

          this.webRTC = webRTC;
          this.elRef = elRef;
          this.storage = storage;
          this.http = http;
          this.media = media;
          this.navCtrl = navCtrl;
          this.topVideoFrame = 'partner-video';
          this.ring = this.media.create('https://topiko.com/ringtones/ring.mp3');
          this.ringtone = this.media.create('https://topiko.com/ringtones/ringtone.mp3');
          this.busytone = this.media.create('https://topiko.com/ringtones/busy.mp3');
        }

        _createClass(VideocallPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get('userdetails').then(function (udetails) {
              _this.userDetails = udetails;
              _this.userId = _this.userDetails[0].mobile;

              _this.init();
            });
            this.storage.get("partnerId").then(function (partner) {
              _this.partnerId = partner;

              _this.StartVCall(_this.partnerId);

              var vidcall = _this;
              setTimeout(function () {
                vidcall.call();
              }, 3000);
            });
          } //start Call

        }, {
          key: "StartVCall",
          value: function StartVCall(pid) {
            var _this2 = this;

            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "startcall.php?user_mobile=" + this.userId + "&calee_mobile=" + pid + "&call_type=video").subscribe(function (ResponseData) {
              _this2.ResponseData = ResponseData;
              console.log("Call Response Data:", _this2.ResponseData);

              if (_this2.ResponseData != 0) {
                _this2.callId = _this2.ResponseData;

                _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "callstatus.php?calee_moble=" + pid).subscribe(function (calval) {
                  _this2.callstatus = calval;

                  if (_this2.callstatus == 0) {
                    _this2.ring = _this2.media.create('https://topiko.com/ringtones/ring.mp3');
                    console.log(_this2.ring);

                    _this2.ring.setVolume(1);

                    _this2.ring.play();

                    var ringer = _this2;
                    setInterval(function () {
                      ringer.ring.play();
                    }, 2000);
                    setTimeout(function () {
                      clearInterval();
                    }, 10000);
                  } else {
                    _this2.busytone = _this2.media.create('https://topiko.com/ringtones/busy.mp3');

                    _this2.busytone.setVolume(1);

                    _this2.busytone.play();

                    var callEnd = _this2;
                    setTimeout(function () {
                      callEnd.callend();
                    }, 8000);
                  }
                });
              }
            });
          }
        }, {
          key: "callend",
          value: function callend() {
            throw new Error('Method not implemented.');
          } // Strat call code EndsHere

        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.myEl = this.elRef.nativeElement.querySelector('#my-video');
                      this.partnerEl = this.elRef.nativeElement.querySelector('#partner-video');
                      this.webRTC.init(this.userId, this.myEl, this.partnerEl);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "call",
          value: function call() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.webRTC.call(this.partnerId);
                      this.swapVideo('my-video');

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "swapVideo",
          value: function swapVideo(topVideo) {
            this.topVideoFrame = topVideo;
          }
        }]);

        return VideocallPage;
      }();

      VideocallPage.ctorParameters = function () {
        return [{
          type: _providers_webrtc_service__WEBPACK_IMPORTED_MODULE_9__["WebrtcService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_5__["Media"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }];
      };

      VideocallPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-videocall',
        template: _raw_loader_videocall_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_videocall_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VideocallPage);
      /***/
    },

    /***/
    "6Ylz": function Ylz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideocallPageModule", function () {
        return VideocallPageModule;
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


      var _videocall_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./videocall-routing.module */
      "S+8M");
      /* harmony import */


      var _videocall_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./videocall.page */
      "0R2u");

      var VideocallPageModule = function VideocallPageModule() {
        _classCallCheck(this, VideocallPageModule);
      };

      VideocallPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _videocall_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideocallPageRoutingModule"]],
        declarations: [_videocall_page__WEBPACK_IMPORTED_MODULE_6__["VideocallPage"]]
      })], VideocallPageModule);
      /***/
    },

    /***/
    "S+8M": function S8M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideocallPageRoutingModule", function () {
        return VideocallPageRoutingModule;
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


      var _videocall_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./videocall.page */
      "0R2u");

      var routes = [{
        path: '',
        component: _videocall_page__WEBPACK_IMPORTED_MODULE_3__["VideocallPage"]
      }];

      var VideocallPageRoutingModule = function VideocallPageRoutingModule() {
        _classCallCheck(this, VideocallPageRoutingModule);
      };

      VideocallPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VideocallPageRoutingModule);
      /***/
    },

    /***/
    "tyO+": function tyO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div id=\"errorMsg\"></div>\n\n  <video id=\"partner-video\" (click)=\"swapVideo('my-video')\" autoplay playsinline\n    [ngClass]=\"{'top-video': topVideoFrame === 'partner-video', 'main-video': topVideoFrame != 'partner-video'}\">\n  </video>\n  <video id=\"my-video\" (click)=\"swapVideo('partner-video')\" autoplay playsinline\n    [ngClass]=\"{'top-video': topVideoFrame === 'my-video', 'main-video': topVideoFrame != 'my-video'}\" >\n  </video>\n\n\n  <ion-row nowrap style=\"display: none;\">\n    <ion-button (click)=\"init()\">Login As: </ion-button>\n    <ion-item>\n      <ion-input type=\"text\" [(ngModel)]=\"userId\" placeholder=\"enter your nick name\"></ion-input>\n    </ion-item>\n  </ion-row>\n\n  <ion-row nowrap style=\"display: none;\">\n    <ion-button (click)=\"call()\">Call To: </ion-button>\n    <ion-item>\n      <ion-input type=\"text\" [(ngModel)]=\"partnerId\" placeholder=\"your partner nick name\"></ion-input>\n    </ion-item>\n  </ion-row>  \n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col>\n      <ion-fab-button class=\"acc-call\">\n        <ion-icon name=\"call-outline\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button color=\"light\">\n      <ion-icon name=\"mic-outline\"  style=\"color: #000;\"></ion-icon>\n      <ion-icon name=\"mic-off-outline\"  style=\"color: #000;\"></ion-icon>\n    </ion-fab-button>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"camera-reverse-outline\"></ion-icon>\n    </ion-col>\n    <ion-col>\n      <ion-fab-button>\n        <ion-icon name=\"call-outline\" style=\"transform: rotate(135deg);\"></ion-icon>\n      </ion-fab-button>\n      \n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    },

    /***/
    "ySJ8": function ySJ8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebrtcService", function () {
        return WebrtcService;
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


      var peerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! peerjs */
      "oLy0");
      /* harmony import */


      var peerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(peerjs__WEBPACK_IMPORTED_MODULE_2__);

      var WebrtcService = /*#__PURE__*/function () {
        function WebrtcService() {
          _classCallCheck(this, WebrtcService);

          this.stun = 'stun.l.google.com:19302';
          this.stunServer = {
            urls: 'stun:' + this.stun
          };
          this.options = {
            key: 'cd1ft79ro8g833di',
            debug: 3
          };
        }

        _createClass(WebrtcService, [{
          key: "getMedia",
          value: function getMedia() {
            var _this3 = this;

            navigator.getUserMedia({
              audio: true,
              video: true
            }, function (stream) {
              _this3.handleSuccess(stream);
            }, function (error) {
              _this3.handleError(error);
            });
          }
        }, {
          key: "init",
          value: function init(userId, myEl, partnerEl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.myEl = myEl;
                      this.partnerEl = partnerEl;

                      try {
                        this.getMedia();
                      } catch (e) {
                        this.handleError(e);
                      }

                      _context3.next = 5;
                      return this.createPeer(userId);

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "createPeer",
          value: function createPeer(userId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.peer = new peerjs__WEBPACK_IMPORTED_MODULE_2___default.a(userId);
                      this.peer.on('open', function () {
                        _this4.wait();
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "call",
          value: function call(partnerId) {
            var _this5 = this;

            var call = this.peer.call(partnerId, this.myStream);
            call.on('stream', function (stream) {
              _this5.partnerEl.srcObject = stream;
            });
          }
        }, {
          key: "wait",
          value: function wait() {
            var _this6 = this;

            this.peer.on('call', function (call) {
              call.answer(_this6.myStream);
              call.on('stream', function (stream) {
                _this6.partnerEl.srcObject = stream;
              });
            });
          }
        }, {
          key: "handleSuccess",
          value: function handleSuccess(stream) {
            this.myStream = stream;
            this.myEl.srcObject = stream;
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.name === 'ConstraintNotSatisfiedError') {
              //const v = constraints.video;
              // this.errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`);
              this.errorMsg("The resolution px is not supported by your device.");
            } else if (error.name === 'PermissionDeniedError') {
              this.errorMsg('Permissions have not been granted to use your camera and ' + 'microphone, you need to allow the page access to your devices in ' + 'order for the demo to work.');
            }

            this.errorMsg("getUserMedia error: ".concat(error.name), error);
          }
        }, {
          key: "errorMsg",
          value: function errorMsg(msg, error) {
            var errorElement = document.querySelector('#errorMsg');
            errorElement.innerHTML += "<p>".concat(msg, "</p>");

            if (typeof error !== 'undefined') {
              console.error(error);
            }
          }
        }]);

        return WebrtcService;
      }();

      WebrtcService.ctorParameters = function () {
        return [];
      };

      WebrtcService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], WebrtcService);
      /***/
    },

    /***/
    "zpFX": function zpFX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-footer ion-icon {\n  width: 32px;\n  height: 32px;\n}\n\nion-fab-button {\n  --background: red !important;\n  width: 50px;\n  height: 50px;\n}\n\n.acc-call {\n  --background: green !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZpZGVvY2FsbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlBO0VBRUksNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUlBO0VBRUksOEJBQUE7QUFGSiIsImZpbGUiOiJ2aWRlb2NhbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlciBpb24taWNvblxyXG57XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuXHJcbn1cclxuXHJcbmlvbi1mYWItYnV0dG9uXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4uYWNjLWNhbGxcclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBncmVlbiAhaW1wb3J0YW50O1xyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=videocall-videocall-module-es5.js.map