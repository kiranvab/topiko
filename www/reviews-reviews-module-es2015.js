(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reviews-reviews-module"],{

/***/ "5zgK":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reviews/reviews.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Customer Reviews</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment \n  value=\"all\" \n  color=\"tertiary\" \n  scrollable=\"true\"\n  mode=\"ios\"\n  [(ngModel)]=\"segmentModel\" >\n\n    <ion-segment-button value=\"all\">\n      <ion-label>Latest</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"approved\">\n      <ion-label>Approved</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"rejected\">\n      <ion-label>Rejected</ion-label>\n    </ion-segment-button>\n \n  </ion-segment>\n\n  <div  *ngIf=\"segmentModel === 'all'\">\n    <ion-card>\n      <ion-card-header>\n        <ion-row>\n          <ion-col size=\"2\">\n        <ion-avatar>\n          <img src=\"assets/user4.jpeg\">\n        </ion-avatar>\n        </ion-col>\n        <ion-col size=\"10\" style=\"padding:0px;\">\n          <h6>Kalyan Yadav .D</h6>\n          20-12-2020 09:35 PM\n        </ion-col>\n        </ion-row>\n      </ion-card-header>\n      \n      <ion-card-content>\n      <div class=\"review-div\">\n        <div>\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-icon name=\"star-half-outline\"></ion-icon>\n        <ion-icon name=\"star-outline\"></ion-icon>\n      </div>\n      <p>\n        \"Author John David Anderson offers words of comfort and hope in his insightful portrayal of middle school pressures -- to be liked yet to be yourself, while weighing the risk in every interaction.\"\"\n      </p>\n      </div> \n      <div class=\"review-text\">\n        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n      </div> \n      <ion-row>\n        <ion-col><ion-button size=\"block\" color=\"success\">Reject</ion-button></ion-col>\n        <ion-col><ion-button  size=\"block\" color=\"danger\">Approve</ion-button></ion-col>\n      </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-row>\n          <ion-col size=\"2\">\n        <ion-avatar>\n          <img src=\"assets/user4.jpeg\">\n        </ion-avatar>\n        </ion-col>\n        <ion-col size=\"10\" style=\"padding:0px;\">\n          <h6>Kalyan Yadav .D</h6>\n          20-12-2020 09:35 PM\n        </ion-col>\n        </ion-row>\n      </ion-card-header>\n      \n      <ion-card-content>\n      <div class=\"review-div\">\n        <div>\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-icon name=\"star-half-outline\"></ion-icon>\n        <ion-icon name=\"star-outline\"></ion-icon>\n      </div>\n      <p>\n        \"Author John David Anderson offers words of comfort and hope in his insightful portrayal of middle school pressures -- to be liked yet to be yourself, while weighing the risk in every interaction.\"\"\n      </p>\n      </div> \n      <div class=\"review-text\">\n        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n      </div> \n      <ion-row>\n        <ion-col><ion-button size=\"block\" color=\"success\">Reject</ion-button></ion-col>\n        <ion-col><ion-button  size=\"block\" color=\"danger\">Approve</ion-button></ion-col>\n      </ion-row>\n      </ion-card-content>\n      \n    </ion-card>\n  </div>\n\n  <div  *ngIf=\"segmentModel === 'approved'\">\n    <ion-card>\n      <ion-card-header>\n        <ion-row>\n          <ion-col size=\"2\">\n        <ion-avatar>\n          <img src=\"assets/user4.jpeg\">\n        </ion-avatar>\n        </ion-col>\n        <ion-col size=\"10\" style=\"padding:0px;\">\n          <h6>Kalyan Yadav .D</h6>\n          20-12-2020 09:35 PM\n        </ion-col>\n        </ion-row>\n      </ion-card-header>\n      \n      <ion-card-content>\n      <div class=\"review-div\">\n        <div>\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-icon name=\"star-half-outline\"></ion-icon>\n        <ion-icon name=\"star-outline\"></ion-icon>\n      </div>\n      <p>\n        \"Author John David Anderson offers words of comfort and hope in his insightful portrayal of middle school pressures -- to be liked yet to be yourself, while weighing the risk in every interaction.\"\"\n      </p>\n      </div> \n      <div class=\"review-text\">\n        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n      </div> \n      </ion-card-content>\n      \n    </ion-card>\n  </div>\n\n  <div  *ngIf=\"segmentModel === 'rejected'\">\n\n    <ion-card>\n      <ion-card-header>\n        <ion-row>\n          <ion-col size=\"2\">\n        <ion-avatar>\n          <img src=\"assets/user4.jpeg\">\n        </ion-avatar>\n        </ion-col>\n        <ion-col size=\"10\" style=\"padding:0px;\">\n          <h6>Kalyan Yadav .D</h6>\n          20-12-2020 09:35 PM\n        </ion-col>\n        </ion-row>\n      </ion-card-header>\n      \n      <ion-card-content>\n      <div class=\"review-div\">\n        <div>\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-icon name=\"star-half-outline\"></ion-icon>\n        <ion-icon name=\"star-outline\"></ion-icon>\n      </div>\n      <p>\n        \"Author John David Anderson offers words of comfort and hope in his insightful portrayal of middle school pressures -- to be liked yet to be yourself, while weighing the risk in every interaction.\"\"\n      </p>\n      </div> \n      <div class=\"review-text\">\n        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n      </div> \n     </ion-card-content>\n     </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "8Z6u":
/*!*******************************************!*\
  !*** ./src/app/reviews/reviews.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".review-div {\n  background-image: linear-gradient(#673ab7, #3f51b5);\n}\n\n.review-div ion-icon {\n  padding: 10px 0 10px 10px;\n  color: #ffc107;\n  font-size: 24px;\n}\n\n.review-div p {\n  color: #fff;\n  padding: 0 10% 15px 10%;\n  font-size: 12px;\n}\n\n.review-text {\n  font-size: 12px;\n  padding: 14px;\n  color: #122959;\n}\n\nion-card-header {\n  padding: 0;\n  font-size: 12px;\n  text-align: left;\n}\n\nion-card-content {\n  padding: 0;\n}\n\nh6 {\n  font-size: 16px;\n  color: #122959;\n  font-weight: bold;\n  line-height: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJldmlld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbURBQUE7QUFBSjs7QUFFQTtFQUVJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUVJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUVBO0VBRUksVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBRUksVUFBQTtBQURKOztBQUlBO0VBRUksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRkoiLCJmaWxlIjoicmV2aWV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV2aWV3LWRpdlxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzY3M2FiNywgIzNmNTFiNSk7XHJcbn1cclxuLnJldmlldy1kaXYgaW9uLWljb24gXHJcbntcclxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmYzEwNztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4ucmV2aWV3LWRpdiBwIFxyXG57XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAgMTAlIDE1cHggMTAlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5yZXZpZXctdGV4dCBcclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIGNvbG9yOiAjMTIyOTU5O1xyXG59XHJcbmlvbi1jYXJkLWhlYWRlciBcclxue1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQgXHJcbntcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmg2IFxyXG57XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzEyMjk1OTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "F9rr":
/*!***************************************************!*\
  !*** ./src/app/reviews/reviews-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ReviewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPageRoutingModule", function() { return ReviewsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reviews_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviews.page */ "Ufpf");




