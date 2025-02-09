(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define("WebVideoCanvas", [], factory);
  else if (typeof exports === 'object')
    exports["WebVideoCanvas"] = factory();
  else
    root["WebVideoCanvas"] = factory();
})(this, () => {
  return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 963:
/***/ ((module) => {

          module.exports = function (it) {
            if (typeof it != 'function') throw TypeError(it + ' is not a function!');
            return it;
          };


          /***/
}),

/***/ 793:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          "use strict";

          var at = __webpack_require__(496)(true);

          // `AdvanceStringIndex` abstract operation
          // https://tc39.github.io/ecma262/#sec-advancestringindex
          module.exports = function (S, index, unicode) {
            return index + (unicode ? at(S, index).length : 1);
          };


          /***/
}),

/***/ 7:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          var isObject = __webpack_require__(286);
          module.exports = function (it) {
            if (!isObject(it)) throw TypeError(it + ' is not an object!');
            return it;
          };


          /***/
}),

/***/ 488:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          // getting tag from 19.1.3.6 Object.prototype.toString()
          var cof = __webpack_require__(32);
          var TAG = __webpack_require__(314)('toStringTag');
          // ES3 wrong here
          var ARG = cof(function () { return arguments; }()) == 'Arguments';

          // fallback for IE11 Script Access Denied error
          var tryGet = function (it, key) {
            try {
              return it[key];
            } catch (e) { /* empty */ }
          };

          module.exports = function (it) {
            var O, T, B;
            return it === undefined ? 'Undefined' : it === null ? 'Null'
              // @@toStringTag case
              : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
                // builtinTag case
                : ARG ? cof(O)
                  // ES3 arguments fallback
                  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
          };


          /***/
}),

/***/ 32:
/***/ ((module) => {

          var toString = {}.toString;

          module.exports = function (it) {
            return toString.call(it).slice(8, -1);
          };


          /***/
}),

/***/ 645:
/***/ ((module) => {

          var core = module.exports = { version: '2.6.12' };
          if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


          /***/
}),

/***/ 741:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          // optional / simple context binding
          var aFunction = __webpack_require__(963);
          module.exports = function (fn, that, length) {
            aFunction(fn);
            if (that === undefined) return fn;
            switch (length) {
              case 1: return function (a) {
                return fn.call(that, a);
              };
              case 2: return function (a, b) {
                return fn.call(that, a, b);
              };
              case 3: return function (a, b, c) {
                return fn.call(that, a, b, c);
              };
            }
            return function (/* ...args */) {
              return fn.apply(that, arguments);
            };
          };


          /***/
}),

/***/ 355:
/***/ ((module) => {

          // 7.2.1 RequireObjectCoercible(argument)
          module.exports = function (it) {
            if (it == undefined) throw TypeError("Can't call method on  " + it);
            return it;
          };


          /***/
}),

/***/ 57:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          // Thank's IE8 for his funny defineProperty
          module.exports = !__webpack_require__(253)(function () {
            return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
          });


          /***/
}),

/***/ 457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          var isObject = __webpack_require__(286);
          var document = (__webpack_require__(816).document);
          // typeof document.createElement is 'object' in old IE
          var is = isObject(document) && isObject(document.createElement);
          module.exports = function (it) {
            return is ? document.createElement(it) : {};
          };


          /***/
}),

/***/ 985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          var global = __webpack_require__(816);
          var core = __webpack_require__(645);
          var hide = __webpack_require__(728);
          var redefine = __webpack_require__(234);
          var ctx = __webpack_require__(741);
          var PROTOTYPE = 'prototype';

          var $export = function (type, name, source) {
            var IS_FORCED = type & $export.F;
            var IS_GLOBAL = type & $export.G;
            var IS_STATIC = type & $export.S;
            var IS_PROTO = type & $export.P;
            var IS_BIND = type & $export.B;
            var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
            var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
            var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
            var key, own, out, exp;
            if (IS_GLOBAL) source = name;
            for (key in source) {
              // contains in native
              own = !IS_FORCED && target && target[key] !== undefined;
              // export native or passed
              out = (own ? target : source)[key];
              // bind timers to global for call from export context
              exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
              // extend global
              if (target) redefine(target, key, out, type & $export.U);
              // export
              if (exports[key] != out) hide(exports, key, exp);
              if (IS_PROTO && expProto[key] != out) expProto[key] = out;
            }
          };
          global.core = core;
          // type bitmap
          $export.F = 1;   // forced
          $export.G = 2;   // global
          $export.S = 4;   // static
          $export.P = 8;   // proto
          $export.B = 16;  // bind
          $export.W = 32;  // wrap
          $export.U = 64;  // safe
          $export.R = 128; // real proto method for `library`
          module.exports = $export;


          /***/
}),

/***/ 253:
/***/ ((module) => {

          module.exports = function (exec) {
            try {
              return !!exec();
            } catch (e) {
              return true;
            }
          };


          /***/
}),

/***/ 82:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          "use strict";

          __webpack_require__(269);
          var redefine = __webpack_require__(234);
          var hide = __webpack_require__(728);
          var fails = __webpack_require__(253);
          var defined = __webpack_require__(355);
          var wks = __webpack_require__(314);
          var regexpExec = __webpack_require__(165);

          var SPECIES = wks('species');

          var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
            // #replace needs built-in support for named groups.
            // #match works fine because it just return the exec results, even if it has
            // a "grops" property.
            var re = /./;
            re.exec = function () {
              var result = [];
              result.groups = { a: '7' };
              return result;
            };
            return ''.replace(re, '$<a>') !== '7';
          });

          var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
            // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
            var re = /(?:)/;
            var originalExec = re.exec;
            re.exec = function () { return originalExec.apply(this, arguments); };
            var result = 'ab'.split(re);
            return result.length === 2 && result[0] === 'a' && result[1] === 'b';
          })();

          module.exports = function (KEY, length, exec) {
            var SYMBOL = wks(KEY);

            var DELEGATES_TO_SYMBOL = !fails(function () {
              // String methods call symbol-named RegEp methods
              var O = {};
              O[SYMBOL] = function () { return 7; };
              return ''[KEY](O) != 7;
            });

            var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
              // Symbol-named RegExp methods call .exec
              var execCalled = false;
              var re = /a/;
              re.exec = function () { execCalled = true; return null; };
              if (KEY === 'split') {
                // RegExp[@@split] doesn't call the regex's exec method, but first creates
                // a new one. We need to return the patched regex when creating the new one.
                re.constructor = {};
                re.constructor[SPECIES] = function () { return re; };
              }
              re[SYMBOL]('');
              return !execCalled;
            }) : undefined;

            if (
              !DELEGATES_TO_SYMBOL ||
              !DELEGATES_TO_EXEC ||
              (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
              (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
            ) {
              var nativeRegExpMethod = /./[SYMBOL];
              var fns = exec(
                defined,
                SYMBOL,
                ''[KEY],
                function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
                  if (regexp.exec === regexpExec) {
                    if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                      // The native String method already delegates to @@method (this
                      // polyfilled function), leasing to infinite recursion.
                      // We avoid it by directly calling the native @@method method.
                      return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
                    }
                    return { done: true, value: nativeMethod.call(str, regexp, arg2) };
                  }
                  return { done: false };
                }
              );
              var strfn = fns[0];
              var rxfn = fns[1];

              redefine(String.prototype, KEY, strfn);
              hide(RegExp.prototype, SYMBOL, length == 2
                // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
                // 21.2.5.11 RegExp.prototype[@@split](string, limit)
                ? function (string, arg) { return rxfn.call(string, this, arg); }
                // 21.2.5.6 RegExp.prototype[@@match](string)
                // 21.2.5.9 RegExp.prototype[@@search](string)
                : function (string) { return rxfn.call(string, this); }
              );
            }
          };


          /***/
}),

/***/ 218:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          "use strict";

          // 21.2.5.3 get RegExp.prototype.flags
          var anObject = __webpack_require__(7);
          module.exports = function () {
            var that = anObject(this);
            var result = '';
            if (that.global) result += 'g';
            if (that.ignoreCase) result += 'i';
            if (that.multiline) result += 'm';
            if (that.unicode) result += 'u';
            if (that.sticky) result += 'y';
            return result;
          };


          /***/
}),

/***/ 18:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          module.exports = __webpack_require__(825)('native-function-to-string', Function.toString);


          /***/
}),

/***/ 816:
/***/ ((module) => {

          // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
          var global = module.exports = typeof window != 'undefined' && window.Math == Math
            ? window : typeof self != 'undefined' && self.Math == Math ? self
              // eslint-disable-next-line no-new-func
              : Function('return this')();
          if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


          /***/
}),

/***/ 181:
/***/ ((module) => {

          var hasOwnProperty = {}.hasOwnProperty;
          module.exports = function (it, key) {
            return hasOwnProperty.call(it, key);
          };


          /***/
}),

/***/ 728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          var dP = __webpack_require__(275);
          var createDesc = __webpack_require__(681);
          module.exports = __webpack_require__(57) ? function (object, key, value) {
            return dP.f(object, key, createDesc(1, value));
          } : function (object, key, value) {
            object[key] = value;
            return object;
          };


          /***/
}),

/***/ 734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          module.exports = !__webpack_require__(57) && !__webpack_require__(253)(function () {
            return Object.defineProperty(__webpack_require__(457)('div'), 'a', { get: function () { return 7; } }).a != 7;
          });


          /***/
}),

/***/ 286:
/***/ ((module) => {

          module.exports = function (it) {
            return typeof it === 'object' ? it !== null : typeof it === 'function';
          };


          /***/
}),

/***/ 364:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          // 7.2.8 IsRegExp(argument)
          var isObject = __webpack_require__(286);
          var cof = __webpack_require__(32);
          var MATCH = __webpack_require__(314)('match');
          module.exports = function (it) {
            var isRegExp;
            return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
          };


          /***/
}),

/***/ 461:
/***/ ((module) => {

          module.exports = false;


          /***/
}),

/***/ 275:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

          var anObject = __webpack_require__(7);
          var IE8_DOM_DEFINE = __webpack_require__(734);
          var toPrimitive = __webpack_require__(689);
          var dP = Object.defineProperty;

          exports.f = __webpack_require__(57) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE) try {
              return dP(O, P, Attributes);
            } catch (e) { /* empty */ }
            if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
            if ('value' in Attributes) O[P] = Attributes.value;
            return O;
          };


          /***/
}),

/***/ 681:
/***/ ((module) => {

          module.exports = function (bitmap, value) {
            return {
              enumerable: !(bitmap & 1),
              configurable: !(bitmap & 2),
              writable: !(bitmap & 4),
              value: value
            };
          };


          /***/
}),

/***/ 234:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          var global = __webpack_require__(816);
          var hide = __webpack_require__(728);
          var has = __webpack_require__(181);
          var SRC = __webpack_require__(953)('src');
          var $toString = __webpack_require__(18);
          var TO_STRING = 'toString';
          var TPL = ('' + $toString).split(TO_STRING);

          (__webpack_require__(645).inspectSource) = function (it) {
            return $toString.call(it);
          };

          (module.exports = function (O, key, val, safe) {
            var isFunction = typeof val == 'function';
            if (isFunction) has(val, 'name') || hide(val, 'name', key);
            if (O[key] === val) return;
            if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
            if (O === global) {
              O[key] = val;
            } else if (!safe) {
              delete O[key];
              hide(O, key, val);
            } else if (O[key]) {
              O[key] = val;
            } else {
              hide(O, key, val);
            }
            // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
          })(Function.prototype, TO_STRING, function toString() {
            return typeof this == 'function' && this[SRC] || $toString.call(this);
          });


          /***/
}),

/***/ 787:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          "use strict";


          var classof = __webpack_require__(488);
          var builtinExec = RegExp.prototype.exec;

          // `RegExpExec` abstract operation
          // https://tc39.github.io/ecma262/#sec-regexpexec
          module.exports = function (R, S) {
            var exec = R.exec;
            if (typeof exec === 'function') {
              var result = exec.call(R, S);
              if (typeof result !== 'object') {
                throw new TypeError('RegExp exec method returned something other than an Object or null');
              }
              return result;
            }
            if (classof(R) !== 'RegExp') {
              throw new TypeError('RegExp#exec called on incompatible receiver');
            }
            return builtinExec.call(R, S);
          };


          /***/
}),

/***/ 165:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          "use strict";


          var regexpFlags = __webpack_require__(218);

          var nativeExec = RegExp.prototype.exec;
          // This always refers to the native implementation, because the
          // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
          // which loads this file before patching the method.
          var nativeReplace = String.prototype.replace;

          var patchedExec = nativeExec;

          var LAST_INDEX = 'lastIndex';

          var UPDATES_LAST_INDEX_WRONG = (function () {
            var re1 = /a/,
              re2 = /b*/g;
            nativeExec.call(re1, 'a');
            nativeExec.call(re2, 'a');
            return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
          })();

          // nonparticipating capturing group, copied from es5-shim's String#split patch.
          var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

          var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

          if (PATCH) {
            patchedExec = function exec(str) {
              var re = this;
              var lastIndex, reCopy, match, i;

              if (NPCG_INCLUDED) {
                reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
              }
              if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

              match = nativeExec.call(re, str);

              if (UPDATES_LAST_INDEX_WRONG && match) {
                re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
              }
              if (NPCG_INCLUDED && match && match.length > 1) {
                // Fix browsers whose `exec` methods don't consistently return `undefined`
                // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
                // eslint-disable-next-line no-loop-func
                nativeReplace.call(match[0], reCopy, function () {
                  for (i = 1; i < arguments.length - 2; i++) {
                    if (arguments[i] === undefined) match[i] = undefined;
                  }
                });
              }

              return match;
            };
          }

          module.exports = patchedExec;


          /***/
}),

/***/ 825:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          var core = __webpack_require__(645);
          var global = __webpack_require__(816);
          var SHARED = '__core-js_shared__';
          var store = global[SHARED] || (global[SHARED] = {});

          (module.exports = function (key, value) {
            return store[key] || (store[key] = value !== undefined ? value : {});
          })('versions', []).push({
            version: core.version,
            mode: __webpack_require__(461) ? 'pure' : 'global',
            copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
          });


          /***/
}),

/***/ 637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          // 7.3.20 SpeciesConstructor(O, defaultConstructor)
          var anObject = __webpack_require__(7);
          var aFunction = __webpack_require__(963);
          var SPECIES = __webpack_require__(314)('species');
          module.exports = function (O, D) {
            var C = anObject(O).constructor;
            var S;
            return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
          };


          /***/
}),

/***/ 496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          var toInteger = __webpack_require__(467);
          var defined = __webpack_require__(355);
          // true  -> String#at
          // false -> String#codePointAt
          module.exports = function (TO_STRING) {
            return function (that, pos) {
              var s = String(defined(that));
              var i = toInteger(pos);
              var l = s.length;
              var a, b;
              if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
              a = s.charCodeAt(i);
              return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
                ? TO_STRING ? s.charAt(i) : a
                : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
            };
          };


          /***/
}),

/***/ 467:
/***/ ((module) => {

          // 7.1.4 ToInteger
          var ceil = Math.ceil;
          var floor = Math.floor;
          module.exports = function (it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
          };


          /***/
}),

/***/ 875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          // 7.1.15 ToLength
          var toInteger = __webpack_require__(467);
          var min = Math.min;
          module.exports = function (it) {
            return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
          };


          /***/
}),

/***/ 689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          // 7.1.1 ToPrimitive(input [, PreferredType])
          var isObject = __webpack_require__(286);
          // instead of the ES6 spec version, we didn't implement @@toPrimitive case
          // and the second argument - flag - preferred type is a string
          module.exports = function (it, S) {
            if (!isObject(it)) return it;
            var fn, val;
            if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
            if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
            if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
          };


          /***/
}),

/***/ 953:
/***/ ((module) => {

          var id = 0;
          var px = Math.random();
          module.exports = function (key) {
            return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
          };


          /***/
}),

/***/ 314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

          var store = __webpack_require__(825)('wks');
          var uid = __webpack_require__(953);
          var Symbol = (__webpack_require__(816).Symbol);
          var USE_SYMBOL = typeof Symbol == 'function';

          var $exports = module.exports = function (name) {
            return store[name] || (store[name] =
              USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
          };

          $exports.store = store;


          /***/
}),

/***/ 269:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

          "use strict";

          var regexpExec = __webpack_require__(165);
          __webpack_require__(985)({
            target: 'RegExp',
            proto: true,
            forced: regexpExec !== /./.exec
          }, {
            exec: regexpExec
          });


          /***/
}),

/***/ 876:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

          "use strict";


          var isRegExp = __webpack_require__(364);
          var anObject = __webpack_require__(7);
          var speciesConstructor = __webpack_require__(637);
          var advanceStringIndex = __webpack_require__(793);
          var toLength = __webpack_require__(875);
          var callRegExpExec = __webpack_require__(787);
          var regexpExec = __webpack_require__(165);
          var fails = __webpack_require__(253);
          var $min = Math.min;
          var $push = [].push;
          var $SPLIT = 'split';
          var LENGTH = 'length';
          var LAST_INDEX = 'lastIndex';
          var MAX_UINT32 = 0xffffffff;

          // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
          var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

          // @@split logic
          __webpack_require__(82)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
            var internalSplit;
            if (
              'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
              'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
              'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
              '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
              '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
              ''[$SPLIT](/.?/)[LENGTH]
            ) {
              // based on es5-shim implementation, need to rework it
              internalSplit = function (separator, limit) {
                var string = String(this);
                if (separator === undefined && limit === 0) return [];
                // If `separator` is not a regex, use native split
                if (!isRegExp(separator)) return $split.call(string, separator, limit);
                var output = [];
                var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
                var lastLastIndex = 0;
                var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
                // Make `global` and avoid `lastIndex` issues by working with a copy
                var separatorCopy = new RegExp(separator.source, flags + 'g');
                var match, lastIndex, lastLength;
                while (match = regexpExec.call(separatorCopy, string)) {
                  lastIndex = separatorCopy[LAST_INDEX];
                  if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
                    lastLength = match[0][LENGTH];
                    lastLastIndex = lastIndex;
                    if (output[LENGTH] >= splitLimit) break;
                  }
                  if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
                }
                if (lastLastIndex === string[LENGTH]) {
                  if (lastLength || !separatorCopy.test('')) output.push('');
                } else output.push(string.slice(lastLastIndex));
                return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
              };
              // Chakra, V8
            } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
              internalSplit = function (separator, limit) {
                return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
              };
            } else {
              internalSplit = $split;
            }

            return [
              // `String.prototype.split` method
              // https://tc39.github.io/ecma262/#sec-string.prototype.split
              function split(separator, limit) {
                var O = defined(this);
                var splitter = separator == undefined ? undefined : separator[SPLIT];
                return splitter !== undefined
                  ? splitter.call(separator, O, limit)
                  : internalSplit.call(String(O), separator, limit);
              },
              // `RegExp.prototype[@@split]` method
              // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
              //
              // NOTE: This cannot be properly polyfilled in engines that don't support
              // the 'y' flag.
              function (regexp, limit) {
                var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
                if (res.done) return res.value;

                var rx = anObject(regexp);
                var S = String(this);
                var C = speciesConstructor(rx, RegExp);

                var unicodeMatching = rx.unicode;
                var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

                // ^(? + rx + ) is needed, in combination with some S slicing, to
                // simulate the 'y' flag.
                var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
                var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                if (lim === 0) return [];
                if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
                var p = 0;
                var q = 0;
                var A = [];
                while (q < S.length) {
                  splitter.lastIndex = SUPPORTS_Y ? q : 0;
                  var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                  var e;
                  if (
                    z === null ||
                    (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
                  ) {
                    q = advanceStringIndex(S, q, unicodeMatching);
                  } else {
                    A.push(S.slice(p, q));
                    if (A.length === lim) return A;
                    for (var i = 1; i <= z.length - 1; i++) {
                      A.push(z[i]);
                      if (A.length === lim) return A;
                    }
                    q = p = e;
                  }
                }
                A.push(S.slice(p));
                return A;
              }
            ];
          });


          /***/
}),

