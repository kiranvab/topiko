(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-view-product-view-module"],{

/***/ "9FjV":
/*!***************************************************!*\
  !*** ./src/app/product-view/product-view.page.ts ***!
  \***************************************************/
/*! exports provided: ProductViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewPage", function() { return ProductViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_view_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-view.page.html */ "glGl");
/* harmony import */ var _product_view_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-view.page.scss */ "Mmgv");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let ProductViewPage = class ProductViewPage {
    constructor(storage, http, router) {
        this.storage = storage;
        this.http = http;
        this.router = router;
    }
    ngOnInit() {
        this.storage.get("pid").then(val => {
            this.pid = val;
            console.log("product id", this.pid);
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getproduct_details.php?prid=" + this.pid).subscribe(data => {
                this.product = data;
                this.producttitle = this.product[0].title;
                this.producttags = this.product[0].tag;
                this.measuringtype = this.product[0].meassuring_type;
                this.measuringdetails = this.product[0].meassuring_details;
                this.description = this.product[0].description;
                this.actualprice = this.product[0].mrp;
                this.discount_price = this.product[0].discount_price;
                this.pro_image = this.product[0].product_image;
                this.banner = this.product[0].banner;
                this.video = this.product[0].video;
                this.img1 = this.product[0].img1;
                this.img2 = this.product[0].img2;
                this.img3 = this.product[0].img3;
                console.log(this.product);
            });
        });
    }
    edit() {
        this.storage.set('pid', this.pid);
        this.router.navigate(['edit-product']);
    }
};
ProductViewPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
ProductViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-product-view',
        template: _raw_loader_product_view_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_view_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductViewPage);



/***/ }),

/***/ "AXrd":
/*!*************************************************************!*\
  !*** ./src/app/product-view/product-view-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewPageRoutingModule", function() { return ProductViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-view.page */ "9FjV");




const routes = [
    {
        path: '',
        component: _product_view_page__WEBPACK_IMPORTED_MODULE_3__["ProductViewPage"]
    }
];
let ProductViewPageRoutingModule = class ProductViewPageRoutingModule {
};
ProductViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductViewPageRoutingModule);



/***/ }),