const routes = [
    {
        path: '',
        component: _reviews_page__WEBPACK_IMPORTED_MODULE_3__["ReviewsPage"]
    }
];
let ReviewsPageRoutingModule = class ReviewsPageRoutingModule {
};
ReviewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReviewsPageRoutingModule);



/***/ }),

/***/ "RMLy":
/*!*******************************************!*\
  !*** ./src/app/reviews/reviews.module.ts ***!
  \*******************************************/
/*! exports provided: ReviewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPageModule", function() { return ReviewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reviews_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reviews-routing.module */ "F9rr");
/* harmony import */ var _reviews_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviews.page */ "Ufpf");







let ReviewsPageModule = class ReviewsPageModule {
};
ReviewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reviews_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewsPageRoutingModule"]
        ],
        declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsPage"]]
    })
], ReviewsPageModule);



/***/ }),

/***/ "Ufpf":
/*!*****************************************!*\
  !*** ./src/app/reviews/reviews.page.ts ***!
  \*****************************************/
/*! exports provided: ReviewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPage", function() { return ReviewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reviews_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reviews.page.html */ "5zgK");
/* harmony import */ var _reviews_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews.page.scss */ "8Z6u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ReviewsPage = class ReviewsPage {
    constructor() {
        this.segmentModel = "all";
    }
    ngOnInit() {
    }
};
ReviewsPage.ctorParameters = () => [];
ReviewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reviews',
        template: _raw_loader_reviews_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reviews_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReviewsPage);



/***/ })

}]);
//# sourceMappingURL=reviews-reviews-module-es2015.js.map