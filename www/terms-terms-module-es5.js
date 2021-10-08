(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-terms-module"], {
    /***/
    "NgMV": function NgMV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Terms & Condition</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"content\">\n  <iframe width=\"100%\" height=\"250\" src=\"https://www.youtube.com/embed/hGLTkVmPd28\" title=\"YouTube video player\"\n    frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n    allowfullscreen></iframe>\n  <h3>Digital Visiting Card</h3>\n  <p>\n    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo corrupti debitis quia, pariatur assumenda cupiditate!\n    Ipsam deleniti, expedita dolore ab nostrum error vero optio. Sit esse nostrum nam at ducimus?\n    Impedit aliquid laboriosam ratione optio, est totam voluptatem asperiores illum soluta voluptate aliquam, fugit at,\n    <br>\n    exercitationem modi! Aliquid aspernatur, corrupti porro minus, ut nobis harum molestias voluptate, cum autem\n    doloremque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id hic accusamus non quia, qui\n    perspiciatis quam possimus voluptatibus ratione. Dolore, maxime non. Dolorum labore quidem natus, facilis animi\n    iusto?\n    <br>\n  </p>\n \n  \n  <ion-row>\n    <ion-col></ion-col>\n    <ion-col>\n      <ion-button expand=\"fill\" class=\"purple-btn\" color=\"custom\" routerLink=\"/home\">I Agree</ion-button>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  \n</ion-content>";
      /***/
    },

    /***/
    "b0Ka": function b0Ka(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsPage", function () {
        return TermsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_terms_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./terms.page.html */
      "NgMV");
      /* harmony import */


      var _terms_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./terms.page.scss */
      "eJcW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TermsPage = /*#__PURE__*/function () {
        function TermsPage() {
          _classCallCheck(this, TermsPage);
        }

        _createClass(TermsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TermsPage;
      }();

      TermsPage.ctorParameters = function () {
        return [];
      };

      TermsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-terms',
        template: _raw_loader_terms_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_terms_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TermsPage);
      /***/
    },

    /***/
    "eJcW": function eJcW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n  --ion-background-color:#fff;\n}\n\n.title {\n  text-align: center;\n}\n\nh3 {\n  color: #22272a;\n  font-weight: bold;\n  font-size: 16px;\n}\n\np {\n  color: #22272a;\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.agree {\n  text-align: center;\n  --background: linear-gradient(#871178, #44093c);\n  margin-top: 30px;\n  margin-left: 110px;\n  margin-bottom: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRlcm1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBS0oiLCJmaWxlIjoidGVybXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gIH1cclxuLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oMyB7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbnAge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDoyMHB4O1xyXG59XHJcbi5hZ3JlZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjNDQwOTNjKTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOXB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "eLkP": function eLkP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsPageRoutingModule", function () {
        return TermsPageRoutingModule;
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


      var _terms_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./terms.page */
      "b0Ka");

      var routes = [{
        path: '',
        component: _terms_page__WEBPACK_IMPORTED_MODULE_3__["TermsPage"]
      }];

      var TermsPageRoutingModule = function TermsPageRoutingModule() {
        _classCallCheck(this, TermsPageRoutingModule);
      };

      TermsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TermsPageRoutingModule);
      /***/
    },

    /***/
    "eNqe": function eNqe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsPageModule", function () {
        return TermsPageModule;
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


      var _terms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./terms-routing.module */
      "eLkP");
      /* harmony import */


      var _terms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./terms.page */
      "b0Ka");

      var TermsPageModule = function TermsPageModule() {
        _classCallCheck(this, TermsPageModule);
      };

      TermsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _terms_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsPageRoutingModule"]],
        declarations: [_terms_page__WEBPACK_IMPORTED_MODULE_6__["TermsPage"]]
      })], TermsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=terms-terms-module-es5.js.map