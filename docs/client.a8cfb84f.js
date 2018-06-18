webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/home/mikob/scratchspace/vue-tel-input/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./demo/App.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  data: function data() {
    return {
      phone: {
        number: '',
        isValid: false,
        country: undefined
      }
    };
  },

  methods: {
    onInput: function onInput(_ref) {
      var number = _ref.number,
          isValid = _ref.isValid,
          country = _ref.country;

      this.phone.number = number;
      this.phone.isValid = isValid;
      this.phone.country = country;
    }
  }
});

/***/ }),
/* 3 */
/*!*****************************!*\
  !*** multi ./demo/index.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mikob/scratchspace/vue-tel-input/demo/index.js */4);


/***/ }),
/* 4 */
/*!***********************!*\
  !*** ./demo/index.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist_vue_tel_input__ = __webpack_require__(/*! ../dist/vue-tel-input */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist_vue_tel_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dist_vue_tel_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dist_vue_tel_input_css__ = __webpack_require__(/*! ../dist/vue-tel-input.css */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dist_vue_tel_input_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dist_vue_tel_input_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_vue__ = __webpack_require__(/*! ./App.vue */ 11);







__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1__dist_vue_tel_input___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */](Object.assign({}, __WEBPACK_IMPORTED_MODULE_3__App_vue__["a" /* default */])).$mount('#app');

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/*!*******************************!*\
  !*** ./dist/vue-tel-input.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (t, e) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.VueTelInput = e() : t.VueTelInput = e();
})("undefined" != typeof self ? self : this, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;var i = n[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
    }var n = {};return e.m = t, e.c = n, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r });
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return e.d(n, "a", n), n;
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "/", e(e.s = 66);
  }([function (t, e) {
    var n;n = function () {
      return this;
    }();try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
    }t.exports = n;
  }, function (t, e) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }function r() {
      throw new Error("clearTimeout has not been defined");
    }function i(t) {
      if (l === setTimeout) return setTimeout(t, 0);if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);try {
        return l(t, 0);
      } catch (e) {
        try {
          return l.call(null, t, 0);
        } catch (e) {
          return l.call(this, t, 0);
        }
      }
    }function o(t) {
      if (c === clearTimeout) return clearTimeout(t);if ((c === r || !c) && clearTimeout) return c = clearTimeout, clearTimeout(t);try {
        return c(t);
      } catch (e) {
        try {
          return c.call(null, t);
        } catch (e) {
          return c.call(this, t);
        }
      }
    }function a() {
      p && h && (p = !1, h.length ? $ = h.concat($) : _ = -1, $.length && s());
    }function s() {
      if (!p) {
        var t = i(a);p = !0;for (var e = $.length; e;) {
          for (h = $, $ = []; ++_ < e;) {
            h && h[_].run();
          }_ = -1, e = $.length;
        }h = null, p = !1, o(t);
      }
    }function d(t, e) {
      this.fun = t, this.array = e;
    }function u() {}var l,
        c,
        f = t.exports = {};(function () {
      try {
        l = "function" == typeof setTimeout ? setTimeout : n;
      } catch (t) {
        l = n;
      }try {
        c = "function" == typeof clearTimeout ? clearTimeout : r;
      } catch (t) {
        c = r;
      }
    })();var h,
        $ = [],
        p = !1,
        _ = -1;f.nextTick = function (t) {
      var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }$.push(new d(t, e)), 1 !== $.length || p || i(s);
    }, d.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function (t) {
      return [];
    }, f.binding = function (t) {
      throw new Error("process.binding is not supported");
    }, f.cwd = function () {
      return "/";
    }, f.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }, f.umask = function () {
      return 0;
    };
  }, function (t, e, n) {
    "use strict";
    (function (t) {
      function r() {
        return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }function i(t, e) {
        if (r() < e) throw new RangeError("Invalid typed array length");return o.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = o.prototype) : (null === t && (t = new o(e)), t.length = e), t;
      }function o(t, e, n) {
        if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(t, e, n);if ("number" == typeof t) {
          if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");return u(this, t);
        }return a(this, t, e, n);
      }function a(t, e, n, r) {
        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? f(t, e, n, r) : "string" == typeof e ? l(t, e, n) : h(t, e);
      }function s(t) {
        if ("number" != typeof t) throw new TypeError('"size" argument must be a number');if (t < 0) throw new RangeError('"size" argument must not be negative');
      }function d(t, e, n, r) {
        return s(e), e <= 0 ? i(t, e) : void 0 !== n ? "string" == typeof r ? i(t, e).fill(n, r) : i(t, e).fill(n) : i(t, e);
      }function u(t, e) {
        if (s(e), t = i(t, e < 0 ? 0 : 0 | $(e)), !o.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) {
          t[n] = 0;
        }return t;
      }function l(t, e, n) {
        if ("string" == typeof n && "" !== n || (n = "utf8"), !o.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');var r = 0 | _(e, n);t = i(t, r);var a = t.write(e, n);return a !== r && (t = t.slice(0, a)), t;
      }function c(t, e) {
        var n = e.length < 0 ? 0 : 0 | $(e.length);t = i(t, n);for (var r = 0; r < n; r += 1) {
          t[r] = 255 & e[r];
        }return t;
      }function f(t, e, n, r) {
        if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), o.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = o.prototype) : t = c(t, e), t;
      }function h(t, e) {
        if (o.isBuffer(e)) {
          var n = 0 | $(e.length);return t = i(t, n), 0 === t.length ? t : (e.copy(t, 0, 0, n), t);
        }if (e) {
          if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || W(e.length) ? i(t, 0) : c(t, e);if ("Buffer" === e.type && J(e.data)) return c(t, e.data);
        }throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }function $(t) {
        if (t >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");return 0 | t;
      }function p(t) {
        return +t != t && (t = 0), o.alloc(+t);
      }function _(t, e) {
        if (o.isBuffer(t)) return t.length;if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;"string" != typeof t && (t = "" + t);var n = t.length;if (0 === n) return 0;for (var r = !1;;) {
          switch (e) {case "ascii":case "latin1":case "binary":
              return n;case "utf8":case "utf-8":case void 0:
              return G(t).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return 2 * n;case "hex":
              return n >>> 1;case "base64":
              return K(t).length;default:
              if (r) return G(t).length;e = ("" + e).toLowerCase(), r = !0;}
        }
      }function g(t, e, n) {
        var r = !1;if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";if (n >>>= 0, e >>>= 0, n <= e) return "";for (t || (t = "utf8");;) {
          switch (t) {case "hex":
              return M(this, e, n);case "utf8":case "utf-8":
              return O(this, e, n);case "ascii":
              return T(this, e, n);case "latin1":case "binary":
              return L(this, e, n);case "base64":
              return A(this, e, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return C(this, e, n);default:
              if (r) throw new TypeError("Unknown encoding: " + t);t = (t + "").toLowerCase(), r = !0;}
        }
      }function m(t, e, n) {
        var r = t[e];t[e] = t[n], t[n] = r;
      }function v(t, e, n, r, i) {
        if (0 === t.length) return -1;if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
          if (i) return -1;n = t.length - 1;
        } else if (n < 0) {
          if (!i) return -1;n = 0;
        }if ("string" == typeof e && (e = o.from(e, r)), o.isBuffer(e)) return 0 === e.length ? -1 : y(t, e, n, r, i);if ("number" == typeof e) return e &= 255, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : y(t, [e], n, r, i);throw new TypeError("val must be string, number or Buffer");
      }function y(t, e, n, r, i) {
        function o(t, e) {
          return 1 === a ? t[e] : t.readUInt16BE(e * a);
        }var a = 1,
            s = t.length,
            d = e.length;if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
          if (t.length < 2 || e.length < 2) return -1;a = 2, s /= 2, d /= 2, n /= 2;
        }var u;if (i) {
          var l = -1;for (u = n; u < s; u++) {
            if (o(t, u) === o(e, -1 === l ? 0 : u - l)) {
              if (-1 === l && (l = u), u - l + 1 === d) return l * a;
            } else -1 !== l && (u -= u - l), l = -1;
          }
        } else for (n + d > s && (n = s - d), u = n; u >= 0; u--) {
          for (var c = !0, f = 0; f < d; f++) {
            if (o(t, u + f) !== o(e, f)) {
              c = !1;break;
            }
          }if (c) return u;
        }return -1;
      }function b(t, e, n, r) {
        n = Number(n) || 0;var i = t.length - n;r ? (r = Number(r)) > i && (r = i) : r = i;var o = e.length;if (o % 2 != 0) throw new TypeError("Invalid hex string");r > o / 2 && (r = o / 2);for (var a = 0; a < r; ++a) {
          var s = parseInt(e.substr(2 * a, 2), 16);if (isNaN(s)) return a;t[n + a] = s;
        }return a;
      }function w(t, e, n, r) {
        return Y(G(e, t.length - n), t, n, r);
      }function E(t, e, n, r) {
        return Y(q(e), t, n, r);
      }function k(t, e, n, r) {
        return E(t, e, n, r);
      }function x(t, e, n, r) {
        return Y(K(e), t, n, r);
      }function S(t, e, n, r) {
        return Y(H(e, t.length - n), t, n, r);
      }function A(t, e, n) {
        return 0 === e && n === t.length ? V.fromByteArray(t) : V.fromByteArray(t.slice(e, n));
      }function O(t, e, n) {
        n = Math.min(t.length, n);for (var r = [], i = e; i < n;) {
          var o = t[i],
              a = null,
              s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;if (i + s <= n) {
            var d, u, l, c;switch (s) {case 1:
                o < 128 && (a = o);break;case 2:
                d = t[i + 1], 128 == (192 & d) && (c = (31 & o) << 6 | 63 & d) > 127 && (a = c);break;case 3:
                d = t[i + 1], u = t[i + 2], 128 == (192 & d) && 128 == (192 & u) && (c = (15 & o) << 12 | (63 & d) << 6 | 63 & u) > 2047 && (c < 55296 || c > 57343) && (a = c);break;case 4:
                d = t[i + 1], u = t[i + 2], l = t[i + 3], 128 == (192 & d) && 128 == (192 & u) && 128 == (192 & l) && (c = (15 & o) << 18 | (63 & d) << 12 | (63 & u) << 6 | 63 & l) > 65535 && c < 1114112 && (a = c);}
          }null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), r.push(a), i += s;
        }return R(r);
      }function R(t) {
        var e = t.length;if (e <= Q) return String.fromCharCode.apply(String, t);for (var n = "", r = 0; r < e;) {
          n += String.fromCharCode.apply(String, t.slice(r, r += Q));
        }return n;
      }function T(t, e, n) {
        var r = "";n = Math.min(t.length, n);for (var i = e; i < n; ++i) {
          r += String.fromCharCode(127 & t[i]);
        }return r;
      }function L(t, e, n) {
        var r = "";n = Math.min(t.length, n);for (var i = e; i < n; ++i) {
          r += String.fromCharCode(t[i]);
        }return r;
      }function M(t, e, n) {
        var r = t.length;(!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);for (var i = "", o = e; o < n; ++o) {
          i += Z(t[o]);
        }return i;
      }function C(t, e, n) {
        for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) {
          i += String.fromCharCode(r[o] + 256 * r[o + 1]);
        }return i;
      }function I(t, e, n) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
      }function N(t, e, n, r, i, a) {
        if (!o.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');if (e > i || e < a) throw new RangeError('"value" argument is out of bounds');if (n + r > t.length) throw new RangeError("Index out of range");
      }function j(t, e, n, r) {
        e < 0 && (e = 65535 + e + 1);for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) {
          t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
        }
      }function B(t, e, n, r) {
        e < 0 && (e = 4294967295 + e + 1);for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) {
          t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255;
        }
      }function P(t, e, n, r, i, o) {
        if (n + r > t.length) throw new RangeError("Index out of range");if (n < 0) throw new RangeError("Index out of range");
      }function U(t, e, n, r, i) {
        return i || P(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), X.write(t, e, n, r, 23, 4), n + 4;
      }function z(t, e, n, r, i) {
        return i || P(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), X.write(t, e, n, r, 52, 8), n + 8;
      }function D(t) {
        if (t = F(t).replace(tt, ""), t.length < 2) return "";for (; t.length % 4 != 0;) {
          t += "=";
        }return t;
      }function F(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      }function Z(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }function G(t, e) {
        e = e || 1 / 0;for (var n, r = t.length, i = null, o = [], a = 0; a < r; ++a) {
          if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
            if (!i) {
              if (n > 56319) {
                (e -= 3) > -1 && o.push(239, 191, 189);continue;
              }if (a + 1 === r) {
                (e -= 3) > -1 && o.push(239, 191, 189);continue;
              }i = n;continue;
            }if (n < 56320) {
              (e -= 3) > -1 && o.push(239, 191, 189), i = n;continue;
            }n = 65536 + (i - 55296 << 10 | n - 56320);
          } else i && (e -= 3) > -1 && o.push(239, 191, 189);if (i = null, n < 128) {
            if ((e -= 1) < 0) break;o.push(n);
          } else if (n < 2048) {
            if ((e -= 2) < 0) break;o.push(n >> 6 | 192, 63 & n | 128);
          } else if (n < 65536) {
            if ((e -= 3) < 0) break;o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");if ((e -= 4) < 0) break;o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
          }
        }return o;
      }function q(t) {
        for (var e = [], n = 0; n < t.length; ++n) {
          e.push(255 & t.charCodeAt(n));
        }return e;
      }function H(t, e) {
        for (var n, r, i, o = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) {
          n = t.charCodeAt(a), r = n >> 8, i = n % 256, o.push(i), o.push(r);
        }return o;
      }function K(t) {
        return V.toByteArray(D(t));
      }function Y(t, e, n, r) {
        for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) {
          e[i + n] = t[i];
        }return i;
      }function W(t) {
        return t !== t;
      }var V = n(116),
          X = n(117),
          J = n(54);e.Buffer = o, e.SlowBuffer = p, e.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
        try {
          var t = new Uint8Array(1);return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
              return 42;
            } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
        } catch (t) {
          return !1;
        }
      }(), e.kMaxLength = r(), o.poolSize = 8192, o._augment = function (t) {
        return t.__proto__ = o.prototype, t;
      }, o.from = function (t, e, n) {
        return a(null, t, e, n);
      }, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, { value: null, configurable: !0 })), o.alloc = function (t, e, n) {
        return d(null, t, e, n);
      }, o.allocUnsafe = function (t) {
        return u(null, t);
      }, o.allocUnsafeSlow = function (t) {
        return u(null, t);
      }, o.isBuffer = function (t) {
        return !(null == t || !t._isBuffer);
      }, o.compare = function (t, e) {
        if (!o.isBuffer(t) || !o.isBuffer(e)) throw new TypeError("Arguments must be Buffers");if (t === e) return 0;for (var n = t.length, r = e.length, i = 0, a = Math.min(n, r); i < a; ++i) {
          if (t[i] !== e[i]) {
            n = t[i], r = e[i];break;
          }
        }return n < r ? -1 : r < n ? 1 : 0;
      }, o.isEncoding = function (t) {
        switch (String(t).toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
            return !0;default:
            return !1;}
      }, o.concat = function (t, e) {
        if (!J(t)) throw new TypeError('"list" argument must be an Array of Buffers');if (0 === t.length) return o.alloc(0);var n;if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) {
          e += t[n].length;
        }var r = o.allocUnsafe(e),
            i = 0;for (n = 0; n < t.length; ++n) {
          var a = t[n];if (!o.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');a.copy(r, i), i += a.length;
        }return r;
      }, o.byteLength = _, o.prototype._isBuffer = !0, o.prototype.swap16 = function () {
        var t = this.length;if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");for (var e = 0; e < t; e += 2) {
          m(this, e, e + 1);
        }return this;
      }, o.prototype.swap32 = function () {
        var t = this.length;if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");for (var e = 0; e < t; e += 4) {
          m(this, e, e + 3), m(this, e + 1, e + 2);
        }return this;
      }, o.prototype.swap64 = function () {
        var t = this.length;if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");for (var e = 0; e < t; e += 8) {
          m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
        }return this;
      }, o.prototype.toString = function () {
        var t = 0 | this.length;return 0 === t ? "" : 0 === arguments.length ? O(this, 0, t) : g.apply(this, arguments);
      }, o.prototype.equals = function (t) {
        if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");return this === t || 0 === o.compare(this, t);
      }, o.prototype.inspect = function () {
        var t = "",
            n = e.INSPECT_MAX_BYTES;return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">";
      }, o.prototype.compare = function (t, e, n, r, i) {
        if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");if (r >= i && e >= n) return 0;if (r >= i) return -1;if (e >= n) return 1;if (e >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === t) return 0;for (var a = i - r, s = n - e, d = Math.min(a, s), u = this.slice(r, i), l = t.slice(e, n), c = 0; c < d; ++c) {
          if (u[c] !== l[c]) {
            a = u[c], s = l[c];break;
          }
        }return a < s ? -1 : s < a ? 1 : 0;
      }, o.prototype.includes = function (t, e, n) {
        return -1 !== this.indexOf(t, e, n);
      }, o.prototype.indexOf = function (t, e, n) {
        return v(this, t, e, n, !0);
      }, o.prototype.lastIndexOf = function (t, e, n) {
        return v(this, t, e, n, !1);
      }, o.prototype.write = function (t, e, n, r) {
        if (void 0 === e) r = "utf8", n = this.length, e = 0;else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;else {
          if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
        }var i = this.length - e;if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");r || (r = "utf8");for (var o = !1;;) {
          switch (r) {case "hex":
              return b(this, t, e, n);case "utf8":case "utf-8":
              return w(this, t, e, n);case "ascii":
              return E(this, t, e, n);case "latin1":case "binary":
              return k(this, t, e, n);case "base64":
              return x(this, t, e, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return S(this, t, e, n);default:
              if (o) throw new TypeError("Unknown encoding: " + r);r = ("" + r).toLowerCase(), o = !0;}
        }
      }, o.prototype.toJSON = function () {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };var Q = 4096;o.prototype.slice = function (t, e) {
        var n = this.length;t = ~~t, e = void 0 === e ? n : ~~e, t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t);var r;if (o.TYPED_ARRAY_SUPPORT) r = this.subarray(t, e), r.__proto__ = o.prototype;else {
          var i = e - t;r = new o(i, void 0);for (var a = 0; a < i; ++a) {
            r[a] = this[a + t];
          }
        }return r;
      }, o.prototype.readUIntLE = function (t, e, n) {
        t |= 0, e |= 0, n || I(t, e, this.length);for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) {
          r += this[t + o] * i;
        }return r;
      }, o.prototype.readUIntBE = function (t, e, n) {
        t |= 0, e |= 0, n || I(t, e, this.length);for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) {
          r += this[t + --e] * i;
        }return r;
      }, o.prototype.readUInt8 = function (t, e) {
        return e || I(t, 1, this.length), this[t];
      }, o.prototype.readUInt16LE = function (t, e) {
        return e || I(t, 2, this.length), this[t] | this[t + 1] << 8;
      }, o.prototype.readUInt16BE = function (t, e) {
        return e || I(t, 2, this.length), this[t] << 8 | this[t + 1];
      }, o.prototype.readUInt32LE = function (t, e) {
        return e || I(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
      }, o.prototype.readUInt32BE = function (t, e) {
        return e || I(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
      }, o.prototype.readIntLE = function (t, e, n) {
        t |= 0, e |= 0, n || I(t, e, this.length);for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) {
          r += this[t + o] * i;
        }return i *= 128, r >= i && (r -= Math.pow(2, 8 * e)), r;
      }, o.prototype.readIntBE = function (t, e, n) {
        t |= 0, e |= 0, n || I(t, e, this.length);for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) {
          o += this[t + --r] * i;
        }return i *= 128, o >= i && (o -= Math.pow(2, 8 * e)), o;
      }, o.prototype.readInt8 = function (t, e) {
        return e || I(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
      }, o.prototype.readInt16LE = function (t, e) {
        e || I(t, 2, this.length);var n = this[t] | this[t + 1] << 8;return 32768 & n ? 4294901760 | n : n;
      }, o.prototype.readInt16BE = function (t, e) {
        e || I(t, 2, this.length);var n = this[t + 1] | this[t] << 8;return 32768 & n ? 4294901760 | n : n;
      }, o.prototype.readInt32LE = function (t, e) {
        return e || I(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
      }, o.prototype.readInt32BE = function (t, e) {
        return e || I(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
      }, o.prototype.readFloatLE = function (t, e) {
        return e || I(t, 4, this.length), X.read(this, t, !0, 23, 4);
      }, o.prototype.readFloatBE = function (t, e) {
        return e || I(t, 4, this.length), X.read(this, t, !1, 23, 4);
      }, o.prototype.readDoubleLE = function (t, e) {
        return e || I(t, 8, this.length), X.read(this, t, !0, 52, 8);
      }, o.prototype.readDoubleBE = function (t, e) {
        return e || I(t, 8, this.length), X.read(this, t, !1, 52, 8);
      }, o.prototype.writeUIntLE = function (t, e, n, r) {
        if (t = +t, e |= 0, n |= 0, !r) {
          N(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
        }var i = 1,
            o = 0;for (this[e] = 255 & t; ++o < n && (i *= 256);) {
          this[e + o] = t / i & 255;
        }return e + n;
      }, o.prototype.writeUIntBE = function (t, e, n, r) {
        if (t = +t, e |= 0, n |= 0, !r) {
          N(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
        }var i = n - 1,
            o = 1;for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) {
          this[e + i] = t / o & 255;
        }return e + n;
      }, o.prototype.writeUInt8 = function (t, e, n) {
        return t = +t, e |= 0, n || N(this, t, e, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
      }, o.prototype.writeUInt16LE = function (t, e, n) {
        return t = +t, e |= 0, n || N(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : j(this, t, e, !0), e + 2;
      }, o.prototype.writeUInt16BE = function (t, e, n) {
        return t = +t, e |= 0, n || N(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : j(this, t, e, !1), e + 2;
      }, o.prototype.writeUInt32LE = function (t, e, n) {
        return t = +t, e |= 0, n || N(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : B(this, t, e, !0), e + 4;
      }, o.prototype.writeUInt32BE = function (t, e, n) {
        return t = +t, e |= 0, n || N(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4;
      }, o.prototype.writeIntLE = function (t, e, n, r) {
        if (t = +t, e |= 0, !r) {
          var i = Math.pow(2, 8 * n - 1);N(this, t, e, n, i - 1, -i);
        }var o = 0,
            a = 1,
            s = 0;for (this[e] = 255 & t; ++o < n && (a *= 256);) {
          t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), this[e + o] = (t / a >> 0) - s & 255;
        }return e + n;
      }, o.prototype.writeIntBE = function (t, e, n, r) {
        if (t = +t, e |= 0, !r) {
          var i = Math.pow(2, 8 * n - 1);N(this, t, e, n, i - 1, -i);
        }var o = n - 1,
            a = 1,
            s = 0;for (this[e + o] = 255 & t; --o >= 0 && (a *= 256);) {
          t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), this[e + o] = (t / a >> 0) - s & 255;
        }return e + n;
      }, o.prototype.writeInt8 = function (t, e, n) {
        return t = +t, e |= 0, n || N(this, t, e, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
      }, o.prototype.writeInt16LE = function (t, e, n) {
        return t = +t, e |= 0, n || N(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : j(this, t, e, !0), e + 2;
      }, o.prototype.writeInt16BE = function (t, e, n) {
        return t = +t, e |= 0, n || N(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : j(this, t, e, !1), e + 2;
      }, o.prototype.writeInt32LE = function (t, e, n) {
        return t = +t, e |= 0, n || N(this, t, e, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : B(this, t, e, !0), e + 4;
      }, o.prototype.writeInt32BE = function (t, e, n) {
        return t = +t, e |= 0, n || N(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4;
      }, o.prototype.writeFloatLE = function (t, e, n) {
        return U(this, t, e, !0, n);
      }, o.prototype.writeFloatBE = function (t, e, n) {
        return U(this, t, e, !1, n);
      }, o.prototype.writeDoubleLE = function (t, e, n) {
        return z(this, t, e, !0, n);
      }, o.prototype.writeDoubleBE = function (t, e, n) {
        return z(this, t, e, !1, n);
      }, o.prototype.copy = function (t, e, n, r) {
        if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;if (0 === t.length || 0 === this.length) return 0;if (e < 0) throw new RangeError("targetStart out of bounds");if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");if (r < 0) throw new RangeError("sourceEnd out of bounds");r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);var i,
            a = r - n;if (this === t && n < e && e < r) for (i = a - 1; i >= 0; --i) {
          t[i + e] = this[i + n];
        } else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT) for (i = 0; i < a; ++i) {
          t[i + e] = this[i + n];
        } else Uint8Array.prototype.set.call(t, this.subarray(n, n + a), e);return a;
      }, o.prototype.fill = function (t, e, n, r) {
        if ("string" == typeof t) {
          if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
            var i = t.charCodeAt(0);i < 256 && (t = i);
          }if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");if ("string" == typeof r && !o.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
        } else "number" == typeof t && (t &= 255);if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");if (n <= e) return this;e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0);var a;if ("number" == typeof t) for (a = e; a < n; ++a) {
          this[a] = t;
        } else {
          var s = o.isBuffer(t) ? t : G(new o(t, r).toString()),
              d = s.length;for (a = 0; a < n - e; ++a) {
            this[a + e] = s[a % d];
          }
        }return this;
      };var tt = /[^+\/0-9A-Za-z-_]/g;
    }).call(e, n(0));
  }, function (t, e) {
    "function" == typeof Object.create ? t.exports = function (t, e) {
      t.super_ = e, t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } });
    } : t.exports = function (t, e) {
      t.super_ = e;var n = function n() {};n.prototype = e.prototype, t.prototype = new n(), t.prototype.constructor = t;
    };
  }, function (t, e, n) {
    var r = n(43)("wks"),
        i = n(44),
        o = n(7).Symbol,
        a = "function" == typeof o;(t.exports = function (t) {
      return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t));
    }).store = r;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      if (!(this instanceof r)) return new r(t);u.call(this, t), l.call(this, t), t && !1 === t.readable && (this.readable = !1), t && !1 === t.writable && (this.writable = !1), this.allowHalfOpen = !0, t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", i);
    }function i() {
      this.allowHalfOpen || this._writableState.ended || a(o, this);
    }function o(t) {
      t.end();
    }var a = n(22),
        s = Object.keys || function (t) {
      var e = [];for (var n in t) {
        e.push(n);
      }return e;
    };t.exports = r;var d = n(14);d.inherits = n(3);var u = n(57),
        l = n(33);d.inherits(r, u);for (var c = s(l.prototype), f = 0; f < c.length; f++) {
      var h = c[f];r.prototype[h] || (r.prototype[h] = l.prototype[h]);
    }Object.defineProperty(r.prototype, "destroyed", { get: function get() {
        return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
      }, set: function set(t) {
        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t);
      } }), r.prototype._destroy = function (t, e) {
      this.push(null), this.end(), a(e, t);
    };
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n) {
      var r = f(t, e, n),
          o = r.text,
          d = r.options,
          $ = r.metadata;if (d.country.default && !$.countries[d.country.default]) throw new Error("Unknown country code: " + d.country.default);if (d.country.restrict && !$.countries[d.country.restrict]) throw new Error("Unknown country code: " + d.country.restrict);var p = void 0,
          _ = void 0;if (o && 0 === o.indexOf("tel:")) {
        var m = !0,
            w = !1,
            E = void 0;try {
          for (var k, S = v()(o.split(";")); !(m = (k = S.next()).done); m = !0) {
            var A = k.value,
                O = A.split(":"),
                R = g()(O, 2),
                T = R[0],
                L = R[1];switch (T) {case "tel":
                p = L;break;case "ext":
                _ = L;break;case "phone-context":
                "+" === L[0] && (p = L + p);}
          }
        } catch (t) {
          w = !0, E = t;
        } finally {
          try {
            !m && S.return && S.return();
          } finally {
            if (w) throw E;
          }
        }
      } else p = s(o);if (!a(p)) return {};var M = h(p);M.extension && (p = M.number, _ = M.extension);var C = u(p, $),
          I = C.country_phone_code,
          N = C.number;if (!N) return {};var j = void 0,
          B = void 0,
          P = !1;if (I) {
        if (P = !0, d.country.restrict && I !== Object(b.o)($.countries[d.country.restrict])) return {};B = Object(b.k)(I, $);
      } else (d.country.restrict || d.country.default) && (j = d.country.restrict || d.country.default, B = $.countries[j], N = i(p));if (!B) return {};var U = N;P || (U = l(N, B));if (!j) {
        if (!(j = c(I, U, $))) return {};B = $.countries[j];
      }if (U.length > x) return {};var z = new RegExp(Object(b.l)(B));if (!Object(y.a)(U, z)) return {};var D = { country: j, phone: U };return _ && (D.ext = _), D;
    }function i(t) {
      return o(t, U);
    }function o(t, e) {
      var n = "",
          r = !0,
          i = !1,
          o = void 0;try {
        for (var a, s = v()(t); !(r = (a = s.next()).done); r = !0) {
          var d = a.value,
              u = e[d.toUpperCase()];void 0 !== u && (n += u);
        }
      } catch (t) {
        i = !0, o = t;
      } finally {
        try {
          !r && s.return && s.return();
        } finally {
          if (i) throw o;
        }
      }return n;
    }function a(t) {
      return t.length >= k && Object(y.a)(t, N);
    }function s(t) {
      if (!t || t.length > S) return "";var e = t.search(j);return e < 0 ? "" : t.slice(e).replace(B, "");
    }function d(t) {
      if (!t) return "";var e = P.test(t);return t = i(t), e ? "+" + t : t;
    }function u(t, e) {
      if (!(t = d(t))) return {};if ("+" !== t[0]) return { number: t };if (t = t.slice(1), "0" === t[0]) return {};for (var n = 1; n <= E && n <= t.length;) {
        var r = t.slice(0, n);if (e.country_phone_code_to_countries[r]) return { country_phone_code: r, number: t.slice(n) };n++;
      }return {};
    }function l(t, e) {
      var n = Object(b.m)(e);if (!t || !n) return t;var r = new RegExp("^(?:" + n + ")"),
          i = r.exec(t);if (!i) return t;var o = void 0,
          a = i[i.length - 1],
          s = Object(b.n)(e);o = s && a ? t.replace(r, s) : t.slice(i[0].length);var d = new RegExp(Object(b.l)(e));return Object(y.a)(t, d) && !Object(y.a)(o, d) ? t : o;
    }function c(t, e, n) {
      var r = n.country_phone_code_to_countries[t];if (1 === r.length) return r[0];var i = !0,
          o = !1,
          a = void 0;try {
        for (var s, d = v()(r); !(i = (s = d.next()).done); i = !0) {
          var u = s.value,
              l = n.countries[u];if (Object(b.j)(l)) {
            if (e && 0 === e.search(Object(b.j)(l))) return u;
          } else if (Object(w.a)({ phone: e, country: u }, n)) return u;
        }
      } catch (t) {
        o = !0, a = t;
      } finally {
        try {
          !i && d.return && d.return();
        } finally {
          if (o) throw a;
        }
      }
    }function f(t, e, n) {
      var r = void 0,
          i = void 0,
          o = void 0;if ("number" == typeof t && (t = String(t)), "string" == typeof t && (r = t), "string" == typeof e ? (i = { country: { restrict: e } }, o = n) : n ? (i = e, o = n) : o = e, !o || !o.countries) throw new Error("Metadata is required");return i = i ? p()({}, z, i) : z, { text: r, options: i, metadata: o };
    }function h(t) {
      var e = t.search(M);if (e < 0) return {};var n = t.slice(0, e);if (!a(n)) return {};for (var r = t.match(M), i = 1; i < r.length;) {
        if (null != r[i] && r[i].length > 0) return { number: n, extension: r[i] };i++;
      }
    }n.d(e, "a", function () {
      return A;
    }), n.d(e, "b", function () {
      return O;
    }), n.d(e, "c", function () {
      return R;
    }), e.d = r, e.g = a, e.e = s, e.h = d, e.i = u, e.j = l, e.f = c;var $ = n(37),
        p = n.n($),
        _ = n(87),
        g = n.n(_),
        m = n(18),
        v = n.n(m),
        y = n(19),
        b = n(9),
        w = (n(20), n(21)),
        E = 3,
        k = 2,
        x = 17,
        S = 250,
        A = "+＋",
        O = "0-9０-９٠-٩۰-۹",
        R = "-‐-―−ー－／/．.  ­​⁠　()（）［］\\[\\]~⁓∼～",
        T = "([" + O + "]{1,7})",
        L = ";ext=" + T + "|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|[;,xｘ#＃~～]|int|anexo|ｉｎｔ)[:\\.．]?[  \\t,-]*" + T + "#?|[- ]+([" + O + "]{1,5})#",
        M = new RegExp("(?:" + L + ")$", "i"),
        C = "[" + O + "]{" + k + "}",
        I = "[" + A + "]{0,1}(?:[" + R + "]*[" + O + "]){3,}[" + R + O + "]*",
        N = new RegExp("^" + C + "$|^" + I + "(?:" + L + ")?$", "i"),
        j = new RegExp("[" + A + O + "]"),
        B = new RegExp("[^" + O + "]+$"),
        P = new RegExp("^[" + A + "]+"),
        U = { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", "０": "0", "１": "1", "２": "2", "３": "3", "４": "4", "５": "5", "６": "6", "７": "7", "８": "8", "９": "9", "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "۰": "0", "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9" },
        z = { country: {} };
  }, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = n);
  }, function (t, e) {
    var n = t.exports = { version: "2.5.3" };"number" == typeof __e && (__e = n);
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t[0];
    }function i(t) {
      return t[1];
    }function o(t) {
      return t[2] || [];
    }function a(t) {
      return t[3];
    }function s(t) {
      return t[4];
    }function d(t) {
      var e = t[5];return e || (e = a(t)), e;
    }function u(t) {
      return t[6];
    }function l(t) {
      return t[7];
    }function c(t) {
      return t[8];
    }function f(t) {
      return t[0];
    }function h(t) {
      return t[1];
    }function $(t) {
      return t[2] || [];
    }function p(t, e) {
      return t[3] || s(e);
    }function _(t, e) {
      return t[4] || l(e);
    }function g(t, e) {
      var n = p(t, e);return n && m(n) && !_(t, e);
    }function m(t) {
      return "$1" !== t && /\d/.test(t.replace("$1", ""));
    }function v(t) {
      return t[5] || h(t);
    }function y(t, e) {
      var n = e.country_phone_code_to_countries[t][0];return e.countries[n];
    }function b(t) {
      return t[9];
    }function w(t, e) {
      return b(t) ? b(t)[e] : void 0;
    }function E(t) {
      return w(t, 0);
    }function k(t) {
      return w(t, 1);
    }function x(t) {
      return w(t, 2);
    }function S(t) {
      return w(t, 3);
    }function A(t) {
      return w(t, 4);
    }function O(t) {
      return w(t, 5);
    }function R(t) {
      return w(t, 6);
    }function T(t) {
      return w(t, 7);
    }function L(t) {
      return w(t, 8);
    }function M(t) {
      return w(t, 9);
    }e.o = r, e.l = i, e.i = o, e.m = d, e.n = u, e.j = c, e.g = f, e.a = h, e.c = $, e.d = p, e.f = _, e.e = g, e.h = m, e.b = v, e.k = y, e.z = b, e.p = E, e.q = k, e.v = x, e.t = S, e.s = A, e.x = O, e.w = R, e.r = T, e.y = L, e.u = M;
  }, function (t, e, n) {
    var r = n(15),
        i = n(39);t.exports = n(11) ? function (t, e, n) {
      return r.f(t, e, i(1, n));
    } : function (t, e, n) {
      return t[e] = n, t;
    };
  }, function (t, e, n) {
    t.exports = !n(27)(function () {
      return 7 != Object.defineProperty({}, "a", { get: function get() {
          return 7;
        } }).a;
    });
  }, function (t, e) {
    t.exports = {};
  }, function (t, e, n) {
    e = t.exports = n(57), e.Stream = e, e.Readable = e, e.Writable = n(33), e.Duplex = n(5), e.Transform = n(61), e.PassThrough = n(125);
  }, function (t, e, n) {
    (function (t) {
      function n(t) {
        return Array.isArray ? Array.isArray(t) : "[object Array]" === _(t);
      }function r(t) {
        return "boolean" == typeof t;
      }function i(t) {
        return null === t;
      }function o(t) {
        return null == t;
      }function a(t) {
        return "number" == typeof t;
      }function s(t) {
        return "string" == typeof t;
      }function d(t) {
        return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t));
      }function u(t) {
        return void 0 === t;
      }function l(t) {
        return "[object RegExp]" === _(t);
      }function c(t) {
        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
      }function f(t) {
        return "[object Date]" === _(t);
      }function h(t) {
        return "[object Error]" === _(t) || t instanceof Error;
      }function $(t) {
        return "function" == typeof t;
      }function p(t) {
        return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || void 0 === t;
      }function _(t) {
        return Object.prototype.toString.call(t);
      }e.isArray = n, e.isBoolean = r, e.isNull = i, e.isNullOrUndefined = o, e.isNumber = a, e.isString = s, e.isSymbol = d, e.isUndefined = u, e.isRegExp = l, e.isObject = c, e.isDate = f, e.isError = h, e.isFunction = $, e.isPrimitive = p, e.isBuffer = t.isBuffer;
    }).call(e, n(2).Buffer);
  }, function (t, e, n) {
    var r = n(16),
        i = n(78),
        o = n(79),
        a = Object.defineProperty;e.f = n(11) ? Object.defineProperty : function (t, e, n) {
      if (r(t), e = o(e, !0), r(n), i) try {
        return a(t, e, n);
      } catch (t) {}if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");return "value" in n && (t[e] = n.value), t;
    };
  }, function (t, e, n) {
    var r = n(26);t.exports = function (t) {
      if (!r(t)) throw TypeError(t + " is not an object!");return t;
    };
  }, function (t, e) {
    var n = {}.hasOwnProperty;t.exports = function (t, e) {
      return n.call(t, e);
    };
  }, function (t, e, n) {
    t.exports = { default: n(102), __esModule: !0 };
  }, function (t, e, n) {
    "use strict";
    function r() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e = arguments[1];"string" == typeof e && (e = "^(?:" + e + ")$");var n = t.match(e);return null !== n && n[0].length === t.length;
    }e.a = r;
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n, r, i) {
      var a = d(t, e, n, r, i),
          s = a.input,
          u = a.format_type,
          l = a.options,
          c = a.metadata,
          f = void 0;s.country && (f = c.countries[s.country]);var h = Object($.i)(s.phone, c),
          _ = h.country_phone_code,
          g = h.number;if (_) {
        if (s.country && f && _ !== Object(p.o)(f)) return s.phone;f = Object(p.k)(_, c);
      }if (!f) return s.phone;switch (u) {case "International":
          if (!g) return "+" + Object(p.o)(f);var m = o(g, "International", !1, f),
              v = "+" + Object(p.o)(f) + " " + m;return s.ext || 0 === s.ext ? l.formatExtension(v, s.ext) : v;case "E.164":case "International_plaintext":
          return "+" + Object(p.o)(f) + s.phone;case "RFC3966":
          return "+" + Object(p.o)(f) + s.phone + (s.ext || 0 === s.ext ? ";ext=" + s.ext : "");case "National":
          if (!g) return "";var y = o(g, "National", !1, f);return s.ext || 0 === s.ext ? l.formatExtension(y, s.ext) : y;}
    }function i(t, e, n, r, i) {
      var o = new RegExp(Object(p.g)(e)),
          a = Object(p.d)(e, i),
          d = !a || a && Object(p.f)(e, i) && !r;if (!n && !d) return t.replace(o, Object(p.a)(e).replace(g, a));var u = t.replace(o, n ? Object(p.b)(e) : Object(p.a)(e));return n ? s(u) : u;
    }function o(t, e, n, r) {
      var o = a(Object(p.i)(r), t);return o ? i(t, o, "International" === e, n, r) : t;
    }function a(t, e) {
      var n = !0,
          r = !1,
          i = void 0;try {
        for (var o, a = f()(t); !(n = (o = a.next()).done); n = !0) {
          var s = o.value;if (Object(p.c)(s).length > 0) {
            var d = Object(p.c)(s)[Object(p.c)(s).length - 1];if (0 !== e.search(d)) continue;
          }if (Object(h.a)(e, new RegExp(Object(p.g)(s)))) return s;
        }
      } catch (t) {
        r = !0, i = t;
      } finally {
        try {
          !n && a.return && a.return();
        } finally {
          if (r) throw i;
        }
      }
    }function s(t) {
      return t.replace(new RegExp("[" + $.c + "]+", "g"), " ").trim();
    }function d() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e = arguments[1],
          n = arguments[2],
          r = arguments[3],
          i = arguments[4],
          o = void 0,
          a = void 0,
          s = void 0,
          d = void 0;if ("string" == typeof t) {
        if ("string" == typeof n) o = { phone: t, country: e }, a = n, i ? (s = r, d = i) : d = r;else {
          if (o = { phone: t }, "string" != typeof e) throw new Error("Format type argument not passed for `format()`");a = e, r ? (s = n, d = r) : d = n;
        }
      } else o = t, a = e, r ? (s = n, d = r) : d = n;if (!d) throw new Error("Metadata is required");switch (a) {case "International":case "E.164":case "International_plaintext":case "National":case "RFC3966":
          break;default:
          throw new Error('Unknown format type argument passed to "format()": "' + a + '"');}return s = s ? l()({}, _, s) : _, { input: o, format_type: a, options: s, metadata: d };
    }e.b = r, n.d(e, "a", function () {
      return g;
    }), e.c = i, e.d = s;var u = n(37),
        l = n.n(u),
        c = n(18),
        f = n.n(c),
        h = n(19),
        $ = n(6),
        p = n(9),
        _ = { formatExtension: function formatExtension(t, e) {
        return t + " ext. " + e;
      } },
        g = /(\$\d)/;
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n) {
      var r = o(t, e, n),
          a = r.input,
          s = r.metadata;if (a && a.country) {
        var u = a.phone,
            l = s.countries[a.country];if (i(u, Object(d.l)(l))) return i(u, Object(d.t)(l)) ? "PREMIUM_RATE" : i(u, Object(d.v)(l)) ? "TOLL_FREE" : i(u, Object(d.u)(l)) ? "SHARED_COST" : i(u, Object(d.y)(l)) ? "VOIP" : i(u, Object(d.s)(l)) ? "PERSONAL_NUMBER" : i(u, Object(d.r)(l)) ? "PAGER" : i(u, Object(d.w)(l)) ? "UAN" : i(u, Object(d.x)(l)) ? "VOICEMAIL" : i(u, Object(d.p)(l)) ? Object(d.q)(l) ? i(u, Object(d.q)(l)) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE" : "FIXED_LINE_OR_MOBILE" : i(u, Object(d.q)(l)) ? "MOBILE" : void 0;
      }
    }function i(t, e) {
      return Object(s.a)(t, e);
    }function o(t, e, n) {
      var r = void 0,
          i = void 0;if ("number" == typeof t && (t = String(t)), "string" == typeof t ? "string" == typeof e || void 0 === e ? (i = n, Object(a.g)(t) && (r = Object(a.d)(t, e, i))) : (i = e, Object(a.g)(t) && (r = Object(a.d)(t, i))) : (t && t.phone && Object(a.g)(t.phone) && (r = t), i = e), !i || !i.countries) throw new Error("Metadata is required");return { input: r, metadata: i };
    }e.a = r, e.b = o;var a = n(6),
        s = n(19),
        d = n(9);
  }, function (t, e, n) {
    "use strict";
    (function (e) {
      function n(t, n, r, i) {
        if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');var o,
            a,
            s = arguments.length;switch (s) {case 0:case 1:
            return e.nextTick(t);case 2:
            return e.nextTick(function () {
              t.call(null, n);
            });case 3:
            return e.nextTick(function () {
              t.call(null, n, r);
            });case 4:
            return e.nextTick(function () {
              t.call(null, n, r, i);
            });default:
            for (o = new Array(s - 1), a = 0; a < o.length;) {
              o[a++] = arguments[a];
            }return e.nextTick(function () {
              t.apply(null, o);
            });}
      }!e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = n : t.exports = e.nextTick;
    }).call(e, n(1));
  }, function (t, e, n) {
    function r(t, e) {
      for (var n in t) {
        e[n] = t[n];
      }
    }function i(t, e, n) {
      return a(t, e, n);
    }var o = n(2),
        a = o.Buffer;a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? t.exports = o : (r(o, e), e.Buffer = i), r(a, i), i.from = function (t, e, n) {
      if ("number" == typeof t) throw new TypeError("Argument must not be a number");return a(t, e, n);
    }, i.alloc = function (t, e, n) {
      if ("number" != typeof t) throw new TypeError("Argument must be a number");var r = a(t);return void 0 !== e ? "string" == typeof n ? r.fill(e, n) : r.fill(e) : r.fill(0), r;
    }, i.allocUnsafe = function (t) {
      if ("number" != typeof t) throw new TypeError("Argument must be a number");return a(t);
    }, i.allocUnsafeSlow = function (t) {
      if ("number" != typeof t) throw new TypeError("Argument must be a number");return o.SlowBuffer(t);
    };
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;e.assign = function (t) {
      for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
        var n = e.shift();if (n) {
          if ("object" != (typeof n === "undefined" ? "undefined" : _typeof(n))) throw new TypeError(n + "must be non-object");for (var i in n) {
            r(n, i) && (t[i] = n[i]);
          }
        }
      }return t;
    }, e.shrinkBuf = function (t, e) {
      return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t);
    };var o = { arraySet: function arraySet(t, e, n, r, i) {
        if (e.subarray && t.subarray) return void t.set(e.subarray(n, n + r), i);for (var o = 0; o < r; o++) {
          t[i + o] = e[n + o];
        }
      }, flattenChunks: function flattenChunks(t) {
        var e, n, r, i, o, a;for (r = 0, e = 0, n = t.length; e < n; e++) {
          r += t[e].length;
        }for (a = new Uint8Array(r), i = 0, e = 0, n = t.length; e < n; e++) {
          o = t[e], a.set(o, i), i += o.length;
        }return a;
      } },
        a = { arraySet: function arraySet(t, e, n, r, i) {
        for (var o = 0; o < r; o++) {
          t[i + o] = e[n + o];
        }
      }, flattenChunks: function flattenChunks(t) {
        return [].concat.apply([], t);
      } };e.setTyped = function (t) {
      t ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, o)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, a));
    }, e.setTyped(i);
  }, function (t, e, n) {
    var r = n(7),
        i = n(8),
        o = n(76),
        a = n(10),
        s = function s(t, e, n) {
      var d,
          u,
          l,
          c = t & s.F,
          f = t & s.G,
          h = t & s.S,
          $ = t & s.P,
          p = t & s.B,
          _ = t & s.W,
          g = f ? i : i[e] || (i[e] = {}),
          m = g.prototype,
          v = f ? r : h ? r[e] : (r[e] || {}).prototype;f && (n = e);for (d in n) {
        (u = !c && v && void 0 !== v[d]) && d in g || (l = u ? v[d] : n[d], g[d] = f && "function" != typeof v[d] ? n[d] : p && u ? o(l, r) : _ && v[d] == l ? function (t) {
          var e = function e(_e, n, r) {
            if (this instanceof t) {
              switch (arguments.length) {case 0:
                  return new t();case 1:
                  return new t(_e);case 2:
                  return new t(_e, n);}return new t(_e, n, r);
            }return t.apply(this, arguments);
          };return e.prototype = t.prototype, e;
        }(l) : $ && "function" == typeof l ? o(Function.call, l) : l, $ && ((g.virtual || (g.virtual = {}))[d] = l, t & s.R && m && !m[d] && a(m, d, l)));
      }
    };s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s;
  }, function (t, e) {
    t.exports = function (t) {
      return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? null !== t : "function" == typeof t;
    };
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  }, function (t, e, n) {
    var r = n(41),
        i = n(29);t.exports = function (t) {
      return r(i(t));
    };
  }, function (t, e) {
    t.exports = function (t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);return t;
    };
  }, function (t, e) {
    var n = Math.ceil,
        r = Math.floor;t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
    };
  }, function (t, e, n) {
    var r = n(43)("keys"),
        i = n(44);t.exports = function (t) {
      return r[t] || (r[t] = i(t));
    };
  }, function (t, e) {
    function n() {
      this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
    }function r(t) {
      return "function" == typeof t;
    }function i(t) {
      return "number" == typeof t;
    }function o(t) {
      return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
    }function a(t) {
      return void 0 === t;
    }t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (t) {
      if (!i(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");return this._maxListeners = t, this;
    }, n.prototype.emit = function (t) {
      var e, n, i, s, d, u;if (this._events || (this._events = {}), "error" === t && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
        if ((e = arguments[1]) instanceof Error) throw e;var l = new Error('Uncaught, unspecified "error" event. (' + e + ")");throw l.context = e, l;
      }if (n = this._events[t], a(n)) return !1;if (r(n)) switch (arguments.length) {case 1:
          n.call(this);break;case 2:
          n.call(this, arguments[1]);break;case 3:
          n.call(this, arguments[1], arguments[2]);break;default:
          s = Array.prototype.slice.call(arguments, 1), n.apply(this, s);} else if (o(n)) for (s = Array.prototype.slice.call(arguments, 1), u = n.slice(), i = u.length, d = 0; d < i; d++) {
        u[d].apply(this, s);
      }return !0;
    }, n.prototype.addListener = function (t, e) {
      var i;if (!r(e)) throw TypeError("listener must be a function");return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e), this._events[t] ? o(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, o(this._events[t]) && !this._events[t].warned && (i = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && i > 0 && this._events[t].length > i && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this;
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (t, e) {
      function n() {
        this.removeListener(t, n), i || (i = !0, e.apply(this, arguments));
      }if (!r(e)) throw TypeError("listener must be a function");var i = !1;return n.listener = e, this.on(t, n), this;
    }, n.prototype.removeListener = function (t, e) {
      var n, i, a, s;if (!r(e)) throw TypeError("listener must be a function");if (!this._events || !this._events[t]) return this;if (n = this._events[t], a = n.length, i = -1, n === e || r(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);else if (o(n)) {
        for (s = a; s-- > 0;) {
          if (n[s] === e || n[s].listener && n[s].listener === e) {
            i = s;break;
          }
        }if (i < 0) return this;1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", t, e);
      }return this;
    }, n.prototype.removeAllListeners = function (t) {
      var e, n;if (!this._events) return this;if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;if (0 === arguments.length) {
        for (e in this._events) {
          "removeListener" !== e && this.removeAllListeners(e);
        }return this.removeAllListeners("removeListener"), this._events = {}, this;
      }if (n = this._events[t], r(n)) this.removeListener(t, n);else if (n) for (; n.length;) {
        this.removeListener(t, n[n.length - 1]);
      }return delete this._events[t], this;
    }, n.prototype.listeners = function (t) {
      return this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : [];
    }, n.prototype.listenerCount = function (t) {
      if (this._events) {
        var e = this._events[t];if (r(e)) return 1;if (e) return e.length;
      }return 0;
    }, n.listenerCount = function (t, e) {
      return t.listenerCount(e);
    };
  }, function (t, e, n) {
    "use strict";
    (function (e, r, i) {
      function o(t) {
        var e = this;this.next = null, this.entry = null, this.finish = function () {
          A(e, t);
        };
      }function a(t) {
        return I.from(t);
      }function s(t) {
        return I.isBuffer(t) || t instanceof N;
      }function d() {}function u(t, e) {
        R = R || n(5), t = t || {}, this.objectMode = !!t.objectMode, e instanceof R && (this.objectMode = this.objectMode || !!t.writableObjectMode);var r = t.highWaterMark,
            i = this.objectMode ? 16 : 16384;this.highWaterMark = r || 0 === r ? r : i, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;var a = !1 === t.decodeStrings;this.decodeStrings = !a, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (t) {
          m(e, t);
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new o(this);
      }function l(t) {
        if (R = R || n(5), !(B.call(l, this) || this instanceof R)) return new l(t);this._writableState = new u(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), C.call(this);
      }function c(t, e) {
        var n = new Error("write after end");t.emit("error", n), O(e, n);
      }function f(t, e, n, r) {
        var i = !0,
            o = !1;return null === n ? o = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || e.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")), o && (t.emit("error", o), O(r, o), i = !1), i;
      }function h(t, e, n) {
        return t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = I.from(e, n)), e;
      }function $(t, e, n, r, i, o) {
        if (!n) {
          var a = h(e, r, i);r !== a && (n = !0, i = "buffer", r = a);
        }var s = e.objectMode ? 1 : r.length;e.length += s;var d = e.length < e.highWaterMark;if (d || (e.needDrain = !0), e.writing || e.corked) {
          var u = e.lastBufferedRequest;e.lastBufferedRequest = { chunk: r, encoding: i, isBuf: n, callback: o, next: null }, u ? u.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1;
        } else p(t, e, !1, s, r, i, o);return d;
      }function p(t, e, n, r, i, o, a) {
        e.writelen = r, e.writecb = a, e.writing = !0, e.sync = !0, n ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), e.sync = !1;
      }function _(t, e, n, r, i) {
        --e.pendingcb, n ? (O(i, r), O(x, t, e), t._writableState.errorEmitted = !0, t.emit("error", r)) : (i(r), t._writableState.errorEmitted = !0, t.emit("error", r), x(t, e));
      }function g(t) {
        t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0;
      }function m(t, e) {
        var n = t._writableState,
            r = n.sync,
            i = n.writecb;if (g(n), e) _(t, n, r, e, i);else {
          var o = w(n);o || n.corked || n.bufferProcessing || !n.bufferedRequest || b(t, n), r ? T(v, t, n, o, i) : v(t, n, o, i);
        }
      }function v(t, e, n, r) {
        n || y(t, e), e.pendingcb--, r(), x(t, e);
      }function y(t, e) {
        0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"));
      }function b(t, e) {
        e.bufferProcessing = !0;var n = e.bufferedRequest;if (t._writev && n && n.next) {
          var r = e.bufferedRequestCount,
              i = new Array(r),
              a = e.corkedRequestsFree;a.entry = n;for (var s = 0, d = !0; n;) {
            i[s] = n, n.isBuf || (d = !1), n = n.next, s += 1;
          }i.allBuffers = d, p(t, e, !0, e.length, i, "", a.finish), e.pendingcb++, e.lastBufferedRequest = null, a.next ? (e.corkedRequestsFree = a.next, a.next = null) : e.corkedRequestsFree = new o(e);
        } else {
          for (; n;) {
            var u = n.chunk,
                l = n.encoding,
                c = n.callback;if (p(t, e, !1, e.objectMode ? 1 : u.length, u, l, c), n = n.next, e.writing) break;
          }null === n && (e.lastBufferedRequest = null);
        }e.bufferedRequestCount = 0, e.bufferedRequest = n, e.bufferProcessing = !1;
      }function w(t) {
        return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing;
      }function E(t, e) {
        t._final(function (n) {
          e.pendingcb--, n && t.emit("error", n), e.prefinished = !0, t.emit("prefinish"), x(t, e);
        });
      }function k(t, e) {
        e.prefinished || e.finalCalled || ("function" == typeof t._final ? (e.pendingcb++, e.finalCalled = !0, O(E, t, e)) : (e.prefinished = !0, t.emit("prefinish")));
      }function x(t, e) {
        var n = w(e);return n && (k(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"))), n;
      }function S(t, e, n) {
        e.ending = !0, x(t, e), n && (e.finished ? O(n) : t.once("finish", n)), e.ended = !0, t.writable = !1;
      }function A(t, e, n) {
        var r = t.entry;for (t.entry = null; r;) {
          var i = r.callback;e.pendingcb--, i(n), r = r.next;
        }e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t;
      }var O = n(22);t.exports = l;var R,
          T = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? r : O;l.WritableState = u;var L = n(14);L.inherits = n(3);var M = { deprecate: n(124) },
          C = n(58),
          I = n(23).Buffer,
          N = i.Uint8Array || function () {},
          j = n(59);L.inherits(l, C), u.prototype.getBuffer = function () {
        for (var t = this.bufferedRequest, e = []; t;) {
          e.push(t), t = t.next;
        }return e;
      }, function () {
        try {
          Object.defineProperty(u.prototype, "buffer", { get: M.deprecate(function () {
              return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
        } catch (t) {}
      }();var B;"function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (B = Function.prototype[Symbol.hasInstance], Object.defineProperty(l, Symbol.hasInstance, { value: function value(t) {
          return !!B.call(this, t) || t && t._writableState instanceof u;
        } })) : B = function B(t) {
        return t instanceof this;
      }, l.prototype.pipe = function () {
        this.emit("error", new Error("Cannot pipe, not readable"));
      }, l.prototype.write = function (t, e, n) {
        var r = this._writableState,
            i = !1,
            o = s(t) && !r.objectMode;return o && !I.isBuffer(t) && (t = a(t)), "function" == typeof e && (n = e, e = null), o ? e = "buffer" : e || (e = r.defaultEncoding), "function" != typeof n && (n = d), r.ended ? c(this, n) : (o || f(this, r, t, n)) && (r.pendingcb++, i = $(this, r, o, t, e, n)), i;
      }, l.prototype.cork = function () {
        this._writableState.corked++;
      }, l.prototype.uncork = function () {
        var t = this._writableState;t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || b(this, t));
      }, l.prototype.setDefaultEncoding = function (t) {
        if ("string" == typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);return this._writableState.defaultEncoding = t, this;
      }, l.prototype._write = function (t, e, n) {
        n(new Error("_write() is not implemented"));
      }, l.prototype._writev = null, l.prototype.end = function (t, e, n) {
        var r = this._writableState;"function" == typeof t ? (n = t, t = null, e = null) : "function" == typeof e && (n = e, e = null), null !== t && void 0 !== t && this.write(t, e), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || S(this, r, n);
      }, Object.defineProperty(l.prototype, "destroyed", { get: function get() {
          return void 0 !== this._writableState && this._writableState.destroyed;
        }, set: function set(t) {
          this._writableState && (this._writableState.destroyed = t);
        } }), l.prototype.destroy = j.destroy, l.prototype._undestroy = j.undestroy, l.prototype._destroy = function (t, e) {
        this.end(), e(t);
      };
    }).call(e, n(1), n(122).setImmediate, n(0));
  }, function (t, e, n) {
    "use strict";
    function r() {
      this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
    }function i(t, e, n) {
      if (t && u.isObject(t) && t instanceof r) return t;var i = new r();return i.parse(t, e, n), i;
    }function o(t) {
      return u.isString(t) && (t = i(t)), t instanceof r ? t.format() : r.prototype.format.call(t);
    }function a(t, e) {
      return i(t, !1, !0).resolve(e);
    }function s(t, e) {
      return t ? i(t, !1, !0).resolveObject(e) : e;
    }var d = n(129),
        u = n(131);e.parse = i, e.resolve = a, e.resolveObject = s, e.format = o, e.Url = r;var l = /^([a-z0-9.+-]+:)/i,
        c = /:[0-9]*$/,
        f = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        h = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
        $ = ["{", "}", "|", "\\", "^", "`"].concat(h),
        p = ["'"].concat($),
        _ = ["%", "/", "?", ";", "#"].concat(p),
        g = ["/", "?", "#"],
        m = /^[+a-z0-9A-Z_-]{0,63}$/,
        v = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        y = { javascript: !0, "javascript:": !0 },
        b = { javascript: !0, "javascript:": !0 },
        w = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
        E = n(62);r.prototype.parse = function (t, e, n) {
      if (!u.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));var r = t.indexOf("?"),
          i = -1 !== r && r < t.indexOf("#") ? "?" : "#",
          o = t.split(i),
          a = /\\/g;o[0] = o[0].replace(a, "/"), t = o.join(i);var s = t;if (s = s.trim(), !n && 1 === t.split("#").length) {
        var c = f.exec(s);if (c) return this.path = s, this.href = s, this.pathname = c[1], c[2] ? (this.search = c[2], this.query = e ? E.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
      }var h = l.exec(s);if (h) {
        h = h[0];var $ = h.toLowerCase();this.protocol = $, s = s.substr(h.length);
      }if (n || h || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var k = "//" === s.substr(0, 2);!k || h && b[h] || (s = s.substr(2), this.slashes = !0);
      }if (!b[h] && (k || h && !w[h])) {
        for (var x = -1, S = 0; S < g.length; S++) {
          var A = s.indexOf(g[S]);-1 !== A && (-1 === x || A < x) && (x = A);
        }var O, R;R = -1 === x ? s.lastIndexOf("@") : s.lastIndexOf("@", x), -1 !== R && (O = s.slice(0, R), s = s.slice(R + 1), this.auth = decodeURIComponent(O)), x = -1;for (var S = 0; S < _.length; S++) {
          var A = s.indexOf(_[S]);-1 !== A && (-1 === x || A < x) && (x = A);
        }-1 === x && (x = s.length), this.host = s.slice(0, x), s = s.slice(x), this.parseHost(), this.hostname = this.hostname || "";var T = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];if (!T) for (var L = this.hostname.split(/\./), S = 0, M = L.length; S < M; S++) {
          var C = L[S];if (C && !C.match(m)) {
            for (var I = "", N = 0, j = C.length; N < j; N++) {
              C.charCodeAt(N) > 127 ? I += "x" : I += C[N];
            }if (!I.match(m)) {
              var B = L.slice(0, S),
                  P = L.slice(S + 1),
                  U = C.match(v);U && (B.push(U[1]), P.unshift(U[2])), P.length && (s = "/" + P.join(".") + s), this.hostname = B.join(".");break;
            }
          }
        }this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), T || (this.hostname = d.toASCII(this.hostname));var z = this.port ? ":" + this.port : "",
            D = this.hostname || "";this.host = D + z, this.href += this.host, T && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== s[0] && (s = "/" + s));
      }if (!y[$]) for (var S = 0, M = p.length; S < M; S++) {
        var F = p[S];if (-1 !== s.indexOf(F)) {
          var Z = encodeURIComponent(F);Z === F && (Z = escape(F)), s = s.split(F).join(Z);
        }
      }var G = s.indexOf("#");-1 !== G && (this.hash = s.substr(G), s = s.slice(0, G));var q = s.indexOf("?");if (-1 !== q ? (this.search = s.substr(q), this.query = s.substr(q + 1), e && (this.query = E.parse(this.query)), s = s.slice(0, q)) : e && (this.search = "", this.query = {}), s && (this.pathname = s), w[$] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
        var z = this.pathname || "",
            H = this.search || "";this.path = z + H;
      }return this.href = this.format(), this;
    }, r.prototype.format = function () {
      var t = this.auth || "";t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");var e = this.protocol || "",
          n = this.pathname || "",
          r = this.hash || "",
          i = !1,
          o = "";this.host ? i = t + this.host : this.hostname && (i = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && u.isObject(this.query) && Object.keys(this.query).length && (o = E.stringify(this.query));var a = this.search || o && "?" + o || "";return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || w[e]) && !1 !== i ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), a && "?" !== a.charAt(0) && (a = "?" + a), n = n.replace(/[?#]/g, function (t) {
        return encodeURIComponent(t);
      }), a = a.replace("#", "%23"), e + i + n + a + r;
    }, r.prototype.resolve = function (t) {
      return this.resolveObject(i(t, !1, !0)).format();
    }, r.prototype.resolveObject = function (t) {
      if (u.isString(t)) {
        var e = new r();e.parse(t, !1, !0), t = e;
      }for (var n = new r(), i = Object.keys(this), o = 0; o < i.length; o++) {
        var a = i[o];n[a] = this[a];
      }if (n.hash = t.hash, "" === t.href) return n.href = n.format(), n;if (t.slashes && !t.protocol) {
        for (var s = Object.keys(t), d = 0; d < s.length; d++) {
          var l = s[d];"protocol" !== l && (n[l] = t[l]);
        }return w[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
      }if (t.protocol && t.protocol !== n.protocol) {
        if (!w[t.protocol]) {
          for (var c = Object.keys(t), f = 0; f < c.length; f++) {
            var h = c[f];n[h] = t[h];
          }return n.href = n.format(), n;
        }if (n.protocol = t.protocol, t.host || b[t.protocol]) n.pathname = t.pathname;else {
          for (var $ = (t.pathname || "").split("/"); $.length && !(t.host = $.shift());) {}t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== $[0] && $.unshift(""), $.length < 2 && $.unshift(""), n.pathname = $.join("/");
        }if (n.search = t.search, n.query = t.query, n.host = t.host || "", n.auth = t.auth, n.hostname = t.hostname || t.host, n.port = t.port, n.pathname || n.search) {
          var p = n.pathname || "",
              _ = n.search || "";n.path = p + _;
        }return n.slashes = n.slashes || t.slashes, n.href = n.format(), n;
      }var g = n.pathname && "/" === n.pathname.charAt(0),
          m = t.host || t.pathname && "/" === t.pathname.charAt(0),
          v = m || g || n.host && t.pathname,
          y = v,
          E = n.pathname && n.pathname.split("/") || [],
          $ = t.pathname && t.pathname.split("/") || [],
          k = n.protocol && !w[n.protocol];if (k && (n.hostname = "", n.port = null, n.host && ("" === E[0] ? E[0] = n.host : E.unshift(n.host)), n.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === $[0] ? $[0] = t.host : $.unshift(t.host)), t.host = null), v = v && ("" === $[0] || "" === E[0])), m) n.host = t.host || "" === t.host ? t.host : n.host, n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname, n.search = t.search, n.query = t.query, E = $;else if ($.length) E || (E = []), E.pop(), E = E.concat($), n.search = t.search, n.query = t.query;else if (!u.isNullOrUndefined(t.search)) {
        if (k) {
          n.hostname = n.host = E.shift();var x = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");x && (n.auth = x.shift(), n.host = n.hostname = x.shift());
        }return n.search = t.search, n.query = t.query, u.isNull(n.pathname) && u.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
      }if (!E.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;for (var S = E.slice(-1)[0], A = (n.host || t.host || E.length > 1) && ("." === S || ".." === S) || "" === S, O = 0, R = E.length; R >= 0; R--) {
        S = E[R], "." === S ? E.splice(R, 1) : ".." === S ? (E.splice(R, 1), O++) : O && (E.splice(R, 1), O--);
      }if (!v && !y) for (; O--; O) {
        E.unshift("..");
      }!v || "" === E[0] || E[0] && "/" === E[0].charAt(0) || E.unshift(""), A && "/" !== E.join("/").substr(-1) && E.push("");var T = "" === E[0] || E[0] && "/" === E[0].charAt(0);if (k) {
        n.hostname = n.host = T ? "" : E.length ? E.shift() : "";var x = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");x && (n.auth = x.shift(), n.host = n.hostname = x.shift());
      }return v = v || n.host && E.length, v && !T && E.unshift(""), E.length ? n.pathname = E.join("/") : (n.pathname = null, n.path = null), u.isNull(n.pathname) && u.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = t.auth || n.auth, n.slashes = n.slashes || t.slashes, n.href = n.format(), n;
    }, r.prototype.parseHost = function () {
      var t = this.host,
          e = c.exec(t);e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
    };
  }, function (t, e, n) {
    (function (t, r) {
      function i(t, n) {
        var r = { seen: [], stylize: a };return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), p(n) ? r.showHidden = n : n && e._extend(r, n), b(r.showHidden) && (r.showHidden = !1), b(r.depth) && (r.depth = 2), b(r.colors) && (r.colors = !1), b(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = o), d(r, t, r.depth);
      }function o(t, e) {
        var n = i.styles[e];return n ? "[" + i.colors[n][0] + "m" + t + "[" + i.colors[n][1] + "m" : t;
      }function a(t, e) {
        return t;
      }function s(t) {
        var e = {};return t.forEach(function (t, n) {
          e[t] = !0;
        }), e;
      }function d(t, n, r) {
        if (t.customInspect && n && S(n.inspect) && n.inspect !== e.inspect && (!n.constructor || n.constructor.prototype !== n)) {
          var i = n.inspect(r, t);return v(i) || (i = d(t, i, r)), i;
        }var o = u(t, n);if (o) return o;var a = Object.keys(n),
            p = s(a);if (t.showHidden && (a = Object.getOwnPropertyNames(n)), x(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return l(n);if (0 === a.length) {
          if (S(n)) {
            var _ = n.name ? ": " + n.name : "";return t.stylize("[Function" + _ + "]", "special");
          }if (w(n)) return t.stylize(RegExp.prototype.toString.call(n), "regexp");if (k(n)) return t.stylize(Date.prototype.toString.call(n), "date");if (x(n)) return l(n);
        }var g = "",
            m = !1,
            y = ["{", "}"];if ($(n) && (m = !0, y = ["[", "]"]), S(n)) {
          g = " [Function" + (n.name ? ": " + n.name : "") + "]";
        }if (w(n) && (g = " " + RegExp.prototype.toString.call(n)), k(n) && (g = " " + Date.prototype.toUTCString.call(n)), x(n) && (g = " " + l(n)), 0 === a.length && (!m || 0 == n.length)) return y[0] + g + y[1];if (r < 0) return w(n) ? t.stylize(RegExp.prototype.toString.call(n), "regexp") : t.stylize("[Object]", "special");t.seen.push(n);var b;return b = m ? c(t, n, r, p, a) : a.map(function (e) {
          return f(t, n, r, p, e, m);
        }), t.seen.pop(), h(b, g, y);
      }function u(t, e) {
        if (b(e)) return t.stylize("undefined", "undefined");if (v(e)) {
          var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";return t.stylize(n, "string");
        }return m(e) ? t.stylize("" + e, "number") : p(e) ? t.stylize("" + e, "boolean") : _(e) ? t.stylize("null", "null") : void 0;
      }function l(t) {
        return "[" + Error.prototype.toString.call(t) + "]";
      }function c(t, e, n, r, i) {
        for (var o = [], a = 0, s = e.length; a < s; ++a) {
          L(e, String(a)) ? o.push(f(t, e, n, r, String(a), !0)) : o.push("");
        }return i.forEach(function (i) {
          i.match(/^\d+$/) || o.push(f(t, e, n, r, i, !0));
        }), o;
      }function f(t, e, n, r, i, o) {
        var a, s, u;if (u = Object.getOwnPropertyDescriptor(e, i) || { value: e[i] }, u.get ? s = u.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : u.set && (s = t.stylize("[Setter]", "special")), L(r, i) || (a = "[" + i + "]"), s || (t.seen.indexOf(u.value) < 0 ? (s = _(n) ? d(t, u.value, null) : d(t, u.value, n - 1), s.indexOf("\n") > -1 && (s = o ? s.split("\n").map(function (t) {
          return "  " + t;
        }).join("\n").substr(2) : "\n" + s.split("\n").map(function (t) {
          return "   " + t;
        }).join("\n"))) : s = t.stylize("[Circular]", "special")), b(a)) {
          if (o && i.match(/^\d+$/)) return s;a = JSON.stringify("" + i), a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = t.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = t.stylize(a, "string"));
        }return a + ": " + s;
      }function h(t, e, n) {
        var r = 0;return t.reduce(function (t, e) {
          return r++, e.indexOf("\n") >= 0 && r++, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0) > 60 ? n[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + n[1] : n[0] + e + " " + t.join(", ") + " " + n[1];
      }function $(t) {
        return Array.isArray(t);
      }function p(t) {
        return "boolean" == typeof t;
      }function _(t) {
        return null === t;
      }function g(t) {
        return null == t;
      }function m(t) {
        return "number" == typeof t;
      }function v(t) {
        return "string" == typeof t;
      }function y(t) {
        return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t));
      }function b(t) {
        return void 0 === t;
      }function w(t) {
        return E(t) && "[object RegExp]" === O(t);
      }function E(t) {
        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
      }function k(t) {
        return E(t) && "[object Date]" === O(t);
      }function x(t) {
        return E(t) && ("[object Error]" === O(t) || t instanceof Error);
      }function S(t) {
        return "function" == typeof t;
      }function A(t) {
        return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || void 0 === t;
      }function O(t) {
        return Object.prototype.toString.call(t);
      }function R(t) {
        return t < 10 ? "0" + t.toString(10) : t.toString(10);
      }function T() {
        var t = new Date(),
            e = [R(t.getHours()), R(t.getMinutes()), R(t.getSeconds())].join(":");return [t.getDate(), N[t.getMonth()], e].join(" ");
      }function L(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }var M = /%[sdj%]/g;e.format = function (t) {
        if (!v(t)) {
          for (var e = [], n = 0; n < arguments.length; n++) {
            e.push(i(arguments[n]));
          }return e.join(" ");
        }for (var n = 1, r = arguments, o = r.length, a = String(t).replace(M, function (t) {
          if ("%%" === t) return "%";if (n >= o) return t;switch (t) {case "%s":
              return String(r[n++]);case "%d":
              return Number(r[n++]);case "%j":
              try {
                return JSON.stringify(r[n++]);
              } catch (t) {
                return "[Circular]";
              }default:
              return t;}
        }), s = r[n]; n < o; s = r[++n]) {
          _(s) || !E(s) ? a += " " + s : a += " " + i(s);
        }return a;
      }, e.deprecate = function (n, i) {
        function o() {
          if (!a) {
            if (r.throwDeprecation) throw new Error(i);r.traceDeprecation ? console.trace(i) : console.error(i), a = !0;
          }return n.apply(this, arguments);
        }if (b(t.process)) return function () {
          return e.deprecate(n, i).apply(this, arguments);
        };if (!0 === r.noDeprecation) return n;var a = !1;return o;
      };var C,
          I = {};e.debuglog = function (t) {
        if (b(C) && (C = r.env.NODE_DEBUG || ""), t = t.toUpperCase(), !I[t]) if (new RegExp("\\b" + t + "\\b", "i").test(C)) {
          var n = r.pid;I[t] = function () {
            var r = e.format.apply(e, arguments);console.error("%s %d: %s", t, n, r);
          };
        } else I[t] = function () {};return I[t];
      }, e.inspect = i, i.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, i.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, e.isArray = $, e.isBoolean = p, e.isNull = _, e.isNullOrUndefined = g, e.isNumber = m, e.isString = v, e.isSymbol = y, e.isUndefined = b, e.isRegExp = w, e.isObject = E, e.isDate = k, e.isError = x, e.isFunction = S, e.isPrimitive = A, e.isBuffer = n(142);var N = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];e.log = function () {
        console.log("%s - %s", T(), e.format.apply(e, arguments));
      }, e.inherits = n(3), e._extend = function (t, e) {
        if (!e || !E(e)) return t;for (var n = Object.keys(e), r = n.length; r--;) {
          t[n[r]] = e[n[r]];
        }return t;
      };
    }).call(e, n(0), n(1));
  }, function (t, e, n) {
    "use strict";
    var r = n(71),
        i = n(110),
        o = n(111);e.a = { name: "vue-tel-input", props: { value: { type: String } }, mounted: function mounted() {
        var t = this;Object(o.a)().then(function (e) {
          t.activeCountry = i.a.find(function (t) {
            return t.iso2 === e;
          }) || i.a[0];
        });
      }, created: function created() {
        this.value && (this.phone = this.value);
      }, data: function data() {
        return { phone: "", allCountries: i.a, activeCountry: { iso2: "" }, open: !1 };
      }, computed: { mode: function mode() {
          return this.phone ? "+" === this.phone[0] ? "code" : "0" === this.phone[0] ? "prefix" : "normal" : "";
        }, formattedResult: function formattedResult() {
          if (!this.mode || !this.allCountries) return "";var t = this.phone;if ("code" === this.mode) {
            var e = new r.a();e.input(this.phone), this.activeCountry = this.allCountries.find(function (t) {
              return t.iso2.toUpperCase() === e.country;
            }) || this.activeCountry;
          } else "prefix" === this.mode && (t = this.phone.slice(1));return Object(r.b)(t, this.activeCountry && this.activeCountry.iso2, "International");
        }, state: function state() {
          return Object(r.c)(this.formattedResult);
        }, response: function response() {
          return { number: this.formattedResult && this.formattedResult.replace(/ /g, ""), isValid: this.state, country: this.activeCountry.name };
        } }, watch: { state: function state(t) {
          t && "prefix" !== this.mode && (this.phone = this.formattedResult);
        } }, methods: { choose: function choose(t) {
          this.activeCountry = t, this.$emit("onInput", this.response);
        }, format: function format(t) {
          return new r.a(this.activeCountry.iso2).input(t);
        }, onInput: function onInput() {
          this.$emit("input", this.response.number), this.$emit("onInput", this.response);
        }, toggleDropdown: function toggleDropdown() {
          this.open = !this.open;
        }, clickedOutside: function clickedOutside() {
          this.open = !1;
        } }, directives: { "click-outside": { bind: function bind(t, e, n) {
            if ("function" != typeof e.value) {
              var r = n.context.name,
                  i = "[Vue-click-outside:] provided expression " + e.expression + " is not a function, but has to be";r && (i += "Found in component " + r), console.warn(i);
            }var o = e.modifiers.bubble,
                a = function a(n) {
              (o || !t.contains(n.target) && t !== n.target) && e.value(n);
            };t.__vueClickOutside__ = a, document.addEventListener("click", a);
          }, unbind: function unbind(t, e) {
            document.removeEventListener("click", t.__vueClickOutside__), t.__vueClickOutside__ = null;
          } } } };
  }, function (t, e, n) {
    "use strict";
    e.__esModule = !0;var r = n(73),
        i = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(r);e.default = i.default || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }return t;
    };
  }, function (t, e, n) {
    var r = n(26),
        i = n(7).document,
        o = r(i) && r(i.createElement);t.exports = function (t) {
      return o ? i.createElement(t) : {};
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
    };
  }, function (t, e, n) {
    var r = n(81),
        i = n(45);t.exports = Object.keys || function (t) {
      return r(t, i);
    };
  }, function (t, e, n) {
    var r = n(42);t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == r(t) ? t.split("") : Object(t);
    };
  }, function (t, e) {
    var n = {}.toString;t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  }, function (t, e, n) {
    var r = n(7),
        i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});t.exports = function (t) {
      return i[t] || (i[t] = {});
    };
  }, function (t, e) {
    var n = 0,
        r = Math.random();t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
    };
  }, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function (t, e, n) {
    var r = n(29);t.exports = function (t) {
      return Object(r(t));
    };
  }, function (t, e, n) {
    n(90);for (var r = n(7), i = n(10), o = n(12), a = n(4)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), d = 0; d < s.length; d++) {
      var u = s[d],
          l = r[u],
          c = l && l.prototype;c && !c[a] && i(c, a, u), o[u] = o.Array;
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(93),
        i = n(25),
        o = n(94),
        a = n(10),
        s = n(17),
        d = n(12),
        u = n(95),
        l = n(49),
        c = n(99),
        f = n(4)("iterator"),
        h = !([].keys && "next" in [].keys()),
        $ = function $() {
      return this;
    };t.exports = function (t, e, n, p, _, g, m) {
      u(n, e, p);var v,
          y,
          b,
          w = function w(t) {
        if (!h && t in S) return S[t];switch (t) {case "keys":case "values":
            return function () {
              return new n(this, t);
            };}return function () {
          return new n(this, t);
        };
      },
          E = e + " Iterator",
          k = "values" == _,
          x = !1,
          S = t.prototype,
          A = S[f] || S["@@iterator"] || _ && S[_],
          O = !h && A || w(_),
          R = _ ? k ? w("entries") : O : void 0,
          T = "Array" == e ? S.entries || A : A;if (T && (b = c(T.call(new t()))) !== Object.prototype && b.next && (l(b, E, !0), r || s(b, f) || a(b, f, $)), k && A && "values" !== A.name && (x = !0, O = function O() {
        return A.call(this);
      }), r && !m || !h && !x && S[f] || a(S, f, O), d[e] = O, d[E] = $, _) if (v = { values: k ? O : w("values"), keys: g ? O : w("keys"), entries: R }, m) for (y in v) {
        y in S || o(S, y, v[y]);
      } else i(i.P + i.F * (h || x), e, v);return v;
    };
  }, function (t, e, n) {
    var r = n(15).f,
        i = n(17),
        o = n(4)("toStringTag");t.exports = function (t, e, n) {
      t && !i(t = n ? t : t.prototype, o) && r(t, o, { configurable: !0, value: e });
    };
  }, function (t, e, n) {
    "use strict";
    var r = n(100)(!0);n(48)(String, "String", function (t) {
      this._t = String(t), this._i = 0;
    }, function () {
      var t,
          e = this._t,
          n = this._i;return n >= e.length ? { value: void 0, done: !0 } : (t = r(e, n), this._i += t.length, { value: t, done: !1 });
    });
  }, function (t, e, n) {
    var r = n(42),
        i = n(4)("toStringTag"),
        o = "Arguments" == r(function () {
      return arguments;
    }()),
        a = function a(t, e) {
      try {
        return t[e];
      } catch (t) {}
    };t.exports = function (t) {
      var e, n, s;return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = a(e = Object(t), i)) ? n : o ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments" : s;
    };
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n) {
      var r = Object(i.b)(t, e, n),
          a = r.input,
          s = r.metadata;if (!a) return !1;if (!a.country) return !1;var d = s.countries[a.country];return !(Object(o.z)(d) && !Object(i.a)(a, s));
    }e.a = r;var i = (n(6), n(21)),
        o = n(9);
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      for (var n = t.slice(0, e), r = i("(", n), o = i(")", n), a = r - o; a > 0 && e < t.length;) {
        ")" === t[e] && a--, e++;
      }return t.slice(0, e);
    }function i(t, e) {
      var n = 0,
          r = !0,
          i = !1,
          o = void 0;try {
        for (var a, d = s()(e); !(r = (a = d.next()).done); r = !0) {
          a.value === t && n++;
        }
      } catch (t) {
        i = !0, o = t;
      } finally {
        try {
          !r && d.return && d.return();
        } finally {
          if (i) throw o;
        }
      }return n;
    }function o(t, e) {
      if (e < 1) return "";for (var n = ""; e > 1;) {
        1 & e && (n += t), e >>= 1, t += t;
      }return n + t;
    }var a = n(18),
        s = n.n(a),
        d = n(105),
        u = n.n(d),
        l = n(106),
        c = n.n(l),
        f = n(9),
        h = n(6),
        $ = n(20),
        p = n(19),
        _ = new RegExp("9", "g"),
        g = o("9", 15),
        m = new RegExp("x"),
        v = new RegExp("x", "g"),
        y = /\[([^\[\]])*\]/g,
        b = /\d(?=[^,}][^,}])/g,
        w = new RegExp("^[" + h.c + "]*(\\$\\d[" + h.c + "]*)+$"),
        E = "[" + h.a + "]{0,1}[" + h.c + h.b + "]*",
        k = new RegExp("^" + E + "$", "i"),
        x = function () {
      function t(e, n) {
        if (u()(this, t), !n || !n.countries) throw new Error("Metadata is required");e && n.countries[e] && (this.default_country = e), this.metadata = n, this.reset();
      }return c()(t, [{ key: "input", value: function value(t) {
          var e = Object(h.e)(t);return e || t && t.indexOf("+") >= 0 && (e = "+"), Object(p.a)(e, k) ? this.process_input(Object(h.h)(e)) : this.current_output;
        } }, { key: "process_input", value: function value(t) {
          if ("+" === t[0] && (this.parsed_input || (this.parsed_input += "+", this.reset_countriness()), t = t.slice(1)), this.parsed_input += t, this.national_number += t, this.is_international()) {
            if (this.country_phone_code) this.country || this.determine_the_country();else {
              if (!this.extract_country_phone_code()) return this.parsed_input;this.initialize_phone_number_formats_for_this_country_phone_code(), this.reset_format(), this.determine_the_country();
            }
          } else {
            var e = this.national_prefix;this.national_number = this.national_prefix + this.national_number, this.extract_national_prefix(), this.national_prefix !== e && (this.matching_formats = this.available_formats, this.reset_format());
          }if (!this.should_format()) return this.format_as_non_formatted_number();this.match_formats_by_leading_digits();var n = this.format_national_phone_number(t);return n ? this.full_phone_number(n) : this.parsed_input;
        } }, { key: "format_as_non_formatted_number", value: function value() {
          return this.is_international() && this.country_phone_code ? this.national_number ? (this.template = "x" + o("x", this.country_phone_code.length) + " " + o("x", this.national_number.length), "+" + this.country_phone_code + " " + this.national_number) : "+" + this.country_phone_code : this.parsed_input;
        } }, { key: "format_national_phone_number", value: function value(t) {
          var e = void 0;this.chosen_format && (e = this.format_next_national_number_digits(t));var n = this.attempt_to_format_complete_phone_number();return n || (this.choose_another_format() ? this.reformat_national_number() : e);
        } }, { key: "reset", value: function value() {
          return this.parsed_input = "", this.current_output = "", this.national_prefix = "", this.national_number = "", this.reset_countriness(), this.reset_format(), this;
        } }, { key: "reset_country", value: function value() {
          this.default_country && !this.is_international() ? this.country = this.default_country : this.country = void 0;
        } }, { key: "reset_countriness", value: function value() {
          this.reset_country(), this.default_country && !this.is_international() ? (this.country_metadata = this.metadata.countries[this.default_country], this.country_phone_code = Object(f.o)(this.country_metadata), this.initialize_phone_number_formats_for_this_country_phone_code()) : (this.country_metadata = void 0, this.country_phone_code = void 0, this.available_formats = [], this.matching_formats = this.available_formats);
        } }, { key: "reset_format", value: function value() {
          this.chosen_format = void 0, this.template = void 0, this.partially_populated_template = void 0, this.last_match_position = -1;
        } }, { key: "reformat_national_number", value: function value() {
          return this.format_next_national_number_digits(this.national_number);
        } }, { key: "initialize_phone_number_formats_for_this_country_phone_code", value: function value() {
          this.available_formats = Object(f.i)(this.country_metadata).filter(function (t) {
            return w.test(Object(f.b)(t));
          }), this.matching_formats = this.available_formats;
        } }, { key: "match_formats_by_leading_digits", value: function value() {
          var t = this.national_number,
              e = t.length - 3;e < 0 && (e = 0), this.matching_formats = this.matching_formats.filter(function (n) {
            var r = Object(f.c)(n).length;if (0 === r) return !0;var i = Math.min(e, r - 1),
                o = Object(f.c)(n)[i];return new RegExp("^(" + o + ")").test(t);
          }), this.chosen_format && -1 === this.matching_formats.indexOf(this.chosen_format) && this.reset_format();
        } }, { key: "should_format", value: function value() {
          return this.national_number >= 3;
        } }, { key: "attempt_to_format_complete_phone_number", value: function value() {
          var t = !0,
              e = !1,
              n = void 0;try {
            for (var r, i = s()(this.matching_formats); !(t = (r = i.next()).done); t = !0) {
              var o = r.value;if (new RegExp("^(?:" + Object(f.g)(o) + ")$").test(this.national_number) && this.validate_format(o)) {
                this.reset_format(), this.chosen_format = o;var a = Object($.c)(this.national_number, o, this.is_international(), this.national_prefix.length > 0, this.country_metadata);if (this.create_formatting_template(o)) this.reformat_national_number();else {
                  var d = this.full_phone_number(a);this.template = d.replace(/[\d\+]/g, "x"), this.partially_populated_template = d;
                }return a;
              }
            }
          } catch (t) {
            e = !0, n = t;
          } finally {
            try {
              !t && i.return && i.return();
            } finally {
              if (e) throw n;
            }
          }
        } }, { key: "full_phone_number", value: function value(t) {
          return this.is_international() ? "+" + this.country_phone_code + " " + t : t;
        } }, { key: "extract_country_phone_code", value: function value() {
          if (this.national_number) {
            var t = Object(h.i)(this.parsed_input, this.metadata),
                e = t.country_phone_code,
                n = t.number;if (e) return this.country_phone_code = e, this.national_number = n, this.country_metadata = Object(f.k)(e, this.metadata);
          }
        } }, { key: "extract_national_prefix", value: function value() {
          if (this.national_prefix = "", this.country_metadata) {
            var t = Object(h.j)(this.national_number, this.country_metadata);return t !== this.national_number && (this.national_prefix = this.national_number.slice(0, this.national_number.length - t.length), this.national_number = t), this.national_prefix;
          }
        } }, { key: "choose_another_format", value: function value() {
          var t = !0,
              e = !1,
              n = void 0;try {
            for (var r, i = s()(this.matching_formats); !(t = (r = i.next()).done); t = !0) {
              var o = r.value;if (this.chosen_format === o) return;if (this.validate_format(o) && this.create_formatting_template(o)) return this.chosen_format = o, this.last_match_position = -1, !0;
            }
          } catch (t) {
            e = !0, n = t;
          } finally {
            try {
              !t && i.return && i.return();
            } finally {
              if (e) throw n;
            }
          }this.reset_country(), this.reset_format();
        } }, { key: "validate_format", value: function value(t) {
          if (this.is_international() || this.national_prefix || !Object(f.e)(t, this.country_metadata)) return !0;
        } }, { key: "create_formatting_template", value: function value(t) {
          if (!(Object(f.g)(t).indexOf("|") >= 0)) {
            var e = this.get_template_for_phone_number_format_pattern(t);if (e) return this.partially_populated_template = e, this.is_international() ? this.template = "x" + o("x", this.country_phone_code.length) + " " + e : this.template = e.replace(/\d/g, "x"), this.template;
          }
        } }, { key: "get_template_for_phone_number_format_pattern", value: function value(t) {
          var e = Object(f.d)(t, this.country_metadata),
              n = Object(f.g)(t).replace(y, "\\d").replace(b, "\\d"),
              r = g.match(n)[0];if (!(this.national_number.length > r.length)) {
            var i = this.get_format_format(t, e),
                o = new RegExp("^" + n + "$"),
                a = this.national_number.replace(/\d/g, "9");return o.test(a) && (r = a), r.replace(new RegExp(n), i).replace(_, "x");
          }
        } }, { key: "format_next_national_number_digits", value: function value(t) {
          var e = !0,
              n = !1,
              i = void 0;try {
            for (var o, a = s()(t); !(e = (o = a.next()).done); e = !0) {
              var d = o.value;if (-1 === this.partially_populated_template.slice(this.last_match_position + 1).search(m)) return this.chosen_format = void 0, this.template = void 0, void (this.partially_populated_template = void 0);this.last_match_position = this.partially_populated_template.search(m), this.partially_populated_template = this.partially_populated_template.replace(m, d);
            }
          } catch (t) {
            n = !0, i = t;
          } finally {
            try {
              !e && a.return && a.return();
            } finally {
              if (n) throw i;
            }
          }return r(this.partially_populated_template, this.last_match_position + 1).replace(v, " ");
        } }, { key: "is_international", value: function value() {
          return this.parsed_input && "+" === this.parsed_input[0];
        } }, { key: "get_format_format", value: function value(t, e) {
          var n = this.is_international() ? Object(f.b)(t) : Object(f.a)(t);return e && (!this.national_prefix && Object(f.h)(e) || (n = n.replace($.a, e))), this.is_international() ? Object($.d)(n) : n;
        } }, { key: "determine_the_country", value: function value() {
          this.country = Object(h.f)(this.country_phone_code, this.national_number, this.metadata);
        } }]), t;
    }();e.a = x;
  }, function (t, e) {
    var n = {}.toString;t.exports = Array.isArray || function (t) {
      return "[object Array]" == n.call(t);
    };
  }, function (t, e, n) {
    (function (t) {
      var r = n(118),
          i = n(127),
          o = n(128),
          a = n(34),
          s = e;s.request = function (e, n) {
        e = "string" == typeof e ? a.parse(e) : i(e);var o = -1 === t.location.protocol.search(/^https?:$/) ? "http:" : "",
            s = e.protocol || o,
            d = e.hostname || e.host,
            u = e.port,
            l = e.path || "/";d && -1 !== d.indexOf(":") && (d = "[" + d + "]"), e.url = (d ? s + "//" + d : "") + (u ? ":" + u : "") + l, e.method = (e.method || "GET").toUpperCase(), e.headers = e.headers || {};var c = new r(e);return n && c.on("response", n), c;
      }, s.get = function (t, e) {
        var n = s.request(t, e);return n.end(), n;
      }, s.Agent = function () {}, s.Agent.defaultMaxSockets = 4, s.STATUS_CODES = o, s.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"];
    }).call(e, n(0));
  }, function (t, e, n) {
    (function (t) {
      function n() {
        if (void 0 !== o) return o;if (t.XMLHttpRequest) {
          o = new t.XMLHttpRequest();try {
            o.open("GET", t.XDomainRequest ? "/" : "https://example.com");
          } catch (t) {
            o = null;
          }
        } else o = null;return o;
      }function r(t) {
        var e = n();if (!e) return !1;try {
          return e.responseType = t, e.responseType === t;
        } catch (t) {}return !1;
      }function i(t) {
        return "function" == typeof t;
      }e.fetch = i(t.fetch) && i(t.ReadableStream), e.blobConstructor = !1;try {
        new Blob([new ArrayBuffer(1)]), e.blobConstructor = !0;
      } catch (t) {}var o,
          a = void 0 !== t.ArrayBuffer,
          s = a && i(t.ArrayBuffer.prototype.slice);e.arraybuffer = e.fetch || a && r("arraybuffer"), e.msstream = !e.fetch && s && r("ms-stream"), e.mozchunkedarraybuffer = !e.fetch && a && r("moz-chunked-arraybuffer"), e.overrideMimeType = e.fetch || !!n() && i(n().overrideMimeType), e.vbArray = i(t.VBArray), o = null;
    }).call(e, n(0));
  }, function (t, e, n) {
    "use strict";
    (function (e, r) {
      function i(t) {
        return B.from(t);
      }function o(t) {
        return B.isBuffer(t) || t instanceof P;
      }function a(t, e, n) {
        if ("function" == typeof t.prependListener) return t.prependListener(e, n);t._events && t._events[e] ? I(t._events[e]) ? t._events[e].unshift(n) : t._events[e] = [n, t._events[e]] : t.on(e, n);
      }function s(t, e) {
        C = C || n(5), t = t || {}, this.objectMode = !!t.objectMode, e instanceof C && (this.objectMode = this.objectMode || !!t.readableObjectMode);var r = t.highWaterMark,
            i = this.objectMode ? 16 : 16384;this.highWaterMark = r || 0 === r ? r : i, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new Z(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (F || (F = n(60).StringDecoder), this.decoder = new F(t.encoding), this.encoding = t.encoding);
      }function d(t) {
        if (C = C || n(5), !(this instanceof d)) return new d(t);this._readableState = new s(t, this), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), j.call(this);
      }function u(t, e, n, r, o) {
        var a = t._readableState;if (null === e) a.reading = !1, p(t, a);else {
          var s;o || (s = c(a, e)), s ? t.emit("error", s) : a.objectMode || e && e.length > 0 ? ("string" == typeof e || a.objectMode || Object.getPrototypeOf(e) === B.prototype || (e = i(e)), r ? a.endEmitted ? t.emit("error", new Error("stream.unshift() after end event")) : l(t, a, e, !0) : a.ended ? t.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, a.decoder && !n ? (e = a.decoder.write(e), a.objectMode || 0 !== e.length ? l(t, a, e, !1) : m(t, a)) : l(t, a, e, !1))) : r || (a.reading = !1);
        }return f(a);
      }function l(t, e, n, r) {
        e.flowing && 0 === e.length && !e.sync ? (t.emit("data", n), t.read(0)) : (e.length += e.objectMode ? 1 : n.length, r ? e.buffer.unshift(n) : e.buffer.push(n), e.needReadable && _(t)), m(t, e);
      }function c(t, e) {
        var n;return o(e) || "string" == typeof e || void 0 === e || t.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n;
      }function f(t) {
        return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length);
      }function h(t) {
        return t >= H ? t = H : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t;
      }function $(t, e) {
        return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t !== t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = h(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0));
      }function p(t, e) {
        if (!e.ended) {
          if (e.decoder) {
            var n = e.decoder.end();n && n.length && (e.buffer.push(n), e.length += e.objectMode ? 1 : n.length);
          }e.ended = !0, _(t);
        }
      }function _(t) {
        var e = t._readableState;e.needReadable = !1, e.emittedReadable || (D("emitReadable", e.flowing), e.emittedReadable = !0, e.sync ? M(g, t) : g(t));
      }function g(t) {
        D("emit readable"), t.emit("readable"), k(t);
      }function m(t, e) {
        e.readingMore || (e.readingMore = !0, M(v, t, e));
      }function v(t, e) {
        for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (D("maybeReadMore read 0"), t.read(0), n !== e.length);) {
          n = e.length;
        }e.readingMore = !1;
      }function y(t) {
        return function () {
          var e = t._readableState;D("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && N(t, "data") && (e.flowing = !0, k(t));
        };
      }function b(t) {
        D("readable nexttick read 0"), t.read(0);
      }function w(t, e) {
        e.resumeScheduled || (e.resumeScheduled = !0, M(E, t, e));
      }function E(t, e) {
        e.reading || (D("resume read 0"), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, t.emit("resume"), k(t), e.flowing && !e.reading && t.read(0);
      }function k(t) {
        var e = t._readableState;for (D("flow", e.flowing); e.flowing && null !== t.read();) {}
      }function x(t, e) {
        if (0 === e.length) return null;var n;return e.objectMode ? n = e.buffer.shift() : !t || t >= e.length ? (n = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length), e.buffer.clear()) : n = S(t, e.buffer, e.decoder), n;
      }function S(t, e, n) {
        var r;return t < e.head.data.length ? (r = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) : r = t === e.head.data.length ? e.shift() : n ? A(t, e) : O(t, e), r;
      }function A(t, e) {
        var n = e.head,
            r = 1,
            i = n.data;for (t -= i.length; n = n.next;) {
          var o = n.data,
              a = t > o.length ? o.length : t;if (a === o.length ? i += o : i += o.slice(0, t), 0 === (t -= a)) {
            a === o.length ? (++r, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n, n.data = o.slice(a));break;
          }++r;
        }return e.length -= r, i;
      }function O(t, e) {
        var n = B.allocUnsafe(t),
            r = e.head,
            i = 1;for (r.data.copy(n), t -= r.data.length; r = r.next;) {
          var o = r.data,
              a = t > o.length ? o.length : t;if (o.copy(n, n.length - t, 0, a), 0 === (t -= a)) {
            a === o.length ? (++i, r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r, r.data = o.slice(a));break;
          }++i;
        }return e.length -= i, n;
      }function R(t) {
        var e = t._readableState;if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');e.endEmitted || (e.ended = !0, M(T, e, t));
      }function T(t, e) {
        t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"));
      }function L(t, e) {
        for (var n = 0, r = t.length; n < r; n++) {
          if (t[n] === e) return n;
        }return -1;
      }var M = n(22);t.exports = d;var C,
          I = n(54);d.ReadableState = s;var N = (n(32).EventEmitter, function (t, e) {
        return t.listeners(e).length;
      }),
          j = n(58),
          B = n(23).Buffer,
          P = e.Uint8Array || function () {},
          U = n(14);U.inherits = n(3);var z = n(120),
          D = void 0;D = z && z.debuglog ? z.debuglog("stream") : function () {};var F,
          Z = n(121),
          G = n(59);U.inherits(d, j);var q = ["error", "close", "destroy", "pause", "resume"];Object.defineProperty(d.prototype, "destroyed", { get: function get() {
          return void 0 !== this._readableState && this._readableState.destroyed;
        }, set: function set(t) {
          this._readableState && (this._readableState.destroyed = t);
        } }), d.prototype.destroy = G.destroy, d.prototype._undestroy = G.undestroy, d.prototype._destroy = function (t, e) {
        this.push(null), e(t);
      }, d.prototype.push = function (t, e) {
        var n,
            r = this._readableState;return r.objectMode ? n = !0 : "string" == typeof t && (e = e || r.defaultEncoding, e !== r.encoding && (t = B.from(t, e), e = ""), n = !0), u(this, t, e, !1, n);
      }, d.prototype.unshift = function (t) {
        return u(this, t, null, !0, !1);
      }, d.prototype.isPaused = function () {
        return !1 === this._readableState.flowing;
      }, d.prototype.setEncoding = function (t) {
        return F || (F = n(60).StringDecoder), this._readableState.decoder = new F(t), this._readableState.encoding = t, this;
      };var H = 8388608;d.prototype.read = function (t) {
        D("read", t), t = parseInt(t, 10);var e = this._readableState,
            n = t;if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended)) return D("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? R(this) : _(this), null;if (0 === (t = $(t, e)) && e.ended) return 0 === e.length && R(this), null;var r = e.needReadable;D("need readable", r), (0 === e.length || e.length - t < e.highWaterMark) && (r = !0, D("length less than watermark", r)), e.ended || e.reading ? (r = !1, D("reading or ended", r)) : r && (D("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = $(n, e)));var i;return i = t > 0 ? x(t, e) : null, null === i ? (e.needReadable = !0, t = 0) : e.length -= t, 0 === e.length && (e.ended || (e.needReadable = !0), n !== t && e.ended && R(this)), null !== i && this.emit("data", i), i;
      }, d.prototype._read = function (t) {
        this.emit("error", new Error("_read() is not implemented"));
      }, d.prototype.pipe = function (t, e) {
        function n(t, e) {
          D("onunpipe"), t === f && e && !1 === e.hasUnpiped && (e.hasUnpiped = !0, o());
        }function i() {
          D("onend"), t.end();
        }function o() {
          D("cleanup"), t.removeListener("close", u), t.removeListener("finish", l), t.removeListener("drain", _), t.removeListener("error", d), t.removeListener("unpipe", n), f.removeListener("end", i), f.removeListener("end", c), f.removeListener("data", s), g = !0, !h.awaitDrain || t._writableState && !t._writableState.needDrain || _();
        }function s(e) {
          D("ondata"), m = !1, !1 !== t.write(e) || m || ((1 === h.pipesCount && h.pipes === t || h.pipesCount > 1 && -1 !== L(h.pipes, t)) && !g && (D("false write response, pause", f._readableState.awaitDrain), f._readableState.awaitDrain++, m = !0), f.pause());
        }function d(e) {
          D("onerror", e), c(), t.removeListener("error", d), 0 === N(t, "error") && t.emit("error", e);
        }function u() {
          t.removeListener("finish", l), c();
        }function l() {
          D("onfinish"), t.removeListener("close", u), c();
        }function c() {
          D("unpipe"), f.unpipe(t);
        }var f = this,
            h = this._readableState;switch (h.pipesCount) {case 0:
            h.pipes = t;break;case 1:
            h.pipes = [h.pipes, t];break;default:
            h.pipes.push(t);}h.pipesCount += 1, D("pipe count=%d opts=%j", h.pipesCount, e);var $ = (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr,
            p = $ ? i : c;h.endEmitted ? M(p) : f.once("end", p), t.on("unpipe", n);var _ = y(f);t.on("drain", _);var g = !1,
            m = !1;return f.on("data", s), a(t, "error", d), t.once("close", u), t.once("finish", l), t.emit("pipe", f), h.flowing || (D("pipe resume"), f.resume()), t;
      }, d.prototype.unpipe = function (t) {
        var e = this._readableState,
            n = { hasUnpiped: !1 };if (0 === e.pipesCount) return this;if (1 === e.pipesCount) return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, n), this);if (!t) {
          var r = e.pipes,
              i = e.pipesCount;e.pipes = null, e.pipesCount = 0, e.flowing = !1;for (var o = 0; o < i; o++) {
            r[o].emit("unpipe", this, n);
          }return this;
        }var a = L(e.pipes, t);return -1 === a ? this : (e.pipes.splice(a, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, n), this);
      }, d.prototype.on = function (t, e) {
        var n = j.prototype.on.call(this, t, e);if ("data" === t) !1 !== this._readableState.flowing && this.resume();else if ("readable" === t) {
          var r = this._readableState;r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && _(this) : M(b, this));
        }return n;
      }, d.prototype.addListener = d.prototype.on, d.prototype.resume = function () {
        var t = this._readableState;return t.flowing || (D("resume"), t.flowing = !0, w(this, t)), this;
      }, d.prototype.pause = function () {
        return D("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (D("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
      }, d.prototype.wrap = function (t) {
        var e = this._readableState,
            n = !1,
            r = this;t.on("end", function () {
          if (D("wrapped end"), e.decoder && !e.ended) {
            var t = e.decoder.end();t && t.length && r.push(t);
          }r.push(null);
        }), t.on("data", function (i) {
          if (D("wrapped data"), e.decoder && (i = e.decoder.write(i)), (!e.objectMode || null !== i && void 0 !== i) && (e.objectMode || i && i.length)) {
            r.push(i) || (n = !0, t.pause());
          }
        });for (var i in t) {
          void 0 === this[i] && "function" == typeof t[i] && (this[i] = function (e) {
            return function () {
              return t[e].apply(t, arguments);
            };
          }(i));
        }for (var o = 0; o < q.length; o++) {
          t.on(q[o], r.emit.bind(r, q[o]));
        }return r._read = function (e) {
          D("wrapped _read", e), n && (n = !1, t.resume());
        }, r;
      }, d._fromList = x;
    }).call(e, n(0), n(1));
  }, function (t, e, n) {
    t.exports = n(32).EventEmitter;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      var n = this,
          r = this._readableState && this._readableState.destroyed,
          i = this._writableState && this._writableState.destroyed;if (r || i) return void (e ? e(t) : !t || this._writableState && this._writableState.errorEmitted || a(o, this, t));this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function (t) {
        !e && t ? (a(o, n, t), n._writableState && (n._writableState.errorEmitted = !0)) : e && e(t);
      });
    }function i() {
      this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
    }function o(t, e) {
      t.emit("error", e);
    }var a = n(22);t.exports = { destroy: r, undestroy: i };
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      if (!t) return "utf8";for (var e;;) {
        switch (t) {case "utf8":case "utf-8":
            return "utf8";case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
            return "utf16le";case "latin1":case "binary":
            return "latin1";case "base64":case "ascii":case "hex":
            return t;default:
            if (e) return;t = ("" + t).toLowerCase(), e = !0;}
      }
    }function i(t) {
      var e = r(t);if ("string" != typeof e && (m.isEncoding === v || !v(t))) throw new Error("Unknown encoding: " + t);return e || t;
    }function o(t) {
      this.encoding = i(t);var e;switch (this.encoding) {case "utf16le":
          this.text = f, this.end = h, e = 4;break;case "utf8":
          this.fillLast = u, e = 4;break;case "base64":
          this.text = $, this.end = p, e = 3;break;default:
          return this.write = _, void (this.end = g);}this.lastNeed = 0, this.lastTotal = 0, this.lastChar = m.allocUnsafe(e);
    }function a(t) {
      return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : -1;
    }function s(t, e, n) {
      var r = e.length - 1;if (r < n) return 0;var i = a(e[r]);return i >= 0 ? (i > 0 && (t.lastNeed = i - 1), i) : --r < n ? 0 : (i = a(e[r])) >= 0 ? (i > 0 && (t.lastNeed = i - 2), i) : --r < n ? 0 : (i = a(e[r]), i >= 0 ? (i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3), i) : 0);
    }function d(t, e, n) {
      if (128 != (192 & e[0])) return t.lastNeed = 0, "�".repeat(n);if (t.lastNeed > 1 && e.length > 1) {
        if (128 != (192 & e[1])) return t.lastNeed = 1, "�".repeat(n + 1);if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return t.lastNeed = 2, "�".repeat(n + 2);
      }
    }function u(t) {
      var e = this.lastTotal - this.lastNeed,
          n = d(this, t, e);return void 0 !== n ? n : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void (this.lastNeed -= t.length));
    }function l(t, e) {
      var n = s(this, t, e);if (!this.lastNeed) return t.toString("utf8", e);this.lastTotal = n;var r = t.length - (n - this.lastNeed);return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r);
    }function c(t) {
      var e = t && t.length ? this.write(t) : "";return this.lastNeed ? e + "�".repeat(this.lastTotal - this.lastNeed) : e;
    }function f(t, e) {
      if ((t.length - e) % 2 == 0) {
        var n = t.toString("utf16le", e);if (n) {
          var r = n.charCodeAt(n.length - 1);if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], n.slice(0, -1);
        }return n;
      }return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1);
    }function h(t) {
      var e = t && t.length ? this.write(t) : "";if (this.lastNeed) {
        var n = this.lastTotal - this.lastNeed;return e + this.lastChar.toString("utf16le", 0, n);
      }return e;
    }function $(t, e) {
      var n = (t.length - e) % 3;return 0 === n ? t.toString("base64", e) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - n));
    }function p(t) {
      var e = t && t.length ? this.write(t) : "";return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
    }function _(t) {
      return t.toString(this.encoding);
    }function g(t) {
      return t && t.length ? this.write(t) : "";
    }var m = n(23).Buffer,
        v = m.isEncoding || function (t) {
      switch ((t = "" + t) && t.toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":case "raw":
          return !0;default:
          return !1;}
    };e.StringDecoder = o, o.prototype.write = function (t) {
      if (0 === t.length) return "";var e, n;if (this.lastNeed) {
        if (void 0 === (e = this.fillLast(t))) return "";n = this.lastNeed, this.lastNeed = 0;
      } else n = 0;return n < t.length ? e ? e + this.text(t, n) : this.text(t, n) : e || "";
    }, o.prototype.end = c, o.prototype.text = l, o.prototype.fillLast = function (t) {
      if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length;
    };
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      this.afterTransform = function (e, n) {
        return i(t, e, n);
      }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null;
    }function i(t, e, n) {
      var r = t._transformState;r.transforming = !1;var i = r.writecb;if (!i) return t.emit("error", new Error("write callback called multiple times"));r.writechunk = null, r.writecb = null, null !== n && void 0 !== n && t.push(n), i(e);var o = t._readableState;o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && t._read(o.highWaterMark);
    }function o(t) {
      if (!(this instanceof o)) return new o(t);s.call(this, t), this._transformState = new r(this);var e = this;this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.once("prefinish", function () {
        "function" == typeof this._flush ? this._flush(function (t, n) {
          a(e, t, n);
        }) : a(e);
      });
    }function a(t, e, n) {
      if (e) return t.emit("error", e);null !== n && void 0 !== n && t.push(n);var r = t._writableState,
          i = t._transformState;if (r.length) throw new Error("Calling transform done when ws.length != 0");if (i.transforming) throw new Error("Calling transform done when still transforming");return t.push(null);
    }t.exports = o;var s = n(5),
        d = n(14);d.inherits = n(3), d.inherits(o, s), o.prototype.push = function (t, e) {
      return this._transformState.needTransform = !1, s.prototype.push.call(this, t, e);
    }, o.prototype._transform = function (t, e, n) {
      throw new Error("_transform() is not implemented");
    }, o.prototype._write = function (t, e, n) {
      var r = this._transformState;if (r.writecb = n, r.writechunk = t, r.writeencoding = e, !r.transforming) {
        var i = this._readableState;(r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
      }
    }, o.prototype._read = function (t) {
      var e = this._transformState;null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0;
    }, o.prototype._destroy = function (t, e) {
      var n = this;s.prototype._destroy.call(this, t, function (t) {
        e(t), n.emit("close");
      });
    };
  }, function (t, e, n) {
    "use strict";
    e.decode = e.parse = n(132), e.encode = e.stringify = n(133);
  }, function (t, e, n) {
    "use strict";
    (function (e) {
      function r(t, e) {
        if (t === e) return 0;for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i) {
          if (t[i] !== e[i]) {
            n = t[i], r = e[i];break;
          }
        }return n < r ? -1 : r < n ? 1 : 0;
      }function i(t) {
        return e.Buffer && "function" == typeof e.Buffer.isBuffer ? e.Buffer.isBuffer(t) : !(null == t || !t._isBuffer);
      }function o(t) {
        return Object.prototype.toString.call(t);
      }function a(t) {
        return !i(t) && "function" == typeof e.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : !!t && (t instanceof DataView || !!(t.buffer && t.buffer instanceof ArrayBuffer)));
      }function s(t) {
        if (y.isFunction(t)) {
          if (E) return t.name;var e = t.toString(),
              n = e.match(x);return n && n[1];
        }
      }function d(t, e) {
        return "string" == typeof t ? t.length < e ? t : t.slice(0, e) : t;
      }function u(t) {
        if (E || !y.isFunction(t)) return y.inspect(t);var e = s(t);return "[Function" + (e ? ": " + e : "") + "]";
      }function l(t) {
        return d(u(t.actual), 128) + " " + t.operator + " " + d(u(t.expected), 128);
      }function c(t, e, n, r, i) {
        throw new k.AssertionError({ message: n, actual: t, expected: e, operator: r, stackStartFunction: i });
      }function f(t, e) {
        t || c(t, !0, e, "==", k.ok);
      }function h(t, e, n, s) {
        if (t === e) return !0;if (i(t) && i(e)) return 0 === r(t, e);if (y.isDate(t) && y.isDate(e)) return t.getTime() === e.getTime();if (y.isRegExp(t) && y.isRegExp(e)) return t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase;if (null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
          if (a(t) && a(e) && o(t) === o(e) && !(t instanceof Float32Array || t instanceof Float64Array)) return 0 === r(new Uint8Array(t.buffer), new Uint8Array(e.buffer));if (i(t) !== i(e)) return !1;s = s || { actual: [], expected: [] };var d = s.actual.indexOf(t);return -1 !== d && d === s.expected.indexOf(e) || (s.actual.push(t), s.expected.push(e), p(t, e, n, s));
        }return n ? t === e : t == e;
      }function $(t) {
        return "[object Arguments]" == Object.prototype.toString.call(t);
      }function p(t, e, n, r) {
        if (null === t || void 0 === t || null === e || void 0 === e) return !1;if (y.isPrimitive(t) || y.isPrimitive(e)) return t === e;if (n && Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;var i = $(t),
            o = $(e);if (i && !o || !i && o) return !1;if (i) return t = w.call(t), e = w.call(e), h(t, e, n);var a,
            s,
            d = S(t),
            u = S(e);if (d.length !== u.length) return !1;for (d.sort(), u.sort(), s = d.length - 1; s >= 0; s--) {
          if (d[s] !== u[s]) return !1;
        }for (s = d.length - 1; s >= 0; s--) {
          if (a = d[s], !h(t[a], e[a], n, r)) return !1;
        }return !0;
      }function _(t, e, n) {
        h(t, e, !0) && c(t, e, n, "notDeepStrictEqual", _);
      }function g(t, e) {
        if (!t || !e) return !1;if ("[object RegExp]" == Object.prototype.toString.call(e)) return e.test(t);try {
          if (t instanceof e) return !0;
        } catch (t) {}return !Error.isPrototypeOf(e) && !0 === e.call({}, t);
      }function m(t) {
        var e;try {
          t();
        } catch (t) {
          e = t;
        }return e;
      }function v(t, e, n, r) {
        var i;if ("function" != typeof e) throw new TypeError('"block" argument must be a function');"string" == typeof n && (r = n, n = null), i = m(e), r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."), t && !i && c(i, n, "Missing expected exception" + r);var o = "string" == typeof r,
            a = !t && y.isError(i),
            s = !t && i && !n;if ((a && o && g(i, n) || s) && c(i, n, "Got unwanted exception" + r), t && i && n && !g(i, n) || !t && i) throw i;
      }var y = n(35),
          b = Object.prototype.hasOwnProperty,
          w = Array.prototype.slice,
          E = function () {
        return "foo" === function () {}.name;
      }(),
          k = t.exports = f,
          x = /\s*function\s+([^\(\s]*)\s*/;k.AssertionError = function (t) {
        this.name = "AssertionError", this.actual = t.actual, this.expected = t.expected, this.operator = t.operator, t.message ? (this.message = t.message, this.generatedMessage = !1) : (this.message = l(this), this.generatedMessage = !0);var e = t.stackStartFunction || c;if (Error.captureStackTrace) Error.captureStackTrace(this, e);else {
          var n = new Error();if (n.stack) {
            var r = n.stack,
                i = s(e),
                o = r.indexOf("\n" + i);if (o >= 0) {
              var a = r.indexOf("\n", o + 1);r = r.substring(a + 1);
            }this.stack = r;
          }
        }
      }, y.inherits(k.AssertionError, Error), k.fail = c, k.ok = f, k.equal = function (t, e, n) {
        t != e && c(t, e, n, "==", k.equal);
      }, k.notEqual = function (t, e, n) {
        t == e && c(t, e, n, "!=", k.notEqual);
      }, k.deepEqual = function (t, e, n) {
        h(t, e, !1) || c(t, e, n, "deepEqual", k.deepEqual);
      }, k.deepStrictEqual = function (t, e, n) {
        h(t, e, !0) || c(t, e, n, "deepStrictEqual", k.deepStrictEqual);
      }, k.notDeepEqual = function (t, e, n) {
        h(t, e, !1) && c(t, e, n, "notDeepEqual", k.notDeepEqual);
      }, k.notDeepStrictEqual = _, k.strictEqual = function (t, e, n) {
        t !== e && c(t, e, n, "===", k.strictEqual);
      }, k.notStrictEqual = function (t, e, n) {
        t === e && c(t, e, n, "!==", k.notStrictEqual);
      }, k.throws = function (t, e, n) {
        v(!0, t, e, n);
      }, k.doesNotThrow = function (t, e, n) {
        v(!1, t, e, n);
      }, k.ifError = function (t) {
        if (t) throw t;
      };var S = Object.keys || function (t) {
        var e = [];for (var n in t) {
          b.call(t, n) && e.push(n);
        }return e;
      };
    }).call(e, n(0));
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n, r) {
      for (var i = 65535 & t | 0, o = t >>> 16 & 65535 | 0, a = 0; 0 !== n;) {
        a = n > 2e3 ? 2e3 : n, n -= a;do {
          i = i + e[r++] | 0, o = o + i | 0;
        } while (--a);i %= 65521, o %= 65521;
      }return i | o << 16 | 0;
    }t.exports = r;
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n, r) {
      var o = i,
          a = r + n;t ^= -1;for (var s = r; s < a; s++) {
        t = t >>> 8 ^ o[255 & (t ^ e[s])];
      }return -1 ^ t;
    }var i = function () {
      for (var t, e = [], n = 0; n < 256; n++) {
        t = n;for (var r = 0; r < 8; r++) {
          t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
        }e[n] = t;
      }return e;
    }();t.exports = r;
  }, function (t, e, n) {
    t.exports = n(67);
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(68);e.default = Object.assign({}, r.a, { install: function install(t) {
        return t.component(r.a.name, r.a), t;
      } });
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      a || n(69);
    }var i = n(36),
        o = n(156),
        a = !1,
        s = n(70),
        d = r,
        u = s(i.a, o.a, !1, d, "data-v-286e6488", null);u.options.__file = "src/vue-tel-input.vue", e.a = u.exports;
  }, function (t, e) {}, function (t, e) {
    t.exports = function (t, e, n, r, i, o) {
      var a,
          s = t = t || {},
          d = _typeof(t.default);"object" !== d && "function" !== d || (a = t, s = t.default);var u = "function" == typeof s ? s.options : s;e && (u.render = e.render, u.staticRenderFns = e.staticRenderFns, u._compiled = !0), n && (u.functional = !0), i && (u._scopeId = i);var l;if (o ? (l = function l(t) {
        t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(o);
      }, u._ssrRegister = l) : r && (l = r), l) {
        var c = u.functional,
            f = c ? u.render : u.beforeCreate;c ? (u._injectStyles = l, u.render = function (t, e) {
          return l.call(e), f(t, e);
        }) : u.beforeCreate = f ? [].concat(f, l) : [l];
      }return { esModule: a, exports: s, options: u };
    };
  }, function (t, e, n) {
    "use strict";
    function r() {
      var t = Array.prototype.slice.call(arguments);return t.push(u.a), l.b.apply(this, t);
    }function i() {
      var t = Array.prototype.slice.call(arguments);return t.push(u.a), c.a.apply(this, t);
    }function o(t) {
      f.a.call(this, t, u.a);
    }function a(t) {
      f.a.call(this, t, u.a);
    }function s(t) {
      f.a.call(this, t, u.a);
    }e.b = r, e.c = i, e.a = s;var d = n(72),
        u = n.n(d),
        l = (n(6), n(21), n(20)),
        c = n(52),
        f = n(53);n(9);o.prototype = Object.create(f.a.prototype, {}), o.prototype.constructor = o, a.prototype = Object.create(f.a.prototype, {}), a.prototype.constructor = a, s.prototype = Object.create(f.a.prototype, {}), s.prototype.constructor = s;
  }, function (t, e) {
    t.exports = { country_phone_code_to_countries: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 800: ["001"], 808: ["001"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 870: ["001"], 878: ["001"], 880: ["BD"], 881: ["001"], 882: ["001"], 883: ["001"], 886: ["TW"], 888: ["001"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 979: ["001"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "[46]\\d{4}|[01589]\\d{5}"], AD: ["376", "[16]\\d{5,8}|[37-9]\\d{5}", [["(\\d{3})(\\d{3})", "$1 $2", ["[137-9]|6[0-8]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["180", "180[02]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["690"]]]], AE: ["971", "[2-79]\\d{7,8}|800\\d{2,9}", [["([2-4679])(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-4679][2-8]"]], ["(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"]], ["([479]00)(\\d)(\\d{5})", "$1 $2 $3", ["[479]00"], "$1"], ["([68]00)(\\d{2,9})", "$1 $2", ["[68]00"], "$1"]], "0", "0$1"], AF: ["93", "[2-7]\\d{8}", [["([2-7]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"]]], "0", "0$1"], AG: ["1", "[2589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "268"], AI: ["1", "[2589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "264"], AL: ["355", "[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}", [["(4)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[0-6]"]], ["(6\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4[7-9]"]], ["(\\d{3})(\\d{3,5})", "$1 $2", ["[235][16-9]|[79]|8[016-9]"]]], "0", "0$1"], AM: ["374", "[1-9]\\d{7}", [["(\\d{2})(\\d{6})", "$1 $2", ["1|47"]], ["(\\d{2})(\\d{6})", "$1 $2", ["4[1349]|[5-7]|88|9[1-9]"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8|90"], "0 $1"]], "0", "(0$1)"], AO: ["244", "[29]\\d{8}", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3"]]], AR: ["54", "11\\d{8}|[2368]\\d{9}|9\\d{10}", [["([68]\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"]], ["(9)(11)(\\d{4})(\\d{4})", "$2 15-$3-$4", ["911"], null, null, "$1 $2 $3-$4"], ["(9)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-4689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"], null, null, "$1 $2 $3-$4"], ["(9)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9[23]"], null, null, "$1 $2 $3-$4"], ["(11)(\\d{4})(\\d{4})", "$1 $2-$3", ["11"], null, "true"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"], null, "true"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], null, "true"]], "0", "0$1", "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?", "9$1"], AS: ["1", "[5689]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "684"], AT: ["43", "[1-9]\\d{3,12}", [["(116\\d{3})", "$1", ["116"], "$1"], ["(1)(\\d{3,12})", "$1 $2", ["1"]], ["(5\\d)(\\d{3,5})", "$1 $2", ["5[079]"]], ["(5\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5[079]"]], ["(5\\d)(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5[079]"]], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:[28]0|32)|[89]"]], ["(\\d{4})(\\d{3,9})", "$1 $2", ["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:[24][1-8]|35|[5-79])"]]], "0", "0$1"], AU: ["61", "1\\d{4,9}|[2-578]\\d{8}", [["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"], ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[389]0", "1(?:[38]0|9)0"]], ["(180)(2\\d{3})", "$1 $2", ["180", "1802"]], ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"]], ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"]], ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"]]], "0", null, null, null, null, null, ["[237]\\d{8}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|[6-8]\\d{4}|9(?:[02-9]\\d{3}|1(?:[0-57-9]\\d{2}|6[0135-9]\\d)))\\d{3}", "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12457-9]|9[017-9])\\d{6}", "180(?:0\\d{3}|2)\\d{3}", "19(?:0[0126]\\d|[679])\\d{5}", "500\\d{6}", null, null, "16\\d{3,7}", "550\\d{6}", "13(?:00\\d{3}|45[0-4]|\\d)\\d{3}"]], AW: ["297", "[25-9]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]], AX: ["358", "1\\d{5,11}|[35]\\d{5,9}|2\\d{4,9}|4\\d{5,10}|6\\d{7,9}|7\\d{4,9}|8\\d{6,9}", [["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[6-8])0"]], ["(75\\d{3})", "$1", ["75[12]"]], ["(116\\d{3})", "$1", ["116"], "$1"], ["(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"]], ["(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"]]], "0", null, null, null, null, null, ["18[1-8]\\d{3,9}", "4\\d{5,10}|50\\d{4,8}", "800\\d{4,7}", "[67]00\\d{5,6}", null, null, "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})"]], AZ: ["994", "[1-9]\\d{8}", [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2(?:[0-36]|[45]2)|365"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[4-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"]], "0", "(0$1)"], BA: ["387", "[3-9]\\d{7,8}", [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6[047]"]]], "0", "0$1"], BB: ["1", "[2589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "246"], BD: ["880", "[2-79]\\d{5,9}|1\\d{9}|8[0-7]\\d{4,8}", [["(2)(\\d{7,8})", "$1-$2", ["2"]], ["(\\d{2})(\\d{4,6})", "$1-$2", ["[3-79]1"]], ["(\\d{4})(\\d{3,6})", "$1-$2", ["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])"]], ["(\\d{3})(\\d{3,7})", "$1-$2", ["[3-79][2-9]|8"]]], "0", "0$1"], BE: ["32", "[1-9]\\d{7,8}", [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[6-9]"]], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4[23]|9[2-4]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[156]|7[018]|8(?:0[1-9]|[1-79])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"]]], "0", "0$1"], BF: ["226", "[25-7]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]], BG: ["359", "[23567]\\d{5,7}|[489]\\d{6,8}", [["(2)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"]], ["(2)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{4})", "$1 $2", ["43[124-7]|70[1-9]"]], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[124-7]|70[1-9]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[78]00"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["99[69]"]], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"]], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["48|8[7-9]|9[08]"]]], "0", "0$1"], BH: ["973", "[136-9]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2"]]], BI: ["257", "[267]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]], BJ: ["229", "[2689]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"]]]], BL: ["590", "[56]\\d{8}", [["([56]\\d{2})(\\d{2})(\\d{4})", "$1 $2-$3", ["590|69[01]"]]], "0", null, null, null, null, null, ["590(?:2[7-9]|5[12]|87)\\d{4}", "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"]], BM: ["1", "[4589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "441"], BN: ["673", "[2-578]\\d{6}", [["([2-578]\\d{2})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "[23467]\\d{7}|8\\d{8}", [["([234])(\\d{7})", "$1 $2", ["[2-4]"]], ["([67]\\d{7})", "$1", ["[67]"]], ["(800)(\\d{2})(\\d{4})", "$1 $2 $3", ["800"]]], "0", null, "0(1\\d)?"], BQ: ["599", "[347]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2", ["[13-7]"]], ["(9)(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], null, null, null, null, null, null, ["(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}", "(?:31(?:8[14-8]|9[14578])|416[145-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}"]], BR: ["55", "[1-46-9]\\d{7,10}|5(?:[0-4]\\d{7,9}|5(?:[2-8]\\d{7}|9\\d{7,8}))", [["(\\d{4})(\\d{4})", "$1-$2", ["300|40[02]", "300|40(?:0|20)"]], ["([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]9"], "($1)"]], "0", null, "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "[2589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "242"], BT: ["975", "[1-8]\\d{6,7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1|77"]], ["([2-8])(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]]]], BW: ["267", "[2-79]\\d{6,7}", [["(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]], ["(7\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(90)(\\d{5})", "$1 $2", ["90"]]]], BY: ["375", "[1-4]\\d{8}|8(?:0(?:0\\d{3,7}|[13]\\d{7})|(?:10|20\\d)\\d{7})|9\\d{9,10}", [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["17[0-3589]|2[4-9]|[34]", "17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])", "1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"], "8 0$1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["([89]\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8[01]|9"], "8 $1"], ["(82\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["82"], "8 $1"], ["(800)(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(800)(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"]], "8", null, "8?0?"], BZ: ["501", "[2-8]\\d{6}|0\\d{10}", [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(0)(800)(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["080", "0800"]]]], CA: ["1", "[2-9]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, null, ["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", "900[2-9]\\d{6}", "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}"]], CC: ["61", "[1458]\\d{5,9}", [["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"], ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[389]0", "1(?:[38]0|9)0"]], ["(180)(2\\d{3})", "$1 $2", ["180", "1802"]], ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"]], ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"]], ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"]]], "0", null, null, null, null, null, ["8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:08|22|68)|4[29]8|62\\d|70[23]|959))\\d{3}", "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\d{6}", "180(?:0\\d{3}|2)\\d{3}", "19(?:0[0126]\\d|[679])\\d{5}", "500\\d{6}", null, null, null, "550\\d{6}", "13(?:00\\d{2})?\\d{4}"]], CD: ["243", "[2-6]\\d{6}|[18]\\d{6,8}|9\\d{8}", [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["12"]], ["([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[0-2459]|9"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"]], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"]]], "0", "0$1"], CF: ["236", "[278]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]], CG: ["242", "[028]\\d{8}", [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["800"]]]], CH: ["41", "[2-9]\\d{8}|860\\d{9}", [["([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]|[89]1"]], ["([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["860"]]], "0", "0$1"], CI: ["225", "[02-8]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]], CK: ["682", "[2-8]\\d{4}", [["(\\d{2})(\\d{3})", "$1 $2"]]], CL: ["56", "1230\\d{7}|[2-46-9]\\d{8,10}|5[1-3578]\\d{7}", [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[357]|4[1-35]|6[13-57]"], "($1)"], ["(9)(\\d{4})(\\d{4})", "$1 $2 $3", ["9"]], ["(44)(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["([68]00)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[68]00"], "$1"], ["(600)(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["600"], "$1"], ["(1230)(\\d{3})(\\d{4})", "$1 $2 $3", ["123", "1230"], "$1"], ["(\\d{5})(\\d{4})", "$1 $2", ["219"], "($1)"]], "0", "0$1", "0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))"], CM: ["237", "[2368]\\d{7,8}", [["([26])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|88"]]]], CN: ["86", "[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,10}", [["([48]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]], ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d\\d[19]", "[3-9]\\d\\d(?:10|9[56])"], "0$1"], ["(21)(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "true"], ["([12]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"], "0$1", "true"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "true"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"], "0$1", "true"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["807", "8078"], "0$1", "true"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1(?:[3-57-9]|66)"]], ["(10800)(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]], ["(\\d{3})(\\d{7,8})", "$1 $2", ["950"]]], "0", null, "(1(?:[129]\\d{3}|79\\d{2}))|0"], CO: ["57", "(?:[13]\\d{0,3}|[24-8])\\d{7}", [["(\\d)(\\d{7})", "$1 $2", ["1(?:[2-7]|8[2-9]|9[0-3])|[24-8]", "1(?:[2-7]|8[2-9]|9(?:09|[1-3]))|[24-8]"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"]], ["(1)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9[04])", "1(?:800|9(?:0[01]|4[78]))"], "0$1", null, "$1 $2 $3"]], "0", null, "0([3579]|4(?:44|56))?"], CR: ["506", "[24-9]\\d{7,9}", [["(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]0"]]], null, null, "(19(?:0[012468]|1[09]|20|66|77|99))"], CU: ["53", "[2-57]\\d{5,7}", [["(\\d)(\\d{6,7})", "$1 $2", ["7"]], ["(\\d{2})(\\d{4,6})", "$1 $2", ["[2-4]"]], ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"]], "0", "(0$1)"], CV: ["238", "[259]\\d{6}", [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"]]], CW: ["599", "[134679]\\d{6,7}", [["(\\d{3})(\\d{4})", "$1 $2", ["[13-7]"]], ["(9)(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], null, null, null, null, null, null, ["9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}", "9(?:5(?:[12467]\\d|3[01])|6(?:[15-9]\\d|3[01]))\\d{4}", null, null, null, null, null, "955\\d{5}", null, "60[0-2]\\d{4}"]], CX: ["61", "[1458]\\d{5,9}", [["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"], ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[389]0", "1(?:[38]0|9)0"]], ["(180)(2\\d{3})", "$1 $2", ["180", "1802"]], ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"]], ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"]], ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"]]], "0", null, null, null, null, null, ["8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:21|49|78|81)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\d{6}", "180(?:0\\d{3}|2)\\d{3}", "19(?:0[0126]\\d|[679])\\d{5}", "500\\d{6}", null, null, null, "550\\d{6}", "13(?:00\\d{2})?\\d{4}"]], CY: ["357", "[257-9]\\d{7}", [["(\\d{2})(\\d{6})", "$1 $2"]]], CZ: ["420", "[2-8]\\d{8}|9\\d{8,11}", [["([2-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(96\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["96"]], ["(9\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9[36]"]]]], DE: ["49", "[1-35-9]\\d{3,14}|4(?:[0-8]\\d{3,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})", [["(1\\d{2})(\\d{7,8})", "$1 $2", ["1[67]"]], ["(15\\d{3})(\\d{6})", "$1 $2", ["15[0568]"]], ["(1\\d{3})(\\d{7})", "$1 $2", ["15"]], ["(\\d{2})(\\d{3,11})", "$1 $2", ["3[02]|40|[68]9"]], ["(\\d{3})(\\d{3,11})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)"]], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|[7-9](?:0[1-9]|[1-9])", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[1346]|8[13568])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|[7-9](?:0[1-9]|[1-9])"]], ["(3\\d{4})(\\d{1,10})", "$1 $2", ["3"]], ["(800)(\\d{7,12})", "$1 $2", ["800"]], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:37|80)|900", "1(?:37|80)|900[1359]"]], ["(1\\d{2})(\\d{5,11})", "$1 $2", ["181"]], ["(18\\d{3})(\\d{6})", "$1 $2", ["185", "1850", "18500"]], ["(18\\d{2})(\\d{7})", "$1 $2", ["18[68]"]], ["(18\\d)(\\d{8})", "$1 $2", ["18[2-579]"]], ["(700)(\\d{4})(\\d{4})", "$1 $2 $3", ["700"]], ["(138)(\\d{4})", "$1 $2", ["138"]], ["(15[013-68])(\\d{2})(\\d{8})", "$1 $2 $3", ["15[013-68]"]], ["(15[279]\\d)(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"]], ["(1[67]\\d)(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"]]], "0", "0$1"], DJ: ["253", "[27]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]], DK: ["45", "[2-9]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]], DM: ["1", "[57-9]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "767"], DO: ["1", "[589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "8[024]9"], DZ: ["213", "(?:[1-4]|[5-9]\\d)\\d{7}", [["([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"]], ["([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"]], ["(9\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"]]], "0", "0$1"], EC: ["593", "1\\d{9,10}|[2-8]\\d{7}|9\\d{8}", [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[247]|[356][2-8]"], null, null, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(1800)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["180", "1800"], "$1"]], "0", "(0$1)"], EE: ["372", "[3-9]\\d{6,7}|800\\d{6,7}", [["([3-79]\\d{2})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]], ["(70)(\\d{2})(\\d{4})", "$1 $2 $3", ["70"]], ["(8000)(\\d{3})(\\d{3})", "$1 $2 $3", ["800", "8000"]], ["([458]\\d{3})(\\d{3,4})", "$1 $2", ["40|5|8(?:00|[1-5])", "40|5|8(?:00[1-9]|[1-5])"]]]], EG: ["20", "1\\d{4,9}|[24-6]\\d{8}|3\\d{7}|[89]\\d{8,9}", [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"]], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1(?:3|5[239])|[4-6]|[89][2-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[0-25]|[89]00"]]], "0", "0$1"], EH: ["212", "[5-9]\\d{8}", [["([5-7]\\d{2})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"]], ["([58]\\d{3})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|92)|892", "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"]], ["(5\\d{4})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"]], ["([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:4[067]|5[03])"]], ["(8[09])(\\d{7})", "$1-$2", ["8(?:0|9[013-9])"]]], "0", null, null, null, null, "528[89]"], ER: ["291", "[178]\\d{6}", [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3"]], "0", "0$1"], ES: ["34", "[5-9]\\d{8}", [["([89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[568]|[79][0-8]"]]]], ET: ["251", "[1-59]\\d{8}", [["([1-59]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"]]], "0", "0$1"], FI: ["358", "1\\d{4,11}|[2-9]\\d{4,10}", [["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[6-8])0"]], ["(75\\d{3})", "$1", ["75[12]"]], ["(116\\d{3})", "$1", ["116"], "$1"], ["(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"]], ["(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"]]], "0", "0$1", null, null, null, null, ["1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}", "4(?:[0-8]\\d{4,9}|9\\d{3,8})|50\\d{4,8}", "800\\d{4,7}", "[67]00\\d{5,6}", null, null, "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{3,7})"]], FJ: ["679", "[2-9]\\d{6}|0\\d{10}", [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]]], FK: ["500", "[2-7]\\d{4}"], FM: ["691", "[39]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]], FO: ["298", "[2-9]\\d{5}", [["(\\d{6})", "$1"]], null, null, "(10(?:01|[12]0|88))"], FR: ["33", "[1-9]\\d{8}", [["([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"]], ["(8\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"]], "0", "0$1"], GA: ["241", "0?\\d{7}", [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]]], GB: ["44", "\\d{7,10}", [["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]], ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]], ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]], ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]], ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]], ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]], ["(800)(\\d{6})", "$1 $2", ["800"]]], "0", "0$1", null, null, null, null, ["2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{7}|1(?:1(?:3[0-48]|[46][0-4]|5[0-26-9]|[78][0-49])|21[0-7]|31[0-8]|[4-69]1\\d)\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[28][02-57-9]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[2-46-8]\\d{2}|16977[23]\\d{3}", "7(?:[1-3]\\d{3}|4(?:[0-46-9]\\d{2}|5(?:[0-689]\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\d|2[0-35-9])\\d|7(?:0(?:0[01]|[1-9]\\d)|[1-7]\\d{2}|8[02-9]\\d|9[0-689]\\d)|8(?:[014-9]\\d|[23][0-8])\\d|9(?:[024-9]\\d{2}|1(?:[02-9]\\d|1[028])|3[0-689]\\d))\\d{5}", "80(?:0(?:1111|\\d{6,7})|8\\d{7})", "(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}", "70\\d{8}", null, "(?:3[0347]|55)\\d{8}", "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "56\\d{8}", "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})"]], GD: ["1", "[4589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "473"], GE: ["995", "[34578]\\d{8}", [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"]]], "0"], GF: ["594", "[56]\\d{8}", [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]], "0", "0$1"], GG: ["44", "[135789]\\d{6,9}", [["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]], ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]], ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]], ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]], ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]], ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]], ["(800)(\\d{6})", "$1 $2", ["800"]]], "0", null, null, null, null, null, ["1481[25-9]\\d{5}", "7(?:781\\d|839\\d|911[17])\\d{5}", "80(?:0(?:1111|\\d{6,7})|8\\d{7})", "(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}", "70\\d{8}", null, "(?:3[0347]|55)\\d{8}", "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "56\\d{8}", "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})"]], GH: ["233", "[235]\\d{8}|8\\d{7}", [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{5})", "$1 $2", ["8"]]], "0", "0$1"], GI: ["350", "[256]\\d{7}", [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "[1-689]\\d{5}", [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3"]]], GM: ["220", "[2-9]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]], GN: ["224", "[367]\\d{7,8}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "[56]\\d{8}", [["([56]\\d{2})(\\d{2})(\\d{4})", "$1 $2-$3", ["590|69[01]"]]], "0", "0$1", null, null, null, null, ["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}", "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"]], GQ: ["240", "[23589]\\d{8}", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "[26-9]\\d{9}", [["([27]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[2-9]1|[689]"]], ["(2\\d{3})(\\d{6})", "$1 $2", ["2[2-9][02-9]"]]]], GT: ["502", "[2-7]\\d{7}|1[89]\\d{9}", [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "[5689]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "671"], GW: ["245", "(?:4(?:0\\d{5}|4\\d{7})|9\\d{8})", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["44|9[5-7]"]], ["(\\d{3})(\\d{4})", "$1 $2", ["40"]]]], GY: ["592", "[2-46-9]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]], HK: ["852", "[2-7]\\d{7}|8[0-3]\\d{6,7}|9\\d{4,10}", [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|[89](?:0[1-9]|[1-9])"]], ["(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["800"]], ["(900)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["900"]], ["(900)(\\d{2,5})", "$1 $2", ["900"]]]], HN: ["504", "[237-9]\\d{7}", [["(\\d{4})(\\d{4})", "$1-$2"]]], HR: ["385", "[1-7]\\d{5,8}|[89]\\d{6,8}", [["(1)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"]], ["([2-5]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"]], ["(9\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"]], ["(6[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"]], ["([67]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"]], ["(80[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["80[01]"]], ["(80[01])(\\d{3})(\\d{3})", "$1 $2 $3", ["80[01]"]]], "0", "0$1"], HT: ["509", "[2-489]\\d{7}", [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3"]]], HU: ["36", "[1-9]\\d{7,8}", [["(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"]]], "06", "($1)"], ID: ["62", "(?:[1-79]\\d{6,10}|8\\d{7,11})", [["(\\d{2})(\\d{5,8})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["2[035-9]|[36][02-9]|[4579]"], "(0$1)"], ["(8\\d{2})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"]], ["(8\\d{2})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8[1-35-9]"]], ["(1)(500)(\\d{3})", "$1 $2 $3", ["150", "1500"], "$1"], ["(177)(\\d{6,8})", "$1 $2", ["177"]], ["(800)(\\d{5,7})", "$1 $2", ["800"]], ["(804)(\\d{3})(\\d{4})", "$1 $2 $3", ["804"]], ["(80\\d)(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80[79]"]]], "0", "0$1"], IE: ["353", "[124-9]\\d{6,9}", [["(1)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"]], ["(\\d{3})(\\d{5})", "$1 $2", ["40[24]|50[45]"]], ["(48)(\\d{4})(\\d{4})", "$1 $2 $3", ["48"]], ["(818)(\\d{3})(\\d{3})", "$1 $2 $3", ["818"]], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[24-69]|7[14]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["76|8[35-9]"], "0$1"], ["(8\\d)(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8[35-9]5"], "0$1"], ["(700)(\\d{3})(\\d{3})", "$1 $2 $3", ["700"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:5|8[059])", "1(?:5|8[059]0)"], "$1"]], "0", "(0$1)"], IL: ["972", "1\\d{6,11}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}|7\\d{6,9}", [["([2-489])(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["([57]\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(153)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["153"]], ["(1)([7-9]\\d{2})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(1255)(\\d{3})", "$1-$2", ["125", "1255"]], ["(1200)(\\d{3})(\\d{3})", "$1-$2-$3", ["120", "1200"]], ["(1212)(\\d{2})(\\d{2})", "$1-$2-$3", ["121", "1212"]], ["(1599)(\\d{6})", "$1-$2", ["159", "1599"]], ["(151)(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["151"]], ["(\\d{4})", "*$1", ["[2-689]"]]], "0"], IM: ["44", "[135789]\\d{6,9}", [["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]], ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]], ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]], ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]], ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]], ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]], ["(800)(\\d{6})", "$1 $2", ["800"]]], "0", null, null, null, null, null, ["1624[5-8]\\d{5}", "7(?:4576|[59]24\\d|624[0-4689])\\d{5}", "808162\\d{4}", "(?:872299|90[0167]624)\\d{4}", "70\\d{8}", null, "3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}", null, "56\\d{8}", "8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}"]], IN: ["91", "008\\d{9}|1\\d{7,12}|[2-9]\\d{9,10}", [["(\\d{8})", "$1", ["561", "5616", "56161"], "$1"], ["(\\d{5})(\\d{5})", "$1 $2", ["6(?:[09]0|2[03689]|3[05-9])|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9])|9", "6(?:[09]0|2(?:0[01]|39|60|8[0-2]|9[04])|3(?:0[01]|5[0-2]|60|7[05]|81|9[03-5]))|7(?:[07]|19[0-5]|2(?:[0235-9]|[14][017-9])|3(?:[025-9]|[134][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02-46-9]|[15][017-9])|6(?:[02-9]|1[0-257-9])|8(?:[0-79]|8[0189])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:[014][07-9]|[235-9])|3(?:[03-57-9]|[126][07-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9", "6(?:[09]0|2(?:0[01]|39|60|8[0-2]|9[04])|3(?:0[01]|5[0-2]|60|7[05]|81|9[03-5]))|7(?:0|19[0-5]|2(?:[0235-79]|[14][017-9]|8(?:[0-69]|[78][089]))|3(?:[05-8]|1(?:[0189]|7[5-9])|2(?:[0-49][089]|[5-8])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2-5][089]|7[0189]))|4(?:[056]|1(?:[0135-9]|[24][089])|[29](?:[0-7][089]|[89])|3(?:[0-8][089]|9)|[47](?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389]))|5(?:[0346-9]|[15][017-9]|2(?:[03-9]|[12][089]))|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[05-9]))|1(?:[02-57-9]|1(?:[0-35-9]|4[0-46-9])|6(?:[089]|7[02-8]))|2(?:0(?:[089]|7[02])|[14](?:[089]|7[02-8])|[235-9])|3(?:[03-57-9]|1(?:[089]|7[02-6])|2(?:[09]|77|8[0-689])|6(?:[089]|7[02-7]))|[45]|6(?:[02457-9]|[136](?:[089]|7[02-8]))|7(?:0[07-9]|[1-69]|[78](?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-68]))|9(?:[02-9]|1(?:[0289]|7[2-6])))|9"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-9]|80[2-46]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68][1-9]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[23579]|[468][1-9])|[2-8]"]], ["(\\d{2})(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3 $4", ["008"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], "$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["160", "1600"], "$1"], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], "$1"], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["180", "1800"], "$1"], ["(\\d{4})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["186", "1860"], "$1"], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18[06]"], "$1"]], "0", "0$1", null, null, !0], IO: ["246", "3\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]], IQ: ["964", "[1-7]\\d{7,9}", [["(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["([2-6]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"]], ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]], "0", "0$1"], IR: ["98", "[1-8]\\d{5,9}|9(?:[0-4]\\d{8}|9\\d{8})", [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"]], ["(\\d{2})(\\d{4,5})", "$1 $2", ["[1-8]"]], ["(\\d{4,5})", "$1", ["96"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"]]], "0", "0$1"], IS: ["354", "[4-9]\\d{6}|38\\d{7}", [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(3\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]]], IT: ["39", "[01589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9})", [["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|55"]], ["(0[26])(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(0[26])(\\d{4,6})", "$1 $2", ["0[26]"]], ["(0\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]], ["(0\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["0[13-57-9][2-46-8]"]], ["(0\\d{3})(\\d{2,6})", "$1 $2", ["0[13-57-9][2-46-8]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13]|8(?:00|4[08]|9[59])", "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894", "894[5-9]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]]], null, null, null, null, null, null, ["0(?:[26]\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7})", "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})", "80(?:0\\d{6}|3\\d{3})", "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})", "1(?:78\\d|99)\\d{6}", null, null, null, "55\\d{8}", "84(?:[08]\\d{6}|[17]\\d{3})"]], JE: ["44", "[135789]\\d{6,9}", [["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]], ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]], ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]], ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]], ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]], ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]], ["(800)(\\d{6})", "$1 $2", ["800"]]], "0", null, null, null, null, null, ["1534[0-24-8]\\d{5}", "7(?:509\\d|7(?:00[378]|97[7-9])|829\\d|937\\d)\\d{5}", "80(?:07(?:35|81)|8901)\\d{4}", "(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}", "701511\\d{4}", null, "3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}", "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "56\\d{8}", "8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}"]], JM: ["1", "[589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "876"], JO: ["962", "[235-9]\\d{7,8}", [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(7)(\\d{4})(\\d{4})", "$1 $2 $3", ["7[457-9]"]], ["(\\d{2})(\\d{7})", "$1 $2", ["70"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["8[0158]|9"]]], "0", "0$1"], JP: ["81", "[1-9]\\d{8,9}|00(?:[36]\\d{7,14}|7\\d{5,7}|8\\d{7})", [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]0|80[1-9]"]], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)", "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])", "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93(?:31|4))"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:[34]7|[56]9|74|9[14-79])|82|993"]], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2479][1-9]"]]], "0", "0$1"], KE: ["254", "20\\d{6,7}|[4-9]\\d{6,9}", [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["7"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"]]], "0", "0$1", "005|0"], KG: ["996", "[235-8]\\d{8,9}", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[25-7]|31[25]"]], ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[36]|[2-9])"]], ["(\\d{3})(\\d{3})(\\d)(\\d{3})", "$1 $2 $3 $4", ["8"]]], "0", "0$1"], KH: ["855", "[1-9]\\d{7,9}", [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1\\d[1-9]|[2-9]"], "0$1"], ["(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[89]0", "1[89]00"]]], "0"], KI: ["686", "[2458]\\d{4}|3\\d{4,7}|[67]\\d{7}", [], null, null, "0"], KM: ["269", "[3478]\\d{6}", [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"]]], KN: ["1", "[589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "869"], KP: ["850", "1\\d{9}|[28]\\d{7}", [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]], "0", "0$1"], KR: ["82", "00(?:3\\d{8,9}|7\\d{9,11})|[1-7]\\d{4,9}|8\\d{8}", [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"]], ["(\\d{4})(\\d{4})", "$1-$2", ["1(?:5[246-9]|6[046-8]|8[03579])", "1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"], "$1"], ["(\\d{5})", "$1", ["1[016-9]1", "1[016-9]11", "1[016-9]114"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2[1-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60[2-9]|80"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]0"]]], "0", "0$1", "0(8[1-46-8]|85\\d{2})?"], KW: ["965", "[12569]\\d{6,7}", [["(\\d{4})(\\d{3,4})", "$1 $2", ["[16]|2(?:[0-35-9]|4[0-35-9])|52[25]|9[024-9]"]], ["(\\d{3})(\\d{5})", "$1 $2", ["244|5(?:[015]|6[56])"]]]], KY: ["1", "[3589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "345"], KZ: ["7", "(?:33\\d|7\\d{2}|80[089])\\d{7}", [["([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"]], ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]], "8", null, null, null, null, null, ["33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}", "7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\d{7}", "800\\d{7}", "809\\d{7}", "808\\d{7}", null, null, null, "751\\d{7}"]], LA: ["856", "[2-8]\\d{7,9}", [["(20)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["([2-8]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"]], ["(30)(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30"]]], "0", "0$1"], LB: ["961", "[13-9]\\d{6,7}", [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["([7-9]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["7(?:[01]|6[013-9]|8[89]|9[1-3])|[89][01]"]]], "0"], LC: ["1", "[5789]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "758"], LI: ["423", "6\\d{8}|[23789]\\d{6}", [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[56]"]], ["(69)(7\\d{2})(\\d{4})", "$1 $2 $3", ["697"]]], "0", null, "0|10(?:01|20|66)"], LK: ["94", "[1-9]\\d{8}", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]], "0", "0$1"], LR: ["231", "2\\d{7,8}|[378]\\d{8}|4\\d{6}|5\\d{6,8}", [["(2\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["([4-5])(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"]]], "0", "0$1"], LS: ["266", "[2568]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2"]]], LT: ["370", "[3-9]\\d{7}", [["([34]\\d)(\\d{6})", "$1 $2", ["37|4(?:1|5[45]|6[2-4])"]], ["([3-6]\\d{2})(\\d{5})", "$1 $2", ["3[148]|4(?:[24]|6[09])|528|6"]], ["([7-9]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1"], ["(5)(2\\d{2})(\\d{4})", "$1 $2 $3", ["52[0-79]"]]], "8", "(8-$1)", "[08]", null, !0], LU: ["352", "[24-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5[013-9]\\d{1,8})", [["(\\d{2})(\\d{3})", "$1 $2", ["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})", "$1 $2 $3 $4", ["2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:0[2-9]|[1-9])|9(?:0[2-46-9]|[1-9])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["70|80[01]|90[015]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], null, null, "(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)"], LV: ["371", "[2689]\\d{7}", [["([2689]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2689]"]]]], LY: ["218", "[25679]\\d{8}", [["([25-79]\\d)(\\d{7})", "$1-$2", ["[25-79]"]]], "0", "0$1"], MA: ["212", "[5-9]\\d{8}", [["([5-7]\\d{2})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"]], ["([58]\\d{3})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|92)|892", "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"]], ["(5\\d{4})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"]], ["([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:4[067]|5[03])"]], ["(8[09])(\\d{7})", "$1-$2", ["8(?:0|9[013-9])"]]], "0", "0$1", null, null, null, null, ["5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\d|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])\\d|4[067]\\d{2}|5[03]\\d{2})\\d{4}", "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[07]))\\d{6}", "80\\d{7}", "89\\d{7}", null, null, null, null, "5924[01]\\d{4}"]], MC: ["377", "[34689]\\d{7,8}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"], "$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"]], ["(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"]], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["8"], "$1"]], "0", "0$1"], MD: ["373", "[235-9]\\d{7}", [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"]], ["([25-7]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["2[13-9]|[5-7]"]], ["([89]\\d{2})(\\d{5})", "$1 $2", ["[89]"]]], "0", "0$1"], ME: ["382", "[2-9]\\d{7,8}", [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]|6[036-9]"]]], "0", "0$1"], MF: ["590", "[56]\\d{8}", [["([56]\\d{2})(\\d{2})(\\d{4})", "$1 $2-$3", ["590|69[01]"]]], "0", null, null, null, null, null, ["590(?:0[079]|13|2[79]|30|43|5[0-268]|7[79]|87)\\d{4}", "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"]], MG: ["261", "[23]\\d{8}", [["([23]\\d)(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"]]], "0", "0$1"], MH: ["692", "[2-6]\\d{6}", [["(\\d{3})(\\d{4})", "$1-$2"]], "1"], MK: ["389", "[2-578]\\d{7}", [["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]], ["([347]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"]], ["([58]\\d{2})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"]]], "0", "0$1"], ML: ["223", "[246-9]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[246-9]"]]]], MM: ["95", "[178]\\d{5,7}|[24-6]\\d{5,8}|9(?:[279]\\d{0,2}|5|[34]\\d{1,2}|6(?:\\d{1,2})?|8(?:\\d{2})?)\\d{6}", [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1|2[245]"]], ["(2)(\\d{4})(\\d{4})", "$1 $2 $3", ["251"]], ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"]], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["432|67|81"]], ["(\\d{2})(\\d{2})(\\d{3,4})", "$1 $2 $3", ["[4-8]"]], ["(9)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"]], ["(9)([34]\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:3[0-36]|4[0-57-9])"]], ["(9)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92[56]"]], ["(9)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["93"]]], "0", "0$1"], MN: ["976", "[12]\\d{7,9}|[57-9]\\d{7}", [["([12]\\d)(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"]], ["([12]2\\d)(\\d{5,6})", "$1 $2", ["[12]2[1-3]"]], ["([12]\\d{3})(\\d{5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"], "$1"], ["([12]\\d{4})(\\d{4,5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)[4-9]"]]], "0", "0$1"], MO: ["853", "[268]\\d{7}", [["([268]\\d{3})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "[5689]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "670"], MQ: ["596", "[56]\\d{8}", [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]], "0", "0$1"], MR: ["222", "[2-48]\\d{7}", [["([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "[5689]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "664"], MT: ["356", "[2357-9]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2"]]], MU: ["230", "[2-9]\\d{6,7}", [["([2-46-9]\\d{2})(\\d{4})", "$1 $2", ["[2-46-9]"]], ["(5\\d{3})(\\d{4})", "$1 $2", ["5"]]]], MV: ["960", "[346-8]\\d{6,9}|9(?:00\\d{7}|\\d{6})", [["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]00"]]]], MW: ["265", "(?:1(?:\\d{2})?|[2789]\\d{2})\\d{6}", [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[17-9]"]]], "0", "0$1"], MX: ["52", "[1-9]\\d{9,10}", [["([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["33|55|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"]], ["(1)([358]\\d)(\\d{4})(\\d{4})", "044 $2 $3 $4", ["1(?:33|55|81)"], "$1", null, "$1 $2 $3 $4"], ["(1)(\\d{3})(\\d{3})(\\d{4})", "044 $2 $3 $4", ["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"], "$1", null, "$1 $2 $3 $4"]], "01", "01 $1", "0[12]|04[45](\\d{10})", "1$1", !0], MY: ["60", "[13-9]\\d{7,9}", [["([4-79])(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(3)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["([18]\\d)(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1[02-46-9][1-9]|8"], "0$1"], ["(1)([36-8]00)(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]0", "1[36-8]00"]], ["(11)(\\d{4})(\\d{4})", "$1-$2 $3", ["11"], "0$1"], ["(15[49])(\\d{3})(\\d{4})", "$1-$2 $3", ["15[49]"], "0$1"]], "0"], MZ: ["258", "[28]\\d{7,8}", [["([28]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]], ["(80\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]]]], NA: ["264", "[68]\\d{7,8}", [["(8\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["8[1-35]"]], ["(6\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"]], ["(88)(\\d{3})(\\d{3})", "$1 $2 $3", ["88"]], ["(870)(\\d{3})(\\d{3})", "$1 $2 $3", ["870"]]], "0", "0$1"], NC: ["687", "[2-57-9]\\d{5}", [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-46-9]|5[0-4]"]]]], NE: ["227", "[0289]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["09|[289]"]], ["(08)(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]]]], NF: ["672", "[13]\\d{5}", [["(\\d{2})(\\d{4})", "$1 $2", ["1"]], ["(\\d)(\\d{5})", "$1 $2", ["3"]]]], NG: ["234", "[1-6]\\d{5,8}|9\\d{5,9}|[78]\\d{5,13}", [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"]], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-6]|7(?:0[1-9]|[1-79])|8[2-9]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["70|8[01]|90[235-9]"]], ["([78]00)(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]00"]], ["([78]00)(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]00"]], ["(78)(\\d{2})(\\d{3})", "$1 $2 $3", ["78"]]], "0", "0$1"], NI: ["505", "[125-8]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2"]]], NL: ["31", "1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}", [["([1-578]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"]], ["([1-5]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"]], ["(6)(\\d{8})", "$1 $2", ["6[0-57-9]"]], ["(66)(\\d{7})", "$1 $2", ["66"]], ["(14)(\\d{3,4})", "$1 $2", ["14"], "$1"], ["([89]0\\d)(\\d{4,7})", "$1 $2", ["[89]0"]]], "0", "0$1"], NO: ["47", "0\\d{4}|[2-9]\\d{7}", [["([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]], ["([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]], null, null, null, null, null, null, ["(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", "(?:4[015-8]|5[89]|87|9\\d)\\d{6}", "80[01]\\d{5}", "82[09]\\d{5}", "880\\d{5}", null, "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", null, "85[0-5]\\d{5}", "810(?:0[0-6]|[2-8]\\d)\\d{3}"]], NP: ["977", "[1-8]\\d{7}|9(?:[1-69]\\d{6,8}|7[2-6]\\d{5,7}|8\\d{8})", [["(1)(\\d{7})", "$1-$2", ["1[2-6]"]], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-69]|7[15-9])"]], ["(9\\d{2})(\\d{7})", "$1-$2", ["9(?:6[013]|7[245]|8)"], "$1"]], "0", "0$1"], NR: ["674", "[458]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]], NU: ["683", "[1-5]\\d{3}"], NZ: ["64", "6[235-9]\\d{6}|[2-57-9]\\d{7,9}", [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["240|[346]|7[2-57-9]|9[1-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["21"]], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:1[1-9]|[69]|7[0-35-9])|70|86"]], ["(2\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["90"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|5|[89]0"]]], "0", "0$1"], OM: ["968", "(?:5|[279]\\d)\\d{6}|800\\d{5,6}", [["(2\\d)(\\d{6})", "$1 $2", ["2"]], ["([79]\\d{3})(\\d{4})", "$1 $2", ["[79]"]], ["([58]00)(\\d{4,6})", "$1 $2", ["[58]00"]]]], PA: ["507", "[1-9]\\d{6,7}", [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["6"]]]], PE: ["51", "[14-9]\\d{7,8}", [["(1)(\\d{7})", "$1 $2", ["1"]], ["([4-8]\\d)(\\d{6})", "$1 $2", ["[4-7]|8[2-4]"]], ["(\\d{3})(\\d{5})", "$1 $2", ["80"]], ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "$1"]], "0", "(0$1)"], PF: ["689", "4\\d{5,7}|8\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[09]|8[79]"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]]]], PG: ["675", "[1-9]\\d{6,7}", [["(\\d{3})(\\d{4})", "$1 $2", ["[13-689]|27"]], ["(\\d{4})(\\d{4})", "$1 $2", ["20|7"]]]], PH: ["63", "1\\d{10,12}|2\\d{5,7}|[3-7]\\d{8}|8\\d{7,9}|9\\d{9}", [["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(2)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["([3-8]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["81|9"], "0$1"], ["(1800)(\\d{3})(\\d{4})", "$1 $2 $3", ["180", "1800"]], ["(1800)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["180", "1800"]]], "0"], PK: ["92", "1\\d{8}|[2-8]\\d{5,11}|9(?:[013-9]\\d{4,10}|2\\d(?:111\\d{6}|\\d{3,7}))", [["([89]00)(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]00"], "0$1"], ["(1\\d{3})(\\d{5})", "$1 $2", ["1"], "$1"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2[349]|45|54|60|72|8[2-5]|9[2-469]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-469])\\d[2-9]"]], ["(58\\d{3})(\\d{5})", "$1 $2", ["58[126]"]], ["(3\\d{2})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"]], ["(\\d{3})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[349]|45|54|60|72|8[2-5]|9[2-9]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"]]], "0", "(0$1)"], PL: ["48", "[1-57-9]\\d{6,8}|6\\d{5,8}", [["(\\d{3})(\\d{3})", "$1 $2", ["11[68]|64"]], ["(\\d{5})", "$1", ["19"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["26|39|45|5[0137]|6[0469]|7[02389]|8[08]"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]]]], PM: ["508", "[45]\\d{5}", [["([45]\\d)(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"]]], "0", "0$1"], PR: ["1", "[5789]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "787|939"], PS: ["970", "1\\d{9}|[24589]\\d{7,8}", [["([2489])(2\\d{2})(\\d{4})", "$1 $2 $3", ["[2489]2"]], ["(5[69]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["5[69]"]], ["(1[78]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[78]0", "1[78]00"], "$1"]], "0", "0$1"], PT: ["351", "[2-46-9]\\d{8}", [["(2\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["([2-46-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[3-9]|[346-9]"]]]], PW: ["680", "[2-8]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]], PY: ["595", "5[0-5]\\d{4,7}|[2-46-9]\\d{5,8}", [["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["9[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["870", "8700"]], ["(\\d{3})(\\d{4,5})", "$1 $2", ["[2-8][1-9]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8][1-9]"], "0$1"]], "0"], QA: ["974", "[2-8]\\d{6,7}", [["([28]\\d{2})(\\d{4})", "$1 $2", ["[28]"]], ["([3-7]\\d{3})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "[268]\\d{8}", [["([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"]]], "0", "0$1", null, null, null, "262|69|8"], RO: ["40", "[23]\\d{5,8}|[7-9]\\d{8}", [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"]], ["(\\d{2})(\\d{4})", "$1 $2", ["[23]1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23][3-7]|[7-9]"]], ["(2\\d{2})(\\d{3})", "$1 $2", ["2[3-6]"]]], "0", "0$1"], RS: ["381", "[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})", [["([23]\\d{2})(\\d{4,9})", "$1 $2", ["(?:2[389]|39)0"]], ["([1-3]\\d)(\\d{5,10})", "$1 $2", ["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"]], ["(6\\d)(\\d{6,8})", "$1 $2", ["6"]], ["([89]\\d{2})(\\d{3,9})", "$1 $2", ["[89]"]], ["(7[26])(\\d{4,9})", "$1 $2", ["7[26]"]], ["(7[08]\\d)(\\d{4,9})", "$1 $2", ["7[08]"]]], "0", "0$1"], RU: ["7", "[347-9]\\d{9}", [["([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"]], ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]], "8", "8 ($1)", null, null, !0, null, ["(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}", "9\\d{9}", "80[04]\\d{7}", "80[39]\\d{7}", "808\\d{7}"]], RW: ["250", "[027-9]\\d{7,8}", [["(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["([7-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(0\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]], "0"], SA: ["966", "1\\d{7,8}|(?:[2-467]|92)\\d{7}|5\\d{8}|8\\d{9}", [["([1-467])(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-467]"]], ["(1\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[1-467]"]], ["(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"]], ["(92\\d{2})(\\d{5})", "$1 $2", ["92"], "$1"], ["(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["800"], "$1"], ["(811)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["811"]]], "0", "0$1"], SB: ["677", "[1-9]\\d{4,6}", [["(\\d{2})(\\d{5})", "$1 $2", ["[7-9]"]]]], SC: ["248", "[24689]\\d{5,6}", [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]]], SD: ["249", "[19]\\d{8}", [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3"]], "0", "0$1"], SE: ["46", "[1-35-9]\\d{5,11}|4\\d{6,8}", [["(8)(\\d{2,3})(\\d{2,3})(\\d{2})", "$1-$2 $3 $4", ["8"], null, null, "$1 $2 $3 $4"], ["([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"], null, null, "$1 $2 $3 $4"], ["([1-469]\\d)(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90"], null, null, "$1 $2 $3"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"], null, null, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"], null, null, "$1 $2 $3"], ["(7\\d)(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], null, null, "$1 $2 $3 $4"], ["(77)(\\d{2})(\\d{2})", "$1-$2$3", ["77"], null, null, "$1 $2 $3"], ["(20)(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], null, null, "$1 $2 $3"], ["(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9[034]"], null, null, "$1 $2 $3 $4"], ["(9[034]\\d)(\\d{4})", "$1-$2", ["9[034]"], null, null, "$1 $2"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["25[245]|67[3-6]"], null, null, "$1 $2 $3 $4 $5"]], "0", "0$1"], SG: ["65", "[36]\\d{7}|[17-9]\\d{7,10}", [["([3689]\\d{3})(\\d{4})", "$1 $2", ["[369]|8[1-9]"]], ["(1[89]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[89]0", "1[89]00"]], ["(7000)(\\d{4})(\\d{3})", "$1 $2 $3", ["700", "7000"]], ["(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["800"]]]], SH: ["290", "[256]\\d{4}|8\\d{3}", [], null, null, null, null, null, null, ["2(?:[0-57-9]\\d|6[4-9])\\d{2}", "[56]\\d{4}", null, null, null, null, null, null, "262\\d{2}"]], SI: ["386", "[1-7]\\d{6,7}|[89]\\d{4,7}", [["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|[34][24-8]|5[2-8]|7[3-8]"], "(0$1)"], ["([3-7]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"]], ["([89][09])(\\d{3,6})", "$1 $2", ["[89][09]"]], ["([58]\\d{2})(\\d{5})", "$1 $2", ["59|8[1-3]"]]], "0", "0$1"], SJ: ["47", "0\\d{4}|[45789]\\d{7}", [["([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]], ["([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]], null, null, null, null, null, null, ["79\\d{6}", "(?:4[015-8]|5[89]|9\\d)\\d{6}", "80[01]\\d{5}", "82[09]\\d{5}", "880\\d{5}", null, "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", null, "85[0-5]\\d{5}", "810(?:0[0-6]|[2-8]\\d)\\d{3}"]], SK: ["421", "(?:[2-68]\\d{5,8}|9\\d{6,8})", [["(2)(1[67])(\\d{3,4})", "$1 $2 $3", ["21[67]"]], ["([3-5]\\d)(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5]"]], ["(2)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"]], ["([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"]], ["([689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"]], ["(9090)(\\d{3})", "$1 $2", ["909", "9090"]]], "0", "0$1"], SL: ["232", "[2-9]\\d{7}", [["(\\d{2})(\\d{6})", "$1 $2"]], "0", "(0$1)"], SM: ["378", "[05-7]\\d{7,9}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(0549)(\\d{6})", "$1 $2", ["054", "0549"], null, null, "($1) $2"], ["(\\d{6})", "0549 $1", ["[89]"], null, null, "(0549) $1"]], null, null, "([89]\\d{5})", "0549$1"], SN: ["221", "[3789]\\d{8}", [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], SO: ["252", "[1-9]\\d{5,8}", [["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[13-5]|2[0-79]"]], ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]], ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["15|28|6[1-35-9]|799|9[2-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3[59]|4[89]|6[24-6]|79|8[08]|90"]]], "0"], SR: ["597", "[2-8]\\d{5,6}", [["(\\d{3})(\\d{3})", "$1-$2", ["[2-4]|5[2-58]"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]], SS: ["211", "[19]\\d{8}", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", null, "0$1"]], "0"], ST: ["239", "[29]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]], SV: ["503", "[267]\\d{7}|[89]\\d{6}(?:\\d{4})?", [["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "[5789]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "721"], SY: ["963", "[1-59]\\d{7,8}", [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"]], ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", "0$1", null, null, !0], SZ: ["268", "[027]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2", ["[027]"]]]], TA: ["290", "8\\d{3}", [], null, null, null, null, null, null, ["8\\d{3}"]], TC: ["1", "[5689]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "649"], TD: ["235", "[2679]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]], TG: ["228", "[279]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "1\\d{8,9}|[2-9]\\d{7,8}", [["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]], ["([13-9]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"]], ["(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[89]0", "1[89]00"], "$1"]], "0", "0$1"], TJ: ["992", "[3-57-9]\\d{8}", [["([349]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"]], ["([457-9]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[148]|[578]|9(?:[0235-9]|1[59])"]], ["(331700)(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317", "33170", "331700"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]", "3(?:[1245]|3(?:[02-9]|1[0-589]))"]]], "8", null, null, null, !0], TK: ["690", "[2-47]\\d{3,6}"], TL: ["670", "[2-489]\\d{6}|7\\d{6,7}", [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7[3-8]"]]]], TM: ["993", "[1-6]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"]], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["13|[2-5]"]]], "8", "(8 $1)"], TN: ["216", "[2-57-9]\\d{7}", [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3"]]], TO: ["676", "[02-8]\\d{4,6}", [["(\\d{2})(\\d{3})", "$1-$2", ["[1-6]|7[0-4]|8[05]"]], ["(\\d{3})(\\d{4})", "$1 $2", ["7[5-9]|8[47-9]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]]]], TR: ["90", "[2-589]\\d{9}|444\\d{4}", [["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4(?:[0-35-9]|4[0-35-9])"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[02-69]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["51|[89]"], "0$1"], ["(444)(\\d{1})(\\d{3})", "$1 $2 $3", ["444"]]], "0", null, null, null, !0], TT: ["1", "[589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "868"], TV: ["688", "[279]\\d{4,6}"], TW: ["886", "2\\d{6,8}|[3-689]\\d{7,8}|7\\d{7,9}", [["(20)(\\d)(\\d{4})", "$1 $2 $3", ["202"]], ["([258]0)(\\d{3})(\\d{4})", "$1 $2 $3", ["20[013-9]|50[0-46-9]|80[0-79]"]], ["([2-8])(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[25][2-8]|[346]|[78][1-9]"]], ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]], ["(70)(\\d{4})(\\d{4})", "$1 $2 $3", ["70"]]], "0", "0$1"], TZ: ["255", "\\d{9}", [["([24]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"]], ["([67]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"]], ["([89]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"]]], "0", "0$1"], UA: ["380", "[3-9]\\d{8}", [["([3-9]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[38]9|4(?:[45][0-5]|87)|5(?:0|[67][37])|6[36-8]|7|9[1-9]", "[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]"]], ["([3-689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90", "3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90"]], ["([3-6]\\d{3})(\\d{5})", "$1 $2", ["3(?:[1-46-8]|5[013-9])|4(?:[137][013-9]|[45][6-9]|6|8[4-6])|5(?:[1245][013-9]|3|6[0135689]|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])", "3(?:[1-46-8](?:[013-9]|22)|5[013-9])|4(?:[137][013-9]|[45][6-9]|6(?:[013-9]|22)|8[4-6])|5(?:[1245][013-9]|3|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])"]]], "0", "0$1"], UG: ["256", "\\d{9}", [["(\\d{3})(\\d{6})", "$1 $2", ["20[0-8]|4(?:6[45]|[7-9])|[7-9]", "20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"]], ["(\\d{2})(\\d{7})", "$1 $2", ["3|4(?:[1-5]|6[0-36-9])"]], ["(2024)(\\d{5})", "$1 $2", ["202", "2024"]]], "0", "0$1"], US: ["1", "[2-9]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, !0, null, ["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-258]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}", null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", "900[2-9]\\d{6}", "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}"]], UY: ["598", "[2489]\\d{6,7}", [["(\\d{4})(\\d{4})", "$1 $2", ["[24]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9[1-9]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["[89]0"], "0$1"]], "0"], UZ: ["998", "[679]\\d{8}", [["([679]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[679]"]]], "8", "8 $1"], VA: ["39", "(?:0(?:878\\d{5}|6698\\d{5})|[1589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9}))", [["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|55"]], ["(0[26])(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(0[26])(\\d{4,6})", "$1 $2", ["0[26]"]], ["(0\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]], ["(0\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["0[13-57-9][2-46-8]"]], ["(0\\d{3})(\\d{2,6})", "$1 $2", ["0[13-57-9][2-46-8]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13]|8(?:00|4[08]|9[59])", "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894", "894[5-9]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]]], null, null, null, null, null, null, ["06698\\d{5}", "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})", "80(?:0\\d{6}|3\\d{3})", "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})", "1(?:78\\d|99)\\d{6}", null, null, null, "55\\d{8}", "84(?:[08]\\d{6}|[17]\\d{3})"]], VC: ["1", "[5789]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "784"], VE: ["58", "[24589]\\d{9}", [["(\\d{3})(\\d{7})", "$1-$2"]], "0", "0$1"], VG: ["1", "[2589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "284"], VI: ["1", "[3589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "340"], VN: ["84", "1\\d{6,9}|2\\d{9}|6\\d{6,7}|7\\d{6}|8\\d{6,8}|9\\d{8}", [["([17]99)(\\d{4})", "$1 $2", ["[17]99"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"]], ["(80)(\\d{5})", "$1 $2", ["80"]], ["(69\\d)(\\d{4,5})", "$1 $2", ["69"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2[0-35-79]"]], ["([89]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8(?:8|9[89])|9"]], ["(1[2689]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[26]|8[68]|99)"]], ["(86[89])(\\d{3})(\\d{3})", "$1 $2 $3", ["86[89]"]], ["(1[89]00)(\\d{4,6})", "$1 $2", ["1[89]0", "1[89]00"], "$1"]], "0", "0$1", null, null, !0], VU: ["678", "[2-57-9]\\d{4,6}", [["(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]]], WF: ["681", "[4-8]\\d{5}", [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3"]]], WS: ["685", "[2-8]\\d{4,6}", [["(8\\d{2})(\\d{3,4})", "$1 $2", ["8"]], ["(7\\d)(\\d{5})", "$1 $2", ["7"]], ["(\\d{5})", "$1", ["[2-6]"]]]], YE: ["967", "[1-7]\\d{6,8}", [["([1-7])(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"]], ["(7\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7[0137]"]]], "0", "0$1"], YT: ["262", "[268]\\d{8}", [["([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"]]], "0", null, null, null, null, "269|63"], ZA: ["27", "[1-79]\\d{8}|8\\d{4,8}", [["(860)(\\d{3})(\\d{3})", "$1 $2 $3", ["860"]], ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"]], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-79]|8(?:[0-57]|6[1-9])"]]], "0", "0$1"], ZM: ["260", "[289]\\d{8}", [["(\\d{2})(\\d{4})", "$1 $2", null, "$1"], ["([1-8])(\\d{2})(\\d{4})", "$1 $2 $3", ["[1-8]"], "$1"], ["([29]\\d)(\\d{7})", "$1 $2", ["[29]"]], ["(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["800"]]], "0", "0$1"], ZW: ["263", "2(?:[0-57-9]\\d{3,8}|6(?:[14]\\d{7}|\\d{4}))|[13-69]\\d{4,9}|7\\d{8}|8[06]\\d{5,8}", [["([49])(\\d{3})(\\d{2,4})", "$1 $2 $3", ["4|9[2-9]"]], ["(7\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]], ["(86\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["86[24]"]], ["([2356]\\d{2})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|7[1569]|8[37])|5[15][78]|6(?:[29]8|37|[68][78]|75)"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|31|[56][14]|7[35]|84)|329"]], ["([1-356]\\d)(\\d{3,5})", "$1 $2", ["1[3-9]|2[02569]|3[0-69]|5[05689]|6"]], ["([235]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[23]9|54"]], ["([25]\\d{3})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258[23]|5483"]], ["(8\\d{3})(\\d{6})", "$1 $2", ["86"]], ["(80\\d)(\\d{4})", "$1 $2", ["80"]]], "0", "0$1"], "001": ["979", "\\d{9}", [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]]] } };
  }, function (t, e, n) {
    t.exports = { default: n(74), __esModule: !0 };
  }, function (t, e, n) {
    n(75), t.exports = n(8).Object.assign;
  }, function (t, e, n) {
    var r = n(25);r(r.S + r.F, "Object", { assign: n(80) });
  }, function (t, e, n) {
    var r = n(77);t.exports = function (t, e, n) {
      if (r(t), void 0 === e) return t;switch (n) {case 1:
          return function (n) {
            return t.call(e, n);
          };case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };case 3:
          return function (n, r, i) {
            return t.call(e, n, r, i);
          };}return function () {
        return t.apply(e, arguments);
      };
    };
  }, function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");return t;
    };
  }, function (t, e, n) {
    t.exports = !n(11) && !n(27)(function () {
      return 7 != Object.defineProperty(n(38)("div"), "a", { get: function get() {
          return 7;
        } }).a;
    });
  }, function (t, e, n) {
    var r = n(26);t.exports = function (t, e) {
      if (!r(t)) return t;var n, i;if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;throw TypeError("Can't convert object to primitive value");
    };
  }, function (t, e, n) {
    "use strict";
    var r = n(40),
        i = n(85),
        o = n(86),
        a = n(46),
        s = n(41),
        d = Object.assign;t.exports = !d || n(27)(function () {
      var t = {},
          e = {},
          n = Symbol(),
          r = "abcdefghijklmnopqrst";return t[n] = 7, r.split("").forEach(function (t) {
        e[t] = t;
      }), 7 != d({}, t)[n] || Object.keys(d({}, e)).join("") != r;
    }) ? function (t, e) {
      for (var n = a(t), d = arguments.length, u = 1, l = i.f, c = o.f; d > u;) {
        for (var f, h = s(arguments[u++]), $ = l ? r(h).concat(l(h)) : r(h), p = $.length, _ = 0; p > _;) {
          c.call(h, f = $[_++]) && (n[f] = h[f]);
        }
      }return n;
    } : d;
  }, function (t, e, n) {
    var r = n(17),
        i = n(28),
        o = n(82)(!1),
        a = n(31)("IE_PROTO");t.exports = function (t, e) {
      var n,
          s = i(t),
          d = 0,
          u = [];for (n in s) {
        n != a && r(s, n) && u.push(n);
      }for (; e.length > d;) {
        r(s, n = e[d++]) && (~o(u, n) || u.push(n));
      }return u;
    };
  }, function (t, e, n) {
    var r = n(28),
        i = n(83),
        o = n(84);t.exports = function (t) {
      return function (e, n, a) {
        var s,
            d = r(e),
            u = i(d.length),
            l = o(a, u);if (t && n != n) {
          for (; u > l;) {
            if ((s = d[l++]) != s) return !0;
          }
        } else for (; u > l; l++) {
          if ((t || l in d) && d[l] === n) return t || l || 0;
        }return !t && -1;
      };
    };
  }, function (t, e, n) {
    var r = n(30),
        i = Math.min;t.exports = function (t) {
      return t > 0 ? i(r(t), 9007199254740991) : 0;
    };
  }, function (t, e, n) {
    var r = n(30),
        i = Math.max,
        o = Math.min;t.exports = function (t, e) {
      return t = r(t), t < 0 ? i(t + e, 0) : o(t, e);
    };
  }, function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  }, function (t, e) {
    e.f = {}.propertyIsEnumerable;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }e.__esModule = !0;var i = n(88),
        o = r(i),
        a = n(18),
        s = r(a);e.default = function () {
      function t(t, e) {
        var n = [],
            r = !0,
            i = !1,
            o = void 0;try {
          for (var a, d = (0, s.default)(t); !(r = (a = d.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {}
        } catch (t) {
          i = !0, o = t;
        } finally {
          try {
            !r && d.return && d.return();
          } finally {
            if (i) throw o;
          }
        }return n;
      }return function (e, n) {
        if (Array.isArray(e)) return e;if ((0, o.default)(Object(e))) return t(e, n);throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }();
  }, function (t, e, n) {
    t.exports = { default: n(89), __esModule: !0 };
  }, function (t, e, n) {
    n(47), n(50), t.exports = n(101);
  }, function (t, e, n) {
    "use strict";
    var r = n(91),
        i = n(92),
        o = n(12),
        a = n(28);t.exports = n(48)(Array, "Array", function (t, e) {
      this._t = a(t), this._i = 0, this._k = e;
    }, function () {
      var t = this._t,
          e = this._k,
          n = this._i++;return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]]);
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
  }, function (t, e) {
    t.exports = function () {};
  }, function (t, e) {
    t.exports = function (t, e) {
      return { value: e, done: !!t };
    };
  }, function (t, e) {
    t.exports = !0;
  }, function (t, e, n) {
    t.exports = n(10);
  }, function (t, e, n) {
    "use strict";
    var r = n(96),
        i = n(39),
        o = n(49),
        a = {};n(10)(a, n(4)("iterator"), function () {
      return this;
    }), t.exports = function (t, e, n) {
      t.prototype = r(a, { next: i(1, n) }), o(t, e + " Iterator");
    };
  }, function (t, e, n) {
    var r = n(16),
        i = n(97),
        o = n(45),
        a = n(31)("IE_PROTO"),
        s = function s() {},
        _d = function d() {
      var t,
          e = n(38)("iframe"),
          r = o.length;for (e.style.display = "none", n(98).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), _d = t.F; r--;) {
        delete _d.prototype[o[r]];
      }return _d();
    };t.exports = Object.create || function (t, e) {
      var n;return null !== t ? (s.prototype = r(t), n = new s(), s.prototype = null, n[a] = t) : n = _d(), void 0 === e ? n : i(n, e);
    };
  }, function (t, e, n) {
    var r = n(15),
        i = n(16),
        o = n(40);t.exports = n(11) ? Object.defineProperties : function (t, e) {
      i(t);for (var n, a = o(e), s = a.length, d = 0; s > d;) {
        r.f(t, n = a[d++], e[n]);
      }return t;
    };
  }, function (t, e, n) {
    var r = n(7).document;t.exports = r && r.documentElement;
  }, function (t, e, n) {
    var r = n(17),
        i = n(46),
        o = n(31)("IE_PROTO"),
        a = Object.prototype;t.exports = Object.getPrototypeOf || function (t) {
      return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
    };
  }, function (t, e, n) {
    var r = n(30),
        i = n(29);t.exports = function (t) {
      return function (e, n) {
        var o,
            a,
            s = String(i(e)),
            d = r(n),
            u = s.length;return d < 0 || d >= u ? t ? "" : void 0 : (o = s.charCodeAt(d), o < 55296 || o > 56319 || d + 1 === u || (a = s.charCodeAt(d + 1)) < 56320 || a > 57343 ? t ? s.charAt(d) : o : t ? s.slice(d, d + 2) : a - 56320 + (o - 55296 << 10) + 65536);
      };
    };
  }, function (t, e, n) {
    var r = n(51),
        i = n(4)("iterator"),
        o = n(12);t.exports = n(8).isIterable = function (t) {
      var e = Object(t);return void 0 !== e[i] || "@@iterator" in e || o.hasOwnProperty(r(e));
    };
  }, function (t, e, n) {
    n(47), n(50), t.exports = n(103);
  }, function (t, e, n) {
    var r = n(16),
        i = n(104);t.exports = n(8).getIterator = function (t) {
      var e = i(t);if ("function" != typeof e) throw TypeError(t + " is not iterable!");return r(e.call(t));
    };
  }, function (t, e, n) {
    var r = n(51),
        i = n(4)("iterator"),
        o = n(12);t.exports = n(8).getIteratorMethod = function (t) {
      if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)];
    };
  }, function (t, e, n) {
    "use strict";
    e.__esModule = !0, e.default = function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    };
  }, function (t, e, n) {
    "use strict";
    e.__esModule = !0;var r = n(107),
        i = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(r);e.default = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, i.default)(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }();
  }, function (t, e, n) {
    t.exports = { default: n(108), __esModule: !0 };
  }, function (t, e, n) {
    n(109);var r = n(8).Object;t.exports = function (t, e, n) {
      return r.defineProperty(t, e, n);
    };
  }, function (t, e, n) {
    var r = n(25);r(r.S + r.F * !n(11), "Object", { defineProperty: n(15).f });
  }, function (t, e, n) {
    "use strict";
    for (var r = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1684"], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1264"], ["Antigua and Barbuda", "ag", "1268"], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1242"], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1246"], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1441"], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1284"], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1], ["Cayman Islands", "ky", "1345"], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2], ["Cocos (Keeling) Islands", "cc", "61", 1], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1767"], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1473"], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1876"], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Macedonia (FYROM) (Македонија)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1664"], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["Northern Mariana Islands", "mp", "1670"], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1721"], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1], ["Swaziland", "sz", "268"], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1868"], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1649"], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1340"], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1]], i = 0; i < r.length; i += 1) {
      var o = r[i];r[i] = { name: o[0], iso2: o[1].toUpperCase(), dialCode: o[2], priority: o[3] || 0, areaCodes: o[4] || null, icon: "https://raw.githubusercontent.com/behdad/region-flags/gh-pages/png/" + o[1].toUpperCase() + ".png" };
    }e.a = r;
  }, function (t, e, n) {
    "use strict";
    var r = n(112),
        i = function i() {
      return new Promise(function (t, e) {
        r("https://ipinfo.io/json", function (n, r) {
          n && e(n), t(r && r.country);
        });
      });
    };e.a = i;
  }, function (t, e, n) {
    var r = n(113);t.exports = n(r ? 114 : 151);
  }, function (t, e, n) {
    (function (e) {
      t.exports = !(void 0 === e || !e.versions || !e.versions.node);
    }).call(e, n(1));
  }, function (t, e, n) {
    function r(t, e) {
      i({ url: t }, function (t, n) {
        if (t) return void e(t);try {
          var r = JSON.parse(n.body);
        } catch (t) {
          return void e("Parse error: " + t);
        }if (200 != n.statusCode) return void e("Unexpected response code.");e(null, r);
      });
    }var i = n(115);t.exports = r;
  }, function (t, e, n) {
    "use strict";
    (function (e) {
      var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      },
          i = n(55),
          o = n(134),
          a = n(34),
          s = n(62),
          d = n(135),
          u = n(35),
          l = function l(t, n) {
        if ("string" != typeof t && !t.hasOwnProperty("url")) throw new Error("Missing url option from options for request method.");var u = "object" === (void 0 === t ? "undefined" : r(t)) ? a.parse(t.url) : a.parse(t),
            l = { hostname: u.hostname, port: u.port || ("http:" === u.protocol.toLowerCase() ? 80 : 443), path: u.path, method: "GET", headers: {}, auth: u.auth || null, timeout: null, parse: "none", stream: !1 };if ("object" === (void 0 === t ? "undefined" : r(t)) && (l = Object.assign(l, t)), l.port = Number(l.port), !0 === l.compressed && (l.headers["accept-encoding"] = "gzip, deflate"), t.hasOwnProperty("form")) {
          if ("object" !== r(t.form)) throw new Error("phin 'form' option must be of type Object if present.");var c = s.stringify(t.form);l.headers["Content-Type"] = "application/x-www-form-urlencoded", l.headers["Content-Length"] = e.byteLength(c), t.data = c;
        }var f = void 0,
            h = function h(t) {
          var r = t;!0 === l.compressed && ("gzip" === t.headers["content-encoding"] ? r = t.pipe(d.createGunzip()) : "deflate" === t.headers["content-encoding"] && (r = t.pipe(d.createInflate()))), !0 === l.stream ? (t.stream = r, n(null, t)) : (t.body = new e([]), r.on("data", function (n) {
            t.body = e.concat([t.body, n]);
          }), r.on("end", function () {
            if (n) {
              if ("json" === l.parse) try {
                t.body = JSON.parse(t.body.toString());
              } catch (e) {
                return void n("Invalid JSON received.", t);
              }n(null, t);
            }
          }));
        };switch (u.protocol.toLowerCase()) {case "http:":
            f = i.request(l, h);break;case "https:":
            f = o.request(l, h);break;default:
            return void (n && n(new Error("Invalid / unknown URL protocol. Expected HTTP or HTTPS."), null));}if ("number" == typeof l.timeout && f.setTimeout(l.timeout, function () {
          f.abort(), n(new Error("Timeout has been reached."), null), n = null;
        }), f.on("error", function (t) {
          n && n(t, null);
        }), t.hasOwnProperty("data")) {
          var $ = t.data;if (!(t.data instanceof e) && "object" === r(t.data)) {
            if ("application/x-www-form-urlencoded" === (l.headers["content-type"] || l.headers["Content-Type"])) $ = s.stringify(t.data);else try {
              $ = JSON.stringify(t.data);
            } catch (t) {
              n(new Error("Couldn't stringify object. (Likely due to a circular reference.)"), null);
            }
          }f.write($);
        }f.end();
      };l.promisified = function (t, e) {
        return new Promise(function (e, n) {
          l(t, function (t, r) {
            t ? n(t) : e(r);
          });
        });
      }, u.promisify && (l[u.promisify.custom] = l.promisified), t.exports = l;
    }).call(e, n(2).Buffer);
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      var e = t.length;if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0;
    }function i(t) {
      return 3 * t.length / 4 - r(t);
    }function o(t) {
      var e,
          n,
          i,
          o,
          a,
          s = t.length;o = r(t), a = new c(3 * s / 4 - o), n = o > 0 ? s - 4 : s;var d = 0;for (e = 0; e < n; e += 4) {
        i = l[t.charCodeAt(e)] << 18 | l[t.charCodeAt(e + 1)] << 12 | l[t.charCodeAt(e + 2)] << 6 | l[t.charCodeAt(e + 3)], a[d++] = i >> 16 & 255, a[d++] = i >> 8 & 255, a[d++] = 255 & i;
      }return 2 === o ? (i = l[t.charCodeAt(e)] << 2 | l[t.charCodeAt(e + 1)] >> 4, a[d++] = 255 & i) : 1 === o && (i = l[t.charCodeAt(e)] << 10 | l[t.charCodeAt(e + 1)] << 4 | l[t.charCodeAt(e + 2)] >> 2, a[d++] = i >> 8 & 255, a[d++] = 255 & i), a;
    }function a(t) {
      return u[t >> 18 & 63] + u[t >> 12 & 63] + u[t >> 6 & 63] + u[63 & t];
    }function s(t, e, n) {
      for (var r, i = [], o = e; o < n; o += 3) {
        r = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2], i.push(a(r));
      }return i.join("");
    }function d(t) {
      for (var e, n = t.length, r = n % 3, i = "", o = [], a = 0, d = n - r; a < d; a += 16383) {
        o.push(s(t, a, a + 16383 > d ? d : a + 16383));
      }return 1 === r ? (e = t[n - 1], i += u[e >> 2], i += u[e << 4 & 63], i += "==") : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], i += u[e >> 10], i += u[e >> 4 & 63], i += u[e << 2 & 63], i += "="), o.push(i), o.join("");
    }e.byteLength = i, e.toByteArray = o, e.fromByteArray = d;for (var u = [], l = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = 0, $ = f.length; h < $; ++h) {
      u[h] = f[h], l[f.charCodeAt(h)] = h;
    }l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63;
  }, function (t, e) {
    e.read = function (t, e, n, r, i) {
      var o,
          a,
          s = 8 * i - r - 1,
          d = (1 << s) - 1,
          u = d >> 1,
          l = -7,
          c = n ? i - 1 : 0,
          f = n ? -1 : 1,
          h = t[e + c];for (c += f, o = h & (1 << -l) - 1, h >>= -l, l += s; l > 0; o = 256 * o + t[e + c], c += f, l -= 8) {}for (a = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; a = 256 * a + t[e + c], c += f, l -= 8) {}if (0 === o) o = 1 - u;else {
        if (o === d) return a ? NaN : 1 / 0 * (h ? -1 : 1);a += Math.pow(2, r), o -= u;
      }return (h ? -1 : 1) * a * Math.pow(2, o - r);
    }, e.write = function (t, e, n, r, i, o) {
      var a,
          s,
          d,
          u = 8 * o - i - 1,
          l = (1 << u) - 1,
          c = l >> 1,
          f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          h = r ? 0 : o - 1,
          $ = r ? 1 : -1,
          p = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = l) : (a = Math.floor(Math.log(e) / Math.LN2), e * (d = Math.pow(2, -a)) < 1 && (a--, d *= 2), e += a + c >= 1 ? f / d : f * Math.pow(2, 1 - c), e * d >= 2 && (a++, d /= 2), a + c >= l ? (s = 0, a = l) : a + c >= 1 ? (s = (e * d - 1) * Math.pow(2, i), a += c) : (s = e * Math.pow(2, c - 1) * Math.pow(2, i), a = 0)); i >= 8; t[n + h] = 255 & s, h += $, s /= 256, i -= 8) {}for (a = a << i | s, u += i; u > 0; t[n + h] = 255 & a, h += $, a /= 256, u -= 8) {}t[n + h - $] |= 128 * p;
    };
  }, function (t, e, n) {
    (function (e, r, i) {
      function o(t, e) {
        return s.fetch && e ? "fetch" : s.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : s.msstream ? "ms-stream" : s.arraybuffer && t ? "arraybuffer" : s.vbArray && t ? "text:vbarray" : "text";
      }function a(t) {
        try {
          var e = t.status;return null !== e && 0 !== e;
        } catch (t) {
          return !1;
        }
      }var s = n(56),
          d = n(3),
          u = n(119),
          l = n(13),
          c = n(126),
          f = u.IncomingMessage,
          h = u.readyStates,
          $ = t.exports = function (t) {
        var n = this;l.Writable.call(n), n._opts = t, n._body = [], n._headers = {}, t.auth && n.setHeader("Authorization", "Basic " + new e(t.auth).toString("base64")), Object.keys(t.headers).forEach(function (e) {
          n.setHeader(e, t.headers[e]);
        });var r,
            i = !0;if ("disable-fetch" === t.mode || "timeout" in t) i = !1, r = !0;else if ("prefer-streaming" === t.mode) r = !1;else if ("allow-wrong-content-type" === t.mode) r = !s.overrideMimeType;else {
          if (t.mode && "default" !== t.mode && "prefer-fast" !== t.mode) throw new Error("Invalid value for opts.mode");r = !0;
        }n._mode = o(r, i), n.on("finish", function () {
          n._onFinish();
        });
      };d($, l.Writable), $.prototype.setHeader = function (t, e) {
        var n = this,
            r = t.toLowerCase();-1 === p.indexOf(r) && (n._headers[r] = { name: t, value: e });
      }, $.prototype.getHeader = function (t) {
        var e = this._headers[t.toLowerCase()];return e ? e.value : null;
      }, $.prototype.removeHeader = function (t) {
        delete this._headers[t.toLowerCase()];
      }, $.prototype._onFinish = function () {
        var t = this;if (!t._destroyed) {
          var n = t._opts,
              o = t._headers,
              a = null;"GET" !== n.method && "HEAD" !== n.method && (a = s.blobConstructor ? new r.Blob(t._body.map(function (t) {
            return c(t);
          }), { type: (o["content-type"] || {}).value || "" }) : e.concat(t._body).toString());var d = [];if (Object.keys(o).forEach(function (t) {
            var e = o[t].name,
                n = o[t].value;Array.isArray(n) ? n.forEach(function (t) {
              d.push([e, t]);
            }) : d.push([e, n]);
          }), "fetch" === t._mode) r.fetch(t._opts.url, { method: t._opts.method, headers: d, body: a || void 0, mode: "cors", credentials: n.withCredentials ? "include" : "same-origin" }).then(function (e) {
            t._fetchResponse = e, t._connect();
          }, function (e) {
            t.emit("error", e);
          });else {
            var u = t._xhr = new r.XMLHttpRequest();try {
              u.open(t._opts.method, t._opts.url, !0);
            } catch (e) {
              return void i.nextTick(function () {
                t.emit("error", e);
              });
            }"responseType" in u && (u.responseType = t._mode.split(":")[0]), "withCredentials" in u && (u.withCredentials = !!n.withCredentials), "text" === t._mode && "overrideMimeType" in u && u.overrideMimeType("text/plain; charset=x-user-defined"), "timeout" in n && (u.timeout = n.timeout, u.ontimeout = function () {
              t.emit("timeout");
            }), d.forEach(function (t) {
              u.setRequestHeader(t[0], t[1]);
            }), t._response = null, u.onreadystatechange = function () {
              switch (u.readyState) {case h.LOADING:case h.DONE:
                  t._onXHRProgress();}
            }, "moz-chunked-arraybuffer" === t._mode && (u.onprogress = function () {
              t._onXHRProgress();
            }), u.onerror = function () {
              t._destroyed || t.emit("error", new Error("XHR error"));
            };try {
              u.send(a);
            } catch (e) {
              return void i.nextTick(function () {
                t.emit("error", e);
              });
            }
          }
        }
      }, $.prototype._onXHRProgress = function () {
        var t = this;a(t._xhr) && !t._destroyed && (t._response || t._connect(), t._response._onXHRProgress());
      }, $.prototype._connect = function () {
        var t = this;t._destroyed || (t._response = new f(t._xhr, t._fetchResponse, t._mode), t._response.on("error", function (e) {
          t.emit("error", e);
        }), t.emit("response", t._response));
      }, $.prototype._write = function (t, e, n) {
        this._body.push(t), n();
      }, $.prototype.abort = $.prototype.destroy = function () {
        var t = this;t._destroyed = !0, t._response && (t._response._destroyed = !0), t._xhr && t._xhr.abort();
      }, $.prototype.end = function (t, e, n) {
        var r = this;"function" == typeof t && (n = t, t = void 0), l.Writable.prototype.end.call(r, t, e, n);
      }, $.prototype.flushHeaders = function () {}, $.prototype.setTimeout = function () {}, $.prototype.setNoDelay = function () {}, $.prototype.setSocketKeepAlive = function () {};var p = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];
    }).call(e, n(2).Buffer, n(0), n(1));
  }, function (t, e, n) {
    (function (t, r, i) {
      var o = n(56),
          a = n(3),
          s = n(13),
          d = e.readyStates = { UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4 },
          u = e.IncomingMessage = function (e, n, i) {
        function a() {
          u.read().then(function (t) {
            if (!d._destroyed) {
              if (t.done) return void d.push(null);d.push(new r(t.value)), a();
            }
          }).catch(function (t) {
            d.emit("error", t);
          });
        }var d = this;if (s.Readable.call(d), d._mode = i, d.headers = {}, d.rawHeaders = [], d.trailers = {}, d.rawTrailers = [], d.on("end", function () {
          t.nextTick(function () {
            d.emit("close");
          });
        }), "fetch" === i) {
          d._fetchResponse = n, d.url = n.url, d.statusCode = n.status, d.statusMessage = n.statusText, n.headers.forEach(function (t, e) {
            d.headers[e.toLowerCase()] = t, d.rawHeaders.push(e, t);
          });var u = n.body.getReader();a();
        } else {
          d._xhr = e, d._pos = 0, d.url = e.responseURL, d.statusCode = e.status, d.statusMessage = e.statusText;if (e.getAllResponseHeaders().split(/\r?\n/).forEach(function (t) {
            var e = t.match(/^([^:]+):\s*(.*)/);if (e) {
              var n = e[1].toLowerCase();"set-cookie" === n ? (void 0 === d.headers[n] && (d.headers[n] = []), d.headers[n].push(e[2])) : void 0 !== d.headers[n] ? d.headers[n] += ", " + e[2] : d.headers[n] = e[2], d.rawHeaders.push(e[1], e[2]);
            }
          }), d._charset = "x-user-defined", !o.overrideMimeType) {
            var l = d.rawHeaders["mime-type"];if (l) {
              var c = l.match(/;\s*charset=([^;])(;|$)/);c && (d._charset = c[1].toLowerCase());
            }d._charset || (d._charset = "utf-8");
          }
        }
      };a(u, s.Readable), u.prototype._read = function () {}, u.prototype._onXHRProgress = function () {
        var t = this,
            e = t._xhr,
            n = null;switch (t._mode) {case "text:vbarray":
            if (e.readyState !== d.DONE) break;try {
              n = new i.VBArray(e.responseBody).toArray();
            } catch (t) {}if (null !== n) {
              t.push(new r(n));break;
            }case "text":
            try {
              n = e.responseText;
            } catch (e) {
              t._mode = "text:vbarray";break;
            }if (n.length > t._pos) {
              var o = n.substr(t._pos);if ("x-user-defined" === t._charset) {
                for (var a = new r(o.length), s = 0; s < o.length; s++) {
                  a[s] = 255 & o.charCodeAt(s);
                }t.push(a);
              } else t.push(o, t._charset);t._pos = n.length;
            }break;case "arraybuffer":
            if (e.readyState !== d.DONE || !e.response) break;n = e.response, t.push(new r(new Uint8Array(n)));break;case "moz-chunked-arraybuffer":
            if (n = e.response, e.readyState !== d.LOADING || !n) break;t.push(new r(new Uint8Array(n)));break;case "ms-stream":
            if (n = e.response, e.readyState !== d.LOADING) break;var u = new i.MSStreamReader();u.onprogress = function () {
              u.result.byteLength > t._pos && (t.push(new r(new Uint8Array(u.result.slice(t._pos)))), t._pos = u.result.byteLength);
            }, u.onload = function () {
              t.push(null);
            }, u.readAsArrayBuffer(n);}t._xhr.readyState === d.DONE && "ms-stream" !== t._mode && t.push(null);
      };
    }).call(e, n(1), n(2).Buffer, n(0));
  }, function (t, e) {}, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e, n) {
      t.copy(e, n);
    }var o = n(23).Buffer;t.exports = function () {
      function t() {
        r(this, t), this.head = null, this.tail = null, this.length = 0;
      }return t.prototype.push = function (t) {
        var e = { data: t, next: null };this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length;
      }, t.prototype.unshift = function (t) {
        var e = { data: t, next: this.head };0 === this.length && (this.tail = e), this.head = e, ++this.length;
      }, t.prototype.shift = function () {
        if (0 !== this.length) {
          var t = this.head.data;return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
        }
      }, t.prototype.clear = function () {
        this.head = this.tail = null, this.length = 0;
      }, t.prototype.join = function (t) {
        if (0 === this.length) return "";for (var e = this.head, n = "" + e.data; e = e.next;) {
          n += t + e.data;
        }return n;
      }, t.prototype.concat = function (t) {
        if (0 === this.length) return o.alloc(0);if (1 === this.length) return this.head.data;for (var e = o.allocUnsafe(t >>> 0), n = this.head, r = 0; n;) {
          i(n.data, e, r), r += n.data.length, n = n.next;
        }return e;
      }, t;
    }();
  }, function (t, e, n) {
    function r(t, e) {
      this._id = t, this._clearFn = e;
    }var i = Function.prototype.apply;e.setTimeout = function () {
      return new r(i.call(setTimeout, window, arguments), clearTimeout);
    }, e.setInterval = function () {
      return new r(i.call(setInterval, window, arguments), clearInterval);
    }, e.clearTimeout = e.clearInterval = function (t) {
      t && t.close();
    }, r.prototype.unref = r.prototype.ref = function () {}, r.prototype.close = function () {
      this._clearFn.call(window, this._id);
    }, e.enroll = function (t, e) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
    }, e.unenroll = function (t) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
    }, e._unrefActive = e.active = function (t) {
      clearTimeout(t._idleTimeoutId);var e = t._idleTimeout;e >= 0 && (t._idleTimeoutId = setTimeout(function () {
        t._onTimeout && t._onTimeout();
      }, e));
    }, n(123), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate;
  }, function (t, e, n) {
    (function (t, e) {
      (function (t, n) {
        "use strict";
        function r(t) {
          "function" != typeof t && (t = new Function("" + t));for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) {
            e[n] = arguments[n + 1];
          }var r = { callback: t, args: e };return u[d] = r, s(d), d++;
        }function i(t) {
          delete u[t];
        }function o(t) {
          var e = t.callback,
              r = t.args;switch (r.length) {case 0:
              e();break;case 1:
              e(r[0]);break;case 2:
              e(r[0], r[1]);break;case 3:
              e(r[0], r[1], r[2]);break;default:
              e.apply(n, r);}
        }function a(t) {
          if (l) setTimeout(a, 0, t);else {
            var e = u[t];if (e) {
              l = !0;try {
                o(e);
              } finally {
                i(t), l = !1;
              }
            }
          }
        }if (!t.setImmediate) {
          var s,
              d = 1,
              u = {},
              l = !1,
              c = t.document,
              f = Object.getPrototypeOf && Object.getPrototypeOf(t);f = f && f.setTimeout ? f : t, "[object process]" === {}.toString.call(t.process) ? function () {
            s = function s(t) {
              e.nextTick(function () {
                a(t);
              });
            };
          }() : !function () {
            if (t.postMessage && !t.importScripts) {
              var e = !0,
                  n = t.onmessage;return t.onmessage = function () {
                e = !1;
              }, t.postMessage("", "*"), t.onmessage = n, e;
            }
          }() ? t.MessageChannel ? function () {
            var t = new MessageChannel();t.port1.onmessage = function (t) {
              a(t.data);
            }, s = function s(e) {
              t.port2.postMessage(e);
            };
          }() : c && "onreadystatechange" in c.createElement("script") ? function () {
            var t = c.documentElement;s = function s(e) {
              var n = c.createElement("script");n.onreadystatechange = function () {
                a(e), n.onreadystatechange = null, t.removeChild(n), n = null;
              }, t.appendChild(n);
            };
          }() : function () {
            s = function s(t) {
              setTimeout(a, 0, t);
            };
          }() : function () {
            var e = "setImmediate$" + Math.random() + "$",
                n = function n(_n) {
              _n.source === t && "string" == typeof _n.data && 0 === _n.data.indexOf(e) && a(+_n.data.slice(e.length));
            };t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), s = function s(n) {
              t.postMessage(e + n, "*");
            };
          }(), f.setImmediate = r, f.clearImmediate = i;
        }
      })("undefined" == typeof self ? void 0 === t ? this : t : self);
    }).call(e, n(0), n(1));
  }, function (t, e, n) {
    (function (e) {
      function n(t, e) {
        function n() {
          if (!i) {
            if (r("throwDeprecation")) throw new Error(e);r("traceDeprecation") ? console.trace(e) : console.warn(e), i = !0;
          }return t.apply(this, arguments);
        }if (r("noDeprecation")) return t;var i = !1;return n;
      }function r(t) {
        try {
          if (!e.localStorage) return !1;
        } catch (t) {
          return !1;
        }var n = e.localStorage[t];return null != n && "true" === String(n).toLowerCase();
      }t.exports = n;
    }).call(e, n(0));
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      if (!(this instanceof r)) return new r(t);i.call(this, t);
    }t.exports = r;var i = n(61),
        o = n(14);o.inherits = n(3), o.inherits(r, i), r.prototype._transform = function (t, e, n) {
      n(null, t);
    };
  }, function (t, e, n) {
    var r = n(2).Buffer;t.exports = function (t) {
      if (t instanceof Uint8Array) {
        if (0 === t.byteOffset && t.byteLength === t.buffer.byteLength) return t.buffer;if ("function" == typeof t.buffer.slice) return t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
      }if (r.isBuffer(t)) {
        for (var e = new Uint8Array(t.length), n = t.length, i = 0; i < n; i++) {
          e[i] = t[i];
        }return e.buffer;
      }throw new Error("Argument must be a Buffer");
    };
  }, function (t, e) {
    function n() {
      for (var t = {}, e = 0; e < arguments.length; e++) {
        var n = arguments[e];for (var i in n) {
          r.call(n, i) && (t[i] = n[i]);
        }
      }return t;
    }t.exports = n;var r = Object.prototype.hasOwnProperty;
  }, function (t, e) {
    t.exports = { 100: "Continue", 101: "Switching Protocols", 102: "Processing", 200: "OK", 201: "Created", 202: "Accepted", 203: "Non-Authoritative Information", 204: "No Content", 205: "Reset Content", 206: "Partial Content", 207: "Multi-Status", 208: "Already Reported", 226: "IM Used", 300: "Multiple Choices", 301: "Moved Permanently", 302: "Found", 303: "See Other", 304: "Not Modified", 305: "Use Proxy", 307: "Temporary Redirect", 308: "Permanent Redirect", 400: "Bad Request", 401: "Unauthorized", 402: "Payment Required", 403: "Forbidden", 404: "Not Found", 405: "Method Not Allowed", 406: "Not Acceptable", 407: "Proxy Authentication Required", 408: "Request Timeout", 409: "Conflict", 410: "Gone", 411: "Length Required", 412: "Precondition Failed", 413: "Payload Too Large", 414: "URI Too Long", 415: "Unsupported Media Type", 416: "Range Not Satisfiable", 417: "Expectation Failed", 418: "I'm a teapot", 421: "Misdirected Request", 422: "Unprocessable Entity", 423: "Locked", 424: "Failed Dependency", 425: "Unordered Collection", 426: "Upgrade Required", 428: "Precondition Required", 429: "Too Many Requests", 431: "Request Header Fields Too Large", 451: "Unavailable For Legal Reasons", 500: "Internal Server Error", 501: "Not Implemented", 502: "Bad Gateway", 503: "Service Unavailable", 504: "Gateway Timeout", 505: "HTTP Version Not Supported", 506: "Variant Also Negotiates", 507: "Insufficient Storage", 508: "Loop Detected", 509: "Bandwidth Limit Exceeded", 510: "Not Extended", 511: "Network Authentication Required" };
  }, function (t, e, n) {
    (function (t, r) {
      var i;(function (o) {
        function a(t) {
          throw new RangeError(M[t]);
        }function s(t, e) {
          for (var n = t.length, r = []; n--;) {
            r[n] = e(t[n]);
          }return r;
        }function d(t, e) {
          var n = t.split("@"),
              r = "";return n.length > 1 && (r = n[0] + "@", t = n[1]), t = t.replace(L, "."), r + s(t.split("."), e).join(".");
        }function u(t) {
          for (var e, n, r = [], i = 0, o = t.length; i < o;) {
            e = t.charCodeAt(i++), e >= 55296 && e <= 56319 && i < o ? (n = t.charCodeAt(i++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), i--)) : r.push(e);
          }return r;
        }function l(t) {
          return s(t, function (t) {
            var e = "";return t > 65535 && (t -= 65536, e += N(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += N(t);
          }).join("");
        }function c(t) {
          return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : b;
        }function f(t, e) {
          return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
        }function h(t, e, n) {
          var r = 0;for (t = n ? I(t / x) : t >> 1, t += I(t / e); t > C * E >> 1; r += b) {
            t = I(t / C);
          }return I(r + (C + 1) * t / (t + k));
        }function $(t) {
          var e,
              n,
              r,
              i,
              o,
              s,
              d,
              u,
              f,
              $,
              p = [],
              _ = t.length,
              g = 0,
              m = A,
              v = S;for (n = t.lastIndexOf(O), n < 0 && (n = 0), r = 0; r < n; ++r) {
            t.charCodeAt(r) >= 128 && a("not-basic"), p.push(t.charCodeAt(r));
          }for (i = n > 0 ? n + 1 : 0; i < _;) {
            for (o = g, s = 1, d = b; i >= _ && a("invalid-input"), u = c(t.charCodeAt(i++)), (u >= b || u > I((y - g) / s)) && a("overflow"), g += u * s, f = d <= v ? w : d >= v + E ? E : d - v, !(u < f); d += b) {
              $ = b - f, s > I(y / $) && a("overflow"), s *= $;
            }e = p.length + 1, v = h(g - o, e, 0 == o), I(g / e) > y - m && a("overflow"), m += I(g / e), g %= e, p.splice(g++, 0, m);
          }return l(p);
        }function p(t) {
          var e,
              n,
              r,
              i,
              o,
              s,
              d,
              l,
              c,
              $,
              p,
              _,
              g,
              m,
              v,
              k = [];for (t = u(t), _ = t.length, e = A, n = 0, o = S, s = 0; s < _; ++s) {
            (p = t[s]) < 128 && k.push(N(p));
          }for (r = i = k.length, i && k.push(O); r < _;) {
            for (d = y, s = 0; s < _; ++s) {
              (p = t[s]) >= e && p < d && (d = p);
            }for (g = r + 1, d - e > I((y - n) / g) && a("overflow"), n += (d - e) * g, e = d, s = 0; s < _; ++s) {
              if (p = t[s], p < e && ++n > y && a("overflow"), p == e) {
                for (l = n, c = b; $ = c <= o ? w : c >= o + E ? E : c - o, !(l < $); c += b) {
                  v = l - $, m = b - $, k.push(N(f($ + v % m, 0))), l = I(v / m);
                }k.push(N(f(l, 0))), o = h(n, g, r == i), n = 0, ++r;
              }
            }++n, ++e;
          }return k.join("");
        }function _(t) {
          return d(t, function (t) {
            return R.test(t) ? $(t.slice(4).toLowerCase()) : t;
          });
        }function g(t) {
          return d(t, function (t) {
            return T.test(t) ? "xn--" + p(t) : t;
          });
        }var m = ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.nodeType, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.nodeType, "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && r);var v,
            y = 2147483647,
            b = 36,
            w = 1,
            E = 26,
            k = 38,
            x = 700,
            S = 72,
            A = 128,
            O = "-",
            R = /^xn--/,
            T = /[^\x20-\x7E]/,
            L = /[\x2E\u3002\uFF0E\uFF61]/g,
            M = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
            C = b - w,
            I = Math.floor,
            N = String.fromCharCode;v = { version: "1.4.1", ucs2: { decode: u, encode: l }, decode: $, encode: p, toASCII: g, toUnicode: _ }, void 0 !== (i = function () {
          return v;
        }.call(e, n, e, t)) && (t.exports = i);
      })();
    }).call(e, n(130)(t), n(0));
  }, function (t, e) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function get() {
          return t.l;
        } }), Object.defineProperty(t, "id", { enumerable: !0, get: function get() {
          return t.i;
        } }), t.webpackPolyfill = 1), t;
    };
  }, function (t, e, n) {
    "use strict";
    t.exports = { isString: function isString(t) {
        return "string" == typeof t;
      }, isObject: function isObject(t) {
        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
      }, isNull: function isNull(t) {
        return null === t;
      }, isNullOrUndefined: function isNullOrUndefined(t) {
        return null == t;
      } };
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }t.exports = function (t, e, n, o) {
      e = e || "&", n = n || "=";var a = {};if ("string" != typeof t || 0 === t.length) return a;var s = /\+/g;t = t.split(e);var d = 1e3;o && "number" == typeof o.maxKeys && (d = o.maxKeys);var u = t.length;d > 0 && u > d && (u = d);for (var l = 0; l < u; ++l) {
        var c,
            f,
            h,
            $,
            p = t[l].replace(s, "%20"),
            _ = p.indexOf(n);_ >= 0 ? (c = p.substr(0, _), f = p.substr(_ + 1)) : (c = p, f = ""), h = decodeURIComponent(c), $ = decodeURIComponent(f), r(a, h) ? i(a[h]) ? a[h].push($) : a[h] = [a[h], $] : a[h] = $;
      }return a;
    };var i = Array.isArray || function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    };
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (t.map) return t.map(e);for (var n = [], r = 0; r < t.length; r++) {
        n.push(e(t[r], r));
      }return n;
    }var i = function i(t) {
      switch (typeof t === "undefined" ? "undefined" : _typeof(t)) {case "string":
          return t;case "boolean":
          return t ? "true" : "false";case "number":
          return isFinite(t) ? t : "";default:
          return "";}
    };t.exports = function (t, e, n, s) {
      return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? r(a(t), function (a) {
        var s = encodeURIComponent(i(a)) + n;return o(t[a]) ? r(t[a], function (t) {
          return s + encodeURIComponent(i(t));
        }).join(e) : s + encodeURIComponent(i(t[a]));
      }).join(e) : s ? encodeURIComponent(i(s)) + n + encodeURIComponent(i(t)) : "";
    };var o = Array.isArray || function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    },
        a = Object.keys || function (t) {
      var e = [];for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
      }return e;
    };
  }, function (t, e, n) {
    function r(t) {
      if ("string" == typeof t && (t = o.parse(t)), t.protocol || (t.protocol = "https:"), "https:" !== t.protocol) throw new Error('Protocol "' + t.protocol + '" not supported. Expected "https:"');return t;
    }var i = n(55),
        o = n(34),
        a = t.exports;for (var s in i) {
      i.hasOwnProperty(s) && (a[s] = i[s]);
    }a.request = function (t, e) {
      return t = r(t), i.request.call(this, t, e);
    }, a.get = function (t, e) {
      return t = r(t), i.get.call(this, t, e);
    };
  }, function (t, e, n) {
    "use strict";
    (function (t) {
      function r(t, e, n) {
        function r() {
          for (var e; null !== (e = t.read());) {
            a.push(e), s += e.length;
          }t.once("readable", r);
        }function i(e) {
          t.removeListener("end", o), t.removeListener("readable", r), n(e);
        }function o() {
          var e,
              r = null;s >= b ? r = new RangeError(w) : e = _.concat(a, s), a = [], t.close(), n(r, e);
        }var a = [],
            s = 0;t.on("error", i), t.on("end", o), t.end(e), r();
      }function i(t, e) {
        if ("string" == typeof e && (e = _.from(e)), !_.isBuffer(e)) throw new TypeError("Not a string or buffer");var n = t._finishFlushFlag;return t._processChunk(e, n);
      }function o(t) {
        if (!(this instanceof o)) return new o(t);h.call(this, t, m.DEFLATE);
      }function a(t) {
        if (!(this instanceof a)) return new a(t);h.call(this, t, m.INFLATE);
      }function s(t) {
        if (!(this instanceof s)) return new s(t);h.call(this, t, m.GZIP);
      }function d(t) {
        if (!(this instanceof d)) return new d(t);h.call(this, t, m.GUNZIP);
      }function u(t) {
        if (!(this instanceof u)) return new u(t);h.call(this, t, m.DEFLATERAW);
      }function l(t) {
        if (!(this instanceof l)) return new l(t);h.call(this, t, m.INFLATERAW);
      }function c(t) {
        if (!(this instanceof c)) return new c(t);h.call(this, t, m.UNZIP);
      }function f(t) {
        return t === m.Z_NO_FLUSH || t === m.Z_PARTIAL_FLUSH || t === m.Z_SYNC_FLUSH || t === m.Z_FULL_FLUSH || t === m.Z_FINISH || t === m.Z_BLOCK;
      }function h(t, n) {
        var r = this;if (this._opts = t = t || {}, this._chunkSize = t.chunkSize || e.Z_DEFAULT_CHUNK, g.call(this, t), t.flush && !f(t.flush)) throw new Error("Invalid flush flag: " + t.flush);if (t.finishFlush && !f(t.finishFlush)) throw new Error("Invalid flush flag: " + t.finishFlush);if (this._flushFlag = t.flush || m.Z_NO_FLUSH, this._finishFlushFlag = void 0 !== t.finishFlush ? t.finishFlush : m.Z_FINISH, t.chunkSize && (t.chunkSize < e.Z_MIN_CHUNK || t.chunkSize > e.Z_MAX_CHUNK)) throw new Error("Invalid chunk size: " + t.chunkSize);if (t.windowBits && (t.windowBits < e.Z_MIN_WINDOWBITS || t.windowBits > e.Z_MAX_WINDOWBITS)) throw new Error("Invalid windowBits: " + t.windowBits);if (t.level && (t.level < e.Z_MIN_LEVEL || t.level > e.Z_MAX_LEVEL)) throw new Error("Invalid compression level: " + t.level);if (t.memLevel && (t.memLevel < e.Z_MIN_MEMLEVEL || t.memLevel > e.Z_MAX_MEMLEVEL)) throw new Error("Invalid memLevel: " + t.memLevel);if (t.strategy && t.strategy != e.Z_FILTERED && t.strategy != e.Z_HUFFMAN_ONLY && t.strategy != e.Z_RLE && t.strategy != e.Z_FIXED && t.strategy != e.Z_DEFAULT_STRATEGY) throw new Error("Invalid strategy: " + t.strategy);if (t.dictionary && !_.isBuffer(t.dictionary)) throw new Error("Invalid dictionary: it should be a Buffer instance");this._handle = new m.Zlib(n);var i = this;this._hadError = !1, this._handle.onerror = function (t, n) {
          $(i), i._hadError = !0;var r = new Error(t);r.errno = n, r.code = e.codes[n], i.emit("error", r);
        };var o = e.Z_DEFAULT_COMPRESSION;"number" == typeof t.level && (o = t.level);var a = e.Z_DEFAULT_STRATEGY;"number" == typeof t.strategy && (a = t.strategy), this._handle.init(t.windowBits || e.Z_DEFAULT_WINDOWBITS, o, t.memLevel || e.Z_DEFAULT_MEMLEVEL, a, t.dictionary), this._buffer = _.allocUnsafe(this._chunkSize), this._offset = 0, this._level = o, this._strategy = a, this.once("end", this.close), Object.defineProperty(this, "_closed", { get: function get() {
            return !r._handle;
          }, configurable: !0, enumerable: !0 });
      }function $(e, n) {
        n && t.nextTick(n), e._handle && (e._handle.close(), e._handle = null);
      }function p(t) {
        t.emit("close");
      }var _ = n(2).Buffer,
          g = n(136).Transform,
          m = n(141),
          v = n(35),
          y = n(63).ok,
          b = n(2).kMaxLength,
          w = "Cannot create final Buffer. It would be larger than 0x" + b.toString(16) + " bytes";m.Z_MIN_WINDOWBITS = 8, m.Z_MAX_WINDOWBITS = 15, m.Z_DEFAULT_WINDOWBITS = 15, m.Z_MIN_CHUNK = 64, m.Z_MAX_CHUNK = 1 / 0, m.Z_DEFAULT_CHUNK = 16384, m.Z_MIN_MEMLEVEL = 1, m.Z_MAX_MEMLEVEL = 9, m.Z_DEFAULT_MEMLEVEL = 8, m.Z_MIN_LEVEL = -1, m.Z_MAX_LEVEL = 9, m.Z_DEFAULT_LEVEL = m.Z_DEFAULT_COMPRESSION;for (var E = Object.keys(m), k = 0; k < E.length; k++) {
        var x = E[k];x.match(/^Z/) && Object.defineProperty(e, x, { enumerable: !0, value: m[x], writable: !1 });
      }for (var S = { Z_OK: m.Z_OK, Z_STREAM_END: m.Z_STREAM_END, Z_NEED_DICT: m.Z_NEED_DICT, Z_ERRNO: m.Z_ERRNO, Z_STREAM_ERROR: m.Z_STREAM_ERROR, Z_DATA_ERROR: m.Z_DATA_ERROR, Z_MEM_ERROR: m.Z_MEM_ERROR, Z_BUF_ERROR: m.Z_BUF_ERROR, Z_VERSION_ERROR: m.Z_VERSION_ERROR }, A = Object.keys(S), O = 0; O < A.length; O++) {
        var R = A[O];S[S[R]] = R;
      }Object.defineProperty(e, "codes", { enumerable: !0, value: Object.freeze(S), writable: !1 }), e.Deflate = o, e.Inflate = a, e.Gzip = s, e.Gunzip = d, e.DeflateRaw = u, e.InflateRaw = l, e.Unzip = c, e.createDeflate = function (t) {
        return new o(t);
      }, e.createInflate = function (t) {
        return new a(t);
      }, e.createDeflateRaw = function (t) {
        return new u(t);
      }, e.createInflateRaw = function (t) {
        return new l(t);
      }, e.createGzip = function (t) {
        return new s(t);
      }, e.createGunzip = function (t) {
        return new d(t);
      }, e.createUnzip = function (t) {
        return new c(t);
      }, e.deflate = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), r(new o(e), t, n);
      }, e.deflateSync = function (t, e) {
        return i(new o(e), t);
      }, e.gzip = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), r(new s(e), t, n);
      }, e.gzipSync = function (t, e) {
        return i(new s(e), t);
      }, e.deflateRaw = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), r(new u(e), t, n);
      }, e.deflateRawSync = function (t, e) {
        return i(new u(e), t);
      }, e.unzip = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), r(new c(e), t, n);
      }, e.unzipSync = function (t, e) {
        return i(new c(e), t);
      }, e.inflate = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), r(new a(e), t, n);
      }, e.inflateSync = function (t, e) {
        return i(new a(e), t);
      }, e.gunzip = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), r(new d(e), t, n);
      }, e.gunzipSync = function (t, e) {
        return i(new d(e), t);
      }, e.inflateRaw = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), r(new l(e), t, n);
      }, e.inflateRawSync = function (t, e) {
        return i(new l(e), t);
      }, v.inherits(h, g), h.prototype.params = function (n, r, i) {
        if (n < e.Z_MIN_LEVEL || n > e.Z_MAX_LEVEL) throw new RangeError("Invalid compression level: " + n);if (r != e.Z_FILTERED && r != e.Z_HUFFMAN_ONLY && r != e.Z_RLE && r != e.Z_FIXED && r != e.Z_DEFAULT_STRATEGY) throw new TypeError("Invalid strategy: " + r);if (this._level !== n || this._strategy !== r) {
          var o = this;this.flush(m.Z_SYNC_FLUSH, function () {
            y(o._handle, "zlib binding closed"), o._handle.params(n, r), o._hadError || (o._level = n, o._strategy = r, i && i());
          });
        } else t.nextTick(i);
      }, h.prototype.reset = function () {
        return y(this._handle, "zlib binding closed"), this._handle.reset();
      }, h.prototype._flush = function (t) {
        this._transform(_.alloc(0), "", t);
      }, h.prototype.flush = function (e, n) {
        var r = this,
            i = this._writableState;("function" == typeof e || void 0 === e && !n) && (n = e, e = m.Z_FULL_FLUSH), i.ended ? n && t.nextTick(n) : i.ending ? n && this.once("end", n) : i.needDrain ? n && this.once("drain", function () {
          return r.flush(e, n);
        }) : (this._flushFlag = e, this.write(_.alloc(0), "", n));
      }, h.prototype.close = function (e) {
        $(this, e), t.nextTick(p, this);
      }, h.prototype._transform = function (t, e, n) {
        var r,
            i = this._writableState,
            o = i.ending || i.ended,
            a = o && (!t || i.length === t.length);return null === t || _.isBuffer(t) ? this._handle ? (a ? r = this._finishFlushFlag : (r = this._flushFlag, t.length >= i.length && (this._flushFlag = this._opts.flush || m.Z_NO_FLUSH)), void this._processChunk(t, r, n)) : n(new Error("zlib binding closed")) : n(new Error("invalid input"));
      }, h.prototype._processChunk = function (t, e, n) {
        function r(u, f) {
          if (this && (this.buffer = null, this.callback = null), !s._hadError) {
            var h = o - f;if (y(h >= 0, "have should not go down"), h > 0) {
              var $ = s._buffer.slice(s._offset, s._offset + h);s._offset += h, d ? s.push($) : (l.push($), c += $.length);
            }if ((0 === f || s._offset >= s._chunkSize) && (o = s._chunkSize, s._offset = 0, s._buffer = _.allocUnsafe(s._chunkSize)), 0 === f) {
              if (a += i - u, i = u, !d) return !0;var p = s._handle.write(e, t, a, i, s._buffer, s._offset, s._chunkSize);return p.callback = r, void (p.buffer = t);
            }if (!d) return !1;n();
          }
        }var i = t && t.length,
            o = this._chunkSize - this._offset,
            a = 0,
            s = this,
            d = "function" == typeof n;if (!d) {
          var u,
              l = [],
              c = 0;this.on("error", function (t) {
            u = t;
          }), y(this._handle, "zlib binding closed");do {
            var f = this._handle.writeSync(e, t, a, i, this._buffer, this._offset, o);
          } while (!this._hadError && r(f[0], f[1]));if (this._hadError) throw u;if (c >= b) throw $(this), new RangeError(w);var h = _.concat(l, c);return $(this), h;
        }y(this._handle, "zlib binding closed");var p = this._handle.write(e, t, a, i, this._buffer, this._offset, o);p.buffer = t, p.callback = r;
      }, v.inherits(o, h), v.inherits(a, h), v.inherits(s, h), v.inherits(d, h), v.inherits(u, h), v.inherits(l, h), v.inherits(c, h);
    }).call(e, n(1));
  }, function (t, e, n) {
    function r() {
      i.call(this);
    }t.exports = r;var i = n(32).EventEmitter;n(3)(r, i), r.Readable = n(13), r.Writable = n(137), r.Duplex = n(138), r.Transform = n(139), r.PassThrough = n(140), r.Stream = r, r.prototype.pipe = function (t, e) {
      function n(e) {
        t.writable && !1 === t.write(e) && u.pause && u.pause();
      }function r() {
        u.readable && u.resume && u.resume();
      }function o() {
        l || (l = !0, t.end());
      }function a() {
        l || (l = !0, "function" == typeof t.destroy && t.destroy());
      }function s(t) {
        if (d(), 0 === i.listenerCount(this, "error")) throw t;
      }function d() {
        u.removeListener("data", n), t.removeListener("drain", r), u.removeListener("end", o), u.removeListener("close", a), u.removeListener("error", s), t.removeListener("error", s), u.removeListener("end", d), u.removeListener("close", d), t.removeListener("close", d);
      }var u = this;u.on("data", n), t.on("drain", r), t._isStdio || e && !1 === e.end || (u.on("end", o), u.on("close", a));var l = !1;return u.on("error", s), t.on("error", s), u.on("end", d), u.on("close", d), t.on("close", d), t.emit("pipe", u), t;
    };
  }, function (t, e, n) {
    t.exports = n(33);
  }, function (t, e, n) {
    t.exports = n(5);
  }, function (t, e, n) {
    t.exports = n(13).Transform;
  }, function (t, e, n) {
    t.exports = n(13).PassThrough;
  }, function (t, e, n) {
    "use strict";
    (function (t, r) {
      function i(t) {
        if ("number" != typeof t || t < e.DEFLATE || t > e.UNZIP) throw new TypeError("Bad argument");this.dictionary = null, this.err = 0, this.flush = 0, this.init_done = !1, this.level = 0, this.memLevel = 0, this.mode = t, this.strategy = 0, this.windowBits = 0, this.write_in_progress = !1, this.pending_close = !1, this.gzip_id_bytes_read = 0;
      }var o = n(63),
          a = n(143),
          s = n(144),
          d = n(147),
          u = n(150);for (var l in u) {
        e[l] = u[l];
      }e.NONE = 0, e.DEFLATE = 1, e.INFLATE = 2, e.GZIP = 3, e.GUNZIP = 4, e.DEFLATERAW = 5, e.INFLATERAW = 6, e.UNZIP = 7;i.prototype.close = function () {
        if (this.write_in_progress) return void (this.pending_close = !0);this.pending_close = !1, o(this.init_done, "close before init"), o(this.mode <= e.UNZIP), this.mode === e.DEFLATE || this.mode === e.GZIP || this.mode === e.DEFLATERAW ? s.deflateEnd(this.strm) : this.mode !== e.INFLATE && this.mode !== e.GUNZIP && this.mode !== e.INFLATERAW && this.mode !== e.UNZIP || d.inflateEnd(this.strm), this.mode = e.NONE, this.dictionary = null;
      }, i.prototype.write = function (t, e, n, r, i, o, a) {
        return this._write(!0, t, e, n, r, i, o, a);
      }, i.prototype.writeSync = function (t, e, n, r, i, o, a) {
        return this._write(!1, t, e, n, r, i, o, a);
      }, i.prototype._write = function (n, i, a, s, d, u, l, c) {
        if (o.equal(arguments.length, 8), o(this.init_done, "write before init"), o(this.mode !== e.NONE, "already finalized"), o.equal(!1, this.write_in_progress, "write already in progress"), o.equal(!1, this.pending_close, "close is pending"), this.write_in_progress = !0, o.equal(!1, void 0 === i, "must provide flush value"), this.write_in_progress = !0, i !== e.Z_NO_FLUSH && i !== e.Z_PARTIAL_FLUSH && i !== e.Z_SYNC_FLUSH && i !== e.Z_FULL_FLUSH && i !== e.Z_FINISH && i !== e.Z_BLOCK) throw new Error("Invalid flush value");if (null == a && (a = t.alloc(0), d = 0, s = 0), this.strm.avail_in = d, this.strm.input = a, this.strm.next_in = s, this.strm.avail_out = c, this.strm.output = u, this.strm.next_out = l, this.flush = i, n) {
          var f = this;return r.nextTick(function () {
            f._process(), f._after();
          }), this;
        }if (this._process(), this._checkError()) return this._afterSync();
      }, i.prototype._afterSync = function () {
        var t = this.strm.avail_out,
            e = this.strm.avail_in;return this.write_in_progress = !1, [e, t];
      }, i.prototype._process = function () {
        var t = null;switch (this.mode) {case e.DEFLATE:case e.GZIP:case e.DEFLATERAW:
            this.err = s.deflate(this.strm, this.flush);break;case e.UNZIP:
            switch (this.strm.avail_in > 0 && (t = this.strm.next_in), this.gzip_id_bytes_read) {case 0:
                if (null === t) break;if (31 !== this.strm.input[t]) {
                  this.mode = e.INFLATE;break;
                }if (this.gzip_id_bytes_read = 1, t++, 1 === this.strm.avail_in) break;case 1:
                if (null === t) break;139 === this.strm.input[t] ? (this.gzip_id_bytes_read = 2, this.mode = e.GUNZIP) : this.mode = e.INFLATE;break;default:
                throw new Error("invalid number of gzip magic number bytes read");}case e.INFLATE:case e.GUNZIP:case e.INFLATERAW:
            for (this.err = d.inflate(this.strm, this.flush), this.err === e.Z_NEED_DICT && this.dictionary && (this.err = d.inflateSetDictionary(this.strm, this.dictionary), this.err === e.Z_OK ? this.err = d.inflate(this.strm, this.flush) : this.err === e.Z_DATA_ERROR && (this.err = e.Z_NEED_DICT)); this.strm.avail_in > 0 && this.mode === e.GUNZIP && this.err === e.Z_STREAM_END && 0 !== this.strm.next_in[0];) {
              this.reset(), this.err = d.inflate(this.strm, this.flush);
            }break;default:
            throw new Error("Unknown mode " + this.mode);}
      }, i.prototype._checkError = function () {
        switch (this.err) {case e.Z_OK:case e.Z_BUF_ERROR:
            if (0 !== this.strm.avail_out && this.flush === e.Z_FINISH) return this._error("unexpected end of file"), !1;break;case e.Z_STREAM_END:
            break;case e.Z_NEED_DICT:
            return null == this.dictionary ? this._error("Missing dictionary") : this._error("Bad dictionary"), !1;default:
            return this._error("Zlib error"), !1;}return !0;
      }, i.prototype._after = function () {
        if (this._checkError()) {
          var t = this.strm.avail_out,
              e = this.strm.avail_in;this.write_in_progress = !1, this.callback(e, t), this.pending_close && this.close();
        }
      }, i.prototype._error = function (t) {
        this.strm.msg && (t = this.strm.msg), this.onerror(t, this.err), this.write_in_progress = !1, this.pending_close && this.close();
      }, i.prototype.init = function (t, n, r, i, a) {
        o(4 === arguments.length || 5 === arguments.length, "init(windowBits, level, memLevel, strategy, [dictionary])"), o(t >= 8 && t <= 15, "invalid windowBits"), o(n >= -1 && n <= 9, "invalid compression level"), o(r >= 1 && r <= 9, "invalid memlevel"), o(i === e.Z_FILTERED || i === e.Z_HUFFMAN_ONLY || i === e.Z_RLE || i === e.Z_FIXED || i === e.Z_DEFAULT_STRATEGY, "invalid strategy"), this._init(n, t, r, i, a), this._setDictionary();
      }, i.prototype.params = function () {
        throw new Error("deflateParams Not supported");
      }, i.prototype.reset = function () {
        this._reset(), this._setDictionary();
      }, i.prototype._init = function (t, n, r, i, o) {
        switch (this.level = t, this.windowBits = n, this.memLevel = r, this.strategy = i, this.flush = e.Z_NO_FLUSH, this.err = e.Z_OK, this.mode !== e.GZIP && this.mode !== e.GUNZIP || (this.windowBits += 16), this.mode === e.UNZIP && (this.windowBits += 32), this.mode !== e.DEFLATERAW && this.mode !== e.INFLATERAW || (this.windowBits = -1 * this.windowBits), this.strm = new a(), this.mode) {case e.DEFLATE:case e.GZIP:case e.DEFLATERAW:
            this.err = s.deflateInit2(this.strm, this.level, e.Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);break;case e.INFLATE:case e.GUNZIP:case e.INFLATERAW:case e.UNZIP:
            this.err = d.inflateInit2(this.strm, this.windowBits);break;default:
            throw new Error("Unknown mode " + this.mode);}this.err !== e.Z_OK && this._error("Init error"), this.dictionary = o, this.write_in_progress = !1, this.init_done = !0;
      }, i.prototype._setDictionary = function () {
        if (null != this.dictionary) {
          switch (this.err = e.Z_OK, this.mode) {case e.DEFLATE:case e.DEFLATERAW:
              this.err = s.deflateSetDictionary(this.strm, this.dictionary);}this.err !== e.Z_OK && this._error("Failed to set dictionary");
        }
      }, i.prototype._reset = function () {
        switch (this.err = e.Z_OK, this.mode) {case e.DEFLATE:case e.DEFLATERAW:case e.GZIP:
            this.err = s.deflateReset(this.strm);break;case e.INFLATE:case e.INFLATERAW:case e.GUNZIP:
            this.err = d.inflateReset(this.strm);}this.err !== e.Z_OK && this._error("Failed to reset stream");
      }, e.Zlib = i;
    }).call(e, n(2).Buffer, n(1));
  }, function (t, e) {
    t.exports = function (t) {
      return t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8;
    };
  }, function (t, e, n) {
    "use strict";
    function r() {
      this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
    }t.exports = r;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      return t.msg = I[e], e;
    }function i(t) {
      return (t << 1) - (t > 4 ? 9 : 0);
    }function o(t) {
      for (var e = t.length; --e >= 0;) {
        t[e] = 0;
      }
    }function a(t) {
      var e = t.state,
          n = e.pending;n > t.avail_out && (n = t.avail_out), 0 !== n && (T.arraySet(t.output, e.pending_buf, e.pending_out, n, t.next_out), t.next_out += n, e.pending_out += n, t.total_out += n, t.avail_out -= n, e.pending -= n, 0 === e.pending && (e.pending_out = 0));
    }function s(t, e) {
      L._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, a(t.strm);
    }function d(t, e) {
      t.pending_buf[t.pending++] = e;
    }function u(t, e) {
      t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e;
    }function l(t, e, n, r) {
      var i = t.avail_in;return i > r && (i = r), 0 === i ? 0 : (t.avail_in -= i, T.arraySet(e, t.input, t.next_in, i, n), 1 === t.state.wrap ? t.adler = M(t.adler, e, i, n) : 2 === t.state.wrap && (t.adler = C(t.adler, e, i, n)), t.next_in += i, t.total_in += i, i);
    }function c(t, e) {
      var n,
          r,
          i = t.max_chain_length,
          o = t.strstart,
          a = t.prev_length,
          s = t.nice_match,
          d = t.strstart > t.w_size - ut ? t.strstart - (t.w_size - ut) : 0,
          u = t.window,
          l = t.w_mask,
          c = t.prev,
          f = t.strstart + dt,
          h = u[o + a - 1],
          $ = u[o + a];t.prev_length >= t.good_match && (i >>= 2), s > t.lookahead && (s = t.lookahead);do {
        if (n = e, u[n + a] === $ && u[n + a - 1] === h && u[n] === u[o] && u[++n] === u[o + 1]) {
          o += 2, n++;do {} while (u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && o < f);if (r = dt - (f - o), o = f - dt, r > a) {
            if (t.match_start = e, a = r, r >= s) break;h = u[o + a - 1], $ = u[o + a];
          }
        }
      } while ((e = c[e & l]) > d && 0 != --i);return a <= t.lookahead ? a : t.lookahead;
    }function f(t) {
      var e,
          n,
          r,
          i,
          o,
          a = t.w_size;do {
        if (i = t.window_size - t.lookahead - t.strstart, t.strstart >= a + (a - ut)) {
          T.arraySet(t.window, t.window, a, a, 0), t.match_start -= a, t.strstart -= a, t.block_start -= a, n = t.hash_size, e = n;do {
            r = t.head[--e], t.head[e] = r >= a ? r - a : 0;
          } while (--n);n = a, e = n;do {
            r = t.prev[--e], t.prev[e] = r >= a ? r - a : 0;
          } while (--n);i += a;
        }if (0 === t.strm.avail_in) break;if (n = l(t.strm, t.window, t.strstart + t.lookahead, i), t.lookahead += n, t.lookahead + t.insert >= st) for (o = t.strstart - t.insert, t.ins_h = t.window[o], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[o + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[o + st - 1]) & t.hash_mask, t.prev[o & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = o, o++, t.insert--, !(t.lookahead + t.insert < st));) {}
      } while (t.lookahead < ut && 0 !== t.strm.avail_in);
    }function h(t, e) {
      var n = 65535;for (n > t.pending_buf_size - 5 && (n = t.pending_buf_size - 5);;) {
        if (t.lookahead <= 1) {
          if (f(t), 0 === t.lookahead && e === N) return mt;if (0 === t.lookahead) break;
        }t.strstart += t.lookahead, t.lookahead = 0;var r = t.block_start + n;if ((0 === t.strstart || t.strstart >= r) && (t.lookahead = t.strstart - r, t.strstart = r, s(t, !1), 0 === t.strm.avail_out)) return mt;if (t.strstart - t.block_start >= t.w_size - ut && (s(t, !1), 0 === t.strm.avail_out)) return mt;
      }return t.insert = 0, e === P ? (s(t, !0), 0 === t.strm.avail_out ? yt : bt) : (t.strstart > t.block_start && (s(t, !1), t.strm.avail_out), mt);
    }function $(t, e) {
      for (var n, r;;) {
        if (t.lookahead < ut) {
          if (f(t), t.lookahead < ut && e === N) return mt;if (0 === t.lookahead) break;
        }if (n = 0, t.lookahead >= st && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + st - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== n && t.strstart - n <= t.w_size - ut && (t.match_length = c(t, n)), t.match_length >= st) {
          if (r = L._tr_tally(t, t.strstart - t.match_start, t.match_length - st), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= st) {
            t.match_length--;do {
              t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + st - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart;
            } while (0 != --t.match_length);t.strstart++;
          } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
        } else r = L._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;if (r && (s(t, !1), 0 === t.strm.avail_out)) return mt;
      }return t.insert = t.strstart < st - 1 ? t.strstart : st - 1, e === P ? (s(t, !0), 0 === t.strm.avail_out ? yt : bt) : t.last_lit && (s(t, !1), 0 === t.strm.avail_out) ? mt : vt;
    }function p(t, e) {
      for (var n, r, i;;) {
        if (t.lookahead < ut) {
          if (f(t), t.lookahead < ut && e === N) return mt;if (0 === t.lookahead) break;
        }if (n = 0, t.lookahead >= st && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + st - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = st - 1, 0 !== n && t.prev_length < t.max_lazy_match && t.strstart - n <= t.w_size - ut && (t.match_length = c(t, n), t.match_length <= 5 && (t.strategy === H || t.match_length === st && t.strstart - t.match_start > 4096) && (t.match_length = st - 1)), t.prev_length >= st && t.match_length <= t.prev_length) {
          i = t.strstart + t.lookahead - st, r = L._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - st), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;do {
            ++t.strstart <= i && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + st - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart);
          } while (0 != --t.prev_length);if (t.match_available = 0, t.match_length = st - 1, t.strstart++, r && (s(t, !1), 0 === t.strm.avail_out)) return mt;
        } else if (t.match_available) {
          if (r = L._tr_tally(t, 0, t.window[t.strstart - 1]), r && s(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return mt;
        } else t.match_available = 1, t.strstart++, t.lookahead--;
      }return t.match_available && (r = L._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < st - 1 ? t.strstart : st - 1, e === P ? (s(t, !0), 0 === t.strm.avail_out ? yt : bt) : t.last_lit && (s(t, !1), 0 === t.strm.avail_out) ? mt : vt;
    }function _(t, e) {
      for (var n, r, i, o, a = t.window;;) {
        if (t.lookahead <= dt) {
          if (f(t), t.lookahead <= dt && e === N) return mt;if (0 === t.lookahead) break;
        }if (t.match_length = 0, t.lookahead >= st && t.strstart > 0 && (i = t.strstart - 1, (r = a[i]) === a[++i] && r === a[++i] && r === a[++i])) {
          o = t.strstart + dt;do {} while (r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && i < o);t.match_length = dt - (o - i), t.match_length > t.lookahead && (t.match_length = t.lookahead);
        }if (t.match_length >= st ? (n = L._tr_tally(t, 1, t.match_length - st), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (n = L._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), n && (s(t, !1), 0 === t.strm.avail_out)) return mt;
      }return t.insert = 0, e === P ? (s(t, !0), 0 === t.strm.avail_out ? yt : bt) : t.last_lit && (s(t, !1), 0 === t.strm.avail_out) ? mt : vt;
    }function g(t, e) {
      for (var n;;) {
        if (0 === t.lookahead && (f(t), 0 === t.lookahead)) {
          if (e === N) return mt;break;
        }if (t.match_length = 0, n = L._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, n && (s(t, !1), 0 === t.strm.avail_out)) return mt;
      }return t.insert = 0, e === P ? (s(t, !0), 0 === t.strm.avail_out ? yt : bt) : t.last_lit && (s(t, !1), 0 === t.strm.avail_out) ? mt : vt;
    }function m(t, e, n, r, i) {
      this.good_length = t, this.max_lazy = e, this.nice_length = n, this.max_chain = r, this.func = i;
    }function v(t) {
      t.window_size = 2 * t.w_size, o(t.head), t.max_lazy_match = R[t.level].max_lazy, t.good_match = R[t.level].good_length, t.nice_match = R[t.level].nice_length, t.max_chain_length = R[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = st - 1, t.match_available = 0, t.ins_h = 0;
    }function y() {
      this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = J, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new T.Buf16(2 * ot), this.dyn_dtree = new T.Buf16(2 * (2 * rt + 1)), this.bl_tree = new T.Buf16(2 * (2 * it + 1)), o(this.dyn_ltree), o(this.dyn_dtree), o(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new T.Buf16(at + 1), this.heap = new T.Buf16(2 * nt + 1), o(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new T.Buf16(2 * nt + 1), o(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
    }function b(t) {
      var e;return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = X, e = t.state, e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? ct : _t, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = N, L._tr_init(e), z) : r(t, F);
    }function w(t) {
      var e = b(t);return e === z && v(t.state), e;
    }function E(t, e) {
      return t && t.state ? 2 !== t.state.wrap ? F : (t.state.gzhead = e, z) : F;
    }function k(t, e, n, i, o, a) {
      if (!t) return F;var s = 1;if (e === q && (e = 6), i < 0 ? (s = 0, i = -i) : i > 15 && (s = 2, i -= 16), o < 1 || o > Q || n !== J || i < 8 || i > 15 || e < 0 || e > 9 || a < 0 || a > W) return r(t, F);8 === i && (i = 9);var d = new y();return t.state = d, d.strm = t, d.wrap = s, d.gzhead = null, d.w_bits = i, d.w_size = 1 << d.w_bits, d.w_mask = d.w_size - 1, d.hash_bits = o + 7, d.hash_size = 1 << d.hash_bits, d.hash_mask = d.hash_size - 1, d.hash_shift = ~~((d.hash_bits + st - 1) / st), d.window = new T.Buf8(2 * d.w_size), d.head = new T.Buf16(d.hash_size), d.prev = new T.Buf16(d.w_size), d.lit_bufsize = 1 << o + 6, d.pending_buf_size = 4 * d.lit_bufsize, d.pending_buf = new T.Buf8(d.pending_buf_size), d.d_buf = 1 * d.lit_bufsize, d.l_buf = 3 * d.lit_bufsize, d.level = e, d.strategy = a, d.method = n, w(t);
    }function x(t, e) {
      return k(t, e, J, tt, et, V);
    }function S(t, e) {
      var n, s, l, c;if (!t || !t.state || e > U || e < 0) return t ? r(t, F) : F;if (s = t.state, !t.output || !t.input && 0 !== t.avail_in || s.status === gt && e !== P) return r(t, 0 === t.avail_out ? G : F);if (s.strm = t, n = s.last_flush, s.last_flush = e, s.status === ct) if (2 === s.wrap) t.adler = 0, d(s, 31), d(s, 139), d(s, 8), s.gzhead ? (d(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (s.gzhead.extra ? 4 : 0) + (s.gzhead.name ? 8 : 0) + (s.gzhead.comment ? 16 : 0)), d(s, 255 & s.gzhead.time), d(s, s.gzhead.time >> 8 & 255), d(s, s.gzhead.time >> 16 & 255), d(s, s.gzhead.time >> 24 & 255), d(s, 9 === s.level ? 2 : s.strategy >= K || s.level < 2 ? 4 : 0), d(s, 255 & s.gzhead.os), s.gzhead.extra && s.gzhead.extra.length && (d(s, 255 & s.gzhead.extra.length), d(s, s.gzhead.extra.length >> 8 & 255)), s.gzhead.hcrc && (t.adler = C(t.adler, s.pending_buf, s.pending, 0)), s.gzindex = 0, s.status = ft) : (d(s, 0), d(s, 0), d(s, 0), d(s, 0), d(s, 0), d(s, 9 === s.level ? 2 : s.strategy >= K || s.level < 2 ? 4 : 0), d(s, wt), s.status = _t);else {
        var f = J + (s.w_bits - 8 << 4) << 8,
            h = -1;h = s.strategy >= K || s.level < 2 ? 0 : s.level < 6 ? 1 : 6 === s.level ? 2 : 3, f |= h << 6, 0 !== s.strstart && (f |= lt), f += 31 - f % 31, s.status = _t, u(s, f), 0 !== s.strstart && (u(s, t.adler >>> 16), u(s, 65535 & t.adler)), t.adler = 1;
      }if (s.status === ft) if (s.gzhead.extra) {
        for (l = s.pending; s.gzindex < (65535 & s.gzhead.extra.length) && (s.pending !== s.pending_buf_size || (s.gzhead.hcrc && s.pending > l && (t.adler = C(t.adler, s.pending_buf, s.pending - l, l)), a(t), l = s.pending, s.pending !== s.pending_buf_size));) {
          d(s, 255 & s.gzhead.extra[s.gzindex]), s.gzindex++;
        }s.gzhead.hcrc && s.pending > l && (t.adler = C(t.adler, s.pending_buf, s.pending - l, l)), s.gzindex === s.gzhead.extra.length && (s.gzindex = 0, s.status = ht);
      } else s.status = ht;if (s.status === ht) if (s.gzhead.name) {
        l = s.pending;do {
          if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > l && (t.adler = C(t.adler, s.pending_buf, s.pending - l, l)), a(t), l = s.pending, s.pending === s.pending_buf_size)) {
            c = 1;break;
          }c = s.gzindex < s.gzhead.name.length ? 255 & s.gzhead.name.charCodeAt(s.gzindex++) : 0, d(s, c);
        } while (0 !== c);s.gzhead.hcrc && s.pending > l && (t.adler = C(t.adler, s.pending_buf, s.pending - l, l)), 0 === c && (s.gzindex = 0, s.status = $t);
      } else s.status = $t;if (s.status === $t) if (s.gzhead.comment) {
        l = s.pending;do {
          if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > l && (t.adler = C(t.adler, s.pending_buf, s.pending - l, l)), a(t), l = s.pending, s.pending === s.pending_buf_size)) {
            c = 1;break;
          }c = s.gzindex < s.gzhead.comment.length ? 255 & s.gzhead.comment.charCodeAt(s.gzindex++) : 0, d(s, c);
        } while (0 !== c);s.gzhead.hcrc && s.pending > l && (t.adler = C(t.adler, s.pending_buf, s.pending - l, l)), 0 === c && (s.status = pt);
      } else s.status = pt;if (s.status === pt && (s.gzhead.hcrc ? (s.pending + 2 > s.pending_buf_size && a(t), s.pending + 2 <= s.pending_buf_size && (d(s, 255 & t.adler), d(s, t.adler >> 8 & 255), t.adler = 0, s.status = _t)) : s.status = _t), 0 !== s.pending) {
        if (a(t), 0 === t.avail_out) return s.last_flush = -1, z;
      } else if (0 === t.avail_in && i(e) <= i(n) && e !== P) return r(t, G);if (s.status === gt && 0 !== t.avail_in) return r(t, G);if (0 !== t.avail_in || 0 !== s.lookahead || e !== N && s.status !== gt) {
        var $ = s.strategy === K ? g(s, e) : s.strategy === Y ? _(s, e) : R[s.level].func(s, e);if ($ !== yt && $ !== bt || (s.status = gt), $ === mt || $ === yt) return 0 === t.avail_out && (s.last_flush = -1), z;if ($ === vt && (e === j ? L._tr_align(s) : e !== U && (L._tr_stored_block(s, 0, 0, !1), e === B && (o(s.head), 0 === s.lookahead && (s.strstart = 0, s.block_start = 0, s.insert = 0))), a(t), 0 === t.avail_out)) return s.last_flush = -1, z;
      }return e !== P ? z : s.wrap <= 0 ? D : (2 === s.wrap ? (d(s, 255 & t.adler), d(s, t.adler >> 8 & 255), d(s, t.adler >> 16 & 255), d(s, t.adler >> 24 & 255), d(s, 255 & t.total_in), d(s, t.total_in >> 8 & 255), d(s, t.total_in >> 16 & 255), d(s, t.total_in >> 24 & 255)) : (u(s, t.adler >>> 16), u(s, 65535 & t.adler)), a(t), s.wrap > 0 && (s.wrap = -s.wrap), 0 !== s.pending ? z : D);
    }function A(t) {
      var e;return t && t.state ? (e = t.state.status) !== ct && e !== ft && e !== ht && e !== $t && e !== pt && e !== _t && e !== gt ? r(t, F) : (t.state = null, e === _t ? r(t, Z) : z) : F;
    }function O(t, e) {
      var n,
          r,
          i,
          a,
          s,
          d,
          u,
          l,
          c = e.length;if (!t || !t.state) return F;if (n = t.state, 2 === (a = n.wrap) || 1 === a && n.status !== ct || n.lookahead) return F;for (1 === a && (t.adler = M(t.adler, e, c, 0)), n.wrap = 0, c >= n.w_size && (0 === a && (o(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), l = new T.Buf8(n.w_size), T.arraySet(l, e, c - n.w_size, n.w_size, 0), e = l, c = n.w_size), s = t.avail_in, d = t.next_in, u = t.input, t.avail_in = c, t.next_in = 0, t.input = e, f(n); n.lookahead >= st;) {
        r = n.strstart, i = n.lookahead - (st - 1);do {
          n.ins_h = (n.ins_h << n.hash_shift ^ n.window[r + st - 1]) & n.hash_mask, n.prev[r & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = r, r++;
        } while (--i);n.strstart = r, n.lookahead = st - 1, f(n);
      }return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = st - 1, n.match_available = 0, t.next_in = d, t.input = u, t.avail_in = s, n.wrap = a, z;
    }var R,
        T = n(24),
        L = n(145),
        M = n(64),
        C = n(65),
        I = n(146),
        N = 0,
        j = 1,
        B = 3,
        P = 4,
        U = 5,
        z = 0,
        D = 1,
        F = -2,
        Z = -3,
        G = -5,
        q = -1,
        H = 1,
        K = 2,
        Y = 3,
        W = 4,
        V = 0,
        X = 2,
        J = 8,
        Q = 9,
        tt = 15,
        et = 8,
        nt = 286,
        rt = 30,
        it = 19,
        ot = 2 * nt + 1,
        at = 15,
        st = 3,
        dt = 258,
        ut = dt + st + 1,
        lt = 32,
        ct = 42,
        ft = 69,
        ht = 73,
        $t = 91,
        pt = 103,
        _t = 113,
        gt = 666,
        mt = 1,
        vt = 2,
        yt = 3,
        bt = 4,
        wt = 3;R = [new m(0, 0, 0, 0, h), new m(4, 4, 8, 4, $), new m(4, 5, 16, 8, $), new m(4, 6, 32, 32, $), new m(4, 4, 16, 16, p), new m(8, 16, 32, 32, p), new m(8, 16, 128, 128, p), new m(8, 32, 128, 256, p), new m(32, 128, 258, 1024, p), new m(32, 258, 258, 4096, p)], e.deflateInit = x, e.deflateInit2 = k, e.deflateReset = w, e.deflateResetKeep = b, e.deflateSetHeader = E, e.deflate = S, e.deflateEnd = A, e.deflateSetDictionary = O, e.deflateInfo = "pako deflate (from Nodeca project)";
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      for (var e = t.length; --e >= 0;) {
        t[e] = 0;
      }
    }function i(t, e, n, r, i) {
      this.static_tree = t, this.extra_bits = e, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = t && t.length;
    }function o(t, e) {
      this.dyn_tree = t, this.max_code = 0, this.stat_desc = e;
    }function a(t) {
      return t < 256 ? ot[t] : ot[256 + (t >>> 7)];
    }function s(t, e) {
      t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255;
    }function d(t, e, n) {
      t.bi_valid > K - n ? (t.bi_buf |= e << t.bi_valid & 65535, s(t, t.bi_buf), t.bi_buf = e >> K - t.bi_valid, t.bi_valid += n - K) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += n);
    }function u(t, e, n) {
      d(t, n[2 * e], n[2 * e + 1]);
    }function l(t, e) {
      var n = 0;do {
        n |= 1 & t, t >>>= 1, n <<= 1;
      } while (--e > 0);return n >>> 1;
    }function c(t) {
      16 === t.bi_valid ? (s(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8);
    }function f(t, e) {
      var n,
          r,
          i,
          o,
          a,
          s,
          d = e.dyn_tree,
          u = e.max_code,
          l = e.stat_desc.static_tree,
          c = e.stat_desc.has_stree,
          f = e.stat_desc.extra_bits,
          h = e.stat_desc.extra_base,
          $ = e.stat_desc.max_length,
          p = 0;for (o = 0; o <= H; o++) {
        t.bl_count[o] = 0;
      }for (d[2 * t.heap[t.heap_max] + 1] = 0, n = t.heap_max + 1; n < q; n++) {
        r = t.heap[n], o = d[2 * d[2 * r + 1] + 1] + 1, o > $ && (o = $, p++), d[2 * r + 1] = o, r > u || (t.bl_count[o]++, a = 0, r >= h && (a = f[r - h]), s = d[2 * r], t.opt_len += s * (o + a), c && (t.static_len += s * (l[2 * r + 1] + a)));
      }if (0 !== p) {
        do {
          for (o = $ - 1; 0 === t.bl_count[o];) {
            o--;
          }t.bl_count[o]--, t.bl_count[o + 1] += 2, t.bl_count[$]--, p -= 2;
        } while (p > 0);for (o = $; 0 !== o; o--) {
          for (r = t.bl_count[o]; 0 !== r;) {
            (i = t.heap[--n]) > u || (d[2 * i + 1] !== o && (t.opt_len += (o - d[2 * i + 1]) * d[2 * i], d[2 * i + 1] = o), r--);
          }
        }
      }
    }function h(t, e, n) {
      var r,
          i,
          o = new Array(H + 1),
          a = 0;for (r = 1; r <= H; r++) {
        o[r] = a = a + n[r - 1] << 1;
      }for (i = 0; i <= e; i++) {
        var s = t[2 * i + 1];0 !== s && (t[2 * i] = l(o[s]++, s));
      }
    }function $() {
      var t,
          e,
          n,
          r,
          o,
          a = new Array(H + 1);for (n = 0, r = 0; r < z - 1; r++) {
        for (st[r] = n, t = 0; t < 1 << Q[r]; t++) {
          at[n++] = r;
        }
      }for (at[n - 1] = r, o = 0, r = 0; r < 16; r++) {
        for (dt[r] = o, t = 0; t < 1 << tt[r]; t++) {
          ot[o++] = r;
        }
      }for (o >>= 7; r < Z; r++) {
        for (dt[r] = o << 7, t = 0; t < 1 << tt[r] - 7; t++) {
          ot[256 + o++] = r;
        }
      }for (e = 0; e <= H; e++) {
        a[e] = 0;
      }for (t = 0; t <= 143;) {
        rt[2 * t + 1] = 8, t++, a[8]++;
      }for (; t <= 255;) {
        rt[2 * t + 1] = 9, t++, a[9]++;
      }for (; t <= 279;) {
        rt[2 * t + 1] = 7, t++, a[7]++;
      }for (; t <= 287;) {
        rt[2 * t + 1] = 8, t++, a[8]++;
      }for (h(rt, F + 1, a), t = 0; t < Z; t++) {
        it[2 * t + 1] = 5, it[2 * t] = l(t, 5);
      }ut = new i(rt, Q, D + 1, F, H), lt = new i(it, tt, 0, Z, H), ct = new i(new Array(0), et, 0, G, Y);
    }function p(t) {
      var e;for (e = 0; e < F; e++) {
        t.dyn_ltree[2 * e] = 0;
      }for (e = 0; e < Z; e++) {
        t.dyn_dtree[2 * e] = 0;
      }for (e = 0; e < G; e++) {
        t.bl_tree[2 * e] = 0;
      }t.dyn_ltree[2 * W] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0;
    }function _(t) {
      t.bi_valid > 8 ? s(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0;
    }function g(t, e, n, r) {
      _(t), r && (s(t, n), s(t, ~n)), M.arraySet(t.pending_buf, t.window, e, n, t.pending), t.pending += n;
    }function m(t, e, n, r) {
      var i = 2 * e,
          o = 2 * n;return t[i] < t[o] || t[i] === t[o] && r[e] <= r[n];
    }function v(t, e, n) {
      for (var r = t.heap[n], i = n << 1; i <= t.heap_len && (i < t.heap_len && m(e, t.heap[i + 1], t.heap[i], t.depth) && i++, !m(e, r, t.heap[i], t.depth));) {
        t.heap[n] = t.heap[i], n = i, i <<= 1;
      }t.heap[n] = r;
    }function y(t, e, n) {
      var r,
          i,
          o,
          s,
          l = 0;if (0 !== t.last_lit) do {
        r = t.pending_buf[t.d_buf + 2 * l] << 8 | t.pending_buf[t.d_buf + 2 * l + 1], i = t.pending_buf[t.l_buf + l], l++, 0 === r ? u(t, i, e) : (o = at[i], u(t, o + D + 1, e), s = Q[o], 0 !== s && (i -= st[o], d(t, i, s)), r--, o = a(r), u(t, o, n), 0 !== (s = tt[o]) && (r -= dt[o], d(t, r, s)));
      } while (l < t.last_lit);u(t, W, e);
    }function b(t, e) {
      var n,
          r,
          i,
          o = e.dyn_tree,
          a = e.stat_desc.static_tree,
          s = e.stat_desc.has_stree,
          d = e.stat_desc.elems,
          u = -1;for (t.heap_len = 0, t.heap_max = q, n = 0; n < d; n++) {
        0 !== o[2 * n] ? (t.heap[++t.heap_len] = u = n, t.depth[n] = 0) : o[2 * n + 1] = 0;
      }for (; t.heap_len < 2;) {
        i = t.heap[++t.heap_len] = u < 2 ? ++u : 0, o[2 * i] = 1, t.depth[i] = 0, t.opt_len--, s && (t.static_len -= a[2 * i + 1]);
      }for (e.max_code = u, n = t.heap_len >> 1; n >= 1; n--) {
        v(t, o, n);
      }i = d;do {
        n = t.heap[1], t.heap[1] = t.heap[t.heap_len--], v(t, o, 1), r = t.heap[1], t.heap[--t.heap_max] = n, t.heap[--t.heap_max] = r, o[2 * i] = o[2 * n] + o[2 * r], t.depth[i] = (t.depth[n] >= t.depth[r] ? t.depth[n] : t.depth[r]) + 1, o[2 * n + 1] = o[2 * r + 1] = i, t.heap[1] = i++, v(t, o, 1);
      } while (t.heap_len >= 2);t.heap[--t.heap_max] = t.heap[1], f(t, e), h(o, u, t.bl_count);
    }function w(t, e, n) {
      var r,
          i,
          o = -1,
          a = e[1],
          s = 0,
          d = 7,
          u = 4;for (0 === a && (d = 138, u = 3), e[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) {
        i = a, a = e[2 * (r + 1) + 1], ++s < d && i === a || (s < u ? t.bl_tree[2 * i] += s : 0 !== i ? (i !== o && t.bl_tree[2 * i]++, t.bl_tree[2 * V]++) : s <= 10 ? t.bl_tree[2 * X]++ : t.bl_tree[2 * J]++, s = 0, o = i, 0 === a ? (d = 138, u = 3) : i === a ? (d = 6, u = 3) : (d = 7, u = 4));
      }
    }function E(t, e, n) {
      var r,
          i,
          o = -1,
          a = e[1],
          s = 0,
          l = 7,
          c = 4;for (0 === a && (l = 138, c = 3), r = 0; r <= n; r++) {
        if (i = a, a = e[2 * (r + 1) + 1], !(++s < l && i === a)) {
          if (s < c) do {
            u(t, i, t.bl_tree);
          } while (0 != --s);else 0 !== i ? (i !== o && (u(t, i, t.bl_tree), s--), u(t, V, t.bl_tree), d(t, s - 3, 2)) : s <= 10 ? (u(t, X, t.bl_tree), d(t, s - 3, 3)) : (u(t, J, t.bl_tree), d(t, s - 11, 7));s = 0, o = i, 0 === a ? (l = 138, c = 3) : i === a ? (l = 6, c = 3) : (l = 7, c = 4);
        }
      }
    }function k(t) {
      var e;for (w(t, t.dyn_ltree, t.l_desc.max_code), w(t, t.dyn_dtree, t.d_desc.max_code), b(t, t.bl_desc), e = G - 1; e >= 3 && 0 === t.bl_tree[2 * nt[e] + 1]; e--) {}return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
    }function x(t, e, n, r) {
      var i;for (d(t, e - 257, 5), d(t, n - 1, 5), d(t, r - 4, 4), i = 0; i < r; i++) {
        d(t, t.bl_tree[2 * nt[i] + 1], 3);
      }E(t, t.dyn_ltree, e - 1), E(t, t.dyn_dtree, n - 1);
    }function S(t) {
      var e,
          n = 4093624447;for (e = 0; e <= 31; e++, n >>>= 1) {
        if (1 & n && 0 !== t.dyn_ltree[2 * e]) return I;
      }if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return N;for (e = 32; e < D; e++) {
        if (0 !== t.dyn_ltree[2 * e]) return N;
      }return I;
    }function A(t) {
      ft || ($(), ft = !0), t.l_desc = new o(t.dyn_ltree, ut), t.d_desc = new o(t.dyn_dtree, lt), t.bl_desc = new o(t.bl_tree, ct), t.bi_buf = 0, t.bi_valid = 0, p(t);
    }function O(t, e, n, r) {
      d(t, (B << 1) + (r ? 1 : 0), 3), g(t, e, n, !0);
    }function R(t) {
      d(t, P << 1, 3), u(t, W, rt), c(t);
    }function T(t, e, n, r) {
      var i,
          o,
          a = 0;t.level > 0 ? (t.strm.data_type === j && (t.strm.data_type = S(t)), b(t, t.l_desc), b(t, t.d_desc), a = k(t), i = t.opt_len + 3 + 7 >>> 3, (o = t.static_len + 3 + 7 >>> 3) <= i && (i = o)) : i = o = n + 5, n + 4 <= i && -1 !== e ? O(t, e, n, r) : t.strategy === C || o === i ? (d(t, (P << 1) + (r ? 1 : 0), 3), y(t, rt, it)) : (d(t, (U << 1) + (r ? 1 : 0), 3), x(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1), y(t, t.dyn_ltree, t.dyn_dtree)), p(t), r && _(t);
    }function L(t, e, n) {
      return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & n, t.last_lit++, 0 === e ? t.dyn_ltree[2 * n]++ : (t.matches++, e--, t.dyn_ltree[2 * (at[n] + D + 1)]++, t.dyn_dtree[2 * a(e)]++), t.last_lit === t.lit_bufsize - 1;
    }var M = n(24),
        C = 4,
        I = 0,
        N = 1,
        j = 2,
        B = 0,
        P = 1,
        U = 2,
        z = 29,
        D = 256,
        F = D + 1 + z,
        Z = 30,
        G = 19,
        q = 2 * F + 1,
        H = 15,
        K = 16,
        Y = 7,
        W = 256,
        V = 16,
        X = 17,
        J = 18,
        Q = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        tt = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        et = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        nt = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        rt = new Array(2 * (F + 2));r(rt);var it = new Array(2 * Z);r(it);var ot = new Array(512);r(ot);var at = new Array(256);r(at);var st = new Array(z);r(st);var dt = new Array(Z);r(dt);var ut,
        lt,
        ct,
        ft = !1;e._tr_init = A, e._tr_stored_block = O, e._tr_flush_block = T, e._tr_tally = L, e._tr_align = R;
  }, function (t, e, n) {
    "use strict";
    t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
    }function i() {
      this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new m.Buf16(320), this.work = new m.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
    }function o(t) {
      var e;return t && t.state ? (e = t.state, t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = B, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new m.Buf32(pt), e.distcode = e.distdyn = new m.Buf32(_t), e.sane = 1, e.back = -1, R) : M;
    }function a(t) {
      var e;return t && t.state ? (e = t.state, e.wsize = 0, e.whave = 0, e.wnext = 0, o(t)) : M;
    }function s(t, e) {
      var n, r;return t && t.state ? (r = t.state, e < 0 ? (n = 0, e = -e) : (n = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? M : (null !== r.window && r.wbits !== e && (r.window = null), r.wrap = n, r.wbits = e, a(t))) : M;
    }function d(t, e) {
      var n, r;return t ? (r = new i(), t.state = r, r.window = null, n = s(t, e), n !== R && (t.state = null), n) : M;
    }function u(t) {
      return d(t, gt);
    }function l(t) {
      if (mt) {
        var e;for (_ = new m.Buf32(512), g = new m.Buf32(32), e = 0; e < 144;) {
          t.lens[e++] = 8;
        }for (; e < 256;) {
          t.lens[e++] = 9;
        }for (; e < 280;) {
          t.lens[e++] = 7;
        }for (; e < 288;) {
          t.lens[e++] = 8;
        }for (w(k, t.lens, 0, 288, _, 0, t.work, { bits: 9 }), e = 0; e < 32;) {
          t.lens[e++] = 5;
        }w(x, t.lens, 0, 32, g, 0, t.work, { bits: 5 }), mt = !1;
      }t.lencode = _, t.lenbits = 9, t.distcode = g, t.distbits = 5;
    }function c(t, e, n, r) {
      var i,
          o = t.state;return null === o.window && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new m.Buf8(o.wsize)), r >= o.wsize ? (m.arraySet(o.window, e, n - o.wsize, o.wsize, 0), o.wnext = 0, o.whave = o.wsize) : (i = o.wsize - o.wnext, i > r && (i = r), m.arraySet(o.window, e, n - r, i, o.wnext), r -= i, r ? (m.arraySet(o.window, e, n - r, r, 0), o.wnext = r, o.whave = o.wsize) : (o.wnext += i, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += i))), 0;
    }function f(t, e) {
      var n,
          i,
          o,
          a,
          s,
          d,
          u,
          f,
          h,
          $,
          p,
          _,
          g,
          pt,
          _t,
          gt,
          mt,
          vt,
          yt,
          bt,
          wt,
          Et,
          kt,
          xt,
          St = 0,
          At = new m.Buf8(4),
          Ot = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return M;n = t.state, n.mode === Y && (n.mode = W), s = t.next_out, o = t.output, u = t.avail_out, a = t.next_in, i = t.input, d = t.avail_in, f = n.hold, h = n.bits, $ = d, p = u, Et = R;t: for (;;) {
        switch (n.mode) {case B:
            if (0 === n.wrap) {
              n.mode = W;break;
            }for (; h < 16;) {
              if (0 === d) break t;d--, f += i[a++] << h, h += 8;
            }if (2 & n.wrap && 35615 === f) {
              n.check = 0, At[0] = 255 & f, At[1] = f >>> 8 & 255, n.check = y(n.check, At, 2, 0), f = 0, h = 0, n.mode = P;break;
            }if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & f) << 8) + (f >> 8)) % 31) {
              t.msg = "incorrect header check", n.mode = ft;break;
            }if ((15 & f) !== j) {
              t.msg = "unknown compression method", n.mode = ft;break;
            }if (f >>>= 4, h -= 4, wt = 8 + (15 & f), 0 === n.wbits) n.wbits = wt;else if (wt > n.wbits) {
              t.msg = "invalid window size", n.mode = ft;break;
            }n.dmax = 1 << wt, t.adler = n.check = 1, n.mode = 512 & f ? H : Y, f = 0, h = 0;break;case P:
            for (; h < 16;) {
              if (0 === d) break t;d--, f += i[a++] << h, h += 8;
            }if (n.flags = f, (255 & n.flags) !== j) {
              t.msg = "unknown compression method", n.mode = ft;break;
            }if (57344 & n.flags) {
              t.msg = "unknown header flags set", n.mode = ft;break;
            }n.head && (n.head.text = f >> 8 & 1), 512 & n.flags && (At[0] = 255 & f, At[1] = f >>> 8 & 255, n.check = y(n.check, At, 2, 0)), f = 0, h = 0, n.mode = U;case U:
            for (; h < 32;) {
              if (0 === d) break t;d--, f += i[a++] << h, h += 8;
            }n.head && (n.head.time = f), 512 & n.flags && (At[0] = 255 & f, At[1] = f >>> 8 & 255, At[2] = f >>> 16 & 255, At[3] = f >>> 24 & 255, n.check = y(n.check, At, 4, 0)), f = 0, h = 0, n.mode = z;case z:
            for (; h < 16;) {
              if (0 === d) break t;d--, f += i[a++] << h, h += 8;
            }n.head && (n.head.xflags = 255 & f, n.head.os = f >> 8), 512 & n.flags && (At[0] = 255 & f, At[1] = f >>> 8 & 255, n.check = y(n.check, At, 2, 0)), f = 0, h = 0, n.mode = D;case D:
            if (1024 & n.flags) {
              for (; h < 16;) {
                if (0 === d) break t;d--, f += i[a++] << h, h += 8;
              }n.length = f, n.head && (n.head.extra_len = f), 512 & n.flags && (At[0] = 255 & f, At[1] = f >>> 8 & 255, n.check = y(n.check, At, 2, 0)), f = 0, h = 0;
            } else n.head && (n.head.extra = null);n.mode = F;case F:
            if (1024 & n.flags && (_ = n.length, _ > d && (_ = d), _ && (n.head && (wt = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Array(n.head.extra_len)), m.arraySet(n.head.extra, i, a, _, wt)), 512 & n.flags && (n.check = y(n.check, i, _, a)), d -= _, a += _, n.length -= _), n.length)) break t;n.length = 0, n.mode = Z;case Z:
            if (2048 & n.flags) {
              if (0 === d) break t;_ = 0;do {
                wt = i[a + _++], n.head && wt && n.length < 65536 && (n.head.name += String.fromCharCode(wt));
              } while (wt && _ < d);if (512 & n.flags && (n.check = y(n.check, i, _, a)), d -= _, a += _, wt) break t;
            } else n.head && (n.head.name = null);n.length = 0, n.mode = G;case G:
            if (4096 & n.flags) {
              if (0 === d) break t;_ = 0;do {
                wt = i[a + _++], n.head && wt && n.length < 65536 && (n.head.comment += String.fromCharCode(wt));
              } while (wt && _ < d);if (512 & n.flags && (n.check = y(n.check, i, _, a)), d -= _, a += _, wt) break t;
            } else n.head && (n.head.comment = null);n.mode = q;case q:
            if (512 & n.flags) {
              for (; h < 16;) {
                if (0 === d) break t;d--, f += i[a++] << h, h += 8;
              }if (f !== (65535 & n.check)) {
                t.msg = "header crc mismatch", n.mode = ft;break;
              }f = 0, h = 0;
            }n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), t.adler = n.check = 0, n.mode = Y;break;case H:
            for (; h < 32;) {
              if (0 === d) break t;d--, f += i[a++] << h, h += 8;
            }t.adler = n.check = r(f), f = 0, h = 0, n.mode = K;case K:
            if (0 === n.havedict) return t.next_out = s, t.avail_out = u, t.next_in = a, t.avail_in = d, n.hold = f, n.bits = h, L;t.adler = n.check = 1, n.mode = Y;case Y:
            if (e === A || e === O) break t;case W:
            if (n.last) {
              f >>>= 7 & h, h -= 7 & h, n.mode = ut;break;
            }for (; h < 3;) {
              if (0 === d) break t;d--, f += i[a++] << h, h += 8;
            }switch (n.last = 1 & f, f >>>= 1, h -= 1, 3 & f) {case 0:
                n.mode = V;break;case 1:
                if (l(n), n.mode = nt, e === O) {
                  f >>>= 2, h -= 2;break t;
                }break;case 2:
                n.mode = Q;break;case 3:
                t.msg = "invalid block type", n.mode = ft;}f >>>= 2, h -= 2;break;case V:
            for (f >>>= 7 & h, h -= 7 & h; h < 32;) {
              if (0 === d) break t;d--, f += i[a++] << h, h += 8;
            }if ((65535 & f) != (f >>> 16 ^ 65535)) {
              t.msg = "invalid stored block lengths", n.mode = ft;break;
            }if (n.length = 65535 & f, f = 0, h = 0, n.mode = X, e === O) break t;case X:
            n.mode = J;case J:
            if (_ = n.length) {
              if (_ > d && (_ = d), _ > u && (_ = u), 0 === _) break t;m.arraySet(o, i, a, _, s), d -= _, a += _, u -= _, s += _, n.length -= _;break;
            }n.mode = Y;break;case Q:
            for (; h < 14;) {
              if (0 === d) break t;d--, f += i[a++] << h, h += 8;
            }if (n.nlen = 257 + (31 & f), f >>>= 5, h -= 5, n.ndist = 1 + (31 & f), f >>>= 5, h -= 5, n.ncode = 4 + (15 & f), f >>>= 4, h -= 4, n.nlen > 286 || n.ndist > 30) {
              t.msg = "too many length or distance symbols", n.mode = ft;break;
            }n.have = 0, n.mode = tt;case tt:
            for (; n.have < n.ncode;) {
              for (; h < 3;) {
                if (0 === d) break t;d--, f += i[a++] << h, h += 8;
              }n.lens[Ot[n.have++]] = 7 & f, f >>>= 3, h -= 3;
            }for (; n.have < 19;) {
              n.lens[Ot[n.have++]] = 0;
            }if (n.lencode = n.lendyn, n.lenbits = 7, kt = { bits: n.lenbits }, Et = w(E, n.lens, 0, 19, n.lencode, 0, n.work, kt), n.lenbits = kt.bits, Et) {
              t.msg = "invalid code lengths set", n.mode = ft;break;
            }n.have = 0, n.mode = et;case et:
            for (; n.have < n.nlen + n.ndist;) {
              for (; St = n.lencode[f & (1 << n.lenbits) - 1], _t = St >>> 24, gt = St >>> 16 & 255, mt = 65535 & St, !(_t <= h);) {
                if (0 === d) break t;d--, f += i[a++] << h, h += 8;
              }if (mt < 16) f >>>= _t, h -= _t, n.lens[n.have++] = mt;else {
                if (16 === mt) {
                  for (xt = _t + 2; h < xt;) {
                    if (0 === d) break t;d--, f += i[a++] << h, h += 8;
                  }if (f >>>= _t, h -= _t, 0 === n.have) {
                    t.msg = "invalid bit length repeat", n.mode = ft;break;
                  }wt = n.lens[n.have - 1], _ = 3 + (3 & f), f >>>= 2, h -= 2;
                } else if (17 === mt) {
                  for (xt = _t + 3; h < xt;) {
                    if (0 === d) break t;d--, f += i[a++] << h, h += 8;
                  }f >>>= _t, h -= _t, wt = 0, _ = 3 + (7 & f), f >>>= 3, h -= 3;
                } else {
                  for (xt = _t + 7; h < xt;) {
                    if (0 === d) break t;d--, f += i[a++] << h, h += 8;
                  }f >>>= _t, h -= _t, wt = 0, _ = 11 + (127 & f), f >>>= 7, h -= 7;
                }if (n.have + _ > n.nlen + n.ndist) {
                  t.msg = "invalid bit length repeat", n.mode = ft;break;
                }for (; _--;) {
                  n.lens[n.have++] = wt;
                }
              }
            }if (n.mode === ft) break;if (0 === n.lens[256]) {
              t.msg = "invalid code -- missing end-of-block", n.mode = ft;break;
            }if (n.lenbits = 9, kt = { bits: n.lenbits }, Et = w(k, n.lens, 0, n.nlen, n.lencode, 0, n.work, kt), n.lenbits = kt.bits, Et) {
              t.msg = "invalid literal/lengths set", n.mode = ft;break;
            }if (n.distbits = 6, n.distcode = n.distdyn, kt = { bits: n.distbits }, Et = w(x, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, kt), n.distbits = kt.bits, Et) {
              t.msg = "invalid distances set", n.mode = ft;break;
            }if (n.mode = nt, e === O) break t;case nt:
            n.mode = rt;case rt:
            if (d >= 6 && u >= 258) {
              t.next_out = s, t.avail_out = u, t.next_in = a, t.avail_in = d, n.hold = f, n.bits = h, b(t, p), s = t.next_out, o = t.output, u = t.avail_out, a = t.next_in, i = t.input, d = t.avail_in, f = n.hold, h = n.bits, n.mode === Y && (n.back = -1);break;
            }for (n.back = 0; St = n.lencode[f & (1 << n.lenbits) - 1], _t = St >>> 24, gt = St >>> 16 & 255, mt = 65535 & St, !(_t <= h);) {
              if (0 === d) break t;d--, f += i[a++] << h, h += 8;
            }if (gt && 0 == (240 & gt)) {
              for (vt = _t, yt = gt, bt = mt; St = n.lencode[bt + ((f & (1 << vt + yt) - 1) >> vt)], _t = St >>> 24, gt = St >>> 16 & 255, mt = 65535 & St, !(vt + _t <= h);) {
                if (0 === d) break t;d--, f += i[a++] << h, h += 8;
              }f >>>= vt, h -= vt, n.back += vt;
            }if (f >>>= _t, h -= _t, n.back += _t, n.length = mt, 0 === gt) {
              n.mode = dt;break;
            }if (32 & gt) {
              n.back = -1, n.mode = Y;break;
            }if (64 & gt) {
              t.msg = "invalid literal/length code", n.mode = ft;break;
            }n.extra = 15 & gt, n.mode = it;case it:
            if (n.extra) {
              for (xt = n.extra; h < xt;) {
                if (0 === d) break t;d--, f += i[a++] << h, h += 8;
              }n.length += f & (1 << n.extra) - 1, f >>>= n.extra, h -= n.extra, n.back += n.extra;
            }n.was = n.length, n.mode = ot;case ot:
            for (; St = n.distcode[f & (1 << n.distbits) - 1], _t = St >>> 24, gt = St >>> 16 & 255, mt = 65535 & St, !(_t <= h);) {
              if (0 === d) break t;d--, f += i[a++] << h, h += 8;
            }if (0 == (240 & gt)) {
              for (vt = _t, yt = gt, bt = mt; St = n.distcode[bt + ((f & (1 << vt + yt) - 1) >> vt)], _t = St >>> 24, gt = St >>> 16 & 255, mt = 65535 & St, !(vt + _t <= h);) {
                if (0 === d) break t;d--, f += i[a++] << h, h += 8;
              }f >>>= vt, h -= vt, n.back += vt;
            }if (f >>>= _t, h -= _t, n.back += _t, 64 & gt) {
              t.msg = "invalid distance code", n.mode = ft;break;
            }n.offset = mt, n.extra = 15 & gt, n.mode = at;case at:
            if (n.extra) {
              for (xt = n.extra; h < xt;) {
                if (0 === d) break t;d--, f += i[a++] << h, h += 8;
              }n.offset += f & (1 << n.extra) - 1, f >>>= n.extra, h -= n.extra, n.back += n.extra;
            }if (n.offset > n.dmax) {
              t.msg = "invalid distance too far back", n.mode = ft;break;
            }n.mode = st;case st:
            if (0 === u) break t;if (_ = p - u, n.offset > _) {
              if ((_ = n.offset - _) > n.whave && n.sane) {
                t.msg = "invalid distance too far back", n.mode = ft;break;
              }_ > n.wnext ? (_ -= n.wnext, g = n.wsize - _) : g = n.wnext - _, _ > n.length && (_ = n.length), pt = n.window;
            } else pt = o, g = s - n.offset, _ = n.length;_ > u && (_ = u), u -= _, n.length -= _;do {
              o[s++] = pt[g++];
            } while (--_);0 === n.length && (n.mode = rt);break;case dt:
            if (0 === u) break t;o[s++] = n.length, u--, n.mode = rt;break;case ut:
            if (n.wrap) {
              for (; h < 32;) {
                if (0 === d) break t;d--, f |= i[a++] << h, h += 8;
              }if (p -= u, t.total_out += p, n.total += p, p && (t.adler = n.check = n.flags ? y(n.check, o, p, s - p) : v(n.check, o, p, s - p)), p = u, (n.flags ? f : r(f)) !== n.check) {
                t.msg = "incorrect data check", n.mode = ft;break;
              }f = 0, h = 0;
            }n.mode = lt;case lt:
            if (n.wrap && n.flags) {
              for (; h < 32;) {
                if (0 === d) break t;d--, f += i[a++] << h, h += 8;
              }if (f !== (4294967295 & n.total)) {
                t.msg = "incorrect length check", n.mode = ft;break;
              }f = 0, h = 0;
            }n.mode = ct;case ct:
            Et = T;break t;case ft:
            Et = C;break t;case ht:
            return I;case $t:default:
            return M;}
      }return t.next_out = s, t.avail_out = u, t.next_in = a, t.avail_in = d, n.hold = f, n.bits = h, (n.wsize || p !== t.avail_out && n.mode < ft && (n.mode < ut || e !== S)) && c(t, t.output, t.next_out, p - t.avail_out) ? (n.mode = ht, I) : ($ -= t.avail_in, p -= t.avail_out, t.total_in += $, t.total_out += p, n.total += p, n.wrap && p && (t.adler = n.check = n.flags ? y(n.check, o, p, t.next_out - p) : v(n.check, o, p, t.next_out - p)), t.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === Y ? 128 : 0) + (n.mode === nt || n.mode === X ? 256 : 0), (0 === $ && 0 === p || e === S) && Et === R && (Et = N), Et);
    }function h(t) {
      if (!t || !t.state) return M;var e = t.state;return e.window && (e.window = null), t.state = null, R;
    }function $(t, e) {
      var n;return t && t.state ? (n = t.state, 0 == (2 & n.wrap) ? M : (n.head = e, e.done = !1, R)) : M;
    }function p(t, e) {
      var n,
          r,
          i = e.length;return t && t.state ? (n = t.state, 0 !== n.wrap && n.mode !== K ? M : n.mode === K && (r = 1, (r = v(r, e, i, 0)) !== n.check) ? C : c(t, e, i, i) ? (n.mode = ht, I) : (n.havedict = 1, R)) : M;
    }var _,
        g,
        m = n(24),
        v = n(64),
        y = n(65),
        b = n(148),
        w = n(149),
        E = 0,
        k = 1,
        x = 2,
        S = 4,
        A = 5,
        O = 6,
        R = 0,
        T = 1,
        L = 2,
        M = -2,
        C = -3,
        I = -4,
        N = -5,
        j = 8,
        B = 1,
        P = 2,
        U = 3,
        z = 4,
        D = 5,
        F = 6,
        Z = 7,
        G = 8,
        q = 9,
        H = 10,
        K = 11,
        Y = 12,
        W = 13,
        V = 14,
        X = 15,
        J = 16,
        Q = 17,
        tt = 18,
        et = 19,
        nt = 20,
        rt = 21,
        it = 22,
        ot = 23,
        at = 24,
        st = 25,
        dt = 26,
        ut = 27,
        lt = 28,
        ct = 29,
        ft = 30,
        ht = 31,
        $t = 32,
        pt = 852,
        _t = 592,
        gt = 15,
        mt = !0;e.inflateReset = a, e.inflateReset2 = s, e.inflateResetKeep = o, e.inflateInit = u, e.inflateInit2 = d, e.inflate = f, e.inflateEnd = h, e.inflateGetHeader = $, e.inflateSetDictionary = p, e.inflateInfo = "pako inflate (from Nodeca project)";
  }, function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
      var n, r, i, o, a, s, d, u, l, c, f, h, $, p, _, g, m, v, y, b, w, E, k, x, S;n = t.state, r = t.next_in, x = t.input, i = r + (t.avail_in - 5), o = t.next_out, S = t.output, a = o - (e - t.avail_out), s = o + (t.avail_out - 257), d = n.dmax, u = n.wsize, l = n.whave, c = n.wnext, f = n.window, h = n.hold, $ = n.bits, p = n.lencode, _ = n.distcode, g = (1 << n.lenbits) - 1, m = (1 << n.distbits) - 1;t: do {
        $ < 15 && (h += x[r++] << $, $ += 8, h += x[r++] << $, $ += 8), v = p[h & g];e: for (;;) {
          if (y = v >>> 24, h >>>= y, $ -= y, 0 === (y = v >>> 16 & 255)) S[o++] = 65535 & v;else {
            if (!(16 & y)) {
              if (0 == (64 & y)) {
                v = p[(65535 & v) + (h & (1 << y) - 1)];continue e;
              }if (32 & y) {
                n.mode = 12;break t;
              }t.msg = "invalid literal/length code", n.mode = 30;break t;
            }b = 65535 & v, y &= 15, y && ($ < y && (h += x[r++] << $, $ += 8), b += h & (1 << y) - 1, h >>>= y, $ -= y), $ < 15 && (h += x[r++] << $, $ += 8, h += x[r++] << $, $ += 8), v = _[h & m];n: for (;;) {
              if (y = v >>> 24, h >>>= y, $ -= y, !(16 & (y = v >>> 16 & 255))) {
                if (0 == (64 & y)) {
                  v = _[(65535 & v) + (h & (1 << y) - 1)];continue n;
                }t.msg = "invalid distance code", n.mode = 30;break t;
              }if (w = 65535 & v, y &= 15, $ < y && (h += x[r++] << $, ($ += 8) < y && (h += x[r++] << $, $ += 8)), (w += h & (1 << y) - 1) > d) {
                t.msg = "invalid distance too far back", n.mode = 30;break t;
              }if (h >>>= y, $ -= y, y = o - a, w > y) {
                if ((y = w - y) > l && n.sane) {
                  t.msg = "invalid distance too far back", n.mode = 30;break t;
                }if (E = 0, k = f, 0 === c) {
                  if (E += u - y, y < b) {
                    b -= y;do {
                      S[o++] = f[E++];
                    } while (--y);E = o - w, k = S;
                  }
                } else if (c < y) {
                  if (E += u + c - y, (y -= c) < b) {
                    b -= y;do {
                      S[o++] = f[E++];
                    } while (--y);if (E = 0, c < b) {
                      y = c, b -= y;do {
                        S[o++] = f[E++];
                      } while (--y);E = o - w, k = S;
                    }
                  }
                } else if (E += c - y, y < b) {
                  b -= y;do {
                    S[o++] = f[E++];
                  } while (--y);E = o - w, k = S;
                }for (; b > 2;) {
                  S[o++] = k[E++], S[o++] = k[E++], S[o++] = k[E++], b -= 3;
                }b && (S[o++] = k[E++], b > 1 && (S[o++] = k[E++]));
              } else {
                E = o - w;do {
                  S[o++] = S[E++], S[o++] = S[E++], S[o++] = S[E++], b -= 3;
                } while (b > 2);b && (S[o++] = S[E++], b > 1 && (S[o++] = S[E++]));
              }break;
            }
          }break;
        }
      } while (r < i && o < s);b = $ >> 3, r -= b, $ -= b << 3, h &= (1 << $) - 1, t.next_in = r, t.next_out = o, t.avail_in = r < i ? i - r + 5 : 5 - (r - i), t.avail_out = o < s ? s - o + 257 : 257 - (o - s), n.hold = h, n.bits = $;
    };
  }, function (t, e, n) {
    "use strict";
    var r = n(24),
        i = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
        o = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
        a = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
        s = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];t.exports = function (t, e, n, d, u, l, c, f) {
      var h,
          $,
          p,
          _,
          g,
          m,
          v,
          y,
          b,
          w = f.bits,
          E = 0,
          k = 0,
          x = 0,
          S = 0,
          A = 0,
          O = 0,
          R = 0,
          T = 0,
          L = 0,
          M = 0,
          C = null,
          I = 0,
          N = new r.Buf16(16),
          j = new r.Buf16(16),
          B = null,
          P = 0;for (E = 0; E <= 15; E++) {
        N[E] = 0;
      }for (k = 0; k < d; k++) {
        N[e[n + k]]++;
      }for (A = w, S = 15; S >= 1 && 0 === N[S]; S--) {}if (A > S && (A = S), 0 === S) return u[l++] = 20971520, u[l++] = 20971520, f.bits = 1, 0;for (x = 1; x < S && 0 === N[x]; x++) {}for (A < x && (A = x), T = 1, E = 1; E <= 15; E++) {
        if (T <<= 1, (T -= N[E]) < 0) return -1;
      }if (T > 0 && (0 === t || 1 !== S)) return -1;for (j[1] = 0, E = 1; E < 15; E++) {
        j[E + 1] = j[E] + N[E];
      }for (k = 0; k < d; k++) {
        0 !== e[n + k] && (c[j[e[n + k]]++] = k);
      }if (0 === t ? (C = B = c, m = 19) : 1 === t ? (C = i, I -= 257, B = o, P -= 257, m = 256) : (C = a, B = s, m = -1), M = 0, k = 0, E = x, g = l, O = A, R = 0, p = -1, L = 1 << A, _ = L - 1, 1 === t && L > 852 || 2 === t && L > 592) return 1;for (;;) {
        v = E - R, c[k] < m ? (y = 0, b = c[k]) : c[k] > m ? (y = B[P + c[k]], b = C[I + c[k]]) : (y = 96, b = 0), h = 1 << E - R, $ = 1 << O, x = $;do {
          $ -= h, u[g + (M >> R) + $] = v << 24 | y << 16 | b | 0;
        } while (0 !== $);for (h = 1 << E - 1; M & h;) {
          h >>= 1;
        }if (0 !== h ? (M &= h - 1, M += h) : M = 0, k++, 0 == --N[E]) {
          if (E === S) break;E = e[n + c[k]];
        }if (E > A && (M & _) !== p) {
          for (0 === R && (R = A), g += x, O = E - R, T = 1 << O; O + R < S && !((T -= N[O + R]) <= 0);) {
            O++, T <<= 1;
          }if (L += 1 << O, 1 === t && L > 852 || 2 === t && L > 592) return 1;p = M & _, u[p] = A << 24 | O << 16 | g - l | 0;
        }
      }return 0 !== M && (u[g + M] = E - R << 24 | 64 << 16 | 0), f.bits = A, 0;
    };
  }, function (t, e, n) {
    "use strict";
    t.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
  }, function (t, e, n) {
    t.exports = n(152);
  }, function (t, e, n) {
    function r() {}function i(t, e, n) {
      function i() {
        s.parentNode.removeChild(s), window[$] = r;
      }"function" == typeof e && (n = e, e = {}), e || (e = {});var s,
          d,
          u = e.prefix || "__jp",
          l = e.param || "callback",
          c = null != e.timeout ? e.timeout : 6e4,
          f = encodeURIComponent,
          h = document.getElementsByTagName("script")[0] || document.head,
          $ = u + a++;c && (d = setTimeout(function () {
        i(), n && n(new Error("Timeout"));
      }, c)), window[$] = function (t) {
        o("jsonp got", t), d && clearTimeout(d), i(), n && n(null, t);
      }, t += (~t.indexOf("?") ? "&" : "?") + l + "=" + f($), t = t.replace("?&", "?"), o('jsonp req "%s"', t), s = document.createElement("script"), s.src = t, h.parentNode.insertBefore(s, h);
    }var o = n(153)("jsonp");t.exports = i;var a = 0;
  }, function (t, e, n) {
    (function (r) {
      function i() {
        return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }function o(t) {
        var n = this.useColors;if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), n) {
          var r = "color: " + this.color;t.splice(1, 0, r, "color: inherit");var i = 0,
              o = 0;t[0].replace(/%[a-zA-Z%]/g, function (t) {
            "%%" !== t && (i++, "%c" === t && (o = i));
          }), t.splice(o, 0, r);
        }
      }function a() {
        return "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }function s(t) {
        try {
          null == t ? e.storage.removeItem("debug") : e.storage.debug = t;
        } catch (t) {}
      }function d() {
        var t;try {
          t = e.storage.debug;
        } catch (t) {}return !t && void 0 !== r && "env" in r && (t = r.env.DEBUG), t;
      }e = t.exports = n(154), e.log = a, e.formatArgs = o, e.save = s, e.load = d, e.useColors = i, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
          return window.localStorage;
        } catch (t) {}
      }(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function (t) {
        try {
          return JSON.stringify(t);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      }, e.enable(d());
    }).call(e, n(1));
  }, function (t, e, n) {
    function r(t) {
      var n,
          r = 0;for (n in t) {
        r = (r << 5) - r + t.charCodeAt(n), r |= 0;
      }return e.colors[Math.abs(r) % e.colors.length];
    }function i(t) {
      function n() {
        if (n.enabled) {
          var t = n,
              r = +new Date(),
              i = r - (u || r);t.diff = i, t.prev = u, t.curr = r, u = r;for (var o = new Array(arguments.length), a = 0; a < o.length; a++) {
            o[a] = arguments[a];
          }o[0] = e.coerce(o[0]), "string" != typeof o[0] && o.unshift("%O");var s = 0;o[0] = o[0].replace(/%([a-zA-Z%])/g, function (n, r) {
            if ("%%" === n) return n;s++;var i = e.formatters[r];if ("function" == typeof i) {
              var a = o[s];n = i.call(t, a), o.splice(s, 1), s--;
            }return n;
          }), e.formatArgs.call(t, o);(n.log || e.log || console.log.bind(console)).apply(t, o);
        }
      }return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = r(t), "function" == typeof e.init && e.init(n), n;
    }function o(t) {
      e.save(t), e.names = [], e.skips = [];for (var n = ("string" == typeof t ? t : "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) {
        n[i] && (t = n[i].replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
      }
    }function a() {
      e.enable("");
    }function s(t) {
      var n, r;for (n = 0, r = e.skips.length; n < r; n++) {
        if (e.skips[n].test(t)) return !1;
      }for (n = 0, r = e.names.length; n < r; n++) {
        if (e.names[n].test(t)) return !0;
      }return !1;
    }function d(t) {
      return t instanceof Error ? t.stack || t.message : t;
    }e = t.exports = i.debug = i.default = i, e.coerce = d, e.disable = a, e.enable = o, e.enabled = s, e.humanize = n(155), e.names = [], e.skips = [], e.formatters = {};var u;
  }, function (t, e) {
    function n(t) {
      if (t = String(t), !(t.length > 100)) {
        var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if (e) {
          var n = parseFloat(e[1]);switch ((e[2] || "ms").toLowerCase()) {case "years":case "year":case "yrs":case "yr":case "y":
              return n * l;case "days":case "day":case "d":
              return n * u;case "hours":case "hour":case "hrs":case "hr":case "h":
              return n * d;case "minutes":case "minute":case "mins":case "min":case "m":
              return n * s;case "seconds":case "second":case "secs":case "sec":case "s":
              return n * a;case "milliseconds":case "millisecond":case "msecs":case "msec":case "ms":
              return n;default:
              return;}
        }
      }
    }function r(t) {
      return t >= u ? Math.round(t / u) + "d" : t >= d ? Math.round(t / d) + "h" : t >= s ? Math.round(t / s) + "m" : t >= a ? Math.round(t / a) + "s" : t + "ms";
    }function i(t) {
      return o(t, u, "day") || o(t, d, "hour") || o(t, s, "minute") || o(t, a, "second") || t + " ms";
    }function o(t, e, n) {
      if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s";
    }var a = 1e3,
        s = 60 * a,
        d = 60 * s,
        u = 24 * d,
        l = 365.25 * u;t.exports = function (t, e) {
      e = e || {};var o = typeof t === "undefined" ? "undefined" : _typeof(t);if ("string" === o && t.length > 0) return n(t);if ("number" === o && !1 === isNaN(t)) return e.long ? i(t) : r(t);throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
    };
  }, function (t, e, n) {
    "use strict";
    var r = function r() {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("div", { staticClass: "vue-tel-input" }, [n("div", { directives: [{ name: "click-outside", rawName: "v-click-outside", value: t.clickedOutside, expression: "clickedOutside" }], staticClass: "dropdown", class: { open: t.open }, on: { click: t.toggleDropdown } }, [n("span", { staticClass: "selection" }, [n("img", { staticClass: "flag", attrs: { src: t.activeCountry.icon } }), t._v(" "), n("span", { staticClass: "dropdown-arrow" }, [t._v("\n\t\t" + t._s(t.open ? "▲" : "▼") + "\n\t\t")])]), t._v(" "), n("ul", { directives: [{ name: "show", rawName: "v-show", value: t.open, expression: "open" }] }, t._l(t.allCountries, function (e) {
        return n("li", { key: e.iso2, staticClass: "dropdown-item", on: { click: function click(n) {
              t.choose(e);
            } } }, [n("img", { staticStyle: { width: "25px", "margin-right": "5px" }, attrs: { src: e.icon } }), t._v(" "), n("strong", [t._v(t._s(e.name) + " ")]), t._v(" "), n("span", [t._v("+" + t._s(e.dialCode))])]);
      }))]), t._v(" "), n("input", { directives: [{ name: "model", rawName: "v-model", value: t.phone, expression: "phone" }], attrs: { placeholder: "Enter your phone number", state: t.state, formatter: t.format }, domProps: { value: t.phone }, on: { input: [function (e) {
            e.target.composing || (t.phone = e.target.value);
          }, t.onInput] } })]);
    },
        i = [];r._withStripped = !0;var o = { render: r, staticRenderFns: i };e.a = o;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../node_modules/timers-browserify/main.js */ 0).setImmediate, __webpack_require__(/*! ./../node_modules/timers-browserify/main.js */ 0).clearImmediate, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ 9)(module)))