/***/ 387:
/***/ ((module, exports, __webpack_require__) => {

          var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
          ; !function (undefined) {
            var hasOwnProperty = Object.hasOwnProperty;
            var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
              return Object.prototype.toString.call(obj) === "[object Array]";
            };
            var defaultMaxListeners = 10;
            var nextTickSupported = typeof process == 'object' && typeof process.nextTick == 'function';
            var symbolsSupported = typeof Symbol === 'function';
            var reflectSupported = typeof Reflect === 'object';
            var setImmediateSupported = typeof setImmediate === 'function';
            var _setImmediate = setImmediateSupported ? setImmediate : setTimeout;
            var ownKeys = symbolsSupported ? (reflectSupported && typeof Reflect.ownKeys === 'function' ? Reflect.ownKeys : function (obj) {
              var arr = Object.getOwnPropertyNames(obj);
              arr.push.apply(arr, Object.getOwnPropertySymbols(obj));
              return arr;
            }) : Object.keys;

            function init() {
              this._events = {};
              if (this._conf) {
                configure.call(this, this._conf);
              }
            }

            function configure(conf) {
              if (conf) {
                this._conf = conf;

                conf.delimiter && (this.delimiter = conf.delimiter);

                if (conf.maxListeners !== undefined) {
                  this._maxListeners = conf.maxListeners;
                }

                conf.wildcard && (this.wildcard = conf.wildcard);
                conf.newListener && (this._newListener = conf.newListener);
                conf.removeListener && (this._removeListener = conf.removeListener);
                conf.verboseMemoryLeak && (this.verboseMemoryLeak = conf.verboseMemoryLeak);
                conf.ignoreErrors && (this.ignoreErrors = conf.ignoreErrors);

                if (this.wildcard) {
                  this.listenerTree = {};
                }
              }
            }

            function logPossibleMemoryLeak(count, eventName) {
              var errorMsg = '(node) warning: possible EventEmitter memory ' +
                'leak detected. ' + count + ' listeners added. ' +
                'Use emitter.setMaxListeners() to increase limit.';

              if (this.verboseMemoryLeak) {
                errorMsg += ' Event name: ' + eventName + '.';
              }

              if (typeof process !== 'undefined' && process.emitWarning) {
                var e = new Error(errorMsg);
                e.name = 'MaxListenersExceededWarning';
                e.emitter = this;
                e.count = count;
                process.emitWarning(e);
              } else {
                console.error(errorMsg);

                if (console.trace) {
                  console.trace();
                }
              }
            }

            var toArray = function (a, b, c) {
              var n = arguments.length;
              switch (n) {
                case 0:
                  return [];
                case 1:
                  return [a];
                case 2:
                  return [a, b];
                case 3:
                  return [a, b, c];
                default:
                  var arr = new Array(n);
                  while (n--) {
                    arr[n] = arguments[n];
                  }
                  return arr;
              }
            };

            function toObject(keys, values) {
              var obj = {};
              var key;
              var len = keys.length;
              var valuesCount = values ? values.length : 0;
              for (var i = 0; i < len; i++) {
                key = keys[i];
                obj[key] = i < valuesCount ? values[i] : undefined;
              }
              return obj;
            }

            function TargetObserver(emitter, target, options) {
              this._emitter = emitter;
              this._target = target;
              this._listeners = {};
              this._listenersCount = 0;

              var on, off;

              if (options.on || options.off) {
                on = options.on;
                off = options.off;
              }

              if (target.addEventListener) {
                on = target.addEventListener;
                off = target.removeEventListener;
              } else if (target.addListener) {
                on = target.addListener;
                off = target.removeListener;
              } else if (target.on) {
                on = target.on;
                off = target.off;
              }

              if (!on && !off) {
                throw Error('target does not implement any known event API');
              }

              if (typeof on !== 'function') {
                throw TypeError('on method must be a function');
              }

              if (typeof off !== 'function') {
                throw TypeError('off method must be a function');
              }

              this._on = on;
              this._off = off;

              var _observers = emitter._observers;
              if (_observers) {
                _observers.push(this);
              } else {
                emitter._observers = [this];
              }
            }

            Object.assign(TargetObserver.prototype, {
              subscribe: function (event, localEvent, reducer) {
                var observer = this;
                var target = this._target;
                var emitter = this._emitter;
                var listeners = this._listeners;
                var handler = function () {
                  var args = toArray.apply(null, arguments);
                  var eventObj = {
                    data: args,
                    name: localEvent,
                    original: event
                  };
                  if (reducer) {
                    var result = reducer.call(target, eventObj);
                    if (result !== false) {
                      emitter.emit.apply(emitter, [eventObj.name].concat(args))
                    }
                    return;
                  }
                  emitter.emit.apply(emitter, [localEvent].concat(args));
                };


                if (listeners[event]) {
                  throw Error('Event \'' + event + '\' is already listening');
                }

                this._listenersCount++;

                if (emitter._newListener && emitter._removeListener && !observer._onNewListener) {

                  this._onNewListener = function (_event) {
                    if (_event === localEvent && listeners[event] === null) {
                      listeners[event] = handler;
                      observer._on.call(target, event, handler);
                    }
                  };

                  emitter.on('newListener', this._onNewListener);

                  this._onRemoveListener = function (_event) {
                    if (_event === localEvent && !emitter.hasListeners(_event) && listeners[event]) {
                      listeners[event] = null;
                      observer._off.call(target, event, handler);
                    }
                  };

                  listeners[event] = null;

                  emitter.on('removeListener', this._onRemoveListener);
                } else {
                  listeners[event] = handler;
                  observer._on.call(target, event, handler);
                }
              },

              unsubscribe: function (event) {
                var observer = this;
                var listeners = this._listeners;
                var emitter = this._emitter;
                var handler;
                var events;
                var off = this._off;
                var target = this._target;
                var i;

                if (event && typeof event !== 'string') {
                  throw TypeError('event must be a string');
                }

                function clearRefs() {
                  if (observer._onNewListener) {
                    emitter.off('newListener', observer._onNewListener);
                    emitter.off('removeListener', observer._onRemoveListener);
                    observer._onNewListener = null;
                    observer._onRemoveListener = null;
                  }
                  var index = findTargetIndex.call(emitter, observer);
                  emitter._observers.splice(index, 1);
                }

                if (event) {
                  handler = listeners[event];
                  if (!handler) return;
                  off.call(target, event, handler);
                  delete listeners[event];
                  if (!--this._listenersCount) {
                    clearRefs();
                  }
                } else {
                  events = ownKeys(listeners);
                  i = events.length;
                  while (i-- > 0) {
                    event = events[i];
                    off.call(target, event, listeners[event]);
                  }
                  this._listeners = {};
                  this._listenersCount = 0;
                  clearRefs();
                }
              }
            });

            function resolveOptions(options, schema, reducers, allowUnknown) {
              var computedOptions = Object.assign({}, schema);

              if (!options) return computedOptions;

              if (typeof options !== 'object') {
                throw TypeError('options must be an object')
              }

              var keys = Object.keys(options);
              var length = keys.length;
              var option, value;
              var reducer;

              function reject(reason) {
                throw Error('Invalid "' + option + '" option value' + (reason ? '. Reason: ' + reason : ''))
              }

              for (var i = 0; i < length; i++) {
                option = keys[i];
                if (!allowUnknown && !hasOwnProperty.call(schema, option)) {
                  throw Error('Unknown "' + option + '" option');
                }
                value = options[option];
                if (value !== undefined) {
                  reducer = reducers[option];
                  computedOptions[option] = reducer ? reducer(value, reject) : value;
                }
              }
              return computedOptions;
            }

            function constructorReducer(value, reject) {
              if (typeof value !== 'function' || !value.hasOwnProperty('prototype')) {
                reject('value must be a constructor');
              }
              return value;
            }

            function makeTypeReducer(types) {
              var message = 'value must be type of ' + types.join('|');
              var len = types.length;
              var firstType = types[0];
              var secondType = types[1];

              if (len === 1) {
                return function (v, reject) {
                  if (typeof v === firstType) {
                    return v;
                  }
                  reject(message);
                }
              }

              if (len === 2) {
                return function (v, reject) {
                  var kind = typeof v;
                  if (kind === firstType || kind === secondType) return v;
                  reject(message);
                }
              }

              return function (v, reject) {
                var kind = typeof v;
                var i = len;
                while (i-- > 0) {
                  if (kind === types[i]) return v;
                }
                reject(message);
              }
            }

            var functionReducer = makeTypeReducer(['function']);

            var objectFunctionReducer = makeTypeReducer(['object', 'function']);

            function makeCancelablePromise(Promise, executor, options) {
              var isCancelable;
              var callbacks;
              var timer = 0;
              var subscriptionClosed;

              var promise = new Promise(function (resolve, reject, onCancel) {
                options = resolveOptions(options, {
                  timeout: 0,
                  overload: false
                }, {
                  timeout: function (value, reject) {
                    value *= 1;
                    if (typeof value !== 'number' || value < 0 || !Number.isFinite(value)) {
                      reject('timeout must be a positive number');
                    }
                    return value;
                  }
                });

                isCancelable = !options.overload && typeof Promise.prototype.cancel === 'function' && typeof onCancel === 'function';

                function cleanup() {
                  if (callbacks) {
                    callbacks = null;
                  }
                  if (timer) {
                    clearTimeout(timer);
                    timer = 0;
                  }
                }

                var _resolve = function (value) {
                  cleanup();
                  resolve(value);
                };

                var _reject = function (err) {
                  cleanup();
                  reject(err);
                };

                if (isCancelable) {
                  executor(_resolve, _reject, onCancel);
                } else {
                  callbacks = [function (reason) {
                    _reject(reason || Error('canceled'));
                  }];
                  executor(_resolve, _reject, function (cb) {
                    if (subscriptionClosed) {
                      throw Error('Unable to subscribe on cancel event asynchronously')
                    }
                    if (typeof cb !== 'function') {
                      throw TypeError('onCancel callback must be a function');
                    }
                    callbacks.push(cb);
                  });
                  subscriptionClosed = true;
                }

                if (options.timeout > 0) {
                  timer = setTimeout(function () {
                    var reason = Error('timeout');
                    reason.code = 'ETIMEDOUT'
                    timer = 0;
                    promise.cancel(reason);
                    reject(reason);
                  }, options.timeout);
                }
              });

              if (!isCancelable) {
                promise.cancel = function (reason) {
                  if (!callbacks) {
                    return;
                  }
                  var length = callbacks.length;
                  for (var i = 1; i < length; i++) {
                    callbacks[i](reason);
                  }
                  // internal callback to reject the promise
                  callbacks[0](reason);
                  callbacks = null;
                };
              }

              return promise;
            }

            function findTargetIndex(observer) {
              var observers = this._observers;
              if (!observers) {
                return -1;
              }
              var len = observers.length;
              for (var i = 0; i < len; i++) {
                if (observers[i]._target === observer) return i;
              }
              return -1;
            }

            // Attention, function return type now is array, always !
            // It has zero elements if no any matches found and one or more
            // elements (leafs) if there are matches
            //
            function searchListenerTree(handlers, type, tree, i, typeLength) {
              if (!tree) {
                return null;
              }

              if (i === 0) {
                var kind = typeof type;
                if (kind === 'string') {
                  var ns, n, l = 0, j = 0, delimiter = this.delimiter, dl = delimiter.length;
                  if ((n = type.indexOf(delimiter)) !== -1) {
                    ns = new Array(5);
                    do {
                      ns[l++] = type.slice(j, n);
                      j = n + dl;
                    } while ((n = type.indexOf(delimiter, j)) !== -1);

                    ns[l++] = type.slice(j);
                    type = ns;
                    typeLength = l;
                  } else {
                    type = [type];
                    typeLength = 1;
                  }
                } else if (kind === 'object') {
                  typeLength = type.length;
                } else {
                  type = [type];
                  typeLength = 1;
                }
              }

              var listeners = null, branch, xTree, xxTree, isolatedBranch, endReached, currentType = type[i],
                nextType = type[i + 1], branches, _listeners;

              if (i === typeLength) {
                //
                // If at the end of the event(s) list and the tree has listeners
                // invoke those listeners.
                //

                if (tree._listeners) {
                  if (typeof tree._listeners === 'function') {
                    handlers && handlers.push(tree._listeners);
                    listeners = [tree];
                  } else {
                    handlers && handlers.push.apply(handlers, tree._listeners);
                    listeners = [tree];
                  }
                }
              } else {

                if (currentType === '*') {
                  //
                  // If the event emitted is '*' at this part
                  // or there is a concrete match at this patch
                  //
                  branches = ownKeys(tree);
                  n = branches.length;
                  while (n-- > 0) {
                    branch = branches[n];
                    if (branch !== '_listeners') {
                      _listeners = searchListenerTree(handlers, type, tree[branch], i + 1, typeLength);
                      if (_listeners) {
                        if (listeners) {
                          listeners.push.apply(listeners, _listeners);
                        } else {
                          listeners = _listeners;
                        }
                      }
                    }
                  }
                  return listeners;
                } else if (currentType === '**') {
                  endReached = (i + 1 === typeLength || (i + 2 === typeLength && nextType === '*'));
                  if (endReached && tree._listeners) {
                    // The next element has a _listeners, add it to the handlers.
                    listeners = searchListenerTree(handlers, type, tree, typeLength, typeLength);
                  }

                  branches = ownKeys(tree);
                  n = branches.length;
                  while (n-- > 0) {
                    branch = branches[n];
                    if (branch !== '_listeners') {
                      if (branch === '*' || branch === '**') {
                        if (tree[branch]._listeners && !endReached) {
                          _listeners = searchListenerTree(handlers, type, tree[branch], typeLength, typeLength);
                          if (_listeners) {
                            if (listeners) {
                              listeners.push.apply(listeners, _listeners);
                            } else {
                              listeners = _listeners;
                            }
                          }
                        }
                        _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
                      } else if (branch === nextType) {
                        _listeners = searchListenerTree(handlers, type, tree[branch], i + 2, typeLength);
                      } else {
                        // No match on this one, shift into the tree but not in the type array.
                        _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
                      }
                      if (_listeners) {
                        if (listeners) {
                          listeners.push.apply(listeners, _listeners);
                        } else {
                          listeners = _listeners;
                        }
                      }
                    }
                  }
                  return listeners;
                } else if (tree[currentType]) {
                  listeners = searchListenerTree(handlers, type, tree[currentType], i + 1, typeLength);
                }
              }

              xTree = tree['*'];
              if (xTree) {
                //
                // If the listener tree will allow any match for this part,
                // then recursively explore all branches of the tree
                //
                searchListenerTree(handlers, type, xTree, i + 1, typeLength);
              }

              xxTree = tree['**'];
              if (xxTree) {
                if (i < typeLength) {
                  if (xxTree._listeners) {
                    // If we have a listener on a '**', it will catch all, so add its handler.
                    searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
                  }

                  // Build arrays of matching next branches and others.
                  branches = ownKeys(xxTree);
                  n = branches.length;
                  while (n-- > 0) {
                    branch = branches[n];
                    if (branch !== '_listeners') {
                      if (branch === nextType) {
                        // We know the next element will match, so jump twice.
                        searchListenerTree(handlers, type, xxTree[branch], i + 2, typeLength);
                      } else if (branch === currentType) {
                        // Current node matches, move into the tree.
                        searchListenerTree(handlers, type, xxTree[branch], i + 1, typeLength);
                      } else {
                        isolatedBranch = {};
                        isolatedBranch[branch] = xxTree[branch];
                        searchListenerTree(handlers, type, { '**': isolatedBranch }, i + 1, typeLength);
                      }
                    }
                  }
                } else if (xxTree._listeners) {
                  // We have reached the end and still on a '**'
                  searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
                } else if (xxTree['*'] && xxTree['*']._listeners) {
                  searchListenerTree(handlers, type, xxTree['*'], typeLength, typeLength);
                }
              }

              return listeners;
            }

            function growListenerTree(type, listener, prepend) {
              var len = 0, j = 0, i, delimiter = this.delimiter, dl = delimiter.length, ns;

              if (typeof type === 'string') {
                if ((i = type.indexOf(delimiter)) !== -1) {
                  ns = new Array(5);
                  do {
                    ns[len++] = type.slice(j, i);
                    j = i + dl;
                  } while ((i = type.indexOf(delimiter, j)) !== -1);

                  ns[len++] = type.slice(j);
                } else {
                  ns = [type];
                  len = 1;
                }
              } else {
                ns = type;
                len = type.length;
              }

              //
              // Looks for two consecutive '**', if so, don't add the event at all.
              //
              if (len > 1) {
                for (i = 0; i + 1 < len; i++) {
                  if (ns[i] === '**' && ns[i + 1] === '**') {
                    return;
                  }
                }
              }



              var tree = this.listenerTree, name;

              for (i = 0; i < len; i++) {
                name = ns[i];

                tree = tree[name] || (tree[name] = {});

                if (i === len - 1) {
                  if (!tree._listeners) {
                    tree._listeners = listener;
                  } else {
                    if (typeof tree._listeners === 'function') {
                      tree._listeners = [tree._listeners];
                    }

                    if (prepend) {
                      tree._listeners.unshift(listener);
                    } else {
                      tree._listeners.push(listener);
                    }

                    if (
                      !tree._listeners.warned &&
                      this._maxListeners > 0 &&
                      tree._listeners.length > this._maxListeners
                    ) {
                      tree._listeners.warned = true;
                      logPossibleMemoryLeak.call(this, tree._listeners.length, name);
                    }
                  }
                  return true;
                }
              }

              return true;
            }

            function collectTreeEvents(tree, events, root, asArray) {
              var branches = ownKeys(tree);
              var i = branches.length;
              var branch, branchName, path;
              var hasListeners = tree['_listeners'];
              var isArrayPath;

              while (i-- > 0) {
                branchName = branches[i];

                branch = tree[branchName];

                if (branchName === '_listeners') {
                  path = root;
                } else {
                  path = root ? root.concat(branchName) : [branchName];
                }

                isArrayPath = asArray || typeof branchName === 'symbol';

                hasListeners && events.push(isArrayPath ? path : path.join(this.delimiter));

                if (typeof branch === 'object') {
                  collectTreeEvents.call(this, branch, events, path, isArrayPath);
                }
              }

              return events;
            }

            function recursivelyGarbageCollect(root) {
              var keys = ownKeys(root);
              var i = keys.length;
              var obj, key, flag;
              while (i-- > 0) {
                key = keys[i];
                obj = root[key];

                if (obj) {
                  flag = true;
                  if (key !== '_listeners' && !recursivelyGarbageCollect(obj)) {
                    delete root[key];
                  }
                }
              }

              return flag;
            }

            function Listener(emitter, event, listener) {
              this.emitter = emitter;
              this.event = event;
              this.listener = listener;
            }

            Listener.prototype.off = function () {
              this.emitter.off(this.event, this.listener);
              return this;
            };

            function setupListener(event, listener, options) {
              if (options === true) {
                promisify = true;
              } else if (options === false) {
                async = true;
              } else {
                if (!options || typeof options !== 'object') {
                  throw TypeError('options should be an object or true');
                }
                var async = options.async;
                var promisify = options.promisify;
                var nextTick = options.nextTick;
                var objectify = options.objectify;
              }

              if (async || nextTick || promisify) {
                var _listener = listener;
                var _origin = listener._origin || listener;

                if (nextTick && !nextTickSupported) {
                  throw Error('process.nextTick is not supported');
                }

                if (promisify === undefined) {
                  promisify = listener.constructor.name === 'AsyncFunction';
                }

                listener = function () {
                  var args = arguments;
                  var context = this;
                  var event = this.event;

                  return promisify ? (nextTick ? Promise.resolve() : new Promise(function (resolve) {
                    _setImmediate(resolve);
                  }).then(function () {
                    context.event = event;
                    return _listener.apply(context, args)
                  })) : (nextTick ? process.nextTick : _setImmediate)(function () {
                    context.event = event;
                    _listener.apply(context, args)
                  });
                };

                listener._async = true;
                listener._origin = _origin;
              }

              return [listener, objectify ? new Listener(this, event, listener) : this];
            }

            function EventEmitter(conf) {
              this._events = {};
              this._newListener = false;
              this._removeListener = false;
              this.verboseMemoryLeak = false;
              configure.call(this, conf);
            }

            EventEmitter.EventEmitter2 = EventEmitter; // backwards compatibility for exporting EventEmitter property

            EventEmitter.prototype.listenTo = function (target, events, options) {
              if (typeof target !== 'object') {
                throw TypeError('target musts be an object');
              }

              var emitter = this;

              options = resolveOptions(options, {
                on: undefined,
                off: undefined,
                reducers: undefined
              }, {
                on: functionReducer,
                off: functionReducer,
                reducers: objectFunctionReducer
              });

              function listen(events) {
                if (typeof events !== 'object') {
                  throw TypeError('events must be an object');
                }

                var reducers = options.reducers;
                var index = findTargetIndex.call(emitter, target);
                var observer;

                if (index === -1) {
                  observer = new TargetObserver(emitter, target, options);
                } else {
                  observer = emitter._observers[index];
                }

                var keys = ownKeys(events);
                var len = keys.length;
                var event;
                var isSingleReducer = typeof reducers === 'function';

                for (var i = 0; i < len; i++) {
                  event = keys[i];
                  observer.subscribe(
                    event,
                    events[event] || event,
                    isSingleReducer ? reducers : reducers && reducers[event]
                  );
                }
              }

              isArray(events) ?
                listen(toObject(events)) :
                (typeof events === 'string' ? listen(toObject(events.split(/\s+/))) : listen(events));

              return this;
            };

            EventEmitter.prototype.stopListeningTo = function (target, event) {
              var observers = this._observers;

              if (!observers) {
                return false;
              }

              var i = observers.length;
              var observer;
              var matched = false;

              if (target && typeof target !== 'object') {
                throw TypeError('target should be an object');
              }

              while (i-- > 0) {
                observer = observers[i];
                if (!target || observer._target === target) {
                  observer.unsubscribe(event);
                  matched = true;
                }
              }

              return matched;
            };

            // By default EventEmitters will print a warning if more than
            // 10 listeners are added to it. This is a useful default which
            // helps finding memory leaks.
            //
            // Obviously not all Emitters should be limited to 10. This function allows
            // that to be increased. Set to zero for unlimited.

            EventEmitter.prototype.delimiter = '.';

            EventEmitter.prototype.setMaxListeners = function (n) {
              if (n !== undefined) {
                this._maxListeners = n;
                if (!this._conf) this._conf = {};
                this._conf.maxListeners = n;
              }
            };

            EventEmitter.prototype.getMaxListeners = function () {
              return this._maxListeners;
            };

            EventEmitter.prototype.event = '';

            EventEmitter.prototype.once = function (event, fn, options) {
              return this._once(event, fn, false, options);
            };

            EventEmitter.prototype.prependOnceListener = function (event, fn, options) {
              return this._once(event, fn, true, options);
            };

            EventEmitter.prototype._once = function (event, fn, prepend, options) {
              return this._many(event, 1, fn, prepend, options);
            };

            EventEmitter.prototype.many = function (event, ttl, fn, options) {
              return this._many(event, ttl, fn, false, options);
            };

            EventEmitter.prototype.prependMany = function (event, ttl, fn, options) {
              return this._many(event, ttl, fn, true, options);
            };

            EventEmitter.prototype._many = function (event, ttl, fn, prepend, options) {
              var self = this;

              if (typeof fn !== 'function') {
                throw new Error('many only accepts instances of Function');
              }

              function listener() {
                if (--ttl === 0) {
                  self.off(event, listener);
                }
                return fn.apply(this, arguments);
              }

              listener._origin = fn;

              return this._on(event, listener, prepend, options);
            };

            EventEmitter.prototype.emit = function () {
              if (!this._events && !this._all) {
                return false;
              }

              this._events || init.call(this);

              var type = arguments[0], ns, wildcard = this.wildcard;
              var args, l, i, j, containsSymbol;

              if (type === 'newListener' && !this._newListener) {
                if (!this._events.newListener) {
                  return false;
                }
              }

              if (wildcard) {
                ns = type;
                if (type !== 'newListener' && type !== 'removeListener') {
                  if (typeof type === 'object') {
                    l = type.length;
                    if (symbolsSupported) {
                      for (i = 0; i < l; i++) {
                        if (typeof type[i] === 'symbol') {
                          containsSymbol = true;
                          break;
                        }
                      }
                    }
                    if (!containsSymbol) {
                      type = type.join(this.delimiter);
                    }
                  }
                }
              }

              var al = arguments.length;
              var handler;

              if (this._all && this._all.length) {
                handler = this._all.slice();

                for (i = 0, l = handler.length; i < l; i++) {
                  this.event = type;
                  switch (al) {
                    case 1:
                      handler[i].call(this, type);
                      break;
                    case 2:
                      handler[i].call(this, type, arguments[1]);
                      break;
                    case 3:
                      handler[i].call(this, type, arguments[1], arguments[2]);
                      break;
                    default:
                      handler[i].apply(this, arguments);
                  }
                }
              }

              if (wildcard) {
                handler = [];
                searchListenerTree.call(this, handler, ns, this.listenerTree, 0, l);
              } else {
                handler = this._events[type];
                if (typeof handler === 'function') {
                  this.event = type;
                  switch (al) {
                    case 1:
                      handler.call(this);
                      break;
                    case 2:
                      handler.call(this, arguments[1]);
                      break;
                    case 3:
                      handler.call(this, arguments[1], arguments[2]);
                      break;
                    default:
                      args = new Array(al - 1);
                      for (j = 1; j < al; j++) args[j - 1] = arguments[j];
                      handler.apply(this, args);
                  }
                  return true;
                } else if (handler) {
                  // need to make copy of handlers because list can change in the middle
                  // of emit call
                  handler = handler.slice();
                }
              }

              if (handler && handler.length) {
                if (al > 3) {
                  args = new Array(al - 1);
                  for (j = 1; j < al; j++) args[j - 1] = arguments[j];
                }
                for (i = 0, l = handler.length; i < l; i++) {
                  this.event = type;
                  switch (al) {
                    case 1:
                      handler[i].call(this);
                      break;
                    case 2:
                      handler[i].call(this, arguments[1]);
                      break;
                    case 3:
                      handler[i].call(this, arguments[1], arguments[2]);
                      break;
                    default:
                      handler[i].apply(this, args);
                  }
                }
                return true;
              } else if (!this.ignoreErrors && !this._all && type === 'error') {
                if (arguments[1] instanceof Error) {
                  throw arguments[1]; // Unhandled 'error' event
                } else {
                  throw new Error("Uncaught, unspecified 'error' event.");
                }
              }

              return !!this._all;
            };

            EventEmitter.prototype.emitAsync = function () {
              if (!this._events && !this._all) {
                return false;
              }

              this._events || init.call(this);

              var type = arguments[0], wildcard = this.wildcard, ns, containsSymbol;
              var args, l, i, j;

              if (type === 'newListener' && !this._newListener) {
                if (!this._events.newListener) { return Promise.resolve([false]); }
              }

              if (wildcard) {
                ns = type;
                if (type !== 'newListener' && type !== 'removeListener') {
                  if (typeof type === 'object') {
                    l = type.length;
                    if (symbolsSupported) {
                      for (i = 0; i < l; i++) {
                        if (typeof type[i] === 'symbol') {
                          containsSymbol = true;
                          break;
                        }
                      }
                    }
                    if (!containsSymbol) {
                      type = type.join(this.delimiter);
                    }
                  }
                }
              }

              var promises = [];

              var al = arguments.length;
              var handler;

              if (this._all) {
                for (i = 0, l = this._all.length; i < l; i++) {
                  this.event = type;
                  switch (al) {
                    case 1:
                      promises.push(this._all[i].call(this, type));
                      break;
                    case 2:
                      promises.push(this._all[i].call(this, type, arguments[1]));
                      break;
                    case 3:
                      promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
                      break;
                    default:
                      promises.push(this._all[i].apply(this, arguments));
                  }
                }
              }

              if (wildcard) {
                handler = [];
                searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
              } else {
                handler = this._events[type];
              }

              if (typeof handler === 'function') {
                this.event = type;
                switch (al) {
                  case 1:
                    promises.push(handler.call(this));
                    break;
                  case 2:
                    promises.push(handler.call(this, arguments[1]));
                    break;
                  case 3:
                    promises.push(handler.call(this, arguments[1], arguments[2]));
                    break;
                  default:
                    args = new Array(al - 1);
                    for (j = 1; j < al; j++) args[j - 1] = arguments[j];
                    promises.push(handler.apply(this, args));
                }
              } else if (handler && handler.length) {
                handler = handler.slice();
                if (al > 3) {
                  args = new Array(al - 1);
                  for (j = 1; j < al; j++) args[j - 1] = arguments[j];
                }
                for (i = 0, l = handler.length; i < l; i++) {
                  this.event = type;
                  switch (al) {
                    case 1:
                      promises.push(handler[i].call(this));
                      break;
                    case 2:
                      promises.push(handler[i].call(this, arguments[1]));
                      break;
                    case 3:
                      promises.push(handler[i].call(this, arguments[1], arguments[2]));
                      break;
                    default:
                      promises.push(handler[i].apply(this, args));
                  }
                }
              } else if (!this.ignoreErrors && !this._all && type === 'error') {
                if (arguments[1] instanceof Error) {
                  return Promise.reject(arguments[1]); // Unhandled 'error' event
                } else {
                  return Promise.reject("Uncaught, unspecified 'error' event.");
                }
              }

              return Promise.all(promises);
            };

            EventEmitter.prototype.on = function (type, listener, options) {
              return this._on(type, listener, false, options);
            };

            EventEmitter.prototype.prependListener = function (type, listener, options) {
              return this._on(type, listener, true, options);
            };

            EventEmitter.prototype.onAny = function (fn) {
              return this._onAny(fn, false);
            };

            EventEmitter.prototype.prependAny = function (fn) {
              return this._onAny(fn, true);
            };

            EventEmitter.prototype.addListener = EventEmitter.prototype.on;

            EventEmitter.prototype._onAny = function (fn, prepend) {
              if (typeof fn !== 'function') {
                throw new Error('onAny only accepts instances of Function');
              }

              if (!this._all) {
                this._all = [];
              }

              // Add the function to the event listener collection.
              if (prepend) {
                this._all.unshift(fn);
              } else {
                this._all.push(fn);
              }

              return this;
            };

            EventEmitter.prototype._on = function (type, listener, prepend, options) {
              if (typeof type === 'function') {
                this._onAny(type, listener);
                return this;
              }

              if (typeof listener !== 'function') {
                throw new Error('on only accepts instances of Function');
              }
              this._events || init.call(this);

              var returnValue = this, temp;

              if (options !== undefined) {
                temp = setupListener.call(this, type, listener, options);
                listener = temp[0];
                returnValue = temp[1];
              }

              // To avoid recursion in the case that type == "newListeners"! Before
              // adding it to the listeners, first emit "newListeners".
              if (this._newListener) {
                this.emit('newListener', type, listener);
              }

              if (this.wildcard) {
                growListenerTree.call(this, type, listener, prepend);
                return returnValue;
              }

              if (!this._events[type]) {
                // Optimize the case of one listener. Don't need the extra array object.
                this._events[type] = listener;
              } else {
                if (typeof this._events[type] === 'function') {
                  // Change to array.
                  this._events[type] = [this._events[type]];
                }

                // If we've already got an array, just add
                if (prepend) {
                  this._events[type].unshift(listener);
                } else {
                  this._events[type].push(listener);
                }

                // Check for listener leak
                if (
                  !this._events[type].warned &&
                  this._maxListeners > 0 &&
                  this._events[type].length > this._maxListeners
                ) {
                  this._events[type].warned = true;
                  logPossibleMemoryLeak.call(this, this._events[type].length, type);
                }
              }

              return returnValue;
            };

            EventEmitter.prototype.off = function (type, listener) {
              if (typeof listener !== 'function') {
                throw new Error('removeListener only takes instances of Function');
              }

              var handlers, leafs = [];

              if (this.wildcard) {
                var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
                leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
                if (!leafs) return this;
              } else {
                // does not use listeners(), so no side effect of creating _events[type]
                if (!this._events[type]) return this;
                handlers = this._events[type];
                leafs.push({ _listeners: handlers });
              }

              for (var iLeaf = 0; iLeaf < leafs.length; iLeaf++) {
                var leaf = leafs[iLeaf];
                handlers = leaf._listeners;
                if (isArray(handlers)) {

                  var position = -1;

                  for (var i = 0, length = handlers.length; i < length; i++) {
                    if (handlers[i] === listener ||
                      (handlers[i].listener && handlers[i].listener === listener) ||
                      (handlers[i]._origin && handlers[i]._origin === listener)) {
                      position = i;
                      break;
                    }
                  }

                  if (position < 0) {
                    continue;
                  }

                  if (this.wildcard) {
                    leaf._listeners.splice(position, 1);
                  }
                  else {
                    this._events[type].splice(position, 1);
                  }

                  if (handlers.length === 0) {
                    if (this.wildcard) {
                      delete leaf._listeners;
                    }
                    else {
                      delete this._events[type];
                    }
                  }
                  if (this._removeListener)
                    this.emit("removeListener", type, listener);

                  return this;
                }
                else if (handlers === listener ||
                  (handlers.listener && handlers.listener === listener) ||
                  (handlers._origin && handlers._origin === listener)) {
                  if (this.wildcard) {
                    delete leaf._listeners;
                  }
                  else {
                    delete this._events[type];
                  }
                  if (this._removeListener)
                    this.emit("removeListener", type, listener);
                }
              }

              this.listenerTree && recursivelyGarbageCollect(this.listenerTree);

              return this;
            };

            EventEmitter.prototype.offAny = function (fn) {
              var i = 0, l = 0, fns;
              if (fn && this._all && this._all.length > 0) {
                fns = this._all;
                for (i = 0, l = fns.length; i < l; i++) {
                  if (fn === fns[i]) {
                    fns.splice(i, 1);
                    if (this._removeListener)
                      this.emit("removeListenerAny", fn);
                    return this;
                  }
                }
              } else {
                fns = this._all;
                if (this._removeListener) {
                  for (i = 0, l = fns.length; i < l; i++)
                    this.emit("removeListenerAny", fns[i]);
                }
                this._all = [];
              }
              return this;
            };

            EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

            EventEmitter.prototype.removeAllListeners = function (type) {
              if (type === undefined) {
                !this._events || init.call(this);
                return this;
              }

              if (this.wildcard) {
                var leafs = searchListenerTree.call(this, null, type, this.listenerTree, 0), leaf, i;
                if (!leafs) return this;
                for (i = 0; i < leafs.length; i++) {
                  leaf = leafs[i];
                  leaf._listeners = null;
                }
                this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
              } else if (this._events) {
                this._events[type] = null;
              }
              return this;
            };

            EventEmitter.prototype.listeners = function (type) {
              var _events = this._events;
              var keys, listeners, allListeners;
              var i;
              var listenerTree;

              if (type === undefined) {
                if (this.wildcard) {
                  throw Error('event name required for wildcard emitter');
                }

                if (!_events) {
                  return [];
                }

                keys = ownKeys(_events);
                i = keys.length;
                allListeners = [];
                while (i-- > 0) {
                  listeners = _events[keys[i]];
                  if (typeof listeners === 'function') {
                    allListeners.push(listeners);
                  } else {
                    allListeners.push.apply(allListeners, listeners);
                  }
                }
                return allListeners;
              } else {
                if (this.wildcard) {
                  listenerTree = this.listenerTree;
                  if (!listenerTree) return [];
                  var handlers = [];
                  var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
                  searchListenerTree.call(this, handlers, ns, listenerTree, 0);
                  return handlers;
                }

                if (!_events) {
                  return [];
                }

                listeners = _events[type];

                if (!listeners) {
                  return [];
                }
                return typeof listeners === 'function' ? [listeners] : listeners;
              }
            };

            EventEmitter.prototype.eventNames = function (nsAsArray) {
              var _events = this._events;
              return this.wildcard ? collectTreeEvents.call(this, this.listenerTree, [], null, nsAsArray) : (_events ? ownKeys(_events) : []);
            };

            EventEmitter.prototype.listenerCount = function (type) {
              return this.listeners(type).length;
            };

            EventEmitter.prototype.hasListeners = function (type) {
              if (this.wildcard) {
                var handlers = [];
                var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
                searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
                return handlers.length > 0;
              }

              var _events = this._events;
              var _all = this._all;

              return !!(_all && _all.length || _events && (type === undefined ? ownKeys(_events).length : _events[type]));
            };

            EventEmitter.prototype.listenersAny = function () {

              if (this._all) {
                return this._all;
              }
              else {
                return [];
              }

            };

            EventEmitter.prototype.waitFor = function (event, options) {
              var self = this;
              var type = typeof options;
              if (type === 'number') {
                options = { timeout: options };
              } else if (type === 'function') {
                options = { filter: options };
              }

              options = resolveOptions(options, {
                timeout: 0,
                filter: undefined,
                handleError: false,
                Promise: Promise,
                overload: false
              }, {
                filter: functionReducer,
                Promise: constructorReducer
              });

              return makeCancelablePromise(options.Promise, function (resolve, reject, onCancel) {
                function listener() {
                  var filter = options.filter;
                  if (filter && !filter.apply(self, arguments)) {
                    return;
                  }
                  self.off(event, listener);
                  if (options.handleError) {
                    var err = arguments[0];
                    err ? reject(err) : resolve(toArray.apply(null, arguments).slice(1));
                  } else {
                    resolve(toArray.apply(null, arguments));
                  }
                }

                onCancel(function () {
                  self.off(event, listener);
                });

                self._on(event, listener, false);
              }, {
                timeout: options.timeout,
                overload: options.overload
              })
            };

            function once(emitter, name, options) {
              options = resolveOptions(options, {
                Promise: Promise,
                timeout: 0,
                overload: false
              }, {
                Promise: constructorReducer
              });

              var _Promise = options.Promise;

              return makeCancelablePromise(_Promise, function (resolve, reject, onCancel) {
                var handler;
                if (typeof emitter.addEventListener === 'function') {
                  handler = function () {
                    resolve(toArray.apply(null, arguments));
                  };

                  onCancel(function () {
                    emitter.removeEventListener(name, handler);
                  });

                  emitter.addEventListener(
                    name,
                    handler,
                    { once: true }
                  );
                  return;
                }

                var eventListener = function () {
                  errorListener && emitter.removeListener('error', errorListener);
                  resolve(toArray.apply(null, arguments));
                };

                var errorListener;

                if (name !== 'error') {
                  errorListener = function (err) {
                    emitter.removeListener(name, eventListener);
                    reject(err);
                  };

                  emitter.once('error', errorListener);
                }

                onCancel(function () {
                  errorListener && emitter.removeListener('error', errorListener);
                  emitter.removeListener(name, eventListener);
                });

                emitter.once(name, eventListener);
              }, {
                timeout: options.timeout,
                overload: options.overload
              });
            }

            var prototype = EventEmitter.prototype;

            Object.defineProperties(EventEmitter, {
              defaultMaxListeners: {
                get: function () {
                  return prototype._maxListeners;
                },
                set: function (n) {
                  if (typeof n !== 'number' || n < 0 || Number.isNaN(n)) {
                    throw TypeError('n must be a non-negative number')
                  }
                  prototype._maxListeners = n;
                },
                enumerable: true
              },
              once: {
                value: once,
                writable: true,
                configurable: true
              }
            });

            Object.defineProperties(prototype, {
              _maxListeners: {
                value: defaultMaxListeners,
                writable: true,
                configurable: true
              },
              _observers: { value: null, writable: true, configurable: true }
            });

            if (true) {
              // AMD. Register as an anonymous module.
              !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return EventEmitter;
              }).call(exports, __webpack_require__, exports, module),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else { var _global; }
          }();


          /***/
})

      /******/
});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
        /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
        /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
        /******/
};
      /******/
})();
/******/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
            /******/
}
          /******/
}
        /******/
};
      /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
      /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
          /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
        /******/
};
      /******/
})();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    (() => {
      "use strict";
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        "MultiStreamViewer": () => (/* reexport */ visualization_MultiStreamViewer),
        "Viewer": () => (/* reexport */ visualization_Viewer)
      });

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
      var es6_regexp_split = __webpack_require__(876);
      // EXTERNAL MODULE: ./node_modules/eventemitter2/lib/eventemitter2.js
      var eventemitter2 = __webpack_require__(387);
      var eventemitter2_default = /*#__PURE__*/__webpack_require__.n(eventemitter2);
      ;// CONCATENATED MODULE: ./src/visualization/models/ErrorIcon.js
      /**
       * @author Russell Toris - russell.toris@gmail.com
       */

      /**
       * An ErrorIcon contains a image with an error/warning sign on it. The image data for this object
       * is contained internally as a data URI string.
       */
      class ErrorIcon {
        constructor() {
          this.source = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAe8AAAHvCAYAAAB9iVfNAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB90EDhIJLfyU5IAAACAASURBVHja7N1pcGTXdSf4/zn3viU37EuhUECh9oVkkSySxaW4iJIoihIt9bQ72jO25VaMZbds2jF2T4dXUbJEmZZst8OOmZiI/jQz/W2mPZ6QI/zBDkdoLNvjCcu2LFuSJS7FYrE27EggE7m8d++ZD/leVhZZqI21AFXnV4EAkIkEUAkk/nnuci6glFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSil1xyO9C5S6k/xEiGjPMEwwAnYVECzEJ3BUhdASmguLwB8kFz6+TEDtev4myAZvK6U0vJVSV2Q/X0bA98Haj8DgSRDNANQPIM4e4x5AA0AVXt6C999A0v4zNJs/AH6n9q6/AwQAExMTOHjwIHnvkaap/PVf/7W86+NEQ1wpDW+l1NXY83vAm/8BwHZC8bN7EPALIPokiI6CaPCKj2rJMlhkCSJ/B+++Br/2p6j9L6fu3VP34zMf5PX1BtVqNXLOwVrbeX5gLaIoEgA4efKk1Ot1VCoVnyQJzc3NCRF5kfyTa4grpeGtlOrY+78Db/w7oPzr/TDxfwfinwTTfSCK3hPQ8u5CmDqPdnrXQ17QhPh/hLT/t2Jw4g8/+sj36qvtQXbOod1ukzEGIoIoisR7jyiK/OzsLJgZy8vLPo5jOOfk+9//vn9XNa5BrpSGt1IKAFB55TCYX4XB8yCO3/OANoywGCMsFRAUIpAx8KlDst5Ee72JZL0J8f5SFXkCuP97qLTypaMHvn0aAJIk6f59MMbI8PAwqtWqX1tbQ7lc9rVaTUqlkrz++utSLpf96dOnpVqtCjrD9MClh9aVUhreSt0tfoVRiT8MG3wRxI91H7lewFGAyvgQhnftwOD0NlTGhhGVi+DAgogg4uHaKVq1dazNLmDp5DksnTyD2vwyfJJeqMYFIPi/KhVWf/OHnn79m0kqlCbCxhhvjMnnzqXdbkuz2RQi8tVq1SdJIn19fb7dbvu5uTnMzs66er0uSZLkQa4VuFIa3krdhUpf+iRC89tg3p9VygAz+rePYvrYfRjdM4W4vwxjTU+pK93Ba8oe6gLApw6NlTXM/eAtvPP338Pq2YWL/hKQ+O8OVpqvPPf4O/9vHAnSNBVrLZrNpjCzFxHvvZdGo+GDIHD1el0AOBHxZ86c8QMDA255eVm+973vvbsK1wBX6gYxehcotclVvvwhBOZ/AvO+7gM3CrHriftxz4tPY2T3js4QOV/dc3FiQliMMbBjHKN7puGdQ/XcfM8H0Firbfa32sF3dk+1VonIOOdsEAQ2iiJjjOE0TU2lUmFrLTcaDS4Wi+Sco9HRUfLeU7FYpGKxiG3btmFubg49Aa6U0vBW6k71fwD4Q6D8xX0IzO+CzIOdTV+CeKCCfc8+gj1PHkVYLFz3VyAiROUChnfvABGwNrcE304AIghofLUWTBvj/nnXjnaDTRQws7XWGgCWmY2IGGbmMAwNM1Or1WJjDABQs9nE8vIyVSoVBEGAarXa/bL6s1VKw1upO9QfAvhqhIL8Bph/GASCCKL+Eg6/8BSmHjoMEwTv/8sIYKxF/9Q4bBhg6e1zENcZ6faeplbrIe/b2fznOCQjggCAJSIrInmQG2ZmIqJSqUTOOSYiCsMQpVKJgiBAmqYYGhqixcVF/bEqpeGt1B2u/IFPwNLL4M6qchMG2PvsI5h++B4w8w39UmwM+raNwKUOy6fOZjUyU7tNe2vr9uz+mfZ5gAJmtkTUDW4AxjnHYRiSiLCIUPY2GWMQRZFMTU3hzJkzmJycFB1CV0rDW6k7V+GLEwjN78Lwgfyi7Q8cwL4PPHxjKu5L/TGwFpWJEaydX8T63DLQmUMPWi1T3jaafq9ScgIgYOZARKwxxjAzG2NYRMh7z1EUERHBey9pmpK1lrz3wszUaDQwODgoi4uLunhNKQ1vpe40v2RRLLwEYz4FgoEXFIcHcPhjT6E0NHBTv3IQhigM9WHhzXeQNlsAEVJHQ0lKy3un2+eM6VTeRGQ7Bbsx3nvDnQlxEBF570FEJCJIkgREBCJCrVYTZsbc3BzoQrMYnQNXSsNbqTtA8YX9sPwKmLch2+i155mHsP2+fbfky8eVEpJ2G8tvn8/bqQbrTRoeH0reGBrwbe8RdAp1a7Kh8nzam5iZnHMUBAGCICARkXa7TWEYSqPRwMDAgBSLRczPz2vlrZSGt1J3iPjXA4TBr8DQi9kiNRreO41Dzx+HvUnD5ZcSlUtYOHEa7XoDAJCmPNhsc3JgV+sUESwRGQCGiAwRsYhQNg9PefWdpimMMTDGiPceIgLnnDQaDYyMjMjCwoIGuFIa3kpt5dD+X4H0a0Dh+Sdh+BUwVQCQjUMc+PBj6J8cu2UDzESdfeDiPRbfPA0RAYhQX+exYuzPbRtJ6wCZbLsYiwhTZxycvPdERPmCOgGAMAwFgCRJIkTky+UyiEgWFxeRpql2X1NKw1upLSr9GoBfq6AQ/R6YHsyDeuzQbuw+/iBMYG/pt0NMKA72Yfmd82gsVQEieEFUa5hoz1TyTmA9ERED4Pw1sqNPAJAxpjuvzczeGIM0TSULclpcXJTBwUHMz8/nIa9z30ppeCu11TzL6D/wKRj+WRACiCDsK+HQR4+jb3z4tnxHQSFCEEeYf+NU3gOdWm3uK0RuaXI8rXZymVlE8vFyZMPn+TC5AJ1XaZpKHMfinJMgCFCpVLyISLVaRavV0spbKQ1vpbag4k/uRGC+AuadQKchy87HjmD6kXtu3/ckgsJABY1qDdWznfapXiioNbgwM9k6U4jFeS/cWafG3RXmWcUtAISZfbZtTJhZjDHSaDQ8M/ulpSUEQYClpSX9+Sul4a3UVuMI8V99FoZ/BAQLEfTvGMehF55EVCrc1u+MDSMsFbDw5imkzTYAoNHkPggae6fTBS/Iu8Vk2S0gIiEiYWYBIMYYsdZ6AEJEnoikWq1KqVQSYwystbKystJ9yqC/D0ppeCu1eQ2+BDS/CRQLRxDSV8E0CgAmDLH3Aw9jZN/0pvg2w1IB7XoDK6fOZ/FKvFrnvvHhdG6g4lte5KL5aiISAOK9F+ec5MPn7Xa7u2gtC3jUajVxzkmSJJINn2t4K6XhrdQm1vwmYH4hRKH0Cpg+lJ96PbR7EnufeRhBFG6Kb5ONQXGwgsUTZ9BarQFMSFKKmm2i3VPJnDGdeW0RQTZ8LiIixhiPzpy3ByBBEHh0LvAApNVq+TAMJTsPHLOzs3nwK6U0vJXaxMof+ySM+VUwYghg4hAHnz+OwR3jm+rbjMoFgAjzr7+d1cZEjSYVRwbThaF+18gr7rzq7mz19kJE3hjjs7nv7tA5M7swDCVNU4yPj/tGoyHj4+M4e/ZsHt66+lwpDW+lNqHiK+MI7asgOtRpyOIx+cAB7H7iAbDhTfbNEkpD/ajNLaM2vwwASB0H603Y3Tvas4GFy6pqEJGXTts1D8AD8M45yd52WYj7ZrMpeZV+/vx51Ot1tFotJEmi1bdSGt5KbTKFF4H0NaDw4R+D4Z8CIYQIiqNDuOfjT6M4WNmUM79sDIJCiLkfnIRPHQCgVjflUsGtTk8kK74z9S1E5AF4EcnfdgB8NtftpcNnlbdP01TK5bK0Wi1477G2tpZ/SQ1xpTS8ldok0teA6Hd2IXS/DaZpAODAYtfxBzFxz25s1hFjIkJcKWF9uYrVcwsAQCJsqmtc2rm9PVuIfeK95KHbDfF87puI8qpbjDGu1WpJFEW+Xq+L916KxaKUy2VZXV2VZrOp4a3U5Z5M612g1G0Qt38KTEfzd8tjQ5g8sg+gzT3Va6IQ08fuQ9xf6RxaQoKVmhn6h38p7naOQyIKspcQQAQgEpFIRCIAETOHRBR678MwDI333kZRZKy1xntvRIRKpRJlTxZ03lsprbyV2iQqr3ygp3852Brs++AxjO6ZxlbIq8JAGa6dYvHNd7InG8RrNSpOjKYLfWXfQmduO1+Y5rPV5R6doXOXL2TLG7hYa0VEvIjAey/lclmCIMDy8rIuXlNKK2+lNkPyfaUPTD8Hos5ycucxsmcK24/s3zIRRSDsOHoIAzu3Z0eGAutNU/7Oa/FM6ikEEBJR2FtxE1HEzGH2dl6hhyIShGFo4ji2zGyIyMRxzMaY3l7pSimtvJW6DeISkCZA6ZkXYcwvgjiGCIWVEg6/+Az6x4c7p3dtEUEcgq3Bwpun4Z0DQLxaN+WRgXRxZDCti5BklbYH0N02RkQuf43OojYvIk5ExDknzCyNRkPW19elr68PKysrOu+tlIa3UrdJmgDm1VHE9FUwHQJAYMbOR+/F1NFDW7LAjPtKqJ6dQ31hBSCCcxSs1TnYvSOZjQJJRS4sWsuC3AFw2TC6y4fNe4bXJQgC772XSqUiRIS1tTW0221AF68pdREdNlfqVin4T4PpA3lQl0YGMHX0MNhszefQYamAmcfvhy3G2eI14PxisP07b8RTgs7CNWRD6PkwOjqL1iIRiZxzITMHzBwkSRIwsxURa601jUbDMDPl54RDh8+V0spbqVsf3L95P0L+CphGAICYsev4A9h2eDe27KJqAooDfWisrKF6ehYggoB4rc7R1Lb2XDGWNrKhcXROGHP5Pm8Anpmd9747hG6M6TZ3KZfL4pyT/v5+X6vVSPueK6XhrdStFX++gMh8DpY/DIDgHIZ2TeLgR55AUIi39H+NLaMw0IfFE2fQrjcAIrTbHDFLa2YyWcqDGxf2eee9zl2+7zvrxCbtdttn/c99vV6XYrHom82mWGuxsLAgWn0r1fPY07tAqZssCJ8A8yez0hRciLHriQdQyPdKb2HiBZXRQUw9chgcWACA97CvnSzsOjsfDlhDtnfvtzEmBJCvOs9XnofMHBSLxSBJkiCOYxuGoWm1WoaZzfr6Ot93330a3Epp5a3Uraq6v1JGIK+A+VEQCARMPnAAuzZl//LrQ0SI+ytYOnkGzdU6QEC7TXGzDdo73Z4lQt7DPF+4JvniNSKSrPp2SZL4IAhcmqb5UaI+iiJs27ZN3njjDWk0GtmIuw6fK6XhrdTNMAlgDUDhAz8Gw/8BTBYA4v4yDj5/HKWh/jvqv2ujEGwY86+fgngPEFBb51Kl5FfGhpO1bIChu/KcmR2yQ0p65r2FmX2app6IhJnFOecXFxelUCj44eFhzM3N6e+WUtBhc6VujjMAil/aBcs/D6I4K1Gx/b796J8YveP+u0SEiXv3YnTfNOA6h5YkCUX/+P3CvtWaKQHIW6aGIhJ57yMAkTEmstZGxpiQmbsr1KMossxsnXNmcnLSNBoN9t73rjrXYXSllbdS6kZ7NUABvwDmfw2GgfeojA/j4EefQNxXujP/mIQBokoRc6+dgmu3ASJqtqhYKsjqxGhSRTZkjp7mLdnq8lREvPdesrO/XavVkiAIXBzHfnl5GXEce+ecTE5OSs+Z30ppeCulbqDS048gsF8C0xAERIHBgecex/iBmTt3xlYEcaWEdr2B5dOz2UXEtXWKZibbs8VYEhF0wzs/MpSIXBbevcPqPkkS7zvL0302N47z58/L8PAwlpeX9XdMaXgrpW6kL1gU7a/A8IcAMCAY3bcT+z74CEwQ3NH/c2JG3FfG4onTna1jABpNLjpHye6pZIE7C9e6ndd6z/fODzEREW+M8c45ISIJw9A75zwzSxiGsri4iLW1Nd33rTS8lVI3QB+AFoDKh16AMV8AUQEAwnIRB59/Av3bRu6KuyEoxEjbbSydOJNHOq3VuTQ66BcG+906QL1tUwU9C9nQadaSL15LAeTBLmmagoikUqn4arUqrVZLf+eUhrdS6n1qAQi+OIoo+D0YOgQAEMHEkX2YefTIlm2Deq3YMApDfVh+5zyaS6sAE1LHYaNJNLM9mbe2cxAJ3rv6PH/fITtS1DnnAUiSJA6AbzQa4pxDHMcyNzeXd6fTClxpeCulrje11gnFv/0MLH8GBAMRxAMVHHrhSZSGBu6quyIsxDBRgLk3TkFSBxBhvcHFgT63MjKY1Ji5G+C9e8Dzl2y7mM9OG/NxHPs0TaVcLiMIAp+mqR8fH8fZs2fzL6mrz5WGt1LqOpRKh2DxKpi3ASAQYc/TD2H7/QfuvmQRQWGgD+sLK1ibXQQAOEe20SSzdzo5HxifSmdoXLI57nyo3OU90InIB0GQt1R1RCT1el2ISJxzcv78ebRaLUnTVH/3lIa3Uuoa9QFofYpQHP5FsPlkXnUPzmzHgeceQ7jF+5df90CEMYgqRcy/cQppq91p3NLgsmHf2DmZLAMk3vt8+Lx7VGjP2z7vfe6c89Zan4W1ZNU5RCRfvAbo8Lm6mx5fehco9T6tAqjsfxTEnwLBAoCNI+x89D7EfWWI3L2Z0j85jol7914oyD2Z775Z2HduPuwHpNv3XETCrIlL5L2P84YuzBwyc2CtDdrtdlgqlSwRGWa2AHjfvn00MDCgQ+ZKK2+l1DWi3yojot+BoUfz8fHR/Tux5+mHYLPDOu7a6sAYxJUyFt48jaS2DjAhSShyDm5me7JIJD4fIs+PAxURl5005vLqG9m2sjRNfRiGYowR7700m00ZGxuT06dP6++h0spbKXUNysknYfEcCIAIbBxh+tH7EBYivW9E0Dcxgl3H7wdlT2QExCdOhzNvnw1HAATotEzNTxsLmTnMK/GeijwUkZCZgzAMDTObOI5Nf3+/WVxcNACYiBidhWtaiSutvJVSl1F6dScs/S7Y7AJAEGDm8SOYeeyIJkg+MEGEwkAfVt6ZRWOpChAhdWRTB79/ZzJL1Nka1rN9zOWNW/LmLUTkmNmlaZqvQJfV1VUB4CuVii8WizI/P693ttLwVkpdRuWHgPZrQOHZnwTzj4LIwguVtw3j0EefRFwu6n3Uw4YBgjjC/JvvwCcpssYt5XLBr06MpaveX2ibmr0IM/t8S5mIOHR6oXsi8tZaiaLIA5Bmsymrq6vS19cnKysrumhNaXgrpTbQfg0ovnIIlr8KwxMAiEOLvc88jLEDM3r/XEJUKaI+v4K18wsAEbwnW61zPDOZnC+EPgWo27glX3kuIi6b83ZpmuYd2HySJGKM8c1m04uI9PX1ifce1WoVaZrqoIfS8FZKXaqU/PkQcd8XYfij+fj40Mwk9n3wGIIo1PvnUn9sggBBMcbs99+CbycAERpNU7RWGlPb2svM7L33ecWdnzwmPdW4t9Z2t48RkWQ90MHMWFhYwNTUlM8atwh07ltpeCulLlL8xHOw9Hlwp385Bxb7P3QMQzu3631zGYWBCtJ2gqWTFzqj1dY5nhhz86VC2soPJ0HPEHl2kIlD1nmNmZ333jebTR9FkffeS6FQ8IVCwa+trUmz2USz2dSDS5SGt1KqR/zKKEJ+FYaPAAC8x8T9B7DnqaNga/X+uQxmRnGwgsWTZ9Gq1gEitBMOAaR7drTnBXLRmd/52/n2Me993nnN9y5qazabYq31jUZDrLVYXFzUO1tpeCulesvHZ38E1nwWxCFEqDDYh3tefArFoX5AtNi7kqAQAyAsnjgD8R4A8Wqdi6ND6eLooK97AXpOHfNEJPmZ3/nweXZgiTfGOCKSRqMhhULBExHOnDmD0dFRWV5e1h+G0vBWSgEIfmsSEX0VzHsAEBmDnY8fweSRAyCdYb365z/9Zaycncf6UhUAkCYU1tfJ7tqRzAVW0t5Tx4io26glq7QdANd7eRiGUqvVJI5jYWZpNBp+dXVVOlfr8Lm682iTFqWuHqHgfwbMx/IL+raNYOrBQyDW5L4WUbmInY/cAxMGnWhl4Ox8MPndN6NJdBq3BMiatmTNWUJmDokoNMZEzBwaY0JjTMjMgXPOlkqlbrOWoaEhDsNQm7YorbyVuuuVv/w4LL8K5v5OlBP2fOBhjO3fmZ8rra5BabgfjeUqVs/MAUQQIVNbN+HOifZcHPmEmS+1dax7fGi+eC17nW8h84VCAd57Pzw8rG1TlYa3Une14KsVRPJ5sHkSJATvMbJ/J/Z/8FFY3Rp2XdhaRP1lLLz5DpL1JkCEVptiazpbx4jgeobP84Vrwsxptgq9OweepqnkW8tqtZoEQSBLS0syOTkp586dA3ToXGl4K3U3Vt0feAGG/0cwFSFCQbmIez7+FPq3j+oiteslgrBUyLaOnQNEIJ64tm7induTuXLRtUQgRCTZKvPuOd/I5ryRNW0Rke6xoe12W0qlkm+322KtRbvdRr1e1x+S0vBW6u7yhTIK9neyrWEEIuw4ehAzj96nw+XvExEhHqhg+e2zaK7WAQJabY4bLWDPdDrLhItWnedbw3r3gouIyxq4OGttt/oGgHa7LWtra6JnfisNb6XuNpXn/z0sfRZEBgBKo4M49JEnUOiv6H1zAwRxCPEe86+f6oxiEGi1zuXhfrc0OuhqWdrmQ+j5HvDu/Dczdxu4OOfEOZdX6tJoNEREfLlclmq1qo1blIa3UneF0iuHYen3QTyaH/m564n7MXHPXhDrZo0bgZlRHOrD6tl5rC+sZH3P2a43mXdOJnOh7VTW+fx3fspYTwe27nB63jo1DEMPwDvnUCwWfalUQs/iNQ1wtfUfN3oXKLWB6JUIln4axuwBAfAe/VPjmHroMIx2UrthRARRqYjdTx1FUC501xCcXwwmXjsZbkfP1jFmDgGERBQZYyJjTBgEQUhE+VnfQZqmAQDLzNZaawYGBkytVjO4sG1Mt48prbyVuvP8OYD/AhSefRLW/BqI+iFCJopw4COPY2T3DoguUrvhCgMVNFbWUD0zBwDwjmxt3YS7d7TPx6FPgM6cd77SvLeRS/a2yzqvCQDnvZf8hZm9tRbNZlPSNNU7W2l4K3Xn+S8APldAMfwSmJ8EgQDCxL17sffph3S4/CZU3kBn8VpUKWDxxGkkjRZAwHqTihBp75pKF7JQ7vY9z4bIXX7Wd/a2f3drVQB+fX1dnHMCALp4TWl4K3WnKn3kv0FgfhmEEADi/jIOPv84SiODet/c4NDuFRYLSJttLL11Jo9XWqmZyvhIOj/Q5xoASdbrvDekBZ0Fbd293/mxokmSSNbsRay16O/v96urq9JsNvUHoDS8lbqjRK9OIcIfgGkmv2jHQ4cwdfQw2GjVfbOCGwDIGMT9ZSy9fRatag1gRuoobCfkZ7a355m7i9e6oZ1X4nkFDsB7732apt5aK2maSnYZsk5smJubQ1aV69y30vBWauv7jwal+Odh6EdAZOA9iiMDOPTCk7o17CYHt4gAIgiKMUxosfDGOxDnACLUG1Qc6Hcro4Ou3lNtCzN3m7UQkWPmvBp33ntJkkSy40N9vV4XY4y31oKIsLKyAujQudqitIxQqlex/34w/RiILQCQNdh1/EH0jQ9rJ7UbENqXCu73Xi4YP7gLI/t3di9ptU3hn14r7GmnHBEhIKJQREIRiXpeYhGJAITW2jCO4yAMQysitlAo2PHxcRPHsfHecxAEuvJcaeWt1J0R3L9qEYa/DKaPgkAQoZG9Uzjw4UdhgkDvn5tVbV8CGUZQjLD45mm4dgIAVF/nUhz62uR4siJC3YVrPZW4Q9bMJWvSkrdNFSLy9Xpd2u22LxaLCIJAAKBarXr96SitvJXaiobyR0PpAyD+b7Pl5BSUCtj56BGEhYLeRze92s5r7s4/ABjYsQ1jB3d1Rzy8o+Db3y8cmF8O+nqrb3T2fXdfsmNCQ+99fmyoBRBEUWQLhYIFwCLCzjkqFousfweVVt5KbUUNAIVfHkIY/ycwH8kHUbfdswe7HjsCE2hDlptdaeeB3TsDbaxF3F/C/GunkDZb+aljBeeRzEwmi0Tw71p17pnZe++FiNK8Cicih84BJpItYPPGGCRJIgMDA5ifn3/XV1ZKw1upLeA4o3jPp8H8EpgYIggrRRx+4SlUxoZ0rvs2BHcuKpcg3mPpRLZ1DETrDY7Hh5P5/pJryMUHlnS3kGV7uvOFbPm2MQ9AkiSRWq0mQ0ND+SEmaDab+kNWGt5KbSmFn96FgL8Mw5PIFi/tOv4gdhw9oPfNDQjtKwa3XOY2RCgND2DlzCyaS6sAEdopRe0WYe9Me84w9Z757bNqO++65nq6sXWbunjvvYj4MAx9o9EAM2NxcVF/gErDW6mt4wuMovkFWPNvABiIoH96Gw5/7EmEhVjvnptZbcvVfS4TWLA1WHzrNHzqABDVGlwcqPjlsZF0LVu8JvnweTZ07pm5e3RoPnSepqlYa30QBOKck9XVVVlZWZGRkRFZXl7W6ltpeCu1qQ29ADTeAEoffAhB8GUQhgHARCH2PfsIRnbt0PvofQT3ZavwawjuXFQpYW12EfWFFQCAcxTUGhzsnmzPRiHSfG47C3AB4LKjQi86QjRroYo0TfMubBgfH5c4jqVWq0mj0QB0/ltpeCu1STXeAPDrJRSjV8H0VOe4T2B0/zT2PPUQbKhbw254pX2ZWLzS7UwQICzGmH/tFHyS5I1bSsagsWOsvYKebWPvOrwkr8a7w+vZgjVPRLK+vu6dczI7OyvlclmyxWuA7v1WGt5KbVJ9H/lhGP4lMIcQwMYhDjz/BAYmx/W+2SzB3XNV3F9Ga20d1dOzABEA4vo6hzu2JXPF2LdxYb93d6g864PunHMuW8jWXdCWBbg3xoiISBiG/vTp06SVt9LwVmqzin9jEkHwZRg6kEfFjqOHsOuJ+0GsRdetCO5rvQ0zozDUh6W3z6JdW8+3jsVEaM9MJovmQmvU7qrznsrbO+ckCILuWZdjmgAAIABJREFUtjLvvQ+CQIhI2u22LC0tyejoqMzPz+enl+kvgtLwVmpzhPb/CaT/FSh+6NMw5tMgBPAepfEh3PPxp1HoK2vddaNC+zqHyN97uwsneAaFGN57LJ88C/ECCPFa3RQnRpKFoX7X8ALJjwF99/GgvQvY0jQVY4wTEanX6z4IAh+GoTjn4L2Xer1OuOx4gVIa3krdOul/BcLP7UMY/i6YtgMAW4s9Tz2E8UO79f65yqC91cHde7O4UkL1zBya1RpAQJJQ1GgR75pqzRkWJ3Jhf3e+BzxbsOZ73yYi32q1xFrrmdlba2V1dVWMMRIEgdRqNQ1vpeGt1ObwUYvSnl+DpU/ko6L9U9uw/4PHdGvYjai2LxN31x72csn+ODYOQcZg4Y1TneqbCGt1LpcKvrp9zK9mrVfz4BYALl9tLiKuZ/uYZ2ZnjJE0TYWZRUTAzFKr1WR1dVXDW21a2tNX3V1Kxz8MQ5/Og5uswcxjR1Ac7NP7pidkr6sfuWDDue0NbydyyWq7c5sNgp6AsQPTGD0wA/jOGjXnOPzuG4W9K2tcJqKAmQMAoYh0e56LSGiM6b7PzKGIhM65II5jkySJKZfLbIzh8fFxBkBExNC5b6XhrdTtDO5fG0RgPgPCAADAe4zt24nxgzN632zyarv3NuIFJoow/dgRRAPlzpg6AQsrduRfTkSTAKyIBEDn8BIAEYDIGBOJSMTMITOHxpggDEPrnAtExDKzbTabplKp8NraGh8+fJhFJA9uDXC1qeiwubrzlQG0vwBE4b+C5Z8HUQEiiPoruOfFp1AZ07O6rzu4b+Lc9pW+VlQpImm0UH1ntvMxnky1xoWZ7clsuShtkW6DFp+3RGXm3t7nDhf2h0sURS5JEhSLRW+Mwfr6uoyNjfXu/VZKw1upW6YNoPD0ZGeRGu8DOudFzzx+BJMPHrrrS6qtFtrd2xEQlotYfvssknoTIKDV4tg57/ZOJ3MAPHDh3O+e1eYOWR/03o5s3ntvrZVareajKJKBgQGZnZ0FEWnnNbXp6LC5ujuE0Y+D6fH83dLwICYfOAjmu/ch8L7mtm9bcMuFzyhAeWQAk0cPZkewAyDwD94q7P3BW9E26gybByISiEgoIhGASESifDg9m/8OiChwzgXee1sqlWyhUDC1Ws2kaUroDJnrsLnSylupW6r8G4/Cmt8Bcz8AEDP2PvMQxg/uAtHd+Td5089tXy7se68jRtxfRvXMLJrLnVPHvMA22+CZHclcYC+qri86/9sY4/Cu08eMMT5NU0mSxFtr0W63ZXR01J85cyb/qhriSsNbqZtu4PcLYP85MD0DIoJzGNqzAwc+/BhsHGloX3f4bny791VpX21o91ThNgph4xALJ85AkhQgQqPJhb6yVMeGkzXJGrf0NmxB1mFNRByyBi55c5fsOmFmCYLAFwoFSdOUqtUqso/RAFe3nQ6bqztbWv0ACC+CiCCCoFzE7uMPIq6U7rpFajd6bvtyDVw2vt2NC+58Z5p4wfCeKYwd3JX1PAfaCcf/9Fq0b61uSswUiEjovQ+RDZszc3foPBtOD5k5cM4FAGyhULCNRsOUSiXjnDNBENB9991HPavPldLKW6mbInx5EFH0KgwdBQAQYfLBg9j9xAN31XD5LV2Qdr0Vt1zhs8rlw5yYERRjLL91BmmrDRCw3uBiEEh95/ZkKRsW762+JW/SAkC8956InDGmewIZM0u73fbGGAEgy8vLUq/X4b2/zNMTpTS8lbo+fQBaAAof+QlYeglEFgAKg3048Nzjd01Dli0/r71Btb3R7cJyfNHWMQhzdY1LEyPpfF/ZN6XnwJJs+1h+5nd+WfcUMlx8wIk0m03JO6+1Wi19jCkNb6VuuBaAwpf2IeQ/ANFEPpQ68/gRTB7Zf2Flsgb3TQ3uK3+TV7j4UsF9mQqdjUHUX8bSybNIag2AgXZKUSslmd7eWjB8Yb47b5GKbO47q8hdmqaSHx3qvZc0TX2z2ZQwDCWKIuzYscOfOHFCK2+l4a3UDVf4Qogw+GUY+iEQEbxHZfsoDj9/HFGleEf/2d3M1fZVV9xyNZdf4joBgkIMMLB04kw2Tk/UaFA8OuCWhgZ8Pa+k0bNwLau8uweX5Gd+p2nqoyjKgx61Ws3Pzs7K9PQ0zp07p+GtNLyVuqHiZx+GtZ8H0yAEoMBg/4cfw+je6Tt6kdpWbbZy7UPkl7++MNSH+sIK1hdWACKkjoNGk3jPVHs2sMgPKPGXOPM731bmmdknSeLDMOxuM+POeeESBAGICNVqVR9r6rbR1ebqDvOFItj+HJh25pdsO7wHk/fv1+C+ncG9wTXYILixYXBf3KTl4gTvNJGxYYiJBw4gKHZPiaMz88HkD05GE0RiiSgAEPa8RESUrz7PDy4JgiAI2u12SESWiGyxWDQjIyPGe8/MrKvOlVbeSr1vewAsA6h86EVY80sgigEgrBRw4LnHUBkduitC2wvABMQWKIaCYkiw1Lnc+csF6a2stq+34r7624SlIhrLa6jNLXUu9mxW61zYOZHMFmJp9wydS3Z0aN6wRbKFa95am7dSFe+9JEki6+vrUqvVurvU1tfXNxwbUErDW6krWQYQfW4SQfh7MJ3+5QAw+cBB7HzkXrC5s37VLxXahoCD44znDlp87LDFRw4GeGZfgMd3WRwcY1QioNoU1Fqd7dD0vip0ucHNVnDZBWnXdjsBBwZRpYClt87ANTtbx5pNLnhBe+dEspg95eguXsuGxB06C9hcvmitd4sZM/sgCISZZXh42APA7OwsaXgrDW+lrttvGJTCfw/LPwEihggKQ/04/MJxFAf77/jgnuwHfvQhi3/3aIiHpwymhwxGK4yRMmNbH2PfmMGxnQb3TRo0E8G5VYGX2xTcG8bztQX3RlV4LiyXkKw3UX37fGc4QoD1Bhd2jKez5ZJv5cGMi9um5tvDnPfeG2NcmqbinPPWWp/v+15eXpYkSeT8+fNaeSsNb6WuW+WDh2HNb4IwDiKACXufeQiT9+6/7FDxVg7tPLj3jxJ+5skIT+0NEVnasAENM2GkxHhgh4FzwJsLDonrNiW7NaF9jRX31TZp6X2n2/acCMXhAayenUdrtQYQUTvlMHHwuyeTeWNwUcOWrOqWvBo3xvRuI8u6qYpnZnHOSb1el+HhYWk0GtJut7VtqtLwVurqQxtA++UABfsfwebFvOoe3j2Ng889DhuFd25we8HMMONnnwpxz4S96s8VWsLBcYPECX4w5+E7p2tukpXkVzFEfqXg7rnOhBbMjKWTZyGdzmi0VufSyEC6NDqc1kQI+bD4u4fP8wNLiEiy40QlW4UuURT5Uqkk6+vrCMMQS0tLWn0rDW+lrlobQOlDz8DaV8BUAQBbiHHguUcxMDl+Rwd3JQJ+9skQD+wIrvlzBoZwz4TF6WWPt5dcnt6XDOBNFdxXqLbfcz0BUaWI2twSGkurAACXcLC6TsGeqfR8YLsB3T3vO9tG5kTE+04v1LxdqnPOSRAEkqapVKtVDA8Py+LiokRRJLVabcMxBKU0vJW6yBf7ULJfgeGH8kvGDu7CricegA2CLf0/u9z2Lybgg/sNXrwvhLnOXUuGgVLI+IfTKZrJ7Qztqwjuawzt3stNaGHCAMsnzsInKcCERtOUQuvq20fTFUGn8s6GxSXf751V491Tx9I0zduqSrvdFuecNJtNERGpVquo1+v6cFQa3kpd2ZcIFfo0rHkJRAFEEPWVcPijx1EZH74jQ7v7BKVM+IljIcb73s9DmDBYJMyvebw+7y8Ov1u4kvzawv7agjsX95fRrNZQO7cAEEGEeG2d4+ntyWwcujQfFkfWbQ3ZvHf+djac7p1z0m63JY5jJyI+CAJpNBoSRRHm5ubyI0OV0vBWakPlZ6Zg7atgngEAeMH0sXsxfewe0BZcO3S5Izbffd3HDls8sy+47qo7Zw1hpET4+1Mp1lqXz52b1tr0eoP7GobW2TKi/jJWTp5H2mgCRGgnJrJGmjOT6TKybWN5SIuIGGO6K86zLmzOGNMdWg/DUNI0hTFGBgcHfRAEmJ+f1/BWt4R2WFNb1MsGbH8MTA9m6Ya+qXHsevx+EG+956SXq7Z7r3Me2DlI+MihAIG5MU9Q9oxaPHcw2PDpjmT/Lu5olgdjdq72Jbudvfvyi8P5eoL76r+WXHQb7wWlkQFse2A/yHZ+P7yD/ZcT0d6z83aAGQbonPsNIAIQikhERJH3PhKRyHsfOecCa21gjAkA2DRNTRiGpl6vGyLiKIp0xbnSylupDRU+eASB+W0wjwAABwH2PfsIRvZMbbma+2pbmwqAgIEffTjE0akbO58/2c/4/qzD7JpctHVssy9Iu9ah9bBSxOo7c2jX1gECkoTjZpuwb2cyS+S7DVnyPd/ZinPX2ws9u9w75zwzCwBvjJF2uy2FQkG899JsNi95Dyil4a3uYr9pUDK/BcPP5kk9tGsC+549tqW2hl1rP3II8MhOxo8/HN6wqjtXDBlEwLdPO6T+5rQ2fW9AX8P2r+sN7nd9UBCHIMNYeuss8j1yazUuV4p+ZWw4WWM2kh9U0hvWPYvYuvPheWi3Wi2x1opzTowxsri4mIe3UjeNDpurrafiPgFDn+hsbxLYOMTOY/cjKhe3dHC/e4i8N6YEgkoseP5ggEJ4c8YWju0McM+EuUK1felDQS59+YULLj2sjcvcZqPg3vh7uPTQ+rsuJ2B4/zQGZyY6cxAAUkfRP70e7a3VTcl7HxBRkB1O0n3JhtC772fD5oGI2EqlYtrttimVSiZJEp6amuLBwUEdPldaeSvVVX55DDb8KpgPAwC8YPsDB7DnqaMg3tzPRa9lQdq760vxwJN7DD5+T4TQ3pxciANCOQT+9u0E7bS389ptWkn+vofWL3EdABMECMsFLL11Fr6dAERotLhQjH1tYrRdzTrUdRem5c1bnHMOgEvTVHqHz/P94I1GQ0qlkq/X69Lf34/Z2dm8250GudLwVnc1QvT8j8LQT4IohAgKIwO452NPozjYt6mP/LyuIzuz1BEBhkvATz0RY6L/5j5kxyuMs1WH12Y9OtO5V7Fa/HqCe6MjQG9IcF86tLvviEdYLiBptFA7t5j9HMisrZto5/Z0thj7VrZtTLLuas57L8zcXY2ev2TNXRwzSxiGwswSBIEsLCzI5OSkzM7O6qNW3RQ6bK42v8IrndfR53fB4LNgKgMAW4Pph+9B/8RI3vryzgnuniFhEeCD+y32jd3859qBJfyrIzGmBgleNgrMK60kv4qh9Q0CWDYYQr/cSnK5xI0v/eEXLiVmjN+7F/FApftRS8tm9Fvfi3YDsEQUiEg+NN5dfZ4PnwMIjTGB9z4QkYCIrDHGWmuNtdbs2LGD19bWKIoirbyVVt7qLpV+HcC9hNKRX4Xhf5OP5/ZtH8X+Dz2GsBjfEaF9UXDjQnAfGGd85okI5ejWPNceKBAaieC7Z9PuyWOXr6avXB3ftJXkVxgi3/h6go0jpEkbq6fnAAEBRKt1Ux4bShcG+lyjd/Faz2uXrTB3WfXdHTp3znXP/M4qdqlWq2i32/oYVlp5q7tU8d8+DWN+Ig9uMgbTj9yL0nDfpgzta1mQ1q1L5b0LxeIA+OihAKPlW/dQZSY8vS/E1BBfoZq+XCV+dfuvr37x21UuSLtMtX3RRRCQAcbv24vS+FB35XmjxaV/+F5hf7NFhXzxGoCQmSNmjowxkYhE1tpuBR4EQUBEQRAENo5jGwSBHRkZsY1Gg6enp7mn8tYKXGnlre4ihd8YQGS/COZHQQCcx9jBGex/9hhMuMX7l2/Ytazj3m2MH3koQiG8tc+z+2KGiOBb7yRwcrurbVxHtX118+FBIYIJLJbfOgtxDiCi9QYX+itueWzI1XrP/M5eXH4CWW/71CAIOueFeu9LpZKv1WpSKpXEey+rq6vIjgxVSitvdTf4h84ry8+B6fl8a1hQKWHPU0cRlgqbZpFaXlW/p7HKRpdv2LWsw4ugYAUfvzfAYPHWP0yJgA/sC3FowiJ1uHyXNLm6y9+ToZeo0i9dPst7quYrV9tXDm6g03ltcPd2DO+b6i6vbycc/9Nrhb2NJheIEAKdFyIKmbn7vjEmZOaQmYPs+oCZA2Y2QRCYKIo4CAIeGhri7G8tafWttPJWd4H/DOALYygGXwHzIQAgw5g+di92HD2cb8PZFMF9TZdftgFK53bOAU/ttfjh+yNYc3v+n3HA6IsJf3uyjcTl2XY7t39d47z2BmX8xbcVsDGwpRjLb52Fb6cAgerrVA4Cqe+cSJZESHpOGcvP9XYikh8V6kXEGWNcmqbdj8m6tUkYhuK9x9ramkC7rikNb3VX6HvuZ8D8U3lSl4YHcPD544j7ipvi8JHr3gJ2mduIABN9hJ86Hr3PU8Pev/GKwdyqw5sLbssH97tDu1dQjNCuNbpbxyDEq3Uubh9P5ysl3xQBskVr+bGheZiL99717Ad3zjmEYejTNPXGGBERVCoVv7a2pm1T1Q2jw+Zq8yp9+QiYPwsmBgBiwo6jh1AeHbztwX2ti9IuWpAml7+NNcBzhwLsHbW3/UcQWsJH74kxXL6e4W7coKH1K81tX3pB2iWH1i8R3AKArcX4kX2Ih/p62qaagW99L96dJIizbWMhOovXwuwAk7zbWkhEobU2f9umaRpYa22apuy9Z2bmRqPRO3Suw+dKK291Bwq+UEBkPgfDHwaB4D0GpiZw6PnjCArR1qu05eo/38wg48ePRRgobo7n1gNFxnLd41/Op9dZNV9vhf7+F6RtFNiXuklYiiHeY+XUuexaoto6F8aG04WhfmnklTeyxWv58DiybWO9x4bmQ+zOObHWSrFY9EEQ5E1btPJWWnmrO022SC2KjoP5X4PAEIEpRNj91IMoDFZu25++69m3fS3BLQAsA88dspjs3zzPq0PTqb539DOcvzOCe6PtZiOHZtA/va37CRotU/6nHxT2tBNEzGwBBNlLb9/zONtKFjJzSESB9z5wzgUDAwMmTVOTJIkZHBw0hw8fpnK5rFvHlFbe6k7znwH8DyUUS6+A+REQCETYfmQ/dh9/EHwb+pffimobAFInODJp8KljEYrh5npePVAkeA/8/TtJPqr8ngC+0jncm2Fu+0r9z9ka2DDAysmzkOzgkrU6lyslWZkcS1azi3pPHMtfu7zHeX5ZVoFL3lo1TVPx3osxBsvLy1d4aqeUhrfaaiof/xSs/UV0GmQgHqjg0PPHURru3xrBfY2h3ZkPB0oh8JknCtg3ZjfhD4Uw0W/w2lyCcyu+u/J8g9zd5KG90XUCAhCUC2gsraKxUAUA8p5stc7xzPbkfBxJIgLp3f+dB7n33htjuuEtIg6AZ2Zpt9segKysrACdIXY0Gg1dfa40vNUdovjKDALzu2Ca6mQGYeqhQ9jxwEGwubXV6I3eAna5Kp0AfPigxSePhDBMN+z7710M93631sUBEFng708laLvLB/e1ndF9e4J7o9uwNTBRhOrJfOsYodmkgrXS2DGeLBNRt21qT+V9UQOXLMydiPg0TQWAbzabUigU8rapUq/XN812R7X1WL0L1KYRfilAwJ8B8/0AAO9RnhjFzmP3wYbBleeWt1i13ZsgwyXC84dChNfxBKXZbGJ+fh7vvPMOzpw5g3PnzmFlZQXr6+vonGIJBEGAvr4+bNu2DTt37sSuXbuwbds2xPG19IUnHJ2O8OBUC994vX1h7FyuVG1fTwBfT9hfem77msNegP7pMYzetwdn/7/vZh/P5l9OxPt2TyWz24bbi0SUElEqIqmIJESUAIiIKGHmxHufBkGQJEnimFkKhUIahqFbWVnxa2trbmxsTAYGBvDaa69t2L9OKQ1vtTUE9ACYfhTUGRGiwGDX40dQGR+C+NsX3Dd6bvvdYU8EPLP36reGtdttnD9/Ht/85jfxV3/1V/jWt76FkydPYnFxEUmSIE3TDb++tRZBEGBoaAh79uzB448/jmeffRZHjx7F4ODgFdcUVGLGJ+8v4NtnEqzU5aIzvzfbgrTrr9AFIMLYvXuwcuIs1ueWASLU1m3lu6/H0+ND7VUi5FvHuiEOICGiiIhSACkzJ1nIO2a2SZK4MAz9wMCACYIAy8vLgouXD2iAq2t4Kq3Upnga+UqIkvkDWPppoLPCfOzgLjzwb59HVIxvetV9IxelXcupYc4DM0OMl18oYHro8uG9tLSEv/u7v8PXvvY1/Pmf/znefPPNbmX9fsRxjIcffhif+MQn8LGPfQz79u1DGIYbfrzzwP/8/6zi//qHJgxfz+pzuUzGv78h8hsS3D3Of/t1nPrGt+ATBwgQx672saerf71rMj3vPRoi0gCwDqDuva8DqItIDUDdOVd3zq177xuNRqMpIo1Go9Gu1+vter3enpubc8zsvv/97+cNaDW81VXTOW91ew3uBZpLQOnZF2H4cyAqAEBYLuLg88fRt214y4T2tVTb+aewDHzqWIhHZjYOy1arhT/5kz/Byy+/jN///d/HN77xDSwuLt6wJzRpmuLUqVP4+te/jj/7sz/D+fPnMTMzg6GhoUt+PBOwvZ/xj+8kWF73l4rOa6iarz7srz6AN3qCsFHQb7wHPKwUUT+/hFa1DhCQphzWGmz37EhmjfF56Obd1bpz3/n+76xlqhhjXL4CnZl9FEVSKBTk3Llz3Z+xUhreautoLgHRr48jiP8TDB3ML564fx+mH7kXxt68X9HbMbd9UTQIcHTK4sceiREFlx4Ee/vtt/Hyyy/jlVdewT//8z+j0WjctPvDe4/FxUX8zd/8Df7yL/8S4+Pj2LlzJ4LgvSe3VSJG6gXfPt2G8zc4uG/ygrQrBXfvJSawoMCi+tbZztQNAfV1LpUKrjoxklZBnb7nWYC/5/xv771jZmetdUmSCADfaDS6Z30Xi0W/sLAg2ZnfWnkrDW+1VTxKKB36NAz/9yCyEEHcX8HBjzyB8sjglg3uy1fonQv7YsKnH42xd8zgUjNYf/EXf4GXXnoJf/RHf3RLKzMRwfnz5/Gnf/qnqFarePjhh1EoFC76GCLCSJnx7dMJFmoeW2lu+2qDuzP3DUR9ZbSqa1ifXQGIIEJmrc7R1LZkvhBLgs6K8+62sTy4ichl+747G8C99yKS9zuXfA94FEU+TVNo33Ol4a22juJP34sg+AqYJrJUwJ5nHsKOBw/e8D9j19Mh7YZX21kmiACPz1h88v4YoX1vcP/xH/8xXnrpJXz729++fYMizSa++c1v4syZM3jooYfQ33/xPvtSyGAS/N3JFlK5QjX9fkL7eoP7Kue1r/S12BqE5SJWT83CNdudrWNtjm0g69PbkyV0hsqlJ7S7w+fZa58fZOK999Zaz8zee+8HBgZ8vV5HqVTC7OysQNchKQ1vtQUQCs/9HAx9EkQGIuif3oaDzz+BML6x/ctv59x29xq5kA1DRcJnjhewY/C9D8Gvf/3reOmll3DixInb/gPy3uM73/kOTp06hWPHjmFgYKCn+gZ2DFr8YDbBySXX02t5k68kv1ylvUGFHhRj/P/svVmQHNd5LvidPbfaq7q6qqv3fUc3Nm4itVMSN5OiJFOyr+2RLMkaexxeYuKOdX3luZKsGd+Yt4mZdz/7zRF+ctjhCL/MlU2JIkWBoEmRFEVR4AICIIBGd2WeeajM6uquytq6utENnE/RApDVWVmszDxffv/5zvdXt3fw4a/erc14BIRev8GsynD1kmdXbwVBTUlH895RqlrYZWxPaEu1Wg12dnZ0EAT6+vXrQTqdDt566y09MjKiL126ZJS3gSFvg2OKDIAtAM5/vQdC/DUoyQAAtxXmP3EeuYmRk0ncLbfrJk7QGnhsTeIzS6oppOOVV17Bt771LbzwwgvH5nRprfHiiy/i0qVLeOCBB+B5Xv01wQhyDsX/9+otbO3sLh07dnPb/RJ3PUSHQCYcXPvlO9i5vgUQ4NYWdba2oWfGq79mjGit62Vz3aC+98eoBgACxliwvb2tKaU6mhJ599139fXr10OvmymfGxjyNjhu2AKAbyfgWP8dlJwHIYDWKMxPYOqBTXApbh9pD6xE3pq4Aw3MFii+dp+NpL13TfWNGzfw7W9/G3//939/LE/bhQsX8P777+MjH/nInjnwnMfw/odVvPTr6uEu/+qRuLue1275WvN5ZUpABwGuvP7rqG6Eazeom0lUPyhk/Q81CIIgCBoMbPXMcwCB7/t1Evd9P8o+D3zf1zdu3NBSyiCXy+HSpUtmjDAw5G1wTJH89BfA2J+CEgGtwW0Liw/fh1S5cAcQt47jIFgC+NJphc1R0aS6/+7v/g4/+MEPsLOzcyxPWRAEePHFF5HL5XD27Nl6oAujNfPav71+C1e39PFR2wchbt1iO6nl7F+/dBnbl68BhMD3Cf9wi/CJ8vavOdd+WDaP1mxHBrXA9/2AUupH5B0EgfZ9P/odTQjR2Ww28H1fv/nmm9Fhzfy3gSFvg2ME738fB+N/DUamo01j51cwfm7twFnPbc1nh07c8aQd7bNYZPjyOQuu2qu63377bXz729/GxYsXj/Wpq1aruHDhAu69916Mjo7Wtycsiis3Azz/1s6xnNs+MHGH25kSELbCB6+9DV2tAoSQm1vU8mx9rVSoXgH2ls4ZY344/+1HWecIjWyEkEBKWV9mdvXqVX316lWMjY3pt956y5TNDdrC9PM2OELSfjC86tgXQHGmJuc0vGIOE+fXwMTBniXbqe3m3tnh/7SOTUmLWwJW36cH4g6gYXHg0RWJnMOajvWv//qv+Pd///cTcRpff/11/M3f/A2uXr1a3yYYwSOrDmbyHNWGnt+77bJ3vzC9n2RbEGmrXtv9ELfe8zl00/F0/UEseq3Ddj9AolxAdraCaIK/WqXyhf+wpq/fYA4hEFrreq/vIAiU1lpqrRVjrL5dCCEIIaJarQrOOVNKUcdxWCqVou+88w6dmpoqwZeAAAAgAElEQVSiofI26tvAKG+D24zt1wHvvyyCi/8DlJUAgAqO6QdPY2h+4lBIu3vVfBCFrtuq7doADzw4zfGbZ2wwtnc8vnnzJn7wgx/g2WefPTGn8rXXXsP8/DzW1tb2qG9GgX97/RZ8ffvVdi+GtGa13foa0QAIpRAJG9d+cSlcOgZy4yZ1NYLtiXL1vUAH2GdY04QQP5rf1loH4U+UvKZv3ryJqP+3lFK/9957uHbtmolMNTDK2+A44PckmPXHIHQxGpPSo0WU1+b6KpfHquN2qhk6NkW6K7XdRNqtibvxWDoAhpMET21YkLz5lnvppZfwT//0TyfqTG5tbeFv//Zv8e677+7Z/tE5C2fG5T7l3B0BazSr7W5Ueuz2Tsfady3EbW8mdQ07m6yp7zoIvfBze+bNSyLLOWUARKiyFQAFQIXqW3HOJSFEMsYEY0wQQrjjOFxKyQFwx3FYpVKhyWTSKG8DQ94GxwDe9CdA6Rei4YhyhrGzK1CeezRqux/Sho4xpHVQ2w3HYhT45ILEbEzXsH/+53/GO++8c+JO57PPPosf//jHe0+xxfAbp1ykbYKGwnP7srVGn6V13YaYEVMij8hZx5B26wz63RJ67Q/KGHJLk3CGMkAQAAS4scUSz75ozWzdIjYhRAL1zmMyLKUrAFHZXFJKJSFEhmV1TinlnHPq+z7lnNOxsTEajtFmnDYw5G1wm2D/1wI4/SNQUut2EQQYXp5BaWUWpMer8Lg6yeOONZaheHhRgrNmEbWzs4N/+Zd/OZGn9L333sM//MM/NLnj1ysWzk92DtnpsEirg0I/HENazNluOoDWGlY6gcKpGVCx+1D2i7fl6Gu/VHmttQhJWxBCBCFEaa1VSNhKa60igo8UOACeTCbZyMgIy2azNJVKNSpvo8ANDHkbHCHc/7f2pxCPguKBaGC1MklM3X8KXPCuZ/X6KpP3Y0hDnCFNtxKBbY9FCfCJBYlSqrW95O2338bzzz9/Yk/vP/7jP+K9997bs81RBE+ccpFzCQKNNuVu9Lduuwe1jf1aXnfe3qzG0VKlax0gPVlGYrxYP+atbWr/5KI1s1NlihBwSmlUPpchWdeJmxAiOedSSimEEFwpxRlj/OrVq5wQwlzXZfPz89R1XWNeMzDkbXDEuP4HgPWdCij9BkASAEAYxejmElKloa7aWh5obrsfhd4raceU1v1AY7lE8ckFCUZbj7svvfQSfv3rX5/Y03vx4kX89Kc/bdq+OiLxuVWnVlLeR4h6b628S0c4+iLt/eXudtubSbtDaV0DXAoMrc2Au/XQGvLLS2Lk+ZfVKCUQIFBBENRL5wjL5oQQSSmtb+ecS9/3ZRAEwvM8prWmQRAw13VpKpUy5G1gyNvgqPEQheJfB6XnoqEnOZxHZWMBhHUei26/kxwdneQtjWwAXAX8xrqFnBu/qOPChQsI20GeSNy6dQs//OEPm7YTQvDomov5YYFAN8ngrnHUTnI0qu0O2+vFpeEc0pPl+r8Dn4ifvGTNX7rMkwSahUQtwqViKjKxhX+XjDGhtRa2bbPw97hlWVwIQavVKp2dnSXpdNoQt4Ehb4MjhPvp86D090Fq1E0oxcjmIpxc6vDU9hE6yVuq9PCv900KnB2Xsf+Nvu/jlVdege/7J/oUP/fccy2/21JK4PF1F7YgA3OSd6e2gYM4ybsvrdf+RyVDfnkcImHX24h+cE1knrtgTQYBlUBt7TdC8xpjTHLOJQBFKVVaaymEkIwxYds2qzUe49y2bZ5Op1m1WiWe55HaMxExJG5gyNvgkOF8JwmBPwClwzVJEiA3XcHI+lw9WnNgavs2Ocn3q+2InwoewaMrCpaIH2t3dnbw9ttvdzV1cJzxyiuv4Pr16y3UN/DgnI2VEdm1k3y3tH6Q5V8Hc5K3277n2ol+MQCcoSwKazM1k0M4tv7HG3LyjV+JfDjvvcd5HgSBpJRGLnTp+37935RSwTnnQgjqui7NZrM0nU7Tubk5qrU25XMDQ94GhwzGPgZKPhsNtsK1Mf3ABqyE1ztB92hI60j2wECc5Pvesf76A9MCc8X2DVa2t7f3pJSdVFy6dAkffPBBy9dyHsdnl21E4Xmdyt1x2zsb0oCBOcljtu87002vZedG4RSz9c93/SbzXnjZmtBa8yAIZIMDXVFKVUjm9fJ5qMoFamvEBeecK6WYbdtse3ubcc6N+9zAkLfBYavub2fA+DdBSD6SYaXVOWQnK9ANJqaOCrmNcm5H2kfhJN+jwcL39DUwkqL4zJIFyduPrzs7Oy0V60nDtWvXcOXKldjXP7rg4KE5ux6b2lY5t9vepdoGDu4kb11ab03ckUoXro386jSYCqdKNKGv/VKOX3xNDTMGvk99KwCKMSYppfXgFkqpiMJapJScEMIBsOHhYVqtVunk5CQ1xG1gyNtg8MiGf0r7t0HwsTqX59MYO7sMxlkTyd4+Jzn6IO29Lum9g7+GoBq/sa4wVeicPFytVrG1tXXiT/n29jY+/PDD2NctQfGFMwkUkwxB0CqkRXee245VzbolkR7YSd76Ea1DaV0jNTYEr5Kva+PtHWr/8Kf24ofXmUMpojXfAqHrXGutovnwqIQegvu+L7TW/MMPP+RKKVqpVGg2m6WWZRkCNzDkbTBgvA/A+94SCPkjUFJP6qiszyNVynf1Fv04yePIvr1K75xJHvsZ0azetQZWShwfnVNdja1BEKBarZ74U6617vgQslSSeHjJQWM6rG733XZS6O1UMzAwJ3k7td3qWNy2kF+ZApW8TuCX3hOl5y5a40GAumkt/Kkrb0qpYowpSml9PpxzLhzH4clksh6fqrUmq6urUfnczH8b8jYwGBDE/6XA8PsgZKbGUBrJkSFUNhdBGWuvqvtwknci7cNwkuu9srC+PWkRPLFuIe10N55qrRG0mEI4qQTedqChBJ9bdTGR4x1L4a2Iu9f1192q9E5O8tZqG4gtresA3kgemfmxhs9PyEs/tyYuXWYpSgnfr7yxO/cddR8TlFKhtRZSSq6U4kIIZts2zeVyFADNZDIRcZvGJYa8DQwGAOv6faD08yAE0BrMkph+YBNONoUgCAa+/CuWtAfmJN8dxveTtm4MGNHA5ijH5pjoWgwRQtq67k8KCCEQQnT8vbGcwKeW3VhibhfSEk++7VTzAJzkfZTWCWUorExBZZP1/44PrrHcCxftca1RzzxvKJcrAJECl6Eal0II4fu+IIQwSinb2tpiUdvQMPechGO4Ud+GvA0MDoLvSFD2dRAyGm0pzI1jeGmqpUmtEwEfaPnXgee265+ilSTcs11rwBXAZ5cteKr7W4pSekeQN6UUtm13/D0Wqu/lkoAftFfazcSN22pI60mhaw0rk0BuaQIk9HjogLKX37Am37okMpRqAUBQSkVI2vWmJWHqmmrsOrazsyNd1+WWZbHt7W22tbVFP/jgAzo9PW3Gb0PeBgYHQGRSc9hToOSRSAdYqQQmzq+CctYfcQ+E7OPVdnvzW3fEHf35uRUVqu7uwRiDUurEn36lVFfkDQCFBMeXziXgKbIvea074u7HkNadSu9tbrv9PrX/pabKcIqZsDyhceM6Tf6PF+y5W9tUMUp5FJu6X4VHy8YASNu2hVKK+b7PXdfltm0zy7L4+Pg4pZSSfcvHDAx5Gxj0gPcBqO+NQrA/B0EiGoyHl6eRrgy3VM26aa5T99VIpD3Zt1fbrQbk1k5yvfsJ99R4gUAD4zmKR1ct0B7DrzjnXZPecYZt2/A8r+vfv2/axn3TVgPJtiqh753D7i4hrZmc+3GSx32Gtmp7/3YAMmEjuzgBwmh9tH3jLTn2s1dVWUOLiKQbGpdEXccaG5nUW4cGQcCVUtx1XRoEAc1ms1RK2Zh7bkjckLeBQS/4GwaL/B4Y2Yzmup1cCmPnlsGV6E41tyTSzvsdjSGtlbs8rC5w4NFVhZEM7/lbE0LAdd0Tf/YTiURP5O0qhic3E8jvy3w/eNjKYAxp/Sn01rX79GQJifFhRGUGP6DyhZet2SvXmEsI4aExTUU/2A1tUVHyGmNMEEK4Uopvb29zQgizLItJKdna2pohbkPeBga94rvh6H1zFZQ8gzB3mXCG8XvWkRjK1Yn3aBqJDCbatNXwH6fs54sMH5lRfY2cQggkEokTfxXkcrmeKwjLIwoPztn7uTOeuAcUbdqegAdI3NEAKzkKp2Z2c88BvHtZFH72qlUBtAiCIEpUkw3lchX9CCGi1qHC933hOA5LJBLMsiyWSCTo9evX6fr6ujGtGfI2MOgFfwngLyUI/xoImYsG2ezkCCqb8wDpsiFIzPKv2NJ6LHEPJtp0D6HHKnQNyYHPLisUXNbXt8cYQzabxUnvNTE8PAwpZU/7WILi8Q2vFtwSfclNS8AatjeLWvS+1rt3J/mea65pP91M6Pte01rDLqSQnqvUc899n4gX/0PNXL7CE4yRumktJO46iUdtQrXWkjEmlVJCay2EEJwxxgDQSqVCbdumxWLRtA015G1g0ANc/hEw8kWQ2rXEHQvj51YgbRs6GLAhrVmmYZDRpi23o7US9wPg3ITAAzOq7+GSMYZCoXDiHecjIyN9/Tcsliw8fToBRjD4tp0DcpK3I+Y4tb1/P0ooMrNjsDLJ2jZSWzr2wxfsmUBDUEo5ws5jhBAVZp/LIAgkYyxqISp3dnai5DXueR7XWvNEIsF2dnYoY8yUzw15Gxh0CfJXOXD256CkEG0amp9Afnp08NGmMWTalrTbldZbkHbr7S2GeQ0UXIqnT9lw5MFuoXK5DMbYib4MRkdH+9734RUXy2WJQO9T2y1IdpDRpp0fEroskXcg7ggq4yI9P1prtQYAhJCX31BTr7whh4BAaK0FIUQEQRApb4Vay9CohahQSkUmNwGAe57HLl++zKWUNJFIkPHxcUPchrwNDDpA/t8ESf4MKP14yLyQnlMzqVkqnkj77bXdFEXaRbRpGwLufm67OaSFEuATCxILw+LAX2OlUjnR5E0pxdjYWN/7DyUFPn86AVcR7LN6d1THXRvSWj4I9BrSomNNaV3tRylSsyOwi5m6eW17h9rPvWTP3LzFbYTl8sY2oY3Oc4TLyYQQghAiq9WqIITwRCJBk8kkLRaLtFwuUwA07PltiNyQt4FBC7APpkHp74KS+mTn2LllZEZL+5b+DNKQtqu24/bpN9pUtzGy7f/8oxmKzy4pcHbw8bFcLsNxnBN7GViWdSDlDQD3TjvYHFOH17bzwCEtByDt3Qsd0rFQWJ8GVdHKBELeuiRLr7whikCt61gYziIB7HGghz/R/DePYlMZY1xrzdPpNNva2qKnT58mYc9vGAI35G1gsA/foVD4CghZjQamVKWIyuYSSMPcZz9q+yDE3auTXLdR23HETYjGJ+cVKlk+kG8yn88jm82e2Cshl8theHj4QO+RcTkeP5WEI0n9/MaZzw4j2rRn4u51n/qH0EiMDiE5Va5v3tkh9nMX7LnrN5lDCAR2574lpTSa7647zyml9ejUqOe34zgsCAKWSqXolStXqOu6Zlw35G1g0AKu3gSlvwsCCQBMCYydXYaTTgC6v7CV+JCWyJCmB2ZI6zS3vS+bpf4XP9BYKHJ8etkCo4MRNalUCiMjIyf2UpiYmEAmkznw+9w34+Djiy4CrVs2GjlYtGnDfvFXScOxdFdO8o5qu4G0o09IGEVmYRTCs+va+NJlXvzJRWuMEHA0hLagwX0eudG11pJSKhhjkhDCHcfhlmVxIQTTWjPXdWk6naYwmeeGvA0M9uIvLEj5xwAm6sppvIyh+ckOqvkQem13Wv4VVyLvpLab3Oe1aUpXETy9aaPgDW6O2rIsTExMnNirYWZmZiARr5ITPHMuhZFM1PO7O9XcXa/tbpPV+pvXjlXoet/DYLjdyWeQnN5V3zog7IWXrflf/IpnaY3A6z2/EZrWIiUuhIgalwillADAtdY8UuBDQ0N0cnKSpNNpM+9tyNvAoAFJ+0mAPB0lqXElMX7PKlTSORhxoxWZdkAnAt73i12r7VZDsgbOjQvcMykH/pXOzMycyEuBEILZ2dmBGe5miwqPricgWfeqOV5t97bW+yCIL63rVpchCKfIzI1Cpb3agwUBrt/gqecuqOlbO7AAyCj3vKFtqAKgqtWqaiirC9/3hWVZnBDCpZTMcRy2vb1NFxYWGue9DYkb8ja4q+H+lyIo/RootUJGxvDKNHLTo7U13f06yZvUdmvF3bG0jt4Nad0uGyt4BI+v2bDE4G+ZqampExnUopTC5OTk4NapE+AzKwnMDMnD6bXdoZFIk2rWLYKBuiqt73tlv3rXGirrIbPSkHtOgNd/pUbf+JXKAYhiU5vc5mG5vNF9LqvVqojiUm/dusVSqRS9fv06nZ+fN6VzQ94GBiCA+iIIuScibmcoi8n7N8AF7420jyjaNL5E3vt+908rLJX4oXyxk5OTJ7JBieu6KJfLA33wGM0KPHoqAUYOp9d2K+JGHMn2Ma8dp7ZbKfT09AickUL9KfXmLeb+5CVrZrtKLUCLaJ47KplTSlW45rteSgcgpJRcSslt2+acc+Y4DsvlctT3fdO0xJC3wV0L6/+p/Sn/ahaS/T4ocQCAcI7K6UW4hUxTklo/YSsAOq/bbveK7mZ7b2obAAKtMZykeGTVghKHc7uUy2UUCoUTd2lkMhkUi8XBPiESgk8tezg1ZsEPdBequeFv3ZTWdWdCPwi6Im4NIACY5MgujoHZdc8AefPXonLhFVkmRPMouAVhGT3sLGYFQaAaSF0wxsT29rbUWnMhBN/Z2WG2bbNSqUSXl5fpndB21sCQt0Gv2PoWgCcpbP4HIFiNNqfKBZRWZvY8zneltvuNNtUxWqpdtGlXpfX2KpwRjcfXLcwMiUP7irPZLKampk7cpTE8PHwoy9yyLsdv35tG2mGh+7y/aNOelHOv++ldxa1brVDo+JBQ2+qUsvBGd9V3tUrkjy/Y8+9f4QlKCY/6fEfhLQ2Ku94DPDSwcQDSdV3GOWdaa3b58mV68+ZNats2NWO9IW+DuxHuxqfAyG9H0Y6UM4yeW4aTTnantgfmJO8/2jS+a1j8+wUaWB0R+MySdahfr5QS8/PzJ+6yGB0dPbSuaOemHDw078ao5gElpMWp466aj8TPa7d/SNhbWmdKIrM4Ae5aoXmN4L0rrPCjn9lTvo8oCjVynato2RhjTDHGVLjuW9i2LSilPAgC7jgOV0qxqakpmsvl6NmzZ01oiyFvg7sO9veyEPzrIDQHAAgC5GfHMLwwVc9pHnjYChDvWo/Z0mluG+hebUfwFMEjKxbSzuHeJpxzzM3NnaiYVEopZmdncVglWckpntxMoJzmh5dHHje/fUDEPyQ0LxtDoGEXkrWuY3XvACWv/kKN//o9niaE7GlcorVWUfOSKIktdKQLIQTnnAtCCBdCMEop45zTd955J1r7bea+DXkb3PHIfhhKA/8zIKjnl6uUVzOp2Qo6CPp2krdV2zEtOLVGU3BK+2jTXkrrezO9AgCnxwTOT6pDH+8opZiYmDhRpjXOOZaXlw/VJb9QsvDxBbehaQlwaNGmaN7erLg1OjrJO4S0tFLhoBTpxXHYQ+l6KerqdZb+0c+c6SAgUuugHtiChnI5wpJ543bf9wVjTAgh2Pb2Nksmk9SyLJrP5415zZC3wV2B9z3A+V4JnP8hKEkDAKEUIxsLyIwWoYOgPQG3GDGPPNq0q9L63gNHY60ngEdWbCTto1HD5XL50ErQh4FkMonFxcVDPYYSFE9upjCa5bWe3/oAc9tdvNYN+eoe3q/9fo3XsAZ3FFLzo6C7KzfI62+J8Z+/pfKMEbaPtOsl9OiHUiqVUsKyLKGUYpZlccYYT6VSLJlMspGRETIxMWHGe0PeBncFOH4HlJ6L/unmMyivzTWU91oonH6c5D2Wu9FyO9B71zCNFmMqtAY+uWjh9Lg8sq+6VCphaGjoxFwa4+PjB+om1i0mhxS+fE8agjaf7oHkkeuYfVpeX72jldpuNftOQJAYLcAa2o2a3dpizrMvqrmtLepQSjilVETZ5qFxzYryz8NSumSMCUKI8H1fuK7Ld3Z2uFKK2bbNOOdkaGjIKG9D3gZ3NNzv3wtK/mcQsJrqJhg9uwS3kGlWPh3adg4qk1y3cYv3FtKyt0TeWI73A2Asw/D5DXtg+eXdIJ1On6iM84WFBSSTySM51ufWkjgzYUMHA1LbXbf6jHeS915a160fERrenDsKmZVxUBnO81PgrUuy8qOXrDGAiP0u83AOvO4+j0g9DHIRQggOgAOgvu9TrTUrFAqNueeGxA15G9xR8L7vguOroKTGJkGA9OgwisvTIA2EduC2nWhNwINykncypLV6TQmNR1ctVDL8SL9yx3EwMzNzYpLWTp06dWSfNWkzPHk6hZRD+l7+1bVC7yYhrafSeovtTZ9l9wHTG8nDGy8ielIJArALr6ipy1e4p7XmhBCO3TluhbB1KCGkHtwSmtdEFJmqlGKO47CxsTGSSCTMvLchb4M7DvYD0WByPyh5DIQQaA1mK4zftw47ldhbZhyYk7zfXtsdyL5H4tYA5oc4HppXR06ikQHsJDjOpZRYXV090mOen3JwdtJpuha6Xv7VDXG3eqWrY+mYS03HXe6xJXTCKLIrExBR7jkIuXyV539yUU4AZI/Sblw2FmWgN8yBC865sG2bM8Y455wxxpjv+2xpaamRvA2JG/I2OPG4+a+A/HYGnPwRKKlNwFKC0uosCrPjNXf5Qdt2tltnvW/EPPDyr5iOYjqmHM8p8OiajeEkvy1f/+LiIizLOvaXSaFQOPJmKimH4wvn0kjZtKHndxdO8h5K3T0Rd5uuYS23N5F6qxK6BgINlfaQmquAhA9yQUDYS69ZU796V6QZA0NDq1DstgmNVHdjO1ERLSHb2tpiQgiWTCaZbdt0X/ncwJC3wYmHtJ4CIZ+O/qkSHiobC6Cctil3929IOyoneacYVd8Hzo5L3D99+6Ikp6amUCqVjv0lMj8/f1vMdafHHXxmJdE6da3Dmu1uVHNPTvLY0npMHMy+p8aWxB1tJwSJiSJkNlHXxh9ep+lnX7RmqjvEivp+hz97yuYI131HyltrzQHwRCLBAbBEIkEB0FwuR07CtWZgyNugGzjfnYOgf4LaIABCCEZOzSFRLqDdpN1gnOT9RJt2NqR1Q9w6AHIuwRdPO0hYt69sXSgUTkTS2tra2m1Zk84ZwZfvzWC6KFGPPe+nRN6CuLtW261e0W2PFP+QEN08ulmly6SD9EKloesYxc/fVOM/+7ksoZa6JgipmdgYY/X5b865pJTWs88dxxFKKa615p7ncc45y2QytFgsUkqpmf825G1w8vF9CUF+H4QsAhoIAnjFLEY2F0Cb5mEP0rZzf9hKHJnve0CIGWW7Xf61t1y59zNQWlsatjoib+sZkFJiY2PjWF8lSimsra2B89sztTCalXhyMwmLk47EPbA8ciC+3N22DI4OJfT47QCQGC/CKeeAIACgUfWp9fxFe/bD69TBbmxq3XUeqvC685wQIn3fj1qHcs4539nZYZ7nMd/36fDwMAVASc3gYQjckLfBiUQy2AShT4MQCgBUCoyeW4GbTe9j6P4MafFEe8hOct35M5RTFA8vWeDs9o9fGxsbx9q0lkwmj3y+e8+ARQk+uZTEQkk2E227ddtdGtIG4iTvWEIPH35b3kS7/y1USaSXxmtdx8LNl94XhQuvqXLYbYxHc9wNDUuazGuotQ0VnHMmpWQ3btxgruvSa9eu0aWlJRIXb2xgyNvguIP9mQNKvwFGxqOBIz87htLKzB46jDOk9U/c8XPbB4k2bbeme/9noAT49KLCVIEfi1OxsLCAfD5/bC+V4eFhjI6O3tbPUM5IPHU6A8maH9LaLxs7Iid5/DvW1XZL0tb7SutawyllkZgp10fqapWoFy5asx9cYx4ltdJ5w7pv1dD3W0VGtmjumxAiHMfhjuMwx3FYsVhkjDESdh0zytuQt8GJQXat9qed/iwIeTK6gYVnYfTMEriSu+qi3brtDm07dddhK/sGvQEs/2pH6H4AzA4xPLzsgNHjcSuUSqXbqmw7YXR09FDagPaKjy95OD/twvd1PAH3k0fea7RpS1KPcZLr+O1xxScCIDlVgvDs+ob3r/LCj35qTxGqOWpz33X13VBCr+eeE0Ik57xO4pZl8Z2dHSalpLZt0/HxcZrL5Uzp3JC3wYnB+z8B5F8Og9M/BSGpaHNxYQrpsRK6ziRHNwTcbvu+Qa9duTtObcccqx2h25Lg85suhlP82JwSx3GwvLx8LC8XQggWFhbguu5t/yxJm+Mr92VQSPBm93lH1dyG7IEOpN3eSd6tIW2/YaSdSpfZBBKze7uOXXhNzrzyhhgCtCCEiCAIZBAEUdk8KpmrMG0tmv8Wvu8LrTW3bZtns1lm2za7efOmMa4Z8jY4WfgTBkv9Hgg5BwIg0LAyCYyeWwZXoq9o036Ju+9o0xakrrtpQKKB+yYlHriNS8NaQQiBtbU1CCGO3dXCOcfm5uaxmZM/O+ng4ZUE9qTYtlPHg3aSa3QoobffHqe298+JE0qQnB6GyiVQs9lrbN1izo8vuDO3tqkFQES551Gb0IbM88jAFjUt4UopTgjhQRDwRCJBh4eH6czMDKk9nxFD4Ia8DY493NwcGP0tUFKTngQYPb2ExHAOOohp9dkh2rR1285WDvMWRNulam6nxLtR6FoDOYfgkTUHjjpe5rBI3R7HDmPpdBpra2vH5vMwSvHYRhqVrOi8/vpAeeS6oyGtVyd5rELfX1oPg1uEayOzOA4STfQTQn55SVRefVMNIez1jdB93rjemzEWlcyj+W8JQCqleBAEzHEcls1maTqdpouLi0RrbRS4IW+D443vSDDyVRAyHw0SmakKRjYWWt67gzWkoQ+F3t3cdtt9Gn7pvhmFlbI4lmdmcgOKrxMAACAASURBVHLyWIa1zM3NYXx8/Fh9poWSwufWUh1U8xEb0rqY2+5Koe/7HWesAKcyVL89t3eoev6imrmxRW1KiYhIPPxRWmsVBIEFQFWrVQVAVqtVCYAHQcBd1+U3btxgUkp27do1RmorTYx5zZC3wbHESOhkTpJ7wchvRV3DuK0wemYJ0rX3lfV0TL/tXoNTYtT2AJzk3ZfWNQKtUUxQPLHuwJbH8/LP5XK33dHdCqdOnTqyTmLdgjOK39hMY7YoUQ36aUByew1pbRX6vv0Ip0jNj4A59TwC8tY7svzTl61RSsAJ2Q1uCQ1skfpWQghJCJFKKcE5F1JK7vs+9zyP+77PC4UCK5fLdGxszBC3IW+DY4lfvguo/5wC5X8GSorRQJGdqiA3VWnWxgNZf71v0Ouz3H2w0roOL3iNR9ZszA7JY3uKPM/D0tLSseswdv78+eP5PJqV+PK9GShO9jzEHUa0adeGtAZFHae2dU9kr0E0YOVTcMd2o2l1QPhPLlpzb7/HUyR0nu9vXoKGNqLR0jHOuVRKcSkltyyLCSFoEAQ0nU5Tz/OMAjfkbXAsYbufB6GfigYL4dkYPbMM4Vi7g54etJN8EOXufcfS6LK0XvtLoIHVisQT6y6Osy2HMYaNjQ1Qenxuz2w2e6zmu/fjs+tpPDjvHSCkpbto01bk3K/aRi9kHw3YnCI1VwFPhBUyAly9zjLPvmhN71SJQhibir3Z5/U58IjQCSGiWq3KsMUor1arzPd9SggxiWuGvA2OJdy/mgBh3wBBvX1VaW0O2ckytA46LP/qpdy9V1UfipN8z2+2Kq3v3e5IgsfWHKSd43/Zr6ysHIv11BFmZ2ePZSk/giMpnjydQdqhxyLatB2p90b24Wt699qWaQ+p+VHs2uwJee2XauzNt0UW0AI18o7mwOvBLVHzkvBHCCGE1lpIKRkAXiqVeLFYpKurqzSTyZjlY4a8DY4FPAD4DgHnXwIh6yAE0BqJUh5j55ZBomjQA5e7G2m21bz3oJ3kaCb7GIf5qYrAuQl5IsajiYkJTE9PH5vPc+rUKXied4y/MYIzky4eXPA6R5geRrRpF2q7+ZKPL5FHpK1jZq68ySLs4Wz9hRtbNPHcS9Z01aeSNvT6jsroDaRdL6sLIaLYVO55Hrt58yYTQjDGGC2Xy6Z0bsjb4FjgQwAO1kHo10GgAIBJgcqZZdjpJLSvu1TNQDdO8tYYvJO8dfORve+qNZC0CJ7adJFx+Yk4Xel0Gpubm8fis0gpsbm5eSzXnu8hNIvhi+eyGErwWi+Po4w27UJt66722V3VEes+1xpMCSRmR0Alr6vv13+lxi6+Locp1UxrLRrmvqMuYwq7LUMlpVT4vh+tEeeEELa9vc1s22b5fN4QtyFvg+OBP1MQ4o9AMRUNDslKEYX58ViSbddI5Lg4yaHj1Xb0jyDQeHBGYXNUnagzds899xwL01oqlcLi4iJOQn7H+piDx06lAATH20keR9y6DXE3piYRAruUhVXK1F+u7lD1oxedhavXmUtr2Q1R69B632/UYlMVwuAWzrmglApCCPc8j3uex6WUzPd9urm5SQqFgimdG/I2uL2yJPMoKH2qVi4HuC0xenYJynO6Vse9OcnjAlo02jvJNXoqraO12q4Tt9aYyDE8fcaF4CdrDFpbWzsW894jIyPHbn13HAgh+NI9WaxW7CiM7FCjTbtJSOu837557Vb7NHyO6B2Y5EgtVMBsWdtINd65zAvPvmhPaU3qJXM0uM1D9S0bY1MppQKA9H2f27bNqtUqS6VStFqt0mQyacrnhrwNbhvsH+TByDdAUEuzCHzkZ8dQmB07gGreS5fxJfR4xLnTuy+tx6vt6HXJgc+u2JjKixN32kZHRzE7O3vbP8fExMSxMs91fNjIKDx1NgtHkOYH0pZqu/9oU8SobfSqtvs5FjSsoTSciSKgg2gXfvHnauqd91lSa73HeR6ReRTgorWWvu/LcC24kFIKQghXSjHbtlmlUqGlUikibqPADXkbHBlcoGZSqz4JRu8HIQRaw8qlMX7vOpiU6NeQduhO8o6l9fakHW2dznN8fMHGSYxs9jzvti/PIoTg1KlTx6IZSS/46EICq6N2G7UN3F4n+W59vOfSerSfBkAoUnMjELlEtAHXbrLkcxetSQ1SD23BbsMSFZbNFWNMSSnr5K2U4owx7jgO297eZgD49vY23djYIJ7nGeI25G1wZLgOQAYTYPSbIHAAgDCGyuYCEsUsdODHqObuok27C06JId/9pN11aV2jfbeo3dc4Ax5fd1FKixN5+qSU2NjYgJS3L1BGCIGNjY0T9/BTTEn85j1Z2IL0EMbSh5O859L6XvLtq7TeuJ8OwD0LydkREM7CtyDs5dfV1JtvqxyjWoSqO/ozCmupLx3jnEvGmPR9XzLGOGNMOI7DbdumQ0NDVClFh4eHqVHfhrwNjhKO+kNQWrcte8UMSmuzIJQcUbQp2jwg6I7z2rpZcndU2xpANQBOj0l8dM460aPN8vIyUqnUbTt+uVzGysrKifzuHlxI4aGFBKpVfWiGNPSsmtHekBZ3F+iYNeBhdcQdzUPld6Nrt24y7388by1ubVNLa80j0o4UeEMjk7p5zbIsIaUUQRBwx3F4tVrlly9f5pVKhRJCSKlUMsRtyNvgSOD9t4cA8kzEXoQzjGwsQiXdwUebdiDhgzYSiT9EizXdQa1r2BdOe0jY7ESfwvHxcZTL5dt2/KWlpdt6/AM9t0qK374/j0pWINCHM7c9ECd5W5Xeap99R9YAtRS82TKIYPWR/a1LsvTCy1aFUsJbzH8rrbVqXErm+770fV8opfjNmze5lJK5rsuuXLnCPM+jvu8b9W3I2+DQIb6bBqN/CEpr7al8H7mpEQyvTAOEtlbNscTdBQHHuMV1jELX3cxrx6ntdqSuAUo1PrVoY2NMnfjTmM1mMTExcduOf/78eViWdWK/v9UxF49vpMEZOb5OcnRbWt8T3N70ulvJw67kw57fgB8Q+cLL1vTlKzQREXfUdaxhrbeKnOcApBBCUkqllJJLKbnjONTzPGbbNi0WixSAiU815G1wqLDpJ0DpJ0AQ5pe7GLtntZZfXlcHrZoztCDhftZfxyj77hV6G7Wt47uGARpFj+LTyzYEO/nji+u6OHXq1G05tlIK586dO9HfH6cEn9vIoJLhB1DN6Kq0Hqu2MYjSum4l4ve8TjlDcm4EzFP1Fy9fZfmf/dyqaE1E2HVMMsb2lMyjvzPGBKVURH9Ga78ZY8zzPDY6Oko2NzdNz29D3gaHN+r+b0Ng+pugJAMAhFIMr80gPTYM3bD4tZ2T/ECdvA6TuDt1DSPAZ1acY901rBcQQrCysgLOjz4ZrlwuY3Fx8cR/hzNDFp4+mwOnpLVq7oa4uyDggTjJdXfEjVbHCjRUNgFvulzPPfd9Kn72ij3z7mWeJAQcYc/vUIUrSqmKSFxrrXzfV6FK51HTkp2dHSalZFeuXGFaa6qUMsRtyNtgoIiW4irnd0Hox+siPJtE+dQCKGXo2pB2EALuMqRlb3W8xfY9v647kr0fAFN5js+tOuDszhlfVldXMTw8fOTHXVpaQj6fP/HfH6MEj21ksFS2UPV1rHJuVdbWR+0kR3yZvGUJvWG7Rk0POxNDEKkwfIkAV66x7A9fsGarvpaEoD7v3ZhzzhirZ58TQiTnXIaNS3g+n2dSSuq6LrNtm46NjTU2LjEw5G1wYLwPwPn+Ghj/BgihoXTD8PocvEIard3dMeR84GjTQRnSml9v1TUsACA48PTpk7s0LA6jo6NYWlo6csW/ubl5oue7G1FMS/zOR/JwJQ0vnUG37ezHSb53h7j3a6m22yh04Vlwp0uo970lBD9/U068/LpdBHRjZKoMI1P3KHBKqVRKCcaY4JwLAJxSyh3HYa7r0mKx2Fg6NwRuyNvgwJDfdSD0N0H0ZI3RAqRGhlBenQVhtH8neTdhKzga4m71gKDDEeT+KQsPzdt33Gl1HAdnz5490mNGc+2MsTvme3xoMYVPLKdADislrWcneWe13TPZAyAgcMeGYA2lEGXEbleZ9ZOX1Mz1m8wOy+F7Alwi53lkXguT1wQAHgSBsCyL7+zssIjAZ2ZmaO0Zz3C3IW+Dg8Mi94PSJ6MkNaYkxu5dhZX2anPdvRrSuibgveq9u5CWduu2uy+tR0jZBE+ccuApdkee2vPnzx/pvPfQ0BDm5ubuqO/QVQxfuieHfIJ37ySPzRaPiPQQneTov7TObAFvoQKiRH05+NvvidLF11UpVN+RUW1PcEvUvCRqI8o5j7LPuVKK3bp1iwVBQK9du0bX1taI1poaBjfkbXAgfMsDJb8PSopRqWxoaRLZ6UpoUuteHXettvsOaenBkNZRoddGrPunFdZGrTv27C4tLR3pvHelUrkt8+yHjfUxt6a+W1xDfUWUYvBOcvSj0PW+O1RrWEMpOGP5emG7ukPVT19WM9dvMJcQ8IZmJRFxy6h8Hi0lE0IIQohQSnHP83gmk2Gcc57L5Wi1WqWrq6tRCd3AkLdBT4jGV2/4aRA8hvBWVUkX5Y1F8KYezAd0kvdYWt/Lvf2t225H3IEGigmKJ9Zd2OLOHUOKxeKRKuHFxUUkk8k7rzglKb5wLoeRjIQf6CNKSQN6cZJ3F9LSiuz3bieMwpsugbnhQy0BLr0niv/2oj2JsGwedRRrIG7JOZeccxUEgQIgor7fADjnnFuWxZLJJCuXy/S9994zHGLI26AvvA3A++44OP9fQEhdehYWJpEo5faR8wF6bXdS6S22N5e7Yw6hey2t7w66BMBnV10sj6g7+jTbto2NjY2jU6jr67c1U/0wsTLq4ulzWTDSY7lb3z4neTu1rWNVOIFIu7DHCg0flNCXXrVm3rokspTuqu/oR2utgiCol83DOXDBGBOEEKG15gCY7/usWq3SYrFILMsybUMNeRv0jr/goOR/AsVarVe3hp1NorK5CCYEBmZI6zWkRaOvaNP2rT73BmIEGlgucTy+7t7x4wZjDKdOnYJtH74hL5VK3bZgmKPC58/lcGrcqcemNqrmfnptt6439VLu7leht1fuhBJ408PgKaf2OQlwfYsm/v1Fe2Zrm9gARPhTn/dmjClKqWosoXPOBedcEEKE67pcCMESiQTb2dmh09PTjcRtCNyQt0FXSLinweh/AiEMupZfPnbPKrxiZrfHb4+qGejFkNZivwPNbXcPRxI8seFhKMHvilN9VOuup6enj0Uf8cPEUELimXsLSFhsD3H3i4PPbe/dobuQlk7hLTWIhI3E/AhQXzlAyBtvydHX3pQFQghvjE7FbvKaiqJUsTsvLqSUPOz5zQHwfD7PPM8z674NeRt0jRwA/GcKht8FIWPRDZudHEFxaWo3XOIoe213VM7oGG3aHNKiW0ZQBhpYHRG4d9q6a4aMkZERVCqVQz/O6dOn74hwlrYgwEfmkzg94dYNnU1XptZ7A1BaVIBuh5O8q5J747ECDbuSh1VK11+7tU3t5y9aU9s7xCKh8m5Y+y0BSMZY/aehK5lgjHHLsli1WqWu61IhBC2Xy6Z0bsjboCu8ByBhPwJCvgRSO4/CtVE5swRuK2itD9GQ1m6/Tm074/dBq0Fy3xGjrmGeIvj8poesy++aU55KpTAzM3Pox7nnnnvujuffhMBX7isgYdOwl8fBE9J6N6T14SRv2t7pWBpUMHgzJVBLRg8v5M1LsvL8y9YoZbUQlojAoz7fCNuHhtsk55wzxoTWmiuleDqd5h9++CF3HIfm83k6MTFh1Lchb4OOsP5qCEz8MQgy9cFoZhTp8eFWLDjgtp2d1XbzIXotrceUMTXga42HZm2cm7LvrlNuWVhfXz/UY2QymSM1xt1u3D+fxKdW0zXn+QDQWyY5+naSd3+s3b/JfBJWqT5cIPCJ+MlFe+7dyzzZkLwmGtqERuSttNZKay0ZY0IIIQkhnFLKC4UCs22bZzIZ6jgOTafThsANeRvE488pFH8GlNwfmdRU0sXI6QUwKQcQbdpraT1m/lq3O1Z3prT9rvVAa4xmGL541oNkd98Ysba2dqiRpVNTUxgbG7trvk/JKX7nI0OYyCsEgW5W3LEhLXGldY2jcJL3U1onjMGZLoE6qm5eu3KNZZ/9mTXl+6SxNF7PPI/We4dhLfXsc9/3BeecR67z7e1tWigUaCaTaSyfGxI35G2wB447D0K+BkLq66PKmwtIVYab5o57Xf7VW2m9zdz2AZ3kiHlAkAx4bM3FZEHclad+YWEB4+Pjh/b+q6urSCQSd9V3Ojfs4OlzWUhOm0kbfcxr7yPaJkk8ICd5b6X12j9ULgF3uljPPdea0FdeV5O//LXIhsY1EQRBnaRDxR0FuESOdMEYk5xz4XkeTyaT3HEcVq1WaSqVMpnnhrwNWuO/Mwj5FVCyEI0gydEiSuuz4d1yMCc5uiHuuPcD+k9J24e4Y03kBT657IDfpYmMpVIJq6urh6NCpcSZM2fu2PXdceAUeOx0DtNDKvZ67AltnOSt+nDvJ+j225tfAzqV1vfu7YwXIXKJ+ubrW9R7/mVr0vchAC0i9zl2TWz10nmoxgXnPFrzzRljbHt7m9m2zZLJJN3Y2CCe5xnyNuRtAACwPhbeeTfPg5LfQa25AGFKYOT0EpTnQuvg8Jzk3ajtVoa1LsNW9rxNzLEYBR5dc1FK8bv2uZ5zfmiGslQqdWgPBscahKCSVXj6XB57xDe6CWlpXbaOc5Kjw349O8nRrrTeIrw10GC2hDtTAhH1pWP052/KyZffkMOc6aalY43l88ZyupRSABC+73PXdblt25RzTh3HocVi0bjPDXkbAAC2/hnAdxKQ7M9BSH29UGZiBPmZCkAGH23a/fKv5tf7dZLHHasaaJwaVXh42QG9y/sgnDlzBo7jDPx9R0ZGMDExcXcOhITgiTM5nJ5wsePrASWkHY2TvOP2FsdSw2nIoVT95e0dav37T535Kx8Kl1ISRadGqrveOhRhB7JImTPGhGVZXGvNGWNcKcW3traYEILkcjlD3Ia8DQAASf4oCP0USI38mBIonZoDt1Urdmwm7n2vHVXbzm6Iu92xtAYyNsUz5xJI2uyuvwzm5uYOZd57YmICmUzmrv1eM67AVz86jIzLwkv04A70Tj26B+Ukj93e9J61/2eSw5kcAhEhBRDod95nxZ/+h6roQAut6z9Sa11fOsY5l4wxSSmVQRCIcOmYsCyLM8a4bdtsaGiIZrNZqpQiqLUNNSRuyPsuhvN/joPSPwKFG20qnZpHbmb0EJ3kvantfp3knUrrBBofX7CxOabMdQAgnU5jYWFh4O+7vr4O13Xv6u/23rkkHl7LgOwzpTU5yXWM4u6itA60V9v9h7TEm+ZaldDVcAb2RDG6J0mgKf/pf1hzly6LdGOpPDKvcc7rSjz6d2hck5RSkUgkuJSSSSkZ55yeP3+ebmxs0LDrmCFwQ953Kbj/FAg5VauPaziFDMob8yCUtCfghju5dyd5nNo+HCd5nEIvpxkeX/eghLlcgdp6742NDVA6uO+Dc4719fWBvudJhC0ZfvPeAsoZOfCEtMN2ku+/weJK6NHtSCiBM1kES9jhvUZw9UOWeuFlORYEQbTmOzKv1Q1rEYGH6WsCgNBa88jAJoRglmWxDz74IOr1bYjbkPfdNkqnw0fk782D4eugxAY0oYKjdGoObi7dJm60kbT7Wevdjrj3vTYAJ3m7rmEfnXcwPSTN9RCCEIL19XV4njew9yyXy1heXjZfLoClERefXsvsWb3RrJr3sSR6maOOmyuP268HQ1obJb57W+2WDUTShj1VrLlBoUkQEH7xdWvqrXdkhiAQQRA0us5lEAQqbF4iw5ahijEmOOeCUsoty2JCCGbbNguCgG1tbdHFxUVD4Ia87zJsfQDgf5Ww6R+DkHqdNDFSwNDiFNob0nbVNrpR22innHGgtp17Co77cszbkb0fAFMFgSdOeZDc3PuNmJ2dxdDQ0MDeb3Fx8a4KZ2kHJSieuW8IU0NqN3ntSKJN40rhndV083s2q23E7GeP5CAy4YMgAW7coMkfPu/Ob1epopRwNCwba3Sco7bmWwohoiAXobUWUtaSVBOJBJ2YmKD5fJ56nmec54a87zIkE58ExTPRZU85Q/nUPKykEyeIcThO8njV3Eltt1Po7checuDzpz2MZoW5DvahUChgdHR0YO939uzZQ01uO2mYKdr4yv1DEIwMPCGtG5Xe9famioCOIe640roGcyTsySEgmoIjBG/8So5eeFWVSRiZGpnXQgJXhBDFOY/S1iRjTISldk4I4dVqlXPO2fXr19nW1hblnEeFNEPghrzvBgnw/TwI/SYIrdXPgwD5uXHk58YaEpJwiIa0wyXudvtoDZyfsPDxBcdcB62e6ZLJgZnWOOc4e/as+VL34bHNHO6ZSTar1gOGpnS/3AwHMqTVnofjSut6ty5HAKuchSxl6veiHxD5/EV7+oNr1ENI4GhoFwpABUFQnwenlErGmAjL6cJxHC6lZJ7nsUwmQ0dGRihqznMYAjfkfefC/ovan7L6OCh5qHZvaqh0ApVzS+BK1m6+fgxpHYk0hvD7aNvZa2kdDe+Xtgme2vTM0rAYSCkHFqgyPDyMpaUl86XuQ86T+PJ9Q0jaFEcbbaoHYkhrudRN75lMq2+jksGdGQa1Zf2efOcyH/rZq/YIIbrecQz7WoZGkalBEEQOdKGUEpxzHs6BU0opzWazdG5ujmqtTfnckPcdjJt/DdjfKYPxr4GSJKAJYRTF1WkkSvnYdp/oRNwHdpJ3Vs0HUei6Yfu9UxbWx0wZtx1WV1eRTCYP/D7T09MDnT+/Y0CAB+ZTuH8+dWi9tjup9HgCbnlXtS2RtyTu6OUAEBkPViUXls818X0iX3xVTb9/hScAvd+8FoW11Mvn4Xy48H1fMMbqy8YIIcz3fco5N2VzQ953OpYphPgGKL032uIOZVFamwOhdN99Pqho0167humBEnf0foEGci7FExseXGUuz06kO4h57+Xl5bt+fXcckg7HM/cWkHYYAh2vtttvjydn3e1ysnYPCe3UdgNptyLuxtI6oQTW5FBt6Vj48PLBFZ774Qv2DEAFY4yjtiws6j6mtNaqwXUuRQ2cECIYY5xSyiml3LZtns/n6czMDBFCGBI35H2HwnvmHBj9av3yJsDw6gysdGIPq+omOdDZkBavtveTczuyb62a+yut791GADyx4eGUUd0dMTw8fODSuZQSy8vLYMxMT8Th/vk0njpXQBAEOLpo07gOZb0Z0vbV5WL22wV3LVhj+cbqA335dTX16i/kECWahwq7nn0erfduLJ9HJB4lsLmuy1zXpUEQMM/zqJTStAw15H0Hwv6LBDj5Q1BaBgAEAdLjZRRXZmqq+4DRpl05yXs0l7V9CGixzx613YBAA3NFjkfWPHNfdwFCCM6cOXOw50TPw+zsrPky24BRgmfuG8J8yUYQ6EPptd1LtGknAm40pMWr7db7EUJgjebBs179/ry1TZ0fvaRmr29RR2stooS1qFSOBhMbpVRWq1UJoN55jFLKq9UqSyQSbGRkhK6urjYSt7nRDXmfdNL+bjhSuJ8AIQ9Hdxl3bYzduwrhWrWJKXSxNvs2Rpv2S9wagC0JntxMoJw2S8O6xcbGxoGWeOXzebO+uwtMFW188Z4hWIIeYh75gJzkbZR2S5W+r7TObAFnbk/XMbx9SQ6//LocJrVuhryxv3dDq1CltVZCiLq5TQjBlVLMtm1uWRYLgoBdvXqVZDIZo7wNed8huPmXgPxuAgzfAiF5QBMQgsLiBNJjw9BB0DkJrUdDWusHgS7VtkbP67Zblckb91mrSDw0Z5aG9YKZmRmUy+W+9y+VSsjlcuaL7DRQEoLHTuexOubiOESb9mxIaxPS0qTQNSCHkrWlY7UNZHuHWs+/bM3cvEVsgt2QFoRBLY1/b1gPHi0xE5ZlMaUUJYTQRCLByuUynZycNM5zQ953CCzyFTD6UHQ5W9kkSutzIIzGMXEPBBxDtP1mkvdK9u22oxbI8vi6i6zHzXXQA7LZLKampvref3JycqAxq3cyyhmFp86GPb8Po9f2AVLSAHQ0pPWi0gmlsCcKtaVjNfFNLr0riz++4IwDNUJuWPstCSEqVN5WVFIP130LxhgPgoATQngUnTo6OkoaGpYYAjfkfYLh/vUiKP1T1J5oAUIwtDQFr5gdvJO8z/XX/ZfW49U2tEYQBPjEvI0H54zjuVfYto2VlZUDKXeTrNY9HjtdwIML6d3Y1P1kesBe2/tsni3Udny5uyuFHn0WHTcfrkOyB3jahSpnGt+TP39RLbz9nkgxRlhUOo+ImxCiwmYlUeMSJaWUjDEppRRBEAgA3HVdprXmlUqFplIpQ9yGvE8wyHcscP11UEwDGgg0vOEsSmuzoJShMbyhU0b4YUSb9qXQW7jLWx0r0EApxfHFs0lIbi7HXsEYw9LSEqSUfe07MzNjvsQekLQ5vvbxMvIJgUB335ozbs67+3nt7ki7o0JvW1rfu51wBmuiAOqpsA0Z8OENlvzRi/b09ja1Itc5GoJbovahUVnd9/26CpdS8oa5b/rBBx/QfD5PQx4yJXRD3icQCXEOjDwd9fekkqNydgV2JtF0Q8UhPiUtnrg1DtFJ3vEz1v4lGPC5VRfzw6ZXd7+YmppCIpHonYiSSUxOTpovsEecm0nikc0cGOlMzm2jTdHJRd7ufu+0/Kt7sm9F3HWpnQi7jtVbxRK89ksx/ou3RS7MOxeRAo+IG7U131FsqmCM1RuWWJbFhRDMdV2WSqVoIpEwZXND3idVdX/fBsE3AVIBNIHWyM6OIj87usdNOkgneUvV3IWTvLvSuo5X7y32m8oLfHbVA6Xm/u0Xo6OjKBQKPe9XLBZRqVTMF9gjBKt1HZsoWIdsSOuQSR673/5jtSft1sS9ajHt4AAAIABJREFUeyw1koXI1zMmyM1t5v74gjW7vQ1FKeH7FLhC2O87VOLK931pWZaI+n0D4FJKlkqlWDqdZmtra9R1XaO8DXmflPpbpLr1E2D00eiylQkX5VPzYJIDWnc5R40uok1196q5j7Xe+5d/dRPQQinwyJqHiukadiBks1kMDw/3RfrGad4f5ssuHtvMI+jFkIYeem3vV81a96a2G4i7V9Les5+uVQKtyQKIqgf5kDffliMXfm6NUKKbSueEEBkEgWKMSa215JzLIAgkpVT6vi+UUpxSyoQQjDFGHcehqVTKBLcY8j4huArA++4YKP0TAPWaZ35hDMmRQh9v2EMDknbquO/Suu7p01YDjbWKwqdXXFBi7teDIJFIYHp6uuf95ubmoJSZruhXfT99fghLZadmXusmjzxmLrqTi7ztXd8hpKVr0gbautZFPgExlNq9f32inn3Rnq/lngf12NSG8BaltVaNc+CMMek4DieEcMdxOAAmpWQ7Ozt0dnaWpNNpMxAY8j4J+FMOSv4TKDkNQhB1DSutz4FJMYBM8t6iTePUO9oo526c5K2OF2iNtEXxW/ckkXXN0rCDQinVV0ra/Py8+fIOgIkhG1/9WBm2oAh0Zyd5P722u8kk70Vtx5J2WwOcBhEc1ngBRPHa7xPg/au88NxL9ngQEAlANMamhio8al4SKXKhtRaUUrG9vS08z+NKKZZKpVgymSSO45ilY4a8TwC8zCoY/TIIoQBAGEPlzCLcoWzDvHGrjHB0vfwL6NWQ1pnsEUPa7Y61578k3P7QvI0zE7a5DgaEmZkZCNH99IOU0pD3APDwqRweWEg3l8kH1Wu7aZ8W+2n07CRv9ZDQVqVrDZ51YY0XGqiVkIuvy8lfvSPSABrXfNfNaw1LyeqmNt/3hRCCB0HAGWPM8zyqtaapVIpubGwY57kh7+OM71BQ8lUQ1EbPQCM5WkRxdbrrclk36ESmgzKkdXpI2I9yiuHp00lYwlx+g8Lk5GRP7UFTqdRAOpLd7UjZHL/z4DByCd50M/SUR95BNXd3v/dQJu84j95iOyFQ43mwlF2/x69dZ6nnX7YmoyS1UHXX24UizDuPSudaa2nbtgiCQEgpuRCCSymZ4zisWCxSQohR3oa8jyGimW1PfAyMfrGmujXhjoXy6QVwSx1JJvkgDGlNr8UcS++OFHUl8rEFB9NFaa6HAaJcLvfkOB8aGkI+nzdf3AFBCMG5mRQ+sZyp31KHEW3ae0hLl4a0bsk+ZFRqC6jxAsAZaqtjCHvlF3Ly1V+IAmPghBAR/tTd5iGB10volFJh27YghHDbtjmllBNCmOd5bHt7my4vL8MQuCHv44VrANi3/3/23jTIkes6F/zOvTc3bIUCUPveO7vZ3exu7mtzaVGiZGsjn7VS8ibJi0x7zPF7ek+2JEpv9CSPZE+E40UoPBET43myPYvGYz9PaGzL8mhsmpJsiRJJifsisZu9V9eCPTPvmR9AolHVtQAooAqozi+iuqozE8gL5PLld+53zklB0aMgGgiuzP4do0hOjtSIb/V5bW65/SbQ/tKma6t0xvIakr4GZtIKP3skASssyNJWpNNpTE1NNbz9yMgIHCectmgHYrbC+24dRiam4HN7KqRdft3KRVpW6xrWqiFtVbW97EMQA+ZQH4xUtMbopZKM/Mszkb25vHCAivu8XmkHyrtafS1YbgAwfN9XzKyKxaL0PE9YliVyuZyIRCJh6Dwk727CnxNizvshxAlQ5YIwYg5Gj10Ds1pDeJXy5RvGuk7yNhnSVhs2o1K//KEbEpjJhKq73TAMA1XF0hDGx8dDp3kbcePuPnzwjpEr2KaVeuSXX9fG+bNG57ZXH0wN0jFgzQwAQc8FAt44Z0489YI9SVTL+Q5+W1rroO65pZSqhdEtyzJN0zRs264p8JmZGZlKpcSBAwdC81pI3l2E6As7IcQHApMaCBg6uAuJkQw0c+N52xusSd5Y85HGDWlLh31lY+PAYX5sysabDoRNMDqFQ4cONbQdEWF8fLwpg1uIdb9V/JtbhnHtRLRW97wRJ/kqAherhtabTQHbKGmv8p5mOgFzJFkfLaTnX7V3zM7JOBGp+pxvIYQlhLCqiruWQiaEqM19O46jIpGIzGazcmBgQCqlaGhoKOz5HZL3VsfVAOD/EpDygyA6ElRSi41kMHpk7+WuYcDa89rcXEOQ1eqfr0fAzRrSls5tL+XuwGHeHxF497E4Eo4Mz4cOYdeuXQ2Fwg3DCCurdQCTGRsfuGMEMUu27CRvPrTe+tz22mp97fVkCNg7hyBidrCtmJ2X6adftCe5ruNYQOLV8LkVpJEtq4VuMLMyDEOapikdxxGLi4tix44dAoCgsA5ESN5bhiyAyFOHIelhEAwAEKaBkev2wEpEqw5utK2RyAov7khp05UMaVfstfqfm6bD1LBOY3R0FKlUat3tbNveUA/wEKvj/kNpHJmOraqA1+bJ5kubrryiA2p7hX2ouA1rIlULn2tN6vmfmDvPXDSSUkDVkzOqrnMppaWUMpVStYYlWmvD933Dtm1lWZYslUoymUzKc+fOiYMHDwatQ0OE5L0V+D0HhvgtEKaDJX0TQ0jtmkClQMsKansFFb4R4l5XNTdtSFvyeI8VHzEqDdKQigi881gcMTtU3Z1EX18fhoaG1t0uEomETvMOYShp4X23j8A2xZKgVztLm4LXJ+6m1XajpF2vvgmwRpKQ8epDOQHZrEp+/xl7l+uRJapFWVBX9zwo3lL9qfX8Nk1Taa1VJBJRjuNI27blzMyMmJ+fF4ZhhHPfIXlvERLWOyDkOwKilqaBkSN7YUYjq6vtFULka9UJb7VH93JCX68c6lLixgrEfSWhv/W6GK6bDFV3p+E4TkPh8Hg8jv7+/vAL65T6PpzBmw6moHWLFdLWmdfmds2Hr3GNryu7q/uRUQvWVAoIGgsR8MpJc+a5V80REKsqaddahKIulA6gVvNcCGG6rmtqrZVlWdKyLJFMJkUikRCmaYZ1z0Py3gJE/7thEH4ZgiqxNNbI7J9BcmZ09dKmzbbfbLlH9wo54OuQ/WqGtJWWawb2Dpl419EEZNg1rOOwLKuhwit9fX0ttRAN0RgilsRH7pvAaL8JzWup7Tao5jakf7VC2vXy2xrph0rHEHxY15PW08/bu/IF5aAy/10jayKq5XxLKS0hhGUYhimlNGzbVkopQ2utPM9TuVxODg0NiYMHD9Y7z8MbSUjenVbbAPBRguIHIemmYF7YySQxdnQvVKXIwTK1vTnE3ayTfCVD2lrLa0rQILz9SAxj/WFq2KZczEJgbGwMQqx9WafTaUSj0fAL6yAOT8fxrpsGUV/OoPUiLc0Td2fU9sqLhang7BgE2UbtpnRuzhj68SvmGABFRArV1LHAcS6lrHed1ytzFYlEVCqVko7jyL6+PuG6rrjrrrtC0g7Je5OwACA2uQuEj4IoAoBISQwf2o1IJlkNcbWef91skZZWDGlXPBLw+svr1x8ct3B8X0gSm4mRkREotXazl4GBgTDHu8OQRHjo5mHsHol0xEneUpGWltT26lGC2mIGjHQM5lh/oIvJc4X5oxed3fNZGQOzERRtqau8VlPjvu+bAEyllGFZluF5ngFASSlluVyWkUhEnDp1SkxPT4eFW0Ly3rRv9yMQ4trgv9HBfqT3ToKI1u/ktZpqRqsKfSPpX7yK2uZVRATDkMDbr4tjMBHmEm8mBgcH100XC8l7c7B7JIoHbxqqTgc3W6Rl89O/1mbotbmchIA1noKIVqNsBMzOq8yTP3ZmiCrqO0gRq6u8FoTQa85zz/MMwzCUZVmKmZWUUjqOIwcGBqRt22JkZCQMnYfk3WFEP3s/lPjF4DQTSmL06F7YyfiKTvLGCqe0h7g35iTnFdV2/SfRmnHX3gju2huq7s3GwMAAYrHYugS/Xmg9RBvUtyC868ZBHJ6K1Qq3XA5WtZC3jS2c215jcbBSxW2Y46katTJDPPuqvevVk8YgoI1qPnfNbR6ocCll/d+GlNJgZhWNRmsEbhiG8H2flFIhcYfk3UHYn09AyY8AnAQA+BrJmVGkdk9WHhpXc4SvRrQtNB9ZKUzeUK73qoY0YCWH+fJHCa2BoYTCB29JwjbD02uzkUwm1+0u1kwDkxAbw2jKwcdOjCNuK7BurUJay3nb7QqRr7p4aQEoEgR7rB8y4VTMawQUiyL6w+ftXaWysFHX8xuX659by8Ppwd++76t4PC4dx5GJREJMT0+LsbGxoHDLVa/Aw7trJ2D6b4XAvSBRqV+eiGD8xv0wbAtgvbpq7nAjkXUVeiPpX7yy2g5C6FIAbzkYwzUjYVh2KxCLxdYkb9M0Q/LeZLzp8ADuvTYFXXftN6Sa21iPvP1qe+X3l1Eb9swAak49Ijp51hp97Q1zgIhUlaiDCmwWMwfkbQVNS6SURnX+WzGz8n1fKqWk1loQER0/fjws3BKSdyeI+7OjEPQrENQHMEEIDB7YifjoAFjrhgm45dB6k8TdqpN8pRA6A9gxYOCBg3GEJQ23KOhj20gmk6uutywL6XQ6/KI2EY4p8fCdoxhNWU0Td1NkvyHibnzxmg1TmGGNJGEOB+cgU6ksIk/+2NmbL1AEYMXMRtAetKqyrRV+DGY2hBBGPB5XzKwGBgZkNpuV58+fF9Fo9KrnrpC824WgJ4SND0GI22oXbjqBwWt31MissU5eaKH5CDfVAWxjhrSVyZ4IeNvhOGYGw9SwrSTvtUqkxmKxhkqohmgvrt+VwP2HM7W870ac5C2p7Y7ObTMa6XRGUsCaSIGsatYDgc+cVyM/ftkeNyRk4DQPjGrV3O9asRattWkYhmnbtqmUUkIIIxaLyWKxKPv7+2UkEhHJZFJU+euqVQkhebcLTwGIf+ZGSPlRUOV7JUEYOrgLkVRfRwxpnSltur4hbaXX+ZpxcMzC/dfGIULVvXWBH9NcU1mvF1YP0Sn1rfDwnWMY7Tfha70qL26pIa1Vtb3CeIz+CMyRvhqfaxbqyeedvSfPqZSouM8NKWWtgEvQbYyITNM0TaWU4fu+oZQK0sYUM6tYLCaHhobEyMiISCaTV/W8d0je7YLxuSiE+giIpgAAWiM+OoCBa2aWdQ1rY7GVtZaveQmuNbeNNQ1pK4XWmRlxm/D+m/swEFfhubCVF7QQa5J3PB4Pq6ttEa6djOFDd45CClp2bQe/WiTupsBN8nljavsK9a0k7Il0JXWMK+a1xUXZ/8PnnJmyVwmLa62XlEolIgvVeXBmNqWUZtXgpgAoy7JqqWNSStq3b99VXXUtJO8N47OVXzbdDkFvBRGDGdK2MHrDfljxyIoh7dpl0aKTvKEQ+RXrGy9tesWIVgutg0EA7t4bxe27w9SwrQYRrTnnnUqlYNt2+EVtzdHBB+8aww07+qA1b7KTvLX0r2bU9pIxMUMlnErXMarVPadXTplTJ88aaSFIBW1Dqz2/aw704Lfv+6aU0jRNs0bilmXJQqEgiUgUCgWxZ8+eq7bueUjeG8bvAvidPgh8HIKGASYQIXPNFPp3jK1d1aylXG/eMkPaissZGIxLvP1IApYRnk7dgEQisaphMJPJwDRDT8JWIRM38YE7R9HnqE12kjfDzU2q7TXGY0+kK3XPq9lk+YKMP/Wcs6Pskg3UVHdgXrOEEFagwIP57yD323EcZVmWVErJoaEh2d/fL6p531fl3Hd4t90IBqu/48kHIei+YLGZiGLwwE6QoC2tkrZkqyZLmzYTWr93fxQHxkM11y1YKyw+ODgYfkFbHBm572AaN+7uW5Eeu9pJ3sJ4hKlgTaZBZq0dML122ph88TVjSEmSdLltqIVKbrdVzfW26tLHDKWU0lorAMowDFUulyUzS2YWMzMzV2XYPJyg3AjOAbA+tQ8SvwVBVjU0hMEDM4gNp5c8Cm52adPNIG1fA1NphXcc7YOlwufAbsHu3bvxwQ9+EK7rXkEMx48fD7+grVbfCQs/f3wc331xHgsFr9IpeJuRdj2MTAwqHYN7Zh4A4LnC/t6zzr6JUW82EfG1BpnM7BORK6V0fd/3AJSllK7neS4RuUTkGYbhu67rRyIRv1gsykgkoicmJvT58+c5FotxNpttbYI+JO+rENYXLNjuL0LQXgCAZkSGUhg8sBNCydoJ3l3FVrC+Ia0BsmcAhgR+7sY+7BwIC7J0Ew4ePIivfOUrK1/wKrzkuwF3HUjhgaMZfPUfT0OKHiLtpsfEkKaEPZ2GN5sFl32AgAuz5uCTP3ambz+We5bAHhF5qLjOXSmlp7W2qmTuMbPreZ4npfQB+K7retFoVBcKBW0Yhm8Yhn7hhRfq572vCgKX4WXUCr4B4E+A6N1HIcWnQdQPApEUmLj1EPp3jG5r4q48pzBumHbwsXtScMzwNOomCCGglFrxJ6xp3iWqSQpMZmz8fz+exWzOXdmj0MNq+4pz0jagSy78S/magS1XJHt8yD0bdXQZgNZa1yWwsCYizZWQhK7cclj7vq+FENr3fQaglVLs+z5M02StNedyOcZVMv8d3nVbwp8A+CMbdunTkOIuUOVkSe2awMQtByGU3LakHRhsEo7AR4+ncWDMCU+HECFaQDpuIFv08J0X51Hft2Q7qO3lIEEQURvebA5c9AAClV2ytSZvx7h7nogZoBpRE5HPzD4zayGEXyVyTUS6XC7ryhS45osXL2ohBFzX5f7+fj558iSIKFTeIdZA7Na3QolPouKMhHIsTN1xHSLpPqwguXt6bruetIN1t++J4L039cMOHeYhQrSmRokw2GfiiRfmcG6+vE3U9urjoaovxpvNVjcjWszJyFDKv5BK+nmtwVJKHRC4EEITkQbgM3NtuWmafpXgWSmlTdPkXC7HZ8+e5VQqhdnZ2ati7jsk71ZgfXYYFv0hpNgdLMrsn8Hw4d0gKbc1cbMG+qMCv3liADsGw7nuECE2gv6oCdfT+Nazs5Xc721K3BWqJkjbgDuXgy5UzJSeS1ahRHLnZPmsFGAi8lEXOtda1xS31rpG4L7va8/ztJSSs9ksRyIRTExM6NOnT7NhGJzL5ULlHWI5fl8i7v06hHw/iCSYYSVjmD5+DFYidkVhlHXJt6UQ+daobaBSBvVdR/vwzmN9ECIsgxoixEZABEwNOHjy1Tm8fCYPue411SxhN0naLc1rNz4mUhIQAu75xcuV1/IyYpt6cWTAW6iGvLmqrIMfv6rA6xU5M7OWUmoi0p7n6dnZWe15HiKRCM6fPx8q7xDLELnjGkj1OQgxBIBAhLEbDyCzdwrbcW67fmPNwJ4hE4++eQDJaOhaDhGiLbcUS6LPUfiHH82i6Gqs3hqgt5T2aiuEY8DPlaAXigARWJPI5qU1M14+axnaDYxqy37X5sKFEL7v+4GhTVeL2uhUKsW+77MQgk+ePBk8BGxbhRGSd1P4nEKEfhtK/AwAAWbEJ4YwdcdhKMtombQ3RtwdJO1l72sahA/d1o/b9sTCUyFEiDZieiCCn5zP4+mfLm4+aXecuJcuFEpCOAbcC4tgVwMEKpbJMQ3OTwx7l4hqprWay1wp5Vfd6IGZbfk2vLCwwMVikYmIM5kMTp8+3eKX0RsI3UaNwP7Pld8OboMQDwcPPdIyMHzdbphRp9rGbx3iXqtU6grra3kT9bXFednyVYmbN662695eg3Fg1MQ9+0PiDhGi3TCUwHtuH8VI0tp8td3xNqLLlmiGEbdhjvfXGEj7pH78sr3r/EWZINLGsoYltfah9TXQq9sYAAzTNKVt2yISiUgppZybmxOjo6PbumxqqLwbgfd/A/hvY4hG/nsIOhacDv07RjF6/TUQ9YUvtoGTfPmfDIZjED52dxpHpiLh+RAiRAcwmDBxfqGEf3l5fvOIu2Nqe/UVhIp5TVgGyhdz4LIHEFAqkVP2hL97yj1XZ1DjuvA4B4pba81E5Espte/7GgCbpqkLhQJrrTkej+vZ2VksLi5uW+UdkndDuJkQP/QhSPGrEDDADBWxMXXXMUQyybaSdqvE3QnSDvbja8ade6L48O0pmGEZ1BAhOgIlBcbTNv7fH13AhYUyxPLJ7y0tttI+4g4gDAVmDfdi1RlOhIWciCbj+lI66eWIxBKTmta6ZlBDNXxORNr3/YDAtVKKTdNkZuZIJMLz8/NcKpVC8r5qEfnIJAzxBUiaAkBgxuCRPRg6tLNSn6VB4u52Q9pKr9MMDPcp/Df3D2IqE3ajChGik0jHTXg+41s/vnjZbdVFxVbW3+0aanuFhTJiwp0vQOfKABF8TUa+SGpmrHxWKQ7SxpbPb/vVZYELPTCq6XK5zOVymfP5PBMRW5aFc+fOMdH2i56H5L0uPiUQMT4KQT8HEgrMFBlKYfr4UZiOvW2c5KvtSwrgwev78PYjfdiOF0CIEN2GXcMRPP2TBbx6rrDGhG1vhMiBVSadq+MhJUCGhHshW1EKIBRK5MSj/vxQ2lvA5dl0jUrud1CgxddaayGErgul+8zMhmForTVLKXlhYUHv37+fX3vttRafdkLy7j04jwLePwORE9fCoC9AiEEAJAyFsZuvRd/UcPtJuxXiXjGvfOOkHWAybeBX7skgEzfCcyJEiM249ZgSphL41jMXUfL0JpN2+4h7RbW9wnikbcAvuvAXigBA2ieVy5O1Y8I9Y5nsAVRLGwuqrgU/VeJmKaWvtV5SD71agY3feOMNzufz8DxvWxF4SN6rwftnAP/WQsT+jxB0T5B8GR8bxPjNB6BMY+mp24OGtPVeRwQ8fGs/jl8Tv3L+LUSIEB3DcNLGc6eyeP5Uri7vu4cMaU2MhwRBmArlC4uApwECckUREYTCjonyBa3B1aIsXJ8+Vq3GVpsP9zxPE5GWUmrXdbXWWpdKJWitORaLgZm5UChsm3MkdB+thUj8fkh6R3D1SFNh8NAumFGnduryeulfXUjcvGSMvGKah6c1DoyaeMuheANVn0KECNFOJKMGfv6ecWTiRrXXd5NV0raQuFt5kFAJB9Zosm57Es++bO/+ySmVIWIDgCGEMFBNHwNgaq0tZjaZ2RRCGEopQwhhaK1VJBJRvu8rpZQcGxsT+Xye1nquCJX3tiLuzw7BlJ8H0X4QCJqR3juJsRv2g4TYVLW9NnFvzEl+5X4YzEDEEvj4vRlcNxUNz4UQIbYAYykbJ2fz+N4r841HvtpF2ptI3EA1dSxioDybA5c8gAiuR0bZJcyMu+eFYD8IhwflUavV1oI0Ml9KWZv/NgyjFja/ePEi4vE4p9PpoOtYSN7bEs7NgHcSsO95H5T4ZRCZYIaZjGH67qOwkrHKudhhQ9oV777Sa1Yl+lbm0HnJRXj/tXE8fFsaSoaqO0SIrYAQhJmBCB5//hLOz5fWJp0tNqRRG8YjTAUShPL5WlMRyhWEk+rzZjP9fh6gWt530G0scJsHBrZqOJ2X9wEXQuDcuXM8MDDA58+fD8l7W8I7CVifmoalfh9CTAEASYnRY/uQ2jPVNGm3QtxYl7jXugQ2RtxgIBWV+LV7M5hMm6HDPESILUQqZqDsajzx/CX4q3Uda0f6V4tKmzY8nqXvLxwTXrZYSR0DyPfJKLsQuya8M0qxXy1kyctrntf/VAu3+MysPc9j3/e5XC5ry7JQLBbrybunzWsheV+B/YTo4U9AigeDue7IQBITtx2CYZsNE/cVHvAuSv9a6zVEwFsPxfGuY0koGVoiQoTYShARBvssfOfFS3jjUmkpWfaIIa2p8Ui6nDrmV5p+Z3My5jj+wuigOw8QC1Er3rLEwBYob1yuf85EpB3H0VprlMtldhyHAfD8/HzP9/wOyXs54r92N6T6NISIV1S3wPjN1yI5OYT6dj8dNaStRr5X/Lmei7w5svc1YyJt4LfeNIihvjA1LESIbkAyakBJ4JtPXYTvt8o5W2tIa/j9mSAtA16uBH+hBBDAmuR8VkQmRtxzUZtLzAjmvGt9vuvbhtZXYtNas+d5WgjBvu8HaWTI5XIol8s9fV6EfR3r4XwhAeF9FEJUkri1RmJ6BOm9kzXi3hhpN0DcLVx/q2+2DnEvexAQgvGuo0nsGbHDc6HHoLVGLpfD3NwcTp8+jdOnT+PChQtYXFyE7/swDAOJRAKZTAbDw8MYHh5GX18fotEohAgjLN2OtxwZwl9+9yy+/v1zMJryobS3SlonibsW/ZMC9mQK7mwOXKjUPb+0YKZ+8Kwzfc9N+awQ8Hzf9wF4ROQSkcfMbvA3EXlCiLLrup4QwrNtW5XLZe04jm9Zlr548WKg2EPy7n3Sfg9Q+HPAdE9AijeDKiVQZdTB6PXXwIjYYF830NKz+XntTtYkb5S0g490w0wEP3OkLzwfegSe5+HUqVN48skn8e1vfxv/8i//gtdeew3nzp1DPp9Hpa/DUgghEI1GMTAwgOnpaRw9ehQ33XQTjh49ivHxcZhmWAK3O9W3iY/dP40nX57DhUUX61tR2kfaqxJ3B8P2RtKBPd6Pwkvngr2Ll39qTe+eKr8xMVz2APKJYDKzC8ADYAFwAXhKKZeZTcMwPABeuVz2bdvWvu/7tm3rkZERrZQSb7zxhj579mwTsigk7+5D4c8B9Zk0iD4Gor7qXQ4D10wjPpqB9vWaJ2v7S5u2b1577ddd/k/MEnj39UmkY+FMSi/ge9/7Hr72ta/hb//2b/HSSy9hfn6+YYW+uLiIxcVFvPLKK/jmN7+JeDyOmZkZ3HvvvXjooYdw0003hWq8C3Hr3hTefcso/sdv/BR6TeLsjRD5WuMhIthjSZQvZOFfygMEyhVk4pkX7JmxIXdOEAfK26z+LlfbhnoAXCIytdaelNKvFnPxY7GYl8/nheM4wjAMMTo6Ks6ePct1o+kpEg/v1DX2OvEIpPhIcMZa/QlM3XkdjJizzinZKmmvRtztxcpFWq7c0227I3j41hRsMzwluhmvvfYavvSlL+F3fud38PWvfx2nT5/GRrsmlctlnD19uC2hAAAgAElEQVR7Ft/+9rfx13/917hw4QJ27dqF/v7+8AvvIggCMgkLf//0OSwU/MaJsl31yDeJuGtjUAIkBdzZXLXuOajSdcyfHUp5WWYC6hqW1P3tB+1EA/J2XVcLIXSxWOSqcQ2nT5/mVCqFS5cu9aTyDu/UABB/7CCk+E8QlK6cNYThI3uQ2jkOErRJFdLaq7gbUdsAwBroj0h8/L4B7B4O57q7FcViEV/72tfw27/92/izP/szLC4udmQ/uVwOjz/+OP75n/8Z/f392LlzJ5QKA3TdACJCJmFhPufiuy/NLbstbU4jkc0g7frPKywD3kIBOu8CAHyPjIW8NHaMlc8ZhvYACvp8sxDCRzWNTAjhCyG053m6SuDsui5HIpFa8Rbf97WUkn3f53w+3yn9FJJ3x2B8MgLL+A+Q8gQAgtaIjQ5g8vZDULbVcOOPdpc23fC89nqEXl3vM+OdR/vw0E39YRnULsUbb7yBL3/5y3jsscfw4osvbto+v/Wtb8EwDBw6dCicC+8W9S0IExkH//TsLE5fKmHN2Y1uSgFr9UFCCghDonyhqr4JKBZExDCQmxh254goyPsO0sNqdc/rirZoItKe59U6jnmepwuFgiYimKaJXizcEpJ35P67IOW/B1EMDBKWwsQd1yExPhiEaq480dqttjfhmW8lUtcM7Bgw8egDg0jHwtSwbsSpU6fwyCOP4I//+I+Ry+U2dd+5XA7f+ta3UCwWceONN8K2w8hMNyAZNWEqwjefPg+fV6pu1ia1vcXEXXtgiVjwC2X4cwWACAwhFrIUmRx2zzi2LuNygZageEtA4gzAF0LoqsrWnucxM3O5XGatNVuWxUTEJ0+eDMm7p+B8LgaTPwMpbgJAIKB/zyRGju5dUllsXXPZiiq3VbJvr+LmNSbdDQX8wh1p3Lk3HlZS60K89tpreOSRR/AXf/EX1eYUmw/f9/HDH/4QlmXhxhtvDEPoXYLJtINnT2bx0uncUuc5N0/aGy9t2hnSro1RANIxUJ7Ng8s+QEDZJUsIlGbG3QvVN6sVbBFC6GohFw46jlVEOGvDMPzqb+37Pksp+dy5cxgdHUUul+NyudwzofOrk7wTAEoAnHveByl/G0QKAMx4BBO3H4aTjDegmtdL/9oAcbd5Xnu1bfaP2fjo8QwSTnhD7jb89Kc/xW/8xm/gL//yL7d8LK7r4vvf/z4GBwdx9OjR8EGvC2CbEglH4h+euYBCSTdNqt0YIl9rezIk4DPcuTzAIDCJxRxFRjP++b64XwSI60PkzOxXq635QUW2QIEzs5ZS6nK5rJVSbNs2e54HKSVmZ2d7xnV+dZJ3CUDkP07DFH8AQePB4sy1MxjYP3O5a1iPlTZdlbiXrWcAtiL86t0ZXL8jFt4JuwzZbBaPPfYYvvrVr26Z4l6OYrGIxx9/HPv378fevXvDg9QFGEraePF0Fj9+PbsNSXvpvY9AEI4Bb64AXawUbnHLws4Whdw1WTorxJImJbqueYkG4KPaxCQon8rMLKXU2WyWi8Ui9/f388WLF9myLM5ms6Hy7l78TwqRxd+AEA+CIKAZdroPk7cfhhmLrE/cHS62sv6+WiduAPB8xp17o/jFuwZgqTCft5ugtcZXv/pVfOlLX0KhUOiqsRWLRZw7dw7Hjx9HMpkMD9YWw1QCAwkL//D0eSzkvbqISPflbbdK2vUQSoLBcC/mKuuIkCtQNB7Vc0Npb7E+Zax+zjsg7Wq+t/Y8r0biQggGwPl8HlJKzuVyvLCwEJJ31yJ69AYo+RiESAEgkgLjtxxE/47RitJpgyGtdeXcBtJew7XODGTiCo++ZRAzA6EBqdvw9NNP45FHHsGpU6e6cnyvv/46YrEY7rjjjrCQSxdgLGXj4mIZ337+0ppV13qKuNd4iXRM+Lky/Gyl7rnWJLM5YU6NuucsU7vVHdbnffvLFLhWStXXRWfP87RlWVwsFtmyLD59+jT3wtTQVXj1/a8SSn0IRNMAE5iRmBhCavdE24iba6TJV9Tt4VrgGkvW8SYQNwBIATxwKIHDk5HwztdlKBaL+MIXvoAXXniha8foeR6+8pWv4Nvf/nZ4wLoARIQP3zOJQ9MJ6BWyY9YMkzfdSpQbXtxawTJe9yXClLAn+0GWqn3CC3Ny4PlXzVEiMpjZAGASkSmEMInIAmARkUlEVnW5QUSm67qGZVnSsixVLBZlJpMRzCyOHj0quFIBpqsZ/OpR3oFJLXbkASj6PQiKAICK2Bi/7RCig8mGibsb5rZbIW4GMJky8Jv3D2Iwobr93Lzq8Fd/9Vf44he/2PXdjnK5HPL5PB544AEYRphiuOW3NkeBCPinZy/C83lttd0upb2JavsK0rIUtOvBmy8CALEWMpsX1uRY+WzU4TJzJe8bqP2uD6VrANr3fU1E2vd9JiJdKpWglNLMjAsXLnChUGDP87ravHb1kHcJgPGZAVjiyxB0DahSOa1/9wQGD++CELIBIm2NtFsh7o3Oa6+0XBDwnpv7cd+1CYjQMdxVWFhYwGc+8xk89dRTPTHe119/HUeOHAnNa12ivoeTFv71pTm8fqEAoq1I/9qYIa2p7YkgbAPli3mwW0kdKxSF43nk75xwL6ASLufqnHeQNubXm9iqjvNaz28hBBORNgyDC4UCRyIRaK25WCx27XG/usLmtnwPpLg9IG4VtTF4cCcM07wybN1Gtb16mHz10Hq7idvXjL0jFt51LAkVVlLrOjz11FN44okneuph40//9E/RK87c7Y7hfge/cN8kora8kqdbUtvNhshbeP+mdO3SDVXUhD2aqF8vXvqpNfPK68aAIDaIyBBCGABMZjaZ2SYiU0ppMrOFamhdKWUYhmEIIZQQQpXLZTkwMCAGBwepLnTelTfMq4e8Y797AIp+KcjpBhGGrtuN+FimrkMPt5C3zVg5tN7g3HarKWBNED4zEDEFPnBLGsPJsMxlt8H3ffz93/99z5VofOKJJ/DKK6+EB7BLcP+RIdx3aABefSvYHnGSN/0gQQRrpA8q6VQ+IxGKZRn5wfPOrlxR2lprg5kNIYSJ6pw3M1vMbCmlgvlwg5kNz/MM27aVUkpaliUNw5BKKTkxMSEqgQ1CNxL49ifvKAB8ChD2+wDaH5zQ0eEUMvtnqsekat5YkR/5ivWtGNIaVelXkj1fSczL1nH9OHjZ8iru2hfD3dfEwztcl6rYv/u7v1ux/3Y34/Tp0/jOd77Tc+PernBMhY+9eQbjabtiXusocW/AkMYbHE91lXQMOFP9IFWb/aU3zhpjL//UHBGCjCph136qRG4ysymlNIUQppTSNAzD9H3fUEoZUkrl+75QSolyuSz27NkjmFl0o/t8+5N3DoCNWyHpQxBCAUzCMjB4eDfMmANmjdVFLa9CwM2nf11+vwZU+lpqu1mFDiATl3jwhn7E7LCUfTfi5ZdfxjPPPNNz4y6Xy/jGN77R9Qa7qwmHZ5L4udvGYchmyGYTwuTMG1fby3ZPDJjpKIyBaLCCyp6wn3nJ3lksC5sqUdYghG4ysyWEsIQQVrXft1UlckMIYTCzisfj0nEcaZqmTKfTQilFBw8eDELoIXlvLv59HJbxmyAaC8g4MT6IvumRVQh4dXXcWrgbaD60zm0jbjBw154YDk+EqWHdih/84AeYn5/vybF/97vfxblz58KD2CUwlcB77hjHzuFGrvfuSP9qRm1fWbhFwJlMQtiXSzyfOW+MfO9HzjSgTVTmtg0ANdXt+76ltbbq0smM6ty3IiKllFK2bcu+vj45OjoqFhYWhGEYIXlvOhKRn4UQD1Si4wxpm8gc3AHDMRtSx5ej0Q2q5gZC60uIthHS5ibJvrpO+4yRpMJDN/bDMcOCGt2KXnGYr4RTp051dV761Ygdw1E8eOsYpGhB2bZlbps7praBwEF2eXsjYcMcjF2+HzKJH71o7T1zweiTEjIgbiIyAZhCCLOqwIO/a2F0IgoMbDIWiwnP88TQ0BBFo9GuM65t7zu685kJCPErEBQNToD0vkkkp0YaUsedMqQ1HCJvlrRr71ldTowHb0jiwHioursVruv2tOnLdV0899xz4YHsIkgh8N47J3F4um9J3veaJNw2td3KvHZjans5adfIXAg4430QEaNaNhWULajEk886O11P2IHznIhqYfNq6NySUgYkbgghDCmlYZqmsm1b5XI5FY/HZT6fF2NjY6LKl11D4tuTvNMAcAvBlA9B0LHq4xjsTAKDh3eB6so6trMmeSfadjafNsbBx8XRqQh+9kh/eDfrYhSLRZw5c6anP8Nrr70WHsguw3C/jY++eQaJiKprbrNJTvJ2bM9Xqu21tlcxG85Usq5yCdFPTplTr50yBgAOwuaG1trUWgcK3Aoc6EHamO/7JhEpZjYikYgUQshMJiOj0agYGBjoKvW9Pcn7IoDIm/ZBiF8GwQYAUhID1+6E3RcDmFcNa2+8tOkG5rY3orZ5ycgRtQT+zU0pDMTDdp/djEKh0LPz3QF6LcXtasGJI0N403WDqxNlW9V2e53k9aRNDb6xPdIH1e8E90LKl2T0qRfsHa5HJoDavHfVdW4wc20eHNWwummaBgDDMAxpGIYyDEPG43ERi8XEyMhIvfoOybszn+o3TJjGb4GwL1gUHU6jf/c4UN/usy3513Wv3mxDGqMuTF63KQPXz0Rwx54YRFiQpatRKpV63q2dzWbh+354MLsMcdvAh+6ZxEi/3TnSbsmQtn7onhpQ21fc9g0JZ6IfZF6W3yfPWOM/ftkeE6RVQOBVo5olpayliuFy/XPDcRyDmQ0ppTIMQ1mWJU3TlLlcjnbu3BmGzTuK6PDdIPFg0GaHpEDmwAzMqFP3pLgSP3ZHv+2GiXuFNayBuC3w4PVJ9EVC1d3t0Fp3Tc/uVhESd/fi2M5+nKipb2xhsZXm1HarznYzFYGZvuzx8TyyfvicvffSoopJQareeQ7AqlZbs6SUFgAryAVXFfu5EkIopZS0bVuMjo5KIQRVu+ltOYFvP/K2fncAkn8dgiqTvZqR3DmG1K6xyqddwUmONjrJmw93N/m6JWqbl6htMKCZ8ZZDCdyxNxHeuXoAhmH0fGtNpcKHxG6FYyl86O5JTGQc+D63QW0DzZnSGM06yTdSblVIAXs8CWHKwLyGi/Mq84Pn7BnPr5RFRV3aWF26WO3/WmtTCGH6vm8YhqFc11WFQkEmEgkRiUTEzp07u8K8tv3I27QfANGdlWPKMOIRDB3ZDWEald4yV6jmrS1t2oqT/Ip3rP5HMzCdMfFzN6egZBgu74mbq+MgGo329GeIRCKQMiwA1K04vKMfD989iSufETdQk3yjSnuF5wbaSNi+7mVGvwNr7LJ4YRbyhVftmdMXVH9VeRvVqmsWAEtrHTjOay1DlVKGaZqG67pGNBpVsVhMOo4jU6mUiEajXeE6317k7XxyFAq/AkGVIycEUtdMITqUrjDbFcSN3nSSr/J+pgLecTSJ3UNOeMfqEdi2jYGBgZ7+DP39YUZDt+Pnbp/Ajbv6l/Zx6JjabpC469Q2tTFsTyDYY0nIhFW7b2YLIvH0i5EpX7NRrbxmElVKqNb3+q5X5lJKw7ZtpbU2HMdRrutK27blwMCAOHLkSEjebYVlfgwkbqhxeaYP6Wumat/wdnGSr/a6fSM23npdH8Jun72lvKenp3v6M4yOjoYHsssxlLTxoXunEbclOmtKa8CQtgFTWqMdyZRjwJnoA1UikMRM8uWfmjOvvWFkBPlGQNyoc5sHv7G0qIshhFAAlJRS+r4vpZQimUyKgYEBsZUcun3IO/aZW0HqI6DqZyJCZv80Isn4tnOSr7QvJYB3HEtitN8K71Q9hoMHD/bs2IkIO3bsCA9il0MIwokjg7h1X7qtJNkQaa+qtDtbAMbMRCupY1WUSiL6r0/F9uWLhiOlUHUpYhYqbnObiGwppSWltKotRA0Apu/7huM4qq+vT1qWJYvFokin05ROp7dMgW8P8jY/H4dUHwFhCACgGfHxDPp3T4AFLT3waJa40TVO8tVe42vGLbtiePPBUHX3Io4cOQLbtnty7IlEArt37w4PYg8gFbPw/uOTiNlqnYZjrbTtbGx1a7en1lLShClhj8VBAQcQ+PQFNfqjl83xqinNYOYl+d9BCF1rXTOz2bYtbdtWlmUpIlJSStnX1ycHBweFlDIk79bwnyu/LO8EBL0VRJX65RELw0f3woza1VD39nCSr/QazUAmpvCh2zNhaliPYv/+/di7d29Pjn337t2YnJwMD2KP4E1HhvGuW8fgr9jGtQNqmzdXbddvTEQwMzFYw7GgPSppJvXMi/aui/NGvK7fd63ueTAHHvT8DpQ5EZlB32/XdZVt2zKRSNQKtxDRphdv6XHy/lUAn0pC0S9DUKZ6xNC/cwyx8cFK/uw2cZKvti9JwJuuTeDIVFi/vFeRTqdx11139eTYb731VsTjYZ/4XoGhBD58zxR2DEfrzGutkmRjnL7R9K9mSXsJwclq1zGnWvcchEvzKv2jl6xJost530GaGOpyv7XWpmEYgftcWZalXNdVUkpZKBRkPp+XhUKBjh49uiUtQ3s/bB43PgAS9wb/tZIxZA7uqOTONkDAW25IW0LcaIq4AWCi38C7b+iHZYRdw3r2hmoYePOb39xzru1YLIbjx4/DMIzwIPYQDkz24aHbxmHW2o5xx4qttEzcbXyQUDEb1miiynZMWpN67hVr57lZlSTiJYVbqs1LAvVt1atxIjIty1LRaFSl02kZj8flxMSEJCI6cODApofPe/uOH/vMfkj6OCpfPsCM/j0TiKT7GlbbDRnSGiTSlhQ6X94TL1l+eQxXPiRUFTprvOVwH/YMh6lhvY4jR47g0KFDPTXmHTt24MiRI+HB6zEIQXjPHZO4dirRRNvOdULeq7rIW6yRvgG1vdIqeygOFbdqA8zmZN93nrL3+D6ZRJfLpgY/VQVeK94ihDANwzCY2VRKKa21IiIphJAjIyMyn8+LRCKxqaHz3iVv88sWlPFRCNodELc9kERm/zRIigbIFGjYkNYJJ/lKa5rI9fY0Y8+wjbcfS4YFWbYBhoaG8NBDD/WMihVC4P777w/TxHoUk4MRvPvWMTTW+qBZQ9pm1UhvfJWKGrBHE5eplUCvnrSnn3vVHAEq6puZTa21GXQZq1fiqDrOTdNUAAzbthUzq2g0Kkulkkin06IaOt80Bd6D5P2Nyi8jdzOAd4CIwAAZCsNH98JKxJao1jWJu1sMaU0St2bAMQV+/s4BTKbt8E60DUBEePe7340bb7yxJ8Y7NTWF97///TBNMzx4vai+ifDQbRO49Zo0fM1tJu4WSLid/b9X2p4AazAGIxV0HQM8n6ynX3R2ZvMqCsCo9v2uKe+g3nlgWDNNM1DmRpW4led5MhqNSs/zxPT0NFUuZcJmEHgP1jT8EwCfdBAxPwcpbqt8RZX65cPH9l5OC1iRsIENV0jbkNpubV77iuYjDNyxJ4ZfOj4QznVvI8RiMSSTSXz961/v6k5jQgh88pOfxDvf+c7woPUwIpZCKm7imz88i2JZL0szbZwg210hbaMPEattT1JAWBLliwXAZ4BAhaKIOJafHR105wFiZmYi0sysAfhEpLXWWgihfd/3iai2npm1aZq6+hp2HIdN08TFixcbHPRVp7wB9Nlvg6AHgmcbFXOQOTADYcjOEveGneQbJ24wkHAE3nEshYQTpoZtNzzwwAP4wAc+0NXNSk6cOIEPfvCD4cHaBrhjfwbHDw0slwdNEXc3lVpdb3sjGYE1GK3pYs8j80cvOzvnsyJKhCVtQ4PweVDzXGttVee/Dd/3DWZWRKQMw5DRaFQODAwIpRQdPHhwU8Lmvae8nU+NQ6n/AVLUyjqlr5lC5sA0aJnDvBfqka+t7FcOre8esvDhOzOI2WEziO0GpRQmJyfxxBNP4MyZM103vgMHDuAP//APsWfPnvBgbQMYSgDM+IenzqPsaWyak7xZhd7wqrXfnIgq6ns2D/Y0QEChSBEGyjOj5QsgYlRaWDER6arKZmbWUkofgCYiLaWsKW+tNefzeRSLRVZK8YULFziXy0GvmEt/1ZL3bylEYx+HFO8FkQAzzL4oxm47CCse7Z4KaXXE3eq8Nq+x/Oh0BA8cTsKQYch8O2JwcBD9/f34m7/5m64Knw8ODuLzn/88Tpw4AQpL+W0fApcCf/eDM5hdLDdI2q1Eg7eWtOshDAn2NdxLxepLieYXZXQw7V/o7/PzAAVxAV0XNveJyK+G02s/vu+zlDIgey6XyxoA5ufn4bpuR8PmvUXe0TcdhDQeg6BKGyZBGL7hGvTvHNs84m7o/VpV2+sTNwDcsjuGO/clIMIb6LYEEWH//v1gZjzxxBPwPG/LxzQyMoLPfe5zePjhh0Pi3mZgML7xg7N4/UJhXeJG181tNz8mEoB0FMqzBXDJBwjwfDJLZaLpsdJ5KeDXETcHKtzzPE0VZe4zsy+E0FWCDtS3tm2b4/E4x+NxPnnyZCvN0rcheRu/bsLq/3dQ9ObKwx8jPjGI0ZsPQFTTaxom7SWbbU098nVJe411N+6I4tY9CYS30O1N4Ndffz2YGf/6r/8K13W3bCzXXnstvvjFL+K9731vV8/Fh2gNvmb8P98/g1fO5HqMuFsfj1ASUALli/mg8hrlC2Qn4/rSYMrPAmBm1kIIDUAHf1eNaksUeEDkANjzPM7n83zx4kV94MAB/slPfnIVK+/UR4HC94DI2+6BEr8HohgASMvEyM37ER1M9ebc9rpkz6s+ZO4btXHb7jiECOl7O8MwDBw7dgxEhMcff7zjc2gr4cSJE/iDP/gDnDhxIiTubYqiq/GX3zmFV8/metZJ3sp4pGPAz5bh51yAAN8XKl8gtXvKPa0U+9Xwua7Od+sgbF4NoQeOdCYiLYTQ1fC5TiaTXCwWeXZ2FrFYDHNzc60MehuQd+F7gPPJNEzzixB0XZDP0LdjFIMHd4GU3Dri3pDabo24AUYmZuDu/XGYKryZbndYloXbb78djuPgmWeeQTab3ZT9ZjIZPPLII/jCF76Affv2haHybYz5nIs//8ef4vTF4hXE3WuGtKYeJAgQpoA7WwD7FfmdK4mIbXF2fMidY0aQFlYj8Tq1rQNDGxFp13W1EIKZWbuuy5ZlsVKK5+bmeG5uriOh8x4Im99GiOz7MKT4tcCkpiIWxm47CCeV2HLSXuG/HSPt4F8hgLv3J5AMu4hdFRBC4JZbbsGxY8fwxhtv4MyZMx0Lo0ejUdx111344he/iF/6pV9CIpEID8A2x0uns/gv3/wJFgvextR2u0i7LWp7/TEREYSp4BddeItlgADWJOeyIjox5J6NRXUJIK7OczMAv15pa621UkoD8H3f17oSGtOu67LneVhYWNCe50FrjWKxeBUq78gv7IRSn4MQE9VvHAOHdyG1b6pylm0o1N0koW9YbTdmSFuP0PNljam0iYMT0fDOcxUR+MzMDO677z7s2LEDCwsLOHXqVNtC6ZFIBPfddx8+8YlP4NFHH8WRI0fCMPnVAGZ87fGT+JvvnYbm7RsiX5XABUFasmJecyupY6Uy2b4mb3KkPKuk8LXWNaMaKkY2P1DegRoPVDczs1KKAbAQgpPJJCuluC7ts20hrG4nb0LkvkcgxUMgkmCGM9iPsdsPQVlmZ3x8DVRJa5W0GybudeB6jEs5D7ftiSMeFmq5qhCPx3H06FH8zM/8DA4dOgQiwvz8PIrFYtNEblkWxsfH8ba3vQ2f/vSn8eijj+KGG25ALBYLv+irBKcuFvCF/+M5vH6hgOYtNN1G3GhpPMJSS1PHIJDLkzM84J3vi+kCKuY1Xp7z7fs+a639QIUHitx1XZZSaqWUnp2dZdd1+cyZM21nq+6cyEp9Hpj9BOA8dgy28X9CYBKoOATH7jiEzIGZ9ivudqvttULh6zrMVx19tQtZBe++oR//9m3jSDhhsZarFaVSCa+88gqefPJJ/PCHP8TLL7+M06dP49KlSyiVSvA8D8wMIQQsy0JfXx/GxsawZ88eHD16FEePHsXMzAyUCh8Crza4nsbn//cf44/+64tdRtqdV9zBhkEVcr/kYf7pc/AuFWuT/bsmii++5Y7F75kGcr7WRSLKMXOemfNElGXmHICs67p5IsqVSqW87/sFZi6WSqVSsVgs5XI599SpU65pmt6LL76os9msRptkZ/e6UMQjNmIDfwwlPxCMMj4xiMl7j8GMOmsScNtc5GsRbYec5CuT/ZX7ZwYsg/C+WzL4yN2DSMXCnspXO3zfRz6fRy6XQz6fR6FQQLlcBjNDKQXHcRCJRBCPxxGNRiFl+NB3tcLzNf7nb7yKz/9vz2IuX26iZkQXGtJaGM9Kn7ZwJovs8+fBXmUbU+nivbdkH792d/Gk63IJQA5AnpnzALLMnNNa55g55/t+TgiR9zwv77puUWtdzOVyRQDlxcVFb3Fx0T179qx++eWXA9Pbhgm8ex+3Y4PvgqQHg29ZmAqZgzthxpxa17CmSLjl8EsTprRWSXvZvhp66iKg7Gr8L/90Dm9cKuJX7xvBnhEnLNxyFUNKiXg8jng8Hn4ZIVbF7GIJ/+UffoI/+q8vYKHgXlXEvdYnNdMOjH4H5fN5AEDZFfb3nnH2jQ97lxJR3/N9bVQ7jnnMbDGzR0SuEMLVWrtaa08I4SqlvFKppBKJhLp48aLO5XLMzL5hGDwyMoLTp0+35Th2J3k7nx2GxC+AUOl3qRl9O8eQmBgE8+aVNl1NbbfFkNbIel57OQB4Gvj6Uwt45mQRx6+J49bdcUylbUQsAbnaJBah4fktWvU5lZc9TNCqFwYve79mni+Wj5M3GD5asVnfKm9KqyTLUAsDaKZJYFOfp4n3pAY3pCYG2s5HRap9IG7xnFzh/OlALQTqyMbrf+7KVk0QbRWagbLr4/xCCU++NIs//8ef4ltPV2qZN0bcvU7a6yZXT54AACAASURBVBM3GJBKwhlLwJ0r1sxr5y8ZQz981pq67Wj+OSLymNkHEJC2B8DVWntSSs/3fVcIYTCzp5TytdaeYRh+KpXSpmnKQqHAs7OzQcU28BIy6/B52HnSBlD4FBA3Pg5D/icQImCG2R/HzJtvQiTTd5m8Nytne8Nk38LcNq8+373a6a4ZEGBELYFUTCFqSUhRf6kvHQctufHyqtdDtUHtlZa7ZYeBwEuJZJUpKOJKecK1Lkheg+j5iv8xCGLZicyXP5xeunMRfHBe6VupruLgoYFW3evyBwy6IjrDKxDJGveO5fWjBa1pdqT13nPZfUGAGiL6yr7Xv78SoWHFJqixhwzRxMPA6pzMS4hubfK+fM6RaOzz0GoPvqt8Pw1950SV49jArVyIaumQdQ6iCB6mGSiUfZydK+Kl04t49WwOC3kX1ND50NtO8rVC5KsNgbVG9qVZFF6fr560xMm4e/FtxxcfH+h3ZwEUmLkAIJj/zgIIwuZZrXXOdd2C1rpQLBYLvu+XstlsiYjKZ86ccXO5nG+apv/kk09qNNlbrbuVdwGAhV2Q9BEQIgBASiK9bxJOKlEh7o2kgLWClnt0r0/aQPsM86L6TtmSRrZUXofwef2H2FUfFHiVa2it9+S1l2N1Mm1uXw0sX/E9eZWPzivc63kdrmyiDC+AVR++W33dCsTd8k2XW7xJd8l4qG1j6vD3026ivKJK2rIHuUbVdk8TdyPnwApELwjOeBzlSwX42Urltfms6H/qeWvm3pv9BUAbVeVtVsPmFgBPKeVqrS3P8zwi8pVSnmEYrtbaN03TIyKZTCZ1JpPRZ86coYZDLWugyxwrhySiB/8DlHx7sCQymMTwjfuhbKMNudkddpI3WWwFbVDcjYTWGyPfq4201yLhxkl71desS/a8jiBs4XUhca9/0+6276eDJLmdS5u2T3GvECEzJJg13LkSwExgEgtZER1M++dTfV5eMxDkeNfnegcpZEGxlmqIPWgfygDYNE2cO3eOBwYG+Pz58xvSb91F3tGPvwmGeAxEFdUtBYZvuAaxsQEsjcg2oG62pB55i8S9EgGvRdhrEX2rxL3Wa5oi4FbJvoGHgIbJnteKkDaltNdWv6vvq2nVvBGlHZL2+sTd8fE0+x11riLZ5vTa3qT0rxZJmxoa1+pvLiwJd74EHXQd88gsFIl2TpbOKUEBOTMR1dzjQghfa+0HJVNR6TamiYi11trzPPZ9nwuFAs/Pz6NcLm+obWj3kHfss/1Q4rMQdAREBK2RmBnB8PV7Kx1g0OYUsJbRRrXN7Q2dt0TcvNZ87lVM3GiduFsl4M0hbm5hVe+obeqi8bSPlBofLrV8R2njmLbQSd5smHxV8lYSpAilC4XKpkSYz6q4bXF2dNCbI7pcNrVK1jUiF0IwEflE5Pu+H/T8ZiEEe57HmUyGi8UiDw0N8RtvvNHD5B0bA8qLgH3vO6HEr4HIATNULILR2w7CDua61zgQW6u4N15spTHybfV1odpumrTXUMFtJW1e/wGzfXPbnVaSV6Pa3rwQcGfUdufGsxVqu/FhN7YDYSl4uTL8XDlwXFKxRMbUSOmcZbJb35wEy8qmVkPnPgCuOs8Dda5zuRxHo1Eul8vsui7ncjlGC+bxrSfv8iLg/N4YDPX7EGJ35VsTyFw7g/S+yXXPheaKtHS4HnmbiHvj89prEXCrZL995rZbI+D19tU+4g5D5M0pbep60m6WKJsLSW+3XtvNkvZGQ+SrKnkpICyJ8myxUriFQMWSsJXi/PiIe0lA6LqyqRpAfatQDcAPyqlWw+Zaa81KKS2l5DNnzvDQ0BBOnjyJqorvMfIGgOg9vwIpPxz0HTT7Ihi+aT+MqL1xtb2ZxN0Jtd2KIW2DpN20Eu8EaXeAuFsh7U4Rdzi3vXHi7onvJzSkNf7+7UoBa+OYhCXBrg93oVRZo0lm89KeGnHPRhy/HPT8DtQ3M/tExMzsB6RtGIbv+37QE5y11iylRLlc5rNnz/L4+DifPXu26YF2Qdj80zdCGl+CEH1Axao/eHQvktMjl5NDNzNE3gBxd6LYSitKvFXibvw1odruGtJuFzG1U02GxL3++3fQlIaeb9vZ+oNEp9T28j8JBDJVfeEWLhWF4/rwdk6458HMqDYsWWZeC8LmWgjhV+fAua55idZaI5VK8dzcHObm5rjZxkJbS972JyIw7d+FEHeCiOBrREcyGL7pGkjLaIi0V1fbm1uPvH0EjPbOa7dE9qGTvGvSv9pFSNtEbffG3HazRNlMznYrarvNxM2b/f0sVdubRdw1kjQkwIxypesYgUDzWRXrT/iXMv1+tq7fdy1lDJUQul+d//YB6MC8JoTgQqHARKSLxSILIXDx4sWmnedbTN733wMp/x0ERSshCgMjtx5AdDi1pDLW1qeAba7a7gpD2orEvcmk3Qniboi020jcYbGVtoynPWp7E0x7HSLJzUn/auXhr/NOe2rKSb4BP8JqLydAOAreQgm64AFE8DXJfJHkzFj5rFKVfO5qLndNeQf53lprLYQIXOe+53naMAwGwKlUikulEqfTaT558mTwENCQeW3ryNv4RAq29TlIcTRYlNw7gYFDO7G0qOdmzG2v9roumNvuBHE3bUgL1XZ3k3azxNQ7IXJguzrJmw2RNzumLm3b2bFiK+1V28shlABJgfJsobZtoUROPKIXhwe8+YC46+a+l6jw6h58IURt7rtYLGrXddm2bZ6bm+N8Po9isdjwh9h88k4AKAGIvelhSPlxECkAMGIORm7eDysebZG026nQO0faDRN32w1prRJ3i3PbvMYYmiL77TW3Hart5ki7+53knSVJ2up0tLVvhB39jrYiRL7W9sKW0CUPXtYFANI+qWxBmDvG3DOOzR5AHKSKVRV4bc67zoGutdZcVeOcy+W0UkpHIhHO5/OYnZ1teGSbT94lAM5nd8MQX4IQo8Hi9IEZpHZPgARtmpOcG12+2Wq7g07ynk3/6gBxt0rarRJ36CRvbEVPFVvpoNqmqzT9q3Nqm1v4OHVjEgQyBMoXi2C/0vyoUBBRIbkwM+Zd1EtNa0tSxYQQmoi07/taCOGjGlpXSulyuYxsNot4PK6JiOfm5rpUeVufs2DToxDiHZVKagw73YfRWw5ARazLN74tmtte/fh1wdx224i7PYa0TSPu7e4k77YwecfHszZx98SDTQfnkrc8b7tdIfJtoLaXQ5gC2vXhLVSbPzHR/KKMDA38/+19SYwkyZXd+9/cPZZcqjJr69q6u4ZNcnohOCCHMyQlgSI50kWA5ipI0EG6SRgMdBAgQZCgGWghIB0E6aKDzjqJJ0HQkSSg04gQCRDECCOyh93Nnq41q3KJxRez/3Vw98jIzFg8IjyWzLIHJKoiwhdzczN79r59+98+392WGMXad6m0Sw/zMtraUEAXcc5pFEWSpqkaY/Tw8FCNMWqt1X6/v4HKu/mdryHgfwGmPQAgY3Dna1/E7pt3Zsgadokd0ioQ9/Ic0uojbp3x+7P/9Wvb85HSCrykl7od7Yqo7SWSNq0k1OoyiXv+8mzC2va0g4gI3DTIDhNomuf8zjIKk5Tw6EH6wnDusDYcea1Q4GdUuHNOy73fxfHKzBJFkf7qV7+Cc64Me0IbQt7/sYF29scw/K28nSp2Ht3Fna9+AWT4UoU2XZna9qFNJ6jt2Yh7Gdu/5iZubyKfrLbrUv9r2/5VnSRfX0/yWdX2HBOJmU+bfqAJDABF+jIuXiBTt8/t2/v2+Y3r2iuCtJyJvMbMZdaxMv75YC3cWqtxHEsURdrpdHRnZ0ffffdd/eijjzZAeb8D4CWAnW/+TRjzT0HUBICg1cAbv/Mumvu7lbKG+Shp9RD34mTvPcnXTtp1EdOaTeR+bXsVE4llr23PR9zLI+161faoQ7gdwHazfOsYQM5R2I+JHz1In4VGHfK93zIc/1xVz4RRdc6Vv2sYhtLtdiWKIk3TVF+9eoV+vz9x7/dqyPslgOa/fANR+B9g+Avl19c+fx833nsbbPi1Je1xCnj5DmmLq+1J543bY119X7lf2/YOaVebtDfPIW1OZXtJt3/NQ9qD8hPAAeWBWyT/7qRrtrfaevLwbnooQoTCcW0oPagys2NmZ60dqPAiXKqIiCJ3ZNN79+7py5cvcXJysmbljf9s0E7+AMb8bRACqCLc3cLdb7yHxu6WD7YyTW3XEGxl9Z7ksyltT9qrJKVll2nZwVZWRNyb5pC2adu/5izPJjukVS0PEcE0DGwvg+vmW8dU2RydcOvhXftsq4WkVNXFySWJu4LU1RgzyEJmrS3VtzKzAtAXL15oEATa7/dHFng15L3zjd9EwP8WRHfKCCy3vvwO9j7/YEK6zw0Jb4o1r20v2gZ1XZ7ks42pnrgXMVkuk7TnIUpP3OPV9oLEVPNEAisqD2HzPclnLQ8xgSNG+qpfZh1DnFJTVdOHd9OXhmkQea2IuFaug7uSyFXz6GxZlmmxDq7dblcAaLPZ1E6noycnJ7p65b0LIPlPAVrpP4bhvwGCgSra927g7u+8C45Cr7aXobYnBUhZIEzpPEFapiluv7b9eqjt186TfOjnjXBIq0Vtz1emZeTaXjdxl+CmgTpFdpQMNHmnb9r3brlnxdYxReF9Xniau6E18IEKL5zZXJqm2mg0JAxD6fV6GkWRPn78uPQ8XyF5JwC2v/lNBPQ9EO0AAEch7nzti2jd2Tt9qa/x2vZsk4TLE9p0WrAVT9pXhbSnE/elIO2ZTvOhTauW6bKvbU+1JhHBtAJkxwkkdgCBbMaRc3CPHmbPmU4d1jAULrVY3y6d18osZOUxqqqSJAmazaa22208f/78QsGWbDb/57toh/8exgzil2+/eRu3vvwOODCvDXHX6kmO6WQ6nbjrMZFPOs8T9zJIaR6hVMM+8jmI0julrSrYyqzF3QBP8itC3IP3HBCICNlhPJizHHd4e/+aO7hzw3ZFoUNJS2TIhO6GEpi4IW90LdS4Jkmi/X5fDg8PUTq0rYa8d//634XhfwiiCAqYVoQ3vv4emjd2XmvSXr7anidHdwX1PtN5FYO0LETA85K99yRfVnk8aV8VT/JZy7Ts0KabR9rD1gWODGwnhes7AIBzFJ70OPrcm+mT0IjTItoahjzQiWhA2KU6LxW4MUbTNNUoimR3d1d3dnZwfHyMNE1XQN7tf/M2AvM9ML+dt2XB/vtv48Z7b4OU4NN2TjtvucFW5lXb84Q2nR5sxYc2XR9p10vcm1SeOpVk1Z+uTLCVOSYSV80hbZbysOE87vnLfk7PBPT6ps0s/Qdv2MMytjnO5vwu18HLPeBORDRJkoH5PE1T7Xa7aq3Vg4MDXS55bwNI/wuh1f37MPg7hZMaNW5ewxtffx9hq+GJewaVrjM102qm9cXWtmcjbnjiXiEpLZskZyTulZTJ59uu/Xi/tj1XeYJGAJc42JMUIIIC1O1T8+Eb2dNWU9KCkIHTdW0NgqBc/x6o8FJ9FyFUXRiGGkWR7u7uqrVWu92uLoe8UwCtb/wGQvw7MN8FQBQEuP3Vz2Pnwe0pdfG6q+3T81YZ2nTx82YIXwq/tl27Utq0KGmvkdq+UqFNl6q2Zy3TYhnAVkncg21wTDDNAOlhAs0EIFCamoYx2n/rnn1ZnDVsNh9EWyv3fJdqXFUlCAIJgkCISPr9vh4cHOjdu3fx6aef5mp/KRP6wP4+mN4vP7ZuXcPuW2+cvmUd+isG0NHErRgfk3xMSs+htJ46hoBnIm7V0cRdfI+zj3L6STH+XhXOm0Sk0++lZzvjmcApFa436TwdPk9HdjLVEfcaPLqOLEdJwONikp+ed/5e487R8TEEJt5LJxC+zuEApjP8pLMNKHOXR2co6ugfxpL2XBObxcsz9fpawzsbMWhvUnnmq5+RA8HU46eStlZoc1VJUheso7FlmuMdKMbsJsi/D9oBWne3AJP/IoLgw08abx91zDYRQiIKmTkEEAGIVLWhqlH5WUQiAFEQBAERBUEQBFEUmSiKzPXr1/nZs2dcdr/6lXf4r3fRMP8KTG/l0wPGrd96B1v3b46pFu9JPv8WsDkmmwuq7epbwCqKMe9JPqcKWJ+yXY+JfAE1f2k9yXWhn+svzylxL72d1phIZJlq+0LfIMA0AqSvYkiuvhGn1Nxq6fFb97JXIkChuAeZx8q18DJ0arE+7pBHYZMwDDVJEmxtbWkYhhKGoZ6cnCzBbN7+9u/CmD8EoQVVRNe3cedrX4SJovk8yZdsIl86ac/lfV5nIpHNzbU97q2ucl17KmnPTNz1rSNv2kTCB1tZVdrOFYQ2nYMgXx+HtFlJ++z12RAkk9PALUKUOdIvPkoe5ylDSYa3jg2Zyx3yWOdijBFmlizLRFUlyzJJ01SMMeqcQ5IkWr/ZnPF1ELbzQiu27u4j3G4NEeIYE/koc/cK1rYXN63reEvYIsStGB/atLJpvaKJfAnErTqGuCuYyFdF3BNN5GcfYjOIuy6zvaIeT/K5JjaXbG1br2B55iTuVSrb9SrtCibySdcnQnSjCQoLemXCy0Oz/+xlsMtEAYAQQEBEYfEXAYiIKCKiyBgTikioqgGAgJlNaTqP45iNMZQkCdVM3t9rgPg9AAEAwDC27t0E8YSsYTqC0sd9f+b3sauu8zmlFQP5TGvUurgn+dj1Zqww3/aUtW2MW9ueQNzzEfCke+nqPMnnXrudlZSWmbqznvJMVNt1TWxqWduelSir+yOcqu01EffEOpqjPHWtbV9J4q6qtidfP9wKEWyHAx7LHDeePDf7igEhh6parn2HAIZJPDTGBEQUhmEYiEgAIAiCgHd3d9k5R+12m4JaubuVtEDhGyACVEGRybOGqUxwSEN1T/JVrmtXUduoP9jKSkkbm5FreyyZrnpduy6SvAKhTS9VEpE5lGSVn1cT2rSC2l6DNeIqxyOvWiZaoDzEhHAnRHYQA0QQAR8cBduqHDBTICIhcoc1S0QZgKwg7lRVG0SUMnNmrQ3yHWVBlmWZUVW+efMmJ0mi9ZI3UwOEa+UDmigEN6Oz/b0CaQOvp0MasEiQluVv/5qXuGfes70O4vYR0mom7hWs/b92DmmrCLU6C3Evm7TXp7YXLQ8xIWiFAJ/WZr/PbXEIiDQoMouFyK3UoapGRBSKSEhExjkXAojCMEyttabVahlVZSLiLMuYmaVe8iY0oNQcfAwYFFBF4q6ZtCsQ9zJIe3HlPCtxa4X+uj6ntFUGW/HE7dV2HSRJG+bZvkpP+0tlIl/SRILqKI8qOOL8YgoARInlyAoCk5vNraoGqhoUhB0ACMv1bmYORcQQURBFUeCcC4IgMM45DsOQ9/b2ajabDy8Cn3kQnHFIq07Mk0h9A9J2VlDbM5vI16C2Lztprz206fjGNl8X8sQ9+fpXNbTpWtS2j5A29fnnmGgpcvVdLiEDgAhYFQYAF8TtiCgwxgTF57D8K+zkgYgEQRAYEeEsyzhPDc6cZRnXS94qCYh6g49O8kgzrXPORpVIe0OIu7bQppdvbXs5xD3bOZtD3N5Mvl7SXh5x09xl0ku/tu2JeznlIRBUzjp1MkOJwETEImKQRzgNSq/y4b/yOyIyRGSstabRaBgR4X6/T9evX6/Z21yaCRSHeekJLslg+8nZ1lFZbY/wJB+Kdjbq+zMivwpxV/Akr36vM6HHVkbcqpO3f81L3JM8yadtAauLuKtESZuZuNe43aoe4q53+9fSPclrU9vL8dyeO0qabhJxzxq1LT/He5LP50lepTwKzYO0DKzPolEgzhiQqhoiYiLigqTPk3gIwBCRUVVT/l9EmJl5a2uLnHM1m837aR9R8BmUAALUOiSHJ2jf3R9qXFc417bWvK69BrXtc22viJQ2LfvXJlojNs4hbVZ1u2wT+Xxq+/XyJJ91bXvW9zb+WBfbvE9Rbj5vtzRlzg3qyEOTlwRuADDnyb2ZmbkgdDbGsLWWgyBgImJrLQPgLMvq3uf9RymgP0Pu9g44QfezA6iT8fuyp+3pvgzEXTFwyqxkP33/9fh7adXvJ91rAeKeX6FvikPaEuNtr7E89ShtLLd+NpK454lJvkzini9GOs3UzOqJ/z1Tm16b2q4Yg71qeUSRdbLBRybojWu2byi/fek5Xv6VZF18ppLEC/M6G2NIREhEKMsy2traoiUkJtE/gcoRQAATek9eIjnqzq+2ZzJ3Y7xpfSwBDyX3UNRgWlfU50k+6fsR15uSgGQyAY9ujPMETlmWU9rMiUQ2UU1eidCmy9zbrpgtmEiFxB1nwpsukEhkI4h7/vLMZiJfIJFIXWq75kQiC5vIZyiPjS3sSTa4YxBI9sYt11NonoCMuSTxkshpSImXhM5UoDzWOUdZlhEzLyGr2JH7OQT/J9/sRsg6MY5/9fjiADsxO9ismbyGBvIxZD6egDE+tOlMWcNGqGMdQ/Y6/jwdlbHrzPfnZonTFLoOX+scoY/JDnZaZWOyf2mV7F+zZA0bv7Y9c9awEe98Y9T2mspDG1aeqSbgRUl7RBNcyJO8zqhti5LkHOWZPQPYGtX2KrJ/raA8yUECSd1gq9j+Nde9vef6qoQh0i4Jm1CY0UWkNKOTiPDQ2jg750hEqNVqodVqLUN5/3EPTv8b8iDrgCqOPvwM6Ul/6Pnnd0gb2wUrDETek3y6Etcp+yanbwGrQTUv4pA2n7XIq+1V1OdEUtL5lnynYL5825vmkAZ4T/L5yrMsh7RJcKlF8qJ/ZpD93IPkoNkUBwBEpMizioGIdHgcJKIy29jpMxANfldVBEEAIlpSPm/C/4TT/11+zA47ePVnn0CsYNFc23XGJJ/Hk3ySah6pxnW6StcxyrnavWbLtT1ubVvH5eFWzOBJrpVU80QCnjeO+SaqySujtquWadm5rSuq2wukrWsvz2JqWzdIbWPD1PZk4p5rIrHA2r+qIjlIYMv1bgV2tmzv829nL0UK6aqqBWnrcHYxAEJEysyq+YZuJSK11pb/R7vdxvHxMay1S0gJeuMWcPg/Ooi+CzC+C6IQopQedRHtbqFxY2eUvbseh7S5snhVOPdKpe0cp7Z9hLSrsmebNr1+pnbGxZTt5kVIW0BJXuW0nQuVabIX+arVdn5jRXaSofPnx/k2MUCJVd9/J/ns3c+lLwuaEyKyqupU1SJ37s5UNSOiBMDgT1UTa20CIHXOpUSUikiWpqnNsszVr7wPnhcP0vvvEPkBkLvJu36Kp3/yf3HyybMFVPME4l6ky702xK21EPe0xu0d0lZfnqXn2q4NNTukVbE4vEbEvRRSqmeUrVltz9AHZlbb86l/F1t0f30M18sGJbq27Tpf+kLylAgOyP/K/N3M7IjIMbMrwqVK+SciAkCMMVKY0QXIzerMDBFZgvIukfyvHsx3PwLRt8HYBxEkzdB/foRwt41wuwkwV1facyn05SYSeX1Dm86muDc6A9gVIe5LUT9LDCVKcynuq0HaWIXarnT6stX2eMW9SAawOsrjEovORydInudZxAAgMJp99b3+x597M31FRLYgYFdkEbNlRjERSQGkqpoQUeKcSwHEqpqoaiIiSZZlqYhkzrns5OTEnZycuOWRNwBkP/gUje88A+GvgGgbRJAkQ/z0EGIdouvb4DBYAnFXc0arTvY+befGBFuZmZR0jp8ueWjTS0/a1cs0H2nXPJFYs0PapTGTXxGHtDPHE5B1U3Q/OkH8PD79UZS+8Hb86V/6Sv/jMCBXmMkdEQ3IG0AKICnSgCbMHItIDCAmohi56TxV1STLsoF5PU1Ty8x2ueQNAMkPfo7oO0/A9FcBtABAUov+45dIXhyDGwHCdgPEPDdpz2sIWjxKmifu8Xy2KVHSriZxL91MfmkSicz58pemtldTRz606frVtjhB8qKPk18cITvMzhzx4E769Lvf7P2/dlNSVbhynZuIbEnCJXmraknicaG+YxFJVDW21iZElKRpmhJRmqZpZq21L168cDVnFRuDo/5/xbVWBKI/gqGH5de9z14gPjhC89Y1bD24iebNawi2muAwADEXYeVGDE5FxDkdo4AJuevexfqebiYf94ZVx3c4GTSkc3ceWtqjqZOAUZceERiFyu/1bPNdOWmPXxHf6EQidQ24o8pDM5ZnOOseVRvUaVECoIplokUJqThHZmHZKe+MzhdtAZKkmtoQVTmexlygLE85zk06v0KEtAvlqoEkac76WWJ5aNF3pnOWp/C/kUyQnaSIn/eRHiRQq6eFUnX3bqfPfu8b3T+9tuW6ThRE5JCbyy3yde/0vINaaSInolJtpyJiAdgsy2wQBFZEnHNO0jSVIAh0/snrzPgnBts7v4cQ/wjEfw2AGTAwFDAM0wxhWk0ErQgchWDD49/CyC3qF+lreL/cxHdFGKxVnOlcF8672HomNoHBNXWWUXUs2eqo69GIyxONuJJW5xsaN9ad3l8nPEYVfhx+hbWJaqZKipKW0fKpIifQtIoq23j1+1YuIlE18p6JwKnahKJqpVPF6iCd4XpUbYJD4zrUqCLS9Lqh83V+7vjKkxs9V4U0XU1SpUepzoE03IbqcTKbpTxUcSJBCz3kiKMkJ2zbz2B7FtlxCtezOWkPXcoEmr31RvrJX/7t7i9u7bkeQFJsBXNE5ApntFJxl2vcsarGqtojop5zrqeqXVXtWmt7APpxHPcB9LMsS5xzyfHxcRrHsVsheRdo/bMbCFp/AEP/AGzuYPUl8PC4eqArVEjy72X6ZaZdWJczQ6U11JGene+uvIwCiEiumUffUFuN7OS3fjP+099+P/51owHnnCgzS+FZ7gA4ESnXu9OCxGPk5vK+tTYWkR7lKbW7qtoTkX4cx7GI9EQkieM46Xa7qXMu+/DDD92ausk1ws4ffg2m8bdA9B2A3gHTlh+BPTw8PDzqUOpLnVzkpndpRK5796b99Ksf9P7srbv2EGeN8678V/OIo7b4S8+tc8cAYmttT0T6st8t+QAAD4VJREFUqtpj5p5zLk6SJAYQdzqdJEmSNAzD9NmzZ3Y9ynsY5u9F2L7/NpR/Fxx+nZg/UOABgOsgakJxbk1eKbeVab55nIa+V1IQhn5XFHa1wiG18oJghToZvse0RjTDNalmi88sJjNvAVmTLFNfDf6drom5Rq63jWWqtVTTpoxLQ2U1RpLtLXlx96b99HNvJp8+upcdNBtinSgRcR6dJY+i5kSkNJvb0mkN+Rp3BiARkZK8E1XtAehba2NV7VtrY+dcAiDu9/tpv9+3cRynr169so8fP3abUDUMgN9/79vBi+77O46jPcDsqfAN5mArDDUKQg3CgBoBSxgYCoMIEQMNNoiINTSEMDAIlGCYiZlgoGqYmRTKIjCck31J7lwSpqrk6VmEVCGsyvlS7MUt6DRMtHlQ+Wk+A6Qi4CIA/bRqKN3wplK4KqAyLbQtqeRlnrqjQACIEEGnP4+qsmq1mPiSR/CdWk6FkmiFmAN5yFVSpSl1T6qK/N1X6ZRKNN0XKJ+wuTzqME87WhTQCs8OVVIQQbVSnWrF+lQBKYSnPz4BUiVMMqnmvYKqtKch54xJbamo9wrtDspacRKcH1dek8fXvUil51EtRcCkd1TcVakYK3SaX5UquMKzD/o8V3/2ipQ38poXnF0VINbK5aQqz6QAc6VS6vmxd2L/rBh0bPA+K6yikzKpC4z2W005vrlnn799L/2L+3fk1Xbbpqc8PXDAEJw6BJwxmzvnnDEmA5CKSFY6qFlrUxGJwzDsiUhMRHGv14tFJDXGxEdHR2mv18vCMMzCMMx+/OMfS6fTWTt5l/fnra0mf/D+fXpw96a5fWvf9ElDiqOwvbcfun7WCMKowWwiC2kaBA0mikDcIKKIiCMyJlTnIgABMRsoDBExMbGKMpgIIgQ2RCqkA+muRYM7nUowRnqXL1BX5VwBWgxWC1QYFYNE5fJM8acjEAGiFTs8lUN+ThJz+eFdfKZ8ElX1WaYHi6Cyzud5adPcsoiq+T2N8KA/rzdOP9PoepFzpD44jHnM4Dns2ESLNo/hdqLOEc0QiGOk+14R05kU+YA3lF1pah+qlJCGyrxHevH+5+YTRKTFxImmTcSKNkrT+qYU973oXJdP/rScCSip5ExPFSpfS2ae2jOJVGX6i89zXdAIopcRAqR4JiIVUTOhBFoMnFR96J8yESziik1tI1RM2HWM+FGg1G86EGPF+D9hqzhBNQzIRZFkrYZaJlEFQURZB86vJEX5tPh/8SrIFQQ+8DZ3zrliX3cZnCUBkFhrE2aOmTlOkiSx1ibFtrBERNIshz04OLCPHz+Wjz/+WFazVWz6yKFp6uTFAXhvf0//4lmoTCTWOd2DkzBs2F5iTRgSR1EjScUVMWJVmUmY4ciJVYU1xhi1EgBkmInUKQMwrARVJlKQat4YygGO6HSgUauwquBzg6PqIgYcrbXK8rLNVpy840lN4XBzwtdaNyvwxLJXH+SXb2srsgHNc94c74AmyNvzg3Flf/c56+q8a7SCiIv3I1yl3Q8T8FAmpXPfT35gGuvBPfxIFVy8SHPLB01uV2b24WzSATT7mKBV3qIqQNMmGBUuPtagTbOJhkX6V9HfAWN4tqoijLXy07juMX0rPwEKawWu6GvnD2FmzXmZpCBuBSAiIoWneRke1RbbxLIyOIuIpKqaMnPc7/dTa20ahmGaJElmrbVE5KIocnEcS5IkcnBwIAB03eQ9ePgsy/Dhhx9qo9EQay3u37/P7Xbb9no93d7ehqoijhMRUcfMEgRBWRmZcy5k5hBAYK01xhgjIiZPzMJljlTKBQuXeVKL2azS8H5mzQPL0jyNlJknDirF4E2LdgDn3Npf2OyEurmo+izl+50ab/2SvoPpkxK6KLVqq4vqfaO0Fq13En01+0OV55h38lr5LQ2Jd+d0rmcQJ8vImClF3ZwRd6oqzjkq6aPoE4NMYSWBW2tLp7VMVTNrrQ3DMAGQiUgqIom1NsuyLEuSJHXOuSzLLDPb4+Nj6Xa77qc//ekg1V+wQe2mTJcme3t7CIIgs9bi+Pg4n/0ag1arpUmSSBiGIiIuiiJrrQ2NMYGqBqoaADCqaojIlERdJDcHACoqGc45KgZjOjdAKzOXjVfPN+JJjXbaQLauDl7et86BvJz8LFnmah11Neo59GKgdqIpI1KeK2BuUtS63/twe5o2cZyhwmtrT7OQ+ix9Y9HJwlDbrWVyM6ns5fHnrQtTWWKorRljpp47VIY6xmEq+sPS3gGWPGgUAq02S5qIoFDVVN5jYOMp8nOrKjnnpEz3idzLXEvlrapSOLFlxpis+H9pEs9EJLXWZiKSxXGcZVnm4jh2ANyLFy+cy2cygw32mzRLpKKB81tvvUXb29tmf3/ftFotbrfbQZIkZn9/PyAiIyJhEAQBEQUAgmazyQBCZg6IiEXEEBEbY1hVmYhYVfPROa9Z5JOhwtY49ObGJUE/993Gza4ndfBZB46icV4p//OhQZSccysdfIgIQRDUdk8i0izL+LxVgKesg9f5PFWuWfWYoXdT49LO7BO6cfVXA5FQEAS0zDZHRHNPLqdNOp1zfJn6+nA9TyNlqugccpp6eyRP6Cmf5+QqImBmV5wnyPd5CwDHzJlzzmZZ5ogoS9PUArBF+FObC+7M9ft9lySJffXqlev1evLLX/6yzDa2ceQ96EMA8KUvfYmdc/zo0SNOksQEQWCazaYhoiAIAtNqtYyIBGEYGlUNiMgQkTHGcPmXZRlT/iUXJjkEQUAiQsysIkJFx7rwkod/vyyNNgjGG1KYWa21l6oTVlAnK3s3JQGvrBNMaH/W2traxdo7+xVsl+VzAeByokhEMMZcumeoY5nvEkzspxndLpD3iDasqkpBEIg7tfWLMUastWKMkSzLZCiPt7PWWhFxeZe2VkTs0dGRTdPUZVlmr127Ji9evHBxHMtPfvKTkrQHM7RNfCmlKZbeffddCsOQ79y5w8453traMlmWGQCm1WpxGIYmCAJutVomTVPDzCYMQxIRDoKAnXMcRREVjgRkjEExIEJVKQzDCyqiNKtXnblVGfTDMBz5wp1ztU4ONtmUtWzSraKa6lYm59sMM6+EKGdtk3W3C2NM7W33MrbLae/hfL9fd/9c93ur07IxaSI0z4SwwrIEsiyDMUaNMeWkBoUVFyKixQRfiu+0MJOXZm5nrS33fjtrrTCzFRF3cnIycGhzzrler+dOTk5clmVycnIiv/jFL4ZN8brJ5F1OhqCqdPPmTb5+/TqFYWiazSbdvn2be70e7+3tMRGZZrPJzjkOw5CNMYaIiJmJmblU2YUCRxAEFAQBCrWtcRwTABo2aU56ifM0ignrZLV05lmvEUXRJpA8FXVJqxwYlkXew8qkbtPrkALfpM5Z+nfQLOS1LuVYte5mVZjT/AxW0c9mecahMWdjyFtV52onk5675I4665+IkKYpiEiDIBj4F6gqnHMwxgzItWgTKiJSEL0WZF06rw1UeBzHLkkSIaLyX3n27Jlrt9vS6XTk5z//uTrnStVNl4G8B++oLOe3vvUtevr0Kd+4cYPu3bvHr1694na7TWmacrHmzdZa3tnZIWMMGWO4JIc0TbndbpcNpVTiSJJEC3U+l9LaBLRarUujuDe9LjcVqort7W1N05R9bdSjPn27u/r9s86xkYjQ7/dHtqfy/4UylyiKkKYpSvJ2zmkYhtLr9ZSIxForaZoKEcnJyUnpgC0nJyfy5MkT2d/fl52dHf3Rj35UzkwEI7bwbfqLoaGZFG9tbdGDBw9grWVjDL355psEgJMk4YcPH6LX67GIUKvVok6nwzdu3FBjDB0fHzMAdc5RGIakqoiiSI0xlKYpRVGEJEkuvPhVNWhr7dyNbFnEbYyZe8kgiqLK63uXdXBgZhTLLyu7X5qmnnDmHHjLtmyMgXMOm2zy36TJ+DzWMboYDGeguq21c48rzWZzprqpW3mf54jSAlA6CxMRrLVS+jk0Gg3JskyzLEMYhmKM0TRNSxWuIiLdblc+++wz3d/fl+PjY7HW6ieffKKdTkeLYwBMTOB4OfpgWd5bt25xkiR0//59tNttjuOY7ty5gziOOYoi3Lx5E8fHx9xoNKjdbuuTJ0+43W5rGIaUJAmVa5ONRgPtdpuKbQCDxjXtxde9xzFN043z7jbGLGQCnqXjbMK+9Xk6c7lr4Sor/nViZ2dHsyxbuH5LT/zL4njVbreX2m5nwSzLNc45WGsvWIiGnfWyLJt7/Fx3ezxfbmOMbm9va6/XQxEiFVEUuYODA1ZVbbVaaozRTqeDXq8njUZDAaDX6wkAPTw8VBHRTqejT58+1b29Pfn1r3+tk9T2ZSVvDD3McOPgGzdu4Mtf/jKePHky+L7b7fIHH3ygnU6HkiShouFceN779++faaDlsR6rg1eUm4coirC3t7e2AbPZbOrR0dFrt0wgIrh9+/bSyOfo6Ahpmi6rzWiapvS69OcoijQMQ7127RqlaYqjoyM0Gg199eqVWmtpZ2dH0jSlTqejqqrWWn369Cm2t7el2WwqEeHRo0fy/e9/v1TX5V+ltC2XsZLLMo8KEjIIP/3OO+9QlmWDwSePMkfY3d09Q9bOOYRhqGma0v379zfKMegqDESbopA3yRTZaDQ0SRKqQ1Uum7zXqfqXGcVrVShNqrNYl5ZliWq1WvrkyRPqdrukqrhz587E5cFVqfvLisJKqyICYwyiKMLHH388WHLc3d0V5xwdHh7q4eGhBkGAdrutP/vZz4bJGkPmcQxxW2UivOygCZ+H/y8PHz7kwsv8wkDhnHttGt4qsAnkpKp48803sbOz41/IJZx8XXYCuX37tvzwhz/kTVleKdf/VRXtdnujYwBcgvEN3W4XRIRr167pV77yFTk4OOBOp4OPP/4YYRhqq9WSLMv42bNnDkXOqxEEPZeyuMpMNcuzrSLUp4eHxwrma74ve6xzzjui7emUz0snuNeZ3D08PDw8PBaZVHp4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHgsA/8fAgzj6KU6BCcAAAAASUVORK5CYII=';
          const img = new Image();
          img.src = this.source;
          return img;
        }
      }
