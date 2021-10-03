(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"],{

/***/ "AsKM":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offers/offers.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n      <ion-menu-button mode=\"ios\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Offers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-card *ngFor=\"let off of offers; let i = index;\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img class=\"product-img\" src=\"{{off.image}}\" >\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name pclass\">{{off.offer}}</p>\n        <p class=\"time pclass\">start : {{off.start}} End : {{off.end}}</p>\n        <p class=\"price-div pclass\">Price - <span class=\"price\">{{off.discount_price}}</span> <span class=\"ori_price\">{{off.actual_price}}</span> <span\n            class=\"discount\">{{off.discount / off.actual_price * 100 | number:'2.1-2'}}%off</span></p>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ellipsis\" (click)=\"openMenu(i)\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"chats scroll\">\n      <ion-col>\n        <p class=\"text\">Shares</p>\n        <p class=\"number\">0</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"text\">Likes</p>\n        <p class=\"number\">0</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"text\">Favourites</p>\n        <p class=\"number\">0</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col class=\"calls\">\n        <p class=\"text\">Comments</p>\n        <p class=\"number\">0</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button class=\"fab\" routerLink=\"/add-offer\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n\n\n\n\n\n<!-- \n  <ion-card>\n    <ion-row>\n      <ion-col size=\"2\">\n        <img class=\"product-img\" src=\"https://yt3.ggpht.com/ytc/AAUvwnjkwtc_wiNI_-_zREBD-KFLsBpjwQQghF_3jsUgtA=s900-c-k-c0x00ffffff-no-rj\">\n      </ion-col>\n      <ion-col>\n        <h5>50% Ticket Bonanza</h5>\n        <p class=\"date\">04/26/2021</p>\n        <p class=\"price-div\">price - <span class=\"price\">800</span> <span class=\"ori_price\">1000</span> <span class=\"discount\">20%off</span></p>\n      </ion-col>\n      <ion-col size=\"1\" (click)=\"openMenu()\">\n        <ion-icon class=\"btn\" name=\"ellipsis-vertical\" class=\"icons\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"chats\" routerLink=\"/offer-views\">\n      <ion-col size=\"2.5\">\n        <p class=\"text\">Share</p>\n        <p class=\"number\">0</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col size=\"2.5\">\n        <p class=\"text\">Like</p>\n        <p class=\"number\">0</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col size=\"2.6\">\n        <p class=\"text\">Favourites</p>\n        <p class=\"number\">0</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col size=\"2.5\">\n        <p class=\"text\">Comments</p>\n        <p class=\"number\">02</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  \n  <ion-card>\n    <ion-row>\n      <ion-col size=\"2\">\n        <img class=\"product-img\" src=\"https://yt3.ggpht.com/ytc/AAUvwnjkwtc_wiNI_-_zREBD-KFLsBpjwQQghF_3jsUgtA=s900-c-k-c0x00ffffff-no-rj\">\n      </ion-col>\n      <ion-col>\n        <h5>50% Ticket Bonanza</h5>\n        <p class=\"date\">04/26/2021</p>\n        <p class=\"price-div\">price - <span class=\"price\">800</span> <span class=\"ori_price\">1000</span> <span class=\"discount\">20%off</span></p>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon class=\"btn\" name=\"ellipsis-vertical\" class=\"icons\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"chats\">\n      <ion-col size=\"2.5\">\n        <p class=\"text\">Share</p>\n        <p class=\"number\">0</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col size=\"2.5\">\n        <p class=\"text\">Like</p>\n        <p class=\"number\">0</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col size=\"2.6\">\n        <p class=\"text\">Favourites</p>\n        <p class=\"number\">0</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col size=\"2.5\">\n        <p class=\"text\">Comments</p>\n        <p class=\"number\">02</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  \n  <ion-card>\n    <ion-row>\n      <ion-col size=\"2\">\n        <img class=\"product-img\" src=\"https://yt3.ggpht.com/ytc/AAUvwnjkwtc_wiNI_-_zREBD-KFLsBpjwQQghF_3jsUgtA=s900-c-k-c0x00ffffff-no-rj\">\n      </ion-col>\n      <ion-col>\n        <h5>50% Ticket Bonanza</h5>\n        <p class=\"date\">04/26/2021</p>\n        <p class=\"price-div\">price - <span class=\"price\">800</span> <span class=\"ori_price\">1000</span> <span class=\"discount\">20%off</span></p>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon class=\"btn\" name=\"ellipsis-vertical\" class=\"icons\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"chats\">\n      <ion-col size=\"2.5\">\n        <p class=\"text\">Share</p>\n        <p class=\"number\">0</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col size=\"2.5\">\n        <p class=\"text\">Like</p>\n        <p class=\"number\">0</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col size=\"2.6\">\n        <p class=\"text\">Favourites</p>\n        <p class=\"number\">0</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col size=\"2.5\">\n        <p class=\"text\">Comments</p>\n        <p class=\"number\">02</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  \n \n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/add-offer\">\n    <ion-fab-button>\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content> -->");

/***/ }),

