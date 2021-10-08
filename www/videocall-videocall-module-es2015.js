(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videocall-videocall-module"],{

/***/ "0R2u":
/*!*********************************************!*\
  !*** ./src/app/videocall/videocall.page.ts ***!
  \*********************************************/
/*! exports provided: VideocallPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideocallPage", function() { return VideocallPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_videocall_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./videocall.page.html */ "tyO+");
/* harmony import */ var _videocall_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videocall.page.scss */ "zpFX");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/media/ngx */ "9YJ4");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _providers_webrtc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/webrtc.service */ "ySJ8");










let VideocallPage = class VideocallPage {
    constructor(webRTC, elRef, storage, http, media, navCtrl) {
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
    ngOnInit() {
        this.storage.get('userdetails').then((udetails) => {
            this.userDetails = udetails;
            this.userId = this.userDetails[0].mobile;
            this.init();
        });
        this.storage.get("partnerId").then(partner => {
            this.partnerId = partner;
            this.StartVCall(this.partnerId);
            let vidcall = this;
            setTimeout(function () {
                vidcall.call();
            }, 3000);
        });
    }
    //start Call
    StartVCall(pid) {
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "startcall.php?user_mobile=" + this.userId + "&calee_mobile=" + pid + "&call_type=video").subscribe((ResponseData) => {
            this.ResponseData = ResponseData;
            console.log("Call Response Data:", this.ResponseData);
            if (this.ResponseData != 0) {
                this.callId = this.ResponseData;
                this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "callstatus.php?calee_moble=" + pid).subscribe((calval) => {
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
    callend() {
        throw new Error('Method not implemented.');
    }
    // Strat call code EndsHere
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.myEl = this.elRef.nativeElement.querySelector('#my-video');
            this.partnerEl = this.elRef.nativeElement.querySelector('#partner-video');
            this.webRTC.init(this.userId, this.myEl, this.partnerEl);
        });
    }
    call() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.webRTC.call(this.partnerId);
            this.swapVideo('my-video');
        });
    }
    swapVideo(topVideo) {
        this.topVideoFrame = topVideo;
    }
};
VideocallPage.ctorParameters = () => [
    { type: _providers_webrtc_service__WEBPACK_IMPORTED_MODULE_9__["WebrtcService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_5__["Media"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
VideocallPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-videocall',
        template: _raw_loader_videocall_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_videocall_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VideocallPage);



/***/ }),

/***/ "6Ylz":
/*!***********************************************!*\
  !*** ./src/app/videocall/videocall.module.ts ***!
  \***********************************************/
/*! exports provided: VideocallPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideocallPageModule", function() { return VideocallPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _videocall_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videocall-routing.module */ "S+8M");
/* harmony import */ var _videocall_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videocall.page */ "0R2u");







let VideocallPageModule = class VideocallPageModule {
};
VideocallPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _videocall_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideocallPageRoutingModule"]
        ],
        declarations: [_videocall_page__WEBPACK_IMPORTED_MODULE_6__["VideocallPage"]]
    })
], VideocallPageModule);



/***/ }),

/***/ "S+8M":
/*!*******************************************************!*\
  !*** ./src/app/videocall/videocall-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: VideocallPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideocallPageRoutingModule", function() { return VideocallPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _videocall_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videocall.page */ "0R2u");




const routes = [
    {
        path: '',
        component: _videocall_page__WEBPACK_IMPORTED_MODULE_3__["VideocallPage"]
    }
];
let VideocallPageRoutingModule = class VideocallPageRoutingModule {
};
VideocallPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VideocallPageRoutingModule);



/***/ }),

