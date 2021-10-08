(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calls-contact-calls-contact-module"],{

/***/ "0J+y":
/*!*****************************************************!*\
  !*** ./src/app/calls-contact/calls-contact.page.ts ***!
  \*****************************************************/
/*! exports provided: CallsContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallsContactPage", function() { return CallsContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calls_contact_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calls-contact.page.html */ "LFDX");
/* harmony import */ var _calls_contact_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calls-contact.page.scss */ "lV+G");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _providers_audiowebrtc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/audiowebrtc.service */ "Pj7w");
/* harmony import */ var rxjs_rx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/rx */ "SH02");
/* harmony import */ var rxjs_rx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_rx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/media/ngx */ "9YJ4");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var capacitor_audio_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! capacitor-audio-toggle */ "U+ex");













let CallsContactPage = class CallsContactPage {
    constructor(http, storage, route, router, webRTC, elRef, media, navCtrl) {
        this.http = http;
        this.storage = storage;
        this.route = route;
        this.router = router;
        this.webRTC = webRTC;
        this.elRef = elRef;
        this.media = media;
        this.navCtrl = navCtrl;
        this.topVideoFrame = 'partner-video';
        this.MianDiv = true;
        this.AudioDiv = false;
        this.calheader = true;
        this.incmng = false;
        this.outgng = true;
        this.ring = this.media.create('https://topiko.com/ringtones/ring.mp3');
        this.ringtone = this.media.create('https://topiko.com/ringtones/ringtone.mp3');
        this.busytone = this.media.create('https://topiko.com/ringtones/busy.mp3');
        this.ObservableVar = rxjs_rx__WEBPACK_IMPORTED_MODULE_9__["Observable"].interval(2000).subscribe(() => {
            this.CheckCallStatus();
        });
    }
    ngOnInit() {
        this.router.params.subscribe(val => {
            this.storage.get('userdetails').then((udetails) => {
                this.userDetails = udetails;
                this.user_id = this.userDetails[0].id;
                console.log(this.user_id, 'User ID');
                this.user_mobile = this.userDetails[0].mobile;
                this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "getcontacts.php?user_id=" + this.user_id).subscribe(Response => {
                    this.contacts = Response;
                    this.cntlength = this.contacts.length;
                    console.log("contacts", Response);
                });
                this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "checkincomming.php?user_mobile=" + this.user_mobile).subscribe((incval) => {
                    this.incomming = incval;
                    console.log("calls Pge Inoming Staus", this.incomming);
                    if (this.incomming != 0) {
                        this.partnerId = this.incomming[0].caller_mobile;
                        this.callId = this.incomming[0].id;
                        console.log("Incoming call details are:", this.incomming);
                        this.ringtone.setVolume(1);
                        this.ringtone.play();
                        this.calheader = false;
                        this.MianDiv = false;
                        this.AudioDiv = true;
                        this.incmng = true;
                        this.outgng = false;
                    }
                });
            });
        });
    }
    Changeudio() {
        capacitor_audio_toggle__WEBPACK_IMPORTED_MODULE_12__["AudioToggle"].setAudioMode({ mode: 'earpiece' });
    }
    audiocall(i) {
        this.partnerId = this.contacts[i].mobile;
        this.StartCall(this.partnerId);
        this.calheader = false;
        this.MianDiv = false;
        this.AudioDiv = true;
        this.myEl = this.elRef.nativeElement.querySelector('#my-video');
        this.myEl.muted = true;
        this.partnerEl = this.elRef.nativeElement.querySelector('#partner-video');
        this.webRTC.init(this.user_mobile, this.myEl, this.partnerEl);
        let mycall = this;
        setTimeout(function () {
            mycall.call();
        }, 5000);
    }
    call() {
        console.log("call connected", this.partnerId);
        this.webRTC.call(this.partnerId);
    }
    callend() {
        this.calheader = true;
        this.AudioDiv = false;
        this.MianDiv = true;
        this.ring.setVolume(0);
        this.ringtone.setVolume(0);
        this.busytone.setVolume(0);
        this.webRTC.close();
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "endcall.php?call_id=" + this.callId + "&record=" + this.partnerId + "CallRecord.mp3").subscribe((Endcall) => {
            this.Endcall = Endcall;
            if (this.Endcall == 1) {
                this.route.navigate(['/calls']);
            }
        });
    }
    // Clling Server Functions
    //start Call
    StartCall(pid) {
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "startcall.php?user_mobile=" + this.user_mobile + "&calee_mobile=" + pid + "&call_type=audio").subscribe((ResponseData) => {
            this.ResponseData = ResponseData;
            console.log("Call Response Data:", this.ResponseData);
            if (this.ResponseData != 0) {
                this.callId = this.ResponseData;
                this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "callstatus.php?calee_moble=" + pid).subscribe((calval) => {
                    this.callstatus = calval;
                    if (this.callstatus == 0) {
                        this.ring = this.media.create('https://topiko.com/ringtones/ring.mp3');
                        console.log(this.ring);
                        this.ring.setVolume(1);
                        this.ring.play();
                        let ringer = this;
                        setInterval(function () {
                            ringer.ring.play();
                        }, 2000);
                        setTimeout(() => {
                            clearInterval();
                        }, 10000);
                    }
                    else {
                        this.busytone = this.media.create('https://topiko.com/ringtones/busy.mp3');
                        this.busytone.setVolume(1);
                        this.busytone.play();
                        let callEnd = this;
                        setTimeout(function () {
                            callEnd.callend();
                        }, 8000);
                    }
                });
            }
        });
    }
    // Strat call code EndsHere
    // Answer Call code
    AnsCall() {
        console.log("Call_id", this.incomming[0].id);
        this.ringtone.setVolume(0);
        this.incmng = false;
        this.outgng = true;
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "answerstatus.php?call_id=" + this.incomming[0].id).subscribe((ans_status) => {
            this.ans_status = ans_status;
            if (this.ans_status == 1) {
                console.log("Call answered");
                this.partnerId = this.incomming[0].caller_mobile;
                this.calheader = false;
                this.MianDiv = false;
                this.AudioDiv = true;
                this.myEl = this.elRef.nativeElement.querySelector('#my-video');
                this.myEl.muted = true;
                this.partnerEl = this.elRef.nativeElement.querySelector('#partner-video');
                this.webRTC.init(this.user_mobile, this.myEl, this.partnerEl);
                let mycall = this;
                setTimeout(function () {
                    mycall.call();
                }, 5000);
            }
        });
    }
    //Answercall code ends here
    //check call status code starts here
    CheckCallStatus() {
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "checkcallstatus.php?call_id=" + this.callId).subscribe((Cstat) => {
            this.Cstat = Cstat;
            console.log("Call Status is:", this.Cstat);
            if (this.Cstat != 0) {
                this.Status = this.Cstat[0].status;
                this.Ans_Status = this.Cstat[0].ans_status;
                if (this.Ans_Status == 1) {
                    this.ring.setVolume(0);
                    this.Changeudio();
                }
                if (this.Status == 2) {
                    this.ObservableVar.unsubscribe();
                    this.callend();
                }
            }
        });
    }
    EndCall() {
        this.callend();
    }
    ionViewDidLeave() {
        this.ObservableVar.unsubscribe();
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "offlinestatus.php?user_id=" + this.user_id).subscribe(Response => {
            console.log(Response);
        });
    }
};
CallsContactPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _providers_audiowebrtc_service__WEBPACK_IMPORTED_MODULE_8__["AudiowebrtcService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_10__["Media"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"] }
];
CallsContactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-calls-contact',
        template: _raw_loader_calls_contact_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calls_contact_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CallsContactPage);



