(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-branch-edit-branch-module"],{

/***/ "1ufV":
/*!***************************************************!*\
  !*** ./src/app/edit-branch/edit-branch.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin: 0;\n}\n\n.label-floating.sc-ion-label-ios-h,\n.label-stacked.sc-ion-label-md-h,\n.label-floating.sc-ion-label-md-h {\n  color: #871178;\n}\n\n.purple-btn {\n  background: linear-gradient(#871178, #3c1378) !important;\n  height: 50px;\n  border: 0;\n  width: 90%;\n  text-align: center;\n  font-size: 18px;\n  margin: 0 auto;\n  text-transform: capitalize;\n  color: #fff;\n  line-height: 2.5;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVkaXQtYnJhbmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFNBQUE7QUFBSjs7QUFHQTs7O0VBSUksY0FBQTtBQURKOztBQUdBO0VBQ0ksd0RBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKIiwiZmlsZSI6ImVkaXQtYnJhbmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkXHJcbntcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCxcclxuLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgsIFxyXG4ubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWhcclxue1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuLnB1cnBsZS1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "CKFN":
/*!*************************************************!*\
  !*** ./src/app/edit-branch/edit-branch.page.ts ***!
  \*************************************************/
/*! exports provided: EditBranchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBranchPage", function() { return EditBranchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_branch_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-branch.page.html */ "wOVo");
/* harmony import */ var _edit_branch_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-branch.page.scss */ "1ufV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "Sy1n");









let EditBranchPage = class EditBranchPage {
    constructor(storage, http, router, alertController) {
        this.storage = storage;
        this.http = http;
        this.router = router;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.storage.get("brid").then(val => {
            this.brid = val;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getbranch.php?brid=" + this.brid).subscribe(response => {
                this.branch = response;
                this.branch_title = this.branch[0].branch_title;
                this.branch_address = this.branch[0].branch_address;
                this.branch_head = this.branch[0].branch_head;
                this.contact_number = this.branch[0].contact_number;
                this.contact_email = this.branch[0].contact_email;
                this.alternate_number = this.branch[0].alternate_number;
                this.branch_area = this.branch[0].branch_area;
                this.branch_pincode = this.branch[0].branch_pincode;
                this.branch_city = this.branch[0].branch_city;
                this.branch_state = this.branch[0].branch_state;
                this.branch_country = this.branch[0].branch_country;
                console.log("Branch Details", this.branch);
            });
        });
    }
    submit() {
        var link = _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "update_branch.php";
        var mydata = JSON.stringify({
            "branch_id": this.brid,
            "branch_title": this.branch_title,
            "branch_address": this.branch_address,
            "branch_head": this.branch_head,
            "contact_number": this.contact_number,
            "contact_email": this.contact_email,
            "alternate_number": this.alternate_number,
            "branch_area": this.branch_area,
            "branch_pincode": this.branch_pincode,
            "branch_city": this.branch_city,
            "branch_state": this.branch_state,
            "branch_country": this.branch_country
        });
        console.log("payload", mydata);
        this.http.post(link, mydata).subscribe(data => {
            console.log(data);
            if (data == 1) {
                this.Created();
                this.router.navigate(["/branches"]);
            }
            else {
                this.Failed();
            }
        });
    }
    Created() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Created!',
                message: 'Branch has been Updated sucesfully.',
                buttons: ['OK'],
            });
            this.router.navigate(["/branches"]);
            yield alert.present();
        });
    }
    Failed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Failed!',
                message: 'Failed to Update branch try again.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
EditBranchPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
EditBranchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-edit-branch',
        template: _raw_loader_edit_branch_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_branch_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditBranchPage);



/***/ }),

/***/ "NnWJ":
/*!***************************************************!*\
  !*** ./src/app/edit-branch/edit-branch.module.ts ***!
  \***************************************************/
/*! exports provided: EditBranchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBranchPageModule", function() { return EditBranchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_branch_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-branch-routing.module */ "qGOY");
/* harmony import */ var _edit_branch_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-branch.page */ "CKFN");







let EditBranchPageModule = class EditBranchPageModule {
};
EditBranchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_branch_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditBranchPageRoutingModule"]
        ],
        declarations: [_edit_branch_page__WEBPACK_IMPORTED_MODULE_6__["EditBranchPage"]]
    })
], EditBranchPageModule);



/***/ }),

/***/ "qGOY":
/*!***********************************************************!*\
  !*** ./src/app/edit-branch/edit-branch-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EditBranchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBranchPageRoutingModule", function() { return EditBranchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_branch_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-branch.page */ "CKFN");




const routes = [
    {
        path: '',
        component: _edit_branch_page__WEBPACK_IMPORTED_MODULE_3__["EditBranchPage"]
    }
];
let EditBranchPageRoutingModule = class EditBranchPageRoutingModule {
};
EditBranchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditBranchPageRoutingModule);



/***/ }),

/***/ "wOVo":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-branch/edit-branch.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Branch</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n  <ion-item>\n    <ion-label position=\"floating\">Branch Name</ion-label>\n    <ion-input [(ngModel)]=\"branch_title\" ></ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch Address</ion-label>\n    <ion-input [(ngModel)]=\"branch_address\"></ion-input>\n  </ion-item> \n  \n  <ion-item>\n    <ion-label position=\"floating\">Branch Head</ion-label>\n    <ion-input [(ngModel)]=\"branch_head\"></ion-input>\n  </ion-item> \n  \n  <ion-item>\n    <ion-label position=\"floating\">Contact Number </ion-label>\n    <ion-input [(ngModel)]=\"contact_number\"></ion-input>\n  </ion-item> \n  \n  <ion-item>\n    <ion-label position=\"floating\">Branch Email </ion-label>\n    <ion-input [(ngModel)]=\"contact_email\"></ion-input>\n  </ion-item> \n  \n  <ion-item>\n    <ion-label position=\"floating\">Alternate Phone No</ion-label>\n    <ion-input [(ngModel)]=\"alternate_number\"></ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch Area</ion-label>\n    <ion-input [(ngModel)]=\"branch_area\"></ion-input>\n  </ion-item>   \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch Pincode</ion-label>\n    <ion-input [(ngModel)]=\"branch_pincode\"></ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch City</ion-label>\n    <ion-input [(ngModel)]=\"branch_city\"></ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch State</ion-label>\n    <ion-input [(ngModel)]=\"branch_state\"></ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch Country</ion-label>\n    <ion-input   [(ngModel)]=\"branch_country\"></ion-input>\n  </ion-item> \n  \n  <br>\n  <div expand=\"block\" class=\"purple-btn\" size=\"small\" (click)=\"submit()\">Submit</div>\n  <br>\n  </ion-card>\n\n  \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=edit-branch-edit-branch-module-es2015.js.map