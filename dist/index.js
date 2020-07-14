var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global_1 = // eslint-disable-next-line no-undef
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func
Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty


var descriptors = !fails(function () {
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

var objectPropertyIsEnumerable = {
	f: f
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString = {}.toString;

var classofRaw = function (it) {
  return toString.call(it).slice(8, -1);
};

var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings




var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


var toPrimitive = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var hasOwnProperty = {}.hasOwnProperty;

var has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var document$1 = global_1.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document$1) && isObject(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

// Thank's IE8 for his funny defineProperty


var ie8DomDefine = !descriptors && !fails(function () {
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (ie8DomDefine) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
};

var objectGetOwnPropertyDescriptor = {
	f: f$1
};

var anObject = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty

var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var objectDefineProperty = {
	f: f$2
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var setGlobal = function (key, value) {
  try {
    createNonEnumerableProperty(global_1, key, value);
  } catch (error) {
    global_1[key] = value;
  }

  return value;
};

var SHARED = '__core-js_shared__';
var store = global_1[SHARED] || setGlobal(SHARED, {});
var sharedStore = store;

var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

if (typeof sharedStore.inspectSource != 'function') {
  sharedStore.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap = global_1.WeakMap;
var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

var shared = createCommonjsModule(function (module) {
(module.exports = function (key, value) {
  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode:  'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var postfix = Math.random();

var uid = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var keys = shared('keys');

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys = {};

var WeakMap$1 = global_1.WeakMap;
var set, get, has$1;

var enforce = function (it) {
  return has$1(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (nativeWeakMap) {
  var store$1 = new WeakMap$1();
  var wmget = store$1.get;
  var wmhas = store$1.has;
  var wmset = store$1.set;

  set = function (it, metadata) {
    wmset.call(store$1, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget.call(store$1, it) || {};
  };

  has$1 = function (it) {
    return wmhas.call(store$1, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;

  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return has(it, STATE) ? it[STATE] : {};
  };

  has$1 = function (it) {
    return has(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has$1,
  enforce: enforce,
  getterFor: getterFor
};

var redefine = createCommonjsModule(function (module) {
var getInternalState = internalState.get;
var enforceInternalState = internalState.enforce;
var TEMPLATE = String(String).split('String');
(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;

  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }

  if (O === global_1) {
    if (simple) O[key] = value;else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});
});

var path = global_1;

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace]) : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
};

var ceil = Math.ceil;
var floor = Math.floor; // `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger

var toInteger = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

var min = Math.min; // `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength

var toLength = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

// `Array.prototype.{ indexOf, includes }` methods implementation


var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var indexOf = arrayIncludes.indexOf;



var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key); // Don't enum bug & hidden keys


  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }

  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames

var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys$1);
};

var objectGetOwnPropertyNames = {
	f: f$3
};

var f$4 = Object.getOwnPropertySymbols;

var objectGetOwnPropertySymbols = {
	f: f$4
};

// all object keys, includes non-enumerable and symbols


var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var copyConstructorProperties = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
var isForced_1 = isForced;

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;










/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/


var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global_1;
  } else if (STATIC) {
    target = global_1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global_1[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

var useSymbolAsUid = nativeSymbol // eslint-disable-next-line no-undef
&& !Symbol.sham // eslint-disable-next-line no-undef
&& typeof Symbol.iterator == 'symbol';

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray


var isArray = Array.isArray || function isArray(arg) {
  return classofRaw(arg) == 'Array';
};

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject


var toObject = function (argument) {
  return Object(requireObjectCoercible(argument));
};

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys


var objectKeys = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties


var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);

  return O;
};

var html = getBuiltIn('document', 'documentElement');

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () {
  /* empty */
};

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;

  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];

  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true; // `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create

var objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : objectDefineProperties(result, Properties);
};

var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;

var toString$1 = {}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


var f$5 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : nativeGetOwnPropertyNames(toIndexedObject(it));
};

var objectGetOwnPropertyNamesExternal = {
	f: f$5
};

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global_1.Symbol;
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  }

  return WellKnownSymbolsStore[name];
};

var f$6 = wellKnownSymbol;

var wellKnownSymbolWrapped = {
	f: f$6
};

var defineProperty = objectDefineProperty.f;

var defineWellKnownSymbol = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wellKnownSymbolWrapped.f(NAME)
  });
};

var defineProperty$1 = objectDefineProperty.f;





var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var setToStringTag = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty$1(it, TO_STRING_TAG, {
      configurable: true,
      value: TAG
    });
  }
};

var aFunction$1 = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

// optional / simple context binding


var functionBindContext = function (fn, that, length) {
  aFunction$1(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate = function (originalArray, length) {
  var C;

  if (isArray(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation

var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = indexedObject(O);
    var boundFunction = functionBindContext(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);

      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
            case 3:
              return true;
            // some

            case 5:
              return value;
            // find

            case 6:
              return index;
            // findIndex

            case 2:
              push.call(target, value);
            // filter
          } else if (IS_EVERY) return false; // every
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod$1(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod$1(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod$1(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod$1(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod$1(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$1(6)
};

var $forEach = arrayIteration.forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE$1 = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = internalState.set;
var getInternalState = internalState.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE$1];
var $Symbol = global_1.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var nativeDefineProperty$1 = objectDefineProperty.f;
var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore$1 = shared('wks');
var QObject = global_1.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDescriptor = descriptors && fails(function () {
  return objectCreate(nativeDefineProperty$1({}, 'a', {
    get: function () {
      return nativeDefineProperty$1(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty$1(O, P, Attributes);

  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty$1(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty$1;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!descriptors) symbol.description = description;
  return symbol;
};

var isSymbol = useSymbolAsUid ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);

  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = objectCreate(Attributes, {
        enumerable: createPropertyDescriptor(0, false)
      });
    }

    return setSymbolDescriptor(O, key, Attributes);
  }

  return nativeDefineProperty$1(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!descriptors || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable$1.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);

  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }

  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames$1(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
}; // `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor


if (!nativeSymbol) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);

    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };

    if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
      configurable: true,
      set: setter
    });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
    return getInternalState(this).tag;
  });
  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });
  objectPropertyIsEnumerable.f = $propertyIsEnumerable;
  objectDefineProperty.f = $defineProperty;
  objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
  objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

  wellKnownSymbolWrapped.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (descriptors) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });

    {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
        unsafe: true
      });
    }
  }
}

_export({
  global: true,
  wrap: true,
  forced: !nativeSymbol,
  sham: !nativeSymbol
}, {
  Symbol: $Symbol
});
$forEach(objectKeys(WellKnownSymbolsStore$1), function (name) {
  defineWellKnownSymbol(name);
});
_export({
  target: SYMBOL,
  stat: true,
  forced: !nativeSymbol
}, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () {
    USE_SETTER = true;
  },
  useSimple: function () {
    USE_SETTER = false;
  }
});
_export({
  target: 'Object',
  stat: true,
  forced: !nativeSymbol,
  sham: !descriptors
}, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});
_export({
  target: 'Object',
  stat: true,
  forced: !nativeSymbol
}, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443

_export({
  target: 'Object',
  stat: true,
  forced: fails(function () {
    objectGetOwnPropertySymbols.f(1);
  })
}, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return objectGetOwnPropertySymbols.f(toObject(it));
  }
}); // `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify

if ($stringify) {
  var FORCED_JSON_STRINGIFY = !nativeSymbol || fails(function () {
    var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

    return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
    || $stringify({
      a: symbol
    }) != '{}' // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
  });
  _export({
    target: 'JSON',
    stat: true,
    forced: FORCED_JSON_STRINGIFY
  }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;

      while (arguments.length > index) args.push(arguments[index++]);

      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
} // `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive


if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
} // `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag


setToStringTag($Symbol, SYMBOL);
hiddenKeys[HIDDEN] = true;

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var process = global_1.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

var SPECIES$1 = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return engineV8Version >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES$1] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var defineProperty$2 = Object.defineProperty;
var cache = {};

var thrower = function (it) {
  throw it;
};

var arrayMethodUsesToLength = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;
  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !descriptors) return true;
    var O = {
      length: -1
    };
    if (ACCESSORS) defineProperty$2(O, 1, {
      enumerable: true,
      get: thrower
    });else O[1] = 1;
    method.call(O, argument0, argument1);
  });
};

var $filter = arrayIteration.filter;





var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // Edge 14- issue

var USES_TO_LENGTH = arrayMethodUsesToLength('filter'); // `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species

_export({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
}, {
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var arrayMethodIsStrict = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

var $forEach$1 = arrayIteration.forEach;





var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH$1 = arrayMethodUsesToLength('forEach'); // `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach

var arrayForEach = !STRICT_METHOD || !USES_TO_LENGTH$1 ? function forEach(callbackfn
/* , thisArg */
) {
  return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach


_export({
  target: 'Array',
  proto: true,
  forced: [].forEach != arrayForEach
}, {
  forEach: arrayForEach
});

var nativeGetOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;



var FAILS_ON_PRIMITIVES = fails(function () {
  nativeGetOwnPropertyDescriptor$2(1);
});
var FORCED = !descriptors || FAILS_ON_PRIMITIVES; // `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

_export({
  target: 'Object',
  stat: true,
  forced: FORCED,
  sham: !descriptors
}, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor$2(toIndexedObject(it), key);
  }
});

var createProperty = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors


_export({
  target: 'Object',
  stat: true,
  sham: !descriptors
}, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;

    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }

    return result;
  }
});

var FAILS_ON_PRIMITIVES$1 = fails(function () {
  objectKeys(1);
}); // `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys

_export({
  target: 'Object',
  stat: true,
  forced: FAILS_ON_PRIMITIVES$1
}, {
  keys: function keys(it) {
    return objectKeys(toObject(it));
  }
});

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

for (var COLLECTION_NAME in domIterables) {
  var Collection = global_1[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

  if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
  } catch (error) {
    CollectionPrototype.forEach = arrayForEach;
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG$1] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag'); // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof = toStringTagSupport ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$2)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring


var objectToString = toStringTagSupport ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring


if (!toStringTagSupport) {
  redefine(Object.prototype, 'toString', objectToString, {
    unsafe: true
  });
}

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags


var regexpFlags = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];
var NOT_GENERIC = fails(function () {
  return nativeToString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
}); // FF44- RegExp#toString has a wrong name

var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring

if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
    return '/' + p + '/' + f;
  }, {
    unsafe: true
  });
}

var $map = arrayIteration.map;





var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('map'); // FF49- issue

var USES_TO_LENGTH$2 = arrayMethodUsesToLength('map'); // `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species

_export({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT$1 || !USES_TO_LENGTH$2
}, {
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// Array of country objects for the flag dropdown.
// Here is the criteria for the plugin to support a given country/territory
// - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
// - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
// - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml
// Each country array has the following information:
// [
//    Country name,
//    iso2 code,
//    International dial code,
//    Order (if >1 country with same dial code),
//    Area codes
// ]
var allCountries = [['Afghanistan (‫افغانستان‬‎)', 'af', '93'], ['Albania (Shqipëri)', 'al', '355'], ['Algeria (‫الجزائر‬‎)', 'dz', '213'], ['American Samoa', 'as', '1684'], ['Andorra', 'ad', '376'], ['Angola', 'ao', '244'], ['Anguilla', 'ai', '1264'], ['Antigua and Barbuda', 'ag', '1268'], ['Argentina', 'ar', '54'], ['Armenia (Հայաստան)', 'am', '374'], ['Aruba', 'aw', '297'], ['Australia', 'au', '61', 0], ['Austria (Österreich)', 'at', '43'], ['Azerbaijan (Azərbaycan)', 'az', '994'], ['Bahamas', 'bs', '1242'], ['Bahrain (‫البحرين‬‎)', 'bh', '973'], ['Bangladesh (বাংলাদেশ)', 'bd', '880'], ['Barbados', 'bb', '1246'], ['Belarus (Беларусь)', 'by', '375'], ['Belgium (België)', 'be', '32'], ['Belize', 'bz', '501'], ['Benin (Bénin)', 'bj', '229'], ['Bermuda', 'bm', '1441'], ['Bhutan (འབྲུག)', 'bt', '975'], ['Bolivia', 'bo', '591'], ['Bosnia and Herzegovina (Босна и Херцеговина)', 'ba', '387'], ['Botswana', 'bw', '267'], ['Brazil (Brasil)', 'br', '55'], ['British Indian Ocean Territory', 'io', '246'], ['British Virgin Islands', 'vg', '1284'], ['Brunei', 'bn', '673'], ['Bulgaria (България)', 'bg', '359'], ['Burkina Faso', 'bf', '226'], ['Burundi (Uburundi)', 'bi', '257'], ['Cambodia (កម្ពុជា)', 'kh', '855'], ['Cameroon (Cameroun)', 'cm', '237'], ['Canada', 'ca', '1', 1, ['204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416', '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587', '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905']], ['Cape Verde (Kabu Verdi)', 'cv', '238'], ['Caribbean Netherlands', 'bq', '599', 1], ['Cayman Islands', 'ky', '1345'], ['Central African Republic (République centrafricaine)', 'cf', '236'], ['Chad (Tchad)', 'td', '235'], ['Chile', 'cl', '56'], ['China (中国)', 'cn', '86'], ['Christmas Island', 'cx', '61', 2], ['Cocos (Keeling) Islands', 'cc', '61', 1], ['Colombia', 'co', '57'], ['Comoros (‫جزر القمر‬‎)', 'km', '269'], ['Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', 'cd', '243'], ['Congo (Republic) (Congo-Brazzaville)', 'cg', '242'], ['Cook Islands', 'ck', '682'], ['Costa Rica', 'cr', '506'], ['Côte d’Ivoire', 'ci', '225'], ['Croatia (Hrvatska)', 'hr', '385'], ['Cuba', 'cu', '53'], ['Curaçao', 'cw', '599', 0], ['Cyprus (Κύπρος)', 'cy', '357'], ['Czech Republic (Česká republika)', 'cz', '420'], ['Denmark (Danmark)', 'dk', '45'], ['Djibouti', 'dj', '253'], ['Dominica', 'dm', '1767'], ['Dominican Republic (República Dominicana)', 'do', '1', 2, ['809', '829', '849']], ['Ecuador', 'ec', '593'], ['Egypt (‫مصر‬‎)', 'eg', '20'], ['El Salvador', 'sv', '503'], ['Equatorial Guinea (Guinea Ecuatorial)', 'gq', '240'], ['Eritrea', 'er', '291'], ['Estonia (Eesti)', 'ee', '372'], ['Ethiopia', 'et', '251'], ['Falkland Islands (Islas Malvinas)', 'fk', '500'], ['Faroe Islands (Føroyar)', 'fo', '298'], ['Fiji', 'fj', '679'], ['Finland (Suomi)', 'fi', '358', 0], ['France', 'fr', '33'], ['French Guiana (Guyane française)', 'gf', '594'], ['French Polynesia (Polynésie française)', 'pf', '689'], ['Gabon', 'ga', '241'], ['Gambia', 'gm', '220'], ['Georgia (საქართველო)', 'ge', '995'], ['Germany (Deutschland)', 'de', '49'], ['Ghana (Gaana)', 'gh', '233'], ['Gibraltar', 'gi', '350'], ['Greece (Ελλάδα)', 'gr', '30'], ['Greenland (Kalaallit Nunaat)', 'gl', '299'], ['Grenada', 'gd', '1473'], ['Guadeloupe', 'gp', '590', 0], ['Guam', 'gu', '1671'], ['Guatemala', 'gt', '502'], ['Guernsey', 'gg', '44', 1], ['Guinea (Guinée)', 'gn', '224'], ['Guinea-Bissau (Guiné Bissau)', 'gw', '245'], ['Guyana', 'gy', '592'], ['Haiti', 'ht', '509'], ['Honduras', 'hn', '504'], ['Hong Kong (香港)', 'hk', '852'], ['Hungary (Magyarország)', 'hu', '36'], ['Iceland (Ísland)', 'is', '354'], ['India (भारत)', 'in', '91'], ['Indonesia', 'id', '62'], ['Iran (‫ایران‬‎)', 'ir', '98'], ['Iraq (‫العراق‬‎)', 'iq', '964'], ['Ireland', 'ie', '353'], ['Isle of Man', 'im', '44', 2], ['Israel (‫ישראל‬‎)', 'il', '972'], ['Italy (Italia)', 'it', '39', 0], ['Jamaica', 'jm', '1876'], ['Japan (日本)', 'jp', '81'], ['Jersey', 'je', '44', 3], ['Jordan (‫الأردن‬‎)', 'jo', '962'], ['Kazakhstan (Казахстан)', 'kz', '7', 1], ['Kenya', 'ke', '254'], ['Kiribati', 'ki', '686'], ['Kosovo', 'xk', '383'], ['Kuwait (‫الكويت‬‎)', 'kw', '965'], ['Kyrgyzstan (Кыргызстан)', 'kg', '996'], ['Laos (ລາວ)', 'la', '856'], ['Latvia (Latvija)', 'lv', '371'], ['Lebanon (‫لبنان‬‎)', 'lb', '961'], ['Lesotho', 'ls', '266'], ['Liberia', 'lr', '231'], ['Libya (‫ليبيا‬‎)', 'ly', '218'], ['Liechtenstein', 'li', '423'], ['Lithuania (Lietuva)', 'lt', '370'], ['Luxembourg', 'lu', '352'], ['Macau (澳門)', 'mo', '853'], ['Macedonia (FYROM) (Македонија)', 'mk', '389'], ['Madagascar (Madagasikara)', 'mg', '261'], ['Malawi', 'mw', '265'], ['Malaysia', 'my', '60'], ['Maldives', 'mv', '960'], ['Mali', 'ml', '223'], ['Malta', 'mt', '356'], ['Marshall Islands', 'mh', '692'], ['Martinique', 'mq', '596'], ['Mauritania (‫موريتانيا‬‎)', 'mr', '222'], ['Mauritius (Moris)', 'mu', '230'], ['Mayotte', 'yt', '262', 1], ['Mexico (México)', 'mx', '52'], ['Micronesia', 'fm', '691'], ['Moldova (Republica Moldova)', 'md', '373'], ['Monaco', 'mc', '377'], ['Mongolia (Монгол)', 'mn', '976'], ['Montenegro (Crna Gora)', 'me', '382'], ['Montserrat', 'ms', '1664'], ['Morocco (‫المغرب‬‎)', 'ma', '212', 0], ['Mozambique (Moçambique)', 'mz', '258'], ['Myanmar (Burma) (မြန်မာ)', 'mm', '95'], ['Namibia (Namibië)', 'na', '264'], ['Nauru', 'nr', '674'], ['Nepal (नेपाल)', 'np', '977'], ['Netherlands (Nederland)', 'nl', '31'], ['New Caledonia (Nouvelle-Calédonie)', 'nc', '687'], ['New Zealand', 'nz', '64'], ['Nicaragua', 'ni', '505'], ['Niger (Nijar)', 'ne', '227'], ['Nigeria', 'ng', '234'], ['Niue', 'nu', '683'], ['Norfolk Island', 'nf', '672'], ['North Korea (조선 민주주의 인민 공화국)', 'kp', '850'], ['Northern Mariana Islands', 'mp', '1670'], ['Norway (Norge)', 'no', '47', 0], ['Oman (‫عُمان‬‎)', 'om', '968'], ['Pakistan (‫پاکستان‬‎)', 'pk', '92'], ['Palau', 'pw', '680'], ['Palestine (‫فلسطين‬‎)', 'ps', '970'], ['Panama (Panamá)', 'pa', '507'], ['Papua New Guinea', 'pg', '675'], ['Paraguay', 'py', '595'], ['Peru (Perú)', 'pe', '51'], ['Philippines', 'ph', '63'], ['Poland (Polska)', 'pl', '48'], ['Portugal', 'pt', '351'], ['Puerto Rico', 'pr', '1', 3, ['787', '939']], ['Qatar (‫قطر‬‎)', 'qa', '974'], ['Réunion (La Réunion)', 're', '262', 0], ['Romania (România)', 'ro', '40'], ['Russia (Россия)', 'ru', '7', 0], ['Rwanda', 'rw', '250'], ['Saint Barthélemy', 'bl', '590', 1], ['Saint Helena', 'sh', '290'], ['Saint Kitts and Nevis', 'kn', '1869'], ['Saint Lucia', 'lc', '1758'], ['Saint Martin (Saint-Martin (partie française))', 'mf', '590', 2], ['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm', '508'], ['Saint Vincent and the Grenadines', 'vc', '1784'], ['Samoa', 'ws', '685'], ['San Marino', 'sm', '378'], ['São Tomé and Príncipe (São Tomé e Príncipe)', 'st', '239'], ['Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa', '966'], ['Senegal (Sénégal)', 'sn', '221'], ['Serbia (Србија)', 'rs', '381'], ['Seychelles', 'sc', '248'], ['Sierra Leone', 'sl', '232'], ['Singapore', 'sg', '65'], ['Sint Maarten', 'sx', '1721'], ['Slovakia (Slovensko)', 'sk', '421'], ['Slovenia (Slovenija)', 'si', '386'], ['Solomon Islands', 'sb', '677'], ['Somalia (Soomaaliya)', 'so', '252'], ['South Africa', 'za', '27'], ['South Korea (대한민국)', 'kr', '82'], ['South Sudan (‫جنوب السودان‬‎)', 'ss', '211'], ['Spain (España)', 'es', '34'], ['Sri Lanka (ශ්‍රී ලංකාව)', 'lk', '94'], ['Sudan (‫السودان‬‎)', 'sd', '249'], ['Suriname', 'sr', '597'], ['Svalbard and Jan Mayen', 'sj', '47', 1], ['Swaziland', 'sz', '268'], ['Sweden (Sverige)', 'se', '46'], ['Switzerland (Schweiz)', 'ch', '41'], ['Syria (‫سوريا‬‎)', 'sy', '963'], ['Taiwan (台灣)', 'tw', '886'], ['Tajikistan', 'tj', '992'], ['Tanzania', 'tz', '255'], ['Thailand (ไทย)', 'th', '66'], ['Timor-Leste', 'tl', '670'], ['Togo', 'tg', '228'], ['Tokelau', 'tk', '690'], ['Tonga', 'to', '676'], ['Trinidad and Tobago', 'tt', '1868'], ['Tunisia (‫تونس‬‎)', 'tn', '216'], ['Turkey (Türkiye)', 'tr', '90'], ['Turkmenistan', 'tm', '993'], ['Turks and Caicos Islands', 'tc', '1649'], ['Tuvalu', 'tv', '688'], ['U.S. Virgin Islands', 'vi', '1340'], ['Uganda', 'ug', '256'], ['Ukraine (Україна)', 'ua', '380'], ['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae', '971'], ['United Kingdom', 'gb', '44', 0], ['United States', 'us', '1', 0], ['Uruguay', 'uy', '598'], ['Uzbekistan (Oʻzbekiston)', 'uz', '998'], ['Vanuatu', 'vu', '678'], ['Vatican City (Città del Vaticano)', 'va', '39', 1], ['Venezuela', 've', '58'], ['Vietnam (Việt Nam)', 'vn', '84'], ['Wallis and Futuna (Wallis-et-Futuna)', 'wf', '681'], ['Western Sahara (‫الصحراء الغربية‬‎)', 'eh', '212', 1], ['Yemen (‫اليمن‬‎)', 'ye', '967'], ['Zambia', 'zm', '260'], ['Zimbabwe', 'zw', '263'], ['Åland Islands', 'ax', '358', 1]];
var allCountries$1 = allCountries.map(function (country) {
  return {
    name: country[0],
    iso2: country[1].toUpperCase(),
    dialCode: country[2],
    priority: country[3] || 0,
    areaCodes: country[4] || null
  };
});

function getCountry() {
  return fetch('https://ip2c.org/s').then(function (response) {
    return response.text();
  }).then(function (response) {
    var result = (response || '').toString();

    if (!result || result[0] !== '1') {
      throw new Error('unable to fetch the country');
    }

    return result.substr(2, 2);
  });
} // Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/

function setCaretPosition(ctrl, pos) {
  // Modern browsers
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos); // IE8 and below
  } else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}
var defaultOptions = {
  allCountries: allCountries$1,
  autocomplete: 'on',
  autofocus: false,
  customValidate: false,
  defaultCountry: '',
  disabled: false,
  disabledFetchingCountry: false,
  dropdownOptions: {},
  dynamicPlaceholder: false,
  enabledCountryCode: false,
  enabledFlags: true,
  ignoredCountries: [],
  inputClasses: '',
  inputId: '',
  inputOptions: {},
  invalidMsg: '',
  maxLen: 25,
  mode: '',
  name: 'telephone',
  onlyCountries: [],
  placeholder: 'Enter a phone number',
  preferredCountries: [],
  readonly: false,
  required: false,
  validCharactersOnly: false,
  wrapperClasses: ''
};
var utils = {
  options: _objectSpread2({}, defaultOptions)
};

var $indexOf = arrayIncludes.indexOf;





var nativeIndexOf = [].indexOf;
var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD$1 = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH$3 = arrayMethodUsesToLength('indexOf', {
  ACCESSORS: true,
  1: 0
}); // `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof

_export({
  target: 'Array',
  proto: true,
  forced: NEGATIVE_ZERO || !STRICT_METHOD$1 || !USES_TO_LENGTH$3
}, {
  indexOf: function indexOf(searchElement
  /* , fromIndex = 0 */
  ) {
    return NEGATIVE_ZERO // convert -0 to +0
    ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var defineProperty$3 = objectDefineProperty.f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name'; // Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name

if (descriptors && !(NAME in FunctionPrototype)) {
  defineProperty$3(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

_export({
  target: 'Array',
  proto: true,
  forced: FORCED$1
}, {
  concat: function concat(arg) {
    // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: objectCreate(null)
  });
} // add a key to Array.prototype[@@unscopables]


var addToUnscopables = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var $find = arrayIteration.find;





var FIND = 'find';
var SKIPS_HOLES = true;
var USES_TO_LENGTH$4 = arrayMethodUsesToLength(FIND); // Shouldn't skip holes

if (FIND in []) Array(1)[FIND](function () {
  SKIPS_HOLES = false;
}); // `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find

_export({
  target: 'Array',
  proto: true,
  forced: SKIPS_HOLES || !USES_TO_LENGTH$4
}, {
  find: function find(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables(FIND);

var $findIndex = arrayIteration.findIndex;





var FIND_INDEX = 'findIndex';
var SKIPS_HOLES$1 = true;
var USES_TO_LENGTH$5 = arrayMethodUsesToLength(FIND_INDEX); // Shouldn't skip holes

if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () {
  SKIPS_HOLES$1 = false;
}); // `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex

_export({
  target: 'Array',
  proto: true,
  forced: SKIPS_HOLES$1 || !USES_TO_LENGTH$5
}, {
  findIndex: function findIndex(callbackfn
  /* , that = undefined */
  ) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables(FIND_INDEX);

var $includes = arrayIncludes.includes;





var USES_TO_LENGTH$6 = arrayMethodUsesToLength('indexOf', {
  ACCESSORS: true,
  1: 0
}); // `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes

_export({
  target: 'Array',
  proto: true,
  forced: !USES_TO_LENGTH$6
}, {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('includes');

var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH$7 = arrayMethodUsesToLength('slice', {
  ACCESSORS: true,
  0: 0,
  1: 2
});
var SPECIES$2 = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max$1 = Math.max; // `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects

_export({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT$2 || !USES_TO_LENGTH$7
}, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

    var Constructor, result, n;

    if (isArray(O)) {
      Constructor = O.constructor; // cross-realm fallback

      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES$2];
        if (Constructor === null) Constructor = undefined;
      }

      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }

    result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));

    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);

    result.length = n;
    return result;
  }
});

var $some = arrayIteration.some;





var STRICT_METHOD$2 = arrayMethodIsStrict('some');
var USES_TO_LENGTH$8 = arrayMethodUsesToLength('some'); // `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some

_export({
  target: 'Array',
  proto: true,
  forced: !STRICT_METHOD$2 || !USES_TO_LENGTH$8
}, {
  some: function some(callbackfn
  /* , thisArg */
  ) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var aPossiblePrototype = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  }

  return it;
};

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */


var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;

  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

// makes subclassing work correct for wrapped built-ins


var inheritIfRequired = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if ( // it can work only with native `setPrototypeOf`
  objectSetPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) objectSetPrototypeOf($this, NewTargetPrototype);
  return $this;
};

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

var createMethod$2 = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod$2(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod$2(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod$2(3)
};

var getOwnPropertyNames = objectGetOwnPropertyNames.f;

var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;

var defineProperty$4 = objectDefineProperty.f;

var trim = stringTrim.trim;

var NUMBER = 'Number';
var NativeNumber = global_1[NUMBER];
var NumberPrototype = NativeNumber.prototype; // Opera ~12 has broken Object#toString

var BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER; // `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber

var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;

  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);

    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal of /^0b[01]+$/i

        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        // fast equal of /^0o[0-7]+$/i

        default:
          return +it;
      }

      digits = it.slice(2);
      length = digits.length;

      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index); // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols

        if (code < 48 || code > maxCode) return NaN;
      }

      return parseInt(digits, radix);
    }
  }

  return +it;
}; // `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor


if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper // check on 1..constructor(foo) case
    && (BROKEN_CLASSOF ? fails(function () {
      NumberPrototype.valueOf.call(dummy);
    }) : classofRaw(dummy) != NUMBER) ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };

  for (var keys$1 = descriptors ? getOwnPropertyNames(NativeNumber) : ( // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES2015 (in case, if modules with ES2015 Number statics required before):
  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys$1.length > j; j++) {
    if (has(NativeNumber, key = keys$1[j]) && !has(NumberWrapper, key)) {
      defineProperty$4(NumberWrapper, key, getOwnPropertyDescriptor$2(NativeNumber, key));
    }
  }

  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global_1, NUMBER, NumberWrapper);
}

var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp

var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
};

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.


function RE(s, f) {
  return RegExp(s, f);
}

var UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});
var BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
	UNSUPPORTED_Y: UNSUPPORTED_Y,
	BROKEN_CARET: BROKEN_CARET
};

var SPECIES$3 = wellKnownSymbol('species');

var setSpecies = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = objectDefineProperty.f;

  if (descriptors && Constructor && !Constructor[SPECIES$3]) {
    defineProperty(Constructor, SPECIES$3, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};

var defineProperty$5 = objectDefineProperty.f;

var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;











var setInternalState$1 = internalState.set;





var MATCH$1 = wellKnownSymbol('match');
var NativeRegExp = global_1.RegExp;
var RegExpPrototype$1 = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g; // "new" should create a new object, old webkit bug

var CORRECT_NEW = new NativeRegExp(re1) !== re1;
var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y;
var FORCED$2 = descriptors && isForced_1('RegExp', !CORRECT_NEW || UNSUPPORTED_Y$1 || fails(function () {
  re2[MATCH$1] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})); // `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor

if (FORCED$2) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegexp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = regexpFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y$1) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);
    if (UNSUPPORTED_Y$1 && sticky) setInternalState$1(result, {
      sticky: sticky
    });
    return result;
  };

  var proxy = function (key) {
    key in RegExpWrapper || defineProperty$5(RegExpWrapper, key, {
      configurable: true,
      get: function () {
        return NativeRegExp[key];
      },
      set: function (it) {
        NativeRegExp[key] = it;
      }
    });
  };

  var keys$2 = getOwnPropertyNames$1(NativeRegExp);
  var index = 0;

  while (keys$2.length > index) proxy(keys$2[index++]);

  RegExpPrototype$1.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype$1;
  redefine(global_1, 'RegExp', RegExpWrapper);
} // https://tc39.github.io/ecma262/#sec-get-regexp-@@species


setSpecies('RegExp');

var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.

var nativeReplace = String.prototype.replace;
var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var UNSUPPORTED_Y$2 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$2;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y$2 && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');

      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.

      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      } // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.


      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

var regexpExec = patchedExec;

_export({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== regexpExec
}, {
  exec: regexpExec
});

var notARegexp = function (it) {
  if (isRegexp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  }

  return it;
};

var MATCH$2 = wellKnownSymbol('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;

  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH$2] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) {
      /* empty */
    }
  }

  return false;
};

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes


_export({
  target: 'String',
  proto: true,
  forced: !correctIsRegexpLogic('includes')
}, {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~String(requireObjectCoercible(this)).indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});

var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;











var nativeStartsWith = ''.startsWith;
var min$2 = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic('startsWith'); // https://github.com/zloirock/core-js/pull/702

var MDN_POLYFILL_BUG =  !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor$3(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}(); // `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith

_export({
  target: 'String',
  proto: true,
  forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
  startsWith: function startsWith(searchString
  /* , position = 0 */
  ) {
    var that = String(requireObjectCoercible(this));
    notARegexp(searchString);
    var index = toLength(min$2(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith ? nativeStartsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }
});

var non = '\u200B\u0085\u180E'; // check that a method works with the correct list
// of whitespaces and has a correct name

var stringTrimForced = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};

var $trim = stringTrim.trim;

 // `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim


_export({
  target: 'String',
  proto: true,
  forced: stringTrimForced('trim')
}, {
  trim: function trim() {
    return $trim(this);
  }
});

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson


_export({
  target: 'URL',
  proto: true,
  enumerable: true
}, {
  toJSON: function toJSON() {
    return URL.prototype.toString.call(this);
  }
});

var defineProperty$6 = objectDefineProperty.f;



var NativeSymbol = global_1.Symbol;

if (descriptors && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || // Safari 12 bug
NativeSymbol().description !== undefined)) {
  var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
    : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;
  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty$6(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });
  _export({
    global: true,
    forced: true
  }, {
    Symbol: SymbolWrapper
  });
}

// `Symbol.asyncIterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.asynciterator


defineWellKnownSymbol('asyncIterator');

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator


defineWellKnownSymbol('iterator');

// `Symbol.toStringTag` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.tostringtag


defineWellKnownSymbol('toStringTag');

// JSON[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-json-@@tostringtag


setToStringTag(global_1.JSON, 'JSON', true);

// Math[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-math-@@tostringtag


setToStringTag(Math, 'Math', true);

var correctPrototypeGetter = !fails(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var IE_PROTO$1 = sharedKey('IE_PROTO');
var ObjectPrototype$1 = Object.prototype; // `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof

var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectPrototype$1 : null;
};

var FAILS_ON_PRIMITIVES$2 = fails(function () {
  objectGetPrototypeOf(1);
}); // `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof

_export({
  target: 'Object',
  stat: true,
  forced: FAILS_ON_PRIMITIVES$2,
  sham: !correctPrototypeGetter
}, {
  getPrototypeOf: function getPrototypeOf(it) {
    return objectGetPrototypeOf(toObject(it));
  }
});

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof


_export({
  target: 'Object',
  stat: true
}, {
  setPrototypeOf: objectSetPrototypeOf
});

// `String.prototype.{ codePointAt, at }` methods implementation


var createMethod$3 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$3(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$3(true)
};

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () {
  return this;
}; // `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object


var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

if ( !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

var iterators = {};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;









var returnThis$1 = function () {
  return this;
};

var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
    next: createPropertyDescriptor(1, next)
  });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
  iterators[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis$2 = function () {
  return this;
};

var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$1] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  if (anyNativeIterator) {
    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));

    if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
      if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
        if (objectSetPrototypeOf) {
          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
        } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$1, returnThis$2);
        }
      } // Set @@toStringTag to native iterators


      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;

    defaultIterator = function values() {
      return nativeIterator.call(this);
    };
  } // define iterator


  if ( IterablePrototype[ITERATOR$1] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
  }

  iterators[NAME] = defaultIterator; // export additional methods

  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else _export({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME
    }, methods);
  }

  return methods;
};

var charAt = stringMultibyte.charAt;





var STRING_ITERATOR = 'String Iterator';
var setInternalState$2 = internalState.set;
var getInternalState$1 = internalState.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator

defineIterator(String, 'String', function (iterated) {
  setInternalState$2(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  }); // `%StringIteratorPrototype%.next` method
  // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$1(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return {
    value: undefined,
    done: true
  };
  point = charAt(string, index);
  state.index += point.length;
  return {
    value: point,
    done: false
  };
});

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$3 = internalState.set;
var getInternalState$2 = internalState.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator

var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState$3(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind

  }); // `%ArrayIteratorPrototype%.next` method
  // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$2(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;

  if (!target || index >= target.length) {
    state.target = undefined;
    return {
      value: undefined,
      done: true
    };
  }

  if (kind == 'keys') return {
    value: index,
    done: false
  };
  if (kind == 'values') return {
    value: target[index],
    done: false
  };
  return {
    value: [index, target[index]],
    done: false
  };
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject

