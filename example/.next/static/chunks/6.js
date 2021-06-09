(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[6],{

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeFunction = __webpack_require__(/*! ./isNativeFunction */ "./node_modules/@babel/runtime/helpers/isNativeFunction.js");

var construct = __webpack_require__(/*! ./construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
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
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
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
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
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
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
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
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
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

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

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
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
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
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
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
          context.arg = undefined;
        }

        return !! caught;
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

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
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

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
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

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
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
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

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


/***/ }),

/***/ "./node_modules/trezor-connect/lib/constants/blockchain.js":
/*!*****************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/constants/blockchain.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // blockchain events

exports.__esModule = true;
exports.NOTIFICATION = exports.BLOCK = exports.CONNECT = exports.ERROR = void 0;
var ERROR = 'blockchain-error';
exports.ERROR = ERROR;
var CONNECT = 'blockchain-connect';
exports.CONNECT = CONNECT;
var BLOCK = 'blockchain-block';
exports.BLOCK = BLOCK;
var NOTIFICATION = 'blockchain-notification';
exports.NOTIFICATION = NOTIFICATION;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/constants/device.js":
/*!*************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/constants/device.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // device list events

exports.__esModule = true;
exports.UNREADABLE = exports.WAIT_FOR_SELECTION = exports.WORD = exports.PASSPHRASE_ON_DEVICE = exports.PASSPHRASE = exports.PIN = exports.BUTTON = exports.LOADING = exports.USED_ELSEWHERE = exports.RELEASED = exports.ACQUIRED = exports.RELEASE = exports.ACQUIRE = exports.CHANGED = exports.DISCONNECT = exports.CONNECT_UNACQUIRED = exports.CONNECT = void 0;
var CONNECT = 'device-connect';
exports.CONNECT = CONNECT;
var CONNECT_UNACQUIRED = 'device-connect_unacquired';
exports.CONNECT_UNACQUIRED = CONNECT_UNACQUIRED;
var DISCONNECT = 'device-disconnect';
exports.DISCONNECT = DISCONNECT;
var CHANGED = 'device-changed';
exports.CHANGED = CHANGED;
var ACQUIRE = 'device-acquire';
exports.ACQUIRE = ACQUIRE;
var RELEASE = 'device-release';
exports.RELEASE = RELEASE;
var ACQUIRED = 'device-acquired';
exports.ACQUIRED = ACQUIRED;
var RELEASED = 'device-released';
exports.RELEASED = RELEASED;
var USED_ELSEWHERE = 'device-used_elsewhere';
exports.USED_ELSEWHERE = USED_ELSEWHERE;
var LOADING = 'device-loading'; // trezor-link events in protobuf format

exports.LOADING = LOADING;
var BUTTON = 'button';
exports.BUTTON = BUTTON;
var PIN = 'pin';
exports.PIN = PIN;
var PASSPHRASE = 'passphrase';
exports.PASSPHRASE = PASSPHRASE;
var PASSPHRASE_ON_DEVICE = 'passphrase_on_device';
exports.PASSPHRASE_ON_DEVICE = PASSPHRASE_ON_DEVICE;
var WORD = 'word'; // custom

exports.WORD = WORD;
var WAIT_FOR_SELECTION = 'device-wait_for_selection'; // this string has different prefix than other constants and it's used as device path

exports.WAIT_FOR_SELECTION = WAIT_FOR_SELECTION;
var UNREADABLE = 'unreadable-device';
exports.UNREADABLE = UNREADABLE;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/constants/errors.js":
/*!*************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/constants/errors.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.NO_COIN_INFO = exports.BACKEND_NO_URL = exports.WEBUSB_ERROR_MESSAGE = exports.INVALID_PIN_ERROR_MESSAGE = exports.WRONG_PREVIOUS_SESSION_ERROR_MESSAGE = exports.INVALID_STATE = exports.CALL_OVERRIDE = exports.INITIALIZATION_FAILED = exports.DEVICE_USED_ELSEWHERE = exports.PERMISSIONS_NOT_GRANTED = exports.POPUP_CLOSED = exports.INVALID_PARAMETERS = exports.DEVICE_CALL_IN_PROGRESS = exports.DEVICE_NOT_FOUND = exports.WRONG_TRANSPORT_CONFIG = exports.NO_TRANSPORT = exports.MANAGEMENT_NOT_ALLOWED = exports.MANIFEST_NOT_SET = exports.BROWSER_NOT_SUPPORTED = exports.POPUP_TIMEOUT = exports.IFRAME_TIMEOUT = exports.IFRAME_INITIALIZED = exports.IFRAME_BLOCKED = exports.NO_IFRAME = exports.invalidParameter = exports.TrezorError = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js"));

var TrezorError =
/*#__PURE__*/
function (_Error) {
  (0, _inheritsLoose2["default"])(TrezorError, _Error);

  function TrezorError(code, message) {
    var _this;

    _this = _Error.call(this, message) || this;
    _this.code = code;
    _this.message = message;
    return _this;
  }

  return TrezorError;
}((0, _wrapNativeSuper2["default"])(Error));

exports.TrezorError = TrezorError;

var invalidParameter = function invalidParameter(message) {
  return new TrezorError('Connect_InvalidParameter', message);
}; // level 100 error during initialization


exports.invalidParameter = invalidParameter;
var NO_IFRAME = new TrezorError(100, 'TrezorConnect not yet initialized');
exports.NO_IFRAME = NO_IFRAME;
var IFRAME_BLOCKED = new TrezorError('iframe_blocked', 'TrezorConnect iframe was blocked');
exports.IFRAME_BLOCKED = IFRAME_BLOCKED;
var IFRAME_INITIALIZED = new TrezorError(101, 'TrezorConnect has been already initialized');
exports.IFRAME_INITIALIZED = IFRAME_INITIALIZED;
var IFRAME_TIMEOUT = new TrezorError(102, 'Iframe timeout');
exports.IFRAME_TIMEOUT = IFRAME_TIMEOUT;
var POPUP_TIMEOUT = new TrezorError(103, 'Popup timeout');
exports.POPUP_TIMEOUT = POPUP_TIMEOUT;
var BROWSER_NOT_SUPPORTED = new TrezorError(104, 'Browser not supported');
exports.BROWSER_NOT_SUPPORTED = BROWSER_NOT_SUPPORTED;
var MANIFEST_NOT_SET = new TrezorError(105, 'Manifest not set. Read more at https://github.com/trezor/connect/blob/develop/docs/index.md');
exports.MANIFEST_NOT_SET = MANIFEST_NOT_SET;
var MANAGEMENT_NOT_ALLOWED = new TrezorError(105, 'Management method not allowed for this configuration');
exports.MANAGEMENT_NOT_ALLOWED = MANAGEMENT_NOT_ALLOWED;
var NO_TRANSPORT = new TrezorError(500, 'Transport is missing');
exports.NO_TRANSPORT = NO_TRANSPORT;
var WRONG_TRANSPORT_CONFIG = new TrezorError(5002, 'Wrong config response'); // config_signed

exports.WRONG_TRANSPORT_CONFIG = WRONG_TRANSPORT_CONFIG;
var DEVICE_NOT_FOUND = new TrezorError(501, 'Device not found'); // export const DEVICE_CALL_IN_PROGRESS: TrezorError = new TrezorError(502, "Device call in progress.");

exports.DEVICE_NOT_FOUND = DEVICE_NOT_FOUND;
var DEVICE_CALL_IN_PROGRESS = new TrezorError(503, 'Device call in progress');
exports.DEVICE_CALL_IN_PROGRESS = DEVICE_CALL_IN_PROGRESS;
var INVALID_PARAMETERS = new TrezorError(504, 'Invalid parameters');
exports.INVALID_PARAMETERS = INVALID_PARAMETERS;
var POPUP_CLOSED = new Error('Popup closed');
exports.POPUP_CLOSED = POPUP_CLOSED;
var PERMISSIONS_NOT_GRANTED = new TrezorError(403, 'Permissions not granted');
exports.PERMISSIONS_NOT_GRANTED = PERMISSIONS_NOT_GRANTED;
var DEVICE_USED_ELSEWHERE = new TrezorError(700, 'Device is used in another window');
exports.DEVICE_USED_ELSEWHERE = DEVICE_USED_ELSEWHERE;
var INITIALIZATION_FAILED = new TrezorError('Failure_Initialize', 'Initialization failed');
exports.INITIALIZATION_FAILED = INITIALIZATION_FAILED;
var CALL_OVERRIDE = new TrezorError('Failure_ActionOverride', 'override');
exports.CALL_OVERRIDE = CALL_OVERRIDE;
var INVALID_STATE = new TrezorError('Failure_PassphraseState', 'Passphrase is incorrect'); // a slight hack
// this error string is hard-coded
// in both bridge and extension

exports.INVALID_STATE = INVALID_STATE;
var WRONG_PREVIOUS_SESSION_ERROR_MESSAGE = 'wrong previous session';
exports.WRONG_PREVIOUS_SESSION_ERROR_MESSAGE = WRONG_PREVIOUS_SESSION_ERROR_MESSAGE;
var INVALID_PIN_ERROR_MESSAGE = 'PIN invalid';
exports.INVALID_PIN_ERROR_MESSAGE = INVALID_PIN_ERROR_MESSAGE;
var WEBUSB_ERROR_MESSAGE = 'NetworkError: Unable to claim interface.'; // BlockBook

exports.WEBUSB_ERROR_MESSAGE = WEBUSB_ERROR_MESSAGE;
var BACKEND_NO_URL = new TrezorError('Backend_init', 'Url not found');
exports.BACKEND_NO_URL = BACKEND_NO_URL;
var NO_COIN_INFO = invalidParameter('Coin not found.');
exports.NO_COIN_INFO = NO_COIN_INFO;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/constants/iframe.js":
/*!*************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/constants/iframe.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RESPONSE = exports.CALL = exports.ERROR = exports.BOOTSTRAP = void 0;
var BOOTSTRAP = 'iframe-bootstrap';
exports.BOOTSTRAP = BOOTSTRAP;
var ERROR = 'iframe-error';
exports.ERROR = ERROR;
var CALL = 'iframe-call';
exports.CALL = CALL;
var RESPONSE = 'iframe-response';
exports.RESPONSE = RESPONSE;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/constants/index.js":
/*!************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/constants/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.BLOCKCHAIN_EVENT = exports.RESPONSE_EVENT = exports.TRANSPORT_EVENT = exports.DEVICE_EVENT = exports.UI_EVENT = exports.CORE_EVENT = void 0;
var CORE_EVENT = 'CORE_EVENT';
exports.CORE_EVENT = CORE_EVENT;
var UI_EVENT = 'UI_EVENT';
exports.UI_EVENT = UI_EVENT;
var DEVICE_EVENT = 'DEVICE_EVENT';
exports.DEVICE_EVENT = DEVICE_EVENT;
var TRANSPORT_EVENT = 'TRANSPORT_EVENT';
exports.TRANSPORT_EVENT = TRANSPORT_EVENT;
var RESPONSE_EVENT = 'RESPONSE_EVENT';
exports.RESPONSE_EVENT = RESPONSE_EVENT;
var BLOCKCHAIN_EVENT = 'BLOCKCHAIN_EVENT';
exports.BLOCKCHAIN_EVENT = BLOCKCHAIN_EVENT;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/constants/popup.js":
/*!************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/constants/popup.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CLOSE_WINDOW = exports.CANCEL_POPUP_REQUEST = exports.CLOSED = exports.CLOSE = exports.HANDSHAKE = exports.OPEN_TIMEOUT = exports.OPENED = exports.LOG = exports.EXTENSION_USB_PERMISSIONS = exports.EXTENSION_REQUEST = exports.BOOTSTRAP = exports.INIT = void 0;
var INIT = 'popup-init';
exports.INIT = INIT;
var BOOTSTRAP = 'popup-bootstrap';
exports.BOOTSTRAP = BOOTSTRAP;
var EXTENSION_REQUEST = 'popup-extension_request';
exports.EXTENSION_REQUEST = EXTENSION_REQUEST;
var EXTENSION_USB_PERMISSIONS = 'open-usb-permissions';
exports.EXTENSION_USB_PERMISSIONS = EXTENSION_USB_PERMISSIONS;
var LOG = 'popup-log';
exports.LOG = LOG;
var OPENED = 'popup-opened';
exports.OPENED = OPENED;
var OPEN_TIMEOUT = 'popup-open_timeout';
exports.OPEN_TIMEOUT = OPEN_TIMEOUT;
var HANDSHAKE = 'popup-handshake';
exports.HANDSHAKE = HANDSHAKE;
var CLOSE = 'popup-close';
exports.CLOSE = CLOSE;
var CLOSED = 'popup-closed';
exports.CLOSED = CLOSED;
var CANCEL_POPUP_REQUEST = 'ui-cancel-popup-request';
exports.CANCEL_POPUP_REQUEST = CANCEL_POPUP_REQUEST;
var CLOSE_WINDOW = 'window.close';
exports.CLOSE_WINDOW = CLOSE_WINDOW;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/constants/transport.js":
/*!****************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/constants/transport.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.START_PENDING = exports.RECONNECT = exports.REQUEST = exports.STREAM = exports.UPDATE = exports.ERROR = exports.START = void 0;
var START = 'transport-start';
exports.START = START;
var ERROR = 'transport-error';
exports.ERROR = ERROR;
var UPDATE = 'transport-update';
exports.UPDATE = UPDATE;
var STREAM = 'transport-stream';
exports.STREAM = STREAM;
var REQUEST = 'transport-request_device';
exports.REQUEST = REQUEST;
var RECONNECT = 'transport-reconnect';
exports.RECONNECT = RECONNECT;
var START_PENDING = 'transport-start_pending';
exports.START_PENDING = START_PENDING;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/constants/ui.js":
/*!*********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/constants/ui.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ADDRESS_VALIDATION = exports.BUNDLE_PROGRESS = exports.LOGIN_CHALLENGE_RESPONSE = exports.LOGIN_CHALLENGE_REQUEST = exports.CUSTOM_MESSAGE_RESPONSE = exports.CUSTOM_MESSAGE_REQUEST = exports.CHANGE_SETTINGS = exports.RECEIVE_WORD = exports.RECEIVE_FEE = exports.RECEIVE_ACCOUNT = exports.CHANGE_ACCOUNT = exports.RECEIVE_DEVICE = exports.RECEIVE_PASSPHRASE = exports.RECEIVE_PIN = exports.RECEIVE_CONFIRMATION = exports.RECEIVE_PERMISSION = exports.REQUEST_WORD = exports.REQUEST_BUTTON = exports.INSUFFICIENT_FUNDS = exports.UPDATE_CUSTOM_FEE = exports.SELECT_FEE = exports.SELECT_ACCOUNT = exports.SELECT_DEVICE = exports.SET_OPERATION = exports.LOADING = exports.CONNECT = exports.INVALID_PASSPHRASE_ACTION = exports.INVALID_PASSPHRASE = exports.REQUEST_PASSPHRASE_ON_DEVICE = exports.REQUEST_PASSPHRASE = exports.INVALID_PIN = exports.REQUEST_PIN = exports.REQUEST_CONFIRMATION = exports.REQUEST_PERMISSION = exports.CLOSE_UI_WINDOW = exports.REQUEST_UI_WINDOW = exports.RECEIVE_BROWSER = exports.BROWSER_OUTDATED = exports.BROWSER_NOT_SUPPORTED = exports.DEVICE_NEEDS_BACKUP = exports.FIRMWARE_NOT_INSTALLED = exports.FIRMWARE_NOT_COMPATIBLE = exports.FIRMWARE_NOT_SUPPORTED = exports.FIRMWARE_OUTDATED = exports.FIRMWARE_OLD = exports.SEEDLESS = exports.INITIALIZE = exports.REQUIRE_MODE = exports.NOT_IN_BOOTLOADER = exports.BOOTLOADER = exports.TRANSPORT = exports.IFRAME_HANDSHAKE = void 0;
var IFRAME_HANDSHAKE = 'iframe-handshake';
exports.IFRAME_HANDSHAKE = IFRAME_HANDSHAKE;
var TRANSPORT = 'ui-no_transport';
exports.TRANSPORT = TRANSPORT;
var BOOTLOADER = 'ui-device_bootloader_mode';
exports.BOOTLOADER = BOOTLOADER;
var NOT_IN_BOOTLOADER = 'ui-device_not_in_bootloader_mode';
exports.NOT_IN_BOOTLOADER = NOT_IN_BOOTLOADER;
var REQUIRE_MODE = 'ui-device_require_mode';
exports.REQUIRE_MODE = REQUIRE_MODE;
var INITIALIZE = 'ui-device_not_initialized';
exports.INITIALIZE = INITIALIZE;
var SEEDLESS = 'ui-device_seedless';
exports.SEEDLESS = SEEDLESS;
var FIRMWARE_OLD = 'ui-device_firmware_old';
exports.FIRMWARE_OLD = FIRMWARE_OLD;
var FIRMWARE_OUTDATED = 'ui-device_firmware_outdated';
exports.FIRMWARE_OUTDATED = FIRMWARE_OUTDATED;
var FIRMWARE_NOT_SUPPORTED = 'ui-device_firmware_unsupported';
exports.FIRMWARE_NOT_SUPPORTED = FIRMWARE_NOT_SUPPORTED;
var FIRMWARE_NOT_COMPATIBLE = 'ui-device_firmware_not_compatible';
exports.FIRMWARE_NOT_COMPATIBLE = FIRMWARE_NOT_COMPATIBLE;
var FIRMWARE_NOT_INSTALLED = 'ui-device_firmware_not_installed';
exports.FIRMWARE_NOT_INSTALLED = FIRMWARE_NOT_INSTALLED;
var DEVICE_NEEDS_BACKUP = 'ui-device_needs_backup';
exports.DEVICE_NEEDS_BACKUP = DEVICE_NEEDS_BACKUP;
var BROWSER_NOT_SUPPORTED = 'ui-browser_not_supported';
exports.BROWSER_NOT_SUPPORTED = BROWSER_NOT_SUPPORTED;
var BROWSER_OUTDATED = 'ui-browser_outdated';
exports.BROWSER_OUTDATED = BROWSER_OUTDATED;
var RECEIVE_BROWSER = 'ui-receive_browser';
exports.RECEIVE_BROWSER = RECEIVE_BROWSER;
var REQUEST_UI_WINDOW = 'ui-request_window';
exports.REQUEST_UI_WINDOW = REQUEST_UI_WINDOW;
var CLOSE_UI_WINDOW = 'ui-close_window';
exports.CLOSE_UI_WINDOW = CLOSE_UI_WINDOW;
var REQUEST_PERMISSION = 'ui-request_permission';
exports.REQUEST_PERMISSION = REQUEST_PERMISSION;
var REQUEST_CONFIRMATION = 'ui-request_confirmation';
exports.REQUEST_CONFIRMATION = REQUEST_CONFIRMATION;
var REQUEST_PIN = 'ui-request_pin';
exports.REQUEST_PIN = REQUEST_PIN;
var INVALID_PIN = 'ui-invalid_pin';
exports.INVALID_PIN = INVALID_PIN;
var REQUEST_PASSPHRASE = 'ui-request_passphrase';
exports.REQUEST_PASSPHRASE = REQUEST_PASSPHRASE;
var REQUEST_PASSPHRASE_ON_DEVICE = 'ui-request_passphrase_on_device';
exports.REQUEST_PASSPHRASE_ON_DEVICE = REQUEST_PASSPHRASE_ON_DEVICE;
var INVALID_PASSPHRASE = 'ui-invalid_passphrase';
exports.INVALID_PASSPHRASE = INVALID_PASSPHRASE;
var INVALID_PASSPHRASE_ACTION = 'ui-invalid_passphrase_action';
exports.INVALID_PASSPHRASE_ACTION = INVALID_PASSPHRASE_ACTION;
var CONNECT = 'ui-connect';
exports.CONNECT = CONNECT;
var LOADING = 'ui-loading';
exports.LOADING = LOADING;
var SET_OPERATION = 'ui-set_operation';
exports.SET_OPERATION = SET_OPERATION;
var SELECT_DEVICE = 'ui-select_device';
exports.SELECT_DEVICE = SELECT_DEVICE;
var SELECT_ACCOUNT = 'ui-select_account';
exports.SELECT_ACCOUNT = SELECT_ACCOUNT;
var SELECT_FEE = 'ui-select_fee';
exports.SELECT_FEE = SELECT_FEE;
var UPDATE_CUSTOM_FEE = 'ui-update_custom_fee';
exports.UPDATE_CUSTOM_FEE = UPDATE_CUSTOM_FEE;
var INSUFFICIENT_FUNDS = 'ui-insufficient_funds';
exports.INSUFFICIENT_FUNDS = INSUFFICIENT_FUNDS;
var REQUEST_BUTTON = 'ui-button';
exports.REQUEST_BUTTON = REQUEST_BUTTON;
var REQUEST_WORD = 'ui-request_word';
exports.REQUEST_WORD = REQUEST_WORD;
var RECEIVE_PERMISSION = 'ui-receive_permission';
exports.RECEIVE_PERMISSION = RECEIVE_PERMISSION;
var RECEIVE_CONFIRMATION = 'ui-receive_confirmation';
exports.RECEIVE_CONFIRMATION = RECEIVE_CONFIRMATION;
var RECEIVE_PIN = 'ui-receive_pin';
exports.RECEIVE_PIN = RECEIVE_PIN;
var RECEIVE_PASSPHRASE = 'ui-receive_passphrase';
exports.RECEIVE_PASSPHRASE = RECEIVE_PASSPHRASE;
var RECEIVE_DEVICE = 'ui-receive_device';
exports.RECEIVE_DEVICE = RECEIVE_DEVICE;
var CHANGE_ACCOUNT = 'ui-change_account';
exports.CHANGE_ACCOUNT = CHANGE_ACCOUNT;
var RECEIVE_ACCOUNT = 'ui-receive_account';
exports.RECEIVE_ACCOUNT = RECEIVE_ACCOUNT;
var RECEIVE_FEE = 'ui-receive_fee';
exports.RECEIVE_FEE = RECEIVE_FEE;
var RECEIVE_WORD = 'ui-receive_word';
exports.RECEIVE_WORD = RECEIVE_WORD;
var CHANGE_SETTINGS = 'ui-change_settings';
exports.CHANGE_SETTINGS = CHANGE_SETTINGS;
var CUSTOM_MESSAGE_REQUEST = 'ui-custom_request';
exports.CUSTOM_MESSAGE_REQUEST = CUSTOM_MESSAGE_REQUEST;
var CUSTOM_MESSAGE_RESPONSE = 'ui-custom_response';
exports.CUSTOM_MESSAGE_RESPONSE = CUSTOM_MESSAGE_RESPONSE;
var LOGIN_CHALLENGE_REQUEST = 'ui-login_challenge_request';
exports.LOGIN_CHALLENGE_REQUEST = LOGIN_CHALLENGE_REQUEST;
var LOGIN_CHALLENGE_RESPONSE = 'ui-login_challenge_response';
exports.LOGIN_CHALLENGE_RESPONSE = LOGIN_CHALLENGE_RESPONSE;
var BUNDLE_PROGRESS = 'ui-bundle_progress';
exports.BUNDLE_PROGRESS = BUNDLE_PROGRESS;
var ADDRESS_VALIDATION = 'ui-address_validation';
exports.ADDRESS_VALIDATION = ADDRESS_VALIDATION;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/data/ConnectSettings.js":
/*!*****************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/data/ConnectSettings.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.parse = exports.DEFAULT_PRIORITY = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Initial settings for connect.
 * It could be changed by passing values into TrezorConnect.init(...) method
 */
var VERSION = '7.0.5';
var versionN = VERSION.split('.').map(function (s) {
  return parseInt(s);
});
var DIRECTORY = "" + versionN[0] + (versionN[1] > 0 ? "." + versionN[1] : '') + "/";
var DEFAULT_DOMAIN = "https://connect.trezor.io/" + DIRECTORY;
var DEFAULT_PRIORITY = 2;
exports.DEFAULT_PRIORITY = DEFAULT_PRIORITY;
var initialSettings = {
  configSrc: 'data/config.json',
  // constant
  version: VERSION,
  // constant
  debug: false,
  origin: null,
  priority: DEFAULT_PRIORITY,
  trustedHost: false,
  connectSrc: DEFAULT_DOMAIN,
  iframeSrc: DEFAULT_DOMAIN + "iframe.html",
  popup: true,
  popupSrc: DEFAULT_DOMAIN + "popup.html",
  webusbSrc: DEFAULT_DOMAIN + "webusb.html",
  transportReconnect: false,
  webusb: true,
  pendingTransportEvent: true,
  supportedBrowser: typeof navigator !== 'undefined' ? !/Trident|MSIE/.test(navigator.userAgent) : true,
  extension: null,
  manifest: null
};
var currentSettings = initialSettings;

var parseManifest = function parseManifest(manifest) {
  if (typeof manifest.email !== 'string') {
    return null;
  }

  if (typeof manifest.appUrl !== 'string') {
    return null;
  }

  return {
    email: manifest.email,
    appUrl: manifest.appUrl
  };
};

var parse = function parse(input) {
  if (!input) return currentSettings;

  var settings = _objectSpread({}, currentSettings);

  if (input.hasOwnProperty('debug')) {
    if (Array.isArray(input)) {// enable log with prefix
    }

    if (typeof input.debug === 'boolean') {
      settings.debug = input.debug;
    } else if (typeof input.debug === 'string') {
      settings.debug = input.debug === 'true';
    }
  }

  if (typeof input.connectSrc === 'string') {
    // TODO: escape string, validate url
    settings.connectSrc = input.connectSrc;
  } else if (typeof window !== 'undefined' && typeof window.__TREZOR_CONNECT_SRC === 'string') {
    settings.connectSrc = window.__TREZOR_CONNECT_SRC;
  }

  settings.iframeSrc = settings.connectSrc + "iframe.html";
  settings.popupSrc = settings.connectSrc + "popup.html";
  settings.webusbSrc = settings.connectSrc + "webusb.html";

  if (typeof input.transportReconnect === 'boolean') {
    settings.transportReconnect = input.transportReconnect;
  }

  if (typeof input.webusb === 'boolean') {
    settings.webusb = input.webusb;
  }

  if (typeof input.popup === 'boolean') {
    settings.popup = input.popup;
  }

  if (typeof input.pendingTransportEvent === 'boolean') {
    settings.pendingTransportEvent = input.pendingTransportEvent;
  } // local files


  if (typeof window !== 'undefined' && window.location.protocol === 'file:') {
    settings.origin = "file://" + window.location.pathname;
    settings.webusb = false;
  }

  if (typeof input.extension === 'string') {
    settings.extension = input.extension;
  }

  if (typeof input.manifest === 'object') {
    settings.manifest = parseManifest(input.manifest);
  }

  currentSettings = settings;
  return currentSettings;
};

exports.parse = parse;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/iframe/builder.js":
/*!***********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/iframe/builder.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.clearTimeout = exports.dispose = exports.postMessage = exports.init = exports.messagePromises = exports.error = exports.timeout = exports.initPromise = exports.origin = exports.instance = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _deferred = __webpack_require__(/*! ../utils/deferred */ "./node_modules/trezor-connect/lib/utils/deferred.js");

var _ui = __webpack_require__(/*! ../constants/ui */ "./node_modules/trezor-connect/lib/constants/ui.js");

var _errors = __webpack_require__(/*! ../constants/errors */ "./node_modules/trezor-connect/lib/constants/errors.js");

var _inlineStyles = _interopRequireDefault(__webpack_require__(/*! ./inline-styles */ "./node_modules/trezor-connect/lib/iframe/inline-styles.js"));

var instance;
exports.instance = instance;
var origin;
exports.origin = origin;
var initPromise = (0, _deferred.create)();
exports.initPromise = initPromise;
var timeout = 0;
exports.timeout = timeout;
var error;
exports.error = error;
var _messageID = 0; // every postMessage to iframe has its own promise to resolve

var messagePromises = {};
exports.messagePromises = messagePromises;