/***/ "IPP+":
/*!*****************************************!*\
  !*** ./src/app/offers/offers.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --padding-top: 8px;\n  --padding-bottom: 80px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n}\n\n.title {\n  text-align: center;\n  font-size: 1em;\n  color: #871178;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n\nion-card {\n  margin: 0.75em 0px;\n  padding: 7px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.avatar ion-avatar {\n  width: 70px;\n  height: 70px;\n}\n\n.border {\n  border: 0.2px solid #707070;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 10px;\n  margin: 0px;\n}\n\n.pclass {\n  margin: 0%;\n  line-height: 20px;\n}\n\n.ellipsis ion-icon {\n  font-size: 18px;\n}\n\n.price-div {\n  color: #272722;\n  font-size: 14px;\n}\n\n.price {\n  color: #871178;\n  font-size: 14px;\n  padding: 0 5px;\n}\n\n.ori_price {\n  font-size: 14px;\n  padding: 0 5px;\n  color: #9f9f9f;\n  text-decoration: line-through;\n}\n\n.discount {\n  font-size: 14px;\n  color: #39ac00;\n  padding: 0 5px;\n}\n\n.chats .text {\n  color: #707070;\n  font-size: 1em;\n  text-align: center;\n  line-height: 0;\n}\n\n.chats .number {\n  color: #871178;\n  font-size: 1.25em;\n  text-align: center;\n  margin: 0%;\n  line-height: 1;\n  margin-bottom: 0px;\n  margin-top: 21px;\n}\n\n.sep {\n  margin: 12px 0px;\n  margin-top: 20px;\n  padding: 0%;\n  border-right: 1px solid #d5d5d5;\n}\n\n.scroll {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\nion-fab-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  height: 4.375em;\n  width: 4.375em;\n}\n\n.fab ion-icon {\n  color: #ffffff;\n  height: 45px;\n  width: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29mZmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUFHSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSwyQkFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFNSjs7QUFKQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVVKOztBQVJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUFXSjs7QUFUQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFhSjs7QUFYQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBY0o7O0FBWkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FBZUo7O0FBYkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFnQko7O0FBYkE7RUFDSSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFnQko7O0FBZEE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFpQkoiLCJmaWxlIjoib2ZmZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMThweDtcclxufVxyXG4udGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDAuNzVlbSAwcHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbn1cclxuXHJcbi5hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMC4ycHggc29saWQgIzcwNzA3MDtcclxufVxyXG4udXNlci1uYW1lIHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnRpbWUge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ucGNsYXNzIHtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG4uZWxsaXBzaXMgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5wcmljZS1kaXYge1xyXG4gICAgY29sb3I6ICMyNzI3MjI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnByaWNlIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuLm9yaV9wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuLmRpc2NvdW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMzlhYzAwO1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuLmNoYXRzIC50ZXh0IHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxufVxyXG4uY2hhdHMgLm51bWJlciB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjFweDtcclxufVxyXG4uc2VwIHtcclxuICAgIG1hcmdpbjogMTJweCAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDVkNWQ1O1xyXG59XHJcbi5zY3JvbGwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcbi8vIGZhYlxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDQuMzc1ZW07XHJcbiAgICB3aWR0aDogNC4zNzVlbTtcclxufVxyXG4uZmFiIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "c4yL":
/*!***************************************!*\
  !*** ./src/app/offers/offers.page.ts ***!
  \***************************************/
/*! exports provided: OffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPage", function() { return OffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_offers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./offers.page.html */ "AsKM");
/* harmony import */ var _offers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offers.page.scss */ "IPP+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "Sy1n");









let OffersPage = class OffersPage {
    constructor(actionsheetCtrl, route, storage, http, alertController) {
        this.actionsheetCtrl = actionsheetCtrl;
        this.route = route;
        this.storage = storage;
        this.http = http;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.storage.get("bid").then(val => {
            this.buid = val;
            console.log("BID", this.buid);
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getbusinessoffers.php?bid=" + this.buid).subscribe(data => {
                this.offers = data;
                console.log("Offers", this.offers);
            });
        });
    }
    openMenu(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionsheetCtrl.create({
                // header: 'Modify your album',  
                buttons: [
                    {
                        text: 'Edit',
                        handler: () => {
                            console.log('Destructive clicked');
                            this.storage.set("oid", this.offers[i].id);
                            this.route.navigate(['/edit-offer']);
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            console.log('Archive clicked');
                            this.presentAlertConfirm(i);
                            this.route.navigate(['/offers']);
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    presentAlertConfirm(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Message <strong>text</strong>!!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            console.log('Confirm Okay');
                            console.log(this.offers[i].id);
                            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "deleteoffer.php?oid=" + this.offers[i].id).subscribe(data => {
                                console.log("Response", data);
                                this.AlertDelete();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    AlertDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Deleted!',
                message: 'Offer has been deleted sucesfully.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
OffersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
OffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-offers',
        template: _raw_loader_offers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_offers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OffersPage);



/***/ }),

/***/ "t2/U":
/*!*************************************************!*\
  !*** ./src/app/offers/offers-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OffersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageRoutingModule", function() { return OffersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers.page */ "c4yL");




const routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_3__["OffersPage"]
    }
];
let OffersPageRoutingModule = class OffersPageRoutingModule {
};
OffersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OffersPageRoutingModule);



/***/ }),

/***/ "x4ys":
/*!*****************************************!*\
  !*** ./src/app/offers/offers.module.ts ***!
  \*****************************************/
/*! exports provided: OffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offers-routing.module */ "t2/U");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers.page */ "c4yL");







let OffersPageModule = class OffersPageModule {
};
OffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["OffersPageRoutingModule"]
        ],
        declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]]
    })
], OffersPageModule);



/***/ })

}]);
//# sourceMappingURL=offers-offers-module-es2015.js.map