function Dv(r, i) {
    for (var l = 0; l < i.length; l++) {
        const a = i[l];
        if (typeof a != "string" && !Array.isArray(a)) {
            for (const c in a)
                if (c !== "default" && !(c in r)) {
                    const f = Object.getOwnPropertyDescriptor(a, c);
                    f && Object.defineProperty(r, c, f.get ? f : {
                        enumerable: !0,
                        get: () => a[c]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
        value: "Module"
    }))
}
function jd(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
var ua = {
    exports: {}
}
  , Po = {}
  , ca = {
    exports: {}
}
  , Se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ld;
function zv() {
    if (ld)
        return Se;
    ld = 1;
    var r = Symbol.for("react.element")
      , i = Symbol.for("react.portal")
      , l = Symbol.for("react.fragment")
      , a = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , f = Symbol.for("react.provider")
      , p = Symbol.for("react.context")
      , d = Symbol.for("react.forward_ref")
      , h = Symbol.for("react.suspense")
      , v = Symbol.for("react.memo")
      , y = Symbol.for("react.lazy")
      , w = Symbol.iterator;
    function C(_) {
        return _ === null || typeof _ != "object" ? null : (_ = w && _[w] || _["@@iterator"],
        typeof _ == "function" ? _ : null)
    }
    var P = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , T = Object.assign
      , S = {};
    function k(_, j, pe) {
        this.props = _,
        this.context = j,
        this.refs = S,
        this.updater = pe || P
    }
    k.prototype.isReactComponent = {},
    k.prototype.setState = function(_, j) {
        if (typeof _ != "object" && typeof _ != "function" && _ != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, _, j, "setState")
    }
    ,
    k.prototype.forceUpdate = function(_) {
        this.updater.enqueueForceUpdate(this, _, "forceUpdate")
    }
    ;
    function O() {}
    O.prototype = k.prototype;
    function N(_, j, pe) {
        this.props = _,
        this.context = j,
        this.refs = S,
        this.updater = pe || P
    }
    var M = N.prototype = new O;
    M.constructor = N,
    T(M, k.prototype),
    M.isPureReactComponent = !0;
    var z = Array.isArray
      , V = Object.prototype.hasOwnProperty
      , Y = {
        current: null
    }
      , $ = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function J(_, j, pe) {
        var fe, we = {}, ge = null, Q = null;
        if (j != null)
            for (fe in j.ref !== void 0 && (Q = j.ref),
            j.key !== void 0 && (ge = "" + j.key),
            j)
                V.call(j, fe) && !$.hasOwnProperty(fe) && (we[fe] = j[fe]);
        var le = arguments.length - 2;
        if (le === 1)
            we.children = pe;
        else if (1 < le) {
            for (var he = Array(le), ye = 0; ye < le; ye++)
                he[ye] = arguments[ye + 2];
            we.children = he
        }
        if (_ && _.defaultProps)
            for (fe in le = _.defaultProps,
            le)
                we[fe] === void 0 && (we[fe] = le[fe]);
        return {
            $$typeof: r,
            type: _,
            key: ge,
            ref: Q,
            props: we,
            _owner: Y.current
        }
    }
    function Z(_, j) {
        return {
            $$typeof: r,
            type: _.type,
            key: j,
            ref: _.ref,
            props: _.props,
            _owner: _._owner
        }
    }
    function re(_) {
        return typeof _ == "object" && _ !== null && _.$$typeof === r
    }
    function me(_) {
        var j = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + _.replace(/[=:]/g, function(pe) {
            return j[pe]
        })
    }
    var ee = /\/+/g;
    function de(_, j) {
        return typeof _ == "object" && _ !== null && _.key != null ? me("" + _.key) : j.toString(36)
    }
    function ue(_, j, pe, fe, we) {
        var ge = typeof _;
        (ge === "undefined" || ge === "boolean") && (_ = null);
        var Q = !1;
        if (_ === null)
            Q = !0;
        else
            switch (ge) {
            case "string":
            case "number":
                Q = !0;
                break;
            case "object":
                switch (_.$$typeof) {
                case r:
                case i:
                    Q = !0
                }
            }
        if (Q)
            return Q = _,
            we = we(Q),
            _ = fe === "" ? "." + de(Q, 0) : fe,
            z(we) ? (pe = "",
            _ != null && (pe = _.replace(ee, "$&/") + "/"),
            ue(we, j, pe, "", function(ye) {
                return ye
            })) : we != null && (re(we) && (we = Z(we, pe + (!we.key || Q && Q.key === we.key ? "" : ("" + we.key).replace(ee, "$&/") + "/") + _)),
            j.push(we)),
            1;
        if (Q = 0,
        fe = fe === "" ? "." : fe + ":",
        z(_))
            for (var le = 0; le < _.length; le++) {
                ge = _[le];
                var he = fe + de(ge, le);
                Q += ue(ge, j, pe, he, we)
            }
        else if (he = C(_),
        typeof he == "function")
            for (_ = he.call(_),
            le = 0; !(ge = _.next()).done; )
                ge = ge.value,
                he = fe + de(ge, le++),
                Q += ue(ge, j, pe, he, we);
        else if (ge === "object")
            throw j = String(_),
            Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
        return Q
    }
    function xe(_, j, pe) {
        if (_ == null)
            return _;
        var fe = []
          , we = 0;
        return ue(_, fe, "", "", function(ge) {
            return j.call(pe, ge, we++)
        }),
        fe
    }
    function ie(_) {
        if (_._status === -1) {
            var j = _._result;
            j = j(),
            j.then(function(pe) {
                (_._status === 0 || _._status === -1) && (_._status = 1,
                _._result = pe)
            }, function(pe) {
                (_._status === 0 || _._status === -1) && (_._status = 2,
                _._result = pe)
            }),
            _._status === -1 && (_._status = 0,
            _._result = j)
        }
        if (_._status === 1)
            return _._result.default;
        throw _._result
    }
    var oe = {
        current: null
    }
      , D = {
        transition: null
    }
      , K = {
        ReactCurrentDispatcher: oe,
        ReactCurrentBatchConfig: D,
        ReactCurrentOwner: Y
    };
    function H() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return Se.Children = {
        map: xe,
        forEach: function(_, j, pe) {
            xe(_, function() {
                j.apply(this, arguments)
            }, pe)
        },
        count: function(_) {
            var j = 0;
            return xe(_, function() {
                j++
            }),
            j
        },
        toArray: function(_) {
            return xe(_, function(j) {
                return j
            }) || []
        },
        only: function(_) {
            if (!re(_))
                throw Error("React.Children.only expected to receive a single React element child.");
            return _
        }
    },
    Se.Component = k,
    Se.Fragment = l,
    Se.Profiler = c,
    Se.PureComponent = N,
    Se.StrictMode = a,
    Se.Suspense = h,
    Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K,
    Se.act = H,
    Se.cloneElement = function(_, j, pe) {
        if (_ == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
        var fe = T({}, _.props)
          , we = _.key
          , ge = _.ref
          , Q = _._owner;
        if (j != null) {
            if (j.ref !== void 0 && (ge = j.ref,
            Q = Y.current),
            j.key !== void 0 && (we = "" + j.key),
            _.type && _.type.defaultProps)
                var le = _.type.defaultProps;
            for (he in j)
                V.call(j, he) && !$.hasOwnProperty(he) && (fe[he] = j[he] === void 0 && le !== void 0 ? le[he] : j[he])
        }
        var he = arguments.length - 2;
        if (he === 1)
            fe.children = pe;
        else if (1 < he) {
            le = Array(he);
            for (var ye = 0; ye < he; ye++)
                le[ye] = arguments[ye + 2];
            fe.children = le
        }
        return {
            $$typeof: r,
            type: _.type,
            key: we,
            ref: ge,
            props: fe,
            _owner: Q
        }
    }
    ,
    Se.createContext = function(_) {
        return _ = {
            $$typeof: p,
            _currentValue: _,
            _currentValue2: _,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        _.Provider = {
            $$typeof: f,
            _context: _
        },
        _.Consumer = _
    }
    ,
    Se.createElement = J,
    Se.createFactory = function(_) {
        var j = J.bind(null, _);
        return j.type = _,
        j
    }
    ,
    Se.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Se.forwardRef = function(_) {
        return {
            $$typeof: d,
            render: _
        }
    }
    ,
    Se.isValidElement = re,
    Se.lazy = function(_) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: _
            },
            _init: ie
        }
    }
    ,
    Se.memo = function(_, j) {
        return {
            $$typeof: v,
            type: _,
            compare: j === void 0 ? null : j
        }
    }
    ,
    Se.startTransition = function(_) {
        var j = D.transition;
        D.transition = {};
        try {
            _()
        } finally {
            D.transition = j
        }
    }
    ,
    Se.unstable_act = H,
    Se.useCallback = function(_, j) {
        return oe.current.useCallback(_, j)
    }
    ,
    Se.useContext = function(_) {
        return oe.current.useContext(_)
    }
    ,
    Se.useDebugValue = function() {}
    ,
    Se.useDeferredValue = function(_) {
        return oe.current.useDeferredValue(_)
    }
    ,
    Se.useEffect = function(_, j) {
        return oe.current.useEffect(_, j)
    }
    ,
    Se.useId = function() {
        return oe.current.useId()
    }
    ,
    Se.useImperativeHandle = function(_, j, pe) {
        return oe.current.useImperativeHandle(_, j, pe)
    }
    ,
    Se.useInsertionEffect = function(_, j) {
        return oe.current.useInsertionEffect(_, j)
    }
    ,
    Se.useLayoutEffect = function(_, j) {
        return oe.current.useLayoutEffect(_, j)
    }
    ,
    Se.useMemo = function(_, j) {
        return oe.current.useMemo(_, j)
    }
    ,
    Se.useReducer = function(_, j, pe) {
        return oe.current.useReducer(_, j, pe)
    }
    ,
    Se.useRef = function(_) {
        return oe.current.useRef(_)
    }
    ,
    Se.useState = function(_) {
        return oe.current.useState(_)
    }
    ,
    Se.useSyncExternalStore = function(_, j, pe) {
        return oe.current.useSyncExternalStore(_, j, pe)
    }
    ,
    Se.useTransition = function() {
        return oe.current.useTransition()
    }
    ,
    Se.version = "18.3.1",
    Se
}
var id;
function Fa() {
    return id || (id = 1,
    ca.exports = zv()),
    ca.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sd;
function jv() {
    if (sd)
        return Po;
    sd = 1;
    var r = Fa()
      , i = Symbol.for("react.element")
      , l = Symbol.for("react.fragment")
      , a = Object.prototype.hasOwnProperty
      , c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , f = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function p(d, h, v) {
        var y, w = {}, C = null, P = null;
        v !== void 0 && (C = "" + v),
        h.key !== void 0 && (C = "" + h.key),
        h.ref !== void 0 && (P = h.ref);
        for (y in h)
            a.call(h, y) && !f.hasOwnProperty(y) && (w[y] = h[y]);
        if (d && d.defaultProps)
            for (y in h = d.defaultProps,
            h)
                w[y] === void 0 && (w[y] = h[y]);
        return {
            $$typeof: i,
            type: d,
            key: C,
            ref: P,
            props: w,
            _owner: c.current
        }
    }
    return Po.Fragment = l,
    Po.jsx = p,
    Po.jsxs = p,
    Po
}
var ad;
function Fv() {
    return ad || (ad = 1,
    ua.exports = jv()),
    ua.exports
}
var L = Fv()
  , g = Fa();
const Ve = jd(g)
  , Wv = Dv({
    __proto__: null,
    default: Ve
}, [g]);
var fa = {
    exports: {}
}
  , ct = {}
  , da = {
    exports: {}
}
  , pa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ud;
function Vv() {
    return ud || (ud = 1,
    function(r) {
        function i(D, K) {
            var H = D.length;
            D.push(K);
            e: for (; 0 < H; ) {
                var _ = H - 1 >>> 1
                  , j = D[_];
                if (0 < c(j, K))
                    D[_] = K,
                    D[H] = j,
                    H = _;
                else
                    break e
            }
        }
        function l(D) {
            return D.length === 0 ? null : D[0]
        }
        function a(D) {
            if (D.length === 0)
                return null;
            var K = D[0]
              , H = D.pop();
            if (H !== K) {
                D[0] = H;
                e: for (var _ = 0, j = D.length, pe = j >>> 1; _ < pe; ) {
                    var fe = 2 * (_ + 1) - 1
                      , we = D[fe]
                      , ge = fe + 1
                      , Q = D[ge];
                    if (0 > c(we, H))
                        ge < j && 0 > c(Q, we) ? (D[_] = Q,
                        D[ge] = H,
                        _ = ge) : (D[_] = we,
                        D[fe] = H,
                        _ = fe);
                    else if (ge < j && 0 > c(Q, H))
                        D[_] = Q,
                        D[ge] = H,
                        _ = ge;
                    else
                        break e
                }
            }
            return K
        }
        function c(D, K) {
            var H = D.sortIndex - K.sortIndex;
            return H !== 0 ? H : D.id - K.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            r.unstable_now = function() {
                return f.now()
            }
        } else {
            var p = Date
              , d = p.now();
            r.unstable_now = function() {
                return p.now() - d
            }
        }
        var h = []
          , v = []
          , y = 1
          , w = null
          , C = 3
          , P = !1
          , T = !1
          , S = !1
          , k = typeof setTimeout == "function" ? setTimeout : null
          , O = typeof clearTimeout == "function" ? clearTimeout : null
          , N = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function M(D) {
            for (var K = l(v); K !== null; ) {
                if (K.callback === null)
                    a(v);
                else if (K.startTime <= D)
                    a(v),
                    K.sortIndex = K.expirationTime,
                    i(h, K);
                else
                    break;
                K = l(v)
            }
        }
        function z(D) {
            if (S = !1,
            M(D),
            !T)
                if (l(h) !== null)
                    T = !0,
                    ie(V);
                else {
                    var K = l(v);
                    K !== null && oe(z, K.startTime - D)
                }
        }
        function V(D, K) {
            T = !1,
            S && (S = !1,
            O(J),
            J = -1),
            P = !0;
            var H = C;
            try {
                for (M(K),
                w = l(h); w !== null && (!(w.expirationTime > K) || D && !me()); ) {
                    var _ = w.callback;
                    if (typeof _ == "function") {
                        w.callback = null,
                        C = w.priorityLevel;
                        var j = _(w.expirationTime <= K);
                        K = r.unstable_now(),
                        typeof j == "function" ? w.callback = j : w === l(h) && a(h),
                        M(K)
                    } else
                        a(h);
                    w = l(h)
                }
                if (w !== null)
                    var pe = !0;
                else {
                    var fe = l(v);
                    fe !== null && oe(z, fe.startTime - K),
                    pe = !1
                }
                return pe
            } finally {
                w = null,
                C = H,
                P = !1
            }
        }
        var Y = !1
          , $ = null
          , J = -1
          , Z = 5
          , re = -1;
        function me() {
            return !(r.unstable_now() - re < Z)
        }
        function ee() {
            if ($ !== null) {
                var D = r.unstable_now();
                re = D;
                var K = !0;
                try {
                    K = $(!0, D)
                } finally {
                    K ? de() : (Y = !1,
                    $ = null)
                }
            } else
                Y = !1
        }
        var de;
        if (typeof N == "function")
            de = function() {
                N(ee)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var ue = new MessageChannel
              , xe = ue.port2;
            ue.port1.onmessage = ee,
            de = function() {
                xe.postMessage(null)
            }
        } else
            de = function() {
                k(ee, 0)
            }
            ;
        function ie(D) {
            $ = D,
            Y || (Y = !0,
            de())
        }
        function oe(D, K) {
            J = k(function() {
                D(r.unstable_now())
            }, K)
        }
        r.unstable_IdlePriority = 5,
        r.unstable_ImmediatePriority = 1,
        r.unstable_LowPriority = 4,
        r.unstable_NormalPriority = 3,
        r.unstable_Profiling = null,
        r.unstable_UserBlockingPriority = 2,
        r.unstable_cancelCallback = function(D) {
            D.callback = null
        }
        ,
        r.unstable_continueExecution = function() {
            T || P || (T = !0,
            ie(V))
        }
        ,
        r.unstable_forceFrameRate = function(D) {
            0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < D ? Math.floor(1e3 / D) : 5
        }
        ,
        r.unstable_getCurrentPriorityLevel = function() {
            return C
        }
        ,
        r.unstable_getFirstCallbackNode = function() {
            return l(h)
        }
        ,
        r.unstable_next = function(D) {
            switch (C) {
            case 1:
            case 2:
            case 3:
                var K = 3;
                break;
            default:
                K = C
            }
            var H = C;
            C = K;
            try {
                return D()
            } finally {
                C = H
            }
        }
        ,
        r.unstable_pauseExecution = function() {}
        ,
        r.unstable_requestPaint = function() {}
        ,
        r.unstable_runWithPriority = function(D, K) {
            switch (D) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                D = 3
            }
            var H = C;
            C = D;
            try {
                return K()
            } finally {
                C = H
            }
        }
        ,
        r.unstable_scheduleCallback = function(D, K, H) {
            var _ = r.unstable_now();
            switch (typeof H == "object" && H !== null ? (H = H.delay,
            H = typeof H == "number" && 0 < H ? _ + H : _) : H = _,
            D) {
            case 1:
                var j = -1;
                break;
            case 2:
                j = 250;
                break;
            case 5:
                j = 1073741823;
                break;
            case 4:
                j = 1e4;
                break;
            default:
                j = 5e3
            }
            return j = H + j,
            D = {
                id: y++,
                callback: K,
                priorityLevel: D,
                startTime: H,
                expirationTime: j,
                sortIndex: -1
            },
            H > _ ? (D.sortIndex = H,
            i(v, D),
            l(h) === null && D === l(v) && (S ? (O(J),
            J = -1) : S = !0,
            oe(z, H - _))) : (D.sortIndex = j,
            i(h, D),
            T || P || (T = !0,
            ie(V))),
            D
        }
        ,
        r.unstable_shouldYield = me,
        r.unstable_wrapCallback = function(D) {
            var K = C;
            return function() {
                var H = C;
                C = K;
                try {
                    return D.apply(this, arguments)
                } finally {
                    C = H
                }
            }
        }
    }(pa)),
    pa
}
var cd;
function Bv() {
    return cd || (cd = 1,
    da.exports = Vv()),
    da.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fd;
function Uv() {
    if (fd)
        return ct;
    fd = 1;
    var r = Fa()
      , i = Bv();
    function l(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var a = new Set
      , c = {};
    function f(e, t) {
        p(e, t),
        p(e + "Capture", t)
    }
    function p(e, t) {
        for (c[e] = t,
        e = 0; e < t.length; e++)
            a.add(t[e])
    }
    var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , h = Object.prototype.hasOwnProperty
      , v = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , y = {}
      , w = {};
    function C(e) {
        return h.call(w, e) ? !0 : h.call(y, e) ? !1 : v.test(e) ? w[e] = !0 : (y[e] = !0,
        !1)
    }
    function P(e, t, n, o) {
        if (n !== null && n.type === 0)
            return !1;
        switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return o ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
            e !== "data-" && e !== "aria-");
        default:
            return !1
        }
    }
    function T(e, t, n, o) {
        if (t === null || typeof t > "u" || P(e, t, n, o))
            return !0;
        if (o)
            return !1;
        if (n !== null)
            switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
            }
        return !1
    }
    function S(e, t, n, o, s, u, m) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = o,
        this.attributeNamespace = s,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = u,
        this.removeEmptyString = m
    }
    var k = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        k[e] = new S(e,0,!1,e,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
        var t = e[0];
        k[t] = new S(t,1,!1,e[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        k[e] = new S(e,2,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        k[e] = new S(e,2,!1,e,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        k[e] = new S(e,3,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        k[e] = new S(e,3,!0,e,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(e) {
        k[e] = new S(e,4,!1,e,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(e) {
        k[e] = new S(e,6,!1,e,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(e) {
        k[e] = new S(e,5,!1,e.toLowerCase(),null,!1,!1)
    });
    var O = /[\-:]([a-z])/g;
    function N(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(O, N);
        k[t] = new S(t,1,!1,e,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(O, N);
        k[t] = new S(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(O, N);
        k[t] = new S(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(e) {
        k[e] = new S(e,1,!1,e.toLowerCase(),null,!1,!1)
    }),
    k.xlinkHref = new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(e) {
        k[e] = new S(e,1,!1,e.toLowerCase(),null,!0,!0)
    });
    function M(e, t, n, o) {
        var s = k.hasOwnProperty(t) ? k[t] : null;
        (s !== null ? s.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (T(t, n, s, o) && (n = null),
        o || s === null ? C(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName,
        o = s.attributeNamespace,
        n === null ? e.removeAttribute(t) : (s = s.type,
        n = s === 3 || s === 4 && n === !0 ? "" : "" + n,
        o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))))
    }
    var z = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , V = Symbol.for("react.element")
      , Y = Symbol.for("react.portal")
      , $ = Symbol.for("react.fragment")
      , J = Symbol.for("react.strict_mode")
      , Z = Symbol.for("react.profiler")
      , re = Symbol.for("react.provider")
      , me = Symbol.for("react.context")
      , ee = Symbol.for("react.forward_ref")
      , de = Symbol.for("react.suspense")
      , ue = Symbol.for("react.suspense_list")
      , xe = Symbol.for("react.memo")
      , ie = Symbol.for("react.lazy")
      , oe = Symbol.for("react.offscreen")
      , D = Symbol.iterator;
    function K(e) {
        return e === null || typeof e != "object" ? null : (e = D && e[D] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var H = Object.assign, _;
    function j(e) {
        if (_ === void 0)
            try {
                throw Error()
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                _ = t && t[1] || ""
            }
        return `
` + _ + e
    }
    var pe = !1;
    function fe(e, t) {
        if (!e || pe)
            return "";
        pe = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (b) {
                        var o = b
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (b) {
                        o = b
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (b) {
                    o = b
                }
                e()
            }
        } catch (b) {
            if (b && o && typeof b.stack == "string") {
                for (var s = b.stack.split(`
`), u = o.stack.split(`
`), m = s.length - 1, x = u.length - 1; 1 <= m && 0 <= x && s[m] !== u[x]; )
                    x--;
                for (; 1 <= m && 0 <= x; m--,
                x--)
                    if (s[m] !== u[x]) {
                        if (m !== 1 || x !== 1)
                            do
                                if (m--,
                                x--,
                                0 > x || s[m] !== u[x]) {
                                    var E = `
` + s[m].replace(" at new ", " at ");
                                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)),
                                    E
                                }
                            while (1 <= m && 0 <= x);
                        break
                    }
            }
        } finally {
            pe = !1,
            Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? j(e) : ""
    }
    function we(e) {
        switch (e.tag) {
        case 5:
            return j(e.type);
        case 16:
            return j("Lazy");
        case 13:
            return j("Suspense");
        case 19:
            return j("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = fe(e.type, !1),
            e;
        case 11:
            return e = fe(e.type.render, !1),
            e;
        case 1:
            return e = fe(e.type, !0),
            e;
        default:
            return ""
        }
    }
    function ge(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case $:
            return "Fragment";
        case Y:
            return "Portal";
        case Z:
            return "Profiler";
        case J:
            return "StrictMode";
        case de:
            return "Suspense";
        case ue:
            return "SuspenseList"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case me:
                return (e.displayName || "Context") + ".Consumer";
            case re:
                return (e._context.displayName || "Context") + ".Provider";
            case ee:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case xe:
                return t = e.displayName || null,
                t !== null ? t : ge(e.type) || "Memo";
            case ie:
                t = e._payload,
                e = e._init;
                try {
                    return ge(e(t))
                } catch {}
            }
        return null
    }
    function Q(e) {
        var t = e.type;
        switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
            e = e.displayName || e.name || "",
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ge(t);
        case 8:
            return t === J ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
        }
        return null
    }
    function le(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function he(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function ye(e) {
        var t = he(e) ? "checked" : "value"
          , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , o = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var s = n.get
              , u = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return s.call(this)
                },
                set: function(m) {
                    o = "" + m,
                    u.call(this, m)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
            {
                getValue: function() {
                    return o
                },
                setValue: function(m) {
                    o = "" + m
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Ee(e) {
        e._valueTracker || (e._valueTracker = ye(e))
    }
    function _e(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
          , o = "";
        return e && (o = he(e) ? e.checked ? "true" : "false" : e.value),
        e = o,
        e !== n ? (t.setValue(e),
        !0) : !1
    }
    function $e(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    function ot(e, t) {
        var n = t.checked;
        return H({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        })
    }
    function nn(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue
          , o = t.checked != null ? t.checked : t.defaultChecked;
        n = le(t.value != null ? t.value : n),
        e._wrapperState = {
            initialChecked: o,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }
    function rn(e, t) {
        t = t.checked,
        t != null && M(e, "checked", t, !1)
    }
    function Ut(e, t) {
        rn(e, t);
        var n = le(t.value)
          , o = t.type;
        if (n != null)
            o === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (o === "submit" || o === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? on(e, t.type, n) : t.hasOwnProperty("defaultValue") && on(e, t.type, le(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }
    function Mo(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var o = t.type;
            if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null))
                return;
            t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        n = e.name,
        n !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        n !== "" && (e.name = n)
    }
    function on(e, t, n) {
        (t !== "number" || $e(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    var jr = Array.isArray;
    function Zn(e, t, n, o) {
        if (e = e.options,
        t) {
            t = {};
            for (var s = 0; s < n.length; s++)
                t["$" + n[s]] = !0;
            for (n = 0; n < e.length; n++)
                s = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== s && (e[n].selected = s),
                s && o && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + le(n),
            t = null,
            s = 0; s < e.length; s++) {
                if (e[s].value === n) {
                    e[s].selected = !0,
                    o && (e[s].defaultSelected = !0);
                    return
                }
                t !== null || e[s].disabled || (t = e[s])
            }
            t !== null && (t.selected = !0)
        }
    }
    function wi(e, t) {
        if (t.dangerouslySetInnerHTML != null)
            throw Error(l(91));
        return H({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }
    function mu(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children,
            t = t.defaultValue,
            n != null) {
                if (t != null)
                    throw Error(l(92));
                if (jr(n)) {
                    if (1 < n.length)
                        throw Error(l(93));
                    n = n[0]
                }
                t = n
            }
            t == null && (t = ""),
            n = t
        }
        e._wrapperState = {
            initialValue: le(n)
        }
    }
    function hu(e, t) {
        var n = le(t.value)
          , o = le(t.defaultValue);
        n != null && (n = "" + n,
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        o != null && (e.defaultValue = "" + o)
    }
    function vu(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }
    function gu(e) {
        switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function Si(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? gu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var Do, yu = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, o, s) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, o, s)
            })
        }
        : e
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
            e.innerHTML = t;
        else {
            for (Do = Do || document.createElement("div"),
            Do.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Do.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; t.firstChild; )
                e.appendChild(t.firstChild)
        }
    });
    function Fr(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Wr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , Wm = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Wr).forEach(function(e) {
        Wm.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1),
            Wr[t] = Wr[e]
        })
    });
    function wu(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Wr.hasOwnProperty(e) && Wr[e] ? ("" + t).trim() : t + "px"
    }
    function Su(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var o = n.indexOf("--") === 0
                  , s = wu(n, t[n], o);
                n === "float" && (n = "cssFloat"),
                o ? e.setProperty(n, s) : e[n] = s
            }
    }
    var Vm = H({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function xi(e, t) {
        if (t) {
            if (Vm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
                throw Error(l(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null)
                    throw Error(l(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                    throw Error(l(61))
            }
            if (t.style != null && typeof t.style != "object")
                throw Error(l(62))
        }
    }
    function Ci(e, t) {
        if (e.indexOf("-") === -1)
            return typeof t.is == "string";
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Ei = null;
    function Pi(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var ki = null
      , qn = null
      , Jn = null;
    function xu(e) {
        if (e = ao(e)) {
            if (typeof ki != "function")
                throw Error(l(280));
            var t = e.stateNode;
            t && (t = ll(t),
            ki(e.stateNode, e.type, t))
        }
    }
    function Cu(e) {
        qn ? Jn ? Jn.push(e) : Jn = [e] : qn = e
    }
    function Eu() {
        if (qn) {
            var e = qn
              , t = Jn;
            if (Jn = qn = null,
            xu(e),
            t)
                for (e = 0; e < t.length; e++)
                    xu(t[e])
        }
    }
    function Pu(e, t) {
        return e(t)
    }
    function ku() {}
    var Ri = !1;
    function Ru(e, t, n) {
        if (Ri)
            return e(t, n);
        Ri = !0;
        try {
            return Pu(e, t, n)
        } finally {
            Ri = !1,
            (qn !== null || Jn !== null) && (ku(),
            Eu())
        }
    }
    function Vr(e, t) {
        var n = e.stateNode;
        if (n === null)
            return null;
        var o = ll(n);
        if (o === null)
            return null;
        n = o[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (o = !o.disabled) || (e = e.type,
            o = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !o;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (n && typeof n != "function")
            throw Error(l(231, t, typeof n));
        return n
    }
    var _i = !1;
    if (d)
        try {
            var Br = {};
            Object.defineProperty(Br, "passive", {
                get: function() {
                    _i = !0
                }
            }),
            window.addEventListener("test", Br, Br),
            window.removeEventListener("test", Br, Br)
        } catch {
            _i = !1
        }
    function Bm(e, t, n, o, s, u, m, x, E) {
        var b = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, b)
        } catch (W) {
            this.onError(W)
        }
    }
    var Ur = !1
      , zo = null
      , jo = !1
      , Ti = null
      , Um = {
        onError: function(e) {
            Ur = !0,
            zo = e
        }
    };
    function $m(e, t, n, o, s, u, m, x, E) {
        Ur = !1,
        zo = null,
        Bm.apply(Um, arguments)
    }
    function Hm(e, t, n, o, s, u, m, x, E) {
        if ($m.apply(this, arguments),
        Ur) {
            if (Ur) {
                var b = zo;
                Ur = !1,
                zo = null
            } else
                throw Error(l(198));
            jo || (jo = !0,
            Ti = b)
        }
    }
    function Dn(e) {
        var t = e
          , n = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (n = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? n : null
    }
    function _u(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function Tu(e) {
        if (Dn(e) !== e)
            throw Error(l(188))
    }
    function Km(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Dn(e),
            t === null)
                throw Error(l(188));
            return t !== e ? null : e
        }
        for (var n = e, o = t; ; ) {
            var s = n.return;
            if (s === null)
                break;
            var u = s.alternate;
            if (u === null) {
                if (o = s.return,
                o !== null) {
                    n = o;
                    continue
                }
                break
            }
            if (s.child === u.child) {
                for (u = s.child; u; ) {
                    if (u === n)
                        return Tu(s),
                        e;
                    if (u === o)
                        return Tu(s),
                        t;
                    u = u.sibling
                }
                throw Error(l(188))
            }
            if (n.return !== o.return)
                n = s,
                o = u;
            else {
                for (var m = !1, x = s.child; x; ) {
                    if (x === n) {
                        m = !0,
                        n = s,
                        o = u;
                        break
                    }
                    if (x === o) {
                        m = !0,
                        o = s,
                        n = u;
                        break
                    }
                    x = x.sibling
                }
                if (!m) {
                    for (x = u.child; x; ) {
                        if (x === n) {
                            m = !0,
                            n = u,
                            o = s;
                            break
                        }
                        if (x === o) {
                            m = !0,
                            o = u,
                            n = s;
                            break
                        }
                        x = x.sibling
                    }
                    if (!m)
                        throw Error(l(189))
                }
            }
            if (n.alternate !== o)
                throw Error(l(190))
        }
        if (n.tag !== 3)
            throw Error(l(188));
        return n.stateNode.current === n ? e : t
    }
    function Nu(e) {
        return e = Km(e),
        e !== null ? Au(e) : null
    }
    function Au(e) {
        if (e.tag === 5 || e.tag === 6)
            return e;
        for (e = e.child; e !== null; ) {
            var t = Au(e);
            if (t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var Ou = i.unstable_scheduleCallback
      , Iu = i.unstable_cancelCallback
      , Ym = i.unstable_shouldYield
      , Qm = i.unstable_requestPaint
      , je = i.unstable_now
      , Xm = i.unstable_getCurrentPriorityLevel
      , Ni = i.unstable_ImmediatePriority
      , bu = i.unstable_UserBlockingPriority
      , Fo = i.unstable_NormalPriority
      , Gm = i.unstable_LowPriority
      , Lu = i.unstable_IdlePriority
      , Wo = null
      , Lt = null;
    function Zm(e) {
        if (Lt && typeof Lt.onCommitFiberRoot == "function")
            try {
                Lt.onCommitFiberRoot(Wo, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
    }
    var Pt = Math.clz32 ? Math.clz32 : eh
      , qm = Math.log
      , Jm = Math.LN2;
    function eh(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (qm(e) / Jm | 0) | 0
    }
    var Vo = 64
      , Bo = 4194304;
    function $r(e) {
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
        }
    }
    function Uo(e, t) {
        var n = e.pendingLanes;
        if (n === 0)
            return 0;
        var o = 0
          , s = e.suspendedLanes
          , u = e.pingedLanes
          , m = n & 268435455;
        if (m !== 0) {
            var x = m & ~s;
            x !== 0 ? o = $r(x) : (u &= m,
            u !== 0 && (o = $r(u)))
        } else
            m = n & ~s,
            m !== 0 ? o = $r(m) : u !== 0 && (o = $r(u));
        if (o === 0)
            return 0;
        if (t !== 0 && t !== o && (t & s) === 0 && (s = o & -o,
        u = t & -t,
        s >= u || s === 16 && (u & 4194240) !== 0))
            return t;
        if ((o & 4) !== 0 && (o |= n & 16),
        t = e.entangledLanes,
        t !== 0)
            for (e = e.entanglements,
            t &= o; 0 < t; )
                n = 31 - Pt(t),
                s = 1 << n,
                o |= e[n],
                t &= ~s;
        return o
    }
    function th(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function nh(e, t) {
        for (var n = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
            var m = 31 - Pt(u)
              , x = 1 << m
              , E = s[m];
            E === -1 ? ((x & n) === 0 || (x & o) !== 0) && (s[m] = th(x, t)) : E <= t && (e.expiredLanes |= x),
            u &= ~x
        }
    }
    function Ai(e) {
        return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }
    function Mu() {
        var e = Vo;
        return Vo <<= 1,
        (Vo & 4194240) === 0 && (Vo = 64),
        e
    }
    function Oi(e) {
        for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
        return t
    }
    function Hr(e, t, n) {
        e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
        e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - Pt(t),
        e[t] = n
    }
    function rh(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
        var o = e.eventTimes;
        for (e = e.expirationTimes; 0 < n; ) {
            var s = 31 - Pt(n)
              , u = 1 << s;
            t[s] = 0,
            o[s] = -1,
            e[s] = -1,
            n &= ~u
        }
    }
    function Ii(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
            var o = 31 - Pt(n)
              , s = 1 << o;
            s & t | e[o] & t && (e[o] |= t),
            n &= ~s
        }
    }
    var Te = 0;
    function Du(e) {
        return e &= -e,
        1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var zu, bi, ju, Fu, Wu, Li = !1, $o = [], ln = null, sn = null, an = null, Kr = new Map, Yr = new Map, un = [], oh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Vu(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            ln = null;
            break;
        case "dragenter":
        case "dragleave":
            sn = null;
            break;
        case "mouseover":
        case "mouseout":
            an = null;
            break;
        case "pointerover":
        case "pointerout":
            Kr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Yr.delete(t.pointerId)
        }
    }
    function Qr(e, t, n, o, s, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: o,
            nativeEvent: u,
            targetContainers: [s]
        },
        t !== null && (t = ao(t),
        t !== null && bi(t)),
        e) : (e.eventSystemFlags |= o,
        t = e.targetContainers,
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e)
    }
    function lh(e, t, n, o, s) {
        switch (t) {
        case "focusin":
            return ln = Qr(ln, e, t, n, o, s),
            !0;
        case "dragenter":
            return sn = Qr(sn, e, t, n, o, s),
            !0;
        case "mouseover":
            return an = Qr(an, e, t, n, o, s),
            !0;
        case "pointerover":
            var u = s.pointerId;
            return Kr.set(u, Qr(Kr.get(u) || null, e, t, n, o, s)),
            !0;
        case "gotpointercapture":
            return u = s.pointerId,
            Yr.set(u, Qr(Yr.get(u) || null, e, t, n, o, s)),
            !0
        }
        return !1
    }
    function Bu(e) {
        var t = zn(e.target);
        if (t !== null) {
            var n = Dn(t);
            if (n !== null) {
                if (t = n.tag,
                t === 13) {
                    if (t = _u(n),
                    t !== null) {
                        e.blockedOn = t,
                        Wu(e.priority, function() {
                            ju(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Ho(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var o = new n.constructor(n.type,n);
                Ei = o,
                n.target.dispatchEvent(o),
                Ei = null
            } else
                return t = ao(n),
                t !== null && bi(t),
                e.blockedOn = n,
                !1;
            t.shift()
        }
        return !0
    }
    function Uu(e, t, n) {
        Ho(e) && n.delete(t)
    }
    function ih() {
        Li = !1,
        ln !== null && Ho(ln) && (ln = null),
        sn !== null && Ho(sn) && (sn = null),
        an !== null && Ho(an) && (an = null),
        Kr.forEach(Uu),
        Yr.forEach(Uu)
    }
    function Xr(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Li || (Li = !0,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, ih)))
    }
    function Gr(e) {
        function t(s) {
            return Xr(s, e)
        }
        if (0 < $o.length) {
            Xr($o[0], e);
            for (var n = 1; n < $o.length; n++) {
                var o = $o[n];
                o.blockedOn === e && (o.blockedOn = null)
            }
        }
        for (ln !== null && Xr(ln, e),
        sn !== null && Xr(sn, e),
        an !== null && Xr(an, e),
        Kr.forEach(t),
        Yr.forEach(t),
        n = 0; n < un.length; n++)
            o = un[n],
            o.blockedOn === e && (o.blockedOn = null);
        for (; 0 < un.length && (n = un[0],
        n.blockedOn === null); )
            Bu(n),
            n.blockedOn === null && un.shift()
    }
    var er = z.ReactCurrentBatchConfig
      , Ko = !0;
    function sh(e, t, n, o) {
        var s = Te
          , u = er.transition;
        er.transition = null;
        try {
            Te = 1,
            Mi(e, t, n, o)
        } finally {
            Te = s,
            er.transition = u
        }
    }
    function ah(e, t, n, o) {
        var s = Te
          , u = er.transition;
        er.transition = null;
        try {
            Te = 4,
            Mi(e, t, n, o)
        } finally {
            Te = s,
            er.transition = u
        }
    }
    function Mi(e, t, n, o) {
        if (Ko) {
            var s = Di(e, t, n, o);
            if (s === null)
                Ji(e, t, o, Yo, n),
                Vu(e, o);
            else if (lh(s, e, t, n, o))
                o.stopPropagation();
            else if (Vu(e, o),
            t & 4 && -1 < oh.indexOf(e)) {
                for (; s !== null; ) {
                    var u = ao(s);
                    if (u !== null && zu(u),
                    u = Di(e, t, n, o),
                    u === null && Ji(e, t, o, Yo, n),
                    u === s)
                        break;
                    s = u
                }
                s !== null && o.stopPropagation()
            } else
                Ji(e, t, o, null, n)
        }
    }
    var Yo = null;
    function Di(e, t, n, o) {
        if (Yo = null,
        e = Pi(o),
        e = zn(e),
        e !== null)
            if (t = Dn(e),
            t === null)
                e = null;
            else if (n = t.tag,
            n === 13) {
                if (e = _u(t),
                e !== null)
                    return e;
                e = null
            } else if (n === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else
                t !== e && (e = null);
        return Yo = e,
        null
    }
    function $u(e) {
        switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Xm()) {
            case Ni:
                return 1;
            case bu:
                return 4;
            case Fo:
            case Gm:
                return 16;
            case Lu:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var cn = null
      , zi = null
      , Qo = null;
    function Hu() {
        if (Qo)
            return Qo;
        var e, t = zi, n = t.length, o, s = "value"in cn ? cn.value : cn.textContent, u = s.length;
        for (e = 0; e < n && t[e] === s[e]; e++)
            ;
        var m = n - e;
        for (o = 1; o <= m && t[n - o] === s[u - o]; o++)
            ;
        return Qo = s.slice(e, 1 < o ? 1 - o : void 0)
    }
    function Xo(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Go() {
        return !0
    }
    function Ku() {
        return !1
    }
    function ft(e) {
        function t(n, o, s, u, m) {
            this._reactName = n,
            this._targetInst = s,
            this.type = o,
            this.nativeEvent = u,
            this.target = m,
            this.currentTarget = null;
            for (var x in e)
                e.hasOwnProperty(x) && (n = e[x],
                this[x] = n ? n(u) : u[x]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Go : Ku,
            this.isPropagationStopped = Ku,
            this
        }
        return H(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = Go)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = Go)
            },
            persist: function() {},
            isPersistent: Go
        }),
        t
    }
    var tr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, ji = ft(tr), Zr = H({}, tr, {
        view: 0,
        detail: 0
    }), uh = ft(Zr), Fi, Wi, qr, Zo = H({}, Zr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Bi,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== qr && (qr && e.type === "mousemove" ? (Fi = e.screenX - qr.screenX,
            Wi = e.screenY - qr.screenY) : Wi = Fi = 0,
            qr = e),
            Fi)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : Wi
        }
    }), Yu = ft(Zo), ch = H({}, Zo, {
        dataTransfer: 0
    }), fh = ft(ch), dh = H({}, Zr, {
        relatedTarget: 0
    }), Vi = ft(dh), ph = H({}, tr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), mh = ft(ph), hh = H({}, tr, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), vh = ft(hh), gh = H({}, tr, {
        data: 0
    }), Qu = ft(gh), yh = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, wh = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Sh = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function xh(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Sh[e]) ? !!t[e] : !1
    }
    function Bi() {
        return xh
    }
    var Ch = H({}, Zr, {
        key: function(e) {
            if (e.key) {
                var t = yh[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Xo(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wh[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Bi,
        charCode: function(e) {
            return e.type === "keypress" ? Xo(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Xo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , Eh = ft(Ch)
      , Ph = H({}, Zo, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Xu = ft(Ph)
      , kh = H({}, Zr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Bi
    })
      , Rh = ft(kh)
      , _h = H({}, tr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Th = ft(_h)
      , Nh = H({}, Zo, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Ah = ft(Nh)
      , Oh = [9, 13, 27, 32]
      , Ui = d && "CompositionEvent"in window
      , Jr = null;
    d && "documentMode"in document && (Jr = document.documentMode);
    var Ih = d && "TextEvent"in window && !Jr
      , Gu = d && (!Ui || Jr && 8 < Jr && 11 >= Jr)
      , Zu = " "
      , qu = !1;
    function Ju(e, t) {
        switch (e) {
        case "keyup":
            return Oh.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function ec(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var nr = !1;
    function bh(e, t) {
        switch (e) {
        case "compositionend":
            return ec(t);
        case "keypress":
            return t.which !== 32 ? null : (qu = !0,
            Zu);
        case "textInput":
            return e = t.data,
            e === Zu && qu ? null : e;
        default:
            return null
        }
    }
    function Lh(e, t) {
        if (nr)
            return e === "compositionend" || !Ui && Ju(e, t) ? (e = Hu(),
            Qo = zi = cn = null,
            nr = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Gu && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var Mh = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function tc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Mh[e.type] : t === "textarea"
    }
    function nc(e, t, n, o) {
        Cu(o),
        t = nl(t, "onChange"),
        0 < t.length && (n = new ji("onChange","change",null,n,o),
        e.push({
            event: n,
            listeners: t
        }))
    }
    var eo = null
      , to = null;
    function Dh(e) {
        Sc(e, 0)
    }
    function qo(e) {
        var t = sr(e);
        if (_e(t))
            return e
    }
    function zh(e, t) {
        if (e === "change")
            return t
    }
    var rc = !1;
    if (d) {
        var $i;
        if (d) {
            var Hi = "oninput"in document;
            if (!Hi) {
                var oc = document.createElement("div");
                oc.setAttribute("oninput", "return;"),
                Hi = typeof oc.oninput == "function"
            }
            $i = Hi
        } else
            $i = !1;
        rc = $i && (!document.documentMode || 9 < document.documentMode)
    }
    function lc() {
        eo && (eo.detachEvent("onpropertychange", ic),
        to = eo = null)
    }
    function ic(e) {
        if (e.propertyName === "value" && qo(to)) {
            var t = [];
            nc(t, to, e, Pi(e)),
            Ru(Dh, t)
        }
    }
    function jh(e, t, n) {
        e === "focusin" ? (lc(),
        eo = t,
        to = n,
        eo.attachEvent("onpropertychange", ic)) : e === "focusout" && lc()
    }
    function Fh(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return qo(to)
    }
    function Wh(e, t) {
        if (e === "click")
            return qo(t)
    }
    function Vh(e, t) {
        if (e === "input" || e === "change")
            return qo(t)
    }
    function Bh(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var kt = typeof Object.is == "function" ? Object.is : Bh;
    function no(e, t) {
        if (kt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var n = Object.keys(e)
          , o = Object.keys(t);
        if (n.length !== o.length)
            return !1;
        for (o = 0; o < n.length; o++) {
            var s = n[o];
            if (!h.call(t, s) || !kt(e[s], t[s]))
                return !1
        }
        return !0
    }
    function sc(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function ac(e, t) {
        var n = sc(e);
        e = 0;
        for (var o; n; ) {
            if (n.nodeType === 3) {
                if (o = e + n.textContent.length,
                e <= t && o >= t)
                    return {
                        node: n,
                        offset: t - e
                    };
                e = o
            }
            e: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = sc(n)
        }
    }
    function uc(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? uc(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function cc() {
        for (var e = window, t = $e(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                e = t.contentWindow;
            else
                break;
            t = $e(e.document)
        }
        return t
    }
    function Ki(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    function Uh(e) {
        var t = cc()
          , n = e.focusedElem
          , o = e.selectionRange;
        if (t !== n && n && n.ownerDocument && uc(n.ownerDocument.documentElement, n)) {
            if (o !== null && Ki(n)) {
                if (t = o.start,
                e = o.end,
                e === void 0 && (e = t),
                "selectionStart"in n)
                    n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                    e = e.getSelection();
                    var s = n.textContent.length
                      , u = Math.min(o.start, s);
                    o = o.end === void 0 ? u : Math.min(o.end, s),
                    !e.extend && u > o && (s = o,
                    o = u,
                    u = s),
                    s = ac(n, u);
                    var m = ac(n, o);
                    s && m && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== m.node || e.focusOffset !== m.offset) && (t = t.createRange(),
                    t.setStart(s.node, s.offset),
                    e.removeAllRanges(),
                    u > o ? (e.addRange(t),
                    e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset),
                    e.addRange(t)))
                }
            }
            for (t = [],
            e = n; e = e.parentNode; )
                e.nodeType === 1 && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
            for (typeof n.focus == "function" && n.focus(),
            n = 0; n < t.length; n++)
                e = t[n],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
        }
    }
    var $h = d && "documentMode"in document && 11 >= document.documentMode
      , rr = null
      , Yi = null
      , ro = null
      , Qi = !1;
    function fc(e, t, n) {
        var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Qi || rr == null || rr !== $e(o) || (o = rr,
        "selectionStart"in o && Ki(o) ? o = {
            start: o.selectionStart,
            end: o.selectionEnd
        } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(),
        o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset
        }),
        ro && no(ro, o) || (ro = o,
        o = nl(Yi, "onSelect"),
        0 < o.length && (t = new ji("onSelect","select",null,t,n),
        e.push({
            event: t,
            listeners: o
        }),
        t.target = rr)))
    }
    function Jo(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
    }
    var or = {
        animationend: Jo("Animation", "AnimationEnd"),
        animationiteration: Jo("Animation", "AnimationIteration"),
        animationstart: Jo("Animation", "AnimationStart"),
        transitionend: Jo("Transition", "TransitionEnd")
    }
      , Xi = {}
      , dc = {};
    d && (dc = document.createElement("div").style,
    "AnimationEvent"in window || (delete or.animationend.animation,
    delete or.animationiteration.animation,
    delete or.animationstart.animation),
    "TransitionEvent"in window || delete or.transitionend.transition);
    function el(e) {
        if (Xi[e])
            return Xi[e];
        if (!or[e])
            return e;
        var t = or[e], n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in dc)
                return Xi[e] = t[n];
        return e
    }
    var pc = el("animationend")
      , mc = el("animationiteration")
      , hc = el("animationstart")
      , vc = el("transitionend")
      , gc = new Map
      , yc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function fn(e, t) {
        gc.set(e, t),
        f(t, [e])
    }
    for (var Gi = 0; Gi < yc.length; Gi++) {
        var Zi = yc[Gi]
          , Hh = Zi.toLowerCase()
          , Kh = Zi[0].toUpperCase() + Zi.slice(1);
        fn(Hh, "on" + Kh)
    }
    fn(pc, "onAnimationEnd"),
    fn(mc, "onAnimationIteration"),
    fn(hc, "onAnimationStart"),
    fn("dblclick", "onDoubleClick"),
    fn("focusin", "onFocus"),
    fn("focusout", "onBlur"),
    fn(vc, "onTransitionEnd"),
    p("onMouseEnter", ["mouseout", "mouseover"]),
    p("onMouseLeave", ["mouseout", "mouseover"]),
    p("onPointerEnter", ["pointerout", "pointerover"]),
    p("onPointerLeave", ["pointerout", "pointerover"]),
    f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var oo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Yh = new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));
    function wc(e, t, n) {
        var o = e.type || "unknown-event";
        e.currentTarget = n,
        Hm(o, t, void 0, e),
        e.currentTarget = null
    }
    function Sc(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var o = e[n]
              , s = o.event;
            o = o.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var m = o.length - 1; 0 <= m; m--) {
                        var x = o[m]
                          , E = x.instance
                          , b = x.currentTarget;
                        if (x = x.listener,
                        E !== u && s.isPropagationStopped())
                            break e;
                        wc(s, x, b),
                        u = E
                    }
                else
                    for (m = 0; m < o.length; m++) {
                        if (x = o[m],
                        E = x.instance,
                        b = x.currentTarget,
                        x = x.listener,
                        E !== u && s.isPropagationStopped())
                            break e;
                        wc(s, x, b),
                        u = E
                    }
            }
        }
        if (jo)
            throw e = Ti,
            jo = !1,
            Ti = null,
            e
    }
    function Oe(e, t) {
        var n = t[ls];
        n === void 0 && (n = t[ls] = new Set);
        var o = e + "__bubble";
        n.has(o) || (xc(t, e, 2, !1),
        n.add(o))
    }
    function qi(e, t, n) {
        var o = 0;
        t && (o |= 4),
        xc(n, e, o, t)
    }
    var tl = "_reactListening" + Math.random().toString(36).slice(2);
    function lo(e) {
        if (!e[tl]) {
            e[tl] = !0,
            a.forEach(function(n) {
                n !== "selectionchange" && (Yh.has(n) || qi(n, !1, e),
                qi(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[tl] || (t[tl] = !0,
            qi("selectionchange", !1, t))
        }
    }
    function xc(e, t, n, o) {
        switch ($u(t)) {
        case 1:
            var s = sh;
            break;
        case 4:
            s = ah;
            break;
        default:
            s = Mi
        }
        n = s.bind(null, t, n, e),
        s = void 0,
        !_i || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
        o ? s !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: s
        }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
            passive: s
        }) : e.addEventListener(t, n, !1)
    }
    function Ji(e, t, n, o, s) {
        var u = o;
        if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
            e: for (; ; ) {
                if (o === null)
                    return;
                var m = o.tag;
                if (m === 3 || m === 4) {
                    var x = o.stateNode.containerInfo;
                    if (x === s || x.nodeType === 8 && x.parentNode === s)
                        break;
                    if (m === 4)
                        for (m = o.return; m !== null; ) {
                            var E = m.tag;
                            if ((E === 3 || E === 4) && (E = m.stateNode.containerInfo,
                            E === s || E.nodeType === 8 && E.parentNode === s))
                                return;
                            m = m.return
                        }
                    for (; x !== null; ) {
                        if (m = zn(x),
                        m === null)
                            return;
                        if (E = m.tag,
                        E === 5 || E === 6) {
                            o = u = m;
                            continue e
                        }
                        x = x.parentNode
                    }
                }
                o = o.return
            }
        Ru(function() {
            var b = u
              , W = Pi(n)
              , B = [];
            e: {
                var F = gc.get(e);
                if (F !== void 0) {
                    var X = ji
                      , q = e;
                    switch (e) {
                    case "keypress":
                        if (Xo(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        X = Eh;
                        break;
                    case "focusin":
                        q = "focus",
                        X = Vi;
                        break;
                    case "focusout":
                        q = "blur",
                        X = Vi;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        X = Vi;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        X = Yu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        X = fh;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        X = Rh;
                        break;
                    case pc:
                    case mc:
                    case hc:
                        X = mh;
                        break;
                    case vc:
                        X = Th;
                        break;
                    case "scroll":
                        X = uh;
                        break;
                    case "wheel":
                        X = Ah;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        X = vh;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        X = Xu
                    }
                    var te = (t & 4) !== 0
                      , Fe = !te && e === "scroll"
                      , A = te ? F !== null ? F + "Capture" : null : F;
                    te = [];
                    for (var R = b, I; R !== null; ) {
                        I = R;
                        var U = I.stateNode;
                        if (I.tag === 5 && U !== null && (I = U,
                        A !== null && (U = Vr(R, A),
                        U != null && te.push(io(R, U, I)))),
                        Fe)
                            break;
                        R = R.return
                    }
                    0 < te.length && (F = new X(F,q,null,n,W),
                    B.push({
                        event: F,
                        listeners: te
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (F = e === "mouseover" || e === "pointerover",
                    X = e === "mouseout" || e === "pointerout",
                    F && n !== Ei && (q = n.relatedTarget || n.fromElement) && (zn(q) || q[$t]))
                        break e;
                    if ((X || F) && (F = W.window === W ? W : (F = W.ownerDocument) ? F.defaultView || F.parentWindow : window,
                    X ? (q = n.relatedTarget || n.toElement,
                    X = b,
                    q = q ? zn(q) : null,
                    q !== null && (Fe = Dn(q),
                    q !== Fe || q.tag !== 5 && q.tag !== 6) && (q = null)) : (X = null,
                    q = b),
                    X !== q)) {
                        if (te = Yu,
                        U = "onMouseLeave",
                        A = "onMouseEnter",
                        R = "mouse",
                        (e === "pointerout" || e === "pointerover") && (te = Xu,
                        U = "onPointerLeave",
                        A = "onPointerEnter",
                        R = "pointer"),
                        Fe = X == null ? F : sr(X),
                        I = q == null ? F : sr(q),
                        F = new te(U,R + "leave",X,n,W),
                        F.target = Fe,
                        F.relatedTarget = I,
                        U = null,
                        zn(W) === b && (te = new te(A,R + "enter",q,n,W),
                        te.target = I,
                        te.relatedTarget = Fe,
                        U = te),
                        Fe = U,
                        X && q)
                            t: {
                                for (te = X,
                                A = q,
                                R = 0,
                                I = te; I; I = lr(I))
                                    R++;
                                for (I = 0,
                                U = A; U; U = lr(U))
                                    I++;
                                for (; 0 < R - I; )
                                    te = lr(te),
                                    R--;
                                for (; 0 < I - R; )
                                    A = lr(A),
                                    I--;
                                for (; R--; ) {
                                    if (te === A || A !== null && te === A.alternate)
                                        break t;
                                    te = lr(te),
                                    A = lr(A)
                                }
                                te = null
                            }
                        else
                            te = null;
                        X !== null && Cc(B, F, X, te, !1),
                        q !== null && Fe !== null && Cc(B, Fe, q, te, !0)
                    }
                }
                e: {
                    if (F = b ? sr(b) : window,
                    X = F.nodeName && F.nodeName.toLowerCase(),
                    X === "select" || X === "input" && F.type === "file")
                        var ne = zh;
                    else if (tc(F))
                        if (rc)
                            ne = Vh;
                        else {
                            ne = Fh;
                            var se = jh
                        }
                    else
                        (X = F.nodeName) && X.toLowerCase() === "input" && (F.type === "checkbox" || F.type === "radio") && (ne = Wh);
                    if (ne && (ne = ne(e, b))) {
                        nc(B, ne, n, W);
                        break e
                    }
                    se && se(e, F, b),
                    e === "focusout" && (se = F._wrapperState) && se.controlled && F.type === "number" && on(F, "number", F.value)
                }
                switch (se = b ? sr(b) : window,
                e) {
                case "focusin":
                    (tc(se) || se.contentEditable === "true") && (rr = se,
                    Yi = b,
                    ro = null);
                    break;
                case "focusout":
                    ro = Yi = rr = null;
                    break;
                case "mousedown":
                    Qi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Qi = !1,
                    fc(B, n, W);
                    break;
                case "selectionchange":
                    if ($h)
                        break;
                case "keydown":
                case "keyup":
                    fc(B, n, W)
                }
                var ae;
                if (Ui)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var ce = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ce = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ce = "onCompositionUpdate";
                            break e
                        }
                        ce = void 0
                    }
                else
                    nr ? Ju(e, n) && (ce = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ce = "onCompositionStart");
                ce && (Gu && n.locale !== "ko" && (nr || ce !== "onCompositionStart" ? ce === "onCompositionEnd" && nr && (ae = Hu()) : (cn = W,
                zi = "value"in cn ? cn.value : cn.textContent,
                nr = !0)),
                se = nl(b, ce),
                0 < se.length && (ce = new Qu(ce,e,null,n,W),
                B.push({
                    event: ce,
                    listeners: se
                }),
                ae ? ce.data = ae : (ae = ec(n),
                ae !== null && (ce.data = ae)))),
                (ae = Ih ? bh(e, n) : Lh(e, n)) && (b = nl(b, "onBeforeInput"),
                0 < b.length && (W = new Qu("onBeforeInput","beforeinput",null,n,W),
                B.push({
                    event: W,
                    listeners: b
                }),
                W.data = ae))
            }
            Sc(B, t)
        })
    }
    function io(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }
    function nl(e, t) {
        for (var n = t + "Capture", o = []; e !== null; ) {
            var s = e
              , u = s.stateNode;
            s.tag === 5 && u !== null && (s = u,
            u = Vr(e, n),
            u != null && o.unshift(io(e, u, s)),
            u = Vr(e, t),
            u != null && o.push(io(e, u, s))),
            e = e.return
        }
        return o
    }
    function lr(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5);
        return e || null
    }
    function Cc(e, t, n, o, s) {
        for (var u = t._reactName, m = []; n !== null && n !== o; ) {
            var x = n
              , E = x.alternate
              , b = x.stateNode;
            if (E !== null && E === o)
                break;
            x.tag === 5 && b !== null && (x = b,
            s ? (E = Vr(n, u),
            E != null && m.unshift(io(n, E, x))) : s || (E = Vr(n, u),
            E != null && m.push(io(n, E, x)))),
            n = n.return
        }
        m.length !== 0 && e.push({
            event: t,
            listeners: m
        })
    }
    var Qh = /\r\n?/g
      , Xh = /\u0000|\uFFFD/g;
    function Ec(e) {
        return (typeof e == "string" ? e : "" + e).replace(Qh, `
`).replace(Xh, "")
    }
    function rl(e, t, n) {
        if (t = Ec(t),
        Ec(e) !== t && n)
            throw Error(l(425))
    }
    function ol() {}
    var es = null
      , ts = null;
    function ns(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var rs = typeof setTimeout == "function" ? setTimeout : void 0
      , Gh = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Pc = typeof Promise == "function" ? Promise : void 0
      , Zh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pc < "u" ? function(e) {
        return Pc.resolve(null).then(e).catch(qh)
    }
    : rs;
    function qh(e) {
        setTimeout(function() {
            throw e
        })
    }
    function os(e, t) {
        var n = t
          , o = 0;
        do {
            var s = n.nextSibling;
            if (e.removeChild(n),
            s && s.nodeType === 8)
                if (n = s.data,
                n === "/$") {
                    if (o === 0) {
                        e.removeChild(s),
                        Gr(t);
                        return
                    }
                    o--
                } else
                    n !== "$" && n !== "$?" && n !== "$!" || o++;
            n = s
        } while (n);
        Gr(t)
    }
    function dn(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    function kc(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var ir = Math.random().toString(36).slice(2)
      , Mt = "__reactFiber$" + ir
      , so = "__reactProps$" + ir
      , $t = "__reactContainer$" + ir
      , ls = "__reactEvents$" + ir
      , Jh = "__reactListeners$" + ir
      , ev = "__reactHandles$" + ir;
    function zn(e) {
        var t = e[Mt];
        if (t)
            return t;
        for (var n = e.parentNode; n; ) {
            if (t = n[$t] || n[Mt]) {
                if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                    for (e = kc(e); e !== null; ) {
                        if (n = e[Mt])
                            return n;
                        e = kc(e)
                    }
                return t
            }
            e = n,
            n = e.parentNode
        }
        return null
    }
    function ao(e) {
        return e = e[Mt] || e[$t],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }
    function sr(e) {
        if (e.tag === 5 || e.tag === 6)
            return e.stateNode;
        throw Error(l(33))
    }
    function ll(e) {
        return e[so] || null
    }
    var is = []
      , ar = -1;
    function pn(e) {
        return {
            current: e
        }
    }
    function Ie(e) {
        0 > ar || (e.current = is[ar],
        is[ar] = null,
        ar--)
    }
    function Ae(e, t) {
        ar++,
        is[ar] = e.current,
        e.current = t
    }
    var mn = {}
      , Ze = pn(mn)
      , lt = pn(!1)
      , jn = mn;
    function ur(e, t) {
        var n = e.type.contextTypes;
        if (!n)
            return mn;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
            return o.__reactInternalMemoizedMaskedChildContext;
        var s = {}, u;
        for (u in n)
            s[u] = t[u];
        return o && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = s),
        s
    }
    function it(e) {
        return e = e.childContextTypes,
        e != null
    }
    function il() {
        Ie(lt),
        Ie(Ze)
    }
    function Rc(e, t, n) {
        if (Ze.current !== mn)
            throw Error(l(168));
        Ae(Ze, t),
        Ae(lt, n)
    }
    function _c(e, t, n) {
        var o = e.stateNode;
        if (t = t.childContextTypes,
        typeof o.getChildContext != "function")
            return n;
        o = o.getChildContext();
        for (var s in o)
            if (!(s in t))
                throw Error(l(108, Q(e) || "Unknown", s));
        return H({}, n, o)
    }
    function sl(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mn,
        jn = Ze.current,
        Ae(Ze, e),
        Ae(lt, lt.current),
        !0
    }
    function Tc(e, t, n) {
        var o = e.stateNode;
        if (!o)
            throw Error(l(169));
        n ? (e = _c(e, t, jn),
        o.__reactInternalMemoizedMergedChildContext = e,
        Ie(lt),
        Ie(Ze),
        Ae(Ze, e)) : Ie(lt),
        Ae(lt, n)
    }
    var Ht = null
      , al = !1
      , ss = !1;
    function Nc(e) {
        Ht === null ? Ht = [e] : Ht.push(e)
    }
    function tv(e) {
        al = !0,
        Nc(e)
    }
    function hn() {
        if (!ss && Ht !== null) {
            ss = !0;
            var e = 0
              , t = Te;
            try {
                var n = Ht;
                for (Te = 1; e < n.length; e++) {
                    var o = n[e];
                    do
                        o = o(!0);
                    while (o !== null)
                }
                Ht = null,
                al = !1
            } catch (s) {
                throw Ht !== null && (Ht = Ht.slice(e + 1)),
                Ou(Ni, hn),
                s
            } finally {
                Te = t,
                ss = !1
            }
        }
        return null
    }
    var cr = []
      , fr = 0
      , ul = null
      , cl = 0
      , gt = []
      , yt = 0
      , Fn = null
      , Kt = 1
      , Yt = "";
    function Wn(e, t) {
        cr[fr++] = cl,
        cr[fr++] = ul,
        ul = e,
        cl = t
    }
    function Ac(e, t, n) {
        gt[yt++] = Kt,
        gt[yt++] = Yt,
        gt[yt++] = Fn,
        Fn = e;
        var o = Kt;
        e = Yt;
        var s = 32 - Pt(o) - 1;
        o &= ~(1 << s),
        n += 1;
        var u = 32 - Pt(t) + s;
        if (30 < u) {
            var m = s - s % 5;
            u = (o & (1 << m) - 1).toString(32),
            o >>= m,
            s -= m,
            Kt = 1 << 32 - Pt(t) + s | n << s | o,
            Yt = u + e
        } else
            Kt = 1 << u | n << s | o,
            Yt = e
    }
    function as(e) {
        e.return !== null && (Wn(e, 1),
        Ac(e, 1, 0))
    }
    function us(e) {
        for (; e === ul; )
            ul = cr[--fr],
            cr[fr] = null,
            cl = cr[--fr],
            cr[fr] = null;
        for (; e === Fn; )
            Fn = gt[--yt],
            gt[yt] = null,
            Yt = gt[--yt],
            gt[yt] = null,
            Kt = gt[--yt],
            gt[yt] = null
    }
    var dt = null
      , pt = null
      , Le = !1
      , Rt = null;
    function Oc(e, t) {
        var n = Ct(5, null, null, 0);
        n.elementType = "DELETED",
        n.stateNode = t,
        n.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [n],
        e.flags |= 16) : t.push(n)
    }
    function Ic(e, t) {
        switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
            t !== null ? (e.stateNode = t,
            dt = e,
            pt = dn(t.firstChild),
            !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
            t !== null ? (e.stateNode = t,
            dt = e,
            pt = null,
            !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
            t !== null ? (n = Fn !== null ? {
                id: Kt,
                overflow: Yt
            } : null,
            e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            },
            n = Ct(18, null, null, 0),
            n.stateNode = t,
            n.return = e,
            e.child = n,
            dt = e,
            pt = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function cs(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }
    function fs(e) {
        if (Le) {
            var t = pt;
            if (t) {
                var n = t;
                if (!Ic(e, t)) {
                    if (cs(e))
                        throw Error(l(418));
                    t = dn(n.nextSibling);
                    var o = dt;
                    t && Ic(e, t) ? Oc(o, n) : (e.flags = e.flags & -4097 | 2,
                    Le = !1,
                    dt = e)
                }
            } else {
                if (cs(e))
                    throw Error(l(418));
                e.flags = e.flags & -4097 | 2,
                Le = !1,
                dt = e
            }
        }
    }
    function bc(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
            e = e.return;
        dt = e
    }
    function fl(e) {
        if (e !== dt)
            return !1;
        if (!Le)
            return bc(e),
            Le = !0,
            !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !ns(e.type, e.memoizedProps)),
        t && (t = pt)) {
            if (cs(e))
                throw Lc(),
                Error(l(418));
            for (; t; )
                Oc(e, t),
                t = dn(t.nextSibling)
        }
        if (bc(e),
        e.tag === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(l(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                pt = dn(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            n !== "$" && n !== "$!" && n !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                pt = null
            }
        } else
            pt = dt ? dn(e.stateNode.nextSibling) : null;
        return !0
    }
    function Lc() {
        for (var e = pt; e; )
            e = dn(e.nextSibling)
    }
    function dr() {
        pt = dt = null,
        Le = !1
    }
    function ds(e) {
        Rt === null ? Rt = [e] : Rt.push(e)
    }
    var nv = z.ReactCurrentBatchConfig;
    function uo(e, t, n) {
        if (e = n.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner,
                n) {
                    if (n.tag !== 1)
                        throw Error(l(309));
                    var o = n.stateNode
                }
                if (!o)
                    throw Error(l(147, e));
                var s = o
                  , u = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(m) {
                    var x = s.refs;
                    m === null ? delete x[u] : x[u] = m
                }
                ,
                t._stringRef = u,
                t)
            }
            if (typeof e != "string")
                throw Error(l(284));
            if (!n._owner)
                throw Error(l(290, e))
        }
        return e
    }
    function dl(e, t) {
        throw e = Object.prototype.toString.call(t),
        Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }
    function Mc(e) {
        var t = e._init;
        return t(e._payload)
    }
    function Dc(e) {
        function t(A, R) {
            if (e) {
                var I = A.deletions;
                I === null ? (A.deletions = [R],
                A.flags |= 16) : I.push(R)
            }
        }
        function n(A, R) {
            if (!e)
                return null;
            for (; R !== null; )
                t(A, R),
                R = R.sibling;
            return null
        }
        function o(A, R) {
            for (A = new Map; R !== null; )
                R.key !== null ? A.set(R.key, R) : A.set(R.index, R),
                R = R.sibling;
            return A
        }
        function s(A, R) {
            return A = En(A, R),
            A.index = 0,
            A.sibling = null,
            A
        }
        function u(A, R, I) {
            return A.index = I,
            e ? (I = A.alternate,
            I !== null ? (I = I.index,
            I < R ? (A.flags |= 2,
            R) : I) : (A.flags |= 2,
            R)) : (A.flags |= 1048576,
            R)
        }
        function m(A) {
            return e && A.alternate === null && (A.flags |= 2),
            A
        }
        function x(A, R, I, U) {
            return R === null || R.tag !== 6 ? (R = ra(I, A.mode, U),
            R.return = A,
            R) : (R = s(R, I),
            R.return = A,
            R)
        }
        function E(A, R, I, U) {
            var ne = I.type;
            return ne === $ ? W(A, R, I.props.children, U, I.key) : R !== null && (R.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === ie && Mc(ne) === R.type) ? (U = s(R, I.props),
            U.ref = uo(A, R, I),
            U.return = A,
            U) : (U = Dl(I.type, I.key, I.props, null, A.mode, U),
            U.ref = uo(A, R, I),
            U.return = A,
            U)
        }
        function b(A, R, I, U) {
            return R === null || R.tag !== 4 || R.stateNode.containerInfo !== I.containerInfo || R.stateNode.implementation !== I.implementation ? (R = oa(I, A.mode, U),
            R.return = A,
            R) : (R = s(R, I.children || []),
            R.return = A,
            R)
        }
        function W(A, R, I, U, ne) {
            return R === null || R.tag !== 7 ? (R = Qn(I, A.mode, U, ne),
            R.return = A,
            R) : (R = s(R, I),
            R.return = A,
            R)
        }
        function B(A, R, I) {
            if (typeof R == "string" && R !== "" || typeof R == "number")
                return R = ra("" + R, A.mode, I),
                R.return = A,
                R;
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                case V:
                    return I = Dl(R.type, R.key, R.props, null, A.mode, I),
                    I.ref = uo(A, null, R),
                    I.return = A,
                    I;
                case Y:
                    return R = oa(R, A.mode, I),
                    R.return = A,
                    R;
                case ie:
                    var U = R._init;
                    return B(A, U(R._payload), I)
                }
                if (jr(R) || K(R))
                    return R = Qn(R, A.mode, I, null),
                    R.return = A,
                    R;
                dl(A, R)
            }
            return null
        }
        function F(A, R, I, U) {
            var ne = R !== null ? R.key : null;
            if (typeof I == "string" && I !== "" || typeof I == "number")
                return ne !== null ? null : x(A, R, "" + I, U);
            if (typeof I == "object" && I !== null) {
                switch (I.$$typeof) {
                case V:
                    return I.key === ne ? E(A, R, I, U) : null;
                case Y:
                    return I.key === ne ? b(A, R, I, U) : null;
                case ie:
                    return ne = I._init,
                    F(A, R, ne(I._payload), U)
                }
                if (jr(I) || K(I))
                    return ne !== null ? null : W(A, R, I, U, null);
                dl(A, I)
            }
            return null
        }
        function X(A, R, I, U, ne) {
            if (typeof U == "string" && U !== "" || typeof U == "number")
                return A = A.get(I) || null,
                x(R, A, "" + U, ne);
            if (typeof U == "object" && U !== null) {
                switch (U.$$typeof) {
                case V:
                    return A = A.get(U.key === null ? I : U.key) || null,
                    E(R, A, U, ne);
                case Y:
                    return A = A.get(U.key === null ? I : U.key) || null,
                    b(R, A, U, ne);
                case ie:
                    var se = U._init;
                    return X(A, R, I, se(U._payload), ne)
                }
                if (jr(U) || K(U))
                    return A = A.get(I) || null,
                    W(R, A, U, ne, null);
                dl(R, U)
            }
            return null
        }
        function q(A, R, I, U) {
            for (var ne = null, se = null, ae = R, ce = R = 0, Ye = null; ae !== null && ce < I.length; ce++) {
                ae.index > ce ? (Ye = ae,
                ae = null) : Ye = ae.sibling;
                var ke = F(A, ae, I[ce], U);
                if (ke === null) {
                    ae === null && (ae = Ye);
                    break
                }
                e && ae && ke.alternate === null && t(A, ae),
                R = u(ke, R, ce),
                se === null ? ne = ke : se.sibling = ke,
                se = ke,
                ae = Ye
            }
            if (ce === I.length)
                return n(A, ae),
                Le && Wn(A, ce),
                ne;
            if (ae === null) {
                for (; ce < I.length; ce++)
                    ae = B(A, I[ce], U),
                    ae !== null && (R = u(ae, R, ce),
                    se === null ? ne = ae : se.sibling = ae,
                    se = ae);
                return Le && Wn(A, ce),
                ne
            }
            for (ae = o(A, ae); ce < I.length; ce++)
                Ye = X(ae, A, ce, I[ce], U),
                Ye !== null && (e && Ye.alternate !== null && ae.delete(Ye.key === null ? ce : Ye.key),
                R = u(Ye, R, ce),
                se === null ? ne = Ye : se.sibling = Ye,
                se = Ye);
            return e && ae.forEach(function(Pn) {
                return t(A, Pn)
            }),
            Le && Wn(A, ce),
            ne
        }
        function te(A, R, I, U) {
            var ne = K(I);
            if (typeof ne != "function")
                throw Error(l(150));
            if (I = ne.call(I),
            I == null)
                throw Error(l(151));
            for (var se = ne = null, ae = R, ce = R = 0, Ye = null, ke = I.next(); ae !== null && !ke.done; ce++,
            ke = I.next()) {
                ae.index > ce ? (Ye = ae,
                ae = null) : Ye = ae.sibling;
                var Pn = F(A, ae, ke.value, U);
                if (Pn === null) {
                    ae === null && (ae = Ye);
                    break
                }
                e && ae && Pn.alternate === null && t(A, ae),
                R = u(Pn, R, ce),
                se === null ? ne = Pn : se.sibling = Pn,
                se = Pn,
                ae = Ye
            }
            if (ke.done)
                return n(A, ae),
                Le && Wn(A, ce),
                ne;
            if (ae === null) {
                for (; !ke.done; ce++,
                ke = I.next())
                    ke = B(A, ke.value, U),
                    ke !== null && (R = u(ke, R, ce),
                    se === null ? ne = ke : se.sibling = ke,
                    se = ke);
                return Le && Wn(A, ce),
                ne
            }
            for (ae = o(A, ae); !ke.done; ce++,
            ke = I.next())
                ke = X(ae, A, ce, ke.value, U),
                ke !== null && (e && ke.alternate !== null && ae.delete(ke.key === null ? ce : ke.key),
                R = u(ke, R, ce),
                se === null ? ne = ke : se.sibling = ke,
                se = ke);
            return e && ae.forEach(function(Mv) {
                return t(A, Mv)
            }),
            Le && Wn(A, ce),
            ne
        }
        function Fe(A, R, I, U) {
            if (typeof I == "object" && I !== null && I.type === $ && I.key === null && (I = I.props.children),
            typeof I == "object" && I !== null) {
                switch (I.$$typeof) {
                case V:
                    e: {
                        for (var ne = I.key, se = R; se !== null; ) {
                            if (se.key === ne) {
                                if (ne = I.type,
                                ne === $) {
                                    if (se.tag === 7) {
                                        n(A, se.sibling),
                                        R = s(se, I.props.children),
                                        R.return = A,
                                        A = R;
                                        break e
                                    }
                                } else if (se.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === ie && Mc(ne) === se.type) {
                                    n(A, se.sibling),
                                    R = s(se, I.props),
                                    R.ref = uo(A, se, I),
                                    R.return = A,
                                    A = R;
                                    break e
                                }
                                n(A, se);
                                break
                            } else
                                t(A, se);
                            se = se.sibling
                        }
                        I.type === $ ? (R = Qn(I.props.children, A.mode, U, I.key),
                        R.return = A,
                        A = R) : (U = Dl(I.type, I.key, I.props, null, A.mode, U),
                        U.ref = uo(A, R, I),
                        U.return = A,
                        A = U)
                    }
                    return m(A);
                case Y:
                    e: {
                        for (se = I.key; R !== null; ) {
                            if (R.key === se)
                                if (R.tag === 4 && R.stateNode.containerInfo === I.containerInfo && R.stateNode.implementation === I.implementation) {
                                    n(A, R.sibling),
                                    R = s(R, I.children || []),
                                    R.return = A,
                                    A = R;
                                    break e
                                } else {
                                    n(A, R);
                                    break
                                }
                            else
                                t(A, R);
                            R = R.sibling
                        }
                        R = oa(I, A.mode, U),
                        R.return = A,
                        A = R
                    }
                    return m(A);
                case ie:
                    return se = I._init,
                    Fe(A, R, se(I._payload), U)
                }
                if (jr(I))
                    return q(A, R, I, U);
                if (K(I))
                    return te(A, R, I, U);
                dl(A, I)
            }
            return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I,
            R !== null && R.tag === 6 ? (n(A, R.sibling),
            R = s(R, I),
            R.return = A,
            A = R) : (n(A, R),
            R = ra(I, A.mode, U),
            R.return = A,
            A = R),
            m(A)) : n(A, R)
        }
        return Fe
    }
    var pr = Dc(!0)
      , zc = Dc(!1)
      , pl = pn(null)
      , ml = null
      , mr = null
      , ps = null;
    function ms() {
        ps = mr = ml = null
    }
    function hs(e) {
        var t = pl.current;
        Ie(pl),
        e._currentValue = t
    }
    function vs(e, t, n) {
        for (; e !== null; ) {
            var o = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
            e === n)
                break;
            e = e.return
        }
    }
    function hr(e, t) {
        ml = e,
        ps = mr = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (st = !0),
        e.firstContext = null)
    }
    function wt(e) {
        var t = e._currentValue;
        if (ps !== e)
            if (e = {
                context: e,
                memoizedValue: t,
                next: null
            },
            mr === null) {
                if (ml === null)
                    throw Error(l(308));
                mr = e,
                ml.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else
                mr = mr.next = e;
        return t
    }
    var Vn = null;
    function gs(e) {
        Vn === null ? Vn = [e] : Vn.push(e)
    }
    function jc(e, t, n, o) {
        var s = t.interleaved;
        return s === null ? (n.next = n,
        gs(t)) : (n.next = s.next,
        s.next = n),
        t.interleaved = n,
        Qt(e, o)
    }
    function Qt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t),
        n = e,
        e = e.return; e !== null; )
            e.childLanes |= t,
            n = e.alternate,
            n !== null && (n.childLanes |= t),
            n = e,
            e = e.return;
        return n.tag === 3 ? n.stateNode : null
    }
    var vn = !1;
    function ys(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function Fc(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }
    function Xt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function gn(e, t, n) {
        var o = e.updateQueue;
        if (o === null)
            return null;
        if (o = o.shared,
        (Pe & 2) !== 0) {
            var s = o.pending;
            return s === null ? t.next = t : (t.next = s.next,
            s.next = t),
            o.pending = t,
            Qt(e, n)
        }
        return s = o.interleaved,
        s === null ? (t.next = t,
        gs(o)) : (t.next = s.next,
        s.next = t),
        o.interleaved = t,
        Qt(e, n)
    }
    function hl(e, t, n) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (n & 4194240) !== 0)) {
            var o = t.lanes;
            o &= e.pendingLanes,
            n |= o,
            t.lanes = n,
            Ii(e, n)
        }
    }
    function Wc(e, t) {
        var n = e.updateQueue
          , o = e.alternate;
        if (o !== null && (o = o.updateQueue,
        n === o)) {
            var s = null
              , u = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var m = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    u === null ? s = u = m : u = u.next = m,
                    n = n.next
                } while (n !== null);
                u === null ? s = u = t : u = u.next = t
            } else
                s = u = t;
            n = {
                baseState: o.baseState,
                firstBaseUpdate: s,
                lastBaseUpdate: u,
                shared: o.shared,
                effects: o.effects
            },
            e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
    }
    function vl(e, t, n, o) {
        var s = e.updateQueue;
        vn = !1;
        var u = s.firstBaseUpdate
          , m = s.lastBaseUpdate
          , x = s.shared.pending;
        if (x !== null) {
            s.shared.pending = null;
            var E = x
              , b = E.next;
            E.next = null,
            m === null ? u = b : m.next = b,
            m = E;
            var W = e.alternate;
            W !== null && (W = W.updateQueue,
            x = W.lastBaseUpdate,
            x !== m && (x === null ? W.firstBaseUpdate = b : x.next = b,
            W.lastBaseUpdate = E))
        }
        if (u !== null) {
            var B = s.baseState;
            m = 0,
            W = b = E = null,
            x = u;
            do {
                var F = x.lane
                  , X = x.eventTime;
                if ((o & F) === F) {
                    W !== null && (W = W.next = {
                        eventTime: X,
                        lane: 0,
                        tag: x.tag,
                        payload: x.payload,
                        callback: x.callback,
                        next: null
                    });
                    e: {
                        var q = e
                          , te = x;
                        switch (F = t,
                        X = n,
                        te.tag) {
                        case 1:
                            if (q = te.payload,
                            typeof q == "function") {
                                B = q.call(X, B, F);
                                break e
                            }
                            B = q;
                            break e;
                        case 3:
                            q.flags = q.flags & -65537 | 128;
                        case 0:
                            if (q = te.payload,
                            F = typeof q == "function" ? q.call(X, B, F) : q,
                            F == null)
                                break e;
                            B = H({}, B, F);
                            break e;
                        case 2:
                            vn = !0
                        }
                    }
                    x.callback !== null && x.lane !== 0 && (e.flags |= 64,
                    F = s.effects,
                    F === null ? s.effects = [x] : F.push(x))
                } else
                    X = {
                        eventTime: X,
                        lane: F,
                        tag: x.tag,
                        payload: x.payload,
                        callback: x.callback,
                        next: null
                    },
                    W === null ? (b = W = X,
                    E = B) : W = W.next = X,
                    m |= F;
                if (x = x.next,
                x === null) {
                    if (x = s.shared.pending,
                    x === null)
                        break;
                    F = x,
                    x = F.next,
                    F.next = null,
                    s.lastBaseUpdate = F,
                    s.shared.pending = null
                }
            } while (!0);
            if (W === null && (E = B),
            s.baseState = E,
            s.firstBaseUpdate = b,
            s.lastBaseUpdate = W,
            t = s.shared.interleaved,
            t !== null) {
                s = t;
                do
                    m |= s.lane,
                    s = s.next;
                while (s !== t)
            } else
                u === null && (s.shared.lanes = 0);
            $n |= m,
            e.lanes = m,
            e.memoizedState = B
        }
    }
    function Vc(e, t, n) {
        if (e = t.effects,
        t.effects = null,
        e !== null)
            for (t = 0; t < e.length; t++) {
                var o = e[t]
                  , s = o.callback;
                if (s !== null) {
                    if (o.callback = null,
                    o = n,
                    typeof s != "function")
                        throw Error(l(191, s));
                    s.call(o)
                }
            }
    }
    var co = {}
      , Dt = pn(co)
      , fo = pn(co)
      , po = pn(co);
    function Bn(e) {
        if (e === co)
            throw Error(l(174));
        return e
    }
    function ws(e, t) {
        switch (Ae(po, t),
        Ae(fo, e),
        Ae(Dt, co),
        e = t.nodeType,
        e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Si(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
            t = e.namespaceURI || null,
            e = e.tagName,
            t = Si(t, e)
        }
        Ie(Dt),
        Ae(Dt, t)
    }
    function vr() {
        Ie(Dt),
        Ie(fo),
        Ie(po)
    }
    function Bc(e) {
        Bn(po.current);
        var t = Bn(Dt.current)
          , n = Si(t, e.type);
        t !== n && (Ae(fo, e),
        Ae(Dt, n))
    }
    function Ss(e) {
        fo.current === e && (Ie(Dt),
        Ie(fo))
    }
    var Me = pn(0);
    function gl(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var xs = [];
    function Cs() {
        for (var e = 0; e < xs.length; e++)
            xs[e]._workInProgressVersionPrimary = null;
        xs.length = 0
    }
    var yl = z.ReactCurrentDispatcher
      , Es = z.ReactCurrentBatchConfig
      , Un = 0
      , De = null
      , Be = null
      , He = null
      , wl = !1
      , mo = !1
      , ho = 0
      , rv = 0;
    function qe() {
        throw Error(l(321))
    }
    function Ps(e, t) {
        if (t === null)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!kt(e[n], t[n]))
                return !1;
        return !0
    }
    function ks(e, t, n, o, s, u) {
        if (Un = u,
        De = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        yl.current = e === null || e.memoizedState === null ? sv : av,
        e = n(o, s),
        mo) {
            u = 0;
            do {
                if (mo = !1,
                ho = 0,
                25 <= u)
                    throw Error(l(301));
                u += 1,
                He = Be = null,
                t.updateQueue = null,
                yl.current = uv,
                e = n(o, s)
            } while (mo)
        }
        if (yl.current = Cl,
        t = Be !== null && Be.next !== null,
        Un = 0,
        He = Be = De = null,
        wl = !1,
        t)
            throw Error(l(300));
        return e
    }
    function Rs() {
        var e = ho !== 0;
        return ho = 0,
        e
    }
    function zt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return He === null ? De.memoizedState = He = e : He = He.next = e,
        He
    }
    function St() {
        if (Be === null) {
            var e = De.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Be.next;
        var t = He === null ? De.memoizedState : He.next;
        if (t !== null)
            He = t,
            Be = e;
        else {
            if (e === null)
                throw Error(l(310));
            Be = e,
            e = {
                memoizedState: Be.memoizedState,
                baseState: Be.baseState,
                baseQueue: Be.baseQueue,
                queue: Be.queue,
                next: null
            },
            He === null ? De.memoizedState = He = e : He = He.next = e
        }
        return He
    }
    function vo(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function _s(e) {
        var t = St()
          , n = t.queue;
        if (n === null)
            throw Error(l(311));
        n.lastRenderedReducer = e;
        var o = Be
          , s = o.baseQueue
          , u = n.pending;
        if (u !== null) {
            if (s !== null) {
                var m = s.next;
                s.next = u.next,
                u.next = m
            }
            o.baseQueue = s = u,
            n.pending = null
        }
        if (s !== null) {
            u = s.next,
            o = o.baseState;
            var x = m = null
              , E = null
              , b = u;
            do {
                var W = b.lane;
                if ((Un & W) === W)
                    E !== null && (E = E.next = {
                        lane: 0,
                        action: b.action,
                        hasEagerState: b.hasEagerState,
                        eagerState: b.eagerState,
                        next: null
                    }),
                    o = b.hasEagerState ? b.eagerState : e(o, b.action);
                else {
                    var B = {
                        lane: W,
                        action: b.action,
                        hasEagerState: b.hasEagerState,
                        eagerState: b.eagerState,
                        next: null
                    };
                    E === null ? (x = E = B,
                    m = o) : E = E.next = B,
                    De.lanes |= W,
                    $n |= W
                }
                b = b.next
            } while (b !== null && b !== u);
            E === null ? m = o : E.next = x,
            kt(o, t.memoizedState) || (st = !0),
            t.memoizedState = o,
            t.baseState = m,
            t.baseQueue = E,
            n.lastRenderedState = o
        }
        if (e = n.interleaved,
        e !== null) {
            s = e;
            do
                u = s.lane,
                De.lanes |= u,
                $n |= u,
                s = s.next;
            while (s !== e)
        } else
            s === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
    }
    function Ts(e) {
        var t = St()
          , n = t.queue;
        if (n === null)
            throw Error(l(311));
        n.lastRenderedReducer = e;
        var o = n.dispatch
          , s = n.pending
          , u = t.memoizedState;
        if (s !== null) {
            n.pending = null;
            var m = s = s.next;
            do
                u = e(u, m.action),
                m = m.next;
            while (m !== s);
            kt(u, t.memoizedState) || (st = !0),
            t.memoizedState = u,
            t.baseQueue === null && (t.baseState = u),
            n.lastRenderedState = u
        }
        return [u, o]
    }
    function Uc() {}
    function $c(e, t) {
        var n = De
          , o = St()
          , s = t()
          , u = !kt(o.memoizedState, s);
        if (u && (o.memoizedState = s,
        st = !0),
        o = o.queue,
        Ns(Yc.bind(null, n, o, e), [e]),
        o.getSnapshot !== t || u || He !== null && He.memoizedState.tag & 1) {
            if (n.flags |= 2048,
            go(9, Kc.bind(null, n, o, s, t), void 0, null),
            Ke === null)
                throw Error(l(349));
            (Un & 30) !== 0 || Hc(n, t, s)
        }
        return s
    }
    function Hc(e, t, n) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = De.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        De.updateQueue = t,
        t.stores = [e]) : (n = t.stores,
        n === null ? t.stores = [e] : n.push(e))
    }
    function Kc(e, t, n, o) {
        t.value = n,
        t.getSnapshot = o,
        Qc(t) && Xc(e)
    }
    function Yc(e, t, n) {
        return n(function() {
            Qc(t) && Xc(e)
        })
    }
    function Qc(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !kt(e, n)
        } catch {
            return !0
        }
    }
    function Xc(e) {
        var t = Qt(e, 1);
        t !== null && At(t, e, 1, -1)
    }
    function Gc(e) {
        var t = zt();
        return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: vo,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = iv.bind(null, De, e),
        [t.memoizedState, e]
    }
    function go(e, t, n, o) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: o,
            next: null
        },
        t = De.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        De.updateQueue = t,
        t.lastEffect = e.next = e) : (n = t.lastEffect,
        n === null ? t.lastEffect = e.next = e : (o = n.next,
        n.next = e,
        e.next = o,
        t.lastEffect = e)),
        e
    }
    function Zc() {
        return St().memoizedState
    }
    function Sl(e, t, n, o) {
        var s = zt();
        De.flags |= e,
        s.memoizedState = go(1 | t, n, void 0, o === void 0 ? null : o)
    }
    function xl(e, t, n, o) {
        var s = St();
        o = o === void 0 ? null : o;
        var u = void 0;
        if (Be !== null) {
            var m = Be.memoizedState;
            if (u = m.destroy,
            o !== null && Ps(o, m.deps)) {
                s.memoizedState = go(t, n, u, o);
                return
            }
        }
        De.flags |= e,
        s.memoizedState = go(1 | t, n, u, o)
    }
    function qc(e, t) {
        return Sl(8390656, 8, e, t)
    }
    function Ns(e, t) {
        return xl(2048, 8, e, t)
    }
    function Jc(e, t) {
        return xl(4, 2, e, t)
    }
    function ef(e, t) {
        return xl(4, 4, e, t)
    }
    function tf(e, t) {
        if (typeof t == "function")
            return e = e(),
            t(e),
            function() {
                t(null)
            }
            ;
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function nf(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        xl(4, 4, tf.bind(null, t, e), n)
    }
    function As() {}
    function rf(e, t) {
        var n = St();
        t = t === void 0 ? null : t;
        var o = n.memoizedState;
        return o !== null && t !== null && Ps(t, o[1]) ? o[0] : (n.memoizedState = [e, t],
        e)
    }
    function of(e, t) {
        var n = St();
        t = t === void 0 ? null : t;
        var o = n.memoizedState;
        return o !== null && t !== null && Ps(t, o[1]) ? o[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
    }
    function lf(e, t, n) {
        return (Un & 21) === 0 ? (e.baseState && (e.baseState = !1,
        st = !0),
        e.memoizedState = n) : (kt(n, t) || (n = Mu(),
        De.lanes |= n,
        $n |= n,
        e.baseState = !0),
        t)
    }
    function ov(e, t) {
        var n = Te;
        Te = n !== 0 && 4 > n ? n : 4,
        e(!0);
        var o = Es.transition;
        Es.transition = {};
        try {
            e(!1),
            t()
        } finally {
            Te = n,
            Es.transition = o
        }
    }
    function sf() {
        return St().memoizedState
    }
    function lv(e, t, n) {
        var o = xn(e);
        if (n = {
            lane: o,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        af(e))
            uf(t, n);
        else if (n = jc(e, t, n, o),
        n !== null) {
            var s = rt();
            At(n, e, o, s),
            cf(n, t, o)
        }
    }
    function iv(e, t, n) {
        var o = xn(e)
          , s = {
            lane: o,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (af(e))
            uf(t, s);
        else {
            var u = e.alternate;
            if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer,
            u !== null))
                try {
                    var m = t.lastRenderedState
                      , x = u(m, n);
                    if (s.hasEagerState = !0,
                    s.eagerState = x,
                    kt(x, m)) {
                        var E = t.interleaved;
                        E === null ? (s.next = s,
                        gs(t)) : (s.next = E.next,
                        E.next = s),
                        t.interleaved = s;
                        return
                    }
                } catch {} finally {}
            n = jc(e, t, s, o),
            n !== null && (s = rt(),
            At(n, e, o, s),
            cf(n, t, o))
        }
    }
    function af(e) {
        var t = e.alternate;
        return e === De || t !== null && t === De
    }
    function uf(e, t) {
        mo = wl = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
    }
    function cf(e, t, n) {
        if ((n & 4194240) !== 0) {
            var o = t.lanes;
            o &= e.pendingLanes,
            n |= o,
            t.lanes = n,
            Ii(e, n)
        }
    }
    var Cl = {
        readContext: wt,
        useCallback: qe,
        useContext: qe,
        useEffect: qe,
        useImperativeHandle: qe,
        useInsertionEffect: qe,
        useLayoutEffect: qe,
        useMemo: qe,
        useReducer: qe,
        useRef: qe,
        useState: qe,
        useDebugValue: qe,
        useDeferredValue: qe,
        useTransition: qe,
        useMutableSource: qe,
        useSyncExternalStore: qe,
        useId: qe,
        unstable_isNewReconciler: !1
    }
      , sv = {
        readContext: wt,
        useCallback: function(e, t) {
            return zt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: wt,
        useEffect: qc,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null,
            Sl(4194308, 4, tf.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Sl(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Sl(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = zt();
            return t = t === void 0 ? null : t,
            e = e(),
            n.memoizedState = [e, t],
            e
        },
        useReducer: function(e, t, n) {
            var o = zt();
            return t = n !== void 0 ? n(t) : t,
            o.memoizedState = o.baseState = t,
            e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            },
            o.queue = e,
            e = e.dispatch = lv.bind(null, De, e),
            [o.memoizedState, e]
        },
        useRef: function(e) {
            var t = zt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: Gc,
        useDebugValue: As,
        useDeferredValue: function(e) {
            return zt().memoizedState = e
        },
        useTransition: function() {
            var e = Gc(!1)
              , t = e[0];
            return e = ov.bind(null, e[1]),
            zt().memoizedState = e,
            [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var o = De
              , s = zt();
            if (Le) {
                if (n === void 0)
                    throw Error(l(407));
                n = n()
            } else {
                if (n = t(),
                Ke === null)
                    throw Error(l(349));
                (Un & 30) !== 0 || Hc(o, t, n)
            }
            s.memoizedState = n;
            var u = {
                value: n,
                getSnapshot: t
            };
            return s.queue = u,
            qc(Yc.bind(null, o, u, e), [e]),
            o.flags |= 2048,
            go(9, Kc.bind(null, o, u, n, t), void 0, null),
            n
        },
        useId: function() {
            var e = zt()
              , t = Ke.identifierPrefix;
            if (Le) {
                var n = Yt
                  , o = Kt;
                n = (o & ~(1 << 32 - Pt(o) - 1)).toString(32) + n,
                t = ":" + t + "R" + n,
                n = ho++,
                0 < n && (t += "H" + n.toString(32)),
                t += ":"
            } else
                n = rv++,
                t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
      , av = {
        readContext: wt,
        useCallback: rf,
        useContext: wt,
        useEffect: Ns,
        useImperativeHandle: nf,
        useInsertionEffect: Jc,
        useLayoutEffect: ef,
        useMemo: of,
        useReducer: _s,
        useRef: Zc,
        useState: function() {
            return _s(vo)
        },
        useDebugValue: As,
        useDeferredValue: function(e) {
            var t = St();
            return lf(t, Be.memoizedState, e)
        },
        useTransition: function() {
            var e = _s(vo)[0]
              , t = St().memoizedState;
            return [e, t]
        },
        useMutableSource: Uc,
        useSyncExternalStore: $c,
        useId: sf,
        unstable_isNewReconciler: !1
    }
      , uv = {
        readContext: wt,
        useCallback: rf,
        useContext: wt,
        useEffect: Ns,
        useImperativeHandle: nf,
        useInsertionEffect: Jc,
        useLayoutEffect: ef,
        useMemo: of,
        useReducer: Ts,
        useRef: Zc,
        useState: function() {
            return Ts(vo)
        },
        useDebugValue: As,
        useDeferredValue: function(e) {
            var t = St();
            return Be === null ? t.memoizedState = e : lf(t, Be.memoizedState, e)
        },
        useTransition: function() {
            var e = Ts(vo)[0]
              , t = St().memoizedState;
            return [e, t]
        },
        useMutableSource: Uc,
        useSyncExternalStore: $c,
        useId: sf,
        unstable_isNewReconciler: !1
    };
    function _t(e, t) {
        if (e && e.defaultProps) {
            t = H({}, t),
            e = e.defaultProps;
            for (var n in e)
                t[n] === void 0 && (t[n] = e[n]);
            return t
        }
        return t
    }
    function Os(e, t, n, o) {
        t = e.memoizedState,
        n = n(o, t),
        n = n == null ? t : H({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var El = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Dn(e) === e : !1
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var o = rt()
              , s = xn(e)
              , u = Xt(o, s);
            u.payload = t,
            n != null && (u.callback = n),
            t = gn(e, u, s),
            t !== null && (At(t, e, s, o),
            hl(t, e, s))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var o = rt()
              , s = xn(e)
              , u = Xt(o, s);
            u.tag = 1,
            u.payload = t,
            n != null && (u.callback = n),
            t = gn(e, u, s),
            t !== null && (At(t, e, s, o),
            hl(t, e, s))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = rt()
              , o = xn(e)
              , s = Xt(n, o);
            s.tag = 2,
            t != null && (s.callback = t),
            t = gn(e, s, o),
            t !== null && (At(t, e, o, n),
            hl(t, e, o))
        }
    };
    function ff(e, t, n, o, s, u, m) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, u, m) : t.prototype && t.prototype.isPureReactComponent ? !no(n, o) || !no(s, u) : !0
    }
    function df(e, t, n) {
        var o = !1
          , s = mn
          , u = t.contextType;
        return typeof u == "object" && u !== null ? u = wt(u) : (s = it(t) ? jn : Ze.current,
        o = t.contextTypes,
        u = (o = o != null) ? ur(e, s) : mn),
        t = new t(n,u),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = El,
        e.stateNode = t,
        t._reactInternals = e,
        o && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = s,
        e.__reactInternalMemoizedMaskedChildContext = u),
        t
    }
    function pf(e, t, n, o) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, o),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, o),
        t.state !== e && El.enqueueReplaceState(t, t.state, null)
    }
    function Is(e, t, n, o) {
        var s = e.stateNode;
        s.props = n,
        s.state = e.memoizedState,
        s.refs = {},
        ys(e);
        var u = t.contextType;
        typeof u == "object" && u !== null ? s.context = wt(u) : (u = it(t) ? jn : Ze.current,
        s.context = ur(e, u)),
        s.state = e.memoizedState,
        u = t.getDerivedStateFromProps,
        typeof u == "function" && (Os(e, t, u, n),
        s.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state,
        typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
        t !== s.state && El.enqueueReplaceState(s, s.state, null),
        vl(e, n, s, o),
        s.state = e.memoizedState),
        typeof s.componentDidMount == "function" && (e.flags |= 4194308)
    }
    function gr(e, t) {
        try {
            var n = ""
              , o = t;
            do
                n += we(o),
                o = o.return;
            while (o);
            var s = n
        } catch (u) {
            s = `
Error generating stack: ` + u.message + `
` + u.stack
        }
        return {
            value: e,
            source: t,
            stack: s,
            digest: null
        }
    }
    function bs(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        }
    }
    function Ls(e, t) {
        try {
            console.error(t.value)
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    var cv = typeof WeakMap == "function" ? WeakMap : Map;
    function mf(e, t, n) {
        n = Xt(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
        var o = t.value;
        return n.callback = function() {
            Al || (Al = !0,
            Xs = o),
            Ls(e, t)
        }
        ,
        n
    }
    function hf(e, t, n) {
        n = Xt(-1, n),
        n.tag = 3;
        var o = e.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var s = t.value;
            n.payload = function() {
                return o(s)
            }
            ,
            n.callback = function() {
                Ls(e, t)
            }
        }
        var u = e.stateNode;
        return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
            Ls(e, t),
            typeof o != "function" && (wn === null ? wn = new Set([this]) : wn.add(this));
            var m = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: m !== null ? m : ""
            })
        }
        ),
        n
    }
    function vf(e, t, n) {
        var o = e.pingCache;
        if (o === null) {
            o = e.pingCache = new cv;
            var s = new Set;
            o.set(t, s)
        } else
            s = o.get(t),
            s === void 0 && (s = new Set,
            o.set(t, s));
        s.has(n) || (s.add(n),
        e = Pv.bind(null, e, t, n),
        t.then(e, e))
    }
    function gf(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
                return e;
            e = e.return
        } while (e !== null);
        return null
    }
    function yf(e, t, n, o, s) {
        return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128,
        n.flags |= 131072,
        n.flags &= -52805,
        n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Xt(-1, 1),
        t.tag = 2,
        gn(n, t, 1))),
        n.lanes |= 1),
        e) : (e.flags |= 65536,
        e.lanes = s,
        e)
    }
    var fv = z.ReactCurrentOwner
      , st = !1;
    function nt(e, t, n, o) {
        t.child = e === null ? zc(t, null, n, o) : pr(t, e.child, n, o)
    }
    function wf(e, t, n, o, s) {
        n = n.render;
        var u = t.ref;
        return hr(t, s),
        o = ks(e, t, n, o, u, s),
        n = Rs(),
        e !== null && !st ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~s,
        Gt(e, t, s)) : (Le && n && as(t),
        t.flags |= 1,
        nt(e, t, o, s),
        t.child)
    }
    function Sf(e, t, n, o, s) {
        if (e === null) {
            var u = n.type;
            return typeof u == "function" && !na(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
            t.type = u,
            xf(e, t, u, o, s)) : (e = Dl(n.type, null, o, t, t.mode, s),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (u = e.child,
        (e.lanes & s) === 0) {
            var m = u.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : no,
            n(m, o) && e.ref === t.ref)
                return Gt(e, t, s)
        }
        return t.flags |= 1,
        e = En(u, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function xf(e, t, n, o, s) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (no(u, o) && e.ref === t.ref)
                if (st = !1,
                t.pendingProps = o = u,
                (e.lanes & s) !== 0)
                    (e.flags & 131072) !== 0 && (st = !0);
                else
                    return t.lanes = e.lanes,
                    Gt(e, t, s)
        }
        return Ms(e, t, n, o, s)
    }
    function Cf(e, t, n) {
        var o = t.pendingProps
          , s = o.children
          , u = e !== null ? e.memoizedState : null;
        if (o.mode === "hidden")
            if ((t.mode & 1) === 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Ae(wr, mt),
                mt |= n;
            else {
                if ((n & 1073741824) === 0)
                    return e = u !== null ? u.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    Ae(wr, mt),
                    mt |= e,
                    null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                o = u !== null ? u.baseLanes : n,
                Ae(wr, mt),
                mt |= o
            }
        else
            u !== null ? (o = u.baseLanes | n,
            t.memoizedState = null) : o = n,
            Ae(wr, mt),
            mt |= o;
        return nt(e, t, s, n),
        t.child
    }
    function Ef(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
        t.flags |= 2097152)
    }
    function Ms(e, t, n, o, s) {
        var u = it(n) ? jn : Ze.current;
        return u = ur(t, u),
        hr(t, s),
        n = ks(e, t, n, o, u, s),
        o = Rs(),
        e !== null && !st ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~s,
        Gt(e, t, s)) : (Le && o && as(t),
        t.flags |= 1,
        nt(e, t, n, s),
        t.child)
    }
    function Pf(e, t, n, o, s) {
        if (it(n)) {
            var u = !0;
            sl(t)
        } else
            u = !1;
        if (hr(t, s),
        t.stateNode === null)
            kl(e, t),
            df(t, n, o),
            Is(t, n, o, s),
            o = !0;
        else if (e === null) {
            var m = t.stateNode
              , x = t.memoizedProps;
            m.props = x;
            var E = m.context
              , b = n.contextType;
            typeof b == "object" && b !== null ? b = wt(b) : (b = it(n) ? jn : Ze.current,
            b = ur(t, b));
            var W = n.getDerivedStateFromProps
              , B = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
            B || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (x !== o || E !== b) && pf(t, m, o, b),
            vn = !1;
            var F = t.memoizedState;
            m.state = F,
            vl(t, o, m, s),
            E = t.memoizedState,
            x !== o || F !== E || lt.current || vn ? (typeof W == "function" && (Os(t, n, W, o),
            E = t.memoizedState),
            (x = vn || ff(t, n, x, o, F, E, b)) ? (B || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(),
            typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()),
            typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = o,
            t.memoizedState = E),
            m.props = o,
            m.state = E,
            m.context = b,
            o = x) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308),
            o = !1)
        } else {
            m = t.stateNode,
            Fc(e, t),
            x = t.memoizedProps,
            b = t.type === t.elementType ? x : _t(t.type, x),
            m.props = b,
            B = t.pendingProps,
            F = m.context,
            E = n.contextType,
            typeof E == "object" && E !== null ? E = wt(E) : (E = it(n) ? jn : Ze.current,
            E = ur(t, E));
            var X = n.getDerivedStateFromProps;
            (W = typeof X == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (x !== B || F !== E) && pf(t, m, o, E),
            vn = !1,
            F = t.memoizedState,
            m.state = F,
            vl(t, o, m, s);
            var q = t.memoizedState;
            x !== B || F !== q || lt.current || vn ? (typeof X == "function" && (Os(t, n, X, o),
            q = t.memoizedState),
            (b = vn || ff(t, n, b, o, F, q, E) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, q, E),
            typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, q, E)),
            typeof m.componentDidUpdate == "function" && (t.flags |= 4),
            typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || x === e.memoizedProps && F === e.memoizedState || (t.flags |= 4),
            typeof m.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && F === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = o,
            t.memoizedState = q),
            m.props = o,
            m.state = q,
            m.context = E,
            o = b) : (typeof m.componentDidUpdate != "function" || x === e.memoizedProps && F === e.memoizedState || (t.flags |= 4),
            typeof m.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && F === e.memoizedState || (t.flags |= 1024),
            o = !1)
        }
        return Ds(e, t, n, o, u, s)
    }
    function Ds(e, t, n, o, s, u) {
        Ef(e, t);
        var m = (t.flags & 128) !== 0;
        if (!o && !m)
            return s && Tc(t, n, !1),
            Gt(e, t, u);
        o = t.stateNode,
        fv.current = t;
        var x = m && typeof n.getDerivedStateFromError != "function" ? null : o.render();
        return t.flags |= 1,
        e !== null && m ? (t.child = pr(t, e.child, null, u),
        t.child = pr(t, null, x, u)) : nt(e, t, x, u),
        t.memoizedState = o.state,
        s && Tc(t, n, !0),
        t.child
    }
    function kf(e) {
        var t = e.stateNode;
        t.pendingContext ? Rc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Rc(e, t.context, !1),
        ws(e, t.containerInfo)
    }
    function Rf(e, t, n, o, s) {
        return dr(),
        ds(s),
        t.flags |= 256,
        nt(e, t, n, o),
        t.child
    }
    var zs = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function js(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }
    function _f(e, t, n) {
        var o = t.pendingProps, s = Me.current, u = !1, m = (t.flags & 128) !== 0, x;
        if ((x = m) || (x = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
        x ? (u = !0,
        t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1),
        Ae(Me, s & 1),
        e === null)
            return fs(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824,
            null) : (m = o.children,
            e = o.fallback,
            u ? (o = t.mode,
            u = t.child,
            m = {
                mode: "hidden",
                children: m
            },
            (o & 1) === 0 && u !== null ? (u.childLanes = 0,
            u.pendingProps = m) : u = zl(m, o, 0, null),
            e = Qn(e, o, n, null),
            u.return = t,
            e.return = t,
            u.sibling = e,
            t.child = u,
            t.child.memoizedState = js(n),
            t.memoizedState = zs,
            e) : Fs(t, m));
        if (s = e.memoizedState,
        s !== null && (x = s.dehydrated,
        x !== null))
            return dv(e, t, m, o, x, s, n);
        if (u) {
            u = o.fallback,
            m = t.mode,
            s = e.child,
            x = s.sibling;
            var E = {
                mode: "hidden",
                children: o.children
            };
            return (m & 1) === 0 && t.child !== s ? (o = t.child,
            o.childLanes = 0,
            o.pendingProps = E,
            t.deletions = null) : (o = En(s, E),
            o.subtreeFlags = s.subtreeFlags & 14680064),
            x !== null ? u = En(x, u) : (u = Qn(u, m, n, null),
            u.flags |= 2),
            u.return = t,
            o.return = t,
            o.sibling = u,
            t.child = o,
            o = u,
            u = t.child,
            m = e.child.memoizedState,
            m = m === null ? js(n) : {
                baseLanes: m.baseLanes | n,
                cachePool: null,
                transitions: m.transitions
            },
            u.memoizedState = m,
            u.childLanes = e.childLanes & ~n,
            t.memoizedState = zs,
            o
        }
        return u = e.child,
        e = u.sibling,
        o = En(u, {
            mode: "visible",
            children: o.children
        }),
        (t.mode & 1) === 0 && (o.lanes = n),
        o.return = t,
        o.sibling = null,
        e !== null && (n = t.deletions,
        n === null ? (t.deletions = [e],
        t.flags |= 16) : n.push(e)),
        t.child = o,
        t.memoizedState = null,
        o
    }
    function Fs(e, t) {
        return t = zl({
            mode: "visible",
            children: t
        }, e.mode, 0, null),
        t.return = e,
        e.child = t
    }
    function Pl(e, t, n, o) {
        return o !== null && ds(o),
        pr(t, e.child, null, n),
        e = Fs(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function dv(e, t, n, o, s, u, m) {
        if (n)
            return t.flags & 256 ? (t.flags &= -257,
            o = bs(Error(l(422))),
            Pl(e, t, m, o)) : t.memoizedState !== null ? (t.child = e.child,
            t.flags |= 128,
            null) : (u = o.fallback,
            s = t.mode,
            o = zl({
                mode: "visible",
                children: o.children
            }, s, 0, null),
            u = Qn(u, s, m, null),
            u.flags |= 2,
            o.return = t,
            u.return = t,
            o.sibling = u,
            t.child = o,
            (t.mode & 1) !== 0 && pr(t, e.child, null, m),
            t.child.memoizedState = js(m),
            t.memoizedState = zs,
            u);
        if ((t.mode & 1) === 0)
            return Pl(e, t, m, null);
        if (s.data === "$!") {
            if (o = s.nextSibling && s.nextSibling.dataset,
            o)
                var x = o.dgst;
            return o = x,
            u = Error(l(419)),
            o = bs(u, o, void 0),
            Pl(e, t, m, o)
        }
        if (x = (m & e.childLanes) !== 0,
        st || x) {
            if (o = Ke,
            o !== null) {
                switch (m & -m) {
                case 4:
                    s = 2;
                    break;
                case 16:
                    s = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    s = 32;
                    break;
                case 536870912:
                    s = 268435456;
                    break;
                default:
                    s = 0
                }
                s = (s & (o.suspendedLanes | m)) !== 0 ? 0 : s,
                s !== 0 && s !== u.retryLane && (u.retryLane = s,
                Qt(e, s),
                At(o, e, s, -1))
            }
            return ta(),
            o = bs(Error(l(421))),
            Pl(e, t, m, o)
        }
        return s.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = kv.bind(null, e),
        s._reactRetry = t,
        null) : (e = u.treeContext,
        pt = dn(s.nextSibling),
        dt = t,
        Le = !0,
        Rt = null,
        e !== null && (gt[yt++] = Kt,
        gt[yt++] = Yt,
        gt[yt++] = Fn,
        Kt = e.id,
        Yt = e.overflow,
        Fn = t),
        t = Fs(t, o.children),
        t.flags |= 4096,
        t)
    }
    function Tf(e, t, n) {
        e.lanes |= t;
        var o = e.alternate;
        o !== null && (o.lanes |= t),
        vs(e.return, t, n)
    }
    function Ws(e, t, n, o, s) {
        var u = e.memoizedState;
        u === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: o,
            tail: n,
            tailMode: s
        } : (u.isBackwards = t,
        u.rendering = null,
        u.renderingStartTime = 0,
        u.last = o,
        u.tail = n,
        u.tailMode = s)
    }
    function Nf(e, t, n) {
        var o = t.pendingProps
          , s = o.revealOrder
          , u = o.tail;
        if (nt(e, t, o.children, n),
        o = Me.current,
        (o & 2) !== 0)
            o = o & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && Tf(e, n, t);
                    else if (e.tag === 19)
                        Tf(e, n, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            o &= 1
        }
        if (Ae(Me, o),
        (t.mode & 1) === 0)
            t.memoizedState = null;
        else
            switch (s) {
            case "forwards":
                for (n = t.child,
                s = null; n !== null; )
                    e = n.alternate,
                    e !== null && gl(e) === null && (s = n),
                    n = n.sibling;
                n = s,
                n === null ? (s = t.child,
                t.child = null) : (s = n.sibling,
                n.sibling = null),
                Ws(t, !1, s, n, u);
                break;
            case "backwards":
                for (n = null,
                s = t.child,
                t.child = null; s !== null; ) {
                    if (e = s.alternate,
                    e !== null && gl(e) === null) {
                        t.child = s;
                        break
                    }
                    e = s.sibling,
                    s.sibling = n,
                    n = s,
                    s = e
                }
                Ws(t, !0, n, null, u);
                break;
            case "together":
                Ws(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
            }
        return t.child
    }
    function kl(e, t) {
        (t.mode & 1) === 0 && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
    }
    function Gt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies),
        $n |= t.lanes,
        (n & t.childLanes) === 0)
            return null;
        if (e !== null && t.child !== e.child)
            throw Error(l(153));
        if (t.child !== null) {
            for (e = t.child,
            n = En(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null; )
                e = e.sibling,
                n = n.sibling = En(e, e.pendingProps),
                n.return = t;
            n.sibling = null
        }
        return t.child
    }
    function pv(e, t, n) {
        switch (t.tag) {
        case 3:
            kf(t),
            dr();
            break;
        case 5:
            Bc(t);
            break;
        case 1:
            it(t.type) && sl(t);
            break;
        case 4:
            ws(t, t.stateNode.containerInfo);
            break;
        case 10:
            var o = t.type._context
              , s = t.memoizedProps.value;
            Ae(pl, o._currentValue),
            o._currentValue = s;
            break;
        case 13:
            if (o = t.memoizedState,
            o !== null)
                return o.dehydrated !== null ? (Ae(Me, Me.current & 1),
                t.flags |= 128,
                null) : (n & t.child.childLanes) !== 0 ? _f(e, t, n) : (Ae(Me, Me.current & 1),
                e = Gt(e, t, n),
                e !== null ? e.sibling : null);
            Ae(Me, Me.current & 1);
            break;
        case 19:
            if (o = (n & t.childLanes) !== 0,
            (e.flags & 128) !== 0) {
                if (o)
                    return Nf(e, t, n);
                t.flags |= 128
            }
            if (s = t.memoizedState,
            s !== null && (s.rendering = null,
            s.tail = null,
            s.lastEffect = null),
            Ae(Me, Me.current),
            o)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            Cf(e, t, n)
        }
        return Gt(e, t, n)
    }
    var Af, Vs, Of, If;
    Af = function(e, t) {
        for (var n = t.child; n !== null; ) {
            if (n.tag === 5 || n.tag === 6)
                e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n,
                n = n.child;
                continue
            }
            if (n === t)
                break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === t)
                    return;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
    }
    ,
    Vs = function() {}
    ,
    Of = function(e, t, n, o) {
        var s = e.memoizedProps;
        if (s !== o) {
            e = t.stateNode,
            Bn(Dt.current);
            var u = null;
            switch (n) {
            case "input":
                s = ot(e, s),
                o = ot(e, o),
                u = [];
                break;
            case "select":
                s = H({}, s, {
                    value: void 0
                }),
                o = H({}, o, {
                    value: void 0
                }),
                u = [];
                break;
            case "textarea":
                s = wi(e, s),
                o = wi(e, o),
                u = [];
                break;
            default:
                typeof s.onClick != "function" && typeof o.onClick == "function" && (e.onclick = ol)
            }
            xi(n, o);
            var m;
            n = null;
            for (b in s)
                if (!o.hasOwnProperty(b) && s.hasOwnProperty(b) && s[b] != null)
                    if (b === "style") {
                        var x = s[b];
                        for (m in x)
                            x.hasOwnProperty(m) && (n || (n = {}),
                            n[m] = "")
                    } else
                        b !== "dangerouslySetInnerHTML" && b !== "children" && b !== "suppressContentEditableWarning" && b !== "suppressHydrationWarning" && b !== "autoFocus" && (c.hasOwnProperty(b) ? u || (u = []) : (u = u || []).push(b, null));
            for (b in o) {
                var E = o[b];
                if (x = s != null ? s[b] : void 0,
                o.hasOwnProperty(b) && E !== x && (E != null || x != null))
                    if (b === "style")
                        if (x) {
                            for (m in x)
                                !x.hasOwnProperty(m) || E && E.hasOwnProperty(m) || (n || (n = {}),
                                n[m] = "");
                            for (m in E)
                                E.hasOwnProperty(m) && x[m] !== E[m] && (n || (n = {}),
                                n[m] = E[m])
                        } else
                            n || (u || (u = []),
                            u.push(b, n)),
                            n = E;
                    else
                        b === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0,
                        x = x ? x.__html : void 0,
                        E != null && x !== E && (u = u || []).push(b, E)) : b === "children" ? typeof E != "string" && typeof E != "number" || (u = u || []).push(b, "" + E) : b !== "suppressContentEditableWarning" && b !== "suppressHydrationWarning" && (c.hasOwnProperty(b) ? (E != null && b === "onScroll" && Oe("scroll", e),
                        u || x === E || (u = [])) : (u = u || []).push(b, E))
            }
            n && (u = u || []).push("style", n);
            var b = u;
            (t.updateQueue = b) && (t.flags |= 4)
        }
    }
    ,
    If = function(e, t, n, o) {
        n !== o && (t.flags |= 4)
    }
    ;
    function yo(e, t) {
        if (!Le)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t),
                    t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var o = null; n !== null; )
                    n.alternate !== null && (o = n),
                    n = n.sibling;
                o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null
            }
    }
    function Je(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , n = 0
          , o = 0;
        if (t)
            for (var s = e.child; s !== null; )
                n |= s.lanes | s.childLanes,
                o |= s.subtreeFlags & 14680064,
                o |= s.flags & 14680064,
                s.return = e,
                s = s.sibling;
        else
            for (s = e.child; s !== null; )
                n |= s.lanes | s.childLanes,
                o |= s.subtreeFlags,
                o |= s.flags,
                s.return = e,
                s = s.sibling;
        return e.subtreeFlags |= o,
        e.childLanes = n,
        t
    }
    function mv(e, t, n) {
        var o = t.pendingProps;
        switch (us(t),
        t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Je(t),
            null;
        case 1:
            return it(t.type) && il(),
            Je(t),
            null;
        case 3:
            return o = t.stateNode,
            vr(),
            Ie(lt),
            Ie(Ze),
            Cs(),
            o.pendingContext && (o.context = o.pendingContext,
            o.pendingContext = null),
            (e === null || e.child === null) && (fl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Rt !== null && (qs(Rt),
            Rt = null))),
            Vs(e, t),
            Je(t),
            null;
        case 5:
            Ss(t);
            var s = Bn(po.current);
            if (n = t.type,
            e !== null && t.stateNode != null)
                Of(e, t, n, o, s),
                e.ref !== t.ref && (t.flags |= 512,
                t.flags |= 2097152);
            else {
                if (!o) {
                    if (t.stateNode === null)
                        throw Error(l(166));
                    return Je(t),
                    null
                }
                if (e = Bn(Dt.current),
                fl(t)) {
                    o = t.stateNode,
                    n = t.type;
                    var u = t.memoizedProps;
                    switch (o[Mt] = t,
                    o[so] = u,
                    e = (t.mode & 1) !== 0,
                    n) {
                    case "dialog":
                        Oe("cancel", o),
                        Oe("close", o);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Oe("load", o);
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < oo.length; s++)
                            Oe(oo[s], o);
                        break;
                    case "source":
                        Oe("error", o);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Oe("error", o),
                        Oe("load", o);
                        break;
                    case "details":
                        Oe("toggle", o);
                        break;
                    case "input":
                        nn(o, u),
                        Oe("invalid", o);
                        break;
                    case "select":
                        o._wrapperState = {
                            wasMultiple: !!u.multiple
                        },
                        Oe("invalid", o);
                        break;
                    case "textarea":
                        mu(o, u),
                        Oe("invalid", o)
                    }
                    xi(n, u),
                    s = null;
                    for (var m in u)
                        if (u.hasOwnProperty(m)) {
                            var x = u[m];
                            m === "children" ? typeof x == "string" ? o.textContent !== x && (u.suppressHydrationWarning !== !0 && rl(o.textContent, x, e),
                            s = ["children", x]) : typeof x == "number" && o.textContent !== "" + x && (u.suppressHydrationWarning !== !0 && rl(o.textContent, x, e),
                            s = ["children", "" + x]) : c.hasOwnProperty(m) && x != null && m === "onScroll" && Oe("scroll", o)
                        }
                    switch (n) {
                    case "input":
                        Ee(o),
                        Mo(o, u, !0);
                        break;
                    case "textarea":
                        Ee(o),
                        vu(o);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof u.onClick == "function" && (o.onclick = ol)
                    }
                    o = s,
                    t.updateQueue = o,
                    o !== null && (t.flags |= 4)
                } else {
                    m = s.nodeType === 9 ? s : s.ownerDocument,
                    e === "http://www.w3.org/1999/xhtml" && (e = gu(n)),
                    e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = m.createElement("div"),
                    e.innerHTML = "<script><\/script>",
                    e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = m.createElement(n, {
                        is: o.is
                    }) : (e = m.createElement(n),
                    n === "select" && (m = e,
                    o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : e = m.createElementNS(e, n),
                    e[Mt] = t,
                    e[so] = o,
                    Af(e, t, !1, !1),
                    t.stateNode = e;
                    e: {
                        switch (m = Ci(n, o),
                        n) {
                        case "dialog":
                            Oe("cancel", e),
                            Oe("close", e),
                            s = o;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Oe("load", e),
                            s = o;
                            break;
                        case "video":
                        case "audio":
                            for (s = 0; s < oo.length; s++)
                                Oe(oo[s], e);
                            s = o;
                            break;
                        case "source":
                            Oe("error", e),
                            s = o;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Oe("error", e),
                            Oe("load", e),
                            s = o;
                            break;
                        case "details":
                            Oe("toggle", e),
                            s = o;
                            break;
                        case "input":
                            nn(e, o),
                            s = ot(e, o),
                            Oe("invalid", e);
                            break;
                        case "option":
                            s = o;
                            break;
                        case "select":
                            e._wrapperState = {
                                wasMultiple: !!o.multiple
                            },
                            s = H({}, o, {
                                value: void 0
                            }),
                            Oe("invalid", e);
                            break;
                        case "textarea":
                            mu(e, o),
                            s = wi(e, o),
                            Oe("invalid", e);
                            break;
                        default:
                            s = o
                        }
                        xi(n, s),
                        x = s;
                        for (u in x)
                            if (x.hasOwnProperty(u)) {
                                var E = x[u];
                                u === "style" ? Su(e, E) : u === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0,
                                E != null && yu(e, E)) : u === "children" ? typeof E == "string" ? (n !== "textarea" || E !== "") && Fr(e, E) : typeof E == "number" && Fr(e, "" + E) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (c.hasOwnProperty(u) ? E != null && u === "onScroll" && Oe("scroll", e) : E != null && M(e, u, E, m))
                            }
                        switch (n) {
                        case "input":
                            Ee(e),
                            Mo(e, o, !1);
                            break;
                        case "textarea":
                            Ee(e),
                            vu(e);
                            break;
                        case "option":
                            o.value != null && e.setAttribute("value", "" + le(o.value));
                            break;
                        case "select":
                            e.multiple = !!o.multiple,
                            u = o.value,
                            u != null ? Zn(e, !!o.multiple, u, !1) : o.defaultValue != null && Zn(e, !!o.multiple, o.defaultValue, !0);
                            break;
                        default:
                            typeof s.onClick == "function" && (e.onclick = ol)
                        }
                        switch (n) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            o = !!o.autoFocus;
                            break e;
                        case "img":
                            o = !0;
                            break e;
                        default:
                            o = !1
                        }
                    }
                    o && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                t.flags |= 2097152)
            }
            return Je(t),
            null;
        case 6:
            if (e && t.stateNode != null)
                If(e, t, e.memoizedProps, o);
            else {
                if (typeof o != "string" && t.stateNode === null)
                    throw Error(l(166));
                if (n = Bn(po.current),
                Bn(Dt.current),
                fl(t)) {
                    if (o = t.stateNode,
                    n = t.memoizedProps,
                    o[Mt] = t,
                    (u = o.nodeValue !== n) && (e = dt,
                    e !== null))
                        switch (e.tag) {
                        case 3:
                            rl(o.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && rl(o.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    u && (t.flags |= 4)
                } else
                    o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o),
                    o[Mt] = t,
                    t.stateNode = o
            }
            return Je(t),
            null;
        case 13:
            if (Ie(Me),
            o = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Le && pt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
                    Lc(),
                    dr(),
                    t.flags |= 98560,
                    u = !1;
                else if (u = fl(t),
                o !== null && o.dehydrated !== null) {
                    if (e === null) {
                        if (!u)
                            throw Error(l(318));
                        if (u = t.memoizedState,
                        u = u !== null ? u.dehydrated : null,
                        !u)
                            throw Error(l(317));
                        u[Mt] = t
                    } else
                        dr(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Je(t),
                    u = !1
                } else
                    Rt !== null && (qs(Rt),
                    Rt = null),
                    u = !0;
                if (!u)
                    return t.flags & 65536 ? t : null
            }
            return (t.flags & 128) !== 0 ? (t.lanes = n,
            t) : (o = o !== null,
            o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192,
            (t.mode & 1) !== 0 && (e === null || (Me.current & 1) !== 0 ? Ue === 0 && (Ue = 3) : ta())),
            t.updateQueue !== null && (t.flags |= 4),
            Je(t),
            null);
        case 4:
            return vr(),
            Vs(e, t),
            e === null && lo(t.stateNode.containerInfo),
            Je(t),
            null;
        case 10:
            return hs(t.type._context),
            Je(t),
            null;
        case 17:
            return it(t.type) && il(),
            Je(t),
            null;
        case 19:
            if (Ie(Me),
            u = t.memoizedState,
            u === null)
                return Je(t),
                null;
            if (o = (t.flags & 128) !== 0,
            m = u.rendering,
            m === null)
                if (o)
                    yo(u, !1);
                else {
                    if (Ue !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (m = gl(e),
                            m !== null) {
                                for (t.flags |= 128,
                                yo(u, !1),
                                o = m.updateQueue,
                                o !== null && (t.updateQueue = o,
                                t.flags |= 4),
                                t.subtreeFlags = 0,
                                o = n,
                                n = t.child; n !== null; )
                                    u = n,
                                    e = o,
                                    u.flags &= 14680066,
                                    m = u.alternate,
                                    m === null ? (u.childLanes = 0,
                                    u.lanes = e,
                                    u.child = null,
                                    u.subtreeFlags = 0,
                                    u.memoizedProps = null,
                                    u.memoizedState = null,
                                    u.updateQueue = null,
                                    u.dependencies = null,
                                    u.stateNode = null) : (u.childLanes = m.childLanes,
                                    u.lanes = m.lanes,
                                    u.child = m.child,
                                    u.subtreeFlags = 0,
                                    u.deletions = null,
                                    u.memoizedProps = m.memoizedProps,
                                    u.memoizedState = m.memoizedState,
                                    u.updateQueue = m.updateQueue,
                                    u.type = m.type,
                                    e = m.dependencies,
                                    u.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }),
                                    n = n.sibling;
                                return Ae(Me, Me.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    u.tail !== null && je() > Sr && (t.flags |= 128,
                    o = !0,
                    yo(u, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!o)
                    if (e = gl(m),
                    e !== null) {
                        if (t.flags |= 128,
                        o = !0,
                        n = e.updateQueue,
                        n !== null && (t.updateQueue = n,
                        t.flags |= 4),
                        yo(u, !0),
                        u.tail === null && u.tailMode === "hidden" && !m.alternate && !Le)
                            return Je(t),
                            null
                    } else
                        2 * je() - u.renderingStartTime > Sr && n !== 1073741824 && (t.flags |= 128,
                        o = !0,
                        yo(u, !1),
                        t.lanes = 4194304);
                u.isBackwards ? (m.sibling = t.child,
                t.child = m) : (n = u.last,
                n !== null ? n.sibling = m : t.child = m,
                u.last = m)
            }
            return u.tail !== null ? (t = u.tail,
            u.rendering = t,
            u.tail = t.sibling,
            u.renderingStartTime = je(),
            t.sibling = null,
            n = Me.current,
            Ae(Me, o ? n & 1 | 2 : n & 1),
            t) : (Je(t),
            null);
        case 22:
        case 23:
            return ea(),
            o = t.memoizedState !== null,
            e !== null && e.memoizedState !== null !== o && (t.flags |= 8192),
            o && (t.mode & 1) !== 0 ? (mt & 1073741824) !== 0 && (Je(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(l(156, t.tag))
    }
    function hv(e, t) {
        switch (us(t),
        t.tag) {
        case 1:
            return it(t.type) && il(),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return vr(),
            Ie(lt),
            Ie(Ze),
            Cs(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 5:
            return Ss(t),
            null;
        case 13:
            if (Ie(Me),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(l(340));
                dr()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return Ie(Me),
            null;
        case 4:
            return vr(),
            null;
        case 10:
            return hs(t.type._context),
            null;
        case 22:
        case 23:
            return ea(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var Rl = !1
      , et = !1
      , vv = typeof WeakSet == "function" ? WeakSet : Set
      , G = null;
    function yr(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function")
                try {
                    n(null)
                } catch (o) {
                    ze(e, t, o)
                }
            else
                n.current = null
    }
    function Bs(e, t, n) {
        try {
            n()
        } catch (o) {
            ze(e, t, o)
        }
    }
    var bf = !1;
    function gv(e, t) {
        if (es = Ko,
        e = cc(),
        Ki(e)) {
            if ("selectionStart"in e)
                var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var o = n.getSelection && n.getSelection();
                    if (o && o.rangeCount !== 0) {
                        n = o.anchorNode;
                        var s = o.anchorOffset
                          , u = o.focusNode;
                        o = o.focusOffset;
                        try {
                            n.nodeType,
                            u.nodeType
                        } catch {
                            n = null;
                            break e
                        }
                        var m = 0
                          , x = -1
                          , E = -1
                          , b = 0
                          , W = 0
                          , B = e
                          , F = null;
                        t: for (; ; ) {
                            for (var X; B !== n || s !== 0 && B.nodeType !== 3 || (x = m + s),
                            B !== u || o !== 0 && B.nodeType !== 3 || (E = m + o),
                            B.nodeType === 3 && (m += B.nodeValue.length),
                            (X = B.firstChild) !== null; )
                                F = B,
                                B = X;
                            for (; ; ) {
                                if (B === e)
                                    break t;
                                if (F === n && ++b === s && (x = m),
                                F === u && ++W === o && (E = m),
                                (X = B.nextSibling) !== null)
                                    break;
                                B = F,
                                F = B.parentNode
                            }
                            B = X
                        }
                        n = x === -1 || E === -1 ? null : {
                            start: x,
                            end: E
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (ts = {
            focusedElem: e,
            selectionRange: n
        },
        Ko = !1,
        G = t; G !== null; )
            if (t = G,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                G = e;
            else
                for (; G !== null; ) {
                    t = G;
                    try {
                        var q = t.alternate;
                        if ((t.flags & 1024) !== 0)
                            switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (q !== null) {
                                    var te = q.memoizedProps
                                      , Fe = q.memoizedState
                                      , A = t.stateNode
                                      , R = A.getSnapshotBeforeUpdate(t.elementType === t.type ? te : _t(t.type, te), Fe);
                                    A.__reactInternalSnapshotBeforeUpdate = R
                                }
                                break;
                            case 3:
                                var I = t.stateNode.containerInfo;
                                I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(l(163))
                            }
                    } catch (U) {
                        ze(t, t.return, U)
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        G = e;
                        break
                    }
                    G = t.return
                }
        return q = bf,
        bf = !1,
        q
    }
    function wo(e, t, n) {
        var o = t.updateQueue;
        if (o = o !== null ? o.lastEffect : null,
        o !== null) {
            var s = o = o.next;
            do {
                if ((s.tag & e) === e) {
                    var u = s.destroy;
                    s.destroy = void 0,
                    u !== void 0 && Bs(t, n, u)
                }
                s = s.next
            } while (s !== o)
        }
    }
    function _l(e, t) {
        if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var o = n.create;
                    n.destroy = o()
                }
                n = n.next
            } while (n !== t)
        }
    }
    function Us(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }
    function Lf(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        Lf(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && (delete t[Mt],
        delete t[so],
        delete t[ls],
        delete t[Jh],
        delete t[ev])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    function Mf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }
    function Df(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Mf(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function $s(e, t, n) {
        var o = e.tag;
        if (o === 5 || o === 6)
            e = e.stateNode,
            t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
            t.insertBefore(e, n)) : (t = n,
            t.appendChild(e)),
            n = n._reactRootContainer,
            n != null || t.onclick !== null || (t.onclick = ol));
        else if (o !== 4 && (e = e.child,
        e !== null))
            for ($s(e, t, n),
            e = e.sibling; e !== null; )
                $s(e, t, n),
                e = e.sibling
    }
    function Hs(e, t, n) {
        var o = e.tag;
        if (o === 5 || o === 6)
            e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (o !== 4 && (e = e.child,
        e !== null))
            for (Hs(e, t, n),
            e = e.sibling; e !== null; )
                Hs(e, t, n),
                e = e.sibling
    }
    var Qe = null
      , Tt = !1;
    function yn(e, t, n) {
        for (n = n.child; n !== null; )
            zf(e, t, n),
            n = n.sibling
    }
    function zf(e, t, n) {
        if (Lt && typeof Lt.onCommitFiberUnmount == "function")
            try {
                Lt.onCommitFiberUnmount(Wo, n)
            } catch {}
        switch (n.tag) {
        case 5:
            et || yr(n, t);
        case 6:
            var o = Qe
              , s = Tt;
            Qe = null,
            yn(e, t, n),
            Qe = o,
            Tt = s,
            Qe !== null && (Tt ? (e = Qe,
            n = n.stateNode,
            e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Qe.removeChild(n.stateNode));
            break;
        case 18:
            Qe !== null && (Tt ? (e = Qe,
            n = n.stateNode,
            e.nodeType === 8 ? os(e.parentNode, n) : e.nodeType === 1 && os(e, n),
            Gr(e)) : os(Qe, n.stateNode));
            break;
        case 4:
            o = Qe,
            s = Tt,
            Qe = n.stateNode.containerInfo,
            Tt = !0,
            yn(e, t, n),
            Qe = o,
            Tt = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!et && (o = n.updateQueue,
            o !== null && (o = o.lastEffect,
            o !== null))) {
                s = o = o.next;
                do {
                    var u = s
                      , m = u.destroy;
                    u = u.tag,
                    m !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Bs(n, t, m),
                    s = s.next
                } while (s !== o)
            }
            yn(e, t, n);
            break;
        case 1:
            if (!et && (yr(n, t),
            o = n.stateNode,
            typeof o.componentWillUnmount == "function"))
                try {
                    o.props = n.memoizedProps,
                    o.state = n.memoizedState,
                    o.componentWillUnmount()
                } catch (x) {
                    ze(n, t, x)
                }
            yn(e, t, n);
            break;
        case 21:
            yn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (et = (o = et) || n.memoizedState !== null,
            yn(e, t, n),
            et = o) : yn(e, t, n);
            break;
        default:
            yn(e, t, n)
        }
    }
    function jf(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new vv),
            t.forEach(function(o) {
                var s = Rv.bind(null, e, o);
                n.has(o) || (n.add(o),
                o.then(s, s))
            })
        }
    }
    function Nt(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var o = 0; o < n.length; o++) {
                var s = n[o];
                try {
                    var u = e
                      , m = t
                      , x = m;
                    e: for (; x !== null; ) {
                        switch (x.tag) {
                        case 5:
                            Qe = x.stateNode,
                            Tt = !1;
                            break e;
                        case 3:
                            Qe = x.stateNode.containerInfo,
                            Tt = !0;
                            break e;
                        case 4:
                            Qe = x.stateNode.containerInfo,
                            Tt = !0;
                            break e
                        }
                        x = x.return
                    }
                    if (Qe === null)
                        throw Error(l(160));
                    zf(u, m, s),
                    Qe = null,
                    Tt = !1;
                    var E = s.alternate;
                    E !== null && (E.return = null),
                    s.return = null
                } catch (b) {
                    ze(s, t, b)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null; )
                Ff(t, e),
                t = t.sibling
    }
    function Ff(e, t) {
        var n = e.alternate
          , o = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Nt(t, e),
            jt(e),
            o & 4) {
                try {
                    wo(3, e, e.return),
                    _l(3, e)
                } catch (te) {
                    ze(e, e.return, te)
                }
                try {
                    wo(5, e, e.return)
                } catch (te) {
                    ze(e, e.return, te)
                }
            }
            break;
        case 1:
            Nt(t, e),
            jt(e),
            o & 512 && n !== null && yr(n, n.return);
            break;
        case 5:
            if (Nt(t, e),
            jt(e),
            o & 512 && n !== null && yr(n, n.return),
            e.flags & 32) {
                var s = e.stateNode;
                try {
                    Fr(s, "")
                } catch (te) {
                    ze(e, e.return, te)
                }
            }
            if (o & 4 && (s = e.stateNode,
            s != null)) {
                var u = e.memoizedProps
                  , m = n !== null ? n.memoizedProps : u
                  , x = e.type
                  , E = e.updateQueue;
                if (e.updateQueue = null,
                E !== null)
                    try {
                        x === "input" && u.type === "radio" && u.name != null && rn(s, u),
                        Ci(x, m);
                        var b = Ci(x, u);
                        for (m = 0; m < E.length; m += 2) {
                            var W = E[m]
                              , B = E[m + 1];
                            W === "style" ? Su(s, B) : W === "dangerouslySetInnerHTML" ? yu(s, B) : W === "children" ? Fr(s, B) : M(s, W, B, b)
                        }
                        switch (x) {
                        case "input":
                            Ut(s, u);
                            break;
                        case "textarea":
                            hu(s, u);
                            break;
                        case "select":
                            var F = s._wrapperState.wasMultiple;
                            s._wrapperState.wasMultiple = !!u.multiple;
                            var X = u.value;
                            X != null ? Zn(s, !!u.multiple, X, !1) : F !== !!u.multiple && (u.defaultValue != null ? Zn(s, !!u.multiple, u.defaultValue, !0) : Zn(s, !!u.multiple, u.multiple ? [] : "", !1))
                        }
                        s[so] = u
                    } catch (te) {
                        ze(e, e.return, te)
                    }
            }
            break;
        case 6:
            if (Nt(t, e),
            jt(e),
            o & 4) {
                if (e.stateNode === null)
                    throw Error(l(162));
                s = e.stateNode,
                u = e.memoizedProps;
                try {
                    s.nodeValue = u
                } catch (te) {
                    ze(e, e.return, te)
                }
            }
            break;
        case 3:
            if (Nt(t, e),
            jt(e),
            o & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Gr(t.containerInfo)
                } catch (te) {
                    ze(e, e.return, te)
                }
            break;
        case 4:
            Nt(t, e),
            jt(e);
            break;
        case 13:
            Nt(t, e),
            jt(e),
            s = e.child,
            s.flags & 8192 && (u = s.memoizedState !== null,
            s.stateNode.isHidden = u,
            !u || s.alternate !== null && s.alternate.memoizedState !== null || (Qs = je())),
            o & 4 && jf(e);
            break;
        case 22:
            if (W = n !== null && n.memoizedState !== null,
            e.mode & 1 ? (et = (b = et) || W,
            Nt(t, e),
            et = b) : Nt(t, e),
            jt(e),
            o & 8192) {
                if (b = e.memoizedState !== null,
                (e.stateNode.isHidden = b) && !W && (e.mode & 1) !== 0)
                    for (G = e,
                    W = e.child; W !== null; ) {
                        for (B = G = W; G !== null; ) {
                            switch (F = G,
                            X = F.child,
                            F.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                wo(4, F, F.return);
                                break;
                            case 1:
                                yr(F, F.return);
                                var q = F.stateNode;
                                if (typeof q.componentWillUnmount == "function") {
                                    o = F,
                                    n = F.return;
                                    try {
                                        t = o,
                                        q.props = t.memoizedProps,
                                        q.state = t.memoizedState,
                                        q.componentWillUnmount()
                                    } catch (te) {
                                        ze(o, n, te)
                                    }
                                }
                                break;
                            case 5:
                                yr(F, F.return);
                                break;
                            case 22:
                                if (F.memoizedState !== null) {
                                    Bf(B);
                                    continue
                                }
                            }
                            X !== null ? (X.return = F,
                            G = X) : Bf(B)
                        }
                        W = W.sibling
                    }
                e: for (W = null,
                B = e; ; ) {
                    if (B.tag === 5) {
                        if (W === null) {
                            W = B;
                            try {
                                s = B.stateNode,
                                b ? (u = s.style,
                                typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (x = B.stateNode,
                                E = B.memoizedProps.style,
                                m = E != null && E.hasOwnProperty("display") ? E.display : null,
                                x.style.display = wu("display", m))
                            } catch (te) {
                                ze(e, e.return, te)
                            }
                        }
                    } else if (B.tag === 6) {
                        if (W === null)
                            try {
                                B.stateNode.nodeValue = b ? "" : B.memoizedProps
                            } catch (te) {
                                ze(e, e.return, te)
                            }
                    } else if ((B.tag !== 22 && B.tag !== 23 || B.memoizedState === null || B === e) && B.child !== null) {
                        B.child.return = B,
                        B = B.child;
                        continue
                    }
                    if (B === e)
                        break e;
                    for (; B.sibling === null; ) {
                        if (B.return === null || B.return === e)
                            break e;
                        W === B && (W = null),
                        B = B.return
                    }
                    W === B && (W = null),
                    B.sibling.return = B.return,
                    B = B.sibling
                }
            }
            break;
        case 19:
            Nt(t, e),
            jt(e),
            o & 4 && jf(e);
            break;
        case 21:
            break;
        default:
            Nt(t, e),
            jt(e)
        }
    }
    function jt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null; ) {
                        if (Mf(n)) {
                            var o = n;
                            break e
                        }
                        n = n.return
                    }
                    throw Error(l(160))
                }
                switch (o.tag) {
                case 5:
                    var s = o.stateNode;
                    o.flags & 32 && (Fr(s, ""),
                    o.flags &= -33);
                    var u = Df(e);
                    Hs(e, u, s);
                    break;
                case 3:
                case 4:
                    var m = o.stateNode.containerInfo
                      , x = Df(e);
                    $s(e, x, m);
                    break;
                default:
                    throw Error(l(161))
                }
            } catch (E) {
                ze(e, e.return, E)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function yv(e, t, n) {
        G = e,
        Wf(e)
    }
    function Wf(e, t, n) {
        for (var o = (e.mode & 1) !== 0; G !== null; ) {
            var s = G
              , u = s.child;
            if (s.tag === 22 && o) {
                var m = s.memoizedState !== null || Rl;
                if (!m) {
                    var x = s.alternate
                      , E = x !== null && x.memoizedState !== null || et;
                    x = Rl;
                    var b = et;
                    if (Rl = m,
                    (et = E) && !b)
                        for (G = s; G !== null; )
                            m = G,
                            E = m.child,
                            m.tag === 22 && m.memoizedState !== null ? Uf(s) : E !== null ? (E.return = m,
                            G = E) : Uf(s);
                    for (; u !== null; )
                        G = u,
                        Wf(u),
                        u = u.sibling;
                    G = s,
                    Rl = x,
                    et = b
                }
                Vf(e)
            } else
                (s.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = s,
                G = u) : Vf(e)
        }
    }
    function Vf(e) {
        for (; G !== null; ) {
            var t = G;
            if ((t.flags & 8772) !== 0) {
                var n = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            et || _l(5, t);
                            break;
                        case 1:
                            var o = t.stateNode;
                            if (t.flags & 4 && !et)
                                if (n === null)
                                    o.componentDidMount();
                                else {
                                    var s = t.elementType === t.type ? n.memoizedProps : _t(t.type, n.memoizedProps);
                                    o.componentDidUpdate(s, n.memoizedState, o.__reactInternalSnapshotBeforeUpdate)
                                }
                            var u = t.updateQueue;
                            u !== null && Vc(t, u, o);
                            break;
                        case 3:
                            var m = t.updateQueue;
                            if (m !== null) {
                                if (n = null,
                                t.child !== null)
                                    switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1:
                                        n = t.child.stateNode
                                    }
                                Vc(t, m, n)
                            }
                            break;
                        case 5:
                            var x = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = x;
                                var E = t.memoizedProps;
                                switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    E.autoFocus && n.focus();
                                    break;
                                case "img":
                                    E.src && (n.src = E.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var b = t.alternate;
                                if (b !== null) {
                                    var W = b.memoizedState;
                                    if (W !== null) {
                                        var B = W.dehydrated;
                                        B !== null && Gr(B)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(l(163))
                        }
                    et || t.flags & 512 && Us(t)
                } catch (F) {
                    ze(t, t.return, F)
                }
            }
            if (t === e) {
                G = null;
                break
            }
            if (n = t.sibling,
            n !== null) {
                n.return = t.return,
                G = n;
                break
            }
            G = t.return
        }
    }
    function Bf(e) {
        for (; G !== null; ) {
            var t = G;
            if (t === e) {
                G = null;
                break
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return,
                G = n;
                break
            }
            G = t.return
        }
    }
    function Uf(e) {
        for (; G !== null; ) {
            var t = G;
            try {
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        _l(4, t)
                    } catch (E) {
                        ze(t, n, E)
                    }
                    break;
                case 1:
                    var o = t.stateNode;
                    if (typeof o.componentDidMount == "function") {
                        var s = t.return;
                        try {
                            o.componentDidMount()
                        } catch (E) {
                            ze(t, s, E)
                        }
                    }
                    var u = t.return;
                    try {
                        Us(t)
                    } catch (E) {
                        ze(t, u, E)
                    }
                    break;
                case 5:
                    var m = t.return;
                    try {
                        Us(t)
                    } catch (E) {
                        ze(t, m, E)
                    }
                }
            } catch (E) {
                ze(t, t.return, E)
            }
            if (t === e) {
                G = null;
                break
            }
            var x = t.sibling;
            if (x !== null) {
                x.return = t.return,
                G = x;
                break
            }
            G = t.return
        }
    }
    var wv = Math.ceil
      , Tl = z.ReactCurrentDispatcher
      , Ks = z.ReactCurrentOwner
      , xt = z.ReactCurrentBatchConfig
      , Pe = 0
      , Ke = null
      , We = null
      , Xe = 0
      , mt = 0
      , wr = pn(0)
      , Ue = 0
      , So = null
      , $n = 0
      , Nl = 0
      , Ys = 0
      , xo = null
      , at = null
      , Qs = 0
      , Sr = 1 / 0
      , Zt = null
      , Al = !1
      , Xs = null
      , wn = null
      , Ol = !1
      , Sn = null
      , Il = 0
      , Co = 0
      , Gs = null
      , bl = -1
      , Ll = 0;
    function rt() {
        return (Pe & 6) !== 0 ? je() : bl !== -1 ? bl : bl = je()
    }
    function xn(e) {
        return (e.mode & 1) === 0 ? 1 : (Pe & 2) !== 0 && Xe !== 0 ? Xe & -Xe : nv.transition !== null ? (Ll === 0 && (Ll = Mu()),
        Ll) : (e = Te,
        e !== 0 || (e = window.event,
        e = e === void 0 ? 16 : $u(e.type)),
        e)
    }
    function At(e, t, n, o) {
        if (50 < Co)
            throw Co = 0,
            Gs = null,
            Error(l(185));
        Hr(e, n, o),
        ((Pe & 2) === 0 || e !== Ke) && (e === Ke && ((Pe & 2) === 0 && (Nl |= n),
        Ue === 4 && Cn(e, Xe)),
        ut(e, o),
        n === 1 && Pe === 0 && (t.mode & 1) === 0 && (Sr = je() + 500,
        al && hn()))
    }
    function ut(e, t) {
        var n = e.callbackNode;
        nh(e, t);
        var o = Uo(e, e === Ke ? Xe : 0);
        if (o === 0)
            n !== null && Iu(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
        else if (t = o & -o,
        e.callbackPriority !== t) {
            if (n != null && Iu(n),
            t === 1)
                e.tag === 0 ? tv(Hf.bind(null, e)) : Nc(Hf.bind(null, e)),
                Zh(function() {
                    (Pe & 6) === 0 && hn()
                }),
                n = null;
            else {
                switch (Du(o)) {
                case 1:
                    n = Ni;
                    break;
                case 4:
                    n = bu;
                    break;
                case 16:
                    n = Fo;
                    break;
                case 536870912:
                    n = Lu;
                    break;
                default:
                    n = Fo
                }
                n = Jf(n, $f.bind(null, e))
            }
            e.callbackPriority = t,
            e.callbackNode = n
        }
    }
    function $f(e, t) {
        if (bl = -1,
        Ll = 0,
        (Pe & 6) !== 0)
            throw Error(l(327));
        var n = e.callbackNode;
        if (xr() && e.callbackNode !== n)
            return null;
        var o = Uo(e, e === Ke ? Xe : 0);
        if (o === 0)
            return null;
        if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t)
            t = Ml(e, o);
        else {
            t = o;
            var s = Pe;
            Pe |= 2;
            var u = Yf();
            (Ke !== e || Xe !== t) && (Zt = null,
            Sr = je() + 500,
            Kn(e, t));
            do
                try {
                    Cv();
                    break
                } catch (x) {
                    Kf(e, x)
                }
            while (!0);
            ms(),
            Tl.current = u,
            Pe = s,
            We !== null ? t = 0 : (Ke = null,
            Xe = 0,
            t = Ue)
        }
        if (t !== 0) {
            if (t === 2 && (s = Ai(e),
            s !== 0 && (o = s,
            t = Zs(e, s))),
            t === 1)
                throw n = So,
                Kn(e, 0),
                Cn(e, o),
                ut(e, je()),
                n;
            if (t === 6)
                Cn(e, o);
            else {
                if (s = e.current.alternate,
                (o & 30) === 0 && !Sv(s) && (t = Ml(e, o),
                t === 2 && (u = Ai(e),
                u !== 0 && (o = u,
                t = Zs(e, u))),
                t === 1))
                    throw n = So,
                    Kn(e, 0),
                    Cn(e, o),
                    ut(e, je()),
                    n;
                switch (e.finishedWork = s,
                e.finishedLanes = o,
                t) {
                case 0:
                case 1:
                    throw Error(l(345));
                case 2:
                    Yn(e, at, Zt);
                    break;
                case 3:
                    if (Cn(e, o),
                    (o & 130023424) === o && (t = Qs + 500 - je(),
                    10 < t)) {
                        if (Uo(e, 0) !== 0)
                            break;
                        if (s = e.suspendedLanes,
                        (s & o) !== o) {
                            rt(),
                            e.pingedLanes |= e.suspendedLanes & s;
                            break
                        }
                        e.timeoutHandle = rs(Yn.bind(null, e, at, Zt), t);
                        break
                    }
                    Yn(e, at, Zt);
                    break;
                case 4:
                    if (Cn(e, o),
                    (o & 4194240) === o)
                        break;
                    for (t = e.eventTimes,
                    s = -1; 0 < o; ) {
                        var m = 31 - Pt(o);
                        u = 1 << m,
                        m = t[m],
                        m > s && (s = m),
                        o &= ~u
                    }
                    if (o = s,
                    o = je() - o,
                    o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * wv(o / 1960)) - o,
                    10 < o) {
                        e.timeoutHandle = rs(Yn.bind(null, e, at, Zt), o);
                        break
                    }
                    Yn(e, at, Zt);
                    break;
                case 5:
                    Yn(e, at, Zt);
                    break;
                default:
                    throw Error(l(329))
                }
            }
        }
        return ut(e, je()),
        e.callbackNode === n ? $f.bind(null, e) : null
    }
    function Zs(e, t) {
        var n = xo;
        return e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256),
        e = Ml(e, t),
        e !== 2 && (t = at,
        at = n,
        t !== null && qs(t)),
        e
    }
    function qs(e) {
        at === null ? at = e : at.push.apply(at, e)
    }
    function Sv(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores,
                n !== null))
                    for (var o = 0; o < n.length; o++) {
                        var s = n[o]
                          , u = s.getSnapshot;
                        s = s.value;
                        try {
                            if (!kt(u(), s))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
                n.return = t,
                t = n;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Cn(e, t) {
        for (t &= ~Ys,
        t &= ~Nl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t; ) {
            var n = 31 - Pt(t)
              , o = 1 << n;
            e[n] = -1,
            t &= ~o
        }
    }
    function Hf(e) {
        if ((Pe & 6) !== 0)
            throw Error(l(327));
        xr();
        var t = Uo(e, 0);
        if ((t & 1) === 0)
            return ut(e, je()),
            null;
        var n = Ml(e, t);
        if (e.tag !== 0 && n === 2) {
            var o = Ai(e);
            o !== 0 && (t = o,
            n = Zs(e, o))
        }
        if (n === 1)
            throw n = So,
            Kn(e, 0),
            Cn(e, t),
            ut(e, je()),
            n;
        if (n === 6)
            throw Error(l(345));
        return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        Yn(e, at, Zt),
        ut(e, je()),
        null
    }
    function Js(e, t) {
        var n = Pe;
        Pe |= 1;
        try {
            return e(t)
        } finally {
            Pe = n,
            Pe === 0 && (Sr = je() + 500,
            al && hn())
        }
    }
    function Hn(e) {
        Sn !== null && Sn.tag === 0 && (Pe & 6) === 0 && xr();
        var t = Pe;
        Pe |= 1;
        var n = xt.transition
          , o = Te;
        try {
            if (xt.transition = null,
            Te = 1,
            e)
                return e()
        } finally {
            Te = o,
            xt.transition = n,
            Pe = t,
            (Pe & 6) === 0 && hn()
        }
    }
    function ea() {
        mt = wr.current,
        Ie(wr)
    }
    function Kn(e, t) {
        e.finishedWork = null,
        e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1,
        Gh(n)),
        We !== null)
            for (n = We.return; n !== null; ) {
                var o = n;
                switch (us(o),
                o.tag) {
                case 1:
                    o = o.type.childContextTypes,
                    o != null && il();
                    break;
                case 3:
                    vr(),
                    Ie(lt),
                    Ie(Ze),
                    Cs();
                    break;
                case 5:
                    Ss(o);
                    break;
                case 4:
                    vr();
                    break;
                case 13:
                    Ie(Me);
                    break;
                case 19:
                    Ie(Me);
                    break;
                case 10:
                    hs(o.type._context);
                    break;
                case 22:
                case 23:
                    ea()
                }
                n = n.return
            }
        if (Ke = e,
        We = e = En(e.current, null),
        Xe = mt = t,
        Ue = 0,
        So = null,
        Ys = Nl = $n = 0,
        at = xo = null,
        Vn !== null) {
            for (t = 0; t < Vn.length; t++)
                if (n = Vn[t],
                o = n.interleaved,
                o !== null) {
                    n.interleaved = null;
                    var s = o.next
                      , u = n.pending;
                    if (u !== null) {
                        var m = u.next;
                        u.next = s,
                        o.next = m
                    }
                    n.pending = o
                }
            Vn = null
        }
        return e
    }
    function Kf(e, t) {
        do {
            var n = We;
            try {
                if (ms(),
                yl.current = Cl,
                wl) {
                    for (var o = De.memoizedState; o !== null; ) {
                        var s = o.queue;
                        s !== null && (s.pending = null),
                        o = o.next
                    }
                    wl = !1
                }
                if (Un = 0,
                He = Be = De = null,
                mo = !1,
                ho = 0,
                Ks.current = null,
                n === null || n.return === null) {
                    Ue = 1,
                    So = t,
                    We = null;
                    break
                }
                e: {
                    var u = e
                      , m = n.return
                      , x = n
                      , E = t;
                    if (t = Xe,
                    x.flags |= 32768,
                    E !== null && typeof E == "object" && typeof E.then == "function") {
                        var b = E
                          , W = x
                          , B = W.tag;
                        if ((W.mode & 1) === 0 && (B === 0 || B === 11 || B === 15)) {
                            var F = W.alternate;
                            F ? (W.updateQueue = F.updateQueue,
                            W.memoizedState = F.memoizedState,
                            W.lanes = F.lanes) : (W.updateQueue = null,
                            W.memoizedState = null)
                        }
                        var X = gf(m);
                        if (X !== null) {
                            X.flags &= -257,
                            yf(X, m, x, u, t),
                            X.mode & 1 && vf(u, b, t),
                            t = X,
                            E = b;
                            var q = t.updateQueue;
                            if (q === null) {
                                var te = new Set;
                                te.add(E),
                                t.updateQueue = te
                            } else
                                q.add(E);
                            break e
                        } else {
                            if ((t & 1) === 0) {
                                vf(u, b, t),
                                ta();
                                break e
                            }
                            E = Error(l(426))
                        }
                    } else if (Le && x.mode & 1) {
                        var Fe = gf(m);
                        if (Fe !== null) {
                            (Fe.flags & 65536) === 0 && (Fe.flags |= 256),
                            yf(Fe, m, x, u, t),
                            ds(gr(E, x));
                            break e
                        }
                    }
                    u = E = gr(E, x),
                    Ue !== 4 && (Ue = 2),
                    xo === null ? xo = [u] : xo.push(u),
                    u = m;
                    do {
                        switch (u.tag) {
                        case 3:
                            u.flags |= 65536,
                            t &= -t,
                            u.lanes |= t;
                            var A = mf(u, E, t);
                            Wc(u, A);
                            break e;
                        case 1:
                            x = E;
                            var R = u.type
                              , I = u.stateNode;
                            if ((u.flags & 128) === 0 && (typeof R.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (wn === null || !wn.has(I)))) {
                                u.flags |= 65536,
                                t &= -t,
                                u.lanes |= t;
                                var U = hf(u, x, t);
                                Wc(u, U);
                                break e
                            }
                        }
                        u = u.return
                    } while (u !== null)
                }
                Xf(n)
            } catch (ne) {
                t = ne,
                We === n && n !== null && (We = n = n.return);
                continue
            }
            break
        } while (!0)
    }
    function Yf() {
        var e = Tl.current;
        return Tl.current = Cl,
        e === null ? Cl : e
    }
    function ta() {
        (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4),
        Ke === null || ($n & 268435455) === 0 && (Nl & 268435455) === 0 || Cn(Ke, Xe)
    }
    function Ml(e, t) {
        var n = Pe;
        Pe |= 2;
        var o = Yf();
        (Ke !== e || Xe !== t) && (Zt = null,
        Kn(e, t));
        do
            try {
                xv();
                break
            } catch (s) {
                Kf(e, s)
            }
        while (!0);
        if (ms(),
        Pe = n,
        Tl.current = o,
        We !== null)
            throw Error(l(261));
        return Ke = null,
        Xe = 0,
        Ue
    }
    function xv() {
        for (; We !== null; )
            Qf(We)
    }
    function Cv() {
        for (; We !== null && !Ym(); )
            Qf(We)
    }
    function Qf(e) {
        var t = qf(e.alternate, e, mt);
        e.memoizedProps = e.pendingProps,
        t === null ? Xf(e) : We = t,
        Ks.current = null
    }
    function Xf(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return,
            (t.flags & 32768) === 0) {
                if (n = mv(n, t, mt),
                n !== null) {
                    We = n;
                    return
                }
            } else {
                if (n = hv(n, t),
                n !== null) {
                    n.flags &= 32767,
                    We = n;
                    return
                }
                if (e !== null)
                    e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
                else {
                    Ue = 6,
                    We = null;
                    return
                }
            }
            if (t = t.sibling,
            t !== null) {
                We = t;
                return
            }
            We = t = e
        } while (t !== null);
        Ue === 0 && (Ue = 5)
    }
    function Yn(e, t, n) {
        var o = Te
          , s = xt.transition;
        try {
            xt.transition = null,
            Te = 1,
            Ev(e, t, n, o)
        } finally {
            xt.transition = s,
            Te = o
        }
        return null
    }
    function Ev(e, t, n, o) {
        do
            xr();
        while (Sn !== null);
        if ((Pe & 6) !== 0)
            throw Error(l(327));
        n = e.finishedWork;
        var s = e.finishedLanes;
        if (n === null)
            return null;
        if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
            throw Error(l(177));
        e.callbackNode = null,
        e.callbackPriority = 0;
        var u = n.lanes | n.childLanes;
        if (rh(e, u),
        e === Ke && (We = Ke = null,
        Xe = 0),
        (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Ol || (Ol = !0,
        Jf(Fo, function() {
            return xr(),
            null
        })),
        u = (n.flags & 15990) !== 0,
        (n.subtreeFlags & 15990) !== 0 || u) {
            u = xt.transition,
            xt.transition = null;
            var m = Te;
            Te = 1;
            var x = Pe;
            Pe |= 4,
            Ks.current = null,
            gv(e, n),
            Ff(n, e),
            Uh(ts),
            Ko = !!es,
            ts = es = null,
            e.current = n,
            yv(n),
            Qm(),
            Pe = x,
            Te = m,
            xt.transition = u
        } else
            e.current = n;
        if (Ol && (Ol = !1,
        Sn = e,
        Il = s),
        u = e.pendingLanes,
        u === 0 && (wn = null),
        Zm(n.stateNode),
        ut(e, je()),
        t !== null)
            for (o = e.onRecoverableError,
            n = 0; n < t.length; n++)
                s = t[n],
                o(s.value, {
                    componentStack: s.stack,
                    digest: s.digest
                });
        if (Al)
            throw Al = !1,
            e = Xs,
            Xs = null,
            e;
        return (Il & 1) !== 0 && e.tag !== 0 && xr(),
        u = e.pendingLanes,
        (u & 1) !== 0 ? e === Gs ? Co++ : (Co = 0,
        Gs = e) : Co = 0,
        hn(),
        null
    }
    function xr() {
        if (Sn !== null) {
            var e = Du(Il)
              , t = xt.transition
              , n = Te;
            try {
                if (xt.transition = null,
                Te = 16 > e ? 16 : e,
                Sn === null)
                    var o = !1;
                else {
                    if (e = Sn,
                    Sn = null,
                    Il = 0,
                    (Pe & 6) !== 0)
                        throw Error(l(331));
                    var s = Pe;
                    for (Pe |= 4,
                    G = e.current; G !== null; ) {
                        var u = G
                          , m = u.child;
                        if ((G.flags & 16) !== 0) {
                            var x = u.deletions;
                            if (x !== null) {
                                for (var E = 0; E < x.length; E++) {
                                    var b = x[E];
                                    for (G = b; G !== null; ) {
                                        var W = G;
                                        switch (W.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            wo(8, W, u)
                                        }
                                        var B = W.child;
                                        if (B !== null)
                                            B.return = W,
                                            G = B;
                                        else
                                            for (; G !== null; ) {
                                                W = G;
                                                var F = W.sibling
                                                  , X = W.return;
                                                if (Lf(W),
                                                W === b) {
                                                    G = null;
                                                    break
                                                }
                                                if (F !== null) {
                                                    F.return = X,
                                                    G = F;
                                                    break
                                                }
                                                G = X
                                            }
                                    }
                                }
                                var q = u.alternate;
                                if (q !== null) {
                                    var te = q.child;
                                    if (te !== null) {
                                        q.child = null;
                                        do {
                                            var Fe = te.sibling;
                                            te.sibling = null,
                                            te = Fe
                                        } while (te !== null)
                                    }
                                }
                                G = u
                            }
                        }
                        if ((u.subtreeFlags & 2064) !== 0 && m !== null)
                            m.return = u,
                            G = m;
                        else
                            e: for (; G !== null; ) {
                                if (u = G,
                                (u.flags & 2048) !== 0)
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        wo(9, u, u.return)
                                    }
                                var A = u.sibling;
                                if (A !== null) {
                                    A.return = u.return,
                                    G = A;
                                    break e
                                }
                                G = u.return
                            }
                    }
                    var R = e.current;
                    for (G = R; G !== null; ) {
                        m = G;
                        var I = m.child;
                        if ((m.subtreeFlags & 2064) !== 0 && I !== null)
                            I.return = m,
                            G = I;
                        else
                            e: for (m = R; G !== null; ) {
                                if (x = G,
                                (x.flags & 2048) !== 0)
                                    try {
                                        switch (x.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            _l(9, x)
                                        }
                                    } catch (ne) {
                                        ze(x, x.return, ne)
                                    }
                                if (x === m) {
                                    G = null;
                                    break e
                                }
                                var U = x.sibling;
                                if (U !== null) {
                                    U.return = x.return,
                                    G = U;
                                    break e
                                }
                                G = x.return
                            }
                    }
                    if (Pe = s,
                    hn(),
                    Lt && typeof Lt.onPostCommitFiberRoot == "function")
                        try {
                            Lt.onPostCommitFiberRoot(Wo, e)
                        } catch {}
                    o = !0
                }
                return o
            } finally {
                Te = n,
                xt.transition = t
            }
        }
        return !1
    }
    function Gf(e, t, n) {
        t = gr(n, t),
        t = mf(e, t, 1),
        e = gn(e, t, 1),
        t = rt(),
        e !== null && (Hr(e, 1, t),
        ut(e, t))
    }
    function ze(e, t, n) {
        if (e.tag === 3)
            Gf(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Gf(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var o = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (wn === null || !wn.has(o))) {
                        e = gr(n, e),
                        e = hf(t, e, 1),
                        t = gn(t, e, 1),
                        e = rt(),
                        t !== null && (Hr(t, 1, e),
                        ut(t, e));
                        break
                    }
                }
                t = t.return
            }
    }
    function Pv(e, t, n) {
        var o = e.pingCache;
        o !== null && o.delete(t),
        t = rt(),
        e.pingedLanes |= e.suspendedLanes & n,
        Ke === e && (Xe & n) === n && (Ue === 4 || Ue === 3 && (Xe & 130023424) === Xe && 500 > je() - Qs ? Kn(e, 0) : Ys |= n),
        ut(e, t)
    }
    function Zf(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Bo,
        Bo <<= 1,
        (Bo & 130023424) === 0 && (Bo = 4194304)));
        var n = rt();
        e = Qt(e, t),
        e !== null && (Hr(e, t, n),
        ut(e, n))
    }
    function kv(e) {
        var t = e.memoizedState
          , n = 0;
        t !== null && (n = t.retryLane),
        Zf(e, n)
    }
    function Rv(e, t) {
        var n = 0;
        switch (e.tag) {
        case 13:
            var o = e.stateNode
              , s = e.memoizedState;
            s !== null && (n = s.retryLane);
            break;
        case 19:
            o = e.stateNode;
            break;
        default:
            throw Error(l(314))
        }
        o !== null && o.delete(t),
        Zf(e, n)
    }
    var qf;
    qf = function(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || lt.current)
                st = !0;
            else {
                if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
                    return st = !1,
                    pv(e, t, n);
                st = (e.flags & 131072) !== 0
            }
        else
            st = !1,
            Le && (t.flags & 1048576) !== 0 && Ac(t, cl, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 2:
            var o = t.type;
            kl(e, t),
            e = t.pendingProps;
            var s = ur(t, Ze.current);
            hr(t, n),
            s = ks(null, t, o, e, s, n);
            var u = Rs();
            return t.flags |= 1,
            typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1,
            t.memoizedState = null,
            t.updateQueue = null,
            it(o) ? (u = !0,
            sl(t)) : u = !1,
            t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
            ys(t),
            s.updater = El,
            t.stateNode = s,
            s._reactInternals = t,
            Is(t, o, e, n),
            t = Ds(null, t, o, !0, u, n)) : (t.tag = 0,
            Le && u && as(t),
            nt(null, t, s, n),
            t = t.child),
            t;
        case 16:
            o = t.elementType;
            e: {
                switch (kl(e, t),
                e = t.pendingProps,
                s = o._init,
                o = s(o._payload),
                t.type = o,
                s = t.tag = Tv(o),
                e = _t(o, e),
                s) {
                case 0:
                    t = Ms(null, t, o, e, n);
                    break e;
                case 1:
                    t = Pf(null, t, o, e, n);
                    break e;
                case 11:
                    t = wf(null, t, o, e, n);
                    break e;
                case 14:
                    t = Sf(null, t, o, _t(o.type, e), n);
                    break e
                }
                throw Error(l(306, o, ""))
            }
            return t;
        case 0:
            return o = t.type,
            s = t.pendingProps,
            s = t.elementType === o ? s : _t(o, s),
            Ms(e, t, o, s, n);
        case 1:
            return o = t.type,
            s = t.pendingProps,
            s = t.elementType === o ? s : _t(o, s),
            Pf(e, t, o, s, n);
        case 3:
            e: {
                if (kf(t),
                e === null)
                    throw Error(l(387));
                o = t.pendingProps,
                u = t.memoizedState,
                s = u.element,
                Fc(e, t),
                vl(t, o, null, n);
                var m = t.memoizedState;
                if (o = m.element,
                u.isDehydrated)
                    if (u = {
                        element: o,
                        isDehydrated: !1,
                        cache: m.cache,
                        pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
                        transitions: m.transitions
                    },
                    t.updateQueue.baseState = u,
                    t.memoizedState = u,
                    t.flags & 256) {
                        s = gr(Error(l(423)), t),
                        t = Rf(e, t, o, n, s);
                        break e
                    } else if (o !== s) {
                        s = gr(Error(l(424)), t),
                        t = Rf(e, t, o, n, s);
                        break e
                    } else
                        for (pt = dn(t.stateNode.containerInfo.firstChild),
                        dt = t,
                        Le = !0,
                        Rt = null,
                        n = zc(t, null, o, n),
                        t.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling;
                else {
                    if (dr(),
                    o === s) {
                        t = Gt(e, t, n);
                        break e
                    }
                    nt(e, t, o, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Bc(t),
            e === null && fs(t),
            o = t.type,
            s = t.pendingProps,
            u = e !== null ? e.memoizedProps : null,
            m = s.children,
            ns(o, s) ? m = null : u !== null && ns(o, u) && (t.flags |= 32),
            Ef(e, t),
            nt(e, t, m, n),
            t.child;
        case 6:
            return e === null && fs(t),
            null;
        case 13:
            return _f(e, t, n);
        case 4:
            return ws(t, t.stateNode.containerInfo),
            o = t.pendingProps,
            e === null ? t.child = pr(t, null, o, n) : nt(e, t, o, n),
            t.child;
        case 11:
            return o = t.type,
            s = t.pendingProps,
            s = t.elementType === o ? s : _t(o, s),
            wf(e, t, o, s, n);
        case 7:
            return nt(e, t, t.pendingProps, n),
            t.child;
        case 8:
            return nt(e, t, t.pendingProps.children, n),
            t.child;
        case 12:
            return nt(e, t, t.pendingProps.children, n),
            t.child;
        case 10:
            e: {
                if (o = t.type._context,
                s = t.pendingProps,
                u = t.memoizedProps,
                m = s.value,
                Ae(pl, o._currentValue),
                o._currentValue = m,
                u !== null)
                    if (kt(u.value, m)) {
                        if (u.children === s.children && !lt.current) {
                            t = Gt(e, t, n);
                            break e
                        }
                    } else
                        for (u = t.child,
                        u !== null && (u.return = t); u !== null; ) {
                            var x = u.dependencies;
                            if (x !== null) {
                                m = u.child;
                                for (var E = x.firstContext; E !== null; ) {
                                    if (E.context === o) {
                                        if (u.tag === 1) {
                                            E = Xt(-1, n & -n),
                                            E.tag = 2;
                                            var b = u.updateQueue;
                                            if (b !== null) {
                                                b = b.shared;
                                                var W = b.pending;
                                                W === null ? E.next = E : (E.next = W.next,
                                                W.next = E),
                                                b.pending = E
                                            }
                                        }
                                        u.lanes |= n,
                                        E = u.alternate,
                                        E !== null && (E.lanes |= n),
                                        vs(u.return, n, t),
                                        x.lanes |= n;
                                        break
                                    }
                                    E = E.next
                                }
                            } else if (u.tag === 10)
                                m = u.type === t.type ? null : u.child;
                            else if (u.tag === 18) {
                                if (m = u.return,
                                m === null)
                                    throw Error(l(341));
                                m.lanes |= n,
                                x = m.alternate,
                                x !== null && (x.lanes |= n),
                                vs(m, n, t),
                                m = u.sibling
                            } else
                                m = u.child;
                            if (m !== null)
                                m.return = u;
                            else
                                for (m = u; m !== null; ) {
                                    if (m === t) {
                                        m = null;
                                        break
                                    }
                                    if (u = m.sibling,
                                    u !== null) {
                                        u.return = m.return,
                                        m = u;
                                        break
                                    }
                                    m = m.return
                                }
                            u = m
                        }
                nt(e, t, s.children, n),
                t = t.child
            }
            return t;
        case 9:
            return s = t.type,
            o = t.pendingProps.children,
            hr(t, n),
            s = wt(s),
            o = o(s),
            t.flags |= 1,
            nt(e, t, o, n),
            t.child;
        case 14:
            return o = t.type,
            s = _t(o, t.pendingProps),
            s = _t(o.type, s),
            Sf(e, t, o, s, n);
        case 15:
            return xf(e, t, t.type, t.pendingProps, n);
        case 17:
            return o = t.type,
            s = t.pendingProps,
            s = t.elementType === o ? s : _t(o, s),
            kl(e, t),
            t.tag = 1,
            it(o) ? (e = !0,
            sl(t)) : e = !1,
            hr(t, n),
            df(t, o, s),
            Is(t, o, s, n),
            Ds(null, t, o, !0, e, n);
        case 19:
            return Nf(e, t, n);
        case 22:
            return Cf(e, t, n)
        }
        throw Error(l(156, t.tag))
    }
    ;
    function Jf(e, t) {
        return Ou(e, t)
    }
    function _v(e, t, n, o) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = o,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Ct(e, t, n, o) {
        return new _v(e,t,n,o)
    }
    function na(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Tv(e) {
        if (typeof e == "function")
            return na(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof,
            e === ee)
                return 11;
            if (e === xe)
                return 14
        }
        return 2
    }
    function En(e, t) {
        var n = e.alternate;
        return n === null ? (n = Ct(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.type = e.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = e.flags & 14680064,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
    }
    function Dl(e, t, n, o, s, u) {
        var m = 2;
        if (o = e,
        typeof e == "function")
            na(e) && (m = 1);
        else if (typeof e == "string")
            m = 5;
        else
            e: switch (e) {
            case $:
                return Qn(n.children, s, u, t);
            case J:
                m = 8,
                s |= 8;
                break;
            case Z:
                return e = Ct(12, n, t, s | 2),
                e.elementType = Z,
                e.lanes = u,
                e;
            case de:
                return e = Ct(13, n, t, s),
                e.elementType = de,
                e.lanes = u,
                e;
            case ue:
                return e = Ct(19, n, t, s),
                e.elementType = ue,
                e.lanes = u,
                e;
            case oe:
                return zl(n, s, u, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case re:
                        m = 10;
                        break e;
                    case me:
                        m = 9;
                        break e;
                    case ee:
                        m = 11;
                        break e;
                    case xe:
                        m = 14;
                        break e;
                    case ie:
                        m = 16,
                        o = null;
                        break e
                    }
                throw Error(l(130, e == null ? e : typeof e, ""))
            }
        return t = Ct(m, n, t, s),
        t.elementType = e,
        t.type = o,
        t.lanes = u,
        t
    }
    function Qn(e, t, n, o) {
        return e = Ct(7, e, o, t),
        e.lanes = n,
        e
    }
    function zl(e, t, n, o) {
        return e = Ct(22, e, o, t),
        e.elementType = oe,
        e.lanes = n,
        e.stateNode = {
            isHidden: !1
        },
        e
    }
    function ra(e, t, n) {
        return e = Ct(6, e, null, t),
        e.lanes = n,
        e
    }
    function oa(e, t, n) {
        return t = Ct(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    function Nv(e, t, n, o, s) {
        this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Oi(0),
        this.expirationTimes = Oi(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Oi(0),
        this.identifierPrefix = o,
        this.onRecoverableError = s,
        this.mutableSourceEagerHydrationData = null
    }
    function la(e, t, n, o, s, u, m, x, E) {
        return e = new Nv(e,t,n,x,E),
        t === 1 ? (t = 1,
        u === !0 && (t |= 8)) : t = 0,
        u = Ct(3, null, null, t),
        e.current = u,
        u.stateNode = e,
        u.memoizedState = {
            element: o,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        ys(u),
        e
    }
    function Av(e, t, n) {
        var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Y,
            key: o == null ? null : "" + o,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }
    function ed(e) {
        if (!e)
            return mn;
        e = e._reactInternals;
        e: {
            if (Dn(e) !== e || e.tag !== 1)
                throw Error(l(170));
            var t = e;
            do {
                switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (it(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                t = t.return
            } while (t !== null);
            throw Error(l(171))
        }
        if (e.tag === 1) {
            var n = e.type;
            if (it(n))
                return _c(e, n, t)
        }
        return t
    }
    function td(e, t, n, o, s, u, m, x, E) {
        return e = la(n, o, !0, e, s, u, m, x, E),
        e.context = ed(null),
        n = e.current,
        o = rt(),
        s = xn(n),
        u = Xt(o, s),
        u.callback = t ?? null,
        gn(n, u, s),
        e.current.lanes = s,
        Hr(e, s, o),
        ut(e, o),
        e
    }
    function jl(e, t, n, o) {
        var s = t.current
          , u = rt()
          , m = xn(s);
        return n = ed(n),
        t.context === null ? t.context = n : t.pendingContext = n,
        t = Xt(u, m),
        t.payload = {
            element: e
        },
        o = o === void 0 ? null : o,
        o !== null && (t.callback = o),
        e = gn(s, t, m),
        e !== null && (At(e, s, m, u),
        hl(e, s, m)),
        m
    }
    function Fl(e) {
        if (e = e.current,
        !e.child)
            return null;
        switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
        }
    }
    function nd(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }
    function ia(e, t) {
        nd(e, t),
        (e = e.alternate) && nd(e, t)
    }
    function Ov() {
        return null
    }
    var rd = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    }
    ;
    function sa(e) {
        this._internalRoot = e
    }
    Wl.prototype.render = sa.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(l(409));
        jl(e, t, null, null)
    }
    ,
    Wl.prototype.unmount = sa.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Hn(function() {
                jl(null, e, null, null)
            }),
            t[$t] = null
        }
    }
    ;
    function Wl(e) {
        this._internalRoot = e
    }
    Wl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Fu();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++)
                ;
            un.splice(n, 0, e),
            n === 0 && Bu(e)
        }
    }
    ;
    function aa(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function Vl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }
    function od() {}
    function Iv(e, t, n, o, s) {
        if (s) {
            if (typeof o == "function") {
                var u = o;
                o = function() {
                    var b = Fl(m);
                    u.call(b)
                }
            }
            var m = td(t, o, e, 0, null, !1, !1, "", od);
            return e._reactRootContainer = m,
            e[$t] = m.current,
            lo(e.nodeType === 8 ? e.parentNode : e),
            Hn(),
            m
        }
        for (; s = e.lastChild; )
            e.removeChild(s);
        if (typeof o == "function") {
            var x = o;
            o = function() {
                var b = Fl(E);
                x.call(b)
            }
        }
        var E = la(e, 0, !1, null, null, !1, !1, "", od);
        return e._reactRootContainer = E,
        e[$t] = E.current,
        lo(e.nodeType === 8 ? e.parentNode : e),
        Hn(function() {
            jl(t, E, n, o)
        }),
        E
    }
    function Bl(e, t, n, o, s) {
        var u = n._reactRootContainer;
        if (u) {
            var m = u;
            if (typeof s == "function") {
                var x = s;
                s = function() {
                    var E = Fl(m);
                    x.call(E)
                }
            }
            jl(t, m, e, s)
        } else
            m = Iv(n, t, e, s, o);
        return Fl(m)
    }
    zu = function(e) {
        switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = $r(t.pendingLanes);
                n !== 0 && (Ii(t, n | 1),
                ut(t, je()),
                (Pe & 6) === 0 && (Sr = je() + 500,
                hn()))
            }
            break;
        case 13:
            Hn(function() {
                var o = Qt(e, 1);
                if (o !== null) {
                    var s = rt();
                    At(o, e, 1, s)
                }
            }),
            ia(e, 1)
        }
    }
    ,
    bi = function(e) {
        if (e.tag === 13) {
            var t = Qt(e, 134217728);
            if (t !== null) {
                var n = rt();
                At(t, e, 134217728, n)
            }
            ia(e, 134217728)
        }
    }
    ,
    ju = function(e) {
        if (e.tag === 13) {
            var t = xn(e)
              , n = Qt(e, t);
            if (n !== null) {
                var o = rt();
                At(n, e, t, o)
            }
            ia(e, t)
        }
    }
    ,
    Fu = function() {
        return Te
    }
    ,
    Wu = function(e, t) {
        var n = Te;
        try {
            return Te = e,
            t()
        } finally {
            Te = n
        }
    }
    ,
    ki = function(e, t, n) {
        switch (t) {
        case "input":
            if (Ut(e, n),
            t = n.name,
            n.type === "radio" && t != null) {
                for (n = e; n.parentNode; )
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0; t < n.length; t++) {
                    var o = n[t];
                    if (o !== e && o.form === e.form) {
                        var s = ll(o);
                        if (!s)
                            throw Error(l(90));
                        _e(o),
                        Ut(o, s)
                    }
                }
            }
            break;
        case "textarea":
            hu(e, n);
            break;
        case "select":
            t = n.value,
            t != null && Zn(e, !!n.multiple, t, !1)
        }
    }
    ,
    Pu = Js,
    ku = Hn;
    var bv = {
        usingClientEntryPoint: !1,
        Events: [ao, sr, ll, Cu, Eu, Js]
    }
      , Eo = {
        findFiberByHostInstance: zn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , Lv = {
        bundleType: Eo.bundleType,
        version: Eo.version,
        rendererPackageName: Eo.rendererPackageName,
        rendererConfig: Eo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: z.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Nu(e),
            e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Eo.findFiberByHostInstance || Ov,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ul.isDisabled && Ul.supportsFiber)
            try {
                Wo = Ul.inject(Lv),
                Lt = Ul
            } catch {}
    }
    return ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bv,
    ct.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!aa(t))
            throw Error(l(200));
        return Av(e, t, null, n)
    }
    ,
    ct.createRoot = function(e, t) {
        if (!aa(e))
            throw Error(l(299));
        var n = !1
          , o = ""
          , s = rd;
        return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
        t = la(e, 1, !1, null, null, n, !1, o, s),
        e[$t] = t.current,
        lo(e.nodeType === 8 ? e.parentNode : e),
        new sa(t)
    }
    ,
    ct.findDOMNode = function(e) {
        if (e == null)
            return null;
        if (e.nodeType === 1)
            return e;
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","),
            Error(l(268, e)));
        return e = Nu(t),
        e = e === null ? null : e.stateNode,
        e
    }
    ,
    ct.flushSync = function(e) {
        return Hn(e)
    }
    ,
    ct.hydrate = function(e, t, n) {
        if (!Vl(t))
            throw Error(l(200));
        return Bl(null, e, t, !0, n)
    }
    ,
    ct.hydrateRoot = function(e, t, n) {
        if (!aa(e))
            throw Error(l(405));
        var o = n != null && n.hydratedSources || null
          , s = !1
          , u = ""
          , m = rd;
        if (n != null && (n.unstable_strictMode === !0 && (s = !0),
        n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (m = n.onRecoverableError)),
        t = td(t, null, e, 1, n ?? null, s, !1, u, m),
        e[$t] = t.current,
        lo(e),
        o)
            for (e = 0; e < o.length; e++)
                n = o[e],
                s = n._getVersion,
                s = s(n._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(n, s);
        return new Wl(t)
    }
    ,
    ct.render = function(e, t, n) {
        if (!Vl(t))
            throw Error(l(200));
        return Bl(null, e, t, !1, n)
    }
    ,
    ct.unmountComponentAtNode = function(e) {
        if (!Vl(e))
            throw Error(l(40));
        return e._reactRootContainer ? (Hn(function() {
            Bl(null, null, e, !1, function() {
                e._reactRootContainer = null,
                e[$t] = null
            })
        }),
        !0) : !1
    }
    ,
    ct.unstable_batchedUpdates = Js,
    ct.unstable_renderSubtreeIntoContainer = function(e, t, n, o) {
        if (!Vl(n))
            throw Error(l(200));
        if (e == null || e._reactInternals === void 0)
            throw Error(l(38));
        return Bl(e, t, n, !1, o)
    }
    ,
    ct.version = "18.3.1-next-f1338f8080-20240426",
    ct
}
var dd;
function $v() {
    if (dd)
        return fa.exports;
    dd = 1;
    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
            } catch (i) {
                console.error(i)
            }
    }
    return r(),
    fa.exports = Uv(),
    fa.exports
}
var Ao = $v();
const Hv = jd(Ao);
function Fd(r) {
    var i, l, a = "";
    if (typeof r == "string" || typeof r == "number")
        a += r;
    else if (typeof r == "object")
        if (Array.isArray(r)) {
            var c = r.length;
            for (i = 0; i < c; i++)
                r[i] && (l = Fd(r[i])) && (a && (a += " "),
                a += l)
        } else
            for (l in r)
                r[l] && (a && (a += " "),
                a += l);
    return a
}
function tS() {
    for (var r, i, l = 0, a = "", c = arguments.length; l < c; l++)
        (r = arguments[l]) && (i = Fd(r)) && (a && (a += " "),
        a += i);
    return a
}
const Wa = "-"
  , Kv = r => {
    const i = Qv(r)
      , {conflictingClassGroups: l, conflictingClassGroupModifiers: a} = r;
    return {
        getClassGroupId: p => {
            const d = p.split(Wa);
            return d[0] === "" && d.length !== 1 && d.shift(),
            Wd(d, i) || Yv(p)
        }
        ,
        getConflictingClassGroupIds: (p, d) => {
            const h = l[p] || [];
            return d && a[p] ? [...h, ...a[p]] : h
        }
    }
}
  , Wd = (r, i) => {
    var p;
    if (r.length === 0)
        return i.classGroupId;
    const l = r[0]
      , a = i.nextPart.get(l)
      , c = a ? Wd(r.slice(1), a) : void 0;
    if (c)
        return c;
    if (i.validators.length === 0)
        return;
    const f = r.join(Wa);
    return (p = i.validators.find( ({validator: d}) => d(f))) == null ? void 0 : p.classGroupId
}
  , pd = /^\[(.+)\]$/
  , Yv = r => {
    if (pd.test(r)) {
        const i = pd.exec(r)[1]
          , l = i == null ? void 0 : i.substring(0, i.indexOf(":"));
        if (l)
            return "arbitrary.." + l
    }
}
  , Qv = r => {
    const {theme: i, prefix: l} = r
      , a = {
        nextPart: new Map,
        validators: []
    };
    return Gv(Object.entries(r.classGroups), l).forEach( ([f,p]) => {
        Pa(p, a, f, i)
    }
    ),
    a
}
  , Pa = (r, i, l, a) => {
    r.forEach(c => {
        if (typeof c == "string") {
            const f = c === "" ? i : md(i, c);
            f.classGroupId = l;
            return
        }
        if (typeof c == "function") {
            if (Xv(c)) {
                Pa(c(a), i, l, a);
                return
            }
            i.validators.push({
                validator: c,
                classGroupId: l
            });
            return
        }
        Object.entries(c).forEach( ([f,p]) => {
            Pa(p, md(i, f), l, a)
        }
        )
    }
    )
}
  , md = (r, i) => {
    let l = r;
    return i.split(Wa).forEach(a => {
        l.nextPart.has(a) || l.nextPart.set(a, {
            nextPart: new Map,
            validators: []
        }),
        l = l.nextPart.get(a)
    }
    ),
    l
}
  , Xv = r => r.isThemeGetter
  , Gv = (r, i) => i ? r.map( ([l,a]) => {
    const c = a.map(f => typeof f == "string" ? i + f : typeof f == "object" ? Object.fromEntries(Object.entries(f).map( ([p,d]) => [i + p, d])) : f);
    return [l, c]
}
) : r
  , Zv = r => {
    if (r < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let i = 0
      , l = new Map
      , a = new Map;
    const c = (f, p) => {
        l.set(f, p),
        i++,
        i > r && (i = 0,
        a = l,
        l = new Map)
    }
    ;
    return {
        get(f) {
            let p = l.get(f);
            if (p !== void 0)
                return p;
            if ((p = a.get(f)) !== void 0)
                return c(f, p),
                p
        },
        set(f, p) {
            l.has(f) ? l.set(f, p) : c(f, p)
        }
    }
}
  , Vd = "!"
  , qv = r => {
    const {separator: i, experimentalParseClassName: l} = r
      , a = i.length === 1
      , c = i[0]
      , f = i.length
      , p = d => {
        const h = [];
        let v = 0, y = 0, w;
        for (let k = 0; k < d.length; k++) {
            let O = d[k];
            if (v === 0) {
                if (O === c && (a || d.slice(k, k + f) === i)) {
                    h.push(d.slice(y, k)),
                    y = k + f;
                    continue
                }
                if (O === "/") {
                    w = k;
                    continue
                }
            }
            O === "[" ? v++ : O === "]" && v--
        }
        const C = h.length === 0 ? d : d.substring(y)
          , P = C.startsWith(Vd)
          , T = P ? C.substring(1) : C
          , S = w && w > y ? w - y : void 0;
        return {
            modifiers: h,
            hasImportantModifier: P,
            baseClassName: T,
            maybePostfixModifierPosition: S
        }
    }
    ;
    return l ? d => l({
        className: d,
        parseClassName: p
    }) : p
}
  , Jv = r => {
    if (r.length <= 1)
        return r;
    const i = [];
    let l = [];
    return r.forEach(a => {
        a[0] === "[" ? (i.push(...l.sort(), a),
        l = []) : l.push(a)
    }
    ),
    i.push(...l.sort()),
    i
}
  , eg = r => ({
    cache: Zv(r.cacheSize),
    parseClassName: qv(r),
    ...Kv(r)
})
  , tg = /\s+/
  , ng = (r, i) => {
    const {parseClassName: l, getClassGroupId: a, getConflictingClassGroupIds: c} = i
      , f = []
      , p = r.trim().split(tg);
    let d = "";
    for (let h = p.length - 1; h >= 0; h -= 1) {
        const v = p[h]
          , {modifiers: y, hasImportantModifier: w, baseClassName: C, maybePostfixModifierPosition: P} = l(v);
        let T = !!P
          , S = a(T ? C.substring(0, P) : C);
        if (!S) {
            if (!T) {
                d = v + (d.length > 0 ? " " + d : d);
                continue
            }
            if (S = a(C),
            !S) {
                d = v + (d.length > 0 ? " " + d : d);
                continue
            }
            T = !1
        }
        const k = Jv(y).join(":")
          , O = w ? k + Vd : k
          , N = O + S;
        if (f.includes(N))
            continue;
        f.push(N);
        const M = c(S, T);
        for (let z = 0; z < M.length; ++z) {
            const V = M[z];
            f.push(O + V)
        }
        d = v + (d.length > 0 ? " " + d : d)
    }
    return d
}
;
function rg() {
    let r = 0, i, l, a = "";
    for (; r < arguments.length; )
        (i = arguments[r++]) && (l = Bd(i)) && (a && (a += " "),
        a += l);
    return a
}
const Bd = r => {
    if (typeof r == "string")
        return r;
    let i, l = "";
    for (let a = 0; a < r.length; a++)
        r[a] && (i = Bd(r[a])) && (l && (l += " "),
        l += i);
    return l
}
;
function og(r, ...i) {
    let l, a, c, f = p;
    function p(h) {
        const v = i.reduce( (y, w) => w(y), r());
        return l = eg(v),
        a = l.cache.get,
        c = l.cache.set,
        f = d,
        d(h)
    }
    function d(h) {
        const v = a(h);
        if (v)
            return v;
        const y = ng(h, l);
        return c(h, y),
        y
    }
    return function() {
        return f(rg.apply(null, arguments))
    }
}
const be = r => {
    const i = l => l[r] || [];
    return i.isThemeGetter = !0,
    i
}
  , Ud = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , lg = /^\d+\/\d+$/
  , ig = new Set(["px", "full", "screen"])
  , sg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , ag = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , ug = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , cg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , fg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , qt = r => kr(r) || ig.has(r) || lg.test(r)
  , kn = r => br(r, "length", wg)
  , kr = r => !!r && !Number.isNaN(Number(r))
  , ma = r => br(r, "number", kr)
  , ko = r => !!r && Number.isInteger(Number(r))
  , dg = r => r.endsWith("%") && kr(r.slice(0, -1))
  , ve = r => Ud.test(r)
  , Rn = r => sg.test(r)
  , pg = new Set(["length", "size", "percentage"])
  , mg = r => br(r, pg, $d)
  , hg = r => br(r, "position", $d)
  , vg = new Set(["image", "url"])
  , gg = r => br(r, vg, xg)
  , yg = r => br(r, "", Sg)
  , Ro = () => !0
  , br = (r, i, l) => {
    const a = Ud.exec(r);
    return a ? a[1] ? typeof i == "string" ? a[1] === i : i.has(a[1]) : l(a[2]) : !1
}
  , wg = r => ag.test(r) && !ug.test(r)
  , $d = () => !1
  , Sg = r => cg.test(r)
  , xg = r => fg.test(r)
  , Cg = () => {
    const r = be("colors")
      , i = be("spacing")
      , l = be("blur")
      , a = be("brightness")
      , c = be("borderColor")
      , f = be("borderRadius")
      , p = be("borderSpacing")
      , d = be("borderWidth")
      , h = be("contrast")
      , v = be("grayscale")
      , y = be("hueRotate")
      , w = be("invert")
      , C = be("gap")
      , P = be("gradientColorStops")
      , T = be("gradientColorStopPositions")
      , S = be("inset")
      , k = be("margin")
      , O = be("opacity")
      , N = be("padding")
      , M = be("saturate")
      , z = be("scale")
      , V = be("sepia")
      , Y = be("skew")
      , $ = be("space")
      , J = be("translate")
      , Z = () => ["auto", "contain", "none"]
      , re = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , me = () => ["auto", ve, i]
      , ee = () => [ve, i]
      , de = () => ["", qt, kn]
      , ue = () => ["auto", kr, ve]
      , xe = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , ie = () => ["solid", "dashed", "dotted", "double", "none"]
      , oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , D = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , K = () => ["", "0", ve]
      , H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , _ = () => [kr, ve];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Ro],
            spacing: [qt, kn],
            blur: ["none", "", Rn, ve],
            brightness: _(),
            borderColor: [r],
            borderRadius: ["none", "", "full", Rn, ve],
            borderSpacing: ee(),
            borderWidth: de(),
            contrast: _(),
            grayscale: K(),
            hueRotate: _(),
            invert: K(),
            gap: ee(),
            gradientColorStops: [r],
            gradientColorStopPositions: [dg, kn],
            inset: me(),
            margin: me(),
            opacity: _(),
            padding: ee(),
            saturate: _(),
            scale: _(),
            sepia: K(),
            skew: _(),
            space: ee(),
            translate: ee()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", ve]
            }],
            container: ["container"],
            columns: [{
                columns: [Rn]
            }],
            "break-after": [{
                "break-after": H()
            }],
            "break-before": [{
                "break-before": H()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...xe(), ve]
            }],
            overflow: [{
                overflow: re()
            }],
            "overflow-x": [{
                "overflow-x": re()
            }],
            "overflow-y": [{
                "overflow-y": re()
            }],
            overscroll: [{
                overscroll: Z()
            }],
            "overscroll-x": [{
                "overscroll-x": Z()
            }],
            "overscroll-y": [{
                "overscroll-y": Z()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [S]
            }],
            "inset-x": [{
                "inset-x": [S]
            }],
            "inset-y": [{
                "inset-y": [S]
            }],
            start: [{
                start: [S]
            }],
            end: [{
                end: [S]
            }],
            top: [{
                top: [S]
            }],
            right: [{
                right: [S]
            }],
            bottom: [{
                bottom: [S]
            }],
            left: [{
                left: [S]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", ko, ve]
            }],
            basis: [{
                basis: me()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", ve]
            }],
            grow: [{
                grow: K()
            }],
            shrink: [{
                shrink: K()
            }],
            order: [{
                order: ["first", "last", "none", ko, ve]
            }],
            "grid-cols": [{
                "grid-cols": [Ro]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", ko, ve]
                }, ve]
            }],
            "col-start": [{
                "col-start": ue()
            }],
            "col-end": [{
                "col-end": ue()
            }],
            "grid-rows": [{
                "grid-rows": [Ro]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [ko, ve]
                }, ve]
            }],
            "row-start": [{
                "row-start": ue()
            }],
            "row-end": [{
                "row-end": ue()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", ve]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", ve]
            }],
            gap: [{
                gap: [C]
            }],
            "gap-x": [{
                "gap-x": [C]
            }],
            "gap-y": [{
                "gap-y": [C]
            }],
            "justify-content": [{
                justify: ["normal", ...D()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...D(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...D(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [N]
            }],
            px: [{
                px: [N]
            }],
            py: [{
                py: [N]
            }],
            ps: [{
                ps: [N]
            }],
            pe: [{
                pe: [N]
            }],
            pt: [{
                pt: [N]
            }],
            pr: [{
                pr: [N]
            }],
            pb: [{
                pb: [N]
            }],
            pl: [{
                pl: [N]
            }],
            m: [{
                m: [k]
            }],
            mx: [{
                mx: [k]
            }],
            my: [{
                my: [k]
            }],
            ms: [{
                ms: [k]
            }],
            me: [{
                me: [k]
            }],
            mt: [{
                mt: [k]
            }],
            mr: [{
                mr: [k]
            }],
            mb: [{
                mb: [k]
            }],
            ml: [{
                ml: [k]
            }],
            "space-x": [{
                "space-x": [$]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [$]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ve, i]
            }],
            "min-w": [{
                "min-w": [ve, i, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [ve, i, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Rn]
                }, Rn]
            }],
            h: [{
                h: [ve, i, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [ve, i, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [ve, i, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [ve, i, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Rn, kn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ma]
            }],
            "font-family": [{
                font: [Ro]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ve]
            }],
            "line-clamp": [{
                "line-clamp": ["none", kr, ma]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", qt, ve]
            }],
            "list-image": [{
                "list-image": ["none", ve]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", ve]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [r]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [O]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [r]
            }],
            "text-opacity": [{
                "text-opacity": [O]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...ie(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", qt, kn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", qt, ve]
            }],
            "text-decoration-color": [{
                decoration: [r]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: ee()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ve]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", ve]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [O]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...xe(), hg]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", mg]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, gg]
            }],
            "bg-color": [{
                bg: [r]
            }],
            "gradient-from-pos": [{
                from: [T]
            }],
            "gradient-via-pos": [{
                via: [T]
            }],
            "gradient-to-pos": [{
                to: [T]
            }],
            "gradient-from": [{
                from: [P]
            }],
            "gradient-via": [{
                via: [P]
            }],
            "gradient-to": [{
                to: [P]
            }],
            rounded: [{
                rounded: [f]
            }],
            "rounded-s": [{
                "rounded-s": [f]
            }],
            "rounded-e": [{
                "rounded-e": [f]
            }],
            "rounded-t": [{
                "rounded-t": [f]
            }],
            "rounded-r": [{
                "rounded-r": [f]
            }],
            "rounded-b": [{
                "rounded-b": [f]
            }],
            "rounded-l": [{
                "rounded-l": [f]
            }],
            "rounded-ss": [{
                "rounded-ss": [f]
            }],
            "rounded-se": [{
                "rounded-se": [f]
            }],
            "rounded-ee": [{
                "rounded-ee": [f]
            }],
            "rounded-es": [{
                "rounded-es": [f]
            }],
            "rounded-tl": [{
                "rounded-tl": [f]
            }],
            "rounded-tr": [{
                "rounded-tr": [f]
            }],
            "rounded-br": [{
                "rounded-br": [f]
            }],
            "rounded-bl": [{
                "rounded-bl": [f]
            }],
            "border-w": [{
                border: [d]
            }],
            "border-w-x": [{
                "border-x": [d]
            }],
            "border-w-y": [{
                "border-y": [d]
            }],
            "border-w-s": [{
                "border-s": [d]
            }],
            "border-w-e": [{
                "border-e": [d]
            }],
            "border-w-t": [{
                "border-t": [d]
            }],
            "border-w-r": [{
                "border-r": [d]
            }],
            "border-w-b": [{
                "border-b": [d]
            }],
            "border-w-l": [{
                "border-l": [d]
            }],
            "border-opacity": [{
                "border-opacity": [O]
            }],
            "border-style": [{
                border: [...ie(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [d]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [d]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [O]
            }],
            "divide-style": [{
                divide: ie()
            }],
            "border-color": [{
                border: [c]
            }],
            "border-color-x": [{
                "border-x": [c]
            }],
            "border-color-y": [{
                "border-y": [c]
            }],
            "border-color-s": [{
                "border-s": [c]
            }],
            "border-color-e": [{
                "border-e": [c]
            }],
            "border-color-t": [{
                "border-t": [c]
            }],
            "border-color-r": [{
                "border-r": [c]
            }],
            "border-color-b": [{
                "border-b": [c]
            }],
            "border-color-l": [{
                "border-l": [c]
            }],
            "divide-color": [{
                divide: [c]
            }],
            "outline-style": [{
                outline: ["", ...ie()]
            }],
            "outline-offset": [{
                "outline-offset": [qt, ve]
            }],
            "outline-w": [{
                outline: [qt, kn]
            }],
            "outline-color": [{
                outline: [r]
            }],
            "ring-w": [{
                ring: de()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [r]
            }],
            "ring-opacity": [{
                "ring-opacity": [O]
            }],
            "ring-offset-w": [{
                "ring-offset": [qt, kn]
            }],
            "ring-offset-color": [{
                "ring-offset": [r]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Rn, yg]
            }],
            "shadow-color": [{
                shadow: [Ro]
            }],
            opacity: [{
                opacity: [O]
            }],
            "mix-blend": [{
                "mix-blend": [...oe(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": oe()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [l]
            }],
            brightness: [{
                brightness: [a]
            }],
            contrast: [{
                contrast: [h]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Rn, ve]
            }],
            grayscale: [{
                grayscale: [v]
            }],
            "hue-rotate": [{
                "hue-rotate": [y]
            }],
            invert: [{
                invert: [w]
            }],
            saturate: [{
                saturate: [M]
            }],
            sepia: [{
                sepia: [V]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [l]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [a]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [h]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [v]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [y]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [w]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [O]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [M]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [V]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [p]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [p]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [p]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ve]
            }],
            duration: [{
                duration: _()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", ve]
            }],
            delay: [{
                delay: _()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", ve]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [z]
            }],
            "scale-x": [{
                "scale-x": [z]
            }],
            "scale-y": [{
                "scale-y": [z]
            }],
            rotate: [{
                rotate: [ko, ve]
            }],
            "translate-x": [{
                "translate-x": [J]
            }],
            "translate-y": [{
                "translate-y": [J]
            }],
            "skew-x": [{
                "skew-x": [Y]
            }],
            "skew-y": [{
                "skew-y": [Y]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ve]
            }],
            accent: [{
                accent: ["auto", r]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ve]
            }],
            "caret-color": [{
                caret: [r]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": ee()
            }],
            "scroll-mx": [{
                "scroll-mx": ee()
            }],
            "scroll-my": [{
                "scroll-my": ee()
            }],
            "scroll-ms": [{
                "scroll-ms": ee()
            }],
            "scroll-me": [{
                "scroll-me": ee()
            }],
            "scroll-mt": [{
                "scroll-mt": ee()
            }],
            "scroll-mr": [{
                "scroll-mr": ee()
            }],
            "scroll-mb": [{
                "scroll-mb": ee()
            }],
            "scroll-ml": [{
                "scroll-ml": ee()
            }],
            "scroll-p": [{
                "scroll-p": ee()
            }],
            "scroll-px": [{
                "scroll-px": ee()
            }],
            "scroll-py": [{
                "scroll-py": ee()
            }],
            "scroll-ps": [{
                "scroll-ps": ee()
            }],
            "scroll-pe": [{
                "scroll-pe": ee()
            }],
            "scroll-pt": [{
                "scroll-pt": ee()
            }],
            "scroll-pr": [{
                "scroll-pr": ee()
            }],
            "scroll-pb": [{
                "scroll-pb": ee()
            }],
            "scroll-pl": [{
                "scroll-pl": ee()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", ve]
            }],
            fill: [{
                fill: [r, "none"]
            }],
            "stroke-w": [{
                stroke: [qt, kn, ma]
            }],
            stroke: [{
                stroke: [r, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , nS = og(Cg);
function Eg(r, i) {
    typeof r == "function" ? r(i) : r != null && (r.current = i)
}
function Hd(...r) {
    return i => r.forEach(l => Eg(l, i))
}
function Ne(...r) {
    return g.useCallback(Hd(...r), r)
}
var Tr = g.forwardRef( (r, i) => {
    const {children: l, ...a} = r
      , c = g.Children.toArray(l)
      , f = c.find(kg);
    if (f) {
        const p = f.props.children
          , d = c.map(h => h === f ? g.Children.count(p) > 1 ? g.Children.only(null) : g.isValidElement(p) ? p.props.children : null : h);
        return L.jsx(ka, {
            ...a,
            ref: i,
            children: g.isValidElement(p) ? g.cloneElement(p, void 0, d) : null
        })
    }
    return L.jsx(ka, {
        ...a,
        ref: i,
        children: l
    })
}
);
Tr.displayName = "Slot";
var ka = g.forwardRef( (r, i) => {
    const {children: l, ...a} = r;
    if (g.isValidElement(l)) {
        const c = _g(l);
        return g.cloneElement(l, {
            ...Rg(a, l.props),
            ref: i ? Hd(i, c) : c
        })
    }
    return g.Children.count(l) > 1 ? g.Children.only(null) : null
}
);
ka.displayName = "SlotClone";
var Pg = ({children: r}) => L.jsx(L.Fragment, {
    children: r
});
function kg(r) {
    return g.isValidElement(r) && r.type === Pg
}
function Rg(r, i) {
    const l = {
        ...i
    };
    for (const a in i) {
        const c = r[a]
          , f = i[a];
        /^on[A-Z]/.test(a) ? c && f ? l[a] = (...d) => {
            f(...d),
            c(...d)
        }
        : c && (l[a] = c) : a === "style" ? l[a] = {
            ...c,
            ...f
        } : a === "className" && (l[a] = [c, f].filter(Boolean).join(" "))
    }
    return {
        ...r,
        ...l
    }
}
function _g(r) {
    var a, c;
    let i = (a = Object.getOwnPropertyDescriptor(r.props, "ref")) == null ? void 0 : a.get
      , l = i && "isReactWarning"in i && i.isReactWarning;
    return l ? r.ref : (i = (c = Object.getOwnPropertyDescriptor(r, "ref")) == null ? void 0 : c.get,
    l = i && "isReactWarning"in i && i.isReactWarning,
    l ? r.props.ref : r.props.ref || r.ref)
}
function Kd(r) {
    var i, l, a = "";
    if (typeof r == "string" || typeof r == "number")
        a += r;
    else if (typeof r == "object")
        if (Array.isArray(r))
            for (i = 0; i < r.length; i++)
                r[i] && (l = Kd(r[i])) && (a && (a += " "),
                a += l);
        else
            for (i in r)
                r[i] && (a && (a += " "),
                a += i);
    return a
}
function Tg() {
    for (var r, i, l = 0, a = ""; l < arguments.length; )
        (r = arguments[l++]) && (i = Kd(r)) && (a && (a += " "),
        a += i);
    return a
}
const hd = r => typeof r == "boolean" ? "".concat(r) : r === 0 ? "0" : r
  , vd = Tg
  , rS = (r, i) => l => {
    var a;
    if ((i == null ? void 0 : i.variants) == null)
        return vd(r, l == null ? void 0 : l.class, l == null ? void 0 : l.className);
    const {variants: c, defaultVariants: f} = i
      , p = Object.keys(c).map(v => {
        const y = l == null ? void 0 : l[v]
          , w = f == null ? void 0 : f[v];
        if (y === null)
            return null;
        const C = hd(y) || hd(w);
        return c[v][C]
    }
    )
      , d = l && Object.entries(l).reduce( (v, y) => {
        let[w,C] = y;
        return C === void 0 || (v[w] = C),
        v
    }
    , {})
      , h = i == null || (a = i.compoundVariants) === null || a === void 0 ? void 0 : a.reduce( (v, y) => {
        let {class: w, className: C, ...P} = y;
        return Object.entries(P).every(T => {
            let[S,k] = T;
            return Array.isArray(k) ? k.includes({
                ...f,
                ...d
            }[S]) : {
                ...f,
                ...d
            }[S] === k
        }
        ) ? [...v, w, C] : v
    }
    , []);
    return vd(r, p, h, l == null ? void 0 : l.class, l == null ? void 0 : l.className)
}
;
function Ra(r, [i,l]) {
    return Math.min(l, Math.max(i, r))
}
function Ce(r, i, {checkForDefaultPrevented: l=!0}={}) {
    return function(c) {
        if (r == null || r(c),
        l === !1 || !c.defaultPrevented)
            return i == null ? void 0 : i(c)
    }
}
function Ng(r, i=[]) {
    let l = [];
    function a(f, p) {
        const d = g.createContext(p)
          , h = l.length;
        l = [...l, p];
        function v(w) {
            const {scope: C, children: P, ...T} = w
              , S = (C == null ? void 0 : C[r][h]) || d
              , k = g.useMemo( () => T, Object.values(T));
            return L.jsx(S.Provider, {
                value: k,
                children: P
            })
        }
        function y(w, C) {
            const P = (C == null ? void 0 : C[r][h]) || d
              , T = g.useContext(P);
            if (T)
                return T;
            if (p !== void 0)
                return p;
            throw new Error(`\`${w}\` must be used within \`${f}\``)
        }
        return v.displayName = f + "Provider",
        [v, y]
    }
    const c = () => {
        const f = l.map(p => g.createContext(p));
        return function(d) {
            const h = (d == null ? void 0 : d[r]) || f;
            return g.useMemo( () => ({
                [`__scope${r}`]: {
                    ...d,
                    [r]: h
                }
            }), [d, h])
        }
    }
    ;
    return c.scopeName = r,
    [a, Ag(c, ...i)]
}
function Ag(...r) {
    const i = r[0];
    if (r.length === 1)
        return i;
    const l = () => {
        const a = r.map(c => ({
            useScope: c(),
            scopeName: c.scopeName
        }));
        return function(f) {
            const p = a.reduce( (d, {useScope: h, scopeName: v}) => {
                const w = h(f)[`__scope${v}`];
                return {
                    ...d,
                    ...w
                }
            }
            , {});
            return g.useMemo( () => ({
                [`__scope${i.scopeName}`]: p
            }), [p])
        }
    }
    ;
    return l.scopeName = i.scopeName,
    l
}
function Yd(r) {
    const i = r + "CollectionProvider"
      , [l,a] = Ng(i)
      , [c,f] = l(i, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , p = P => {
        const {scope: T, children: S} = P
          , k = Ve.useRef(null)
          , O = Ve.useRef(new Map).current;
        return L.jsx(c, {
            scope: T,
            itemMap: O,
            collectionRef: k,
            children: S
        })
    }
    ;
    p.displayName = i;
    const d = r + "CollectionSlot"
      , h = Ve.forwardRef( (P, T) => {
        const {scope: S, children: k} = P
          , O = f(d, S)
          , N = Ne(T, O.collectionRef);
        return L.jsx(Tr, {
            ref: N,
            children: k
        })
    }
    );
    h.displayName = d;
    const v = r + "CollectionItemSlot"
      , y = "data-radix-collection-item"
      , w = Ve.forwardRef( (P, T) => {
        const {scope: S, children: k, ...O} = P
          , N = Ve.useRef(null)
          , M = Ne(T, N)
          , z = f(v, S);
        return Ve.useEffect( () => (z.itemMap.set(N, {
            ref: N,
            ...O
        }),
        () => void z.itemMap.delete(N))),
        L.jsx(Tr, {
            [y]: "",
            ref: M,
            children: k
        })
    }
    );
    w.displayName = v;
    function C(P) {
        const T = f(r + "CollectionConsumer", P);
        return Ve.useCallback( () => {
            const k = T.collectionRef.current;
            if (!k)
                return [];
            const O = Array.from(k.querySelectorAll(`[${y}]`));
            return Array.from(T.itemMap.values()).sort( (z, V) => O.indexOf(z.ref.current) - O.indexOf(V.ref.current))
        }
        , [T.collectionRef, T.itemMap])
    }
    return [{
        Provider: p,
        Slot: h,
        ItemSlot: w
    }, C, a]
}
function Oo(r, i=[]) {
    let l = [];
    function a(f, p) {
        const d = g.createContext(p)
          , h = l.length;
        l = [...l, p];
        const v = w => {
            var O;
            const {scope: C, children: P, ...T} = w
              , S = ((O = C == null ? void 0 : C[r]) == null ? void 0 : O[h]) || d
              , k = g.useMemo( () => T, Object.values(T));
            return L.jsx(S.Provider, {
                value: k,
                children: P
            })
        }
        ;
        v.displayName = f + "Provider";
        function y(w, C) {
            var S;
            const P = ((S = C == null ? void 0 : C[r]) == null ? void 0 : S[h]) || d
              , T = g.useContext(P);
            if (T)
                return T;
            if (p !== void 0)
                return p;
            throw new Error(`\`${w}\` must be used within \`${f}\``)
        }
        return [v, y]
    }
    const c = () => {
        const f = l.map(p => g.createContext(p));
        return function(d) {
            const h = (d == null ? void 0 : d[r]) || f;
            return g.useMemo( () => ({
                [`__scope${r}`]: {
                    ...d,
                    [r]: h
                }
            }), [d, h])
        }
    }
    ;
    return c.scopeName = r,
    [a, Og(c, ...i)]
}
function Og(...r) {
    const i = r[0];
    if (r.length === 1)
        return i;
    const l = () => {
        const a = r.map(c => ({
            useScope: c(),
            scopeName: c.scopeName
        }));
        return function(f) {
            const p = a.reduce( (d, {useScope: h, scopeName: v}) => {
                const w = h(f)[`__scope${v}`];
                return {
                    ...d,
                    ...w
                }
            }
            , {});
            return g.useMemo( () => ({
                [`__scope${i.scopeName}`]: p
            }), [p])
        }
    }
    ;
    return l.scopeName = i.scopeName,
    l
}
var Ig = g.createContext(void 0);
function Va(r) {
    const i = g.useContext(Ig);
    return r || i || "ltr"
}
var bg = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , Re = bg.reduce( (r, i) => {
    const l = g.forwardRef( (a, c) => {
        const {asChild: f, ...p} = a
          , d = f ? Tr : i;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        L.jsx(d, {
            ...p,
            ref: c
        })
    }
    );
    return l.displayName = `Primitive.${i}`,
    {
        ...r,
        [i]: l
    }
}
, {});
function Lg(r, i) {
    r && Ao.flushSync( () => r.dispatchEvent(i))
}
function tt(r) {
    const i = g.useRef(r);
    return g.useEffect( () => {
        i.current = r
    }
    ),
    g.useMemo( () => (...l) => {
        var a;
        return (a = i.current) == null ? void 0 : a.call(i, ...l)
    }
    , [])
}
function Mg(r, i=globalThis == null ? void 0 : globalThis.document) {
    const l = tt(r);
    g.useEffect( () => {
        const a = c => {
            c.key === "Escape" && l(c)
        }
        ;
        return i.addEventListener("keydown", a, {
            capture: !0
        }),
        () => i.removeEventListener("keydown", a, {
            capture: !0
        })
    }
    , [l, i])
}
var Dg = "DismissableLayer", _a = "dismissableLayer.update", zg = "dismissableLayer.pointerDownOutside", jg = "dismissableLayer.focusOutside", gd, Qd = g.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Ba = g.forwardRef( (r, i) => {
    const {disableOutsidePointerEvents: l=!1, onEscapeKeyDown: a, onPointerDownOutside: c, onFocusOutside: f, onInteractOutside: p, onDismiss: d, ...h} = r
      , v = g.useContext(Qd)
      , [y,w] = g.useState(null)
      , C = (y == null ? void 0 : y.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,P] = g.useState({})
      , T = Ne(i, $ => w($))
      , S = Array.from(v.layers)
      , [k] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1)
      , O = S.indexOf(k)
      , N = y ? S.indexOf(y) : -1
      , M = v.layersWithOutsidePointerEventsDisabled.size > 0
      , z = N >= O
      , V = Vg($ => {
        const J = $.target
          , Z = [...v.branches].some(re => re.contains(J));
        !z || Z || (c == null || c($),
        p == null || p($),
        $.defaultPrevented || d == null || d())
    }
    , C)
      , Y = Bg($ => {
        const J = $.target;
        [...v.branches].some(re => re.contains(J)) || (f == null || f($),
        p == null || p($),
        $.defaultPrevented || d == null || d())
    }
    , C);
    return Mg($ => {
        N === v.layers.size - 1 && (a == null || a($),
        !$.defaultPrevented && d && ($.preventDefault(),
        d()))
    }
    , C),
    g.useEffect( () => {
        if (y)
            return l && (v.layersWithOutsidePointerEventsDisabled.size === 0 && (gd = C.body.style.pointerEvents,
            C.body.style.pointerEvents = "none"),
            v.layersWithOutsidePointerEventsDisabled.add(y)),
            v.layers.add(y),
            yd(),
            () => {
                l && v.layersWithOutsidePointerEventsDisabled.size === 1 && (C.body.style.pointerEvents = gd)
            }
    }
    , [y, C, l, v]),
    g.useEffect( () => () => {
        y && (v.layers.delete(y),
        v.layersWithOutsidePointerEventsDisabled.delete(y),
        yd())
    }
    , [y, v]),
    g.useEffect( () => {
        const $ = () => P({});
        return document.addEventListener(_a, $),
        () => document.removeEventListener(_a, $)
    }
    , []),
    L.jsx(Re.div, {
        ...h,
        ref: T,
        style: {
            pointerEvents: M ? z ? "auto" : "none" : void 0,
            ...r.style
        },
        onFocusCapture: Ce(r.onFocusCapture, Y.onFocusCapture),
        onBlurCapture: Ce(r.onBlurCapture, Y.onBlurCapture),
        onPointerDownCapture: Ce(r.onPointerDownCapture, V.onPointerDownCapture)
    })
}
);
Ba.displayName = Dg;
var Fg = "DismissableLayerBranch"
  , Wg = g.forwardRef( (r, i) => {
    const l = g.useContext(Qd)
      , a = g.useRef(null)
      , c = Ne(i, a);
    return g.useEffect( () => {
        const f = a.current;
        if (f)
            return l.branches.add(f),
            () => {
                l.branches.delete(f)
            }
    }
    , [l.branches]),
    L.jsx(Re.div, {
        ...r,
        ref: c
    })
}
);
Wg.displayName = Fg;
function Vg(r, i=globalThis == null ? void 0 : globalThis.document) {
    const l = tt(r)
      , a = g.useRef(!1)
      , c = g.useRef( () => {}
    );
    return g.useEffect( () => {
        const f = d => {
            if (d.target && !a.current) {
                let h = function() {
                    Xd(zg, l, v, {
                        discrete: !0
                    })
                };
                const v = {
                    originalEvent: d
                };
                d.pointerType === "touch" ? (i.removeEventListener("click", c.current),
                c.current = h,
                i.addEventListener("click", c.current, {
                    once: !0
                })) : h()
            } else
                i.removeEventListener("click", c.current);
            a.current = !1
        }
          , p = window.setTimeout( () => {
            i.addEventListener("pointerdown", f)
        }
        , 0);
        return () => {
            window.clearTimeout(p),
            i.removeEventListener("pointerdown", f),
            i.removeEventListener("click", c.current)
        }
    }
    , [i, l]),
    {
        onPointerDownCapture: () => a.current = !0
    }
}
function Bg(r, i=globalThis == null ? void 0 : globalThis.document) {
    const l = tt(r)
      , a = g.useRef(!1);
    return g.useEffect( () => {
        const c = f => {
            f.target && !a.current && Xd(jg, l, {
                originalEvent: f
            }, {
                discrete: !1
            })
        }
        ;
        return i.addEventListener("focusin", c),
        () => i.removeEventListener("focusin", c)
    }
    , [i, l]),
    {
        onFocusCapture: () => a.current = !0,
        onBlurCapture: () => a.current = !1
    }
}
function yd() {
    const r = new CustomEvent(_a);
    document.dispatchEvent(r)
}
function Xd(r, i, l, {discrete: a}) {
    const c = l.originalEvent.target
      , f = new CustomEvent(r,{
        bubbles: !1,
        cancelable: !0,
        detail: l
    });
    i && c.addEventListener(r, i, {
        once: !0
    }),
    a ? Lg(c, f) : c.dispatchEvent(f)
}
var ha = 0;
function Gd() {
    g.useEffect( () => {
        const r = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", r[0] ?? wd()),
        document.body.insertAdjacentElement("beforeend", r[1] ?? wd()),
        ha++,
        () => {
            ha === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(i => i.remove()),
            ha--
        }
    }
    , [])
}
function wd() {
    const r = document.createElement("span");
    return r.setAttribute("data-radix-focus-guard", ""),
    r.tabIndex = 0,
    r.style.outline = "none",
    r.style.opacity = "0",
    r.style.position = "fixed",
    r.style.pointerEvents = "none",
    r
}
var va = "focusScope.autoFocusOnMount"
  , ga = "focusScope.autoFocusOnUnmount"
  , Sd = {
    bubbles: !1,
    cancelable: !0
}
  , Ug = "FocusScope"
  , Ua = g.forwardRef( (r, i) => {
    const {loop: l=!1, trapped: a=!1, onMountAutoFocus: c, onUnmountAutoFocus: f, ...p} = r
      , [d,h] = g.useState(null)
      , v = tt(c)
      , y = tt(f)
      , w = g.useRef(null)
      , C = Ne(i, S => h(S))
      , P = g.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    g.useEffect( () => {
        if (a) {
            let S = function(M) {
                if (P.paused || !d)
                    return;
                const z = M.target;
                d.contains(z) ? w.current = z : _n(w.current, {
                    select: !0
                })
            }
              , k = function(M) {
                if (P.paused || !d)
                    return;
                const z = M.relatedTarget;
                z !== null && (d.contains(z) || _n(w.current, {
                    select: !0
                }))
            }
              , O = function(M) {
                if (document.activeElement === document.body)
                    for (const V of M)
                        V.removedNodes.length > 0 && _n(d)
            };
            document.addEventListener("focusin", S),
            document.addEventListener("focusout", k);
            const N = new MutationObserver(O);
            return d && N.observe(d, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", S),
                document.removeEventListener("focusout", k),
                N.disconnect()
            }
        }
    }
    , [a, d, P.paused]),
    g.useEffect( () => {
        if (d) {
            Cd.add(P);
            const S = document.activeElement;
            if (!d.contains(S)) {
                const O = new CustomEvent(va,Sd);
                d.addEventListener(va, v),
                d.dispatchEvent(O),
                O.defaultPrevented || ($g(Xg(Zd(d)), {
                    select: !0
                }),
                document.activeElement === S && _n(d))
            }
            return () => {
                d.removeEventListener(va, v),
                setTimeout( () => {
                    const O = new CustomEvent(ga,Sd);
                    d.addEventListener(ga, y),
                    d.dispatchEvent(O),
                    O.defaultPrevented || _n(S ?? document.body, {
                        select: !0
                    }),
                    d.removeEventListener(ga, y),
                    Cd.remove(P)
                }
                , 0)
            }
        }
    }
    , [d, v, y, P]);
    const T = g.useCallback(S => {
        if (!l && !a || P.paused)
            return;
        const k = S.key === "Tab" && !S.altKey && !S.ctrlKey && !S.metaKey
          , O = document.activeElement;
        if (k && O) {
            const N = S.currentTarget
              , [M,z] = Hg(N);
            M && z ? !S.shiftKey && O === z ? (S.preventDefault(),
            l && _n(M, {
                select: !0
            })) : S.shiftKey && O === M && (S.preventDefault(),
            l && _n(z, {
                select: !0
            })) : O === N && S.preventDefault()
        }
    }
    , [l, a, P.paused]);
    return L.jsx(Re.div, {
        tabIndex: -1,
        ...p,
        ref: C,
        onKeyDown: T
    })
}
);
Ua.displayName = Ug;
function $g(r, {select: i=!1}={}) {
    const l = document.activeElement;
    for (const a of r)
        if (_n(a, {
            select: i
        }),
        document.activeElement !== l)
            return
}
function Hg(r) {
    const i = Zd(r)
      , l = xd(i, r)
      , a = xd(i.reverse(), r);
    return [l, a]
}
function Zd(r) {
    const i = []
      , l = document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, {
        acceptNode: a => {
            const c = a.tagName === "INPUT" && a.type === "hidden";
            return a.disabled || a.hidden || c ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; l.nextNode(); )
        i.push(l.currentNode);
    return i
}
function xd(r, i) {
    for (const l of r)
        if (!Kg(l, {
            upTo: i
        }))
            return l
}
function Kg(r, {upTo: i}) {
    if (getComputedStyle(r).visibility === "hidden")
        return !0;
    for (; r; ) {
        if (i !== void 0 && r === i)
            return !1;
        if (getComputedStyle(r).display === "none")
            return !0;
        r = r.parentElement
    }
    return !1
}
function Yg(r) {
    return r instanceof HTMLInputElement && "select"in r
}
function _n(r, {select: i=!1}={}) {
    if (r && r.focus) {
        const l = document.activeElement;
        r.focus({
            preventScroll: !0
        }),
        r !== l && Yg(r) && i && r.select()
    }
}
var Cd = Qg();
function Qg() {
    let r = [];
    return {
        add(i) {
            const l = r[0];
            i !== l && (l == null || l.pause()),
            r = Ed(r, i),
            r.unshift(i)
        },
        remove(i) {
            var l;
            r = Ed(r, i),
            (l = r[0]) == null || l.resume()
        }
    }
}
function Ed(r, i) {
    const l = [...r]
      , a = l.indexOf(i);
    return a !== -1 && l.splice(a, 1),
    l
}
function Xg(r) {
    return r.filter(i => i.tagName !== "A")
}
var Ge = globalThis != null && globalThis.document ? g.useLayoutEffect : () => {}
  , Gg = Wv.useId || ( () => {}
)
  , Zg = 0;
function Lr(r) {
    const [i,l] = g.useState(Gg());
    return Ge( () => {
        l(a => a ?? String(Zg++))
    }
    , [r]),
    i ? `radix-${i}` : ""
}
const qg = ["top", "right", "bottom", "left"]
  , Tn = Math.min
  , ht = Math.max
  , Jl = Math.round
  , $l = Math.floor
  , Nn = r => ({
    x: r,
    y: r
})
  , Jg = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , ey = {
    start: "end",
    end: "start"
};
function Ta(r, i, l) {
    return ht(r, Tn(i, l))
}
function Jt(r, i) {
    return typeof r == "function" ? r(i) : r
}
function en(r) {
    return r.split("-")[0]
}
function Mr(r) {
    return r.split("-")[1]
}
function $a(r) {
    return r === "x" ? "y" : "x"
}
function Ha(r) {
    return r === "y" ? "height" : "width"
}
function An(r) {
    return ["top", "bottom"].includes(en(r)) ? "y" : "x"
}
function Ka(r) {
    return $a(An(r))
}
function ty(r, i, l) {
    l === void 0 && (l = !1);
    const a = Mr(r)
      , c = Ka(r)
      , f = Ha(c);
    let p = c === "x" ? a === (l ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
    return i.reference[f] > i.floating[f] && (p = ei(p)),
    [p, ei(p)]
}
function ny(r) {
    const i = ei(r);
    return [Na(r), i, Na(i)]
}
function Na(r) {
    return r.replace(/start|end/g, i => ey[i])
}
function ry(r, i, l) {
    const a = ["left", "right"]
      , c = ["right", "left"]
      , f = ["top", "bottom"]
      , p = ["bottom", "top"];
    switch (r) {
    case "top":
    case "bottom":
        return l ? i ? c : a : i ? a : c;
    case "left":
    case "right":
        return i ? f : p;
    default:
        return []
    }
}
function oy(r, i, l, a) {
    const c = Mr(r);
    let f = ry(en(r), l === "start", a);
    return c && (f = f.map(p => p + "-" + c),
    i && (f = f.concat(f.map(Na)))),
    f
}
function ei(r) {
    return r.replace(/left|right|bottom|top/g, i => Jg[i])
}
function ly(r) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...r
    }
}
function qd(r) {
    return typeof r != "number" ? ly(r) : {
        top: r,
        right: r,
        bottom: r,
        left: r
    }
}
function ti(r) {
    const {x: i, y: l, width: a, height: c} = r;
    return {
        width: a,
        height: c,
        top: l,
        left: i,
        right: i + a,
        bottom: l + c,
        x: i,
        y: l
    }
}
function Pd(r, i, l) {
    let {reference: a, floating: c} = r;
    const f = An(i)
      , p = Ka(i)
      , d = Ha(p)
      , h = en(i)
      , v = f === "y"
      , y = a.x + a.width / 2 - c.width / 2
      , w = a.y + a.height / 2 - c.height / 2
      , C = a[d] / 2 - c[d] / 2;
    let P;
    switch (h) {
    case "top":
        P = {
            x: y,
            y: a.y - c.height
        };
        break;
    case "bottom":
        P = {
            x: y,
            y: a.y + a.height
        };
        break;
    case "right":
        P = {
            x: a.x + a.width,
            y: w
        };
        break;
    case "left":
        P = {
            x: a.x - c.width,
            y: w
        };
        break;
    default:
        P = {
            x: a.x,
            y: a.y
        }
    }
    switch (Mr(i)) {
    case "start":
        P[p] -= C * (l && v ? -1 : 1);
        break;
    case "end":
        P[p] += C * (l && v ? -1 : 1);
        break
    }
    return P
}
const iy = async (r, i, l) => {
    const {placement: a="bottom", strategy: c="absolute", middleware: f=[], platform: p} = l
      , d = f.filter(Boolean)
      , h = await (p.isRTL == null ? void 0 : p.isRTL(i));
    let v = await p.getElementRects({
        reference: r,
        floating: i,
        strategy: c
    })
      , {x: y, y: w} = Pd(v, a, h)
      , C = a
      , P = {}
      , T = 0;
    for (let S = 0; S < d.length; S++) {
        const {name: k, fn: O} = d[S]
          , {x: N, y: M, data: z, reset: V} = await O({
            x: y,
            y: w,
            initialPlacement: a,
            placement: C,
            strategy: c,
            middlewareData: P,
            rects: v,
            platform: p,
            elements: {
                reference: r,
                floating: i
            }
        });
        y = N ?? y,
        w = M ?? w,
        P = {
            ...P,
            [k]: {
                ...P[k],
                ...z
            }
        },
        V && T <= 50 && (T++,
        typeof V == "object" && (V.placement && (C = V.placement),
        V.rects && (v = V.rects === !0 ? await p.getElementRects({
            reference: r,
            floating: i,
            strategy: c
        }) : V.rects),
        {x: y, y: w} = Pd(v, C, h)),
        S = -1)
    }
    return {
        x: y,
        y: w,
        placement: C,
        strategy: c,
        middlewareData: P
    }
}
;
async function To(r, i) {
    var l;
    i === void 0 && (i = {});
    const {x: a, y: c, platform: f, rects: p, elements: d, strategy: h} = r
      , {boundary: v="clippingAncestors", rootBoundary: y="viewport", elementContext: w="floating", altBoundary: C=!1, padding: P=0} = Jt(i, r)
      , T = qd(P)
      , k = d[C ? w === "floating" ? "reference" : "floating" : w]
      , O = ti(await f.getClippingRect({
        element: (l = await (f.isElement == null ? void 0 : f.isElement(k))) == null || l ? k : k.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(d.floating)),
        boundary: v,
        rootBoundary: y,
        strategy: h
    }))
      , N = w === "floating" ? {
        x: a,
        y: c,
        width: p.floating.width,
        height: p.floating.height
    } : p.reference
      , M = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(d.floating))
      , z = await (f.isElement == null ? void 0 : f.isElement(M)) ? await (f.getScale == null ? void 0 : f.getScale(M)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , V = ti(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: d,
        rect: N,
        offsetParent: M,
        strategy: h
    }) : N);
    return {
        top: (O.top - V.top + T.top) / z.y,
        bottom: (V.bottom - O.bottom + T.bottom) / z.y,
        left: (O.left - V.left + T.left) / z.x,
        right: (V.right - O.right + T.right) / z.x
    }
}
const sy = r => ({
    name: "arrow",
    options: r,
    async fn(i) {
        const {x: l, y: a, placement: c, rects: f, platform: p, elements: d, middlewareData: h} = i
          , {element: v, padding: y=0} = Jt(r, i) || {};
        if (v == null)
            return {};
        const w = qd(y)
          , C = {
            x: l,
            y: a
        }
          , P = Ka(c)
          , T = Ha(P)
          , S = await p.getDimensions(v)
          , k = P === "y"
          , O = k ? "top" : "left"
          , N = k ? "bottom" : "right"
          , M = k ? "clientHeight" : "clientWidth"
          , z = f.reference[T] + f.reference[P] - C[P] - f.floating[T]
          , V = C[P] - f.reference[P]
          , Y = await (p.getOffsetParent == null ? void 0 : p.getOffsetParent(v));
        let $ = Y ? Y[M] : 0;
        (!$ || !await (p.isElement == null ? void 0 : p.isElement(Y))) && ($ = d.floating[M] || f.floating[T]);
        const J = z / 2 - V / 2
          , Z = $ / 2 - S[T] / 2 - 1
          , re = Tn(w[O], Z)
          , me = Tn(w[N], Z)
          , ee = re
          , de = $ - S[T] - me
          , ue = $ / 2 - S[T] / 2 + J
          , xe = Ta(ee, ue, de)
          , ie = !h.arrow && Mr(c) != null && ue !== xe && f.reference[T] / 2 - (ue < ee ? re : me) - S[T] / 2 < 0
          , oe = ie ? ue < ee ? ue - ee : ue - de : 0;
        return {
            [P]: C[P] + oe,
            data: {
                [P]: xe,
                centerOffset: ue - xe - oe,
                ...ie && {
                    alignmentOffset: oe
                }
            },
            reset: ie
        }
    }
})
  , ay = function(r) {
    return r === void 0 && (r = {}),
    {
        name: "flip",
        options: r,
        async fn(i) {
            var l, a;
            const {placement: c, middlewareData: f, rects: p, initialPlacement: d, platform: h, elements: v} = i
              , {mainAxis: y=!0, crossAxis: w=!0, fallbackPlacements: C, fallbackStrategy: P="bestFit", fallbackAxisSideDirection: T="none", flipAlignment: S=!0, ...k} = Jt(r, i);
            if ((l = f.arrow) != null && l.alignmentOffset)
                return {};
            const O = en(c)
              , N = An(d)
              , M = en(d) === d
              , z = await (h.isRTL == null ? void 0 : h.isRTL(v.floating))
              , V = C || (M || !S ? [ei(d)] : ny(d))
              , Y = T !== "none";
            !C && Y && V.push(...oy(d, S, T, z));
            const $ = [d, ...V]
              , J = await To(i, k)
              , Z = [];
            let re = ((a = f.flip) == null ? void 0 : a.overflows) || [];
            if (y && Z.push(J[O]),
            w) {
                const ue = ty(c, p, z);
                Z.push(J[ue[0]], J[ue[1]])
            }
            if (re = [...re, {
                placement: c,
                overflows: Z
            }],
            !Z.every(ue => ue <= 0)) {
                var me, ee;
                const ue = (((me = f.flip) == null ? void 0 : me.index) || 0) + 1
                  , xe = $[ue];
                if (xe)
                    return {
                        data: {
                            index: ue,
                            overflows: re
                        },
                        reset: {
                            placement: xe
                        }
                    };
                let ie = (ee = re.filter(oe => oe.overflows[0] <= 0).sort( (oe, D) => oe.overflows[1] - D.overflows[1])[0]) == null ? void 0 : ee.placement;
                if (!ie)
                    switch (P) {
                    case "bestFit":
                        {
                            var de;
                            const oe = (de = re.filter(D => {
                                if (Y) {
                                    const K = An(D.placement);
                                    return K === N || K === "y"
                                }
                                return !0
                            }
                            ).map(D => [D.placement, D.overflows.filter(K => K > 0).reduce( (K, H) => K + H, 0)]).sort( (D, K) => D[1] - K[1])[0]) == null ? void 0 : de[0];
                            oe && (ie = oe);
                            break
                        }
                    case "initialPlacement":
                        ie = d;
                        break
                    }
                if (c !== ie)
                    return {
                        reset: {
                            placement: ie
                        }
                    }
            }
            return {}
        }
    }
};
function kd(r, i) {
    return {
        top: r.top - i.height,
        right: r.right - i.width,
        bottom: r.bottom - i.height,
        left: r.left - i.width
    }
}
function Rd(r) {
    return qg.some(i => r[i] >= 0)
}
const uy = function(r) {
    return r === void 0 && (r = {}),
    {
        name: "hide",
        options: r,
        async fn(i) {
            const {rects: l} = i
              , {strategy: a="referenceHidden", ...c} = Jt(r, i);
            switch (a) {
            case "referenceHidden":
                {
                    const f = await To(i, {
                        ...c,
                        elementContext: "reference"
                    })
                      , p = kd(f, l.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: p,
                            referenceHidden: Rd(p)
                        }
                    }
                }
            case "escaped":
                {
                    const f = await To(i, {
                        ...c,
                        altBoundary: !0
                    })
                      , p = kd(f, l.floating);
                    return {
                        data: {
                            escapedOffsets: p,
                            escaped: Rd(p)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function cy(r, i) {
    const {placement: l, platform: a, elements: c} = r
      , f = await (a.isRTL == null ? void 0 : a.isRTL(c.floating))
      , p = en(l)
      , d = Mr(l)
      , h = An(l) === "y"
      , v = ["left", "top"].includes(p) ? -1 : 1
      , y = f && h ? -1 : 1
      , w = Jt(i, r);
    let {mainAxis: C, crossAxis: P, alignmentAxis: T} = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: w.mainAxis || 0,
        crossAxis: w.crossAxis || 0,
        alignmentAxis: w.alignmentAxis
    };
    return d && typeof T == "number" && (P = d === "end" ? T * -1 : T),
    h ? {
        x: P * y,
        y: C * v
    } : {
        x: C * v,
        y: P * y
    }
}
const fy = function(r) {
    return r === void 0 && (r = 0),
    {
        name: "offset",
        options: r,
        async fn(i) {
            var l, a;
            const {x: c, y: f, placement: p, middlewareData: d} = i
              , h = await cy(i, r);
            return p === ((l = d.offset) == null ? void 0 : l.placement) && (a = d.arrow) != null && a.alignmentOffset ? {} : {
                x: c + h.x,
                y: f + h.y,
                data: {
                    ...h,
                    placement: p
                }
            }
        }
    }
}
  , dy = function(r) {
    return r === void 0 && (r = {}),
    {
        name: "shift",
        options: r,
        async fn(i) {
            const {x: l, y: a, placement: c} = i
              , {mainAxis: f=!0, crossAxis: p=!1, limiter: d={
                fn: k => {
                    let {x: O, y: N} = k;
                    return {
                        x: O,
                        y: N
                    }
                }
            }, ...h} = Jt(r, i)
              , v = {
                x: l,
                y: a
            }
              , y = await To(i, h)
              , w = An(en(c))
              , C = $a(w);
            let P = v[C]
              , T = v[w];
            if (f) {
                const k = C === "y" ? "top" : "left"
                  , O = C === "y" ? "bottom" : "right"
                  , N = P + y[k]
                  , M = P - y[O];
                P = Ta(N, P, M)
            }
            if (p) {
                const k = w === "y" ? "top" : "left"
                  , O = w === "y" ? "bottom" : "right"
                  , N = T + y[k]
                  , M = T - y[O];
                T = Ta(N, T, M)
            }
            const S = d.fn({
                ...i,
                [C]: P,
                [w]: T
            });
            return {
                ...S,
                data: {
                    x: S.x - l,
                    y: S.y - a,
                    enabled: {
                        [C]: f,
                        [w]: p
                    }
                }
            }
        }
    }
}
  , py = function(r) {
    return r === void 0 && (r = {}),
    {
        options: r,
        fn(i) {
            const {x: l, y: a, placement: c, rects: f, middlewareData: p} = i
              , {offset: d=0, mainAxis: h=!0, crossAxis: v=!0} = Jt(r, i)
              , y = {
                x: l,
                y: a
            }
              , w = An(c)
              , C = $a(w);
            let P = y[C]
              , T = y[w];
            const S = Jt(d, i)
              , k = typeof S == "number" ? {
                mainAxis: S,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...S
            };
            if (h) {
                const M = C === "y" ? "height" : "width"
                  , z = f.reference[C] - f.floating[M] + k.mainAxis
                  , V = f.reference[C] + f.reference[M] - k.mainAxis;
                P < z ? P = z : P > V && (P = V)
            }
            if (v) {
                var O, N;
                const M = C === "y" ? "width" : "height"
                  , z = ["top", "left"].includes(en(c))
                  , V = f.reference[w] - f.floating[M] + (z && ((O = p.offset) == null ? void 0 : O[w]) || 0) + (z ? 0 : k.crossAxis)
                  , Y = f.reference[w] + f.reference[M] + (z ? 0 : ((N = p.offset) == null ? void 0 : N[w]) || 0) - (z ? k.crossAxis : 0);
                T < V ? T = V : T > Y && (T = Y)
            }
            return {
                [C]: P,
                [w]: T
            }
        }
    }
}
  , my = function(r) {
    return r === void 0 && (r = {}),
    {
        name: "size",
        options: r,
        async fn(i) {
            var l, a;
            const {placement: c, rects: f, platform: p, elements: d} = i
              , {apply: h= () => {}
            , ...v} = Jt(r, i)
              , y = await To(i, v)
              , w = en(c)
              , C = Mr(c)
              , P = An(c) === "y"
              , {width: T, height: S} = f.floating;
            let k, O;
            w === "top" || w === "bottom" ? (k = w,
            O = C === (await (p.isRTL == null ? void 0 : p.isRTL(d.floating)) ? "start" : "end") ? "left" : "right") : (O = w,
            k = C === "end" ? "top" : "bottom");
            const N = S - y.top - y.bottom
              , M = T - y.left - y.right
              , z = Tn(S - y[k], N)
              , V = Tn(T - y[O], M)
              , Y = !i.middlewareData.shift;
            let $ = z
              , J = V;
            if ((l = i.middlewareData.shift) != null && l.enabled.x && (J = M),
            (a = i.middlewareData.shift) != null && a.enabled.y && ($ = N),
            Y && !C) {
                const re = ht(y.left, 0)
                  , me = ht(y.right, 0)
                  , ee = ht(y.top, 0)
                  , de = ht(y.bottom, 0);
                P ? J = T - 2 * (re !== 0 || me !== 0 ? re + me : ht(y.left, y.right)) : $ = S - 2 * (ee !== 0 || de !== 0 ? ee + de : ht(y.top, y.bottom))
            }
            await h({
                ...i,
                availableWidth: J,
                availableHeight: $
            });
            const Z = await p.getDimensions(d.floating);
            return T !== Z.width || S !== Z.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function si() {
    return typeof window < "u"
}
function Dr(r) {
    return Jd(r) ? (r.nodeName || "").toLowerCase() : "#document"
}
function vt(r) {
    var i;
    return (r == null || (i = r.ownerDocument) == null ? void 0 : i.defaultView) || window
}
function Vt(r) {
    var i;
    return (i = (Jd(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : i.documentElement
}
function Jd(r) {
    return si() ? r instanceof Node || r instanceof vt(r).Node : !1
}
function It(r) {
    return si() ? r instanceof Element || r instanceof vt(r).Element : !1
}
function Wt(r) {
    return si() ? r instanceof HTMLElement || r instanceof vt(r).HTMLElement : !1
}
function _d(r) {
    return !si() || typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof vt(r).ShadowRoot
}
function Io(r) {
    const {overflow: i, overflowX: l, overflowY: a, display: c} = bt(r);
    return /auto|scroll|overlay|hidden|clip/.test(i + a + l) && !["inline", "contents"].includes(c)
}
function hy(r) {
    return ["table", "td", "th"].includes(Dr(r))
}
function ai(r) {
    return [":popover-open", ":modal"].some(i => {
        try {
            return r.matches(i)
        } catch {
            return !1
        }
    }
    )
}
function Ya(r) {
    const i = Qa()
      , l = It(r) ? bt(r) : r;
    return l.transform !== "none" || l.perspective !== "none" || (l.containerType ? l.containerType !== "normal" : !1) || !i && (l.backdropFilter ? l.backdropFilter !== "none" : !1) || !i && (l.filter ? l.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(a => (l.willChange || "").includes(a)) || ["paint", "layout", "strict", "content"].some(a => (l.contain || "").includes(a))
}
function vy(r) {
    let i = On(r);
    for (; Wt(i) && !Nr(i); ) {
        if (Ya(i))
            return i;
        if (ai(i))
            return null;
        i = On(i)
    }
    return null
}
function Qa() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Nr(r) {
    return ["html", "body", "#document"].includes(Dr(r))
}
function bt(r) {
    return vt(r).getComputedStyle(r)
}
function ui(r) {
    return It(r) ? {
        scrollLeft: r.scrollLeft,
        scrollTop: r.scrollTop
    } : {
        scrollLeft: r.scrollX,
        scrollTop: r.scrollY
    }
}
function On(r) {
    if (Dr(r) === "html")
        return r;
    const i = r.assignedSlot || r.parentNode || _d(r) && r.host || Vt(r);
    return _d(i) ? i.host : i
}
function ep(r) {
    const i = On(r);
    return Nr(i) ? r.ownerDocument ? r.ownerDocument.body : r.body : Wt(i) && Io(i) ? i : ep(i)
}
function No(r, i, l) {
    var a;
    i === void 0 && (i = []),
    l === void 0 && (l = !0);
    const c = ep(r)
      , f = c === ((a = r.ownerDocument) == null ? void 0 : a.body)
      , p = vt(c);
    if (f) {
        const d = Aa(p);
        return i.concat(p, p.visualViewport || [], Io(c) ? c : [], d && l ? No(d) : [])
    }
    return i.concat(c, No(c, [], l))
}
function Aa(r) {
    return r.parent && Object.getPrototypeOf(r.parent) ? r.frameElement : null
}
function tp(r) {
    const i = bt(r);
    let l = parseFloat(i.width) || 0
      , a = parseFloat(i.height) || 0;
    const c = Wt(r)
      , f = c ? r.offsetWidth : l
      , p = c ? r.offsetHeight : a
      , d = Jl(l) !== f || Jl(a) !== p;
    return d && (l = f,
    a = p),
    {
        width: l,
        height: a,
        $: d
    }
}
function Xa(r) {
    return It(r) ? r : r.contextElement
}
function Rr(r) {
    const i = Xa(r);
    if (!Wt(i))
        return Nn(1);
    const l = i.getBoundingClientRect()
      , {width: a, height: c, $: f} = tp(i);
    let p = (f ? Jl(l.width) : l.width) / a
      , d = (f ? Jl(l.height) : l.height) / c;
    return (!p || !Number.isFinite(p)) && (p = 1),
    (!d || !Number.isFinite(d)) && (d = 1),
    {
        x: p,
        y: d
    }
}
const gy = Nn(0);
function np(r) {
    const i = vt(r);
    return !Qa() || !i.visualViewport ? gy : {
        x: i.visualViewport.offsetLeft,
        y: i.visualViewport.offsetTop
    }
}
function yy(r, i, l) {
    return i === void 0 && (i = !1),
    !l || i && l !== vt(r) ? !1 : i
}
function Xn(r, i, l, a) {
    i === void 0 && (i = !1),
    l === void 0 && (l = !1);
    const c = r.getBoundingClientRect()
      , f = Xa(r);
    let p = Nn(1);
    i && (a ? It(a) && (p = Rr(a)) : p = Rr(r));
    const d = yy(f, l, a) ? np(f) : Nn(0);
    let h = (c.left + d.x) / p.x
      , v = (c.top + d.y) / p.y
      , y = c.width / p.x
      , w = c.height / p.y;
    if (f) {
        const C = vt(f)
          , P = a && It(a) ? vt(a) : a;
        let T = C
          , S = Aa(T);
        for (; S && a && P !== T; ) {
            const k = Rr(S)
              , O = S.getBoundingClientRect()
              , N = bt(S)
              , M = O.left + (S.clientLeft + parseFloat(N.paddingLeft)) * k.x
              , z = O.top + (S.clientTop + parseFloat(N.paddingTop)) * k.y;
            h *= k.x,
            v *= k.y,
            y *= k.x,
            w *= k.y,
            h += M,
            v += z,
            T = vt(S),
            S = Aa(T)
        }
    }
    return ti({
        width: y,
        height: w,
        x: h,
        y: v
    })
}
function wy(r) {
    let {elements: i, rect: l, offsetParent: a, strategy: c} = r;
    const f = c === "fixed"
      , p = Vt(a)
      , d = i ? ai(i.floating) : !1;
    if (a === p || d && f)
        return l;
    let h = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , v = Nn(1);
    const y = Nn(0)
      , w = Wt(a);
    if ((w || !w && !f) && ((Dr(a) !== "body" || Io(p)) && (h = ui(a)),
    Wt(a))) {
        const C = Xn(a);
        v = Rr(a),
        y.x = C.x + a.clientLeft,
        y.y = C.y + a.clientTop
    }
    return {
        width: l.width * v.x,
        height: l.height * v.y,
        x: l.x * v.x - h.scrollLeft * v.x + y.x,
        y: l.y * v.y - h.scrollTop * v.y + y.y
    }
}
function Sy(r) {
    return Array.from(r.getClientRects())
}
function Oa(r, i) {
    const l = ui(r).scrollLeft;
    return i ? i.left + l : Xn(Vt(r)).left + l
}
function xy(r) {
    const i = Vt(r)
      , l = ui(r)
      , a = r.ownerDocument.body
      , c = ht(i.scrollWidth, i.clientWidth, a.scrollWidth, a.clientWidth)
      , f = ht(i.scrollHeight, i.clientHeight, a.scrollHeight, a.clientHeight);
    let p = -l.scrollLeft + Oa(r);
    const d = -l.scrollTop;
    return bt(a).direction === "rtl" && (p += ht(i.clientWidth, a.clientWidth) - c),
    {
        width: c,
        height: f,
        x: p,
        y: d
    }
}
function Cy(r, i) {
    const l = vt(r)
      , a = Vt(r)
      , c = l.visualViewport;
    let f = a.clientWidth
      , p = a.clientHeight
      , d = 0
      , h = 0;
    if (c) {
        f = c.width,
        p = c.height;
        const v = Qa();
        (!v || v && i === "fixed") && (d = c.offsetLeft,
        h = c.offsetTop)
    }
    return {
        width: f,
        height: p,
        x: d,
        y: h
    }
}
function Ey(r, i) {
    const l = Xn(r, !0, i === "fixed")
      , a = l.top + r.clientTop
      , c = l.left + r.clientLeft
      , f = Wt(r) ? Rr(r) : Nn(1)
      , p = r.clientWidth * f.x
      , d = r.clientHeight * f.y
      , h = c * f.x
      , v = a * f.y;
    return {
        width: p,
        height: d,
        x: h,
        y: v
    }
}
function Td(r, i, l) {
    let a;
    if (i === "viewport")
        a = Cy(r, l);
    else if (i === "document")
        a = xy(Vt(r));
    else if (It(i))
        a = Ey(i, l);
    else {
        const c = np(r);
        a = {
            ...i,
            x: i.x - c.x,
            y: i.y - c.y
        }
    }
    return ti(a)
}
function rp(r, i) {
    const l = On(r);
    return l === i || !It(l) || Nr(l) ? !1 : bt(l).position === "fixed" || rp(l, i)
}
function Py(r, i) {
    const l = i.get(r);
    if (l)
        return l;
    let a = No(r, [], !1).filter(d => It(d) && Dr(d) !== "body")
      , c = null;
    const f = bt(r).position === "fixed";
    let p = f ? On(r) : r;
    for (; It(p) && !Nr(p); ) {
        const d = bt(p)
          , h = Ya(p);
        !h && d.position === "fixed" && (c = null),
        (f ? !h && !c : !h && d.position === "static" && !!c && ["absolute", "fixed"].includes(c.position) || Io(p) && !h && rp(r, p)) ? a = a.filter(y => y !== p) : c = d,
        p = On(p)
    }
    return i.set(r, a),
    a
}
function ky(r) {
    let {element: i, boundary: l, rootBoundary: a, strategy: c} = r;
    const p = [...l === "clippingAncestors" ? ai(i) ? [] : Py(i, this._c) : [].concat(l), a]
      , d = p[0]
      , h = p.reduce( (v, y) => {
        const w = Td(i, y, c);
        return v.top = ht(w.top, v.top),
        v.right = Tn(w.right, v.right),
        v.bottom = Tn(w.bottom, v.bottom),
        v.left = ht(w.left, v.left),
        v
    }
    , Td(i, d, c));
    return {
        width: h.right - h.left,
        height: h.bottom - h.top,
        x: h.left,
        y: h.top
    }
}
function Ry(r) {
    const {width: i, height: l} = tp(r);
    return {
        width: i,
        height: l
    }
}
function _y(r, i, l) {
    const a = Wt(i)
      , c = Vt(i)
      , f = l === "fixed"
      , p = Xn(r, !0, f, i);
    let d = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const h = Nn(0);
    if (a || !a && !f)
        if ((Dr(i) !== "body" || Io(c)) && (d = ui(i)),
        a) {
            const P = Xn(i, !0, f, i);
            h.x = P.x + i.clientLeft,
            h.y = P.y + i.clientTop
        } else
            c && (h.x = Oa(c));
    let v = 0
      , y = 0;
    if (c && !a && !f) {
        const P = c.getBoundingClientRect();
        y = P.top + d.scrollTop,
        v = P.left + d.scrollLeft - Oa(c, P)
    }
    const w = p.left + d.scrollLeft - h.x - v
      , C = p.top + d.scrollTop - h.y - y;
    return {
        x: w,
        y: C,
        width: p.width,
        height: p.height
    }
}
function ya(r) {
    return bt(r).position === "static"
}
function Nd(r, i) {
    if (!Wt(r) || bt(r).position === "fixed")
        return null;
    if (i)
        return i(r);
    let l = r.offsetParent;
    return Vt(r) === l && (l = l.ownerDocument.body),
    l
}
function op(r, i) {
    const l = vt(r);
    if (ai(r))
        return l;
    if (!Wt(r)) {
        let c = On(r);
        for (; c && !Nr(c); ) {
            if (It(c) && !ya(c))
                return c;
            c = On(c)
        }
        return l
    }
    let a = Nd(r, i);
    for (; a && hy(a) && ya(a); )
        a = Nd(a, i);
    return a && Nr(a) && ya(a) && !Ya(a) ? l : a || vy(r) || l
}
const Ty = async function(r) {
    const i = this.getOffsetParent || op
      , l = this.getDimensions
      , a = await l(r.floating);
    return {
        reference: _y(r.reference, await i(r.floating), r.strategy),
        floating: {
            x: 0,
            y: 0,
            width: a.width,
            height: a.height
        }
    }
};
function Ny(r) {
    return bt(r).direction === "rtl"
}
const Ay = {
    convertOffsetParentRelativeRectToViewportRelativeRect: wy,
    getDocumentElement: Vt,
    getClippingRect: ky,
    getOffsetParent: op,
    getElementRects: Ty,
    getClientRects: Sy,
    getDimensions: Ry,
    getScale: Rr,
    isElement: It,
    isRTL: Ny
};
function Oy(r, i) {
    let l = null, a;
    const c = Vt(r);
    function f() {
        var d;
        clearTimeout(a),
        (d = l) == null || d.disconnect(),
        l = null
    }
    function p(d, h) {
        d === void 0 && (d = !1),
        h === void 0 && (h = 1),
        f();
        const {left: v, top: y, width: w, height: C} = r.getBoundingClientRect();
        if (d || i(),
        !w || !C)
            return;
        const P = $l(y)
          , T = $l(c.clientWidth - (v + w))
          , S = $l(c.clientHeight - (y + C))
          , k = $l(v)
          , N = {
            rootMargin: -P + "px " + -T + "px " + -S + "px " + -k + "px",
            threshold: ht(0, Tn(1, h)) || 1
        };
        let M = !0;
        function z(V) {
            const Y = V[0].intersectionRatio;
            if (Y !== h) {
                if (!M)
                    return p();
                Y ? p(!1, Y) : a = setTimeout( () => {
                    p(!1, 1e-7)
                }
                , 1e3)
            }
            M = !1
        }
        try {
            l = new IntersectionObserver(z,{
                ...N,
                root: c.ownerDocument
            })
        } catch {
            l = new IntersectionObserver(z,N)
        }
        l.observe(r)
    }
    return p(!0),
    f
}
function Iy(r, i, l, a) {
    a === void 0 && (a = {});
    const {ancestorScroll: c=!0, ancestorResize: f=!0, elementResize: p=typeof ResizeObserver == "function", layoutShift: d=typeof IntersectionObserver == "function", animationFrame: h=!1} = a
      , v = Xa(r)
      , y = c || f ? [...v ? No(v) : [], ...No(i)] : [];
    y.forEach(O => {
        c && O.addEventListener("scroll", l, {
            passive: !0
        }),
        f && O.addEventListener("resize", l)
    }
    );
    const w = v && d ? Oy(v, l) : null;
    let C = -1
      , P = null;
    p && (P = new ResizeObserver(O => {
        let[N] = O;
        N && N.target === v && P && (P.unobserve(i),
        cancelAnimationFrame(C),
        C = requestAnimationFrame( () => {
            var M;
            (M = P) == null || M.observe(i)
        }
        )),
        l()
    }
    ),
    v && !h && P.observe(v),
    P.observe(i));
    let T, S = h ? Xn(r) : null;
    h && k();
    function k() {
        const O = Xn(r);
        S && (O.x !== S.x || O.y !== S.y || O.width !== S.width || O.height !== S.height) && l(),
        S = O,
        T = requestAnimationFrame(k)
    }
    return l(),
    () => {
        var O;
        y.forEach(N => {
            c && N.removeEventListener("scroll", l),
            f && N.removeEventListener("resize", l)
        }
        ),
        w == null || w(),
        (O = P) == null || O.disconnect(),
        P = null,
        h && cancelAnimationFrame(T)
    }
}
const by = fy
  , Ly = dy
  , My = ay
  , Dy = my
  , zy = uy
  , Ad = sy
  , jy = py
  , Fy = (r, i, l) => {
    const a = new Map
      , c = {
        platform: Ay,
        ...l
    }
      , f = {
        ...c.platform,
        _c: a
    };
    return iy(r, i, {
        ...c,
        platform: f
    })
}
;
var Gl = typeof document < "u" ? g.useLayoutEffect : g.useEffect;
function ni(r, i) {
    if (r === i)
        return !0;
    if (typeof r != typeof i)
        return !1;
    if (typeof r == "function" && r.toString() === i.toString())
        return !0;
    let l, a, c;
    if (r && i && typeof r == "object") {
        if (Array.isArray(r)) {
            if (l = r.length,
            l !== i.length)
                return !1;
            for (a = l; a-- !== 0; )
                if (!ni(r[a], i[a]))
                    return !1;
            return !0
        }
        if (c = Object.keys(r),
        l = c.length,
        l !== Object.keys(i).length)
            return !1;
        for (a = l; a-- !== 0; )
            if (!{}.hasOwnProperty.call(i, c[a]))
                return !1;
        for (a = l; a-- !== 0; ) {
            const f = c[a];
            if (!(f === "_owner" && r.$$typeof) && !ni(r[f], i[f]))
                return !1
        }
        return !0
    }
    return r !== r && i !== i
}
function lp(r) {
    return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Od(r, i) {
    const l = lp(r);
    return Math.round(i * l) / l
}
function wa(r) {
    const i = g.useRef(r);
    return Gl( () => {
        i.current = r
    }
    ),
    i
}
function Wy(r) {
    r === void 0 && (r = {});
    const {placement: i="bottom", strategy: l="absolute", middleware: a=[], platform: c, elements: {reference: f, floating: p}={}, transform: d=!0, whileElementsMounted: h, open: v} = r
      , [y,w] = g.useState({
        x: 0,
        y: 0,
        strategy: l,
        placement: i,
        middlewareData: {},
        isPositioned: !1
    })
      , [C,P] = g.useState(a);
    ni(C, a) || P(a);
    const [T,S] = g.useState(null)
      , [k,O] = g.useState(null)
      , N = g.useCallback(D => {
        D !== Y.current && (Y.current = D,
        S(D))
    }
    , [])
      , M = g.useCallback(D => {
        D !== $.current && ($.current = D,
        O(D))
    }
    , [])
      , z = f || T
      , V = p || k
      , Y = g.useRef(null)
      , $ = g.useRef(null)
      , J = g.useRef(y)
      , Z = h != null
      , re = wa(h)
      , me = wa(c)
      , ee = wa(v)
      , de = g.useCallback( () => {
        if (!Y.current || !$.current)
            return;
        const D = {
            placement: i,
            strategy: l,
            middleware: C
        };
        me.current && (D.platform = me.current),
        Fy(Y.current, $.current, D).then(K => {
            const H = {
                ...K,
                isPositioned: ee.current !== !1
            };
            ue.current && !ni(J.current, H) && (J.current = H,
            Ao.flushSync( () => {
                w(H)
            }
            ))
        }
        )
    }
    , [C, i, l, me, ee]);
    Gl( () => {
        v === !1 && J.current.isPositioned && (J.current.isPositioned = !1,
        w(D => ({
            ...D,
            isPositioned: !1
        })))
    }
    , [v]);
    const ue = g.useRef(!1);
    Gl( () => (ue.current = !0,
    () => {
        ue.current = !1
    }
    ), []),
    Gl( () => {
        if (z && (Y.current = z),
        V && ($.current = V),
        z && V) {
            if (re.current)
                return re.current(z, V, de);
            de()
        }
    }
    , [z, V, de, re, Z]);
    const xe = g.useMemo( () => ({
        reference: Y,
        floating: $,
        setReference: N,
        setFloating: M
    }), [N, M])
      , ie = g.useMemo( () => ({
        reference: z,
        floating: V
    }), [z, V])
      , oe = g.useMemo( () => {
        const D = {
            position: l,
            left: 0,
            top: 0
        };
        if (!ie.floating)
            return D;
        const K = Od(ie.floating, y.x)
          , H = Od(ie.floating, y.y);
        return d ? {
            ...D,
            transform: "translate(" + K + "px, " + H + "px)",
            ...lp(ie.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: l,
            left: K,
            top: H
        }
    }
    , [l, d, ie.floating, y.x, y.y]);
    return g.useMemo( () => ({
        ...y,
        update: de,
        refs: xe,
        elements: ie,
        floatingStyles: oe
    }), [y, de, xe, ie, oe])
}
const Vy = r => {
    function i(l) {
        return {}.hasOwnProperty.call(l, "current")
    }
    return {
        name: "arrow",
        options: r,
        fn(l) {
            const {element: a, padding: c} = typeof r == "function" ? r(l) : r;
            return a && i(a) ? a.current != null ? Ad({
                element: a.current,
                padding: c
            }).fn(l) : {} : a ? Ad({
                element: a,
                padding: c
            }).fn(l) : {}
        }
    }
}
  , By = (r, i) => ({
    ...by(r),
    options: [r, i]
})
  , Uy = (r, i) => ({
    ...Ly(r),
    options: [r, i]
})
  , $y = (r, i) => ({
    ...jy(r),
    options: [r, i]
})
  , Hy = (r, i) => ({
    ...My(r),
    options: [r, i]
})
  , Ky = (r, i) => ({
    ...Dy(r),
    options: [r, i]
})
  , Yy = (r, i) => ({
    ...zy(r),
    options: [r, i]
})
  , Qy = (r, i) => ({
    ...Vy(r),
    options: [r, i]
});
var Xy = "Arrow"
  , ip = g.forwardRef( (r, i) => {
    const {children: l, width: a=10, height: c=5, ...f} = r;
    return L.jsx(Re.svg, {
        ...f,
        ref: i,
        width: a,
        height: c,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: r.asChild ? l : L.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
ip.displayName = Xy;
var Gy = ip;
function Zy(r, i=[]) {
    let l = [];
    function a(f, p) {
        const d = g.createContext(p)
          , h = l.length;
        l = [...l, p];
        function v(w) {
            const {scope: C, children: P, ...T} = w
              , S = (C == null ? void 0 : C[r][h]) || d
              , k = g.useMemo( () => T, Object.values(T));
            return L.jsx(S.Provider, {
                value: k,
                children: P
            })
        }
        function y(w, C) {
            const P = (C == null ? void 0 : C[r][h]) || d
              , T = g.useContext(P);
            if (T)
                return T;
            if (p !== void 0)
                return p;
            throw new Error(`\`${w}\` must be used within \`${f}\``)
        }
        return v.displayName = f + "Provider",
        [v, y]
    }
    const c = () => {
        const f = l.map(p => g.createContext(p));
        return function(d) {
            const h = (d == null ? void 0 : d[r]) || f;
            return g.useMemo( () => ({
                [`__scope${r}`]: {
                    ...d,
                    [r]: h
                }
            }), [d, h])
        }
    }
    ;
    return c.scopeName = r,
    [a, qy(c, ...i)]
}
function qy(...r) {
    const i = r[0];
    if (r.length === 1)
        return i;
    const l = () => {
        const a = r.map(c => ({
            useScope: c(),
            scopeName: c.scopeName
        }));
        return function(f) {
            const p = a.reduce( (d, {useScope: h, scopeName: v}) => {
                const w = h(f)[`__scope${v}`];
                return {
                    ...d,
                    ...w
                }
            }
            , {});
            return g.useMemo( () => ({
                [`__scope${i.scopeName}`]: p
            }), [p])
        }
    }
    ;
    return l.scopeName = i.scopeName,
    l
}
function Jy(r) {
    const [i,l] = g.useState(void 0);
    return Ge( () => {
        if (r) {
            l({
                width: r.offsetWidth,
                height: r.offsetHeight
            });
            const a = new ResizeObserver(c => {
                if (!Array.isArray(c) || !c.length)
                    return;
                const f = c[0];
                let p, d;
                if ("borderBoxSize"in f) {
                    const h = f.borderBoxSize
                      , v = Array.isArray(h) ? h[0] : h;
                    p = v.inlineSize,
                    d = v.blockSize
                } else
                    p = r.offsetWidth,
                    d = r.offsetHeight;
                l({
                    width: p,
                    height: d
                })
            }
            );
            return a.observe(r, {
                box: "border-box"
            }),
            () => a.unobserve(r)
        } else
            l(void 0)
    }
    , [r]),
    i
}
var Ga = "Popper"
  , [sp,ci] = Zy(Ga)
  , [ew,ap] = sp(Ga)
  , up = r => {
    const {__scopePopper: i, children: l} = r
      , [a,c] = g.useState(null);
    return L.jsx(ew, {
        scope: i,
        anchor: a,
        onAnchorChange: c,
        children: l
    })
}
;
up.displayName = Ga;
var cp = "PopperAnchor"
  , fp = g.forwardRef( (r, i) => {
    const {__scopePopper: l, virtualRef: a, ...c} = r
      , f = ap(cp, l)
      , p = g.useRef(null)
      , d = Ne(i, p);
    return g.useEffect( () => {
        f.onAnchorChange((a == null ? void 0 : a.current) || p.current)
    }
    ),
    a ? null : L.jsx(Re.div, {
        ...c,
        ref: d
    })
}
);
fp.displayName = cp;
var Za = "PopperContent"
  , [tw,nw] = sp(Za)
  , dp = g.forwardRef( (r, i) => {
    var Q, le, he, ye, Ee, _e;
    const {__scopePopper: l, side: a="bottom", sideOffset: c=0, align: f="center", alignOffset: p=0, arrowPadding: d=0, avoidCollisions: h=!0, collisionBoundary: v=[], collisionPadding: y=0, sticky: w="partial", hideWhenDetached: C=!1, updatePositionStrategy: P="optimized", onPlaced: T, ...S} = r
      , k = ap(Za, l)
      , [O,N] = g.useState(null)
      , M = Ne(i, $e => N($e))
      , [z,V] = g.useState(null)
      , Y = Jy(z)
      , $ = (Y == null ? void 0 : Y.width) ?? 0
      , J = (Y == null ? void 0 : Y.height) ?? 0
      , Z = a + (f !== "center" ? "-" + f : "")
      , re = typeof y == "number" ? y : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...y
    }
      , me = Array.isArray(v) ? v : [v]
      , ee = me.length > 0
      , de = {
        padding: re,
        boundary: me.filter(ow),
        altBoundary: ee
    }
      , {refs: ue, floatingStyles: xe, placement: ie, isPositioned: oe, middlewareData: D} = Wy({
        strategy: "fixed",
        placement: Z,
        whileElementsMounted: (...$e) => Iy(...$e, {
            animationFrame: P === "always"
        }),
        elements: {
            reference: k.anchor
        },
        middleware: [By({
            mainAxis: c + J,
            alignmentAxis: p
        }), h && Uy({
            mainAxis: !0,
            crossAxis: !1,
            limiter: w === "partial" ? $y() : void 0,
            ...de
        }), h && Hy({
            ...de
        }), Ky({
            ...de,
            apply: ({elements: $e, rects: ot, availableWidth: nn, availableHeight: rn}) => {
                const {width: Ut, height: Mo} = ot.reference
                  , on = $e.floating.style;
                on.setProperty("--radix-popper-available-width", `${nn}px`),
                on.setProperty("--radix-popper-available-height", `${rn}px`),
                on.setProperty("--radix-popper-anchor-width", `${Ut}px`),
                on.setProperty("--radix-popper-anchor-height", `${Mo}px`)
            }
        }), z && Qy({
            element: z,
            padding: d
        }), lw({
            arrowWidth: $,
            arrowHeight: J
        }), C && Yy({
            strategy: "referenceHidden",
            ...de
        })]
    })
      , [K,H] = hp(ie)
      , _ = tt(T);
    Ge( () => {
        oe && (_ == null || _())
    }
    , [oe, _]);
    const j = (Q = D.arrow) == null ? void 0 : Q.x
      , pe = (le = D.arrow) == null ? void 0 : le.y
      , fe = ((he = D.arrow) == null ? void 0 : he.centerOffset) !== 0
      , [we,ge] = g.useState();
    return Ge( () => {
        O && ge(window.getComputedStyle(O).zIndex)
    }
    , [O]),
    L.jsx("div", {
        ref: ue.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...xe,
            transform: oe ? xe.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: we,
            "--radix-popper-transform-origin": [(ye = D.transformOrigin) == null ? void 0 : ye.x, (Ee = D.transformOrigin) == null ? void 0 : Ee.y].join(" "),
            ...((_e = D.hide) == null ? void 0 : _e.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: r.dir,
        children: L.jsx(tw, {
            scope: l,
            placedSide: K,
            onArrowChange: V,
            arrowX: j,
            arrowY: pe,
            shouldHideArrow: fe,
            children: L.jsx(Re.div, {
                "data-side": K,
                "data-align": H,
                ...S,
                ref: M,
                style: {
                    ...S.style,
                    animation: oe ? void 0 : "none"
                }
            })
        })
    })
}
);
dp.displayName = Za;
var pp = "PopperArrow"
  , rw = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , mp = g.forwardRef(function(i, l) {
    const {__scopePopper: a, ...c} = i
      , f = nw(pp, a)
      , p = rw[f.placedSide];
    return L.jsx("span", {
        ref: f.onArrowChange,
        style: {
            position: "absolute",
            left: f.arrowX,
            top: f.arrowY,
            [p]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[f.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[f.placedSide],
            visibility: f.shouldHideArrow ? "hidden" : void 0
        },
        children: L.jsx(Gy, {
            ...c,
            ref: l,
            style: {
                ...c.style,
                display: "block"
            }
        })
    })
});
mp.displayName = pp;
function ow(r) {
    return r !== null
}
var lw = r => ({
    name: "transformOrigin",
    options: r,
    fn(i) {
        var k, O, N;
        const {placement: l, rects: a, middlewareData: c} = i
          , p = ((k = c.arrow) == null ? void 0 : k.centerOffset) !== 0
          , d = p ? 0 : r.arrowWidth
          , h = p ? 0 : r.arrowHeight
          , [v,y] = hp(l)
          , w = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[y]
          , C = (((O = c.arrow) == null ? void 0 : O.x) ?? 0) + d / 2
          , P = (((N = c.arrow) == null ? void 0 : N.y) ?? 0) + h / 2;
        let T = ""
          , S = "";
        return v === "bottom" ? (T = p ? w : `${C}px`,
        S = `${-h}px`) : v === "top" ? (T = p ? w : `${C}px`,
        S = `${a.floating.height + h}px`) : v === "right" ? (T = `${-h}px`,
        S = p ? w : `${P}px`) : v === "left" && (T = `${a.floating.width + h}px`,
        S = p ? w : `${P}px`),
        {
            data: {
                x: T,
                y: S
            }
        }
    }
});
function hp(r) {
    const [i,l="center"] = r.split("-");
    return [i, l]
}
var vp = up
  , qa = fp
  , gp = dp
  , yp = mp
  , iw = "Portal"
  , Ja = g.forwardRef( (r, i) => {
    var d;
    const {container: l, ...a} = r
      , [c,f] = g.useState(!1);
    Ge( () => f(!0), []);
    const p = l || c && ((d = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : d.body);
    return p ? Hv.createPortal(L.jsx(Re.div, {
        ...a,
        ref: i
    }), p) : null
}
);
Ja.displayName = iw;
function Ar({prop: r, defaultProp: i, onChange: l= () => {}
}) {
    const [a,c] = sw({
        defaultProp: i,
        onChange: l
    })
      , f = r !== void 0
      , p = f ? r : a
      , d = tt(l)
      , h = g.useCallback(v => {
        if (f) {
            const w = typeof v == "function" ? v(r) : v;
            w !== r && d(w)
        } else
            c(v)
    }
    , [f, r, c, d]);
    return [p, h]
}
function sw({defaultProp: r, onChange: i}) {
    const l = g.useState(r)
      , [a] = l
      , c = g.useRef(a)
      , f = tt(i);
    return g.useEffect( () => {
        c.current !== a && (f(a),
        c.current = a)
    }
    , [a, c, f]),
    l
}
function aw(r) {
    const i = g.useRef({
        value: r,
        previous: r
    });
    return g.useMemo( () => (i.current.value !== r && (i.current.previous = i.current.value,
    i.current.value = r),
    i.current.previous), [r])
}
var uw = "VisuallyHidden"
  , wp = g.forwardRef( (r, i) => L.jsx(Re.span, {
    ...r,
    ref: i,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...r.style
    }
}));
wp.displayName = uw;
var cw = function(r) {
    if (typeof document > "u")
        return null;
    var i = Array.isArray(r) ? r[0] : r;
    return i.ownerDocument.body
}
  , Cr = new WeakMap
  , Hl = new WeakMap
  , Kl = {}
  , Sa = 0
  , Sp = function(r) {
    return r && (r.host || Sp(r.parentNode))
}
  , fw = function(r, i) {
    return i.map(function(l) {
        if (r.contains(l))
            return l;
        var a = Sp(l);
        return a && r.contains(a) ? a : (console.error("aria-hidden", l, "in not contained inside", r, ". Doing nothing"),
        null)
    }).filter(function(l) {
        return !!l
    })
}
  , dw = function(r, i, l, a) {
    var c = fw(i, Array.isArray(r) ? r : [r]);
    Kl[l] || (Kl[l] = new WeakMap);
    var f = Kl[l]
      , p = []
      , d = new Set
      , h = new Set(c)
      , v = function(w) {
        !w || d.has(w) || (d.add(w),
        v(w.parentNode))
    };
    c.forEach(v);
    var y = function(w) {
        !w || h.has(w) || Array.prototype.forEach.call(w.children, function(C) {
            if (d.has(C))
                y(C);
            else
                try {
                    var P = C.getAttribute(a)
                      , T = P !== null && P !== "false"
                      , S = (Cr.get(C) || 0) + 1
                      , k = (f.get(C) || 0) + 1;
                    Cr.set(C, S),
                    f.set(C, k),
                    p.push(C),
                    S === 1 && T && Hl.set(C, !0),
                    k === 1 && C.setAttribute(l, "true"),
                    T || C.setAttribute(a, "true")
                } catch (O) {
                    console.error("aria-hidden: cannot operate on ", C, O)
                }
        })
    };
    return y(i),
    d.clear(),
    Sa++,
    function() {
        p.forEach(function(w) {
            var C = Cr.get(w) - 1
              , P = f.get(w) - 1;
            Cr.set(w, C),
            f.set(w, P),
            C || (Hl.has(w) || w.removeAttribute(a),
            Hl.delete(w)),
            P || w.removeAttribute(l)
        }),
        Sa--,
        Sa || (Cr = new WeakMap,
        Cr = new WeakMap,
        Hl = new WeakMap,
        Kl = {})
    }
}
  , xp = function(r, i, l) {
    l === void 0 && (l = "data-aria-hidden");
    var a = Array.from(Array.isArray(r) ? r : [r])
      , c = cw(r);
    return c ? (a.push.apply(a, Array.from(c.querySelectorAll("[aria-live]"))),
    dw(a, c, l, "aria-hidden")) : function() {
        return null
    }
}
  , Ft = function() {
    return Ft = Object.assign || function(i) {
        for (var l, a = 1, c = arguments.length; a < c; a++) {
            l = arguments[a];
            for (var f in l)
                Object.prototype.hasOwnProperty.call(l, f) && (i[f] = l[f])
        }
        return i
    }
    ,
    Ft.apply(this, arguments)
};
function Cp(r, i) {
    var l = {};
    for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && i.indexOf(a) < 0 && (l[a] = r[a]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function")
        for (var c = 0, a = Object.getOwnPropertySymbols(r); c < a.length; c++)
            i.indexOf(a[c]) < 0 && Object.prototype.propertyIsEnumerable.call(r, a[c]) && (l[a[c]] = r[a[c]]);
    return l
}
function pw(r, i, l) {
    if (l || arguments.length === 2)
        for (var a = 0, c = i.length, f; a < c; a++)
            (f || !(a in i)) && (f || (f = Array.prototype.slice.call(i, 0, a)),
            f[a] = i[a]);
    return r.concat(f || Array.prototype.slice.call(i))
}
var Zl = "right-scroll-bar-position"
  , ql = "width-before-scroll-bar"
  , mw = "with-scroll-bars-hidden"
  , hw = "--removed-body-scroll-bar-size";
function xa(r, i) {
    return typeof r == "function" ? r(i) : r && (r.current = i),
    r
}
function vw(r, i) {
    var l = g.useState(function() {
        return {
            value: r,
            callback: i,
            facade: {
                get current() {
                    return l.value
                },
                set current(a) {
                    var c = l.value;
                    c !== a && (l.value = a,
                    l.callback(a, c))
                }
            }
        }
    })[0];
    return l.callback = i,
    l.facade
}
var gw = typeof window < "u" ? g.useLayoutEffect : g.useEffect
  , Id = new WeakMap;
function yw(r, i) {
    var l = vw(null, function(a) {
        return r.forEach(function(c) {
            return xa(c, a)
        })
    });
    return gw(function() {
        var a = Id.get(l);
        if (a) {
            var c = new Set(a)
              , f = new Set(r)
              , p = l.current;
            c.forEach(function(d) {
                f.has(d) || xa(d, null)
            }),
            f.forEach(function(d) {
                c.has(d) || xa(d, p)
            })
        }
        Id.set(l, r)
    }, [r]),
    l
}
function ww(r) {
    return r
}
function Sw(r, i) {
    i === void 0 && (i = ww);
    var l = []
      , a = !1
      , c = {
        read: function() {
            if (a)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return l.length ? l[l.length - 1] : r
        },
        useMedium: function(f) {
            var p = i(f, a);
            return l.push(p),
            function() {
                l = l.filter(function(d) {
                    return d !== p
                })
            }
        },
        assignSyncMedium: function(f) {
            for (a = !0; l.length; ) {
                var p = l;
                l = [],
                p.forEach(f)
            }
            l = {
                push: function(d) {
                    return f(d)
                },
                filter: function() {
                    return l
                }
            }
        },
        assignMedium: function(f) {
            a = !0;
            var p = [];
            if (l.length) {
                var d = l;
                l = [],
                d.forEach(f),
                p = l
            }
            var h = function() {
                var y = p;
                p = [],
                y.forEach(f)
            }
              , v = function() {
                return Promise.resolve().then(h)
            };
            v(),
            l = {
                push: function(y) {
                    p.push(y),
                    v()
                },
                filter: function(y) {
                    return p = p.filter(y),
                    l
                }
            }
        }
    };
    return c
}
function xw(r) {
    r === void 0 && (r = {});
    var i = Sw(null);
    return i.options = Ft({
        async: !0,
        ssr: !1
    }, r),
    i
}
var Ep = function(r) {
    var i = r.sideCar
      , l = Cp(r, ["sideCar"]);
    if (!i)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var a = i.read();
    if (!a)
        throw new Error("Sidecar medium not found");
    return g.createElement(a, Ft({}, l))
};
Ep.isSideCarExport = !0;
function Cw(r, i) {
    return r.useMedium(i),
    Ep
}
var Pp = xw()
  , Ca = function() {}
  , fi = g.forwardRef(function(r, i) {
    var l = g.useRef(null)
      , a = g.useState({
        onScrollCapture: Ca,
        onWheelCapture: Ca,
        onTouchMoveCapture: Ca
    })
      , c = a[0]
      , f = a[1]
      , p = r.forwardProps
      , d = r.children
      , h = r.className
      , v = r.removeScrollBar
      , y = r.enabled
      , w = r.shards
      , C = r.sideCar
      , P = r.noIsolation
      , T = r.inert
      , S = r.allowPinchZoom
      , k = r.as
      , O = k === void 0 ? "div" : k
      , N = r.gapMode
      , M = Cp(r, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , z = C
      , V = yw([l, i])
      , Y = Ft(Ft({}, M), c);
    return g.createElement(g.Fragment, null, y && g.createElement(z, {
        sideCar: Pp,
        removeScrollBar: v,
        shards: w,
        noIsolation: P,
        inert: T,
        setCallbacks: f,
        allowPinchZoom: !!S,
        lockRef: l,
        gapMode: N
    }), p ? g.cloneElement(g.Children.only(d), Ft(Ft({}, Y), {
        ref: V
    })) : g.createElement(O, Ft({}, Y, {
        className: h,
        ref: V
    }), d))
});
fi.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
fi.classNames = {
    fullWidth: ql,
    zeroRight: Zl
};
var Ew = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function Pw() {
    if (!document)
        return null;
    var r = document.createElement("style");
    r.type = "text/css";
    var i = Ew();
    return i && r.setAttribute("nonce", i),
    r
}
function kw(r, i) {
    r.styleSheet ? r.styleSheet.cssText = i : r.appendChild(document.createTextNode(i))
}
function Rw(r) {
    var i = document.head || document.getElementsByTagName("head")[0];
    i.appendChild(r)
}
var _w = function() {
    var r = 0
      , i = null;
    return {
        add: function(l) {
            r == 0 && (i = Pw()) && (kw(i, l),
            Rw(i)),
            r++
        },
        remove: function() {
            r--,
            !r && i && (i.parentNode && i.parentNode.removeChild(i),
            i = null)
        }
    }
}
  , Tw = function() {
    var r = _w();
    return function(i, l) {
        g.useEffect(function() {
            return r.add(i),
            function() {
                r.remove()
            }
        }, [i && l])
    }
}
  , kp = function() {
    var r = Tw()
      , i = function(l) {
        var a = l.styles
          , c = l.dynamic;
        return r(a, c),
        null
    };
    return i
}
  , Nw = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Ea = function(r) {
    return parseInt(r || "", 10) || 0
}
  , Aw = function(r) {
    var i = window.getComputedStyle(document.body)
      , l = i[r === "padding" ? "paddingLeft" : "marginLeft"]
      , a = i[r === "padding" ? "paddingTop" : "marginTop"]
      , c = i[r === "padding" ? "paddingRight" : "marginRight"];
    return [Ea(l), Ea(a), Ea(c)]
}
  , Ow = function(r) {
    if (r === void 0 && (r = "margin"),
    typeof window > "u")
        return Nw;
    var i = Aw(r)
      , l = document.documentElement.clientWidth
      , a = window.innerWidth;
    return {
        left: i[0],
        top: i[1],
        right: i[2],
        gap: Math.max(0, a - l + i[2] - i[0])
    }
}
  , Iw = kp()
  , _r = "data-scroll-locked"
  , bw = function(r, i, l, a) {
    var c = r.left
      , f = r.top
      , p = r.right
      , d = r.gap;
    return l === void 0 && (l = "margin"),
    `
  .`.concat(mw, ` {
   overflow: hidden `).concat(a, `;
   padding-right: `).concat(d, "px ").concat(a, `;
  }
  body[`).concat(_r, `] {
    overflow: hidden `).concat(a, `;
    overscroll-behavior: contain;
    `).concat([i && "position: relative ".concat(a, ";"), l === "margin" && `
    padding-left: `.concat(c, `px;
    padding-top: `).concat(f, `px;
    padding-right: `).concat(p, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(d, "px ").concat(a, `;
    `), l === "padding" && "padding-right: ".concat(d, "px ").concat(a, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Zl, ` {
    right: `).concat(d, "px ").concat(a, `;
  }
  
  .`).concat(ql, ` {
    margin-right: `).concat(d, "px ").concat(a, `;
  }
  
  .`).concat(Zl, " .").concat(Zl, ` {
    right: 0 `).concat(a, `;
  }
  
  .`).concat(ql, " .").concat(ql, ` {
    margin-right: 0 `).concat(a, `;
  }
  
  body[`).concat(_r, `] {
    `).concat(hw, ": ").concat(d, `px;
  }
`)
}
  , bd = function() {
    var r = parseInt(document.body.getAttribute(_r) || "0", 10);
    return isFinite(r) ? r : 0
}
  , Lw = function() {
    g.useEffect(function() {
        return document.body.setAttribute(_r, (bd() + 1).toString()),
        function() {
            var r = bd() - 1;
            r <= 0 ? document.body.removeAttribute(_r) : document.body.setAttribute(_r, r.toString())
        }
    }, [])
}
  , Mw = function(r) {
    var i = r.noRelative
      , l = r.noImportant
      , a = r.gapMode
      , c = a === void 0 ? "margin" : a;
    Lw();
    var f = g.useMemo(function() {
        return Ow(c)
    }, [c]);
    return g.createElement(Iw, {
        styles: bw(f, !i, c, l ? "" : "!important")
    })
}
  , Ia = !1;
if (typeof window < "u")
    try {
        var Yl = Object.defineProperty({}, "passive", {
            get: function() {
                return Ia = !0,
                !0
            }
        });
        window.addEventListener("test", Yl, Yl),
        window.removeEventListener("test", Yl, Yl)
    } catch {
        Ia = !1
    }
var Er = Ia ? {
    passive: !1
} : !1
  , Dw = function(r) {
    return r.tagName === "TEXTAREA"
}
  , Rp = function(r, i) {
    if (!(r instanceof Element))
        return !1;
    var l = window.getComputedStyle(r);
    return l[i] !== "hidden" && !(l.overflowY === l.overflowX && !Dw(r) && l[i] === "visible")
}
  , zw = function(r) {
    return Rp(r, "overflowY")
}
  , jw = function(r) {
    return Rp(r, "overflowX")
}
  , Ld = function(r, i) {
    var l = i.ownerDocument
      , a = i;
    do {
        typeof ShadowRoot < "u" && a instanceof ShadowRoot && (a = a.host);
        var c = _p(r, a);
        if (c) {
            var f = Tp(r, a)
              , p = f[1]
              , d = f[2];
            if (p > d)
                return !0
        }
        a = a.parentNode
    } while (a && a !== l.body);
    return !1
}
  , Fw = function(r) {
    var i = r.scrollTop
      , l = r.scrollHeight
      , a = r.clientHeight;
    return [i, l, a]
}
  , Ww = function(r) {
    var i = r.scrollLeft
      , l = r.scrollWidth
      , a = r.clientWidth;
    return [i, l, a]
}
  , _p = function(r, i) {
    return r === "v" ? zw(i) : jw(i)
}
  , Tp = function(r, i) {
    return r === "v" ? Fw(i) : Ww(i)
}
  , Vw = function(r, i) {
    return r === "h" && i === "rtl" ? -1 : 1
}
  , Bw = function(r, i, l, a, c) {
    var f = Vw(r, window.getComputedStyle(i).direction)
      , p = f * a
      , d = l.target
      , h = i.contains(d)
      , v = !1
      , y = p > 0
      , w = 0
      , C = 0;
    do {
        var P = Tp(r, d)
          , T = P[0]
          , S = P[1]
          , k = P[2]
          , O = S - k - f * T;
        (T || O) && _p(r, d) && (w += O,
        C += T),
        d instanceof ShadowRoot ? d = d.host : d = d.parentNode
    } while (!h && d !== document.body || h && (i.contains(d) || i === d));
    return (y && Math.abs(w) < 1 || !y && Math.abs(C) < 1) && (v = !0),
    v
}
  , Ql = function(r) {
    return "changedTouches"in r ? [r.changedTouches[0].clientX, r.changedTouches[0].clientY] : [0, 0]
}
  , Md = function(r) {
    return [r.deltaX, r.deltaY]
}
  , Dd = function(r) {
    return r && "current"in r ? r.current : r
}
  , Uw = function(r, i) {
    return r[0] === i[0] && r[1] === i[1]
}
  , $w = function(r) {
    return `
  .block-interactivity-`.concat(r, ` {pointer-events: none;}
  .allow-interactivity-`).concat(r, ` {pointer-events: all;}
`)
}
  , Hw = 0
  , Pr = [];
function Kw(r) {
    var i = g.useRef([])
      , l = g.useRef([0, 0])
      , a = g.useRef()
      , c = g.useState(Hw++)[0]
      , f = g.useState(kp)[0]
      , p = g.useRef(r);
    g.useEffect(function() {
        p.current = r
    }, [r]),
    g.useEffect(function() {
        if (r.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var S = pw([r.lockRef.current], (r.shards || []).map(Dd), !0).filter(Boolean);
            return S.forEach(function(k) {
                return k.classList.add("allow-interactivity-".concat(c))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(c)),
                S.forEach(function(k) {
                    return k.classList.remove("allow-interactivity-".concat(c))
                })
            }
        }
    }, [r.inert, r.lockRef.current, r.shards]);
    var d = g.useCallback(function(S, k) {
        if ("touches"in S && S.touches.length === 2 || S.type === "wheel" && S.ctrlKey)
            return !p.current.allowPinchZoom;
        var O = Ql(S), N = l.current, M = "deltaX"in S ? S.deltaX : N[0] - O[0], z = "deltaY"in S ? S.deltaY : N[1] - O[1], V, Y = S.target, $ = Math.abs(M) > Math.abs(z) ? "h" : "v";
        if ("touches"in S && $ === "h" && Y.type === "range")
            return !1;
        var J = Ld($, Y);
        if (!J)
            return !0;
        if (J ? V = $ : (V = $ === "v" ? "h" : "v",
        J = Ld($, Y)),
        !J)
            return !1;
        if (!a.current && "changedTouches"in S && (M || z) && (a.current = V),
        !V)
            return !0;
        var Z = a.current || V;
        return Bw(Z, k, S, Z === "h" ? M : z)
    }, [])
      , h = g.useCallback(function(S) {
        var k = S;
        if (!(!Pr.length || Pr[Pr.length - 1] !== f)) {
            var O = "deltaY"in k ? Md(k) : Ql(k)
              , N = i.current.filter(function(V) {
                return V.name === k.type && (V.target === k.target || k.target === V.shadowParent) && Uw(V.delta, O)
            })[0];
            if (N && N.should) {
                k.cancelable && k.preventDefault();
                return
            }
            if (!N) {
                var M = (p.current.shards || []).map(Dd).filter(Boolean).filter(function(V) {
                    return V.contains(k.target)
                })
                  , z = M.length > 0 ? d(k, M[0]) : !p.current.noIsolation;
                z && k.cancelable && k.preventDefault()
            }
        }
    }, [])
      , v = g.useCallback(function(S, k, O, N) {
        var M = {
            name: S,
            delta: k,
            target: O,
            should: N,
            shadowParent: Yw(O)
        };
        i.current.push(M),
        setTimeout(function() {
            i.current = i.current.filter(function(z) {
                return z !== M
            })
        }, 1)
    }, [])
      , y = g.useCallback(function(S) {
        l.current = Ql(S),
        a.current = void 0
    }, [])
      , w = g.useCallback(function(S) {
        v(S.type, Md(S), S.target, d(S, r.lockRef.current))
    }, [])
      , C = g.useCallback(function(S) {
        v(S.type, Ql(S), S.target, d(S, r.lockRef.current))
    }, []);
    g.useEffect(function() {
        return Pr.push(f),
        r.setCallbacks({
            onScrollCapture: w,
            onWheelCapture: w,
            onTouchMoveCapture: C
        }),
        document.addEventListener("wheel", h, Er),
        document.addEventListener("touchmove", h, Er),
        document.addEventListener("touchstart", y, Er),
        function() {
            Pr = Pr.filter(function(S) {
                return S !== f
            }),
            document.removeEventListener("wheel", h, Er),
            document.removeEventListener("touchmove", h, Er),
            document.removeEventListener("touchstart", y, Er)
        }
    }, []);
    var P = r.removeScrollBar
      , T = r.inert;
    return g.createElement(g.Fragment, null, T ? g.createElement(f, {
        styles: $w(c)
    }) : null, P ? g.createElement(Mw, {
        gapMode: r.gapMode
    }) : null)
}
function Yw(r) {
    for (var i = null; r !== null; )
        r instanceof ShadowRoot && (i = r.host,
        r = r.host),
        r = r.parentNode;
    return i
}
const Qw = Cw(Pp, Kw);
var eu = g.forwardRef(function(r, i) {
    return g.createElement(fi, Ft({}, r, {
        ref: i,
        sideCar: Qw
    }))
});
eu.classNames = fi.classNames;
var Xw = [" ", "Enter", "ArrowUp", "ArrowDown"]
  , Gw = [" ", "Enter"]
  , bo = "Select"
  , [di,pi,Zw] = Yd(bo)
  , [zr,oS] = Oo(bo, [Zw, ci])
  , mi = ci()
  , [qw,In] = zr(bo)
  , [Jw,e0] = zr(bo)
  , Np = r => {
    const {__scopeSelect: i, children: l, open: a, defaultOpen: c, onOpenChange: f, value: p, defaultValue: d, onValueChange: h, dir: v, name: y, autoComplete: w, disabled: C, required: P, form: T} = r
      , S = mi(i)
      , [k,O] = g.useState(null)
      , [N,M] = g.useState(null)
      , [z,V] = g.useState(!1)
      , Y = Va(v)
      , [$=!1,J] = Ar({
        prop: a,
        defaultProp: c,
        onChange: f
    })
      , [Z,re] = Ar({
        prop: p,
        defaultProp: d,
        onChange: h
    })
      , me = g.useRef(null)
      , ee = k ? T || !!k.closest("form") : !0
      , [de,ue] = g.useState(new Set)
      , xe = Array.from(de).map(ie => ie.props.value).join(";");
    return L.jsx(vp, {
        ...S,
        children: L.jsxs(qw, {
            required: P,
            scope: i,
            trigger: k,
            onTriggerChange: O,
            valueNode: N,
            onValueNodeChange: M,
            valueNodeHasChildren: z,
            onValueNodeHasChildrenChange: V,
            contentId: Lr(),
            value: Z,
            onValueChange: re,
            open: $,
            onOpenChange: J,
            dir: Y,
            triggerPointerDownPosRef: me,
            disabled: C,
            children: [L.jsx(di.Provider, {
                scope: i,
                children: L.jsx(Jw, {
                    scope: r.__scopeSelect,
                    onNativeOptionAdd: g.useCallback(ie => {
                        ue(oe => new Set(oe).add(ie))
                    }
                    , []),
                    onNativeOptionRemove: g.useCallback(ie => {
                        ue(oe => {
                            const D = new Set(oe);
                            return D.delete(ie),
                            D
                        }
                        )
                    }
                    , []),
                    children: l
                })
            }), ee ? L.jsxs(em, {
                "aria-hidden": !0,
                required: P,
                tabIndex: -1,
                name: y,
                autoComplete: w,
                value: Z,
                onChange: ie => re(ie.target.value),
                disabled: C,
                form: T,
                children: [Z === void 0 ? L.jsx("option", {
                    value: ""
                }) : null, Array.from(de)]
            }, xe) : null]
        })
    })
}
;
Np.displayName = bo;
var Ap = "SelectTrigger"
  , Op = g.forwardRef( (r, i) => {
    const {__scopeSelect: l, disabled: a=!1, ...c} = r
      , f = mi(l)
      , p = In(Ap, l)
      , d = p.disabled || a
      , h = Ne(i, p.onTriggerChange)
      , v = pi(l)
      , y = g.useRef("touch")
      , [w,C,P] = tm(S => {
        const k = v().filter(M => !M.disabled)
          , O = k.find(M => M.value === p.value)
          , N = nm(k, S, O);
        N !== void 0 && p.onValueChange(N.value)
    }
    )
      , T = S => {
        d || (p.onOpenChange(!0),
        P()),
        S && (p.triggerPointerDownPosRef.current = {
            x: Math.round(S.pageX),
            y: Math.round(S.pageY)
        })
    }
    ;
    return L.jsx(qa, {
        asChild: !0,
        ...f,
        children: L.jsx(Re.button, {
            type: "button",
            role: "combobox",
            "aria-controls": p.contentId,
            "aria-expanded": p.open,
            "aria-required": p.required,
            "aria-autocomplete": "none",
            dir: p.dir,
            "data-state": p.open ? "open" : "closed",
            disabled: d,
            "data-disabled": d ? "" : void 0,
            "data-placeholder": Jp(p.value) ? "" : void 0,
            ...c,
            ref: h,
            onClick: Ce(c.onClick, S => {
                S.currentTarget.focus(),
                y.current !== "mouse" && T(S)
            }
            ),
            onPointerDown: Ce(c.onPointerDown, S => {
                y.current = S.pointerType;
                const k = S.target;
                k.hasPointerCapture(S.pointerId) && k.releasePointerCapture(S.pointerId),
                S.button === 0 && S.ctrlKey === !1 && S.pointerType === "mouse" && (T(S),
                S.preventDefault())
            }
            ),
            onKeyDown: Ce(c.onKeyDown, S => {
                const k = w.current !== "";
                !(S.ctrlKey || S.altKey || S.metaKey) && S.key.length === 1 && C(S.key),
                !(k && S.key === " ") && Xw.includes(S.key) && (T(),
                S.preventDefault())
            }
            )
        })
    })
}
);
Op.displayName = Ap;
var Ip = "SelectValue"
  , bp = g.forwardRef( (r, i) => {
    const {__scopeSelect: l, className: a, style: c, children: f, placeholder: p="", ...d} = r
      , h = In(Ip, l)
      , {onValueNodeHasChildrenChange: v} = h
      , y = f !== void 0
      , w = Ne(i, h.onValueNodeChange);
    return Ge( () => {
        v(y)
    }
    , [v, y]),
    L.jsx(Re.span, {
        ...d,
        ref: w,
        style: {
            pointerEvents: "none"
        },
        children: Jp(h.value) ? L.jsx(L.Fragment, {
            children: p
        }) : f
    })
}
);
bp.displayName = Ip;
var t0 = "SelectIcon"
  , Lp = g.forwardRef( (r, i) => {
    const {__scopeSelect: l, children: a, ...c} = r;
    return L.jsx(Re.span, {
        "aria-hidden": !0,
        ...c,
        ref: i,
        children: a || "▼"
    })
}
);
Lp.displayName = t0;
var n0 = "SelectPortal"
  , Mp = r => L.jsx(Ja, {
    asChild: !0,
    ...r
});
Mp.displayName = n0;
var Gn = "SelectContent"
  , Dp = g.forwardRef( (r, i) => {
    const l = In(Gn, r.__scopeSelect)
      , [a,c] = g.useState();
    if (Ge( () => {
        c(new DocumentFragment)
    }
    , []),
    !l.open) {
        const f = a;
        return f ? Ao.createPortal(L.jsx(zp, {
            scope: r.__scopeSelect,
            children: L.jsx(di.Slot, {
                scope: r.__scopeSelect,
                children: L.jsx("div", {
                    children: r.children
                })
            })
        }), f) : null
    }
    return L.jsx(jp, {
        ...r,
        ref: i
    })
}
);
Dp.displayName = Gn;
var Ot = 10
  , [zp,bn] = zr(Gn)
  , r0 = "SelectContentImpl"
  , jp = g.forwardRef( (r, i) => {
    const {__scopeSelect: l, position: a="item-aligned", onCloseAutoFocus: c, onEscapeKeyDown: f, onPointerDownOutside: p, side: d, sideOffset: h, align: v, alignOffset: y, arrowPadding: w, collisionBoundary: C, collisionPadding: P, sticky: T, hideWhenDetached: S, avoidCollisions: k, ...O} = r
      , N = In(Gn, l)
      , [M,z] = g.useState(null)
      , [V,Y] = g.useState(null)
      , $ = Ne(i, Q => z(Q))
      , [J,Z] = g.useState(null)
      , [re,me] = g.useState(null)
      , ee = pi(l)
      , [de,ue] = g.useState(!1)
      , xe = g.useRef(!1);
    g.useEffect( () => {
        if (M)
            return xp(M)
    }
    , [M]),
    Gd();
    const ie = g.useCallback(Q => {
        const [le,...he] = ee().map(_e => _e.ref.current)
          , [ye] = he.slice(-1)
          , Ee = document.activeElement;
        for (const _e of Q)
            if (_e === Ee || (_e == null || _e.scrollIntoView({
                block: "nearest"
            }),
            _e === le && V && (V.scrollTop = 0),
            _e === ye && V && (V.scrollTop = V.scrollHeight),
            _e == null || _e.focus(),
            document.activeElement !== Ee))
                return
    }
    , [ee, V])
      , oe = g.useCallback( () => ie([J, M]), [ie, J, M]);
    g.useEffect( () => {
        de && oe()
    }
    , [de, oe]);
    const {onOpenChange: D, triggerPointerDownPosRef: K} = N;
    g.useEffect( () => {
        if (M) {
            let Q = {
                x: 0,
                y: 0
            };
            const le = ye => {
                var Ee, _e;
                Q = {
                    x: Math.abs(Math.round(ye.pageX) - (((Ee = K.current) == null ? void 0 : Ee.x) ?? 0)),
                    y: Math.abs(Math.round(ye.pageY) - (((_e = K.current) == null ? void 0 : _e.y) ?? 0))
                }
            }
              , he = ye => {
                Q.x <= 10 && Q.y <= 10 ? ye.preventDefault() : M.contains(ye.target) || D(!1),
                document.removeEventListener("pointermove", le),
                K.current = null
            }
            ;
            return K.current !== null && (document.addEventListener("pointermove", le),
            document.addEventListener("pointerup", he, {
                capture: !0,
                once: !0
            })),
            () => {
                document.removeEventListener("pointermove", le),
                document.removeEventListener("pointerup", he, {
                    capture: !0
                })
            }
        }
    }
    , [M, D, K]),
    g.useEffect( () => {
        const Q = () => D(!1);
        return window.addEventListener("blur", Q),
        window.addEventListener("resize", Q),
        () => {
            window.removeEventListener("blur", Q),
            window.removeEventListener("resize", Q)
        }
    }
    , [D]);
    const [H,_] = tm(Q => {
        const le = ee().filter(Ee => !Ee.disabled)
          , he = le.find(Ee => Ee.ref.current === document.activeElement)
          , ye = nm(le, Q, he);
        ye && setTimeout( () => ye.ref.current.focus())
    }
    )
      , j = g.useCallback( (Q, le, he) => {
        const ye = !xe.current && !he;
        (N.value !== void 0 && N.value === le || ye) && (Z(Q),
        ye && (xe.current = !0))
    }
    , [N.value])
      , pe = g.useCallback( () => M == null ? void 0 : M.focus(), [M])
      , fe = g.useCallback( (Q, le, he) => {
        const ye = !xe.current && !he;
        (N.value !== void 0 && N.value === le || ye) && me(Q)
    }
    , [N.value])
      , we = a === "popper" ? ba : Fp
      , ge = we === ba ? {
        side: d,
        sideOffset: h,
        align: v,
        alignOffset: y,
        arrowPadding: w,
        collisionBoundary: C,
        collisionPadding: P,
        sticky: T,
        hideWhenDetached: S,
        avoidCollisions: k
    } : {};
    return L.jsx(zp, {
        scope: l,
        content: M,
        viewport: V,
        onViewportChange: Y,
        itemRefCallback: j,
        selectedItem: J,
        onItemLeave: pe,
        itemTextRefCallback: fe,
        focusSelectedItem: oe,
        selectedItemText: re,
        position: a,
        isPositioned: de,
        searchRef: H,
        children: L.jsx(eu, {
            as: Tr,
            allowPinchZoom: !0,
            children: L.jsx(Ua, {
                asChild: !0,
                trapped: N.open,
                onMountAutoFocus: Q => {
                    Q.preventDefault()
                }
                ,
                onUnmountAutoFocus: Ce(c, Q => {
                    var le;
                    (le = N.trigger) == null || le.focus({
                        preventScroll: !0
                    }),
                    Q.preventDefault()
                }
                ),
                children: L.jsx(Ba, {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: f,
                    onPointerDownOutside: p,
                    onFocusOutside: Q => Q.preventDefault(),
                    onDismiss: () => N.onOpenChange(!1),
                    children: L.jsx(we, {
                        role: "listbox",
                        id: N.contentId,
                        "data-state": N.open ? "open" : "closed",
                        dir: N.dir,
                        onContextMenu: Q => Q.preventDefault(),
                        ...O,
                        ...ge,
                        onPlaced: () => ue(!0),
                        ref: $,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ...O.style
                        },
                        onKeyDown: Ce(O.onKeyDown, Q => {
                            const le = Q.ctrlKey || Q.altKey || Q.metaKey;
                            if (Q.key === "Tab" && Q.preventDefault(),
                            !le && Q.key.length === 1 && _(Q.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(Q.key)) {
                                let ye = ee().filter(Ee => !Ee.disabled).map(Ee => Ee.ref.current);
                                if (["ArrowUp", "End"].includes(Q.key) && (ye = ye.slice().reverse()),
                                ["ArrowUp", "ArrowDown"].includes(Q.key)) {
                                    const Ee = Q.target
                                      , _e = ye.indexOf(Ee);
                                    ye = ye.slice(_e + 1)
                                }
                                setTimeout( () => ie(ye)),
                                Q.preventDefault()
                            }
                        }
                        )
                    })
                })
            })
        })
    })
}
);
jp.displayName = r0;
var o0 = "SelectItemAlignedPosition"
  , Fp = g.forwardRef( (r, i) => {
    const {__scopeSelect: l, onPlaced: a, ...c} = r
      , f = In(Gn, l)
      , p = bn(Gn, l)
      , [d,h] = g.useState(null)
      , [v,y] = g.useState(null)
      , w = Ne(i, $ => y($))
      , C = pi(l)
      , P = g.useRef(!1)
      , T = g.useRef(!0)
      , {viewport: S, selectedItem: k, selectedItemText: O, focusSelectedItem: N} = p
      , M = g.useCallback( () => {
        if (f.trigger && f.valueNode && d && v && S && k && O) {
            const $ = f.trigger.getBoundingClientRect()
              , J = v.getBoundingClientRect()
              , Z = f.valueNode.getBoundingClientRect()
              , re = O.getBoundingClientRect();
            if (f.dir !== "rtl") {
                const Ee = re.left - J.left
                  , _e = Z.left - Ee
                  , $e = $.left - _e
                  , ot = $.width + $e
                  , nn = Math.max(ot, J.width)
                  , rn = window.innerWidth - Ot
                  , Ut = Ra(_e, [Ot, Math.max(Ot, rn - nn)]);
                d.style.minWidth = ot + "px",
                d.style.left = Ut + "px"
            } else {
                const Ee = J.right - re.right
                  , _e = window.innerWidth - Z.right - Ee
                  , $e = window.innerWidth - $.right - _e
                  , ot = $.width + $e
                  , nn = Math.max(ot, J.width)
                  , rn = window.innerWidth - Ot
                  , Ut = Ra(_e, [Ot, Math.max(Ot, rn - nn)]);
                d.style.minWidth = ot + "px",
                d.style.right = Ut + "px"
            }
            const me = C()
              , ee = window.innerHeight - Ot * 2
              , de = S.scrollHeight
              , ue = window.getComputedStyle(v)
              , xe = parseInt(ue.borderTopWidth, 10)
              , ie = parseInt(ue.paddingTop, 10)
              , oe = parseInt(ue.borderBottomWidth, 10)
              , D = parseInt(ue.paddingBottom, 10)
              , K = xe + ie + de + D + oe
              , H = Math.min(k.offsetHeight * 5, K)
              , _ = window.getComputedStyle(S)
              , j = parseInt(_.paddingTop, 10)
              , pe = parseInt(_.paddingBottom, 10)
              , fe = $.top + $.height / 2 - Ot
              , we = ee - fe
              , ge = k.offsetHeight / 2
              , Q = k.offsetTop + ge
              , le = xe + ie + Q
              , he = K - le;
            if (le <= fe) {
                const Ee = me.length > 0 && k === me[me.length - 1].ref.current;
                d.style.bottom = "0px";
                const _e = v.clientHeight - S.offsetTop - S.offsetHeight
                  , $e = Math.max(we, ge + (Ee ? pe : 0) + _e + oe)
                  , ot = le + $e;
                d.style.height = ot + "px"
            } else {
                const Ee = me.length > 0 && k === me[0].ref.current;
                d.style.top = "0px";
                const $e = Math.max(fe, xe + S.offsetTop + (Ee ? j : 0) + ge) + he;
                d.style.height = $e + "px",
                S.scrollTop = le - fe + S.offsetTop
            }
            d.style.margin = `${Ot}px 0`,
            d.style.minHeight = H + "px",
            d.style.maxHeight = ee + "px",
            a == null || a(),
            requestAnimationFrame( () => P.current = !0)
        }
    }
    , [C, f.trigger, f.valueNode, d, v, S, k, O, f.dir, a]);
    Ge( () => M(), [M]);
    const [z,V] = g.useState();
    Ge( () => {
        v && V(window.getComputedStyle(v).zIndex)
    }
    , [v]);
    const Y = g.useCallback($ => {
        $ && T.current === !0 && (M(),
        N == null || N(),
        T.current = !1)
    }
    , [M, N]);
    return L.jsx(i0, {
        scope: l,
        contentWrapper: d,
        shouldExpandOnScrollRef: P,
        onScrollButtonChange: Y,
        children: L.jsx("div", {
            ref: h,
            style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: z
            },
            children: L.jsx(Re.div, {
                ...c,
                ref: w,
                style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...c.style
                }
            })
        })
    })
}
);
Fp.displayName = o0;
var l0 = "SelectPopperPosition"
  , ba = g.forwardRef( (r, i) => {
    const {__scopeSelect: l, align: a="start", collisionPadding: c=Ot, ...f} = r
      , p = mi(l);
    return L.jsx(gp, {
        ...p,
        ...f,
        ref: i,
        align: a,
        collisionPadding: c,
        style: {
            boxSizing: "border-box",
            ...f.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
ba.displayName = l0;
var [i0,tu] = zr(Gn, {})
  , La = "SelectViewport"
  , Wp = g.forwardRef( (r, i) => {
    const {__scopeSelect: l, nonce: a, ...c} = r
      , f = bn(La, l)
      , p = tu(La, l)
      , d = Ne(i, f.onViewportChange)
      , h = g.useRef(0);
    return L.jsxs(L.Fragment, {
        children: [L.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: a
        }), L.jsx(di.Slot, {
            scope: l,
            children: L.jsx(Re.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...c,
                ref: d,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...c.style
                },
                onScroll: Ce(c.onScroll, v => {
                    const y = v.currentTarget
                      , {contentWrapper: w, shouldExpandOnScrollRef: C} = p;
                    if (C != null && C.current && w) {
                        const P = Math.abs(h.current - y.scrollTop);
                        if (P > 0) {
                            const T = window.innerHeight - Ot * 2
                              , S = parseFloat(w.style.minHeight)
                              , k = parseFloat(w.style.height)
                              , O = Math.max(S, k);
                            if (O < T) {
                                const N = O + P
                                  , M = Math.min(T, N)
                                  , z = N - M;
                                w.style.height = M + "px",
                                w.style.bottom === "0px" && (y.scrollTop = z > 0 ? z : 0,
                                w.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    h.current = y.scrollTop
                }
                )
            })
        })]
    })
}
);
Wp.displayName = La;
var Vp = "SelectGroup"
  , [s0,a0] = zr(Vp)
  , u0 = g.forwardRef( (r, i) => {
    const {__scopeSelect: l, ...a} = r
      , c = Lr();
    return L.jsx(s0, {
        scope: l,
        id: c,
        children: L.jsx(Re.div, {
            role: "group",
            "aria-labelledby": c,
            ...a,
            ref: i
        })
    })
}
);
u0.displayName = Vp;
var Bp = "SelectLabel"
  , Up = g.forwardRef( (r, i) => {
    const {__scopeSelect: l, ...a} = r
      , c = a0(Bp, l);
    return L.jsx(Re.div, {
        id: c.id,
        ...a,
        ref: i
    })
}
);
Up.displayName = Bp;
var ri = "SelectItem"
  , [c0,$p] = zr(ri)
  , Hp = g.forwardRef( (r, i) => {
    const {__scopeSelect: l, value: a, disabled: c=!1, textValue: f, ...p} = r
      , d = In(ri, l)
      , h = bn(ri, l)
      , v = d.value === a
      , [y,w] = g.useState(f ?? "")
      , [C,P] = g.useState(!1)
      , T = Ne(i, N => {
        var M;
        return (M = h.itemRefCallback) == null ? void 0 : M.call(h, N, a, c)
    }
    )
      , S = Lr()
      , k = g.useRef("touch")
      , O = () => {
        c || (d.onValueChange(a),
        d.onOpenChange(!1))
    }
    ;
    if (a === "")
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return L.jsx(c0, {
        scope: l,
        value: a,
        disabled: c,
        textId: S,
        isSelected: v,
        onItemTextChange: g.useCallback(N => {
            w(M => M || ((N == null ? void 0 : N.textContent) ?? "").trim())
        }
        , []),
        children: L.jsx(di.ItemSlot, {
            scope: l,
            value: a,
            disabled: c,
            textValue: y,
            children: L.jsx(Re.div, {
                role: "option",
                "aria-labelledby": S,
                "data-highlighted": C ? "" : void 0,
                "aria-selected": v && C,
                "data-state": v ? "checked" : "unchecked",
                "aria-disabled": c || void 0,
                "data-disabled": c ? "" : void 0,
                tabIndex: c ? void 0 : -1,
                ...p,
                ref: T,
                onFocus: Ce(p.onFocus, () => P(!0)),
                onBlur: Ce(p.onBlur, () => P(!1)),
                onClick: Ce(p.onClick, () => {
                    k.current !== "mouse" && O()
                }
                ),
                onPointerUp: Ce(p.onPointerUp, () => {
                    k.current === "mouse" && O()
                }
                ),
                onPointerDown: Ce(p.onPointerDown, N => {
                    k.current = N.pointerType
                }
                ),
                onPointerMove: Ce(p.onPointerMove, N => {
                    var M;
                    k.current = N.pointerType,
                    c ? (M = h.onItemLeave) == null || M.call(h) : k.current === "mouse" && N.currentTarget.focus({
                        preventScroll: !0
                    })
                }
                ),
                onPointerLeave: Ce(p.onPointerLeave, N => {
                    var M;
                    N.currentTarget === document.activeElement && ((M = h.onItemLeave) == null || M.call(h))
                }
                ),
                onKeyDown: Ce(p.onKeyDown, N => {
                    var z;
                    ((z = h.searchRef) == null ? void 0 : z.current) !== "" && N.key === " " || (Gw.includes(N.key) && O(),
                    N.key === " " && N.preventDefault())
                }
                )
            })
        })
    })
}
);
Hp.displayName = ri;
var _o = "SelectItemText"
  , Kp = g.forwardRef( (r, i) => {
    const {__scopeSelect: l, className: a, style: c, ...f} = r
      , p = In(_o, l)
      , d = bn(_o, l)
      , h = $p(_o, l)
      , v = e0(_o, l)
      , [y,w] = g.useState(null)
      , C = Ne(i, O => w(O), h.onItemTextChange, O => {
        var N;
        return (N = d.itemTextRefCallback) == null ? void 0 : N.call(d, O, h.value, h.disabled)
    }
    )
      , P = y == null ? void 0 : y.textContent
      , T = g.useMemo( () => L.jsx("option", {
        value: h.value,
        disabled: h.disabled,
        children: P
    }, h.value), [h.disabled, h.value, P])
      , {onNativeOptionAdd: S, onNativeOptionRemove: k} = v;
    return Ge( () => (S(T),
    () => k(T)), [S, k, T]),
    L.jsxs(L.Fragment, {
        children: [L.jsx(Re.span, {
            id: h.textId,
            ...f,
            ref: C
        }), h.isSelected && p.valueNode && !p.valueNodeHasChildren ? Ao.createPortal(f.children, p.valueNode) : null]
    })
}
);
Kp.displayName = _o;
var Yp = "SelectItemIndicator"
  , Qp = g.forwardRef( (r, i) => {
    const {__scopeSelect: l, ...a} = r;
    return $p(Yp, l).isSelected ? L.jsx(Re.span, {
        "aria-hidden": !0,
        ...a,
        ref: i
    }) : null
}
);
Qp.displayName = Yp;
var Ma = "SelectScrollUpButton"
  , Xp = g.forwardRef( (r, i) => {
    const l = bn(Ma, r.__scopeSelect)
      , a = tu(Ma, r.__scopeSelect)
      , [c,f] = g.useState(!1)
      , p = Ne(i, a.onScrollButtonChange);
    return Ge( () => {
        if (l.viewport && l.isPositioned) {
            let d = function() {
                const v = h.scrollTop > 0;
                f(v)
            };
            const h = l.viewport;
            return d(),
            h.addEventListener("scroll", d),
            () => h.removeEventListener("scroll", d)
        }
    }
    , [l.viewport, l.isPositioned]),
    c ? L.jsx(Zp, {
        ...r,
        ref: p,
        onAutoScroll: () => {
            const {viewport: d, selectedItem: h} = l;
            d && h && (d.scrollTop = d.scrollTop - h.offsetHeight)
        }
    }) : null
}
);
Xp.displayName = Ma;
var Da = "SelectScrollDownButton"
  , Gp = g.forwardRef( (r, i) => {
    const l = bn(Da, r.__scopeSelect)
      , a = tu(Da, r.__scopeSelect)
      , [c,f] = g.useState(!1)
      , p = Ne(i, a.onScrollButtonChange);
    return Ge( () => {
        if (l.viewport && l.isPositioned) {
            let d = function() {
                const v = h.scrollHeight - h.clientHeight
                  , y = Math.ceil(h.scrollTop) < v;
                f(y)
            };
            const h = l.viewport;
            return d(),
            h.addEventListener("scroll", d),
            () => h.removeEventListener("scroll", d)
        }
    }
    , [l.viewport, l.isPositioned]),
    c ? L.jsx(Zp, {
        ...r,
        ref: p,
        onAutoScroll: () => {
            const {viewport: d, selectedItem: h} = l;
            d && h && (d.scrollTop = d.scrollTop + h.offsetHeight)
        }
    }) : null
}
);
Gp.displayName = Da;
var Zp = g.forwardRef( (r, i) => {
    const {__scopeSelect: l, onAutoScroll: a, ...c} = r
      , f = bn("SelectScrollButton", l)
      , p = g.useRef(null)
      , d = pi(l)
      , h = g.useCallback( () => {
        p.current !== null && (window.clearInterval(p.current),
        p.current = null)
    }
    , []);
    return g.useEffect( () => () => h(), [h]),
    Ge( () => {
        var y;
        const v = d().find(w => w.ref.current === document.activeElement);
        (y = v == null ? void 0 : v.ref.current) == null || y.scrollIntoView({
            block: "nearest"
        })
    }
    , [d]),
    L.jsx(Re.div, {
        "aria-hidden": !0,
        ...c,
        ref: i,
        style: {
            flexShrink: 0,
            ...c.style
        },
        onPointerDown: Ce(c.onPointerDown, () => {
            p.current === null && (p.current = window.setInterval(a, 50))
        }
        ),
        onPointerMove: Ce(c.onPointerMove, () => {
            var v;
            (v = f.onItemLeave) == null || v.call(f),
            p.current === null && (p.current = window.setInterval(a, 50))
        }
        ),
        onPointerLeave: Ce(c.onPointerLeave, () => {
            h()
        }
        )
    })
}
)
  , f0 = "SelectSeparator"
  , qp = g.forwardRef( (r, i) => {
    const {__scopeSelect: l, ...a} = r;
    return L.jsx(Re.div, {
        "aria-hidden": !0,
        ...a,
        ref: i
    })
}
);
qp.displayName = f0;
var za = "SelectArrow"
  , d0 = g.forwardRef( (r, i) => {
    const {__scopeSelect: l, ...a} = r
      , c = mi(l)
      , f = In(za, l)
      , p = bn(za, l);
    return f.open && p.position === "popper" ? L.jsx(yp, {
        ...c,
        ...a,
        ref: i
    }) : null
}
);
d0.displayName = za;
function Jp(r) {
    return r === "" || r === void 0
}
var em = g.forwardRef( (r, i) => {
    const {value: l, ...a} = r
      , c = g.useRef(null)
      , f = Ne(i, c)
      , p = aw(l);
    return g.useEffect( () => {
        const d = c.current
          , h = window.HTMLSelectElement.prototype
          , y = Object.getOwnPropertyDescriptor(h, "value").set;
        if (p !== l && y) {
            const w = new Event("change",{
                bubbles: !0
            });
            y.call(d, l),
            d.dispatchEvent(w)
        }
    }
    , [p, l]),
    L.jsx(wp, {
        asChild: !0,
        children: L.jsx("select", {
            ...a,
            ref: f,
            defaultValue: l
        })
    })
}
);
em.displayName = "BubbleSelect";
function tm(r) {
    const i = tt(r)
      , l = g.useRef("")
      , a = g.useRef(0)
      , c = g.useCallback(p => {
        const d = l.current + p;
        i(d),
        function h(v) {
            l.current = v,
            window.clearTimeout(a.current),
            v !== "" && (a.current = window.setTimeout( () => h(""), 1e3))
        }(d)
    }
    , [i])
      , f = g.useCallback( () => {
        l.current = "",
        window.clearTimeout(a.current)
    }
    , []);
    return g.useEffect( () => () => window.clearTimeout(a.current), []),
    [l, c, f]
}
function nm(r, i, l) {
    const c = i.length > 1 && Array.from(i).every(v => v === i[0]) ? i[0] : i
      , f = l ? r.indexOf(l) : -1;
    let p = p0(r, Math.max(f, 0));
    c.length === 1 && (p = p.filter(v => v !== l));
    const h = p.find(v => v.textValue.toLowerCase().startsWith(c.toLowerCase()));
    return h !== l ? h : void 0
}
function p0(r, i) {
    return r.map( (l, a) => r[(i + a) % r.length])
}
var lS = Np
  , iS = Op
  , sS = bp
  , aS = Lp
  , uS = Mp
  , cS = Dp
  , fS = Wp
  , dS = Up
  , pS = Hp
  , mS = Kp
  , hS = Qp
  , vS = Xp
  , gS = Gp
  , yS = qp;
function m0(r, i) {
    return g.useReducer( (l, a) => i[l][a] ?? l, r)
}
var Ln = r => {
    const {present: i, children: l} = r
      , a = h0(i)
      , c = typeof l == "function" ? l({
        present: a.isPresent
    }) : g.Children.only(l)
      , f = Ne(a.ref, v0(c));
    return typeof l == "function" || a.isPresent ? g.cloneElement(c, {
        ref: f
    }) : null
}
;
Ln.displayName = "Presence";
function h0(r) {
    const [i,l] = g.useState()
      , a = g.useRef({})
      , c = g.useRef(r)
      , f = g.useRef("none")
      , p = r ? "mounted" : "unmounted"
      , [d,h] = m0(p, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return g.useEffect( () => {
        const v = Xl(a.current);
        f.current = d === "mounted" ? v : "none"
    }
    , [d]),
    Ge( () => {
        const v = a.current
          , y = c.current;
        if (y !== r) {
            const C = f.current
              , P = Xl(v);
            r ? h("MOUNT") : P === "none" || (v == null ? void 0 : v.display) === "none" ? h("UNMOUNT") : h(y && C !== P ? "ANIMATION_OUT" : "UNMOUNT"),
            c.current = r
        }
    }
    , [r, h]),
    Ge( () => {
        if (i) {
            let v;
            const y = i.ownerDocument.defaultView ?? window
              , w = P => {
                const S = Xl(a.current).includes(P.animationName);
                if (P.target === i && S && (h("ANIMATION_END"),
                !c.current)) {
                    const k = i.style.animationFillMode;
                    i.style.animationFillMode = "forwards",
                    v = y.setTimeout( () => {
                        i.style.animationFillMode === "forwards" && (i.style.animationFillMode = k)
                    }
                    )
                }
            }
              , C = P => {
                P.target === i && (f.current = Xl(a.current))
            }
            ;
            return i.addEventListener("animationstart", C),
            i.addEventListener("animationcancel", w),
            i.addEventListener("animationend", w),
            () => {
                y.clearTimeout(v),
                i.removeEventListener("animationstart", C),
                i.removeEventListener("animationcancel", w),
                i.removeEventListener("animationend", w)
            }
        } else
            h("ANIMATION_END")
    }
    , [i, h]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(d),
        ref: g.useCallback(v => {
            v && (a.current = getComputedStyle(v)),
            l(v)
        }
        , [])
    }
}
function Xl(r) {
    return (r == null ? void 0 : r.animationName) || "none"
}
function v0(r) {
    var a, c;
    let i = (a = Object.getOwnPropertyDescriptor(r.props, "ref")) == null ? void 0 : a.get
      , l = i && "isReactWarning"in i && i.isReactWarning;
    return l ? r.ref : (i = (c = Object.getOwnPropertyDescriptor(r, "ref")) == null ? void 0 : c.get,
    l = i && "isReactWarning"in i && i.isReactWarning,
    l ? r.props.ref : r.props.ref || r.ref)
}
var nu = "Popover"
  , [rm,wS] = Oo(nu, [ci])
  , Lo = ci()
  , [g0,Mn] = rm(nu)
  , om = r => {
    const {__scopePopover: i, children: l, open: a, defaultOpen: c, onOpenChange: f, modal: p=!1} = r
      , d = Lo(i)
      , h = g.useRef(null)
      , [v,y] = g.useState(!1)
      , [w=!1,C] = Ar({
        prop: a,
        defaultProp: c,
        onChange: f
    });
    return L.jsx(vp, {
        ...d,
        children: L.jsx(g0, {
            scope: i,
            contentId: Lr(),
            triggerRef: h,
            open: w,
            onOpenChange: C,
            onOpenToggle: g.useCallback( () => C(P => !P), [C]),
            hasCustomAnchor: v,
            onCustomAnchorAdd: g.useCallback( () => y(!0), []),
            onCustomAnchorRemove: g.useCallback( () => y(!1), []),
            modal: p,
            children: l
        })
    })
}
;
om.displayName = nu;
var lm = "PopoverAnchor"
  , y0 = g.forwardRef( (r, i) => {
    const {__scopePopover: l, ...a} = r
      , c = Mn(lm, l)
      , f = Lo(l)
      , {onCustomAnchorAdd: p, onCustomAnchorRemove: d} = c;
    return g.useEffect( () => (p(),
    () => d()), [p, d]),
    L.jsx(qa, {
        ...f,
        ...a,
        ref: i
    })
}
);
y0.displayName = lm;
var im = "PopoverTrigger"
  , sm = g.forwardRef( (r, i) => {
    const {__scopePopover: l, ...a} = r
      , c = Mn(im, l)
      , f = Lo(l)
      , p = Ne(i, c.triggerRef)
      , d = L.jsx(Re.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": c.open,
        "aria-controls": c.contentId,
        "data-state": dm(c.open),
        ...a,
        ref: p,
        onClick: Ce(r.onClick, c.onOpenToggle)
    });
    return c.hasCustomAnchor ? d : L.jsx(qa, {
        asChild: !0,
        ...f,
        children: d
    })
}
);
sm.displayName = im;
var ru = "PopoverPortal"
  , [w0,S0] = rm(ru, {
    forceMount: void 0
})
  , am = r => {
    const {__scopePopover: i, forceMount: l, children: a, container: c} = r
      , f = Mn(ru, i);
    return L.jsx(w0, {
        scope: i,
        forceMount: l,
        children: L.jsx(Ln, {
            present: l || f.open,
            children: L.jsx(Ja, {
                asChild: !0,
                container: c,
                children: a
            })
        })
    })
}
;
am.displayName = ru;
var Or = "PopoverContent"
  , um = g.forwardRef( (r, i) => {
    const l = S0(Or, r.__scopePopover)
      , {forceMount: a=l.forceMount, ...c} = r
      , f = Mn(Or, r.__scopePopover);
    return L.jsx(Ln, {
        present: a || f.open,
        children: f.modal ? L.jsx(x0, {
            ...c,
            ref: i
        }) : L.jsx(C0, {
            ...c,
            ref: i
        })
    })
}
);
um.displayName = Or;
var x0 = g.forwardRef( (r, i) => {
    const l = Mn(Or, r.__scopePopover)
      , a = g.useRef(null)
      , c = Ne(i, a)
      , f = g.useRef(!1);
    return g.useEffect( () => {
        const p = a.current;
        if (p)
            return xp(p)
    }
    , []),
    L.jsx(eu, {
        as: Tr,
        allowPinchZoom: !0,
        children: L.jsx(cm, {
            ...r,
            ref: c,
            trapFocus: l.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Ce(r.onCloseAutoFocus, p => {
                var d;
                p.preventDefault(),
                f.current || (d = l.triggerRef.current) == null || d.focus()
            }
            ),
            onPointerDownOutside: Ce(r.onPointerDownOutside, p => {
                const d = p.detail.originalEvent
                  , h = d.button === 0 && d.ctrlKey === !0
                  , v = d.button === 2 || h;
                f.current = v
            }
            , {
                checkForDefaultPrevented: !1
            }),
            onFocusOutside: Ce(r.onFocusOutside, p => p.preventDefault(), {
                checkForDefaultPrevented: !1
            })
        })
    })
}
)
  , C0 = g.forwardRef( (r, i) => {
    const l = Mn(Or, r.__scopePopover)
      , a = g.useRef(!1)
      , c = g.useRef(!1);
    return L.jsx(cm, {
        ...r,
        ref: i,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: f => {
            var p, d;
            (p = r.onCloseAutoFocus) == null || p.call(r, f),
            f.defaultPrevented || (a.current || (d = l.triggerRef.current) == null || d.focus(),
            f.preventDefault()),
            a.current = !1,
            c.current = !1
        }
        ,
        onInteractOutside: f => {
            var h, v;
            (h = r.onInteractOutside) == null || h.call(r, f),
            f.defaultPrevented || (a.current = !0,
            f.detail.originalEvent.type === "pointerdown" && (c.current = !0));
            const p = f.target;
            ((v = l.triggerRef.current) == null ? void 0 : v.contains(p)) && f.preventDefault(),
            f.detail.originalEvent.type === "focusin" && c.current && f.preventDefault()
        }
    })
}
)
  , cm = g.forwardRef( (r, i) => {
    const {__scopePopover: l, trapFocus: a, onOpenAutoFocus: c, onCloseAutoFocus: f, disableOutsidePointerEvents: p, onEscapeKeyDown: d, onPointerDownOutside: h, onFocusOutside: v, onInteractOutside: y, ...w} = r
      , C = Mn(Or, l)
      , P = Lo(l);
    return Gd(),
    L.jsx(Ua, {
        asChild: !0,
        loop: !0,
        trapped: a,
        onMountAutoFocus: c,
        onUnmountAutoFocus: f,
        children: L.jsx(Ba, {
            asChild: !0,
            disableOutsidePointerEvents: p,
            onInteractOutside: y,
            onEscapeKeyDown: d,
            onPointerDownOutside: h,
            onFocusOutside: v,
            onDismiss: () => C.onOpenChange(!1),
            children: L.jsx(gp, {
                "data-state": dm(C.open),
                role: "dialog",
                id: C.contentId,
                ...P,
                ...w,
                ref: i,
                style: {
                    ...w.style,
                    "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
            })
        })
    })
}
)
  , fm = "PopoverClose"
  , E0 = g.forwardRef( (r, i) => {
    const {__scopePopover: l, ...a} = r
      , c = Mn(fm, l);
    return L.jsx(Re.button, {
        type: "button",
        ...a,
        ref: i,
        onClick: Ce(r.onClick, () => c.onOpenChange(!1))
    })
}
);
E0.displayName = fm;
var P0 = "PopoverArrow"
  , k0 = g.forwardRef( (r, i) => {
    const {__scopePopover: l, ...a} = r
      , c = Lo(l);
    return L.jsx(yp, {
        ...c,
        ...a,
        ref: i
    })
}
);
k0.displayName = P0;
function dm(r) {
    return r ? "open" : "closed"
}
var SS = om
  , xS = sm
  , CS = am
  , ES = um
  , ou = "Collapsible"
  , [R0,pm] = Oo(ou)
  , [_0,lu] = R0(ou)
  , mm = g.forwardRef( (r, i) => {
    const {__scopeCollapsible: l, open: a, defaultOpen: c, disabled: f, onOpenChange: p, ...d} = r
      , [h=!1,v] = Ar({
        prop: a,
        defaultProp: c,
        onChange: p
    });
    return L.jsx(_0, {
        scope: l,
        disabled: f,
        contentId: Lr(),
        open: h,
        onOpenToggle: g.useCallback( () => v(y => !y), [v]),
        children: L.jsx(Re.div, {
            "data-state": su(h),
            "data-disabled": f ? "" : void 0,
            ...d,
            ref: i
        })
    })
}
);
mm.displayName = ou;
var hm = "CollapsibleTrigger"
  , vm = g.forwardRef( (r, i) => {
    const {__scopeCollapsible: l, ...a} = r
      , c = lu(hm, l);
    return L.jsx(Re.button, {
        type: "button",
        "aria-controls": c.contentId,
        "aria-expanded": c.open || !1,
        "data-state": su(c.open),
        "data-disabled": c.disabled ? "" : void 0,
        disabled: c.disabled,
        ...a,
        ref: i,
        onClick: Ce(r.onClick, c.onOpenToggle)
    })
}
);
vm.displayName = hm;
var iu = "CollapsibleContent"
  , gm = g.forwardRef( (r, i) => {
    const {forceMount: l, ...a} = r
      , c = lu(iu, r.__scopeCollapsible);
    return L.jsx(Ln, {
        present: l || c.open,
        children: ({present: f}) => L.jsx(T0, {
            ...a,
            ref: i,
            present: f
        })
    })
}
);
gm.displayName = iu;
var T0 = g.forwardRef( (r, i) => {
    const {__scopeCollapsible: l, present: a, children: c, ...f} = r
      , p = lu(iu, l)
      , [d,h] = g.useState(a)
      , v = g.useRef(null)
      , y = Ne(i, v)
      , w = g.useRef(0)
      , C = w.current
      , P = g.useRef(0)
      , T = P.current
      , S = p.open || d
      , k = g.useRef(S)
      , O = g.useRef();
    return g.useEffect( () => {
        const N = requestAnimationFrame( () => k.current = !1);
        return () => cancelAnimationFrame(N)
    }
    , []),
    Ge( () => {
        const N = v.current;
        if (N) {
            O.current = O.current || {
                transitionDuration: N.style.transitionDuration,
                animationName: N.style.animationName
            },
            N.style.transitionDuration = "0s",
            N.style.animationName = "none";
            const M = N.getBoundingClientRect();
            w.current = M.height,
            P.current = M.width,
            k.current || (N.style.transitionDuration = O.current.transitionDuration,
            N.style.animationName = O.current.animationName),
            h(a)
        }
    }
    , [p.open, a]),
    L.jsx(Re.div, {
        "data-state": su(p.open),
        "data-disabled": p.disabled ? "" : void 0,
        id: p.contentId,
        hidden: !S,
        ...f,
        ref: y,
        style: {
            "--radix-collapsible-content-height": C ? `${C}px` : void 0,
            "--radix-collapsible-content-width": T ? `${T}px` : void 0,
            ...r.style
        },
        children: S && c
    })
}
);
function su(r) {
    return r ? "open" : "closed"
}
var N0 = mm
  , A0 = vm
  , O0 = gm
  , tn = "Accordion"
  , I0 = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]
  , [au,b0,L0] = Yd(tn)
  , [hi,PS] = Oo(tn, [L0, pm])
  , uu = pm()
  , ym = Ve.forwardRef( (r, i) => {
    const {type: l, ...a} = r
      , c = a
      , f = a;
    return L.jsx(au.Provider, {
        scope: r.__scopeAccordion,
        children: l === "multiple" ? L.jsx(j0, {
            ...f,
            ref: i
        }) : L.jsx(z0, {
            ...c,
            ref: i
        })
    })
}
);
ym.displayName = tn;
var [wm,M0] = hi(tn)
  , [Sm,D0] = hi(tn, {
    collapsible: !1
})
  , z0 = Ve.forwardRef( (r, i) => {
    const {value: l, defaultValue: a, onValueChange: c= () => {}
    , collapsible: f=!1, ...p} = r
      , [d,h] = Ar({
        prop: l,
        defaultProp: a,
        onChange: c
    });
    return L.jsx(wm, {
        scope: r.__scopeAccordion,
        value: d ? [d] : [],
        onItemOpen: h,
        onItemClose: Ve.useCallback( () => f && h(""), [f, h]),
        children: L.jsx(Sm, {
            scope: r.__scopeAccordion,
            collapsible: f,
            children: L.jsx(xm, {
                ...p,
                ref: i
            })
        })
    })
}
)
  , j0 = Ve.forwardRef( (r, i) => {
    const {value: l, defaultValue: a, onValueChange: c= () => {}
    , ...f} = r
      , [p=[],d] = Ar({
        prop: l,
        defaultProp: a,
        onChange: c
    })
      , h = Ve.useCallback(y => d( (w=[]) => [...w, y]), [d])
      , v = Ve.useCallback(y => d( (w=[]) => w.filter(C => C !== y)), [d]);
    return L.jsx(wm, {
        scope: r.__scopeAccordion,
        value: p,
        onItemOpen: h,
        onItemClose: v,
        children: L.jsx(Sm, {
            scope: r.__scopeAccordion,
            collapsible: !0,
            children: L.jsx(xm, {
                ...f,
                ref: i
            })
        })
    })
}
)
  , [F0,vi] = hi(tn)
  , xm = Ve.forwardRef( (r, i) => {
    const {__scopeAccordion: l, disabled: a, dir: c, orientation: f="vertical", ...p} = r
      , d = Ve.useRef(null)
      , h = Ne(d, i)
      , v = b0(l)
      , w = Va(c) === "ltr"
      , C = Ce(r.onKeyDown, P => {
        var J;
        if (!I0.includes(P.key))
            return;
        const T = P.target
          , S = v().filter(Z => {
            var re;
            return !((re = Z.ref.current) != null && re.disabled)
        }
        )
          , k = S.findIndex(Z => Z.ref.current === T)
          , O = S.length;
        if (k === -1)
            return;
        P.preventDefault();
        let N = k;
        const M = 0
          , z = O - 1
          , V = () => {
            N = k + 1,
            N > z && (N = M)
        }
          , Y = () => {
            N = k - 1,
            N < M && (N = z)
        }
        ;
        switch (P.key) {
        case "Home":
            N = M;
            break;
        case "End":
            N = z;
            break;
        case "ArrowRight":
            f === "horizontal" && (w ? V() : Y());
            break;
        case "ArrowDown":
            f === "vertical" && V();
            break;
        case "ArrowLeft":
            f === "horizontal" && (w ? Y() : V());
            break;
        case "ArrowUp":
            f === "vertical" && Y();
            break
        }
        const $ = N % O;
        (J = S[$].ref.current) == null || J.focus()
    }
    );
    return L.jsx(F0, {
        scope: l,
        disabled: a,
        direction: c,
        orientation: f,
        children: L.jsx(au.Slot, {
            scope: l,
            children: L.jsx(Re.div, {
                ...p,
                "data-orientation": f,
                ref: h,
                onKeyDown: a ? void 0 : C
            })
        })
    })
}
)
  , oi = "AccordionItem"
  , [W0,cu] = hi(oi)
  , Cm = Ve.forwardRef( (r, i) => {
    const {__scopeAccordion: l, value: a, ...c} = r
      , f = vi(oi, l)
      , p = M0(oi, l)
      , d = uu(l)
      , h = Lr()
      , v = a && p.value.includes(a) || !1
      , y = f.disabled || r.disabled;
    return L.jsx(W0, {
        scope: l,
        open: v,
        disabled: y,
        triggerId: h,
        children: L.jsx(N0, {
            "data-orientation": f.orientation,
            "data-state": Tm(v),
            ...d,
            ...c,
            ref: i,
            disabled: y,
            open: v,
            onOpenChange: w => {
                w ? p.onItemOpen(a) : p.onItemClose(a)
            }
        })
    })
}
);
Cm.displayName = oi;
var Em = "AccordionHeader"
  , Pm = Ve.forwardRef( (r, i) => {
    const {__scopeAccordion: l, ...a} = r
      , c = vi(tn, l)
      , f = cu(Em, l);
    return L.jsx(Re.h3, {
        "data-orientation": c.orientation,
        "data-state": Tm(f.open),
        "data-disabled": f.disabled ? "" : void 0,
        ...a,
        ref: i
    })
}
);
Pm.displayName = Em;
var ja = "AccordionTrigger"
  , km = Ve.forwardRef( (r, i) => {
    const {__scopeAccordion: l, ...a} = r
      , c = vi(tn, l)
      , f = cu(ja, l)
      , p = D0(ja, l)
      , d = uu(l);
    return L.jsx(au.ItemSlot, {
        scope: l,
        children: L.jsx(A0, {
            "aria-disabled": f.open && !p.collapsible || void 0,
            "data-orientation": c.orientation,
            id: f.triggerId,
            ...d,
            ...a,
            ref: i
        })
    })
}
);
km.displayName = ja;
var Rm = "AccordionContent"
  , _m = Ve.forwardRef( (r, i) => {
    const {__scopeAccordion: l, ...a} = r
      , c = vi(tn, l)
      , f = cu(Rm, l)
      , p = uu(l);
    return L.jsx(O0, {
        role: "region",
        "aria-labelledby": f.triggerId,
        "data-orientation": c.orientation,
        ...p,
        ...a,
        ref: i,
        style: {
            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
            ...r.style
        }
    })
}
);
_m.displayName = Rm;
function Tm(r) {
    return r ? "open" : "closed"
}
var kS = ym
  , RS = Cm
  , _S = Pm
  , TS = km
  , NS = _m;
function V0(r, i) {
    return g.useReducer( (l, a) => i[l][a] ?? l, r)
}
var fu = "ScrollArea"
  , [Nm,AS] = Oo(fu)
  , [B0,Et] = Nm(fu)
  , Am = g.forwardRef( (r, i) => {
    const {__scopeScrollArea: l, type: a="hover", dir: c, scrollHideDelay: f=600, ...p} = r
      , [d,h] = g.useState(null)
      , [v,y] = g.useState(null)
      , [w,C] = g.useState(null)
      , [P,T] = g.useState(null)
      , [S,k] = g.useState(null)
      , [O,N] = g.useState(0)
      , [M,z] = g.useState(0)
      , [V,Y] = g.useState(!1)
      , [$,J] = g.useState(!1)
      , Z = Ne(i, me => h(me))
      , re = Va(c);
    return L.jsx(B0, {
        scope: l,
        type: a,
        dir: re,
        scrollHideDelay: f,
        scrollArea: d,
        viewport: v,
        onViewportChange: y,
        content: w,
        onContentChange: C,
        scrollbarX: P,
        onScrollbarXChange: T,
        scrollbarXEnabled: V,
        onScrollbarXEnabledChange: Y,
        scrollbarY: S,
        onScrollbarYChange: k,
        scrollbarYEnabled: $,
        onScrollbarYEnabledChange: J,
        onCornerWidthChange: N,
        onCornerHeightChange: z,
        children: L.jsx(Re.div, {
            dir: re,
            ...p,
            ref: Z,
            style: {
                position: "relative",
                "--radix-scroll-area-corner-width": O + "px",
                "--radix-scroll-area-corner-height": M + "px",
                ...r.style
            }
        })
    })
}
);
Am.displayName = fu;
var Om = "ScrollAreaViewport"
  , Im = g.forwardRef( (r, i) => {
    const {__scopeScrollArea: l, children: a, asChild: c, nonce: f, ...p} = r
      , d = Et(Om, l)
      , h = g.useRef(null)
      , v = Ne(i, h, d.onViewportChange);
    return L.jsxs(L.Fragment, {
        children: [L.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
[data-radix-scroll-area-viewport] {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
[data-radix-scroll-area-viewport]::-webkit-scrollbar {
  display: none;
}
:where([data-radix-scroll-area-viewport]) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
:where([data-radix-scroll-area-content]) {
  flex-grow: 1;
}
`
            },
            nonce: f
        }), L.jsx(Re.div, {
            "data-radix-scroll-area-viewport": "",
            ...p,
            asChild: c,
            ref: v,
            style: {
                overflowX: d.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: d.scrollbarYEnabled ? "scroll" : "hidden",
                ...r.style
            },
            children: eS({
                asChild: c,
                children: a
            }, y => L.jsx("div", {
                "data-radix-scroll-area-content": "",
                ref: d.onContentChange,
                style: {
                    minWidth: d.scrollbarXEnabled ? "fit-content" : void 0
                },
                children: y
            }))
        })]
    })
}
);
Im.displayName = Om;
var Bt = "ScrollAreaScrollbar"
  , U0 = g.forwardRef( (r, i) => {
    const {forceMount: l, ...a} = r
      , c = Et(Bt, r.__scopeScrollArea)
      , {onScrollbarXEnabledChange: f, onScrollbarYEnabledChange: p} = c
      , d = r.orientation === "horizontal";
    return g.useEffect( () => (d ? f(!0) : p(!0),
    () => {
        d ? f(!1) : p(!1)
    }
    ), [d, f, p]),
    c.type === "hover" ? L.jsx($0, {
        ...a,
        ref: i,
        forceMount: l
    }) : c.type === "scroll" ? L.jsx(H0, {
        ...a,
        ref: i,
        forceMount: l
    }) : c.type === "auto" ? L.jsx(bm, {
        ...a,
        ref: i,
        forceMount: l
    }) : c.type === "always" ? L.jsx(du, {
        ...a,
        ref: i
    }) : null
}
);
U0.displayName = Bt;
var $0 = g.forwardRef( (r, i) => {
    const {forceMount: l, ...a} = r
      , c = Et(Bt, r.__scopeScrollArea)
      , [f,p] = g.useState(!1);
    return g.useEffect( () => {
        const d = c.scrollArea;
        let h = 0;
        if (d) {
            const v = () => {
                window.clearTimeout(h),
                p(!0)
            }
              , y = () => {
                h = window.setTimeout( () => p(!1), c.scrollHideDelay)
            }
            ;
            return d.addEventListener("pointerenter", v),
            d.addEventListener("pointerleave", y),
            () => {
                window.clearTimeout(h),
                d.removeEventListener("pointerenter", v),
                d.removeEventListener("pointerleave", y)
            }
        }
    }
    , [c.scrollArea, c.scrollHideDelay]),
    L.jsx(Ln, {
        present: l || f,
        children: L.jsx(bm, {
            "data-state": f ? "visible" : "hidden",
            ...a,
            ref: i
        })
    })
}
)
  , H0 = g.forwardRef( (r, i) => {
    const {forceMount: l, ...a} = r
      , c = Et(Bt, r.__scopeScrollArea)
      , f = r.orientation === "horizontal"
      , p = yi( () => h("SCROLL_END"), 100)
      , [d,h] = V0("hidden", {
        hidden: {
            SCROLL: "scrolling"
        },
        scrolling: {
            SCROLL_END: "idle",
            POINTER_ENTER: "interacting"
        },
        interacting: {
            SCROLL: "interacting",
            POINTER_LEAVE: "idle"
        },
        idle: {
            HIDE: "hidden",
            SCROLL: "scrolling",
            POINTER_ENTER: "interacting"
        }
    });
    return g.useEffect( () => {
        if (d === "idle") {
            const v = window.setTimeout( () => h("HIDE"), c.scrollHideDelay);
            return () => window.clearTimeout(v)
        }
    }
    , [d, c.scrollHideDelay, h]),
    g.useEffect( () => {
        const v = c.viewport
          , y = f ? "scrollLeft" : "scrollTop";
        if (v) {
            let w = v[y];
            const C = () => {
                const P = v[y];
                w !== P && (h("SCROLL"),
                p()),
                w = P
            }
            ;
            return v.addEventListener("scroll", C),
            () => v.removeEventListener("scroll", C)
        }
    }
    , [c.viewport, f, h, p]),
    L.jsx(Ln, {
        present: l || d !== "hidden",
        children: L.jsx(du, {
            "data-state": d === "hidden" ? "hidden" : "visible",
            ...a,
            ref: i,
            onPointerEnter: Ce(r.onPointerEnter, () => h("POINTER_ENTER")),
            onPointerLeave: Ce(r.onPointerLeave, () => h("POINTER_LEAVE"))
        })
    })
}
)
  , bm = g.forwardRef( (r, i) => {
    const l = Et(Bt, r.__scopeScrollArea)
      , {forceMount: a, ...c} = r
      , [f,p] = g.useState(!1)
      , d = r.orientation === "horizontal"
      , h = yi( () => {
        if (l.viewport) {
            const v = l.viewport.offsetWidth < l.viewport.scrollWidth
              , y = l.viewport.offsetHeight < l.viewport.scrollHeight;
            p(d ? v : y)
        }
    }
    , 10);
    return Ir(l.viewport, h),
    Ir(l.content, h),
    L.jsx(Ln, {
        present: a || f,
        children: L.jsx(du, {
            "data-state": f ? "visible" : "hidden",
            ...c,
            ref: i
        })
    })
}
)
  , du = g.forwardRef( (r, i) => {
    const {orientation: l="vertical", ...a} = r
      , c = Et(Bt, r.__scopeScrollArea)
      , f = g.useRef(null)
      , p = g.useRef(0)
      , [d,h] = g.useState({
        content: 0,
        viewport: 0,
        scrollbar: {
            size: 0,
            paddingStart: 0,
            paddingEnd: 0
        }
    })
      , v = zm(d.viewport, d.content)
      , y = {
        ...a,
        sizes: d,
        onSizesChange: h,
        hasThumb: v > 0 && v < 1,
        onThumbChange: C => f.current = C,
        onThumbPointerUp: () => p.current = 0,
        onThumbPointerDown: C => p.current = C
    };
    function w(C, P) {
        return q0(C, p.current, d, P)
    }
    return l === "horizontal" ? L.jsx(K0, {
        ...y,
        ref: i,
        onThumbPositionChange: () => {
            if (c.viewport && f.current) {
                const C = c.viewport.scrollLeft
                  , P = zd(C, d, c.dir);
                f.current.style.transform = `translate3d(${P}px, 0, 0)`
            }
        }
        ,
        onWheelScroll: C => {
            c.viewport && (c.viewport.scrollLeft = C)
        }
        ,
        onDragScroll: C => {
            c.viewport && (c.viewport.scrollLeft = w(C, c.dir))
        }
    }) : l === "vertical" ? L.jsx(Y0, {
        ...y,
        ref: i,
        onThumbPositionChange: () => {
            if (c.viewport && f.current) {
                const C = c.viewport.scrollTop
                  , P = zd(C, d);
                f.current.style.transform = `translate3d(0, ${P}px, 0)`
            }
        }
        ,
        onWheelScroll: C => {
            c.viewport && (c.viewport.scrollTop = C)
        }
        ,
        onDragScroll: C => {
            c.viewport && (c.viewport.scrollTop = w(C))
        }
    }) : null
}
)
  , K0 = g.forwardRef( (r, i) => {
    const {sizes: l, onSizesChange: a, ...c} = r
      , f = Et(Bt, r.__scopeScrollArea)
      , [p,d] = g.useState()
      , h = g.useRef(null)
      , v = Ne(i, h, f.onScrollbarXChange);
    return g.useEffect( () => {
        h.current && d(getComputedStyle(h.current))
    }
    , [h]),
    L.jsx(Mm, {
        "data-orientation": "horizontal",
        ...c,
        ref: v,
        sizes: l,
        style: {
            bottom: 0,
            left: f.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right: f.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            "--radix-scroll-area-thumb-width": gi(l) + "px",
            ...r.style
        },
        onThumbPointerDown: y => r.onThumbPointerDown(y.x),
        onDragScroll: y => r.onDragScroll(y.x),
        onWheelScroll: (y, w) => {
            if (f.viewport) {
                const C = f.viewport.scrollLeft + y.deltaX;
                r.onWheelScroll(C),
                Fm(C, w) && y.preventDefault()
            }
        }
        ,
        onResize: () => {
            h.current && f.viewport && p && a({
                content: f.viewport.scrollWidth,
                viewport: f.viewport.offsetWidth,
                scrollbar: {
                    size: h.current.clientWidth,
                    paddingStart: ii(p.paddingLeft),
                    paddingEnd: ii(p.paddingRight)
                }
            })
        }
    })
}
)
  , Y0 = g.forwardRef( (r, i) => {
    const {sizes: l, onSizesChange: a, ...c} = r
      , f = Et(Bt, r.__scopeScrollArea)
      , [p,d] = g.useState()
      , h = g.useRef(null)
      , v = Ne(i, h, f.onScrollbarYChange);
    return g.useEffect( () => {
        h.current && d(getComputedStyle(h.current))
    }
    , [h]),
    L.jsx(Mm, {
        "data-orientation": "vertical",
        ...c,
        ref: v,
        sizes: l,
        style: {
            top: 0,
            right: f.dir === "ltr" ? 0 : void 0,
            left: f.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            "--radix-scroll-area-thumb-height": gi(l) + "px",
            ...r.style
        },
        onThumbPointerDown: y => r.onThumbPointerDown(y.y),
        onDragScroll: y => r.onDragScroll(y.y),
        onWheelScroll: (y, w) => {
            if (f.viewport) {
                const C = f.viewport.scrollTop + y.deltaY;
                r.onWheelScroll(C),
                Fm(C, w) && y.preventDefault()
            }
        }
        ,
        onResize: () => {
            h.current && f.viewport && p && a({
                content: f.viewport.scrollHeight,
                viewport: f.viewport.offsetHeight,
                scrollbar: {
                    size: h.current.clientHeight,
                    paddingStart: ii(p.paddingTop),
                    paddingEnd: ii(p.paddingBottom)
                }
            })
        }
    })
}
)
  , [Q0,Lm] = Nm(Bt)
  , Mm = g.forwardRef( (r, i) => {
    const {__scopeScrollArea: l, sizes: a, hasThumb: c, onThumbChange: f, onThumbPointerUp: p, onThumbPointerDown: d, onThumbPositionChange: h, onDragScroll: v, onWheelScroll: y, onResize: w, ...C} = r
      , P = Et(Bt, l)
      , [T,S] = g.useState(null)
      , k = Ne(i, Z => S(Z))
      , O = g.useRef(null)
      , N = g.useRef("")
      , M = P.viewport
      , z = a.content - a.viewport
      , V = tt(y)
      , Y = tt(h)
      , $ = yi(w, 10);
    function J(Z) {
        if (O.current) {
            const re = Z.clientX - O.current.left
              , me = Z.clientY - O.current.top;
            v({
                x: re,
                y: me
            })
        }
    }
    return g.useEffect( () => {
        const Z = re => {
            const me = re.target;
            (T == null ? void 0 : T.contains(me)) && V(re, z)
        }
        ;
        return document.addEventListener("wheel", Z, {
            passive: !1
        }),
        () => document.removeEventListener("wheel", Z, {
            passive: !1
        })
    }
    , [M, T, z, V]),
    g.useEffect(Y, [a, Y]),
    Ir(T, $),
    Ir(P.content, $),
    L.jsx(Q0, {
        scope: l,
        scrollbar: T,
        hasThumb: c,
        onThumbChange: tt(f),
        onThumbPointerUp: tt(p),
        onThumbPositionChange: Y,
        onThumbPointerDown: tt(d),
        children: L.jsx(Re.div, {
            ...C,
            ref: k,
            style: {
                position: "absolute",
                ...C.style
            },
            onPointerDown: Ce(r.onPointerDown, Z => {
                Z.button === 0 && (Z.target.setPointerCapture(Z.pointerId),
                O.current = T.getBoundingClientRect(),
                N.current = document.body.style.webkitUserSelect,
                document.body.style.webkitUserSelect = "none",
                P.viewport && (P.viewport.style.scrollBehavior = "auto"),
                J(Z))
            }
            ),
            onPointerMove: Ce(r.onPointerMove, J),
            onPointerUp: Ce(r.onPointerUp, Z => {
                const re = Z.target;
                re.hasPointerCapture(Z.pointerId) && re.releasePointerCapture(Z.pointerId),
                document.body.style.webkitUserSelect = N.current,
                P.viewport && (P.viewport.style.scrollBehavior = ""),
                O.current = null
            }
            )
        })
    })
}
)
  , li = "ScrollAreaThumb"
  , X0 = g.forwardRef( (r, i) => {
    const {forceMount: l, ...a} = r
      , c = Lm(li, r.__scopeScrollArea);
    return L.jsx(Ln, {
        present: l || c.hasThumb,
        children: L.jsx(G0, {
            ref: i,
            ...a
        })
    })
}
)
  , G0 = g.forwardRef( (r, i) => {
    const {__scopeScrollArea: l, style: a, ...c} = r
      , f = Et(li, l)
      , p = Lm(li, l)
      , {onThumbPositionChange: d} = p
      , h = Ne(i, w => p.onThumbChange(w))
      , v = g.useRef()
      , y = yi( () => {
        v.current && (v.current(),
        v.current = void 0)
    }
    , 100);
    return g.useEffect( () => {
        const w = f.viewport;
        if (w) {
            const C = () => {
                if (y(),
                !v.current) {
                    const P = J0(w, d);
                    v.current = P,
                    d()
                }
            }
            ;
            return d(),
            w.addEventListener("scroll", C),
            () => w.removeEventListener("scroll", C)
        }
    }
    , [f.viewport, y, d]),
    L.jsx(Re.div, {
        "data-state": p.hasThumb ? "visible" : "hidden",
        ...c,
        ref: h,
        style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...a
        },
        onPointerDownCapture: Ce(r.onPointerDownCapture, w => {
            const P = w.target.getBoundingClientRect()
              , T = w.clientX - P.left
              , S = w.clientY - P.top;
            p.onThumbPointerDown({
                x: T,
                y: S
            })
        }
        ),
        onPointerUp: Ce(r.onPointerUp, p.onThumbPointerUp)
    })
}
);
X0.displayName = li;
var pu = "ScrollAreaCorner"
  , Dm = g.forwardRef( (r, i) => {
    const l = Et(pu, r.__scopeScrollArea)
      , a = !!(l.scrollbarX && l.scrollbarY);
    return l.type !== "scroll" && a ? L.jsx(Z0, {
        ...r,
        ref: i
    }) : null
}
);
Dm.displayName = pu;
var Z0 = g.forwardRef( (r, i) => {
    const {__scopeScrollArea: l, ...a} = r
      , c = Et(pu, l)
      , [f,p] = g.useState(0)
      , [d,h] = g.useState(0)
      , v = !!(f && d);
    return Ir(c.scrollbarX, () => {
        var w;
        const y = ((w = c.scrollbarX) == null ? void 0 : w.offsetHeight) || 0;
        c.onCornerHeightChange(y),
        h(y)
    }
    ),
    Ir(c.scrollbarY, () => {
        var w;
        const y = ((w = c.scrollbarY) == null ? void 0 : w.offsetWidth) || 0;
        c.onCornerWidthChange(y),
        p(y)
    }
    ),
    v ? L.jsx(Re.div, {
        ...a,
        ref: i,
        style: {
            width: f,
            height: d,
            position: "absolute",
            right: c.dir === "ltr" ? 0 : void 0,
            left: c.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...r.style
        }
    }) : null
}
);
function ii(r) {
    return r ? parseInt(r, 10) : 0
}
function zm(r, i) {
    const l = r / i;
    return isNaN(l) ? 0 : l
}
function gi(r) {
    const i = zm(r.viewport, r.content)
      , l = r.scrollbar.paddingStart + r.scrollbar.paddingEnd
      , a = (r.scrollbar.size - l) * i;
    return Math.max(a, 18)
}
function q0(r, i, l, a="ltr") {
    const c = gi(l)
      , f = c / 2
      , p = i || f
      , d = c - p
      , h = l.scrollbar.paddingStart + p
      , v = l.scrollbar.size - l.scrollbar.paddingEnd - d
      , y = l.content - l.viewport
      , w = a === "ltr" ? [0, y] : [y * -1, 0];
    return jm([h, v], w)(r)
}
function zd(r, i, l="ltr") {
    const a = gi(i)
      , c = i.scrollbar.paddingStart + i.scrollbar.paddingEnd
      , f = i.scrollbar.size - c
      , p = i.content - i.viewport
      , d = f - a
      , h = l === "ltr" ? [0, p] : [p * -1, 0]
      , v = Ra(r, h);
    return jm([0, p], [0, d])(v)
}
function jm(r, i) {
    return l => {
        if (r[0] === r[1] || i[0] === i[1])
            return i[0];
        const a = (i[1] - i[0]) / (r[1] - r[0]);
        return i[0] + a * (l - r[0])
    }
}
function Fm(r, i) {
    return r > 0 && r < i
}
var J0 = (r, i= () => {}
) => {
    let l = {
        left: r.scrollLeft,
        top: r.scrollTop
    }
      , a = 0;
    return function c() {
        const f = {
            left: r.scrollLeft,
            top: r.scrollTop
        }
          , p = l.left !== f.left
          , d = l.top !== f.top;
        (p || d) && i(),
        l = f,
        a = window.requestAnimationFrame(c)
    }(),
    () => window.cancelAnimationFrame(a)
}
;
function yi(r, i) {
    const l = tt(r)
      , a = g.useRef(0);
    return g.useEffect( () => () => window.clearTimeout(a.current), []),
    g.useCallback( () => {
        window.clearTimeout(a.current),
        a.current = window.setTimeout(l, i)
    }
    , [l, i])
}
function Ir(r, i) {
    const l = tt(i);
    Ge( () => {
        let a = 0;
        if (r) {
            const c = new ResizeObserver( () => {
                cancelAnimationFrame(a),
                a = window.requestAnimationFrame(l)
            }
            );
            return c.observe(r),
            () => {
                window.cancelAnimationFrame(a),
                c.unobserve(r)
            }
        }
    }
    , [r, l])
}
function eS(r, i) {
    const {asChild: l, children: a} = r;
    if (!l)
        return typeof i == "function" ? i(a) : i;
    const c = g.Children.only(a);
    return g.cloneElement(c, {
        children: typeof i == "function" ? i(c.props.children) : i
    })
}
var OS = Am
  , IS = Im
  , bS = Dm;
export {kS as A, OS as B, cS as C, IS as D, bS as E, U0 as F, X0 as G, _S as H, aS as I, dS as L, uS as P, Ve as R, Tr as S, iS as T, fS as V, Ao as a, Wv as b, Fa as c, Hv as d, $v as e, tS as f, jd as g, rS as h, vS as i, L as j, gS as k, pS as l, hS as m, mS as n, yS as o, lS as p, sS as q, g as r, CS as s, nS as t, ES as u, SS as v, xS as w, RS as x, TS as y, NS as z};