var init =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(settings) {
    var existedFrame, manifestString, manifest, src, iframeSrcHost, onLoad;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            existedFrame = document.getElementById('trezorconnect');

            if (existedFrame) {
              exports.instance = instance = existedFrame;
            } else {
              exports.instance = instance = document.createElement('iframe');
              instance.frameBorder = '0';
              instance.width = '0px';
              instance.height = '0px';
              instance.style.position = 'absolute';
              instance.style.display = 'none';
              instance.style.border = '0px';
              instance.style.width = '0px';
              instance.style.height = '0px';
              instance.id = 'trezorconnect';
            }

            manifestString = settings.manifest ? JSON.stringify(settings.manifest) : 'undefined'; // note: btoa(undefined) === btoa('undefined') === "dW5kZWZpbmVk"

            manifest = "&version=" + settings.version + "&manifest=" + encodeURIComponent(btoa(JSON.stringify(manifestString)));
            src = settings.iframeSrc + "?" + Date.now() + manifest;
            instance.setAttribute('src', src);

            if (settings.webusb) {
              instance.setAttribute('allow', 'usb');
            } // eslint-disable-next-line no-irregular-whitespace, no-useless-escape


            iframeSrcHost = instance.src.match(/^.+\:\/\/[^\/]+/);

            if (iframeSrcHost && iframeSrcHost.length > 0) {
              exports.origin = origin = iframeSrcHost[0];
            }

            exports.timeout = timeout = window.setTimeout(function () {
              initPromise.reject(_errors.IFRAME_TIMEOUT);
            }, 10000);

            onLoad = function onLoad() {
              if (!instance) {
                initPromise.reject(_errors.IFRAME_BLOCKED);
                return;
              }

              try {
                // if hosting page is able to access cross-origin location it means that the iframe is not loaded
                var iframeOrigin = instance.contentWindow.location.origin;

                if (!iframeOrigin || iframeOrigin === 'null') {
                  // eslint-disable-next-line no-use-before-define
                  handleIframeBlocked();
                  return;
                }
              } catch (e) {// empty
              }

              var extension; // $FlowIssue chrome is not declared outside

              if (typeof chrome !== 'undefined' && chrome.runtime && typeof chrome.runtime.onConnect !== 'undefined') {
                chrome.runtime.onConnect.addListener(function () {});
                extension = chrome.runtime.id;
              }

              instance.contentWindow.postMessage({
                type: _ui.IFRAME_HANDSHAKE,
                payload: {
                  settings: settings,
                  extension: extension
                }
              }, origin);
              instance.onload = undefined;
            }; // IE hack


            if (instance.attachEvent) {
              instance.attachEvent('onload', onLoad);
            } else {
              instance.onload = onLoad;
            } // inject iframe into host document body


            if (document.body) {
              document.body.appendChild(instance); // eslint-disable-next-line no-use-before-define

              injectStyleSheet();
            }

            _context.prev = 13;
            _context.next = 16;
            return initPromise.promise;

          case 16:
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](13);
            throw _context.t0.message || _context.t0;

          case 21:
            _context.prev = 21;
            window.clearTimeout(timeout);
            exports.timeout = timeout = 0;
            return _context.finish(21);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[13, 18, 21, 25]]);
  }));

  return function init(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.init = init;

var injectStyleSheet = function injectStyleSheet() {
  if (!instance) {
    throw _errors.IFRAME_BLOCKED;
  }

  var doc = instance.ownerDocument;
  var head = doc.head || doc.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.setAttribute('id', 'TrezorConnectStylesheet'); // $FlowIssue

  if (style.styleSheet) {
    // IE
    // $FlowIssue
    style.styleSheet.cssText = _inlineStyles["default"];
  } else {
    style.appendChild(document.createTextNode(_inlineStyles["default"]));
  }

  head.append(style);
};

var handleIframeBlocked = function handleIframeBlocked() {
  window.clearTimeout(timeout);
  exports.error = error = _errors.IFRAME_BLOCKED.message; // eslint-disable-next-line no-use-before-define

  dispose();
  initPromise.reject(_errors.IFRAME_BLOCKED);
}; // post messages to iframe


var postMessage = function postMessage(message, usePromise) {
  if (usePromise === void 0) {
    usePromise = true;
  }

  if (!instance) {
    throw _errors.IFRAME_BLOCKED;
  }

  if (usePromise) {
    _messageID++;
    message.id = _messageID;
    messagePromises[_messageID] = (0, _deferred.create)();
    instance.contentWindow.postMessage(message, origin);
    return messagePromises[_messageID].promise;
  }

  instance.contentWindow.postMessage(message, origin);
  return null;
};

exports.postMessage = postMessage;

var dispose = function dispose() {
  if (instance && instance.parentNode) {
    try {
      instance.parentNode.removeChild(instance);
    } catch (error) {// do nothing
    }
  }

  exports.instance = instance = null;
  exports.timeout = timeout = 0;
};

exports.dispose = dispose;

var clearTimeout = function clearTimeout() {
  window.clearTimeout(timeout);
};

exports.clearTimeout = clearTimeout;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/iframe/inline-styles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/iframe/inline-styles.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var css = '.trezorconnect-container{position:fixed!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important;z-index:10000!important;width:100%!important;height:100%!important;top:0!important;left:0!important;background:rgba(0,0,0,.35)!important;overflow:auto!important;padding:20px!important;margin:0!important}.trezorconnect-container .trezorconnect-window{position:relative!important;display:block!important;width:370px!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif!important;margin:auto!important;border-radius:3px!important;background-color:#fff!important;text-align:center!important;overflow:hidden!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head{text-align:left;padding:12px 24px!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-logo{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close{cursor:pointer!important;height:24px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close svg{fill:#757575;-webkit-transition:fill .3s ease-in-out!important;transition:fill .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close:hover svg{fill:#494949}.trezorconnect-container .trezorconnect-window .trezorconnect-body{padding:24px 24px 32px!important;background:#FBFBFB!important;border-top:1px solid #EBEBEB}.trezorconnect-container .trezorconnect-window .trezorconnect-body h3{color:#505050!important;font-size:16px!important;font-weight:500!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body p{margin:8px 0 24px!important;font-weight:400!important;color:#A9A9A9!important;font-size:12px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button{width:100%!important;padding:12px 24px!important;margin:0!important;border-radius:3px!important;font-size:14px!important;font-weight:300!important;cursor:pointer!important;background:#01B757!important;color:#fff!important;border:0!important;-webkit-transition:background-color .3s ease-in-out!important;transition:background-color .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:hover{background-color:#00AB51!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:active{background-color:#009546!important}/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0IiwiJHN0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLHlCQUNJLFNBQUEsZ0JBQ0EsUUFBQSxzQkFDQSxRQUFBLHVCQUNBLFFBQUEsc0JBRUEsUUFBQSxlQUNBLG1CQUFBLG1CQUNBLHNCQUFBLGlCQUNBLHVCQUFBLGlCQUNBLG1CQUFBLGlCQUNBLGVBQUEsaUJBRUEsa0JBQUEsaUJBQ0Esb0JBQUEsaUJBQ0EsZUFBQSxpQkNmTSxZQUFhLGlCREFyQixRQUFTLGdCQWtCSCxNQUFBLGVBQ0EsT0FBQSxlQUNBLElBQUEsWUFDQSxLQUFBLFlBQ0EsV0FBQSwwQkFDQSxTQUFBLGVBQ0EsUUFBQSxlQUNBLE9BQUEsWUNkUiwrQ0RYRSxTQUFVLG1CQTZCQSxRQUFBLGdCQUNBLE1BQUEsZ0JBQ0EsWUFBQSxjQUFBLG1CQUFBLFdBQUEsT0FBQSxpQkFBQSxNQUFBLHFCQUNBLE9BQUEsZUNmVixjQUFlLGNEakJmLGlCQWlCRSxlQWtCWSxXQUFBLGlCQ2ZkLFNBQVUsaUJEbUJJLG1FQUNBLFdBQUEsS0NoQmQsUUFBUyxLQUFLLGVEeEJkLFFBQVMsc0JBMENTLFFBQUEsdUJBQ0EsUUFBQSxzQkNmbEIsUUFBUyxlRGlCSyxrQkE1QlosaUJBOEJvQixvQkFBQSxpQkNoQmxCLGVBQWdCLGlCRC9CWixZQWlCTixpQkFzQ1EsdUZBQ0EsaUJBQUEsRUNwQlYsYUFBYyxFRHBDVixTQUFVLEVBMkRBLEtBQUEsRUFFQSx3RkNwQmQsT0FBUSxrQkR6Q1IsT0FBUSxlQWlFTSw0RkFDQSxLQUFBLFFBQ0EsbUJBQUEsS0FBQSxJQUFBLHNCQ3BCZCxXQUFZLEtBQUssSUFBSyxzQkR3QlIsa0dBQ0EsS0FBQSxRQUVBLG1FQUNBLFFBQUEsS0FBQSxLQUFBLGVBQ0EsV0FBQSxrQkFDQSxXQUFBLElBQUEsTUFBQSxRQUVBLHNFQUNBLE1BQUEsa0JBQ0EsVUFBQSxlQ3JCZCxZQUFhLGNEd0JLLHFFQ3JCbEIsT0FBUSxJQUFJLEVBQUksZUR3QkYsWUFBQSxjQUNJLE1BQUEsa0JDdEJsQixVQUFXLGVBRWIsMEVBQ0UsTUFBTyxlQUNQLFFBQVMsS0FBSyxlQUNkLE9BQVEsWUFDUixjQUFlLGNBQ2YsVUFBVyxlQUNYLFlBQWEsY0FDYixPQUFRLGtCQUNSLFdBQVksa0JBQ1osTUFBTyxlQUNQLE9BQVEsWUFDUixtQkFBb0IsaUJBQWlCLElBQUssc0JBQzFDLFdBQVksaUJBQWlCLElBQUssc0JBRXBDLGdGQUNFLGlCQUFrQixrQkFFcEIsaUZBQ0UsaUJBQWtCIn0= */';
var _default = css;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/trezor-connect/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
var _exportNames = {
  UI_EVENT: true,
  DEVICE_EVENT: true,
  RESPONSE_EVENT: true,
  TRANSPORT_EVENT: true,
  BLOCKCHAIN_EVENT: true,
  TRANSPORT: true,
  UI: true,
  DEVICE: true,
  BLOCKCHAIN: true
};
exports.BLOCKCHAIN = exports.DEVICE = exports.UI = exports.TRANSPORT = exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _events = _interopRequireDefault(__webpack_require__(/*! events */ "./node_modules/events/events.js"));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/trezor-connect/lib/constants/index.js");

exports.UI_EVENT = _constants.UI_EVENT;
exports.DEVICE_EVENT = _constants.DEVICE_EVENT;
exports.RESPONSE_EVENT = _constants.RESPONSE_EVENT;
exports.TRANSPORT_EVENT = _constants.TRANSPORT_EVENT;
exports.BLOCKCHAIN_EVENT = _constants.BLOCKCHAIN_EVENT;

var TRANSPORT = _interopRequireWildcard(__webpack_require__(/*! ./constants/transport */ "./node_modules/trezor-connect/lib/constants/transport.js"));

exports.TRANSPORT = TRANSPORT;

var POPUP = _interopRequireWildcard(__webpack_require__(/*! ./constants/popup */ "./node_modules/trezor-connect/lib/constants/popup.js"));

var IFRAME = _interopRequireWildcard(__webpack_require__(/*! ./constants/iframe */ "./node_modules/trezor-connect/lib/constants/iframe.js"));

var UI = _interopRequireWildcard(__webpack_require__(/*! ./constants/ui */ "./node_modules/trezor-connect/lib/constants/ui.js"));

exports.UI = UI;

var DEVICE = _interopRequireWildcard(__webpack_require__(/*! ./constants/device */ "./node_modules/trezor-connect/lib/constants/device.js"));

exports.DEVICE = DEVICE;

var BLOCKCHAIN = _interopRequireWildcard(__webpack_require__(/*! ./constants/blockchain */ "./node_modules/trezor-connect/lib/constants/blockchain.js"));

exports.BLOCKCHAIN = BLOCKCHAIN;

var ERROR = _interopRequireWildcard(__webpack_require__(/*! ./constants/errors */ "./node_modules/trezor-connect/lib/constants/errors.js"));

var _PopupManager = _interopRequireDefault(__webpack_require__(/*! ./popup/PopupManager */ "./node_modules/trezor-connect/lib/popup/PopupManager.js"));

var iframe = _interopRequireWildcard(__webpack_require__(/*! ./iframe/builder */ "./node_modules/trezor-connect/lib/iframe/builder.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ./webusb/button */ "./node_modules/trezor-connect/lib/webusb/button.js"));

var _debug = _interopRequireWildcard(__webpack_require__(/*! ./utils/debug */ "./node_modules/trezor-connect/lib/utils/debug.js"));

var _message = __webpack_require__(/*! ./message */ "./node_modules/trezor-connect/lib/message/index.js");

var _ConnectSettings = __webpack_require__(/*! ./data/ConnectSettings */ "./node_modules/trezor-connect/lib/data/ConnectSettings.js");

var $T = _interopRequireWildcard(__webpack_require__(/*! ./types */ "./node_modules/trezor-connect/lib/types/index.js"));

var _blockchainEvent = __webpack_require__(/*! ./types/blockchainEvent */ "./node_modules/trezor-connect/lib/types/blockchainEvent.js");

Object.keys(_blockchainEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _blockchainEvent[key];
});

var _account = __webpack_require__(/*! ./types/account */ "./node_modules/trezor-connect/lib/types/account.js");

Object.keys(_account).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _account[key];
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var eventEmitter = new _events["default"]();

var _log = (0, _debug.init)('[trezor-connect.js]');

var _settings;

var _popupManager;

var initPopupManager = function initPopupManager() {
  var pm = new _PopupManager["default"](_settings);
  pm.on(POPUP.CLOSED, function () {
    iframe.postMessage({
      type: POPUP.CLOSED
    }, false);
  });
  return pm;
}; // handle message received from iframe


var handleMessage = function handleMessage(messageEvent) {
  // ignore messages from domain other then iframe origin
  if (messageEvent.origin !== iframe.origin) return;
  var message = (0, _message.parseMessage)(messageEvent.data); // TODO: destructuring with type
  // https://github.com/Microsoft/TypeScript/issues/240
  // const { id, event, type, data, error }: CoreMessage = message;

  var id = message.id || 0;
  var event = message.event;
  var type = message.type;
  var payload = message.payload;

  _log.log('handleMessage', message);

  switch (event) {
    case _constants.RESPONSE_EVENT:
      if (iframe.messagePromises[id]) {
        // clear unnecessary fields from message object
        delete message.type;
        delete message.event; // delete message.id;
        // message.__id = id;
        // resolve message promise (send result of call method)

        iframe.messagePromises[id].resolve(message);
        delete iframe.messagePromises[id];
      } else {
        _log.warn("Unknown message id " + id);
      }

      break;

    case _constants.DEVICE_EVENT:
      // pass DEVICE event up to html
      eventEmitter.emit(event, message);
      eventEmitter.emit(type, payload); // DEVICE_EVENT also emit single events (connect/disconnect...)

      break;

    case _constants.TRANSPORT_EVENT:
      eventEmitter.emit(event, message);
      eventEmitter.emit(type, payload);
      break;

    case _constants.BLOCKCHAIN_EVENT:
      eventEmitter.emit(event, message);
      eventEmitter.emit(type, payload);
      break;

    case _constants.UI_EVENT:
      if (type === IFRAME.BOOTSTRAP) {
        iframe.clearTimeout();
        break;
      } else if (type === POPUP.BOOTSTRAP) {
        // Popup did open but is still loading JS
        _popupManager.cancelOpenTimeout();

        break;
      } // pass UI event up


      eventEmitter.emit(event, message);
      eventEmitter.emit(type, payload);

      if (type === UI.IFRAME_HANDSHAKE) {
        if (payload.error) {
          iframe.initPromise.reject(new Error(payload.error));
        } else {
          _popupManager.setBroadcast(payload.broadcast);

          iframe.initPromise.resolve();
        }
      } else if (type === POPUP.CANCEL_POPUP_REQUEST) {
        _popupManager.cancel();
      } else if (type === UI.CLOSE_UI_WINDOW) {
        _popupManager.close();
      }

      break;

    default:
      _log.log('Undefined message', event, messageEvent);

  }
};

var init =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(settings) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (settings === void 0) {
              settings = {};
            }

            if (!iframe.instance) {
              _context.next = 3;
              break;
            }

            throw ERROR.IFRAME_INITIALIZED;

          case 3:
            if (!_settings) {
              _settings = (0, _ConnectSettings.parse)(settings);
            }

            if (_settings.manifest) {
              _context.next = 6;
              break;
            }

            throw ERROR.MANIFEST_NOT_SET;

          case 6:
            if (_settings.supportedBrowser) {
              _context.next = 8;
              break;
            }

            throw ERROR.BROWSER_NOT_SUPPORTED;

          case 8:
            if (!_popupManager) {
              _popupManager = initPopupManager();
            }

            _log.enabled = _settings.debug;
            window.addEventListener('message', handleMessage);
            window.addEventListener('beforeunload', function () {
              if (_popupManager) {
                _popupManager.onBeforeUnload();
              }

              iframe.dispose();
            });
            _context.next = 14;
            return iframe.init(_settings);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init(_x) {
    return _ref.apply(this, arguments);
  };
}();

var call =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(params) {
    var response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!iframe.instance && !iframe.timeout)) {
              _context2.next = 19;
              break;
            }

            // init popup with lazy loading before iframe initialization
            _settings = (0, _ConnectSettings.parse)(_settings);

            if (_settings.manifest) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: ERROR.MANIFEST_NOT_SET.message
              }
            });

          case 4:
            if (_settings.supportedBrowser) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: ERROR.BROWSER_NOT_SUPPORTED.message
              }
            });

          case 6:
            _popupManager = initPopupManager();

            _popupManager.request(true); // auto init with default settings


            _context2.prev = 8;
            _context2.next = 11;
            return init(_settings);

          case 11:
            _context2.next = 13;
            return _popupManager.resolveLazyLoad();

          case 13:
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](8);

            _popupManager.close();

            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: _context2.t0
              }
            });

          case 19:
            if (!iframe.timeout) {
              _context2.next = 23;
              break;
            }

            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: ERROR.NO_IFRAME.message
              }
            });

          case 23:
            if (!iframe.error) {
              _context2.next = 25;
              break;
            }

            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: iframe.error
              }
            });

          case 25:
            // request popup window it might be used in the future
            // if (eventEmitter.listeners(UI_EVENT).length < 1) { _popupManager.request(params); }
            if (_settings.popup) {
              _popupManager.request();
            } // post message to iframe


            _context2.prev = 26;
            _context2.next = 29;
            return iframe.postMessage({
              type: IFRAME.CALL,
              payload: params
            });

          case 29:
            response = _context2.sent;

            if (!response) {
              _context2.next = 35;
              break;
            }

            // TODO: unlock popupManager request only if there wasn't error "in progress"
            if (response.payload.error !== ERROR.DEVICE_CALL_IN_PROGRESS.message) {
              _popupManager.unlock();
            }

            return _context2.abrupt("return", response);

          case 35:
            _popupManager.unlock(); // TODO


            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: 'No response from iframe'
              }
            });

          case 37:
            _context2.next = 43;
            break;

          case 39:
            _context2.prev = 39;
            _context2.t1 = _context2["catch"](26);

            _log.error('__call error', _context2.t1);

            return _context2.abrupt("return", _context2.t1);

          case 43:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[8, 15], [26, 39]]);
  }));

  return function call(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var customMessageResponse = function customMessageResponse(payload) {
  iframe.postMessage({
    event: _constants.UI_EVENT,
    type: UI.CUSTOM_MESSAGE_RESPONSE,
    payload: payload
  });
};

var TrezorConnect = function TrezorConnect() {};

(0, _defineProperty2["default"])(TrezorConnect, "manifest", function (data) {
  _settings = (0, _ConnectSettings.parse)({
    manifest: data
  });
});
(0, _defineProperty2["default"])(TrezorConnect, "getSettings",
/*#__PURE__*/
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee3() {
  return _regenerator["default"].wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (iframe.instance) {
            _context3.next = 2;
            break;
          }

          return _context3.abrupt("return", {
            success: false,
            payload: {
              error: 'Iframe not initialized yet, you need to call TrezorConnect.init or any other method first.'
            }
          });

        case 2:
          _context3.next = 4;
          return call({
            method: 'getSettings'
          });

        case 4:
          return _context3.abrupt("return", _context3.sent);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));
(0, _defineProperty2["default"])(TrezorConnect, "init",
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(settings) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return init(settings);

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x3) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "on", function (type, fn) {
  eventEmitter.on(type, fn);
});
(0, _defineProperty2["default"])(TrezorConnect, "off", function (type, fn) {
  eventEmitter.removeListener(type, fn);
});
(0, _defineProperty2["default"])(TrezorConnect, "uiResponse", function (response) {
  iframe.postMessage(_objectSpread({
    event: _constants.UI_EVENT
  }, response));
});
(0, _defineProperty2["default"])(TrezorConnect, "changeSettings", function (settings) {
  var parsedSettings = (0, _ConnectSettings.parse)(settings);
  _log.enabled = parsedSettings.debug;
  iframe.postMessage({
    type: UI.CHANGE_SETTINGS,
    payload: parsedSettings
  }, false);
});
(0, _defineProperty2["default"])(TrezorConnect, "blockchainDisconnect",
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(params) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return call(_objectSpread({
              method: 'blockchainDisconnect'
            }, params));

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x4) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "blockchainEstimateFee",
/*#__PURE__*/
function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(params) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return call(_objectSpread({
              method: 'blockchainEstimateFee'
            }, params));

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x5) {
    return _ref6.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "blockchainSubscribe",
/*#__PURE__*/
function () {
  var _ref7 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(params) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return call(_objectSpread({
              method: 'blockchainSubscribe'
            }, params));

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x6) {
    return _ref7.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "blockchainUnsubscribe",
/*#__PURE__*/
function () {
  var _ref8 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8(params) {
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return call(_objectSpread({
              method: 'blockchainUnsubscribe'
            }, params));

          case 2:
            return _context8.abrupt("return", _context8.sent);

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x7) {
    return _ref8.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "customMessage",
/*#__PURE__*/
function () {
  var _ref9 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee10(params) {
    var callback, customMessageListener, response;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            if (!(typeof params.callback !== 'function')) {
              _context10.next = 2;
              break;
            }

            return _context10.abrupt("return", {
              success: false,
              payload: {
                error: 'Parameter "callback" is not a function'
              }
            });

          case 2:
            // TODO: set message listener only if iframe is loaded correctly
            callback = params.callback;
            delete params.callback;

            customMessageListener =
            /*#__PURE__*/
            function () {
              var _ref10 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee9(event) {
                var data, payload;
                return _regenerator["default"].wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        data = event.data;

                        if (!(data && data.type === UI.CUSTOM_MESSAGE_REQUEST)) {
                          _context9.next = 6;
                          break;
                        }

                        _context9.next = 4;
                        return callback(data.payload);

                      case 4:
                        payload = _context9.sent;

                        if (payload) {
                          customMessageResponse(payload);
                        } else {
                          customMessageResponse({
                            message: 'release'
                          });
                        }

                      case 6:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9);
              }));

              return function customMessageListener(_x9) {
                return _ref10.apply(this, arguments);
              };
            }();

            window.addEventListener('message', customMessageListener, false);
            _context10.next = 8;
            return call(_objectSpread({
              method: 'customMessage'
            }, params));

          case 8:
            response = _context10.sent;
            window.removeEventListener('message', customMessageListener);
            return _context10.abrupt("return", response);

          case 11:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function (_x8) {
    return _ref9.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "requestLogin",
/*#__PURE__*/
function () {
  var _ref11 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee12(params) {
    var callback, loginChallengeListener, response;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            if (!(typeof params.callback === 'function')) {
              _context12.next = 12;
              break;
            }

            callback = params.callback;
            delete params.callback; // delete callback value. this field cannot be sent using postMessage function
            // TODO: set message listener only if iframe is loaded correctly

            loginChallengeListener =
            /*#__PURE__*/
            function () {
              var _ref12 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee11(event) {
                var data, payload;
                return _regenerator["default"].wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        data = event.data;

                        if (!(data && data.type === UI.LOGIN_CHALLENGE_REQUEST)) {
                          _context11.next = 13;
                          break;
                        }

                        _context11.prev = 2;
                        _context11.next = 5;
                        return callback();

                      case 5:
                        payload = _context11.sent;
                        iframe.postMessage({
                          event: _constants.UI_EVENT,
                          type: UI.LOGIN_CHALLENGE_RESPONSE,
                          payload: payload
                        });
                        _context11.next = 13;
                        break;

                      case 9:
                        _context11.prev = 9;
                        _context11.t0 = _context11["catch"](2);
                        console.warn('TrezorConnect.requestLogin: callback error', _context11.t0);
                        iframe.postMessage({
                          event: _constants.UI_EVENT,
                          type: UI.LOGIN_CHALLENGE_RESPONSE,
                          payload: _context11.t0.message
                        });

                      case 13:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, null, [[2, 9]]);
              }));

              return function loginChallengeListener(_x11) {
                return _ref12.apply(this, arguments);
              };
            }();

            window.addEventListener('message', loginChallengeListener, false);
            _context12.next = 7;
            return call(_objectSpread({
              method: 'requestLogin'
            }, params, {
              asyncChallenge: true
            }));

          case 7:
            response = _context12.sent;
            window.removeEventListener('message', loginChallengeListener);
            return _context12.abrupt("return", response);

          case 12:
            _context12.next = 14;
            return call(_objectSpread({
              method: 'requestLogin'
            }, params));

          case 14:
            return _context12.abrupt("return", _context12.sent);

          case 15:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function (_x10) {
    return _ref11.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "resetDevice",
/*#__PURE__*/
function () {
  var _ref13 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee13(params) {
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return call(_objectSpread({
              method: 'resetDevice'
            }, params));

          case 2:
            return _context13.abrupt("return", _context13.sent);

          case 3:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function (_x12) {
    return _ref13.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "cardanoGetAddress",
/*#__PURE__*/
function () {
  var _ref14 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee14(params) {
    var useEventListener;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context14.next = 3;
            return call(_objectSpread({
              method: 'cardanoGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context14.abrupt("return", _context14.sent);

          case 4:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function (_x13) {
    return _ref14.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "cardanoGetPublicKey",
/*#__PURE__*/
function () {
  var _ref15 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee15(params) {
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return call(_objectSpread({
              method: 'cardanoGetPublicKey'
            }, params));

          case 2:
            return _context15.abrupt("return", _context15.sent);

          case 3:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function (_x14) {
    return _ref15.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "cardanoSignTransaction",
/*#__PURE__*/
function () {
  var _ref16 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee16(params) {
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return call(_objectSpread({
              method: 'cardanoSignTransaction'
            }, params));

          case 2:
            return _context16.abrupt("return", _context16.sent);

          case 3:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function (_x15) {
    return _ref16.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "cipherKeyValue",
/*#__PURE__*/
function () {
  var _ref17 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee17(params) {
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return call(_objectSpread({
              method: 'cipherKeyValue'
            }, params));

          case 2:
            return _context17.abrupt("return", _context17.sent);

          case 3:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function (_x16) {
    return _ref17.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "composeTransaction",
/*#__PURE__*/
function () {
  var _ref18 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee18(params) {
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return call(_objectSpread({
              method: 'composeTransaction'
            }, params));

          case 2:
            return _context18.abrupt("return", _context18.sent);

          case 3:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function (_x17) {
    return _ref18.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "debugLinkDecision",
/*#__PURE__*/
function () {
  var _ref19 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee19(params) {
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return call(_objectSpread({
              method: 'debugLinkDecision'
            }, params));

          case 2:
            return _context19.abrupt("return", _context19.sent);

          case 3:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));

  return function (_x18) {
    return _ref19.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "debugLinkGetState",
/*#__PURE__*/
function () {
  var _ref20 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee20(params) {
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.next = 2;
            return call(_objectSpread({
              method: 'debugLinkGetState'
            }, params));

          case 2:
            return _context20.abrupt("return", _context20.sent);

          case 3:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));

  return function (_x19) {
    return _ref20.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "ethereumGetAccountInfo",
/*#__PURE__*/
function () {
  var _ref21 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee21(params) {
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return call(_objectSpread({
              method: 'ethereumGetAccountInfo'
            }, params));

          case 2:
            return _context21.abrupt("return", _context21.sent);

          case 3:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));

  return function (_x20) {
    return _ref21.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "ethereumGetAddress",
/*#__PURE__*/
function () {
  var _ref22 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee22(params) {
    var useEventListener;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context22.next = 3;
            return call(_objectSpread({
              method: 'ethereumGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context22.abrupt("return", _context22.sent);

          case 4:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  }));

  return function (_x21) {
    return _ref22.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "ethereumGetPublicKey",
/*#__PURE__*/
function () {
  var _ref23 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee23(params) {
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.next = 2;
            return call(_objectSpread({
              method: 'ethereumGetPublicKey'
            }, params));

          case 2:
            return _context23.abrupt("return", _context23.sent);

          case 3:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23);
  }));

  return function (_x22) {
    return _ref23.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "ethereumSignMessage",
/*#__PURE__*/
function () {
  var _ref24 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee24(params) {
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _context24.next = 2;
            return call(_objectSpread({
              method: 'ethereumSignMessage'
            }, params));

          case 2:
            return _context24.abrupt("return", _context24.sent);

          case 3:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24);
  }));

  return function (_x23) {
    return _ref24.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "ethereumSignTransaction",
/*#__PURE__*/
function () {
  var _ref25 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee25(params) {
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            _context25.next = 2;
            return call(_objectSpread({
              method: 'ethereumSignTransaction'
            }, params));

          case 2:
            return _context25.abrupt("return", _context25.sent);

          case 3:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25);
  }));

  return function (_x24) {
    return _ref25.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "ethereumVerifyMessage",
/*#__PURE__*/
function () {
  var _ref26 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee26(params) {
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _context26.next = 2;
            return call(_objectSpread({
              method: 'ethereumVerifyMessage'
            }, params));

          case 2:
            return _context26.abrupt("return", _context26.sent);

          case 3:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26);
  }));

  return function (_x25) {
    return _ref26.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "getAccountInfo",
/*#__PURE__*/
function () {
  var _ref27 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee27(params) {
    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            _context27.next = 2;
            return call(_objectSpread({
              method: 'getAccountInfo'
            }, params));

          case 2:
            return _context27.abrupt("return", _context27.sent);

          case 3:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27);
  }));

  return function (_x26) {
    return _ref27.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "getAddress",
/*#__PURE__*/
function () {
  var _ref28 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee28(params) {
    var useEventListener;
    return _regenerator["default"].wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context28.next = 3;
            return call(_objectSpread({
              method: 'getAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context28.abrupt("return", _context28.sent);

          case 4:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28);
  }));

  return function (_x27) {
    return _ref28.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "getDeviceState",
/*#__PURE__*/
function () {
  var _ref29 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee29(params) {
    return _regenerator["default"].wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            _context29.next = 2;
            return call(_objectSpread({
              method: 'getDeviceState'
            }, params));

          case 2:
            return _context29.abrupt("return", _context29.sent);

          case 3:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29);
  }));

  return function (_x28) {
    return _ref29.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "getFeatures",
/*#__PURE__*/
function () {
  var _ref30 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee30(params) {
    return _regenerator["default"].wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            _context30.next = 2;
            return call(_objectSpread({
              method: 'getFeatures'
            }, params));

          case 2:
            return _context30.abrupt("return", _context30.sent);

          case 3:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30);
  }));

  return function (_x29) {
    return _ref30.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "getPublicKey",
/*#__PURE__*/
function () {
  var _ref31 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee31(params) {
    return _regenerator["default"].wrap(function _callee31$(_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            _context31.next = 2;
            return call(_objectSpread({
              method: 'getPublicKey'
            }, params));

          case 2:
            return _context31.abrupt("return", _context31.sent);

          case 3:
          case "end":
            return _context31.stop();
        }
      }
    }, _callee31);
  }));

  return function (_x30) {
    return _ref31.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "liskGetAddress",
/*#__PURE__*/
function () {
  var _ref32 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee32(params) {
    var useEventListener;
    return _regenerator["default"].wrap(function _callee32$(_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context32.next = 3;
            return call(_objectSpread({
              method: 'liskGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context32.abrupt("return", _context32.sent);

          case 4:
          case "end":
            return _context32.stop();
        }
      }
    }, _callee32);
  }));

  return function (_x31) {
    return _ref32.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "liskGetPublicKey",
/*#__PURE__*/
function () {
  var _ref33 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee33(params) {
    return _regenerator["default"].wrap(function _callee33$(_context33) {
      while (1) {
        switch (_context33.prev = _context33.next) {
          case 0:
            _context33.next = 2;
            return call(_objectSpread({
              method: 'liskGetPublicKey'
            }, params));

          case 2:
            return _context33.abrupt("return", _context33.sent);

          case 3:
          case "end":
            return _context33.stop();
        }
      }
    }, _callee33);
  }));

  return function (_x32) {
    return _ref33.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "liskSignMessage",
/*#__PURE__*/
function () {
  var _ref34 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee34(params) {
    return _regenerator["default"].wrap(function _callee34$(_context34) {
      while (1) {
        switch (_context34.prev = _context34.next) {
          case 0:
            _context34.next = 2;
            return call(_objectSpread({
              method: 'liskSignMessage'
            }, params));

          case 2:
            return _context34.abrupt("return", _context34.sent);

          case 3:
          case "end":
            return _context34.stop();
        }
      }
    }, _callee34);
  }));

  return function (_x33) {
    return _ref34.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "liskSignTransaction",
/*#__PURE__*/
function () {
  var _ref35 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee35(params) {
    return _regenerator["default"].wrap(function _callee35$(_context35) {
      while (1) {
        switch (_context35.prev = _context35.next) {
          case 0:
            _context35.next = 2;
            return call(_objectSpread({
              method: 'liskSignTransaction'
            }, params));

          case 2:
            return _context35.abrupt("return", _context35.sent);

          case 3:
          case "end":
            return _context35.stop();
        }
      }
    }, _callee35);
  }));

  return function (_x34) {
    return _ref35.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "liskVerifyMessage",
/*#__PURE__*/
function () {
  var _ref36 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee36(params) {
    return _regenerator["default"].wrap(function _callee36$(_context36) {
      while (1) {
        switch (_context36.prev = _context36.next) {
          case 0:
            _context36.next = 2;
            return call(_objectSpread({
              method: 'liskVerifyMessage'
            }, params));

          case 2:
            return _context36.abrupt("return", _context36.sent);

          case 3:
          case "end":
            return _context36.stop();
        }
      }
    }, _callee36);
  }));

  return function (_x35) {
    return _ref36.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "nemGetAddress",
/*#__PURE__*/
function () {
  var _ref37 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee37(params) {
    var useEventListener;
    return _regenerator["default"].wrap(function _callee37$(_context37) {
      while (1) {
        switch (_context37.prev = _context37.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context37.next = 3;
            return call(_objectSpread({
              method: 'nemGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context37.abrupt("return", _context37.sent);

          case 4:
          case "end":
            return _context37.stop();
        }
      }
    }, _callee37);
  }));

  return function (_x36) {
    return _ref37.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "nemSignTransaction",
/*#__PURE__*/
function () {
  var _ref38 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee38(params) {
    return _regenerator["default"].wrap(function _callee38$(_context38) {
      while (1) {
        switch (_context38.prev = _context38.next) {
          case 0:
            _context38.next = 2;
            return call(_objectSpread({
              method: 'nemSignTransaction'
            }, params));

          case 2:
            return _context38.abrupt("return", _context38.sent);

          case 3:
          case "end":
            return _context38.stop();
        }
      }
    }, _callee38);
  }));

  return function (_x37) {
    return _ref38.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "pushTransaction",
/*#__PURE__*/
function () {
  var _ref39 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee39(params) {
    return _regenerator["default"].wrap(function _callee39$(_context39) {
      while (1) {
        switch (_context39.prev = _context39.next) {
          case 0:
            _context39.next = 2;
            return call(_objectSpread({
              method: 'pushTransaction'
            }, params));

          case 2:
            return _context39.abrupt("return", _context39.sent);

          case 3:
          case "end":
            return _context39.stop();
        }
      }
    }, _callee39);
  }));

  return function (_x38) {
    return _ref39.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "rippleGetAccountInfo",
/*#__PURE__*/
function () {
  var _ref40 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee40(params) {
    return _regenerator["default"].wrap(function _callee40$(_context40) {
      while (1) {
        switch (_context40.prev = _context40.next) {
          case 0:
            _context40.next = 2;
            return call(_objectSpread({
              method: 'rippleGetAccountInfo'
            }, params));

          case 2:
            return _context40.abrupt("return", _context40.sent);

          case 3:
          case "end":
            return _context40.stop();
        }
      }
    }, _callee40);
  }));

  return function (_x39) {
    return _ref40.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "rippleGetAddress",
/*#__PURE__*/
function () {
  var _ref41 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee41(params) {
    var useEventListener;
    return _regenerator["default"].wrap(function _callee41$(_context41) {
      while (1) {
        switch (_context41.prev = _context41.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context41.next = 3;
            return call(_objectSpread({
              method: 'rippleGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context41.abrupt("return", _context41.sent);

          case 4:
          case "end":
            return _context41.stop();
        }
      }
    }, _callee41);
  }));

  return function (_x40) {
    return _ref41.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "rippleSignTransaction",
/*#__PURE__*/
function () {
  var _ref42 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee42(params) {
    return _regenerator["default"].wrap(function _callee42$(_context42) {
      while (1) {
        switch (_context42.prev = _context42.next) {
          case 0:
            _context42.next = 2;
            return call(_objectSpread({
              method: 'rippleSignTransaction'
            }, params));

          case 2:
            return _context42.abrupt("return", _context42.sent);

          case 3:
          case "end":
            return _context42.stop();
        }
      }
    }, _callee42);
  }));

  return function (_x41) {
    return _ref42.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "signMessage",
/*#__PURE__*/
function () {
  var _ref43 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee43(params) {
    return _regenerator["default"].wrap(function _callee43$(_context43) {
      while (1) {
        switch (_context43.prev = _context43.next) {
          case 0:
            _context43.next = 2;
            return call(_objectSpread({
              method: 'signMessage'
            }, params));

          case 2:
            return _context43.abrupt("return", _context43.sent);

          case 3:
          case "end":
            return _context43.stop();
        }
      }
    }, _callee43);
  }));

  return function (_x42) {
    return _ref43.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "signTransaction",
/*#__PURE__*/
function () {
  var _ref44 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee44(params) {
    return _regenerator["default"].wrap(function _callee44$(_context44) {
      while (1) {
        switch (_context44.prev = _context44.next) {
          case 0:
            _context44.next = 2;
            return call(_objectSpread({
              method: 'signTransaction'
            }, params));

          case 2:
            return _context44.abrupt("return", _context44.sent);

          case 3:
          case "end":
            return _context44.stop();
        }
      }
    }, _callee44);
  }));

  return function (_x43) {
    return _ref44.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "stellarGetAddress",
/*#__PURE__*/
function () {
  var _ref45 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee45(params) {
    var useEventListener;
    return _regenerator["default"].wrap(function _callee45$(_context45) {
      while (1) {
        switch (_context45.prev = _context45.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context45.next = 3;
            return call(_objectSpread({
              method: 'stellarGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context45.abrupt("return", _context45.sent);

          case 4:
          case "end":
            return _context45.stop();
        }
      }
    }, _callee45);
  }));

  return function (_x44) {
    return _ref45.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "stellarSignTransaction",
/*#__PURE__*/
function () {
  var _ref46 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee46(params) {
    return _regenerator["default"].wrap(function _callee46$(_context46) {
      while (1) {
        switch (_context46.prev = _context46.next) {
          case 0:
            _context46.next = 2;
            return call(_objectSpread({
              method: 'stellarSignTransaction'
            }, params));

          case 2:
            return _context46.abrupt("return", _context46.sent);

          case 3:
          case "end":
            return _context46.stop();
        }
      }
    }, _callee46);
  }));

  return function (_x45) {
    return _ref46.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "tezosGetAddress",
/*#__PURE__*/
function () {
  var _ref47 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee47(params) {
    var useEventListener;
    return _regenerator["default"].wrap(function _callee47$(_context47) {
      while (1) {
        switch (_context47.prev = _context47.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context47.next = 3;
            return call(_objectSpread({
              method: 'tezosGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context47.abrupt("return", _context47.sent);

          case 4:
          case "end":
            return _context47.stop();
        }
      }
    }, _callee47);
  }));

  return function (_x46) {
    return _ref47.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "tezosGetPublicKey",
/*#__PURE__*/
function () {
  var _ref48 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee48(params) {
    return _regenerator["default"].wrap(function _callee48$(_context48) {
      while (1) {
        switch (_context48.prev = _context48.next) {
          case 0:
            _context48.next = 2;
            return call(_objectSpread({
              method: 'tezosGetPublicKey'
            }, params));

          case 2:
            return _context48.abrupt("return", _context48.sent);

          case 3:
          case "end":
            return _context48.stop();
        }
      }
    }, _callee48);
  }));

  return function (_x47) {
    return _ref48.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "tezosSignTransaction",
/*#__PURE__*/
function () {
  var _ref49 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee49(params) {
    return _regenerator["default"].wrap(function _callee49$(_context49) {
      while (1) {
        switch (_context49.prev = _context49.next) {
          case 0:
            _context49.next = 2;
            return call(_objectSpread({
              method: 'tezosSignTransaction'
            }, params));

          case 2:
            return _context49.abrupt("return", _context49.sent);

          case 3:
          case "end":
            return _context49.stop();
        }
      }
    }, _callee49);
  }));

  return function (_x48) {
    return _ref49.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "eosGetPublicKey",
/*#__PURE__*/
function () {
  var _ref50 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee50(params) {
    return _regenerator["default"].wrap(function _callee50$(_context50) {
      while (1) {
        switch (_context50.prev = _context50.next) {
          case 0:
            _context50.next = 2;
            return call(_objectSpread({
              method: 'eosGetPublicKey'
            }, params));

          case 2:
            return _context50.abrupt("return", _context50.sent);

          case 3:
          case "end":
            return _context50.stop();
        }
      }
    }, _callee50);
  }));

  return function (_x49) {
    return _ref50.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "eosSignTransaction",
/*#__PURE__*/
function () {
  var _ref51 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee51(params) {
    return _regenerator["default"].wrap(function _callee51$(_context51) {
      while (1) {
        switch (_context51.prev = _context51.next) {
          case 0:
            _context51.next = 2;
            return call(_objectSpread({
              method: 'eosSignTransaction'
            }, params));

          case 2:
            return _context51.abrupt("return", _context51.sent);

          case 3:
          case "end":
            return _context51.stop();
        }
      }
    }, _callee51);
  }));

  return function (_x50) {
    return _ref51.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "verifyMessage",
/*#__PURE__*/
function () {
  var _ref52 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee52(params) {
    return _regenerator["default"].wrap(function _callee52$(_context52) {
      while (1) {
        switch (_context52.prev = _context52.next) {
          case 0:
            _context52.next = 2;
            return call(_objectSpread({
              method: 'verifyMessage'
            }, params));

          case 2:
            return _context52.abrupt("return", _context52.sent);

          case 3:
          case "end":
            return _context52.stop();
        }
      }
    }, _callee52);
  }));

  return function (_x51) {
    return _ref52.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "wipeDevice",
/*#__PURE__*/
function () {
  var _ref53 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee53(params) {
    return _regenerator["default"].wrap(function _callee53$(_context53) {
      while (1) {
        switch (_context53.prev = _context53.next) {
          case 0:
            _context53.next = 2;
            return call(_objectSpread({
              method: 'wipeDevice'
            }, params));

          case 2:
            return _context53.abrupt("return", _context53.sent);

          case 3:
          case "end":
            return _context53.stop();
        }
      }
    }, _callee53);
  }));

  return function (_x52) {
    return _ref53.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "applyFlags",
/*#__PURE__*/
function () {
  var _ref54 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee54(params) {
    return _regenerator["default"].wrap(function _callee54$(_context54) {
      while (1) {
        switch (_context54.prev = _context54.next) {
          case 0:
            _context54.next = 2;
            return call(_objectSpread({
              method: 'applyFlags'
            }, params));

          case 2:
            return _context54.abrupt("return", _context54.sent);

          case 3:
          case "end":
            return _context54.stop();
        }
      }
    }, _callee54);
  }));

  return function (_x53) {
    return _ref54.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "applySettings",
/*#__PURE__*/
function () {
  var _ref55 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee55(params) {
    return _regenerator["default"].wrap(function _callee55$(_context55) {
      while (1) {
        switch (_context55.prev = _context55.next) {
          case 0:
            _context55.next = 2;
            return call(_objectSpread({
              method: 'applySettings'
            }, params));

          case 2:
            return _context55.abrupt("return", _context55.sent);

          case 3:
          case "end":
            return _context55.stop();
        }
      }
    }, _callee55);
  }));

  return function (_x54) {
    return _ref55.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "backupDevice",
/*#__PURE__*/
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee56() {
  return _regenerator["default"].wrap(function _callee56$(_context56) {
    while (1) {
      switch (_context56.prev = _context56.next) {
        case 0:
          _context56.next = 2;
          return call({
            method: 'backupDevice'
          });

        case 2:
          return _context56.abrupt("return", _context56.sent);

        case 3:
        case "end":
          return _context56.stop();
      }
    }
  }, _callee56);
})));
(0, _defineProperty2["default"])(TrezorConnect, "changePin",
/*#__PURE__*/
function () {
  var _ref57 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee57(params) {
    return _regenerator["default"].wrap(function _callee57$(_context57) {
      while (1) {
        switch (_context57.prev = _context57.next) {
          case 0:
            _context57.next = 2;
            return call(_objectSpread({
              method: 'changePin'
            }, params));

          case 2:
            return _context57.abrupt("return", _context57.sent);

          case 3:
          case "end":
            return _context57.stop();
        }
      }
    }, _callee57);
  }));

  return function (_x55) {
    return _ref57.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "firmwareErase",
/*#__PURE__*/
function () {
  var _ref58 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee58(params) {
    return _regenerator["default"].wrap(function _callee58$(_context58) {
      while (1) {
        switch (_context58.prev = _context58.next) {
          case 0:
            _context58.next = 2;
            return call(_objectSpread({
              method: 'firmwareErase'
            }, params));

          case 2:
            return _context58.abrupt("return", _context58.sent);

          case 3:
          case "end":
            return _context58.stop();
        }
      }
    }, _callee58);
  }));

  return function (_x56) {
    return _ref58.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "firmwareUpload",
/*#__PURE__*/
function () {
  var _ref59 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee59(params) {
    return _regenerator["default"].wrap(function _callee59$(_context59) {
      while (1) {
        switch (_context59.prev = _context59.next) {
          case 0:
            _context59.next = 2;
            return call(_objectSpread({
              method: 'firmwareUpload'
            }, params));

          case 2:
            return _context59.abrupt("return", _context59.sent);

          case 3:
          case "end":
            return _context59.stop();
        }
      }
    }, _callee59);
  }));

  return function (_x57) {
    return _ref59.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "firmwareUpdate",
/*#__PURE__*/
function () {
  var _ref60 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee60(params) {
    return _regenerator["default"].wrap(function _callee60$(_context60) {
      while (1) {
        switch (_context60.prev = _context60.next) {
          case 0:
            _context60.next = 2;
            return call(_objectSpread({
              method: 'firmwareUpdate'
            }, params));

          case 2:
            return _context60.abrupt("return", _context60.sent);

          case 3:
          case "end":
            return _context60.stop();
        }
      }
    }, _callee60);
  }));

  return function (_x58) {
    return _ref60.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "recoveryDevice",
/*#__PURE__*/
function () {
  var _ref61 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee61(params) {
    return _regenerator["default"].wrap(function _callee61$(_context61) {
      while (1) {
        switch (_context61.prev = _context61.next) {
          case 0:
            _context61.next = 2;
            return call(_objectSpread({
              method: 'recoveryDevice'
            }, params));

          case 2:
            return _context61.abrupt("return", _context61.sent);

          case 3:
          case "end":
            return _context61.stop();
        }
      }
    }, _callee61);
  }));

  return function (_x59) {
    return _ref61.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "dispose", function () {
  iframe.dispose();

  if (_popupManager) {
    _popupManager.close();
  }
});
(0, _defineProperty2["default"])(TrezorConnect, "cancel", function () {
  if (_popupManager) {
    _popupManager.emit(POPUP.CLOSED);
  }
});
(0, _defineProperty2["default"])(TrezorConnect, "renderWebUSBButton", function (className) {
  (0, _button["default"])(className, _settings.webusbSrc, iframe.origin);
});
var _default = TrezorConnect;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/message/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/message/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseMessage = void 0;

// parse MessageEvent .data into CoreMessage
var parseMessage = function parseMessage(messageData) {
  var message = {
    event: messageData.event,
    type: messageData.type,
    payload: messageData.payload
  };

  if (typeof messageData.id === 'number') {
    message.id = messageData.id;
  }

  if (typeof messageData.success === 'boolean') {
    message.success = messageData.success;
  }

  return message;
};

exports.parseMessage = parseMessage;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/popup/PopupManager.js":
/*!***************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/popup/PopupManager.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _events = _interopRequireDefault(__webpack_require__(/*! events */ "./node_modules/events/events.js"));

var POPUP = _interopRequireWildcard(__webpack_require__(/*! ../constants/popup */ "./node_modules/trezor-connect/lib/constants/popup.js"));

var ERROR = _interopRequireWildcard(__webpack_require__(/*! ../constants/errors */ "./node_modules/trezor-connect/lib/constants/errors.js"));

var _showPopupRequest = __webpack_require__(/*! ./showPopupRequest */ "./node_modules/trezor-connect/lib/popup/showPopupRequest.js");

var _networkUtils = __webpack_require__(/*! ../utils/networkUtils */ "./node_modules/trezor-connect/lib/utils/networkUtils.js");

var _deferred = __webpack_require__(/*! ../utils/deferred */ "./node_modules/trezor-connect/lib/utils/deferred.js");

// const POPUP_REQUEST_TIMEOUT: number = 602;
var POPUP_REQUEST_TIMEOUT = 850;
var POPUP_CLOSE_INTERVAL = 500;
var POPUP_OPEN_TIMEOUT = 2000;

var PopupManager =
/*#__PURE__*/
function (_EventEmitter) {
  (0, _inheritsLoose2["default"])(PopupManager, _EventEmitter);

  // Window
  function PopupManager(settings) {
    var _this;

    _this = _EventEmitter.call(this) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "requestTimeout", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "closeInterval", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "extension", false);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "extensionTabId", 0);
    _this.settings = settings;
    _this.src = settings.popupSrc;
    _this.origin = (0, _networkUtils.getOrigin)(settings.popupSrc);
    _this.handleLazyLoading = _this.handleLazyLoading.bind((0, _assertThisInitialized2["default"])(_this)); // $FlowIssue chrome not declared outside

    _this.extension = typeof chrome !== 'undefined' && chrome.runtime && typeof chrome.runtime.onConnect !== 'undefined';

    if (_this.extension) {
      _this.handleExtensionConnect = _this.handleExtensionConnect.bind((0, _assertThisInitialized2["default"])(_this));
      _this.handleExtensionMessage = _this.handleExtensionMessage.bind((0, _assertThisInitialized2["default"])(_this)); // $FlowIssue chrome not declared outside

      chrome.runtime.onConnect.addListener(_this.handleExtensionConnect);
    }

    return _this;
  }

  var _proto = PopupManager.prototype;

  _proto.request = function request(lazyLoad) {
    var _this2 = this;

    if (lazyLoad === void 0) {
      lazyLoad = false;
    }

    // popup request
    // TODO: ie - open imediately and hide it but post handshake after timeout
    // bring popup window to front
    if (this.locked) {
      if (this._window) {
        if (this.extension) {
          // $FlowIssue chrome not declared outside
          chrome.tabs.update(this._window.id, {
            active: true
          });
        } else {
          this._window.focus();
        }
      }

      return;
    }

    this.lazyLoad = lazyLoad ? (0, _deferred.create)(POPUP.INIT) : null;

    if (this.lazyLoad) {
      if (!this.extension) {
        window.addEventListener('message', this.handleLazyLoading, false);
      }
    }

    var openFn = this.open.bind(this);
    this.locked = true;

    if (!this.settings.supportedBrowser) {
      openFn();
    } else {
      this.requestTimeout = window.setTimeout(function () {
        _this2.requestTimeout = 0;
        openFn();
      }, lazyLoad || this.extension ? 1 : POPUP_REQUEST_TIMEOUT);
    }
  };

  _proto.cancel = function cancel() {
    this.close();
  };

  _proto.unlock = function unlock() {
    this.locked = false;
  };

  _proto.open = function open() {
    var _this3 = this;

    if (!this.settings.supportedBrowser) {
      this.openWrapper(this.src + '#unsupported');
      return;
    }

    this.openWrapper(this.lazyLoad ? this.src + '#loading' : this.src);
    this.closeInterval = window.setInterval(function () {
      if (_this3._window) {
        if (_this3.extension) {
          // $FlowIssue chrome not declared outside
          chrome.tabs.get(_this3._window.id, function (tab) {
            if (!tab) {
              _this3.close();

              _this3.emit(POPUP.CLOSED);
            }
          });
        } else if (_this3._window.closed) {
          _this3.close();

          _this3.emit(POPUP.CLOSED);
        }
      }
    }, POPUP_CLOSE_INTERVAL);
    this.openTimeout = window.setTimeout(function () {
      if (!(_this3._window && !_this3._window.closed)) {
        _this3.close();

        (0, _showPopupRequest.showPopupRequest)(_this3.open.bind(_this3), function () {
          _this3.emit(POPUP.CLOSED);
        });
      }
    }, POPUP_OPEN_TIMEOUT);
  };

  _proto.openWrapper = function openWrapper(url) {
    var _this4 = this;

    if (this.extension) {
      // $FlowIssue chrome not declared outside
      chrome.windows.getCurrent(null, function (currentWindow) {
        // Request coming from extension popup,
        // create new window above instead of opening new tab
        if (currentWindow.type !== 'normal') {
          // $FlowIssue chrome not declared outside
          chrome.windows.create({
            url: url
          }, function (newWindow) {
            // $FlowIssue chrome not declared outside
            chrome.tabs.query({
              windowId: newWindow.id,
              active: true
            }, function (tabs) {
              _this4._window = tabs[0];
            });
          });
        } else {
          // $FlowIssue chrome not declared outside
          chrome.tabs.query({
            currentWindow: true,
            active: true
          }, function (tabs) {
            _this4.extensionTabId = tabs[0].id; // $FlowIssue chrome not declared outside

            chrome.tabs.create({
              url: url,
              index: tabs[0].index + 1
            }, function (tab) {
              _this4._window = tab;
            });
          });
        }
      });
    } else {
      this._window = window.open('', '_blank');

      if (this._window) {
        this._window.location.href = url; // otherwise android/chrome loose window.opener reference
      }
    }
  };

  _proto.handleExtensionConnect = function handleExtensionConnect(port) {
    if (port.name === 'trezor-connect') {
      if (!this._window || this._window && this._window.id !== port.sender.tab.id) {
        port.disconnect();
        return;
      }

      this.extensionPort = port; // $FlowIssue need to update ChromePort definition

      this.extensionPort.onMessage.addListener(this.handleExtensionMessage);
    } else if (port.name === 'trezor-usb-permissions') {
      port.postMessage({
        broadcast: this.broadcast
      });
    }
  };

  _proto.handleExtensionMessage = function handleExtensionMessage(message) {
    if (!this.extensionPort) return;

    if (message === POPUP.EXTENSION_REQUEST) {
      this.extensionPort.postMessage({
        type: POPUP.EXTENSION_REQUEST,
        broadcast: this.broadcast
      });
    } else if (message === POPUP.INIT && this.lazyLoad) {
      this.lazyLoad.resolve(true);
    } else if (message === POPUP.EXTENSION_USB_PERMISSIONS) {
      // $FlowIssue chrome not declared outside
      chrome.tabs.query({
        currentWindow: true,
        active: true
      }, function (tabs) {
        // $FlowIssue chrome not declared outside
        chrome.tabs.create({
          url: 'trezor-usb-permissions.html',
          index: tabs[0].index + 1
        }, function (tab) {// do nothing
        });
      });
    } else if (message === POPUP.CLOSE_WINDOW) {
      this.emit(POPUP.CLOSED);
      this.close();
    }
  };

  _proto.setBroadcast = function setBroadcast(broadcast) {
    this.broadcast = broadcast;
  };

  _proto.handleLazyLoading = function handleLazyLoading(event) {
    if (this.lazyLoad && event.data && event.data === POPUP.INIT) {
      this.lazyLoad.resolve(true);
      window.removeEventListener('message', this.handleLazyLoading, false);
    }
  };

  _proto.resolveLazyLoad =
  /*#__PURE__*/
  function () {
    var _resolveLazyLoad = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this.lazyLoad) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return this.lazyLoad.promise;

            case 3:
              _context.next = 6;
              break;

            case 5:
              throw ERROR.POPUP_CLOSED.message;

            case 6:
              if (this.extension) {
                if (this.extensionPort) {
                  this.extensionPort.postMessage({
                    type: POPUP.INIT
                  });
                }
              } else if (this._window) {
                this._window.postMessage({
                  type: POPUP.INIT
                }, this.origin);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function resolveLazyLoad() {
      return _resolveLazyLoad.apply(this, arguments);
    }

    return resolveLazyLoad;
  }();

  _proto.close = function close() {
    this.locked = false;

    if (this.requestTimeout) {
      window.clearTimeout(this.requestTimeout);
      this.requestTimeout = 0;
    }

    if (this.openTimeout) {
      window.clearTimeout(this.openTimeout);
      this.openTimeout = 0;
    }

    if (this.closeInterval) {
      window.clearInterval(this.closeInterval);
      this.closeInterval = 0;
    }

    if (this.extensionPort) {
      this.extensionPort.disconnect();
      this.extensionPort = null;
    }

    if (this.extensionTabId) {
      // $FlowIssue chrome not declared outside
      chrome.tabs.update(this.extensionTabId, {
        active: true
      });
      this.extensionTabId = 0;
    }

    if (this.lazyLoad) {
      this.lazyLoad = null;
    }

    if (this._window) {
      if (this.extension) {
        // $FlowIssue chrome not declared outside
        chrome.tabs.remove(this._window.id);
      } else {
        this._window.close();
      }

      this._window = null;
    }
  };

  _proto.postMessage = function postMessage(message) {
    var _this5 = this;

    // post message before popup request finalized
    if (this.requestTimeout) {
      return;
    } // device needs interaction but there is no popup/ui
    // maybe popup request wasn't handled
    // ignore "ui_request_window" type


    if (!this._window && message.type !== 'ui_request_window' && this.openTimeout) {
      this.close();
      (0, _showPopupRequest.showPopupRequest)(this.open.bind(this), function () {
        _this5.emit(POPUP.CLOSED);
      });
      return;
    } // post message to popup window


    if (this._window) {
      this._window.postMessage(message, this.origin);
    }
  };

  _proto.onBeforeUnload = function onBeforeUnload() {
    this.close();
  };

  _proto.cancelOpenTimeout = function cancelOpenTimeout() {
    window.clearTimeout(this.openTimeout);
  };

  return PopupManager;
}(_events["default"]);

exports["default"] = PopupManager;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/popup/showPopupRequest.js":
/*!*******************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/popup/showPopupRequest.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.showPopupRequest = void 0;
var layerID = 'TrezorConnectInteractionLayer';
var layerInnerHtml = "\n    <div class=\"trezorconnect-container\" id=\"" + layerID + "\">\n        <div class=\"trezorconnect-window\">\n            <div class=\"trezorconnect-head\">\n                <svg class=\"trezorconnect-logo\" x=\"0px\" y=\"0px\" viewBox=\"0 0 163.7 41.9\" width=\"78px\" height=\"20px\" preserveAspectRatio=\"xMinYMin meet\">\n                    <polygon points=\"101.1,12.8 118.2,12.8 118.2,17.3 108.9,29.9 118.2,29.9 118.2,35.2 101.1,35.2 101.1,30.7 110.4,18.1 101.1,18.1\"/>\n                    <path d=\"M158.8,26.9c2.1-0.8,4.3-2.9,4.3-6.6c0-4.5-3.1-7.4-7.7-7.4h-10.5v22.3h5.8v-7.5h2.2l4.1,7.5h6.7L158.8,26.9z M154.7,22.5 h-4V18h4c1.5,0,2.5,0.9,2.5,2.2C157.2,21.6,156.2,22.5,154.7,22.5z\"/>\n                    <path d=\"M130.8,12.5c-6.8,0-11.6,4.9-11.6,11.5s4.9,11.5,11.6,11.5s11.7-4.9,11.7-11.5S137.6,12.5,130.8,12.5z M130.8,30.3 c-3.4,0-5.7-2.6-5.7-6.3c0-3.8,2.3-6.3,5.7-6.3c3.4,0,5.8,2.6,5.8,6.3C136.6,27.7,134.2,30.3,130.8,30.3z\"/>\n                    <polygon points=\"82.1,12.8 98.3,12.8 98.3,18 87.9,18 87.9,21.3 98,21.3 98,26.4 87.9,26.4 87.9,30 98.3,30 98.3,35.2 82.1,35.2 \"/>\n                    <path d=\"M24.6,9.7C24.6,4.4,20,0,14.4,0S4.2,4.4,4.2,9.7v3.1H0v22.3h0l14.4,6.7l14.4-6.7h0V12.9h-4.2V9.7z M9.4,9.7 c0-2.5,2.2-4.5,5-4.5s5,2,5,4.5v3.1H9.4V9.7z M23,31.5l-8.6,4l-8.6-4V18.1H23V31.5z\"/>\n                    <path d=\"M79.4,20.3c0-4.5-3.1-7.4-7.7-7.4H61.2v22.3H67v-7.5h2.2l4.1,7.5H80l-4.9-8.3C77.2,26.1,79.4,24,79.4,20.3z M71,22.5h-4V18 h4c1.5,0,2.5,0.9,2.5,2.2C73.5,21.6,72.5,22.5,71,22.5z\"/>\n                    <polygon points=\"40.5,12.8 58.6,12.8 58.6,18.1 52.4,18.1 52.4,35.2 46.6,35.2 46.6,18.1 40.5,18.1 \"/>\n                </svg>\n                <div class=\"trezorconnect-close\">\n                    <svg x=\"0px\" y=\"0px\" viewBox=\"24 24 60 60\" width=\"24px\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\">\n                        <polygon class=\"st0\" points=\"40,67.9 42.1,70 55,57.1 67.9,70 70,67.9 57.1,55 70,42.1 67.9,40 55,52.9 42.1,40 40,42.1 52.9,55 \"/>\n                    </svg>\n                </div>\n            </div>\n            <div class=\"trezorconnect-body\">\n                <h3>Popup was blocked</h3>\n                <p>Please click to \u201CContinue\u201D to open popup manually</p>\n                <button class=\"trezorconnect-open\">Continue</button>\n            </div>\n        </div>\n    </div>\n";

var showPopupRequest = function showPopupRequest(open, cancel) {
  if (document.getElementById(layerID)) {
    return;
  }

  var div = document.createElement('div');
  div.id = layerID;
  div.className = 'trezorconnect-container';
  div.innerHTML = layerInnerHtml;

  if (document.body) {
    document.body.appendChild(div);
  }

  var button = div.getElementsByClassName('trezorconnect-open')[0];

  button.onclick = function () {
    open();

    if (document.body) {
      document.body.removeChild(div);
    }
  };

  var close = div.getElementsByClassName('trezorconnect-close')[0];

  close.onclick = function () {
    cancel();

    if (document.body) {
      document.body.removeChild(div);
    }
  };
};

exports.showPopupRequest = showPopupRequest;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/account.js":
/*!**********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/account.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/blockchainEvent.js":
/*!******************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/blockchainEvent.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var BLOCKCHAIN = _interopRequireWildcard(__webpack_require__(/*! ../constants/blockchain */ "./node_modules/trezor-connect/lib/constants/blockchain.js"));

/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/cardano.js":
/*!**********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/cardano.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/coinInfo.js":
/*!***********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/coinInfo.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/eos.js":
/*!******************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/eos.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/ethereum.js":
/*!***********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/ethereum.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/index.js":
/*!********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/trezor-connect/lib/constants/index.js");

var TRANSPORT = _interopRequireWildcard(__webpack_require__(/*! ../constants/transport */ "./node_modules/trezor-connect/lib/constants/transport.js"));

var POPUP = _interopRequireWildcard(__webpack_require__(/*! ../constants/popup */ "./node_modules/trezor-connect/lib/constants/popup.js"));

var UI = _interopRequireWildcard(__webpack_require__(/*! ../constants/ui */ "./node_modules/trezor-connect/lib/constants/ui.js"));

var DEVICE = _interopRequireWildcard(__webpack_require__(/*! ../constants/device */ "./node_modules/trezor-connect/lib/constants/device.js"));

var P = _interopRequireWildcard(__webpack_require__(/*! ./params */ "./node_modules/trezor-connect/lib/types/params.js"));

var R = _interopRequireWildcard(__webpack_require__(/*! ./response */ "./node_modules/trezor-connect/lib/types/response.js"));

Object.keys(R).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = R[key];
});

var CARDANO = _interopRequireWildcard(__webpack_require__(/*! ./cardano */ "./node_modules/trezor-connect/lib/types/cardano.js"));

var RIPPLE = _interopRequireWildcard(__webpack_require__(/*! ./ripple */ "./node_modules/trezor-connect/lib/types/ripple.js"));

var ETHEREUM = _interopRequireWildcard(__webpack_require__(/*! ./ethereum */ "./node_modules/trezor-connect/lib/types/ethereum.js"));

var NEM = _interopRequireWildcard(__webpack_require__(/*! ./nem */ "./node_modules/trezor-connect/lib/types/nem.js"));

var STELLAR = _interopRequireWildcard(__webpack_require__(/*! ./stellar */ "./node_modules/trezor-connect/lib/types/stellar.js"));

var LISK = _interopRequireWildcard(__webpack_require__(/*! ./lisk */ "./node_modules/trezor-connect/lib/types/lisk.js"));

var TEZOS = _interopRequireWildcard(__webpack_require__(/*! ./tezos */ "./node_modules/trezor-connect/lib/types/tezos.js"));

var EOS = _interopRequireWildcard(__webpack_require__(/*! ./eos */ "./node_modules/trezor-connect/lib/types/eos.js"));

var _coinInfo = __webpack_require__(/*! ./coinInfo */ "./node_modules/trezor-connect/lib/types/coinInfo.js");

Object.keys(_coinInfo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _coinInfo[key];
});

/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/lisk.js":
/*!*******************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/lisk.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/nem.js":
/*!******************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/nem.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/params.js":
/*!*********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/params.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/response.js":
/*!***********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/response.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/ripple.js":
/*!*********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/ripple.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/stellar.js":
/*!**********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/stellar.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/tezos.js":
/*!********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/tezos.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/utils/debug.js":
/*!********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/utils/debug.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) { // https://stackoverflow.com/questions/7505623/colors-in-javascript-console
// https://github.com/pimterry/loglevel/blob/master/lib/loglevel.js
// http://www.color-hex.com/color-palette/5016

exports.__esModule = true;
exports.popupConsole = exports.enableByPrefix = exports.getLog = exports.enable = exports.init = exports["default"] = void 0;

var _this = void 0;

var colors = {
  // green
  'DescriptorStream': 'color: #77ab59',
  'DeviceList': 'color: #36802d',
  'Device': 'color: #bada55',
  'Core': 'color: #c9df8a',
  'IFrame': 'color: #FFFFFF; background: #f4a742;',
  'Popup': 'color: #f48a00'
};

var Log =
/*#__PURE__*/
function () {
  function Log(prefix, enabled) {
    if (enabled === void 0) {
      enabled = false;
    }

    this.prefix = prefix;
    this.enabled = enabled;
    this.messages = [];
    this.css = colors[prefix] || 'color: #000000; background: #FFFFFF;';
  }

  var _proto = Log.prototype;

  _proto.addMessage = function addMessage(level, prefix) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.messages.push({
      level: level,
      prefix: prefix,
      message: args,
      timestamp: new Date().getTime()
    });
  };

  _proto.log = function log() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    this.addMessage.apply(this, ['log', this.prefix].concat(args));

    if (this.enabled) {
      var _console;

      (_console = console).log.apply(_console, [this.prefix].concat(args));
    }
  };

  _proto.error = function error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    this.addMessage.apply(this, ['error', this.prefix].concat(args));

    if (this.enabled) {
      var _console2;

      (_console2 = console).error.apply(_console2, [this.prefix].concat(args));
    }
  };

  _proto.warn = function warn() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    this.addMessage.apply(this, ['warn', this.prefix].concat(args));

    if (this.enabled) {
      var _console3;

      (_console3 = console).warn.apply(_console3, [this.prefix].concat(args));
    }
  };

  _proto.debug = function debug() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    this.addMessage.apply(this, ['debug', this.prefix].concat(args));

    if (this.enabled) {
      var _console4;

      (_console4 = console).log.apply(_console4, ['%c' + this.prefix, this.css].concat(args));
    }
  };

  return Log;
}();

exports["default"] = Log;
var _logs = {};

var init = function init(prefix, enabled) {
  var enab = typeof enabled === 'boolean' ? enabled : false;
  var instance = new Log(prefix, enab);
  _logs[prefix] = instance;
  return instance;
};

exports.init = init;

var enable = function enable(enabled) {
  for (var _i = 0, _Object$keys = Object.keys(_logs); _i < _Object$keys.length; _i++) {
    var l = _Object$keys[_i];
    _logs[l].enabled = enabled;
  }
};

exports.enable = enable;

var getLog = function getLog(args) {
  // if
  var logs = [];

  for (var _i2 = 0, _Object$keys2 = Object.keys(_logs); _i2 < _Object$keys2.length; _i2++) {
    var l = _Object$keys2[_i2];
    logs = logs.concat(_logs[l].messages);
  }

  logs.sort(function (a, b) {
    return a.timestamp - b.timestamp;
  });
  return logs;
};

exports.getLog = getLog;

var enableByPrefix = function enableByPrefix(prefix, enabled) {
  if (_logs[prefix]) {
    _logs[prefix].enabled = enabled;
  }
}; // TODO: enable/disable log at runtime


exports.enableByPrefix = enableByPrefix;

var popupConsole = function popupConsole(tag, postMessage) {
  var c = global.console;
  var orig = {
    error: c.error,
    // warn: c.warn,
    info: c.info,
    debug: c.debug,
    log: c.log
  };
  var log = [];

  var inject = function inject(method, level) {
    return function () {
      // args.unshift('[popup.js]');
      var time = new Date().toUTCString();

      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      log.push([level, time].concat(args));
      postMessage.apply(_this, [{
        type: tag,
        level: level,
        time: time,
        args: JSON.stringify(args)
      }]);
      return method.apply(c, args);
    };
  };

  for (var level in orig) {
    c[level] = inject(orig[level], level);
  }
};

exports.popupConsole = popupConsole;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/trezor-connect/lib/utils/deferred.js":
/*!***********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/utils/deferred.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.create = create;
exports.createAsync = createAsync;
exports.resolveTimeoutPromise = resolveTimeoutPromise;
exports.rejectTimeoutPromise = rejectTimeoutPromise;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

function create(arg, device) {
  var localResolve = function localResolve(t) {};

  var localReject = function localReject(e) {};

  var id;
  var promise = new Promise(
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(resolve, reject) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              localResolve = resolve;
              localReject = reject;

              if (!(typeof arg === 'function')) {
                _context.next = 11;
                break;
              }

              _context.prev = 3;
              _context.next = 6;
              return arg();

            case 6:
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](3);
              reject(_context.t0);

            case 11:
              if (typeof arg === 'string') id = arg;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 8]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  return {
    id: id,
    device: device,
    resolve: localResolve,
    reject: localReject,
    promise: promise
  };
}

function createAsync(innerFn) {
  var localResolve = function localResolve(t) {};

  var localReject = function localReject(e) {};

  var promise = new Promise(function (resolve, reject) {
    localResolve = resolve;
    localReject = reject;
  });

  var inner =
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return innerFn();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function inner() {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    resolve: localResolve,
    reject: localReject,
    promise: promise,
    run: function run() {
      inner();
      return promise;
    }
  };
}

function resolveTimeoutPromise(delay, result) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(result);
    }, delay);
  });
}

function rejectTimeoutPromise(delay, error) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(error);
    }, delay);
  });
}

/***/ }),

/***/ "./node_modules/trezor-connect/lib/utils/networkUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/utils/networkUtils.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.getOrigin = exports.httpRequest = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

__webpack_require__(/*! whatwg-fetch */ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js");

var httpRequest =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(url, type) {
    var response, txt;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (type === void 0) {
              type = 'text';
            }

            _context.next = 3;
            return fetch(url, {
              credentials: 'same-origin'
            });

          case 3:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 23;
              break;
            }

            if (!(type === 'json')) {
              _context.next = 12;
              break;
            }

            _context.next = 8;
            return response.text();

          case 8:
            txt = _context.sent;
            return _context.abrupt("return", JSON.parse(txt));

          case 12:
            if (!(type === 'binary')) {
              _context.next = 18;
              break;
            }

            _context.next = 15;
            return response.arrayBuffer();

          case 15:
            return _context.abrupt("return", _context.sent);

          case 18:
            _context.next = 20;
            return response.text();

          case 20:
            return _context.abrupt("return", _context.sent);

          case 21:
            _context.next = 24;
            break;

          case 23:
            throw new Error("httpRequest error: " + url + " " + response.statusText);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function httpRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.httpRequest = httpRequest;

var getOrigin = function getOrigin(url) {
  // eslint-disable-next-line no-irregular-whitespace, no-useless-escape
  var parts = url.match(/^.+\:\/\/[^\/]+/);
  return Array.isArray(parts) && parts.length > 0 ? parts[0] : 'unknown';
};

exports.getOrigin = getOrigin;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/webusb/button.js":
/*!**********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/webusb/button.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var render = function render(className, url, origin) {
  var query = className || '.trezor-webusb-button';
  var buttons = document.querySelectorAll(query);
  var src = url + "?" + Date.now();
  buttons.forEach(function (b) {
    if (b.getElementsByTagName('iframe').length < 1) {
      var bounds = b.getBoundingClientRect();
      var btnIframe = document.createElement('iframe');
      btnIframe.frameBorder = '0';
      btnIframe.width = Math.round(bounds.width) + 'px';
      btnIframe.height = Math.round(bounds.height) + 'px';
      btnIframe.style.position = 'absolute';
      btnIframe.style.top = '0px';
      btnIframe.style.left = '0px';
      btnIframe.style.zIndex = '1'; // btnIframe.style.opacity = '0'; // this makes click impossible on cross-origin

      btnIframe.setAttribute('allow', 'usb');
      btnIframe.setAttribute('scrolling', 'no');

      btnIframe.onload = function () {
        btnIframe.contentWindow.postMessage({// style: JSON.stringify( window.getComputedStyle(b) ),
          // outer: b.outerHTML,
          // inner: b.innerHTML
        }, origin);
      };

      btnIframe.src = src; // inject iframe into button

      b.append(btnIframe);
    }
  });
};

var _default = render;
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pc05hdGl2ZUZ1bmN0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL2NvbnN0YW50cy9ibG9ja2NoYWluLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL2NvbnN0YW50cy9kZXZpY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvY29uc3RhbnRzL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3RyZXpvci1jb25uZWN0L2xpYi9jb25zdGFudHMvaWZyYW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3RyZXpvci1jb25uZWN0L2xpYi9jb25zdGFudHMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvY29uc3RhbnRzL3RyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3RyZXpvci1jb25uZWN0L2xpYi9jb25zdGFudHMvdWkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvZGF0YS9Db25uZWN0U2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvaWZyYW1lL2J1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvaWZyYW1lL2lubGluZS1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvbWVzc2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3RyZXpvci1jb25uZWN0L2xpYi9wb3B1cC9Qb3B1cE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvcG9wdXAvc2hvd1BvcHVwUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3RyZXpvci1jb25uZWN0L2xpYi90eXBlcy9ibG9ja2NoYWluRXZlbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvdXRpbHMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvdXRpbHMvZGVmZXJyZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvdXRpbHMvbmV0d29ya1V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL3dlYnVzYi9idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNSQTtB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QUE0Qjs7QUFFOUUsZ0RBQWdELG1CQUFPLENBQUMsMEdBQXlDOztBQUVqRyxtQkFBTyxDQUFDLG9GQUFjOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7Ozs7QUNwR2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtDQUFrQzs7QUFFckU7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDhCIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxudmFyIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdFwiKTtcblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdDsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsImZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHNMb29zZTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2lzTmF0aXZlRnVuY3Rpb247IiwiZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3Q7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxudmFyIGlzTmF0aXZlRnVuY3Rpb24gPSByZXF1aXJlKFwiLi9pc05hdGl2ZUZ1bmN0aW9uXCIpO1xuXG52YXIgY29uc3RydWN0ID0gcmVxdWlyZShcIi4vY29uc3RydWN0XCIpO1xuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcblxuICAgIGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcblxuICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gV3JhcHBlcigpIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBXcmFwcGVyLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7XG4gIH07XG5cbiAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF93cmFwTmF0aXZlU3VwZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnOyAvLyBibG9ja2NoYWluIGV2ZW50c1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5OT1RJRklDQVRJT04gPSBleHBvcnRzLkJMT0NLID0gZXhwb3J0cy5DT05ORUNUID0gZXhwb3J0cy5FUlJPUiA9IHZvaWQgMDtcbnZhciBFUlJPUiA9ICdibG9ja2NoYWluLWVycm9yJztcbmV4cG9ydHMuRVJST1IgPSBFUlJPUjtcbnZhciBDT05ORUNUID0gJ2Jsb2NrY2hhaW4tY29ubmVjdCc7XG5leHBvcnRzLkNPTk5FQ1QgPSBDT05ORUNUO1xudmFyIEJMT0NLID0gJ2Jsb2NrY2hhaW4tYmxvY2snO1xuZXhwb3J0cy5CTE9DSyA9IEJMT0NLO1xudmFyIE5PVElGSUNBVElPTiA9ICdibG9ja2NoYWluLW5vdGlmaWNhdGlvbic7XG5leHBvcnRzLk5PVElGSUNBVElPTiA9IE5PVElGSUNBVElPTjsiLCIndXNlIHN0cmljdCc7IC8vIGRldmljZSBsaXN0IGV2ZW50c1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5VTlJFQURBQkxFID0gZXhwb3J0cy5XQUlUX0ZPUl9TRUxFQ1RJT04gPSBleHBvcnRzLldPUkQgPSBleHBvcnRzLlBBU1NQSFJBU0VfT05fREVWSUNFID0gZXhwb3J0cy5QQVNTUEhSQVNFID0gZXhwb3J0cy5QSU4gPSBleHBvcnRzLkJVVFRPTiA9IGV4cG9ydHMuTE9BRElORyA9IGV4cG9ydHMuVVNFRF9FTFNFV0hFUkUgPSBleHBvcnRzLlJFTEVBU0VEID0gZXhwb3J0cy5BQ1FVSVJFRCA9IGV4cG9ydHMuUkVMRUFTRSA9IGV4cG9ydHMuQUNRVUlSRSA9IGV4cG9ydHMuQ0hBTkdFRCA9IGV4cG9ydHMuRElTQ09OTkVDVCA9IGV4cG9ydHMuQ09OTkVDVF9VTkFDUVVJUkVEID0gZXhwb3J0cy5DT05ORUNUID0gdm9pZCAwO1xudmFyIENPTk5FQ1QgPSAnZGV2aWNlLWNvbm5lY3QnO1xuZXhwb3J0cy5DT05ORUNUID0gQ09OTkVDVDtcbnZhciBDT05ORUNUX1VOQUNRVUlSRUQgPSAnZGV2aWNlLWNvbm5lY3RfdW5hY3F1aXJlZCc7XG5leHBvcnRzLkNPTk5FQ1RfVU5BQ1FVSVJFRCA9IENPTk5FQ1RfVU5BQ1FVSVJFRDtcbnZhciBESVNDT05ORUNUID0gJ2RldmljZS1kaXNjb25uZWN0JztcbmV4cG9ydHMuRElTQ09OTkVDVCA9IERJU0NPTk5FQ1Q7XG52YXIgQ0hBTkdFRCA9ICdkZXZpY2UtY2hhbmdlZCc7XG5leHBvcnRzLkNIQU5HRUQgPSBDSEFOR0VEO1xudmFyIEFDUVVJUkUgPSAnZGV2aWNlLWFjcXVpcmUnO1xuZXhwb3J0cy5BQ1FVSVJFID0gQUNRVUlSRTtcbnZhciBSRUxFQVNFID0gJ2RldmljZS1yZWxlYXNlJztcbmV4cG9ydHMuUkVMRUFTRSA9IFJFTEVBU0U7XG52YXIgQUNRVUlSRUQgPSAnZGV2aWNlLWFjcXVpcmVkJztcbmV4cG9ydHMuQUNRVUlSRUQgPSBBQ1FVSVJFRDtcbnZhciBSRUxFQVNFRCA9ICdkZXZpY2UtcmVsZWFzZWQnO1xuZXhwb3J0cy5SRUxFQVNFRCA9IFJFTEVBU0VEO1xudmFyIFVTRURfRUxTRVdIRVJFID0gJ2RldmljZS11c2VkX2Vsc2V3aGVyZSc7XG5leHBvcnRzLlVTRURfRUxTRVdIRVJFID0gVVNFRF9FTFNFV0hFUkU7XG52YXIgTE9BRElORyA9ICdkZXZpY2UtbG9hZGluZyc7IC8vIHRyZXpvci1saW5rIGV2ZW50cyBpbiBwcm90b2J1ZiBmb3JtYXRcblxuZXhwb3J0cy5MT0FESU5HID0gTE9BRElORztcbnZhciBCVVRUT04gPSAnYnV0dG9uJztcbmV4cG9ydHMuQlVUVE9OID0gQlVUVE9OO1xudmFyIFBJTiA9ICdwaW4nO1xuZXhwb3J0cy5QSU4gPSBQSU47XG52YXIgUEFTU1BIUkFTRSA9ICdwYXNzcGhyYXNlJztcbmV4cG9ydHMuUEFTU1BIUkFTRSA9IFBBU1NQSFJBU0U7XG52YXIgUEFTU1BIUkFTRV9PTl9ERVZJQ0UgPSAncGFzc3BocmFzZV9vbl9kZXZpY2UnO1xuZXhwb3J0cy5QQVNTUEhSQVNFX09OX0RFVklDRSA9IFBBU1NQSFJBU0VfT05fREVWSUNFO1xudmFyIFdPUkQgPSAnd29yZCc7IC8vIGN1c3RvbVxuXG5leHBvcnRzLldPUkQgPSBXT1JEO1xudmFyIFdBSVRfRk9SX1NFTEVDVElPTiA9ICdkZXZpY2Utd2FpdF9mb3Jfc2VsZWN0aW9uJzsgLy8gdGhpcyBzdHJpbmcgaGFzIGRpZmZlcmVudCBwcmVmaXggdGhhbiBvdGhlciBjb25zdGFudHMgYW5kIGl0J3MgdXNlZCBhcyBkZXZpY2UgcGF0aFxuXG5leHBvcnRzLldBSVRfRk9SX1NFTEVDVElPTiA9IFdBSVRfRk9SX1NFTEVDVElPTjtcbnZhciBVTlJFQURBQkxFID0gJ3VucmVhZGFibGUtZGV2aWNlJztcbmV4cG9ydHMuVU5SRUFEQUJMRSA9IFVOUkVBREFCTEU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuTk9fQ09JTl9JTkZPID0gZXhwb3J0cy5CQUNLRU5EX05PX1VSTCA9IGV4cG9ydHMuV0VCVVNCX0VSUk9SX01FU1NBR0UgPSBleHBvcnRzLklOVkFMSURfUElOX0VSUk9SX01FU1NBR0UgPSBleHBvcnRzLldST05HX1BSRVZJT1VTX1NFU1NJT05fRVJST1JfTUVTU0FHRSA9IGV4cG9ydHMuSU5WQUxJRF9TVEFURSA9IGV4cG9ydHMuQ0FMTF9PVkVSUklERSA9IGV4cG9ydHMuSU5JVElBTElaQVRJT05fRkFJTEVEID0gZXhwb3J0cy5ERVZJQ0VfVVNFRF9FTFNFV0hFUkUgPSBleHBvcnRzLlBFUk1JU1NJT05TX05PVF9HUkFOVEVEID0gZXhwb3J0cy5QT1BVUF9DTE9TRUQgPSBleHBvcnRzLklOVkFMSURfUEFSQU1FVEVSUyA9IGV4cG9ydHMuREVWSUNFX0NBTExfSU5fUFJPR1JFU1MgPSBleHBvcnRzLkRFVklDRV9OT1RfRk9VTkQgPSBleHBvcnRzLldST05HX1RSQU5TUE9SVF9DT05GSUcgPSBleHBvcnRzLk5PX1RSQU5TUE9SVCA9IGV4cG9ydHMuTUFOQUdFTUVOVF9OT1RfQUxMT1dFRCA9IGV4cG9ydHMuTUFOSUZFU1RfTk9UX1NFVCA9IGV4cG9ydHMuQlJPV1NFUl9OT1RfU1VQUE9SVEVEID0gZXhwb3J0cy5QT1BVUF9USU1FT1VUID0gZXhwb3J0cy5JRlJBTUVfVElNRU9VVCA9IGV4cG9ydHMuSUZSQU1FX0lOSVRJQUxJWkVEID0gZXhwb3J0cy5JRlJBTUVfQkxPQ0tFRCA9IGV4cG9ydHMuTk9fSUZSQU1FID0gZXhwb3J0cy5pbnZhbGlkUGFyYW1ldGVyID0gZXhwb3J0cy5UcmV6b3JFcnJvciA9IHZvaWQgMDtcblxudmFyIF9pbmhlcml0c0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZVwiKSk7XG5cbnZhciBfd3JhcE5hdGl2ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyXCIpKTtcblxudmFyIFRyZXpvckVycm9yID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfRXJyb3IpIHtcbiAgKDAsIF9pbmhlcml0c0xvb3NlMltcImRlZmF1bHRcIl0pKFRyZXpvckVycm9yLCBfRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIFRyZXpvckVycm9yKGNvZGUsIG1lc3NhZ2UpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9FcnJvci5jYWxsKHRoaXMsIG1lc3NhZ2UpIHx8IHRoaXM7XG4gICAgX3RoaXMuY29kZSA9IGNvZGU7XG4gICAgX3RoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmV0dXJuIFRyZXpvckVycm9yO1xufSgoMCwgX3dyYXBOYXRpdmVTdXBlcjJbXCJkZWZhdWx0XCJdKShFcnJvcikpO1xuXG5leHBvcnRzLlRyZXpvckVycm9yID0gVHJlem9yRXJyb3I7XG5cbnZhciBpbnZhbGlkUGFyYW1ldGVyID0gZnVuY3Rpb24gaW52YWxpZFBhcmFtZXRlcihtZXNzYWdlKSB7XG4gIHJldHVybiBuZXcgVHJlem9yRXJyb3IoJ0Nvbm5lY3RfSW52YWxpZFBhcmFtZXRlcicsIG1lc3NhZ2UpO1xufTsgLy8gbGV2ZWwgMTAwIGVycm9yIGR1cmluZyBpbml0aWFsaXphdGlvblxuXG5cbmV4cG9ydHMuaW52YWxpZFBhcmFtZXRlciA9IGludmFsaWRQYXJhbWV0ZXI7XG52YXIgTk9fSUZSQU1FID0gbmV3IFRyZXpvckVycm9yKDEwMCwgJ1RyZXpvckNvbm5lY3Qgbm90IHlldCBpbml0aWFsaXplZCcpO1xuZXhwb3J0cy5OT19JRlJBTUUgPSBOT19JRlJBTUU7XG52YXIgSUZSQU1FX0JMT0NLRUQgPSBuZXcgVHJlem9yRXJyb3IoJ2lmcmFtZV9ibG9ja2VkJywgJ1RyZXpvckNvbm5lY3QgaWZyYW1lIHdhcyBibG9ja2VkJyk7XG5leHBvcnRzLklGUkFNRV9CTE9DS0VEID0gSUZSQU1FX0JMT0NLRUQ7XG52YXIgSUZSQU1FX0lOSVRJQUxJWkVEID0gbmV3IFRyZXpvckVycm9yKDEwMSwgJ1RyZXpvckNvbm5lY3QgaGFzIGJlZW4gYWxyZWFkeSBpbml0aWFsaXplZCcpO1xuZXhwb3J0cy5JRlJBTUVfSU5JVElBTElaRUQgPSBJRlJBTUVfSU5JVElBTElaRUQ7XG52YXIgSUZSQU1FX1RJTUVPVVQgPSBuZXcgVHJlem9yRXJyb3IoMTAyLCAnSWZyYW1lIHRpbWVvdXQnKTtcbmV4cG9ydHMuSUZSQU1FX1RJTUVPVVQgPSBJRlJBTUVfVElNRU9VVDtcbnZhciBQT1BVUF9USU1FT1VUID0gbmV3IFRyZXpvckVycm9yKDEwMywgJ1BvcHVwIHRpbWVvdXQnKTtcbmV4cG9ydHMuUE9QVVBfVElNRU9VVCA9IFBPUFVQX1RJTUVPVVQ7XG52YXIgQlJPV1NFUl9OT1RfU1VQUE9SVEVEID0gbmV3IFRyZXpvckVycm9yKDEwNCwgJ0Jyb3dzZXIgbm90IHN1cHBvcnRlZCcpO1xuZXhwb3J0cy5CUk9XU0VSX05PVF9TVVBQT1JURUQgPSBCUk9XU0VSX05PVF9TVVBQT1JURUQ7XG52YXIgTUFOSUZFU1RfTk9UX1NFVCA9IG5ldyBUcmV6b3JFcnJvcigxMDUsICdNYW5pZmVzdCBub3Qgc2V0LiBSZWFkIG1vcmUgYXQgaHR0cHM6Ly9naXRodWIuY29tL3RyZXpvci9jb25uZWN0L2Jsb2IvZGV2ZWxvcC9kb2NzL2luZGV4Lm1kJyk7XG5leHBvcnRzLk1BTklGRVNUX05PVF9TRVQgPSBNQU5JRkVTVF9OT1RfU0VUO1xudmFyIE1BTkFHRU1FTlRfTk9UX0FMTE9XRUQgPSBuZXcgVHJlem9yRXJyb3IoMTA1LCAnTWFuYWdlbWVudCBtZXRob2Qgbm90IGFsbG93ZWQgZm9yIHRoaXMgY29uZmlndXJhdGlvbicpO1xuZXhwb3J0cy5NQU5BR0VNRU5UX05PVF9BTExPV0VEID0gTUFOQUdFTUVOVF9OT1RfQUxMT1dFRDtcbnZhciBOT19UUkFOU1BPUlQgPSBuZXcgVHJlem9yRXJyb3IoNTAwLCAnVHJhbnNwb3J0IGlzIG1pc3NpbmcnKTtcbmV4cG9ydHMuTk9fVFJBTlNQT1JUID0gTk9fVFJBTlNQT1JUO1xudmFyIFdST05HX1RSQU5TUE9SVF9DT05GSUcgPSBuZXcgVHJlem9yRXJyb3IoNTAwMiwgJ1dyb25nIGNvbmZpZyByZXNwb25zZScpOyAvLyBjb25maWdfc2lnbmVkXG5cbmV4cG9ydHMuV1JPTkdfVFJBTlNQT1JUX0NPTkZJRyA9IFdST05HX1RSQU5TUE9SVF9DT05GSUc7XG52YXIgREVWSUNFX05PVF9GT1VORCA9IG5ldyBUcmV6b3JFcnJvcig1MDEsICdEZXZpY2Ugbm90IGZvdW5kJyk7IC8vIGV4cG9ydCBjb25zdCBERVZJQ0VfQ0FMTF9JTl9QUk9HUkVTUzogVHJlem9yRXJyb3IgPSBuZXcgVHJlem9yRXJyb3IoNTAyLCBcIkRldmljZSBjYWxsIGluIHByb2dyZXNzLlwiKTtcblxuZXhwb3J0cy5ERVZJQ0VfTk9UX0ZPVU5EID0gREVWSUNFX05PVF9GT1VORDtcbnZhciBERVZJQ0VfQ0FMTF9JTl9QUk9HUkVTUyA9IG5ldyBUcmV6b3JFcnJvcig1MDMsICdEZXZpY2UgY2FsbCBpbiBwcm9ncmVzcycpO1xuZXhwb3J0cy5ERVZJQ0VfQ0FMTF9JTl9QUk9HUkVTUyA9IERFVklDRV9DQUxMX0lOX1BST0dSRVNTO1xudmFyIElOVkFMSURfUEFSQU1FVEVSUyA9IG5ldyBUcmV6b3JFcnJvcig1MDQsICdJbnZhbGlkIHBhcmFtZXRlcnMnKTtcbmV4cG9ydHMuSU5WQUxJRF9QQVJBTUVURVJTID0gSU5WQUxJRF9QQVJBTUVURVJTO1xudmFyIFBPUFVQX0NMT1NFRCA9IG5ldyBFcnJvcignUG9wdXAgY2xvc2VkJyk7XG5leHBvcnRzLlBPUFVQX0NMT1NFRCA9IFBPUFVQX0NMT1NFRDtcbnZhciBQRVJNSVNTSU9OU19OT1RfR1JBTlRFRCA9IG5ldyBUcmV6b3JFcnJvcig0MDMsICdQZXJtaXNzaW9ucyBub3QgZ3JhbnRlZCcpO1xuZXhwb3J0cy5QRVJNSVNTSU9OU19OT1RfR1JBTlRFRCA9IFBFUk1JU1NJT05TX05PVF9HUkFOVEVEO1xudmFyIERFVklDRV9VU0VEX0VMU0VXSEVSRSA9IG5ldyBUcmV6b3JFcnJvcig3MDAsICdEZXZpY2UgaXMgdXNlZCBpbiBhbm90aGVyIHdpbmRvdycpO1xuZXhwb3J0cy5ERVZJQ0VfVVNFRF9FTFNFV0hFUkUgPSBERVZJQ0VfVVNFRF9FTFNFV0hFUkU7XG52YXIgSU5JVElBTElaQVRJT05fRkFJTEVEID0gbmV3IFRyZXpvckVycm9yKCdGYWlsdXJlX0luaXRpYWxpemUnLCAnSW5pdGlhbGl6YXRpb24gZmFpbGVkJyk7XG5leHBvcnRzLklOSVRJQUxJWkFUSU9OX0ZBSUxFRCA9IElOSVRJQUxJWkFUSU9OX0ZBSUxFRDtcbnZhciBDQUxMX09WRVJSSURFID0gbmV3IFRyZXpvckVycm9yKCdGYWlsdXJlX0FjdGlvbk92ZXJyaWRlJywgJ292ZXJyaWRlJyk7XG5leHBvcnRzLkNBTExfT1ZFUlJJREUgPSBDQUxMX09WRVJSSURFO1xudmFyIElOVkFMSURfU1RBVEUgPSBuZXcgVHJlem9yRXJyb3IoJ0ZhaWx1cmVfUGFzc3BocmFzZVN0YXRlJywgJ1Bhc3NwaHJhc2UgaXMgaW5jb3JyZWN0Jyk7IC8vIGEgc2xpZ2h0IGhhY2tcbi8vIHRoaXMgZXJyb3Igc3RyaW5nIGlzIGhhcmQtY29kZWRcbi8vIGluIGJvdGggYnJpZGdlIGFuZCBleHRlbnNpb25cblxuZXhwb3J0cy5JTlZBTElEX1NUQVRFID0gSU5WQUxJRF9TVEFURTtcbnZhciBXUk9OR19QUkVWSU9VU19TRVNTSU9OX0VSUk9SX01FU1NBR0UgPSAnd3JvbmcgcHJldmlvdXMgc2Vzc2lvbic7XG5leHBvcnRzLldST05HX1BSRVZJT1VTX1NFU1NJT05fRVJST1JfTUVTU0FHRSA9IFdST05HX1BSRVZJT1VTX1NFU1NJT05fRVJST1JfTUVTU0FHRTtcbnZhciBJTlZBTElEX1BJTl9FUlJPUl9NRVNTQUdFID0gJ1BJTiBpbnZhbGlkJztcbmV4cG9ydHMuSU5WQUxJRF9QSU5fRVJST1JfTUVTU0FHRSA9IElOVkFMSURfUElOX0VSUk9SX01FU1NBR0U7XG52YXIgV0VCVVNCX0VSUk9SX01FU1NBR0UgPSAnTmV0d29ya0Vycm9yOiBVbmFibGUgdG8gY2xhaW0gaW50ZXJmYWNlLic7IC8vIEJsb2NrQm9va1xuXG5leHBvcnRzLldFQlVTQl9FUlJPUl9NRVNTQUdFID0gV0VCVVNCX0VSUk9SX01FU1NBR0U7XG52YXIgQkFDS0VORF9OT19VUkwgPSBuZXcgVHJlem9yRXJyb3IoJ0JhY2tlbmRfaW5pdCcsICdVcmwgbm90IGZvdW5kJyk7XG5leHBvcnRzLkJBQ0tFTkRfTk9fVVJMID0gQkFDS0VORF9OT19VUkw7XG52YXIgTk9fQ09JTl9JTkZPID0gaW52YWxpZFBhcmFtZXRlcignQ29pbiBub3QgZm91bmQuJyk7XG5leHBvcnRzLk5PX0NPSU5fSU5GTyA9IE5PX0NPSU5fSU5GTzsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlJFU1BPTlNFID0gZXhwb3J0cy5DQUxMID0gZXhwb3J0cy5FUlJPUiA9IGV4cG9ydHMuQk9PVFNUUkFQID0gdm9pZCAwO1xudmFyIEJPT1RTVFJBUCA9ICdpZnJhbWUtYm9vdHN0cmFwJztcbmV4cG9ydHMuQk9PVFNUUkFQID0gQk9PVFNUUkFQO1xudmFyIEVSUk9SID0gJ2lmcmFtZS1lcnJvcic7XG5leHBvcnRzLkVSUk9SID0gRVJST1I7XG52YXIgQ0FMTCA9ICdpZnJhbWUtY2FsbCc7XG5leHBvcnRzLkNBTEwgPSBDQUxMO1xudmFyIFJFU1BPTlNFID0gJ2lmcmFtZS1yZXNwb25zZSc7XG5leHBvcnRzLlJFU1BPTlNFID0gUkVTUE9OU0U7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5CTE9DS0NIQUlOX0VWRU5UID0gZXhwb3J0cy5SRVNQT05TRV9FVkVOVCA9IGV4cG9ydHMuVFJBTlNQT1JUX0VWRU5UID0gZXhwb3J0cy5ERVZJQ0VfRVZFTlQgPSBleHBvcnRzLlVJX0VWRU5UID0gZXhwb3J0cy5DT1JFX0VWRU5UID0gdm9pZCAwO1xudmFyIENPUkVfRVZFTlQgPSAnQ09SRV9FVkVOVCc7XG5leHBvcnRzLkNPUkVfRVZFTlQgPSBDT1JFX0VWRU5UO1xudmFyIFVJX0VWRU5UID0gJ1VJX0VWRU5UJztcbmV4cG9ydHMuVUlfRVZFTlQgPSBVSV9FVkVOVDtcbnZhciBERVZJQ0VfRVZFTlQgPSAnREVWSUNFX0VWRU5UJztcbmV4cG9ydHMuREVWSUNFX0VWRU5UID0gREVWSUNFX0VWRU5UO1xudmFyIFRSQU5TUE9SVF9FVkVOVCA9ICdUUkFOU1BPUlRfRVZFTlQnO1xuZXhwb3J0cy5UUkFOU1BPUlRfRVZFTlQgPSBUUkFOU1BPUlRfRVZFTlQ7XG52YXIgUkVTUE9OU0VfRVZFTlQgPSAnUkVTUE9OU0VfRVZFTlQnO1xuZXhwb3J0cy5SRVNQT05TRV9FVkVOVCA9IFJFU1BPTlNFX0VWRU5UO1xudmFyIEJMT0NLQ0hBSU5fRVZFTlQgPSAnQkxPQ0tDSEFJTl9FVkVOVCc7XG5leHBvcnRzLkJMT0NLQ0hBSU5fRVZFTlQgPSBCTE9DS0NIQUlOX0VWRU5UOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQ0xPU0VfV0lORE9XID0gZXhwb3J0cy5DQU5DRUxfUE9QVVBfUkVRVUVTVCA9IGV4cG9ydHMuQ0xPU0VEID0gZXhwb3J0cy5DTE9TRSA9IGV4cG9ydHMuSEFORFNIQUtFID0gZXhwb3J0cy5PUEVOX1RJTUVPVVQgPSBleHBvcnRzLk9QRU5FRCA9IGV4cG9ydHMuTE9HID0gZXhwb3J0cy5FWFRFTlNJT05fVVNCX1BFUk1JU1NJT05TID0gZXhwb3J0cy5FWFRFTlNJT05fUkVRVUVTVCA9IGV4cG9ydHMuQk9PVFNUUkFQID0gZXhwb3J0cy5JTklUID0gdm9pZCAwO1xudmFyIElOSVQgPSAncG9wdXAtaW5pdCc7XG5leHBvcnRzLklOSVQgPSBJTklUO1xudmFyIEJPT1RTVFJBUCA9ICdwb3B1cC1ib290c3RyYXAnO1xuZXhwb3J0cy5CT09UU1RSQVAgPSBCT09UU1RSQVA7XG52YXIgRVhURU5TSU9OX1JFUVVFU1QgPSAncG9wdXAtZXh0ZW5zaW9uX3JlcXVlc3QnO1xuZXhwb3J0cy5FWFRFTlNJT05fUkVRVUVTVCA9IEVYVEVOU0lPTl9SRVFVRVNUO1xudmFyIEVYVEVOU0lPTl9VU0JfUEVSTUlTU0lPTlMgPSAnb3Blbi11c2ItcGVybWlzc2lvbnMnO1xuZXhwb3J0cy5FWFRFTlNJT05fVVNCX1BFUk1JU1NJT05TID0gRVhURU5TSU9OX1VTQl9QRVJNSVNTSU9OUztcbnZhciBMT0cgPSAncG9wdXAtbG9nJztcbmV4cG9ydHMuTE9HID0gTE9HO1xudmFyIE9QRU5FRCA9ICdwb3B1cC1vcGVuZWQnO1xuZXhwb3J0cy5PUEVORUQgPSBPUEVORUQ7XG52YXIgT1BFTl9USU1FT1VUID0gJ3BvcHVwLW9wZW5fdGltZW91dCc7XG5leHBvcnRzLk9QRU5fVElNRU9VVCA9IE9QRU5fVElNRU9VVDtcbnZhciBIQU5EU0hBS0UgPSAncG9wdXAtaGFuZHNoYWtlJztcbmV4cG9ydHMuSEFORFNIQUtFID0gSEFORFNIQUtFO1xudmFyIENMT1NFID0gJ3BvcHVwLWNsb3NlJztcbmV4cG9ydHMuQ0xPU0UgPSBDTE9TRTtcbnZhciBDTE9TRUQgPSAncG9wdXAtY2xvc2VkJztcbmV4cG9ydHMuQ0xPU0VEID0gQ0xPU0VEO1xudmFyIENBTkNFTF9QT1BVUF9SRVFVRVNUID0gJ3VpLWNhbmNlbC1wb3B1cC1yZXF1ZXN0JztcbmV4cG9ydHMuQ0FOQ0VMX1BPUFVQX1JFUVVFU1QgPSBDQU5DRUxfUE9QVVBfUkVRVUVTVDtcbnZhciBDTE9TRV9XSU5ET1cgPSAnd2luZG93LmNsb3NlJztcbmV4cG9ydHMuQ0xPU0VfV0lORE9XID0gQ0xPU0VfV0lORE9XOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuU1RBUlRfUEVORElORyA9IGV4cG9ydHMuUkVDT05ORUNUID0gZXhwb3J0cy5SRVFVRVNUID0gZXhwb3J0cy5TVFJFQU0gPSBleHBvcnRzLlVQREFURSA9IGV4cG9ydHMuRVJST1IgPSBleHBvcnRzLlNUQVJUID0gdm9pZCAwO1xudmFyIFNUQVJUID0gJ3RyYW5zcG9ydC1zdGFydCc7XG5leHBvcnRzLlNUQVJUID0gU1RBUlQ7XG52YXIgRVJST1IgPSAndHJhbnNwb3J0LWVycm9yJztcbmV4cG9ydHMuRVJST1IgPSBFUlJPUjtcbnZhciBVUERBVEUgPSAndHJhbnNwb3J0LXVwZGF0ZSc7XG5leHBvcnRzLlVQREFURSA9IFVQREFURTtcbnZhciBTVFJFQU0gPSAndHJhbnNwb3J0LXN0cmVhbSc7XG5leHBvcnRzLlNUUkVBTSA9IFNUUkVBTTtcbnZhciBSRVFVRVNUID0gJ3RyYW5zcG9ydC1yZXF1ZXN0X2RldmljZSc7XG5leHBvcnRzLlJFUVVFU1QgPSBSRVFVRVNUO1xudmFyIFJFQ09OTkVDVCA9ICd0cmFuc3BvcnQtcmVjb25uZWN0JztcbmV4cG9ydHMuUkVDT05ORUNUID0gUkVDT05ORUNUO1xudmFyIFNUQVJUX1BFTkRJTkcgPSAndHJhbnNwb3J0LXN0YXJ0X3BlbmRpbmcnO1xuZXhwb3J0cy5TVEFSVF9QRU5ESU5HID0gU1RBUlRfUEVORElORzsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkFERFJFU1NfVkFMSURBVElPTiA9IGV4cG9ydHMuQlVORExFX1BST0dSRVNTID0gZXhwb3J0cy5MT0dJTl9DSEFMTEVOR0VfUkVTUE9OU0UgPSBleHBvcnRzLkxPR0lOX0NIQUxMRU5HRV9SRVFVRVNUID0gZXhwb3J0cy5DVVNUT01fTUVTU0FHRV9SRVNQT05TRSA9IGV4cG9ydHMuQ1VTVE9NX01FU1NBR0VfUkVRVUVTVCA9IGV4cG9ydHMuQ0hBTkdFX1NFVFRJTkdTID0gZXhwb3J0cy5SRUNFSVZFX1dPUkQgPSBleHBvcnRzLlJFQ0VJVkVfRkVFID0gZXhwb3J0cy5SRUNFSVZFX0FDQ09VTlQgPSBleHBvcnRzLkNIQU5HRV9BQ0NPVU5UID0gZXhwb3J0cy5SRUNFSVZFX0RFVklDRSA9IGV4cG9ydHMuUkVDRUlWRV9QQVNTUEhSQVNFID0gZXhwb3J0cy5SRUNFSVZFX1BJTiA9IGV4cG9ydHMuUkVDRUlWRV9DT05GSVJNQVRJT04gPSBleHBvcnRzLlJFQ0VJVkVfUEVSTUlTU0lPTiA9IGV4cG9ydHMuUkVRVUVTVF9XT1JEID0gZXhwb3J0cy5SRVFVRVNUX0JVVFRPTiA9IGV4cG9ydHMuSU5TVUZGSUNJRU5UX0ZVTkRTID0gZXhwb3J0cy5VUERBVEVfQ1VTVE9NX0ZFRSA9IGV4cG9ydHMuU0VMRUNUX0ZFRSA9IGV4cG9ydHMuU0VMRUNUX0FDQ09VTlQgPSBleHBvcnRzLlNFTEVDVF9ERVZJQ0UgPSBleHBvcnRzLlNFVF9PUEVSQVRJT04gPSBleHBvcnRzLkxPQURJTkcgPSBleHBvcnRzLkNPTk5FQ1QgPSBleHBvcnRzLklOVkFMSURfUEFTU1BIUkFTRV9BQ1RJT04gPSBleHBvcnRzLklOVkFMSURfUEFTU1BIUkFTRSA9IGV4cG9ydHMuUkVRVUVTVF9QQVNTUEhSQVNFX09OX0RFVklDRSA9IGV4cG9ydHMuUkVRVUVTVF9QQVNTUEhSQVNFID0gZXhwb3J0cy5JTlZBTElEX1BJTiA9IGV4cG9ydHMuUkVRVUVTVF9QSU4gPSBleHBvcnRzLlJFUVVFU1RfQ09ORklSTUFUSU9OID0gZXhwb3J0cy5SRVFVRVNUX1BFUk1JU1NJT04gPSBleHBvcnRzLkNMT1NFX1VJX1dJTkRPVyA9IGV4cG9ydHMuUkVRVUVTVF9VSV9XSU5ET1cgPSBleHBvcnRzLlJFQ0VJVkVfQlJPV1NFUiA9IGV4cG9ydHMuQlJPV1NFUl9PVVREQVRFRCA9IGV4cG9ydHMuQlJPV1NFUl9OT1RfU1VQUE9SVEVEID0gZXhwb3J0cy5ERVZJQ0VfTkVFRFNfQkFDS1VQID0gZXhwb3J0cy5GSVJNV0FSRV9OT1RfSU5TVEFMTEVEID0gZXhwb3J0cy5GSVJNV0FSRV9OT1RfQ09NUEFUSUJMRSA9IGV4cG9ydHMuRklSTVdBUkVfTk9UX1NVUFBPUlRFRCA9IGV4cG9ydHMuRklSTVdBUkVfT1VUREFURUQgPSBleHBvcnRzLkZJUk1XQVJFX09MRCA9IGV4cG9ydHMuU0VFRExFU1MgPSBleHBvcnRzLklOSVRJQUxJWkUgPSBleHBvcnRzLlJFUVVJUkVfTU9ERSA9IGV4cG9ydHMuTk9UX0lOX0JPT1RMT0FERVIgPSBleHBvcnRzLkJPT1RMT0FERVIgPSBleHBvcnRzLlRSQU5TUE9SVCA9IGV4cG9ydHMuSUZSQU1FX0hBTkRTSEFLRSA9IHZvaWQgMDtcbnZhciBJRlJBTUVfSEFORFNIQUtFID0gJ2lmcmFtZS1oYW5kc2hha2UnO1xuZXhwb3J0cy5JRlJBTUVfSEFORFNIQUtFID0gSUZSQU1FX0hBTkRTSEFLRTtcbnZhciBUUkFOU1BPUlQgPSAndWktbm9fdHJhbnNwb3J0JztcbmV4cG9ydHMuVFJBTlNQT1JUID0gVFJBTlNQT1JUO1xudmFyIEJPT1RMT0FERVIgPSAndWktZGV2aWNlX2Jvb3Rsb2FkZXJfbW9kZSc7XG5leHBvcnRzLkJPT1RMT0FERVIgPSBCT09UTE9BREVSO1xudmFyIE5PVF9JTl9CT09UTE9BREVSID0gJ3VpLWRldmljZV9ub3RfaW5fYm9vdGxvYWRlcl9tb2RlJztcbmV4cG9ydHMuTk9UX0lOX0JPT1RMT0FERVIgPSBOT1RfSU5fQk9PVExPQURFUjtcbnZhciBSRVFVSVJFX01PREUgPSAndWktZGV2aWNlX3JlcXVpcmVfbW9kZSc7XG5leHBvcnRzLlJFUVVJUkVfTU9ERSA9IFJFUVVJUkVfTU9ERTtcbnZhciBJTklUSUFMSVpFID0gJ3VpLWRldmljZV9ub3RfaW5pdGlhbGl6ZWQnO1xuZXhwb3J0cy5JTklUSUFMSVpFID0gSU5JVElBTElaRTtcbnZhciBTRUVETEVTUyA9ICd1aS1kZXZpY2Vfc2VlZGxlc3MnO1xuZXhwb3J0cy5TRUVETEVTUyA9IFNFRURMRVNTO1xudmFyIEZJUk1XQVJFX09MRCA9ICd1aS1kZXZpY2VfZmlybXdhcmVfb2xkJztcbmV4cG9ydHMuRklSTVdBUkVfT0xEID0gRklSTVdBUkVfT0xEO1xudmFyIEZJUk1XQVJFX09VVERBVEVEID0gJ3VpLWRldmljZV9maXJtd2FyZV9vdXRkYXRlZCc7XG5leHBvcnRzLkZJUk1XQVJFX09VVERBVEVEID0gRklSTVdBUkVfT1VUREFURUQ7XG52YXIgRklSTVdBUkVfTk9UX1NVUFBPUlRFRCA9ICd1aS1kZXZpY2VfZmlybXdhcmVfdW5zdXBwb3J0ZWQnO1xuZXhwb3J0cy5GSVJNV0FSRV9OT1RfU1VQUE9SVEVEID0gRklSTVdBUkVfTk9UX1NVUFBPUlRFRDtcbnZhciBGSVJNV0FSRV9OT1RfQ09NUEFUSUJMRSA9ICd1aS1kZXZpY2VfZmlybXdhcmVfbm90X2NvbXBhdGlibGUnO1xuZXhwb3J0cy5GSVJNV0FSRV9OT1RfQ09NUEFUSUJMRSA9IEZJUk1XQVJFX05PVF9DT01QQVRJQkxFO1xudmFyIEZJUk1XQVJFX05PVF9JTlNUQUxMRUQgPSAndWktZGV2aWNlX2Zpcm13YXJlX25vdF9pbnN0YWxsZWQnO1xuZXhwb3J0cy5GSVJNV0FSRV9OT1RfSU5TVEFMTEVEID0gRklSTVdBUkVfTk9UX0lOU1RBTExFRDtcbnZhciBERVZJQ0VfTkVFRFNfQkFDS1VQID0gJ3VpLWRldmljZV9uZWVkc19iYWNrdXAnO1xuZXhwb3J0cy5ERVZJQ0VfTkVFRFNfQkFDS1VQID0gREVWSUNFX05FRURTX0JBQ0tVUDtcbnZhciBCUk9XU0VSX05PVF9TVVBQT1JURUQgPSAndWktYnJvd3Nlcl9ub3Rfc3VwcG9ydGVkJztcbmV4cG9ydHMuQlJPV1NFUl9OT1RfU1VQUE9SVEVEID0gQlJPV1NFUl9OT1RfU1VQUE9SVEVEO1xudmFyIEJST1dTRVJfT1VUREFURUQgPSAndWktYnJvd3Nlcl9vdXRkYXRlZCc7XG5leHBvcnRzLkJST1dTRVJfT1VUREFURUQgPSBCUk9XU0VSX09VVERBVEVEO1xudmFyIFJFQ0VJVkVfQlJPV1NFUiA9ICd1aS1yZWNlaXZlX2Jyb3dzZXInO1xuZXhwb3J0cy5SRUNFSVZFX0JST1dTRVIgPSBSRUNFSVZFX0JST1dTRVI7XG52YXIgUkVRVUVTVF9VSV9XSU5ET1cgPSAndWktcmVxdWVzdF93aW5kb3cnO1xuZXhwb3J0cy5SRVFVRVNUX1VJX1dJTkRPVyA9IFJFUVVFU1RfVUlfV0lORE9XO1xudmFyIENMT1NFX1VJX1dJTkRPVyA9ICd1aS1jbG9zZV93aW5kb3cnO1xuZXhwb3J0cy5DTE9TRV9VSV9XSU5ET1cgPSBDTE9TRV9VSV9XSU5ET1c7XG52YXIgUkVRVUVTVF9QRVJNSVNTSU9OID0gJ3VpLXJlcXVlc3RfcGVybWlzc2lvbic7XG5leHBvcnRzLlJFUVVFU1RfUEVSTUlTU0lPTiA9IFJFUVVFU1RfUEVSTUlTU0lPTjtcbnZhciBSRVFVRVNUX0NPTkZJUk1BVElPTiA9ICd1aS1yZXF1ZXN0X2NvbmZpcm1hdGlvbic7XG5leHBvcnRzLlJFUVVFU1RfQ09ORklSTUFUSU9OID0gUkVRVUVTVF9DT05GSVJNQVRJT047XG52YXIgUkVRVUVTVF9QSU4gPSAndWktcmVxdWVzdF9waW4nO1xuZXhwb3J0cy5SRVFVRVNUX1BJTiA9IFJFUVVFU1RfUElOO1xudmFyIElOVkFMSURfUElOID0gJ3VpLWludmFsaWRfcGluJztcbmV4cG9ydHMuSU5WQUxJRF9QSU4gPSBJTlZBTElEX1BJTjtcbnZhciBSRVFVRVNUX1BBU1NQSFJBU0UgPSAndWktcmVxdWVzdF9wYXNzcGhyYXNlJztcbmV4cG9ydHMuUkVRVUVTVF9QQVNTUEhSQVNFID0gUkVRVUVTVF9QQVNTUEhSQVNFO1xudmFyIFJFUVVFU1RfUEFTU1BIUkFTRV9PTl9ERVZJQ0UgPSAndWktcmVxdWVzdF9wYXNzcGhyYXNlX29uX2RldmljZSc7XG5leHBvcnRzLlJFUVVFU1RfUEFTU1BIUkFTRV9PTl9ERVZJQ0UgPSBSRVFVRVNUX1BBU1NQSFJBU0VfT05fREVWSUNFO1xudmFyIElOVkFMSURfUEFTU1BIUkFTRSA9ICd1aS1pbnZhbGlkX3Bhc3NwaHJhc2UnO1xuZXhwb3J0cy5JTlZBTElEX1BBU1NQSFJBU0UgPSBJTlZBTElEX1BBU1NQSFJBU0U7XG52YXIgSU5WQUxJRF9QQVNTUEhSQVNFX0FDVElPTiA9ICd1aS1pbnZhbGlkX3Bhc3NwaHJhc2VfYWN0aW9uJztcbmV4cG9ydHMuSU5WQUxJRF9QQVNTUEhSQVNFX0FDVElPTiA9IElOVkFMSURfUEFTU1BIUkFTRV9BQ1RJT047XG52YXIgQ09OTkVDVCA9ICd1aS1jb25uZWN0JztcbmV4cG9ydHMuQ09OTkVDVCA9IENPTk5FQ1Q7XG52YXIgTE9BRElORyA9ICd1aS1sb2FkaW5nJztcbmV4cG9ydHMuTE9BRElORyA9IExPQURJTkc7XG52YXIgU0VUX09QRVJBVElPTiA9ICd1aS1zZXRfb3BlcmF0aW9uJztcbmV4cG9ydHMuU0VUX09QRVJBVElPTiA9IFNFVF9PUEVSQVRJT047XG52YXIgU0VMRUNUX0RFVklDRSA9ICd1aS1zZWxlY3RfZGV2aWNlJztcbmV4cG9ydHMuU0VMRUNUX0RFVklDRSA9IFNFTEVDVF9ERVZJQ0U7XG52YXIgU0VMRUNUX0FDQ09VTlQgPSAndWktc2VsZWN0X2FjY291bnQnO1xuZXhwb3J0cy5TRUxFQ1RfQUNDT1VOVCA9IFNFTEVDVF9BQ0NPVU5UO1xudmFyIFNFTEVDVF9GRUUgPSAndWktc2VsZWN0X2ZlZSc7XG5leHBvcnRzLlNFTEVDVF9GRUUgPSBTRUxFQ1RfRkVFO1xudmFyIFVQREFURV9DVVNUT01fRkVFID0gJ3VpLXVwZGF0ZV9jdXN0b21fZmVlJztcbmV4cG9ydHMuVVBEQVRFX0NVU1RPTV9GRUUgPSBVUERBVEVfQ1VTVE9NX0ZFRTtcbnZhciBJTlNVRkZJQ0lFTlRfRlVORFMgPSAndWktaW5zdWZmaWNpZW50X2Z1bmRzJztcbmV4cG9ydHMuSU5TVUZGSUNJRU5UX0ZVTkRTID0gSU5TVUZGSUNJRU5UX0ZVTkRTO1xudmFyIFJFUVVFU1RfQlVUVE9OID0gJ3VpLWJ1dHRvbic7XG5leHBvcnRzLlJFUVVFU1RfQlVUVE9OID0gUkVRVUVTVF9CVVRUT047XG52YXIgUkVRVUVTVF9XT1JEID0gJ3VpLXJlcXVlc3Rfd29yZCc7XG5leHBvcnRzLlJFUVVFU1RfV09SRCA9IFJFUVVFU1RfV09SRDtcbnZhciBSRUNFSVZFX1BFUk1JU1NJT04gPSAndWktcmVjZWl2ZV9wZXJtaXNzaW9uJztcbmV4cG9ydHMuUkVDRUlWRV9QRVJNSVNTSU9OID0gUkVDRUlWRV9QRVJNSVNTSU9OO1xudmFyIFJFQ0VJVkVfQ09ORklSTUFUSU9OID0gJ3VpLXJlY2VpdmVfY29uZmlybWF0aW9uJztcbmV4cG9ydHMuUkVDRUlWRV9DT05GSVJNQVRJT04gPSBSRUNFSVZFX0NPTkZJUk1BVElPTjtcbnZhciBSRUNFSVZFX1BJTiA9ICd1aS1yZWNlaXZlX3Bpbic7XG5leHBvcnRzLlJFQ0VJVkVfUElOID0gUkVDRUlWRV9QSU47XG52YXIgUkVDRUlWRV9QQVNTUEhSQVNFID0gJ3VpLXJlY2VpdmVfcGFzc3BocmFzZSc7XG5leHBvcnRzLlJFQ0VJVkVfUEFTU1BIUkFTRSA9IFJFQ0VJVkVfUEFTU1BIUkFTRTtcbnZhciBSRUNFSVZFX0RFVklDRSA9ICd1aS1yZWNlaXZlX2RldmljZSc7XG5leHBvcnRzLlJFQ0VJVkVfREVWSUNFID0gUkVDRUlWRV9ERVZJQ0U7XG52YXIgQ0hBTkdFX0FDQ09VTlQgPSAndWktY2hhbmdlX2FjY291bnQnO1xuZXhwb3J0cy5DSEFOR0VfQUNDT1VOVCA9IENIQU5HRV9BQ0NPVU5UO1xudmFyIFJFQ0VJVkVfQUNDT1VOVCA9ICd1aS1yZWNlaXZlX2FjY291bnQnO1xuZXhwb3J0cy5SRUNFSVZFX0FDQ09VTlQgPSBSRUNFSVZFX0FDQ09VTlQ7XG52YXIgUkVDRUlWRV9GRUUgPSAndWktcmVjZWl2ZV9mZWUnO1xuZXhwb3J0cy5SRUNFSVZFX0ZFRSA9IFJFQ0VJVkVfRkVFO1xudmFyIFJFQ0VJVkVfV09SRCA9ICd1aS1yZWNlaXZlX3dvcmQnO1xuZXhwb3J0cy5SRUNFSVZFX1dPUkQgPSBSRUNFSVZFX1dPUkQ7XG52YXIgQ0hBTkdFX1NFVFRJTkdTID0gJ3VpLWNoYW5nZV9zZXR0aW5ncyc7XG5leHBvcnRzLkNIQU5HRV9TRVRUSU5HUyA9IENIQU5HRV9TRVRUSU5HUztcbnZhciBDVVNUT01fTUVTU0FHRV9SRVFVRVNUID0gJ3VpLWN1c3RvbV9yZXF1ZXN0JztcbmV4cG9ydHMuQ1VTVE9NX01FU1NBR0VfUkVRVUVTVCA9IENVU1RPTV9NRVNTQUdFX1JFUVVFU1Q7XG52YXIgQ1VTVE9NX01FU1NBR0VfUkVTUE9OU0UgPSAndWktY3VzdG9tX3Jlc3BvbnNlJztcbmV4cG9ydHMuQ1VTVE9NX01FU1NBR0VfUkVTUE9OU0UgPSBDVVNUT01fTUVTU0FHRV9SRVNQT05TRTtcbnZhciBMT0dJTl9DSEFMTEVOR0VfUkVRVUVTVCA9ICd1aS1sb2dpbl9jaGFsbGVuZ2VfcmVxdWVzdCc7XG5leHBvcnRzLkxPR0lOX0NIQUxMRU5HRV9SRVFVRVNUID0gTE9HSU5fQ0hBTExFTkdFX1JFUVVFU1Q7XG52YXIgTE9HSU5fQ0hBTExFTkdFX1JFU1BPTlNFID0gJ3VpLWxvZ2luX2NoYWxsZW5nZV9yZXNwb25zZSc7XG5leHBvcnRzLkxPR0lOX0NIQUxMRU5HRV9SRVNQT05TRSA9IExPR0lOX0NIQUxMRU5HRV9SRVNQT05TRTtcbnZhciBCVU5ETEVfUFJPR1JFU1MgPSAndWktYnVuZGxlX3Byb2dyZXNzJztcbmV4cG9ydHMuQlVORExFX1BST0dSRVNTID0gQlVORExFX1BST0dSRVNTO1xudmFyIEFERFJFU1NfVkFMSURBVElPTiA9ICd1aS1hZGRyZXNzX3ZhbGlkYXRpb24nO1xuZXhwb3J0cy5BRERSRVNTX1ZBTElEQVRJT04gPSBBRERSRVNTX1ZBTElEQVRJT047IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5wYXJzZSA9IGV4cG9ydHMuREVGQVVMVF9QUklPUklUWSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7ICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbi8qXG4gKiBJbml0aWFsIHNldHRpbmdzIGZvciBjb25uZWN0LlxuICogSXQgY291bGQgYmUgY2hhbmdlZCBieSBwYXNzaW5nIHZhbHVlcyBpbnRvIFRyZXpvckNvbm5lY3QuaW5pdCguLi4pIG1ldGhvZFxuICovXG52YXIgVkVSU0lPTiA9ICc3LjAuNSc7XG52YXIgdmVyc2lvbk4gPSBWRVJTSU9OLnNwbGl0KCcuJykubWFwKGZ1bmN0aW9uIChzKSB7XG4gIHJldHVybiBwYXJzZUludChzKTtcbn0pO1xudmFyIERJUkVDVE9SWSA9IFwiXCIgKyB2ZXJzaW9uTlswXSArICh2ZXJzaW9uTlsxXSA+IDAgPyBcIi5cIiArIHZlcnNpb25OWzFdIDogJycpICsgXCIvXCI7XG52YXIgREVGQVVMVF9ET01BSU4gPSBcImh0dHBzOi8vY29ubmVjdC50cmV6b3IuaW8vXCIgKyBESVJFQ1RPUlk7XG52YXIgREVGQVVMVF9QUklPUklUWSA9IDI7XG5leHBvcnRzLkRFRkFVTFRfUFJJT1JJVFkgPSBERUZBVUxUX1BSSU9SSVRZO1xudmFyIGluaXRpYWxTZXR0aW5ncyA9IHtcbiAgY29uZmlnU3JjOiAnZGF0YS9jb25maWcuanNvbicsXG4gIC8vIGNvbnN0YW50XG4gIHZlcnNpb246IFZFUlNJT04sXG4gIC8vIGNvbnN0YW50XG4gIGRlYnVnOiBmYWxzZSxcbiAgb3JpZ2luOiBudWxsLFxuICBwcmlvcml0eTogREVGQVVMVF9QUklPUklUWSxcbiAgdHJ1c3RlZEhvc3Q6IGZhbHNlLFxuICBjb25uZWN0U3JjOiBERUZBVUxUX0RPTUFJTixcbiAgaWZyYW1lU3JjOiBERUZBVUxUX0RPTUFJTiArIFwiaWZyYW1lLmh0bWxcIixcbiAgcG9wdXA6IHRydWUsXG4gIHBvcHVwU3JjOiBERUZBVUxUX0RPTUFJTiArIFwicG9wdXAuaHRtbFwiLFxuICB3ZWJ1c2JTcmM6IERFRkFVTFRfRE9NQUlOICsgXCJ3ZWJ1c2IuaHRtbFwiLFxuICB0cmFuc3BvcnRSZWNvbm5lY3Q6IGZhbHNlLFxuICB3ZWJ1c2I6IHRydWUsXG4gIHBlbmRpbmdUcmFuc3BvcnRFdmVudDogdHJ1ZSxcbiAgc3VwcG9ydGVkQnJvd3NlcjogdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgPyAhL1RyaWRlbnR8TVNJRS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA6IHRydWUsXG4gIGV4dGVuc2lvbjogbnVsbCxcbiAgbWFuaWZlc3Q6IG51bGxcbn07XG52YXIgY3VycmVudFNldHRpbmdzID0gaW5pdGlhbFNldHRpbmdzO1xuXG52YXIgcGFyc2VNYW5pZmVzdCA9IGZ1bmN0aW9uIHBhcnNlTWFuaWZlc3QobWFuaWZlc3QpIHtcbiAgaWYgKHR5cGVvZiBtYW5pZmVzdC5lbWFpbCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbWFuaWZlc3QuYXBwVXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlbWFpbDogbWFuaWZlc3QuZW1haWwsXG4gICAgYXBwVXJsOiBtYW5pZmVzdC5hcHBVcmxcbiAgfTtcbn07XG5cbnZhciBwYXJzZSA9IGZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XG4gIGlmICghaW5wdXQpIHJldHVybiBjdXJyZW50U2V0dGluZ3M7XG5cbiAgdmFyIHNldHRpbmdzID0gX29iamVjdFNwcmVhZCh7fSwgY3VycmVudFNldHRpbmdzKTtcblxuICBpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoJ2RlYnVnJykpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHsvLyBlbmFibGUgbG9nIHdpdGggcHJlZml4XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpbnB1dC5kZWJ1ZyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBzZXR0aW5ncy5kZWJ1ZyA9IGlucHV0LmRlYnVnO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0LmRlYnVnID09PSAnc3RyaW5nJykge1xuICAgICAgc2V0dGluZ3MuZGVidWcgPSBpbnB1dC5kZWJ1ZyA9PT0gJ3RydWUnO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5wdXQuY29ubmVjdFNyYyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBUT0RPOiBlc2NhcGUgc3RyaW5nLCB2YWxpZGF0ZSB1cmxcbiAgICBzZXR0aW5ncy5jb25uZWN0U3JjID0gaW5wdXQuY29ubmVjdFNyYztcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Ll9fVFJFWk9SX0NPTk5FQ1RfU1JDID09PSAnc3RyaW5nJykge1xuICAgIHNldHRpbmdzLmNvbm5lY3RTcmMgPSB3aW5kb3cuX19UUkVaT1JfQ09OTkVDVF9TUkM7XG4gIH1cblxuICBzZXR0aW5ncy5pZnJhbWVTcmMgPSBzZXR0aW5ncy5jb25uZWN0U3JjICsgXCJpZnJhbWUuaHRtbFwiO1xuICBzZXR0aW5ncy5wb3B1cFNyYyA9IHNldHRpbmdzLmNvbm5lY3RTcmMgKyBcInBvcHVwLmh0bWxcIjtcbiAgc2V0dGluZ3Mud2VidXNiU3JjID0gc2V0dGluZ3MuY29ubmVjdFNyYyArIFwid2VidXNiLmh0bWxcIjtcblxuICBpZiAodHlwZW9mIGlucHV0LnRyYW5zcG9ydFJlY29ubmVjdCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgc2V0dGluZ3MudHJhbnNwb3J0UmVjb25uZWN0ID0gaW5wdXQudHJhbnNwb3J0UmVjb25uZWN0O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpbnB1dC53ZWJ1c2IgPT09ICdib29sZWFuJykge1xuICAgIHNldHRpbmdzLndlYnVzYiA9IGlucHV0LndlYnVzYjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5wdXQucG9wdXAgPT09ICdib29sZWFuJykge1xuICAgIHNldHRpbmdzLnBvcHVwID0gaW5wdXQucG9wdXA7XG4gIH1cblxuICBpZiAodHlwZW9mIGlucHV0LnBlbmRpbmdUcmFuc3BvcnRFdmVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgc2V0dGluZ3MucGVuZGluZ1RyYW5zcG9ydEV2ZW50ID0gaW5wdXQucGVuZGluZ1RyYW5zcG9ydEV2ZW50O1xuICB9IC8vIGxvY2FsIGZpbGVzXG5cblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnZmlsZTonKSB7XG4gICAgc2V0dGluZ3Mub3JpZ2luID0gXCJmaWxlOi8vXCIgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgc2V0dGluZ3Mud2VidXNiID0gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIGlucHV0LmV4dGVuc2lvbiA9PT0gJ3N0cmluZycpIHtcbiAgICBzZXR0aW5ncy5leHRlbnNpb24gPSBpbnB1dC5leHRlbnNpb247XG4gIH1cblxuICBpZiAodHlwZW9mIGlucHV0Lm1hbmlmZXN0ID09PSAnb2JqZWN0Jykge1xuICAgIHNldHRpbmdzLm1hbmlmZXN0ID0gcGFyc2VNYW5pZmVzdChpbnB1dC5tYW5pZmVzdCk7XG4gIH1cblxuICBjdXJyZW50U2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgcmV0dXJuIGN1cnJlbnRTZXR0aW5ncztcbn07XG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPSBleHBvcnRzLmRpc3Bvc2UgPSBleHBvcnRzLnBvc3RNZXNzYWdlID0gZXhwb3J0cy5pbml0ID0gZXhwb3J0cy5tZXNzYWdlUHJvbWlzZXMgPSBleHBvcnRzLmVycm9yID0gZXhwb3J0cy50aW1lb3V0ID0gZXhwb3J0cy5pbml0UHJvbWlzZSA9IGV4cG9ydHMub3JpZ2luID0gZXhwb3J0cy5pbnN0YW5jZSA9IHZvaWQgMDtcblxudmFyIF9yZWdlbmVyYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpKTtcblxudmFyIF9hc3luY1RvR2VuZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKSk7XG5cbnZhciBfZGVmZXJyZWQgPSByZXF1aXJlKFwiLi4vdXRpbHMvZGVmZXJyZWRcIik7XG5cbnZhciBfdWkgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL3VpXCIpO1xuXG52YXIgX2Vycm9ycyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvZXJyb3JzXCIpO1xuXG52YXIgX2lubGluZVN0eWxlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaW5saW5lLXN0eWxlc1wiKSk7XG5cbnZhciBpbnN0YW5jZTtcbmV4cG9ydHMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbnZhciBvcmlnaW47XG5leHBvcnRzLm9yaWdpbiA9IG9yaWdpbjtcbnZhciBpbml0UHJvbWlzZSA9ICgwLCBfZGVmZXJyZWQuY3JlYXRlKSgpO1xuZXhwb3J0cy5pbml0UHJvbWlzZSA9IGluaXRQcm9taXNlO1xudmFyIHRpbWVvdXQgPSAwO1xuZXhwb3J0cy50aW1lb3V0ID0gdGltZW91dDtcbnZhciBlcnJvcjtcbmV4cG9ydHMuZXJyb3IgPSBlcnJvcjtcbnZhciBfbWVzc2FnZUlEID0gMDsgLy8gZXZlcnkgcG9zdE1lc3NhZ2UgdG8gaWZyYW1lIGhhcyBpdHMgb3duIHByb21pc2UgdG8gcmVzb2x2ZVxuXG52YXIgbWVzc2FnZVByb21pc2VzID0ge307XG5leHBvcnRzLm1lc3NhZ2VQcm9taXNlcyA9IG1lc3NhZ2VQcm9taXNlcztcblxudmFyIGluaXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShzZXR0aW5ncykge1xuICAgIHZhciBleGlzdGVkRnJhbWUsIG1hbmlmZXN0U3RyaW5nLCBtYW5pZmVzdCwgc3JjLCBpZnJhbWVTcmNIb3N0LCBvbkxvYWQ7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGV4aXN0ZWRGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmV6b3Jjb25uZWN0Jyk7XG5cbiAgICAgICAgICAgIGlmIChleGlzdGVkRnJhbWUpIHtcbiAgICAgICAgICAgICAgZXhwb3J0cy5pbnN0YW5jZSA9IGluc3RhbmNlID0gZXhpc3RlZEZyYW1lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXhwb3J0cy5pbnN0YW5jZSA9IGluc3RhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgICAgICAgIGluc3RhbmNlLmZyYW1lQm9yZGVyID0gJzAnO1xuICAgICAgICAgICAgICBpbnN0YW5jZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICBpbnN0YW5jZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICBpbnN0YW5jZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICBpbnN0YW5jZS5zdHlsZS5ib3JkZXIgPSAnMHB4JztcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICAgIGluc3RhbmNlLmlkID0gJ3RyZXpvcmNvbm5lY3QnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYW5pZmVzdFN0cmluZyA9IHNldHRpbmdzLm1hbmlmZXN0ID8gSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MubWFuaWZlc3QpIDogJ3VuZGVmaW5lZCc7IC8vIG5vdGU6IGJ0b2EodW5kZWZpbmVkKSA9PT0gYnRvYSgndW5kZWZpbmVkJykgPT09IFwiZFc1a1pXWnBibVZrXCJcblxuICAgICAgICAgICAgbWFuaWZlc3QgPSBcIiZ2ZXJzaW9uPVwiICsgc2V0dGluZ3MudmVyc2lvbiArIFwiJm1hbmlmZXN0PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGJ0b2EoSlNPTi5zdHJpbmdpZnkobWFuaWZlc3RTdHJpbmcpKSk7XG4gICAgICAgICAgICBzcmMgPSBzZXR0aW5ncy5pZnJhbWVTcmMgKyBcIj9cIiArIERhdGUubm93KCkgKyBtYW5pZmVzdDtcbiAgICAgICAgICAgIGluc3RhbmNlLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcblxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLndlYnVzYikge1xuICAgICAgICAgICAgICBpbnN0YW5jZS5zZXRBdHRyaWJ1dGUoJ2FsbG93JywgJ3VzYicpO1xuICAgICAgICAgICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taXJyZWd1bGFyLXdoaXRlc3BhY2UsIG5vLXVzZWxlc3MtZXNjYXBlXG5cblxuICAgICAgICAgICAgaWZyYW1lU3JjSG9zdCA9IGluc3RhbmNlLnNyYy5tYXRjaCgvXi4rXFw6XFwvXFwvW15cXC9dKy8pO1xuXG4gICAgICAgICAgICBpZiAoaWZyYW1lU3JjSG9zdCAmJiBpZnJhbWVTcmNIb3N0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgZXhwb3J0cy5vcmlnaW4gPSBvcmlnaW4gPSBpZnJhbWVTcmNIb3N0WzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBleHBvcnRzLnRpbWVvdXQgPSB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpbml0UHJvbWlzZS5yZWplY3QoX2Vycm9ycy5JRlJBTUVfVElNRU9VVCk7XG4gICAgICAgICAgICB9LCAxMDAwMCk7XG5cbiAgICAgICAgICAgIG9uTG9hZCA9IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnJlamVjdChfZXJyb3JzLklGUkFNRV9CTE9DS0VEKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGhvc3RpbmcgcGFnZSBpcyBhYmxlIHRvIGFjY2VzcyBjcm9zcy1vcmlnaW4gbG9jYXRpb24gaXQgbWVhbnMgdGhhdCB0aGUgaWZyYW1lIGlzIG5vdCBsb2FkZWRcbiAgICAgICAgICAgICAgICB2YXIgaWZyYW1lT3JpZ2luID0gaW5zdGFuY2UuY29udGVudFdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlmcmFtZU9yaWdpbiB8fCBpZnJhbWVPcmlnaW4gPT09ICdudWxsJykge1xuICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgICAgICAgICAgICBoYW5kbGVJZnJhbWVCbG9ja2VkKCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7Ly8gZW1wdHlcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBleHRlbnNpb247IC8vICRGbG93SXNzdWUgY2hyb21lIGlzIG5vdCBkZWNsYXJlZCBvdXRzaWRlXG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjaHJvbWUgIT09ICd1bmRlZmluZWQnICYmIGNocm9tZS5ydW50aW1lICYmIHR5cGVvZiBjaHJvbWUucnVudGltZS5vbkNvbm5lY3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICAgICAgICBleHRlbnNpb24gPSBjaHJvbWUucnVudGltZS5pZDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGluc3RhbmNlLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6IF91aS5JRlJBTUVfSEFORFNIQUtFLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBzZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogZXh0ZW5zaW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCBvcmlnaW4pO1xuICAgICAgICAgICAgICBpbnN0YW5jZS5vbmxvYWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9OyAvLyBJRSBoYWNrXG5cblxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLmF0dGFjaEV2ZW50KSB7XG4gICAgICAgICAgICAgIGluc3RhbmNlLmF0dGFjaEV2ZW50KCdvbmxvYWQnLCBvbkxvYWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaW5zdGFuY2Uub25sb2FkID0gb25Mb2FkO1xuICAgICAgICAgICAgfSAvLyBpbmplY3QgaWZyYW1lIGludG8gaG9zdCBkb2N1bWVudCBib2R5XG5cblxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnN0YW5jZSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuXG4gICAgICAgICAgICAgIGluamVjdFN0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDEzO1xuICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE2O1xuICAgICAgICAgICAgcmV0dXJuIGluaXRQcm9taXNlLnByb21pc2U7XG5cbiAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDIxO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDE4O1xuICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dFtcImNhdGNoXCJdKDEzKTtcbiAgICAgICAgICAgIHRocm93IF9jb250ZXh0LnQwLm1lc3NhZ2UgfHwgX2NvbnRleHQudDA7XG5cbiAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDIxO1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgIGV4cG9ydHMudGltZW91dCA9IHRpbWVvdXQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmZpbmlzaCgyMSk7XG5cbiAgICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlLCBudWxsLCBbWzEzLCAxOCwgMjEsIDI1XV0pO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXQoX3gpIHtcbiAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpO1xuXG5leHBvcnRzLmluaXQgPSBpbml0O1xuXG52YXIgaW5qZWN0U3R5bGVTaGVldCA9IGZ1bmN0aW9uIGluamVjdFN0eWxlU2hlZXQoKSB7XG4gIGlmICghaW5zdGFuY2UpIHtcbiAgICB0aHJvdyBfZXJyb3JzLklGUkFNRV9CTE9DS0VEO1xuICB9XG5cbiAgdmFyIGRvYyA9IGluc3RhbmNlLm93bmVyRG9jdW1lbnQ7XG4gIHZhciBoZWFkID0gZG9jLmhlYWQgfHwgZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ1RyZXpvckNvbm5lY3RTdHlsZXNoZWV0Jyk7IC8vICRGbG93SXNzdWVcblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIC8vIElFXG4gICAgLy8gJEZsb3dJc3N1ZVxuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IF9pbmxpbmVTdHlsZXNbXCJkZWZhdWx0XCJdO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKF9pbmxpbmVTdHlsZXNbXCJkZWZhdWx0XCJdKSk7XG4gIH1cblxuICBoZWFkLmFwcGVuZChzdHlsZSk7XG59O1xuXG52YXIgaGFuZGxlSWZyYW1lQmxvY2tlZCA9IGZ1bmN0aW9uIGhhbmRsZUlmcmFtZUJsb2NrZWQoKSB7XG4gIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dCk7XG4gIGV4cG9ydHMuZXJyb3IgPSBlcnJvciA9IF9lcnJvcnMuSUZSQU1FX0JMT0NLRUQubWVzc2FnZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG5cbiAgZGlzcG9zZSgpO1xuICBpbml0UHJvbWlzZS5yZWplY3QoX2Vycm9ycy5JRlJBTUVfQkxPQ0tFRCk7XG59OyAvLyBwb3N0IG1lc3NhZ2VzIHRvIGlmcmFtZVxuXG5cbnZhciBwb3N0TWVzc2FnZSA9IGZ1bmN0aW9uIHBvc3RNZXNzYWdlKG1lc3NhZ2UsIHVzZVByb21pc2UpIHtcbiAgaWYgKHVzZVByb21pc2UgPT09IHZvaWQgMCkge1xuICAgIHVzZVByb21pc2UgPSB0cnVlO1xuICB9XG5cbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIHRocm93IF9lcnJvcnMuSUZSQU1FX0JMT0NLRUQ7XG4gIH1cblxuICBpZiAodXNlUHJvbWlzZSkge1xuICAgIF9tZXNzYWdlSUQrKztcbiAgICBtZXNzYWdlLmlkID0gX21lc3NhZ2VJRDtcbiAgICBtZXNzYWdlUHJvbWlzZXNbX21lc3NhZ2VJRF0gPSAoMCwgX2RlZmVycmVkLmNyZWF0ZSkoKTtcbiAgICBpbnN0YW5jZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKG1lc3NhZ2UsIG9yaWdpbik7XG4gICAgcmV0dXJuIG1lc3NhZ2VQcm9taXNlc1tfbWVzc2FnZUlEXS5wcm9taXNlO1xuICB9XG5cbiAgaW5zdGFuY2UuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCBvcmlnaW4pO1xuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydHMucG9zdE1lc3NhZ2UgPSBwb3N0TWVzc2FnZTtcblxudmFyIGRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UucGFyZW50Tm9kZSkge1xuICAgIHRyeSB7XG4gICAgICBpbnN0YW5jZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGluc3RhbmNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikgey8vIGRvIG5vdGhpbmdcbiAgICB9XG4gIH1cblxuICBleHBvcnRzLmluc3RhbmNlID0gaW5zdGFuY2UgPSBudWxsO1xuICBleHBvcnRzLnRpbWVvdXQgPSB0aW1lb3V0ID0gMDtcbn07XG5cbmV4cG9ydHMuZGlzcG9zZSA9IGRpc3Bvc2U7XG5cbnZhciBjbGVhclRpbWVvdXQgPSBmdW5jdGlvbiBjbGVhclRpbWVvdXQoKSB7XG4gIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dCk7XG59O1xuXG5leHBvcnRzLmNsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIGNzcyA9ICcudHJlem9yY29ubmVjdC1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQhaW1wb3J0YW50O2Rpc3BsYXk6LXdlYmtpdC1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6LXdlYmtpdC1mbGV4IWltcG9ydGFudDtkaXNwbGF5Oi1tcy1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OmZsZXghaW1wb3J0YW50Oy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbCFpbXBvcnRhbnQ7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbCFpbXBvcnRhbnQ7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW4haW1wb3J0YW50Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW4haW1wb3J0YW50O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbiFpbXBvcnRhbnQ7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyIWltcG9ydGFudDstd2Via2l0LWFsaWduLWl0ZW1zOmNlbnRlciFpbXBvcnRhbnQ7LW1zLWZsZXgtYWxpZ246Y2VudGVyIWltcG9ydGFudDthbGlnbi1pdGVtczpjZW50ZXIhaW1wb3J0YW50O3otaW5kZXg6MTAwMDAhaW1wb3J0YW50O3dpZHRoOjEwMCUhaW1wb3J0YW50O2hlaWdodDoxMDAlIWltcG9ydGFudDt0b3A6MCFpbXBvcnRhbnQ7bGVmdDowIWltcG9ydGFudDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjM1KSFpbXBvcnRhbnQ7b3ZlcmZsb3c6YXV0byFpbXBvcnRhbnQ7cGFkZGluZzoyMHB4IWltcG9ydGFudDttYXJnaW46MCFpbXBvcnRhbnR9LnRyZXpvcmNvbm5lY3QtY29udGFpbmVyIC50cmV6b3Jjb25uZWN0LXdpbmRvd3twb3NpdGlvbjpyZWxhdGl2ZSFpbXBvcnRhbnQ7ZGlzcGxheTpibG9jayFpbXBvcnRhbnQ7d2lkdGg6MzcwcHghaW1wb3J0YW50O2ZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLHNhbnMtc2VyaWYhaW1wb3J0YW50O21hcmdpbjphdXRvIWltcG9ydGFudDtib3JkZXItcmFkaXVzOjNweCFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZmZmIWltcG9ydGFudDt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudH0udHJlem9yY29ubmVjdC1jb250YWluZXIgLnRyZXpvcmNvbm5lY3Qtd2luZG93IC50cmV6b3Jjb25uZWN0LWhlYWR7dGV4dC1hbGlnbjpsZWZ0O3BhZGRpbmc6MTJweCAyNHB4IWltcG9ydGFudDtkaXNwbGF5Oi13ZWJraXQtYm94IWltcG9ydGFudDtkaXNwbGF5Oi13ZWJraXQtZmxleCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtZmxleGJveCFpbXBvcnRhbnQ7ZGlzcGxheTpmbGV4IWltcG9ydGFudDstd2Via2l0LWJveC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50Oy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyIWltcG9ydGFudDstbXMtZmxleC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50O2FsaWduLWl0ZW1zOmNlbnRlciFpbXBvcnRhbnR9LnRyZXpvcmNvbm5lY3QtY29udGFpbmVyIC50cmV6b3Jjb25uZWN0LXdpbmRvdyAudHJlem9yY29ubmVjdC1oZWFkIC50cmV6b3Jjb25uZWN0LWxvZ297LXdlYmtpdC1ib3gtZmxleDoxOy13ZWJraXQtZmxleDoxOy1tcy1mbGV4OjE7ZmxleDoxfS50cmV6b3Jjb25uZWN0LWNvbnRhaW5lciAudHJlem9yY29ubmVjdC13aW5kb3cgLnRyZXpvcmNvbm5lY3QtaGVhZCAudHJlem9yY29ubmVjdC1jbG9zZXtjdXJzb3I6cG9pbnRlciFpbXBvcnRhbnQ7aGVpZ2h0OjI0cHghaW1wb3J0YW50fS50cmV6b3Jjb25uZWN0LWNvbnRhaW5lciAudHJlem9yY29ubmVjdC13aW5kb3cgLnRyZXpvcmNvbm5lY3QtaGVhZCAudHJlem9yY29ubmVjdC1jbG9zZSBzdmd7ZmlsbDojNzU3NTc1Oy13ZWJraXQtdHJhbnNpdGlvbjpmaWxsIC4zcyBlYXNlLWluLW91dCFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpmaWxsIC4zcyBlYXNlLWluLW91dCFpbXBvcnRhbnR9LnRyZXpvcmNvbm5lY3QtY29udGFpbmVyIC50cmV6b3Jjb25uZWN0LXdpbmRvdyAudHJlem9yY29ubmVjdC1oZWFkIC50cmV6b3Jjb25uZWN0LWNsb3NlOmhvdmVyIHN2Z3tmaWxsOiM0OTQ5NDl9LnRyZXpvcmNvbm5lY3QtY29udGFpbmVyIC50cmV6b3Jjb25uZWN0LXdpbmRvdyAudHJlem9yY29ubmVjdC1ib2R5e3BhZGRpbmc6MjRweCAyNHB4IDMycHghaW1wb3J0YW50O2JhY2tncm91bmQ6I0ZCRkJGQiFpbXBvcnRhbnQ7Ym9yZGVyLXRvcDoxcHggc29saWQgI0VCRUJFQn0udHJlem9yY29ubmVjdC1jb250YWluZXIgLnRyZXpvcmNvbm5lY3Qtd2luZG93IC50cmV6b3Jjb25uZWN0LWJvZHkgaDN7Y29sb3I6IzUwNTA1MCFpbXBvcnRhbnQ7Zm9udC1zaXplOjE2cHghaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjUwMCFpbXBvcnRhbnR9LnRyZXpvcmNvbm5lY3QtY29udGFpbmVyIC50cmV6b3Jjb25uZWN0LXdpbmRvdyAudHJlem9yY29ubmVjdC1ib2R5IHB7bWFyZ2luOjhweCAwIDI0cHghaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjQwMCFpbXBvcnRhbnQ7Y29sb3I6I0E5QTlBOSFpbXBvcnRhbnQ7Zm9udC1zaXplOjEycHghaW1wb3J0YW50fS50cmV6b3Jjb25uZWN0LWNvbnRhaW5lciAudHJlem9yY29ubmVjdC13aW5kb3cgLnRyZXpvcmNvbm5lY3QtYm9keSBidXR0b257d2lkdGg6MTAwJSFpbXBvcnRhbnQ7cGFkZGluZzoxMnB4IDI0cHghaW1wb3J0YW50O21hcmdpbjowIWltcG9ydGFudDtib3JkZXItcmFkaXVzOjNweCFpbXBvcnRhbnQ7Zm9udC1zaXplOjE0cHghaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjMwMCFpbXBvcnRhbnQ7Y3Vyc29yOnBvaW50ZXIhaW1wb3J0YW50O2JhY2tncm91bmQ6IzAxQjc1NyFpbXBvcnRhbnQ7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7Ym9yZGVyOjAhaW1wb3J0YW50Oy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dCFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dCFpbXBvcnRhbnR9LnRyZXpvcmNvbm5lY3QtY29udGFpbmVyIC50cmV6b3Jjb25uZWN0LXdpbmRvdyAudHJlem9yY29ubmVjdC1ib2R5IGJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMEFCNTEhaW1wb3J0YW50fS50cmV6b3Jjb25uZWN0LWNvbnRhaW5lciAudHJlem9yY29ubmVjdC13aW5kb3cgLnRyZXpvcmNvbm5lY3QtYm9keSBidXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6IzAwOTU0NiFpbXBvcnRhbnR9LyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltbHVjSFYwSWl3aUpITjBaR2x1SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVdOQkxIbENRVU5KTEZOQlFVRXNaMEpCUTBFc1VVRkJRU3h6UWtGRFFTeFJRVUZCTEhWQ1FVTkJMRkZCUVVFc2MwSkJSVUVzVVVGQlFTeGxRVU5CTEcxQ1FVRkJMRzFDUVVOQkxITkNRVUZCTEdsQ1FVTkJMSFZDUVVGQkxHbENRVU5CTEcxQ1FVRkJMR2xDUVVOQkxHVkJRVUVzYVVKQlJVRXNhMEpCUVVFc2FVSkJRMEVzYjBKQlFVRXNhVUpCUTBFc1pVRkJRU3hwUWtObVRTeFpRVUZoTEdsQ1JFRnlRaXhSUVVGVExHZENRV3RDU0N4TlFVRkJMR1ZCUTBFc1QwRkJRU3hsUVVOQkxFbEJRVUVzV1VGRFFTeExRVUZCTEZsQlEwRXNWMEZCUVN3d1FrRkRRU3hUUVVGQkxHVkJRMEVzVVVGQlFTeGxRVU5CTEU5QlFVRXNXVU5rVWl3clEwUllSU3hUUVVGVkxHMUNRVFpDUVN4UlFVRkJMR2RDUVVOQkxFMUJRVUVzWjBKQlEwRXNXVUZCUVN4alFVRkJMRzFDUVVGQkxGZEJRVUVzVDBGQlFTeHBRa0ZCUVN4TlFVRkJMSEZDUVVOQkxFOUJRVUVzWlVObVZpeGpRVUZsTEdORWFrSm1MR2xDUVdsQ1JTeGxRV3RDV1N4WFFVRkJMR2xDUTJaa0xGTkJRVlVzYVVKRWJVSkpMRzFGUVVOQkxGZEJRVUVzUzBOb1FtUXNVVUZCVXl4TFFVRkxMR1ZFZUVKa0xGRkJRVk1zYzBKQk1FTlRMRkZCUVVFc2RVSkJRMEVzVVVGQlFTeHpRa05tYkVJc1VVRkJVeXhsUkdsQ1N5eHJRa0UxUWxvc2FVSkJPRUp2UWl4dlFrRkJRU3hwUWtOb1FteENMR1ZCUVdkQ0xHbENSQzlDV2l4WlFXbENUaXhwUWtGelExRXNkVVpCUTBFc2FVSkJRVUVzUlVOd1FsWXNZVUZCWXl4RlJIQkRWaXhUUVVGVkxFVkJNa1JCTEV0QlFVRXNSVUZGUVN4M1JrTndRbVFzVDBGQlVTeHJRa1I2UTFJc1QwRkJVU3hsUVdsRlRTdzBSa0ZEUVN4TFFVRkJMRkZCUTBFc2JVSkJRVUVzUzBGQlFTeEpRVUZCTEhOQ1EzQkNaQ3hYUVVGWkxFdEJRVXNzU1VGQlN5eHpRa1IzUWxJc2EwZEJRMEVzUzBGQlFTeFJRVVZCTEcxRlFVTkJMRkZCUVVFc1MwRkJRU3hMUVVGQkxHVkJRMEVzVjBGQlFTeHJRa0ZEUVN4WFFVRkJMRWxCUVVFc1RVRkJRU3hSUVVWQkxITkZRVU5CTEUxQlFVRXNhMEpCUTBFc1ZVRkJRU3hsUTNKQ1pDeFpRVUZoTEdORWQwSkxMSEZGUTNKQ2JFSXNUMEZCVVN4SlFVRkpMRVZCUVVrc1pVUjNRa1lzV1VGQlFTeGpRVU5KTEUxQlFVRXNhMEpEZEVKc1FpeFZRVUZYTEdWQlJXSXNNRVZCUTBVc1RVRkJUeXhsUVVOUUxGRkJRVk1zUzBGQlN5eGxRVU5rTEU5QlFWRXNXVUZEVWl4alFVRmxMR05CUTJZc1ZVRkJWeXhsUVVOWUxGbEJRV0VzWTBGRFlpeFBRVUZSTEd0Q1FVTlNMRmRCUVZrc2EwSkJRMW9zVFVGQlR5eGxRVU5RTEU5QlFWRXNXVUZEVWl4dFFrRkJiMElzYVVKQlFXbENMRWxCUVVzc2MwSkJRekZETEZkQlFWa3NhVUpCUVdsQ0xFbEJRVXNzYzBKQlJYQkRMR2RHUVVORkxHbENRVUZyUWl4clFrRkZjRUlzYVVaQlEwVXNhVUpCUVd0Q0luMD0gKi8nO1xudmFyIF9kZWZhdWx0ID0gY3NzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIF9leHBvcnROYW1lcyA9IHtcbiAgVUlfRVZFTlQ6IHRydWUsXG4gIERFVklDRV9FVkVOVDogdHJ1ZSxcbiAgUkVTUE9OU0VfRVZFTlQ6IHRydWUsXG4gIFRSQU5TUE9SVF9FVkVOVDogdHJ1ZSxcbiAgQkxPQ0tDSEFJTl9FVkVOVDogdHJ1ZSxcbiAgVFJBTlNQT1JUOiB0cnVlLFxuICBVSTogdHJ1ZSxcbiAgREVWSUNFOiB0cnVlLFxuICBCTE9DS0NIQUlOOiB0cnVlXG59O1xuZXhwb3J0cy5CTE9DS0NIQUlOID0gZXhwb3J0cy5ERVZJQ0UgPSBleHBvcnRzLlVJID0gZXhwb3J0cy5UUkFOU1BPUlQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9yZWdlbmVyYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpKTtcblxudmFyIF9hc3luY1RvR2VuZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKSk7XG5cbnZhciBfZXZlbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZXZlbnRzXCIpKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5cbmV4cG9ydHMuVUlfRVZFTlQgPSBfY29uc3RhbnRzLlVJX0VWRU5UO1xuZXhwb3J0cy5ERVZJQ0VfRVZFTlQgPSBfY29uc3RhbnRzLkRFVklDRV9FVkVOVDtcbmV4cG9ydHMuUkVTUE9OU0VfRVZFTlQgPSBfY29uc3RhbnRzLlJFU1BPTlNFX0VWRU5UO1xuZXhwb3J0cy5UUkFOU1BPUlRfRVZFTlQgPSBfY29uc3RhbnRzLlRSQU5TUE9SVF9FVkVOVDtcbmV4cG9ydHMuQkxPQ0tDSEFJTl9FVkVOVCA9IF9jb25zdGFudHMuQkxPQ0tDSEFJTl9FVkVOVDtcblxudmFyIFRSQU5TUE9SVCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2NvbnN0YW50cy90cmFuc3BvcnRcIikpO1xuXG5leHBvcnRzLlRSQU5TUE9SVCA9IFRSQU5TUE9SVDtcblxudmFyIFBPUFVQID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vY29uc3RhbnRzL3BvcHVwXCIpKTtcblxudmFyIElGUkFNRSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2NvbnN0YW50cy9pZnJhbWVcIikpO1xuXG52YXIgVUkgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9jb25zdGFudHMvdWlcIikpO1xuXG5leHBvcnRzLlVJID0gVUk7XG5cbnZhciBERVZJQ0UgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9jb25zdGFudHMvZGV2aWNlXCIpKTtcblxuZXhwb3J0cy5ERVZJQ0UgPSBERVZJQ0U7XG5cbnZhciBCTE9DS0NIQUlOID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vY29uc3RhbnRzL2Jsb2NrY2hhaW5cIikpO1xuXG5leHBvcnRzLkJMT0NLQ0hBSU4gPSBCTE9DS0NIQUlOO1xuXG52YXIgRVJST1IgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9jb25zdGFudHMvZXJyb3JzXCIpKTtcblxudmFyIF9Qb3B1cE1hbmFnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BvcHVwL1BvcHVwTWFuYWdlclwiKSk7XG5cbnZhciBpZnJhbWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9pZnJhbWUvYnVpbGRlclwiKSk7XG5cbnZhciBfYnV0dG9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93ZWJ1c2IvYnV0dG9uXCIpKTtcblxudmFyIF9kZWJ1ZyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3V0aWxzL2RlYnVnXCIpKTtcblxudmFyIF9tZXNzYWdlID0gcmVxdWlyZShcIi4vbWVzc2FnZVwiKTtcblxudmFyIF9Db25uZWN0U2V0dGluZ3MgPSByZXF1aXJlKFwiLi9kYXRhL0Nvbm5lY3RTZXR0aW5nc1wiKTtcblxudmFyICRUID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vdHlwZXNcIikpO1xuXG52YXIgX2Jsb2NrY2hhaW5FdmVudCA9IHJlcXVpcmUoXCIuL3R5cGVzL2Jsb2NrY2hhaW5FdmVudFwiKTtcblxuT2JqZWN0LmtleXMoX2Jsb2NrY2hhaW5FdmVudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgZXhwb3J0c1trZXldID0gX2Jsb2NrY2hhaW5FdmVudFtrZXldO1xufSk7XG5cbnZhciBfYWNjb3VudCA9IHJlcXVpcmUoXCIuL3R5cGVzL2FjY291bnRcIik7XG5cbk9iamVjdC5rZXlzKF9hY2NvdW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO1xuICBleHBvcnRzW2tleV0gPSBfYWNjb3VudFtrZXldO1xufSk7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgZXZlbnRFbWl0dGVyID0gbmV3IF9ldmVudHNbXCJkZWZhdWx0XCJdKCk7XG5cbnZhciBfbG9nID0gKDAsIF9kZWJ1Zy5pbml0KSgnW3RyZXpvci1jb25uZWN0LmpzXScpO1xuXG52YXIgX3NldHRpbmdzO1xuXG52YXIgX3BvcHVwTWFuYWdlcjtcblxudmFyIGluaXRQb3B1cE1hbmFnZXIgPSBmdW5jdGlvbiBpbml0UG9wdXBNYW5hZ2VyKCkge1xuICB2YXIgcG0gPSBuZXcgX1BvcHVwTWFuYWdlcltcImRlZmF1bHRcIl0oX3NldHRpbmdzKTtcbiAgcG0ub24oUE9QVVAuQ0xPU0VELCBmdW5jdGlvbiAoKSB7XG4gICAgaWZyYW1lLnBvc3RNZXNzYWdlKHtcbiAgICAgIHR5cGU6IFBPUFVQLkNMT1NFRFxuICAgIH0sIGZhbHNlKTtcbiAgfSk7XG4gIHJldHVybiBwbTtcbn07IC8vIGhhbmRsZSBtZXNzYWdlIHJlY2VpdmVkIGZyb20gaWZyYW1lXG5cblxudmFyIGhhbmRsZU1lc3NhZ2UgPSBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKG1lc3NhZ2VFdmVudCkge1xuICAvLyBpZ25vcmUgbWVzc2FnZXMgZnJvbSBkb21haW4gb3RoZXIgdGhlbiBpZnJhbWUgb3JpZ2luXG4gIGlmIChtZXNzYWdlRXZlbnQub3JpZ2luICE9PSBpZnJhbWUub3JpZ2luKSByZXR1cm47XG4gIHZhciBtZXNzYWdlID0gKDAsIF9tZXNzYWdlLnBhcnNlTWVzc2FnZSkobWVzc2FnZUV2ZW50LmRhdGEpOyAvLyBUT0RPOiBkZXN0cnVjdHVyaW5nIHdpdGggdHlwZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI0MFxuICAvLyBjb25zdCB7IGlkLCBldmVudCwgdHlwZSwgZGF0YSwgZXJyb3IgfTogQ29yZU1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gIHZhciBpZCA9IG1lc3NhZ2UuaWQgfHwgMDtcbiAgdmFyIGV2ZW50ID0gbWVzc2FnZS5ldmVudDtcbiAgdmFyIHR5cGUgPSBtZXNzYWdlLnR5cGU7XG4gIHZhciBwYXlsb2FkID0gbWVzc2FnZS5wYXlsb2FkO1xuXG4gIF9sb2cubG9nKCdoYW5kbGVNZXNzYWdlJywgbWVzc2FnZSk7XG5cbiAgc3dpdGNoIChldmVudCkge1xuICAgIGNhc2UgX2NvbnN0YW50cy5SRVNQT05TRV9FVkVOVDpcbiAgICAgIGlmIChpZnJhbWUubWVzc2FnZVByb21pc2VzW2lkXSkge1xuICAgICAgICAvLyBjbGVhciB1bm5lY2Vzc2FyeSBmaWVsZHMgZnJvbSBtZXNzYWdlIG9iamVjdFxuICAgICAgICBkZWxldGUgbWVzc2FnZS50eXBlO1xuICAgICAgICBkZWxldGUgbWVzc2FnZS5ldmVudDsgLy8gZGVsZXRlIG1lc3NhZ2UuaWQ7XG4gICAgICAgIC8vIG1lc3NhZ2UuX19pZCA9IGlkO1xuICAgICAgICAvLyByZXNvbHZlIG1lc3NhZ2UgcHJvbWlzZSAoc2VuZCByZXN1bHQgb2YgY2FsbCBtZXRob2QpXG5cbiAgICAgICAgaWZyYW1lLm1lc3NhZ2VQcm9taXNlc1tpZF0ucmVzb2x2ZShtZXNzYWdlKTtcbiAgICAgICAgZGVsZXRlIGlmcmFtZS5tZXNzYWdlUHJvbWlzZXNbaWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2xvZy53YXJuKFwiVW5rbm93biBtZXNzYWdlIGlkIFwiICsgaWQpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgX2NvbnN0YW50cy5ERVZJQ0VfRVZFTlQ6XG4gICAgICAvLyBwYXNzIERFVklDRSBldmVudCB1cCB0byBodG1sXG4gICAgICBldmVudEVtaXR0ZXIuZW1pdChldmVudCwgbWVzc2FnZSk7XG4gICAgICBldmVudEVtaXR0ZXIuZW1pdCh0eXBlLCBwYXlsb2FkKTsgLy8gREVWSUNFX0VWRU5UIGFsc28gZW1pdCBzaW5nbGUgZXZlbnRzIChjb25uZWN0L2Rpc2Nvbm5lY3QuLi4pXG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBfY29uc3RhbnRzLlRSQU5TUE9SVF9FVkVOVDpcbiAgICAgIGV2ZW50RW1pdHRlci5lbWl0KGV2ZW50LCBtZXNzYWdlKTtcbiAgICAgIGV2ZW50RW1pdHRlci5lbWl0KHR5cGUsIHBheWxvYWQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIF9jb25zdGFudHMuQkxPQ0tDSEFJTl9FVkVOVDpcbiAgICAgIGV2ZW50RW1pdHRlci5lbWl0KGV2ZW50LCBtZXNzYWdlKTtcbiAgICAgIGV2ZW50RW1pdHRlci5lbWl0KHR5cGUsIHBheWxvYWQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIF9jb25zdGFudHMuVUlfRVZFTlQ6XG4gICAgICBpZiAodHlwZSA9PT0gSUZSQU1FLkJPT1RTVFJBUCkge1xuICAgICAgICBpZnJhbWUuY2xlYXJUaW1lb3V0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBQT1BVUC5CT09UU1RSQVApIHtcbiAgICAgICAgLy8gUG9wdXAgZGlkIG9wZW4gYnV0IGlzIHN0aWxsIGxvYWRpbmcgSlNcbiAgICAgICAgX3BvcHVwTWFuYWdlci5jYW5jZWxPcGVuVGltZW91dCgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfSAvLyBwYXNzIFVJIGV2ZW50IHVwXG5cblxuICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoZXZlbnQsIG1lc3NhZ2UpO1xuICAgICAgZXZlbnRFbWl0dGVyLmVtaXQodHlwZSwgcGF5bG9hZCk7XG5cbiAgICAgIGlmICh0eXBlID09PSBVSS5JRlJBTUVfSEFORFNIQUtFKSB7XG4gICAgICAgIGlmIChwYXlsb2FkLmVycm9yKSB7XG4gICAgICAgICAgaWZyYW1lLmluaXRQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocGF5bG9hZC5lcnJvcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9wb3B1cE1hbmFnZXIuc2V0QnJvYWRjYXN0KHBheWxvYWQuYnJvYWRjYXN0KTtcblxuICAgICAgICAgIGlmcmFtZS5pbml0UHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gUE9QVVAuQ0FOQ0VMX1BPUFVQX1JFUVVFU1QpIHtcbiAgICAgICAgX3BvcHVwTWFuYWdlci5jYW5jZWwoKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gVUkuQ0xPU0VfVUlfV0lORE9XKSB7XG4gICAgICAgIF9wb3B1cE1hbmFnZXIuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgX2xvZy5sb2coJ1VuZGVmaW5lZCBtZXNzYWdlJywgZXZlbnQsIG1lc3NhZ2VFdmVudCk7XG5cbiAgfVxufTtcblxudmFyIGluaXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShzZXR0aW5ncykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBzZXR0aW5ncyA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlmcmFtZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IEVSUk9SLklGUkFNRV9JTklUSUFMSVpFRDtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGlmICghX3NldHRpbmdzKSB7XG4gICAgICAgICAgICAgIF9zZXR0aW5ncyA9ICgwLCBfQ29ubmVjdFNldHRpbmdzLnBhcnNlKShzZXR0aW5ncyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfc2V0dGluZ3MubWFuaWZlc3QpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDY7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBFUlJPUi5NQU5JRkVTVF9OT1RfU0VUO1xuXG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgaWYgKF9zZXR0aW5ncy5zdXBwb3J0ZWRCcm93c2VyKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA4O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgRVJST1IuQlJPV1NFUl9OT1RfU1VQUE9SVEVEO1xuXG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgaWYgKCFfcG9wdXBNYW5hZ2VyKSB7XG4gICAgICAgICAgICAgIF9wb3B1cE1hbmFnZXIgPSBpbml0UG9wdXBNYW5hZ2VyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9sb2cuZW5hYmxlZCA9IF9zZXR0aW5ncy5kZWJ1ZztcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoX3BvcHVwTWFuYWdlcikge1xuICAgICAgICAgICAgICAgIF9wb3B1cE1hbmFnZXIub25CZWZvcmVVbmxvYWQoKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmcmFtZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNDtcbiAgICAgICAgICAgIHJldHVybiBpZnJhbWUuaW5pdChfc2V0dGluZ3MpO1xuXG4gICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gaW5pdChfeCkge1xuICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCk7XG5cbnZhciBjYWxsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYyID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMihwYXJhbXMpIHtcbiAgICB2YXIgcmVzcG9uc2U7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBpZiAoISghaWZyYW1lLmluc3RhbmNlICYmICFpZnJhbWUudGltZW91dCkpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAxOTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGluaXQgcG9wdXAgd2l0aCBsYXp5IGxvYWRpbmcgYmVmb3JlIGlmcmFtZSBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgX3NldHRpbmdzID0gKDAsIF9Db25uZWN0U2V0dGluZ3MucGFyc2UpKF9zZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIGlmIChfc2V0dGluZ3MubWFuaWZlc3QpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA0O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGVycm9yOiBFUlJPUi5NQU5JRkVTVF9OT1RfU0VULm1lc3NhZ2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBpZiAoX3NldHRpbmdzLnN1cHBvcnRlZEJyb3dzZXIpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA2O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGVycm9yOiBFUlJPUi5CUk9XU0VSX05PVF9TVVBQT1JURUQubWVzc2FnZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIF9wb3B1cE1hbmFnZXIgPSBpbml0UG9wdXBNYW5hZ2VyKCk7XG5cbiAgICAgICAgICAgIF9wb3B1cE1hbmFnZXIucmVxdWVzdCh0cnVlKTsgLy8gYXV0byBpbml0IHdpdGggZGVmYXVsdCBzZXR0aW5nc1xuXG5cbiAgICAgICAgICAgIF9jb250ZXh0Mi5wcmV2ID0gODtcbiAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMTE7XG4gICAgICAgICAgICByZXR1cm4gaW5pdChfc2V0dGluZ3MpO1xuXG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMTM7XG4gICAgICAgICAgICByZXR1cm4gX3BvcHVwTWFuYWdlci5yZXNvbHZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDE5O1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSAxNTtcbiAgICAgICAgICAgIF9jb250ZXh0Mi50MCA9IF9jb250ZXh0MltcImNhdGNoXCJdKDgpO1xuXG4gICAgICAgICAgICBfcG9wdXBNYW5hZ2VyLmNsb3NlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogX2NvbnRleHQyLnQwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgIGlmICghaWZyYW1lLnRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyMztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogRVJST1IuTk9fSUZSQU1FLm1lc3NhZ2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgaWYgKCFpZnJhbWUuZXJyb3IpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyNTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogaWZyYW1lLmVycm9yXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgIC8vIHJlcXVlc3QgcG9wdXAgd2luZG93IGl0IG1pZ2h0IGJlIHVzZWQgaW4gdGhlIGZ1dHVyZVxuICAgICAgICAgICAgLy8gaWYgKGV2ZW50RW1pdHRlci5saXN0ZW5lcnMoVUlfRVZFTlQpLmxlbmd0aCA8IDEpIHsgX3BvcHVwTWFuYWdlci5yZXF1ZXN0KHBhcmFtcyk7IH1cbiAgICAgICAgICAgIGlmIChfc2V0dGluZ3MucG9wdXApIHtcbiAgICAgICAgICAgICAgX3BvcHVwTWFuYWdlci5yZXF1ZXN0KCk7XG4gICAgICAgICAgICB9IC8vIHBvc3QgbWVzc2FnZSB0byBpZnJhbWVcblxuXG4gICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDI2O1xuICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyOTtcbiAgICAgICAgICAgIHJldHVybiBpZnJhbWUucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICB0eXBlOiBJRlJBTUUuQ0FMTCxcbiAgICAgICAgICAgICAgcGF5bG9hZDogcGFyYW1zXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgICByZXNwb25zZSA9IF9jb250ZXh0Mi5zZW50O1xuXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMzU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUT0RPOiB1bmxvY2sgcG9wdXBNYW5hZ2VyIHJlcXVlc3Qgb25seSBpZiB0aGVyZSB3YXNuJ3QgZXJyb3IgXCJpbiBwcm9ncmVzc1wiXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucGF5bG9hZC5lcnJvciAhPT0gRVJST1IuREVWSUNFX0NBTExfSU5fUFJPR1JFU1MubWVzc2FnZSkge1xuICAgICAgICAgICAgICBfcG9wdXBNYW5hZ2VyLnVubG9jaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCByZXNwb25zZSk7XG5cbiAgICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgICAgX3BvcHVwTWFuYWdlci51bmxvY2soKTsgLy8gVE9ET1xuXG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogJ05vIHJlc3BvbnNlIGZyb20gaWZyYW1lJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDQzO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSAzOTtcbiAgICAgICAgICAgIF9jb250ZXh0Mi50MSA9IF9jb250ZXh0MltcImNhdGNoXCJdKDI2KTtcblxuICAgICAgICAgICAgX2xvZy5lcnJvcignX19jYWxsIGVycm9yJywgX2NvbnRleHQyLnQxKTtcblxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQyLnQxKTtcblxuICAgICAgICAgIGNhc2UgNDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMiwgbnVsbCwgW1s4LCAxNV0sIFsyNiwgMzldXSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gY2FsbChfeDIpIHtcbiAgICByZXR1cm4gX3JlZjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcblxudmFyIGN1c3RvbU1lc3NhZ2VSZXNwb25zZSA9IGZ1bmN0aW9uIGN1c3RvbU1lc3NhZ2VSZXNwb25zZShwYXlsb2FkKSB7XG4gIGlmcmFtZS5wb3N0TWVzc2FnZSh7XG4gICAgZXZlbnQ6IF9jb25zdGFudHMuVUlfRVZFTlQsXG4gICAgdHlwZTogVUkuQ1VTVE9NX01FU1NBR0VfUkVTUE9OU0UsXG4gICAgcGF5bG9hZDogcGF5bG9hZFxuICB9KTtcbn07XG5cbnZhciBUcmV6b3JDb25uZWN0ID0gZnVuY3Rpb24gVHJlem9yQ29ubmVjdCgpIHt9O1xuXG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwibWFuaWZlc3RcIiwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgX3NldHRpbmdzID0gKDAsIF9Db25uZWN0U2V0dGluZ3MucGFyc2UpKHtcbiAgICBtYW5pZmVzdDogZGF0YVxuICB9KTtcbn0pO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImdldFNldHRpbmdzXCIsXG4vKiNfX1BVUkVfXyovXG4oMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4vKiNfX1BVUkVfXyovXG5fcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMoKSB7XG4gIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTMkKF9jb250ZXh0Mykge1xuICAgIHdoaWxlICgxKSB7XG4gICAgICBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGlmIChpZnJhbWUuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBfY29udGV4dDMuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICBlcnJvcjogJ0lmcmFtZSBub3QgaW5pdGlhbGl6ZWQgeWV0LCB5b3UgbmVlZCB0byBjYWxsIFRyZXpvckNvbm5lY3QuaW5pdCBvciBhbnkgb3RoZXIgbWV0aG9kIGZpcnN0LidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2NvbnRleHQzLm5leHQgPSA0O1xuICAgICAgICAgIHJldHVybiBjYWxsKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldFNldHRpbmdzJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDMuc2VudCk7XG5cbiAgICAgICAgY2FzZSA1OlxuICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBfY2FsbGVlMyk7XG59KSkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImluaXRcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY0ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNChzZXR0aW5ncykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQkKF9jb250ZXh0NCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDQucHJldiA9IF9jb250ZXh0NC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGluaXQoc2V0dGluZ3MpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ0LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTQpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDMpIHtcbiAgICByZXR1cm4gX3JlZjQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwib25cIiwgZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gIGV2ZW50RW1pdHRlci5vbih0eXBlLCBmbik7XG59KTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJvZmZcIiwgZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gIGV2ZW50RW1pdHRlci5yZW1vdmVMaXN0ZW5lcih0eXBlLCBmbik7XG59KTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJ1aVJlc3BvbnNlXCIsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICBpZnJhbWUucG9zdE1lc3NhZ2UoX29iamVjdFNwcmVhZCh7XG4gICAgZXZlbnQ6IF9jb25zdGFudHMuVUlfRVZFTlRcbiAgfSwgcmVzcG9uc2UpKTtcbn0pO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImNoYW5nZVNldHRpbmdzXCIsIGZ1bmN0aW9uIChzZXR0aW5ncykge1xuICB2YXIgcGFyc2VkU2V0dGluZ3MgPSAoMCwgX0Nvbm5lY3RTZXR0aW5ncy5wYXJzZSkoc2V0dGluZ3MpO1xuICBfbG9nLmVuYWJsZWQgPSBwYXJzZWRTZXR0aW5ncy5kZWJ1ZztcbiAgaWZyYW1lLnBvc3RNZXNzYWdlKHtcbiAgICB0eXBlOiBVSS5DSEFOR0VfU0VUVElOR1MsXG4gICAgcGF5bG9hZDogcGFyc2VkU2V0dGluZ3NcbiAgfSwgZmFsc2UpO1xufSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiYmxvY2tjaGFpbkRpc2Nvbm5lY3RcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY1ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1JChfY29udGV4dDUpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1LnByZXYgPSBfY29udGV4dDUubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdibG9ja2NoYWluRGlzY29ubmVjdCdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ1LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTUpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDQpIHtcbiAgICByZXR1cm4gX3JlZjUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiYmxvY2tjaGFpbkVzdGltYXRlRmVlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTYocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNiQoX2NvbnRleHQ2KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Ni5wcmV2ID0gX2NvbnRleHQ2Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnYmxvY2tjaGFpbkVzdGltYXRlRmVlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDYuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNik7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NSkge1xuICAgIHJldHVybiBfcmVmNi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJibG9ja2NoYWluU3Vic2NyaWJlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNyA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTcocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNyQoX2NvbnRleHQ3KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Ny5wcmV2ID0gX2NvbnRleHQ3Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnYmxvY2tjaGFpblN1YnNjcmliZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ny5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ3LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDcuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTcpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDYpIHtcbiAgICByZXR1cm4gX3JlZjcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiYmxvY2tjaGFpblVuc3Vic2NyaWJlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmOCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTgocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlOCQoX2NvbnRleHQ4KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0OC5wcmV2ID0gX2NvbnRleHQ4Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnYmxvY2tjaGFpblVuc3Vic2NyaWJlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ4LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDguc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlOCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94Nykge1xuICAgIHJldHVybiBfcmVmOC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJjdXN0b21NZXNzYWdlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmOSA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTEwKHBhcmFtcykge1xuICAgIHZhciBjYWxsYmFjaywgY3VzdG9tTWVzc2FnZUxpc3RlbmVyLCByZXNwb25zZTtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUxMCQoX2NvbnRleHQxMCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDEwLnByZXYgPSBfY29udGV4dDEwLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBpZiAoISh0eXBlb2YgcGFyYW1zLmNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgICBfY29udGV4dDEwLm5leHQgPSAyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTAuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1BhcmFtZXRlciBcImNhbGxiYWNrXCIgaXMgbm90IGEgZnVuY3Rpb24nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgLy8gVE9ETzogc2V0IG1lc3NhZ2UgbGlzdGVuZXIgb25seSBpZiBpZnJhbWUgaXMgbG9hZGVkIGNvcnJlY3RseVxuICAgICAgICAgICAgY2FsbGJhY2sgPSBwYXJhbXMuY2FsbGJhY2s7XG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zLmNhbGxiYWNrO1xuXG4gICAgICAgICAgICBjdXN0b21NZXNzYWdlTGlzdGVuZXIgPVxuICAgICAgICAgICAgLyojX19QVVJFX18qL1xuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgX3JlZjEwID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAgICAgICAgICAgICAvKiNfX1BVUkVfXyovXG4gICAgICAgICAgICAgIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlOShldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhLCBwYXlsb2FkO1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTkkKF9jb250ZXh0OSkge1xuICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDkucHJldiA9IF9jb250ZXh0OS5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGV2ZW50LmRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGRhdGEgJiYgZGF0YS50eXBlID09PSBVSS5DVVNUT01fTUVTU0FHRV9SRVFVRVNUKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDkubmV4dCA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDkubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZGF0YS5wYXlsb2FkKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQgPSBfY29udGV4dDkuc2VudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tTWVzc2FnZVJlc3BvbnNlKHBheWxvYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tTWVzc2FnZVJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncmVsZWFzZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBfY2FsbGVlOSk7XG4gICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gY3VzdG9tTWVzc2FnZUxpc3RlbmVyKF94OSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVmMTAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0oKTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjdXN0b21NZXNzYWdlTGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIF9jb250ZXh0MTAubmV4dCA9IDg7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnY3VzdG9tTWVzc2FnZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgcmVzcG9uc2UgPSBfY29udGV4dDEwLnNlbnQ7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGN1c3RvbU1lc3NhZ2VMaXN0ZW5lcik7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMC5hYnJ1cHQoXCJyZXR1cm5cIiwgcmVzcG9uc2UpO1xuXG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMTApO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDgpIHtcbiAgICByZXR1cm4gX3JlZjkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwicmVxdWVzdExvZ2luXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMTEgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUxMihwYXJhbXMpIHtcbiAgICB2YXIgY2FsbGJhY2ssIGxvZ2luQ2hhbGxlbmdlTGlzdGVuZXIsIHJlc3BvbnNlO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTEyJChfY29udGV4dDEyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MTIucHJldiA9IF9jb250ZXh0MTIubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGlmICghKHR5cGVvZiBwYXJhbXMuY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0MTIubmV4dCA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbGJhY2sgPSBwYXJhbXMuY2FsbGJhY2s7XG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zLmNhbGxiYWNrOyAvLyBkZWxldGUgY2FsbGJhY2sgdmFsdWUuIHRoaXMgZmllbGQgY2Fubm90IGJlIHNlbnQgdXNpbmcgcG9zdE1lc3NhZ2UgZnVuY3Rpb25cbiAgICAgICAgICAgIC8vIFRPRE86IHNldCBtZXNzYWdlIGxpc3RlbmVyIG9ubHkgaWYgaWZyYW1lIGlzIGxvYWRlZCBjb3JyZWN0bHlcblxuICAgICAgICAgICAgbG9naW5DaGFsbGVuZ2VMaXN0ZW5lciA9XG4gICAgICAgICAgICAvKiNfX1BVUkVfXyovXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBfcmVmMTIgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gICAgICAgICAgICAgIC8qI19fUFVSRV9fKi9cbiAgICAgICAgICAgICAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUxMShldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhLCBwYXlsb2FkO1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTExJChfY29udGV4dDExKSB7XG4gICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MTEucHJldiA9IF9jb250ZXh0MTEubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBldmVudC5kYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShkYXRhICYmIGRhdGEudHlwZSA9PT0gVUkuTE9HSU5fQ0hBTExFTkdFX1JFUVVFU1QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0MTEubmV4dCA9IDEzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQxMS5wcmV2ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0MTEubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQgPSBfY29udGV4dDExLnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWUucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogX2NvbnN0YW50cy5VSV9FVkVOVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVUkuTE9HSU5fQ0hBTExFTkdFX1JFU1BPTlNFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0MTEubmV4dCA9IDEzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDExLnByZXYgPSA5O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQxMS50MCA9IF9jb250ZXh0MTFbXCJjYXRjaFwiXSgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVHJlem9yQ29ubmVjdC5yZXF1ZXN0TG9naW46IGNhbGxiYWNrIGVycm9yJywgX2NvbnRleHQxMS50MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWUucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogX2NvbnN0YW50cy5VSV9FVkVOVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVUkuTE9HSU5fQ0hBTExFTkdFX1JFU1BPTlNFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBfY29udGV4dDExLnQwLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBfY2FsbGVlMTEsIG51bGwsIFtbMiwgOV1dKTtcbiAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBsb2dpbkNoYWxsZW5nZUxpc3RlbmVyKF94MTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjEyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbG9naW5DaGFsbGVuZ2VMaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICAgICAgX2NvbnRleHQxMi5uZXh0ID0gNztcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdyZXF1ZXN0TG9naW4nXG4gICAgICAgICAgICB9LCBwYXJhbXMsIHtcbiAgICAgICAgICAgICAgYXN5bmNDaGFsbGVuZ2U6IHRydWVcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHJlc3BvbnNlID0gX2NvbnRleHQxMi5zZW50O1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsb2dpbkNoYWxsZW5nZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDEyLmFicnVwdChcInJldHVyblwiLCByZXNwb25zZSk7XG5cbiAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgX2NvbnRleHQxMi5uZXh0ID0gMTQ7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAncmVxdWVzdExvZ2luJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTIuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MTIuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDEyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUxMik7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MTApIHtcbiAgICByZXR1cm4gX3JlZjExLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcInJlc2V0RGV2aWNlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMTMgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUxMyhwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUxMyQoX2NvbnRleHQxMykge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDEzLnByZXYgPSBfY29udGV4dDEzLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDEzLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3Jlc2V0RGV2aWNlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMy5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQxMy5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMTMpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDEyKSB7XG4gICAgcmV0dXJuIF9yZWYxMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJjYXJkYW5vR2V0QWRkcmVzc1wiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjE0ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMTQocGFyYW1zKSB7XG4gICAgdmFyIHVzZUV2ZW50TGlzdGVuZXI7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMTQkKF9jb250ZXh0MTQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQxNC5wcmV2ID0gX2NvbnRleHQxNC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdXNlRXZlbnRMaXN0ZW5lciA9IGV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50KFVJLkFERFJFU1NfVkFMSURBVElPTikgPiAwO1xuICAgICAgICAgICAgX2NvbnRleHQxNC5uZXh0ID0gMztcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdjYXJkYW5vR2V0QWRkcmVzcydcbiAgICAgICAgICAgIH0sIHBhcmFtcywge1xuICAgICAgICAgICAgICB1c2VFdmVudExpc3RlbmVyOiB1c2VFdmVudExpc3RlbmVyXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxNC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQxNC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxNC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMTQpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDEzKSB7XG4gICAgcmV0dXJuIF9yZWYxNC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJjYXJkYW5vR2V0UHVibGljS2V5XCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMTUgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUxNShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUxNSQoX2NvbnRleHQxNSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDE1LnByZXYgPSBfY29udGV4dDE1Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDE1Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2NhcmRhbm9HZXRQdWJsaWNLZXknXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDE1LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDE1LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDE1LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUxNSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MTQpIHtcbiAgICByZXR1cm4gX3JlZjE1LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImNhcmRhbm9TaWduVHJhbnNhY3Rpb25cIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYxNiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTE2KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTE2JChfY29udGV4dDE2KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MTYucHJldiA9IF9jb250ZXh0MTYubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0MTYubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnY2FyZGFub1NpZ25UcmFuc2FjdGlvbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTYuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MTYuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTYuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTE2KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gxNSkge1xuICAgIHJldHVybiBfcmVmMTYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiY2lwaGVyS2V5VmFsdWVcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYxNyA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTE3KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTE3JChfY29udGV4dDE3KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MTcucHJldiA9IF9jb250ZXh0MTcubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0MTcubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnY2lwaGVyS2V5VmFsdWUnXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDE3LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDE3LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDE3LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUxNyk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MTYpIHtcbiAgICByZXR1cm4gX3JlZjE3LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImNvbXBvc2VUcmFuc2FjdGlvblwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjE4ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMTgocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMTgkKF9jb250ZXh0MTgpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQxOC5wcmV2ID0gX2NvbnRleHQxOC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQxOC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdjb21wb3NlVHJhbnNhY3Rpb24nXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDE4LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDE4LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDE4LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUxOCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MTcpIHtcbiAgICByZXR1cm4gX3JlZjE4LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImRlYnVnTGlua0RlY2lzaW9uXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMTkgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUxOShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUxOSQoX2NvbnRleHQxOSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDE5LnByZXYgPSBfY29udGV4dDE5Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDE5Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2RlYnVnTGlua0RlY2lzaW9uJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxOS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQxOS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxOS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMTkpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDE4KSB7XG4gICAgcmV0dXJuIF9yZWYxOS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJkZWJ1Z0xpbmtHZXRTdGF0ZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjIwID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMjAocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMjAkKF9jb250ZXh0MjApIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQyMC5wcmV2ID0gX2NvbnRleHQyMC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQyMC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdkZWJ1Z0xpbmtHZXRTdGF0ZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MjAuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MjAuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MjAuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTIwKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gxOSkge1xuICAgIHJldHVybiBfcmVmMjAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZXRoZXJldW1HZXRBY2NvdW50SW5mb1wiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjIxID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMjEocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMjEkKF9jb250ZXh0MjEpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQyMS5wcmV2ID0gX2NvbnRleHQyMS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQyMS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdldGhlcmV1bUdldEFjY291bnRJbmZvJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyMS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQyMS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyMS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMjEpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDIwKSB7XG4gICAgcmV0dXJuIF9yZWYyMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJldGhlcmV1bUdldEFkZHJlc3NcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYyMiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIyKHBhcmFtcykge1xuICAgIHZhciB1c2VFdmVudExpc3RlbmVyO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIyJChfY29udGV4dDIyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MjIucHJldiA9IF9jb250ZXh0MjIubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXIgPSBldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChVSS5BRERSRVNTX1ZBTElEQVRJT04pID4gMDtcbiAgICAgICAgICAgIF9jb250ZXh0MjIubmV4dCA9IDM7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnZXRoZXJldW1HZXRBZGRyZXNzJ1xuICAgICAgICAgICAgfSwgcGFyYW1zLCB7XG4gICAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXI6IHVzZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIyLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDIyLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUyMik7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MjEpIHtcbiAgICByZXR1cm4gX3JlZjIyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImV0aGVyZXVtR2V0UHVibGljS2V5XCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMjMgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyMyhwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyMyQoX2NvbnRleHQyMykge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDIzLnByZXYgPSBfY29udGV4dDIzLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDIzLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2V0aGVyZXVtR2V0UHVibGljS2V5J1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyMy5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQyMy5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyMy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMjMpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDIyKSB7XG4gICAgcmV0dXJuIF9yZWYyMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJldGhlcmV1bVNpZ25NZXNzYWdlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMjQgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyNChwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyNCQoX2NvbnRleHQyNCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDI0LnByZXYgPSBfY29udGV4dDI0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDI0Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2V0aGVyZXVtU2lnbk1lc3NhZ2UnXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDI0LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDI0LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDI0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUyNCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MjMpIHtcbiAgICByZXR1cm4gX3JlZjI0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImV0aGVyZXVtU2lnblRyYW5zYWN0aW9uXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMjUgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyNShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyNSQoX2NvbnRleHQyNSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDI1LnByZXYgPSBfY29udGV4dDI1Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDI1Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2V0aGVyZXVtU2lnblRyYW5zYWN0aW9uJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyNS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQyNS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyNS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMjUpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDI0KSB7XG4gICAgcmV0dXJuIF9yZWYyNS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJldGhlcmV1bVZlcmlmeU1lc3NhZ2VcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYyNiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTI2KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTI2JChfY29udGV4dDI2KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MjYucHJldiA9IF9jb250ZXh0MjYubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0MjYubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnZXRoZXJldW1WZXJpZnlNZXNzYWdlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyNi5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQyNi5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyNi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMjYpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDI1KSB7XG4gICAgcmV0dXJuIF9yZWYyNi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJnZXRBY2NvdW50SW5mb1wiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjI3ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMjcocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMjckKF9jb250ZXh0MjcpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQyNy5wcmV2ID0gX2NvbnRleHQyNy5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQyNy5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdnZXRBY2NvdW50SW5mbydcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MjcuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0Mjcuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mjcuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTI3KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gyNikge1xuICAgIHJldHVybiBfcmVmMjcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZ2V0QWRkcmVzc1wiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjI4ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMjgocGFyYW1zKSB7XG4gICAgdmFyIHVzZUV2ZW50TGlzdGVuZXI7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMjgkKF9jb250ZXh0MjgpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQyOC5wcmV2ID0gX2NvbnRleHQyOC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdXNlRXZlbnRMaXN0ZW5lciA9IGV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50KFVJLkFERFJFU1NfVkFMSURBVElPTikgPiAwO1xuICAgICAgICAgICAgX2NvbnRleHQyOC5uZXh0ID0gMztcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdnZXRBZGRyZXNzJ1xuICAgICAgICAgICAgfSwgcGFyYW1zLCB7XG4gICAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXI6IHVzZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDI4LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDI4LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDI4LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUyOCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MjcpIHtcbiAgICByZXR1cm4gX3JlZjI4LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImdldERldmljZVN0YXRlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMjkgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyOShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyOSQoX2NvbnRleHQyOSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDI5LnByZXYgPSBfY29udGV4dDI5Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDI5Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2dldERldmljZVN0YXRlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyOS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQyOS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyOS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMjkpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDI4KSB7XG4gICAgcmV0dXJuIF9yZWYyOS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJnZXRGZWF0dXJlc1wiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjMwID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMzAocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMzAkKF9jb250ZXh0MzApIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQzMC5wcmV2ID0gX2NvbnRleHQzMC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQzMC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdnZXRGZWF0dXJlcydcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzAuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MzAuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzAuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTMwKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gyOSkge1xuICAgIHJldHVybiBfcmVmMzAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZ2V0UHVibGljS2V5XCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMzEgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzMShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzMSQoX2NvbnRleHQzMSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDMxLnByZXYgPSBfY29udGV4dDMxLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDMxLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2dldFB1YmxpY0tleSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzEuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MzEuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzEuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTMxKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gzMCkge1xuICAgIHJldHVybiBfcmVmMzEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwibGlza0dldEFkZHJlc3NcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYzMiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMyKHBhcmFtcykge1xuICAgIHZhciB1c2VFdmVudExpc3RlbmVyO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTMyJChfY29udGV4dDMyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MzIucHJldiA9IF9jb250ZXh0MzIubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXIgPSBldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChVSS5BRERSRVNTX1ZBTElEQVRJT04pID4gMDtcbiAgICAgICAgICAgIF9jb250ZXh0MzIubmV4dCA9IDM7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnbGlza0dldEFkZHJlc3MnXG4gICAgICAgICAgICB9LCBwYXJhbXMsIHtcbiAgICAgICAgICAgICAgdXNlRXZlbnRMaXN0ZW5lcjogdXNlRXZlbnRMaXN0ZW5lclxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzIuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MzIuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTMyKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gzMSkge1xuICAgIHJldHVybiBfcmVmMzIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwibGlza0dldFB1YmxpY0tleVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjMzID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMzMocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMzMkKF9jb250ZXh0MzMpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQzMy5wcmV2ID0gX2NvbnRleHQzMy5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQzMy5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdsaXNrR2V0UHVibGljS2V5J1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzMy5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQzMy5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzMy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMzMpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDMyKSB7XG4gICAgcmV0dXJuIF9yZWYzMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJsaXNrU2lnbk1lc3NhZ2VcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYzNCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTM0KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTM0JChfY29udGV4dDM0KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MzQucHJldiA9IF9jb250ZXh0MzQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0MzQubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnbGlza1NpZ25NZXNzYWdlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzNC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQzNC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzNC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMzQpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDMzKSB7XG4gICAgcmV0dXJuIF9yZWYzNC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJsaXNrU2lnblRyYW5zYWN0aW9uXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMzUgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzNShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzNSQoX2NvbnRleHQzNSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDM1LnByZXYgPSBfY29udGV4dDM1Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDM1Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2xpc2tTaWduVHJhbnNhY3Rpb24nXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDM1LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDM1LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDM1LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUzNSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MzQpIHtcbiAgICByZXR1cm4gX3JlZjM1LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImxpc2tWZXJpZnlNZXNzYWdlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMzYgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzNihwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzNiQoX2NvbnRleHQzNikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDM2LnByZXYgPSBfY29udGV4dDM2Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDM2Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2xpc2tWZXJpZnlNZXNzYWdlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzNi5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQzNi5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzNi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMzYpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDM1KSB7XG4gICAgcmV0dXJuIF9yZWYzNi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJuZW1HZXRBZGRyZXNzXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMzcgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzNyhwYXJhbXMpIHtcbiAgICB2YXIgdXNlRXZlbnRMaXN0ZW5lcjtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzNyQoX2NvbnRleHQzNykge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDM3LnByZXYgPSBfY29udGV4dDM3Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB1c2VFdmVudExpc3RlbmVyID0gZXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQoVUkuQUREUkVTU19WQUxJREFUSU9OKSA+IDA7XG4gICAgICAgICAgICBfY29udGV4dDM3Lm5leHQgPSAzO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ25lbUdldEFkZHJlc3MnXG4gICAgICAgICAgICB9LCBwYXJhbXMsIHtcbiAgICAgICAgICAgICAgdXNlRXZlbnRMaXN0ZW5lcjogdXNlRXZlbnRMaXN0ZW5lclxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzcuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0Mzcuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mzcuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTM3KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gzNikge1xuICAgIHJldHVybiBfcmVmMzcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwibmVtU2lnblRyYW5zYWN0aW9uXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMzggPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzOChwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzOCQoX2NvbnRleHQzOCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDM4LnByZXYgPSBfY29udGV4dDM4Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDM4Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ25lbVNpZ25UcmFuc2FjdGlvbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzguYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0Mzguc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mzguc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTM4KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gzNykge1xuICAgIHJldHVybiBfcmVmMzguYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwicHVzaFRyYW5zYWN0aW9uXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMzkgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzOShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzOSQoX2NvbnRleHQzOSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDM5LnByZXYgPSBfY29udGV4dDM5Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDM5Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3B1c2hUcmFuc2FjdGlvbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzkuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0Mzkuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mzkuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTM5KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gzOCkge1xuICAgIHJldHVybiBfcmVmMzkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwicmlwcGxlR2V0QWNjb3VudEluZm9cIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY0MCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQwKHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQwJChfY29udGV4dDQwKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NDAucHJldiA9IF9jb250ZXh0NDAubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NDAubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAncmlwcGxlR2V0QWNjb3VudEluZm8nXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQwLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDQwLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQwLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU0MCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MzkpIHtcbiAgICByZXR1cm4gX3JlZjQwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcInJpcHBsZUdldEFkZHJlc3NcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY0MSA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQxKHBhcmFtcykge1xuICAgIHZhciB1c2VFdmVudExpc3RlbmVyO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQxJChfY29udGV4dDQxKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NDEucHJldiA9IF9jb250ZXh0NDEubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXIgPSBldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChVSS5BRERSRVNTX1ZBTElEQVRJT04pID4gMDtcbiAgICAgICAgICAgIF9jb250ZXh0NDEubmV4dCA9IDM7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAncmlwcGxlR2V0QWRkcmVzcydcbiAgICAgICAgICAgIH0sIHBhcmFtcywge1xuICAgICAgICAgICAgICB1c2VFdmVudExpc3RlbmVyOiB1c2VFdmVudExpc3RlbmVyXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0MS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ0MS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0MS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNDEpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDQwKSB7XG4gICAgcmV0dXJuIF9yZWY0MS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJyaXBwbGVTaWduVHJhbnNhY3Rpb25cIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY0MiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQyKHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQyJChfY29udGV4dDQyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NDIucHJldiA9IF9jb250ZXh0NDIubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NDIubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAncmlwcGxlU2lnblRyYW5zYWN0aW9uJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ0Mi5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0Mi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNDIpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDQxKSB7XG4gICAgcmV0dXJuIF9yZWY0Mi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJzaWduTWVzc2FnZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjQzID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNDMocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNDMkKF9jb250ZXh0NDMpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0My5wcmV2ID0gX2NvbnRleHQ0My5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ0My5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdzaWduTWVzc2FnZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDMuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NDMuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTQzKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g0Mikge1xuICAgIHJldHVybiBfcmVmNDMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwic2lnblRyYW5zYWN0aW9uXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNDQgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0NChwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0NCQoX2NvbnRleHQ0NCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDQ0LnByZXYgPSBfY29udGV4dDQ0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDQ0Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3NpZ25UcmFuc2FjdGlvbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDQuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NDQuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTQ0KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g0Mykge1xuICAgIHJldHVybiBfcmVmNDQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwic3RlbGxhckdldEFkZHJlc3NcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY0NSA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQ1KHBhcmFtcykge1xuICAgIHZhciB1c2VFdmVudExpc3RlbmVyO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQ1JChfY29udGV4dDQ1KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NDUucHJldiA9IF9jb250ZXh0NDUubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXIgPSBldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChVSS5BRERSRVNTX1ZBTElEQVRJT04pID4gMDtcbiAgICAgICAgICAgIF9jb250ZXh0NDUubmV4dCA9IDM7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnc3RlbGxhckdldEFkZHJlc3MnXG4gICAgICAgICAgICB9LCBwYXJhbXMsIHtcbiAgICAgICAgICAgICAgdXNlRXZlbnRMaXN0ZW5lcjogdXNlRXZlbnRMaXN0ZW5lclxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDUuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NDUuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDUuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTQ1KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g0NCkge1xuICAgIHJldHVybiBfcmVmNDUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwic3RlbGxhclNpZ25UcmFuc2FjdGlvblwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjQ2ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNDYocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNDYkKF9jb250ZXh0NDYpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0Ni5wcmV2ID0gX2NvbnRleHQ0Ni5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ0Ni5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdzdGVsbGFyU2lnblRyYW5zYWN0aW9uJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0Ni5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ0Ni5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0Ni5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNDYpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDQ1KSB7XG4gICAgcmV0dXJuIF9yZWY0Ni5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJ0ZXpvc0dldEFkZHJlc3NcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY0NyA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQ3KHBhcmFtcykge1xuICAgIHZhciB1c2VFdmVudExpc3RlbmVyO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQ3JChfY29udGV4dDQ3KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NDcucHJldiA9IF9jb250ZXh0NDcubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXIgPSBldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChVSS5BRERSRVNTX1ZBTElEQVRJT04pID4gMDtcbiAgICAgICAgICAgIF9jb250ZXh0NDcubmV4dCA9IDM7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAndGV6b3NHZXRBZGRyZXNzJ1xuICAgICAgICAgICAgfSwgcGFyYW1zLCB7XG4gICAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXI6IHVzZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQ3LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDQ3LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQ3LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU0Nyk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NDYpIHtcbiAgICByZXR1cm4gX3JlZjQ3LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcInRlem9zR2V0UHVibGljS2V5XCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNDggPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0OChwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0OCQoX2NvbnRleHQ0OCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDQ4LnByZXYgPSBfY29udGV4dDQ4Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDQ4Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3Rlem9zR2V0UHVibGljS2V5J1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0OC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ0OC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0OC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNDgpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDQ3KSB7XG4gICAgcmV0dXJuIF9yZWY0OC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJ0ZXpvc1NpZ25UcmFuc2FjdGlvblwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjQ5ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNDkocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNDkkKF9jb250ZXh0NDkpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0OS5wcmV2ID0gX2NvbnRleHQ0OS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ0OS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICd0ZXpvc1NpZ25UcmFuc2FjdGlvbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDkuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NDkuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDkuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTQ5KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g0OCkge1xuICAgIHJldHVybiBfcmVmNDkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZW9zR2V0UHVibGljS2V5XCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNTAgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU1MChwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1MCQoX2NvbnRleHQ1MCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDUwLnByZXYgPSBfY29udGV4dDUwLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDUwLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2Vvc0dldFB1YmxpY0tleSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTAuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NTAuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTAuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTUwKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g0OSkge1xuICAgIHJldHVybiBfcmVmNTAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZW9zU2lnblRyYW5zYWN0aW9uXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNTEgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU1MShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1MSQoX2NvbnRleHQ1MSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDUxLnByZXYgPSBfY29udGV4dDUxLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDUxLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2Vvc1NpZ25UcmFuc2FjdGlvbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTEuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NTEuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTEuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTUxKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g1MCkge1xuICAgIHJldHVybiBfcmVmNTEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwidmVyaWZ5TWVzc2FnZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjUyID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNTIocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNTIkKF9jb250ZXh0NTIpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1Mi5wcmV2ID0gX2NvbnRleHQ1Mi5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ1Mi5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICd2ZXJpZnlNZXNzYWdlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ1Mi5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1Mi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNTIpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDUxKSB7XG4gICAgcmV0dXJuIF9yZWY1Mi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJ3aXBlRGV2aWNlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNTMgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU1MyhwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1MyQoX2NvbnRleHQ1Mykge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDUzLnByZXYgPSBfY29udGV4dDUzLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDUzLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3dpcGVEZXZpY2UnXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUzLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDUzLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU1Myk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NTIpIHtcbiAgICByZXR1cm4gX3JlZjUzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImFwcGx5RmxhZ3NcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY1NCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTU0KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTU0JChfY29udGV4dDU0KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NTQucHJldiA9IF9jb250ZXh0NTQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NTQubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnYXBwbHlGbGFncydcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTQuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NTQuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTU0KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g1Mykge1xuICAgIHJldHVybiBfcmVmNTQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiYXBwbHlTZXR0aW5nc1wiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjU1ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNTUocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNTUkKF9jb250ZXh0NTUpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1NS5wcmV2ID0gX2NvbnRleHQ1NS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ1NS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdhcHBseVNldHRpbmdzJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1NS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ1NS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1NS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNTUpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDU0KSB7XG4gICAgcmV0dXJuIF9yZWY1NS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJiYWNrdXBEZXZpY2VcIixcbi8qI19fUFVSRV9fKi9cbigwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbi8qI19fUFVSRV9fKi9cbl9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNTYoKSB7XG4gIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTU2JChfY29udGV4dDU2KSB7XG4gICAgd2hpbGUgKDEpIHtcbiAgICAgIHN3aXRjaCAoX2NvbnRleHQ1Ni5wcmV2ID0gX2NvbnRleHQ1Ni5uZXh0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBfY29udGV4dDU2Lm5leHQgPSAyO1xuICAgICAgICAgIHJldHVybiBjYWxsKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2JhY2t1cERldmljZSdcbiAgICAgICAgICB9KTtcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTYuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NTYuc2VudCk7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTYuc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgX2NhbGxlZTU2KTtcbn0pKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiY2hhbmdlUGluXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNTcgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU1NyhwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1NyQoX2NvbnRleHQ1Nykge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDU3LnByZXYgPSBfY29udGV4dDU3Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDU3Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2NoYW5nZVBpbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTcuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NTcuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTcuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTU3KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g1NSkge1xuICAgIHJldHVybiBfcmVmNTcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZmlybXdhcmVFcmFzZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjU4ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNTgocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNTgkKF9jb250ZXh0NTgpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1OC5wcmV2ID0gX2NvbnRleHQ1OC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ1OC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdmaXJtd2FyZUVyYXNlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1OC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ1OC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1OC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNTgpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDU2KSB7XG4gICAgcmV0dXJuIF9yZWY1OC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJmaXJtd2FyZVVwbG9hZFwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjU5ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNTkocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNTkkKF9jb250ZXh0NTkpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1OS5wcmV2ID0gX2NvbnRleHQ1OS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ1OS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdmaXJtd2FyZVVwbG9hZCdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTkuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NTkuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTkuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTU5KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g1Nykge1xuICAgIHJldHVybiBfcmVmNTkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZmlybXdhcmVVcGRhdGVcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY2MCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTYwKHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTYwJChfY29udGV4dDYwKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NjAucHJldiA9IF9jb250ZXh0NjAubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NjAubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnZmlybXdhcmVVcGRhdGUnXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYwLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDYwLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYwLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU2MCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NTgpIHtcbiAgICByZXR1cm4gX3JlZjYwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcInJlY292ZXJ5RGV2aWNlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNjEgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU2MShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU2MSQoX2NvbnRleHQ2MSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDYxLnByZXYgPSBfY29udGV4dDYxLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDYxLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3JlY292ZXJ5RGV2aWNlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2MS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ2MS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2MS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNjEpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDU5KSB7XG4gICAgcmV0dXJuIF9yZWY2MS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJkaXNwb3NlXCIsIGZ1bmN0aW9uICgpIHtcbiAgaWZyYW1lLmRpc3Bvc2UoKTtcblxuICBpZiAoX3BvcHVwTWFuYWdlcikge1xuICAgIF9wb3B1cE1hbmFnZXIuY2xvc2UoKTtcbiAgfVxufSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiY2FuY2VsXCIsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKF9wb3B1cE1hbmFnZXIpIHtcbiAgICBfcG9wdXBNYW5hZ2VyLmVtaXQoUE9QVVAuQ0xPU0VEKTtcbiAgfVxufSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwicmVuZGVyV2ViVVNCQnV0dG9uXCIsIGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgKDAsIF9idXR0b25bXCJkZWZhdWx0XCJdKShjbGFzc05hbWUsIF9zZXR0aW5ncy53ZWJ1c2JTcmMsIGlmcmFtZS5vcmlnaW4pO1xufSk7XG52YXIgX2RlZmF1bHQgPSBUcmV6b3JDb25uZWN0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnBhcnNlTWVzc2FnZSA9IHZvaWQgMDtcblxuLy8gcGFyc2UgTWVzc2FnZUV2ZW50IC5kYXRhIGludG8gQ29yZU1lc3NhZ2VcbnZhciBwYXJzZU1lc3NhZ2UgPSBmdW5jdGlvbiBwYXJzZU1lc3NhZ2UobWVzc2FnZURhdGEpIHtcbiAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgZXZlbnQ6IG1lc3NhZ2VEYXRhLmV2ZW50LFxuICAgIHR5cGU6IG1lc3NhZ2VEYXRhLnR5cGUsXG4gICAgcGF5bG9hZDogbWVzc2FnZURhdGEucGF5bG9hZFxuICB9O1xuXG4gIGlmICh0eXBlb2YgbWVzc2FnZURhdGEuaWQgPT09ICdudW1iZXInKSB7XG4gICAgbWVzc2FnZS5pZCA9IG1lc3NhZ2VEYXRhLmlkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBtZXNzYWdlRGF0YS5zdWNjZXNzID09PSAnYm9vbGVhbicpIHtcbiAgICBtZXNzYWdlLnN1Y2Nlc3MgPSBtZXNzYWdlRGF0YS5zdWNjZXNzO1xuICB9XG5cbiAgcmV0dXJuIG1lc3NhZ2U7XG59O1xuXG5leHBvcnRzLnBhcnNlTWVzc2FnZSA9IHBhcnNlTWVzc2FnZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVnZW5lcmF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKSk7XG5cbnZhciBfYXN5bmNUb0dlbmVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIikpO1xuXG52YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKSk7XG5cbnZhciBfaW5oZXJpdHNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2VcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2V2ZW50cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImV2ZW50c1wiKSk7XG5cbnZhciBQT1BVUCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9jb25zdGFudHMvcG9wdXBcIikpO1xuXG52YXIgRVJST1IgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vY29uc3RhbnRzL2Vycm9yc1wiKSk7XG5cbnZhciBfc2hvd1BvcHVwUmVxdWVzdCA9IHJlcXVpcmUoXCIuL3Nob3dQb3B1cFJlcXVlc3RcIik7XG5cbnZhciBfbmV0d29ya1V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzL25ldHdvcmtVdGlsc1wiKTtcblxudmFyIF9kZWZlcnJlZCA9IHJlcXVpcmUoXCIuLi91dGlscy9kZWZlcnJlZFwiKTtcblxuLy8gY29uc3QgUE9QVVBfUkVRVUVTVF9USU1FT1VUOiBudW1iZXIgPSA2MDI7XG52YXIgUE9QVVBfUkVRVUVTVF9USU1FT1VUID0gODUwO1xudmFyIFBPUFVQX0NMT1NFX0lOVEVSVkFMID0gNTAwO1xudmFyIFBPUFVQX09QRU5fVElNRU9VVCA9IDIwMDA7XG5cbnZhciBQb3B1cE1hbmFnZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9FdmVudEVtaXR0ZXIpIHtcbiAgKDAsIF9pbmhlcml0c0xvb3NlMltcImRlZmF1bHRcIl0pKFBvcHVwTWFuYWdlciwgX0V2ZW50RW1pdHRlcik7XG5cbiAgLy8gV2luZG93XG4gIGZ1bmN0aW9uIFBvcHVwTWFuYWdlcihzZXR0aW5ncykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0V2ZW50RW1pdHRlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSgoMCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZDJbXCJkZWZhdWx0XCJdKShfdGhpcyksIFwicmVxdWVzdFRpbWVvdXRcIiwgMCk7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSgoMCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZDJbXCJkZWZhdWx0XCJdKShfdGhpcyksIFwiY2xvc2VJbnRlcnZhbFwiLCAwKTtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKCgwLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkMltcImRlZmF1bHRcIl0pKF90aGlzKSwgXCJleHRlbnNpb25cIiwgZmFsc2UpO1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoKDAsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQyW1wiZGVmYXVsdFwiXSkoX3RoaXMpLCBcImV4dGVuc2lvblRhYklkXCIsIDApO1xuICAgIF90aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgX3RoaXMuc3JjID0gc2V0dGluZ3MucG9wdXBTcmM7XG4gICAgX3RoaXMub3JpZ2luID0gKDAsIF9uZXR3b3JrVXRpbHMuZ2V0T3JpZ2luKShzZXR0aW5ncy5wb3B1cFNyYyk7XG4gICAgX3RoaXMuaGFuZGxlTGF6eUxvYWRpbmcgPSBfdGhpcy5oYW5kbGVMYXp5TG9hZGluZy5iaW5kKCgwLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkMltcImRlZmF1bHRcIl0pKF90aGlzKSk7IC8vICRGbG93SXNzdWUgY2hyb21lIG5vdCBkZWNsYXJlZCBvdXRzaWRlXG5cbiAgICBfdGhpcy5leHRlbnNpb24gPSB0eXBlb2YgY2hyb21lICE9PSAndW5kZWZpbmVkJyAmJiBjaHJvbWUucnVudGltZSAmJiB0eXBlb2YgY2hyb21lLnJ1bnRpbWUub25Db25uZWN0ICE9PSAndW5kZWZpbmVkJztcblxuICAgIGlmIChfdGhpcy5leHRlbnNpb24pIHtcbiAgICAgIF90aGlzLmhhbmRsZUV4dGVuc2lvbkNvbm5lY3QgPSBfdGhpcy5oYW5kbGVFeHRlbnNpb25Db25uZWN0LmJpbmQoKDAsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQyW1wiZGVmYXVsdFwiXSkoX3RoaXMpKTtcbiAgICAgIF90aGlzLmhhbmRsZUV4dGVuc2lvbk1lc3NhZ2UgPSBfdGhpcy5oYW5kbGVFeHRlbnNpb25NZXNzYWdlLmJpbmQoKDAsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQyW1wiZGVmYXVsdFwiXSkoX3RoaXMpKTsgLy8gJEZsb3dJc3N1ZSBjaHJvbWUgbm90IGRlY2xhcmVkIG91dHNpZGVcblxuICAgICAgY2hyb21lLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKF90aGlzLmhhbmRsZUV4dGVuc2lvbkNvbm5lY3QpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBQb3B1cE1hbmFnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChsYXp5TG9hZCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKGxhenlMb2FkID09PSB2b2lkIDApIHtcbiAgICAgIGxhenlMb2FkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gcG9wdXAgcmVxdWVzdFxuICAgIC8vIFRPRE86IGllIC0gb3BlbiBpbWVkaWF0ZWx5IGFuZCBoaWRlIGl0IGJ1dCBwb3N0IGhhbmRzaGFrZSBhZnRlciB0aW1lb3V0XG4gICAgLy8gYnJpbmcgcG9wdXAgd2luZG93IHRvIGZyb250XG4gICAgaWYgKHRoaXMubG9ja2VkKSB7XG4gICAgICBpZiAodGhpcy5fd2luZG93KSB7XG4gICAgICAgIGlmICh0aGlzLmV4dGVuc2lvbikge1xuICAgICAgICAgIC8vICRGbG93SXNzdWUgY2hyb21lIG5vdCBkZWNsYXJlZCBvdXRzaWRlXG4gICAgICAgICAgY2hyb21lLnRhYnMudXBkYXRlKHRoaXMuX3dpbmRvdy5pZCwge1xuICAgICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fd2luZG93LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubGF6eUxvYWQgPSBsYXp5TG9hZCA/ICgwLCBfZGVmZXJyZWQuY3JlYXRlKShQT1BVUC5JTklUKSA6IG51bGw7XG5cbiAgICBpZiAodGhpcy5sYXp5TG9hZCkge1xuICAgICAgaWYgKCF0aGlzLmV4dGVuc2lvbikge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuaGFuZGxlTGF6eUxvYWRpbmcsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgb3BlbkZuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2NrZWQgPSB0cnVlO1xuXG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLnN1cHBvcnRlZEJyb3dzZXIpIHtcbiAgICAgIG9wZW5GbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlcXVlc3RUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIucmVxdWVzdFRpbWVvdXQgPSAwO1xuICAgICAgICBvcGVuRm4oKTtcbiAgICAgIH0sIGxhenlMb2FkIHx8IHRoaXMuZXh0ZW5zaW9uID8gMSA6IFBPUFVQX1JFUVVFU1RfVElNRU9VVCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9O1xuXG4gIF9wcm90by51bmxvY2sgPSBmdW5jdGlvbiB1bmxvY2soKSB7XG4gICAgdGhpcy5sb2NrZWQgPSBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8ub3BlbiA9IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuc2V0dGluZ3Muc3VwcG9ydGVkQnJvd3Nlcikge1xuICAgICAgdGhpcy5vcGVuV3JhcHBlcih0aGlzLnNyYyArICcjdW5zdXBwb3J0ZWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9wZW5XcmFwcGVyKHRoaXMubGF6eUxvYWQgPyB0aGlzLnNyYyArICcjbG9hZGluZycgOiB0aGlzLnNyYyk7XG4gICAgdGhpcy5jbG9zZUludGVydmFsID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpczMuX3dpbmRvdykge1xuICAgICAgICBpZiAoX3RoaXMzLmV4dGVuc2lvbikge1xuICAgICAgICAgIC8vICRGbG93SXNzdWUgY2hyb21lIG5vdCBkZWNsYXJlZCBvdXRzaWRlXG4gICAgICAgICAgY2hyb21lLnRhYnMuZ2V0KF90aGlzMy5fd2luZG93LmlkLCBmdW5jdGlvbiAodGFiKSB7XG4gICAgICAgICAgICBpZiAoIXRhYikge1xuICAgICAgICAgICAgICBfdGhpczMuY2xvc2UoKTtcblxuICAgICAgICAgICAgICBfdGhpczMuZW1pdChQT1BVUC5DTE9TRUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKF90aGlzMy5fd2luZG93LmNsb3NlZCkge1xuICAgICAgICAgIF90aGlzMy5jbG9zZSgpO1xuXG4gICAgICAgICAgX3RoaXMzLmVtaXQoUE9QVVAuQ0xPU0VEKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFBPUFVQX0NMT1NFX0lOVEVSVkFMKTtcbiAgICB0aGlzLm9wZW5UaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCEoX3RoaXMzLl93aW5kb3cgJiYgIV90aGlzMy5fd2luZG93LmNsb3NlZCkpIHtcbiAgICAgICAgX3RoaXMzLmNsb3NlKCk7XG5cbiAgICAgICAgKDAsIF9zaG93UG9wdXBSZXF1ZXN0LnNob3dQb3B1cFJlcXVlc3QpKF90aGlzMy5vcGVuLmJpbmQoX3RoaXMzKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMy5lbWl0KFBPUFVQLkNMT1NFRCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFBPUFVQX09QRU5fVElNRU9VVCk7XG4gIH07XG5cbiAgX3Byb3RvLm9wZW5XcmFwcGVyID0gZnVuY3Rpb24gb3BlbldyYXBwZXIodXJsKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5leHRlbnNpb24pIHtcbiAgICAgIC8vICRGbG93SXNzdWUgY2hyb21lIG5vdCBkZWNsYXJlZCBvdXRzaWRlXG4gICAgICBjaHJvbWUud2luZG93cy5nZXRDdXJyZW50KG51bGwsIGZ1bmN0aW9uIChjdXJyZW50V2luZG93KSB7XG4gICAgICAgIC8vIFJlcXVlc3QgY29taW5nIGZyb20gZXh0ZW5zaW9uIHBvcHVwLFxuICAgICAgICAvLyBjcmVhdGUgbmV3IHdpbmRvdyBhYm92ZSBpbnN0ZWFkIG9mIG9wZW5pbmcgbmV3IHRhYlxuICAgICAgICBpZiAoY3VycmVudFdpbmRvdy50eXBlICE9PSAnbm9ybWFsJykge1xuICAgICAgICAgIC8vICRGbG93SXNzdWUgY2hyb21lIG5vdCBkZWNsYXJlZCBvdXRzaWRlXG4gICAgICAgICAgY2hyb21lLndpbmRvd3MuY3JlYXRlKHtcbiAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgfSwgZnVuY3Rpb24gKG5ld1dpbmRvdykge1xuICAgICAgICAgICAgLy8gJEZsb3dJc3N1ZSBjaHJvbWUgbm90IGRlY2xhcmVkIG91dHNpZGVcbiAgICAgICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHtcbiAgICAgICAgICAgICAgd2luZG93SWQ6IG5ld1dpbmRvdy5pZCxcbiAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAodGFicykge1xuICAgICAgICAgICAgICBfdGhpczQuX3dpbmRvdyA9IHRhYnNbMF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAkRmxvd0lzc3VlIGNocm9tZSBub3QgZGVjbGFyZWQgb3V0c2lkZVxuICAgICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGN1cnJlbnRXaW5kb3c6IHRydWUsXG4gICAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgICB9LCBmdW5jdGlvbiAodGFicykge1xuICAgICAgICAgICAgX3RoaXM0LmV4dGVuc2lvblRhYklkID0gdGFic1swXS5pZDsgLy8gJEZsb3dJc3N1ZSBjaHJvbWUgbm90IGRlY2xhcmVkIG91dHNpZGVcblxuICAgICAgICAgICAgY2hyb21lLnRhYnMuY3JlYXRlKHtcbiAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgIGluZGV4OiB0YWJzWzBdLmluZGV4ICsgMVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHRhYikge1xuICAgICAgICAgICAgICBfdGhpczQuX3dpbmRvdyA9IHRhYjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fd2luZG93ID0gd2luZG93Lm9wZW4oJycsICdfYmxhbmsnKTtcblxuICAgICAgaWYgKHRoaXMuX3dpbmRvdykge1xuICAgICAgICB0aGlzLl93aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDsgLy8gb3RoZXJ3aXNlIGFuZHJvaWQvY2hyb21lIGxvb3NlIHdpbmRvdy5vcGVuZXIgcmVmZXJlbmNlXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oYW5kbGVFeHRlbnNpb25Db25uZWN0ID0gZnVuY3Rpb24gaGFuZGxlRXh0ZW5zaW9uQ29ubmVjdChwb3J0KSB7XG4gICAgaWYgKHBvcnQubmFtZSA9PT0gJ3RyZXpvci1jb25uZWN0Jykge1xuICAgICAgaWYgKCF0aGlzLl93aW5kb3cgfHwgdGhpcy5fd2luZG93ICYmIHRoaXMuX3dpbmRvdy5pZCAhPT0gcG9ydC5zZW5kZXIudGFiLmlkKSB7XG4gICAgICAgIHBvcnQuZGlzY29ubmVjdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZXh0ZW5zaW9uUG9ydCA9IHBvcnQ7IC8vICRGbG93SXNzdWUgbmVlZCB0byB1cGRhdGUgQ2hyb21lUG9ydCBkZWZpbml0aW9uXG5cbiAgICAgIHRoaXMuZXh0ZW5zaW9uUG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVFeHRlbnNpb25NZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKHBvcnQubmFtZSA9PT0gJ3RyZXpvci11c2ItcGVybWlzc2lvbnMnKSB7XG4gICAgICBwb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgYnJvYWRjYXN0OiB0aGlzLmJyb2FkY2FzdFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oYW5kbGVFeHRlbnNpb25NZXNzYWdlID0gZnVuY3Rpb24gaGFuZGxlRXh0ZW5zaW9uTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgaWYgKCF0aGlzLmV4dGVuc2lvblBvcnQpIHJldHVybjtcblxuICAgIGlmIChtZXNzYWdlID09PSBQT1BVUC5FWFRFTlNJT05fUkVRVUVTVCkge1xuICAgICAgdGhpcy5leHRlbnNpb25Qb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogUE9QVVAuRVhURU5TSU9OX1JFUVVFU1QsXG4gICAgICAgIGJyb2FkY2FzdDogdGhpcy5icm9hZGNhc3RcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gUE9QVVAuSU5JVCAmJiB0aGlzLmxhenlMb2FkKSB7XG4gICAgICB0aGlzLmxhenlMb2FkLnJlc29sdmUodHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlID09PSBQT1BVUC5FWFRFTlNJT05fVVNCX1BFUk1JU1NJT05TKSB7XG4gICAgICAvLyAkRmxvd0lzc3VlIGNocm9tZSBub3QgZGVjbGFyZWQgb3V0c2lkZVxuICAgICAgY2hyb21lLnRhYnMucXVlcnkoe1xuICAgICAgICBjdXJyZW50V2luZG93OiB0cnVlLFxuICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgIH0sIGZ1bmN0aW9uICh0YWJzKSB7XG4gICAgICAgIC8vICRGbG93SXNzdWUgY2hyb21lIG5vdCBkZWNsYXJlZCBvdXRzaWRlXG4gICAgICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7XG4gICAgICAgICAgdXJsOiAndHJlem9yLXVzYi1wZXJtaXNzaW9ucy5odG1sJyxcbiAgICAgICAgICBpbmRleDogdGFic1swXS5pbmRleCArIDFcbiAgICAgICAgfSwgZnVuY3Rpb24gKHRhYikgey8vIGRvIG5vdGhpbmdcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09IFBPUFVQLkNMT1NFX1dJTkRPVykge1xuICAgICAgdGhpcy5lbWl0KFBPUFVQLkNMT1NFRCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXRCcm9hZGNhc3QgPSBmdW5jdGlvbiBzZXRCcm9hZGNhc3QoYnJvYWRjYXN0KSB7XG4gICAgdGhpcy5icm9hZGNhc3QgPSBicm9hZGNhc3Q7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUxhenlMb2FkaW5nID0gZnVuY3Rpb24gaGFuZGxlTGF6eUxvYWRpbmcoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5sYXp5TG9hZCAmJiBldmVudC5kYXRhICYmIGV2ZW50LmRhdGEgPT09IFBPUFVQLklOSVQpIHtcbiAgICAgIHRoaXMubGF6eUxvYWQucmVzb2x2ZSh0cnVlKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5oYW5kbGVMYXp5TG9hZGluZywgZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVzb2x2ZUxhenlMb2FkID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZXNvbHZlTGF6eUxvYWQgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmxhenlMb2FkKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMztcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF6eUxvYWQucHJvbWlzZTtcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgdGhyb3cgRVJST1IuUE9QVVBfQ0xPU0VELm1lc3NhZ2U7XG5cbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXh0ZW5zaW9uUG9ydCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5leHRlbnNpb25Qb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUE9QVVAuSU5JVFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3dpbmRvdykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBQT1BVUC5JTklUXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5vcmlnaW4pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIF9jYWxsZWUsIHRoaXMpO1xuICAgIH0pKTtcblxuICAgIGZ1bmN0aW9uIHJlc29sdmVMYXp5TG9hZCgpIHtcbiAgICAgIHJldHVybiBfcmVzb2x2ZUxhenlMb2FkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc29sdmVMYXp5TG9hZDtcbiAgfSgpO1xuXG4gIF9wcm90by5jbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5yZXF1ZXN0VGltZW91dCkge1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJlcXVlc3RUaW1lb3V0KTtcbiAgICAgIHRoaXMucmVxdWVzdFRpbWVvdXQgPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wZW5UaW1lb3V0KSB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMub3BlblRpbWVvdXQpO1xuICAgICAgdGhpcy5vcGVuVGltZW91dCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2xvc2VJbnRlcnZhbCkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5jbG9zZUludGVydmFsKTtcbiAgICAgIHRoaXMuY2xvc2VJbnRlcnZhbCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZXh0ZW5zaW9uUG9ydCkge1xuICAgICAgdGhpcy5leHRlbnNpb25Qb3J0LmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMuZXh0ZW5zaW9uUG9ydCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZXh0ZW5zaW9uVGFiSWQpIHtcbiAgICAgIC8vICRGbG93SXNzdWUgY2hyb21lIG5vdCBkZWNsYXJlZCBvdXRzaWRlXG4gICAgICBjaHJvbWUudGFicy51cGRhdGUodGhpcy5leHRlbnNpb25UYWJJZCwge1xuICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5leHRlbnNpb25UYWJJZCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGF6eUxvYWQpIHtcbiAgICAgIHRoaXMubGF6eUxvYWQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl93aW5kb3cpIHtcbiAgICAgIGlmICh0aGlzLmV4dGVuc2lvbikge1xuICAgICAgICAvLyAkRmxvd0lzc3VlIGNocm9tZSBub3QgZGVjbGFyZWQgb3V0c2lkZVxuICAgICAgICBjaHJvbWUudGFicy5yZW1vdmUodGhpcy5fd2luZG93LmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3dpbmRvdy5jbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl93aW5kb3cgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucG9zdE1lc3NhZ2UgPSBmdW5jdGlvbiBwb3N0TWVzc2FnZShtZXNzYWdlKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAvLyBwb3N0IG1lc3NhZ2UgYmVmb3JlIHBvcHVwIHJlcXVlc3QgZmluYWxpemVkXG4gICAgaWYgKHRoaXMucmVxdWVzdFRpbWVvdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIGRldmljZSBuZWVkcyBpbnRlcmFjdGlvbiBidXQgdGhlcmUgaXMgbm8gcG9wdXAvdWlcbiAgICAvLyBtYXliZSBwb3B1cCByZXF1ZXN0IHdhc24ndCBoYW5kbGVkXG4gICAgLy8gaWdub3JlIFwidWlfcmVxdWVzdF93aW5kb3dcIiB0eXBlXG5cblxuICAgIGlmICghdGhpcy5fd2luZG93ICYmIG1lc3NhZ2UudHlwZSAhPT0gJ3VpX3JlcXVlc3Rfd2luZG93JyAmJiB0aGlzLm9wZW5UaW1lb3V0KSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAoMCwgX3Nob3dQb3B1cFJlcXVlc3Quc2hvd1BvcHVwUmVxdWVzdCkodGhpcy5vcGVuLmJpbmQodGhpcyksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXM1LmVtaXQoUE9QVVAuQ0xPU0VEKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gcG9zdCBtZXNzYWdlIHRvIHBvcHVwIHdpbmRvd1xuXG5cbiAgICBpZiAodGhpcy5fd2luZG93KSB7XG4gICAgICB0aGlzLl93aW5kb3cucG9zdE1lc3NhZ2UobWVzc2FnZSwgdGhpcy5vcmlnaW4pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25CZWZvcmVVbmxvYWQgPSBmdW5jdGlvbiBvbkJlZm9yZVVubG9hZCgpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbE9wZW5UaW1lb3V0ID0gZnVuY3Rpb24gY2FuY2VsT3BlblRpbWVvdXQoKSB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLm9wZW5UaW1lb3V0KTtcbiAgfTtcblxuICByZXR1cm4gUG9wdXBNYW5hZ2VyO1xufShfZXZlbnRzW1wiZGVmYXVsdFwiXSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUG9wdXBNYW5hZ2VyOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2hvd1BvcHVwUmVxdWVzdCA9IHZvaWQgMDtcbnZhciBsYXllcklEID0gJ1RyZXpvckNvbm5lY3RJbnRlcmFjdGlvbkxheWVyJztcbnZhciBsYXllcklubmVySHRtbCA9IFwiXFxuICAgIDxkaXYgY2xhc3M9XFxcInRyZXpvcmNvbm5lY3QtY29udGFpbmVyXFxcIiBpZD1cXFwiXCIgKyBsYXllcklEICsgXCJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidHJlem9yY29ubmVjdC13aW5kb3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRyZXpvcmNvbm5lY3QtaGVhZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcInRyZXpvcmNvbm5lY3QtbG9nb1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNjMuNyA0MS45XFxcIiB3aWR0aD1cXFwiNzhweFxcXCIgaGVpZ2h0PVxcXCIyMHB4XFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWluWU1pbiBtZWV0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cXFwiMTAxLjEsMTIuOCAxMTguMiwxMi44IDExOC4yLDE3LjMgMTA4LjksMjkuOSAxMTguMiwyOS45IDExOC4yLDM1LjIgMTAxLjEsMzUuMiAxMDEuMSwzMC43IDExMC40LDE4LjEgMTAxLjEsMTguMVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cXFwiTTE1OC44LDI2LjljMi4xLTAuOCw0LjMtMi45LDQuMy02LjZjMC00LjUtMy4xLTcuNC03LjctNy40aC0xMC41djIyLjNoNS44di03LjVoMi4ybDQuMSw3LjVoNi43TDE1OC44LDI2Ljl6IE0xNTQuNywyMi41IGgtNFYxOGg0YzEuNSwwLDIuNSwwLjksMi41LDIuMkMxNTcuMiwyMS42LDE1Ni4yLDIyLjUsMTU0LjcsMjIuNXpcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XFxcIk0xMzAuOCwxMi41Yy02LjgsMC0xMS42LDQuOS0xMS42LDExLjVzNC45LDExLjUsMTEuNiwxMS41czExLjctNC45LDExLjctMTEuNVMxMzcuNiwxMi41LDEzMC44LDEyLjV6IE0xMzAuOCwzMC4zIGMtMy40LDAtNS43LTIuNi01LjctNi4zYzAtMy44LDIuMy02LjMsNS43LTYuM2MzLjQsMCw1LjgsMi42LDUuOCw2LjNDMTM2LjYsMjcuNywxMzQuMiwzMC4zLDEzMC44LDMwLjN6XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XFxcIjgyLjEsMTIuOCA5OC4zLDEyLjggOTguMywxOCA4Ny45LDE4IDg3LjksMjEuMyA5OCwyMS4zIDk4LDI2LjQgODcuOSwyNi40IDg3LjksMzAgOTguMywzMCA5OC4zLDM1LjIgODIuMSwzNS4yIFxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cXFwiTTI0LjYsOS43QzI0LjYsNC40LDIwLDAsMTQuNCwwUzQuMiw0LjQsNC4yLDkuN3YzLjFIMHYyMi4zaDBsMTQuNCw2LjdsMTQuNC02LjdoMFYxMi45aC00LjJWOS43eiBNOS40LDkuNyBjMC0yLjUsMi4yLTQuNSw1LTQuNXM1LDIsNSw0LjV2My4xSDkuNFY5Ljd6IE0yMywzMS41bC04LjYsNGwtOC42LTRWMTguMUgyM1YzMS41elxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cXFwiTTc5LjQsMjAuM2MwLTQuNS0zLjEtNy40LTcuNy03LjRINjEuMnYyMi4zSDY3di03LjVoMi4ybDQuMSw3LjVIODBsLTQuOS04LjNDNzcuMiwyNi4xLDc5LjQsMjQsNzkuNCwyMC4zeiBNNzEsMjIuNWgtNFYxOCBoNGMxLjUsMCwyLjUsMC45LDIuNSwyLjJDNzMuNSwyMS42LDcyLjUsMjIuNSw3MSwyMi41elxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVxcXCI0MC41LDEyLjggNTguNiwxMi44IDU4LjYsMTguMSA1Mi40LDE4LjEgNTIuNCwzNS4yIDQ2LjYsMzUuMiA0Ni42LDE4LjEgNDAuNSwxOC4xIFxcXCIvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHJlem9yY29ubmVjdC1jbG9zZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIyNCAyNCA2MCA2MFxcXCIgd2lkdGg9XFxcIjI0cHhcXFwiIGhlaWdodD1cXFwiMjRweFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pbllNaW4gbWVldFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gY2xhc3M9XFxcInN0MFxcXCIgcG9pbnRzPVxcXCI0MCw2Ny45IDQyLjEsNzAgNTUsNTcuMSA2Ny45LDcwIDcwLDY3LjkgNTcuMSw1NSA3MCw0Mi4xIDY3LjksNDAgNTUsNTIuOSA0Mi4xLDQwIDQwLDQyLjEgNTIuOSw1NSBcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0cmV6b3Jjb25uZWN0LWJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDM+UG9wdXAgd2FzIGJsb2NrZWQ8L2gzPlxcbiAgICAgICAgICAgICAgICA8cD5QbGVhc2UgY2xpY2sgdG8gXFx1MjAxQ0NvbnRpbnVlXFx1MjAxRCB0byBvcGVuIHBvcHVwIG1hbnVhbGx5PC9wPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJ0cmV6b3Jjb25uZWN0LW9wZW5cXFwiPkNvbnRpbnVlPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXCI7XG5cbnZhciBzaG93UG9wdXBSZXF1ZXN0ID0gZnVuY3Rpb24gc2hvd1BvcHVwUmVxdWVzdChvcGVuLCBjYW5jZWwpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxheWVySUQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaWQgPSBsYXllcklEO1xuICBkaXYuY2xhc3NOYW1lID0gJ3RyZXpvcmNvbm5lY3QtY29udGFpbmVyJztcbiAgZGl2LmlubmVySFRNTCA9IGxheWVySW5uZXJIdG1sO1xuXG4gIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG5cbiAgdmFyIGJ1dHRvbiA9IGRpdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0cmV6b3Jjb25uZWN0LW9wZW4nKVswXTtcblxuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBvcGVuKCk7XG5cbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY2xvc2UgPSBkaXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHJlem9yY29ubmVjdC1jbG9zZScpWzBdO1xuXG4gIGNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2FuY2VsKCk7XG5cbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuc2hvd1BvcHVwUmVxdWVzdCA9IHNob3dQb3B1cFJlcXVlc3Q7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBCTE9DS0NIQUlOID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2NvbnN0YW50cy9ibG9ja2NoYWluXCIpKTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG52YXIgVFJBTlNQT1JUID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2NvbnN0YW50cy90cmFuc3BvcnRcIikpO1xuXG52YXIgUE9QVVAgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vY29uc3RhbnRzL3BvcHVwXCIpKTtcblxudmFyIFVJID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2NvbnN0YW50cy91aVwiKSk7XG5cbnZhciBERVZJQ0UgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vY29uc3RhbnRzL2RldmljZVwiKSk7XG5cbnZhciBQID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcGFyYW1zXCIpKTtcblxudmFyIFIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9yZXNwb25zZVwiKSk7XG5cbk9iamVjdC5rZXlzKFIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGV4cG9ydHNba2V5XSA9IFJba2V5XTtcbn0pO1xuXG52YXIgQ0FSREFOTyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2NhcmRhbm9cIikpO1xuXG52YXIgUklQUExFID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcmlwcGxlXCIpKTtcblxudmFyIEVUSEVSRVVNID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vZXRoZXJldW1cIikpO1xuXG52YXIgTkVNID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vbmVtXCIpKTtcblxudmFyIFNURUxMQVIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9zdGVsbGFyXCIpKTtcblxudmFyIExJU0sgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9saXNrXCIpKTtcblxudmFyIFRFWk9TID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vdGV6b3NcIikpO1xuXG52YXIgRU9TID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vZW9zXCIpKTtcblxudmFyIF9jb2luSW5mbyA9IHJlcXVpcmUoXCIuL2NvaW5JbmZvXCIpO1xuXG5PYmplY3Qua2V5cyhfY29pbkluZm8pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGV4cG9ydHNba2V5XSA9IF9jb2luSW5mb1trZXldO1xufSk7IiwiJ3VzZSBzdHJpY3QnOyAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83NTA1NjIzL2NvbG9ycy1pbi1qYXZhc2NyaXB0LWNvbnNvbGVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9waW10ZXJyeS9sb2dsZXZlbC9ibG9iL21hc3Rlci9saWIvbG9nbGV2ZWwuanNcbi8vIGh0dHA6Ly93d3cuY29sb3ItaGV4LmNvbS9jb2xvci1wYWxldHRlLzUwMTZcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucG9wdXBDb25zb2xlID0gZXhwb3J0cy5lbmFibGVCeVByZWZpeCA9IGV4cG9ydHMuZ2V0TG9nID0gZXhwb3J0cy5lbmFibGUgPSBleHBvcnRzLmluaXQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF90aGlzID0gdm9pZCAwO1xuXG52YXIgY29sb3JzID0ge1xuICAvLyBncmVlblxuICAnRGVzY3JpcHRvclN0cmVhbSc6ICdjb2xvcjogIzc3YWI1OScsXG4gICdEZXZpY2VMaXN0JzogJ2NvbG9yOiAjMzY4MDJkJyxcbiAgJ0RldmljZSc6ICdjb2xvcjogI2JhZGE1NScsXG4gICdDb3JlJzogJ2NvbG9yOiAjYzlkZjhhJyxcbiAgJ0lGcmFtZSc6ICdjb2xvcjogI0ZGRkZGRjsgYmFja2dyb3VuZDogI2Y0YTc0MjsnLFxuICAnUG9wdXAnOiAnY29sb3I6ICNmNDhhMDAnXG59O1xuXG52YXIgTG9nID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTG9nKHByZWZpeCwgZW5hYmxlZCkge1xuICAgIGlmIChlbmFibGVkID09PSB2b2lkIDApIHtcbiAgICAgIGVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcbiAgICB0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICB0aGlzLmNzcyA9IGNvbG9yc1twcmVmaXhdIHx8ICdjb2xvcjogIzAwMDAwMDsgYmFja2dyb3VuZDogI0ZGRkZGRjsnO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IExvZy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZE1lc3NhZ2UgPSBmdW5jdGlvbiBhZGRNZXNzYWdlKGxldmVsLCBwcmVmaXgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe1xuICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICBtZXNzYWdlOiBhcmdzLFxuICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5sb2cgPSBmdW5jdGlvbiBsb2coKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdGhpcy5hZGRNZXNzYWdlLmFwcGx5KHRoaXMsIFsnbG9nJywgdGhpcy5wcmVmaXhdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICB2YXIgX2NvbnNvbGU7XG5cbiAgICAgIChfY29uc29sZSA9IGNvbnNvbGUpLmxvZy5hcHBseShfY29uc29sZSwgW3RoaXMucHJlZml4XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZXJyb3IgPSBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZE1lc3NhZ2UuYXBwbHkodGhpcywgWydlcnJvcicsIHRoaXMucHJlZml4XS5jb25jYXQoYXJncykpO1xuXG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgdmFyIF9jb25zb2xlMjtcblxuICAgICAgKF9jb25zb2xlMiA9IGNvbnNvbGUpLmVycm9yLmFwcGx5KF9jb25zb2xlMiwgW3RoaXMucHJlZml4XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ud2FybiA9IGZ1bmN0aW9uIHdhcm4oKSB7XG4gICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICBhcmdzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgfVxuXG4gICAgdGhpcy5hZGRNZXNzYWdlLmFwcGx5KHRoaXMsIFsnd2FybicsIHRoaXMucHJlZml4XS5jb25jYXQoYXJncykpO1xuXG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgdmFyIF9jb25zb2xlMztcblxuICAgICAgKF9jb25zb2xlMyA9IGNvbnNvbGUpLndhcm4uYXBwbHkoX2NvbnNvbGUzLCBbdGhpcy5wcmVmaXhdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5kZWJ1ZyA9IGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgICAgYXJnc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICAgIH1cblxuICAgIHRoaXMuYWRkTWVzc2FnZS5hcHBseSh0aGlzLCBbJ2RlYnVnJywgdGhpcy5wcmVmaXhdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICB2YXIgX2NvbnNvbGU0O1xuXG4gICAgICAoX2NvbnNvbGU0ID0gY29uc29sZSkubG9nLmFwcGx5KF9jb25zb2xlNCwgWyclYycgKyB0aGlzLnByZWZpeCwgdGhpcy5jc3NdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBMb2c7XG59KCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTG9nO1xudmFyIF9sb2dzID0ge307XG5cbnZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChwcmVmaXgsIGVuYWJsZWQpIHtcbiAgdmFyIGVuYWIgPSB0eXBlb2YgZW5hYmxlZCA9PT0gJ2Jvb2xlYW4nID8gZW5hYmxlZCA6IGZhbHNlO1xuICB2YXIgaW5zdGFuY2UgPSBuZXcgTG9nKHByZWZpeCwgZW5hYik7XG4gIF9sb2dzW3ByZWZpeF0gPSBpbnN0YW5jZTtcbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuZXhwb3J0cy5pbml0ID0gaW5pdDtcblxudmFyIGVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZShlbmFibGVkKSB7XG4gIGZvciAodmFyIF9pID0gMCwgX09iamVjdCRrZXlzID0gT2JqZWN0LmtleXMoX2xvZ3MpOyBfaSA8IF9PYmplY3Qka2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgbCA9IF9PYmplY3Qka2V5c1tfaV07XG4gICAgX2xvZ3NbbF0uZW5hYmxlZCA9IGVuYWJsZWQ7XG4gIH1cbn07XG5cbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuXG52YXIgZ2V0TG9nID0gZnVuY3Rpb24gZ2V0TG9nKGFyZ3MpIHtcbiAgLy8gaWZcbiAgdmFyIGxvZ3MgPSBbXTtcblxuICBmb3IgKHZhciBfaTIgPSAwLCBfT2JqZWN0JGtleXMyID0gT2JqZWN0LmtleXMoX2xvZ3MpOyBfaTIgPCBfT2JqZWN0JGtleXMyLmxlbmd0aDsgX2kyKyspIHtcbiAgICB2YXIgbCA9IF9PYmplY3Qka2V5czJbX2kyXTtcbiAgICBsb2dzID0gbG9ncy5jb25jYXQoX2xvZ3NbbF0ubWVzc2FnZXMpO1xuICB9XG5cbiAgbG9ncy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEudGltZXN0YW1wIC0gYi50aW1lc3RhbXA7XG4gIH0pO1xuICByZXR1cm4gbG9ncztcbn07XG5cbmV4cG9ydHMuZ2V0TG9nID0gZ2V0TG9nO1xuXG52YXIgZW5hYmxlQnlQcmVmaXggPSBmdW5jdGlvbiBlbmFibGVCeVByZWZpeChwcmVmaXgsIGVuYWJsZWQpIHtcbiAgaWYgKF9sb2dzW3ByZWZpeF0pIHtcbiAgICBfbG9nc1twcmVmaXhdLmVuYWJsZWQgPSBlbmFibGVkO1xuICB9XG59OyAvLyBUT0RPOiBlbmFibGUvZGlzYWJsZSBsb2cgYXQgcnVudGltZVxuXG5cbmV4cG9ydHMuZW5hYmxlQnlQcmVmaXggPSBlbmFibGVCeVByZWZpeDtcblxudmFyIHBvcHVwQ29uc29sZSA9IGZ1bmN0aW9uIHBvcHVwQ29uc29sZSh0YWcsIHBvc3RNZXNzYWdlKSB7XG4gIHZhciBjID0gZ2xvYmFsLmNvbnNvbGU7XG4gIHZhciBvcmlnID0ge1xuICAgIGVycm9yOiBjLmVycm9yLFxuICAgIC8vIHdhcm46IGMud2FybixcbiAgICBpbmZvOiBjLmluZm8sXG4gICAgZGVidWc6IGMuZGVidWcsXG4gICAgbG9nOiBjLmxvZ1xuICB9O1xuICB2YXIgbG9nID0gW107XG5cbiAgdmFyIGluamVjdCA9IGZ1bmN0aW9uIGluamVjdChtZXRob2QsIGxldmVsKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGFyZ3MudW5zaGlmdCgnW3BvcHVwLmpzXScpO1xuICAgICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCk7XG5cbiAgICAgIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNiksIF9rZXk2ID0gMDsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgICAgICBhcmdzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gICAgICB9XG5cbiAgICAgIGxvZy5wdXNoKFtsZXZlbCwgdGltZV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIHBvc3RNZXNzYWdlLmFwcGx5KF90aGlzLCBbe1xuICAgICAgICB0eXBlOiB0YWcsXG4gICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgdGltZTogdGltZSxcbiAgICAgICAgYXJnczogSlNPTi5zdHJpbmdpZnkoYXJncylcbiAgICAgIH1dKTtcbiAgICAgIHJldHVybiBtZXRob2QuYXBwbHkoYywgYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICBmb3IgKHZhciBsZXZlbCBpbiBvcmlnKSB7XG4gICAgY1tsZXZlbF0gPSBpbmplY3Qob3JpZ1tsZXZlbF0sIGxldmVsKTtcbiAgfVxufTtcblxuZXhwb3J0cy5wb3B1cENvbnNvbGUgPSBwb3B1cENvbnNvbGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuZXhwb3J0cy5jcmVhdGVBc3luYyA9IGNyZWF0ZUFzeW5jO1xuZXhwb3J0cy5yZXNvbHZlVGltZW91dFByb21pc2UgPSByZXNvbHZlVGltZW91dFByb21pc2U7XG5leHBvcnRzLnJlamVjdFRpbWVvdXRQcm9taXNlID0gcmVqZWN0VGltZW91dFByb21pc2U7XG5cbnZhciBfcmVnZW5lcmF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKSk7XG5cbnZhciBfYXN5bmNUb0dlbmVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIikpO1xuXG5mdW5jdGlvbiBjcmVhdGUoYXJnLCBkZXZpY2UpIHtcbiAgdmFyIGxvY2FsUmVzb2x2ZSA9IGZ1bmN0aW9uIGxvY2FsUmVzb2x2ZSh0KSB7fTtcblxuICB2YXIgbG9jYWxSZWplY3QgPSBmdW5jdGlvbiBsb2NhbFJlamVjdChlKSB7fTtcblxuICB2YXIgaWQ7XG4gIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoXG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcmVmID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIGxvY2FsUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICAgIGxvY2FsUmVqZWN0ID0gcmVqZWN0O1xuXG4gICAgICAgICAgICAgIGlmICghKHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDExO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDM7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA2O1xuICAgICAgICAgICAgICByZXR1cm4gYXJnKCk7XG5cbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDExO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gODtcbiAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dFtcImNhdGNoXCJdKDMpO1xuICAgICAgICAgICAgICByZWplY3QoX2NvbnRleHQudDApO1xuXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIGlkID0gYXJnO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgX2NhbGxlZSwgbnVsbCwgW1szLCA4XV0pO1xuICAgIH0pKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoX3gsIF94Mikge1xuICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9KCkpO1xuICByZXR1cm4ge1xuICAgIGlkOiBpZCxcbiAgICBkZXZpY2U6IGRldmljZSxcbiAgICByZXNvbHZlOiBsb2NhbFJlc29sdmUsXG4gICAgcmVqZWN0OiBsb2NhbFJlamVjdCxcbiAgICBwcm9taXNlOiBwcm9taXNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jKGlubmVyRm4pIHtcbiAgdmFyIGxvY2FsUmVzb2x2ZSA9IGZ1bmN0aW9uIGxvY2FsUmVzb2x2ZSh0KSB7fTtcblxuICB2YXIgbG9jYWxSZWplY3QgPSBmdW5jdGlvbiBsb2NhbFJlamVjdChlKSB7fTtcblxuICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBsb2NhbFJlc29sdmUgPSByZXNvbHZlO1xuICAgIGxvY2FsUmVqZWN0ID0gcmVqZWN0O1xuICB9KTtcblxuICB2YXIgaW5uZXIgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3JlZjIgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMigpIHtcbiAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDI7XG4gICAgICAgICAgICAgIHJldHVybiBpbm5lckZuKCk7XG5cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBfY2FsbGVlMik7XG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlubmVyKCkge1xuICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfSgpO1xuXG4gIHJldHVybiB7XG4gICAgcmVzb2x2ZTogbG9jYWxSZXNvbHZlLFxuICAgIHJlamVjdDogbG9jYWxSZWplY3QsXG4gICAgcHJvbWlzZTogcHJvbWlzZSxcbiAgICBydW46IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAgIGlubmVyKCk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVUaW1lb3V0UHJvbWlzZShkZWxheSwgcmVzdWx0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgIH0sIGRlbGF5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlamVjdFRpbWVvdXRQcm9taXNlKGRlbGF5LCBlcnJvcikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICB9LCBkZWxheSk7XG4gIH0pO1xufSIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldE9yaWdpbiA9IGV4cG9ydHMuaHR0cFJlcXVlc3QgPSB2b2lkIDA7XG5cbnZhciBfcmVnZW5lcmF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKSk7XG5cbnZhciBfYXN5bmNUb0dlbmVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIikpO1xuXG5yZXF1aXJlKFwid2hhdHdnLWZldGNoXCIpO1xuXG52YXIgaHR0cFJlcXVlc3QgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSh1cmwsIHR5cGUpIHtcbiAgICB2YXIgcmVzcG9uc2UsIHR4dDtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICB0eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMztcbiAgICAgICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmVzcG9uc2UgPSBfY29udGV4dC5zZW50O1xuXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyMztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghKHR5cGUgPT09ICdqc29uJykpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDg7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuXG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgdHh0ID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgSlNPTi5wYXJzZSh0eHQpKTtcblxuICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICBpZiAoISh0eXBlID09PSAnYmluYXJ5JykpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE4O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE1O1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG5cbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjA7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuXG4gICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI0O1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaHR0cFJlcXVlc3QgZXJyb3I6IFwiICsgdXJsICsgXCIgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcblxuICAgICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGh0dHBSZXF1ZXN0KF94LCBfeDIpIHtcbiAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpO1xuXG5leHBvcnRzLmh0dHBSZXF1ZXN0ID0gaHR0cFJlcXVlc3Q7XG5cbnZhciBnZXRPcmlnaW4gPSBmdW5jdGlvbiBnZXRPcmlnaW4odXJsKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pcnJlZ3VsYXItd2hpdGVzcGFjZSwgbm8tdXNlbGVzcy1lc2NhcGVcbiAgdmFyIHBhcnRzID0gdXJsLm1hdGNoKC9eLitcXDpcXC9cXC9bXlxcL10rLyk7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHBhcnRzKSAmJiBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHNbMF0gOiAndW5rbm93bic7XG59O1xuXG5leHBvcnRzLmdldE9yaWdpbiA9IGdldE9yaWdpbjsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihjbGFzc05hbWUsIHVybCwgb3JpZ2luKSB7XG4gIHZhciBxdWVyeSA9IGNsYXNzTmFtZSB8fCAnLnRyZXpvci13ZWJ1c2ItYnV0dG9uJztcbiAgdmFyIGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcbiAgdmFyIHNyYyA9IHVybCArIFwiP1wiICsgRGF0ZS5ub3coKTtcbiAgYnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7XG4gICAgaWYgKGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpLmxlbmd0aCA8IDEpIHtcbiAgICAgIHZhciBib3VuZHMgPSBiLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGJ0bklmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgYnRuSWZyYW1lLmZyYW1lQm9yZGVyID0gJzAnO1xuICAgICAgYnRuSWZyYW1lLndpZHRoID0gTWF0aC5yb3VuZChib3VuZHMud2lkdGgpICsgJ3B4JztcbiAgICAgIGJ0bklmcmFtZS5oZWlnaHQgPSBNYXRoLnJvdW5kKGJvdW5kcy5oZWlnaHQpICsgJ3B4JztcbiAgICAgIGJ0bklmcmFtZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICBidG5JZnJhbWUuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICBidG5JZnJhbWUuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgYnRuSWZyYW1lLnN0eWxlLnpJbmRleCA9ICcxJzsgLy8gYnRuSWZyYW1lLnN0eWxlLm9wYWNpdHkgPSAnMCc7IC8vIHRoaXMgbWFrZXMgY2xpY2sgaW1wb3NzaWJsZSBvbiBjcm9zcy1vcmlnaW5cblxuICAgICAgYnRuSWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3cnLCAndXNiJyk7XG4gICAgICBidG5JZnJhbWUuc2V0QXR0cmlidXRlKCdzY3JvbGxpbmcnLCAnbm8nKTtcblxuICAgICAgYnRuSWZyYW1lLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnRuSWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2Uoey8vIHN0eWxlOiBKU09OLnN0cmluZ2lmeSggd2luZG93LmdldENvbXB1dGVkU3R5bGUoYikgKSxcbiAgICAgICAgICAvLyBvdXRlcjogYi5vdXRlckhUTUwsXG4gICAgICAgICAgLy8gaW5uZXI6IGIuaW5uZXJIVE1MXG4gICAgICAgIH0sIG9yaWdpbik7XG4gICAgICB9O1xuXG4gICAgICBidG5JZnJhbWUuc3JjID0gc3JjOyAvLyBpbmplY3QgaWZyYW1lIGludG8gYnV0dG9uXG5cbiAgICAgIGIuYXBwZW5kKGJ0bklmcmFtZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IHJlbmRlcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==