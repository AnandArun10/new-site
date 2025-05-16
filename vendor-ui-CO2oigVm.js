import {r as oe} from "./vendor-ui-CO2oigVm.js";
function Ft(n) {
    return Object.prototype.toString.call(n) === "[object Object]"
}
function ot(n) {
    return Ft(n) || Array.isArray(n)
}
function Bt() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}
function Ye(n, e) {
    const t = Object.keys(n)
      , i = Object.keys(e);
    if (t.length !== i.length)
        return !1;
    const r = JSON.stringify(Object.keys(n.breakpoints || {}))
      , s = JSON.stringify(Object.keys(e.breakpoints || {}));
    return r !== s ? !1 : t.every(a => {
        const l = n[a]
          , o = e[a];
        return typeof l == "function" ? `${l}` == `${o}` : !ot(l) || !ot(o) ? l === o : Ye(l, o)
    }
    )
}
function at(n) {
    return n.concat().sort( (e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
}
function Nt(n, e) {
    if (n.length !== e.length)
        return !1;
    const t = at(n)
      , i = at(e);
    return t.every( (r, s) => {
        const a = i[s];
        return Ye(r, a)
    }
    )
}
function Xe(n) {
    return typeof n == "number"
}
function $e(n) {
    return typeof n == "string"
}
function Le(n) {
    return typeof n == "boolean"
}
function lt(n) {
    return Object.prototype.toString.call(n) === "[object Object]"
}
function G(n) {
    return Math.abs(n)
}
function Ue(n) {
    return Math.sign(n)
}
function ge(n, e) {
    return G(n - e)
}
function _t(n, e) {
    if (n === 0 || e === 0 || G(n) <= G(e))
        return 0;
    const t = ge(G(n), G(e));
    return G(t / n)
}
function ve(n) {
    return we(n).map(Number)
}
function X(n) {
    return n[Te(n)]
}
function Te(n) {
    return Math.max(0, n.length - 1)
}
function Ke(n, e) {
    return e === Te(n)
}
function dt(n, e=0) {
    return Array.from(Array(n), (t, i) => e + i)
}
function we(n) {
    return Object.keys(n)
}
function wt(n, e) {
    return [n, e].reduce( (t, i) => (we(i).forEach(r => {
        const s = t[r]
          , a = i[r]
          , l = lt(s) && lt(a);
        t[r] = l ? wt(s, a) : a
    }
    ),
    t), {})
}
function Re(n, e) {
    return typeof e.MouseEvent < "u" && n instanceof e.MouseEvent
}
function Ht(n, e) {
    const t = {
        start: i,
        center: r,
        end: s
    };
    function i() {
        return 0
    }
    function r(o) {
        return s(o) / 2
    }
    function s(o) {
        return e - o
    }
    function a(o, d) {
        return $e(n) ? t[n](o) : n(e, o, d)
    }
    return {
        measure: a
    }
}
function Se() {
    let n = [];
    function e(r, s, a, l={
        passive: !0
    }) {
        let o;
        if ("addEventListener"in r)
            r.addEventListener(s, a, l),
            o = () => r.removeEventListener(s, a, l);
        else {
            const d = r;
            d.addListener(a),
            o = () => d.removeListener(a)
        }
        return n.push(o),
        i
    }
    function t() {
        n = n.filter(r => r())
    }
    const i = {
        add: e,
        clear: t
    };
    return i
}
function $t(n, e, t, i) {
    const r = Se()
      , s = 1e3 / 60;
    let a = null
      , l = 0
      , o = 0;
    function d() {
        r.add(n, "visibilitychange", () => {
            n.hidden && m()
        }
        )
    }
    function u() {
        p(),
        r.clear()
    }
    function c(w) {
        if (!o)
            return;
        a || (a = w);
        const h = w - a;
        for (a = w,
        l += h; l >= s; )
            t(s),
            l -= s;
        const S = l / s;
        i(S),
        o && e.requestAnimationFrame(c)
    }
    function f() {
        o || (o = e.requestAnimationFrame(c))
    }
    function p() {
        e.cancelAnimationFrame(o),
        a = null,
        l = 0,
        o = 0
    }
    function m() {
        a = null,
        l = 0
    }
    return {
        init: d,
        destroy: u,
        start: f,
        stop: p,
        update: () => t(s),
        render: i
    }
}
function Rt(n, e) {
    const t = e === "rtl"
      , i = n === "y"
      , r = i ? "y" : "x"
      , s = i ? "x" : "y"
      , a = !i && t ? -1 : 1
      , l = u()
      , o = c();
    function d(m) {
        const {height: g, width: w} = m;
        return i ? g : w
    }
    function u() {
        return i ? "top" : t ? "right" : "left"
    }
    function c() {
        return i ? "bottom" : t ? "left" : "right"
    }
    function f(m) {
        return m * a
    }
    return {
        scroll: r,
        cross: s,
        startEdge: l,
        endEdge: o,
        measureSize: d,
        direction: f
    }
}
function de(n=0, e=0) {
    const t = G(n - e);
    function i(d) {
        return d < n
    }
    function r(d) {
        return d > e
    }
    function s(d) {
        return i(d) || r(d)
    }
    function a(d) {
        return s(d) ? i(d) ? n : e : d
    }
    function l(d) {
        return t ? d - t * Math.ceil((d - e) / t) : d
    }
    return {
        length: t,
        max: e,
        min: n,
        constrain: a,
        reachedAny: s,
        reachedMax: r,
        reachedMin: i,
        removeOffset: l
    }
}
function St(n, e, t) {
    const {constrain: i} = de(0, n)
      , r = n + 1;
    let s = a(e);
    function a(f) {
        return t ? G((r + f) % r) : i(f)
    }
    function l() {
        return s
    }
    function o(f) {
        return s = a(f),
        c
    }
    function d(f) {
        return u().set(l() + f)
    }
    function u() {
        return St(n, l(), t)
    }
    const c = {
        get: l,
        set: o,
        add: d,
        clone: u
    };
    return c
}
function jt(n, e, t, i, r, s, a, l, o, d, u, c, f, p, m, g, w, h, S) {
    const {cross: v, direction: b} = n
      , T = ["INPUT", "SELECT", "TEXTAREA"]
      , E = {
        passive: !1
    }
      , L = Se()
      , M = Se()
      , O = de(50, 225).constrain(p.measure(20))
      , y = {
        mouse: 300,
        touch: 400
    }
      , x = {
        mouse: 500,
        touch: 600
    }
      , C = m ? 43 : 25;
    let P = !1
      , A = 0
      , D = 0
      , F = !1
      , U = !1
      , R = !1
      , j = !1;
    function te(I) {
        if (!S)
            return;
        function z(N) {
            (Le(S) || S(I, N)) && pe(N)
        }
        const V = e;
        L.add(V, "dragstart", N => N.preventDefault(), E).add(V, "touchmove", () => {}
        , E).add(V, "touchend", () => {}
        ).add(V, "touchstart", z).add(V, "mousedown", z).add(V, "touchcancel", B).add(V, "contextmenu", B).add(V, "click", J, !0)
    }
    function W() {
        L.clear(),
        M.clear()
    }
    function ne() {
        const I = j ? t : e;
        M.add(I, "touchmove", _, E).add(I, "touchend", B).add(I, "mousemove", _, E).add(I, "mouseup", B)
    }
    function ce(I) {
        const z = I.nodeName || "";
        return T.includes(z)
    }
    function Q() {
        return (m ? x : y)[j ? "mouse" : "touch"]
    }
    function fe(I, z) {
        const V = c.add(Ue(I) * -1)
          , N = u.byDistance(I, !m).distance;
        return m || G(I) < O ? N : w && z ? N * .5 : u.byIndex(V.get(), 0).distance
    }
    function pe(I) {
        const z = Re(I, i);
        j = z,
        R = m && z && !I.buttons && P,
        P = ge(r.get(), a.get()) >= 2,
        !(z && I.button !== 0) && (ce(I.target) || (F = !0,
        s.pointerDown(I),
        d.useFriction(0).useDuration(0),
        r.set(a),
        ne(),
        A = s.readPoint(I),
        D = s.readPoint(I, v),
        f.emit("pointerDown")))
    }
    function _(I) {
        if (!Re(I, i) && I.touches.length >= 2)
            return B(I);
        const V = s.readPoint(I)
          , N = s.readPoint(I, v)
          , K = ge(V, A)
          , Z = ge(N, D);
        if (!U && !j && (!I.cancelable || (U = K > Z,
        !U)))
            return B(I);
        const ie = s.pointerMove(I);
        K > g && (R = !0),
        d.useFriction(.3).useDuration(.75),
        l.start(),
        r.add(b(ie)),
        I.preventDefault()
    }
    function B(I) {
        const V = u.byDistance(0, !1).index !== c.get()
          , N = s.pointerUp(I) * Q()
          , K = fe(b(N), V)
          , Z = _t(N, K)
          , ie = C - 10 * Z
          , se = h + Z / 50;
        U = !1,
        F = !1,
        M.clear(),
        d.useDuration(ie).useFriction(se),
        o.distance(K, !m),
        j = !1,
        f.emit("pointerUp")
    }
    function J(I) {
        R && (I.stopPropagation(),
        I.preventDefault(),
        R = !1)
    }
    function q() {
        return F
    }
    return {
        init: te,
        destroy: W,
        pointerDown: q
    }
}
function Wt(n, e) {
    let i, r;
    function s(c) {
        return c.timeStamp
    }
    function a(c, f) {
        const m = `client${(f || n.scroll) === "x" ? "X" : "Y"}`;
        return (Re(c, e) ? c : c.touches[0])[m]
    }
    function l(c) {
        return i = c,
        r = c,
        a(c)
    }
    function o(c) {
        const f = a(c) - a(r)
          , p = s(c) - s(i) > 170;
        return r = c,
        p && (i = c),
        f
    }
    function d(c) {
        if (!i || !r)
            return 0;
        const f = a(r) - a(i)
          , p = s(c) - s(i)
          , m = s(c) - s(r) > 170
          , g = f / p;
        return p && !m && G(g) > .1 ? g : 0
    }
    return {
        pointerDown: l,
        pointerMove: o,
        pointerUp: d,
        readPoint: a
    }
}
function qt() {
    function n(t) {
        const {offsetTop: i, offsetLeft: r, offsetWidth: s, offsetHeight: a} = t;
        return {
            top: i,
            right: r + s,
            bottom: i + a,
            left: r,
            width: s,
            height: a
        }
    }
    return {
        measure: n
    }
}
function Yt(n) {
    function e(i) {
        return n * (i / 100)
    }
    return {
        measure: e
    }
}
function Xt(n, e, t, i, r, s, a) {
    const l = [n].concat(i);
    let o, d, u = [], c = !1;
    function f(w) {
        return r.measureSize(a.measure(w))
    }
    function p(w) {
        if (!s)
            return;
        d = f(n),
        u = i.map(f);
        function h(S) {
            for (const v of S) {
                if (c)
                    return;
                const b = v.target === n
                  , T = i.indexOf(v.target)
                  , E = b ? d : u[T]
                  , L = f(b ? n : i[T]);
                if (G(L - E) >= .5) {
                    w.reInit(),
                    e.emit("resize");
                    break
                }
            }
        }
        o = new ResizeObserver(S => {
            (Le(s) || s(w, S)) && h(S)
        }
        ),
        t.requestAnimationFrame( () => {
            l.forEach(S => o.observe(S))
        }
        )
    }
    function m() {
        c = !0,
        o && o.disconnect()
    }
    return {
        init: p,
        destroy: m
    }
}
function Ut(n, e, t, i, r, s) {
    let a = 0
      , l = 0
      , o = r
      , d = s
      , u = n.get()
      , c = 0;
    function f(E) {
        const L = E / 1e3
          , M = o * L
          , O = i.get() - n.get()
          , y = !o;
        let x = 0;
        return y ? (a = 0,
        t.set(i),
        n.set(i),
        x = O) : (t.set(n),
        a += O / M,
        a *= d,
        u += a,
        n.add(a * L),
        x = u - c),
        l = Ue(x),
        c = u,
        T
    }
    function p() {
        const E = i.get() - e.get();
        return G(E) < .001
    }
    function m() {
        return o
    }
    function g() {
        return l
    }
    function w() {
        return a
    }
    function h() {
        return v(r)
    }
    function S() {
        return b(s)
    }
    function v(E) {
        return o = E,
        T
    }
    function b(E) {
        return d = E,
        T
    }
    const T = {
        direction: g,
        duration: m,
        velocity: w,
        seek: f,
        settled: p,
        useBaseFriction: S,
        useBaseDuration: h,
        useFriction: b,
        useDuration: v
    };
    return T
}
function Kt(n, e, t, i, r) {
    const s = r.measure(10)
      , a = r.measure(50)
      , l = de(.1, .99);
    let o = !1;
    function d() {
        return !(o || !n.reachedAny(t.get()) || !n.reachedAny(e.get()))
    }
    function u(p) {
        if (!d())
            return;
        const m = n.reachedMin(e.get()) ? "min" : "max"
          , g = G(n[m] - e.get())
          , w = t.get() - e.get()
          , h = l.constrain(g / a);
        t.subtract(w * h),
        !p && G(w) < s && (t.set(n.constrain(t.get())),
        i.useDuration(25).useBaseFriction())
    }
    function c(p) {
        o = !p
    }
    return {
        shouldConstrain: d,
        constrain: u,
        toggleActive: c
    }
}
function Qt(n, e, t, i, r) {
    const s = de(-e + n, 0)
      , a = c()
      , l = u()
      , o = f();
    function d(m, g) {
        return ge(m, g) < 1
    }
    function u() {
        const m = a[0]
          , g = X(a)
          , w = a.lastIndexOf(m)
          , h = a.indexOf(g) + 1;
        return de(w, h)
    }
    function c() {
        return t.map( (m, g) => {
            const {min: w, max: h} = s
              , S = s.constrain(m)
              , v = !g
              , b = Ke(t, g);
            return v ? h : b || d(w, S) ? w : d(h, S) ? h : S
        }
        ).map(m => parseFloat(m.toFixed(3)))
    }
    function f() {
        if (e <= n + r)
            return [s.max];
        if (i === "keepSnaps")
            return a;
        const {min: m, max: g} = l;
        return a.slice(m, g)
    }
    return {
        snapsContained: o,
        scrollContainLimit: l
    }
}
function Jt(n, e, t) {
    const i = e[0]
      , r = t ? i - n : X(e);
    return {
        limit: de(r, i)
    }
}
function Zt(n, e, t, i) {
    const s = e.min + .1
      , a = e.max + .1
      , {reachedMin: l, reachedMax: o} = de(s, a);
    function d(f) {
        return f === 1 ? o(t.get()) : f === -1 ? l(t.get()) : !1
    }
    function u(f) {
        if (!d(f))
            return;
        const p = n * (f * -1);
        i.forEach(m => m.add(p))
    }
    return {
        loop: u
    }
}
function en(n) {
    const {max: e, length: t} = n;
    function i(s) {
        const a = s - e;
        return t ? a / -t : 0
    }
    return {
        get: i
    }
}
function tn(n, e, t, i, r) {
    const {startEdge: s, endEdge: a} = n
      , {groupSlides: l} = r
      , o = c().map(e.measure)
      , d = f()
      , u = p();
    function c() {
        return l(i).map(g => X(g)[a] - g[0][s]).map(G)
    }
    function f() {
        return i.map(g => t[s] - g[s]).map(g => -G(g))
    }
    function p() {
        return l(d).map(g => g[0]).map( (g, w) => g + o[w])
    }
    return {
        snaps: d,
        snapsAligned: u
    }
}
function nn(n, e, t, i, r, s) {
    const {groupSlides: a} = r
      , {min: l, max: o} = i
      , d = u();
    function u() {
        const f = a(s)
          , p = !n || e === "keepSnaps";
        return t.length === 1 ? [s] : p ? f : f.slice(l, o).map( (m, g, w) => {
            const h = !g
              , S = Ke(w, g);
            if (h) {
                const v = X(w[0]) + 1;
                return dt(v)
            }
            if (S) {
                const v = Te(s) - X(w)[0] + 1;
                return dt(v, X(w)[0])
            }
            return m
        }
        )
    }
    return {
        slideRegistry: d
    }
}
function sn(n, e, t, i, r) {
    const {reachedAny: s, removeOffset: a, constrain: l} = i;
    function o(m) {
        return m.concat().sort( (g, w) => G(g) - G(w))[0]
    }
    function d(m) {
        const g = n ? a(m) : l(m)
          , w = e.map( (S, v) => ({
            diff: u(S - g, 0),
            index: v
        })).sort( (S, v) => G(S.diff) - G(v.diff))
          , {index: h} = w[0];
        return {
            index: h,
            distance: g
        }
    }
    function u(m, g) {
        const w = [m, m + t, m - t];
        if (!n)
            return m;
        if (!g)
            return o(w);
        const h = w.filter(S => Ue(S) === g);
        return h.length ? o(h) : X(w) - t
    }
    function c(m, g) {
        const w = e[m] - r.get()
          , h = u(w, g);
        return {
            index: m,
            distance: h
        }
    }
    function f(m, g) {
        const w = r.get() + m
          , {index: h, distance: S} = d(w)
          , v = !n && s(w);
        if (!g || v)
            return {
                index: h,
                distance: m
            };
        const b = e[h] - S
          , T = m + u(b, 0);
        return {
            index: h,
            distance: T
        }
    }
    return {
        byDistance: f,
        byIndex: c,
        shortcut: u
    }
}
function rn(n, e, t, i, r, s, a) {
    function l(c) {
        const f = c.distance
          , p = c.index !== e.get();
        s.add(f),
        f && (i.duration() ? n.start() : (n.update(),
        n.render(1),
        n.update())),
        p && (t.set(e.get()),
        e.set(c.index),
        a.emit("select"))
    }
    function o(c, f) {
        const p = r.byDistance(c, f);
        l(p)
    }
    function d(c, f) {
        const p = e.clone().set(c)
          , m = r.byIndex(p.get(), f);
        l(m)
    }
    return {
        distance: o,
        index: d
    }
}
function on(n, e, t, i, r, s, a, l) {
    const o = {
        passive: !0,
        capture: !0
    };
    let d = 0;
    function u(p) {
        if (!l)
            return;
        function m(g) {
            if (new Date().getTime() - d > 10)
                return;
            a.emit("slideFocusStart"),
            n.scrollLeft = 0;
            const S = t.findIndex(v => v.includes(g));
            Xe(S) && (r.useDuration(0),
            i.index(S, 0),
            a.emit("slideFocus"))
        }
        s.add(document, "keydown", c, !1),
        e.forEach( (g, w) => {
            s.add(g, "focus", h => {
                (Le(l) || l(p, h)) && m(w)
            }
            , o)
        }
        )
    }
    function c(p) {
        p.code === "Tab" && (d = new Date().getTime())
    }
    return {
        init: u
    }
}
function he(n) {
    let e = n;
    function t() {
        return e
    }
    function i(o) {
        e = a(o)
    }
    function r(o) {
        e += a(o)
    }
    function s(o) {
        e -= a(o)
    }
    function a(o) {
        return Xe(o) ? o : o.get()
    }
    return {
        get: t,
        set: i,
        add: r,
        subtract: s
    }
}
function Tt(n, e) {
    const t = n.scroll === "x" ? s : a
      , i = e.style;
    let r = !1;
    function s(c) {
        return `translate3d(${c}px,0px,0px)`
    }
    function a(c) {
        return `translate3d(0px,${c}px,0px)`
    }
    function l(c) {
        r || (i.transform = t(n.direction(c)))
    }
    function o(c) {
        r = !c
    }
    function d() {
        r || (i.transform = "",
        e.getAttribute("style") || e.removeAttribute("style"))
    }
    return {
        clear: d,
        to: l,
        toggleActive: o
    }
}
function an(n, e, t, i, r, s, a, l, o) {
    const u = ve(r)
      , c = ve(r).reverse()
      , f = h().concat(S());
    function p(L, M) {
        return L.reduce( (O, y) => O - r[y], M)
    }
    function m(L, M) {
        return L.reduce( (O, y) => p(O, M) > 0 ? O.concat([y]) : O, [])
    }
    function g(L) {
        return s.map( (M, O) => ({
            start: M - i[O] + .5 + L,
            end: M + e - .5 + L
        }))
    }
    function w(L, M, O) {
        const y = g(M);
        return L.map(x => {
            const C = O ? 0 : -t
              , P = O ? t : 0
              , A = O ? "end" : "start"
              , D = y[x][A];
            return {
                index: x,
                loopPoint: D,
                slideLocation: he(-1),
                translate: Tt(n, o[x]),
                target: () => l.get() > D ? C : P
            }
        }
        )
    }
    function h() {
        const L = a[0]
          , M = m(c, L);
        return w(M, t, !1)
    }
    function S() {
        const L = e - a[0] - 1
          , M = m(u, L);
        return w(M, -t, !0)
    }
    function v() {
        return f.every( ({index: L}) => {
            const M = u.filter(O => O !== L);
            return p(M, e) <= .1
        }
        )
    }
    function b() {
        f.forEach(L => {
            const {target: M, translate: O, slideLocation: y} = L
              , x = M();
            x !== y.get() && (O.to(x),
            y.set(x))
        }
        )
    }
    function T() {
        f.forEach(L => L.translate.clear())
    }
    return {
        canLoop: v,
        clear: T,
        loop: b,
        loopPoints: f
    }
}
function ln(n, e, t) {
    let i, r = !1;
    function s(o) {
        if (!t)
            return;
        function d(u) {
            for (const c of u)
                if (c.type === "childList") {
                    o.reInit(),
                    e.emit("slidesChanged");
                    break
                }
        }
        i = new MutationObserver(u => {
            r || (Le(t) || t(o, u)) && d(u)
        }
        ),
        i.observe(n, {
            childList: !0
        })
    }
    function a() {
        i && i.disconnect(),
        r = !0
    }
    return {
        init: s,
        destroy: a
    }
}
function dn(n, e, t, i) {
    const r = {};
    let s = null, a = null, l, o = !1;
    function d() {
        l = new IntersectionObserver(m => {
            o || (m.forEach(g => {
                const w = e.indexOf(g.target);
                r[w] = g
            }
            ),
            s = null,
            a = null,
            t.emit("slidesInView"))
        }
        ,{
            root: n.parentElement,
            threshold: i
        }),
        e.forEach(m => l.observe(m))
    }
    function u() {
        l && l.disconnect(),
        o = !0
    }
    function c(m) {
        return we(r).reduce( (g, w) => {
            const h = parseInt(w)
              , {isIntersecting: S} = r[h];
            return (m && S || !m && !S) && g.push(h),
            g
        }
        , [])
    }
    function f(m=!0) {
        if (m && s)
            return s;
        if (!m && a)
            return a;
        const g = c(m);
        return m && (s = g),
        m || (a = g),
        g
    }
    return {
        init: d,
        destroy: u,
        get: f
    }
}
function cn(n, e, t, i, r, s) {
    const {measureSize: a, startEdge: l, endEdge: o} = n
      , d = t[0] && r
      , u = m()
      , c = g()
      , f = t.map(a)
      , p = w();
    function m() {
        if (!d)
            return 0;
        const S = t[0];
        return G(e[l] - S[l])
    }
    function g() {
        if (!d)
            return 0;
        const S = s.getComputedStyle(X(i));
        return parseFloat(S.getPropertyValue(`margin-${o}`))
    }
    function w() {
        return t.map( (S, v, b) => {
            const T = !v
              , E = Ke(b, v);
            return T ? f[v] + u : E ? f[v] + c : b[v + 1][l] - S[l]
        }
        ).map(G)
    }
    return {
        slideSizes: f,
        slideSizesWithGaps: p,
        startGap: u,
        endGap: c
    }
}
function un(n, e, t, i, r, s, a, l, o) {
    const {startEdge: d, endEdge: u, direction: c} = n
      , f = Xe(t);
    function p(h, S) {
        return ve(h).filter(v => v % S === 0).map(v => h.slice(v, v + S))
    }
    function m(h) {
        return h.length ? ve(h).reduce( (S, v, b) => {
            const T = X(S) || 0
              , E = T === 0
              , L = v === Te(h)
              , M = r[d] - s[T][d]
              , O = r[d] - s[v][u]
              , y = !i && E ? c(a) : 0
              , x = !i && L ? c(l) : 0
              , C = G(O - x - (M + y));
            return b && C > e + o && S.push(v),
            L && S.push(h.length),
            S
        }
        , []).map( (S, v, b) => {
            const T = Math.max(b[v - 1] || 0);
            return h.slice(T, S)
        }
        ) : []
    }
    function g(h) {
        return f ? p(h, t) : m(h)
    }
    return {
        groupSlides: g
    }
}
function fn(n, e, t, i, r, s, a) {
    const {align: l, axis: o, direction: d, startIndex: u, loop: c, duration: f, dragFree: p, dragThreshold: m, inViewThreshold: g, slidesToScroll: w, skipSnaps: h, containScroll: S, watchResize: v, watchSlides: b, watchDrag: T, watchFocus: E} = s
      , L = 2
      , M = qt()
      , O = M.measure(e)
      , y = t.map(M.measure)
      , x = Rt(o, d)
      , C = x.measureSize(O)
      , P = Yt(C)
      , A = Ht(l, C)
      , D = !c && !!S
      , F = c || !!S
      , {slideSizes: U, slideSizesWithGaps: R, startGap: j, endGap: te} = cn(x, O, y, t, F, r)
      , W = un(x, C, w, c, O, y, j, te, L)
      , {snaps: ne, snapsAligned: ce} = tn(x, A, O, y, W)
      , Q = -X(ne) + X(R)
      , {snapsContained: fe, scrollContainLimit: pe} = Qt(C, Q, ce, S, L)
      , _ = D ? fe : ce
      , {limit: B} = Jt(Q, _, c)
      , J = St(Te(_), u, c)
      , q = J.clone()
      , k = ve(t)
      , I = ({dragHandler: re, scrollBody: ze, scrollBounds: De, options: {loop: ye}}, ke) => {
        ye || De.constrain(re.pointerDown()),
        ze.seek(ke)
    }
      , z = ({scrollBody: re, translate: ze, location: De, offsetLocation: ye, scrollLooper: ke, slideLooper: At, dragHandler: zt, animation: Dt, eventHandler: tt, scrollBounds: kt, options: {loop: nt}}, it) => {
        const st = re.settled()
          , Gt = !kt.shouldConstrain()
          , rt = nt ? st : st && Gt;
        rt && !zt.pointerDown() && (Dt.stop(),
        tt.emit("settle")),
        rt || tt.emit("scroll");
        const Vt = De.get() * it + ie.get() * (1 - it);
        ye.set(Vt),
        nt && (ke.loop(re.direction()),
        At.loop()),
        ze.to(ye.get())
    }
      , V = $t(i, r, re => I(Ae, re), re => z(Ae, re))
      , N = .68
      , K = _[J.get()]
      , Z = he(K)
      , ie = he(K)
      , se = he(K)
      , le = he(K)
      , me = Ut(Z, se, ie, le, f, N)
      , Ce = sn(c, _, Q, B, le)
      , Oe = rn(V, J, q, me, Ce, le, a)
      , Je = en(B)
      , Ze = Se()
      , Ct = dn(e, t, a, g)
      , {slideRegistry: et} = nn(D, S, _, pe, W, k)
      , Ot = on(n, t, et, Oe, me, Ze, a, E)
      , Ae = {
        ownerDocument: i,
        ownerWindow: r,
        eventHandler: a,
        containerRect: O,
        slideRects: y,
        animation: V,
        axis: x,
        dragHandler: jt(x, n, i, r, le, Wt(x, r), Z, V, Oe, me, Ce, J, a, P, p, m, h, N, T),
        eventStore: Ze,
        percentOfView: P,
        index: J,
        indexPrevious: q,
        limit: B,
        location: Z,
        offsetLocation: se,
        previousLocation: ie,
        options: s,
        resizeHandler: Xt(e, a, r, t, x, v, M),
        scrollBody: me,
        scrollBounds: Kt(B, se, le, me, P),
        scrollLooper: Zt(Q, B, se, [Z, se, ie, le]),
        scrollProgress: Je,
        scrollSnapList: _.map(Je.get),
        scrollSnaps: _,
        scrollTarget: Ce,
        scrollTo: Oe,
        slideLooper: an(x, C, Q, U, R, ne, _, se, t),
        slideFocus: Ot,
        slidesHandler: ln(e, a, b),
        slidesInView: Ct,
        slideIndexes: k,
        slideRegistry: et,
        slidesToScroll: W,
        target: le,
        translate: Tt(x, e)
    };
    return Ae
}
function pn() {
    let n = {}, e;
    function t(d) {
        e = d
    }
    function i(d) {
        return n[d] || []
    }
    function r(d) {
        return i(d).forEach(u => u(e, d)),
        o
    }
    function s(d, u) {
        return n[d] = i(d).concat([u]),
        o
    }
    function a(d, u) {
        return n[d] = i(d).filter(c => c !== u),
        o
    }
    function l() {
        n = {}
    }
    const o = {
        init: t,
        emit: r,
        off: a,
        on: s,
        clear: l
    };
    return o
}
const mn = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0,
    watchFocus: !0
};
function hn(n) {
    function e(s, a) {
        return wt(s, a || {})
    }
    function t(s) {
        const a = s.breakpoints || {}
          , l = we(a).filter(o => n.matchMedia(o).matches).map(o => a[o]).reduce( (o, d) => e(o, d), {});
        return e(s, l)
    }
    function i(s) {
        return s.map(a => we(a.breakpoints || {})).reduce( (a, l) => a.concat(l), []).map(n.matchMedia)
    }
    return {
        mergeOptions: e,
        optionsAtMedia: t,
        optionsMediaQueries: i
    }
}
function gn(n) {
    let e = [];
    function t(s, a) {
        return e = a.filter( ({options: l}) => n.optionsAtMedia(l).active !== !1),
        e.forEach(l => l.init(s, n)),
        a.reduce( (l, o) => Object.assign(l, {
            [o.name]: o
        }), {})
    }
    function i() {
        e = e.filter(s => s.destroy())
    }
    return {
        init: t,
        destroy: i
    }
}
function Me(n, e, t) {
    const i = n.ownerDocument
      , r = i.defaultView
      , s = hn(r)
      , a = gn(s)
      , l = Se()
      , o = pn()
      , {mergeOptions: d, optionsAtMedia: u, optionsMediaQueries: c} = s
      , {on: f, off: p, emit: m} = o
      , g = x;
    let w = !1, h, S = d(mn, Me.globalOptions), v = d(S), b = [], T, E, L;
    function M() {
        const {container: k, slides: I} = v;
        E = ($e(k) ? n.querySelector(k) : k) || n.children[0];
        const V = $e(I) ? E.querySelectorAll(I) : I;
        L = [].slice.call(V || E.children)
    }
    function O(k) {
        const I = fn(n, E, L, i, r, k, o);
        if (k.loop && !I.slideLooper.canLoop()) {
            const z = Object.assign({}, k, {
                loop: !1
            });
            return O(z)
        }
        return I
    }
    function y(k, I) {
        w || (S = d(S, k),
        v = u(S),
        b = I || b,
        M(),
        h = O(v),
        c([S, ...b.map( ({options: z}) => z)]).forEach(z => l.add(z, "change", x)),
        v.active && (h.translate.to(h.location.get()),
        h.animation.init(),
        h.slidesInView.init(),
        h.slideFocus.init(q),
        h.eventHandler.init(q),
        h.resizeHandler.init(q),
        h.slidesHandler.init(q),
        h.options.loop && h.slideLooper.loop(),
        E.offsetParent && L.length && h.dragHandler.init(q),
        T = a.init(q, b)))
    }
    function x(k, I) {
        const z = W();
        C(),
        y(d({
            startIndex: z
        }, k), I),
        o.emit("reInit")
    }
    function C() {
        h.dragHandler.destroy(),
        h.eventStore.clear(),
        h.translate.clear(),
        h.slideLooper.clear(),
        h.resizeHandler.destroy(),
        h.slidesHandler.destroy(),
        h.slidesInView.destroy(),
        h.animation.destroy(),
        a.destroy(),
        l.clear()
    }
    function P() {
        w || (w = !0,
        l.clear(),
        C(),
        o.emit("destroy"),
        o.clear())
    }
    function A(k, I, z) {
        !v.active || w || (h.scrollBody.useBaseFriction().useDuration(I === !0 ? 0 : v.duration),
        h.scrollTo.index(k, z || 0))
    }
    function D(k) {
        const I = h.index.add(1).get();
        A(I, k, -1)
    }
    function F(k) {
        const I = h.index.add(-1).get();
        A(I, k, 1)
    }
    function U() {
        return h.index.add(1).get() !== W()
    }
    function R() {
        return h.index.add(-1).get() !== W()
    }
    function j() {
        return h.scrollSnapList
    }
    function te() {
        return h.scrollProgress.get(h.location.get())
    }
    function W() {
        return h.index.get()
    }
    function ne() {
        return h.indexPrevious.get()
    }
    function ce() {
        return h.slidesInView.get()
    }
    function Q() {
        return h.slidesInView.get(!1)
    }
    function fe() {
        return T
    }
    function pe() {
        return h
    }
    function _() {
        return n
    }
    function B() {
        return E
    }
    function J() {
        return L
    }
    const q = {
        canScrollNext: U,
        canScrollPrev: R,
        containerNode: B,
        internalEngine: pe,
        destroy: P,
        off: p,
        on: f,
        emit: m,
        plugins: fe,
        previousScrollSnap: ne,
        reInit: g,
        rootNode: _,
        scrollNext: D,
        scrollPrev: F,
        scrollProgress: te,
        scrollSnapList: j,
        scrollTo: A,
        selectedScrollSnap: W,
        slideNodes: J,
        slidesInView: ce,
        slidesNotInView: Q
    };
    return y(e, t),
    setTimeout( () => o.emit("init"), 0),
    q
}
Me.globalOptions = void 0;
function yt(n={}, e=[]) {
    const t = oe.useRef(n)
      , i = oe.useRef(e)
      , [r,s] = oe.useState()
      , [a,l] = oe.useState()
      , o = oe.useCallback( () => {
        r && r.reInit(t.current, i.current)
    }
    , [r]);
    return oe.useEffect( () => {
        Ye(t.current, n) || (t.current = n,
        o())
    }
    , [n, o]),
    oe.useEffect( () => {
        Nt(i.current, e) || (i.current = e,
        o())
    }
    , [e, o]),
    oe.useEffect( () => {
        if (Bt() && a) {
            Me.globalOptions = yt.globalOptions;
            const d = Me(a, t.current, i.current);
            return s(d),
            () => d.destroy()
        } else
            s(void 0)
    }
    , [a, s]),
    [l, r]
}
yt.globalOptions = void 0;
const vn = {
    active: !0,
    breakpoints: {},
    delay: 4e3,
    jump: !1,
    playOnInit: !0,
    stopOnFocusIn: !0,
    stopOnInteraction: !0,
    stopOnMouseEnter: !1,
    stopOnLastSnap: !1,
    rootNode: null
};
function bt(n={}) {
    let e, t, i, r = !1, s = !0, a = !1, l = 0;
    function o(b, T) {
        t = b;
        const {mergeOptions: E, optionsAtMedia: L} = T
          , M = E(vn, bt.globalOptions)
          , O = E(M, n);
        if (e = L(O),
        t.scrollSnapList().length <= 1)
            return;
        a = e.jump,
        i = !1;
        const {eventStore: y, ownerDocument: x} = t.internalEngine()
          , C = t.rootNode()
          , P = e.rootNode && e.rootNode(C) || C
          , A = t.containerNode();
        t.on("pointerDown", c),
        e.stopOnInteraction || t.on("pointerUp", u),
        e.stopOnMouseEnter && (y.add(P, "mouseenter", () => {
            s = !1,
            c()
        }
        ),
        e.stopOnInteraction || y.add(P, "mouseleave", () => {
            s = !0,
            u()
        }
        )),
        e.stopOnFocusIn && (t.on("slideFocusStart", c),
        e.stopOnInteraction || y.add(A, "focusout", u)),
        y.add(x, "visibilitychange", f),
        e.playOnInit && !p() && u()
    }
    function d() {
        t.off("pointerDown", c).off("pointerUp", u).off("slideFocusStart", c),
        c(),
        i = !0,
        r = !1
    }
    function u() {
        if (i || !s)
            return;
        r || t.emit("autoplay:play");
        const {ownerWindow: b} = t.internalEngine();
        b.clearInterval(l),
        l = b.setInterval(S, e.delay),
        r = !0
    }
    function c() {
        if (i)
            return;
        r && t.emit("autoplay:stop");
        const {ownerWindow: b} = t.internalEngine();
        b.clearInterval(l),
        l = 0,
        r = !1
    }
    function f() {
        if (p())
            return s = r,
            c();
        s && u()
    }
    function p() {
        const {ownerDocument: b} = t.internalEngine();
        return b.visibilityState === "hidden"
    }
    function m(b) {
        typeof b < "u" && (a = b),
        s = !0,
        u()
    }
    function g() {
        r && c()
    }
    function w() {
        r && m()
    }
    function h() {
        return r
    }
    function S() {
        const {index: b} = t.internalEngine()
          , T = b.clone().add(1).get()
          , E = t.scrollSnapList().length - 1;
        e.stopOnLastSnap && T === E && c(),
        t.canScrollNext() ? t.scrollNext(a) : t.scrollTo(0, a)
    }
    return {
        name: "autoplay",
        options: n,
        init: o,
        destroy: d,
        play: m,
        stop: g,
        reset: w,
        isPlaying: h
    }
}
bt.globalOptions = void 0;
function ct(n) {
    return n !== null && typeof n == "object" && "constructor"in n && n.constructor === Object
}
function Qe(n, e) {
    n === void 0 && (n = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach(t => {
        typeof n[t] > "u" ? n[t] = e[t] : ct(e[t]) && ct(n[t]) && Object.keys(e[t]).length > 0 && Qe(n[t], e[t])
    }
    )
}
const xt = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function ue() {
    const n = typeof document < "u" ? document : {};
    return Qe(n, xt),
    n
}
const wn = {
    document: xt,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(n) {
        return typeof setTimeout > "u" ? (n(),
        null) : setTimeout(n, 0)
    },
    cancelAnimationFrame(n) {
        typeof setTimeout > "u" || clearTimeout(n)
    }
};
function $() {
    const n = typeof window < "u" ? window : {};
    return Qe(n, wn),
    n
}
function Sn(n) {
    return n === void 0 && (n = ""),
    n.trim().split(" ").filter(e => !!e.trim())
}
function Tn(n) {
    const e = n;
    Object.keys(e).forEach(t => {
        try {
            e[t] = null
        } catch {}
        try {
            delete e[t]
        } catch {}
    }
    )
}
function je(n, e) {
    return e === void 0 && (e = 0),
    setTimeout(n, e)
}
function Pe() {
    return Date.now()
}
function yn(n) {
    const e = $();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(n, null)),
    !t && n.currentStyle && (t = n.currentStyle),
    t || (t = n.style),
    t
}
function bn(n, e) {
    e === void 0 && (e = "x");
    const t = $();
    let i, r, s;
    const a = yn(n);
    return t.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform,
    r.split(",").length > 6 && (r = r.split(", ").map(l => l.replace(",", ".")).join(", ")),
    s = new t.WebKitCSSMatrix(r === "none" ? "" : r)) : (s = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    i = s.toString().split(",")),
    e === "x" && (t.WebKitCSSMatrix ? r = s.m41 : i.length === 16 ? r = parseFloat(i[12]) : r = parseFloat(i[4])),
    e === "y" && (t.WebKitCSSMatrix ? r = s.m42 : i.length === 16 ? r = parseFloat(i[13]) : r = parseFloat(i[5])),
    r || 0
}
function be(n) {
    return typeof n == "object" && n !== null && n.constructor && Object.prototype.toString.call(n).slice(8, -1) === "Object"
}
function xn(n) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? n instanceof HTMLElement : n && (n.nodeType === 1 || n.nodeType === 11)
}
function H() {
    const n = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
        const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (i != null && !xn(i)) {
            const r = Object.keys(Object(i)).filter(s => e.indexOf(s) < 0);
            for (let s = 0, a = r.length; s < a; s += 1) {
                const l = r[s]
                  , o = Object.getOwnPropertyDescriptor(i, l);
                o !== void 0 && o.enumerable && (be(n[l]) && be(i[l]) ? i[l].__swiper__ ? n[l] = i[l] : H(n[l], i[l]) : !be(n[l]) && be(i[l]) ? (n[l] = {},
                i[l].__swiper__ ? n[l] = i[l] : H(n[l], i[l])) : n[l] = i[l])
            }
        }
    }
    return n
}
function xe(n, e, t) {
    n.style.setProperty(e, t)
}
function Et(n) {
    let {swiper: e, targetPosition: t, side: i} = n;
    const r = $()
      , s = -e.translate;
    let a = null, l;
    const o = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
    r.cancelAnimationFrame(e.cssModeFrameID);
    const d = t > s ? "next" : "prev"
      , u = (f, p) => d === "next" && f >= p || d === "prev" && f <= p
      , c = () => {
        l = new Date().getTime(),
        a === null && (a = l);
        const f = Math.max(Math.min((l - a) / o, 1), 0)
          , p = .5 - Math.cos(f * Math.PI) / 2;
        let m = s + p * (t - s);
        if (u(m, t) && (m = t),
        e.wrapperEl.scrollTo({
            [i]: m
        }),
        u(m, t)) {
            e.wrapperEl.style.overflow = "hidden",
            e.wrapperEl.style.scrollSnapType = "",
            setTimeout( () => {
                e.wrapperEl.style.overflow = "",
                e.wrapperEl.scrollTo({
                    [i]: m
                })
            }
            ),
            r.cancelAnimationFrame(e.cssModeFrameID);
            return
        }
        e.cssModeFrameID = r.requestAnimationFrame(c)
    }
    ;
    c()
}
function ee(n, e) {
    e === void 0 && (e = "");
    const t = [...n.children];
    return n instanceof HTMLSlotElement && t.push(...n.assignedElements()),
    e ? t.filter(i => i.matches(e)) : t
}
function En(n, e) {
    const t = e.contains(n);
    return !t && e instanceof HTMLSlotElement ? [...e.assignedElements()].includes(n) : t
}
function Ie(n) {
    try {
        console.warn(n);
        return
    } catch {}
}
function We(n, e) {
    e === void 0 && (e = []);
    const t = document.createElement(n);
    return t.classList.add(...Array.isArray(e) ? e : Sn(e)),
    t
}
function Mn(n, e) {
    const t = [];
    for (; n.previousElementSibling; ) {
        const i = n.previousElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i),
        n = i
    }
    return t
}
function Pn(n, e) {
    const t = [];
    for (; n.nextElementSibling; ) {
        const i = n.nextElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i),
        n = i
    }
    return t
}
function ae(n, e) {
    return $().getComputedStyle(n, null).getPropertyValue(e)
}
function ut(n) {
    let e = n, t;
    if (e) {
        for (t = 0; (e = e.previousSibling) !== null; )
            e.nodeType === 1 && (t += 1);
        return t
    }
}
function In(n, e) {
    const t = [];
    let i = n.parentElement;
    for (; i; )
        e ? i.matches(e) && t.push(i) : t.push(i),
        i = i.parentElement;
    return t
}
function ft(n, e, t) {
    const i = $();
    return n[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(n, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(n, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"))
}
function Ni(n) {
    return (Array.isArray(n) ? n : [n]).filter(e => !!e)
}
let Ge;
function Ln() {
    const n = $()
      , e = ue();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior"in e.documentElement.style,
        touch: !!("ontouchstart"in n || n.DocumentTouch && e instanceof n.DocumentTouch)
    }
}
function Mt() {
    return Ge || (Ge = Ln()),
    Ge
}
let Ve;
function Cn(n) {
    let {userAgent: e} = n === void 0 ? {} : n;
    const t = Mt()
      , i = $()
      , r = i.navigator.platform
      , s = e || i.navigator.userAgent
      , a = {
        ios: !1,
        android: !1
    }
      , l = i.screen.width
      , o = i.screen.height
      , d = s.match(/(Android);?[\s\/]+([\d.]+)?/);
    let u = s.match(/(iPad).*OS\s([\d_]+)/);
    const c = s.match(/(iPod)(.*OS\s([\d_]+))?/)
      , f = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , p = r === "Win32";
    let m = r === "MacIntel";
    const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !u && m && t.touch && g.indexOf(`${l}x${o}`) >= 0 && (u = s.match(/(Version)\/([\d.]+)/),
    u || (u = [0, 1, "13_0_0"]),
    m = !1),
    d && !p && (a.os = "android",
    a.android = !0),
    (u || f || c) && (a.os = "ios",
    a.ios = !0),
    a
}
function Pt(n) {
    return n === void 0 && (n = {}),
    Ve || (Ve = Cn(n)),
    Ve
}
let Fe;
function On() {
    const n = $()
      , e = Pt();
    let t = !1;
    function i() {
        const l = n.navigator.userAgent.toLowerCase();
        return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0
    }
    if (i()) {
        const l = String(n.navigator.userAgent);
        if (l.includes("Version/")) {
            const [o,d] = l.split("Version/")[1].split(" ")[0].split(".").map(u => Number(u));
            t = o < 16 || o === 16 && d < 2
        }
    }
    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent)
      , s = i()
      , a = s || r && e.ios;
    return {
        isSafari: t || s,
        needPerspectiveFix: t,
        need3dFix: a,
        isWebView: r
    }
}
function An() {
    return Fe || (Fe = On()),
    Fe
}
function zn(n) {
    let {swiper: e, on: t, emit: i} = n;
    const r = $();
    let s = null
      , a = null;
    const l = () => {
        !e || e.destroyed || !e.initialized || (i("beforeResize"),
        i("resize"))
    }
      , o = () => {
        !e || e.destroyed || !e.initialized || (s = new ResizeObserver(c => {
            a = r.requestAnimationFrame( () => {
                const {width: f, height: p} = e;
                let m = f
                  , g = p;
                c.forEach(w => {
                    let {contentBoxSize: h, contentRect: S, target: v} = w;
                    v && v !== e.el || (m = S ? S.width : (h[0] || h).inlineSize,
                    g = S ? S.height : (h[0] || h).blockSize)
                }
                ),
                (m !== f || g !== p) && l()
            }
            )
        }
        ),
        s.observe(e.el))
    }
      , d = () => {
        a && r.cancelAnimationFrame(a),
        s && s.unobserve && e.el && (s.unobserve(e.el),
        s = null)
    }
      , u = () => {
        !e || e.destroyed || !e.initialized || i("orientationchange")
    }
    ;
    t("init", () => {
        if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
            o();
            return
        }
        r.addEventListener("resize", l),
        r.addEventListener("orientationchange", u)
    }
    ),
    t("destroy", () => {
        d(),
        r.removeEventListener("resize", l),
        r.removeEventListener("orientationchange", u)
    }
    )
}
function Dn(n) {
    let {swiper: e, extendParams: t, on: i, emit: r} = n;
    const s = []
      , a = $()
      , l = function(u, c) {
        c === void 0 && (c = {});
        const f = a.MutationObserver || a.WebkitMutationObserver
          , p = new f(m => {
            if (e.__preventObserver__)
                return;
            if (m.length === 1) {
                r("observerUpdate", m[0]);
                return
            }
            const g = function() {
                r("observerUpdate", m[0])
            };
            a.requestAnimationFrame ? a.requestAnimationFrame(g) : a.setTimeout(g, 0)
        }
        );
        p.observe(u, {
            attributes: typeof c.attributes > "u" ? !0 : c.attributes,
            childList: e.isElement || (typeof c.childList > "u" ? !0 : c).childList,
            characterData: typeof c.characterData > "u" ? !0 : c.characterData
        }),
        s.push(p)
    }
      , o = () => {
        if (e.params.observer) {
            if (e.params.observeParents) {
                const u = In(e.hostEl);
                for (let c = 0; c < u.length; c += 1)
                    l(u[c])
            }
            l(e.hostEl, {
                childList: e.params.observeSlideChildren
            }),
            l(e.wrapperEl, {
                attributes: !1
            })
        }
    }
      , d = () => {
        s.forEach(u => {
            u.disconnect()
        }
        ),
        s.splice(0, s.length)
    }
    ;
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    i("init", o),
    i("destroy", d)
}
var kn = {
    on(n, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function")
            return i;
        const r = t ? "unshift" : "push";
        return n.split(" ").forEach(s => {
            i.eventsListeners[s] || (i.eventsListeners[s] = []),
            i.eventsListeners[s][r](e)
        }
        ),
        i
    },
    once(n, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function")
            return i;
        function r() {
            i.off(n, r),
            r.__emitterProxy && delete r.__emitterProxy;
            for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++)
                a[l] = arguments[l];
            e.apply(i, a)
        }
        return r.__emitterProxy = e,
        i.on(n, r, t)
    },
    onAny(n, e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof n != "function")
            return t;
        const i = e ? "unshift" : "push";
        return t.eventsAnyListeners.indexOf(n) < 0 && t.eventsAnyListeners[i](n),
        t
    },
    offAny(n) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
            return e;
        const t = e.eventsAnyListeners.indexOf(n);
        return t >= 0 && e.eventsAnyListeners.splice(t, 1),
        e
    },
    off(n, e) {
        const t = this;
        return !t.eventsListeners || t.destroyed || !t.eventsListeners || n.split(" ").forEach(i => {
            typeof e > "u" ? t.eventsListeners[i] = [] : t.eventsListeners[i] && t.eventsListeners[i].forEach( (r, s) => {
                (r === e || r.__emitterProxy && r.__emitterProxy === e) && t.eventsListeners[i].splice(s, 1)
            }
            )
        }
        ),
        t
    },
    emit() {
        const n = this;
        if (!n.eventsListeners || n.destroyed || !n.eventsListeners)
            return n;
        let e, t, i;
        for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++)
            s[a] = arguments[a];
        return typeof s[0] == "string" || Array.isArray(s[0]) ? (e = s[0],
        t = s.slice(1, s.length),
        i = n) : (e = s[0].events,
        t = s[0].data,
        i = s[0].context || n),
        t.unshift(i),
        (Array.isArray(e) ? e : e.split(" ")).forEach(o => {
            n.eventsAnyListeners && n.eventsAnyListeners.length && n.eventsAnyListeners.forEach(d => {
                d.apply(i, [o, ...t])
            }
            ),
            n.eventsListeners && n.eventsListeners[o] && n.eventsListeners[o].forEach(d => {
                d.apply(i, t)
            }
            )
        }
        ),
        n
    }
};
function Gn() {
    const n = this;
    let e, t;
    const i = n.el;
    typeof n.params.width < "u" && n.params.width !== null ? e = n.params.width : e = i.clientWidth,
    typeof n.params.height < "u" && n.params.height !== null ? t = n.params.height : t = i.clientHeight,
    !(e === 0 && n.isHorizontal() || t === 0 && n.isVertical()) && (e = e - parseInt(ae(i, "padding-left") || 0, 10) - parseInt(ae(i, "padding-right") || 0, 10),
    t = t - parseInt(ae(i, "padding-top") || 0, 10) - parseInt(ae(i, "padding-bottom") || 0, 10),
    Number.isNaN(e) && (e = 0),
    Number.isNaN(t) && (t = 0),
    Object.assign(n, {
        width: e,
        height: t,
        size: n.isHorizontal() ? e : t
    }))
}
function Vn() {
    const n = this;
    function e(y, x) {
        return parseFloat(y.getPropertyValue(n.getDirectionLabel(x)) || 0)
    }
    const t = n.params
      , {wrapperEl: i, slidesEl: r, size: s, rtlTranslate: a, wrongRTL: l} = n
      , o = n.virtual && t.virtual.enabled
      , d = o ? n.virtual.slides.length : n.slides.length
      , u = ee(r, `.${n.params.slideClass}, swiper-slide`)
      , c = o ? n.virtual.slides.length : u.length;
    let f = [];
    const p = []
      , m = [];
    let g = t.slidesOffsetBefore;
    typeof g == "function" && (g = t.slidesOffsetBefore.call(n));
    let w = t.slidesOffsetAfter;
    typeof w == "function" && (w = t.slidesOffsetAfter.call(n));
    const h = n.snapGrid.length
      , S = n.slidesGrid.length;
    let v = t.spaceBetween
      , b = -g
      , T = 0
      , E = 0;
    if (typeof s > "u")
        return;
    typeof v == "string" && v.indexOf("%") >= 0 ? v = parseFloat(v.replace("%", "")) / 100 * s : typeof v == "string" && (v = parseFloat(v)),
    n.virtualSize = -v,
    u.forEach(y => {
        a ? y.style.marginLeft = "" : y.style.marginRight = "",
        y.style.marginBottom = "",
        y.style.marginTop = ""
    }
    ),
    t.centeredSlides && t.cssMode && (xe(i, "--swiper-centered-offset-before", ""),
    xe(i, "--swiper-centered-offset-after", ""));
    const L = t.grid && t.grid.rows > 1 && n.grid;
    L ? n.grid.initSlides(u) : n.grid && n.grid.unsetSlides();
    let M;
    const O = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(y => typeof t.breakpoints[y].slidesPerView < "u").length > 0;
    for (let y = 0; y < c; y += 1) {
        M = 0;
        let x;
        if (u[y] && (x = u[y]),
        L && n.grid.updateSlide(y, x, u),
        !(u[y] && ae(x, "display") === "none")) {
            if (t.slidesPerView === "auto") {
                O && (u[y].style[n.getDirectionLabel("width")] = "");
                const C = getComputedStyle(x)
                  , P = x.style.transform
                  , A = x.style.webkitTransform;
                if (P && (x.style.transform = "none"),
                A && (x.style.webkitTransform = "none"),
                t.roundLengths)
                    M = n.isHorizontal() ? ft(x, "width") : ft(x, "height");
                else {
                    const D = e(C, "width")
                      , F = e(C, "padding-left")
                      , U = e(C, "padding-right")
                      , R = e(C, "margin-left")
                      , j = e(C, "margin-right")
                      , te = C.getPropertyValue("box-sizing");
                    if (te && te === "border-box")
                        M = D + R + j;
                    else {
                        const {clientWidth: W, offsetWidth: ne} = x;
                        M = D + F + U + R + j + (ne - W)
                    }
                }
                P && (x.style.transform = P),
                A && (x.style.webkitTransform = A),
                t.roundLengths && (M = Math.floor(M))
            } else
                M = (s - (t.slidesPerView - 1) * v) / t.slidesPerView,
                t.roundLengths && (M = Math.floor(M)),
                u[y] && (u[y].style[n.getDirectionLabel("width")] = `${M}px`);
            u[y] && (u[y].swiperSlideSize = M),
            m.push(M),
            t.centeredSlides ? (b = b + M / 2 + T / 2 + v,
            T === 0 && y !== 0 && (b = b - s / 2 - v),
            y === 0 && (b = b - s / 2 - v),
            Math.abs(b) < 1 / 1e3 && (b = 0),
            t.roundLengths && (b = Math.floor(b)),
            E % t.slidesPerGroup === 0 && f.push(b),
            p.push(b)) : (t.roundLengths && (b = Math.floor(b)),
            (E - Math.min(n.params.slidesPerGroupSkip, E)) % n.params.slidesPerGroup === 0 && f.push(b),
            p.push(b),
            b = b + M + v),
            n.virtualSize += M + v,
            T = M,
            E += 1
        }
    }
    if (n.virtualSize = Math.max(n.virtualSize, s) + w,
    a && l && (t.effect === "slide" || t.effect === "coverflow") && (i.style.width = `${n.virtualSize + v}px`),
    t.setWrapperSize && (i.style[n.getDirectionLabel("width")] = `${n.virtualSize + v}px`),
    L && n.grid.updateWrapperSize(M, f),
    !t.centeredSlides) {
        const y = [];
        for (let x = 0; x < f.length; x += 1) {
            let C = f[x];
            t.roundLengths && (C = Math.floor(C)),
            f[x] <= n.virtualSize - s && y.push(C)
        }
        f = y,
        Math.floor(n.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 && f.push(n.virtualSize - s)
    }
    if (o && t.loop) {
        const y = m[0] + v;
        if (t.slidesPerGroup > 1) {
            const x = Math.ceil((n.virtual.slidesBefore + n.virtual.slidesAfter) / t.slidesPerGroup)
              , C = y * t.slidesPerGroup;
            for (let P = 0; P < x; P += 1)
                f.push(f[f.length - 1] + C)
        }
        for (let x = 0; x < n.virtual.slidesBefore + n.virtual.slidesAfter; x += 1)
            t.slidesPerGroup === 1 && f.push(f[f.length - 1] + y),
            p.push(p[p.length - 1] + y),
            n.virtualSize += y
    }
    if (f.length === 0 && (f = [0]),
    v !== 0) {
        const y = n.isHorizontal() && a ? "marginLeft" : n.getDirectionLabel("marginRight");
        u.filter( (x, C) => !t.cssMode || t.loop ? !0 : C !== u.length - 1).forEach(x => {
            x.style[y] = `${v}px`
        }
        )
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
        let y = 0;
        m.forEach(C => {
            y += C + (v || 0)
        }
        ),
        y -= v;
        const x = y > s ? y - s : 0;
        f = f.map(C => C <= 0 ? -g : C > x ? x + w : C)
    }
    if (t.centerInsufficientSlides) {
        let y = 0;
        m.forEach(C => {
            y += C + (v || 0)
        }
        ),
        y -= v;
        const x = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
        if (y + x < s) {
            const C = (s - y - x) / 2;
            f.forEach( (P, A) => {
                f[A] = P - C
            }
            ),
            p.forEach( (P, A) => {
                p[A] = P + C
            }
            )
        }
    }
    if (Object.assign(n, {
        slides: u,
        snapGrid: f,
        slidesGrid: p,
        slidesSizesGrid: m
    }),
    t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
        xe(i, "--swiper-centered-offset-before", `${-f[0]}px`),
        xe(i, "--swiper-centered-offset-after", `${n.size / 2 - m[m.length - 1] / 2}px`);
        const y = -n.snapGrid[0]
          , x = -n.slidesGrid[0];
        n.snapGrid = n.snapGrid.map(C => C + y),
        n.slidesGrid = n.slidesGrid.map(C => C + x)
    }
    if (c !== d && n.emit("slidesLengthChange"),
    f.length !== h && (n.params.watchOverflow && n.checkOverflow(),
    n.emit("snapGridLengthChange")),
    p.length !== S && n.emit("slidesGridLengthChange"),
    t.watchSlidesProgress && n.updateSlidesOffset(),
    n.emit("slidesUpdated"),
    !o && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
        const y = `${t.containerModifierClass}backface-hidden`
          , x = n.el.classList.contains(y);
        c <= t.maxBackfaceHiddenSlides ? x || n.el.classList.add(y) : x && n.el.classList.remove(y)
    }
}
function Fn(n) {
    const e = this
      , t = []
      , i = e.virtual && e.params.virtual.enabled;
    let r = 0, s;
    typeof n == "number" ? e.setTransition(n) : n === !0 && e.setTransition(e.params.speed);
    const a = l => i ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach(l => {
                t.push(l)
            }
            );
        else
            for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
                const l = e.activeIndex + s;
                if (l > e.slides.length && !i)
                    break;
                t.push(a(l))
            }
    else
        t.push(a(e.activeIndex));
    for (s = 0; s < t.length; s += 1)
        if (typeof t[s] < "u") {
            const l = t[s].offsetHeight;
            r = l > r ? l : r
        }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`)
}
function Bn() {
    const n = this
      , e = n.slides
      , t = n.isElement ? n.isHorizontal() ? n.wrapperEl.offsetLeft : n.wrapperEl.offsetTop : 0;
    for (let i = 0; i < e.length; i += 1)
        e[i].swiperSlideOffset = (n.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - n.cssOverflowAdjustment()
}
const pt = (n, e, t) => {
    e && !n.classList.contains(t) ? n.classList.add(t) : !e && n.classList.contains(t) && n.classList.remove(t)
}
;
function Nn(n) {
    n === void 0 && (n = this && this.translate || 0);
    const e = this
      , t = e.params
      , {slides: i, rtlTranslate: r, snapGrid: s} = e;
    if (i.length === 0)
        return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let a = -n;
    r && (a = n),
    e.visibleSlidesIndexes = [],
    e.visibleSlides = [];
    let l = t.spaceBetween;
    typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
    for (let o = 0; o < i.length; o += 1) {
        const d = i[o];
        let u = d.swiperSlideOffset;
        t.cssMode && t.centeredSlides && (u -= i[0].swiperSlideOffset);
        const c = (a + (t.centeredSlides ? e.minTranslate() : 0) - u) / (d.swiperSlideSize + l)
          , f = (a - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) / (d.swiperSlideSize + l)
          , p = -(a - u)
          , m = p + e.slidesSizesGrid[o]
          , g = p >= 0 && p <= e.size - e.slidesSizesGrid[o]
          , w = p >= 0 && p < e.size - 1 || m > 1 && m <= e.size || p <= 0 && m >= e.size;
        w && (e.visibleSlides.push(d),
        e.visibleSlidesIndexes.push(o)),
        pt(d, w, t.slideVisibleClass),
        pt(d, g, t.slideFullyVisibleClass),
        d.progress = r ? -c : c,
        d.originalProgress = r ? -f : f
    }
}
function _n(n) {
    const e = this;
    if (typeof n > "u") {
        const u = e.rtlTranslate ? -1 : 1;
        n = e && e.translate && e.translate * u || 0
    }
    const t = e.params
      , i = e.maxTranslate() - e.minTranslate();
    let {progress: r, isBeginning: s, isEnd: a, progressLoop: l} = e;
    const o = s
      , d = a;
    if (i === 0)
        r = 0,
        s = !0,
        a = !0;
    else {
        r = (n - e.minTranslate()) / i;
        const u = Math.abs(n - e.minTranslate()) < 1
          , c = Math.abs(n - e.maxTranslate()) < 1;
        s = u || r <= 0,
        a = c || r >= 1,
        u && (r = 0),
        c && (r = 1)
    }
    if (t.loop) {
        const u = e.getSlideIndexByData(0)
          , c = e.getSlideIndexByData(e.slides.length - 1)
          , f = e.slidesGrid[u]
          , p = e.slidesGrid[c]
          , m = e.slidesGrid[e.slidesGrid.length - 1]
          , g = Math.abs(n);
        g >= f ? l = (g - f) / m : l = (g + m - p) / m,
        l > 1 && (l -= 1)
    }
    Object.assign(e, {
        progress: r,
        progressLoop: l,
        isBeginning: s,
        isEnd: a
    }),
    (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(n),
    s && !o && e.emit("reachBeginning toEdge"),
    a && !d && e.emit("reachEnd toEdge"),
    (o && !s || d && !a) && e.emit("fromEdge"),
    e.emit("progress", r)
}
const Be = (n, e, t) => {
    e && !n.classList.contains(t) ? n.classList.add(t) : !e && n.classList.contains(t) && n.classList.remove(t)
}
;
function Hn() {
    const n = this
      , {slides: e, params: t, slidesEl: i, activeIndex: r} = n
      , s = n.virtual && t.virtual.enabled
      , a = n.grid && t.grid && t.grid.rows > 1
      , l = c => ee(i, `.${t.slideClass}${c}, swiper-slide${c}`)[0];
    let o, d, u;
    if (s)
        if (t.loop) {
            let c = r - n.virtual.slidesBefore;
            c < 0 && (c = n.virtual.slides.length + c),
            c >= n.virtual.slides.length && (c -= n.virtual.slides.length),
            o = l(`[data-swiper-slide-index="${c}"]`)
        } else
            o = l(`[data-swiper-slide-index="${r}"]`);
    else
        a ? (o = e.filter(c => c.column === r)[0],
        u = e.filter(c => c.column === r + 1)[0],
        d = e.filter(c => c.column === r - 1)[0]) : o = e[r];
    o && (a || (u = Pn(o, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !u && (u = e[0]),
    d = Mn(o, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !d === 0 && (d = e[e.length - 1]))),
    e.forEach(c => {
        Be(c, c === o, t.slideActiveClass),
        Be(c, c === u, t.slideNextClass),
        Be(c, c === d, t.slidePrevClass)
    }
    ),
    n.emitSlidesClasses()
}
const Ee = (n, e) => {
    if (!n || n.destroyed || !n.params)
        return;
    const t = () => n.isElement ? "swiper-slide" : `.${n.params.slideClass}`
      , i = e.closest(t());
    if (i) {
        let r = i.querySelector(`.${n.params.lazyPreloaderClass}`);
        !r && n.isElement && (i.shadowRoot ? r = i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`) : requestAnimationFrame( () => {
            i.shadowRoot && (r = i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`),
            r && r.remove())
        }
        )),
        r && r.remove()
    }
}
  , Ne = (n, e) => {
    if (!n.slides[e])
        return;
    const t = n.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading")
}
  , qe = n => {
    if (!n || n.destroyed || !n.params)
        return;
    let e = n.params.lazyPreloadPrevNext;
    const t = n.slides.length;
    if (!t || !e || e < 0)
        return;
    e = Math.min(e, t);
    const i = n.params.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(n.params.slidesPerView)
      , r = n.activeIndex;
    if (n.params.grid && n.params.grid.rows > 1) {
        const a = r
          , l = [a - e];
        l.push(...Array.from({
            length: e
        }).map( (o, d) => a + i + d)),
        n.slides.forEach( (o, d) => {
            l.includes(o.column) && Ne(n, d)
        }
        );
        return
    }
    const s = r + i - 1;
    if (n.params.rewind || n.params.loop)
        for (let a = r - e; a <= s + e; a += 1) {
            const l = (a % t + t) % t;
            (l < r || l > s) && Ne(n, l)
        }
    else
        for (let a = Math.max(r - e, 0); a <= Math.min(s + e, t - 1); a += 1)
            a !== r && (a > s || a < r) && Ne(n, a)
}
;
function $n(n) {
    const {slidesGrid: e, params: t} = n
      , i = n.rtlTranslate ? n.translate : -n.translate;
    let r;
    for (let s = 0; s < e.length; s += 1)
        typeof e[s + 1] < "u" ? i >= e[s] && i < e[s + 1] - (e[s + 1] - e[s]) / 2 ? r = s : i >= e[s] && i < e[s + 1] && (r = s + 1) : i >= e[s] && (r = s);
    return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0),
    r
}
function Rn(n) {
    const e = this
      , t = e.rtlTranslate ? e.translate : -e.translate
      , {snapGrid: i, params: r, activeIndex: s, realIndex: a, snapIndex: l} = e;
    let o = n, d;
    const u = p => {
        let m = p - e.virtual.slidesBefore;
        return m < 0 && (m = e.virtual.slides.length + m),
        m >= e.virtual.slides.length && (m -= e.virtual.slides.length),
        m
    }
    ;
    if (typeof o > "u" && (o = $n(e)),
    i.indexOf(t) >= 0)
        d = i.indexOf(t);
    else {
        const p = Math.min(r.slidesPerGroupSkip, o);
        d = p + Math.floor((o - p) / r.slidesPerGroup)
    }
    if (d >= i.length && (d = i.length - 1),
    o === s && !e.params.loop) {
        d !== l && (e.snapIndex = d,
        e.emit("snapIndexChange"));
        return
    }
    if (o === s && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = u(o);
        return
    }
    const c = e.grid && r.grid && r.grid.rows > 1;
    let f;
    if (e.virtual && r.virtual.enabled && r.loop)
        f = u(o);
    else if (c) {
        const p = e.slides.filter(g => g.column === o)[0];
        let m = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(m) && (m = Math.max(e.slides.indexOf(p), 0)),
        f = Math.floor(m / r.grid.rows)
    } else if (e.slides[o]) {
        const p = e.slides[o].getAttribute("data-swiper-slide-index");
        p ? f = parseInt(p, 10) : f = o
    } else
        f = o;
    Object.assign(e, {
        previousSnapIndex: l,
        snapIndex: d,
        previousRealIndex: a,
        realIndex: f,
        previousIndex: s,
        activeIndex: o
    }),
    e.initialized && qe(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && (a !== f && e.emit("realIndexChange"),
    e.emit("slideChange"))
}
function jn(n, e) {
    const t = this
      , i = t.params;
    let r = n.closest(`.${i.slideClass}, swiper-slide`);
    !r && t.isElement && e && e.length > 1 && e.includes(n) && [...e.slice(e.indexOf(n) + 1, e.length)].forEach(l => {
        !r && l.matches && l.matches(`.${i.slideClass}, swiper-slide`) && (r = l)
    }
    );
    let s = !1, a;
    if (r) {
        for (let l = 0; l < t.slides.length; l += 1)
            if (t.slides[l] === r) {
                s = !0,
                a = l;
                break
            }
    }
    if (r && s)
        t.clickedSlide = r,
        t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = a;
    else {
        t.clickedSlide = void 0,
        t.clickedIndex = void 0;
        return
    }
    i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var Wn = {
    updateSize: Gn,
    updateSlides: Vn,
    updateAutoHeight: Fn,
    updateSlidesOffset: Bn,
    updateSlidesProgress: Nn,
    updateProgress: _n,
    updateSlidesClasses: Hn,
    updateActiveIndex: Rn,
    updateClickedSlide: jn
};
function qn(n) {
    n === void 0 && (n = this.isHorizontal() ? "x" : "y");
    const e = this
      , {params: t, rtlTranslate: i, translate: r, wrapperEl: s} = e;
    if (t.virtualTranslate)
        return i ? -r : r;
    if (t.cssMode)
        return r;
    let a = bn(s, n);
    return a += e.cssOverflowAdjustment(),
    i && (a = -a),
    a || 0
}
function Yn(n, e) {
    const t = this
      , {rtlTranslate: i, params: r, wrapperEl: s, progress: a} = t;
    let l = 0
      , o = 0;
    const d = 0;
    t.isHorizontal() ? l = i ? -n : n : o = n,
    r.roundLengths && (l = Math.floor(l),
    o = Math.floor(o)),
    t.previousTranslate = t.translate,
    t.translate = t.isHorizontal() ? l : o,
    r.cssMode ? s[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -o : r.virtualTranslate || (t.isHorizontal() ? l -= t.cssOverflowAdjustment() : o -= t.cssOverflowAdjustment(),
    s.style.transform = `translate3d(${l}px, ${o}px, ${d}px)`);
    let u;
    const c = t.maxTranslate() - t.minTranslate();
    c === 0 ? u = 0 : u = (n - t.minTranslate()) / c,
    u !== a && t.updateProgress(n),
    t.emit("setTranslate", t.translate, e)
}
function Xn() {
    return -this.snapGrid[0]
}
function Un() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function Kn(n, e, t, i, r) {
    n === void 0 && (n = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    i === void 0 && (i = !0);
    const s = this
      , {params: a, wrapperEl: l} = s;
    if (s.animating && a.preventInteractionOnTransition)
        return !1;
    const o = s.minTranslate()
      , d = s.maxTranslate();
    let u;
    if (i && n > o ? u = o : i && n < d ? u = d : u = n,
    s.updateProgress(u),
    a.cssMode) {
        const c = s.isHorizontal();
        if (e === 0)
            l[c ? "scrollLeft" : "scrollTop"] = -u;
        else {
            if (!s.support.smoothScroll)
                return Et({
                    swiper: s,
                    targetPosition: -u,
                    side: c ? "left" : "top"
                }),
                !0;
            l.scrollTo({
                [c ? "left" : "top"]: -u,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (s.setTransition(0),
    s.setTranslate(u),
    t && (s.emit("beforeTransitionStart", e, r),
    s.emit("transitionEnd"))) : (s.setTransition(e),
    s.setTranslate(u),
    t && (s.emit("beforeTransitionStart", e, r),
    s.emit("transitionStart")),
    s.animating || (s.animating = !0,
    s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(f) {
        !s || s.destroyed || f.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
        s.onTranslateToWrapperTransitionEnd = null,
        delete s.onTranslateToWrapperTransitionEnd,
        s.animating = !1,
        t && s.emit("transitionEnd"))
    }
    ),
    s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))),
    !0
}
var Qn = {
    getTranslate: qn,
    setTranslate: Yn,
    minTranslate: Xn,
    maxTranslate: Un,
    translateTo: Kn
};
function Jn(n, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${n}ms`,
    t.wrapperEl.style.transitionDelay = n === 0 ? "0ms" : ""),
    t.emit("setTransition", n, e)
}
function It(n) {
    let {swiper: e, runCallbacks: t, direction: i, step: r} = n;
    const {activeIndex: s, previousIndex: a} = e;
    let l = i;
    if (l || (s > a ? l = "next" : s < a ? l = "prev" : l = "reset"),
    e.emit(`transition${r}`),
    t && s !== a) {
        if (l === "reset") {
            e.emit(`slideResetTransition${r}`);
            return
        }
        e.emit(`slideChangeTransition${r}`),
        l === "next" ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`)
    }
}
function Zn(n, e) {
    n === void 0 && (n = !0);
    const t = this
      , {params: i} = t;
    i.cssMode || (i.autoHeight && t.updateAutoHeight(),
    It({
        swiper: t,
        runCallbacks: n,
        direction: e,
        step: "Start"
    }))
}
function ei(n, e) {
    n === void 0 && (n = !0);
    const t = this
      , {params: i} = t;
    t.animating = !1,
    !i.cssMode && (t.setTransition(0),
    It({
        swiper: t,
        runCallbacks: n,
        direction: e,
        step: "End"
    }))
}
var ti = {
    setTransition: Jn,
    transitionStart: Zn,
    transitionEnd: ei
};
function ni(n, e, t, i, r) {
    n === void 0 && (n = 0),
    t === void 0 && (t = !0),
    typeof n == "string" && (n = parseInt(n, 10));
    const s = this;
    let a = n;
    a < 0 && (a = 0);
    const {params: l, snapGrid: o, slidesGrid: d, previousIndex: u, activeIndex: c, rtlTranslate: f, wrapperEl: p, enabled: m} = s;
    if (!m && !i && !r || s.destroyed || s.animating && l.preventInteractionOnTransition)
        return !1;
    typeof e > "u" && (e = s.params.speed);
    const g = Math.min(s.params.slidesPerGroupSkip, a);
    let w = g + Math.floor((a - g) / s.params.slidesPerGroup);
    w >= o.length && (w = o.length - 1);
    const h = -o[w];
    if (l.normalizeSlideIndex)
        for (let T = 0; T < d.length; T += 1) {
            const E = -Math.floor(h * 100)
              , L = Math.floor(d[T] * 100)
              , M = Math.floor(d[T + 1] * 100);
            typeof d[T + 1] < "u" ? E >= L && E < M - (M - L) / 2 ? a = T : E >= L && E < M && (a = T + 1) : E >= L && (a = T)
        }
    if (s.initialized && a !== c && (!s.allowSlideNext && (f ? h > s.translate && h > s.minTranslate() : h < s.translate && h < s.minTranslate()) || !s.allowSlidePrev && h > s.translate && h > s.maxTranslate() && (c || 0) !== a))
        return !1;
    a !== (u || 0) && t && s.emit("beforeSlideChangeStart"),
    s.updateProgress(h);
    let S;
    a > c ? S = "next" : a < c ? S = "prev" : S = "reset";
    const v = s.virtual && s.params.virtual.enabled;
    if (!(v && r) && (f && -h === s.translate || !f && h === s.translate))
        return s.updateActiveIndex(a),
        l.autoHeight && s.updateAutoHeight(),
        s.updateSlidesClasses(),
        l.effect !== "slide" && s.setTranslate(h),
        S !== "reset" && (s.transitionStart(t, S),
        s.transitionEnd(t, S)),
        !1;
    if (l.cssMode) {
        const T = s.isHorizontal()
          , E = f ? h : -h;
        if (e === 0)
            v && (s.wrapperEl.style.scrollSnapType = "none",
            s._immediateVirtual = !0),
            v && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0,
            requestAnimationFrame( () => {
                p[T ? "scrollLeft" : "scrollTop"] = E
            }
            )) : p[T ? "scrollLeft" : "scrollTop"] = E,
            v && requestAnimationFrame( () => {
                s.wrapperEl.style.scrollSnapType = "",
                s._immediateVirtual = !1
            }
            );
        else {
            if (!s.support.smoothScroll)
                return Et({
                    swiper: s,
                    targetPosition: E,
                    side: T ? "left" : "top"
                }),
                !0;
            p.scrollTo({
                [T ? "left" : "top"]: E,
                behavior: "smooth"
            })
        }
        return !0
    }
    return s.setTransition(e),
    s.setTranslate(h),
    s.updateActiveIndex(a),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", e, i),
    s.transitionStart(t, S),
    e === 0 ? s.transitionEnd(t, S) : s.animating || (s.animating = !0,
    s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(E) {
        !s || s.destroyed || E.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
        s.onSlideToWrapperTransitionEnd = null,
        delete s.onSlideToWrapperTransitionEnd,
        s.transitionEnd(t, S))
    }
    ),
    s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)),
    !0
}
function ii(n, e, t, i) {
    n === void 0 && (n = 0),
    t === void 0 && (t = !0),
    typeof n == "string" && (n = parseInt(n, 10));
    const r = this;
    if (r.destroyed)
        return;
    typeof e > "u" && (e = r.params.speed);
    const s = r.grid && r.params.grid && r.params.grid.rows > 1;
    let a = n;
    if (r.params.loop)
        if (r.virtual && r.params.virtual.enabled)
            a = a + r.virtual.slidesBefore;
        else {
            let l;
            if (s) {
                const f = a * r.params.grid.rows;
                l = r.slides.filter(p => p.getAttribute("data-swiper-slide-index") * 1 === f)[0].column
            } else
                l = r.getSlideIndexByData(a);
            const o = s ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length
              , {centeredSlides: d} = r.params;
            let u = r.params.slidesPerView;
            u === "auto" ? u = r.slidesPerViewDynamic() : (u = Math.ceil(parseFloat(r.params.slidesPerView, 10)),
            d && u % 2 === 0 && (u = u + 1));
            let c = o - l < u;
            if (d && (c = c || l < Math.ceil(u / 2)),
            i && d && r.params.slidesPerView !== "auto" && !s && (c = !1),
            c) {
                const f = d ? l < r.activeIndex ? "prev" : "next" : l - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                r.loopFix({
                    direction: f,
                    slideTo: !0,
                    activeSlideIndex: f === "next" ? l + 1 : l - o + 1,
                    slideRealIndex: f === "next" ? r.realIndex : void 0
                })
            }
            if (s) {
                const f = a * r.params.grid.rows;
                a = r.slides.filter(p => p.getAttribute("data-swiper-slide-index") * 1 === f)[0].column
            } else
                a = r.getSlideIndexByData(a)
        }
    return requestAnimationFrame( () => {
        r.slideTo(a, e, t, i)
    }
    ),
    r
}
function si(n, e, t) {
    e === void 0 && (e = !0);
    const i = this
      , {enabled: r, params: s, animating: a} = i;
    if (!r || i.destroyed)
        return i;
    typeof n > "u" && (n = i.params.speed);
    let l = s.slidesPerGroup;
    s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const o = i.activeIndex < s.slidesPerGroupSkip ? 1 : l
      , d = i.virtual && s.virtual.enabled;
    if (s.loop) {
        if (a && !d && s.loopPreventsSliding)
            return !1;
        if (i.loopFix({
            direction: "next"
        }),
        i._clientLeft = i.wrapperEl.clientLeft,
        i.activeIndex === i.slides.length - 1 && s.cssMode)
            return requestAnimationFrame( () => {
                i.slideTo(i.activeIndex + o, n, e, t)
            }
            ),
            !0
    }
    return s.rewind && i.isEnd ? i.slideTo(0, n, e, t) : i.slideTo(i.activeIndex + o, n, e, t)
}
function ri(n, e, t) {
    e === void 0 && (e = !0);
    const i = this
      , {params: r, snapGrid: s, slidesGrid: a, rtlTranslate: l, enabled: o, animating: d} = i;
    if (!o || i.destroyed)
        return i;
    typeof n > "u" && (n = i.params.speed);
    const u = i.virtual && r.virtual.enabled;
    if (r.loop) {
        if (d && !u && r.loopPreventsSliding)
            return !1;
        i.loopFix({
            direction: "prev"
        }),
        i._clientLeft = i.wrapperEl.clientLeft
    }
    const c = l ? i.translate : -i.translate;
    function f(h) {
        return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h)
    }
    const p = f(c)
      , m = s.map(h => f(h));
    let g = s[m.indexOf(p) - 1];
    if (typeof g > "u" && r.cssMode) {
        let h;
        s.forEach( (S, v) => {
            p >= S && (h = v)
        }
        ),
        typeof h < "u" && (g = s[h > 0 ? h - 1 : h])
    }
    let w = 0;
    if (typeof g < "u" && (w = a.indexOf(g),
    w < 0 && (w = i.activeIndex - 1),
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (w = w - i.slidesPerViewDynamic("previous", !0) + 1,
    w = Math.max(w, 0))),
    r.rewind && i.isBeginning) {
        const h = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(h, n, e, t)
    } else if (r.loop && i.activeIndex === 0 && r.cssMode)
        return requestAnimationFrame( () => {
            i.slideTo(w, n, e, t)
        }
        ),
        !0;
    return i.slideTo(w, n, e, t)
}
function oi(n, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
        return typeof n > "u" && (n = i.params.speed),
        i.slideTo(i.activeIndex, n, e, t)
}
function ai(n, e, t, i) {
    e === void 0 && (e = !0),
    i === void 0 && (i = .5);
    const r = this;
    if (r.destroyed)
        return;
    typeof n > "u" && (n = r.params.speed);
    let s = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, s)
      , l = a + Math.floor((s - a) / r.params.slidesPerGroup)
      , o = r.rtlTranslate ? r.translate : -r.translate;
    if (o >= r.snapGrid[l]) {
        const d = r.snapGrid[l]
          , u = r.snapGrid[l + 1];
        o - d > (u - d) * i && (s += r.params.slidesPerGroup)
    } else {
        const d = r.snapGrid[l - 1]
          , u = r.snapGrid[l];
        o - d <= (u - d) * i && (s -= r.params.slidesPerGroup)
    }
    return s = Math.max(s, 0),
    s = Math.min(s, r.slidesGrid.length - 1),
    r.slideTo(s, n, e, t)
}
function li() {
    const n = this;
    if (n.destroyed)
        return;
    const {params: e, slidesEl: t} = n
      , i = e.slidesPerView === "auto" ? n.slidesPerViewDynamic() : e.slidesPerView;
    let r = n.clickedIndex, s;
    const a = n.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (n.animating)
            return;
        s = parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        e.centeredSlides ? r < n.loopedSlides - i / 2 || r > n.slides.length - n.loopedSlides + i / 2 ? (n.loopFix(),
        r = n.getSlideIndex(ee(t, `${a}[data-swiper-slide-index="${s}"]`)[0]),
        je( () => {
            n.slideTo(r)
        }
        )) : n.slideTo(r) : r > n.slides.length - i ? (n.loopFix(),
        r = n.getSlideIndex(ee(t, `${a}[data-swiper-slide-index="${s}"]`)[0]),
        je( () => {
            n.slideTo(r)
        }
        )) : n.slideTo(r)
    } else
        n.slideTo(r)
}
var di = {
    slideTo: ni,
    slideToLoop: ii,
    slideNext: si,
    slidePrev: ri,
    slideReset: oi,
    slideToClosest: ai,
    slideToClickedSlide: li
};
function ci(n) {
    const e = this
      , {params: t, slidesEl: i} = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    const r = () => {
        ee(i, `.${t.slideClass}, swiper-slide`).forEach( (c, f) => {
            c.setAttribute("data-swiper-slide-index", f)
        }
        )
    }
      , s = e.grid && t.grid && t.grid.rows > 1
      , a = t.slidesPerGroup * (s ? t.grid.rows : 1)
      , l = e.slides.length % a !== 0
      , o = s && e.slides.length % t.grid.rows !== 0
      , d = u => {
        for (let c = 0; c < u; c += 1) {
            const f = e.isElement ? We("swiper-slide", [t.slideBlankClass]) : We("div", [t.slideClass, t.slideBlankClass]);
            e.slidesEl.append(f)
        }
    }
    ;
    if (l) {
        if (t.loopAddBlankSlides) {
            const u = a - e.slides.length % a;
            d(u),
            e.recalcSlides(),
            e.updateSlides()
        } else
            Ie("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r()
    } else if (o) {
        if (t.loopAddBlankSlides) {
            const u = t.grid.rows - e.slides.length % t.grid.rows;
            d(u),
            e.recalcSlides(),
            e.updateSlides()
        } else
            Ie("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r()
    } else
        r();
    e.loopFix({
        slideRealIndex: n,
        direction: t.centeredSlides ? void 0 : "next"
    })
}
function ui(n) {
    let {slideRealIndex: e, slideTo: t=!0, direction: i, setTranslate: r, activeSlideIndex: s, byController: a, byMousewheel: l} = n === void 0 ? {} : n;
    const o = this;
    if (!o.params.loop)
        return;
    o.emit("beforeLoopFix");
    const {slides: d, allowSlidePrev: u, allowSlideNext: c, slidesEl: f, params: p} = o
      , {centeredSlides: m} = p;
    if (o.allowSlidePrev = !0,
    o.allowSlideNext = !0,
    o.virtual && p.virtual.enabled) {
        t && (!p.centeredSlides && o.snapIndex === 0 ? o.slideTo(o.virtual.slides.length, 0, !1, !0) : p.centeredSlides && o.snapIndex < p.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
        o.allowSlidePrev = u,
        o.allowSlideNext = c,
        o.emit("loopFix");
        return
    }
    let g = p.slidesPerView;
    g === "auto" ? g = o.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(p.slidesPerView, 10)),
    m && g % 2 === 0 && (g = g + 1));
    const w = p.slidesPerGroupAuto ? g : p.slidesPerGroup;
    let h = w;
    h % w !== 0 && (h += w - h % w),
    h += p.loopAdditionalSlides,
    o.loopedSlides = h;
    const S = o.grid && p.grid && p.grid.rows > 1;
    d.length < g + h ? Ie("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : S && p.grid.fill === "row" && Ie("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const v = []
      , b = [];
    let T = o.activeIndex;
    typeof s > "u" ? s = o.getSlideIndex(d.filter(P => P.classList.contains(p.slideActiveClass))[0]) : T = s;
    const E = i === "next" || !i
      , L = i === "prev" || !i;
    let M = 0
      , O = 0;
    const y = S ? Math.ceil(d.length / p.grid.rows) : d.length
      , C = (S ? d[s].column : s) + (m && typeof r > "u" ? -g / 2 + .5 : 0);
    if (C < h) {
        M = Math.max(h - C, w);
        for (let P = 0; P < h - C; P += 1) {
            const A = P - Math.floor(P / y) * y;
            if (S) {
                const D = y - A - 1;
                for (let F = d.length - 1; F >= 0; F -= 1)
                    d[F].column === D && v.push(F)
            } else
                v.push(y - A - 1)
        }
    } else if (C + g > y - h) {
        O = Math.max(C - (y - h * 2), w);
        for (let P = 0; P < O; P += 1) {
            const A = P - Math.floor(P / y) * y;
            S ? d.forEach( (D, F) => {
                D.column === A && b.push(F)
            }
            ) : b.push(A)
        }
    }
    if (o.__preventObserver__ = !0,
    requestAnimationFrame( () => {
        o.__preventObserver__ = !1
    }
    ),
    L && v.forEach(P => {
        d[P].swiperLoopMoveDOM = !0,
        f.prepend(d[P]),
        d[P].swiperLoopMoveDOM = !1
    }
    ),
    E && b.forEach(P => {
        d[P].swiperLoopMoveDOM = !0,
        f.append(d[P]),
        d[P].swiperLoopMoveDOM = !1
    }
    ),
    o.recalcSlides(),
    p.slidesPerView === "auto" ? o.updateSlides() : S && (v.length > 0 && L || b.length > 0 && E) && o.slides.forEach( (P, A) => {
        o.grid.updateSlide(A, P, o.slides)
    }
    ),
    p.watchSlidesProgress && o.updateSlidesOffset(),
    t) {
        if (v.length > 0 && L) {
            if (typeof e > "u") {
                const P = o.slidesGrid[T]
                  , D = o.slidesGrid[T + M] - P;
                l ? o.setTranslate(o.translate - D) : (o.slideTo(T + Math.ceil(M), 0, !1, !0),
                r && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - D,
                o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - D))
            } else if (r) {
                const P = S ? v.length / p.grid.rows : v.length;
                o.slideTo(o.activeIndex + P, 0, !1, !0),
                o.touchEventsData.currentTranslate = o.translate
            }
        } else if (b.length > 0 && E)
            if (typeof e > "u") {
                const P = o.slidesGrid[T]
                  , D = o.slidesGrid[T - O] - P;
                l ? o.setTranslate(o.translate - D) : (o.slideTo(T - O, 0, !1, !0),
                r && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - D,
                o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - D))
            } else {
                const P = S ? b.length / p.grid.rows : b.length;
                o.slideTo(o.activeIndex - P, 0, !1, !0)
            }
    }
    if (o.allowSlidePrev = u,
    o.allowSlideNext = c,
    o.controller && o.controller.control && !a) {
        const P = {
            slideRealIndex: e,
            direction: i,
            setTranslate: r,
            activeSlideIndex: s,
            byController: !0
        };
        Array.isArray(o.controller.control) ? o.controller.control.forEach(A => {
            !A.destroyed && A.params.loop && A.loopFix({
                ...P,
                slideTo: A.params.slidesPerView === p.slidesPerView ? t : !1
            })
        }
        ) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
            ...P,
            slideTo: o.controller.control.params.slidesPerView === p.slidesPerView ? t : !1
        })
    }
    o.emit("loopFix")
}
function fi() {
    const n = this
      , {params: e, slidesEl: t} = n;
    if (!e.loop || n.virtual && n.params.virtual.enabled)
        return;
    n.recalcSlides();
    const i = [];
    n.slides.forEach(r => {
        const s = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
        i[s] = r
    }
    ),
    n.slides.forEach(r => {
        r.removeAttribute("data-swiper-slide-index")
    }
    ),
    i.forEach(r => {
        t.append(r)
    }
    ),
    n.recalcSlides(),
    n.slideTo(n.realIndex, 0)
}
var pi = {
    loopCreate: ci,
    loopFix: ui,
    loopDestroy: fi
};
function mi(n) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
        return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
    t.style.cursor = "move",
    t.style.cursor = n ? "grabbing" : "grab",
    e.isElement && requestAnimationFrame( () => {
        e.__preventObserver__ = !1
    }
    )
}
function hi() {
    const n = this;
    n.params.watchOverflow && n.isLocked || n.params.cssMode || (n.isElement && (n.__preventObserver__ = !0),
    n[n.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    n.isElement && requestAnimationFrame( () => {
        n.__preventObserver__ = !1
    }
    ))
}
var gi = {
    setGrabCursor: mi,
    unsetGrabCursor: hi
};
function vi(n, e) {
    e === void 0 && (e = this);
    function t(i) {
        if (!i || i === ue() || i === $())
            return null;
        i.assignedSlot && (i = i.assignedSlot);
        const r = i.closest(n);
        return !r && !i.getRootNode ? null : r || t(i.getRootNode().host)
    }
    return t(e)
}
function mt(n, e, t) {
    const i = $()
      , {params: r} = n
      , s = r.edgeSwipeDetection
      , a = r.edgeSwipeThreshold;
    return s && (t <= a || t >= i.innerWidth - a) ? s === "prevent" ? (e.preventDefault(),
    !0) : !1 : !0
}
function wi(n) {
    const e = this
      , t = ue();
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    const r = e.touchEventsData;
    if (i.type === "pointerdown") {
        if (r.pointerId !== null && r.pointerId !== i.pointerId)
            return;
        r.pointerId = i.pointerId
    } else
        i.type === "touchstart" && i.targetTouches.length === 1 && (r.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
        mt(e, i, i.targetTouches[0].pageX);
        return
    }
    const {params: s, touches: a, enabled: l} = e;
    if (!l || !s.simulateTouch && i.pointerType === "mouse" || e.animating && s.preventInteractionOnTransition)
        return;
    !e.animating && s.cssMode && s.loop && e.loopFix();
    let o = i.target;
    if (s.touchEventsTarget === "wrapper" && !En(o, e.wrapperEl) || "which"in i && i.which === 3 || "button"in i && i.button > 0 || r.isTouched && r.isMoved)
        return;
    const d = !!s.noSwipingClass && s.noSwipingClass !== ""
      , u = i.composedPath ? i.composedPath() : i.path;
    d && i.target && i.target.shadowRoot && u && (o = u[0]);
    const c = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`
      , f = !!(i.target && i.target.shadowRoot);
    if (s.noSwiping && (f ? vi(c, o) : o.closest(c))) {
        e.allowClick = !0;
        return
    }
    if (s.swipeHandler && !o.closest(s.swipeHandler))
        return;
    a.currentX = i.pageX,
    a.currentY = i.pageY;
    const p = a.currentX
      , m = a.currentY;
    if (!mt(e, i, p))
        return;
    Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    a.startX = p,
    a.startY = m,
    r.touchStartTime = Pe(),
    e.allowClick = !0,
    e.updateSize(),
    e.swipeDirection = void 0,
    s.threshold > 0 && (r.allowThresholdMove = !1);
    let g = !0;
    o.matches(r.focusableElements) && (g = !1,
    o.nodeName === "SELECT" && (r.isTouched = !1)),
    t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== o && (i.pointerType === "mouse" || i.pointerType !== "mouse" && !o.matches(r.focusableElements)) && t.activeElement.blur();
    const w = g && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || w) && !o.isContentEditable && i.preventDefault(),
    s.freeMode && s.freeMode.enabled && e.freeMode && e.animating && !s.cssMode && e.freeMode.onTouchStart(),
    e.emit("touchStart", i)
}
function Si(n) {
    const e = ue()
      , t = this
      , i = t.touchEventsData
      , {params: r, touches: s, rtlTranslate: a, enabled: l} = t;
    if (!l || !r.simulateTouch && n.pointerType === "mouse")
        return;
    let o = n;
    if (o.originalEvent && (o = o.originalEvent),
    o.type === "pointermove" && (i.touchId !== null || o.pointerId !== i.pointerId))
        return;
    let d;
    if (o.type === "touchmove") {
        if (d = [...o.changedTouches].filter(T => T.identifier === i.touchId)[0],
        !d || d.identifier !== i.touchId)
            return
    } else
        d = o;
    if (!i.isTouched) {
        i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", o);
        return
    }
    const u = d.pageX
      , c = d.pageY;
    if (o.preventedByNestedSwiper) {
        s.startX = u,
        s.startY = c;
        return
    }
    if (!t.allowTouchMove) {
        o.target.matches(i.focusableElements) || (t.allowClick = !1),
        i.isTouched && (Object.assign(s, {
            startX: u,
            startY: c,
            currentX: u,
            currentY: c
        }),
        i.touchStartTime = Pe());
        return
    }
    if (r.touchReleaseOnEdges && !r.loop) {
        if (t.isVertical()) {
            if (c < s.startY && t.translate <= t.maxTranslate() || c > s.startY && t.translate >= t.minTranslate()) {
                i.isTouched = !1,
                i.isMoved = !1;
                return
            }
        } else if (u < s.startX && t.translate <= t.maxTranslate() || u > s.startX && t.translate >= t.minTranslate())
            return
    }
    if (e.activeElement && e.activeElement.matches(i.focusableElements) && e.activeElement !== o.target && o.pointerType !== "mouse" && e.activeElement.blur(),
    e.activeElement && o.target === e.activeElement && o.target.matches(i.focusableElements)) {
        i.isMoved = !0,
        t.allowClick = !1;
        return
    }
    i.allowTouchCallbacks && t.emit("touchMove", o),
    s.previousX = s.currentX,
    s.previousY = s.currentY,
    s.currentX = u,
    s.currentY = c;
    const f = s.currentX - s.startX
      , p = s.currentY - s.startY;
    if (t.params.threshold && Math.sqrt(f ** 2 + p ** 2) < t.params.threshold)
        return;
    if (typeof i.isScrolling > "u") {
        let T;
        t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? i.isScrolling = !1 : f * f + p * p >= 25 && (T = Math.atan2(Math.abs(p), Math.abs(f)) * 180 / Math.PI,
        i.isScrolling = t.isHorizontal() ? T > r.touchAngle : 90 - T > r.touchAngle)
    }
    if (i.isScrolling && t.emit("touchMoveOpposite", o),
    typeof i.startMoving > "u" && (s.currentX !== s.startX || s.currentY !== s.startY) && (i.startMoving = !0),
    i.isScrolling || o.type === "touchmove" && i.preventTouchMoveFromPointerMove) {
        i.isTouched = !1;
        return
    }
    if (!i.startMoving)
        return;
    t.allowClick = !1,
    !r.cssMode && o.cancelable && o.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && o.stopPropagation();
    let m = t.isHorizontal() ? f : p
      , g = t.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
    r.oneWayMovement && (m = Math.abs(m) * (a ? 1 : -1),
    g = Math.abs(g) * (a ? 1 : -1)),
    s.diff = m,
    m *= r.touchRatio,
    a && (m = -m,
    g = -g);
    const w = t.touchesDirection;
    t.swipeDirection = m > 0 ? "prev" : "next",
    t.touchesDirection = g > 0 ? "prev" : "next";
    const h = t.params.loop && !r.cssMode
      , S = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!i.isMoved) {
        if (h && S && t.loopFix({
            direction: t.swipeDirection
        }),
        i.startTranslate = t.getTranslate(),
        t.setTransition(0),
        t.animating) {
            const T = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0,
                detail: {
                    bySwiperTouchMove: !0
                }
            });
            t.wrapperEl.dispatchEvent(T)
        }
        i.allowMomentumBounce = !1,
        r.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
        t.emit("sliderFirstMove", o)
    }
    if (new Date().getTime(),
    i.isMoved && i.allowThresholdMove && w !== t.touchesDirection && h && S && Math.abs(m) >= 1) {
        Object.assign(s, {
            startX: u,
            startY: c,
            currentX: u,
            currentY: c,
            startTranslate: i.currentTranslate
        }),
        i.loopSwapReset = !0,
        i.startTranslate = i.currentTranslate;
        return
    }
    t.emit("sliderMove", o),
    i.isMoved = !0,
    i.currentTranslate = m + i.startTranslate;
    let v = !0
      , b = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (b = 0),
    m > 0 ? (h && S && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] - (r.slidesPerView !== "auto" && t.slides.length - r.slidesPerView >= 2 ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween : 0) - t.params.spaceBetween : t.minTranslate()) && t.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    i.currentTranslate > t.minTranslate() && (v = !1,
    r.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + m) ** b))) : m < 0 && (h && S && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween + (r.slidesPerView !== "auto" && t.slides.length - r.slidesPerView >= 2 ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween : 0) : t.maxTranslate()) && t.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: t.slides.length - (r.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
    }),
    i.currentTranslate < t.maxTranslate() && (v = !1,
    r.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - m) ** b))),
    v && (o.preventedByNestedSwiper = !0),
    !t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate),
    r.threshold > 0)
        if (Math.abs(m) > r.threshold || i.allowThresholdMove) {
            if (!i.allowThresholdMove) {
                i.allowThresholdMove = !0,
                s.startX = s.currentX,
                s.startY = s.currentY,
                i.currentTranslate = i.startTranslate,
                s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
                return
            }
        } else {
            i.currentTranslate = i.startTranslate;
            return
        }
    !r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && t.freeMode || r.watchSlidesProgress) && (t.updateActiveIndex(),
    t.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
    t.updateProgress(i.currentTranslate),
    t.setTranslate(i.currentTranslate))
}
function Ti(n) {
    const e = this
      , t = e.touchEventsData;
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    let r;
    if (i.type === "touchend" || i.type === "touchcancel") {
        if (r = [...i.changedTouches].filter(T => T.identifier === t.touchId)[0],
        !r || r.identifier !== t.touchId)
            return
    } else {
        if (t.touchId !== null || i.pointerId !== t.pointerId)
            return;
        r = i
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (e.browser.isSafari || e.browser.isWebView)))
        return;
    t.pointerId = null,
    t.touchId = null;
    const {params: a, touches: l, rtlTranslate: o, slidesGrid: d, enabled: u} = e;
    if (!u || !a.simulateTouch && i.pointerType === "mouse")
        return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", i),
    t.allowTouchCallbacks = !1,
    !t.isTouched) {
        t.isMoved && a.grabCursor && e.setGrabCursor(!1),
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    a.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const c = Pe()
      , f = c - t.touchStartTime;
    if (e.allowClick) {
        const T = i.path || i.composedPath && i.composedPath();
        e.updateClickedSlide(T && T[0] || i.target, T),
        e.emit("tap click", i),
        f < 300 && c - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", i)
    }
    if (t.lastClickTime = Pe(),
    je( () => {
        e.destroyed || (e.allowClick = !0)
    }
    ),
    !t.isTouched || !t.isMoved || !e.swipeDirection || l.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
        t.isTouched = !1,
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    t.isTouched = !1,
    t.isMoved = !1,
    t.startMoving = !1;
    let p;
    if (a.followFinger ? p = o ? e.translate : -e.translate : p = -t.currentTranslate,
    a.cssMode)
        return;
    if (a.freeMode && a.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: p
        });
        return
    }
    const m = p >= -e.maxTranslate() && !e.params.loop;
    let g = 0
      , w = e.slidesSizesGrid[0];
    for (let T = 0; T < d.length; T += T < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
        const E = T < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        typeof d[T + E] < "u" ? (m || p >= d[T] && p < d[T + E]) && (g = T,
        w = d[T + E] - d[T]) : (m || p >= d[T]) && (g = T,
        w = d[d.length - 1] - d[d.length - 2])
    }
    let h = null
      , S = null;
    a.rewind && (e.isBeginning ? S = a.virtual && a.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (h = 0));
    const v = (p - d[g]) / w
      , b = g < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (f > a.longSwipesMs) {
        if (!a.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (v >= a.longSwipesRatio ? e.slideTo(a.rewind && e.isEnd ? h : g + b) : e.slideTo(g)),
        e.swipeDirection === "prev" && (v > 1 - a.longSwipesRatio ? e.slideTo(g + b) : S !== null && v < 0 && Math.abs(v) > a.longSwipesRatio ? e.slideTo(S) : e.slideTo(g))
    } else {
        if (!a.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl) ? i.target === e.navigation.nextEl ? e.slideTo(g + b) : e.slideTo(g) : (e.swipeDirection === "next" && e.slideTo(h !== null ? h : g + b),
        e.swipeDirection === "prev" && e.slideTo(S !== null ? S : g))
    }
}
function ht() {
    const n = this
      , {params: e, el: t} = n;
    if (t && t.offsetWidth === 0)
        return;
    e.breakpoints && n.setBreakpoint();
    const {allowSlideNext: i, allowSlidePrev: r, snapGrid: s} = n
      , a = n.virtual && n.params.virtual.enabled;
    n.allowSlideNext = !0,
    n.allowSlidePrev = !0,
    n.updateSize(),
    n.updateSlides(),
    n.updateSlidesClasses();
    const l = a && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && n.isEnd && !n.isBeginning && !n.params.centeredSlides && !l ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.params.loop && !a ? n.slideToLoop(n.realIndex, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0),
    n.autoplay && n.autoplay.running && n.autoplay.paused && (clearTimeout(n.autoplay.resizeTimeout),
    n.autoplay.resizeTimeout = setTimeout( () => {
        n.autoplay && n.autoplay.running && n.autoplay.paused && n.autoplay.resume()
    }
    , 500)),
    n.allowSlidePrev = r,
    n.allowSlideNext = i,
    n.params.watchOverflow && s !== n.snapGrid && n.checkOverflow()
}
function yi(n) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && n.preventDefault(),
    e.params.preventClicksPropagation && e.animating && (n.stopPropagation(),
    n.stopImmediatePropagation())))
}
function bi() {
    const n = this
      , {wrapperEl: e, rtlTranslate: t, enabled: i} = n;
    if (!i)
        return;
    n.previousTranslate = n.translate,
    n.isHorizontal() ? n.translate = -e.scrollLeft : n.translate = -e.scrollTop,
    n.translate === 0 && (n.translate = 0),
    n.updateActiveIndex(),
    n.updateSlidesClasses();
    let r;
    const s = n.maxTranslate() - n.minTranslate();
    s === 0 ? r = 0 : r = (n.translate - n.minTranslate()) / s,
    r !== n.progress && n.updateProgress(t ? -n.translate : n.translate),
    n.emit("setTranslate", n.translate, !1)
}
function xi(n) {
    const e = this;
    Ee(e, n.target),
    !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
function Ei() {
    const n = this;
    n.documentTouchHandlerProceeded || (n.documentTouchHandlerProceeded = !0,
    n.params.touchReleaseOnEdges && (n.el.style.touchAction = "auto"))
}
const Lt = (n, e) => {
    const t = ue()
      , {params: i, el: r, wrapperEl: s, device: a} = n
      , l = !!i.nested
      , o = e === "on" ? "addEventListener" : "removeEventListener"
      , d = e;
    !r || typeof r == "string" || (t[o]("touchstart", n.onDocumentTouchStart, {
        passive: !1,
        capture: l
    }),
    r[o]("touchstart", n.onTouchStart, {
        passive: !1
    }),
    r[o]("pointerdown", n.onTouchStart, {
        passive: !1
    }),
    t[o]("touchmove", n.onTouchMove, {
        passive: !1,
        capture: l
    }),
    t[o]("pointermove", n.onTouchMove, {
        passive: !1,
        capture: l
    }),
    t[o]("touchend", n.onTouchEnd, {
        passive: !0
    }),
    t[o]("pointerup", n.onTouchEnd, {
        passive: !0
    }),
    t[o]("pointercancel", n.onTouchEnd, {
        passive: !0
    }),
    t[o]("touchcancel", n.onTouchEnd, {
        passive: !0
    }),
    t[o]("pointerout", n.onTouchEnd, {
        passive: !0
    }),
    t[o]("pointerleave", n.onTouchEnd, {
        passive: !0
    }),
    t[o]("contextmenu", n.onTouchEnd, {
        passive: !0
    }),
    (i.preventClicks || i.preventClicksPropagation) && r[o]("click", n.onClick, !0),
    i.cssMode && s[o]("scroll", n.onScroll),
    i.updateOnWindowResize ? n[d](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ht, !0) : n[d]("observerUpdate", ht, !0),
    r[o]("load", n.onLoad, {
        capture: !0
    }))
}
;
function Mi() {
    const n = this
      , {params: e} = n;
    n.onTouchStart = wi.bind(n),
    n.onTouchMove = Si.bind(n),
    n.onTouchEnd = Ti.bind(n),
    n.onDocumentTouchStart = Ei.bind(n),
    e.cssMode && (n.onScroll = bi.bind(n)),
    n.onClick = yi.bind(n),
    n.onLoad = xi.bind(n),
    Lt(n, "on")
}
function Pi() {
    Lt(this, "off")
}
var Ii = {
    attachEvents: Mi,
    detachEvents: Pi
};
const gt = (n, e) => n.grid && e.grid && e.grid.rows > 1;
function Li() {
    const n = this
      , {realIndex: e, initialized: t, params: i, el: r} = n
      , s = i.breakpoints;
    if (!s || s && Object.keys(s).length === 0)
        return;
    const a = n.getBreakpoint(s, n.params.breakpointsBase, n.el);
    if (!a || n.currentBreakpoint === a)
        return;
    const o = (a in s ? s[a] : void 0) || n.originalParams
      , d = gt(n, i)
      , u = gt(n, o)
      , c = n.params.grabCursor
      , f = o.grabCursor
      , p = i.enabled;
    d && !u ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`),
    n.emitContainerClasses()) : !d && u && (r.classList.add(`${i.containerModifierClass}grid`),
    (o.grid.fill && o.grid.fill === "column" || !o.grid.fill && i.grid.fill === "column") && r.classList.add(`${i.containerModifierClass}grid-column`),
    n.emitContainerClasses()),
    c && !f ? n.unsetGrabCursor() : !c && f && n.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach(v => {
        if (typeof o[v] > "u")
            return;
        const b = i[v] && i[v].enabled
          , T = o[v] && o[v].enabled;
        b && !T && n[v].disable(),
        !b && T && n[v].enable()
    }
    );
    const m = o.direction && o.direction !== i.direction
      , g = i.loop && (o.slidesPerView !== i.slidesPerView || m)
      , w = i.loop;
    m && t && n.changeDirection(),
    H(n.params, o);
    const h = n.params.enabled
      , S = n.params.loop;
    Object.assign(n, {
        allowTouchMove: n.params.allowTouchMove,
        allowSlideNext: n.params.allowSlideNext,
        allowSlidePrev: n.params.allowSlidePrev
    }),
    p && !h ? n.disable() : !p && h && n.enable(),
    n.currentBreakpoint = a,
    n.emit("_beforeBreakpoint", o),
    t && (g ? (n.loopDestroy(),
    n.loopCreate(e),
    n.updateSlides()) : !w && S ? (n.loopCreate(e),
    n.updateSlides()) : w && !S && n.loopDestroy()),
    n.emit("breakpoint", o)
}
function Ci(n, e, t) {
    if (e === void 0 && (e = "window"),
    !n || e === "container" && !t)
        return;
    let i = !1;
    const r = $()
      , s = e === "window" ? r.innerHeight : t.clientHeight
      , a = Object.keys(n).map(l => {
        if (typeof l == "string" && l.indexOf("@") === 0) {
            const o = parseFloat(l.substr(1));
            return {
                value: s * o,
                point: l
            }
        }
        return {
            value: l,
            point: l
        }
    }
    );
    a.sort( (l, o) => parseInt(l.value, 10) - parseInt(o.value, 10));
    for (let l = 0; l < a.length; l += 1) {
        const {point: o, value: d} = a[l];
        e === "window" ? r.matchMedia(`(min-width: ${d}px)`).matches && (i = o) : d <= t.clientWidth && (i = o)
    }
    return i || "max"
}
var Oi = {
    setBreakpoint: Li,
    getBreakpoint: Ci
};
function Ai(n, e) {
    const t = [];
    return n.forEach(i => {
        typeof i == "object" ? Object.keys(i).forEach(r => {
            i[r] && t.push(e + r)
        }
        ) : typeof i == "string" && t.push(e + i)
    }
    ),
    t
}
function zi() {
    const n = this
      , {classNames: e, params: t, rtl: i, el: r, device: s} = n
      , a = Ai(["initialized", t.direction, {
        "free-mode": n.params.freeMode && t.freeMode.enabled
    }, {
        autoheight: t.autoHeight
    }, {
        rtl: i
    }, {
        grid: t.grid && t.grid.rows > 1
    }, {
        "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
    }, {
        android: s.android
    }, {
        ios: s.ios
    }, {
        "css-mode": t.cssMode
    }, {
        centered: t.cssMode && t.centeredSlides
    }, {
        "watch-progress": t.watchSlidesProgress
    }], t.containerModifierClass);
    e.push(...a),
    r.classList.add(...e),
    n.emitContainerClasses()
}
function Di() {
    const n = this
      , {el: e, classNames: t} = n;
    !e || typeof e == "string" || (e.classList.remove(...t),
    n.emitContainerClasses())
}
var ki = {
    addClasses: zi,
    removeClasses: Di
};
function Gi() {
    const n = this
      , {isLocked: e, params: t} = n
      , {slidesOffsetBefore: i} = t;
    if (i) {
        const r = n.slides.length - 1
          , s = n.slidesGrid[r] + n.slidesSizesGrid[r] + i * 2;
        n.isLocked = n.size > s
    } else
        n.isLocked = n.snapGrid.length === 1;
    t.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked),
    t.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked),
    e && e !== n.isLocked && (n.isEnd = !1),
    e !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock")
}
var Vi = {
    checkOverflow: Gi
}
  , vt = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function Fi(n, e) {
    return function(i) {
        i === void 0 && (i = {});
        const r = Object.keys(i)[0]
          , s = i[r];
        if (typeof s != "object" || s === null) {
            H(e, i);
            return
        }
        if (n[r] === !0 && (n[r] = {
            enabled: !0
        }),
        r === "navigation" && n[r] && n[r].enabled && !n[r].prevEl && !n[r].nextEl && (n[r].auto = !0),
        ["pagination", "scrollbar"].indexOf(r) >= 0 && n[r] && n[r].enabled && !n[r].el && (n[r].auto = !0),
        !(r in n && "enabled"in s)) {
            H(e, i);
            return
        }
        typeof n[r] == "object" && !("enabled"in n[r]) && (n[r].enabled = !0),
        n[r] || (n[r] = {
            enabled: !1
        }),
        H(e, i)
    }
}
const _e = {
    eventsEmitter: kn,
    update: Wn,
    translate: Qn,
    transition: ti,
    slide: di,
    loop: pi,
    grabCursor: gi,
    events: Ii,
    breakpoints: Oi,
    checkOverflow: Vi,
    classes: ki
}
  , He = {};
class Y {
    constructor() {
        let e, t;
        for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
            r[s] = arguments[s];
        r.length === 1 && r[0].constructor && Object.prototype.toString.call(r[0]).slice(8, -1) === "Object" ? t = r[0] : [e,t] = r,
        t || (t = {}),
        t = H({}, t),
        e && !t.el && (t.el = e);
        const a = ue();
        if (t.el && typeof t.el == "string" && a.querySelectorAll(t.el).length > 1) {
            const u = [];
            return a.querySelectorAll(t.el).forEach(c => {
                const f = H({}, t, {
                    el: c
                });
                u.push(new Y(f))
            }
            ),
            u
        }
        const l = this;
        l.__swiper__ = !0,
        l.support = Mt(),
        l.device = Pt({
            userAgent: t.userAgent
        }),
        l.browser = An(),
        l.eventsListeners = {},
        l.eventsAnyListeners = [],
        l.modules = [...l.__modules__],
        t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
        const o = {};
        l.modules.forEach(u => {
            u({
                params: t,
                swiper: l,
                extendParams: Fi(t, o),
                on: l.on.bind(l),
                once: l.once.bind(l),
                off: l.off.bind(l),
                emit: l.emit.bind(l)
            })
        }
        );
        const d = H({}, vt, o);
        return l.params = H({}, d, He, t),
        l.originalParams = H({}, l.params),
        l.passedParams = H({}, t),
        l.params && l.params.on && Object.keys(l.params.on).forEach(u => {
            l.on(u, l.params.on[u])
        }
        ),
        l.params && l.params.onAny && l.onAny(l.params.onAny),
        Object.assign(l, {
            enabled: l.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return l.params.direction === "horizontal"
            },
            isVertical() {
                return l.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: l.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        l.emit("_swiper"),
        l.params.init && l.init(),
        l
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e]
    }
    getSlideIndex(e) {
        const {slidesEl: t, params: i} = this
          , r = ee(t, `.${i.slideClass}, swiper-slide`)
          , s = ut(r[0]);
        return ut(e) - s
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(t => t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this
          , {slidesEl: t, params: i} = e;
        e.slides = ee(t, `.${i.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0,
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1,
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"))
    }
    setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const r = i.minTranslate()
          , a = (i.maxTranslate() - r) * e + r;
        i.translateTo(a, typeof t > "u" ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = e.el.className.split(" ").filter(i => i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(i => i.indexOf("swiper-slide") === 0 || i.indexOf(t.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = [];
        e.slides.forEach(i => {
            const r = e.getSlideClasses(i);
            t.push({
                slideEl: i,
                classNames: r
            }),
            e.emit("_slideClass", i, r)
        }
        ),
        e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e, t) {
        e === void 0 && (e = "current"),
        t === void 0 && (t = !1);
        const i = this
          , {params: r, slides: s, slidesGrid: a, slidesSizesGrid: l, size: o, activeIndex: d} = i;
        let u = 1;
        if (typeof r.slidesPerView == "number")
            return r.slidesPerView;
        if (r.centeredSlides) {
            let c = s[d] ? Math.ceil(s[d].swiperSlideSize) : 0, f;
            for (let p = d + 1; p < s.length; p += 1)
                s[p] && !f && (c += Math.ceil(s[p].swiperSlideSize),
                u += 1,
                c > o && (f = !0));
            for (let p = d - 1; p >= 0; p -= 1)
                s[p] && !f && (c += s[p].swiperSlideSize,
                u += 1,
                c > o && (f = !0))
        } else if (e === "current")
            for (let c = d + 1; c < s.length; c += 1)
                (t ? a[c] + l[c] - a[d] < o : a[c] - a[d] < o) && (u += 1);
        else
            for (let c = d - 1; c >= 0; c -= 1)
                a[d] - a[c] < o && (u += 1);
        return u
    }
    update() {
        const e = this;
        if (!e || e.destroyed)
            return;
        const {snapGrid: t, params: i} = e;
        i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach(a => {
            a.complete && Ee(e, a)
        }
        ),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
        function r() {
            const a = e.rtlTranslate ? e.translate * -1 : e.translate
              , l = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
            e.setTranslate(l),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        let s;
        if (i.freeMode && i.freeMode.enabled && !i.cssMode)
            r(),
            i.autoHeight && e.updateAutoHeight();
        else {
            if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
                const a = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
                s = e.slideTo(a.length - 1, 0, !1, !0)
            } else
                s = e.slideTo(e.activeIndex, 0, !1, !0);
            s || r()
        }
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update")
    }
    changeDirection(e, t) {
        t === void 0 && (t = !0);
        const i = this
          , r = i.params.direction;
        return e || (e = r === "horizontal" ? "vertical" : "horizontal"),
        e === r || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
        i.el.classList.add(`${i.params.containerModifierClass}${e}`),
        i.emitContainerClasses(),
        i.params.direction = e,
        i.slides.forEach(s => {
            e === "vertical" ? s.style.width = "" : s.style.height = ""
        }
        ),
        i.emit("changeDirection"),
        t && i.update()),
        i
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl",
        t.rtlTranslate = t.params.direction === "horizontal" && t.rtl,
        t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "ltr"),
        t.update())
    }
    mount(e) {
        const t = this;
        if (t.mounted)
            return !0;
        let i = e || t.params.el;
        if (typeof i == "string" && (i = document.querySelector(i)),
        !i)
            return !1;
        i.swiper = t,
        i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
        const r = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let a = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(r()) : ee(i, r())[0];
        return !a && t.params.createElements && (a = We("div", t.params.wrapperClass),
        i.append(a),
        ee(i, `.${t.params.slideClass}`).forEach(l => {
            a.append(l)
        }
        )),
        Object.assign(t, {
            el: i,
            wrapperEl: a,
            slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : a,
            hostEl: t.isElement ? i.parentNode.host : i,
            mounted: !0,
            rtl: i.dir.toLowerCase() === "rtl" || ae(i, "direction") === "rtl",
            rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || ae(i, "direction") === "rtl"),
            wrongRTL: ae(a, "display") === "-webkit-box"
        }),
        !0
    }
    init(e) {
        const t = this;
        if (t.initialized || t.mount(e) === !1)
            return t;
        t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
        const r = [...t.el.querySelectorAll('[loading="lazy"]')];
        return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        r.forEach(s => {
            s.complete ? Ee(t, s) : s.addEventListener("load", a => {
                Ee(t, a.target)
            }
            )
        }
        ),
        qe(t),
        t.initialized = !0,
        qe(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
    }
    destroy(e, t) {
        e === void 0 && (e = !0),
        t === void 0 && (t = !0);
        const i = this
          , {params: r, el: s, wrapperEl: a, slides: l} = i;
        return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"),
        i.initialized = !1,
        i.detachEvents(),
        r.loop && i.loopDestroy(),
        t && (i.removeClasses(),
        s && typeof s != "string" && s.removeAttribute("style"),
        a && a.removeAttribute("style"),
        l && l.length && l.forEach(o => {
            o.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass),
            o.removeAttribute("style"),
            o.removeAttribute("data-swiper-slide-index")
        }
        )),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach(o => {
            i.off(o)
        }
        ),
        e !== !1 && (i.el && typeof i.el != "string" && (i.el.swiper = null),
        Tn(i)),
        i.destroyed = !0),
        null
    }
    static extendDefaults(e) {
        H(He, e)
    }
    static get extendedDefaults() {
        return He
    }
    static get defaults() {
        return vt
    }
    static installModule(e) {
        Y.prototype.__modules__ || (Y.prototype.__modules__ = []);
        const t = Y.prototype.__modules__;
        typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(t => Y.installModule(t)),
        Y) : (Y.installModule(e),
        Y)
    }
}
Object.keys(_e).forEach(n => {
    Object.keys(_e[n]).forEach(e => {
        Y.prototype[e] = _e[n][e]
    }
    )
}
);
Y.use([zn, Dn]);
export {bt as A, Y as S, In as a, ft as b, We as c, vt as d, ee as e, ut as f, Ni as m, yt as u};
