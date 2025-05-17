import {e as wc, g as jc, r as f, t as Nc, f as Pe, j as s, R as E, S as kc, h as Cc, T as Ar, I as Sc, i as Lr, k as Ir, P as Tc, C as Rr, V as Pc, L as Br, l as Vr, m as Mc, n as Ec, o as _r, p as Dc, q as Ac, s as Lc, u as Or, v as Ic, w as Rc, x as Bc, H as Vc, y as zr, z as Fr, A as _c, B as $r, D as Oc, E as zc, F as Hr, G as Fc} from "./vendor-ui-CO2oigVm.js";
import {c as Wr, a as Gr, u as $c, b as Hc, d as Wc, e as xe, P as Gc} from "./vendor-state-CuU5odDQ.js";
import {u as La, L as H, a as zt, R as Uc, b as X, B as qc} from "./vendor-react-DdZoXWV7.js";
import {a as Ve, A as Yc, b as Kc, C as Ur, c as qr, M as $n, d as Ia, e as Xc, f as Zc, s as ce, g as Ra, h as Hn, i as Jc, j as Ne, k as Lt, l as Ba, m as Yr, n as re, o as oe, p as Os, q as Me, r as Qc, t as da, u as ed, v as Ce, w as ua, x as td, y as sd, z as ad, B as nd, D as zs, E as Wn, F as id, G as Kr, H as Xr, I as Va, J as _a, K as rd, L as od, N as Zr, O as ne, P as Oa, S as ma, Q as ld, R as cd, T as dd, U as ud, V as md, W as hd, X as pd, Y as Fs, Z as fd, _ as ha, $ as xd, a0 as gd, a1 as vd} from "./vendor-utils-B6xdszpH.js";
import {u as yd, A as bd, d as wd, S as jd, e as Nd, c as kd, m as Se, a as Cd, b as Sd, f as Gn} from "./vendor-carousel-JpIHyi-o.js";
import {A as Td, M as Pd, u as Md, a as Ed, I as Dd} from "./vendor-maps-Cs_NUWuu.js";
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        n(i);
    new MutationObserver(i => {
        for (const r of i)
            if (r.type === "childList")
                for (const o of r.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function a(i) {
        const r = {};
        return i.integrity && (r.integrity = i.integrity),
        i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function n(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const r = a(i);
        fetch(i.href, r)
    }
}
)();
var Yt = {}, Un;
function Ad() {
    if (Un)
        return Yt;
    Un = 1;
    var e = wc();
    return Yt.createRoot = e.createRoot,
    Yt.hydrateRoot = e.hydrateRoot,
    Yt
}
var Ld = Ad();
const Id = jc(Ld)
  , Rd = () => {
    const {pathname: e} = La();
    return f.useEffect( () => {
        window.scrollTo(0, 0)
    }
    , [e]),
    null
}
  , ss = Wr("allDestinations/fetchData", async (e, {rejectWithValue: t}) => {
    try {
        return (await Ve.get(e)).data
    } catch (a) {
        return t(a.response.data)
    }
}
)
  , Bd = Gr({
    name: "allDestinations",
    initialState: {
        data: [],
        loading: !1,
        error: null
    },
    reducers: {},
    extraReducers: e => {
        e.addCase(ss.pending, t => {
            t.loading = !0,
            t.error = null
        }
        ).addCase(ss.fulfilled, (t, a) => {
            t.data = a.payload,
            t.loading = !1
        }
        ).addCase(ss.rejected, (t, a) => {
            t.error = a.payload,
            t.loading = !1
        }
        )
    }
})
  , Vd = Bd.reducer
  , as = Wr("allPackages/fetchAllPackages", async (e, {rejectWithValue: t}) => {
    try {
        return (await Ve.get(e)).data
    } catch (a) {
        return t(a.response.data)
    }
}
)
  , _d = Gr({
    name: "allPackages",
    initialState: {
        data: [],
        loading: !1,
        error: null
    },
    reducers: {},
    extraReducers: e => {
        e.addCase(as.pending, t => {
            t.loading = !0,
            t.error = null
        }
        ).addCase(as.fulfilled, (t, a) => {
            t.data = a.payload,
            t.loading = !1
        }
        ).addCase(as.rejected, (t, a) => {
            t.error = a.payload,
            t.loading = !1
        }
        )
    }
})
  , Od = _d.reducer
  , zd = () => {
    const e = $c();
    return f.useEffect( () => {
        e(as("https://www.sathuragiriyaan.tech/api/travels/packages")),
        e(ss("https://www.sathuragiriyaan.tech/api/travels/attractions"))
    }
    , []),
    null
}
  , Fd = Hc({
    allDestinations: Vd,
    allPackages: Od
})
  , $d = Wc({
    reducer: Fd
})
  , za = f.createContext();
function R(...e) {
    return Nc(Pe(e))
}
const Hd = ({loadingState: e, loadingFallback: t, errorState: a, errorFallback: n, data: i, message: r}) => e ? t : a ? n : r || i
  , us = e => e.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
  , Jr = e => {
    const t = {
        day: "2-digit",
        month: "short",
        year: "numeric"
    };
    return new Date(e).toLocaleDateString("en-GB", t).replace(/ /g, "-")
}
;
function Wd(e) {
    if (typeof Proxy > "u")
        return e;
    const t = new Map
      , a = (...n) => e(...n);
    return new Proxy(a,{
        get: (n, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)),
        t.get(i))
    })
}
function It(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const pa = e => Array.isArray(e);
function Qr(e, t) {
    if (!Array.isArray(t))
        return !1;
    const a = t.length;
    if (a !== e.length)
        return !1;
    for (let n = 0; n < a; n++)
        if (t[n] !== e[n])
            return !1;
    return !0
}
function Rt(e) {
    return typeof e == "string" || Array.isArray(e)
}
function qn(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (a, n) => {
        t[0][n] = a.get(),
        t[1][n] = a.getVelocity()
    }
    ),
    t
}
function Fa(e, t, a, n) {
    if (typeof t == "function") {
        const [i,r] = qn(n);
        t = t(a !== void 0 ? a : e.custom, i, r)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,r] = qn(n);
        t = t(a !== void 0 ? a : e.custom, i, r)
    }
    return t
}
function ks(e, t, a) {
    const n = e.getProps();
    return Fa(n, t, a !== void 0 ? a : n.custom, e)
}
const $a = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Ha = ["initial", ...$a]
  , Ft = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Ge = new Set(Ft)
  , Ae = e => e * 1e3
  , Le = e => e / 1e3
  , Gd = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , Ud = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , qd = {
    type: "keyframes",
    duration: .8
}
  , Yd = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , Kd = (e, {keyframes: t}) => t.length > 2 ? qd : Ge.has(e) ? e.startsWith("scale") ? Ud(t[1]) : Gd : Yd;
function Wa(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const Xd = {
    useManualTiming: !1
}
  , Zd = e => e !== null;
function Cs(e, {repeat: t, repeatType: a="loop"}, n) {
    const i = e.filter(Zd)
      , r = t && a !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !r || n === void 0 ? i[r] : n
}
const J = e => e;
function Jd(e) {
    let t = new Set
      , a = new Set
      , n = !1
      , i = !1;
    const r = new WeakSet;
    let o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function l(u) {
        r.has(u) && (c.schedule(u),
        e()),
        u(o)
    }
    const c = {
        schedule: (u, d=!1, m=!1) => {
            const g = m && n ? t : a;
            return d && r.add(u),
            g.has(u) || g.add(u),
            u
        }
        ,
        cancel: u => {
            a.delete(u),
            r.delete(u)
        }
        ,
        process: u => {
            if (o = u,
            n) {
                i = !0;
                return
            }
            n = !0,
            [t,a] = [a, t],
            a.clear(),
            t.forEach(l),
            n = !1,
            i && (i = !1,
            c.process(u))
        }
    };
    return c
}
const Kt = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , Qd = 40;
function eo(e, t) {
    let a = !1
      , n = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , r = () => a = !0
      , o = Kt.reduce( (y, p) => (y[p] = Jd(r),
    y), {})
      , {read: l, resolveKeyframes: c, update: u, preRender: d, render: m, postRender: h} = o
      , g = () => {
        const y = performance.now();
        a = !1,
        i.delta = n ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, Qd), 1),
        i.timestamp = y,
        i.isProcessing = !0,
        l.process(i),
        c.process(i),
        u.process(i),
        d.process(i),
        m.process(i),
        h.process(i),
        i.isProcessing = !1,
        a && t && (n = !1,
        e(g))
    }
      , x = () => {
        a = !0,
        n = !0,
        i.isProcessing || e(g)
    }
    ;
    return {
        schedule: Kt.reduce( (y, p) => {
            const v = o[p];
            return y[p] = (N, k=!1, P=!1) => (a || x(),
            v.schedule(N, k, P)),
            y
        }
        , {}),
        cancel: y => {
            for (let p = 0; p < Kt.length; p++)
                o[Kt[p]].cancel(y)
        }
        ,
        state: i,
        steps: o
    }
}
const {schedule: z, cancel: ke, state: Z, steps: $s} = eo(typeof requestAnimationFrame < "u" ? requestAnimationFrame : J, !0)
  , to = (e, t, a) => (((1 - 3 * a + 3 * t) * e + (3 * a - 6 * t)) * e + 3 * t) * e
  , eu = 1e-7
  , tu = 12;
function su(e, t, a, n, i) {
    let r, o, l = 0;
    do
        o = t + (a - t) / 2,
        r = to(o, n, i) - e,
        r > 0 ? a = o : t = o;
    while (Math.abs(r) > eu && ++l < tu);
    return o
}
function $t(e, t, a, n) {
    if (e === t && a === n)
        return J;
    const i = r => su(r, 0, 1, e, a);
    return r => r === 0 || r === 1 ? r : to(i(r), t, n)
}
const so = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , ao = e => t => 1 - e(1 - t)
  , no = $t(.33, 1.53, .69, .99)
  , Ga = ao(no)
  , io = so(Ga)
  , ro = e => (e *= 2) < 1 ? .5 * Ga(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Ua = e => 1 - Math.sin(Math.acos(e))
  , oo = ao(Ua)
  , lo = so(Ua)
  , co = e => /^0[^.\s]+$/u.test(e);
function au(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || co(e) : !0
}
let nu = J
  , uo = J;
const mo = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , ho = e => t => typeof t == "string" && t.startsWith(e)
  , po = ho("--")
  , iu = ho("var(--")
  , qa = e => iu(e) ? ru.test(e.split("/*")[0].trim()) : !1
  , ru = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , ou = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function lu(e) {
    const t = ou.exec(e);
    if (!t)
        return [, ];
    const [,a,n,i] = t;
    return [`--${a ?? n}`, i]
}
function fo(e, t, a=1) {
    const [n,i] = lu(e);
    if (!n)
        return;
    const r = window.getComputedStyle(t).getPropertyValue(n);
    if (r) {
        const o = r.trim();
        return mo(o) ? parseFloat(o) : o
    }
    return qa(i) ? fo(i, t, a + 1) : i
}
const ze = (e, t, a) => a > t ? t : a < e ? e : a
  , vt = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Bt = {
    ...vt,
    transform: e => ze(0, 1, e)
}
  , Xt = {
    ...vt,
    default: 1
}
  , Ht = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , _e = Ht("deg")
  , we = Ht("%")
  , L = Ht("px")
  , cu = Ht("vh")
  , du = Ht("vw")
  , Yn = {
    ...we,
    parse: e => we.parse(e) / 100,
    transform: e => we.transform(e * 100)
}
  , uu = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , Kn = e => e === vt || e === L
  , Xn = (e, t) => parseFloat(e.split(", ")[t])
  , Zn = (e, t) => (a, {transform: n}) => {
    if (n === "none" || !n)
        return 0;
    const i = n.match(/^matrix3d\((.+)\)$/u);
    if (i)
        return Xn(i[1], t);
    {
        const r = n.match(/^matrix\((.+)\)$/u);
        return r ? Xn(r[1], e) : 0
    }
}
  , mu = new Set(["x", "y", "z"])
  , hu = Ft.filter(e => !mu.has(e));
function pu(e) {
    const t = [];
    return hu.forEach(a => {
        const n = e.getValue(a);
        n !== void 0 && (t.push([a, n.get()]),
        n.set(a.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const ht = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: a="0"}) => e.max - e.min - parseFloat(t) - parseFloat(a),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: a="0"}) => e.max - e.min - parseFloat(t) - parseFloat(a),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: Zn(4, 13),
    y: Zn(5, 14)
};
ht.translateX = ht.x;
ht.translateY = ht.y;
const xo = e => t => t.test(e)
  , fu = {
    test: e => e === "auto",
    parse: e => e
}
  , go = [vt, L, we, _e, du, cu, fu]
  , Jn = e => go.find(xo(e))
  , Qe = new Set;
let fa = !1
  , xa = !1;
function vo() {
    if (xa) {
        const e = Array.from(Qe).filter(n => n.needsMeasurement)
          , t = new Set(e.map(n => n.element))
          , a = new Map;
        t.forEach(n => {
            const i = pu(n);
            i.length && (a.set(n, i),
            n.render())
        }
        ),
        e.forEach(n => n.measureInitialState()),
        t.forEach(n => {
            n.render();
            const i = a.get(n);
            i && i.forEach( ([r,o]) => {
                var l;
                (l = n.getValue(r)) === null || l === void 0 || l.set(o)
            }
            )
        }
        ),
        e.forEach(n => n.measureEndState()),
        e.forEach(n => {
            n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY)
        }
        )
    }
    xa = !1,
    fa = !1,
    Qe.forEach(e => e.complete()),
    Qe.clear()
}
function yo() {
    Qe.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (xa = !0)
    }
    )
}
function xu() {
    yo(),
    vo()
}
class Ya {
    constructor(t, a, n, i, r, o=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = a,
        this.name = n,
        this.motionValue = i,
        this.element = r,
        this.isAsync = o
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (Qe.add(this),
        fa || (fa = !0,
        z.read(yo),
        z.resolveKeyframes(vo))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: a, element: n, motionValue: i} = this;
        for (let r = 0; r < t.length; r++)
            if (t[r] === null)
                if (r === 0) {
                    const o = i == null ? void 0 : i.get()
                      , l = t[t.length - 1];
                    if (o !== void 0)
                        t[0] = o;
                    else if (n && a) {
                        const c = n.readValue(a, l);
                        c != null && (t[0] = c)
                    }
                    t[0] === void 0 && (t[0] = l),
                    i && o === void 0 && i.set(t[0])
                } else
                    t[r] = t[r - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        Qe.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        Qe.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Tt = e => Math.round(e * 1e5) / 1e5
  , Ka = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function gu(e) {
    return e == null
}
const vu = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Xa = (e, t) => a => !!(typeof a == "string" && vu.test(a) && a.startsWith(e) || t && !gu(a) && Object.prototype.hasOwnProperty.call(a, t))
  , bo = (e, t, a) => n => {
    if (typeof n != "string")
        return n;
    const [i,r,o,l] = n.match(Ka);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(r),
        [a]: parseFloat(o),
        alpha: l !== void 0 ? parseFloat(l) : 1
    }
}
  , yu = e => ze(0, 255, e)
  , Hs = {
    ...vt,
    transform: e => Math.round(yu(e))
}
  , Je = {
    test: Xa("rgb", "red"),
    parse: bo("red", "green", "blue"),
    transform: ({red: e, green: t, blue: a, alpha: n=1}) => "rgba(" + Hs.transform(e) + ", " + Hs.transform(t) + ", " + Hs.transform(a) + ", " + Tt(Bt.transform(n)) + ")"
};
function bu(e) {
    let t = ""
      , a = ""
      , n = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    a = e.substring(3, 5),
    n = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    a = e.substring(2, 3),
    n = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    a += a,
    n += n,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(a, 16),
        blue: parseInt(n, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const ga = {
    test: Xa("#"),
    parse: bu,
    transform: Je.transform
}
  , ot = {
    test: Xa("hsl", "hue"),
    parse: bo("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: a, alpha: n=1}) => "hsla(" + Math.round(e) + ", " + we.transform(Tt(t)) + ", " + we.transform(Tt(a)) + ", " + Tt(Bt.transform(n)) + ")"
}
  , ee = {
    test: e => Je.test(e) || ga.test(e) || ot.test(e),
    parse: e => Je.test(e) ? Je.parse(e) : ot.test(e) ? ot.parse(e) : ga.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Je.transform(e) : ot.transform(e)
}
  , wu = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ju(e) {
    var t, a;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Ka)) === null || t === void 0 ? void 0 : t.length) || 0) + (((a = e.match(wu)) === null || a === void 0 ? void 0 : a.length) || 0) > 0
}
const wo = "number"
  , jo = "color"
  , Nu = "var"
  , ku = "var("
  , Qn = "${}"
  , Cu = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Vt(e) {
    const t = e.toString()
      , a = []
      , n = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let r = 0;
    const l = t.replace(Cu, c => (ee.test(c) ? (n.color.push(r),
    i.push(jo),
    a.push(ee.parse(c))) : c.startsWith(ku) ? (n.var.push(r),
    i.push(Nu),
    a.push(c)) : (n.number.push(r),
    i.push(wo),
    a.push(parseFloat(c))),
    ++r,
    Qn)).split(Qn);
    return {
        values: a,
        split: l,
        indexes: n,
        types: i
    }
}
function No(e) {
    return Vt(e).values
}
function ko(e) {
    const {split: t, types: a} = Vt(e)
      , n = t.length;
    return i => {
        let r = "";
        for (let o = 0; o < n; o++)
            if (r += t[o],
            i[o] !== void 0) {
                const l = a[o];
                l === wo ? r += Tt(i[o]) : l === jo ? r += ee.transform(i[o]) : r += i[o]
            }
        return r
    }
}
const Su = e => typeof e == "number" ? 0 : e;
function Tu(e) {
    const t = No(e);
    return ko(e)(t.map(Su))
}
const Fe = {
    test: ju,
    parse: No,
    createTransformer: ko,
    getAnimatableNone: Tu
}
  , Pu = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Mu(e) {
    const [t,a] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [n] = a.match(Ka) || [];
    if (!n)
        return e;
    const i = a.replace(n, "");
    let r = Pu.has(t) ? 1 : 0;
    return n !== a && (r *= 100),
    t + "(" + r + i + ")"
}
const Eu = /\b([a-z-]*)\(.*?\)/gu
  , va = {
    ...Fe,
    getAnimatableNone: e => {
        const t = e.match(Eu);
        return t ? t.map(Mu).join(" ") : e
    }
}
  , Du = {
    borderWidth: L,
    borderTopWidth: L,
    borderRightWidth: L,
    borderBottomWidth: L,
    borderLeftWidth: L,
    borderRadius: L,
    radius: L,
    borderTopLeftRadius: L,
    borderTopRightRadius: L,
    borderBottomRightRadius: L,
    borderBottomLeftRadius: L,
    width: L,
    maxWidth: L,
    height: L,
    maxHeight: L,
    top: L,
    right: L,
    bottom: L,
    left: L,
    padding: L,
    paddingTop: L,
    paddingRight: L,
    paddingBottom: L,
    paddingLeft: L,
    margin: L,
    marginTop: L,
    marginRight: L,
    marginBottom: L,
    marginLeft: L,
    backgroundPositionX: L,
    backgroundPositionY: L
}
  , Au = {
    rotate: _e,
    rotateX: _e,
    rotateY: _e,
    rotateZ: _e,
    scale: Xt,
    scaleX: Xt,
    scaleY: Xt,
    scaleZ: Xt,
    skew: _e,
    skewX: _e,
    skewY: _e,
    distance: L,
    translateX: L,
    translateY: L,
    translateZ: L,
    x: L,
    y: L,
    z: L,
    perspective: L,
    transformPerspective: L,
    opacity: Bt,
    originX: Yn,
    originY: Yn,
    originZ: L
}
  , ei = {
    ...vt,
    transform: Math.round
}
  , Za = {
    ...Du,
    ...Au,
    zIndex: ei,
    size: L,
    fillOpacity: Bt,
    strokeOpacity: Bt,
    numOctaves: ei
}
  , Lu = {
    ...Za,
    color: ee,
    backgroundColor: ee,
    outlineColor: ee,
    fill: ee,
    stroke: ee,
    borderColor: ee,
    borderTopColor: ee,
    borderRightColor: ee,
    borderBottomColor: ee,
    borderLeftColor: ee,
    filter: va,
    WebkitFilter: va
}
  , Ja = e => Lu[e];
function Co(e, t) {
    let a = Ja(e);
    return a !== va && (a = Fe),
    a.getAnimatableNone ? a.getAnimatableNone(t) : void 0
}
const Iu = new Set(["auto", "none", "0"]);
function Ru(e, t, a) {
    let n = 0, i;
    for (; n < e.length && !i; ) {
        const r = e[n];
        typeof r == "string" && !Iu.has(r) && Vt(r).values.length && (i = e[n]),
        n++
    }
    if (i && a)
        for (const r of t)
            e[r] = Co(a, i)
}
class So extends Ya {
    constructor(t, a, n, i, r) {
        super(t, a, n, i, r, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: a, name: n} = this;
        if (!a || !a.current)
            return;
        super.readKeyframes();
        for (let c = 0; c < t.length; c++) {
            let u = t[c];
            if (typeof u == "string" && (u = u.trim(),
            qa(u))) {
                const d = fo(u, a.current);
                d !== void 0 && (t[c] = d),
                c === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(),
        !uu.has(n) || t.length !== 2)
            return;
        const [i,r] = t
          , o = Jn(i)
          , l = Jn(r);
        if (o !== l)
            if (Kn(o) && Kn(l))
                for (let c = 0; c < t.length; c++) {
                    const u = t[c];
                    typeof u == "string" && (t[c] = parseFloat(u))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: a} = this
          , n = [];
        for (let i = 0; i < t.length; i++)
            au(t[i]) && n.push(i);
        n.length && Ru(t, n, a)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: a, name: n} = this;
        if (!t || !t.current)
            return;
        n === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = ht[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
        a[0] = this.measuredOrigin;
        const i = a[a.length - 1];
        i !== void 0 && t.getValue(n, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {element: a, name: n, unresolvedKeyframes: i} = this;
        if (!a || !a.current)
            return;
        const r = a.getValue(n);
        r && r.jump(this.measuredOrigin, !1);
        const o = i.length - 1
          , l = i[o];
        i[o] = ht[n](a.measureViewportBox(), window.getComputedStyle(a.current)),
        l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
        !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach( ([c,u]) => {
            a.getValue(c).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function Qa(e) {
    return typeof e == "function"
}
let ns;
function Bu() {
    ns = void 0
}
const je = {
    now: () => (ns === void 0 && je.set(Z.isProcessing || Xd.useManualTiming ? Z.timestamp : performance.now()),
    ns),
    set: e => {
        ns = e,
        queueMicrotask(Bu)
    }
}
  , ti = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Fe.test(e) || e === "0") && !e.startsWith("url("));
function Vu(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let a = 0; a < e.length; a++)
        if (e[a] !== t)
            return !0
}
function _u(e, t, a, n) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const r = e[e.length - 1]
      , o = ti(i, t)
      , l = ti(r, t);
    return !o || !l ? !1 : Vu(e) || (a === "spring" || Qa(a)) && n
}
const Ou = 40;
class To {
    constructor({autoplay: t=!0, delay: a=0, type: n="keyframes", repeat: i=0, repeatDelay: r=0, repeatType: o="loop", ...l}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = je.now(),
        this.options = {
            autoplay: t,
            delay: a,
            type: n,
            repeat: i,
            repeatDelay: r,
            repeatType: o,
            ...l
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > Ou ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && xu(),
        this._resolved
    }
    onKeyframesResolved(t, a) {
        this.resolvedAt = je.now(),
        this.hasAttemptedResolve = !0;
        const {name: n, type: i, velocity: r, delay: o, onComplete: l, onUpdate: c, isGenerator: u} = this.options;
        if (!u && !_u(t, n, i, r))
            if (o)
                this.options.duration = 0;
            else {
                c == null || c(Cs(t, this.options, a)),
                l == null || l(),
                this.resolveFinishedPromise();
                return
            }
        const d = this.initPlayback(t, a);
        d !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: a,
            ...d
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(t, a) {
        return this.currentFinishedPromise.then(t, a)
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        }
        )
    }
}
function en(e, t) {
    return t ? e * (1e3 / t) : 0
}
const zu = 5;
function Po(e, t, a) {
    const n = Math.max(t - zu, 0);
    return en(a - e(n), t - n)
}
const si = .001
  , Fu = .01
  , $u = 10
  , Hu = .05
  , Wu = 1;
function Gu({duration: e=800, bounce: t=.25, velocity: a=0, mass: n=1}) {
    let i, r, o = 1 - t;
    o = ze(Hu, Wu, o),
    e = ze(Fu, $u, Le(e)),
    o < 1 ? (i = u => {
        const d = u * o
          , m = d * e
          , h = d - a
          , g = ya(u, o)
          , x = Math.exp(-m);
        return si - h / g * x
    }
    ,
    r = u => {
        const m = u * o * e
          , h = m * a + a
          , g = Math.pow(o, 2) * Math.pow(u, 2) * e
          , x = Math.exp(-m)
          , w = ya(Math.pow(u, 2), o);
        return (-i(u) + si > 0 ? -1 : 1) * ((h - g) * x) / w
    }
    ) : (i = u => {
        const d = Math.exp(-u * e)
          , m = (u - a) * e + 1;
        return -.001 + d * m
    }
    ,
    r = u => {
        const d = Math.exp(-u * e)
          , m = (a - u) * (e * e);
        return d * m
    }
    );
    const l = 5 / e
      , c = qu(i, r, l);
    if (e = Ae(e),
    isNaN(c))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const u = Math.pow(c, 2) * n;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(n * u),
            duration: e
        }
    }
}
const Uu = 12;
function qu(e, t, a) {
    let n = a;
    for (let i = 1; i < Uu; i++)
        n = n - e(n) / t(n);
    return n
}
function ya(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const Yu = ["duration", "bounce"]
  , Ku = ["stiffness", "damping", "mass"];
function ai(e, t) {
    return t.some(a => e[a] !== void 0)
}
function Xu(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!ai(e, Ku) && ai(e, Yu)) {
        const a = Gu(e);
        t = {
            ...t,
            ...a,
            mass: 1
        },
        t.isResolvedFromDuration = !0
    }
    return t
}
function Mo({keyframes: e, restDelta: t, restSpeed: a, ...n}) {
    const i = e[0]
      , r = e[e.length - 1]
      , o = {
        done: !1,
        value: i
    }
      , {stiffness: l, damping: c, mass: u, duration: d, velocity: m, isResolvedFromDuration: h} = Xu({
        ...n,
        velocity: -Le(n.velocity || 0)
    })
      , g = m || 0
      , x = c / (2 * Math.sqrt(l * u))
      , w = r - i
      , b = Le(Math.sqrt(l / u))
      , y = Math.abs(w) < 5;
    a || (a = y ? .01 : 2),
    t || (t = y ? .005 : .5);
    let p;
    if (x < 1) {
        const v = ya(b, x);
        p = N => {
            const k = Math.exp(-x * b * N);
            return r - k * ((g + x * b * w) / v * Math.sin(v * N) + w * Math.cos(v * N))
        }
    } else if (x === 1)
        p = v => r - Math.exp(-b * v) * (w + (g + b * w) * v);
    else {
        const v = b * Math.sqrt(x * x - 1);
        p = N => {
            const k = Math.exp(-x * b * N)
              , P = Math.min(v * N, 300);
            return r - k * ((g + x * b * w) * Math.sinh(P) + v * w * Math.cosh(P)) / v
        }
    }
    return {
        calculatedDuration: h && d || null,
        next: v => {
            const N = p(v);
            if (h)
                o.done = v >= d;
            else {
                let k = 0;
                x < 1 && (k = v === 0 ? Ae(g) : Po(p, v, N));
                const P = Math.abs(k) <= a
                  , D = Math.abs(r - N) <= t;
                o.done = P && D
            }
            return o.value = o.done ? r : N,
            o
        }
    }
}
function ni({keyframes: e, velocity: t=0, power: a=.8, timeConstant: n=325, bounceDamping: i=10, bounceStiffness: r=500, modifyTarget: o, min: l, max: c, restDelta: u=.5, restSpeed: d}) {
    const m = e[0]
      , h = {
        done: !1,
        value: m
    }
      , g = C => l !== void 0 && C < l || c !== void 0 && C > c
      , x = C => l === void 0 ? c : c === void 0 || Math.abs(l - C) < Math.abs(c - C) ? l : c;
    let w = a * t;
    const b = m + w
      , y = o === void 0 ? b : o(b);
    y !== b && (w = y - m);
    const p = C => -w * Math.exp(-C / n)
      , v = C => y + p(C)
      , N = C => {
        const j = p(C)
          , A = v(C);
        h.done = Math.abs(j) <= u,
        h.value = h.done ? y : A
    }
    ;
    let k, P;
    const D = C => {
        g(h.value) && (k = C,
        P = Mo({
            keyframes: [h.value, x(h.value)],
            velocity: Po(v, C, h.value),
            damping: i,
            stiffness: r,
            restDelta: u,
            restSpeed: d
        }))
    }
    ;
    return D(0),
    {
        calculatedDuration: null,
        next: C => {
            let j = !1;
            return !P && k === void 0 && (j = !0,
            N(C),
            D(C)),
            k !== void 0 && C >= k ? P.next(C - k) : (!j && N(C),
            h)
        }
    }
}
const Zu = $t(.42, 0, 1, 1)
  , Ju = $t(0, 0, .58, 1)
  , Eo = $t(.42, 0, .58, 1)
  , Qu = e => Array.isArray(e) && typeof e[0] != "number"
  , tn = e => Array.isArray(e) && typeof e[0] == "number"
  , em = {
    linear: J,
    easeIn: Zu,
    easeInOut: Eo,
    easeOut: Ju,
    circIn: Ua,
    circInOut: lo,
    circOut: oo,
    backIn: Ga,
    backInOut: io,
    backOut: no,
    anticipate: ro
}
  , ii = e => {
    if (tn(e)) {
        uo(e.length === 4);
        const [t,a,n,i] = e;
        return $t(t, a, n, i)
    } else if (typeof e == "string")
        return em[e];
    return e
}
  , tm = (e, t) => a => t(e(a))
  , Ie = (...e) => e.reduce(tm)
  , st = (e, t, a) => {
    const n = t - e;
    return n === 0 ? 1 : (a - e) / n
}
  , Y = (e, t, a) => e + (t - e) * a;
function Ws(e, t, a) {
    return a < 0 && (a += 1),
    a > 1 && (a -= 1),
    a < 1 / 6 ? e + (t - e) * 6 * a : a < 1 / 2 ? t : a < 2 / 3 ? e + (t - e) * (2 / 3 - a) * 6 : e
}
function sm({hue: e, saturation: t, lightness: a, alpha: n}) {
    e /= 360,
    t /= 100,
    a /= 100;
    let i = 0
      , r = 0
      , o = 0;
    if (!t)
        i = r = o = a;
    else {
        const l = a < .5 ? a * (1 + t) : a + t - a * t
          , c = 2 * a - l;
        i = Ws(c, l, e + 1 / 3),
        r = Ws(c, l, e),
        o = Ws(c, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(r * 255),
        blue: Math.round(o * 255),
        alpha: n
    }
}
function ms(e, t) {
    return a => a > 0 ? t : e
}
const Gs = (e, t, a) => {
    const n = e * e
      , i = a * (t * t - n) + n;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , am = [ga, Je, ot]
  , nm = e => am.find(t => t.test(e));
function ri(e) {
    const t = nm(e);
    if (!t)
        return !1;
    let a = t.parse(e);
    return t === ot && (a = sm(a)),
    a
}
const oi = (e, t) => {
    const a = ri(e)
      , n = ri(t);
    if (!a || !n)
        return ms(e, t);
    const i = {
        ...a
    };
    return r => (i.red = Gs(a.red, n.red, r),
    i.green = Gs(a.green, n.green, r),
    i.blue = Gs(a.blue, n.blue, r),
    i.alpha = Y(a.alpha, n.alpha, r),
    Je.transform(i))
}
  , ba = new Set(["none", "hidden"]);
function im(e, t) {
    return ba.has(e) ? a => a <= 0 ? e : t : a => a >= 1 ? t : e
}
function rm(e, t) {
    return a => Y(e, t, a)
}
function sn(e) {
    return typeof e == "number" ? rm : typeof e == "string" ? qa(e) ? ms : ee.test(e) ? oi : cm : Array.isArray(e) ? Do : typeof e == "object" ? ee.test(e) ? oi : om : ms
}
function Do(e, t) {
    const a = [...e]
      , n = a.length
      , i = e.map( (r, o) => sn(r)(r, t[o]));
    return r => {
        for (let o = 0; o < n; o++)
            a[o] = i[o](r);
        return a
    }
}
function om(e, t) {
    const a = {
        ...e,
        ...t
    }
      , n = {};
    for (const i in a)
        e[i] !== void 0 && t[i] !== void 0 && (n[i] = sn(e[i])(e[i], t[i]));
    return i => {
        for (const r in n)
            a[r] = n[r](i);
        return a
    }
}
function lm(e, t) {
    var a;
    const n = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let r = 0; r < t.values.length; r++) {
        const o = t.types[r]
          , l = e.indexes[o][i[o]]
          , c = (a = e.values[l]) !== null && a !== void 0 ? a : 0;
        n[r] = c,
        i[o]++
    }
    return n
}
const cm = (e, t) => {
    const a = Fe.createTransformer(t)
      , n = Vt(e)
      , i = Vt(t);
    return n.indexes.var.length === i.indexes.var.length && n.indexes.color.length === i.indexes.color.length && n.indexes.number.length >= i.indexes.number.length ? ba.has(e) && !i.values.length || ba.has(t) && !n.values.length ? im(e, t) : Ie(Do(lm(n, i), i.values), a) : ms(e, t)
}
;
function Ao(e, t, a) {
    return typeof e == "number" && typeof t == "number" && typeof a == "number" ? Y(e, t, a) : sn(e)(e, t)
}
function dm(e, t, a) {
    const n = []
      , i = a || Ao
      , r = e.length - 1;
    for (let o = 0; o < r; o++) {
        let l = i(e[o], e[o + 1]);
        if (t) {
            const c = Array.isArray(t) ? t[o] || J : t;
            l = Ie(c, l)
        }
        n.push(l)
    }
    return n
}
function Lo(e, t, {clamp: a=!0, ease: n, mixer: i}={}) {
    const r = e.length;
    if (uo(r === t.length),
    r === 1)
        return () => t[0];
    if (r === 2 && e[0] === e[1])
        return () => t[1];
    e[0] > e[r - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const o = dm(t, n, i)
      , l = o.length
      , c = u => {
        let d = 0;
        if (l > 1)
            for (; d < e.length - 2 && !(u < e[d + 1]); d++)
                ;
        const m = st(e[d], e[d + 1], u);
        return o[d](m)
    }
    ;
    return a ? u => c(ze(e[0], e[r - 1], u)) : c
}
function um(e, t) {
    const a = e[e.length - 1];
    for (let n = 1; n <= t; n++) {
        const i = st(0, t, n);
        e.push(Y(a, 1, i))
    }
}
function Io(e) {
    const t = [0];
    return um(t, e.length - 1),
    t
}
function mm(e, t) {
    return e.map(a => a * t)
}
function hm(e, t) {
    return e.map( () => t || Eo).splice(0, e.length - 1)
}
function hs({duration: e=300, keyframes: t, times: a, ease: n="easeInOut"}) {
    const i = Qu(n) ? n.map(ii) : ii(n)
      , r = {
        done: !1,
        value: t[0]
    }
      , o = mm(a && a.length === t.length ? a : Io(t), e)
      , l = Lo(o, t, {
        ease: Array.isArray(i) ? i : hm(t, i)
    });
    return {
        calculatedDuration: e,
        next: c => (r.value = l(c),
        r.done = c >= e,
        r)
    }
}
const li = 2e4;
function pm(e) {
    let t = 0;
    const a = 50;
    let n = e.next(t);
    for (; !n.done && t < li; )
        t += a,
        n = e.next(t);
    return t >= li ? 1 / 0 : t
}
const fm = e => {
    const t = ({timestamp: a}) => e(a);
    return {
        start: () => z.update(t, !0),
        stop: () => ke(t),
        now: () => Z.isProcessing ? Z.timestamp : je.now()
    }
}
  , xm = {
    decay: ni,
    inertia: ni,
    tween: hs,
    keyframes: hs,
    spring: Mo
}
  , gm = e => e / 100;
class an extends To {
    constructor(t) {
        super(t),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: c} = this.options;
            c && c()
        }
        ;
        const {name: a, motionValue: n, element: i, keyframes: r} = this.options
          , o = (i == null ? void 0 : i.KeyframeResolver) || Ya
          , l = (c, u) => this.onKeyframesResolved(c, u);
        this.resolver = new o(r,l,a,n,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(t) {
        const {type: a="keyframes", repeat: n=0, repeatDelay: i=0, repeatType: r, velocity: o=0} = this.options
          , l = Qa(a) ? a : xm[a] || hs;
        let c, u;
        l !== hs && typeof t[0] != "number" && (c = Ie(gm, Ao(t[0], t[1])),
        t = [0, 100]);
        const d = l({
            ...this.options,
            keyframes: t
        });
        r === "mirror" && (u = l({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -o
        })),
        d.calculatedDuration === null && (d.calculatedDuration = pm(d));
        const {calculatedDuration: m} = d
          , h = m + i
          , g = h * (n + 1) - i;
        return {
            generator: d,
            mirroredGenerator: u,
            mapPercentToKeyframes: c,
            calculatedDuration: m,
            resolvedDuration: h,
            totalDuration: g
        }
    }
    onPostResolved() {
        const {autoplay: t=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, a=!1) {
        const {resolved: n} = this;
        if (!n) {
            const {keyframes: C} = this.options;
            return {
                done: !0,
                value: C[C.length - 1]
            }
        }
        const {finalKeyframe: i, generator: r, mirroredGenerator: o, mapPercentToKeyframes: l, keyframes: c, calculatedDuration: u, totalDuration: d, resolvedDuration: m} = n;
        if (this.startTime === null)
            return r.next(0);
        const {delay: h, repeat: g, repeatType: x, repeatDelay: w, onUpdate: b} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)),
        a ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const y = this.currentTime - h * (this.speed >= 0 ? 1 : -1)
          , p = this.speed >= 0 ? y < 0 : y > d;
        this.currentTime = Math.max(y, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = d);
        let v = this.currentTime
          , N = r;
        if (g) {
            const C = Math.min(this.currentTime, d) / m;
            let j = Math.floor(C)
              , A = C % 1;
            !A && C >= 1 && (A = 1),
            A === 1 && j--,
            j = Math.min(j, g + 1),
            !!(j % 2) && (x === "reverse" ? (A = 1 - A,
            w && (A -= w / m)) : x === "mirror" && (N = o)),
            v = ze(0, 1, A) * m
        }
        const k = p ? {
            done: !1,
            value: c[0]
        } : N.next(v);
        l && (k.value = l(k.value));
        let {done: P} = k;
        !p && u !== null && (P = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
        const D = this.holdTime === null && (this.state === "finished" || this.state === "running" && P);
        return D && i !== void 0 && (k.value = Cs(c, this.options, i)),
        b && b(k.value),
        D && this.finish(),
        k
    }
    get duration() {
        const {resolved: t} = this;
        return t ? Le(t.calculatedDuration) : 0
    }
    get time() {
        return Le(this.currentTime)
    }
    set time(t) {
        t = Ae(t),
        this.currentTime = t,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const a = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        a && (this.time = Le(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: t=fm, onPlay: a, startTime: n} = this.options;
        this.driver || (this.driver = t(r => this.tick(r))),
        a && a();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = n ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: t} = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
}
const Ro = new Set(["opacity", "clipPath", "filter", "transform"])
  , vm = 10
  , ym = (e, t) => {
    let a = "";
    const n = Math.max(Math.round(t / vm), 2);
    for (let i = 0; i < n; i++)
        a += e(st(0, n - 1, i)) + ", ";
    return `linear(${a.substring(0, a.length - 2)})`
}
;
function nn(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const bm = {
    linearEasing: void 0
};
function wm(e, t) {
    const a = nn(e);
    return () => {
        var n;
        return (n = bm[t]) !== null && n !== void 0 ? n : a()
    }
}
const ps = wm( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing");
function Bo(e) {
    return !!(typeof e == "function" && ps() || !e || typeof e == "string" && (e in wa || ps()) || tn(e) || Array.isArray(e) && e.every(Bo))
}
const Ct = ([e,t,a,n]) => `cubic-bezier(${e}, ${t}, ${a}, ${n})`
  , wa = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ct([0, .65, .55, 1]),
    circOut: Ct([.55, 0, 1, .45]),
    backIn: Ct([.31, .01, .66, -.59]),
    backOut: Ct([.33, 1.53, .69, .99])
};
function Vo(e, t) {
    if (e)
        return typeof e == "function" && ps() ? ym(e, t) : tn(e) ? Ct(e) : Array.isArray(e) ? e.map(a => Vo(a, t) || wa.easeOut) : wa[e]
}
function jm(e, t, a, {delay: n=0, duration: i=300, repeat: r=0, repeatType: o="loop", ease: l, times: c}={}) {
    const u = {
        [t]: a
    };
    c && (u.offset = c);
    const d = Vo(l, i);
    return Array.isArray(d) && (u.easing = d),
    e.animate(u, {
        delay: n,
        duration: i,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: r + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
function ci(e, t) {
    e.timeline = t,
    e.onfinish = null
}
const Nm = nn( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , fs = 10
  , km = 2e4;
function Cm(e) {
    return Qa(e.type) || e.type === "spring" || !Bo(e.ease)
}
function Sm(e, t) {
    const a = new an({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let n = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let r = 0;
    for (; !n.done && r < km; )
        n = a.sample(r),
        i.push(n.value),
        r += fs;
    return {
        times: void 0,
        keyframes: i,
        duration: r - fs,
        ease: "linear"
    }
}
const _o = {
    anticipate: ro,
    backInOut: io,
    circInOut: lo
};
function Tm(e) {
    return e in _o
}
class di extends To {
    constructor(t) {
        super(t);
        const {name: a, motionValue: n, element: i, keyframes: r} = this.options;
        this.resolver = new So(r, (o, l) => this.onKeyframesResolved(o, l),a,n,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(t, a) {
        var n;
        let {duration: i=300, times: r, ease: o, type: l, motionValue: c, name: u, startTime: d} = this.options;
        if (!(!((n = c.owner) === null || n === void 0) && n.current))
            return !1;
        if (typeof o == "string" && ps() && Tm(o) && (o = _o[o]),
        Cm(this.options)) {
            const {onComplete: h, onUpdate: g, motionValue: x, element: w, ...b} = this.options
              , y = Sm(t, b);
            t = y.keyframes,
            t.length === 1 && (t[1] = t[0]),
            i = y.duration,
            r = y.times,
            o = y.ease,
            l = "keyframes"
        }
        const m = jm(c.owner.current, u, t, {
            ...this.options,
            duration: i,
            times: r,
            ease: o
        });
        return m.startTime = d ?? this.calcStartTime(),
        this.pendingTimeline ? (ci(m, this.pendingTimeline),
        this.pendingTimeline = void 0) : m.onfinish = () => {
            const {onComplete: h} = this.options;
            c.set(Cs(t, this.options, a)),
            h && h(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: m,
            duration: i,
            times: r,
            type: l,
            ease: o,
            keyframes: t
        }
    }
    get duration() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {duration: a} = t;
        return Le(a)
    }
    get time() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {animation: a} = t;
        return Le(a.currentTime || 0)
    }
    set time(t) {
        const {resolved: a} = this;
        if (!a)
            return;
        const {animation: n} = a;
        n.currentTime = Ae(t)
    }
    get speed() {
        const {resolved: t} = this;
        if (!t)
            return 1;
        const {animation: a} = t;
        return a.playbackRate
    }
    set speed(t) {
        const {resolved: a} = this;
        if (!a)
            return;
        const {animation: n} = a;
        n.playbackRate = t
    }
    get state() {
        const {resolved: t} = this;
        if (!t)
            return "idle";
        const {animation: a} = t;
        return a.playState
    }
    get startTime() {
        const {resolved: t} = this;
        if (!t)
            return null;
        const {animation: a} = t;
        return a.startTime
    }
    attachTimeline(t) {
        if (!this._resolved)
            this.pendingTimeline = t;
        else {
            const {resolved: a} = this;
            if (!a)
                return J;
            const {animation: n} = a;
            ci(n, t)
        }
        return J
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: a} = t;
        a.playState === "finished" && this.updateFinishedPromise(),
        a.play()
    }
    pause() {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: a} = t;
        a.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: a, keyframes: n, duration: i, type: r, ease: o, times: l} = t;
        if (a.playState === "idle" || a.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: u, onUpdate: d, onComplete: m, element: h, ...g} = this.options
              , x = new an({
                ...g,
                keyframes: n,
                duration: i,
                type: r,
                ease: o,
                times: l,
                isGenerator: !0
            })
              , w = Ae(this.time);
            u.setWithVelocity(x.sample(w - fs).value, x.sample(w).value, fs)
        }
        const {onStop: c} = this.options;
        c && c(),
        this.cancel()
    }
    complete() {
        const {resolved: t} = this;
        t && t.animation.finish()
    }
    cancel() {
        const {resolved: t} = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {motionValue: a, name: n, repeatDelay: i, repeatType: r, damping: o, type: l} = t;
        return Nm() && n && Ro.has(n) && a && a.owner && a.owner.current instanceof HTMLElement && !a.owner.getProps().onUpdate && !i && r !== "mirror" && o !== 0 && l !== "inertia"
    }
}
const Oo = nn( () => window.ScrollTimeline !== void 0);
class Pm {
    constructor(t) {
        this.stop = () => this.runAll("stop"),
        this.animations = t.filter(Boolean)
    }
    then(t, a) {
        return Promise.all(this.animations).then(t).catch(a)
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, a) {
        for (let n = 0; n < this.animations.length; n++)
            this.animations[n][t] = a
    }
    attachTimeline(t, a) {
        const n = this.animations.map(i => Oo() && i.attachTimeline ? i.attachTimeline(t) : a(i));
        return () => {
            n.forEach( (i, r) => {
                i && i(),
                this.animations[r].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let a = 0; a < this.animations.length; a++)
            t = Math.max(t, this.animations[a].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(a => a[t]())
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
function Mm({when: e, delay: t, delayChildren: a, staggerChildren: n, staggerDirection: i, repeat: r, repeatType: o, repeatDelay: l, from: c, elapsed: u, ...d}) {
    return !!Object.keys(d).length
}
const rn = (e, t, a, n={}, i, r) => o => {
    const l = Wa(n, e) || {}
      , c = l.delay || n.delay || 0;
    let {elapsed: u=0} = n;
    u = u - Ae(c);
    let d = {
        keyframes: Array.isArray(a) ? a : [null, a],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: h => {
            t.set(h),
            l.onUpdate && l.onUpdate(h)
        }
        ,
        onComplete: () => {
            o(),
            l.onComplete && l.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: r ? void 0 : i
    };
    Mm(l) || (d = {
        ...d,
        ...Kd(e, d)
    }),
    d.duration && (d.duration = Ae(d.duration)),
    d.repeatDelay && (d.repeatDelay = Ae(d.repeatDelay)),
    d.from !== void 0 && (d.keyframes[0] = d.from);
    let m = !1;
    if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0,
    d.delay === 0 && (m = !0)),
    m && !r && t.get() !== void 0) {
        const h = Cs(d.keyframes, l);
        if (h !== void 0)
            return z.update( () => {
                d.onUpdate(h),
                d.onComplete()
            }
            ),
            new Pm([])
    }
    return !r && di.supports(d) ? new di(d) : new an(d)
}
  , Em = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , Dm = e => pa(e) ? e[e.length - 1] || 0 : e;
function on(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function ln(e, t) {
    const a = e.indexOf(t);
    a > -1 && e.splice(a, 1)
}
class cn {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return on(this.subscriptions, t),
        () => ln(this.subscriptions, t)
    }
    notify(t, a, n) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, a, n);
            else
                for (let r = 0; r < i; r++) {
                    const o = this.subscriptions[r];
                    o && o(t, a, n)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const ui = 30
  , Am = e => !isNaN(parseFloat(e));
class Lm {
    constructor(t, a={}) {
        this.version = "11.11.9",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (n, i=!0) => {
            const r = je.now();
            this.updatedAt !== r && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(n),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = a.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = je.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Am(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, a) {
        this.events[t] || (this.events[t] = new cn);
        const n = this.events[t].add(a);
        return t === "change" ? () => {
            n(),
            z.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : n
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, a) {
        this.passiveEffect = t,
        this.stopPassiveEffect = a
    }
    set(t, a=!0) {
        !a || !this.passiveEffect ? this.updateAndNotify(t, a) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, a, n) {
        this.set(a),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - n
    }
    jump(t, a=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        a && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = je.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > ui)
            return 0;
        const a = Math.min(this.updatedAt - this.prevUpdatedAt, ui);
        return en(parseFloat(this.current) - parseFloat(this.prevFrameValue), a)
    }
    start(t) {
        return this.stop(),
        new Promise(a => {
            this.hasAnimated = !0,
            this.animation = t(a),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Ee(e, t) {
    return new Lm(e,t)
}
function Im(e, t, a) {
    e.hasValue(t) ? e.getValue(t).set(a) : e.addValue(t, Ee(a))
}
function Rm(e, t) {
    const a = ks(e, t);
    let {transitionEnd: n={}, transition: i={}, ...r} = a || {};
    r = {
        ...r,
        ...n
    };
    for (const o in r) {
        const l = Dm(r[o]);
        Im(e, o, l)
    }
}
const Ss = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , Bm = "framerAppearId"
  , zo = "data-" + Ss(Bm);
function Fo(e) {
    return e.props[zo]
}
const te = e => !!(e && e.getVelocity);
function Vm(e) {
    return !!(te(e) && e.add)
}
function ja(e, t) {
    if (!e.applyWillChange)
        return;
    const a = e.getValue("willChange");
    if (Vm(a))
        return a.add(t)
}
function _m({protectedKeys: e, needsAnimating: t}, a) {
    const n = e.hasOwnProperty(a) && t[a] !== !0;
    return t[a] = !1,
    n
}
function $o(e, t, {delay: a=0, transitionOverride: n, type: i}={}) {
    var r;
    let {transition: o=e.getDefaultTransition(), transitionEnd: l, ...c} = t;
    n && (o = n);
    const u = []
      , d = i && e.animationState && e.animationState.getState()[i];
    for (const m in c) {
        const h = e.getValue(m, (r = e.latestValues[m]) !== null && r !== void 0 ? r : null)
          , g = c[m];
        if (g === void 0 || d && _m(d, m))
            continue;
        const x = {
            delay: a,
            ...Wa(o || {}, m)
        };
        let w = !1;
        if (window.MotionHandoffAnimation) {
            const y = Fo(e);
            if (y) {
                const p = window.MotionHandoffAnimation(y, m, z);
                p !== null && (x.startTime = p,
                w = !0)
            }
        }
        ja(e, m),
        h.start(rn(m, h, g, e.shouldReduceMotion && Ge.has(m) ? {
            type: !1
        } : x, e, w));
        const b = h.animation;
        b && u.push(b)
    }
    return l && Promise.all(u).then( () => {
        z.update( () => {
            l && Rm(e, l)
        }
        )
    }
    ),
    u
}
function Na(e, t, a={}) {
    var n;
    const i = ks(e, t, a.type === "exit" ? (n = e.presenceContext) === null || n === void 0 ? void 0 : n.custom : void 0);
    let {transition: r=e.getDefaultTransition() || {}} = i || {};
    a.transitionOverride && (r = a.transitionOverride);
    const o = i ? () => Promise.all($o(e, i, a)) : () => Promise.resolve()
      , l = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: d=0, staggerChildren: m, staggerDirection: h} = r;
        return Om(e, t, d + u, m, h, a)
    }
    : () => Promise.resolve()
      , {when: c} = r;
    if (c) {
        const [u,d] = c === "beforeChildren" ? [o, l] : [l, o];
        return u().then( () => d())
    } else
        return Promise.all([o(), l(a.delay)])
}
function Om(e, t, a=0, n=0, i=1, r) {
    const o = []
      , l = (e.variantChildren.size - 1) * n
      , c = i === 1 ? (u=0) => u * n : (u=0) => l - u * n;
    return Array.from(e.variantChildren).sort(zm).forEach( (u, d) => {
        u.notify("AnimationStart", t),
        o.push(Na(u, t, {
            ...r,
            delay: a + c(d)
        }).then( () => u.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(o)
}
function zm(e, t) {
    return e.sortNodePosition(t)
}
function Fm(e, t, a={}) {
    e.notify("AnimationStart", t);
    let n;
    if (Array.isArray(t)) {
        const i = t.map(r => Na(e, r, a));
        n = Promise.all(i)
    } else if (typeof t == "string")
        n = Na(e, t, a);
    else {
        const i = typeof t == "function" ? ks(e, t, a.custom) : t;
        n = Promise.all($o(e, i, a))
    }
    return n.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const $m = Ha.length;
function Ho(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const a = e.parent ? Ho(e.parent) || {} : {};
        return e.props.initial !== void 0 && (a.initial = e.props.initial),
        a
    }
    const t = {};
    for (let a = 0; a < $m; a++) {
        const n = Ha[a]
          , i = e.props[n];
        (Rt(i) || i === !1) && (t[n] = i)
    }
    return t
}
const Hm = [...$a].reverse()
  , Wm = $a.length;
function Gm(e) {
    return t => Promise.all(t.map( ({animation: a, options: n}) => Fm(e, a, n)))
}
function Um(e) {
    let t = Gm(e)
      , a = mi()
      , n = !0;
    const i = c => (u, d) => {
        var m;
        const h = ks(e, d, c === "exit" ? (m = e.presenceContext) === null || m === void 0 ? void 0 : m.custom : void 0);
        if (h) {
            const {transition: g, transitionEnd: x, ...w} = h;
            u = {
                ...u,
                ...w,
                ...x
            }
        }
        return u
    }
    ;
    function r(c) {
        t = c(e)
    }
    function o(c) {
        const {props: u} = e
          , d = Ho(e.parent) || {}
          , m = []
          , h = new Set;
        let g = {}
          , x = 1 / 0;
        for (let b = 0; b < Wm; b++) {
            const y = Hm[b]
              , p = a[y]
              , v = u[y] !== void 0 ? u[y] : d[y]
              , N = Rt(v)
              , k = y === c ? p.isActive : null;
            k === !1 && (x = b);
            let P = v === d[y] && v !== u[y] && N;
            if (P && n && e.manuallyAnimateOnMount && (P = !1),
            p.protectedKeys = {
                ...g
            },
            !p.isActive && k === null || !v && !p.prevProp || It(v) || typeof v == "boolean")
                continue;
            const D = qm(p.prevProp, v);
            let C = D || y === c && p.isActive && !P && N || b > x && N
              , j = !1;
            const A = Array.isArray(v) ? v : [v];
            let M = A.reduce(i(y), {});
            k === !1 && (M = {});
            const {prevResolvedValues: _={}} = p
              , B = {
                ..._,
                ...M
            }
              , O = S => {
                C = !0,
                h.has(S) && (j = !0,
                h.delete(S)),
                p.needsAnimating[S] = !0;
                const T = e.getValue(S);
                T && (T.liveStyle = !1)
            }
            ;
            for (const S in B) {
                const T = M[S]
                  , W = _[S];
                if (g.hasOwnProperty(S))
                    continue;
                let q = !1;
                pa(T) && pa(W) ? q = !Qr(T, W) : q = T !== W,
                q ? T != null ? O(S) : h.add(S) : T !== void 0 && h.has(S) ? O(S) : p.protectedKeys[S] = !0
            }
            p.prevProp = v,
            p.prevResolvedValues = M,
            p.isActive && (g = {
                ...g,
                ...M
            }),
            n && e.blockInitialAnimation && (C = !1),
            C && (!(P && D) || j) && m.push(...A.map(S => ({
                animation: S,
                options: {
                    type: y
                }
            })))
        }
        if (h.size) {
            const b = {};
            h.forEach(y => {
                const p = e.getBaseTarget(y)
                  , v = e.getValue(y);
                v && (v.liveStyle = !0),
                b[y] = p ?? null
            }
            ),
            m.push({
                animation: b
            })
        }
        let w = !!m.length;
        return n && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (w = !1),
        n = !1,
        w ? t(m) : Promise.resolve()
    }
    function l(c, u) {
        var d;
        if (a[c].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(h => {
            var g;
            return (g = h.animationState) === null || g === void 0 ? void 0 : g.setActive(c, u)
        }
        ),
        a[c].isActive = u;
        const m = o(c);
        for (const h in a)
            a[h].protectedKeys = {};
        return m
    }
    return {
        animateChanges: o,
        setActive: l,
        setAnimateFunction: r,
        getState: () => a,
        reset: () => {
            a = mi(),
            n = !0
        }
    }
}
function qm(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Qr(t, e) : !1
}
function Ye(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function mi() {
    return {
        animate: Ye(!0),
        whileInView: Ye(),
        whileHover: Ye(),
        whileTap: Ye(),
        whileDrag: Ye(),
        whileFocus: Ye(),
        exit: Ye()
    }
}
class Ue {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
class Ym extends Ue {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = Um(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        It(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: a} = this.node.prevProps || {};
        t !== a && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let Km = 0;
class Xm extends Ue {
    constructor() {
        super(...arguments),
        this.id = Km++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: a} = this.node.presenceContext
          , {isPresent: n} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === n)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        a && !t && i.then( () => a(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const Zm = {
    animation: {
        Feature: Ym
    },
    exit: {
        Feature: Xm
    }
}
  , Wo = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Ts(e, t="page") {
    return {
        point: {
            x: e[`${t}X`],
            y: e[`${t}Y`]
        }
    }
}
const Jm = e => t => Wo(t) && e(t, Ts(t));
function De(e, t, a, n={
    passive: !0
}) {
    return e.addEventListener(t, a, n),
    () => e.removeEventListener(t, a)
}
function Re(e, t, a, n) {
    return De(e, t, Jm(a), n)
}
const hi = (e, t) => Math.abs(e - t);
function Qm(e, t) {
    const a = hi(e.x, t.x)
      , n = hi(e.y, t.y);
    return Math.sqrt(a ** 2 + n ** 2)
}
class Go {
    constructor(t, a, {transformPagePoint: n, contextWindow: i, dragSnapToOrigin: r=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const m = qs(this.lastMoveEventInfo, this.history)
              , h = this.startEvent !== null
              , g = Qm(m.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!h && !g)
                return;
            const {point: x} = m
              , {timestamp: w} = Z;
            this.history.push({
                ...x,
                timestamp: w
            });
            const {onStart: b, onMove: y} = this.handlers;
            h || (b && b(this.lastMoveEvent, m),
            this.startEvent = this.lastMoveEvent),
            y && y(this.lastMoveEvent, m)
        }
        ,
        this.handlePointerMove = (m, h) => {
            this.lastMoveEvent = m,
            this.lastMoveEventInfo = Us(h, this.transformPagePoint),
            z.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (m, h) => {
            this.end();
            const {onEnd: g, onSessionEnd: x, resumeAnimation: w} = this.handlers;
            if (this.dragSnapToOrigin && w && w(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const b = qs(m.type === "pointercancel" ? this.lastMoveEventInfo : Us(h, this.transformPagePoint), this.history);
            this.startEvent && g && g(m, b),
            x && x(m, b)
        }
        ,
        !Wo(t))
            return;
        this.dragSnapToOrigin = r,
        this.handlers = a,
        this.transformPagePoint = n,
        this.contextWindow = i || window;
        const o = Ts(t)
          , l = Us(o, this.transformPagePoint)
          , {point: c} = l
          , {timestamp: u} = Z;
        this.history = [{
            ...c,
            timestamp: u
        }];
        const {onSessionStart: d} = a;
        d && d(t, qs(l, this.history)),
        this.removeListeners = Ie(Re(this.contextWindow, "pointermove", this.handlePointerMove), Re(this.contextWindow, "pointerup", this.handlePointerUp), Re(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        ke(this.updatePoint)
    }
}
function Us(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function pi(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function qs({point: e}, t) {
    return {
        point: e,
        delta: pi(e, Uo(t)),
        offset: pi(e, eh(t)),
        velocity: th(t, .1)
    }
}
function eh(e) {
    return e[0]
}
function Uo(e) {
    return e[e.length - 1]
}
function th(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let a = e.length - 1
      , n = null;
    const i = Uo(e);
    for (; a >= 0 && (n = e[a],
    !(i.timestamp - n.timestamp > Ae(t))); )
        a--;
    if (!n)
        return {
            x: 0,
            y: 0
        };
    const r = Le(i.timestamp - n.timestamp);
    if (r === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - n.x) / r,
        y: (i.y - n.y) / r
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
function qo(e) {
    let t = null;
    return () => {
        const a = () => {
            t = null
        }
        ;
        return t === null ? (t = e,
        a) : !1
    }
}
const fi = qo("dragHorizontal")
  , xi = qo("dragVertical");
function Yo(e) {
    let t = !1;
    if (e === "y")
        t = xi();
    else if (e === "x")
        t = fi();
    else {
        const a = fi()
          , n = xi();
        a && n ? t = () => {
            a(),
            n()
        }
        : (a && a(),
        n && n())
    }
    return t
}
function Ko() {
    const e = Yo(!0);
    return e ? (e(),
    !1) : !0
}
function lt(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
const Xo = 1e-4
  , sh = 1 - Xo
  , ah = 1 + Xo
  , Zo = .01
  , nh = 0 - Zo
  , ih = 0 + Zo;
function de(e) {
    return e.max - e.min
}
function rh(e, t, a) {
    return Math.abs(e - t) <= a
}
function gi(e, t, a, n=.5) {
    e.origin = n,
    e.originPoint = Y(t.min, t.max, e.origin),
    e.scale = de(a) / de(t),
    e.translate = Y(a.min, a.max, e.origin) - e.originPoint,
    (e.scale >= sh && e.scale <= ah || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= nh && e.translate <= ih || isNaN(e.translate)) && (e.translate = 0)
}
function Pt(e, t, a, n) {
    gi(e.x, t.x, a.x, n ? n.originX : void 0),
    gi(e.y, t.y, a.y, n ? n.originY : void 0)
}
function vi(e, t, a) {
    e.min = a.min + t.min,
    e.max = e.min + de(t)
}
function oh(e, t, a) {
    vi(e.x, t.x, a.x),
    vi(e.y, t.y, a.y)
}
function yi(e, t, a) {
    e.min = t.min - a.min,
    e.max = e.min + de(t)
}
function Mt(e, t, a) {
    yi(e.x, t.x, a.x),
    yi(e.y, t.y, a.y)
}
function lh(e, {min: t, max: a}, n) {
    return t !== void 0 && e < t ? e = n ? Y(t, e, n.min) : Math.max(e, t) : a !== void 0 && e > a && (e = n ? Y(a, e, n.max) : Math.min(e, a)),
    e
}
function bi(e, t, a) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: a !== void 0 ? e.max + a - (e.max - e.min) : void 0
    }
}
function ch(e, {top: t, left: a, bottom: n, right: i}) {
    return {
        x: bi(e.x, a, i),
        y: bi(e.y, t, n)
    }
}
function wi(e, t) {
    let a = t.min - e.min
      , n = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([a,n] = [n, a]),
    {
        min: a,
        max: n
    }
}
function dh(e, t) {
    return {
        x: wi(e.x, t.x),
        y: wi(e.y, t.y)
    }
}
function uh(e, t) {
    let a = .5;
    const n = de(e)
      , i = de(t);
    return i > n ? a = st(t.min, t.max - n, e.min) : n > i && (a = st(e.min, e.max - i, t.min)),
    ze(0, 1, a)
}
function mh(e, t) {
    const a = {};
    return t.min !== void 0 && (a.min = t.min - e.min),
    t.max !== void 0 && (a.max = t.max - e.min),
    a
}
const ka = .35;
function hh(e=ka) {
    return e === !1 ? e = 0 : e === !0 && (e = ka),
    {
        x: ji(e, "left", "right"),
        y: ji(e, "top", "bottom")
    }
}
function ji(e, t, a) {
    return {
        min: Ni(e, t),
        max: Ni(e, a)
    }
}
function Ni(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const ki = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , ct = () => ({
    x: ki(),
    y: ki()
})
  , Ci = () => ({
    min: 0,
    max: 0
})
  , K = () => ({
    x: Ci(),
    y: Ci()
});
function he(e) {
    return [e("x"), e("y")]
}
function Jo({top: e, left: t, right: a, bottom: n}) {
    return {
        x: {
            min: t,
            max: a
        },
        y: {
            min: e,
            max: n
        }
    }
}
function ph({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function fh(e, t) {
    if (!t)
        return e;
    const a = t({
        x: e.left,
        y: e.top
    })
      , n = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: a.y,
        left: a.x,
        bottom: n.y,
        right: n.x
    }
}
function Ys(e) {
    return e === void 0 || e === 1
}
function Ca({scale: e, scaleX: t, scaleY: a}) {
    return !Ys(e) || !Ys(t) || !Ys(a)
}
function Xe(e) {
    return Ca(e) || Qo(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function Qo(e) {
    return Si(e.x) || Si(e.y)
}
function Si(e) {
    return e && e !== "0%"
}
function xs(e, t, a) {
    const n = e - a
      , i = t * n;
    return a + i
}
function Ti(e, t, a, n, i) {
    return i !== void 0 && (e = xs(e, i, n)),
    xs(e, a, n) + t
}
function Sa(e, t=0, a=1, n, i) {
    e.min = Ti(e.min, t, a, n, i),
    e.max = Ti(e.max, t, a, n, i)
}
function el(e, {x: t, y: a}) {
    Sa(e.x, t.translate, t.scale, t.originPoint),
    Sa(e.y, a.translate, a.scale, a.originPoint)
}
const Pi = .999999999999
  , Mi = 1.0000000000001;
function xh(e, t, a, n=!1) {
    const i = a.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let r, o;
    for (let l = 0; l < i; l++) {
        r = a[l],
        o = r.projectionDelta;
        const {visualElement: c} = r.options;
        c && c.props.style && c.props.style.display === "contents" || (n && r.options.layoutScroll && r.scroll && r !== r.root && ut(e, {
            x: -r.scroll.offset.x,
            y: -r.scroll.offset.y
        }),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        el(e, o)),
        n && Xe(r.latestValues) && ut(e, r.latestValues))
    }
    t.x < Mi && t.x > Pi && (t.x = 1),
    t.y < Mi && t.y > Pi && (t.y = 1)
}
function dt(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function Ei(e, t, a, n, i=.5) {
    const r = Y(e.min, e.max, i);
    Sa(e, t, a, r, n)
}
function ut(e, t) {
    Ei(e.x, t.x, t.scaleX, t.scale, t.originX),
    Ei(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function tl(e, t) {
    return Jo(fh(e.getBoundingClientRect(), t))
}
function gh(e, t, a) {
    const n = tl(e, a)
      , {scroll: i} = t;
    return i && (dt(n.x, i.offset.x),
    dt(n.y, i.offset.y)),
    n
}
const sl = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , vh = new WeakMap;
class yh {
    constructor(t) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = K(),
        this.visualElement = t
    }
    start(t, {snapToCursor: a=!1}={}) {
        const {presenceContext: n} = this.visualElement;
        if (n && n.isPresent === !1)
            return;
        const i = d => {
            const {dragSnapToOrigin: m} = this.getProps();
            m ? this.pauseAnimation() : this.stopAnimation(),
            a && this.snapToCursor(Ts(d, "page").point)
        }
          , r = (d, m) => {
            const {drag: h, dragPropagation: g, onDragStart: x} = this.getProps();
            if (h && !g && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = Yo(h),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            he(b => {
                let y = this.getAxisMotionValue(b).get() || 0;
                if (we.test(y)) {
                    const {projection: p} = this.visualElement;
                    if (p && p.layout) {
                        const v = p.layout.layoutBox[b];
                        v && (y = de(v) * (parseFloat(y) / 100))
                    }
                }
                this.originPoint[b] = y
            }
            ),
            x && z.postRender( () => x(d, m)),
            ja(this.visualElement, "transform");
            const {animationState: w} = this.visualElement;
            w && w.setActive("whileDrag", !0)
        }
          , o = (d, m) => {
            const {dragPropagation: h, dragDirectionLock: g, onDirectionLock: x, onDrag: w} = this.getProps();
            if (!h && !this.openGlobalLock)
                return;
            const {offset: b} = m;
            if (g && this.currentDirection === null) {
                this.currentDirection = bh(b),
                this.currentDirection !== null && x && x(this.currentDirection);
                return
            }
            this.updateAxis("x", m.point, b),
            this.updateAxis("y", m.point, b),
            this.visualElement.render(),
            w && w(d, m)
        }
          , l = (d, m) => this.stop(d, m)
          , c = () => he(d => {
            var m;
            return this.getAnimationState(d) === "paused" && ((m = this.getAxisMotionValue(d).animation) === null || m === void 0 ? void 0 : m.play())
        }
        )
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new Go(t,{
            onSessionStart: i,
            onStart: r,
            onMove: o,
            onSessionEnd: l,
            resumeAnimation: c
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: sl(this.visualElement)
        })
    }
    stop(t, a) {
        const n = this.isDragging;
        if (this.cancel(),
        !n)
            return;
        const {velocity: i} = a;
        this.startAnimation(i);
        const {onDragEnd: r} = this.getProps();
        r && z.postRender( () => r(t, a))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: a} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: n} = this.getProps();
        !n && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        a && a.setActive("whileDrag", !1)
    }
    updateAxis(t, a, n) {
        const {drag: i} = this.getProps();
        if (!n || !Zt(t, i, this.currentDirection))
            return;
        const r = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + n[t];
        this.constraints && this.constraints[t] && (o = lh(o, this.constraints[t], this.elastic[t])),
        r.set(o)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: a, dragElastic: n} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , r = this.constraints;
        a && lt(a) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : a && i ? this.constraints = ch(i.layoutBox, a) : this.constraints = !1,
        this.elastic = hh(n),
        r !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && he(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = mh(i.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: a} = this.getProps();
        if (!t || !lt(t))
            return !1;
        const n = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const r = gh(n, i.root, this.visualElement.getTransformPagePoint());
        let o = dh(i.layout.layoutBox, r);
        if (a) {
            const l = a(ph(o));
            this.hasMutatedConstraints = !!l,
            l && (o = Jo(l))
        }
        return o
    }
    startAnimation(t) {
        const {drag: a, dragMomentum: n, dragElastic: i, dragTransition: r, dragSnapToOrigin: o, onDragTransitionEnd: l} = this.getProps()
          , c = this.constraints || {}
          , u = he(d => {
            if (!Zt(d, a, this.currentDirection))
                return;
            let m = c && c[d] || {};
            o && (m = {
                min: 0,
                max: 0
            });
            const h = i ? 200 : 1e6
              , g = i ? 40 : 1e7
              , x = {
                type: "inertia",
                velocity: n ? t[d] : 0,
                bounceStiffness: h,
                bounceDamping: g,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...m
            };
            return this.startAxisValueAnimation(d, x)
        }
        );
        return Promise.all(u).then(l)
    }
    startAxisValueAnimation(t, a) {
        const n = this.getAxisMotionValue(t);
        return ja(this.visualElement, t),
        n.start(rn(t, n, 0, a, this.visualElement, !1))
    }
    stopAnimation() {
        he(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        he(t => {
            var a;
            return (a = this.getAxisMotionValue(t).animation) === null || a === void 0 ? void 0 : a.pause()
        }
        )
    }
    getAnimationState(t) {
        var a;
        return (a = this.getAxisMotionValue(t).animation) === null || a === void 0 ? void 0 : a.state
    }
    getAxisMotionValue(t) {
        const a = `_drag${t.toUpperCase()}`
          , n = this.visualElement.getProps()
          , i = n[a];
        return i || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        he(a => {
            const {drag: n} = this.getProps();
            if (!Zt(a, n, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , r = this.getAxisMotionValue(a);
            if (i && i.layout) {
                const {min: o, max: l} = i.layout.layoutBox[a];
                r.set(t[a] - Y(o, l, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: a} = this.getProps()
          , {projection: n} = this.visualElement;
        if (!lt(a) || !n || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        he(o => {
            const l = this.getAxisMotionValue(o);
            if (l && this.constraints !== !1) {
                const c = l.get();
                i[o] = uh({
                    min: c,
                    max: c
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: r} = this.visualElement.getProps();
        this.visualElement.current.style.transform = r ? r({}, "") : "none",
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        he(o => {
            if (!Zt(o, t, null))
                return;
            const l = this.getAxisMotionValue(o)
              , {min: c, max: u} = this.constraints[o];
            l.set(Y(c, u, i[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        vh.set(this.visualElement, this);
        const t = this.visualElement.current
          , a = Re(t, "pointerdown", c => {
            const {drag: u, dragListener: d=!0} = this.getProps();
            u && d && this.start(c)
        }
        )
          , n = () => {
            const {dragConstraints: c} = this.getProps();
            lt(c) && c.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , r = i.addEventListener("measure", n);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        z.read(n);
        const o = De(window, "resize", () => this.scalePositionWithinConstraints())
          , l = i.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: u}) => {
            this.isDragging && u && (he(d => {
                const m = this.getAxisMotionValue(d);
                m && (this.originPoint[d] += c[d].translate,
                m.set(m.get() + c[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            o(),
            a(),
            r(),
            l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: a=!1, dragDirectionLock: n=!1, dragPropagation: i=!1, dragConstraints: r=!1, dragElastic: o=ka, dragMomentum: l=!0} = t;
        return {
            ...t,
            drag: a,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: r,
            dragElastic: o,
            dragMomentum: l
        }
    }
}
function Zt(e, t, a) {
    return (t === !0 || t === e) && (a === null || a === e)
}
function bh(e, t=10) {
    let a = null;
    return Math.abs(e.y) > t ? a = "y" : Math.abs(e.x) > t && (a = "x"),
    a
}
class wh extends Ue {
    constructor(t) {
        super(t),
        this.removeGroupControls = J,
        this.removeListeners = J,
        this.controls = new yh(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || J
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const Di = e => (t, a) => {
    e && z.postRender( () => e(t, a))
}
;
class jh extends Ue {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = J
    }
    onPointerDown(t) {
        this.session = new Go(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: sl(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: a, onPan: n, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: Di(t),
            onStart: Di(a),
            onMove: n,
            onEnd: (r, o) => {
                delete this.session,
                i && z.postRender( () => i(r, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Re(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Ps = f.createContext(null);
function Nh() {
    const e = f.useContext(Ps);
    if (e === null)
        return [!0, null];
    const {isPresent: t, onExitComplete: a, register: n} = e
      , i = f.useId();
    f.useEffect( () => n(i), []);
    const r = f.useCallback( () => a && a(i), [i, a]);
    return !t && a ? [!1, r] : [!0]
}
const dn = f.createContext({})
  , al = f.createContext({})
  , is = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Ai(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const jt = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (L.test(e))
                e = parseFloat(e);
            else
                return e;
        const a = Ai(e, t.target.x)
          , n = Ai(e, t.target.y);
        return `${a}% ${n}%`
    }
}
  , kh = {
    correct: (e, {treeScale: t, projectionDelta: a}) => {
        const n = e
          , i = Fe.parse(e);
        if (i.length > 5)
            return n;
        const r = Fe.createTransformer(e)
          , o = typeof i[0] != "number" ? 1 : 0
          , l = a.x.scale * t.x
          , c = a.y.scale * t.y;
        i[0 + o] /= l,
        i[1 + o] /= c;
        const u = Y(l, c, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        r(i)
    }
}
  , gs = {};
function Ch(e) {
    Object.assign(gs, e)
}
const {schedule: un} = eo(queueMicrotask, !1);
class Sh extends f.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: a, switchLayoutGroup: n, layoutId: i} = this.props
          , {projection: r} = t;
        Ch(Th),
        r && (a.group && a.group.add(r),
        n && n.register && i && n.register(r),
        r.root.didUpdate(),
        r.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        r.setOptions({
            ...r.options,
            onExitComplete: () => this.safeToRemove()
        })),
        is.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: a, visualElement: n, drag: i, isPresent: r} = this.props
          , o = n.projection;
        return o && (o.isPresent = r,
        i || t.layoutDependency !== a || a === void 0 ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== r && (r ? o.promote() : o.relegate() || z.postRender( () => {
            const l = o.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        un.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: a, switchLayoutGroup: n} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        a && a.group && a.group.remove(i),
        n && n.deregister && n.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function nl(e) {
    const [t,a] = Nh()
      , n = f.useContext(dn);
    return s.jsx(Sh, {
        ...e,
        layoutGroup: n,
        switchLayoutGroup: f.useContext(al),
        isPresent: t,
        safeToRemove: a
    })
}
const Th = {
    borderRadius: {
        ...jt,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: jt,
    borderTopRightRadius: jt,
    borderBottomLeftRadius: jt,
    borderBottomRightRadius: jt,
    boxShadow: kh
}
  , il = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , Ph = il.length
  , Li = e => typeof e == "string" ? parseFloat(e) : e
  , Ii = e => typeof e == "number" || L.test(e);
function Mh(e, t, a, n, i, r) {
    i ? (e.opacity = Y(0, a.opacity !== void 0 ? a.opacity : 1, Eh(n)),
    e.opacityExit = Y(t.opacity !== void 0 ? t.opacity : 1, 0, Dh(n))) : r && (e.opacity = Y(t.opacity !== void 0 ? t.opacity : 1, a.opacity !== void 0 ? a.opacity : 1, n));
    for (let o = 0; o < Ph; o++) {
        const l = `border${il[o]}Radius`;
        let c = Ri(t, l)
          , u = Ri(a, l);
        if (c === void 0 && u === void 0)
            continue;
        c || (c = 0),
        u || (u = 0),
        c === 0 || u === 0 || Ii(c) === Ii(u) ? (e[l] = Math.max(Y(Li(c), Li(u), n), 0),
        (we.test(u) || we.test(c)) && (e[l] += "%")) : e[l] = u
    }
    (t.rotate || a.rotate) && (e.rotate = Y(t.rotate || 0, a.rotate || 0, n))
}
function Ri(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const Eh = rl(0, .5, oo)
  , Dh = rl(.5, .95, J);
function rl(e, t, a) {
    return n => n < e ? 0 : n > t ? 1 : a(st(e, t, n))
}
function Bi(e, t) {
    e.min = t.min,
    e.max = t.max
}
function me(e, t) {
    Bi(e.x, t.x),
    Bi(e.y, t.y)
}
function Vi(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function _i(e, t, a, n, i) {
    return e -= t,
    e = xs(e, 1 / a, n),
    i !== void 0 && (e = xs(e, 1 / i, n)),
    e
}
function Ah(e, t=0, a=1, n=.5, i, r=e, o=e) {
    if (we.test(t) && (t = parseFloat(t),
    t = Y(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let l = Y(r.min, r.max, n);
    e === r && (l -= t),
    e.min = _i(e.min, t, a, l, i),
    e.max = _i(e.max, t, a, l, i)
}
function Oi(e, t, [a,n,i], r, o) {
    Ah(e, t[a], t[n], t[i], t.scale, r, o)
}
const Lh = ["x", "scaleX", "originX"]
  , Ih = ["y", "scaleY", "originY"];
function zi(e, t, a, n) {
    Oi(e.x, t, Lh, a ? a.x : void 0, n ? n.x : void 0),
    Oi(e.y, t, Ih, a ? a.y : void 0, n ? n.y : void 0)
}
function Fi(e) {
    return e.translate === 0 && e.scale === 1
}
function ol(e) {
    return Fi(e.x) && Fi(e.y)
}
function $i(e, t) {
    return e.min === t.min && e.max === t.max
}
function Rh(e, t) {
    return $i(e.x, t.x) && $i(e.y, t.y)
}
function Hi(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function ll(e, t) {
    return Hi(e.x, t.x) && Hi(e.y, t.y)
}
function Wi(e) {
    return de(e.x) / de(e.y)
}
function Gi(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class Bh {
    constructor() {
        this.members = []
    }
    add(t) {
        on(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (ln(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const a = this.members[this.members.length - 1];
            a && this.promote(a)
        }
    }
    relegate(t) {
        const a = this.members.findIndex(i => t === i);
        if (a === 0)
            return !1;
        let n;
        for (let i = a; i >= 0; i--) {
            const r = this.members[i];
            if (r.isPresent !== !1) {
                n = r;
                break
            }
        }
        return n ? (this.promote(n),
        !0) : !1
    }
    promote(t, a) {
        const n = this.lead;
        if (t !== n && (this.prevLead = n,
        this.lead = t,
        t.show(),
        n)) {
            n.instance && n.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = n,
            a && (t.resumeFrom.preserveOpacity = !0),
            n.snapshot && (t.snapshot = n.snapshot,
            t.snapshot.latestValues = n.animationValues || n.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && n.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: a, resumingFrom: n} = t;
            a.onExitComplete && a.onExitComplete(),
            n && n.options.onExitComplete && n.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function Vh(e, t, a) {
    let n = "";
    const i = e.x.translate / t.x
      , r = e.y.translate / t.y
      , o = (a == null ? void 0 : a.z) || 0;
    if ((i || r || o) && (n = `translate3d(${i}px, ${r}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
    a) {
        const {transformPerspective: u, rotate: d, rotateX: m, rotateY: h, skewX: g, skewY: x} = a;
        u && (n = `perspective(${u}px) ${n}`),
        d && (n += `rotate(${d}deg) `),
        m && (n += `rotateX(${m}deg) `),
        h && (n += `rotateY(${h}deg) `),
        g && (n += `skewX(${g}deg) `),
        x && (n += `skewY(${x}deg) `)
    }
    const l = e.x.scale * t.x
      , c = e.y.scale * t.y;
    return (l !== 1 || c !== 1) && (n += `scale(${l}, ${c})`),
    n || "none"
}
const _h = (e, t) => e.depth - t.depth;
class Oh {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        on(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        ln(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(_h),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function rs(e) {
    const t = te(e) ? e.get() : e;
    return Em(t) ? t.toValue() : t
}
function zh(e, t) {
    const a = je.now()
      , n = ({timestamp: i}) => {
        const r = i - a;
        r >= t && (ke(n),
        e(r - t))
    }
    ;
    return z.read(n, !0),
    () => ke(n)
}
function Fh(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function $h(e, t, a) {
    const n = te(e) ? e : Ee(e);
    return n.start(rn("", n, t, a)),
    n.animation
}
const Ze = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , St = typeof window < "u" && window.MotionDebug !== void 0
  , Ks = ["", "X", "Y", "Z"]
  , Hh = {
    visibility: "hidden"
}
  , Ui = 1e3;
let Wh = 0;
function Xs(e, t, a, n) {
    const {latestValues: i} = t;
    i[e] && (a[e] = i[e],
    t.setStaticValue(e, 0),
    n && (n[e] = 0))
}
function cl(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const a = Fo(t);
    if (window.MotionHasOptimisedAnimation(a, "transform")) {
        const {layout: i, layoutId: r} = e.options;
        window.MotionCancelOptimisedAnimation(a, "transform", z, !(i || r))
    }
    const {parent: n} = e;
    n && !n.hasCheckedOptimisedAppear && cl(n)
}
function dl({attachResizeListener: e, defaultParent: t, measureScroll: a, checkIsScrollRoot: n, resetTransform: i}) {
    return class {
        constructor(o={}, l=t == null ? void 0 : t()) {
            this.id = Wh++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                St && (Ze.totalNodes = Ze.resolvedTargetDeltas = Ze.recalculatedProjection = 0),
                this.nodes.forEach(qh),
                this.nodes.forEach(Jh),
                this.nodes.forEach(Qh),
                this.nodes.forEach(Yh),
                St && window.MotionDebug.record(Ze)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = l ? l.root || l : this,
            this.path = l ? [...l.path, l] : [],
            this.parent = l,
            this.depth = l ? l.depth + 1 : 0;
            for (let c = 0; c < this.path.length; c++)
                this.path[c].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Oh)
        }
        addEventListener(o, l) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new cn),
            this.eventHandlers.get(o).add(l)
        }
        notifyListeners(o, ...l) {
            const c = this.eventHandlers.get(o);
            c && c.notify(...l)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, l=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = Fh(o),
            this.instance = o;
            const {layoutId: c, layout: u, visualElement: d} = this.options;
            if (d && !d.current && d.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            l && (u || c) && (this.isLayoutDirty = !0),
            e) {
                let m;
                const h = () => this.root.updateBlockedByResize = !1;
                e(o, () => {
                    this.root.updateBlockedByResize = !0,
                    m && m(),
                    m = zh(h, 250),
                    is.hasAnimatedSinceResize && (is.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Yi))
                }
                )
            }
            c && this.root.registerSharedNode(c, this),
            this.options.animate !== !1 && d && (c || u) && this.addEventListener("didUpdate", ({delta: m, hasLayoutChanged: h, hasRelativeTargetChanged: g, layout: x}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const w = this.options.transition || d.getDefaultTransition() || np
                  , {onLayoutAnimationStart: b, onLayoutAnimationComplete: y} = d.getProps()
                  , p = !this.targetLayout || !ll(this.targetLayout, x) || g
                  , v = !h && g;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || h && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(m, v);
                    const N = {
                        ...Wa(w, "layout"),
                        onPlay: b,
                        onComplete: y
                    };
                    (d.shouldReduceMotion || this.options.layoutRoot) && (N.delay = 0,
                    N.type = !1),
                    this.startAnimation(N)
                } else
                    h || Yi(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = x
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            ke(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(ep),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && cl(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let d = 0; d < this.path.length; d++) {
                const m = this.path[d];
                m.shouldResetTransform = !0,
                m.updateScroll("snapshot"),
                m.options.layoutRoot && m.willUpdate(!1)
            }
            const {layoutId: l, layout: c} = this.options;
            if (l === void 0 && !c)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(qi);
                return
            }
            this.isUpdating || this.nodes.forEach(Xh),
            this.isUpdating = !1,
            this.nodes.forEach(Zh),
            this.nodes.forEach(Gh),
            this.nodes.forEach(Uh),
            this.clearAllSnapshots();
            const l = je.now();
            Z.delta = ze(0, 1e3 / 60, l - Z.timestamp),
            Z.timestamp = l,
            Z.isProcessing = !0,
            $s.update.process(Z),
            $s.preRender.process(Z),
            $s.render.process(Z),
            Z.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            un.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Kh),
            this.sharedNodes.forEach(tp)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            z.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            z.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let c = 0; c < this.path.length; c++)
                    this.path[c].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = K(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: l} = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (l = !1),
            l) {
                const c = n(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: c,
                    offset: a(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : c
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , l = this.projectionDelta && !ol(this.projectionDelta)
              , c = this.getTransformTemplate()
              , u = c ? c(this.latestValues, "") : void 0
              , d = u !== this.prevTransformTemplateValue;
            o && (l || Xe(this.latestValues) || d) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const l = this.measurePageBox();
            let c = this.removeElementScroll(l);
            return o && (c = this.removeTransform(c)),
            ip(c),
            {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: c,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var o;
            const {visualElement: l} = this.options;
            if (!l)
                return K();
            const c = l.measureViewportBox();
            if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(rp))) {
                const {scroll: d} = this.root;
                d && (dt(c.x, d.offset.x),
                dt(c.y, d.offset.y))
            }
            return c
        }
        removeElementScroll(o) {
            var l;
            const c = K();
            if (me(c, o),
            !((l = this.scroll) === null || l === void 0) && l.wasRoot)
                return c;
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u]
                  , {scroll: m, options: h} = d;
                d !== this.root && m && h.layoutScroll && (m.wasRoot && me(c, o),
                dt(c.x, m.offset.x),
                dt(c.y, m.offset.y))
            }
            return c
        }
        applyTransform(o, l=!1) {
            const c = K();
            me(c, o);
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u];
                !l && d.options.layoutScroll && d.scroll && d !== d.root && ut(c, {
                    x: -d.scroll.offset.x,
                    y: -d.scroll.offset.y
                }),
                Xe(d.latestValues) && ut(c, d.latestValues)
            }
            return Xe(this.latestValues) && ut(c, this.latestValues),
            c
        }
        removeTransform(o) {
            const l = K();
            me(l, o);
            for (let c = 0; c < this.path.length; c++) {
                const u = this.path[c];
                if (!u.instance || !Xe(u.latestValues))
                    continue;
                Ca(u.latestValues) && u.updateSnapshot();
                const d = K()
                  , m = u.measurePageBox();
                me(d, m),
                zi(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d)
            }
            return Xe(this.latestValues) && zi(l, this.latestValues),
            l
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Z.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var l;
            const c = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== c;
            if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: m, layoutId: h} = this.options;
            if (!(!this.layout || !(m || h))) {
                if (this.resolvedRelativeTargetAt = Z.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const g = this.getClosestProjectingParent();
                    g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = K(),
                    this.relativeTargetOrigin = K(),
                    Mt(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox),
                    me(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = K(),
                    this.targetWithTransforms = K()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    oh(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : me(this.target, this.layout.layoutBox),
                    el(this.target, this.targetDelta)) : me(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const g = this.getClosestProjectingParent();
                        g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = K(),
                        this.relativeTargetOrigin = K(),
                        Mt(this.relativeTargetOrigin, this.target, g.target),
                        me(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    St && Ze.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Ca(this.parent.latestValues) || Qo(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const l = this.getLead()
              , c = !!this.resumingFrom || this !== l;
            let u = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1),
            c && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === Z.timestamp && (u = !1),
            u)
                return;
            const {layout: d, layoutId: m} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(d || m))
                return;
            me(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x
              , g = this.treeScale.y;
            xh(this.layoutCorrected, this.treeScale, this.path, c),
            l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox,
            l.targetWithTransforms = K());
            const {target: x} = l;
            if (!x) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Vi(this.prevProjectionDelta.x, this.projectionDelta.x),
            Vi(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Pt(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
            (this.treeScale.x !== h || this.treeScale.y !== g || !Gi(this.projectionDelta.x, this.prevProjectionDelta.x) || !Gi(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", x)),
            St && Ze.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            var l;
            if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(),
            o) {
                const c = this.getStack();
                c && c.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = ct(),
            this.projectionDelta = ct(),
            this.projectionDeltaWithTransform = ct()
        }
        setAnimationOrigin(o, l=!1) {
            const c = this.snapshot
              , u = c ? c.latestValues : {}
              , d = {
                ...this.latestValues
            }
              , m = ct();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !l;
            const h = K()
              , g = c ? c.source : void 0
              , x = this.layout ? this.layout.source : void 0
              , w = g !== x
              , b = this.getStack()
              , y = !b || b.members.length <= 1
              , p = !!(w && !y && this.options.crossfade === !0 && !this.path.some(ap));
            this.animationProgress = 0;
            let v;
            this.mixTargetDelta = N => {
                const k = N / 1e3;
                Ki(m.x, o.x, k),
                Ki(m.y, o.y, k),
                this.setTargetDelta(m),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Mt(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                sp(this.relativeTarget, this.relativeTargetOrigin, h, k),
                v && Rh(this.relativeTarget, v) && (this.isProjectionDirty = !1),
                v || (v = K()),
                me(v, this.relativeTarget)),
                w && (this.animationValues = d,
                Mh(d, u, this.latestValues, k, p, y)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = k
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (ke(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = z.update( () => {
                is.hasAnimatedSinceResize = !0,
                this.currentAnimation = $h(0, Ui, {
                    ...o,
                    onUpdate: l => {
                        this.mixTargetDelta(l),
                        o.onUpdate && o.onUpdate(l)
                    }
                    ,
                    onComplete: () => {
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ui),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: l, target: c, layout: u, latestValues: d} = o;
            if (!(!l || !c || !u)) {
                if (this !== o && this.layout && u && ul(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    c = this.target || K();
                    const m = de(this.layout.layoutBox.x);
                    c.x.min = o.target.x.min,
                    c.x.max = c.x.min + m;
                    const h = de(this.layout.layoutBox.y);
                    c.y.min = o.target.y.min,
                    c.y.max = c.y.min + h
                }
                me(l, c),
                ut(l, d),
                Pt(this.projectionDeltaWithTransform, this.layoutCorrected, l, d)
            }
        }
        registerSharedNode(o, l) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new Bh),
            this.sharedNodes.get(o).add(l);
            const u = l.options.initialPromotionConfig;
            l.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {layoutId: l} = this.options;
            return l ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {layoutId: l} = this.options;
            return l ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: l, preserveFollowOpacity: c}={}) {
            const u = this.getStack();
            u && u.promote(this, c),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let l = !1;
            const {latestValues: c} = o;
            if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (l = !0),
            !l)
                return;
            const u = {};
            c.z && Xs("z", o, u, this.animationValues);
            for (let d = 0; d < Ks.length; d++)
                Xs(`rotate${Ks[d]}`, o, u, this.animationValues),
                Xs(`skew${Ks[d]}`, o, u, this.animationValues);
            o.render();
            for (const d in u)
                o.setStaticValue(d, u[d]),
                this.animationValues && (this.animationValues[d] = u[d]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var l, c;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return Hh;
            const u = {
                visibility: ""
            }
              , d = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = rs(o == null ? void 0 : o.pointerEvents) || "",
                u.transform = d ? d(this.latestValues, "") : "none",
                u;
            const m = this.getLead();
            if (!this.projectionDelta || !this.layout || !m.target) {
                const w = {};
                return this.options.layoutId && (w.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                w.pointerEvents = rs(o == null ? void 0 : o.pointerEvents) || ""),
                this.hasProjected && !Xe(this.latestValues) && (w.transform = d ? d({}, "") : "none",
                this.hasProjected = !1),
                w
            }
            const h = m.animationValues || m.latestValues;
            this.applyTransformsToTarget(),
            u.transform = Vh(this.projectionDeltaWithTransform, this.treeScale, h),
            d && (u.transform = d(h, u.transform));
            const {x: g, y: x} = this.projectionDelta;
            u.transformOrigin = `${g.origin * 100}% ${x.origin * 100}% 0`,
            m.animationValues ? u.opacity = m === this ? (c = (l = h.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && c !== void 0 ? c : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : u.opacity = m === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
            for (const w in gs) {
                if (h[w] === void 0)
                    continue;
                const {correct: b, applyTo: y} = gs[w]
                  , p = u.transform === "none" ? h[w] : b(h[w], m);
                if (y) {
                    const v = y.length;
                    for (let N = 0; N < v; N++)
                        u[y[N]] = p
                } else
                    u[w] = p
            }
            return this.options.layoutId && (u.pointerEvents = m === this ? rs(o == null ? void 0 : o.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var l;
                return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }
            ),
            this.root.nodes.forEach(qi),
            this.root.sharedNodes.clear()
        }
    }
}
function Gh(e) {
    e.updateLayout()
}
function Uh(e) {
    var t;
    const a = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && a && e.hasListeners("didUpdate")) {
        const {layoutBox: n, measuredBox: i} = e.layout
          , {animationType: r} = e.options
          , o = a.source !== e.layout.source;
        r === "size" ? he(m => {
            const h = o ? a.measuredBox[m] : a.layoutBox[m]
              , g = de(h);
            h.min = n[m].min,
            h.max = h.min + g
        }
        ) : ul(r, a.layoutBox, n) && he(m => {
            const h = o ? a.measuredBox[m] : a.layoutBox[m]
              , g = de(n[m]);
            h.max = h.min + g,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[m].max = e.relativeTarget[m].min + g)
        }
        );
        const l = ct();
        Pt(l, n, a.layoutBox);
        const c = ct();
        o ? Pt(c, e.applyTransform(i, !0), a.measuredBox) : Pt(c, n, a.layoutBox);
        const u = !ol(l);
        let d = !1;
        if (!e.resumeFrom) {
            const m = e.getClosestProjectingParent();
            if (m && !m.resumeFrom) {
                const {snapshot: h, layout: g} = m;
                if (h && g) {
                    const x = K();
                    Mt(x, a.layoutBox, h.layoutBox);
                    const w = K();
                    Mt(w, n, g.layoutBox),
                    ll(x, w) || (d = !0),
                    m.options.layoutRoot && (e.relativeTarget = w,
                    e.relativeTargetOrigin = x,
                    e.relativeParent = m)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: n,
            snapshot: a,
            delta: c,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: d
        })
    } else if (e.isLead()) {
        const {onExitComplete: n} = e.options;
        n && n()
    }
    e.options.transition = void 0
}
function qh(e) {
    St && Ze.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function Yh(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function Kh(e) {
    e.clearSnapshot()
}
function qi(e) {
    e.clearMeasurements()
}
function Xh(e) {
    e.isLayoutDirty = !1
}
function Zh(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Yi(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function Jh(e) {
    e.resolveTargetDelta()
}
function Qh(e) {
    e.calcProjection()
}
function ep(e) {
    e.resetSkewAndRotation()
}
function tp(e) {
    e.removeLeadSnapshot()
}
function Ki(e, t, a) {
    e.translate = Y(t.translate, 0, a),
    e.scale = Y(t.scale, 1, a),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Xi(e, t, a, n) {
    e.min = Y(t.min, a.min, n),
    e.max = Y(t.max, a.max, n)
}
function sp(e, t, a, n) {
    Xi(e.x, t.x, a.x, n),
    Xi(e.y, t.y, a.y, n)
}
function ap(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const np = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Zi = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Ji = Zi("applewebkit/") && !Zi("chrome/") ? Math.round : J;
function Qi(e) {
    e.min = Ji(e.min),
    e.max = Ji(e.max)
}
function ip(e) {
    Qi(e.x),
    Qi(e.y)
}
function ul(e, t, a) {
    return e === "position" || e === "preserve-aspect" && !rh(Wi(t), Wi(a), .2)
}
function rp(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const op = dl({
    attachResizeListener: (e, t) => De(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Zs = {
    current: void 0
}
  , ml = dl({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!Zs.current) {
            const e = new op({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Zs.current = e
        }
        return Zs.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , lp = {
    pan: {
        Feature: jh
    },
    drag: {
        Feature: wh,
        ProjectionNode: ml,
        MeasureLayout: nl
    }
};
function er(e, t) {
    const a = t ? "pointerenter" : "pointerleave"
      , n = t ? "onHoverStart" : "onHoverEnd"
      , i = (r, o) => {
        if (r.pointerType === "touch" || Ko())
            return;
        const l = e.getProps();
        e.animationState && l.whileHover && e.animationState.setActive("whileHover", t);
        const c = l[n];
        c && z.postRender( () => c(r, o))
    }
    ;
    return Re(e.current, a, i, {
        passive: !e.getProps()[n]
    })
}
class cp extends Ue {
    mount() {
        this.unmount = Ie(er(this.node, !0), er(this.node, !1))
    }
    unmount() {}
}
class dp extends Ue {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Ie(De(this.node.current, "focus", () => this.onFocus()), De(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const hl = (e, t) => t ? e === t ? !0 : hl(e, t.parentElement) : !1;
function Js(e, t) {
    if (!t)
        return;
    const a = new PointerEvent("pointer" + e);
    t(a, Ts(a))
}
class up extends Ue {
    constructor() {
        super(...arguments),
        this.removeStartListeners = J,
        this.removeEndListeners = J,
        this.removeAccessibleListeners = J,
        this.startPointerPress = (t, a) => {
            if (this.isPressing)
                return;
            this.removeEndListeners();
            const n = this.node.getProps()
              , r = Re(window, "pointerup", (l, c) => {
                if (!this.checkPressEnd())
                    return;
                const {onTap: u, onTapCancel: d, globalTapTarget: m} = this.node.getProps()
                  , h = !m && !hl(this.node.current, l.target) ? d : u;
                h && z.update( () => h(l, c))
            }
            , {
                passive: !(n.onTap || n.onPointerUp)
            })
              , o = Re(window, "pointercancel", (l, c) => this.cancelPress(l, c), {
                passive: !(n.onTapCancel || n.onPointerCancel)
            });
            this.removeEndListeners = Ie(r, o),
            this.startPress(t, a)
        }
        ,
        this.startAccessiblePress = () => {
            const t = r => {
                if (r.key !== "Enter" || this.isPressing)
                    return;
                const o = l => {
                    l.key !== "Enter" || !this.checkPressEnd() || Js("up", (c, u) => {
                        const {onTap: d} = this.node.getProps();
                        d && z.postRender( () => d(c, u))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = De(this.node.current, "keyup", o),
                Js("down", (l, c) => {
                    this.startPress(l, c)
                }
                )
            }
              , a = De(this.node.current, "keydown", t)
              , n = () => {
                this.isPressing && Js("cancel", (r, o) => this.cancelPress(r, o))
            }
              , i = De(this.node.current, "blur", n);
            this.removeAccessibleListeners = Ie(a, i)
        }
    }
    startPress(t, a) {
        this.isPressing = !0;
        const {onTapStart: n, whileTap: i} = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        n && z.postRender( () => n(t, a))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !Ko()
    }
    cancelPress(t, a) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: n} = this.node.getProps();
        n && z.postRender( () => n(t, a))
    }
    mount() {
        const t = this.node.getProps()
          , a = Re(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(t.onTapStart || t.onPointerStart)
        })
          , n = De(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Ie(a, n)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const Ta = new WeakMap
  , Qs = new WeakMap
  , mp = e => {
    const t = Ta.get(e.target);
    t && t(e)
}
  , hp = e => {
    e.forEach(mp)
}
;
function pp({root: e, ...t}) {
    const a = e || document;
    Qs.has(a) || Qs.set(a, {});
    const n = Qs.get(a)
      , i = JSON.stringify(t);
    return n[i] || (n[i] = new IntersectionObserver(hp,{
        root: e,
        ...t
    })),
    n[i]
}
function fp(e, t, a) {
    const n = pp(t);
    return Ta.set(e, a),
    n.observe(e),
    () => {
        Ta.delete(e),
        n.unobserve(e)
    }
}
const xp = {
    some: 0,
    all: 1
};
class gp extends Ue {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: a, margin: n, amount: i="some", once: r} = t
          , o = {
            root: a ? a.current : void 0,
            rootMargin: n,
            threshold: typeof i == "number" ? i : xp[i]
        }
          , l = c => {
            const {isIntersecting: u} = c;
            if (this.isInView === u || (this.isInView = u,
            r && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: d, onViewportLeave: m} = this.node.getProps()
              , h = u ? d : m;
            h && h(c)
        }
        ;
        return fp(this.node.current, o, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: a} = this.node;
        ["amount", "margin", "root"].some(vp(t, a)) && this.startObserver()
    }
    unmount() {}
}
function vp({viewport: e={}}, {viewport: t={}}={}) {
    return a => e[a] !== t[a]
}
const yp = {
    inView: {
        Feature: gp
    },
    tap: {
        Feature: up
    },
    focus: {
        Feature: dp
    },
    hover: {
        Feature: cp
    }
}
  , bp = {
    layout: {
        ProjectionNode: ml,
        MeasureLayout: nl
    }
}
  , mn = f.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
})
  , Ms = f.createContext({})
  , hn = typeof window < "u"
  , pn = hn ? f.useLayoutEffect : f.useEffect
  , pl = f.createContext({
    strict: !1
});
function wp(e, t, a, n, i) {
    var r, o;
    const {visualElement: l} = f.useContext(Ms)
      , c = f.useContext(pl)
      , u = f.useContext(Ps)
      , d = f.useContext(mn).reducedMotion
      , m = f.useRef();
    n = n || c.renderer,
    !m.current && n && (m.current = n(e, {
        visualState: t,
        parent: l,
        props: a,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: d
    }));
    const h = m.current
      , g = f.useContext(al);
    h && !h.projection && i && (h.type === "html" || h.type === "svg") && jp(m.current, a, i, g),
    f.useInsertionEffect( () => {
        h && h.update(a, u)
    }
    );
    const x = a[zo]
      , w = f.useRef(!!x && !(!((r = window.MotionHandoffIsComplete) === null || r === void 0) && r.call(window, x)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, x)));
    return pn( () => {
        h && (window.MotionIsMounted = !0,
        h.updateFeatures(),
        un.render(h.render),
        w.current && h.animationState && h.animationState.animateChanges())
    }
    ),
    f.useEffect( () => {
        h && (!w.current && h.animationState && h.animationState.animateChanges(),
        w.current && (queueMicrotask( () => {
            var b;
            (b = window.MotionHandoffMarkAsComplete) === null || b === void 0 || b.call(window, x)
        }
        ),
        w.current = !1))
    }
    ),
    h
}
function jp(e, t, a, n) {
    const {layoutId: i, layout: r, drag: o, dragConstraints: l, layoutScroll: c, layoutRoot: u} = t;
    e.projection = new a(e.latestValues,t["data-framer-portal-id"] ? void 0 : fl(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: r,
        alwaysMeasureLayout: !!o || l && lt(l),
        visualElement: e,
        animationType: typeof r == "string" ? r : "both",
        initialPromotionConfig: n,
        layoutScroll: c,
        layoutRoot: u
    })
}
function fl(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : fl(e.parent)
}
function Np(e, t, a) {
    return f.useCallback(n => {
        n && e.mount && e.mount(n),
        t && (n ? t.mount(n) : t.unmount()),
        a && (typeof a == "function" ? a(n) : lt(a) && (a.current = n))
    }
    , [t])
}
function Es(e) {
    return It(e.animate) || Ha.some(t => Rt(e[t]))
}
function xl(e) {
    return !!(Es(e) || e.variants)
}
function kp(e, t) {
    if (Es(e)) {
        const {initial: a, animate: n} = e;
        return {
            initial: a === !1 || Rt(a) ? a : void 0,
            animate: Rt(n) ? n : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function Cp(e) {
    const {initial: t, animate: a} = kp(e, f.useContext(Ms));
    return f.useMemo( () => ({
        initial: t,
        animate: a
    }), [tr(t), tr(a)])
}
function tr(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const sr = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , pt = {};
for (const e in sr)
    pt[e] = {
        isEnabled: t => sr[e].some(a => !!t[a])
    };
function Sp(e) {
    for (const t in e)
        pt[t] = {
            ...pt[t],
            ...e[t]
        }
}
const Tp = Symbol.for("motionComponentSymbol");
function Pp({preloadedFeatures: e, createVisualElement: t, useRender: a, useVisualState: n, Component: i}) {
    e && Sp(e);
    function r(l, c) {
        let u;
        const d = {
            ...f.useContext(mn),
            ...l,
            layoutId: Mp(l)
        }
          , {isStatic: m} = d
          , h = Cp(l)
          , g = n(l, m);
        if (!m && hn) {
            Ep();
            const x = Dp(d);
            u = x.MeasureLayout,
            h.visualElement = wp(i, g, d, t, x.ProjectionNode)
        }
        return s.jsxs(Ms.Provider, {
            value: h,
            children: [u && h.visualElement ? s.jsx(u, {
                visualElement: h.visualElement,
                ...d
            }) : null, a(i, l, Np(g, h.visualElement, c), g, m, h.visualElement)]
        })
    }
    const o = f.forwardRef(r);
    return o[Tp] = i,
    o
}
function Mp({layoutId: e}) {
    const t = f.useContext(dn).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function Ep(e, t) {
    f.useContext(pl).strict
}
function Dp(e) {
    const {drag: t, layout: a} = pt;
    if (!t && !a)
        return {};
    const n = {
        ...t,
        ...a
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || a != null && a.isEnabled(e) ? n.MeasureLayout : void 0,
        ProjectionNode: n.ProjectionNode
    }
}
const Ap = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function fn(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Ap.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function gl(e, {style: t, vars: a}, n, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(n));
    for (const r in a)
        e.style.setProperty(r, a[r])
}
const vl = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function yl(e, t, a, n) {
    gl(e, t, void 0, n);
    for (const i in t.attrs)
        e.setAttribute(vl.has(i) ? i : Ss(i), t.attrs[i])
}
function bl(e, {layout: t, layoutId: a}) {
    return Ge.has(e) || e.startsWith("origin") || (t || a !== void 0) && (!!gs[e] || e === "opacity")
}
function xn(e, t, a) {
    var n;
    const {style: i} = e
      , r = {};
    for (const o in i)
        (te(i[o]) || t.style && te(t.style[o]) || bl(o, e) || ((n = a == null ? void 0 : a.getValue(o)) === null || n === void 0 ? void 0 : n.liveStyle) !== void 0) && (r[o] = i[o]);
    return a && i && typeof i.willChange == "string" && (a.applyWillChange = !1),
    r
}
function wl(e, t, a) {
    const n = xn(e, t, a);
    for (const i in e)
        if (te(e[i]) || te(t[i])) {
            const r = Ft.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            n[r] = e[i]
        }
    return n
}
function Ds(e) {
    const t = f.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
function Lp(e) {
    if (Ge.has(e))
        return "transform";
    if (Ro.has(e))
        return Ss(e)
}
function Ip({applyWillChange: e=!1, scrapeMotionValuesFromProps: t, createRenderState: a, onMount: n}, i, r, o, l) {
    const c = {
        latestValues: Rp(i, r, o, l ? !1 : e, t),
        renderState: a()
    };
    return n && (c.mount = u => n(i, u, c)),
    c
}
const jl = e => (t, a) => {
    const n = f.useContext(Ms)
      , i = f.useContext(Ps)
      , r = () => Ip(e, t, n, i, a);
    return a ? r() : Ds(r)
}
;
function ar(e, t, a) {
    const n = Array.isArray(t) ? t : [t];
    for (let i = 0; i < n.length; i++) {
        const r = Fa(e, n[i]);
        if (r) {
            const {transitionEnd: o, transition: l, ...c} = r;
            a(c, o)
        }
    }
}
function Rp(e, t, a, n, i) {
    var r;
    const o = {}
      , l = new Set
      , c = n && ((r = e.style) === null || r === void 0 ? void 0 : r.willChange) === void 0
      , u = i(e, {});
    for (const b in u)
        o[b] = rs(u[b]);
    let {initial: d, animate: m} = e;
    const h = Es(e)
      , g = xl(e);
    t && g && !h && e.inherit !== !1 && (d === void 0 && (d = t.initial),
    m === void 0 && (m = t.animate));
    let x = a ? a.initial === !1 : !1;
    x = x || d === !1;
    const w = x ? m : d;
    return w && typeof w != "boolean" && !It(w) && ar(e, w, (b, y) => {
        for (const p in b) {
            let v = b[p];
            if (Array.isArray(v)) {
                const N = x ? v.length - 1 : 0;
                v = v[N]
            }
            v !== null && (o[p] = v)
        }
        for (const p in y)
            o[p] = y[p]
    }
    ),
    c && (m && d !== !1 && !It(m) && ar(e, m, b => {
        for (const y in b) {
            const p = Lp(y);
            p && l.add(p)
        }
    }
    ),
    l.size && (o.willChange = Array.from(l).join(","))),
    o
}
const gn = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , Nl = () => ({
    ...gn(),
    attrs: {}
})
  , kl = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , Bp = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Vp = Ft.length;
function _p(e, t, a) {
    let n = ""
      , i = !0;
    for (let r = 0; r < Vp; r++) {
        const o = Ft[r]
          , l = e[o];
        if (l === void 0)
            continue;
        let c = !0;
        if (typeof l == "number" ? c = l === (o.startsWith("scale") ? 1 : 0) : c = parseFloat(l) === 0,
        !c || a) {
            const u = kl(l, Za[o]);
            if (!c) {
                i = !1;
                const d = Bp[o] || o;
                n += `${d}(${u}) `
            }
            a && (t[o] = u)
        }
    }
    return n = n.trim(),
    a ? n = a(t, i ? "" : n) : i && (n = "none"),
    n
}
function vn(e, t, a) {
    const {style: n, vars: i, transformOrigin: r} = e;
    let o = !1
      , l = !1;
    for (const c in t) {
        const u = t[c];
        if (Ge.has(c)) {
            o = !0;
            continue
        } else if (po(c)) {
            i[c] = u;
            continue
        } else {
            const d = kl(u, Za[c]);
            c.startsWith("origin") ? (l = !0,
            r[c] = d) : n[c] = d
        }
    }
    if (t.transform || (o || a ? n.transform = _p(t, e.transform, a) : n.transform && (n.transform = "none")),
    l) {
        const {originX: c="50%", originY: u="50%", originZ: d=0} = r;
        n.transformOrigin = `${c} ${u} ${d}`
    }
}
function nr(e, t, a) {
    return typeof e == "string" ? e : L.transform(t + a * e)
}
function Op(e, t, a) {
    const n = nr(t, e.x, e.width)
      , i = nr(a, e.y, e.height);
    return `${n} ${i}`
}
const zp = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , Fp = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function $p(e, t, a=1, n=0, i=!0) {
    e.pathLength = 1;
    const r = i ? zp : Fp;
    e[r.offset] = L.transform(-n);
    const o = L.transform(t)
      , l = L.transform(a);
    e[r.array] = `${o} ${l}`
}
function yn(e, {attrX: t, attrY: a, attrScale: n, originX: i, originY: r, pathLength: o, pathSpacing: l=1, pathOffset: c=0, ...u}, d, m) {
    if (vn(e, u, m),
    d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: h, style: g, dimensions: x} = e;
    h.transform && (x && (g.transform = h.transform),
    delete h.transform),
    x && (i !== void 0 || r !== void 0 || g.transform) && (g.transformOrigin = Op(x, i !== void 0 ? i : .5, r !== void 0 ? r : .5)),
    t !== void 0 && (h.x = t),
    a !== void 0 && (h.y = a),
    n !== void 0 && (h.scale = n),
    o !== void 0 && $p(h, o, l, c, !1)
}
const bn = e => typeof e == "string" && e.toLowerCase() === "svg"
  , Hp = {
    useVisualState: jl({
        scrapeMotionValuesFromProps: wl,
        createRenderState: Nl,
        onMount: (e, t, {renderState: a, latestValues: n}) => {
            z.read( () => {
                try {
                    a.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    a.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            z.render( () => {
                yn(a, n, bn(t.tagName), e.transformTemplate),
                yl(t, a)
            }
            )
        }
    })
}
  , Wp = {
    useVisualState: jl({
        applyWillChange: !0,
        scrapeMotionValuesFromProps: xn,
        createRenderState: gn
    })
};
function Cl(e, t, a) {
    for (const n in t)
        !te(t[n]) && !bl(n, a) && (e[n] = t[n])
}
function Gp({transformTemplate: e}, t) {
    return f.useMemo( () => {
        const a = gn();
        return vn(a, t, e),
        Object.assign({}, a.vars, a.style)
    }
    , [t])
}
function Up(e, t) {
    const a = e.style || {}
      , n = {};
    return Cl(n, a, e),
    Object.assign(n, Gp(e, t)),
    n
}
function qp(e, t) {
    const a = {}
      , n = Up(e, t);
    return e.drag && e.dragListener !== !1 && (a.draggable = !1,
    n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none",
    n.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (a.tabIndex = 0),
    a.style = n,
    a
}
const Yp = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function vs(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Yp.has(e)
}
let Sl = e => !vs(e);
function Kp(e) {
    e && (Sl = t => t.startsWith("on") ? !vs(t) : e(t))
}
try {
    Kp(require("@emotion/is-prop-valid").default)
} catch {}
function Xp(e, t, a) {
    const n = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (Sl(i) || a === !0 && vs(i) || !t && !vs(i) || e.draggable && i.startsWith("onDrag")) && (n[i] = e[i]);
    return n
}
function Zp(e, t, a, n) {
    const i = f.useMemo( () => {
        const r = Nl();
        return yn(r, t, bn(n), e.transformTemplate),
        {
            ...r.attrs,
            style: {
                ...r.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const r = {};
        Cl(r, e.style, e),
        i.style = {
            ...r,
            ...i.style
        }
    }
    return i
}
function Jp(e=!1) {
    return (a, n, i, {latestValues: r}, o) => {
        const c = (fn(a) ? Zp : qp)(n, r, o, a)
          , u = Xp(n, typeof a == "string", e)
          , d = a !== f.Fragment ? {
            ...u,
            ...c,
            ref: i
        } : {}
          , {children: m} = n
          , h = f.useMemo( () => te(m) ? m.get() : m, [m]);
        return f.createElement(a, {
            ...d,
            children: h
        })
    }
}
function Qp(e, t) {
    return function(n, {forwardMotionProps: i}={
        forwardMotionProps: !1
    }) {
        const o = {
            ...fn(n) ? Hp : Wp,
            preloadedFeatures: e,
            useRender: Jp(i),
            createVisualElement: t,
            Component: n
        };
        return Pp(o)
    }
}
const Pa = {
    current: null
}
  , Tl = {
    current: !1
};
function ef() {
    if (Tl.current = !0,
    !!hn)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => Pa.current = e.matches;
            e.addListener(t),
            t()
        } else
            Pa.current = !1
}
function tf(e, t, a) {
    for (const n in t) {
        const i = t[n]
          , r = a[n];
        if (te(i))
            e.addValue(n, i);
        else if (te(r))
            e.addValue(n, Ee(i, {
                owner: e
            }));
        else if (r !== i)
            if (e.hasValue(n)) {
                const o = e.getValue(n);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = e.getStaticValue(n);
                e.addValue(n, Ee(o !== void 0 ? o : i, {
                    owner: e
                }))
            }
    }
    for (const n in a)
        t[n] === void 0 && e.removeValue(n);
    return t
}
const ir = new WeakMap
  , sf = [...go, ee, Fe]
  , af = e => sf.find(xo(e))
  , rr = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class nf {
    scrapeMotionValuesFromProps(t, a, n) {
        return {}
    }
    constructor({parent: t, props: a, presenceContext: n, reducedMotionConfig: i, blockInitialAnimation: r, visualState: o}, l={}) {
        this.applyWillChange = !1,
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = Ya,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const h = je.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h,
            z.render(this.render, !1, !0))
        }
        ;
        const {latestValues: c, renderState: u} = o;
        this.latestValues = c,
        this.baseTarget = {
            ...c
        },
        this.initialValues = a.initial ? {
            ...c
        } : {},
        this.renderState = u,
        this.parent = t,
        this.props = a,
        this.presenceContext = n,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = l,
        this.blockInitialAnimation = !!r,
        this.isControllingVariants = Es(a),
        this.isVariantNode = xl(a),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: d, ...m} = this.scrapeMotionValuesFromProps(a, {}, this);
        for (const h in m) {
            const g = m[h];
            c[h] !== void 0 && te(g) && g.set(c[h], !1)
        }
    }
    mount(t) {
        this.current = t,
        ir.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (a, n) => this.bindToMotionValue(n, a)),
        Tl.current || ef(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Pa.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        ir.delete(this.current),
        this.projection && this.projection.unmount(),
        ke(this.notifyUpdate),
        ke(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features) {
            const a = this.features[t];
            a && (a.unmount(),
            a.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, a) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const n = Ge.has(t)
          , i = a.on("change", l => {
            this.latestValues[t] = l,
            this.props.onUpdate && z.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , r = a.on("renderRequest", this.scheduleRender);
        let o;
        window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, a)),
        this.valueSubscriptions.set(t, () => {
            i(),
            r(),
            o && o(),
            a.owner && a.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in pt) {
            const a = pt[t];
            if (!a)
                continue;
            const {isEnabled: n, Feature: i} = a;
            if (!this.features[t] && i && n(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const r = this.features[t];
                r.isMounted ? r.update() : (r.mount(),
                r.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : K()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, a) {
        this.latestValues[t] = a
    }
    update(t, a) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = a;
        for (let n = 0; n < rr.length; n++) {
            const i = rr[n];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const r = "on" + i
              , o = t[r];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = tf(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const a = this.getClosestVariantNode();
        if (a)
            return a.variantChildren && a.variantChildren.add(t),
            () => a.variantChildren.delete(t)
    }
    addValue(t, a) {
        const n = this.values.get(t);
        a !== n && (n && this.removeValue(t),
        this.bindToMotionValue(t, a),
        this.values.set(t, a),
        this.latestValues[t] = a.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const a = this.valueSubscriptions.get(t);
        a && (a(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, a) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let n = this.values.get(t);
        return n === void 0 && a !== void 0 && (n = Ee(a === null ? void 0 : a, {
            owner: this
        }),
        this.addValue(t, n)),
        n
    }
    readValue(t, a) {
        var n;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (mo(i) || co(i)) ? i = parseFloat(i) : !af(i) && Fe.test(a) && (i = Co(t, a)),
        this.setBaseTarget(t, te(i) ? i.get() : i)),
        te(i) ? i.get() : i
    }
    setBaseTarget(t, a) {
        this.baseTarget[t] = a
    }
    getBaseTarget(t) {
        var a;
        const {initial: n} = this.props;
        let i;
        if (typeof n == "string" || typeof n == "object") {
            const o = Fa(this.props, n, (a = this.presenceContext) === null || a === void 0 ? void 0 : a.custom);
            o && (i = o[t])
        }
        if (n && i !== void 0)
            return i;
        const r = this.getBaseTargetFromProps(this.props, t);
        return r !== void 0 && !te(r) ? r : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, a) {
        return this.events[t] || (this.events[t] = new cn),
        this.events[t].add(a)
    }
    notify(t, ...a) {
        this.events[t] && this.events[t].notify(...a)
    }
}
class Pl extends nf {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = So
    }
    sortInstanceNodePosition(t, a) {
        return t.compareDocumentPosition(a) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, a) {
        return t.style ? t.style[a] : void 0
    }
    removeValueFromRenderState(t, {vars: a, style: n}) {
        delete a[t],
        delete n[t]
    }
}
function rf(e) {
    return window.getComputedStyle(e)
}
class of extends Pl {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.applyWillChange = !0,
        this.renderInstance = gl
    }
    readValueFromInstance(t, a) {
        if (Ge.has(a)) {
            const n = Ja(a);
            return n && n.default || 0
        } else {
            const n = rf(t)
              , i = (po(a) ? n.getPropertyValue(a) : n[a]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: a}) {
        return tl(t, a)
    }
    build(t, a, n) {
        vn(t, a, n.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, a, n) {
        return xn(t, a, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        te(t) && (this.childSubscription = t.on("change", a => {
            this.current && (this.current.textContent = `${a}`)
        }
        ))
    }
}
class lf extends Pl {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = K
    }
    getBaseTargetFromProps(t, a) {
        return t[a]
    }
    readValueFromInstance(t, a) {
        if (Ge.has(a)) {
            const n = Ja(a);
            return n && n.default || 0
        }
        return a = vl.has(a) ? a : Ss(a),
        t.getAttribute(a)
    }
    scrapeMotionValuesFromProps(t, a, n) {
        return wl(t, a, n)
    }
    build(t, a, n) {
        yn(t, a, this.isSVGTag, n.transformTemplate)
    }
    renderInstance(t, a, n, i) {
        yl(t, a, n, i)
    }
    mount(t) {
        this.isSVGTag = bn(t.tagName),
        super.mount(t)
    }
}
const cf = (e, t) => fn(e) ? new lf(t) : new of(t,{
    allowProjection: e !== f.Fragment
})
  , df = Qp({
    ...Zm,
    ...yp,
    ...lp,
    ...bp
}, cf)
  , V = Wd(df);
class uf extends f.Component {
    getSnapshotBeforeUpdate(t) {
        const a = this.props.childRef.current;
        if (a && t.isPresent && !this.props.isPresent) {
            const n = this.props.sizeRef.current;
            n.height = a.offsetHeight || 0,
            n.width = a.offsetWidth || 0,
            n.top = a.offsetTop,
            n.left = a.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function mf({children: e, isPresent: t}) {
    const a = f.useId()
      , n = f.useRef(null)
      , i = f.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: r} = f.useContext(mn);
    return f.useInsertionEffect( () => {
        const {width: o, height: l, top: c, left: u} = i.current;
        if (t || !n.current || !o || !l)
            return;
        n.current.dataset.motionPopId = a;
        const d = document.createElement("style");
        return r && (d.nonce = r),
        document.head.appendChild(d),
        d.sheet && d.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
            document.head.removeChild(d)
        }
    }
    , [t]),
    s.jsx(uf, {
        isPresent: t,
        childRef: n,
        sizeRef: i,
        children: f.cloneElement(e, {
            ref: n
        })
    })
}
const hf = ({children: e, initial: t, isPresent: a, onExitComplete: n, custom: i, presenceAffectsLayout: r, mode: o}) => {
    const l = Ds(pf)
      , c = f.useId()
      , u = f.useCallback(m => {
        l.set(m, !0);
        for (const h of l.values())
            if (!h)
                return;
        n && n()
    }
    , [l, n])
      , d = f.useMemo( () => ({
        id: c,
        initial: t,
        isPresent: a,
        custom: i,
        onExitComplete: u,
        register: m => (l.set(m, !1),
        () => l.delete(m))
    }), r ? [Math.random(), u] : [a, u]);
    return f.useMemo( () => {
        l.forEach( (m, h) => l.set(h, !1))
    }
    , [a]),
    f.useEffect( () => {
        !a && !l.size && n && n()
    }
    , [a]),
    o === "popLayout" && (e = s.jsx(mf, {
        isPresent: a,
        children: e
    })),
    s.jsx(Ps.Provider, {
        value: d,
        children: e
    })
}
;
function pf() {
    return new Map
}
const Jt = e => e.key || "";
function or(e) {
    const t = [];
    return f.Children.forEach(e, a => {
        f.isValidElement(a) && t.push(a)
    }
    ),
    t
}
const ft = ({children: e, exitBeforeEnter: t, custom: a, initial: n=!0, onExitComplete: i, presenceAffectsLayout: r=!0, mode: o="sync"}) => {
    const l = f.useMemo( () => or(e), [e])
      , c = l.map(Jt)
      , u = f.useRef(!0)
      , d = f.useRef(l)
      , m = Ds( () => new Map)
      , [h,g] = f.useState(l)
      , [x,w] = f.useState(l);
    pn( () => {
        u.current = !1,
        d.current = l;
        for (let p = 0; p < x.length; p++) {
            const v = Jt(x[p]);
            c.includes(v) ? m.delete(v) : m.get(v) !== !0 && m.set(v, !1)
        }
    }
    , [x, c.length, c.join("-")]);
    const b = [];
    if (l !== h) {
        let p = [...l];
        for (let v = 0; v < x.length; v++) {
            const N = x[v]
              , k = Jt(N);
            c.includes(k) || (p.splice(v, 0, N),
            b.push(N))
        }
        o === "wait" && b.length && (p = b),
        w(or(p)),
        g(l);
        return
    }
    const {forceRender: y} = f.useContext(dn);
    return s.jsx(s.Fragment, {
        children: x.map(p => {
            const v = Jt(p)
              , N = l === x || c.includes(v)
              , k = () => {
                if (m.has(v))
                    m.set(v, !0);
                else
                    return;
                let P = !0;
                m.forEach(D => {
                    D || (P = !1)
                }
                ),
                P && (y == null || y(),
                w(d.current),
                i && i())
            }
            ;
            return s.jsx(hf, {
                isPresent: N,
                initial: !u.current || n ? void 0 : !1,
                custom: N ? void 0 : a,
                presenceAffectsLayout: r,
                mode: o,
                onExitComplete: N ? void 0 : k,
                children: p
            }, v)
        }
        )
    })
}
;
function xt(e, t, a) {
    f.useInsertionEffect( () => e.on(t, a), [e, t, a])
}
function ff(e, t, a) {
    return typeof e == "string" ? e = document.querySelectorAll(e) : e instanceof Element && (e = [e]),
    Array.from(e || [])
}
const os = new WeakMap;
let Oe;
function xf(e, t) {
    if (t) {
        const {inlineSize: a, blockSize: n} = t[0];
        return {
            width: a,
            height: n
        }
    } else
        return e instanceof SVGElement && "getBBox"in e ? e.getBBox() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
}
function gf({target: e, contentRect: t, borderBoxSize: a}) {
    var n;
    (n = os.get(e)) === null || n === void 0 || n.forEach(i => {
        i({
            target: e,
            contentSize: t,
            get size() {
                return xf(e, a)
            }
        })
    }
    )
}
function vf(e) {
    e.forEach(gf)
}
function yf() {
    typeof ResizeObserver > "u" || (Oe = new ResizeObserver(vf))
}
function bf(e, t) {
    Oe || yf();
    const a = ff(e);
    return a.forEach(n => {
        let i = os.get(n);
        i || (i = new Set,
        os.set(n, i)),
        i.add(t),
        Oe == null || Oe.observe(n)
    }
    ),
    () => {
        a.forEach(n => {
            const i = os.get(n);
            i == null || i.delete(t),
            i != null && i.size || Oe == null || Oe.unobserve(n)
        }
        )
    }
}
const ls = new Set;
let Et;
function wf() {
    Et = () => {
        const e = {
            width: window.innerWidth,
            height: window.innerHeight
        }
          , t = {
            target: window,
            size: e,
            contentSize: e
        };
        ls.forEach(a => a(t))
    }
    ,
    window.addEventListener("resize", Et)
}
function jf(e) {
    return ls.add(e),
    Et || wf(),
    () => {
        ls.delete(e),
        !ls.size && Et && (Et = void 0)
    }
}
function Nf(e, t) {
    return typeof e == "function" ? jf(e) : bf(e, t)
}
const kf = 50
  , lr = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0
})
  , Cf = () => ({
    time: 0,
    x: lr(),
    y: lr()
})
  , Sf = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function cr(e, t, a, n) {
    const i = a[t]
      , {length: r, position: o} = Sf[t]
      , l = i.current
      , c = a.time;
    i.current = e[`scroll${o}`],
    i.scrollLength = e[`scroll${r}`] - e[`client${r}`],
    i.offset.length = 0,
    i.offset[0] = 0,
    i.offset[1] = i.scrollLength,
    i.progress = st(0, i.scrollLength, i.current);
    const u = n - c;
    i.velocity = u > kf ? 0 : en(i.current - l, u)
}
function Tf(e, t, a) {
    cr(e, "x", t, a),
    cr(e, "y", t, a),
    t.time = a
}
function Pf(e, t) {
    const a = {
        x: 0,
        y: 0
    };
    let n = e;
    for (; n && n !== t; )
        if (n instanceof HTMLElement)
            a.x += n.offsetLeft,
            a.y += n.offsetTop,
            n = n.offsetParent;
        else if (n.tagName === "svg") {
            const i = n.getBoundingClientRect();
            n = n.parentElement;
            const r = n.getBoundingClientRect();
            a.x += i.left - r.left,
            a.y += i.top - r.top
        } else if (n instanceof SVGGraphicsElement) {
            const {x: i, y: r} = n.getBBox();
            a.x += i,
            a.y += r;
            let o = null
              , l = n.parentNode;
            for (; !o; )
                l.tagName === "svg" && (o = l),
                l = n.parentNode;
            n = o
        } else
            break;
    return a
}
const Mf = {
    All: [[0, 0], [1, 1]]
}
  , Ma = {
    start: 0,
    center: .5,
    end: 1
};
function dr(e, t, a=0) {
    let n = 0;
    if (e in Ma && (e = Ma[e]),
    typeof e == "string") {
        const i = parseFloat(e);
        e.endsWith("px") ? n = i : e.endsWith("%") ? e = i / 100 : e.endsWith("vw") ? n = i / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? n = i / 100 * document.documentElement.clientHeight : e = i
    }
    return typeof e == "number" && (n = t * e),
    a + n
}
const Ef = [0, 0];
function Df(e, t, a, n) {
    let i = Array.isArray(e) ? e : Ef
      , r = 0
      , o = 0;
    return typeof e == "number" ? i = [e, e] : typeof e == "string" && (e = e.trim(),
    e.includes(" ") ? i = e.split(" ") : i = [e, Ma[e] ? e : "0"]),
    r = dr(i[0], a, n),
    o = dr(i[1], t),
    r - o
}
const Af = {
    x: 0,
    y: 0
};
function Lf(e) {
    return "getBBox"in e && e.tagName !== "svg" ? e.getBBox() : {
        width: e.clientWidth,
        height: e.clientHeight
    }
}
function If(e, t, a) {
    const {offset: n=Mf.All} = a
      , {target: i=e, axis: r="y"} = a
      , o = r === "y" ? "height" : "width"
      , l = i !== e ? Pf(i, e) : Af
      , c = i === e ? {
        width: e.scrollWidth,
        height: e.scrollHeight
    } : Lf(i)
      , u = {
        width: e.clientWidth,
        height: e.clientHeight
    };
    t[r].offset.length = 0;
    let d = !t[r].interpolate;
    const m = n.length;
    for (let h = 0; h < m; h++) {
        const g = Df(n[h], u[o], c[o], l[r]);
        !d && g !== t[r].interpolatorOffsets[h] && (d = !0),
        t[r].offset[h] = g
    }
    d && (t[r].interpolate = Lo(t[r].offset, Io(n)),
    t[r].interpolatorOffsets = [...t[r].offset]),
    t[r].progress = t[r].interpolate(t[r].current)
}
function Rf(e, t=e, a) {
    if (a.x.targetOffset = 0,
    a.y.targetOffset = 0,
    t !== e) {
        let n = t;
        for (; n && n !== e; )
            a.x.targetOffset += n.offsetLeft,
            a.y.targetOffset += n.offsetTop,
            n = n.offsetParent
    }
    a.x.targetLength = t === e ? t.scrollWidth : t.clientWidth,
    a.y.targetLength = t === e ? t.scrollHeight : t.clientHeight,
    a.x.containerLength = e.clientWidth,
    a.y.containerLength = e.clientHeight
}
function Bf(e, t, a, n={}) {
    return {
        measure: () => Rf(e, n.target, a),
        update: i => {
            Tf(e, a, i),
            (n.offset || n.target) && If(e, a, n)
        }
        ,
        notify: () => t(a)
    }
}
const Nt = new WeakMap
  , ur = new WeakMap
  , ea = new WeakMap
  , mr = e => e === document.documentElement ? window : e;
function wn(e, {container: t=document.documentElement, ...a}={}) {
    let n = ea.get(t);
    n || (n = new Set,
    ea.set(t, n));
    const i = Cf()
      , r = Bf(t, e, i, a);
    if (n.add(r),
    !Nt.has(t)) {
        const l = () => {
            for (const h of n)
                h.measure()
        }
          , c = () => {
            for (const h of n)
                h.update(Z.timestamp)
        }
          , u = () => {
            for (const h of n)
                h.notify()
        }
          , d = () => {
            z.read(l, !1, !0),
            z.read(c, !1, !0),
            z.update(u, !1, !0)
        }
        ;
        Nt.set(t, d);
        const m = mr(t);
        window.addEventListener("resize", d, {
            passive: !0
        }),
        t !== document.documentElement && ur.set(t, Nf(t, d)),
        m.addEventListener("scroll", d, {
            passive: !0
        })
    }
    const o = Nt.get(t);
    return z.read(o, !1, !0),
    () => {
        var l;
        ke(o);
        const c = ea.get(t);
        if (!c || (c.delete(r),
        c.size))
            return;
        const u = Nt.get(t);
        Nt.delete(t),
        u && (mr(t).removeEventListener("scroll", u),
        (l = ur.get(t)) === null || l === void 0 || l(),
        window.removeEventListener("resize", u))
    }
}
function Ml(e, t) {
    let a;
    const n = () => {
        const {currentTime: i} = t
          , o = (i === null ? 0 : i.value) / 100;
        a !== o && e(o),
        a = o
    }
    ;
    return z.update(n, !0),
    () => ke(n)
}
function Vf({source: e, container: t, axis: a="y"}) {
    e && (t = e);
    const n = {
        value: 0
    }
      , i = wn(r => {
        n.value = r[a].progress * 100
    }
    , {
        container: t,
        axis: a
    });
    return {
        currentTime: n,
        cancel: i
    }
}
const ta = new Map;
function El({source: e, container: t=document.documentElement, axis: a="y"}={}) {
    e && (t = e),
    ta.has(t) || ta.set(t, {});
    const n = ta.get(t);
    return n[a] || (n[a] = Oo() ? new ScrollTimeline({
        source: t,
        axis: a
    }) : Vf({
        source: t,
        axis: a
    })),
    n[a]
}
function _f(e) {
    return e.length === 2
}
function Dl(e) {
    return e && (e.target || e.offset)
}
function Of(e, t) {
    return _f(e) || Dl(t) ? wn(a => {
        e(a[t.axis].progress, a)
    }
    , t) : Ml(e, El(t))
}
function zf(e, t) {
    if (Dl(t))
        return e.pause(),
        wn(a => {
            e.time = e.duration * a[t.axis].progress
        }
        , t);
    {
        const a = El(t);
        return e.attachTimeline(a, n => (n.pause(),
        Ml(i => {
            n.time = n.duration * i
        }
        , a)))
    }
}
function Ff(e, {axis: t="y", ...a}={}) {
    const n = {
        axis: t,
        ...a
    };
    return typeof e == "function" ? Of(e, n) : zf(e, n)
}
function hr(e, t) {
    nu(!!(!t || t.current))
}
const $f = () => ({
    scrollX: Ee(0),
    scrollY: Ee(0),
    scrollXProgress: Ee(0),
    scrollYProgress: Ee(0)
});
function gt({container: e, target: t, layoutEffect: a=!0, ...n}={}) {
    const i = Ds($f);
    return (a ? pn : f.useEffect)( () => (hr("target", t),
    hr("container", e),
    Ff( (o, {x: l, y: c}) => {
        i.scrollX.set(l.current),
        i.scrollXProgress.set(l.progress),
        i.scrollY.set(c.current),
        i.scrollYProgress.set(c.progress)
    }
    , {
        ...n,
        container: (e == null ? void 0 : e.current) || void 0,
        target: (t == null ? void 0 : t.current) || void 0
    })), [e, t, JSON.stringify(n.offset)]),
    i
}
const et = ({text: e="", duration: t=.5, delayMultiple: a=.04, framerProps: n={
    hidden: {
        opacity: 0,
        x: -20
    },
    visible: {
        opacity: 1,
        x: 0
    }
}, onView: i=!1, once: r=!1, amount: o=.5, className: l, theme: c=["#2e0040", "#3d0079", "#5f0580", "#980175", "#df1c85", "#fd947e"]}) => s.jsx("div", {
    className: "flex justify-center",
    children: s.jsx(ft, {
        children: e.split("").map( (u, d) => s.jsx(V.span, {
            initial: "hidden",
            animate: !i && "visible",
            whileInView: i && "visible",
            exit: "hidden",
            variants: n,
            transition: {
                duration: t,
                delay: d * a
            },
            className: R("drop-shadow-sm text-theme-${i}", l),
            viewport: {
                once: r,
                amount: o
            },
            children: u === " " ? s.jsx("span", {
                children: " "
            }) : u
        }, d))
    })
})
  , Al = () => {
    const [e,t] = f.useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    return f.useEffect( () => {
        const a = () => {
            t({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        ;
        return window.addEventListener("resize", a),
        () => window.removeEventListener("resize", a)
    }
    , []),
    e
}
  , Hf = () => {
    const [e,t] = f.useState(0)
      , a = f.useRef(null)
      , {scrollYProgress: n} = gt({
        target: a,
        offset: ["start end", "end start"]
    });
    return xt(n, "change", i => t(Number(i * 200))),
    s.jsxs("div", {
        className: "w-[min(1300px,100%-2rem)] mx-auto",
        children: [s.jsxs("div", {
            className: "text-center mb-7",
            children: [s.jsx("h1", {
                className: "font-bold text-4xl mb-1 max-sm:text-3xl",
                children: "Top Destinations"
            }), s.jsx("p", {
                className: "text-gray-500 text-sm",
                children: "These popular destinations have a lot to offer."
            })]
        }), s.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
            children: [s.jsxs("div", {
                className: "h-[400px] max-sm:h-72 grid gap-3",
                children: [s.jsx(sa, {
                    to: "/dubai",
                    imageUrl: "https://www.legsgo.com/assets/webp/home/dubai.webp",
                    label: "Dubai",
                    bgColor: "bg-gray-200"
                }), s.jsx(sa, {
                    to: "/bali",
                    imageUrl: "https://www.legsgo.com/assets/webp/home/bali.webp",
                    label: "Bali",
                    bgColor: "bg-red-200"
                })]
            }), s.jsx(sa, {
                to: "/maldives",
                imageUrl: "https://www.legsgo.com/assets/webp/home/maldives.webp",
                label: "Maldives",
                bgColor: "bg-green-200"
            })]
        })]
    })
}
  , sa = ({to: e, imageUrl: t, label: a, bgColor: n}) => {
    const [i,r] = f.useState(0)
      , [o,l] = f.useState(null)
      , c = f.useRef(null)
      , {width: u} = Al()
      , {scrollYProgress: d} = gt({
        target: c,
        offset: ["start end", "end start"]
    });
    return xt(d, "change", m => r(Number(m * 200))),
    f.useEffect( () => {
        const m = () => {
            var g;
            const h = (g = c.current) == null ? void 0 : g.getBoundingClientRect().width;
            l(h)
        }
        ;
        return m(),
        window.addEventListener("resize", m),
        () => window.removeEventListener("resize", m)
    }
    , [u]),
    a === "Maldives" ? s.jsx(H, {
        ref: c,
        to: e,
        className: `inline-block ${n} rounded-xl overflow-hidden bg-cover bg-center max-md:h-[137px]`,
        style: {
            backgroundSize: `${u < 640 ? "cover" : `${o + i}px`}`,
            backgroundImage: `url('${t}')`
        },
        children: s.jsx("div", {
            className: "bg-black/20 size-full grid place-content-center",
            children: s.jsx("h3", {
                className: "text-white text-3xl max-md:text-2xl font-semibold uppercase",
                children: s.jsx(et, {
                    onView: !0,
                    text: a
                })
            })
        })
    }) : s.jsx(H, {
        ref: c,
        to: e,
        className: `inline-block ${n} rounded-xl overflow-hidden bg-cover bg-center`,
        style: {
            backgroundPositionY: u < 640 ? "center" : -i,
            backgroundImage: `url('${t}')`
        },
        children: s.jsx("div", {
            className: "bg-black/20 size-full grid place-content-center",
            children: s.jsx("h3", {
                className: "text-white text-3xl max-md:text-2xl font-semibold uppercase",
                children: s.jsx(et, {
                    onView: !0,
                    text: a
                })
            })
        })
    })
}
  , ge = ({children: e}) => s.jsx("div", {
    className: "w-[min(1300px,100%-2rem)] mx-auto",
    children: e
});
var Ll = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , pr = E.createContext && E.createContext(Ll)
  , Wf = ["attr", "size", "title"];
function Gf(e, t) {
    if (e == null)
        return {};
    var a = Uf(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (i = 0; i < r.length; i++)
            n = r[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
    }
    return a
}
function Uf(e, t) {
    if (e == null)
        return {};
    var a = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            a[n] = e[n]
        }
    return a
}
function ys() {
    return ys = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
        }
        return e
    }
    ,
    ys.apply(this, arguments)
}
function fr(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        a.push.apply(a, n)
    }
    return a
}
function bs(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t] != null ? arguments[t] : {};
        t % 2 ? fr(Object(a), !0).forEach(function(n) {
            qf(e, n, a[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : fr(Object(a)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
        })
    }
    return e
}
function qf(e, t, a) {
    return t = Yf(t),
    t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a,
    e
}
function Yf(e) {
    var t = Kf(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function Kf(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var a = e[Symbol.toPrimitive];
    if (a !== void 0) {
        var n = a.call(e, t);
        if (typeof n != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function Il(e) {
    return e && e.map( (t, a) => E.createElement(t.tag, bs({
        key: a
    }, t.attr), Il(t.child)))
}
function G(e) {
    return t => E.createElement(Xf, ys({
        attr: bs({}, e.attr)
    }, t), Il(e.child))
}
function Xf(e) {
    var t = a => {
        var {attr: n, size: i, title: r} = e, o = Gf(e, Wf), l = i || a.size || "1em", c;
        return a.className && (c = a.className),
        e.className && (c = (c ? c + " " : "") + e.className),
        E.createElement("svg", ys({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, a.attr, n, o, {
            className: c,
            style: bs(bs({
                color: e.color || a.color
            }, a.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg"
        }), r && E.createElement("title", null, r), e.children)
    }
    ;
    return pr !== void 0 ? E.createElement(pr.Consumer, null, a => t(a)) : t(Ll)
}
function Rl(e) {
    return G({
        attr: {
            viewBox: "0 0 320 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            },
            child: []
        }]
    })(e)
}
function Zf(e) {
    return G({
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            },
            child: []
        }]
    })(e)
}
function Jf(e) {
    return G({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            },
            child: []
        }]
    })(e)
}
function Bl(e) {
    return G({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            },
            child: []
        }]
    })(e)
}
function Vl(e) {
    return G({
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            },
            child: []
        }]
    })(e)
}
function Qf(e) {
    return G({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
            },
            child: []
        }]
    })(e)
}
function e0(e) {
    return G({
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"
            },
            child: []
        }]
    })(e)
}
function As(e) {
    return G({
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            },
            child: []
        }]
    })(e)
}
function t0(e) {
    return G({
        attr: {
            viewBox: "0 0 352 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            },
            child: []
        }]
    })(e)
}
function s0(e) {
    return G({
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"
            },
            child: []
        }]
    })(e)
}
const jn = f.forwardRef( ({className: e, ...t}, a) => s.jsx("div", {
    ref: a,
    className: R("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
jn.displayName = "Card";
const a0 = f.forwardRef( ({className: e, ...t}, a) => s.jsx("div", {
    ref: a,
    className: R("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
a0.displayName = "CardHeader";
const n0 = f.forwardRef( ({className: e, ...t}, a) => s.jsx("h3", {
    ref: a,
    className: R("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
n0.displayName = "CardTitle";
const i0 = f.forwardRef( ({className: e, ...t}, a) => s.jsx("p", {
    ref: a,
    className: R("text-sm text-muted-foreground", e),
    ...t
}));
i0.displayName = "CardDescription";
const r0 = f.forwardRef( ({className: e, ...t}, a) => s.jsx("div", {
    ref: a,
    className: R("p-6 pt-0", e),
    ...t
}));
r0.displayName = "CardContent";
const o0 = f.forwardRef( ({className: e, ...t}, a) => s.jsx("div", {
    ref: a,
    className: R("flex items-center p-6 pt-0", e),
    ...t
}));
o0.displayName = "CardFooter";
const se = ({children: e, direction: t, delay: a, duration: n, once: i=!0, justOpacity: r=!1, from: o="50px", amount: l=.5}) => {
    const c = () => {
        switch (t) {
        case "ltr":
            return {
                x: r ? "0" : `-${o}`,
                opacity: 0
            };
        case "rtl":
            return {
                x: r ? "0" : o,
                opacity: 0
            };
        case "ttb":
            return {
                y: r ? "0" : `-${o}`,
                opacity: 0
            };
        case "btt":
            return {
                y: r ? "0" : o,
                opacity: 0
            };
        default:
            return {
                x: "0",
                opacity: 0
            }
        }
    }
    ;
    return s.jsx(V.div, {
        initial: c(),
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1
        },
        transition: {
            mass: .5,
            type: "spring",
            duration: n,
            delay: a
        },
        viewport: {
            once: i,
            amount: l
        },
        children: e
    })
}
  , ie = ({message: e="Loading...", forError: t=!1, heightAuto: a=!1}) => s.jsx("div", {
    className: `grid place-content-center ${a ? "min-h-52" : "h-[75dvh]"}`,
    children: s.jsxs("div", {
        className: "flex items-center gap-2",
        children: [!t && s.jsx(Ls, {
            size: "19"
        }), s.jsx("span", {
            className: R("text-sm font-medium capitalize", t && "text-red-500"),
            children: e
        })]
    })
})
  , Ls = ({size: e=30, color: t="black", trackOpacity: a=.1, speed: n=.8}) => s.jsxs("svg", {
    className: "container_ldrs_ring_2",
    viewBox: "0 0 40 40",
    style: {
        "--uib-size": `${e}px`,
        "--uib-color": t,
        "--uib-bg-opacity": a,
        "--uib-speed": `${n}s`
    },
    children: [s.jsx("circle", {
        className: "track",
        cx: "20",
        cy: "20",
        r: "17.5",
        pathLength: "100",
        strokeWidth: "5px",
        fill: "none"
    }), s.jsx("circle", {
        className: "car",
        cx: "20",
        cy: "20",
        r: "17.5",
        pathLength: "100",
        strokeWidth: "5px",
        fill: "none"
    })]
})
  , xr = ({data: e, index: t, animateOnce: a=!1, reAnimate: n, asCarousel: i, isPackage: r=!1}) => {
    const {slug: o, currency: l, discount: c, images: u, price: d, rating: m, saleType: h, title: g, duration: x, costInfo: w, packageName: b, country: y} = e;
    if (!u)
        return s.jsx(ie, {
            message: "Coming soon!",
            forError: !0,
            heightAuto: !0
        });
    const p = r ? `/tours/${y.toLowerCase()}/${t + 1}` : `/attractions/${o}`;
    return s.jsx(se, {
        direction: "btt",
        from: "50px",
        once: a,
        amount: .2,
        delay: t * .05,
        children: s.jsx(jn, {
            className: R("rounded-3xl  h-full p-4 max-sm:p-3", i && "max-sm:max-w-52"),
            children: s.jsxs(H, {
                className: "text-sm w-full space-y-2  h-full inline-block",
                to: p,
                children: [s.jsx("div", {
                    className: "inline-block w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 group",
                    children: s.jsx("img", {
                        src: u[Math.floor(Math.random() * u.length) || 0],
                        className: "size-full object-cover group-hover:scale-110 transition-transform duration-500",
                        alt: g,
                        loading: "lazy"
                    })
                }), s.jsxs("div", {
                    className: "py-3 grid content-around",
                    children: [s.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [s.jsx("span", {
                            className: "text-gray-500",
                            children: r ? s.jsxs("span", {
                                className: "text-gray-500",
                                children: [" ", `${x.days}D ${x.nights}N`]
                            }) : s.jsxs("span", {
                                className: "text-gray-500",
                                children: [" ", x]
                            })
                        }), s.jsxs("div", {
                            className: "flex items-center gap-1",
                            children: [s.jsx(As, {
                                className: "text-yellow-500"
                            }), " ", m.value, " ", s.jsxs("span", {
                                className: "text-gray-500",
                                children: ["(", m.reviews, ")"]
                            })]
                        })]
                    }), s.jsx("div", {
                        className: "flex py-2 justify-center h-[40px]",
                        children: s.jsx("span", {
                            className: "text-center text-sm font-medium",
                            children: r ? b : g
                        })
                    }), (r && w.effectivePrice || d) > 0 && s.jsxs(s.Fragment, {
                        children: [s.jsx("div", {
                            className: "!mt-3",
                            children: s.jsx("span", {
                                className: "bg-theme text-[10px] text-white px-2 py-[2px] rounded-2xl",
                                children: r ? w.saleType : h
                            })
                        }), s.jsx("div", {
                            children: s.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [s.jsxs("span", {
                                    className: "font-semibold whitespace-nowrap",
                                    children: [r ? w.currency : l, " ", r ? w.effectivePrice : d]
                                }), s.jsxs("span", {
                                    className: "text-[10px] bg-green-50 text-green-600 px-1 rounded-lg whitespace-nowrap",
                                    children: ["SAVE ", s.jsx("span", {
                                        className: "max-xl:hidden",
                                        children: r ? w.currency : l
                                    }), " ", r ? w.discount : c]
                                })]
                            })
                        })]
                    }), !((r && w.effectivePrice || d) > 0) && s.jsx("div", {
                        className: "flex justify-center mt-3",
                        children: s.jsx("span", {
                            className: "bg-theme text-white text-xs text-center font-light px-3 py-1 rounded-full shadow-md hover:bg-theme-dark",
                            children: "Call Now for Best Offer"
                        })
                    })]
                })]
            })
        })
    }, n)
}
  , Ea = Cc("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , yt = f.forwardRef( ({className: e, variant: t, size: a, asChild: n=!1, ...i}, r) => {
    const o = n ? kc : "button";
    return s.jsx(o, {
        className: R(Ea({
            variant: t,
            size: a,
            className: e
        })),
        ref: r,
        ...i
    })
}
);
yt.displayName = "Button";
const _l = f.createContext(null);
function bt() {
    const e = f.useContext(_l);
    if (!e)
        throw new Error("useCarousel must be used within a <Carousel />");
    return e
}
const $e = f.forwardRef( ({orientation: e="horizontal", opts: t, setApi: a, plugins: n, className: i, children: r, ...o}, l) => {
    const [c,u] = yd({
        ...t,
        axis: e === "horizontal" ? "x" : "y"
    }, n)
      , [d,m] = f.useState(!1)
      , [h,g] = f.useState(!1)
      , x = f.useCallback(p => {
        p && (m(p.canScrollPrev()),
        g(p.canScrollNext()))
    }
    , [])
      , w = f.useCallback( () => {
        u == null || u.scrollPrev()
    }
    , [u])
      , b = f.useCallback( () => {
        u == null || u.scrollNext()
    }
    , [u])
      , y = f.useCallback(p => {
        p.key === "ArrowLeft" ? (p.preventDefault(),
        w()) : p.key === "ArrowRight" && (p.preventDefault(),
        b())
    }
    , [w, b]);
    return f.useEffect( () => {
        !u || !a || a(u)
    }
    , [u, a]),
    f.useEffect( () => {
        if (u)
            return x(u),
            u.on("reInit", x),
            u.on("select", x),
            () => {
                u == null || u.off("select", x)
            }
    }
    , [u, x]),
    s.jsx(_l.Provider, {
        value: {
            carouselRef: c,
            api: u,
            opts: t,
            orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
            scrollPrev: w,
            scrollNext: b,
            canScrollPrev: d,
            canScrollNext: h
        },
        children: s.jsx("div", {
            ref: l,
            onKeyDownCapture: y,
            className: R("relative", i),
            role: "region",
            "aria-roledescription": "carousel",
            ...o,
            children: r
        })
    })
}
);
$e.displayName = "Carousel";
const He = f.forwardRef( ({className: e, ...t}, a) => {
    const {carouselRef: n, orientation: i} = bt();
    return s.jsx("div", {
        ref: n,
        className: "overflow-hidden",
        children: s.jsx("div", {
            ref: a,
            className: R("flex", i === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
            ...t
        })
    })
}
);
He.displayName = "CarouselContent";
const We = f.forwardRef( ({className: e, ...t}, a) => {
    const {orientation: n} = bt();
    return s.jsx("div", {
        ref: a,
        role: "group",
        "aria-roledescription": "slide",
        className: R("min-w-0 shrink-0 grow-0 basis-full", n === "horizontal" ? "pl-4" : "pt-4", e),
        ...t
    })
}
);
We.displayName = "CarouselItem";
const Ol = f.forwardRef( ({className: e, variant: t="outline", size: a="icon", ...n}, i) => {
    const {orientation: r, scrollPrev: o, canScrollPrev: l} = bt();
    return s.jsxs(yt, {
        ref: i,
        variant: t,
        size: a,
        className: R("absolute  h-8 w-8 rounded-full", r === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", e),
        disabled: !l,
        onClick: o,
        ...n,
        children: [s.jsx(Yc, {
            className: "h-4 w-4"
        }), s.jsx("span", {
            className: "sr-only",
            children: "Previous slide"
        })]
    })
}
);
Ol.displayName = "CarouselPrevious";
const zl = f.forwardRef( ({className: e, variant: t="outline", size: a="icon", ...n}, i) => {
    const {orientation: r, scrollNext: o, canScrollNext: l} = bt();
    return s.jsxs(yt, {
        ref: i,
        variant: t,
        size: a,
        className: R("absolute h-8 w-8 rounded-full", r === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", e),
        disabled: !l,
        onClick: o,
        ...n,
        children: [s.jsx(Kc, {
            className: "h-4 w-4"
        }), s.jsx("span", {
            className: "sr-only",
            children: "Next slide"
        })]
    })
}
);
zl.displayName = "CarouselNext";
const at = ({className: e, skipSlidesInView: t, arrowSize: a=10, ...n}) => {
    const {scrollNext: i, canScrollNext: r, api: o} = bt()
      , l = () => {
        o && (t ? o.scrollTo(o.slidesInView().pop()) : i())
    }
    ;
    return s.jsxs("button", {
        className: R("bg-white/50 backdrop-blur-sm hover:scale-110 active:scale-100 transition-all rounded-full border border-gray-200 absolute top-1/2 -translate-y-1/2 right-3 max-sm:right-2", !r && "opacity-50 hover:scale-100 invisible", e),
        disabled: !r,
        onClick: l,
        ...n,
        children: [s.jsx(qr, {
            strokeWidth: 1,
            className: `size-[${a}px] text-gray-600 max-sm:size-8`
        }), s.jsx("span", {
            className: "sr-only",
            children: "Next slide"
        })]
    })
}
;
at.displayName = "CarouselNextCustom";
const nt = ({className: e, skipSlidesInView: t, arrowSize: a=10, ...n}) => {
    const {scrollPrev: i, canScrollPrev: r, api: o} = bt()
      , l = () => {
        o && (t ? o.scrollTo(Math.max(o.selectedScrollSnap() - o.slidesInView().length, 0)) : i())
    }
    ;
    return s.jsxs("button", {
        className: R("bg-white/50 backdrop-blur-sm hover:scale-110 active:scale-100 transition-all rounded-full border border-gray-200 p-2 absolute top-1/2 -translate-y-1/2 left-3 max-sm:left-2", !r && "opacity-50 hover:scale-100 invisible", e),
        disabled: !r,
        onClick: l,
        ...n,
        children: [s.jsx(Ur, {
            strokeWidth: 1,
            className: `size-[${a}px] text-gray-600 max-sm:size-8`
        }), s.jsx("span", {
            className: "sr-only",
            children: "Previous slide"
        })]
    })
}
;
nt.displayName = "CarouselPreviousCustom";
const Be = ({heading: e, data: t, animateOnce: a=!1, viewAllRoute: n, reAnimate: i, asCarousel: r=!0, loading: o=!1, isPackage: l}) => {
    if (o)
        return s.jsx(ie, {
            message: "Fetching Travel Details...",
            forError: !0,
            heightAuto: !0
        });
    if (t.length === 0)
        return s.jsxs("div", {
            className: "flex flex-col justify-between items-center mb-5",
            children: [e && s.jsx("h2", {
                className: "font-semibold text-center text-2xl max-sm:text-xl",
                children: e
            }), s.jsx(ie, {
                message: "Coming soon!",
                forError: !0,
                heightAuto: !0
            })]
        });
    var c = "grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-sm:grid-cols-2 max-[385px]:grid-cols-1 gap-3 justify-center";
    return t.length < 4 && (c = "grid md:grid-cols-3 max-sm:grid-cols-2 max-[485px]:grid-cols-1 gap-3 justify-center"),
    r ? s.jsxs("div", {
        children: [s.jsxs("div", {
            className: "flex justify-between items-center mb-5",
            children: [e && s.jsx("h2", {
                className: "font-semibold text-2xl max-sm:text-xl",
                children: e
            }), n && s.jsxs(H, {
                className: "text-xs uppercase font-semibold flex items-center gap-1 p-2 text-gray-500 group hover:bg-gray-100 hover:text-black rounded-md",
                to: `${n}`,
                children: [s.jsx("span", {
                    children: "see more"
                }), s.jsx("span", {
                    className: "inline-block w-0 group-hover:w-4 transition-all duration-300 ease-in-out overflow-hidden",
                    children: s.jsx($n, {
                        size: "16"
                    })
                })]
            })]
        }), s.jsxs($e, {
            className: "w-full",
            opts: {
                dragFree: !0
            },
            children: [s.jsx(He, {
                className: "-ml-3",
                children: t == null ? void 0 : t.map( (u, d) => s.jsx(We, {
                    className: "md:basis-1/4 lg:basis-1/5 pl-3 max-sm:basis-auto ",
                    children: s.jsx(xr, {
                        data: u,
                        index: d,
                        animateOnce: a,
                        reAnimate: i,
                        asCarousel: !0
                    })
                }, d))
            }), s.jsx(nt, {
                skipSlidesInView: !0,
                arrowSize: 12,
                className: "p-2.5 -left-4 xl:-left-6 max-sm:hidden"
            }), s.jsx(at, {
                skipSlidesInView: !0,
                arrowSize: 12,
                className: "p-2.5 -right-4 xl:-right-6 max-sm:hidden"
            })]
        })]
    }) : s.jsxs("div", {
        children: [s.jsxs("div", {
            className: "flex justify-center items-center mb-5",
            children: [e && s.jsx("h2", {
                className: "font-semibold text-2xl max-sm:text-xl",
                children: e
            }), n && s.jsxs(H, {
                className: "text-xs uppercase font-semibold flex items-center gap-1 p-2 text-gray-500 group hover:bg-gray-100 hover:text-black rounded-md",
                to: `${n}`,
                children: [s.jsx("span", {
                    children: "see more"
                }), s.jsx("span", {
                    className: "inline-block w-0 group-hover:w-4 transition-all duration-300 ease-in-out overflow-hidden",
                    children: s.jsx($n, {
                        size: "16"
                    })
                })]
            })]
        }), s.jsx("div", {
            className: c,
            children: t == null ? void 0 : t.map( (u, d) => s.jsx(xr, {
                data: u,
                index: d,
                animateOnce: a,
                isPackage: l
            }, d))
        })]
    })
}
  , l0 = () => {
    const {data: e, loading: t, error: a} = xe(c => c.allDestinations)
      , n = [...new Set(e.map(c => c.location))]
      , [i,r] = f.useState(n[0])
      , o = f.useMemo( () => e.filter(c => c.location === i))
      , l = (c="") => c.split(" ").join("-").toLocaleLowerCase();
    return f.useEffect( () => {
        r(n[0])
    }
    , []),
    s.jsx("div", {
        className: "bg-gray-100 py-10",
        children: s.jsxs(ge, {
            children: [s.jsx("h3", {
                className: "text-sm font-bold text-gray-500",
                children: "DEALS"
            }), s.jsx("h2", {
                className: "text-4xl max-sm:text-3xl font-bold",
                children: "Popular Holidays"
            }), s.jsxs($e, {
                opts: {
                    dragFree: !0
                },
                className: "w-[98%] xl:w-[75%]",
                children: [s.jsx(He, {
                    className: "-ml-10",
                    children: n.map( (c, u) => s.jsx(We, {
                        className: "basis-auto pl-10 py-2.5",
                        children: s.jsxs("button", {
                            className: "relative",
                            onClick: () => r(c),
                            children: [s.jsx("span", {
                                className: `transition-opacity font-medium ${i === c ? "opacity-100" : "opacity-60"}`,
                                children: c
                            }), i === c && s.jsx(V.span, {
                                layoutId: "active-country",
                                className: "absolute left-0 right-0 -bottom-1.5 h-[2px] bg-rose-500"
                            })]
                        })
                    }, u))
                }), s.jsx(nt, {
                    skipSlidesInView: !0,
                    arrowSize: 8,
                    style: {
                        left: -17
                    },
                    className: "p-1"
                }), s.jsx(at, {
                    skipSlidesInView: !0,
                    arrowSize: 8,
                    style: {
                        right: -17
                    },
                    className: "p-1"
                })]
            }), s.jsx("div", {
                children: s.jsx(Be, {
                    data: o,
                    viewAllRoute: `/${l(i)}`,
                    heading: " ",
                    reAnimate: i,
                    animateOnce: !0,
                    loading: t
                })
            })]
        })
    })
}
  , c0 = () => s.jsxs("div", {
    children: [s.jsx(d0, {}), s.jsx("br", {
        className: "max-sm:hidden"
    }), s.jsxs("main", {
        children: [s.jsx("div", {
            className: "my-3"
        }), s.jsx(Hf, {}), s.jsx("div", {
            className: "my-16"
        }), s.jsx(l0, {})]
    }), s.jsx("div", {
        className: "my-20"
    })]
})
  , d0 = () => s.jsxs("div", {
    children: [s.jsxs("div", {
        className: "h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center saturate-150 flex justify-center items-center relative overflow-hidden transition-all duration-500 hover:saturate-200 group before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-20 before:z-0",
        style: {
            backgroundImage: "url('https://www.legsgo.com/assets/webp/attractions/dubai/hero_bg.webp')",
            boxShadow: "inset 0 0 100px rgba(0,0,0,0.5)"
        },
        children: [s.jsx("img", {
            src: "https://www.legsgo.com/assets/png/hero_title.png",
            loading: "lazy",
            alt: "Travel Beyond Boundaries - Hero Title",
            className: "max-h-full max-w-full w-auto h-auto sm:h-64 md:h-full object-contain transform hover:scale-110 transition-transform duration-500 ease-in-out z-10"
        }), s.jsxs("div", {
            className: "absolute bottom-0 left-0 right-0 px-4 py-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 to-transparent z-20",
            children: [s.jsx("h2", {
                className: "text-lg sm:text-xl md:text-2xl font-bold mb-2",
                children: "Discover Amazing Destinations"
            }), s.jsx("p", {
                className: "text-sm sm:text-base md:text-lg",
                children: "Explore the world with our curated travel experiences"
            })]
        })]
    }), s.jsx("div", {
        className: "bg-gray-100 py-16",
        children: s.jsx("div", {
            className: "w-[min(1200px,100%-2rem)] mx-auto flex items-center justify-center flex-wrap gap-8",
            children: [{
                id: 1,
                icon: "flexible.svg",
                text: "Flexible Itineraries",
                content: "Tailored itineraries that adapt to your preferences and pace."
            }, {
                id: 2,
                icon: "package.svg",
                text: "All-Inclusive Packages",
                content: "Comprehensive packages with everything included for your ease."
            }, {
                id: 3,
                icon: "iata.svg",
                text: "Accredited By IATA",
                content: "Ensuring adherence to International Safety & Operational Standards"
            }, {
                id: 4,
                icon: "expert.svg",
                text: "Expert Local Insights",
                content: "Get the best local tips from experienced guides and insiders."
            }, {
                id: 5,
                icon: "24-hour-icon.svg",
                text: "24x7 Support",
                content: "Round-the-clock assistance for a stress-free experience."
            }].map(e => s.jsx("div", {
                className: "w-[210px] h-[150px] perspective-[1000px] group",
                children: s.jsxs("div", {
                    className: "relative w-full h-full transform transition-transform duration-700 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]",
                    children: [s.jsx("div", {
                        className: "absolute w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1e1b4b] via-[#2d2a5a] to-[#1e1b4b] text-white rounded-xl p-6 shadow-lg shadow-indigo-900/20 [backface-visibility:hidden]",
                        children: s.jsxs("div", {
                            className: "flex flex-col items-center justify-center text-center gap-4",
                            children: [s.jsx("div", {
                                className: "w-16 h-16 rounded-full bg-white/20 flex items-center justify-center p-3 backdrop-blur-sm",
                                children: s.jsx("img", {
                                    src: `https://www.legsgo.com/assets/svg/${e.icon}`,
                                    loading: "lazy",
                                    alt: e.text,
                                    className: "w-10 h-10 invert object-contain"
                                })
                            }), s.jsx("span", {
                                className: "font-semibold text-lg",
                                children: e.text
                            })]
                        })
                    }), s.jsx("div", {
                        className: "absolute w-full h-full bg-gradient-to-br from-white to-gray-100 text-[#1a1750] p-6 rounded-xl flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-lg shadow-indigo-900/20",
                        children: s.jsxs("div", {
                            className: "text-center",
                            children: [s.jsx("h3", {
                                className: "font-base mb-2",
                                children: e.text
                            }), s.jsx("p", {
                                className: "text-sm",
                                children: e.content
                            })]
                        })
                    })]
                })
            }, e.id))
        })
    })]
});
function rt(e) {
    return G({
        attr: {
            version: "1.2",
            baseProfile: "tiny",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"
            },
            child: []
        }]
    })(e)
}
const u0 = ({onClose: e, license: t}) => s.jsx(V.div, {
    animate: {
        opacity: [0, 1]
    },
    className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center !mt-0",
    onClick: e,
    children: s.jsxs(V.div, {
        animate: {
            scale: [.8, 1]
        },
        className: "bg-white rounded-lg p-8 w-11/12 md:w-1/2 max-h-[90dvh] overflow-y-auto relative tracking-wide py-3 custom-scrollbar",
        onClick: a => a.stopPropagation(),
        children: [s.jsx("button", {
            className: "absolute top-2 right-2 text-gray-600",
            onClick: e,
            children: s.jsx(t0, {
                size: 20
            })
        }), s.jsx("h2", {
            className: "text-3xl text-center font-semibold mb-4 theme-fill underline",
            children: t.type
        }), s.jsxs("div", {
            className: "text-sm text-justify leading-relaxed",
            children: [s.jsx("p", {
                children: t.description1
            }), s.jsx("p", {
                className: "my-4",
                children: t.description2
            }), s.jsx("p", {
                children: t.description3
            }), s.jsx("p", {
                className: "my-4",
                children: t.description4
            }), s.jsx("p", {
                children: t.description5
            })]
        })]
    })
});
function m0(e) {
    return G({
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "line",
            attr: {
                x1: "5",
                y1: "12",
                x2: "19",
                y2: "12"
            },
            child: []
        }]
    })(e)
}
function h0(e) {
    return G({
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "line",
            attr: {
                x1: "12",
                y1: "5",
                x2: "12",
                y2: "19"
            },
            child: []
        }, {
            tag: "line",
            attr: {
                x1: "5",
                y1: "12",
                x2: "19",
                y2: "12"
            },
            child: []
        }]
    })(e)
}
function p0(e) {
    return G({
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "circle",
            attr: {
                cx: "11",
                cy: "11",
                r: "8"
            },
            child: []
        }, {
            tag: "line",
            attr: {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
            },
            child: []
        }]
    })(e)
}
const f0 = [{
    icon: "https://www.legsgo.com/assets/svg/business-plan.svg",
    heading: "A Business Plan",
    paragraph: "A comprehensive business plan activity, products services, marketing strategies, and financial forecasts is required."
}, {
    icon: "https://www.legsgo.com/assets/svg/lease-agreement.svg",
    heading: "A Virtual Lease Agreement",
    paragraph: "The lease agreement should be for a commercial property that is suitable for the business's activities. However, in most cases, physical space is not required, so a virtual address is generally recommended."
}, {
    icon: "https://www.legsgo.com/assets/svg/essential.svg",
    heading: "Essential Documents",
    paragraph: `1) Proof of identity and residence for all shareholders or partners
            2) Lease agreement for the business premises
            3) Business plan
            4) Memorandum of Association (MOA) (Only for subsidiary companies)
            5) Proof of capital`
}, {
    icon: "https://www.legsgo.com/assets/svg/trade.svg",
    heading: "A Trade Name",
    paragraph: "The trade name is the name that will be used by business to conduct its activities."
}]
  , x0 = () => s.jsxs("div", {
    className: "w-[min(1300px,100%-2rem)] mx-auto",
    children: [s.jsxs("div", {
        className: "mb-16",
        children: [s.jsxs("h2", {
            className: "md:text-3xl text-2xl font-medium",
            children: ["Requirements For Obtaining A Business ", s.jsx("br", {}), " ", s.jsx("span", {
                className: "theme-fill",
                children: "Trade License In Dubai, UAE"
            })]
        }), s.jsxs("p", {
            className: "my-5 opacity-80",
            children: ["The requirements for obtaining a trade license in the UAE vary depending on the type of license and the emirate in which the business is located. ", s.jsx("br", {}), " However, some general requirements include:", " "]
        })]
    }), s.jsx("div", {
        className: "grid md:grid-cols-2 gap-8 w-[95%] mx-auto",
        children: f0.map(e => s.jsxs("div", {
            className: "flex gap-4 items-start",
            children: [s.jsx("span", {
                className: "inline-block size-12 aspect-square rounded-full overflow-hidden shrink-0 bg-white/20",
                children: s.jsx("img", {
                    src: e.icon || "https://www.legsgo.com/assets/logo-light.png",
                    alt: e.heading,
                    loading: "lazy",
                    className: "size-full object-full"
                })
            }), s.jsxs("div", {
                className: "space-y-1.5",
                children: [s.jsx("h2", {
                    className: "font-medium md:text-xl text-base",
                    children: e.heading
                }), s.jsx("p", {
                    className: "whitespace-break-spaces opacity-80 text-sm md:text-base",
                    children: e.paragraph
                })]
            })]
        }, e.heading))
    })]
})
  , _t = e => typeof e == "number" && !isNaN(e)
  , tt = e => typeof e == "string"
  , le = e => typeof e == "function"
  , cs = e => tt(e) || le(e) ? e : null
  , Da = e => f.isValidElement(e) || tt(e) || le(e) || _t(e);
function g0(e, t, a) {
    a === void 0 && (a = 300);
    const {scrollHeight: n, style: i} = e;
    requestAnimationFrame( () => {
        i.minHeight = "initial",
        i.height = n + "px",
        i.transition = `all ${a}ms`,
        requestAnimationFrame( () => {
            i.height = "0",
            i.padding = "0",
            i.margin = "0",
            setTimeout(t, a)
        }
        )
    }
    )
}
function Is(e) {
    let {enter: t, exit: a, appendPosition: n=!1, collapse: i=!0, collapseDuration: r=300} = e;
    return function(o) {
        let {children: l, position: c, preventExitTransition: u, done: d, nodeRef: m, isIn: h, playToast: g} = o;
        const x = n ? `${t}--${c}` : t
          , w = n ? `${a}--${c}` : a
          , b = f.useRef(0);
        return f.useLayoutEffect( () => {
            const y = m.current
              , p = x.split(" ")
              , v = N => {
                N.target === m.current && (g(),
                y.removeEventListener("animationend", v),
                y.removeEventListener("animationcancel", v),
                b.current === 0 && N.type !== "animationcancel" && y.classList.remove(...p))
            }
            ;
            y.classList.add(...p),
            y.addEventListener("animationend", v),
            y.addEventListener("animationcancel", v)
        }
        , []),
        f.useEffect( () => {
            const y = m.current
              , p = () => {
                y.removeEventListener("animationend", p),
                i ? g0(y, d, r) : d()
            }
            ;
            h || (u ? p() : (b.current = 1,
            y.className += ` ${w}`,
            y.addEventListener("animationend", p)))
        }
        , [h]),
        E.createElement(E.Fragment, null, l)
    }
}
function gr(e, t) {
    return e != null ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t
    } : {}
}
const ae = new Map;
let Ot = [];
const Aa = new Set
  , v0 = e => Aa.forEach(t => t(e))
  , Fl = () => ae.size > 0;
function $l(e, t) {
    var a;
    if (t)
        return !((a = ae.get(t)) == null || !a.isToastActive(e));
    let n = !1;
    return ae.forEach(i => {
        i.isToastActive(e) && (n = !0)
    }
    ),
    n
}
function Hl(e, t) {
    Da(e) && (Fl() || Ot.push({
        content: e,
        options: t
    }),
    ae.forEach(a => {
        a.buildToast(e, t)
    }
    ))
}
function vr(e, t) {
    ae.forEach(a => {
        t != null && t != null && t.containerId ? (t == null ? void 0 : t.containerId) === a.id && a.toggle(e, t == null ? void 0 : t.id) : a.toggle(e, t == null ? void 0 : t.id)
    }
    )
}
function y0(e) {
    const {subscribe: t, getSnapshot: a, setProps: n} = f.useRef(function(r) {
        const o = r.containerId || 1;
        return {
            subscribe(l) {
                const c = function(d, m, h) {
                    let g = 1
                      , x = 0
                      , w = []
                      , b = []
                      , y = []
                      , p = m;
                    const v = new Map
                      , N = new Set
                      , k = () => {
                        y = Array.from(v.values()),
                        N.forEach(C => C())
                    }
                      , P = C => {
                        b = C == null ? [] : b.filter(j => j !== C),
                        k()
                    }
                      , D = C => {
                        const {toastId: j, onOpen: A, updateId: M, children: _} = C.props
                          , B = M == null;
                        C.staleId && v.delete(C.staleId),
                        v.set(j, C),
                        b = [...b, C.props.toastId].filter(O => O !== C.staleId),
                        k(),
                        h(gr(C, B ? "added" : "updated")),
                        B && le(A) && A(f.isValidElement(_) && _.props)
                    }
                    ;
                    return {
                        id: d,
                        props: p,
                        observe: C => (N.add(C),
                        () => N.delete(C)),
                        toggle: (C, j) => {
                            v.forEach(A => {
                                j != null && j !== A.props.toastId || le(A.toggle) && A.toggle(C)
                            }
                            )
                        }
                        ,
                        removeToast: P,
                        toasts: v,
                        clearQueue: () => {
                            x -= w.length,
                            w = []
                        }
                        ,
                        buildToast: (C, j) => {
                            if ((ye => {
                                let {containerId: ue, toastId: fe, updateId: be} = ye;
                                const qe = ue ? ue !== d : d !== 1
                                  , wt = v.has(fe) && be == null;
                                return qe || wt
                            }
                            )(j))
                                return;
                            const {toastId: A, updateId: M, data: _, staleId: B, delay: O} = j
                              , F = () => {
                                P(A)
                            }
                              , Q = M == null;
                            Q && x++;
                            const S = {
                                ...p,
                                style: p.toastStyle,
                                key: g++,
                                ...Object.fromEntries(Object.entries(j).filter(ye => {
                                    let[ue,fe] = ye;
                                    return fe != null
                                }
                                )),
                                toastId: A,
                                updateId: M,
                                data: _,
                                closeToast: F,
                                isIn: !1,
                                className: cs(j.className || p.toastClassName),
                                bodyClassName: cs(j.bodyClassName || p.bodyClassName),
                                progressClassName: cs(j.progressClassName || p.progressClassName),
                                autoClose: !j.isLoading && (T = j.autoClose,
                                W = p.autoClose,
                                T === !1 || _t(T) && T > 0 ? T : W),
                                deleteToast() {
                                    const ye = v.get(A)
                                      , {onClose: ue, children: fe} = ye.props;
                                    le(ue) && ue(f.isValidElement(fe) && fe.props),
                                    h(gr(ye, "removed")),
                                    v.delete(A),
                                    x--,
                                    x < 0 && (x = 0),
                                    w.length > 0 ? D(w.shift()) : k()
                                }
                            };
                            var T, W;
                            S.closeButton = p.closeButton,
                            j.closeButton === !1 || Da(j.closeButton) ? S.closeButton = j.closeButton : j.closeButton === !0 && (S.closeButton = !Da(p.closeButton) || p.closeButton);
                            let q = C;
                            f.isValidElement(C) && !tt(C.type) ? q = f.cloneElement(C, {
                                closeToast: F,
                                toastProps: S,
                                data: _
                            }) : le(C) && (q = C({
                                closeToast: F,
                                toastProps: S,
                                data: _
                            }));
                            const pe = {
                                content: q,
                                props: S,
                                staleId: B
                            };
                            p.limit && p.limit > 0 && x > p.limit && Q ? w.push(pe) : _t(O) ? setTimeout( () => {
                                D(pe)
                            }
                            , O) : D(pe)
                        }
                        ,
                        setProps(C) {
                            p = C
                        },
                        setToggle: (C, j) => {
                            v.get(C).toggle = j
                        }
                        ,
                        isToastActive: C => b.some(j => j === C),
                        getSnapshot: () => y
                    }
                }(o, r, v0);
                ae.set(o, c);
                const u = c.observe(l);
                return Ot.forEach(d => Hl(d.content, d.options)),
                Ot = [],
                () => {
                    u(),
                    ae.delete(o)
                }
            },
            setProps(l) {
                var c;
                (c = ae.get(o)) == null || c.setProps(l)
            },
            getSnapshot() {
                var l;
                return (l = ae.get(o)) == null ? void 0 : l.getSnapshot()
            }
        }
    }(e)).current;
    n(e);
    const i = f.useSyncExternalStore(t, a, a);
    return {
        getToastToRender: function(r) {
            if (!i)
                return [];
            const o = new Map;
            return e.newestOnTop && i.reverse(),
            i.forEach(l => {
                const {position: c} = l.props;
                o.has(c) || o.set(c, []),
                o.get(c).push(l)
            }
            ),
            Array.from(o, l => r(l[0], l[1]))
        },
        isToastActive: $l,
        count: i == null ? void 0 : i.length
    }
}
function b0(e) {
    const [t,a] = f.useState(!1)
      , [n,i] = f.useState(!1)
      , r = f.useRef(null)
      , o = f.useRef({
        start: 0,
        delta: 0,
        removalDistance: 0,
        canCloseOnClick: !0,
        canDrag: !1,
        didMove: !1
    }).current
      , {autoClose: l, pauseOnHover: c, closeToast: u, onClick: d, closeOnClick: m} = e;
    var h, g;
    function x() {
        a(!0)
    }
    function w() {
        a(!1)
    }
    function b(v) {
        const N = r.current;
        o.canDrag && N && (o.didMove = !0,
        t && w(),
        o.delta = e.draggableDirection === "x" ? v.clientX - o.start : v.clientY - o.start,
        o.start !== v.clientX && (o.canCloseOnClick = !1),
        N.style.transform = `translate3d(${e.draggableDirection === "x" ? `${o.delta}px, var(--y)` : `0, calc(${o.delta}px + var(--y))`},0)`,
        N.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance)))
    }
    function y() {
        document.removeEventListener("pointermove", b),
        document.removeEventListener("pointerup", y);
        const v = r.current;
        if (o.canDrag && o.didMove && v) {
            if (o.canDrag = !1,
            Math.abs(o.delta) > o.removalDistance)
                return i(!0),
                e.closeToast(),
                void e.collapseAll();
            v.style.transition = "transform 0.2s, opacity 0.2s",
            v.style.removeProperty("transform"),
            v.style.removeProperty("opacity")
        }
    }
    (g = ae.get((h = {
        id: e.toastId,
        containerId: e.containerId,
        fn: a
    }).containerId || 1)) == null || g.setToggle(h.id, h.fn),
    f.useEffect( () => {
        if (e.pauseOnFocusLoss)
            return document.hasFocus() || w(),
            window.addEventListener("focus", x),
            window.addEventListener("blur", w),
            () => {
                window.removeEventListener("focus", x),
                window.removeEventListener("blur", w)
            }
    }
    , [e.pauseOnFocusLoss]);
    const p = {
        onPointerDown: function(v) {
            if (e.draggable === !0 || e.draggable === v.pointerType) {
                o.didMove = !1,
                document.addEventListener("pointermove", b),
                document.addEventListener("pointerup", y);
                const N = r.current;
                o.canCloseOnClick = !0,
                o.canDrag = !0,
                N.style.transition = "none",
                e.draggableDirection === "x" ? (o.start = v.clientX,
                o.removalDistance = N.offsetWidth * (e.draggablePercent / 100)) : (o.start = v.clientY,
                o.removalDistance = N.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent) / 100)
            }
        },
        onPointerUp: function(v) {
            const {top: N, bottom: k, left: P, right: D} = r.current.getBoundingClientRect();
            v.nativeEvent.type !== "touchend" && e.pauseOnHover && v.clientX >= P && v.clientX <= D && v.clientY >= N && v.clientY <= k ? w() : x()
        }
    };
    return l && c && (p.onMouseEnter = w,
    e.stacked || (p.onMouseLeave = x)),
    m && (p.onClick = v => {
        d && d(v),
        o.canCloseOnClick && u()
    }
    ),
    {
        playToast: x,
        pauseToast: w,
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: p
    }
}
function w0(e) {
    let {delay: t, isRunning: a, closeToast: n, type: i="default", hide: r, className: o, style: l, controlledProgress: c, progress: u, rtl: d, isIn: m, theme: h} = e;
    const g = r || c && u === 0
      , x = {
        ...l,
        animationDuration: `${t}ms`,
        animationPlayState: a ? "running" : "paused"
    };
    c && (x.transform = `scaleX(${u})`);
    const w = Pe("Toastify__progress-bar", c ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${h}`, `Toastify__progress-bar--${i}`, {
        "Toastify__progress-bar--rtl": d
    })
      , b = le(o) ? o({
        rtl: d,
        type: i,
        defaultClassName: w
    }) : Pe(w, o)
      , y = {
        [c && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: c && u < 1 ? null : () => {
            m && n()
        }
    };
    return E.createElement("div", {
        className: "Toastify__progress-bar--wrp",
        "data-hidden": g
    }, E.createElement("div", {
        className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${h} Toastify__progress-bar--${i}`
    }), E.createElement("div", {
        role: "progressbar",
        "aria-hidden": g ? "true" : "false",
        "aria-label": "notification timer",
        className: b,
        style: x,
        ...y
    }))
}
let j0 = 1;
const Wl = () => "" + j0++;
function N0(e) {
    return e && (tt(e.toastId) || _t(e.toastId)) ? e.toastId : Wl()
}
function Dt(e, t) {
    return Hl(e, t),
    t.toastId
}
function ws(e, t) {
    return {
        ...t,
        type: t && t.type || e,
        toastId: N0(t)
    }
}
function Qt(e) {
    return (t, a) => Dt(t, ws(e, a))
}
function $(e, t) {
    return Dt(e, ws("default", t))
}
$.loading = (e, t) => Dt(e, ws("default", {
    isLoading: !0,
    autoClose: !1,
    closeOnClick: !1,
    closeButton: !1,
    draggable: !1,
    ...t
})),
$.promise = function(e, t, a) {
    let n, {pending: i, error: r, success: o} = t;
    i && (n = tt(i) ? $.loading(i, a) : $.loading(i.render, {
        ...a,
        ...i
    }));
    const l = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null
    }
      , c = (d, m, h) => {
        if (m == null)
            return void $.dismiss(n);
        const g = {
            type: d,
            ...l,
            ...a,
            data: h
        }
          , x = tt(m) ? {
            render: m
        } : m;
        return n ? $.update(n, {
            ...g,
            ...x
        }) : $(x.render, {
            ...g,
            ...x
        }),
        h
    }
      , u = le(e) ? e() : e;
    return u.then(d => c("success", o, d)).catch(d => c("error", r, d)),
    u
}
,
$.success = Qt("success"),
$.info = Qt("info"),
$.error = Qt("error"),
$.warning = Qt("warning"),
$.warn = $.warning,
$.dark = (e, t) => Dt(e, ws("default", {
    theme: "dark",
    ...t
})),
$.dismiss = function(e) {
    (function(t) {
        var a;
        if (Fl()) {
            if (t == null || tt(a = t) || _t(a))
                ae.forEach(n => {
                    n.removeToast(t)
                }
                );
            else if (t && ("containerId"in t || "id"in t)) {
                const n = ae.get(t.containerId);
                n ? n.removeToast(t.id) : ae.forEach(i => {
                    i.removeToast(t.id)
                }
                )
            }
        } else
            Ot = Ot.filter(n => t != null && n.options.toastId !== t)
    }
    )(e)
}
,
$.clearWaitingQueue = function(e) {
    e === void 0 && (e = {}),
    ae.forEach(t => {
        !t.props.limit || e.containerId && t.id !== e.containerId || t.clearQueue()
    }
    )
}
,
$.isActive = $l,
$.update = function(e, t) {
    t === void 0 && (t = {});
    const a = ( (n, i) => {
        var r;
        let {containerId: o} = i;
        return (r = ae.get(o || 1)) == null ? void 0 : r.toasts.get(n)
    }
    )(e, t);
    if (a) {
        const {props: n, content: i} = a
          , r = {
            delay: 100,
            ...n,
            ...t,
            toastId: t.toastId || e,
            updateId: Wl()
        };
        r.toastId !== e && (r.staleId = e);
        const o = r.render || i;
        delete r.render,
        Dt(o, r)
    }
}
,
$.done = e => {
    $.update(e, {
        progress: 1
    })
}
,
$.onChange = function(e) {
    return Aa.add(e),
    () => {
        Aa.delete(e)
    }
}
,
$.play = e => vr(!0, e),
$.pause = e => vr(!1, e);
const k0 = typeof window < "u" ? f.useLayoutEffect : f.useEffect
  , es = e => {
    let {theme: t, type: a, isLoading: n, ...i} = e;
    return E.createElement("svg", {
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${a})`,
        ...i
    })
}
  , aa = {
    info: function(e) {
        return E.createElement(es, {
            ...e
        }, E.createElement("path", {
            d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
        }))
    },
    warning: function(e) {
        return E.createElement(es, {
            ...e
        }, E.createElement("path", {
            d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
        }))
    },
    success: function(e) {
        return E.createElement(es, {
            ...e
        }, E.createElement("path", {
            d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
        }))
    },
    error: function(e) {
        return E.createElement(es, {
            ...e
        }, E.createElement("path", {
            d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
        }))
    },
    spinner: function() {
        return E.createElement("div", {
            className: "Toastify__spinner"
        })
    }
}
  , C0 = e => {
    const {isRunning: t, preventExitTransition: a, toastRef: n, eventHandlers: i, playToast: r} = b0(e)
      , {closeButton: o, children: l, autoClose: c, onClick: u, type: d, hideProgressBar: m, closeToast: h, transition: g, position: x, className: w, style: b, bodyClassName: y, bodyStyle: p, progressClassName: v, progressStyle: N, updateId: k, role: P, progress: D, rtl: C, toastId: j, deleteToast: A, isIn: M, isLoading: _, closeOnClick: B, theme: O} = e
      , F = Pe("Toastify__toast", `Toastify__toast-theme--${O}`, `Toastify__toast--${d}`, {
        "Toastify__toast--rtl": C
    }, {
        "Toastify__toast--close-on-click": B
    })
      , Q = le(w) ? w({
        rtl: C,
        position: x,
        type: d,
        defaultClassName: F
    }) : Pe(F, w)
      , S = function(pe) {
        let {theme: ye, type: ue, isLoading: fe, icon: be} = pe
          , qe = null;
        const wt = {
            theme: ye,
            type: ue
        };
        return be === !1 || (le(be) ? qe = be({
            ...wt,
            isLoading: fe
        }) : f.isValidElement(be) ? qe = f.cloneElement(be, wt) : fe ? qe = aa.spinner() : (bc => bc in aa)(ue) && (qe = aa[ue](wt))),
        qe
    }(e)
      , T = !!D || !c
      , W = {
        closeToast: h,
        type: d,
        theme: O
    };
    let q = null;
    return o === !1 || (q = le(o) ? o(W) : f.isValidElement(o) ? f.cloneElement(o, W) : function(pe) {
        let {closeToast: ye, theme: ue, ariaLabel: fe="close"} = pe;
        return E.createElement("button", {
            className: `Toastify__close-button Toastify__close-button--${ue}`,
            type: "button",
            onClick: be => {
                be.stopPropagation(),
                ye(be)
            }
            ,
            "aria-label": fe
        }, E.createElement("svg", {
            "aria-hidden": "true",
            viewBox: "0 0 14 16"
        }, E.createElement("path", {
            fillRule: "evenodd",
            d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
        })))
    }(W)),
    E.createElement(g, {
        isIn: M,
        done: A,
        position: x,
        preventExitTransition: a,
        nodeRef: n,
        playToast: r
    }, E.createElement("div", {
        id: j,
        onClick: u,
        "data-in": M,
        className: Q,
        ...i,
        style: b,
        ref: n
    }, E.createElement("div", {
        ...M && {
            role: P
        },
        className: le(y) ? y({
            type: d
        }) : Pe("Toastify__toast-body", y),
        style: p
    }, S != null && E.createElement("div", {
        className: Pe("Toastify__toast-icon", {
            "Toastify--animate-icon Toastify__zoom-enter": !_
        })
    }, S), E.createElement("div", null, l)), q, E.createElement(w0, {
        ...k && !T ? {
            key: `pb-${k}`
        } : {},
        rtl: C,
        theme: O,
        delay: c,
        isRunning: t,
        isIn: M,
        closeToast: h,
        hide: m,
        type: d,
        style: N,
        className: v,
        controlledProgress: T,
        progress: D || 0
    })))
}
  , Rs = function(e, t) {
    return t === void 0 && (t = !1),
    {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t
    }
}
  , S0 = Is(Rs("bounce", !0));
Is(Rs("slide", !0));
Is(Rs("zoom"));
Is(Rs("flip"));
const T0 = {
    position: "top-right",
    transition: S0,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: "touch",
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light"
};
function Nn(e) {
    let t = {
        ...T0,
        ...e
    };
    const a = e.stacked
      , [n,i] = f.useState(!0)
      , r = f.useRef(null)
      , {getToastToRender: o, isToastActive: l, count: c} = y0(t)
      , {className: u, style: d, rtl: m, containerId: h} = t;
    function g(w) {
        const b = Pe("Toastify__toast-container", `Toastify__toast-container--${w}`, {
            "Toastify__toast-container--rtl": m
        });
        return le(u) ? u({
            position: w,
            rtl: m,
            defaultClassName: b
        }) : Pe(b, cs(u))
    }
    function x() {
        a && (i(!0),
        $.play())
    }
    return k0( () => {
        if (a) {
            var w;
            const b = r.current.querySelectorAll('[data-in="true"]')
              , y = 12
              , p = (w = t.position) == null ? void 0 : w.includes("top");
            let v = 0
              , N = 0;
            Array.from(b).reverse().forEach( (k, P) => {
                const D = k;
                D.classList.add("Toastify__toast--stacked"),
                P > 0 && (D.dataset.collapsed = `${n}`),
                D.dataset.pos || (D.dataset.pos = p ? "top" : "bot");
                const C = v * (n ? .2 : 1) + (n ? 0 : y * P);
                D.style.setProperty("--y", `${p ? C : -1 * C}px`),
                D.style.setProperty("--g", `${y}`),
                D.style.setProperty("--s", "" + (1 - (n ? N : 0))),
                v += D.offsetHeight,
                N += .025
            }
            )
        }
    }
    , [n, c, a]),
    E.createElement("div", {
        ref: r,
        className: "Toastify",
        id: h,
        onMouseEnter: () => {
            a && (i(!1),
            $.pause())
        }
        ,
        onMouseLeave: x
    }, o( (w, b) => {
        const y = b.length ? {
            ...d
        } : {
            ...d,
            pointerEvents: "none"
        };
        return E.createElement("div", {
            className: g(w),
            style: y,
            key: `container-${w}`
        }, b.map(p => {
            let {content: v, props: N} = p;
            return E.createElement(C0, {
                ...N,
                stacked: a,
                collapseAll: x,
                isIn: l(N.toastId, N.containerId),
                style: N.style,
                key: `toast-${N.key}`
            }, v)
        }
        ))
    }
    ))
}
const P0 = "https://www.legsgo.com/assets/webp/business-setup/bg-business-support.webp"
  , M0 = [{
    type: "Commercial License",
    description1: "A Commercial Trade License in the UAE is essential for companies involved in the buying and selling of goods. This license is mandatory for businesses that wish to engage in trading activities, whether within the UAE or internationally. Obtaining a commercial trade license provides businesses with the legal framework to operate seamlessly and tap into the UAE's lucrative market.",
    description2: "The scope of business activities under a UAE commercial trade license is extensive. It encompasses various sectors such as imports and exports, product trading, rental services, brokerage firms, logistics companies, and real estate enterprises. For instance, a business engaged in the import and export of goods can benefit from the UAE's strategic location and advanced infrastructure to reach global markets. Similarly, brokerage firms and logistics companies can take advantage of the country's robust financial and transport systems to thrive.",
    description3: "Having a commercial trade license also opens doors to numerous opportunities within the UAE's vibrant economy. The UAE's business-friendly environment, coupled with its strategic position as a global trade hub, provides a solid foundation for growth and expansion. With a commercial trade license, businesses can leverage the UAE's world-class seaports and airports, benefiting from unparalleled connectivity to over 17 countries.",
    description4: "In essence, a commercial trade license is not just a regulatory requirement but a gateway to tapping into the UAE's vast economic potential. It ensures that businesses operate legally and efficiently while enjoying the myriad benefits of being part of one of the world's most dynamic and rapidly growing markets.",
    img: "https://images.unsplash.com/photo-1444653389962-8149286c578a?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}, {
    type: "Professional License",
    description1: "Professional Trade Licenses in the UAE are essential for service-oriented companies, providing the legal framework necessary to operate within the country. These licenses are particularly attractive due to their provision of 100% ownership to foreign investors, a significant advantage for entrepreneurs seeking to establish a foothold in the UAE market. However, it is important to note that while full ownership is granted, the process requires the involvement of a local service agent to navigate and complete the necessary formalities and documentation.",
    description2: "Obtaining a professional trade license in the UAE opens the door to a diverse range of business activities. Companies can engage in management consultancies, offering strategic advice and operational improvements to businesses across various sectors. Law firms can provide legal services and expertise, ensuring compliance with local and international laws. Marketing and design agencies can deliver creative solutions to enhance brand presence and engagement, while auditing and accounting firms offer critical financial services that ensure transparency and accuracy in financial reporting.",
    description3: "Moreover, the professional trade license is not limited to these services alone. It encompasses a broad spectrum of professional services, including but not limited to, educational services, healthcare services, IT consulting, and other specialized services. This flexibility allows businesses to diversify their offerings and adapt to market demands.",
    description4: "The UAE’s business-friendly environment, coupled with its strategic location and robust infrastructure, makes it an ideal destination for service-oriented companies. The professional trade license ensures that businesses can operate legally and efficiently, leveraging the country's advanced facilities and connectivity to global markets.",
    description5: "In conclusion, a professional trade license in the UAE is a critical asset for service-oriented companies aiming to establish and grow their presence in the region. By facilitating 100% foreign ownership and covering a wide range of professional activities, it offers a unique opportunity for entrepreneurs to thrive in one of the world’s most dynamic business environments. Whether you are starting a management consultancy, a law firm, a marketing agency, or an auditing company, the professional trade license provides the necessary legal and operational foundation to succeed in the UAE.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}, {
    type: "Industrial License",
    description1: "An Industrial Trade License is an indispensable requirement for businesses involved in industrial and manufacturing activities across Dubai and the broader UAE. This license not only mandates a physical office presence within the country but also ensures compliance with local regulations governing industrial operations. It serves as a gateway for companies looking to establish a solid foothold in the region's thriving manufacturing sector.",
    description2: "The scope of activities permitted under an Industrial Trade License is broad and encompasses diverse areas such as manufacturing of various products, casing, furnishing, and packaging. This comprehensive coverage allows businesses to engage in a wide range of industrial processes, catering to both domestic and international markets. Whether your enterprise focuses on mass production, specialized manufacturing, or innovative product development, securing an Industrial Trade License is crucial for legal operation and market penetration.",
    description3: "By obtaining an Industrial Trade License, companies gain access to Dubai and the UAE's robust infrastructure, strategic global connectivity, and investor-friendly policies. These advantages not only facilitate seamless business operations but also support sustainable growth and expansion opportunities. From establishing manufacturing facilities to accessing international markets, the Industrial Trade License paves the way for businesses to harness the region's economic potential and maximize their competitive advantage.",
    description4: "Ensure your business complies with regulatory requirements and positions itself for success in the dynamic landscape of Dubai and the UAE's industrial sector. Obtain an Industrial Trade License today and embark on a journey towards manufacturing excellence and operational efficiency in one of the world's leading business destinations.",
    img: "https://images.unsplash.com/photo-1489410342162-b4b300a0bb15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}]
  , E0 = [{
    title: "Determine Your Legal Structure",
    description: "Determine the legal structure that best suits your business, such as sole proprietorship, partnership, or corporation."
}, {
    title: "Specify Your Business Activities",
    description: "Provide a detailed and comprehensive description of the specific business activities, services, or products your company intends to engage in. This includes outlining the scope of operations and the industry sectors targeted by your business strategy."
}, {
    title: "Complete The Application Form Thoroughly",
    description: "Fill out all sections of the application form accurately and comprehensively. Ensure that all required fields are properly completed, providing clear and detailed information about your business entity, ownership structure, proposed activities, and other pertinent details."
}, {
    title: "Obtain Necessary Additional Approval",
    description: "Secure any additional approvals or permits mandated by regulatory authorities or industry-specific regulations. This may include environmental clearances, health and safety certifications, or specialized permits depending on the nature of your business operations."
}, {
    title: "Gather The Required Documents",
    description: "Collect all essential documentation to support your license application. This typically includes proof of identity and residency for shareholders or partners, a valid lease agreement for your business premises, a detailed business plan outlining financial projections and marketing strategies, Memorandum of Association (MOA) for subsidiary companies, and proof of required capital investment."
}, {
    title: "Submit Your Completed Application",
    description: "Ensure that your application package is complete and accurately compiled before submission. Double-check all documents and forms to avoid delays or issues during the review process. Submit your application through the designated channels or online portals provided by the relevant licensing authorities."
}, {
    title: "Pay License Fees And Associated Costs",
    description: "Settle the applicable fees associated with the business license application, processing, and registration. Be prepared to cover initial fees as well as any renewal fees required to maintain your business license in good standing."
}, {
    title: "Select A Suitable And Distinctive Business Name",
    description: "Choose a unique and memorable name that aligns with your brand identity and business objectives. Ensure that the chosen name complies with UAE regulations regarding business naming conventions and is available for registration through a thorough name availability check."
}]
  , D0 = () => {
    const [e,t] = f.useState(!1)
      , [a,n] = f.useState(null)
      , [i,r] = f.useState(null)
      , [o,l] = f.useState({
        fullName: "",
        email: "",
        phone: "",
        message: ""
    })
      , [c,u] = f.useState({})
      , d = b => {
        const {name: y, value: p} = b.target;
        l({
            ...o,
            [y]: p
        })
    }
      , m = () => {
        const b = {};
        return o.fullName || (b.fullName = "Full name is required"),
        o.email || (b.email = "Email is required"),
        /\S+@\S+\.\S+/.test(o.email) || (b.email = "Email is invalid"),
        o.phone || (b.phone = "Phone number is required"),
        o.message || (b.message = "Message is required"),
        b
    }
      , h = async b => {
        b.preventDefault();
        const y = m();
        if (Object.keys(y).length === 0)
            try {
                await Ve.post("https://www.sathuragiriyaan.tech/api/travels/submit-contactUs", {
                    ...o
                }),
                $.success("Thank you for choosing LEGSGO Holidays, We will get back to you shortly!", {
                    autoClose: 5e3
                }),
                l({
                    fullName: "",
                    email: "",
                    phone: "",
                    message: ""
                })
            } catch (p) {
                p.response ? $.error(p.response.data.error || p.response.data.message, {
                    autoClose: !1
                }) : $.error(p.message, {
                    autoClose: !1
                })
            }
        else
            u(y)
    }
      , g = () => {
        setTimeout( () => {
            const b = document.getElementById("next-section");
            b && b.scrollIntoView({
                behavior: "smooth"
            })
        }
        , 100)
    }
      , x = b => {
        n(b),
        t(!0)
    }
      , w = b => {
        r(i === b ? null : b)
    }
    ;
    return s.jsxs(s.Fragment, {
        children: [s.jsxs("div", {
            className: "space-y-2 overflow-x-hidden",
            children: [s.jsx("section", {
                children: s.jsxs("div", {
                    className: "relative min-h-96",
                    children: [s.jsx("figure", {
                        className: "w-full",
                        children: s.jsx("img", {
                            src: P0,
                            alt: "Business Setup",
                            loading: "lazy",
                            className: "size-full h-[100vh] md:h-[60vh] object-cover [transform:scaleX(-1)]"
                        })
                    }), s.jsxs("div", {
                        className: "md:absolute inset-0 md:flex md:items-start justify-between w-[min(1300px,100%-2rem)] mx-auto md:pt-6",
                        children: [s.jsxs("div", {
                            className: "backdrop-blur-md absolute top-[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/4 p-4 text-center md:static md:transform-none md:p-0",
                            children: [s.jsxs("p", {
                                className: "text-white bg-opacity-50 text-2xl sm:text-3xl md:text-white md:text-4xl tracking-wide",
                                children: ["Business Setup simplified with", " ", s.jsx("span", {
                                    className: "font-medium theme-fill text-3xl sm:text-4xl md:text-5xl",
                                    children: "LegsGo"
                                })]
                            }), s.jsx("p", {
                                className: "text-white text-start md:block hidden bg-opacity-50 text-lg sm:text-xl md:text-white md:text-xl tracking-wide mt-3",
                                children: "Experience the joy of seeing your dreams come true"
                            })]
                        }), s.jsx("div", {
                            className: "absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-[#87735B]/50 md:relative md:top-0 md:left-0 md:transform-none md:w-1/3 md:p-4 tracking-wide rounded-2xl w-3/4",
                            children: s.jsxs("form", {
                                onSubmit: h,
                                children: [s.jsx("h2", {
                                    className: "text-2xl text-white",
                                    children: "Let's Connect."
                                }), s.jsxs("div", {
                                    className: `${c.fullName} ? "my-4" : "my-7"}`,
                                    children: [s.jsx("input", {
                                        type: "text",
                                        name: "fullName",
                                        value: o.fullName,
                                        onChange: d,
                                        placeholder: "Type full name",
                                        className: `w-full border-b ${c.fullName ? "border-red-800 py-1" : "border-white py-2"} text-gray-900 bg-transparent px-3 placeholder-white outline-none focus:placeholder-opacity-100`
                                    }), c.fullName && s.jsx("p", {
                                        className: "text-red-900 text-sm mt-0.5",
                                        children: c.fullName
                                    })]
                                }), s.jsxs("div", {
                                    className: `${c.email ? "my-4" : "my-7"}`,
                                    children: [s.jsx("input", {
                                        type: "text",
                                        name: "email",
                                        value: o.email,
                                        onChange: d,
                                        placeholder: "Email address",
                                        className: `w-full border-b ${c.email ? "border-red-800 py-1" : "border-white py-2"} text-gray-900 bg-transparent px-3 placeholder-white outline-none focus:placeholder-opacity-100`
                                    }), c.email && s.jsx("p", {
                                        className: "text-red-900 text-sm mt-0.5",
                                        children: c.email
                                    })]
                                }), s.jsxs("div", {
                                    children: [s.jsx("input", {
                                        type: "number",
                                        name: "phone",
                                        value: o.phone,
                                        onChange: d,
                                        placeholder: "Phone number",
                                        className: `w-full border-b ${c.phone ? "border-red-800 py-1" : "border-white py-2"} text-gray-900 bg-transparent px-3 placeholder-white outline-none focus:placeholder-opacity-100`
                                    }), c.phone && s.jsx("p", {
                                        className: "text-red-900 text-sm mt-0.5",
                                        children: c.phone
                                    })]
                                }), s.jsxs("div", {
                                    className: `${c.message ? "my-4" : "my-7"}`,
                                    children: [s.jsx("textarea", {
                                        type: "text",
                                        name: "message",
                                        value: o.message,
                                        onChange: d,
                                        placeholder: "Type your message",
                                        className: `w-full border-b ${c.message ? "border-red-800 py-1" : "border-white py-2"} text-gray-900 bg-transparent px-3 placeholder-white outline-none focus:placeholder-opacity-100`
                                    }), c.message && s.jsx("p", {
                                        className: "text-red-900 text-sm mt-0.5",
                                        children: c.message
                                    })]
                                }), s.jsx("div", {
                                    className: "flex justify-end items-end",
                                    children: s.jsx("button", {
                                        type: "submit",
                                        className: "bg-white rounded-full py-1.5 px-7 text-[#87735B] font-bold",
                                        children: "Submit"
                                    })
                                })]
                            })
                        })]
                    }), s.jsx("div", {
                        className: "absolute animate-bounce bottom-3 left-0 right-0 md:flex hidden justify-center items-center",
                        children: s.jsx("span", {
                            onClick: g,
                            className: "w-12 h-12 cursor-pointer rounded-full bg-[#87735B] text-white flex justify-center items-center",
                            children: s.jsx(Qf, {})
                        })
                    })]
                })
            }), s.jsx("section", {
                id: "next-section",
                className: "w-[min(1300px,100%-2rem)] mx-auto md:py-16 py-8  overflow-hidden",
                children: s.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-5 ",
                    children: [s.jsx(se, {
                        direction: "ltr",
                        delay: .3,
                        children: s.jsxs("div", {
                            className: "flex flex-col justify-start items-start tracking-wide",
                            children: [s.jsxs("h2", {
                                className: "md:text-3xl text-2xl font-medium",
                                children: ["Establish Your Company In ", s.jsx("br", {}), " ", s.jsx("span", {
                                    className: "theme-fill",
                                    children: "Dubai, UAE"
                                })]
                            }), s.jsx("p", {
                                className: "my-7 leading-relaxed opacity-90 text-sm md:text-base",
                                children: "The United Arab Emirates is poised for substantial economic growth, increased investments, and enhanced trade relations with allied partners. This economic prosperity makes the UAE an ideal location for new business ventures, attracting millions of entrepreneurs annually."
                            }), s.jsx("p", {
                                className: "leading-relaxed opacity-90 text-sm md:text-base",
                                children: "While setting up a business in the UAE can seem overwhelming due to its complex legal framework, COMPANY Business Setup, Dubai’s leading company formation expert, is here to help. Before you second-guess your decision, let us guide you through the process, ensuring a seamless and successful business establishment in the UAE."
                            })]
                        })
                    }), s.jsx(se, {
                        direction: "rtl",
                        children: s.jsx("figure", {
                            className: "h-[50vh]",
                            children: s.jsx("img", {
                                className: "w-full h-full rounded-2xl object-cover object-center",
                                loading: "lazy",
                                alt: "Business Setup",
                                src: "https://images.unsplash.com/photo-1551541711-489a256cd2a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            })
                        })
                    })]
                })
            }), s.jsx("section", {
                className: "bg-gray-100  tracking-wide",
                children: s.jsxs("div", {
                    className: "md:py-16 py-8 w-[min(1300px,100%-2rem)] mx-auto",
                    children: [s.jsxs("div", {
                        children: [s.jsxs("h2", {
                            className: "md:text-3xl text-2xl font-medium",
                            children: [s.jsx("span", {
                                className: "theme-fill",
                                children: "BENEFITS:"
                            }), " Harness The Opportunities In The UAE"]
                        }), s.jsxs("div", {
                            className: "my-8",
                            children: [s.jsx("p", {
                                className: "leading-relaxed opacity-80 text-sm md:text-base",
                                children: "The United Arab Emirates stands as one of the wealthiest nations in the Gulf, attracting millions of expatriates each year who seek to build their lives and businesses in this thriving region. In a strategic move to diversify its economy, the UAE has reduced its reliance on oil reserves, focusing instead on sectors such as industrialization, manufacturing, trade, and tourism."
                            }), s.jsx("p", {
                                className: "mt-4 leading-relaxed opacity-80 text-sm md:text-base",
                                children: "Setting up a new business in the UAE offers numerous advantages, including a robust economic environment, strategic geographic location, and supportive government policies. Discover the unparalleled benefits of establishing your business in this dynamic and rapidly growing market."
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "grid md:grid-cols-2 gap-5 my-5 h-full w-full overflow-hidden",
                        children: [s.jsx(se, {
                            direction: "btt",
                            from: "10%",
                            children: s.jsx("figure", {
                                className: "h-full w-full",
                                children: s.jsx("img", {
                                    className: "rounded-2xl object-cover object-center h-96 w-full",
                                    loading: "lazy",
                                    alt: "Business Setup",
                                    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                })
                            })
                        }), s.jsx(se, {
                            direction: "ttb",
                            from: "10%",
                            children: s.jsxs("div", {
                                className: "flex flex-col justify-start items-start h-full w-full",
                                children: [s.jsxs("div", {
                                    className: "flex items-center",
                                    children: [s.jsx("div", {
                                        children: s.jsx("span", {
                                            className: "w-6 h-6 rounded-full bg-theme-0 text-white flex justify-center items-center",
                                            children: s.jsx(rt, {})
                                        })
                                    }), s.jsx("div", {
                                        className: "ml-3",
                                        children: s.jsx("p", {
                                            className: "md:text-xl",
                                            children: "Flexible regulatory framework"
                                        })
                                    })]
                                }), s.jsxs("div", {
                                    className: "flex items-center my-7",
                                    children: [s.jsx("div", {
                                        children: s.jsx("span", {
                                            className: "w-6 h-6 rounded-full bg-theme-1  text-white flex justify-center items-center",
                                            children: s.jsx(rt, {})
                                        })
                                    }), s.jsx("div", {
                                        className: "ml-3",
                                        children: s.jsx("p", {
                                            className: "md:text-xl",
                                            children: "Investor-friendly government policies"
                                        })
                                    })]
                                }), s.jsxs("div", {
                                    className: "flex items-center",
                                    children: [s.jsx("div", {
                                        children: s.jsx("span", {
                                            className: "w-6 h-6 rounded-full bg-theme-2  text-white flex justify-center items-center",
                                            children: s.jsx(rt, {})
                                        })
                                    }), s.jsx("div", {
                                        className: "ml-3",
                                        children: s.jsx("p", {
                                            className: "md:text-xl",
                                            children: "Liberal tax incentives, including 0% personal income tax"
                                        })
                                    })]
                                }), s.jsxs("div", {
                                    className: "flex items-center my-7",
                                    children: [s.jsx("div", {
                                        children: s.jsx("span", {
                                            className: "w-6 h-6 rounded-full bg-theme-3  text-white flex justify-center items-center",
                                            children: s.jsx(rt, {})
                                        })
                                    }), s.jsx("div", {
                                        className: "ml-3",
                                        children: s.jsx("p", {
                                            className: "md:text-xl",
                                            children: "Strategic global connectivity to over 170 countries"
                                        })
                                    })]
                                }), s.jsxs("div", {
                                    className: "flex items-center",
                                    children: [s.jsx("div", {
                                        children: s.jsx("span", {
                                            className: "w-6 h-6 rounded-full bg-theme-4  text-white flex justify-center items-center",
                                            children: s.jsx(rt, {})
                                        })
                                    }), s.jsx("div", {
                                        className: "ml-3",
                                        children: s.jsx("p", {
                                            className: "md:text-xl",
                                            children: "Access to world-class seaports and airports"
                                        })
                                    })]
                                }), s.jsxs("div", {
                                    className: "flex items-center mt-7",
                                    children: [s.jsx("div", {
                                        children: s.jsx("span", {
                                            className: "w-6 h-6 rounded-full bg-theme-5 text-white flex justify-center items-center",
                                            children: s.jsx(rt, {})
                                        })
                                    }), s.jsx("div", {
                                        className: "ml-3",
                                        children: s.jsx("p", {
                                            className: "md:text-xl",
                                            children: "Ease of business setup and modern infrastructure"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            }), s.jsxs("section", {
                className: "tracking-wide md:py-16 py-8 w-[min(1300px,100%-2rem)] mx-auto",
                children: [s.jsxs("div", {
                    children: [s.jsx("h2", {
                        className: "md:text-3xl text-2xl font-medium theme-fill",
                        children: "Overview"
                    }), s.jsx("p", {
                        className: "my-5 leading-relaxed text-sm md:text-base",
                        children: "Obtaining a Business Trade License is crucial for operating legally in Dubai. The process requires securing approvals from government authorities and the economic department, along with having all company formation documents cleared by various UAE agencies within a specified timeframe. For first-time investors, this process can be both complex and expensive."
                    }), s.jsx("p", {
                        className: "leading-relaxed text-sm md:text-base",
                        children: "With extensive experience and a commitment to supporting business growth, Legsgo Corporate Business Setup acts as your one-stop solution for establishing and succeeding in Dubai's dynamic business environment. We guide you in selecting the most suitable license for your business, assist with acquiring the license, and provide timely reminders for license renewals. Additionally, if trade license cancellation becomes necessary, Legsgo Holidays Business Setup expedites the process to minimize fines and reduce costs."
                    })]
                }), s.jsxs("div", {
                    className: "text-center md:text-3xl text-2xl my-5",
                    children: [s.jsx("h2", {
                        className: "my-5 font-light",
                        children: "Types Of Company Licenses"
                    }), s.jsx("div", {
                        className: "grid md:grid-cols-3 gap-5 px-8 mt-6",
                        children: M0.map( (b, y) => s.jsx(se, {
                            direction: "btt",
                            delay: .3,
                            children: s.jsxs("figure", {
                                className: "relative h-full w-full flex flex-col md:flex-col items-center overflow-hidden group rounded-xl",
                                children: [s.jsxs("div", {
                                    className: "relative h-full w-full",
                                    children: [s.jsx("img", {
                                        className: "rounded-xl object-cover object-center h-full w-full brightness-75 group-hover:scale-105 transition-transform duration-500",
                                        src: b.img,
                                        alt: b.type,
                                        loading: "lazy"
                                    }), s.jsx("button", {
                                        onClick: () => x(b),
                                        className: "bg-theme text-base bg-opacity-75 py-2 px-4 rounded-full text-white absolute bottom-5 left-1/2 transform -translate-x-1/2",
                                        children: "Know More"
                                    })]
                                }), s.jsx("div", {
                                    className: "flex justify-center items-center mt-3",
                                    children: s.jsx("button", {
                                        className: "py-2 px-4 rounded-full font-semibold text-xl",
                                        children: b.type
                                    })
                                })]
                            }, y)
                        }, y))
                    })]
                })]
            }), s.jsx("section", {
                className: "bg-gray-100 tracking-wide py-10",
                children: s.jsx(x0, {})
            }), s.jsxs("section", {
                className: "tracking-wide md:py-16 py-8 w-[min(1300px,100%-2rem)] mx-auto",
                children: [s.jsxs("h2", {
                    className: "md:text-3xl text-2xl font-medium mb-10",
                    children: ["How To Obtain A Trade License In ", s.jsx("br", {}), s.jsx("span", {
                        className: "theme-fill",
                        children: "Dubai, UAE"
                    })]
                }), s.jsxs("div", {
                    className: "md:flex justify-between items-start px-5",
                    children: [s.jsx("div", {
                        className: "md:w-1/2",
                        children: s.jsx(se, {
                            direction: "ltr",
                            delay: .2,
                            children: s.jsx("figure", {
                                className: "h-[76.5vh] overflow-hidden group rounded-2xl",
                                children: s.jsx("img", {
                                    className: "w-full h-full object-cover rounded-2xl  group-hover:scale-105 transition-transform duration-500",
                                    loading: "lazy",
                                    alt: "Business Setup",
                                    src: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                })
                            })
                        })
                    }), s.jsx("div", {
                        className: "md:w-1/2",
                        children: s.jsx(se, {
                            direction: "rtl",
                            delay: .2,
                            children: s.jsx("div", {
                                className: "md:ml-16 mt-6 md:mt-0",
                                children: E0.map( (b, y) => s.jsxs("div", {
                                    className: `flex ${i === y ? "items-start" : "items-center"} border border-[#87735B] p-4 mb-4 rounded-xl`,
                                    children: [s.jsxs("div", {
                                        children: [s.jsx("span", {
                                            onClick: () => w(y),
                                            className: `w-10 h-10 rounded-full bg-theme-${y % 6} text-white flex justify-center items-center`,
                                            children: i === y ? s.jsx(m0, {
                                                className: "cursor-pointer"
                                            }) : s.jsx(h0, {
                                                className: "cursor-pointer"
                                            })
                                        }), " "]
                                    }), s.jsxs("div", {
                                        className: "ml-5",
                                        children: [y + 1, ".", " ", s.jsx("span", {
                                            className: `ml-1 ${i === y ? "text-xl" : "text-base"}`,
                                            children: b.title
                                        }), s.jsx(ft, {
                                            children: i === y && s.jsx(V.div, {
                                                initial: {
                                                    height: 0,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    height: "auto",
                                                    opacity: 1
                                                },
                                                exit: {
                                                    height: 0,
                                                    opacity: 0
                                                },
                                                transition: {
                                                    duration: .3
                                                },
                                                className: "overflow-hidden mt-2 text-gray-700 text-sm leading-relaxed",
                                                children: s.jsx("p", {
                                                    children: b.description
                                                })
                                            })
                                        })]
                                    })]
                                }, y))
                            })
                        })
                    })]
                })]
            }), e && s.jsx(u0, {
                onClose: () => t(!1),
                license: a
            })]
        }), s.jsx(Nn, {})]
    })
}
;
function A0(e) {
    return G({
        attr: {
            viewBox: "0 0 1024 1024"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0 1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263-12.512-12.496-32.768-12.496-45.28 0z"
            },
            child: []
        }]
    })(e)
}
const Wt = ({slides: e=[1, 2, 3, 5], aspectRatio: t="5/1", noControls: a=!1, delay: n=3e3}) => {
    const [i,r] = f.useState(null)
      , [o,l] = f.useState(0)
      , [c,u] = f.useState(0);
    return f.useEffect( () => {
        i && (u(i.scrollSnapList().length),
        l(i.selectedScrollSnap() + 1),
        i.on("select", () => {
            l(i.selectedScrollSnap() + 1)
        }
        ))
    }
    , [i]),
    s.jsxs($e, {
        setApi: r,
        opts: {
            align: "start",
            loop: !0
        },
        plugins: [bd({
            delay: n,
            stopOnInteraction: !1,
            stopOnMouseEnter: !0
        })],
        children: [s.jsx(He, {
            className: "-ml-0",
            children: e.map( (d, m) => s.jsx(We, {
                className: "pl-0",
                children: s.jsx(H, {
                    to: d.link || "#",
                    className: "block w-full min-h-40 bg-gray-200",
                    style: {
                        aspectRatio: t
                    },
                    children: s.jsx("img", {
                        className: "size-full object-cover",
                        loading: "lazy",
                        src: d.banner || d,
                        alt: d.title || "LegsGo Holidays"
                    })
                })
            }, m))
        }), !a && s.jsxs(s.Fragment, {
            children: [s.jsx("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2",
                children: s.jsx("div", {
                    className: "flex gap-2",
                    children: Array.from({
                        length: c
                    }).map( (d, m) => s.jsx("button", {
                        onClick: () => i.scrollTo(m),
                        className: "h-[3px] w-6 sm:h-1 sm:w-8 inline-block rounded-md bg-white/20 relative overflow-y-clip",
                        children: m + 1 === o && s.jsx(V.span, {
                            layoutId: "carousel_pill",
                            className: "bg-white inset-0 absolute rounded-md"
                        })
                    }, m))
                })
            }), s.jsx(nt, {
                className: "opacity-50 border-none left-5 max-sm:hidden p-2",
                arrowSize: 12
            }), s.jsx(at, {
                className: "opacity-50 border-none right-5 max-sm:hidden p-2",
                arrowSize: 12
            })]
        })]
    })
}
  , L0 = ({slides: e=Array.from({
    length: 20
}).fill( (a, n) => n), cat: t}) => s.jsxs($e, {
    className: "w-full",
    opts: {
        dragFree: !0
    },
    children: [s.jsx(He, {
        className: "-ml-5",
        children: e == null ? void 0 : e.map( (a, n) => s.jsx(We, {
            className: "basis-1/4 sm:basis-1/6 pl-5",
            children: s.jsxs(H, {
                to: `/attractions/${a.slug}`,
                className: "w-full text-center space-y-1",
                children: [s.jsx("span", {
                    className: "inline-block w-full aspect-square bg-gray-200 rounded-full overflow-hidden group",
                    children: s.jsx("img", {
                        src: a.images[0],
                        loading: "lazy",
                        alt: a.title,
                        className: "size-full object-cover group-hover:scale-105 transition-transform ease-in-out duration-300"
                    })
                }), s.jsx("span", {
                    className: "font-medium max-sm:text-sm line-clamp-1",
                    children: a.title || "LegsGo Holidays"
                })]
            })
        }, n))
    }), s.jsx(nt, {
        skipSlidesInView: !0,
        arrowSize: 12,
        className: "p-1 sm:p-2.5 -left-20 max-sm:hidden"
    }), s.jsx(at, {
        skipSlidesInView: !0,
        arrowSize: 12,
        className: "p-1 sm:p-2.5 -right-20 max-sm:hidden"
    })]
})
  , I0 = () => {
    const {data: e, loading: t, error: a} = xe(r => r.allDestinations)
      , n = [...new Set(e.map(r => r.location))]
      , i = n.reduce( (r, o) => (r[o] = e.filter(l => l.location === o),
    r), {});
    return s.jsxs("div", {
        children: [s.jsx("div", {
            className: "relative",
            children: s.jsx(Wt, {
                noControls: !0,
                delay: 3e3,
                aspectRatio: "4.2/1",
                slides: e.map(r => r.images).flat()
            })
        }), s.jsx("br", {}), s.jsx("div", {
            className: "space-y-10",
            children: n.map( (r, o) => s.jsx("div", {
                className: o % 2 === 0 ? "" : "bg-gray-100 py-10",
                children: s.jsx(ge, {
                    children: s.jsx(Be, {
                        heading: r,
                        animateOnce: !0,
                        viewAllRoute: `/${us(r)}`,
                        data: i[r],
                        asCarousel: !1
                    })
                })
            }, r))
        })]
    })
}
  , R0 = "https://www.legsgo.com/assets/Earth%20png.mp4"
  , B0 = ({heading: e, paragraph: t, image: a, layout: n, theme: i}) => {
    const [r,o] = f.useState(0)
      , [l,c] = f.useState(0)
      , [u,d] = f.useState(null)
      , m = f.useRef(null)
      , {width: h} = Al()
      , g = f.useRef(null)
      , {scrollYProgress: x} = gt({
        target: m,
        offset: ["start end", "end start"]
    })
      , {scrollYProgress: w} = gt({
        target: g,
        offset: ["start center", "end center"]
    });
    return xt(x, "change", b => o(Number(b * 180))),
    xt(w, "change", b => c(b.toFixed(1))),
    f.useEffect( () => {
        const b = () => {
            var p;
            const y = (p = m.current) == null ? void 0 : p.getBoundingClientRect().width;
            d(y)
        }
        ;
        return b(),
        window.addEventListener("resize", b),
        () => window.removeEventListener("resize", b)
    }
    , []),
    h < 992 ? s.jsx(ge, {
        children: s.jsxs("div", {
            className: R("flex items-center justify-center"),
            children: [s.jsxs("div", {
                ref: g,
                className: "grid place-content-center bg-gray-300 w-1 place-self-stretch mr-14 ml-6 relative",
                children: [s.jsx("div", {
                    className: "size-16 min-w-16 max-sm:size-12 max-sm:min-w-12 rounded-full overflow-hidden bg-white mx-auto p-2 sm:p-2.5 relative z-10",
                    children: s.jsx("div", {
                        className: `size-full ${i} rounded-full relative`,
                        children: s.jsx(ft, {
                            initial: !1,
                            children: l >= .5 && s.jsx(V.span, {
                                animate: {
                                    scale: [0, 1]
                                },
                                exit: {
                                    scale: 0,
                                    opacity: 0
                                },
                                className: `absolute inset-0 ${i} rounded-full`
                            })
                        })
                    })
                }), s.jsx("span", {
                    style: {
                        transform: `scaleY(${l})`
                    },
                    className: `absolute inset-0 ${i} origin-top transition-transform`
                })]
            }), s.jsxs("div", {
                className: "space-y-2 pb-10",
                children: [s.jsx("div", {
                    className: "basis-1/2",
                    children: s.jsx("span", {
                        ref: m,
                        className: "inline-block w-full aspect-video bg-gray-200 rounded-xl overflow-hidden bg-center bg-cover",
                        style: {
                            backgroundImage: `url(${a})`,
                            backgroundSize: `${u + r}px`
                        }
                    })
                }), s.jsxs("div", {
                    className: "basis-1/2 space-y-3 tracking-wide",
                    children: [s.jsx("h2", {
                        className: "text-2xl font-medium",
                        children: e
                    }), s.jsx("p", {
                        className: "opacity-80",
                        children: t
                    })]
                })]
            })]
        })
    }) : s.jsx(ge, {
        children: s.jsxs("div", {
            className: R("flex items-center justify-center gap-3 "),
            style: {
                flexDirection: n === "ltr" ? "row" : "row-reverse"
            },
            children: [s.jsx("div", {
                className: "basis-1/2",
                children: s.jsx("span", {
                    ref: m,
                    className: "inline-block w-full aspect-video bg-gray-200 rounded-xl overflow-hidden bg-center bg-cover",
                    style: {
                        backgroundImage: `url(${a})`,
                        backgroundSize: `${u + r}px`
                    }
                })
            }), s.jsxs("div", {
                ref: g,
                className: "grid place-content-center bg-gray-300 w-1 place-self-stretch mx-14 relative",
                children: [s.jsx("div", {
                    className: "size-16 min-w-16 rounded-full overflow-hidden bg-white mx-auto p-2.5 relative z-10",
                    children: s.jsx("div", {
                        className: `size-full ${i} rounded-full relative`,
                        children: s.jsx(ft, {
                            initial: !1,
                            children: l >= .5 && s.jsx(V.span, {
                                animate: {
                                    scale: [0, 1]
                                },
                                exit: {
                                    scale: 0,
                                    opacity: 0
                                },
                                className: `absolute inset-0 ${i} rounded-full`
                            })
                        })
                    })
                }), s.jsx("span", {
                    style: {
                        transform: `scaleY(${l})`
                    },
                    className: `absolute inset-0 ${i} origin-top transition-transform`
                })]
            }), s.jsxs("div", {
                className: "basis-1/2 space-y-3 tracking-wide",
                children: [s.jsx("h2", {
                    className: "text-2xl font-medium",
                    children: e
                }), s.jsx("p", {
                    className: "opacity-80",
                    children: t
                })]
            })]
        })
    })
}
  , V0 = () => {
    const [e,t] = f.useState(0)
      , a = f.useRef(null)
      , {scrollYProgress: n} = gt({
        target: a,
        offset: ["start end", "end start"]
    });
    return xt(n, "change", i => t(Number(i * 200))),
    s.jsxs("div", {
        className: "w-[min(1300px,100%-2rem)] mx-auto",
        children: [s.jsxs("div", {
            className: "text-start mb-7",
            children: [s.jsx("h1", {
                className: "md:text-3xl text-2xl font-medium theme-fill tracking-wide",
                children: "Our Presence"
            }), s.jsx("p", {
                className: "text-sm md:text-base tracking-wide mt-1.5 opacity-70",
                children: "Explore some of the most popular locations we offer and plan your next adventure."
            })]
        }), s.jsxs("div", {
            className: "grid gap-4 h-[650px] max-sm:h-96",
            children: [s.jsx(na, {
                imageUrl: "https://images.unsplash.com/photo-1654797589436-a4ffaa8384b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                label: "europe",
                bgColor: "bg-gray-200"
            }), s.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [s.jsx(na, {
                    imageUrl: "https://images.unsplash.com/photo-1609769682973-990c3b6695dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    label: "india",
                    bgColor: "bg-red-200"
                }), s.jsx(na, {
                    imageUrl: "https://images.unsplash.com/photo-1544092683-c0c9ebb368e5?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    label: "uae",
                    bgColor: "bg-green-200"
                })]
            })]
        })]
    })
}
  , na = ({to: e, imageUrl: t, label: a, bgColor: n}) => {
    const [i,r] = f.useState(0)
      , [o,l] = f.useState(null)
      , c = f.useRef(null)
      , {scrollYProgress: u} = gt({
        target: c,
        offset: ["start end", "end start"]
    });
    if (xt(u, "change", d => r(Number(d * 150))),
    f.useEffect( () => {
        const d = () => {
            var h;
            const m = (h = c.current) == null ? void 0 : h.getBoundingClientRect().width;
            l(m)
        }
        ;
        return d(),
        window.addEventListener("resize", d),
        () => window.removeEventListener("resize", d)
    }
    , []),
    a === "uae")
        return s.jsx("div", {
            ref: c,
            className: `inline-block ${n} rounded-xl overflow-hidden bg-cover bg-center max-md:h-[130px]`,
            style: {
                backgroundSize: `${o + i}px`,
                backgroundImage: `url('${t}')`
            },
            children: s.jsx("div", {
                className: "bg-black/20 size-full grid place-content-center",
                children: s.jsx("h3", {
                    className: "text-white text-2xl max-md:text-2xl font-semibold uppercase",
                    children: s.jsx(et, {
                        onView: !0,
                        text: a
                    })
                })
            })
        });
    if (a === "india")
        return s.jsx("div", {
            ref: c,
            className: `inline-block ${n} rounded-xl overflow-hidden bg-cover bg-center max-md:h-[130px]`,
            style: {
                backgroundSize: `${o + i}px`,
                backgroundImage: `url('${t}')`
            },
            children: s.jsx("div", {
                className: "bg-black/20 size-full grid place-content-center",
                children: s.jsx("h3", {
                    className: "text-white text-2xl max-md:text-2xl font-semibold uppercase",
                    children: s.jsx(et, {
                        onView: !0,
                        text: a
                    })
                })
            })
        });
    if (a === "europe")
        return s.jsx("div", {
            ref: c,
            className: `inline-block ${n} rounded-xl overflow-hidden bg-cover bg-center max-md:h-[130px]`,
            style: {
                backgroundSize: `${o + i}px`,
                backgroundImage: `url('${t}')`
            },
            children: s.jsx("div", {
                className: "bg-black/20 size-full grid place-content-center",
                children: s.jsx("h3", {
                    className: "text-white text-2xl max-md:text-2xl font-semibold uppercase",
                    children: s.jsx(et, {
                        onView: !0,
                        text: a
                    })
                })
            })
        })
}
  , _0 = [{
    heading: "UAE Business Setup",
    paragraph: " Seamlessly establish your business presence in Europe from the  UAE with our comprehensive business setup services. From   company registration to legal compliance, we provide end-to-end support to help you navigate the complexities of  international business expansion.",
    image: "https://images.unsplash.com/photo-1620561076380-9ea4757cef47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    layout: "ltr",
    theme: "bg-theme-2"
}, {
    heading: "Europe Business Visa",
    paragraph: "Obtain the necessary visas to conduct business in Europe with ease. Our visa services streamline the application process, ensuring timely approvals and hassle-free travel for your  business endeavours.",
    image: "https://images.unsplash.com/photo-1654163600133-452eb7274426?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2023",
    layout: "rtl",
    theme: "bg-theme-3"
}, {
    heading: "Custom Travel Itineraries",
    paragraph: "Whether you're looking for an adventure trip, a family vacation, or a romantic getaway, we create distinctive travel schedules that meet your specific needs.",
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    layout: "ltr",
    theme: "bg-theme-4"
}, {
    heading: "Bookings for Travel and Lodging",
    paragraph: "We negotiate the best deals and times for travel and lodging in accordance with your requirements and preferences.",
    image: "https://plus.unsplash.com/premium_photo-1683147639663-394fb4c3e50a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    layout: "rtl",
    theme: "bg-theme-5"
}, {
    heading: "Tours and Activities",
    paragraph: "We make sure you experience the best that each location has to offer with our carefully chosen tours and activities.",
    image: "https://images.unsplash.com/photo-1606864034826-111e5945de8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    layout: "ltr",
    theme: "bg-theme-4"
}, {
    heading: "Travel Insurance",
    paragraph: "To shield you from unanticipated circumstances while you're traveling, we offer a variety of comprehensive insurance plans.",
    image: "https://images.unsplash.com/photo-1642055509518-adafcad1d22e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    layout: "rtl",
    theme: "bg-theme-3"
}, {
    heading: "Visa Assistance",
    paragraph: "To ensure a hassle-free and seamless travel experience, our experts offer guidance and assistance with visa applications.",
    image: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    layout: "ltr",
    theme: "bg-theme-2"
}]
  , O0 = () => s.jsxs("div", {
    className: "space-y-2",
    children: [s.jsx("section", {
        className: "w-[min(1300px,100%-2rem)] mx-auto overflow-hidden tracking-wide",
        children: s.jsx("div", {
            className: "flex justify-center items-center",
            children: s.jsxs("div", {
                className: "grid md:grid-cols-2 gap-5 items-center min-h-96",
                children: [s.jsx(se, {
                    direction: "ltr",
                    delay: .2,
                    children: s.jsxs("div", {
                        className: "flex flex-col justify-center md:justify-start items-center md:items-start py-0.5 md:py-0",
                        children: [s.jsx("span", {
                            className: "theme-fill font-medium text-2xl",
                            children: "LegsGo"
                        }), s.jsx("h2", {
                            className: "md:text-4xl text-3xl font-medium py-2",
                            children: "Travel Beyond Boundaries!"
                        }), s.jsx("p", {
                            children: "Changing The Way People Travel The World"
                        })]
                    })
                }), s.jsx("div", {
                    className: "flex justify-start",
                    children: s.jsx("video", {
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        className: "w-full",
                        src: R0
                    })
                })]
            })
        })
    }), s.jsx("section", {
        className: "w-[min(1300px,100%-2rem)] mx-auto py-16 overflow-hidden",
        children: s.jsxs("div", {
            className: "grid md:grid-cols-2 gap-8",
            children: [s.jsx(se, {
                direction: "rtl",
                children: s.jsx("figure", {
                    className: "h-[60vh]",
                    children: s.jsx("img", {
                        className: "w-full h-full rounded-xl object-cover object-center",
                        loading: "lazy",
                        alt: "Office",
                        src: "https://images.unsplash.com/photo-1554232456-8727aae0cfa4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    })
                })
            }), s.jsx(se, {
                direction: "ltr",
                delay: .3,
                children: s.jsxs("div", {
                    className: "flex flex-col justify-start items-start tracking-wide",
                    children: [s.jsxs("div", {
                        children: [s.jsxs("h3", {
                            className: "md:text-3xl text-2xl font-light theme-fill",
                            children: ["About ", s.jsx("span", {
                                className: "theme-fill",
                                children: "LegsGo"
                            })]
                        }), s.jsxs("p", {
                            className: "mt-2 leading-normal",
                            children: ["With offices in Dubai and Europe, ", s.jsx("span", {
                                className: "theme-fill",
                                children: " LEGSGO "
                            }), "specializes in crafting personalized journeys through breathtaking landscapes, guided by knowledgeable locals and distinguished by exceptional service. Join us as we uncover the marvels of the world."]
                        })]
                    }), s.jsxs("div", {
                        className: "my-8",
                        children: [s.jsxs("h3", {
                            className: "md:text-3xl text-2xl font-light theme-fill",
                            children: ["Our ", s.jsx("span", {
                                children: "Mission"
                            })]
                        }), s.jsx("p", {
                            className: "mt-2 leading-normal",
                            children: "To provide individuals with unique and interesting travel experiences that enable them to travel beyond boundaries and connect with people around the world. Our mission is to make every trip as distinctive as the traveler by offering outstanding service, trustworthy advice, and unique itineraries."
                        })]
                    }), s.jsxs("div", {
                        children: [s.jsxs("h3", {
                            className: "md:text-3xl text-2xl font-light theme-fill",
                            children: ["Our ", s.jsx("span", {
                                children: "Vision"
                            })]
                        }), s.jsx("p", {
                            className: "mt-2 leading-normal",
                            children: "Encouraging Dreams and Bridging Cultural Divides Our vision is to become the leading international travel agency that revolutionizes how people view the globe. Our goal is to design exceptional experiences that stimulate curiosity, promote cross-cultural understanding, and create enduring memories."
                        })]
                    })]
                })
            })]
        })
    }), s.jsx("section", {
        className: "overflow-hidden",
        children: s.jsxs("div", {
            className: "grid md:grid-cols-2 gap-5 w-[min(1300px,100%-2rem)] mx-auto md:py-16 py-8",
            children: [s.jsx(se, {
                direction: "ltr",
                delay: .3,
                children: s.jsx("div", {
                    className: "flex flex-col justify-start items-start tracking-wide",
                    children: s.jsxs("div", {
                        children: [s.jsxs("h3", {
                            className: "text-4xl font-light theme-fill",
                            children: ["CEO ", s.jsx("span", {
                                className: "text-2xl",
                                children: "Message"
                            })]
                        }), s.jsxs("div", {
                            children: [s.jsx("p", {
                                className: "text-2xl bold theme-fill my-2",
                                children: "Dear Travel Enthusiasts,"
                            }), s.jsxs("p", {
                                className: "leading-loose",
                                children: [" ", "Welcome to ", s.jsx("span", {
                                    className: "theme-fill",
                                    children: "LEGSGO"
                                }), "! ", s.jsx("br", {}), " At ", s.jsx("span", {
                                    className: "theme-fill",
                                    children: "LegsGo"
                                }), ", we believe travel is about embarking on a journey of discovery, adventure, and unforgettable experiences. Our team creates tailored itineraries for relaxation, cultural immersion, or nature exploration. With a focus on excellence, personalized service, and sustainability, we strive to exceed expectations while positively impacting communities and environments. Whether you're a seasoned traveler or new to adventure, join us to explore beyond boundaries and create enduring memories. ", s.jsx("br", {}), "Warm regards, CEO"]
                            })]
                        })]
                    })
                })
            }), s.jsx(se, {
                direction: "rtl",
                children: s.jsx("figure", {
                    children: s.jsx("img", {
                        className: "w-full h-full rounded-2xl object-cover object-center",
                        src: "https://freepngdownload.com/image/thumb/business-man-png-free-image-download-23.png",
                        alt: "CEO",
                        loading: "lazy"
                    })
                })
            })]
        })
    }), s.jsx("section", {
        className: "overflow-hidden bg-gray-100",
        children: s.jsxs("div", {
            className: "w-[min(1300px,100%-2rem)] mx-auto py-10",
            children: [s.jsx("h2", {
                className: "text-4xl font-semibold mb-8 tracking-wide max-sm:text-3xl",
                children: "What We Offer"
            }), s.jsx("div", {
                children: _0.map( (e, t) => s.jsx(B0, {
                    ...e
                }, t))
            })]
        })
    }), s.jsx("section", {
        className: "w-[min(1300px,100%-2rem)] mx-auto py-16 overflow-hidden",
        children: s.jsx(V0, {})
    })]
});
function ia(e) {
    return G({
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
            },
            child: []
        }]
    })(e)
}
function z0(e) {
    return G({
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
            },
            child: []
        }]
    })(e)
}
function Gl(e) {
    return G({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            },
            child: []
        }]
    })(e)
}
function kn(e) {
    return G({
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
            },
            child: []
        }]
    })(e)
}
function F0(e) {
    return G({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            },
            child: []
        }]
    })(e)
}
function $0(e) {
    return G({
        attr: {
            viewBox: "0 0 384 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
            },
            child: []
        }]
    })(e)
}
function H0(e) {
    return G({
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
            },
            child: []
        }]
    })(e)
}
const W0 = [{
    lat: 13.06713,
    lng: 80.27033,
    title: "Corporate Office",
    address_line1: "Akshaya Shanthi, 2nd Floor No.201,",
    address_line2: "New Door Nos 25 & 27 / Old Door Nos 43 & 44,",
    address_line3: "Anna Salai, Chennai - 600 002.",
    country: "India."
}, {
    lat: 10.79147,
    lng: 78.69674,
    title: "Trichy (India) Office",
    address_line1: "No 1., 2nd Floor,",
    address_line2: "TVS Toll Gate, Pudukottai Road,",
    address_line3: "Trichy.",
    country: "India."
}, {
    lat: 11.00327,
    lng: 76.970279,
    title: "Coimbatore (India) Office",
    address_line1: "8A/1019, Avinashi Road,",
    address_line2: "PNR Building (Near AUDI Showroom),",
    address_line3: "Coimbatore - 641 018.",
    country: "India."
}, {
    lat: 25.2048,
    lng: 55.2708,
    title: "Dubai (UAE) Office",
    address_line1: "Dubai",
    address_line2: "United Arab Emirates",
    address_line3: "",
    country: ""
}, {
    lat: 58.74261550753375,
    lng: 24.201619189865966,
    title: "Riga (Europe) Office",
    address_line1: "Riga",
    address_line2: "Latvia",
    country: "Europe"
}, {
    lat: 44.8127174636535,
    lng: 20.478855812400536,
    title: "Stanojevića (Europe) Office",
    address_line1: "Stanojevića",
    address_line2: "Serbia",
    country: "Europe"
}]
  , G0 = () => s.jsx(Td, {
    apiKey: "AIzaSyB088sL-f2U0S-NXouf-hpFbaIC4SqxM34",
    children: s.jsx(Pd, {
        style: {
            width: "100vw",
            height: "85vh"
        },
        defaultCenter: {
            lat: 34.2048,
            lng: 76.2708
        },
        defaultZoom: 3,
        minZoom: 3,
        maxZoom: 7,
        gestureHandling: "greedy",
        disableDefaultUI: !0,
        mapId: "LegsGo-Map",
        children: W0.map( (e, t) => s.jsx(U0, {
            ...e
        }, t))
    })
})
  , U0 = ({...e}) => {
    const t = {
        lat: e.lat,
        lng: e.lng
    }
      , [a,n] = Md()
      , [i,r] = f.useState(!1)
      , o = f.useCallback( () => r(c => !c), [])
      , l = f.useCallback( () => r(!1), []);
    return s.jsxs(s.Fragment, {
        children: [s.jsx(Ed, {
            ref: a,
            position: t,
            onClick: o,
            children: s.jsx("div", {
                className: "w-5 h-5 bg-theme-4 rounded-full shadow-md border-2 border-white animate-pulse"
            })
        }), i && s.jsx(Dd, {
            anchor: n,
            onClose: l,
            headerDisabled: !1,
            headerContent: s.jsx("h3", {
                className: "text-sm theme-fill text-center font-medium",
                children: e.title
            }),
            children: s.jsx(q0, {
                ...e
            })
        })]
    })
}
  , q0 = ({...e}) => s.jsxs("div", {
    className: "flex flex-col sm:flex-row p-3 sm:p-4 bg-white rounded-lg shadow-lg animate-fadeIn",
    children: [s.jsx("img", {
        src: "/vite.png",
        width: 120,
        height: 80,
        loading: "lazy",
        className: "w-full sm:w-[130px] h-auto rounded-md sm:mr-4 mb-3 sm:mb-0 hover:scale-105 transition-transform duration-300",
        alt: "Office Location"
    }), s.jsx("div", {
        className: "flex flex-col justify-center space-y-2",
        children: s.jsxs("address", {
            className: "text-xs text-gray-600 leading-relaxed not-italic",
            children: [e.address_line1, s.jsx("br", {
                className: "hidden sm:block"
            }), e.address_line2, s.jsx("br", {
                className: "hidden sm:block"
            }), e.address_line3, s.jsx("br", {
                className: "hidden sm:block"
            }), e.country]
        })
    })]
})
  , Y0 = () => {
    const [e,t] = f.useState({
        fullName: "",
        email: "",
        phone: "",
        message: ""
    })
      , [a,n] = f.useState(!1)
      , [i,r] = f.useState({})
      , o = m => {
        const {name: h, value: g} = m.target;
        t({
            ...e,
            [h]: g
        })
    }
      , l = () => {
        const m = {};
        return e.fullName || (m.fullName = "Full name is required"),
        e.email || (m.email = "Email is required"),
        /\S+@\S+\.\S+/.test(e.email) || (m.email = "Email is invalid"),
        e.phone || (m.phone = "Phone number is required"),
        e.message || (m.message = "Message is required"),
        m
    }
      , c = async m => {
        m.preventDefault();
        const h = l();
        if (Object.keys(h).length === 0)
            try {
                await Ve.post("https://www.sathuragiriyaan.tech/api/travels/submit-contactUs", {
                    ...e
                }),
                $.success("Thank you for choosing LEGSGO Holidays, We will get back to you shortly!", {
                    autoClose: 5e3
                }),
                t({
                    fullName: "",
                    email: "",
                    phone: "",
                    message: ""
                })
            } catch (g) {
                g.response ? $.error(g.response.data.error || g.response.data.message, {
                    autoClose: !1
                }) : $.error(g.message, {
                    autoClose: !1
                })
            }
        else
            r(h)
    }
      , u = () => {
        setTimeout( () => {
            const m = document.getElementById("contact-form");
            m && m.scrollIntoView({
                behavior: "smooth"
            })
        }
        , 100)
    }
      , d = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        },
        hover: {
            scale: 1.1
        }
    };
    return s.jsxs(s.Fragment, {
        children: [s.jsxs("div", {
            className: "space-y-2 mb-5 tracking-wide overflow-x-hidden",
            children: [s.jsx(ge, {
                children: s.jsxs("div", {
                    className: "py-8",
                    children: [s.jsxs("div", {
                        children: [s.jsxs("h2", {
                            className: "md:text-2xl text-xl font-semibold",
                            children: ["It's Time To Take That ", s.jsx("br", {}), " Next Big Step."]
                        }), s.jsx("p", {
                            className: "md:text-base text-sm  my-3",
                            children: "Connect with the best travel agency & business setup services provider across the globe,"
                        }), s.jsx("button", {
                            onClick: u,
                            className: "bg-theme md:text-base text-sm  text-white px-3 py-1.5 rounded-full",
                            children: "Let's Connect"
                        })]
                    }), s.jsxs("div", {
                        className: "mt-8 md:mt-0",
                        children: [s.jsxs("h2", {
                            className: "text-center md:text-4xl text-2xl font-semibold mb-8 md:mb-0 pb-2",
                            children: ["Building Better Global", " ", s.jsx("span", {
                                className: "bg-theme bg-clip-text text-transparent",
                                children: "Connections"
                            })]
                        }), s.jsx("div", {
                            className: "flex justify-center items-center",
                            children: s.jsx(G0, {})
                        }), s.jsxs("div", {
                            className: "relative py-8 md:py-16 px-4 md:px-0",
                            children: [s.jsxs("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-gray-100/50",
                                children: [s.jsx("div", {
                                    className: "absolute inset-0 bg-[url('/srchttps://www.legsgo.com/assets/pattern.svg')] opacity-[0.02]"
                                }), s.jsx("div", {
                                    className: "absolute top-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-b from-white to-transparent"
                                }), s.jsx("div", {
                                    className: "absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-gray-100 to-transparent"
                                })]
                            }), s.jsxs("div", {
                                className: "absolute inset-0 overflow-hidden pointer-events-none",
                                children: [s.jsx("div", {
                                    className: "absolute -top-20 md:-top-40 -right-20 md:-right-40 w-40 md:w-80 h-40 md:h-80 bg-theme/5 rounded-full blur-3xl"
                                }), s.jsx("div", {
                                    className: "absolute -bottom-20 md:-bottom-40 -left-20 md:-left-40 w-40 md:w-80 h-40 md:h-80 bg-theme/5 rounded-full blur-3xl"
                                }), s.jsx("div", {
                                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-theme/5 rounded-full blur-3xl opacity-50"
                                })]
                            }), s.jsxs("div", {
                                className: "text-center relative z-10 max-w-4xl mx-auto",
                                children: [s.jsx("h2", {
                                    className: "text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-800",
                                    children: s.jsx("span", {
                                        className: "inline-block bg-gradient-to-r from-theme via-theme-2 to-theme bg-clip-text px-1",
                                        children: "We'd love to hear from you!"
                                    })
                                }), s.jsx("p", {
                                    className: "text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-6",
                                    children: "Feel free to reach out to us for any inquiries. Whether you have a question or want to visit us, our team is here to assist you."
                                })]
                            }), s.jsxs("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-16 max-w-6xl mx-auto px-4 relative z-10",
                                children: [s.jsxs(V.div, {
                                    variants: d,
                                    initial: "hidden",
                                    animate: "visible",
                                    whileHover: "hover",
                                    className: "group relative bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden",
                                    children: [s.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    }), s.jsxs("div", {
                                        className: "p-6 sm:p-8 relative",
                                        children: [s.jsxs("div", {
                                            className: "flex justify-between items-start mb-6 sm:mb-8",
                                            children: [s.jsxs("div", {
                                                children: [s.jsx("h3", {
                                                    className: "text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2",
                                                    children: "Phone"
                                                }), s.jsx("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Call us anytime"
                                                })]
                                            }), s.jsx("div", {
                                                className: "w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500",
                                                children: s.jsx("svg", {
                                                    className: "w-6 h-6 sm:w-7 sm:h-7 text-white",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: s.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                    })
                                                })
                                            })]
                                        }), s.jsxs("a", {
                                            href: "tel:+919600776688",
                                            className: "inline-flex items-center text-base sm:text-lg font-semibold text-gray-800 hover:text-theme transition-colors duration-300 group/link",
                                            children: ["+91 96 00 77 66 88", s.jsx("span", {
                                                className: "ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300",
                                                children: s.jsx(ia, {
                                                    className: "text-lg sm:text-xl"
                                                })
                                            })]
                                        })]
                                    })]
                                }), s.jsxs(V.div, {
                                    variants: d,
                                    initial: "hidden",
                                    animate: "visible",
                                    whileHover: "hover",
                                    className: "group relative bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden",
                                    children: [s.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    }), s.jsxs("div", {
                                        className: "p-6 sm:p-8 relative",
                                        children: [s.jsxs("div", {
                                            className: "flex justify-between items-start mb-6 sm:mb-8",
                                            children: [s.jsxs("div", {
                                                children: [s.jsx("h3", {
                                                    className: "text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2",
                                                    children: "Email"
                                                }), s.jsx("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Drop us a message"
                                                })]
                                            }), s.jsx("div", {
                                                className: "w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500",
                                                children: s.jsx("svg", {
                                                    className: "w-6 h-6 sm:w-7 sm:h-7 text-white",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: s.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    })
                                                })
                                            })]
                                        }), s.jsxs("a", {
                                            href: "mailto:info@legsgo.com",
                                            className: "inline-flex items-center text-base sm:text-lg font-semibold text-gray-800 hover:text-theme transition-colors duration-300 group/link",
                                            children: ["info@legsgo.com", s.jsx("span", {
                                                className: "ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300",
                                                children: s.jsx(ia, {
                                                    className: "text-lg sm:text-xl"
                                                })
                                            })]
                                        })]
                                    })]
                                }), s.jsxs(V.div, {
                                    variants: d,
                                    initial: "hidden",
                                    animate: "visible",
                                    whileHover: "hover",
                                    className: "group relative bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden sm:col-span-2 md:col-span-1",
                                    children: [s.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-teal-500/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    }), s.jsxs("div", {
                                        className: "p-6 sm:p-8 relative",
                                        children: [s.jsxs("div", {
                                            className: "flex justify-between items-start mb-6 sm:mb-8",
                                            children: [s.jsxs("div", {
                                                children: [s.jsx("h3", {
                                                    className: "text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2",
                                                    children: "Business Hours"
                                                }), s.jsx("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: "We're always here for you"
                                                })]
                                            }), s.jsx("div", {
                                                className: "w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500",
                                                children: s.jsx("svg", {
                                                    className: "w-6 h-6 sm:w-7 sm:h-7 text-white",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: s.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    })
                                                })
                                            })]
                                        }), s.jsxs("div", {
                                            className: "space-y-2",
                                            children: [s.jsx("p", {
                                                className: "text-gray-600",
                                                children: "Monday-Saturday"
                                            }), s.jsx("p", {
                                                className: "text-base sm:text-lg font-semibold text-gray-800",
                                                children: "24/7 Support"
                                            }), s.jsxs("div", {
                                                className: "mt-4 inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm",
                                                children: [s.jsx("span", {
                                                    className: "w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"
                                                }), "Currently Open"]
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        }), s.jsxs("div", {
                            className: " py-12",
                            children: [s.jsxs("div", {
                                className: "text-center mt-8",
                                children: [s.jsx("h2", {
                                    className: "text-2xl font-semibold mb-3 text-gray-800",
                                    children: "Our Global Presence in Tourism & Education"
                                }), s.jsx("p", {
                                    className: "text-gray-600 max-w-2xl mx-auto",
                                    children: "Our offices in India, UAE, and Europe are dedicated to bringing together the best of tourism and education. Join us as we help you explore the world and enhance your learning experiences."
                                })]
                            }), s.jsxs("div", {
                                className: "grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-12 max-w-6xl mx-auto px-4",
                                children: [s.jsx(V.div, {
                                    variants: d,
                                    initial: "hidden",
                                    animate: "visible",
                                    whileHover: "hover",
                                    className: "rounded-2xl overflow-hidden shadow-xl transition-all duration-300",
                                    children: s.jsxs("div", {
                                        className: "relative",
                                        children: [s.jsx("img", {
                                            src: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
                                            alt: "India",
                                            className: "w-full h-64 object-cover"
                                        }), s.jsxs("div", {
                                            className: "absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full",
                                            children: [s.jsx("h3", {
                                                className: "font-base text-lg text-white",
                                                children: "India - Culture & Education"
                                            }), s.jsx("p", {
                                                className: "text-white text-sm mt-2",
                                                children: "Explore India's rich cultural heritage and world-renowned educational institutions. A blend of tradition and modern education awaits you!"
                                            })]
                                        })]
                                    })
                                }), s.jsx(V.div, {
                                    variants: d,
                                    initial: "hidden",
                                    animate: "visible",
                                    whileHover: "hover",
                                    className: "rounded-2xl overflow-hidden shadow-xl transition-all duration-300",
                                    children: s.jsxs("div", {
                                        className: "relative",
                                        children: [s.jsx("img", {
                                            src: "https://images.unsplash.com/photo-1583759604327-f9dcd23499d5",
                                            alt: "UAE",
                                            className: "w-full h-64 object-cover"
                                        }), s.jsxs("div", {
                                            className: "absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full",
                                            children: [s.jsx("h3", {
                                                className: "font-medium text-lg text-white",
                                                children: "UAE - Innovation & Learning"
                                            }), s.jsx("p", {
                                                className: "text-white text-sm mt-2",
                                                children: "From Dubai's towering skyscrapers to cutting-edge universities, the UAE offers a unique mix of education and tourism that fosters growth and exploration."
                                            })]
                                        })]
                                    })
                                }), s.jsx(V.div, {
                                    variants: d,
                                    initial: "hidden",
                                    animate: "visible",
                                    whileHover: "hover",
                                    className: "rounded-2xl overflow-hidden shadow-xl transition-all duration-300",
                                    children: s.jsxs("div", {
                                        className: "relative",
                                        children: [s.jsx("img", {
                                            src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
                                            alt: "Europe",
                                            className: "w-full h-64 object-cover"
                                        }), s.jsxs("div", {
                                            className: "absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full",
                                            children: [s.jsx("h3", {
                                                className: "font-medium text-lg text-white",
                                                children: "Europe - History & Knowledge"
                                            }), s.jsx("p", {
                                                className: "text-white text-sm mt-2",
                                                children: "Europe is a hub for top-tier educational institutions and historic landmarks, offering a world of travel opportunities and academic excellence."
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }), s.jsx("div", {
                id: "contact-form",
                className: "bg-gray-100 py-10 rounded-2xl shadow-lg p-8",
                children: s.jsx(ge, {
                    children: s.jsxs("div", {
                        className: "md:flex items-start",
                        children: [s.jsx("div", {
                            className: "md:w-1/2",
                            children: s.jsx(se, {
                                direction: "ltr",
                                delay: .2,
                                children: s.jsx("div", {
                                    children: s.jsxs("div", {
                                        className: "p-8 contact-form bg-white rounded-2xl shadow-lg tracking-wide border-t-4 border-theme",
                                        children: [s.jsxs("h2", {
                                            className: "text-2xl font-semibold text-gray-800 flex items-center",
                                            children: [s.jsx("span", {
                                                className: "w-8 h-8 bg-theme rounded-full flex items-center justify-center mr-3",
                                                children: s.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-4 w-4 text-white",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: s.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                    })
                                                })
                                            }), "Send a Message"]
                                        }), s.jsxs("form", {
                                            onSubmit: c,
                                            className: "mt-6 space-y-6",
                                            children: [s.jsxs("div", {
                                                className: "relative",
                                                children: [s.jsx("input", {
                                                    type: "text",
                                                    name: "fullName",
                                                    value: e.fullName,
                                                    onChange: o,
                                                    placeholder: "Full Name",
                                                    className: `w-full transition-all duration-300 focus:border-theme border 
                                                            ${i.fullName ? "border-red-500" : "border-gray-300"} 
                                                            rounded-lg py-3 px-4 bg-gray-50 focus:bg-white focus:outline-none`
                                                }), i.fullName && s.jsx("p", {
                                                    className: "text-red-500 text-sm mt-1",
                                                    children: i.fullName
                                                })]
                                            }), s.jsxs("div", {
                                                className: "relative",
                                                children: [s.jsx("input", {
                                                    type: "text",
                                                    name: "email",
                                                    value: e.email,
                                                    onChange: o,
                                                    placeholder: "Email Address",
                                                    className: `w-full transition-all duration-300 focus:border-theme border 
                                                            ${i.email ? "border-red-500" : "border-gray-300"} 
                                                            rounded-lg py-3 px-4 bg-gray-50 focus:bg-white focus:outline-none`
                                                }), i.email && s.jsx("p", {
                                                    className: "text-red-500 text-sm mt-1",
                                                    children: i.email
                                                })]
                                            }), s.jsxs("div", {
                                                className: "relative",
                                                children: [s.jsx("input", {
                                                    type: "number",
                                                    name: "phone",
                                                    value: e.phone,
                                                    onChange: o,
                                                    placeholder: "Phone Number",
                                                    className: `w-full transition-all duration-300 focus:border-theme border 
                                                            ${i.phone ? "border-red-500" : "border-gray-300"} 
                                                            rounded-lg py-3 px-4 bg-gray-50 focus:bg-white focus:outline-none`
                                                }), i.phone && s.jsx("p", {
                                                    className: "text-red-500 text-sm mt-1",
                                                    children: i.phone
                                                })]
                                            }), s.jsxs("div", {
                                                className: "relative",
                                                children: [s.jsx("textarea", {
                                                    name: "message",
                                                    value: e.message,
                                                    onChange: o,
                                                    placeholder: "Your Message",
                                                    rows: "4",
                                                    className: `w-full transition-all duration-300 focus:border-theme border 
                                                            ${i.message ? "border-red-500" : "border-gray-300"} 
                                                            rounded-lg py-3 px-4 bg-gray-50 focus:bg-white focus:outline-none`
                                                }), i.message && s.jsx("p", {
                                                    className: "text-red-500 text-sm mt-1",
                                                    children: i.message
                                                })]
                                            }), s.jsx("div", {
                                                className: "flex justify-end items-end",
                                                children: s.jsx(V.button, {
                                                    whileHover: {
                                                        scale: 1.05
                                                    },
                                                    whileTap: {
                                                        scale: .95
                                                    },
                                                    type: "submit",
                                                    className: `bg-theme text-white transition-all duration-300 
                                                            flex items-center gap-2 rounded-lg py-3 px-6 font-medium 
                                                            hover:shadow-lg disabled:opacity-70`,
                                                    disabled: a,
                                                    children: a ? s.jsx("span", {
                                                        children: "Sending..."
                                                    }) : s.jsxs(s.Fragment, {
                                                        children: ["Send Message", s.jsx(ia, {
                                                            className: "text-xl"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        }), s.jsx(se, {
                            direction: "rtl",
                            delay: .2,
                            children: s.jsxs("div", {
                                className: "md:ml-12 tracking-wide mt-8 md:mt-0",
                                children: [s.jsx("h2", {
                                    className: "text-md:3xl text-center md:text-start text-2xl font-medium",
                                    children: "Contact Us"
                                }), s.jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-8 mt-6",
                                    children: [s.jsxs("div", {
                                        className: "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300",
                                        children: [s.jsx("h3", {
                                            className: "text-lg font-medium text-theme-1",
                                            children: "Corporate Office "
                                        }), s.jsxs("div", {
                                            className: "mt-4",
                                            children: [s.jsxs("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: ["Akshaya Shanthi, 2", s.jsx("sup", {
                                                    children: "nd"
                                                }), " Floor, No.201,"]
                                            }), s.jsx("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: "New Door Nos 25 & 27,"
                                            }), s.jsx("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: "Old Door Nos 43 & 44,"
                                            }), s.jsx("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: "Anna Salai, Chennai - 600 002."
                                            })]
                                        }), s.jsxs("div", {
                                            className: "mt-4",
                                            children: [s.jsx("p", {
                                                className: "font-medium text-gray-700",
                                                children: "Phone"
                                            }), s.jsx("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: "04447978446"
                                            })]
                                        })]
                                    }), s.jsxs("div", {
                                        className: "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300",
                                        children: [s.jsx("h3", {
                                            className: "text-lg font-medium text-theme-2",
                                            children: "Trichy Branch"
                                        }), s.jsxs("div", {
                                            className: "mt-4",
                                            children: [s.jsxs("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: ["No 1, 2", s.jsx("sup", {
                                                    children: "nd"
                                                }), " Floor,Pudukottai Main Road,"]
                                            }), s.jsx("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: "TVS Toll Gate,"
                                            }), s.jsx("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: "Trichy - 620 020."
                                            })]
                                        }), s.jsxs("div", {
                                            className: "mt-4",
                                            children: [s.jsx("p", {
                                                className: "font-medium text-gray-700",
                                                children: "Phone"
                                            }), s.jsx("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: "+91 96 00 11 66 77"
                                            }), s.jsx("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: "+91 96 00 44 66 77"
                                            }), s.jsx("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: "+91 96 00 36 66 77"
                                            })]
                                        })]
                                    })]
                                }), s.jsxs("div", {
                                    className: "mt-8 bg-gray-50 p-6 rounded-lg",
                                    children: [s.jsxs("div", {
                                        children: [s.jsx("p", {
                                            className: "font-medium text-gray-700",
                                            children: "Email Support"
                                        }), s.jsx("p", {
                                            className: "text-sm text-gray-600 mt-1",
                                            children: "info@legsgo.com"
                                        })]
                                    }), s.jsxs("div", {
                                        className: "mt-6",
                                        children: [s.jsx("p", {
                                            className: "font-medium text-gray-700",
                                            children: "Social Media"
                                        }), s.jsxs("ul", {
                                            className: "flex mt-3",
                                            children: [s.jsx("li", {
                                                children: s.jsx("a", {
                                                    href: "https://www.facebook.com/LegsGoHilidays",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "w-10 h-10 transform transition duration-200 ease-in hover:-translate-y-0.5 text-xl text-white hover:text-[#051036] rounded-full flex justify-center items-center bg-theme-1 hover:border hover:bg-transparent cursor-pointer",
                                                    children: s.jsx(Rl, {})
                                                })
                                            }), s.jsx("li", {
                                                className: "mx-4",
                                                children: s.jsx("a", {
                                                    href: "https://www.instagram.com/legsgo_holidays/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "transform transition duration-200 ease-in hover:-translate-y-0.5 w-10 h-10 text-xl text-white hover:text-[#051036] rounded-full flex justify-center items-center bg-theme-2 hover:border hover:border-[bg-theme-1] hover:bg-transparent cursor-pointer",
                                                    children: s.jsx(Gl, {})
                                                })
                                            }), s.jsx("li", {
                                                children: s.jsx("a", {
                                                    href: "https://www.linkedin.com/company/legs-go-holidays/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "w-10 h-10 transform transition duration-200 ease-in hover:-translate-y-0.5 text-xl text-white hover:text-[#051036] rounded-full flex justify-center items-center bg-theme-3 hover:border hover:border-[#86725A] hover:bg-transparent cursor-pointer",
                                                    children: s.jsx(Bl, {})
                                                })
                                            }), s.jsx("li", {
                                                className: "mx-4",
                                                children: s.jsx("a", {
                                                    href: "https://x.com/Legsgoofficial",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "transform transition duration-200 ease-in hover:-translate-y-0.5 w-10 h-10 text-xl text-white hover:text-[#051036] rounded-full flex justify-center items-center bg-theme-4 hover:border hover:border-[bg-theme-1] hover:bg-transparent cursor-pointer",
                                                    children: s.jsx(kn, {})
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                })
            })]
        }), s.jsx(Nn, {})]
    })
}
  , K0 = () => s.jsx("div", {
    className: "bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen flex flex-col items-center justify-center py-8 px-4",
    children: s.jsxs("div", {
        className: "max-w-3xl w-full bg-white p-10 shadow-xl rounded-xl border border-gray-200",
        children: [s.jsx("h1", {
            className: "text-4xl text-center theme-fill font-bold mb-6",
            children: "Terms & Conditions"
        }), s.jsxs("div", {
            className: "space-y-8 text-gray-700 dark:text-gray-300",
            children: [s.jsxs("section", {
                className: "space-y-4",
                children: [s.jsxs("h2", {
                    className: "font-xs text-gray-900 text-center dark:text-gray-100 border-b pb-2",
                    children: ["Please take your time to read our Terms & Conditions", s.jsx("p", {
                        className: "text-xs text-right text-gray-400 py-2",
                        children: "Last updated on: January 25, 2025"
                    })]
                }), s.jsxs("p", {
                    className: "text-sm text-justify leading-relaxed",
                    children: [s.jsx("span", {
                        className: "theme-fill font-bold",
                        children: "LEGSGO Holidays"
                    }), " accepts bookings according to the following terms and conditions. These terms specifically apply to tour reservations made by", s.jsx("span", {
                        className: "theme-fill font-bold",
                        children: " LEGSGO customers "
                    }), ". By booking your holidays and services with us, you acknowledge and accept our terms and conditions. The terms “booking,” “tour,” or “arrangements” here refer to various tour-related services. Please review the complete terms and conditions on our website to fully understand your rights and responsibilities."]
                })]
            }), s.jsxs("section", {
                className: "space-y-4",
                children: [s.jsx("h2", {
                    className: "font-semibold text-gray-900 dark:text-gray-100 border-b pb-2",
                    children: "1. Your Tour Agreement"
                }), s.jsxs("p", {
                    className: "text-sm text-justify leading-relaxed",
                    children: ['We place great emphasis on the agreement between the client ("you") and our company, which remains confidential and is not shared with any third party. In the event of disputes or dissatisfaction,', s.jsx("span", {
                        className: "theme-fill font-bold",
                        children: "LEGSGO Holidays"
                    }), " is committed to supporting its clients; however, we are not responsible for any issues arising from personal matters. Only the Director of ", s.jsx("span", {
                        className: "theme-fill font-bold",
                        children: "LEGSGO Holidays"
                    }), " can modify or remove these terms. Discounts and promotions are valid only if explicitly mentioned in the agreement."]
                })]
            }), s.jsxs("section", {
                className: "space-y-4",
                children: [s.jsx("h2", {
                    className: "font-semibold text-gray-900 dark:text-gray-100 border-b pb-2",
                    children: "2. Tour Payment"
                }), s.jsx("p", {
                    className: "text-sm text-justify leading-relaxed",
                    children: "All outstanding dues must be cleared at least 30 days before the start of your trip. Once you contact us directly or through other channels, we will inform you of the “balance due date.” Failure to complete payment by this date grants the tour operator the right to cancel your booking."
                })]
            }), s.jsxs("section", {
                className: "space-y-4",
                children: [s.jsx("h2", {
                    className: "font-semibold text-gray-900 dark:text-gray-100 border-b pb-2",
                    children: "3. Booking Confirmation"
                }), s.jsxs("p", {
                    className: "text-sm text-justify leading-relaxed",
                    children: ["To confirm your reservation, a minimum deposit is required. Some tour packages may require a larger deposit based on specific payment terms. Review the details and terms of your chosen package. For any inquiries, please contact us at ", s.jsx("a", {
                        className: "theme-fill font-bold",
                        href: "tel:+919600776688",
                        children: "9600776688"
                    }), " or via email at ", s.jsx("a", {
                        className: "theme-fill font-bold",
                        href: "mailto:info@legsgo.com",
                        children: "info@legsgo.com"
                    }), ". Our team is available to answer any booking-related questions."]
                })]
            }), s.jsxs("section", {
                className: "space-y-4",
                children: [s.jsx("h2", {
                    className: "font-semibold text-gray-900 dark:text-gray-100 border-b pb-2",
                    children: "4. Modifying Your Booking"
                }), s.jsx("p", {
                    className: "text-sm text-justify leading-relaxed",
                    children: "If you wish to modify your reservation, you must provide receipts or relevant documentation to our branch office. Changes are only considered in emergencies, and frequent adjustments are discouraged. Only minor modifications are allowed under specific conditions. Customers will be charged extra for any necessary adjustments."
                })]
            }), s.jsxs("section", {
                className: "space-y-4",
                children: [s.jsx("h2", {
                    className: "font-semibold text-gray-900 dark:text-gray-100 border-b pb-2",
                    children: "5. Our Tour Transparency"
                }), s.jsxs("p", {
                    className: "text-sm text-justify leading-relaxed",
                    children: ["We carefully plan every holiday to provide a pleasant experience. While ", s.jsx("span", {
                        className: "theme-fill font-bold",
                        children: "LEGSGO Holidays "
                    }), "oversees the conduct of its staff, agents, and suppliers during the trip, we are not liable for any violent or unlawful acts that occur during travel. Guests are encouraged to enjoy their vacations responsibly."]
                })]
            }), s.jsxs("section", {
                className: "space-y-4",
                children: [s.jsx("h2", {
                    className: "font-semibold text-gray-900 dark:text-gray-100 border-b pb-2",
                    children: "6. Advertisement/Website/Brochure Accuracy"
                }), s.jsxs("p", {
                    className: "text-sm text-justify leading-relaxed",
                    children: ["We strive to provide accurate and clear information through our website, brochures, itineraries, and promotional materials. However, changes or errors may occur. Clients are advised to review these terms and conditions before booking. For clarification, please email ", s.jsx("a", {
                        className: "theme-fill font-bold",
                        href: "mailto:info@legsgo.com",
                        children: "info@legsgo.com"
                    }), "."]
                })]
            }), s.jsxs("section", {
                className: "space-y-4",
                children: [s.jsx("h2", {
                    className: "font-semibold text-gray-900 dark:text-gray-100 border-b pb-2",
                    children: "7. Booking Cancellation"
                }), s.jsx("p", {
                    className: "text-sm text-justify leading-relaxed",
                    children: "Cancellations are permitted but subject to specific charges and circumstances. To cancel a booking, notify us via phone or email within the specified timeframe. Cancellation charges will apply, and refunds are not guaranteed for amounts already paid."
                })]
            }), s.jsxs("section", {
                className: "space-y-4",
                children: [s.jsx("h2", {
                    className: "font-semibold text-gray-900 dark:text-gray-100 border-b pb-2",
                    children: "8. Cancellation Policy"
                }), s.jsxs("p", {
                    className: "text-sm text-justify leading-relaxed",
                    children: ["To cancel a booking, clients must submit a written request to ", s.jsx("span", {
                        className: "theme-fill font-bold",
                        children: "LEGSGO CORPORATE"
                    }), " along with any necessary documents. Hotel and flight cancellations will follow the respective policies of the hotel and airline."]
                }), s.jsx("h4", {
                    className: "ml-3 font-semibold text-gray-900 dark:text-gray-100 border-b pb-2",
                    children: "Tour Cancellation Policy:"
                }), s.jsxs("ul", {
                    className: "ml-3 list-disc list-inside text-sm text-justify leading-relaxed",
                    children: [s.jsx("li", {
                        children: "Up to 45 days before the trip: 75% refund of the booking amount."
                    }), s.jsx("li", {
                        children: "Up to 30 days before the trip: 50% refund of the booking amount."
                    }), s.jsx("li", {
                        children: "Less than 30 days before the trip: No refund (as per tour operator policy)."
                    })]
                })]
            }), s.jsxs("section", {
                className: "space-y-4",
                children: [s.jsx("h2", {
                    className: "font-semibold text-gray-900 dark:text-gray-100 border-b pb-2",
                    children: "9. Cancellations Due to Unforeseen Circumstances"
                }), s.jsx("p", {
                    className: "text-sm text-justify leading-relaxed",
                    children: "If a specific attraction is canceled due to natural calamities or government directives, no refunds will be issued."
                })]
            }), s.jsxs("section", {
                className: "space-y-4",
                children: [s.jsx("h2", {
                    className: "font-semibold text-gray-900 dark:text-gray-100 border-b pb-2",
                    children: "10. Refund Policy"
                }), s.jsx("p", {
                    className: "text-sm text-justify leading-relaxed",
                    children: "Once the refund request is approved. The refunded amount will be processed and credited within 05 business days to the original mode of payment."
                })]
            }), s.jsxs("section", {
                className: "space-y-4",
                children: [s.jsx("h2", {
                    className: "font-semibold text-gray-900 dark:text-gray-100 border-b pb-2",
                    children: "11. Customer Grievances"
                }), s.jsxs("p", {
                    className: "text-sm text-justify leading-relaxed",
                    children: ["For any issues regarding your holiday plans, please email us at ", s.jsx("a", {
                        className: "theme-fill font-bold",
                        href: "mailto:info@legsgo.com",
                        children: "info@legsgo.com "
                    }), "or call us at ", s.jsx("a", {
                        className: "theme-fill font-bold",
                        href: "tel:+919600776688",
                        children: "9600776688"
                    }), ". We encourage you to describe your grievances in detail. Our customer support team will review the matter and respond within one business day."]
                })]
            })]
        }), s.jsx("div", {
            className: "mt-10 text-xs text-gray-600 dark:text-gray-400 border-t pt-4 text-right",
            children: s.jsx("p", {
                className: "text-justify mb-3",
                children: "These Terms & Conditions are updated on a regular basis. You will find the date of the last update on this page."
            })
        })]
    })
});
function X0(e) {
    return G({
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M256 48C141.124 48 48 141.125 48 256s93.124 208 208 208c114.875 0 208-93.125 208-208S370.875 48 256 48zm-21.549 384.999c-39.464-4.726-75.978-22.392-104.519-50.932C96.258 348.393 77.714 303.622 77.714 256c0-42.87 15.036-83.424 42.601-115.659.71 8.517 2.463 17.648 2.014 24.175-1.64 23.795-3.988 38.687 9.94 58.762 5.426 7.819 6.759 19.028 9.4 28.078 2.583 8.854 12.902 13.498 20.019 18.953 14.359 11.009 28.096 23.805 43.322 33.494 10.049 6.395 16.326 9.576 13.383 21.839-2.367 9.862-3.028 15.937-8.13 24.723-1.557 2.681 5.877 19.918 8.351 22.392 7.498 7.497 14.938 14.375 23.111 21.125 12.671 10.469-1.231 24.072-7.274 39.117zm147.616-50.932c-25.633 25.633-57.699 42.486-92.556 49.081 4.94-12.216 13.736-23.07 21.895-29.362 7.097-5.476 15.986-16.009 19.693-24.352 3.704-8.332 8.611-15.555 13.577-23.217 7.065-10.899-17.419-27.336-25.353-30.781-17.854-7.751-31.294-18.21-47.161-29.375-11.305-7.954-34.257 4.154-47.02-1.417-17.481-7.633-31.883-20.896-47.078-32.339-15.68-11.809-14.922-25.576-14.922-42.997 12.282.453 29.754-3.399 37.908 6.478 2.573 3.117 11.42 17.042 17.342 12.094 4.838-4.043-3.585-20.249-5.212-24.059-5.005-11.715 11.404-16.284 19.803-24.228 10.96-10.364 34.47-26.618 32.612-34.047s-23.524-28.477-36.249-25.193c-1.907.492-18.697 18.097-21.941 20.859.086-5.746.172-11.491.26-17.237.055-3.628-6.768-7.352-6.451-9.692.8-5.914 17.262-16.647 21.357-21.357-2.869-1.793-12.659-10.202-15.622-8.968-7.174 2.99-15.276 5.05-22.45 8.039 0-2.488-.302-4.825-.662-7.133a176.585 176.585 0 0 1 45.31-13.152l14.084 5.66 9.944 11.801 9.924 10.233 8.675 2.795 13.779-12.995L282 87.929V79.59c27.25 3.958 52.984 14.124 75.522 29.8-4.032.361-8.463.954-13.462 1.59-2.065-1.22-4.714-1.774-6.965-2.623 6.531 14.042 13.343 27.89 20.264 41.746 7.393 14.801 23.793 30.677 26.673 46.301 3.394 18.416 1.039 35.144 2.896 56.811 1.788 20.865 23.524 44.572 23.524 44.572s10.037 3.419 18.384 2.228c-7.781 30.783-23.733 59.014-46.769 82.052z"
            },
            child: []
        }]
    })(e)
}
function Z0(e) {
    return G({
        attr: {
            fill: "currentColor",
            viewBox: "0 0 16 16"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
            },
            child: []
        }]
    })(e)
}
function J0(e) {
    return G({
        attr: {
            fill: "currentColor",
            viewBox: "0 0 16 16"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM5.495 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927"
            },
            child: []
        }]
    })(e)
}
function Q0(e) {
    return G({
        attr: {
            fill: "currentColor",
            viewBox: "0 0 16 16"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"
            },
            child: []
        }]
    })(e)
}
function ex(e) {
    return G({
        attr: {
            fill: "currentColor",
            viewBox: "0 0 16 16"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
            },
            child: []
        }]
    })(e)
}
const Ul = Dc
  , ql = Ac
  , Cn = f.forwardRef( ({className: e, children: t, ...a}, n) => s.jsxs(Ar, {
    ref: n,
    className: R("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
    ...a,
    children: [t, s.jsx(Sc, {
        asChild: !0,
        children: s.jsx(Ia, {
            className: "h-4 w-4 opacity-50"
        })
    })]
}));
Cn.displayName = Ar.displayName;
const Yl = f.forwardRef( ({className: e, ...t}, a) => s.jsx(Lr, {
    ref: a,
    className: R("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: s.jsx(Xc, {
        className: "h-4 w-4"
    })
}));
Yl.displayName = Lr.displayName;
const Kl = f.forwardRef( ({className: e, ...t}, a) => s.jsx(Ir, {
    ref: a,
    className: R("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: s.jsx(Ia, {
        className: "h-4 w-4"
    })
}));
Kl.displayName = Ir.displayName;
const Sn = f.forwardRef( ({className: e, children: t, position: a="popper", ...n}, i) => s.jsx(Tc, {
    children: s.jsxs(Rr, {
        ref: i,
        className: R("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
        position: a,
        ...n,
        children: [s.jsx(Yl, {}), s.jsx(Pc, {
            className: R("p-1", a === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: t
        }), s.jsx(Kl, {})]
    })
}));
Sn.displayName = Rr.displayName;
const tx = f.forwardRef( ({className: e, ...t}, a) => s.jsx(Br, {
    ref: a,
    className: R("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
}));
tx.displayName = Br.displayName;
const Tn = f.forwardRef( ({className: e, children: t, ...a}, n) => s.jsxs(Vr, {
    ref: n,
    className: R("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    ...a,
    children: [s.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: s.jsx(Mc, {
            children: s.jsx(Zc, {
                className: "h-4 w-4"
            })
        })
    }), s.jsx(Ec, {
        children: t
    })]
}));
Tn.displayName = Vr.displayName;
const sx = f.forwardRef( ({className: e, ...t}, a) => s.jsx(_r, {
    ref: a,
    className: R("-mx-1 my-1 h-px bg-muted", e),
    ...t
}));
sx.displayName = _r.displayName;
const Xl = ["+1", "+44", "+33", "+49", "+39", "+34", "+81", "+86", "+91", "+61", "+55", "+7", "+82", "+31", "+46", "+41", "+47", "+351", "+48", "+90", "+52", "+54", "+27", "+971"]
  , Pn = Ic
  , Mn = Rc
  , Bs = f.forwardRef( ({className: e, align: t="center", sideOffset: a=4, ...n}, i) => s.jsx(Lc, {
    children: s.jsx(Or, {
        ref: i,
        align: t,
        sideOffset: a,
        className: R("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...n
    })
}));
Bs.displayName = Or.displayName;
var I = function() {
    return I = Object.assign || function(t) {
        for (var a, n = 1, i = arguments.length; n < i; n++) {
            a = arguments[n];
            for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    }
    ,
    I.apply(this, arguments)
};
function ax(e, t) {
    var a = {};
    for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (a[n[i]] = e[n[i]]);
    return a
}
function Zl(e, t, a) {
    for (var n = 0, i = t.length, r; n < i; n++)
        (r || !(n in t)) && (r || (r = Array.prototype.slice.call(t, 0, n)),
        r[n] = t[n]);
    return e.concat(r || Array.prototype.slice.call(t))
}
function Gt(e) {
    return e.mode === "multiple"
}
function Ut(e) {
    return e.mode === "range"
}
function Vs(e) {
    return e.mode === "single"
}
var nx = {
    root: "rdp",
    multiple_months: "rdp-multiple_months",
    with_weeknumber: "rdp-with_weeknumber",
    vhidden: "rdp-vhidden",
    button_reset: "rdp-button_reset",
    button: "rdp-button",
    caption: "rdp-caption",
    caption_start: "rdp-caption_start",
    caption_end: "rdp-caption_end",
    caption_between: "rdp-caption_between",
    caption_label: "rdp-caption_label",
    caption_dropdowns: "rdp-caption_dropdowns",
    dropdown: "rdp-dropdown",
    dropdown_month: "rdp-dropdown_month",
    dropdown_year: "rdp-dropdown_year",
    dropdown_icon: "rdp-dropdown_icon",
    months: "rdp-months",
    month: "rdp-month",
    table: "rdp-table",
    tbody: "rdp-tbody",
    tfoot: "rdp-tfoot",
    head: "rdp-head",
    head_row: "rdp-head_row",
    head_cell: "rdp-head_cell",
    nav: "rdp-nav",
    nav_button: "rdp-nav_button",
    nav_button_previous: "rdp-nav_button_previous",
    nav_button_next: "rdp-nav_button_next",
    nav_icon: "rdp-nav_icon",
    row: "rdp-row",
    weeknumber: "rdp-weeknumber",
    cell: "rdp-cell",
    day: "rdp-day",
    day_today: "rdp-day_today",
    day_outside: "rdp-day_outside",
    day_selected: "rdp-day_selected",
    day_disabled: "rdp-day_disabled",
    day_hidden: "rdp-day_hidden",
    day_range_start: "rdp-day_range_start",
    day_range_end: "rdp-day_range_end",
    day_range_middle: "rdp-day_range_middle"
};
function ix(e, t) {
    return Ce(e, "LLLL y", t)
}
function rx(e, t) {
    return Ce(e, "d", t)
}
function ox(e, t) {
    return Ce(e, "LLLL", t)
}
function lx(e) {
    return "".concat(e)
}
function cx(e, t) {
    return Ce(e, "cccccc", t)
}
function dx(e, t) {
    return Ce(e, "yyyy", t)
}
var ux = Object.freeze({
    __proto__: null,
    formatCaption: ix,
    formatDay: rx,
    formatMonthCaption: ox,
    formatWeekNumber: lx,
    formatWeekdayName: cx,
    formatYearCaption: dx
})
  , mx = function(e, t, a) {
    return Ce(e, "do MMMM (EEEE)", a)
}
  , hx = function() {
    return "Month: "
}
  , px = function() {
    return "Go to next month"
}
  , fx = function() {
    return "Go to previous month"
}
  , xx = function(e, t) {
    return Ce(e, "cccc", t)
}
  , gx = function(e) {
    return "Week n. ".concat(e)
}
  , vx = function() {
    return "Year: "
}
  , yx = Object.freeze({
    __proto__: null,
    labelDay: mx,
    labelMonthDropdown: hx,
    labelNext: px,
    labelPrevious: fx,
    labelWeekNumber: gx,
    labelWeekday: xx,
    labelYearDropdown: vx
});
function bx() {
    var e = "buttons"
      , t = nx
      , a = Jc
      , n = {}
      , i = {}
      , r = 1
      , o = {}
      , l = new Date;
    return {
        captionLayout: e,
        classNames: t,
        formatters: ux,
        labels: yx,
        locale: a,
        modifiersClassNames: n,
        modifiers: i,
        numberOfMonths: r,
        styles: o,
        today: l,
        mode: "default"
    }
}
function wx(e) {
    var t = e.fromYear
      , a = e.toYear
      , n = e.fromMonth
      , i = e.toMonth
      , r = e.fromDate
      , o = e.toDate;
    return n ? r = ce(n) : t && (r = new Date(t,0,1)),
    i ? o = Ra(i) : a && (o = new Date(a,11,31)),
    {
        fromDate: r ? Hn(r) : void 0,
        toDate: o ? Hn(o) : void 0
    }
}
var Jl = f.createContext(void 0);
function jx(e) {
    var t, a = e.initialProps, n = bx(), i = wx(a), r = i.fromDate, o = i.toDate, l = (t = a.captionLayout) !== null && t !== void 0 ? t : n.captionLayout;
    l !== "buttons" && (!r || !o) && (l = "buttons");
    var c;
    (Vs(a) || Gt(a) || Ut(a)) && (c = a.onSelect);
    var u = I(I(I({}, n), a), {
        captionLayout: l,
        classNames: I(I({}, n.classNames), a.classNames),
        components: I({}, a.components),
        formatters: I(I({}, n.formatters), a.formatters),
        fromDate: r,
        labels: I(I({}, n.labels), a.labels),
        mode: a.mode || n.mode,
        modifiers: I(I({}, n.modifiers), a.modifiers),
        modifiersClassNames: I(I({}, n.modifiersClassNames), a.modifiersClassNames),
        onSelect: c,
        styles: I(I({}, n.styles), a.styles),
        toDate: o
    });
    return s.jsx(Jl.Provider, {
        value: u,
        children: e.children
    })
}
function U() {
    var e = f.useContext(Jl);
    if (!e)
        throw new Error("useDayPicker must be used within a DayPickerProvider.");
    return e
}
function Ql(e) {
    var t = U()
      , a = t.locale
      , n = t.classNames
      , i = t.styles
      , r = t.formatters.formatCaption;
    return s.jsx("div", {
        className: n.caption_label,
        style: i.caption_label,
        "aria-live": "polite",
        role: "presentation",
        id: e.id,
        children: r(e.displayMonth, {
            locale: a
        })
    })
}
function Nx(e) {
    return s.jsx("svg", I({
        width: "8px",
        height: "8px",
        viewBox: "0 0 120 120",
        "data-testid": "iconDropdown"
    }, e, {
        children: s.jsx("path", {
            d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z",
            fill: "currentColor",
            fillRule: "nonzero"
        })
    }))
}
function ec(e) {
    var t, a, n = e.onChange, i = e.value, r = e.children, o = e.caption, l = e.className, c = e.style, u = U(), d = (a = (t = u.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && a !== void 0 ? a : Nx;
    return s.jsxs("div", {
        className: l,
        style: c,
        children: [s.jsx("span", {
            className: u.classNames.vhidden,
            children: e["aria-label"]
        }), s.jsx("select", {
            name: e.name,
            "aria-label": e["aria-label"],
            className: u.classNames.dropdown,
            style: u.styles.dropdown,
            value: i,
            onChange: n,
            children: r
        }), s.jsxs("div", {
            className: u.classNames.caption_label,
            style: u.styles.caption_label,
            "aria-hidden": "true",
            children: [o, s.jsx(d, {
                className: u.classNames.dropdown_icon,
                style: u.styles.dropdown_icon
            })]
        })]
    })
}
function kx(e) {
    var t, a = U(), n = a.fromDate, i = a.toDate, r = a.styles, o = a.locale, l = a.formatters.formatMonthCaption, c = a.classNames, u = a.components, d = a.labels.labelMonthDropdown;
    if (!n)
        return s.jsx(s.Fragment, {});
    if (!i)
        return s.jsx(s.Fragment, {});
    var m = [];
    if (nd(n, i))
        for (var h = ce(n), g = n.getMonth(); g <= i.getMonth(); g++)
            m.push(zs(h, g));
    else
        for (var h = ce(new Date), g = 0; g <= 11; g++)
            m.push(zs(h, g));
    var x = function(b) {
        var y = Number(b.target.value)
          , p = zs(ce(e.displayMonth), y);
        e.onChange(p)
    }
      , w = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : ec;
    return s.jsx(w, {
        name: "months",
        "aria-label": d(),
        className: c.dropdown_month,
        style: r.dropdown_month,
        onChange: x,
        value: e.displayMonth.getMonth(),
        caption: l(e.displayMonth, {
            locale: o
        }),
        children: m.map(function(b) {
            return s.jsx("option", {
                value: b.getMonth(),
                children: l(b, {
                    locale: o
                })
            }, b.getMonth())
        })
    })
}
function Cx(e) {
    var t, a = e.displayMonth, n = U(), i = n.fromDate, r = n.toDate, o = n.locale, l = n.styles, c = n.classNames, u = n.components, d = n.formatters.formatYearCaption, m = n.labels.labelYearDropdown, h = [];
    if (!i)
        return s.jsx(s.Fragment, {});
    if (!r)
        return s.jsx(s.Fragment, {});
    for (var g = i.getFullYear(), x = r.getFullYear(), w = g; w <= x; w++)
        h.push(Wn(id(new Date), w));
    var b = function(p) {
        var v = Wn(ce(a), Number(p.target.value));
        e.onChange(v)
    }
      , y = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : ec;
    return s.jsx(y, {
        name: "years",
        "aria-label": m(),
        className: c.dropdown_year,
        style: l.dropdown_year,
        onChange: b,
        value: a.getFullYear(),
        caption: d(a, {
            locale: o
        }),
        children: h.map(function(p) {
            return s.jsx("option", {
                value: p.getFullYear(),
                children: d(p, {
                    locale: o
                })
            }, p.getFullYear())
        })
    })
}
function Sx(e, t) {
    var a = f.useState(e)
      , n = a[0]
      , i = a[1]
      , r = t === void 0 ? n : t;
    return [r, i]
}
function Tx(e) {
    var t = e.month
      , a = e.defaultMonth
      , n = e.today
      , i = t || a || n || new Date
      , r = e.toDate
      , o = e.fromDate
      , l = e.numberOfMonths
      , c = l === void 0 ? 1 : l;
    if (r && Lt(r, i) < 0) {
        var u = -1 * (c - 1);
        i = Ne(r, u)
    }
    return o && Lt(i, o) < 0 && (i = o),
    ce(i)
}
function Px() {
    var e = U()
      , t = Tx(e)
      , a = Sx(t, e.month)
      , n = a[0]
      , i = a[1]
      , r = function(o) {
        var l;
        if (!e.disableNavigation) {
            var c = ce(o);
            i(c),
            (l = e.onMonthChange) === null || l === void 0 || l.call(e, c)
        }
    };
    return [n, r]
}
function Mx(e, t) {
    for (var a = t.reverseMonths, n = t.numberOfMonths, i = ce(e), r = ce(Ne(i, n)), o = Lt(r, i), l = [], c = 0; c < o; c++) {
        var u = Ne(i, c);
        l.push(u)
    }
    return a && (l = l.reverse()),
    l
}
function Ex(e, t) {
    if (!t.disableNavigation) {
        var a = t.toDate
          , n = t.pagedNavigation
          , i = t.numberOfMonths
          , r = i === void 0 ? 1 : i
          , o = n ? r : 1
          , l = ce(e);
        if (!a)
            return Ne(l, o);
        var c = Lt(a, e);
        if (!(c < r))
            return Ne(l, o)
    }
}
function Dx(e, t) {
    if (!t.disableNavigation) {
        var a = t.fromDate
          , n = t.pagedNavigation
          , i = t.numberOfMonths
          , r = i === void 0 ? 1 : i
          , o = n ? r : 1
          , l = ce(e);
        if (!a)
            return Ne(l, -o);
        var c = Lt(l, a);
        if (!(c <= 0))
            return Ne(l, -o)
    }
}
var tc = f.createContext(void 0);
function Ax(e) {
    var t = U()
      , a = Px()
      , n = a[0]
      , i = a[1]
      , r = Mx(n, t)
      , o = Ex(n, t)
      , l = Dx(n, t)
      , c = function(m) {
        return r.some(function(h) {
            return Ba(m, h)
        })
    }
      , u = function(m, h) {
        c(m) || (h && Yr(m, h) ? i(Ne(m, 1 + t.numberOfMonths * -1)) : i(m))
    }
      , d = {
        currentMonth: n,
        displayMonths: r,
        goToMonth: i,
        goToDate: u,
        previousMonth: l,
        nextMonth: o,
        isDateDisplayed: c
    };
    return s.jsx(tc.Provider, {
        value: d,
        children: e.children
    })
}
function qt() {
    var e = f.useContext(tc);
    if (!e)
        throw new Error("useNavigation must be used within a NavigationProvider");
    return e
}
function yr(e) {
    var t, a = U(), n = a.classNames, i = a.styles, r = a.components, o = qt().goToMonth, l = function(d) {
        o(Ne(d, e.displayIndex ? -e.displayIndex : 0))
    }, c = (t = r == null ? void 0 : r.CaptionLabel) !== null && t !== void 0 ? t : Ql, u = s.jsx(c, {
        id: e.id,
        displayMonth: e.displayMonth
    });
    return s.jsxs("div", {
        className: n.caption_dropdowns,
        style: i.caption_dropdowns,
        children: [s.jsx("div", {
            className: n.vhidden,
            children: u
        }), s.jsx(kx, {
            onChange: l,
            displayMonth: e.displayMonth
        }), s.jsx(Cx, {
            onChange: l,
            displayMonth: e.displayMonth
        })]
    })
}
function Lx(e) {
    return s.jsx("svg", I({
        width: "16px",
        height: "16px",
        viewBox: "0 0 120 120"
    }, e, {
        children: s.jsx("path", {
            d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z",
            fill: "currentColor",
            fillRule: "nonzero"
        })
    }))
}
function Ix(e) {
    return s.jsx("svg", I({
        width: "16px",
        height: "16px",
        viewBox: "0 0 120 120"
    }, e, {
        children: s.jsx("path", {
            d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z",
            fill: "currentColor"
        })
    }))
}
var js = f.forwardRef(function(e, t) {
    var a = U()
      , n = a.classNames
      , i = a.styles
      , r = [n.button_reset, n.button];
    e.className && r.push(e.className);
    var o = r.join(" ")
      , l = I(I({}, i.button_reset), i.button);
    return e.style && Object.assign(l, e.style),
    s.jsx("button", I({}, e, {
        ref: t,
        type: "button",
        className: o,
        style: l
    }))
});
function Rx(e) {
    var t, a, n = U(), i = n.dir, r = n.locale, o = n.classNames, l = n.styles, c = n.labels, u = c.labelPrevious, d = c.labelNext, m = n.components;
    if (!e.nextMonth && !e.previousMonth)
        return s.jsx(s.Fragment, {});
    var h = u(e.previousMonth, {
        locale: r
    })
      , g = [o.nav_button, o.nav_button_previous].join(" ")
      , x = d(e.nextMonth, {
        locale: r
    })
      , w = [o.nav_button, o.nav_button_next].join(" ")
      , b = (t = m == null ? void 0 : m.IconRight) !== null && t !== void 0 ? t : Ix
      , y = (a = m == null ? void 0 : m.IconLeft) !== null && a !== void 0 ? a : Lx;
    return s.jsxs("div", {
        className: o.nav,
        style: l.nav,
        children: [!e.hidePrevious && s.jsx(js, {
            name: "previous-month",
            "aria-label": h,
            className: g,
            style: l.nav_button_previous,
            disabled: !e.previousMonth,
            onClick: e.onPreviousClick,
            children: i === "rtl" ? s.jsx(b, {
                className: o.nav_icon,
                style: l.nav_icon
            }) : s.jsx(y, {
                className: o.nav_icon,
                style: l.nav_icon
            })
        }), !e.hideNext && s.jsx(js, {
            name: "next-month",
            "aria-label": x,
            className: w,
            style: l.nav_button_next,
            disabled: !e.nextMonth,
            onClick: e.onNextClick,
            children: i === "rtl" ? s.jsx(y, {
                className: o.nav_icon,
                style: l.nav_icon
            }) : s.jsx(b, {
                className: o.nav_icon,
                style: l.nav_icon
            })
        })]
    })
}
function br(e) {
    var t = U().numberOfMonths
      , a = qt()
      , n = a.previousMonth
      , i = a.nextMonth
      , r = a.goToMonth
      , o = a.displayMonths
      , l = o.findIndex(function(x) {
        return Ba(e.displayMonth, x)
    })
      , c = l === 0
      , u = l === o.length - 1
      , d = t > 1 && (c || !u)
      , m = t > 1 && (u || !c)
      , h = function() {
        n && r(n)
    }
      , g = function() {
        i && r(i)
    };
    return s.jsx(Rx, {
        displayMonth: e.displayMonth,
        hideNext: d,
        hidePrevious: m,
        nextMonth: i,
        previousMonth: n,
        onPreviousClick: h,
        onNextClick: g
    })
}
function Bx(e) {
    var t, a = U(), n = a.classNames, i = a.disableNavigation, r = a.styles, o = a.captionLayout, l = a.components, c = (t = l == null ? void 0 : l.CaptionLabel) !== null && t !== void 0 ? t : Ql, u;
    return i ? u = s.jsx(c, {
        id: e.id,
        displayMonth: e.displayMonth
    }) : o === "dropdown" ? u = s.jsx(yr, {
        displayMonth: e.displayMonth,
        id: e.id
    }) : o === "dropdown-buttons" ? u = s.jsxs(s.Fragment, {
        children: [s.jsx(yr, {
            displayMonth: e.displayMonth,
            displayIndex: e.displayIndex,
            id: e.id
        }), s.jsx(br, {
            displayMonth: e.displayMonth,
            displayIndex: e.displayIndex,
            id: e.id
        })]
    }) : u = s.jsxs(s.Fragment, {
        children: [s.jsx(c, {
            id: e.id,
            displayMonth: e.displayMonth,
            displayIndex: e.displayIndex
        }), s.jsx(br, {
            displayMonth: e.displayMonth,
            id: e.id
        })]
    }),
    s.jsx("div", {
        className: n.caption,
        style: r.caption,
        children: u
    })
}
function Vx(e) {
    var t = U()
      , a = t.footer
      , n = t.styles
      , i = t.classNames.tfoot;
    return a ? s.jsx("tfoot", {
        className: i,
        style: n.tfoot,
        children: s.jsx("tr", {
            children: s.jsx("td", {
                colSpan: 8,
                children: a
            })
        })
    }) : s.jsx(s.Fragment, {})
}
function _x(e, t, a) {
    for (var n = a ? Va(new Date) : _a(new Date, {
        locale: e,
        weekStartsOn: t
    }), i = [], r = 0; r < 7; r++) {
        var o = oe(n, r);
        i.push(o)
    }
    return i
}
function Ox() {
    var e = U()
      , t = e.classNames
      , a = e.styles
      , n = e.showWeekNumber
      , i = e.locale
      , r = e.weekStartsOn
      , o = e.ISOWeek
      , l = e.formatters.formatWeekdayName
      , c = e.labels.labelWeekday
      , u = _x(i, r, o);
    return s.jsxs("tr", {
        style: a.head_row,
        className: t.head_row,
        children: [n && s.jsx("td", {
            style: a.head_cell,
            className: t.head_cell
        }), u.map(function(d, m) {
            return s.jsx("th", {
                scope: "col",
                className: t.head_cell,
                style: a.head_cell,
                "aria-label": c(d, {
                    locale: i
                }),
                children: l(d, {
                    locale: i
                })
            }, m)
        })]
    })
}
function zx() {
    var e, t = U(), a = t.classNames, n = t.styles, i = t.components, r = (e = i == null ? void 0 : i.HeadRow) !== null && e !== void 0 ? e : Ox;
    return s.jsx("thead", {
        style: n.head,
        className: a.head,
        children: s.jsx(r, {})
    })
}
function Fx(e) {
    var t = U()
      , a = t.locale
      , n = t.formatters.formatDay;
    return s.jsx(s.Fragment, {
        children: n(e.date, {
            locale: a
        })
    })
}
var En = f.createContext(void 0);
function $x(e) {
    if (!Gt(e.initialProps)) {
        var t = {
            selected: void 0,
            modifiers: {
                disabled: []
            }
        };
        return s.jsx(En.Provider, {
            value: t,
            children: e.children
        })
    }
    return s.jsx(Hx, {
        initialProps: e.initialProps,
        children: e.children
    })
}
function Hx(e) {
    var t = e.initialProps
      , a = e.children
      , n = t.selected
      , i = t.min
      , r = t.max
      , o = function(u, d, m) {
        var h, g;
        (h = t.onDayClick) === null || h === void 0 || h.call(t, u, d, m);
        var x = !!(d.selected && i && (n == null ? void 0 : n.length) === i);
        if (!x) {
            var w = !!(!d.selected && r && (n == null ? void 0 : n.length) === r);
            if (!w) {
                var b = n ? Zl([], n) : [];
                if (d.selected) {
                    var y = b.findIndex(function(p) {
                        return re(u, p)
                    });
                    b.splice(y, 1)
                } else
                    b.push(u);
                (g = t.onSelect) === null || g === void 0 || g.call(t, b, u, d, m)
            }
        }
    }
      , l = {
        disabled: []
    };
    n && l.disabled.push(function(u) {
        var d = r && n.length > r - 1
          , m = n.some(function(h) {
            return re(h, u)
        });
        return !!(d && !m)
    });
    var c = {
        selected: n,
        onDayClick: o,
        modifiers: l
    };
    return s.jsx(En.Provider, {
        value: c,
        children: a
    })
}
function Dn() {
    var e = f.useContext(En);
    if (!e)
        throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
    return e
}
function Wx(e, t) {
    var a = t || {}
      , n = a.from
      , i = a.to;
    return n && i ? re(i, e) && re(n, e) ? void 0 : re(i, e) ? {
        from: i,
        to: void 0
    } : re(n, e) ? void 0 : ua(n, e) ? {
        from: e,
        to: i
    } : {
        from: n,
        to: e
    } : i ? ua(e, i) ? {
        from: i,
        to: e
    } : {
        from: e,
        to: i
    } : n ? Yr(e, n) ? {
        from: e,
        to: n
    } : {
        from: n,
        to: e
    } : {
        from: e,
        to: void 0
    }
}
var An = f.createContext(void 0);
function Gx(e) {
    if (!Ut(e.initialProps)) {
        var t = {
            selected: void 0,
            modifiers: {
                range_start: [],
                range_end: [],
                range_middle: [],
                disabled: []
            }
        };
        return s.jsx(An.Provider, {
            value: t,
            children: e.children
        })
    }
    return s.jsx(Ux, {
        initialProps: e.initialProps,
        children: e.children
    })
}
function Ux(e) {
    var t = e.initialProps
      , a = e.children
      , n = t.selected
      , i = n || {}
      , r = i.from
      , o = i.to
      , l = t.min
      , c = t.max
      , u = function(g, x, w) {
        var b, y;
        (b = t.onDayClick) === null || b === void 0 || b.call(t, g, x, w);
        var p = Wx(g, n);
        (y = t.onSelect) === null || y === void 0 || y.call(t, p, g, x, w)
    }
      , d = {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
    };
    if (r ? (d.range_start = [r],
    o ? (d.range_end = [o],
    re(r, o) || (d.range_middle = [{
        after: r,
        before: o
    }])) : d.range_end = [r]) : o && (d.range_start = [o],
    d.range_end = [o]),
    l && (r && !o && d.disabled.push({
        after: Os(r, l - 1),
        before: oe(r, l - 1)
    }),
    r && o && d.disabled.push({
        after: r,
        before: oe(r, l - 1)
    }),
    !r && o && d.disabled.push({
        after: Os(o, l - 1),
        before: oe(o, l - 1)
    })),
    c) {
        if (r && !o && (d.disabled.push({
            before: oe(r, -c + 1)
        }),
        d.disabled.push({
            after: oe(r, c - 1)
        })),
        r && o) {
            var m = Me(o, r) + 1
              , h = c - m;
            d.disabled.push({
                before: Os(r, h)
            }),
            d.disabled.push({
                after: oe(o, h)
            })
        }
        !r && o && (d.disabled.push({
            before: oe(o, -c + 1)
        }),
        d.disabled.push({
            after: oe(o, c - 1)
        }))
    }
    return s.jsx(An.Provider, {
        value: {
            selected: n,
            onDayClick: u,
            modifiers: d
        },
        children: a
    })
}
function Ln() {
    var e = f.useContext(An);
    if (!e)
        throw new Error("useSelectRange must be used within a SelectRangeProvider");
    return e
}
function ds(e) {
    return Array.isArray(e) ? Zl([], e) : e !== void 0 ? [e] : []
}
function qx(e) {
    var t = {};
    return Object.entries(e).forEach(function(a) {
        var n = a[0]
          , i = a[1];
        t[n] = ds(i)
    }),
    t
}
var ve;
(function(e) {
    e.Outside = "outside",
    e.Disabled = "disabled",
    e.Selected = "selected",
    e.Hidden = "hidden",
    e.Today = "today",
    e.RangeStart = "range_start",
    e.RangeEnd = "range_end",
    e.RangeMiddle = "range_middle"
}
)(ve || (ve = {}));
var Yx = ve.Selected
  , Te = ve.Disabled
  , Kx = ve.Hidden
  , Xx = ve.Today
  , ra = ve.RangeEnd
  , oa = ve.RangeMiddle
  , la = ve.RangeStart
  , Zx = ve.Outside;
function Jx(e, t, a) {
    var n, i = (n = {},
    n[Yx] = ds(e.selected),
    n[Te] = ds(e.disabled),
    n[Kx] = ds(e.hidden),
    n[Xx] = [e.today],
    n[ra] = [],
    n[oa] = [],
    n[la] = [],
    n[Zx] = [],
    n);
    return e.fromDate && i[Te].push({
        before: e.fromDate
    }),
    e.toDate && i[Te].push({
        after: e.toDate
    }),
    Gt(e) ? i[Te] = i[Te].concat(t.modifiers[Te]) : Ut(e) && (i[Te] = i[Te].concat(a.modifiers[Te]),
    i[la] = a.modifiers[la],
    i[oa] = a.modifiers[oa],
    i[ra] = a.modifiers[ra]),
    i
}
var sc = f.createContext(void 0);
function Qx(e) {
    var t = U()
      , a = Dn()
      , n = Ln()
      , i = Jx(t, a, n)
      , r = qx(t.modifiers)
      , o = I(I({}, i), r);
    return s.jsx(sc.Provider, {
        value: o,
        children: e.children
    })
}
function ac() {
    var e = f.useContext(sc);
    if (!e)
        throw new Error("useModifiers must be used within a ModifiersProvider");
    return e
}
function eg(e) {
    return !!(e && typeof e == "object" && "before"in e && "after"in e)
}
function tg(e) {
    return !!(e && typeof e == "object" && "from"in e)
}
function sg(e) {
    return !!(e && typeof e == "object" && "after"in e)
}
function ag(e) {
    return !!(e && typeof e == "object" && "before"in e)
}
function ng(e) {
    return !!(e && typeof e == "object" && "dayOfWeek"in e)
}
function ig(e, t) {
    var a, n = t.from, i = t.to;
    if (n && i) {
        var r = Me(i, n) < 0;
        r && (a = [i, n],
        n = a[0],
        i = a[1]);
        var o = Me(e, n) >= 0 && Me(i, e) >= 0;
        return o
    }
    return i ? re(i, e) : n ? re(n, e) : !1
}
function rg(e) {
    return Zr(e)
}
function og(e) {
    return Array.isArray(e) && e.every(Zr)
}
function lg(e, t) {
    return t.some(function(a) {
        if (typeof a == "boolean")
            return a;
        if (rg(a))
            return re(e, a);
        if (og(a))
            return a.includes(e);
        if (tg(a))
            return ig(e, a);
        if (ng(a))
            return a.dayOfWeek.includes(e.getDay());
        if (eg(a)) {
            var n = Me(a.before, e)
              , i = Me(a.after, e)
              , r = n > 0
              , o = i < 0
              , l = ua(a.before, a.after);
            return l ? o && r : r || o
        }
        return sg(a) ? Me(e, a.after) > 0 : ag(a) ? Me(a.before, e) > 0 : typeof a == "function" ? a(e) : !1
    })
}
function In(e, t, a) {
    var n = Object.keys(t).reduce(function(r, o) {
        var l = t[o];
        return lg(e, l) && r.push(o),
        r
    }, [])
      , i = {};
    return n.forEach(function(r) {
        return i[r] = !0
    }),
    a && !Ba(e, a) && (i.outside = !0),
    i
}
function cg(e, t) {
    for (var a = ce(e[0]), n = Ra(e[e.length - 1]), i, r, o = a; o <= n; ) {
        var l = In(o, t)
          , c = !l.disabled && !l.hidden;
        if (!c) {
            o = oe(o, 1);
            continue
        }
        if (l.selected)
            return o;
        l.today && !r && (r = o),
        i || (i = o),
        o = oe(o, 1)
    }
    return r || i
}
var dg = 365;
function nc(e, t) {
    var a = t.moveBy
      , n = t.direction
      , i = t.context
      , r = t.modifiers
      , o = t.retry
      , l = o === void 0 ? {
        count: 0,
        lastFocused: e
    } : o
      , c = i.weekStartsOn
      , u = i.fromDate
      , d = i.toDate
      , m = i.locale
      , h = {
        day: oe,
        week: da,
        month: Ne,
        year: td,
        startOfWeek: function(b) {
            return i.ISOWeek ? Va(b) : _a(b, {
                locale: m,
                weekStartsOn: c
            })
        },
        endOfWeek: function(b) {
            return i.ISOWeek ? Kr(b) : Xr(b, {
                locale: m,
                weekStartsOn: c
            })
        }
    }
      , g = h[a](e, n === "after" ? 1 : -1);
    n === "before" && u ? g = sd([u, g]) : n === "after" && d && (g = ad([d, g]));
    var x = !0;
    if (r) {
        var w = In(g, r);
        x = !w.disabled && !w.hidden
    }
    return x ? g : l.count > dg ? l.lastFocused : nc(g, {
        moveBy: a,
        direction: n,
        context: i,
        modifiers: r,
        retry: I(I({}, l), {
            count: l.count + 1
        })
    })
}
var ic = f.createContext(void 0);
function ug(e) {
    var t = qt()
      , a = ac()
      , n = f.useState()
      , i = n[0]
      , r = n[1]
      , o = f.useState()
      , l = o[0]
      , c = o[1]
      , u = cg(t.displayMonths, a)
      , d = i ?? (l && t.isDateDisplayed(l)) ? l : u
      , m = function() {
        c(i),
        r(void 0)
    }
      , h = function(b) {
        r(b)
    }
      , g = U()
      , x = function(b, y) {
        if (i) {
            var p = nc(i, {
                moveBy: b,
                direction: y,
                context: g,
                modifiers: a
            });
            re(i, p) || (t.goToDate(p, i),
            h(p))
        }
    }
      , w = {
        focusedDay: i,
        focusTarget: d,
        blur: m,
        focus: h,
        focusDayAfter: function() {
            return x("day", "after")
        },
        focusDayBefore: function() {
            return x("day", "before")
        },
        focusWeekAfter: function() {
            return x("week", "after")
        },
        focusWeekBefore: function() {
            return x("week", "before")
        },
        focusMonthBefore: function() {
            return x("month", "before")
        },
        focusMonthAfter: function() {
            return x("month", "after")
        },
        focusYearBefore: function() {
            return x("year", "before")
        },
        focusYearAfter: function() {
            return x("year", "after")
        },
        focusStartOfWeek: function() {
            return x("startOfWeek", "before")
        },
        focusEndOfWeek: function() {
            return x("endOfWeek", "after")
        }
    };
    return s.jsx(ic.Provider, {
        value: w,
        children: e.children
    })
}
function Rn() {
    var e = f.useContext(ic);
    if (!e)
        throw new Error("useFocusContext must be used within a FocusProvider");
    return e
}
function mg(e, t) {
    var a = ac()
      , n = In(e, a, t);
    return n
}
var Bn = f.createContext(void 0);
function hg(e) {
    if (!Vs(e.initialProps)) {
        var t = {
            selected: void 0
        };
        return s.jsx(Bn.Provider, {
            value: t,
            children: e.children
        })
    }
    return s.jsx(pg, {
        initialProps: e.initialProps,
        children: e.children
    })
}
function pg(e) {
    var t = e.initialProps
      , a = e.children
      , n = function(r, o, l) {
        var c, u, d;
        if ((c = t.onDayClick) === null || c === void 0 || c.call(t, r, o, l),
        o.selected && !t.required) {
            (u = t.onSelect) === null || u === void 0 || u.call(t, void 0, r, o, l);
            return
        }
        (d = t.onSelect) === null || d === void 0 || d.call(t, r, r, o, l)
    }
      , i = {
        selected: t.selected,
        onDayClick: n
    };
    return s.jsx(Bn.Provider, {
        value: i,
        children: a
    })
}
function rc() {
    var e = f.useContext(Bn);
    if (!e)
        throw new Error("useSelectSingle must be used within a SelectSingleProvider");
    return e
}
function fg(e, t) {
    var a = U()
      , n = rc()
      , i = Dn()
      , r = Ln()
      , o = Rn()
      , l = o.focusDayAfter
      , c = o.focusDayBefore
      , u = o.focusWeekAfter
      , d = o.focusWeekBefore
      , m = o.blur
      , h = o.focus
      , g = o.focusMonthBefore
      , x = o.focusMonthAfter
      , w = o.focusYearBefore
      , b = o.focusYearAfter
      , y = o.focusStartOfWeek
      , p = o.focusEndOfWeek
      , v = function(S) {
        var T, W, q, pe;
        Vs(a) ? (T = n.onDayClick) === null || T === void 0 || T.call(n, e, t, S) : Gt(a) ? (W = i.onDayClick) === null || W === void 0 || W.call(i, e, t, S) : Ut(a) ? (q = r.onDayClick) === null || q === void 0 || q.call(r, e, t, S) : (pe = a.onDayClick) === null || pe === void 0 || pe.call(a, e, t, S)
    }
      , N = function(S) {
        var T;
        h(e),
        (T = a.onDayFocus) === null || T === void 0 || T.call(a, e, t, S)
    }
      , k = function(S) {
        var T;
        m(),
        (T = a.onDayBlur) === null || T === void 0 || T.call(a, e, t, S)
    }
      , P = function(S) {
        var T;
        (T = a.onDayMouseEnter) === null || T === void 0 || T.call(a, e, t, S)
    }
      , D = function(S) {
        var T;
        (T = a.onDayMouseLeave) === null || T === void 0 || T.call(a, e, t, S)
    }
      , C = function(S) {
        var T;
        (T = a.onDayPointerEnter) === null || T === void 0 || T.call(a, e, t, S)
    }
      , j = function(S) {
        var T;
        (T = a.onDayPointerLeave) === null || T === void 0 || T.call(a, e, t, S)
    }
      , A = function(S) {
        var T;
        (T = a.onDayTouchCancel) === null || T === void 0 || T.call(a, e, t, S)
    }
      , M = function(S) {
        var T;
        (T = a.onDayTouchEnd) === null || T === void 0 || T.call(a, e, t, S)
    }
      , _ = function(S) {
        var T;
        (T = a.onDayTouchMove) === null || T === void 0 || T.call(a, e, t, S)
    }
      , B = function(S) {
        var T;
        (T = a.onDayTouchStart) === null || T === void 0 || T.call(a, e, t, S)
    }
      , O = function(S) {
        var T;
        (T = a.onDayKeyUp) === null || T === void 0 || T.call(a, e, t, S)
    }
      , F = function(S) {
        var T;
        switch (S.key) {
        case "ArrowLeft":
            S.preventDefault(),
            S.stopPropagation(),
            a.dir === "rtl" ? l() : c();
            break;
        case "ArrowRight":
            S.preventDefault(),
            S.stopPropagation(),
            a.dir === "rtl" ? c() : l();
            break;
        case "ArrowDown":
            S.preventDefault(),
            S.stopPropagation(),
            u();
            break;
        case "ArrowUp":
            S.preventDefault(),
            S.stopPropagation(),
            d();
            break;
        case "PageUp":
            S.preventDefault(),
            S.stopPropagation(),
            S.shiftKey ? w() : g();
            break;
        case "PageDown":
            S.preventDefault(),
            S.stopPropagation(),
            S.shiftKey ? b() : x();
            break;
        case "Home":
            S.preventDefault(),
            S.stopPropagation(),
            y();
            break;
        case "End":
            S.preventDefault(),
            S.stopPropagation(),
            p();
            break
        }
        (T = a.onDayKeyDown) === null || T === void 0 || T.call(a, e, t, S)
    }
      , Q = {
        onClick: v,
        onFocus: N,
        onBlur: k,
        onKeyDown: F,
        onKeyUp: O,
        onMouseEnter: P,
        onMouseLeave: D,
        onPointerEnter: C,
        onPointerLeave: j,
        onTouchCancel: A,
        onTouchEnd: M,
        onTouchMove: _,
        onTouchStart: B
    };
    return Q
}
function xg() {
    var e = U()
      , t = rc()
      , a = Dn()
      , n = Ln()
      , i = Vs(e) ? t.selected : Gt(e) ? a.selected : Ut(e) ? n.selected : void 0;
    return i
}
function gg(e) {
    return Object.values(ve).includes(e)
}
function vg(e, t) {
    var a = [e.classNames.day];
    return Object.keys(t).forEach(function(n) {
        var i = e.modifiersClassNames[n];
        if (i)
            a.push(i);
        else if (gg(n)) {
            var r = e.classNames["day_".concat(n)];
            r && a.push(r)
        }
    }),
    a
}
function yg(e, t) {
    var a = I({}, e.styles.day);
    return Object.keys(t).forEach(function(n) {
        var i;
        a = I(I({}, a), (i = e.modifiersStyles) === null || i === void 0 ? void 0 : i[n])
    }),
    a
}
function bg(e, t, a) {
    var n, i, r, o = U(), l = Rn(), c = mg(e, t), u = fg(e, c), d = xg(), m = !!(o.onDayClick || o.mode !== "default");
    f.useEffect(function() {
        var P;
        c.outside || l.focusedDay && m && re(l.focusedDay, e) && ((P = a.current) === null || P === void 0 || P.focus())
    }, [l.focusedDay, e, a, m, c.outside]);
    var h = vg(o, c).join(" ")
      , g = yg(o, c)
      , x = !!(c.outside && !o.showOutsideDays || c.hidden)
      , w = (r = (i = o.components) === null || i === void 0 ? void 0 : i.DayContent) !== null && r !== void 0 ? r : Fx
      , b = s.jsx(w, {
        date: e,
        displayMonth: t,
        activeModifiers: c
    })
      , y = {
        style: g,
        className: h,
        children: b,
        role: "gridcell"
    }
      , p = l.focusTarget && re(l.focusTarget, e) && !c.outside
      , v = l.focusedDay && re(l.focusedDay, e)
      , N = I(I(I({}, y), (n = {
        disabled: c.disabled,
        role: "gridcell"
    },
    n["aria-selected"] = c.selected,
    n.tabIndex = v || p ? 0 : -1,
    n)), u)
      , k = {
        isButton: m,
        isHidden: x,
        activeModifiers: c,
        selectedDays: d,
        buttonProps: N,
        divProps: y
    };
    return k
}
function wg(e) {
    var t = f.useRef(null)
      , a = bg(e.date, e.displayMonth, t);
    return a.isHidden ? s.jsx("div", {
        role: "gridcell"
    }) : a.isButton ? s.jsx(js, I({
        name: "day",
        ref: t
    }, a.buttonProps)) : s.jsx("div", I({}, a.divProps))
}
function jg(e) {
    var t = e.number
      , a = e.dates
      , n = U()
      , i = n.onWeekNumberClick
      , r = n.styles
      , o = n.classNames
      , l = n.locale
      , c = n.labels.labelWeekNumber
      , u = n.formatters.formatWeekNumber
      , d = u(Number(t), {
        locale: l
    });
    if (!i)
        return s.jsx("span", {
            className: o.weeknumber,
            style: r.weeknumber,
            children: d
        });
    var m = c(Number(t), {
        locale: l
    })
      , h = function(g) {
        i(t, a, g)
    };
    return s.jsx(js, {
        name: "week-number",
        "aria-label": m,
        className: o.weeknumber,
        style: r.weeknumber,
        onClick: h,
        children: d
    })
}
function Ng(e) {
    var t, a, n = U(), i = n.styles, r = n.classNames, o = n.showWeekNumber, l = n.components, c = (t = l == null ? void 0 : l.Day) !== null && t !== void 0 ? t : wg, u = (a = l == null ? void 0 : l.WeekNumber) !== null && a !== void 0 ? a : jg, d;
    return o && (d = s.jsx("td", {
        className: r.cell,
        style: i.cell,
        children: s.jsx(u, {
            number: e.weekNumber,
            dates: e.dates
        })
    })),
    s.jsxs("tr", {
        className: r.row,
        style: i.row,
        children: [d, e.dates.map(function(m) {
            return s.jsx("td", {
                className: r.cell,
                style: i.cell,
                role: "presentation",
                children: s.jsx(c, {
                    displayMonth: e.displayMonth,
                    date: m
                })
            }, ed(m))
        })]
    })
}
function wr(e, t, a) {
    for (var n = a != null && a.ISOWeek ? Kr(t) : Xr(t, a), i = a != null && a.ISOWeek ? Va(e) : _a(e, a), r = Me(n, i), o = [], l = 0; l <= r; l++)
        o.push(oe(i, l));
    var c = o.reduce(function(u, d) {
        var m = a != null && a.ISOWeek ? rd(d) : od(d, a)
          , h = u.find(function(g) {
            return g.weekNumber === m
        });
        return h ? (h.dates.push(d),
        u) : (u.push({
            weekNumber: m,
            dates: [d]
        }),
        u)
    }, []);
    return c
}
function kg(e, t) {
    var a = wr(ce(e), Ra(e), t);
    if (t != null && t.useFixedWeeks) {
        var n = Qc(e, t);
        if (n < 6) {
            var i = a[a.length - 1]
              , r = i.dates[i.dates.length - 1]
              , o = da(r, 6 - n)
              , l = wr(da(r, 1), o, t);
            a.push.apply(a, l)
        }
    }
    return a
}
function Cg(e) {
    var t, a, n, i = U(), r = i.locale, o = i.classNames, l = i.styles, c = i.hideHead, u = i.fixedWeeks, d = i.components, m = i.weekStartsOn, h = i.firstWeekContainsDate, g = i.ISOWeek, x = kg(e.displayMonth, {
        useFixedWeeks: !!u,
        ISOWeek: g,
        locale: r,
        weekStartsOn: m,
        firstWeekContainsDate: h
    }), w = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : zx, b = (a = d == null ? void 0 : d.Row) !== null && a !== void 0 ? a : Ng, y = (n = d == null ? void 0 : d.Footer) !== null && n !== void 0 ? n : Vx;
    return s.jsxs("table", {
        id: e.id,
        className: o.table,
        style: l.table,
        role: "grid",
        "aria-labelledby": e["aria-labelledby"],
        children: [!c && s.jsx(w, {}), s.jsx("tbody", {
            className: o.tbody,
            style: l.tbody,
            children: x.map(function(p) {
                return s.jsx(b, {
                    displayMonth: e.displayMonth,
                    dates: p.dates,
                    weekNumber: p.weekNumber
                }, p.weekNumber)
            })
        }), s.jsx(y, {
            displayMonth: e.displayMonth
        })]
    })
}
function Sg() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}
var Tg = Sg() ? f.useLayoutEffect : f.useEffect
  , ca = !1
  , Pg = 0;
function jr() {
    return "react-day-picker-".concat(++Pg)
}
function Mg(e) {
    var t, a = e ?? (ca ? jr() : null), n = f.useState(a), i = n[0], r = n[1];
    return Tg(function() {
        i === null && r(jr())
    }, []),
    f.useEffect(function() {
        ca === !1 && (ca = !0)
    }, []),
    (t = e ?? i) !== null && t !== void 0 ? t : void 0
}
function Eg(e) {
    var t, a, n = U(), i = n.dir, r = n.classNames, o = n.styles, l = n.components, c = qt().displayMonths, u = Mg(n.id ? "".concat(n.id, "-").concat(e.displayIndex) : void 0), d = n.id ? "".concat(n.id, "-grid-").concat(e.displayIndex) : void 0, m = [r.month], h = o.month, g = e.displayIndex === 0, x = e.displayIndex === c.length - 1, w = !g && !x;
    i === "rtl" && (t = [g, x],
    x = t[0],
    g = t[1]),
    g && (m.push(r.caption_start),
    h = I(I({}, h), o.caption_start)),
    x && (m.push(r.caption_end),
    h = I(I({}, h), o.caption_end)),
    w && (m.push(r.caption_between),
    h = I(I({}, h), o.caption_between));
    var b = (a = l == null ? void 0 : l.Caption) !== null && a !== void 0 ? a : Bx;
    return s.jsxs("div", {
        className: m.join(" "),
        style: h,
        children: [s.jsx(b, {
            id: u,
            displayMonth: e.displayMonth,
            displayIndex: e.displayIndex
        }), s.jsx(Cg, {
            id: d,
            "aria-labelledby": u,
            displayMonth: e.displayMonth
        })]
    }, e.displayIndex)
}
function Dg(e) {
    var t = U()
      , a = t.classNames
      , n = t.styles;
    return s.jsx("div", {
        className: a.months,
        style: n.months,
        children: e.children
    })
}
function Ag(e) {
    var t, a, n = e.initialProps, i = U(), r = Rn(), o = qt(), l = f.useState(!1), c = l[0], u = l[1];
    f.useEffect(function() {
        i.initialFocus && r.focusTarget && (c || (r.focus(r.focusTarget),
        u(!0)))
    }, [i.initialFocus, c, r.focus, r.focusTarget, r]);
    var d = [i.classNames.root, i.className];
    i.numberOfMonths > 1 && d.push(i.classNames.multiple_months),
    i.showWeekNumber && d.push(i.classNames.with_weeknumber);
    var m = I(I({}, i.styles.root), i.style)
      , h = Object.keys(n).filter(function(x) {
        return x.startsWith("data-")
    }).reduce(function(x, w) {
        var b;
        return I(I({}, x), (b = {},
        b[w] = n[w],
        b))
    }, {})
      , g = (a = (t = n.components) === null || t === void 0 ? void 0 : t.Months) !== null && a !== void 0 ? a : Dg;
    return s.jsx("div", I({
        className: d.join(" "),
        style: m,
        dir: i.dir,
        id: i.id,
        nonce: n.nonce,
        title: n.title,
        lang: n.lang
    }, h, {
        children: s.jsx(g, {
            children: o.displayMonths.map(function(x, w) {
                return s.jsx(Eg, {
                    displayIndex: w,
                    displayMonth: x
                }, w)
            })
        })
    }))
}
function Lg(e) {
    var t = e.children
      , a = ax(e, ["children"]);
    return s.jsx(jx, {
        initialProps: a,
        children: s.jsx(Ax, {
            children: s.jsx(hg, {
                initialProps: a,
                children: s.jsx($x, {
                    initialProps: a,
                    children: s.jsx(Gx, {
                        initialProps: a,
                        children: s.jsx(Qx, {
                            children: s.jsx(ug, {
                                children: t
                            })
                        })
                    })
                })
            })
        })
    })
}
function Ig(e) {
    return s.jsx(Lg, I({}, e, {
        children: s.jsx(Ag, {
            initialProps: e
        })
    }))
}
function _s({className: e, classNames: t, showOutsideDays: a=!0, ...n}) {
    return s.jsx(Ig, {
        showOutsideDays: a,
        className: R("p-3", e),
        classNames: {
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: R(Ea({
                variant: "outline"
            }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: R(Ea({
                variant: "ghost"
            }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
            day_range_end: "day-range-end",
            day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: "bg-accent text-accent-foreground",
            day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
            ...t
        },
        components: {
            IconLeft: ({...i}) => s.jsx(Ur, {
                className: "h-4 w-4"
            }),
            IconRight: ({...i}) => s.jsx(qr, {
                className: "h-4 w-4"
            })
        },
        ...n
    })
}
_s.displayName = "Calendar";
const Vn = () => {
    const [e,t] = f.useState(!1)
      , [a,n] = f.useState(null);
    return {
        loading: e,
        error: a,
        sendEnquiry: async r => {
            try {
                e || t(!0),
                a && n(null),
                await Ve.post("https://www.sathuragiriyaan.tech/api/travels/inquiry", r),
                ne.success("Your enquiry has received successfully")
            } catch (o) {
                o.response ? (ne.error(o.response.data.error || o.response.data.message || "something went wrong"),
                n(o.response.data.error || o.response.data.message || "something went wrong")) : (n(o.message),
                ne.error(o.message))
            } finally {
                t(!1)
            }
        }
    }
}
  , Rg = [{
    icon: z0,
    query: "Operating Hours",
    ans: "Everyday 08:00 AM To 02:00 PM"
}, {
    icon: Z0,
    query: "Instant Confirmation",
    ans: "Instant tour confirmation will be provided"
}, {
    icon: A0,
    query: "Non Refundable",
    ans: "Not refundable after purchase"
}, {
    icon: X0,
    query: "Language",
    ans: "English"
}]
  , Bg = () => {
    const {slug: e} = zt()
      , {data: t, loading: a, error: n} = xe(v => v.allDestinations)
      , i = t.find(v => v.slug === e)
      , r = t
      , o = f.useMemo( () => r.filter(v => v.location === (i == null ? void 0 : i.location)) || [], [i, r]);
    if (a)
        return s.jsx(ie, {
            message: "Fetching Travel Details..."
        });
    if (n)
        return s.jsx(ie, {
            message: "Coming soon!",
            forError: !0
        });
    const {images: l, rating: c, title: u, currency: d, price: m, itinerary: h, discount: g, originalPrice: x, saleType: w, highlights: b, overview: y, location: p} = i;
    return s.jsxs("div", {
        className: "bg-gray-200 min-h-screen mb-14",
        children: [s.jsx(Wt, {
            aspectRatio: "4.2/1",
            slides: l
        }), s.jsxs(ge, {
            children: [s.jsxs("div", {
                className: "space-y-4",
                children: [s.jsxs("div", {
                    className: "relative p-6 bg-white rounded-bl-2xl rounded-br-2xl",
                    children: [s.jsx("h3", {
                        className: "text-2xl max-sm:text-xl font-semibold",
                        children: u
                    }), s.jsxs("div", {
                        className: "flex items-center gap-5 text-sm max-sm:text-xs text-gray-500 mt-1",
                        children: [s.jsx("span", {
                            children: h
                        }), s.jsxs("div", {
                            className: "flex items-center gap-1",
                            children: [s.jsx(As, {
                                className: "text-yellow-500"
                            }), " ", c.value, " ", s.jsxs("span", {
                                className: "text-gray-500",
                                children: ["(", c.reviews, ")"]
                            })]
                        })]
                    }), s.jsx("div", {
                        className: "absolute right-8 -top-16 bg-white rounded-2xl p-5 shadow-md max-lg:hidden",
                        children: s.jsxs("div", {
                            className: "flex items-center gap-2 flex-col",
                            children: [s.jsx("div", {
                                className: "great-vibes-regular text-3xl text-center text-gray-500",
                                children: "Legs Go On"
                            }), s.jsx("div", {
                                className: "bruno-ace-sc theme-fill text-3xl",
                                children: p
                            })]
                        })
                    })]
                }), s.jsxs("div", {
                    className: "flex gap-4 max-xl:flex-col",
                    children: [s.jsxs("div", {
                        className: "flex-grow space-y-4",
                        children: [s.jsx("div", {
                            className: "bg-white p-6 rounded-2xl",
                            children: s.jsx("ul", {
                                className: "flex items-center justify-between gap-2 flex-wrap max-sm:grid",
                                children: Rg.map( (v, N) => s.jsxs("li", {
                                    className: "flex items-start gap-1.5",
                                    children: [s.jsx("span", {
                                        className: "mt-[2px] text-rose-500",
                                        children: f.createElement(v.icon)
                                    }), s.jsxs("div", {
                                        className: "grid",
                                        children: [s.jsx("span", {
                                            className: "font-medium text-sm",
                                            children: v.query
                                        }), s.jsx("span", {
                                            className: "text-xs text-gray-500",
                                            children: v.ans
                                        })]
                                    })]
                                }, N))
                            })
                        }), s.jsxs("div", {
                            className: "rounded-2xl bg-white p-6 space-y-10",
                            children: [s.jsxs("div", {
                                children: [s.jsxs("h2", {
                                    className: "text-xl font-semibold mb-3 relative py-1",
                                    children: [s.jsx("span", {
                                        children: "Overview"
                                    }), s.jsx("span", {
                                        className: "absolute -left-6 inline-block top-0 bottom-0 bg-theme-1 w-1 rounded-tr-md rounded-br-md"
                                    })]
                                }), s.jsx("p", {
                                    className: "text-gray-500 text-sm",
                                    children: y
                                })]
                            }), s.jsxs("div", {
                                children: [s.jsxs("h2", {
                                    className: "text-xl font-semibold mb-3 relative py-1",
                                    children: [s.jsx("span", {
                                        children: "Highlights"
                                    }), s.jsx("span", {
                                        className: "absolute -left-6 inline-block top-0 bottom-0 bg-theme-4 w-1 rounded-tr-md rounded-br-md"
                                    })]
                                }), s.jsx("ul", {
                                    className: "text-gray-500 list text-sm space-y-2",
                                    children: b.map( (v, N) => s.jsxs("li", {
                                        className: "flex items-center gap-3",
                                        children: [s.jsx("span", {
                                            className: "inline-block size-[5px] rounded-full bg-theme-4 shrink-0"
                                        }), s.jsx("span", {
                                            children: v
                                        })]
                                    }, N))
                                })]
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "basis-1/4 shrink-0 h-fit sticky top-3 bg-white rounded-2xl p-6 min-h-60",
                        children: [m > 0 && s.jsxs("div", {
                            children: [s.jsxs("h3", {
                                className: "space-x-2",
                                children: [s.jsxs("span", {
                                    className: "font-lg font-semibold",
                                    children: [d, " ", (m == null ? void 0 : m.toFixed(2)) || 0]
                                }), s.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Per Person"
                                })]
                            }), s.jsxs("div", {
                                className: "flex justify-between items-center mt-2",
                                children: [s.jsxs("span", {
                                    className: "text-gray-500 line-through font-light text-sm",
                                    children: [d, " ", x]
                                }), s.jsxs("span", {
                                    className: "text-[10px] bg-green-50 text-green-600 px-1 rounded-lg whitespace-nowrap",
                                    children: ["SAVE ", d, " ", g]
                                }), s.jsx("span", {
                                    className: "bg-theme text-[10px] text-white px-2 py-[2px] rounded-2xl",
                                    children: w
                                })]
                            })]
                        }), !(m > 0) && s.jsx("div", {
                            children: s.jsx("h2", {
                                className: "space-x-2 text-center",
                                children: s.jsx("span", {
                                    className: "theme-fill font-lg font-semibold",
                                    children: "Enquire Now for Best Offer"
                                })
                            })
                        }), s.jsx("div", {
                            className: "h-[1px] my-3"
                        }), s.jsx(Vg, {
                            id: u
                        })]
                    })]
                })]
            }), s.jsx("div", {
                className: "py-16",
                children: s.jsx(Be, {
                    heading: "You might also like",
                    data: o.slice(0, 20),
                    animateOnce: !0
                })
            })]
        })]
    })
}
  , Vg = ({id: e}) => {
    const [t,a] = f.useState(null)
      , [n,i] = f.useState("+91")
      , [r,o] = f.useState({
        fullName: "",
        email: "",
        phone: "",
        travelCount: "",
        message: ""
    })
      , l = m => {
        o(h => ({
            ...h,
            [m.target.name]: m.target.value
        }))
    }
      , {sendEnquiry: c, loading: u} = Vn()
      , d = m => {
        if (m.preventDefault(),
        !t)
            return ne.warning("Please select travel date");
        if (!n)
            return ne.warning("Please select country code");
        c({
            ...r,
            travelDate: t,
            countryCode: n,
            travelId: e
        })
    }
    ;
    return s.jsxs("form", {
        onSubmit: d,
        children: [s.jsxs("div", {
            className: "space-y-2 text-xs",
            children: [s.jsx("input", {
                type: "text",
                placeholder: "Full Name",
                name: "fullName",
                value: r.fullName,
                required: !0,
                onChange: m => l(m),
                className: "w-full p-3 outline-none border-2 border-gray-200 rounded-md focus-within:border-black"
            }), s.jsx("input", {
                type: "email",
                placeholder: "Email",
                name: "email",
                value: r.email,
                required: !0,
                onChange: m => l(m),
                className: "w-full p-3 outline-none border-2 border-gray-200 rounded-md focus-within:border-black"
            }), s.jsxs("div", {
                className: "flex gap-2 items-center",
                children: [s.jsxs(Ul, {
                    value: n,
                    onValueChange: m => i(m),
                    children: [s.jsx(Cn, {
                        className: "focus:ring-offset-0 w-20 border-2 h-10 text-xs",
                        children: s.jsx(ql, {
                            placeholder: "+ Add"
                        })
                    }), s.jsx(Sn, {
                        children: Xl.map(m => s.jsx(Tn, {
                            value: m,
                            className: "text-xs",
                            children: m
                        }, m))
                    })]
                }), s.jsx("input", {
                    type: "number",
                    placeholder: "Your Phone",
                    name: "phone",
                    value: r.phone,
                    required: !0,
                    onChange: m => l(m),
                    className: "w-full p-3 outline-none border-2 border-gray-200 rounded-md focus-within:border-black"
                })]
            }), s.jsxs("div", {
                className: "flex gap-2",
                children: [s.jsx(_g, {
                    date: t,
                    setDate: a
                }), s.jsx("input", {
                    type: "number",
                    placeholder: "Traveller Count",
                    required: !0,
                    value: r.travelCount,
                    name: "travelCount",
                    onChange: m => l(m),
                    className: "w-full p-3 outline-none border-2 border-gray-200 rounded-md focus-within:border-black"
                })]
            }), s.jsx("textarea", {
                value: r.message,
                name: "message",
                onChange: m => l(m),
                placeholder: "Message",
                className: "w-full h-24 p-3 outline-none border-2 border-gray-200 rounded-md focus-within:border-black"
            })]
        }), s.jsxs("button", {
            disabled: u,
            type: "submit",
            className: R("text-xs py-3 w-full rounded-md bg-[#051036] text-white block mx-auto mt-2 relative", u && "pointer-events-none"),
            children: [s.jsx("span", {
                className: R(u && "invisible"),
                children: "Send Enquiry"
            }), u && s.jsx("span", {
                className: "absolute inset-0 grid place-content-center",
                children: s.jsx(Ls, {
                    size: "22",
                    color: "white"
                })
            })]
        })]
    })
}
  , _g = ({date: e, setDate: t, placeholder: a="Travel Date"}) => s.jsxs(Pn, {
    children: [s.jsx(Mn, {
        asChild: !0,
        children: s.jsxs(yt, {
            variant: "outline",
            size: "sm",
            className: R("w-full flex justify-start gap-2 h-11 text-left font-normal text-xs"),
            children: [e ? Ce(e, "PPP") : s.jsx("span", {
                className: "text-gray-400 text-left",
                children: a
            }), s.jsx(Oa, {
                className: "size-4 opacity-50"
            })]
        })
    }), s.jsx(Bs, {
        className: "w-auto p-0",
        align: "start",
        children: s.jsx(_s, {
            mode: "single",
            selected: e,
            onSelect: t,
            disabled: n => n <= new Date
        })
    })]
})
  , Nr = {
    tour: [{
        id: 1,
        images: ["https://img2.oastatic.com/img2/9338305/800x800/variant.jpg", "https://img2.oastatic.com/img2/9338305/800x800/variant.jpg"],
        duration: "5 days & 4 nights",
        rating: {
            value: 4.9,
            reviews: 45
        },
        title: "Experience the Majestic Zermatt and the Iconic Matterhorn",
        itinerary: "2D Zermatt • 2D Gornergrat • 1D Klein Matterhorn",
        price: 12e4,
        originalPrice: 16e4,
        discount: 4e4,
        saleType: "WINTER SALE",
        currency: "INR"
    }, {
        id: 2,
        images: ["https://i.cdn.newsbytesapp.com/images/l73820240304105354.jpeg", "https://i.cdn.newsbytesapp.com/images/l73820240304105354.jpeg"],
        duration: "4 days & 3 nights",
        rating: {
            value: 4.8,
            reviews: 38
        },
        title: "Thrilling Interlaken Adventure in the Heart of the Swiss Alps",
        itinerary: "2D Interlaken • 1D Jungfraujoch • 1D Lake Brienz",
        price: 1e5,
        originalPrice: 13e4,
        discount: 3e4,
        saleType: "SUMMER SALE",
        currency: "INR"
    }, {
        id: 3,
        images: ["https://holidaystoswitzerland.com/wp-content/uploads/2019/11/Pilatus-Kulm.jpg", "https://holidaystoswitzerland.com/wp-content/uploads/2019/11/Pilatus-Kulm.jpg"],
        duration: "3 days & 2 nights",
        rating: {
            value: 4.7,
            reviews: 25
        },
        title: "Discover Lucerne and Conquer Mount Pilatus on an Epic Journey",
        itinerary: "2D Lucerne • 1D Mount Pilatus",
        price: 85e3,
        originalPrice: 115e3,
        discount: 3e4,
        saleType: "SPRING SALE",
        currency: "INR"
    }, {
        id: 4,
        images: ["https://atlantahomesmag.com/wp-content/uploads/2019/05/View_Cathedrale_copyright_www.diapo_.ch_.jpg", "https://atlantahomesmag.com/wp-content/uploads/2019/05/View_Cathedrale_copyright_www.diapo_.ch_.jpg"],
        duration: "4 days & 3 nights",
        rating: {
            value: 4.6,
            reviews: 30
        },
        title: "Explore the Charms of Geneva and the Scenic Beauty of Lake Geneva",
        itinerary: "2D Geneva • 1D Montreux • 1D Lake Geneva",
        price: 105e3,
        originalPrice: 135e3,
        discount: 3e4,
        saleType: "AUTUMN SALE",
        currency: "INR"
    }, {
        id: 5,
        images: ["https://www.skiresorts.net/wp-content/uploads/2019/10/st-moritz.jpg", "https://www.skiresorts.net/wp-content/uploads/2019/10/st-moritz.jpg"],
        duration: "6 days & 5 nights",
        rating: {
            value: 4.9,
            reviews: 50
        },
        title: "Ultimate St. Moritz Ski Holiday in the Swiss Engadin Valley",
        itinerary: "5D St. Moritz • 1D Diavolezza",
        price: 16e4,
        originalPrice: 2e5,
        discount: 4e4,
        saleType: "WINTER SALE",
        currency: "INR"
    }],
    activities: [{
        id: 6,
        images: ["https://jennamorrissey.com/wp-content/uploads/2018/04/Zurich-48.jpg", "https://jennamorrissey.com/wp-content/uploads/2018/04/Zurich-48.jpg"],
        duration: "8 hours",
        rating: {
            value: 4.8,
            reviews: 85
        },
        title: "Guided Tour of Zurich Old Town",
        itinerary: "Zurich Old Town",
        price: 5e3,
        originalPrice: 7e3,
        discount: 2e3,
        saleType: "SUMMER SALE",
        currency: "INR"
    }, {
        id: 7,
        images: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/65/52/6c/caption.jpg?w=500&h=400&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/65/52/6c/caption.jpg?w=500&h=400&s=1"],
        duration: "6 hours",
        rating: {
            value: 4.9,
            reviews: 110
        },
        title: "Lucerne City and Lake Tour",
        itinerary: "Lucerne City • Lake Lucerne",
        price: 6e3,
        originalPrice: 8e3,
        discount: 2e3,
        saleType: "SPRING SALE",
        currency: "INR"
    }, {
        id: 8,
        images: ["https://cdn.tourcms.com/a/11676/2288/1/default.jpg", "https://cdn.tourcms.com/a/11676/2288/1/default.jpg"],
        duration: "9 hours",
        rating: {
            value: 4.7,
            reviews: 90
        },
        title: "Day Trip to Jungfraujoch",
        itinerary: "Jungfraujoch",
        price: 1e4,
        originalPrice: 13e3,
        discount: 3e3,
        saleType: "WINTER SALE",
        currency: "INR"
    }, {
        id: 9,
        images: ["https://openskies.com.lb/wp-content/uploads/2018/04/Geneva-City-Tour-Boat-Cruise1-e1687185453204.jpg", "https://openskies.com.lb/wp-content/uploads/2018/04/Geneva-City-Tour-Boat-Cruise1-e1687185453204.jpg"],
        duration: "5 hours",
        rating: {
            value: 4.6,
            reviews: 75
        },
        title: "Geneva City Tour and Boat Cruise",
        itinerary: "Geneva City • Boat Cruise",
        price: 4e3,
        originalPrice: 5500,
        discount: 1500,
        saleType: "LAST MINUTE OFFER",
        currency: "INR"
    }, {
        id: 10,
        images: ["https://mapsandmerlot.com/wp-content/uploads/2017/10/1.-Paragliding-1024x768.jpg", "https://mapsandmerlot.com/wp-content/uploads/2017/10/1.-Paragliding-1024x768.jpg"],
        duration: "7 hours",
        rating: {
            value: 4.8,
            reviews: 100
        },
        title: "Interlaken Adventure Sports Day",
        itinerary: "Interlaken",
        price: 8e3,
        originalPrice: 1e4,
        discount: 2e3,
        saleType: "HOLIDAY SPECIAL",
        currency: "INR"
    }]
}
  , Og = {
    tour: [{
        id: 16,
        images: ["https://nitsaholidays.in/uploads/blog/991563iStock-1150053291-scaled.jpg", "https://nitsaholidays.in/uploads/blog/991563iStock-1150053291-scaled.jpg"],
        duration: "7 days & 6 nights",
        rating: {
            value: 4.9,
            reviews: 130
        },
        title: "Explore the Vibrant Cities of Tokyo and Kyoto",
        itinerary: "3D Tokyo • 4D Kyoto",
        price: 95e3,
        originalPrice: 125e3,
        discount: 3e4,
        saleType: "SUMMER SALE",
        currency: "INR"
    }, {
        id: 17,
        images: ["https://www.datocms-assets.com/101439/1716253342-hiroshima-castle.webp?auto=format&h=1000&w=2000", "https://www.datocms-assets.com/101439/1716253342-hiroshima-castle.webp?auto=format&h=1000&w=2000"],
        duration: "6 days & 5 nights",
        rating: {
            value: 4.8,
            reviews: 115
        },
        title: "Discover the Charm of Osaka and Hiroshima",
        itinerary: "3D Osaka • 3D Hiroshima",
        price: 8e4,
        originalPrice: 105e3,
        discount: 25e3,
        saleType: "SPRING SALE",
        currency: "INR"
    }, {
        id: 18,
        images: ["https://a1.cdn.japantravel.com/photo/68690-229923/1440x960!/hokkaido-an-otaru-day-trip-from-sapporo-229923.jpg", "https://a1.cdn.japantravel.com/photo/68690-229923/1440x960!/hokkaido-an-otaru-day-trip-from-sapporo-229923.jpg"],
        duration: "5 days & 4 nights",
        rating: {
            value: 4.7,
            reviews: 95
        },
        title: "Experience the Beauty of Sapporo and Otaru",
        itinerary: "2D Sapporo • 3D Otaru",
        price: 7e4,
        originalPrice: 9e4,
        discount: 2e4,
        saleType: "WINTER SALE",
        currency: "INR"
    }, {
        id: 19,
        images: ["https://cdn.kimkim.com/files/a/images/238ef27051785a645f5ac77INR60e5c3ce1150ce/original-80234e1954b03e3c5aa1d061f40c1498.jpg", "https://cdn.kimkim.com/files/a/images/238ef27051785a645f5ac77INR60e5c3ce1150ce/original-80234e1954b03e3c5aa1d061f40c1498.jpg"],
        duration: "8 days & 7 nights",
        rating: {
            value: 4.9,
            reviews: 145
        },
        title: "Adventurous Tour of Tokyo, Kyoto, and Osaka",
        itinerary: "3D Tokyo • 3D Kyoto • 2D Osaka",
        price: 105e3,
        originalPrice: 14e4,
        discount: 35e3,
        saleType: "EARLY BIRD",
        currency: "INR"
    }, {
        id: 20,
        images: ["https://www.datocms-assets.com/101439/1702952163-traveller-stand-on-red-torii-on-the-hakone-lake.webp?auto=format&fit=crop&h=800&w=1200", "https://www.datocms-assets.com/101439/1702952163-traveller-stand-on-red-torii-on-the-hakone-lake.webp?auto=format&fit=crop&h=800&w=1200"],
        duration: "4 days & 3 nights",
        rating: {
            value: 4.6,
            reviews: 85
        },
        title: "Relax in the Scenic Beauty of Hakone",
        itinerary: "4D Hakone",
        price: 55e3,
        originalPrice: 7e4,
        discount: 15e3,
        saleType: "LAST MINUTE OFFER",
        currency: "INR"
    }, {
        id: 19,
        images: ["https://a1.cdn.japantravel.com/photo/68690-229923/1440x960!/hokkaido-an-otaru-day-trip-from-sapporo-229923.jpg", "https://a1.cdn.japantravel.com/photo/68690-229923/1440x960!/hokkaido-an-otaru-day-trip-from-sapporo-229923.jpg"],
        duration: "5 days & 4 nights",
        rating: {
            value: 4.7,
            reviews: 95
        },
        title: "Experience the Beauty of Sapporo and Otaru",
        itinerary: "2D Sapporo • 3D Otaru",
        price: 7e4,
        originalPrice: 9e4,
        discount: 2e4,
        saleType: "WINTER SALE",
        currency: "INR"
    }]
}
  , zg = ["https://media1.thrillophilia.com/filestore/lpzo9qgs6ia4604lkgi80l1jjih6_shutterstock_112137761.jpg?w=auto&h=600", "https://www.travelandleisure.com/thmb/k53-FUyx7Uyg1CzpuTuMSZXvY64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-dubai-DUBAITG1123-17390625954c4be3902a440d8fffde67.jpg", "https://media1.thrillophilia.com/filestore/ogr7tbiowoewynzlkkcrpt7nt43l_shutterstock_505022506.jpg?dpr=0.75&w=1486"]
  , Fg = () => s.jsxs("div", {
    children: [s.jsxs("div", {
        className: "relative",
        children: [s.jsx(Wt, {
            noControls: !0,
            aspectRatio: "4.5/1",
            slides: zg
        }), s.jsx("div", {
            className: "absolute inset-0 bg-black/30 grid place-content-center text-white",
            children: s.jsx("h2", {
                className: "text-3xl sm:text-4xl font-semibold",
                children: s.jsx(et, {
                    text: "Explore Destinations"
                })
            })
        })]
    }), s.jsx("br", {}), s.jsx("br", {}), s.jsxs(ge, {
        children: [s.jsx(Be, {
            heading: "Holiday Packages",
            data: Og.tour,
            animateOnce: !0
        }), s.jsx("br", {}), s.jsx("br", {}), s.jsx(Be, {
            heading: "Safari Adventures",
            data: Nr.activities,
            animateOnce: !0
        }), s.jsx("br", {}), s.jsx("br", {}), s.jsx(Be, {
            heading: "City Explorations",
            data: Nr.tour,
            animateOnce: !0
        })]
    }), s.jsx("br", {}), s.jsx("br", {}), s.jsx("br", {})]
})
  , $g = () => s.jsx("div", {
    className: "bg-gray-100 min-h-screen flex flex-col items-center justify-center py-5",
    children: s.jsxs("div", {
        className: "max-w-3xl bg-white p-8 shadow-md rounded-lg",
        children: [s.jsx("h1", {
            className: "text-3xl text-center theme-fill font-bold mb-4",
            children: "Privacy Policy"
        }), s.jsxs("p", {
            className: "mb-6 text-justify",
            children: [s.jsx("span", {
                className: "theme-fill font-medium",
                children: " LEGSGO "
            }), " Corporate considers the security and protection of your personal data and information important. Therefore, ", s.jsx("span", {
                className: "theme-fill font-medium",
                children: " LEGSGO "
            }), " Corporate operates its website in compliance with applicable laws on data privacy protection and data security."]
        }), s.jsxs("p", {
            className: "mb-6 text-justify",
            children: ["Below, we provide information on the types of data we collect through all ", s.jsx("span", {
                className: "theme-fill font-medium",
                children: " LEGSGO "
            }), " Corporate websites, the purpose we use such data, and parties with which we share such data, where applicable."]
        }), s.jsx("h2", {
            className: "text-2xl font-bold mb-2",
            children: "Collected Data and Purpose of Processing"
        }), s.jsx("p", {
            className: "mb-6 text-justify",
            children: "We only collect personal data (e.g. Names, Country, Location, Telephone/ Mobile, Email ID, etc.) with regard to operating our website only when you voluntarily provided this data to us (e.g. through registration, contact inquiries, surveys, etc.) and we are entitled to use or process such data by virtue of permission granted by you on the basis of statutory provision."
        }), s.jsx("p", {
            className: "mb-6 text-justify",
            children: "As a general rule, we only use such data exclusively for the purpose for which the data was disclosed to us by you, such as to answer your inquiries, grant you access, process your orders, etc."
        }), s.jsx("h2", {
            className: "text-2xl font-bold mb-2",
            children: "Data Sharing"
        }), s.jsxs("p", {
            className: "mb-6 text-justify",
            children: ["For the purpose indicated above, insofar, as you have provided your consent, or when we are legally entitled to do so, we will share your personal data with the subsidiaries of ", s.jsx("span", {
                className: "theme-fill font-medium",
                children: " LEGSGO "
            }), " Corporate, wherever required."]
        }), s.jsxs("p", {
            className: "mb-6 text-justify",
            children: ["In connection with the operation of this website and the services offered ", s.jsx("span", {
                className: "theme-fill font-medium",
                children: " LEGSGO "
            }), " Corporate works as a network of all its subdivisions. These Strategic Business units are located in and outside India, possibly, all over the Asia, in this regard; the applicability of data secrecy and protection laws may vary. In such cases, ", s.jsx("span", {
                className: "theme-fill font-medium",
                children: " LEGSGO "
            }), " Corporate takes measures to ensure an appropriate level of data privacy and protection."]
        }), s.jsx("p", {
            className: "mb-6 text-justify",
            children: "Data is shared only in compliance with the applicable laws and regulations. We do not sell or otherwise market your personal data to third parties."
        }), s.jsx("h2", {
            className: "text-2xl font-bold mb-2",
            children: "Questions, Comments and Amendments"
        }), s.jsxs("p", {
            className: "mb-6 text-justify",
            children: [s.jsx("span", {
                className: "theme-fill font-medium",
                children: " LEGSGO "
            }), " Corporate will respond to all the legitimate requests for information, and wherever applicable to correct, amend or delete your personal data. If you wish to make such a request or if you have questions or comments about this Data Privacy Policy, please click on “Contact Us” and feel free to share."]
        }), s.jsx("p", {
            className: "mb-6 text-justify",
            children: "This Data Privacy policy is updated on a regular basis. You will find the date of the last update on this page."
        }), s.jsx("p", {
            className: "text-right text-sm text-gray-400",
            children: "last updated on: August 01, 2024"
        })]
    })
})
  , Hg = ({destination: e}) => {
    const {data: t, loading: a, error: n} = xe(m => m.allDestinations)
      , {data: i, loading: r, error: o} = xe(m => m.allPackages)
      , l = e.toLowerCase()
      , c = t.filter(m => m.location.toLowerCase() === l)
      , u = i.filter(m => m.country.toLowerCase() === l)
      , d = Array.from(new Set([...c.map(m => m.images).flat(), ...u.map(m => m.images).flat()]));
    return a || r ? s.jsx(ie, {
        message: "Fetching Travel Details..."
    }) : n || o || d.length === 0 ? s.jsx(ie, {
        message: "Coming soon!",
        forError: !0
    }) : s.jsxs("div", {
        children: [s.jsxs("div", {
            className: "relative",
            children: [s.jsx(Wt, {
                noControls: !0,
                aspectRatio: "4.5/1",
                slides: d
            }), s.jsx("div", {
                className: "absolute inset-0 bg-black/30 grid place-content-center text-white",
                children: s.jsx("h2", {
                    className: "text-3xl sm:text-4xl font-semibold",
                    children: s.jsx(et, {
                        text: e
                    })
                })
            })]
        }), s.jsx("div", {
            className: "w-[min(1024px,100%-2rem)] mx-auto mt-10",
            children: s.jsx(ge, {
                children: u.length > 0 && s.jsx(Be, {
                    data: u,
                    animateOnce: !0,
                    asCarousel: !1,
                    heading: "Popular Packages",
                    loading: a,
                    isPackage: !0
                })
            })
        }), u.length > 0 && s.jsx("br", {}) && s.jsx("br", {}), s.jsxs("div", {
            className: "w-[min(1024px,100%-2rem)] mx-auto mt-10",
            children: [s.jsx("h2", {
                className: "text-2xl max-sm:text-xl font-semibold mb-5 text-center",
                children: "Trending Activities"
            }), c.length > 0 ? s.jsx(L0, {
                slides: c
            }) : s.jsx(ie, {
                heightAuto: !0,
                message: "Coming soon!",
                forError: !0
            })]
        }), s.jsx("br", {}), s.jsx("br", {}), s.jsx(ge, {
            children: s.jsx(Be, {
                data: c.reverse(),
                animateOnce: !0,
                asCarousel: !1,
                heading: "Explore",
                loading: a
            })
        }), s.jsx("br", {}), s.jsx("br", {})]
    })
}
  , oc = _c
  , _n = f.forwardRef( ({className: e, ...t}, a) => s.jsx(Bc, {
    ref: a,
    className: R("border-b", e),
    ...t
}));
_n.displayName = "AccordionItem";
const On = f.forwardRef( ({className: e, children: t, ...a}, n) => s.jsx(Vc, {
    className: "flex",
    children: s.jsxs(zr, {
        ref: n,
        className: R("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", e),
        ...a,
        children: [t, s.jsx(Ia, {
            className: "h-4 w-4 shrink-0 transition-transform duration-200"
        })]
    })
}));
On.displayName = zr.displayName;
const zn = f.forwardRef( ({className: e, children: t, ...a}, n) => s.jsx(Fr, {
    ref: n,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...a,
    children: s.jsx("div", {
        className: R("pb-4 pt-0", e),
        children: t
    })
}));
zn.displayName = Fr.displayName;
const Wg = ({faqCollections: e}) => s.jsxs("div", {
    className: "rounded-2xl bg-white p-6 space-y-10",
    children: [s.jsxs("h2", {
        className: "text-xl font-semibold mb-3 relative py-1",
        children: [s.jsx("span", {
            children: "Frequently Asked Questions"
        }), s.jsx("span", {
            className: "absolute -left-6 inline-block top-0 bottom-0 bg-theme-1 w-1 rounded-tr-md rounded-br-md"
        })]
    }), s.jsx(Gg, {
        faqCollections: e
    })]
});
function Gg({faqCollections: e}) {
    return s.jsx(oc, {
        type: "single",
        collapsible: !0,
        className: "w-full",
        children: e.map( (t, a) => s.jsxs(_n, {
            value: `Key${a}`,
            children: [s.jsx(On, {
                children: t.question
            }), s.jsx(zn, {
                children: t.answer
            })]
        }, a))
    })
}
const Ug = () => s.jsxs("div", {
    className: "rounded-2xl bg-white p-6 space-y-10",
    children: [s.jsxs("h2", {
        className: "text-xl font-semibold mb-3 relative py-1",
        children: [s.jsx("span", {
            children: "Gallery"
        }), s.jsx("span", {
            className: "absolute -left-6 inline-block top-0 bottom-0 bg-theme-1 w-1 rounded-tr-md rounded-br-md"
        })]
    }), s.jsx(ie, {
        heightAuto: !0,
        message: "Coming soon!",
        forError: !0
    })]
})
  , lc = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];
function it(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__
}
function mt(e, t) {
    const a = ["__proto__", "constructor", "prototype"];
    Object.keys(t).filter(n => a.indexOf(n) < 0).forEach(n => {
        typeof e[n] > "u" ? e[n] = t[n] : it(t[n]) && it(e[n]) && Object.keys(t[n]).length > 0 ? t[n].__swiper__ ? e[n] = t[n] : mt(e[n], t[n]) : e[n] = t[n]
    }
    )
}
function cc(e) {
    return e === void 0 && (e = {}),
    e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u"
}
function dc(e) {
    return e === void 0 && (e = {}),
    e.pagination && typeof e.pagination.el > "u"
}
function uc(e) {
    return e === void 0 && (e = {}),
    e.scrollbar && typeof e.scrollbar.el > "u"
}
function mc(e) {
    e === void 0 && (e = "");
    const t = e.split(" ").map(n => n.trim()).filter(n => !!n)
      , a = [];
    return t.forEach(n => {
        a.indexOf(n) < 0 && a.push(n)
    }
    ),
    a.join(" ")
}
function qg(e) {
    return e === void 0 && (e = ""),
    e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
}
function Yg(e) {
    let {swiper: t, slides: a, passedParams: n, changedParams: i, nextEl: r, prevEl: o, scrollbarEl: l, paginationEl: c} = e;
    const u = i.filter(j => j !== "children" && j !== "direction" && j !== "wrapperClass")
      , {params: d, pagination: m, navigation: h, scrollbar: g, virtual: x, thumbs: w} = t;
    let b, y, p, v, N, k, P, D;
    i.includes("thumbs") && n.thumbs && n.thumbs.swiper && d.thumbs && !d.thumbs.swiper && (b = !0),
    i.includes("controller") && n.controller && n.controller.control && d.controller && !d.controller.control && (y = !0),
    i.includes("pagination") && n.pagination && (n.pagination.el || c) && (d.pagination || d.pagination === !1) && m && !m.el && (p = !0),
    i.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || l) && (d.scrollbar || d.scrollbar === !1) && g && !g.el && (v = !0),
    i.includes("navigation") && n.navigation && (n.navigation.prevEl || o) && (n.navigation.nextEl || r) && (d.navigation || d.navigation === !1) && h && !h.prevEl && !h.nextEl && (N = !0);
    const C = j => {
        t[j] && (t[j].destroy(),
        j === "navigation" ? (t.isElement && (t[j].prevEl.remove(),
        t[j].nextEl.remove()),
        d[j].prevEl = void 0,
        d[j].nextEl = void 0,
        t[j].prevEl = void 0,
        t[j].nextEl = void 0) : (t.isElement && t[j].el.remove(),
        d[j].el = void 0,
        t[j].el = void 0))
    }
    ;
    i.includes("loop") && t.isElement && (d.loop && !n.loop ? k = !0 : !d.loop && n.loop ? P = !0 : D = !0),
    u.forEach(j => {
        if (it(d[j]) && it(n[j]))
            Object.assign(d[j], n[j]),
            (j === "navigation" || j === "pagination" || j === "scrollbar") && "enabled"in n[j] && !n[j].enabled && C(j);
        else {
            const A = n[j];
            (A === !0 || A === !1) && (j === "navigation" || j === "pagination" || j === "scrollbar") ? A === !1 && C(j) : d[j] = n[j]
        }
    }
    ),
    u.includes("controller") && !y && t.controller && t.controller.control && d.controller && d.controller.control && (t.controller.control = d.controller.control),
    i.includes("children") && a && x && d.virtual.enabled ? (x.slides = a,
    x.update(!0)) : i.includes("virtual") && x && d.virtual.enabled && (a && (x.slides = a),
    x.update(!0)),
    i.includes("children") && a && d.loop && (D = !0),
    b && w.init() && w.update(!0),
    y && (t.controller.control = d.controller.control),
    p && (t.isElement && (!c || typeof c == "string") && (c = document.createElement("div"),
    c.classList.add("swiper-pagination"),
    c.part.add("pagination"),
    t.el.appendChild(c)),
    c && (d.pagination.el = c),
    m.init(),
    m.render(),
    m.update()),
    v && (t.isElement && (!l || typeof l == "string") && (l = document.createElement("div"),
    l.classList.add("swiper-scrollbar"),
    l.part.add("scrollbar"),
    t.el.appendChild(l)),
    l && (d.scrollbar.el = l),
    g.init(),
    g.updateSize(),
    g.setTranslate()),
    N && (t.isElement && ((!r || typeof r == "string") && (r = document.createElement("div"),
    r.classList.add("swiper-button-next"),
    r.innerHTML = t.hostEl.constructor.nextButtonSvg,
    r.part.add("button-next"),
    t.el.appendChild(r)),
    (!o || typeof o == "string") && (o = document.createElement("div"),
    o.classList.add("swiper-button-prev"),
    o.innerHTML = t.hostEl.constructor.prevButtonSvg,
    o.part.add("button-prev"),
    t.el.appendChild(o))),
    r && (d.navigation.nextEl = r),
    o && (d.navigation.prevEl = o),
    h.init(),
    h.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = n.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = n.allowSlidePrev),
    i.includes("direction") && t.changeDirection(n.direction, !1),
    (k || D) && t.loopDestroy(),
    (P || D) && t.loopCreate(),
    t.update()
}
function Kg(e, t) {
    e === void 0 && (e = {}),
    t === void 0 && (t = !0);
    const a = {
        on: {}
    }
      , n = {}
      , i = {};
    mt(a, wd),
    a._emitClasses = !0,
    a.init = !1;
    const r = {}
      , o = lc.map(c => c.replace(/_/, ""))
      , l = Object.assign({}, e);
    return Object.keys(l).forEach(c => {
        typeof e[c] > "u" || (o.indexOf(c) >= 0 ? it(e[c]) ? (a[c] = {},
        i[c] = {},
        mt(a[c], e[c]),
        mt(i[c], e[c])) : (a[c] = e[c],
        i[c] = e[c]) : c.search(/on[A-Z]/) === 0 && typeof e[c] == "function" ? t ? n[`${c[2].toLowerCase()}${c.substr(3)}`] = e[c] : a.on[`${c[2].toLowerCase()}${c.substr(3)}`] = e[c] : r[c] = e[c])
    }
    ),
    ["navigation", "pagination", "scrollbar"].forEach(c => {
        a[c] === !0 && (a[c] = {}),
        a[c] === !1 && delete a[c]
    }
    ),
    {
        params: a,
        passedParams: i,
        rest: r,
        events: n
    }
}
function Xg(e, t) {
    let {el: a, nextEl: n, prevEl: i, paginationEl: r, scrollbarEl: o, swiper: l} = e;
    cc(t) && n && i && (l.params.navigation.nextEl = n,
    l.originalParams.navigation.nextEl = n,
    l.params.navigation.prevEl = i,
    l.originalParams.navigation.prevEl = i),
    dc(t) && r && (l.params.pagination.el = r,
    l.originalParams.pagination.el = r),
    uc(t) && o && (l.params.scrollbar.el = o,
    l.originalParams.scrollbar.el = o),
    l.init(a)
}
function Zg(e, t, a, n, i) {
    const r = [];
    if (!t)
        return r;
    const o = c => {
        r.indexOf(c) < 0 && r.push(c)
    }
    ;
    if (a && n) {
        const c = n.map(i)
          , u = a.map(i);
        c.join("") !== u.join("") && o("children"),
        n.length !== a.length && o("children")
    }
    return lc.filter(c => c[0] === "_").map(c => c.replace(/_/, "")).forEach(c => {
        if (c in e && c in t)
            if (it(e[c]) && it(t[c])) {
                const u = Object.keys(e[c])
                  , d = Object.keys(t[c]);
                u.length !== d.length ? o(c) : (u.forEach(m => {
                    e[c][m] !== t[c][m] && o(c)
                }
                ),
                d.forEach(m => {
                    e[c][m] !== t[c][m] && o(c)
                }
                ))
            } else
                e[c] !== t[c] && o(c)
    }
    ),
    r
}
const Jg = e => {
    !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
}
;
function Ns() {
    return Ns = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
        }
        return e
    }
    ,
    Ns.apply(this, arguments)
}
function hc(e) {
    return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
}
function pc(e) {
    const t = [];
    return E.Children.toArray(e).forEach(a => {
        hc(a) ? t.push(a) : a.props && a.props.children && pc(a.props.children).forEach(n => t.push(n))
    }
    ),
    t
}
function Qg(e) {
    const t = []
      , a = {
        "container-start": [],
        "container-end": [],
        "wrapper-start": [],
        "wrapper-end": []
    };
    return E.Children.toArray(e).forEach(n => {
        if (hc(n))
            t.push(n);
        else if (n.props && n.props.slot && a[n.props.slot])
            a[n.props.slot].push(n);
        else if (n.props && n.props.children) {
            const i = pc(n.props.children);
            i.length > 0 ? i.forEach(r => t.push(r)) : a["container-end"].push(n)
        } else
            a["container-end"].push(n)
    }
    ),
    {
        slides: t,
        slots: a
    }
}
function e1(e, t, a) {
    if (!a)
        return null;
    const n = d => {
        let m = d;
        return d < 0 ? m = t.length + d : m >= t.length && (m = m - t.length),
        m
    }
      , i = e.isHorizontal() ? {
        [e.rtlTranslate ? "right" : "left"]: `${a.offset}px`
    } : {
        top: `${a.offset}px`
    }
      , {from: r, to: o} = a
      , l = e.params.loop ? -t.length : 0
      , c = e.params.loop ? t.length * 2 : t.length
      , u = [];
    for (let d = l; d < c; d += 1)
        d >= r && d <= o && u.push(t[n(d)]);
    return u.map( (d, m) => E.cloneElement(d, {
        swiper: e,
        style: i,
        key: d.props.virtualIndex || d.key || `slide-${m}`
    }))
}
function At(e, t) {
    return typeof window > "u" ? f.useEffect(e, t) : f.useLayoutEffect(e, t)
}
const kr = f.createContext(null)
  , t1 = f.createContext(null)
  , fc = f.forwardRef(function(e, t) {
    let {className: a, tag: n="div", wrapperTag: i="div", children: r, onSwiper: o, ...l} = e === void 0 ? {} : e
      , c = !1;
    const [u,d] = f.useState("swiper")
      , [m,h] = f.useState(null)
      , [g,x] = f.useState(!1)
      , w = f.useRef(!1)
      , b = f.useRef(null)
      , y = f.useRef(null)
      , p = f.useRef(null)
      , v = f.useRef(null)
      , N = f.useRef(null)
      , k = f.useRef(null)
      , P = f.useRef(null)
      , D = f.useRef(null)
      , {params: C, passedParams: j, rest: A, events: M} = Kg(l)
      , {slides: _, slots: B} = Qg(r)
      , O = () => {
        x(!g)
    }
    ;
    Object.assign(C.on, {
        _containerClasses(W, q) {
            d(q)
        }
    });
    const F = () => {
        Object.assign(C.on, M),
        c = !0;
        const W = {
            ...C
        };
        if (delete W.wrapperClass,
        y.current = new jd(W),
        y.current.virtual && y.current.params.virtual.enabled) {
            y.current.virtual.slides = _;
            const q = {
                cache: !1,
                slides: _,
                renderExternal: h,
                renderExternalUpdate: !1
            };
            mt(y.current.params.virtual, q),
            mt(y.current.originalParams.virtual, q)
        }
    }
    ;
    b.current || F(),
    y.current && y.current.on("_beforeBreakpoint", O);
    const Q = () => {
        c || !M || !y.current || Object.keys(M).forEach(W => {
            y.current.on(W, M[W])
        }
        )
    }
      , S = () => {
        !M || !y.current || Object.keys(M).forEach(W => {
            y.current.off(W, M[W])
        }
        )
    }
    ;
    f.useEffect( () => () => {
        y.current && y.current.off("_beforeBreakpoint", O)
    }
    ),
    f.useEffect( () => {
        !w.current && y.current && (y.current.emitSlidesClasses(),
        w.current = !0)
    }
    ),
    At( () => {
        if (t && (t.current = b.current),
        !!b.current)
            return y.current.destroyed && F(),
            Xg({
                el: b.current,
                nextEl: N.current,
                prevEl: k.current,
                paginationEl: P.current,
                scrollbarEl: D.current,
                swiper: y.current
            }, C),
            o && !y.current.destroyed && o(y.current),
            () => {
                y.current && !y.current.destroyed && y.current.destroy(!0, !1)
            }
    }
    , []),
    At( () => {
        Q();
        const W = Zg(j, p.current, _, v.current, q => q.key);
        return p.current = j,
        v.current = _,
        W.length && y.current && !y.current.destroyed && Yg({
            swiper: y.current,
            slides: _,
            passedParams: j,
            changedParams: W,
            nextEl: N.current,
            prevEl: k.current,
            scrollbarEl: D.current,
            paginationEl: P.current
        }),
        () => {
            S()
        }
    }
    ),
    At( () => {
        Jg(y.current)
    }
    , [m]);
    function T() {
        return C.virtual ? e1(y.current, _, m) : _.map( (W, q) => E.cloneElement(W, {
            swiper: y.current,
            swiperSlideIndex: q
        }))
    }
    return E.createElement(n, Ns({
        ref: b,
        className: mc(`${u}${a ? ` ${a}` : ""}`)
    }, A), E.createElement(t1.Provider, {
        value: y.current
    }, B["container-start"], E.createElement(i, {
        className: qg(C.wrapperClass)
    }, B["wrapper-start"], T(), B["wrapper-end"]), cc(C) && E.createElement(E.Fragment, null, E.createElement("div", {
        ref: k,
        className: "swiper-button-prev"
    }), E.createElement("div", {
        ref: N,
        className: "swiper-button-next"
    })), uc(C) && E.createElement("div", {
        ref: D,
        className: "swiper-scrollbar"
    }), dc(C) && E.createElement("div", {
        ref: P,
        className: "swiper-pagination"
    }), B["container-end"]))
});
fc.displayName = "Swiper";
const xc = f.forwardRef(function(e, t) {
    let {tag: a="div", children: n, className: i="", swiper: r, zoom: o, lazy: l, virtualIndex: c, swiperSlideIndex: u, ...d} = e === void 0 ? {} : e;
    const m = f.useRef(null)
      , [h,g] = f.useState("swiper-slide")
      , [x,w] = f.useState(!1);
    function b(N, k, P) {
        k === m.current && g(P)
    }
    At( () => {
        if (typeof u < "u" && (m.current.swiperSlideIndex = u),
        t && (t.current = m.current),
        !(!m.current || !r)) {
            if (r.destroyed) {
                h !== "swiper-slide" && g("swiper-slide");
                return
            }
            return r.on("_slideClass", b),
            () => {
                r && r.off("_slideClass", b)
            }
        }
    }
    ),
    At( () => {
        r && m.current && !r.destroyed && g(r.getSlideClasses(m.current))
    }
    , [r]);
    const y = {
        isActive: h.indexOf("swiper-slide-active") >= 0,
        isVisible: h.indexOf("swiper-slide-visible") >= 0,
        isPrev: h.indexOf("swiper-slide-prev") >= 0,
        isNext: h.indexOf("swiper-slide-next") >= 0
    }
      , p = () => typeof n == "function" ? n(y) : n
      , v = () => {
        w(!0)
    }
    ;
    return E.createElement(a, Ns({
        ref: m,
        className: mc(`${h}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": c,
        onLoad: v
    }, d), o && E.createElement(kr.Provider, {
        value: y
    }, E.createElement("div", {
        className: "swiper-zoom-container",
        "data-swiper-zoom": typeof o == "number" ? o : void 0
    }, p(), l && !x && E.createElement("div", {
        className: "swiper-lazy-preloader"
    }))), !o && E.createElement(kr.Provider, {
        value: y
    }, p(), l && !x && E.createElement("div", {
        className: "swiper-lazy-preloader"
    })))
});
xc.displayName = "SwiperSlide";
function s1(e, t, a, n) {
    return e.params.createElements && Object.keys(n).forEach(i => {
        if (!a[i] && a.auto === !0) {
            let r = Nd(e.el, `.${n[i]}`)[0];
            r || (r = kd("div", n[i]),
            r.className = n[i],
            e.el.append(r)),
            a[i] = r,
            t[i] = r
        }
    }
    ),
    a
}
function kt(e) {
    return e === void 0 && (e = ""),
    `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
}
function a1(e) {
    let {swiper: t, extendParams: a, on: n, emit: i} = e;
    const r = "swiper-pagination";
    a({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: p => p,
            formatFractionTotal: p => p,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
            paginationDisabledClass: `${r}-disabled`
        }
    }),
    t.pagination = {
        el: null,
        bullets: []
    };
    let o, l = 0;
    function c() {
        return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && t.pagination.el.length === 0
    }
    function u(p, v) {
        const {bulletActiveClass: N} = t.params.pagination;
        p && (p = p[`${v === "prev" ? "previous" : "next"}ElementSibling`],
        p && (p.classList.add(`${N}-${v}`),
        p = p[`${v === "prev" ? "previous" : "next"}ElementSibling`],
        p && p.classList.add(`${N}-${v}-${v}`)))
    }
    function d(p, v, N) {
        if (p = p % N,
        v = v % N,
        v === p + 1)
            return "next";
        if (v === p - 1)
            return "previous"
    }
    function m(p) {
        const v = p.target.closest(kt(t.params.pagination.bulletClass));
        if (!v)
            return;
        p.preventDefault();
        const N = Gn(v) * t.params.slidesPerGroup;
        if (t.params.loop) {
            if (t.realIndex === N)
                return;
            const k = d(t.realIndex, N, t.slides.length);
            k === "next" ? t.slideNext() : k === "previous" ? t.slidePrev() : t.slideToLoop(N)
        } else
            t.slideTo(N)
    }
    function h() {
        const p = t.rtl
          , v = t.params.pagination;
        if (c())
            return;
        let N = t.pagination.el;
        N = Se(N);
        let k, P;
        const D = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
          , C = t.params.loop ? Math.ceil(D / t.params.slidesPerGroup) : t.snapGrid.length;
        if (t.params.loop ? (P = t.previousRealIndex || 0,
        k = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : typeof t.snapIndex < "u" ? (k = t.snapIndex,
        P = t.previousSnapIndex) : (P = t.previousIndex || 0,
        k = t.activeIndex || 0),
        v.type === "bullets" && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const j = t.pagination.bullets;
            let A, M, _;
            if (v.dynamicBullets && (o = Sd(j[0], t.isHorizontal() ? "width" : "height"),
            N.forEach(B => {
                B.style[t.isHorizontal() ? "width" : "height"] = `${o * (v.dynamicMainBullets + 4)}px`
            }
            ),
            v.dynamicMainBullets > 1 && P !== void 0 && (l += k - (P || 0),
            l > v.dynamicMainBullets - 1 ? l = v.dynamicMainBullets - 1 : l < 0 && (l = 0)),
            A = Math.max(k - l, 0),
            M = A + (Math.min(j.length, v.dynamicMainBullets) - 1),
            _ = (M + A) / 2),
            j.forEach(B => {
                const O = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(F => `${v.bulletActiveClass}${F}`)].map(F => typeof F == "string" && F.includes(" ") ? F.split(" ") : F).flat();
                B.classList.remove(...O)
            }
            ),
            N.length > 1)
                j.forEach(B => {
                    const O = Gn(B);
                    O === k ? B.classList.add(...v.bulletActiveClass.split(" ")) : t.isElement && B.setAttribute("part", "bullet"),
                    v.dynamicBullets && (O >= A && O <= M && B.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),
                    O === A && u(B, "prev"),
                    O === M && u(B, "next"))
                }
                );
            else {
                const B = j[k];
                if (B && B.classList.add(...v.bulletActiveClass.split(" ")),
                t.isElement && j.forEach( (O, F) => {
                    O.setAttribute("part", F === k ? "bullet-active" : "bullet")
                }
                ),
                v.dynamicBullets) {
                    const O = j[A]
                      , F = j[M];
                    for (let Q = A; Q <= M; Q += 1)
                        j[Q] && j[Q].classList.add(...`${v.bulletActiveClass}-main`.split(" "));
                    u(O, "prev"),
                    u(F, "next")
                }
            }
            if (v.dynamicBullets) {
                const B = Math.min(j.length, v.dynamicMainBullets + 4)
                  , O = (o * B - o) / 2 - _ * o
                  , F = p ? "right" : "left";
                j.forEach(Q => {
                    Q.style[t.isHorizontal() ? F : "top"] = `${O}px`
                }
                )
            }
        }
        N.forEach( (j, A) => {
            if (v.type === "fraction" && (j.querySelectorAll(kt(v.currentClass)).forEach(M => {
                M.textContent = v.formatFractionCurrent(k + 1)
            }
            ),
            j.querySelectorAll(kt(v.totalClass)).forEach(M => {
                M.textContent = v.formatFractionTotal(C)
            }
            )),
            v.type === "progressbar") {
                let M;
                v.progressbarOpposite ? M = t.isHorizontal() ? "vertical" : "horizontal" : M = t.isHorizontal() ? "horizontal" : "vertical";
                const _ = (k + 1) / C;
                let B = 1
                  , O = 1;
                M === "horizontal" ? B = _ : O = _,
                j.querySelectorAll(kt(v.progressbarFillClass)).forEach(F => {
                    F.style.transform = `translate3d(0,0,0) scaleX(${B}) scaleY(${O})`,
                    F.style.transitionDuration = `${t.params.speed}ms`
                }
                )
            }
            v.type === "custom" && v.renderCustom ? (j.innerHTML = v.renderCustom(t, k + 1, C),
            A === 0 && i("paginationRender", j)) : (A === 0 && i("paginationRender", j),
            i("paginationUpdate", j)),
            t.params.watchOverflow && t.enabled && j.classList[t.isLocked ? "add" : "remove"](v.lockClass)
        }
        )
    }
    function g() {
        const p = t.params.pagination;
        if (c())
            return;
        const v = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
        let N = t.pagination.el;
        N = Se(N);
        let k = "";
        if (p.type === "bullets") {
            let P = t.params.loop ? Math.ceil(v / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && P > v && (P = v);
            for (let D = 0; D < P; D += 1)
                p.renderBullet ? k += p.renderBullet.call(t, D, p.bulletClass) : k += `<${p.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${p.bulletClass}"></${p.bulletElement}>`
        }
        p.type === "fraction" && (p.renderFraction ? k = p.renderFraction.call(t, p.currentClass, p.totalClass) : k = `<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),
        p.type === "progressbar" && (p.renderProgressbar ? k = p.renderProgressbar.call(t, p.progressbarFillClass) : k = `<span class="${p.progressbarFillClass}"></span>`),
        t.pagination.bullets = [],
        N.forEach(P => {
            p.type !== "custom" && (P.innerHTML = k || ""),
            p.type === "bullets" && t.pagination.bullets.push(...P.querySelectorAll(kt(p.bulletClass)))
        }
        ),
        p.type !== "custom" && i("paginationRender", N[0])
    }
    function x() {
        t.params.pagination = s1(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
        });
        const p = t.params.pagination;
        if (!p.el)
            return;
        let v;
        typeof p.el == "string" && t.isElement && (v = t.el.querySelector(p.el)),
        !v && typeof p.el == "string" && (v = [...document.querySelectorAll(p.el)]),
        v || (v = p.el),
        !(!v || v.length === 0) && (t.params.uniqueNavElements && typeof p.el == "string" && Array.isArray(v) && v.length > 1 && (v = [...t.el.querySelectorAll(p.el)],
        v.length > 1 && (v = v.filter(N => Cd(N, ".swiper")[0] === t.el)[0])),
        Array.isArray(v) && v.length === 1 && (v = v[0]),
        Object.assign(t.pagination, {
            el: v
        }),
        v = Se(v),
        v.forEach(N => {
            p.type === "bullets" && p.clickable && N.classList.add(...(p.clickableClass || "").split(" ")),
            N.classList.add(p.modifierClass + p.type),
            N.classList.add(t.isHorizontal() ? p.horizontalClass : p.verticalClass),
            p.type === "bullets" && p.dynamicBullets && (N.classList.add(`${p.modifierClass}${p.type}-dynamic`),
            l = 0,
            p.dynamicMainBullets < 1 && (p.dynamicMainBullets = 1)),
            p.type === "progressbar" && p.progressbarOpposite && N.classList.add(p.progressbarOppositeClass),
            p.clickable && N.addEventListener("click", m),
            t.enabled || N.classList.add(p.lockClass)
        }
        ))
    }
    function w() {
        const p = t.params.pagination;
        if (c())
            return;
        let v = t.pagination.el;
        v && (v = Se(v),
        v.forEach(N => {
            N.classList.remove(p.hiddenClass),
            N.classList.remove(p.modifierClass + p.type),
            N.classList.remove(t.isHorizontal() ? p.horizontalClass : p.verticalClass),
            p.clickable && (N.classList.remove(...(p.clickableClass || "").split(" ")),
            N.removeEventListener("click", m))
        }
        )),
        t.pagination.bullets && t.pagination.bullets.forEach(N => N.classList.remove(...p.bulletActiveClass.split(" ")))
    }
    n("changeDirection", () => {
        if (!t.pagination || !t.pagination.el)
            return;
        const p = t.params.pagination;
        let {el: v} = t.pagination;
        v = Se(v),
        v.forEach(N => {
            N.classList.remove(p.horizontalClass, p.verticalClass),
            N.classList.add(t.isHorizontal() ? p.horizontalClass : p.verticalClass)
        }
        )
    }
    ),
    n("init", () => {
        t.params.pagination.enabled === !1 ? y() : (x(),
        g(),
        h())
    }
    ),
    n("activeIndexChange", () => {
        typeof t.snapIndex > "u" && h()
    }
    ),
    n("snapIndexChange", () => {
        h()
    }
    ),
    n("snapGridLengthChange", () => {
        g(),
        h()
    }
    ),
    n("destroy", () => {
        w()
    }
    ),
    n("enable disable", () => {
        let {el: p} = t.pagination;
        p && (p = Se(p),
        p.forEach(v => v.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)))
    }
    ),
    n("lock unlock", () => {
        h()
    }
    ),
    n("click", (p, v) => {
        const N = v.target
          , k = Se(t.pagination.el);
        if (t.params.pagination.el && t.params.pagination.hideOnClick && k && k.length > 0 && !N.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && N === t.navigation.nextEl || t.navigation.prevEl && N === t.navigation.prevEl))
                return;
            const P = k[0].classList.contains(t.params.pagination.hiddenClass);
            i(P === !0 ? "paginationShow" : "paginationHide"),
            k.forEach(D => D.classList.toggle(t.params.pagination.hiddenClass))
        }
    }
    );
    const b = () => {
        t.el.classList.remove(t.params.pagination.paginationDisabledClass);
        let {el: p} = t.pagination;
        p && (p = Se(p),
        p.forEach(v => v.classList.remove(t.params.pagination.paginationDisabledClass))),
        x(),
        g(),
        h()
    }
      , y = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let {el: p} = t.pagination;
        p && (p = Se(p),
        p.forEach(v => v.classList.add(t.params.pagination.paginationDisabledClass))),
        w()
    }
    ;
    Object.assign(t.pagination, {
        enable: b,
        disable: y,
        render: g,
        update: h,
        init: x,
        destroy: w
    })
}
const n1 = ({itinerary: e}) => {
    const t = f.useMemo( () => e.map( (i, r) => `Day ${String(r + 1).padStart(2, "0")}`), [e])
      , [a,n] = f.useState(0);
    try {
        return s.jsxs(s.Fragment, {
            children: [s.jsx("div", {
                className: "sm:hidden",
                children: s.jsx(fc, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    pagination: {
                        clickable: !0
                    },
                    modules: [a1],
                    className: "mySwiper w-full bg-white shadow-lg h-[400px] relative",
                    children: t.map( (i, r) => s.jsx(xc, {
                        children: s.jsx("div", {
                            className: "relative h-[100%] w-full bg-cover bg-center",
                            style: {
                                backgroundImage: `url('${e[r].image}')`
                            },
                            children: s.jsx("div", {
                                className: "flex h-full w-full flex-col-reverse",
                                children: s.jsx("div", {
                                    className: "relative self-end bg-gradient-to-b from-transparent to-black w-full",
                                    children: s.jsxs("div", {
                                        className: "text-center p-3 relative bg-black/[0.3]",
                                        children: [s.jsx("div", {
                                            className: "bruno-ace-sc pr-3 text-2xl font-semibold text-lime-400",
                                            children: i
                                        }), s.jsx("h4", {
                                            className: "text-xl font-semibold text-yellow-400",
                                            children: e[r].briefDescription
                                        }), s.jsx("p", {
                                            className: "text-sm leading-relaxed text-white mb-5 no-scrollbar overflow-y-scroll max-h-52",
                                            children: e[r].detailedDescription
                                        })]
                                    })
                                })
                            })
                        })
                    }, r))
                })
            }), s.jsx("div", {
                className: "hidden sm:block w-full bg-white shadow-lg h-[400px] relative",
                children: s.jsx("div", {
                    className: "relative h-[100%] w-full bg-cover bg-center",
                    style: {
                        backgroundImage: `url('${e[a].image}')`
                    },
                    children: s.jsxs("div", {
                        className: "flex h-full w-full flex-col-reverse sm:flex-row",
                        children: [s.jsx("div", {
                            className: "relative self-end sm:flex-1",
                            children: s.jsxs("div", {
                                className: "text-center sm:text-right p-3 sm:p-6 bg-white bg-opacity-60 relative z-10 border-1 border-purple-900 sm:border-0",
                                children: [s.jsx("div", {
                                    className: "bruno-ace-sc sm:alex-brush-regular pr-3 text-2xl sm:text-4xl font-semibold theme-fill sm:mb-4 sm:font-semibold sm:text-5xl",
                                    children: t[a]
                                }), s.jsx("h4", {
                                    className: "text-xl font-semibold sm:mb-4 text-theme-2 sm:font-extrabold sm:text-3xl",
                                    children: e[a].briefDescription
                                }), s.jsx("p", {
                                    className: "text-sm sm:text-base leading-relaxed text-gray-800 no-scrollbar overflow-y-scroll md:max-h-52",
                                    children: e[a].detailedDescription
                                })]
                            })
                        }), s.jsx("div", {
                            className: "flex-col bg-white bg-opacity-60 items-center pt-[25px] sm:pt-[52px] sm:w-1/5 flex flex-1 sm:flex-initial",
                            children: s.jsx("div", {
                                className: "flex items-center justify-center",
                                children: s.jsxs($e, {
                                    opts: {
                                        align: "start"
                                    },
                                    orientation: "horizontals",
                                    className: "w-min sm:w-full max-w-xs",
                                    children: [s.jsx(He, {
                                        className: "-mt-2 sm:h-[300px]",
                                        children: t.map( (i, r) => s.jsx(We, {
                                            className: "pt-2 basis-1/5",
                                            children: s.jsxs("button", {
                                                onClick: () => n(r),
                                                className: "relative grid justify-items-center gap-1.5 transition-colors",
                                                children: [s.jsx("span", {
                                                    className: `text-xm text-theme-${r} pointer-events-none selection:bg-none`,
                                                    children: i
                                                }), a === i && s.jsx(V.span, {
                                                    layoutId: "active_pill",
                                                    className: "absolute -bottom-2 left-0 right-0 inline-block h-[1px] bg-rose-500"
                                                })]
                                            })
                                        }, r))
                                    }), s.jsx(Ol, {}), s.jsx(zl, {})]
                                })
                            })
                        })]
                    })
                })
            })]
        })
    } catch {
        n(0)
    }
}
  , i1 = ({itinerary: e}) => s.jsxs("div", {
    className: "rounded-2xl bg-white p-6 space-y-10",
    children: [s.jsxs("h2", {
        className: "text-xl font-semibold mb-3 relative py-1",
        children: [s.jsx("span", {
            children: "Itineraries"
        }), s.jsx("span", {
            className: "absolute -left-6 inline-block top-0 bottom-0 bg-theme-1 w-1 rounded-tr-md rounded-br-md"
        })]
    }), s.jsx(n1, {
        itinerary: e
    })]
})
  , r1 = ({inclusiveList: e, exclusiveList: t}) => s.jsxs("div", {
    className: "grid md:grid-cols-2 gap-3",
    children: [s.jsx("div", {
        className: "rounded-2xl bg-white p-4 space-y-10",
        children: s.jsxs("div", {
            className: "p-5 h-[100%]",
            children: [s.jsxs("h2", {
                className: "text-xl font-semibold mb-3 relative py-1",
                children: [s.jsx("span", {
                    children: "Package Cost Inclusions of"
                }), s.jsx("span", {
                    className: "absolute -left-6 inline-block top-0 bottom-0 bg-theme-1 w-1 rounded-tr-md rounded-br-md"
                })]
            }), s.jsx("ul", {
                className: "m-5 ml-12 list-none",
                children: e.map( (a, n) => s.jsx("li", {
                    className: "inclusive-list text-sm sm:text-base font-light",
                    children: a
                }, n))
            })]
        })
    }), s.jsx("div", {
        className: "rounded-2xl bg-white p-4 space-y-10",
        children: s.jsxs("div", {
            className: "p-5 h-[100%]",
            children: [s.jsxs("h2", {
                className: "text-xl font-semibold mb-3 relative py-1",
                children: [s.jsx("span", {
                    children: "Package Cost Exclusions of "
                }), s.jsx("span", {
                    className: "absolute -left-6 inline-block top-0 bottom-0 bg-theme-1 w-1 rounded-tr-md rounded-br-md"
                })]
            }), s.jsx("ul", {
                className: "m-5 ml-12 list-none",
                children: t.map( (a, n) => s.jsx("li", {
                    className: "exclusive-list  text-sm sm:text-base font-light",
                    children: a
                }, n))
            })]
        })
    })]
})
  , o1 = ({overview: e, highlights: t}) => s.jsxs("div", {
    className: "rounded-2xl bg-white p-6 space-y-10",
    children: [s.jsxs("div", {
        children: [s.jsxs("h2", {
            className: "text-xl font-semibold mb-3 relative py-1",
            children: [s.jsx("span", {
                children: "Overview"
            }), s.jsx("span", {
                className: "absolute -left-6 inline-block top-0 bottom-0 bg-theme-1 w-1 rounded-tr-md rounded-br-md"
            })]
        }), s.jsx("p", {
            className: "text-gray-500 text-sm",
            children: e
        })]
    }), s.jsxs("div", {
        children: [s.jsxs("h2", {
            className: "text-xl font-semibold mb-3 relative py-1",
            children: [s.jsx("span", {
                children: "Highlights"
            }), s.jsx("span", {
                className: "absolute -left-6 inline-block top-0 bottom-0 bg-theme-4 w-1 rounded-tr-md rounded-br-md"
            })]
        }), s.jsx("ul", {
            className: "text-gray-500 list text-sm space-y-2",
            children: t.map( (a, n) => s.jsxs("li", {
                className: "flex items-center gap-3",
                children: [s.jsx("span", {
                    className: "inline-block size-[5px] rounded-full bg-theme-4 shrink-0"
                }), s.jsx("span", {
                    children: a
                })]
            }, n))
        })]
    })]
})
  , Ke = ["Overview", "Itineraries", "Package Incl/Excl.", "FAQ", "Gallery"]
  , l1 = () => {
    const {slug: e, id: t} = zt()
      , {data: a, loading: n, error: i} = xe(x => x.allPackages)
      , r = a.filter(x => x.country.toLowerCase() === e.toLowerCase());
    if (r.length === 0)
        return s.jsx(ie, {
            message: "Coming soon!",
            forError: !0
        });
    const {data: o, loading: l, error: c} = xe(x => x.allDestinations)
      , [u,d] = f.useState(Ke[0])
      , [m,h] = f.useState(t - 1)
      , g = f.useMemo( () => o.filter(x => x.location.toLowerCase() === e.toLowerCase()) || [], [o]);
    return f.useEffect( () => {
        const x = `/tours/${e}/${m + 1}`;
        window.history.pushState({}, "", x)
    }
    , [m]),
    l ? s.jsx(ie, {
        message: "Fetching Travel Details..."
    }) : c ? s.jsx(ie, {
        className: "h-[100px]",
        message: "Coming soon!",
        forError: !0
    }) : s.jsxs("div", {
        className: "bg-gray-200 min-h-screen mb-14",
        children: [s.jsx(Wt, {
            aspectRatio: "4.2/1",
            slides: r[m].images
        }), s.jsxs(ge, {
            children: [s.jsxs("div", {
                className: "space-y-4",
                children: [s.jsxs("div", {
                    className: "relative p-6 bg-white rounded-bl-2xl rounded-br-2xl",
                    children: [s.jsx("h3", {
                        className: "text-2xl max-sm:text-xl font-semibold",
                        children: r[m].packageName
                    }), s.jsxs("div", {
                        className: "flex items-center gap-5 text-sm max-sm:text-xs text-gray-500 mt-1",
                        children: [s.jsx("span", {
                            children: r[m].shortDescription
                        }), s.jsxs("div", {
                            className: "flex items-center gap-1",
                            children: [s.jsx(As, {
                                className: "text-yellow-500"
                            }), " ", r[m].rating.value, " ", s.jsxs("span", {
                                className: "text-gray-500",
                                children: ["(", r[m].rating.reviews, ")"]
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "absolute right-8 -top-16 bg-white rounded-2xl p-5 shadow-md max-lg:hidden",
                        children: [s.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [s.jsx("span", {
                                className: "text-xs",
                                children: "From"
                            }), s.jsxs("span", {
                                className: "text-xl font-bold",
                                children: [r[m].costInfo.currency, " ", r[m].costInfo.effectivePrice.toFixed(2)]
                            })]
                        }), s.jsx("button", {
                            className: "mt-2 bg-[#051036] text-white py-2 px-4 rounded-md block ml-auto text-sm",
                            children: "Enquire Now"
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "flex gap-4 max-xl:flex-col",
                    children: [s.jsxs("div", {
                        className: "flex-grow space-y-4",
                        children: [s.jsx("div", {
                            className: "flex flex-row flex-wrap content-center items-stretch gap-4",
                            children: s.jsxs($e, {
                                opts: {
                                    dragFree: !0
                                },
                                className: "w-[98%] xl:w-[75%]",
                                children: [s.jsx(He, {
                                    className: "-ml-10",
                                    children: r.map( (x, w) => s.jsx(We, {
                                        className: "basis-auto pl-10 py-2.5",
                                        children: s.jsx("div", {
                                            className: "bg-white p-6 rounded-2xl bg-[url('https://www.legsgo.com/assets/svg/day-night-v2.svg')] bg-[length:auto_30%] shadow-lg bg-right-top bg-no-repeat",
                                            onClick: () => h(w),
                                            children: s.jsxs("div", {
                                                className: "grid justify-items-center ",
                                                children: [s.jsxs("div", {
                                                    className: `text-7xl font-black ${m === w ? "theme-fill" : "text-gray-300"} text-center`,
                                                    children: [x.duration.days, " "]
                                                }), s.jsx("div", {
                                                    className: "text-3xl text-center text-gray-500 great-vibes-regular",
                                                    children: " Days "
                                                }), s.jsxs("div", {
                                                    className: `text-lg ${m === w ? "bg-theme" : "bg-slate-400"} text-white px-2 rounded-2xl mt-2`,
                                                    children: [" ", x.duration.nights, " Nights "]
                                                })]
                                            })
                                        }, w)
                                    }, w))
                                }), s.jsx(nt, {
                                    skipSlidesInView: !0,
                                    arrowSize: 8,
                                    style: {
                                        left: -17
                                    },
                                    className: "p-1"
                                }), s.jsx(at, {
                                    skipSlidesInView: !0,
                                    arrowSize: 8,
                                    style: {
                                        right: -17
                                    },
                                    className: "p-1"
                                })]
                            })
                        }), s.jsx("div", {
                            className: "rounded-2xl p-3 space-y-10",
                            children: s.jsxs($e, {
                                opts: {
                                    dragFree: !0
                                },
                                className: "w-[98%] xl:w-[75%]",
                                children: [s.jsx(He, {
                                    className: "-ml-10",
                                    children: Ke.map( (x, w) => s.jsx(We, {
                                        className: "basis-auto pl-10 py-2.5",
                                        children: s.jsxs("button", {
                                            className: "relative",
                                            onClick: () => d(x),
                                            children: [s.jsx("span", {
                                                className: `transition-opacity font-medium ${u === x ? "opacity-100" : "opacity-60"}`,
                                                children: x
                                            }), u === x && s.jsx(V.span, {
                                                layoutId: "active-info",
                                                className: "absolute left-0 right-0 -bottom-1.5 h-[2px] bg-rose-500"
                                            })]
                                        })
                                    }, w))
                                }), s.jsx(nt, {
                                    skipSlidesInView: !0,
                                    arrowSize: 8,
                                    style: {
                                        left: -17
                                    },
                                    className: "p-1"
                                }), s.jsx(at, {
                                    skipSlidesInView: !0,
                                    arrowSize: 8,
                                    style: {
                                        right: -17
                                    },
                                    className: "p-1"
                                })]
                            })
                        }), u === Ke[0] && s.jsx(o1, {
                            highlights: r[m].highlights,
                            overview: r[m].overview
                        }), u === Ke[1] && s.jsx(i1, {
                            itinerary: r[m].itinerary
                        }), u === Ke[2] && s.jsx(r1, {
                            inclusiveList: r[m].inclusiveList,
                            exclusiveList: r[m].exclusiveList
                        }), u === Ke[3] && s.jsx(Wg, {
                            faqCollections: r[m].faq
                        }), u === Ke[4] && s.jsx(Ug, {})]
                    }), s.jsxs("div", {
                        className: "basis-1/4 shrink-0 h-fit sticky top-3 bg-white rounded-2xl p-6 min-h-60",
                        children: [s.jsxs("div", {
                            children: [s.jsxs("h3", {
                                className: "space-x-2",
                                children: [s.jsxs("span", {
                                    className: "font-lg font-semibold",
                                    children: [r[m].costInfo.currency, " ", r[m].costInfo.effectivePrice.toFixed(2)]
                                }), s.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Per Person"
                                })]
                            }), s.jsxs("div", {
                                className: "flex justify-between items-center mt-2",
                                children: [s.jsxs("span", {
                                    className: "text-gray-500 line-through font-light text-sm",
                                    children: [r[m].costInfo.currency, " ", r[m].costInfo.originalPrice]
                                }), s.jsxs("span", {
                                    className: "text-[10px] bg-green-50 text-green-600 px-1 rounded-lg whitespace-nowrap",
                                    children: ["SAVE ", r[m].costInfo.currency, " ", r[m].costInfo.discount]
                                }), s.jsx("span", {
                                    className: "bg-theme text-[10px] text-white px-2 py-[2px] rounded-2xl",
                                    children: r[m].costInfo.saleType
                                })]
                            })]
                        }), s.jsx("div", {
                            className: "h-[1px] my-3"
                        }), s.jsx(c1, {
                            id: r[m].packageName
                        })]
                    })]
                })]
            }), s.jsx("div", {
                className: "py-16",
                children: g.length > 0 && s.jsx(Be, {
                    heading: "You might also like",
                    data: g.slice(0, 20),
                    animateOnce: !0
                })
            })]
        })]
    })
}
  , c1 = ({id: e}) => {
    const [t,a] = f.useState(null)
      , [n,i] = f.useState("+91")
      , [r,o] = f.useState({
        fullName: "",
        email: "",
        phone: "",
        travelCount: "",
        message: ""
    })
      , l = m => {
        o(h => ({
            ...h,
            [m.target.name]: m.target.value
        }))
    }
      , {sendEnquiry: c, loading: u} = Vn()
      , d = m => {
        if (m.preventDefault(),
        !t)
            return ne.warning("Please select travel date");
        if (!n)
            return ne.warning("Please select country code");
        c({
            ...r,
            travelDate: t,
            countryCode: n,
            travelId: e
        })
    }
    ;
    return s.jsxs("form", {
        onSubmit: d,
        children: [s.jsxs("div", {
            className: "space-y-2 text-xs",
            children: [s.jsx("input", {
                type: "text",
                placeholder: "Full Name",
                name: "fullName",
                value: r.fullName,
                required: !0,
                onChange: m => l(m),
                className: "w-full p-3 outline-none border-2 border-gray-200 rounded-md focus-within:border-black"
            }), s.jsx("input", {
                type: "email",
                placeholder: "Email",
                name: "email",
                value: r.email,
                required: !0,
                onChange: m => l(m),
                className: "w-full p-3 outline-none border-2 border-gray-200 rounded-md focus-within:border-black"
            }), s.jsxs("div", {
                className: "flex gap-2 items-center",
                children: [s.jsxs(Ul, {
                    value: n,
                    onValueChange: m => i(m),
                    children: [s.jsx(Cn, {
                        className: "focus:ring-offset-0 w-20 border-2 h-10 text-xs",
                        children: s.jsx(ql, {
                            placeholder: "+ Add"
                        })
                    }), s.jsx(Sn, {
                        children: Xl.map(m => s.jsx(Tn, {
                            value: m,
                            className: "text-xs",
                            children: m
                        }, m))
                    })]
                }), s.jsx("input", {
                    type: "number",
                    placeholder: "Your Phone",
                    name: "phone",
                    value: r.phone,
                    required: !0,
                    onChange: m => l(m),
                    className: "w-full p-3 outline-none border-2 border-gray-200 rounded-md focus-within:border-black"
                })]
            }), s.jsxs("div", {
                className: "flex gap-2",
                children: [s.jsx(d1, {
                    date: t,
                    setDate: a
                }), s.jsx("input", {
                    type: "number",
                    placeholder: "Traveller Count",
                    required: !0,
                    value: r.travelCount,
                    name: "travelCount",
                    onChange: m => l(m),
                    className: "w-full p-3 outline-none border-2 border-gray-200 rounded-md focus-within:border-black"
                })]
            }), s.jsx("textarea", {
                value: r.message,
                name: "message",
                onChange: m => l(m),
                placeholder: "Message",
                className: "w-full h-24 p-3 outline-none border-2 border-gray-200 rounded-md focus-within:border-black"
            })]
        }), s.jsxs("button", {
            disabled: u,
            type: "submit",
            className: R("text-xs py-3 w-full rounded-md bg-[#051036] text-white block mx-auto mt-2 relative", u && "pointer-events-none"),
            children: [s.jsx("span", {
                className: R(u && "invisible"),
                children: "Send Enquiry"
            }), u && s.jsx("span", {
                className: "absolute inset-0 grid place-content-center",
                children: s.jsx(Ls, {
                    size: "22",
                    color: "white"
                })
            })]
        })]
    })
}
  , d1 = ({date: e, setDate: t, placeholder: a="Travel Date"}) => s.jsxs(Pn, {
    children: [s.jsx(Mn, {
        asChild: !0,
        children: s.jsxs(yt, {
            variant: "outline",
            size: "sm",
            className: R("w-full flex justify-start gap-2 h-11 text-left font-normal text-xs"),
            children: [e ? Ce(e, "PPP") : s.jsx("span", {
                className: "text-gray-400 text-left",
                children: a
            }), s.jsx(Oa, {
                className: "size-4 opacity-50"
            })]
        })
    }), s.jsx(Bs, {
        className: "w-auto p-0",
        align: "start",
        children: s.jsx(_s, {
            mode: "single",
            selected: e,
            onSelect: t,
            disabled: n => n <= new Date
        })
    })]
})
  , u1 = () => {
    const [e,t] = f.useState({
        fullName: "",
        email: "",
        message: "",
        title: "Others",
        mobile: ""
    })
      , [a,n] = f.useState({})
      , i = l => {
        const {name: c, value: u} = l.target;
        t({
            ...e,
            [c]: u
        })
    }
      , r = () => {
        const l = {};
        return e.fullName || (l.fullName = "Full Name is required"),
        e.mobile || (l.mobile = "Mobile Number is required"),
        e.email || (l.email = "Email is required"),
        /\S+@\S+\.\S+/.test(e.email) || (l.email = "Email is invalid"),
        e.message || (l.message = "Location is required"),
        l
    }
      , o = async l => {
        l.preventDefault();
        const c = r();
        if (Object.keys(c).length === 0)
            try {
                await Ve.post("https://www.sathuragiriyaan.tech/api/travels/send-inquiry", {
                    ...e
                }),
                ne.success("Thank you for choosing LEGSGO Education, We will get back to you shortly!", {
                    autoClose: 5e3
                }),
                t({
                    fullName: "",
                    email: "",
                    mobile: "",
                    message: "",
                    title: "Others"
                })
            } catch (u) {
                u.response ? ne.error(u.response.data.error || u.response.data.message, {
                    autoClose: !1
                }) : ne.error(u.message, {
                    autoClose: !1
                })
            }
        else
            n(c)
    }
    ;
    return s.jsxs("div", {
        className: "relative",
        children: [s.jsx("img", {
            src: "https://www.legsgo.com/assets/webp/abroad-education/college-campus.webp",
            className: "absolute inset-0 object-cover w-full h-full",
            alt: "College Campus",
            loading: "lazy"
        }), s.jsx("div", {
            className: "relative bg-gray-900 bg-opacity-75",
            children: s.jsx("div", {
                className: "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20",
                children: s.jsxs("div", {
                    className: "flex flex-col items-center justify-between xl:flex-row",
                    children: [s.jsxs("div", {
                        className: "w-full text-center xl:text-start max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12",
                        children: [s.jsxs("h2", {
                            className: "max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none",
                            children: ["Education ", s.jsx("span", {
                                className: "text-4xl theme-fill drop-shadow-[-2.5px_0.5px_3.5px_rgba(255,255,255)]",
                                children: "Beyond"
                            }), " Boundaries"]
                        }), s.jsx("p", {
                            className: "max-w-xl mb-4 text-base text-gray-300 md:text-lg",
                            children: "Your Journey to World-Class Education Starts Here"
                        })]
                    }), s.jsx("div", {
                        className: "w-full max-w-xl xl:px-8 xl:w-5/12",
                        children: s.jsxs("div", {
                            className: "bg-white rounded shadow-2xl p-7 sm:p-10",
                            children: [s.jsx("h3", {
                                className: "mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl",
                                children: "Get a Free Consultation."
                            }), s.jsxs("form", {
                                onSubmit: o,
                                children: [s.jsxs("div", {
                                    className: "mb-1 sm:mb-2",
                                    children: [s.jsx("input", {
                                        value: e.fullName,
                                        onChange: i,
                                        placeholder: "Full Name",
                                        type: "text",
                                        className: "flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline",
                                        id: "Full Name".toLowerCase().replace(" ", ""),
                                        name: "fullName"
                                    }), a.fullName && s.jsx("p", {
                                        className: "text-red-800 text-sm ml-2 mt-1",
                                        children: a.fullName
                                    })]
                                }), s.jsxs("div", {
                                    className: "mb-1 sm:mb-2",
                                    children: [s.jsx("input", {
                                        value: e.email,
                                        onChange: i,
                                        placeholder: "Email Address",
                                        type: "text",
                                        className: "flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline",
                                        id: "Email Address".toLowerCase().replace(" ", ""),
                                        name: "email"
                                    }), a.email && s.jsx("p", {
                                        className: "text-red-800 text-sm ml-2 mt-1",
                                        children: a.email
                                    })]
                                }), s.jsxs("div", {
                                    className: "mb-1 sm:mb-2",
                                    children: [s.jsx("input", {
                                        value: e.mobile,
                                        onChange: i,
                                        placeholder: "Mobile Number",
                                        type: "number",
                                        className: "flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline",
                                        id: "Mobile Number".toLowerCase().replace(" ", ""),
                                        name: "mobile"
                                    }), a.mobile && s.jsx("p", {
                                        className: "text-red-800 text-sm ml-2 mt-1",
                                        children: a.mobile
                                    })]
                                }), s.jsxs("div", {
                                    className: "mb-1 sm:mb-2",
                                    children: [s.jsx("input", {
                                        value: e.message,
                                        onChange: i,
                                        placeholder: "Institution Name",
                                        type: "text",
                                        className: "flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline",
                                        id: "Institution Name".toLowerCase().replace(" ", ""),
                                        name: "message"
                                    }), a.message && s.jsx("p", {
                                        className: "text-red-800 text-sm ml-2 mt-1",
                                        children: "Institution Name is Required"
                                    })]
                                }), s.jsx("div", {
                                    className: "mt-4 mb-2 sm:mb-4",
                                    children: s.jsx("button", {
                                        type: "submit",
                                        className: "inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-theme-1 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none",
                                        children: "Submit"
                                    })
                                })]
                            })]
                        })
                    })]
                })
            })
        }), s.jsx(ToastContainer, {})]
    })
}
  , m1 = ({imgSrc: e, imgAlt: t, title: a, description: n}) => s.jsxs("div", {
    className: "p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2",
    children: [s.jsx("div", {
        className: "flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50",
        children: s.jsx("img", {
            src: e,
            loading: "lazy",
            alt: t,
            className: "w-10 h-10 text-deep-purple-accent-400"
        })
    }), s.jsx("h6", {
        className: "mb-2 font-semibold leading-5",
        children: a
    }), s.jsx("p", {
        className: "text-sm text-gray-900",
        children: n
    })]
})
  , h1 = () => {
    const e = [{
        imgSrc: "https://www.legsgo.com/assets/png/education/book.png",
        imgAlt: "Book Icon",
        title: "Course Recommendation",
        description: "Gain insights on selecting the right course based on interests, career goals, and market demand."
    }, {
        imgSrc: "https://www.legsgo.com/assets/png/education/admission.png",
        imgAlt: "Admission Icon",
        title: "Admissions Application Process",
        description: "Understand the application process by researching institutions and their requirements, preparing necessary documents (transcripts, test scores), and submitting the application while following up as needed."
    }, {
        imgSrc: "https://www.legsgo.com/assets/png/education/statement.png",
        imgAlt: "Statement Icon",
        title: "Statement of Purpose",
        description: "A crucial document that highlights your motivations, goals, and why you are a suitable candidate."
    }, {
        imgSrc: "https://www.legsgo.com/assets/png/education/cv.png",
        imgAlt: "CV Icon",
        title: "Resume for Students",
        description: "Showcase your skills, experiences, and achievements in a concise manner."
    }, {
        imgSrc: "https://www.legsgo.com/assets/png/education/feedback.png",
        imgAlt: "Feedback Icon",
        title: "Letter of Recommendation",
        description: "A letter that supports your application by providing insights into your character, achievements, and capabilities."
    }, {
        imgSrc: "https://www.legsgo.com/assets/png/education/visa.png",
        imgAlt: "Visa Icon",
        title: "Student Visa",
        description: "A legal requirement for studying abroad, allowing students to reside in a foreign country for educational purposes."
    }];
    return s.jsxs("div", {
        className: "px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8",
        children: [s.jsx("div", {
            className: "max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12",
            children: s.jsxs("h2", {
                className: "max-w-lg mb-6 pt-20 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto",
                children: [s.jsxs("span", {
                    className: "relative inline-block",
                    children: [s.jsxs("svg", {
                        viewBox: "0 0 52 24",
                        fill: "currentColor",
                        className: "absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block",
                        children: [s.jsx("defs", {
                            children: s.jsx("pattern", {
                                id: "d9d7687a-355f-4502-8ec4-7945db034688",
                                x: "0",
                                y: "0",
                                width: ".135",
                                height: ".30",
                                children: s.jsx("circle", {
                                    cx: "1",
                                    cy: "1",
                                    r: ".7"
                                })
                            })
                        }), s.jsx("rect", {
                            fill: "url(#d9d7687a-355f-4502-8ec4-7945db034688)",
                            width: "52",
                            height: "24"
                        })]
                    }), s.jsx("span", {
                        className: "relative theme-fill",
                        children: "LegsGo's"
                    })]
                }), " ", "Essential Guide for Aspiring Students"]
            })
        }), s.jsx("div", {
            className: "grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3",
            children: e.map( (t, a) => s.jsx(m1, {
                imgSrc: t.imgSrc,
                imgAlt: t.imgAlt,
                title: t.title,
                description: t.description
            }, a))
        })]
    })
}
  , p1 = () => s.jsx("div", {
    className: "px-4 py-8 mx-auto sm:py-12 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16 bg-gradient-to-b from-gray-50 to-white",
    children: s.jsxs("div", {
        className: "grid gap-6 lg:gap-8 lg:grid-cols-2",
        children: [s.jsx("div", {
            className: "flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg",
            children: s.jsxs("div", {
                className: "max-w-xl mb-4 sm:mb-6",
                children: [s.jsxs("h2", {
                    className: "max-w-lg mb-3 sm:mb-4 font-sans text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl lg:leading-tight animate-fade-in-up",
                    children: ["Let us help to choose", s.jsx("br", {
                        className: "hidden md:block"
                    }), "your next", " ", s.jsx("span", {
                        className: "inline-block text-deep-purple-accent-400 theme-fill transition-colors duration-300 hover:text-deep-purple-accent-500",
                        children: "Study Destination"
                    })]
                }), s.jsx("p", {
                    className: "text-sm sm:text-base text-justify text-gray-700 leading-relaxed animate-fade-in px-1",
                    children: "With offices in Europe and Dubai, LEGSGO is an expert in creating personalized study abroad programs that give students exposure to a wide range of courses and universities. We guarantee that every stage of the educational process is transformative, led by professionals for outstanding service."
                })]
            })
        }), s.jsxs("div", {
            className: "flex items-center justify-center -mx-2 sm:-mx-4 lg:pl-8",
            children: [s.jsxs("div", {
                className: "flex flex-col items-end px-2 sm:px-3 space-y-3 sm:space-y-4",
                children: [s.jsx("img", {
                    className: "object-cover rounded-xl shadow-md h-20 w-20 sm:h-40 sm:w-40 xl:h-48 xl:w-48 transition-all duration-300 hover:scale-105 hover:shadow-lg",
                    src: "https://www.legsgo.com/assets/webp/abroad-education/student_with_books.webp",
                    alt: "Students with books",
                    loading: "lazy"
                }), s.jsx("img", {
                    className: "object-cover rounded-xl shadow-md h-16 w-16 sm:h-28 sm:w-28 xl:h-36 xl:w-36 transition-all duration-300 hover:scale-105 hover:shadow-lg",
                    src: "https://www.legsgo.com/assets/webp/abroad-education/student_convocation.webp",
                    alt: "Student Convocation",
                    loading: "lazy"
                })]
            }), s.jsx("div", {
                className: "px-2 sm:px-3",
                children: s.jsx("img", {
                    className: "object-cover rounded-xl shadow-md h-32 w-32 sm:h-56 sm:w-56 xl:h-72 xl:w-72 transition-all duration-300 hover:scale-105 hover:shadow-lg",
                    src: "https://www.legsgo.com/assets/webp/abroad-education/student_with_professor.webp",
                    alt: "Student with Professor",
                    loading: "lazy"
                })
            })]
        })]
    })
})
  , f1 = () => {
    const e = [{
        imageSrc: "https://www.legsgo.com/assets/webp/abroad-education/country_latvia.webp",
        altText: "Study in Latvia",
        title: "Latvia",
        description: "Latvia boasts an extensive selection of study programs, including popular fields like international law, business, and relations. Engineering programs in Latvia are particularly renowned for producing highly qualified graduates.",
        themeClass: "text-theme-2",
        maskClass: "mask-latvia hover:scale-105 transition-transform duration-300",
        ctaText: "Explore Latvia",
        stats: {
            universities: "25+",
            programs: "500+",
            intlStudents: "10,000+"
        }
    }, {
        imageSrc: "https://www.legsgo.com/assets/webp/abroad-education/country_georgia.webp",
        altText: "Study in Georgia",
        title: "Georgia",
        description: "Universities in Georgia offer internationally recognized degrees with a well-rounded curriculum integrating the latest advancements. Medical schools particularly stand out, with graduates eligible for licensing exams globally.",
        themeClass: "text-theme-3",
        maskClass: "mask-georgia hover:scale-105 transition-transform duration-300",
        ctaText: "Discover Georgia",
        stats: {
            universities: "30+",
            programs: "600+",
            intlStudents: "15,000+"
        }
    }, {
        imageSrc: "https://www.legsgo.com/assets/webp/abroad-education/country_france.webp",
        altText: "Study in France",
        title: "France",
        description: "With nearly 400,000 international students, France ranks among top global education destinations. Public universities offer affordable tuition with numerous scholarships for international students.",
        themeClass: "text-theme-4",
        maskClass: "mask-france hover:scale-105 transition-transform duration-300",
        ctaText: "Learn About France",
        stats: {
            universities: "250+",
            programs: "1000+",
            intlStudents: "400,000+"
        }
    }, {
        imageSrc: "https://www.legsgo.com/assets/webp/abroad-education/country_russia.webp",
        altText: "Study in Russia",
        title: "Russia",
        description: "Russia excels in engineering, healthcare, business, and IT education. Medical degrees are globally recognized by WHO and MCI. Select students can access free education through government scholarships.",
        themeClass: "text-theme-4",
        maskClass: "mask-russia hover:scale-105 transition-transform duration-300",
        ctaText: "Explore Russia",
        stats: {
            universities: "300+",
            programs: "800+",
            intlStudents: "250,000+"
        }
    }];
    return s.jsxs("div", {
        className: "px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8",
        children: [s.jsxs("h5", {
            className: "mb-12 text-center text-3xl font-extrabold leading-tight",
            children: ["Popular ", s.jsx("span", {
                className: "theme-fill",
                children: "Study Destinations"
            })]
        }), s.jsx("div", {
            className: "grid gap-8 md:grid-cols-2 lg:grid-cols-2",
            children: e.map( (t, a) => s.jsxs("div", {
                className: "pt-5 bg-white border rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out overflow-hidden",
                children: [s.jsx(x1, {
                    imageSrc: t.imageSrc,
                    altText: t.altText,
                    title: t.title,
                    description: t.description,
                    themeClass: t.themeClass,
                    maskClass: t.maskClass
                }), s.jsxs("div", {
                    className: "px-6 py-4 bg-gray-50",
                    children: [s.jsxs("div", {
                        className: "flex justify-between mb-4 text-sm",
                        children: [s.jsxs("div", {
                            className: "text-center",
                            children: [s.jsx("div", {
                                className: "font-bold",
                                children: t.stats.universities
                            }), s.jsx("div", {
                                className: "text-gray-600",
                                children: "Universities"
                            })]
                        }), s.jsxs("div", {
                            className: "text-center",
                            children: [s.jsx("div", {
                                className: "font-bold",
                                children: t.stats.programs
                            }), s.jsx("div", {
                                className: "text-gray-600",
                                children: "Programs"
                            })]
                        }), s.jsxs("div", {
                            className: "text-center",
                            children: [s.jsx("div", {
                                className: "font-bold",
                                children: t.stats.intlStudents
                            }), s.jsx("div", {
                                className: "text-gray-600",
                                children: "Int'l Students"
                            })]
                        })]
                    }), s.jsx("button", {
                        className: `w-full py-2 px-4 rounded-md ${t.themeClass} border hover:opacity-90 transition-opacity`,
                        children: t.ctaText
                    })]
                })]
            }, a))
        })]
    })
}
  , x1 = ({imageSrc: e, altText: t, title: a, description: n, themeClass: i, maskClass: r}) => s.jsxs("div", {
    className: "relative group",
    children: [s.jsxs("div", {
        className: `relative overflow-hidden ${r} rounded-t-lg h-48`,
        children: [s.jsx("div", {
            className: "w-full h-full transform bg-center bg-cover transition-transform duration-300",
            children: s.jsx("img", {
                src: e,
                className: "w-full h-full object-cover",
                loading: "lazy",
                alt: t
            })
        }), s.jsx("div", {
            className: "absolute top-0 left-0 w-full h-full  opacity-50 mask-image",
            style: {
                maskImage: "radial-gradient(circle, rgba(255, 255, 255, 1) 30%, rgba(0, 0, 0, 1) 50%)"
            }
        })]
    }), s.jsxs("div", {
        className: "p-6",
        children: [s.jsx("h5", {
            className: `text-2xl font-bold mb-4 ${i} transition-colors duration-300`,
            children: a
        }), s.jsx("p", {
            className: "text-gray-600 text-justify leading-relaxed text-sm mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-300",
            children: n
        })]
    }), s.jsx("div", {
        className: "absolute top-4 right-4",
        children: s.jsx("div", {
            className: `w-3 h-3 rounded-full ${i.replace("text", "bg")} animate-pulse`
        })
    })]
})
  , g1 = () => s.jsx("section", {
    className: "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gradient-to-b from-gray-50 to-white",
    children: s.jsxs("div", {
        className: "grid gap-12 lg:grid-cols-2 items-center",
        children: [s.jsx("div", {
            className: "overflow-hidden rounded-xl shadow-2xl",
            children: s.jsx("img", {
                className: "object-cover w-full h-56 sm:h-96 transform transition duration-700 hover:scale-110",
                src: "https://www.legsgo.com/assets/webp/abroad-education/student_counselling.webp",
                alt: "Counselling Session",
                loading: "lazy"
            })
        }), s.jsxs("article", {
            className: "lg:pr-10 space-y-6",
            children: [s.jsxs("h5", {
                className: "mb-6 text-3xl font-extrabold leading-tight text-gray-800",
                children: ["Why ", s.jsx("span", {
                    className: "theme-fill relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-blue-500/20",
                    children: "LEGSGO Studies"
                })]
            }), s.jsx("p", {
                className: "text-gray-700 leading-relaxed text-justify hover:text-gray-900 transition-colors duration-300",
                children: "At Legsgo Studies, we believe that every student deserves access to world-class education, no matter where they are. Our mission is to make the dream of studying abroad a reality for students from all over the world. With personalized support, expert advice, and extensive partnerships with top universities, we help you every step of the way—from choosing the right course to securing your visa."
            }), s.jsx("div", {
                className: "h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"
            }), s.jsx("p", {
                className: "text-gray-700 text-justify leading-relaxed hover:text-gray-900 transition-colors duration-300",
                children: "We offer services that range from university selection, application processing, scholarship guidance, visa assistance, and more. Our extensive network of partner institutions ensures that you have a wealth of options to choose from places like Latvia, Georgia, Russia, Dubai, France, and many others."
            }), s.jsx("div", {
                className: "h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"
            })]
        })]
    })
})
  , v1 = () => s.jsxs("div", {
    className: "bg-gray-200 min-h-screen mb-14",
    children: [s.jsx(u1, {}), s.jsx(p1, {}), s.jsx(g1, {}), s.jsx(h1, {}), s.jsx(f1, {})]
})
  , y1 = e => {
    const [t,a] = f.useState(null)
      , [n,i] = f.useState(!1)
      , [r,o] = f.useState(null)
      , l = async () => {
        try {
            n || i(!0),
            r && o(null);
            const {data: c} = await Ve.get(`https://www.sathuragiriyaan.tech/api/travels/search-here?search=${e}`);
            a(c)
        } catch (c) {
            c.response ? o(c.response.data.error || c.response.data.message || "something went wrong") : o(c.message)
        } finally {
            i(!1)
        }
    }
    ;
    return f.useEffect( () => {
        let c;
        return c = setTimeout( () => {
            e && l()
        }
        , 500),
        () => {
            clearTimeout(c)
        }
    }
    , [e]),
    {
        data: t,
        loading: n,
        error: r,
        setData: a
    }
}
  , Fn = f.forwardRef( ({className: e, children: t, ...a}, n) => s.jsxs($r, {
    ref: n,
    className: R("relative overflow-hidden", e),
    ...a,
    children: [s.jsx(Oc, {
        className: "h-full w-full rounded-[inherit]",
        children: t
    }), s.jsx(gc, {}), s.jsx(zc, {})]
}));
Fn.displayName = $r.displayName;
const gc = f.forwardRef( ({className: e, orientation: t="vertical", ...a}, n) => s.jsx(Hr, {
    ref: n,
    orientation: t,
    className: R("flex touch-none select-none transition-colors", t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", e),
    ...a,
    children: s.jsx(Fc, {
        className: "relative flex-1 rounded-full bg-border"
    })
}));
gc.displayName = Hr.displayName;
function b1(e) {
    return G({
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fillRule: "evenodd",
                d: "M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"
            },
            child: []
        }]
    })(e)
}
function vc(e) {
    return G({
        attr: {
            viewBox: "0 0 15 15",
            fill: "none"
        },
        child: [{
            tag: "path",
            attr: {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
                fill: "currentColor"
            },
            child: []
        }]
    })(e)
}
const Cr = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0
    },
    hover: {
        scale: 1.1
    }
}
  , w1 = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0
    },
    hover: {
        scale: 1.05
    }
}
  , j1 = ({isOpen: e, onClose: t}) => {
    const [a,n] = f.useState({
        fullName: "",
        email: "",
        message: "",
        title: "",
        mobile: ""
    })
      , [i,r] = f.useState("")
      , [o,l] = f.useState({})
      , c = h => {
        const {name: g, value: x} = h.target;
        n({
            ...a,
            [g]: x
        })
    }
      , u = h => {
        h = i === h ? "" : h,
        r(h),
        n({
            ...a,
            title: h
        })
    }
      , d = () => {
        const h = {};
        return a.title || (h.title = "Please Choose a reason"),
        a.fullName || (h.fullName = "Full Name is required"),
        a.mobile || (h.mobile = "Mobile Number is required"),
        a.email || (h.email = "Email is required"),
        /\S+@\S+\.\S+/.test(a.email) || (h.email = "Email is invalid"),
        a.message || (h.message = "Message is required"),
        h
    }
      , m = async h => {
        h.preventDefault();
        const g = d();
        Object.keys(g).length === 0 ? $.promise(Ve.post("https://www.sathuragiriyaan.tech/api/travels/send-inquiry", {
            ...a
        }), {
            pending: "Sending your inquiry...",
            success: "Thank you for choosing LEGSGO Holidays, We will get back to you shortly!",
            error: {
                render({data: x}) {
                    var w, b, y, p;
                    return ((b = (w = x.response) == null ? void 0 : w.data) == null ? void 0 : b.error) || ((p = (y = x.response) == null ? void 0 : y.data) == null ? void 0 : p.message) || x.message
                }
            }
        }).then( () => {
            n({
                fullName: "",
                email: "",
                message: "",
                title: "",
                mobile: ""
            }),
            r(""),
            setTimeout(t, 2e3)
        }
        ) : l(g)
    }
    ;
    return e ? s.jsxs(s.Fragment, {
        children: [s.jsx("div", {
            onClick: t,
            className: "fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50",
            children: s.jsxs(V.div, {
                onClick: h => h.stopPropagation(),
                initial: {
                    opacity: 0,
                    scale: .8
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                className: "bg-wavy bg-white rounded-lg shadow-lg p-3 sm:p-10 max-w-5xl w-11/12 md:w-auto max-h-[90dvh] overflow-y-auto relative tracking-wide py-3 custom-scrollbar-two",
                children: [s.jsx("button", {
                    onClick: t,
                    className: "absolute top-2.5 right-4",
                    children: s.jsx(vc, {
                        size: "28",
                        className: "text-red-700"
                    })
                }), s.jsxs("div", {
                    className: "flex md:flex-row flex-col-reverse gap-5 mt-2 p-3",
                    children: [s.jsxs("div", {
                        className: "hidden md:block",
                        children: [s.jsxs("h2", {
                            className: "md:text-3xl text-xl font-bold mb-4 tracking-wide w-[90%]",
                            children: ["Let's Plan Your ", s.jsx("br", {}), " ", s.jsx("span", {
                                className: "theme-fill caveat-brush-regular",
                                children: "Vacation"
                            }), " ", " together"]
                        }), s.jsxs("div", {
                            className: "hidden md:block md:my-24",
                            children: [s.jsx("div", {
                                children: s.jsxs("ul", {
                                    className: "flex items-center tracking-wide",
                                    children: [s.jsx("li", {
                                        className: "text-lg",
                                        children: s.jsx(b1, {})
                                    }), s.jsx("li", {
                                        className: "ml-6",
                                        children: "info@legsgo.com"
                                    })]
                                })
                            }), s.jsx("div", {
                                className: "my-4",
                                children: s.jsxs("ul", {
                                    className: "flex items-center tracking-wide",
                                    children: [s.jsx("li", {
                                        className: " text-lg",
                                        children: s.jsx(H0, {})
                                    }), s.jsx("li", {
                                        className: " ml-6",
                                        children: "+91 96 00 77 66 88"
                                    })]
                                })
                            }), s.jsx("div", {
                                children: s.jsxs("ul", {
                                    className: "flex md:items-center tracking-wide",
                                    children: [s.jsx("li", {
                                        className: "text-lg",
                                        children: s.jsx($0, {})
                                    }), s.jsx("li", {
                                        className: "ml-6",
                                        children: "Akshaya Shanthi, 2nd Floor No.201, New Door Nos 25 & 27 / Old Door Nos 43 & 44, Anna Salai, Chennai - 02"
                                    })]
                                })
                            })]
                        }), s.jsx("div", {
                            className: "hidden md:block",
                            children: s.jsx("ul", {
                                className: "flex justify-center  items-center mt-5 md:mt-0",
                                children: [{
                                    Icon: Rl,
                                    key: "facebook",
                                    link: " https://www.facebook.com/LegsGoHilidays"
                                }, {
                                    Icon: Gl,
                                    key: "instagram",
                                    link: " https://www.instagram.com/legsgo_holidays/"
                                }, {
                                    Icon: Bl,
                                    key: "linkedin",
                                    link: "https://www.linkedin.com/company/legs-go-holidays/"
                                }, {
                                    Icon: kn,
                                    key: "twitter",
                                    link: "https://x.com/Legsgoofficial"
                                }, {
                                    Icon: Vl,
                                    key: "youtube",
                                    link: "https://www.youtube.com/@legsgoholidays"
                                }].map( ({Icon: h, key: g, link: x}, w) => s.jsx(V.li, {
                                    className: "text-lg text-white mx-3",
                                    variants: Cr,
                                    initial: "hidden",
                                    animate: "visible",
                                    whileHover: "hover",
                                    transition: {
                                        duration: .3
                                    },
                                    children: s.jsx("a", {
                                        href: x,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "w-10 h-10 rounded-full flex justify-center items-center bg-[#1F0079] hover:border hover:border-white hover:bg-transparent cursor-pointer",
                                        children: s.jsx(h, {})
                                    })
                                }, g))
                            })
                        })]
                    }), s.jsxs("form", {
                        onSubmit: m,
                        className: "bg-[#EEEEEE]/80 md:p-8 p-4 rounded-xl w-full",
                        children: [s.jsxs("div", {
                            className: `mb-8 tracking-wide ${o.title ? "border-2 border-red-300 rounded-lg" : ""}`,
                            children: [o.title && s.jsx("p", {
                                className: "text-red-800 text-center text-sm mb-2",
                                children: o.title
                            }), s.jsx("ul", {
                                className: "grid grid-rows-1 grid-flow-col gap-0 justify-evenly",
                                children: [{
                                    name: "Activities",
                                    icon: "https://www.legsgo.com/assets/png/activity.png"
                                }, {
                                    name: "Tours",
                                    icon: "https://www.legsgo.com/assets/png/tour.png"
                                }, {
                                    name: "Packages",
                                    icon: "https://www.legsgo.com/assets/png/package.png"
                                }, {
                                    name: "Business",
                                    icon: "https://www.legsgo.com/assets/png/business.png"
                                }, {
                                    name: "Others",
                                    icon: "https://www.legsgo.com/assets/png/miscellaneous.png"
                                }].map( (h, g) => s.jsxs(V.li, {
                                    className: `py-1.5 cursor-pointer inline-flex flex-wrap  flex-col opacity-80  w-full rounded place-items-center text-[#1F0079] ${i === h.name ? "bg-[#1F0079] text-white" : "filter: opacity(0.5) drop-shadow(0 0 0 blue)"}`,
                                    variants: Cr,
                                    initial: "hidden",
                                    animate: "visible",
                                    whileHover: "hover",
                                    transition: {
                                        duration: .3
                                    },
                                    onClick: () => u(h.name),
                                    children: [s.jsx("img", {
                                        src: h.icon,
                                        loading: "lazy",
                                        className: "object-fit m-auto-14 w-10 items-baseline",
                                        alt: h.name
                                    }), s.jsx("span", {
                                        className: "w-15 pt-1.5 text-xs pointer-events-none selection:bg-none text-center",
                                        children: h.name
                                    })]
                                }, g))
                            })]
                        }), s.jsxs("div", {
                            className: "mb-4",
                            children: [s.jsx("input", {
                                type: "text",
                                name: "fullName",
                                value: a.fullName,
                                onChange: c,
                                className: "w-full tracking-wide bg-transparent border-b border-[#1F0079] px-3 py-2 placeholder-[#1F0079] placeholder-opacity-50 outline-none focus:placeholder-opacity-100",
                                placeholder: "Your Name"
                            }), o.fullName && s.jsx("p", {
                                className: "text-red-800 text-sm mt-1",
                                children: o.fullName
                            })]
                        }), s.jsxs("div", {
                            className: "flex space-x-4",
                            children: [s.jsxs("div", {
                                className: "mb-4",
                                children: [s.jsx("input", {
                                    type: "number",
                                    name: "mobile",
                                    value: a.mobile,
                                    onChange: c,
                                    className: "w-full tracking-wide bg-transparent border-b border-[#1F0079] px-3 py-2 placeholder-[#1F0079] placeholder-opacity-50 outline-none focus:placeholder-opacity-100",
                                    placeholder: "Your Mobile Number"
                                }), o.mobile && s.jsx("p", {
                                    className: "text-red-800 text-sm mt-1",
                                    children: o.mobile
                                })]
                            }), s.jsxs("div", {
                                className: "mb-4",
                                children: [s.jsx("input", {
                                    type: "text",
                                    name: "email",
                                    value: a.email,
                                    onChange: c,
                                    className: "w-full tracking-wide bg-transparent border-b border-[#1F0079] px-3 py-2 placeholder-[#1F0079] placeholder-opacity-50 outline-none focus:placeholder-opacity-100",
                                    placeholder: "Your Email"
                                }), o.email && s.jsx("p", {
                                    className: "text-red-800 text-sm mt-1",
                                    children: o.email
                                })]
                            })]
                        }), s.jsxs("div", {
                            className: "mb-4",
                            children: [s.jsx("textarea", {
                                type: "text",
                                name: "message",
                                value: a.message,
                                onChange: c,
                                className: "w-full tracking-wide bg-transparent border-b border-[#1F0079] px-3 py-2 placeholder-[#1F0079] placeholder-opacity-50 outline-none focus:placeholder-opacity-100",
                                placeholder: "Your Message",
                                rows: "4"
                            }), o.message && s.jsx("p", {
                                className: "text-red-800 text-sm mt-1",
                                children: o.message
                            })]
                        }), s.jsx("div", {
                            className: "mt-10",
                            children: s.jsxs(V.button, {
                                type: "submit",
                                className: "w-40 bg-[#1F0079] text-white py-2 rounded-md tracking-wide flex items-center justify-center",
                                variants: w1,
                                initial: "hidden",
                                animate: "visible",
                                whileHover: "hover",
                                transition: {
                                    duration: .3
                                },
                                children: [s.jsx(e0, {
                                    className: "mx-3"
                                }), " Send Message"]
                            })
                        })]
                    })]
                })]
            })
        }), s.jsx(Nn, {})]
    }) : null
}
  , N1 = ({isOpen: e, onClose: t}) => e ? s.jsx(s.Fragment, {
    children: s.jsx("div", {
        className: "fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50",
        children: s.jsxs("div", {
            className: "relative w-10/12 max-w-4xl h-[80vh] md:h-[70vh]",
            children: [s.jsx("iframe", {
                src: "https://rbot.live/showbot?formid=409950&nura=bot",
                title: "Sales Robot",
                className: "w-full h-full bg-wavy bg-white rounded-lg shadow-lg p-2 sm:p-6 custom-scrollbar-two",
                style: {
                    overflow: "hidden"
                },
                sandbox: "allow-scripts allow-same-origin",
                scrolling: "no"
            }), s.jsx("button", {
                onClick: t,
                className: "absolute bg-theme top-2 right-2 md:top-3.5 md:right-3.5 p-1 rounded-full hover:bg-opacity-90",
                children: s.jsx(vc, {
                    size: 24,
                    className: "text-white"
                })
            })]
        })
    })
}) : null
  , k1 = ({handleEnquireClick: e, handleChatBotClick: t}) => {
    const [a,n] = f.useState(window.innerWidth < 768)
      , [i,r] = f.useState(!1);
    f.useEffect( () => {
        const c = () => {
            n(window.innerWidth < 1024)
        }
        ;
        window.addEventListener("resize", c);
        const u = setTimeout( () => {
            r(!0)
        }
        , 500);
        return () => {
            window.removeEventListener("resize", c),
            clearTimeout(u)
        }
    }
    , []);
    const o = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24,
                delay: .2
            }
        },
        exit: {
            y: 100,
            opacity: 0
        }
    }
      , l = {
        hidden: {
            x: 100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        },
        exit: {
            x: 100,
            opacity: 0
        }
    };
    return s.jsx("div", {
        className: `fixed z-50 ${a ? "bottom-0 left-0 w-full" : "right-0 top-1/2 -translate-y-1/2"}`,
        children: s.jsx(ft, {
            children: i && s.jsxs(V.div, {
                className: `${a ? "flex flex-row justify-around items-center p-3 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]" : "flex flex-col p-3.5 bg-gray-50 shadow-2xl space-y-2 rounded-l-lg"}`,
                initial: "hidden",
                animate: "visible",
                exit: "exit",
                variants: a ? o : l,
                children: [s.jsxs(V.div, {
                    className: `${a ? "py-0 flex flex-col items-center" : "py-2 mt-1"} relative`,
                    whileHover: {
                        scale: a ? 1.03 : 1.07
                    },
                    whileTap: {
                        scale: .97
                    },
                    children: [s.jsxs("a", {
                        href: "https://wa.me/+919090834567",
                        target: "_blank",
                        className: `flex items-center justify-center text-2xl text-white bg-green-500 rounded-full hover:bg-green-600 transition shadow-md ${a ? "w-10 h-10" : "w-12 h-12"}`,
                        children: [!a && s.jsx("div", {
                            className: "flex items-center justify-center w-12 h-12 bg-transparent absolute -top-2 text-base transition",
                            children: s.jsxs("svg", {
                                width: "75",
                                height: "62",
                                viewBox: "0 0 80 75",
                                children: [s.jsx("path", {
                                    id: "circle",
                                    d: `
                                                M 50, 63
                                                m -46 0
                                                a 37,40 0 1,1 71,9
                                                a 37,40 0 1,1 -81,9`,
                                    fill: "transparent"
                                }), s.jsx("text", {
                                    fontSize: "1em",
                                    fill: "green",
                                    style: {
                                        textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)"
                                    },
                                    children: s.jsx("textPath", {
                                        href: "#circle",
                                        startOffset: "10%",
                                        children: "WhatsApp"
                                    })
                                })]
                            })
                        }), s.jsx(ex, {
                            size: a ? 18 : 24
                        })]
                    }), a && s.jsx("span", {
                        className: "text-xs text-center block mt-1 text-green-600 font-medium",
                        children: "WhatsApp"
                    })]
                }), s.jsxs(V.div, {
                    className: `${a ? "py-0 flex flex-col items-center" : "py-2"} relative`,
                    whileHover: {
                        scale: a ? 1.03 : 1.07
                    },
                    whileTap: {
                        scale: .97
                    },
                    children: [s.jsxs("div", {
                        onClick: c => e(c),
                        className: `flex items-center justify-center text-2xl text-white bg-blue-500 rounded-full hover:bg-blue-600 transition shadow-md ${a ? "w-10 h-10" : "w-12 h-12"}`,
                        children: [!a && s.jsx("div", {
                            className: "flex items-center justify-center w-12 h-12 bg-transparent absolute -top-2 text-base transition",
                            children: s.jsxs("svg", {
                                width: "75",
                                height: "62",
                                viewBox: "0 0 80 75",
                                children: [s.jsx("path", {
                                    id: "circle",
                                    d: `
                                                M 50, 63
                                                m -46 0
                                                a 37,40 0 1,1 71,9
                                                a 37,40 0 1,1 -81,9`,
                                    fill: "transparent"
                                }), s.jsx("text", {
                                    fontSize: "1em",
                                    fill: "blue",
                                    style: {
                                        textShadow: "2px 2px 4px rgba(151, 229, 227, 0.8)"
                                    },
                                    children: s.jsx("textPath", {
                                        href: "#circle",
                                        startOffset: "14%",
                                        children: "Enquire"
                                    })
                                })]
                            })
                        }), s.jsx(J0, {
                            size: a ? 18 : 24
                        })]
                    }), a && s.jsx("span", {
                        className: "text-xs text-center block mt-1 text-blue-600 font-medium",
                        children: "Enquire"
                    })]
                }), s.jsxs(V.div, {
                    className: `${a ? "py-0 flex flex-col items-center" : "py-2"} relative`,
                    whileHover: {
                        scale: a ? 1.03 : 1.07
                    },
                    whileTap: {
                        scale: .97
                    },
                    children: [s.jsxs("a", {
                        href: "https://partners..com/book-now-pay-later/?utm_source=INDTA006118",
                        target: "_blank",
                        className: `flex items-center justify-center text-2xl text-white bg-[#044b5f] rounded-full hover:bg-[#088888] transition shadow-md ${a ? "w-10 h-10" : "w-12 h-12"}`,
                        children: [!a && s.jsx("div", {
                            className: "flex items-center justify-center w-12 h-12 bg-transparent absolute -top-2 text-base transition",
                            children: s.jsxs("svg", {
                                width: "75",
                                height: "62",
                                viewBox: "0 0 80 75",
                                children: [s.jsx("path", {
                                    id: "circle",
                                    d: `
                                                M 50, 63
                                                m -46 0
                                                a 37,40 0 1,1 71,9
                                                a 37,40 0 1,1 -81,9`,
                                    fill: "transparent"
                                }), s.jsx("text", {
                                    fontSize: "1em",
                                    fill: "#044b5f",
                                    style: {
                                        textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)"
                                    },
                                    children: s.jsx("textPath", {
                                        href: "#circle",
                                        startOffset: "10%",
                                        children: "PayLater"
                                    })
                                })]
                            })
                        }), s.jsx("img", {
                            src: "https://www.legsgo.com/assets/svg/mihuru.svg",
                            alt: "Mihuru",
                            className: a ? "w-5 h-5" : "w-6 h-6"
                        })]
                    }), a && s.jsx("span", {
                        className: "text-xs text-center block mt-1 text-[#044b5f] font-medium",
                        children: "PayLater"
                    })]
                }), s.jsxs(V.div, {
                    className: `${a ? "py-0 flex flex-col items-center" : "pt-2"} relative`,
                    whileHover: {
                        scale: a ? 1.03 : 1.07
                    },
                    whileTap: {
                        scale: .97
                    },
                    children: [s.jsxs("div", {
                        onClick: c => t(c),
                        className: `flex items-center justify-center text-2xl text-white bg-theme rounded-full transition shadow-md ${a ? "w-10 h-10" : "w-12 h-12"}`,
                        children: [!a && s.jsx("div", {
                            className: "flex items-center justify-center w-12 h-12 bg-transparent absolute -top-2 text-base transition",
                            children: s.jsxs("svg", {
                                width: "75",
                                height: "62",
                                viewBox: "0 0 80 75",
                                children: [s.jsx("path", {
                                    id: "circle",
                                    d: `
                                                M 50, 63
                                                m -46 0
                                                a 37,40 0 1,1 71,9
                                                a 37,40 0 1,1 -81,9`,
                                    fill: "transparent"
                                }), s.jsx("text", {
                                    fontSize: "1em",
                                    fill: "magenta",
                                    style: {
                                        textShadow: "2px 2px 4px rgba(151, 229, 227, 0.8)"
                                    },
                                    children: s.jsx("textPath", {
                                        href: "#circle",
                                        startOffset: "11%",
                                        children: "LeggyBot"
                                    })
                                })]
                            })
                        }), s.jsx(Q0, {
                            size: a ? 18 : 24
                        })]
                    }), a && s.jsx("span", {
                        className: "text-xs text-center block mt-1 text-theme font-medium",
                        children: "LeggyBot"
                    })]
                })]
            })
        })
    })
}
  , C1 = () => {
    const [e,t] = f.useState(!1)
      , [a,n] = f.useState(!1)
      , [i,r] = f.useState(!1)
      , [o,l] = f.useState(!1)
      , [c,u] = f.useState(null)
      , [d,m] = f.useState("")
      , {data: h, loading: g, error: x, setData: w} = y1(d)
      , [b,y] = f.useState(!1)
      , {pathname: p} = La()
      , v = xe(j => j.allDestinations.data)
      , N = xe(j => j.allPackages.data)
      , k = f.useMemo( () => [...new Set([...v.map(j => j.location), ...N.map(j => j.country)])], [v, N])
      , P = f.useMemo( () => [{
        label: "Home",
        link: "/",
        isMobileMenu: !0,
        isDesktopMenu: !0
    }, {
        label: "Holidays",
        link: k,
        isMobileMenu: !0,
        isDesktopMenu: !0
    }, {
        label: "Business Setup",
        link: "/business-setup",
        isMobileMenu: !0,
        isDesktopMenu: !0
    }, {
        label: "Abroad Education",
        link: "/abroad-education",
        isMobileMenu: !0,
        isDesktopMenu: !0
    }, {
        label: "Blog",
        link: "/blog",
        isMobileMenu: !0,
        isDesktopMenu: !0
    }, {
        label: "About Us",
        link: "/about",
        isMobileMenu: !0,
        isDesktopMenu: !1
    }, {
        label: "Privacy Policy",
        link: "/privacy-policy",
        isMobileMenu: !0,
        isDesktopMenu: !1
    }, {
        label: "Contact Us",
        link: "/contact",
        isMobileMenu: !0,
        isDesktopMenu: !0
    }, {
        label: "Enquire",
        link: "*",
        isMobileMenu: !0,
        isDesktopMenu: !1
    }], [k]);
    f.useEffect( () => {
        const j = setTimeout( () => {
            r(!0)
        }
        , 1e4);
        return () => {
            clearTimeout(j)
        }
    }
    , []),
    f.useEffect( () => {
        d ? y(!0) : (y(!1),
        w(null))
    }
    , [d]),
    f.useEffect( () => {
        m(""),
        n(!1)
    }
    , [p]),
    f.useEffect( () => {
        a && t(!1)
    }
    , [a]);
    const D = j => {
        j.preventDefault(),
        r(!0)
    }
      , C = j => {
        j.preventDefault(),
        l(!0)
    }
    ;
    return s.jsxs("header", {
        className: R("text-sm", a && "border-none"),
        children: [s.jsx(k1, {
            handleEnquireClick: j => D(j),
            handleChatBotClick: j => C(j)
        }), a ? s.jsx(S1, {
            setIsMobileSearchOpen: n,
            data: h,
            loading: g,
            error: x,
            showResults: b,
            setShowResults: y,
            keywords: d,
            setKeywords: m,
            pathname: p
        }) : s.jsx("div", {
            className: "bg-theme",
            children: s.jsxs("div", {
                className: "flex justify-start sm:justify-start items-center gap-5 lg:gap-10 w-[min(1300px,100%-2rem)] mx-auto",
                children: [s.jsx(H, {
                    to: "/",
                    className: "inline-block h-16 w-auto",
                    children: s.jsx("img", {
                        className: "size-full object-contain object-left pl-3",
                        src: "https://www.legsgo.com/assets/logo-legsgo.png",
                        alt: "LegsGo Holidays",
                        loading: "lazy"
                    })
                }), s.jsx("div", {
                    className: "flex-grow",
                    children: s.jsx("div", {
                        className: "flex items-center justify-end lg:hidden",
                        children: s.jsx("button", {
                            onClick: () => n(!0),
                            className: "p-1.5",
                            children: s.jsx(ma, {
                                size: "20"
                            })
                        })
                    })
                }), s.jsx("div", {
                    className: "flex items-center gap-5 max-lg:hidden",
                    children: P.map( (j, A) => {
                        if (j.isDesktopMenu)
                            return typeof j.link == "string" ? s.jsxs(H, {
                                to: j.link,
                                className: "hover:underline flex flex-col items-center justify-center text-center px-2 py-1.5 w-[100px]",
                                onClick: j.label === "Enquire" ? D : void 0,
                                children: [s.jsxs("div", {
                                    className: "mt-1 mb-1 p-1.5 rounded-full bg-white/10 backdrop-blur-sm",
                                    children: [j.label === "Home" && s.jsx(ld, {
                                        className: "",
                                        size: 24
                                    }), j.label === "Business Setup" && s.jsx(cd, {
                                        size: 24
                                    }), j.label === "Abroad Education" && s.jsx(dd, {
                                        size: 24
                                    }), j.label === "Blog" && s.jsx(ud, {
                                        size: 24
                                    }), j.label === "Contact Us" && s.jsx(md, {
                                        size: 24
                                    })]
                                }), s.jsx("span", {
                                    className: `text-[13px] font-medium h-[38px] flex items-baseline justify-center ${j.label.includes(" ") ? "leading-tight text-[13px]" : ""}`,
                                    children: j.label.includes(" ") ? s.jsx(s.Fragment, {
                                        children: j.label.split(" ").map( (M, _) => s.jsxs(E.Fragment, {
                                            children: [M, _ < j.label.split(" ").length - 1 && s.jsx("br", {})]
                                        }, _))
                                    }) : j.label
                                })]
                            }, A) : s.jsxs("div", {
                                className: `group cursor-pointer flex flex-col items-center justify-center text-center px-2 relative w-[100px] ${c === "holidays" ? "active-dropdown" : ""}`,
                                onMouseEnter: () => u("holidays"),
                                onMouseLeave: () => u(null),
                                children: [s.jsx("div", {
                                    className: "mb-1 mt-1 p-1.5 rounded-full bg-white/10 backdrop-blur-sm",
                                    children: s.jsxs("div", {
                                        className: "relative",
                                        children: [s.jsx(hd, {
                                            size: 20
                                        }), s.jsx(pd, {
                                            size: 14,
                                            className: "absolute -top-1 -right-2 transform rotate-45"
                                        })]
                                    })
                                }), s.jsx("span", {
                                    className: "text-[13px] font-medium h-[38px] flex items-baseline justify-center",
                                    children: j.label
                                }), s.jsx("div", {
                                    className: `absolute -left-1/4 top-full mt-3 w-[800px] ${c === "holidays" ? "opacity-100 visible" : "opacity-0 invisible"} transition-all duration-300 z-50`,
                                    children: s.jsx("div", {
                                        className: "pt-4",
                                        children: s.jsx("div", {
                                            className: "bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden",
                                            children: s.jsxs("div", {
                                                className: "grid grid-cols-5 gap-0",
                                                children: [s.jsxs("div", {
                                                    className: "col-span-2 bg-purple-950 text-white p-5 flex flex-col",
                                                    children: [s.jsx("h3", {
                                                        className: "text-lg font-semibold mb-1",
                                                        children: "Explore The World"
                                                    }), s.jsx("p", {
                                                        className: "text-xs text-yellow-300/90 mb-4",
                                                        children: "Curated experiences for every traveler"
                                                    }), s.jsxs("div", {
                                                        className: "relative rounded-lg overflow-hidden flex-grow min-h-[160px] group/featured mb-3 shadow-md",
                                                        children: [s.jsx("img", {
                                                            src: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                                                            alt: "Featured Destination",
                                                            className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/featured:scale-110",
                                                            onError: M => {
                                                                M.target.onerror = null,
                                                                M.target.src = "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                                            }
                                                        }), s.jsx("div", {
                                                            className: "absolute inset-0 bg-gradient-to-t from-purple-950/80 to-transparent"
                                                        }), s.jsxs("div", {
                                                            className: "absolute bottom-0 left-0 p-3 z-10",
                                                            children: [s.jsx("span", {
                                                                className: "text-xs bg-yellow-400 text-purple-900 px-2 py-0.5 rounded-full font-medium",
                                                                children: "Featured"
                                                            }), s.jsx("h4", {
                                                                className: "text-white font-medium mt-1",
                                                                children: "Dream Destinations"
                                                            }), s.jsx("p", {
                                                                className: "text-xs text-white/80",
                                                                children: "Curated experiences for you"
                                                            })]
                                                        })]
                                                    }), s.jsx(H, {
                                                        to: "/attractions",
                                                        className: "text-center bg-yellow-400 hover:bg-yellow-300 text-purple-900 py-2 px-4 rounded-lg font-medium text-sm transition-colors shadow-sm",
                                                        onClick: () => u(null),
                                                        children: "View All Destinations"
                                                    })]
                                                }), s.jsx("div", {
                                                    className: "col-span-3 p-5",
                                                    children: s.jsx("div", {
                                                        className: "grid grid-cols-2 gap-x-4 gap-y-3",
                                                        children: k.map( (M, _) => s.jsxs(H, {
                                                            to: `/${us(M)}`,
                                                            className: "flex items-center gap-3 group/item hover:bg-purple-50 dark:hover:bg-purple-900/10 p-2 rounded-lg transition-colors",
                                                            onClick: () => u(null),
                                                            children: [s.jsx("div", {
                                                                className: "w-10 h-10 rounded-lg overflow-hidden shadow-sm bg-purple-100 dark:bg-purple-900/20 shrink-0",
                                                                children: s.jsx("img", {
                                                                    src: `https://www.legsgo.com/assets/svg/flags/${M.toLowerCase()}.svg`,
                                                                    alt: M,
                                                                    className: "w-full h-full object-cover",
                                                                    onError: B => {
                                                                        B.target.onerror = null,
                                                                        B.target.src = `https://www.legsgo.com/assets/svg/flags/${M.toLowerCase()}.svg`,
                                                                        B.target.onerror = () => {
                                                                            B.target.onerror = null,
                                                                            B.target.src = "https://www.legsgo.com/assets/svg/country-placeholder.svg",
                                                                            B.target.onerror = () => {
                                                                                const O = B.target.parentNode;
                                                                                if (O) {
                                                                                    B.target.style.display = "none";
                                                                                    const F = document.createElement("div");
                                                                                    F.className = "w-full h-full flex items-center justify-center bg-purple-600 text-white font-bold",
                                                                                    F.textContent = M.substring(0, 2).toUpperCase(),
                                                                                    O.appendChild(F)
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                })
                                                            }), s.jsx("div", {
                                                                children: s.jsx("div", {
                                                                    className: "font-medium text-gray-900 dark:text-gray-100 group-hover/item:text-purple-700 dark:group-hover/item:text-purple-400 transition-colors",
                                                                    children: M
                                                                })
                                                            }), s.jsx("div", {
                                                                className: "ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity",
                                                                children: s.jsxs("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "16",
                                                                    height: "16",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    className: "text-purple-600 dark:text-purple-400",
                                                                    children: [s.jsx("path", {
                                                                        d: "M5 12h14"
                                                                    }), s.jsx("path", {
                                                                        d: "m12 5 7 7-7 7"
                                                                    })]
                                                                })
                                                            })]
                                                        }, _))
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                })]
                            }, A)
                    }
                    )
                }), s.jsxs("div", {
                    className: "hidden lg:flex items-center",
                    children: [s.jsxs("div", {
                        className: "hidden xl:flex border rounded-3xl items-center gap-3 px-5 shadow-md relative bg-white text-black hover:shadow-lg transition-all duration-300",
                        children: [s.jsx(Fs, {
                            size: 20,
                            className: "text-purple-900"
                        }), s.jsx("a", {
                            href: "tel:+919600776688",
                            className: "p-2 text-lg theme-fill",
                            children: "96 00 77 66 88"
                        })]
                    }), s.jsxs("div", {
                        className: "xl:hidden relative group",
                        children: [s.jsx("div", {
                            className: "border rounded-full p-3 bg-white text-black shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center",
                            children: s.jsx(Fs, {
                                size: 20,
                                className: "text-purple-900"
                            })
                        }), s.jsxs("div", {
                            className: "absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10",
                            children: [s.jsx("div", {
                                className: "bg-white rounded-xl shadow-lg px-4 py-2 whitespace-nowrap",
                                children: s.jsxs("a", {
                                    href: "tel:+919600776688",
                                    className: "text-purple-900 font-medium flex items-center gap-2",
                                    children: [s.jsx(Fs, {
                                        size: 16
                                    }), s.jsx("span", {
                                        children: "96 00 77 66 88"
                                    })]
                                })
                            }), s.jsx("div", {
                                className: "absolute w-3 h-3 bg-white transform rotate-45 top-1/2 -translate-y-1/2 right-[-6px]"
                            })]
                        })]
                    })]
                }), s.jsx("div", {
                    className: "inset-0 flex items-center justify-center",
                    children: s.jsx("img", {
                        src: "https://www.legsgo.com/assets/svg/iata.svg",
                        alt: "IATA",
                        className: "h-20 w-auto",
                        style: {
                            filter: "brightness(0) invert(1)",
                            opacity: .9
                        }
                    })
                }), s.jsx("div", {
                    className: "flex items-center lg:hidden",
                    children: s.jsx("button", {
                        onClick: () => t(j => !j),
                        className: "p-1.5",
                        children: e ? s.jsx(ha, {}) : s.jsx(fd, {})
                    })
                })]
            })
        }), s.jsxs("div", {
            className: "block lg:hidden",
            children: [s.jsx("div", {
                className: `fixed inset-0 z-40 backdrop-blur-lg bg-black/60 transform ${e ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all duration-300 ease-in-out lg:hidden`,
                onClick: () => t(!1)
            }), s.jsxs("div", {
                className: `fixed z-50 inset-y-0 left-0 w-full max-w-sm transform ${e ? "translate-x-0" : "-translate-x-full"} transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden overflow-hidden flex flex-col`,
                onClick: j => j.stopPropagation(),
                children: [s.jsx("div", {
                    className: "absolute top-0 left-0 right-0 h-48 rounded-br-[40px] bg-[url('https://www.legsgo.com/assets/fav-icons/bg-textured.jpg')] bg-cover bg-center"
                }), s.jsx("button", {
                    type: "button",
                    onClick: j => {
                        j.preventDefault(),
                        j.stopPropagation(),
                        t(!1)
                    }
                    ,
                    className: "absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-2.5 z-20 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-yellow-400/20 cursor-pointer",
                    "aria-label": "Close navigation menu",
                    children: s.jsx(ha, {
                        size: 18,
                        className: "text-white pointer-events-none"
                    })
                }), s.jsxs("div", {
                    className: "relative pt-8 px-6 pb-12 z-10",
                    children: [s.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [s.jsx("div", {
                            className: "h-16 w-16 rounded-2xl overflow-hidden shadow-lg shadow-purple-900/30 p-2",
                            children: s.jsx("img", {
                                className: "size-full object-contain",
                                src: "https://www.legsgo.com/assets/logo-legsgo.png",
                                alt: "LegsGo Holidays",
                                loading: "lazy"
                            })
                        }), s.jsxs("div", {
                            children: [s.jsx("h3", {
                                className: "font-bold text-xl text-white tracking-tight",
                                children: "LegsGo Holidays"
                            }), s.jsx("p", {
                                className: "text-xs text-yellow-300/80 mt-0.5",
                                children: "Travel Beyond Boundaries"
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "flex items-center gap-2 mt-6",
                        children: [s.jsxs("a", {
                            href: "tel:+919600776688",
                            className: "flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full pl-3 pr-4 py-2 hover:bg-white/20 transition-all shadow-md",
                            children: [s.jsx("div", {
                                className: "bg-yellow-400 rounded-full p-1.5",
                                children: s.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "text-purple-900",
                                    children: s.jsx("path", {
                                        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                    })
                                })
                            }), s.jsx("span", {
                                className: "text-sm font-medium text-white",
                                children: "96 00 77 66 88"
                            })]
                        }), s.jsx("button", {
                            onClick: () => {
                                t(!1),
                                n(!0)
                            }
                            ,
                            className: "bg-white/10 backdrop-blur-sm h-9 w-9 rounded-full flex items-center justify-center hover:bg-white/20 transition-all shadow-md",
                            children: s.jsx(ma, {
                                size: 16,
                                className: "text-white"
                            })
                        }), s.jsx("button", {
                            onClick: j => {
                                D(j),
                                t(!1)
                            }
                            ,
                            className: "ml-auto bg-yellow-400 text-purple-900 font-medium text-sm px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition-all",
                            children: "Enquire Now"
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "flex-1 bg-white dark:bg-gray-900 overflow-hidden rounded-tr-[40px] shadow-[0_-10px_20px_rgba(0,0,0,0.1)] flex flex-col",
                    children: [s.jsx("div", {
                        className: "px-6 py-4 border-b border-gray-100 dark:border-gray-800",
                        children: s.jsx("h4", {
                            className: "text-sm font-semibold text-gray-500 dark:text-gray-400",
                            children: "NAVIGATION"
                        })
                    }), s.jsx(Fn, {
                        className: "flex-1 overflow-y-auto pt-2 pb-6",
                        children: s.jsx("div", {
                            className: "space-y-2 px-4",
                            children: P.map( (j, A) => {
                                if (j.isMobileMenu && typeof j.link == "string") {
                                    const M = p === j.link;
                                    return s.jsx(V.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: A * .05
                                        },
                                        children: s.jsxs(H, {
                                            to: j.link,
                                            className: `flex items-center gap-3 p-3 rounded-xl transition-all ${M ? "bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300" : "hover:bg-gray-50 dark:hover:bg-gray-800/50"}`,
                                            onClick: _ => {
                                                j.label === "Enquire" && D(_),
                                                t(!1)
                                            }
                                            ,
                                            children: [s.jsx(Sr, {
                                                label: j.label,
                                                isActive: M
                                            }), s.jsx("div", {
                                                className: "flex-1",
                                                children: s.jsx("span", {
                                                    className: "font-medium",
                                                    children: j.label
                                                })
                                            }), s.jsx(V.div, {
                                                whileHover: {
                                                    x: 3
                                                },
                                                className: `text-gray-400 ${M ? "text-purple-600" : ""}`,
                                                children: s.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: s.jsx("polyline", {
                                                        points: "9 18 15 12 9 6"
                                                    })
                                                })
                                            })]
                                        })
                                    }, A)
                                } else if (j.isMobileMenu)
                                    return s.jsx(V.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: A * .05
                                        },
                                        children: s.jsx(oc, {
                                            type: "single",
                                            collapsible: !0,
                                            children: s.jsx(_n, {
                                                value: j.label,
                                                className: "border-none",
                                                children: s.jsxs("div", {
                                                    className: "rounded-xl overflow-hidden",
                                                    children: [s.jsxs(On, {
                                                        className: "flex items-center gap-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:no-underline",
                                                        children: [s.jsx(Sr, {
                                                            label: j.label
                                                        }), s.jsx("div", {
                                                            className: "flex-1 font-medium",
                                                            children: j.label
                                                        })]
                                                    }), s.jsx(zn, {
                                                        className: "pt-2 pb-3 px-0",
                                                        children: s.jsxs("div", {
                                                            className: "bg-gray-50 dark:bg-gray-800/30 rounded-xl p-3 ml-9 mr-3",
                                                            children: [s.jsx("div", {
                                                                className: "text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium tracking-wide",
                                                                children: "POPULAR DESTINATIONS"
                                                            }), s.jsx("div", {
                                                                className: "grid grid-cols-2 gap-2",
                                                                children: k.map( (M, _) => s.jsxs(H, {
                                                                    to: `/${us(M)}`,
                                                                    className: "py-2 px-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md text-sm transition-all hover:text-purple-700 dark:hover:text-purple-400 flex items-center gap-2 group",
                                                                    onClick: () => t(!1),
                                                                    children: [s.jsx("span", {
                                                                        className: "size-2 rounded-full bg-yellow-400 group-hover:scale-110 transition-transform"
                                                                    }), M]
                                                                }, _))
                                                            })]
                                                        })
                                                    })]
                                                })
                                            })
                                        })
                                    }, A)
                            }
                            )
                        })
                    }), s.jsx("div", {
                        className: "mt-auto border-t border-gray-100 dark:border-gray-800",
                        children: s.jsxs("div", {
                            className: "p-6 space-y-4",
                            children: [s.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [s.jsx("h4", {
                                    className: "text-sm font-medium text-gray-500 dark:text-gray-400",
                                    children: "CONNECT WITH US"
                                }), s.jsxs(V.button, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    onClick: j => {
                                        C(j),
                                        t(!1)
                                    }
                                    ,
                                    className: "text-xs bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 px-3 py-1.5 rounded-full flex items-center gap-1.5",
                                    children: [s.jsx("span", {
                                        className: "size-2 rounded-full bg-green-500 animate-pulse"
                                    }), "Chat with us"]
                                })]
                            }), s.jsxs("div", {
                                className: "grid grid-cols-4 gap-2",
                                children: [s.jsx("a", {
                                    href: "https://www.facebook.com/LegsGoHilidays",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-xl p-3 transition-colors group",
                                    children: s.jsx(Zf, {
                                        size: 20,
                                        className: "text-gray-600 dark:text-gray-400 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors"
                                    })
                                }), s.jsx("a", {
                                    href: "https://www.instagram.com/legsgo_holidays",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-xl p-3 transition-colors group",
                                    children: s.jsx(Jf, {
                                        size: 20,
                                        className: "text-gray-600 dark:text-gray-400 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors"
                                    })
                                }), s.jsx("a", {
                                    href: "https://x.com/Legsgoofficial",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-xl p-3 transition-colors group",
                                    children: s.jsx(kn, {
                                        size: 20,
                                        className: "text-gray-600 dark:text-gray-400 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors"
                                    })
                                }), s.jsx("a", {
                                    href: "https://www.youtube.com/@legsgoholidays",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-xl p-3 transition-colors group",
                                    children: s.jsx(Vl, {
                                        size: 20,
                                        className: "text-gray-600 dark:text-gray-400 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors"
                                    })
                                })]
                            })]
                        })
                    })]
                })]
            })]
        }), s.jsx(j1, {
            isOpen: i,
            onClose: () => r(!1)
        }), s.jsx(N1, {
            isOpen: o,
            onClose: () => l(!1)
        })]
    })
}
  , S1 = ({setIsMobileSearchOpen: e, loading: t, data: a, error: n, showResults: i, keywords: r, setKeywords: o}) => s.jsx("div", {
    onClick: () => e(!1),
    children: s.jsx("div", {
        onClick: l => l.stopPropagation(),
        children: s.jsxs("div", {
            className: "border flex items-center gap-3 px-5 py-[7px] relative",
            children: [s.jsx(ma, {
                size: "20"
            }), s.jsx("input", {
                autoFocus: !0,
                onBlur: () => !a && e(!1),
                type: "text",
                placeholder: "Search for Destinations",
                value: r,
                onChange: l => o(l.target.value),
                className: "focus:outline-none py-2.5 cursor-text w-full placeholder:font-light"
            }), s.jsx("button", {
                onClick: () => e(!1),
                children: s.jsx(ha, {
                    size: "20"
                })
            }), s.jsx(Hd, {
                loadingState: t,
                loadingFallback: s.jsx("div", {
                    className: "absolute left-0 right-0 z-50 top-full pt-2 bg-white",
                    children: s.jsx(ie, {
                        message: "Searching..",
                        heightAuto: !0
                    })
                }),
                errorState: !!n,
                errorFallback: s.jsx("div", {
                    className: "absolute left-0 right-0 z-50 top-full pt-2 bg-white",
                    children: s.jsx("span", {
                        className: "text-red-500 text-sm",
                        children: n
                    })
                }),
                data: i ? s.jsx(T1, {
                    data: a,
                    error: n
                }) : null
            })]
        })
    })
})
  , T1 = ({data: e=[], error: t}) => s.jsx("div", {
    className: "absolute left-0 right-0 z-50 top-full pt-2",
    children: s.jsx(jn, {
        className: "shadow-md",
        children: s.jsxs("div", {
            children: [s.jsx("div", {
                className: "px-4",
                children: s.jsx("h3", {
                    className: "text-sm py-3 font-medium text-gray-400",
                    children: "matching keywords"
                })
            }), s.jsx("div", {
                className: "pb-4",
                children: (e == null ? void 0 : e.length) > 0 ? s.jsx(Fn, {
                    className: "h-full",
                    children: s.jsx("ul", {
                        className: "text-sm space-y-1",
                        children: e.map(a => s.jsx("li", {
                            children: s.jsxs(H, {
                                to: `/attractions/${a.slug}`,
                                className: "flex items-center gap-2 cursor-pointer px-4 py-1 hover:bg-slate-100",
                                children: [s.jsx("div", {
                                    className: "size-10 rounded-full overflow-clip bg-gray-100 shrink-0 pointer-events-none",
                                    children: s.jsx("img", {
                                        src: a.images[0],
                                        alt: a.title,
                                        loading: "lazy",
                                        className: "size-full object-cover"
                                    })
                                }), s.jsxs("div", {
                                    className: "pointer-events-none",
                                    children: [s.jsx("span", {
                                        className: "line-clamp-1",
                                        children: a.title
                                    }), s.jsx("div", {
                                        className: "flex items-center gap-2",
                                        children: s.jsx("span", {
                                            className: "line-clamp-1 text-xs",
                                            children: s.jsxs("div", {
                                                className: "flex items-center gap-1 text-xs",
                                                children: [s.jsx(As, {
                                                    className: "text-yellow-500"
                                                }), " ", a.rating.value, " ", s.jsxs("span", {
                                                    className: "text-gray-500",
                                                    children: ["(", a.rating.reviews, ")"]
                                                })]
                                            })
                                        })
                                    })]
                                })]
                            })
                        }, a.slug))
                    })
                }) : s.jsxs("div", {
                    className: "h-full grid place-content-center gap-2 text-sm",
                    children: [s.jsx("span", {
                        children: s.jsx(p0, {
                            className: "size-6 mx-auto"
                        })
                    }), s.jsx("span", {
                        children: "No results found!"
                    })]
                })
            })]
        })
    })
})
  , Sr = ({label: e, isActive: t}) => {
    const a = t ? "text-purple-600 dark:text-purple-400" : "text-gray-500 dark:text-gray-400"
      , n = t ? "bg-purple-100 dark:bg-purple-900/20" : "bg-gray-100 dark:bg-gray-800";
    switch (e) {
    case "Home":
        return s.jsx("div", {
            className: `${n} p-2 rounded-lg ${a}`,
            children: s.jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [s.jsx("path", {
                    d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                }), s.jsx("polyline", {
                    points: "9 22 9 12 15 12 15 22"
                })]
            })
        });
    case "Holidays":
        return s.jsx("div", {
            className: `${n} p-2 rounded-lg ${a}`,
            children: s.jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [s.jsx("path", {
                    d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4z"
                }), s.jsx("path", {
                    d: "M12 2a9.96 9.96 0 0 1 7.5 3.5 10 10 0 0 1-7.5 17.5A10 10 0 0 1 12 2z"
                })]
            })
        });
    case "Business Setup":
        return s.jsx("div", {
            className: `${n} p-2 rounded-lg ${a}`,
            children: s.jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [s.jsx("rect", {
                    x: "2",
                    y: "7",
                    width: "20",
                    height: "14",
                    rx: "2",
                    ry: "2"
                }), s.jsx("path", {
                    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                })]
            })
        });
    case "Abroad Education":
        return s.jsx("div", {
            className: `${n} p-2 rounded-lg ${a}`,
            children: s.jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [s.jsx("path", {
                    d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
                }), s.jsx("path", {
                    d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                })]
            })
        });
    case "Blog":
        return s.jsx("div", {
            className: `${n} p-2 rounded-lg ${a}`,
            children: s.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: s.jsx("path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                })
            })
        });
    case "About Us":
        return s.jsx("div", {
            className: `${n} p-2 rounded-lg ${a}`,
            children: s.jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [s.jsx("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }), s.jsx("path", {
                    d: "M12 16v-4"
                }), s.jsx("path", {
                    d: "M12 8h.01"
                })]
            })
        });
    case "Privacy Policy":
        return s.jsx("div", {
            className: `${n} p-2 rounded-lg ${a}`,
            children: s.jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [s.jsx("rect", {
                    x: "3",
                    y: "11",
                    width: "18",
                    height: "11",
                    rx: "2",
                    ry: "2"
                }), s.jsx("path", {
                    d: "M7 11V7a5 5 0 0 1 10 0v4"
                })]
            })
        });
    case "Contact Us":
        return s.jsx("div", {
            className: `${n} p-2 rounded-lg ${a}`,
            children: s.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: s.jsx("path", {
                    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                })
            })
        });
    case "Enquire":
        return s.jsx("div", {
            className: `${n} p-2 rounded-lg ${a}`,
            children: s.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: s.jsx("path", {
                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                })
            })
        });
    default:
        return s.jsx("div", {
            className: `${n} p-2 rounded-lg ${a}`,
            children: s.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: s.jsx("polyline", {
                    points: "22 12 18 12 15 21 9 3 6 12 2 12"
                })
            })
        })
    }
}
  , P1 = () => s.jsx("footer", {
    className: "bg-white dark:bg-gray-900 pb-20 lg:pb-0",
    children: s.jsxs("div", {
        className: "w-[min(1300px,100%-2rem)] mx-auto",
        children: [s.jsx("div", {
            className: "flex flex-col items-center gap-2 rounded-lg bg-[#051036] p-6 max-sm:p-4 shadow-lg sm:flex-row sm:justify-between",
            children: s.jsxs("strong", {
                className: "text-lg text-white sm:text-xl",
                children: [" ", "Our Packages Start From 10,000 to 2 Lakhs Approx. Depending on Destination of Your Choice.", " "]
            })
        }), s.jsxs("div", {
            className: "mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr]",
            children: [s.jsxs("div", {
                className: "text-center sm:text-left lg:pr-8",
                children: [s.jsxs("p", {
                    className: "text-lg font-medium text-gray-900 dark:text-white inline-flex items-center gap-2",
                    children: [s.jsx("svg", {
                        className: "w-5 h-5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: s.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        })
                    }), "Contact Us"]
                }), s.jsx("div", {
                    className: "mt-6 space-y-6",
                    children: s.jsxs("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4",
                        children: [s.jsxs("div", {
                            className: "p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700",
                            children: [s.jsxs("span", {
                                className: "text-sm font-semibold text-gray-900 dark:text-white inline-flex items-center gap-2",
                                children: [s.jsx("svg", {
                                    className: "w-4 h-4 text-blue-600 dark:text-blue-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: s.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9h.01M11 9h.01M15 9h.01"
                                    })
                                }), "Customer Care"]
                            }), s.jsxs("div", {
                                className: "mt-2 space-y-1",
                                children: [s.jsx("a", {
                                    href: "tel:04447978446",
                                    className: "block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors",
                                    children: "+91 90908 34567"
                                }), s.jsx("a", {
                                    href: "tel:04447978446",
                                    className: "block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors",
                                    children: "+91 44 47978446"
                                })]
                            })]
                        }), s.jsxs("div", {
                            className: "p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700",
                            children: [s.jsxs("span", {
                                className: "text-sm font-semibold text-gray-900 dark:text-white inline-flex items-center gap-2",
                                children: [s.jsx("svg", {
                                    className: "w-4 h-4 text-blue-600 dark:text-blue-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: s.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    })
                                }), "Email Support"]
                            }), s.jsx("div", {
                                className: "mt-2",
                                children: s.jsx("a", {
                                    href: "mailto:info@legsgo.com",
                                    className: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors",
                                    children: "info@legsgo.com"
                                })
                            })]
                        })]
                    })
                })]
            }), s.jsxs("div", {
                className: "text-center",
                children: [s.jsx("p", {
                    className: "text-lg font-medium text-gray-900 dark:text-white",
                    children: "Company"
                }), s.jsxs("ul", {
                    className: "mt-8 space-y-4 text-sm",
                    children: [s.jsx("li", {
                        children: s.jsx(H, {
                            className: "text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75",
                            to: "/about",
                            children: "About Us"
                        })
                    }), s.jsx("li", {
                        children: s.jsx(H, {
                            className: "text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75",
                            to: "/business-setup",
                            children: "Business Setup"
                        })
                    }), s.jsx("li", {
                        children: s.jsx(H, {
                            className: "text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75",
                            to: "/privacy-policy",
                            children: "Privacy Policy"
                        })
                    }), s.jsx("li", {
                        children: s.jsx(H, {
                            className: "text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75",
                            to: "/terms-and-conditions",
                            children: "Terms and Conditions"
                        })
                    })]
                })]
            }), s.jsxs("div", {
                className: "text-center",
                children: [s.jsx("p", {
                    className: "text-lg font-medium text-gray-900 dark:text-white",
                    children: "Our Packages"
                }), s.jsxs("ul", {
                    className: "mt-8 space-y-4 text-sm",
                    children: [s.jsx("li", {
                        children: s.jsx(H, {
                            className: "text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75",
                            to: "/attractions",
                            children: "Holiday Packages"
                        })
                    }), s.jsx("li", {
                        children: s.jsx(H, {
                            className: "text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75",
                            to: "#",
                            children: "Honeymoon Packages"
                        })
                    }), s.jsx("li", {
                        children: s.jsx(H, {
                            className: "text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75",
                            to: "#",
                            children: "Exclusive Packages"
                        })
                    })]
                })]
            }), s.jsxs("div", {
                className: "text-center",
                children: [s.jsx("p", {
                    className: "text-lg font-medium text-gray-900 dark:text-white",
                    children: "Top Destinations"
                }), s.jsxs("ul", {
                    className: "mt-8 space-y-4 text-sm",
                    children: [s.jsx("li", {
                        children: s.jsx(H, {
                            className: "text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75",
                            to: "/abu-dhabi",
                            children: "Abu Dhabi"
                        })
                    }), s.jsx("li", {
                        children: s.jsx(H, {
                            className: "text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75",
                            to: "/dubai",
                            children: "Dubai"
                        })
                    }), s.jsx("li", {
                        children: s.jsx(H, {
                            className: "text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75",
                            to: "/singapore",
                            children: "Singapore"
                        })
                    }), s.jsx("li", {
                        children: s.jsx(H, {
                            className: "text-gray-700 transition  hover:text-gray-700/75 dark:text-white dark:hover:text-white/75",
                            to: "/thailand",
                            children: "Thailand"
                        })
                    }), s.jsx("li", {
                        children: s.jsx(H, {
                            className: "text-gray-700 transition  hover:text-gray-700/75 dark:text-white dark:hover:text-white/75",
                            to: "/bali",
                            children: "Bali"
                        })
                    })]
                })]
            })]
        }), s.jsx("div", {
            className: " grid grid-cols-1 gap-8",
            children: s.jsx("div", {
                className: "mt-4 space-y-8",
                children: s.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: [s.jsxs("div", {
                        className: "p-5 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300",
                        children: [s.jsxs("span", {
                            className: "inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white",
                            children: [s.jsxs("svg", {
                                className: "w-4 h-4",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: [s.jsx("path", {
                                    d: "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H6z"
                                }), s.jsx("path", {
                                    d: "M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4z"
                                })]
                            }), "Corporate Office"]
                        }), s.jsxs("address", {
                            className: "mt-3 text-sm not-italic leading-relaxed text-gray-600 dark:text-gray-300",
                            children: ["Akshaya Shanthi, 2nd Floor,", s.jsx("br", {}), "No.201, New Door Nos 25 & 27,", s.jsx("br", {}), "Old Door Nos 43 & 44, Anna Salai,", s.jsx("br", {}), "Chennai - 600 002."]
                        })]
                    }), s.jsxs("div", {
                        className: "p-5 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300",
                        children: [s.jsxs("span", {
                            className: "inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white",
                            children: [s.jsx("svg", {
                                className: "w-4 h-4",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: s.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
                                    clipRule: "evenodd"
                                })
                            }), "Trichy Branch Office"]
                        }), s.jsxs("address", {
                            className: "mt-3 text-sm not-italic leading-relaxed text-gray-600 dark:text-gray-300",
                            children: ["No 1, 2nd Floor,", s.jsx("br", {}), "Pudukottai Main Road,", s.jsx("br", {}), "TVS Toll Gate,", s.jsx("br", {}), "Trichy - 620 020."]
                        })]
                    }), s.jsxs("div", {
                        className: "p-5 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300",
                        children: [s.jsxs("span", {
                            className: "inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white",
                            children: [s.jsx("svg", {
                                className: "w-4 h-4",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: s.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
                                    clipRule: "evenodd"
                                })
                            }), "Coimbatore Branch Office"]
                        }), s.jsxs("address", {
                            className: "mt-3 text-sm not-italic leading-relaxed text-gray-600 dark:text-gray-300",
                            children: ["8A/1019, Avinashi Road,", s.jsx("br", {}), "PNR Building (Near AUDI Showroom),", s.jsx("br", {}), "Coimbatore - 641 018."]
                        })]
                    })]
                })
            })
        }), s.jsx("div", {
            className: "mt-12 mb-8",
            children: s.jsxs("div", {
                className: "rounded-xl bg-gradient-to-r from-[#051036] via-blue-700 to-[#051036] p-0.5 shadow-lg hover:shadow-xl transition-all duration-300 relative",
                children: [s.jsx("div", {
                    className: "absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce shadow-md",
                    children: "NEW!"
                }), s.jsx("div", {
                    className: "rounded-[10px] bg-white p-5 sm:p-6 dark:bg-gray-900",
                    children: s.jsxs("div", {
                        className: "flex flex-col md:flex-row items-center justify-between gap-4",
                        children: [s.jsxs("div", {
                            className: "flex flex-col sm:flex-row items-center gap-4",
                            children: [s.jsx("div", {
                                className: "w-32 h-12 flex-shrink-0 bg-white rounded-md dark:bg-gray-800 flex items-center justify-center p-1",
                                children: s.jsx("img", {
                                    src: "https://www.legsgo.com/assets/Matrix_Logo_180x.png",
                                    alt: "Matrix e-SIM Logo",
                                    className: "max-w-full max-h-full object-contain"
                                })
                            }), s.jsxs("div", {
                                children: [s.jsx("h3", {
                                    className: "text-lg font-bold text-gray-900 sm:text-xl dark:text-white text-center sm:text-left",
                                    children: "Stay Connected Globally"
                                }), s.jsx("p", {
                                    className: "mt-1 text-sm text-gray-700 dark:text-gray-300 text-center sm:text-left",
                                    children: "Travel worry-free with Matrix e-SIM - instant connectivity in 190+ countries"
                                })]
                            })]
                        }), s.jsx("div", {
                            className: "w-full md:w-auto",
                            children: s.jsx("a", {
                                href: "https://matrix.in/pages/esims",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "block w-full md:w-auto text-center rounded-lg bg-[#051036] px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 hover:scale-105 duration-300",
                                children: "Get Matrix e-SIM"
                            })
                        })]
                    })
                })]
            })
        }), s.jsx("div", {
            className: "mt-8 mb-10",
            children: s.jsxs("div", {
                className: "rounded-lg bg-gray-50 p-6 shadow-sm dark:bg-gray-800/50",
                children: [s.jsxs("div", {
                    className: "text-center mb-4",
                    children: [s.jsx("h3", {
                        className: "text-lg font-medium text-gray-900 dark:text-white",
                        children: "Accepted Payment Methods"
                    }), s.jsx("p", {
                        className: "mt-1 text-sm text-gray-600 dark:text-gray-400",
                        children: "Secure and convenient payment options"
                    })]
                }), s.jsxs("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-items-center",
                    children: [s.jsx("div", {
                        className: "p-3 bg-white rounded-lg shadow-sm flex items-center justify-center transform hover:scale-105 transition-transform duration-200 dark:bg-gray-700",
                        children: s.jsx("img", {
                            src: "https://www.legsgo.com/assets/svg/payment/gpay.png",
                            alt: "Google Pay",
                            className: "h-10 sm:h-12 w-auto object-contain"
                        })
                    }), s.jsx("div", {
                        className: "p-3 bg-white rounded-lg shadow-sm flex items-center justify-center transform hover:scale-105 transition-transform duration-200 dark:bg-gray-700",
                        children: s.jsx("img", {
                            src: "https://www.legsgo.com/assets/svg/payment/phonepe.svg",
                            alt: "PhonePe",
                            className: "h-10 sm:h-12 w-auto object-contain"
                        })
                    }), s.jsx("div", {
                        className: "p-3 bg-white rounded-lg shadow-sm flex items-center justify-center transform hover:scale-105 transition-transform duration-200 dark:bg-gray-700",
                        children: s.jsx("img", {
                            src: "https://www.legsgo.com/assets/svg/payment/paytm.svg",
                            alt: "Paytm",
                            className: "h-10 sm:h-12 w-auto object-contain"
                        })
                    }), s.jsx("div", {
                        className: "p-3 bg-white rounded-lg shadow-sm flex items-center justify-center transform hover:scale-105 transition-transform duration-200 dark:bg-gray-700",
                        children: s.jsx("img", {
                            src: "https://www.legsgo.com/assets/svg/payment/upi.svg",
                            alt: "UPI",
                            className: "h-10 sm:h-12 w-auto object-contain"
                        })
                    }), s.jsx("div", {
                        className: "p-3 bg-white rounded-lg shadow-sm flex items-center justify-center transform hover:scale-105 transition-transform duration-200 dark:bg-gray-700",
                        children: s.jsx("img", {
                            src: "https://www.legsgo.com/assets/svg/payment/mastercard.png",
                            alt: "Mastercard",
                            className: "h-10 sm:h-12 w-auto object-contain"
                        })
                    }), s.jsx("div", {
                        className: "p-3 bg-white rounded-lg shadow-sm flex items-center justify-center transform hover:scale-105 transition-transform duration-200 dark:bg-gray-700",
                        children: s.jsx("img", {
                            src: "https://www.legsgo.com/assets/svg/payment/visa.png",
                            alt: "Visa",
                            className: "h-10 sm:h-12 w-auto object-contain"
                        })
                    }), s.jsx("div", {
                        className: "p-3 bg-white rounded-lg shadow-sm flex items-center justify-center transform hover:scale-105 transition-transform duration-200 dark:bg-gray-700",
                        children: s.jsx("img", {
                            src: "https://www.legsgo.com/assets/svg/payment/rupay.png",
                            alt: "RuPay",
                            className: "h-10 sm:h-12 w-auto object-contain"
                        })
                    })]
                }), s.jsx("div", {
                    className: "mt-4 text-center text-xs text-gray-500 dark:text-gray-400",
                    children: s.jsx("p", {
                        children: "100% secure payment processing"
                    })
                })]
            })
        }), s.jsx("div", {
            children: s.jsxs("div", {
                className: "mt-8 items-center justify-between py-4 border-t border-black/20",
                children: [s.jsx("p", {
                    className: "mt-4 mb-4 text-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400",
                    children: "© 2024 LegsGo LLC All rights reserved."
                }), s.jsxs("ul", {
                    className: "flex justify-center gap-6",
                    children: [s.jsx("li", {
                        children: s.jsxs("a", {
                            href: "https://www.facebook.com/LegsGoHilidays",
                            rel: "noreferrer",
                            target: "_blank",
                            className: "text-[#051036] transition-colors hover:text-[#051036]/80 dark:text-black-500 dark:hover:text-black-500/75",
                            children: [s.jsx("span", {
                                className: "sr-only",
                                children: "Facebook"
                            }), s.jsx("svg", {
                                className: "h-6 w-8",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                "aria-hidden": "true",
                                children: s.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                                    clipRule: "evenodd"
                                })
                            })]
                        })
                    }), s.jsx("li", {
                        children: s.jsxs("a", {
                            href: "https://www.instagram.com/legsgo_holidays",
                            rel: "noreferrer",
                            target: "_blank",
                            className: "text-[#051036] transition-colors hover:text-[#051036]/80 dark:text-black-500 dark:hover:text-black-500/75",
                            children: [s.jsx("span", {
                                className: "sr-only",
                                children: "Instagram"
                            }), s.jsx("svg", {
                                className: "h-6 w-8",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                "aria-hidden": "true",
                                children: s.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                                    clipRule: "evenodd"
                                })
                            })]
                        })
                    }), s.jsx("li", {
                        children: s.jsx("a", {
                            href: "https://www.linkedin.com/company/legs-go-holidays/",
                            rel: "noreferrer",
                            target: "_blank",
                            className: "text-[#051036] transition-colors hover:text-[#051036]/80 dark:text-black-500 dark:hover:text-black-500/75",
                            children: s.jsx("svg", {
                                className: "h-6 w-8",
                                stroke: "currentColor",
                                fill: "currentColor",
                                strokeWidth: "0",
                                viewBox: "0 0 448 512",
                                height: "1em",
                                width: "2em",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: s.jsx("path", {
                                    d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                })
                            })
                        })
                    }), s.jsx("li", {
                        children: s.jsx("a", {
                            href: "https://www.youtube.com/@legsgoholidays",
                            rel: "noreferrer",
                            target: "_blank",
                            className: "text-[#FF0000] transition-colors hover:text-[#FF0000]/80 dark:text-white dark:hover:text-white/75",
                            children: s.jsx("svg", {
                                className: "h-6 w-8",
                                xmlns: "http://www.w3.org/2000/svg",
                                version: "1.1",
                                width: "2em",
                                height: "1em",
                                viewBox: "0 0 90 90",
                                children: s.jsx("path", {
                                    d: "M 88.119 23.338 c -1.035 -3.872 -4.085 -6.922 -7.957 -7.957 C 73.144 13.5 45 13.5 45 13.5 s -28.144 0 -35.162 1.881 c -3.872 1.035 -6.922 4.085 -7.957 7.957 C 0 30.356 0 45 0 45 s 0 14.644 1.881 21.662 c 1.035 3.872 4.085 6.922 7.957 7.957 C 16.856 76.5 45 76.5 45 76.5 s 28.144 0 35.162 -1.881 c 3.872 -1.035 6.922 -4.085 7.957 -7.957 C 90 59.644 90 45 90 45 S 90 30.356 88.119 23.338 z M 36 58.5 v -27 L 59.382 45 L 36 58.5 z",
                                    transform: " matrix(1 0 0 1 0 0) ",
                                    strokeLinecap: "round"
                                })
                            })
                        })
                    }), s.jsx("li", {
                        children: s.jsx("a", {
                            href: "https://x.com/Legsgoofficial",
                            rel: "noreferrer",
                            target: "_blank",
                            className: "text-[#051036] transition-colors hover:text-[#051036]/80 dark:text-black-500 dark:hover:text-black-500/75",
                            children: s.jsx("svg", {
                                className: "h-6 w-5",
                                stroke: "currentColor",
                                fill: "currentColor",
                                strokeWidth: "0",
                                height: "1em",
                                width: "1em",
                                viewBox: "0 0 120 120",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: s.jsx("path", {
                                    d: "M 0.219 2.882 l 34.748 46.461 L 0 87.118 h 7.87 l 30.614 -33.073 l 24.735 33.073 H 90 L 53.297 38.043 L 85.844 2.882 h -7.87 L 49.781 33.341 L 27.001 2.882 H 0.219 z M 11.793 8.679 h 12.303 L 78.425 81.32 H 66.122 L 11.793 8.679 z",
                                    transform: " matrix(1 0 0 1 0 0) ",
                                    strokeLinecap: "round"
                                })
                            })
                        })
                    })]
                })]
            })
        })]
    })
})
  , M1 = () => s.jsx("div", {
    children: s.jsx("section", {
        className: "flex items-center h-full p-16",
        children: s.jsx("div", {
            className: "container flex flex-col items-center justify-center px-5 mx-auto my-8",
            children: s.jsxs("div", {
                className: "max-w-md text-center",
                children: [s.jsxs("h2", {
                    className: "mb-8 font-extrabold text-9xl text-gray-600",
                    children: [s.jsx("span", {
                        className: "sr-only",
                        children: "Error"
                    }), "404"]
                }), s.jsx("p", {
                    className: "text-2xl font-semibold md:text-3xl",
                    children: "Sorry, we couldn't find this page."
                }), s.jsx(H, {
                    rel: "noopener noreferrer",
                    to: "/",
                    className: "px-8 inline-block mt-8 py-3 font-semibold rounded bg-gray-100 border text-sm",
                    children: "Back to homepage"
                })]
            })
        })
    })
})
  , E1 = () => {
    const [e,t] = f.useState(!1)
      , [a,n] = f.useState(0)
      , i = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    ;
    return f.useEffect( () => {
        const r = () => {
            const o = window.scrollY;
            a <= o ? t(!1) : t(o !== 0),
            n(o)
        }
        ;
        return document.addEventListener("scroll", r),
        () => document.removeEventListener("scroll", r)
    }
    , [a]),
    s.jsx(ft, {
        children: e && s.jsx(V.div, {
            initial: {
                opacity: 0,
                y: 30
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -10
            },
            whileTap: {
                y: -5
            },
            className: "fixed z-40 right-8 bottom-[92px] sm:bottom-[100px]",
            children: s.jsx("button", {
                onClick: i,
                className: "size-14 sm:size-16 bg-black/90 text-white rounded-full overflow-hidden grid place-content-center group",
                children: s.jsx(xd, {
                    size: "20",
                    strokeWidth: "2.5",
                    className: "group-hover:scale-125 group-hover:-translate-y-1 transition-all pointer-events-none duration-300 ease-in-out"
                })
            })
        })
    })
}
;
function yc() {
    const e = [{
        title: "Journeys of the Soul",
        description: "Wander far, live fully, and let every journey write a story worth sharing— because the world is too beautiful not to explore.",
        image: "blog_hero_001.webp"
    }, {
        title: "Beyond the Travel Brochure",
        description: "Every journey is a story waiting to be told - step into the unknown, and let the world inspire your next adventure.",
        image: "blog_hero_002.webp"
    }, {
        title: "Beyond the Travel Brochure",
        description: "Welcome to LEGSGO HOLIDAYS Blog, where every journey tells a story!",
        image: "blog_hero_003.webp"
    }]
      , t = Math.floor(Math.random() * e.length)
      , a = e[t];
    return s.jsxs("div", {
        className: "relative",
        children: [s.jsx("img", {
            src: `https://www.legsgo.com/assets/webp/blogs/${a.image}`,
            className: "absolute inset-0 object-cover w-full h-full",
            alt: "College Campus",
            loading: "lazy"
        }), s.jsx("div", {
            className: "relative bg-gray-900 bg-opacity-40",
            children: s.jsx("div", {
                className: "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20",
                children: s.jsx("div", {
                    className: "flex flex-col items-center justify-between xl:flex-row",
                    children: s.jsxs("div", {
                        className: "w-full text-center xl:text-start max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12",
                        children: [s.jsxs("h2", {
                            className: "max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none",
                            children: ["Journeys of the Soul ", s.jsx("br", {}), "  ", s.jsx("span", {
                                className: "text-4xl theme-fill drop-shadow-[-2.5px_0.5px_3.5px_rgba(255,255,255)]",
                                children: "Beyond"
                            }), "  the Travel Brochure"]
                        }), s.jsx("p", {
                            className: "max-w-xl mb-4 text-base text-gray-300 md:text-lg",
                            children: a.description
                        })]
                    })
                })
            })
        })]
    })
}
function D1() {
    return s.jsx("div", {
        className: "bg-white py-6 sm:py-8 lg:py-12",
        children: s.jsx("div", {
            className: "mx-auto max-w-screen-2xl px-4 md:px-8",
            children: s.jsxs("div", {
                className: "flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8",
                children: [s.jsxs("div", {
                    className: "mb-4 sm:mb-8",
                    children: [s.jsx("h2", {
                        className: "text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-3xl",
                        children: "Get the latest updates"
                    }), s.jsx("p", {
                        className: "text-center text-gray-500",
                        children: "Sign up for our newsletter"
                    })]
                }), s.jsxs("form", {
                    className: "mb-3 flex w-full max-w-md gap-2 sm:mb-5",
                    children: [s.jsx("input", {
                        placeholder: "Email",
                        className: "bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    }), s.jsx("button", {
                        className: "inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base",
                        children: "Send"
                    })]
                }), s.jsxs("p", {
                    className: "text-center text-xs text-gray-400",
                    children: ["By signing up to our newsletter you agree to our ", s.jsx("a", {
                        href: "#",
                        className: "underline transition duration-100 hover:text-indigo-500 active:text-indigo-600",
                        children: "Term of Service"
                    }), " and ", s.jsx("a", {
                        href: "#",
                        className: "underline transition duration-100 hover:text-indigo-500 active:text-indigo-600",
                        children: "Privacy Policy"
                    }), "."]
                })]
            })
        })
    })
}
function A1(e) {
    const {title: t, summary: a, slug: n, author: i, createdAt: r, tags: o, featuredImage: l} = e.post;
    return s.jsx("article", {
        className: "mx-auto grid grid-cols-1",
        children: s.jsxs("div", {
            className: "col-span-1 flex flex-col overflow-hidden rounded-lg border bg-white",
            children: [s.jsxs(H, {
                to: `/articles/${n}`,
                className: "group relative block h-48 overflow-hidden bg-gray-100 md:h-64",
                children: [s.jsx("img", {
                    src: l,
                    loading: "lazy",
                    alt: "",
                    className: "absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                }), s.jsx("span", {
                    className: "absolute left-5 top-5 bg-theme rounded bg-green-200 px-3 py-1.5 text-xs uppercase tracking-wider text-white",
                    children: L1(o)
                })]
            }), s.jsxs("div", {
                className: "flex flex-1 flex-col p-2 sm:p-5",
                children: [s.jsx("h2", {
                    className: "mb-2 text-base font-semibold text-gray-800",
                    children: s.jsx("a", {
                        href: "#",
                        className: "transition  duration-100 hover:text-indigo-500 active:text-indigo-600",
                        children: t
                    })
                }), s.jsx("p", {
                    className: "mb-8 text-xs text-gray-500",
                    children: a
                }), s.jsxs("div", {
                    className: "mt-auto flex items-center justify-between",
                    children: [s.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [s.jsx("div", {
                            className: "h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100",
                            children: s.jsx("img", {
                                src: "https://www.legsgo.com/assets/png/author.png",
                                loading: "lazy",
                                alt: "Photo by LegsGo",
                                className: "h-full w-full object-cover object-center"
                            })
                        }), s.jsxs("div", {
                            children: [s.jsx("span", {
                                className: "block text-xs text-indigo-500",
                                children: i
                            }), s.jsx("span", {
                                className: "block text-xs text-gray-400",
                                children: Jr(r)
                            })]
                        })]
                    }), s.jsx("span", {
                        className: "rounded border px-2 py-1 text-xs bg-indigo-400 text-white",
                        children: s.jsx(H, {
                            to: `/articles/${n}`,
                            children: "Read more"
                        })
                    })]
                })]
            })]
        })
    })
}
function L1(e) {
    const t = Math.floor(Math.random() * e.length);
    return e[t]
}
function I1() {
    const [e,t] = f.useState([]);
    return f.useEffect( () => {
        (async () => {
            const i = await (await fetch("https://www.sathuragiriyaan.tech/api/article/")).json();
            i.data.sort( (r, o) => new Date(o.createdAt) - new Date(r.createdAt)),
            t(i.data)
        }
        )()
    }
    , []),
    s.jsx("section", {
        className: "blog-posts",
        children: s.jsx("div", {
            className: "bg-white py-6 sm:py-8 lg:py-12",
            children: s.jsxs("div", {
                className: "mx-auto max-w-screen-2xl px-4 md:px-8",
                children: [s.jsx("div", {
                    className: "mb-10 md:mb-16",
                    children: s.jsx("h2", {
                        className: "mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl",
                        children: "Recent Posts"
                    })
                }), s.jsx("div", {
                    className: "grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8",
                    children: e.map(a => s.jsx(A1, {
                        post: a
                    }, a.slug))
                })]
            })
        })
    })
}
function R1({post: e}) {
    const {title: t, summary: a, slug: n, author: i, createdAt: r, tags: o, likes: l, featuredImage: c} = e;
    return s.jsx("article", {
        children: s.jsxs("div", {
            className: "group relative flex h-96 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg",
            children: [s.jsx(H, {
                to: `/articles/${n}`,
                children: s.jsx("img", {
                    src: c,
                    loading: "lazy",
                    alt: "Photo by Minh Pham",
                    className: "absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                })
            }), s.jsx("div", {
                className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"
            }), s.jsx("span", {
                className: "absolute left-5 top-5 bg-theme rounded bg-green-200 px-3 py-1.5 text-sm uppercase tracking-wider text-white",
                children: B1(o)
            }), s.jsxs("div", {
                className: "relative mt-auto p-4",
                children: [s.jsxs("div", {
                    className: "flex justify-between py-2",
                    children: [s.jsxs("div", {
                        className: "inline-flex justify-around items-center content-center",
                        children: [s.jsx(s0, {
                            className: "inline-block text-gray-200"
                        }), s.jsx("span", {
                            className: "inline-block text-sm mx-2 text-gray-200 py-2",
                            children: i
                        })]
                    }), s.jsx("span", {
                        className: "inline-block text-sm mx-2 text-gray-200 py-2",
                        children: Jr(r)
                    })]
                }), s.jsx("h2", {
                    className: "mb-2 text-sm text-white transition duration-100",
                    children: a
                }), s.jsxs("div", {
                    className: "flex justify-between py-2 flex-row-reverse",
                    children: [s.jsx(H, {
                        to: `/articles/${n}`,
                        className: "align-right font-semibold text-emerald-300",
                        children: "Read more"
                    }), s.jsxs("div", {
                        className: "inline-flex justify-around items-center content-center",
                        children: [s.jsx("svg", {
                            className: "w-6 h-6 text-gray-200",
                            viewBox: "0 0 24 24",
                            children: s.jsx("path", {
                                fill: "red",
                                stroke: "red",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            })
                        }), s.jsx("span", {
                            className: "inline-block text-sm mx-2 text-gray-200 py-2",
                            children: l
                        })]
                    })]
                })]
            })]
        })
    })
}
function B1(e) {
    const t = Math.floor(Math.random() * e.length);
    return e[t]
}
function V1() {
    const [e,t] = f.useState([]);
    return f.useEffect( () => {
        (async () => {
            const i = await (await fetch("https://www.sathuragiriyaan.tech/api/article/featured")).json();
            i.data && i.data.sort( (r, o) => new Date(o.createdAt) - new Date(r.createdAt)),
            t(i.data)
        }
        )()
    }
    , []),
    s.jsx("div", {
        className: "bg-white py-6 sm:py-8 lg:py-12",
        children: s.jsxs("div", {
            className: "mx-auto max-w-screen-2xl px-4 md:px-8",
            children: [s.jsx("div", {
                className: "mb-10 md:mb-16",
                children: s.jsx("h2", {
                    className: "mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl",
                    children: "Featured Posts"
                })
            }), s.jsx("div", {
                className: "grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8",
                children: e && e.map(a => s.jsx(R1, {
                    post: a
                }, a.slug))
            })]
        })
    })
}
const _1 = () => s.jsxs("div", {
    className: "bg-gray-200 min-h-screen mb-14",
    children: [s.jsx(yc, {}), s.jsx(V1, {}), s.jsx(I1, {}), s.jsx(D1, {})]
});
function O1({context: e}) {
    return e && s.jsx("p", {
        className: "mb-4 md:mb-6 text-gray-500 sm:text-lg",
        children: e
    })
}
function z1({context: e, level: t}) {
    return s.jsxs(s.Fragment, {
        children: [e && t === 1 && s.jsx("h1", {
            className: "mb-4 text-center text-3xl font-bold text-gray-800 sm:text-4xl md:mb-6",
            children: e
        }), e && t === 2 && s.jsx("h2", {
            className: "mb-4 text-left text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6",
            children: e
        }), e && t === 3 && s.jsx("h3", {
            className: "mb-4 text-left text-xl font-bold text-gray-800 sm:text-2xl md:mb-6",
            children: e
        }), e && t === 4 && s.jsx("h4", {
            className: "mb-4 text-left text-lg font-bold text-gray-800 sm:text-xl md:mb-6",
            children: e
        }), e && t === 5 && s.jsx("h5", {
            className: "mb-4 text-left text-base font-bold text-gray-800 sm:text-lg md:mb-6",
            children: e
        })]
    })
}
function F1({context: e}) {
    return e && s.jsx("ul", {
        className: "mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8",
        children: e.map( (t, a) => s.jsx("li", {
            children: t
        }, a))
    })
}
function $1({context: e}) {
    return e && s.jsx("blockquote", {
        className: "mb-6 mt-5 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6",
        children: e
    })
}
function H1({context: e}) {
    return e && s.jsx("div", {
        className: "relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8",
        children: s.jsx("img", {
            src: `${e}`,
            loading: "lazy",
            alt: "Blog Image",
            className: "h-96 w-full object-cover object-center"
        })
    })
}
function W1({context: e}) {
    return e && s.jsx("div", {
        dangerouslySetInnerHTML: {
            __html: gd.sanitize(e)
        }
    })
}
function G1() {
    var a;
    const e = f.useContext(za)
      , t = (a = e == null ? void 0 : e.content) == null ? void 0 : a.sort( (n, i) => n.sequence - i.sequence);
    return s.jsx("div", {
        className: "bg-white py-6 sm:py-8 lg:py-12",
        children: s.jsx("div", {
            className: "mx-auto w-[min(1300px,100%-2rem)] px-4 md:px-8",
            children: t && t.map( (n, i) => s.jsxs(E.Fragment, {
                children: [n.type === "html" && s.jsx(W1, {
                    context: n.context
                }), n.type === "title" && s.jsx(z1, {
                    context: n.context,
                    level: n.level
                }), n.type === "list" && s.jsx(F1, {
                    context: n.context
                }), n.type === "quote" && s.jsx($1, {
                    context: n.context
                }), n.type === "image" && s.jsx(H1, {
                    context: n.context
                }), n.type === "text" && s.jsx(O1, {
                    context: n.context
                })]
            }, i))
        })
    })
}
function U1() {
    const e = f.useContext(za)
      , t = () => {
        console.log("I Like this article")
    }
    ;
    return s.jsx("div", {
        className: "bg-white",
        children: s.jsx("footer", {
            className: "w-[min(1300px,100%-2rem)] mx-auto px-4 md:px-8",
            children: s.jsxs("div", {
                className: "flex flex-row items-center justify-between gap-4 border-t border-b py-6",
                children: [s.jsxs("div", {
                    className: "flex items-center gap-4 w-full",
                    children: [s.jsx("svg", {
                        "aria-label": "User Avatar",
                        className: "w-12 h-12 text-gray-400",
                        viewBox: "0 0 512 512",
                        fill: "#7d7d7d",
                        stroke: "#7d7d7d",
                        children: s.jsxs("g", {
                            id: "SVGRepo_bgCarrier",
                            stroke: "none",
                            children: [s.jsx("path", {
                                d: "M456.24,248.986H218.455c-2.076,0-3.76,1.683-3.76,3.76v34.432c0,2.076,1.683,3.76,3.76,3.76h36.83V424.54   c0,5.708,4.628,10.335,10.335,10.335s10.335-4.627,10.335-10.335V290.937h122.784V424.54c0,5.708,4.628,10.335,10.335,10.335   s10.335-4.627,10.335-10.335V290.937h36.831c2.077,0,3.76-1.683,3.76-3.76v-34.432C460,250.669,458.317,248.986,456.24,248.986z"
                            }), s.jsx("circle", {
                                cx: "162.409",
                                cy: "66.472",
                                r: "41.337"
                            }), s.jsx("path", {
                                d: "M192.374,283.471c-2.351-6.596-7.641-11.72-14.31-13.858l-23.479-7.526l4.246-14.82   c-8.42-1.419-15.542-7.096-18.862-14.871l-29.274-68.844l44.617,56.79c3.863,4.919,9.938,7.596,16.212,7.099l38.595-3.071   c-0.266,0.915-0.415,1.88-0.415,2.881c0,5.708,4.628,10.335,10.335,10.335c23.709,0,80.157,0,103.564,0   c5.708,0,10.335-4.627,10.335-10.335s-4.628-10.335-10.335-10.335c-7.408,0-59.525,0-66.657,0c4.298-3.767,6.839-9.43,6.351-15.565   c-0.821-10.31-9.825-18.013-20.155-17.184l-3.291,0.262c-11.32-25.672-8.018-18.184-12.293-27.879   c-2.304-5.224-8.408-7.59-13.626-5.287c-5.223,2.303-7.59,8.404-5.288,13.626c1.449,3.286,5.77,13.086,9.381,21.276l-39.463,3.14   l-38.413-48.893l40.699,30.262l1.28-4.726c4.248-14.826-4.328-30.288-19.153-34.535l-45.678-13.087   c-7.485-2.145-15.526-1.066-22.182,2.974s-11.322,10.677-12.874,18.307l-27.54,135.47c-1.519,7.471,0.606,15.343,5.998,21.081   H49.984L29.848,137.155c-1.04-8.209-8.538-14.023-16.746-12.981c-8.21,1.04-14.021,8.537-12.981,16.746l21.796,172.104   c0.948,7.487,7.317,13.101,14.864,13.101h54.106v61.355l-35.592,29.054c-4.422,3.61-5.08,10.12-1.471,14.542   c3.61,4.422,10.119,5.08,14.543,1.471l22.519-18.383v10.377c0,5.708,4.628,10.335,10.335,10.335s10.335-4.627,10.335-10.335   v-10.377l22.518,18.383c1.92,1.566,4.232,2.329,6.53,2.329c2.997,0,5.969-1.297,8.012-3.8c3.61-4.422,2.952-10.932-1.47-14.542   l-35.59-29.054v-61.355h48.302l33.431,93.815c3.278,9.199,11.934,14.936,21.17,14.936c2.504-0.001,5.05-0.422,7.544-1.311   c11.692-4.166,17.792-17.022,13.625-28.714L192.374,283.471z"
                            })]
                        })
                    }), s.jsxs("div", {
                        children: [s.jsx("h3", {
                            className: "font-semibold text-gray-800",
                            children: (e == null ? void 0 : e.author) || "LegsGo Holidays"
                        }), s.jsx("p", {
                            className: "text-sm text-gray-500",
                            children: new Date(e.createdAt).toLocaleDateString()
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "flex items-center gap-6 w-full justify-around flex-wrap",
                    children: [s.jsxs("button", {
                        onClick: t(),
                        className: "flex items-center gap-2 text-gray-500 hover:text-indigo-500",
                        "aria-label": "Like article",
                        children: [s.jsx("svg", {
                            className: "w-6 h-6",
                            viewBox: "0 0 24 24",
                            children: s.jsx("path", {
                                fill: "none",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            })
                        }), s.jsxs("span", {
                            children: [e.likes || 0, " likes"]
                        })]
                    }), s.jsxs("div", {
                        className: "hidden md:flex items-center gap-2 text-gray-500",
                        children: [s.jsx("svg", {
                            className: "w-6 h-6",
                            viewBox: "0 0 24 24",
                            children: s.jsx("path", {
                                fill: "none",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 4v4m0 8v4"
                            })
                        }), s.jsxs("span", {
                            children: [e.views || 0, " views"]
                        })]
                    }), s.jsxs("div", {
                        className: "flex gap-4",
                        children: [s.jsx("a", {
                            href: `https://x.com/intent/post?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(e.title)}`,
                            className: "text-gray-400 hover:text-slate-900",
                            "aria-label": "Share on Twitter/X",
                            children: s.jsxs("svg", {
                                className: "h-5 w-5",
                                fill: "currentColor",
                                viewBox: "0 0 512 509.64",
                                children: [s.jsx("rect", {
                                    width: "512",
                                    height: "509.64",
                                    rx: "115.61",
                                    ry: "115.61"
                                }), s.jsx("path", {
                                    fill: "#fff",
                                    fillRule: "nonzero",
                                    d: "M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"
                                })]
                            })
                        }), s.jsx("a", {
                            href: `https://www.instagram.com/share?url=${encodeURIComponent(window.location.href)}`,
                            className: "text-gray-400 hover:text-red-500",
                            "aria-label": "Share on Instagram",
                            children: s.jsx("svg", {
                                className: "h-5 w-5",
                                fill: "currentColor",
                                viewBox: "0 0 169.063 169.063",
                                children: s.jsxs("g", {
                                    id: "SVGRepo_bgCarrier",
                                    stroke: "currentColor",
                                    strokeWidth: "1",
                                    fill: "currentColor",
                                    fillRule: "evenodd",
                                    children: [s.jsx("path", {
                                        d: "M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752   c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407   c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752   c17.455,0,31.656,14.201,31.656,31.655V122.407z"
                                    }), s.jsx("path", {
                                        d: "M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561   C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561   c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"
                                    }), s.jsx("path", {
                                        d: "M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78   c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78   C135.661,29.421,132.821,28.251,129.921,28.251z"
                                    })]
                                })
                            })
                        }), s.jsx(Tr, {
                            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                            className: "hover:text-blue-700",
                            icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                            "aria-label": "Share on LinkedIn"
                        }), s.jsx(Tr, {
                            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                            className: "hover:text-blue-700",
                            icon: "M23 0h-22c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h11v-9h-3v-3h3v-1.999c0-3.284 2.005-5.001 4.882-5.001 1.375 0 2.618.104 2.982.151v3.348h-2.043c-1.604 0-1.913.762-1.913 1.879v2.471h3.825l-.5 3h-3.325v9h6c1.104 0 2-.896 2-2v-20c0-1.104-.896-2-2-2z",
                            "aria-label": "Share on Facebook"
                        }), s.jsx("button", {
                            onClick: () => navigator.clipboard.writeText(window.location.href),
                            className: "text-gray-400 hover:text-gray-600",
                            title: "Copy link",
                            "aria-label": "Copy article link",
                            children: s.jsx("svg", {
                                className: "h-5 w-5",
                                viewBox: "0 0 24 24",
                                children: s.jsx("path", {
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                })
                            })
                        })]
                    })]
                })]
            })
        })
    })
}
const Tr = ({href: e, className: t, icon: a, ariaLabel: n}) => s.jsx("a", {
    href: e,
    target: "_blank",
    rel: "noopener noreferrer",
    className: `text-gray-400 ${t}`,
    "aria-label": n,
    children: s.jsx("svg", {
        className: "h-5 w-5",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        children: s.jsx("path", {
            d: a
        })
    })
})
  , q1 = () => {
    const [e,t] = f.useState([])
      , {slug: a} = zt();
    return f.useEffect( () => ((async () => {
        try {
            const i = await fetch(`https://www.sathuragiriyaan.tech/api/article/${a}`);
            if (!i.ok)
                throw new Error("Network response was not ok");
            const r = await i.json();
            t(r.data)
        } catch (i) {
            console.error("Failed to fetch post:", i)
        }
    }
    )(),
    () => {
        t([])
    }
    ), [a]),
    f.useEffect( () => (e != null && e.title && (document.title = `${e.title} | Blog`),
    () => {
        document.title = "Blog"
    }
    ), [e]),
    s.jsxs(za.Provider, {
        value: e,
        children: [s.jsx(yc, {}), s.jsx(G1, {}), s.jsx(U1, {})]
    })
}
  , Y1 = ({id: e, reference: t, category: a}) => {
    const [n,i] = f.useState(null)
      , [r,o] = f.useState({})
      , [l,c] = f.useState({
        name: "",
        email: "",
        mobile: "",
        pax: "",
        message: "",
        coutryCode: "+91"
    })
      , u = () => {
        const x = {};
        return l.name || (x.name = "Full Name is required"),
        l.email || (x.email = "Email is required"),
        l.email && !/\S+@\S+\.\S+/.test(l.email) && (x.email = "Email is invalid"),
        l.mobile || (x.mobile = "Mobile Number is required"),
        l.mobile && l.mobile.length != 10 && (x.phone = "Mobile Number is invalid"),
        l.pax || (x.pax = "Traveller Count is required"),
        l.pax && l.pax <= 0 && (x.travelCount = "Traveller Count is invalid"),
        n || (x.travelDate = "Travel Date is required"),
        x
    }
      , d = x => {
        c(w => ({
            ...w,
            [x.target.name]: x.target.value
        }))
    }
      , {sendEnquiry: m, loading: h} = Vn()
      , g = x => {
        x.preventDefault();
        const w = u();
        if (Object.keys(w).length > 0)
            return o(w);
        o({}),
        t || (t = "unmediated"),
        m({
            ...l,
            travelDate: n,
            travelId: e,
            reference: t,
            category: a
        })
    }
    ;
    return s.jsxs("div", {
        children: [s.jsx("div", {
            className: "p-3",
            children: s.jsx("h2", {
                className: "space-x-2 text-center",
                children: s.jsx("span", {
                    className: "theme-fill font-lg font-semibold",
                    children: "Enquire Now for Best Offer"
                })
            })
        }), s.jsx("div", {
            className: "my-3",
            children: s.jsxs("form", {
                onSubmit: g,
                children: [s.jsxs("div", {
                    className: "space-y-5 text-xs",
                    children: [s.jsx("input", {
                        type: "text",
                        placeholder: "Full Name",
                        name: "name",
                        value: l.name,
                        onChange: x => d(x),
                        className: "w-full p-3 outline-none border-2 border-gray-200 rounded-md focus-within:border-black"
                    }), r.name && s.jsx("p", {
                        className: "text-red-800 text-sm mt-1",
                        children: r.name
                    }), s.jsx("input", {
                        type: "text",
                        placeholder: "Email",
                        name: "email",
                        value: l.email,
                        onChange: x => d(x),
                        className: "w-full p-3 outline-none border-2 border-gray-200 rounded-md focus-within:border-black"
                    }), r.email && s.jsx("p", {
                        className: "text-red-800 text-sm mt-1",
                        children: r.email
                    }), s.jsxs("div", {
                        className: "flex gap-2 items-center",
                        children: [s.jsx("div", {
                            className: "w-20 p-3 outline-none border-2 text-gray-500 border-gray-200 rounded-md focus-within:border-black",
                            children: "+91"
                        }), s.jsx("input", {
                            type: "number",
                            placeholder: "Your Mobile Number",
                            name: "mobile",
                            value: l.mobile,
                            onChange: x => d(x),
                            className: "w-full p-3 outline-none border-2 border-gray-200 rounded-md focus-within:border-black"
                        })]
                    }), r.mobile && s.jsx("p", {
                        className: "text-red-800 text-sm mt-1",
                        children: r.mobile
                    }), s.jsxs("div", {
                        className: "flex gap-2 w-full",
                        children: [s.jsxs("div", {
                            className: "w-full",
                            children: [s.jsx(K1, {
                                date: n,
                                setDate: i
                            }), r.travelDate && s.jsx("p", {
                                className: "text-red-800 text-sm mt-1",
                                children: r.travelDate
                            })]
                        }), s.jsxs("div", {
                            children: [s.jsx("input", {
                                type: "number",
                                placeholder: "Traveller Count",
                                value: l.pax,
                                name: "pax",
                                onChange: x => d(x),
                                className: "w-full p-3 outline-none border-2 border-gray-200 rounded-md focus-within:border-black"
                            }), r.pax && s.jsx("p", {
                                className: "text-red-800 text-sm mt-1",
                                children: r.pax
                            })]
                        })]
                    }), s.jsx("textarea", {
                        value: l.message,
                        name: "message",
                        onChange: x => d(x),
                        placeholder: "Special Instructions",
                        className: "w-full h-24 p-3 outline-none border-2 border-gray-200 rounded-md focus-within:border-black"
                    }), r.message && s.jsx("p", {
                        className: "text-red-800 text-sm mt-1",
                        children: r.message
                    })]
                }), s.jsxs("button", {
                    disabled: h,
                    type: "submit",
                    className: R("text-xs py-3 w-full rounded-md bg-[#051036] text-white block mx-auto mt-2 relative", h && "pointer-events-none"),
                    children: [s.jsx("span", {
                        className: R(h && "invisible"),
                        children: "Send Enquiry"
                    }), h && s.jsx("span", {
                        className: "absolute inset-0 grid place-content-center",
                        children: s.jsx(Ls, {
                            size: "22",
                            color: "white"
                        })
                    })]
                })]
            })
        })]
    })
}
  , K1 = ({date: e, setDate: t, placeholder: a="Travel Date"}) => s.jsxs(Pn, {
    children: [s.jsx(Mn, {
        asChild: !0,
        children: s.jsxs(yt, {
            variant: "outline",
            size: "sm",
            className: R("w-full flex justify-between gap-2 h-11 text-left font-normal text-xs"),
            children: [e ? Ce(e, "PPP") : s.jsx("span", {
                className: "text-gray-400 text-left",
                children: a
            }), s.jsx(Oa, {
                className: "size-4 opacity-50"
            })]
        })
    }), s.jsx(Bs, {
        className: "w-auto p-0",
        align: "start",
        children: s.jsx(_s, {
            mode: "single",
            selected: e,
            onSelect: t,
            disabled: n => n <= new Date
        })
    })]
})
  , X1 = {
    id: "honeymoon",
    title: "Honeymoon Packages",
    contact: "96 00 77 66 88",
    hero: {
        title: "Embark on Your",
        highlight: "Magical Honeymoon",
        subtitle: "Adventure",
        cta: "Book Your Dream Journey",
        backgroundImage: "https://www.legsgo.com/assets/webp/campaign/honeymoon/hero-image.webp"
    },
    packages: [{
        title: "MALDIVES",
        duration: "4 Nights & 5 Days",
        type: "Honey Moon Package",
        details: ["2 Night Beach Villa", "2 Night Water Villa"],
        image: "https://www.legsgo.com/assets/webp/campaign/honeymoon/package-01.webp"
    }, {
        title: "BALI",
        duration: "4 Nights & 5 Days",
        type: "Honey Moon Package",
        details: ["4 Night Private Pool", "Villa"],
        image: "https://www.legsgo.com/assets/webp/campaign/honeymoon/package-02.webp"
    }],
    gallery: {
        title: "Let LEGSGO Craft Your Unforgettable Honeymoon",
        images: ["https://www.legsgo.com/assets/webp/campaign/honeymoon/gallery-01.webp", "https://www.legsgo.com/assets/webp/campaign/honeymoon/gallery-02.webp", "https://www.legsgo.com/assets/webp/campaign/honeymoon/gallery-03.webp", "https://www.legsgo.com/assets/webp/campaign/honeymoon/gallery-04.webp"]
    },
    additionalPromotions: {
        title: "Our Popular Destinations",
        description: "Explore the enchanting beauty of Southeast Asia with three incredible destinations that offer a mix of culture, adventure, and relaxation.",
        images: ["https://www.legsgo.com/assets/webp/campaign/honeymoon/promo-01.webp", "https://www.legsgo.com/assets/webp/campaign/honeymoon/promo-02.webp", "https://www.legsgo.com/assets/webp/campaign/honeymoon/promo-03.webp"]
    },
    footer: "© 2025 LegsGo LLC All rights reserved."
}
  , Z1 = {
    id: "thailand",
    title: "Thailand Packages",
    contact: "96 00 11 66 77",
    hero: {
        title: "Enchanting",
        highlight: "Thailand",
        subtitle: "A Journey through Paradise",
        cta: "Book Your Dream Journey",
        backgroundImage: "https://www.legsgo.com/assets/webp/campaign/thailand/hero-image.webp"
    },
    packages: [{
        title: "Thailand’s Heart & Shores: City & Temple Exploration",
        duration: "3 Nights & 4 Days",
        type: "Tour Package",
        details: ["Coral Island Beach Tour", "City Tour", "Temple Tour"],
        image: "https://www.legsgo.com/assets/webp/campaign/thailand/package-01.webp"
    }, {
        title: "Discover Thailand: From Tigers to Tropical Shores",
        duration: "4 Nights & 5 Days",
        type: "Tour Package",
        details: ["Tiger Topia Sriracha Zoo", "Coral Island Tour", "Safari World & Marine Park", "City Tour"],
        image: "https://www.legsgo.com/assets/webp/campaign/thailand/package-02.webp"
    }],
    gallery: {
        title: "Let LEGSGO Craft Your Unforgettable Trip",
        images: ["https://www.legsgo.com/assets/webp/campaign/thailand/gallery-01.webp", "https://www.legsgo.com/assets/webp/campaign/thailand/gallery-02.webp", "https://www.legsgo.com/assets/webp/campaign/thailand/gallery-03.webp", "https://www.legsgo.com/assets/webp/campaign/thailand/gallery-04.webp"]
    },
    additionalPromotions: {
        title: "Our Popular Destinations",
        description: "Explore the enchanting beauty of Southeast Asia with three incredible destinations that offer a mix of culture, adventure, and relaxation. Andaman welcomes you with its stunning beaches, vibrant cities, and historic places. Vietnam enchants visitors with its breathtaking landscapes, bustling markets, and rich cultural heritage. Meanwhile, Malaysia blends modernity with tradition, showcasing lush rainforests, beautiful islands, and diverse cuisines. Each country promises unique experiences, making them must-visit spots for any traveler.",
        images: ["https://www.legsgo.com/assets/webp/campaign/thailand/promo-01.webp", "https://www.legsgo.com/assets/webp/campaign/thailand/promo-02.webp", "https://www.legsgo.com/assets/webp/campaign/thailand/promo-03.webp"]
    },
    footer: "© 2025 LegsGo LLC All rights reserved."
}
  , J1 = {
    id: "malaysia",
    title: "Malaysia Packages",
    contact: "96 00 11 66 77",
    hero: {
        title: "Capture Your Memorable",
        highlight: "Malaysia",
        subtitle: "Moments",
        cta: "Book Your Dream Journey",
        backgroundImage: "https://www.legsgo.com/assets/webp/campaign/malaysia/hero-image.webp"
    },
    packages: [{
        title: "Malaysia - Skyworld Gateway",
        duration: "2 Nights & 3 Days",
        type: "Tour Package",
        details: ["Skyworld Outdoor Theme Park", "Genting Cable Car Ride", "Batu Cave Tour"],
        image: "https://www.legsgo.com/assets/webp/campaign/malaysia/package-01.webp"
    }, {
        title: "Malaysia - Genting Highlands Gateway",
        duration: "2 Nights & 3 Days",
        type: "Tour Package",
        details: ["Genting Highland Theme Park", "Putra Mosque and Putrajaya Lake", "Batu Cave Tour"],
        image: "https://www.legsgo.com/assets/webp/campaign/malaysia/package-02.webp"
    }],
    gallery: {
        title: "Let LEGSGO Craft Your Unforgettable Trip",
        images: ["https://www.legsgo.com/assets/webp/campaign/malaysia/gallery-01.webp", "https://www.legsgo.com/assets/webp/campaign/malaysia/gallery-02.webp", "https://www.legsgo.com/assets/webp/campaign/malaysia/gallery-03.webp", "https://www.legsgo.com/assets/webp/campaign/malaysia/gallery-04.webp"]
    },
    additionalPromotions: {
        title: "Our Popular Destinations",
        description: "Explore the enchanting beauty of Southeast Asia with three incredible destinations that offer a mix of culture, adventure, and relaxation. Andaman welcomes you with its stunning beaches, vibrant cities, and historic places. Vietnam enchants visitors with its breathtaking landscapes, bustling markets, and rich cultural heritage. Meanwhile, Singapore blends modernity with tradition, showcasing lush rainforests, beautiful islands, and diverse cuisines. Each country promises unique experiences, making them must-visit spots for any traveler.",
        images: ["https://www.legsgo.com/assets/webp/campaign/malaysia/promo-01.webp", "https://www.legsgo.com/assets/webp/campaign/malaysia/promo-02.webp", "https://www.legsgo.com/assets/webp/campaign/malaysia/promo-03.webp"]
    },
    footer: "© 2025 LegsGo LLC All rights reserved."
}
  , Q1 = {
    id: "manali",
    title: "Manali Packages",
    contact: "96 00 77 66 88",
    hero: {
        title: "Escape to",
        highlight: "Enchanting Hills of Manali",
        subtitle: "Where Adventure Meets Tranquility",
        cta: "Book Your Dream Journey",
        backgroundImage: "https://www.legsgo.com/assets/webp/campaign/manali/hero-image.webp"
    },
    packages: [{
        title: "Kullu Manali - Solang Valley",
        duration: "3 Nights & 4 Days",
        type: "Tour Package",
        details: ["Hadimba Devi Temple", "Solang Valley", "Skiing and Paragliding"],
        image: "https://www.legsgo.com/assets/webp/campaign/manali/package-01.webp"
    }, {
        title: "Kullu Manali - Local",
        duration: "4 Nights & 5 Days",
        type: "Tour Package",
        details: ["Manali Local", "Solang Valley", "Devlok Cultural Theme Park", "Zorbing, ATV Rides", "Manikaran Sulphur hot Spring"],
        image: "https://www.legsgo.com/assets/webp/campaign/manali/package-02.webp"
    }],
    gallery: {
        title: "Let LEGSGO Craft Your Unforgettable Trip",
        images: ["https://www.legsgo.com/assets/webp/campaign/manali/gallery-01.webp", "https://www.legsgo.com/assets/webp/campaign/manali/gallery-02.webp", "https://www.legsgo.com/assets/webp/campaign/manali/gallery-03.webp", "https://www.legsgo.com/assets/webp/campaign/manali/gallery-04.webp"]
    },
    additionalPromotions: {
        title: "Our Popular Destinations",
        description: "Explore the enchanting beauty of Southeast Asia with three incredible destinations that offer a mix of culture, adventure, and relaxation. Andaman welcomes you with its stunning beaches, vibrant cities, and historic places. Vietnam enchants visitors with its breathtaking landscapes, bustling markets,and rich cultural heritage. Meanwhile, Singapore blends modernity with tradition, showcasing lush rainforests, beautiful islands, and diverse cuisines. Each country promises unique experiences, making them must-visit spots for any traveler.",
        images: ["https://www.legsgo.com/assets/webp/campaign/manali/promo-01.webp", "https://www.legsgo.com/assets/webp/campaign/manali/promo-02.webp", "https://www.legsgo.com/assets/webp/campaign/manali/promo-03.webp"]
    },
    footer: "© 2025 LegsGo LLC All rights reserved."
}
  , ev = {
    id: "goa",
    title: "Goa Packages",
    contact: "96 00 77 66 88",
    hero: {
        title: "",
        highlight: "",
        subtitle: "",
        cta: "Book Your Dream Journey",
        backgroundImage: "https://www.legsgo.com/assets/webp/campaign/goa/hero-image.webp"
    },
    packages: [{
        title: "Traditional Goa Tour",
        duration: "3 Nights & 4 Days",
        type: "Tour Package",
        details: ["Goa Sightseeing", "St. Augustine Tower & Cathedral Church", "Miramar Beach & Panjim Bazaar."],
        image: "https://www.legsgo.com/assets/webp/campaign/goa/package-01.webp"
    }, {
        title: "Goa & Gokarna Tour",
        duration: "4 Nights & 5 Days",
        type: "Tour Package",
        details: ["South Goa Tour", "Cultural Exploration", "Gokarna Temple Tour", "Yana Caves", "Dona Pula Viewpoint"],
        image: "https://www.legsgo.com/assets/webp/campaign/goa/package-02.webp"
    }],
    gallery: {
        title: "Let LEGSGO Craft Your Unforgettable Trip",
        images: ["https://www.legsgo.com/assets/webp/campaign/goa/gallery-01.webp", "https://www.legsgo.com/assets/webp/campaign/goa/gallery-02.webp", "https://www.legsgo.com/assets/webp/campaign/goa/gallery-03.webp", "https://www.legsgo.com/assets/webp/campaign/goa/gallery-04.webp"]
    },
    additionalPromotions: {
        title: "Our Popular Domestic Destinations",
        description: "Explore the enchanting beauty of South India with three incredible destinations that offer a mix of culture, adventure, and relaxation. Manali welcomes you with its snow-capped mountains, thrilling activities, and peaceful valleys. Munnar enchants visitors with its lush tea gardens, misty hills, and serene atmosphere. Meanwhile, Ooty blends colonial charm with natural beauty, showcasing scenic lakes, botanical gardens, and cool weather. Each destination promises unique experiences, making them must-visit spots for any traveler.",
        images: ["https://www.legsgo.com/assets/webp/campaign/goa/promo-01.webp", "https://www.legsgo.com/assets/webp/campaign/goa/promo-02.webp", "https://www.legsgo.com/assets/webp/campaign/goa/promo-03.webp"]
    },
    footer: "© 2025 LegsGo LLC All rights reserved."
}
  , tv = {
    id: "azerbaijan",
    title: "Azerbaijan Holiday",
    contact: "96 00 77 66 88",
    hero: {
        title: "Begin Your",
        highlight: "Fairytale Holiday in",
        subtitle: "Enchanting Azerbaijan",
        cta: "Plan your Holiday Now",
        backgroundImage: "https://www.legsgo.com/assets/webp/campaign/azerbaijan/hero-image.webp"
    },
    packages: [{
        title: "AZERBAIJAN",
        duration: "3 Nights & 4 Days",
        type: "Caspian Gateway",
        details: ["Baku", "Shahdag"],
        image: "https://www.legsgo.com/assets/webp/campaign/azerbaijan/package-01.webp"
    }, {
        title: "AZERBAIJAN",
        duration: "4 Nights & 5 Days",
        type: "Fireland Journey",
        details: ["Gobustan Mud Volcano", "Yanardagh Burning Mountain"],
        image: "https://www.legsgo.com/assets/webp/campaign/azerbaijan/package-02.webp"
    }],
    gallery: {
        title: "Turn Moments into Memories with LEGSGO Holidays",
        images: ["https://www.legsgo.com/assets/webp/campaign/azerbaijan/gallery-01.webp", "https://www.legsgo.com/assets/webp/campaign/azerbaijan/gallery-02.webp", "https://www.legsgo.com/assets/webp/campaign/azerbaijan/gallery-03.webp", "https://www.legsgo.com/assets/webp/campaign/azerbaijan/gallery-04.webp"]
    },
    additionalPromotions: {
        title: "Our Popular Destinations",
        description: "Three Unforgettable Southeast Asian Escapes – A Perfect Mix of Culture, Adventure, and Pure Bliss",
        images: ["https://www.legsgo.com/assets/webp/campaign/azerbaijan/promo-01.webp", "https://www.legsgo.com/assets/webp/campaign/azerbaijan/promo-02.webp", "https://www.legsgo.com/assets/webp/campaign/azerbaijan/promo-03.webp"]
    },
    footer: "© 2025 LegsGo LLC All rights reserved."
}
  , ts = {
    honeymoon: X1,
    thailand: Z1,
    malaysia: J1,
    manali: Q1,
    goa: ev,
    azerbaijan: tv
}
  , sv = () => {
    const {id: e, reference: t} = zt()
      , a = Array.isArray(ts) ? ts : ts.campaigns || Object.values(ts) || []
      , n = a.find(i => i.id === e) || a[0];
    return t && (n.reference = t),
    n
}
  , Pr = () => {
    const e = sv();
    return s.jsxs("div", {
        className: "relative bg-gradient-to-b from-gray-50 to-white",
        children: [s.jsx(V.div, {
            initial: {
                opacity: 0,
                y: -20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            className: "relative",
            children: s.jsx("div", {
                className: "bg-white/80 backdrop-blur-md shadow-lg",
                children: s.jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between",
                    children: [s.jsxs(V.div, {
                        className: "relative group",
                        whileHover: {
                            scale: 1.02
                        },
                        children: [s.jsx(V.img, {
                            src: "/vite.png",
                            alt: "LEGSGO Holidays",
                            className: "h-[12vh] lg:h-[15vh] object-contain relative z-10"
                        }), s.jsx(V.div, {
                            className: "absolute -inset-2 bg-gradient-to-r from-theme/20 to-theme-2/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                            animate: {
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 0]
                            },
                            transition: {
                                duration: 4,
                                repeat: 1 / 0,
                                repeatType: "reverse"
                            }
                        })]
                    }), s.jsxs(V.div, {
                        className: "text-center flex items-center gap-2 my-4 sm:my-0",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: .2
                        },
                        children: [s.jsx(V.img, {
                            src: "https://www.legsgo.com/assets/svg/telephone.svg",
                            className: "w-8 h-8 inline-block",
                            animate: {
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1.1, 1]
                            },
                            transition: {
                                duration: 1.5,
                                repeat: 1 / 0,
                                repeatDelay: 2
                            }
                        }), s.jsxs("span", {
                            className: "theme-fill pl-2 text-3xl font-large",
                            children: [" ", e.reference ? e.contact : "96 00 77 66 88"]
                        })]
                    }), s.jsxs(V.div, {
                        className: "relative group",
                        whileHover: {
                            scale: 1.02
                        },
                        children: [s.jsx("img", {
                            src: "https://www.legsgo.com/assets/svg/iata.svg",
                            alt: "IATA Certified",
                            className: "h-[15vh] lg:h-[19vh] object-contain relative z-10"
                        }), s.jsx(V.div, {
                            className: "absolute inset-0 z-20",
                            animate: {
                                background: ["linear-gradient(45deg, rgba(148, 33, 255, 0.88) 0%, rgba(243, 28, 135, 0.94) 100%)", "linear-gradient(225deg, rgba(236, 13, 125, 0.92) 0%, rgba(146, 51, 234, 0.94) 100%)"]
                            },
                            transition: {
                                duration: 4,
                                repeat: 1 / 0,
                                repeatType: "reverse"
                            },
                            style: {
                                maskImage: "url('https://www.legsgo.com/assets/svg/iata.svg')",
                                maskSize: "contain",
                                maskPosition: "center",
                                maskRepeat: "no-repeat",
                                WebkitMaskImage: "url('https://www.legsgo.com/assets/svg/iata.svg')",
                                WebkitMaskSize: "contain",
                                WebkitMaskPosition: "center",
                                WebkitMaskRepeat: "no-repeat"
                            }
                        }), s.jsx("div", {
                            className: "absolute -inset-2 bg-gradient-to-r from-theme-2/10 to-theme-4/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        })]
                    })]
                })
            })
        }), s.jsx("div", {
            className: "h-[50vh] sm:h-[90vh] bg-cover bg-center bg-fixed saturate-[175%] contrast-[110%] flex justify-center items-center relative overflow-hidden transition-all duration-700 hover:saturate-[225%] hover:contrast-[125%] hover:scale-105 group",
            style: {
                backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${e.hero.backgroundImage})`,
                boxShadow: "inset 0 0 150px rgba(0,0,0,0.5), 0 0 50px rgba(0,0,0,0.2)"
            },
            children: s.jsxs("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center gap-8 bg-black/5 backdrop-blur-[1px]",
                children: [s.jsx("div", {
                    className: "animate-fade-in-down",
                    children: s.jsxs("h1", {
                        className: "text-4xl sm:text-6xl md:text-6xl text-white font-bold text-center px-4 drop-shadow-2xl",
                        children: [s.jsx("span", {
                            className: "block animate-slide-up",
                            children: e.hero.title
                        }), s.jsx("span", {
                            className: "block mt-2 bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-400 text-transparent bg-clip-text animate-slide-up animation-delay-150 hover:scale-105 transition-transform",
                            children: e.hero.highlight
                        }), s.jsx("span", {
                            className: "block mt-2 animate-slide-up animation-delay-300",
                            children: e.hero.subtitle
                        })]
                    })
                }), s.jsxs("button", {
                    onClick: () => document.getElementById("booking-form").scrollIntoView({
                        behavior: "smooth"
                    }),
                    className: "group relative overflow-hidden bg-white/20 backdrop-blur-md hover:bg-theme/90 text-white px-12 py-5 rounded-full text-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg border border-white/30 animate-bounce",
                    children: [s.jsxs("span", {
                        className: "theme-fill relative z-10 flex items-center gap-3",
                        children: [e.hero.cta, s.jsx("svg", {
                            className: "w-6 h-6 transition-transform group-hover:translate-x-2",
                            fill: "none",
                            stroke: "red",
                            viewBox: "0 0 24 24",
                            children: s.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M17 8l4 4m0 0l-4 4m4-4H3"
                            })
                        })]
                    }), s.jsx("div", {
                        className: "absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-theme via-theme/90 to-theme-2 transition-transform duration-700"
                    })]
                })]
            })
        }), s.jsxs("div", {
            className: "max-w-7xl mx-auto py-8 sm:py-16 px-4",
            children: [s.jsxs("h1", {
                className: "text-3xl sm:text-4xl text-center font-bold mb-8 sm:mb-12 text-gray-800",
                children: [e.title, " with ", " ", s.jsx("span", {
                    className: "theme-fill",
                    children: "LEGSGO Holidays"
                })]
            }), s.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8",
                children: [s.jsx("div", {
                    className: "lg:col-span-2 space-y-6 sm:space-y-8",
                    children: e.packages.map( (t, a) => s.jsx("div", {
                        className: `w-full ${a > 0 ? "border-t-2 sm:border-t-4" : ""} border-black/20`,
                        children: s.jsx("div", {
                            className: "p-4 sm:p-6 bg-gray-50 rounded-xl hover:shadow-xl transition-shadow duration-300",
                            children: s.jsxs("div", {
                                className: `flex flex-col ${a % 2 === 0 ? "md:flex-row-reverse" : " md:flex-row"} gap-6 sm:gap-8 items-center justify-between`,
                                children: [s.jsxs("div", {
                                    className: "text-lg space-y-4 w-full md:w-1/2",
                                    children: [s.jsx("h2", {
                                        className: "text-2xl sm:text-3xl font-bold text-theme-2",
                                        children: t.title
                                    }), s.jsxs("ul", {
                                        className: "space-y-2",
                                        children: [s.jsx("li", {
                                            className: "flex items-center text-black text-xl sm:text-2xl font-semibold",
                                            children: t.duration
                                        }), s.jsx("li", {
                                            className: "flex items-center text-black text-xl sm:text-2xl font-semibold mb-2",
                                            children: t.type
                                        }), t.details.map( (n, i) => s.jsxs("li", {
                                            className: "flex text-base items-center",
                                            children: [s.jsx(F0, {
                                                className: "mr-2 text-xl"
                                            }), n]
                                        }, i))]
                                    })]
                                }), s.jsx("div", {
                                    className: "relative group overflow-hidden rounded-lg",
                                    children: s.jsx(V.div, {
                                        initial: {
                                            scale: 1
                                        },
                                        whileHover: {
                                            scale: 1.1
                                        },
                                        transition: {
                                            duration: .6,
                                            ease: "easeOut"
                                        },
                                        className: "relative",
                                        children: s.jsx("img", {
                                            src: t.image,
                                            loading: "lazy",
                                            alt: t.title,
                                            className: "w-full md:w-[500px] h-[200px] sm:h-[300px] object-cover rounded-lg"
                                        })
                                    })
                                })]
                            })
                        }, a)
                    }, a))
                }), s.jsx("div", {
                    className: "bg-white p-4 sm:p-6 rounded-2xl shadow-lg self-start sticky top-4",
                    id: "booking-form",
                    children: s.jsx(Y1, {
                        id: e.id,
                        reference: e.reference,
                        category: "Campaign"
                    })
                })]
            })]
        }), s.jsx("div", {
            className: "bg-white py-16",
            children: s.jsxs("div", {
                className: "max-w-7xl mx-auto px-4",
                children: [s.jsx("h2", {
                    className: "text-3xl text-center font-bold mb-12 theme-fill",
                    children: e.gallery.title
                }), s.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                    children: e.gallery.images.map( (t, a) => s.jsx("img", {
                        src: t,
                        loading: "lazy",
                        alt: "Honeymoon",
                        className: "rounded-lg object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                    }, a))
                })]
            })
        }), s.jsxs("div", {
            className: "max-w-7xl mx-auto py-16 bg-theme px-4 rounded-2xl my-8 shadow-2xl",
            children: [s.jsx("h2", {
                className: "text-3xl text-center font-bold mb-6 text-white",
                children: e.additionalPromotions.title
            }), s.jsx("p", {
                className: "text-lg text-justify text-white max-w-4xl mx-auto mb-12 leading-loose",
                children: e.additionalPromotions.description
            }), s.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: e.additionalPromotions.images.map( (t, a) => s.jsx("img", {
                    src: t,
                    loading: "lazy",
                    alt: e.additionalPromotions.title,
                    className: "rounded-lg object-contain w-full h-[350px] hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl"
                }, a))
            })]
        }), s.jsx("div", {
            children: s.jsx("div", {
                className: "mt-8 items-center justify-between py-4 border-t border-black/20",
                children: s.jsx("p", {
                    className: "mt-4 mb-4 text-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400",
                    children: e.footer
                })
            })
        })]
    })
}
  , Mr = () => {
    const {reference: e} = zt() || "Unmediated"
      , t = ["Tourist / Visitor Visa", "Transit Visa", "Student Visa", "Dubai Golden Visa", "Business Visa"]
      , a = ["UAE", "Australia", "Austria", "Azerbaijan", "Bahrain", "Bangladesh", "Belgium", "Botswana", "Brazil", "Cambodia", "Canada", "China", "Czech Republic", "Denmark", "Egypt", "Estonia", "Ethiopia", "Finland", "France", "Gabon", "Germany", "Greece", "Hongkong", "Hungary", "Iceland", "Indonesia", "Ireland", "Japan", "Kenya", "Kyrgystan", "Laos", "Lebanon", "Lithuania", "Luxembourg", "Madagascar", "Malaysia", "Morocco", "Myanmar", "Netherlands", "New Zealand", "Norway", "Oman", "Philippines", "Poland", "Portugal", "Qatar", "Russia", "Singapore", "Slovenia", "South Africa", "South Korea", "Spain", "Srilanka", "Sweden", "Switzerland", "Taiwan", "Tanzania", "Thailand", "Tunisia", "Turkey", "Uganda", "United Kingdom", "United States of America", "Uzbekistan", "Vietnam", "Zambia", "Zimbabwe"]
      , [n,i] = f.useState({
        name: "",
        phone: "",
        email: "",
        country: "",
        visaType: "",
        reference: e || "Unmediated"
    })
      , [r,o] = f.useState({
        hero: !1,
        process: !1,
        benefits: !1,
        assistance: !1,
        countries: !1,
        footer: !1
    })
      , [l,c] = f.useState({})
      , u = () => {
        const h = {};
        return n.name || (h.name = "Name is required"),
        n.phone || (h.phone = "Phone is required"),
        n.email || (h.email = "Email is required"),
        n.phone.match(/^\d{10}$/) || (h.phone = "Enter a valid phone number"),
        n.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || (h.email = "Enter a valid email address"),
        n.country || (h.country = "Country is required"),
        n.visaType || (h.visaType = "Visa Type is required"),
        h
    }
    ;
    f.useEffect( () => {
        o({
            hero: !0,
            process: !1,
            benefits: !1,
            assistance: !1,
            countries: !1,
            footer: !1
        });
        const h = () => {
            const g = window.scrollY
              , x = window.innerHeight;
            document.querySelectorAll("section").forEach(w => {
                const b = w.offsetTop;
                if (g + x * .8 > b) {
                    const y = w.id;
                    y && o(p => ({
                        ...p,
                        [y]: !0
                    }))
                }
            }
            )
        }
        ;
        return window.addEventListener("scroll", h),
        () => window.removeEventListener("scroll", h)
    }
    , []);
    const d = h => {
        const {name: g, value: x} = h.target;
        i(w => ({
            ...w,
            [g]: x
        })),
        x.trim() !== "" && c(w => ({
            ...w,
            [g]: void 0
        }))
    }
      , m = async h => {
        h.preventDefault();
        const g = u();
        if (Object.keys(g).length === 0)
            try {
                await Ve.post("https://www.sathuragiriyaan.tech/api/travels/submit-visa-inquiry", {
                    ...n
                }).then(x => {
                    console.log(x),
                    ne.success("Visa Inquiry Submitted Successfully")
                }
                ).catch(x => {
                    console.log(x),
                    ne.error(x.response.data.error || x.response.data.message)
                }
                ),
                i({
                    name: "",
                    phone: "",
                    email: "",
                    country: "",
                    visaType: "",
                    reference: e
                }),
                c({}),
                o({
                    hero: !1,
                    process: !1,
                    benefits: !1,
                    assistance: !1,
                    countries: !1,
                    footer: !1
                })
            } catch (x) {
                x.response ? ne.error(x.response.data.error || x.response.data.message) : ne.error(x.message)
            }
        else
            c(g)
    }
    ;
    return s.jsxs(s.Fragment, {
        children: [s.jsx("style", {
            children: `
                    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');
                    
                    @keyframes fadeIn {
                        0% { opacity: 0; transform: translateY(20px); }
                        100% { opacity: 1; transform: translateY(0); }
                    }
                    
                    @keyframes scaleIn {
                        0% { transform: scale(0.9); opacity: 0; }
                        100% { transform: scale(1); opacity: 1; }
                    }
                    
                    @keyframes slideInLeft {
                        0% { transform: translateX(-30px); opacity: 0; }
                        100% { transform: translateX(0); opacity: 1; }
                    }
                    
                    @keyframes slideInRight {
                        0% { transform: translateX(30px); opacity: 0; }
                        100% { transform: translateX(0); opacity: 1; }
                    }
                    
                    @keyframes pulse {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                        100% { transform: scale(1); }
                    }
                    
                    .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
                    .animate-scaleIn { animation: scaleIn 0.8s ease-out forwards; }
                    .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
                    .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
                    .animate-pulse-slow { animation: pulse 3s infinite; }

                    /* Styling for modern select dropdowns */
                    select {
                        appearance: none;
                        background-repeat: no-repeat;
                        background-position: right 0.7rem center;
                        background-size: 1.2em;
                        padding-right: 2.5rem;
                    }

                    /* Fix overflow issues */
                    @media (max-width: 360px) {
                        .phone-input-container {
                            flex-wrap: nowrap;
                        }
                        .phone-input-container select {
                            width: 60px;
                            font-size: 0.75rem;
                        }
                        .phone-input-container input {
                            font-size: 0.9rem;
                            padding-left: 0.5rem;
                            padding-right: 0.5rem;
                        }
                    }
                `
        }), s.jsxs("div", {
            className: "font-[Poppins] text-gray-800",
            children: [s.jsx("header", {
                className: "bg-white/90 backdrop-blur-sm shadow-md py-4 sticky top-0 z-50",
                children: s.jsxs("div", {
                    className: "container mx-auto px-4",
                    children: [s.jsxs("div", {
                        className: "hidden md:flex justify-between items-center",
                        children: [s.jsx("div", {
                            className: "h-16 md:h-20 flex items-center",
                            children: s.jsx("img", {
                                src: "/vite.png",
                                alt: "Legsgo Holidays Logo",
                                className: "h-full object-contain transition-transform duration-300 hover:scale-105"
                            })
                        }), s.jsx("div", {
                            className: "flex items-center",
                            children: s.jsx("div", {
                                className: "flex items-center gap-2"
                            })
                        }), s.jsx("div", {
                            className: "h-16 md:h-20 flex items-center",
                            children: s.jsx("img", {
                                src: "https://www.legsgo.com/assets/svg/iata.svg",
                                alt: "IATA Certified",
                                className: "h-full object-contain transition-transform duration-300 hover:scale-105"
                            })
                        })]
                    }), s.jsxs("div", {
                        className: "md:hidden",
                        children: [s.jsxs("div", {
                            className: "flex justify-between items-center mb-2",
                            children: [s.jsx("div", {
                                className: "h-14 flex items-center",
                                children: s.jsx("img", {
                                    src: "/vite.png",
                                    alt: "Legsgo Holidays Logo",
                                    className: "h-full object-contain transition-transform active:scale-95"
                                })
                            }), s.jsx("div", {
                                className: "h-14 flex items-center",
                                children: s.jsx("img", {
                                    src: "https://www.legsgo.com/assets/svg/iata.svg",
                                    alt: "IATA Certified",
                                    className: "h-full object-contain transition-transform active:scale-95"
                                })
                            })]
                        }), s.jsx("div", {
                            className: "flex justify-center items-center",
                            children: s.jsx("div", {
                                className: "flex items-center gap-2"
                            })
                        })]
                    })]
                })
            }), s.jsxs("section", {
                id: "hero",
                className: "relative",
                children: [s.jsx("div", {
                    className: "w-full",
                    children: s.jsx("img", {
                        src: "https://www.legsgo.com/assets/webp/campaign/visa/visa-hero-section.webp",
                        alt: "Visa Application",
                        className: "w-full h-auto"
                    })
                }), s.jsx("div", {
                    className: "hidden md:block absolute inset-0",
                    children: s.jsx("div", {
                        className: "container mx-auto h-full px-4",
                        children: s.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full items-center",
                            children: [s.jsxs("div", {
                                className: "flex flex-col justify-between h-[460px] opacity-0 animate-slideInLeft",
                                style: {
                                    animationDelay: "0.2s",
                                    animationFillMode: "forwards"
                                },
                                children: [s.jsxs("div", {
                                    className: "text-black",
                                    style: {
                                        textShadow: "0 2px 4px rgba(0,0,0,0.5)"
                                    },
                                    children: [s.jsx("h1", {
                                        className: "font-[Poppins] text-3xl sm:text-4xl md:text-5xl lg:text-[4.375rem] font-bold mb-3",
                                        children: "Start Your Visa Process Today"
                                    }), s.jsx("p", {
                                        className: "font-[Poppins] text-base sm:text-lg md:text-xl lg:text-[1.25rem] mb-4",
                                        children: "Travel Without Limits"
                                    })]
                                }), s.jsxs("div", {
                                    className: "flex items-center animate-pulse-slow",
                                    children: [s.jsx("img", {
                                        src: "https://www.legsgo.com/assets/fav-icons/favicon.svg",
                                        alt: "Legsgo Holidays",
                                        className: "h-16 md:h-20 mr-4"
                                    }), s.jsx("img", {
                                        src: "https://www.legsgo.com/assets/webp/campaign/visa/visa-experts.png",
                                        alt: "Legsgo Holidays",
                                        className: "h-16"
                                    })]
                                })]
                            }), s.jsx("div", {
                                className: "opacity-0 animate-slideInRight",
                                style: {
                                    animationDelay: "0.5s",
                                    animationFillMode: "forwards"
                                },
                                children: s.jsxs("div", {
                                    className: "bg-white rounded-lg shadow-lg p-6 max-w-lg w-full mx-auto transition-transform hover:shadow-xl",
                                    children: [s.jsx("h3", {
                                        className: "text-center text-purple-800 font-[Raleway] text-lg sm:text-xl md:text-[1.438rem] font-semibold",
                                        children: "Get in Touch with Our"
                                    }), s.jsx("h4", {
                                        className: "text-center text-purple-800 font-[Raleway] text-xl sm:text-2xl md:text-[1.75rem] font-bold mb-4",
                                        children: "Visa Expert"
                                    }), s.jsxs("form", {
                                        onSubmit: m,
                                        children: [s.jsxs("div", {
                                            className: "mb-4",
                                            children: [s.jsx("input", {
                                                type: "text",
                                                name: "name",
                                                placeholder: "Name",
                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 hover:border-purple-400",
                                                value: n.name,
                                                onChange: d
                                            }), l.name && s.jsx("p", {
                                                className: "text-red-500 text-sm mt-1",
                                                children: l.name
                                            })]
                                        }), s.jsxs("div", {
                                            className: "flex w-full mb-4",
                                            children: [s.jsx("select", {
                                                className: "w-14 px-0 py-3 border border-gray-300 rounded-l-lg disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 shadow-sm text-center text-sm shrink-0",
                                                disabled: !0,
                                                children: s.jsx("option", {
                                                    value: "+91",
                                                    defaultValue: !0,
                                                    children: "+91"
                                                })
                                            }), s.jsx("input", {
                                                type: "tel",
                                                id: "phone",
                                                name: "phone",
                                                placeholder: "Phone Number",
                                                className: "w-full px-2 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 shadow-sm",
                                                pattern: "[0-9]{10}",
                                                maxLength: 10,
                                                value: n.phone,
                                                onChange: d
                                            })]
                                        }), l.phone && s.jsx("p", {
                                            className: "text-red-500 text-sm mt-1 mb-4",
                                            children: l.phone
                                        }), s.jsxs("div", {
                                            className: "mb-4",
                                            children: [s.jsx("input", {
                                                type: "email",
                                                name: "email",
                                                placeholder: "Email",
                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 hover:border-purple-400",
                                                value: n.email,
                                                onChange: d
                                            }), l.email && s.jsx("p", {
                                                className: "text-red-500 text-sm mt-1",
                                                children: l.email
                                            })]
                                        }), s.jsxs("div", {
                                            className: "mb-4",
                                            children: [s.jsxs("select", {
                                                name: "country",
                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 hover:border-purple-400 bg-white shadow-sm",
                                                value: n.country,
                                                onChange: d,
                                                children: [s.jsx("option", {
                                                    value: "",
                                                    children: "Select Country"
                                                }), a.map( (h, g) => s.jsx("option", {
                                                    value: h,
                                                    children: h
                                                }, g))]
                                            }), l.country && s.jsx("p", {
                                                className: "text-red-500 text-sm mt-1",
                                                children: l.country
                                            })]
                                        }), s.jsxs("div", {
                                            className: "mb-4",
                                            children: [s.jsxs("select", {
                                                name: "visaType",
                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 hover:border-purple-400 bg-white shadow-sm",
                                                value: n.visaType,
                                                onChange: d,
                                                children: [s.jsx("option", {
                                                    value: "",
                                                    children: "Select Visa Type"
                                                }), t.map( (h, g) => s.jsx("option", {
                                                    value: h,
                                                    children: h
                                                }, g))]
                                            }), l.visaType && s.jsx("p", {
                                                className: "text-red-500 text-sm mt-1",
                                                children: l.visaType
                                            })]
                                        }), s.jsx("button", {
                                            type: "submit",
                                            className: "w-full bg-purple-800 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 hover:scale-[1.02] active:scale-[0.98] transform shadow-md hover:shadow-lg",
                                            children: "Submit"
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                }), s.jsxs("div", {
                    className: "md:hidden relative z-10 -mt-16 px-4 pb-12",
                    children: [s.jsxs("div", {
                        className: "text-center flex flex-col items-center justify-center opacity-0 animate-fadeIn",
                        style: {
                            textShadow: "0 4px 4px rgba(253, 252, 253, 0.96)",
                            animationDelay: "0.3s",
                            animationFillMode: "forwards",
                            marginTop: "-120px"
                        },
                        children: [s.jsx("h1", {
                            className: "font-[Poppins] text-2xl sm:text-3xl font-bold mb-2",
                            children: "Start Your Visa Process Today"
                        }), s.jsx("p", {
                            className: "font-[Poppins] text-base sm:text-lg mb-4",
                            children: "Travel Without Limits"
                        }), s.jsx("div", {
                            className: "flex justify-center mt-2 mb-5 animate-pulse-slow",
                            children: s.jsx("img", {
                                src: "https://www.legsgo.com/assets/fav-icons/favicon.svg",
                                alt: "Legsgo Holidays",
                                className: "h-14",
                                loading: "lazy"
                            })
                        })]
                    }), s.jsxs("div", {
                        className: "bg-white rounded-xl shadow-xl p-6 opacity-0 animate-scaleIn",
                        style: {
                            animationDelay: "0.6s",
                            animationFillMode: "forwards"
                        },
                        children: [s.jsx("div", {
                            className: "bg-purple-800 rounded-full p-3 w-20 h-20 flex items-center justify-center mb-4 mx-auto transform hover:scale-105 transition-transform duration-300",
                            children: s.jsx("img", {
                                src: "https://www.legsgo.com/assets/webp/campaign/visa/visa-experts.png",
                                alt: "Legsgo Holidays",
                                className: "h-12 w-12 object-contain"
                            })
                        }), s.jsx("h3", {
                            className: "text-center text-purple-800 font-[Raleway] text-lg sm:text-xl font-semibold",
                            children: "Get in Touch with Our"
                        }), s.jsx("h4", {
                            className: "text-center text-purple-800 font-[Raleway] text-xl sm:text-2xl font-bold mb-5",
                            children: "Visa Expert"
                        }), s.jsxs("form", {
                            onSubmit: m,
                            children: [s.jsxs("div", {
                                className: "mb-4",
                                children: [s.jsx("input", {
                                    type: "text",
                                    name: "name",
                                    placeholder: "Name",
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 shadow-sm",
                                    value: n.name,
                                    onChange: d
                                }), l.name && s.jsx("p", {
                                    className: "text-red-500 text-sm mt-1",
                                    children: l.name
                                })]
                            }), s.jsxs("div", {
                                className: "flex w-full mb-4",
                                children: [s.jsx("select", {
                                    className: "w-14 px-0 py-3 border border-gray-300 rounded-l-lg disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 shadow-sm text-center text-sm shrink-0",
                                    disabled: !0,
                                    children: s.jsx("option", {
                                        value: "+91",
                                        defaultValue: !0,
                                        children: "+91"
                                    })
                                }), s.jsx("input", {
                                    type: "tel",
                                    id: "phone",
                                    name: "phone",
                                    placeholder: "Phone Number",
                                    className: "w-full px-2 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 shadow-sm",
                                    pattern: "[0-9]{10}",
                                    maxLength: 10,
                                    value: n.phone,
                                    onChange: d
                                })]
                            }), l.phone && s.jsx("p", {
                                className: "text-red-500 text-sm -mt-3 mb-4",
                                children: l.phone
                            }), s.jsxs("div", {
                                className: "mb-4",
                                children: [s.jsx("input", {
                                    type: "email",
                                    name: "email",
                                    placeholder: "Email",
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 shadow-sm",
                                    value: n.email,
                                    onChange: d
                                }), l.email && s.jsx("p", {
                                    className: "text-red-500 text-sm mt-1",
                                    children: l.email
                                })]
                            }), s.jsxs("div", {
                                className: "mb-4",
                                children: [s.jsxs("select", {
                                    name: "country",
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 shadow-sm bg-white",
                                    value: n.country,
                                    onChange: d,
                                    children: [s.jsx("option", {
                                        value: "",
                                        children: "Select Country"
                                    }), a.map( (h, g) => s.jsx("option", {
                                        value: h,
                                        children: h
                                    }, g))]
                                }), l.country && s.jsx("p", {
                                    className: "text-red-500 text-sm mt-1",
                                    children: l.country
                                })]
                            }), s.jsxs("div", {
                                className: "mb-5",
                                children: [s.jsxs("select", {
                                    name: "visaType",
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 shadow-sm bg-white",
                                    value: n.visaType,
                                    onChange: d,
                                    children: [s.jsx("option", {
                                        value: "",
                                        children: "Select Visa Type"
                                    }), t.map( (h, g) => s.jsx("option", {
                                        value: h,
                                        children: h
                                    }, g))]
                                }), l.visaType && s.jsx("p", {
                                    className: "text-red-500 text-sm mt-1",
                                    children: l.visaType
                                })]
                            }), s.jsx("button", {
                                type: "submit",
                                className: "w-full bg-purple-800 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 active:scale-95 transform shadow-md hover:shadow-lg",
                                children: "Submit"
                            })]
                        })]
                    })]
                })]
            }), s.jsx("section", {
                id: "process",
                className: "py-12 md:py-16 bg-white",
                children: s.jsxs("div", {
                    className: "container mx-auto px-4",
                    children: [s.jsxs("div", {
                        className: "text-center mb-10 opacity-0 animate-fadeIn",
                        style: {
                            animationPlayState: r.process ? "running" : "paused",
                            animationFillMode: "forwards"
                        },
                        children: [s.jsx("h2", {
                            className: "font-[Raleway] text-2xl md:text-3xl lg:text-[2.75rem] font-semibold text-purple-800 mb-3",
                            children: "Visa Process With Legsgo Holidays"
                        }), s.jsx("p", {
                            className: "font-[Raleway] text-base md:text-[1.125rem] text-gray-600 max-w-2xl mx-auto",
                            children: "From application to approval. We prioritize your convenience through our efficiency."
                        })]
                    }), s.jsx("div", {
                        className: "grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center",
                        children: [1, 2, 3, 4, 5].map( (h, g) => s.jsxs("div", {
                            className: `text-center mb-6 opacity-0 animate-scaleIn ${g === 4 ? "col-span-2 md:col-span-1" : ""}`,
                            style: {
                                animationDelay: `${.2 + g * .2}s`,
                                animationPlayState: r.process ? "running" : "paused",
                                animationFillMode: "forwards"
                            },
                            children: [s.jsx("div", {
                                className: "p-2 bg-purple-50 rounded-full mb-3 mx-auto w-20 h-20 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300",
                                children: s.jsx("img", {
                                    src: `https://www.legsgo.com/assets/webp/campaign/visa/visa-process-0${h}.png`,
                                    alt: `Process Step ${h}`,
                                    className: "w-12 h-12 md:w-14 md:h-14 object-contain transition-transform hover:scale-110 duration-300"
                                })
                            }), s.jsxs("p", {
                                className: "font-[Raleway] text-sm font-semibold text-purple-800 leading-tight",
                                children: [h === 1 && s.jsxs(s.Fragment, {
                                    children: [" Contact", s.jsx("br", {}), "Legsgo Holidays"]
                                }), h === 2 && s.jsxs(s.Fragment, {
                                    children: [" Consultation with our", s.jsx("br", {}), "Visa Expert"]
                                }), h === 3 && s.jsxs(s.Fragment, {
                                    children: [" Submit Required", s.jsx("br", {}), "Documents"]
                                }), h === 4 && s.jsxs(s.Fragment, {
                                    children: [" Application", s.jsx("br", {}), "Submission"]
                                }), h === 5 && s.jsxs(s.Fragment, {
                                    children: [" Visa", s.jsx("br", {}), "Approval"]
                                })]
                            })]
                        }, g))
                    })]
                })
            }), s.jsx("section", {
                id: "benefits",
                className: "py-12 md:py-16 bg-gray-50",
                children: s.jsxs("div", {
                    className: "container mx-auto px-4",
                    children: [s.jsx("div", {
                        className: "text-center mb-10 opacity-0 animate-fadeIn",
                        style: {
                            animationPlayState: r.benefits ? "running" : "paused",
                            animationFillMode: "forwards"
                        },
                        children: s.jsx("h2", {
                            className: "font-[Raleway] text-xl sm:text-2xl md:text-[2rem] font-semibold text-purple-800",
                            children: "Simplifying The Visa Application For You"
                        })
                    }), s.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: [1, 2, 3, 4].map( (h, g) => s.jsxs("div", {
                            className: "bg-gradient-to-r from-purple-50 to-purple-300 rounded-xl shadow-md p-6 h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg opacity-0 animate-fadeIn",
                            style: {
                                animationDelay: `${.2 + g * .15}s`,
                                animationPlayState: r.benefits ? "running" : "paused",
                                animationFillMode: "forwards"
                            },
                            children: [s.jsxs("div", {
                                className: "flex items-center mb-4",
                                children: [s.jsx("div", {
                                    className: "bg-white p-2 rounded-full shadow-sm mr-3",
                                    children: s.jsx("img", {
                                        src: `https://www.legsgo.com/assets/webp/campaign/visa/visa-application-0${h}.png`,
                                        alt: Er(h),
                                        className: "w-10 h-10 transition-transform duration-300 hover:scale-110"
                                    })
                                }), s.jsx("h5", {
                                    className: "font-[Raleway] text-base md:text-lg text-purple-800 font-semibold",
                                    children: Er(h)
                                })]
                            }), s.jsx("p", {
                                className: "font-[Raleway] text-sm md:text-base text-gray-600",
                                children: "Legsgo Holidays ensures faster handling of the entire proceedings, reducing delays and unnecessary hurdles in between."
                            })]
                        }, g))
                    })]
                })
            }), s.jsx("section", {
                id: "assistance",
                className: "py-12 bg-white",
                children: s.jsxs("div", {
                    className: "container mx-auto px-4",
                    children: [s.jsx("div", {
                        className: "text-center mb-10 opacity-0 animate-fadeIn",
                        style: {
                            animationPlayState: r.assistance ? "running" : "paused",
                            animationFillMode: "forwards"
                        },
                        children: s.jsx("h2", {
                            className: "font-[Raleway] text-2xl md:text-3xl lg:text-[2.75rem] font-semibold text-purple-800",
                            children: "Visa Assistance For All Your Needs in India"
                        })
                    }), s.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center",
                        children: [1, 2, 3, 4].map( (h, g) => s.jsx("div", {
                            className: "bg-purple-50 border border-purple-100 rounded-lg p-6 h-full min-h-[320px] max-w-[340px] w-full transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl opacity-0 animate-scaleIn",
                            style: {
                                backgroundImage: 'url("https://www.legsgo.com/assets/webp/campaign/visa/visa-assistant-bg.png")',
                                backgroundSize: "100% 100%",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                animationDelay: `${.2 + g * .15}s`,
                                animationPlayState: r.assistance ? "running" : "paused",
                                animationFillMode: "forwards"
                            },
                            children: s.jsxs("div", {
                                className: "flex flex-col items-center text-center h-full justify-center lg:justify-between py-4",
                                children: [s.jsx("img", {
                                    src: `https://www.legsgo.com/assets/webp/campaign/visa/visa-assistant-0${h}.png`,
                                    alt: Dr(h),
                                    className: "w-20 h-20 mb-5 transition-transform hover:scale-110 duration-300"
                                }), s.jsx("h5", {
                                    className: "font-[Raleway] text-sm sm:text-base text-white font-semibold mb-4",
                                    children: Dr(h)
                                }), s.jsx("p", {
                                    className: "font-[Raleway] text-sm md:text-base text-white",
                                    children: "Our visa consultants in India will guide you on the specific procedures based on your travel duration, eligibility and country of visit."
                                })]
                            })
                        }, g))
                    })]
                })
            }), s.jsx("section", {
                id: "countries",
                className: "py-12 bg-gray-50",
                children: s.jsxs("div", {
                    className: "container mx-auto px-4",
                    children: [s.jsx("div", {
                        className: "text-center mb-10 opacity-0 animate-fadeIn",
                        style: {
                            animationPlayState: r.countries ? "running" : "paused",
                            animationFillMode: "forwards"
                        },
                        children: s.jsx("h2", {
                            className: "font-[Raleway] text-xl sm:text-2xl md:text-[2rem] font-semibold text-purple-800",
                            children: "Our whole range of reliable Visa Services"
                        })
                    }), s.jsx("div", {
                        className: "text-center opacity-0 animate-scaleIn",
                        style: {
                            animationPlayState: r.countries ? "running" : "paused",
                            animationFillMode: "forwards",
                            animationDelay: "0.3s"
                        },
                        children: s.jsx("img", {
                            src: "https://www.legsgo.com/assets/webp/campaign/visa/visa-countries.webp",
                            alt: "Countries we provide visa services for",
                            className: "max-w-full h-auto mx-auto transition-all duration-500 hover:shadow-2xl rounded-lg"
                        })
                    })]
                })
            }), s.jsx("footer", {
                id: "footer",
                className: "bg-purple-900 text-white py-12",
                children: s.jsxs("div", {
                    className: "container mx-auto px-4",
                    children: [s.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                        children: [s.jsxs("div", {
                            className: "text-center flex flex-col items-center animate-slideInLeft",
                            children: [s.jsx("div", {
                                className: "p-2 rounded-full mb-4"
                            }), s.jsx("h5", {
                                className: "font-[Raleway] text-base sm:text-lg md:text-[1.125rem] font-semibold mb-4",
                                children: "Corporate Office"
                            }), s.jsxs("div", {
                                className: "flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-purple-200",
                                children: [s.jsx("p", {
                                    className: "font-[Raleway] text-sm md:text-[0.875rem] mb-1 opacity-90",
                                    children: "Akshaya Shanti 2nd Floor,"
                                }), s.jsx("p", {
                                    className: "font-[Raleway] text-sm md:text-[0.875rem] mb-1 opacity-90",
                                    children: "No.20, Near 200ft Road & 6-8-41"
                                }), s.jsx("p", {
                                    className: "font-[Raleway] text-sm md:text-[0.875rem] mb-1 opacity-90",
                                    children: "Old Door No.6-3-8-4-6, Anna Salai,"
                                }), s.jsx("p", {
                                    className: "font-[Raleway] text-sm md:text-[0.875rem] opacity-90",
                                    children: "Chennai - 600002"
                                })]
                            })]
                        }), s.jsxs("div", {
                            className: "text-center flex flex-col items-center animate-fadeIn",
                            children: [s.jsx("div", {
                                className: "p-2 rounded-full mb-4"
                            }), s.jsx("h5", {
                                className: "font-[Raleway] text-base sm:text-lg md:text-[1.125rem] font-semibold mb-4",
                                children: "Trichy Branch Office"
                            }), s.jsxs("div", {
                                className: "flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-purple-200",
                                children: [s.jsx("p", {
                                    className: "font-[Raleway] text-sm md:text-[0.875rem] mb-1 opacity-90",
                                    children: "No.1 2nd Floor,"
                                }), s.jsx("p", {
                                    className: "font-[Raleway] text-sm md:text-[0.875rem] mb-1 opacity-90",
                                    children: "Pudukottai Main Road"
                                }), s.jsx("p", {
                                    className: "font-[Raleway] text-sm md:text-[0.875rem] mb-1 opacity-90",
                                    children: "TVS Toll Gate"
                                }), s.jsx("p", {
                                    className: "font-[Raleway] text-sm md:text-[0.875rem] opacity-90",
                                    children: "Trichy - 620020"
                                })]
                            })]
                        }), s.jsxs("div", {
                            className: "text-center flex flex-col items-center animate-slideInRight",
                            children: [s.jsx("div", {
                                className: "p-2 rounded-full mb-4",
                                children: s.jsx("img", {
                                    src: "https://www.legsgo.com/assets/webp/campaign/visa/visa-experts.png",
                                    alt: "Contact Expert",
                                    className: "w-14 h-14 animate-pulse-slow"
                                })
                            }), s.jsxs("h5", {
                                className: "font-[Raleway] text-lg sm:text-xl md:text-[1.375rem] font-semibold mb-5",
                                children: ["Get In Touch With Our", s.jsx("br", {}), "Visa Expert Directly"]
                            }), s.jsxs("div", {
                                className: "flex items-center justify-center transition-transform duration-300 hover:scale-110",
                                children: [s.jsx("img", {
                                    src: "https://www.legsgo.com/assets/webp/campaign/visa/visa-telephone.png",
                                    alt: "Telephone",
                                    className: "w-8 h-8 mr-3 animate-pulse-slow"
                                }), s.jsx("h6", {
                                    className: "text-xl md:text-[1.5rem] font-semibold",
                                    children: "+91 90908 34567"
                                })]
                            })]
                        })]
                    }), s.jsx("div", {
                        className: "mt-12 text-center animate-fadeIn",
                        children: s.jsxs("p", {
                            className: "text-sm opacity-75",
                            children: ["© ", new Date().getFullYear(), " Legsgo Holidays. All Rights Reserved."]
                        })
                    })]
                })
            })]
        })]
    })
}
;
function Er(e) {
    return {
        1: "Time Saving",
        2: "Global Expertise",
        3: "24/7 Support",
        4: "Personalized Support"
    }[e]
}
function Dr(e) {
    return {
        1: "Visa Consultation",
        2: "Visa Renewal",
        3: "E-Visa Application",
        4: "Urgent Visa Processing"
    }[e]
}
const av = () => {
    const {data: e, loading: t, error: a} = xe(d => d.allDestinations)
      , {data: n, loading: i, error: r} = xe(d => d.allPackages)
      , l = La().pathname.includes("campaign");
    if (t || i)
        return s.jsx(ie, {
            message: "Fetching Travel Details..."
        });
    if (a || r)
        return s.jsx(ie, {
            message: "Coming soon!",
            forError: !0
        });
    const c = d => {
        d.preventDefault(),
        ne.error("Right click is disabled on this page")
    }
      , u = [...new Set([...e.map(d => d.location), ...n.map(d => d.country)])];
    return s.jsxs("div", {
        onContextMenu: c,
        children: [!l && s.jsx(C1, {}), s.jsxs(Uc, {
            children: [s.jsx(X, {
                path: "/",
                element: s.jsx(c0, {})
            }), s.jsx(X, {
                path: "/explore-destinations",
                element: s.jsx(Fg, {})
            }), s.jsx(X, {
                path: "/attractions",
                element: s.jsx(I0, {})
            }), s.jsx(X, {
                path: "/tours/:slug/:id",
                element: s.jsx(l1, {})
            }), s.jsx(X, {
                path: "/attractions/:slug",
                element: s.jsx(Bg, {})
            }), u.map( (d, m) => s.jsx(X, {
                path: `/${us(d)}`,
                element: s.jsx(Hg, {
                    destination: d
                })
            }, m)), s.jsx(X, {
                path: "/business-setup",
                element: s.jsx(D0, {})
            }), s.jsx(X, {
                path: "/abroad-education",
                element: s.jsx(v1, {})
            }), s.jsx(X, {
                path: "/blog",
                element: s.jsx(_1, {})
            }), s.jsx(X, {
                path: "/articles/:slug",
                element: s.jsx(q1, {})
            }), s.jsx(X, {
                path: "/about",
                element: s.jsx(O0, {})
            }), s.jsx(X, {
                path: "/contact",
                element: s.jsx(Y0, {})
            }), s.jsx(X, {
                path: "/privacy-policy",
                element: s.jsx($g, {})
            }), s.jsx(X, {
                path: "/campaign/visa",
                element: s.jsx(Mr, {})
            }), s.jsx(X, {
                path: "/campaign/visa/:reference",
                element: s.jsx(Mr, {})
            }), s.jsx(X, {
                path: "/campaign/:id",
                element: s.jsx(Pr, {})
            }), s.jsx(X, {
                path: "/campaign/:id/:reference",
                element: s.jsx(Pr, {})
            }), s.jsx(X, {
                path: "/terms-and-conditions",
                element: s.jsx(K0, {})
            }), s.jsx(X, {
                path: "*",
                element: s.jsx(M1, {})
            })]
        }), !l && s.jsx(P1, {}), s.jsx(E1, {}), s.jsx(vd, {
            richColors: !0,
            position: "top-right"
        })]
    })
}
;
Id.createRoot(document.getElementById("root")).render(s.jsx(Gc, {
    store: $d,
    children: s.jsx(E.StrictMode, {
        children: s.jsxs(qc, {
            children: [s.jsx(zd, {}), s.jsx(Rd, {}), s.jsx(av, {})]
        })
    })
}));