iterators.Arguments = iterators.Array; // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var ITERATOR$2 = wellKnownSymbol('iterator');
var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
var ArrayValues = es_array_iterator.values;

for (var COLLECTION_NAME$1 in domIterables) {
  var Collection$1 = global_1[COLLECTION_NAME$1];
  var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;

  if (CollectionPrototype$1) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype$1[ITERATOR$2] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype$1, ITERATOR$2, ArrayValues);
    } catch (error) {
      CollectionPrototype$1[ITERATOR$2] = ArrayValues;
    }

    if (!CollectionPrototype$1[TO_STRING_TAG$3]) {
      createNonEnumerableProperty(CollectionPrototype$1, TO_STRING_TAG$3, COLLECTION_NAME$1);
    }

    if (domIterables[COLLECTION_NAME$1]) for (var METHOD_NAME in es_array_iterator) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype$1[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype$1, METHOD_NAME, es_array_iterator[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype$1[METHOD_NAME] = es_array_iterator[METHOD_NAME];
      }
    }
  }
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof_1(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined$1,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined$1;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( _typeof_1(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

// call something on iterator step with safe closing on error


var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};

var ITERATOR$3 = wellKnownSymbol('iterator');
var ArrayPrototype$1 = Array.prototype; // check on default Array iterator

var isArrayIteratorMethod = function (it) {
  return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR$3] === it);
};

var ITERATOR$4 = wellKnownSymbol('iterator');

var getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$4] || it['@@iterator'] || iterators[classof(it)];
};

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from


var arrayFrom = function from(arrayLike
/* , mapfn = undefined, thisArg = undefined */
) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();

    for (; !(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);

    for (; length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }

  result.length = index;
  return result;
};

var ITERATOR$5 = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return {
        done: !!called++
      };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };

  iteratorWithReturn[ITERATOR$5] = function () {
    return this;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(iteratorWithReturn, function () {
    throw 2;
  });
} catch (error) {
  /* empty */
}

var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;

  try {
    var object = {};

    object[ITERATOR$5] = function () {
      return {
        next: function () {
          return {
            done: ITERATION_SUPPORT = true
          };
        }
      };
    };

    exec(object);
  } catch (error) {
    /* empty */
  }

  return ITERATION_SUPPORT;
};

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
}); // `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from

_export({
  target: 'Array',
  stat: true,
  forced: INCORRECT_ITERATION
}, {
  from: arrayFrom
});

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var nativeJoin = [].join;
var ES3_STRINGS = indexedObject != Object;
var STRICT_METHOD$3 = arrayMethodIsStrict('join', ','); // `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join

_export({
  target: 'Array',
  proto: true,
  forced: ES3_STRINGS || !STRICT_METHOD$3
}, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});

var min$3 = Math.min;
var nativeLastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO$1 = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD$4 = arrayMethodIsStrict('lastIndexOf'); // For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method

var USES_TO_LENGTH$9 = arrayMethodUsesToLength('indexOf', {
  ACCESSORS: true,
  1: 0
});
var FORCED$3 = NEGATIVE_ZERO$1 || !STRICT_METHOD$4 || !USES_TO_LENGTH$9; // `Array.prototype.lastIndexOf` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof

var arrayLastIndexOf = FORCED$3 ? function lastIndexOf(searchElement
/* , fromIndex = @[*-1] */
) {
  // convert -0 to +0
  if (NEGATIVE_ZERO$1) return nativeLastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min$3(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;

  for (; index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;

  return -1;
} : nativeLastIndexOf;

// `Array.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof


_export({
  target: 'Array',
  proto: true,
  forced: arrayLastIndexOf !== [].lastIndexOf
}, {
  lastIndexOf: arrayLastIndexOf
});

var SPECIES$4 = wellKnownSymbol('species');
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;

  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  };

  return ''.replace(re, '$<a>') !== '7';
}); // IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0

var REPLACE_KEEPS_$0 = function () {
  return 'a'.replace(/./, '$0') === '$0';
}();

var REPLACE = wellKnownSymbol('replace'); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string

var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }

  return false;
}(); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper


var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.

      re.constructor = {};

      re.constructor[SPECIES$4] = function () {
        return re;
      };

      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: nativeRegExpMethod.call(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: nativeMethod.call(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];
    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return regexMethod.call(string, this, arg);
    } // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return regexMethod.call(string, this);
    });
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};

var charAt$1 = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex


var advanceStringIndex = function (S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec


var regexpExecAbstract = function (R, S) {
  var exec = R.exec;

  if (typeof exec === 'function') {
    var result = exec.call(R, S);

    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }

    return result;
  }

  if (classofRaw(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};

// @@match logic


fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [// `String.prototype.match` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = requireObjectCoercible(this);
    var matcher = regexp == undefined ? undefined : regexp[MATCH];
    return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, // `RegExp.prototype[@@match]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
  function (regexp) {
    var res = maybeCallNative(nativeMatch, regexp, this);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    if (!rx.global) return regexpExecAbstract(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;

    while ((result = regexpExecAbstract(rx, S)) !== null) {
      var matchStr = String(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      n++;
    }

    return n === 0 ? null : A;
  }];
});

var max$2 = Math.max;
var min$4 = Math.min;
var floor$1 = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
}; // @@replace logic


fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
  return [// `String.prototype.replace` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
    return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
  }, // `RegExp.prototype[@@replace]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
  function (regexp, replaceValue) {
    if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;
    }

    var rx = anObject(regexp);
    var S = String(this);
    var functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);
    var global = rx.global;

    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }

    var results = [];

    while (true) {
      var result = regexpExecAbstract(rx, S);
      if (result === null) break;
      results.push(result);
      if (!global) break;
      var matchStr = String(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
    }

    var accumulatedResult = '';
    var nextSourcePosition = 0;

    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = String(result[0]);
      var position = max$2(min$4(toInteger(result.index), S.length), 0);
      var captures = []; // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

      for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));

      var namedCaptures = result.groups;

      if (functionalReplace) {
        var replacerArgs = [matched].concat(captures, position, S);
        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
        var replacement = String(replaceValue.apply(undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }

      if (position >= nextSourcePosition) {
        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }

    return accumulatedResult + S.slice(nextSourcePosition);
  }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }

    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;

      switch (ch.charAt(0)) {
        case '$':
          return '$';

        case '&':
          return matched;

        case '`':
          return str.slice(0, position);

        case "'":
          return str.slice(tailPos);

        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;

        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;

          if (n > m) {
            var f = floor$1(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }

          capture = captures[n - 1];
      }

      return capture === undefined ? '' : capture;
    });
  }
});

// `SameValue` abstract operation
// https://tc39.github.io/ecma262/#sec-samevalue
var sameValue = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

// @@search logic


fixRegexpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [// `String.prototype.search` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.search
  function search(regexp) {
    var O = requireObjectCoercible(this);
    var searcher = regexp == undefined ? undefined : regexp[SEARCH];
    return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, // `RegExp.prototype[@@search]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
  function (regexp) {
    var res = maybeCallNative(nativeSearch, regexp, this);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var previousLastIndex = rx.lastIndex;
    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
    var result = regexpExecAbstract(rx, S);
    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
    return result === null ? -1 : result.index;
  }];
});

var SPECIES$5 = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor

var speciesConstructor = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES$5]) == undefined ? defaultConstructor : aFunction$1(S);
};

var arrayPush = [].push;
var min$5 = Math.min;
var MAX_UINT32 = 0xFFFFFFFF; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

var SUPPORTS_Y = !fails(function () {
  return !RegExp(MAX_UINT32, 'y');
}); // @@split logic

fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;

  if ('abbc'.split(/(b)*/)[1] == 'c' || 'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

      if (!isRegexp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }

      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }

        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }

      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output.length > lim ? output.slice(0, lim) : output;
    }; // Chakra, V8

  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [// `String.prototype.split` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = requireObjectCoercible(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (regexp, limit) {
    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = SUPPORTS_Y ? q : 0;
      var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
      var e;

      if (z === null || (e = min$5(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
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
  }];
}, !SUPPORTS_Y);