/***/ }),

/***/ "8ZM6":
/*!***************************************************************!*\
  !*** ./src/app/calls-contact/calls-contact-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CallsContactPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallsContactPageRoutingModule", function() { return CallsContactPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calls_contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calls-contact.page */ "0J+y");




const routes = [
    {
        path: '',
        component: _calls_contact_page__WEBPACK_IMPORTED_MODULE_3__["CallsContactPage"]
    }
];
let CallsContactPageRoutingModule = class CallsContactPageRoutingModule {
};
CallsContactPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CallsContactPageRoutingModule);



/***/ }),

/***/ "Aw3t":
/*!*******************************************************!*\
  !*** ./src/app/calls-contact/calls-contact.module.ts ***!
  \*******************************************************/
/*! exports provided: CallsContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallsContactPageModule", function() { return CallsContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _calls_contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calls-contact-routing.module */ "8ZM6");
/* harmony import */ var _calls_contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calls-contact.page */ "0J+y");







let CallsContactPageModule = class CallsContactPageModule {
};
CallsContactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calls_contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["CallsContactPageRoutingModule"]
        ],
        declarations: [_calls_contact_page__WEBPACK_IMPORTED_MODULE_6__["CallsContactPage"]]
    })
], CallsContactPageModule);



/***/ }),

