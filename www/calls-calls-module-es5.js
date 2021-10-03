(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calls-calls-module"], {
    /***/
    "BQCW": function BQCW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    "FpFZ": function FpFZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallsPageRoutingModule", function () {
        return CallsPageRoutingModule;
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


      var _calls_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./calls.page */
      "KprA");

      var routes = [{
        path: '',
        component: _calls_page__WEBPACK_IMPORTED_MODULE_3__["CallsPage"]
      }];

      var CallsPageRoutingModule = function CallsPageRoutingModule() {
        _classCallCheck(this, CallsPageRoutingModule);
      };

      CallsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CallsPageRoutingModule);
      /***/
    },

    /***/
    "KprA": function KprA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallsPage", function () {
        return CallsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_calls_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./calls.page.html */
      "uijx");
      /* harmony import */


      var _calls_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./calls.page.scss */
      "S2GL");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var capacitor_audio_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! capacitor-audio-toggle */
      "U+ex");
      /* harmony import */


      var capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! capacitor-voice-recorder */
      "LMGH");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");

      var CallsPage = /*#__PURE__*/function () {
        function CallsPage(storage, http, route, router, webRTC, elRef, media, navCtrl, file, transfer) {
          var _this = this;

          _classCallCheck(this, CallsPage);

          this.storage = storage;
          this.http = http;
          this.route = route;
          this.router = router;
          this.webRTC = webRTC;
          this.elRef = elRef;
          this.media = media;
          this.navCtrl = navCtrl;
          this.file = file;
          this.transfer = transfer;
          this.topVideoFrame = 'partner-video';
          this.MianDiv = true;
          this.AudioDiv = false;
          this.calheader = true;
          this.incmng = false;
          this.outgng = true;
          this.ring = this.media.create('https://topiko.com/ringtones/ring.mp3');
          this.ringtone = this.media.create('https://topiko.com/ringtones/ringtone.mp3');
          this.busytone = this.media.create('https://topiko.com/ringtones/busy.mp3');
          this.segmentModel = "calls";
          this.ObservableVar = rxjs_rx__WEBPACK_IMPORTED_MODULE_9__["Observable"].interval(2000).subscribe(function () {
            _this.CheckCallStatus(); //this.CheckIncomming();

          });
        }

        _createClass(CallsPage, [{
          key: "Changeudio",
          value: function Changeudio() {
            capacitor_audio_toggle__WEBPACK_IMPORTED_MODULE_12__["AudioToggle"].setAudioMode({
              mode: 'earpiece'
            });
          }
        }, {
          key: "SettoSpeaker",
          value: function SettoSpeaker() {
            capacitor_audio_toggle__WEBPACK_IMPORTED_MODULE_12__["AudioToggle"].setAudioMode({
              mode: 'speaker'
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.router.params.subscribe(function (val) {
              _this2.storage.get('userdetails').then(function (udetails) {
                _this2.userDetails = udetails;
                console.log("UserDetails:", _this2.userDetails);
                _this2.user_id = _this2.userDetails[0].id;
                console.log(_this2.user_id, 'User ID');
                _this2.user_mobile = _this2.userDetails[0].mobile;

                _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "onlinestatus.php?user_id=" + _this2.user_id).subscribe(function (Response) {
                  console.log("online Staus", Response);
                });

                _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "mycalls.php?mobile=" + _this2.user_mobile).subscribe(function (response) {
                  _this2.calls = response;
                  console.log("Calld:", _this2.calls);
                });

                _this2.ObservableVar1 = rxjs_rx__WEBPACK_IMPORTED_MODULE_9__["Observable"].interval(2000).subscribe(function () {
                  _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "mychats.php?user_id=" + _this2.user_id).subscribe(function (response) {
                    _this2.chats = response;
                    console.log("Chats:", _this2.chats);
                  });
                });
                console.log(_this2.user_id, 'User ID');

                _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "getbhcats.php?user_id=" + _this2.user_id).subscribe(function (response) {
                  _this2.buchat = response;
                  console.log("Get Business Chats:", _this2.buchat);
                }); // incoming Details


                _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "checkincomming.php?user_mobile=" + _this2.user_mobile).subscribe(function (incval) {
                  _this2.incomming = incval;
                  console.log("calls Pge Inoming Staus", _this2.incomming);

                  if (_this2.incomming != 0) {
                    _this2.partnerId = _this2.incomming[0].caller_mobile;
                    _this2.callId = _this2.incomming[0].id;
                    console.log("Incoming call details are:", _this2.incomming);

                    _this2.ringtone.setVolume(1);

                    _this2.ringtone.play();

                    _this2.calheader = false;
                    _this2.MianDiv = false;
                    _this2.AudioDiv = true;
                    _this2.incmng = true;
                    _this2.outgng = false;
                  }
                }); // incoming code End

              });
            });
          }
        }, {
          key: "CheckIncomming",
          value: function CheckIncomming() {
            var _this3 = this;

            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "checkincomming.php?user_mobile=" + this.user_mobile).subscribe(function (incval) {
              _this3.incomming = incval;
              console.log("calls Pge Inoming Staus", _this3.incomming);

              if (_this3.incomming != 0) {
                _this3.partnerId = _this3.incomming[0].caller_mobile;
                _this3.callId = _this3.incomming[0].id;
                console.log("Incoming call details are:", _this3.incomming);

                _this3.ringtone.setVolume(1);

                _this3.ringtone.play();

                _this3.calheader = false;
                _this3.MianDiv = false;
                _this3.AudioDiv = true;
                _this3.incmng = true;
                _this3.outgng = false;
              }
            });
          }
        }, {
          key: "chat",
          value: function chat(i) {
            this.chatroom = this.chats[i].chatroom;
            this.name = this.chats[i].name;
            this.onine = this.chats[i].online_status;
            this.lastseen = this.chats[i].last_seen;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "chatmsg_statusupdate.php?chatroom=" + this.chatroom).subscribe(function (cdata) {
              console.log(cdata);
            });
            console.log("chatroom", this.chatroom);
            var navigationExtras = {
              queryParams: {
                room: this.chatroom,
                name: this.name,
                onine: this.onine,
                last_seen: this.lastseen
              }
            };
            this.navCtrl.navigateForward(['/chatbox'], navigationExtras);
          }
        }, {
          key: "businesschat",
          value: function businesschat(i) {
            this.broom = this.buchat[i].chatroom;
            var navigationExtras = {
              queryParams: {
                room: this.broom
              }
            };
            this.navCtrl.navigateForward(['/chatbox'], navigationExtras);
          }
        }, {
          key: "videocall",
          value: function videocall(i) {
            if (this.calls[i].caller_mobile === this.user_mobile) {
              this.partnerId = this.calls[i].calee_mobile;
            } else {
              this.partnerId = this.calls[i].caller_mobile;
            }

            this.storage.set("partnerId", this.partnerId);
            this.route.navigate(['videocall']);
          }
        }, {
          key: "audiocall",
          value: function audiocall(i) {
            if (this.calls[i].caller_mobile === this.user_mobile) {
              this.partnerId = this.calls[i].calee_mobile;
            } else {
              this.partnerId = this.calls[i].caller_mobile;
            }

            this.StartCall(this.partnerId);
            this.calheader = false;
            this.MianDiv = false;
            this.AudioDiv = true;
            this.myEl = this.elRef.nativeElement.querySelector('#my-video');
            this.myEl.muted = true;
            this.partnerEl = this.elRef.nativeElement.querySelector('#partner-video');
            this.webRTC.init(this.user_mobile, this.myEl, this.partnerEl);
            var mycall = this;
            setTimeout(function () {
              mycall.call();
            }, 5000);
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
            var _this4 = this;

            this.stopRec();
            this.calheader = true;
            this.AudioDiv = false;
            this.MianDiv = true;
            this.ring.setVolume(0);
            this.ringtone.setVolume(0);
            this.busytone.setVolume(0);
            this.webRTC.close();
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "endcall.php?call_id=" + this.callId + "&record=" + this.callrecord).subscribe(function (Endcall) {
              _this4.Endcall = Endcall;

              if (_this4.Endcall == 1) {
                _this4.ObservableVar.unsubscribe;

                _this4.route.navigate(['/home']);
              }
            });
          } // Clling Server Functions
          //start Call

        }, {
          key: "StartCall",
          value: function StartCall(pid) {
            var _this5 = this;

            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "startcall.php?user_mobile=" + this.user_mobile + "&calee_mobile=" + pid + "&call_type=audio").subscribe(function (ResponseData) {
              _this5.ResponseData = ResponseData;
              console.log("Call Response Data:", _this5.ResponseData);

              if (_this5.ResponseData != 0) {
                _this5.callId = _this5.ResponseData;

                _this5.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "callstatus.php?calee_moble=" + pid).subscribe(function (calval) {
                  _this5.callstatus = calval;

                  if (_this5.callstatus == 0) {
                    _this5.ring = _this5.media.create('https://topiko.com/ringtones/ring.mp3');
                    console.log(_this5.ring);

                    _this5.ring.setVolume(1);

                    _this5.ring.play();

                    var ringer = _this5;
                    setInterval(function () {
                      ringer.ring.play();
                    }, 2000);
                    setTimeout(function () {
                      clearInterval();
                    }, 10000);
                  } else {
                    _this5.busytone = _this5.media.create('https://topiko.com/ringtones/busy.mp3');

                    _this5.busytone.setVolume(1);

                    _this5.busytone.play();

                    var callEnd = _this5;
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
            var _this6 = this;

            console.log("Call_id", this.incomming[0].id);
            this.ringtone.setVolume(0);
            this.incmng = false;
            this.outgng = true;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "answerstatus.php?call_id=" + this.incomming[0].id).subscribe(function (ans_status) {
              _this6.ans_status = ans_status;

              if (_this6.ans_status == 1) {
                console.log("Call answered");
                _this6.partnerId = _this6.incomming[0].caller_mobile;
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
                  mycall.startRec();
                }, 5000);
              }
            });
          } //Answercall code ends here
          //check call status code starts here

        }, {
          key: "CheckCallStatus",
          value: function CheckCallStatus() {
            var _this7 = this;

            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "checkcallstatus.php?call_id=" + this.callId).subscribe(function (Cstat) {
              _this7.Cstat = Cstat;
              console.log("Call Status is:", _this7.Cstat);

              if (_this7.Cstat != 0) {
                _this7.Status = _this7.Cstat[0].status;
                _this7.Ans_Status = _this7.Cstat[0].ans_status;

                if (_this7.Ans_Status == 1) {
                  _this7.ring.setVolume(0);

                  _this7.Changeudio();
                }

                if (_this7.Status == 2) {
                  _this7.stopRec();

                  var rurl = _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "recrodcall.php";
                  var rData = JSON.stringify({
                    'call_id': _this7.callId,
                    'callrecord': _this7.callrecord,
                    'duration': _this7.callduration,
                    'ext': _this7.mymeType
                  });

                  _this7.http.post(rurl, rData).subscribe(function (adata) {
                    if (adata == 1) {
                      alert("record Saved successfully");
                    }
                  });

                  _this7.callend();
                }
              }
            });
          }
        }, {
          key: "EndCall",
          value: function EndCall() {
            this.callend();
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "offlinestatus.php?user_id=" + this.user_id).subscribe(function (Response) {
              console.log(Response);
            });
            this.ObservableVar.unsubscribe();
            this.ObservableVar1.unsubscribe();
          }
        }, {
          key: "GotoHome",
          value: function GotoHome() {
            this.route.navigate(['/home']);
          }
        }, {
          key: "startRec",
          value: function startRec() {
            var _this8 = this;

            //alert("recordong started")
            capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_13__["VoiceRecorder"].canDeviceVoiceRecord().then(function (result) {
              return console.log(result.value);
            });
            capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_13__["VoiceRecorder"].requestAudioRecordingPermission().then(function (result) {
              return console.log(result.value);
            });
            capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_13__["VoiceRecorder"].hasAudioRecordingPermission().then(function (result) {
              return console.log(result.value);
            });
            capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_13__["VoiceRecorder"].startRecording().then(function (result) {
              return _this8.Audiofile = result.value;
            })["catch"](function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "stopRec",
          value: function stopRec() {
            var _this9 = this;

            //alert("recordong completed")
            capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_13__["VoiceRecorder"].stopRecording().then(function (result) {
              _this9.Audiofile = result.value;
              _this9.callrecord = _this9.Audiofile.recordDataBase64;
              _this9.callduration = _this9.Audiofile.msDuration;
              _this9.mymeType = _this9.Audiofile.mimeType;
            })["catch"](function (error) {
              return console.log(error);
            });
          }
        }]);

        return CallsPage;
      }();

      CallsPage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _providers_audiowebrtc_service__WEBPACK_IMPORTED_MODULE_8__["AudiowebrtcService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_10__["Media"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__["File"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__["FileTransfer"]
        }];
      };

      CallsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-calls',
        template: _raw_loader_calls_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calls_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CallsPage);
      /***/
    },

    /***/
    "LMGH": function LMGH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoiceRecorder", function () {
        return VoiceRecorder;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      "BQCW");
      /* empty/unused harmony star reexport */


      var VoiceRecorder = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('VoiceRecorder', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() | web */
          "web").then(__webpack_require__.bind(null,
          /*! ./web */
          "cAXI")).then(function (m) {
            return new m.VoiceRecorderWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "S2GL": function S2GL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  color: #ffffff;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 20px;\n}\n\n.head-row {\n  display: flex;\n  align-items: center;\n  padding-top: 5px;\n}\n\nion-segment {\n  background-color: #f5f5f5;\n}\n\nion-segment-button {\n  text-transform: capitalize;\n  font-size: 17px;\n  color: #707070;\n}\n\nion-content {\n  --padding-bottom: 65px;\n  --padding-start: 0px;\n  --padding-end: 12px;\n}\n\nion-card {\n  padding: 10px;\n  padding-bottom: 7px;\n  margin: 7px 0px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.avatar ion-avatar {\n  width: 56px;\n  height: 56px;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 14px;\n  margin: 0px 0px 3px 0px;\n  text-overflow: ellipsis;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 4px 0px 4px 0px;\n  text-overflow: ellipsis;\n}\n\n.chat-time {\n  color: #9f9f9f;\n  font-size: 12px;\n  padding: 5px;\n  text-align: right;\n}\n\n.icons {\n  font-size: 24px;\n  position: absolute;\n  right: 10px;\n  top: 30%;\n}\n\n.margin {\n  margin-bottom: 64px;\n  margin-top: 13px;\n}\n\nion-fab {\n  position: fixed;\n  bottom: 64px;\n}\n\nion-fab-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  height: 50px;\n  width: 50px;\n}\n\n.fab ion-icon {\n  color: #ffffff;\n  height: 36px;\n  width: 36px;\n}\n\n.online {\n  width: 20px;\n  height: 20px;\n  background: #871178;\n  display: block;\n  border-radius: 50%;\n  float: right;\n  font-size: 12px;\n  text-align: center;\n  color: #fff;\n  margin-top: 70%;\n}\n\n.offline {\n  width: 20px;\n  height: 20px;\n  background: #871178;\n  display: block;\n  border-radius: 50%;\n  float: right;\n  font-size: 12px;\n  text-align: center;\n  color: #fff;\n  margin-top: 70%;\n}\n\n.img-circle {\n  border-radius: 50%;\n  width: 80%;\n}\n\n.nametext {\n  padding-top: 10px !important;\n  color: #871178;\n}\n\n.audioDiv {\n  text-align: center;\n  color: #fff;\n  background: linear-gradient(#871178, #3c1378) !important;\n  height: 100vh;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  margin-top: -20px;\n}\n\nion-icon[_ngcontent-ydv-c133] {\n  font-size: 30px;\n  color: #ffffff;\n  border-radius: 50%;\n  border: 2px solid white;\n  padding: 20px;\n  opacity: 80%;\n}\n\n.call-icon {\n  text-align: center;\n  font-size: 18px;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  padding: 15%;\n}\n\n.calling {\n  margin-bottom: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhbGxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7QUFHSjs7QUFEQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFJSjs7QUFEQTtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFRSjs7QUFOQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQVVKOztBQVJBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQVdKOztBQVBBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFVSjs7QUFSQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVdKOztBQVRBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBWUo7O0FBVEE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDRCxrQkFBQTtFQUNDLFdBQUE7RUFDQSxlQUFBO0FBV0o7O0FBUkE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDRCxrQkFBQTtFQUNDLFdBQUE7RUFDQSxlQUFBO0FBVUo7O0FBUkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFXSjs7QUFUQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQVlBOztBQVRBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0RBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFZSjs7QUFUQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBWUo7O0FBVEE7RUFFSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQVdKOztBQVJBO0VBRUksa0JBQUE7QUFVSiIsImZpbGUiOiJjYWxscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuaW9uLWhlYWRlciBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uaGVhZC1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbmlvbi1zZWdtZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDY1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICBtYXJnaW46IDdweCAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbn1cclxuLmF2YXRhciBpb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG59XHJcbi51c2VyLW5hbWUge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDBweCAwcHggM3B4IDBweDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi50aW1lIHtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiA0cHggMHB4IDRweCAwcHg7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4uY2hhdC10aW1lIHtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmljb25zIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAzMCU7XHJcbn1cclxuLm1hcmdpbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxufVxyXG5cclxuLy8gZmFiXHJcbmlvbi1mYWIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA2NHB4O1xyXG59XHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcbi5mYWIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB3aWR0aDogMzZweDtcclxufVxyXG5cclxuLm9ubGluZVxyXG57XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6Izg3MTE3ODtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDcwJTtcclxufVxyXG5cclxuLm9mZmxpbmVcclxue1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiM4NzExNzg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiA3MCU7XHJcbn1cclxuLmltZy1jaXJjbGV7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDo4MCU7XHJcbn1cclxuLm5hbWV0ZXh0IHtcclxucGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxuY29sb3I6ICM4NzExNzg7XHJcbn1cclxuXHJcbi5hdWRpb0RpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcblxyXG5pb24taWNvbltfbmdjb250ZW50LXlkdi1jMTMzXSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG9wYWNpdHk6IDgwJTtcclxufVxyXG5cclxuLmNhbGwtaWNvblxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgcGFkZGluZzogMTUlO1xyXG59XHJcblxyXG4uY2FsbGluZ1xyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MCU7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "Ugfu": function Ugfu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallsPageModule", function () {
        return CallsPageModule;
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


      var _calls_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./calls-routing.module */
      "FpFZ");
      /* harmony import */


      var _calls_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./calls.page */
      "KprA");

      var CallsPageModule = function CallsPageModule() {
        _classCallCheck(this, CallsPageModule);
      };

      CallsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _calls_routing_module__WEBPACK_IMPORTED_MODULE_5__["CallsPageRoutingModule"]],
        declarations: [_calls_page__WEBPACK_IMPORTED_MODULE_6__["CallsPage"]]
      })], CallsPageModule);
      /***/
    },

    /***/
    "uijx": function uijx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  *ngIf=\"calheader\" color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-row class=\"head-row\">\n      <ion-col><img src=\"assets/text-logo.png\"></ion-col>\n    </ion-row>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-segment *ngIf=\"calheader\" value=\"all\" color=\"secondary\" mode=\"md\" [(ngModel)]=\"segmentModel\">\n\n  <ion-segment-button value=\"calls\">\n    Calls\n  </ion-segment-button>\n\n  <ion-segment-button value=\"chats\">\n    Chats\n  </ion-segment-button>\n  <ion-segment-button value=\"B-chats\">\n   B-Chats\n  </ion-segment-button>\n</ion-segment>\n\n<ion-content class=\"backg\">\n\n  <div *ngIf=\"segmentModel === 'calls'\" class=\"margin\">\n    <div *ngIf= \"MianDiv\">\n      <audio id=\"partner-video\" (click)=\"swapVideo('my-video')\" autoplay controls\n        [ngClass]=\"{'top-video': topVideoFrame === 'partner-video', 'main-video': topVideoFrame != 'partner-video'}\" style=\"display: none;\">\n    </audio>\n      <audio id=\"my-video\" (click)=\"swapVideo('partner-video')\" autoplay controls muted=\"muted\"\n        [ngClass]=\"{'top-video': topVideoFrame === 'my-video', 'main-video': topVideoFrame != 'my-video'}\" style=\"display: none;\">\n    </audio>\n    <ion-item *ngFor=\"let con of calls; let i=index\">\n      <ion-row>\n        <ion-col size=\"2\">\n            <img src=\"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png\" class=\"img-circle\">\n        </ion-col>\n        <ion-col size=\"8\" class=\"nametext\">\n        <span>{{con.name}}</span>\n        <p *ngIf=\"con.caller_mobile==user_mobile\"class=\"time\" >Outgoing ({{con.start_time}})</p>\n        <p *ngIf=\"con.calee_mobile==user_mobile\"class=\"time\" >Incoming ({{con.start_time}})</p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <div style=\"text-align: right; padding-top: 40%;\">\n            <ion-icon  *ngIf=\"con.call_type=='audio'\" name=\"call\"  (click)=\"audiocall(i)\" color=\"medium\" slot=\"end\" style=\"font-size: 20px;\"></ion-icon>\n            <ion-icon  *ngIf=\"con.call_type=='video'\"  name=\"videocam\"  (click)=\"videocall(i)\" color=\"medium\" slot=\"end\" style=\"font-size: 20px;\"></ion-icon>\n           </div>\n        </ion-col>\n      </ion-row>\n     \n    </ion-item>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/calls-contact\" mode=\"md\">\n      <ion-fab-button>\n        <ion-icon name=\"call\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n    <div *ngIf=\"AudioDiv\" class=\"audio_div\" style=\"background: green;\">\n        <audio id=\"partner-video\" (click)=\"swapVideo('my-video')\" autoplay controls\n          [ngClass]=\"{'top-video': topVideoFrame === 'partner-video', 'main-video': topVideoFrame != 'partner-video'}\" style=\"display: none;\">\n      </audio>\n        <audio id=\"my-video\" (click)=\"swapVideo('partner-video')\" autoplay controls muted=\"muted\"\n          [ngClass]=\"{'top-video': topVideoFrame === 'my-video', 'main-video': topVideoFrame != 'my-video'}\" style=\"display: none;\">\n      </audio>\n      <div id=\"errorMsg\"></div>\n     \n      <div class=\"audioDiv\">\n        <span  style=\"margin-top: 10%; margin-bottom: 50%;\">\n        <h1 class=\"bus\">{{partnerId}}</h1>\n        <h4 class=\"calling\">Calling</h4>\n      </span>\n      <ion-grid>\n\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-icon class=\"call-icon\" name=\"mic-off\"></ion-icon>\n            <p>Mute</p>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-icon class=\"call-icon\" name=\"volume-high-outline\" (click)=\"SettoSpeaker();\"></ion-icon>\n            <p>Speaker</p>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-icon class=\"call-icon\" name=\"volume-mute-outline\" (click)=\"Changeudio();\"></ion-icon>\n            <p>Speaker off</p>\n          </ion-col>\n    </ion-row>\n\n        <ion-row  *ngIf=\"outgng\" style=\"margin-top: 40%; text-align: center;\">\n          <ion-fab-button color=\"danger\" (click)=\"callend()\" style=\"margin-left: 45%;\">\n            <ion-icon name=\"call\"></ion-icon>\n          </ion-fab-button>\n        </ion-row>\n\n\n        <ion-row *ngIf=\"incmng\" style=\"margin-top: 30%;\">\n          <ion-col size=\"1\"></ion-col>\n          <ion-col size=\"2\" style=\"text-align: left !important;\">\n            <ion-button color= \"danger\" (click)=\"callend()\" style=\"width:50px; height:50px; border-radius: 17px; float: left;\">\n              <ion-icon name=\"call\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\"></ion-col>\n          <ion-col size=\"2\" style=\"text-align: right !important;\">\n            <ion-button  color=\"success\" (click)=\"AnsCall()\" style=\"width:50px; height:50px; border-radius: 17px; float: right;\" >\n              <ion-icon name=\"call\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"1\"></ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    </div>\n</div>\n<div *ngIf=\"segmentModel === 'chats'\" class=\"margin\">\n  <ion-item  *ngFor=\"let ccnt of chats; let i= index\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <img *ngIf='ccnt.image !=\"\"' src=\"{{ccnt.image}}\" class=\"img-circle\">\n        <img *ngIf='ccnt.image ==\"\"' src=\"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png\" class=\"img-circle\">\n      </ion-col>\n      <ion-col size=\"9\" class=\"text-overflow\" (click)=\"chat(i)\">\n        <p class=\"user-name\">{{ccnt.name}}</p>\n        <p class=\"time\" *ngIf=\"ccnt.online_status == 0\">Last seen: {{ccnt.last_seen}}</p>\n        <p class=\"time\" *ngIf=\"ccnt.online_status == 1\">Online</p>\n      </ion-col>\n      <ion-col size=\"1\" class=\"chat-time\">\n       <div><span *ngIf=\"ccnt.unread_messages!= 0\" class=\"online\">{{ccnt.unread_messages}}</span></div>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/chats-contact\">\n    <ion-fab-button>\n      <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</div>\n\n  <div *ngIf=\"segmentModel === 'B-chats'\" class=\"margin\">\n    <ion-card  *ngFor=\"let bchat of buchat; let i= index\">\n      <ion-row>\n        <div class=\"avatar\">\n          <ion-avatar>\n            <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n          </ion-avatar>\n        </div>\n        <ion-col class=\"text-overflow\" (click)=\"businesschat(i)\">\n          <p class=\"user-name\">{{bchat.chatroom}}</p>\n          \n        </ion-col>\n        <ion-col size=\"3\" class=\"chat-time\">\n         \n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/chats-contact\">\n      <ion-fab-button>\n        <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n</ion-content>\n\n<ion-footer *ngIf=\"calheader\" mode=\"md\" class=\"home-footer\">\n  <ion-row>\n    <ion-col (click)=\"GotoHome()\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <p>Home</p>\n    </ion-col>\n    <ion-col routerLink=\"/profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <p>Profile</p>\n    </ion-col>\n    <ion-col routerLink=\"/qr-scanner\">\n      <ion-icon name=\"scan-outline\"></ion-icon>\n      <p>Scan</p>\n    </ion-col>\n    <ion-col routerLink=\"/favourites\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n      <p>Favourites</p>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"call\" class=\"click-footer\"></ion-icon>\n      <p class=\"click-footer\">Call</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=calls-calls-module-es5.js.map