/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPLETE_NOTIFICATION: () => (/* binding */ COMPLETE_NOTIFICATION),
/* harmony export */   createNotification: () => (/* binding */ createNotification),
/* harmony export */   errorNotification: () => (/* binding */ errorNotification),
/* harmony export */   nextNotification: () => (/* binding */ nextNotification)
/* harmony export */ });
var COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}
//# sourceMappingURL=NotificationFactories.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Observable.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Observable.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observable: () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/dist/esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/dist/esm5/internal/symbol/observable.js");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/dist/esm5/internal/util/pipe.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/errorContext */ "./node_modules/rxjs/dist/esm5/internal/util/errorContext.js");







var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber(observerOrNext, error, complete);
        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_1__.errorContext)(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_3__.pipeFromArray)(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config__WEBPACK_IMPORTED_MODULE_4__.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.next) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.error) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber) || (isObserver(value) && (0,_Subscription__WEBPACK_IMPORTED_MODULE_6__.isSubscription)(value));
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Scheduler.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Scheduler.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scheduler: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ "./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js");

var Scheduler = (function () {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Subject.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subject.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnonymousSubject: () => (/* binding */ AnonymousSubject),
/* harmony export */   Subject: () => (/* binding */ Subject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/arrRemove */ "./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js");
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/errorContext */ "./node_modules/rxjs/dist/esm5/internal/util/errorContext.js");






var Subject = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new _Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription(function () {
            _this.currentObservers = null;
            (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_4__.arrRemove)(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new _Observable__WEBPACK_IMPORTED_MODULE_5__.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(_Observable__WEBPACK_IMPORTED_MODULE_5__.Observable));

var AnonymousSubject = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Subscriber.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subscriber.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_OBSERVER: () => (/* binding */ EMPTY_OBSERVER),
/* harmony export */   SafeSubscriber: () => (/* binding */ SafeSubscriber),
/* harmony export */   Subscriber: () => (/* binding */ Subscriber)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/reportUnhandledError */ "./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/noop */ "./node_modules/rxjs/dist/esm5/internal/util/noop.js");
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationFactories */ "./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js");
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduler/timeoutProvider */ "./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js");
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/errorContext */ "./node_modules/rxjs/dist/esm5/internal/util/errorContext.js");









var Subscriber = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_1__.isSubscription)(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) {
            handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.nextNotification)(value), this);
        }
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) {
            handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.errorNotification)(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) {
            handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription));

var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && _config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));

function handleUnhandledError(error) {
    if (_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling) {
        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_5__.captureError)(error);
    }
    else {
        (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_6__.reportUnhandledError)(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = _config__WEBPACK_IMPORTED_MODULE_4__.config.onStoppedNotification;
    onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_7__.timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: _util_noop__WEBPACK_IMPORTED_MODULE_8__.noop,
    error: defaultErrorHandler,
    complete: _util_noop__WEBPACK_IMPORTED_MODULE_8__.noop,
};
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Subscription.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subscription.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_SUBSCRIPTION: () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   Subscription: () => (/* binding */ Subscription),
/* harmony export */   isSubscription: () => (/* binding */ isSubscription)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js");
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/arrRemove */ "./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js");




var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError) {
                                errors = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(errors)), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/config.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/config.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/empty.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/empty.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY: () => (/* binding */ EMPTY),
/* harmony export */   empty: () => (/* binding */ empty)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");

var EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/from.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/from.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   from: () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduled/scheduled */ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js");
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./innerFrom */ "./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");


function from(input, scheduler) {
    return scheduler ? (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__.scheduled)(input, scheduler) : (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(input);
}
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromArrayLike: () => (/* binding */ fromArrayLike),
/* harmony export */   fromAsyncIterable: () => (/* binding */ fromAsyncIterable),
/* harmony export */   fromInteropObservable: () => (/* binding */ fromInteropObservable),
/* harmony export */   fromIterable: () => (/* binding */ fromIterable),
/* harmony export */   fromPromise: () => (/* binding */ fromPromise),
/* harmony export */   fromReadableStreamLike: () => (/* binding */ fromReadableStreamLike),
/* harmony export */   innerFrom: () => (/* binding */ innerFrom)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js");
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isPromise */ "./node_modules/rxjs/dist/esm5/internal/util/isPromise.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js");
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isAsyncIterable */ "./node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js");
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/throwUnobservableError */ "./node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js");
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isIterable */ "./node_modules/rxjs/dist/esm5/internal/util/isIterable.js");
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isReadableStreamLike */ "./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/reportUnhandledError */ "./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/dist/esm5/internal/symbol/observable.js");












function innerFrom(input) {
    if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable) {
        return input;
    }
    if (input != null) {
        if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__.isInteropObservable)(input)) {
            return fromInteropObservable(input);
        }
        if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
            return fromArrayLike(input);
        }
        if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_3__.isPromise)(input)) {
            return fromPromise(input);
        }
        if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__.isAsyncIterable)(input)) {
            return fromAsyncIterable(input);
        }
        if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_5__.isIterable)(input)) {
            return fromIterable(input);
        }
        if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.isReadableStreamLike)(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__.createInvalidObservableTypeError)(input);
}
function fromInteropObservable(obj) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        var obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__.observable]();
        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_9__.isFunction)(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        promise
            .then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__.reportUnhandledError);
    });
}
function fromIterable(iterable) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        var e_1, _a;
        try {
            for (var iterable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__values)(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        process(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.readableStreamLikeToAsyncGenerator)(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function () {
        var value, e_2_1;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__asyncValues)(asyncIterable);
                    _b.label = 1;
                case 1: return [4, asyncIterable_1.next()];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [2];
                    }
                    _b.label = 3;
                case 3: return [3, 1];
                case 4: return [3, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                case 10: return [7];
                case 11:
                    subscriber.complete();
                    return [2];
            }
        });
    });
}
//# sourceMappingURL=innerFrom.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/interval.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/interval.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interval: () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/dist/esm5/internal/scheduler/async.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ "./node_modules/rxjs/dist/esm5/internal/observable/timer.js");


function interval(period, scheduler) {
    if (period === void 0) { period = 0; }
    if (scheduler === void 0) { scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler; }
    if (period < 0) {
        period = 0;
    }
    return (0,_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(period, period, scheduler);
}
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/merge.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/merge.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeAll */ "./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./innerFrom */ "./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/dist/esm5/internal/observable/empty.js");
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ "./node_modules/rxjs/dist/esm5/internal/util/args.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/dist/esm5/internal/observable/from.js");





function merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
    var concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popNumber)(args, Infinity);
    var sources = args;
    return !sources.length
        ?
            _empty__WEBPACK_IMPORTED_MODULE_1__.EMPTY
        : sources.length === 1
            ?
                (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(sources[0])
            :
                (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__.mergeAll)(concurrent)((0,_from__WEBPACK_IMPORTED_MODULE_4__.from)(sources, scheduler));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/timer.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/timer.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timer: () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/dist/esm5/internal/scheduler/async.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js");
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isDate */ "./node_modules/rxjs/dist/esm5/internal/util/isDate.js");




function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) { dueTime = 0; }
    if (scheduler === void 0) { scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async; }
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
        if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(intervalOrScheduler)) {
            scheduler = intervalOrScheduler;
        }
        else {
            intervalDuration = intervalOrScheduler;
        }
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(function (subscriber) {
        var due = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_3__.isValidDate)(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
            due = 0;
        }
        var n = 0;
        return scheduler.schedule(function () {
            if (!subscriber.closed) {
                subscriber.next(n++);
                if (0 <= intervalDuration) {
                    this.schedule(undefined, intervalDuration);
                }
                else {
                    subscriber.complete();
                }
            }
        }, due);
    });
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js":
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperatorSubscriber: () => (/* binding */ OperatorSubscriber),
/* harmony export */   createOperatorSubscriber: () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/dist/esm5/internal/Subscriber.js");


function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber));

//# sourceMappingURL=OperatorSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/map.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   map: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ "./node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");


function map(project, thisArg) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(function (source, subscriber) {
        var index = 0;
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeAll: () => (/* binding */ mergeAll)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeMap */ "./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/dist/esm5/internal/util/identity.js");


function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(_util_identity__WEBPACK_IMPORTED_MODULE_1__.identity, concurrent);
}
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeInternals: () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ "./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/executeSchedule */ "./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js");
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function () {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    var outerNext = function (value) { return (active < concurrent ? doInnerSub(value) : buffer.push(value)); };
    var doInnerSub = function (value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(project(value, index++)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, function (innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            }
            else {
                subscriber.next(innerValue);
            }
        }, function () {
            innerComplete = true;
        }, undefined, function () {
            if (innerComplete) {
                try {
                    active--;
                    var _loop_1 = function () {
                        var bufferedValue = buffer.shift();
                        if (innerSubScheduler) {
                            (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, innerSubScheduler, function () { return doInnerSub(bufferedValue); });
                        }
                        else {
                            doInnerSub(bufferedValue);
                        }
                    };
                    while (buffer.length && active < concurrent) {
                        _loop_1();
                    }
                    checkComplete();
                }
                catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, outerNext, function () {
        isComplete = true;
        checkComplete();
    }));
    return function () {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
}
//# sourceMappingURL=mergeInternals.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeMap: () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ "./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ "./node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mergeInternals */ "./node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");





function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(resultSelector)) {
        return mergeMap(function (a, i) { return (0,_map__WEBPACK_IMPORTED_MODULE_1__.map)(function (b, ii) { return resultSelector(a, b, i, ii); })((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(project(a, i))); }, concurrent);
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)(function (source, subscriber) { return (0,_mergeInternals__WEBPACK_IMPORTED_MODULE_4__.mergeInternals)(source, subscriber, project, concurrent); });
}
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/observeOn.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/observeOn.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observeOn: () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/executeSchedule */ "./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js");
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ "./node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");



function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(function (source, subscriber) {
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, function (value) { return (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, function () { return subscriber.next(value); }, delay); }, function () { return (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, function () { return subscriber.complete(); }, delay); }, function (err) { return (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, function () { return subscriber.error(err); }, delay); }));
    });
}
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subscribeOn: () => (/* binding */ subscribeOn)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ "./node_modules/rxjs/dist/esm5/internal/util/lift.js");

function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(function (source, subscriber) {
        subscriber.add(scheduler.schedule(function () { return source.subscribe(subscriber); }, delay));
    });
}
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleArray: () => (/* binding */ scheduleArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");

function scheduleArray(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        var i = 0;
        return scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
            }
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}
//# sourceMappingURL=scheduleArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleAsyncIterable: () => (/* binding */ scheduleAsyncIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/executeSchedule */ "./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js");


function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, function () {
            var iterator = input[Symbol.asyncIterator]();
            (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, function () {
                iterator.next().then(function (result) {
                    if (result.done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(result.value);
                    }
                });
            }, 0, true);
        });
    });
}
//# sourceMappingURL=scheduleAsyncIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleIterable: () => (/* binding */ scheduleIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/dist/esm5/internal/symbol/iterator.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/executeSchedule */ "./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js");




function scheduleIterable(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        var iterator;
        (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, function () {
            iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__.iterator]();
            (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, function () {
                var _a;
                var value;
                var done;
                try {
                    (_a = iterator.next(), value = _a.value, done = _a.done);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                }
            }, 0, true);
        });
        return function () { return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return(); };
    });
}
//# sourceMappingURL=scheduleIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleObservable: () => (/* binding */ scheduleObservable)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ "./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/observeOn */ "./node_modules/rxjs/dist/esm5/internal/operators/observeOn.js");
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/subscribeOn */ "./node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js");



function scheduleObservable(input, scheduler) {
    return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__.subscribeOn)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__.observeOn)(scheduler));
}
//# sourceMappingURL=scheduleObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   schedulePromise: () => (/* binding */ schedulePromise)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ "./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/observeOn */ "./node_modules/rxjs/dist/esm5/internal/operators/observeOn.js");
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/subscribeOn */ "./node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js");



function schedulePromise(input, scheduler) {
    return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__.subscribeOn)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__.observeOn)(scheduler));
}
//# sourceMappingURL=schedulePromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleReadableStreamLike: () => (/* binding */ scheduleReadableStreamLike)
/* harmony export */ });
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduleAsyncIterable */ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js");
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isReadableStreamLike */ "./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js");


function scheduleReadableStreamLike(input, scheduler) {
    return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__.scheduleAsyncIterable)((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__.readableStreamLikeToAsyncGenerator)(input), scheduler);
}
//# sourceMappingURL=scheduleReadableStreamLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduled: () => (/* binding */ scheduled)
/* harmony export */ });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduleObservable */ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js");
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedulePromise */ "./node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js");
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduleArray */ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js");
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scheduleIterable */ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js");
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduleAsyncIterable */ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js");
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js");
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isPromise */ "./node_modules/rxjs/dist/esm5/internal/util/isPromise.js");
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js");
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/isIterable */ "./node_modules/rxjs/dist/esm5/internal/util/isIterable.js");
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isAsyncIterable */ "./node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js");
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/throwUnobservableError */ "./node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js");
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/isReadableStreamLike */ "./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js");
/* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scheduleReadableStreamLike */ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js");













