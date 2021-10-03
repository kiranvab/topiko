(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"],{

/***/ "FJ2Q":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: #fff;\n}\n\nion-content {\n  --background: linear-gradient(#871178, #44093c) !important;\n  color: #fff;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n  color: #fff;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\ndiv {\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\ndiv:first-of-type {\n  /* For increasing performance \n  ID/Class should've been used. \n  For a small demo \n  it's okaish for now */\n  -webkit-animation: showup 7s infinite;\n          animation: showup 7s infinite;\n}\n\ndiv:last-of-type {\n  width: 0px;\n  -webkit-animation: reveal 7s infinite;\n          animation: reveal 7s infinite;\n}\n\ndiv:last-of-type span {\n  margin-left: -355px;\n  -webkit-animation: slidein 7s infinite;\n          animation: slidein 7s infinite;\n}\n\n@-webkit-keyframes showup {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes showup {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes slidein {\n  0% {\n    margin-left: -800px;\n  }\n  20% {\n    margin-left: -800px;\n  }\n  35% {\n    margin-left: 0px;\n  }\n  100% {\n    margin-left: 0px;\n  }\n}\n\n@keyframes slidein {\n  0% {\n    margin-left: -800px;\n  }\n  20% {\n    margin-left: -800px;\n  }\n  35% {\n    margin-left: 0px;\n  }\n  100% {\n    margin-left: 0px;\n  }\n}\n\n@-webkit-keyframes reveal {\n  0% {\n    opacity: 0;\n    width: 0px;\n  }\n  20% {\n    opacity: 1;\n    width: 0px;\n  }\n  30% {\n    width: 355px;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    width: 355px;\n  }\n}\n\n@keyframes reveal {\n  0% {\n    opacity: 0;\n    width: 0px;\n  }\n  20% {\n    opacity: 1;\n    width: 0px;\n  }\n  30% {\n    width: 355px;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    width: 355px;\n  }\n}\n\np {\n  font-size: 12px;\n  color: #999;\n  margin-top: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFFRSwwREFBQTtFQUNBLFdBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUF1Qjs7O3VCQUFBO0VBSXJCLHFDQUFBO1VBQUEsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUFDRjs7QUFFQTtFQUNJO0lBQUksVUFBQTtFQUVOO0VBREU7SUFBSyxVQUFBO0VBSVA7RUFIRTtJQUFLLFVBQUE7RUFNUDtFQUxFO0lBQU0sVUFBQTtFQVFSO0FBQ0Y7O0FBYkE7RUFDSTtJQUFJLFVBQUE7RUFFTjtFQURFO0lBQUssVUFBQTtFQUlQO0VBSEU7SUFBSyxVQUFBO0VBTVA7RUFMRTtJQUFNLFVBQUE7RUFRUjtBQUNGOztBQU5BO0VBQ0k7SUFBSyxtQkFBQTtFQVNQO0VBUkU7SUFBTSxtQkFBQTtFQVdSO0VBVkU7SUFBTSxnQkFBQTtFQWFSO0VBWkU7SUFBTyxnQkFBQTtFQWVUO0FBQ0Y7O0FBcEJBO0VBQ0k7SUFBSyxtQkFBQTtFQVNQO0VBUkU7SUFBTSxtQkFBQTtFQVdSO0VBVkU7SUFBTSxnQkFBQTtFQWFSO0VBWkU7SUFBTyxnQkFBQTtFQWVUO0FBQ0Y7O0FBYkE7RUFDSTtJQUFJLFVBQUE7SUFBVSxVQUFBO0VBaUJoQjtFQWhCRTtJQUFLLFVBQUE7SUFBVSxVQUFBO0VBb0JqQjtFQW5CRTtJQUFLLFlBQUE7RUFzQlA7RUFyQkU7SUFBSyxVQUFBO0VBd0JQO0VBdkJFO0lBQU0sVUFBQTtJQUFVLFlBQUE7RUEyQmxCO0FBQ0Y7O0FBakNBO0VBQ0k7SUFBSSxVQUFBO0lBQVUsVUFBQTtFQWlCaEI7RUFoQkU7SUFBSyxVQUFBO0lBQVUsVUFBQTtFQW9CakI7RUFuQkU7SUFBSyxZQUFBO0VBc0JQO0VBckJFO0lBQUssVUFBQTtFQXdCUDtFQXZCRTtJQUFNLFVBQUE7SUFBVSxZQUFBO0VBMkJsQjtBQUNGOztBQXhCQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUEwQkYiLCJmaWxlIjoiZm9sZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiNmZmZcbn1cblxuaW9uLWNvbnRlbnRcbntcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzQ0MDkzYykgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuZGl2IHtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6bm93cmFwO1xufVxuXG5kaXY6Zmlyc3Qtb2YtdHlwZSB7ICAgIC8qIEZvciBpbmNyZWFzaW5nIHBlcmZvcm1hbmNlIFxuICAgICAgICAgICAgICAgICAgICAgICBJRC9DbGFzcyBzaG91bGQndmUgYmVlbiB1c2VkLiBcbiAgICAgICAgICAgICAgICAgICAgICAgRm9yIGEgc21hbGwgZGVtbyBcbiAgICAgICAgICAgICAgICAgICAgICAgaXQncyBva2Fpc2ggZm9yIG5vdyAqL1xuICBhbmltYXRpb246IHNob3d1cCA3cyBpbmZpbml0ZTtcbn1cblxuZGl2Omxhc3Qtb2YtdHlwZSB7XG4gIHdpZHRoOjBweDtcbiAgYW5pbWF0aW9uOiByZXZlYWwgN3MgaW5maW5pdGU7XG59XG5cbmRpdjpsYXN0LW9mLXR5cGUgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0Oi0zNTVweDtcbiAgYW5pbWF0aW9uOiBzbGlkZWluIDdzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNob3d1cCB7XG4gICAgMCUge29wYWNpdHk6MDt9XG4gICAgMjAlIHtvcGFjaXR5OjE7fVxuICAgIDgwJSB7b3BhY2l0eToxO31cbiAgICAxMDAlIHtvcGFjaXR5OjA7fVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlaW4ge1xuICAgIDAlIHsgbWFyZ2luLWxlZnQ6LTgwMHB4OyB9XG4gICAgMjAlIHsgbWFyZ2luLWxlZnQ6LTgwMHB4OyB9XG4gICAgMzUlIHsgbWFyZ2luLWxlZnQ6MHB4OyB9XG4gICAgMTAwJSB7IG1hcmdpbi1sZWZ0OjBweDsgfVxufVxuXG5Aa2V5ZnJhbWVzIHJldmVhbCB7XG4gICAgMCUge29wYWNpdHk6MDt3aWR0aDowcHg7fVxuICAgIDIwJSB7b3BhY2l0eToxO3dpZHRoOjBweDt9XG4gICAgMzAlIHt3aWR0aDozNTVweDt9XG4gICAgODAlIHtvcGFjaXR5OjE7fVxuICAgIDEwMCUge29wYWNpdHk6MDt3aWR0aDozNTVweDt9XG59XG5cblxucCB7XG4gIGZvbnQtc2l6ZToxMnB4O1xuICBjb2xvcjojOTk5O1xuICBtYXJnaW4tdG9wOjIwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "QRE9":
/*!*************************************************!*\
  !*** ./src/app/folder/folder-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FolderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function() { return FolderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder.page */ "wlos");




const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FolderPageRoutingModule);



/***/ }),

/***/ "s9za":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color:#fff\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>TOPIKO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n \n\n  <div id=\"container\">\n    <strong class=\"capitalize\">TOPIKO <br/> Under Development....</strong>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "wlos":
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/*! exports provided: FolderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPage", function() { return FolderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_folder_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./folder.page.html */ "s9za");
/* harmony import */ var _folder_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folder.page.scss */ "FJ2Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let FolderPage = class FolderPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }
};
FolderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-folder',
        template: _raw_loader_folder_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_folder_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FolderPage);



/***/ }),

/***/ "yIOV":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.module.ts ***!
  \*****************************************/
/*! exports provided: FolderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageModule", function() { return FolderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folder-routing.module */ "QRE9");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folder.page */ "wlos");







let FolderPageModule = class FolderPageModule {
};
FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"]
        ],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]]
    })
], FolderPageModule);



/***/ })

}]);
//# sourceMappingURL=folder-folder-module-es2015.js.map