/* harmony default export */ const models_ErrorIcon = (ErrorIcon);
      ;// CONCATENATED MODULE: ./src/visualization/Viewer.js

      /**
       * @author Russell Toris - russell.toris@gmail.com
       */


      const SUPPORTED_ENCODING = ['mjpeg', 'png', 'ros_compressed'];

      /**
       * A Viewer can be used to stream a single MJPEG topic into a canvas.
       *
       * Emits the following events:
       *   * 'warning' - emitted if the given topic is unavailable
       *   * 'change' - emitted with the topic name that the canvas was changed to
       *
       */
      class Viewer extends (eventemitter2_default()) {
        /**
         * @param {Object} options - possible keys include:
         * @param {string} options.divID - the ID of the HTML div to place the canvas in
         * @param {HTMLCanvasElement} [options.canvas] - (optional) the canvas to render the images to. Will override divID
         * @param {number} options.width - the width of the canvas
         * @param {number} options.height - the height of the canvas
         * @param {string} options.host - the hostname of the MJPEG server
         * @param {number} [options.port] (optional) - the port to connect to
         * @param {number} [options.quality] (optional) - the quality of the stream (from 1-100)
         * @param {string} options.topic - the topic to stream, like '/wide_stereo/left/image_color'
         * @param {HTMLCanvasElement} [options.overlay] (optional) - a canvas to overlay after the image is drawn
         * @param {number} [options.refreshRate] (optional) - a refresh rate in Hz, will be converted into milliseconds and take max value between refreshRate and interval
         * @param {number} [options.interval] (optional) - an interval time in milliseconds, will take max value between refreshRate and interval
         * @param {boolean} [options.invert] (optional) - if the images are mirrored
         * @param {string} [options.type] (optional) - the encoding method for the stream, default set to mjpeg
         * @param {string} [options.src] (optional) - the source URL for the images, passing values will override other params (host, port, quality, etc)
         */
        constructor(options) {
          super();
          this.divID = options.divID;
          this.canvas = options.canvas;
          this.width = options.width;
          this.height = options.height;
          this.host = options.host;
          this.port = options.port;
          this.quality = options.quality;
          this.refreshRate = options.refreshRate || 10;
          this.interval = options.interval || 30;
          this.invert = options.invert || false;
          this.topic = options.topic;
          this.overlay = options.overlay;
          this.type = options.type;
          this.src = options.src;
          this.ssl = options.ssl || false;

          // create no image initially
          this.image = new Image();

          // create the canvas to render to
          if (this.canvas === undefined) {
            this.canvas = document.createElement('canvas');
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.canvas.style.background = '#000000';
            document.getElementById(this.divID).replaceChildren();
            document.getElementById(this.divID).appendChild(this.canvas);
          } else {
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.canvas.style.background = '#000000';
          }
          const drawInterval = Math.max(1 / this.refreshRate * 1000, this.interval);

          // grab the initial stream
          this.changeStream(this.topic);

          // call draw with the given interval or rate
          this.timer = setInterval(this.draw.bind(this), drawInterval);
        }

        /**
         * A function to draw the image onto the canvas.
         */
        draw() {
          const context = this.canvas.getContext('2d');
          // clear the canvas
          context.clearRect(0, 0, this.canvas.width, this.canvas.height);

          // check if we have a valid image
          if (this.image.width * this.image.height > 0) {
            context.drawImage(this.image, 0, 0, this.width, this.height);
          } else {
            // center the error icon
            // used if there was an error loading the stream
            const errorIcon = new models_ErrorIcon();
            context.drawImage(errorIcon, (this.width - this.width / 2) / 2, (this.height - this.height / 2) / 2, this.width / 2, this.height / 2);
            this.emit('warning', 'Invalid stream.');
          }

          // check for an overlay
          if (this.overlay) {
            context.drawImage(this.overlay, 0, 0);
          }

          // silly firefox...
          if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            const aux = this.image.src.split('?killcache=');
            this.image.src = aux[0] + '?killcache=' + Math.random(42);
          }
        }

        /**
         * Change the stream's topic
         * @param {string} topic - the topic to change the stream to
         */
        changeStream(topic) {
          this.image = new Image();
          // create the image to hold the stream
          if (this.src === undefined) {
            let src = (this.ssl ? 'https://' : 'http://') + this.host + (this.port ? ':' + this.port : '') + '/stream?topic=' + topic;
            // add various options
            src += '&width=' + this.width;
            src += '&height=' + this.height;
            if (this.type && SUPPORTED_ENCODING.includes(this.type)) {
              src += '&type=' + this.type;
            }
            if (this.quality > 0 && (this.type === 'mjpeg' || !this.type)) {
              src += '&quality=' + this.quality;
            }
            if (this.invert) {
              src += '&invert=' + this.invert;
            }
            this.src = src;
          }
          this.image.src = this.src;

          // emit an event for the change
          this.emit('change', topic);
        }

        /**
         * Remove interval and image src to close HTTP connection.
         */
        unmount() {
          clearInterval(this.timer);
          this.image.src = '';
        }
      }
