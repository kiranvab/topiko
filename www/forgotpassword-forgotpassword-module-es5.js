(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassword-forgotpassword-module"], {
    /***/
    "/oEb":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function oEb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"warning\">\n    <ion-title>\n      Multiple Ion-Sliders with Custom Navigation\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  \n    <ion-row>\n      \n      <ion-col size=\"11\">\n\n        <ion-slides pager=\"false\" [options]=\"slideOptsTwo\" #slideWithNav2\n          (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\">\n          <ion-slide *ngFor=\"let s of sliderTwo.slidesItems\">\n            <img src=\"https://picsum.photos/1000/500\">\n          </ion-slide>\n        </ion-slides>\n\n      </ion-col>\n      <ion-col size=\"1\">\n        <span class=\"slider-nav arrow-next\" (click)=\"slideNext(sliderTwo,slideWithNav2)\">\n          <div class=\"next-icon-custom custon-nav\" [class.disabled]=\"sliderTwo.isEndSlide\"></div>\n        </span>\n      </ion-col>\n    </ion-row>\n  \n\n \n</ion-content>";
      /***/
    },

    /***/
    "IoKB":
    /*!*********************************************************!*\
      !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
      \*********************************************************/

    /*! exports provided: ForgotpasswordPageModule */

    /***/
    function IoKB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function () {
        return ForgotpasswordPageModule;
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


      var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgotpassword-routing.module */
      "yrZY");
      /* harmony import */


      var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgotpassword.page */
      "Nmh1");

      var ForgotpasswordPageModule = function ForgotpasswordPageModule() {
        _classCallCheck(this, ForgotpasswordPageModule);
      };

      ForgotpasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPageRoutingModule"]],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordPage"]]
      })], ForgotpasswordPageModule);
      /***/
    },

    /***/
    "M/+l":
    /*!*********************************************************!*\
      !*** ./src/app/forgotpassword/forgotpassword.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function ML(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "Nmh1":
    /*!*******************************************************!*\
      !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
      \*******************************************************/

    /*! exports provided: ForgotpasswordPage */

    /***/
    function Nmh1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function () {
        return ForgotpasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgotpassword.page.html */
      "/oEb");
      /* harmony import */


      var _forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgotpassword.page.scss */
      "M/+l");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ForgotpasswordPage = /*#__PURE__*/function () {
        function ForgotpasswordPage() {
          _classCallCheck(this, ForgotpasswordPage);

          //Configuration for each Slider
          this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
          };
          this.slideOptsTwo = {
            initialSlide: 0,
            slidesPerView: 2,
            loop: true,
            autoplay: true,
            centeredSlides: true,
            spaceBetween: 5
          };
          this.slideOptsThree = {
            initialSlide: 0,
            slidesPerView: 2
          }; //Item object for Nature

          this.sliderOne = {
            isBeginningSlide: true,
            isEndSlide: false,
            slidesItems: [{
              id: 995
            }, {
              id: 925
            }, {
              id: 940
            }, {
              id: 943
            }, {
              id: 944
            }]
          }; //Item object for Food

          this.sliderTwo = {
            isBeginningSlide: true,
            isEndSlide: false,
            slidesItems: [{
              id: 324
            }, {
              id: 321
            }, {
              id: 435
            }, {
              id: 524
            }, {
              id: 235
            }]
          }; //Item object for Fashion

          this.sliderThree = {
            isBeginningSlide: true,
            isEndSlide: false,
            slidesItems: [{
              id: 643
            }, {
              id: 532
            }, {
              id: 232
            }, {
              id: 874
            }, {
              id: 193
            }]
          };
        } //Move to Next slide


        _createClass(ForgotpasswordPage, [{
          key: "slideNext",
          value: function slideNext(object, slideView) {
            var _this = this;

            slideView.slideNext(500).then(function () {
              _this.checkIfNavDisabled(object, slideView);
            });
          } //Move to previous slide

        }, {
          key: "slidePrev",
          value: function slidePrev(object, slideView) {
            var _this2 = this;

            slideView.slidePrev(500).then(function () {
              _this2.checkIfNavDisabled(object, slideView);
            });
            ;
          } //Method called when slide is changed by drag or navigation

        }, {
          key: "SlideDidChange",
          value: function SlideDidChange(object, slideView) {
            this.checkIfNavDisabled(object, slideView);
          } //Call methods to check if slide is first or last to enable disbale navigation  

        }, {
          key: "checkIfNavDisabled",
          value: function checkIfNavDisabled(object, slideView) {
            this.checkisBeginning(object, slideView);
            this.checkisEnd(object, slideView);
          }
        }, {
          key: "checkisBeginning",
          value: function checkisBeginning(object, slideView) {
            slideView.isBeginning().then(function (istrue) {
              object.isBeginningSlide = istrue;
            });
          }
        }, {
          key: "checkisEnd",
          value: function checkisEnd(object, slideView) {
            slideView.isEnd().then(function (istrue) {
              object.isEndSlide = istrue;
            });
          }
        }]);

        return ForgotpasswordPage;
      }();

      ForgotpasswordPage.ctorParameters = function () {
        return [];
      };

      ForgotpasswordPage.propDecorators = {
        slideWithNav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['slideWithNav', {
            "static": false
          }]
        }],
        slideWithNav2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['slideWithNav2', {
            "static": false
          }]
        }],
        slideWithNav3: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['slideWithNav3', {
            "static": false
          }]
        }]
      };
      ForgotpasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgotpassword',
        template: _raw_loader_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ForgotpasswordPage);
      /***/
    },

    /***/
    "yrZY":
    /*!*****************************************************************!*\
      !*** ./src/app/forgotpassword/forgotpassword-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ForgotpasswordPageRoutingModule */

    /***/
    function yrZY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageRoutingModule", function () {
        return ForgotpasswordPageRoutingModule;
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


      var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgotpassword.page */
      "Nmh1");

      var routes = [{
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpasswordPage"]
      }];

      var ForgotpasswordPageRoutingModule = function ForgotpasswordPageRoutingModule() {
        _classCallCheck(this, ForgotpasswordPageRoutingModule);
      };

      ForgotpasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotpasswordPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=forgotpassword-forgotpassword-module-es5.js.map