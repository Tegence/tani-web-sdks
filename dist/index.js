'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var reactWebcam$1 = {exports: {}};

var reactWebcam = reactWebcam$1.exports;

var hasRequiredReactWebcam;

function requireReactWebcam () {
	if (hasRequiredReactWebcam) return reactWebcam$1.exports;
	hasRequiredReactWebcam = 1;
	(function (module, exports) {
		(function webpackUniversalModuleDefinition(root, factory) {
			module.exports = factory(React);
		})(reactWebcam, function(__WEBPACK_EXTERNAL_MODULE_react__) {
		return /******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};
		/******/
		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {
		/******/
		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId]) {
		/******/ 			return installedModules[moduleId].exports;
		/******/ 		}
		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			i: moduleId,
		/******/ 			l: false,
		/******/ 			exports: {}
		/******/ 		};
		/******/
		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ 		// Flag the module as loaded
		/******/ 		module.l = true;
		/******/
		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}
		/******/
		/******/
		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;
		/******/
		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;
		/******/
		/******/ 	// define getter function for harmony exports
		/******/ 	__webpack_require__.d = function(exports, name, getter) {
		/******/ 		if(!__webpack_require__.o(exports, name)) {
		/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
		/******/ 		}
		/******/ 	};
		/******/
		/******/ 	// define __esModule on exports
		/******/ 	__webpack_require__.r = function(exports) {
		/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
		/******/ 		}
		/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
		/******/ 	};
		/******/
		/******/ 	// create a fake namespace object
		/******/ 	// mode & 1: value is a module id, require it
		/******/ 	// mode & 2: merge all properties of value into the ns
		/******/ 	// mode & 4: return value when already ns object
		/******/ 	// mode & 8|1: behave like require
		/******/ 	__webpack_require__.t = function(value, mode) {
		/******/ 		if(mode & 1) value = __webpack_require__(value);
		/******/ 		if(mode & 8) return value;
		/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
		/******/ 		var ns = Object.create(null);
		/******/ 		__webpack_require__.r(ns);
		/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
		/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
		/******/ 		return ns;
		/******/ 	};
		/******/
		/******/ 	// getDefaultExport function for compatibility with non-harmony modules
		/******/ 	__webpack_require__.n = function(module) {
		/******/ 		var getter = module && module.__esModule ?
		/******/ 			function getDefault() { return module['default']; } :
		/******/ 			function getModuleExports() { return module; };
		/******/ 		__webpack_require__.d(getter, 'a', getter);
		/******/ 		return getter;
		/******/ 	};
		/******/
		/******/ 	// Object.prototype.hasOwnProperty.call
		/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
		/******/
		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";
		/******/
		/******/
		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(__webpack_require__.s = "./src/react-webcam.tsx");
		/******/ })
		/************************************************************************/
		/******/ ({

		/***/ "./src/react-webcam.tsx":
		/*!******************************!*\
		  !*** ./src/react-webcam.tsx ***!
		  \******************************/
		/*! exports provided: default */
		/***/ (function(module, __webpack_exports__, __webpack_require__) {
		__webpack_require__.r(__webpack_exports__);
		/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
		var __extends = (function () {
		    var extendStatics = function (d, b) {
		        extendStatics = Object.setPrototypeOf ||
		            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
		            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
		        return extendStatics(d, b);
		    };
		    return function (d, b) {
		        extendStatics(d, b);
		        function __() { this.constructor = d; }
		        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		    };
		})();
		var __assign = function () {
		    __assign = Object.assign || function(t) {
		        for (var s, i = 1, n = arguments.length; i < n; i++) {
		            s = arguments[i];
		            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
		                t[p] = s[p];
		        }
		        return t;
		    };
		    return __assign.apply(this, arguments);
		};
		var __rest = function (s, e) {
		    var t = {};
		    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
		        t[p] = s[p];
		    if (s != null && typeof Object.getOwnPropertySymbols === "function")
		        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
		            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
		                t[p[i]] = s[p[i]];
		        }
		    return t;
		};

		// polyfill based on https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
		(function polyfillGetUserMedia() {
		    if (typeof window === 'undefined') {
		        return;
		    }
		    // Older browsers might not implement mediaDevices at all, so we set an empty object first
		    if (navigator.mediaDevices === undefined) {
		        navigator.mediaDevices = {};
		    }
		    // Some browsers partially implement mediaDevices. We can't just assign an object
		    // with getUserMedia as it would overwrite existing properties.
		    // Here, we will just add the getUserMedia property if it's missing.
		    if (navigator.mediaDevices.getUserMedia === undefined) {
		        navigator.mediaDevices.getUserMedia = function (constraints) {
		            // First get ahold of the legacy getUserMedia, if present
		            var getUserMedia = navigator.getUserMedia ||
		                navigator.webkitGetUserMedia ||
		                navigator.mozGetUserMedia ||
		                navigator.msGetUserMedia;
		            // Some browsers just don't implement it - return a rejected promise with an error
		            // to keep a consistent interface
		            if (!getUserMedia) {
		                return Promise.reject(new Error("getUserMedia is not implemented in this browser"));
		            }
		            // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
		            return new Promise(function (resolve, reject) {
		                getUserMedia.call(navigator, constraints, resolve, reject);
		            });
		        };
		    }
		})();
		function hasGetUserMedia() {
		    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
		}
		var Webcam = /** @class */ (function (_super) {
		    __extends(Webcam, _super);
		    function Webcam(props) {
		        var _this = _super.call(this, props) || this;
		        _this.canvas = null;
		        _this.ctx = null;
		        _this.requestUserMediaId = 0;
		        _this.unmounted = false;
		        _this.state = {
		            hasUserMedia: false
		        };
		        return _this;
		    }
		    Webcam.prototype.componentDidMount = function () {
		        var _a = this, state = _a.state, props = _a.props;
		        this.unmounted = false;
		        if (!hasGetUserMedia()) {
		            props.onUserMediaError("getUserMedia not supported");
		            return;
		        }
		        if (!state.hasUserMedia) {
		            this.requestUserMedia();
		        }
		        if (props.children && typeof props.children != 'function') {
		            console.warn("children must be a function");
		        }
		    };
		    Webcam.prototype.componentDidUpdate = function (nextProps) {
		        var props = this.props;
		        if (!hasGetUserMedia()) {
		            props.onUserMediaError("getUserMedia not supported");
		            return;
		        }
		        var audioConstraintsChanged = JSON.stringify(nextProps.audioConstraints) !==
		            JSON.stringify(props.audioConstraints);
		        var videoConstraintsChanged = JSON.stringify(nextProps.videoConstraints) !==
		            JSON.stringify(props.videoConstraints);
		        var minScreenshotWidthChanged = nextProps.minScreenshotWidth !== props.minScreenshotWidth;
		        var minScreenshotHeightChanged = nextProps.minScreenshotHeight !== props.minScreenshotHeight;
		        if (videoConstraintsChanged ||
		            minScreenshotWidthChanged ||
		            minScreenshotHeightChanged) {
		            this.canvas = null;
		            this.ctx = null;
		        }
		        if (audioConstraintsChanged || videoConstraintsChanged) {
		            this.stopAndCleanup();
		            this.requestUserMedia();
		        }
		    };
		    Webcam.prototype.componentWillUnmount = function () {
		        this.unmounted = true;
		        this.stopAndCleanup();
		    };
		    Webcam.stopMediaStream = function (stream) {
		        if (stream) {
		            if (stream.getVideoTracks && stream.getAudioTracks) {
		                stream.getVideoTracks().map(function (track) {
		                    stream.removeTrack(track);
		                    track.stop();
		                });
		                stream.getAudioTracks().map(function (track) {
		                    stream.removeTrack(track);
		                    track.stop();
		                });
		            }
		            else {
		                stream.stop();
		            }
		        }
		    };
		    Webcam.prototype.stopAndCleanup = function () {
		        var state = this.state;
		        if (state.hasUserMedia) {
		            Webcam.stopMediaStream(this.stream);
		            if (state.src) {
		                window.URL.revokeObjectURL(state.src);
		            }
		        }
		    };
		    Webcam.prototype.getScreenshot = function (screenshotDimensions) {
		        var _a = this, state = _a.state, props = _a.props;
		        if (!state.hasUserMedia)
		            return null;
		        var canvas = this.getCanvas(screenshotDimensions);
		        return (canvas &&
		            canvas.toDataURL(props.screenshotFormat, props.screenshotQuality));
		    };
		    Webcam.prototype.getCanvas = function (screenshotDimensions) {
		        var _a = this, state = _a.state, props = _a.props;
		        if (!this.video) {
		            return null;
		        }
		        if (!state.hasUserMedia || !this.video.videoHeight)
		            return null;
		        if (!this.ctx) {
		            var canvasWidth = this.video.videoWidth;
		            var canvasHeight = this.video.videoHeight;
		            if (!this.props.forceScreenshotSourceSize) {
		                var aspectRatio = canvasWidth / canvasHeight;
		                canvasWidth = props.minScreenshotWidth || this.video.clientWidth;
		                canvasHeight = canvasWidth / aspectRatio;
		                if (props.minScreenshotHeight &&
		                    canvasHeight < props.minScreenshotHeight) {
		                    canvasHeight = props.minScreenshotHeight;
		                    canvasWidth = canvasHeight * aspectRatio;
		                }
		            }
		            this.canvas = document.createElement("canvas");
		            this.canvas.width = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvasWidth;
		            this.canvas.height = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvasHeight;
		            this.ctx = this.canvas.getContext("2d");
		        }
		        var _b = this, ctx = _b.ctx, canvas = _b.canvas;
		        if (ctx && canvas) {
		            // adjust the height and width of the canvas to the given dimensions
		            canvas.width = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvas.width;
		            canvas.height = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvas.height;
		            // mirror the screenshot
		            if (props.mirrored) {
		                ctx.translate(canvas.width, 0);
		                ctx.scale(-1, 1);
		            }
		            ctx.imageSmoothingEnabled = props.imageSmoothing;
		            ctx.drawImage(this.video, 0, 0, (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvas.width, (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvas.height);
		            // invert mirroring
		            if (props.mirrored) {
		                ctx.scale(-1, 1);
		                ctx.translate(-canvas.width, 0);
		            }
		        }
		        return canvas;
		    };
		    Webcam.prototype.requestUserMedia = function () {
		        var _this = this;
		        var props = this.props;
		        var sourceSelected = function (audioConstraints, videoConstraints) {
		            var constraints = {
		                video: typeof videoConstraints !== "undefined" ? videoConstraints : true
		            };
		            if (props.audio) {
		                constraints.audio =
		                    typeof audioConstraints !== "undefined" ? audioConstraints : true;
		            }
		            _this.requestUserMediaId++;
		            var myRequestUserMediaId = _this.requestUserMediaId;
		            navigator.mediaDevices
		                .getUserMedia(constraints)
		                .then(function (stream) {
		                if (_this.unmounted || myRequestUserMediaId !== _this.requestUserMediaId) {
		                    Webcam.stopMediaStream(stream);
		                }
		                else {
		                    _this.handleUserMedia(null, stream);
		                }
		            })
		                .catch(function (e) {
		                _this.handleUserMedia(e);
		            });
		        };
		        if ("mediaDevices" in navigator) {
		            sourceSelected(props.audioConstraints, props.videoConstraints);
		        }
		        else {
		            var optionalSource_1 = function (id) { return ({ optional: [{ sourceId: id }] }); };
		            var constraintToSourceId_1 = function (constraint) {
		                var deviceId = constraint.deviceId;
		                if (typeof deviceId === "string") {
		                    return deviceId;
		                }
		                if (Array.isArray(deviceId) && deviceId.length > 0) {
		                    return deviceId[0];
		                }
		                if (typeof deviceId === "object" && deviceId.ideal) {
		                    return deviceId.ideal;
		                }
		                return null;
		            };
		            // @ts-ignore: deprecated api
		            MediaStreamTrack.getSources(function (sources) {
		                var audioSource = null;
		                var videoSource = null;
		                sources.forEach(function (source) {
		                    if (source.kind === "audio") {
		                        audioSource = source.id;
		                    }
		                    else if (source.kind === "video") {
		                        videoSource = source.id;
		                    }
		                });
		                var audioSourceId = constraintToSourceId_1(props.audioConstraints);
		                if (audioSourceId) {
		                    audioSource = audioSourceId;
		                }
		                var videoSourceId = constraintToSourceId_1(props.videoConstraints);
		                if (videoSourceId) {
		                    videoSource = videoSourceId;
		                }
		                sourceSelected(optionalSource_1(audioSource), optionalSource_1(videoSource));
		            });
		        }
		    };
		    Webcam.prototype.handleUserMedia = function (err, stream) {
		        var props = this.props;
		        if (err || !stream) {
		            this.setState({ hasUserMedia: false });
		            props.onUserMediaError(err);
		            return;
		        }
		        this.stream = stream;
		        try {
		            if (this.video) {
		                this.video.srcObject = stream;
		            }
		            this.setState({ hasUserMedia: true });
		        }
		        catch (error) {
		            this.setState({
		                hasUserMedia: true,
		                src: window.URL.createObjectURL(stream)
		            });
		        }
		        props.onUserMedia(stream);
		    };
		    Webcam.prototype.render = function () {
		        var _this = this;
		        var _a = this, state = _a.state, props = _a.props;
		        var audio = props.audio; props.forceScreenshotSourceSize; var disablePictureInPicture = props.disablePictureInPicture; props.onUserMedia; props.onUserMediaError; props.screenshotFormat; props.screenshotQuality; props.minScreenshotWidth; props.minScreenshotHeight; props.audioConstraints; props.videoConstraints; props.imageSmoothing; var mirrored = props.mirrored, _b = props.style, style = _b === void 0 ? {} : _b, children = props.children, rest = __rest(props, ["audio", "forceScreenshotSourceSize", "disablePictureInPicture", "onUserMedia", "onUserMediaError", "screenshotFormat", "screenshotQuality", "minScreenshotWidth", "minScreenshotHeight", "audioConstraints", "videoConstraints", "imageSmoothing", "mirrored", "style", "children"]);
		        var videoStyle = mirrored ? __assign(__assign({}, style), { transform: (style.transform || "") + " scaleX(-1)" }) : style;
		        var childrenProps = {
		            getScreenshot: this.getScreenshot.bind(this),
		        };
		        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
		            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("video", __assign({ autoPlay: true, disablePictureInPicture: disablePictureInPicture, src: state.src, muted: !audio, playsInline: true, ref: function (ref) {
		                    _this.video = ref;
		                }, style: videoStyle }, rest)),
		            children && children(childrenProps)));
		    };
		    Webcam.defaultProps = {
		        audio: false,
		        disablePictureInPicture: false,
		        forceScreenshotSourceSize: false,
		        imageSmoothing: true,
		        mirrored: false,
		        onUserMedia: function () { return undefined; },
		        onUserMediaError: function () { return undefined; },
		        screenshotFormat: "image/webp",
		        screenshotQuality: 0.92,
		    };
		    return Webcam;
		}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
		/* harmony default export */ __webpack_exports__["default"] = (Webcam);


		/***/ }),

		/***/ "react":
		/*!**************************************************************************************!*\
		  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
		  \**************************************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

		/***/ })

		/******/ })["default"];
		});
		
	} (reactWebcam$1));
	return reactWebcam$1.exports;
}

var reactWebcamExports = requireReactWebcam();
var Webcam = /*@__PURE__*/getDefaultExportFromCjs(reactWebcamExports);

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && /*#__PURE__*/React.createContext(DefaultContext);