/***/ "Mmgv":
/*!*****************************************************!*\
  !*** ./src/app/product-view/product-view.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header .title {\n  text-align: center;\n  size: 18px;\n  color: #ffffff;\n}\n\nh5 {\n  color: #871178;\n  text-align: center;\n  margin-bottom: 0px;\n}\n\nion-grid {\n  margin: 14px 18px;\n  padding: 0px;\n}\n\nion-card ion-icon {\n  width: 40px;\n  height: 30px;\n  color: #9f9f9f;\n}\n\nion-card p {\n  color: #9f9f9f;\n  font-size: 0.75em;\n  margin: 0.625em 3.125em;\n  text-align: center;\n  line-height: 1.5em;\n}\n\n.first-card {\n  height: 249px;\n  margin: 0px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.first-card img {\n  width: 100%;\n  height: 100%;\n}\n\n.second-card {\n  height: 169px;\n  margin: 0px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.third-card {\n  height: 75px;\n  margin: 0px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.left {\n  padding: 5px 2.5px 0px 0px;\n}\n\n.third-card ion-icon {\n  width: 25px;\n  height: 20px;\n}\n\n.third-card p {\n  font-size: 0.625em;\n  margin: 0.25em 0px;\n}\n\n.right {\n  padding: 5px 0px 0px 2.5px;\n}\n\n.second-grid p {\n  margin: 30px 0px;\n}\n\nion-textarea {\n  border: 1px solid #707070;\n  width: 100%;\n  opacity: 70%;\n  border-radius: 0.3125em;\n}\n\nion-chip {\n  font-size: 0.75em;\n  margin: 10px;\n}\n\n.toggle p {\n  font-size: 1em;\n  color: #22272a;\n  margin: 1em 0px;\n}\n\n.toggle ion-col {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\nion-row ion-toggle {\n  --width: 34px;\n  --height: 14px;\n  --background-checked: linear-gradient(#871178, #3c1378);\n  --handle-background-checked: #9f9f9f;\n  padding-top: 0.71875em;\n}\n\n.check {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n}\n\nion-col .confirm {\n  font-size: 0.75em;\n  color: #22272a;\n  margin-top: 0%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n}\n\n.confirm span {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n}\n\n.btn ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 0.75em;\n  width: 7.6875em;\n  height: 3.125em;\n}\n\nimg {\n  padding: 1px;\n  border: 1px solid #aaa;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3Qtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUpBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFOQTtFQUNJLDBCQUFBO0FBU0o7O0FBUEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQVdKOztBQVRBO0VBQ0ksMEJBQUE7QUFZSjs7QUFUQTtFQUNJLGdCQUFBO0FBWUo7O0FBVkE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFhSjs7QUFYQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQWNKOztBQVhBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBY0o7O0FBWkE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWVKOztBQWJBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSx1REFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUFnQko7O0FBYkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBZ0JKOztBQWRBO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUFpQko7O0FBZkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUFtQko7O0FBaEJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBbUJKOztBQWpCQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFvQko7O0FBakJBO0VBRUksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFtQkoiLCJmaWxlIjoicHJvZHVjdC12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbmg1IHtcbiAgICBjb2xvcjogIzg3MTE3ODtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5pb24tZ3JpZCB7XG4gICAgbWFyZ2luOiAxNHB4IDE4cHg7XG4gICAgcGFkZGluZzogMHB4O1xufVxuaW9uLWNhcmQgaW9uLWljb24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBjb2xvcjogIzlmOWY5Zjtcbn1cbmlvbi1jYXJkIHAge1xuICAgIGNvbG9yOiAjOWY5ZjlmO1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgIG1hcmdpbjogMC42MjVlbSAzLjEyNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG59XG4uZmlyc3QtY2FyZCB7XG4gICAgaGVpZ2h0OiAyNDlweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZpcnN0LWNhcmQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uc2Vjb25kLWNhcmQge1xuICAgIGhlaWdodDogMTY5cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50aGlyZC1jYXJkIHtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sZWZ0IHtcbiAgICBwYWRkaW5nOiA1cHggMi41cHggMHB4IDBweDtcbn1cbi50aGlyZC1jYXJkIGlvbi1pY29uIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG4udGhpcmQtY2FyZCBwIHtcbiAgICBmb250LXNpemU6IDAuNjI1ZW07XG4gICAgbWFyZ2luOiAwLjI1ZW0gMHB4O1xufVxuLnJpZ2h0IHtcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCAyLjVweDtcbn1cblxuLnNlY29uZC1ncmlkIHAge1xuICAgIG1hcmdpbjogMzBweCAwcHg7XG59XG5pb24tdGV4dGFyZWEge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3BhY2l0eTogNzAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNWVtO1xufVxuaW9uLWNoaXAge1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLnRvZ2dsZSBwIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogIzIyMjcyYTtcbiAgICBtYXJnaW46IDFlbSAwcHg7XG59XG4udG9nZ2xlIGlvbi1jb2wge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tcm93IGlvbi10b2dnbGUge1xuICAgIC0td2lkdGg6IDM0cHg7XG4gICAgLS1oZWlnaHQ6IDE0cHg7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM5ZjlmOWY7XG4gICAgcGFkZGluZy10b3A6IDAuNzE4NzVlbTtcbn1cblxuLmNoZWNrIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5pb24tY2hlY2tib3gge1xuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICM3MDcwNzA7XG4gICAgb3BhY2l0eTogNzAlO1xuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjODcxMTc4O1xuICAgIC0tY2hlY2ttYXJrLXdpZHRoOiA0O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbCAuY29uZmlybSB7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgY29sb3I6ICMyMjI3MmE7XG4gICAgbWFyZ2luLXRvcDogMCU7XG4gICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xufVxuLmNvbmZpcm0gc3BhbiB7XG4gICAgY29sb3I6ICM4NzExNzg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYnRuIGlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgd2lkdGg6IDcuNjg3NWVtO1xuICAgIGhlaWdodDogMy4xMjVlbTtcbn1cblxuaW1nXG57XG4gICAgcGFkZGluZzogMXB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2FhYTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "Rg4g":
/*!*****************************************************!*\
  !*** ./src/app/product-view/product-view.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewPageModule", function() { return ProductViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _product_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-view-routing.module */ "AXrd");
