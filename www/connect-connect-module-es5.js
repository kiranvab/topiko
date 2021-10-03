(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["connect-connect-module"], {
    /***/
    "2ELU": function ELU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectPage", function () {
        return ConnectPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_connect_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./connect.page.html */
      "zMsr");
      /* harmony import */


      var _connect_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./connect.page.scss */
      "GRVb");
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


      var _providers_audiowebrtc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../providers/audiowebrtc.service */
      "Pj7w");
      /* harmony import */


      var rxjs_rx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/rx */
      "SH02");
      /* harmony import */


      var rxjs_rx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_rx__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/media/ngx */
      "9YJ4");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var capacitor_audio_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! capacitor-audio-toggle */
      "U+ex");

      var ConnectPage = /*#__PURE__*/function () {
        function ConnectPage(storage, http, route, router, toastController, navCtrl, webRTC, elRef, media) {
          var _this = this;

          _classCallCheck(this, ConnectPage);

          this.storage = storage;
          this.http = http;
          this.route = route;
          this.router = router;
          this.toastController = toastController;
          this.navCtrl = navCtrl;
          this.webRTC = webRTC;
          this.elRef = elRef;
          this.media = media;
          this.incmng = false;
          this.outgng = true;
          this.MianDiv = true;
          this.AudioDiv = false;
          this.calheader = true;
          this.ring = this.media.create('https://topiko.com/ringtones/ring.mp3');
          this.ringtone = this.media.create('https://topiko.com/ringtones/ringtone.mp3');
          this.busytone = this.media.create('https://topiko.com/ringtones/busy.mp3');
          router.params.subscribe(function (val) {});
          this.ObservableVar = rxjs_rx__WEBPACK_IMPORTED_MODULE_9__["Observable"].interval(2000).subscribe(function () {
            _this.CheckCallStatus();
          });
        }

        _createClass(ConnectPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.router.params.subscribe(function (val) {
              _this2.storage.get("bid").then(function (bval) {
                _this2.business_id = bval; // this.http.get(AppComponent.ApiUrl+"getemployees.php?bid="+this.business_id).subscribe(response=>{
                //   this.employees = response;
                //   console.log("employees:", this.employees);
                // });

                _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"].ApiUrl + "getbusinessdetails.php?bid=" + _this2.business_id).subscribe(function (bdtails) {
                  _this2.business = bdtails;
                  console.log("business Dtails:", _this2.business);
                  _this2.business_name = _this2.business[0].business_name;
                  console.log("business Name:", _this2.business_name);
                });

                _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"].ApiUrl + "getbranches.php?bid=" + _this2.business_id).subscribe(function (branch) {
                  _this2.branches = branch;
                  console.log("business Branches:", _this2.branches);
                });
              });

              _this2.storage.get("userdetails").then(function (val) {
                _this2.udata = val;
                _this2.ucity = _this2.udata[0].city;
                _this2.user_id = _this2.udata[0].id;
                _this2.user_mobile = _this2.udata[0].mobile;
                console.log(_this2.ucity);
              });
            });
          }
        }, {
          key: "Changeudio",
          value: function Changeudio() {
            capacitor_audio_toggle__WEBPACK_IMPORTED_MODULE_12__["AudioToggle"].setAudioMode({
              mode: 'earpiece'
            });
          }
        }, {
          key: "chat",
          value: function chat(i) {
            var _this3 = this;

            this.prtner_id = this.employees[i].user_id;
            console.log("partner_id", this.prtner_id);
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"].ApiUrl + "businesschatroom.php?user_id=" + this.user_id + "&partner_id=" + this.prtner_id + "&bid=" + this.business_id).subscribe(function (chatdata) {
              _this3.chresponse = chatdata;
              console.log("chatroom Data", _this3.chresponse);
              _this3.chatroom = _this3.chresponse[0].chatroom;

              _this3.storage.set("chatroom", _this3.chatroom);

              _this3.storage.set("chatname", _this3.business_name);

              console.log("chatroom", _this3.chatroom);
            });
            this.route.navigate(['chatbox']);
          }
        }, {
          key: "video",
          value: function video(i) {
            var _this4 = this;

            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"].ApiUrl + "userdetails.php?user_id=" + this.employees[i].user_id).subscribe(function (udata) {
              _this4.userdata = udata;
              _this4.patner_mobile = _this4.userdata[0].mobile;
              console.log("partner_mobile:", _this4.patner_mobile);

              _this4.storage.set("partnerId", _this4.patner_mobile);

              _this4.route.navigate(['/videocall']);
            });
          }
          /*  audio(i){
            this.http.get(AppComponent.ApiUrl+"userdetails.php?user_id="+this.employees[i].user_id).subscribe(udata=>{
              this.userdata=udata;
              this.patner_mobile= this.userdata[0].mobile;
              console.log("partner_mobile:", this.patner_mobile);
              this.storage.set("partnerId", this.patner_mobile);
              this.route.navigate(['/calling']);
            })
          } */

        }, {
          key: "branchemp",
          value: function branchemp(event) {
            var _this5 = this;

            console.log("Branch ID", this.branch);
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"].ApiUrl + "getbranchemp.php?brid=" + this.branch).subscribe(function (udata) {
              _this5.count = udata;

              if (_this5.count.length > 0) {
                _this5.employees = udata;
              } else {
                _this5.presentToast();
              }
            });
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'No Employees in this Branch',
                        duration: 5000,
                        color: 'secondary',
                        position: "bottom"
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "audio",
          value: function audio(i) {
            var _this6 = this;

            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"].ApiUrl + "userdetails.php?user_id=" + this.employees[i].user_id).subscribe(function (udata) {
              _this6.userdata = udata;
              _this6.partnerId = _this6.userdata[0].mobile;

              _this6.StartCall(_this6.partnerId);

              _this6.calheader = false;
              _this6.MianDiv = false;
              _this6.AudioDiv = true;
              _this6.myEl = _this6.elRef.nativeElement.querySelector('#my-video');
              _this6.myEl.muted = true;
              _this6.partnerEl = _this6.elRef.nativeElement.querySelector('#partner-video');

              _this6.webRTC.init(_this6.user_mobile, _this6.myEl, _this6.partnerEl);

              var mycall = _this6;
              setTimeout(function () {
                mycall.call();
              }, 5000);
            });
          }
        }, {
          key: "call",
          value: function call() {
            console.log("call connected", this.partnerId);
            this.webRTC.call(this.partnerId);
          }
        }, {
          key: "callend",
          value: function callend() {
            var _this7 = this;

            this.calheader = true;
            this.AudioDiv = false;
            this.MianDiv = true;
            this.ring.setVolume(0);
            this.ringtone.setVolume(0);
            this.busytone.setVolume(0);
            this.webRTC.close();
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"].ApiUrl + "endcall.php?call_id=" + this.callId + "&record=" + this.partnerId + "CallRecord.mp3").subscribe(function (Endcall) {
              _this7.Endcall = Endcall;

              if (_this7.Endcall == 1) {
                _this7.route.navigate(['/calls']);
              }
            });
          } // Clling Server Functions
          //start Call

        }, {
          key: "StartCall",
          value: function StartCall(pid) {
            var _this8 = this;

            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"].ApiUrl + "startcall.php?user_mobile=" + this.user_mobile + "&calee_mobile=" + pid + "&call_type=audio").subscribe(function (ResponseData) {
              _this8.ResponseData = ResponseData;
              console.log("Call Response Data:", _this8.ResponseData);

              if (_this8.ResponseData != 0) {
                _this8.callId = _this8.ResponseData;

                _this8.http.get(_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"].ApiUrl + "callstatus.php?calee_moble=" + pid).subscribe(function (calval) {
                  _this8.callstatus = calval;

                  if (_this8.callstatus == 0) {
                    _this8.ring = _this8.media.create('https://topiko.com/ringtones/ring.mp3');
                    console.log(_this8.ring);

                    _this8.ring.setVolume(1);

                    _this8.ring.play();

                    var ringer = _this8;
                    setInterval(function () {
                      ringer.ring.play();
                    }, 2000);
                    setTimeout(function () {
                      clearInterval();
                    }, 10000);
                  } else {
                    _this8.busytone = _this8.media.create('https://topiko.com/ringtones/busy.mp3');

                    _this8.busytone.setVolume(1);

                    _this8.busytone.play();

                    var callEnd = _this8;
                    setTimeout(function () {
                      callEnd.callend();
                    }, 8000);
                  }
                });
              }
            });
          } // Strat call code EndsHere
          // Answer Call code

        }, {
          key: "AnsCall",
          value: function AnsCall() {
            var _this9 = this;

            console.log("Call_id", this.incomming[0].id);
            this.ringtone.setVolume(0);
            this.incmng = false;
            this.outgng = true;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"].ApiUrl + "answerstatus.php?call_id=" + this.incomming[0].id).subscribe(function (ans_status) {
              _this9.ans_status = ans_status;

              if (_this9.ans_status == 1) {
                console.log("Call answered");
                _this9.partnerId = _this9.incomming[0].caller_mobile;
                _this9.calheader = false;
                _this9.MianDiv = false;
                _this9.AudioDiv = true;
                _this9.myEl = _this9.elRef.nativeElement.querySelector('#my-video');
                _this9.myEl.muted = true;
                _this9.partnerEl = _this9.elRef.nativeElement.querySelector('#partner-video');

                _this9.webRTC.init(_this9.user_mobile, _this9.myEl, _this9.partnerEl);

                var mycall = _this9;
                setTimeout(function () {
                  mycall.call();
                }, 5000);
              }
            });
          } //Answercall code ends here
          //check call status code starts here

        }, {
          key: "CheckCallStatus",
          value: function CheckCallStatus() {
            var _this10 = this;

            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"].ApiUrl + "checkcallstatus.php?call_id=" + this.callId).subscribe(function (Cstat) {
              _this10.Cstat = Cstat;
              console.log("Call Status is:", _this10.Cstat);
              _this10.Status = _this10.Cstat[0].status;
              _this10.Ans_Status = _this10.Cstat[0].ans_status;

              if (_this10.Ans_Status == 1) {
                _this10.ring.setVolume(0);

                _this10.Changeudio();
              }

              if (_this10.Status == 2) {
                _this10.ObservableVar.unsubscribe();

                _this10.callend();
              }
            });
          }
        }, {
          key: "EndCall",
          value: function EndCall() {
            this.callend();
          }
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            this.ObservableVar.unsubscribe();
          }
        }]);

        return ConnectPage;
      }();

      ConnectPage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _providers_audiowebrtc_service__WEBPACK_IMPORTED_MODULE_8__["AudiowebrtcService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_10__["Media"]
        }];
      };

      ConnectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-connect',
        template: _raw_loader_connect_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_connect_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ConnectPage);
      /***/
    },

    /***/
    "GRVb": function GRVb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  --background: linear-gradient(#871178, #3c1378) !important;\n}\n\n.firstbox {\n  box-shadow: 0px 3px 6px #00000029;\n  padding: 10px;\n  padding-bottom: 3px;\n  padding-right: 5px;\n}\n\n.firstbox .bgcolor {\n  padding: 0px;\n}\n\n.avatar ion-avatar {\n  width: 61px;\n  height: 61px;\n}\n\n.bgcolor p {\n  font-size: 1.125em;\n  color: #22272a;\n  margin: 2px 0px;\n}\n\n.bgcolor p ion-icon {\n  color: #39ac00;\n  font-size: 11px;\n}\n\n.firstbox .star ion-icon {\n  color: #fcb900;\n}\n\n.star span {\n  font-size: 8px;\n  color: #22272a;\n  margin: 0px;\n  padding-top: 3px;\n  padding-left: 3px;\n  padding-bottom: 2px;\n}\n\n.ceo p {\n  font-size: 12px;\n  color: #9f9f9f;\n  margin: 3px 0px;\n}\n\n.address {\n  padding-left: 0%;\n}\n\n.address p {\n  font-size: 12px;\n  color: #707070;\n  margin: 5px 0px;\n}\n\n.addres p {\n  font-size: 10px;\n  color: #22272a;\n  text-align: left;\n  line-height: 14px;\n}\n\n.map {\n  text-align: right;\n}\n\n.map img {\n  width: 84px;\n  height: 57px;\n}\n\n.branch {\n  display: flex;\n  flex-direction: row-reverse;\n  padding: 0%;\n}\n\nion-select {\n  color: #871178 !important;\n}\n\n.secondbox {\n  box-shadow: 0px 3px 6px #00000029;\n  padding: 10px;\n  padding-left: 5px;\n  padding-bottom: 3px;\n  padding-right: 5px;\n  margin-top: 0%;\n}\n\n.title p {\n  font-size: 18px;\n  color: #22272a;\n  margin: 3px 0px;\n}\n\n.delivery p {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 0%;\n}\n\n.lang p {\n  font-size: 14px;\n  color: #871178;\n  margin: 10px 0px;\n  margin-right: 20px;\n}\n\nion-fab-button {\n  --ion-color-base: #ebebeb !important;\n  --box-shadow: none;\n  width: 55px;\n  height: 55px;\n}\n\nion-fab-button ion-icon {\n  color: #22272a;\n  font-size: 25px;\n}\n\n.secondbox .icon .ico {\n  display: flex;\n  flex-direction: row;\n}\n\n.secondbox .icons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.secondbox .icon .icn {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.icons ion-icon {\n  color: #22272a;\n  height: 25px;\n  width: 25px;\n  background: #ebebeb;\n  background-size: 55px 55px;\n  border-radius: 50%;\n}\n\n.audioDiv {\n  text-align: center;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nvbm5lY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwREFBQTtBQUVKOztBQUFBO0VBQ0ksaUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0FBUUo7O0FBTkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFQQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVVKOztBQVJBO0VBQ0ksZ0JBQUE7QUFXSjs7QUFUQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBYUo7O0FBWEE7RUFDSSxpQkFBQTtBQWNKOztBQVpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFlSjs7QUFaQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFlSjs7QUFiQTtFQUNJLHlCQUFBO0FBZ0JKOztBQWJBO0VBQ0ksaUNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWdCSjs7QUFkQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWlCSjs7QUFmQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQWtCSjs7QUFoQkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBb0JKOztBQWxCQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBcUJKOztBQW5CQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBeUJKOztBQXZCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQTBCSiIsImZpbGUiOiJjb25uZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KSAhaW1wb3J0YW50O1xyXG59XHJcbi5maXJzdGJveCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG4uZmlyc3Rib3ggLmJnY29sb3Ige1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNjFweDtcclxuICAgIGhlaWdodDogNjFweDtcclxufVxyXG4uYmdjb2xvciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luOiAycHggMHB4O1xyXG59XHJcbi5iZ2NvbG9yIHAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICMzOWFjMDA7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuLmZpcnN0Ym94IC5zdGFyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmNiOTAwO1xyXG59XHJcbi5zdGFyIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxufVxyXG4uY2VvIHAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBtYXJnaW46IDNweCAwcHg7XHJcbn1cclxuLmFkZHJlc3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxufVxyXG4uYWRkcmVzcyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcbi5hZGRyZXMgcCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxufVxyXG4ubWFwIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5tYXAgaW1nIHtcclxuICAgIHdpZHRoOiA4NHB4O1xyXG4gICAgaGVpZ2h0OiA1N3B4O1xyXG59XHJcblxyXG4uYnJhbmNoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufVxyXG5pb24tc2VsZWN0IHtcclxuICAgIGNvbG9yOiAjODcxMTc4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWNvbmRib3gge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG59XHJcbi50aXRsZSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luOiAzcHggMHB4O1xyXG59XHJcbi5kZWxpdmVyeSBwIHtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwJTtcclxufVxyXG4ubGFuZyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjZWJlYmViICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxufVxyXG5pb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4uc2Vjb25kYm94IC5pY29uIC5pY28ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLnNlY29uZGJveCAuaWNvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uc2Vjb25kYm94IC5pY29uIC5pY24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG4uaWNvbnMgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDU1cHggNTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uYXVkaW9EaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "JftN": function JftN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectPageRoutingModule", function () {
        return ConnectPageRoutingModule;
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


      var _connect_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./connect.page */
      "2ELU");

      var routes = [{
        path: '',
        component: _connect_page__WEBPACK_IMPORTED_MODULE_3__["ConnectPage"]
      }];

      var ConnectPageRoutingModule = function ConnectPageRoutingModule() {
        _classCallCheck(this, ConnectPageRoutingModule);
      };

      ConnectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConnectPageRoutingModule);
      /***/
    },

    /***/
    "yXIz": function yXIz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectPageModule", function () {
        return ConnectPageModule;
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


      var _connect_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./connect-routing.module */
      "JftN");
      /* harmony import */


      var _connect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./connect.page */
      "2ELU");

      var ConnectPageModule = function ConnectPageModule() {
        _classCallCheck(this, ConnectPageModule);
      };

      ConnectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _connect_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConnectPageRoutingModule"]],
        declarations: [_connect_page__WEBPACK_IMPORTED_MODULE_6__["ConnectPage"]]
      })], ConnectPageModule);
      /***/
    },

    /***/
    "zMsr": function zMsr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Connect</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"MianDiv\" style=\"background: #fff;\">\n    <audio id=\"partner-video\" (click)=\"swapVideo('my-video')\" autoplay controls\n    [ngClass]=\"{'top-video': topVideoFrame === 'partner-video', 'main-video': topVideoFrame != 'partner-video'}\" style=\"display: none;\">\n</audio>\n  <audio id=\"my-video\" (click)=\"swapVideo('partner-video')\" autoplay controls muted=\"muted\"\n    [ngClass]=\"{'top-video': topVideoFrame === 'my-video', 'main-video': topVideoFrame != 'my-video'}\" style=\"display: none;\">\n</audio>\n  <ion-card class=\"firstbox\" *ngFor=\"let bu of business\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img class=\"border\" src=\"{{bu.logo}}\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"bgcolor text-overflow\" size=\"7.5\">\n        <p>{{bu.business_name}} <ion-icon class=\"tick\" name=\"shield-checkmark\"></ion-icon>\n        </p>\n        <ion-row class=\"star\">\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <span>4.1 Ratings</span>\n        </ion-row>\n        <ion-row class=\"ceo text-overflow\">\n          <p>CEO-{{bu.owner_name}}</p>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"8\" class=\"address\">\n        <p>Address</p>\n        <ion-row class=\"addres\">\n          <p>\n            {{bu.business_address}}, <br>\n            {{bu.city}}-{{bu.pincode}},<br>\n            {{bu.state}},\n            {{bu.country}}.\n          </p>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"4\" class=\"map\">\n        <img\n          src=\"https://res.cloudinary.com/springboard-images/image/upload/q_auto,f_auto,fl_lossy/wordpress-india/2019/10/google-maps.jpg\">\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-grid class=\"branches\">\n    <ion-row class=\"branch\">\n      <ion-select placeholder=\"Branches\" interface=\"popover\"  [(ngModel)]=\"branch\" (ionChange)=\"branchemp($event)\">\n        <ion-select-option *ngFor=\"let br of branches\"  value=\"{{br.id}}\"  >{{br.branch_title}}</ion-select-option>\n      </ion-select>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card class=\"secondbox\" *ngFor=\"let emp of employees; let i = index\">\n    <ion-row>\n      <ion-col class=\"title\">\n        <p>{{emp.name}}</p>\n        <ion-row class=\"delivery\">\n          <p>{{emp.designation}}</p>\n        </ion-row>\n        <ion-row class=\"lang\">\n          <p>{{emp.language}}</p>\n        </ion-row>\n        <ion-row class=\"icon\">\n          <ion-col class=\"ico\">\n            <ion-fab-button color=\"light\" (click)=\"chat(i)\">\n              <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n            </ion-fab-button>\n          </ion-col>\n          <ion-col class=\"icons\">\n            <ion-fab-button color=\"light\" (click)=\"video(i)\">\n              <ion-icon name=\"videocam-outline\"></ion-icon>\n            </ion-fab-button>\n          </ion-col>\n          <ion-col class=\"icn\">\n            <ion-fab-button color=\"light\" (click)=\" audio(i)\">\n              <ion-icon name=\"call-outline\"></ion-icon>\n            </ion-fab-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</div>\n<div *ngIf=\"AudioDiv\">\n     \n  <audio id=\"partner-video\" (click)=\"swapVideo('my-video')\" autoplay controls\n    [ngClass]=\"{'top-video': topVideoFrame === 'partner-video', 'main-video': topVideoFrame != 'partner-video'}\" style=\"display: none;\">\n</audio>\n  <audio id=\"my-video\" (click)=\"swapVideo('partner-video')\" autoplay controls muted=\"muted\"\n    [ngClass]=\"{'top-video': topVideoFrame === 'my-video', 'main-video': topVideoFrame != 'my-video'}\" style=\"display: none;\">\n</audio>\n<div id=\"errorMsg\"></div>\n\n\n  <h1 class=\"bus\" style=\"margin-top: 70%;\">{{partnerId}}</h1>\n  <h4 class=\"calling\">Calling</h4>\n\n\n<ion-grid>\n \n  <ion-row class=\"end\" *ngIf=\"outgng\" style=\"margin-top: 40%;\">\n    <ion-fab-button color=\"light\" (click)=\"callend()\" style=\"margin-left:45%\">\n      <ion-icon name=\"call\"></ion-icon>\n    </ion-fab-button>\n  </ion-row>\n  <ion-row *ngIf=\"incmng\" style=\"margin-top: 30%;\">\n    <ion-col size=\"2\" style=\"text-align: left !important;\">\n      <ion-button color= \"danger\" (click)=\"callend()\" style=\"width:50px; height:50px; border-radius: 17px; float: left;\">\n        <ion-icon name=\"call\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"8\"></ion-col>\n    <ion-col size=\"2\" style=\"text-align: right !important;\">\n      <ion-button  color=\"success\" (click)=\"AnsCall()\" style=\"width:50px; height:50px; border-radius: 17px; float: right;\" >\n        <ion-icon name=\"call\"></ion-icon>\n      </ion-button>\n    </ion-col>\n   \n  </ion-row>\n</ion-grid>\n</div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=connect-connect-module-es5.js.map