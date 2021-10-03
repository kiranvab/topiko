(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-employee-add-employee-module"],{

/***/ "1+uD":
/*!*************************************************************!*\
  !*** ./src/app/add-employee/add-employee-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AddEmployeePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeePageRoutingModule", function() { return AddEmployeePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_employee_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-employee.page */ "4U3x");




const routes = [
    {
        path: '',
        component: _add_employee_page__WEBPACK_IMPORTED_MODULE_3__["AddEmployeePage"]
    }
];
let AddEmployeePageRoutingModule = class AddEmployeePageRoutingModule {
};
AddEmployeePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddEmployeePageRoutingModule);



/***/ }),

/***/ "4U3x":
/*!***************************************************!*\
  !*** ./src/app/add-employee/add-employee.page.ts ***!
  \***************************************************/
/*! exports provided: AddEmployeePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeePage", function() { return AddEmployeePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_employee_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-employee.page.html */ "hs4o");
/* harmony import */ var _add_employee_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-employee.page.scss */ "TElT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");









let AddEmployeePage = class AddEmployeePage {
    constructor(storage, http, route, camera) {
        this.storage = storage;
        this.http = http;
        this.route = route;
        this.camera = camera;
    }
    ngOnInit() {
        this.storage.get("mybusiness").then((val) => {
            this.mybusiness = val;
            console.log("My business Details:", this.mybusiness);
            this.owner = this.mybusiness[0].owner_name;
            this.address = this.mybusiness[0].business_address;
            this.busines_name = this.mybusiness[0].business_name;
            this.buid = this.mybusiness[0].id;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getemployees.php?bid=" + this.bid).subscribe(data => {
                this.employees = data;
                console.log("Employees", this.employees);
            });
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getbranches.php?bid=" + this.buid).subscribe(branch => {
                this.branches = branch;
                console.log("business Branches:", this.branches);
            });
        });
    }
    Chatstatus(isChecked) {
        if (isChecked == true) {
            isChecked = true;
            this.chat = 1;
        }
        else {
            isChecked = false;
            this.chat = 0;
        }
        console.log(isChecked);
    }
    VideoStatus(isChecked) {
        if (isChecked == true) {
            isChecked = true;
            this.video = 1;
        }
        else {
            isChecked = false;
            this.video = 0;
        }
        console.log(isChecked);
    }
    Callstatus(isChecked) {
        if (isChecked == true) {
            isChecked = true;
            this.call = 1;
        }
        else {
            isChecked = false;
            this.call = 0;
        }
        console.log(isChecked);
    }
    Deliverystatus(isChecked) {
        if (isChecked == true) {
            isChecked = true;
            this.delivery = 1;
        }
        else {
            isChecked = false;
            this.delivery = 0;
        }
        console.log(isChecked);
    }
    Recordstatus(isChecked) {
        if (isChecked == true) {
            isChecked = true;
            this.callrecord = 1;
        }
        else {
            isChecked = false;
            this.callrecord = 0;
        }
        console.log(isChecked);
    }
    Invoicestatus(isChecked) {
        if (isChecked == true) {
            isChecked = true;
            this.invoice = 1;
        }
        else {
            isChecked = false;
            this.invoice = 0;
        }
        console.log(isChecked);
    }
    adduserImage() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.user_image = base64Image;
        }, (err) => {
        });
    }
    submit() {
        var link = _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "addemployee.php";
        var myData = JSON.stringify({
            "bid": this.buid,
            "branch_id": this.branch,
            'name': this.name,
            'mobile': this.mobile,
            'tags': this.tags,
            'language': this.language,
            'chat': this.chat,
            'video': this.video,
            'call': this.call,
            'delivery': this.delivery,
            'user_image': this.user_image,
            'payment_image': this.payment_image,
            'callrecord': this.callrecord,
            'invoice': this.invoice
        });
        console.log(myData);
        this.http.post(link, myData).subscribe((response) => {
            this.response = response;
            console.log(this.response);
            if (this.response == 1) {
                alert("employee added sucessfully");
                this.route.navigate(['/employee']);
            }
        });
    }
};
AddEmployeePage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] }
];
AddEmployeePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-employee',
        template: _raw_loader_add_employee_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_employee_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddEmployeePage);



/***/ }),