/***/ "LFDX":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calls-contact/calls-contact.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\"></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Your Contact</ion-title>\n    <ion-row class=\"date\">\n      <ion-title>{{cntlength}} Contacts</ion-title>\n    </ion-row>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <audio id=\"partner-video\" (click)=\"swapVideo('my-video')\" autoplay controls\n  [ngClass]=\"{'top-video': topVideoFrame === 'partner-video', 'main-video': topVideoFrame != 'partner-video'}\" style=\"display: none;\">\n</audio>\n<audio id=\"my-video\" (click)=\"swapVideo('partner-video')\" autoplay controls muted=\"muted\"\n  [ngClass]=\"{'top-video': topVideoFrame === 'my-video', 'main-video': topVideoFrame != 'my-video'}\" style=\"display: none;\">\n</audio>\n <!--  <ion-grid class=\"group\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"people\"></ion-icon>\n        </ion-fab-button>\n      </div>\n      <ion-col>\n        <p>New group call</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"group\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"person-add\"></ion-icon>\n        </ion-fab-button>\n      </div>\n      <ion-col>\n        <p>New Contact</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n<div *ngIf= \"MianDiv\">\n  <ion-card *ngFor=\"let contact of contacts let i=index\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">{{contact.name}}</p>\n        <p class=\"time\">{{contact.city}}</p>\n      </ion-col>\n      <ion-col class=\"vidicon\" size=\"2\">\n        <!-- <ion-icon name=\"videocam\"></ion-icon> -->\n      </ion-col>\n      <ion-col class=\"callicon\" size=\"2\">\n        <ion-icon name=\"call\" (click)=\"audiocall(i)\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</div>\n  <div *ngIf=\"AudioDiv\" class=\"audioDiv\">\n    <h1 class=\"bus\" style=\"margin-top: 70%;\">{{partnerId}}</h1>\n    <h4 class=\"calling\">Calling</h4>\n  <ion-grid>\n   \n    <ion-row  *ngIf=\"outgng\" style=\"margin-top: 40%; text-align: center;\">\n      <ion-fab-button color=\"danger\" (click)=\"callend()\" style=\"margin-left: 45%;\">\n        <ion-icon name=\"call\"></ion-icon>\n      </ion-fab-button>\n    </ion-row>\n    <ion-row *ngIf=\"incmng\" style=\"margin-top: 30%;\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"2\" style=\"text-align: left !important;\">\n        <ion-button color= \"danger\" (click)=\"callend()\" style=\"width:50px; height:50px; border-radius: 17px; float: left;\">\n          <ion-icon name=\"call\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\"></ion-col>\n      <ion-col size=\"2\" style=\"text-align: right !important;\">\n        <ion-button  color=\"success\" (click)=\"AnsCall()\" style=\"width:50px; height:50px; border-radius: 17px; float: right;\" >\n          <ion-icon name=\"call\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n</ion-content>");

/***/ }),

/***/ "lV+G":
/*!*******************************************************!*\
  !*** ./src/app/calls-contact/calls-contact.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: linear-gradient(#871178, #3c1378) !important;\n  color: #ffffff;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  letter-spacing: 0.6px;\n}\n\n.date ion-title {\n  font-size: 10px;\n  margin-top: 7px;\n  letter-spacing: 0px;\n  color: #ffffff;\n}\n\nion-content {\n  --padding-bottom: 65px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n}\n\nion-fab-button {\n  --ion-color-base: linear-gradient(#871178, #3c1378) !important;\n  --box-shadow: none;\n}\n\nion-fab-button ion-icon {\n  color: #ffffff;\n  font-size: 30px;\n}\n\nion-card {\n  padding: 7px;\n  padding-left: 10px;\n  margin: 7px 0px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.group ion-col {\n  padding-left: 10px;\n}\n\n.group {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.group p {\n  color: #871178;\n  font-size: 17px;\n  font-weight: bold;\n  padding: 0px;\n  margin-top: 18px;\n}\n\n.avatar ion-avatar {\n  width: 56px;\n  height: 56px;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px 5px 3px 0px;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 4px 0px 4px 0px;\n}\n\n.callicon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.vidicon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.callicon ion-icon {\n  font-size: 22px;\n}\n\n.vidicon ion-icon {\n  font-size: 22px;\n}\n\n.audioDiv {\n  text-align: center;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhbGxzLWNvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMERBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkE7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLDhEQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFRSjs7QUFOQTtFQUNJLGtCQUFBO0FBU0o7O0FBUEE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBVUo7O0FBUkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBV0o7O0FBUkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVdKOztBQVRBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQWFKOztBQVZBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFhSjs7QUFYQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBY0o7O0FBWkE7RUFDSSxlQUFBO0FBZUo7O0FBYkE7RUFDSSxlQUFBO0FBZ0JKOztBQWJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBZ0JKIiwiZmlsZSI6ImNhbGxzLWNvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbmlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG59XHJcbi5kYXRlIGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNjVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMThweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE4cHg7XHJcbn1cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luOiA3cHggMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG59XHJcbi5ncm91cCBpb24tY29sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4uZ3JvdXAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5ncm91cCBwIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG59XHJcblxyXG4uYXZhdGFyIGlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbn1cclxuLnVzZXItbmFtZSB7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMHB4IDVweCAzcHggMHB4O1xyXG59XHJcbi50aW1lIHtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiA0cHggMHB4IDRweCAwcHg7XHJcbn1cclxuXHJcbi5jYWxsaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi52aWRpY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNhbGxpY29uIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4udmlkaWNvbiBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5hdWRpb0RpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=calls-contact-calls-contact-module-es2015.js.map