(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"],{

/***/ "AejP":
/*!*************************************************************!*\
  !*** ./node_modules/capacitor-audio-toggle/dist/esm/web.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

//# sourceMappingURL=web.js.map

/***/ }),

/***/ "cAXI":
/*!***************************************************************!*\
  !*** ./node_modules/capacitor-voice-recorder/dist/esm/web.js ***!
  \***************************************************************/
/*! exports provided: VoiceRecorderWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceRecorderWeb", function() { return VoiceRecorderWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

class VoiceRecorderWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    canDeviceVoiceRecord() {
        return Promise.reject(new Error('VoiceRecorder does not have web implementation'));
    }
    hasAudioRecordingPermission() {
        return Promise.reject(new Error('VoiceRecorder does not have web implementation'));
    }
    requestAudioRecordingPermission() {
        return Promise.reject(new Error('VoiceRecorder does not have web implementation'));
    }
    startRecording() {
        return Promise.reject(new Error('VoiceRecorder does not have web implementation'));
    }
    stopRecording() {
        return Promise.reject(new Error('VoiceRecorder does not have web implementation'));
    }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=web-es2015.js.map