/***/ "tyO+":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videocall/videocall.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div id=\"errorMsg\"></div>\n\n  <video id=\"partner-video\" (click)=\"swapVideo('my-video')\" autoplay playsinline\n    [ngClass]=\"{'top-video': topVideoFrame === 'partner-video', 'main-video': topVideoFrame != 'partner-video'}\">\n  </video>\n  <video id=\"my-video\" (click)=\"swapVideo('partner-video')\" autoplay playsinline\n    [ngClass]=\"{'top-video': topVideoFrame === 'my-video', 'main-video': topVideoFrame != 'my-video'}\" >\n  </video>\n\n\n  <ion-row nowrap style=\"display: none;\">\n    <ion-button (click)=\"init()\">Login As: </ion-button>\n    <ion-item>\n      <ion-input type=\"text\" [(ngModel)]=\"userId\" placeholder=\"enter your nick name\"></ion-input>\n    </ion-item>\n  </ion-row>\n\n  <ion-row nowrap style=\"display: none;\">\n    <ion-button (click)=\"call()\">Call To: </ion-button>\n    <ion-item>\n      <ion-input type=\"text\" [(ngModel)]=\"partnerId\" placeholder=\"your partner nick name\"></ion-input>\n    </ion-item>\n  </ion-row>  \n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col>\n      <ion-fab-button class=\"acc-call\">\n        <ion-icon name=\"call-outline\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button color=\"light\">\n      <ion-icon name=\"mic-outline\"  style=\"color: #000;\"></ion-icon>\n      <ion-icon name=\"mic-off-outline\"  style=\"color: #000;\"></ion-icon>\n    </ion-fab-button>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"camera-reverse-outline\"></ion-icon>\n    </ion-col>\n    <ion-col>\n      <ion-fab-button>\n        <ion-icon name=\"call-outline\" style=\"transform: rotate(135deg);\"></ion-icon>\n      </ion-fab-button>\n      \n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "ySJ8":
/*!*********************************************!*\
  !*** ./src/app/providers/webrtc.service.ts ***!
  \*********************************************/
/*! exports provided: WebrtcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebrtcService", function() { return WebrtcService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! peerjs */ "oLy0");
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(peerjs__WEBPACK_IMPORTED_MODULE_2__);



let WebrtcService = class WebrtcService {
    constructor() {
        this.stun = 'stun.l.google.com:19302';
        this.stunServer = {
            urls: 'stun:' + this.stun,
        };
        this.options = {
            key: 'cd1ft79ro8g833di',
            debug: 3
        };
    }
    getMedia() {
        navigator.getUserMedia({ audio: true, video: true }, (stream) => {
            this.handleSuccess(stream);
        }, (error) => {
            this.handleError(error);
        });
    }
    init(userId, myEl, partnerEl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.myEl = myEl;
            this.partnerEl = partnerEl;
            try {
                this.getMedia();
            }
            catch (e) {
                this.handleError(e);
            }
            yield this.createPeer(userId);
        });
    }
    createPeer(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.peer = new peerjs__WEBPACK_IMPORTED_MODULE_2___default.a(userId);
            this.peer.on('open', () => {
                this.wait();
            });
        });
    }
    call(partnerId) {
        const call = this.peer.call(partnerId, this.myStream);
        call.on('stream', (stream) => {
            this.partnerEl.srcObject = stream;
        });
    }
    wait() {
        this.peer.on('call', (call) => {
            call.answer(this.myStream);
            call.on('stream', (stream) => {
                this.partnerEl.srcObject = stream;
            });
        });
    }
    handleSuccess(stream) {
        this.myStream = stream;
        this.myEl.srcObject = stream;
    }
    handleError(error) {
        if (error.name === 'ConstraintNotSatisfiedError') {
            //const v = constraints.video;
            // this.errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`);
            this.errorMsg(`The resolution px is not supported by your device.`);
        }
        else if (error.name === 'PermissionDeniedError') {
            this.errorMsg('Permissions have not been granted to use your camera and ' +
                'microphone, you need to allow the page access to your devices in ' +
                'order for the demo to work.');
        }
        this.errorMsg(`getUserMedia error: ${error.name}`, error);
    }
    errorMsg(msg, error) {
        const errorElement = document.querySelector('#errorMsg');
        errorElement.innerHTML += `<p>${msg}</p>`;
        if (typeof error !== 'undefined') {
            console.error(error);
        }
    }
};
WebrtcService.ctorParameters = () => [];
WebrtcService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WebrtcService);



/***/ }),

/***/ "zpFX":
/*!***********************************************!*\
  !*** ./src/app/videocall/videocall.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer ion-icon {\n  width: 32px;\n  height: 32px;\n}\n\nion-fab-button {\n  --background: red !important;\n  width: 50px;\n  height: 50px;\n}\n\n.acc-call {\n  --background: green !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZpZGVvY2FsbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlBO0VBRUksNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUlBO0VBRUksOEJBQUE7QUFGSiIsImZpbGUiOiJ2aWRlb2NhbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlciBpb24taWNvblxyXG57XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuXHJcbn1cclxuXHJcbmlvbi1mYWItYnV0dG9uXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4uYWNjLWNhbGxcclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBncmVlbiAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=videocall-videocall-module-es2015.js.map