/* harmony default export */ const visualization_Viewer = (Viewer);
      ;// CONCATENATED MODULE: ./src/visualization/models/Button.js
      /**
       * @author Russell Toris - russell.toris@gmail.com
       */

      /**
       * A button renders a button with text to an internal canvas. The width will scale to fit the text.
       */
      class Button {
        /**
         * @param {Object} options - possible keys include:
         * @param {string} options.text - the text to display on the button
         * @param {number} options.height - the height of the button
         */
        constructor(options) {
          options = options || {};
          this.text = options.text;
          this.height = options.height;

          // used to draw the text internally
          this.canvas = document.createElement('canvas');
          this.redraw();
        }
        redraw() {
          const context = this.canvas.getContext('2d');

          // determine text size
          const buttonPadding = this.height * 0.33;
          context.font = this.height - buttonPadding + 'px Verdana';
          this.width = context.measureText(this.text).width + buttonPadding * 2;
          this.canvas.width = this.width;
          this.canvas.height = this.height;

          // create the image
          const image = new Image();
          // keep the base64 representation internally
          image.src = 'data:image/png;base64,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';

          // draw the button
          context.drawImage(image, 0, 0, this.width, this.height);

          // draw the text
          context.font = this.height - buttonPadding + 'px Verdana';
          context.fillStyle = '#121212';
          context.fillText(this.text, buttonPadding, this.height - buttonPadding);
        }
      }