var _excluded$1 = ["attr", "size", "title"];
function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), true).forEach(function (r) { _defineProperty$2(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$2(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/React.createElement(node.tag, _objectSpread$2({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/React.createElement(IconBase, _extends({
    attr: _objectSpread$2({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties$1(props, _excluded$1);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread$2(_objectSpread$2({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/React.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function AiOutlineCamera (props) {
  return GenIcon({"attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"},"child":[]}]})(props);
}

// THIS FILE IS AUTO GENERATED
function PiCamera (props) {
  return GenIcon({"attr":{"viewBox":"0 0 256 256","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"},"child":[]}]})(props);
}function PiCloudArrowUp (props) {
  return GenIcon({"attr":{"viewBox":"0 0 256 256","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M178.34,165.66,160,147.31V208a8,8,0,0,1-16,0V147.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32ZM160,40A88.08,88.08,0,0,0,81.29,88.68,64,64,0,1,0,72,216h40a8,8,0,0,0,0-16H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.12A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,100.8,66,8,8,0,0,0,3.2,15.34,7.9,7.9,0,0,0,3.2-.68A88,88,0,0,0,160,40Z"},"child":[]}]})(props);
}

/**
 * Browser Image Compression
 * v2.0.2
 * by Donald <donaldcwl@gmail.com>
 * https://github.com/Donaldcwl/browser-image-compression
 */

function _mergeNamespaces$1(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(r){if("default"!==r&&!(r in e)){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,i.get?i:{enumerable:true,get:function(){return t[r]}});}}));})),Object.freeze(e)}function copyExifWithoutOrientation(e,t){return new Promise((function(r,i){let o;return getApp1Segment(e).then((function(e){try{return o=e,r(new Blob([t.slice(0,2),o,t.slice(2)],{type:"image/jpeg"}))}catch(e){return i(e)}}),i)}))}const getApp1Segment=e=>new Promise(((t,r)=>{const i=new FileReader;i.addEventListener("load",(({target:{result:e}})=>{const i=new DataView(e);let o=0;if(65496!==i.getUint16(o))return r("not a valid JPEG");for(o+=2;;){const a=i.getUint16(o);if(65498===a)break;const s=i.getUint16(o+2);if(65505===a&&1165519206===i.getUint32(o+4)){const a=o+10;let f;switch(i.getUint16(a)){case 18761:f=true;break;case 19789:f=false;break;default:return r("TIFF header contains invalid endian")}if(42!==i.getUint16(a+2,f))return r("TIFF header contains invalid version");const l=i.getUint32(a+4,f),c=a+l+2+12*i.getUint16(a+l,f);for(let e=a+l+2;e<c;e+=12){if(274==i.getUint16(e,f)){if(3!==i.getUint16(e+2,f))return r("Orientation data type is invalid");if(1!==i.getUint32(e+4,f))return r("Orientation data count is invalid");i.setUint16(e+8,1,f);break}}return t(e.slice(o,o+2+s))}o+=2+s;}return t(new Blob)})),i.readAsArrayBuffer(e);}));var e={},t={get exports(){return e},set exports(t){e=t;}};!function(e){var r,i,UZIP={};t.exports=UZIP,UZIP.parse=function(e,t){for(var r=UZIP.bin.readUshort,i=UZIP.bin.readUint,o=0,a={},s=new Uint8Array(e),f=s.length-4;101010256!=i(s,f);)f--;o=f;o+=4;var l=r(s,o+=4);r(s,o+=2);var c=i(s,o+=2),u=i(s,o+=4);o+=4,o=u;for(var h=0;h<l;h++){i(s,o),o+=4,o+=4,o+=4,i(s,o+=4);c=i(s,o+=4);var d=i(s,o+=4),A=r(s,o+=4),g=r(s,o+2),p=r(s,o+4);o+=6;var m=i(s,o+=8);o+=4,o+=A+g+p,UZIP._readLocal(s,m,a,c,d,t);}return a},UZIP._readLocal=function(e,t,r,i,o,a){var s=UZIP.bin.readUshort,f=UZIP.bin.readUint;f(e,t),s(e,t+=4),s(e,t+=2);var l=s(e,t+=2);f(e,t+=2),f(e,t+=4),t+=4;var c=s(e,t+=8),u=s(e,t+=2);t+=2;var h=UZIP.bin.readUTF8(e,t,c);if(t+=c,t+=u,a)r[h]={size:o,csize:i};else {var d=new Uint8Array(e.buffer,t);if(0==l)r[h]=new Uint8Array(d.buffer.slice(t,t+i));else {if(8!=l)throw "unknown compression method: "+l;var A=new Uint8Array(o);UZIP.inflateRaw(d,A),r[h]=A;}}},UZIP.inflateRaw=function(e,t){return UZIP.F.inflate(e,t)},UZIP.inflate=function(e,t){return e[0],e[1],UZIP.inflateRaw(new Uint8Array(e.buffer,e.byteOffset+2,e.length-6),t)},UZIP.deflate=function(e,t){null==t&&(t={level:6});var r=0,i=new Uint8Array(50+Math.floor(1.1*e.length));i[r]=120,i[r+1]=156,r+=2,r=UZIP.F.deflateRaw(e,i,r,t.level);var o=UZIP.adler(e,0,e.length);return i[r+0]=o>>>24&255,i[r+1]=o>>>16&255,i[r+2]=o>>>8&255,i[r+3]=o>>>0&255,new Uint8Array(i.buffer,0,r+4)},UZIP.deflateRaw=function(e,t){null==t&&(t={level:6});var r=new Uint8Array(50+Math.floor(1.1*e.length)),i=UZIP.F.deflateRaw(e,r,i,t.level);return new Uint8Array(r.buffer,0,i)},UZIP.encode=function(e,t){null==t&&(t=false);var r=0,i=UZIP.bin.writeUint,o=UZIP.bin.writeUshort,a={};for(var s in e){var f=!UZIP._noNeed(s)&&!t,l=e[s],c=UZIP.crc.crc(l,0,l.length);a[s]={cpr:f,usize:l.length,crc:c,file:f?UZIP.deflateRaw(l):l};}for(var s in a)r+=a[s].file.length+30+46+2*UZIP.bin.sizeUTF8(s);r+=22;var u=new Uint8Array(r),h=0,d=[];for(var s in a){var A=a[s];d.push(h),h=UZIP._writeHeader(u,h,s,A,0);}var g=0,p=h;for(var s in a){A=a[s];d.push(h),h=UZIP._writeHeader(u,h,s,A,1,d[g++]);}var m=h-p;return i(u,h,101010256),h+=4,o(u,h+=4,g),o(u,h+=2,g),i(u,h+=2,m),i(u,h+=4,p),h+=4,h+=2,u.buffer},UZIP._noNeed=function(e){var t=e.split(".").pop().toLowerCase();return  -1!="png,jpg,jpeg,zip".indexOf(t)},UZIP._writeHeader=function(e,t,r,i,o,a){var s=UZIP.bin.writeUint,f=UZIP.bin.writeUshort,l=i.file;return s(e,t,0==o?67324752:33639248),t+=4,1==o&&(t+=2),f(e,t,20),f(e,t+=2,0),f(e,t+=2,i.cpr?8:0),s(e,t+=2,0),s(e,t+=4,i.crc),s(e,t+=4,l.length),s(e,t+=4,i.usize),f(e,t+=4,UZIP.bin.sizeUTF8(r)),f(e,t+=2,0),t+=2,1==o&&(t+=2,t+=2,s(e,t+=6,a),t+=4),t+=UZIP.bin.writeUTF8(e,t,r),0==o&&(e.set(l,t),t+=l.length),t},UZIP.crc={table:function(){for(var e=new Uint32Array(256),t=0;t<256;t++){for(var r=t,i=0;i<8;i++)1&r?r=3988292384^r>>>1:r>>>=1;e[t]=r;}return e}(),update:function(e,t,r,i){for(var o=0;o<i;o++)e=UZIP.crc.table[255&(e^t[r+o])]^e>>>8;return e},crc:function(e,t,r){return 4294967295^UZIP.crc.update(4294967295,e,t,r)}},UZIP.adler=function(e,t,r){for(var i=1,o=0,a=t,s=t+r;a<s;){for(var f=Math.min(a+5552,s);a<f;)o+=i+=e[a++];i%=65521,o%=65521;}return o<<16|i},UZIP.bin={readUshort:function(e,t){return e[t]|e[t+1]<<8},writeUshort:function(e,t,r){e[t]=255&r,e[t+1]=r>>8&255;},readUint:function(e,t){return 16777216*e[t+3]+(e[t+2]<<16|e[t+1]<<8|e[t])},writeUint:function(e,t,r){e[t]=255&r,e[t+1]=r>>8&255,e[t+2]=r>>16&255,e[t+3]=r>>24&255;},readASCII:function(e,t,r){for(var i="",o=0;o<r;o++)i+=String.fromCharCode(e[t+o]);return i},writeASCII:function(e,t,r){for(var i=0;i<r.length;i++)e[t+i]=r.charCodeAt(i);},pad:function(e){return e.length<2?"0"+e:e},readUTF8:function(e,t,r){for(var i,o="",a=0;a<r;a++)o+="%"+UZIP.bin.pad(e[t+a].toString(16));try{i=decodeURIComponent(o);}catch(i){return UZIP.bin.readASCII(e,t,r)}return i},writeUTF8:function(e,t,r){for(var i=r.length,o=0,a=0;a<i;a++){var s=r.charCodeAt(a);if(0==(4294967168&s))e[t+o]=s,o++;else if(0==(4294965248&s))e[t+o]=192|s>>6,e[t+o+1]=128|s>>0&63,o+=2;else if(0==(4294901760&s))e[t+o]=224|s>>12,e[t+o+1]=128|s>>6&63,e[t+o+2]=128|s>>0&63,o+=3;else {if(0!=(4292870144&s))throw "e";e[t+o]=240|s>>18,e[t+o+1]=128|s>>12&63,e[t+o+2]=128|s>>6&63,e[t+o+3]=128|s>>0&63,o+=4;}}return o},sizeUTF8:function(e){for(var t=e.length,r=0,i=0;i<t;i++){var o=e.charCodeAt(i);if(0==(4294967168&o))r++;else if(0==(4294965248&o))r+=2;else if(0==(4294901760&o))r+=3;else {if(0!=(4292870144&o))throw "e";r+=4;}}return r}},UZIP.F={},UZIP.F.deflateRaw=function(e,t,r,i){var o=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]][i],a=UZIP.F.U,s=UZIP.F._goodIndex;UZIP.F._hash;var f=UZIP.F._putsE,l=0,c=r<<3,u=0,h=e.length;if(0==i){for(;l<h;){f(t,c,l+(_=Math.min(65535,h-l))==h?1:0),c=UZIP.F._copyExact(e,l,_,t,c+8),l+=_;}return c>>>3}var d=a.lits,A=a.strt,g=a.prev,p=0,m=0,w=0,v=0,b=0,y=0;for(h>2&&(A[y=UZIP.F._hash(e,0)]=0),l=0;l<h;l++){if(b=y,l+1<h-2){y=UZIP.F._hash(e,l+1);var E=l+1&32767;g[E]=A[y],A[y]=E;}if(u<=l){(p>14e3||m>26697)&&h-l>100&&(u<l&&(d[p]=l-u,p+=2,u=l),c=UZIP.F._writeBlock(l==h-1||u==h?1:0,d,p,v,e,w,l-w,t,c),p=m=v=0,w=l);var F=0;l<h-2&&(F=UZIP.F._bestMatch(e,l,g,b,Math.min(o[2],h-l),o[3]));var _=F>>>16,B=65535&F;if(0!=F){B=65535&F;var U=s(_=F>>>16,a.of0);a.lhst[257+U]++;var C=s(B,a.df0);a.dhst[C]++,v+=a.exb[U]+a.dxb[C],d[p]=_<<23|l-u,d[p+1]=B<<16|U<<8|C,p+=2,u=l+_;}else a.lhst[e[l]]++;m++;}}for(w==l&&0!=e.length||(u<l&&(d[p]=l-u,p+=2,u=l),c=UZIP.F._writeBlock(1,d,p,v,e,w,l-w,t,c),p=0,m=0,p=m=v=0,w=l);0!=(7&c);)c++;return c>>>3},UZIP.F._bestMatch=function(e,t,r,i,o,a){var s=32767&t,f=r[s],l=s-f+32768&32767;if(f==s||i!=UZIP.F._hash(e,t-l))return 0;for(var c=0,u=0,h=Math.min(32767,t);l<=h&&0!=--a&&f!=s;){if(0==c||e[t+c]==e[t+c-l]){var d=UZIP.F._howLong(e,t,l);if(d>c){if(u=l,(c=d)>=o)break;l+2<d&&(d=l+2);for(var A=0,g=0;g<d-2;g++){var p=t-l+g+32768&32767,m=p-r[p]+32768&32767;m>A&&(A=m,f=p);}}}l+=(s=f)-(f=r[s])+32768&32767;}return c<<16|u},UZIP.F._howLong=function(e,t,r){if(e[t]!=e[t-r]||e[t+1]!=e[t+1-r]||e[t+2]!=e[t+2-r])return 0;var i=t,o=Math.min(e.length,t+258);for(t+=3;t<o&&e[t]==e[t-r];)t++;return t-i},UZIP.F._hash=function(e,t){return (e[t]<<8|e[t+1])+(e[t+2]<<4)&65535},UZIP.saved=0,UZIP.F._writeBlock=function(e,t,r,i,o,a,s,f,l){var c,u,h,d,A,g,p,m,w,v=UZIP.F.U,b=UZIP.F._putsF,y=UZIP.F._putsE;v.lhst[256]++,u=(c=UZIP.F.getTrees())[0],h=c[1],d=c[2],A=c[3],g=c[4],p=c[5],m=c[6],w=c[7];var E=32+(0==(l+3&7)?0:8-(l+3&7))+(s<<3),F=i+UZIP.F.contSize(v.fltree,v.lhst)+UZIP.F.contSize(v.fdtree,v.dhst),_=i+UZIP.F.contSize(v.ltree,v.lhst)+UZIP.F.contSize(v.dtree,v.dhst);_+=14+3*p+UZIP.F.contSize(v.itree,v.ihst)+(2*v.ihst[16]+3*v.ihst[17]+7*v.ihst[18]);for(var B=0;B<286;B++)v.lhst[B]=0;for(B=0;B<30;B++)v.dhst[B]=0;for(B=0;B<19;B++)v.ihst[B]=0;var U=E<F&&E<_?0:F<_?1:2;if(b(f,l,e),b(f,l+1,U),l+=3,0==U){for(;0!=(7&l);)l++;l=UZIP.F._copyExact(o,a,s,f,l);}else {var C,I;if(1==U&&(C=v.fltree,I=v.fdtree),2==U){UZIP.F.makeCodes(v.ltree,u),UZIP.F.revCodes(v.ltree,u),UZIP.F.makeCodes(v.dtree,h),UZIP.F.revCodes(v.dtree,h),UZIP.F.makeCodes(v.itree,d),UZIP.F.revCodes(v.itree,d),C=v.ltree,I=v.dtree,y(f,l,A-257),y(f,l+=5,g-1),y(f,l+=5,p-4),l+=4;for(var Q=0;Q<p;Q++)y(f,l+3*Q,v.itree[1+(v.ordr[Q]<<1)]);l+=3*p,l=UZIP.F._codeTiny(m,v.itree,f,l),l=UZIP.F._codeTiny(w,v.itree,f,l);}for(var M=a,x=0;x<r;x+=2){for(var S=t[x],R=S>>>23,T=M+(8388607&S);M<T;)l=UZIP.F._writeLit(o[M++],C,f,l);if(0!=R){var O=t[x+1],P=O>>16,H=O>>8&255,L=255&O;y(f,l=UZIP.F._writeLit(257+H,C,f,l),R-v.of0[H]),l+=v.exb[H],b(f,l=UZIP.F._writeLit(L,I,f,l),P-v.df0[L]),l+=v.dxb[L],M+=R;}}l=UZIP.F._writeLit(256,C,f,l);}return l},UZIP.F._copyExact=function(e,t,r,i,o){var a=o>>>3;return i[a]=r,i[a+1]=r>>>8,i[a+2]=255-i[a],i[a+3]=255-i[a+1],a+=4,i.set(new Uint8Array(e.buffer,t,r),a),o+(r+4<<3)},UZIP.F.getTrees=function(){for(var e=UZIP.F.U,t=UZIP.F._hufTree(e.lhst,e.ltree,15),r=UZIP.F._hufTree(e.dhst,e.dtree,15),i=[],o=UZIP.F._lenCodes(e.ltree,i),a=[],s=UZIP.F._lenCodes(e.dtree,a),f=0;f<i.length;f+=2)e.ihst[i[f]]++;for(f=0;f<a.length;f+=2)e.ihst[a[f]]++;for(var l=UZIP.F._hufTree(e.ihst,e.itree,7),c=19;c>4&&0==e.itree[1+(e.ordr[c-1]<<1)];)c--;return [t,r,l,o,s,c,i,a]},UZIP.F.getSecond=function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(e[r+1]);return t},UZIP.F.nonZero=function(e){for(var t="",r=0;r<e.length;r+=2)0!=e[r+1]&&(t+=(r>>1)+",");return t},UZIP.F.contSize=function(e,t){for(var r=0,i=0;i<t.length;i++)r+=t[i]*e[1+(i<<1)];return r},UZIP.F._codeTiny=function(e,t,r,i){for(var o=0;o<e.length;o+=2){var a=e[o],s=e[o+1];i=UZIP.F._writeLit(a,t,r,i);var f=16==a?2:17==a?3:7;a>15&&(UZIP.F._putsE(r,i,s,f),i+=f);}return i},UZIP.F._lenCodes=function(e,t){for(var r=e.length;2!=r&&0==e[r-1];)r-=2;for(var i=0;i<r;i+=2){var o=e[i+1],a=i+3<r?e[i+3]:-1,s=i+5<r?e[i+5]:-1,f=0==i?-1:e[i-1];if(0==o&&a==o&&s==o){for(var l=i+5;l+2<r&&e[l+2]==o;)l+=2;(c=Math.min(l+1-i>>>1,138))<11?t.push(17,c-3):t.push(18,c-11),i+=2*c-2;}else if(o==f&&a==o&&s==o){for(l=i+5;l+2<r&&e[l+2]==o;)l+=2;var c=Math.min(l+1-i>>>1,6);t.push(16,c-3),i+=2*c-2;}else t.push(o,0);}return r>>>1},UZIP.F._hufTree=function(e,t,r){var i=[],o=e.length,a=t.length,s=0;for(s=0;s<a;s+=2)t[s]=0,t[s+1]=0;for(s=0;s<o;s++)0!=e[s]&&i.push({lit:s,f:e[s]});var f=i.length,l=i.slice(0);if(0==f)return 0;if(1==f){var c=i[0].lit;l=0==c?1:0;return t[1+(c<<1)]=1,t[1+(l<<1)]=1,1}i.sort((function(e,t){return e.f-t.f}));var u=i[0],h=i[1],d=0,A=1,g=2;for(i[0]={lit:-1,f:u.f+h.f,l:u,r:h,d:0};A!=f-1;)u=d!=A&&(g==f||i[d].f<i[g].f)?i[d++]:i[g++],h=d!=A&&(g==f||i[d].f<i[g].f)?i[d++]:i[g++],i[A++]={lit:-1,f:u.f+h.f,l:u,r:h};var p=UZIP.F.setDepth(i[A-1],0);for(p>r&&(UZIP.F.restrictDepth(l,r,p),p=r),s=0;s<f;s++)t[1+(l[s].lit<<1)]=l[s].d;return p},UZIP.F.setDepth=function(e,t){return  -1!=e.lit?(e.d=t,t):Math.max(UZIP.F.setDepth(e.l,t+1),UZIP.F.setDepth(e.r,t+1))},UZIP.F.restrictDepth=function(e,t,r){var i=0,o=1<<r-t,a=0;for(e.sort((function(e,t){return t.d==e.d?e.f-t.f:t.d-e.d})),i=0;i<e.length&&e[i].d>t;i++){var s=e[i].d;e[i].d=t,a+=o-(1<<r-s);}for(a>>>=r-t;a>0;){(s=e[i].d)<t?(e[i].d++,a-=1<<t-s-1):i++;}for(;i>=0;i--)e[i].d==t&&a<0&&(e[i].d--,a++);0!=a&&console.log("debt left");},UZIP.F._goodIndex=function(e,t){var r=0;return t[16|r]<=e&&(r|=16),t[8|r]<=e&&(r|=8),t[4|r]<=e&&(r|=4),t[2|r]<=e&&(r|=2),t[1|r]<=e&&(r|=1),r},UZIP.F._writeLit=function(e,t,r,i){return UZIP.F._putsF(r,i,t[e<<1]),i+t[1+(e<<1)]},UZIP.F.inflate=function(e,t){var r=Uint8Array;if(3==e[0]&&0==e[1])return t||new r(0);var i=UZIP.F,o=i._bitsF,a=i._bitsE,s=i._decodeTiny,f=i.makeCodes,l=i.codes2map,c=i._get17,u=i.U,h=null==t;h&&(t=new r(e.length>>>2<<3));for(var d,A,g=0,p=0,m=0,w=0,v=0,b=0,y=0,E=0,F=0;0==g;)if(g=o(e,F,1),p=o(e,F+1,2),F+=3,0!=p){if(h&&(t=UZIP.F._check(t,E+(1<<17))),1==p&&(d=u.flmap,A=u.fdmap,b=511,y=31),2==p){m=a(e,F,5)+257,w=a(e,F+5,5)+1,v=a(e,F+10,4)+4,F+=14;for(var _=0;_<38;_+=2)u.itree[_]=0,u.itree[_+1]=0;var B=1;for(_=0;_<v;_++){var U=a(e,F+3*_,3);u.itree[1+(u.ordr[_]<<1)]=U,U>B&&(B=U);}F+=3*v,f(u.itree,B),l(u.itree,B,u.imap),d=u.lmap,A=u.dmap,F=s(u.imap,(1<<B)-1,m+w,e,F,u.ttree);var C=i._copyOut(u.ttree,0,m,u.ltree);b=(1<<C)-1;var I=i._copyOut(u.ttree,m,w,u.dtree);y=(1<<I)-1,f(u.ltree,C),l(u.ltree,C,d),f(u.dtree,I),l(u.dtree,I,A);}for(;;){var Q=d[c(e,F)&b];F+=15&Q;var M=Q>>>4;if(M>>>8==0)t[E++]=M;else {if(256==M)break;var x=E+M-254;if(M>264){var S=u.ldef[M-257];x=E+(S>>>3)+a(e,F,7&S),F+=7&S;}var R=A[c(e,F)&y];F+=15&R;var T=R>>>4,O=u.ddef[T],P=(O>>>4)+o(e,F,15&O);for(F+=15&O,h&&(t=UZIP.F._check(t,E+(1<<17)));E<x;)t[E]=t[E++-P],t[E]=t[E++-P],t[E]=t[E++-P],t[E]=t[E++-P];E=x;}}}else {0!=(7&F)&&(F+=8-(7&F));var H=4+(F>>>3),L=e[H-4]|e[H-3]<<8;h&&(t=UZIP.F._check(t,E+L)),t.set(new r(e.buffer,e.byteOffset+H,L),E),F=H+L<<3,E+=L;}return t.length==E?t:t.slice(0,E)},UZIP.F._check=function(e,t){var r=e.length;if(t<=r)return e;var i=new Uint8Array(Math.max(r<<1,t));return i.set(e,0),i},UZIP.F._decodeTiny=function(e,t,r,i,o,a){for(var s=UZIP.F._bitsE,f=UZIP.F._get17,l=0;l<r;){var c=e[f(i,o)&t];o+=15&c;var u=c>>>4;if(u<=15)a[l]=u,l++;else {var h=0,d=0;16==u?(d=3+s(i,o,2),o+=2,h=a[l-1]):17==u?(d=3+s(i,o,3),o+=3):18==u&&(d=11+s(i,o,7),o+=7);for(var A=l+d;l<A;)a[l]=h,l++;}}return o},UZIP.F._copyOut=function(e,t,r,i){for(var o=0,a=0,s=i.length>>>1;a<r;){var f=e[a+t];i[a<<1]=0,i[1+(a<<1)]=f,f>o&&(o=f),a++;}for(;a<s;)i[a<<1]=0,i[1+(a<<1)]=0,a++;return o},UZIP.F.makeCodes=function(e,t){for(var r,i,o,a,s=UZIP.F.U,f=e.length,l=s.bl_count,c=0;c<=t;c++)l[c]=0;for(c=1;c<f;c+=2)l[e[c]]++;var u=s.next_code;for(r=0,l[0]=0,i=1;i<=t;i++)r=r+l[i-1]<<1,u[i]=r;for(o=0;o<f;o+=2)0!=(a=e[o+1])&&(e[o]=u[a],u[a]++);},UZIP.F.codes2map=function(e,t,r){for(var i=e.length,o=UZIP.F.U.rev15,a=0;a<i;a+=2)if(0!=e[a+1])for(var s=a>>1,f=e[a+1],l=s<<4|f,c=t-f,u=e[a]<<c,h=u+(1<<c);u!=h;){r[o[u]>>>15-t]=l,u++;}},UZIP.F.revCodes=function(e,t){for(var r=UZIP.F.U.rev15,i=15-t,o=0;o<e.length;o+=2){var a=e[o]<<t-e[o+1];e[o]=r[a]>>>i;}},UZIP.F._putsE=function(e,t,r){r<<=7&t;var i=t>>>3;e[i]|=r,e[i+1]|=r>>>8;},UZIP.F._putsF=function(e,t,r){r<<=7&t;var i=t>>>3;e[i]|=r,e[i+1]|=r>>>8,e[i+2]|=r>>>16;},UZIP.F._bitsE=function(e,t,r){return (e[t>>>3]|e[1+(t>>>3)]<<8)>>>(7&t)&(1<<r)-1},UZIP.F._bitsF=function(e,t,r){return (e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16)>>>(7&t)&(1<<r)-1},UZIP.F._get17=function(e,t){return (e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16)>>>(7&t)},UZIP.F._get25=function(e,t){return (e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16|e[3+(t>>>3)]<<24)>>>(7&t)},UZIP.F.U=(r=Uint16Array,i=Uint32Array,{next_code:new r(16),bl_count:new r(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new r(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new i(32),flmap:new r(512),fltree:[],fdmap:new r(32),fdtree:[],lmap:new r(32768),ltree:[],ttree:[],dmap:new r(32768),dtree:[],imap:new r(512),itree:[],rev15:new r(32768),lhst:new i(286),dhst:new i(30),ihst:new i(19),lits:new i(15e3),strt:new r(65536),prev:new r(32768)}),function(){for(var e=UZIP.F.U,t=0;t<32768;t++){var r=t;r=(4278255360&(r=(4042322160&(r=(3435973836&(r=(2863311530&r)>>>1|(1431655765&r)<<1))>>>2|(858993459&r)<<2))>>>4|(252645135&r)<<4))>>>8|(16711935&r)<<8,e.rev15[t]=(r>>>16|r<<16)>>>17;}function pushV(e,t,r){for(;0!=t--;)e.push(0,r);}for(t=0;t<32;t++)e.ldef[t]=e.of0[t]<<3|e.exb[t],e.ddef[t]=e.df0[t]<<4|e.dxb[t];pushV(e.fltree,144,8),pushV(e.fltree,112,9),pushV(e.fltree,24,7),pushV(e.fltree,8,8),UZIP.F.makeCodes(e.fltree,9),UZIP.F.codes2map(e.fltree,9,e.flmap),UZIP.F.revCodes(e.fltree,9),pushV(e.fdtree,32,5),UZIP.F.makeCodes(e.fdtree,5),UZIP.F.codes2map(e.fdtree,5,e.fdmap),UZIP.F.revCodes(e.fdtree,5),pushV(e.itree,19,0),pushV(e.ltree,286,0),pushV(e.dtree,30,0),pushV(e.ttree,320,0);}();}();var UZIP=_mergeNamespaces$1({__proto__:null,default:e},[e]);const UPNG=function(){var e={nextZero(e,t){for(;0!=e[t];)t++;return t},readUshort:(e,t)=>e[t]<<8|e[t+1],writeUshort(e,t,r){e[t]=r>>8&255,e[t+1]=255&r;},readUint:(e,t)=>16777216*e[t]+(e[t+1]<<16|e[t+2]<<8|e[t+3]),writeUint(e,t,r){e[t]=r>>24&255,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r;},readASCII(e,t,r){let i="";for(let o=0;o<r;o++)i+=String.fromCharCode(e[t+o]);return i},writeASCII(e,t,r){for(let i=0;i<r.length;i++)e[t+i]=r.charCodeAt(i);},readBytes(e,t,r){const i=[];for(let o=0;o<r;o++)i.push(e[t+o]);return i},pad:e=>e.length<2?`0${e}`:e,readUTF8(t,r,i){let o,a="";for(let o=0;o<i;o++)a+=`%${e.pad(t[r+o].toString(16))}`;try{o=decodeURIComponent(a);}catch(o){return e.readASCII(t,r,i)}return o}};function decodeImage(t,r,i,o){const a=r*i,s=_getBPP(o),f=Math.ceil(r*s/8),l=new Uint8Array(4*a),c=new Uint32Array(l.buffer),{ctype:u}=o,{depth:h}=o,d=e.readUshort;if(6==u){const e=a<<2;if(8==h)for(var A=0;A<e;A+=4)l[A]=t[A],l[A+1]=t[A+1],l[A+2]=t[A+2],l[A+3]=t[A+3];if(16==h)for(A=0;A<e;A++)l[A]=t[A<<1];}else if(2==u){const e=o.tabs.tRNS;if(null==e){if(8==h)for(A=0;A<a;A++){var g=3*A;c[A]=255<<24|t[g+2]<<16|t[g+1]<<8|t[g];}if(16==h)for(A=0;A<a;A++){g=6*A;c[A]=255<<24|t[g+4]<<16|t[g+2]<<8|t[g];}}else {var p=e[0];const r=e[1],i=e[2];if(8==h)for(A=0;A<a;A++){var m=A<<2;g=3*A;c[A]=255<<24|t[g+2]<<16|t[g+1]<<8|t[g],t[g]==p&&t[g+1]==r&&t[g+2]==i&&(l[m+3]=0);}if(16==h)for(A=0;A<a;A++){m=A<<2,g=6*A;c[A]=255<<24|t[g+4]<<16|t[g+2]<<8|t[g],d(t,g)==p&&d(t,g+2)==r&&d(t,g+4)==i&&(l[m+3]=0);}}}else if(3==u){const e=o.tabs.PLTE,s=o.tabs.tRNS,c=s?s.length:0;if(1==h)for(var w=0;w<i;w++){var v=w*f,b=w*r;for(A=0;A<r;A++){m=b+A<<2;var y=3*(E=t[v+(A>>3)]>>7-((7&A)<<0)&1);l[m]=e[y],l[m+1]=e[y+1],l[m+2]=e[y+2],l[m+3]=E<c?s[E]:255;}}if(2==h)for(w=0;w<i;w++)for(v=w*f,b=w*r,A=0;A<r;A++){m=b+A<<2,y=3*(E=t[v+(A>>2)]>>6-((3&A)<<1)&3);l[m]=e[y],l[m+1]=e[y+1],l[m+2]=e[y+2],l[m+3]=E<c?s[E]:255;}if(4==h)for(w=0;w<i;w++)for(v=w*f,b=w*r,A=0;A<r;A++){m=b+A<<2,y=3*(E=t[v+(A>>1)]>>4-((1&A)<<2)&15);l[m]=e[y],l[m+1]=e[y+1],l[m+2]=e[y+2],l[m+3]=E<c?s[E]:255;}if(8==h)for(A=0;A<a;A++){var E;m=A<<2,y=3*(E=t[A]);l[m]=e[y],l[m+1]=e[y+1],l[m+2]=e[y+2],l[m+3]=E<c?s[E]:255;}}else if(4==u){if(8==h)for(A=0;A<a;A++){m=A<<2;var F=t[_=A<<1];l[m]=F,l[m+1]=F,l[m+2]=F,l[m+3]=t[_+1];}if(16==h)for(A=0;A<a;A++){var _;m=A<<2,F=t[_=A<<2];l[m]=F,l[m+1]=F,l[m+2]=F,l[m+3]=t[_+2];}}else if(0==u)for(p=o.tabs.tRNS?o.tabs.tRNS:-1,w=0;w<i;w++){const e=w*f,i=w*r;if(1==h)for(var B=0;B<r;B++){var U=(F=255*(t[e+(B>>>3)]>>>7-(7&B)&1))==255*p?0:255;c[i+B]=U<<24|F<<16|F<<8|F;}else if(2==h)for(B=0;B<r;B++){U=(F=85*(t[e+(B>>>2)]>>>6-((3&B)<<1)&3))==85*p?0:255;c[i+B]=U<<24|F<<16|F<<8|F;}else if(4==h)for(B=0;B<r;B++){U=(F=17*(t[e+(B>>>1)]>>>4-((1&B)<<2)&15))==17*p?0:255;c[i+B]=U<<24|F<<16|F<<8|F;}else if(8==h)for(B=0;B<r;B++){U=(F=t[e+B])==p?0:255;c[i+B]=U<<24|F<<16|F<<8|F;}else if(16==h)for(B=0;B<r;B++){F=t[e+(B<<1)],U=d(t,e+(B<<1))==p?0:255;c[i+B]=U<<24|F<<16|F<<8|F;}}return l}function _decompress(e,r,i,o){const a=_getBPP(e),s=Math.ceil(i*a/8),f=new Uint8Array((s+1+e.interlace)*o);return r=e.tabs.CgBI?t(r,f):_inflate(r,f),0==e.interlace?r=_filterZero(r,e,0,i,o):1==e.interlace&&(r=function _readInterlace(e,t){const r=t.width,i=t.height,o=_getBPP(t),a=o>>3,s=Math.ceil(r*o/8),f=new Uint8Array(i*s);let l=0;const c=[0,0,4,0,2,0,1],u=[0,4,0,2,0,1,0],h=[8,8,8,4,4,2,2],d=[8,8,4,4,2,2,1];let A=0;for(;A<7;){const p=h[A],m=d[A];let w=0,v=0,b=c[A];for(;b<i;)b+=p,v++;let y=u[A];for(;y<r;)y+=m,w++;const E=Math.ceil(w*o/8);_filterZero(e,t,l,w,v);let F=0,_=c[A];for(;_<i;){let t=u[A],i=l+F*E<<3;for(;t<r;){var g;if(1==o)g=(g=e[i>>3])>>7-(7&i)&1,f[_*s+(t>>3)]|=g<<7-((7&t)<<0);if(2==o)g=(g=e[i>>3])>>6-(7&i)&3,f[_*s+(t>>2)]|=g<<6-((3&t)<<1);if(4==o)g=(g=e[i>>3])>>4-(7&i)&15,f[_*s+(t>>1)]|=g<<4-((1&t)<<2);if(o>=8){const r=_*s+t*a;for(let t=0;t<a;t++)f[r+t]=e[(i>>3)+t];}i+=o,t+=m;}F++,_+=p;}w*v!=0&&(l+=v*(1+E)),A+=1;}return f}(r,e)),r}function _inflate(e,r){return t(new Uint8Array(e.buffer,2,e.length-6),r)}var t=function(){const e={H:{}};return e.H.N=function(t,r){const i=Uint8Array;let o,a,s=0,f=0,l=0,c=0,u=0,h=0,d=0,A=0,g=0;if(3==t[0]&&0==t[1])return r||new i(0);const p=e.H,m=p.b,w=p.e,v=p.R,b=p.n,y=p.A,E=p.Z,F=p.m,_=null==r;for(_&&(r=new i(t.length>>>2<<5));0==s;)if(s=m(t,g,1),f=m(t,g+1,2),g+=3,0!=f){if(_&&(r=e.H.W(r,A+(1<<17))),1==f&&(o=F.J,a=F.h,h=511,d=31),2==f){l=w(t,g,5)+257,c=w(t,g+5,5)+1,u=w(t,g+10,4)+4,g+=14;let e=1;for(var B=0;B<38;B+=2)F.Q[B]=0,F.Q[B+1]=0;for(B=0;B<u;B++){const r=w(t,g+3*B,3);F.Q[1+(F.X[B]<<1)]=r,r>e&&(e=r);}g+=3*u,b(F.Q,e),y(F.Q,e,F.u),o=F.w,a=F.d,g=v(F.u,(1<<e)-1,l+c,t,g,F.v);const r=p.V(F.v,0,l,F.C);h=(1<<r)-1;const i=p.V(F.v,l,c,F.D);d=(1<<i)-1,b(F.C,r),y(F.C,r,o),b(F.D,i),y(F.D,i,a);}for(;;){const e=o[E(t,g)&h];g+=15&e;const i=e>>>4;if(i>>>8==0)r[A++]=i;else {if(256==i)break;{let e=A+i-254;if(i>264){const r=F.q[i-257];e=A+(r>>>3)+w(t,g,7&r),g+=7&r;}const o=a[E(t,g)&d];g+=15&o;const s=o>>>4,f=F.c[s],l=(f>>>4)+m(t,g,15&f);for(g+=15&f;A<e;)r[A]=r[A++-l],r[A]=r[A++-l],r[A]=r[A++-l],r[A]=r[A++-l];A=e;}}}}else {0!=(7&g)&&(g+=8-(7&g));const o=4+(g>>>3),a=t[o-4]|t[o-3]<<8;_&&(r=e.H.W(r,A+a)),r.set(new i(t.buffer,t.byteOffset+o,a),A),g=o+a<<3,A+=a;}return r.length==A?r:r.slice(0,A)},e.H.W=function(e,t){const r=e.length;if(t<=r)return e;const i=new Uint8Array(r<<1);return i.set(e,0),i},e.H.R=function(t,r,i,o,a,s){const f=e.H.e,l=e.H.Z;let c=0;for(;c<i;){const e=t[l(o,a)&r];a+=15&e;const i=e>>>4;if(i<=15)s[c]=i,c++;else {let e=0,t=0;16==i?(t=3+f(o,a,2),a+=2,e=s[c-1]):17==i?(t=3+f(o,a,3),a+=3):18==i&&(t=11+f(o,a,7),a+=7);const r=c+t;for(;c<r;)s[c]=e,c++;}}return a},e.H.V=function(e,t,r,i){let o=0,a=0;const s=i.length>>>1;for(;a<r;){const r=e[a+t];i[a<<1]=0,i[1+(a<<1)]=r,r>o&&(o=r),a++;}for(;a<s;)i[a<<1]=0,i[1+(a<<1)]=0,a++;return o},e.H.n=function(t,r){const i=e.H.m,o=t.length;let a,s,f;let l;const c=i.j;for(var u=0;u<=r;u++)c[u]=0;for(u=1;u<o;u+=2)c[t[u]]++;const h=i.K;for(a=0,c[0]=0,s=1;s<=r;s++)a=a+c[s-1]<<1,h[s]=a;for(f=0;f<o;f+=2)l=t[f+1],0!=l&&(t[f]=h[l],h[l]++);},e.H.A=function(t,r,i){const o=t.length,a=e.H.m.r;for(let e=0;e<o;e+=2)if(0!=t[e+1]){const o=e>>1,s=t[e+1],f=o<<4|s,l=r-s;let c=t[e]<<l;const u=c+(1<<l);for(;c!=u;){i[a[c]>>>15-r]=f,c++;}}},e.H.l=function(t,r){const i=e.H.m.r,o=15-r;for(let e=0;e<t.length;e+=2){const a=t[e]<<r-t[e+1];t[e]=i[a]>>>o;}},e.H.M=function(e,t,r){r<<=7&t;const i=t>>>3;e[i]|=r,e[i+1]|=r>>>8;},e.H.I=function(e,t,r){r<<=7&t;const i=t>>>3;e[i]|=r,e[i+1]|=r>>>8,e[i+2]|=r>>>16;},e.H.e=function(e,t,r){return (e[t>>>3]|e[1+(t>>>3)]<<8)>>>(7&t)&(1<<r)-1},e.H.b=function(e,t,r){return (e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16)>>>(7&t)&(1<<r)-1},e.H.Z=function(e,t){return (e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16)>>>(7&t)},e.H.i=function(e,t){return (e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16|e[3+(t>>>3)]<<24)>>>(7&t)},e.H.m=function(){const e=Uint16Array,t=Uint32Array;return {K:new e(16),j:new e(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new e(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new t(32),J:new e(512),_:[],h:new e(32),$:[],w:new e(32768),C:[],v:[],d:new e(32768),D:[],u:new e(512),Q:[],r:new e(32768),s:new t(286),Y:new t(30),a:new t(19),t:new t(15e3),k:new e(65536),g:new e(32768)}}(),function(){const t=e.H.m;for(var r=0;r<32768;r++){let e=r;e=(2863311530&e)>>>1|(1431655765&e)<<1,e=(3435973836&e)>>>2|(858993459&e)<<2,e=(4042322160&e)>>>4|(252645135&e)<<4,e=(4278255360&e)>>>8|(16711935&e)<<8,t.r[r]=(e>>>16|e<<16)>>>17;}function n(e,t,r){for(;0!=t--;)e.push(0,r);}for(r=0;r<32;r++)t.q[r]=t.S[r]<<3|t.T[r],t.c[r]=t.p[r]<<4|t.z[r];n(t._,144,8),n(t._,112,9),n(t._,24,7),n(t._,8,8),e.H.n(t._,9),e.H.A(t._,9,t.J),e.H.l(t._,9),n(t.$,32,5),e.H.n(t.$,5),e.H.A(t.$,5,t.h),e.H.l(t.$,5),n(t.Q,19,0),n(t.C,286,0),n(t.D,30,0),n(t.v,320,0);}(),e.H.N}();function _getBPP(e){return [1,null,3,1,2,null,4][e.ctype]*e.depth}function _filterZero(e,t,r,i,o){let a=_getBPP(t);const s=Math.ceil(i*a/8);let f,l;a=Math.ceil(a/8);let c=e[r],u=0;if(c>1&&(e[r]=[0,0,1][c-2]),3==c)for(u=a;u<s;u++)e[u+1]=e[u+1]+(e[u+1-a]>>>1)&255;for(let t=0;t<o;t++)if(f=r+t*s,l=f+t+1,c=e[l-1],u=0,0==c)for(;u<s;u++)e[f+u]=e[l+u];else if(1==c){for(;u<a;u++)e[f+u]=e[l+u];for(;u<s;u++)e[f+u]=e[l+u]+e[f+u-a];}else if(2==c)for(;u<s;u++)e[f+u]=e[l+u]+e[f+u-s];else if(3==c){for(;u<a;u++)e[f+u]=e[l+u]+(e[f+u-s]>>>1);for(;u<s;u++)e[f+u]=e[l+u]+(e[f+u-s]+e[f+u-a]>>>1);}else {for(;u<a;u++)e[f+u]=e[l+u]+_paeth(0,e[f+u-s],0);for(;u<s;u++)e[f+u]=e[l+u]+_paeth(e[f+u-a],e[f+u-s],e[f+u-a-s]);}return e}function _paeth(e,t,r){const i=e+t-r,o=i-e,a=i-t,s=i-r;return o*o<=a*a&&o*o<=s*s?e:a*a<=s*s?t:r}function _IHDR(t,r,i){i.width=e.readUint(t,r),r+=4,i.height=e.readUint(t,r),r+=4,i.depth=t[r],r++,i.ctype=t[r],r++,i.compress=t[r],r++,i.filter=t[r],r++,i.interlace=t[r],r++;}function _copyTile(e,t,r,i,o,a,s,f,l){const c=Math.min(t,o),u=Math.min(r,a);let h=0,d=0;for(let r=0;r<u;r++)for(let a=0;a<c;a++)if(s>=0&&f>=0?(h=r*t+a<<2,d=(f+r)*o+s+a<<2):(h=(-f+r)*t-s+a<<2,d=r*o+a<<2),0==l)i[d]=e[h],i[d+1]=e[h+1],i[d+2]=e[h+2],i[d+3]=e[h+3];else if(1==l){var A=e[h+3]*(1/255),g=e[h]*A,p=e[h+1]*A,m=e[h+2]*A,w=i[d+3]*(1/255),v=i[d]*w,b=i[d+1]*w,y=i[d+2]*w;const t=1-A,r=A+w*t,o=0==r?0:1/r;i[d+3]=255*r,i[d+0]=(g+v*t)*o,i[d+1]=(p+b*t)*o,i[d+2]=(m+y*t)*o;}else if(2==l){A=e[h+3],g=e[h],p=e[h+1],m=e[h+2],w=i[d+3],v=i[d],b=i[d+1],y=i[d+2];A==w&&g==v&&p==b&&m==y?(i[d]=0,i[d+1]=0,i[d+2]=0,i[d+3]=0):(i[d]=g,i[d+1]=p,i[d+2]=m,i[d+3]=A);}else if(3==l){A=e[h+3],g=e[h],p=e[h+1],m=e[h+2],w=i[d+3],v=i[d],b=i[d+1],y=i[d+2];if(A==w&&g==v&&p==b&&m==y)continue;if(A<220&&w>20)return  false}return  true}return {decode:function decode(r){const i=new Uint8Array(r);let o=8;const a=e,s=a.readUshort,f=a.readUint,l={tabs:{},frames:[]},c=new Uint8Array(i.length);let u,h=0,d=0;const A=[137,80,78,71,13,10,26,10];for(var g=0;g<8;g++)if(i[g]!=A[g])throw "The input is not a PNG file!";for(;o<i.length;){const e=a.readUint(i,o);o+=4;const r=a.readASCII(i,o,4);if(o+=4,"IHDR"==r)_IHDR(i,o,l);else if("iCCP"==r){for(var p=o;0!=i[p];)p++;a.readASCII(i,o,p-o),i[p+1];const s=i.slice(p+2,o+e);let f=null;try{f=_inflate(s);}catch(e){f=t(s);}l.tabs[r]=f;}else if("CgBI"==r)l.tabs[r]=i.slice(o,o+4);else if("IDAT"==r){for(g=0;g<e;g++)c[h+g]=i[o+g];h+=e;}else if("acTL"==r)l.tabs[r]={num_frames:f(i,o),num_plays:f(i,o+4)},u=new Uint8Array(i.length);else if("fcTL"==r){if(0!=d)(E=l.frames[l.frames.length-1]).data=_decompress(l,u.slice(0,d),E.rect.width,E.rect.height),d=0;const e={x:f(i,o+12),y:f(i,o+16),width:f(i,o+4),height:f(i,o+8)};let t=s(i,o+22);t=s(i,o+20)/(0==t?100:t);const r={rect:e,delay:Math.round(1e3*t),dispose:i[o+24],blend:i[o+25]};l.frames.push(r);}else if("fdAT"==r){for(g=0;g<e-4;g++)u[d+g]=i[o+g+4];d+=e-4;}else if("pHYs"==r)l.tabs[r]=[a.readUint(i,o),a.readUint(i,o+4),i[o+8]];else if("cHRM"==r){l.tabs[r]=[];for(g=0;g<8;g++)l.tabs[r].push(a.readUint(i,o+4*g));}else if("tEXt"==r||"zTXt"==r){null==l.tabs[r]&&(l.tabs[r]={});var m=a.nextZero(i,o),w=a.readASCII(i,o,m-o),v=o+e-m-1;if("tEXt"==r)y=a.readASCII(i,m+1,v);else {var b=_inflate(i.slice(m+2,m+2+v));y=a.readUTF8(b,0,b.length);}l.tabs[r][w]=y;}else if("iTXt"==r){null==l.tabs[r]&&(l.tabs[r]={});m=0,p=o;m=a.nextZero(i,p);w=a.readASCII(i,p,m-p);const t=i[p=m+1];var y;i[p+1],p+=2,m=a.nextZero(i,p),a.readASCII(i,p,m-p),p=m+1,m=a.nextZero(i,p),a.readUTF8(i,p,m-p);v=e-((p=m+1)-o);if(0==t)y=a.readUTF8(i,p,v);else {b=_inflate(i.slice(p,p+v));y=a.readUTF8(b,0,b.length);}l.tabs[r][w]=y;}else if("PLTE"==r)l.tabs[r]=a.readBytes(i,o,e);else if("hIST"==r){const e=l.tabs.PLTE.length/3;l.tabs[r]=[];for(g=0;g<e;g++)l.tabs[r].push(s(i,o+2*g));}else if("tRNS"==r)3==l.ctype?l.tabs[r]=a.readBytes(i,o,e):0==l.ctype?l.tabs[r]=s(i,o):2==l.ctype&&(l.tabs[r]=[s(i,o),s(i,o+2),s(i,o+4)]);else if("gAMA"==r)l.tabs[r]=a.readUint(i,o)/1e5;else if("sRGB"==r)l.tabs[r]=i[o];else if("bKGD"==r)0==l.ctype||4==l.ctype?l.tabs[r]=[s(i,o)]:2==l.ctype||6==l.ctype?l.tabs[r]=[s(i,o),s(i,o+2),s(i,o+4)]:3==l.ctype&&(l.tabs[r]=i[o]);else if("IEND"==r)break;o+=e,a.readUint(i,o),o+=4;}var E;return 0!=d&&((E=l.frames[l.frames.length-1]).data=_decompress(l,u.slice(0,d),E.rect.width,E.rect.height)),l.data=_decompress(l,c,l.width,l.height),delete l.compress,delete l.interlace,delete l.filter,l},toRGBA8:function toRGBA8(e){const t=e.width,r=e.height;if(null==e.tabs.acTL)return [decodeImage(e.data,t,r,e).buffer];const i=[];null==e.frames[0].data&&(e.frames[0].data=e.data);const o=t*r*4,a=new Uint8Array(o),s=new Uint8Array(o),f=new Uint8Array(o);for(let c=0;c<e.frames.length;c++){const u=e.frames[c],h=u.rect.x,d=u.rect.y,A=u.rect.width,g=u.rect.height,p=decodeImage(u.data,A,g,e);if(0!=c)for(var l=0;l<o;l++)f[l]=a[l];if(0==u.blend?_copyTile(p,A,g,a,t,r,h,d,0):1==u.blend&&_copyTile(p,A,g,a,t,r,h,d,1),i.push(a.buffer.slice(0)),0==u.dispose);else if(1==u.dispose)_copyTile(s,A,g,a,t,r,h,d,0);else if(2==u.dispose)for(l=0;l<o;l++)a[l]=f[l];}return i},_paeth:_paeth,_copyTile:_copyTile,_bin:e}}();!function(){const{_copyTile:e}=UPNG,{_bin:t}=UPNG,r=UPNG._paeth;var i={table:function(){const e=new Uint32Array(256);for(let t=0;t<256;t++){let r=t;for(let e=0;e<8;e++)1&r?r=3988292384^r>>>1:r>>>=1;e[t]=r;}return e}(),update(e,t,r,o){for(let a=0;a<o;a++)e=i.table[255&(e^t[r+a])]^e>>>8;return e},crc:(e,t,r)=>4294967295^i.update(4294967295,e,t,r)};function addErr(e,t,r,i){t[r]+=e[0]*i>>4,t[r+1]+=e[1]*i>>4,t[r+2]+=e[2]*i>>4,t[r+3]+=e[3]*i>>4;}function N(e){return Math.max(0,Math.min(255,e))}function D(e,t){const r=e[0]-t[0],i=e[1]-t[1],o=e[2]-t[2],a=e[3]-t[3];return r*r+i*i+o*o+a*a}function dither(e,t,r,i,o,a,s){null==s&&(s=1);const f=i.length,l=[];for(var c=0;c<f;c++){const e=i[c];l.push([e>>>0&255,e>>>8&255,e>>>16&255,e>>>24&255]);}for(c=0;c<f;c++){let e=4294967295;for(var u=0,h=0;h<f;h++){var d=D(l[c],l[h]);h!=c&&d<e&&(e=d,u=h);}}const A=new Uint32Array(o.buffer),g=new Int16Array(t*r*4),p=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(c=0;c<p.length;c++)p[c]=255*((p[c]+.5)/16-.5);for(let o=0;o<r;o++)for(let w=0;w<t;w++){var m;c=4*(o*t+w);if(2!=s)m=[N(e[c]+g[c]),N(e[c+1]+g[c+1]),N(e[c+2]+g[c+2]),N(e[c+3]+g[c+3])];else {d=p[4*(3&o)+(3&w)];m=[N(e[c]+d),N(e[c+1]+d),N(e[c+2]+d),N(e[c+3]+d)];}u=0;let v=16777215;for(h=0;h<f;h++){const e=D(m,l[h]);e<v&&(v=e,u=h);}const b=l[u],y=[m[0]-b[0],m[1]-b[1],m[2]-b[2],m[3]-b[3]];1==s&&(w!=t-1&&addErr(y,g,c+4,7),o!=r-1&&(0!=w&&addErr(y,g,c+4*t-4,3),addErr(y,g,c+4*t,5),w!=t-1&&addErr(y,g,c+4*t+4,1))),a[c>>2]=u,A[c>>2]=i[u];}}function _main(e,r,o,a,s){null==s&&(s={});const{crc:f}=i,l=t.writeUint,c=t.writeUshort,u=t.writeASCII;let h=8;const d=e.frames.length>1;let A,g=false,p=33+(d?20:0);if(null!=s.sRGB&&(p+=13),null!=s.pHYs&&(p+=21),null!=s.iCCP&&(A=pako.deflate(s.iCCP),p+=21+A.length+4),3==e.ctype){for(var m=e.plte.length,w=0;w<m;w++)e.plte[w]>>>24!=255&&(g=true);p+=8+3*m+4+(g?8+1*m+4:0);}for(var v=0;v<e.frames.length;v++){d&&(p+=38),p+=(F=e.frames[v]).cimg.length+12,0!=v&&(p+=4);}p+=12;const b=new Uint8Array(p),y=[137,80,78,71,13,10,26,10];for(w=0;w<8;w++)b[w]=y[w];if(l(b,h,13),h+=4,u(b,h,"IHDR"),h+=4,l(b,h,r),h+=4,l(b,h,o),h+=4,b[h]=e.depth,h++,b[h]=e.ctype,h++,b[h]=0,h++,b[h]=0,h++,b[h]=0,h++,l(b,h,f(b,h-17,17)),h+=4,null!=s.sRGB&&(l(b,h,1),h+=4,u(b,h,"sRGB"),h+=4,b[h]=s.sRGB,h++,l(b,h,f(b,h-5,5)),h+=4),null!=s.iCCP){const e=13+A.length;l(b,h,e),h+=4,u(b,h,"iCCP"),h+=4,u(b,h,"ICC profile"),h+=11,h+=2,b.set(A,h),h+=A.length,l(b,h,f(b,h-(e+4),e+4)),h+=4;}if(null!=s.pHYs&&(l(b,h,9),h+=4,u(b,h,"pHYs"),h+=4,l(b,h,s.pHYs[0]),h+=4,l(b,h,s.pHYs[1]),h+=4,b[h]=s.pHYs[2],h++,l(b,h,f(b,h-13,13)),h+=4),d&&(l(b,h,8),h+=4,u(b,h,"acTL"),h+=4,l(b,h,e.frames.length),h+=4,l(b,h,null!=s.loop?s.loop:0),h+=4,l(b,h,f(b,h-12,12)),h+=4),3==e.ctype){l(b,h,3*(m=e.plte.length)),h+=4,u(b,h,"PLTE"),h+=4;for(w=0;w<m;w++){const t=3*w,r=e.plte[w],i=255&r,o=r>>>8&255,a=r>>>16&255;b[h+t+0]=i,b[h+t+1]=o,b[h+t+2]=a;}if(h+=3*m,l(b,h,f(b,h-3*m-4,3*m+4)),h+=4,g){l(b,h,m),h+=4,u(b,h,"tRNS"),h+=4;for(w=0;w<m;w++)b[h+w]=e.plte[w]>>>24&255;h+=m,l(b,h,f(b,h-m-4,m+4)),h+=4;}}let E=0;for(v=0;v<e.frames.length;v++){var F=e.frames[v];d&&(l(b,h,26),h+=4,u(b,h,"fcTL"),h+=4,l(b,h,E++),h+=4,l(b,h,F.rect.width),h+=4,l(b,h,F.rect.height),h+=4,l(b,h,F.rect.x),h+=4,l(b,h,F.rect.y),h+=4,c(b,h,a[v]),h+=2,c(b,h,1e3),h+=2,b[h]=F.dispose,h++,b[h]=F.blend,h++,l(b,h,f(b,h-30,30)),h+=4);const t=F.cimg;l(b,h,(m=t.length)+(0==v?0:4)),h+=4;const r=h;u(b,h,0==v?"IDAT":"fdAT"),h+=4,0!=v&&(l(b,h,E++),h+=4),b.set(t,h),h+=m,l(b,h,f(b,r,h-r)),h+=4;}return l(b,h,0),h+=4,u(b,h,"IEND"),h+=4,l(b,h,f(b,h-4,4)),h+=4,b.buffer}function compressPNG(e,t,r){for(let i=0;i<e.frames.length;i++){const o=e.frames[i];o.rect.width;const a=o.rect.height,s=new Uint8Array(a*o.bpl+a);o.cimg=_filterZero(o.img,a,o.bpp,o.bpl,s,t,r);}}function compress(t,r,i,o,a){const s=a[0],f=a[1],l=a[2],c=a[3],u=a[4],h=a[5];let d=6,A=8,g=255;for(var p=0;p<t.length;p++){const e=new Uint8Array(t[p]);for(var m=e.length,w=0;w<m;w+=4)g&=e[w+3];}const v=255!=g,b=function framize(t,r,i,o,a,s){const f=[];for(var l=0;l<t.length;l++){const h=new Uint8Array(t[l]),A=new Uint32Array(h.buffer);var c;let g=0,p=0,m=r,w=i,v=o?1:0;if(0!=l){const b=s||o||1==l||0!=f[l-2].dispose?1:2;let y=0,E=1e9;for(let e=0;e<b;e++){var u=new Uint8Array(t[l-1-e]);const o=new Uint32Array(t[l-1-e]);let s=r,f=i,c=-1,h=-1;for(let e=0;e<i;e++)for(let t=0;t<r;t++){A[d=e*r+t]!=o[d]&&(t<s&&(s=t),t>c&&(c=t),e<f&&(f=e),e>h&&(h=e));} -1==c&&(s=f=c=h=0),a&&(1==(1&s)&&s--,1==(1&f)&&f--);const v=(c-s+1)*(h-f+1);v<E&&(E=v,y=e,g=s,p=f,m=c-s+1,w=h-f+1);}u=new Uint8Array(t[l-1-y]);1==y&&(f[l-1].dispose=2),c=new Uint8Array(m*w*4),e(u,r,i,c,m,w,-g,-p,0),v=e(h,r,i,c,m,w,-g,-p,3)?1:0,1==v?_prepareDiff(h,r,i,c,{x:g,y:p,width:m,height:w}):e(h,r,i,c,m,w,-g,-p,0);}else c=h.slice(0);f.push({rect:{x:g,y:p,width:m,height:w},img:c,blend:v,dispose:0});}if(o)for(l=0;l<f.length;l++){if(1==(A=f[l]).blend)continue;const e=A.rect,o=f[l-1].rect,s=Math.min(e.x,o.x),c=Math.min(e.y,o.y),u={x:s,y:c,width:Math.max(e.x+e.width,o.x+o.width)-s,height:Math.max(e.y+e.height,o.y+o.height)-c};f[l-1].dispose=1,l-1!=0&&_updateFrame(t,r,i,f,l-1,u,a),_updateFrame(t,r,i,f,l,u,a);}let h=0;if(1!=t.length)for(var d=0;d<f.length;d++){var A;h+=(A=f[d]).rect.width*A.rect.height;}return f}(t,r,i,s,f,l),y={},E=[],F=[];if(0!=o){const e=[];for(w=0;w<b.length;w++)e.push(b[w].img.buffer);const t=function concatRGBA(e){let t=0;for(var r=0;r<e.length;r++)t+=e[r].byteLength;const i=new Uint8Array(t);let o=0;for(r=0;r<e.length;r++){const t=new Uint8Array(e[r]),a=t.length;for(let e=0;e<a;e+=4){let r=t[e],a=t[e+1],s=t[e+2];const f=t[e+3];0==f&&(r=a=s=0),i[o+e]=r,i[o+e+1]=a,i[o+e+2]=s,i[o+e+3]=f;}o+=a;}return i.buffer}(e),r=quantize(t,o);for(w=0;w<r.plte.length;w++)E.push(r.plte[w].est.rgba);let i=0;for(w=0;w<b.length;w++){const e=(B=b[w]).img.length;var _=new Uint8Array(r.inds.buffer,i>>2,e>>2);F.push(_);const t=new Uint8Array(r.abuf,i,e);h&&dither(B.img,B.rect.width,B.rect.height,E,t,_),B.img.set(t),i+=e;}}else for(p=0;p<b.length;p++){var B=b[p];const e=new Uint32Array(B.img.buffer);var U=B.rect.width;m=e.length,_=new Uint8Array(m);F.push(_);for(w=0;w<m;w++){const t=e[w];if(0!=w&&t==e[w-1])_[w]=_[w-1];else if(w>U&&t==e[w-U])_[w]=_[w-U];else {let e=y[t];if(null==e&&(y[t]=e=E.length,E.push(t),E.length>=300))break;_[w]=e;}}}const C=E.length;C<=256&&0==u&&(A=C<=2?1:C<=4?2:C<=16?4:8,A=Math.max(A,c));for(p=0;p<b.length;p++){(B=b[p]).rect.x,B.rect.y;U=B.rect.width;const e=B.rect.height;let t=B.img;new Uint32Array(t.buffer);let r=4*U,i=4;if(C<=256&&0==u){r=Math.ceil(A*U/8);var I=new Uint8Array(r*e);const o=F[p];for(let t=0;t<e;t++){w=t*r;const e=t*U;if(8==A)for(var Q=0;Q<U;Q++)I[w+Q]=o[e+Q];else if(4==A)for(Q=0;Q<U;Q++)I[w+(Q>>1)]|=o[e+Q]<<4-4*(1&Q);else if(2==A)for(Q=0;Q<U;Q++)I[w+(Q>>2)]|=o[e+Q]<<6-2*(3&Q);else if(1==A)for(Q=0;Q<U;Q++)I[w+(Q>>3)]|=o[e+Q]<<7-1*(7&Q);}t=I,d=3,i=1;}else if(0==v&&1==b.length){I=new Uint8Array(U*e*3);const o=U*e;for(w=0;w<o;w++){const e=3*w,r=4*w;I[e]=t[r],I[e+1]=t[r+1],I[e+2]=t[r+2];}t=I,d=2,i=3,r=3*U;}B.img=t,B.bpl=r,B.bpp=i;}return {ctype:d,depth:A,plte:E,frames:b}}function _updateFrame(t,r,i,o,a,s,f){const l=Uint8Array,c=Uint32Array,u=new l(t[a-1]),h=new c(t[a-1]),d=a+1<t.length?new l(t[a+1]):null,A=new l(t[a]),g=new c(A.buffer);let p=r,m=i,w=-1,v=-1;for(let e=0;e<s.height;e++)for(let t=0;t<s.width;t++){const i=s.x+t,f=s.y+e,l=f*r+i,c=g[l];0==c||0==o[a-1].dispose&&h[l]==c&&(null==d||0!=d[4*l+3])||(i<p&&(p=i),i>w&&(w=i),f<m&&(m=f),f>v&&(v=f));} -1==w&&(p=m=w=v=0),f&&(1==(1&p)&&p--,1==(1&m)&&m--),s={x:p,y:m,width:w-p+1,height:v-m+1};const b=o[a];b.rect=s,b.blend=1,b.img=new Uint8Array(s.width*s.height*4),0==o[a-1].dispose?(e(u,r,i,b.img,s.width,s.height,-s.x,-s.y,0),_prepareDiff(A,r,i,b.img,s)):e(A,r,i,b.img,s.width,s.height,-s.x,-s.y,0);}function _prepareDiff(t,r,i,o,a){e(t,r,i,o,a.width,a.height,-a.x,-a.y,2);}function _filterZero(e,t,r,i,o,a,s){const f=[];let l,c=[0,1,2,3,4];-1!=a?c=[a]:(t*i>5e5||1==r)&&(c=[0]),s&&(l={level:0});const u=UZIP;for(var h=0;h<c.length;h++){for(let a=0;a<t;a++)_filterLine(o,e,a,i,r,c[h]);f.push(u.deflate(o,l));}let d,A=1e9;for(h=0;h<f.length;h++)f[h].length<A&&(d=h,A=f[h].length);return f[d]}function _filterLine(e,t,i,o,a,s){const f=i*o;let l=f+i;if(e[l]=s,l++,0==s)if(o<500)for(var c=0;c<o;c++)e[l+c]=t[f+c];else e.set(new Uint8Array(t.buffer,f,o),l);else if(1==s){for(c=0;c<a;c++)e[l+c]=t[f+c];for(c=a;c<o;c++)e[l+c]=t[f+c]-t[f+c-a]+256&255;}else if(0==i){for(c=0;c<a;c++)e[l+c]=t[f+c];if(2==s)for(c=a;c<o;c++)e[l+c]=t[f+c];if(3==s)for(c=a;c<o;c++)e[l+c]=t[f+c]-(t[f+c-a]>>1)+256&255;if(4==s)for(c=a;c<o;c++)e[l+c]=t[f+c]-r(t[f+c-a],0,0)+256&255;}else {if(2==s)for(c=0;c<o;c++)e[l+c]=t[f+c]+256-t[f+c-o]&255;if(3==s){for(c=0;c<a;c++)e[l+c]=t[f+c]+256-(t[f+c-o]>>1)&255;for(c=a;c<o;c++)e[l+c]=t[f+c]+256-(t[f+c-o]+t[f+c-a]>>1)&255;}if(4==s){for(c=0;c<a;c++)e[l+c]=t[f+c]+256-r(0,t[f+c-o],0)&255;for(c=a;c<o;c++)e[l+c]=t[f+c]+256-r(t[f+c-a],t[f+c-o],t[f+c-a-o])&255;}}}function quantize(e,t){const r=new Uint8Array(e),i=r.slice(0),o=new Uint32Array(i.buffer),a=getKDtree(i,t),s=a[0],f=a[1],l=r.length,c=new Uint8Array(l>>2);let u;if(r.length<2e7)for(var h=0;h<l;h+=4){u=getNearest(s,d=r[h]*(1/255),A=r[h+1]*(1/255),g=r[h+2]*(1/255),p=r[h+3]*(1/255)),c[h>>2]=u.ind,o[h>>2]=u.est.rgba;}else for(h=0;h<l;h+=4){var d=r[h]*(1/255),A=r[h+1]*(1/255),g=r[h+2]*(1/255),p=r[h+3]*(1/255);for(u=s;u.left;)u=planeDst(u.est,d,A,g,p)<=0?u.left:u.right;c[h>>2]=u.ind,o[h>>2]=u.est.rgba;}return {abuf:i.buffer,inds:c,plte:f}}function getKDtree(e,t,r){null==r&&(r=1e-4);const i=new Uint32Array(e.buffer),o={i0:0,i1:e.length,bst:null,est:null,tdst:0,left:null,right:null};o.bst=stats(e,o.i0,o.i1),o.est=estats(o.bst);const a=[o];for(;a.length<t;){let t=0,o=0;for(var s=0;s<a.length;s++)a[s].est.L>t&&(t=a[s].est.L,o=s);if(t<r)break;const f=a[o],l=splitPixels(e,i,f.i0,f.i1,f.est.e,f.est.eMq255);if(f.i0>=l||f.i1<=l){f.est.L=0;continue}const c={i0:f.i0,i1:l,bst:null,est:null,tdst:0,left:null,right:null};c.bst=stats(e,c.i0,c.i1),c.est=estats(c.bst);const u={i0:l,i1:f.i1,bst:null,est:null,tdst:0,left:null,right:null};u.bst={R:[],m:[],N:f.bst.N-c.bst.N};for(s=0;s<16;s++)u.bst.R[s]=f.bst.R[s]-c.bst.R[s];for(s=0;s<4;s++)u.bst.m[s]=f.bst.m[s]-c.bst.m[s];u.est=estats(u.bst),f.left=c,f.right=u,a[o]=c,a.push(u);}a.sort(((e,t)=>t.bst.N-e.bst.N));for(s=0;s<a.length;s++)a[s].ind=s;return [o,a]}function getNearest(e,t,r,i,o){if(null==e.left)return e.tdst=function dist(e,t,r,i,o){const a=t-e[0],s=r-e[1],f=i-e[2],l=o-e[3];return a*a+s*s+f*f+l*l}(e.est.q,t,r,i,o),e;const a=planeDst(e.est,t,r,i,o);let s=e.left,f=e.right;a>0&&(s=e.right,f=e.left);const l=getNearest(s,t,r,i,o);if(l.tdst<=a*a)return l;const c=getNearest(f,t,r,i,o);return c.tdst<l.tdst?c:l}function planeDst(e,t,r,i,o){const{e:a}=e;return a[0]*t+a[1]*r+a[2]*i+a[3]*o-e.eMq}function splitPixels(e,t,r,i,o,a){for(i-=4;r<i;){for(;vecDot(e,r,o)<=a;)r+=4;for(;vecDot(e,i,o)>a;)i-=4;if(r>=i)break;const s=t[r>>2];t[r>>2]=t[i>>2],t[i>>2]=s,r+=4,i-=4;}for(;vecDot(e,r,o)>a;)r-=4;return r+4}function vecDot(e,t,r){return e[t]*r[0]+e[t+1]*r[1]+e[t+2]*r[2]+e[t+3]*r[3]}function stats(e,t,r){const i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],o=[0,0,0,0],a=r-t>>2;for(let a=t;a<r;a+=4){const t=e[a]*(1/255),r=e[a+1]*(1/255),s=e[a+2]*(1/255),f=e[a+3]*(1/255);o[0]+=t,o[1]+=r,o[2]+=s,o[3]+=f,i[0]+=t*t,i[1]+=t*r,i[2]+=t*s,i[3]+=t*f,i[5]+=r*r,i[6]+=r*s,i[7]+=r*f,i[10]+=s*s,i[11]+=s*f,i[15]+=f*f;}return i[4]=i[1],i[8]=i[2],i[9]=i[6],i[12]=i[3],i[13]=i[7],i[14]=i[11],{R:i,m:o,N:a}}function estats(e){const{R:t}=e,{m:r}=e,{N:i}=e,a=r[0],s=r[1],f=r[2],l=r[3],c=0==i?0:1/i,u=[t[0]-a*a*c,t[1]-a*s*c,t[2]-a*f*c,t[3]-a*l*c,t[4]-s*a*c,t[5]-s*s*c,t[6]-s*f*c,t[7]-s*l*c,t[8]-f*a*c,t[9]-f*s*c,t[10]-f*f*c,t[11]-f*l*c,t[12]-l*a*c,t[13]-l*s*c,t[14]-l*f*c,t[15]-l*l*c],h=u,d=o;let A=[Math.random(),Math.random(),Math.random(),Math.random()],g=0,p=0;if(0!=i)for(let e=0;e<16&&(A=d.multVec(h,A),p=Math.sqrt(d.dot(A,A)),A=d.sml(1/p,A),!(0!=e&&Math.abs(p-g)<1e-9));e++)g=p;const m=[a*c,s*c,f*c,l*c];return {Cov:u,q:m,e:A,L:g,eMq255:d.dot(d.sml(255,m),A),eMq:d.dot(A,m),rgba:(Math.round(255*m[3])<<24|Math.round(255*m[2])<<16|Math.round(255*m[1])<<8|Math.round(255*m[0])<<0)>>>0}}var o={multVec:(e,t)=>[e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3],e[4]*t[0]+e[5]*t[1]+e[6]*t[2]+e[7]*t[3],e[8]*t[0]+e[9]*t[1]+e[10]*t[2]+e[11]*t[3],e[12]*t[0]+e[13]*t[1]+e[14]*t[2]+e[15]*t[3]],dot:(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3],sml:(e,t)=>[e*t[0],e*t[1],e*t[2],e*t[3]]};UPNG.encode=function encode(e,t,r,i,o,a,s){null==i&&(i=0),null==s&&(s=false);const f=compress(e,t,r,i,[false,false,false,0,s,false]);return compressPNG(f,-1),_main(f,t,r,o,a)},UPNG.encodeLL=function encodeLL(e,t,r,i,o,a,s,f){const l={ctype:0+(1==i?0:2)+(0==o?0:4),depth:a,frames:[]},c=(i+o)*a,u=c*t;for(let i=0;i<e.length;i++)l.frames.push({rect:{x:0,y:0,width:t,height:r},img:new Uint8Array(e[i]),blend:0,dispose:1,bpp:Math.ceil(c/8),bpl:Math.ceil(u/8)});return compressPNG(l,0,true),_main(l,t,r,s,f)},UPNG.encode.compress=compress,UPNG.encode.dither=dither,UPNG.quantize=quantize,UPNG.quantize.getKDtree=getKDtree,UPNG.quantize.getNearest=getNearest;}();const r={toArrayBuffer(e,t){const i=e.width,o=e.height,a=i<<2,s=e.getContext("2d").getImageData(0,0,i,o),f=new Uint32Array(s.data.buffer),l=(32*i+31)/32<<2,c=l*o,u=122+c,h=new ArrayBuffer(u),d=new DataView(h),A=1<<20;let g,p,m,w,v=A,b=0,y=0,E=0;function set16(e){d.setUint16(y,e,true),y+=2;}function set32(e){d.setUint32(y,e,true),y+=4;}function seek(e){y+=e;}set16(19778),set32(u),seek(4),set32(122),set32(108),set32(i),set32(-o>>>0),set16(1),set16(32),set32(3),set32(c),set32(2835),set32(2835),seek(8),set32(16711680),set32(65280),set32(255),set32(4278190080),set32(1466527264),function convert(){for(;b<o&&v>0;){for(w=122+b*l,g=0;g<a;)v--,p=f[E++],m=p>>>24,d.setUint32(w+g,p<<8|m),g+=4;b++;}E<f.length?(v=A,setTimeout(convert,r._dly)):t(h);}();},toBlob(e,t){this.toArrayBuffer(e,(e=>{t(new Blob([e],{type:"image/bmp"}));}));},_dly:9};var i={CHROME:"CHROME",FIREFOX:"FIREFOX",DESKTOP_SAFARI:"DESKTOP_SAFARI",IE:"IE",IOS:"IOS",ETC:"ETC"},o={[i.CHROME]:16384,[i.FIREFOX]:11180,[i.DESKTOP_SAFARI]:16384,[i.IE]:8192,[i.IOS]:4096,[i.ETC]:8192};const a="undefined"!=typeof window,s="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,f=a&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),CustomFile=(a||s)&&(f&&f.getOriginalSymbol(window,"File")||"undefined"!=typeof File&&File),CustomFileReader=(a||s)&&(f&&f.getOriginalSymbol(window,"FileReader")||"undefined"!=typeof FileReader&&FileReader);function getFilefromDataUrl(e,t,r=Date.now()){return new Promise((i=>{const o=e.split(","),a=o[0].match(/:(.*?);/)[1],s=globalThis.atob(o[1]);let f=s.length;const l=new Uint8Array(f);for(;f--;)l[f]=s.charCodeAt(f);const c=new Blob([l],{type:a});c.name=t,c.lastModified=r,i(c);}))}function getDataUrlFromFile(e){return new Promise(((t,r)=>{const i=new CustomFileReader;i.onload=()=>t(i.result),i.onerror=e=>r(e),i.readAsDataURL(e);}))}function loadImage(e){return new Promise(((t,r)=>{const i=new Image;i.onload=()=>t(i),i.onerror=e=>r(e),i.src=e;}))}function getBrowserName(){if(void 0!==getBrowserName.cachedResult)return getBrowserName.cachedResult;let e=i.ETC;const{userAgent:t}=navigator;return /Chrom(e|ium)/i.test(t)?e=i.CHROME:/iP(ad|od|hone)/i.test(t)&&/WebKit/i.test(t)?e=i.IOS:/Safari/i.test(t)?e=i.DESKTOP_SAFARI:/Firefox/i.test(t)?e=i.FIREFOX:(/MSIE/i.test(t)||true==!!document.documentMode)&&(e=i.IE),getBrowserName.cachedResult=e,getBrowserName.cachedResult}function approximateBelowMaximumCanvasSizeOfBrowser(e,t){const r=getBrowserName(),i=o[r];let a=e,s=t,f=a*s;const l=a>s?s/a:a/s;for(;f>i*i;){const e=(i+a)/2,t=(i+s)/2;e<t?(s=t,a=t*l):(s=e*l,a=e),f=a*s;}return {width:a,height:s}}function getNewCanvasAndCtx(e,t){let r,i;try{if(r=new OffscreenCanvas(e,t),i=r.getContext("2d"),null===i)throw new Error("getContext of OffscreenCanvas returns null")}catch(e){r=document.createElement("canvas"),i=r.getContext("2d");}return r.width=e,r.height=t,[r,i]}function drawImageInCanvas(e,t){const{width:r,height:i}=approximateBelowMaximumCanvasSizeOfBrowser(e.width,e.height),[o,a]=getNewCanvasAndCtx(r,i);return t&&/jpe?g/.test(t)&&(a.fillStyle="white",a.fillRect(0,0,o.width,o.height)),a.drawImage(e,0,0,o.width,o.height),o}function isIOS(){return void 0!==isIOS.cachedResult||(isIOS.cachedResult=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"undefined"!=typeof document&&"ontouchend"in document),isIOS.cachedResult}function drawFileInCanvas(e,t={}){return new Promise((function(r,o){let a,s;var $Try_2_Post=function(){try{return s=drawImageInCanvas(a,t.fileType||e.type),r([a,s])}catch(e){return o(e)}},$Try_2_Catch=function(t){try{0;var $Try_3_Catch=function(e){try{throw e}catch(e){return o(e)}};try{let t;return getDataUrlFromFile(e).then((function(e){try{return t=e,loadImage(t).then((function(e){try{return a=e,function(){try{return $Try_2_Post()}catch(e){return o(e)}}()}catch(e){return $Try_3_Catch(e)}}),$Try_3_Catch)}catch(e){return $Try_3_Catch(e)}}),$Try_3_Catch)}catch(e){$Try_3_Catch(e);}}catch(e){return o(e)}};try{if(isIOS()||[i.DESKTOP_SAFARI,i.MOBILE_SAFARI].includes(getBrowserName()))throw new Error("Skip createImageBitmap on IOS and Safari");return createImageBitmap(e).then((function(e){try{return a=e,$Try_2_Post()}catch(e){return $Try_2_Catch()}}),$Try_2_Catch)}catch(e){$Try_2_Catch();}}))}function canvasToFile(e,t,i,o,a=1){return new Promise((function(s,f){let l;if("image/png"===t){let c,u,h;return c=e.getContext("2d"),({data:u}=c.getImageData(0,0,e.width,e.height)),h=UPNG.encode([u.buffer],e.width,e.height,4096*a),l=new Blob([h],{type:t}),l.name=i,l.lastModified=o,$If_4.call(this)}{if("image/bmp"===t)return new Promise((t=>r.toBlob(e,t))).then(function(e){try{return l=e,l.name=i,l.lastModified=o,$If_5.call(this)}catch(e){return f(e)}}.bind(this),f);{if("function"==typeof OffscreenCanvas&&e instanceof OffscreenCanvas)return e.convertToBlob({type:t,quality:a}).then(function(e){try{return l=e,l.name=i,l.lastModified=o,$If_6.call(this)}catch(e){return f(e)}}.bind(this),f);{let d;return d=e.toDataURL(t,a),getFilefromDataUrl(d,i,o).then(function(e){try{return l=e,$If_6.call(this)}catch(e){return f(e)}}.bind(this),f)}function $If_6(){return $If_5.call(this)}}function $If_5(){return $If_4.call(this)}}function $If_4(){return s(l)}}))}function cleanupCanvasMemory(e){e.width=0,e.height=0;}function isAutoOrientationInBrowser(){return new Promise((function(e,t){let i,o,a,s;return void 0!==isAutoOrientationInBrowser.cachedResult?e(isAutoOrientationInBrowser.cachedResult):(getFilefromDataUrl("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then((function(r){try{return i=r,drawFileInCanvas(i).then((function(r){try{return o=r[1],canvasToFile(o,i.type,i.name,i.lastModified).then((function(r){try{return a=r,cleanupCanvasMemory(o),drawFileInCanvas(a).then((function(r){try{return s=r[0],isAutoOrientationInBrowser.cachedResult=1===s.width&&2===s.height,e(isAutoOrientationInBrowser.cachedResult)}catch(e){return t(e)}}),t)}catch(e){return t(e)}}),t)}catch(e){return t(e)}}),t)}catch(e){return t(e)}}),t))}))}function getExifOrientation(e){return new Promise(((t,r)=>{const i=new CustomFileReader;i.onload=e=>{const r=new DataView(e.target.result);if(65496!=r.getUint16(0,false))return t(-2);const i=r.byteLength;let o=2;for(;o<i;){if(r.getUint16(o+2,false)<=8)return t(-1);const e=r.getUint16(o,false);if(o+=2,65505==e){if(1165519206!=r.getUint32(o+=2,false))return t(-1);const e=18761==r.getUint16(o+=6,false);o+=r.getUint32(o+4,e);const i=r.getUint16(o,e);o+=2;for(let a=0;a<i;a++)if(274==r.getUint16(o+12*a,e))return t(r.getUint16(o+12*a+8,e))}else {if(65280!=(65280&e))break;o+=r.getUint16(o,false);}}return t(-1)},i.onerror=e=>r(e),i.readAsArrayBuffer(e);}))}function handleMaxWidthOrHeight(e,t){const{width:r}=e,{height:i}=e,{maxWidthOrHeight:o}=t;let a,s=e;return isFinite(o)&&(r>o||i>o)&&([s,a]=getNewCanvasAndCtx(r,i),r>i?(s.width=o,s.height=i/r*o):(s.width=r/i*o,s.height=o),a.drawImage(e,0,0,s.width,s.height),cleanupCanvasMemory(e)),s}function followExifOrientation(e,t){const{width:r}=e,{height:i}=e,[o,a]=getNewCanvasAndCtx(r,i);switch(t>4&&t<9?(o.width=i,o.height=r):(o.width=r,o.height=i),t){case 2:a.transform(-1,0,0,1,r,0);break;case 3:a.transform(-1,0,0,-1,r,i);break;case 4:a.transform(1,0,0,-1,0,i);break;case 5:a.transform(0,1,1,0,0,0);break;case 6:a.transform(0,1,-1,0,i,0);break;case 7:a.transform(0,-1,-1,0,i,r);break;case 8:a.transform(0,-1,1,0,0,r);}return a.drawImage(e,0,0,r,i),cleanupCanvasMemory(e),o}function compress(e,t,r=0){return new Promise((function(i,o){let a,s,f,l,c,u,h,d,A,g,p,m,w,v,b,y,E,F,_,B;function incProgress(e=5){if(t.signal&&t.signal.aborted)throw t.signal.reason;a+=e,t.onProgress(Math.min(a,100));}function setProgress(e){if(t.signal&&t.signal.aborted)throw t.signal.reason;a=Math.min(Math.max(e,a),100),t.onProgress(a);}return a=r,s=t.maxIteration||10,f=1024*t.maxSizeMB*1024,incProgress(),drawFileInCanvas(e,t).then(function(r){try{return [,l]=r,incProgress(),c=handleMaxWidthOrHeight(l,t),incProgress(),new Promise((function(r,i){var o;if(!(o=t.exifOrientation))return getExifOrientation(e).then(function(e){try{return o=e,$If_2.call(this)}catch(e){return i(e)}}.bind(this),i);function $If_2(){return r(o)}return $If_2.call(this)})).then(function(r){try{return u=r,incProgress(),isAutoOrientationInBrowser().then(function(r){try{return h=r?c:followExifOrientation(c,u),incProgress(),d=t.initialQuality||1,A=t.fileType||e.type,canvasToFile(h,A,e.name,e.lastModified,d).then(function(r){try{{if(g=r,incProgress(),p=g.size>f,m=g.size>e.size,!p&&!m)return setProgress(100),i(g);var a;function $Loop_3(){if(s--&&(b>f||b>w)){let t,r;return t=B?.95*_.width:_.width,r=B?.95*_.height:_.height,[E,F]=getNewCanvasAndCtx(t,r),F.drawImage(_,0,0,t,r),d*="image/png"===A?.85:.95,canvasToFile(E,A,e.name,e.lastModified,d).then((function(e){try{return y=e,cleanupCanvasMemory(_),_=E,b=y.size,setProgress(Math.min(99,Math.floor((v-b)/(v-f)*100))),$Loop_3}catch(e){return o(e)}}),o)}return [1]}return w=e.size,v=g.size,b=v,_=h,B=!t.alwaysKeepResolution&&p,(a=function(e){for(;e;){if(e.then)return void e.then(a,o);try{if(e.pop){if(e.length)return e.pop()?$Loop_3_exit.call(this):e;e=$Loop_3;}else e=e.call(this);}catch(e){return o(e)}}}.bind(this))($Loop_3);function $Loop_3_exit(){return cleanupCanvasMemory(_),cleanupCanvasMemory(E),cleanupCanvasMemory(c),cleanupCanvasMemory(h),cleanupCanvasMemory(l),setProgress(100),i(y)}}}catch(u){return o(u)}}.bind(this),o)}catch(e){return o(e)}}.bind(this),o)}catch(e){return o(e)}}.bind(this),o)}catch(e){return o(e)}}.bind(this),o)}))}const l="\nlet scriptImported = false\nself.addEventListener('message', async (e) => {\n  const { file, id, imageCompressionLibUrl, options } = e.data\n  options.onProgress = (progress) => self.postMessage({ progress, id })\n  try {\n    if (!scriptImported) {\n      // console.log('[worker] importScripts', imageCompressionLibUrl)\n      self.importScripts(imageCompressionLibUrl)\n      scriptImported = true\n    }\n    // console.log('[worker] self', self)\n    const compressedFile = await imageCompression(file, options)\n    self.postMessage({ file: compressedFile, id })\n  } catch (e) {\n    // console.error('[worker] error', e)\n    self.postMessage({ error: e.message + '\\n' + e.stack, id })\n  }\n})\n";let c;function compressOnWebWorker(e,t){return new Promise(((r,i)=>{c||(c=function createWorkerScriptURL(e){const t=[];return t.push(e),URL.createObjectURL(new Blob(t))}(l));const o=new Worker(c);o.addEventListener("message",(function handler(e){if(t.signal&&t.signal.aborted)o.terminate();else if(void 0===e.data.progress){if(e.data.error)return i(new Error(e.data.error)),void o.terminate();r(e.data.file),o.terminate();}else t.onProgress(e.data.progress);})),o.addEventListener("error",i),t.signal&&t.signal.addEventListener("abort",(()=>{i(t.signal.reason),o.terminate();})),o.postMessage({file:e,imageCompressionLibUrl:t.libURL,options:{...t,onProgress:void 0,signal:void 0}});}))}function imageCompression(e,t){return new Promise((function(r,i){let o,a,s,f,l,c;if(o={...t},s=0,({onProgress:f}=o),o.maxSizeMB=o.maxSizeMB||Number.POSITIVE_INFINITY,l="boolean"!=typeof o.useWebWorker||o.useWebWorker,delete o.useWebWorker,o.onProgress=e=>{s=e,"function"==typeof f&&f(s);},!(e instanceof Blob||e instanceof CustomFile))return i(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(e.type))return i(new Error("The file given is not an image"));if(c="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,!l||"function"!=typeof Worker||c)return compress(e,o).then(function(e){try{return a=e,$If_4.call(this)}catch(e){return i(e)}}.bind(this),i);var u=function(){try{return $If_4.call(this)}catch(e){return i(e)}}.bind(this),$Try_1_Catch=function(t){try{return compress(e,o).then((function(e){try{return a=e,u()}catch(e){return i(e)}}),i)}catch(e){return i(e)}};try{return o.libURL=o.libURL||"https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js",compressOnWebWorker(e,o).then((function(e){try{return a=e,u()}catch(e){return $Try_1_Catch()}}),$Try_1_Catch)}catch(e){$Try_1_Catch();}function $If_4(){try{a.name=e.name,a.lastModified=e.lastModified;}catch(e){}try{o.preserveExif&&"image/jpeg"===e.type&&(!o.fileType||o.fileType&&o.fileType===e.type)&&(a=copyExifWithoutOrientation(e,a));}catch(e){}return r(a)}}))}imageCompression.getDataUrlFromFile=getDataUrlFromFile,imageCompression.getFilefromDataUrl=getFilefromDataUrl,imageCompression.loadImage=loadImage,imageCompression.drawImageInCanvas=drawImageInCanvas,imageCompression.drawFileInCanvas=drawFileInCanvas,imageCompression.canvasToFile=canvasToFile,imageCompression.getExifOrientation=getExifOrientation,imageCompression.handleMaxWidthOrHeight=handleMaxWidthOrHeight,imageCompression.followExifOrientation=followExifOrientation,imageCompression.cleanupCanvasMemory=cleanupCanvasMemory,imageCompression.isAutoOrientationInBrowser=isAutoOrientationInBrowser,imageCompression.approximateBelowMaximumCanvasSizeOfBrowser=approximateBelowMaximumCanvasSizeOfBrowser,imageCompression.copyExifWithoutOrientation=copyExifWithoutOrientation,imageCompression.getBrowserName=getBrowserName,imageCompression.version="2.0.2";

const convertBase64StringToFile = (base64String, filename) => {
    const arr = base64String.split(',');
    const mime = arr[0]?.match(/:(.*?);/)[1];
    if (!arr[1])
        throw new Error("Missing base64 data");
    const bstr = window.atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
};
const handleImageCompression = async (file) => {
    const options = {
        maxSizeMB: 0.3,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
    };
    try {
        const compressedFile = await imageCompression(file, options);
        return compressedFile;
    }
    catch (error) {
        console.error(error);
        return;
    }
};
const fetchAndProcessImage = async (imageUrl, fileName) => {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const file = new File([blob], fileName, { type: blob.type });
        const compressedFile = await handleImageCompression(file);
        if (compressedFile) {
            return new File([compressedFile], file.name, { type: file.type });
        }
        else {
            return file;
        }
    }
    catch (error) {
        console.error("Error fetching or processing image:", error);
        return null;
    }
};

var global$1 = (typeof global !== "undefined" ? global :
  typeof self !== "undefined" ? self :
  typeof window !== "undefined" ? window : {});

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var env = {};

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = global$1.performance || {};
performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

var browser$1 = {
  nextTick: nextTick,
  env: env};

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (browser$1.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;

	if (browser$1.env.NODE_ENV === 'production') {
	  reactIs.exports = requireReactIs_production_min();
	} else {
	  reactIs.exports = requireReactIs_development();
	}
	return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (browser$1.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = /*@__PURE__*/ requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (browser$1.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (browser$1.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();
	var has = /*@__PURE__*/ requireHas();
	var checkPropTypes = /*@__PURE__*/ requireCheckPropTypes();

	var printWarning = function() {};

	if (browser$1.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (browser$1.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (browser$1.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (browser$1.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      browser$1.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

var hasRequiredPropTypes;

function requirePropTypes () {
	if (hasRequiredPropTypes) return propTypes.exports;
	hasRequiredPropTypes = 1;
	if (browser$1.env.NODE_ENV !== 'production') {
	  var ReactIs = requireReactIs();

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  propTypes.exports = /*@__PURE__*/ requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  propTypes.exports = /*@__PURE__*/ requireFactoryWithThrowingShims()();
	}
	return propTypes.exports;
}

var propTypesExports = /*@__PURE__*/ requirePropTypes();
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const COMMON_MIME_TYPES = new Map([
    // https://github.com/guzzle/psr7/blob/2d9260799e713f1c475d3c5fdc3d6561ff7441b2/src/MimeType.php
    ['1km', 'application/vnd.1000minds.decision-model+xml'],
    ['3dml', 'text/vnd.in3d.3dml'],
    ['3ds', 'image/x-3ds'],
    ['3g2', 'video/3gpp2'],
    ['3gp', 'video/3gp'],
    ['3gpp', 'video/3gpp'],
    ['3mf', 'model/3mf'],
    ['7z', 'application/x-7z-compressed'],
    ['7zip', 'application/x-7z-compressed'],
    ['123', 'application/vnd.lotus-1-2-3'],
    ['aab', 'application/x-authorware-bin'],
    ['aac', 'audio/x-acc'],
    ['aam', 'application/x-authorware-map'],
    ['aas', 'application/x-authorware-seg'],
    ['abw', 'application/x-abiword'],
    ['ac', 'application/vnd.nokia.n-gage.ac+xml'],
    ['ac3', 'audio/ac3'],
    ['acc', 'application/vnd.americandynamics.acc'],
    ['ace', 'application/x-ace-compressed'],
    ['acu', 'application/vnd.acucobol'],
    ['acutc', 'application/vnd.acucorp'],
    ['adp', 'audio/adpcm'],
    ['aep', 'application/vnd.audiograph'],
    ['afm', 'application/x-font-type1'],
    ['afp', 'application/vnd.ibm.modcap'],
    ['ahead', 'application/vnd.ahead.space'],
    ['ai', 'application/pdf'],
    ['aif', 'audio/x-aiff'],
    ['aifc', 'audio/x-aiff'],
    ['aiff', 'audio/x-aiff'],
    ['air', 'application/vnd.adobe.air-application-installer-package+zip'],
    ['ait', 'application/vnd.dvb.ait'],
    ['ami', 'application/vnd.amiga.ami'],
    ['amr', 'audio/amr'],
    ['apk', 'application/vnd.android.package-archive'],
    ['apng', 'image/apng'],
    ['appcache', 'text/cache-manifest'],
    ['application', 'application/x-ms-application'],
    ['apr', 'application/vnd.lotus-approach'],
    ['arc', 'application/x-freearc'],
    ['arj', 'application/x-arj'],
    ['asc', 'application/pgp-signature'],
    ['asf', 'video/x-ms-asf'],
    ['asm', 'text/x-asm'],
    ['aso', 'application/vnd.accpac.simply.aso'],
    ['asx', 'video/x-ms-asf'],
    ['atc', 'application/vnd.acucorp'],
    ['atom', 'application/atom+xml'],
    ['atomcat', 'application/atomcat+xml'],
    ['atomdeleted', 'application/atomdeleted+xml'],
    ['atomsvc', 'application/atomsvc+xml'],
    ['atx', 'application/vnd.antix.game-component'],
    ['au', 'audio/x-au'],
    ['avi', 'video/x-msvideo'],
    ['avif', 'image/avif'],
    ['aw', 'application/applixware'],
    ['azf', 'application/vnd.airzip.filesecure.azf'],
    ['azs', 'application/vnd.airzip.filesecure.azs'],
    ['azv', 'image/vnd.airzip.accelerator.azv'],
    ['azw', 'application/vnd.amazon.ebook'],
    ['b16', 'image/vnd.pco.b16'],
    ['bat', 'application/x-msdownload'],
    ['bcpio', 'application/x-bcpio'],
    ['bdf', 'application/x-font-bdf'],
    ['bdm', 'application/vnd.syncml.dm+wbxml'],
    ['bdoc', 'application/x-bdoc'],
    ['bed', 'application/vnd.realvnc.bed'],
    ['bh2', 'application/vnd.fujitsu.oasysprs'],
    ['bin', 'application/octet-stream'],
    ['blb', 'application/x-blorb'],
    ['blorb', 'application/x-blorb'],
    ['bmi', 'application/vnd.bmi'],
    ['bmml', 'application/vnd.balsamiq.bmml+xml'],
    ['bmp', 'image/bmp'],
    ['book', 'application/vnd.framemaker'],
    ['box', 'application/vnd.previewsystems.box'],
    ['boz', 'application/x-bzip2'],
    ['bpk', 'application/octet-stream'],
    ['bpmn', 'application/octet-stream'],
    ['bsp', 'model/vnd.valve.source.compiled-map'],
    ['btif', 'image/prs.btif'],
    ['buffer', 'application/octet-stream'],
    ['bz', 'application/x-bzip'],
    ['bz2', 'application/x-bzip2'],
    ['c', 'text/x-c'],
    ['c4d', 'application/vnd.clonk.c4group'],
    ['c4f', 'application/vnd.clonk.c4group'],
    ['c4g', 'application/vnd.clonk.c4group'],
    ['c4p', 'application/vnd.clonk.c4group'],
    ['c4u', 'application/vnd.clonk.c4group'],
    ['c11amc', 'application/vnd.cluetrust.cartomobile-config'],
    ['c11amz', 'application/vnd.cluetrust.cartomobile-config-pkg'],
    ['cab', 'application/vnd.ms-cab-compressed'],
    ['caf', 'audio/x-caf'],
    ['cap', 'application/vnd.tcpdump.pcap'],
    ['car', 'application/vnd.curl.car'],
    ['cat', 'application/vnd.ms-pki.seccat'],
    ['cb7', 'application/x-cbr'],
    ['cba', 'application/x-cbr'],
    ['cbr', 'application/x-cbr'],
    ['cbt', 'application/x-cbr'],
    ['cbz', 'application/x-cbr'],
    ['cc', 'text/x-c'],
    ['cco', 'application/x-cocoa'],
    ['cct', 'application/x-director'],
    ['ccxml', 'application/ccxml+xml'],
    ['cdbcmsg', 'application/vnd.contact.cmsg'],
    ['cda', 'application/x-cdf'],
    ['cdf', 'application/x-netcdf'],
    ['cdfx', 'application/cdfx+xml'],
    ['cdkey', 'application/vnd.mediastation.cdkey'],
    ['cdmia', 'application/cdmi-capability'],
    ['cdmic', 'application/cdmi-container'],
    ['cdmid', 'application/cdmi-domain'],
    ['cdmio', 'application/cdmi-object'],
    ['cdmiq', 'application/cdmi-queue'],
    ['cdr', 'application/cdr'],
    ['cdx', 'chemical/x-cdx'],
    ['cdxml', 'application/vnd.chemdraw+xml'],
    ['cdy', 'application/vnd.cinderella'],
    ['cer', 'application/pkix-cert'],
    ['cfs', 'application/x-cfs-compressed'],
    ['cgm', 'image/cgm'],
    ['chat', 'application/x-chat'],
    ['chm', 'application/vnd.ms-htmlhelp'],
    ['chrt', 'application/vnd.kde.kchart'],
    ['cif', 'chemical/x-cif'],
    ['cii', 'application/vnd.anser-web-certificate-issue-initiation'],
    ['cil', 'application/vnd.ms-artgalry'],
    ['cjs', 'application/node'],
    ['cla', 'application/vnd.claymore'],
    ['class', 'application/octet-stream'],
    ['clkk', 'application/vnd.crick.clicker.keyboard'],
    ['clkp', 'application/vnd.crick.clicker.palette'],
    ['clkt', 'application/vnd.crick.clicker.template'],
    ['clkw', 'application/vnd.crick.clicker.wordbank'],
    ['clkx', 'application/vnd.crick.clicker'],
    ['clp', 'application/x-msclip'],
    ['cmc', 'application/vnd.cosmocaller'],
    ['cmdf', 'chemical/x-cmdf'],
    ['cml', 'chemical/x-cml'],
    ['cmp', 'application/vnd.yellowriver-custom-menu'],
    ['cmx', 'image/x-cmx'],
    ['cod', 'application/vnd.rim.cod'],
    ['coffee', 'text/coffeescript'],
    ['com', 'application/x-msdownload'],
    ['conf', 'text/plain'],
    ['cpio', 'application/x-cpio'],
    ['cpp', 'text/x-c'],
    ['cpt', 'application/mac-compactpro'],
    ['crd', 'application/x-mscardfile'],
    ['crl', 'application/pkix-crl'],
    ['crt', 'application/x-x509-ca-cert'],
    ['crx', 'application/x-chrome-extension'],
    ['cryptonote', 'application/vnd.rig.cryptonote'],
    ['csh', 'application/x-csh'],
    ['csl', 'application/vnd.citationstyles.style+xml'],
    ['csml', 'chemical/x-csml'],
    ['csp', 'application/vnd.commonspace'],
    ['csr', 'application/octet-stream'],
    ['css', 'text/css'],
    ['cst', 'application/x-director'],
    ['csv', 'text/csv'],
    ['cu', 'application/cu-seeme'],
    ['curl', 'text/vnd.curl'],
    ['cww', 'application/prs.cww'],
    ['cxt', 'application/x-director'],
    ['cxx', 'text/x-c'],
    ['dae', 'model/vnd.collada+xml'],
    ['daf', 'application/vnd.mobius.daf'],
    ['dart', 'application/vnd.dart'],
    ['dataless', 'application/vnd.fdsn.seed'],
    ['davmount', 'application/davmount+xml'],
    ['dbf', 'application/vnd.dbf'],
    ['dbk', 'application/docbook+xml'],
    ['dcr', 'application/x-director'],
    ['dcurl', 'text/vnd.curl.dcurl'],
    ['dd2', 'application/vnd.oma.dd2+xml'],
    ['ddd', 'application/vnd.fujixerox.ddd'],
    ['ddf', 'application/vnd.syncml.dmddf+xml'],
    ['dds', 'image/vnd.ms-dds'],
    ['deb', 'application/x-debian-package'],
    ['def', 'text/plain'],
    ['deploy', 'application/octet-stream'],
    ['der', 'application/x-x509-ca-cert'],
    ['dfac', 'application/vnd.dreamfactory'],
    ['dgc', 'application/x-dgc-compressed'],
    ['dic', 'text/x-c'],
    ['dir', 'application/x-director'],
    ['dis', 'application/vnd.mobius.dis'],
    ['disposition-notification', 'message/disposition-notification'],
    ['dist', 'application/octet-stream'],
    ['distz', 'application/octet-stream'],
    ['djv', 'image/vnd.djvu'],
    ['djvu', 'image/vnd.djvu'],
    ['dll', 'application/octet-stream'],
    ['dmg', 'application/x-apple-diskimage'],
    ['dmn', 'application/octet-stream'],
    ['dmp', 'application/vnd.tcpdump.pcap'],
    ['dms', 'application/octet-stream'],
    ['dna', 'application/vnd.dna'],
    ['doc', 'application/msword'],
    ['docm', 'application/vnd.ms-word.template.macroEnabled.12'],
    ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    ['dot', 'application/msword'],
    ['dotm', 'application/vnd.ms-word.template.macroEnabled.12'],
    ['dotx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.template'],
    ['dp', 'application/vnd.osgi.dp'],
    ['dpg', 'application/vnd.dpgraph'],
    ['dra', 'audio/vnd.dra'],
    ['drle', 'image/dicom-rle'],
    ['dsc', 'text/prs.lines.tag'],
    ['dssc', 'application/dssc+der'],
    ['dtb', 'application/x-dtbook+xml'],
    ['dtd', 'application/xml-dtd'],
    ['dts', 'audio/vnd.dts'],
    ['dtshd', 'audio/vnd.dts.hd'],
    ['dump', 'application/octet-stream'],
    ['dvb', 'video/vnd.dvb.file'],
    ['dvi', 'application/x-dvi'],
    ['dwd', 'application/atsc-dwd+xml'],
    ['dwf', 'model/vnd.dwf'],
    ['dwg', 'image/vnd.dwg'],
    ['dxf', 'image/vnd.dxf'],
    ['dxp', 'application/vnd.spotfire.dxp'],
    ['dxr', 'application/x-director'],
    ['ear', 'application/java-archive'],
    ['ecelp4800', 'audio/vnd.nuera.ecelp4800'],
    ['ecelp7470', 'audio/vnd.nuera.ecelp7470'],
    ['ecelp9600', 'audio/vnd.nuera.ecelp9600'],
    ['ecma', 'application/ecmascript'],
    ['edm', 'application/vnd.novadigm.edm'],
    ['edx', 'application/vnd.novadigm.edx'],
    ['efif', 'application/vnd.picsel'],
    ['ei6', 'application/vnd.pg.osasli'],
    ['elc', 'application/octet-stream'],
    ['emf', 'image/emf'],
    ['eml', 'message/rfc822'],
    ['emma', 'application/emma+xml'],
    ['emotionml', 'application/emotionml+xml'],
    ['emz', 'application/x-msmetafile'],
    ['eol', 'audio/vnd.digital-winds'],
    ['eot', 'application/vnd.ms-fontobject'],
    ['eps', 'application/postscript'],
    ['epub', 'application/epub+zip'],
    ['es', 'application/ecmascript'],
    ['es3', 'application/vnd.eszigno3+xml'],
    ['esa', 'application/vnd.osgi.subsystem'],
    ['esf', 'application/vnd.epson.esf'],
    ['et3', 'application/vnd.eszigno3+xml'],
    ['etx', 'text/x-setext'],
    ['eva', 'application/x-eva'],
    ['evy', 'application/x-envoy'],
    ['exe', 'application/octet-stream'],
    ['exi', 'application/exi'],
    ['exp', 'application/express'],
    ['exr', 'image/aces'],
    ['ext', 'application/vnd.novadigm.ext'],
    ['ez', 'application/andrew-inset'],
    ['ez2', 'application/vnd.ezpix-album'],
    ['ez3', 'application/vnd.ezpix-package'],
    ['f', 'text/x-fortran'],
    ['f4v', 'video/mp4'],
    ['f77', 'text/x-fortran'],
    ['f90', 'text/x-fortran'],
    ['fbs', 'image/vnd.fastbidsheet'],
    ['fcdt', 'application/vnd.adobe.formscentral.fcdt'],
    ['fcs', 'application/vnd.isac.fcs'],
    ['fdf', 'application/vnd.fdf'],
    ['fdt', 'application/fdt+xml'],
    ['fe_launch', 'application/vnd.denovo.fcselayout-link'],
    ['fg5', 'application/vnd.fujitsu.oasysgp'],
    ['fgd', 'application/x-director'],
    ['fh', 'image/x-freehand'],
    ['fh4', 'image/x-freehand'],
    ['fh5', 'image/x-freehand'],
    ['fh7', 'image/x-freehand'],
    ['fhc', 'image/x-freehand'],
    ['fig', 'application/x-xfig'],
    ['fits', 'image/fits'],
    ['flac', 'audio/x-flac'],
    ['fli', 'video/x-fli'],
    ['flo', 'application/vnd.micrografx.flo'],
    ['flv', 'video/x-flv'],
    ['flw', 'application/vnd.kde.kivio'],
    ['flx', 'text/vnd.fmi.flexstor'],
    ['fly', 'text/vnd.fly'],
    ['fm', 'application/vnd.framemaker'],
    ['fnc', 'application/vnd.frogans.fnc'],
    ['fo', 'application/vnd.software602.filler.form+xml'],
    ['for', 'text/x-fortran'],
    ['fpx', 'image/vnd.fpx'],
    ['frame', 'application/vnd.framemaker'],
    ['fsc', 'application/vnd.fsc.weblaunch'],
    ['fst', 'image/vnd.fst'],
    ['ftc', 'application/vnd.fluxtime.clip'],
    ['fti', 'application/vnd.anser-web-funds-transfer-initiation'],
    ['fvt', 'video/vnd.fvt'],
    ['fxp', 'application/vnd.adobe.fxp'],
    ['fxpl', 'application/vnd.adobe.fxp'],
    ['fzs', 'application/vnd.fuzzysheet'],
    ['g2w', 'application/vnd.geoplan'],
    ['g3', 'image/g3fax'],
    ['g3w', 'application/vnd.geospace'],
    ['gac', 'application/vnd.groove-account'],
    ['gam', 'application/x-tads'],
    ['gbr', 'application/rpki-ghostbusters'],
    ['gca', 'application/x-gca-compressed'],
    ['gdl', 'model/vnd.gdl'],
    ['gdoc', 'application/vnd.google-apps.document'],
    ['geo', 'application/vnd.dynageo'],
    ['geojson', 'application/geo+json'],
    ['gex', 'application/vnd.geometry-explorer'],
    ['ggb', 'application/vnd.geogebra.file'],
    ['ggt', 'application/vnd.geogebra.tool'],
    ['ghf', 'application/vnd.groove-help'],
    ['gif', 'image/gif'],
    ['gim', 'application/vnd.groove-identity-message'],
    ['glb', 'model/gltf-binary'],
    ['gltf', 'model/gltf+json'],
    ['gml', 'application/gml+xml'],
    ['gmx', 'application/vnd.gmx'],
    ['gnumeric', 'application/x-gnumeric'],
    ['gpg', 'application/gpg-keys'],
    ['gph', 'application/vnd.flographit'],
    ['gpx', 'application/gpx+xml'],
    ['gqf', 'application/vnd.grafeq'],
    ['gqs', 'application/vnd.grafeq'],
    ['gram', 'application/srgs'],
    ['gramps', 'application/x-gramps-xml'],
    ['gre', 'application/vnd.geometry-explorer'],
    ['grv', 'application/vnd.groove-injector'],
    ['grxml', 'application/srgs+xml'],
    ['gsf', 'application/x-font-ghostscript'],
    ['gsheet', 'application/vnd.google-apps.spreadsheet'],
    ['gslides', 'application/vnd.google-apps.presentation'],
    ['gtar', 'application/x-gtar'],
    ['gtm', 'application/vnd.groove-tool-message'],
    ['gtw', 'model/vnd.gtw'],
    ['gv', 'text/vnd.graphviz'],
    ['gxf', 'application/gxf'],
    ['gxt', 'application/vnd.geonext'],
    ['gz', 'application/gzip'],
    ['gzip', 'application/gzip'],
    ['h', 'text/x-c'],
    ['h261', 'video/h261'],
    ['h263', 'video/h263'],
    ['h264', 'video/h264'],
    ['hal', 'application/vnd.hal+xml'],
    ['hbci', 'application/vnd.hbci'],
    ['hbs', 'text/x-handlebars-template'],
    ['hdd', 'application/x-virtualbox-hdd'],
    ['hdf', 'application/x-hdf'],
    ['heic', 'image/heic'],
    ['heics', 'image/heic-sequence'],
    ['heif', 'image/heif'],
    ['heifs', 'image/heif-sequence'],
    ['hej2', 'image/hej2k'],
    ['held', 'application/atsc-held+xml'],
    ['hh', 'text/x-c'],
    ['hjson', 'application/hjson'],
    ['hlp', 'application/winhlp'],
    ['hpgl', 'application/vnd.hp-hpgl'],
    ['hpid', 'application/vnd.hp-hpid'],
    ['hps', 'application/vnd.hp-hps'],
    ['hqx', 'application/mac-binhex40'],
    ['hsj2', 'image/hsj2'],
    ['htc', 'text/x-component'],
    ['htke', 'application/vnd.kenameaapp'],
    ['htm', 'text/html'],
    ['html', 'text/html'],
    ['hvd', 'application/vnd.yamaha.hv-dic'],
    ['hvp', 'application/vnd.yamaha.hv-voice'],
    ['hvs', 'application/vnd.yamaha.hv-script'],
    ['i2g', 'application/vnd.intergeo'],
    ['icc', 'application/vnd.iccprofile'],
    ['ice', 'x-conference/x-cooltalk'],
    ['icm', 'application/vnd.iccprofile'],
    ['ico', 'image/x-icon'],
    ['ics', 'text/calendar'],
    ['ief', 'image/ief'],
    ['ifb', 'text/calendar'],
    ['ifm', 'application/vnd.shana.informed.formdata'],
    ['iges', 'model/iges'],
    ['igl', 'application/vnd.igloader'],
    ['igm', 'application/vnd.insors.igm'],
    ['igs', 'model/iges'],
    ['igx', 'application/vnd.micrografx.igx'],
    ['iif', 'application/vnd.shana.informed.interchange'],
    ['img', 'application/octet-stream'],
    ['imp', 'application/vnd.accpac.simply.imp'],
    ['ims', 'application/vnd.ms-ims'],
    ['in', 'text/plain'],
    ['ini', 'text/plain'],
    ['ink', 'application/inkml+xml'],
    ['inkml', 'application/inkml+xml'],
    ['install', 'application/x-install-instructions'],
    ['iota', 'application/vnd.astraea-software.iota'],
    ['ipfix', 'application/ipfix'],
    ['ipk', 'application/vnd.shana.informed.package'],
    ['irm', 'application/vnd.ibm.rights-management'],
    ['irp', 'application/vnd.irepository.package+xml'],
    ['iso', 'application/x-iso9660-image'],
    ['itp', 'application/vnd.shana.informed.formtemplate'],
    ['its', 'application/its+xml'],
    ['ivp', 'application/vnd.immervision-ivp'],
    ['ivu', 'application/vnd.immervision-ivu'],
    ['jad', 'text/vnd.sun.j2me.app-descriptor'],
    ['jade', 'text/jade'],
    ['jam', 'application/vnd.jam'],
    ['jar', 'application/java-archive'],
    ['jardiff', 'application/x-java-archive-diff'],
    ['java', 'text/x-java-source'],
    ['jhc', 'image/jphc'],
    ['jisp', 'application/vnd.jisp'],
    ['jls', 'image/jls'],
    ['jlt', 'application/vnd.hp-jlyt'],
    ['jng', 'image/x-jng'],
    ['jnlp', 'application/x-java-jnlp-file'],
    ['joda', 'application/vnd.joost.joda-archive'],
    ['jp2', 'image/jp2'],
    ['jpe', 'image/jpeg'],
    ['jpeg', 'image/jpeg'],
    ['jpf', 'image/jpx'],
    ['jpg', 'image/jpeg'],
    ['jpg2', 'image/jp2'],
    ['jpgm', 'video/jpm'],
    ['jpgv', 'video/jpeg'],
    ['jph', 'image/jph'],
    ['jpm', 'video/jpm'],
    ['jpx', 'image/jpx'],
    ['js', 'application/javascript'],
    ['json', 'application/json'],
    ['json5', 'application/json5'],
    ['jsonld', 'application/ld+json'],
    // https://jsonlines.org/
    ['jsonl', 'application/jsonl'],
    ['jsonml', 'application/jsonml+json'],
    ['jsx', 'text/jsx'],
    ['jxr', 'image/jxr'],
    ['jxra', 'image/jxra'],
    ['jxrs', 'image/jxrs'],
    ['jxs', 'image/jxs'],
    ['jxsc', 'image/jxsc'],
    ['jxsi', 'image/jxsi'],
    ['jxss', 'image/jxss'],
    ['kar', 'audio/midi'],
    ['karbon', 'application/vnd.kde.karbon'],
    ['kdb', 'application/octet-stream'],
    ['kdbx', 'application/x-keepass2'],
    ['key', 'application/x-iwork-keynote-sffkey'],
    ['kfo', 'application/vnd.kde.kformula'],
    ['kia', 'application/vnd.kidspiration'],
    ['kml', 'application/vnd.google-earth.kml+xml'],
    ['kmz', 'application/vnd.google-earth.kmz'],
    ['kne', 'application/vnd.kinar'],
    ['knp', 'application/vnd.kinar'],
    ['kon', 'application/vnd.kde.kontour'],
    ['kpr', 'application/vnd.kde.kpresenter'],
    ['kpt', 'application/vnd.kde.kpresenter'],
    ['kpxx', 'application/vnd.ds-keypoint'],
    ['ksp', 'application/vnd.kde.kspread'],
    ['ktr', 'application/vnd.kahootz'],
    ['ktx', 'image/ktx'],
    ['ktx2', 'image/ktx2'],
    ['ktz', 'application/vnd.kahootz'],
    ['kwd', 'application/vnd.kde.kword'],
    ['kwt', 'application/vnd.kde.kword'],
    ['lasxml', 'application/vnd.las.las+xml'],
    ['latex', 'application/x-latex'],
    ['lbd', 'application/vnd.llamagraphics.life-balance.desktop'],
    ['lbe', 'application/vnd.llamagraphics.life-balance.exchange+xml'],
    ['les', 'application/vnd.hhe.lesson-player'],
    ['less', 'text/less'],
    ['lgr', 'application/lgr+xml'],
    ['lha', 'application/octet-stream'],
    ['link66', 'application/vnd.route66.link66+xml'],
    ['list', 'text/plain'],
    ['list3820', 'application/vnd.ibm.modcap'],
    ['listafp', 'application/vnd.ibm.modcap'],
    ['litcoffee', 'text/coffeescript'],
    ['lnk', 'application/x-ms-shortcut'],
    ['log', 'text/plain'],
    ['lostxml', 'application/lost+xml'],
    ['lrf', 'application/octet-stream'],
    ['lrm', 'application/vnd.ms-lrm'],
    ['ltf', 'application/vnd.frogans.ltf'],
    ['lua', 'text/x-lua'],
    ['luac', 'application/x-lua-bytecode'],
    ['lvp', 'audio/vnd.lucent.voice'],
    ['lwp', 'application/vnd.lotus-wordpro'],
    ['lzh', 'application/octet-stream'],
    ['m1v', 'video/mpeg'],
    ['m2a', 'audio/mpeg'],
    ['m2v', 'video/mpeg'],
    ['m3a', 'audio/mpeg'],
    ['m3u', 'text/plain'],
    ['m3u8', 'application/vnd.apple.mpegurl'],
    ['m4a', 'audio/x-m4a'],
    ['m4p', 'application/mp4'],
    ['m4s', 'video/iso.segment'],
    ['m4u', 'application/vnd.mpegurl'],
    ['m4v', 'video/x-m4v'],
    ['m13', 'application/x-msmediaview'],
    ['m14', 'application/x-msmediaview'],
    ['m21', 'application/mp21'],
    ['ma', 'application/mathematica'],
    ['mads', 'application/mads+xml'],
    ['maei', 'application/mmt-aei+xml'],
    ['mag', 'application/vnd.ecowin.chart'],
    ['maker', 'application/vnd.framemaker'],
    ['man', 'text/troff'],
    ['manifest', 'text/cache-manifest'],
    ['map', 'application/json'],
    ['mar', 'application/octet-stream'],
    ['markdown', 'text/markdown'],
    ['mathml', 'application/mathml+xml'],
    ['mb', 'application/mathematica'],
    ['mbk', 'application/vnd.mobius.mbk'],
    ['mbox', 'application/mbox'],
    ['mc1', 'application/vnd.medcalcdata'],
    ['mcd', 'application/vnd.mcd'],
    ['mcurl', 'text/vnd.curl.mcurl'],
    ['md', 'text/markdown'],
    ['mdb', 'application/x-msaccess'],
    ['mdi', 'image/vnd.ms-modi'],
    ['mdx', 'text/mdx'],
    ['me', 'text/troff'],
    ['mesh', 'model/mesh'],
    ['meta4', 'application/metalink4+xml'],
    ['metalink', 'application/metalink+xml'],
    ['mets', 'application/mets+xml'],
    ['mfm', 'application/vnd.mfmp'],
    ['mft', 'application/rpki-manifest'],
    ['mgp', 'application/vnd.osgeo.mapguide.package'],
    ['mgz', 'application/vnd.proteus.magazine'],
    ['mid', 'audio/midi'],
    ['midi', 'audio/midi'],
    ['mie', 'application/x-mie'],
    ['mif', 'application/vnd.mif'],
    ['mime', 'message/rfc822'],
    ['mj2', 'video/mj2'],
    ['mjp2', 'video/mj2'],
    ['mjs', 'application/javascript'],
    ['mk3d', 'video/x-matroska'],
    ['mka', 'audio/x-matroska'],
    ['mkd', 'text/x-markdown'],
    ['mks', 'video/x-matroska'],
    ['mkv', 'video/x-matroska'],
    ['mlp', 'application/vnd.dolby.mlp'],
    ['mmd', 'application/vnd.chipnuts.karaoke-mmd'],
    ['mmf', 'application/vnd.smaf'],
    ['mml', 'text/mathml'],
    ['mmr', 'image/vnd.fujixerox.edmics-mmr'],
    ['mng', 'video/x-mng'],
    ['mny', 'application/x-msmoney'],
    ['mobi', 'application/x-mobipocket-ebook'],
    ['mods', 'application/mods+xml'],
    ['mov', 'video/quicktime'],
    ['movie', 'video/x-sgi-movie'],
    ['mp2', 'audio/mpeg'],
    ['mp2a', 'audio/mpeg'],
    ['mp3', 'audio/mpeg'],
    ['mp4', 'video/mp4'],
    ['mp4a', 'audio/mp4'],
    ['mp4s', 'application/mp4'],
    ['mp4v', 'video/mp4'],
    ['mp21', 'application/mp21'],
    ['mpc', 'application/vnd.mophun.certificate'],
    ['mpd', 'application/dash+xml'],
    ['mpe', 'video/mpeg'],
    ['mpeg', 'video/mpeg'],
    ['mpg', 'video/mpeg'],
    ['mpg4', 'video/mp4'],
    ['mpga', 'audio/mpeg'],
    ['mpkg', 'application/vnd.apple.installer+xml'],
    ['mpm', 'application/vnd.blueice.multipass'],
    ['mpn', 'application/vnd.mophun.application'],
    ['mpp', 'application/vnd.ms-project'],
    ['mpt', 'application/vnd.ms-project'],
    ['mpy', 'application/vnd.ibm.minipay'],
    ['mqy', 'application/vnd.mobius.mqy'],
    ['mrc', 'application/marc'],
    ['mrcx', 'application/marcxml+xml'],
    ['ms', 'text/troff'],
    ['mscml', 'application/mediaservercontrol+xml'],
    ['mseed', 'application/vnd.fdsn.mseed'],
    ['mseq', 'application/vnd.mseq'],
    ['msf', 'application/vnd.epson.msf'],
    ['msg', 'application/vnd.ms-outlook'],
    ['msh', 'model/mesh'],
    ['msi', 'application/x-msdownload'],
    ['msl', 'application/vnd.mobius.msl'],
    ['msm', 'application/octet-stream'],
    ['msp', 'application/octet-stream'],
    ['msty', 'application/vnd.muvee.style'],
    ['mtl', 'model/mtl'],
    ['mts', 'model/vnd.mts'],
    ['mus', 'application/vnd.musician'],
    ['musd', 'application/mmt-usd+xml'],
    ['musicxml', 'application/vnd.recordare.musicxml+xml'],
    ['mvb', 'application/x-msmediaview'],
    ['mvt', 'application/vnd.mapbox-vector-tile'],
    ['mwf', 'application/vnd.mfer'],
    ['mxf', 'application/mxf'],
    ['mxl', 'application/vnd.recordare.musicxml'],
    ['mxmf', 'audio/mobile-xmf'],
    ['mxml', 'application/xv+xml'],
    ['mxs', 'application/vnd.triscape.mxs'],
    ['mxu', 'video/vnd.mpegurl'],
    ['n-gage', 'application/vnd.nokia.n-gage.symbian.install'],
    ['n3', 'text/n3'],
    ['nb', 'application/mathematica'],
    ['nbp', 'application/vnd.wolfram.player'],
    ['nc', 'application/x-netcdf'],
    ['ncx', 'application/x-dtbncx+xml'],
    ['nfo', 'text/x-nfo'],
    ['ngdat', 'application/vnd.nokia.n-gage.data'],
    ['nitf', 'application/vnd.nitf'],
    ['nlu', 'application/vnd.neurolanguage.nlu'],
    ['nml', 'application/vnd.enliven'],
    ['nnd', 'application/vnd.noblenet-directory'],
    ['nns', 'application/vnd.noblenet-sealer'],
    ['nnw', 'application/vnd.noblenet-web'],
    ['npx', 'image/vnd.net-fpx'],
    ['nq', 'application/n-quads'],
    ['nsc', 'application/x-conference'],
    ['nsf', 'application/vnd.lotus-notes'],
    ['nt', 'application/n-triples'],
    ['ntf', 'application/vnd.nitf'],
    ['numbers', 'application/x-iwork-numbers-sffnumbers'],
    ['nzb', 'application/x-nzb'],
    ['oa2', 'application/vnd.fujitsu.oasys2'],
    ['oa3', 'application/vnd.fujitsu.oasys3'],
    ['oas', 'application/vnd.fujitsu.oasys'],
    ['obd', 'application/x-msbinder'],
    ['obgx', 'application/vnd.openblox.game+xml'],
    ['obj', 'model/obj'],
    ['oda', 'application/oda'],
    ['odb', 'application/vnd.oasis.opendocument.database'],
    ['odc', 'application/vnd.oasis.opendocument.chart'],
    ['odf', 'application/vnd.oasis.opendocument.formula'],
    ['odft', 'application/vnd.oasis.opendocument.formula-template'],
    ['odg', 'application/vnd.oasis.opendocument.graphics'],
    ['odi', 'application/vnd.oasis.opendocument.image'],
    ['odm', 'application/vnd.oasis.opendocument.text-master'],
    ['odp', 'application/vnd.oasis.opendocument.presentation'],
    ['ods', 'application/vnd.oasis.opendocument.spreadsheet'],
    ['odt', 'application/vnd.oasis.opendocument.text'],
    ['oga', 'audio/ogg'],
    ['ogex', 'model/vnd.opengex'],
    ['ogg', 'audio/ogg'],
    ['ogv', 'video/ogg'],
    ['ogx', 'application/ogg'],
    ['omdoc', 'application/omdoc+xml'],
    ['onepkg', 'application/onenote'],
    ['onetmp', 'application/onenote'],
    ['onetoc', 'application/onenote'],
    ['onetoc2', 'application/onenote'],
    ['opf', 'application/oebps-package+xml'],
    ['opml', 'text/x-opml'],
    ['oprc', 'application/vnd.palm'],
    ['opus', 'audio/ogg'],
    ['org', 'text/x-org'],
    ['osf', 'application/vnd.yamaha.openscoreformat'],
    ['osfpvg', 'application/vnd.yamaha.openscoreformat.osfpvg+xml'],
    ['osm', 'application/vnd.openstreetmap.data+xml'],
    ['otc', 'application/vnd.oasis.opendocument.chart-template'],
    ['otf', 'font/otf'],
    ['otg', 'application/vnd.oasis.opendocument.graphics-template'],
    ['oth', 'application/vnd.oasis.opendocument.text-web'],
    ['oti', 'application/vnd.oasis.opendocument.image-template'],
    ['otp', 'application/vnd.oasis.opendocument.presentation-template'],
    ['ots', 'application/vnd.oasis.opendocument.spreadsheet-template'],
    ['ott', 'application/vnd.oasis.opendocument.text-template'],
    ['ova', 'application/x-virtualbox-ova'],
    ['ovf', 'application/x-virtualbox-ovf'],
    ['owl', 'application/rdf+xml'],
    ['oxps', 'application/oxps'],
    ['oxt', 'application/vnd.openofficeorg.extension'],
    ['p', 'text/x-pascal'],
    ['p7a', 'application/x-pkcs7-signature'],
    ['p7b', 'application/x-pkcs7-certificates'],
    ['p7c', 'application/pkcs7-mime'],
    ['p7m', 'application/pkcs7-mime'],
    ['p7r', 'application/x-pkcs7-certreqresp'],
    ['p7s', 'application/pkcs7-signature'],
    ['p8', 'application/pkcs8'],
    ['p10', 'application/x-pkcs10'],
    ['p12', 'application/x-pkcs12'],
    ['pac', 'application/x-ns-proxy-autoconfig'],
    ['pages', 'application/x-iwork-pages-sffpages'],
    ['pas', 'text/x-pascal'],
    ['paw', 'application/vnd.pawaafile'],
    ['pbd', 'application/vnd.powerbuilder6'],
    ['pbm', 'image/x-portable-bitmap'],
    ['pcap', 'application/vnd.tcpdump.pcap'],
    ['pcf', 'application/x-font-pcf'],
    ['pcl', 'application/vnd.hp-pcl'],
    ['pclxl', 'application/vnd.hp-pclxl'],
    ['pct', 'image/x-pict'],
    ['pcurl', 'application/vnd.curl.pcurl'],
    ['pcx', 'image/x-pcx'],
    ['pdb', 'application/x-pilot'],
    ['pde', 'text/x-processing'],
    ['pdf', 'application/pdf'],
    ['pem', 'application/x-x509-user-cert'],
    ['pfa', 'application/x-font-type1'],
    ['pfb', 'application/x-font-type1'],
    ['pfm', 'application/x-font-type1'],
    ['pfr', 'application/font-tdpfr'],
    ['pfx', 'application/x-pkcs12'],
    ['pgm', 'image/x-portable-graymap'],
    ['pgn', 'application/x-chess-pgn'],
    ['pgp', 'application/pgp'],
    ['php', 'application/x-httpd-php'],
    ['php3', 'application/x-httpd-php'],
    ['php4', 'application/x-httpd-php'],
    ['phps', 'application/x-httpd-php-source'],
    ['phtml', 'application/x-httpd-php'],
    ['pic', 'image/x-pict'],
    ['pkg', 'application/octet-stream'],
    ['pki', 'application/pkixcmp'],
    ['pkipath', 'application/pkix-pkipath'],
    ['pkpass', 'application/vnd.apple.pkpass'],
    ['pl', 'application/x-perl'],
    ['plb', 'application/vnd.3gpp.pic-bw-large'],
    ['plc', 'application/vnd.mobius.plc'],
    ['plf', 'application/vnd.pocketlearn'],
    ['pls', 'application/pls+xml'],
    ['pm', 'application/x-perl'],
    ['pml', 'application/vnd.ctc-posml'],
    ['png', 'image/png'],
    ['pnm', 'image/x-portable-anymap'],
    ['portpkg', 'application/vnd.macports.portpkg'],
    ['pot', 'application/vnd.ms-powerpoint'],
    ['potm', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12'],
    ['potx', 'application/vnd.openxmlformats-officedocument.presentationml.template'],
    ['ppa', 'application/vnd.ms-powerpoint'],
    ['ppam', 'application/vnd.ms-powerpoint.addin.macroEnabled.12'],
    ['ppd', 'application/vnd.cups-ppd'],
    ['ppm', 'image/x-portable-pixmap'],
    ['pps', 'application/vnd.ms-powerpoint'],
    ['ppsm', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'],
    ['ppsx', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow'],
    ['ppt', 'application/powerpoint'],
    ['pptm', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12'],
    ['pptx', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
    ['pqa', 'application/vnd.palm'],
    ['prc', 'application/x-pilot'],
    ['pre', 'application/vnd.lotus-freelance'],
    ['prf', 'application/pics-rules'],
    ['provx', 'application/provenance+xml'],
    ['ps', 'application/postscript'],
    ['psb', 'application/vnd.3gpp.pic-bw-small'],
    ['psd', 'application/x-photoshop'],
    ['psf', 'application/x-font-linux-psf'],
    ['pskcxml', 'application/pskc+xml'],
    ['pti', 'image/prs.pti'],
    ['ptid', 'application/vnd.pvi.ptid1'],
    ['pub', 'application/x-mspublisher'],
    ['pvb', 'application/vnd.3gpp.pic-bw-var'],
    ['pwn', 'application/vnd.3m.post-it-notes'],
    ['pya', 'audio/vnd.ms-playready.media.pya'],
    ['pyv', 'video/vnd.ms-playready.media.pyv'],
    ['qam', 'application/vnd.epson.quickanime'],
    ['qbo', 'application/vnd.intu.qbo'],
    ['qfx', 'application/vnd.intu.qfx'],
    ['qps', 'application/vnd.publishare-delta-tree'],
    ['qt', 'video/quicktime'],
    ['qwd', 'application/vnd.quark.quarkxpress'],
    ['qwt', 'application/vnd.quark.quarkxpress'],
    ['qxb', 'application/vnd.quark.quarkxpress'],
    ['qxd', 'application/vnd.quark.quarkxpress'],
    ['qxl', 'application/vnd.quark.quarkxpress'],
    ['qxt', 'application/vnd.quark.quarkxpress'],
    ['ra', 'audio/x-realaudio'],
    ['ram', 'audio/x-pn-realaudio'],
    ['raml', 'application/raml+yaml'],
    ['rapd', 'application/route-apd+xml'],
    ['rar', 'application/x-rar'],
    ['ras', 'image/x-cmu-raster'],
    ['rcprofile', 'application/vnd.ipunplugged.rcprofile'],
    ['rdf', 'application/rdf+xml'],
    ['rdz', 'application/vnd.data-vision.rdz'],
    ['relo', 'application/p2p-overlay+xml'],
    ['rep', 'application/vnd.businessobjects'],
    ['res', 'application/x-dtbresource+xml'],
    ['rgb', 'image/x-rgb'],
    ['rif', 'application/reginfo+xml'],
    ['rip', 'audio/vnd.rip'],
    ['ris', 'application/x-research-info-systems'],
    ['rl', 'application/resource-lists+xml'],
    ['rlc', 'image/vnd.fujixerox.edmics-rlc'],
    ['rld', 'application/resource-lists-diff+xml'],
    ['rm', 'audio/x-pn-realaudio'],
    ['rmi', 'audio/midi'],
    ['rmp', 'audio/x-pn-realaudio-plugin'],
    ['rms', 'application/vnd.jcp.javame.midlet-rms'],
    ['rmvb', 'application/vnd.rn-realmedia-vbr'],
    ['rnc', 'application/relax-ng-compact-syntax'],
    ['rng', 'application/xml'],
    ['roa', 'application/rpki-roa'],
    ['roff', 'text/troff'],
    ['rp9', 'application/vnd.cloanto.rp9'],
    ['rpm', 'audio/x-pn-realaudio-plugin'],
    ['rpss', 'application/vnd.nokia.radio-presets'],
    ['rpst', 'application/vnd.nokia.radio-preset'],
    ['rq', 'application/sparql-query'],
    ['rs', 'application/rls-services+xml'],
    ['rsa', 'application/x-pkcs7'],
    ['rsat', 'application/atsc-rsat+xml'],
    ['rsd', 'application/rsd+xml'],
    ['rsheet', 'application/urc-ressheet+xml'],
    ['rss', 'application/rss+xml'],
    ['rtf', 'text/rtf'],
    ['rtx', 'text/richtext'],
    ['run', 'application/x-makeself'],
    ['rusd', 'application/route-usd+xml'],
    ['rv', 'video/vnd.rn-realvideo'],
    ['s', 'text/x-asm'],
    ['s3m', 'audio/s3m'],
    ['saf', 'application/vnd.yamaha.smaf-audio'],
    ['sass', 'text/x-sass'],
    ['sbml', 'application/sbml+xml'],
    ['sc', 'application/vnd.ibm.secure-container'],
    ['scd', 'application/x-msschedule'],
    ['scm', 'application/vnd.lotus-screencam'],
    ['scq', 'application/scvp-cv-request'],
    ['scs', 'application/scvp-cv-response'],
    ['scss', 'text/x-scss'],
    ['scurl', 'text/vnd.curl.scurl'],
    ['sda', 'application/vnd.stardivision.draw'],
    ['sdc', 'application/vnd.stardivision.calc'],
    ['sdd', 'application/vnd.stardivision.impress'],
    ['sdkd', 'application/vnd.solent.sdkm+xml'],
    ['sdkm', 'application/vnd.solent.sdkm+xml'],
    ['sdp', 'application/sdp'],
    ['sdw', 'application/vnd.stardivision.writer'],
    ['sea', 'application/octet-stream'],
    ['see', 'application/vnd.seemail'],
    ['seed', 'application/vnd.fdsn.seed'],
    ['sema', 'application/vnd.sema'],
    ['semd', 'application/vnd.semd'],
    ['semf', 'application/vnd.semf'],
    ['senmlx', 'application/senml+xml'],
    ['sensmlx', 'application/sensml+xml'],
    ['ser', 'application/java-serialized-object'],
    ['setpay', 'application/set-payment-initiation'],
    ['setreg', 'application/set-registration-initiation'],
    ['sfd-hdstx', 'application/vnd.hydrostatix.sof-data'],
    ['sfs', 'application/vnd.spotfire.sfs'],
    ['sfv', 'text/x-sfv'],
    ['sgi', 'image/sgi'],
    ['sgl', 'application/vnd.stardivision.writer-global'],
    ['sgm', 'text/sgml'],
    ['sgml', 'text/sgml'],
    ['sh', 'application/x-sh'],
    ['shar', 'application/x-shar'],
    ['shex', 'text/shex'],
    ['shf', 'application/shf+xml'],
    ['shtml', 'text/html'],
    ['sid', 'image/x-mrsid-image'],
    ['sieve', 'application/sieve'],
    ['sig', 'application/pgp-signature'],
    ['sil', 'audio/silk'],
    ['silo', 'model/mesh'],
    ['sis', 'application/vnd.symbian.install'],
    ['sisx', 'application/vnd.symbian.install'],
    ['sit', 'application/x-stuffit'],
    ['sitx', 'application/x-stuffitx'],
    ['siv', 'application/sieve'],
    ['skd', 'application/vnd.koan'],
    ['skm', 'application/vnd.koan'],
    ['skp', 'application/vnd.koan'],
    ['skt', 'application/vnd.koan'],
    ['sldm', 'application/vnd.ms-powerpoint.slide.macroenabled.12'],
    ['sldx', 'application/vnd.openxmlformats-officedocument.presentationml.slide'],
    ['slim', 'text/slim'],
    ['slm', 'text/slim'],
    ['sls', 'application/route-s-tsid+xml'],
    ['slt', 'application/vnd.epson.salt'],
    ['sm', 'application/vnd.stepmania.stepchart'],
    ['smf', 'application/vnd.stardivision.math'],
    ['smi', 'application/smil'],
    ['smil', 'application/smil'],
    ['smv', 'video/x-smv'],
    ['smzip', 'application/vnd.stepmania.package'],
    ['snd', 'audio/basic'],
    ['snf', 'application/x-font-snf'],
    ['so', 'application/octet-stream'],
    ['spc', 'application/x-pkcs7-certificates'],
    ['spdx', 'text/spdx'],
    ['spf', 'application/vnd.yamaha.smaf-phrase'],
    ['spl', 'application/x-futuresplash'],
    ['spot', 'text/vnd.in3d.spot'],
    ['spp', 'application/scvp-vp-response'],
    ['spq', 'application/scvp-vp-request'],
    ['spx', 'audio/ogg'],
    ['sql', 'application/x-sql'],
    ['src', 'application/x-wais-source'],
    ['srt', 'application/x-subrip'],
    ['sru', 'application/sru+xml'],
    ['srx', 'application/sparql-results+xml'],
    ['ssdl', 'application/ssdl+xml'],
    ['sse', 'application/vnd.kodak-descriptor'],
    ['ssf', 'application/vnd.epson.ssf'],
    ['ssml', 'application/ssml+xml'],
    ['sst', 'application/octet-stream'],
    ['st', 'application/vnd.sailingtracker.track'],
    ['stc', 'application/vnd.sun.xml.calc.template'],
    ['std', 'application/vnd.sun.xml.draw.template'],
    ['stf', 'application/vnd.wt.stf'],
    ['sti', 'application/vnd.sun.xml.impress.template'],
    ['stk', 'application/hyperstudio'],
    ['stl', 'model/stl'],
    ['stpx', 'model/step+xml'],
    ['stpxz', 'model/step-xml+zip'],
    ['stpz', 'model/step+zip'],
    ['str', 'application/vnd.pg.format'],
    ['stw', 'application/vnd.sun.xml.writer.template'],
    ['styl', 'text/stylus'],
    ['stylus', 'text/stylus'],
    ['sub', 'text/vnd.dvb.subtitle'],
    ['sus', 'application/vnd.sus-calendar'],
    ['susp', 'application/vnd.sus-calendar'],
    ['sv4cpio', 'application/x-sv4cpio'],
    ['sv4crc', 'application/x-sv4crc'],
    ['svc', 'application/vnd.dvb.service'],
    ['svd', 'application/vnd.svd'],
    ['svg', 'image/svg+xml'],
    ['svgz', 'image/svg+xml'],
    ['swa', 'application/x-director'],
    ['swf', 'application/x-shockwave-flash'],
    ['swi', 'application/vnd.aristanetworks.swi'],
    ['swidtag', 'application/swid+xml'],
    ['sxc', 'application/vnd.sun.xml.calc'],
    ['sxd', 'application/vnd.sun.xml.draw'],
    ['sxg', 'application/vnd.sun.xml.writer.global'],
    ['sxi', 'application/vnd.sun.xml.impress'],
    ['sxm', 'application/vnd.sun.xml.math'],
    ['sxw', 'application/vnd.sun.xml.writer'],
    ['t', 'text/troff'],
    ['t3', 'application/x-t3vm-image'],
    ['t38', 'image/t38'],
    ['taglet', 'application/vnd.mynfc'],
    ['tao', 'application/vnd.tao.intent-module-archive'],
    ['tap', 'image/vnd.tencent.tap'],
    ['tar', 'application/x-tar'],
    ['tcap', 'application/vnd.3gpp2.tcap'],
    ['tcl', 'application/x-tcl'],
    ['td', 'application/urc-targetdesc+xml'],
    ['teacher', 'application/vnd.smart.teacher'],
    ['tei', 'application/tei+xml'],
    ['teicorpus', 'application/tei+xml'],
    ['tex', 'application/x-tex'],
    ['texi', 'application/x-texinfo'],
    ['texinfo', 'application/x-texinfo'],
    ['text', 'text/plain'],
    ['tfi', 'application/thraud+xml'],
    ['tfm', 'application/x-tex-tfm'],
    ['tfx', 'image/tiff-fx'],
    ['tga', 'image/x-tga'],
    ['tgz', 'application/x-tar'],
    ['thmx', 'application/vnd.ms-officetheme'],
    ['tif', 'image/tiff'],
    ['tiff', 'image/tiff'],
    ['tk', 'application/x-tcl'],
    ['tmo', 'application/vnd.tmobile-livetv'],
    ['toml', 'application/toml'],
    ['torrent', 'application/x-bittorrent'],
    ['tpl', 'application/vnd.groove-tool-template'],
    ['tpt', 'application/vnd.trid.tpt'],
    ['tr', 'text/troff'],
    ['tra', 'application/vnd.trueapp'],
    ['trig', 'application/trig'],
    ['trm', 'application/x-msterminal'],
    ['ts', 'video/mp2t'],
    ['tsd', 'application/timestamped-data'],
    ['tsv', 'text/tab-separated-values'],
    ['ttc', 'font/collection'],
    ['ttf', 'font/ttf'],
    ['ttl', 'text/turtle'],
    ['ttml', 'application/ttml+xml'],
    ['twd', 'application/vnd.simtech-mindmapper'],
    ['twds', 'application/vnd.simtech-mindmapper'],
    ['txd', 'application/vnd.genomatix.tuxedo'],
    ['txf', 'application/vnd.mobius.txf'],
    ['txt', 'text/plain'],
    ['u8dsn', 'message/global-delivery-status'],
    ['u8hdr', 'message/global-headers'],
    ['u8mdn', 'message/global-disposition-notification'],
    ['u8msg', 'message/global'],
    ['u32', 'application/x-authorware-bin'],
    ['ubj', 'application/ubjson'],
    ['udeb', 'application/x-debian-package'],
    ['ufd', 'application/vnd.ufdl'],
    ['ufdl', 'application/vnd.ufdl'],
    ['ulx', 'application/x-glulx'],
    ['umj', 'application/vnd.umajin'],
    ['unityweb', 'application/vnd.unity'],
    ['uoml', 'application/vnd.uoml+xml'],
    ['uri', 'text/uri-list'],
    ['uris', 'text/uri-list'],
    ['urls', 'text/uri-list'],
    ['usdz', 'model/vnd.usdz+zip'],
    ['ustar', 'application/x-ustar'],
    ['utz', 'application/vnd.uiq.theme'],
    ['uu', 'text/x-uuencode'],
    ['uva', 'audio/vnd.dece.audio'],
    ['uvd', 'application/vnd.dece.data'],
    ['uvf', 'application/vnd.dece.data'],
    ['uvg', 'image/vnd.dece.graphic'],
    ['uvh', 'video/vnd.dece.hd'],
    ['uvi', 'image/vnd.dece.graphic'],
    ['uvm', 'video/vnd.dece.mobile'],
    ['uvp', 'video/vnd.dece.pd'],
    ['uvs', 'video/vnd.dece.sd'],
    ['uvt', 'application/vnd.dece.ttml+xml'],
    ['uvu', 'video/vnd.uvvu.mp4'],
    ['uvv', 'video/vnd.dece.video'],
    ['uvva', 'audio/vnd.dece.audio'],
    ['uvvd', 'application/vnd.dece.data'],
    ['uvvf', 'application/vnd.dece.data'],
    ['uvvg', 'image/vnd.dece.graphic'],
    ['uvvh', 'video/vnd.dece.hd'],
    ['uvvi', 'image/vnd.dece.graphic'],
    ['uvvm', 'video/vnd.dece.mobile'],
    ['uvvp', 'video/vnd.dece.pd'],
    ['uvvs', 'video/vnd.dece.sd'],
    ['uvvt', 'application/vnd.dece.ttml+xml'],
    ['uvvu', 'video/vnd.uvvu.mp4'],
    ['uvvv', 'video/vnd.dece.video'],
    ['uvvx', 'application/vnd.dece.unspecified'],
    ['uvvz', 'application/vnd.dece.zip'],
    ['uvx', 'application/vnd.dece.unspecified'],
    ['uvz', 'application/vnd.dece.zip'],
    ['vbox', 'application/x-virtualbox-vbox'],
    ['vbox-extpack', 'application/x-virtualbox-vbox-extpack'],
    ['vcard', 'text/vcard'],
    ['vcd', 'application/x-cdlink'],
    ['vcf', 'text/x-vcard'],
    ['vcg', 'application/vnd.groove-vcard'],
    ['vcs', 'text/x-vcalendar'],
    ['vcx', 'application/vnd.vcx'],
    ['vdi', 'application/x-virtualbox-vdi'],
    ['vds', 'model/vnd.sap.vds'],
    ['vhd', 'application/x-virtualbox-vhd'],
    ['vis', 'application/vnd.visionary'],
    ['viv', 'video/vnd.vivo'],
    ['vlc', 'application/videolan'],
    ['vmdk', 'application/x-virtualbox-vmdk'],
    ['vob', 'video/x-ms-vob'],
    ['vor', 'application/vnd.stardivision.writer'],
    ['vox', 'application/x-authorware-bin'],
    ['vrml', 'model/vrml'],
    ['vsd', 'application/vnd.visio'],
    ['vsf', 'application/vnd.vsf'],
    ['vss', 'application/vnd.visio'],
    ['vst', 'application/vnd.visio'],
    ['vsw', 'application/vnd.visio'],
    ['vtf', 'image/vnd.valve.source.texture'],
    ['vtt', 'text/vtt'],
    ['vtu', 'model/vnd.vtu'],
    ['vxml', 'application/voicexml+xml'],
    ['w3d', 'application/x-director'],
    ['wad', 'application/x-doom'],
    ['wadl', 'application/vnd.sun.wadl+xml'],
    ['war', 'application/java-archive'],
    ['wasm', 'application/wasm'],
    ['wav', 'audio/x-wav'],
    ['wax', 'audio/x-ms-wax'],
    ['wbmp', 'image/vnd.wap.wbmp'],
    ['wbs', 'application/vnd.criticaltools.wbs+xml'],
    ['wbxml', 'application/wbxml'],
    ['wcm', 'application/vnd.ms-works'],
    ['wdb', 'application/vnd.ms-works'],
    ['wdp', 'image/vnd.ms-photo'],
    ['weba', 'audio/webm'],
    ['webapp', 'application/x-web-app-manifest+json'],
    ['webm', 'video/webm'],
    ['webmanifest', 'application/manifest+json'],
    ['webp', 'image/webp'],
    ['wg', 'application/vnd.pmi.widget'],
    ['wgt', 'application/widget'],
    ['wks', 'application/vnd.ms-works'],
    ['wm', 'video/x-ms-wm'],
    ['wma', 'audio/x-ms-wma'],
    ['wmd', 'application/x-ms-wmd'],
    ['wmf', 'image/wmf'],
    ['wml', 'text/vnd.wap.wml'],
    ['wmlc', 'application/wmlc'],
    ['wmls', 'text/vnd.wap.wmlscript'],
    ['wmlsc', 'application/vnd.wap.wmlscriptc'],
    ['wmv', 'video/x-ms-wmv'],
    ['wmx', 'video/x-ms-wmx'],
    ['wmz', 'application/x-msmetafile'],
    ['woff', 'font/woff'],
    ['woff2', 'font/woff2'],
    ['word', 'application/msword'],
    ['wpd', 'application/vnd.wordperfect'],
    ['wpl', 'application/vnd.ms-wpl'],
    ['wps', 'application/vnd.ms-works'],
    ['wqd', 'application/vnd.wqd'],
    ['wri', 'application/x-mswrite'],
    ['wrl', 'model/vrml'],
    ['wsc', 'message/vnd.wfa.wsc'],
    ['wsdl', 'application/wsdl+xml'],
    ['wspolicy', 'application/wspolicy+xml'],
    ['wtb', 'application/vnd.webturbo'],
    ['wvx', 'video/x-ms-wvx'],
    ['x3d', 'model/x3d+xml'],
    ['x3db', 'model/x3d+fastinfoset'],
    ['x3dbz', 'model/x3d+binary'],
    ['x3dv', 'model/x3d-vrml'],
    ['x3dvz', 'model/x3d+vrml'],
    ['x3dz', 'model/x3d+xml'],
    ['x32', 'application/x-authorware-bin'],
    ['x_b', 'model/vnd.parasolid.transmit.binary'],
    ['x_t', 'model/vnd.parasolid.transmit.text'],
    ['xaml', 'application/xaml+xml'],
    ['xap', 'application/x-silverlight-app'],
    ['xar', 'application/vnd.xara'],
    ['xav', 'application/xcap-att+xml'],
    ['xbap', 'application/x-ms-xbap'],
    ['xbd', 'application/vnd.fujixerox.docuworks.binder'],
    ['xbm', 'image/x-xbitmap'],
    ['xca', 'application/xcap-caps+xml'],
    ['xcs', 'application/calendar+xml'],
    ['xdf', 'application/xcap-diff+xml'],
    ['xdm', 'application/vnd.syncml.dm+xml'],
    ['xdp', 'application/vnd.adobe.xdp+xml'],
    ['xdssc', 'application/dssc+xml'],
    ['xdw', 'application/vnd.fujixerox.docuworks'],
    ['xel', 'application/xcap-el+xml'],
    ['xenc', 'application/xenc+xml'],
    ['xer', 'application/patch-ops-error+xml'],
    ['xfdf', 'application/vnd.adobe.xfdf'],
    ['xfdl', 'application/vnd.xfdl'],
    ['xht', 'application/xhtml+xml'],
    ['xhtml', 'application/xhtml+xml'],
    ['xhvml', 'application/xv+xml'],
    ['xif', 'image/vnd.xiff'],
    ['xl', 'application/excel'],
    ['xla', 'application/vnd.ms-excel'],
    ['xlam', 'application/vnd.ms-excel.addin.macroEnabled.12'],
    ['xlc', 'application/vnd.ms-excel'],
    ['xlf', 'application/xliff+xml'],
    ['xlm', 'application/vnd.ms-excel'],
    ['xls', 'application/vnd.ms-excel'],
    ['xlsb', 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'],
    ['xlsm', 'application/vnd.ms-excel.sheet.macroEnabled.12'],
    ['xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
    ['xlt', 'application/vnd.ms-excel'],
    ['xltm', 'application/vnd.ms-excel.template.macroEnabled.12'],
    ['xltx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template'],
    ['xlw', 'application/vnd.ms-excel'],
    ['xm', 'audio/xm'],
    ['xml', 'application/xml'],
    ['xns', 'application/xcap-ns+xml'],
    ['xo', 'application/vnd.olpc-sugar'],
    ['xop', 'application/xop+xml'],
    ['xpi', 'application/x-xpinstall'],
    ['xpl', 'application/xproc+xml'],
    ['xpm', 'image/x-xpixmap'],
    ['xpr', 'application/vnd.is-xpr'],
    ['xps', 'application/vnd.ms-xpsdocument'],
    ['xpw', 'application/vnd.intercon.formnet'],
    ['xpx', 'application/vnd.intercon.formnet'],
    ['xsd', 'application/xml'],
    ['xsl', 'application/xml'],
    ['xslt', 'application/xslt+xml'],
    ['xsm', 'application/vnd.syncml+xml'],
    ['xspf', 'application/xspf+xml'],
    ['xul', 'application/vnd.mozilla.xul+xml'],
    ['xvm', 'application/xv+xml'],
    ['xvml', 'application/xv+xml'],
    ['xwd', 'image/x-xwindowdump'],
    ['xyz', 'chemical/x-xyz'],
    ['xz', 'application/x-xz'],
    ['yaml', 'text/yaml'],
    ['yang', 'application/yang'],
    ['yin', 'application/yin+xml'],
    ['yml', 'text/yaml'],
    ['ymp', 'text/x-suse-ymp'],
    ['z', 'application/x-compress'],
    ['z1', 'application/x-zmachine'],
    ['z2', 'application/x-zmachine'],
    ['z3', 'application/x-zmachine'],
    ['z4', 'application/x-zmachine'],
    ['z5', 'application/x-zmachine'],
    ['z6', 'application/x-zmachine'],
    ['z7', 'application/x-zmachine'],
    ['z8', 'application/x-zmachine'],
    ['zaz', 'application/vnd.zzazz.deck+xml'],
    ['zip', 'application/zip'],
    ['zir', 'application/vnd.zul'],
    ['zirz', 'application/vnd.zul'],
    ['zmm', 'application/vnd.handheld-entertainment+xml'],
    ['zsh', 'text/x-scriptzsh']
]);
function toFileWithPath(file, path, h) {
    const f = withMimeType(file);
    const { webkitRelativePath } = file;
    const p = typeof path === 'string'
        ? path
        // If <input webkitdirectory> is set,
        // the File will have a {webkitRelativePath} property
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
        : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
            ? webkitRelativePath
            : `./${file.name}`;
    if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path
        setObjProp(f, 'path', p);
    }
    // Always populate a relative path so that even electron apps have access to a relativePath value
    setObjProp(f, 'relativePath', p);
    return f;
}
function withMimeType(file) {
    const { name } = file;
    const hasExtension = name && name.lastIndexOf('.') !== -1;
    if (hasExtension && !file.type) {
        const ext = name.split('.')
            .pop().toLowerCase();
        const type = COMMON_MIME_TYPES.get(ext);
        if (type) {
            Object.defineProperty(file, 'type', {
                value: type,
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
    }
    return file;
}
function setObjProp(f, key, value) {
    Object.defineProperty(f, key, {
        value,
        writable: false,
        configurable: false,
        enumerable: true
    });
}

const FILES_TO_IGNORE = [
    // Thumbnail cache files for macOS and Windows
    '.DS_Store', // macOs
    'Thumbs.db' // Windows
];
/**
 * Convert a DragEvent's DataTrasfer object to a list of File objects
 * NOTE: If some of the items are folders,
 * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
 *
 * EXPERIMENTAL: A list of https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle objects can also be passed as an arg
 * and a list of File objects will be returned.
 *
 * @param evt
 */
function fromEvent(evt) {
    return __awaiter(this, void 0, void 0, function* () {
        if (isObject$1(evt) && isDataTransfer(evt.dataTransfer)) {
            return getDataTransferFiles(evt.dataTransfer, evt.type);
        }
        else if (isChangeEvt(evt)) {
            return getInputFiles(evt);
        }
        else if (Array.isArray(evt) && evt.every(item => 'getFile' in item && typeof item.getFile === 'function')) {
            return getFsHandleFiles(evt);
        }
        return [];
    });
}
function isDataTransfer(value) {
    return isObject$1(value);
}
function isChangeEvt(value) {
    return isObject$1(value) && isObject$1(value.target);
}
function isObject$1(v) {
    return typeof v === 'object' && v !== null;
}
function getInputFiles(evt) {
    return fromList(evt.target.files).map(file => toFileWithPath(file));
}
// Ee expect each handle to be https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle
function getFsHandleFiles(handles) {
    return __awaiter(this, void 0, void 0, function* () {
        const files = yield Promise.all(handles.map(h => h.getFile()));
        return files.map(file => toFileWithPath(file));
    });
}
function getDataTransferFiles(dt, type) {
    return __awaiter(this, void 0, void 0, function* () {
        // IE11 does not support dataTransfer.items
        // See https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/items#Browser_compatibility
        if (dt.items) {
            const items = fromList(dt.items)
                .filter(item => item.kind === 'file');
            // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
            // only 'dragstart' and 'drop' has access to the data (source node)
            if (type !== 'drop') {
                return items;
            }
            const files = yield Promise.all(items.map(toFilePromises));
            return noIgnoredFiles(flatten(files));
        }
        return noIgnoredFiles(fromList(dt.files)
            .map(file => toFileWithPath(file)));
    });
}
function noIgnoredFiles(files) {
    return files.filter(file => FILES_TO_IGNORE.indexOf(file.name) === -1);
}
// IE11 does not support Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/FileList
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
function fromList(items) {
    if (items === null) {
        return [];
    }
    const files = [];
    // tslint:disable: prefer-for-of
    for (let i = 0; i < items.length; i++) {
        const file = items[i];
        files.push(file);
    }
    return files;
}
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
function toFilePromises(item) {
    if (typeof item.webkitGetAsEntry !== 'function') {
        return fromDataTransferItem(item);
    }
    const entry = item.webkitGetAsEntry();
    // Safari supports dropping an image node from a different window and can be retrieved using
    // the DataTransferItem.getAsFile() API
    // NOTE: FileSystemEntry.file() throws if trying to get the file
    if (entry && entry.isDirectory) {
        return fromDirEntry(entry);
    }
    return fromDataTransferItem(item, entry);
}
function flatten(items) {
    return items.reduce((acc, files) => [
        ...acc,
        ...(Array.isArray(files) ? flatten(files) : [files])
    ], []);
}
function fromDataTransferItem(item, entry) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        // Check if we're in a secure context; due to a bug in Chrome (as far as we know)
        // the browser crashes when calling this API (yet to be confirmed as a consistent behaviour).
        //
        // See:
        // - https://issues.chromium.org/issues/40186242
        // - https://github.com/react-dropzone/react-dropzone/issues/1397
        if (globalThis.isSecureContext && typeof item.getAsFileSystemHandle === 'function') {
            const h = yield item.getAsFileSystemHandle();
            if (h === null) {
                throw new Error(`${item} is not a File`);
            }
            // It seems that the handle can be `undefined` (see https://github.com/react-dropzone/file-selector/issues/120),
            // so we check if it isn't; if it is, the code path continues to the next API (`getAsFile`).
            if (h !== undefined) {
                const file = yield h.getFile();
                file.handle = h;
                return toFileWithPath(file);
            }
        }
        const file = item.getAsFile();
        if (!file) {
            throw new Error(`${item} is not a File`);
        }
        const fwp = toFileWithPath(file, (_a = entry === null || entry === void 0 ? void 0 : entry.fullPath) !== null && _a !== void 0 ? _a : undefined);
        return fwp;
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
function fromEntry(entry) {
    return __awaiter(this, void 0, void 0, function* () {
        return entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry);
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
function fromDirEntry(entry) {
    const reader = entry.createReader();
    return new Promise((resolve, reject) => {
        const entries = [];
        function readEntries() {
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
            reader.readEntries((batch) => __awaiter(this, void 0, void 0, function* () {
                if (!batch.length) {
                    // Done reading directory
                    try {
                        const files = yield Promise.all(entries);
                        resolve(files);
                    }
                    catch (err) {
                        reject(err);
                    }
                }
                else {
                    const items = Promise.all(batch.map(fromEntry));
                    entries.push(items);
                    // Continue reading
                    readEntries();
                }
            }), (err) => {
                reject(err);
            });
        }
        readEntries();
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
function fromFileEntry(entry) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            entry.file((file) => {
                const fwp = toFileWithPath(file, entry.fullPath);
                resolve(fwp);
            }, (err) => {
                reject(err);
            });
        });
    });
}

var es = {};

var hasRequiredEs;

function requireEs () {
	if (hasRequiredEs) return es;
	hasRequiredEs = 1;

	es.__esModule = true;

	es.default = function (file, acceptedFiles) {
	  if (file && acceptedFiles) {
	    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');

	    if (acceptedFilesArray.length === 0) {
	      return true;
	    }

	    var fileName = file.name || '';
	    var mimeType = (file.type || '').toLowerCase();
	    var baseMimeType = mimeType.replace(/\/.*$/, '');
	    return acceptedFilesArray.some(function (type) {
	      var validType = type.trim().toLowerCase();

	      if (validType.charAt(0) === '.') {
	        return fileName.toLowerCase().endsWith(validType);
	      } else if (validType.endsWith('/*')) {
	        // This is something like a image/* mime type
	        return baseMimeType === validType.replace(/\/.*$/, '');
	      }

	      return mimeType === validType;
	    });
	  }

	  return true;
	};
	return es;
}

var esExports = requireEs();
var _accepts = /*@__PURE__*/getDefaultExportFromCjs(esExports);

function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1(); }

function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray$1(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
var accepts = typeof _accepts === "function" ? _accepts : _accepts.default; // Error codes

var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";
/**
 *
 * @param {string} accept
 */

var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr() {
  var accept = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var acceptArr = accept.split(",");
  var msg = acceptArr.length > 1 ? "one of ".concat(acceptArr.join(", ")) : acceptArr[0];
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(msg)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
};
/**
 * Check if file is accepted.
 *
 * Firefox versions prior to 53 return a bogus MIME type for every file drag,
 * so dragovers with that MIME type will always be accepted.
 *
 * @param {File} file
 * @param {string} accept
 * @returns
 */

function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || accepts(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];else if (isDefined(maxSize) && file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
  }

  return [true, null];
}

function isDefined(value) {
  return value !== undefined && value !== null;
}
/**
 *
 * @param {object} options
 * @param {File[]} options.files
 * @param {string} [options.accept]
 * @param {number} [options.minSize]
 * @param {number} [options.maxSize]
 * @param {boolean} [options.multiple]
 * @param {number} [options.maxFiles]
 * @param {(f: File) => FileError|FileError[]|null} [options.validator]
 * @returns
 */


function allFilesAccepted(_ref) {
  var files = _ref.files,
      accept = _ref.accept,
      minSize = _ref.minSize,
      maxSize = _ref.maxSize,
      multiple = _ref.multiple,
      maxFiles = _ref.maxFiles,
      validator = _ref.validator;

  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }

  return files.every(function (file) {
    var _fileAccepted = fileAccepted(file, accept),
        _fileAccepted2 = _slicedToArray$1(_fileAccepted, 1),
        accepted = _fileAccepted2[0];

    var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
        _fileMatchSize2 = _slicedToArray$1(_fileMatchSize, 1),
        sizeMatch = _fileMatchSize2[0];

    var customErrors = validator ? validator(file) : null;
    return accepted && sizeMatch && !customErrors;
  });
} // React's synthetic events has event.isPropagationStopped,
// but to remain compatibility with other libs (Preact) fall back
// to check event.cancelBubble

function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }

  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file


  return Array.prototype.some.call(event.dataTransfer.types, function (type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}

function onDocumentDragOver(event) {
  event.preventDefault();
}

function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}

function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}

function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.isPropagationStopped()`.
 * Note that the check is done on the first invoke too,
 * meaning that if propagation was stopped before invoking the fns,
 * no handlers will be executed.
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */

function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fns.some(function (fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return isPropagationStopped(event);
    });
  };
}
/**
 * canUseFileSystemAccessAPI checks if the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)
 * is supported by the browser.
 * @returns {boolean}
 */

function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
/**
 * Convert the `{accept}` dropzone prop to the
 * `{types}` option for https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker
 *
 * @param {AcceptProp} accept
 * @returns {{accept: string[]}[]}
 */

function pickerOptionsFromAccept(accept) {
  if (isDefined(accept)) {
    var acceptForPicker = Object.entries(accept).filter(function (_ref2) {
      var _ref3 = _slicedToArray$1(_ref2, 2),
          mimeType = _ref3[0],
          ext = _ref3[1];

      var ok = true;

      if (!isMIMEType(mimeType)) {
        console.warn("Skipped \"".concat(mimeType, "\" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types."));
        ok = false;
      }

      if (!Array.isArray(ext) || !ext.every(isExt)) {
        console.warn("Skipped \"".concat(mimeType, "\" because an invalid file extension was provided."));
        ok = false;
      }

      return ok;
    }).reduce(function (agg, _ref4) {
      var _ref5 = _slicedToArray$1(_ref4, 2),
          mimeType = _ref5[0],
          ext = _ref5[1];

      return _objectSpread$1(_objectSpread$1({}, agg), {}, _defineProperty$1({}, mimeType, ext));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: acceptForPicker
    }];
  }

  return accept;
}
/**
 * Convert the `{accept}` dropzone prop to an array of MIME types/extensions.
 * @param {AcceptProp} accept
 * @returns {string}
 */

function acceptPropAsAcceptAttr(accept) {
  if (isDefined(accept)) {
    return Object.entries(accept).reduce(function (a, _ref6) {
      var _ref7 = _slicedToArray$1(_ref6, 2),
          mimeType = _ref7[0],
          ext = _ref7[1];

      return [].concat(_toConsumableArray$1(a), [mimeType], _toConsumableArray$1(ext));
    }, []) // Silently discard invalid entries as pickerOptionsFromAccept warns about these
    .filter(function (v) {
      return isMIMEType(v) || isExt(v);
    }).join(",");
  }

  return undefined;
}
/**
 * Check if v is an exception caused by aborting a request (e.g window.showOpenFilePicker()).
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
 * @param {any} v
 * @returns {boolean} True if v is an abort exception.
 */

function isAbort(v) {
  return v instanceof DOMException && (v.name === "AbortError" || v.code === v.ABORT_ERR);
}
/**
 * Check if v is a security error.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
 * @param {any} v
 * @returns {boolean} True if v is a security error.
 */

function isSecurityError(v) {
  return v instanceof DOMException && (v.name === "SecurityError" || v.code === v.SECURITY_ERR);
}
/**
 * Check if v is a MIME type string.
 *
 * See accepted format: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers.
 *
 * @param {string} v
 */

function isMIMEType(v) {
  return v === "audio/*" || v === "video/*" || v === "image/*" || v === "text/*" || v === "application/*" || /\w+\/[-+.\w]+/g.test(v);
}
/**
 * Check if v is a file extension.
 * @param {string} v
 */

function isExt(v) {
  return /^.*\.[\w]+$/.test(v);
}
/**
 * @typedef {Object.<string, string[]>} AcceptProp
 */

/**
 * @typedef {object} FileError
 * @property {string} message
 * @property {ErrorCode|string} code
 */

/**
 * @typedef {"file-invalid-type"|"file-too-large"|"file-too-small"|"too-many-files"} ErrorCode
 */

var _excluded = ["children"],
    _excluded2 = ["open"],
    _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
    _excluded4 = ["refKey", "onChange", "onClick"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Convenience wrapper component for the `useDropzone` hook
 *
 * ```jsx
 * <Dropzone>
 *   {({getRootProps, getInputProps}) => (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag 'n' drop some files here, or click to select files</p>
 *     </div>
 *   )}
 * </Dropzone>
 * ```
 */

var Dropzone = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      params = _objectWithoutProperties(_ref, _excluded);

  var _useDropzone = useDropzone(params),
      open = _useDropzone.open,
      props = _objectWithoutProperties(_useDropzone, _excluded2);

  React.useImperativeHandle(ref, function () {
    return {
      open: open
    };
  }, [open]); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element

  return /*#__PURE__*/React.createElement(React.Fragment, null, children(_objectSpread(_objectSpread({}, props), {}, {
    open: open
  })));
});
Dropzone.displayName = "Dropzone"; // Add default props for react-docgen

var defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: false,
  autoFocus: false
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: PropTypes.func,

  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),

  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: PropTypes.bool,

  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: PropTypes.bool,

  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: PropTypes.bool,

  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: PropTypes.bool,

  /**
   * If true, disables drag 'n' drop
   */
  noDrag: PropTypes.bool,

  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: PropTypes.bool,

  /**
   * Minimum file size (in bytes)
   */
  minSize: PropTypes.number,

  /**
   * Maximum file size (in bytes)
   */
  maxSize: PropTypes.number,

  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: PropTypes.number,

  /**
   * Enable/disable the dropzone
   */
  disabled: PropTypes.bool,

  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: PropTypes.func,

  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: PropTypes.func,

  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: PropTypes.func,

  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: PropTypes.bool,

  /**
   * Set to true to focus the root element on render
   */
  autoFocus: PropTypes.bool,

  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: PropTypes.func,

  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: PropTypes.func,

  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: PropTypes.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: PropTypes.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: PropTypes.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: PropTypes.func,

  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: PropTypes.func,

  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: PropTypes.func
};
/**
 * A function that is invoked for the `dragenter`,
 * `dragover` and `dragleave` events.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dragCb
 * @param {DragEvent} event
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dropCb
 * @param {File[]} acceptedFiles List of accepted files
 * @param {FileRejection[]} fileRejections List of rejected files and why they were rejected
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are files (such as link, text, etc.).
 *
 * @callback dropAcceptedCb
 * @param {File[]} files List of accepted files that meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 *
 * @callback dropRejectedCb
 * @param {File[]} files List of rejected files that do not meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is used aggregate files,
 * in a asynchronous fashion, from drag or input change events.
 *
 * @callback getFilesFromEvent
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 * @returns {(File[]|Promise<File[]>)}
 */

/**
 * An object with the current dropzone state.
 *
 * @typedef {object} DropzoneState
 * @property {boolean} isFocused Dropzone area is in focus
 * @property {boolean} isFileDialogActive File dialog is opened
 * @property {boolean} isDragActive Active drag is in progress
 * @property {boolean} isDragAccept Dragged files are accepted
 * @property {boolean} isDragReject Some dragged files are rejected
 * @property {File[]} acceptedFiles Accepted files
 * @property {FileRejection[]} fileRejections Rejected files and why they were rejected
 */

/**
 * An object with the dropzone methods.
 *
 * @typedef {object} DropzoneMethods
 * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
 * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
 * @property {Function} open Open the native file selection dialog
 */

var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  acceptedFiles: [],
  fileRejections: []
};
/**
 * A React hook that creates a drag 'n' drop area.
 *
 * ```jsx
 * function MyDropzone(props) {
 *   const {getRootProps, getInputProps} = useDropzone({
 *     onDrop: acceptedFiles => {
 *       // do something with the File objects, e.g. upload to some server
 *     }
 *   });
 *   return (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag and drop some files here, or click to select files</p>
 *     </div>
 *   )
 * }
 * ```
 *
 * @function useDropzone
 *
 * @param {object} props
 * @param {import("./utils").AcceptProp} [props.accept] Set accepted file types.
 * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
 * Keep in mind that mime type determination is not reliable across platforms. CSV files,
 * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
 * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
 * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
 * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
 * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
 * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
 * Note that it also stops tracking the focus state.
 * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
 * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
 * @param {number} [props.minSize=0] Minimum file size (in bytes)
 * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
 * @param {boolean} [props.disabled=false] Enable/disable the dropzone
 * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
 * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
 * @param {boolean} [props.useFsAccessApi] Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
 * to open the file picker instead of using an `<input type="file">` click event.
 * @param {boolean} autoFocus Set to true to auto focus the root element.
 * @param {Function} [props.onFileDialogOpen] Cb for when opening the file dialog
 * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
 * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
 * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
 * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
 * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
 *
 * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
 * `accept` must be an object with keys as a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) and the value an array of file extensions (optional).
 * If `multiple` is set to false and additional files are dropped,
 * all files besides the first will be rejected.
 * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
 *
 * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
 * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
 *
 * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
 * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
 *
 * ```js
 * function onDrop(acceptedFiles) {
 *   const req = request.post('/upload')
 *   acceptedFiles.forEach(file => {
 *     req.attach(file.name, file)
 *   })
 *   req.end(callback)
 * }
 * ```
 * @param {dropAcceptedCb} [props.onDropAccepted]
 * @param {dropRejectedCb} [props.onDropRejected]
 * @param {(error: Error) => void} [props.onError]
 *
 * @returns {DropzoneState & DropzoneMethods}
 */

function useDropzone() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props),
      accept = _defaultProps$props.accept,
      disabled = _defaultProps$props.disabled,
      getFilesFromEvent = _defaultProps$props.getFilesFromEvent,
      maxSize = _defaultProps$props.maxSize,
      minSize = _defaultProps$props.minSize,
      multiple = _defaultProps$props.multiple,
      maxFiles = _defaultProps$props.maxFiles,
      onDragEnter = _defaultProps$props.onDragEnter,
      onDragLeave = _defaultProps$props.onDragLeave,
      onDragOver = _defaultProps$props.onDragOver,
      onDrop = _defaultProps$props.onDrop,
      onDropAccepted = _defaultProps$props.onDropAccepted,
      onDropRejected = _defaultProps$props.onDropRejected,
      onFileDialogCancel = _defaultProps$props.onFileDialogCancel,
      onFileDialogOpen = _defaultProps$props.onFileDialogOpen,
      useFsAccessApi = _defaultProps$props.useFsAccessApi,
      autoFocus = _defaultProps$props.autoFocus,
      preventDropOnDocument = _defaultProps$props.preventDropOnDocument,
      noClick = _defaultProps$props.noClick,
      noKeyboard = _defaultProps$props.noKeyboard,
      noDrag = _defaultProps$props.noDrag,
      noDragEventsBubbling = _defaultProps$props.noDragEventsBubbling,
      onError = _defaultProps$props.onError,
      validator = _defaultProps$props.validator;

  var acceptAttr = React.useMemo(function () {
    return acceptPropAsAcceptAttr(accept);
  }, [accept]);
  var pickerTypes = React.useMemo(function () {
    return pickerOptionsFromAccept(accept);
  }, [accept]);
  var onFileDialogOpenCb = React.useMemo(function () {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop$1;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = React.useMemo(function () {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop$1;
  }, [onFileDialogCancel]);
  /**
   * @constant
   * @type {React.MutableRefObject<HTMLElement>}
   */

  var rootRef = React.useRef(null);
  var inputRef = React.useRef(null);

  var _useReducer = React.useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var isFocused = state.isFocused,
      isFileDialogActive = state.isFileDialogActive;
  var fsAccessApiWorksRef = React.useRef(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI()); // Update file dialog active state when the window is focused on

  var onWindowFocus = function onWindowFocus() {
    // Execute the timeout only if the file dialog is opened in the browser
    if (!fsAccessApiWorksRef.current && isFileDialogActive) {
      setTimeout(function () {
        if (inputRef.current) {
          var files = inputRef.current.files;

          if (!files.length) {
            dispatch({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };

  React.useEffect(function () {
    window.addEventListener("focus", onWindowFocus, false);
    return function () {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
  var dragTargetsRef = React.useRef([]);

  var onDocumentDrop = function onDocumentDrop(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
      return;
    }

    event.preventDefault();
    dragTargetsRef.current = [];
  };

  React.useEffect(function () {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }

    return function () {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]); // Auto focus the root when autoFocus is true

  React.useEffect(function () {
    if (!disabled && autoFocus && rootRef.current) {
      rootRef.current.focus();
    }

    return function () {};
  }, [rootRef, autoFocus, disabled]);
  var onErrCb = React.useCallback(function (e) {
    if (onError) {
      onError(e);
    } else {
      // Let the user know something's gone wrong if they haven't provided the onError cb.
      console.error(e);
    }
  }, [onError]);
  var onDragEnterCb = React.useCallback(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        var fileCount = files.length;
        var isDragAccept = fileCount > 0 && allFilesAccepted({
          files: files,
          accept: acceptAttr,
          minSize: minSize,
          maxSize: maxSize,
          multiple: multiple,
          maxFiles: maxFiles,
          validator: validator
        });
        var isDragReject = fileCount > 0 && !isDragAccept;
        dispatch({
          isDragAccept: isDragAccept,
          isDragReject: isDragReject,
          isDragActive: true,
          type: "setDraggedFiles"
        });

        if (onDragEnter) {
          onDragEnter(event);
        }
      }).catch(function (e) {
        return onErrCb(e);
      });
    }
  }, [getFilesFromEvent, onDragEnter, onErrCb, noDragEventsBubbling, acceptAttr, minSize, maxSize, multiple, maxFiles, validator]);
  var onDragOverCb = React.useCallback(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);

    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {}
      /* eslint-disable-line no-empty */

    }

    if (hasFiles && onDragOver) {
      onDragOver(event);
    }

    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = React.useCallback(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event); // Only deactivate once the dropzone and all children have been left

    var targets = dragTargetsRef.current.filter(function (target) {
      return rootRef.current && rootRef.current.contains(target);
    }); // Make sure to remove a target present multiple times only once
    // (Firefox may fire dragenter/dragleave multiple times on the same element)

    var targetIdx = targets.indexOf(event.target);

    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }

    dragTargetsRef.current = targets;

    if (targets.length > 0) {
      return;
    }

    dispatch({
      type: "setDraggedFiles",
      isDragActive: false,
      isDragAccept: false,
      isDragReject: false
    });

    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = React.useCallback(function (files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function (file) {
      var _fileAccepted = fileAccepted(file, acceptAttr),
          _fileAccepted2 = _slicedToArray(_fileAccepted, 2),
          accepted = _fileAccepted2[0],
          acceptError = _fileAccepted2[1];

      var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
          _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2),
          sizeMatch = _fileMatchSize2[0],
          sizeError = _fileMatchSize2[1];

      var customErrors = validator ? validator(file) : null;

      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];

        if (customErrors) {
          errors = errors.concat(customErrors);
        }

        fileRejections.push({
          file: file,
          errors: errors.filter(function (e) {
            return e;
          })
        });
      }
    });

    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      // Reject everything and empty accepted files
      acceptedFiles.forEach(function (file) {
        fileRejections.push({
          file: file,
          errors: [TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }

    dispatch({
      acceptedFiles: acceptedFiles,
      fileRejections: fileRejections,
      isDragReject: fileRejections.length > 0,
      type: "setFiles"
    });

    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }

    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }

    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch, multiple, acceptAttr, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = React.useCallback(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        setFiles(files, event);
      }).catch(function (e) {
        return onErrCb(e);
      });
    }

    dispatch({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, onErrCb, noDragEventsBubbling]); // Fn for opening the file dialog programmatically

  var openFileDialog = React.useCallback(function () {
    // No point to use FS access APIs if context is not secure
    // https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts#feature_detection
    if (fsAccessApiWorksRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb(); // https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker

      var opts = {
        multiple: multiple,
        types: pickerTypes
      };
      window.showOpenFilePicker(opts).then(function (handles) {
        return getFilesFromEvent(handles);
      }).then(function (files) {
        setFiles(files, null);
        dispatch({
          type: "closeDialog"
        });
      }).catch(function (e) {
        // AbortError means the user canceled
        if (isAbort(e)) {
          onFileDialogCancelCb(e);
          dispatch({
            type: "closeDialog"
          });
        } else if (isSecurityError(e)) {
          fsAccessApiWorksRef.current = false; // CORS, so cannot use this API
          // Try using the input

          if (inputRef.current) {
            inputRef.current.value = null;
            inputRef.current.click();
          } else {
            onErrCb(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."));
          }
        } else {
          onErrCb(e);
        }
      });
      return;
    }

    if (inputRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, onErrCb, pickerTypes, multiple]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

  var onKeyDownCb = React.useCallback(function (event) {
    // Ignore keyboard events bubbling up the DOM tree
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }

    if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, openFileDialog]); // Update focus state for the dropzone

  var onFocusCb = React.useCallback(function () {
    dispatch({
      type: "focus"
    });
  }, []);
  var onBlurCb = React.useCallback(function () {
    dispatch({
      type: "blur"
    });
  }, []); // Cb to open the file dialog when click occurs on the dropzone

  var onClickCb = React.useCallback(function () {
    if (noClick) {
      return;
    } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
    // to ensure React can handle state changes
    // See: https://github.com/react-dropzone/react-dropzone/issues/450


    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [noClick, openFileDialog]);

  var composeHandler = function composeHandler(fn) {
    return disabled ? null : fn;
  };

  var composeKeyboardHandler = function composeKeyboardHandler(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };

  var composeDragHandler = function composeDragHandler(fn) {
    return noDrag ? null : composeHandler(fn);
  };

  var stopPropagation = function stopPropagation(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };

  var getRootProps = React.useMemo(function () {
    return function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$refKey = _ref2.refKey,
          refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey,
          role = _ref2.role,
          onKeyDown = _ref2.onKeyDown,
          onFocus = _ref2.onFocus,
          onBlur = _ref2.onBlur,
          onClick = _ref2.onClick,
          onDragEnter = _ref2.onDragEnter,
          onDragOver = _ref2.onDragOver,
          onDragLeave = _ref2.onDragLeave,
          onDrop = _ref2.onDrop,
          rest = _objectWithoutProperties(_ref2, _excluded3);

      return _objectSpread(_objectSpread(_defineProperty({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "presentation"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = React.useCallback(function (event) {
    event.stopPropagation();
  }, []);
  var getInputProps = React.useMemo(function () {
    return function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$refKey = _ref3.refKey,
          refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey,
          onChange = _ref3.onChange,
          onClick = _ref3.onClick,
          rest = _objectWithoutProperties(_ref3, _excluded4);

      var inputProps = _defineProperty({
        accept: acceptAttr,
        multiple: multiple,
        type: "file",
        style: {
          border: 0,
          clip: "rect(0, 0, 0, 0)",
          clipPath: "inset(50%)",
          height: "1px",
          margin: "0 -1px -1px 0",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: "1px",
          whiteSpace: "nowrap"
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        tabIndex: -1
      }, refKey, inputRef);

      return _objectSpread(_objectSpread({}, inputProps), rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  return _objectSpread(_objectSpread({}, state), {}, {
    isFocused: isFocused && !disabled,
    getRootProps: getRootProps,
    getInputProps: getInputProps,
    rootRef: rootRef,
    inputRef: inputRef,
    open: composeHandler(openFileDialog)
  });
}
/**
 * @param {DropzoneState} state
 * @param {{type: string} & DropzoneState} action
 * @returns {DropzoneState}
 */

function reducer(state, action) {
  /* istanbul ignore next */
  switch (action.type) {
    case "focus":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: true
      });

    case "blur":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: false
      });

    case "openDialog":
      return _objectSpread(_objectSpread({}, initialState), {}, {
        isFileDialogActive: true
      });

    case "closeDialog":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFileDialogActive: false
      });

    case "setDraggedFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        isDragActive: action.isDragActive,
        isDragAccept: action.isDragAccept,
        isDragReject: action.isDragReject
      });

    case "setFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections,
        isDragReject: action.isDragReject
      });

    case "reset":
      return _objectSpread({}, initialState);

    default:
      return state;
  }
}

function noop$1() {}

const WebCamComponent = React.forwardRef(({ setImageFile, setImageSrc, imageSrc, backgroundStyle }, ref) => {
    const webcamRef = React.useRef(null);
    const [displayCamera, setDisplayCamera] = React.useState(false);
    const capture_image = async () => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setImageSrc(imageSrc);
            setImageFile(convertBase64StringToFile(imageSrc, `unknown-${Date.now()}.jpg`));
        }
    };
    const onDrop = React.useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            const compressedFile = await handleImageCompression(file);
            if (compressedFile) {
                const convertedFile = new File([compressedFile], file.name, {
                    type: file.type,
                });
                setImageFile(convertedFile);
                setImageSrc(URL.createObjectURL(convertedFile));
            }
        }
    }, [imageSrc]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });
    const handleFileInputChange = async (event) => {
        event.stopPropagation();
        const file = event.target.files && event.target.files[0];
        if (file) {
            const compressedFile = await handleImageCompression(file);
            if (compressedFile) {
                const convertedFile = new File([compressedFile], file.name, {
                    type: file.type,
                });
                setImageFile(convertedFile);
                setImageSrc(URL.createObjectURL(convertedFile));
            }
        }
    };
    React.useImperativeHandle(ref, () => ({
        close_camera: () => {
            setDisplayCamera(false);
            setImageSrc(null);
        },
    }));
    return (jsxRuntime.jsxs("div", { className: `flex flex-col items-center gap-4 ${backgroundStyle ? backgroundStyle : 'bg-white'} p-16 pt-12 rounded-md`, children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("h5", { className: "font-semibold", children: "Capture Image" }), jsxRuntime.jsx("p", { className: 'text-sm text-gray-500', children: "Click to open the camera module and allow the browser to access your camera." })] }), imageSrc === null ? (jsxRuntime.jsx(jsxRuntime.Fragment, { children: displayCamera ? (jsxRuntime.jsx("div", { children: jsxRuntime.jsxs("div", { className: 'relative flex flex-col justify-center', id: 'container', children: [jsxRuntime.jsx(Webcam, { audio: false, height: 400, width: 400, ref: webcamRef, screenshotFormat: 'image/jpeg', className: '  rounded-md' }), jsxRuntime.jsxs("div", { className: 'flex items-center space-x-2', children: [jsxRuntime.jsxs("button", { onClick: capture_image, className: 'mt-5 py-1 text-white bg-[#4327B2] border-[#4327B2] border-[1px] px-5 rounded-md cursor-pointer', children: [jsxRuntime.jsx(AiOutlineCamera, { className: 'mr-2 inline-block ' }), " Capture Photo"] }), jsxRuntime.jsx("button", { onClick: () => {
                                            setDisplayCamera(false);
                                        }, className: 'mt-5 text-[#4327B2] border-[#4327B2] border-[1px] px-4 py-1 rounded-md cursor-pointer', children: "Close Camera" })] })] }) })) : (jsxRuntime.jsxs("div", { ...getRootProps(), className: `relative mt-5 flex w-full min-h-[300px] flex-col items-center justify-center rounded-md border border-gray-300 bg-white p-8
              ${isDragActive ? 'bg-destructive/10' : 'bg-white'}`, children: [jsxRuntime.jsx(PiCamera, { size: 70, className: 'text-gray-500' }), jsxRuntime.jsxs("div", { className: 'mt-3 text-center', children: [jsxRuntime.jsxs("p", { className: 'text-gray-700', children: [jsxRuntime.jsx("span", { className: 'text-primary cursor-pointer font-semibold', children: "Click to capture" }), ' ', "or drag and drop"] }), jsxRuntime.jsx("p", { className: 'text-gray-400', children: "SVG, PNG, JPG or GIF (max. 800x400px)" })] }), jsxRuntime.jsxs("div", { className: 'mt-5 flex w-full flex-col  items-center gap-2 md:flex-row', children: [jsxRuntime.jsx("button", { onClick: (e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setDisplayCamera(true);
                                    }, className: 'flex-grow basis-10 md:basis-10 text-[#4327B2] border-[#4327B2] border-[1px] px-4 py-1 rounded-md cursor-pointer', children: "Open Camera" }), jsxRuntime.jsxs("div", { className: 'flex-grow basis-10  md:basis-10', children: [jsxRuntime.jsx("input", { type: 'file', id: 'file-input', accept: 'image/*', onChange: handleFileInputChange, className: 'hidden', ...getInputProps() }), jsxRuntime.jsxs("label", { htmlFor: 'file-input', className: 'bg-[#B9AEE7] text-primary flex w-full cursor-pointer items-center justify-center rounded-md p-2 font-medium', children: [jsxRuntime.jsx(PiCloudArrowUp, { size: 15, className: 'text-primary mr-2 inline-block ' }), jsxRuntime.jsx("span", { className: 'text-sm', children: " Upload Image" })] })] })] })] })) }))
                :
                    jsxRuntime.jsxs("div", { className: 'relative mt-5 flex min-h-[300px] flex-col items-center justify-center rounded-md bg-white p-5', children: [jsxRuntime.jsx("img", { src: imageSrc && imageSrc, alt: 'Selected Image', width: 300, height: 300, className: 'selected-image' }), jsxRuntime.jsx("div", { className: 'flex w-full justify-start', children: jsxRuntime.jsx("button", { onClick: () => setImageSrc(null), className: 'mt-5 text-[#4327B2] border-[#4327B2] border-[1px] px-4 py-1 rounded-md cursor-pointer', children: "Cancel" }) })] })] }));
});

// THIS FILE IS AUTO GENERATED
function FaTimes (props) {
  return GenIcon({"attr":{"viewBox":"0 0 352 512"},"child":[{"tag":"path","attr":{"d":"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},"child":[]}]})(props);
}

const Dialog = ({ children, closeDialog }) => {
    return (jsxRuntime.jsx("div", { className: 'absolute inset-0 backdrop-blur-2xl flex justify-center items-center', children: jsxRuntime.jsxs("div", { className: 'backdrop-blur-sm p-6 shadow flex flex-col', children: [jsxRuntime.jsx(FaTimes, { onClick: closeDialog, className: ' text-black text-xl mb-4 self-end cursor-pointer' }), jsxRuntime.jsx("div", { className: 'bg-white shadow-md p-4 rounded-md w-fit h-fit', children: children })] }) }));
};

function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const {toString: toString$1} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString$1.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray: isArray$1} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer$1(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray$1(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global$1)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray$1(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray$1(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };

  isArray$1(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0];
  }

  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray$1(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }

  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({source, data}) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);

    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    }
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === 'function',
  isFunction(_global.postMessage)
);

const asap = typeof queueMicrotask !== 'undefined' ?
  queueMicrotask.bind(_global) : ( typeof browser$1 !== 'undefined' && browser$1.nextTick || _setImmediate);

// *********************

var utils$1 = {
  isArray: isArray$1,
  isArrayBuffer,
  isBuffer: isBuffer$1,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap
};

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;
function init () {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray (b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = (tmp >> 16) & 0xFF;
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
    output.push(tripletToBase64(tmp));
  }
  return output.join('')
}

function fromByteArray (uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[(tmp << 4) & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
    output += lookup[tmp >> 10];
    output += lookup[(tmp >> 4) & 0x3F];
    output += lookup[(tmp << 2) & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('')
}

function read (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

function write (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
}

var toString = {}.toString;

var isArray = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */


var INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
  ? global$1.TYPED_ARRAY_SUPPORT
  : true;

/*
 * Export kMaxLength after typed array support is determined.
 */
kMaxLength();

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr
};

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) ;
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
};

function allocUnsafe (that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
};

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that
}

function fromObject (that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len);
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}
Buffer.isBuffer = isBuffer;
function internalIsBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
};

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer
};

function byteLength (string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString (encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap (b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this
};

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this
};

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this
};

Buffer.prototype.toString = function toString () {
  var length = this.length | 0;
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
};

Buffer.prototype.equals = function equals (b) {
  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
};

Buffer.prototype.inspect = function inspect () {
  var str = '';
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>'
};

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -2147483648) {
    byteOffset = -2147483648;
  }
  byteOffset = +byteOffset;  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1);
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
};

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
};

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
};

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed;
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
};

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf)
  } else {
    return fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val
};

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val
};

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset]
};

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | (this[offset + 1] << 8)
};

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return (this[offset] << 8) | this[offset + 1]
};

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
};

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
};

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
};

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | (this[offset + 1] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | (this[offset] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
};

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
};

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4)
};

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4)
};

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8)
};

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8)
};

function checkInt (buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = (value & 0xff);
  return offset + 1
};

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24);
    this[offset + 2] = (value >>> 16);
    this[offset + 1] = (value >>> 8);
    this[offset] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = (value & 0xff);
  return offset + 1
};

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
    this[offset + 2] = (value >>> 16);
    this[offset + 3] = (value >>> 24);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
};

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
};

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    );
  }

  return len
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        }

        // valid lead
        leadSurrogate = codePoint;

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray
}


function base64ToBytes (str) {
  return toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i];
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
}

function isFastBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
}

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError$1(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}

utils$1.inherits(AxiosError$1, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});

const prototype$1 = AxiosError$1.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError$1, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError$1.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);

  utils$1.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError$1.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

// eslint-disable-next-line strict
var httpAdapter = null;

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData$1(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils$1.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);

  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils$1.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError$1('Blob is not supported. Use a Buffer instead.');
    }

    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils$1.isArray(value) && isFlatArray(value)) ||
        ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils$1.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils$1.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData$1(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  if (utils$1.isFunction(options)) {
    options = {
      serialize: options
    };
  } 

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

var platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};

const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

const _navigator = typeof navigator === 'object' && navigator || undefined;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = hasBrowserEnv &&
  (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

const origin = hasBrowserEnv && window.location.href || 'http://localhost';

var utils = /*#__PURE__*/Object.freeze({
	__proto__: null,
	hasBrowserEnv: hasBrowserEnv,
	hasStandardBrowserEnv: hasStandardBrowserEnv,
	hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
	navigator: _navigator,
	origin: origin
});

var platform = {
  ...utils,
  ...platform$1
};

function toURLEncodedForm(data, options) {
  return toFormData$1(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};

    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: transitionalDefaults,

  adapter: ['xhr', 'http', 'fetch'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils$1.isObject(data);

    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils$1.isFormData(data);

    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }

    if (utils$1.isArrayBuffer(data) ||
      utils$1.isBuffer(data) ||
      utils$1.isStream(data) ||
      utils$1.isFile(data) ||
      utils$1.isBlob(data) ||
      utils$1.isReadableStream(data)
    ) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return toFormData$1(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
      return data;
    }

    if (data && utils$1.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils$1.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils$1.isString(value)) return;

  if (utils$1.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils$1.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

let AxiosHeaders$1 = class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils$1.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if(utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils$1.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
};

AxiosHeaders$1.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders$1.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils$1.freezeMethods(AxiosHeaders$1);

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;

  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

function isCancel$1(value) {
  return !!(value && value.__CANCEL__);
}

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError$1(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError$1.call(this, message == null ? 'canceled' : message, AxiosError$1.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils$1.inherits(CanceledError$1, AxiosError$1, {
  __CANCEL__: true
});

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError$1(
      'Request failed with status code ' + response.status,
      [AxiosError$1.ERR_BAD_REQUEST, AxiosError$1.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;

  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  };

  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if ( passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };

  const flush = () => lastArgs && invoke(lastArgs);

  return [throttled, flush];
}

const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return throttle(e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true
    };

    listener(data);
  }, freq);
};

const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;

  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};

const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));

var isURLSameOrigin = platform.hasStandardBrowserEnv ? ((origin, isMSIE) => (url) => {
  url = new URL(url, platform.origin);

  return (
    origin.protocol === url.protocol &&
    origin.host === url.host &&
    (isMSIE || origin.port === url.port)
  );
})(
  new URL(platform.origin),
  platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
) : () => true;

var cookies = platform.hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      utils$1.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      utils$1.isString(path) && cookie.push('path=' + path);

      utils$1.isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  };

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig$1(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, prop, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({caseless}, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, prop , caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, prop , caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a, prop , caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b , prop) => mergeDeepProperties(headersToObject(a), headersToObject(b),prop, true)
  };

  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils$1.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

var resolveConfig = (config) => {
  const newConfig = mergeConfig$1({}, config);

  let {data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth} = newConfig;

  newConfig.headers = headers = AxiosHeaders$1.from(headers);

  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);

  // HTTP basic authentication
  if (auth) {
    headers.set('Authorization', 'Basic ' +
      btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : ''))
    );
  }

  let contentType;

  if (utils$1.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined); // Let the browser set it
    } else if ((contentType = headers.getContentType()) !== false) {
      // fix semicolon duplication issue for ReactNative FormData implementation
      const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));

    if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(newConfig.url))) {
      // Add xsrf header
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);

      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }

  return newConfig;
};

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
    let {responseType, onUploadProgress, onDownloadProgress} = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;

    function done() {
      flushUpload && flushUpload(); // flush events
      flushDownload && flushDownload(); // flush events

      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);

      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
    }

    let request = new XMLHttpRequest();

    request.open(_config.method.toUpperCase(), _config.url, true);

    // Set the request timeout in MS
    request.timeout = _config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders$1.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError$1('Request aborted', AxiosError$1.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError$1('Network Error', AxiosError$1.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError$1(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }

    // Handle progress if needed
    if (onDownloadProgress) {
      ([downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true));
      request.addEventListener('progress', downloadThrottled);
    }

    // Not all browsers support upload events
    if (onUploadProgress && request.upload) {
      ([uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress));

      request.upload.addEventListener('progress', uploadThrottled);

      request.upload.addEventListener('loadend', flushUpload);
    }

    if (_config.cancelToken || _config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError$1(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(_config.url);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError$1('Unsupported protocol ' + protocol + ':', AxiosError$1.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
};

const composeSignals = (signals, timeout) => {
  const {length} = (signals = signals ? signals.filter(Boolean) : []);

  if (timeout || length) {
    let controller = new AbortController();

    let aborted;

    const onabort = function (reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError$1 ? err : new CanceledError$1(err instanceof Error ? err.message : err));
      }
    };

    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError$1(`timeout ${timeout} of ms exceeded`, AxiosError$1.ETIMEDOUT));
    }, timeout);

    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach(signal => {
          signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
        });
        signals = null;
      }
    };

    signals.forEach((signal) => signal.addEventListener('abort', onabort));

    const {signal} = controller;

    signal.unsubscribe = () => utils$1.asap(unsubscribe);

    return signal;
  }
};

const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;

  if (len < chunkSize) {
    yield chunk;
    return;
  }

  let pos = 0;
  let end;

  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};

const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};

const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }

  const reader = stream.getReader();
  try {
    for (;;) {
      const {done, value} = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};

const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);

  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };

  return new ReadableStream({
    async pull(controller) {
      try {
        const {done, value} = await iterator.next();

        if (done) {
         _onFinish();
          controller.close();
          return;
        }

        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  })
};

const isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

// used only inside the fetch adapter
const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ?
    ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) :
    async (str) => new Uint8Array(await new Response(str).arrayBuffer())
);

const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false
  }
};

const supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;

  const hasContentType = new Request(platform.origin, {
    body: new ReadableStream(),
    method: 'POST',
    get duplex() {
      duplexAccessed = true;
      return 'half';
    },
  }).headers.has('Content-Type');

  return duplexAccessed && !hasContentType;
});

const DEFAULT_CHUNK_SIZE = 64 * 1024;

const supportsResponseStream = isReadableStreamSupported &&
  test(() => utils$1.isReadableStream(new Response('').body));


const resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};

isFetchSupported && (((res) => {
  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
    !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? (res) => res[type]() :
      (_, config) => {
        throw new AxiosError$1(`Response type '${type}' is not supported`, AxiosError$1.ERR_NOT_SUPPORT, config);
      });
  });
})(new Response));

const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }

  if(utils$1.isBlob(body)) {
    return body.size;
  }

  if(utils$1.isSpecCompliantForm(body)) {
    const _request = new Request(platform.origin, {
      method: 'POST',
      body,
    });
    return (await _request.arrayBuffer()).byteLength;
  }

  if(utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
    return body.byteLength;
  }

  if(utils$1.isURLSearchParams(body)) {
    body = body + '';
  }

  if(utils$1.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
};

const resolveBodyLength = async (headers, body) => {
  const length = utils$1.toFiniteNumber(headers.getContentLength());

  return length == null ? getBodyLength(body) : length;
};

var fetchAdapter = isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = 'same-origin',
    fetchOptions
  } = resolveConfig(config);

  responseType = responseType ? (responseType + '').toLowerCase() : 'text';

  let composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);

  let request;

  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
  });

  let requestContentLength;

  try {
    if (
      onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' &&
      (requestContentLength = await resolveBodyLength(headers, data)) !== 0
    ) {
      let _request = new Request(url, {
        method: 'POST',
        body: data,
        duplex: "half"
      });

      let contentTypeHeader;

      if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
        headers.setContentType(contentTypeHeader);
      }

      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );

        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }

    if (!utils$1.isString(withCredentials)) {
      withCredentials = withCredentials ? 'include' : 'omit';
    }

    // Cloudflare Workers throws when credentials are defined
    // see https://github.com/cloudflare/workerd/issues/902
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : undefined
    });

    let response = await fetch(request);

    const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');

    if (supportsResponseStream && (onDownloadProgress || (isStreamResponse && unsubscribe))) {
      const options = {};

      ['status', 'statusText', 'headers'].forEach(prop => {
        options[prop] = response[prop];
      });

      const responseContentLength = utils$1.toFiniteNumber(response.headers.get('content-length'));

      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];

      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }

    responseType = responseType || 'text';

    let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || 'text'](response, config);

    !isStreamResponse && unsubscribe && unsubscribe();

    return await new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: AxiosHeaders$1.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      });
    })
  } catch (err) {
    unsubscribe && unsubscribe();

    if (err && err.name === 'TypeError' && /fetch/i.test(err.message)) {
      throw Object.assign(
        new AxiosError$1('Network Error', AxiosError$1.ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      )
    }

    throw AxiosError$1.from(err, err && err.code, config, request);
  }
});

const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: fetchAdapter
};

utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;

var adapters = {
  getAdapter: (adapters) => {
    adapters = utils$1.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new AxiosError$1(`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new AxiosError$1(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError$1(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = AxiosHeaders$1.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel$1(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

const VERSION$1 = "1.7.9";

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION$1 + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError$1(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError$1.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    // eslint-disable-next-line no-console
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  }
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError$1('options must be an object', AxiosError$1.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError$1('option ' + opt + ' must be ' + result, AxiosError$1.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError$1('Unknown option ' + opt, AxiosError$1.ERR_BAD_OPTION);
    }
  }
}

var validator = {
  assertOptions,
  validators: validators$1
};

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
let Axios$1 = class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};

        Error.captureStackTrace ? Error.captureStackTrace(dummy) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
            err.stack += '\n' + stack;
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig$1(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    validator.assertOptions(config, {
      baseUrl: validators.spelling('baseURL'),
      withXsrfToken: validators.spelling('withXSRFToken')
    }, true);

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils$1.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils$1.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig$1(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig$1(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios$1.prototype[method] = generateHTTPMethod();

  Axios$1.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
let CancelToken$1 = class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new CanceledError$1(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  toAbortSignal() {
    const controller = new AbortController();

    const abort = (err) => {
      controller.abort(err);
    };

    this.subscribe(abort);

    controller.signal.unsubscribe = () => this.unsubscribe(abort);

    return controller.signal;
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
};

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread$1(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError$1(payload) {
  return utils$1.isObject(payload) && (payload.isAxiosError === true);
}

const HttpStatusCode$1 = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode$1).forEach(([key, value]) => {
  HttpStatusCode$1[value] = key;
});

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils$1.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils$1.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig$1(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios$1 = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios$1.Axios = Axios$1;

// Expose Cancel & CancelToken
axios$1.CanceledError = CanceledError$1;
axios$1.CancelToken = CancelToken$1;
axios$1.isCancel = isCancel$1;
axios$1.VERSION = VERSION$1;
axios$1.toFormData = toFormData$1;

// Expose AxiosError class
axios$1.AxiosError = AxiosError$1;

// alias for CanceledError for backward compatibility
axios$1.Cancel = axios$1.CanceledError;

// Expose all/spread
axios$1.all = function all(promises) {
  return Promise.all(promises);
};

axios$1.spread = spread$1;

// Expose isAxiosError
axios$1.isAxiosError = isAxiosError$1;

// Expose mergeConfig
axios$1.mergeConfig = mergeConfig$1;

axios$1.AxiosHeaders = AxiosHeaders$1;

axios$1.formToJSON = thing => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);

axios$1.getAdapter = adapters.getAdapter;

axios$1.HttpStatusCode = HttpStatusCode$1;

axios$1.default = axios$1;

// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const {
  Axios,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken,
  VERSION,
  all,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
} = axios$1;

const baseURL = 'https://api.usetani.ai/api/v0';
var axios = axios$1.create({
    baseURL: baseURL,
});

const EnrollUser = ({ authInstance, onSuccess }) => {
    const inputRef = React.useRef(null);
    const webCamRef = React.useRef(null);
    const [inputName, setInputName] = React.useState('');
    const [imageSrc, setImageSrc] = React.useState(null);
    const [imageFile, setImageFile] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [uploadCompleted, setUploadCompleted] = React.useState(false);
    const [uploadError, setUploadError] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const create_person_with_image = async () => {
        setIsLoading(true);
        setOpenDialog(true);
        try {
            if (imageFile && inputName) {
                setIsLoading(true);
                const file = imageFile;
                const formData = new FormData();
                formData.append('person_name', inputName);
                const group_id = authInstance.getGroupId();
                if (group_id) {
                    formData.append('group_id', group_id);
                }
                formData.append('image', file);
                // console.log("form data",formData)
                await axios.post('/persons/create-with-image', formData, {
                    headers: authInstance.getHeaders(),
                });
                setIsLoading(false);
                setUploadCompleted(true);
                setOpenDialog(true);
                onSuccess("person added successfully");
                // console.log(response);
            }
        }
        catch (error) {
            console.error(error);
            setIsLoading(false);
            setUploadError(true);
            setOpenDialog(true);
        }
    };
    const close_camera = React.useCallback(() => {
        setImageSrc(null);
        setUploadCompleted(false);
        setIsLoading(false);
        setUploadError(false);
        webCamRef.current?.close_camera();
    }, []);
    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    return (jsxRuntime.jsxs("div", { className: 'mx-auto mt-10 w-fit rounded-md bg-white p-5 relative', children: [jsxRuntime.jsxs("div", { className: 'mb-3 border-b border-gray-300 py-3 text-gray-700', children: [jsxRuntime.jsx("h4", { className: 'font-bold', children: "Create a new user" }), jsxRuntime.jsx("p", { className: 'text-sm', children: "Users created would be validated during authentication." })] }), jsxRuntime.jsxs("div", { className: 'my-4 flex  flex-col gap-2', children: [jsxRuntime.jsx("label", { className: 'text-sm font-semibold', htmlFor: 'Name', children: "Name" }), jsxRuntime.jsx("input", { type: 'text', placeholder: "Enter Your Customer's Name", className: 'rounded border p-2', ref: inputRef, value: inputName, onChange: (e) => setInputName(e.target.value) })] }), jsxRuntime.jsx(WebCamComponent, { setImageFile: setImageFile, setImageSrc: setImageSrc, imageSrc: imageSrc, ref: webCamRef }), imageSrc && (jsxRuntime.jsx("div", { className: 'flex justify-end', children: jsxRuntime.jsx("button", { className: 'mt-5 py-3 text-white bg-[#4327B2] border-[#4327B2] border-[1px] px-5 rounded-md cursor-pointer', onClick: create_person_with_image, children: "Upload Photo" }) })), openDialog && jsxRuntime.jsxs(Dialog, { closeDialog: () => { setOpenDialog(false); close_camera(); }, children: [jsxRuntime.jsx("div", { className: 'flex justify-center', children: imageSrc && (jsxRuntime.jsx("div", { className: 'relative h-fit w-2/3 rounded-md bg-white shadow-md mb-3', children: jsxRuntime.jsx("img", { src: imageSrc, alt: 'Selected Image', style: { objectFit: 'scale-down' }, className: 'rounded-md' }) })) }), isLoading && (jsxRuntime.jsxs("div", { className: 'flex flex-col items-center justify-center', children: [jsxRuntime.jsx("div", { className: 'border-t-[#4327B2] h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-gray-200' }), jsxRuntime.jsx("h4", { className: 'mt-3 text-xl font-bold', children: "Uploading Image" })] })), uploadCompleted && !isLoading && (jsxRuntime.jsx("div", { className: 'flex flex-col items-center justify-center', children: jsxRuntime.jsx("h4", { className: 'mt-3 text-xl font-bold', children: "Person added successfully" }) })), uploadError && !isLoading && (jsxRuntime.jsx("div", { className: 'flex flex-col items-center justify-center', children: jsxRuntime.jsx("h4", { className: 'mt-3 text-xl font-bold', children: "Unable To Add Person" }) }))] })] }));
};

const FaceRecognition = ({ authInstance, onSuccess }) => {
    const [imageSrc, setImageSrc] = React.useState(null);
    const [imageFile, setImageFile] = React.useState(null);
    const webCamRef = React.useRef(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [probableUser, setProbableUser] = React.useState();
    const [similarityScore, setSimilarityScore] = React.useState(0.0);
    const [error, setError] = React.useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);
    const identify_user_face = async () => {
        setIsLoading(true);
        setOpenDialog(true);
        try {
            if (imageFile) {
                setIsLoading(true);
                const file = imageFile;
                const formData = new FormData();
                formData.append('image', file);
                // console.log("form data",formData)
                const response = await axios.post('/persons/authenticate', formData, {
                    headers: authInstance.getHeaders(),
                });
                setIsLoading(false);
                // console.log(response);
                setProbableUser(response.data.potential_match);
                setSimilarityScore(response.data.similarity_score);
                onSuccess(response.data);
                setOpenDialog(true);
            }
        }
        catch (err) {
            setIsLoading(false);
            const axiosError = err;
            if (AxiosError) {
                if (axiosError.status === 400) {
                    setError("No Faces Detected in one or both images. Kindly take a clearer picture and try again");
                }
                if (axiosError.status === 404) {
                    setError("We could not find a match for the uploaded image");
                }
                if (axiosError.status === 401) {
                    setError("API key/Group Id is missing");
                }
                if (axiosError.status === 500) {
                    setError("Internal server error");
                }
            }
            //console.error(err);
            setOpenDialog(true);
        }
    };
    const close_camera = React.useCallback(() => {
        setImageSrc(null);
        setProbableUser(undefined);
        setIsLoading(false);
        setError(null);
        webCamRef.current?.close_camera();
    }, []);
    return (jsxRuntime.jsxs("main", { className: 'flex w-full flex-col bg-gray-100 p-8 relative', children: [jsxRuntime.jsx("h1", { className: 'font-bold text-4xl', children: "Face Search" }), jsxRuntime.jsxs("ul", { className: 'mt-3 list-inside list-disc text-gray-500', children: [jsxRuntime.jsxs("li", { children: [' ', "Click on the ", jsxRuntime.jsx("strong", { children: "Capture Face" }), " button to open the camera module."] }), jsxRuntime.jsx("li", { children: " Please make sure you allow the browser to access your camera." }), jsxRuntime.jsxs("li", { children: [' ', "Take a picture of your face and click the ", jsxRuntime.jsx("strong", { children: "Verify" }), ' ', "button to find a user that matches your face."] })] }), jsxRuntime.jsx("div", { className: 'w-fit mx-auto mt-6', children: jsxRuntime.jsx(WebCamComponent, { setImageFile: setImageFile, setImageSrc: setImageSrc, imageSrc: imageSrc, ref: webCamRef }) }), imageSrc && (jsxRuntime.jsx("div", { className: 'flex justify-end', children: jsxRuntime.jsx("button", { className: 'mt-5 py-3 text-white bg-[#4327B2] border-[#4327B2] border-[1px] px-5 rounded-md cursor-pointer', onClick: identify_user_face, children: "Verify Photo" }) })), openDialog && jsxRuntime.jsxs(Dialog, { closeDialog: () => { setOpenDialog(false); close_camera(); }, children: [jsxRuntime.jsx("div", { className: 'flex justify-center', children: imageSrc && (jsxRuntime.jsx("div", { className: 'relative h-fit w-2/3 rounded-md bg-white shadow-md mb-3', children: jsxRuntime.jsx("img", { src: imageSrc, alt: 'Selected Image', style: { objectFit: 'scale-down' }, className: 'rounded-md mx-auto' }) })) }), isLoading && (jsxRuntime.jsxs("div", { className: 'flex flex-col items-center justify-center', children: [jsxRuntime.jsx("div", { className: 'border-t-[#4327B2] h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-gray-200' }), jsxRuntime.jsx("h4", { className: 'mt-3 text-xl font-bold', children: "Verifying Image" })] })), probableUser && (jsxRuntime.jsxs("div", { className: 'mt-5 text-center', children: [jsxRuntime.jsx("h4", { className: 'mb-2', children: "We have your result!" }), jsxRuntime.jsxs("p", { children: ["Based on our records, there's a", jsxRuntime.jsxs("strong", { children: [" ", (similarityScore * 100).toFixed(2), "% "] }), ' ', "probability that you're", jsxRuntime.jsxs("strong", { children: [" ", probableUser._source.person_name] })] })] })), error !== null && (jsxRuntime.jsx("div", { className: 'flex flex-col items-center justify-center', children: jsxRuntime.jsx("h4", { className: 'mt-3 text-xl font-bold w-1/2', children: error }) }))] })] }));
};

const CompareFaces = ({ authInstance, onSuccess, imageUrl }) => {
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [imageFile, setImageFile] = React.useState(null);
    const [capturedImage, setCapturedImage] = React.useState(null);
    const [capturedImage2, setCapturedImage2] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [facesSimilarity, setFacesSimilarity] = React.useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [comparedImages, setComparedImages] = React.useState(null);
    const [error, setError] = React.useState(null);
    const webCamRef = React.useRef(null);
    const compareImages = async () => {
        setIsLoading(true);
        setOpenDialog(true);
        try {
            if (imageFile && selectedFile) {
                setIsLoading(true);
                setComparedImages([capturedImage ?? '', capturedImage2 ?? '']);
                const formData = new FormData();
                formData.append('image1', selectedFile);
                formData.append('image2', imageFile);
                const response = await axios.post('/persons/compare', formData, {
                    headers: authInstance.getHeaders(),
                });
                setIsLoading(false);
                setFacesSimilarity(response.data);
                onSuccess(response.data);
                setOpenDialog(true);
            }
        }
        catch (err) {
            const axiosError = err;
            if (AxiosError) {
                if (axiosError.status === 400) {
                    setError("No Faces Detected in one or both images. Kindly take a clearer picture and try again");
                }
                if (axiosError.status === 401) {
                    setError("API key/Group Id is missing");
                }
                if (axiosError.status === 500) {
                    setError("Internal server error");
                }
            }
            // console.log(err);
            setIsLoading(false);
        }
    };
    const close_camera = React.useCallback(() => {
        setCapturedImage(null);
        setCapturedImage2(null);
        setFacesSimilarity(null);
        setIsLoading(false);
        setError(null);
        webCamRef.current?.close_camera();
    }, []);
    React.useEffect(() => {
        const processImage = async () => {
            if (!imageUrl)
                return;
            try {
                if (imageUrl) {
                    const file = await fetchAndProcessImage(imageUrl, `image-${Date.now()}.jpg`);
                    if (file) {
                        const url = URL.createObjectURL(file);
                        setImageFile(file);
                        setCapturedImage(url);
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
        };
        processImage();
    }, [imageUrl]);
    return (jsxRuntime.jsxs("div", { className: 'mt-3 w-full rounded-md bg-white p-4 relative', children: [jsxRuntime.jsx("h1", { className: 'font-bold text-4xl', children: "Compare Faces " }), jsxRuntime.jsxs("ul", { className: 'mt-3 list-inside list-disc text-gray-500 mb-10', children: [jsxRuntime.jsxs("li", { children: [' ', "Kindly click on the ", jsxRuntime.jsx("strong", { children: "Compare Faces" }), " button to open the camera module."] }), jsxRuntime.jsx("li", { children: " Please make sure you allow the browser to access your camera." }), jsxRuntime.jsxs("li", { children: [' ', "Select a picture for your gallery as the control image, and take a real time photo of yourself to compare both images"] })] }), jsxRuntime.jsx("div", { className: ' w-fit mx-auto ', children: jsxRuntime.jsx(WebCamComponent, { setImageFile: setSelectedFile, setImageSrc: setCapturedImage2, imageSrc: capturedImage2, ref: webCamRef }) }), jsxRuntime.jsx("div", { className: 'flex justify-end', children: jsxRuntime.jsx("button", { className: 'py-3 mt-5 text-white bg-[#4327B2] border-[#4327B2] border-[1px] px-5 rounded-md cursor-pointer', onClick: compareImages, children: "Compare Faces" }) }), openDialog && jsxRuntime.jsx(Dialog, { closeDialog: () => { setOpenDialog(false); close_camera(); }, children: jsxRuntime.jsxs("div", { className: 'flex flex-col justify-center', children: [jsxRuntime.jsx("div", { className: 'flex space-x-3', children: comparedImages?.map((image, index) => (jsxRuntime.jsx("div", { className: 'relative h-fit w-1/2 rounded-md bg-white shadow-md mb-3', children: jsxRuntime.jsx("img", { src: image, alt: 'Selected Image', style: { objectFit: 'scale-down' }, className: 'selected-image rounded-md mx-auto' }) }, index))) }), isLoading && (jsxRuntime.jsxs("div", { className: 'flex flex-col items-center justify-center', children: [jsxRuntime.jsx("div", { className: 'border-t-[#4327B2] h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-gray-200' }), jsxRuntime.jsx("h4", { className: 'mt-3 text-xl font-bold', children: "Comparing Images" })] })), error !== null && (jsxRuntime.jsx("div", { className: 'text-center flex justify-center items-center', children: jsxRuntime.jsx("h5", { className: 'w-1/2', children: error }) })), facesSimilarity && (jsxRuntime.jsxs("div", { className: 'mt-5 text-center', children: [jsxRuntime.jsx("p", { className: 'text-lg font-semibold text-gray-600', children: "Confidence Percentage" }), jsxRuntime.jsxs("h2", { className: 'font-bold', children: [(facesSimilarity.similarity_score * 100).toFixed(2), "%"] }), jsxRuntime.jsx("p", { className: 'text-gray-500', children: facesSimilarity.message })] }))] }) })] }));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var VIEWBOX_WIDTH = 100;
var VIEWBOX_HEIGHT = 100;
var VIEWBOX_HEIGHT_HALF = 50;
var VIEWBOX_CENTER_X = 50;
var VIEWBOX_CENTER_Y = 50;

function Path(_a) {
    var className = _a.className, counterClockwise = _a.counterClockwise, dashRatio = _a.dashRatio, pathRadius = _a.pathRadius, strokeWidth = _a.strokeWidth, style = _a.style;
    return (React.createElement("path", { className: className, style: Object.assign({}, style, getDashStyle({ pathRadius: pathRadius, dashRatio: dashRatio, counterClockwise: counterClockwise })), d: getPathDescription({
            pathRadius: pathRadius,
            counterClockwise: counterClockwise,
        }), strokeWidth: strokeWidth, fillOpacity: 0 }));
}
function getPathDescription(_a) {
    var pathRadius = _a.pathRadius, counterClockwise = _a.counterClockwise;
    var radius = pathRadius;
    var rotation = counterClockwise ? 1 : 0;
    return "\n      M " + VIEWBOX_CENTER_X + "," + VIEWBOX_CENTER_Y + "\n      m 0,-" + radius + "\n      a " + radius + "," + radius + " " + rotation + " 1 1 0," + 2 * radius + "\n      a " + radius + "," + radius + " " + rotation + " 1 1 0,-" + 2 * radius + "\n    ";
}
function getDashStyle(_a) {
    var counterClockwise = _a.counterClockwise, dashRatio = _a.dashRatio, pathRadius = _a.pathRadius;
    var diameter = Math.PI * 2 * pathRadius;
    var gapLength = (1 - dashRatio) * diameter;
    return {
        strokeDasharray: diameter + "px " + diameter + "px",
        strokeDashoffset: (counterClockwise ? -gapLength : gapLength) + "px",
    };
}

var CircularProgressbar = (function (_super) {
    __extends(CircularProgressbar, _super);
    function CircularProgressbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircularProgressbar.prototype.getBackgroundPadding = function () {
        if (!this.props.background) {
            return 0;
        }
        return this.props.backgroundPadding;
    };
    CircularProgressbar.prototype.getPathRadius = function () {
        return VIEWBOX_HEIGHT_HALF - this.props.strokeWidth / 2 - this.getBackgroundPadding();
    };
    CircularProgressbar.prototype.getPathRatio = function () {
        var _a = this.props, value = _a.value, minValue = _a.minValue, maxValue = _a.maxValue;
        var boundedValue = Math.min(Math.max(value, minValue), maxValue);
        return (boundedValue - minValue) / (maxValue - minValue);
    };
    CircularProgressbar.prototype.render = function () {
        var _a = this.props, circleRatio = _a.circleRatio, className = _a.className, classes = _a.classes, counterClockwise = _a.counterClockwise, styles = _a.styles, strokeWidth = _a.strokeWidth, text = _a.text;
        var pathRadius = this.getPathRadius();
        var pathRatio = this.getPathRatio();
        return (React.createElement("svg", { className: classes.root + " " + className, style: styles.root, viewBox: "0 0 " + VIEWBOX_WIDTH + " " + VIEWBOX_HEIGHT, "data-test-id": "CircularProgressbar" },
            this.props.background ? (React.createElement("circle", { className: classes.background, style: styles.background, cx: VIEWBOX_CENTER_X, cy: VIEWBOX_CENTER_Y, r: VIEWBOX_HEIGHT_HALF })) : null,
            React.createElement(Path, { className: classes.trail, counterClockwise: counterClockwise, dashRatio: circleRatio, pathRadius: pathRadius, strokeWidth: strokeWidth, style: styles.trail }),
            React.createElement(Path, { className: classes.path, counterClockwise: counterClockwise, dashRatio: pathRatio * circleRatio, pathRadius: pathRadius, strokeWidth: strokeWidth, style: styles.path }),
            text ? (React.createElement("text", { className: classes.text, style: styles.text, x: VIEWBOX_CENTER_X, y: VIEWBOX_CENTER_Y }, text)) : null));
    };
    CircularProgressbar.defaultProps = {
        background: false,
        backgroundPadding: 0,
        circleRatio: 1,
        classes: {
            root: 'CircularProgressbar',
            trail: 'CircularProgressbar-trail',
            path: 'CircularProgressbar-path',
            text: 'CircularProgressbar-text',
            background: 'CircularProgressbar-background',
        },
        counterClockwise: false,
        className: '',
        maxValue: 100,
        minValue: 0,
        strokeWidth: 8,
        styles: {
            root: {},
            trail: {},
            path: {},
            text: {},
            background: {},
        },
        text: '',
    };
    return CircularProgressbar;
}(React.Component));

function CircularProgressbarWithChildren(props) {
    props.children; var circularProgressbarProps = __rest(props, ["children"]);
    return (React.createElement("div", { "data-test-id": "CircularProgressbarWithChildren" },
        React.createElement("div", { style: { position: 'relative', width: '100%', height: '100%' } },
            React.createElement(CircularProgressbar, __assign({}, circularProgressbarProps)),
            props.children ? (React.createElement("div", { "data-test-id": "CircularProgressbarWithChildren__children", style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    marginTop: '-100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                } }, props.children)) : null)));
}

function buildStyles(_a) {
    var rotation = _a.rotation, strokeLinecap = _a.strokeLinecap, textColor = _a.textColor, textSize = _a.textSize, pathColor = _a.pathColor, pathTransition = _a.pathTransition, pathTransitionDuration = _a.pathTransitionDuration, trailColor = _a.trailColor, backgroundColor = _a.backgroundColor;
    var rotationTransform = rotation == null ? undefined : "rotate(" + rotation + "turn)";
    var rotationTransformOrigin = rotation == null ? undefined : 'center center';
    return {
        root: {},
        path: removeUndefinedValues({
            stroke: pathColor,
            strokeLinecap: strokeLinecap,
            transform: rotationTransform,
            transformOrigin: rotationTransformOrigin,
            transition: pathTransition,
            transitionDuration: pathTransitionDuration == null ? undefined : pathTransitionDuration + "s",
        }),
        trail: removeUndefinedValues({
            stroke: trailColor,
            strokeLinecap: strokeLinecap,
            transform: rotationTransform,
            transformOrigin: rotationTransformOrigin,
        }),
        text: removeUndefinedValues({
            fill: textColor,
            fontSize: textSize,
        }),
        background: removeUndefinedValues({
            fill: backgroundColor,
        }),
    };
}
function removeUndefinedValues(obj) {
    Object.keys(obj).forEach(function (key) {
        if (obj[key] == null) {
            delete obj[key];
        }
    });
    return obj;
}

// THIS FILE IS AUTO GENERATED
function GoVideo (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z"},"child":[]},{"tag":"path","attr":{"d":"M9 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842L9.77 16.005a.5.5 0 0 1-.77-.42Z"},"child":[]}]})(props);
}

const VidWebCam = (({ setMessage, setError, setOpenDialog, title, setResult, }) => {
    const [displayCamera, setDisplayCamera] = React.useState(false);
    const videoRef = React.useRef(null);
    const socketRef = React.useRef(null);
    const [instructions, setInstructions] = React.useState('Waiting for instructions...');
    // const [response, setResponse] = useState<string>("");
    React.useEffect(() => {
        if (!displayCamera) {
            return;
        }
        // Initialize WebSocket connection
        socketRef.current = new WebSocket('wss://tani-face-model-77573755128.us-central1.run.app/real-time-liveliness-detection');
        socketRef.current.onopen = () => {
            // setResponse(prev => prev + "Connected to WebSocket server.\n");
        };
        socketRef.current.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.instruction) {
                setInstructions(message.instruction);
            }
            if (message.results) {
                // setResponse(prev => prev + `Final Results: ${JSON.stringify(message.results)}\n`);
                setInstructions('Liveness detection completed!');
                setResult(message.results);
                socketRef.current?.close();
                setOpenDialog(true);
                setMessage('Liveness detection completed!');
                setDisplayCamera(false);
            }
            if (message.error) {
                // setResponse(prev => prev + `Error: ${message.error}\n`);
                setError?.(message.error);
            }
        };
        socketRef.current.onclose = () => {
            // setResponse(prev => prev + "Connection closed.\n");
        };
        socketRef.current.onerror = (error) => {
            // setResponse(prev => prev + `WebSocket error: ${error.toString()}\n`);
            console.error(error);
        };
        return () => {
            socketRef.current?.close();
        };
    }, [displayCamera]);
    React.useEffect(() => {
        if (!displayCamera) {
            return;
        }
        const video = videoRef.current;
        if (!video)
            return;
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
            video.srcObject = stream;
            video.onloadedmetadata = () => {
                video.play();
                console.log('Webcam stream loaded.');
                sendFrame();
            };
        })
            .catch((err) => {
            console.error('Error accessing webcam:', err);
            // setResponse(prev => prev + `Error accessing webcam: ${err.message}\n`);
            alert('Please allow access to your webcam.');
        });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context)
            return;
        const sendFrame = () => {
            if (!video.videoWidth || !video.videoHeight)
                return;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const frame = canvas.toDataURL('image/jpeg');
            if (frame === 'data:,') {
                console.warn('Empty frame captured. Skipping...');
                return;
            }
            if (socketRef.current?.readyState === WebSocket.OPEN) {
                socketRef.current.send(JSON.stringify({ frame }));
            }
            setTimeout(sendFrame, 200);
        };
        return () => {
            if (video.srcObject) {
                video.srcObject
                    .getTracks()
                    .forEach((track) => track.stop());
            }
        };
    }, [displayCamera]);
    return (jsxRuntime.jsxs("div", { className: 'mx-auto max-w-xl p-8', children: [jsxRuntime.jsx("h5", { children: title || 'Record Video' }), jsxRuntime.jsx("p", { className: 'text-sm text-gray-500', children: "Click to open the camera module and allow the browser to access your camera." }), jsxRuntime.jsx(jsxRuntime.Fragment, { children: displayCamera ? (jsxRuntime.jsxs("div", { className: 'mt-5', children: [jsxRuntime.jsx("div", { className: 'relative flex items-center justify-center', id: 'container', children: jsxRuntime.jsx("div", { className: 'h-full w-3/4', children: jsxRuntime.jsx(CircularProgressbarWithChildren, { value: instructions === 'Please open your mouth'
                                        ? 33.33
                                        : instructions === 'Please move your head'
                                            ? 66.66
                                            : instructions === 'Liveness detection completed!'
                                                ? 100
                                                : 0, strokeWidth: 3, styles: buildStyles({
                                        pathColor: '#4327B2',
                                        trailColor: '#D3D3D3',
                                        strokeLinecap: 'round',
                                    }), children: jsxRuntime.jsx("video", { ref: videoRef, autoPlay: true, className: 'w-full scale-[1.33]', style: { clipPath: 'circle(40%)' } }) }) }) }), jsxRuntime.jsx("p", { className: 'my-4 text-center text-lg text-gray-700', children: instructions }), jsxRuntime.jsx("button", { className: 'mx-auto block py-2 text-white bg-[#4327B2] border-[#4327B2] border-[1px] px-5 rounded-md cursor-pointer', onClick: (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setDisplayCamera(false);
                            }, children: "Close Liveness" })] })) : (jsxRuntime.jsxs("div", { className: 'relative mt-5 flex min-h-[300px] flex-col items-center justify-center rounded-md border border-gray-300 bg-white p-8', children: [jsxRuntime.jsx(GoVideo, { size: 70, className: 'text-gray-500' }), jsxRuntime.jsx("div", { className: 'mt-3 text-center', children: jsxRuntime.jsx("p", { className: 'text-gray-700', children: jsxRuntime.jsx("span", { className: 'text-[#4327B2] cursor-pointer font-semibold', children: "Click on open camera to start recording" }) }) }), jsxRuntime.jsx("div", { className: 'mt-5 flex w-full flex-col items-center gap-2 md:flex-row', children: jsxRuntime.jsx("button", { onClick: (e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setDisplayCamera(true);
                                }, className: 'flex-grow basis-10 md:basis-10 hover:bg-[#B9AEE7] text-[#4327B2] border-[#4327B2] border-[1px] px-4 py-2 rounded-md cursor-pointer', children: "Open Camera" }) })] })) })] }));
});

const LivenessCheck = () => {
    const [message, setMessage] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [result, setResult] = React.useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);
    return (jsxRuntime.jsxs("main", { className: 'flex w-full flex-col relative', children: [jsxRuntime.jsx("h1", { children: "Liveness Check" }), jsxRuntime.jsxs("ul", { className: 'mt-3 list-inside list-disc text-gray-500', children: [jsxRuntime.jsxs("li", { children: [' ', "Click on the ", jsxRuntime.jsx("strong", { children: "Record Face" }), " button to open the camera module."] }), jsxRuntime.jsx("li", { children: " Please make sure you allow the browser to access your camera." }), jsxRuntime.jsxs("li", { children: [' ', "Record a video of your face and click the ", jsxRuntime.jsx("strong", { children: "Record" }), ' ', "button to check your liveness."] })] }), jsxRuntime.jsx("div", { className: 'flex-1', children: jsxRuntime.jsx(VidWebCam, { title: 'Start liveness check', setMessage: setMessage, setError: setError, setOpenDialog: setOpenDialog, setResult: setResult }) }), openDialog && jsxRuntime.jsxs(Dialog, { closeDialog: () => { setOpenDialog(false); }, children: [jsxRuntime.jsx("div", { className: 'flex justify-center p-6', children: message && (jsxRuntime.jsxs("div", { className: 'relative flex h-52 w-full px-6 flex-col items-center justify-center rounded-md bg-white', children: [jsxRuntime.jsx("h5", { className: 'mb-2 text-center', children: message }), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("span", { children: jsxRuntime.jsx("input", { type: 'radio', checked: result?.blink_detected }) }), ' ', jsxRuntime.jsx("span", { children: "Eyes Blink" })] }), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("span", { children: jsxRuntime.jsx("input", { type: 'radio', checked: result?.mouth_open_detected }) }), ' ', jsxRuntime.jsx("span", { children: "Mouth Open" })] }), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("span", { children: jsxRuntime.jsx("input", { type: 'radio', checked: result?.head_movement_detected }) }), ' ', jsxRuntime.jsx("span", { children: "Head Movement" })] }), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("span", { children: jsxRuntime.jsx("input", { type: 'radio', checked: result?.is_live }) }), ' ', jsxRuntime.jsx("span", { children: "Live" })] })] })] })) }), error !== null && (jsxRuntime.jsx("div", { className: 'text-center', children: jsxRuntime.jsx("h5", { className: '', children: error }) }))] })] }));
};

class TaniAuth {
    apiKey;
    groupId;
    constructor(apiKey, groupId) {
        this.apiKey = apiKey;
        this.groupId = groupId;
    }
    getGroupId() {
        return this.groupId;
    }
    getHeaders() {
        return {
            'x-api-key': this.apiKey,
            'x-group-id': this.groupId,
        };
    }
}

exports.CompareFaces = CompareFaces;
exports.EnrollUser = EnrollUser;
exports.FaceRecognition = FaceRecognition;
exports.LivenessCheck = LivenessCheck;
exports.TaniAuth = TaniAuth;
//# sourceMappingURL=index.js.map