function scheduled(input, scheduler) {
    if (input != null) {
        if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__.isInteropObservable)(input)) {
            return (0,_scheduleObservable__WEBPACK_IMPORTED_MODULE_1__.scheduleObservable)(input, scheduler);
        }
        if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
            return (0,_scheduleArray__WEBPACK_IMPORTED_MODULE_3__.scheduleArray)(input, scheduler);
        }
        if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_4__.isPromise)(input)) {
            return (0,_schedulePromise__WEBPACK_IMPORTED_MODULE_5__.schedulePromise)(input, scheduler);
        }
        if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__.isAsyncIterable)(input)) {
            return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__.scheduleAsyncIterable)(input, scheduler);
        }
        if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_8__.isIterable)(input)) {
            return (0,_scheduleIterable__WEBPACK_IMPORTED_MODULE_9__.scheduleIterable)(input, scheduler);
        }
        if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__.isReadableStreamLike)(input)) {
            return (0,_scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__.scheduleReadableStreamLike)(input, scheduler);
        }
    }
    throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__.createInvalidObservableTypeError)(input);
}
//# sourceMappingURL=scheduled.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/Action.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/Action.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/dist/esm5/internal/Subscription.js");


var Action = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription));

//# sourceMappingURL=Action.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncAction: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Action */ "./node_modules/rxjs/dist/esm5/internal/scheduler/Action.js");
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intervalProvider */ "./node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js");
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/arrRemove */ "./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js");




var AsyncAction = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        var _a;
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
        if (delay === void 0) { delay = 0; }
        return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        if (id != null) {
            _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(id);
        }
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = e ? e : new Error('Scheduled action threw falsy error');
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function () {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(_Action__WEBPACK_IMPORTED_MODULE_3__.Action));

//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncScheduler: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Scheduler */ "./node_modules/rxjs/dist/esm5/internal/Scheduler.js");


var AsyncScheduler = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = _Scheduler__WEBPACK_IMPORTED_MODULE_1__.Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions.shift()));
        this._active = false;
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(_Scheduler__WEBPACK_IMPORTED_MODULE_1__.Scheduler));

//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/async.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/async.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   async: () => (/* binding */ async),
/* harmony export */   asyncScheduler: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js");


var asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
var async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateTimestampProvider: () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
var dateTimestampProvider = {
    now: function () {
        return (dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined,
};
//# sourceMappingURL=dateTimestampProvider.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intervalProvider: () => (/* binding */ intervalProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");

var intervalProvider = {
    setInterval: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
            return delegate.setInterval.apply(delegate, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([handler, timeout], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
        }
        return setInterval.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([handler, timeout], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
    },
    clearInterval: function (handle) {
        var delegate = intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=intervalProvider.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeoutProvider: () => (/* binding */ timeoutProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([handler, timeout], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
        }
        return setTimeout.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([handler, timeout], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=timeoutProvider.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/symbol/iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/symbol/iterator.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSymbolIterator: () => (/* binding */ getSymbolIterator),
/* harmony export */   iterator: () => (/* binding */ iterator)
/* harmony export */ });
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = getSymbolIterator();
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/symbol/observable.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/symbol/observable.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observable: () => (/* binding */ observable)
/* harmony export */ });
var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js":
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectUnsubscribedError: () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ "./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js");

var ObjectUnsubscribedError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsubscriptionError: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ "./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js");

var UnsubscriptionError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/args.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/args.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popNumber: () => (/* binding */ popNumber),
/* harmony export */   popResultSelector: () => (/* binding */ popResultSelector),
/* harmony export */   popScheduler: () => (/* binding */ popScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScheduler */ "./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js");


function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
    return (0,_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
    return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
//# sourceMappingURL=args.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrRemove: () => (/* binding */ arrRemove)
/* harmony export */ });
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
//# sourceMappingURL=arrRemove.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createErrorClass: () => (/* binding */ createErrorClass)
/* harmony export */ });
function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
//# sourceMappingURL=createErrorClass.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/errorContext.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/errorContext.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureError: () => (/* binding */ captureError),
/* harmony export */   errorContext: () => (/* binding */ errorContext)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./node_modules/rxjs/dist/esm5/internal/config.js");

var context = null;
function errorContext(cb) {
    if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}
function captureError(err) {
    if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}
//# sourceMappingURL=errorContext.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeSchedule: () => (/* binding */ executeSchedule)
/* harmony export */ });
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) { delay = 0; }
    if (repeat === void 0) { repeat = false; }
    var scheduleSubscription = scheduler.schedule(function () {
        work();
        if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
        }
        else {
            this.unsubscribe();
        }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
        return scheduleSubscription;
    }
}
//# sourceMappingURL=executeSchedule.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/identity.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/identity.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArrayLike: () => (/* binding */ isArrayLike)
/* harmony export */ });
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAsyncIterable: () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");

function isAsyncIterable(obj) {
    return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isDate.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isDate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidDate: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}
//# sourceMappingURL=isDate.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isFunction.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFunction: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
    return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInteropObservable: () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/dist/esm5/internal/symbol/observable.js");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");


function isInteropObservable(input) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__.observable]);
}
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isIterable.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isIterable.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIterable: () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/dist/esm5/internal/symbol/iterator.js");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");


function isIterable(input) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__.iterator]);
}
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isPromise.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isPromise.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPromise: () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");

function isPromise(value) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isReadableStreamLike: () => (/* binding */ isReadableStreamLike),
/* harmony export */   readableStreamLikeToAsyncGenerator: () => (/* binding */ readableStreamLikeToAsyncGenerator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");


function readableStreamLikeToAsyncGenerator(readableStream) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    if (false) {}
                    return [4, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(reader.read())];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [3, 5];
                    return [4, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(void 0)];
                case 4: return [2, _b.sent()];
                case 5: return [4, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(value)];
                case 6: return [4, _b.sent()];
                case 7:
                    _b.sent();
                    return [3, 2];
                case 8: return [3, 10];
                case 9:
                    reader.releaseLock();
                    return [7];
                case 10: return [2];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
//# sourceMappingURL=isReadableStreamLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isScheduler: () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");

function isScheduler(value) {
    return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.schedule);
}
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/lift.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/lift.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasLift: () => (/* binding */ hasLift),
/* harmony export */   operate: () => (/* binding */ operate)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");

function hasLift(source) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}
//# sourceMappingURL=lift.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/noop.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/noop.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
function noop() { }
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/pipe.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/pipe.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   pipeFromArray: () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/dist/esm5/internal/util/identity.js");

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reportUnhandledError: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/timeoutProvider */ "./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js");


function reportUnhandledError(err) {
    _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(function () {
        var onUnhandledError = _config__WEBPACK_IMPORTED_MODULE_1__.config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}
//# sourceMappingURL=reportUnhandledError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInvalidObservableTypeError: () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//# sourceMappingURL=throwUnobservableError.js.map

/***/ }),

/***/ "./src/guitar.ts":
/*!***********************!*\
  !*** ./src/guitar.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Guitar: () => (/* binding */ Guitar)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/observable/interval.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");


var Guitar = /** @class */ (function () {
    function Guitar(name) {
        var _this = this;
        this._name = name;
        this.guitarIcon = document.getElementById("guitar");
        this.sound$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(_index__WEBPACK_IMPORTED_MODULE_0__.SAMPLE_RATE).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function () { return _this._name + "sound data"; }));
    }
    Guitar.prototype.animateGuitar = function () {
        var _this = this;
        this.guitarIcon.style.filter = "brightness(200%)";
        setTimeout(function () {
            _this.guitarIcon.style.filter = "brightness(100%)";
        }, 100);
    };
    return Guitar;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SAMPLE_RATE: () => (/* binding */ SAMPLE_RATE)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var _piano__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piano */ "./src/piano.ts");
/* harmony import */ var _guitar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guitar */ "./src/guitar.ts");
/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speaker */ "./src/speaker.ts");
/* harmony import */ var _mixer_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixer_preview */ "./src/mixer_preview.ts");
/* harmony import */ var _mixer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixer */ "./src/mixer.ts");






var SAMPLE_RATE = 5000;
var mixer = new _mixer__WEBPACK_IMPORTED_MODULE_4__.Mixer();
var mixer_Preview = new _mixer_preview__WEBPACK_IMPORTED_MODULE_3__.MixerPreview();
var piano = new _piano__WEBPACK_IMPORTED_MODULE_0__.Piano('Piano');
var guitar = new _guitar__WEBPACK_IMPORTED_MODULE_1__.Guitar('Guitar');
var speaker = new _speaker__WEBPACK_IMPORTED_MODULE_2__.Speaker(piano, guitar);
// Spajanje svih instrumenata u miksetu
var mergedSound$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(piano.sound$, guitar.sound$);
// Slanje zvuka u miksetu
mergedSound$.subscribe(function (sound) {
    mixer.sendSound(sound);
});
// Pretplata na miksetu i reprodukcija zvuka
mixer.sound$.subscribe(function (sound) {
    speaker.playSound(sound);
});


/***/ }),

/***/ "./src/mixer.ts":
/*!**********************!*\
  !*** ./src/mixer.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mixer: () => (/* binding */ Mixer)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/Subject.js");

var Mixer = /** @class */ (function () {
    function Mixer() {
        this.mixerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    // Dodajte funkciju za slanje zvuka u miksetu
    Mixer.prototype.sendSound = function (sound) {
        this.mixerSubject.next(sound);
    };
    Object.defineProperty(Mixer.prototype, "sound$", {
        // Pretvorite miksetu u Observable za pretplatu
        get: function () {
            return this.mixerSubject.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    return Mixer;
}());



/***/ }),

/***/ "./src/mixer_preview.ts":
/*!******************************!*\
  !*** ./src/mixer_preview.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MixerPreview: () => (/* binding */ MixerPreview)
/* harmony export */ });
//import { Mixer } from './mixer';
var MixerPreview = /** @class */ (function () {
    // private mixer: Mixer;
    function MixerPreview() {
        this.draw();
    }
    MixerPreview.prototype.draw = function () {
        var main_frame = document.createElement("div");
        main_frame.classList.add("main-frame");
        document.body.appendChild(main_frame);
        main_frame.innerHTML = "\n            <img id=\"band\" class=\"instrument\" src=\"src/assets/band.png\" />\n            <img id=\"piano\" class=\"instrument\" src=\"src/assets/piano.png\" />\n            <img id=\"guitar\" class=\"instrument\" src=\"src/assets/guitar.png\" />\n            <img id=\"mixer\" class=\"instrument\" src=\"src/assets/mixer.png\" />\n            <img id=\"speaker\" class=\"instrument\" src=\"src/assets/speaker.png\" />\n        ";
        var speaker_info_frame = document.createElement("div");
        speaker_info_frame.classList.add("speaker-info-frame");
        document.body.appendChild(speaker_info_frame);
        speaker_info_frame.innerHTML = "\n            <p>Speaker: <span id=\"speaker-info\"></span></p>\n        ";
        // const pianoImage = document.getElementById('piano');
        // const guitarImage = document.getElementById('guitar');
        // const mixerImage = document.getElementById('mixer');
        // pianoImage.addEventListener('click', () => {
        //   // Simulacija klika na klavir
        //   this.mixer.sendSound('Piano sound data');
        //   this.updateSpeakerInfo('Piano');
        // });
        // guitarImage.addEventListener('click', () => {
        //   // Simulacija klika na gitaru
        //   this.mixer.sendSound('Guitar sound data');
        //   this.updateSpeakerInfo('Guitar');
        // });
    };
    return MixerPreview;
}());



/***/ }),

/***/ "./src/piano.ts":
/*!**********************!*\
  !*** ./src/piano.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Piano: () => (/* binding */ Piano)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/observable/interval.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");


var Piano = /** @class */ (function () {
    function Piano(name) {
        var _this = this;
        this._name = name;
        this.pianoIcon = document.getElementById("piano");
        this.sound$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(1000 / _index__WEBPACK_IMPORTED_MODULE_0__.SAMPLE_RATE).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function () { return _this._name + "sound data"; }));
    }
    Piano.prototype.animatePiano = function () {
        var _this = this;
        this.pianoIcon.style.filter = "brightness(200%)";
        setTimeout(function () {
            _this.pianoIcon.style.filter = "brightness(100%)";
        }, 100);
    };
    return Piano;
}());



/***/ }),

/***/ "./src/speaker.ts":
/*!************************!*\
  !*** ./src/speaker.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Speaker: () => (/* binding */ Speaker)
/* harmony export */ });
var Speaker = /** @class */ (function () {
    function Speaker(piano, guitar) {
        this.piano = piano;
        this.guitar = guitar;
    }
    Speaker.prototype.playSound = function (sound) {
        console.log("Playing sound: ".concat(sound));
        this.piano.animatePiano();
        this.guitar.animateGuitar();
    };
    return Speaker;
}());



/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