var lib = createCommonjsModule(function (module, exports) {
(function () {
  var h,
      aa = this;

  function l(a) {
    return "string" == typeof a;
  }

  function m(a, b) {
    a = a.split(".");
    var c = aa;
    a[0] in c || !c.execScript || c.execScript("var " + a[0]);

    for (var d; a.length && (d = a.shift());) {
      a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
    }
  }

  function n(a, b) {
    function c() {}

    c.prototype = b.prototype;
    a.ya = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;

    a.Ea = function (a, c, f) {
      for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) {
        d[e - 2] = arguments[e];
      }

      return b.prototype[c].apply(a, d);
    };
  }

  function q(a, b) {
    null != a && this.a.apply(this, arguments);
  }

  q.prototype.b = "";

  q.prototype.set = function (a) {
    this.b = "" + a;
  };

  q.prototype.a = function (a, b, c) {
    this.b += String(a);
    if (null != b) for (var d = 1; d < arguments.length; d++) {
      this.b += arguments[d];
    }
    return this;
  };

  function r(a) {
    a.b = "";
  }

  q.prototype.toString = function () {
    return this.b;
  };

  var t = Array.prototype.indexOf ? function (a, b, c) {
    return Array.prototype.indexOf.call(a, b, c);
  } : function (a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (l(a)) return l(b) && 1 == b.length ? a.indexOf(b, c) : -1;

    for (; c < a.length; c++) {
      if (c in a && a[c] === b) return c;
    }

    return -1;
  },
      ba = Array.prototype.filter ? function (a, b, c) {
    return Array.prototype.filter.call(a, b, c);
  } : function (a, b, c) {
    for (var d = a.length, e = [], f = 0, g = l(a) ? a.split("") : a, k = 0; k < d; k++) {
      if (k in g) {
        var p = g[k];
        b.call(c, p, k, a) && (e[f++] = p);
      }
    }

    return e;
  },
      ca = Array.prototype.map ? function (a, b, c) {
    return Array.prototype.map.call(a, b, c);
  } : function (a, b, c) {
    for (var d = a.length, e = Array(d), f = l(a) ? a.split("") : a, g = 0; g < d; g++) {
      g in f && (e[g] = b.call(c, f[g], g, a));
    }

    return e;
  };

  function da(a) {
    return Array.prototype.concat.apply([], arguments);
  }

  function ea(a, b) {
    a.sort(b || fa);
  }

  function fa(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function ha(a) {
    var b = [],
        c = 0,
        d;

    for (d in a) {
      b[c++] = a[d];
    }

    return b;
  }

  function ia(a, b) {
    this.b = a;
    this.a = {};

    for (a = 0; a < b.length; a++) {
      var c = b[a];
      this.a[c.a] = c;
    }
  }

  function ja(a) {
    a = ha(a.a);
    ea(a, function (a, c) {
      return a.a - c.a;
    });
    return a;
  }

  function ka(a, b) {
    this.a = a;
    this.g = !!b.w;
    this.b = b.c;
    this.j = b.type;
    this.i = !1;

    switch (this.b) {
      case la:
      case ma:
      case na:
      case oa:
      case pa:
      case qa:
      case ra:
        this.i = !0;
    }

    this.f = b.defaultValue;
  }

  var ra = 1,
      qa = 2,
      la = 3,
      ma = 4,
      na = 6,
      oa = 16,
      pa = 18;

  function u() {
    this.b = {};
    this.f = this.h().a;
    this.a = this.g = null;
  }

  h = u.prototype;

  h.has = function (a) {
    return v(this, a.a);
  };

  h.get = function (a, b) {
    return w(this, a.a, b);
  };

  h.set = function (a, b) {
    x(this, a.a, b);
  };

  h.add = function (a, b) {
    sa(this, a.a, b);
  };

  function ta(a, b) {
    for (var c = ja(a.h()), d = 0; d < c.length; d++) {
      var e = c[d],
          f = e.a;

      if (v(b, f)) {
        a.a && delete a.a[e.a];
        var g = 11 == e.b || 10 == e.b;

        if (e.g) {
          e = y(b, f);

          for (var k = 0; k < e.length; k++) {
            sa(a, f, g ? e[k].clone() : e[k]);
          }
        } else e = z(b, f), g ? (g = z(a, f)) ? ta(g, e) : x(a, f, e.clone()) : x(a, f, e);
      }
    }
  }

  h.clone = function () {
    var a = new this.constructor();
    a != this && (a.b = {}, a.a && (a.a = {}), ta(a, this));
    return a;
  };

  function v(a, b) {
    return null != a.b[b];
  }

  function z(a, b) {
    var c = a.b[b];
    if (null == c) return null;

    if (a.g) {
      if (!(b in a.a)) {
        var d = a.g,
            e = a.f[b];
        if (null != c) if (e.g) {
          for (var f = [], g = 0; g < c.length; g++) {
            f[g] = d.b(e, c[g]);
          }

          c = f;
        } else c = d.b(e, c);
        return a.a[b] = c;
      }

      return a.a[b];
    }

    return c;
  }

  function w(a, b, c) {
    var d = z(a, b);
    return a.f[b].g ? d[c || 0] : d;
  }

  function A(a, b) {
    if (v(a, b)) a = w(a, b, void 0);else a: {
      a = a.f[b];
      if (void 0 === a.f) if (b = a.j, b === Boolean) a.f = !1;else if (b === Number) a.f = 0;else if (b === String) a.f = a.i ? "0" : "";else {
        a = new b();
        break a;
      }
      a = a.f;
    }
    return a;
  }

  function y(a, b) {
    return z(a, b) || [];
  }

  function B(a, b) {
    return a.f[b].g ? v(a, b) ? a.b[b].length : 0 : v(a, b) ? 1 : 0;
  }

  function x(a, b, c) {
    a.b[b] = c;
    a.a && (a.a[b] = c);
  }

  function sa(a, b, c) {
    a.b[b] || (a.b[b] = []);
    a.b[b].push(c);
    a.a && delete a.a[b];
  }

  function C(a, b) {
    var c = [],
        d;

    for (d in b) {
      0 != d && c.push(new ka(d, b[d]));
    }

    return new ia(a, c);
  }
  /*
  Protocol Buffer 2 Copyright 2008 Google Inc.
  All other code copyright its respective owners.
  Copyright (C) 2010 The Libphonenumber Authors
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  function D() {
    u.call(this);
  }

  n(D, u);
  var ua = null;

  function E() {
    u.call(this);
  }

  n(E, u);
  var va = null;

  function F() {
    u.call(this);
  }

  n(F, u);
  var wa = null;

  D.prototype.h = function () {
    var a = ua;
    a || (ua = a = C(D, {
      0: {
        name: "NumberFormat",
        ga: "i18n.phonenumbers.NumberFormat"
      },
      1: {
        name: "pattern",
        required: !0,
        c: 9,
        type: String
      },
      2: {
        name: "format",
        required: !0,
        c: 9,
        type: String
      },
      3: {
        name: "leading_digits_pattern",
        w: !0,
        c: 9,
        type: String
      },
      4: {
        name: "national_prefix_formatting_rule",
        c: 9,
        type: String
      },
      6: {
        name: "national_prefix_optional_when_formatting",
        c: 8,
        defaultValue: !1,
        type: Boolean
      },
      5: {
        name: "domestic_carrier_code_formatting_rule",
        c: 9,
        type: String
      }
    }));
    return a;
  };

  D.h = D.prototype.h;

  E.prototype.h = function () {
    var a = va;
    a || (va = a = C(E, {
      0: {
        name: "PhoneNumberDesc",
        ga: "i18n.phonenumbers.PhoneNumberDesc"
      },
      2: {
        name: "national_number_pattern",
        c: 9,
        type: String
      },
      9: {
        name: "possible_length",
        w: !0,
        c: 5,
        type: Number
      },
      10: {
        name: "possible_length_local_only",
        w: !0,
        c: 5,
        type: Number
      },
      6: {
        name: "example_number",
        c: 9,
        type: String
      }
    }));
    return a;
  };

  E.h = E.prototype.h;

  F.prototype.h = function () {
    var a = wa;
    a || (wa = a = C(F, {
      0: {
        name: "PhoneMetadata",
        ga: "i18n.phonenumbers.PhoneMetadata"
      },
      1: {
        name: "general_desc",
        c: 11,
        type: E
      },
      2: {
        name: "fixed_line",
        c: 11,
        type: E
      },
      3: {
        name: "mobile",
        c: 11,
        type: E
      },
      4: {
        name: "toll_free",
        c: 11,
        type: E
      },
      5: {
        name: "premium_rate",
        c: 11,
        type: E
      },
      6: {
        name: "shared_cost",
        c: 11,
        type: E
      },
      7: {
        name: "personal_number",
        c: 11,
        type: E
      },
      8: {
        name: "voip",
        c: 11,
        type: E
      },
      21: {
        name: "pager",
        c: 11,
        type: E
      },
      25: {
        name: "uan",
        c: 11,
        type: E
      },
      27: {
        name: "emergency",
        c: 11,
        type: E
      },
      28: {
        name: "voicemail",
        c: 11,
        type: E
      },
      29: {
        name: "short_code",
        c: 11,
        type: E
      },
      30: {
        name: "standard_rate",
        c: 11,
        type: E
      },
      31: {
        name: "carrier_specific",
        c: 11,
        type: E
      },
      33: {
        name: "sms_services",
        c: 11,
        type: E
      },
      24: {
        name: "no_international_dialling",
        c: 11,
        type: E
      },
      9: {
        name: "id",
        required: !0,
        c: 9,
        type: String
      },
      10: {
        name: "country_code",
        c: 5,
        type: Number
      },
      11: {
        name: "international_prefix",
        c: 9,
        type: String
      },
      17: {
        name: "preferred_international_prefix",
        c: 9,
        type: String
      },
      12: {
        name: "national_prefix",
        c: 9,
        type: String
      },
      13: {
        name: "preferred_extn_prefix",
        c: 9,
        type: String
      },
      15: {
        name: "national_prefix_for_parsing",
        c: 9,
        type: String
      },
      16: {
        name: "national_prefix_transform_rule",
        c: 9,
        type: String
      },
      18: {
        name: "same_mobile_and_fixed_line_pattern",
        c: 8,
        defaultValue: !1,
        type: Boolean
      },
      19: {
        name: "number_format",
        w: !0,
        c: 11,
        type: D
      },
      20: {
        name: "intl_number_format",
        w: !0,
        c: 11,
        type: D
      },
      22: {
        name: "main_country_for_code",
        c: 8,
        defaultValue: !1,
        type: Boolean
      },
      23: {
        name: "leading_digits",
        c: 9,
        type: String
      },
      26: {
        name: "leading_zero_possible",
        c: 8,
        defaultValue: !1,
        type: Boolean
      }
    }));
    return a;
  };

  F.h = F.prototype.h;

  function G() {}

  G.prototype.a = function (a) {
    new a.b();
    throw Error("Unimplemented");
  };

  G.prototype.b = function (a, b) {
    if (11 == a.b || 10 == a.b) return b instanceof u ? b : this.a(a.j.prototype.h(), b);
    if (14 == a.b) return l(b) && xa.test(b) && (a = Number(b), 0 < a) ? a : b;
    if (!a.i) return b;
    a = a.j;

    if (a === String) {
      if ("number" == typeof b) return String(b);
    } else if (a === Number && l(b) && ("Infinity" === b || "-Infinity" === b || "NaN" === b || xa.test(b))) return Number(b);

    return b;
  };

  var xa = /^-?[0-9]+$/;

  function ya() {}

  n(ya, G);

  ya.prototype.a = function (a, b) {
    a = new a.b();
    a.g = this;
    a.b = b;
    a.a = {};
    return a;
  };

  function H() {}

  n(H, ya);

  H.prototype.b = function (a, b) {
    return 8 == a.b ? !!b : G.prototype.b.apply(this, arguments);
  };

  H.prototype.a = function (a, b) {
    return H.ya.a.call(this, a, b);
  };

  function I() {
    u.call(this);
  }

  n(I, u);
  var za = null,
      Aa = {
    Da: 0,
    Ca: 1,
    Ba: 5,
    Aa: 10,
    za: 20
  };

  I.prototype.h = function () {
    var a = za;
    a || (za = a = C(I, {
      0: {
        name: "PhoneNumber",
        ga: "i18n.phonenumbers.PhoneNumber"
      },
      1: {
        name: "country_code",
        required: !0,
        c: 5,
        type: Number
      },
      2: {
        name: "national_number",
        required: !0,
        c: 4,
        type: Number
      },
      3: {
        name: "extension",
        c: 9,
        type: String
      },
      4: {
        name: "italian_leading_zero",
        c: 8,
        type: Boolean
      },
      8: {
        name: "number_of_leading_zeros",
        c: 5,
        defaultValue: 1,
        type: Number
      },
      5: {
        name: "raw_input",
        c: 9,
        type: String
      },
      6: {
        name: "country_code_source",
        c: 14,
        defaultValue: 0,
        type: Aa
      },
      7: {
        name: "preferred_domestic_carrier_code",
        c: 9,
        type: String
      }
    }));
    return a;
  };

  I.ctor = I;
  I.ctor.h = I.prototype.h;
  /*
  Copyright (C) 2010 The Libphonenumber Authors
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  var J = {
    1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),
    7: ["RU", "KZ"],
    20: ["EG"],
    27: ["ZA"],
    30: ["GR"],
    31: ["NL"],
    32: ["BE"],
    33: ["FR"],
    34: ["ES"],
    36: ["HU"],
    39: ["IT", "VA"],
    40: ["RO"],
    41: ["CH"],
    43: ["AT"],
    44: ["GB", "GG", "IM", "JE"],
    45: ["DK"],
    46: ["SE"],
    47: ["NO", "SJ"],
    48: ["PL"],
    49: ["DE"],
    51: ["PE"],
    52: ["MX"],
    53: ["CU"],
    54: ["AR"],
    55: ["BR"],
    56: ["CL"],
    57: ["CO"],
    58: ["VE"],
    60: ["MY"],
    61: ["AU", "CC", "CX"],
    62: ["ID"],
    63: ["PH"],
    64: ["NZ"],
    65: ["SG"],
    66: ["TH"],
    81: ["JP"],
    82: ["KR"],
    84: ["VN"],
    86: ["CN"],
    90: ["TR"],
    91: ["IN"],
    92: ["PK"],
    93: ["AF"],
    94: ["LK"],
    95: ["MM"],
    98: ["IR"],
    211: ["SS"],
    212: ["MA", "EH"],
    213: ["DZ"],
    216: ["TN"],
    218: ["LY"],
    220: ["GM"],
    221: ["SN"],
    222: ["MR"],
    223: ["ML"],
    224: ["GN"],
    225: ["CI"],
    226: ["BF"],
    227: ["NE"],
    228: ["TG"],
    229: ["BJ"],
    230: ["MU"],
    231: ["LR"],
    232: ["SL"],
    233: ["GH"],
    234: ["NG"],
    235: ["TD"],
    236: ["CF"],
    237: ["CM"],
    238: ["CV"],
    239: ["ST"],
    240: ["GQ"],
    241: ["GA"],
    242: ["CG"],
    243: ["CD"],
    244: ["AO"],
    245: ["GW"],
    246: ["IO"],
    247: ["AC"],
    248: ["SC"],
    249: ["SD"],
    250: ["RW"],
    251: ["ET"],
    252: ["SO"],
    253: ["DJ"],
    254: ["KE"],
    255: ["TZ"],
    256: ["UG"],
    257: ["BI"],
    258: ["MZ"],
    260: ["ZM"],
    261: ["MG"],
    262: ["RE", "YT"],
    263: ["ZW"],
    264: ["NA"],
    265: ["MW"],
    266: ["LS"],
    267: ["BW"],
    268: ["SZ"],
    269: ["KM"],
    290: ["SH", "TA"],
    291: ["ER"],
    297: ["AW"],
    298: ["FO"],
    299: ["GL"],
    350: ["GI"],
    351: ["PT"],
    352: ["LU"],
    353: ["IE"],
    354: ["IS"],
    355: ["AL"],
    356: ["MT"],
    357: ["CY"],
    358: ["FI", "AX"],
    359: ["BG"],
    370: ["LT"],
    371: ["LV"],
    372: ["EE"],
    373: ["MD"],
    374: ["AM"],
    375: ["BY"],
    376: ["AD"],
    377: ["MC"],
    378: ["SM"],
    380: ["UA"],
    381: ["RS"],
    382: ["ME"],
    383: ["XK"],
    385: ["HR"],
    386: ["SI"],
    387: ["BA"],
    389: ["MK"],
    420: ["CZ"],
    421: ["SK"],
    423: ["LI"],
    500: ["FK"],
    501: ["BZ"],
    502: ["GT"],
    503: ["SV"],
    504: ["HN"],
    505: ["NI"],
    506: ["CR"],
    507: ["PA"],
    508: ["PM"],
    509: ["HT"],
    590: ["GP", "BL", "MF"],
    591: ["BO"],
    592: ["GY"],
    593: ["EC"],
    594: ["GF"],
    595: ["PY"],
    596: ["MQ"],
    597: ["SR"],
    598: ["UY"],
    599: ["CW", "BQ"],
    670: ["TL"],
    672: ["NF"],
    673: ["BN"],
    674: ["NR"],
    675: ["PG"],
    676: ["TO"],
    677: ["SB"],
    678: ["VU"],
    679: ["FJ"],
    680: ["PW"],
    681: ["WF"],
    682: ["CK"],
    683: ["NU"],
    685: ["WS"],
    686: ["KI"],
    687: ["NC"],
    688: ["TV"],
    689: ["PF"],
    690: ["TK"],
    691: ["FM"],
    692: ["MH"],
    800: ["001"],
    808: ["001"],
    850: ["KP"],
    852: ["HK"],
    853: ["MO"],
    855: ["KH"],
    856: ["LA"],
    870: ["001"],
    878: ["001"],
    880: ["BD"],
    881: ["001"],
    882: ["001"],
    883: ["001"],
    886: ["TW"],
    888: ["001"],
    960: ["MV"],
    961: ["LB"],
    962: ["JO"],
    963: ["SY"],
    964: ["IQ"],
    965: ["KW"],
    966: ["SA"],
    967: ["YE"],
    968: ["OM"],
    970: ["PS"],
    971: ["AE"],
    972: ["IL"],
    973: ["BH"],
    974: ["QA"],
    975: ["BT"],
    976: ["MN"],
    977: ["NP"],
    979: ["001"],
    992: ["TJ"],
    993: ["TM"],
    994: ["AZ"],
    995: ["GE"],
    996: ["KG"],
    998: ["UZ"]
  },
      K = {
    AC: [, [,, "(?:[01589]\\d|[46])\\d{4}",,,,,,, [5, 6]], [,, "6[2-467]\\d{3}",,,, "62889",,, [5]], [,, "4\\d{4}",,,, "40123",,, [5]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "AC", 247, "00",,,,,,,,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "(?:0[1-9]|[1589]\\d)\\d{4}",,,, "542011",,, [6]],,, [,,,,,,,,, [-1]]],
    AD: [, [,, "(?:1|6\\d)\\d{7}|[135-9]\\d{5}",,,,,,, [6, 8, 9]], [,, "[78]\\d{5}",,,, "712345",,, [6]], [,, "690\\d{6}|[356]\\d{5}",,,, "312345",,, [6, 9]], [,, "180[02]\\d{4}",,,, "18001234",,, [8]], [,, "[19]\\d{5}",,,, "912345",,, [6]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "AD", 376, "00",,,,,,,, [[, "(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["1"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]],, [,,,,,,,,, [-1]],,, [,, "1800\\d{4}",,,,,,, [8]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AE: [, [,, "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",,,,,,, [5, 6, 7, 8, 9, 10, 11, 12]], [,, "[2-4679][2-8]\\d{6}",,,, "22345678",,, [8], [7]], [,, "5[024-68]\\d{7}",,,, "501234567",,, [9]], [,, "400\\d{6}|800\\d{2,9}",,,, "800123456"], [,, "900[02]\\d{5}",,,, "900234567",,, [9]], [,, "700[05]\\d{5}",,,, "700012345",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "AE", 971, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], [, "(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "600[25]\\d{5}",,,, "600212345",,, [9]],,, [,,,,,,,,, [-1]]],
    AF: [, [,, "[2-7]\\d{8}",,,,,,, [9], [7]], [,, "(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}",,,, "234567890",,,, [7]], [,, "7\\d{8}",,,, "701234567",,,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "AF", 93, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[1-9]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AG: [, [,, "(?:268|[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}",,,, "2684601234",,,, [7]], [,, "268(?:464|7(?:1[3-9]|[28]\\d|3[0246]|64|7[0-689]))\\d{4}",,,, "2684641234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,, "26848[01]\\d{4}",,,, "2684801234",,,, [7]], "AG", 1, "011", "1",,, "1|([457]\\d{6})$", "268$1",,,,, [,, "26840[69]\\d{4}",,,, "2684061234",,,, [7]],, "268", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AI: [, [,, "(?:264|[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "264(?:292|4(?:6[12]|9[78]))\\d{4}",,,, "2644612345",,,, [7]], [,, "264(?:235|4(?:69|76)|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}",,,, "2642351234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "AI", 1, "011", "1",,, "1|([2457]\\d{6})$", "264$1",,,,, [,, "264724\\d{4}",,,, "2647241234",,,, [7]],, "264", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AL: [, [,, "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",,,,,,, [6, 7, 8, 9], [5]], [,, "(?:[2358][16-9]\\d[2-9]|4410)\\d{4}|(?:[2358][2-5][2-9]|4(?:[2-57-9][2-9]|6\\d))\\d{5}",,,, "22345678",,, [8], [5, 6, 7]], [,, "6(?:[78][2-9]|9\\d)\\d{6}",,,, "672123456",,, [9]], [,, "800\\d{4}",,,, "8001234",,, [7]], [,, "900[1-9]\\d\\d",,,, "900123",,, [6]], [,, "808[1-9]\\d\\d",,,, "808123",,, [6]], [,, "700[2-9]\\d{4}",,,, "70021234",,, [8]], [,,,,,,,,, [-1]], "AL", 355, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], [, "(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AM: [, [,, "(?:[1-489]\\d|55|60|77)\\d{6}",,,,,,, [8], [5, 6]], [,, "(?:(?:1[0-25]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}",,,, "10123456",,,, [5, 6]], [,, "(?:33|4[1349]|55|77|88|9[13-9])\\d{6}",,,, "77123456"], [,, "800\\d{5}",,,, "80012345"], [,, "90[016]\\d{5}",,,, "90012345"], [,, "80[1-4]\\d{5}",,,, "80112345"], [,,,,,,,,, [-1]], [,, "60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|90)\\d{4}",,,, "60271234"], "AM", 374, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], [, "(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AO: [, [,, "[29]\\d{8}",,,,,,, [9]], [,, "2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}",,,, "222123456"], [,, "9[1-49]\\d{7}",,,, "923123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "AO", 244, "00",,,,,,,, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AR: [, [,, "11\\d{8}|(?:[2368]|9\\d)\\d{9}",,,,,,, [10, 11], [6, 7, 8]], [,, "3888[013-9]\\d{5}|(?:29(?:54|66)|3(?:777|865))[2-8]\\d{5}|3(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|(?:2(?:284|302|657|920)|3(?:4(?:8[27]|92)|541|755|878))[2-7]\\d{5}|(?:2(?:(?:26|62)2|32[03]|477|9(?:42|83))|3(?:329|4(?:[47]6|62|89)|564))[2-6]\\d{5}|(?:(?:11[1-8]|670)\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-7]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-7]|[235][4-6]|84)|5(?:1[2-8]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:[03][45]|[17][2-6]|[58][3-6])))\\d{6}|2(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])))[3-6]\\d{5}|(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}",,,, "1123456789",,, [10], [6, 7, 8]], [,, "93888[013-9]\\d{5}|9(?:29(?:54|66)|3(?:777|865))[2-8]\\d{5}|93(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|9(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|9(?:2(?:284|302|657|920)|3(?:4(?:8[27]|92)|541|755|878))[2-7]\\d{5}|9(?:2(?:(?:26|62)2|32[03]|477|9(?:42|83))|3(?:329|4(?:[47]6|62|89)|564))[2-6]\\d{5}|(?:675\\d|9(?:11[1-8]\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-7]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-7]|[235][4-6]|84)|5(?:1[2-8]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:[03][45]|[17][2-6]|[58][3-6]))))\\d{6}|92(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|9(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])))[3-6]\\d{5}|9(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}",,,, "91123456789",,,, [6, 7, 8]], [,, "800\\d{7}",,,, "8001234567",,, [10]], [,, "60[04579]\\d{7}",,,, "6001234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "AR", 54, "00", "0",,, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1",,, [[, "(\\d{3})", "$1", ["0|1(?:0[0-35-7]|1[02-5]|2[015]|34|4[478])|911"]], [, "(\\d{2})(\\d{4})", "$1-$2", ["[1-9]"]], [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], [, "(\\d{4})(\\d{4})", "$1-$2", ["[1-8]"]], [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1",, 1], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1",, 1], [, "(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1"], [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1"]], [[, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1",, 1], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1",, 1], [, "(\\d)(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"]], [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3-$4", ["91"]], [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3-$4", ["9"]]], [,,,,,,,,, [-1]],,, [,, "810\\d{7}",,,,,,, [10]], [,, "810\\d{7}",,,, "8101234567",,, [10]],,, [,,,,,,,,, [-1]]],
    AS: [, [,, "(?:[58]\\d\\d|684|900)\\d{7}",,,,,,, [10], [7]], [,, "6846(?:22|33|44|55|77|88|9[19])\\d{4}",,,, "6846221234",,,, [7]], [,, "684(?:2(?:48|5[2468]|72)|7(?:3[13]|70|82))\\d{4}",,,, "6847331234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "AS", 1, "011", "1",,, "1|([267]\\d{6})$", "684$1",,,,, [,,,,,,,,, [-1]],, "684", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AT: [, [,, "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",,,,,,, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [3]], [,, "1(?:11\\d|[2-9]\\d{3,11})|(?:316|463|(?:51|66|73)2)\\d{3,10}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-578]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|7[1368]|8[2457])|5(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[135-8]|5[468])|7(?:2[1-8]|35|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{4,10}",,,, "1234567890",,,, [3]], [,, "6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}",,,, "664123456",,, [7, 8, 9, 10, 11, 12, 13]], [,, "800\\d{6,10}",,,, "800123456",,, [9, 10, 11, 12, 13]], [,, "9(?:0[01]|3[019])\\d{6,10}",,,, "900123456",,, [9, 10, 11, 12, 13]], [,, "8(?:10|2[018])\\d{6,10}|828\\d{5}",,,, "810123456",,, [8, 9, 10, 11, 12, 13]], [,,,,,,,,, [-1]], [,, "5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}",,,, "780123456",,, [5, 6, 7, 8, 9, 10, 11, 12, 13]], "AT", 43, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], [, "(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], [, "(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], [, "(\\d{6})", "$1", ["1"]], [, "(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], [, "(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], [[, "(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], [, "(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], [, "(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], [, "(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], [, "(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AU: [, [,, "1(?:[0-79]\\d{7,8}|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",,,,,,, [5, 6, 7, 8, 9, 10]], [,, "8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-7]|3[2-4]|[4-6]\\d))|91(?:[0-57-9]\\d|6[0135-9])\\d)\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:6[0-8]|[78]\\d|9[02-9]))\\d{6}",,,, "212345678",,, [9], [8]], [,, "4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",,,, "412345678",,, [9]], [,, "180(?:0\\d{3}|2)\\d{3}",,,, "1800123456",,, [7, 10]], [,, "190[0-26]\\d{6}",,,, "1900123456",,, [10]], [,, "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",,,, "1300123456",,, [6, 8, 10]], [,,,,,,,,, [-1]], [,, "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",,,, "147101234",,, [9]], "AU", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0",,, "0|(183[12])",, "0011",, [[, "(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["13"]], [, "(\\d{3})(\\d{3})", "$1 $2", ["19"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["180", "1802"]], [, "(\\d{4})(\\d{3,4})", "$1 $2", ["19"]], [, "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)", "$CC ($1)"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], [[, "(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)", "$CC ($1)"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], [,, "163\\d{2,6}",,,, "1631234",,, [5, 6, 7, 8, 9]], 1,, [,, "1[38]00\\d{6}|1(?:345[0-4]|802)\\d{3}|13\\d{4}",,,,,,, [6, 7, 8, 10]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AW: [, [,, "(?:[25-79]\\d\\d|800)\\d{4}",,,,,,, [7]], [,, "5(?:2\\d|8[1-9])\\d{4}",,,, "5212345"], [,, "(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}",,,, "5601234"], [,, "800\\d{4}",,,, "8001234"], [,, "900\\d{4}",,,, "9001234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "(?:28\\d|501)\\d{4}",,,, "5011234"], "AW", 297, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AX: [, [,, "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",,,,,,, [5, 6, 7, 8, 9, 10, 11, 12]], [,, "18[1-8]\\d{3,6}",,,, "181234567",,, [6, 7, 8, 9]], [,, "(?:4[0-8]|50)\\d{4,8}",,,, "412345678",,, [6, 7, 8, 9, 10]], [,, "800\\d{4,6}",,,, "800123456",,, [7, 8, 9]], [,, "[67]00\\d{5,6}",,,, "600123456",,, [8, 9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "AX", 358, "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "0",,, "0",, "00",,,, [,,,,,,,,, [-1]],, "18", [,,,,,,,,, [-1]], [,, "20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}",,,, "10112345"],,, [,,,,,,,,, [-1]]],
    AZ: [, [,, "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",,,,,,, [9], [7]], [,, "(?:222[0-79]\\d|365(?:[0-46-9]\\d|5[0-35-9]))\\d{4}|(?:(?:1[28]|46)\\d|2(?:[045]2|1[24]|2[34]|33|6[23]))\\d{6}",,,, "123123456",,,, [7]], [,, "(?:36554|99[2-9]\\d\\d)\\d{4}|(?:[16]0|4[04]|5[015]|7[07])\\d{7}",,,, "401234567"], [,, "88\\d{7}",,,, "881234567"], [,, "900200\\d{3}",,,, "900200123"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "AZ", 994, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[1-9]"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365|46", "1[28]|2|365(?:[0-46-9]|5[0-35-9])|46"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365|46", "1[28]|2|365(?:[0-46-9]|5[0-35-9])|46"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BA: [, [,, "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",,,,,,, [8, 9], [6]], [,, "(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}",,,, "30212345",,, [8], [6]], [,, "6040[0-4]\\d{4}|6(?:03|[1-356]|44|7\\d)\\d{6}",,,, "61123456"], [,, "8[08]\\d{6}",,,, "80123456",,, [8]], [,, "9[0246]\\d{6}",,,, "90123456",,, [8]], [,, "8[12]\\d{6}",,,, "82123456",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BA", 387, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3})", "$1-$2", ["[2-9]"]], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "70(?:3[0146]|[56]0)\\d{4}",,,, "70341234",,, [8]],,, [,,,,,,,,, [-1]]],
    BB: [, [,, "(?:246|[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}",,,, "2464123456",,,, [7]], [,, "246(?:2(?:[3568]\\d|4[0-57-9])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}",,,, "2462501234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "(?:246976|900[2-9]\\d\\d)\\d{4}",,,, "9002123456",,,, [7]], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,, "24631\\d{5}",,,, "2463101234",,,, [7]], "BB", 1, "011", "1",,, "1|([2-9]\\d{6})$", "246$1",,,,, [,,,,,,,,, [-1]],, "246", [,,,,,,,,, [-1]], [,, "246(?:292|367|4(?:1[7-9]|3[01]|44|67)|7(?:36|53))\\d{4}",,,, "2464301234",,,, [7]],,, [,,,,,,,,, [-1]]],
    BD: [, [,, "1\\d{9}|2\\d{7,8}|88\\d{4,6}|(?:8[0-79]|9\\d)\\d{4,8}|(?:[346]\\d|[57])\\d{5,8}",,,,,,, [6, 7, 8, 9, 10]], [,, "(?:4(?:31\\d\\d|423)|5222)\\d{3}(?:\\d{2})?|8332[6-9]\\d\\d|(?:3(?:03[56]|224)|4(?:22[25]|653))\\d{3,4}|(?:3(?:42[47]|529|823)|4(?:027|525|65(?:28|8))|562|6257|7(?:1(?:5[3-5]|6[12]|7[156]|89)|22[589]56|32|42675|52(?:[25689](?:56|8)|[347]8)|71(?:6[1267]|75|89)|92374)|82(?:2[59]|32)56|9(?:03[23]56|23(?:256|373)|31|5(?:1|2[4589]56)))\\d{3}|(?:3(?:02[348]|22[35]|324|422)|4(?:22[67]|32[236-9]|6(?:2[46]|5[57])|953)|5526|6(?:024|6655)|81)\\d{4,5}|(?:2(?:7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|1[1-6]|2[0157-9]|3[1-69]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[0136-9]|7[0-7]|8[014-9]))|3(?:0(?:2[025-79]|3[2-4])|181|22[12]|32[2356]|824)|4(?:02[09]|22[348]|32[045]|523|6(?:27|54))|666(?:22|53)|7(?:22[57-9]|42[56]|82[35])8|8(?:0[124-9]|2(?:181|2[02-4679]8)|4[12]|[5-7]2)|9(?:[04]2|2(?:2|328)|81))\\d{4}|(?:2[45]\\d\\d|3(?:1(?:2[5-7]|[5-7])|425|822)|4(?:033|1\\d|[257]1|332|4(?:2[246]|5[25])|6(?:2[35]|56|62)|8(?:23|54)|92[2-5])|5(?:02[03489]|22[457]|32[35-79]|42[46]|6(?:[18]|53)|724|826)|6(?:023|2(?:2[2-5]|5[3-5]|8)|32[3478]|42[34]|52[47]|6(?:[18]|6(?:2[34]|5[24]))|[78]2[2-5]|92[2-6])|7(?:02|21\\d|[3-589]1|6[12]|72[24])|8(?:217|3[12]|[5-7]1)|9[24]1)\\d{5}|(?:(?:3[2-8]|5[2-57-9]|6[03-589])1|4[4689][18])\\d{5}|[59]1\\d{5}",,,, "27111234"], [,, "(?:1[13-9]\\d|644)\\d{7}|(?:3[78]|44|66)[02-9]\\d{7}",,,, "1812345678",,, [10]], [,, "80[03]\\d{7}",,,, "8001234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "96(?:0[469]|1[0-47]|3[389]|6[69]|7[78])\\d{6}",,,, "9604123456",,, [10]], "BD", 880, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], [, "(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], [, "(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]"], "0$1"], [, "(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BE: [, [,, "4\\d{8}|[1-9]\\d{7}",,,,,,, [8, 9]], [,, "80[2-8]\\d{5}|(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}",,,, "12345678",,, [8]], [,, "4[5-9]\\d{7}",,,, "470123456",,, [9]], [,, "800[1-9]\\d{4}",,,, "80012345",,, [8]], [,, "(?:70(?:2[0-57]|3[0457]|44|69|7[0579])|90(?:0[0-35-8]|1[36]|2[0-3568]|3[0135689]|4[2-68]|5[1-68]|6[0-378]|7[23568]|9[34679]))\\d{4}",,,, "90012345",,, [8]], [,, "7879\\d{4}",,,, "78791234",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BE", 32, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "78(?:0[57]|1[0458]|2[25]|3[15-8]|48|[56]0|7[078])\\d{4}",,,, "78102345",,, [8]],,, [,,,,,,,,, [-1]]],
    BF: [, [,, "[025-7]\\d{7}",,,,,,, [8]], [,, "2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}",,,, "20491234"], [,, "(?:0[127]|5[1-8]|[67]\\d)\\d{6}",,,, "70123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BF", 226, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BG: [, [,, "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",,,,,,, [6, 7, 8, 9], [4, 5]], [,, "2\\d{5,7}|(?:43[1-6]|70[1-9])\\d{4,5}|(?:[36]\\d|4[124-7]|[57][1-9]|8[1-6]|9[1-7])\\d{5,6}",,,, "2123456",,, [6, 7, 8], [4, 5]], [,, "43[07-9]\\d{5}|(?:48|8[7-9]\\d|9(?:8\\d|9[69]))\\d{6}",,,, "48123456",,, [8, 9]], [,, "800\\d{5}",,,, "80012345",,, [8]], [,, "90\\d{6}",,,, "90123456",,, [8]], [,, "700\\d{5}",,,, "70012345",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BG", 359, "00", "0",,, "0",,,, [[, "(\\d{6})", "$1", ["1"]], [, "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], [, "(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], [[, "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], [, "(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BH: [, [,, "[136-9]\\d{7}",,,,,,, [8]], [,, "(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9]|88)|9[69][69])|7(?:1(?:11|78)|7\\d\\d))\\d{4}",,,, "17001234"], [,, "(?:3(?:[1-79]\\d|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:3[03-9]|[69]\\d|7[0-6])))\\d{4}",,,, "36001234"], [,, "80\\d{6}",,,, "80123456"], [,, "(?:87|9[014578])\\d{6}",,,, "90123456"], [,, "84\\d{6}",,,, "84123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BH", 973, "00",,,,,,,, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BI: [, [,, "(?:[267]\\d|31)\\d{6}",,,,,,, [8]], [,, "22\\d{6}",,,, "22201234"], [,, "(?:29|31|6[1289]|7[125-9])\\d{6}",,,, "79561234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BI", 257, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BJ: [, [,, "(?:[2689]\\d|51)\\d{6}",,,,,,, [8]], [,, "2(?:02|1[037]|2[45]|3[68])\\d{5}",,,, "20211234"], [,, "(?:51|6\\d|9[013-9])\\d{6}",,,, "90011234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "857[58]\\d{4}",,,, "85751234"], "BJ", 229, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[25689]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "81\\d{6}",,,, "81123456"],,, [,,,,,,,,, [-1]]],
    BL: [, [,, "(?:590|69\\d|976)\\d{6}",,,,,,, [9]], [,, "590(?:2[7-9]|5[12]|87)\\d{4}",,,, "590271234"], [,, "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}",,,, "690001234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "976[01]\\d{5}",,,, "976012345"], "BL", 590, "00", "0",,, "0",,,,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BM: [, [,, "(?:441|[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "441(?:[46]\\d\\d|5(?:4\\d|60|89))\\d{4}",,,, "4414123456",,,, [7]], [,, "441(?:[2378]\\d|5[0-39])\\d{5}",,,, "4413701234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "BM", 1, "011", "1",,, "1|([2-8]\\d{6})$", "441$1",,,,, [,,,,,,,,, [-1]],, "441", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BN: [, [,, "[2-578]\\d{6}",,,,,,, [7]], [,, "22[0-7]\\d{4}|(?:2[013-9]|[34]\\d|5[0-25-9])\\d{5}",,,, "2345678"], [,, "(?:22[89]|[78]\\d\\d)\\d{4}",,,, "7123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "5[34]\\d{5}",,,, "5345678"], "BN", 673, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BO: [, [,, "(?:[2-467]\\d\\d|8001)\\d{5}",,,,,,, [8, 9], [7]], [,, "(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}",,,, "22123456",,, [8], [7]], [,, "[67]\\d{7}",,,, "71234567",,, [8]], [,, "8001[07]\\d{4}",,,, "800171234",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BO", 591, "00(?:1\\d)?", "0",,, "0(1\\d)?",,,, [[, "(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"],, "0$CC $1"], [, "(\\d{8})", "$1", ["[67]"],, "0$CC $1"], [, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"],, "0$CC $1"]],, [,,,,,,,,, [-1]],,, [,, "8001[07]\\d{4}",,,,,,, [9]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BQ: [, [,, "(?:[34]1|7\\d)\\d{5}",,,,,,, [7]], [,, "(?:318[023]|41(?:6[023]|70)|7(?:1[578]|2[05]|50)\\d)\\d{3}",,,, "7151234"], [,, "(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}",,,, "3181234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BQ", 599, "00",,,,,,,,,, [,,,,,,,,, [-1]],, "[347]", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BR: [, [,, "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",,,,,,, [8, 9, 10, 11]], [,, "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}",,,, "1123456789",,, [10], [8]], [,, "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])(?:7|9\\d)\\d{7}",,,, "11961234567",,, [10, 11], [8, 9]], [,, "800\\d{6,7}",,,, "800123456",,, [9, 10]], [,, "300\\d{6}|[59]00\\d{6,7}",,,, "300123456",,, [9, 10]], [,, "300\\d{7}|[34]00\\d{5}|4(?:02|37)0\\d{4}",,,, "40041234",,, [8, 10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BR", 55, "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "0",,, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2",,, [[, "(\\d{3,6})", "$1", ["1(?:1[25-8]|2[357-9]|3[02-68]|4[12568]|5|6[0-8]|8[015]|9[0-47-9])|321|610"]], [, "(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], [, "(\\d{4})(\\d{4})", "$1-$2", ["[2-57]", "[2357]|4(?:[0-24-9]|3(?:[0-689]|7[1-9]))"]], [, "(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], [, "(\\d{5})(\\d{4})", "$1-$2", ["9"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)", "0 $CC ($1)"], [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)", "0 $CC ($1)"]], [[, "(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], [, "(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)", "0 $CC ($1)"], [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)", "0 $CC ($1)"]], [,,,,,,,,, [-1]],,, [,, "4020\\d{4}|[34]00\\d{5}",,,,,,, [8]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BS: [, [,, "(?:242|[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}",,,, "2423456789",,,, [7]], [,, "242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}",,,, "2423591234",,,, [7]], [,, "242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456",,,, [7]], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "BS", 1, "011", "1",,, "1|([3-8]\\d{6})$", "242$1",,,,, [,,,,,,,,, [-1]],, "242", [,,,,,,,,, [-1]], [,, "242225\\d{4}",,,, "2422250123"],,, [,,,,,,,,, [-1]]],
    BT: [, [,, "[17]\\d{7}|[2-8]\\d{6}",,,,,,, [7, 8], [6]], [,, "(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}",,,, "2345678",,, [7], [6]], [,, "(?:1[67]|77)\\d{6}",,,, "17123456",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BT", 975, "00",,,,,,,, [[, "(\\d{3})(\\d{3})", "$1 $2", ["[2-7]"]], [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]], [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BW: [, [,, "90\\d{5}|(?:[2-6]|7\\d)\\d{6}",,,,,,, [7, 8]], [,, "(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[013])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}",,,, "2401234",,, [7]], [,, "77200\\d{3}|7(?:[1-6]\\d|7[013-9])\\d{5}",,,, "71123456",,, [8]], [,,,,,,,,, [-1]], [,, "90\\d{5}",,,, "9012345",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "79(?:1(?:[01]\\d|20)|2[0-2]\\d)\\d{3}",,,, "79101234",,, [8]], "BW", 267, "00",,,,,,,, [[, "(\\d{2})(\\d{5})", "$1 $2", ["90"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BY: [, [,, "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",,,,,,, [6, 7, 8, 9, 10, 11], [5]], [,, "(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}",,,, "152450911",,, [9], [5, 6, 7]], [,, "(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}",,,, "294911911",,, [9]], [,, "800\\d{3,7}|8(?:0[13]|20\\d)\\d{7}",,,, "8011234567"], [,, "(?:810|902)\\d{7}",,,, "9021234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "249\\d{6}",,,, "249123456",,, [9]], "BY", 375, "810", "8",,, "0|80?",, "8~10",, [[, "(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], [, "(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], [, "(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]],, [,,,,,,,,, [-1]],,, [,, "800\\d{3,7}|(?:8(?:0[13]|10|20\\d)|902)\\d{7}"], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BZ: [, [,, "(?:0800\\d|[2-8])\\d{6}",,,,,,, [7, 11]], [,, "(?:236|732)\\d{4}|[2-578][02]\\d{5}",,,, "2221234",,, [7]], [,, "6[0-35-7]\\d{5}",,,, "6221234",,, [7]], [,, "0800\\d{7}",,,, "08001234123",,, [11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BZ", 501, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], [, "(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CA: [, [,, "(?:[2-8]\\d|90)\\d{8}",,,,,,, [10], [7]], [,, "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|6[57])|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",,,, "5062345678",,,, [7]], [,, "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|6[57])|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",,,, "5062345678",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}",,,, "5002345678"], [,, "600[2-9]\\d{6}",,,, "6002012345"], "CA", 1, "011", "1",,, "1",,, 1,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CC: [, [,, "1(?:[0-79]\\d|8[0-24-9])\\d{7}|[148]\\d{8}|1\\d{5,7}",,,,,,, [6, 7, 8, 9, 10]], [,, "8(?:51(?:0(?:02|31|60|89)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",,,, "891621234",,, [9], [8]], [,, "4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",,,, "412345678",,, [9]], [,, "180(?:0\\d{3}|2)\\d{3}",,,, "1800123456",,, [7, 10]], [,, "190[0-26]\\d{6}",,,, "1900123456",,, [10]], [,, "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",,,, "1300123456",,, [6, 8, 10]], [,,,,,,,,, [-1]], [,, "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",,,, "147101234",,, [9]], "CC", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0",,, "0|([59]\\d{7})$", "8$1", "0011",,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CD: [, [,, "[189]\\d{8}|[1-68]\\d{6}",,,,,,, [7, 9]], [,, "12\\d{7}|[1-6]\\d{6}",,,, "1234567"], [,, "88\\d{5}|(?:8[0-2459]|9[017-9])\\d{7}",,,, "991234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CD", 243, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], [, "(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CF: [, [,, "(?:[27]\\d{3}|8776)\\d{4}",,,,,,, [8]], [,, "2[12]\\d{6}",,,, "21612345"], [,, "7[0257]\\d{6}",,,, "70012345"], [,,,,,,,,, [-1]], [,, "8776\\d{4}",,,, "87761234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CF", 236, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CG: [, [,, "222\\d{6}|(?:0\\d|80)\\d{7}",,,,,,, [9]], [,, "222[1-589]\\d{5}",,,, "222123456"], [,, "0[14-6]\\d{7}",,,, "061234567"], [,,,,,,,,, [-1]], [,, "80(?:0\\d\\d|11[0-4])\\d{4}",,,, "800123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CG", 242, "00",,,,,,,, [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CH: [, [,, "8\\d{11}|[2-9]\\d{8}",,,,,,, [9, 12]], [,, "(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}",,,, "212345678",,, [9]], [,, "7[35-9]\\d{7}",,,, "781234567",,, [9]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,, "90[016]\\d{6}",,,, "900123456",,, [9]], [,, "84[0248]\\d{6}",,,, "840123456",,, [9]], [,, "878\\d{6}",,,, "878123456",,, [9]], [,,,,,,,,, [-1]], "CH", 41, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]],, [,, "74[0248]\\d{6}",,,, "740123456",,, [9]],,, [,,,,,,,,, [-1]], [,, "5[18]\\d{7}",,,, "581234567",,, [9]],,, [,, "860\\d{9}",,,, "860123456789",,, [12]]],
    CI: [, [,, "[02-9]\\d{7}",,,,,,, [8]], [,, "(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}",,,, "21234567"], [,, "(?:2[0-3]80|97[0-3]\\d)\\d{4}|(?:0[1-9]|[457]\\d|6[014-9]|8[4-9]|95)\\d{6}",,,, "01234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CI", 225, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[02-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CK: [, [,, "[2-578]\\d{4}",,,,,,, [5]], [,, "(?:2\\d|3[13-7]|4[1-5])\\d{3}",,,, "21234"], [,, "[578]\\d{4}",,,, "71234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CK", 682, "00",,,,,,,, [[, "(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CL: [, [,, "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",,,,,,, [9, 10, 11]], [,, "2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:0\\d|1[0-35-9]|2[1-9]|3[0-2]|40)))|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}",,,, "221234567",,, [9]], [,, "2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:0\\d|1[0-35-9]|2[1-9]|3[0-2]|40)))|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}",,,, "221234567",,, [9]], [,, "(?:123|8)00\\d{6}",,,, "800123456",,, [9, 11]], [,,,,,,,,, [-1]], [,, "600\\d{7,8}",,,, "6001234567",,, [10, 11]], [,,,,,,,,, [-1]], [,, "44\\d{7}",,,, "441234567",,, [9]], "CL", 56, "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0",,,,,,, 1, [[, "(\\d{4})", "$1", ["1(?:[03-589]|21)|[29]0|78"]], [, "(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-3]"], "($1)"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]], [[, "(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-3]"], "($1)"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]], [,,,,,,,,, [-1]],,, [,, "600\\d{7,8}",,,,,,, [10, 11]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CM: [, [,, "(?:[26]\\d\\d|88)\\d{6}",,,,,,, [8, 9]], [,, "2(?:22|33)\\d{6}",,,, "222123456",,, [9]], [,, "(?:24[23]|6[5-9]\\d)\\d{6}",,,, "671234567",,, [9]], [,, "88\\d{6}",,,, "88012345",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CM", 237, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CN: [, [,, "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",,,,,,, [7, 8, 9, 10, 11, 12], [5, 6]], [,, "(?:10(?:[02-79]\\d\\d|[18](?:0[1-9]|[1-9]\\d))|21(?:[18](?:0[1-9]|[1-9]\\d)|[2-79]\\d\\d))\\d{5}|(?:43[35]|754)\\d{7,8}|8(?:078\\d{7}|51\\d{7,8})|(?:10|(?:2|85)1|43[35]|754)(?:100\\d\\d|95\\d{3,4})|(?:2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[57]|6[09])|8(?:71|98))(?:[02-8]\\d{7}|1(?:0(?:0\\d\\d(?:\\d{3})?|[1-9]\\d{5})|[1-9]\\d{6})|9(?:[0-46-9]\\d{6}|5\\d{3}(?:\\d(?:\\d{2})?)?))|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[46-9]|5[2-9]|6[47-9]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:1[236-8]|2[5-7]|3\\d|5[2-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]\\d{6}|1(?:0(?:0\\d\\d(?:\\d{2})?|[1-9]\\d{4})|[1-9]\\d{5})|9(?:[0-46-9]\\d{5}|5\\d{3,5}))",,,, "1012345678",,, [7, 8, 9, 10, 11], [5, 6]], [,, "1740[0-5]\\d{6}|1(?:[38]\\d|4[57]|5[0-35-9]|6[25-7]|7[0-35-8]|9[0135-9])\\d{8}",,,, "13123456789",,, [11]], [,, "(?:(?:10|21)8|8)00\\d{7}",,,, "8001234567",,, [10, 12]], [,, "16[08]\\d{5}",,,, "16812345",,, [8]], [,, "400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}",,,, "4001234567",,, [7, 8, 9, 10, 11], [5, 6]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CN", 86, "00|1(?:[12]\\d|79)\\d\\d00", "0",,, "0|(1(?:[12]\\d|79)\\d\\d)",, "00",, [[, "(\\d{5,6})", "$1", ["96"]], [, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1", "$CC $1"], [, "(\\d{3})(\\d{4})", "$1 $2", ["[1-9]", "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])", "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["16[08]"]], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1", "$CC $1"], [, "(\\d{4})(\\d{4})", "$1 $2", ["[1-9]", "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])", "26|3(?:[0268]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|50|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9])|(?:34|85[23])[0-8]|(?:1|58)[1-9]|(?:63|95)[06-9]|(?:33|85[23]9)[0-46-9]|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[0-8]|9[0-47-9])", "26|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|5(?:0|[23](?:[02-8]|1[1-9]|9[0-46-9]))|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9])|(?:1|58|85[23]10)[1-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"],, "$CC $1"], [, "(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1",, 1]], [[, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1", "$CC $1"], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1", "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"],, "$CC $1"], [, "(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1",, 1]], [,,,,,,,,, [-1]],,, [,, "(?:(?:10|21)8|[48])00\\d{7}|950\\d{7,8}",,,,,,, [10, 11, 12]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CO: [, [,, "(?:1\\d|3)\\d{9}|[124-8]\\d{7}",,,,,,, [8, 10, 11], [7]], [,, "[124-8][2-9]\\d{6}",,,, "12345678",,, [8], [7]], [,, "3333(?:0(?:0\\d|1[0-5])|[4-9]\\d\\d)\\d{3}|33(?:00|3[0-24-9])\\d{6}|3(?:0[0-5]|1\\d|2[0-3]|5[01]|70)\\d{7}",,,, "3211234567",,, [10]], [,, "1800\\d{7}",,,, "18001234567",,, [11]], [,, "19(?:0[01]|4[78])\\d{7}",,,, "19001234567",,, [11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CO", 57, "00(?:4(?:[14]4|56)|[579])", "0",,, "0([3579]|4(?:[14]4|56))?",,,, [[, "(\\d)(\\d{7})", "$1 $2", ["[14][2-9]|[25-8]"], "($1)", "0$CC $1"], [, "(\\d{3})(\\d{7})", "$1 $2", ["3"],, "0$CC $1"], [, "(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1"]], [[, "(\\d)(\\d{7})", "$1 $2", ["[14][2-9]|[25-8]"], "($1)", "0$CC $1"], [, "(\\d{3})(\\d{7})", "$1 $2", ["3"],, "0$CC $1"], [, "(\\d)(\\d{3})(\\d{7})", "$1 $2 $3", ["1"]]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CR: [, [,, "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",,,,,,, [8, 10]], [,, "210[7-9]\\d{4}|2(?:[024-7]\\d|1[1-9])\\d{5}",,,, "22123456",,, [8]], [,, "(?:3005\\d|6500[01])\\d{3}|(?:5[07]|6[0-4]|7[0-3]|8[3-9])\\d{6}",,,, "83123456",,, [8]], [,, "800\\d{7}",,,, "8001234567",,, [10]], [,, "90[059]\\d{7}",,,, "9001234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "(?:210[0-6]|4\\d{3}|5100)\\d{4}",,,, "40001234",,, [8]], "CR", 506, "00",,,, "(19(?:0[0-2468]|1[09]|20|66|77|99))",,,, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"],, "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"],, "$CC $1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CU: [, [,, "[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}",,,,,,, [6, 7, 8, 10], [4, 5]], [,, "(?:3[23]|48)\\d{4,6}|(?:31|4[36]|8(?:0[25]|78)\\d)\\d{6}|(?:2[1-4]|4[1257]|7\\d)\\d{5,6}",,,, "71234567",,,, [4, 5]], [,, "5\\d{7}",,,, "51234567",,, [8]], [,, "800\\d{7}",,,, "8001234567",,, [10]], [,,,,,,,,, [-1]], [,, "807\\d{7}",,,, "8071234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CU", 53, "119", "0",,, "0",,,, [[, "(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], [, "(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], [, "(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"], [, "(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CV: [, [,, "(?:[2-59]\\d\\d|800)\\d{4}",,,,,,, [7]], [,, "2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}",,,, "2211234"], [,, "(?:[34][36]|5[1-389]|9\\d)\\d{5}",,,, "9911234"], [,, "800\\d{4}",,,, "8001234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CV", 238, "0",,,,,,,, [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CW: [, [,, "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",,,,,,, [7, 8]], [,, "9(?:4(?:3[0-5]|4[14]|6\\d)|50\\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\\d|7[01]|8[57-9]))\\d{4}",,,, "94351234"], [,, "953[01]\\d{4}|9(?:5[12467]|6[5-9])\\d{5}",,,, "95181234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "60[0-2]\\d{4}",,,, "6001234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CW", 599, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]],, [,, "955\\d{5}",,,, "95581234",,, [8]], 1, "[69]", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CX: [, [,, "1(?:[0-79]\\d|8[0-24-9])\\d{7}|[148]\\d{8}|1\\d{5,7}",,,,,,, [6, 7, 8, 9, 10]], [,, "8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|235)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",,,, "891641234",,, [9], [8]], [,, "4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",,,, "412345678",,, [9]], [,, "180(?:0\\d{3}|2)\\d{3}",,,, "1800123456",,, [7, 10]], [,, "190[0-26]\\d{6}",,,, "1900123456",,, [10]], [,, "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",,,, "1300123456",,, [6, 8, 10]], [,,,,,,,,, [-1]], [,, "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",,,, "147101234",,, [9]], "CX", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0",,, "0|([59]\\d{7})$", "8$1", "0011",,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CY: [, [,, "(?:[279]\\d|[58]0)\\d{6}",,,,,,, [8]], [,, "2[2-6]\\d{6}",,,, "22345678"], [,, "9[4-79]\\d{6}",,,, "96123456"], [,, "800\\d{5}",,,, "80001234"], [,, "90[09]\\d{5}",,,, "90012345"], [,, "80[1-9]\\d{5}",,,, "80112345"], [,, "700\\d{5}",,,, "70012345"], [,,,,,,,,, [-1]], "CY", 357, "00",,,,,,,, [[, "(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "(?:50|77)\\d{6}",,,, "77123456"],,, [,,,,,,,,, [-1]]],
    CZ: [, [,, "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",,,,,,, [9, 10, 11, 12]], [,, "(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}",,,, "212345678",,, [9]], [,, "(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}",,,, "601123456",,, [9]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,, "9(?:0[05689]|76)\\d{6}",,,, "900123456",,, [9]], [,, "8[134]\\d{7}",,,, "811234567",,, [9]], [,, "70[01]\\d{6}",,,, "700123456",,, [9]], [,, "9[17]0\\d{6}",,,, "910123456",,, [9]], "CZ", 420, "00",,,,,,,, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], [, "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "9(?:5\\d|7[2-4])\\d{6}",,,, "972123456",,, [9]],,, [,, "9(?:3\\d{9}|6\\d{7,10})",,,, "93123456789"]],
    DE: [, [,, "[2579]\\d{5,14}|49(?:[05]\\d{10}|[46][1-8]\\d{4,9})|49(?:[0-25]\\d|3[1-689]|7[1-7])\\d{4,8}|49(?:[0-2579]\\d|[34][1-9]|6[0-8])\\d{3}|49\\d{3,4}|(?:1|[368]\\d|4[0-8])\\d{3,13}",,,,,,, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [2, 3]], [,, "(?:32|49[4-6]\\d)\\d{9}|49[0-7]\\d{3,9}|(?:[34]0|[68]9)\\d{3,13}|(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|3(?:[3569]\\d|4[0-79]|7[1-7]|8[1-8])|4(?:1[02-9]|[2-48]\\d|5[0-6]|6[0-8]|7[0-79])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-358]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|2\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{3,12}",,,, "30123456",,, [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [2, 3, 4]], [,, "15[0-25-9]\\d{8}|1(?:6[023]|7\\d)\\d{7,8}",,,, "15123456789",,, [10, 11]], [,, "800\\d{7,12}",,,, "8001234567890",,, [10, 11, 12, 13, 14, 15]], [,, "(?:137[7-9]|900(?:[135]|9\\d))\\d{6}",,,, "9001234567",,, [10, 11]], [,, "180\\d{5,11}|13(?:7[1-6]\\d\\d|8)\\d{4}",,,, "18012345",,, [7, 8, 9, 10, 11, 12, 13, 14]], [,, "700\\d{8}",,,, "70012345678",,, [11]], [,,,,,,,,, [-1]], "DE", 49, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], [, "(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], [, "(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], [, "(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], [, "(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], [, "(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], [, "(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], [, "(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], [, "(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], [, "(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], [, "(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], [, "(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"], [, "(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], [, "(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], [, "(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]],, [,, "16(?:4\\d{1,10}|[89]\\d{1,11})",,,, "16412345",,, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]],,, [,,,,,,,,, [-1]], [,, "18(?:1\\d{5,11}|[2-9]\\d{8})",,,, "18500123456",,, [8, 9, 10, 11, 12, 13, 14]],,, [,, "1(?:6(?:013|255|399)|7(?:(?:[015]1|[69]3)3|[2-4]55|[78]99))\\d{7,8}|15(?:(?:[03-68]00|113)\\d|2\\d55|7\\d99|9\\d33)\\d{7}",,,, "177991234567",,, [12, 13]]],
    DJ: [, [,, "(?:2\\d|77)\\d{6}",,,,,,, [8]], [,, "2(?:1[2-5]|7[45])\\d{5}",,,, "21360003"], [,, "77\\d{6}",,,, "77831001"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "DJ", 253, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    DK: [, [,, "[2-9]\\d{7}",,,,,,, [8]], [,, "(?:[2-7]\\d|8[126-9]|9[1-46-9])\\d{6}",,,, "32123456"], [,, "(?:[2-7]\\d|8[126-9]|9[1-46-9])\\d{6}",,,, "32123456"], [,, "80\\d{6}",,,, "80123456"], [,, "90\\d{6}",,,, "90123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "DK", 45, "00",,,,,,, 1, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    DM: [, [,, "(?:[58]\\d\\d|767|900)\\d{7}",,,,,,, [10], [7]], [,, "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4])\\d{4}",,,, "7674201234",,,, [7]], [,, "767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-7]|70[1-6])\\d{4}",,,, "7672251234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "DM", 1, "011", "1",,, "1|([2-7]\\d{6})$", "767$1",,,,, [,,,,,,,,, [-1]],, "767", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    DO: [, [,, "(?:[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}",,,, "8092345678",,,, [7]], [,, "8[024]9[2-9]\\d{6}",,,, "8092345678",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "DO", 1, "011", "1",,, "1",,,,,, [,,,,,,,,, [-1]],, "8[024]9", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    DZ: [, [,, "(?:[1-4]|[5-79]\\d|80)\\d{7}",,,,,,, [8, 9]], [,, "9619\\d{5}|(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d{6}",,,, "12345678"], [,, "(?:5(?:4[0-29]|5\\d|6[01])|6(?:[569]\\d|7[0-6])|7[7-9]\\d)\\d{6}",,,, "551234567",,, [9]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,, "80[3-689]1\\d{5}",,,, "808123456",,, [9]], [,, "80[12]1\\d{5}",,,, "801123456",,, [9]], [,,,,,,,,, [-1]], [,, "98[23]\\d{6}",,,, "983123456",,, [9]], "DZ", 213, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    EC: [, [,, "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",,,,,,, [8, 9, 10, 11], [7]], [,, "[2-7][2-7]\\d{6}",,,, "22123456",,, [8], [7]], [,, "964[0-2]\\d{5}|9(?:39|[57][89]|6[0-36-9]|[89]\\d)\\d{6}",,,, "991234567",,, [9]], [,, "1800\\d{7}|1[78]00\\d{6}",,,, "18001234567",,, [10, 11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "[2-7]890\\d{4}",,,, "28901234",,, [8]], "EC", 593, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-7]"]], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], [[, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-7]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    EE: [, [,, "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",,,,,,, [7, 8, 10]], [,, "(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}",,,, "3212345",,, [7]], [,, "5(?:[0-35-9]\\d{6}|4(?:[0-57-9]\\d{5}|6(?:[0-24-9]\\d{4}|3(?:[0-35-9]\\d{3}|4000))))|8(?:1(?:0(?:000|[3-9]\\d\\d)|(?:1(?:0[236]|1\\d)|(?:23|[3-79]\\d)\\d)\\d)|2(?:0(?:000|(?:19|[24-7]\\d)\\d)|(?:(?:[124-6]\\d|3[5-9]|8[2-4])\\d|7(?:[679]\\d|8[13-9]))\\d)|[349]\\d{4})\\d\\d|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}",,,, "51234567",,, [7, 8]], [,, "800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}",,,, "80012345"], [,, "(?:40\\d\\d|900)\\d{4}",,,, "9001234",,, [7, 8]], [,,,,,,,,, [-1]], [,, "70[0-2]\\d{5}",,,, "70012345",,, [8]], [,,,,,,,,, [-1]], "EE", 372, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], [, "(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]],, [,,,,,,,,, [-1]],,, [,, "800[2-9]\\d{3}",,,,,,, [7]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    EG: [, [,, "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",,,,,,, [8, 9, 10], [6, 7]], [,, "13[23]\\d{6}|(?:15|57)\\d{6,7}|(?:2[2-4]|3|4[05-8]|5[05]|6[24-689]|8[2468]|9[235-7])\\d{7}",,,, "234567890",,, [8, 9], [6, 7]], [,, "1[0-25]\\d{8}",,,, "1001234567",,, [10]], [,, "800\\d{7}",,,, "8001234567",,, [10]], [,, "900\\d{7}",,,, "9001234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "EG", 20, "00", "0",,, "0",,,, [[, "(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], [, "(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    EH: [, [,, "[5-8]\\d{8}",,,,,,, [9]], [,, "528[89]\\d{5}",,,, "528812345"], [,, "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[016-8]|6[1267]|7[0-27]))\\d{6}",,,, "650123456"], [,, "80\\d{7}",,,, "801234567"], [,, "89\\d{7}",,,, "891234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "592(?:4[0-2]|93)\\d{4}",,,, "592401234"], "EH", 212, "00", "0",,, "0",,,,,, [,,,,,,,,, [-1]],, "528[89]", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    ER: [, [,, "[178]\\d{6}",,,,,,, [7], [6]], [,, "(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}",,,, "8370362",,,, [6]], [,, "(?:17[1-3]|7\\d\\d)\\d{4}",,,, "7123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "ER", 291, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    ES: [, [,, "[5-9]\\d{8}",,,,,,, [9]], [,, "96906(?:0[0-8]|1[1-9]|[2-9]\\d)\\d\\d|9(?:69(?:0[0-57-9]|[1-9]\\d)|73(?:[0-8]\\d|9[1-9]))\\d{4}|(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])|9(?:[135]\\d|[268][0-8]|4[1-9]|7[124-9]))\\d{6}",,,, "810123456"], [,, "(?:590[16]00\\d|9(?:6906(?:09|10)|7390\\d\\d))\\d\\d|(?:6\\d|7[1-48])\\d{7}",,,, "612345678"], [,, "[89]00\\d{6}",,,, "800123456"], [,, "80[367]\\d{6}",,,, "803123456"], [,, "90[12]\\d{6}",,,, "901123456"], [,, "70\\d{7}",,,, "701234567"], [,,,,,,,,, [-1]], "ES", 34, "00",,,,,,,, [[, "(\\d{4})", "$1", ["905"]], [, "(\\d{6})", "$1", ["[79]9"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]], [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "51\\d{7}",,,, "511234567"],,, [,,,,,,,,, [-1]]],
    ET: [, [,, "(?:11|[2-59]\\d)\\d{7}",,,,,,, [9], [7]], [,, "116671\\d{3}|(?:11(?:1(?:1[124]|2[2-7]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:1[78]|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:119|22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}",,,, "111112345",,,, [7]], [,, "9\\d{8}",,,, "911234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "ET", 251, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    FI: [, [,, "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",,,,,,, [5, 6, 7, 8, 9, 10, 11, 12]], [,, "(?:1[3-79][1-8]|[235689][1-8]\\d)\\d{2,6}",,,, "131234567",,, [5, 6, 7, 8, 9]], [,, "(?:4[0-8]|50)\\d{4,8}",,,, "412345678",,, [6, 7, 8, 9, 10]], [,, "800\\d{4,6}",,,, "800123456",,, [7, 8, 9]], [,, "[67]00\\d{5,6}",,,, "600123456",,, [8, 9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "FI", 358, "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "0",,, "0",, "00",, [[, "(\\d{5})", "$1", ["75[12]"], "0$1"], [, "(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], [, "(\\d{6})", "$1", ["11"]], [, "(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"], [, "(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"], [, "(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]], [[, "(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], [, "(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"], [, "(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"], [, "(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]], [,,,,,,,,, [-1]], 1, "1[03-79]|[2-9]", [,, "20(?:2[023]|9[89])\\d{1,6}|(?:60[12]\\d|7099)\\d{4,5}|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:[1-3]00|7(?:0[1-5]\\d\\d|5[03-9]))\\d{3,7}"], [,, "20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}",,,, "10112345"],,, [,,,,,,,,, [-1]]],
    FJ: [, [,, "45\\d{5}|(?:0800\\d|[235-9])\\d{6}",,,,,,, [7, 11]], [,, "603\\d{4}|(?:3[0-5]|6[25-7]|8[58])\\d{5}",,,, "3212345",,, [7]], [,, "(?:[279]\\d|45|5[01568]|8[034679])\\d{5}",,,, "7012345",,, [7]], [,, "0800\\d{7}",,,, "08001234567",,, [11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "FJ", 679, "0(?:0|52)",,,,,, "00",, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    FK: [, [,, "[2-7]\\d{4}",,,,,,, [5]], [,, "[2-47]\\d{4}",,,, "31234"], [,, "[56]\\d{4}",,,, "51234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "FK", 500, "00",,,,,,,,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    FM: [, [,, "(?:[39]\\d\\d|820)\\d{4}",,,,,,, [7]], [,, "31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-6]\\d)\\d)\\d{3}",,,, "3201234"], [,, "31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-7]\\d)\\d)\\d{3}",,,, "3501234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "FM", 691, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    FO: [, [,, "(?:[2-8]\\d|90)\\d{4}",,,,,,, [6]], [,, "(?:20|[34]\\d|8[19])\\d{4}",,,, "201234"], [,, "(?:[27][1-9]|5\\d)\\d{4}",,,, "211234"], [,, "80[257-9]\\d{3}",,,, "802123"], [,, "90(?:[13-5][15-7]|2[125-7]|9\\d)\\d\\d",,,, "901123"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "(?:6[0-36]|88)\\d{4}",,,, "601234"], "FO", 298, "00",,,, "(10(?:01|[12]0|88))",,,, [[, "(\\d{6})", "$1", ["[2-9]"],, "$CC $1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    FR: [, [,, "[1-9]\\d{8}",,,,,,, [9]], [,, "(?:[1-35]\\d|4[1-9])\\d{7}",,,, "123456789"], [,, "700\\d{6}|(?:6\\d|7[3-9])\\d{7}",,,, "612345678"], [,, "80[0-5]\\d{6}",,,, "801234567"], [,, "836(?:0[0-36-9]|[1-9]\\d)\\d{4}|8(?:1[2-9]|2[2-47-9]|3[0-57-9]|[569]\\d|8[0-35-9])\\d{6}",,,, "891123456"], [,, "8(?:1[01]|2[0156]|84)\\d{6}",,,, "884012345"], [,,,,,,,,, [-1]], [,, "9\\d{8}",,,, "912345678"], "FR", 33, "00", "0",,, "0",,,, [[, "(\\d{4})", "$1", ["10"]], [, "(\\d{3})(\\d{3})", "$1 $2", ["1"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "80[6-9]\\d{6}",,,, "806123456"],,, [,,,,,,,,, [-1]]],
    GA: [, [,, "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",,,,,,, [7, 8]], [,, "[01]1\\d{6}",,,, "01441234",,, [8]], [,, "(?:0[2-7]|6[256]|7[47])\\d{6}|[2-7]\\d{6}",,,, "06031234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "GA", 241, "00",,,, "0(11\\d{6}|6[256]\\d{6}|7[47]\\d{6})", "$1",,, [[, "(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GB: [, [,, "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",,,,,,, [7, 9, 10], [4, 5, 6, 8]], [,, "(?:1(?:1(?:3(?:[0-58]\\d\\d|73[03])|(?:4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])\\d\\d)|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:0\\d|20)))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",,,, "1212345678",,, [9, 10], [4, 5, 6, 7, 8]], [,, "7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",,,, "7400123456",,, [10]], [,, "80[08]\\d{7}|800\\d{6}|8001111",,,, "8001234567"], [,, "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",,,, "9012345678",,, [7, 10]], [,,,,,,,,, [-1]], [,, "70\\d{8}",,,, "7012345678",,, [10]], [,, "56\\d{8}",,,, "5612345678",,, [10]], "GB", 44, "00", "0", " x",, "0",,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], [, "(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], [, "(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], [, "(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], [, "(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]],, [,, "76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}",,,, "7640123456",,, [10]], 1,, [,,,,,,,,, [-1]], [,, "(?:3[0347]|55)\\d{8}",,,, "5512345678",,, [10]],,, [,,,,,,,,, [-1]]],
    GD: [, [,, "(?:473|[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}",,,, "4732691234",,,, [7]], [,, "473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}",,,, "4734031234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "GD", 1, "011", "1",,, "1|([2-9]\\d{6})$", "473$1",,,,, [,,,,,,,,, [-1]],, "473", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GE: [, [,, "(?:[3-57]\\d\\d|800)\\d{6}",,,,,,, [9], [6, 7]], [,, "(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}",,,, "322123456",,,, [6, 7]], [,, "5(?:0(?:0(?:0\\d|50)\\d|555[5-9])|(?:111\\d|8(?:58[89]|888))\\d|(?:2222|3333)[0-4]|52(?:00\\d|22[0-4])|75(?:00\\d|7(?:7[7-9]|8[01])))\\d{3}|(?:5(?:[14]4|5[0157-9]|68|7[0147-9]|9[1-35-9])|790)\\d{6}",,,, "555123456"], [,, "800\\d{6}",,,, "800123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "70[67]\\d{6}",,,, "706123456"], "GE", 995, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,, "70[67]\\d{6}"], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GF: [, [,, "(?:[56]94|976)\\d{6}",,,,,,, [9]], [,, "594(?:[023]\\d|1[01]|4[03-9]|5[6-9]|6[0-3]|80|9[014])\\d{4}",,,, "594101234"], [,, "694(?:[0-249]\\d|3[0-48])\\d{4}",,,, "694201234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "976\\d{6}",,,, "976012345"], "GF", 594, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GG: [, [,, "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",,,,,,, [7, 9, 10], [6]], [,, "1481[25-9]\\d{5}",,,, "1481256789",,, [10], [6]], [,, "7(?:(?:781|839)\\d|911[17])\\d{5}",,,, "7781123456",,, [10]], [,, "80[08]\\d{7}|800\\d{6}|8001111",,,, "8001234567"], [,, "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",,,, "9012345678",,, [7, 10]], [,,,,,,,,, [-1]], [,, "70\\d{8}",,,, "7012345678",,, [10]], [,, "56\\d{8}",,,, "5612345678",,, [10]], "GG", 44, "00", "0",,, "0|([25-9]\\d{5})$", "1481$1",,,,, [,, "76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}",,,, "7640123456",,, [10]],,, [,,,,,,,,, [-1]], [,, "(?:3[0347]|55)\\d{8}",,,, "5512345678",,, [10]],,, [,,,,,,,,, [-1]]],
    GH: [, [,, "(?:[235]\\d{3}|800)\\d{5}",,,,,,, [8, 9], [7]], [,, "3082[0-5]\\d{4}|3(?:0(?:[237]\\d|8[01])|[167](?:2[0-6]|7\\d|80)|2(?:2[0-5]|7\\d|80)|3(?:2[0-3]|7\\d|80)|4(?:2[013-9]|3[01]|7\\d|80)|5(?:2[0-7]|7\\d|80)|8(?:2[0-2]|7\\d|80)|9(?:[28]0|7\\d))\\d{5}",,,, "302345678",,, [9], [7]], [,, "(?:2[0346-8]\\d|5(?:[0457]\\d|6[01]|9[1-6]))\\d{6}",,,, "231234567",,, [9]], [,, "800\\d{5}",,,, "80012345",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "GH", 233, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[237]|8[0-2]"]], [, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], [[, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], [,,,,,,,,, [-1]],,, [,, "800\\d{5}",,,,,,, [8]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GI: [, [,, "[256]\\d{7}",,,,,,, [8]], [,, "21(?:6[24-7]\\d|90[0-2])\\d{3}|2(?:00|2[25])\\d{5}",,,, "20012345"], [,, "(?:5[146-8]\\d|6(?:06|29))\\d{5}",,,, "57123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "GI", 350, "00",,,,,,,, [[, "(\\d{3})(\\d{5})", "$1 $2", ["2"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GL: [, [,, "(?:19|[2-689]\\d)\\d{4}",,,,,,, [6]], [,, "(?:19|3[1-7]|6[14689]|8[14-79]|9\\d)\\d{4}",,,, "321000"], [,, "[245]\\d{5}",,,, "221234"], [,, "80\\d{4}",,,, "801234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "3[89]\\d{4}",,,, "381234"], "GL", 299, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-689]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GM: [, [,, "[2-9]\\d{6}",,,,,,, [7]], [,, "(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:5(?:3\\d|4[0-7])|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}",,,, "5661234"], [,, "(?:[23679]\\d|5[0-389])\\d{5}",,,, "3012345"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "GM", 220, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GN: [, [,, "722\\d{6}|(?:3|6\\d)\\d{7}",,,,,,, [8, 9]], [,, "3(?:0(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])|1\\d\\d)\\d{4}",,,, "30241234",,, [8]], [,, "6[02356]\\d{7}",,,, "601123456",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "722\\d{6}",,,, "722123456",,, [9]], "GN", 224, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GP: [, [,, "(?:590|69\\d|976)\\d{6}",,,,,,, [9]], [,, "590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}",,,, "590201234"], [,, "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}",,,, "690001234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "976[01]\\d{5}",,,, "976012345"], "GP", 590, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"]],, [,,,,,,,,, [-1]], 1,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GQ: [, [,, "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",,,,,,, [9]], [,, "33[0-24-9]\\d[46]\\d{4}|3(?:33|5\\d)\\d[7-9]\\d{4}",,,, "333091234"], [,, "(?:222|55[015])\\d{6}",,,, "222123456"], [,, "80\\d[1-9]\\d{5}",,,, "800123456"], [,, "90\\d[1-9]\\d{5}",,,, "900123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "GQ", 240, "00",,,,,,,, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], [, "(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GR: [, [,, "5005000\\d{3}|(?:[2689]\\d|70)\\d{8}",,,,,,, [10]], [,, "2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}",,,, "2123456789"], [,, "68[57-9]\\d{7}|(?:69|94)\\d{8}",,,, "6912345678"], [,, "800\\d{7}",,,, "8001234567"], [,, "90[19]\\d{7}",,,, "9091234567"], [,, "8(?:0[16]|12|[27]5|50)\\d{7}",,,, "8011234567"], [,, "70\\d{8}",,,, "7012345678"], [,,,,,,,,, [-1]], "GR", 30, "00",,,,,,,, [[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], [, "(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "5005000\\d{3}",,,, "5005000123"],,, [,,,,,,,,, [-1]]],
    GT: [, [,, "(?:1\\d{3}|[2-7])\\d{7}",,,,,,, [8, 11]], [,, "[267][2-9]\\d{6}",,,, "22456789",,, [8]], [,, "[3-5]\\d{7}",,,, "51234567",,, [8]], [,, "18[01]\\d{8}",,,, "18001112222",,, [11]], [,, "19\\d{9}",,,, "19001112222",,, [11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "GT", 502, "00",,,,,,,, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GU: [, [,, "(?:[58]\\d\\d|671|900)\\d{7}",,,,,,, [10], [7]], [,, "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",,,, "6713001234",,,, [7]], [,, "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",,,, "6713001234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "GU", 1, "011", "1",,, "1|([3-9]\\d{6})$", "671$1",, 1,,, [,,,,,,,,, [-1]],, "671", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GW: [, [,, "[49]\\d{8}|4\\d{6}",,,,,,, [7, 9]], [,, "443\\d{6}",,,, "443201234",,, [9]], [,, "9(?:5\\d|6[569]|77)\\d{6}",,,, "955012345",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "40\\d{5}",,,, "4012345",,, [7]], "GW", 245, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["40"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GY: [, [,, "(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}",,,,,,, [7]], [,, "(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}",,,, "2201234"], [,, "6\\d{6}",,,, "6091234"], [,, "(?:289|862)\\d{4}",,,, "2891234"], [,, "9008\\d{3}",,,, "9008123"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "GY", 592, "001",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    HK: [, [,, "8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}",,,,,,, [5, 6, 7, 8, 9, 11]], [,, "(?:384[0-5]|58(?:0[1-8]|1[2-9]))\\d{4}|(?:2(?:[13-9]\\d|2[013-9])|3(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69]|89))\\d{5}",,,, "21234567",,, [8]], [,, "(?:46(?:[01][0-6]|2[5-9]|4[0-57-9])|5730|626[01]|707[1-5]|848[015-9]|929[03-9])\\d{4}|(?:5(?:[1-59][0-46-9]|6[0-4689]|7[0-2469])|6(?:0[1-9]|[13-59]\\d|[268][0-57-9]|7[0-79])|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}",,,, "51234567",,, [8]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,, "900(?:[0-24-9]\\d{7}|3\\d{1,4})",,,, "90012345678",,, [5, 6, 7, 8, 11]], [,,,,,,,,, [-1]], [,, "8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}",,,, "81123456",,, [8]], [,,,,,,,,, [-1]], "HK", 852, "00(?:30|5[09]|[126-9]?)",,,,,, "00",, [[, "(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]],, [,, "7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[0136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}",,,, "71123456",,, [8]],,, [,,,,,,,,, [-1]], [,, "30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}",,,, "30161234",,, [8]],,, [,,,,,,,,, [-1]]],
    HN: [, [,, "8\\d{10}|[237-9]\\d{7}",,,,,,, [8, 11]], [,, "2(?:2(?:0[0139]|1[1-36]|[23]\\d|4[04-6]|5[57]|6[24]|7[0135689]|8[01346-9]|9[0-2])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:0[7-9]|16|4[03-5]|5\\d|6[014-6]|74|80)|6(?:[056]\\d|17|2[07]|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034]|91)|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}",,,, "22123456",,, [8]], [,, "[37-9]\\d{7}",,,, "91234567",,, [8]], [,, "8002\\d{7}",,,, "80021234567",,, [11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "HN", 504, "00",,,,,,,, [[, "(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]]], [[, "(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]], [,,,,,,,,, [-1]],,, [,, "8002\\d{7}",,,,,,, [11]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    HR: [, [,, "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",,,,,,, [6, 7, 8, 9]], [,, "1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}",,,, "12345678",,, [8, 9], [6, 7]], [,, "9(?:751\\d{5}|8\\d{6,7})|9(?:0[1-9]|[1259]\\d|7[0679])\\d{6}",,,, "921234567",,, [8, 9]], [,, "80[01]\\d{4,6}",,,, "800123456",,, [7, 8, 9]], [,, "6[01459]\\d{6}|6[01]\\d{4,5}",,,, "611234",,, [6, 7, 8]], [,,,,,,,,, [-1]], [,, "7[45]\\d{6}",,,, "74123456",,, [8]], [,,,,,,,,, [-1]], "HR", 385, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], [, "(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "62\\d{6,7}|72\\d{6}",,,, "62123456",,, [8, 9]],,, [,,,,,,,,, [-1]]],
    HT: [, [,, "[2-489]\\d{7}",,,,,,, [8]], [,, "2(?:2\\d|5[1-5]|81|9[149])\\d{5}",,,, "22453300"], [,, "[34]\\d{7}",,,, "34101234"], [,, "8\\d{7}",,,, "80012345"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}",,,, "98901234"], "HT", 509, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    HU: [, [,, "[2357]\\d{8}|[1-9]\\d{7}",,,,,,, [8, 9], [6, 7]], [,, "(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}",,,, "12345678",,, [8], [6, 7]], [,, "(?:[257]0|3[01])\\d{7}",,,, "201234567",,, [9]], [,, "[48]0\\d{6}",,,, "80123456",,, [8]], [,, "9[01]\\d{6}",,,, "90123456",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "21\\d{7}",,,, "211234567",,, [9]], "HU", 36, "00", "06",,, "06",,,, [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57-9]"], "06 $1"]],, [,,,,,,,,, [-1]],,, [,, "[48]0\\d{6}",,,,,,, [8]], [,, "38\\d{7}",,,, "381234567",,, [9]],,, [,,,,,,,,, [-1]]],
    ID: [, [,, "(?:(?:007803|8\\d{4})\\d|[1-36])\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}",,,,,,, [7, 8, 9, 10, 11, 12, 13], [5, 6]], [,, "2[124]\\d{7,8}|619\\d{8}|2(?:1(?:14|500)|2\\d{3})\\d{3}|61\\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}",,,, "218350123",,, [7, 8, 9, 10, 11], [5, 6]], [,, "8[1-35-9]\\d{7,10}",,,, "812345678",,, [9, 10, 11, 12]], [,, "007803\\d{7}|(?:177\\d|800)\\d{5,7}",,,, "8001234567",,, [8, 9, 10, 11, 13]], [,, "809\\d{7}",,,, "8091234567",,, [10]], [,, "804\\d{7}",,,, "8041234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "ID", 62, "00[189]", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], [, "(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], [, "(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], [, "(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], [, "(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], [, "(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], [, "(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]], [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], [, "(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], [, "(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], [, "(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], [, "(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], [, "(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], [, "(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], [,,,,,,,,, [-1]],,, [,, "(?:007803\\d|8071)\\d{6}",,,,,,, [10, 13]], [,, "(?:1500|8071\\d{3})\\d{3}",,,, "8071123456",,, [7, 10]],,, [,,,,,,,,, [-1]]],
    IE: [, [,, "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",,,,,,, [7, 8, 9, 10], [5, 6]], [,, "(?:1\\d|21)\\d{6,7}|(?:2[24-9]|4(?:0[24]|5\\d|7)|5(?:0[45]|1\\d|8)|6(?:1\\d|[237-9])|9(?:1\\d|[35-9]))\\d{5}|(?:23|4(?:[1-469]|8\\d)|5[23679]|6[4-6]|7[14]|9[04])\\d{7}",,,, "2212345",,,, [5, 6]], [,, "8(?:22|[35-9]\\d)\\d{6}",,,, "850123456",,, [9]], [,, "1800\\d{6}",,,, "1800123456",,, [10]], [,, "15(?:1[2-8]|[2-8]0|9[089])\\d{6}",,,, "1520123456",,, [10]], [,, "18[59]0\\d{6}",,,, "1850123456",,, [10]], [,, "700\\d{6}",,,, "700123456",,, [9]], [,, "76\\d{7}",,,, "761234567",,, [9]], "IE", 353, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], [, "(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], [, "(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], [, "(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]],, [,,,,,,,,, [-1]],,, [,, "18[59]0\\d{6}",,,,,,, [10]], [,, "818\\d{6}",,,, "818123456",,, [9]],,, [,, "88210[1-9]\\d{4}|8(?:[35-79]5\\d\\d|8(?:[013-9]\\d\\d|2(?:[01][1-9]|[2-9]\\d)))\\d{5}",,,, "8551234567",,, [10]]],
    IL: [, [,, "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",,,,,,, [7, 8, 9, 10, 11, 12]], [,, "153\\d{8,9}|29[1-9]\\d{5}|(?:2[0-8]|[3489]\\d)\\d{6}",,,, "21234567",,, [8, 11, 12], [7]], [,, "5(?:(?:[02368]\\d|[19][2-9]|4[1-9])\\d|5(?:01|1[79]|2[2-8]|3[23]|44|5[05689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}",,,, "502345678",,, [9]], [,, "1(?:255|80[019]\\d{3})\\d{3}",,,, "1800123456",,, [7, 10]], [,, "1212\\d{4}|1(?:200|9(?:0[01]|19))\\d{6}",,,, "1919123456",,, [8, 10]], [,, "1700\\d{6}",,,, "1700123456",,, [10]], [,,,,,,,,, [-1]], [,, "78(?:33|55|77|81)\\d{5}|7(?:18|2[23]|3[237]|47|6[58]|7\\d|82|9[235-9])\\d{6}",,,, "771234567",,, [9]], "IL", 972, "0(?:0|1[2-9])", "0",,, "0",,,, [[, "(\\d{4})(\\d{3})", "$1-$2", ["125"]], [, "(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], [, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], [, "(\\d{4})(\\d{6})", "$1-$2", ["159"]], [, "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], [, "(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]],, [,,,,,,,,, [-1]],,, [,, "1700\\d{6}",,,,,,, [10]], [,, "1599\\d{6}",,,, "1599123456",,, [10]],,, [,, "151\\d{8,9}",,,, "15112340000",,, [11, 12]]],
    IM: [, [,, "1624\\d{6}|(?:[3578]\\d|90)\\d{8}",,,,,,, [10], [6]], [,, "1624[5-8]\\d{5}",,,, "1624756789",,,, [6]], [,, "76245[06]\\d{4}|7(?:4576|[59]24\\d|624[0-4689])\\d{5}",,,, "7924123456"], [,, "808162\\d{4}",,,, "8081624567"], [,, "8(?:440[49]06|72299\\d)\\d{3}|(?:8(?:45|70)|90[0167])624\\d{4}",,,, "9016247890"], [,,,,,,,,, [-1]], [,, "70\\d{8}",,,, "7012345678"], [,, "56\\d{8}",,,, "5612345678"], "IM", 44, "00", "0",,, "0|([5-8]\\d{5})$", "1624$1",,,,, [,,,,,,,,, [-1]],, "74576|(?:16|7[56])24", [,,,,,,,,, [-1]], [,, "3440[49]06\\d{3}|(?:3(?:08162|3\\d{4}|45624|7(?:0624|2299))|55\\d{4})\\d{4}",,,, "5512345678"],,, [,,,,,,,,, [-1]]],
    IN: [, [,, "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",,,,,,, [8, 9, 10, 11, 12, 13], [6, 7]], [,, "2717(?:[2-7]\\d|95)\\d{4}|(?:271[0-689]|782[0-6])[2-7]\\d{5}|(?:170[24]|2(?:(?:[02][2-79]|90)\\d|80[13468])|(?:3(?:23|80)|683|79[1-7])\\d|4(?:20[24]|72[2-8])|552[1-7])\\d{6}|(?:11|33|4[04]|80)[2-7]\\d{7}|(?:342|674|788)(?:[0189][2-7]|[2-7]\\d)\\d{5}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[13]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[014-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[3-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1245]|4[5-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])|7(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|8[013-7]|9[089])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d[2-7]\\d{5}",,,, "7410410123",,, [10], [6, 7, 8]], [,, "(?:61279|7(?:887[02-9]|9(?:313|79[07-9]))|8(?:079[04-9]|(?:84|91)7[02-8]))\\d{5}|(?:6(?:12|[2-47]1|5[17]|6[13]|80)[0189]|7(?:1(?:2[0189]|9[0-5])|2(?:[14][017-9]|8[0-59])|3(?:2[5-8]|[34][017-9]|9[016-9])|4(?:1[015-9]|[29][89]|39|8[389])|5(?:[15][017-9]|2[04-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589])|70[0289]|88[089]|97[02-8])|8(?:0(?:6[67]|7[02-8])|70[017-9]|84[01489]|91[0-289]))\\d{6}|(?:7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[0189]\\d|7[02-8])\\d{5}|(?:6(?:[09]\\d|1[04679]|2[03689]|3[05-9]|4[0489]|50|6[069]|7[07]|8[7-9])|7(?:0\\d|2[0235-79]|3[05-8]|40|5[0346-8]|6[6-9]|7[1-9]|8[0-79]|9[089])|8(?:0[01589]|1[0-57-9]|2[235-9]|3[03-57-9]|[45]\\d|6[02457-9]|7[1-69]|8[0-25-9]|9[02-9])|9\\d\\d)\\d{7}|(?:6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|8[124-6])\\d|7(?:[235689]\\d|4[0189]))|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-5])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]|881))[0189]\\d{5}",,,, "8123456789",,, [10]], [,, "000800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))",,,, "1800123456"], [,, "186[12]\\d{9}",,,, "1861123456789",,, [13]], [,, "1860\\d{7}",,,, "18603451234",,, [11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "IN", 91, "00", "0",,, "0",,,, [[, "(\\d{7})", "$1", ["575"]], [, "(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],,, 1], [, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"],,, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"],,, 1], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1",, 1], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1",, 1], [, "(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1",, 1], [, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"],,, 1], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]], [, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"],,, 1]], [[, "(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],,, 1], [, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"],,, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"],,, 1], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1",, 1], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1",, 1], [, "(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1",, 1], [, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"],,, 1], [, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"],,, 1]], [,,,,,,,,, [-1]],,, [,, "1(?:600\\d{6}|800\\d{4,9})|(?:000800|18(?:03\\d\\d|6(?:0|[12]\\d\\d)))\\d{7}"], [,, "140\\d{7}",,,, "1409305260",,, [10]],,, [,,,,,,,,, [-1]]],
    IO: [, [,, "3\\d{6}",,,,,,, [7]], [,, "37\\d{5}",,,, "3709100"], [,, "38\\d{5}",,,, "3801234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "IO", 246, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["3"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    IQ: [, [,, "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",,,,,,, [8, 9, 10], [6, 7]], [,, "1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}",,,, "12345678",,, [8, 9], [6, 7]], [,, "7[3-9]\\d{8}",,,, "7912345678",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "IQ", 964, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    IR: [, [,, "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",,,,,,, [4, 5, 6, 7, 10], [8]], [,, "(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[03-57]\\d{7}|[16]\\d{3}(?:\\d{4})?|[289]\\d{3}(?:\\d(?:\\d{3})?)?)|94(?:000[09]|2(?:121|[2689]0\\d)|30[0-2]\\d|4(?:111|40\\d))\\d{4}",,,, "2123456789",,, [6, 7, 10], [4, 5, 8]], [,, "9(?:(?:0(?:[1-35]\\d|44)|(?:[13]\\d|2[0-2])\\d)\\d|9(?:(?:[0-2]\\d|4[45])\\d|5[15]0|8(?:1\\d|88)|9(?:0[013]|1[0134]|21|77|9[6-9])))\\d{5}",,,, "9123456789",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "993\\d{7}",,,, "9932123456",,, [10]], "IR", 98, "00", "0",,, "0",,,, [[, "(\\d{4,5})", "$1", ["96"], "0$1"], [, "(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,, "9(?:4440\\d{5}|6(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19]))",,,,,,, [4, 5, 10]], [,, "96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])",,,, "9601",,, [4, 5]],,, [,,,,,,,,, [-1]]],
    IS: [, [,, "(?:38\\d|[4-9])\\d{6}",,,,,,, [7, 9]], [,, "(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|872)\\d{4}",,,, "4101234",,, [7]], [,, "(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-9]\\d)|8(?:2[0-59]|[3-69]\\d|8[28]))\\d{4}",,,, "6111234"], [,, "80[08]\\d{4}",,,, "8001234",,, [7]], [,, "90(?:0\\d|1[5-79]|2[015-79]|3[135-79]|4[125-7]|5[25-79]|7[1-37]|8[0-35-7])\\d{3}",,,, "9001234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "49[0-24-79]\\d{4}",,,, "4921234",,, [7]], "IS", 354, "00|1(?:0(?:01|[12]0)|100)",,,,,, "00",, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "809\\d{4}",,,, "8091234",,, [7]],,, [,, "(?:689|8(?:7[18]|80)|95[48])\\d{4}",,,, "6891234",,, [7]]],
    IT: [, [,, "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",,,,,,, [6, 7, 8, 9, 10, 11, 12]], [,, "0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}",,,, "0212345678",,, [6, 7, 8, 9, 10, 11]], [,, "3[1-9]\\d{8}|3[2-9]\\d{7}",,,, "3123456789",,, [9, 10]], [,, "80(?:0\\d{3}|3)\\d{3}",,,, "800123456",,, [6, 9]], [,, "(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}",,,, "899123456",,, [6, 8, 9, 10]], [,, "84(?:[08]\\d{3}|[17])\\d{3}",,,, "848123456",,, [6, 9]], [,, "1(?:78\\d|99)\\d{6}",,,, "1781234567",,, [9, 10]], [,, "55\\d{8}",,,, "5512345678",,, [10]], "IT", 39, "00",,,,,,,, [[, "(\\d{4,5})", "$1", ["1(?:0|9[246])", "1(?:0|9(?:2[2-9]|[46]))"]], [, "(\\d{6})", "$1", ["1(?:1|92)"]], [, "(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]], [, "(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["894"]], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1[4679]|[38]"]], [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]], [, "(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], [[, "(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]], [, "(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["894"]], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1[4679]|[38]"]], [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]], [, "(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], [,,,,,,,,, [-1]], 1,, [,, "848\\d{6}",,,,,,, [9]], [,,,,,,,,, [-1]],,, [,, "3[2-8]\\d{9,10}",,,, "33101234501",,, [11, 12]]],
    JE: [, [,, "1534\\d{6}|(?:[3578]\\d|90)\\d{8}",,,,,,, [10], [6]], [,, "1534[0-24-8]\\d{5}",,,, "1534456789",,,, [6]], [,, "7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}",,,, "7797712345"], [,, "80(?:07(?:35|81)|8901)\\d{4}",,,, "8007354567"], [,, "(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}",,,, "9018105678"], [,,,,,,,,, [-1]], [,, "701511\\d{4}",,,, "7015115678"], [,, "56\\d{8}",,,, "5612345678"], "JE", 44, "00", "0",,, "0|([0-24-8]\\d{5})$", "1534$1",,,,, [,, "76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}",,,, "7640123456"],,, [,,,,,,,,, [-1]], [,, "(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}",,,, "5512345678"],,, [,,,,,,,,, [-1]]],
    JM: [, [,, "(?:[58]\\d\\d|658|900)\\d{7}",,,,,,, [10], [7]], [,, "(?:658(?:2(?:[0-8]\\d|9[0-46-9])|[3-9]\\d\\d)|876(?:5(?:02|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}",,,, "8765230123",,,, [7]], [,, "(?:658295|876(?:2(?:[14-9]\\d|2[013-9]|3[7-9])|[348]\\d\\d|5(?:0[13-9]|1[579]|[2-57-9]\\d|6[0-24-9])|6(?:4[89]|6[67])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579])))\\d{4}",,,, "8762101234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "JM", 1, "011", "1",,, "1",,,,,, [,,,,,,,,, [-1]],, "658|876", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    JO: [, [,, "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",,,,,,, [8, 9]], [,, "87(?:000|90[01])\\d{3}|(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[5-7][023])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2(?:[05]0|22)|3(?:00|33)|4(?:0[0-25]|1[2-467]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:20|7[078]|99))\\d{4}",,,, "62001234",,, [8]], [,, "7(?:[78][0-25-9]|9\\d)\\d{6}",,,, "790123456",,, [9]], [,, "80\\d{6}",,,, "80012345",,, [8]], [,, "9\\d{7}",,,, "90012345",,, [8]], [,, "85\\d{6}",,,, "85012345",,, [8]], [,, "70\\d{7}",,,, "700123456",,, [9]], [,,,,,,,,, [-1]], "JO", 962, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]],, [,, "74(?:66|77)\\d{5}",,,, "746612345",,, [9]],,, [,,,,,,,,, [-1]], [,, "8(?:10|8\\d)\\d{5}",,,, "88101234",,, [8]],,, [,,,,,,,,, [-1]]],
    JP: [, [,, "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",,,,,,, [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]], [,, "(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}",,,, "312345678",,, [9]], [,, "[7-9]0[1-9]\\d{7}",,,, "9012345678",,, [10]], [,, "00(?:(?:37|66)\\d{6,13}|(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d)|(?:120|800\\d)\\d{6}",,,, "120123456"], [,, "990\\d{6}",,,, "990123456",,, [9]], [,,,,,,,,, [-1]], [,, "60\\d{7}",,,, "601234567",,, [9]], [,, "50[1-9]\\d{7}",,,, "5012345678",,, [10]], "JP", 81, "010", "0",,, "0",,,, [[, "(\\d{4})(\\d{4})", "$1-$2", ["007", "0077", "00777", "00777[01]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[457-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[279]|49|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])", "[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"], "0$1"], [, "(\\d{4})(\\d{2})(\\d{3,4})", "$1-$2-$3", ["007"]], [, "(\\d{4})(\\d{2})(\\d{4})", "$1-$2-$3", ["008"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1-$2-$3", ["0"]], [, "(\\d{4})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["0"]], [, "(\\d{4})(\\d{5})(\\d{5,6})", "$1-$2-$3", ["0"]], [, "(\\d{4})(\\d{6})(\\d{6,7})", "$1-$2-$3", ["0"]]], [[, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[457-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[279]|49|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])", "[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"]], [,, "20\\d{8}",,,, "2012345678",,, [10]],,, [,, "00(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d|00(?:37|66)\\d{6,13}"], [,, "570\\d{6}",,,, "570123456",,, [9]],,, [,,,,,,,,, [-1]]],
    KE: [, [,, "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",,,,,,, [7, 8, 9, 10]], [,, "(?:4[245]|5[1-79]|6[01457-9])\\d{5,7}|(?:4[136]|5[08]|62)\\d{7}|(?:[24]0|66)\\d{6,7}",,,, "202012345",,, [7, 8, 9]], [,, "(?:1(?:0[0-2]|1[0-5])|7\\d\\d)\\d{6}",,,, "712123456",,, [9]], [,, "800[24-8]\\d{5,6}",,,, "800223456",,, [9, 10]], [,, "900[02-9]\\d{5}",,,, "900223456",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "KE", 254, "000", "0",,, "0",,,, [[, "(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], [, "(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KG: [, [,, "8\\d{9}|(?:[235-8]\\d|99)\\d{7}",,,,,,, [9, 10], [5, 6]], [,, "312(?:5[0-79]\\d|9(?:[0-689]\\d|7[0-24-9]))\\d{3}|(?:3(?:1(?:2[0-46-8]|3[1-9]|47|[56]\\d)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}",,,, "312123456",,, [9], [5, 6]], [,, "(?:312(?:58\\d|973)|8801\\d\\d)\\d{3}|(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|7(?:[07]\\d|55)|99[05-9])\\d{6}",,,, "700123456",,, [9]], [,, "800\\d{6,7}",,,, "800123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "KG", 996, "00", "0",,, "0",,,, [[, "(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], [, "(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KH: [, [,, "1\\d{9}|[1-9]\\d{7,8}",,,,,,, [8, 9, 10], [6, 7]], [,, "23(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)\\d{4}|23[236-9]\\d{5}|(?:2[4-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:(?:[237-9]|4[56]|5\\d)\\d{5}|6\\d{5,6})",,,, "23756789",,, [8, 9], [6, 7]], [,, "(?:(?:1[28]|3[18]|9[67])\\d|6[016-9]|7(?:[07-9]|[16]\\d)|8(?:[013-79]|8\\d))\\d{6}|(?:1\\d|9[0-57-9])\\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\\d{5}",,,, "91234567",,, [8, 9]], [,, "1800(?:1\\d|2[019])\\d{4}",,,, "1800123456",,, [10]], [,, "1900(?:1\\d|2[09])\\d{4}",,,, "1900123456",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "KH", 855, "00[14-9]", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KI: [, [,, "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",,,,,,, [5, 8]], [,, "(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}",,,, "31234"], [,, "(?:63\\d{3}|73(?:0[0-5]\\d|140))\\d{3}|[67]200[01]\\d{3}",,,, "72001234",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "30(?:0[01]\\d\\d|12(?:11|20))\\d\\d",,,, "30010000",,, [8]], "KI", 686, "00", "0",,, "0",,,,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KM: [, [,, "[3478]\\d{6}",,,,,,, [7], [4]], [,, "7[4-7]\\d{5}",,,, "7712345",,,, [4]], [,, "[34]\\d{6}",,,, "3212345"], [,,,,,,,,, [-1]], [,, "8\\d{6}",,,, "8001234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "KM", 269, "00",,,,,,,, [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KN: [, [,, "(?:[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}",,,, "8692361234",,,, [7]], [,, "869(?:48[89]|5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}",,,, "8697652917",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "KN", 1, "011", "1",,, "1|([2-7]\\d{6})$", "869$1",,,,, [,,,,,,,,, [-1]],, "869", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KP: [, [,, "85\\d{6}|(?:19\\d|[2-7])\\d{7}",,,,,,, [8, 10], [6, 7]], [,, "(?:(?:195|2)\\d|3[19]|4[159]|5[37]|6[17]|7[39]|85)\\d{6}",,,, "21234567",,,, [6, 7]], [,, "19[1-3]\\d{7}",,,, "1921234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "KP", 850, "00|99", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]],, [,,,,,,,,, [-1]],,, [,, "238[02-9]\\d{4}|2(?:[0-24-9]\\d|3[0-79])\\d{5}",,,,,,, [8]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KR: [, [,, "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",,,,,,, [5, 6, 8, 9, 10, 11, 12, 13, 14], [3, 4, 7]], [,, "(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\\d{2,3}",,,, "22123456",,, [5, 6, 8, 9, 10], [3, 4, 7]], [,, "1(?:05(?:[0-8]\\d|9[0-6])|22[13]\\d)\\d{4,5}|1(?:0[1-46-9]|[16-9]\\d|2[013-9])\\d{6,7}",,,, "1020000000",,, [9, 10]], [,, "00(?:308\\d{6,7}|798\\d{7,9})|(?:00368|80)\\d{7}",,,, "801234567",,, [9, 11, 12, 13, 14]], [,, "60[2-9]\\d{6}",,,, "602345678",,, [9]], [,,,,,,,,, [-1]], [,, "50\\d{8,9}",,,, "5012345678",,, [10, 11]], [,, "70\\d{8}",,,, "7012345678",,, [10]], "KR", 82, "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "0",,, "0(8(?:[1-46-8]|5\\d\\d))?",,,, [[, "(\\d{5})", "$1", ["1[016-9]1", "1[016-9]11", "1[016-9]114"], "0$1"], [, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"], [, "(\\d{4})(\\d{4})", "$1-$2", ["1"]], [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1", "0$CC-$1"], [, "(\\d{5})(\\d{3})(\\d{3})", "$1 $2 $3", ["003", "0030"]], [, "(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1", "0$CC-$1"], [, "(\\d{5})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0"]], [, "(\\d{5})(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]], [[, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"], [, "(\\d{4})(\\d{4})", "$1-$2", ["1"]], [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1", "0$CC-$1"]], [,, "15\\d{7,8}",,,, "1523456789",,, [9, 10]],,, [,, "00(?:3(?:08\\d{6,7}|68\\d{7})|798\\d{7,9})",,,,,,, [11, 12, 13, 14]], [,, "1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))\\d{4}",,,, "15441234",,, [8]],,, [,,,,,,,,, [-1]]],
    KW: [, [,, "(?:18|[2569]\\d\\d)\\d{5}",,,,,,, [7, 8]], [,, "2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}",,,, "22345678",,, [8]], [,, "(?:5(?:2(?:22|5[25])|88[58])|6(?:222|444|70[013-9]|888|93[039])|9(?:11[01]|333|500))\\d{4}|(?:5(?:[05]\\d|1[0-7]|6[56])|6(?:0[034679]|5[015-9]|6\\d|7[67]|9[069])|9(?:0[09]|22|[4679]\\d|55|8[057-9]))\\d{5}",,,, "50012345",,, [8]], [,, "18\\d{5}",,,, "1801234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "KW", 965, "00",,,,,,,, [[, "(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], [, "(\\d{3})(\\d{5})", "$1 $2", ["[25]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KY: [, [,, "(?:345|[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "345(?:2(?:22|3[23]|44|66)|333|444|6(?:23|38|40)|7(?:30|4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}",,,, "3452221234",,,, [7]], [,, "345(?:32[1-9]|42[0-4]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[679]|2[2-9]|3[06-9]|90))\\d{4}",,,, "3453231234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002345678"], [,, "(?:345976|900[2-9]\\d\\d)\\d{4}",,,, "9002345678"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "KY", 1, "011", "1",,, "1|([2-9]\\d{6})$", "345$1",,,,, [,, "345849\\d{4}",,,, "3458491234"],, "345", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KZ: [, [,, "33622\\d{5}|(?:7\\d|80)\\d{8}",,,,,,, [10], [5, 6, 7]], [,, "(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}",,,, "7123456789",,,, [5, 6, 7]], [,, "7(?:0[0-25-8]|47|6[02-4]|7[15-8]|85)\\d{7}",,,, "7710009998"], [,, "800\\d{7}",,,, "8001234567"], [,, "809\\d{7}",,,, "8091234567"], [,,,,,,,,, [-1]], [,, "808\\d{7}",,,, "8081234567"], [,, "751\\d{7}",,,, "7511234567"], "KZ", 7, "810", "8",,, "8",, "8~10",,,, [,,,,,,,,, [-1]],, "33|7", [,, "751\\d{7}"], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    LA: [, [,, "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",,,,,,, [8, 9, 10], [6]], [,, "(?:2[13]|[35-7][14]|41|8[1468])\\d{6}",,,, "21212862",,, [8], [6]], [,, "(?:20(?:[239]\\d|5[24-9]|7[6-8])|302\\d)\\d{6}",,,, "2023123456",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "LA", 856, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "30[013-9]\\d{6}",,,, "301234567",,, [9]],,, [,,,,,,,,, [-1]]],
    LB: [, [,, "[7-9]\\d{7}|[13-9]\\d{6}",,,,,,, [7, 8]], [,, "(?:(?:[14-69]\\d|8[02-9])\\d|7(?:[2-57]\\d|62|8[0-7]|9[04-9]))\\d{4}",,,, "1123456",,, [7]], [,, "793(?:[01]\\d|2[0-4])\\d{3}|(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[12]))\\d{5}",,,, "71123456"], [,,,,,,,,, [-1]], [,, "9[01]\\d{6}",,,, "90123456",,, [8]], [,, "80\\d{6}",,,, "80123456",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "LB", 961, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    LC: [, [,, "(?:[58]\\d\\d|758|900)\\d{7}",,,,,,, [10], [7]], [,, "758(?:234|4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|(?:63|75)8)\\d{4}",,,, "7584305678",,,, [7]], [,, "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[0-3])|812)\\d{4}",,,, "7582845678",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "LC", 1, "011", "1",,, "1|([2-8]\\d{6})$", "758$1",,,,, [,,,,,,,,, [-1]],, "758", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    LI: [, [,, "90\\d{5}|(?:[2378]|6\\d\\d)\\d{6}",,,,,,, [7, 9]], [,, "(?:2(?:01|1[27]|22|3\\d|6[02-578]|96)|3(?:33|40|7[0135-7]|8[048]|9[0269]))\\d{4}",,,, "2345678",,, [7]], [,, "(?:6(?:4(?:89|9\\d)|5[0-3]\\d|6(?:0[0-7]|10|2[06-9]|39))\\d|7(?:[37-9]\\d|42|56))\\d{4}",,,, "660234567"], [,, "80(?:02[28]|9\\d\\d)\\d\\d",,,, "8002222",,, [7]], [,, "90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d",,,, "9002222",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "LI", 423, "00", "0",,, "0|(1001)",,,, [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"],, "$CC $1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"],, "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"],, "$CC $1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "870(?:28|87)\\d\\d",,,, "8702812",,, [7]],,, [,, "697(?:42|56|[78]\\d)\\d{4}",,,, "697861234",,, [9]]],
    LK: [, [,, "[1-9]\\d{8}",,,,,,, [9], [7]], [,, "(?:12[2-9]|602|8[12]\\d|9(?:1\\d|22|9[245]))\\d{6}|(?:11|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}",,,, "112345678",,,, [7]], [,, "7[0-25-8]\\d{7}",,,, "712345678"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "LK", 94, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "1973\\d{5}",,,, "197312345"],,, [,,,,,,,,, [-1]]],
    LR: [, [,, "(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}",,,,,,, [7, 8, 9]], [,, "(?:2\\d{3}|33333)\\d{4}",,,, "21234567",,, [8, 9]], [,, "(?:(?:330|555|(?:77|88)\\d)\\d|4[67])\\d{5}|[56]\\d{6}",,,, "770123456",,, [7, 9]], [,,,,,,,,, [-1]], [,, "332(?:02|[34]\\d)\\d{4}",,,, "332021234",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "LR", 231, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    LS: [, [,, "(?:[256]\\d\\d|800)\\d{5}",,,,,,, [8]], [,, "2\\d{7}",,,, "22123456"], [,, "[56]\\d{7}",,,, "50123456"], [,, "800[256]\\d{4}",,,, "80021234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "LS", 266, "00",,,,,,,, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    LT: [, [,, "(?:[3469]\\d|52|[78]0)\\d{6}",,,,,,, [8]], [,, "(?:3[1478]|4[124-6]|52)\\d{6}",,,, "31234567"], [,, "6\\d{7}",,,, "61234567"], [,, "80[02]\\d{5}",,,, "80012345"], [,, "9(?:0[0239]|10)\\d{5}",,,, "90012345"], [,, "808\\d{5}",,,, "80812345"], [,, "70[05]\\d{5}",,,, "70012345"], [,, "[89]01\\d{5}",,,, "80123456"], "LT", 370, "00", "8",,, "[08]",,,, [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)",, 1], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1",, 1], [, "(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)",, 1], [, "(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)",, 1]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "70[67]\\d{5}",,,, "70712345"],,, [,,,,,,,,, [-1]]],
    LU: [, [,, "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",,,,,,, [4, 5, 6, 7, 8, 9, 10, 11]], [,, "(?:35[013-9]|80[2-9]|90[89])\\d{1,8}|(?:2[2-9]|3[0-46-9]|[457]\\d|8[13-9]|9[2-579])\\d{2,9}",,,, "27123456"], [,, "6(?:[269][18]|5[158]|7[189]|81)\\d{6}",,,, "628123456",,, [9]], [,, "800\\d{5}",,,, "80012345",,, [8]], [,, "90[015]\\d{5}",,,, "90012345",,, [8]], [,, "801\\d{5}",,,, "80112345",,, [8]], [,,,,,,,,, [-1]], [,, "20(?:1\\d{5}|[2-689]\\d{1,7})",,,, "20201234",,, [4, 5, 6, 7, 8, 9, 10]], "LU", 352, "00",,,, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)",,,, [[, "(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],, "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],, "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"],, "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"],, "$CC $1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"],, "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"],, "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"],, "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"],, "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"],, "$CC $1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    LV: [, [,, "(?:[268]\\d|90)\\d{6}",,,,,,, [8]], [,, "6\\d{7}",,,, "63123456"], [,, "2\\d{7}",,,, "21234567"], [,, "80\\d{6}",,,, "80123456"], [,, "90\\d{6}",,,, "90123456"], [,, "81\\d{6}",,,, "81123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "LV", 371, "00",,,,,,,, [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    LY: [, [,, "[2-9]\\d{8}",,,,,,, [9], [7]], [,, "(?:2(?:0[56]|[1-6]\\d|7[124579]|8[124])|3(?:1\\d|2[2356])|4(?:[17]\\d|2[1-357]|5[2-4]|8[124])|5(?:[1347]\\d|2[1-469]|5[13-5]|8[1-4])|6(?:[1-479]\\d|5[2-57]|8[1-5])|7(?:[13]\\d|2[13-79])|8(?:[124]\\d|5[124]|84))\\d{6}",,,, "212345678",,,, [7]], [,, "9[1-6]\\d{7}",,,, "912345678"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "LY", 218, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MA: [, [,, "[5-8]\\d{8}",,,,,,, [9]], [,, "5(?:29(?:[189][05]|2[29]|3[01])|38[89][05])\\d{4}|5(?:2(?:[015-7]\\d|2[02-9]|3[0-578]|4[02-46-8]|8[0235-7]|90)|3(?:[0-47]\\d|5[02-9]|6[02-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}",,,, "520123456"], [,, "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[016-8]|6[1267]|7[0-27]))\\d{6}",,,, "650123456"], [,, "80\\d{7}",,,, "801234567"], [,, "89\\d{7}",,,, "891234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "592(?:4[0-2]|93)\\d{4}",,,, "592401234"], "MA", 212, "00", "0",,, "0",,,, [[, "(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]", "5(?:29|38)[89]0"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], [, "(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"], [, "(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], [, "(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]],, [,,,,,,,,, [-1]], 1,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MC: [, [,, "870\\d{5}|(?:[349]|6\\d)\\d{7}",,,,,,, [8, 9]], [,, "(?:870|9[2-47-9]\\d)\\d{5}",,,, "99123456",,, [8]], [,, "4(?:[46]\\d|5[1-9])\\d{5}|(?:3|6\\d)\\d{7}",,,, "612345678"], [,, "90\\d{6}",,,, "90123456",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "MC", 377, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["8"]], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], [,,,,,,,,, [-1]],,, [,, "870\\d{5}",,,,,,, [8]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MD: [, [,, "(?:[235-7]\\d|[89]0)\\d{6}",,,,,,, [8]], [,, "(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}",,,, "22212345"], [,, "562\\d{5}|(?:6\\d|7[16-9])\\d{6}",,,, "62112345"], [,, "800\\d{5}",,,, "80012345"], [,, "90[056]\\d{5}",,,, "90012345"], [,, "808\\d{5}",,,, "80812345"], [,,,,,,,,, [-1]], [,, "3[08]\\d{6}",,,, "30123456"], "MD", 373, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "803\\d{5}",,,, "80312345"],,, [,,,,,,,,, [-1]]],
    ME: [, [,, "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",,,,,,, [8, 9], [6]], [,, "(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:0[2467]|1[24-7]|2[2-467]))\\d{5}",,,, "30234567",,, [8], [6]], [,, "6(?:[07-9]\\d|3[024]|6[0-25])\\d{5}",,,, "67622901",,, [8]], [,, "80(?:[0-2578]|9\\d)\\d{5}",,,, "80080002"], [,, "9(?:4[1568]|5[178])\\d{5}",,,, "94515151",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "78[1-49]\\d{5}",,,, "78108780",,, [8]], "ME", 382, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "77[1-9]\\d{5}",,,, "77273012",,, [8]],,, [,,,,,,,,, [-1]]],
    MF: [, [,, "(?:590|69\\d|976)\\d{6}",,,,,,, [9]], [,, "590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}",,,, "590271234"], [,, "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}",,,, "690001234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "976[01]\\d{5}",,,, "976012345"], "MF", 590, "00", "0",,, "0",,,,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MG: [, [,, "[23]\\d{8}",,,,,,, [9], [7]], [,, "2072[29]\\d{4}|20(?:2\\d|4[47]|5[3467]|6[279]|7[35]|8[268]|9[245])\\d{5}",,,, "202123456",,,, [7]], [,, "3[2-49]\\d{7}",,,, "321234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "22\\d{7}",,,, "221234567"], "MG", 261, "00", "0",,, "0|([24-9]\\d{6})$", "20$1",,, [[, "(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MH: [, [,, "329\\d{4}|(?:[256]\\d|45)\\d{5}",,,,,,, [7]], [,, "(?:247|528|625)\\d{4}",,,, "2471234"], [,, "(?:(?:23|54)5|329|45[56])\\d{4}",,,, "2351234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "635\\d{4}",,,, "6351234"], "MH", 692, "011", "1",,, "1",,,, [[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MK: [, [,, "[2-578]\\d{7}",,,,,,, [8], [6, 7]], [,, "(?:2(?:[23]\\d|5[0-24578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}",,,, "22012345",,,, [6, 7]], [,, "7(?:4(?:60\\d|747)|94(?:[01]\\d|2[0-4]))\\d{3}|7(?:[0-25-8]\\d|3[2-4]|42|9[23])\\d{5}",,,, "72345678"], [,, "800\\d{5}",,,, "80012345"], [,, "5[02-9]\\d{6}",,,, "50012345"], [,, "8(?:0[1-9]|[1-9]\\d)\\d{5}",,,, "80123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "MK", 389, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    ML: [, [,, "[24-9]\\d{7}",,,,,,, [8]], [,, "2(?:07[0-8]|12[67])\\d{4}|(?:2(?:02|1[4-689])|4(?:0[0-4]|4[1-39]))\\d{5}",,,, "20212345"], [,, "2(?:0(?:01|79)|17\\d)\\d{4}|(?:5[01]|[679]\\d|8[239])\\d{6}",,,, "65012345"], [,, "80\\d{6}",,,, "80012345"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "ML", 223, "00",,,,,,,, [[, "(\\d{4})", "$1", ["67[057-9]|74[045]", "67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]], [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]], [,,,,,,,,, [-1]],,, [,, "80\\d{6}"], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MM: [, [,, "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",,,,,,, [6, 7, 8, 9, 10], [5]], [,, "(?:1(?:(?:2\\d|3[56]|[89][0-6])\\d|4(?:2[2-469]|39|46|6[25]|7[0-3]|83)|6)|2(?:2(?:00|8[34])|4(?:0\\d|2[246]|39|46|62|7[0-3]|83)|51\\d\\d)|4(?:2(?:2\\d\\d|48[0-3])|3(?:20\\d|4(?:70|83)|56)|420\\d|5470)|6(?:0(?:[23]|88\\d)|(?:124|[56]2\\d)\\d|247[23]|3(?:20\\d|470)|4(?:2[04]\\d|47[23])|7(?:(?:3\\d|8[01459])\\d|4(?:39|60|7[013]))))\\d{4}|5(?:2(?:2\\d{5,6}|47[023]\\d{4})|(?:347[23]|4(?:2(?:1|86)|470)|522\\d|6(?:20\\d|483)|7(?:20\\d|48[0-2])|8(?:20\\d|47[02])|9(?:20\\d|47[01]))\\d{4})|7(?:(?:0470|4(?:25\\d|470)|5(?:202|470|96\\d))\\d{4}|1(?:20\\d{4,5}|4(?:70|83)\\d{4}))|8(?:1(?:2\\d{5,6}|4(?:10|7[01]\\d)\\d{3})|2(?:2\\d{5,6}|(?:320|490\\d)\\d{3})|(?:3(?:2\\d\\d|470)|4[24-7]|5(?:2\\d|4[1-9]|51)\\d|6[23])\\d{4})|(?:1[2-6]\\d|4(?:2[24-8]|3[2-7]|[46][2-6]|5[3-5])|5(?:[27][2-8]|3[2-68]|4[24-8]|5[23]|6[2-4]|8[24-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][24-8]|[15][2-7]|22|3[2-4])|8(?:1[2-689]|2[2-8]|[35]2\\d))\\d{4}|25\\d{5,6}|(?:2[2-9]|6(?:1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:3[24]|5[245]))\\d{4}",,,, "1234567",,, [6, 7, 8, 9], [5]], [,, "(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|(?:6\\d|8[89]|9[4-8])\\d|7(?:3|40|[5-9]\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6])\\d)\\d{4}|9[69]1\\d{6}|9(?:[68]\\d|9[089])\\d{5}",,,, "92123456",,, [7, 8, 9, 10]], [,, "80080(?:[01][1-9]|2\\d)\\d{3}",,,, "8008001234",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "1333\\d{4}|[12]468\\d{4}",,,, "13331234",,, [8]], "MM", 95, "00", "0",,, "0",,,, [[, "(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], [, "(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], [, "(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MN: [, [,, "[12]\\d{7,9}|[57-9]\\d{7}",,,,,,, [8, 9, 10], [4, 5, 6]], [,, "[12]2[1-3]\\d{5,6}|7(?:0[0-5]\\d|128)\\d{4}|(?:[12](?:1|27)|5[368])\\d{6}|[12](?:3[2-8]|4[2-68]|5[1-4689])\\d{6,7}",,,, "53123456",,,, [4, 5, 6]], [,, "(?:83[01]|920)\\d{5}|(?:5[05]|8[05689]|9[013-9])\\d{6}",,,, "88123456",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "712[0-79]\\d{4}|7(?:1[013-9]|[5-8]\\d)\\d{5}",,,, "75123456",,, [8]], "MN", 976, "001", "0",,, "0",,,, [[, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], [, "(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"]], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], [, "(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], [, "(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MO: [, [,, "(?:28|[68]\\d)\\d{6}",,,,,,, [8]], [,, "(?:28[2-9]|8(?:11|[2-57-9]\\d))\\d{5}",,,, "28212345"], [,, "6(?:[235]\\d\\d|6(?:0[0-5]|[1-9]\\d)|8(?:[02][5-9]|[146-8]\\d|[35][0-4]))\\d{4}",,,, "66123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "MO", 853, "00",,,,,,,, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MP: [, [,, "[58]\\d{9}|(?:67|90)0\\d{7}",,,,,,, [10], [7]], [,, "670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",,,, "6702345678",,,, [7]], [,, "670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",,,, "6702345678",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "MP", 1, "011", "1",,, "1|([2-9]\\d{6})$", "670$1",, 1,,, [,,,,,,,,, [-1]],, "670", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MQ: [, [,, "69\\d{7}|(?:59|97)6\\d{6}",,,,,,, [9]], [,, "596(?:0[0-7]|10|2[7-9]|3[05-9]|4[0-46-8]|[5-7]\\d|8[09]|9[4-8])\\d{4}",,,, "596301234"], [,, "69(?:6(?:[0-47-9]\\d|5[0-6]|6[0-4])|727)\\d{4}",,,, "696201234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "976(?:6[1-9]|7[0-367])\\d{4}",,,, "976612345"], "MQ", 596, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MR: [, [,, "(?:[2-4]\\d\\d|800)\\d{5}",,,,,,, [8]], [,, "(?:25[08]|35\\d|45[1-7])\\d{5}",,,, "35123456"], [,, "[2-4][0-46-9]\\d{6}",,,, "22123456"], [,, "800\\d{5}",,,, "80012345"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "MR", 222, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MS: [, [,, "(?:[58]\\d\\d|664|900)\\d{7}",,,,,,, [10], [7]], [,, "6644(?:1[0-3]|91)\\d{4}",,,, "6644912345",,,, [7]], [,, "664(?:3(?:49|9[1-6])|49[2-6])\\d{4}",,,, "6644923456",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "MS", 1, "011", "1",,, "1|([34]\\d{6})$", "664$1",,,,, [,,,,,,,,, [-1]],, "664", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MT: [, [,, "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",,,,,,, [8]], [,, "2(?:0(?:[19]\\d|3[1-4]|6[059])|[1-357]\\d\\d)\\d{4}",,,, "21001234"], [,, "(?:7(?:210|[79]\\d\\d)|9(?:[29]\\d\\d|69[67]|8(?:1[1-3]|89|97)))\\d{4}",,,, "96961234"], [,, "800[3467]\\d{4}",,,, "80071234"], [,, "5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}",,,, "50037123"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "3550\\d{4}",,,, "35501234"], "MT", 356, "00",,,,,,,, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]],, [,, "7117\\d{4}",,,, "71171234"],,, [,,,,,,,,, [-1]], [,, "501\\d{5}",,,, "50112345"],,, [,,,,,,,,, [-1]]],
    MU: [, [,, "(?:[2-468]|5\\d)\\d{6}",,,,,,, [7, 8]], [,, "(?:2(?:[0346-8]\\d|1[0-7])|4(?:[013568]\\d|2[4-7])|54(?:[34]\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}",,,, "54480123"], [,, "5(?:4(?:2[1-389]|7[1-9])|87[15-8])\\d{4}|5(?:2[589]|4[3489]|7\\d|8[0-689]|9[0-8])\\d{5}",,,, "52512345",,, [8]], [,, "80[0-2]\\d{4}",,,, "8001234",,, [7]], [,, "30\\d{5}",,,, "3012345",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "3(?:20|9\\d)\\d{4}",,,, "3201234",,, [7]], "MU", 230, "0(?:0|[24-7]0|3[03])",,,,,, "020",, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["5"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MV: [, [,, "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",,,,,,, [7, 10]], [,, "(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024-68]|8[024689]))\\d{4}",,,, "6701234",,, [7]], [,, "46[46]\\d{4}|(?:7\\d|9[13-9])\\d{5}",,,, "7712345",,, [7]], [,, "800\\d{7}",,,, "8001234567",,, [10]], [,, "900\\d{7}",,,, "9001234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "MV", 960, "0(?:0|19)",,,,,, "00",, [[, "(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[13-9]"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "4[05]0\\d{4}",,,, "4001234",,, [7]],,, [,,,,,,,,, [-1]]],
    MW: [, [,, "1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}",,,,,,, [7, 9]], [,, "(?:1[2-9]|21\\d\\d)\\d{5}",,,, "1234567"], [,, "111\\d{6}|(?:31|77|88|99)\\d{7}",,,, "991234567",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "MW", 265, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MX: [, [,, "(?:1(?:[01467]\\d|[2359][1-9]|8[1-79])|[2-9]\\d)\\d{8}",,,,,,, [10, 11], [7, 8]], [,, "(?:2(?:0[01]|2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",,,, "2001234567",,, [10], [7, 8]], [,, "(?:1(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))|2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",,,, "12221234567",,,, [7, 8]], [,, "8(?:00|88)\\d{7}",,,, "8001234567",,, [10]], [,, "900\\d{7}",,,, "9001234567",,, [10]], [,, "300\\d{7}",,,, "3001234567",,, [10]], [,, "500\\d{7}",,,, "5001234567",,, [10]], [,,,,,,,,, [-1]], "MX", 52, "0[09]", "01",,, "0(?:[12]|4[45])|1",, "00",, [[, "(\\d{5})", "$1", ["53"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"],,, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"],,, 1], [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"],,, 1], [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"],,, 1]], [[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"],,, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"],,, 1], [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"],,, 1], [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"],,, 1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MY: [, [,, "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",,,,,,, [8, 9, 10], [6, 7]], [,, "(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}",,,, "323856789",,, [8, 9], [6, 7]], [,, "1(?:4400|8(?:47|8[27])[0-4])\\d{4}|1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d)|7(?:[01]\\d|2[2-6]))|(?:(?:[269]|59)\\d|[37][1-9]|4[235-9])\\d|8(?:1[23]|[236]\\d|4[06]|5[7-9]|7[016-9]|8[01]|9[0-8]))\\d{5}",,,, "123456789",,, [9, 10]], [,, "1[378]00\\d{6}",,,, "1300123456",,, [10]], [,, "1600\\d{6}",,,, "1600123456",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "15(?:4(?:6[0-4]\\d|8(?:0[125]|[17]\\d|21|3[01]|4[01589]|5[014]|6[02]))|6(?:32[0-6]|78\\d))\\d{4}",,,, "1546012345",,, [10]], "MY", 60, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9])|8"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], [, "(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MZ: [, [,, "(?:2|8\\d)\\d{7}",,,,,,, [8, 9]], [,, "2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}",,,, "21123456",,, [8]], [,, "8[2-79]\\d{7}",,,, "821234567",,, [9]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "MZ", 258, "00",,,,,,,, [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NA: [, [,, "[68]\\d{7,8}",,,,,,, [8, 9]], [,, "6(?:1(?:[02-4]\\d\\d|17)|2(?:17|54\\d|69|70)|3(?:17|2[0237]\\d|34|6[289]|7[01]|81)|4(?:17|(?:27|41|5[25])\\d|69|7[01])|5(?:17|2[236-8]\\d|69|7[01])|6(?:17|26\\d|38|42|69|7[01])|7(?:17|(?:2[2-4]|30)\\d|6[89]|7[01]))\\d{4}|6(?:1(?:2[2-7]|3[01378]|4[0-4]|69|7[014])|25[0-46-8]|32\\d|4(?:2[0-27]|4[016]|5[0-357])|52[02-9]|62[56]|7(?:2[2-69]|3[013]))\\d{4}",,,, "61221234"], [,, "(?:60|8[1245])\\d{7}",,,, "811234567",,, [9]], [,, "80\\d{7}",,,, "800123456",,, [9]], [,, "8701\\d{5}",,,, "870123456",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "8(?:3\\d\\d|86)\\d{5}",,,, "88612345"], "NA", 264, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NC: [, [,, "[2-57-9]\\d{5}",,,,,,, [6]], [,, "(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}",,,, "201234"], [,, "(?:5[0-4]|[79]\\d|8[0-79])\\d{4}",,,, "751234"], [,,,,,,,,, [-1]], [,, "36\\d{4}",,,, "366711"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "NC", 687, "00",,,,,,,, [[, "(\\d{3})", "$1", ["5[6-8]"]], [, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-57-9]"]]], [[, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-57-9]"]]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NE: [, [,, "[0289]\\d{7}",,,,,,, [8]], [,, "2(?:0(?:20|3[1-8]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}",,,, "20201234"], [,, "(?:23|8[014589]|9\\d)\\d{6}",,,, "93123456"], [,, "08\\d{6}",,,, "08123456"], [,, "09\\d{6}",,,, "09123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "NE", 227, "00",,,,,,,, [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NF: [, [,, "[13]\\d{5}",,,,,,, [6], [5]], [,, "(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}",,,, "106609",,,, [5]], [,, "(?:14|3[58])\\d{4}",,,, "381234",,,, [5]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "NF", 672, "00",,,, "([0-258]\\d{4})$", "3$1",,, [[, "(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], [, "(\\d)(\\d{5})", "$1 $2", ["[13]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NG: [, [,, "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}",,,,,,, [7, 8, 10, 11, 12, 13, 14], [5, 6]], [,, "(?:(?:[1-356]\\d|4[02-8]|8[2-9])\\d|9(?:0[3-9]|[1-9]\\d))\\d{5}|7(?:0(?:[013-689]\\d|2[0-24-9])\\d{3,4}|[1-79]\\d{6})|(?:[12]\\d|4[147]|5[14579]|6[1578]|7[1-3578])\\d{5}",,,, "18040123",,, [7, 8], [5, 6]], [,, "(?:702[0-24-9]|8(?:01|19)[01])\\d{6}|(?:70[13-689]|8(?:0[2-9]|1[0-8])|90[1-9])\\d{7}",,,, "8021234567",,, [10]], [,, "800\\d{7,11}",,,, "80017591759",,, [10, 11, 12, 13, 14]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "NG", 234, "009", "0",,, "0",,,, [[, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], [, "(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "700\\d{7,11}",,,, "7001234567",,, [10, 11, 12, 13, 14]],,, [,,,,,,,,, [-1]]],
    NI: [, [,, "(?:1800|[25-8]\\d{3})\\d{4}",,,,,,, [8]], [,, "2\\d{7}",,,, "21234567"], [,, "(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}",,,, "81234567"], [,, "1800\\d{4}",,,, "18001234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "NI", 505, "00",,,,,,,, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NL: [, [,, "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}",,,,,,, [5, 6, 7, 8, 9, 10]], [,, "(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}",,,, "101234567",,, [9]], [,, "6[1-58]\\d{7}",,,, "612345678",,, [9]], [,, "800\\d{4,7}",,,, "8001234",,, [7, 8, 9, 10]], [,, "90[069]\\d{4,7}",,,, "9061234",,, [7, 8, 9, 10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "(?:85|91)\\d{7}",,,, "851234567",,, [9]], "NL", 31, "00", "0",,, "0",,,, [[, "(\\d{4})", "$1", ["1[238]|[34]"]], [, "(\\d{2})(\\d{3,4})", "$1 $2", ["14"]], [, "(\\d{6})", "$1", ["1"]], [, "(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], [, "(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]], [[, "(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], [, "(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]], [,, "66\\d{7}",,,, "662345678",,, [9]],,, [,, "140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)\\d",,,,,,, [5, 6]], [,, "140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|(?:140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)|8[478]\\d{6})\\d",,,, "14020",,, [5, 6, 9]],,, [,,,,,,,,, [-1]]],
    NO: [, [,, "(?:0|[2-9]\\d{3})\\d{4}",,,,,,, [5, 8]], [,, "(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}",,,, "21234567",,, [8]], [,, "(?:4[015-8]|5[89]|9\\d)\\d{6}",,,, "40612345",,, [8]], [,, "80[01]\\d{5}",,,, "80012345",,, [8]], [,, "82[09]\\d{5}",,,, "82012345",,, [8]], [,, "810(?:0[0-6]|[2-8]\\d)\\d{3}",,,, "81021234",,, [8]], [,, "880\\d{5}",,,, "88012345",,, [8]], [,, "85[0-5]\\d{5}",,,, "85012345",,, [8]], "NO", 47, "00",,,,,,,, [[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]|5[89]"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]],, [,,,,,,,,, [-1]], 1, "[02-689]|7[0-8]", [,,,,,,,,, [-1]], [,, "(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}",,,, "02000"],,, [,, "81[23]\\d{5}",,,, "81212345",,, [8]]],
    NP: [, [,, "9\\d{9}|[1-9]\\d{7}",,,,,,, [8, 10], [6, 7]], [,, "(?:1[0-6]\\d|99[02-6])\\d{5}|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-7])[2-6]\\d{5}",,,, "14567890",,, [8], [6, 7]], [,, "9(?:6[0-3]|7[245]|8[0-24-68])\\d{7}",,,, "9841234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "NP", 977, "00", "0",,, "0",,,, [[, "(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], [, "(\\d{2})(\\d{6})", "$1-$2", ["[1-8]|9(?:[1-579]|6[2-6])"], "0$1"], [, "(\\d{3})(\\d{7})", "$1-$2", ["9"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NR: [, [,, "(?:444|(?:55|8\\d)\\d|666)\\d{4}",,,,,,, [7]], [,, "444\\d{4}",,,, "4441234"], [,, "(?:55[3-9]|666|8\\d\\d)\\d{4}",,,, "5551234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "NR", 674, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NU: [, [,, "(?:[47]|888\\d)\\d{3}",,,,,,, [4, 7]], [,, "[47]\\d{3}",,,, "7012",,, [4]], [,, "888[4-9]\\d{3}",,,, "8884012",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "NU", 683, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["8"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NZ: [, [,, "[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}",,,,,,, [5, 6, 7, 8, 9, 10]], [,, "24099\\d{3}|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}",,,, "32345678",,, [8], [7]], [,, "2[0-27-9]\\d{7,8}|21\\d{6}",,,, "211234567",,, [8, 9, 10]], [,, "508\\d{6,7}|80\\d{6,8}",,,, "800123456",,, [8, 9, 10]], [,, "(?:11\\d{5}|50(?:0[08]|30|66|77))\\d{3}|90\\d{6,8}",,,, "900123456",,, [7, 8, 9, 10]], [,,,,,,,,, [-1]], [,, "70\\d{7}",,,, "701234567",,, [9]], [,,,,,,,,, [-1]], "NZ", 64, "0(?:0|161)", "0",,, "0",, "00",, [[, "(\\d{2})(\\d{3,8})", "$1 $2", ["83"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[0367]|[89]0"], "0$1"], [, "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]],, [,, "[28]6\\d{6,7}",,,, "26123456",,, [8, 9]],,, [,,,,,,,,, [-1]], [,, "83\\d{3,8}",,,, "83012378"],,, [,,,,,,,,, [-1]]],
    OM: [, [,, "(?:1505|[279]\\d{3}|500)\\d{4}|8007\\d{4,5}",,,,,,, [7, 8, 9]], [,, "2[2-6]\\d{6}",,,, "23123456",,, [8]], [,, "(?:1505|90[1-9]\\d)\\d{4}|(?:7[1289]|9[1-9])\\d{6}",,,, "92123456",,, [8]], [,, "500\\d{4}|8007\\d{4,5}",,,, "80071234"], [,, "900\\d{5}",,,, "90012345",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "OM", 968, "00",,,,,,,, [[, "(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], [, "(\\d{2})(\\d{6})", "$1 $2", ["2"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PA: [, [,, "(?:[1-57-9]|6\\d)\\d{6}",,,,,,, [7, 8]], [,, "(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|6[58]|7[0167]|8[258]|9[139])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[026-9])|3(?:[089]\\d|1[014-7]|2[0-5]|33|4[0-79]|55|6[068]|7[03-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[056]|7[0-24-9]|8[6-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}",,,, "2001234",,, [7]], [,, "(?:1[16]1|21[89]|6(?:[02-9]\\d|1[0-6])\\d|8(?:1[01]|7[23]))\\d{4}",,,, "61234567"], [,, "800\\d{4}",,,, "8001234",,, [7]], [,, "(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}",,,, "8601234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "PA", 507, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], [, "(\\d{4})(\\d{4})", "$1-$2", ["6"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PE: [, [,, "(?:[14-8]|9\\d)\\d{7}",,,,,,, [8, 9], [6, 7]], [,, "(?:(?:4[34]|5[14])[0-8]\\d|7(?:173|3[0-8]\\d)|8(?:10[05689]|6(?:0[06-9]|1[6-9]|29)|7(?:0[569]|[56]0)))\\d{4}|(?:1[0-8]|4[12]|5[236]|6[1-7]|7[246]|8[2-4])\\d{6}",,,, "11234567",,, [8], [6, 7]], [,, "9\\d{8}",,,, "912345678",,, [9]], [,, "800\\d{5}",,,, "80012345",,, [8]], [,, "805\\d{5}",,,, "80512345",,, [8]], [,, "801\\d{5}",,,, "80112345",,, [8]], [,, "80[24]\\d{5}",,,, "80212345",,, [8]], [,,,,,,,,, [-1]], "PE", 51, "19(?:1[124]|77|90)00", "0", " Anexo ",, "0",,,, [[, "(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], [, "(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PF: [, [,, "[48]\\d{7}|4\\d{5}",,,,,,, [6, 8]], [,, "4(?:0[4-689]|9[4-68])\\d{5}",,,, "40412345",,, [8]], [,, "8[7-9]\\d{6}",,,, "87123456",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "499\\d{5}",,,, "49901234",,, [8]], "PF", 689, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[48]"]]],, [,,,,,,,,, [-1]],,, [,, "44\\d{4}",,,,,,, [6]], [,, "44\\d{4}",,,, "440123",,, [6]],,, [,,,,,,,,, [-1]]],
    PG: [, [,, "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",,,,,,, [7, 8]], [,, "(?:64[1-9]|7730|85[02-46-9])\\d{4}|(?:3[0-2]|4[257]|5[34]|77[0-24]|9[78])\\d{5}",,,, "3123456"], [,, "77(?:3[1-9]|[5-9]\\d)\\d{4}|(?:7[0-689]|81)\\d{6}",,,, "70123456",,, [8]], [,, "180\\d{4}",,,, "1801234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "2(?:0[0-47]|7[568])\\d{4}",,,, "2751234",,, [7]], "PG", 675, "00|140[1-3]",,,,,, "00",, [[, "(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]],, [,, "27[01]\\d{4}",,,, "2700123",,, [7]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PH: [, [,, "1800\\d{7,9}|(?:2|[89]\\d{4})\\d{5}|[2-8]\\d{8}|[28]\\d{7}",,,,,,, [6, 8, 9, 10, 11, 12, 13], [4, 5, 7]], [,, "(?:(?:2[3-8]|3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578])\\d{3}|88(?:22\\d\\d|42))\\d{4}|2\\d{5}(?:\\d{2})?|8[2-8]\\d{7}",,,, "21234567",,, [6, 8, 9, 10], [4, 5, 7]], [,, "(?:81[37]|9(?:0[5-9]|1[0-24-9]|2[0-35-9]|[35]\\d|4[235-9]|6[0-35-8]|7[1-9]|8[189]|9[4-9]))\\d{7}",,,, "9051234567",,, [10]], [,, "1800\\d{7,9}",,,, "180012345678",,, [11, 12, 13]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "PH", 63, "00", "0",,, "0",,,, [[, "(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], [, "(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], [, "(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], [, "(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PK: [, [,, "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",,,,,,, [8, 9, 10, 11, 12], [5, 6, 7]], [,, "(?:(?:21|42)[2-9]|58[126])\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6,7}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}",,,, "2123456789",,, [9, 10], [5, 6, 7, 8]], [,, "3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}",,,, "3012345678",,, [10]], [,, "800\\d{5}",,,, "80012345",,, [8]], [,, "900\\d{5}",,,, "90012345",,, [8]], [,,,,,,,,, [-1]], [,, "122\\d{6}",,,, "122044444",,, [9]], [,,,,,,,,, [-1]], "PK", 92, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]0"], "0$1"], [, "(\\d{4})(\\d{5})", "$1 $2", ["1"]], [, "(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], [, "(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], [, "(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}",,,, "21111825888",,, [11, 12]],,, [,,,,,,,,, [-1]]],
    PL: [, [,, "6\\d{5}(?:\\d{2})?|8\\d{9}|[1-9]\\d{6}(?:\\d{2})?",,,,,,, [6, 7, 8, 9, 10]], [,, "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:[02-9]\\d{6}|1(?:[0-8]\\d{5}|9\\d{3}(?:\\d{2})?))",,,, "123456789",,, [7, 9]], [,, "(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}",,,, "512345678",,, [9]], [,, "800\\d{6,7}",,,, "800123456",,, [9, 10]], [,, "70[01346-8]\\d{6}",,,, "701234567",,, [9]], [,, "801\\d{6}",,,, "801234567",,, [9]], [,,,,,,,,, [-1]], [,, "39\\d{7}",,,, "391234567",,, [9]], "PL", 48, "00",,,,,,,, [[, "(\\d{5})", "$1", ["19"]], [, "(\\d{3})(\\d{3})", "$1 $2", ["11|64"]], [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]],, [,, "64\\d{4,7}",,,, "641234567",,, [6, 7, 8, 9]],,, [,,,,,,,,, [-1]], [,, "804\\d{6}",,,, "804123456",,, [9]],,, [,,,,,,,,, [-1]]],
    PM: [, [,, "[45]\\d{5}",,,,,,, [6]], [,, "(?:4[1-3]|50)\\d{4}",,,, "430123"], [,, "(?:4[02-4]|5[05])\\d{4}",,,, "551234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "PM", 508, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PR: [, [,, "(?:[589]\\d\\d|787)\\d{7}",,,,,,, [10], [7]], [,, "(?:787|939)[2-9]\\d{6}",,,, "7872345678",,,, [7]], [,, "(?:787|939)[2-9]\\d{6}",,,, "7872345678",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002345678"], [,, "900[2-9]\\d{6}",,,, "9002345678"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "PR", 1, "011", "1",,, "1",,, 1,,, [,,,,,,,,, [-1]],, "787|939", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PS: [, [,, "[2489]2\\d{6}|(?:1\\d|5)\\d{8}",,,,,,, [8, 9, 10], [7]], [,, "(?:22[2-47-9]|42[45]|82[014-68]|92[3569])\\d{5}",,,, "22234567",,, [8], [7]], [,, "5[69]\\d{7}",,,, "599123456",,, [9]], [,, "1800\\d{6}",,,, "1800123456",,, [10]], [,,,,,,,,, [-1]], [,, "1700\\d{6}",,,, "1700123456",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "PS", 970, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PT: [, [,, "(?:[26-9]\\d|30)\\d{7}",,,,,,, [9]], [,, "2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}",,,, "212345678"], [,, "6[356]9230\\d{3}|(?:6[036]93|9(?:[1-36]\\d\\d|480))\\d{5}",,,, "912345678"], [,, "80[02]\\d{6}",,,, "800123456"], [,, "(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}",,,, "760123456"], [,, "80(?:8\\d|9[1579])\\d{5}",,,, "808123456"], [,, "884[0-4689]\\d{5}",,,, "884123456"], [,, "30\\d{7}",,,, "301234567"], "PT", 351, "00",,,,,,,, [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "70(?:7\\d|8[17])\\d{5}",,,, "707123456"],,, [,, "600\\d{6}",,,, "600110000"]],
    PW: [, [,, "(?:[24-8]\\d\\d|345|900)\\d{4}",,,,,,, [7]], [,, "(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}",,,, "2771234"], [,, "(?:45[0-5]|6[2-4689]0|(?:77|88)\\d)\\d{4}",,,, "6201234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "PW", 680, "01[12]",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PY: [, [,, "59\\d{4,6}|(?:[2-46-9]\\d|5[0-8])\\d{4,7}",,,,,,, [6, 7, 8, 9], [5]], [,, "(?:[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36])\\d{5,7}|(?:2(?:2[4-68]|[4-68]\\d|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51|[67]\\d)|4(?:3[12]|5[13]|9[1-47])|5(?:[1-4]\\d|5[02-4])|6(?:3[1-3]|44|7[1-8])|7(?:4[0-4]|5\\d|6[1-578]|75|8[0-8])|858)\\d{5,6}",,,, "212345678",,, [7, 8, 9], [5, 6]], [,, "9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}",,,, "961456789",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "8700[0-4]\\d{4}",,,, "870012345",,, [9]], "PY", 595, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], [, "(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], [, "(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], [, "(\\d{3})(\\d{6})", "$1 $2", ["9"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "[2-9]0\\d{4,7}",,,, "201234567"],,, [,,,,,,,,, [-1]]],
    QA: [, [,, "[2-7]\\d{7}|(?:2\\d\\d|800)\\d{4}",,,,,,, [7, 8]], [,, "(?:23|4[04])\\d{6}",,,, "44123456",,, [8]], [,, "(?:28|[35-7]\\d)\\d{6}",,,, "33123456",,, [8]], [,, "800\\d{4}",,,, "8001234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "QA", 974, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]]],, [,, "2(?:[12]\\d|61)\\d{4}",,,, "2123456",,, [7]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    RE: [, [,, "9769\\d{5}|(?:26|[68]\\d)\\d{7}",,,,,,, [9]], [,, "26(?:2\\d\\d|30[01])\\d{4}",,,, "262161234"], [,, "(?:69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[05]|6[0-36]|7[0-27]|8[0-8]|9[0-479]))|9769\\d)\\d{4}",,,, "692123456"], [,, "80\\d{7}",,,, "801234567"], [,, "89[1-37-9]\\d{6}",,,, "891123456"], [,, "8(?:1[019]|2[0156]|84|90)\\d{6}",,,, "810123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "RE", 262, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]],, [,,,,,,,,, [-1]], 1, "26[23]|69|[89]", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    RO: [, [,, "(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}",,,,,,, [6, 9]], [,, "[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d",,,, "211234567"], [,, "7[01]20\\d{5}|7(?:0[013-9]|1[01]|[2-7]\\d|8[03-8]|9[09])\\d{6}",,,, "712034567",,, [9]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,, "90[0136]\\d{6}",,,, "900123456",,, [9]], [,, "801\\d{6}",,,, "801123456",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "RO", 40, "00", "0", " int ",, "0",,,, [[, "(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], [, "(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "(?:37\\d|80[578])\\d{6}",,,, "372123456",,, [9]],,, [,,,,,,,,, [-1]]],
    RS: [, [,, "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",,,,,,, [6, 7, 8, 9, 10, 11, 12], [4, 5]], [,, "(?:11[1-9]\\d|(?:2[389]|39)(?:0[2-9]|[2-9]\\d))\\d{3,8}|(?:1[02-9]|2[0-24-7]|3[0-8])[2-9]\\d{4,9}",,,, "10234567",,, [7, 8, 9, 10, 11, 12], [4, 5, 6]], [,, "6(?:[0-689]|7\\d)\\d{6,7}",,,, "601234567",,, [8, 9, 10]], [,, "800\\d{3,9}",,,, "80012345"], [,, "(?:78\\d|90[0169])\\d{3,7}",,,, "90012345",,, [6, 7, 8, 9, 10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "RS", 381, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], [, "(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "7[06]\\d{4,10}",,,, "700123456"],,, [,,,,,,,,, [-1]]],
    RU: [, [,, "[347-9]\\d{9}",,,,,,, [10], [7]], [,, "(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}",,,, "3011234567",,,, [7]], [,, "9\\d{9}",,,, "9123456789"], [,, "80[04]\\d{7}",,,, "8001234567"], [,, "80[39]\\d{7}",,,, "8091234567"], [,,,,,,,,, [-1]], [,, "808\\d{7}",,,, "8081234567"], [,,,,,,,,, [-1]], "RU", 7, "810", "8",,, "8",, "8~10",, [[, "(\\d{3})(\\d{2})(\\d{2})", "$1-$2-$3", ["[0-79]"]], [, "(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)",, 1], [, "(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)",, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)",, 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)",, 1]], [[, "(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)",, 1], [, "(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)",, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)",, 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)",, 1]], [,,,,,,,,, [-1]], 1, "3[04-689]|[489]", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    RW: [, [,, "(?:06|[27]\\d\\d|[89]00)\\d{6}",,,,,,, [8, 9]], [,, "(?:06|2[23568]\\d)\\d{6}",,,, "250123456"], [,, "7[238]\\d{7}",,,, "720123456",,, [9]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,, "900\\d{6}",,,, "900123456",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "RW", 250, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SA: [, [,, "92\\d{7}|(?:[15]|8\\d)\\d{8}",,,,,,, [9, 10], [7]], [,, "1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}",,,, "112345678",,, [9], [7]], [,, "5(?:[013-689]\\d|7[0-36-8])\\d{6}",,,, "512345678",,, [9]], [,, "800\\d{7}",,,, "8001234567",,, [10]], [,, "925\\d{6}",,,, "925012345",,, [9]], [,, "920\\d{6}",,,, "920012345",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "SA", 966, "00", "0",,, "0",,,, [[, "(\\d{4})(\\d{5})", "$1 $2", ["9"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "811\\d{7}",,,, "8110123456",,, [10]],,, [,,,,,,,,, [-1]]],
    SB: [, [,, "(?:[1-6]|[7-9]\\d\\d)\\d{4}",,,,,,, [5, 7]], [,, "(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}",,,, "40123",,, [5]], [,, "48\\d{3}|(?:(?:7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d{4}",,,, "7421234"], [,, "1[38]\\d{3}",,,, "18123",,, [5]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "5[12]\\d{3}",,,, "51123",,, [5]], "SB", 677, "0[01]",,,,,,,, [[, "(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SC: [, [,, "8000\\d{3}|(?:[249]\\d|64)\\d{5}",,,,,,, [7]], [,, "4[2-46]\\d{5}",,,, "4217123"], [,, "2[5-8]\\d{5}",,,, "2510123"], [,, "8000\\d{3}",,,, "8000000"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "971\\d{4}|(?:64|95)\\d{5}",,,, "6412345"], "SC", 248, "010|0[0-2]",,,,,, "00",, [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SD: [, [,, "[19]\\d{8}",,,,,,, [9]], [,, "1(?:5\\d|8[35-7])\\d{6}",,,, "153123456"], [,, "(?:1[0-2]|9[0-3569])\\d{7}",,,, "911231234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "SD", 249, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SE: [, [,, "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",,,,,,, [6, 7, 8, 9, 10, 12]], [,, "(?:(?:[12][136]|3[356]|4[0246]|6[03]|8\\d)\\d|90[1-9])\\d{4,6}|(?:1(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)|2(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|4(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])|6(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])|9(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8]))\\d{5,6}",,,, "8123456",,, [7, 8, 9]], [,, "7[02369]\\d{7}",,,, "701234567",,, [9]], [,, "20\\d{4,7}",,,, "20123456",,, [6, 7, 8, 9]], [,, "649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}",,,, "9001234567",,, [7, 8, 9, 10]], [,, "77[0-7]\\d{6}",,,, "771234567",,, [9]], [,, "75[1-8]\\d{6}",,,, "751234567",,, [9]], [,,,,,,,,, [-1]], "SE", 46, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1"], [, "(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44)"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1"], [, "(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"], [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1"], [, "(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1"], [, "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1"]], [[, "(\\d{2})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["20"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["9(?:00|39|44)"]], [, "(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"]], [, "(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]], [, "(\\d{3})(\\d{2,3})(\\d{3})", "$1 $2 $3", ["9(?:00|39|44)"]], [, "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"]], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["10|7"]], [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["8"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["9"]], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]], [,, "74[02-9]\\d{6}",,,, "740123456",,, [9]],,, [,,,,,,,,, [-1]], [,, "10[1-8]\\d{6}",,,, "102345678",,, [9]],,, [,, "(?:25[245]|67[3-68])\\d{9}",,,, "254123456789",,, [12]]],
    SG: [, [,, "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",,,,,,, [8, 10, 11]], [,, "662[0-24-9]\\d{4}|6(?:[1-578]\\d|6[013-57-9]|9[0-35-9])\\d{5}",,,, "61234567",,, [8]], [,, "(?:8(?:01[0-7]|[1-8]\\d\\d|9(?:[014]\\d|2[1-9]|3[0-489]|5[0-2]))|9[0-8]\\d\\d)\\d{4}",,,, "81234567",,, [8]], [,, "(?:18|8)00\\d{7}",,,, "18001234567",,, [10, 11]], [,, "1900\\d{7}",,,, "19001234567",,, [11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "(?:3[12]\\d|666)\\d{5}",,,, "31234567",,, [8]], "SG", 65, "0[0-3]\\d",,,,,,,, [[, "(\\d{4,5})", "$1", ["1[013-9]|77", "1(?:[013-8]|9(?:0[1-9]|[1-9]))|77"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:01|[1-9])"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], [, "(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]], [[, "(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:01|[1-9])"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], [, "(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "7000\\d{7}",,,, "70001234567",,, [11]],,, [,,,,,,,,, [-1]]],
    SH: [, [,, "(?:[256]\\d|8)\\d{3}",,,,,,, [4, 5]], [,, "2(?:[0-57-9]\\d|6[4-9])\\d\\d",,,, "22158"], [,, "[56]\\d{4}",,,, "51234",,, [5]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "262\\d\\d",,,, "26212",,, [5]], "SH", 290, "00",,,,,,,,,, [,,,,,,,,, [-1]], 1, "[256]", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SI: [, [,, "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",,,,,,, [5, 6, 7, 8]], [,, "(?:[1-357][2-8]|4[24-8])\\d{6}",,,, "12345678",,, [8], [7]], [,, "65(?:1\\d|55|[67]0)\\d{4}|(?:[37][01]|4[0139]|51|6[489])\\d{6}",,,, "31234567",,, [8]], [,, "80\\d{4,6}",,,, "80123456",,, [6, 7, 8]], [,, "89[1-3]\\d{2,5}|90\\d{4,6}",,,, "90123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "(?:59\\d\\d|8(?:1(?:[67]\\d|8[01389])|2(?:0\\d|2[0378]|8[0-2489])|3[389]\\d))\\d{4}",,,, "59012345",,, [8]], "SI", 386, "00|10(?:22|66|88|99)", "0",,, "0",, "00",, [[, "(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], [, "(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SJ: [, [,, "0\\d{4}|(?:[4589]\\d|79)\\d{6}",,,,,,, [5, 8]], [,, "79\\d{6}",,,, "79123456",,, [8]], [,, "(?:4[015-8]|5[89]|9\\d)\\d{6}",,,, "41234567",,, [8]], [,, "80[01]\\d{5}",,,, "80012345",,, [8]], [,, "82[09]\\d{5}",,,, "82012345",,, [8]], [,, "810(?:0[0-6]|[2-8]\\d)\\d{3}",,,, "81021234",,, [8]], [,, "880\\d{5}",,,, "88012345",,, [8]], [,, "85[0-5]\\d{5}",,,, "85012345",,, [8]], "SJ", 47, "00",,,,,,,,,, [,,,,,,,,, [-1]],, "79", [,,,,,,,,, [-1]], [,, "(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}",,,, "02000"],,, [,, "81[23]\\d{5}",,,, "81212345",,, [8]]],
    SK: [, [,, "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",,,,,,, [6, 7, 9]], [,, "(?:2(?:16|[2-9]\\d{3})|(?:(?:[3-5][1-8]\\d|819)\\d|601[1-5])\\d)\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d",,,, "221234567"], [,, "909[1-9]\\d{5}|9(?:0[1-8]|1[0-24-9]|4[03-57-9]|5\\d)\\d{6}",,,, "912123456",,, [9]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,, "9(?:00|[78]\\d)\\d{6}",,,, "900123456",,, [9]], [,, "8[5-9]\\d{7}",,,, "850123456",,, [9]], [,,,,,,,,, [-1]], [,, "6(?:02|5[0-4]|9[0-6])\\d{6}",,,, "690123456",,, [9]], "SK", 421, "00", "0",,, "0",,,, [[, "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], [, "(\\d{4})(\\d{3})", "$1 $2", ["909", "9090"], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], [[, "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], [,, "9090\\d{3}",,,, "9090123",,, [7]],,, [,, "9090\\d{3}|(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}",,,,,,, [7, 9]], [,, "96\\d{7}",,,, "961234567",,, [9]],,, [,,,,,,,,, [-1]]],
    SL: [, [,, "(?:[2378]\\d|66|99)\\d{6}",,,,,,, [8], [6]], [,, "22[2-4][2-9]\\d{4}",,,, "22221234",,,, [6]], [,, "(?:25|3[013-5]|66|7[4-9]|8[08]|99)\\d{6}",,,, "25123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "SL", 232, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SM: [, [,, "(?:0549|[5-7]\\d)\\d{6}",,,,,,, [8, 10], [6]], [,, "0549(?:8[0157-9]|9\\d)\\d{4}",,,, "0549886377",,, [10], [6]], [,, "6[16]\\d{6}",,,, "66661212",,, [8]], [,,,,,,,,, [-1]], [,, "7[178]\\d{6}",,,, "71123456",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "5[158]\\d{6}",,,, "58001110",,, [8]], "SM", 378, "00",,,, "([89]\\d{5})$", "0549$1",,, [[, "(\\d{6})", "$1", ["[89]"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], [, "(\\d{4})(\\d{6})", "$1 $2", ["0"]]], [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], [, "(\\d{4})(\\d{6})", "$1 $2", ["0"]]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SN: [, [,, "(?:[378]\\d{4}|93330)\\d{4}",,,,,,, [9]], [,, "3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}",,,, "301012345"], [,, "7(?:[06-8]\\d|21|90)\\d{6}",,,, "701234567"], [,, "800\\d{6}",,,, "800123456"], [,, "88[4689]\\d{6}",,,, "884123456"], [,, "81[02468]\\d{6}",,,, "810123456"], [,,,,,,,,, [-1]], [,, "93330\\d{4}|3(?:392|9[01]\\d)\\d{5}",,,, "933301234"], "SN", 221, "00",,,,,,,, [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SO: [, [,, "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",,,,,,, [6, 7, 8, 9]], [,, "(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|5[57-9])\\d{5}|(?:[134]\\d|8[125])\\d{4}",,,, "4012345",,, [6, 7]], [,, "28\\d{5}|(?:6[1-9]|79)\\d{6,7}|(?:15|24|(?:3[59]|4[89]|8[08])\\d|60|7[1-8]|9(?:0\\d|[2-9]))\\d{6}",,,, "71123456",,, [7, 8, 9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "SO", 252, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], [, "(\\d{6})", "$1", ["[134]"]], [, "(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], [, "(\\d)(\\d{7})", "$1 $2", ["24|[67]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3478]|64|90"]], [, "(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[1-35-9]|9[2-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SR: [, [,, "(?:[2-5]|68|[78]\\d)\\d{5}",,,,,,, [6, 7]], [,, "(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}",,,, "211234"], [,, "(?:7[124-7]|8[124-9])\\d{5}",,,, "7412345",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "56\\d{4}",,,, "561234",,, [6]], "SR", 597, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], [, "(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], [, "(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SS: [, [,, "[19]\\d{8}",,,,,,, [9]], [,, "1[89]\\d{7}",,,, "181234567"], [,, "(?:12|9[12579])\\d{7}",,,, "977123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "SS", 211, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    ST: [, [,, "(?:22|9\\d)\\d{5}",,,,,,, [7]], [,, "22\\d{5}",,,, "2221234"], [,, "900[5-9]\\d{3}|9(?:0[1-9]|[89]\\d)\\d{4}",,,, "9812345"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "ST", 239, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SV: [, [,, "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",,,,,,, [7, 8, 11]], [,, "2(?:[1-6]\\d{3}|[79]90[034]|890[0245])\\d{3}",,,, "21234567",,, [8]], [,, "66(?:[02-9]\\d\\d|1(?:[02-9]\\d|16))\\d{3}|(?:6[0-57-9]|7\\d)\\d{6}",,,, "70123456",,, [8]], [,, "800\\d{4}(?:\\d{4})?",,,, "8001234",,, [7, 11]], [,, "900\\d{4}(?:\\d{4})?",,,, "9001234",,, [7, 11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "SV", 503, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SX: [, [,, "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "7215(?:4[2-8]|8[239]|9[056])\\d{4}",,,, "7215425678",,,, [7]], [,, "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}",,,, "7215205678",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "SX", 1, "011", "1",,, "1|(5\\d{6})$", "721$1",,,,, [,,,,,,,,, [-1]],, "721", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SY: [, [,, "[1-39]\\d{8}|[1-5]\\d{7}",,,,,,, [8, 9], [6, 7]], [,, "21\\d{6,7}|(?:1(?:[14]\\d|[2356])|2[235]|3(?:[13]\\d|4)|4[134]|5[1-3])\\d{6}",,,, "112345678",,,, [6, 7]], [,, "9(?:22|[3-589]\\d|6[02-9])\\d{6}",,,, "944567890",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "SY", 963, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1",, 1]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SZ: [, [,, "0800\\d{4}|(?:[237]\\d|900)\\d{6}",,,,,,, [8, 9]], [,, "[23][2-5]\\d{6}",,,, "22171234",,, [8]], [,, "7[6-9]\\d{6}",,,, "76123456",,, [8]], [,, "0800\\d{4}",,,, "08001234",,, [8]], [,, "900\\d{6}",,,, "900012345",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "70\\d{6}",,,, "70012345",,, [8]], "SZ", 268, "00",,,,,,,, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], [, "(\\d{5})(\\d{4})", "$1 $2", ["9"]]],, [,,,,,,,,, [-1]],,, [,, "0800\\d{4}",,,,,,, [8]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TA: [, [,, "8\\d{3}",,,,,,, [4]], [,, "8\\d{3}",,,, "8999"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TA", 290, "00",,,,,,,,,, [,,,,,,,,, [-1]],, "8", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TC: [, [,, "(?:[58]\\d\\d|649|900)\\d{7}",,,,,,, [10], [7]], [,, "649(?:266|712|9(?:4\\d|50))\\d{4}",,,, "6497121234",,,, [7]], [,, "649(?:2(?:3[129]|4[1-79])|3\\d\\d|4[34][1-3])\\d{4}",,,, "6492311234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002345678"], [,, "900[2-9]\\d{6}",,,, "9002345678"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,, "649(?:71[01]|966)\\d{4}",,,, "6497101234",,,, [7]], "TC", 1, "011", "1",,, "1|([2-479]\\d{6})$", "649$1",,,,, [,,,,,,,,, [-1]],, "649", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TD: [, [,, "(?:22|[69]\\d|77)\\d{6}",,,,,,, [8]], [,, "22(?:[37-9]0|5[0-5]|6[89])\\d{4}",,,, "22501234"], [,, "(?:6[023568]|77|9\\d)\\d{6}",,,, "63012345"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TD", 235, "00|16",,,,,, "00",, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TG: [, [,, "[279]\\d{7}",,,,,,, [8]], [,, "2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}",,,, "22212345"], [,, "(?:7[09]|9[0-36-9])\\d{6}",,,, "90112345"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TG", 228, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TH: [, [,, "1\\d{9}|[1689]\\d{8}|[1-57]\\d{7}",,,,,,, [8, 9, 10]], [,, "(?:1[0689]|2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}",,,, "21234567",,, [8]], [,, "(?:14|6[1-6]|[89]\\d)\\d{7}",,,, "812345678",,, [9]], [,, "1800\\d{6}",,,, "1800123456",,, [10]], [,, "1900\\d{6}",,,, "1900123456",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "6[08]\\d{7}",,,, "601234567",,, [9]], "TH", 66, "00[1-9]", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TJ: [, [,, "(?:00|11|[3-57-9]\\d)\\d{7}",,,,,,, [9], [3, 5, 6, 7]], [,, "(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}",,,, "372123456",,,, [3, 5, 6, 7]], [,, "41[18]\\d{6}|(?:[04]0|11|5[05]|7[07]|88|9\\d)\\d{7}",,,, "917123456"], [,, "800\\d{6}",,,, "800123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TJ", 992, "810", "8",,, "8",, "8~10",, [[, "(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"],,, 1], [, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"],,, 1], [, "(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3"],,, 1], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0457-9]|11"],,, 1]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TK: [, [,, "[2-47]\\d{3,6}",,,,,,, [4, 5, 6, 7]], [,, "(?:2[2-4]|[34]\\d)\\d{2,5}",,,, "3101"], [,, "7[2-4]\\d{2,5}",,,, "7290"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TK", 690, "00",,,,,,,,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TL: [, [,, "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",,,,,,, [7, 8]], [,, "(?:2[1-5]|3[1-9]|4[1-4])\\d{5}",,,, "2112345",,, [7]], [,, "7[2-8]\\d{6}",,,, "77212345",,, [8]], [,, "80\\d{5}",,,, "8012345",,, [7]], [,, "90\\d{5}",,,, "9012345",,, [7]], [,,,,,,,,, [-1]], [,, "70\\d{5}",,,, "7012345",,, [7]], [,,,,,,,,, [-1]], "TL", 670, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["7"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TM: [, [,, "[1-6]\\d{7}",,,,,,, [8]], [,, "(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}",,,, "12345678"], [,, "6\\d{7}",,,, "66123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TM", 993, "810", "8",,, "8",, "8~10",, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TN: [, [,, "[2-57-9]\\d{7}",,,,,,, [8]], [,, "81200\\d{3}|(?:3[0-2]|7\\d)\\d{6}",,,, "30010123"], [,, "3(?:001|[12]40)\\d{4}|(?:(?:[259]\\d|4[0-7])\\d|3(?:1[1-35]|6[0-4]|91))\\d{5}",,,, "20123456"], [,, "8010\\d{4}",,,, "80101234"], [,, "88\\d{6}",,,, "88123456"], [,, "8[12]10\\d{4}",,,, "81101234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TN", 216, "00",,,,,,,, [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TO: [, [,, "(?:0800|[5-8]\\d{3})\\d{3}|[2-8]\\d{4}",,,,,,, [5, 7]], [,, "(?:2\\d|3[0-8]|4[0-4]|50|6[09]|7[0-24-69]|8[05])\\d{3}",,,, "20123",,, [5]], [,, "6(?:3[02]|8[5-9])\\d{4}|(?:6[09]|7\\d|8[46-9])\\d{5}",,,, "7715123",,, [7]], [,, "0800\\d{3}",,,, "0800222",,, [7]], [,, "55[04]\\d{4}",,,, "5501234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TO", 676, "00",,,,,,,, [[, "(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], [, "(\\d{4})(\\d{3})", "$1 $2", ["0"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["[5-8]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TR: [, [,, "(?:4|8\\d{5})\\d{6}|(?:[2-58]\\d\\d|900)\\d{7}",,,,,,, [7, 10, 12]], [,, "(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}",,,, "2123456789",,, [10]], [,, "56161\\d{5}|5(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{7}",,,, "5012345678",,, [10]], [,, "800\\d{7}(?:\\d{2})?",,,, "8001234567",,, [10, 12]], [,, "(?:8[89]8|900)\\d{7}",,,, "9001234567",,, [10]], [,,,,,,,,, [-1]], [,, "592(?:21[12]|461)\\d{4}",,,, "5922121234",,, [10]], [,,,,,,,,, [-1]], "TR", 90, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d)(\\d{3})", "$1 $2 $3", ["444"],,, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[0589]|90"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)",, 1], [, "(\\d{3})(\\d{3})(\\d{6})", "$1 $2 $3", ["80"], "0$1",, 1]], [[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[0589]|90"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)",, 1], [, "(\\d{3})(\\d{3})(\\d{6})", "$1 $2 $3", ["80"], "0$1",, 1]], [,, "512\\d{7}",,,, "5123456789",,, [10]],,, [,, "444\\d{4}",,,,,,, [7]], [,, "(?:444|850\\d{3})\\d{4}",,,, "4441444",,, [7, 10]],,, [,,,,,,,,, [-1]]],
    TT: [, [,, "(?:[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "868(?:2(?:0[13]|1[89]|[23]\\d|4[0-2])|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}",,,, "8682211234",,,, [7]], [,, "868(?:2(?:6[3-9]|[7-9]\\d)|(?:3\\d|4[6-9])\\d|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}",,,, "8682911234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002345678"], [,, "900[2-9]\\d{6}",,,, "9002345678"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "TT", 1, "011", "1",,, "1|([2-46-8]\\d{6})$", "868$1",,,,, [,,,,,,,,, [-1]],, "868", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,, "868619\\d{4}",,,, "8686191234",,,, [7]]],
    TV: [, [,, "(?:2|7\\d\\d|90)\\d{4}",,,,,,, [5, 6, 7]], [,, "2[02-9]\\d{3}",,,, "20123",,, [5]], [,, "(?:7[01]\\d|90)\\d{4}",,,, "901234",,, [6, 7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TV", 688, "00",,,,,,,, [[, "(\\d{2})(\\d{3})", "$1 $2", ["2"]], [, "(\\d{2})(\\d{4})", "$1 $2", ["90"]], [, "(\\d{2})(\\d{5})", "$1 $2", ["7"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TW: [, [,, "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",,,,,,, [7, 8, 9, 10, 11]], [,, "(?:2[2-8]\\d|370|55[01]|7[1-9])\\d{6}|4(?:(?:0(?:0[1-9]|[2-48]\\d)|1[023]\\d)\\d{4,5}|(?:[239]\\d\\d|4(?:0[56]|12|49))\\d{5})|6(?:[01]\\d{7}|4(?:0[56]|12|24|4[09])\\d{4,5})|8(?:(?:2(?:3\\d|4[0-269]|[578]0|66)|36[24-9]|90\\d\\d)\\d{4}|4(?:0[56]|12|24|4[09])\\d{4,5})|(?:2(?:2(?:0\\d\\d|4(?:0[68]|[249]0|3[0-467]|5[0-25-9]|6[0235689]))|(?:3(?:[09]\\d|1[0-4])|(?:4\\d|5[0-49]|6[0-29]|7[0-5])\\d)\\d)|(?:(?:3[2-9]|5[2-8]|6[0-35-79]|8[7-9])\\d\\d|4(?:2(?:[089]\\d|7[1-9])|(?:3[0-4]|[78]\\d|9[01])\\d))\\d)\\d{3}",,,, "221234567",,, [8, 9]], [,, "(?:40001[0-2]|9[0-8]\\d{4})\\d{3}",,,, "912345678",,, [9]], [,, "80[0-79]\\d{6}|800\\d{5}",,,, "800123456",,, [8, 9]], [,, "20(?:[013-9]\\d\\d|2)\\d{4}",,,, "203123456",,, [7, 9]], [,,,,,,,,, [-1]], [,, "99\\d{7}",,,, "990123456",,, [9]], [,, "7010(?:[0-2679]\\d|3[0-7]|8[0-5])\\d{5}|70\\d{8}",,,, "7012345678",,, [10, 11]], "TW", 886, "0(?:0[25-79]|19)", "0", "#",, "0",,,, [[, "(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], [, "(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "50[0-46-9]\\d{6}",,,, "500123456",,, [9]],,, [,,,,,,,,, [-1]]],
    TZ: [, [,, "(?:[26-8]\\d|41|90)\\d{7}",,,,,,, [9]], [,, "2[2-8]\\d{7}",,,, "222345678"], [,, "77[2-9]\\d{6}|(?:6[2-9]|7[13-689])\\d{7}",,,, "621234567"], [,, "80[08]\\d{6}",,,, "800123456"], [,, "90\\d{7}",,,, "900123456"], [,, "8(?:40|6[01])\\d{6}",,,, "840123456"], [,,,,,,,,, [-1]], [,, "41\\d{7}",,,, "412345678"], "TZ", 255, "00[056]", "0",,, "0",,,, [[, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,, "(?:8(?:[04]0|6[01])|90\\d)\\d{6}"], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    UA: [, [,, "[89]\\d{9}|[3-9]\\d{8}",,,,,,, [9, 10], [5, 6, 7]], [,, "(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}",,,, "311234567",,, [9], [5, 6, 7]], [,, "(?:50|6[36-8]|7[1-3]|9[1-9])\\d{7}",,,, "501234567",,, [9]], [,, "800[1-8]\\d{5,6}",,,, "800123456"], [,, "900[239]\\d{5,6}",,,, "900212345"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "89[1-579]\\d{6}",,,, "891234567",,, [9]], "UA", 380, "00", "0",,, "0",, "0~0",, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]", "4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]"], "0$1"], [, "(\\d{4})(\\d{5})", "$1 $2", ["[3-6]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    UG: [, [,, "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",,,,,,, [9], [5, 6, 7]], [,, "20(?:(?:(?:24|81)0|30[67])\\d|6(?:00[0-2]|30[0-4]))\\d{3}|(?:20(?:[0147]\\d|2[5-9]|32|5[0-4]|6[15-9])|[34]\\d{3})\\d{5}",,,, "312345678",,,, [5, 6, 7]], [,, "7260\\d{5}|7(?:[0157-9]\\d|20|36|4[0-4])\\d{6}",,,, "712345678"], [,, "800[1-3]\\d{5}",,,, "800123456"], [,, "90[1-3]\\d{6}",,,, "901123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "UG", 256, "00[057]", "0",,, "0",,,, [[, "(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], [, "(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    US: [, [,, "[2-9]\\d{9}",,,,,,, [10], [7]], [,, "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[0179]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",,,, "2015550123",,,, [7]], [,, "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[0179]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",,,, "2015550123",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002345678"], [,, "900[2-9]\\d{6}",,,, "9002345678"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "US", 1, "011", "1",,, "1",,, 1, [[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-9]"]], [, "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"],,, 1]], [[, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-9]"]]], [,,,,,,,,, [-1]], 1,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    UY: [, [,, "(?:[249]\\d\\d|80)\\d{5}|9\\d{6}",,,,,,, [7, 8]], [,, "(?:2\\d|4[2-7])\\d{6}",,,, "21231234",,, [8], [7]], [,, "9[1-9]\\d{6}",,,, "94231234",,, [8]], [,, "80[05]\\d{4}",,,, "8001234",,, [7]], [,, "90[0-8]\\d{4}",,,, "9001234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "UY", 598, "0(?:0|1[3-9]\\d)", "0", " int. ",, "0",, "00",, [[, "(\\d{3})(\\d{4})", "$1 $2", ["8|90"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{4})(\\d{4})", "$1 $2", ["[24]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    UZ: [, [,, "55501\\d{4}|(?:[679]\\d|88)\\d{7}",,,,,,, [9]], [,, "(?:6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d\\d|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|(?:1[12]|8\\d)\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}",,,, "669050123"], [,, "(?:55501|6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:[07]\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))|(?:88|9[0-57-9])\\d{3})\\d{4}",,,, "912345678"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "UZ", 998, "810", "8",,, "8",, "8~10",, [[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"], "8 $1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    VA: [, [,, "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",,,,,,, [6, 7, 8, 9, 10, 11, 12]], [,, "06698\\d{1,6}",,,, "0669812345",,, [6, 7, 8, 9, 10, 11]], [,, "3[1-9]\\d{8}|3[2-9]\\d{7}",,,, "3123456789",,, [9, 10]], [,, "80(?:0\\d{3}|3)\\d{3}",,,, "800123456",,, [6, 9]], [,, "(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}",,,, "899123456",,, [6, 8, 9, 10]], [,, "84(?:[08]\\d{3}|[17])\\d{3}",,,, "848123456",,, [6, 9]], [,, "1(?:78\\d|99)\\d{6}",,,, "1781234567",,, [9, 10]], [,, "55\\d{8}",,,, "5512345678",,, [10]], "VA", 39, "00",,,,,,,,,, [,,,,,,,,, [-1]],, "06698", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,, "3[2-8]\\d{9,10}",,,, "33101234501",,, [11, 12]]],
    VC: [, [,, "(?:[58]\\d\\d|784|900)\\d{7}",,,,,,, [10], [7]], [,, "784(?:266|3(?:6[6-9]|7\\d|8[0-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}",,,, "7842661234",,,, [7]], [,, "784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4])|720)\\d{4}",,,, "7844301234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002345678"], [,, "900[2-9]\\d{6}",,,, "9002345678"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "VC", 1, "011", "1",,, "1|([2-7]\\d{6})$", "784$1",,,,, [,,,,,,,,, [-1]],, "784", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    VE: [, [,, "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",,,,,,, [10], [7]], [,, "(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|[4-6]00)\\d{7}",,,, "2121234567",,,, [7]], [,, "4(?:1[24-8]|2[46])\\d{7}",,,, "4121234567"], [,, "800\\d{7}",,,, "8001234567"], [,, "90[01]\\d{7}",,,, "9001234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "VE", 58, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1", "$CC $1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "501\\d{7}",,,, "5010123456",,,, [7]],,, [,,,,,,,,, [-1]]],
    VG: [, [,, "(?:284|[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "284496[0-5]\\d{3}|284(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}",,,, "2842291234",,,, [7]], [,, "284496[6-9]\\d{3}|284(?:245|3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|99)|5(?:4[0-7]|68|9[69]))\\d{4}",,,, "2843001234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002345678"], [,, "900[2-9]\\d{6}",,,, "9002345678"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "VG", 1, "011", "1",,, "1|([2-578]\\d{6})$", "284$1",,,,, [,,,,,,,,, [-1]],, "284", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    VI: [, [,, "[58]\\d{9}|(?:34|90)0\\d{7}",,,,,,, [10], [7]], [,, "340(?:2(?:0[12]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}",,,, "3406421234",,,, [7]], [,, "340(?:2(?:0[12]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}",,,, "3406421234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002345678"], [,, "900[2-9]\\d{6}",,,, "9002345678"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "VI", 1, "011", "1",,, "1|([2-9]\\d{6})$", "340$1",, 1,,, [,,,,,,,,, [-1]],, "340", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    VN: [, [,, "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",,,,,,, [7, 8, 9, 10]], [,, "2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-79]|9[0-4679])\\d{7}",,,, "2101234567",,, [10]], [,, "(?:52[238]|89[689]|99[013-9])\\d{6}|(?:3\\d|5[689]|7[06-9]|8[1-8]|9[0-8])\\d{7}",,,, "912345678",,, [9]], [,, "1800\\d{4,6}|12(?:03|28)\\d{4}",,,, "1800123456",,, [8, 9, 10]], [,, "1900\\d{4,6}",,,, "1900123456",,, [8, 9, 10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "672\\d{6}",,,, "672012345",,, [9]], "VN", 84, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[17]99"], "0$1",, 1], [, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1",, 1], [, "(\\d{3})(\\d{4,5})", "$1 $2", ["69"], "0$1",, 1], [, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"],,, 1], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1",, 1], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1",, 1], [, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1",, 1]], [[, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1",, 1], [, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"],,, 1], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1",, 1], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1",, 1], [, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1",, 1]], [,,,,,,,,, [-1]],,, [,, "[17]99\\d{4}|69\\d{5,6}",,,,,,, [7, 8]], [,, "(?:[17]99|80\\d)\\d{4}|69\\d{5,6}",,,, "1992000",,, [7, 8]],,, [,,,,,,,,, [-1]]],
    VU: [, [,, "(?:[23]\\d|[48]8)\\d{3}|(?:[57]\\d|90)\\d{5}",,,,,,, [5, 7]], [,, "(?:38[0-8]|48[4-9])\\d\\d|(?:2[02-9]|3[4-7]|88)\\d{3}",,,, "22123",,, [5]], [,, "(?:5\\d|7[013-7])\\d{5}",,,, "5912345",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "90[1-9]\\d{4}",,,, "9010123",,, [7]], "VU", 678, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "(?:3[03]|900\\d)\\d{3}",,,, "30123"],,, [,,,,,,,,, [-1]]],
    WF: [, [,, "(?:[45]0|68|72|8\\d)\\d{4}",,,,,,, [6]], [,, "(?:50|68|72)\\d{4}",,,, "501234"], [,, "(?:50|68|72|8[23])\\d{4}",,,, "501234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "WF", 681, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[4-8]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,, "[48]0\\d{4}",,,, "401234"]],
    WS: [, [,, "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",,,,,,, [5, 6, 7, 10]], [,, "6[1-9]\\d{3}|(?:[2-5]|60)\\d{4}",,,, "22123",,, [5, 6]], [,, "(?:7[235-7]|8(?:[3-7]|9\\d{3}))\\d{5}",,,, "7212345",,, [7, 10]], [,, "800\\d{3}",,,, "800123",,, [6]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "WS", 685, "0",,,,,,,, [[, "(\\d{5})", "$1", ["[2-5]|6[1-9]"]], [, "(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], [, "(\\d{2})(\\d{5})", "$1 $2", ["7"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    XK: [, [,, "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",,,,,,, [8, 9]], [,, "(?:2[89]|39)0\\d{6}|[23][89]\\d{6}",,,, "28012345"], [,, "4[3-9]\\d{6}",,,, "43201234",,, [8]], [,, "800\\d{5}",,,, "80001234",,, [8]], [,, "900\\d{5}",,,, "90001234",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "XK", 383, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    YE: [, [,, "(?:1|7\\d)\\d{7}|[1-7]\\d{6}",,,,,,, [7, 8, 9], [6]], [,, "78[0-7]\\d{4}|17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-6])\\d{5}",,,, "1234567",,, [7, 8], [6]], [,, "7[0137]\\d{7}",,,, "712345678",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "YE", 967, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    YT: [, [,, "80\\d{7}|(?:26|63)9\\d{6}",,,,,,, [9]], [,, "269(?:0[67]|5[0-2]|6\\d|[78]0)\\d{4}",,,, "269601234"], [,, "639(?:0[0-79]|1[019]|[267]\\d|3[09]|[45]0|9[04-79])\\d{4}",,,, "639012345"], [,, "80\\d{7}",,,, "801234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "YT", 262, "00", "0",,, "0",,,,,, [,,,,,,,,, [-1]],, "269|63", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    ZA: [, [,, "[1-79]\\d{8}|8\\d{4,9}",,,,,,, [5, 6, 7, 8, 9, 10]], [,, "(?:2(?:0330|4302)|52087)0\\d{3}|(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}",,,, "101234567",,, [9]], [,, "(?:1(?:3492[0-25]|4495[0235]|549(?:20|5[01]))|4[34]492[01])\\d{3}|8[1-4]\\d{3,7}|(?:2[27]|47|54)4950\\d{3}|(?:1(?:049[2-4]|9[12]\\d\\d)|(?:6\\d|7[0-46-9])\\d{3}|8(?:5\\d{3}|7(?:08[67]|158|28[5-9]|310)))\\d{4}|(?:1[6-8]|28|3[2-69]|4[025689]|5[36-8])4920\\d{3}|(?:12|[2-5]1)492\\d{4}",,,, "711234567",,, [5, 6, 7, 8, 9]], [,, "80\\d{7}",,,, "801234567",,, [9]], [,, "(?:86[2-9]|9[0-2]\\d)\\d{6}",,,, "862345678",,, [9]], [,, "860\\d{6}",,,, "860123456",,, [9]], [,,,,,,,,, [-1]], [,, "87(?:08[0-589]|15[0-79]|28[0-4]|31[1-9])\\d{4}|87(?:[02][0-79]|1[0-46-9]|3[02-9]|[4-9]\\d)\\d{5}",,,, "871234567",,, [9]], "ZA", 27, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "861\\d{6,7}",,,, "861123456",,, [9, 10]],,, [,,,,,,,,, [-1]]],
    ZM: [, [,, "(?:63|80)0\\d{6}|(?:21|[79]\\d)\\d{7}",,,,,,, [9], [6]], [,, "21[1-8]\\d{6}",,,, "211234567",,,, [6]], [,, "(?:7[679]|9[5-8])\\d{7}",,,, "955123456"], [,, "800\\d{6}",,,, "800123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "630\\d{6}",,,, "630012345"], "ZM", 260, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3})", "$1 $2", ["[1-9]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    ZW: [, [,, "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",,,,,,, [5, 6, 7, 8, 9, 10], [3, 4]], [,, "(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:4\\d\\d|9[2-9])\\d{4,5}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}",,,, "1312345",,,, [3, 4]], [,, "7(?:[17]\\d|[38][1-9])\\d{6}",,,, "712345678",,, [9]], [,, "80(?:[01]\\d|20|8[0-8])\\d{3}",,,, "8001234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "86(?:1[12]|22|30|44|55|77|8[368])\\d{6}",,,, "8686123456",,, [10]], "ZW", 263, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], [, "(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], [, "(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], [, "(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], [, "(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], [, "(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    800: [, [,, "[1-9]\\d{7}",,,,,,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "[1-9]\\d{7}",,,, "12345678"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "001", 800,,,,,,,, 1, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    808: [, [,, "[1-9]\\d{7}",,,,,,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "[1-9]\\d{7}",,,, "12345678"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "001", 808,,,,,,,, 1, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    870: [, [,, "[35-7]\\d{8}",,,,,,, [9]], [,,,,,,,,, [-1]], [,, "(?:[356]\\d|7[6-8])\\d{7}",,,, "301234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "001", 870,,,,,,,,, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    878: [, [,, "10\\d{10}",,,,,,, [12]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "10\\d{10}",,,, "101234567890"], "001", 878,,,,,,,, 1, [[, "(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    881: [, [,, "[0-36-9]\\d{8}",,,,,,, [9]], [,,,,,,,,, [-1]], [,, "[0-36-9]\\d{8}",,,, "612345678"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "001", 881,,,,,,,,, [[, "(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    882: [, [,, "[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|[19]\\d{7}",,,,,,, [7, 8, 9, 10, 11, 12]], [,,,,,,,,, [-1]], [,, "3(?:37\\d\\d|42)\\d{4}|3(?:2|47|7\\d{3})\\d{7}",,,, "3421234",,, [7, 9, 10, 12]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}",,,, "390123456789"], "001", 882,,,,,,,,, [[, "(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[19]"]], [, "(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], [, "(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-3]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,, "348[57]\\d{7}",,,, "34851234567",,, [11]]],
    883: [, [,, "51\\d{7}(?:\\d{3})?",,,,,,, [9, 12]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "51[013]0\\d{8}|5100\\d{5}",,,, "510012345"], "001", 883,,,,,,,, 1, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["510"]], [, "(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["5"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    888: [, [,, "\\d{11}",,,,,,, [11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "001", 888,,,,,,,, 1, [[, "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "\\d{11}",,,, "12345678901"],,, [,,,,,,,,, [-1]]],
    979: [, [,, "[1359]\\d{8}",,,,,,, [9], [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "[1359]\\d{8}",,,, "123456789",,,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "001", 979,,,,,,,, 1, [[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]]
  };
  /*
  Copyright (C) 2010 The Libphonenumber Authors.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  function L() {
    this.a = {};
  }

  L.a = void 0;

  L.b = function () {
    return L.a ? L.a : L.a = new L();
  };

  var Ba = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "\uFF10": "0",
    "\uFF11": "1",
    "\uFF12": "2",
    "\uFF13": "3",
    "\uFF14": "4",
    "\uFF15": "5",
    "\uFF16": "6",
    "\uFF17": "7",
    "\uFF18": "8",
    "\uFF19": "9",
    "\u0660": "0",
    "\u0661": "1",
    "\u0662": "2",
    "\u0663": "3",
    "\u0664": "4",
    "\u0665": "5",
    "\u0666": "6",
    "\u0667": "7",
    "\u0668": "8",
    "\u0669": "9",
    "\u06F0": "0",
    "\u06F1": "1",
    "\u06F2": "2",
    "\u06F3": "3",
    "\u06F4": "4",
    "\u06F5": "5",
    "\u06F6": "6",
    "\u06F7": "7",
    "\u06F8": "8",
    "\u06F9": "9"
  },
      Ca = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "+": "+",
    "*": "*",
    "#": "#"
  },
      Da = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "\uFF10": "0",
    "\uFF11": "1",
    "\uFF12": "2",
    "\uFF13": "3",
    "\uFF14": "4",
    "\uFF15": "5",
    "\uFF16": "6",
    "\uFF17": "7",
    "\uFF18": "8",
    "\uFF19": "9",
    "\u0660": "0",
    "\u0661": "1",
    "\u0662": "2",
    "\u0663": "3",
    "\u0664": "4",
    "\u0665": "5",
    "\u0666": "6",
    "\u0667": "7",
    "\u0668": "8",
    "\u0669": "9",
    "\u06F0": "0",
    "\u06F1": "1",
    "\u06F2": "2",
    "\u06F3": "3",
    "\u06F4": "4",
    "\u06F5": "5",
    "\u06F6": "6",
    "\u06F7": "7",
    "\u06F8": "8",
    "\u06F9": "9",
    A: "2",
    B: "2",
    C: "2",
    D: "3",
    E: "3",
    F: "3",
    G: "4",
    H: "4",
    I: "4",
    J: "5",
    K: "5",
    L: "5",
    M: "6",
    N: "6",
    O: "6",
    P: "7",
    Q: "7",
    R: "7",
    S: "7",
    T: "8",
    U: "8",
    V: "8",
    W: "9",
    X: "9",
    Y: "9",
    Z: "9"
  },
      Ea = /[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?/,
      Fa = /[+\uff0b]+/,
      M = /^[+\uff0b]+/,
      Ga = /([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])/,
      Ha = /[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]/,
      Ia = /[\\\/] *x/,
      Ja = /[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$/,
      Ka = /(?:.*?[A-Za-z]){3}.*/,
      La = /(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$/i,
      Ma = /^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$/i,
      Na = /(\$\d)/,
      Oa = /^\(?\$1\)?$/;

  function Pa(a) {
    var b = a.search(Ha);
    0 <= b ? (a = a.substring(b), a = a.replace(Ja, ""), b = a.search(Ia), 0 <= b && (a = a.substring(0, b))) : a = "";
    return a;
  }

  function Qa(a) {
    return 2 > a.length ? !1 : N(Ma, a);
  }

  function Ra(a) {
    return N(Ka, a) ? O(a, Da) : O(a, Ba);
  }

  function Sa(a) {
    var b = Ra(a.toString());
    r(a);
    a.a(b);
  }

  function Ta() {
    return ba(Object.keys(K), function (a) {
      return isNaN(a);
    });
  }

  function Ua() {
    var a = ba(Object.keys(K), function (a) {
      return !isNaN(a);
    });
    return ca(a, function (a) {
      return parseInt(a, 10);
    });
  }

  function Va() {
    var a = Object.keys(J);
    return da(Ua(), ca(a, function (a) {
      return parseInt(a, 10);
    }));
  }

  function Wa(a) {
    return null != a && (1 != B(a, 9) || -1 != y(a, 9)[0]);
  }

  function O(a, b) {
    for (var c = new q(), d, e = a.length, f = 0; f < e; ++f) {
      d = a.charAt(f), d = b[d.toUpperCase()], null != d && c.a(d);
    }

    return c.toString();
  }

  function Xa(a) {
    return 0 == a.length || Oa.test(a);
  }

  function P(a) {
    return null != a && isNaN(a) && a.toUpperCase() in K;
  }

  function R(a, b, c) {
    if (0 == w(b, 2) && v(b, 5)) {
      var d = A(b, 5);
      if (0 < d.length) return d;
    }

    d = A(b, 1);
    var e = S(b);
    if (0 == c) return Ya(d, 0, e, "");
    if (!(d in J)) return e;
    a = T(a, d, U(d));
    b = Za(b, a, c);
    e = $a(e, a, c);
    return Ya(d, c, e, b);
  }

  function T(a, b, c) {
    return "001" == c ? V(a, "" + b) : V(a, c);
  }

  function ab(a, b) {
    var c = W;
    if (!P(b)) return R(c, a, 1);
    var d = A(a, 1),
        e = S(a);
    if (!(d in J)) return e;

    if (1 == d) {
      if (null != b && 0 <= t(J[1], b.toUpperCase())) return d + " " + R(c, a, 2);
    } else if (d == bb(c, b)) return R(c, a, 2);

    var f = V(c, b),
        g = A(f, 11);
    b = "";
    N(Ea, g) ? b = g : v(f, 17) && (b = A(f, 17));
    c = T(c, d, U(d));
    e = $a(e, c, 1);
    a = Za(a, c, 1);
    return 0 < b.length ? b + " " + d + " " + e + a : Ya(d, 1, e, a);
  }

  function S(a) {
    if (!v(a, 2)) return "";
    var b = "" + w(a, 2);
    return v(a, 4) && w(a, 4) && 0 < A(a, 8) ? Array(A(a, 8) + 1).join("0") + b : b;
  }

  function Ya(a, b, c, d) {
    switch (b) {
      case 0:
        return "+" + a + c + d;

      case 1:
        return "+" + a + " " + c + d;

      case 3:
        return "tel:+" + a + "-" + c + d;

      default:
        return c + d;
    }
  }

  function $a(a, b, c) {
    a: {
      b = 0 == y(b, 20).length || 2 == c ? y(b, 19) : y(b, 20);

      for (var d, e = b.length, f = 0; f < e; ++f) {
        d = b[f];
        var g = B(d, 3);
        if (0 == g || 0 == a.search(w(d, 3, g - 1))) if (g = new RegExp(w(d, 1)), N(g, a)) {
          b = d;
          break a;
        }
      }

      b = null;
    }

    null != b && (e = b, b = A(e, 2), d = new RegExp(w(e, 1)), A(e, 5), e = A(e, 4), a = 2 == c && null != e && 0 < e.length ? a.replace(d, b.replace(Na, e)) : a.replace(d, b), 3 == c && (a = a.replace(/^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/, ""), a = a.replace(/[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/g, "-")));
    return c = a;
  }

  function cb(a, b) {
    var c = W;
    if (!P(a)) return null;
    b = db(V(c, a), b);

    try {
      if (v(b, 6)) {
        var d = w(b, 6);
        return eb(c, d, a);
      }
    } catch (e) {}

    return null;
  }

  function Za(a, b, c) {
    return v(a, 3) && 0 != w(a, 3).length ? 3 == c ? ";ext=" + w(a, 3) : v(b, 13) ? w(b, 13) + A(a, 3) : " ext. " + A(a, 3) : "";
  }

  function db(a, b) {
    switch (b) {
      case 4:
        return w(a, 5);

      case 3:
        return w(a, 4);

      case 1:
        return w(a, 3);

      case 0:
      case 2:
        return w(a, 2);

      case 5:
        return w(a, 6);

      case 6:
        return w(a, 8);

      case 7:
        return w(a, 7);

      case 8:
        return w(a, 21);

      case 9:
        return w(a, 25);

      case 10:
        return w(a, 28);

      default:
        return w(a, 1);
    }
  }

  function fb(a, b) {
    return X(a, w(b, 1)) ? X(a, w(b, 5)) ? 4 : X(a, w(b, 4)) ? 3 : X(a, w(b, 6)) ? 5 : X(a, w(b, 8)) ? 6 : X(a, w(b, 7)) ? 7 : X(a, w(b, 21)) ? 8 : X(a, w(b, 25)) ? 9 : X(a, w(b, 28)) ? 10 : X(a, w(b, 2)) ? w(b, 18) || X(a, w(b, 3)) ? 2 : 0 : !w(b, 18) && X(a, w(b, 3)) ? 1 : -1 : -1;
  }

  function V(a, b) {
    if (null == b) return null;
    b = b.toUpperCase();
    var c = a.a[b];

    if (null == c) {
      c = K[b];
      if (null == c) return null;
      c = new H().a(F.h(), c);
      a.a[b] = c;
    }

    return c;
  }

  function X(a, b) {
    var c = a.length;
    return 0 < B(b, 9) && -1 == t(y(b, 9), c) ? !1 : N(A(b, 2), a);
  }

  function gb(a) {
    var b = W,
        c = hb(b, a);
    var d = A(a, 1);
    var e = T(b, d, c);
    null == e || "001" != c && d != bb(b, c) ? e = !1 : (a = S(a), e = -1 != fb(a, e));
    return e;
  }

  function hb(a, b) {
    if (null == b) return null;
    var c = A(b, 1);
    c = J[c];
    if (null == c) a = null;else if (1 == c.length) a = c[0];else a: {
      b = S(b);

      for (var d, e = c.length, f = 0; f < e; f++) {
        d = c[f];
        var g = V(a, d);

        if (v(g, 23)) {
          if (0 == b.search(w(g, 23))) {
            a = d;
            break a;
          }
        } else if (-1 != fb(b, g)) {
          a = d;
          break a;
        }
      }

      a = null;
    }
    return a;
  }

  function U(a) {
    a = J[a];
    return null == a ? "ZZ" : a[0];
  }

  function bb(a, b) {
    a = V(a, b);
    if (null == a) throw Error("Invalid region code: " + b);
    return A(a, 10);
  }

  function ib(a) {
    a = jb(a);
    return 0 == a || 4 == a;
  }

  function kb(a, b, c, d) {
    var e = db(c, d),
        f = 0 == B(e, 9) ? y(w(c, 1), 9) : y(e, 9);
    e = y(e, 10);
    if (2 == d) if (Wa(db(c, 0))) a = db(c, 1), Wa(a) && (f = f.concat(0 == B(a, 9) ? y(w(c, 1), 9) : y(a, 9)), ea(f), 0 == e.length ? e = y(a, 10) : (e = e.concat(y(a, 10)), ea(e)));else return kb(a, b, c, 1);
    if (-1 == f[0]) return 5;
    b = b.length;
    if (-1 < t(e, b)) return 4;
    c = f[0];
    return c == b ? 0 : c > b ? 2 : f[f.length - 1] < b ? 3 : -1 < t(f, b, 1) ? 0 : 5;
  }

  function jb(a) {
    var b = W,
        c = S(a);
    a = A(a, 1);
    if (!(a in J)) return 1;
    a = T(b, a, U(a));
    return kb(b, c, a, -1);
  }

  function lb(a, b) {
    a = a.toString();
    if (0 == a.length || "0" == a.charAt(0)) return 0;

    for (var c, d = a.length, e = 1; 3 >= e && e <= d; ++e) {
      if (c = parseInt(a.substring(0, e), 10), c in J) return b.a(a.substring(e)), c;
    }

    return 0;
  }

  function mb(a, b, c, d, e) {
    if (0 == b.length) return 0;
    b = new q(b);
    var f;
    null != c && (f = w(c, 11));
    null == f && (f = "NonMatch");
    var g = b.toString();
    if (0 == g.length) f = 20;else if (M.test(g)) g = g.replace(M, ""), r(b), b.a(Ra(g)), f = 1;else {
      g = new RegExp(f);
      Sa(b);
      f = b.toString();

      if (0 == f.search(g)) {
        g = f.match(g)[0].length;
        var k = f.substring(g).match(Ga);
        k && null != k[1] && 0 < k[1].length && "0" == O(k[1], Ba) ? f = !1 : (r(b), b.a(f.substring(g)), f = !0);
      } else f = !1;

      f = f ? 5 : 20;
    }

    if (20 != f) {
      if (2 >= b.b.length) throw Error("Phone number too short after IDD");
      a = lb(b, d);
      if (0 != a) return x(e, 1, a), a;
      throw Error("Invalid country calling code");
    }

    if (null != c && (f = A(c, 10), g = "" + f, k = b.toString(), 0 == k.lastIndexOf(g, 0) && (g = new q(k.substring(g.length)), k = w(c, 1), k = new RegExp(A(k, 2)), nb(g, c, null), g = g.toString(), !N(k, b.toString()) && N(k, g) || 3 == kb(a, b.toString(), c, -1)))) return d.a(g), x(e, 1, f), f;
    x(e, 1, 0);
    return 0;
  }

  function nb(a, b, c) {
    var d = a.toString(),
        e = d.length,
        f = w(b, 15);

    if (0 != e && null != f && 0 != f.length) {
      var g = new RegExp("^(?:" + f + ")");

      if (e = g.exec(d)) {
        f = new RegExp(A(w(b, 1), 2));
        var k = N(f, d),
            p = e.length - 1;
        b = w(b, 16);

        if (null == b || 0 == b.length || null == e[p] || 0 == e[p].length) {
          if (!k || N(f, d.substring(e[0].length))) null != c && 0 < p && null != e[p] && c.a(e[1]), a.set(d.substring(e[0].length));
        } else if (d = d.replace(g, b), !k || N(f, d)) null != c && 0 < p && c.a(e[1]), a.set(d);
      }
    }
  }

  function eb(a, b, c) {
    if (null == b) throw Error("The string supplied did not seem to be a phone number");
    if (250 < b.length) throw Error("The string supplied is too long to be a phone number");
    var d = new q(),
        e = b.indexOf(";phone-context=");

    if (0 <= e) {
      var f = e + 15;

      if ("+" == b.charAt(f)) {
        var g = b.indexOf(";", f);
        0 < g ? d.a(b.substring(f, g)) : d.a(b.substring(f));
      }

      f = b.indexOf("tel:");
      d.a(b.substring(0 <= f ? f + 4 : 0, e));
    } else d.a(Pa(b));

    b = d.toString();
    e = b.indexOf(";isub=");
    0 < e && (r(d), d.a(b.substring(0, e)));
    if (!Qa(d.toString())) throw Error("The string supplied did not seem to be a phone number");
    b = d.toString();
    if (!(P(c) || null != b && 0 < b.length && M.test(b))) throw Error("Invalid country calling code");
    b = new I();

    a: {
      e = d.toString();
      f = e.search(La);

      if (0 <= f && Qa(e.substring(0, f))) {
        g = e.match(La);

        for (var k = g.length, p = 1; p < k; ++p) {
          if (null != g[p] && 0 < g[p].length) {
            r(d);
            d.a(e.substring(0, f));
            e = g[p];
            break a;
          }
        }
      }

      e = "";
    }

    0 < e.length && x(b, 3, e);
    f = V(a, c);
    e = new q();
    g = 0;
    k = d.toString();

    try {
      g = mb(a, k, f, e, b);
    } catch (Q) {
      if ("Invalid country calling code" == Q.message && M.test(k)) {
        if (k = k.replace(M, ""), g = mb(a, k, f, e, b), 0 == g) throw Q;
      } else throw Q;
    }

    0 != g ? (d = U(g), d != c && (f = T(a, g, d))) : (Sa(d), e.a(d.toString()), null != c && (g = A(f, 10), x(b, 1, g)));
    if (2 > e.b.length) throw Error("The string supplied is too short to be a phone number");
    null != f && (c = new q(e.toString()), nb(c, f, new q()), a = kb(a, c.toString(), f, -1), 2 != a && 4 != a && 5 != a && (e = c));
    a = e.toString();
    c = a.length;
    if (2 > c) throw Error("The string supplied is too short to be a phone number");
    if (17 < c) throw Error("The string supplied is too long to be a phone number");

    if (1 < a.length && "0" == a.charAt(0)) {
      x(b, 4, !0);

      for (c = 1; c < a.length - 1 && "0" == a.charAt(c);) {
        c++;
      }

      1 != c && x(b, 8, c);
    }

    x(b, 2, parseInt(a, 10));
    return b;
  }

  function N(a, b) {
    return (a = "string" == typeof a ? b.match("^(?:" + a + ")$") : b.match(a)) && a[0].length == b.length ? !0 : !1;
  }

  function ob(a) {
    this.ha = /\u2008/;
    this.ca = "";
    this.m = new q();
    this.$ = "";
    this.j = new q();
    this.o = new q();
    this.l = !0;
    this.aa = this.s = this.ea = !1;
    this.fa = L.b();
    this.u = 0;
    this.b = new q();
    this.ba = !1;
    this.i = "";
    this.a = new q();
    this.f = [];
    this.da = a;
    this.ma = this.g = pb(this, this.da);
  }

  var qb = new F();
  x(qb, 11, "NA");
  var rb = /^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]*(\$\d[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]*)+$/,
      sb = /[- ]/;

  function pb(a, b) {
    b = P(b) ? bb(a.fa, b) : 0;
    a = V(a.fa, U(b));
    return null != a ? a : qb;
  }

  function tb(a) {
    for (var b = a.f.length, c = 0; c < b; ++c) {
      var d = a.f[c],
          e = A(d, 1);
      if (a.$ == e) return !1;
      var f = a;
      var g = d,
          k = A(g, 1);
      r(f.m);
      var p = f;
      g = A(g, 2);
      var Q = "999999999999999".match(k)[0];
      Q.length < p.a.b.length ? p = "" : (p = Q.replace(new RegExp(k, "g"), g), p = p.replace(/9/g, "\u2008"));
      0 < p.length ? (f.m.a(p), f = !0) : f = !1;
      if (f) return a.$ = e, a.ba = sb.test(w(d, 4)), a.u = 0, !0;
    }

    return a.l = !1;
  }

  function ub(a, b) {
    for (var c = [], d = b.length - 3, e = a.f.length, f = 0; f < e; ++f) {
      var g = a.f[f];
      0 == B(g, 3) ? c.push(a.f[f]) : (g = w(g, 3, Math.min(d, B(g, 3) - 1)), 0 == b.search(g) && c.push(a.f[f]));
    }

    a.f = c;
  }

  function vb(a, b) {
    a.j.a(b);
    var c = b;
    Ga.test(c) || 1 == a.j.b.length && Fa.test(c) ? ("+" == b ? (c = b, a.o.a(b)) : (c = Ba[b], a.o.a(c), a.a.a(c)), b = c) : (a.l = !1, a.ea = !0);

    if (!a.l) {
      if (!a.ea) if (wb(a)) {
        if (xb(a)) return yb(a);
      } else if (0 < a.i.length && (b = a.a.toString(), r(a.a), a.a.a(a.i), a.a.a(b), b = a.b.toString(), c = b.lastIndexOf(a.i), r(a.b), a.b.a(b.substring(0, c))), a.i != zb(a)) return a.b.a(" "), yb(a);
      return a.j.toString();
    }

    switch (a.o.b.length) {
      case 0:
      case 1:
      case 2:
        return a.j.toString();

      case 3:
        if (wb(a)) a.aa = !0;else return a.i = zb(a), Ab(a);

      default:
        if (a.aa) return xb(a) && (a.aa = !1), a.b.toString() + a.a.toString();

        if (0 < a.f.length) {
          b = Bb(a, b);
          c = Cb(a);
          if (0 < c.length) return c;
          ub(a, a.a.toString());
          return tb(a) ? Db(a) : a.l ? Eb(a, b) : a.j.toString();
        }

        return Ab(a);
    }
  }

  function yb(a) {
    a.l = !0;
    a.aa = !1;
    a.f = [];
    a.u = 0;
    r(a.m);
    a.$ = "";
    return Ab(a);
  }

  function Cb(a) {
    for (var b = a.a.toString(), c = a.f.length, d = 0; d < c; ++d) {
      var e = a.f[d],
          f = A(e, 1);
      if (new RegExp("^(?:" + f + ")$").test(b) && (a.ba = sb.test(w(e, 4)), e = b.replace(new RegExp(f, "g"), w(e, 2)), e = Eb(a, e), O(e, Ca) == a.o)) return e;
    }

    return "";
  }

  function Eb(a, b) {
    var c = a.b.b.length;
    return a.ba && 0 < c && " " != a.b.toString().charAt(c - 1) ? a.b + " " + b : a.b + b;
  }

  function Ab(a) {
    var b = a.a.toString();

    if (3 <= b.length) {
      for (var c = a.s && 0 == a.i.length && 0 < B(a.g, 20) ? y(a.g, 20) : y(a.g, 19), d = c.length, e = 0; e < d; ++e) {
        var f = c[e];
        0 < a.i.length && Xa(A(f, 4)) && !w(f, 6) && !v(f, 5) || (0 != a.i.length || a.s || Xa(A(f, 4)) || w(f, 6)) && rb.test(A(f, 2)) && a.f.push(f);
      }

      ub(a, b);
      b = Cb(a);
      return 0 < b.length ? b : tb(a) ? Db(a) : a.j.toString();
    }

    return Eb(a, b);
  }

  function Db(a) {
    var b = a.a.toString(),
        c = b.length;

    if (0 < c) {
      for (var d = "", e = 0; e < c; e++) {
        d = Bb(a, b.charAt(e));
      }

      return a.l ? Eb(a, d) : a.j.toString();
    }

    return a.b.toString();
  }

  function zb(a) {
    var b = a.a.toString(),
        c = 0;
    if (1 != w(a.g, 10)) var d = !1;else d = a.a.toString(), d = "1" == d.charAt(0) && "0" != d.charAt(1) && "1" != d.charAt(1);
    d ? (c = 1, a.b.a("1").a(" "), a.s = !0) : v(a.g, 15) && (d = new RegExp("^(?:" + w(a.g, 15) + ")"), d = b.match(d), null != d && null != d[0] && 0 < d[0].length && (a.s = !0, c = d[0].length, a.b.a(b.substring(0, c))));
    r(a.a);
    a.a.a(b.substring(c));
    return b.substring(0, c);
  }

  function wb(a) {
    var b = a.o.toString(),
        c = new RegExp("^(?:\\+|" + w(a.g, 11) + ")");
    c = b.match(c);
    return null != c && null != c[0] && 0 < c[0].length ? (a.s = !0, c = c[0].length, r(a.a), a.a.a(b.substring(c)), r(a.b), a.b.a(b.substring(0, c)), "+" != b.charAt(0) && a.b.a(" "), !0) : !1;
  }

  function xb(a) {
    if (0 == a.a.b.length) return !1;
    var b = new q(),
        c = lb(a.a, b);
    if (0 == c) return !1;
    r(a.a);
    a.a.a(b.toString());
    b = U(c);
    "001" == b ? a.g = V(a.fa, "" + c) : b != a.da && (a.g = pb(a, b));
    a.b.a("" + c).a(" ");
    a.i = "";
    return !0;
  }

  function Bb(a, b) {
    var c = a.m.toString();

    if (0 <= c.substring(a.u).search(a.ha)) {
      var d = c.search(a.ha);
      b = c.replace(a.ha, b);
      r(a.m);
      a.m.a(b);
      a.u = d;
      return b.substring(0, a.u + 1);
    }

    1 == a.f.length && (a.l = !1);
    a.$ = "";
    return a.j.toString();
  }
  var W = L.b();

  function Fb(a) {
    var b = W,
        c = hb(b, a);
    b = T(b, A(a, 1), c);
    null == b ? a = -1 : (a = S(a), a = fb(a, b));

    switch (a) {
      case 0:
        return "fixed-line";

      case 2:
        return "fixed-line-or-mobile";

      case 1:
        return "mobile";

      case 8:
        return "pager";

      case 7:
        return "personal-number";

      case 4:
        return "premium-rate";

      case 5:
        return "shared-cost";

      case 3:
        return "toll-free";

      case 9:
        return "uan";

      case 6:
        return "voip";

      default:
      case -1:
        return "unknown";
    }
  }

  function Gb(a) {
    switch (a) {
      case "fixed-line":
        return 0;

      case "fixed-line-or-mobile":
        return 2;

      case "mobile":
        return 1;

      case "pager":
        return 8;

      case "personal-number":
        return 7;

      case "premium-rate":
        return 4;

      case "shared-cost":
        return 5;

      case "toll-free":
        return 3;

      case "uan":
        return 9;

      case "voip":
        return 6;

      default:
      case "unknown":
        return -1;
    }
  }

  function Hb(a) {
    try {
      switch (jb(a)) {
        case 0:
          return "is-possible";

        case 1:
          return "invalid-country-code";

        case 3:
          return "too-long";

        case 2:
          return "too-short";
      }

      if (ib(a)) return "is-possible";
    } catch (b) {}

    return "unknown";
  }

  function Ib(a) {
    if ("+" !== a.charAt(0)) return {
      parsed: b,
      v: c
    };

    try {
      var b = eb(W, a, void 0);
    } catch (e) {}

    if (b) {
      var c = hb(W, b);
      if (null != c && "ZZ" !== c) return {
        parsed: b,
        v: c
      };
    }

    for (var d = 1; 4 > d; ++d) {
      c = void 0;
      if (a.length < d + 1) return {
        parsed: b,
        v: c
      };
      c = U(a.substring(1, d + 1));
      if ("ZZ" !== c) return {
        v: c
      };
    }

    return {
      parsed: b,
      v: void 0
    };
  }

  function Y(a, b) {
    if (!(this instanceof Y)) return new Y(a, b);
    if ("string" === typeof a) var c = !1;else try {
      gb(a), c = !0;
    } catch (f) {
      c = !1;
    }
    if (!c && "string" !== typeof a) throw Error("Invalid phone number, expected a string");
    if (!c && null != b && "string" !== typeof b) throw Error("Invalid region code, expected a string");

    if (!c) {
      if (b && "+" === a.charAt(0)) {
        var d = Jb(b);
        a.substr(1, ("" + d).length) !== "" + d && (b = null);
      }

      if (!b) {
        var e = Ib(a);
        b = void 0 === e.v ? null : e.v;
        e = e.parsed;
      }
    }

    this.a = {
      number: {},
      regionCode: b,
      valid: !1,
      possible: !1
    };
    if (c) this.b = a;else {
      this.b = null;
      this.a.number.input = a;

      if (b) {
        if (d = Jb(b), 0 === d) {
          this.a.possibility = "invalid-country-code";
          return;
        }
      } else {
        this.a.possibility = "invalid-country-code";
        return;
      }

      try {
        e ? this.b = e : this.b = eb(W, a, b);
      } catch (f) {
        this.a.possibility = Hb(a);
        return;
      }
    }
    this.a.number.international = R(W, this.b, 1);
    this.a.number.national = R(W, this.b, 2);
    this.a.number.e164 = R(W, this.b, 0);
    this.a.number.rfc3966 = R(W, this.b, 3);
    this.a.number.significant = S(this.b);
    a = this.a;
    b = this.b;
    c = W;
    c = V(c, hb(c, b));
    null == c ? b = !0 : (b = S(b), b = !X(b, w(c, 24)));
    a.canBeInternationallyDialled = b;
    this.a.possible = ib(this.b);
    this.a.valid = gb(this.b);
    this.a.type = Fb(this.b);
    this.a.possibility = Hb(this.b);
  }

  function Jb(a) {
    return P(a) ? bb(W, a) : 0;
  }

  h = Y.prototype;

  h.toJSON = function () {
    return this.a;
  };

  h.ka = function () {
    return this.a.canBeInternationallyDialled;
  };

  h.va = function () {
    return this.a.valid;
  };

  h.ua = function () {
    return this.a.possible;
  };

  h.ra = function () {
    return this.a.type;
  };

  h.ta = function () {
    return "mobile" === this.a.type || "fixed-line-or-mobile" === this.a.type;
  };

  h.sa = function () {
    return "fixed-line" === this.a.type || "fixed-line-or-mobile" === this.a.type;
  };

  h.na = function (a) {
    return this.a.number[null == a ? "e164" : a];
  };

  h.oa = function (a) {
    return ab(this.b, a);
  };

  h.qa = function () {
    return this.a.regionCode;
  };

  h.la = function () {
    return Jb(this.a.regionCode);
  };

  function Z(a) {
    this.g = a;
    this.f = new ob(a);
    this.a = this.b = "";
  }

  h = Z.prototype;

  h.ja = function (a) {
    this.b += a;
    var b = this.f;
    b.ca = vb(b, a);
    return this.a = b.ca;
  };

  h.wa = function () {
    return this.a;
  };

  h.xa = function () {
    return "" === this.b ? this.a : this.ia(this.b.slice(0, this.b.length - 1));
  };

  h.ia = function (a) {
    var b = this.f;
    b.ca = "";
    r(b.j);
    r(b.o);
    r(b.m);
    b.u = 0;
    b.$ = "";
    r(b.b);
    b.i = "";
    r(b.a);
    b.l = !0;
    b.ea = !1;
    b.s = !1;
    b.aa = !1;
    b.f = [];
    b.ba = !1;
    b.g != b.ma && (b.g = pb(b, b.da));
    this.b = "";

    if (a) {
      b = 0;

      for (var c = a.length; b < c; ++b) {
        this.ja(a.charAt(b));
      }
    }

    return this.a;
  };

  h.pa = function () {
    return new Y(this.a, this.g);
  };

  aa =  exports ;
  m("PhoneNumber", Y);
  m("PhoneNumber.getCountryCodeForRegionCode", Jb);
  m("PhoneNumber.getRegionCodeForCountryCode", function (a) {
    return U(a);
  });
  m("PhoneNumber.getSupportedRegionCodes", function () {
    return Ta();
  });
  m("PhoneNumber.getSupportedCallingCodes", function () {
    return Va();
  });
  m("PhoneNumber.getExample", function (a, b) {
    b = b ? cb(a, Gb(b)) : cb(a, 0);
    return new Y(b, a);
  });
  m("PhoneNumber.getAsYouType", function (a) {
    return new Z(a);
  });
  m("PhoneNumber.prototype.toJSON", Y.prototype.toJSON);
  m("PhoneNumber.prototype.canBeInternationallyDialled", Y.prototype.ka);
  m("PhoneNumber.prototype.isValid", Y.prototype.va);
  m("PhoneNumber.prototype.isPossible", Y.prototype.ua);
  m("PhoneNumber.prototype.getType", Y.prototype.ra);
  m("PhoneNumber.prototype.isMobile", Y.prototype.ta);
  m("PhoneNumber.prototype.isFixedLine", Y.prototype.sa);
  m("PhoneNumber.prototype.getNumber", Y.prototype.na);
  m("PhoneNumber.prototype.getNumberFrom", Y.prototype.oa);
  m("PhoneNumber.prototype.getRegionCode", Y.prototype.qa);
  m("PhoneNumber.prototype.getCountryCode", Y.prototype.la);
  m("AsYouType", Z);
  m("AsYouType.prototype.addChar", Z.prototype.ja);
  m("AsYouType.prototype.number", Z.prototype.wa);
  m("AsYouType.prototype.removeChar", Z.prototype.xa);
  m("AsYouType.prototype.reset", Z.prototype.ia);
  m("AsYouType.prototype.getPhoneNumber", Z.prototype.pa);
})();
});

var awesomePhonenumber = createCommonjsModule(function (module) {

module.exports = lib.PhoneNumber;
Object.defineProperty(module.exports, "__esModule", {
  value: true
});
module.exports.default = module.exports;
});

var PhoneNumber = unwrapExports(awesomePhonenumber);

// Polyfill for Event.path in IE 11: https://stackoverflow.com/a/46093727
function getParents(node, memo) {
  var parsedMemo = memo || [];
  var parentNode = node.parentNode;

  if (!parentNode) {
    return parsedMemo;
  }

  return getParents(parentNode, parsedMemo.concat(parentNode));
} // Click-outside by BosNaufal: https://github.com/BosNaufal/vue-click-outside


var clickOutside = {
  bind: function bind(el, binding, vNode) {
    // Provided expression must evaluate to a function.
    if (typeof binding.value !== 'function') {
      var compName = vNode.context.name;
      var warn = "[Vue-click-outside:] provided expression ".concat(binding.expression, " is not a function, but has to be");

      if (compName) {
        warn += "Found in component ".concat(compName);
      }

      console.warn(warn);
    } // Define Handler and cache it on the element


    var bubble = binding.modifiers.bubble;

    var handler = function handler(e) {
      // Fall back to composedPath if e.path is undefined
      var path = e.path || (e.composedPath ? e.composedPath() : false) || getParents(e.target);

      if (bubble || path.length && !el.contains(path[0]) && el !== path[0]) {
        binding.value(e);
      }
    };

    el.__vueClickOutside__ = handler; // add Event Listeners

    document.addEventListener('click', handler);
  },
  unbind: function unbind(el) {
    // Remove Event Listeners
    document.removeEventListener('click', el.__vueClickOutside__);
    el.__vueClickOutside__ = null;
  }
};

function getDefault(key) {
  var value = utils.options[key];

  if (typeof value === 'undefined') {
    return utils.options[key];
  }

  return value;
}

var script = {
  name: 'VueTelInput',
  directives: {
    clickOutside: clickOutside
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    allCountries: {
      type: Array,
      default: function _default() {
        return getDefault('allCountries');
      }
    },
    autocomplete: {
      type: String,
      default: function _default() {
        return getDefault('autocomplete');
      }
    },
    autofocus: {
      type: Boolean,
      default: function _default() {
        return getDefault('autofocus');
      }
    },
    customValidate: {
      type: [Boolean, RegExp],
      default: function _default() {
        return getDefault('customValidate');
      }
    },
    defaultCountry: {
      // Default country code, ie: 'AU'
      // Will override the current country of user
      type: String,
      default: function _default() {
        return getDefault('defaultCountry');
      }
    },
    disabled: {
      type: Boolean,
      default: function _default() {
        return getDefault('disabled');
      }
    },
    disabledFetchingCountry: {
      type: Boolean,
      default: function _default() {
        return getDefault('disabledFetchingCountry');
      }
    },
    dropdownOptions: {
      type: Object,
      default: function _default() {
        return getDefault('dropdownOptions');
      }
    },
    dynamicPlaceholder: {
      type: Boolean,
      default: function _default() {
        return getDefault('dynamicPlaceholder');
      }
    },
    enabledCountryCode: {
      type: Boolean,
      default: function _default() {
        return getDefault('enabledCountryCode');
      }
    },
    enabledFlags: {
      type: Boolean,
      default: function _default() {
        return getDefault('enabledFlags');
      }
    },
    ignoredCountries: {
      type: Array,
      default: function _default() {
        return getDefault('ignoredCountries');
      }
    },
    inputClasses: {
      type: [String, Array, Object],
      default: function _default() {
        return getDefault('inputClasses');
      }
    },
    inputId: {
      type: String,
      default: function _default() {
        return getDefault('inputId');
      }
    },
    inputOptions: {
      type: Object,
      default: function _default() {
        return getDefault('inputOptions');
      }
    },
    invalidMsg: {
      type: String,
      default: function _default() {
        return getDefault('invalidMsg');
      }
    },
    maxLen: {
      type: Number,
      default: function _default() {
        return getDefault('maxLen');
      }
    },
    name: {
      type: String,
      default: function _default() {
        return getDefault('name');
      }
    },
    mode: {
      type: String,
      default: function _default() {
        return getDefault('mode');
      }
    },
    onlyCountries: {
      type: Array,
      default: function _default() {
        return getDefault('onlyCountries');
      }
    },
    searchByCode: {
      type: Boolean,
      default: false
    },
    searchByName: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: function _default() {
        return getDefault('placeholder');
      }
    },
    preferredCountries: {
      type: Array,
      default: function _default() {
        return getDefault('preferredCountries');
      }
    },
    readonly: {
      type: Boolean,
      default: function _default() {
        return getDefault('readonly');
      }
    },
    required: {
      type: Boolean,
      default: function _default() {
        return getDefault('required');
      }
    },
    validCharactersOnly: {
      type: Boolean,
      default: function _default() {
        return getDefault('validCharactersOnly');
      }
    },
    wrapperClasses: {
      type: [String, Array, Object],
      default: function _default() {
        return getDefault('wrapperClasses');
      }
    }
  },
  data: function data() {
    return {
      phone: '',
      activeCountry: {
        iso2: ''
      },
      actualCountries: [],
      countriesSearchString: '',
      open: false,
      finishMounted: false,
      selectedIndex: null,
      typeToFindInput: '',
      typeToFindTimer: null,
      cursorPosition: 0,
      dropdownOpenDirection: 'below'
    };
  },
  computed: {
    isSearchEnabled: function isSearchEnabled() {
      return this.searchByCode || this.searchByName;
    },
    parsedPlaceholder: function parsedPlaceholder() {
      if (!this.finishMounted) {
        return '';
      }

      if (this.dynamicPlaceholder) {
        var mode = this.mode || 'international';
        return PhoneNumber.getExample(this.activeCountry.iso2, 'mobile').getNumber(mode);
      }

      return this.placeholder;
    },
    parsedMode: function parsedMode() {
      if (this.customValidate) {
        return 'input';
      }

      if (this.mode) {
        if (!['international', 'national'].includes(this.mode)) {
          console.error('Invalid value of prop "mode"');
        } else {
          return this.mode;
        }
      }

      if (!this.phone || this.phone[0] !== '+') {
        return 'national';
      }

      return 'international';
    },
    filteredCountries: function filteredCountries() {
      var _this = this;

      // List countries after filtered
      if (this.onlyCountries.length) {
        return this.allCountries.filter(function (_ref) {
          var iso2 = _ref.iso2;
          return _this.onlyCountries.some(function (c) {
            return c.toUpperCase() === iso2;
          });
        });
      }

      if (this.ignoredCountries.length) {
        return this.allCountries.filter(function (_ref2) {
          var iso2 = _ref2.iso2;
          return !_this.ignoredCountries.includes(iso2.toUpperCase()) && !_this.ignoredCountries.includes(iso2.toLowerCase());
        });
      }

      return this.allCountries;
    },
    sortedCountries: function sortedCountries() {
      // Sort the list countries: from preferred countries to all countries
      var preferredCountries = this.getCountries(this.preferredCountries).map(function (country) {
        return _objectSpread2(_objectSpread2({}, country), {}, {
          preferred: true
        });
      });
      return [].concat(_toConsumableArray(preferredCountries), _toConsumableArray(this.filteredCountries));
    },
    phoneObject: function phoneObject() {
      var result = PhoneNumber(this.phone, this.activeCountry.iso2).toJSON();
      Object.assign(result, {
        isValid: result.valid,
        country: this.activeCountry
      });
      return result;
    },
    phoneText: function phoneText() {
      var key = 'input';

      if (this.phoneObject.valid) {
        key = this.parsedMode;
      }

      return this.phoneObject.number[key] || '';
    },
    searchInputPlaceholder: function searchInputPlaceholder() {
      switch (true) {
        case this.searchByName:
          return 'Type country name to search';

        case this.searchByCode:
          return 'Type dial code to search';
      }

      return null;
    }
  },
  watch: {
    // eslint-disable-next-line func-names
    'phoneObject.valid': function phoneObjectValid(value) {
      if (value) {
        this.phone = this.phoneText;
      }

      this.$emit('validate', this.phoneObject);
      this.$emit('onValidate', this.phoneObject); // Deprecated
    },
    value: function value() {
      this.phone = this.value;
    },
    open: function open(isDropdownOpened) {
      // Emit open and close events
      if (isDropdownOpened) {
        this.setDropdownPosition();
        this.$emit('open');
      } else {
        this.actualCountries = this.sortedCountries;
        this.countriesSearchString = '';
        this.$emit('close');
      }
    },
    phone: function phone(newValue, oldValue) {
      var _this2 = this;

      var isValidCharactersOnly = this.validCharactersOnly && !this.testCharacters();
      var isCustomValidate = this.customValidate && !this.testCustomValidate();

      if (isValidCharactersOnly || isCustomValidate) {
        this.$nextTick(function () {
          _this2.phone = oldValue;
        });
      } else if (newValue) {
        if (newValue[0] === '+') {
          var code = PhoneNumber(newValue).getRegionCode();

          if (code) {
            this.activeCountry = this.findCountry(code) || this.activeCountry;
          }
        }
      } // Reset the cursor to current position if it's not the last character.


      if (this.cursorPosition < oldValue.length) {
        this.$nextTick(function () {
          setCaretPosition(_this2.$refs.input, _this2.cursorPosition);
        });
      }
    },
    activeCountry: function activeCountry(value) {
      if (value && value.iso2) {
        this.$emit('country-changed', value);
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.initializeCountry().then(function () {
      if (!_this3.phone && _this3.inputOptions && _this3.inputOptions.showDialCode && _this3.activeCountry.dialCode) {
        _this3.phone = "+".concat(_this3.activeCountry.dialCode);
      }

      _this3.actualCountries = _this3.sortedCountries;

      _this3.$emit('validate', _this3.phoneObject);

      _this3.$emit('onValidate', _this3.phoneObject); // Deprecated

    }).catch(console.error).finally(function () {
      _this3.finishMounted = true;
    });
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this4.value) {
                _this4.phone = _this4.value.trim();
              } // import sprite.css only if enabledFlags prop is set to true.
              // In almost all cases this prop won't be changed once component is created.
              // Hence it is safe keeping it under created. This saves almost 114 KB of file.


              if (!_this4.enabledFlags) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return import('./sprite-3963cbd3.js');

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    initializeCountry: function initializeCountry() {
      var _this5 = this;

      return new Promise(function (resolve) {
        /**
         * 1. If the phone included prefix (+12), try to get the country and set it
         */
        if (_this5.phone && _this5.phone[0] === '+') {
          var activeCountry = PhoneNumber(_this5.phone).getRegionCode();

          if (activeCountry) {
            _this5.choose(activeCountry);

            resolve();
            return;
          }
        }
        /**
         * 2. Use default country if passed from parent
         */


        if (_this5.defaultCountry) {
          var defaultCountry = _this5.findCountry(_this5.defaultCountry);

          if (defaultCountry) {
            _this5.choose(defaultCountry);

            resolve();
            return;
          }
        }

        var fallbackCountry = _this5.findCountry(_this5.preferredCountries[0]) || _this5.filteredCountries[0];
        /**
         * 3. Check if fetching country based on user's IP is allowed, set it as the default country
         */


        if (!_this5.disabledFetchingCountry) {
          getCountry().then(function (res) {
            _this5.activeCountry = _this5.findCountry(res) || _this5.activeCountry;
          }).catch(function (error) {
            console.warn(error);
            /**
             * 4. Use the first country from preferred list (if available) or all countries list
             */

            _this5.choose(fallbackCountry);
          }).finally(function () {
            resolve();
          });
        } else {
          /**
           * 4. Use the first country from preferred list (if available) or all countries list
           */
          _this5.choose(fallbackCountry);

          resolve();
        }
      });
    },

    /**
     * Get the list of countries from the list of iso2 code
     */
    getCountries: function getCountries() {
      var _this6 = this;

      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return list.map(function (countryCode) {
        return _this6.findCountry(countryCode);
      }).filter(Boolean);
    },
    getCountriesSearchBy: function getCountriesSearchBy(country) {
      switch (true) {
        case this.searchByName:
          return country.name;

        case this.searchByCode:
          return "+".concat(country.dialCode);
      }

      return null;
    },
    findCountry: function findCountry() {
      var iso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this.filteredCountries.find(function (country) {
        return country.iso2 === iso.toUpperCase();
      });
    },
    getItemClass: function getItemClass(index, iso2) {
      var highlighted = this.selectedIndex === index;
      var lastPreferred = index === this.preferredCountries.length - 1;
      var preferred = this.preferredCountries.some(function (c) {
        return c.toUpperCase() === iso2;
      });
      return {
        highlighted: highlighted,
        'last-preferred': lastPreferred,
        preferred: preferred
      };
    },
    choose: function choose(country) {
      var toEmitInputEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var parsedCountry = country;

      if (typeof parsedCountry === 'string') {
        parsedCountry = this.findCountry(parsedCountry);
      }

      if (!parsedCountry) {
        return;
      }

      this.activeCountry = parsedCountry || this.activeCountry || {};

      if (this.phone && this.phone[0] === '+' && this.activeCountry.iso2 && this.phoneObject.number.national) {
        // Attach the current phone number with the newly selected country
        this.phone = PhoneNumber(this.phoneObject.number.national, this.activeCountry.iso2).getNumber('international');
      } else if (this.inputOptions && this.inputOptions.showDialCode && parsedCountry) {
        // Reset phone if the showDialCode is set
        this.phone = "+".concat(parsedCountry.dialCode);
      }

      if (toEmitInputEvent) {
        this.$emit('input', this.phoneText, this.phoneObject);
        this.$emit('onInput', this.phoneObject); // Deprecated
      }
    },
    testCharacters: function testCharacters() {
      var re = /^[()\-+0-9\s]*$/;
      return re.test(this.phone);
    },
    testCustomValidate: function testCustomValidate() {
      return this.customValidate instanceof RegExp ? this.customValidate.test(this.phone) : false;
    },
    onSearchCountryChange: function onSearchCountryChange(e) {
      var _this7 = this;

      this.countriesSearchString = e.target.value;
      this.actualCountries = this.sortedCountries.filter(function (country) {
        var searchBy = _this7.getCountriesSearchBy(country);

        return searchBy && ~searchBy.indexOf(_this7.countriesSearchString);
      });
    },
    onSearchCountryClick: function onSearchCountryClick(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    onInput: function onInput(e) {
      if (this.validCharactersOnly && !this.testCharacters()) {
        return;
      }

      if (this.customValidate && !this.testCustomValidate()) {
        return;
      }

      this.$refs.input.setCustomValidity(this.phoneObject.valid ? '' : this.invalidMsg); // Returns response.number to assign it to v-model (if being used)
      // Returns full response for cases @input is used
      // and parent wants to return the whole response.

      this.$emit('input', this.phoneText, this.phoneObject);
      this.$emit('onInput', this.phoneObject); // Deprecated
      // Keep the current cursor position just in case the input reformatted
      // and it gets moved to the last character.

      if (e && e.target) {
        this.cursorPosition = e.target.selectionStart;
      }
    },
    onBlur: function onBlur() {
      this.$emit('blur');
      this.$emit('onBlur'); // Deprecated
    },
    onFocus: function onFocus() {
      this.$emit('focus');
    },
    onEnter: function onEnter() {
      this.$emit('enter');
      this.$emit('onEnter'); // Deprecated
    },
    onSpace: function onSpace() {
      this.$emit('space');
      this.$emit('onSpace'); // Deprecated
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    toggleDropdown: function toggleDropdown() {
      if (this.disabled) {
        return;
      }

      this.open = !this.open;
    },
    clickedOutside: function clickedOutside() {
      this.open = false;
    },
    keyboardNav: function keyboardNav(e) {
      var _this8 = this;

      if (e.keyCode === 40) {
        // down arrow
        e.preventDefault();
        this.open = true;

        if (this.selectedIndex === null) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex = Math.min(this.sortedCountries.length - 1, this.selectedIndex + 1);
        }

        var selEle = this.$refs.list.children[this.selectedIndex];

        if (selEle.offsetTop + selEle.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight) {
          this.$refs.list.scrollTop = selEle.offsetTop - this.$refs.list.clientHeight + selEle.clientHeight;
        }
      } else if (e.keyCode === 38) {
        // up arrow
        e.preventDefault();
        this.open = true;

        if (this.selectedIndex === null) {
          this.selectedIndex = this.sortedCountries.length - 1;
        } else {
          this.selectedIndex = Math.max(0, this.selectedIndex - 1);
        }

        var _selEle = this.$refs.list.children[this.selectedIndex];

        if (_selEle.offsetTop < this.$refs.list.scrollTop) {
          this.$refs.list.scrollTop = _selEle.offsetTop;
        }
      } else if (e.keyCode === 13) {
        // enter key
        if (this.selectedIndex !== null) {
          this.choose(this.sortedCountries[this.selectedIndex], true);
        }

        this.open = !this.open;
      } else {
        // typing a country's name
        this.typeToFindInput += e.key;
        clearTimeout(this.typeToFindTimer);
        this.typeToFindTimer = setTimeout(function () {
          _this8.typeToFindInput = '';
        }, 700); // don't include preferred countries so we jump to the right place in the alphabet

        var typedCountryI = this.sortedCountries.slice(this.preferredCountries.length).findIndex(function (c) {
          return c.name.toLowerCase().startsWith(_this8.typeToFindInput);
        });

        if (typedCountryI >= 0) {
          this.selectedIndex = this.preferredCountries.length + typedCountryI;
          var _selEle2 = this.$refs.list.children[this.selectedIndex];
          var needToScrollTop = _selEle2.offsetTop < this.$refs.list.scrollTop;
          var needToScrollBottom = _selEle2.offsetTop + _selEle2.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight;

          if (needToScrollTop || needToScrollBottom) {
            this.$refs.list.scrollTop = _selEle2.offsetTop - this.$refs.list.clientHeight / 2;
          }
        }
      }
    },
    reset: function reset() {
      this.selectedIndex = this.sortedCountries.map(function (c) {
        return c.iso2;
      }).indexOf(this.activeCountry.iso2);
      this.open = false;
    },
    setDropdownPosition: function setDropdownPosition() {
      var spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      var hasEnoughSpaceBelow = spaceBelow > 200;

      if (hasEnoughSpaceBelow) {
        this.dropdownOpenDirection = 'below';
      } else {
        this.dropdownOpenDirection = 'above';
      }
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var freezing = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});

var internalMetadata = createCommonjsModule(function (module) {
var defineProperty = objectDefineProperty.f;





var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, {
    value: {
      objectID: 'O' + ++id,
      // object ID
      weakData: {} // weak collections IDs

    }
  });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMetadata(it); // return object ID
  }

  return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMetadata(it); // return the store of weak collections IDs
  }

  return it[METADATA].weakData;
}; // add metadata on freeze-family methods calling


var onFreeze = function (it) {
  if (freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};
hiddenKeys[METADATA] = true;
});
var internalMetadata_1 = internalMetadata.REQUIRED;
var internalMetadata_2 = internalMetadata.fastKey;
var internalMetadata_3 = internalMetadata.getWeakData;
var internalMetadata_4 = internalMetadata.onFreeze;