/* harmony import */ var _product_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-view.page */ "9FjV");







let ProductViewPageModule = class ProductViewPageModule {
};
ProductViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductViewPageRoutingModule"]
        ],
        declarations: [_product_view_page__WEBPACK_IMPORTED_MODULE_6__["ProductViewPage"]]
    })
], ProductViewPageModule);



/***/ }),

/***/ "glGl":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-view/product-view.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" icon=\"chevron-back\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Product Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"create-outline\" (click)=\"edit()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"left\">\n        <ion-card class=\"first-card\" >\n          <div *ngIf=\"pro_image == ''\"  > Upload Image</div>\n          <img  *ngIf=\"pro_image != ''\" src=\"{{pro_image}}\" alt=\"\">\n        </ion-card>\n      </ion-col>\n      <ion-col class=\"right\">\n        <ion-card class=\"second-card\">\n          <div *ngIf=\"video == ''\" >Upload Video</div>\n          <img *ngIf=\"video != ''\" src=\"{{video}}\" alt=\"\">\n        </ion-card>\n        <ion-row class=\"pad\">\n          <ion-col class=\"left\">\n            <ion-card class=\"third-card\" >\n             <div *ngIf=\"img1 == null\" > Upload </div>\n             <img *ngIf=\"img1 != ''\" src=\"{{img1}}\" alt=\"\">\n            </ion-card>\n          </ion-col>\n          <ion-col class=\"right\">\n            <ion-card class=\"third-card\" >\n              <div *ngIf=\"img2 == ''\" >Upload</div>\n              <img *ngIf=\"img2 != ''\" src=\"{{img2}}\" alt=\"\">\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\" class=\"left\">\n        <ion-card class=\"third-card\"  (click)=\"getImg3()\">\n          <div *ngIf=\"img3 === ''\" > Upload </div>\n          <img *ngIf=\"img3 != ''\" src=\"{{img3}}\" alt=\"\">\n        </ion-card>\n      </ion-col>\n      <ion-col class=\"right\">\n        <ion-card class=\"third-card\" (click)=\"getBanner()\">\n          <div *ngIf=\"banner == ''\" > Upload Banner</div>\n          <img *ngIf=\"banner != ''\"  src=\"{{banner}}\" alt=\"\">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"second-grid\">\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Product Title\" [(ngModel)]=\"producttitle\"></ion-input>\n      </ion-item>\n    </p>\n    <p>\n      Product Tags\n      <ion-row>\n        <ion-textarea [(ngModel)]=\"producttags\">\n        </ion-textarea>\n      </ion-row>\n    </p>\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Measuring Type\" [(ngModel)]=\"measuringtype\"></ion-input>\n      </ion-item>\n    </p>\n    <ion-row>\n      <ion-textarea placeholder=\"Measuring Details\" [(ngModel)]=\"measuringdetails\">\n      </ion-textarea>\n    </ion-row>\n    <p>\n      Description\n      <ion-row>\n        <ion-textarea [(ngModel)]=\"description\"></ion-textarea>\n      </ion-row>\n    </p>\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Actual Price\" [(ngModel)]=\"actualprice\"></ion-input>\n      </ion-item>\n    </p>\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Discount\" [(ngModel)]=\"discount_price\"></ion-input>\n      </ion-item>\n    </p>\n    <!-- <p>\n      <ion-row class=\"toggle\">\n        <ion-col>\n          <p>Cash on Delivery</p>\n        </ion-col>\n        <ion-col size=\"2.5\">\n          <ion-toggle checked></ion-toggle>\n        </ion-col>\n      </ion-row>\n    </p> -->\n   \n  \n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=product-view-product-view-module-es2015.js.map