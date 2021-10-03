(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"], {
    /***/
    "AejP": function AejP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0"); //# sourceMappingURL=web.js.map

      /***/

    },

    /***/
    "cAXI": function cAXI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoiceRecorderWeb", function () {
        return VoiceRecorderWeb;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");

      var VoiceRecorderWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
        _inherits(VoiceRecorderWeb, _capacitor_core__WEBP);

        var _super = _createSuper(VoiceRecorderWeb);

        function VoiceRecorderWeb() {
          _classCallCheck(this, VoiceRecorderWeb);

          return _super.apply(this, arguments);
        }

        _createClass(VoiceRecorderWeb, [{
          key: "canDeviceVoiceRecord",
          value: function canDeviceVoiceRecord() {
            return Promise.reject(new Error('VoiceRecorder does not have web implementation'));
          }
        }, {
          key: "hasAudioRecordingPermission",
          value: function hasAudioRecordingPermission() {
            return Promise.reject(new Error('VoiceRecorder does not have web implementation'));
          }
        }, {
          key: "requestAudioRecordingPermission",
          value: function requestAudioRecordingPermission() {
            return Promise.reject(new Error('VoiceRecorder does not have web implementation'));
          }
        }, {
          key: "startRecording",
          value: function startRecording() {
            return Promise.reject(new Error('VoiceRecorder does not have web implementation'));
          }
        }, {
          key: "stopRecording",
          value: function stopRecording() {
            return Promise.reject(new Error('VoiceRecorder does not have web implementation'));
          }
        }]);

        return VoiceRecorderWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]); //# sourceMappingURL=web.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=web-es5.js.map