var iterate_1 = createCommonjsModule(function (module) {
var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = functionBindContext(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      }

      return new Result(false);
    }

    iterator = iterFn.call(iterable);
  }

  next = iterator.next;

  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  }

  return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};
});

var anInstance = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  }

  return it;
};

var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global_1[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY, KEY == 'add' ? function add(value) {
      nativeMethod.call(this, value === 0 ? 0 : value);
      return this;
    } : KEY == 'delete' ? function (key) {
      return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
    } : KEY == 'get' ? function get(key) {
      return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
    } : KEY == 'has' ? function has(key) {
      return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
    } : function set(key, value) {
      nativeMethod.call(this, key === 0 ? 0 : key, value);
      return this;
    });
  }; // eslint-disable-next-line max-len


  if (isForced_1(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    internalMetadata.REQUIRED = true;
  } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor(); // early implementations not supports chaining

    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false

    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    }); // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new

    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
      new NativeConstructor(iterable);
    }); // for early implementations -0 and +0 not the same

    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;

      while (index--) $instance[ADDER](index, index);

      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  _export({
    global: true,
    forced: Constructor != NativeConstructor
  }, exported);
  setToStringTag(Constructor, CONSTRUCTOR_NAME);
  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
  return Constructor;
};

var redefineAll = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);

  return target;
};