/* harmony default export */ const models_Button = (Button);
      ;// CONCATENATED MODULE: ./src/visualization/MultiStreamViewer.js
      /**
       * @author Russell Toris - russell.toris@gmail.com
       */




      /**
       * A MultiStreamViewer can be used to stream multiple MJPEG topics into a canvas.
       *
       * Emits the following events:
       *   * 'warning' - emitted if the given topic is unavailable
       *   * 'change' - emitted with the topic name that the canvas was changed to
       *
       */
      class MultiStreamViewer extends (eventemitter2_default()) {
        /**
         *
         * @param {Object} options - possible keys include:
         * @param {string} options.divID - the ID of the HTML div to place the canvas in
         * @param {number} options.width - the width of the canvas
         * @param {number} options.height - the height of the canvas
         * @param {string} options.host - the hostname of the MJPEG server
         * @param {number} [options.port] (optional) - the port to connect to
         * @param {number} [options.quality] (optional) - the quality of the stream (from 1-100)
         * @param {Array<string>} options.topics - an array of topics to stream
         * @param {Array<string>} [options.labels] (optional) - an array of labels associated with each topic
         * @param {number} [options.defaultStream] (optional) - the index of the default stream to use
         */
        constructor(options) {
          super();
          options = options || {};
          this.divID = options.divID;
          this.width = options.width;
          this.height = options.height;
          this.host = options.host;
          this.port = options.port;
          this.ssl = options.ssl;
          this.quality = options.quality;
          this.topics = options.topics;
          this.labels = options.labels;
          this.defaultStream = options.defaultStream || 0;
          this.currentTopic = this.topics[this.defaultStream];
          

          // create an overlay canvas for the button
          const canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          this.canvas = canvas;

          // menu div
          const menu = document.createElement('div');
          menu.style.display = 'none';
          document.getElementsByTagName('body')[0].appendChild(menu);
          this.menu = menu;

          // button for the error
          const buttonHeight = this.height / 8;
          const buttonPadding = 10;
          const button = new models_Button({
            text: 'Edit',
            height: buttonHeight
          });
          const buttonWidth = button.width;

          // use a regular viewer internally
          const viewer = new visualization_Viewer({
            divID: this.divID,
            width: this.width,
            height: this.height,
            host: this.host,
            port: this.port,
            ssl: this.ssl,
            quality: this.quality,
            topic: this.currentTopic,
            overlay: this.canvas
          });

          // catch the events
          viewer.on('warning', warning => {
            this.emit('warning', warning);
          });
          viewer.on('change', topic => {
            this.currentTopic = topic;
            this.emit('change', topic);
          });

          // add the event listener
          this.buttonTimer = null;
          this.menuOpen = false;
          this.hasButton = false;
          viewer.canvas.addEventListener('mousemove', e => {
            this.clearButton();
            if (!this.menuOpen) {
              this.hasButton = true;
              // add the button
              button.redraw();
              const context = this.canvas.getContext('2d');
              context.drawImage(button.canvas, buttonPadding, this.height - (buttonHeight + buttonPadding));

              // display the button for 3 seconds
              this.buttonTimer = setInterval(() => {
                // clear the overlay canvas
                this.clearButton();
              }, 3000);
            } else {
              this.fadeImage();
            }
          }, false);

          // add the click listener
          viewer.canvas.addEventListener('click', function (e) {
            // check if the button is there
            if (this.hasButton) {
              // determine the click position
              var offsetLeft = 0;
              var offsetTop = 0;
              var element = viewer.canvas;
              while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
                offsetLeft += element.offsetLeft - element.scrollLeft;
                offsetTop += element.offsetTop - element.scrollTop;
                element = element.offsetParent;
              }
              var x = e.pageX - offsetLeft;
              var y = e.pageY - offsetTop;

              // check if we are in the 'edit' button
              if (x < buttonWidth + buttonPadding && x > buttonPadding && y > this.height - (buttonHeight + buttonPadding) && y < this.height - buttonPadding) {
                this.menuOpen = true;
                this.clearButton();

                // create the menu
                var heading = document.createElement('span');
                heading.innerHTML = '<h2>Camera Streams</h2><hr /><br />';
                menu.appendChild(heading);
                var form = document.createElement('form');
                var streamLabel = document.createElement('label');
                streamLabel.setAttribute('for', 'stream');
                streamLabel.innerHTML = 'Stream: ';
                form.appendChild(streamLabel);
                var streamMenu = document.createElement('select');
                streamMenu.setAttribute('name', 'stream');
                // add each option
                for (var i = 0; i < this.topics.length; i++) {
                  var option = document.createElement('option');
                  // check if this is the selected option
                  if (this.topics[i] === this.currentTopic) {
                    option.setAttribute('selected', 'selected');
                  }
                  option.setAttribute('value', this.topics[i]);
                  // check for a label
                  if (this.labels) {
                    option.innerHTML = this.labels[i];
                  } else {
                    option.innerHTML += this.topics[i];
                  }
                  streamMenu.appendChild(option);
                }
                form.appendChild(streamMenu);
                menu.appendChild(form);
                menu.appendChild(document.createElement('br'));
                var close = document.createElement('button');
                close.innerHTML = 'Close';
                menu.appendChild(close);

                // display the menu
                menu.style.position = 'absolute';
                menu.style.top = offsetTop + 'px';
                menu.style.left = offsetLeft + 'px';
                menu.style.width = this.width + 'px';
                menu.style.display = 'block';
                streamMenu.addEventListener('click', function () {
                  var topic = streamMenu.options[streamMenu.selectedIndex].value;
                  // make sure it is a new stream
                  if (topic !== this.currentTopic) {
                    viewer.changeStream(topic);
                  }
                }, false);

                // handle the interactions
                close.addEventListener('click', function (e) {
                  // close the menu
                  menu.innerHTML = '';
                  menu.style.display = 'none';
                  this.menuOpen = false;
                  const context = this.canvas.getContext('2d');
                  context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                }, false);
              }
            }
          }, false);
        }

        /**
         * Clear the button from the overlay canvas.
         */
        clearButton() {
          if (this.buttonTimer) {
            window.clearInterval(this.buttonTimer);
            // clear the button
            const context = this.canvas.getContext('2d');
            context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.hasButton = false;
          }
        }

        /**
         * Fades the stream by putting an overlay on it.
         */
        fadeImage() {
          const context = this.canvas.getContext('2d');
          context.clearRect(0, 0, this.canvas.width, this.canvas.height);
          // create the white box
          context.globalAlpha = 0.44;
          context.beginPath();
          context.rect(0, 0, this.width, this.height);
          context.fillStyle = '#fefefe';
          context.fill();
          context.globalAlpha = 1;
        }
      }
/* harmony default export */ const visualization_MultiStreamViewer = (MultiStreamViewer);
      ;// CONCATENATED MODULE: ./src/index.js



    })();

/******/ 	return __webpack_exports__;
    /******/
})()
    ;
});