/***/ }),
/* 9 */,
/* 10 */
/*!********************************!*\
  !*** ./dist/vue-tel-input.css ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/*!**********************!*\
  !*** ./demo/App.vue ***!
  \**********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_home_mikob_scratchspace_vue_tel_input_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/home/mikob/scratchspace/vue-tel-input/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../node_modules/vue-loader/lib/selector?type=script&index=0!./App.vue */ 2);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bd2bee3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-1bd2bee3","hasScoped":false,"buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector?type=template&index=0!./App.vue */ 14);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-1bd2bee3","scoped":false,"hasInlineConfig":true}!../node_modules/vue-loader/lib/selector?type=styles&index=0!./App.vue */ 12)
}
var normalizeComponent = __webpack_require__(/*! ../node_modules/vue-loader/lib/component-normalizer */ 13)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_home_mikob_scratchspace_vue_tel_input_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bd2bee3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "demo/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1bd2bee3", Component.options)
  } else {
    hotAPI.reload("data-v-1bd2bee3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 12 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-1bd2bee3","scoped":false,"hasInlineConfig":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./demo/App.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */,
/* 14 */
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1bd2bee3","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./demo/App.vue ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c(
        "b-card",
        {
          attrs: {
            title: "Telephone Input Vue",
            "sub-title": "made with &#x2764; by Steven."
          }
        },
        [
          _c(
            "b-row",
            { staticStyle: { "margin-top": "20px" } },
            [
              _c("b-col", { attrs: { md: "4", offset: "4" } }, [
                _c(
                  "div",
                  { staticStyle: { width: "270px" } },
                  [_c("vue-tel-input", { on: { onInput: _vm.onInput } })],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _vm.phone.number
            ? _c(
                "b-row",
                { staticStyle: { "margin-top": "20px" } },
                [
                  _c("b-col", { attrs: { md: "4", offset: "4" } }, [
                    _c("code", [
                      _c("span", [
                        _vm._v("Number:\n              "),
                        _c("strong", [_vm._v(_vm._s(_vm.phone.number))]),
                        _vm._v(", \n            ")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v("Is valid:\n              "),
                        _c("strong", [_vm._v(_vm._s(_vm.phone.isValid))]),
                        _vm._v(", \n            ")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v("Country:\n              "),
                        _c("strong", [_vm._v(_vm._s(_vm.phone.country))])
                      ])
                    ])
                  ])
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1bd2bee3", esExports)
  }
}

/***/ })
],[3]);