(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\topiko_Final\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var rxjs_rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/rx */ "SH02");
/* harmony import */ var rxjs_rx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_rx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/events.service */ "riPR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @capacitor/push-notifications */ "asNa");
var AppComponent_1;













let AppComponent = AppComponent_1 = class AppComponent {
    constructor(storage, events, http, route, platform, alertController, statusBar, screenOrientation) {
        this.storage = storage;
        this.events = events;
        this.http = http;
        this.route = route;
        this.platform = platform;
        this.alertController = alertController;
        this.statusBar = statusBar;
        this.screenOrientation = screenOrientation;
        //public static ApiUrl = 'http://localhost/topiko/app/';
        this.appPages = [
            { title: 'Home', url: '/home', icon: 'home' },
            { title: 'Business', url: '/my-business', icon: 'briefcase' },
            { title: 'Career', url: '/careerview', icon: 'glasses' },
            { title: 'Wallet', url: '/wallet', icon: 'wallet' },
            { title: 'My Visting Card', url: '/mycard', icon: 'card' },
            { title: 'Qr Reach', url: '/qrreach', icon: 'qr-code' },
            { title: 'Invitation', url: '/folder/Inbox', icon: 'mail-open' },
            { title: 'Referal', url: '/folder/Inbox', icon: 'share-social' },
            { title: 'Reach Us', url: '/folder/Inbox', icon: 'paper-plane' },
            { title: 'Logout', url: '/relogin', icon: 'lock-open' }
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.storage.create();
        this.initializeApp();
        //this.InitializingApp()
    }
    settings() {
        this.storage.set("uid", this.uid);
        this.route.navigate(['/settings']);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.create();
            this.events.getObservable().subscribe((data) => {
                console.log("Logged in Data:", data);
                this.udata = data;
                this.udata = this.udata.userdetails;
                this.uname = this.udata[0].name;
                this.umobile = this.udata[0].mobile;
                this.ucity = this.udata[0].city;
                this.ucountry = this.udata[0].country;
                this.uimage = this.udata[0].image;
                console.log("User Data", this.udata);
                this.storage.set("userdetails", this.udata);
            });
            this.storage.get("userdetails").then(data => {
                console.log("Logged in  Storage Data:", data);
                this.udata = data;
                this.uname = this.udata[0].name;
                this.umobile = this.udata[0].mobile;
                this.ucity = this.udata[0].city;
                this.ucountry = this.udata[0].country;
                this.uimage = this.udata[0].image;
                console.log(this.udata);
            });
            this.ObservableVar = rxjs_rx__WEBPACK_IMPORTED_MODULE_5__["Observable"].interval(3000).subscribe(() => {
                this.CheckIncoming();
            });
            // If using a custom driver:
            // await this.storage.defineDriver(MyCustomDriver)
        });
    }
    ;
    initializeApp() {
        this.platform.ready().then(() => {
            this.platform.backButton.subscribeWithPriority(9999, () => {
                document.addEventListener('backbutton', function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    console.log('hello');
                }, false);
                //alert("back button pressed")
            });
            this.statusBar.styleDefault();
        });
    }
    InitializingApp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Request permission to use push notifications
            // iOS will prompt user and return if they granted permission or not
            // Android will just grant without prompting
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_12__["PushNotifications"].requestPermissions().then(result => {
                if (result.receive === 'granted') {
                    // Register with Apple / Google to receive push via APNS/FCM
                    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_12__["PushNotifications"].register();
                }
                else {
                    // Show some error
                }
            });
            // On success, we should be able to receive notifications
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_12__["PushNotifications"].addListener('registration', (token) => {
                this.ftoken = token;
                this.storage.get("userdetails").then(val => {
                    this.udata = val;
                    this.user_id = this.udata[0].id;
                    this.http.get(AppComponent_1.ApiUrl + "updatefcmid.php?user_id=" + this.user_id + "token=" + this.ftoken.value).subscribe(fres => {
                        console.log(fres);
                    });
                });
            });
            // Some issue with our setup and push will not work
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_12__["PushNotifications"].addListener('registrationError', (error) => {
                //alert('Error on registration: ' + JSON.stringify(error));
            });
            // Show us the notification payload if the app is open on our device
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_12__["PushNotifications"].addListener('pushNotificationReceived', (notification) => {
                alert('New Message received: ' + JSON.stringify(notification));
            });
            // Method called when tapping on a notification
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_12__["PushNotifications"].addListener('pushNotificationActionPerformed', (notification) => {
                //alert('Push action performed: ' + JSON.stringify(notification));
            });
        });
    }
    CheckIncoming() {
        this.storage.get("userdetails").then((uval) => {
            this.userDetails = uval;
            this.user_mobile = this.userDetails[0].mobile;
            if (this.user_mobile) {
                this.http.get(AppComponent_1.ApiUrl + "checkincomming.php?user_mobile=" + this.user_mobile).subscribe((incoming) => {
                    this.incomming = incoming;
                    this.call_type = this.incomming[0].call_type;
                    console.log("incoming:", this.incomming);
                    if (this.incomming != 0) {
                        if (this.call_type == 'audio') {
                            this.route.navigate(['/calls']);
                        }
                        else {
                            this.route.navigate(['videocall']);
                        }
                    }
                    else {
                        //this.route.navigate(['home']);
                    }
                });
            }
        });
    }
};
AppComponent.ApiUrl = 'https://topiko.com/app/';
AppComponent.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__["ScreenOrientation"] }
];
AppComponent = AppComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <div class=\"side-head\">\n            <ion-row>\n              <ion-col size=\"3\" style=\"padding: 10px;\">English</ion-col>\n              <ion-col (click)=\"settings()\" style=\"text-align: right;\"><ion-icon name=\"cog-outline\"></ion-icon></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"5\"></ion-col>\n              <ion-col>\n                <ion-avatar *ngIf=\"uimage != ''\"><img src=\"{{uimage}}\"></ion-avatar>\n                <span *ngIf=\"uimage == ''\">\n                  <p style=\"background: #00a56e; margin-left: -33%; position: absolute; font-size: 4em; color:#fff; text-align: center; width: 75px; height: 75px; padding:25%; border-radius:50%; margin-bottom: 7%;\">{{uname | slice:0:1}}</p>\n                </span>\n              </ion-col>\n              <ion-col size=\"5\"></ion-col>\n            </ion-row>\n            <ion-row style=\"margin-top:30%\">\n              <ion-col>\n                <h2>{{uname}}</h2>\n                <p>{{ucity}}, {{ucountry}}</p>\n              </ion-col>\n            </ion-row>\n         \n        </div>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <!-- <ion-list id=\"labels-list\">\n          <ion-list-header>Labels</ion-list-header>\n\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n            <ion-label>{{ label }}</ion-label>\n          </ion-item>\n        </ion-list> -->\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "BLr9");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "fGQ8");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/media/ngx */ "9YJ4");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "TzAO");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_16__["QRCodeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot()],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicRouteStrategy"] }, _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_20__["Contacts"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_21__["StatusBar"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_22__["ScreenOrientation"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__["FileTransfer"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_15__["QRScanner"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__["CallNumber"], _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_18__["LaunchNavigator"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_19__["Media"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "riPR":
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let EventsService = class EventsService {
    constructor() {
        this.fooSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    publishSomeData(data) {
        this.fooSubject.next(data);
    }
    getObservable() {
        return this.fooSubject;
    }
};
EventsService.ctorParameters = () => [];
EventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventsService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | folder-folder-module */ "folder-folder-module").then(__webpack_require__.bind(null, /*! ./folder/folder.module */ "yIOV")).then(m => m.FolderPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'otp',
        loadChildren: () => __webpack_require__.e(/*! import() | otp-otp-module */ "otp-otp-module").then(__webpack_require__.bind(null, /*! ./otp/otp.module */ "ikiF")).then(m => m.OtpPageModule)
    },
    {
        path: 'createdvc',
        loadChildren: () => __webpack_require__.e(/*! import() | createdvc-createdvc-module */ "createdvc-createdvc-module").then(__webpack_require__.bind(null, /*! ./createdvc/createdvc.module */ "FT92")).then(m => m.CreatedvcPageModule)
    },
    {
        path: 'digitalcard',
        loadChildren: () => __webpack_require__.e(/*! import() | digitalcard-digitalcard-module */ "digitalcard-digitalcard-module").then(__webpack_require__.bind(null, /*! ./digitalcard/digitalcard.module */ "cVP2")).then(m => m.DigitalcardPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: 'digitalvcard',
        loadChildren: () => __webpack_require__.e(/*! import() | digitalvcard-digitalvcard-module */ "digitalvcard-digitalvcard-module").then(__webpack_require__.bind(null, /*! ./digitalvcard/digitalvcard.module */ "mzuC")).then(m => m.DigitalvcardPageModule)
    },
    {
        path: 'terms',
        loadChildren: () => __webpack_require__.e(/*! import() | terms-terms-module */ "terms-terms-module").then(__webpack_require__.bind(null, /*! ./terms/terms.module */ "eNqe")).then(m => m.TermsPageModule)
    },
    {
        path: 'myvcard',
        loadChildren: () => __webpack_require__.e(/*! import() | myvcard-myvcard-module */ "myvcard-myvcard-module").then(__webpack_require__.bind(null, /*! ./myvcard/myvcard.module */ "Mqsi")).then(m => m.MyvcardPageModule)
    },
    {
        path: 'morevcards',
        loadChildren: () => __webpack_require__.e(/*! import() | morevcards-morevcards-module */ "morevcards-morevcards-module").then(__webpack_require__.bind(null, /*! ./morevcards/morevcards.module */ "RdsV")).then(m => m.MorevcardsPageModule)
    },
    {
        path: 'editdvdetails',
        loadChildren: () => __webpack_require__.e(/*! import() | editdvdetails-editdvdetails-module */ "editdvdetails-editdvdetails-module").then(__webpack_require__.bind(null, /*! ./editdvdetails/editdvdetails.module */ "FW6d")).then(m => m.EditdvdetailsPageModule)
    },
    {
        path: 'calls',
        loadChildren: () => Promise.all(/*! import() | calls-calls-module */[__webpack_require__.e("default~calls-calls-module~calls-contact-calls-contact-module~connect-connect-module~videocall-video~23fb032a"), __webpack_require__.e("common"), __webpack_require__.e("calls-calls-module")]).then(__webpack_require__.bind(null, /*! ./calls/calls.module */ "Ugfu")).then(m => m.CallsPageModule)
    },
    {
        path: 'connect',
        loadChildren: () => Promise.all(/*! import() | connect-connect-module */[__webpack_require__.e("default~calls-calls-module~calls-contact-calls-contact-module~connect-connect-module~videocall-video~23fb032a"), __webpack_require__.e("common"), __webpack_require__.e("connect-connect-module")]).then(__webpack_require__.bind(null, /*! ./connect/connect.module */ "yXIz")).then(m => m.ConnectPageModule)
    },
    {
        path: 'dial',
        loadChildren: () => __webpack_require__.e(/*! import() | dial-dial-module */ "dial-dial-module").then(__webpack_require__.bind(null, /*! ./dial/dial.module */ "3rUi")).then(m => m.DialPageModule)
    },
    {
        path: 'product',
        loadChildren: () => __webpack_require__.e(/*! import() | product-product-module */ "product-product-module").then(__webpack_require__.bind(null, /*! ./product/product.module */ "qvFY")).then(m => m.ProductPageModule)
    },
    {
        path: 'service',
        loadChildren: () => __webpack_require__.e(/*! import() | service-service-module */ "service-service-module").then(__webpack_require__.bind(null, /*! ./service/service.module */ "mhyn")).then(m => m.ServicePageModule)
    },
    {
        path: 'employee',
        loadChildren: () => __webpack_require__.e(/*! import() | employee-employee-module */ "employee-employee-module").then(__webpack_require__.bind(null, /*! ./employee/employee.module */ "PgJR")).then(m => m.EmployeePageModule)
    },
    {
        path: 'addemployee',
        loadChildren: () => __webpack_require__.e(/*! import() | addemployee-addemployee-module */ "addemployee-addemployee-module").then(__webpack_require__.bind(null, /*! ./addemployee/addemployee.module */ "uWTs")).then(m => m.AddemployeePageModule)
    },
    {
        path: 'qrreach',
        loadChildren: () => __webpack_require__.e(/*! import() | qrreach-qrreach-module */ "qrreach-qrreach-module").then(__webpack_require__.bind(null, /*! ./qrreach/qrreach.module */ "pBcL")).then(m => m.QrreachPageModule)
    },
    {
        path: 'mpin',
        loadChildren: () => __webpack_require__.e(/*! import() | mpin-mpin-module */ "mpin-mpin-module").then(__webpack_require__.bind(null, /*! ./mpin/mpin.module */ "SOG4")).then(m => m.MpinPageModule)
    },
    {
        path: 'mycard',
        loadChildren: () => Promise.all(/*! import() | mycard-mycard-module */[__webpack_require__.e("default~edit-employee-edit-employee-module~mycard-mycard-module"), __webpack_require__.e("mycard-mycard-module")]).then(__webpack_require__.bind(null, /*! ./mycard/mycard.module */ "WZkD")).then(m => m.MycardPageModule)
    },
    {
        path: 'qr-scanner',
        loadChildren: () => __webpack_require__.e(/*! import() | qr-scanner-qr-scanner-module */ "qr-scanner-qr-scanner-module").then(__webpack_require__.bind(null, /*! ./qr-scanner/qr-scanner.module */ "K9JO")).then(m => m.QrScannerPageModule)
    },
    {
        path: 'addqr',
        loadChildren: () => __webpack_require__.e(/*! import() | addqr-addqr-module */ "addqr-addqr-module").then(__webpack_require__.bind(null, /*! ./addqr/addqr.module */ "o0VF")).then(m => m.AddqrPageModule)
    },
    {
        path: 'add-qr-reach',
        loadChildren: () => __webpack_require__.e(/*! import() | add-qr-reach-add-qr-reach-module */ "add-qr-reach-add-qr-reach-module").then(__webpack_require__.bind(null, /*! ./add-qr-reach/add-qr-reach.module */ "3dyv")).then(m => m.AddQrReachPageModule)
    },
    {
        path: 'my-business',
        loadChildren: () => __webpack_require__.e(/*! import() | my-business-my-business-module */ "my-business-my-business-module").then(__webpack_require__.bind(null, /*! ./my-business/my-business.module */ "tg+D")).then(m => m.MyBusinessPageModule)
    },
    {
        path: 'create-business',
        loadChildren: () => __webpack_require__.e(/*! import() | create-business-create-business-module */ "create-business-create-business-module").then(__webpack_require__.bind(null, /*! ./create-business/create-business.module */ "eJ5f")).then(m => m.CreateBusinessPageModule)
    },
    {
        path: 'business-details',
        loadChildren: () => __webpack_require__.e(/*! import() | business-details-business-details-module */ "business-details-business-details-module").then(__webpack_require__.bind(null, /*! ./business-details/business-details.module */ "iWjC")).then(m => m.BusinessDetailsPageModule)
    },
    {
        path: 'business-profile',
        loadChildren: () => __webpack_require__.e(/*! import() | business-profile-business-profile-module */ "business-profile-business-profile-module").then(__webpack_require__.bind(null, /*! ./business-profile/business-profile.module */ "w0yx")).then(m => m.BusinessProfilePageModule)
    },
    {
        path: 'offers',
        loadChildren: () => __webpack_require__.e(/*! import() | offers-offers-module */ "offers-offers-module").then(__webpack_require__.bind(null, /*! ./offers/offers.module */ "x4ys")).then(m => m.OffersPageModule)
    },
    {
        path: 'record-view',
        loadChildren: () => __webpack_require__.e(/*! import() | record-view-record-view-module */ "record-view-record-view-module").then(__webpack_require__.bind(null, /*! ./record-view/record-view.module */ "+ZGF")).then(m => m.RecordViewPageModule)
    },
    {
        path: 'add-product',
        loadChildren: () => __webpack_require__.e(/*! import() | add-product-add-product-module */ "add-product-add-product-module").then(__webpack_require__.bind(null, /*! ./add-product/add-product.module */ "gp+k")).then(m => m.AddProductPageModule)
    },
    {
        path: 'add-service',
        loadChildren: () => __webpack_require__.e(/*! import() | add-service-add-service-module */ "add-service-add-service-module").then(__webpack_require__.bind(null, /*! ./add-service/add-service.module */ "oOJ9")).then(m => m.AddServicePageModule)
    },
    {
        path: 'add-employee',
        loadChildren: () => __webpack_require__.e(/*! import() | add-employee-add-employee-module */ "add-employee-add-employee-module").then(__webpack_require__.bind(null, /*! ./add-employee/add-employee.module */ "y7iA")).then(m => m.AddEmployeePageModule)
    },
    {
        path: 'qr-payments',
        loadChildren: () => __webpack_require__.e(/*! import() | qr-payments-qr-payments-module */ "qr-payments-qr-payments-module").then(__webpack_require__.bind(null, /*! ./qr-payments/qr-payments.module */ "h52t")).then(m => m.QrPaymentsPageModule)
    },
    {
        path: 'add-qr-payments',
        loadChildren: () => __webpack_require__.e(/*! import() | add-qr-payments-add-qr-payments-module */ "add-qr-payments-add-qr-payments-module").then(__webpack_require__.bind(null, /*! ./add-qr-payments/add-qr-payments.module */ "1dkZ")).then(m => m.AddQrPaymentsPageModule)
    },
    {
        path: 'plans',
        loadChildren: () => __webpack_require__.e(/*! import() | plans-plans-module */ "plans-plans-module").then(__webpack_require__.bind(null, /*! ./plans/plans.module */ "CaEi")).then(m => m.PlansPageModule)
    },
    {
        path: 'verification',
        loadChildren: () => __webpack_require__.e(/*! import() | verification-verification-module */ "verification-verification-module").then(__webpack_require__.bind(null, /*! ./verification/verification.module */ "Kw+X")).then(m => m.VerificationPageModule)
    },
    {
        path: 'global-search',
        loadChildren: () => __webpack_require__.e(/*! import() | global-search-global-search-module */ "global-search-global-search-module").then(__webpack_require__.bind(null, /*! ./global-search/global-search.module */ "PVMv")).then(m => m.GlobalSearchPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() | notification-notification-module */ "notification-notification-module").then(__webpack_require__.bind(null, /*! ./notification/notification.module */ "TLzw")).then(m => m.NotificationPageModule)
    },
    {
        path: 'offersnearyou',
        loadChildren: () => __webpack_require__.e(/*! import() | offersnearyou-offersnearyou-module */ "offersnearyou-offersnearyou-module").then(__webpack_require__.bind(null, /*! ./offersnearyou/offersnearyou.module */ "0Wm/")).then(m => m.OffersnearyouPageModule)
    },
    {
        path: 'shopsnearyou',
        loadChildren: () => __webpack_require__.e(/*! import() | shopsnearyou-shopsnearyou-module */ "shopsnearyou-shopsnearyou-module").then(__webpack_require__.bind(null, /*! ./shopsnearyou/shopsnearyou.module */ "ZHX0")).then(m => m.ShopsnearyouPageModule)
    },
    {
        path: 'servicesnearyou',
        loadChildren: () => __webpack_require__.e(/*! import() | servicesnearyou-servicesnearyou-module */ "servicesnearyou-servicesnearyou-module").then(__webpack_require__.bind(null, /*! ./servicesnearyou/servicesnearyou.module */ "3Hlm")).then(m => m.ServicesnearyouPageModule)
    },
    {
        path: 'featured',
        loadChildren: () => __webpack_require__.e(/*! import() | featured-featured-module */ "featured-featured-module").then(__webpack_require__.bind(null, /*! ./featured/featured.module */ "HHnp")).then(m => m.FeaturedPageModule)
    },
    {
        path: 'recent',
        loadChildren: () => __webpack_require__.e(/*! import() | recent-recent-module */ "recent-recent-module").then(__webpack_require__.bind(null, /*! ./recent/recent.module */ "N6b7")).then(m => m.RecentPageModule)
    },
    {
        path: 'shop-categories',
        loadChildren: () => __webpack_require__.e(/*! import() | shop-categories-shop-categories-module */ "shop-categories-shop-categories-module").then(__webpack_require__.bind(null, /*! ./shop-categories/shop-categories.module */ "Marq")).then(m => m.ShopCategoriesPageModule)
    },
    {
        path: 'service-categories',
        loadChildren: () => __webpack_require__.e(/*! import() | service-categories-service-categories-module */ "service-categories-service-categories-module").then(__webpack_require__.bind(null, /*! ./service-categories/service-categories.module */ "pKK3")).then(m => m.ServiceCategoriesPageModule)
    },
    {
        path: 'favourites',
        loadChildren: () => __webpack_require__.e(/*! import() | favourites-favourites-module */ "favourites-favourites-module").then(__webpack_require__.bind(null, /*! ./favourites/favourites.module */ "LLgE")).then(m => m.FavouritesPageModule)
    },
    {
        path: 'favourite-details',
        loadChildren: () => __webpack_require__.e(/*! import() | favourite-details-favourite-details-module */ "favourite-details-favourite-details-module").then(__webpack_require__.bind(null, /*! ./favourite-details/favourite-details.module */ "o7BE")).then(m => m.FavouriteDetailsPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "cRhG")).then(m => m.ProfilePageModule)
    },
    {
        path: 'business-views',
        loadChildren: () => __webpack_require__.e(/*! import() | business-views-business-views-module */ "business-views-business-views-module").then(__webpack_require__.bind(null, /*! ./business-views/business-views.module */ "WC4N")).then(m => m.BusinessViewsPageModule)
    },
    {
        path: 'product-views',
        loadChildren: () => __webpack_require__.e(/*! import() | product-views-product-views-module */ "product-views-product-views-module").then(__webpack_require__.bind(null, /*! ./product-views/product-views.module */ "pTyn")).then(m => m.ProductViewsPageModule)
    },
    {
        path: 'offer-views',
        loadChildren: () => __webpack_require__.e(/*! import() | offer-views-offer-views-module */ "offer-views-offer-views-module").then(__webpack_require__.bind(null, /*! ./offer-views/offer-views.module */ "crPI")).then(m => m.OfferViewsPageModule)
    },
    {
        path: 'service-views',
        loadChildren: () => __webpack_require__.e(/*! import() | service-views-service-views-module */ "service-views-service-views-module").then(__webpack_require__.bind(null, /*! ./service-views/service-views.module */ "T/UR")).then(m => m.ServiceViewsPageModule)
    },
    {
        path: 'record-views',
        loadChildren: () => __webpack_require__.e(/*! import() | record-views-record-views-module */ "record-views-record-views-module").then(__webpack_require__.bind(null, /*! ./record-views/record-views.module */ "yqNi")).then(m => m.RecordViewsPageModule)
    },
    {
        path: 'qr-reach-view',
        loadChildren: () => __webpack_require__.e(/*! import() | qr-reach-view-qr-reach-view-module */ "qr-reach-view-qr-reach-view-module").then(__webpack_require__.bind(null, /*! ./qr-reach-view/qr-reach-view.module */ "Hzdy")).then(m => m.QrReachViewPageModule)
    },
    {
        path: 'edit-qr-reach',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-qr-reach-edit-qr-reach-module */ "edit-qr-reach-edit-qr-reach-module").then(__webpack_require__.bind(null, /*! ./edit-qr-reach/edit-qr-reach.module */ "X382")).then(m => m.EditQrReachPageModule)
    },
    {
        path: 'add-offer',
        loadChildren: () => __webpack_require__.e(/*! import() | add-offer-add-offer-module */ "add-offer-add-offer-module").then(__webpack_require__.bind(null, /*! ./add-offer/add-offer.module */ "QX4/")).then(m => m.AddOfferPageModule)
    },
    {
        path: 'addbranches',
        loadChildren: () => __webpack_require__.e(/*! import() | addbranches-addbranches-module */ "addbranches-addbranches-module").then(__webpack_require__.bind(null, /*! ./addbranches/addbranches.module */ "wcdY")).then(m => m.AddbranchesPageModule)
    },
    {
        path: 'branches',
        loadChildren: () => __webpack_require__.e(/*! import() | branches-branches-module */ "branches-branches-module").then(__webpack_require__.bind(null, /*! ./branches/branches.module */ "7zc+")).then(m => m.BranchesPageModule)
    },
    {
        path: 'edit-product',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-product-edit-product-module */ "edit-product-edit-product-module").then(__webpack_require__.bind(null, /*! ./edit-product/edit-product.module */ "dsgz")).then(m => m.EditProductPageModule)
    },
    {
        path: 'edit-offer',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-offer-edit-offer-module */ "edit-offer-edit-offer-module").then(__webpack_require__.bind(null, /*! ./edit-offer/edit-offer.module */ "aOOh")).then(m => m.EditOfferPageModule)
    },
    {
        path: 'edit-employee',
        loadChildren: () => Promise.all(/*! import() | edit-employee-edit-employee-module */[__webpack_require__.e("default~edit-employee-edit-employee-module~mycard-mycard-module"), __webpack_require__.e("edit-employee-edit-employee-module")]).then(__webpack_require__.bind(null, /*! ./edit-employee/edit-employee.module */ "uo0V")).then(m => m.EditEmployeePageModule)
    },
    {
        path: 'edit-service',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-service-edit-service-module */ "edit-service-edit-service-module").then(__webpack_require__.bind(null, /*! ./edit-service/edit-service.module */ "WFNT")).then(m => m.EditServicePageModule)
    },
    {
        path: 'showcase',
        loadChildren: () => __webpack_require__.e(/*! import() | showcase-showcase-module */ "showcase-showcase-module").then(__webpack_require__.bind(null, /*! ./showcase/showcase.module */ "Zah/")).then(m => m.ShowcasePageModule)
    },
    {
        path: 'editshowcase',
        loadChildren: () => __webpack_require__.e(/*! import() | editshowcase-editshowcase-module */ "editshowcase-editshowcase-module").then(__webpack_require__.bind(null, /*! ./editshowcase/editshowcase.module */ "53Bx")).then(m => m.EditshowcasePageModule)
    },
    {
        path: 'detail',
        loadChildren: () => __webpack_require__.e(/*! import() | detail-detail-module */ "detail-detail-module").then(__webpack_require__.bind(null, /*! ./detail/detail.module */ "lM0Z")).then(m => m.DetailPageModule)
    },
    {
        path: 'details',
        loadChildren: () => __webpack_require__.e(/*! import() | details-details-module */ "details-details-module").then(__webpack_require__.bind(null, /*! ./details/details.module */ "QR/W")).then(m => m.DetailsPageModule)
    },
    {
        path: 'item',
        loadChildren: () => __webpack_require__.e(/*! import() | item-item-module */ "item-item-module").then(__webpack_require__.bind(null, /*! ./item/item.module */ "bzNi")).then(m => m.ItemPageModule)
    },
    {
        path: 'chatbox',
        loadChildren: () => __webpack_require__.e(/*! import() | chatbox-chatbox-module */ "chatbox-chatbox-module").then(__webpack_require__.bind(null, /*! ./chatbox/chatbox.module */ "3nvi")).then(m => m.ChatboxPageModule)
    },
    {
        path: 'shophere',
        loadChildren: () => __webpack_require__.e(/*! import() | shophere-shophere-module */ "shophere-shophere-module").then(__webpack_require__.bind(null, /*! ./shophere/shophere.module */ "6YLs")).then(m => m.ShopherePageModule)
    },
    {
        path: 'careerview',
        loadChildren: () => __webpack_require__.e(/*! import() | careerview-careerview-module */ "careerview-careerview-module").then(__webpack_require__.bind(null, /*! ./careerview/careerview.module */ "neAm")).then(m => m.CareerviewPageModule)
    },
    {
        path: 'search-company-records',
        loadChildren: () => __webpack_require__.e(/*! import() | search-company-records-search-company-records-module */ "search-company-records-search-company-records-module").then(__webpack_require__.bind(null, /*! ./search-company-records/search-company-records.module */ "P4RQ")).then(m => m.SearchCompanyRecordsPageModule)
    },
    {
        path: 'career',
        loadChildren: () => __webpack_require__.e(/*! import() | career-career-module */ "career-career-module").then(__webpack_require__.bind(null, /*! ./career/career.module */ "PgHP")).then(m => m.CareerPageModule)
    },
    {
        path: 'resume',
        loadChildren: () => __webpack_require__.e(/*! import() | resume-resume-module */ "resume-resume-module").then(__webpack_require__.bind(null, /*! ./resume/resume.module */ "i98n")).then(m => m.ResumePageModule)
    },
    {
        path: 'record',
        loadChildren: () => __webpack_require__.e(/*! import() | record-record-module */ "record-record-module").then(__webpack_require__.bind(null, /*! ./record/record.module */ "faDB")).then(m => m.RecordPageModule)
    },
    {
        path: 'records',
        loadChildren: () => __webpack_require__.e(/*! import() | records-records-module */ "records-records-module").then(__webpack_require__.bind(null, /*! ./records/records.module */ "1V/X")).then(m => m.RecordsPageModule)
    },
    {
        path: 'company-chats',
        loadChildren: () => __webpack_require__.e(/*! import() | company-chats-company-chats-module */ "company-chats-company-chats-module").then(__webpack_require__.bind(null, /*! ./company-chats/company-chats.module */ "VNIC")).then(m => m.CompanyChatsPageModule)
    },
    {
        path: 'interview',
        loadChildren: () => __webpack_require__.e(/*! import() | interview-interview-module */ "interview-interview-module").then(__webpack_require__.bind(null, /*! ./interview/interview.module */ "nOkm")).then(m => m.InterviewPageModule)
    },
    {
        path: 'partner',
        loadChildren: () => __webpack_require__.e(/*! import() | partner-partner-module */ "partner-partner-module").then(__webpack_require__.bind(null, /*! ./partner/partner.module */ "Bms8")).then(m => m.PartnerPageModule)
    },
    {
        path: 'employee-view',
        loadChildren: () => __webpack_require__.e(/*! import() | employee-view-employee-view-module */ "employee-view-employee-view-module").then(__webpack_require__.bind(null, /*! ./employee-view/employee-view.module */ "rSqm")).then(m => m.EmployeeViewPageModule)
    },
    {
        path: 'add-resume',
        loadChildren: () => __webpack_require__.e(/*! import() | add-resume-add-resume-module */ "add-resume-add-resume-module").then(__webpack_require__.bind(null, /*! ./add-resume/add-resume.module */ "i4yQ")).then(m => m.AddResumePageModule)
    },
    {
        path: 'employee-group',
        loadChildren: () => __webpack_require__.e(/*! import() | employee-group-employee-group-module */ "employee-group-employee-group-module").then(__webpack_require__.bind(null, /*! ./employee-group/employee-group.module */ "L28L")).then(m => m.EmployeeGroupPageModule)
    },
    {
        path: 'wallet',
        loadChildren: () => __webpack_require__.e(/*! import() | wallet-wallet-module */ "wallet-wallet-module").then(__webpack_require__.bind(null, /*! ./wallet/wallet.module */ "43Fg")).then(m => m.WalletPageModule)
    },
    {
        path: 'add-value',
        loadChildren: () => __webpack_require__.e(/*! import() | add-value-add-value-module */ "add-value-add-value-module").then(__webpack_require__.bind(null, /*! ./add-value/add-value.module */ "4mOd")).then(m => m.AddValuePageModule)
    },
    {
        path: 'pay-bills',
        loadChildren: () => __webpack_require__.e(/*! import() | pay-bills-pay-bills-module */ "pay-bills-pay-bills-module").then(__webpack_require__.bind(null, /*! ./pay-bills/pay-bills.module */ "X9m8")).then(m => m.PayBillsPageModule)
    },
    {
        path: 'value-history',
        loadChildren: () => __webpack_require__.e(/*! import() | value-history-value-history-module */ "value-history-value-history-module").then(__webpack_require__.bind(null, /*! ./value-history/value-history.module */ "Aiyc")).then(m => m.ValueHistoryPageModule)
    },
    {
        path: 'referral-points',
        loadChildren: () => __webpack_require__.e(/*! import() | referral-points-referral-points-module */ "referral-points-referral-points-module").then(__webpack_require__.bind(null, /*! ./referral-points/referral-points.module */ "BH1I")).then(m => m.ReferralPointsPageModule)
    },
    {
        path: 'mobile-recharge',
        loadChildren: () => __webpack_require__.e(/*! import() | mobile-recharge-mobile-recharge-module */ "mobile-recharge-mobile-recharge-module").then(__webpack_require__.bind(null, /*! ./mobile-recharge/mobile-recharge.module */ "zdTX")).then(m => m.MobileRechargePageModule)
    },
    {
        path: 'current-plan',
        loadChildren: () => __webpack_require__.e(/*! import() | current-plan-current-plan-module */ "current-plan-current-plan-module").then(__webpack_require__.bind(null, /*! ./current-plan/current-plan.module */ "3vHc")).then(m => m.CurrentPlanPageModule)
    },
    {
        path: 'plan-details',
        loadChildren: () => __webpack_require__.e(/*! import() | plan-details-plan-details-module */ "plan-details-plan-details-module").then(__webpack_require__.bind(null, /*! ./plan-details/plan-details.module */ "WGdp")).then(m => m.PlanDetailsPageModule)
    },
    {
        path: 'history',
        loadChildren: () => __webpack_require__.e(/*! import() | history-history-module */ "history-history-module").then(__webpack_require__.bind(null, /*! ./history/history.module */ "9u+z")).then(m => m.HistoryPageModule)
    },
    {
        path: 'person-connect',
        loadChildren: () => __webpack_require__.e(/*! import() | person-connect-person-connect-module */ "person-connect-person-connect-module").then(__webpack_require__.bind(null, /*! ./person-connect/person-connect.module */ "nPop")).then(m => m.PersonConnectPageModule)
    },
    {
        path: 'calling',
        loadChildren: () => __webpack_require__.e(/*! import() | calling-calling-module */ "calling-calling-module").then(__webpack_require__.bind(null, /*! ./calling/calling.module */ "WliF")).then(m => m.CallingPageModule)
    },
    {
        path: 'calls-contact',
        loadChildren: () => Promise.all(/*! import() | calls-contact-calls-contact-module */[__webpack_require__.e("default~calls-calls-module~calls-contact-calls-contact-module~connect-connect-module~videocall-video~23fb032a"), __webpack_require__.e("common"), __webpack_require__.e("calls-contact-calls-contact-module")]).then(__webpack_require__.bind(null, /*! ./calls-contact/calls-contact.module */ "Aw3t")).then(m => m.CallsContactPageModule)
    },
    {
        path: 'chats-contact',
        loadChildren: () => __webpack_require__.e(/*! import() | chats-contact-chats-contact-module */ "chats-contact-chats-contact-module").then(__webpack_require__.bind(null, /*! ./chats-contact/chats-contact.module */ "OhGK")).then(m => m.ChatsContactPageModule)
    },
    {
        path: 'top-up',
        loadChildren: () => __webpack_require__.e(/*! import() | top-up-top-up-module */ "top-up-top-up-module").then(__webpack_require__.bind(null, /*! ./top-up/top-up.module */ "1oys")).then(m => m.TopUpPageModule)
    },
    {
        path: 'my-qr-reach',
        loadChildren: () => __webpack_require__.e(/*! import() | my-qr-reach-my-qr-reach-module */ "my-qr-reach-my-qr-reach-module").then(__webpack_require__.bind(null, /*! ./my-qr-reach/my-qr-reach.module */ "erSw")).then(m => m.MyQrReachPageModule)
    },
    {
        path: 'choose',
        loadChildren: () => __webpack_require__.e(/*! import() | choose-choose-module */ "choose-choose-module").then(__webpack_require__.bind(null, /*! ./choose/choose.module */ "s206")).then(m => m.ChoosePageModule)
    },
    {
        path: 'company-qrpayment',
        loadChildren: () => __webpack_require__.e(/*! import() | company-qrpayment-company-qrpayment-module */ "company-qrpayment-company-qrpayment-module").then(__webpack_require__.bind(null, /*! ./company-qrpayment/company-qrpayment.module */ "YDmR")).then(m => m.CompanyQrpaymentPageModule)
    },
    {
        path: 'relogin',
        loadChildren: () => __webpack_require__.e(/*! import() | relogin-relogin-module */ "relogin-relogin-module").then(__webpack_require__.bind(null, /*! ./relogin/relogin.module */ "k8cx")).then(m => m.ReloginPageModule)
    },
    {
        path: 'videocall',
        loadChildren: () => Promise.all(/*! import() | videocall-videocall-module */[__webpack_require__.e("default~calls-calls-module~calls-contact-calls-contact-module~connect-connect-module~videocall-video~23fb032a"), __webpack_require__.e("videocall-videocall-module")]).then(__webpack_require__.bind(null, /*! ./videocall/videocall.module */ "6Ylz")).then(m => m.VideocallPageModule)
    },
    {
        path: 'businesses',
        loadChildren: () => __webpack_require__.e(/*! import() | businesses-businesses-module */ "businesses-businesses-module").then(__webpack_require__.bind(null, /*! ./businesses/businesses.module */ "+VWH")).then(m => m.BusinessesPageModule)
    },
    {
        path: 'businesses-service',
        loadChildren: () => __webpack_require__.e(/*! import() | businesses-service-businesses-service-module */ "businesses-service-businesses-service-module").then(__webpack_require__.bind(null, /*! ./businesses-service/businesses-service.module */ "qZOI")).then(m => m.BusinessesServicePageModule)
    },
    {
        path: 'gdetails',
        loadChildren: () => __webpack_require__.e(/*! import() | gdetails-gdetails-module */ "gdetails-gdetails-module").then(__webpack_require__.bind(null, /*! ./gdetails/gdetails.module */ "47e1")).then(m => m.GdetailsPageModule)
    },
    {
        path: 'gcategory',
        loadChildren: () => __webpack_require__.e(/*! import() | gcategory-gcategory-module */ "gcategory-gcategory-module").then(__webpack_require__.bind(null, /*! ./gcategory/gcategory.module */ "cWrZ")).then(m => m.GcategoryPageModule)
    },
    {
        path: 'contact',
        loadChildren: () => __webpack_require__.e(/*! import() | contact-contact-module */ "contact-contact-module").then(__webpack_require__.bind(null, /*! ./contact/contact.module */ "BjQp")).then(m => m.ContactPageModule)
    },
    {
        path: 'shop-here',
        loadChildren: () => __webpack_require__.e(/*! import() | shop-here-shop-here-module */ "shop-here-shop-here-module").then(__webpack_require__.bind(null, /*! ./shop-here/shop-here.module */ "tQiC")).then(m => m.ShopHerePageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "7wo0")).then(m => m.SettingsPageModule)
    },
    {
        path: 'edit-profile',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-profile-edit-profile-module */ "edit-profile-edit-profile-module").then(__webpack_require__.bind(null, /*! ./edit-profile/edit-profile.module */ "Wvzw")).then(m => m.EditProfilePageModule)
    },
    {
        path: 'edit-branch',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-branch-edit-branch-module */ "edit-branch-edit-branch-module").then(__webpack_require__.bind(null, /*! ./edit-branch/edit-branch.module */ "NnWJ")).then(m => m.EditBranchPageModule)
    },
    {
        path: 'edit-business',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-business-edit-business-module */ "edit-business-edit-business-module").then(__webpack_require__.bind(null, /*! ./edit-business/edit-business.module */ "Qf6s")).then(m => m.EditBusinessPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n  padding-top: 0px;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 0 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n  font-size: 1em;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: #871178;\n  font-size: 24px;\n}\n\n.item.sc-ion-label-ios-h {\n  color: #871178;\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.side-head {\n  background: linear-gradient(#871178, #3d1378) !important;\n  color: #fff;\n  font-size: 12px;\n}\n\n.side-head img {\n  margin: 0 auto;\n  text-align: center;\n}\n\n.side-head ion-icon {\n  font-size: 24px;\n  padding: 5px;\n}\n\n.side-head h2,\np {\n  text-align: center;\n  color: #fff;\n  line-height: 1;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDJEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLHNEQUFBO0FBSEY7O0FBTUE7RUFDRSwrQkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUVFLGNBQUE7QUFKRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7QUFKRjs7QUFPQTtFQUNFLHdEQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFKRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUhGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFGRjs7QUFJQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwIDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjojODcxMTc4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5pdGVtLnNjLWlvbi1sYWJlbC1pb3MtaFxue1xuICBjb2xvcjojODcxMTc4O1xufVxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5zaWRlLWhlYWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNkMTM3OCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zaWRlLWhlYWQgaW1nIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaWRlLWhlYWQgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5zaWRlLWhlYWQgaDIsXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map