var defineProperty$7 = objectDefineProperty.f;

















var fastKey = internalMetadata.fastKey;



var setInternalState$4 = internalState.set;
var internalStateGetterFor = internalState.getterFor;
var collectionStrong = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState$4(that, {
        type: CONSTRUCTOR_NAME,
        index: objectCreate(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!descriptors) that.size = 0;
      if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
    });
    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index; // change existing entry

      if (entry) {
        entry.value = value; // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (descriptors) state.size++;else that.size++; // add to index

        if (index !== 'F') state.index[index] = entry;
      }

      return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that); // fast case

      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index]; // frozen object case

      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;

        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }

        state.first = state.last = undefined;
        if (descriptors) state.size = 0;else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);

        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (descriptors) state.size--;else that.size--;
        }

        return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn
      /* , that = undefined */
      ) {
        var state = getInternalState(this);
        var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;

        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this); // revert to the last existing entry

          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });
    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (descriptors) defineProperty$7(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME); // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11

    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState$4(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last; // revert to the last existing entry

      while (entry && entry.removed) entry = entry.previous; // get next entry


      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return {
          value: undefined,
          done: true
        };
      } // return step by kind


      if (kind == 'keys') return {
        value: entry.key,
        done: false
      };
      if (kind == 'values') return {
        value: entry.value,
        done: false
      };
      return {
        value: [entry.key, entry.value],
        done: false
      };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

    setSpecies(CONSTRUCTOR_NAME);
  }
};

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects


var es_set = collection('Set', function (init) {
  return function Set() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
}, collectionStrong);

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}

var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: ['vue-tel-input', _vm.wrapperClasses, {
      disabled: _vm.disabled
    }]
  }, [_c('div', {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.clickedOutside,
      expression: "clickedOutside"
    }],
    class: ['vti__dropdown', {
      open: _vm.open
    }],
    attrs: {
      "tabindex": _vm.dropdownOptions && _vm.dropdownOptions.tabindex ? _vm.dropdownOptions.tabindex : 0
    },
    on: {
      "keydown": [_vm.keyboardNav, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }

        return _vm.reset($event);
      }],
      "click": _vm.toggleDropdown
    }
  }, [_c('span', {
    staticClass: "vti__selection"
  }, [_vm.enabledFlags ? _c('div', {
    class: ['vti__flag', _vm.activeCountry.iso2.toLowerCase()]
  }) : _vm._e(), _vm._v(" "), _vm.enabledCountryCode ? _c('span', {
    staticClass: "vti__country-code"
  }, [_vm._v("\n        +" + _vm._s(_vm.activeCountry.dialCode) + "\n      ")]) : _vm._e(), _vm._v(" "), _vm._t("arrow-icon", [_c('span', {
    staticClass: "vti__dropdown-arrow"
  }, [_vm._v(_vm._s(_vm.open ? "▲" : "▼"))])], {
    "open": _vm.open
  })], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.open,
      expression: "open"
    }],
    ref: "list",
    staticClass: "vti__dropdown-wrapper",
    class: _vm.dropdownOpenDirection
  }, [_vm.isSearchEnabled ? _c('input', {
    staticClass: "vti__dropdown-country-search",
    attrs: {
      "placeholder": _vm.searchInputPlaceholder
    },
    domProps: {
      "value": _vm.countriesSearchString
    },
    on: {
      "input": _vm.onSearchCountryChange,
      "click": _vm.onSearchCountryClick
    }
  }) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "vti__dropdown-list"
  }, _vm._l(_vm.actualCountries, function (pb, index) {
    return _c('li', {
      key: pb.iso2 + (pb.preferred ? '-preferred' : ''),
      class: ['vti__dropdown-item', _vm.getItemClass(index, pb.iso2)],
      on: {
        "click": function click($event) {
          return _vm.choose(pb, true);
        },
        "mousemove": function mousemove($event) {
          _vm.selectedIndex = index;
        }
      }
    }, [_vm.enabledFlags ? _c('div', {
      class: ['vti__flag', pb.iso2.toLowerCase()]
    }) : _vm._e(), _vm._v(" "), _c('strong', [_vm._v(_vm._s(pb.name))]), _vm._v(" "), _vm.dropdownOptions && !_vm.dropdownOptions.disabledDialCode ? _c('span', [_vm._v("\n            +" + _vm._s(pb.dialCode) + "\n          ")]) : _vm._e()]);
  }), 0)])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.phone,
      expression: "phone"
    }],
    ref: "input",
    class: ['vti__input', _vm.inputClasses],
    attrs: {
      "type": "tel",
      "autocomplete": _vm.autocomplete,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "id": _vm.inputId,
      "maxlength": _vm.maxLen,
      "name": _vm.name,
      "placeholder": _vm.parsedPlaceholder,
      "readonly": _vm.readonly,
      "required": _vm.required,
      "tabindex": _vm.inputOptions && _vm.inputOptions.tabindex ? _vm.inputOptions.tabindex : 0
    },
    domProps: {
      "value": _vm.phone
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": [function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.phone = $event.target.value;
      }, _vm.onInput],
      "keyup": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        return _vm.onEnter($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) {
          return null;
        }

        return _vm.onSpace($event);
      }]
    }
  })]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-93f7fe28_0", {
    source: ".vue-tel-input{border-radius:3px;display:flex;border:1px solid #bbb;text-align:left}.vue-tel-input.disabled .dropdown,.vue-tel-input.disabled .selection,.vue-tel-input.disabled input{cursor:no-drop}.vue-tel-input:focus-within{box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);border-color:#66afe9}.vti__dropdown{display:flex;flex-direction:column;align-content:center;justify-content:center;position:relative;padding:7px;cursor:pointer}.vti__dropdown.show{max-height:300px;overflow:scroll}.vti__dropdown.open{background-color:#f3f3f3}.vti__dropdown:hover{background-color:#f3f3f3}.vti__selection{font-size:.8em;display:flex;align-items:center}.vti__selection .vti__country-code{color:#666}.vti__flag{margin-right:5px;margin-left:5px}.vti__dropdown-wrapper{position:absolute}.vti__dropdown-wrapper.below{top:33px}.vti__dropdown-wrapper.above{top:auto;bottom:100%}.vti__dropdown-country-search{width:100%;display:block;font-size:16px;padding:8px 18px}.vti__dropdown-list{z-index:1;padding:0;margin:0;text-align:left;list-style:none;max-height:200px;overflow-y:scroll;left:-1px;background-color:#fff;border:1px solid #ccc;width:390px}.vti__dropdown-arrow{transform:scaleY(.5);display:inline-block;color:#666}.vti__dropdown-item{cursor:pointer;padding:4px 15px}.vti__dropdown-item.highlighted{background-color:#f3f3f3}.vti__dropdown-item.last-preferred{border-bottom:1px solid #cacaca}.vti__dropdown-item .vti__flag{display:inline-block;margin-right:5px}.vti__input{border:none;border-radius:0 2px 2px 0;width:100%;outline:0;padding-left:7px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

function install(Vue) {
  var customOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (install.installed) return;
  install.installed = true;
  utils.options = _objectSpread2(_objectSpread2({}, defaultOptions), customOptions);
  Vue.component('vue-tel-input', __vue_component__);
}
var plugin = {
  install: install
}; // Auto-install

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
export { __vue_component__ as VueTelInput, install };
