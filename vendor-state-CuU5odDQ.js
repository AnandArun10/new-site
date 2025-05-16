var Je = Object.defineProperty;
var Ye = (e, t, r) => t in e ? Je(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var Z = (e, t, r) => Ye(e, typeof t != "symbol" ? t + "" : t, r);
import {c as Ze, R as et, b as me} from "./vendor-ui-CO2oigVm.js";
var ee = {
    exports: {}
}
  , te = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function tt() {
    if (we)
        return te;
    we = 1;
    var e = Ze();
    function t(s, a) {
        return s === a && (s !== 0 || 1 / s === 1 / a) || s !== s && a !== a
    }
    var r = typeof Object.is == "function" ? Object.is : t
      , n = e.useSyncExternalStore
      , i = e.useRef
      , o = e.useEffect
      , u = e.useMemo
      , c = e.useDebugValue;
    return te.useSyncExternalStoreWithSelector = function(s, a, f, l, d) {
        var p = i(null);
        if (p.current === null) {
            var y = {
                hasValue: !1,
                value: null
            };
            p.current = y
        } else
            y = p.current;
        p = u(function() {
            function h(b) {
                if (!E) {
                    if (E = !0,
                    v = b,
                    b = l(b),
                    d !== void 0 && y.hasValue) {
                        var g = y.value;
                        if (d(g, b))
                            return m = g
                    }
                    return m = b
                }
                if (g = m,
                r(v, b))
                    return g;
                var R = l(b);
                return d !== void 0 && d(g, R) ? g : (v = b,
                m = R)
            }
            var E = !1, v, m, w = f === void 0 ? null : f;
            return [function() {
                return h(a())
            }
            , w === null ? void 0 : function() {
                return h(w())
            }
            ]
        }, [a, f, l, d]);
        var _ = n(s, p[0], p[1]);
        return o(function() {
            y.hasValue = !0,
            y.value = _
        }, [_]),
        c(_),
        _
    }
    ,
    te
}
var be;
function rt() {
    return be || (be = 1,
    ee.exports = tt()),
    ee.exports
}
var nt = rt()
  , x = "default"in me ? et : me
  , _e = Symbol.for("react-redux-context")
  , ve = typeof globalThis < "u" ? globalThis : {};
function it() {
    if (!x.createContext)
        return {};
    const e = ve[_e] ?? (ve[_e] = new Map);
    let t = e.get(x.createContext);
    return t || (t = x.createContext(null),
    e.set(x.createContext, t)),
    t
}
var D = it()
  , ot = () => {
    throw new Error("uSES not initialized!")
}
;
function de(e=D) {
    return function() {
        return x.useContext(e)
    }
}
var De = de()
  , je = ot
  , ut = e => {
    je = e
}
  , ct = (e, t) => e === t;
function st(e=D) {
    const t = e === D ? De : de(e)
      , r = (n, i={}) => {
        const {equalityFn: o=ct, devModeChecks: u={}} = typeof i == "function" ? {
            equalityFn: i
        } : i
          , {store: c, subscription: s, getServerState: a, stabilityCheck: f, identityFunctionCheck: l} = t();
        x.useRef(!0);
        const d = x.useCallback({
            [n.name](y) {
                return n(y)
            }
        }[n.name], [n, f, u.stabilityCheck])
          , p = je(s.addNestedSub, c.getState, a || c.getState, d, o);
        return x.useDebugValue(p),
        p
    }
    ;
    return Object.assign(r, {
        withTypes: () => r
    }),
    r
}
var gr = st();
function ft(e) {
    e()
}
function at() {
    let e = null
      , t = null;
    return {
        clear() {
            e = null,
            t = null
        },
        notify() {
            ft( () => {
                let r = e;
                for (; r; )
                    r.callback(),
                    r = r.next
            }
            )
        },
        get() {
            const r = [];
            let n = e;
            for (; n; )
                r.push(n),
                n = n.next;
            return r
        },
        subscribe(r) {
            let n = !0;
            const i = t = {
                callback: r,
                next: null,
                prev: t
            };
            return i.prev ? i.prev.next = i : e = i,
            function() {
                !n || e === null || (n = !1,
                i.next ? i.next.prev = i.prev : t = i.prev,
                i.prev ? i.prev.next = i.next : e = i.next)
            }
        }
    }
}
var Se = {
    notify() {},
    get: () => []
};
function lt(e, t) {
    let r, n = Se, i = 0, o = !1;
    function u(_) {
        f();
        const h = n.subscribe(_);
        let E = !1;
        return () => {
            E || (E = !0,
            h(),
            l())
        }
    }
    function c() {
        n.notify()
    }
    function s() {
        y.onStateChange && y.onStateChange()
    }
    function a() {
        return o
    }
    function f() {
        i++,
        r || (r = e.subscribe(s),
        n = at())
    }
    function l() {
        i--,
        r && i === 0 && (r(),
        r = void 0,
        n.clear(),
        n = Se)
    }
    function d() {
        o || (o = !0,
        f())
    }
    function p() {
        o && (o = !1,
        l())
    }
    const y = {
        addNestedSub: u,
        notifyNestedSubs: c,
        handleChangeWrapper: s,
        isSubscribed: a,
        trySubscribe: d,
        tryUnsubscribe: p,
        getListeners: () => n
    };
    return y
}
var dt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , yt = typeof navigator < "u" && navigator.product === "ReactNative"
  , pt = dt || yt ? x.useLayoutEffect : x.useEffect;
function ht({store: e, context: t, children: r, serverState: n, stabilityCheck: i="once", identityFunctionCheck: o="once"}) {
    const u = x.useMemo( () => {
        const a = lt(e);
        return {
            store: e,
            subscription: a,
            getServerState: n ? () => n : void 0,
            stabilityCheck: i,
            identityFunctionCheck: o
        }
    }
    , [e, n, i, o])
      , c = x.useMemo( () => e.getState(), [e]);
    pt( () => {
        const {subscription: a} = u;
        return a.onStateChange = a.notifyNestedSubs,
        a.trySubscribe(),
        c !== e.getState() && a.notifyNestedSubs(),
        () => {
            a.tryUnsubscribe(),
            a.onStateChange = void 0
        }
    }
    , [u, c]);
    const s = t || D;
    return x.createElement(s.Provider, {
        value: u
    }, r)
}
var Er = ht;
function Ne(e=D) {
    const t = e === D ? De : de(e)
      , r = () => {
        const {store: n} = t();
        return n
    }
    ;
    return Object.assign(r, {
        withTypes: () => r
    }),
    r
}
var mt = Ne();
function wt(e=D) {
    const t = e === D ? mt : Ne(e)
      , r = () => t().dispatch;
    return Object.assign(r, {
        withTypes: () => r
    }),
    r
}
var Cr = wt();
ut(nt.useSyncExternalStoreWithSelector);
function C(e) {
    return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var bt = typeof Symbol == "function" && Symbol.observable || "@@observable"
  , ge = bt
  , re = () => Math.random().toString(36).substring(7).split("").join(".")
  , _t = {
    INIT: `@@redux/INIT${re()}`,
    REPLACE: `@@redux/REPLACE${re()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${re()}`
}
  , L = _t;
function ye(e) {
    if (typeof e != "object" || e === null)
        return !1;
    let t = e;
    for (; Object.getPrototypeOf(t) !== null; )
        t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null
}
function ze(e, t, r) {
    if (typeof e != "function")
        throw new Error(C(2));
    if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
        throw new Error(C(0));
    if (typeof t == "function" && typeof r > "u" && (r = t,
    t = void 0),
    typeof r < "u") {
        if (typeof r != "function")
            throw new Error(C(1));
        return r(ze)(e, t)
    }
    let n = e
      , i = t
      , o = new Map
      , u = o
      , c = 0
      , s = !1;
    function a() {
        u === o && (u = new Map,
        o.forEach( (h, E) => {
            u.set(E, h)
        }
        ))
    }
    function f() {
        if (s)
            throw new Error(C(3));
        return i
    }
    function l(h) {
        if (typeof h != "function")
            throw new Error(C(4));
        if (s)
            throw new Error(C(5));
        let E = !0;
        a();
        const v = c++;
        return u.set(v, h),
        function() {
            if (E) {
                if (s)
                    throw new Error(C(6));
                E = !1,
                a(),
                u.delete(v),
                o = null
            }
        }
    }
    function d(h) {
        if (!ye(h))
            throw new Error(C(7));
        if (typeof h.type > "u")
            throw new Error(C(8));
        if (typeof h.type != "string")
            throw new Error(C(17));
        if (s)
            throw new Error(C(9));
        try {
            s = !0,
            i = n(i, h)
        } finally {
            s = !1
        }
        return (o = u).forEach(v => {
            v()
        }
        ),
        h
    }
    function p(h) {
        if (typeof h != "function")
            throw new Error(C(10));
        n = h,
        d({
            type: L.REPLACE
        })
    }
    function y() {
        const h = l;
        return {
            subscribe(E) {
                if (typeof E != "object" || E === null)
                    throw new Error(C(11));
                function v() {
                    const w = E;
                    w.next && w.next(f())
                }
                return v(),
                {
                    unsubscribe: h(v)
                }
            },
            [ge]() {
                return this
            }
        }
    }
    return d({
        type: L.INIT
    }),
    {
        dispatch: d,
        subscribe: l,
        getState: f,
        replaceReducer: p,
        [ge]: y
    }
}
function vt(e) {
    Object.keys(e).forEach(t => {
        const r = e[t];
        if (typeof r(void 0, {
            type: L.INIT
        }) > "u")
            throw new Error(C(12));
        if (typeof r(void 0, {
            type: L.PROBE_UNKNOWN_ACTION()
        }) > "u")
            throw new Error(C(13))
    }
    )
}
function St(e) {
    const t = Object.keys(e)
      , r = {};
    for (let o = 0; o < t.length; o++) {
        const u = t[o];
        typeof e[u] == "function" && (r[u] = e[u])
    }
    const n = Object.keys(r);
    let i;
    try {
        vt(r)
    } catch (o) {
        i = o
    }
    return function(u={}, c) {
        if (i)
            throw i;
        let s = !1;
        const a = {};
        for (let f = 0; f < n.length; f++) {
            const l = n[f]
              , d = r[l]
              , p = u[l]
              , y = d(p, c);
            if (typeof y > "u")
                throw c && c.type,
                new Error(C(14));
            a[l] = y,
            s = s || y !== p
        }
        return s = s || n.length !== Object.keys(u).length,
        s ? a : u
    }
}
function K(...e) {
    return e.length === 0 ? t => t : e.length === 1 ? e[0] : e.reduce( (t, r) => (...n) => t(r(...n)))
}
function gt(...e) {
    return t => (r, n) => {
        const i = t(r, n);
        let o = () => {
            throw new Error(C(15))
        }
        ;
        const u = {
            getState: i.getState,
            dispatch: (s, ...a) => o(s, ...a)
        }
          , c = e.map(s => s(u));
        return o = K(...c)(i.dispatch),
        {
            ...i,
            dispatch: o
        }
    }
}
function Et(e) {
    return ye(e) && "type"in e && typeof e.type == "string"
}
var Ie = Symbol.for("immer-nothing")
  , Ee = Symbol.for("immer-draftable")
  , P = Symbol.for("immer-state");
function T(e, ...t) {
    throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
}
var I = Object.getPrototypeOf;
function N(e) {
    return !!e && !!e[P]
}
function M(e) {
    var t;
    return e ? Fe(e) || Array.isArray(e) || !!e[Ee] || !!((t = e.constructor) != null && t[Ee]) || Q(e) || J(e) : !1
}
var Ct = Object.prototype.constructor.toString();
function Fe(e) {
    if (!e || typeof e != "object")
        return !1;
    const t = I(e);
    if (t === null)
        return !0;
    const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Ct
}
function V(e, t) {
    X(e) === 0 ? Reflect.ownKeys(e).forEach(r => {
        t(r, e[r], e)
    }
    ) : e.forEach( (r, n) => t(n, r, e))
}
function X(e) {
    const t = e[P];
    return t ? t.type_ : Array.isArray(e) ? 1 : Q(e) ? 2 : J(e) ? 3 : 0
}
function ue(e, t) {
    return X(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function We(e, t, r) {
    const n = X(e);
    n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r
}
function Rt(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function Q(e) {
    return e instanceof Map
}
function J(e) {
    return e instanceof Set
}
function j(e) {
    return e.copy_ || e.base_
}
function ce(e, t) {
    if (Q(e))
        return new Map(e);
    if (J(e))
        return new Set(e);
    if (Array.isArray(e))
        return Array.prototype.slice.call(e);
    const r = Fe(e);
    if (t === !0 || t === "class_only" && !r) {
        const n = Object.getOwnPropertyDescriptors(e);
        delete n[P];
        let i = Reflect.ownKeys(n);
        for (let o = 0; o < i.length; o++) {
            const u = i[o]
              , c = n[u];
            c.writable === !1 && (c.writable = !0,
            c.configurable = !0),
            (c.get || c.set) && (n[u] = {
                configurable: !0,
                writable: !0,
                enumerable: c.enumerable,
                value: e[u]
            })
        }
        return Object.create(I(e), n)
    } else {
        const n = I(e);
        if (n !== null && r)
            return {
                ...e
            };
        const i = Object.create(n);
        return Object.assign(i, e)
    }
}
function pe(e, t=!1) {
    return Y(e) || N(e) || !M(e) || (X(e) > 1 && (e.set = e.add = e.clear = e.delete = xt),
    Object.freeze(e),
    t && Object.entries(e).forEach( ([r,n]) => pe(n, !0))),
    e
}
function xt() {
    T(2)
}
function Y(e) {
    return Object.isFrozen(e)
}
var Pt = {};
function z(e) {
    const t = Pt[e];
    return t || T(0, e),
    t
}
var $;
function $e() {
    return $
}
function Ot(e, t) {
    return {
        drafts_: [],
        parent_: e,
        immer_: t,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0
    }
}
function Ce(e, t) {
    t && (z("Patches"),
    e.patches_ = [],
    e.inversePatches_ = [],
    e.patchListener_ = t)
}
function se(e) {
    fe(e),
    e.drafts_.forEach(Tt),
    e.drafts_ = null
}
function fe(e) {
    e === $ && ($ = e.parent_)
}
function Re(e) {
    return $ = Ot($, e)
}
function Tt(e) {
    const t = e[P];
    t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0
}
function xe(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    const r = t.drafts_[0];
    return e !== void 0 && e !== r ? (r[P].modified_ && (se(t),
    T(4)),
    M(e) && (e = H(t, e),
    t.parent_ || G(t, e)),
    t.patches_ && z("Patches").generateReplacementPatches_(r[P].base_, e, t.patches_, t.inversePatches_)) : e = H(t, r, []),
    se(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Ie ? e : void 0
}
function H(e, t, r) {
    if (Y(t))
        return t;
    const n = t[P];
    if (!n)
        return V(t, (i, o) => Pe(e, n, t, i, o, r)),
        t;
    if (n.scope_ !== e)
        return t;
    if (!n.modified_)
        return G(e, n.base_, !0),
        n.base_;
    if (!n.finalized_) {
        n.finalized_ = !0,
        n.scope_.unfinalizedDrafts_--;
        const i = n.copy_;
        let o = i
          , u = !1;
        n.type_ === 3 && (o = new Set(i),
        i.clear(),
        u = !0),
        V(o, (c, s) => Pe(e, n, i, c, s, r, u)),
        G(e, i, !1),
        r && e.patches_ && z("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_)
    }
    return n.copy_
}
function Pe(e, t, r, n, i, o, u) {
    if (N(i)) {
        const c = o && t && t.type_ !== 3 && !ue(t.assigned_, n) ? o.concat(n) : void 0
          , s = H(e, i, c);
        if (We(r, n, s),
        N(s))
            e.canAutoFreeze_ = !1;
        else
            return
    } else
        u && r.add(i);
    if (M(i) && !Y(i)) {
        if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
            return;
        H(e, i),
        (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && G(e, i)
    }
}
function G(e, t, r=!1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && pe(t, r)
}
function kt(e, t) {
    const r = Array.isArray(e)
      , n = {
        type_: r ? 1 : 0,
        scope_: t ? t.scope_ : $e(),
        modified_: !1,
        finalized_: !1,
        assigned_: {},
        parent_: t,
        base_: e,
        draft_: null,
        copy_: null,
        revoke_: null,
        isManual_: !1
    };
    let i = n
      , o = he;
    r && (i = [n],
    o = B);
    const {revoke: u, proxy: c} = Proxy.revocable(i, o);
    return n.draft_ = c,
    n.revoke_ = u,
    c
}
var he = {
    get(e, t) {
        if (t === P)
            return e;
        const r = j(e);
        if (!ue(r, t))
            return Mt(e, r, t);
        const n = r[t];
        return e.finalized_ || !M(n) ? n : n === ne(e.base_, t) ? (ie(e),
        e.copy_[t] = le(n, e)) : n
    },
    has(e, t) {
        return t in j(e)
    },
    ownKeys(e) {
        return Reflect.ownKeys(j(e))
    },
    set(e, t, r) {
        const n = Be(j(e), t);
        if (n != null && n.set)
            return n.set.call(e.draft_, r),
            !0;
        if (!e.modified_) {
            const i = ne(j(e), t)
              , o = i == null ? void 0 : i[P];
            if (o && o.base_ === r)
                return e.copy_[t] = r,
                e.assigned_[t] = !1,
                !0;
            if (Rt(r, i) && (r !== void 0 || ue(e.base_, t)))
                return !0;
            ie(e),
            ae(e)
        }
        return e.copy_[t] === r && (r !== void 0 || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r,
        e.assigned_[t] = !0),
        !0
    },
    deleteProperty(e, t) {
        return ne(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1,
        ie(e),
        ae(e)) : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
    },
    getOwnPropertyDescriptor(e, t) {
        const r = j(e)
          , n = Reflect.getOwnPropertyDescriptor(r, t);
        return n && {
            writable: !0,
            configurable: e.type_ !== 1 || t !== "length",
            enumerable: n.enumerable,
            value: r[t]
        }
    },
    defineProperty() {
        T(11)
    },
    getPrototypeOf(e) {
        return I(e.base_)
    },
    setPrototypeOf() {
        T(12)
    }
}
  , B = {};
V(he, (e, t) => {
    B[e] = function() {
        return arguments[0] = arguments[0][0],
        t.apply(this, arguments)
    }
}
);
B.deleteProperty = function(e, t) {
    return B.set.call(this, e, t, void 0)
}
;
B.set = function(e, t, r) {
    return he.set.call(this, e[0], t, r, e[0])
}
;
function ne(e, t) {
    const r = e[P];
    return (r ? j(r) : e)[t]
}
function Mt(e, t, r) {
    var i;
    const n = Be(t, r);
    return n ? "value"in n ? n.value : (i = n.get) == null ? void 0 : i.call(e.draft_) : void 0
}
function Be(e, t) {
    if (!(t in e))
        return;
    let r = I(e);
    for (; r; ) {
        const n = Object.getOwnPropertyDescriptor(r, t);
        if (n)
            return n;
        r = I(r)
    }
}
function ae(e) {
    e.modified_ || (e.modified_ = !0,
    e.parent_ && ae(e.parent_))
}
function ie(e) {
    e.copy_ || (e.copy_ = ce(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
var At = class {
    constructor(e) {
        this.autoFreeze_ = !0,
        this.useStrictShallowCopy_ = !1,
        this.produce = (t, r, n) => {
            if (typeof t == "function" && typeof r != "function") {
                const o = r;
                r = t;
                const u = this;
                return function(s=o, ...a) {
                    return u.produce(s, f => r.call(this, f, ...a))
                }
            }
            typeof r != "function" && T(6),
            n !== void 0 && typeof n != "function" && T(7);
            let i;
            if (M(t)) {
                const o = Re(this)
                  , u = le(t, void 0);
                let c = !0;
                try {
                    i = r(u),
                    c = !1
                } finally {
                    c ? se(o) : fe(o)
                }
                return Ce(o, n),
                xe(i, o)
            } else if (!t || typeof t != "object") {
                if (i = r(t),
                i === void 0 && (i = t),
                i === Ie && (i = void 0),
                this.autoFreeze_ && pe(i, !0),
                n) {
                    const o = []
                      , u = [];
                    z("Patches").generateReplacementPatches_(t, i, o, u),
                    n(o, u)
                }
                return i
            } else
                T(1, t)
        }
        ,
        this.produceWithPatches = (t, r) => {
            if (typeof t == "function")
                return (u, ...c) => this.produceWithPatches(u, s => t(s, ...c));
            let n, i;
            return [this.produce(t, r, (u, c) => {
                n = u,
                i = c
            }
            ), n, i]
        }
        ,
        typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze),
        typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
    }
    createDraft(e) {
        M(e) || T(8),
        N(e) && (e = Dt(e));
        const t = Re(this)
          , r = le(e, void 0);
        return r[P].isManual_ = !0,
        fe(t),
        r
    }
    finishDraft(e, t) {
        const r = e && e[P];
        (!r || !r.isManual_) && T(9);
        const {scope_: n} = r;
        return Ce(n, t),
        xe(void 0, n)
    }
    setAutoFreeze(e) {
        this.autoFreeze_ = e
    }
    setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e
    }
    applyPatches(e, t) {
        let r;
        for (r = t.length - 1; r >= 0; r--) {
            const i = t[r];
            if (i.path.length === 0 && i.op === "replace") {
                e = i.value;
                break
            }
        }
        r > -1 && (t = t.slice(r + 1));
        const n = z("Patches").applyPatches_;
        return N(e) ? n(e, t) : this.produce(e, i => n(i, t))
    }
}
;
function le(e, t) {
    const r = Q(e) ? z("MapSet").proxyMap_(e, t) : J(e) ? z("MapSet").proxySet_(e, t) : kt(e, t);
    return (t ? t.scope_ : $e()).drafts_.push(r),
    r
}
function Dt(e) {
    return N(e) || T(10, e),
    Ue(e)
}
function Ue(e) {
    if (!M(e) || Y(e))
        return e;
    const t = e[P];
    let r;
    if (t) {
        if (!t.modified_)
            return t.base_;
        t.finalized_ = !0,
        r = ce(e, t.scope_.immer_.useStrictShallowCopy_)
    } else
        r = ce(e, !0);
    return V(r, (n, i) => {
        We(r, n, Ue(i))
    }
    ),
    t && (t.finalized_ = !1),
    r
}
var O = new At
  , qe = O.produce;
O.produceWithPatches.bind(O);
O.setAutoFreeze.bind(O);
O.setUseStrictShallowCopy.bind(O);
O.applyPatches.bind(O);
O.createDraft.bind(O);
O.finishDraft.bind(O);
function jt(e, t=`expected a function, instead received ${typeof e}`) {
    if (typeof e != "function")
        throw new TypeError(t)
}
function Nt(e, t=`expected an object, instead received ${typeof e}`) {
    if (typeof e != "object")
        throw new TypeError(t)
}
function zt(e, t="expected all items to be functions, instead received the following types: ") {
    if (!e.every(r => typeof r == "function")) {
        const r = e.map(n => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n).join(", ");
        throw new TypeError(`${t}[${r}]`)
    }
}
var Oe = e => Array.isArray(e) ? e : [e];
function It(e) {
    const t = Array.isArray(e[0]) ? e[0] : e;
    return zt(t, "createSelector expects all input-selectors to be functions, but received the following types: "),
    t
}
function Ft(e, t) {
    const r = []
      , {length: n} = e;
    for (let i = 0; i < n; i++)
        r.push(e[i].apply(null, t));
    return r
}
var Wt = class {
    constructor(e) {
        this.value = e
    }
    deref() {
        return this.value
    }
}
  , $t = typeof WeakRef < "u" ? WeakRef : Wt
  , Bt = 0
  , Te = 1;
function U() {
    return {
        s: Bt,
        v: void 0,
        o: null,
        p: null
    }
}
function Le(e, t={}) {
    let r = U();
    const {resultEqualityCheck: n} = t;
    let i, o = 0;
    function u() {
        var l;
        let c = r;
        const {length: s} = arguments;
        for (let d = 0, p = s; d < p; d++) {
            const y = arguments[d];
            if (typeof y == "function" || typeof y == "object" && y !== null) {
                let _ = c.o;
                _ === null && (c.o = _ = new WeakMap);
                const h = _.get(y);
                h === void 0 ? (c = U(),
                _.set(y, c)) : c = h
            } else {
                let _ = c.p;
                _ === null && (c.p = _ = new Map);
                const h = _.get(y);
                h === void 0 ? (c = U(),
                _.set(y, c)) : c = h
            }
        }
        const a = c;
        let f;
        if (c.s === Te)
            f = c.v;
        else if (f = e.apply(null, arguments),
        o++,
        n) {
            const d = ((l = i == null ? void 0 : i.deref) == null ? void 0 : l.call(i)) ?? i;
            d != null && n(d, f) && (f = d,
            o !== 0 && o--),
            i = typeof f == "object" && f !== null || typeof f == "function" ? new $t(f) : f
        }
        return a.s = Te,
        a.v = f,
        f
    }
    return u.clearCache = () => {
        r = U(),
        u.resetResultsCount()
    }
    ,
    u.resultsCount = () => o,
    u.resetResultsCount = () => {
        o = 0
    }
    ,
    u
}
function Ut(e, ...t) {
    const r = typeof e == "function" ? {
        memoize: e,
        memoizeOptions: t
    } : e
      , n = (...i) => {
        let o = 0, u = 0, c, s = {}, a = i.pop();
        typeof a == "object" && (s = a,
        a = i.pop()),
        jt(a, `createSelector expects an output function after the inputs, but received: [${typeof a}]`);
        const f = {
            ...r,
            ...s
        }
          , {memoize: l, memoizeOptions: d=[], argsMemoize: p=Le, argsMemoizeOptions: y=[]} = f
          , _ = Oe(d)
          , h = Oe(y)
          , E = It(i)
          , v = l(function() {
            return o++,
            a.apply(null, arguments)
        }, ..._)
          , m = p(function() {
            u++;
            const b = Ft(E, arguments);
            return c = v.apply(null, b),
            c
        }, ...h);
        return Object.assign(m, {
            resultFunc: a,
            memoizedResultFunc: v,
            dependencies: E,
            dependencyRecomputations: () => u,
            resetDependencyRecomputations: () => {
                u = 0
            }
            ,
            lastResult: () => c,
            recomputations: () => o,
            resetRecomputations: () => {
                o = 0
            }
            ,
            memoize: l,
            argsMemoize: p
        })
    }
    ;
    return Object.assign(n, {
        withTypes: () => n
    }),
    n
}
var qt = Ut(Le)
  , Lt = Object.assign( (e, t=qt) => {
    Nt(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
    const r = Object.keys(e)
      , n = r.map(o => e[o]);
    return t(n, (...o) => o.reduce( (u, c, s) => (u[r[s]] = c,
    u), {}))
}
, {
    withTypes: () => Lt
});
function Ke(e) {
    return ({dispatch: r, getState: n}) => i => o => typeof o == "function" ? o(r, n, e) : i(o)
}
var Kt = Ke()
  , Vt = Ke
  , Ht = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
    if (arguments.length !== 0)
        return typeof arguments[0] == "object" ? K : K.apply(null, arguments)
}
  , Gt = e => e && typeof e.match == "function";
function W(e, t) {
    function r(...n) {
        if (t) {
            let i = t(...n);
            if (!i)
                throw new Error(k(0));
            return {
                type: e,
                payload: i.payload,
                ..."meta"in i && {
                    meta: i.meta
                },
                ..."error"in i && {
                    error: i.error
                }
            }
        }
        return {
            type: e,
            payload: n[0]
        }
    }
    return r.toString = () => `${e}`,
    r.type = e,
    r.match = n => Et(n) && n.type === e,
    r
}
var Ve = class F extends Array {
    constructor(...t) {
        super(...t),
        Object.setPrototypeOf(this, F.prototype)
    }
    static get[Symbol.species]() {
        return F
    }
    concat(...t) {
        return super.concat.apply(this, t)
    }
    prepend(...t) {
        return t.length === 1 && Array.isArray(t[0]) ? new F(...t[0].concat(this)) : new F(...t.concat(this))
    }
}
;
function ke(e) {
    return M(e) ? qe(e, () => {}
    ) : e
}
function Me(e, t, r) {
    if (e.has(t)) {
        let i = e.get(t);
        return r.update && (i = r.update(i, t, e),
        e.set(t, i)),
        i
    }
    if (!r.insert)
        throw new Error(k(10));
    const n = r.insert(t, e);
    return e.set(t, n),
    n
}
function Xt(e) {
    return typeof e == "boolean"
}
var Qt = () => function(t) {
    const {thunk: r=!0, immutableCheck: n=!0, serializableCheck: i=!0, actionCreatorCheck: o=!0} = t ?? {};
    let u = new Ve;
    return r && (Xt(r) ? u.push(Kt) : u.push(Vt(r.extraArgument))),
    u
}
  , Jt = "RTK_autoBatch"
  , He = e => t => {
    setTimeout(t, e)
}
  , Yt = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : He(10)
  , Zt = (e={
    type: "raf"
}) => t => (...r) => {
    const n = t(...r);
    let i = !0
      , o = !1
      , u = !1;
    const c = new Set
      , s = e.type === "tick" ? queueMicrotask : e.type === "raf" ? Yt : e.type === "callback" ? e.queueNotification : He(e.timeout)
      , a = () => {
        u = !1,
        o && (o = !1,
        c.forEach(f => f()))
    }
    ;
    return Object.assign({}, n, {
        subscribe(f) {
            const l = () => i && f()
              , d = n.subscribe(l);
            return c.add(f),
            () => {
                d(),
                c.delete(f)
            }
        },
        dispatch(f) {
            var l;
            try {
                return i = !((l = f == null ? void 0 : f.meta) != null && l[Jt]),
                o = !i,
                o && (u || (u = !0,
                s(a))),
                n.dispatch(f)
            } finally {
                i = !0
            }
        }
    })
}
  , er = e => function(r) {
    const {autoBatch: n=!0} = r ?? {};
    let i = new Ve(e);
    return n && i.push(Zt(typeof n == "object" ? n : void 0)),
    i
}
;
function Rr(e) {
    const t = Qt()
      , {reducer: r=void 0, middleware: n, devTools: i=!0, preloadedState: o=void 0, enhancers: u=void 0} = e || {};
    let c;
    if (typeof r == "function")
        c = r;
    else if (ye(r))
        c = St(r);
    else
        throw new Error(k(1));
    let s;
    typeof n == "function" ? s = n(t) : s = t();
    let a = K;
    i && (a = Ht({
        trace: !1,
        ...typeof i == "object" && i
    }));
    const f = gt(...s)
      , l = er(f);
    let d = typeof u == "function" ? u(l) : l();
    const p = a(...d);
    return ze(c, o, p)
}
function Ge(e) {
    const t = {}
      , r = [];
    let n;
    const i = {
        addCase(o, u) {
            const c = typeof o == "string" ? o : o.type;
            if (!c)
                throw new Error(k(28));
            if (c in t)
                throw new Error(k(29));
            return t[c] = u,
            i
        },
        addMatcher(o, u) {
            return r.push({
                matcher: o,
                reducer: u
            }),
            i
        },
        addDefaultCase(o) {
            return n = o,
            i
        }
    };
    return e(i),
    [t, r, n]
}
function tr(e) {
    return typeof e == "function"
}
function rr(e, t) {
    let[r,n,i] = Ge(t), o;
    if (tr(e))
        o = () => ke(e());
    else {
        const c = ke(e);
        o = () => c
    }
    function u(c=o(), s) {
        let a = [r[s.type], ...n.filter( ({matcher: f}) => f(s)).map( ({reducer: f}) => f)];
        return a.filter(f => !!f).length === 0 && (a = [i]),
        a.reduce( (f, l) => {
            if (l)
                if (N(f)) {
                    const p = l(f, s);
                    return p === void 0 ? f : p
                } else {
                    if (M(f))
                        return qe(f, d => l(d, s));
                    {
                        const d = l(f, s);
                        if (d === void 0) {
                            if (f === null)
                                return f;
                            throw new Error(k(9))
                        }
                        return d
                    }
                }
            return f
        }
        , c)
    }
    return u.getInitialState = o,
    u
}
var nr = (e, t) => Gt(e) ? e.match(t) : e(t);
function ir(...e) {
    return t => e.some(r => nr(r, t))
}
var or = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"
  , ur = (e=21) => {
    let t = ""
      , r = e;
    for (; r--; )
        t += or[Math.random() * 64 | 0];
    return t
}
  , cr = ["name", "message", "stack", "code"]
  , oe = class {
    constructor(e, t) {
        Z(this, "_type");
        this.payload = e,
        this.meta = t
    }
}
  , Ae = class {
    constructor(e, t) {
        Z(this, "_type");
        this.payload = e,
        this.meta = t
    }
}
  , sr = e => {
    if (typeof e == "object" && e !== null) {
        const t = {};
        for (const r of cr)
            typeof e[r] == "string" && (t[r] = e[r]);
        return t
    }
    return {
        message: String(e)
    }
}
  , xr = ( () => {
    function e(t, r, n) {
        const i = W(t + "/fulfilled", (s, a, f, l) => ({
            payload: s,
            meta: {
                ...l || {},
                arg: f,
                requestId: a,
                requestStatus: "fulfilled"
            }
        }))
          , o = W(t + "/pending", (s, a, f) => ({
            payload: void 0,
            meta: {
                ...f || {},
                arg: a,
                requestId: s,
                requestStatus: "pending"
            }
        }))
          , u = W(t + "/rejected", (s, a, f, l, d) => ({
            payload: l,
            error: (n && n.serializeError || sr)(s || "Rejected"),
            meta: {
                ...d || {},
                arg: f,
                requestId: a,
                rejectedWithValue: !!l,
                requestStatus: "rejected",
                aborted: (s == null ? void 0 : s.name) === "AbortError",
                condition: (s == null ? void 0 : s.name) === "ConditionError"
            }
        }));
        function c(s) {
            return (a, f, l) => {
                const d = n != null && n.idGenerator ? n.idGenerator(s) : ur()
                  , p = new AbortController;
                let y, _;
                function h(v) {
                    _ = v,
                    p.abort()
                }
                const E = async function() {
                    var w, b;
                    let v;
                    try {
                        let g = (w = n == null ? void 0 : n.condition) == null ? void 0 : w.call(n, s, {
                            getState: f,
                            extra: l
                        });
                        if (ar(g) && (g = await g),
                        g === !1 || p.signal.aborted)
                            throw {
                                name: "ConditionError",
                                message: "Aborted due to condition callback returning false."
                            };
                        const R = new Promise( (S, A) => {
                            y = () => {
                                A({
                                    name: "AbortError",
                                    message: _ || "Aborted"
                                })
                            }
                            ,
                            p.signal.addEventListener("abort", y)
                        }
                        );
                        a(o(d, s, (b = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : b.call(n, {
                            requestId: d,
                            arg: s
                        }, {
                            getState: f,
                            extra: l
                        }))),
                        v = await Promise.race([R, Promise.resolve(r(s, {
                            dispatch: a,
                            getState: f,
                            extra: l,
                            requestId: d,
                            signal: p.signal,
                            abort: h,
                            rejectWithValue: (S, A) => new oe(S,A),
                            fulfillWithValue: (S, A) => new Ae(S,A)
                        })).then(S => {
                            if (S instanceof oe)
                                throw S;
                            return S instanceof Ae ? i(S.payload, d, s, S.meta) : i(S, d, s)
                        }
                        )])
                    } catch (g) {
                        v = g instanceof oe ? u(null, d, s, g.payload, g.meta) : u(g, d, s)
                    } finally {
                        y && p.signal.removeEventListener("abort", y)
                    }
                    return n && !n.dispatchConditionRejection && u.match(v) && v.meta.condition || a(v),
                    v
                }();
                return Object.assign(E, {
                    abort: h,
                    requestId: d,
                    arg: s,
                    unwrap() {
                        return E.then(fr)
                    }
                })
            }
        }
        return Object.assign(c, {
            pending: o,
            rejected: u,
            fulfilled: i,
            settled: ir(u, i),
            typePrefix: t
        })
    }
    return e.withTypes = () => e,
    e
}
)();
function fr(e) {
    if (e.meta && e.meta.rejectedWithValue)
        throw e.payload;
    if (e.error)
        throw e.error;
    return e.payload
}
function ar(e) {
    return e !== null && typeof e == "object" && typeof e.then == "function"
}
var lr = Symbol.for("rtk-slice-createasyncthunk");
function dr(e, t) {
    return `${e}/${t}`
}
function yr({creators: e}={}) {
    var r;
    const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[lr];
    return function(i) {
        const {name: o, reducerPath: u=o} = i;
        if (!o)
            throw new Error(k(11));
        const c = (typeof i.reducers == "function" ? i.reducers(hr()) : i.reducers) || {}
          , s = Object.keys(c)
          , a = {
            sliceCaseReducersByName: {},
            sliceCaseReducersByType: {},
            actionCreators: {},
            sliceMatchers: []
        }
          , f = {
            addCase(m, w) {
                const b = typeof m == "string" ? m : m.type;
                if (!b)
                    throw new Error(k(12));
                if (b in a.sliceCaseReducersByType)
                    throw new Error(k(13));
                return a.sliceCaseReducersByType[b] = w,
                f
            },
            addMatcher(m, w) {
                return a.sliceMatchers.push({
                    matcher: m,
                    reducer: w
                }),
                f
            },
            exposeAction(m, w) {
                return a.actionCreators[m] = w,
                f
            },
            exposeCaseReducer(m, w) {
                return a.sliceCaseReducersByName[m] = w,
                f
            }
        };
        s.forEach(m => {
            const w = c[m]
              , b = {
                reducerName: m,
                type: dr(o, m),
                createNotation: typeof i.reducers == "function"
            };
            wr(w) ? _r(b, w, f, t) : mr(b, w, f)
        }
        );
        function l() {
            const [m={},w=[],b=void 0] = typeof i.extraReducers == "function" ? Ge(i.extraReducers) : [i.extraReducers]
              , g = {
                ...m,
                ...a.sliceCaseReducersByType
            };
            return rr(i.initialState, R => {
                for (let S in g)
                    R.addCase(S, g[S]);
                for (let S of a.sliceMatchers)
                    R.addMatcher(S.matcher, S.reducer);
                for (let S of w)
                    R.addMatcher(S.matcher, S.reducer);
                b && R.addDefaultCase(b)
            }
            )
        }
        const d = m => m
          , p = new Map;
        let y;
        function _(m, w) {
            return y || (y = l()),
            y(m, w)
        }
        function h() {
            return y || (y = l()),
            y.getInitialState()
        }
        function E(m, w=!1) {
            function b(R) {
                let S = R[m];
                return typeof S > "u" && w && (S = h()),
                S
            }
            function g(R=d) {
                const S = Me(p, w, {
                    insert: () => new WeakMap
                });
                return Me(S, R, {
                    insert: () => {
                        const A = {};
                        for (const [Xe,Qe] of Object.entries(i.selectors ?? {}))
                            A[Xe] = pr(Qe, R, h, w);
                        return A
                    }
                })
            }
            return {
                reducerPath: m,
                getSelectors: g,
                get selectors() {
                    return g(b)
                },
                selectSlice: b
            }
        }
        const v = {
            name: o,
            reducer: _,
            actions: a.actionCreators,
            caseReducers: a.sliceCaseReducersByName,
            getInitialState: h,
            ...E(u),
            injectInto(m, {reducerPath: w, ...b}={}) {
                const g = w ?? u;
                return m.inject({
                    reducerPath: g,
                    reducer: _
                }, b),
                {
                    ...v,
                    ...E(g, !0)
                }
            }
        };
        return v
    }
}
function pr(e, t, r, n) {
    function i(o, ...u) {
        let c = t(o);
        return typeof c > "u" && n && (c = r()),
        e(c, ...u)
    }
    return i.unwrapped = e,
    i
}
var Pr = yr();
function hr() {
    function e(t, r) {
        return {
            _reducerDefinitionType: "asyncThunk",
            payloadCreator: t,
            ...r
        }
    }
    return e.withTypes = () => e,
    {
        reducer(t) {
            return Object.assign({
                [t.name](...r) {
                    return t(...r)
                }
            }[t.name], {
                _reducerDefinitionType: "reducer"
            })
        },
        preparedReducer(t, r) {
            return {
                _reducerDefinitionType: "reducerWithPrepare",
                prepare: t,
                reducer: r
            }
        },
        asyncThunk: e
    }
}
function mr({type: e, reducerName: t, createNotation: r}, n, i) {
    let o, u;
    if ("reducer"in n) {
        if (r && !br(n))
            throw new Error(k(17));
        o = n.reducer,
        u = n.prepare
    } else
        o = n;
    i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, u ? W(e, u) : W(e))
}
function wr(e) {
    return e._reducerDefinitionType === "asyncThunk"
}
function br(e) {
    return e._reducerDefinitionType === "reducerWithPrepare"
}
function _r({type: e, reducerName: t}, r, n, i) {
    if (!i)
        throw new Error(k(18));
    const {payloadCreator: o, fulfilled: u, pending: c, rejected: s, settled: a, options: f} = r
      , l = i(e, o, f);
    n.exposeAction(t, l),
    u && n.addCase(l.fulfilled, u),
    c && n.addCase(l.pending, c),
    s && n.addCase(l.rejected, s),
    a && n.addMatcher(l.settled, a),
    n.exposeCaseReducer(t, {
        fulfilled: u || q,
        pending: c || q,
        rejected: s || q,
        settled: a || q
    })
}
function q() {}
function k(e) {
    return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
export {Er as P, Pr as a, St as b, xr as c, Rr as d, gr as e, Cr as u};
