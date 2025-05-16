import {g as Q, R as y, r as a, a as U} from "./vendor-ui-CO2oigVm.js";
var B, G;
function ee() {
    return G || (G = 1,
    B = function t(e, n) {
        if (e === n)
            return !0;
        if (e && n && typeof e == "object" && typeof n == "object") {
            if (e.constructor !== n.constructor)
                return !1;
            var o, r, i;
            if (Array.isArray(e)) {
                if (o = e.length,
                o != n.length)
                    return !1;
                for (r = o; r-- !== 0; )
                    if (!t(e[r], n[r]))
                        return !1;
                return !0
            }
            if (e.constructor === RegExp)
                return e.source === n.source && e.flags === n.flags;
            if (e.valueOf !== Object.prototype.valueOf)
                return e.valueOf() === n.valueOf();
            if (e.toString !== Object.prototype.toString)
                return e.toString() === n.toString();
            if (i = Object.keys(e),
            o = i.length,
            o !== Object.keys(n).length)
                return !1;
            for (r = o; r-- !== 0; )
                if (!Object.prototype.hasOwnProperty.call(n, i[r]))
                    return !1;
            for (r = o; r-- !== 0; ) {
                var s = i[r];
                if (!t(e[s], n[s]))
                    return !1
            }
            return !0
        }
        return e !== e && n !== n
    }
    ),
    B
}
var te = ee();
const ne = Q(te);
function x() {
    return x = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n)
                ({}).hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }
    ,
    x.apply(null, arguments)
}
function P(t, e) {
    if (t == null)
        return {};
    var n = {};
    for (var o in t)
        if ({}.hasOwnProperty.call(t, o)) {
            if (e.includes(o))
                continue;
            n[o] = t[o]
        }
    return n
}
function oe(t, e) {
    if (typeof t != "object" || !t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var o = n.call(t, e);
        if (typeof o != "object")
            return o;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(t)
}
function re(t) {
    var e = oe(t, "string");
    return typeof e == "symbol" ? e : e + ""
}
const A = {
    NOT_LOADED: "NOT_LOADED",
    LOADING: "LOADING",
    LOADED: "LOADED",
    FAILED: "FAILED",
    AUTH_FAILURE: "AUTH_FAILURE"
}
  , ie = "https://maps.googleapis.com/maps/api/js";
class N {
    static async load(e, n) {
        var o;
        const r = e.libraries ? e.libraries.split(",") : []
          , i = this.serializeParams(e);
        this.listeners.push(n),
        (o = window.google) != null && (o = o.maps) != null && o.importLibrary ? (this.serializedApiParams || (this.loadingStatus = A.LOADED),
        this.notifyLoadingStatusListeners()) : (this.serializedApiParams = i,
        this.initImportLibrary(e)),
        this.serializedApiParams && this.serializedApiParams !== i && console.warn("[google-maps-api-loader] The maps API has already been loaded with different parameters and will not be loaded again. Refresh the page for new values to have effect.");
        const s = ["maps", ...r];
        await Promise.all(s.map(l => google.maps.importLibrary(l)))
    }
    static serializeParams(e) {
        return [e.v, e.key, e.language, e.region, e.authReferrerPolicy, e.solutionChannel].join("/")
    }
    static initImportLibrary(e) {
        if (window.google || (window.google = {}),
        window.google.maps || (window.google.maps = {}),
        window.google.maps.importLibrary) {
            console.error("[google-maps-api-loader-internal]: initImportLibrary must only be called once");
            return
        }
        let n = null;
        const o = () => n || (n = new Promise( (r, i) => {
            var s;
            const l = document.createElement("script")
              , d = new URLSearchParams;
            for (const [f,c] of Object.entries(e)) {
                const h = f.replace(/[A-Z]/g, g => "_" + g[0].toLowerCase());
                d.set(h, String(c))
            }
            d.set("loading", "async"),
            d.set("callback", "__googleMapsCallback__"),
            l.async = !0,
            l.src = ie + "?" + d.toString(),
            l.nonce = ((s = document.querySelector("script[nonce]")) == null ? void 0 : s.nonce) || "",
            l.onerror = () => {
                this.loadingStatus = A.FAILED,
                this.notifyLoadingStatusListeners(),
                i(new Error("The Google Maps JavaScript API could not load."))
            }
            ,
            window.__googleMapsCallback__ = () => {
                this.loadingStatus = A.LOADED,
                this.notifyLoadingStatusListeners(),
                r()
            }
            ,
            window.gm_authFailure = () => {
                this.loadingStatus = A.AUTH_FAILURE,
                this.notifyLoadingStatusListeners()
            }
            ,
            this.loadingStatus = A.LOADING,
            this.notifyLoadingStatusListeners(),
            document.head.append(l)
        }
        ),
        n);
        google.maps.importLibrary = r => o().then( () => google.maps.importLibrary(r))
    }
    static notifyLoadingStatusListeners() {
        for (const e of this.listeners)
            e(this.loadingStatus)
    }
}
N.loadingStatus = A.NOT_LOADED;
N.serializedApiParams = void 0;
N.listeners = [];
const se = ["onLoad", "onError", "apiKey", "version", "libraries"]
  , ae = ["children"]
  , le = "GMP_visgl_rgmlibrary_v1_default"
  , T = y.createContext(null);
function ue() {
    const [t,e] = a.useState({});
    return {
        mapInstances: t,
        addMapInstance: (i, s="default") => {
            e(l => x({}, l, {
                [s]: i
            }))
        }
        ,
        removeMapInstance: (i="default") => {
            e(s => P(s, [i].map(re)))
        }
        ,
        clearMapInstances: () => {
            e({})
        }
    }
}
function ce(t) {
    const {onLoad: e, onError: n, apiKey: o, version: r, libraries: i=[]} = t
      , s = P(t, se)
      , [l,d] = a.useState(N.loadingStatus)
      , [f,c] = a.useReducer( (u, m) => u[m.name] ? u : x({}, u, {
        [m.name]: m.value
    }), {})
      , h = a.useMemo( () => i == null ? void 0 : i.join(","), [i])
      , g = a.useMemo( () => JSON.stringify(x({
        apiKey: o,
        version: r
    }, s)), [o, r, s])
      , p = a.useCallback(async u => {
        var m;
        if (f[u])
            return f[u];
        if (!((m = google) != null && (m = m.maps) != null && m.importLibrary))
            throw new Error("[api-provider-internal] importLibrary was called before google.maps.importLibrary was defined.");
        const O = await window.google.maps.importLibrary(u);
        return c({
            name: u,
            value: O
        }),
        O
    }
    , [f]);
    return a.useEffect( () => {
        (async () => {
            try {
                const u = x({
                    key: o
                }, s);
                r && (u.v = r),
                (h == null ? void 0 : h.length) > 0 && (u.libraries = h),
                (u.channel === void 0 || u.channel < 0 || u.channel > 999) && delete u.channel,
                u.solutionChannel === void 0 ? u.solutionChannel = le : u.solutionChannel === "" && delete u.solutionChannel,
                await N.load(u, m => d(m));
                for (const m of ["core", "maps", ...i])
                    await p(m);
                e && e()
            } catch (u) {
                n ? n(u) : console.error("<ApiProvider> failed to load the Google Maps JavaScript API", u)
            }
        }
        )()
    }
    , [o, h, g]),
    {
        status: l,
        loadedLibraries: f,
        importLibrary: p
    }
}
const Ze = t => {
    const {children: e} = t
      , n = P(t, ae)
      , {mapInstances: o, addMapInstance: r, removeMapInstance: i, clearMapInstances: s} = ue()
      , {status: l, loadedLibraries: d, importLibrary: f} = ce(n)
      , c = a.useMemo( () => ({
        mapInstances: o,
        addMapInstance: r,
        removeMapInstance: i,
        clearMapInstances: s,
        status: l,
        loadedLibraries: d,
        importLibrary: f
    }), [o, r, i, s, l, d, f]);
    return y.createElement(T.Provider, {
        value: c
    }, e)
}
;
function de(t, e) {
    for (const n of pe) {
        const o = e[n]
          , r = W[n];
        a.useEffect( () => {
            if (!t || !o)
                return;
            const i = google.maps.event.addListener(t, r, s => {
                o(fe(r, t, s))
            }
            );
            return () => i.remove()
        }
        , [t, r, o])
    }
}
function fe(t, e, n) {
    const o = {
        type: t,
        map: e,
        detail: {},
        stoppable: !1,
        stop: () => {}
    };
    if (ge.includes(t)) {
        const i = o
          , s = e.getCenter()
          , l = e.getZoom()
          , d = e.getHeading() || 0
          , f = e.getTilt() || 0
          , c = e.getBounds();
        return (!s || !c || !Number.isFinite(l)) && console.warn("[createEvent] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),
        i.detail = {
            center: (s == null ? void 0 : s.toJSON()) || {
                lat: 0,
                lng: 0
            },
            zoom: l || 0,
            heading: d,
            tilt: f,
            bounds: (c == null ? void 0 : c.toJSON()) || {
                north: 90,
                east: 180,
                south: -90,
                west: -180
            }
        },
        i
    } else if (me.includes(t)) {
        var r;
        if (!n)
            throw new Error("[createEvent] mouse events must provide a srcEvent");
        const i = o;
        return i.domEvent = n.domEvent,
        i.stoppable = !0,
        i.stop = () => n.stop(),
        i.detail = {
            latLng: ((r = n.latLng) == null ? void 0 : r.toJSON()) || null,
            placeId: n.placeId
        },
        i
    }
    return o
}
const W = {
    onBoundsChanged: "bounds_changed",
    onCenterChanged: "center_changed",
    onClick: "click",
    onContextmenu: "contextmenu",
    onDblclick: "dblclick",
    onDrag: "drag",
    onDragend: "dragend",
    onDragstart: "dragstart",
    onHeadingChanged: "heading_changed",
    onIdle: "idle",
    onIsFractionalZoomEnabledChanged: "isfractionalzoomenabled_changed",
    onMapCapabilitiesChanged: "mapcapabilities_changed",
    onMapTypeIdChanged: "maptypeid_changed",
    onMousemove: "mousemove",
    onMouseout: "mouseout",
    onMouseover: "mouseover",
    onProjectionChanged: "projection_changed",
    onRenderingTypeChanged: "renderingtype_changed",
    onTilesLoaded: "tilesloaded",
    onTiltChanged: "tilt_changed",
    onZoomChanged: "zoom_changed",
    onCameraChanged: "bounds_changed"
}
  , ge = ["bounds_changed", "center_changed", "heading_changed", "tilt_changed", "zoom_changed"]
  , me = ["click", "contextmenu", "dblclick", "mousemove", "mouseout", "mouseover"]
  , pe = Object.keys(W);
function H(t, e) {
    const n = a.useRef(void 0);
    (!n.current || !ne(e, n.current)) && (n.current = e),
    a.useEffect(t, n.current)
}
const he = new Set(["backgroundColor", "clickableIcons", "controlSize", "disableDefaultUI", "disableDoubleClickZoom", "draggable", "draggableCursor", "draggingCursor", "fullscreenControl", "fullscreenControlOptions", "gestureHandling", "headingInteractionEnabled", "isFractionalZoomEnabled", "keyboardShortcuts", "mapTypeControl", "mapTypeControlOptions", "mapTypeId", "maxZoom", "minZoom", "noClear", "panControl", "panControlOptions", "restriction", "rotateControl", "rotateControlOptions", "scaleControl", "scaleControlOptions", "scrollwheel", "streetView", "streetViewControl", "streetViewControlOptions", "styles", "tiltInteractionEnabled", "zoomControl", "zoomControlOptions"]);
function ve(t, e) {
    const n = {}
      , o = Object.keys(e);
    for (const r of o)
        he.has(r) && (n[r] = e[r]);
    H( () => {
        t && t.setOptions(n)
    }
    , [n])
}
function J() {
    var t;
    return ((t = a.useContext(T)) == null ? void 0 : t.status) || A.NOT_LOADED
}
function Ce(t, e) {
    const {viewport: n, viewState: o} = e
      , r = !!n;
    return a.useLayoutEffect( () => {
        if (!t || !o)
            return;
        const {latitude: i, longitude: s, bearing: l, pitch: d, zoom: f} = o;
        t.moveCamera({
            center: {
                lat: i,
                lng: s
            },
            heading: l,
            tilt: d,
            zoom: f + 1
        })
    }
    , [t, o]),
    r
}
function ye(t) {
    return !t || typeof t != "object" || !("lat"in t && "lng"in t) ? !1 : Number.isFinite(t.lat) && Number.isFinite(t.lng)
}
function V(t) {
    return ye(t) ? t : t.toJSON()
}
function Ee(t, e, n) {
    const o = n.center ? V(n.center) : null;
    let r = null
      , i = null;
    o && Number.isFinite(o.lat) && Number.isFinite(o.lng) && (r = o.lat,
    i = o.lng);
    const s = Number.isFinite(n.zoom) ? n.zoom : null
      , l = Number.isFinite(n.heading) ? n.heading : null
      , d = Number.isFinite(n.tilt) ? n.tilt : null;
    a.useLayoutEffect( () => {
        if (!t)
            return;
        const f = {};
        let c = !1;
        r !== null && i !== null && (e.current.center.lat !== r || e.current.center.lng !== i) && (f.center = {
            lat: r,
            lng: i
        },
        c = !0),
        s !== null && e.current.zoom !== s && (f.zoom = s,
        c = !0),
        l !== null && e.current.heading !== l && (f.heading = l,
        c = !0),
        d !== null && e.current.tilt !== d && (f.tilt = d,
        c = !0),
        c && t.moveCamera(f)
    }
    )
}
const be = () => {
    const t = {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 999,
        display: "flex",
        flexFlow: "column nowrap",
        textAlign: "center",
        justifyContent: "center",
        fontSize: ".8rem",
        color: "rgba(0,0,0,0.6)",
        background: "#dddddd",
        padding: "1rem 1.5rem"
    };
    return y.createElement("div", {
        style: t
    }, y.createElement("h2", null, "Error: AuthFailure"), y.createElement("p", null, "A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ", y.createElement("code", null, "APIProvider.apiKey"), " prop is correct. Check the error-message in the console for further details."))
}
;
function we() {
    const [t,e] = a.useState(null)
      , n = a.useCallback(o => e(o), [e]);
    return [t, n]
}
function K() {
    return J() === A.LOADED
}
function Le() {
    const [,t] = a.useReducer(e => e + 1, 0);
    return t
}
function Oe(t, e) {
    const n = t.getCenter()
      , o = t.getZoom()
      , r = t.getHeading() || 0
      , i = t.getTilt() || 0
      , s = t.getBounds();
    (!n || !s || !Number.isFinite(o)) && console.warn("[useTrackedCameraState] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),
    Object.assign(e.current, {
        center: (n == null ? void 0 : n.toJSON()) || {
            lat: 0,
            lng: 0
        },
        zoom: o || 0,
        heading: r,
        tilt: i
    })
}
function Me(t) {
    const e = Le()
      , n = a.useRef({
        center: {
            lat: 0,
            lng: 0
        },
        heading: 0,
        tilt: 0,
        zoom: 0
    });
    return a.useEffect( () => {
        if (!t)
            return;
        const o = google.maps.event.addListener(t, "bounds_changed", () => {
            Oe(t, n),
            e()
        }
        );
        return () => o.remove()
    }
    , [t, e]),
    n
}
const Se = ["id", "defaultBounds", "defaultCenter", "defaultZoom", "defaultHeading", "defaultTilt", "reuseMaps", "renderingType", "colorScheme"]
  , Ie = ["padding"];
class F {
    static has(e) {
        return this.entries[e] && this.entries[e].length > 0
    }
    static pop(e) {
        return this.entries[e] && this.entries[e].pop() || null
    }
    static push(e, n) {
        this.entries[e] || (this.entries[e] = []),
        this.entries[e].push(n)
    }
}
F.entries = {};
function ke(t, e) {
    const n = K()
      , [o,r] = a.useState(null)
      , [i,s] = we()
      , l = Me(o)
      , {id: d, defaultBounds: f, defaultCenter: c, defaultZoom: h, defaultHeading: g, defaultTilt: p, reuseMaps: u, renderingType: m, colorScheme: O} = t
      , v = P(t, Se)
      , E = t.zoom !== void 0 || t.defaultZoom !== void 0
      , w = t.center !== void 0 || t.defaultCenter !== void 0;
    !f && (!E || !w) && console.warn("<Map> component is missing configuration. You have to provide zoom and center (via the `zoom`/`defaultZoom` and `center`/`defaultCenter` props) or specify the region to show using `defaultBounds`. See https://visgl.github.io/react-google-maps/docs/api-reference/components/map#required"),
    !v.center && c && (v.center = c),
    !v.zoom && Number.isFinite(h) && (v.zoom = h),
    !v.heading && Number.isFinite(g) && (v.heading = g),
    !v.tilt && Number.isFinite(p) && (v.tilt = p);
    for (const C of Object.keys(v))
        v[C] === void 0 && delete v[C];
    const M = a.useRef(void 0);
    return a.useEffect( () => {
        if (!i || !n)
            return;
        const {addMapInstance: C, removeMapInstance: b} = e
          , {mapId: S} = t
          , I = `${S || "default"}:${m || "default"}:${O || "LIGHT"}`;
        let k, L;
        if (u && F.has(I) ? (L = F.pop(I),
        k = L.getDiv(),
        i.appendChild(k),
        L.setOptions(v),
        setTimeout( () => L.setCenter(L.getCenter()), 0)) : (k = document.createElement("div"),
        k.style.height = "100%",
        i.appendChild(k),
        L = new google.maps.Map(k,x({}, v, m ? {
            renderingType: m
        } : {}, O ? {
            colorScheme: O
        } : {}))),
        r(L),
        C(L, d),
        f) {
            const {padding: _} = f
              , R = P(f, Ie);
            L.fitBounds(R, _)
        } else
            (!E || !w) && L.fitBounds({
                east: 180,
                west: -180,
                south: -90,
                north: 90
            });
        if (M.current) {
            const {mapId: _, cameraState: R} = M.current;
            _ !== S && L.setOptions(R)
        }
        return () => {
            M.current = {
                mapId: S,
                cameraState: l.current
            },
            k.remove(),
            u ? F.push(I, L) : google.maps.event.clearInstanceListeners(L),
            r(null),
            b(d)
        }
    }
    , [i, n, d, t.mapId, t.renderingType, t.colorScheme]),
    [o, s, l]
}
const X = y.createContext(null)
  , xe = t => {
    const {children: e, id: n, className: o, style: r} = t
      , i = a.useContext(T)
      , s = J();
    if (!i)
        throw new Error("<Map> can only be used inside an <ApiProvider> component.");
    const [l,d,f] = ke(t, i);
    Ee(l, f, t),
    de(l, t),
    ve(l, t);
    const c = Ce(l, t)
      , h = !!t.controlled;
    a.useEffect( () => {
        if (l)
            return c && l.setOptions({
                disableDefaultUI: !0
            }),
            (c || h) && l.setOptions({
                gestureHandling: "none",
                keyboardShortcuts: !1
            }),
            () => {
                l.setOptions({
                    gestureHandling: t.gestureHandling,
                    keyboardShortcuts: t.keyboardShortcuts
                })
            }
    }
    , [l, c, h, t.gestureHandling, t.keyboardShortcuts]);
    const g = t.center ? V(t.center) : null;
    let p = null
      , u = null;
    g && Number.isFinite(g.lat) && Number.isFinite(g.lng) && (p = g.lat,
    u = g.lng);
    const m = a.useMemo( () => {
        var E, w, M, C, b;
        return {
            center: {
                lat: (E = p) != null ? E : 0,
                lng: (w = u) != null ? w : 0
            },
            zoom: (M = t.zoom) != null ? M : 0,
            heading: (C = t.heading) != null ? C : 0,
            tilt: (b = t.tilt) != null ? b : 0
        }
    }
    , [p, u, t.zoom, t.heading, t.tilt]);
    a.useLayoutEffect( () => {
        if (!l || !h)
            return;
        l.moveCamera(m);
        const E = l.addListener("bounds_changed", () => {
            l.moveCamera(m)
        }
        );
        return () => E.remove()
    }
    , [l, h, m]);
    const O = a.useMemo( () => x({
        width: "100%",
        height: "100%",
        position: "relative",
        zIndex: c ? -1 : 0
    }, r), [r, c])
      , v = a.useMemo( () => ({
        map: l
    }), [l]);
    return s === A.AUTH_FAILURE ? y.createElement("div", {
        style: x({
            position: "relative"
        }, o ? {} : O),
        className: o
    }, y.createElement(be, null)) : y.createElement("div", x({
        ref: d,
        "data-testid": "map",
        style: o ? void 0 : O,
        className: o
    }, n ? {
        id: n
    } : {}), l ? y.createElement(X.Provider, {
        value: v
    }, e) : null)
}
;
xe.deckGLViewProps = !0;
const Z = new Set;
function Ae(...t) {
    const e = JSON.stringify(t);
    Z.has(e) || (Z.add(e),
    console.error(...t))
}
const j = (t=null) => {
    const e = a.useContext(T)
      , {map: n} = a.useContext(X) || {};
    if (e === null)
        return Ae("useMap(): failed to retrieve APIProviderContext. Make sure that the <APIProvider> component exists and that the component you are calling `useMap()` from is a sibling of the <APIProvider>."),
        null;
    const {mapInstances: o} = e;
    return t !== null ? o[t] || null : n || o.default || null
}
;
function Y(t) {
    const e = K()
      , n = a.useContext(T);
    return a.useEffect( () => {
        !e || !n || n.importLibrary(t)
    }
    , [e, n, t]),
    (n == null ? void 0 : n.loadedLibraries[t]) || null
}
function D(t, e, n) {
    a.useEffect( () => {
        if (!t || !e || !n)
            return;
        const o = google.maps.event.addListener(t, e, n);
        return () => o.remove()
    }
    , [t, e, n])
}
function z(t, e, n) {
    a.useEffect( () => {
        t && (t[e] = n)
    }
    , [t, e, n])
}
function $(t, e, n) {
    a.useEffect( () => {
        if (!(!t || !e || !n))
            return t.addEventListener(e, n),
            () => t.removeEventListener(e, n)
    }
    , [t, e, n])
}
function Pe(t) {
    return t.content !== void 0
}
function _e(t) {
    return t.nodeType === Node.ELEMENT_NODE
}
const De = y.createContext(null)
  , Ne = {
    BOTTOM: ["50%", "100%"]
}
  , Te = ({children: t, styles: e, className: n, anchorPoint: o}) => {
    const [r,i] = o ?? Ne.BOTTOM
      , s = `translate(50%, 100%) translate(-${r}, -${i})`;
    return y.createElement("div", {
        style: {
            transform: s
        }
    }, y.createElement("div", {
        className: n,
        style: e
    }, t))
}
;
function ze(t) {
    const [e,n] = a.useState(null)
      , [o,r] = a.useState(null)
      , i = j()
      , s = Y("marker")
      , {children: l, onClick: d, className: f, onMouseEnter: c, onMouseLeave: h, onDrag: g, onDragStart: p, onDragEnd: u, collisionBehavior: m, clickable: O, draggable: v, position: E, title: w, zIndex: M} = t
      , C = a.Children.count(l);
    return a.useEffect( () => {
        if (!i || !s)
            return;
        const b = new s.AdvancedMarkerElement;
        b.map = i,
        n(b);
        let S = null;
        return C > 0 && (S = document.createElement("div"),
        S.isCustomMarker = !0,
        b.content = S,
        r(S)),
        () => {
            var I;
            b.map = null,
            (I = S) == null || I.remove(),
            n(null),
            r(null)
        }
    }
    , [i, s, C]),
    a.useEffect( () => {
        !e || !e.content || C > 0 || (e.content.className = f || "")
    }
    , [e, f, C]),
    z(e, "position", E),
    z(e, "title", w ?? ""),
    z(e, "zIndex", M),
    z(e, "collisionBehavior", m),
    a.useEffect( () => {
        e && (v !== void 0 ? e.gmpDraggable = v : g || p || u ? e.gmpDraggable = !0 : e.gmpDraggable = !1)
    }
    , [e, v, g, u, p]),
    a.useEffect( () => {
        if (!e)
            return;
        const b = O !== void 0 || !!d || !!c || !!h;
        e.gmpClickable = b,
        b && e != null && e.content && _e(e.content) && (e.content.style.pointerEvents = "none",
        e.content.firstElementChild && (e.content.firstElementChild.style.pointerEvents = "all"))
    }
    , [e, O, d, c, h]),
    D(e, "click", d),
    D(e, "drag", g),
    D(e, "dragstart", p),
    D(e, "dragend", u),
    $(e == null ? void 0 : e.element, "mouseenter", c),
    $(e == null ? void 0 : e.element, "mouseleave", h),
    [e, o]
}
const $e = a.forwardRef( (t, e) => {
    const {children: n, style: o, className: r, anchorPoint: i} = t
      , [s,l] = ze(t)
      , d = a.useMemo( () => s ? {
        marker: s
    } : null, [s]);
    return a.useImperativeHandle(e, () => s, [s]),
    l ? y.createElement(De.Provider, {
        value: d
    }, U.createPortal(y.createElement(Te, {
        anchorPoint: i,
        styles: o,
        className: r
    }, n), l)) : null
}
);
function qe() {
    const [t,e] = a.useState(null);
    return [a.useCallback(o => {
        e(o)
    }
    , []), t]
}
function Fe(t, e, n) {
    if (e != null && typeof e != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    const o = t.style;
    if (n == null) {
        if (e == null)
            return;
        for (const r in e)
            e.hasOwnProperty(r) && q(o, r, e[r]);
        return
    }
    for (const r in n)
        n.hasOwnProperty(r) && (e == null || !e.hasOwnProperty(r)) && (r.indexOf("--") === 0 ? o.setProperty(r, "") : r === "float" ? o.cssFloat = "" : o[r] = "");
    if (e != null)
        for (const r in e) {
            const i = e[r];
            e.hasOwnProperty(r) && n[r] !== i && q(o, r, i)
        }
}
function q(t, e, n) {
    const o = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? o ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : o ? t.setProperty(e, n) : typeof n == "number" && n !== 0 && !Be(e) ? t[e] = n + "px" : e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim()
}
const Re = new Set(["animationIterationCount", "aspectRatio", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridRow", "gridRowEnd", "gridRowSpan", "gridRowStart", "gridColumn", "gridColumnEnd", "gridColumnSpan", "gridColumnStart", "fontWeight", "lineClamp", "lineHeight", "opacity", "order", "orphans", "scale", "tabSize", "widows", "zIndex", "zoom", "fillOpacity", "floodOpacity", "stopOpacity", "strokeDasharray", "strokeDashoffset", "strokeMiterlimit", "strokeOpacity", "strokeWidth"]);
function Be(t) {
    return Re.has(t)
}
const Ue = ["children", "headerContent", "style", "className", "pixelOffset", "anchor", "shouldFocus", "onClose", "onCloseClick"]
  , We = t => {
    const {children: e, headerContent: n, style: o, className: r, pixelOffset: i, anchor: s, shouldFocus: l, onClose: d, onCloseClick: f} = t
      , c = P(t, Ue)
      , h = Y("maps")
      , [g,p] = a.useState(null)
      , u = a.useRef(null)
      , m = a.useRef(null);
    a.useEffect( () => {
        if (!h)
            return;
        u.current = document.createElement("div"),
        m.current = document.createElement("div");
        const E = c;
        i && (E.pixelOffset = new google.maps.Size(i[0],i[1])),
        n && (E.headerContent = typeof n == "string" ? n : m.current);
        const w = new google.maps.InfoWindow(c);
        return w.setContent(u.current),
        p(w),
        () => {
            var M, C;
            w.setContent(null),
            (M = u.current) == null || M.remove(),
            (C = m.current) == null || C.remove(),
            u.current = null,
            m.current = null,
            p(null)
        }
    }
    , [h]);
    const O = a.useRef(null);
    a.useEffect( () => {
        !g || !u.current || (Fe(u.current, o || null, O.current),
        O.current = o || null,
        r !== u.current.className && (u.current.className = r || ""))
    }
    , [g, r, o]),
    H( () => {
        if (!g)
            return;
        const E = c;
        i ? E.pixelOffset = new google.maps.Size(i[0],i[1]) : E.pixelOffset = null,
        n ? E.headerContent = typeof n == "string" ? n : m.current : E.headerContent = null,
        g.setOptions(c)
    }
    , [c, i, n]),
    D(g, "close", d),
    D(g, "closeclick", f);
    const v = j();
    return H( () => {
        if (!v || !g || s === null)
            return;
        const E = !!s
          , w = {
            map: v
        };
        if (s && (w.anchor = s,
        Pe(s) && s.content instanceof Element)) {
            const C = s.content
              , b = C == null ? void 0 : C.getBoundingClientRect();
            if (b && C != null && C.isCustomMarker) {
                var M;
                const S = (M = s.content.firstElementChild) == null ? void 0 : M.firstElementChild
                  , I = S == null ? void 0 : S.getBoundingClientRect()
                  , k = I.x - b.x + (I.width - b.width) / 2
                  , L = I.y - b.y
                  , _ = c;
                _.pixelOffset = new google.maps.Size(i ? i[0] + k : k,i ? i[1] + L : L),
                g.setOptions(_)
            }
        }
        return l !== void 0 && (w.shouldFocus = l),
        g.open(w),
        () => {
            E && g.set("anchor", null),
            g.close()
        }
    }
    , [g, s, v, l, c, i]),
    y.createElement(y.Fragment, null, u.current && U.createPortal(e, u.current), m.current !== null && U.createPortal(n, m.current))
}
  , He = ["onClick", "onDrag", "onDragStart", "onDragEnd", "onMouseOver", "onMouseOut"];
function je(t) {
    const [e,n] = a.useState(null)
      , o = j()
      , {onClick: r, onDrag: i, onDragStart: s, onDragEnd: l, onMouseOver: d, onMouseOut: f} = t
      , c = P(t, He)
      , {position: h, draggable: g} = c;
    return a.useEffect( () => {
        if (!o) {
            o === void 0 && console.error("<Marker> has to be inside a Map component.");
            return
        }
        const p = new google.maps.Marker(c);
        return p.setMap(o),
        n(p),
        () => {
            p.setMap(null),
            n(null)
        }
    }
    , [o]),
    a.useEffect( () => {
        if (!e)
            return;
        const p = e
          , u = google.maps.event;
        return r && u.addListener(p, "click", r),
        i && u.addListener(p, "drag", i),
        s && u.addListener(p, "dragstart", s),
        l && u.addListener(p, "dragend", l),
        d && u.addListener(p, "mouseover", d),
        f && u.addListener(p, "mouseout", f),
        e.setDraggable(!!g),
        () => {
            u.clearInstanceListeners(p)
        }
    }
    , [e, g, r, i, s, l, d, f]),
    a.useEffect( () => {
        e && c && e.setOptions(c)
    }
    , [e, c]),
    a.useEffect( () => {
        g || !h || !e || e.setPosition(h)
    }
    , [g, h, e]),
    e
}
a.forwardRef( (t, e) => {
    const n = je(t);
    return a.useImperativeHandle(e, () => n, [n]),
    y.createElement(y.Fragment, null)
}
);
export {Ze as A, We as I, xe as M, $e as a, qe as u};
