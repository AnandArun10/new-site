import {R as p, d as zr, r as Tt} from "./vendor-ui-CO2oigVm.js";
function sr(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: jr} = Object.prototype
  , {getPrototypeOf: yn} = Object
  , Yt = (e => t => {
    const n = jr.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , ye = e => (e = e.toLowerCase(),
t => Yt(t) === e)
  , zt = e => t => typeof t === e
  , {isArray: st} = Array
  , St = zt("undefined");
function qr(e) {
    return e !== null && !St(e) && e.constructor !== null && !St(e.constructor) && le(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const ir = ye("ArrayBuffer");
function $r(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ir(e.buffer),
    t
}
const Gr = zt("string")
  , le = zt("function")
  , lr = zt("number")
  , jt = e => e !== null && typeof e == "object"
  , Vr = e => e === !0 || e === !1
  , Dt = e => {
    if (Yt(e) !== "object")
        return !1;
    const t = yn(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , Xr = ye("Date")
  , Jr = ye("File")
  , Kr = ye("Blob")
  , Qr = ye("FileList")
  , Zr = e => jt(e) && le(e.pipe)
  , ea = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || le(e.append) && ((t = Yt(e)) === "formdata" || t === "object" && le(e.toString) && e.toString() === "[object FormData]"))
}
  , ta = ye("URLSearchParams")
  , [na,ra,aa,oa] = ["ReadableStream", "Request", "Response", "Headers"].map(ye)
  , sa = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function xt(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, a;
    if (typeof e != "object" && (e = [e]),
    st(e))
        for (r = 0,
        a = e.length; r < a; r++)
            t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , s = o.length;
        let l;
        for (r = 0; r < s; r++)
            l = o[r],
            t.call(null, e[l], l, e)
    }
}
function cr(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, a;
    for (; r-- > 0; )
        if (a = n[r],
        t === a.toLowerCase())
            return a;
    return null
}
const Xe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , ur = e => !St(e) && e !== Xe;
function ln() {
    const {caseless: e} = ur(this) && this || {}
      , t = {}
      , n = (r, a) => {
        const o = e && cr(t, a) || a;
        Dt(t[o]) && Dt(r) ? t[o] = ln(t[o], r) : Dt(r) ? t[o] = ln({}, r) : st(r) ? t[o] = r.slice() : t[o] = r
    }
    ;
    for (let r = 0, a = arguments.length; r < a; r++)
        arguments[r] && xt(arguments[r], n);
    return t
}
const ia = (e, t, n, {allOwnKeys: r}={}) => (xt(t, (a, o) => {
    n && le(a) ? e[o] = sr(a, n) : e[o] = a
}
, {
    allOwnKeys: r
}),
e)
  , la = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , ca = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , ua = (e, t, n, r) => {
    let a, o, s;
    const l = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (a = Object.getOwnPropertyNames(e),
        o = a.length; o-- > 0; )
            s = a[o],
            (!r || r(s, e, t)) && !l[s] && (t[s] = e[s],
            l[s] = !0);
        e = n !== !1 && yn(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , da = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , fa = e => {
    if (!e)
        return null;
    if (st(e))
        return e;
    let t = e.length;
    if (!lr(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , ha = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && yn(Uint8Array))
  , ma = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let a;
    for (; (a = r.next()) && !a.done; ) {
        const o = a.value;
        t.call(e, o[0], o[1])
    }
}
  , pa = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , ga = ye("HTMLFormElement")
  , ya = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, a) {
    return r.toUpperCase() + a
})
  , Dn = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , ba = ye("RegExp")
  , dr = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    xt(n, (a, o) => {
        let s;
        (s = t(a, o, e)) !== !1 && (r[o] = s || a)
    }
    ),
    Object.defineProperties(e, r)
}
  , wa = e => {
    dr(e, (t, n) => {
        if (le(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (le(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , Ea = (e, t) => {
    const n = {}
      , r = a => {
        a.forEach(o => {
            n[o] = !0
        }
        )
    }
    ;
    return st(e) ? r(e) : r(String(e).split(t)),
    n
}
  , Ta = () => {}
  , Sa = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function xa(e) {
    return !!(e && le(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const va = e => {
    const t = new Array(10)
      , n = (r, a) => {
        if (jt(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[a] = r;
                const o = st(r) ? [] : {};
                return xt(r, (s, l) => {
                    const h = n(s, a + 1);
                    !St(h) && (o[l] = h)
                }
                ),
                t[a] = void 0,
                o
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , Aa = ye("AsyncFunction")
  , Oa = e => e && (jt(e) || le(e)) && le(e.then) && le(e.catch)
  , fr = ( (e, t) => e ? setImmediate : t ? ( (n, r) => (Xe.addEventListener("message", ({source: a, data: o}) => {
    a === Xe && o === n && r.length && r.shift()()
}
, !1),
a => {
    r.push(a),
    Xe.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", le(Xe.postMessage))
  , Ra = typeof queueMicrotask < "u" ? queueMicrotask.bind(Xe) : typeof process < "u" && process.nextTick || fr
  , u = {
    isArray: st,
    isArrayBuffer: ir,
    isBuffer: qr,
    isFormData: ea,
    isArrayBufferView: $r,
    isString: Gr,
    isNumber: lr,
    isBoolean: Vr,
    isObject: jt,
    isPlainObject: Dt,
    isReadableStream: na,
    isRequest: ra,
    isResponse: aa,
    isHeaders: oa,
    isUndefined: St,
    isDate: Xr,
    isFile: Jr,
    isBlob: Kr,
    isRegExp: ba,
    isFunction: le,
    isStream: Zr,
    isURLSearchParams: ta,
    isTypedArray: ha,
    isFileList: Qr,
    forEach: xt,
    merge: ln,
    extend: ia,
    trim: sa,
    stripBOM: la,
    inherits: ca,
    toFlatObject: ua,
    kindOf: Yt,
    kindOfTest: ye,
    endsWith: da,
    toArray: fa,
    forEachEntry: ma,
    matchAll: pa,
    isHTMLForm: ga,
    hasOwnProperty: Dn,
    hasOwnProp: Dn,
    reduceDescriptors: dr,
    freezeMethods: wa,
    toObjectSet: Ea,
    toCamelCase: ya,
    noop: Ta,
    toFiniteNumber: Sa,
    findKey: cr,
    global: Xe,
    isContextDefined: ur,
    isSpecCompliantForm: xa,
    toJSONObject: va,
    isAsyncFn: Aa,
    isThenable: Oa,
    setImmediate: fr,
    asap: Ra
};
function R(e, t, n, r, a) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    a && (this.response = a,
    this.status = a.status ? a.status : null)
}
u.inherits(R, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: u.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const hr = R.prototype
  , mr = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    mr[e] = {
        value: e
    }
}
);
Object.defineProperties(R, mr);
Object.defineProperty(hr, "isAxiosError", {
    value: !0
});
R.from = (e, t, n, r, a, o) => {
    const s = Object.create(hr);
    return u.toFlatObject(e, s, function(h) {
        return h !== Error.prototype
    }, l => l !== "isAxiosError"),
    R.call(s, e.message, t, n, r, a),
    s.cause = e,
    s.name = e.name,
    o && Object.assign(s, o),
    s
}
;
const _a = null;
function cn(e) {
    return u.isPlainObject(e) || u.isArray(e)
}
function pr(e) {
    return u.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function Pn(e, t, n) {
    return e ? e.concat(t).map(function(a, o) {
        return a = pr(a),
        !n && o ? "[" + a + "]" : a
    }).join(n ? "." : "") : t
}
function ka(e) {
    return u.isArray(e) && !e.some(cn)
}
const Ma = u.toFlatObject(u, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function qt(e, t, n) {
    if (!u.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = u.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(E, b) {
        return !u.isUndefined(b[E])
    });
    const r = n.metaTokens
      , a = n.visitor || f
      , o = n.dots
      , s = n.indexes
      , h = (n.Blob || typeof Blob < "u" && Blob) && u.isSpecCompliantForm(t);
    if (!u.isFunction(a))
        throw new TypeError("visitor must be a function");
    function d(y) {
        if (y === null)
            return "";
        if (u.isDate(y))
            return y.toISOString();
        if (!h && u.isBlob(y))
            throw new R("Blob is not supported. Use a Buffer instead.");
        return u.isArrayBuffer(y) || u.isTypedArray(y) ? h && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y
    }
    function f(y, E, b) {
        let N = y;
        if (y && !b && typeof y == "object") {
            if (u.endsWith(E, "{}"))
                E = r ? E : E.slice(0, -2),
                y = JSON.stringify(y);
            else if (u.isArray(y) && ka(y) || (u.isFileList(y) || u.endsWith(E, "[]")) && (N = u.toArray(y)))
                return E = pr(E),
                N.forEach(function(O, M) {
                    !(u.isUndefined(O) || O === null) && t.append(s === !0 ? Pn([E], M, o) : s === null ? E : E + "[]", d(O))
                }),
                !1
        }
        return cn(y) ? !0 : (t.append(Pn(b, E, o), d(y)),
        !1)
    }
    const g = []
      , c = Object.assign(Ma, {
        defaultVisitor: f,
        convertValue: d,
        isVisitable: cn
    });
    function S(y, E) {
        if (!u.isUndefined(y)) {
            if (g.indexOf(y) !== -1)
                throw Error("Circular reference detected in " + E.join("."));
            g.push(y),
            u.forEach(y, function(N, v) {
                (!(u.isUndefined(N) || N === null) && a.call(t, N, u.isString(v) ? v.trim() : v, E, c)) === !0 && S(N, E ? E.concat(v) : [v])
            }),
            g.pop()
        }
    }
    if (!u.isObject(e))
        throw new TypeError("data must be an object");
    return S(e),
    t
}
function Ln(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function bn(e, t) {
    this._pairs = [],
    e && qt(e, this, t)
}
const gr = bn.prototype;
gr.append = function(t, n) {
    this._pairs.push([t, n])
}
;
gr.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Ln)
    }
    : Ln;
    return this._pairs.map(function(a) {
        return n(a[0]) + "=" + n(a[1])
    }, "").join("&")
}
;
function Na(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function yr(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || Na;
    u.isFunction(n) && (n = {
        serialize: n
    });
    const a = n && n.serialize;
    let o;
    if (a ? o = a(t, n) : o = u.isURLSearchParams(t) ? t.toString() : new bn(t,n).toString(r),
    o) {
        const s = e.indexOf("#");
        s !== -1 && (e = e.slice(0, s)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}
class In {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        u.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const br = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , Ca = typeof URLSearchParams < "u" ? URLSearchParams : bn
  , Da = typeof FormData < "u" ? FormData : null
  , Pa = typeof Blob < "u" ? Blob : null
  , La = {
    isBrowser: !0,
    classes: {
        URLSearchParams: Ca,
        FormData: Da,
        Blob: Pa
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , wn = typeof window < "u" && typeof document < "u"
  , un = typeof navigator == "object" && navigator || void 0
  , Ia = wn && (!un || ["ReactNative", "NativeScript", "NS"].indexOf(un.product) < 0)
  , Fa = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , Ua = wn && window.location.href || "http://localhost"
  , Ba = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: wn,
    hasStandardBrowserEnv: Ia,
    hasStandardBrowserWebWorkerEnv: Fa,
    navigator: un,
    origin: Ua
}, Symbol.toStringTag, {
    value: "Module"
}))
  , K = {
    ...Ba,
    ...La
};
function Ha(e, t) {
    return qt(e, new K.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, a, o) {
            return K.isNode && u.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function Wa(e) {
    return u.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function Ya(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const a = n.length;
    let o;
    for (r = 0; r < a; r++)
        o = n[r],
        t[o] = e[o];
    return t
}
function wr(e) {
    function t(n, r, a, o) {
        let s = n[o++];
        if (s === "__proto__")
            return !0;
        const l = Number.isFinite(+s)
          , h = o >= n.length;
        return s = !s && u.isArray(a) ? a.length : s,
        h ? (u.hasOwnProp(a, s) ? a[s] = [a[s], r] : a[s] = r,
        !l) : ((!a[s] || !u.isObject(a[s])) && (a[s] = []),
        t(n, r, a[s], o) && u.isArray(a[s]) && (a[s] = Ya(a[s])),
        !l)
    }
    if (u.isFormData(e) && u.isFunction(e.entries)) {
        const n = {};
        return u.forEachEntry(e, (r, a) => {
            t(Wa(r), a, n, 0)
        }
        ),
        n
    }
    return null
}
function za(e, t, n) {
    if (u.isString(e))
        try {
            return (t || JSON.parse)(e),
            u.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const vt = {
    transitional: br,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , a = r.indexOf("application/json") > -1
          , o = u.isObject(t);
        if (o && u.isHTMLForm(t) && (t = new FormData(t)),
        u.isFormData(t))
            return a ? JSON.stringify(wr(t)) : t;
        if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) || u.isReadableStream(t))
            return t;
        if (u.isArrayBufferView(t))
            return t.buffer;
        if (u.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let l;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return Ha(t, this.formSerializer).toString();
            if ((l = u.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const h = this.env && this.env.FormData;
                return qt(l ? {
                    "files[]": t
                } : t, h && new h, this.formSerializer)
            }
        }
        return o || a ? (n.setContentType("application/json", !1),
        za(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || vt.transitional
          , r = n && n.forcedJSONParsing
          , a = this.responseType === "json";
        if (u.isResponse(t) || u.isReadableStream(t))
            return t;
        if (t && u.isString(t) && (r && !this.responseType || a)) {
            const s = !(n && n.silentJSONParsing) && a;
            try {
                return JSON.parse(t)
            } catch (l) {
                if (s)
                    throw l.name === "SyntaxError" ? R.from(l, R.ERR_BAD_RESPONSE, this, null, this.response) : l
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: K.classes.FormData,
        Blob: K.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
u.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    vt.headers[e] = {}
}
);
const ja = u.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , qa = e => {
    const t = {};
    let n, r, a;
    return e && e.split(`
`).forEach(function(s) {
        a = s.indexOf(":"),
        n = s.substring(0, a).trim().toLowerCase(),
        r = s.substring(a + 1).trim(),
        !(!n || t[n] && ja[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , Fn = Symbol("internals");
function ht(e) {
    return e && String(e).trim().toLowerCase()
}
function Pt(e) {
    return e === !1 || e == null ? e : u.isArray(e) ? e.map(Pt) : String(e)
}
function $a(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const Ga = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Qt(e, t, n, r, a) {
    if (u.isFunction(r))
        return r.call(this, t, n);
    if (a && (t = n),
    !!u.isString(t)) {
        if (u.isString(r))
            return t.indexOf(r) !== -1;
        if (u.isRegExp(r))
            return r.test(t)
    }
}
function Va(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function Xa(e, t) {
    const n = u.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(a, o, s) {
                return this[r].call(this, t, a, o, s)
            },
            configurable: !0
        })
    }
    )
}
let ae = class {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const a = this;
        function o(l, h, d) {
            const f = ht(h);
            if (!f)
                throw new Error("header name must be a non-empty string");
            const g = u.findKey(a, f);
            (!g || a[g] === void 0 || d === !0 || d === void 0 && a[g] !== !1) && (a[g || h] = Pt(l))
        }
        const s = (l, h) => u.forEach(l, (d, f) => o(d, f, h));
        if (u.isPlainObject(t) || t instanceof this.constructor)
            s(t, n);
        else if (u.isString(t) && (t = t.trim()) && !Ga(t))
            s(qa(t), n);
        else if (u.isHeaders(t))
            for (const [l,h] of t.entries())
                o(h, l, r);
        else
            t != null && o(n, t, r);
        return this
    }
    get(t, n) {
        if (t = ht(t),
        t) {
            const r = u.findKey(this, t);
            if (r) {
                const a = this[r];
                if (!n)
                    return a;
                if (n === !0)
                    return $a(a);
                if (u.isFunction(n))
                    return n.call(this, a, r);
                if (u.isRegExp(n))
                    return n.exec(a);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = ht(t),
        t) {
            const r = u.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Qt(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let a = !1;
        function o(s) {
            if (s = ht(s),
            s) {
                const l = u.findKey(r, s);
                l && (!n || Qt(r, r[l], l, n)) && (delete r[l],
                a = !0)
            }
        }
        return u.isArray(t) ? t.forEach(o) : o(t),
        a
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , a = !1;
        for (; r--; ) {
            const o = n[r];
            (!t || Qt(this, this[o], o, t, !0)) && (delete this[o],
            a = !0)
        }
        return a
    }
    normalize(t) {
        const n = this
          , r = {};
        return u.forEach(this, (a, o) => {
            const s = u.findKey(r, o);
            if (s) {
                n[s] = Pt(a),
                delete n[o];
                return
            }
            const l = t ? Va(o) : String(o).trim();
            l !== o && delete n[o],
            n[l] = Pt(a),
            r[l] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return u.forEach(this, (r, a) => {
            r != null && r !== !1 && (n[a] = t && u.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(a => r.set(a)),
        r
    }
    static accessor(t) {
        const r = (this[Fn] = this[Fn] = {
            accessors: {}
        }).accessors
          , a = this.prototype;
        function o(s) {
            const l = ht(s);
            r[l] || (Xa(a, s),
            r[l] = !0)
        }
        return u.isArray(t) ? t.forEach(o) : o(t),
        this
    }
}
;
ae.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
u.reduceDescriptors(ae.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
}
);
u.freezeMethods(ae);
function Zt(e, t) {
    const n = this || vt
      , r = t || n
      , a = ae.from(r.headers);
    let o = r.data;
    return u.forEach(e, function(l) {
        o = l.call(n, o, a.normalize(), t ? t.status : void 0)
    }),
    a.normalize(),
    o
}
function Er(e) {
    return !!(e && e.__CANCEL__)
}
function it(e, t, n) {
    R.call(this, e ?? "canceled", R.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
u.inherits(it, R, {
    __CANCEL__: !0
});
function Tr(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new R("Request failed with status code " + n.status,[R.ERR_BAD_REQUEST, R.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function Ja(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function Ka(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let a = 0, o = 0, s;
    return t = t !== void 0 ? t : 1e3,
    function(h) {
        const d = Date.now()
          , f = r[o];
        s || (s = d),
        n[a] = h,
        r[a] = d;
        let g = o
          , c = 0;
        for (; g !== a; )
            c += n[g++],
            g = g % e;
        if (a = (a + 1) % e,
        a === o && (o = (o + 1) % e),
        d - s < t)
            return;
        const S = f && d - f;
        return S ? Math.round(c * 1e3 / S) : void 0
    }
}
function Qa(e, t) {
    let n = 0, r = 1e3 / t, a, o;
    const s = (d, f=Date.now()) => {
        n = f,
        a = null,
        o && (clearTimeout(o),
        o = null),
        e.apply(null, d)
    }
    ;
    return [ (...d) => {
        const f = Date.now()
          , g = f - n;
        g >= r ? s(d, f) : (a = d,
        o || (o = setTimeout( () => {
            o = null,
            s(a)
        }
        , r - g)))
    }
    , () => a && s(a)]
}
const Ft = (e, t, n=3) => {
    let r = 0;
    const a = Ka(50, 250);
    return Qa(o => {
        const s = o.loaded
          , l = o.lengthComputable ? o.total : void 0
          , h = s - r
          , d = a(h)
          , f = s <= l;
        r = s;
        const g = {
            loaded: s,
            total: l,
            progress: l ? s / l : void 0,
            bytes: h,
            rate: d || void 0,
            estimated: d && l && f ? (l - s) / d : void 0,
            event: o,
            lengthComputable: l != null,
            [t ? "download" : "upload"]: !0
        };
        e(g)
    }
    , n)
}
  , Un = (e, t) => {
    const n = e != null;
    return [r => t[0]({
        lengthComputable: n,
        total: e,
        loaded: r
    }), t[1]]
}
  , Bn = e => (...t) => u.asap( () => e(...t))
  , Za = K.hasStandardBrowserEnv ? ( (e, t) => n => (n = new URL(n,K.origin),
e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(K.origin), K.navigator && /(msie|trident)/i.test(K.navigator.userAgent)) : () => !0
  , eo = K.hasStandardBrowserEnv ? {
    write(e, t, n, r, a, o) {
        const s = [e + "=" + encodeURIComponent(t)];
        u.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
        u.isString(r) && s.push("path=" + r),
        u.isString(a) && s.push("domain=" + a),
        o === !0 && s.push("secure"),
        document.cookie = s.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function to(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function no(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Sr(e, t, n) {
    let r = !to(t);
    return e && r || n == !1 ? no(e, t) : t
}
const Hn = e => e instanceof ae ? {
    ...e
} : e;
function Ke(e, t) {
    t = t || {};
    const n = {};
    function r(d, f, g, c) {
        return u.isPlainObject(d) && u.isPlainObject(f) ? u.merge.call({
            caseless: c
        }, d, f) : u.isPlainObject(f) ? u.merge({}, f) : u.isArray(f) ? f.slice() : f
    }
    function a(d, f, g, c) {
        if (u.isUndefined(f)) {
            if (!u.isUndefined(d))
                return r(void 0, d, g, c)
        } else
            return r(d, f, g, c)
    }
    function o(d, f) {
        if (!u.isUndefined(f))
            return r(void 0, f)
    }
    function s(d, f) {
        if (u.isUndefined(f)) {
            if (!u.isUndefined(d))
                return r(void 0, d)
        } else
            return r(void 0, f)
    }
    function l(d, f, g) {
        if (g in t)
            return r(d, f);
        if (g in e)
            return r(void 0, d)
    }
    const h = {
        url: o,
        method: o,
        data: o,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        withXSRFToken: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: l,
        headers: (d, f, g) => a(Hn(d), Hn(f), g, !0)
    };
    return u.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
        const g = h[f] || a
          , c = g(e[f], t[f], f);
        u.isUndefined(c) && g !== l || (n[f] = c)
    }),
    n
}
const xr = e => {
    const t = Ke({}, e);
    let {data: n, withXSRFToken: r, xsrfHeaderName: a, xsrfCookieName: o, headers: s, auth: l} = t;
    t.headers = s = ae.from(s),
    t.url = yr(Sr(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer),
    l && s.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")));
    let h;
    if (u.isFormData(n)) {
        if (K.hasStandardBrowserEnv || K.hasStandardBrowserWebWorkerEnv)
            s.setContentType(void 0);
        else if ((h = s.getContentType()) !== !1) {
            const [d,...f] = h ? h.split(";").map(g => g.trim()).filter(Boolean) : [];
            s.setContentType([d || "multipart/form-data", ...f].join("; "))
        }
    }
    if (K.hasStandardBrowserEnv && (r && u.isFunction(r) && (r = r(t)),
    r || r !== !1 && Za(t.url))) {
        const d = a && o && eo.read(o);
        d && s.set(a, d)
    }
    return t
}
  , ro = typeof XMLHttpRequest < "u"
  , ao = ro && function(e) {
    return new Promise(function(n, r) {
        const a = xr(e);
        let o = a.data;
        const s = ae.from(a.headers).normalize();
        let {responseType: l, onUploadProgress: h, onDownloadProgress: d} = a, f, g, c, S, y;
        function E() {
            S && S(),
            y && y(),
            a.cancelToken && a.cancelToken.unsubscribe(f),
            a.signal && a.signal.removeEventListener("abort", f)
        }
        let b = new XMLHttpRequest;
        b.open(a.method.toUpperCase(), a.url, !0),
        b.timeout = a.timeout;
        function N() {
            if (!b)
                return;
            const O = ae.from("getAllResponseHeaders"in b && b.getAllResponseHeaders())
              , C = {
                data: !l || l === "text" || l === "json" ? b.responseText : b.response,
                status: b.status,
                statusText: b.statusText,
                headers: O,
                config: e,
                request: b
            };
            Tr(function(ne) {
                n(ne),
                E()
            }, function(ne) {
                r(ne),
                E()
            }, C),
            b = null
        }
        "onloadend"in b ? b.onloadend = N : b.onreadystatechange = function() {
            !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(N)
        }
        ,
        b.onabort = function() {
            b && (r(new R("Request aborted",R.ECONNABORTED,e,b)),
            b = null)
        }
        ,
        b.onerror = function() {
            r(new R("Network Error",R.ERR_NETWORK,e,b)),
            b = null
        }
        ,
        b.ontimeout = function() {
            let M = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
            const C = a.transitional || br;
            a.timeoutErrorMessage && (M = a.timeoutErrorMessage),
            r(new R(M,C.clarifyTimeoutError ? R.ETIMEDOUT : R.ECONNABORTED,e,b)),
            b = null
        }
        ,
        o === void 0 && s.setContentType(null),
        "setRequestHeader"in b && u.forEach(s.toJSON(), function(M, C) {
            b.setRequestHeader(C, M)
        }),
        u.isUndefined(a.withCredentials) || (b.withCredentials = !!a.withCredentials),
        l && l !== "json" && (b.responseType = a.responseType),
        d && ([c,y] = Ft(d, !0),
        b.addEventListener("progress", c)),
        h && b.upload && ([g,S] = Ft(h),
        b.upload.addEventListener("progress", g),
        b.upload.addEventListener("loadend", S)),
        (a.cancelToken || a.signal) && (f = O => {
            b && (r(!O || O.type ? new it(null,e,b) : O),
            b.abort(),
            b = null)
        }
        ,
        a.cancelToken && a.cancelToken.subscribe(f),
        a.signal && (a.signal.aborted ? f() : a.signal.addEventListener("abort", f)));
        const v = Ja(a.url);
        if (v && K.protocols.indexOf(v) === -1) {
            r(new R("Unsupported protocol " + v + ":",R.ERR_BAD_REQUEST,e));
            return
        }
        b.send(o || null)
    }
    )
}
  , oo = (e, t) => {
    const {length: n} = e = e ? e.filter(Boolean) : [];
    if (t || n) {
        let r = new AbortController, a;
        const o = function(d) {
            if (!a) {
                a = !0,
                l();
                const f = d instanceof Error ? d : this.reason;
                r.abort(f instanceof R ? f : new it(f instanceof Error ? f.message : f))
            }
        };
        let s = t && setTimeout( () => {
            s = null,
            o(new R(`timeout ${t} of ms exceeded`,R.ETIMEDOUT))
        }
        , t);
        const l = () => {
            e && (s && clearTimeout(s),
            s = null,
            e.forEach(d => {
                d.unsubscribe ? d.unsubscribe(o) : d.removeEventListener("abort", o)
            }
            ),
            e = null)
        }
        ;
        e.forEach(d => d.addEventListener("abort", o));
        const {signal: h} = r;
        return h.unsubscribe = () => u.asap(l),
        h
    }
}
  , so = function*(e, t) {
    let n = e.byteLength;
    if (n < t) {
        yield e;
        return
    }
    let r = 0, a;
    for (; r < n; )
        a = r + t,
        yield e.slice(r, a),
        r = a
}
  , io = async function*(e, t) {
    for await(const n of lo(e))
        yield*so(n, t)
}
  , lo = async function*(e) {
    if (e[Symbol.asyncIterator]) {
        yield*e;
        return
    }
    const t = e.getReader();
    try {
        for (; ; ) {
            const {done: n, value: r} = await t.read();
            if (n)
                break;
            yield r
        }
    } finally {
        await t.cancel()
    }
}
  , Wn = (e, t, n, r) => {
    const a = io(e, t);
    let o = 0, s, l = h => {
        s || (s = !0,
        r && r(h))
    }
    ;
    return new ReadableStream({
        async pull(h) {
            try {
                const {done: d, value: f} = await a.next();
                if (d) {
                    l(),
                    h.close();
                    return
                }
                let g = f.byteLength;
                if (n) {
                    let c = o += g;
                    n(c)
                }
                h.enqueue(new Uint8Array(f))
            } catch (d) {
                throw l(d),
                d
            }
        },
        cancel(h) {
            return l(h),
            a.return()
        }
    },{
        highWaterMark: 2
    })
}
  , $t = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , vr = $t && typeof ReadableStream == "function"
  , co = $t && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer()))
  , Ar = (e, ...t) => {
    try {
        return !!e(...t)
    } catch {
        return !1
    }
}
  , uo = vr && Ar( () => {
    let e = !1;
    const t = new Request(K.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return e && !t
}
)
  , Yn = 64 * 1024
  , dn = vr && Ar( () => u.isReadableStream(new Response("").body))
  , Ut = {
    stream: dn && (e => e.body)
};
$t && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !Ut[t] && (Ut[t] = u.isFunction(e[t]) ? n => n[t]() : (n, r) => {
            throw new R(`Response type '${t}' is not supported`,R.ERR_NOT_SUPPORT,r)
        }
        )
    }
    )
}
)(new Response);
const fo = async e => {
    if (e == null)
        return 0;
    if (u.isBlob(e))
        return e.size;
    if (u.isSpecCompliantForm(e))
        return (await new Request(K.origin,{
            method: "POST",
            body: e
        }).arrayBuffer()).byteLength;
    if (u.isArrayBufferView(e) || u.isArrayBuffer(e))
        return e.byteLength;
    if (u.isURLSearchParams(e) && (e = e + ""),
    u.isString(e))
        return (await co(e)).byteLength
}
  , ho = async (e, t) => {
    const n = u.toFiniteNumber(e.getContentLength());
    return n ?? fo(t)
}
  , mo = $t && (async e => {
    let {url: t, method: n, data: r, signal: a, cancelToken: o, timeout: s, onDownloadProgress: l, onUploadProgress: h, responseType: d, headers: f, withCredentials: g="same-origin", fetchOptions: c} = xr(e);
    d = d ? (d + "").toLowerCase() : "text";
    let S = oo([a, o && o.toAbortSignal()], s), y;
    const E = S && S.unsubscribe && ( () => {
        S.unsubscribe()
    }
    );
    let b;
    try {
        if (h && uo && n !== "get" && n !== "head" && (b = await ho(f, r)) !== 0) {
            let C = new Request(t,{
                method: "POST",
                body: r,
                duplex: "half"
            }), q;
            if (u.isFormData(r) && (q = C.headers.get("content-type")) && f.setContentType(q),
            C.body) {
                const [ne,he] = Un(b, Ft(Bn(h)));
                r = Wn(C.body, Yn, ne, he)
            }
        }
        u.isString(g) || (g = g ? "include" : "omit");
        const N = "credentials"in Request.prototype;
        y = new Request(t,{
            ...c,
            signal: S,
            method: n.toUpperCase(),
            headers: f.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: N ? g : void 0
        });
        let v = await fetch(y);
        const O = dn && (d === "stream" || d === "response");
        if (dn && (l || O && E)) {
            const C = {};
            ["status", "statusText", "headers"].forEach(De => {
                C[De] = v[De]
            }
            );
            const q = u.toFiniteNumber(v.headers.get("content-length"))
              , [ne,he] = l && Un(q, Ft(Bn(l), !0)) || [];
            v = new Response(Wn(v.body, Yn, ne, () => {
                he && he(),
                E && E()
            }
            ),C)
        }
        d = d || "text";
        let M = await Ut[u.findKey(Ut, d) || "text"](v, e);
        return !O && E && E(),
        await new Promise( (C, q) => {
            Tr(C, q, {
                data: M,
                headers: ae.from(v.headers),
                status: v.status,
                statusText: v.statusText,
                config: e,
                request: y
            })
        }
        )
    } catch (N) {
        throw E && E(),
        N && N.name === "TypeError" && /fetch/i.test(N.message) ? Object.assign(new R("Network Error",R.ERR_NETWORK,e,y), {
            cause: N.cause || N
        }) : R.from(N, N && N.code, e, y)
    }
}
)
  , fn = {
    http: _a,
    xhr: ao,
    fetch: mo
};
u.forEach(fn, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const zn = e => `- ${e}`
  , po = e => u.isFunction(e) || e === null || e === !1
  , Or = {
    getAdapter: e => {
        e = u.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const a = {};
        for (let o = 0; o < t; o++) {
            n = e[o];
            let s;
            if (r = n,
            !po(n) && (r = fn[(s = String(n)).toLowerCase()],
            r === void 0))
                throw new R(`Unknown adapter '${s}'`);
            if (r)
                break;
            a[s || "#" + o] = r
        }
        if (!r) {
            const o = Object.entries(a).map( ([l,h]) => `adapter ${l} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build"));
            let s = t ? o.length > 1 ? `since :
` + o.map(zn).join(`
`) : " " + zn(o[0]) : "as no adapter specified";
            throw new R("There is no suitable adapter to dispatch the request " + s,"ERR_NOT_SUPPORT")
        }
        return r
    }
    ,
    adapters: fn
};
function en(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new it(null,e)
}
function jn(e) {
    return en(e),
    e.headers = ae.from(e.headers),
    e.data = Zt.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Or.getAdapter(e.adapter || vt.adapter)(e).then(function(r) {
        return en(e),
        r.data = Zt.call(e, e.transformResponse, r),
        r.headers = ae.from(r.headers),
        r
    }, function(r) {
        return Er(r) || (en(e),
        r && r.response && (r.response.data = Zt.call(e, e.transformResponse, r.response),
        r.response.headers = ae.from(r.response.headers))),
        Promise.reject(r)
    })
}
const Rr = "1.8.3"
  , Gt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    Gt[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const qn = {};
Gt.transitional = function(t, n, r) {
    function a(o, s) {
        return "[Axios v" + Rr + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "")
    }
    return (o, s, l) => {
        if (t === !1)
            throw new R(a(s, " has been removed" + (n ? " in " + n : "")),R.ERR_DEPRECATED);
        return n && !qn[s] && (qn[s] = !0,
        console.warn(a(s, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(o, s, l) : !0
    }
}
;
Gt.spelling = function(t) {
    return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`),
    !0)
}
;
function go(e, t, n) {
    if (typeof e != "object")
        throw new R("options must be an object",R.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let a = r.length;
    for (; a-- > 0; ) {
        const o = r[a]
          , s = t[o];
        if (s) {
            const l = e[o]
              , h = l === void 0 || s(l, o, e);
            if (h !== !0)
                throw new R("option " + o + " must be " + h,R.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new R("Unknown option " + o,R.ERR_BAD_OPTION)
    }
}
const Lt = {
    assertOptions: go,
    validators: Gt
}
  , Ae = Lt.validators;
let Je = class {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new In,
            response: new In
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let a = {};
                Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error;
                const o = a.stack ? a.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
                } catch {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = Ke(this.defaults, n);
        const {transitional: r, paramsSerializer: a, headers: o} = n;
        r !== void 0 && Lt.assertOptions(r, {
            silentJSONParsing: Ae.transitional(Ae.boolean),
            forcedJSONParsing: Ae.transitional(Ae.boolean),
            clarifyTimeoutError: Ae.transitional(Ae.boolean)
        }, !1),
        a != null && (u.isFunction(a) ? n.paramsSerializer = {
            serialize: a
        } : Lt.assertOptions(a, {
            encode: Ae.function,
            serialize: Ae.function
        }, !0)),
        n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0),
        Lt.assertOptions(n, {
            baseUrl: Ae.spelling("baseURL"),
            withXsrfToken: Ae.spelling("withXSRFToken")
        }, !0),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let s = o && u.merge(o.common, o[n.method]);
        o && u.forEach(["delete", "get", "head", "post", "put", "patch", "common"], y => {
            delete o[y]
        }
        ),
        n.headers = ae.concat(s, o);
        const l = [];
        let h = !0;
        this.interceptors.request.forEach(function(E) {
            typeof E.runWhen == "function" && E.runWhen(n) === !1 || (h = h && E.synchronous,
            l.unshift(E.fulfilled, E.rejected))
        });
        const d = [];
        this.interceptors.response.forEach(function(E) {
            d.push(E.fulfilled, E.rejected)
        });
        let f, g = 0, c;
        if (!h) {
            const y = [jn.bind(this), void 0];
            for (y.unshift.apply(y, l),
            y.push.apply(y, d),
            c = y.length,
            f = Promise.resolve(n); g < c; )
                f = f.then(y[g++], y[g++]);
            return f
        }
        c = l.length;
        let S = n;
        for (g = 0; g < c; ) {
            const y = l[g++]
              , E = l[g++];
            try {
                S = y(S)
            } catch (b) {
                E.call(this, b);
                break
            }
        }
        try {
            f = jn.call(this, S)
        } catch (y) {
            return Promise.reject(y)
        }
        for (g = 0,
        c = d.length; g < c; )
            f = f.then(d[g++], d[g++]);
        return f
    }
    getUri(t) {
        t = Ke(this.defaults, t);
        const n = Sr(t.baseURL, t.url, t.allowAbsoluteUrls);
        return yr(n, t.params, t.paramsSerializer)
    }
}
;
u.forEach(["delete", "get", "head", "options"], function(t) {
    Je.prototype[t] = function(n, r) {
        return this.request(Ke(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
u.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(o, s, l) {
            return this.request(Ke(l || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: s
            }))
        }
    }
    Je.prototype[t] = n(),
    Je.prototype[t + "Form"] = n(!0)
});
let yo = class _r {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(o) {
            n = o
        }
        );
        const r = this;
        this.promise.then(a => {
            if (!r._listeners)
                return;
            let o = r._listeners.length;
            for (; o-- > 0; )
                r._listeners[o](a);
            r._listeners = null
        }
        ),
        this.promise.then = a => {
            let o;
            const s = new Promise(l => {
                r.subscribe(l),
                o = l
            }
            ).then(a);
            return s.cancel = function() {
                r.unsubscribe(o)
            }
            ,
            s
        }
        ,
        t(function(o, s, l) {
            r.reason || (r.reason = new it(o,s,l),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const t = new AbortController
          , n = r => {
            t.abort(r)
        }
        ;
        return this.subscribe(n),
        t.signal.unsubscribe = () => this.unsubscribe(n),
        t.signal
    }
    static source() {
        let t;
        return {
            token: new _r(function(a) {
                t = a
            }
            ),
            cancel: t
        }
    }
}
;
function bo(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function wo(e) {
    return u.isObject(e) && e.isAxiosError === !0
}
const hn = {
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
    NetworkAuthenticationRequired: 511
};
Object.entries(hn).forEach( ([e,t]) => {
    hn[t] = e
}
);
function kr(e) {
    const t = new Je(e)
      , n = sr(Je.prototype.request, t);
    return u.extend(n, Je.prototype, t, {
        allOwnKeys: !0
    }),
    u.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(a) {
        return kr(Ke(e, a))
    }
    ,
    n
}
const j = kr(vt);
j.Axios = Je;
j.CanceledError = it;
j.CancelToken = yo;
j.isCancel = Er;
j.VERSION = Rr;
j.toFormData = qt;
j.AxiosError = R;
j.Cancel = j.CanceledError;
j.all = function(t) {
    return Promise.all(t)
}
;
j.spread = bo;
j.isAxiosError = wo;
j.mergeConfig = Ke;
j.AxiosHeaders = ae;
j.formToJSON = e => wr(u.isHTMLForm(e) ? new FormData(e) : e);
j.getAdapter = Or.getAdapter;
j.HttpStatusCode = hn;
j.default = j;
const {Axios: Ri, AxiosError: _i, CanceledError: ki, isCancel: Mi, CancelToken: Ni, VERSION: Ci, all: Di, Cancel: Pi, isAxiosError: Li, spread: Ii, toFormData: Fi, AxiosHeaders: Ui, HttpStatusCode: Bi, formToJSON: Hi, getAdapter: Wi, mergeConfig: Yi} = j;
var Eo = e => {
    switch (e) {
    case "success":
        return xo;
    case "info":
        return Ao;
    case "warning":
        return vo;
    case "error":
        return Oo;
    default:
        return null
    }
}
  , To = Array(12).fill(0)
  , So = ({visible: e}) => p.createElement("div", {
    className: "sonner-loading-wrapper",
    "data-visible": e
}, p.createElement("div", {
    className: "sonner-spinner"
}, To.map( (t, n) => p.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${n}`
}))))
  , xo = p.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, p.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , vo = p.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, p.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , Ao = p.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, p.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , Oo = p.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, p.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , Ro = () => {
    let[e,t] = p.useState(document.hidden);
    return p.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , mn = 1
  , _o = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , a = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : mn++
              , o = this.toasts.find(l => l.id === a)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return o ? this.toasts = this.toasts.map(l => l.id === a ? (this.publish({
                ...l,
                ...e,
                id: a,
                title: n
            }),
            {
                ...l,
                ...e,
                id: a,
                dismissible: s,
                title: n
            }) : l) : this.addToast({
                title: n,
                ...r,
                dismissible: s,
                id: a
            }),
            a
        }
        ,
        this.dismiss = e => (e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e()
              , a = n !== void 0;
            return r.then(async o => {
                if (Mo(o) && !o.ok) {
                    a = !1;
                    let s = typeof t.error == "function" ? await t.error(`HTTP error! status: ${o.status}`) : t.error
                      , l = typeof t.description == "function" ? await t.description(`HTTP error! status: ${o.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: s,
                        description: l
                    })
                } else if (t.success !== void 0) {
                    a = !1;
                    let s = typeof t.success == "function" ? await t.success(o) : t.success
                      , l = typeof t.description == "function" ? await t.description(o) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: s,
                        description: l
                    })
                }
            }
            ).catch(async o => {
                if (t.error !== void 0) {
                    a = !1;
                    let s = typeof t.error == "function" ? await t.error(o) : t.error
                      , l = typeof t.description == "function" ? await t.description(o) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: s,
                        description: l
                    })
                }
            }
            ).finally( () => {
                var o;
                a && (this.dismiss(n),
                n = void 0),
                (o = t.finally) == null || o.call(t)
            }
            ),
            n
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || mn++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.subscribers = [],
        this.toasts = []
    }
}
  , ie = new _o
  , ko = (e, t) => {
    let n = (t == null ? void 0 : t.id) || mn++;
    return ie.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , Mo = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , No = ko
  , Co = () => ie.toasts
  , zi = Object.assign(No, {
    success: ie.success,
    info: ie.info,
    warning: ie.warning,
    error: ie.error,
    custom: ie.custom,
    message: ie.message,
    promise: ie.promise,
    dismiss: ie.dismiss,
    loading: ie.loading
}, {
    getHistory: Co
});
function Do(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
Do(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Mt(e) {
    return e.label !== void 0
}
var Po = 3
  , Lo = "32px"
  , Io = 4e3
  , Fo = 356
  , Uo = 14
  , Bo = 20
  , Ho = 200;
function Wo(...e) {
    return e.filter(Boolean).join(" ")
}
var Yo = e => {
    var t, n, r, a, o, s, l, h, d, f;
    let {invert: g, toast: c, unstyled: S, interacting: y, setHeights: E, visibleToasts: b, heights: N, index: v, toasts: O, expanded: M, removeToast: C, defaultRichColors: q, closeButton: ne, style: he, cancelButtonStyle: De, actionButtonStyle: lt, className: W="", descriptionClassName: Pe="", duration: Oe, position: We, gap: Le, loadingIcon: me, expandByDefault: Ye, classNames: P, icons: oe, closeButtonAriaLabel: Ze="Close toast", pauseWhenPageIsHidden: x, cn: B} = e
      , [_,se] = p.useState(!1)
      , [F,H] = p.useState(!1)
      , [ze,Ie] = p.useState(!1)
      , [Re,Fe] = p.useState(!1)
      , [Ot,be] = p.useState(0)
      , [ct,we] = p.useState(0)
      , et = p.useRef(null)
      , Ee = p.useRef(null)
      , Ue = v === 0
      , tt = v + 1 <= b
      , G = c.type
      , _e = c.dismissible !== !1
      , Rt = c.className || ""
      , Vt = c.descriptionClassName || ""
      , Be = p.useMemo( () => N.findIndex(A => A.toastId === c.id) || 0, [N, c.id])
      , je = p.useMemo( () => {
        var A;
        return (A = c.closeButton) != null ? A : ne
    }
    , [c.closeButton, ne])
      , ke = p.useMemo( () => c.duration || Oe || Io, [c.duration, Oe])
      , Te = p.useRef(0)
      , Me = p.useRef(0)
      , ut = p.useRef(0)
      , Ne = p.useRef(null)
      , [nt,_t] = We.split("-")
      , qe = p.useMemo( () => N.reduce( (A, I, L) => L >= Be ? A : A + I.height, 0), [N, Be])
      , $e = Ro()
      , pe = c.invert || g
      , Se = G === "loading";
    Me.current = p.useMemo( () => Be * Le + qe, [Be, qe]),
    p.useEffect( () => {
        se(!0)
    }
    , []),
    p.useLayoutEffect( () => {
        if (!_)
            return;
        let A = Ee.current
          , I = A.style.height;
        A.style.height = "auto";
        let L = A.getBoundingClientRect().height;
        A.style.height = I,
        we(L),
        E(de => de.find(X => X.toastId === c.id) ? de.map(X => X.toastId === c.id ? {
            ...X,
            height: L
        } : X) : [{
            toastId: c.id,
            height: L,
            position: c.position
        }, ...de])
    }
    , [_, c.title, c.description, E, c.id]);
    let ue = p.useCallback( () => {
        H(!0),
        be(Me.current),
        E(A => A.filter(I => I.toastId !== c.id)),
        setTimeout( () => {
            C(c)
        }
        , Ho)
    }
    , [c, C, E, Me]);
    p.useEffect( () => {
        if (c.promise && G === "loading" || c.duration === 1 / 0 || c.type === "loading")
            return;
        let A, I = ke;
        return M || y || x && $e ? ( () => {
            if (ut.current < Te.current) {
                let L = new Date().getTime() - Te.current;
                I = I - L
            }
            ut.current = new Date().getTime()
        }
        )() : I !== 1 / 0 && (Te.current = new Date().getTime(),
        A = setTimeout( () => {
            var L;
            (L = c.onAutoClose) == null || L.call(c, c),
            ue()
        }
        , I)),
        () => clearTimeout(A)
    }
    , [M, y, Ye, c, ke, ue, c.promise, G, x, $e]),
    p.useEffect( () => {
        let A = Ee.current;
        if (A) {
            let I = A.getBoundingClientRect().height;
            return we(I),
            E(L => [{
                toastId: c.id,
                height: I,
                position: c.position
            }, ...L]),
            () => E(L => L.filter(de => de.toastId !== c.id))
        }
    }
    , [E, c.id]),
    p.useEffect( () => {
        c.delete && ue()
    }
    , [ue, c.delete]);
    function dt() {
        return oe != null && oe.loading ? p.createElement("div", {
            className: "sonner-loader",
            "data-visible": G === "loading"
        }, oe.loading) : me ? p.createElement("div", {
            className: "sonner-loader",
            "data-visible": G === "loading"
        }, me) : p.createElement(So, {
            visible: G === "loading"
        })
    }
    return p.createElement("li", {
        "aria-live": c.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: Ee,
        className: B(W, Rt, P == null ? void 0 : P.toast, (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast, P == null ? void 0 : P.default, P == null ? void 0 : P[G], (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[G]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = c.richColors) != null ? r : q,
        "data-styled": !(c.jsx || c.unstyled || S),
        "data-mounted": _,
        "data-promise": !!c.promise,
        "data-removed": F,
        "data-visible": tt,
        "data-y-position": nt,
        "data-x-position": _t,
        "data-index": v,
        "data-front": Ue,
        "data-swiping": ze,
        "data-dismissible": _e,
        "data-type": G,
        "data-invert": pe,
        "data-swipe-out": Re,
        "data-expanded": !!(M || Ye && _),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": O.length - v,
            "--offset": `${F ? Ot : Me.current}px`,
            "--initial-height": Ye ? "auto" : `${ct}px`,
            ...he,
            ...c.style
        },
        onPointerDown: A => {
            Se || !_e || (et.current = new Date,
            be(Me.current),
            A.target.setPointerCapture(A.pointerId),
            A.target.tagName !== "BUTTON" && (Ie(!0),
            Ne.current = {
                x: A.clientX,
                y: A.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var A, I, L, de;
            if (Re || !_e)
                return;
            Ne.current = null;
            let X = Number(((A = Ee.current) == null ? void 0 : A.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0)
              , rt = new Date().getTime() - ((I = et.current) == null ? void 0 : I.getTime())
              , Xt = Math.abs(X) / rt;
            if (Math.abs(X) >= Bo || Xt > .11) {
                be(Me.current),
                (L = c.onDismiss) == null || L.call(c, c),
                ue(),
                Fe(!0);
                return
            }
            (de = Ee.current) == null || de.style.setProperty("--swipe-amount", "0px"),
            Ie(!1)
        }
        ,
        onPointerMove: A => {
            var I;
            if (!Ne.current || !_e)
                return;
            let L = A.clientY - Ne.current.y
              , de = A.clientX - Ne.current.x
              , X = (nt === "top" ? Math.min : Math.max)(0, L)
              , rt = A.pointerType === "touch" ? 10 : 2;
            Math.abs(X) > rt ? (I = Ee.current) == null || I.style.setProperty("--swipe-amount", `${L}px`) : Math.abs(de) > rt && (Ne.current = null)
        }
    }, je && !c.jsx ? p.createElement("button", {
        "aria-label": Ze,
        "data-disabled": Se,
        "data-close-button": !0,
        onClick: Se || !_e ? () => {}
        : () => {
            var A;
            ue(),
            (A = c.onDismiss) == null || A.call(c, c)
        }
        ,
        className: B(P == null ? void 0 : P.closeButton, (a = c == null ? void 0 : c.classNames) == null ? void 0 : a.closeButton)
    }, p.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, p.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), p.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))) : null, c.jsx || p.isValidElement(c.title) ? c.jsx || c.title : p.createElement(p.Fragment, null, G || c.icon || c.promise ? p.createElement("div", {
        "data-icon": "",
        className: B(P == null ? void 0 : P.icon, (o = c == null ? void 0 : c.classNames) == null ? void 0 : o.icon)
    }, c.promise || c.type === "loading" && !c.icon ? c.icon || dt() : null, c.type !== "loading" ? c.icon || (oe == null ? void 0 : oe[G]) || Eo(G) : null) : null, p.createElement("div", {
        "data-content": "",
        className: B(P == null ? void 0 : P.content, (s = c == null ? void 0 : c.classNames) == null ? void 0 : s.content)
    }, p.createElement("div", {
        "data-title": "",
        className: B(P == null ? void 0 : P.title, (l = c == null ? void 0 : c.classNames) == null ? void 0 : l.title)
    }, c.title), c.description ? p.createElement("div", {
        "data-description": "",
        className: B(Pe, Vt, P == null ? void 0 : P.description, (h = c == null ? void 0 : c.classNames) == null ? void 0 : h.description)
    }, c.description) : null), p.isValidElement(c.cancel) ? c.cancel : c.cancel && Mt(c.cancel) ? p.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: c.cancelButtonStyle || De,
        onClick: A => {
            var I, L;
            Mt(c.cancel) && _e && ((L = (I = c.cancel).onClick) == null || L.call(I, A),
            ue())
        }
        ,
        className: B(P == null ? void 0 : P.cancelButton, (d = c == null ? void 0 : c.classNames) == null ? void 0 : d.cancelButton)
    }, c.cancel.label) : null, p.isValidElement(c.action) ? c.action : c.action && Mt(c.action) ? p.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: c.actionButtonStyle || lt,
        onClick: A => {
            var I, L;
            Mt(c.action) && (A.defaultPrevented || ((L = (I = c.action).onClick) == null || L.call(I, A),
            ue()))
        }
        ,
        className: B(P == null ? void 0 : P.actionButton, (f = c == null ? void 0 : c.classNames) == null ? void 0 : f.actionButton)
    }, c.action.label) : null))
}
;
function $n() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var ji = e => {
    let {invert: t, position: n="bottom-right", hotkey: r=["altKey", "KeyT"], expand: a, closeButton: o, className: s, offset: l, theme: h="light", richColors: d, duration: f, style: g, visibleToasts: c=Po, toastOptions: S, dir: y=$n(), gap: E=Uo, loadingIcon: b, icons: N, containerAriaLabel: v="Notifications", pauseWhenPageIsHidden: O, cn: M=Wo} = e
      , [C,q] = p.useState([])
      , ne = p.useMemo( () => Array.from(new Set([n].concat(C.filter(x => x.position).map(x => x.position)))), [C, n])
      , [he,De] = p.useState([])
      , [lt,W] = p.useState(!1)
      , [Pe,Oe] = p.useState(!1)
      , [We,Le] = p.useState(h !== "system" ? h : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , me = p.useRef(null)
      , Ye = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , P = p.useRef(null)
      , oe = p.useRef(!1)
      , Ze = p.useCallback(x => {
        var B;
        (B = C.find(_ => _.id === x.id)) != null && B.delete || ie.dismiss(x.id),
        q(_ => _.filter( ({id: se}) => se !== x.id))
    }
    , [C]);
    return p.useEffect( () => ie.subscribe(x => {
        if (x.dismiss) {
            q(B => B.map(_ => _.id === x.id ? {
                ..._,
                delete: !0
            } : _));
            return
        }
        setTimeout( () => {
            zr.flushSync( () => {
                q(B => {
                    let _ = B.findIndex(se => se.id === x.id);
                    return _ !== -1 ? [...B.slice(0, _), {
                        ...B[_],
                        ...x
                    }, ...B.slice(_ + 1)] : [x, ...B]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    p.useEffect( () => {
        if (h !== "system") {
            Le(h);
            return
        }
        h === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Le("dark") : Le("light")),
        typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({matches: x}) => {
            Le(x ? "dark" : "light")
        }
        )
    }
    , [h]),
    p.useEffect( () => {
        C.length <= 1 && W(!1)
    }
    , [C]),
    p.useEffect( () => {
        let x = B => {
            var _, se;
            r.every(F => B[F] || B.code === F) && (W(!0),
            (_ = me.current) == null || _.focus()),
            B.code === "Escape" && (document.activeElement === me.current || (se = me.current) != null && se.contains(document.activeElement)) && W(!1)
        }
        ;
        return document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
    }
    , [r]),
    p.useEffect( () => {
        if (me.current)
            return () => {
                P.current && (P.current.focus({
                    preventScroll: !0
                }),
                P.current = null,
                oe.current = !1)
            }
    }
    , [me.current]),
    C.length ? p.createElement("section", {
        "aria-label": `${v} ${Ye}`,
        tabIndex: -1
    }, ne.map( (x, B) => {
        var _;
        let[se,F] = x.split("-");
        return p.createElement("ol", {
            key: x,
            dir: y === "auto" ? $n() : y,
            tabIndex: -1,
            ref: me,
            className: s,
            "data-sonner-toaster": !0,
            "data-theme": We,
            "data-y-position": se,
            "data-x-position": F,
            style: {
                "--front-toast-height": `${((_ = he[0]) == null ? void 0 : _.height) || 0}px`,
                "--offset": typeof l == "number" ? `${l}px` : l || Lo,
                "--width": `${Fo}px`,
                "--gap": `${E}px`,
                ...g
            },
            onBlur: H => {
                oe.current && !H.currentTarget.contains(H.relatedTarget) && (oe.current = !1,
                P.current && (P.current.focus({
                    preventScroll: !0
                }),
                P.current = null))
            }
            ,
            onFocus: H => {
                H.target instanceof HTMLElement && H.target.dataset.dismissible === "false" || oe.current || (oe.current = !0,
                P.current = H.relatedTarget)
            }
            ,
            onMouseEnter: () => W(!0),
            onMouseMove: () => W(!0),
            onMouseLeave: () => {
                Pe || W(!1)
            }
            ,
            onPointerDown: H => {
                H.target instanceof HTMLElement && H.target.dataset.dismissible === "false" || Oe(!0)
            }
            ,
            onPointerUp: () => Oe(!1)
        }, C.filter(H => !H.position && B === 0 || H.position === x).map( (H, ze) => {
            var Ie, Re;
            return p.createElement(Yo, {
                key: H.id,
                icons: N,
                index: ze,
                toast: H,
                defaultRichColors: d,
                duration: (Ie = S == null ? void 0 : S.duration) != null ? Ie : f,
                className: S == null ? void 0 : S.className,
                descriptionClassName: S == null ? void 0 : S.descriptionClassName,
                invert: t,
                visibleToasts: c,
                closeButton: (Re = S == null ? void 0 : S.closeButton) != null ? Re : o,
                interacting: Pe,
                position: x,
                style: S == null ? void 0 : S.style,
                unstyled: S == null ? void 0 : S.unstyled,
                classNames: S == null ? void 0 : S.classNames,
                cancelButtonStyle: S == null ? void 0 : S.cancelButtonStyle,
                actionButtonStyle: S == null ? void 0 : S.actionButtonStyle,
                removeToast: Ze,
                toasts: C.filter(Fe => Fe.position == H.position),
                heights: he.filter(Fe => Fe.position == H.position),
                setHeights: De,
                expandByDefault: a,
                gap: E,
                loadingIcon: b,
                expanded: lt,
                pauseWhenPageIsHidden: O,
                cn: M
            })
        }
        ))
    }
    )) : null
}
;
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Mr = (...e) => e.filter( (t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var jo = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = Tt.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: a="", children: o, iconNode: s, ...l}, h) => Tt.createElement("svg", {
    ref: h,
    ...jo,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Mr("lucide", a),
    ...l
}, [...s.map( ([d,f]) => Tt.createElement(d, f)), ...Array.isArray(o) ? o : [o]]));
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z = (e, t) => {
    const n = Tt.forwardRef( ({className: r, ...a}, o) => Tt.createElement(qo, {
        ref: o,
        iconNode: t,
        className: Mr(`lucide-${zo(e)}`, r),
        ...a
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qi = z("AlignJustify", [["line", {
    x1: "3",
    x2: "21",
    y1: "6",
    y2: "6",
    key: "4m8b97"
}], ["line", {
    x1: "3",
    x2: "21",
    y1: "12",
    y2: "12",
    key: "10d38w"
}], ["line", {
    x1: "3",
    x2: "21",
    y1: "18",
    y2: "18",
    key: "kwyyxn"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $i = z("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = z("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vi = z("Briefcase", [["path", {
    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "jecpp"
}], ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2",
    key: "i6l2r4"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xi = z("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ji = z("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ki = z("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qi = z("ChevronLeft", [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zi = z("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = z("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tl = z("ChevronsUp", [["path", {
    d: "m17 11-5-5-5 5",
    key: "e8nh98"
}], ["path", {
    d: "m17 18-5-5-5 5",
    key: "2avn1x"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = z("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rl = z("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const al = z("GraduationCap", [["path", {
    d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
    key: "j76jl0"
}], ["path", {
    d: "M22 10v6",
    key: "1lu8f3"
}], ["path", {
    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
    key: "1r8lef"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ol = z("House", [["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
}], ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sl = z("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const il = z("MoveRight", [["path", {
    d: "M18 8L22 12L18 16",
    key: "1r0oui"
}], ["path", {
    d: "M2 12H22",
    key: "1m8cig"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ll = z("PhoneCall", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}], ["path", {
    d: "M14.05 2a9 9 0 0 1 8 7.94",
    key: "vmijpz"
}], ["path", {
    d: "M14.05 6A5 5 0 0 1 18 10",
    key: "13nbpp"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cl = z("Plane", [["path", {
    d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
    key: "1v9wt8"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ul = z("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dl = z("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
function D(e) {
    const t = Object.prototype.toString.call(e);
    return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : new Date(NaN)
}
function ce(e, t) {
    return e instanceof Date ? new e.constructor(t) : new Date(t)
}
function Nr(e, t) {
    const n = D(e);
    return isNaN(t) ? ce(e, NaN) : (t && n.setDate(n.getDate() + t),
    n)
}
function $o(e, t) {
    const n = D(e);
    if (isNaN(t))
        return ce(e, NaN);
    if (!t)
        return n;
    const r = n.getDate()
      , a = ce(e, n.getTime());
    a.setMonth(n.getMonth() + t + 1, 0);
    const o = a.getDate();
    return r >= o ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), r),
    n)
}
const En = 6048e5
  , Go = 864e5;
let Vo = {};
function At() {
    return Vo
}
function Qe(e, t) {
    var l, h, d, f;
    const n = At()
      , r = (t == null ? void 0 : t.weekStartsOn) ?? ((h = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : h.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0
      , a = D(e)
      , o = a.getDay()
      , s = (o < r ? 7 : 0) + o - r;
    return a.setDate(a.getDate() - s),
    a.setHours(0, 0, 0, 0),
    a
}
function Bt(e) {
    return Qe(e, {
        weekStartsOn: 1
    })
}
function Cr(e) {
    const t = D(e)
      , n = t.getFullYear()
      , r = ce(e, 0);
    r.setFullYear(n + 1, 0, 4),
    r.setHours(0, 0, 0, 0);
    const a = Bt(r)
      , o = ce(e, 0);
    o.setFullYear(n, 0, 4),
    o.setHours(0, 0, 0, 0);
    const s = Bt(o);
    return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1
}
function Ht(e) {
    const t = D(e);
    return t.setHours(0, 0, 0, 0),
    t
}
function Wt(e) {
    const t = D(e)
      , n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return n.setUTCFullYear(t.getFullYear()),
    +e - +n
}
function Xo(e, t) {
    const n = Ht(e)
      , r = Ht(t)
      , a = +n - Wt(n)
      , o = +r - Wt(r);
    return Math.round((a - o) / Go)
}
function Jo(e) {
    const t = Cr(e)
      , n = ce(e, 0);
    return n.setFullYear(t, 0, 4),
    n.setHours(0, 0, 0, 0),
    Bt(n)
}
function fl(e, t) {
    const n = t * 7;
    return Nr(e, n)
}
function hl(e, t) {
    return $o(e, t * 12)
}
function ml(e) {
    let t;
    return e.forEach(function(n) {
        const r = D(n);
        (t === void 0 || t < r || isNaN(Number(r))) && (t = r)
    }),
    t || new Date(NaN)
}
function pl(e) {
    let t;
    return e.forEach(n => {
        const r = D(n);
        (!t || t > r || isNaN(+r)) && (t = r)
    }
    ),
    t || new Date(NaN)
}
function gl(e, t) {
    const n = Ht(e)
      , r = Ht(t);
    return +n == +r
}
function Ko(e) {
    return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]"
}
function Qo(e) {
    if (!Ko(e) && typeof e != "number")
        return !1;
    const t = D(e);
    return !isNaN(Number(t))
}
function yl(e, t) {
    const n = D(e)
      , r = D(t)
      , a = n.getFullYear() - r.getFullYear()
      , o = n.getMonth() - r.getMonth();
    return a * 12 + o
}
function Zo(e, t, n) {
    const r = Qe(e, n)
      , a = Qe(t, n)
      , o = +r - Wt(r)
      , s = +a - Wt(a);
    return Math.round((o - s) / En)
}
function bl(e) {
    const t = D(e)
      , n = t.getMonth();
    return t.setFullYear(t.getFullYear(), n + 1, 0),
    t.setHours(23, 59, 59, 999),
    t
}
function es(e) {
    const t = D(e);
    return t.setDate(1),
    t.setHours(0, 0, 0, 0),
    t
}
function ts(e) {
    const t = D(e)
      , n = ce(e, 0);
    return n.setFullYear(t.getFullYear(), 0, 1),
    n.setHours(0, 0, 0, 0),
    n
}
function ns(e, t) {
    var l, h, d, f;
    const n = At()
      , r = (t == null ? void 0 : t.weekStartsOn) ?? ((h = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : h.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0
      , a = D(e)
      , o = a.getDay()
      , s = (o < r ? -7 : 0) + 6 - (o - r);
    return a.setDate(a.getDate() + s),
    a.setHours(23, 59, 59, 999),
    a
}
function wl(e) {
    return ns(e, {
        weekStartsOn: 1
    })
}
const rs = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
}
  , as = (e, t, n) => {
    let r;
    const a = rs[e];
    return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()),
    n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
}
;
function tn(e) {
    return (t={}) => {
        const n = t.width ? String(t.width) : e.defaultWidth;
        return e.formats[n] || e.formats[e.defaultWidth]
    }
}
const os = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
}
  , ss = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
}
  , is = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
}
  , ls = {
    date: tn({
        formats: os,
        defaultWidth: "full"
    }),
    time: tn({
        formats: ss,
        defaultWidth: "full"
    }),
    dateTime: tn({
        formats: is,
        defaultWidth: "full"
    })
}
  , cs = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
}
  , us = (e, t, n, r) => cs[e];
function mt(e) {
    return (t, n) => {
        const r = n != null && n.context ? String(n.context) : "standalone";
        let a;
        if (r === "formatting" && e.formattingValues) {
            const s = e.defaultFormattingWidth || e.defaultWidth
              , l = n != null && n.width ? String(n.width) : s;
            a = e.formattingValues[l] || e.formattingValues[s]
        } else {
            const s = e.defaultWidth
              , l = n != null && n.width ? String(n.width) : e.defaultWidth;
            a = e.values[l] || e.values[s]
        }
        const o = e.argumentCallback ? e.argumentCallback(t) : t;
        return a[o]
    }
}
const ds = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
}
  , fs = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}
  , hs = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
  , ms = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
  , ps = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
}
  , gs = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
}
  , ys = (e, t) => {
    const n = Number(e)
      , r = n % 100;
    if (r > 20 || r < 10)
        switch (r % 10) {
        case 1:
            return n + "st";
        case 2:
            return n + "nd";
        case 3:
            return n + "rd"
        }
    return n + "th"
}
  , bs = {
    ordinalNumber: ys,
    era: mt({
        values: ds,
        defaultWidth: "wide"
    }),
    quarter: mt({
        values: fs,
        defaultWidth: "wide",
        argumentCallback: e => e - 1
    }),
    month: mt({
        values: hs,
        defaultWidth: "wide"
    }),
    day: mt({
        values: ms,
        defaultWidth: "wide"
    }),
    dayPeriod: mt({
        values: ps,
        defaultWidth: "wide",
        formattingValues: gs,
        defaultFormattingWidth: "wide"
    })
};
function pt(e) {
    return (t, n={}) => {
        const r = n.width
          , a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth]
          , o = t.match(a);
        if (!o)
            return null;
        const s = o[0]
          , l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth]
          , h = Array.isArray(l) ? Es(l, g => g.test(s)) : ws(l, g => g.test(s));
        let d;
        d = e.valueCallback ? e.valueCallback(h) : h,
        d = n.valueCallback ? n.valueCallback(d) : d;
        const f = t.slice(s.length);
        return {
            value: d,
            rest: f
        }
    }
}
function ws(e, t) {
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
            return n
}
function Es(e, t) {
    for (let n = 0; n < e.length; n++)
        if (t(e[n]))
            return n
}
function Ts(e) {
    return (t, n={}) => {
        const r = t.match(e.matchPattern);
        if (!r)
            return null;
        const a = r[0]
          , o = t.match(e.parsePattern);
        if (!o)
            return null;
        let s = e.valueCallback ? e.valueCallback(o[0]) : o[0];
        s = n.valueCallback ? n.valueCallback(s) : s;
        const l = t.slice(a.length);
        return {
            value: s,
            rest: l
        }
    }
}
const Ss = /^(\d+)(th|st|nd|rd)?/i
  , xs = /\d+/i
  , vs = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
}
  , As = {
    any: [/^b/i, /^(a|c)/i]
}
  , Os = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
}
  , Rs = {
    any: [/1/i, /2/i, /3/i, /4/i]
}
  , _s = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}
  , ks = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}
  , Ms = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}
  , Ns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}
  , Cs = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}
  , Ds = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
}
  , Ps = {
    ordinalNumber: Ts({
        matchPattern: Ss,
        parsePattern: xs,
        valueCallback: e => parseInt(e, 10)
    }),
    era: pt({
        matchPatterns: vs,
        defaultMatchWidth: "wide",
        parsePatterns: As,
        defaultParseWidth: "any"
    }),
    quarter: pt({
        matchPatterns: Os,
        defaultMatchWidth: "wide",
        parsePatterns: Rs,
        defaultParseWidth: "any",
        valueCallback: e => e + 1
    }),
    month: pt({
        matchPatterns: _s,
        defaultMatchWidth: "wide",
        parsePatterns: ks,
        defaultParseWidth: "any"
    }),
    day: pt({
        matchPatterns: Ms,
        defaultMatchWidth: "wide",
        parsePatterns: Ns,
        defaultParseWidth: "any"
    }),
    dayPeriod: pt({
        matchPatterns: Cs,
        defaultMatchWidth: "any",
        parsePatterns: Ds,
        defaultParseWidth: "any"
    })
}
  , Ls = {
    code: "en-US",
    formatDistance: as,
    formatLong: ls,
    formatRelative: us,
    localize: bs,
    match: Ps,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
function Is(e) {
    const t = D(e);
    return Xo(t, ts(t)) + 1
}
function Fs(e) {
    const t = D(e)
      , n = +Bt(t) - +Jo(t);
    return Math.round(n / En) + 1
}
function Dr(e, t) {
    var f, g, c, S;
    const n = D(e)
      , r = n.getFullYear()
      , a = At()
      , o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((g = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : g.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((S = (c = a.locale) == null ? void 0 : c.options) == null ? void 0 : S.firstWeekContainsDate) ?? 1
      , s = ce(e, 0);
    s.setFullYear(r + 1, 0, o),
    s.setHours(0, 0, 0, 0);
    const l = Qe(s, t)
      , h = ce(e, 0);
    h.setFullYear(r, 0, o),
    h.setHours(0, 0, 0, 0);
    const d = Qe(h, t);
    return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= d.getTime() ? r : r - 1
}
function Us(e, t) {
    var l, h, d, f;
    const n = At()
      , r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : h.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1
      , a = Dr(e, t)
      , o = ce(e, 0);
    return o.setFullYear(a, 0, r),
    o.setHours(0, 0, 0, 0),
    Qe(o, t)
}
function Bs(e, t) {
    const n = D(e)
      , r = +Qe(n, t) - +Us(n, t);
    return Math.round(r / En) + 1
}
function U(e, t) {
    const n = e < 0 ? "-" : ""
      , r = Math.abs(e).toString().padStart(t, "0");
    return n + r
}
const He = {
    y(e, t) {
        const n = e.getFullYear()
          , r = n > 0 ? n : 1 - n;
        return U(t === "yy" ? r % 100 : r, t.length)
    },
    M(e, t) {
        const n = e.getMonth();
        return t === "M" ? String(n + 1) : U(n + 1, 2)
    },
    d(e, t) {
        return U(e.getDate(), t.length)
    },
    a(e, t) {
        const n = e.getHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
        case "a":
        case "aa":
            return n.toUpperCase();
        case "aaa":
            return n;
        case "aaaaa":
            return n[0];
        case "aaaa":
        default:
            return n === "am" ? "a.m." : "p.m."
        }
    },
    h(e, t) {
        return U(e.getHours() % 12 || 12, t.length)
    },
    H(e, t) {
        return U(e.getHours(), t.length)
    },
    m(e, t) {
        return U(e.getMinutes(), t.length)
    },
    s(e, t) {
        return U(e.getSeconds(), t.length)
    },
    S(e, t) {
        const n = t.length
          , r = e.getMilliseconds()
          , a = Math.trunc(r * Math.pow(10, n - 3));
        return U(a, t.length)
    }
}
  , ot = {
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
}
  , Gn = {
    G: function(e, t, n) {
        const r = e.getFullYear() > 0 ? 1 : 0;
        switch (t) {
        case "G":
        case "GG":
        case "GGG":
            return n.era(r, {
                width: "abbreviated"
            });
        case "GGGGG":
            return n.era(r, {
                width: "narrow"
            });
        case "GGGG":
        default:
            return n.era(r, {
                width: "wide"
            })
        }
    },
    y: function(e, t, n) {
        if (t === "yo") {
            const r = e.getFullYear()
              , a = r > 0 ? r : 1 - r;
            return n.ordinalNumber(a, {
                unit: "year"
            })
        }
        return He.y(e, t)
    },
    Y: function(e, t, n, r) {
        const a = Dr(e, r)
          , o = a > 0 ? a : 1 - a;
        if (t === "YY") {
            const s = o % 100;
            return U(s, 2)
        }
        return t === "Yo" ? n.ordinalNumber(o, {
            unit: "year"
        }) : U(o, t.length)
    },
    R: function(e, t) {
        const n = Cr(e);
        return U(n, t.length)
    },
    u: function(e, t) {
        const n = e.getFullYear();
        return U(n, t.length)
    },
    Q: function(e, t, n) {
        const r = Math.ceil((e.getMonth() + 1) / 3);
        switch (t) {
        case "Q":
            return String(r);
        case "QQ":
            return U(r, 2);
        case "Qo":
            return n.ordinalNumber(r, {
                unit: "quarter"
            });
        case "QQQ":
            return n.quarter(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "QQQQQ":
            return n.quarter(r, {
                width: "narrow",
                context: "formatting"
            });
        case "QQQQ":
        default:
            return n.quarter(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    q: function(e, t, n) {
        const r = Math.ceil((e.getMonth() + 1) / 3);
        switch (t) {
        case "q":
            return String(r);
        case "qq":
            return U(r, 2);
        case "qo":
            return n.ordinalNumber(r, {
                unit: "quarter"
            });
        case "qqq":
            return n.quarter(r, {
                width: "abbreviated",
                context: "standalone"
            });
        case "qqqqq":
            return n.quarter(r, {
                width: "narrow",
                context: "standalone"
            });
        case "qqqq":
        default:
            return n.quarter(r, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    M: function(e, t, n) {
        const r = e.getMonth();
        switch (t) {
        case "M":
        case "MM":
            return He.M(e, t);
        case "Mo":
            return n.ordinalNumber(r + 1, {
                unit: "month"
            });
        case "MMM":
            return n.month(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "MMMMM":
            return n.month(r, {
                width: "narrow",
                context: "formatting"
            });
        case "MMMM":
        default:
            return n.month(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    L: function(e, t, n) {
        const r = e.getMonth();
        switch (t) {
        case "L":
            return String(r + 1);
        case "LL":
            return U(r + 1, 2);
        case "Lo":
            return n.ordinalNumber(r + 1, {
                unit: "month"
            });
        case "LLL":
            return n.month(r, {
                width: "abbreviated",
                context: "standalone"
            });
        case "LLLLL":
            return n.month(r, {
                width: "narrow",
                context: "standalone"
            });
        case "LLLL":
        default:
            return n.month(r, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    w: function(e, t, n, r) {
        const a = Bs(e, r);
        return t === "wo" ? n.ordinalNumber(a, {
            unit: "week"
        }) : U(a, t.length)
    },
    I: function(e, t, n) {
        const r = Fs(e);
        return t === "Io" ? n.ordinalNumber(r, {
            unit: "week"
        }) : U(r, t.length)
    },
    d: function(e, t, n) {
        return t === "do" ? n.ordinalNumber(e.getDate(), {
            unit: "date"
        }) : He.d(e, t)
    },
    D: function(e, t, n) {
        const r = Is(e);
        return t === "Do" ? n.ordinalNumber(r, {
            unit: "dayOfYear"
        }) : U(r, t.length)
    },
    E: function(e, t, n) {
        const r = e.getDay();
        switch (t) {
        case "E":
        case "EE":
        case "EEE":
            return n.day(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "EEEEE":
            return n.day(r, {
                width: "narrow",
                context: "formatting"
            });
        case "EEEEEE":
            return n.day(r, {
                width: "short",
                context: "formatting"
            });
        case "EEEE":
        default:
            return n.day(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    e: function(e, t, n, r) {
        const a = e.getDay()
          , o = (a - r.weekStartsOn + 8) % 7 || 7;
        switch (t) {
        case "e":
            return String(o);
        case "ee":
            return U(o, 2);
        case "eo":
            return n.ordinalNumber(o, {
                unit: "day"
            });
        case "eee":
            return n.day(a, {
                width: "abbreviated",
                context: "formatting"
            });
        case "eeeee":
            return n.day(a, {
                width: "narrow",
                context: "formatting"
            });
        case "eeeeee":
            return n.day(a, {
                width: "short",
                context: "formatting"
            });
        case "eeee":
        default:
            return n.day(a, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    c: function(e, t, n, r) {
        const a = e.getDay()
          , o = (a - r.weekStartsOn + 8) % 7 || 7;
        switch (t) {
        case "c":
            return String(o);
        case "cc":
            return U(o, t.length);
        case "co":
            return n.ordinalNumber(o, {
                unit: "day"
            });
        case "ccc":
            return n.day(a, {
                width: "abbreviated",
                context: "standalone"
            });
        case "ccccc":
            return n.day(a, {
                width: "narrow",
                context: "standalone"
            });
        case "cccccc":
            return n.day(a, {
                width: "short",
                context: "standalone"
            });
        case "cccc":
        default:
            return n.day(a, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    i: function(e, t, n) {
        const r = e.getDay()
          , a = r === 0 ? 7 : r;
        switch (t) {
        case "i":
            return String(a);
        case "ii":
            return U(a, t.length);
        case "io":
            return n.ordinalNumber(a, {
                unit: "day"
            });
        case "iii":
            return n.day(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "iiiii":
            return n.day(r, {
                width: "narrow",
                context: "formatting"
            });
        case "iiiiii":
            return n.day(r, {
                width: "short",
                context: "formatting"
            });
        case "iiii":
        default:
            return n.day(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    a: function(e, t, n) {
        const a = e.getHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
        case "a":
        case "aa":
            return n.dayPeriod(a, {
                width: "abbreviated",
                context: "formatting"
            });
        case "aaa":
            return n.dayPeriod(a, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "aaaaa":
            return n.dayPeriod(a, {
                width: "narrow",
                context: "formatting"
            });
        case "aaaa":
        default:
            return n.dayPeriod(a, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    b: function(e, t, n) {
        const r = e.getHours();
        let a;
        switch (r === 12 ? a = ot.noon : r === 0 ? a = ot.midnight : a = r / 12 >= 1 ? "pm" : "am",
        t) {
        case "b":
        case "bb":
            return n.dayPeriod(a, {
                width: "abbreviated",
                context: "formatting"
            });
        case "bbb":
            return n.dayPeriod(a, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "bbbbb":
            return n.dayPeriod(a, {
                width: "narrow",
                context: "formatting"
            });
        case "bbbb":
        default:
            return n.dayPeriod(a, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    B: function(e, t, n) {
        const r = e.getHours();
        let a;
        switch (r >= 17 ? a = ot.evening : r >= 12 ? a = ot.afternoon : r >= 4 ? a = ot.morning : a = ot.night,
        t) {
        case "B":
        case "BB":
        case "BBB":
            return n.dayPeriod(a, {
                width: "abbreviated",
                context: "formatting"
            });
        case "BBBBB":
            return n.dayPeriod(a, {
                width: "narrow",
                context: "formatting"
            });
        case "BBBB":
        default:
            return n.dayPeriod(a, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    h: function(e, t, n) {
        if (t === "ho") {
            let r = e.getHours() % 12;
            return r === 0 && (r = 12),
            n.ordinalNumber(r, {
                unit: "hour"
            })
        }
        return He.h(e, t)
    },
    H: function(e, t, n) {
        return t === "Ho" ? n.ordinalNumber(e.getHours(), {
            unit: "hour"
        }) : He.H(e, t)
    },
    K: function(e, t, n) {
        const r = e.getHours() % 12;
        return t === "Ko" ? n.ordinalNumber(r, {
            unit: "hour"
        }) : U(r, t.length)
    },
    k: function(e, t, n) {
        let r = e.getHours();
        return r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, {
            unit: "hour"
        }) : U(r, t.length)
    },
    m: function(e, t, n) {
        return t === "mo" ? n.ordinalNumber(e.getMinutes(), {
            unit: "minute"
        }) : He.m(e, t)
    },
    s: function(e, t, n) {
        return t === "so" ? n.ordinalNumber(e.getSeconds(), {
            unit: "second"
        }) : He.s(e, t)
    },
    S: function(e, t) {
        return He.S(e, t)
    },
    X: function(e, t, n) {
        const r = e.getTimezoneOffset();
        if (r === 0)
            return "Z";
        switch (t) {
        case "X":
            return Xn(r);
        case "XXXX":
        case "XX":
            return Ge(r);
        case "XXXXX":
        case "XXX":
        default:
            return Ge(r, ":")
        }
    },
    x: function(e, t, n) {
        const r = e.getTimezoneOffset();
        switch (t) {
        case "x":
            return Xn(r);
        case "xxxx":
        case "xx":
            return Ge(r);
        case "xxxxx":
        case "xxx":
        default:
            return Ge(r, ":")
        }
    },
    O: function(e, t, n) {
        const r = e.getTimezoneOffset();
        switch (t) {
        case "O":
        case "OO":
        case "OOO":
            return "GMT" + Vn(r, ":");
        case "OOOO":
        default:
            return "GMT" + Ge(r, ":")
        }
    },
    z: function(e, t, n) {
        const r = e.getTimezoneOffset();
        switch (t) {
        case "z":
        case "zz":
        case "zzz":
            return "GMT" + Vn(r, ":");
        case "zzzz":
        default:
            return "GMT" + Ge(r, ":")
        }
    },
    t: function(e, t, n) {
        const r = Math.trunc(e.getTime() / 1e3);
        return U(r, t.length)
    },
    T: function(e, t, n) {
        const r = e.getTime();
        return U(r, t.length)
    }
};
function Vn(e, t="") {
    const n = e > 0 ? "-" : "+"
      , r = Math.abs(e)
      , a = Math.trunc(r / 60)
      , o = r % 60;
    return o === 0 ? n + String(a) : n + String(a) + t + U(o, 2)
}
function Xn(e, t) {
    return e % 60 === 0 ? (e > 0 ? "-" : "+") + U(Math.abs(e) / 60, 2) : Ge(e, t)
}
function Ge(e, t="") {
    const n = e > 0 ? "-" : "+"
      , r = Math.abs(e)
      , a = U(Math.trunc(r / 60), 2)
      , o = U(r % 60, 2);
    return n + a + t + o
}
const Jn = (e, t) => {
    switch (e) {
    case "P":
        return t.date({
            width: "short"
        });
    case "PP":
        return t.date({
            width: "medium"
        });
    case "PPP":
        return t.date({
            width: "long"
        });
    case "PPPP":
    default:
        return t.date({
            width: "full"
        })
    }
}
  , Pr = (e, t) => {
    switch (e) {
    case "p":
        return t.time({
            width: "short"
        });
    case "pp":
        return t.time({
            width: "medium"
        });
    case "ppp":
        return t.time({
            width: "long"
        });
    case "pppp":
    default:
        return t.time({
            width: "full"
        })
    }
}
  , Hs = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || []
      , r = n[1]
      , a = n[2];
    if (!a)
        return Jn(e, t);
    let o;
    switch (r) {
    case "P":
        o = t.dateTime({
            width: "short"
        });
        break;
    case "PP":
        o = t.dateTime({
            width: "medium"
        });
        break;
    case "PPP":
        o = t.dateTime({
            width: "long"
        });
        break;
    case "PPPP":
    default:
        o = t.dateTime({
            width: "full"
        });
        break
    }
    return o.replace("{{date}}", Jn(r, t)).replace("{{time}}", Pr(a, t))
}
  , Ws = {
    p: Pr,
    P: Hs
}
  , Ys = /^D+$/
  , zs = /^Y+$/
  , js = ["D", "DD", "YY", "YYYY"];
function qs(e) {
    return Ys.test(e)
}
function $s(e) {
    return zs.test(e)
}
function Gs(e, t, n) {
    const r = Vs(e, t, n);
    if (console.warn(r),
    js.includes(e))
        throw new RangeError(r)
}
function Vs(e, t, n) {
    const r = e[0] === "Y" ? "years" : "days of the month";
    return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
const Xs = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
  , Js = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
  , Ks = /^'([^]*?)'?$/
  , Qs = /''/g
  , Zs = /[a-zA-Z]/;
function El(e, t, n) {
    var f, g, c, S, y, E, b, N;
    const r = At()
      , a = (n == null ? void 0 : n.locale) ?? r.locale ?? Ls
      , o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((g = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : g.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((S = (c = r.locale) == null ? void 0 : c.options) == null ? void 0 : S.firstWeekContainsDate) ?? 1
      , s = (n == null ? void 0 : n.weekStartsOn) ?? ((E = (y = n == null ? void 0 : n.locale) == null ? void 0 : y.options) == null ? void 0 : E.weekStartsOn) ?? r.weekStartsOn ?? ((N = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : N.weekStartsOn) ?? 0
      , l = D(e);
    if (!Qo(l))
        throw new RangeError("Invalid time value");
    let h = t.match(Js).map(v => {
        const O = v[0];
        if (O === "p" || O === "P") {
            const M = Ws[O];
            return M(v, a.formatLong)
        }
        return v
    }
    ).join("").match(Xs).map(v => {
        if (v === "''")
            return {
                isToken: !1,
                value: "'"
            };
        const O = v[0];
        if (O === "'")
            return {
                isToken: !1,
                value: ei(v)
            };
        if (Gn[O])
            return {
                isToken: !0,
                value: v
            };
        if (O.match(Zs))
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + O + "`");
        return {
            isToken: !1,
            value: v
        }
    }
    );
    a.localize.preprocessor && (h = a.localize.preprocessor(l, h));
    const d = {
        firstWeekContainsDate: o,
        weekStartsOn: s,
        locale: a
    };
    return h.map(v => {
        if (!v.isToken)
            return v.value;
        const O = v.value;
        (!(n != null && n.useAdditionalWeekYearTokens) && $s(O) || !(n != null && n.useAdditionalDayOfYearTokens) && qs(O)) && Gs(O, t, String(e));
        const M = Gn[O[0]];
        return M(l, O, a.localize, d)
    }
    ).join("")
}
function ei(e) {
    const t = e.match(Ks);
    return t ? t[1].replace(Qs, "'") : e
}
function ti(e) {
    const t = D(e)
      , n = t.getFullYear()
      , r = t.getMonth()
      , a = ce(e, 0);
    return a.setFullYear(n, r + 1, 0),
    a.setHours(0, 0, 0, 0),
    a.getDate()
}
function Tl(e) {
    return Math.trunc(+D(e) / 1e3)
}
function ni(e) {
    const t = D(e)
      , n = t.getMonth();
    return t.setFullYear(t.getFullYear(), n + 1, 0),
    t.setHours(0, 0, 0, 0),
    t
}
function Sl(e, t) {
    return Zo(ni(e), es(e), t) + 1
}
function xl(e, t) {
    const n = D(e)
      , r = D(t);
    return n.getTime() > r.getTime()
}
function vl(e, t) {
    const n = D(e)
      , r = D(t);
    return +n < +r
}
function Al(e, t) {
    const n = D(e)
      , r = D(t);
    return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
}
function Ol(e, t) {
    const n = D(e)
      , r = D(t);
    return n.getFullYear() === r.getFullYear()
}
function Rl(e, t) {
    return Nr(e, -t)
}
function _l(e, t) {
    const n = D(e)
      , r = n.getFullYear()
      , a = n.getDate()
      , o = ce(e, 0);
    o.setFullYear(r, t, 15),
    o.setHours(0, 0, 0, 0);
    const s = ti(o);
    return n.setMonth(t, Math.min(a, s)),
    n
}
function kl(e, t) {
    const n = D(e);
    return isNaN(+n) ? ce(e, NaN) : (n.setFullYear(t),
    n)
}
/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
const {entries: Lr, setPrototypeOf: Kn, isFrozen: ri, getPrototypeOf: ai, getOwnPropertyDescriptor: oi} = Object;
let {freeze: ee, seal: fe, create: Ir} = Object
  , {apply: pn, construct: gn} = typeof Reflect < "u" && Reflect;
ee || (ee = function(t) {
    return t
}
);
fe || (fe = function(t) {
    return t
}
);
pn || (pn = function(t, n, r) {
    return t.apply(n, r)
}
);
gn || (gn = function(t, n) {
    return new t(...n)
}
);
const Nt = te(Array.prototype.forEach)
  , si = te(Array.prototype.lastIndexOf)
  , Qn = te(Array.prototype.pop)
  , gt = te(Array.prototype.push)
  , ii = te(Array.prototype.splice)
  , It = te(String.prototype.toLowerCase)
  , nn = te(String.prototype.toString)
  , Zn = te(String.prototype.match)
  , yt = te(String.prototype.replace)
  , li = te(String.prototype.indexOf)
  , ci = te(String.prototype.trim)
  , ge = te(Object.prototype.hasOwnProperty)
  , Z = te(RegExp.prototype.test)
  , bt = ui(TypeError);
function te(e) {
    return function(t) {
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
            r[a - 1] = arguments[a];
        return pn(e, t, r)
    }
}
function ui(e) {
    return function() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return gn(e, n)
    }
}
function k(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : It;
    Kn && Kn(e, null);
    let r = t.length;
    for (; r--; ) {
        let a = t[r];
        if (typeof a == "string") {
            const o = n(a);
            o !== a && (ri(t) || (t[r] = o),
            a = o)
        }
        e[a] = !0
    }
    return e
}
function di(e) {
    for (let t = 0; t < e.length; t++)
        ge(e, t) || (e[t] = null);
    return e
}
function Ve(e) {
    const t = Ir(null);
    for (const [n,r] of Lr(e))
        ge(e, n) && (Array.isArray(r) ? t[n] = di(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = Ve(r) : t[n] = r);
    return t
}
function wt(e, t) {
    for (; e !== null; ) {
        const r = oi(e, t);
        if (r) {
            if (r.get)
                return te(r.get);
            if (typeof r.value == "function")
                return te(r.value)
        }
        e = ai(e)
    }
    function n() {
        return null
    }
    return n
}
const er = ee(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"])
  , rn = ee(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"])
  , an = ee(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"])
  , fi = ee(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"])
  , on = ee(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"])
  , hi = ee(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"])
  , tr = ee(["#text"])
  , nr = ee(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"])
  , sn = ee(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"])
  , rr = ee(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"])
  , Ct = ee(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"])
  , mi = fe(/\{\{[\w\W]*|[\w\W]*\}\}/gm)
  , pi = fe(/<%[\w\W]*|[\w\W]*%>/gm)
  , gi = fe(/\$\{[\w\W]*/gm)
  , yi = fe(/^data-[\-\w.\u00B7-\uFFFF]+$/)
  , bi = fe(/^aria-[\-\w]+$/)
  , Fr = fe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i)
  , wi = fe(/^(?:\w+script|data):/i)
  , Ei = fe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g)
  , Ur = fe(/^html$/i)
  , Ti = fe(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ar = Object.freeze({
    __proto__: null,
    ARIA_ATTR: bi,
    ATTR_WHITESPACE: Ei,
    CUSTOM_ELEMENT: Ti,
    DATA_ATTR: yi,
    DOCTYPE_NAME: Ur,
    ERB_EXPR: pi,
    IS_ALLOWED_URI: Fr,
    IS_SCRIPT_OR_DATA: wi,
    MUSTACHE_EXPR: mi,
    TMPLIT_EXPR: gi
});
const Et = {
    element: 1,
    text: 3,
    progressingInstruction: 7,
    comment: 8,
    document: 9
}
  , Si = function() {
    return typeof window > "u" ? null : window
}
  , xi = function(t, n) {
    if (typeof t != "object" || typeof t.createPolicy != "function")
        return null;
    let r = null;
    const a = "data-tt-policy-suffix";
    n && n.hasAttribute(a) && (r = n.getAttribute(a));
    const o = "dompurify" + (r ? "#" + r : "");
    try {
        return t.createPolicy(o, {
            createHTML(s) {
                return s
            },
            createScriptURL(s) {
                return s
            }
        })
    } catch {
        return console.warn("TrustedTypes policy " + o + " could not be created."),
        null
    }
}
  , or = function() {
    return {
        afterSanitizeAttributes: [],
        afterSanitizeElements: [],
        afterSanitizeShadowDOM: [],
        beforeSanitizeAttributes: [],
        beforeSanitizeElements: [],
        beforeSanitizeShadowDOM: [],
        uponSanitizeAttribute: [],
        uponSanitizeElement: [],
        uponSanitizeShadowNode: []
    }
};
function Br() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Si();
    const t = T => Br(T);
    if (t.version = "3.2.4",
    t.removed = [],
    !e || !e.document || e.document.nodeType !== Et.document || !e.Element)
        return t.isSupported = !1,
        t;
    let {document: n} = e;
    const r = n
      , a = r.currentScript
      , {DocumentFragment: o, HTMLTemplateElement: s, Node: l, Element: h, NodeFilter: d, NamedNodeMap: f=e.NamedNodeMap || e.MozNamedAttrMap, HTMLFormElement: g, DOMParser: c, trustedTypes: S} = e
      , y = h.prototype
      , E = wt(y, "cloneNode")
      , b = wt(y, "remove")
      , N = wt(y, "nextSibling")
      , v = wt(y, "childNodes")
      , O = wt(y, "parentNode");
    if (typeof s == "function") {
        const T = n.createElement("template");
        T.content && T.content.ownerDocument && (n = T.content.ownerDocument)
    }
    let M, C = "";
    const {implementation: q, createNodeIterator: ne, createDocumentFragment: he, getElementsByTagName: De} = n
      , {importNode: lt} = r;
    let W = or();
    t.isSupported = typeof Lr == "function" && typeof O == "function" && q && q.createHTMLDocument !== void 0;
    const {MUSTACHE_EXPR: Pe, ERB_EXPR: Oe, TMPLIT_EXPR: We, DATA_ATTR: Le, ARIA_ATTR: me, IS_SCRIPT_OR_DATA: Ye, ATTR_WHITESPACE: P, CUSTOM_ELEMENT: oe} = ar;
    let {IS_ALLOWED_URI: Ze} = ar
      , x = null;
    const B = k({}, [...er, ...rn, ...an, ...on, ...tr]);
    let _ = null;
    const se = k({}, [...nr, ...sn, ...rr, ...Ct]);
    let F = Object.seal(Ir(null, {
        tagNameCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null
        },
        attributeNameCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null
        },
        allowCustomizedBuiltInElements: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: !1
        }
    }))
      , H = null
      , ze = null
      , Ie = !0
      , Re = !0
      , Fe = !1
      , Ot = !0
      , be = !1
      , ct = !0
      , we = !1
      , et = !1
      , Ee = !1
      , Ue = !1
      , tt = !1
      , G = !1
      , _e = !0
      , Rt = !1;
    const Vt = "user-content-";
    let Be = !0
      , je = !1
      , ke = {}
      , Te = null;
    const Me = k({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    let ut = null;
    const Ne = k({}, ["audio", "video", "img", "source", "image", "track"]);
    let nt = null;
    const _t = k({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"])
      , qe = "http://www.w3.org/1998/Math/MathML"
      , $e = "http://www.w3.org/2000/svg"
      , pe = "http://www.w3.org/1999/xhtml";
    let Se = pe
      , ue = !1
      , dt = null;
    const A = k({}, [qe, $e, pe], nn);
    let I = k({}, ["mi", "mo", "mn", "ms", "mtext"])
      , L = k({}, ["annotation-xml"]);
    const de = k({}, ["title", "style", "font", "a", "script"]);
    let X = null;
    const rt = ["application/xhtml+xml", "text/html"]
      , Xt = "text/html";
    let $ = null
      , at = null;
    const Hr = n.createElement("form")
      , Tn = function(i) {
        return i instanceof RegExp || i instanceof Function
    }
      , Jt = function() {
        let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (!(at && at === i)) {
            if ((!i || typeof i != "object") && (i = {}),
            i = Ve(i),
            X = rt.indexOf(i.PARSER_MEDIA_TYPE) === -1 ? Xt : i.PARSER_MEDIA_TYPE,
            $ = X === "application/xhtml+xml" ? nn : It,
            x = ge(i, "ALLOWED_TAGS") ? k({}, i.ALLOWED_TAGS, $) : B,
            _ = ge(i, "ALLOWED_ATTR") ? k({}, i.ALLOWED_ATTR, $) : se,
            dt = ge(i, "ALLOWED_NAMESPACES") ? k({}, i.ALLOWED_NAMESPACES, nn) : A,
            nt = ge(i, "ADD_URI_SAFE_ATTR") ? k(Ve(_t), i.ADD_URI_SAFE_ATTR, $) : _t,
            ut = ge(i, "ADD_DATA_URI_TAGS") ? k(Ve(Ne), i.ADD_DATA_URI_TAGS, $) : Ne,
            Te = ge(i, "FORBID_CONTENTS") ? k({}, i.FORBID_CONTENTS, $) : Me,
            H = ge(i, "FORBID_TAGS") ? k({}, i.FORBID_TAGS, $) : {},
            ze = ge(i, "FORBID_ATTR") ? k({}, i.FORBID_ATTR, $) : {},
            ke = ge(i, "USE_PROFILES") ? i.USE_PROFILES : !1,
            Ie = i.ALLOW_ARIA_ATTR !== !1,
            Re = i.ALLOW_DATA_ATTR !== !1,
            Fe = i.ALLOW_UNKNOWN_PROTOCOLS || !1,
            Ot = i.ALLOW_SELF_CLOSE_IN_ATTR !== !1,
            be = i.SAFE_FOR_TEMPLATES || !1,
            ct = i.SAFE_FOR_XML !== !1,
            we = i.WHOLE_DOCUMENT || !1,
            Ue = i.RETURN_DOM || !1,
            tt = i.RETURN_DOM_FRAGMENT || !1,
            G = i.RETURN_TRUSTED_TYPE || !1,
            Ee = i.FORCE_BODY || !1,
            _e = i.SANITIZE_DOM !== !1,
            Rt = i.SANITIZE_NAMED_PROPS || !1,
            Be = i.KEEP_CONTENT !== !1,
            je = i.IN_PLACE || !1,
            Ze = i.ALLOWED_URI_REGEXP || Fr,
            Se = i.NAMESPACE || pe,
            I = i.MATHML_TEXT_INTEGRATION_POINTS || I,
            L = i.HTML_INTEGRATION_POINTS || L,
            F = i.CUSTOM_ELEMENT_HANDLING || {},
            i.CUSTOM_ELEMENT_HANDLING && Tn(i.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (F.tagNameCheck = i.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
            i.CUSTOM_ELEMENT_HANDLING && Tn(i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (F.attributeNameCheck = i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
            i.CUSTOM_ELEMENT_HANDLING && typeof i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (F.allowCustomizedBuiltInElements = i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
            be && (Re = !1),
            tt && (Ue = !0),
            ke && (x = k({}, tr),
            _ = [],
            ke.html === !0 && (k(x, er),
            k(_, nr)),
            ke.svg === !0 && (k(x, rn),
            k(_, sn),
            k(_, Ct)),
            ke.svgFilters === !0 && (k(x, an),
            k(_, sn),
            k(_, Ct)),
            ke.mathMl === !0 && (k(x, on),
            k(_, rr),
            k(_, Ct))),
            i.ADD_TAGS && (x === B && (x = Ve(x)),
            k(x, i.ADD_TAGS, $)),
            i.ADD_ATTR && (_ === se && (_ = Ve(_)),
            k(_, i.ADD_ATTR, $)),
            i.ADD_URI_SAFE_ATTR && k(nt, i.ADD_URI_SAFE_ATTR, $),
            i.FORBID_CONTENTS && (Te === Me && (Te = Ve(Te)),
            k(Te, i.FORBID_CONTENTS, $)),
            Be && (x["#text"] = !0),
            we && k(x, ["html", "head", "body"]),
            x.table && (k(x, ["tbody"]),
            delete H.tbody),
            i.TRUSTED_TYPES_POLICY) {
                if (typeof i.TRUSTED_TYPES_POLICY.createHTML != "function")
                    throw bt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                if (typeof i.TRUSTED_TYPES_POLICY.createScriptURL != "function")
                    throw bt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                M = i.TRUSTED_TYPES_POLICY,
                C = M.createHTML("")
            } else
                M === void 0 && (M = xi(S, a)),
                M !== null && typeof C == "string" && (C = M.createHTML(""));
            ee && ee(i),
            at = i
        }
    }
      , Sn = k({}, [...rn, ...an, ...fi])
      , xn = k({}, [...on, ...hi])
      , Wr = function(i) {
        let m = O(i);
        (!m || !m.tagName) && (m = {
            namespaceURI: Se,
            tagName: "template"
        });
        const w = It(i.tagName)
          , Y = It(m.tagName);
        return dt[i.namespaceURI] ? i.namespaceURI === $e ? m.namespaceURI === pe ? w === "svg" : m.namespaceURI === qe ? w === "svg" && (Y === "annotation-xml" || I[Y]) : !!Sn[w] : i.namespaceURI === qe ? m.namespaceURI === pe ? w === "math" : m.namespaceURI === $e ? w === "math" && L[Y] : !!xn[w] : i.namespaceURI === pe ? m.namespaceURI === $e && !L[Y] || m.namespaceURI === qe && !I[Y] ? !1 : !xn[w] && (de[w] || !Sn[w]) : !!(X === "application/xhtml+xml" && dt[i.namespaceURI]) : !1
    }
      , xe = function(i) {
        gt(t.removed, {
            element: i
        });
        try {
            O(i).removeChild(i)
        } catch {
            b(i)
        }
    }
      , kt = function(i, m) {
        try {
            gt(t.removed, {
                attribute: m.getAttributeNode(i),
                from: m
            })
        } catch {
            gt(t.removed, {
                attribute: null,
                from: m
            })
        }
        if (m.removeAttribute(i),
        i === "is")
            if (Ue || tt)
                try {
                    xe(m)
                } catch {}
            else
                try {
                    m.setAttribute(i, "")
                } catch {}
    }
      , vn = function(i) {
        let m = null
          , w = null;
        if (Ee)
            i = "<remove></remove>" + i;
        else {
            const V = Zn(i, /^[\r\n\t ]+/);
            w = V && V[0]
        }
        X === "application/xhtml+xml" && Se === pe && (i = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + i + "</body></html>");
        const Y = M ? M.createHTML(i) : i;
        if (Se === pe)
            try {
                m = new c().parseFromString(Y, X)
            } catch {}
        if (!m || !m.documentElement) {
            m = q.createDocument(Se, "template", null);
            try {
                m.documentElement.innerHTML = ue ? C : Y
            } catch {}
        }
        const J = m.body || m.documentElement;
        return i && w && J.insertBefore(n.createTextNode(w), J.childNodes[0] || null),
        Se === pe ? De.call(m, we ? "html" : "body")[0] : we ? m.documentElement : J
    }
      , An = function(i) {
        return ne.call(i.ownerDocument || i, i, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION, null)
    }
      , Kt = function(i) {
        return i instanceof g && (typeof i.nodeName != "string" || typeof i.textContent != "string" || typeof i.removeChild != "function" || !(i.attributes instanceof f) || typeof i.removeAttribute != "function" || typeof i.setAttribute != "function" || typeof i.namespaceURI != "string" || typeof i.insertBefore != "function" || typeof i.hasChildNodes != "function")
    }
      , On = function(i) {
        return typeof l == "function" && i instanceof l
    };
    function Ce(T, i, m) {
        Nt(T, w => {
            w.call(t, i, m, at)
        }
        )
    }
    const Rn = function(i) {
        let m = null;
        if (Ce(W.beforeSanitizeElements, i, null),
        Kt(i))
            return xe(i),
            !0;
        const w = $(i.nodeName);
        if (Ce(W.uponSanitizeElement, i, {
            tagName: w,
            allowedTags: x
        }),
        i.hasChildNodes() && !On(i.firstElementChild) && Z(/<[/\w]/g, i.innerHTML) && Z(/<[/\w]/g, i.textContent) || i.nodeType === Et.progressingInstruction || ct && i.nodeType === Et.comment && Z(/<[/\w]/g, i.data))
            return xe(i),
            !0;
        if (!x[w] || H[w]) {
            if (!H[w] && kn(w) && (F.tagNameCheck instanceof RegExp && Z(F.tagNameCheck, w) || F.tagNameCheck instanceof Function && F.tagNameCheck(w)))
                return !1;
            if (Be && !Te[w]) {
                const Y = O(i) || i.parentNode
                  , J = v(i) || i.childNodes;
                if (J && Y) {
                    const V = J.length;
                    for (let re = V - 1; re >= 0; --re) {
                        const ve = E(J[re], !0);
                        ve.__removalCount = (i.__removalCount || 0) + 1,
                        Y.insertBefore(ve, N(i))
                    }
                }
            }
            return xe(i),
            !0
        }
        return i instanceof h && !Wr(i) || (w === "noscript" || w === "noembed" || w === "noframes") && Z(/<\/no(script|embed|frames)/i, i.innerHTML) ? (xe(i),
        !0) : (be && i.nodeType === Et.text && (m = i.textContent,
        Nt([Pe, Oe, We], Y => {
            m = yt(m, Y, " ")
        }
        ),
        i.textContent !== m && (gt(t.removed, {
            element: i.cloneNode()
        }),
        i.textContent = m)),
        Ce(W.afterSanitizeElements, i, null),
        !1)
    }
      , _n = function(i, m, w) {
        if (_e && (m === "id" || m === "name") && (w in n || w in Hr))
            return !1;
        if (!(Re && !ze[m] && Z(Le, m))) {
            if (!(Ie && Z(me, m))) {
                if (!_[m] || ze[m]) {
                    if (!(kn(i) && (F.tagNameCheck instanceof RegExp && Z(F.tagNameCheck, i) || F.tagNameCheck instanceof Function && F.tagNameCheck(i)) && (F.attributeNameCheck instanceof RegExp && Z(F.attributeNameCheck, m) || F.attributeNameCheck instanceof Function && F.attributeNameCheck(m)) || m === "is" && F.allowCustomizedBuiltInElements && (F.tagNameCheck instanceof RegExp && Z(F.tagNameCheck, w) || F.tagNameCheck instanceof Function && F.tagNameCheck(w))))
                        return !1
                } else if (!nt[m]) {
                    if (!Z(Ze, yt(w, P, ""))) {
                        if (!((m === "src" || m === "xlink:href" || m === "href") && i !== "script" && li(w, "data:") === 0 && ut[i])) {
                            if (!(Fe && !Z(Ye, yt(w, P, "")))) {
                                if (w)
                                    return !1
                            }
                        }
                    }
                }
            }
        }
        return !0
    }
      , kn = function(i) {
        return i !== "annotation-xml" && Zn(i, oe)
    }
      , Mn = function(i) {
        Ce(W.beforeSanitizeAttributes, i, null);
        const {attributes: m} = i;
        if (!m || Kt(i))
            return;
        const w = {
            attrName: "",
            attrValue: "",
            keepAttr: !0,
            allowedAttributes: _,
            forceKeepAttr: void 0
        };
        let Y = m.length;
        for (; Y--; ) {
            const J = m[Y]
              , {name: V, namespaceURI: re, value: ve} = J
              , ft = $(V);
            let Q = V === "value" ? ve : ci(ve);
            if (w.attrName = ft,
            w.attrValue = Q,
            w.keepAttr = !0,
            w.forceKeepAttr = void 0,
            Ce(W.uponSanitizeAttribute, i, w),
            Q = w.attrValue,
            Rt && (ft === "id" || ft === "name") && (kt(V, i),
            Q = Vt + Q),
            ct && Z(/((--!?|])>)|<\/(style|title)/i, Q)) {
                kt(V, i);
                continue
            }
            if (w.forceKeepAttr || (kt(V, i),
            !w.keepAttr))
                continue;
            if (!Ot && Z(/\/>/i, Q)) {
                kt(V, i);
                continue
            }
            be && Nt([Pe, Oe, We], Cn => {
                Q = yt(Q, Cn, " ")
            }
            );
            const Nn = $(i.nodeName);
            if (_n(Nn, ft, Q)) {
                if (M && typeof S == "object" && typeof S.getAttributeType == "function" && !re)
                    switch (S.getAttributeType(Nn, ft)) {
                    case "TrustedHTML":
                        {
                            Q = M.createHTML(Q);
                            break
                        }
                    case "TrustedScriptURL":
                        {
                            Q = M.createScriptURL(Q);
                            break
                        }
                    }
                try {
                    re ? i.setAttributeNS(re, V, Q) : i.setAttribute(V, Q),
                    Kt(i) ? xe(i) : Qn(t.removed)
                } catch {}
            }
        }
        Ce(W.afterSanitizeAttributes, i, null)
    }
      , Yr = function T(i) {
        let m = null;
        const w = An(i);
        for (Ce(W.beforeSanitizeShadowDOM, i, null); m = w.nextNode(); )
            Ce(W.uponSanitizeShadowNode, m, null),
            Rn(m),
            Mn(m),
            m.content instanceof o && T(m.content);
        Ce(W.afterSanitizeShadowDOM, i, null)
    };
    return t.sanitize = function(T) {
        let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , m = null
          , w = null
          , Y = null
          , J = null;
        if (ue = !T,
        ue && (T = "<!-->"),
        typeof T != "string" && !On(T))
            if (typeof T.toString == "function") {
                if (T = T.toString(),
                typeof T != "string")
                    throw bt("dirty is not a string, aborting")
            } else
                throw bt("toString is not a function");
        if (!t.isSupported)
            return T;
        if (et || Jt(i),
        t.removed = [],
        typeof T == "string" && (je = !1),
        je) {
            if (T.nodeName) {
                const ve = $(T.nodeName);
                if (!x[ve] || H[ve])
                    throw bt("root node is forbidden and cannot be sanitized in-place")
            }
        } else if (T instanceof l)
            m = vn("<!---->"),
            w = m.ownerDocument.importNode(T, !0),
            w.nodeType === Et.element && w.nodeName === "BODY" || w.nodeName === "HTML" ? m = w : m.appendChild(w);
        else {
            if (!Ue && !be && !we && T.indexOf("<") === -1)
                return M && G ? M.createHTML(T) : T;
            if (m = vn(T),
            !m)
                return Ue ? null : G ? C : ""
        }
        m && Ee && xe(m.firstChild);
        const V = An(je ? T : m);
        for (; Y = V.nextNode(); )
            Rn(Y),
            Mn(Y),
            Y.content instanceof o && Yr(Y.content);
        if (je)
            return T;
        if (Ue) {
            if (tt)
                for (J = he.call(m.ownerDocument); m.firstChild; )
                    J.appendChild(m.firstChild);
            else
                J = m;
            return (_.shadowroot || _.shadowrootmode) && (J = lt.call(r, J, !0)),
            J
        }
        let re = we ? m.outerHTML : m.innerHTML;
        return we && x["!doctype"] && m.ownerDocument && m.ownerDocument.doctype && m.ownerDocument.doctype.name && Z(Ur, m.ownerDocument.doctype.name) && (re = "<!DOCTYPE " + m.ownerDocument.doctype.name + `>
` + re),
        be && Nt([Pe, Oe, We], ve => {
            re = yt(re, ve, " ")
        }
        ),
        M && G ? M.createHTML(re) : re
    }
    ,
    t.setConfig = function() {
        let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        Jt(T),
        et = !0
    }
    ,
    t.clearConfig = function() {
        at = null,
        et = !1
    }
    ,
    t.isValidAttribute = function(T, i, m) {
        at || Jt({});
        const w = $(T)
          , Y = $(i);
        return _n(w, Y, m)
    }
    ,
    t.addHook = function(T, i) {
        typeof i == "function" && gt(W[T], i)
    }
    ,
    t.removeHook = function(T, i) {
        if (i !== void 0) {
            const m = si(W[T], i);
            return m === -1 ? void 0 : ii(W[T], m, 1)[0]
        }
        return Qn(W[T])
    }
    ,
    t.removeHooks = function(T) {
        W[T] = []
    }
    ,
    t.removeAllHooks = function() {
        W = or()
    }
    ,
    t
}
var Ml = Br();
export {tl as $, $i as A, Ol as B, Qi as C, _l as D, kl as E, ts as F, wl as G, ns as H, Bt as I, Qe as J, Fs as K, Bs as L, il as M, Ko as N, zi as O, Xi as P, ol as Q, Vi as R, ul as S, al as T, nl as U, sl as V, rl as W, cl as X, ll as Y, qi as Z, dl as _, j as a, Ml as a0, ji as a1, Gi as b, Zi as c, Ki as d, el as e, Ji as f, bl as g, Ht as h, Ls as i, $o as j, yl as k, Al as l, vl as m, gl as n, Nr as o, Rl as p, Xo as q, Sl as r, es as s, fl as t, Tl as u, El as v, xl as w, hl as x, ml as y, pl as z};