/******/ 	});
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
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4Q0FBOEM7QUFDbkU7QUFDQTtBQUNBLHFCQUFxQixhQUFhO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxTQUFTLGdCQUFnQjtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7VUNqWEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL05vdGlmaWNhdGlvbkZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL09ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9TY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9TdWJqZWN0LmpzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL1N1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29ic2VydmFibGUvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb20uanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2lubmVyRnJvbS5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29ic2VydmFibGUvaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL21lcmdlLmpzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS90aW1lci5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy9PcGVyYXRvclN1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwLmpzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL21lcmdlQWxsLmpzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL21lcmdlSW50ZXJuYWxzLmpzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL21lcmdlTWFwLmpzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL29ic2VydmVPbi5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy9zdWJzY3JpYmVPbi5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUFycmF5LmpzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlQXN5bmNJdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUl0ZXJhYmxlLmpzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZVByb21pc2UuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVkLmpzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci9Bc3luY0FjdGlvbi5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci9Bc3luY1NjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci9hc3luYy5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci9kYXRlVGltZXN0YW1wUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvaW50ZXJ2YWxQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci90aW1lb3V0UHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2FyZ3MuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2FyclJlbW92ZS5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvY3JlYXRlRXJyb3JDbGFzcy5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvZXJyb3JDb250ZXh0LmpzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9leGVjdXRlU2NoZWR1bGUuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lkZW50aXR5LmpzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvaXNBc3luY0l0ZXJhYmxlLmpzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc0RhdGUuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzSXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvaXNSZWFkYWJsZVN0cmVhbUxpa2UuanMiLCJ3ZWJwYWNrOi8vcnhqcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzU2NoZWR1bGVyLmpzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9saWZ0LmpzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9ub29wLmpzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9waXBlLmpzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvci5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvdGhyb3dVbm9ic2VydmFibGVFcnJvci5qcyIsIndlYnBhY2s6Ly9yeGpzLy4vc3JjL2d1aXRhci50cyIsIndlYnBhY2s6Ly9yeGpzLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3J4anMvLi9zcmMvbWl4ZXIudHMiLCJ3ZWJwYWNrOi8vcnhqcy8uL3NyYy9taXhlcl9wcmV2aWV3LnRzIiwid2VicGFjazovL3J4anMvLi9zcmMvcGlhbm8udHMiLCJ3ZWJwYWNrOi8vcnhqcy8uL3NyYy9zcGVha2VyLnRzIiwid2VicGFjazovL3J4anMvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2Lm1qcyIsIndlYnBhY2s6Ly9yeGpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3J4anMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3J4anMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yeGpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnhqcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3J4anMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3J4anMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgQ09NUExFVEVfTk9USUZJQ0FUSU9OID0gKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNyZWF0ZU5vdGlmaWNhdGlvbignQycsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTsgfSkoKTtcbmV4cG9ydCBmdW5jdGlvbiBlcnJvck5vdGlmaWNhdGlvbihlcnJvcikge1xuICAgIHJldHVybiBjcmVhdGVOb3RpZmljYXRpb24oJ0UnLCB1bmRlZmluZWQsIGVycm9yKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Tm90aWZpY2F0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZU5vdGlmaWNhdGlvbignTicsIHZhbHVlLCB1bmRlZmluZWQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vdGlmaWNhdGlvbihraW5kLCB2YWx1ZSwgZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiBraW5kLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGVycm9yOiBlcnJvcixcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Tm90aWZpY2F0aW9uRmFjdG9yaWVzLmpzLm1hcCIsImltcG9ydCB7IFNhZmVTdWJzY3JpYmVyLCBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IGlzU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4vc3ltYm9sL29ic2VydmFibGUnO1xuaW1wb3J0IHsgcGlwZUZyb21BcnJheSB9IGZyb20gJy4vdXRpbC9waXBlJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBlcnJvckNvbnRleHQgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcbnZhciBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlKHN1YnNjcmliZSkge1xuICAgICAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdWJzY3JpYmVyID0gaXNTdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0KSA/IG9ic2VydmVyT3JOZXh0IDogbmV3IFNhZmVTdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBlcnJvckNvbnRleHQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMsIG9wZXJhdG9yID0gX2Eub3BlcmF0b3IsIHNvdXJjZSA9IF9hLnNvdXJjZTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuYWRkKG9wZXJhdG9yXG4gICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvci5jYWxsKHN1YnNjcmliZXIsIHNvdXJjZSlcbiAgICAgICAgICAgICAgICA6IHNvdXJjZVxuICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fc3Vic2NyaWJlKHN1YnNjcmliZXIpXG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl90cnlTdWJzY3JpYmUoc3Vic2NyaWJlcikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKHNpbmspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUoc2luayk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc2luay5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKG5leHQsIHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpYmVyID0gbmV3IFNhZmVTdWJzY3JpYmVyKHtcbiAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuc291cmNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGVbU3ltYm9sX29ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcGVyYXRpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBvcGVyYXRpb25zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBpcGVGcm9tQXJyYXkob3BlcmF0aW9ucykodGhpcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS50b1Byb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG4gICAgICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uICh4KSB7IHJldHVybiAodmFsdWUgPSB4KTsgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gcmVqZWN0KGVycik7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUodmFsdWUpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZTtcbn0oKSk7XG5leHBvcnQgeyBPYnNlcnZhYmxlIH07XG5mdW5jdGlvbiBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKF9hID0gcHJvbWlzZUN0b3IgIT09IG51bGwgJiYgcHJvbWlzZUN0b3IgIT09IHZvaWQgMCA/IHByb21pc2VDdG9yIDogY29uZmlnLlByb21pc2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFByb21pc2U7XG59XG5mdW5jdGlvbiBpc09ic2VydmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUubmV4dCkgJiYgaXNGdW5jdGlvbih2YWx1ZS5lcnJvcikgJiYgaXNGdW5jdGlvbih2YWx1ZS5jb21wbGV0ZSk7XG59XG5mdW5jdGlvbiBpc1N1YnNjcmliZXIodmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgU3Vic2NyaWJlcikgfHwgKGlzT2JzZXJ2ZXIodmFsdWUpICYmIGlzU3Vic2NyaXB0aW9uKHZhbHVlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYnNlcnZhYmxlLmpzLm1hcCIsImltcG9ydCB7IGRhdGVUaW1lc3RhbXBQcm92aWRlciB9IGZyb20gJy4vc2NoZWR1bGVyL2RhdGVUaW1lc3RhbXBQcm92aWRlcic7XG52YXIgU2NoZWR1bGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY2hlZHVsZXIoc2NoZWR1bGVyQWN0aW9uQ3Rvciwgbm93KSB7XG4gICAgICAgIGlmIChub3cgPT09IHZvaWQgMCkgeyBub3cgPSBTY2hlZHVsZXIubm93OyB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyQWN0aW9uQ3RvciA9IHNjaGVkdWxlckFjdGlvbkN0b3I7XG4gICAgICAgIHRoaXMubm93ID0gbm93O1xuICAgIH1cbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHdvcmssIGRlbGF5LCBzdGF0ZSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLnNjaGVkdWxlckFjdGlvbkN0b3IodGhpcywgd29yaykuc2NoZWR1bGUoc3RhdGUsIGRlbGF5KTtcbiAgICB9O1xuICAgIFNjaGVkdWxlci5ub3cgPSBkYXRlVGltZXN0YW1wUHJvdmlkZXIubm93O1xuICAgIHJldHVybiBTY2hlZHVsZXI7XG59KCkpO1xuZXhwb3J0IHsgU2NoZWR1bGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TY2hlZHVsZXIuanMubWFwIiwiaW1wb3J0IHsgX19leHRlbmRzLCBfX3ZhbHVlcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIEVNUFRZX1NVQlNDUklQVElPTiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yIH0gZnJvbSAnLi91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbmltcG9ydCB7IGFyclJlbW92ZSB9IGZyb20gJy4vdXRpbC9hcnJSZW1vdmUnO1xuaW1wb3J0IHsgZXJyb3JDb250ZXh0IH0gZnJvbSAnLi91dGlsL2Vycm9yQ29udGV4dCc7XG52YXIgU3ViamVjdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN1YmplY3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3ViamVjdCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgICAgICBfdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnRocm93bkVycm9yID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJqZWN0LnByb3RvdHlwZS5saWZ0ID0gZnVuY3Rpb24gKG9wZXJhdG9yKSB7XG4gICAgICAgIHZhciBzdWJqZWN0ID0gbmV3IEFub255bW91c1N1YmplY3QodGhpcywgdGhpcyk7XG4gICAgICAgIHN1YmplY3Qub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgcmV0dXJuIHN1YmplY3Q7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fdGhyb3dJZkNsb3NlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBlcnJvckNvbnRleHQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgICAgICBfdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmN1cnJlbnRPYnNlcnZlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmVycyA9IEFycmF5LmZyb20oX3RoaXMub2JzZXJ2ZXJzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhfdGhpcy5jdXJyZW50T2JzZXJ2ZXJzKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9ic2VydmVyID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGVycm9yQ29udGV4dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5oYXNFcnJvciA9IF90aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMudGhyb3duRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgdmFyIG9ic2VydmVycyA9IF90aGlzLm9ic2VydmVycztcbiAgICAgICAgICAgICAgICB3aGlsZSAob2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlcnMuc2hpZnQoKS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgZXJyb3JDb250ZXh0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICAgICAgICBpZiAoIV90aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFyIG9ic2VydmVycyA9IF90aGlzLm9ic2VydmVycztcbiAgICAgICAgICAgICAgICB3aGlsZSAob2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlcnMuc2hpZnQoKS5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gbnVsbDtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdWJqZWN0LnByb3RvdHlwZSwgXCJvYnNlcnZlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgcmV0dXJuICgoX2EgPSB0aGlzLm9ic2VydmVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkgPiAwO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgU3ViamVjdC5wcm90b3R5cGUuX3RyeVN1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuX3RyeVN1YnNjcmliZS5jYWxsKHRoaXMsIHN1YnNjcmliZXIpO1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgICAgdGhpcy5fY2hlY2tGaW5hbGl6ZWRTdGF0dXNlcyhzdWJzY3JpYmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lubmVyU3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuX2lubmVyU3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gdGhpcywgaGFzRXJyb3IgPSBfYS5oYXNFcnJvciwgaXNTdG9wcGVkID0gX2EuaXNTdG9wcGVkLCBvYnNlcnZlcnMgPSBfYS5vYnNlcnZlcnM7XG4gICAgICAgIGlmIChoYXNFcnJvciB8fCBpc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBFTVBUWV9TVUJTQ1JJUFRJT047XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gbnVsbDtcbiAgICAgICAgb2JzZXJ2ZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgICAgICAgICAgYXJyUmVtb3ZlKG9ic2VydmVycywgc3Vic2NyaWJlcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuX2NoZWNrRmluYWxpemVkU3RhdHVzZXMgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBoYXNFcnJvciA9IF9hLmhhc0Vycm9yLCB0aHJvd25FcnJvciA9IF9hLnRocm93bkVycm9yLCBpc1N0b3BwZWQgPSBfYS5pc1N0b3BwZWQ7XG4gICAgICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcih0aHJvd25FcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmFzT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgICAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgU3ViamVjdC5jcmVhdGUgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gbmV3IEFub255bW91c1N1YmplY3QoZGVzdGluYXRpb24sIHNvdXJjZSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3ViamVjdDtcbn0oT2JzZXJ2YWJsZSkpO1xuZXhwb3J0IHsgU3ViamVjdCB9O1xudmFyIEFub255bW91c1N1YmplY3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBbm9ueW1vdXNTdWJqZWN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFub255bW91c1N1YmplY3QoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICBfdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmRlc3RpbmF0aW9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmV4dCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHZhbHVlKTtcbiAgICB9O1xuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmRlc3RpbmF0aW9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZXJyb3IpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCBlcnIpO1xuICAgIH07XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuZGVzdGluYXRpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb21wbGV0ZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EpO1xuICAgIH07XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHJldHVybiAoX2IgPSAoX2EgPSB0aGlzLnNvdXJjZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN1YnNjcmliZShzdWJzY3JpYmVyKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogRU1QVFlfU1VCU0NSSVBUSU9OO1xuICAgIH07XG4gICAgcmV0dXJuIEFub255bW91c1N1YmplY3Q7XG59KFN1YmplY3QpKTtcbmV4cG9ydCB7IEFub255bW91c1N1YmplY3QgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YmplY3QuanMubWFwIiwiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgaXNTdWJzY3JpcHRpb24sIFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IHJlcG9ydFVuaGFuZGxlZEVycm9yIH0gZnJvbSAnLi91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWwvbm9vcCc7XG5pbXBvcnQgeyBuZXh0Tm90aWZpY2F0aW9uLCBlcnJvck5vdGlmaWNhdGlvbiwgQ09NUExFVEVfTk9USUZJQ0FUSU9OIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25GYWN0b3JpZXMnO1xuaW1wb3J0IHsgdGltZW91dFByb3ZpZGVyIH0gZnJvbSAnLi9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyJztcbmltcG9ydCB7IGNhcHR1cmVFcnJvciB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xudmFyIFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YnNjcmliZXIoZGVzdGluYXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgIGlmIChpc1N1YnNjcmlwdGlvbihkZXN0aW5hdGlvbikpIHtcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5hZGQoX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBFTVBUWV9PQlNFUlZFUjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YnNjcmliZXIuY3JlYXRlID0gZnVuY3Rpb24gKG5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFNhZmVTdWJzY3JpYmVyKG5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihuZXh0Tm90aWZpY2F0aW9uKHZhbHVlKSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihlcnJvck5vdGlmaWNhdGlvbihlcnIpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24oQ09NUExFVEVfTk9USUZJQ0FUSU9OLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU3Vic2NyaWJlcjtcbn0oU3Vic2NyaXB0aW9uKSk7XG5leHBvcnQgeyBTdWJzY3JpYmVyIH07XG52YXIgX2JpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZDtcbmZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gX2JpbmQuY2FsbChmbiwgdGhpc0FyZyk7XG59XG52YXIgQ29uc3VtZXJPYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29uc3VtZXJPYnNlcnZlcihwYXJ0aWFsT2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5wYXJ0aWFsT2JzZXJ2ZXIgPSBwYXJ0aWFsT2JzZXJ2ZXI7XG4gICAgfVxuICAgIENvbnN1bWVyT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHBhcnRpYWxPYnNlcnZlciA9IHRoaXMucGFydGlhbE9ic2VydmVyO1xuICAgICAgICBpZiAocGFydGlhbE9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFydGlhbE9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25zdW1lck9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdmFyIHBhcnRpYWxPYnNlcnZlciA9IHRoaXMucGFydGlhbE9ic2VydmVyO1xuICAgICAgICBpZiAocGFydGlhbE9ic2VydmVyLmVycm9yKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29uc3VtZXJPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwYXJ0aWFsT2JzZXJ2ZXIgPSB0aGlzLnBhcnRpYWxPYnNlcnZlcjtcbiAgICAgICAgaWYgKHBhcnRpYWxPYnNlcnZlci5jb21wbGV0ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENvbnN1bWVyT2JzZXJ2ZXI7XG59KCkpO1xudmFyIFNhZmVTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2FmZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2FmZVN1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICB2YXIgcGFydGlhbE9ic2VydmVyO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihvYnNlcnZlck9yTmV4dCkgfHwgIW9ic2VydmVyT3JOZXh0KSB7XG4gICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgICAgICAgbmV4dDogKG9ic2VydmVyT3JOZXh0ICE9PSBudWxsICYmIG9ic2VydmVyT3JOZXh0ICE9PSB2b2lkIDAgPyBvYnNlcnZlck9yTmV4dCA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yICE9PSBudWxsICYmIGVycm9yICE9PSB2b2lkIDAgPyBlcnJvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogY29tcGxldGUgIT09IG51bGwgJiYgY29tcGxldGUgIT09IHZvaWQgMCA/IGNvbXBsZXRlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0XzE7XG4gICAgICAgICAgICBpZiAoX3RoaXMgJiYgY29uZmlnLnVzZURlcHJlY2F0ZWROZXh0Q29udGV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHRfMSA9IE9iamVjdC5jcmVhdGUob2JzZXJ2ZXJPck5leHQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHRfMS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnVuc3Vic2NyaWJlKCk7IH07XG4gICAgICAgICAgICAgICAgcGFydGlhbE9ic2VydmVyID0ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0OiBvYnNlcnZlck9yTmV4dC5uZXh0ICYmIGJpbmQob2JzZXJ2ZXJPck5leHQubmV4dCwgY29udGV4dF8xKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG9ic2VydmVyT3JOZXh0LmVycm9yICYmIGJpbmQob2JzZXJ2ZXJPck5leHQuZXJyb3IsIGNvbnRleHRfMSksXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBvYnNlcnZlck9yTmV4dC5jb21wbGV0ZSAmJiBiaW5kKG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlLCBjb250ZXh0XzEpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSBvYnNlcnZlck9yTmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBDb25zdW1lck9ic2VydmVyKHBhcnRpYWxPYnNlcnZlcik7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFNhZmVTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG5leHBvcnQgeyBTYWZlU3Vic2NyaWJlciB9O1xuZnVuY3Rpb24gaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpIHtcbiAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgY2FwdHVyZUVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlcG9ydFVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZWZhdWx0RXJyb3JIYW5kbGVyKGVycikge1xuICAgIHRocm93IGVycjtcbn1cbmZ1bmN0aW9uIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24obm90aWZpY2F0aW9uLCBzdWJzY3JpYmVyKSB7XG4gICAgdmFyIG9uU3RvcHBlZE5vdGlmaWNhdGlvbiA9IGNvbmZpZy5vblN0b3BwZWROb3RpZmljYXRpb247XG4gICAgb25TdG9wcGVkTm90aWZpY2F0aW9uICYmIHRpbWVvdXRQcm92aWRlci5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9uU3RvcHBlZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24sIHN1YnNjcmliZXIpOyB9KTtcbn1cbmV4cG9ydCB2YXIgRU1QVFlfT0JTRVJWRVIgPSB7XG4gICAgY2xvc2VkOiB0cnVlLFxuICAgIG5leHQ6IG5vb3AsXG4gICAgZXJyb3I6IGRlZmF1bHRFcnJvckhhbmRsZXIsXG4gICAgY29tcGxldGU6IG5vb3AsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3Vic2NyaWJlci5qcy5tYXAiLCJpbXBvcnQgeyBfX3JlYWQsIF9fc3ByZWFkQXJyYXksIF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgVW5zdWJzY3JpcHRpb25FcnJvciB9IGZyb20gJy4vdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yJztcbmltcG9ydCB7IGFyclJlbW92ZSB9IGZyb20gJy4vdXRpbC9hcnJSZW1vdmUnO1xudmFyIFN1YnNjcmlwdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKGluaXRpYWxUZWFyZG93bikge1xuICAgICAgICB0aGlzLmluaXRpYWxUZWFyZG93biA9IGluaXRpYWxUZWFyZG93bjtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZmluYWxpemVycyA9IG51bGw7XG4gICAgfVxuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlXzEsIF9hLCBlXzIsIF9iO1xuICAgICAgICB2YXIgZXJyb3JzO1xuICAgICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX3BhcmVudGFnZSA9IHRoaXMuX3BhcmVudGFnZTtcbiAgICAgICAgICAgIGlmIChfcGFyZW50YWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX3BhcmVudGFnZV8xID0gX192YWx1ZXMoX3BhcmVudGFnZSksIF9wYXJlbnRhZ2VfMV8xID0gX3BhcmVudGFnZV8xLm5leHQoKTsgIV9wYXJlbnRhZ2VfMV8xLmRvbmU7IF9wYXJlbnRhZ2VfMV8xID0gX3BhcmVudGFnZV8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRfMSA9IF9wYXJlbnRhZ2VfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF8xLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9wYXJlbnRhZ2VfMV8xICYmICFfcGFyZW50YWdlXzFfMS5kb25lICYmIChfYSA9IF9wYXJlbnRhZ2VfMS5yZXR1cm4pKSBfYS5jYWxsKF9wYXJlbnRhZ2VfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9wYXJlbnRhZ2UucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbml0aWFsRmluYWxpemVyID0gdGhpcy5pbml0aWFsVGVhcmRvd247XG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihpbml0aWFsRmluYWxpemVyKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxGaW5hbGl6ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZSBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IgPyBlLmVycm9ycyA6IFtlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2ZpbmFsaXplcnMgPSB0aGlzLl9maW5hbGl6ZXJzO1xuICAgICAgICAgICAgaWYgKF9maW5hbGl6ZXJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmluYWxpemVycyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2ZpbmFsaXplcnNfMSA9IF9fdmFsdWVzKF9maW5hbGl6ZXJzKSwgX2ZpbmFsaXplcnNfMV8xID0gX2ZpbmFsaXplcnNfMS5uZXh0KCk7ICFfZmluYWxpemVyc18xXzEuZG9uZTsgX2ZpbmFsaXplcnNfMV8xID0gX2ZpbmFsaXplcnNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaW5hbGl6ZXIgPSBfZmluYWxpemVyc18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWNGaW5hbGl6ZXIoZmluYWxpemVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMgIT09IG51bGwgJiYgZXJyb3JzICE9PSB2b2lkIDAgPyBlcnJvcnMgOiBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChlcnJvcnMpKSwgX19yZWFkKGVyci5lcnJvcnMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2ZpbmFsaXplcnNfMV8xICYmICFfZmluYWxpemVyc18xXzEuZG9uZSAmJiAoX2IgPSBfZmluYWxpemVyc18xLnJldHVybikpIF9iLmNhbGwoX2ZpbmFsaXplcnNfMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVW5zdWJzY3JpcHRpb25FcnJvcihlcnJvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0ZWFyZG93bikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0ZWFyZG93biAmJiB0ZWFyZG93biAhPT0gdGhpcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgZXhlY0ZpbmFsaXplcih0ZWFyZG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGVhcmRvd24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlYXJkb3duLmNsb3NlZCB8fCB0ZWFyZG93bi5faGFzUGFyZW50KHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGVhcmRvd24uX2FkZFBhcmVudCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKHRoaXMuX2ZpbmFsaXplcnMgPSAoX2EgPSB0aGlzLl9maW5hbGl6ZXJzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXSkucHVzaCh0ZWFyZG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuX2hhc1BhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRhZ2UgPSB0aGlzLl9wYXJlbnRhZ2U7XG4gICAgICAgIHJldHVybiBfcGFyZW50YWdlID09PSBwYXJlbnQgfHwgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkgJiYgX3BhcmVudGFnZS5pbmNsdWRlcyhwYXJlbnQpKTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuX2FkZFBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRhZ2UgPSB0aGlzLl9wYXJlbnRhZ2U7XG4gICAgICAgIHRoaXMuX3BhcmVudGFnZSA9IEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkgPyAoX3BhcmVudGFnZS5wdXNoKHBhcmVudCksIF9wYXJlbnRhZ2UpIDogX3BhcmVudGFnZSA/IFtfcGFyZW50YWdlLCBwYXJlbnRdIDogcGFyZW50O1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5fcmVtb3ZlUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICB2YXIgX3BhcmVudGFnZSA9IHRoaXMuX3BhcmVudGFnZTtcbiAgICAgICAgaWYgKF9wYXJlbnRhZ2UgPT09IHBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpKSB7XG4gICAgICAgICAgICBhcnJSZW1vdmUoX3BhcmVudGFnZSwgcGFyZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAodGVhcmRvd24pIHtcbiAgICAgICAgdmFyIF9maW5hbGl6ZXJzID0gdGhpcy5fZmluYWxpemVycztcbiAgICAgICAgX2ZpbmFsaXplcnMgJiYgYXJyUmVtb3ZlKF9maW5hbGl6ZXJzLCB0ZWFyZG93bik7XG4gICAgICAgIGlmICh0ZWFyZG93biBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGVhcmRvd24uX3JlbW92ZVBhcmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLkVNUFRZID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVtcHR5ID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICBlbXB0eS5jbG9zZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZW1wdHk7XG4gICAgfSkoKTtcbiAgICByZXR1cm4gU3Vic2NyaXB0aW9uO1xufSgpKTtcbmV4cG9ydCB7IFN1YnNjcmlwdGlvbiB9O1xuZXhwb3J0IHZhciBFTVBUWV9TVUJTQ1JJUFRJT04gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5leHBvcnQgZnVuY3Rpb24gaXNTdWJzY3JpcHRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uIHx8XG4gICAgICAgICh2YWx1ZSAmJiAnY2xvc2VkJyBpbiB2YWx1ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnJlbW92ZSkgJiYgaXNGdW5jdGlvbih2YWx1ZS5hZGQpICYmIGlzRnVuY3Rpb24odmFsdWUudW5zdWJzY3JpYmUpKSk7XG59XG5mdW5jdGlvbiBleGVjRmluYWxpemVyKGZpbmFsaXplcikge1xuICAgIGlmIChpc0Z1bmN0aW9uKGZpbmFsaXplcikpIHtcbiAgICAgICAgZmluYWxpemVyKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmaW5hbGl6ZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpcHRpb24uanMubWFwIiwiZXhwb3J0IHZhciBjb25maWcgPSB7XG4gICAgb25VbmhhbmRsZWRFcnJvcjogbnVsbCxcbiAgICBvblN0b3BwZWROb3RpZmljYXRpb246IG51bGwsXG4gICAgUHJvbWlzZTogdW5kZWZpbmVkLFxuICAgIHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmc6IGZhbHNlLFxuICAgIHVzZURlcHJlY2F0ZWROZXh0Q29udGV4dDogZmFsc2UsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlnLmpzLm1hcCIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmV4cG9ydCB2YXIgRU1QVFkgPSBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9KTtcbmV4cG9ydCBmdW5jdGlvbiBlbXB0eShzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gc2NoZWR1bGVyID8gZW1wdHlTY2hlZHVsZWQoc2NoZWR1bGVyKSA6IEVNUFRZO1xufVxuZnVuY3Rpb24gZW1wdHlTY2hlZHVsZWQoc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7IHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9KTsgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbXB0eS5qcy5tYXAiLCJpbXBvcnQgeyBzY2hlZHVsZWQgfSBmcm9tICcuLi9zY2hlZHVsZWQvc2NoZWR1bGVkJztcbmltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4vaW5uZXJGcm9tJztcbmV4cG9ydCBmdW5jdGlvbiBmcm9tKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gc2NoZWR1bGVyID8gc2NoZWR1bGVkKGlucHV0LCBzY2hlZHVsZXIpIDogaW5uZXJGcm9tKGlucHV0KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyb20uanMubWFwIiwiaW1wb3J0IHsgX19hc3luY1ZhbHVlcywgX19hd2FpdGVyLCBfX2dlbmVyYXRvciwgX192YWx1ZXMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGlzQXJyYXlMaWtlIH0gZnJvbSAnLi4vdXRpbC9pc0FycmF5TGlrZSc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuLi91dGlsL2lzUHJvbWlzZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0ludGVyb3BPYnNlcnZhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzQXN5bmNJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXNBc3luY0l0ZXJhYmxlJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yIH0gZnJvbSAnLi4vdXRpbC90aHJvd1Vub2JzZXJ2YWJsZUVycm9yJztcbmltcG9ydCB7IGlzSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzSXRlcmFibGUnO1xuaW1wb3J0IHsgaXNSZWFkYWJsZVN0cmVhbUxpa2UsIHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IgfSBmcm9tICcuLi91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgcmVwb3J0VW5oYW5kbGVkRXJyb3IgfSBmcm9tICcuLi91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yJztcbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gaW5uZXJGcm9tKGlucHV0KSB7XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIGlmIChpc0ludGVyb3BPYnNlcnZhYmxlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21JbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXJyYXlMaWtlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1Byb21pc2UoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbVByb21pc2UoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FzeW5jSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbUFzeW5jSXRlcmFibGUoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21JdGVyYWJsZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21SZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yKGlucHV0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSW50ZXJvcE9ic2VydmFibGUob2JqKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBvYnMgPSBvYmpbU3ltYm9sX29ic2VydmFibGVdKCk7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKG9icy5zdWJzY3JpYmUpKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm92aWRlZCBvYmplY3QgZG9lcyBub3QgY29ycmVjdGx5IGltcGxlbWVudCBTeW1ib2wub2JzZXJ2YWJsZScpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21BcnJheUxpa2UoYXJyYXkpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGggJiYgIXN1YnNjcmliZXIuY2xvc2VkOyBpKyspIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Qcm9taXNlKHByb21pc2UpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyKTsgfSlcbiAgICAgICAgICAgIC50aGVuKG51bGwsIHJlcG9ydFVuaGFuZGxlZEVycm9yKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSXRlcmFibGUoaXRlcmFibGUpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpdGVyYWJsZV8xID0gX192YWx1ZXMoaXRlcmFibGUpLCBpdGVyYWJsZV8xXzEgPSBpdGVyYWJsZV8xLm5leHQoKTsgIWl0ZXJhYmxlXzFfMS5kb25lOyBpdGVyYWJsZV8xXzEgPSBpdGVyYWJsZV8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGl0ZXJhYmxlXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmFibGVfMV8xICYmICFpdGVyYWJsZV8xXzEuZG9uZSAmJiAoX2EgPSBpdGVyYWJsZV8xLnJldHVybikpIF9hLmNhbGwoaXRlcmFibGVfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Bc3luY0l0ZXJhYmxlKGFzeW5jSXRlcmFibGUpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcHJvY2Vzcyhhc3luY0l0ZXJhYmxlLCBzdWJzY3JpYmVyKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycik7IH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21SZWFkYWJsZVN0cmVhbUxpa2UocmVhZGFibGVTdHJlYW0pIHtcbiAgICByZXR1cm4gZnJvbUFzeW5jSXRlcmFibGUocmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcihyZWFkYWJsZVN0cmVhbSkpO1xufVxuZnVuY3Rpb24gcHJvY2Vzcyhhc3luY0l0ZXJhYmxlLCBzdWJzY3JpYmVyKSB7XG4gICAgdmFyIGFzeW5jSXRlcmFibGVfMSwgYXN5bmNJdGVyYWJsZV8xXzE7XG4gICAgdmFyIGVfMiwgX2E7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUsIGVfMl8xO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDUsIDYsIDExXSk7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jSXRlcmFibGVfMSA9IF9fYXN5bmNWYWx1ZXMoYXN5bmNJdGVyYWJsZSk7XG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNCwgYXN5bmNJdGVyYWJsZV8xLm5leHQoKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIShhc3luY0l0ZXJhYmxlXzFfMSA9IF9iLnNlbnQoKSwgIWFzeW5jSXRlcmFibGVfMV8xLmRvbmUpKSByZXR1cm4gWzMsIDRdO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGFzeW5jSXRlcmFibGVfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFszLCAxXTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMywgMTFdO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgZV8yXzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMTFdO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFs2LCAsIDksIDEwXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGFzeW5jSXRlcmFibGVfMV8xICYmICFhc3luY0l0ZXJhYmxlXzFfMS5kb25lICYmIChfYSA9IGFzeW5jSXRlcmFibGVfMS5yZXR1cm4pKSkgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBfYS5jYWxsKGFzeW5jSXRlcmFibGVfMSldO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDg7XG4gICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzMsIDEwXTtcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgIGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3XTtcbiAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzddO1xuICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbm5lckZyb20uanMubWFwIiwiaW1wb3J0IHsgYXN5bmNTY2hlZHVsZXIgfSBmcm9tICcuLi9zY2hlZHVsZXIvYXN5bmMnO1xuaW1wb3J0IHsgdGltZXIgfSBmcm9tICcuL3RpbWVyJztcbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnZhbChwZXJpb2QsIHNjaGVkdWxlcikge1xuICAgIGlmIChwZXJpb2QgPT09IHZvaWQgMCkgeyBwZXJpb2QgPSAwOyB9XG4gICAgaWYgKHNjaGVkdWxlciA9PT0gdm9pZCAwKSB7IHNjaGVkdWxlciA9IGFzeW5jU2NoZWR1bGVyOyB9XG4gICAgaWYgKHBlcmlvZCA8IDApIHtcbiAgICAgICAgcGVyaW9kID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRpbWVyKHBlcmlvZCwgcGVyaW9kLCBzY2hlZHVsZXIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJ2YWwuanMubWFwIiwiaW1wb3J0IHsgbWVyZ2VBbGwgfSBmcm9tICcuLi9vcGVyYXRvcnMvbWVyZ2VBbGwnO1xuaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi9pbm5lckZyb20nO1xuaW1wb3J0IHsgRU1QVFkgfSBmcm9tICcuL2VtcHR5JztcbmltcG9ydCB7IHBvcE51bWJlciwgcG9wU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9hcmdzJztcbmltcG9ydCB7IGZyb20gfSBmcm9tICcuL2Zyb20nO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgc2NoZWR1bGVyID0gcG9wU2NoZWR1bGVyKGFyZ3MpO1xuICAgIHZhciBjb25jdXJyZW50ID0gcG9wTnVtYmVyKGFyZ3MsIEluZmluaXR5KTtcbiAgICB2YXIgc291cmNlcyA9IGFyZ3M7XG4gICAgcmV0dXJuICFzb3VyY2VzLmxlbmd0aFxuICAgICAgICA/XG4gICAgICAgICAgICBFTVBUWVxuICAgICAgICA6IHNvdXJjZXMubGVuZ3RoID09PSAxXG4gICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgaW5uZXJGcm9tKHNvdXJjZXNbMF0pXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgbWVyZ2VBbGwoY29uY3VycmVudCkoZnJvbShzb3VyY2VzLCBzY2hlZHVsZXIpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlLmpzLm1hcCIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGFzeW5jIGFzIGFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi4vc2NoZWR1bGVyL2FzeW5jJztcbmltcG9ydCB7IGlzU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9pc1NjaGVkdWxlcic7XG5pbXBvcnQgeyBpc1ZhbGlkRGF0ZSB9IGZyb20gJy4uL3V0aWwvaXNEYXRlJztcbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihkdWVUaW1lLCBpbnRlcnZhbE9yU2NoZWR1bGVyLCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoZHVlVGltZSA9PT0gdm9pZCAwKSB7IGR1ZVRpbWUgPSAwOyB9XG4gICAgaWYgKHNjaGVkdWxlciA9PT0gdm9pZCAwKSB7IHNjaGVkdWxlciA9IGFzeW5jU2NoZWR1bGVyOyB9XG4gICAgdmFyIGludGVydmFsRHVyYXRpb24gPSAtMTtcbiAgICBpZiAoaW50ZXJ2YWxPclNjaGVkdWxlciAhPSBudWxsKSB7XG4gICAgICAgIGlmIChpc1NjaGVkdWxlcihpbnRlcnZhbE9yU2NoZWR1bGVyKSkge1xuICAgICAgICAgICAgc2NoZWR1bGVyID0gaW50ZXJ2YWxPclNjaGVkdWxlcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGludGVydmFsRHVyYXRpb24gPSBpbnRlcnZhbE9yU2NoZWR1bGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgZHVlID0gaXNWYWxpZERhdGUoZHVlVGltZSkgPyArZHVlVGltZSAtIHNjaGVkdWxlci5ub3coKSA6IGR1ZVRpbWU7XG4gICAgICAgIGlmIChkdWUgPCAwKSB7XG4gICAgICAgICAgICBkdWUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuID0gMDtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KG4rKyk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPD0gaW50ZXJ2YWxEdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHVuZGVmaW5lZCwgaW50ZXJ2YWxEdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkdWUpO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGltZXIuanMubWFwIiwiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBvbk5leHQsIG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uRmluYWxpemUpIHtcbiAgICByZXR1cm4gbmV3IE9wZXJhdG9yU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgb25OZXh0LCBvbkNvbXBsZXRlLCBvbkVycm9yLCBvbkZpbmFsaXplKTtcbn1cbnZhciBPcGVyYXRvclN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPcGVyYXRvclN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT3BlcmF0b3JTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBvbk5leHQsIG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uRmluYWxpemUsIHNob3VsZFVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vbkZpbmFsaXplID0gb25GaW5hbGl6ZTtcbiAgICAgICAgX3RoaXMuc2hvdWxkVW5zdWJzY3JpYmUgPSBzaG91bGRVbnN1YnNjcmliZTtcbiAgICAgICAgX3RoaXMuX25leHQgPSBvbk5leHRcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb25OZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogX3N1cGVyLnByb3RvdHlwZS5fbmV4dDtcbiAgICAgICAgX3RoaXMuX2Vycm9yID0gb25FcnJvclxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBfc3VwZXIucHJvdG90eXBlLl9lcnJvcjtcbiAgICAgICAgX3RoaXMuX2NvbXBsZXRlID0gb25Db21wbGV0ZVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBfc3VwZXIucHJvdG90eXBlLl9jb21wbGV0ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPcGVyYXRvclN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy5zaG91bGRVbnN1YnNjcmliZSB8fCB0aGlzLnNob3VsZFVuc3Vic2NyaWJlKCkpIHtcbiAgICAgICAgICAgIHZhciBjbG9zZWRfMSA9IHRoaXMuY2xvc2VkO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgIWNsb3NlZF8xICYmICgoX2EgPSB0aGlzLm9uRmluYWxpemUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE9wZXJhdG9yU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgT3BlcmF0b3JTdWJzY3JpYmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PcGVyYXRvclN1YnNjcmliZXIuanMubWFwIiwiaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gbWFwKHByb2plY3QsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gb3BlcmF0ZShmdW5jdGlvbiAoc291cmNlLCBzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHNvdXJjZS5zdWJzY3JpYmUoY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHByb2plY3QuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaW5kZXgrKykpO1xuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXAuanMubWFwIiwiaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICcuL21lcmdlTWFwJztcbmltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi4vdXRpbC9pZGVudGl0eSc7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VBbGwoY29uY3VycmVudCkge1xuICAgIGlmIChjb25jdXJyZW50ID09PSB2b2lkIDApIHsgY29uY3VycmVudCA9IEluZmluaXR5OyB9XG4gICAgcmV0dXJuIG1lcmdlTWFwKGlkZW50aXR5LCBjb25jdXJyZW50KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlQWxsLmpzLm1hcCIsImltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUludGVybmFscyhzb3VyY2UsIHN1YnNjcmliZXIsIHByb2plY3QsIGNvbmN1cnJlbnQsIG9uQmVmb3JlTmV4dCwgZXhwYW5kLCBpbm5lclN1YlNjaGVkdWxlciwgYWRkaXRpb25hbEZpbmFsaXplcikge1xuICAgIHZhciBidWZmZXIgPSBbXTtcbiAgICB2YXIgYWN0aXZlID0gMDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgdmFyIGNoZWNrQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc0NvbXBsZXRlICYmICFidWZmZXIubGVuZ3RoICYmICFhY3RpdmUpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG91dGVyTmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gKGFjdGl2ZSA8IGNvbmN1cnJlbnQgPyBkb0lubmVyU3ViKHZhbHVlKSA6IGJ1ZmZlci5wdXNoKHZhbHVlKSk7IH07XG4gICAgdmFyIGRvSW5uZXJTdWIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgZXhwYW5kICYmIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgIGFjdGl2ZSsrO1xuICAgICAgICB2YXIgaW5uZXJDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICBpbm5lckZyb20ocHJvamVjdCh2YWx1ZSwgaW5kZXgrKykpLnN1YnNjcmliZShjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgZnVuY3Rpb24gKGlubmVyVmFsdWUpIHtcbiAgICAgICAgICAgIG9uQmVmb3JlTmV4dCA9PT0gbnVsbCB8fCBvbkJlZm9yZU5leHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQmVmb3JlTmV4dChpbm5lclZhbHVlKTtcbiAgICAgICAgICAgIGlmIChleHBhbmQpIHtcbiAgICAgICAgICAgICAgICBvdXRlck5leHQoaW5uZXJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoaW5uZXJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlubmVyQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9LCB1bmRlZmluZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpbm5lckNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlLS07XG4gICAgICAgICAgICAgICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ1ZmZlcmVkVmFsdWUgPSBidWZmZXIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbm5lclN1YlNjaGVkdWxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBpbm5lclN1YlNjaGVkdWxlciwgZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9Jbm5lclN1YihidWZmZXJlZFZhbHVlKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb0lubmVyU3ViKGJ1ZmZlcmVkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYnVmZmVyLmxlbmd0aCAmJiBhY3RpdmUgPCBjb25jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfbG9vcF8xKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIHNvdXJjZS5zdWJzY3JpYmUoY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIG91dGVyTmV4dCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgY2hlY2tDb21wbGV0ZSgpO1xuICAgIH0pKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRpdGlvbmFsRmluYWxpemVyID09PSBudWxsIHx8IGFkZGl0aW9uYWxGaW5hbGl6ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFkZGl0aW9uYWxGaW5hbGl6ZXIoKTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVyZ2VJbnRlcm5hbHMuanMubWFwIiwiaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9tYXAnO1xuaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9pbm5lckZyb20nO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBtZXJnZUludGVybmFscyB9IGZyb20gJy4vbWVyZ2VJbnRlcm5hbHMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWwvaXNGdW5jdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNYXAocHJvamVjdCwgcmVzdWx0U2VsZWN0b3IsIGNvbmN1cnJlbnQpIHtcbiAgICBpZiAoY29uY3VycmVudCA9PT0gdm9pZCAwKSB7IGNvbmN1cnJlbnQgPSBJbmZpbml0eTsgfVxuICAgIGlmIChpc0Z1bmN0aW9uKHJlc3VsdFNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gbWVyZ2VNYXAoZnVuY3Rpb24gKGEsIGkpIHsgcmV0dXJuIG1hcChmdW5jdGlvbiAoYiwgaWkpIHsgcmV0dXJuIHJlc3VsdFNlbGVjdG9yKGEsIGIsIGksIGlpKTsgfSkoaW5uZXJGcm9tKHByb2plY3QoYSwgaSkpKTsgfSwgY29uY3VycmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiByZXN1bHRTZWxlY3RvciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uY3VycmVudCA9IHJlc3VsdFNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gb3BlcmF0ZShmdW5jdGlvbiAoc291cmNlLCBzdWJzY3JpYmVyKSB7IHJldHVybiBtZXJnZUludGVybmFscyhzb3VyY2UsIHN1YnNjcmliZXIsIHByb2plY3QsIGNvbmN1cnJlbnQpOyB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlTWFwLmpzLm1hcCIsImltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcbmltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVPbihzY2hlZHVsZXIsIGRlbGF5KSB7XG4gICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgcmV0dXJuIG9wZXJhdGUoZnVuY3Rpb24gKHNvdXJjZSwgc3Vic2NyaWJlcikge1xuICAgICAgICBzb3VyY2Uuc3Vic2NyaWJlKGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7IH0sIGRlbGF5KTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9LCBkZWxheSk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyKTsgfSwgZGVsYXkpOyB9KSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYnNlcnZlT24uanMubWFwIiwiaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlT24oc2NoZWR1bGVyLCBkZWxheSkge1xuICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgIHJldHVybiBvcGVyYXRlKGZ1bmN0aW9uIChzb3VyY2UsIHN1YnNjcmliZXIpIHtcbiAgICAgICAgc3Vic2NyaWJlci5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7IH0sIGRlbGF5KSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVPbi5qcy5tYXAiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVBcnJheShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGlucHV0W2krK10pO1xuICAgICAgICAgICAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZUFycmF5LmpzLm1hcCIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUFzeW5jSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJdGVyYWJsZSBjYW5ub3QgYmUgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaW5wdXRbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk7XG4gICAgICAgICAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAwLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZUFzeW5jSXRlcmFibGUuanMubWFwIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgaXRlcmF0b3IgYXMgU3ltYm9sX2l0ZXJhdG9yIH0gZnJvbSAnLi4vc3ltYm9sL2l0ZXJhdG9yJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgaXRlcmF0b3I7XG4gICAgICAgIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yID0gaW5wdXRbU3ltYm9sX2l0ZXJhdG9yXSgpO1xuICAgICAgICAgICAgZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIGRvbmU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gaXRlcmF0b3IubmV4dCgpLCB2YWx1ZSA9IF9hLnZhbHVlLCBkb25lID0gX2EuZG9uZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMCwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXNGdW5jdGlvbihpdGVyYXRvciA9PT0gbnVsbCB8fCBpdGVyYXRvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaXRlcmF0b3IucmV0dXJuKSAmJiBpdGVyYXRvci5yZXR1cm4oKTsgfTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlSXRlcmFibGUuanMubWFwIiwiaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9pbm5lckZyb20nO1xuaW1wb3J0IHsgb2JzZXJ2ZU9uIH0gZnJvbSAnLi4vb3BlcmF0b3JzL29ic2VydmVPbic7XG5pbXBvcnQgeyBzdWJzY3JpYmVPbiB9IGZyb20gJy4uL29wZXJhdG9ycy9zdWJzY3JpYmVPbic7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVPYnNlcnZhYmxlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gaW5uZXJGcm9tKGlucHV0KS5waXBlKHN1YnNjcmliZU9uKHNjaGVkdWxlciksIG9ic2VydmVPbihzY2hlZHVsZXIpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlT2JzZXJ2YWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2lubmVyRnJvbSc7XG5pbXBvcnQgeyBvYnNlcnZlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvb2JzZXJ2ZU9uJztcbmltcG9ydCB7IHN1YnNjcmliZU9uIH0gZnJvbSAnLi4vb3BlcmF0b3JzL3N1YnNjcmliZU9uJztcbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZVByb21pc2UoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBpbm5lckZyb20oaW5wdXQpLnBpcGUoc3Vic2NyaWJlT24oc2NoZWR1bGVyKSwgb2JzZXJ2ZU9uKHNjaGVkdWxlcikpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVQcm9taXNlLmpzLm1hcCIsImltcG9ydCB7IHNjaGVkdWxlQXN5bmNJdGVyYWJsZSB9IGZyb20gJy4vc2NoZWR1bGVBc3luY0l0ZXJhYmxlJztcbmltcG9ydCB7IHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IgfSBmcm9tICcuLi91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlJztcbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIHNjaGVkdWxlQXN5bmNJdGVyYWJsZShyZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yKGlucHV0KSwgc2NoZWR1bGVyKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlLmpzLm1hcCIsImltcG9ydCB7IHNjaGVkdWxlT2JzZXJ2YWJsZSB9IGZyb20gJy4vc2NoZWR1bGVPYnNlcnZhYmxlJztcbmltcG9ydCB7IHNjaGVkdWxlUHJvbWlzZSB9IGZyb20gJy4vc2NoZWR1bGVQcm9taXNlJztcbmltcG9ydCB7IHNjaGVkdWxlQXJyYXkgfSBmcm9tICcuL3NjaGVkdWxlQXJyYXknO1xuaW1wb3J0IHsgc2NoZWR1bGVJdGVyYWJsZSB9IGZyb20gJy4vc2NoZWR1bGVJdGVyYWJsZSc7XG5pbXBvcnQgeyBzY2hlZHVsZUFzeW5jSXRlcmFibGUgfSBmcm9tICcuL3NjaGVkdWxlQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyBpc0ludGVyb3BPYnNlcnZhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJy4uL3V0aWwvaXNQcm9taXNlJztcbmltcG9ydCB7IGlzQXJyYXlMaWtlIH0gZnJvbSAnLi4vdXRpbC9pc0FycmF5TGlrZSc7XG5pbXBvcnQgeyBpc0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0l0ZXJhYmxlJztcbmltcG9ydCB7IGlzQXN5bmNJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXNBc3luY0l0ZXJhYmxlJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yIH0gZnJvbSAnLi4vdXRpbC90aHJvd1Vub2JzZXJ2YWJsZUVycm9yJztcbmltcG9ydCB7IGlzUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi4vdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZSc7XG5pbXBvcnQgeyBzY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZSB9IGZyb20gJy4vc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UnO1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlZChpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVPYnNlcnZhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FycmF5TGlrZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZUFycmF5KGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1Byb21pc2UoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVQcm9taXNlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FzeW5jSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVBc3luY0l0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yKGlucHV0KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlZC5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG52YXIgQWN0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFjdGlvbihzY2hlZHVsZXIsIHdvcmspIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEFjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBBY3Rpb247XG59KFN1YnNjcmlwdGlvbikpO1xuZXhwb3J0IHsgQWN0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BY3Rpb24uanMubWFwIiwiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgeyBpbnRlcnZhbFByb3ZpZGVyIH0gZnJvbSAnLi9pbnRlcnZhbFByb3ZpZGVyJztcbmltcG9ydCB7IGFyclJlbW92ZSB9IGZyb20gJy4uL3V0aWwvYXJyUmVtb3ZlJztcbnZhciBBc3luY0FjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFzeW5jQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzeW5jQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIHdvcmspIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMud29yayA9IHdvcms7XG4gICAgICAgIF90aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuICAgICAgICB2YXIgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZChzY2hlZHVsZXIsIGlkLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICB0aGlzLmlkID0gKF9hID0gdGhpcy5pZCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGhpcy5yZXF1ZXN0QXN5bmNJZChzY2hlZHVsZXIsIHRoaXMuaWQsIGRlbGF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUucmVxdWVzdEFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBfaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICByZXR1cm4gaW50ZXJ2YWxQcm92aWRlci5zZXRJbnRlcnZhbChzY2hlZHVsZXIuZmx1c2guYmluZChzY2hlZHVsZXIsIHRoaXMpLCBkZWxheSk7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUucmVjeWNsZUFzeW5jSWQgPSBmdW5jdGlvbiAoX3NjaGVkdWxlciwgaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICBpZiAoZGVsYXkgIT0gbnVsbCAmJiB0aGlzLmRlbGF5ID09PSBkZWxheSAmJiB0aGlzLnBlbmRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGludGVydmFsUHJvdmlkZXIuY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ2V4ZWN1dGluZyBhIGNhbmNlbGxlZCBhY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yID0gdGhpcy5fZXhlY3V0ZShzdGF0ZSwgZGVsYXkpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBlbmRpbmcgPT09IGZhbHNlICYmIHRoaXMuaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVjeWNsZUFzeW5jSWQodGhpcy5zY2hlZHVsZXIsIHRoaXMuaWQsIG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuX2V4ZWN1dGUgPSBmdW5jdGlvbiAoc3RhdGUsIF9kZWxheSkge1xuICAgICAgICB2YXIgZXJyb3JlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3JWYWx1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMud29yayhzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgZXJyb3JWYWx1ZSA9IGUgPyBlIDogbmV3IEVycm9yKCdTY2hlZHVsZWQgYWN0aW9uIHRocmV3IGZhbHN5IGVycm9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvclZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGlkID0gX2EuaWQsIHNjaGVkdWxlciA9IF9hLnNjaGVkdWxlcjtcbiAgICAgICAgICAgIHZhciBhY3Rpb25zID0gc2NoZWR1bGVyLmFjdGlvbnM7XG4gICAgICAgICAgICB0aGlzLndvcmsgPSB0aGlzLnN0YXRlID0gdGhpcy5zY2hlZHVsZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBhcnJSZW1vdmUoYWN0aW9ucywgdGhpcyk7XG4gICAgICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHNjaGVkdWxlciwgaWQsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kZWxheSA9IG51bGw7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBc3luY0FjdGlvbjtcbn0oQWN0aW9uKSk7XG5leHBvcnQgeyBBc3luY0FjdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXN5bmNBY3Rpb24uanMubWFwIiwiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTY2hlZHVsZXIgfSBmcm9tICcuLi9TY2hlZHVsZXInO1xudmFyIEFzeW5jU2NoZWR1bGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXN5bmNTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXN5bmNTY2hlZHVsZXIoU2NoZWR1bGVyQWN0aW9uLCBub3cpIHtcbiAgICAgICAgaWYgKG5vdyA9PT0gdm9pZCAwKSB7IG5vdyA9IFNjaGVkdWxlci5ub3c7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgU2NoZWR1bGVyQWN0aW9uLCBub3cpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFjdGlvbnMgPSBbXTtcbiAgICAgICAgX3RoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFzeW5jU2NoZWR1bGVyLnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSB0aGlzLmFjdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKChlcnJvciA9IGFjdGlvbi5leGVjdXRlKGFjdGlvbi5zdGF0ZSwgYWN0aW9uLmRlbGF5KSkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkpO1xuICAgICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB3aGlsZSAoKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQXN5bmNTY2hlZHVsZXI7XG59KFNjaGVkdWxlcikpO1xuZXhwb3J0IHsgQXN5bmNTY2hlZHVsZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFzeW5jU2NoZWR1bGVyLmpzLm1hcCIsImltcG9ydCB7IEFzeW5jQWN0aW9uIH0gZnJvbSAnLi9Bc3luY0FjdGlvbic7XG5pbXBvcnQgeyBBc3luY1NjaGVkdWxlciB9IGZyb20gJy4vQXN5bmNTY2hlZHVsZXInO1xuZXhwb3J0IHZhciBhc3luY1NjaGVkdWxlciA9IG5ldyBBc3luY1NjaGVkdWxlcihBc3luY0FjdGlvbik7XG5leHBvcnQgdmFyIGFzeW5jID0gYXN5bmNTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3luYy5qcy5tYXAiLCJleHBvcnQgdmFyIGRhdGVUaW1lc3RhbXBQcm92aWRlciA9IHtcbiAgICBub3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChkYXRlVGltZXN0YW1wUHJvdmlkZXIuZGVsZWdhdGUgfHwgRGF0ZSkubm93KCk7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZTogdW5kZWZpbmVkLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGVUaW1lc3RhbXBQcm92aWRlci5qcy5tYXAiLCJpbXBvcnQgeyBfX3JlYWQsIF9fc3ByZWFkQXJyYXkgfSBmcm9tIFwidHNsaWJcIjtcbmV4cG9ydCB2YXIgaW50ZXJ2YWxQcm92aWRlciA9IHtcbiAgICBzZXRJbnRlcnZhbDogZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGVnYXRlID0gaW50ZXJ2YWxQcm92aWRlci5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlID09PSBudWxsIHx8IGRlbGVnYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWxlZ2F0ZS5zZXRJbnRlcnZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLnNldEludGVydmFsLmFwcGx5KGRlbGVnYXRlLCBfX3NwcmVhZEFycmF5KFtoYW5kbGVyLCB0aW1lb3V0XSwgX19yZWFkKGFyZ3MpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsLmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheShbaGFuZGxlciwgdGltZW91dF0sIF9fcmVhZChhcmdzKSkpO1xuICAgIH0sXG4gICAgY2xlYXJJbnRlcnZhbDogZnVuY3Rpb24gKGhhbmRsZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBpbnRlcnZhbFByb3ZpZGVyLmRlbGVnYXRlO1xuICAgICAgICByZXR1cm4gKChkZWxlZ2F0ZSA9PT0gbnVsbCB8fCBkZWxlZ2F0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVsZWdhdGUuY2xlYXJJbnRlcnZhbCkgfHwgY2xlYXJJbnRlcnZhbCkoaGFuZGxlKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlOiB1bmRlZmluZWQsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJ2YWxQcm92aWRlci5qcy5tYXAiLCJpbXBvcnQgeyBfX3JlYWQsIF9fc3ByZWFkQXJyYXkgfSBmcm9tIFwidHNsaWJcIjtcbmV4cG9ydCB2YXIgdGltZW91dFByb3ZpZGVyID0ge1xuICAgIHNldFRpbWVvdXQ6IGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IHRpbWVvdXRQcm92aWRlci5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlID09PSBudWxsIHx8IGRlbGVnYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWxlZ2F0ZS5zZXRUaW1lb3V0KSB7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuc2V0VGltZW91dC5hcHBseShkZWxlZ2F0ZSwgX19zcHJlYWRBcnJheShbaGFuZGxlciwgdGltZW91dF0sIF9fcmVhZChhcmdzKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0LmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheShbaGFuZGxlciwgdGltZW91dF0sIF9fcmVhZChhcmdzKSkpO1xuICAgIH0sXG4gICAgY2xlYXJUaW1lb3V0OiBmdW5jdGlvbiAoaGFuZGxlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IHRpbWVvdXRQcm92aWRlci5kZWxlZ2F0ZTtcbiAgICAgICAgcmV0dXJuICgoZGVsZWdhdGUgPT09IG51bGwgfHwgZGVsZWdhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlbGVnYXRlLmNsZWFyVGltZW91dCkgfHwgY2xlYXJUaW1lb3V0KShoYW5kbGUpO1xuICAgIH0sXG4gICAgZGVsZWdhdGU6IHVuZGVmaW5lZCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aW1lb3V0UHJvdmlkZXIuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFN5bWJvbEl0ZXJhdG9yKCkge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nIHx8ICFTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuICdAQGl0ZXJhdG9yJztcbiAgICB9XG4gICAgcmV0dXJuIFN5bWJvbC5pdGVyYXRvcjtcbn1cbmV4cG9ydCB2YXIgaXRlcmF0b3IgPSBnZXRTeW1ib2xJdGVyYXRvcigpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXRlcmF0b3IuanMubWFwIiwiZXhwb3J0IHZhciBvYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHsgcmV0dXJuICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlKSB8fCAnQEBvYnNlcnZhYmxlJzsgfSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ic2VydmFibGUuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRXJyb3JDbGFzcyB9IGZyb20gJy4vY3JlYXRlRXJyb3JDbGFzcyc7XG5leHBvcnQgdmFyIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yID0gY3JlYXRlRXJyb3JDbGFzcyhmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbCgpIHtcbiAgICAgICAgX3N1cGVyKHRoaXMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnb2JqZWN0IHVuc3Vic2NyaWJlZCc7XG4gICAgfTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRXJyb3JDbGFzcyB9IGZyb20gJy4vY3JlYXRlRXJyb3JDbGFzcyc7XG5leHBvcnQgdmFyIFVuc3Vic2NyaXB0aW9uRXJyb3IgPSBjcmVhdGVFcnJvckNsYXNzKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gVW5zdWJzY3JpcHRpb25FcnJvckltcGwoZXJyb3JzKSB7XG4gICAgICAgIF9zdXBlcih0aGlzKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gZXJyb3JzXG4gICAgICAgICAgICA/IGVycm9ycy5sZW5ndGggKyBcIiBlcnJvcnMgb2NjdXJyZWQgZHVyaW5nIHVuc3Vic2NyaXB0aW9uOlxcblwiICsgZXJyb3JzLm1hcChmdW5jdGlvbiAoZXJyLCBpKSB7IHJldHVybiBpICsgMSArIFwiKSBcIiArIGVyci50b1N0cmluZygpOyB9KS5qb2luKCdcXG4gICcpXG4gICAgICAgICAgICA6ICcnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnVW5zdWJzY3JpcHRpb25FcnJvcic7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIH07XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVVuc3Vic2NyaXB0aW9uRXJyb3IuanMubWFwIiwiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBpc1NjaGVkdWxlciB9IGZyb20gJy4vaXNTY2hlZHVsZXInO1xuZnVuY3Rpb24gbGFzdChhcnIpIHtcbiAgICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwb3BSZXN1bHRTZWxlY3RvcihhcmdzKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24obGFzdChhcmdzKSkgPyBhcmdzLnBvcCgpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvcFNjaGVkdWxlcihhcmdzKSB7XG4gICAgcmV0dXJuIGlzU2NoZWR1bGVyKGxhc3QoYXJncykpID8gYXJncy5wb3AoKSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwb3BOdW1iZXIoYXJncywgZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBsYXN0KGFyZ3MpID09PSAnbnVtYmVyJyA/IGFyZ3MucG9wKCkgOiBkZWZhdWx0VmFsdWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcmdzLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBhcnJSZW1vdmUoYXJyLCBpdGVtKSB7XG4gICAgaWYgKGFycikge1xuICAgICAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgMCA8PSBpbmRleCAmJiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJSZW1vdmUuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVycm9yQ2xhc3MoY3JlYXRlSW1wbCkge1xuICAgIHZhciBfc3VwZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgRXJyb3IuY2FsbChpbnN0YW5jZSk7XG4gICAgICAgIGluc3RhbmNlLnN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgfTtcbiAgICB2YXIgY3RvckZ1bmMgPSBjcmVhdGVJbXBsKF9zdXBlcik7XG4gICAgY3RvckZ1bmMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIGN0b3JGdW5jLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JGdW5jO1xuICAgIHJldHVybiBjdG9yRnVuYztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUVycm9yQ2xhc3MuanMubWFwIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbnZhciBjb250ZXh0ID0gbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBlcnJvckNvbnRleHQoY2IpIHtcbiAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgdmFyIGlzUm9vdCA9ICFjb250ZXh0O1xuICAgICAgICBpZiAoaXNSb290KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0geyBlcnJvclRocm93bjogZmFsc2UsIGVycm9yOiBudWxsIH07XG4gICAgICAgIH1cbiAgICAgICAgY2IoKTtcbiAgICAgICAgaWYgKGlzUm9vdCkge1xuICAgICAgICAgICAgdmFyIF9hID0gY29udGV4dCwgZXJyb3JUaHJvd24gPSBfYS5lcnJvclRocm93biwgZXJyb3IgPSBfYS5lcnJvcjtcbiAgICAgICAgICAgIGNvbnRleHQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNiKCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNhcHR1cmVFcnJvcihlcnIpIHtcbiAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgJiYgY29udGV4dCkge1xuICAgICAgICBjb250ZXh0LmVycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgY29udGV4dC5lcnJvciA9IGVycjtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcnJvckNvbnRleHQuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVTY2hlZHVsZShwYXJlbnRTdWJzY3JpcHRpb24sIHNjaGVkdWxlciwgd29yaywgZGVsYXksIHJlcGVhdCkge1xuICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgIGlmIChyZXBlYXQgPT09IHZvaWQgMCkgeyByZXBlYXQgPSBmYWxzZTsgfVxuICAgIHZhciBzY2hlZHVsZVN1YnNjcmlwdGlvbiA9IHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdvcmsoKTtcbiAgICAgICAgaWYgKHJlcGVhdCkge1xuICAgICAgICAgICAgcGFyZW50U3Vic2NyaXB0aW9uLmFkZCh0aGlzLnNjaGVkdWxlKG51bGwsIGRlbGF5KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9LCBkZWxheSk7XG4gICAgcGFyZW50U3Vic2NyaXB0aW9uLmFkZChzY2hlZHVsZVN1YnNjcmlwdGlvbik7XG4gICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlU3Vic2NyaXB0aW9uO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4ZWN1dGVTY2hlZHVsZS5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkoeCkge1xuICAgIHJldHVybiB4O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWRlbnRpdHkuanMubWFwIiwiZXhwb3J0IHZhciBpc0FycmF5TGlrZSA9IChmdW5jdGlvbiAoeCkgeyByZXR1cm4geCAmJiB0eXBlb2YgeC5sZW5ndGggPT09ICdudW1iZXInICYmIHR5cGVvZiB4ICE9PSAnZnVuY3Rpb24nOyB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzQXJyYXlMaWtlLmpzLm1hcCIsImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXN5bmNJdGVyYWJsZShvYmopIHtcbiAgICByZXR1cm4gU3ltYm9sLmFzeW5jSXRlcmF0b3IgJiYgaXNGdW5jdGlvbihvYmogPT09IG51bGwgfHwgb2JqID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvYmpbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzQXN5bmNJdGVyYWJsZS5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gaXNWYWxpZERhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmICFpc05hTih2YWx1ZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0RhdGUuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNGdW5jdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGlucHV0W1N5bWJvbF9vYnNlcnZhYmxlXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0ludGVyb3BPYnNlcnZhYmxlLmpzLm1hcCIsImltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uL3N5bWJvbC9pdGVyYXRvcic7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcbmV4cG9ydCBmdW5jdGlvbiBpc0l0ZXJhYmxlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0W1N5bWJvbF9pdGVyYXRvcl0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNJdGVyYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSBcIi4vaXNGdW5jdGlvblwiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWx1ZS50aGVuKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzUHJvbWlzZS5qcy5tYXAiLCJpbXBvcnQgeyBfX2FzeW5jR2VuZXJhdG9yLCBfX2F3YWl0LCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcihyZWFkYWJsZVN0cmVhbSkge1xuICAgIHJldHVybiBfX2FzeW5jR2VuZXJhdG9yKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24gcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcl8xKCkge1xuICAgICAgICB2YXIgcmVhZGVyLCBfYSwgdmFsdWUsIGRvbmU7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9IHJlYWRhYmxlU3RyZWFtLmdldFJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsICwgOSwgMTBdKTtcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cnVlKSByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIF9fYXdhaXQocmVhZGVyLnJlYWQoKSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBfYi5zZW50KCksIHZhbHVlID0gX2EudmFsdWUsIGRvbmUgPSBfYS5kb25lO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRvbmUpIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgX19hd2FpdCh2b2lkIDApXTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiwgX2Iuc2VudCgpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbNCwgX19hd2FpdCh2YWx1ZSldO1xuICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFs0LCBfYi5zZW50KCldO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgIGNhc2UgODogcmV0dXJuIFszLCAxMF07XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVsZWFzZUxvY2soKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3XTtcbiAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWRhYmxlU3RyZWFtTGlrZShvYmopIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihvYmogPT09IG51bGwgfHwgb2JqID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvYmouZ2V0UmVhZGVyKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzUmVhZGFibGVTdHJlYW1MaWtlLmpzLm1hcCIsImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2NoZWR1bGVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUuc2NoZWR1bGUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNTY2hlZHVsZXIuanMubWFwIiwiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gaGFzTGlmdChzb3VyY2UpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihzb3VyY2UgPT09IG51bGwgfHwgc291cmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzb3VyY2UubGlmdCk7XG59XG5leHBvcnQgZnVuY3Rpb24gb3BlcmF0ZShpbml0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgaWYgKGhhc0xpZnQoc291cmNlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KGZ1bmN0aW9uIChsaWZ0ZWRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5pdChsaWZ0ZWRTb3VyY2UsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmFibGUgdG8gbGlmdCB1bmtub3duIE9ic2VydmFibGUgdHlwZScpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saWZ0LmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBub29wKCkgeyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub29wLmpzLm1hcCIsImltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi9pZGVudGl0eSc7XG5leHBvcnQgZnVuY3Rpb24gcGlwZSgpIHtcbiAgICB2YXIgZm5zID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgZm5zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBwaXBlRnJvbUFycmF5KGZucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGlwZUZyb21BcnJheShmbnMpIHtcbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaWRlbnRpdHk7XG4gICAgfVxuICAgIGlmIChmbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBmbnNbMF07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiBwaXBlZChpbnB1dCkge1xuICAgICAgICByZXR1cm4gZm5zLnJlZHVjZShmdW5jdGlvbiAocHJldiwgZm4pIHsgcmV0dXJuIGZuKHByZXYpOyB9LCBpbnB1dCk7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBpcGUuanMubWFwIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IHRpbWVvdXRQcm92aWRlciB9IGZyb20gJy4uL3NjaGVkdWxlci90aW1lb3V0UHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHJlcG9ydFVuaGFuZGxlZEVycm9yKGVycikge1xuICAgIHRpbWVvdXRQcm92aWRlci5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9uVW5oYW5kbGVkRXJyb3IgPSBjb25maWcub25VbmhhbmRsZWRFcnJvcjtcbiAgICAgICAgaWYgKG9uVW5oYW5kbGVkRXJyb3IpIHtcbiAgICAgICAgICAgIG9uVW5oYW5kbGVkRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVwb3J0VW5oYW5kbGVkRXJyb3IuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yKGlucHV0KSB7XG4gICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJZb3UgcHJvdmlkZWQgXCIgKyAoaW5wdXQgIT09IG51bGwgJiYgdHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JyA/ICdhbiBpbnZhbGlkIG9iamVjdCcgOiBcIidcIiArIGlucHV0ICsgXCInXCIpICsgXCIgd2hlcmUgYSBzdHJlYW0gd2FzIGV4cGVjdGVkLiBZb3UgY2FuIHByb3ZpZGUgYW4gT2JzZXJ2YWJsZSwgUHJvbWlzZSwgUmVhZGFibGVTdHJlYW0sIEFycmF5LCBBc3luY0l0ZXJhYmxlLCBvciBJdGVyYWJsZS5cIik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aHJvd1Vub2JzZXJ2YWJsZUVycm9yLmpzLm1hcCIsImltcG9ydCB7IE9ic2VydmFibGUsIGludGVydmFsLCBtYXAgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU0FNUExFX1JBVEUgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBHdWl0YXIge1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIGd1aXRhckljb246IEhUTUxFbGVtZW50O1xyXG4gIHNvdW5kJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5ndWl0YXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJndWl0YXJcIik7XHJcbiAgICB0aGlzLnNvdW5kJCA9IGludGVydmFsKFNBTVBMRV9SQVRFKS5waXBlKFxyXG4gICAgICBtYXAoKCkgPT4gdGhpcy5fbmFtZSArIGBzb3VuZCBkYXRhYClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuXHJcbiAgIHB1YmxpYyBhbmltYXRlR3VpdGFyKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpdGFySWNvbi5zdHlsZS5maWx0ZXIgPSBcImJyaWdodG5lc3MoMjAwJSlcIjtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ndWl0YXJJY29uLnN0eWxlLmZpbHRlciA9IFwiYnJpZ2h0bmVzcygxMDAlKVwiO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3ViamVjdCwgaW50ZXJ2YWwsIG1lcmdlLCBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBQaWFubyB9IGZyb20gXCIuL3BpYW5vXCI7XHJcbmltcG9ydCB7IEd1aXRhciB9IGZyb20gJy4vZ3VpdGFyJztcclxuaW1wb3J0IHsgU3BlYWtlciB9IGZyb20gJy4vc3BlYWtlcic7XHJcbmltcG9ydCB7IE1peGVyUHJldmlldyB9IGZyb20gXCIuL21peGVyX3ByZXZpZXdcIjtcclxuaW1wb3J0IHsgTWl4ZXIgfSBmcm9tICcuL21peGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBTQU1QTEVfUkFURT01MDAwO1xyXG5cclxuY29uc3QgbWl4ZXIgPSBuZXcgTWl4ZXIoKTtcclxuY29uc3QgbWl4ZXJfUHJldmlldzogTWl4ZXJQcmV2aWV3ID0gbmV3IE1peGVyUHJldmlldygpO1xyXG5cclxuY29uc3QgcGlhbm8gPSBuZXcgUGlhbm8oJ1BpYW5vJyk7XHJcbmNvbnN0IGd1aXRhciA9IG5ldyBHdWl0YXIoJ0d1aXRhcicpO1xyXG5cclxuY29uc3Qgc3BlYWtlciA9IG5ldyBTcGVha2VyKHBpYW5vLCBndWl0YXIpO1xyXG5cclxuXHJcbi8vIFNwYWphbmplIHN2aWggaW5zdHJ1bWVuYXRhIHUgbWlrc2V0dVxyXG5jb25zdCBtZXJnZWRTb3VuZCQgPSBtZXJnZShwaWFuby5zb3VuZCQsIGd1aXRhci5zb3VuZCQpO1xyXG5cclxuLy8gU2xhbmplIHp2dWthIHUgbWlrc2V0dVxyXG5tZXJnZWRTb3VuZCQuc3Vic2NyaWJlKHNvdW5kID0+IHtcclxuICAgIG1peGVyLnNlbmRTb3VuZChzb3VuZCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIFByZXRwbGF0YSBuYSBtaWtzZXR1IGkgcmVwcm9kdWtjaWphIHp2dWthXHJcbm1peGVyLnNvdW5kJC5zdWJzY3JpYmUoc291bmQgPT4ge1xyXG4gICAgc3BlYWtlci5wbGF5U291bmQoc291bmQpO1xyXG4gIH0pO1xyXG5cclxuIiwiaW1wb3J0IHsgU3ViamVjdCwgbWVyZ2UsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNaXhlciB7XHJcbiAgICBwcml2YXRlIG1peGVyU3ViamVjdDogU3ViamVjdDxzdHJpbmc+O1xyXG4gIFxyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5taXhlclN1YmplY3QgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIERvZGFqdGUgZnVua2NpanUgemEgc2xhbmplIHp2dWthIHUgbWlrc2V0dVxyXG4gICAgICAgIHNlbmRTb3VuZChzb3VuZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMubWl4ZXJTdWJqZWN0Lm5leHQoc291bmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHJldHZvcml0ZSBtaWtzZXR1IHUgT2JzZXJ2YWJsZSB6YSBwcmV0cGxhdHVcclxuICAgICAgICBnZXQgc291bmQkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1peGVyU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbiAgfSIsIi8vaW1wb3J0IHsgTWl4ZXIgfSBmcm9tICcuL21peGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNaXhlclByZXZpZXd7XHJcbiAgIC8vIHByaXZhdGUgbWl4ZXI6IE1peGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgbGV0IG1haW5fZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG1haW5fZnJhbWUuY2xhc3NMaXN0LmFkZChcIm1haW4tZnJhbWVcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluX2ZyYW1lKTtcclxuICAgICAgICBtYWluX2ZyYW1lLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGltZyBpZD1cImJhbmRcIiBjbGFzcz1cImluc3RydW1lbnRcIiBzcmM9XCJzcmMvYXNzZXRzL2JhbmQucG5nXCIgLz5cclxuICAgICAgICAgICAgPGltZyBpZD1cInBpYW5vXCIgY2xhc3M9XCJpbnN0cnVtZW50XCIgc3JjPVwic3JjL2Fzc2V0cy9waWFuby5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8aW1nIGlkPVwiZ3VpdGFyXCIgY2xhc3M9XCJpbnN0cnVtZW50XCIgc3JjPVwic3JjL2Fzc2V0cy9ndWl0YXIucG5nXCIgLz5cclxuICAgICAgICAgICAgPGltZyBpZD1cIm1peGVyXCIgY2xhc3M9XCJpbnN0cnVtZW50XCIgc3JjPVwic3JjL2Fzc2V0cy9taXhlci5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8aW1nIGlkPVwic3BlYWtlclwiIGNsYXNzPVwiaW5zdHJ1bWVudFwiIHNyYz1cInNyYy9hc3NldHMvc3BlYWtlci5wbmdcIiAvPlxyXG4gICAgICAgIGA7XHJcbiAgICBcclxuICAgICAgICBsZXQgc3BlYWtlcl9pbmZvX2ZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzcGVha2VyX2luZm9fZnJhbWUuY2xhc3NMaXN0LmFkZChcInNwZWFrZXItaW5mby1mcmFtZVwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNwZWFrZXJfaW5mb19mcmFtZSk7XHJcbiAgICAgICAgc3BlYWtlcl9pbmZvX2ZyYW1lLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPHA+U3BlYWtlcjogPHNwYW4gaWQ9XCJzcGVha2VyLWluZm9cIj48L3NwYW4+PC9wPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHBpYW5vSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGlhbm8nKTtcclxuICAgICAgICAvLyBjb25zdCBndWl0YXJJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWl0YXInKTtcclxuICAgICAgICAvLyBjb25zdCBtaXhlckltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21peGVyJyk7XHJcbiAgICBcclxuICAgICAgICAvLyBwaWFub0ltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgLy8gU2ltdWxhY2lqYSBrbGlrYSBuYSBrbGF2aXJcclxuICAgICAgICAvLyAgIHRoaXMubWl4ZXIuc2VuZFNvdW5kKCdQaWFubyBzb3VuZCBkYXRhJyk7XHJcbiAgICAgICAgLy8gICB0aGlzLnVwZGF0ZVNwZWFrZXJJbmZvKCdQaWFubycpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgXHJcbiAgICAgICAgLy8gZ3VpdGFySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAvLyBTaW11bGFjaWphIGtsaWthIG5hIGdpdGFydVxyXG4gICAgICAgIC8vICAgdGhpcy5taXhlci5zZW5kU291bmQoJ0d1aXRhciBzb3VuZCBkYXRhJyk7XHJcbiAgICAgICAgLy8gICB0aGlzLnVwZGF0ZVNwZWFrZXJJbmZvKCdHdWl0YXInKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAgICAgLy8gcHJpdmF0ZSB1cGRhdGVTcGVha2VySW5mbyhpbnN0cnVtZW50TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHNwZWFrZXJJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWFrZXItaW5mbycpO1xyXG4gICAgICAgIC8vICAgICBzcGVha2VySW5mby50ZXh0Q29udGVudCA9IGluc3RydW1lbnROYW1lO1xyXG4gICAgICAgIC8vICAgfVxyXG4gICAgXHJcbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBpbnRlcnZhbCwgbWFwIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgU0FNUExFX1JBVEUgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBpYW5ve1xyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwaWFub0ljb246IEhUTUxFbGVtZW50O1xyXG4gICAgc291bmQkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLl9uYW1lPW5hbWU7XHJcbiAgICAgICAgdGhpcy5waWFub0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBpYW5vXCIpO1xyXG4gICAgICAgIHRoaXMuc291bmQkPWludGVydmFsKDEwMDAvU0FNUExFX1JBVEUpLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgoKT0+IHRoaXMuX25hbWUgKyBgc291bmQgZGF0YWApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhbmltYXRlUGlhbm8oKSB7XHJcbiAgICAgICAgdGhpcy5waWFub0ljb24uc3R5bGUuZmlsdGVyID0gXCJicmlnaHRuZXNzKDIwMCUpXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGlhbm9JY29uLnN0eWxlLmZpbHRlciA9IFwiYnJpZ2h0bmVzcygxMDAlKVwiO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgR3VpdGFyIH0gZnJvbSAnLi9ndWl0YXInO1xyXG5pbXBvcnQgeyBQaWFubyB9IGZyb20gJy4vcGlhbm8nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwZWFrZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGlhbm86IFBpYW5vLCBwcml2YXRlIGd1aXRhcjogR3VpdGFyKXtcclxuXHJcbiAgfVxyXG4gIHBsYXlTb3VuZChzb3VuZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhgUGxheWluZyBzb3VuZDogJHtzb3VuZH1gKTtcclxuICAgIFxyXG4gICAgdGhpcy5waWFuby5hbmltYXRlUGlhbm8oKTtcclxuICAgIHRoaXMuZ3VpdGFyLmFuaW1hdGVHdWl0YXIoKTtcclxuICB9XHJcbn0iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlO1xuICAgIGlmIChhc3luYykge1xuICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcbiAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xuICB9XG4gIGVsc2UgaWYgKGFzeW5jKSB7XG4gICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcbiAgZnVuY3Rpb24gZmFpbChlKSB7XG4gICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xuICAgIGVudi5oYXNFcnJvciA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAoZW52LnN0YWNrLmxlbmd0aCkge1xuICAgICAgdmFyIHJlYyA9IGVudi5zdGFjay5wb3AoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWMuZGlzcG9zZSAmJiByZWMuZGlzcG9zZS5jYWxsKHJlYy52YWx1ZSk7XG4gICAgICAgIGlmIChyZWMuYXN5bmMpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIF9fZXh0ZW5kcyxcbiAgX19hc3NpZ24sXG4gIF9fcmVzdCxcbiAgX19kZWNvcmF0ZSxcbiAgX19wYXJhbSxcbiAgX19tZXRhZGF0YSxcbiAgX19hd2FpdGVyLFxuICBfX2dlbmVyYXRvcixcbiAgX19jcmVhdGVCaW5kaW5nLFxuICBfX2V4cG9ydFN0YXIsXG4gIF9fdmFsdWVzLFxuICBfX3JlYWQsXG4gIF9fc3ByZWFkLFxuICBfX3NwcmVhZEFycmF5cyxcbiAgX19zcHJlYWRBcnJheSxcbiAgX19hd2FpdCxcbiAgX19hc3luY0dlbmVyYXRvcixcbiAgX19hc3luY0RlbGVnYXRvcixcbiAgX19hc3luY1ZhbHVlcyxcbiAgX19tYWtlVGVtcGxhdGVPYmplY3QsXG4gIF9faW1wb3J0U3RhcixcbiAgX19pbXBvcnREZWZhdWx0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXG4gIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxuICBfX2Rpc3Bvc2VSZXNvdXJjZXMsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==