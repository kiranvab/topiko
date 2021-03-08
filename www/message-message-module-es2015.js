(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["message-message-module"],{

/***/ "3tpA":
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/*! exports provided: MessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.page */ "46tz");







const routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]
    }
];
let MessagePageModule = class MessagePageModule {
};
MessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]]
    })
], MessagePageModule);



/***/ }),

/***/ "46tz":
/*!*****************************************!*\
  !*** ./src/app/message/message.page.ts ***!
  \*****************************************/
/*! exports provided: MessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_message_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./message.page.html */ "Fyet");
/* harmony import */ var _message_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.page.scss */ "zaat");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let MessagePage = class MessagePage {
    constructor(route) {
        this.route = route;
        this.chatData = [{
                "name": 'Jovenica Alba',
                "image": '../../assets/chat/chat1.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "count": '2',
                "time": '12:17',
                "status": "ofline"
            }, {
                "name": 'Oliver',
                "image": ' ../../assets/chat/chat2.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "time": '12:17',
                "status": "online"
            }, {
                "name": 'George',
                "image": ' ../../assets/chat/chat3.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "count": '2',
                "time": 'Yesterday',
                "status": "online"
            }, {
                "name": 'Harry',
                "image": ' ../../assets/chat/chat4.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "time": 'Sunday',
                "status": "ofline"
            }, {
                "name": 'Jack',
                "image": ' ../../assets/chat/chat5.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "status": "online",
                "time": '11:15'
            }, {
                "name": 'Jacob',
                "image": ' ../../assets/chat/chat6.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "count": '1',
                "status": "online",
                "time": 'Yesterday'
            }, {
                "name": 'Noah',
                "image": ' ../../assets/chat/chat7.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "time": 'Monday',
                "status": "ofline",
            }, {
                "name": 'Charlie',
                "image": ' ../../assets/chat/chat8.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "count": '6',
                "status": "ofline",
                "time": '07:00'
            }, {
                "name": 'Logan',
                "image": ' ../../assets/chat/chat1.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "time": 'Yesterday',
                "status": "online"
            }, {
                "name": 'Harrison',
                "image": ' ../../assets/chat/chat2.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "status": "online",
                "time": 'Yesterday'
            }, {
                "name": 'Sebastian',
                "image": ' ../../assets/chat/chat3.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "status": "ofline",
                "time": 'Yesterday'
            }, {
                "name": 'Zachary',
                "image": ' ../../assets/chat/chat4.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "time": 'Today',
                "status": "ofline"
            }, {
                "name": 'Elijah',
                "image": ' ../../assets/chat/chat5.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "time": '18:25',
                "status": "ofline"
            }
        ];
    }
    ngOnInit() {
    }
    segmentChanged(event) {
        this.segmentTab = event.detail.value;
        console.log(this.segmentTab);
    }
    goforChat(chat) {
        this.route.navigate(['chat', chat]);
    }
};
MessagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-message',
        template: _raw_loader_message_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_message_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MessagePage);



/***/ }),

/***/ "Fyet":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Message</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"ion-no-padding\">\r\n\r\n    <ion-item *ngFor=\"let chat of chatData\" (click)=\"goforChat(chat)\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-img class=\"user-img\" [src]=\"chat.image\"></ion-img>\r\n        <div class=\"online\" *ngIf=\"chat.status == 'online'\">\r\n        </div>\r\n        <div class=\"ofline\" *ngIf=\"chat.status == 'ofline'\">\r\n        </div>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <div class=\"withcount\">\r\n          <div class=\"nameAvatar\">\r\n            <h2>{{chat.name}}\r\n            </h2>\r\n            <ion-avatar class=\"chatCount\" *ngIf=\"chat.count\">{{chat.count}}</ion-avatar>\r\n          </div>\r\n\r\n          <div class=\"timeEnd\">\r\n            <ion-text slot=\"end\">{{chat.time}}</ion-text>\r\n          </div>\r\n        </div>\r\n        <p class=\"widthHalf\">{{chat.description}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-row>\r\n    <ion-col routerLink=\"/calllist\">\r\n      <ion-icon name=\"call-outline\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col routerLink=\"/message\">\r\n      <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col routerLink=\"/home\">\r\n      <ion-icon name=\"home-outline\" class=\"home-icon\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col routerLink=\"/favourite\">\r\n      <ion-icon name=\"heart-outline\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col routerLink=\"/profile\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>");

/***/ }),

/***/ "zaat":
/*!*******************************************!*\
  !*** ./src/app/message/message.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".plusClass {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 25px;\n  background: white;\n  border-radius: 50%;\n  right: 15px;\n  position: relative;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\nion-header:after {\n  background-image: none;\n  left: 0;\n  bottom: -8px;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 8px;\n  content: \"\";\n}\n\n.contentCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.padding_right {\n  padding-right: 8px;\n}\n\n.tab-icon {\n  font-size: 20px;\n}\n\n.withcount {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.chatCount {\n  width: 17px !important;\n  height: 17px !important;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  color: var(--background);\n  margin-left: 8px;\n}\n\n.timeEnd {\n  display: flex;\n  justify-content: flex-end;\n  width: 50%;\n}\n\n.widthHalf {\n  width: 70%;\n  font-size: 12px;\n}\n\n.nameAvatar {\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n  width: 50%;\n}\n\n.nameAvatar h2 {\n  font-size: 0.94em;\n  font-weight: bold;\n}\n\nion-text {\n  font-size: 10px;\n}\n\n.sc-ion-label-ios-h {\n  height: 44px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.online {\n  position: absolute;\n  left: 48px;\n  top: 58%;\n  width: 10px;\n  background: #92ff92;\n  height: 10px;\n  border-radius: 50%;\n}\n\n.ofline {\n  position: absolute;\n  left: 48px;\n  top: 58%;\n  width: 10px;\n  background: #c1c3c1;\n  height: 10px;\n  border-radius: 50%;\n}\n\n.user-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 45px;\n  border: 2px solid #fff;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5REFBQTtBQUNGOztBQUVFO0VBRUUsc0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUVFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFHRjs7QUFGRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFEQTtFQUNFLGVBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUtGOztBQUZBO0VBQ0Usa0JBQUE7RUFFQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUlGOztBQURBO0VBQ0Usa0JBQUE7RUFFQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUdGOztBQUFBO0VBRUUsb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1Q0FBQTtBQUVGIiwiZmlsZSI6Im1lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsdXNDbGFzcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxufVxyXG5pb24taGVhZGVyIHtcclxuICAmOmFmdGVyIHtcclxuICAgIC8vYm94LXNoYWRvdzogMCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogLThweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnRDZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZGRpbmdfcmlnaHQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG4udGFiLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ud2l0aGNvdW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jaGF0Q291bnQge1xyXG4gIC8vIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHdpZHRoOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLnRpbWVFbmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi53aWR0aEhhbGYge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5uYW1lQXZhdGFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDAuOTRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5pb24tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5zYy1pb24tbGFiZWwtaW9zLWgge1xyXG4gIGhlaWdodDogNDRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vbmxpbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyByaWdodDogNnB4O1xyXG4gIGxlZnQ6IDQ4cHg7XHJcbiAgdG9wOiA1OCU7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogIzkyZmY5MjtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ub2ZsaW5lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gcmlnaHQ6IDZweDtcclxuICBsZWZ0OiA0OHB4O1xyXG4gIHRvcDogNTglO1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNjMWMzYzE7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnVzZXItaW1nIHtcclxuICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xyXG59XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=message-message-module-es2015.js.map