/***/ "TElT":
/*!*****************************************************!*\
  !*** ./src/app/add-employee/add-employee.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.row {\n  height: 12em;\n  background: #ffffff;\n}\n\n.firstcard {\n  border: none;\n  box-shadow: none;\n  margin: 0.75em 1.125em;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 8.1875em;\n  height: 8.1875em;\n  margin-top: 90px;\n}\n\nion-grid {\n  margin: 14px 18px;\n  padding: 0px;\n}\n\nion-grid p {\n  margin: 30px 0px;\n}\n\nion-textarea {\n  border: 1px solid #707070;\n  width: 100%;\n  opacity: 70%;\n  border-radius: 0.3125em;\n}\n\nion-chip {\n  font-size: 0.75em;\n  margin: 10px;\n}\n\nion-row .gps {\n  font-size: 16px;\n  color: #22272a;\n  line-height: 1.3125em;\n}\n\nion-row ion-toggle {\n  --width: 34px;\n  --height: 14px;\n  --background-checked: linear-gradient(#871178, #3c1378);\n  --handle-background-checked: #9f9f9f;\n  padding-top: 0.71875em;\n  float: right;\n}\n\n.tog {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nh6 {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.branches {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.branches p {\n  color: #871178;\n  font-size: 1em;\n  margin-top: 1em;\n  margin-bottom: 0px;\n}\n\n.card {\n  box-shadow: 0px 0.1875em 0.375em #00000029;\n  margin: 0px;\n  padding: 0px;\n}\n\n.address p {\n  margin: 0.3125em;\n  font-size: 1em;\n  color: #707070;\n}\n\n.add p {\n  margin: 0.3125em;\n  font-size: 0.875em;\n  color: #22272a;\n  line-height: 2em;\n}\n\n.sun {\n  text-align: center;\n  font-size: 1em;\n  color: #22272a;\n}\n\n.qr {\n  text-align: center;\n}\n\n.qr ion-icon {\n  color: #871178;\n  width: 110px;\n  height: 110px;\n}\n\n.check {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n}\n\nion-col .confirm {\n  font-size: 0.75em;\n  color: #22272a;\n  margin-top: 0%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n}\n\n.confirm span {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n}\n\n.btn ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 16px;\n  width: 7.6875em;\n  height: 3.125em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZC1lbXBsb3llZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQU9KOztBQUxBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBUUo7O0FBTkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVEQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFTSjs7QUFQQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBVUo7O0FBUEE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUFVSjs7QUFSQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtBQVdKOztBQVRBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFZSjs7QUFWQTtFQUNJLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFhSjs7QUFYQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFjSjs7QUFaQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFlSjs7QUFiQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFnQko7O0FBZEE7RUFDSSxrQkFBQTtBQWlCSjs7QUFmQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQWtCSjs7QUFoQkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBbUJKOztBQWpCQTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FBb0JKOztBQWxCQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBcUJKOztBQW5CQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQXNCSjs7QUFuQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFzQko7O0FBcEJBO0VBQ0ksK0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBdUJKIiwiZmlsZSI6ImFkZC1lbXBsb3llZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBoZWlnaHQ6IDEyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbi5maXJzdGNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbjogMC43NWVtIDEuMTI1ZW07XHJcbn1cclxuLmJnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5LjM3NWVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICM0NDA5M2MpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA4LjE4NzVlbTtcclxuICAgIGhlaWdodDogOC4xODc1ZW07XHJcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xyXG59XHJcbmlvbi1ncmlkIHtcclxuICAgIG1hcmdpbjogMTRweCAxOHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbmlvbi1ncmlkIHAge1xyXG4gICAgbWFyZ2luOiAzMHB4IDBweDtcclxufVxyXG5pb24tdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3BhY2l0eTogNzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zMTI1ZW07XHJcbn1cclxuaW9uLWNoaXAge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1yb3cgLmdwcyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjMxMjVlbTtcclxufVxyXG5pb24tcm93IGlvbi10b2dnbGUge1xyXG4gICAgLS13aWR0aDogMzRweDtcclxuICAgIC0taGVpZ2h0OiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzlmOWY5ZjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjcxODc1ZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnRvZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaDYge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uYnJhbmNoZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG4uYnJhbmNoZXMgcCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwLjE4NzVlbSAwLjM3NWVtICMwMDAwMDAyOTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5hZGRyZXNzIHAge1xyXG4gICAgbWFyZ2luOiAwLjMxMjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuLmFkZCBwIHtcclxuICAgIG1hcmdpbjogMC4zMTI1ZW07XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbn1cclxuLnN1biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG59XHJcbi5xciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnFyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxufVxyXG4uY2hlY2sge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuaW9uLWNoZWNrYm94IHtcclxuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICM3MDcwNzA7XHJcbiAgICBvcGFjaXR5OiA3MCU7XHJcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogIzg3MTE3ODtcclxuICAgIC0tY2hlY2ttYXJrLXdpZHRoOiA0O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxufVxyXG5pb24tY29sIC5jb25maXJtIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xyXG59XHJcbi5jb25maXJtIHNwYW4ge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJ0biBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDcuNjg3NWVtO1xyXG4gICAgaGVpZ2h0OiAzLjEyNWVtO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "hs4o":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-employee/add-employee.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Employee</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"firstcard\" (click)=\"adduserImage()\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img src=\"https://banner2.cleanpng.com/20180319/sue/kisspng-camera-computer-icons-android-camera-icon-android-camera-shutter-icon-5ab02d20a19642.3023672915214953286619.jpg\" alt=\"\">\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-grid>\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Employee name\" [(ngModel)]=\"name\"></ion-input>\n      </ion-item>\n    </p>\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Employee number\"  [(ngModel)]=\"mobile\"></ion-input>\n      </ion-item>\n    </p>\n    <p>\n      Designation Tags\n      <ion-row>\n        <ion-textarea [(ngModel)]=\"tags\" placeholder=\"add designations with comma seperated\">\n         \n        </ion-textarea>\n      </ion-row>\n    </p>\n    <p>\n      Language Support\n      <ion-row>\n        <ion-textarea [(ngModel)]=\"language\" placeholder=\"add languages with comma seperated\">\n        </ion-textarea>\n      </ion-row>\n    </p>\n    <p>\n      Online Tele Support\n      <ion-row class=\"check\">\n        <ion-col>\n          <ion-checkbox   [(ngModel)]=\"chat\" (ionChange)=\"Chatstatus(chat)\" ></ion-checkbox>\n          <ion-label> Chat</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]=\"video\" (ionChange)=\"VideoStatus(video)\" ></ion-checkbox>\n          <ion-label> Video</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]=\"call\" (ionChange)=\"Callstatus(call)\"></ion-checkbox>\n          <ion-label> Call</ion-label>\n        </ion-col>\n      </ion-row>\n    </p>\n    <p>\n      Delivery Support\n      <ion-row class=\"check\">\n        <ion-col>\n          <ion-checkbox [(ngModel)]=\"delivery\" (ionChange)=\"Deliverystatus(delivery)\"></ion-checkbox>\n          <ion-label> Delivery</ion-label>\n        </ion-col>\n      </ion-row>\n    </p>\n\n    <ion-row class=\"tog\">\n      <p class=\"gps\">Call Record Access</p>\n      <ion-toggle checked [(ngModel)]=\"callrecord\" (ionChange)=\"Recordstatus(callrecord)\" mode=\"md\"></ion-toggle>\n    </ion-row>\n    <ion-row class=\"tog\">\n      <p class=\"gps\">Create Invoice</p>\n      <ion-toggle checked mode=\"md\" [(ngModel)]=\"invoice\" (ionChange)=\"Invoicestatus(invoice)\"></ion-toggle>\n    </ion-row>\n\n    <h6>Work Hour Settings</h6>\n    <p>\n      <ion-item>\n        <ion-select placeholder=\"Working Hours\"></ion-select>\n      </ion-item>\n    </p>\n    <ion-row class=\"branches\">\n      <ion-select placeholder=\"Branches\" interface=\"popover\"  [(ngModel)]=\"branch\">\n        <ion-select-option *ngFor=\"let br of branches\"  value=\"{{br.id}}\"  >{{br.branch_title}}</ion-select-option>\n      </ion-select>\n    </ion-row>\n    <ion-card class=\"card\">\n      <ion-row>\n        <ion-col class=\"address\">\n          <p>Address</p>\n          <ion-row class=\"add\">\n            <p>{{address}}</p>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"4\">\n          <img\n            src=\"https://play-lh.googleusercontent.com/0uRNRSe4iS6nhvfbBcoScHcBTx1PMmxkCx8rrEsI2UQcQeZ5ByKz8fkhwRqR3vttOg\"\n            alt=\"\">\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <p class=\"sun\">{{busines_name}} QR</p>\n    <p class=\"qr\">\n      <ion-icon name=\"qr-code-outline\" (click)=\"Qrimage()\"></ion-icon>\n    </p>\n    <ion-row class=\"check\">\n      <ion-col size=\"1\">\n        <ion-checkbox checked></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"confirm\">I agree for the <span>Terms and Conditions</span></p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"btn\">\n      <ion-button (click)=\"submit()\">Submit</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "y7iA":
/*!*****************************************************!*\
  !*** ./src/app/add-employee/add-employee.module.ts ***!
  \*****************************************************/
/*! exports provided: AddEmployeePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeePageModule", function() { return AddEmployeePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_employee_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-employee-routing.module */ "1+uD");
/* harmony import */ var _add_employee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-employee.page */ "4U3x");







let AddEmployeePageModule = class AddEmployeePageModule {
};
AddEmployeePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_employee_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddEmployeePageRoutingModule"]
        ],
        declarations: [_add_employee_page__WEBPACK_IMPORTED_MODULE_6__["AddEmployeePage"]]
    })
], AddEmployeePageModule);



/***/ })

}]);
//# sourceMappingURL=add-employee-add-employee-module-es2015.js.map