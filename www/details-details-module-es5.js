(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"], {
    /***/
    "A03k":
    /*!***************************************************!*\
      !*** ./src/app/details/details-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: DetailsPageRoutingModule */

    /***/
    function A03k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function () {
        return DetailsPageRoutingModule;
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


      var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./details.page */
      "vgIa");

      var routes = [{
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
      }];

      var DetailsPageRoutingModule = function DetailsPageRoutingModule() {
        _classCallCheck(this, DetailsPageRoutingModule);
      };

      DetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailsPageRoutingModule);
      /***/
    },

    /***/
    "QR/W":
    /*!*******************************************!*\
      !*** ./src/app/details/details.module.ts ***!
      \*******************************************/

    /*! exports provided: DetailsPageModule */

    /***/
    function QRW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function () {
        return DetailsPageModule;
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


      var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./details-routing.module */
      "A03k");
      /* harmony import */


      var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./details.page */
      "vgIa");

      var DetailsPageModule = function DetailsPageModule() {
        _classCallCheck(this, DetailsPageModule);

        this.segmentModel = "all";
      };

      DetailsPageModule.ctorParameters = function () {
        return [];
      };

      DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
      })], DetailsPageModule);
      /***/
    },

    /***/
    "tDqb":
    /*!*******************************************!*\
      !*** ./src/app/details/details.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function tDqb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".icons {\n  display: block;\n  text-align: center;\n  background: #e4e4e4;\n  padding: 10px;\n  border-radius: 10em;\n  color: #43063c;\n  font-size: 20px;\n  margin: 0 auto;\n  margin-bottom: 5px;\n}\n\n.img-round {\n  border-radius: 50%;\n}\n\n.row-top-bdr {\n  border-top: 1px solid #eaeaea;\n  text-align: center;\n  font-size: 12px;\n  margin: 10px 0;\n  height: 50px;\n}\n\nion-card {\n  padding: 10px;\n}\n\np {\n  line-height: 10px;\n}\n\n.shop-name {\n  font-size: 20px;\n  font-weight: bold;\n  color: #000;\n  line-height: 0;\n  margin: 10px 0;\n}\n\n.cat {\n  color: #ccc;\n  line-height: 10px;\n}\n\n.location {\n  font-size: 12px;\n  color: mediumpurple;\n  line-height: 0;\n}\n\n.open-close-time {\n  font-size: 12px;\n  display: block;\n  color: #ccc;\n}\n\n.review-name {\n  font-size: 16px;\n  font-weight: bold;\n  color: #7d0670;\n  padding: 0;\n}\n\nstrong {\n  color: #7d0670;\n}\n\n.review-date {\n  font-size: 12px;\n}\n\n.review-text {\n  font-size: 10px;\n  color: #333;\n  margin: 0;\n  color: #666;\n}\n\n.map-holder {\n  padding: 10px 5px;\n  background: #f4f4f4;\n  margin: 10px;\n  border-radius: 5px;\n}\n\n.customer {\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  background: rgba(156, 39, 176, 0.8);\n  height: 100%;\n  position: absolute;\n  padding-top: 20%;\n}\n\n.cust-name {\n  font-size: 18px;\n  font-weight: bold;\n  color: #5e1c57;\n}\n\n.cust-lang {\n  font-size: 12px;\n  color: #cacaca;\n}\n\n.call-btn {\n  background: #5e1c57;\n  height: 44px;\n  border-radius: 50%;\n  text-align: center;\n  padding: 13px;\n  color: #fff;\n  font-size: 20px;\n}\n\n.close {\n  position: absolute;\n  top: 0;\n  font-size: 32px;\n  right: 5px;\n}\n\n.rating {\n  text-align: center;\n  font-size: 32px;\n}\n\n.text-right {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBRUksa0JBQUE7QUFESjs7QUFJQTtFQUVJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFGSjs7QUFJQTtFQUVJLGFBQUE7QUFGSjs7QUFJQTtFQUVJLGlCQUFBO0FBRko7O0FBSUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFGQTs7QUFJQTtFQUVBLFdBQUE7RUFDQSxpQkFBQTtBQUZBOztBQUlBO0VBRUksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBRUksZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSEo7O0FBS0E7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUhKOztBQUtBO0VBRUksY0FBQTtBQUhKOztBQUtBO0VBRUEsZUFBQTtBQUhBOztBQUtBO0VBRUEsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUhBOztBQUtBO0VBRUksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhKOztBQUtBO0VBRUksTUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1BO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU9BO0VBRUksZUFBQTtFQUNBLGNBQUE7QUFMSjs7QUFRQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFOSjs7QUFTQTtFQUVJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBUEo7O0FBVUE7RUFFSSxrQkFBQTtFQUNBLGVBQUE7QUFSSjs7QUFXQTtFQUVJLFlBQUE7QUFUSiIsImZpbGUiOiJkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uc1xyXG57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBlbTtcclxuICAgIGNvbG9yOiAjNDMwNjNjO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5pbWctcm91bmRcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ucm93LXRvcC1iZHJcclxue1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46MTBweCAwIDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5pb24tY2FyZFxyXG57XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbnBcclxue1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuLnNob3AtbmFtZVxyXG57XHJcbmZvbnQtc2l6ZTogMjBweDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmNvbG9yOiAjMDAwO1xyXG5saW5lLWhlaWdodDogMDtcclxubWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuLmNhdFxyXG57XHJcbmNvbG9yOiAjY2NjO1xyXG5saW5lLWhlaWdodDogMTBweDtcclxufVxyXG4ubG9jYXRpb25cclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IG1lZGl1bXB1cnBsZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4ub3Blbi1jbG9zZS10aW1lXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbn1cclxuLnJldmlldy1uYW1lXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM3ZDA2NzA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbnN0cm9uZ1xyXG57XHJcbiAgICBjb2xvcjogIzdkMDY3MDtcclxufVxyXG4ucmV2aWV3LWRhdGVcclxue1xyXG5mb250LXNpemU6IDEycHg7XHJcbn1cclxuLnJldmlldy10ZXh0XHJcbntcclxuZm9udC1zaXplOiAxMHB4O1xyXG5jb2xvcjogIzMzMztcclxubWFyZ2luOiAwO1xyXG5jb2xvcjojNjY2O1xyXG59XHJcbi5tYXAtaG9sZGVyXHJcbntcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uY3VzdG9tZXJcclxue1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1NiAzOSAxNzYgLyA4MCUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwJTtcclxufVxyXG5cclxuLmN1c3QtbmFtZVxyXG57XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNWUxYzU3XHJcbn1cclxuXHJcbi5jdXN0LWxhbmdcclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNjYWNhY2FcclxufVxyXG5cclxuLmNhbGwtYnRuXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICM1ZTFjNTc7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5jbG9zZVxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICByaWdodDogNXB4O1xyXG59XHJcblxyXG4ucmF0aW5nXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG5cclxuLnRleHQtcmlnaHRcclxue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */";
      /***/
    },

    /***/
    "vgIa":
    /*!*****************************************!*\
      !*** ./src/app/details/details.page.ts ***!
      \*****************************************/

    /*! exports provided: DetailsPage */

    /***/
    function vgIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPage", function () {
        return DetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./details.page.html */
      "z71o");
      /* harmony import */


      var _details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./details.page.scss */
      "tDqb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DetailsPage = /*#__PURE__*/function () {
        function DetailsPage() {
          _classCallCheck(this, DetailsPage);

          this.Customer = false;
          this.segmentModel = "details";
        }

        _createClass(DetailsPage, [{
          key: "CustClose",
          value: function CustClose() {
            this.Customer = false;
          }
        }, {
          key: "CustOpen",
          value: function CustOpen() {
            this.Customer = true;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DetailsPage;
      }();

      DetailsPage.ctorParameters = function () {
        return [];
      };

      DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-details',
        template: _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetailsPage);
      /***/
    },

    /***/
    "z71o":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function z71o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-row>\n        <ion-col><ion-title>Kavya Kiranam</ion-title></ion-col>\n      </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-slides autoplay=\"5000\" loop=\"true\" speed=\"500\" class=\"slides\" pager=\"true\">\n    <ion-slide>\n      <img src=\"../assets/banner1.png\" >\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../assets/banner2.png\" >\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../assets/banner3.png\" >\n    </ion-slide>\n  </ion-slides>\n\n\n  \n  <ion-segment \n    value=\"all\" \n    color=\"tertiary\" \n    scrollable=\"true\"\n    mode=\"ios\"\n    [(ngModel)]=\"segmentModel\" >\n\n      <ion-segment-button value=\"details\">\n        <ion-label>Details</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"offers\">\n        <ion-label>Offers</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"products\">\n        <ion-label>Products</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"reviews\">\n        <ion-label>Reviews</ion-label>\n      </ion-segment-button>\n\n      \n    </ion-segment>\n\n    <div  *ngIf=\"segmentModel === 'details'\">\n      <ion-card>\n        <ion-row no-padding>\n          <ion-col><p class=\"shop-name\">Kavya Kiranam</p></ion-col>\n          <ion-col size=\"2\"><ion-badge color=\"primary\">4.9</ion-badge></ion-col>\n        </ion-row>\n        <p class=\"cat\">Grocery</p>\n        <p class=\"location\">Kuaktpally, Hyderabad</p>\n        <ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon>\n        <ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon>\n        <ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon>\n        <ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon>\n        <ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon>\n        4.5 / 5\n        <p class=\"open-close-time\">Open : 10:00 Am - 10:00 Pm</p>\n        <ion-row text-center center class=\"row-top-bdr\">\n          <ion-col>\n            <ion-icon class=\"icons\" name=\"call-outline\" (click)=\"CustOpen()\"></ion-icon>\n            Call\n          </ion-col>\n          <ion-col routerLink=\"/message\">\n            <ion-icon  class=\"icons\" name=\"chatbox-ellipses-outline\"></ion-icon>\n            Chat\n          </ion-col>\n          <ion-col>\n            <ion-icon  class=\"icons\" name=\"navigate-outline\" routerLink=\"/map\"></ion-icon>\n            Directions\n          </ion-col>\n          <ion-col>\n            <ion-icon  class=\"icons\" name=\"share-social-outline\"></ion-icon>\n            Share\n          </ion-col>\n        </ion-row>\n      </ion-card>\n        <ion-card>\n          <strong>About </strong>\n          <ion-col>\n          <p style=\"line-height: 20px;\">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>\n          </ion-col>\n      </ion-card>\n    \n      <ion-card>\n        <strong>Photos</strong>\n        <ion-row>\n          <ion-col>\n            <ion-avatar>\n              <img src=\"https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png\">\n            </ion-avatar>\n          </ion-col>\n          <ion-col>\n            <ion-avatar>\n              <img src=\"https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png\">\n            </ion-avatar>\n          </ion-col>\n          <ion-col>\n            <ion-avatar>\n              <img src=\"https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png\">\n            </ion-avatar>\n          </ion-col>\n          <ion-col>\n            <ion-avatar>\n              <img src=\"https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png\">\n            </ion-avatar>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n\n      <ion-card>\n        <strong>Store Directions</strong>\n      <ion-row>\n        <ion-col>\n          <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60966.214446579885!2d80.11541535332768!3d17.24843419167358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3459d0d5cf738d%3A0xe18da4ae6d89da01!2sKhammam%2C%20Telangana!5e0!3m2!1sen!2sin!4v1614011017766!5m2!1sen!2sin\" width=\"100%\" height=\"150\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    \n      <ion-card>\n        <strong>Store Timings</strong>\n        <ion-item>\n          <ion-row>\n            <ion-col>\n              <ion-label> Monday </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>: </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label> 10:00 Am to 10:00 Pm  </ion-label>\n      </ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-item>\n          <ion-row>\n            <ion-col>\n              <ion-label> Tuesday </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>: </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label> 10:00 Am to 10:00 Pm  </ion-label>\n      </ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-item>\n          <ion-row>\n            <ion-col>\n              <ion-label> Wednesday </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>: </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label> 10:00 Am to 10:00 Pm  </ion-label>\n      </ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-item>\n          <ion-row>\n            <ion-col>\n              <ion-label> Thursday </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>: </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label> 10:00 Am to 10:00 Pm  </ion-label>\n      </ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-item>\n          <ion-row>\n            <ion-col>\n              <ion-label> Friday </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>: </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label> 10:00 Am to 10:00 Pm  </ion-label>\n      </ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-item>\n          <ion-row>\n            <ion-col>\n              <ion-label> Saturday </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>: </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label> 10:00 Am to 10:00 Pm  </ion-label>\n      </ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-item>\n          <ion-row>\n            <ion-col>\n              <ion-label> Sunday </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>: </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label> 10:00 Am to 10:00 Pm  </ion-label>\n      </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-card>\n    \n    </div>\n    \n    \n    <div *ngIf=\"segmentModel === 'products'\">\n    <ion-card>\n       <ion-row no-padding>\n         <ion-col size=\"2\">\n           <img src=\"https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png\" >\n         </ion-col>\n         <ion-col>\n           <p class=\"shop-name\">Product Name</p>\n           <p class=\"cat\">Product Description</p>        \n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-badge>99.00</ion-badge>\n          </ion-col>\n       </ion-row>\n    </ion-card>\n    <ion-card>\n      <ion-row no-padding>\n        <ion-col size=\"2\">\n          <img src=\"https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png\" >\n        </ion-col>\n        <ion-col>\n          <p class=\"shop-name\">Product Name</p>\n          <p class=\"cat\">Product Description</p>        \n         </ion-col>\n         <ion-col size=\"2\">\n           <ion-badge>99.00</ion-badge>\n         </ion-col>\n      </ion-row>\n   </ion-card>\n   <ion-card>\n    <ion-row no-padding>\n      <ion-col size=\"2\">\n        <img src=\"https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png\" >\n      </ion-col>\n      <ion-col>\n        <p class=\"shop-name\">Product Name</p>\n        <p class=\"cat\">Product Description</p>        \n       </ion-col>\n       <ion-col size=\"2\">\n         <ion-badge>99.00</ion-badge>\n       </ion-col>\n    </ion-row>\n </ion-card>\n <ion-card>\n  <ion-row no-padding>\n    <ion-col size=\"2\">\n      <img src=\"https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png\" >\n    </ion-col>\n    <ion-col>\n      <p class=\"shop-name\">Product Name</p>\n      <p class=\"cat\">Product Description</p>        \n     </ion-col>\n     <ion-col size=\"2\">\n       <ion-badge>99.00</ion-badge>\n     </ion-col>\n  </ion-row>\n</ion-card>\n<ion-card>\n  <ion-row no-padding>\n    <ion-col size=\"2\">\n      <img src=\"https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png\" >\n    </ion-col>\n    <ion-col>\n      <p class=\"shop-name\">Product Name</p>\n      <p class=\"cat\">Product Description</p>        \n     </ion-col>\n     <ion-col size=\"2\">\n       <ion-badge>99.00</ion-badge>\n     </ion-col>\n  </ion-row>\n</ion-card>\n  </div>\n    \n  <div *ngIf=\"segmentModel === 'reviews'\">\n    <ion-card>\n      <strong>Add Review</strong>\n      <ion-row>\n        <ion-col class=\"rating\">\n          <ion-icon name=\"star-outline\"></ion-icon>\n          <ion-icon name=\"star-outline\"></ion-icon>\n          <ion-icon name=\"star-outline\"></ion-icon>\n          <ion-icon name=\"star-outline\"></ion-icon>\n          <ion-icon name=\"star-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-textarea placeholder=\"Enter more information here...\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"text-right\">\n        <ion-button size=\"small\">Submit Review</ion-button>\n      </ion-row>\n    </ion-card>\n    <ion-card no-padding >\n     <ion-row>\n       <ion-col size=\"3\">\n         <img class=\"img-round\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xxoMK3UqLKv23cerkEfGiVUMikFr6A_JKA&usqp=CAU\">\n       </ion-col>\n       <ion-col>\n        <p class=\"review-name\">Maria R. Graza</p>\n        <p><ion-icon name=\"calendar-outline\"></ion-icon> 2021-02-17 10:31</p>\n       </ion-col>\n       <ion-col size=\"2\">\n         <ion-badge>3.9 <ion-icon name=\"star-outline\"></ion-icon></ion-badge>\n       </ion-col>\n     </ion-row>\n     <ion-row>\n       <ion-col>\n        <p class=\"review-text\" style=\"line-height: 12px;\">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>\n       </ion-col>\n     </ion-row>\n    </ion-card>\n\n    <ion-card no-padding >\n      <ion-row>\n        <ion-col size=\"3\">\n          <img class=\"img-round\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xxoMK3UqLKv23cerkEfGiVUMikFr6A_JKA&usqp=CAU\">\n        </ion-col>\n        <ion-col>\n         <p class=\"review-name\">Maria R. Graza</p>\n         <p><ion-icon name=\"calendar-outline\"></ion-icon> 2021-02-17 10:31</p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-badge>3.9 <ion-icon name=\"star-outline\"></ion-icon></ion-badge>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n         <p class=\"review-text\" style=\"line-height: 12px;\">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>\n        </ion-col>\n      </ion-row>\n     </ion-card>\n\n     <ion-card no-padding >\n      <ion-row>\n        <ion-col size=\"3\">\n          <img class=\"img-round\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xxoMK3UqLKv23cerkEfGiVUMikFr6A_JKA&usqp=CAU\">\n        </ion-col>\n        <ion-col>\n         <p class=\"review-name\">Maria R. Graza</p>\n         <p><ion-icon name=\"calendar-outline\"></ion-icon> 2021-02-17 10:31</p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-badge>3.9 <ion-icon name=\"star-outline\"></ion-icon></ion-badge>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n         <p class=\"review-text\" style=\"line-height: 12px;\">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>\n        </ion-col>\n      </ion-row>\n     </ion-card>\n\n     <ion-card no-padding >\n      <ion-row>\n        <ion-col size=\"3\">\n          <img class=\"img-round\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xxoMK3UqLKv23cerkEfGiVUMikFr6A_JKA&usqp=CAU\">\n        </ion-col>\n        <ion-col>\n         <p class=\"review-name\">Maria R. Graza</p>\n         <p><ion-icon name=\"calendar-outline\"></ion-icon> 2021-02-17 10:31</p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-badge>3.9 <ion-icon name=\"star-outline\"></ion-icon></ion-badge>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n         <p class=\"review-text\" style=\"line-height: 12px;\">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>\n        </ion-col>\n      </ion-row>\n     </ion-card>\n    \n  </div>\n  \n    <div  *ngIf=\"segmentModel === 'offers'\">\n  <ion-card>\n    <ion-row>\n      <ion-col>BUY ONE GET ONE FREE</ion-col>\n      <ion-col size=\"3\">\n        <ion-button color=\"primary\" size=\"small\" expand=\"block\" type=\"ios\">Claim</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  </div>\n\n  <div class=\"customer\" *ngIf = \"Customer\">\n    <ion-card>\n      <ion-card-header style=\"text-align: right;\">\n        <ion-icon class=\"close\" (click)=\"CustClose()\" name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <ion-col style=\"text-align: right;\">\n           \n          </ion-col>\n        </ion-row>\n            <ion-row>\n              <ion-col size=\"10\" class=\"cust-name\">\n                <div class=\"cust-name\">Surendra</div>\n                <div class=\"cust-lang\">Can Speak: English, Telugu, Hindi</div>\n              </ion-col>\n              <ion-col size=\"2\" class=\"call-btn\" routerLink=\"/calling\"><ion-icon name=\"call-outline\"></ion-icon></ion-col>\n            </ion-row>\n          <hr>\n            <ion-row>\n              <ion-col size=\"10\" class=\"cust-name\">\n                <div class=\"cust-name\">Senthil Kumar</div>\n                <div class=\"cust-lang\">Can Speak: Tamil, English</div>\n              </ion-col>\n              <ion-col size=\"2\" class=\"call-btn\" routerLink=\"/calling\"><ion-icon name=\"call-outline\"></ion-icon></ion-col>\n            </ion-row>\n      </ion-card-content>\n    </ion-card>\n    \n  </div>\n  \n</ion-content>\n\n\n<ion-footer>\n  <ion-row>\n    <ion-col routerLink=\"/calllist\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/message\">\n      <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/home\">\n      <ion-icon name=\"home-outline\" class=\"home-icon\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/favourite\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=details-details-module-es5.js.map